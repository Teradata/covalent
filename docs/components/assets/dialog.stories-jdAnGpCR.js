import"./dialog-BpuVcT00.js";import"./button-CSvUWjf2.js";import"./textfield-BmoKKlvp.js";import"./query-assigned-elements-XF8sHqwE.js";import"./tslib.es6-B8g9kRRR.js";import"./inert.esm-B2yBlFbY.js";import"./base-element-CGkZ9Caz.js";import"./utils-DQt7ZoY7.js";import"./observer-D8jHVEI7.js";import"./query-BIWRq3i5.js";import"./class-map-j_UyOF6B.js";import"./directive-CF8sV3Lr.js";import"./mwc-icon-CKAD9T7f.js";import"./ripple-handlers-QIcOqcqN.js";import"./state-DigO7a43.js";import"./style-map-BvUKPc5V.js";import"./aria-property-BYXgNswj.js";import"./event-options-C2Dj4usW.js";import"./if-defined-a0dakvOI.js";import"./textfield-C7CJL8Wi.js";import"./mwc-line-ripple-directive-Cy-oU0eS.js";import"./form-element-D0P3OMbx.js";import"./directive-helpers-BPGTDVDR.js";const s=`<cv-button data-num="1" raised>Basic</cv-button>
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
  <cv-button slot="secondaryAction">This does not</cv-button>
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

<cv-button data-num="4" raised>Hide actions</cv-button>
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

<cv-button data-num="7" raised>Initial focus</cv-button>
<cv-dialog id="dialog7" heading="Initial Focus">
  <p>
    In this example we set "dialogInitialFocus" on the mwc-textfield. When this
    dialog opens, it is auto-focused.
  </p>
  <cv-textfield label="i am auto-focused" dialogInitialFocus> </cv-textfield>
  <cv-button slot="primaryAction" dialogAction="close"> Primary </cv-button>
  <cv-button slot="secondaryAction" dialogAction="close"> Secondary </cv-button>
</cv-dialog>

<cv-button data-num="8" raised>Form validation</cv-button>
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
`,d=({})=>(document.addEventListener("DOMContentLoaded",()=>{const t=document.body.querySelectorAll("cv-button[data-num]");for(let l=0;l<t.length;l++){const i=t[l],n=i.dataset.num,c=(a=>function(){const r=document.body.querySelector("#dialog"+a);r.open=!0})(n);i.addEventListener("click",c)}window.toggleActions.onclick=function(){const l=document.body.querySelector("#dialog4"),i=document.body.querySelector("#hideActionVal"),n=!l.hideActions;l.hideActions=n,i.innerText=n};const o=document.querySelector("#dialog8"),e=document.querySelector("#dialog8-text-field");document.querySelector("#dialog8-primary-action-button").addEventListener("click",()=>{if(e.checkValidity()){o.close();return}e.reportValidity()})},{once:!0}),s),H={title:"Components/Dialog"},g=({trapFocus:t})=>(document.addEventListener("DOMContentLoaded",()=>{document.body.querySelector("#dialog-button").addEventListener("click",()=>{const e=document.body.querySelector("#dialog1");e.open=!0})},{once:!0}),`
    <cv-button id="dialog-button" raised>Open basic dialog</cv-button>
    <cv-dialog id="dialog1" heading="Dialog header" ${t?"trapFocus":""} scrimClickAction="">
      Dialog body text
      <cv-button slot="primaryAction" dialogAction="close">Action 2</cv-button>
      <cv-button slot="secondaryAction" dialogAction="close">Action 1</cv-button>
    </cv-dialog>`),N=d.bind({}),y=g.bind({});y.args={trapFocus:!0};const x=()=>(document.addEventListener("DOMContentLoaded",()=>{document.body.querySelector("#logout-button").addEventListener("click",()=>{const o=document.body.querySelector("#example-logout");o.open=!0})},{once:!0}),`
  <cv-button id="logoout-button" raised>Open logout dialog</cv-button>
  <cv-dialog id="example-logout" heading="You will be logged out soon" scrimClickAction="">
            Due to inactivity, you’ll be logged out in 3 minutes to protect your security.
            <cv-button slot="primaryAction" dialogAction="close">Log out</cv-button>
            <cv-button slot="secondaryAction" dialogAction="close">Stay logged in</cv-button>
          </cv-dialog>`),P=x.bind({}),u=({})=>(document.addEventListener("DOMContentLoaded",()=>{document.body.querySelector("#udf-button").addEventListener("click",()=>{const o=document.body.querySelector("#example-udf");o.open=!0})},{once:!0}),`
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
          </cv-dialog>`),j=u.bind({}),W=["Basic","Anatomy","Logout","UDF"];export{y as Anatomy,N as Basic,P as Logout,j as UDF,W as __namedExportsOrder,H as default};
