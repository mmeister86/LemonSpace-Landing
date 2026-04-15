import type { APIRoute } from 'astro';

import { getResendClient, isDuplicateContactError } from '../../lib/resend';

type Lang = 'en' | 'de';
type WaitlistState = 'success' | 'already' | 'invalid' | 'error';
type ConfirmationCopy = {
  subject: string;
  text: string;
  html: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const MESSAGES: Record<Lang, Record<WaitlistState, string>> = {
  en: {
    success: 'You are on the list. Thank you.',
    already: 'You are already on the waitlist.',
    invalid: 'Please enter a valid email address.',
    error: 'Something went wrong. Please try again in a moment.',
  },
  de: {
    success: 'Du stehst auf der Liste. Danke.',
    already: 'Du stehst bereits auf der Warteliste.',
    invalid: 'Bitte gib eine gueltige E-Mail-Adresse ein.',
    error: 'Etwas ist schiefgelaufen. Bitte versuche es gleich erneut.',
  },
};

function confirmationCopy(lang: Lang): ConfirmationCopy {
  if (lang === 'de') {
    return {
      subject: 'Du stehst auf der LemonSpace Warteliste',
      text: [
        'Hi,',
        '',
        'danke fuer dein Interesse an LemonSpace.',
        'Du bist auf der Warteliste und wir melden uns, sobald die Beta oeffnet.',
        '',
        'Viele Gruesse',
        'Matthias von LemonSpace',
      ].join('\n'),
      html: [
        '<p>Hi,</p>',
        '<p>danke fuer dein Interesse an LemonSpace.</p>',
        '<p>Du bist auf der Warteliste und wir melden uns, sobald die Beta oeffnet.</p>',
        '<p>Viele Gruesse<br />Matthias von LemonSpace</p>',
      ].join(''),
    };
  }

  return {
    subject: "You're on the LemonSpace waitlist",
    text: [
      'Hi,',
      '',
      'thanks for your interest in LemonSpace.',
      "You're on the waitlist and we'll email you as soon as the beta opens.",
      '',
      'Best,',
      'Matthias from LemonSpace',
    ].join('\n'),
    html: [
      '<p>Hi,</p>',
      '<p>thanks for your interest in LemonSpace.</p>',
      "<p>You're on the waitlist and we'll email you as soon as the beta opens.</p>",
      '<p>Best,<br />Matthias from LemonSpace</p>',
    ].join(''),
  };
}

async function sendWaitlistConfirmationEmail(params: {
  to: string;
  lang: Lang;
  resend: ReturnType<typeof getResendClient>;
}) {
  const fromEmail = import.meta.env.RESEND_FROM_EMAIL;
  const replyTo = import.meta.env.RESEND_REPLY_TO;

  if (!fromEmail) {
    console.warn('RESEND_FROM_EMAIL is not configured. Skipping waitlist confirmation email.');
    return;
  }

  const copy = confirmationCopy(params.lang);

  const { error } = await params.resend.emails.send({
    from: fromEmail,
    to: [params.to],
    subject: copy.subject,
    text: copy.text,
    html: copy.html,
    ...(replyTo ? { replyTo } : {}),
  });

  if (error) {
    console.error('Waitlist confirmation email failed:', {
      name: (error as { name?: string })?.name,
      message: (error as { message?: string })?.message,
      statusCode: (error as { statusCode?: number })?.statusCode,
    });
  }
}

function toSafeEmailTag(email: string) {
  const parts = email.split('@');
  if (parts.length !== 2) {
    return 'invalid-email';
  }

  const localLen = parts[0]?.length ?? 0;
  const domain = parts[1] || 'unknown-domain';
  return `localLen:${localLen}|domain:${domain}`;
}

function isMissingContactPropertyError(error: unknown) {
  if (!error || typeof error !== 'object') {
    return false;
  }

  const statusCode = (error as { statusCode?: number }).statusCode;
  const message = ((error as { message?: string }).message || '').toLowerCase();

  return statusCode === 422 && message.includes('properties do not exist');
}

function detectLang(rawLang: FormDataEntryValue | null, acceptLanguage: string | null): Lang {
  if (rawLang === 'de' || rawLang === 'en') {
    return rawLang;
  }

  if ((acceptLanguage || '').toLowerCase().startsWith('de')) {
    return 'de';
  }

  return 'en';
}

function responseBody(lang: Lang, state: WaitlistState) {
  return {
    ok: state === 'success' || state === 'already',
    state,
    message: MESSAGES[lang][state],
  };
}

function wantsHtml(request: Request) {
  const accept = request.headers.get('accept') || '';
  return accept.includes('text/html');
}

function jsonResponse(lang: Lang, state: WaitlistState, status: number) {
  return new Response(JSON.stringify(responseBody(lang, state)), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
  });
}

