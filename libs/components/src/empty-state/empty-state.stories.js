import './empty-state';
import '../icon/icon';
import '../card/card';
import '../button/button';

export default {
  title: 'Components/Empty state',
  args: {
    headline: "You don't have access to this area",
    subtitle:
      "You don't have permission to view this application.\nPlease contact your system administrator for further details.",
    action: false,
    twoActions: true,
    icon: 'work',
  },
  tags: ['autodocs'],
};

// Page empty state
export const Page = ({ headline, subtitle, action, twoActions, icon }) => {
  return `
  <cv-empty-state 
    headline="${headline}" 
    subtitle="${subtitle}"
    icon="${icon}"
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

export const PageTitleOnly = Page.bind({});
PageTitleOnly.args = {
  subtitle: '',
  action: false,
  twoActions: false,
};
export const PageWithSubtitle = Page.bind({});
PageWithSubtitle.args = {
  action: false,
  twoActions: false,
};
export const PageOneAction = Page.bind({});
PageOneAction.args = {
  subtitle: '',
  action: true,
  twoActions: false,
};
export const PageTwoActions = Page.bind({});
PageTwoActions.args = {
  subtitle: '',
  action: false,
  twoActions: true,
};

// Card empty state
const Card = ({
  cardOutlined,
  cardTitle,
  headline,
  subtitle,
  action,
  twoActions,
}) => {
  return `
    <cv-card 
      cardTitle='${cardTitle}'
      ${cardOutlined ? 'outlined' : ''}
    >
      <cv-empty-state 
      headline="${headline}" 
      subtitle="${subtitle}"
      card
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

export const CardNoAction = Card.bind({});
CardNoAction.args = {
  cardOutlined: false,
  action: false,
  twoActions: false,
  headline: '',
  subtitle: "You don't have access to this area",
  cardTitle: 'Card Title',
};

export const CardWithAction = Card.bind({});
CardWithAction.args = {
  cardOutlined: false,
  action: true,
  twoActions: false,
  headline: '',
  subtitle: "You don't have access to this area",
  cardTitle: 'Card Title',
};
