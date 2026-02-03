import dialogComponent from '../../stories/demos/dialog.component';
import './dialog';
import '../button/button';
import '../textfield/textfield';

export default {
  title: 'Components/Dialog',
  tags: ['autodocs'],
};

const Template = ({ trapFocus }) => {
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

export const Basic = dialogComponent.bind({});

export const Anatomy = Template.bind({});
Anatomy.args = {
  trapFocus: true,
};

const templateLogout = () => {
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
  <cv-button id="logoout-button" raised>Open logout dialog</cv-button>
  <cv-dialog id="example-logout" heading="You will be logged out soon" scrimClickAction="">
            Due to inactivity, you’ll be logged out in 3 minutes to protect your security.
            <cv-button slot="primaryAction" dialogAction="close">Log out</cv-button>
            <cv-button slot="secondaryAction" dialogAction="close">Stay logged in</cv-button>
          </cv-dialog>`;
};

export const Logout = templateLogout.bind({});

const templateUDF = ({}) => {
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

export const UDF = templateUDF.bind({});
