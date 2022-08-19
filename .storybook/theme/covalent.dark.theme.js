import { create } from '@storybook/theming';
import brandImage from './teradata.svg';

export default create({
  base: 'dark',

  colorPrimary: '#afb6b9',
  colorSecondary: '#59cecd',

  // UI
  appBg: '#000',
  appContentBg: '#161c1f',
  appBorderRadius: '8px',

  // Text colors
  textColor: 'rgba(255,255,255,0.87)',
  textInverseColor: 'rgba(0,0,0,0.87)',

  // Toolbar default and active colors
  barSelectedColor: '#59cecd',
  barBg: '#161c1f',

  // Form colors
  inputBg: 'transparent',

  // Branding
  brandTitle: 'Teradata Design System',
  //brandUrl: 'https://teradata.lol',
  brandImage,

  // Addon themes
  addonActionsTheme: {
    // ...chromeLight,
    // BASE_FONT_FAMILY: typography.fonts.mono,
    BASE_BACKGROUND_COLOR: '#161c1f',
  },
});
