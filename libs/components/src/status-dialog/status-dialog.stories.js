import '../code-snippet/code-snippet';
import '../button/button';
import '../icon/icon';
import '../icon-button/icon-button';
import './status-dialog';

const dialogContent = {
  error: `<p style="margin: 0;">
    We’re experiencing an issue in the system, so the users didn’t get added.
  </p>
  <p style="margin-bottom: 0;">
    Find a fix in the knowledge base. If the issue persists, contact Teradata Support and include the error details.
  </p>`,
  positive: `<p style="margin: 0;">
    We’ve successfully added data sharing users.
  </p>`,
  warning: `<p style="margin: 0;">
    This action will stop a process in use by other users, including: user a, user b, user c
  </p>`,
};

const sqlContent = `
SELECT * FROM load_to_teradata (
    ON (
    SELECT "class" AS class_col,
            "variable" AS variable_col,
            "type" AS type_col,
            category,
            cnt,
            "sum" AS sum_col,
            "sumSq",
            "totalCnt"
    FROM aster_nb_modelSC
    )
    tdpid ('sdt12432.labs.teradata.com')
    username ('sample_user')
    password ('sample_user')
    target_table ('td_nb_modelSC')
);
`;

export default {
  title: 'Components/Status Dialog',
  argTypes: {
    open: { control: { type: 'boolean' } },
    state: {
      options: ['error', 'positive', 'warning'],
      control: { type: 'select' },
    },
    heading: { control: { type: 'text' } },
    hideActions: { control: { type: 'boolean' } },
    stacked: { control: { type: 'boolean' } },
    scrimClickAction: { control: { type: 'text' } },
    escapeKeyAction: { control: { type: 'text' } },
    defaultAction: { control: { type: 'text' } },
    actionAttribute: { control: { type: 'text' } },
    initialFocusAttribute: { control: { type: 'text' } },
  },
  args: {
    state: 'error',
    open: false,
    hideActions: false,
    stacked: false,
    heading: 'Basic heading for the dialog',
    scrimClickAction: '',
    escapeKeyAction: 'close',
    defaultAction: 'close',
    actionAttribute: 'dialogAction',
    initialFocusAttribute: 'dialogInitialFocus',
  },
  tags: ['autodocs'],
};

const setupDialogTrigger = (buttonSelector, dialogSelector) => {
  document.addEventListener(
    'DOMContentLoaded',
    () => {
      const button = document.body.querySelector(buttonSelector);
      button.addEventListener('click', () => {
        const dialog = document.body.querySelector(dialogSelector);
        dialog.open = true;
      });
    },
    { once: true },
  );
};

const getDialogAttributes = ({
  state,
  open,
  heading,
  hideActions,
  stacked,
  scrimClickAction,
  escapeKeyAction,
  defaultAction,
  actionAttribute,
  initialFocusAttribute,
}) => {
  return [
    `state="${state}"`,
    `heading="${heading}"`,
    open ? 'open' : '',
    hideActions ? 'hideActions' : '',
    stacked ? 'stacked' : '',
    `scrimClickAction="${scrimClickAction}"`,
    `escapeKeyAction="${escapeKeyAction}"`,
    `defaultAction="${defaultAction}"`,
    `actionAttribute="${actionAttribute}"`,
    `initialFocusAttribute="${initialFocusAttribute}"`,
  ]
    .filter(Boolean)
    .join(' ');
};

const renderStatusDialog = ({
  state,
  open,
  hideActions,
  heading,
  stacked,
  scrimClickAction,
  escapeKeyAction,
  defaultAction,
  actionAttribute,
  initialFocusAttribute,
}) => {
  setupDialogTrigger('#dialog-button', '#dialog');

  const buttonName = `${heading}`.includes('Basic')
    ? 'Open basic dialog'
    : `${`${state[0]}`.toUpperCase()}${`${state}`.substring(1)}`;

  const dialogAttributes = getDialogAttributes({
    state,
    open,
    heading,
    hideActions,
    stacked,
    scrimClickAction,
    escapeKeyAction,
    defaultAction,
    actionAttribute,
    initialFocusAttribute,
  });

  return `
    <cv-button id="dialog-button" raised>${buttonName}</cv-button>
    <cv-status-dialog id="dialog" ${dialogAttributes}>
      ${dialogContent[state]}
      <cv-button raised slot="primaryAction" dialogAction="close">Close</cv-button>
    </cv-status-dialog>`;
};

const renderStatusDialogWithDetails = ({
  state,
  open,
  hideActions,
  heading,
  stacked,
  scrimClickAction,
  escapeKeyAction,
  defaultAction,
  actionAttribute,
  initialFocusAttribute,
}) => {
  setupDialogTrigger('#dialog-button-2', '#dialog-2');

  const dialogAttributes = getDialogAttributes({
    state,
    open,
    heading,
    hideActions,
    stacked,
    scrimClickAction,
    escapeKeyAction,
    defaultAction,
    actionAttribute,
    initialFocusAttribute,
  });

  return `
    <cv-button id="dialog-button-2" raised>Open dialog with details</cv-button>
    <cv-status-dialog id="dialog-2" ${dialogAttributes}>
      ${dialogContent[state]}
      <div slot="details">
        <cv-code-snippet language="sql" hideHeader=true>
          ${sqlContent}
        </cv-code-snippet>
      </div>
      <cv-button raised slot="primaryAction" dialogAction="close">Close</cv-button>
    </cv-status-dialog>`;
};

export const Basic = {
  render: renderStatusDialog,
};

export const Positive = {
  render: renderStatusDialog,
  args: {
    state: 'positive',
    heading: 'Data sharing users added',
  },
};

export const Warning = {
  render: renderStatusDialog,
  args: {
    state: 'warning',
    heading: 'Warning',
  },
};

export const Error = {
  render: renderStatusDialog,
  args: {
    state: 'error',
    heading: 'Couldn’t add data sharing users',
  },
};

export const WithDetails = {
  render: renderStatusDialogWithDetails,
  args: {
    heading: 'Couldn’t add data sharing users',
  },
};
