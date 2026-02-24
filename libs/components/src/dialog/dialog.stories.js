import dialogComponent from '../../stories/demos/dialog.component';
import './dialog';
import '../button/button';
import '../textfield/textfield';

export default {
  title: 'Components/Dialog',
  tags: ['autodocs'],
};

const anatomyTemplate = ({ trapFocus }) => {
  document.addEventListener(
    'DOMContentLoaded',
    () => {
      const button = document.body.querySelector('#dialog-button');
      button.addEventListener('click', () => {
        const dialog = document.body.querySelector('#dialog1');
        dialog.open = true;
      });
    },
    { once: true },
  );
  return `
    <cv-button id="dialog-button" raised>Open basic dialog</cv-button>
    <cv-dialog id="dialog1" heading="Dialog header" ${trapFocus ? 'trapFocus' : ''} scrimClickAction="">
      Dialog body text
      <cv-button slot="primaryAction" dialogAction="close">Action 2</cv-button>
      <cv-button slot="secondaryAction" dialogAction="close">Action 1</cv-button>
    </cv-dialog>`;
};
const defaultTemplate = ({
  open = true,
  heading = 'Heading',
  scrimClickAction = 'close',
  escapeKeyAction = 'close',
  defaultAction = 'close',
  actionAttribute = 'dialogAction',
  initialFocusAttribute = 'dialogInitialFocus',
  hideActions,
  stacked,
}) => {
  return `<cv-dialog
  ${open ? 'open' : ''}
  heading="${heading}"
  scrimClickAction="${scrimClickAction}"
  escapeKeyAction="${escapeKeyAction}"
  defaultAction="${defaultAction}"
  actionAttribute="${actionAttribute}"
  initialFocusAttribute="${initialFocusAttribute}"
  ${hideActions ? 'hideActions' : ''}
  ${stacked ? 'stacked' : ''}
>
  Message
  <div slot="secondaryAction">
    <cv-button label="Label"> </cv-button>
  </div>
  <div slot="primaryAction">
    <cv-button label="Label"> </cv-button>
  </div>
</cv-dialog>`;
};
const deleteTemplate = ({
  open = true,
  heading = 'Heading',
  scrimClickAction = 'close',
  escapeKeyAction = 'close',
  defaultAction = 'close',
  actionAttribute = 'dialogAction',
  initialFocusAttribute = 'dialogInitialFocus',
  hideActions,
  stacked,
}) => {
  return `<cv-dialog
  ${open ? 'open' : ''}
  heading="${heading}"
  scrimClickAction="${scrimClickAction}"
  escapeKeyAction="${escapeKeyAction}"
  defaultAction="${defaultAction}"
  actionAttribute="${actionAttribute}"
  initialFocusAttribute="${initialFocusAttribute}"
  ${hideActions ? 'hideActions' : ''}
  ${stacked ? 'stacked' : ''}
>
  This action cannot be undone.
  <div slot="primaryAction">
    <cv-button color="negative" label="Delete"> </cv-button>
  </div>
  <div slot="secondaryAction">
    <cv-button label="Don't delete"> </cv-button>
  </div>
</cv-dialog>`;
};
export const Default = {
  render: defaultTemplate,
  argTypes: {
    open: { control: { type: 'boolean' } },
    heading: { control: { type: 'text' } },
    scrimClickAction: { control: { type: 'text' } },
    escapeKeyAction: { control: { type: 'text' } },
    defaultAction: { control: { type: 'text' } },
    actionAttribute: { control: { type: 'text' } },
    initialFocusAttribute: { control: { type: 'text' } },
    hideActions: { control: { type: 'boolean' } },
    stacked: { control: { type: 'boolean' } },
  },
  args: {
    open: true,
    heading: 'Heading',
    scrimClickAction: 'close',
    escapeKeyAction: 'close',
    defaultAction: 'close',
    actionAttribute: 'dialogAction',
    initialFocusAttribute: 'dialogInitialFocus',
    hideActions: false,
    stacked: false,
  },
};
export const DeleteConfirmation = {
  argTypes: Default.argTypes,
  args: {
    ...Default.args,
    open: true,
    heading: 'Delete this file?',
  },
  render: deleteTemplate,
};

export const Basic = {
  render: dialogComponent,
};

export const Anatomy = {
  render: anatomyTemplate,
  args: {
    trapFocus: true,
  },
};

const logoutTemplate = () => {
  document.addEventListener(
    'DOMContentLoaded',
    () => {
      const button = document.body.querySelector('#logout-button');
      button.addEventListener('click', () => {
        const dialog = document.body.querySelector('#example-logout');
        dialog.open = true;
      });
    },
    { once: true },
  );
  return `
  <cv-button id="logout-button" raised>Open logout dialog</cv-button>
  <cv-dialog id="example-logout" heading="You will be logged out soon" scrimClickAction="">
            Due to inactivity, you’ll be logged out in 3 minutes to protect your security.
            <cv-button slot="primaryAction" dialogAction="close">Log out</cv-button>
            <cv-button slot="secondaryAction" dialogAction="close">Stay logged in</cv-button>
          </cv-dialog>`;
};

export const Logout = {
  render: logoutTemplate,
};

const udfTemplate = ({}) => {
  document.addEventListener(
    'DOMContentLoaded',
    () => {
      const button = document.body.querySelector('#udf-button');
      button.addEventListener('click', () => {
        const dialog = document.body.querySelector('#example-udf');
        dialog.open = true;
      });
    },
    { once: true },
  );
  return `
          <cv-button id="udf-button" raised>Open UDF dialog</cv-button>
          <cv-dialog id="example-udf" heading="Delete User Defined Function" scrimClickAction="" >
            
            <div class="key-value">
              <div class="key-value--key mdc-typography--caption">Function to delete</div>
              <div class="key-value--value">UDF_StrCpy</div>
            </div>
            <cv-formfield label="I understand that all queries currently using this UDF will be canceled">
              <cv-checkbox class="child"></cv-checkbox>
            </cv-formfield>
            <cv-button slot="primaryAction" dialogAction="close" class="destructive primary" disabled>Delete</cv-button>
            <cv-button slot="secondaryAction" dialogAction="close">Cancel</cv-button>
          </cv-dialog>`;
};

export const UDF = {
  render: udfTemplate,
};
