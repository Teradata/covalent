import darkTheme from './theme/covalent.dark.theme';
import lightTheme from './theme/covalent.light.theme';

import '!style-loader!css-loader!sass-loader!./theme/markdown-elements.scss';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    grid: {
      disable: true,
    },
  },
  darkMode: {
    // Override the default dark theme
    dark: {
      ...darkTheme,
    },
    // Override the default light theme
    light: lightTheme,

    // Add dark and light class to preview
    stylePreview: true,
  },
  layout: 'centered',
};
