const { defineConfig } = require('vite');

// https://vitejs.dev/config/
module.exports = defineConfig(({ mode }) => {
  return {
    define: {
      'process.env.NODE_ENV': JSON.stringify(mode),
    },
    build: {
      lib: {
        entry: [
          'libs/components/src/index.ts',
          'libs/components/src/action-ribbon/action-ribbon',
          'libs/components/src/alert/alert',
          'libs/components/src/app-shell/app-shell',
          'libs/components/src/badge/badge',
          'libs/components/src/button/button',
          'libs/components/src/checkbox/checkbox',
          'libs/components/src/card/card',
          'libs/components/src/chips/chip',
          'libs/components/src/chips/chip-set',
          'libs/components/src/circular-progress/circular-progress',
          'libs/components/src/code-snippet/code-snippet',
          'libs/components/src/dialog/dialog',
          'libs/components/src/drawer/drawer',
          'libs/components/src/empty-state/empty-state',
          'libs/components/src/expansion-panel/expansion-panel',
          'libs/components/src/expansion-panel/expansion-panel-item',
          'libs/components/src/formfield/formfield',
          'libs/components/src/icon/icon',
          'libs/components/src/icon-button/icon-button',
          'libs/components/src/icon-button-toggle/icon-button-toggle',
          'libs/components/src/icon-checkbox/icon-check-toggle',
          'libs/components/src/icon-radio/icon-radio-toggle',
          'libs/components/src/linear-progress/linear-progress',
          'libs/components/src/list/check-list-item',
          'libs/components/src/list/list',
          'libs/components/src/list/list-item',
          'libs/components/src/list/nav-list-item',
          'libs/components/src/list/radio-list-item',
          'libs/components/src/menu/menu',
          'libs/components/src/radio/radio',
          'libs/components/src/select/select',
          'libs/components/src/side-sheet/side-sheet',
          'libs/components/src/slider/slider',
          'libs/components/src/slider/slider-range',
          'libs/components/src/snackbar/snackbar',
          'libs/components/src/status-dialog/status-dialog',
          'libs/components/src/status-header/status-header',
          'libs/components/src/status-header/status-header-item',
          'libs/components/src/switch/switch',
          'libs/components/src/tab/tab',
          'libs/components/src/tab/tab-bar',
          'libs/components/src/textarea/textarea',
          'libs/components/src/textfield/textfield',
          'libs/components/src/text-lockup/text-lockup',
          'libs/components/src/toolbar/toolbar',
          'libs/components/src/tooltip/tooltip',
          'libs/components/src/top-app-bar/top-app-bar',
          'libs/components/src/top-app-bar/top-app-bar-fixed',
          'libs/components/src/tree-list/tree-list',
          'libs/components/src/tree-list/tree-list-item',
          'libs/components/src/typography/typography',
        ],
        name: 'Covalent',
      },
    },
    server: {
      fs: {
        // Allow serving files from one level up to the project root
        allow: ['..'],
      },
    },
    test: {
      deps: {
        inline: [/safevalues/], // fix @material/chips issue
      },
      coverage: {
        provider: 'c8',
        enabled: true,
        reportsDirectory: '../../coverage/libs/components',
      },
      cache: {
        dir: '../../node_modules/.vitest',
      },
    },
    cacheDir: '../../node_modules/.vite',
  };
});
