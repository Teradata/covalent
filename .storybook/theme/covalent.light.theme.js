import { create } from '@storybook/theming';
import brandImage from './teradata-dark.svg';

export default create({
  base: 'light',

  colorPrimary: '#43515a',
  colorSecondary: '#007373',

  // UI
  appBg: '#ffffff',
  appContentBg: '#f5f5f5',
  appBorderRadius: '8px',

  // Text colors
  textColor: 'rgba(0,0,0,0.87)',
  textInverseColor: 'rgba(255,255,255,0.87)',

  // Toolbar default and active colors
  barSelectedColor: '#007373',
  barBg: '#f5f5f5',

  // Form colors
  inputBg: 'transparent',

  // Branding
  brandTitle: 'Teradata Design System',
  // brandUrl: 'https://teradata.lol',
  brandImage,

  layoutMargin: '48px',

  // Addon themes
  addonActionsTheme: {
    // ...chromeLight,
    // BASE_FONT_FAMILY: typography.fonts.mono,
    BASE_BACKGROUND_COLOR: '#f5f5f5',
  },
});
