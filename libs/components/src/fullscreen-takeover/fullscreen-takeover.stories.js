import './fullscreen-takeover';
import '../button/button';

export default {
  title: 'Components/Fullscreen Takeover',
  argTypes: {},
  args: {},
};

const Template = () => {
  document.addEventListener(
    'DOMContentLoaded',
    () => {
      const button = document.body.querySelector('#dialog-button');
      button.addEventListener('click', () => {
        const dialog = document.body.querySelector('#dialog1');
        dialog.open = true;
      });
    },
    { once: true }
  );
  return `
    <cv-button id="dialog-button" raised>Open basic dialog</cv-button>
    <cv-fullscreen-takeover id="dialog1" scrimClickAction="">
      Dialog body text
      <cv-button slot="primaryAction" dialogAction="close">Action 2</cv-button>
      <cv-button slot="secondaryAction" dialogAction="close">Action 1</cv-button>
    </cv-fullscreen-takeover>`;
};

export const Basic = Template.bind({});
