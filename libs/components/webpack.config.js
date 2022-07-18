const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: {
      index: './libs/components/src/index.ts',
      vendor: './libs/components/styles/vendor.scss',
      styles: './libs/components/styles/styles.scss',
      theme: './libs/components/styles/theme/theme.scss',

      actionRibbon: './libs/components/src/lib/action-ribbon/action-ribbon.ts',
      //alert: './libs/components/src/lib/alert/alert.ts',
      appShell: './libs/components/src/lib/app-shell/app-shell.ts',
      button: './libs/components/src/lib/button/button.ts',
      checkbox: './libs/components/src/lib/checkbox/checkbox.ts',
      circularProgress: './libs/components/src/lib/circular-progress/circular-progress.ts',
      dialog: './libs/components/src/lib/dialog/dialog.ts',
      drawer: './libs/components/src/lib/drawer/drawer.ts',
      formField: './libs/components/src/lib/formfield/formfield.ts',
      icon: './libs/components/src/lib/icon/icon.ts',
      iconButton: './libs/components/src/lib/icon-button/icon-button.ts',
      linearProgress: './libs/components/src/lib/linear-progress/linear-progress.ts',
      list: './libs/components/src/lib/list/list.ts',
      listItem: './libs/components/src/lib/list/list-item.ts',
      listExpansion: './libs/components/src/lib/list/list-expansion.ts',
      listRadioItem: './libs/components/src/lib/list/radio-list-item.ts',
      menu: './libs/components/src/lib/menu/menu.ts',
      radio: './libs/components/src/lib/radio/radio.ts',
      select: './libs/components/src/lib/select/select.ts',
      slider: './libs/components/src/lib/slider/slider.ts',
      sliderRange: './libs/components/src/lib/slider/slider-range.ts',
      snackBar: './libs/components/src/lib/snackbar/snackbar.ts',
      switch: './libs/components/src/lib/switch/switch.ts',
      tab: './libs/components/src/lib/tab/tab.ts',
      tabBar: './libs/components/src/lib/tab/tab-bar.ts',
      textArea: './libs/components/src/lib/textarea/textarea.ts',
      textField: './libs/components/src/lib/textfield/textfield.ts',
      topAppBar: './libs/components/src/lib/top-app-bar/top-app-bar.ts',
      topAppBarFixed: './libs/components/src/lib/top-app-bar/top-app-bar-fixed.ts'
    },
    output: {
      filename: 'libs/components/[name].js',
      clean: true,
    },
    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: [".ts", ".tsx", ".js"]
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
                configFile: 'tsconfig.lib.json'
              }
            }
          ]          
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
                  includePaths: ['./node_modules']
                }
              }
            }
          ]
        },
        {
          test: /\.s(c|a)ss$/,
          include: /libs\/components\/styles/,
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
                  includePaths: ['./node_modules']
                }
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new CopyPlugin([
        { from: './libs/components/package.json', to: './libs/components/icons' },
        { from: './libs/icons/src/assets/covalent-icons.css', to: './libs/components/icons' },
        { from: './libs/icons/src/assets/covalent-icons.eot', to: './libs/components/icons' },
        { from: './libs/icons/src/assets/covalent-icons.svg', to: './libs/components/icons' },
        { from: './libs/icons/src/assets/covalent-icons.ttf', to: './libs/components/icons' },
        { from: './libs/icons/src/assets/covalent-icons.woff', to: './libs/components/icons' },
        { from: './libs/icons/src/assets/favicon.ico', to: './libs/components/icons' },
      ]),
    ],
  };