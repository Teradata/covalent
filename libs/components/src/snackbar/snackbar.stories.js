import './snackbar';
import '../button/button';
import '../icon-button/icon-button';

export default {
  title: 'Components/Snackbar',
  args: {
    open: true,
    stacked: false,
    leading: false,
    closeOnEscape: false,
    timeoutMs: '5000',
    label: "Can't send photo. Retry in 5 seconds.",
  },
  tags: ['autodocs'],
};

const renderSnackbar = ({
  open,
  labelText,
  leading,
  stacked,
  closeOnEscape,
  timeoutMs,
}) => {
  document.addEventListener(
    'DOMContentLoaded',
    () => {
      const snackbar = document.querySelector('cv-snackbar');
      const snackbarTarget = document.querySelector('.show-snackbar-button');

      snackbarTarget.addEventListener('click', () => {
        return snackbar.open ? snackbar.close() : snackbar.show();
      });
    },
    { once: true },
  );

  return `
    <cv-button class="show-snackbar-button">Toggle snackbar</cv-button>
    <cv-snackbar
       class="my-snackbar"
       labelText="${labelText}"
       ${leading ? 'leading' : ''}
       ${stacked ? 'stacked' : ''}
       ${closeOnEscape ? 'closeOnEscape' : ''}
       ${timeoutMs ? `timeoutMs="${timeoutMs}"` : ''}
       ${open ? 'open' : ''}>
      <cv-button slot="action">Retry</cv-button>
      <cv-icon-button icon="close" slot="dismiss"></cv-icon-button>
    </cv-snackbar>`;
};

export const Basic = {
  render: renderSnackbar,
  args: {},
};
