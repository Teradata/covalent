import './fullscreen-takeover';
import '../button/button';
import '../toolbar/toolbar';
import '../icon-button/icon-button';
import '../icon-button-toggle/icon-button-toggle';
import '../icon-radio/icon-radio-toggle';
import '../typography/typography';
import '../icon/icon';

export default {
  title: 'Components/Fullscreen Takeover',
  argTypes: {},
  args: {
    helpOpen: false,
    helpResizable: false,
    open: false,
    escapeKeyAction: 'close',
  },
};

const Template = ({ helpOpen, helpResizable, open, escapeKeyAction }) => {
  document.addEventListener(
    'DOMContentLoaded',
    () => {
      const button = document.body.querySelector('#dialog-button');
      button.addEventListener('click', () => {
        const dialog = document.body.querySelector('#dialog1');
        dialog.open = true;
      });
      const helpCloseButton = document.body.querySelector('.help-close');
      helpCloseButton.addEventListener('click', () => {
        const dialog = document.body.querySelector('#dialog1');
        dialog.helpOpen = false;
      });
      const helpToggleButton = document.body.querySelector('.help-toggle');
      helpToggleButton.addEventListener('click', () => {
        const dialog = document.body.querySelector('#dialog1');
        dialog.helpOpen = !dialog.helpOpen;
      });
      const fullscreenCloseButton = document.body.querySelector(
        '.fullscreen-takeover-close'
      );
      fullscreenCloseButton.addEventListener('click', () => {
        const dialog = document.body.querySelector('#dialog1');
        dialog.open = false;
      });
    },
    { once: true }
  );

  return `
<cv-button id="dialog-button" raised>Open basic dialog</cv-button>
<cv-fullscreen-takeover id="dialog1" scrimClickAction="" ${
    helpResizable ? ' helpResizable' : ''
  }${helpOpen ? ' helpOpen' : ''}${
    open ? ' open' : ''
  } escapeKeyAction="${escapeKeyAction}">
    <!-- Content to be rendered in the fullscreen takover component -->
    <!-- Replace with any content as desired -->
    <div style="margin: 0.5rem;">
        <cv-toolbar>
            <span slot="title">
                <cv-typography scale="headline4">
                    Connect data source
                </cv-typography>
            </span>
            <cv-icon-button-toggle onIcon="help" offIcon="help" class="help-toggle"
                slot="actionItems"></cv-icon-button-toggle>
            <cv-icon-button icon="close" class="fullscreen-takeover-close" slot="actionItems">
            </cv-icon-button>
        </cv-toolbar>
        <div style="display:flex; gap: 3rem; flex-wrap: wrap; padding: 2rem 1rem; max-width: 1200px">
            <div>
                <div style="display:flex;">
                    <span>
                        <cv-icon-button-toggle onIcon="info" offIcon="info" toggledOn></cv-icon-button-toggle>
                    </span>
                    <div style="display: inline-block; margin: 0 0 1rem 1rem;">
                        <cv-typography scale="subtitle1">
                            Select model
                        </cv-typography>
                        <cv-typography scale="caption">
                            Select the industry data model for your organization
                        </cv-typography>
                    </div>
                </div>
                <div style="display:flex; margin-top: 1rem;">
                    <span>
                        <cv-icon-button-toggle onIcon="info" offIcon="info" toggledOn></cv-icon-button-toggle>
                    </span>
                    <div style="display: inline-block; margin: 0 0 1rem 1rem;">
                        <cv-typography scale="subtitle1">
                            Review details
                        </cv-typography>
                        <cv-typography scale="caption">
                            Preview the selected model and sample schema
                        </cv-typography>
                    </div>
                </div>
                <div style="display:flex; margin-top: 1rem;">
                    <span>
                        <cv-icon-button-toggle onIcon="info" offIcon="info" toggledOn></cv-icon-button-toggle>
                    </span>
                    <div style="display: inline-block; margin: 0 0 1rem 1rem;">
                        <cv-typography scale="subtitle1">
                            Install
                        </cv-typography>
                        <cv-typography scale="caption">
                            Acknowledge creation of database and install
                        </cv-typography>
                    </div>
                </div>
            </div>
            <div
                style="display: grid; grid-template-columns: repeat(auto-fill, minmax(235px, 1fr)); gap: 1rem; flex: 1">
                <cv-radio-icon>
                    <cv-icon slot="icon">work</cv-icon>
                    <div slot="text">Balanced</div>
                    <div slot="text">Every week</div>
                </cv-radio-icon>
                <cv-radio-icon>
                    <cv-icon slot="icon">work</cv-icon>
                    <div slot="text">Balanced</div>
                    <div slot="text">Every week</div>
                </cv-radio-icon>
                <cv-radio-icon>
                    <cv-icon slot="icon">work</cv-icon>
                    <div slot="text">Balanced</div>
                    <div slot="text">Every week</div>
                </cv-radio-icon>
                <cv-radio-icon>
                    <cv-icon slot="icon">work</cv-icon>
                    <div slot="text">Balanced</div>
                    <div slot="text">Every week</div>
                </cv-radio-icon>
            </div>
        </div>
    </div>
    <!-- Content rendered in the help section of the component -->
    <!-- Replace with any content as desired -->
    <div slot="help">
        <cv-toolbar sticky>
            <span slot="title">Help</span>
            <cv-icon-button slot="actionItems" icon="undock" covalent-icons></cv-icon-button>
            <cv-icon-button slot="actionItems" icon="close" class="help-close"></cv-icon-button>
        </cv-toolbar>
        <div style="padding: 16px">
            <cv-typography scale="headline5">
                Ultricies nunc massa, id ut felis sed varius accumsan platea.
            </cv-typography>
            <br />
            <cv-typography scale="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                tincidunt lectus risus, id aliquet mi congue sed.
            </cv-typography>
            <br />
            <cv-typography scale="body1">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                pouere cubilia curae; Phasellus tincidunt eros arcu, sollicitudin
                laoreet urna aliquet eget.
            </cv-typography>
            <br />
            <cv-typography scale="body1">
                Phasellus porta sed libero vel vulputate. Quisque non nisl sem.
                Pellentesque nec pretium magna, et vestibulum neque. Mauris molestie
                eros quis nisi pretium,
            </cv-typography>
            <br />
            <cv-typography scale="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                tincidunt lectus risus, id aliquet mi congue sed.
            </cv-typography>
            <br />
            <cv-typography scale="body1">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                pouere cubilia curae; Phasellus tincidunt eros arcu, sollicitudin
                laoreet urna aliquet eget.
            </cv-typography>
            <br />
            <cv-typography scale="body1">
                Phasellus porta sed libero vel vulputate. Quisque non nisl sem.
                Pellentesque nec pretium magna, et vestibulum neque. Mauris molestie
                eros quis nisi pretium,
            </cv-typography>
        </div>
    </div>
</cv-fullscreen-takeover>`;
};

export const Basic = Template.bind({});
