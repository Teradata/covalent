import './text-lockup';
import iconList from '../../../icons/material-codepoints.json';

const MAT_ICON_LIST = Object.keys(iconList);

export default {
  title: 'Components/Text lockup',
  argTypes: {
    scale: {
      options: ['large', 'small'],
      control: { type: 'radio' },
      defaultValue: 'small',
    },
    text: {
      control: 'text',
      defaultValue: 'TDICAM-8523411',
    },
    icon: {
      options: MAT_ICON_LIST,
      control: { type: 'select' },
    },
    subText: {
      control: 'text',
      defaultValue: 'environment Id',
    },
    subTextState: {
      options: ['active', 'positive', 'negative', 'caution'],
      control: { type: 'select' },
    },
    subTextTrailing: {
      control: 'boolean',
      defaultValue: false,
    },
  },
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
    <td-text-lockup
      subtext="${subText}"
      scale="${scale}"
      ${icon ? `icon="${icon}"` : ''}
      ${subTextState ? `state="${subTextState}"` : ''}
      ${subTextTrailing ? 'trailingSubText' : ''}>${text}</td-text-lockup>
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
