import './icon-lockup';
import '../circular-progress/circular-progress';

export default {
  title: 'Components/Icon lockup',
  argTypes: {
    scale: {
      options: [
        'headline1',
        'headline2',
        'headline3',
        'headline4',
        'headline5',
        'headline6',
        'subtitle1',
        'subtitle2',
        'button',
        'caption',
        'overline',
        'body1',
        'body2',
      ],
      control: { type: 'select' },
    },
    state: {
      options: ['primary', 'positive', 'negative', 'caution', null],
      control: { type: 'select' },
    },
  },
  args: {
    covalentIcon: false,
    filledIcon: false,
    icon: 'houseboat',
    scale: 'body1',
    state: 'null',
    trailingIcon: false,
  },
  tags: ['autodocs'],
};

const Template = ({
  icon,
  scale,
  trailingIcon,
  state,
  covalentIcon,
  filledIcon,
}) => {
  return `<cv-icon-lockup icon="${icon}" scale="${scale}"${
    trailingIcon ? ' trailingIcon' : ''
  }${covalentIcon ? ' covalentIcon' : ''}${filledIcon ? ' filledIcon' : ''}${
    state ? ` state=${state}` : ''
  }>Lorem ipsum dolor sit amet</cv-icon-lockup>`;
};

const LoadingTemplate = ({ scale, trailingIcon, state }) => {
  return `<cv-icon-lockup scale="${scale}"${
    trailingIcon ? ' trailingIcon' : ''
  }${state ? ` state=${state}` : ''}>Lorem ipsum dolor sit amet
    <cv-circular-progress indeterminate slot="icon" density="-6"></cv-circular-progress>
  </cv-icon-lockup>`;
};

export const Basic = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
  state: 'primary',
};

export const Positive = Template.bind({});
Positive.args = {
  state: 'positive',
  icon: 'check',
};

export const Negative = Template.bind({});
Negative.args = {
  state: 'negative',
  icon: 'error',
  filledIcon: true,
};

export const Caution = Template.bind({});
Caution.args = {
  state: 'caution',
  icon: 'warning',
  filledIcon: true,
};

export const Loading = LoadingTemplate.bind({});
Loading.args = {
  state: 'primary',
};
