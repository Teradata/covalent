import './empty-state';
import '../icon/icon';
import '../card/card';
import '../button/button';

const pageTemplate = ({
  headline,
  subtitle,
  action,
  twoActions,
  icon,
  card,
}) => {
  return `
  <cv-empty-state 
    headline="${headline}" 
    subtitle="${subtitle}"
    icon="${icon}"
    ${card ? 'card' : ''}
  >
    ${
      action && !twoActions
        ? '<cv-button slot="buttons">Button text</cv-button>'
        : ''
    }
    ${
      twoActions
        ? '<cv-button slot="buttons">Button text</cv-button>\n\
    <cv-button slot="buttons">Button text</cv-button>'
        : ''
    }
</cv-empty-state>`;
};

// Card empty state
const cardTemplate = ({
  cardOutlined,
  cardTitle,
  headline,
  subtitle,
  action,
  twoActions,
  icon,
  card,
}) => {
  return `
    <cv-card 
      cardTitle='${cardTitle}'
      ${cardOutlined ? 'outlined' : ''}
    >
      <cv-empty-state 
      headline="${headline}" 
      subtitle="${subtitle}"
      ${icon ? `icon="${icon}"` : ''}
      ${card ? 'card' : ''}
      >
          ${
            action && !twoActions
              ? '<cv-button slot="buttons">Button text</cv-button>'
              : ''
          }
          ${
            twoActions
              ? '<cv-button slot="buttons">Button text</cv-button>\n\
          <cv-button slot="buttons">Button text</cv-button>'
              : ''
          }
      </cv-empty-state>
    </cv-card>
  `;
};

export default {
  title: 'Components/Empty state',
  argTypes: {
    card: { control: { type: 'boolean' } },
  },
  args: {
    headline: "You don't have access to this area",
    subtitle:
      "You don't have permission to view this application.\nPlease contact your system administrator for further details.",
    action: false,
    twoActions: true,
    icon: 'work',
    card: false,
  },
  tags: ['autodocs'],
  render: pageTemplate,
};

export const Page = {
  args: {},
};

export const PageTitleOnly = {
  args: {
    subtitle: '',
    action: false,
    twoActions: false,
  },
};

export const PageWithSubtitle = {
  args: {
    action: false,
    twoActions: false,
  },
};

export const PageOneAction = {
  args: {
    subtitle: '',
    action: true,
    twoActions: false,
  },
};

export const PageTwoActions = {
  args: {
    subtitle: '',
    action: false,
    twoActions: true,
  },
};

export const CardNoAction = {
  render: cardTemplate,
  args: {
    card: true,
    cardOutlined: false,
    action: false,
    twoActions: false,
    headline: '',
    subtitle: "You don't have access to this area",
    cardTitle: 'Card Title',
  },
};

export const CardWithAction = {
  render: cardTemplate,
  args: {
    card: true,
    cardOutlined: false,
    action: true,
    twoActions: false,
    headline: '',
    subtitle: "You don't have access to this area",
    cardTitle: 'Card Title',
  },
};
