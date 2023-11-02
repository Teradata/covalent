const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    index: './libs/components/src/index.ts',
    theme: './libs/components/theme/theme.scss',

    actionRibbon: './libs/components/src/action-ribbon/action-ribbon.ts',
    alert: './libs/components/src/alert/alert.ts',
    appShell: './libs/components/src/app-shell/app-shell.ts',
    button: './libs/components/src/button/button.ts',
    card: './libs/components/src/card/card.ts',
    checkbox: './libs/components/src/checkbox/checkbox.ts',
    circularProgress:
      './libs/components/src/circular-progress/circular-progress.ts',
    codeSnippet: './libs/components/src/code-snippet/code-snippet.ts',
    dialog: './libs/components/src/dialog/dialog.ts',
    drawer: './libs/components/src/drawer/drawer.ts',
    emptyState: './libs/components/src/empty-state/empty-state.ts',
    formField: './libs/components/src/formfield/formfield.ts',
    icon: './libs/components/src/icon/icon.ts',
    iconButton: './libs/components/src/icon-button/icon-button.ts',
    iconCheckbox: './libs/components/src/icon-checkbox/icon-check-toggle.ts',
    iconRadio: './libs/components/src/icon-radio/icon-radio-toggle.ts',
    linearProgress: './libs/components/src/linear-progress/linear-progress.ts',
    list: './libs/components/src/list/list.ts',
    listItem: './libs/components/src/list/list-item.ts',
    listExpansion: './libs/components/src/list/list-expansion.ts',
    listCheckItem: './libs/components/src/list/check-list-item.ts',
    listRadioItem: './libs/components/src/list/radio-list-item.ts',
    listNavItem: './libs/components/src/list/nav-list-item.ts',
    menu: './libs/components/src/menu/menu.ts',
    radio: './libs/components/src/radio/radio.ts',
    select: './libs/components/src/select/select.ts',
    sideSheet: './libs/components/src/side-sheet/side-sheet.ts',
    slider: './libs/components/src/slider/slider.ts',
    sliderRange: './libs/components/src/slider/slider-range.ts',
    snackBar: './libs/components/src/snackbar/snackbar.ts',
    statusHeader: './libs/components/src/status-header/status-header.ts',
    statusHeaderItem:
      './libs/components/src/status-header/status-header-item.ts',
    switch: './libs/components/src/switch/switch.ts',
    tab: './libs/components/src/tab/tab.ts',
    tabBar: './libs/components/src/tab/tab-bar.ts',
    textArea: './libs/components/src/textarea/textarea.ts',
    textField: './libs/components/src/textfield/textfield.ts',
    textLockup: './libs/components/src/text-lockup/text-lockup.ts',
    toolbar: './libs/components/src/toolbar/toolbar.ts',
    tooltip: './libs/components/src/tooltip/tooltip.ts',
    topAppBar: './libs/components/src/top-app-bar/top-app-bar.ts',
    topAppBarFixed: './libs/components/src/top-app-bar/top-app-bar-fixed.ts',
    treeList: './libs/components/src/tree-list/tree-list.ts',
    treeListItem: './libs/components/src/tree-list/tree-list-item.ts',
    typography: './libs/components/src/typography/typography.ts',
  },
  output: {
    filename: 'libs/components/[name].js',
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.lib.json',
              compilerOptions: {
                outDir: '../../dist/',
              },
            },
          },
        ],
      },
      {
        test: /\.css|\.s(c|a)ss$/,
        include: /libs\/components\/src/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'lit-scss-loader',
            options: {
              minify: true, // defaults to false
            },
          },
          { loader: 'extract-loader' },
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options: {
              // Prefer Dart Sass
              implementation: require('sass'),
              // See https://github.com/webpack-contrib/sass-loader/issues/804
              webpackImporter: false,
              sassOptions: {
                includePaths: ['./node_modules'],
              },
            },
          },
        ],
      },
      {
        test: /\.s(c|a)ss$/,
        include: /libs\/components\/theme/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'libs/components/[name].css',
            },
          },
          'extract-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              // Prefer Dart Sass
              implementation: require('sass'),
              sassOptions: {
                includePaths: ['./node_modules'],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './libs/components/package.json', to: './libs/components' },
        {
          from: './libs/icons/covalent-icons.css',
          to: './libs/components/icons',
        },
        {
          from: './libs/icons/covalent-icons.eot',
          to: './libs/components/icons',
        },
        {
          from: './libs/icons/covalent-icons.svg',
          to: './libs/components/icons',
        },
        {
          from: './libs/icons/covalent-icons.ttf',
          to: './libs/components/icons',
        },
        {
          from: './libs/icons/covalent-icons.woff',
          to: './libs/components/icons',
        },
        { from: './libs/icons/favicon.ico', to: './libs/components/icons' },
      ],
    }),
  ],
};
