const fs = require('node:fs');
const path = require('node:path');

const workspaceRoot = path.resolve(__dirname, '..');
const defaultManifestPath = path.join(
  workspaceRoot,
  'libs/icons/icons.manifest.json',
);
const defaultSvgDirectory = path.join(workspaceRoot, 'libs/icons/svgs');

function validateIconManifest({
  manifestPath = defaultManifestPath,
  svgDirectory = defaultSvgDirectory,
} = {}) {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  const icons = manifest.icons;

  if (!icons || typeof icons !== 'object') {
    return ['The manifest must contain an "icons" object.'];
  }

  const svgKeys = fs
    .readdirSync(svgDirectory, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith('.svg'))
    .map((entry) => `svgs/${entry.name}`)
    .sort();
  const manifestKeys = Object.keys(icons).sort();
  const svgKeySet = new Set(svgKeys);
  const manifestKeySet = new Set(manifestKeys);
  const errors = [];

  for (const svgKey of svgKeys) {
    if (!manifestKeySet.has(svgKey)) {
      errors.push(`Missing manifest entry: ${svgKey}`);
    }
  }

  for (const manifestKey of manifestKeys) {
    if (!svgKeySet.has(manifestKey)) {
      errors.push(`Manifest entry has no matching SVG: ${manifestKey}`);
    }
  }

  for (const manifestKey of manifestKeys) {
    const icon = icons[manifestKey];

    if (icon?.is3rdParty === true) {
      for (const field of ['sourceUrl', 'copyrightHolder']) {
        if (typeof icon[field] !== 'string' || icon[field].trim() === '') {
          errors.push(`Third-party icon is missing ${field}: ${manifestKey}`);
        }
      }
    }

    if (!/^\d{4}-\d{2}-\d{2}$/.test(icon?.retrievedOn ?? '')) {
      errors.push(`Icon has an invalid retrievedOn date: ${manifestKey}`);
    }

    if (icon?.verdict !== 'approved') {
      errors.push(
        `Icon is not approved: ${manifestKey} (verdict: ${JSON.stringify(
          icon?.verdict,
        )})`,
      );
    }
  }

  return errors;
}

function main() {
  const errors = validateIconManifest();

  if (errors.length > 0) {
    console.error(
      `Icon manifest validation failed with ${errors.length} error(s):`,
    );
    for (const error of errors) {
      console.error(`- ${error}`);
    }
    process.exitCode = 1;
    return;
  }

  console.log('Icon manifest validation passed.');
}

if (require.main === module) {
  main();
}

module.exports = { validateIconManifest };
