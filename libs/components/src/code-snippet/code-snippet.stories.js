import './code-snippet';
import '../dialog/dialog';
import '../icon-button/icon-button';
import '../button/button';

import { addons } from 'storybook/preview-api';
import {
  DARK_MODE_EVENT_NAME,
  UPDATE_DARK_MODE_EVENT_NAME,
} from '@vueless/storybook-dark-mode';

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
  args: {
    hideHeader: false,
    inline: false,
    label: 'Example.sql',
    language: 'sql',
    content: sqlContent,
    maxHeight: 0,
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
    { once: true },
  );
  return `
    <cv-code-snippet
        label="${label}"
        maxHeight="${maxHeight}"
        language="${language}"
        ${hideHeader ? 'hideHeader' : ''}
        ${inline ? 'inline' : ''}>
    <cv-icon-button slot="actionItems" id="theme-toggle"></cv-icon-button>
    <cv-icon-button slot="actionItems" icon="content_copy"></cv-icon-button>
    ${content}
    </cv-code-snippet>`;
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
    cv-code-snippet {
        margin:8px -24px -36px;
    }
    cv-code-snippet::part(container) {
        padding-left: 8px;
        padding-right: 8px;
    }
    cv-code-snippet::part(header) {
        padding-left: 24px;
    }
    </style>
    <cv-dialog heading="Lorem ipsum dolor sit amet" open>
        <cv-typography scale="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor consectetur quis velit donec vel integer diam. Nisl pretium egestas ultrices facilisis sed amet et. Odio elementum ut eu magnis at ullamcorper euismod.</cv-typography>
        ${Template(...args)}
        <cv-button outlined slot="primaryAction">Export</cv-button>
        <cv-button slot="secondaryAction">Close</cv-button>
    </cv-dialog>
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