function redirectResponse(request: Request, state: WaitlistState) {
  const redirectUrl = new URL('/', request.url);
  redirectUrl.hash = 'waitlist';
  redirectUrl.searchParams.set('waitlist', state);

  return Response.redirect(redirectUrl, 303);
}

export const POST: APIRoute = async ({ request }) => {
  let formData: FormData;

  try {
    formData = await request.formData();
  } catch {
    const lang = detectLang(null, request.headers.get('accept-language'));
    return jsonResponse(lang, 'invalid', 400);
  }

  const lang = detectLang(formData.get('lang'), request.headers.get('accept-language'));
  const htmlRequest = wantsHtml(request);

  const honeypot = String(formData.get('company') || '').trim();
  if (honeypot) {
    if (htmlRequest) {
      return redirectResponse(request, 'success');
    }
    return jsonResponse(lang, 'success', 200);
  }

  const rawEmail = String(formData.get('email') || '').trim().toLowerCase();
  if (!EMAIL_REGEX.test(rawEmail)) {
    if (htmlRequest) {
      return redirectResponse(request, 'invalid');
    }
    return jsonResponse(lang, 'invalid', 400);
  }

  try {
    const resend = getResendClient();
    const properties = {
      source: 'landing',
      locale: lang,
      submitted_at: new Date().toISOString(),
    };

    console.info('Waitlist create attempt', {
      emailTag: toSafeEmailTag(rawEmail),
      propertyKeys: Object.keys(properties),
    });

    const basePayload = {
      email: rawEmail,
      unsubscribed: false,
    };

    let contactResponse = await resend.contacts.create({
      ...basePayload,
      properties,
    });

    if (contactResponse.error && isMissingContactPropertyError(contactResponse.error)) {
      console.warn('Waitlist property schema mismatch. Retrying contact creation without properties.', {
        emailTag: toSafeEmailTag(rawEmail),
      });

      contactResponse = await resend.contacts.create(basePayload);
    }

    const { error } = contactResponse;

    if (error) {
      console.error('Waitlist contact create raw error', {
        name: (error as { name?: string })?.name,
        message: (error as { message?: string })?.message,
        statusCode: (error as { statusCode?: number })?.statusCode,
      });

      if (isDuplicateContactError(error)) {
        if (htmlRequest) {
          return redirectResponse(request, 'already');
        }
        return jsonResponse(lang, 'already', 200);
      }

      console.error('Waitlist contact create failed:', error);

      if (htmlRequest) {
        return redirectResponse(request, 'error');
      }
      return jsonResponse(lang, 'error', 500);
    }

    await sendWaitlistConfirmationEmail({
      to: rawEmail,
      lang,
      resend,
    });

    if (htmlRequest) {
      return redirectResponse(request, 'success');
    }
    return jsonResponse(lang, 'success', 200);
  } catch (error) {
    if (isDuplicateContactError(error)) {
      if (htmlRequest) {
        return redirectResponse(request, 'already');
      }
      return jsonResponse(lang, 'already', 200);
    }

    console.error('Waitlist API unexpected failure:', error);

    if (htmlRequest) {
      return redirectResponse(request, 'error');
    }
    return jsonResponse(lang, 'error', 500);
  }
};
