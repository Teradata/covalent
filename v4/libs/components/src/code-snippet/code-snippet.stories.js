import './code-snippet';
import '../icon-button/icon-button';
import '../button/button';

import addons from '@storybook/addons';
import {
  DARK_MODE_EVENT_NAME,
  UPDATE_DARK_MODE_EVENT_NAME,
} from 'storybook-dark-mode';

// get channel to listen to event emitter
const channel = addons.getChannel();

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
  title: 'Components/Code snippet',
  argTypes: {
    hideHeader: {
      control: 'boolean',
      defaultValue: false,
    },
    inline: {
      control: 'boolean',
      defaultValue: false,
    },
    label: {
      control: 'text',
      defaultValue: 'Example',
    },
    language: {
      control: 'text',
      defaultValue: 'sql',
    },
    content: {
      control: 'text',
      defaultValue: sqlContent,
    },
    maxHeight: {
      control: 'number',
      defaultValue: 0,
    },
  },
};

const Template = ({
  inline,
  content,
  hideHeader,
  label,
  language,
  maxHeight,
}) => {
  document.addEventListener(
    'DOMContentLoaded',
    () => {
      const themeToggle = document.querySelector('#theme-toggle');

      // listen to DARK_MODE event
      channel.on(DARK_MODE_EVENT_NAME, (darkMode) => {
        if (darkMode) {
          themeToggle.setAttribute('icon', 'brightness_high');
        } else {
          themeToggle.setAttribute('icon', 'brightness_4');
        }
      });

      themeToggle.addEventListener('click', () => {
        channel.emit(UPDATE_DARK_MODE_EVENT_NAME);
      });
    },
    { once: true }
  );
  return `
    <td-code-snippet
        label="${label}"
        maxHeight="${maxHeight}"
        language="${language}"
        ${hideHeader ? 'hideHeader' : ''}
        ${inline ? 'inline' : ''}>
    <td-icon-button slot="actionItems" id="theme-toggle"></td-icon-button>
    <td-icon-button slot="actionItems" icon="content_copy"></td-icon-button>
    ${content}
    </td-code-snippet>`;
};

export const Basic = Template.bind();
Basic.args = {
  language: 'sql',
  content: sqlContent,
};

export const Scrollable = Template.bind();
Scrollable.args = {
  maxHeight: 250,
};

export const HiddenHeader = Template.bind();
HiddenHeader.args = {
  hideHeader: true,
};

const TemplateDialog = (...args) => {
  return `
    <style>
    td-code-snippet {
        margin:8px -24px -36px;
    }
    td-code-snippet::part(container) {
        padding-left: 8px;
        padding-right: 8px;
    }
    td-code-snippet::part(header) {
        padding-left: 24px;
    }
    </style>
    <td-dialog heading="Lorem ipsum dolor sit amet" open>
        <td-typography scale="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor consectetur quis velit donec vel integer diam. Nisl pretium egestas ultrices facilisis sed amet et. Odio elementum ut eu magnis at ullamcorper euismod.</td-typography>
        ${Template(...args)}
        <td-button outlined slot="primaryAction">Export</td-button>
        <td-button slot="secondaryAction">Close</td-button>
    </td-dialog>
    `;
};
export const Dialog = TemplateDialog.bind();
Dialog.args = {
  inline: true,
};
Dialog.parameters = {
  docs: {
    inlineStories: false,
  },
};
