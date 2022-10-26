import dialogComponent from '../../stories/demos/dialog.component';

export default {
  title: 'Components/Dialog',
  properties: {
    darkMode: { current: 'dark', stylePreview: true },
  },
};

const Template = ({ isDark }) => {
  return `<div class="${isDark ? `dark` : null}">
            <td-dialog id="dialog1" heading="Dialog header" scrimClickAction="" open>
              Dialog body text
              <td-button slot="primaryAction">Action 2</td-button>
              <td-button slot="secondaryAction">Action 1</td-button>
            </td-dialog>
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
  return `<td-dialog id="example-logout" heading="You will be logged out soon" scrimClickAction="" open>
            Due to inactivity, you’ll be logged out in 3 minutes to protect your security.
            <td-button slot="primaryAction">Log out</td-button>
            <td-button slot="secondaryAction">Stay logged in</td-button>
          </td-dialog>`;
};

export const Logout = templateLogout.bind({});
Logout.parameters = {
  docs: {
    inlineStories: false,
  },
};

const templateUDF = ({}) => {
  return `<style>
              td-formfield {
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
          <td-dialog id="example-udf" heading="Delete User Defined Function" scrimClickAction="" open>
            
            <div class="key-value">
              <div class="key-value--key mdc-typography--caption">Function to delete</div>
              <div class="key-value--value">UDF_StrCpy</div>
            </div>
            <td-formfield label="I understand that all queries currently using this UDF will be canceled">
              <td-checkbox class="child"></td-checkbox>
            </td-formfield>
            <td-button slot="primaryAction" class="destructive primary" disabled>Delete</td-button>
            <td-button slot="secondaryAction">Cancel</td-button>
          </td-dialog>`;
};

export const UDF = templateUDF.bind({});
UDF.parameters = {
  docs: {
    inlineStories: false,
  },
};
