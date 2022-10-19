module.exports = {
  extends: ['./libs/coding-standards/src/lib/stylelint/stylelint.config.js'],
  ignoreFiles: ['./libs/angular/schematics/ng-add/files/**'],
  rules: {
    'selector-class-pattern': null,
  },
};
