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
    state: {
      options: ['error', 'positive', 'warning'],
      control: { type: 'select' },
    },
  },
  args: {
    state: 'error',
    open: false,
    hideActions: false,
    heading: 'Basic heading for the dialog',
  },
  tags: ['autodocs'],
};

const Template = ({ state, hideActions, heading }) => {
  document.addEventListener(
    'DOMContentLoaded',
    () => {
      const button = document.body.querySelector('#dialog-button');
      button.addEventListener('click', () => {
        const dialog = document.body.querySelector('#dialog');
        dialog.open = true;
      });
    },
    { once: true },
  );

  const buttonName = `${heading}`.includes('Basic')
    ? 'Open basic dialog'
    : `${`${state[0]}`.toUpperCase()}${`${state}`.substring(1)}`;

  return `
    <cv-button id="dialog-button" raised>${buttonName}</cv-button>
    <cv-status-dialog id="dialog" state="${state}" heading="${heading}" ${
      hideActions ? 'hideActions' : ''
    } scrimClickAction="" >
      ${dialogContent[state]}
      <cv-button raised slot="primaryAction" dialogAction="close">Close</cv-button>
    </cv-status-dialog>`;
};

const TemplateWithDetails = ({ state, hideActions, heading }) => {
  document.addEventListener(
    'DOMContentLoaded',
    () => {
      const button = document.body.querySelector('#dialog-button-2');
      button.addEventListener('click', () => {
        const dialog = document.body.querySelector('#dialog-2');
        dialog.open = true;
      });
    },
    { once: true },
  );

  return `
    <cv-button id="dialog-button-2" raised>Open dialog with details</cv-button>
    <cv-status-dialog id="dialog-2" state="${state}" heading="${heading}" ${
      hideActions ? 'hideActions' : ''
    } scrimClickAction="" >
      ${dialogContent[state]}
      <div slot="details">
        <cv-code-snippet language="sql" hideHeader=true>
          ${sqlContent}
        </cv-code-snippet>
      </div>
      <cv-button raised slot="primaryAction" dialogAction="close">Close</cv-button>
    </cv-status-dialog>`;
};

export const Basic = Template.bind({});

export const Positive = Template.bind({});
Positive.args = {
  state: 'positive',
  heading: 'Data sharing users added',
};

export const Warning = Template.bind({});
Warning.args = {
  state: 'warning',
  heading: 'Warning',
};

export const Error = Template.bind({});
Error.args = {
  state: 'error',
  heading: 'Couldn’t add data sharing users',
};

export const WithDetails = TemplateWithDetails.bind({});
WithDetails.args = {
  heading: 'Couldn’t add data sharing users',
};
