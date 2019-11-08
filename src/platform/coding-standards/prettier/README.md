# Covalent prettier config

Create a `prettier.config.js` file at the root of the project with the following content:

```javascript
var defaultConfig = require('./node_modules/@covalent/coding-standards/prettier/prettier.config.js');
module.exports = defaultConfig;
```

Create a `.prettierignore` file at the root level and include files you do not want to prettify. Example:

```
node_modules
package-lock.json
yarn.lock
/bin
/deploy
/**/dist
/coverage
```

## Create npm scripts

`package.json`

```json
"prettier:check": "./node_modules/.bin/prettier --check './**/*.{ts,js,json,css,scss,html,yml,md}'",
"prettier": "./node_modules/.bin/prettier --write './**/*.{ts,js,json,css,scss,html,yml,md}'"
```


## Run Prettier

- `npm run prettier:check` - checks that files are prettified
- `npm run prettier` - prettifies files
