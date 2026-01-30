import{r as p,i as h,n as m,x as b,e as f}from"./query-assigned-elements-BJdb4KNY.js";import{C as y}from"./dialog-CyJJRUa7.js";import"./focused-page-Kh9nJknR.js";import"./button-ADBjHWlY.js";import"./toolbar-w76mbf6v.js";import"./icon-button-DIHzEZC4.js";import"./icon-button-toggle-b1MeLBq4.js";import"./icon-radio-toggle-DKBzFDYB.js";import"./typography-Cz0H0E8U.js";import"./icon-BYPYUWym.js";import"./tslib.es6-C-hQhb2A.js";import"./inert.esm-CIOG4SQk.js";import"./base-element-C3CkHPn4.js";import"./utils-DQt7ZoY7.js";import"./observer-D8jHVEI7.js";import"./query-pFbEai1B.js";import"./class-map-LmxYoNzI.js";import"./directive-CvdRHFdJ.js";import"./mwc-icon-BGUO1vKj.js";import"./ripple-handlers-CLC5WHP1.js";import"./state-CGn7W7VL.js";import"./style-map-CNNK6hz8.js";import"./aria-property-BYXgNswj.js";import"./event-options-CZVCfsC0.js";import"./if-defined-dAx6j6jI.js";import"./mwc-top-app-bar-base-C3czOyFE.js";import"./mwc-icon-button.css-DLV-hkFx.js";import"./mwc-radio.css-CYBVOn9u.js";import"./form-element-BmZ4g8Y6.js";const x=":host{--cv-dialog-border-radius: 0;--cv-dialog-horizontal-padding: 0;--cv-dialog-vertical-padding: 0;--mdc-dialog-scrim-color: transparent;--mdc-dialog-min-width: 100vw;--mdc-dialog-max-width: 100vw;--mdc-dialog-min-height: 100vh;--mdc-dialog-max-height: 100vh}.mdc-dialog .mdc-dialog__container{opacity:1;transform:translate(100%);transition:transform .3s ease}.mdc-dialog--opening .mdc-dialog__container{transform:translate(100%)}.mdc-dialog--open .mdc-dialog__container{transform:translate(0);transition:transform .3s ease}.mdc-dialog--closing .mdc-dialog__container{opacity:1;transform:translate(100%);transition:transform .3s ease}";var w=Object.defineProperty,q=Object.getOwnPropertyDescriptor,d=(t,e,n,i)=>{for(var o=i>1?void 0:i?q(e,n):e,c=t.length-1,a;c>=0;c--)(a=t[c])&&(o=(i?a(e,n,o):a(o))||o);return i&&o&&w(e,n,o),o};let s=class extends y{constructor(){super(...arguments),this.helpOpen=!1,this.helpResizable=!1}getInitialFocusEl(){const t=`[${this.initialFocusAttribute}]`,e=this.querySelector(t);return e||this.renderRoot.querySelector("cv-focused-page")}render(){return b` <div
      class="mdc-dialog"
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="title"
      aria-describedby="content"
    >
      <div class="mdc-dialog__container">
        <div class="mdc-dialog__surface">
          <div id="content" class="mdc-dialog__content">
            <cv-focused-page
              .helpOpen="${this.helpOpen}"
              .helpResizable="${this.helpResizable}"
              .hideTopBorder="${!0}"
            >
              <slot></slot>
              <slot name="help" slot="help"> </slot>
            </cv-focused-page>
          </div>
        </div>
      </div>
      <div class="mdc-dialog__scrim"></div>
    </div>`}};s.styles=[h`
      ${p(y.styles)} ${p(x)}
    `];d([m({type:Boolean,reflect:!0})],s.prototype,"helpOpen",2);d([m({type:Boolean,reflect:!0})],s.prototype,"helpResizable",2);s=d([f("cv-full-screen-dialog")],s);const Z={title:"Components/Full-screen dialog",argTypes:{},args:{helpOpen:!1,helpResizable:!1,open:!1,escapeKeyAction:"close"}},k=({helpOpen:t,helpResizable:e,open:n,escapeKeyAction:i})=>(document.addEventListener("DOMContentLoaded",()=>{const o=document.body.querySelector("#dialog-button"),c=document.body.querySelector(".help-toggle"),a=document.body.querySelector(".full-screen-dialog-close");o.addEventListener("click",()=>{const l=document.body.querySelector("#dialog1");l.open=!0}),c.addEventListener("click",()=>{const l=document.body.querySelector("#dialog1");l.helpOpen=!l.helpOpen}),a.addEventListener("click",()=>{const l=document.body.querySelector("#dialog1");l.open=!1})},{once:!0}),`
<cv-button id="dialog-button" raised>Open full-screen dialog</cv-button>
<cv-full-screen-dialog id="dialog1"  scrimClickAction="" ${n?" open":""} escapeKeyAction="${i}"${e?" helpResizable":""}${t?" helpOpen":""}>
    <!-- Content to be rendered in the full-screen dialog component -->
    <!-- Replace with any content as desired -->
    
    <cv-toolbar>
        <span slot="title">
          Connect data source
        </span>
        <cv-icon-button-toggle onIcon="help" offIcon="help" class="help-toggle"
            slot="actionItems"></cv-icon-button-toggle>
        <cv-icon-button icon="close" class="full-screen-dialog-close"
            slot="actionItems"></cv-icon-button>
    </cv-toolbar>
    <div style="display:flex; gap: 3rem; flex-wrap: wrap; padding: 2rem 1rem 1.5rem; max-width: 1200px">
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
    <!-- Content rendered in the help section of the component -->
    <!-- Replace with any content as desired -->
    <div slot="help">
        <cv-toolbar sticky>
            <span slot="title" style="padding-left: 4px;">Help</span>
            <cv-icon-button slot="actionItems" icon="undock" covalent-icons></cv-icon-button>
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
        </div>
    </div>
</cv-full-screen-dialog>`),r=k.bind({});var v,u,g;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`({
  helpOpen,
  helpResizable,
  open,
  escapeKeyAction
}) => {
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.body.querySelector('#dialog-button');
    const helpToggleButton = document.body.querySelector('.help-toggle');
    const fullscreenCloseButton = document.body.querySelector('.full-screen-dialog-close');
    button.addEventListener('click', () => {
      const dialog = document.body.querySelector('#dialog1');
      dialog.open = true;
    });
    helpToggleButton.addEventListener('click', () => {
      const dialog = document.body.querySelector('#dialog1');
      dialog.helpOpen = !dialog.helpOpen;
    });
    fullscreenCloseButton.addEventListener('click', () => {
      const dialog = document.body.querySelector('#dialog1');
      dialog.open = false;
    });
  }, {
    once: true
  });
  return \`
<cv-button id="dialog-button" raised>Open full-screen dialog</cv-button>
<cv-full-screen-dialog id="dialog1"  scrimClickAction="" \${open ? ' open' : ''} escapeKeyAction="\${escapeKeyAction}"\${helpResizable ? ' helpResizable' : ''}\${helpOpen ? ' helpOpen' : ''}>
    <!-- Content to be rendered in the full-screen dialog component -->
    <!-- Replace with any content as desired -->
    
    <cv-toolbar>
        <span slot="title">
          Connect data source
        </span>
        <cv-icon-button-toggle onIcon="help" offIcon="help" class="help-toggle"
            slot="actionItems"></cv-icon-button-toggle>
        <cv-icon-button icon="close" class="full-screen-dialog-close"
            slot="actionItems"></cv-icon-button>
    </cv-toolbar>
    <div style="display:flex; gap: 3rem; flex-wrap: wrap; padding: 2rem 1rem 1.5rem; max-width: 1200px">
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
    <!-- Content rendered in the help section of the component -->
    <!-- Replace with any content as desired -->
    <div slot="help">
        <cv-toolbar sticky>
            <span slot="title" style="padding-left: 4px;">Help</span>
            <cv-icon-button slot="actionItems" icon="undock" covalent-icons></cv-icon-button>
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
        </div>
    </div>
</cv-full-screen-dialog>\`;
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const ee=["Basic"];export{r as Basic,ee as __namedExportsOrder,Z as default};
