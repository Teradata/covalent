const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const test = require('node:test');

const { validateIconManifest } = require('./validate-icon-manifest');

function createFixture(t, { icons, svgNames }) {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'icon-manifest-'));
  const svgDirectory = path.join(directory, 'svgs');
  const manifestPath = path.join(directory, 'icons.manifest.json');

  fs.mkdirSync(svgDirectory);
  for (const svgName of svgNames) {
    fs.writeFileSync(path.join(svgDirectory, svgName), '<svg></svg>');
  }
  const iconsWithDates = Object.fromEntries(
    Object.entries(icons).map(([name, icon]) => [
      name,
      { retrievedOn: '2026-09-22', ...icon },
    ]),
  );
  fs.writeFileSync(manifestPath, JSON.stringify({ icons: iconsWithDates }));
  t.after(() => fs.rmSync(directory, { recursive: true, force: true }));

  return { manifestPath, svgDirectory };
}

test('accepts matching SVG and approved manifest entries', (t) => {
  const fixture = createFixture(t, {
    icons: {
      'svgs/sample.svg': { verdict: 'approved' },
    },
    svgNames: ['sample.svg'],
  });

  assert.deepEqual(validateIconManifest(fixture), []);
});

test('reports missing and stale manifest entries', (t) => {
  const fixture = createFixture(t, {
    icons: {
      'svgs/stale.svg': { verdict: 'approved' },
    },
    svgNames: ['missing.svg'],
  });

  assert.deepEqual(validateIconManifest(fixture), [
    'Missing manifest entry: svgs/missing.svg',
    'Manifest entry has no matching SVG: svgs/stale.svg',
  ]);
});

test('rejects an icon without an approved verdict', (t) => {
  const fixture = createFixture(t, {
    icons: {
      'svgs/sample.svg': { verdict: 'pending' },
    },
    svgNames: ['sample.svg'],
  });

  assert.deepEqual(validateIconManifest(fixture), [
    'Icon is not approved: svgs/sample.svg (verdict: "pending")',
  ]);
});

test('requires provenance fields for third-party icons', (t) => {
  const fixture = createFixture(t, {
    icons: {
      'svgs/sample.svg': {
        is3rdParty: true,
        sourceUrl: null,
        retrievedOn: null,
        copyrightHolder: null,
        originalAuthor: null,
        verdict: 'approved',
      },
    },
    svgNames: ['sample.svg'],
  });

  assert.deepEqual(validateIconManifest(fixture), [
    'Third-party icon is missing sourceUrl: svgs/sample.svg',
    'Third-party icon is missing copyrightHolder: svgs/sample.svg',
    'Icon has an invalid retrievedOn date: svgs/sample.svg',
  ]);
});

test('allows an unknown original author for a sourced third-party icon', (t) => {
  const fixture = createFixture(t, {
    icons: {
      'svgs/sample.svg': {
        is3rdParty: true,
        sourceUrl: 'https://example.com/icon.svg',
        retrievedOn: '2026-09-22',
        copyrightHolder: 'Example Organization',
        originalAuthor: null,
        verdict: 'approved',
      },
    },
    svgNames: ['sample.svg'],
  });

  assert.deepEqual(validateIconManifest(fixture), []);
});

test('requires a retrievedOn date for every icon', (t) => {
  const fixture = createFixture(t, {
    icons: {
      'svgs/sample.svg': {
        retrievedOn: null,
        verdict: 'approved',
      },
    },
    svgNames: ['sample.svg'],
  });

  assert.deepEqual(validateIconManifest(fixture), [
    'Icon has an invalid retrievedOn date: svgs/sample.svg',
  ]);
});
