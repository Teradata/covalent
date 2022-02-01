const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
  plugins: [
    new MonacoWebpackPlugin({
      languages: ['css', 'html', 'javascript', 'sql', 'typescript'],
      features: ['contextmenu', 'clipboard', 'find'],
    }),
  ],
};
