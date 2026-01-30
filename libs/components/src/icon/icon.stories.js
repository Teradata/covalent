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
  },
  tags: ['autodocs'],
};

const Template = ({ icon, size, filled }, ...args) => {
  const icoElem = document.createElement('cv-icon');
  icoElem.innerText = icon;
  icoElem.style.fontSize = size;
  icoElem.filled = filled;

  if (args[0].parameters.showCovIcons) {
    icoElem.setAttribute('iconFont', 'covalent-icons');
  }

  return icoElem;
};

const AllCovalentIconsTemplate = () => {
  return `<cv-icon-demo></cv-icon-demo>`;
};

export const MaterialIcons = Template.bind({});

export const CovalentIcons = Template.bind({});
CovalentIcons.parameters = {
  showCovIcons: true,
};

CovalentIcons.argTypes = {
  icon: {
    options: COV_ICON_LIST,
  },
};
CovalentIcons.args = {
  icon: 'product_editor',
};

export const AllCovalentIcons = AllCovalentIconsTemplate.bind({});

export const FilledIcon = Template.bind({});
FilledIcon.args = {
  icon: 'home',
  size: '48px',
  filled: true,
};
