import './icon';
import './icon-demo';
import { MAT_ICON_LIST, COV_ICON_LIST } from './_icon-list';

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
  },
  args: {
    icon: 'houseboat',
    size: '48px',
  },
};

const Template = ({ icon, size }, ...args) => {
  const icoElem = document.createElement('cv-icon');
  icoElem.innerText = icon;
  icoElem.style.fontSize = size;

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
