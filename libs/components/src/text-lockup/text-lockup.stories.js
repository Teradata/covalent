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
    subTextState: {
      options: ['active', 'positive', 'negative', 'caution'],
      control: { type: 'select' },
    },
  },
  args: {
    scale: 'small',
    text: 'TDICAM-8523411',
    subText: 'environment Id',
    subTextTrailing: false,
  },
  tags: ['autodocs'],
};

export const textLockup = ({
  icon,
  scale,
  subText,
  subTextState,
  subTextTrailing,
  text,
}) => {
  return `
    <cv-text-lockup
      subtext="${subText}"
      scale="${scale}"
      ${icon ? `icon="${icon}"` : ''}
      ${subTextState ? `state="${subTextState}"` : ''}
      ${subTextTrailing ? 'trailingSubText' : ''}>${text}</cv-text-lockup>
  `;
};

export const textLockupLarge = textLockup.bind({});
textLockupLarge.args = {
  scale: 'large',
};

export const textLockupTrailing = textLockup.bind({});
textLockupTrailing.args = {
  text: 'Jan 12th, 2022 at 5:10pm',
  subText: 'Date last ran successfully',
  subTextTrailing: true,
};

export const textLockupWithIcon = textLockup.bind({});
textLockupWithIcon.args = {
  icon: 'warning',
  text: 'Daily production backup job',
  subText: 'completed with issues',
  subTextState: 'caution',
  subTextTrailing: true,
};
