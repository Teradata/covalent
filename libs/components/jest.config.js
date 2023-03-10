const esModules = ['@material', '@lit', 'lit', 'lit-scss-loader'].join('|');

module.exports = {
  displayName: 'components',
  preset: '../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
    '^.+\\.scss$': '../../tools/jest-scss-transform.js',
  },
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/libs/components',
};
