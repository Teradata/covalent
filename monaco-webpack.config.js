const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        include: [/node_modules\/monaco-editor/],
        use: ['style-loader', 'css-loader'],
      },
      {
				test: /\.ttf$/,
        include: [/node_modules\/monaco-editor/],
				use: ['file-loader']
			}
    ],
  },
  plugins: [
    new MonacoWebpackPlugin({
      languages: ['css', 'html', 'javascript', 'sql', 'typescript'],
      features: ['contextmenu', 'clipboard', 'find'],
    }),
  ],
};
