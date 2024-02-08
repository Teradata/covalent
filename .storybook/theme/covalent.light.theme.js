import { create } from '@storybook/theming';
import brandImage from './teradata.svg';
import {
  CvLightPrimary,
  CvLightAccent,
  CvLightSurface,
  CvLightBackground,
  CvDarkOnBackground,
  CvLightOnBackground,
  CvLightTextIconOnBackground,
} from '@covalent/tokens';

export default create({
  base: 'light',

  colorPrimary: CvLightPrimary,
  colorSecondary: CvLightAccent,

  // UI
  appBg: CvLightBackground,
  appContentBg: CvLightSurface,
  appBorderRadius: '8px',

  // Text colors
  textColor: CvLightOnBackground,
  textInverseColor: CvDarkOnBackground,

  // Toolbar default and active colors
  barTextColor: CvLightTextIconOnBackground,
  barSelectedColor: CvLightPrimary,
  barHoverColor: CvLightAccent,
  barBg: CvLightSurface,

  // Form colors
  inputBg: 'transparent',

  // Branding
  brandTitle: 'Teradata Design System',
  // brandUrl: 'https://teradata.lol',
  brandImage,
});
