const path = require('path');

module.exports = {
  mode: 'production',
  entry: './libs/email-templates/src/index.ts', // Your entry file
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../../dist/libs/email-templates'), // Output directory
    library: {
      type: 'commonjs2', // Library type
    },
  },
  resolve: {
    extensions: ['.ts', '.js', '.mjml', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.mjml$/,
        use: 'raw-loader', // Load MJML as raw strings
      },
      {
        test: /\.css$/,
        use: 'raw-loader', // Load CSS as raw strings
      },
    ],
  },
  externals: {
    // Exclude node_modules from the bundle
    'mjml-browser': 'commonjs mjml-browser', // mjml-browser is external and should not be bundled
    tslib: 'commonjs tslib', // tslib is also excluded from bundling
  },
};
