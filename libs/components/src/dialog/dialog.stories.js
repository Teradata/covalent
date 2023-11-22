import dialogComponent from '../../stories/demos/dialog.component';
import './dialog';
import '../button/button';
import '../textfield/textfield';

export default {
  title: 'Components/Dialog',
  properties: {
    darkMode: { current: 'dark', stylePreview: true },
  },
};

const Template = ({ isDark }) => {
  return `<div class="${isDark ? `dark` : null}">
            <cv-dialog id="dialog1" heading="Dialog header" scrimClickAction="" open>
              Dialog body text
              <cv-button slot="primaryAction">Action 2</cv-button>
              <cv-button slot="secondaryAction">Action 1</cv-button>
            </cv-dialog>
          </div>`;
};

export const Basic = dialogComponent.bind({});
Basic.parameters = {
  docs: {
    inlineStories: false,
  },
};

export const Anatomy = Template.bind({});
Anatomy.parameters = {
  docs: {
    inlineStories: false,
  },
};

const templateLogout = ({}) => {
  return `<cv-dialog id="example-logout" heading="You will be logged out soon" scrimClickAction="" open>
            Due to inactivity, you’ll be logged out in 3 minutes to protect your security.
            <cv-button slot="primaryAction">Log out</cv-button>
            <cv-button slot="secondaryAction">Stay logged in</cv-button>
          </cv-dialog>`;
};

export const Logout = templateLogout.bind({});
Logout.parameters = {
  docs: {
    inlineStories: false,
  },
};

const templateUDF = ({}) => {
  return `<style>
              cv-formfield {
                  margin-left: -.75rem;
              }
              .key-value {
                margin-bottom: .5rem;
                margin-top: .5rem;
              }
              .key-value--key {
                color: --mdc-theme-text-secondary-on-background;
              }
          </style>
          <cv-dialog id="example-udf" heading="Delete User Defined Function" scrimClickAction="" open>
            
            <div class="key-value">
              <div class="key-value--key mdc-typography--caption">Function to delete</div>
              <div class="key-value--value">UDF_StrCpy</div>
            </div>
            <cv-formfield label="I understand that all queries currently using this UDF will be canceled">
              <cv-checkbox class="child"></cv-checkbox>
            </cv-formfield>
            <cv-button slot="primaryAction" class="destructive primary" disabled>Delete</cv-button>
            <cv-button slot="secondaryAction">Cancel</cv-button>
          </cv-dialog>`;
};

export const UDF = templateUDF.bind({});
UDF.parameters = {
  docs: {
    inlineStories: false,
  },
};
