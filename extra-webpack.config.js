const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader'],
      },
      {
        test: /\.ttf$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new MonacoWebpackPlugin({
      languages: ['sql'],
      features: ['contextmenu', 'clipboard', 'find'],
    }),
  ],
};
