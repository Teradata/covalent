const fs = require('fs');
const path = require('path');

// Paths
const componentsConfigPath = path.resolve(
  __dirname,
  '../libs/components/component-config.json',
);
const packageJsonPath = path.resolve(
  __dirname,
  '../libs/components/package.json',
);
const indexTsPath = path.resolve(__dirname, '../libs/components/src/index.ts');

// Read components-config.json
let componentsConfig = JSON.parse(
  fs.readFileSync(componentsConfigPath, 'utf8'),
);

// Sort components alphabetically by `name`
componentsConfig = componentsConfig.sort((a, b) =>
  a.name.localeCompare(b.name),
);

// Generate exports object for package.json
const exportsObject = componentsConfig.reduce((exportsObj, component) => {
  const componentName = path.basename(component.path); // Get last directory from path
  exportsObj[`./${componentName}`] = {
    import: `./${componentName}.mjs`,
    require: `./${componentName}.js`,
  };
  return exportsObj;
}, {});

// Read package.json
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Update package.json with the new exports
packageJson.exports = {
  '.': {
    sass: './index.scss',
    style: './covalent.css',
    import: './index.mjs',
    require: './index.js',
  },
  './icon/icon.theme': './icon/_icon.theme.scss',
  './data-table.theme': './data-table/_data-table.theme.scss',
  './theme': {
    sass: './theme/_index.scss',
  }, // Other existing exports
  ...exportsObject,
};

// Write back to package.json
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8');

// Generate exports for index.ts
const indexExports = componentsConfig
  .map((component) => `export * from '${component.path}';`)
  .join('\n');

// Write to index.ts
fs.writeFileSync(indexTsPath, indexExports, 'utf8');

console.log(
  'Successfully updated package.json and index.ts with sorted dynamic exports!',
);
