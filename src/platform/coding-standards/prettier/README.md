# Integrating Prettier into your project

## Install dependencies

Install [Prettier](https://github.com/prettier/prettier)

`npm install prettier --save-dev`

Install appropriate linter rule sets that disable rules that would conflict with Prettier.

If you use TSLint, install [tslint-config-prettier](https://github.com/prettier/tslint-config-prettier)

`npm install tslint-config-prettier --save-dev`

If you use stylelint, install [stylelint-config-prettier](https://github.com/prettier/stylelint-config-prettier)

`npm install stylelint-config-prettier --save-dev`

## Modify linter configs

Update appropriate linter configs to have the newly installed linter rule sets at the end of the extends arrays. For example:

`tslint.json`

```json
{
  "extends": ["./node_modules/@covalent/coding-standards/tslint/tslint.json", "tslint-config-prettier"]
}
```

`stylelint.config.js`

```json
{
  "extends": ["./node_modules/@covalent/coding-standards/stylelint/stylelint.config.js", "stylelint-config-prettier"]
}
```

## Add Prettier config files

Create a `prettier.config.js` file at the root level that references the `prettier.config.js` file located inside this repo.

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

## Create an npm script

`package.json`

```json
"prettier": "./node_modules/.bin/prettier --write './**/*.{ts,js,json,css,scss,html,yml,md}'",
```

## Setup a pre commit hook

Install [husky](https://github.com/typicode/husky)

`npm install husky@^2.7.0--save-dev`

Install [pretty-quick](https://github.com/azz/pretty-quick)

`npm install pretty-quick --save-dev`

Add the following to your `package.json`

```json
  "husky": {
    "hooks": {
      "pre-commit": "pretty-quick --staged --no-restage --bail"
    }
  },
```

## Run Prettier

`npm run prettier`

Enjoy!

## Bonus

Verify that checked-in code has been prettified as part of the CI/CD pipeline.

Add the following script

```json
"prettier:check": "./node_modules/.bin/prettier --check './**/*.{ts,js,json,css,scss,html,yml,md}'"
```

Check that code has been prettified:

`npm run prettier:check`
