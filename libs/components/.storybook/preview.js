import { parameters as mainParameters } from '../../../.storybook/preview';

import '../theme/theme.scss';
import '../../../.storybook/theme/markdown-elements.scss';

export const parameters = {
  options: {
    storySort: {
      order: [
        'Overview',
        'Introduction',
        'Guides',
        'Patterns',
        'Basics',
        'Components',
      ],
    },
  },
  ...mainParameters,
};
