import"./dialog-91ada908.js";import"./button-d9b036d1.js";import"./textfield-3bf0ddf1.js";import"./query-assigned-elements-9f88bee1.js";import"./tslib.es6-6921e62d.js";import"./inert.esm-a76031cb.js";import"./base-element-cae00a28.js";import"./utils-529e1a6d.js";import"./observer-1f401936.js";import"./property-f36ea729.js";import"./query-3e91a3b8.js";import"./class-map-4e4d6bc9.js";import"./directive-12249aa5.js";import"./mwc-icon-4afc0ea5.js";import"./ripple-handlers-4e438af8.js";import"./state-2a0073ff.js";import"./style-map-ec903154.js";import"./aria-property-3dc182ec.js";import"./event-options-b5830ec0.js";import"./if-defined-c3862b86.js";import"./textfield-ef828c0f.js";import"./mwc-line-ripple-directive-d0626047.js";import"./form-element-8fe2c680.js";import"./directive-helpers-67cb89d8.js";const h=`<cv-button data-num="1" raised>Basic</cv-button>
<cv-dialog id="dialog1" heading="Dialog header">
  Dialog body text
  <cv-button slot="primaryAction" dialogAction="ok">Action 2</cv-button>
  <cv-button slot="secondaryAction" dialogAction="cancel">Action 1</cv-button>
</cv-dialog>

<cv-button data-num="2" raised>Actions</cv-button>
<cv-dialog id="dialog2" heading="Actions">
  <p>
    By setting the dialogAction="my-action" attribute on any element projected
    into mwc-dialog, you can close the dialog by clicking on that element. The
    dialog will then fire a non-bubbling "closing" event and a non-bubbling
    "closed" event with an event detail of {action: "my-action"}
  </p>
  <cv-button slot="primaryAction" dialogAction="customAction"
    >This has action</cv-button
  >
  <cv-button slot="secondaryAction">this does not</cv-button>
</cv-dialog>

<cv-button data-num="3" raised>Scrollable</cv-button>
<cv-dialog id="dialog3" heading="My Title">
  <p>
    Really long text will scroll. Really long text will scroll. Really long text
    will scroll. Really long text will scroll. Really long text will scroll.
    Really long text will scroll. Really long text will scroll. Really long text
    will scroll. Really long text will scroll. Really long text will scroll.
    Really long text will scroll. Really long text will scroll. Really long text
    will scroll. Really long text will scroll. Really long text will scroll.
    Really long text will scroll. Really long text will scroll. Really long text
    will scroll. Really long text will scroll. Really long text will scroll.
    Really long text will scroll. Really long text will scroll. Really long text
    will scroll. Really long text will scroll. Really long text will scroll.
    Really long text will scroll. Really long text will scroll. Really long text
    will scroll. Really long text will scroll. Really long text will scroll.
    Really long text will scroll. Really log text will scroll. Really log text
    will scroll. Really log text will scroll. Really log text will scroll.
    Really log text will scroll. Really log text will scroll. Really log text
    will scroll. Really log text will scroll. Really log text will scroll.
    Really log text will scroll. Really log text will scroll. Really log text
    will scroll. Really log text will scroll. Really log text will scroll.
    Really log text will scroll. Really log text will scroll. Really log text
    will scroll. Really log text will scroll. Really log text will scroll.
    Really log text will scroll. Really log text will scroll. Really log text
    will scroll. Really log text will scroll. Really log text will scroll.
    Really log text will scroll. Really log text will scroll. Really log text
    will scroll. Really log text will scroll. Really log text will scroll.
    Really log text will scroll. Really log text will scroll. Really log text
    will scroll. Really log text will scroll. Really log text will scroll.
    Really log text will scroll. Really log text will scroll. Really log text
    will scroll. Really log text will scroll. Really log text will scroll.
    Really log text will scroll. Really log text will scroll. Really log text
    will scroll. Really log text will scroll. Really log text will scroll.
    Really log text will scroll. Really log text will scroll. Really log text
    will scroll. Really log text will scroll. Really log text will scroll.
    Really log text will scroll. Really log text will scroll. Really log text
    will scroll. Really log text will scroll. Really log text will scroll.
    Really log text will scroll. Really log text will scroll. Really log text
    will scroll. Really log text will scroll. Really log text will scroll.
    Really log text will scroll. Really log text will scroll. Really log text
    will scroll. Really log text will scroll. Really log text will scroll.
    Really log text will scroll. Really log text will scroll. Really log text
    will scroll. Really log text will scroll. Really log text will scroll.
    Really log text will scroll. Really log text will scroll. Really log text
    will scroll. Really log text will scroll. Really log text will scroll.
    Really log text will scroll. Really log text will scroll. Really log text
    will scroll. Really log text will scroll. Really log text will scroll.
    Really log text will scroll. Really log text will scroll. Really log text
    will scroll. Really log text will scroll. Really log text will scroll.
    Really log text will scroll. Really log text will scroll. Really log text
    will scroll. Really log text will scroll. Really log text will scroll.
    Really log text will scroll. Really log text will scroll. Really log text
    will scroll. Really log text will scroll. Really log text will scroll.
    Really log text will scroll. Really log text will scroll. Really log text
    will scroll. Really log text will scroll. Really log text will scroll.
    Really log text will scroll. Really log text will scroll. Really log text
    will scroll. Really log text will scroll. Really log text will scroll.
    Really log text will scroll. Really log text will scroll. Really log text
    will scroll. Really log text will scroll. Really log text will scroll.
    Really log text will scroll. Really log text will scroll. Really log text
    will scroll. Really log text will scroll. Really log text will scroll.
    Really log text will scroll. Really log text will scroll. Really log text
    will scroll. Really log text will scroll. Really log text will scroll.
    Really log text will scroll. Really log text will scroll. Really log text
    will scroll. Really log text will scroll. Really log text will scroll.
    Really log text will scroll. Really log text will scroll. Really log text
    will scroll. Really log text will scroll. Really log text will scroll.
    Really log text will scroll. Really log text will scroll. Really log text
    will scroll. Really log text will scroll. Really log text will scroll.
    Really log text will scroll. Really log text will scroll. Really log text
    will scroll. Really log text will scroll.
  </p>
  <cv-button slot="primaryAction" dialogAction="close">Close this!</cv-button>
</cv-dialog>

<cv-button data-num="4" raised>Hide Actions</cv-button>
<cv-dialog id="dialog4" heading="Hide Actions">
  <p>
    If you don't have actions, you may want to set the "hideActions" property.
    This property will remove extra whitespace at the bottom of this dialog.
    This button will toggle that whitespace:
  </p>
  <cv-button raised id="toggleActions">Toggle hideActions</cv-button>
  <div>
    mwc-dialog.hideActions is currently:
    <span id="hideActionVal"> false </span>
  </div>
</cv-dialog>

<style>
  .styled {
    --mdc-theme-surface: #fff;
    --mdc-dialog-scrim-color: rgba(35, 47, 52, 0.32);
    --mdc-dialog-heading-ink-color: #232f34;
    --mdc-dialog-content-ink-color: #232f34;
    --mdc-dialog-scroll-divider-color: transparent;
    --mdc-dialog-min-width: 500px;
    --mdc-dialog-max-width: 700px;
    --mdc-dialog-max-height: 350px;
    --mdc-dialog-shape-radius: 0px;

    /* color buttons */
    --mdc-theme-primary: #344955;
  }
</style>

<cv-button data-num="5" raised>Styled</cv-button>
<cv-dialog id="dialog5" heading="Styled" class="styled">
  <div>These are the current styles applied to this dialog</div>
  <pre>
--mdc-theme-surface: #FFF;
--mdc-dialog-scrim-color: rgba(35, 47, 52, .32);
--mdc-dialog-heading-ink-color: #232F34;
--mdc-dialog-content-ink-color: #232F34;
--mdc-dialog-scroll-divider-color: transparent;
--mdc-dialog-min-width: 500px;
--mdc-dialog-max-width: 700px;
--mdc-dialog-max-height: 350px;
--mdc-dialog-shape-radius: 0px;

/* color buttons */
--mdc-theme-primary: #344955;
        </pre
  >
  <cv-button slot="primaryAction" dialogAction="close">
    Too stylish for me!
  </cv-button>
</cv-dialog>

<cv-button data-num="6" raised>Stacked</cv-button>
<cv-dialog id="dialog6" heading="Stacked" stacked>
  <div>
    This is what happens when you set the stacked property on mwc-dialog. Notice
    that the primary action is now on top.
  </div>
  <cv-button slot="primaryAction" dialogAction="close"> Primary </cv-button>
  <cv-button slot="secondaryAction" dialogAction="close"> Secondary </cv-button>
</cv-dialog>

<cv-button data-num="7" raised>Initial Focus</cv-button>
<cv-dialog id="dialog7" heading="Initial Focus">
  <p>
    In this example we set "dialogInitialFocus" on the mwc-textfield. When this
    dialog opens, it is auto-focused.
  </p>
  <cv-textfield label="i am auto-focused" dialogInitialFocus> </cv-textfield>
  <cv-button slot="primaryAction" dialogAction="close"> Primary </cv-button>
  <cv-button slot="secondaryAction" dialogAction="close"> Secondary </cv-button>
</cv-dialog>

<cv-button data-num="8" raised>Form Validation</cv-button>
<cv-dialog id="dialog8" heading="Form Validation">
  <p>This dialog can validate user input before closing.</p>
  <cv-textfield
    id="dialog8-text-field"
    minlength="3"
    maxlength="64"
    placeholder="First name"
    required
  >
  </cv-textfield>
  <cv-button id="dialog8-primary-action-button" slot="primaryAction">
    Confirm
  </cv-button>
  <cv-button slot="secondaryAction" dialogAction="close"> Cancel </cv-button>
</cv-dialog>
`,A=({})=>(document.addEventListener("DOMContentLoaded",()=>{const o=document.body.querySelectorAll("cv-button[data-num]");for(let t=0;t<o.length;t++){const e=o[t],n=e.dataset.num,R=(b=>function(){const p=document.body.querySelector("#dialog"+b);p.open=!0})(n);e.addEventListener("click",R)}window.toggleActions.onclick=function(){const t=document.body.querySelector("#dialog4"),e=document.body.querySelector("#hideActionVal"),n=!t.hideActions;t.hideActions=n,e.innerText=n};const l=document.querySelector("#dialog8"),r=document.querySelector("#dialog8-text-field");document.querySelector("#dialog8-primary-action-button").addEventListener("click",()=>{if(r.checkValidity()){l.close();return}r.reportValidity()})},{once:!0}),h),Z={title:"Components/Dialog"},f=()=>(document.addEventListener("DOMContentLoaded",()=>{document.body.querySelector("#dialog-button").addEventListener("click",()=>{const l=document.body.querySelector("#dialog1");l.open=!0})},{once:!0}),`
    <cv-button id="dialog-button" raised>Open basic dialog</cv-button>
    <cv-dialog id="dialog1" heading="Dialog header" scrimClickAction="">
      Dialog body text
      <cv-button slot="primaryAction" dialogAction="close">Action 2</cv-button>
      <cv-button slot="secondaryAction" dialogAction="close">Action 1</cv-button>
    </cv-dialog>`),$=A.bind({}),i=f.bind({}),k=({})=>(document.addEventListener("DOMContentLoaded",()=>{document.body.querySelector("#logout-button").addEventListener("click",()=>{const l=document.body.querySelector("#example-logout");l.open=!0})},{once:!0}),`
  <cv-button id="logoout-button" raised>Open logout dialog</cv-button>
  <cv-dialog id="example-logout" heading="You will be logged out soon" scrimClickAction="">
            Due to inactivity, you’ll be logged out in 3 minutes to protect your security.
            <cv-button slot="primaryAction" dialogAction="close">Log out</cv-button>
            <cv-button slot="secondaryAction" dialogAction="close">Stay logged in</cv-button>
          </cv-dialog>`),c=k.bind({}),S=({})=>(document.addEventListener("DOMContentLoaded",()=>{document.body.querySelector("#udf-button").addEventListener("click",()=>{const l=document.body.querySelector("#example-udf");l.open=!0})},{once:!0}),`
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
          </cv-dialog>`),a=S.bind({});var s,d,g;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.body.querySelector('#dialog-button');
    button.addEventListener('click', () => {
      const dialog = document.body.querySelector('#dialog1');
      dialog.open = true;
    });
  }, {
    once: true
  });
  return \`
    <cv-button id="dialog-button" raised>Open basic dialog</cv-button>
    <cv-dialog id="dialog1" heading="Dialog header" scrimClickAction="">
      Dialog body text
      <cv-button slot="primaryAction" dialogAction="close">Action 2</cv-button>
      <cv-button slot="secondaryAction" dialogAction="close">Action 1</cv-button>
    </cv-dialog>\`;
}`,...(g=(d=i.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var y,u,x;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`({}) => {
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.body.querySelector('#logout-button');
    button.addEventListener('click', () => {
      const dialog = document.body.querySelector('#example-logout');
      dialog.open = true;
    });
  }, {
    once: true
  });
  return \`
  <cv-button id="logoout-button" raised>Open logout dialog</cv-button>
  <cv-dialog id="example-logout" heading="You will be logged out soon" scrimClickAction="">
            Due to inactivity, you’ll be logged out in 3 minutes to protect your security.
            <cv-button slot="primaryAction" dialogAction="close">Log out</cv-button>
            <cv-button slot="secondaryAction" dialogAction="close">Stay logged in</cv-button>
          </cv-dialog>\`;
}`,...(x=(u=c.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var w,m,v;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`({}) => {
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.body.querySelector('#udf-button');
    button.addEventListener('click', () => {
      const dialog = document.body.querySelector('#example-udf');
      dialog.open = true;
    });
  }, {
    once: true
  });
  return \`
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
          </cv-dialog>\`;
}`,...(v=(m=a.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};const ll=["Basic","Anatomy","Logout","UDF"];export{i as Anatomy,$ as Basic,c as Logout,a as UDF,ll as __namedExportsOrder,Z as default};
