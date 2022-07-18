import './snackbar';
import '../button/button';
import '../icon-button/icon-button';

export default {
  title: 'Components/Snackbar',
  argTypes: {
    stacked:  {
      control: 'boolean',
      defaultValue: false,
    },
    leading:  {
      control: 'boolean',
      defaultValue: false,
    },
    label:  {
      control: 'text',
      defaultValue: 'Can\'t send photo. Retry in 5 seconds.',
    },
  }
};

const Template = ({ label, leading, stacked, }) => {
  let snackbar = undefined;

  document.addEventListener('DOMContentLoaded', () => {
    const snackbar = document.querySelector('td-snackbar');
    const snackbarTarget = document.querySelector('.show-snackbar-button');

    snackbarTarget.addEventListener('click', ( ) => {
      return snackbar.open ? snackbar.close() : snackbar.show();
    });
  }, { once : true });


    return `
    <td-button class="show-snackbar-button">Toggle Snackbar</td-button>
    <td-snackbar
       class="my-snackbar"
       labelText="${label}"
       ${leading ? 'leading' : null }
       ${stacked ? 'stacked' : null }>
      <td-button slot="action">RETRY</td-button>
      <td-icon-button icon="close" slot="dismiss"></td-icon-button>
    </td-snackbar>`;
};

export const Basic = Template.bind({});
Basic.args = {
}
