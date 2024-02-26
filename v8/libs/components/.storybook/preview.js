import { parameters as mainParameters } from '../../../.storybook/preview';

import '../src/index.scss';
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
