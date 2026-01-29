import { create } from 'storybook/theming';
import brandImage from './teradata-dark.svg';
import {
  CvDarkPrimary,
  CvDarkAccent,
  CvDarkSurface,
  CvDarkBackground,
  CvDarkOnBackground,
  CvLightOnBackground,
  CvDarkTextIconOnBackground,
} from '@covalent/tokens';

export default create({
  base: 'dark',

  colorPrimary: CvDarkPrimary,
  colorSecondary: CvDarkAccent,

  // UI
  appBg: CvDarkBackground,
  appContentBg: CvDarkSurface,
  appBorderRadius: '8px',

  // Text colors
  textColor: CvDarkOnBackground,
  textInverseColor: CvLightOnBackground,

  // Toolbar default and active colors
  barTextColor: CvDarkTextIconOnBackground,
  barSelectedColor: CvDarkPrimary,
  barHoverColor: CvDarkAccent,
  barBg: CvDarkSurface,

  // Form colors
  inputBg: 'transparent',

  // Branding
  brandTitle: 'Teradata Design System',
  //brandUrl: 'https://teradata.lol',
  brandImage,
});
