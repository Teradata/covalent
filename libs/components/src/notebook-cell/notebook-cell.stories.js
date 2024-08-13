import './notebook-cell';
import '../alert/alert';
import '../icon/icon';
import '../typography/typography';
import '../list/list';
import '../list/list-item';

export default {
  title: 'Components/Notebook Cell',
  args: {
    code: 'Select * from DBC.UserInfo;',
    index: 0,
    language: 'sql',
    loading: false,
    selected: true,
    hideCount: false,
    hideEditor: false,
    theme: 'cv-light',
    timesExecuted: 2,
  },
};

const Template = ({
  code,
  index,
  language,
  loading,
  selected,
  hideCount,
  hideEditor,
  theme,
  timesExecuted,
}) => {
  return `<div style="width: 80vw;">
            <cv-notebook-cell code="${code}" index="${index}" language="${language}" timesExecuted="${timesExecuted}" editorTheme="${theme}" ${
    hideEditor ? 'hideEditor' : ''
  } ${selected ? 'selected' : ''} ${loading ? 'loading' : ''} ${
    hideCount ? 'hideCount' : ''
  }>
              <div slot="error" style="margin-top: 1rem;">
                <cv-alert
                    descriptionText="Could not load data!"
                    state="negative"
                    icon="error"
                    iconAriaLabel="error"
                  >
                  </cv-alert>
              </div>
              <div slot="output">
                <cv-typography scale="headline4" style="margin:1rem 0;">Create and Populate Tables</cv-typography>
                <cv-typography scale="body1">Tables are created and populated using SQL</cv-typography>
              </div>
              <div slot="context-menu">
                <cv-list activatable>
                  <cv-list-item>Cut</cv-list-item>
                  <cv-list-item>Copy</cv-list-item>
                  <cv-list-item>Paste</cv-list-item>
                  <cv-list-item disabled><div>Delete</div></cv-list-item>
                  <li divider></li>
                  <cv-list-item>Clear outputs</cv-list-item>
                  <cv-list-item>Restart</cv-list-item>
                </cv-cv-list>
              </div>
            </cv-notebook-cell>
          </div>`;
};

export const Basic = Template.bind({});
