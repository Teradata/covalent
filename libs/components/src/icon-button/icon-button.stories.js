import './icon-button';
import iconList from '../../../icons/material-codepoints.json';

export default {
  title: 'Components/Icon Button',
  argTypes: {
    icon: {
      control: 'select',
      options: Object.keys(iconList),
    },
    'aria-label': {
      control: 'text',
    },
    'aria-haspopup': {
      control: 'text',
    },
  },
  args: {
    icon: 'houseboat',
    disabled: false,
    'aria-label': '',
    'aria-haspopup': '',
  },
  tags: ['autodocs'],
};

const Template = (args) => {
  const { disabled, icon } = args;
  const ariaLabel = args['aria-label'];
  const ariaHaspopup = args['aria-haspopup'];

  return `
    <cv-icon-button
      icon="${icon}"
      ${disabled ? `disabled` : ``}
      ${ariaLabel ? `aria-label="${ariaLabel}"` : ``}
      ${ariaHaspopup ? `aria-haspopup="${ariaHaspopup}"` : ``}
    >
    </cv-icon-button>`;
};

export const Main = {
  render: Template,
  args: {
    icon: 'houseboat',
    disabled: false,
  },
};

export const CloseIcon = {
  render: Template,
  args: {
    icon: 'close',
  },
};

export const ArrowBack = {
  render: Template,
  args: {
    icon: 'arrow_back',
  },
};

export const FilterList = {
  render: Template,
  args: {
    icon: 'filter_list',
  },
};

export const Search = {
  render: Template,
  args: {
    icon: 'search',
  },
};

export const Add = {
  render: Template,
  args: {
    icon: 'add',
  },
};
