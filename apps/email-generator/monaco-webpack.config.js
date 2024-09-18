const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        resourceQuery: /raw/, // This will only match .css?raw
        use: 'raw-loader',
      },
      {
        test: /\.mjml$/,
        resourceQuery: /raw/, // This will only match .mjml?raw
        use: 'raw-loader',
      },
      {
        test: /\.css$/,
        include: [/node_modules\/monaco-editor/],
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.ttf$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new MonacoWebpackPlugin({
      languages: ['css', 'html'],
    }),
  ],
};
