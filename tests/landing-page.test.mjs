import { readFile, stat } from 'node:fs/promises';
import test from 'node:test';
import assert from 'node:assert/strict';

const root = new URL('../', import.meta.url);

async function read(path) {
  return readFile(new URL(path, root), 'utf8');
}

test('landing page is composed from standalone-inspired modules', async () => {
  const expectedComponents = [
    'src/components/landing/LandingNav.astro',
    'src/components/landing/LandingHero.astro',
    'src/components/landing/LandingProblem.astro',
    'src/components/landing/LandingManifesto.astro',
    'src/components/landing/LandingHow.astro',
    'src/components/landing/LandingFeatures.astro',
    'src/components/landing/LandingHosting.astro',
    'src/components/landing/LandingPricing.astro',
    'src/components/landing/LandingWaitlist.astro',
    'src/components/landing/LandingFooter.astro',
  ];

  await Promise.all(expectedComponents.map((path) => stat(new URL(path, root))));

  const renderer = await read('src/pages/_landing.astro');
  for (const path of expectedComponents) {
    const name = path.split('/').pop().replace('.astro', '');
    assert.ok(renderer.includes(`import ${name} from '../components/landing/${name}.astro'`));
    assert.ok(renderer.includes(`<${name}`));
  }
});

test('landing page uses shared localized copy and exposes explicit locale routes', async () => {
  const index = await read('src/pages/index.astro');
  const german = await read('src/pages/de.astro');
  const english = await read('src/pages/en.astro');
  const renderer = await read('src/pages/_landing.astro');

  assert.match(index, /detectLocaleFromRequest/);
  assert.match(index, /<LandingPage/);
  assert.match(index, /copy=\{copy\}/);
  assert.match(german, /<LandingPage/);
  assert.match(german, /copy=\{de\}/);
  assert.match(english, /<LandingPage/);
  assert.match(english, /copy=\{en\}/);
  assert.match(renderer, /<html lang=\{lang\}/);
  assert.match(renderer, /<LandingNav[^>]*copy=\{copy\.nav\}[^>]*lang=\{lang\}/s);
  assert.match(renderer, /formData\.set\('lang', lang\)/);
  assert.doesNotMatch(renderer, /formData\.set\('lang', 'de'\)/);
});

test('localized copy files cover redesigned landing sections', async () => {
  const [de, en] = await Promise.all([
    read('src/i18n/de.json').then(JSON.parse),
    read('src/i18n/en.json').then(JSON.parse),
  ]);

  for (const copy of [de, en]) {
    assert.equal(typeof copy.hero.canvas.filename, 'string');
    assert.equal(copy.hero.proof.length, 2);
    assert.equal(copy.hero.strip.length, 8);
    assert.equal(copy.problem.tabs.length, 8);
    assert.equal(copy.problem.events.length, 6);
    assert.equal(copy.problem.items.length, 3);
    assert.equal(copy.how.steps.length, 4);
    assert.equal(copy.features.items.length, 6);
    assert.equal(copy.hosting.bullets.length, 3);
    assert.equal(copy.pricing.plans.length, 4);
    assert.equal(copy.footer.groups.length, 3);
    assert.equal(copy.locale.switchLabel.length > 0, true);
  }

  assert.equal(de.hero.headline.em, 'Kampagnen');
  assert.equal(en.hero.headline.em, 'campaigns');
  assert.equal(de.pricing.unavailable, 'Noch nicht verfügbar');
  assert.equal(en.pricing.unavailable, 'Not available yet');
});

test('navigation links follow the rendered section order', async () => {
  const nav = await read('src/components/landing/LandingNav.astro');
  const order = ['#how', '#features', '#hosting', '#pricing', '#waitlist'];
  const positions = order.map((href) => nav.indexOf(`href="${href}"`));

  assert.ok(positions.every((position) => position !== -1));
  assert.deepEqual([...positions].sort((a, b) => a - b), positions);
});

test('waitlist form keeps the working API contract', async () => {
  const form = await read('src/components/WaitlistSignup.astro');

  assert.match(form, /method="POST"/);
  assert.match(form, /action="\/api\/waitlist"/);
  assert.match(form, /name="email"/);
  assert.match(form, /type="email"/);
  assert.match(form, /name="company"/);
  assert.match(form, /data-waitlist-lang/);
  assert.match(form, /data-waitlist-form/);
  assert.match(form, /value=\{lang\}/);
});

test('standalone visual language is present in shared styles', async () => {
  const css = await read('src/styles/global.css');

  assert.match(css, /--primary:\s*#266600/);
  assert.match(css, /--primary-3:\s*#a3e635/);
  assert.match(css, /--night:\s*#090b07/);
  assert.match(css, /Green and Black Bold Creative Brief Presentation|linear-gradient\(90deg/s);
  assert.match(css, /\.canvas-frame/);
  assert.match(css, /\.node/);
  assert.match(css, /\.feature/);
  assert.match(css, /\.terminal/);
});

test('pricing plan controls are disabled until MVP registration opens', async () => {
  const pricing = await read('src/components/landing/LandingPricing.astro');
  const css = await read('src/styles/global.css');

  assert.doesNotMatch(pricing, /<a\s+href="#waitlist"\s+class="price-cta"/);
  assert.match(pricing, /copy\.plans\.map/);
  assert.match(pricing, /class="price-cta"/);
  assert.match(pricing, /copy\.plans\.map/);
  assert.match(pricing, /aria-disabled="true"/);
  assert.match(pricing, /copy\.unavailable/);
  assert.match(css, /\.price-cta\[disabled\]/);
  assert.match(css, /cursor:\s*not-allowed/);
});
