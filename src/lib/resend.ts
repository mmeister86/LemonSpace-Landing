import { Resend } from 'resend';

let resendClient: Resend | null = null;

export function getResendClient() {
  const apiKey = import.meta.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error('Missing RESEND_API_KEY environment variable');
  }

  if (!resendClient) {
    resendClient = new Resend(apiKey);
  }

  return resendClient;
}

export function isDuplicateContactError(error: unknown) {
  if (!error) {
    return false;
  }

  let raw = '';

  if (typeof error === 'string') {
    raw = error;
  } else if (error instanceof Error) {
    raw = `${error.name} ${error.message}`;
  } else {
    try {
      raw = JSON.stringify(error);
    } catch {
      raw = String(error);
    }
  }

  const normalized = raw.toLowerCase();

  return (
    normalized.includes('already exists') ||
    normalized.includes('contact already') ||
    normalized.includes('already in this audience') ||
    normalized.includes('duplicate') ||
    normalized.includes('conflict')
  );
}
