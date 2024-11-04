import{i as h,r as d,x as b,e as f}from"./query-assigned-elements-9f88bee1.js";import{n as y}from"./property-f36ea729.js";import{b as x}from"./side-sheet-2471e78a.js";import{a as m}from"./dialog-b47f876c.js";import"./focused-page-e02dac52.js";import"./button-47b88b40.js";import"./toolbar-44c5c2b2.js";import"./icon-button-7258a669.js";import"./icon-button-toggle-5afc3a79.js";import"./icon-radio-toggle-bc3c1594.js";import"./typography-25d74d73.js";import"./icon-33ce3398.js";import"./tslib.es6-6921e62d.js";import"./inert.esm-a76031cb.js";import"./base-element-cae00a28.js";import"./utils-529e1a6d.js";import"./observer-1f401936.js";import"./query-3e91a3b8.js";import"./class-map-4e4d6bc9.js";import"./directive-12249aa5.js";import"./mwc-icon-4afc0ea5.js";import"./ripple-handlers-4e438af8.js";import"./state-2a0073ff.js";import"./style-map-ec903154.js";import"./aria-property-3dc182ec.js";import"./event-options-b5830ec0.js";import"./if-defined-c3862b86.js";import"./mwc-top-app-bar-base-3fd10d04.js";import"./mwc-radio-base-4cfe3538.js";import"./form-element-8fe2c680.js";import"./mwc-radio.css-c27ab7a1.js";const w=`:host{--cv-dialog-border-radius: 0;--cv-dialog-horizontal-padding: 0;--cv-dialog-vertical-padding: 0;--cv-side-sheet-width: 100vw}
`;var q=Object.defineProperty,k=Object.getOwnPropertyDescriptor,p=(t,e,n,i)=>{for(var o=i>1?void 0:i?k(e,n):e,c=t.length-1,a;c>=0;c--)(a=t[c])&&(o=(i?a(e,n,o):a(o))||o);return i&&o&&q(e,n,o),o};let s=class extends m{constructor(){super(...arguments),this.helpOpen=!1,this.helpResizable=!1}getInitialFocusEl(){const t=`[${this.initialFocusAttribute}]`,e=this.querySelector(t);return e||this.renderRoot.querySelector("cv-focused-page")}render(){return b` <div
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
      ${d(m.styles)} ${d(x)} ${d(w)}
    `];p([y({type:Boolean,reflect:!0})],s.prototype,"helpOpen",2);p([y({type:Boolean,reflect:!0})],s.prototype,"helpResizable",2);s=p([f("cv-full-screen-dialog")],s);const te={title:"Components/Full-screen dialog",argTypes:{},args:{helpOpen:!1,helpResizable:!1,open:!1,escapeKeyAction:"close"}},O=({helpOpen:t,helpResizable:e,open:n,escapeKeyAction:i})=>(document.addEventListener("DOMContentLoaded",()=>{const o=document.body.querySelector("#dialog-button"),c=document.body.querySelector(".help-toggle"),a=document.body.querySelector(".full-screen-dialog-close");o.addEventListener("click",()=>{const l=document.body.querySelector("#dialog1");l.open=!0}),c.addEventListener("click",()=>{const l=document.body.querySelector("#dialog1");l.helpOpen=!l.helpOpen}),a.addEventListener("click",()=>{const l=document.body.querySelector("#dialog1");l.open=!1})},{once:!0}),`
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
</cv-full-screen-dialog>`),r=O.bind({});var v,u,g;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`({
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
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const ne=["Basic"];export{r as Basic,ne as __namedExportsOrder,te as default};
