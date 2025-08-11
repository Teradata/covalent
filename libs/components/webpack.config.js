const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Function to dynamically generate entry paths from component-config.json
const getComponentEntries = () => {
  const componentsConfigPath = path.resolve(
    __dirname,
    './component-config.json',
  );
  const componentsConfig = JSON.parse(
    fs.readFileSync(componentsConfigPath, 'utf8'),
  );

  const entries = {
    // Main index entry
    index: path.resolve(__dirname, 'src/index.ts'),
    // Main CSS entry
    covalent: path.resolve(__dirname, 'src/index.scss'),
  };

  // Add individual component entries
  componentsConfig.forEach((component) => {
    const componentName = path.basename(component.path);
    entries[componentName] = path.resolve(
      __dirname,
      'src',
      component.path + '.ts',
    );
  });

  return entries;
};

module.exports = {
  mode: 'production',
  entry: getComponentEntries(),

  output: {
    path: path.resolve(__dirname, '../../dist/libs/components'),
    filename: '[name].mjs',
    library: {
      type: 'module',
    },
    environment: {
      module: true,
    },
  },

  experiments: {
    outputModule: true,
  },

  externals: {
    // Material Web Components - these should be shared across micro-frontends
    '@material/mwc-button': '@material/mwc-button',
    '@material/mwc-button/mwc-button-base':
      '@material/mwc-button/mwc-button-base',
    '@material/mwc-button/styles.css': '@material/mwc-button/styles.css',
    '@material/mwc-select': '@material/mwc-select',
    '@material/mwc-select/mwc-select-base':
      '@material/mwc-select/mwc-select-base',
    '@material/mwc-select/mwc-select.css':
      '@material/mwc-select/mwc-select.css',
    '@material/mwc-icon-button': '@material/mwc-icon-button',
    '@material/mwc-icon-button/mwc-icon-button-base':
      '@material/mwc-icon-button/mwc-icon-button-base',
    '@material/mwc-icon-button/mwc-icon-button.css':
      '@material/mwc-icon-button/mwc-icon-button.css',
    '@material/mwc-switch': '@material/mwc-switch',
    '@material/mwc-switch/mwc-switch-base':
      '@material/mwc-switch/mwc-switch-base',
    '@material/mwc-switch/styles.css': '@material/mwc-switch/styles.css',
    '@material/mwc-textarea': '@material/mwc-textarea',
    '@material/mwc-textarea/mwc-textarea-base':
      '@material/mwc-textarea/mwc-textarea-base',
    '@material/mwc-textarea/mwc-textarea.css':
      '@material/mwc-textarea/mwc-textarea.css',
    '@material/mwc-drawer': '@material/mwc-drawer',
    '@material/mwc-drawer/mwc-drawer-base':
      '@material/mwc-drawer/mwc-drawer-base',
    '@material/mwc-dialog': '@material/mwc-dialog',
    '@material/mwc-dialog/mwc-dialog.css':
      '@material/mwc-dialog/mwc-dialog.css',
    '@material/mwc-list': '@material/mwc-list',
    '@material/mwc-list/mwc-list-item-base':
      '@material/mwc-list/mwc-list-item-base',
    '@material/mwc-icon-button-toggle': '@material/mwc-icon-button-toggle',
    '@material/mwc-icon-button-toggle/mwc-icon-button-toggle':
      '@material/mwc-icon-button-toggle/mwc-icon-button-toggle',
    '@material/mwc-base': '@material/mwc-base',
    '@material/mwc-base/base-element': '@material/mwc-base/base-element',
    '@material/mwc-base/observer': '@material/mwc-base/observer',

    // Lit should also be shared
    lit: 'lit',
    'lit/decorators.js': 'lit/decorators.js',

    // Monaco Editor should be external
    'monaco-editor': 'monaco-editor',
  },

  resolve: {
    extensions: ['.ts', '.js', '.scss', '.css'],
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: path.resolve(__dirname, 'tsconfig.webpack.json'),
            transpileOnly: true,
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          'raw-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [path.resolve(__dirname, '../../node_modules')],
              },
            },
          },
        ],
        resourceQuery: /inline/,
      },
      {
        test: /\.scss$/,
        exclude: /\?inline/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [path.resolve(__dirname, '../../node_modules')],
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        include: [/node_modules\/@material/, /node_modules\/monaco-editor/],
        use: ['raw-loader'],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],

  optimization: {
    splitChunks: false, // Don't split chunks for library builds
    minimize: false, // Keep readable for development
  },
};
