import './icon';
import '../../stories/demos/icon-demo';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { MAT_ICON_LIST, COV_ICON_LIST } from '../../../icons/icon-list';

export default {
  title: 'Components/Icon',
  argTypes: {
    icon: {
      options: MAT_ICON_LIST,
      control: { type: 'select' },
    },
    iconfont: {
      name: 'iconfont',
      control: { type: 'text' },
    },
    size: {
      options: ['64px', '48px', '24px', '16px'],
      control: { type: 'select' },
    },
    filled: {
      control: { type: 'boolean' },
    },
  },
  args: {
    icon: 'houseboat',
    size: '48px',
    filled: false,
    iconfont: '',
  },
  tags: ['autodocs'],
};

const Template = (args, context) => {
  const { icon, size, filled } = args;
  const icoElem = document.createElement('cv-icon');
  icoElem.innerText = icon;
  icoElem.style.fontSize = size;
  icoElem.filled = filled;

  if (context && context.parameters && context.parameters.showCovIcons) {
    icoElem.setAttribute('iconfont', 'covalent-icons');
  }

  if (args && args.iconfont) {
    icoElem.setAttribute('iconfont', args.iconfont);
  }

  return icoElem;
};

const AllCovalentIconsTemplate = () => {
  return `<cv-icon-demo></cv-icon-demo>`;
};

export const MaterialIcon = {
  render: Template,
};

export const CovalentIcon = {
  render: Template,
  args: {
    icon: 'product_editor',
    iconfont: 'covalent-icons',
  },
  argTypes: {
    icon: {
      options: COV_ICON_LIST,
    },
  },
};

export const AllCovalentIcons = {
  render: AllCovalentIconsTemplate,
};

export const FilledIcon = {
  render: Template,
  args: {
    icon: 'home',
    size: '48px',
    filled: true,
  },
};
