module.exports = {
  extends: ['stylelint-config-prettier'],
  plugins: ['./selector-no-deprecated-deep/index.js'],
  rules: {
    'td/selector-no-deprecated-deep': true,
    'color-no-invalid-hex': true,
    'function-calc-no-unspaced-operator': true,
    'function-name-case': 'lower',
    'function-url-quotes': 'always',
    'function-whitespace-after': 'always',
    'length-zero-no-unit': true,
    'string-no-newline': true,
    'unit-no-unknown': true,
    'unit-whitelist': ['px', '%', 'deg', 'ms', 'em', 'vh', 'vw', 'vmin', 's', 'rem'],
    'shorthand-property-no-redundant-values': true,
    'property-no-unknown': true,
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: ['consecutive-duplicates-with-different-values'],
      },
    ],
    'declaration-block-single-line-max-declarations': 1,
    'declaration-property-value-blacklist': [
      {
        '/.*/': ['initial'],
      },
      {
        message: 'The `initial` value is not supported in IE.',
      },
    ],
    'block-no-empty': true,
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-colon-notation': 'double',
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['ng-deep'],
      },
    ],
    'selector-type-case': 'lower',
    'selector-max-id': 0,
    'no-duplicate-selectors': true,
    'no-invalid-double-slash-comments': true,
    'media-feature-name-no-unknown': true,
  },
};
