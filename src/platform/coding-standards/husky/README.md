# Covalent husky hooks

Create a `.huskyrc.js` file at the root of your project.

## Basic setup:

```js
const { covalentHooks, generateHuskyConfig } = require('./node_modules/@covalent/coding-standards/husky/husky.js');
const huskyHooks = generateHuskyConfig(covalentHooks());
module.exports = huskyHooks;
```

## Extend hooks setup

```js
const { covalentHooks, generateHuskyConfig } = require('./node_modules/@covalent/coding-standards/husky/husky.js');
const hooks = covalentHooks();
hooks['pre-commit'] = [...hooks['pre-commit'], 'npm audit'];
const huskyHooks = generateHuskyConfig(hooks);
module.exports = huskyHooks;
```
