import { parameters as mainParameters } from '../../../.storybook/preview';

import '../../icons/covalent-icons.scss';
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
