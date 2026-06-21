import './text-lockup';
import iconList from '../../../icons/material-codepoints.json';

const MAT_ICON_LIST = Object.keys(iconList);

export default {
  title: 'Components/Text lockup',
  argTypes: {
    scale: {
      options: ['large', 'small'],
      control: { type: 'radio' },
    },
    icon: {
      options: MAT_ICON_LIST,
      control: { type: 'select' },
    },
    state: {
      options: ['active', 'positive', 'negative', 'caution'],
      control: { type: 'select' },
    },
  },
  args: {
    scale: 'small',
    text: 'TDICAM-8523411',
    subText: 'environment Id',
    trailingSubText: false,
  },
  tags: ['autodocs'],
};

const renderTextLockup = ({
  icon,
  scale,
  state,
  subText,
  trailingSubText,
  text,
}) => {
  return `
    <cv-text-lockup
      subtext="${subText}"
      scale="${scale}"
      ${icon ? `icon="${icon}"` : ''}
      ${state ? `state="${state}"` : ''}
      ${trailingSubText ? 'trailingSubText' : ''}>${text}</cv-text-lockup>
  `;
};

export const textLockup = {
  render: renderTextLockup,
};

export const textLockupLarge = {
  render: renderTextLockup,
  args: {
    scale: 'large',
  },
};

export const textLockupTrailing = {
  render: renderTextLockup,
  args: {
    text: 'Jan 12th, 2022 at 5:10pm',
    subText: 'Date last ran successfully',
    trailingSubText: true,
  },
};

export const textLockupWithIcon = {
  render: renderTextLockup,
  args: {
    icon: 'warning',
    text: 'Daily production backup job',
    subText: 'completed with issues',
    state: 'caution',
    trailingSubText: true,
  },
};
