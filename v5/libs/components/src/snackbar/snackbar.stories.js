import './snackbar';
import '../button/button';
import '../icon-button/icon-button';

export default {
  title: 'Components/Snackbar',
  argTypes: {
    stacked: {
      control: 'boolean',
      defaultValue: false,
    },
    leading: {
      control: 'boolean',
      defaultValue: false,
    },
    label: {
      control: 'text',
      defaultValue: "Can't send photo. Retry in 5 seconds.",
    },
  },
};

const Template = ({ label, leading, stacked }) => {
  document.addEventListener(
    'DOMContentLoaded',
    () => {
      const snackbar = document.querySelector('cv-snackbar');
      const snackbarTarget = document.querySelector('.show-snackbar-button');

      snackbarTarget.addEventListener('click', () => {
        return snackbar.open ? snackbar.close() : snackbar.show();
      });
    },
    { once: true }
  );

  return `
    <cv-button class="show-snackbar-button">Toggle Snackbar</cv-button>
    <cv-snackbar
       class="my-snackbar"
       labelText="${label}"
       ${leading ? 'leading' : null}
       ${stacked ? 'stacked' : null}>
      <cv-button slot="action">RETRY</cv-button>
      <cv-icon-button icon="close" slot="dismiss"></cv-icon-button>
    </cv-snackbar>`;
};

export const Basic = Template.bind({});
Basic.args = {};
