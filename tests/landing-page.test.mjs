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

  const index = await read('src/pages/index.astro');
  for (const path of expectedComponents) {
    const name = path.split('/').pop().replace('.astro', '');
    assert.ok(index.includes(`import ${name} from '../components/landing/${name}.astro'`));
    assert.ok(index.includes(`<${name}`));
  }
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
});

test('standalone visual language is present in shared styles', async () => {
  const css = await read('src/styles/global.css');

  assert.match(css, /--primary:\s*#2c770a/);
  assert.match(css, /--primary-2:\s*#37930c/);
  assert.match(css, /--accent:\s*#e8d44d/);
  assert.match(css, /\.canvas-frame/);
  assert.match(css, /\.node/);
  assert.match(css, /\.feature/);
  assert.match(css, /\.terminal/);
});

test('pricing plan controls are disabled until MVP registration opens', async () => {
  const pricing = await read('src/components/landing/LandingPricing.astro');
  const css = await read('src/styles/global.css');

  assert.doesNotMatch(pricing, /<a\s+href="#waitlist"\s+class="price-cta"/);
  assert.equal((pricing.match(/class="price-cta[^"]*"/g) || []).length, 4);
  assert.equal((pricing.match(/\sdisabled\s/g) || []).length, 4);
  assert.equal((pricing.match(/aria-disabled="true"/g) || []).length, 4);
  assert.match(pricing, /Noch nicht verfügbar/);
  assert.match(css, /\.price-cta\[disabled\]/);
  assert.match(css, /cursor:\s*not-allowed/);
});
