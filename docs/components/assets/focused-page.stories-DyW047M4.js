import"./focused-page-C10os8mY.js";import"./button-CSvUWjf2.js";import"./toolbar-DCuo9N4o.js";import"./icon-button-DGcsxBW_.js";import"./icon-button-toggle-Caw8kTTc.js";import"./icon-radio-toggle-CDOCLzag.js";import"./typography-Ds7ZYN-2.js";import"./icon-CrSZ4KIT.js";import"./query-assigned-elements-XF8sHqwE.js";import"./query-BIWRq3i5.js";import"./class-map-j_UyOF6B.js";import"./directive-CF8sV3Lr.js";import"./tslib.es6-B8g9kRRR.js";import"./mwc-icon-CKAD9T7f.js";import"./ripple-handlers-QIcOqcqN.js";import"./base-element-CGkZ9Caz.js";import"./utils-DQt7ZoY7.js";import"./state-DigO7a43.js";import"./style-map-BvUKPc5V.js";import"./aria-property-BYXgNswj.js";import"./event-options-C2Dj4usW.js";import"./if-defined-a0dakvOI.js";import"./mwc-top-app-bar-base-Bo40xJaY.js";import"./mwc-icon-button.css-DWhRmKK6.js";import"./mwc-radio.css-Bq6X7dw0.js";import"./form-element-D0P3OMbx.js";import"./observer-D8jHVEI7.js";const $={title:"Components/Focused page",argTypes:{},args:{helpOpen:!1,helpResizable:!1,hideTopBorder:!1},parameters:{layout:"fullscreen"}},s=({helpOpen:c,helpResizable:a,hideTopBorder:l})=>(document.addEventListener("DOMContentLoaded",()=>{document.body.querySelector(".help-toggle").addEventListener("click",()=>{const t=document.body.querySelector("#focused-page");t.helpOpen=!t.helpOpen})},{once:!0}),`
<cv-focused-page id="focused-page" scrimClickAction="" ${a?" helpResizable":""}${c?" helpOpen":""}${l?" hideTopBorder":""}>
    <!-- Content to be rendered in the focused page component -->
    <!-- Replace with any content as desired -->
    
    <cv-toolbar>
        <span slot="title">
            Connect data source
        </span>
        <cv-icon-button-toggle onIcon="help" offIcon="help" class="help-toggle"
            slot="actionItems"></cv-icon-button-toggle>
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
</cv-focused-page>`),e=s.bind({});var n,o,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`({
  helpOpen,
  helpResizable,
  hideTopBorder
}) => {
  document.addEventListener('DOMContentLoaded', () => {
    const helpToggleButton = document.body.querySelector('.help-toggle');
    helpToggleButton.addEventListener('click', () => {
      const dialog = document.body.querySelector('#focused-page');
      dialog.helpOpen = !dialog.helpOpen;
    });
  }, {
    once: true
  });
  return \`
<cv-focused-page id="focused-page" scrimClickAction="" \${helpResizable ? ' helpResizable' : ''}\${helpOpen ? ' helpOpen' : ''}\${hideTopBorder ? ' hideTopBorder' : ''}>
    <!-- Content to be rendered in the focused page component -->
    <!-- Replace with any content as desired -->
    
    <cv-toolbar>
        <span slot="title">
            Connect data source
        </span>
        <cv-icon-button-toggle onIcon="help" offIcon="help" class="help-toggle"
            slot="actionItems"></cv-icon-button-toggle>
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
</cv-focused-page>\`;
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const Q=["Basic"];export{e as Basic,Q as __namedExportsOrder,$ as default};
