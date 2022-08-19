import { withDesign } from 'storybook-addon-designs';
import './empty-state';
import '../icon/icon';
import '../card/card';

export default {
  title: 'Components/Empty State',
  argTypes: {
    // Page args
    headline: {
      control: 'text',
      defaultValue: "You don't have access to this area",
      description: 'Sets the main message of the empty alert',
    },
    subtitle: {
      control: 'text',
      defaultValue:
        "You don't have permission to view this application.\nPlease contact your system administrator for further details.",
      description: 'Sets a more detailed message below the headline',
    },
    action: {
      control: 'boolean',
      defaultValue: false,
      description: 'Will render a button if true',
    },
    twoActions: {
      control: 'boolean',
      defaultValue: true,
      description: 'Will render two buttons if true',
    },
    icon: {
      control: 'text',
      defaultValue: 'work',
      description: 'Adds an icon to the empty alert',
    },
  },
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/b7geqz0aCeDo4NbzTBWAiw/Empty-states?node-id=19%3A115',
    },
  },
};

// Page empty state
export const Page = ({ headline, subtitle, action, twoActions, icon }) => {
  return `
  <td-empty-state 
    headline="${headline}" 
    subtitle="${subtitle}"
    icon="${icon}"
  >
    ${
      action && !twoActions
        ? '<td-button slot="buttons">Button Text</td-button>'
        : ''
    }
    ${
      twoActions
        ? '<td-button slot="buttons">Button Text</td-button>\n\
    <td-button slot="buttons">Button Text</td-button>'
        : ''
    }
</td-empty-state>`;
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
    <td-card 
      cardTitle='${cardTitle}'
      ${cardOutlined ? 'outlined' : ''}
    >
      <td-empty-state 
      headline="${headline}" 
      subtitle="${subtitle}"
      slot="empty-state"
      card
      >
          ${
            action && !twoActions
              ? '<td-button slot="buttons">Button Text</td-button>'
              : ''
          }
          ${
            twoActions
              ? '<td-button slot="buttons">Button Text</td-button>\n\
          <td-button slot="buttons">Button Text</td-button>'
              : ''
          }
      </td-empty-state>
    </td-card>
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
