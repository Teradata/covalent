module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['./selector-no-deprecated-deep/index.js'],
  rules: {
    'td/selector-no-deprecated-deep': true,
    'function-url-quotes': 'always',
    'shorthand-property-no-redundant-values': true,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['ng-deep'],
      },
    ],
    'selector-max-id': 0,
    'at-rule-no-unknown': null,
    'selector-type-no-unknown': null,
    'no-empty-source': null,
    'color-hex-length': 'long',
    'value-keyword-case': null, // for map-gets
    'no-descending-specificity': null, // will require refactor
  },
};
