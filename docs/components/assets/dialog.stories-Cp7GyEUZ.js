import"./dialog-Dv0VeR0n.js";import"./button-_PqhMK-p.js";import"./textfield-CWvtmzXh.js";import"./query-assigned-elements-BJdb4KNY.js";import"./tslib.es6-X4n3o5C8.js";import"./inert.esm-CIOG4SQk.js";import"./base-element-BG6oFIG9.js";import"./utils-sZhlDiu_.js";import"./observer-D8jHVEI7.js";import"./query-pFbEai1B.js";import"./class-map-LmxYoNzI.js";import"./directive-CvdRHFdJ.js";import"./mwc-icon-ClXlKBjv.js";import"./ripple-handlers-_TDZG32v.js";import"./state-CGn7W7VL.js";import"./style-map-CNNK6hz8.js";import"./aria-property-BYXgNswj.js";import"./event-options-CZVCfsC0.js";import"./if-defined-dAx6j6jI.js";import"./textfield-CGdfnacv.js";import"./mwc-line-ripple-directive-DW7x_YQk.js";import"./form-element-XdRIvKOk.js";import"./directive-helpers-7tzC9zVi.js";import"./circular-progress-yvfMitWj.js";const O=`<cv-button data-num="1" raised>Basic</cv-button>
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
`,V=({})=>(document.addEventListener("DOMContentLoaded",()=>{const t=document.body.querySelectorAll("cv-button[data-num]");for(let l=0;l<t.length;l++){const n=t[l],i=n.dataset.num,a=(I=>function(){const E=document.body.querySelector("#dialog"+I);E.open=!0})(i);n.addEventListener("click",a)}window.toggleActions.onclick=function(){const l=document.body.querySelector("#dialog4"),n=document.body.querySelector("#hideActionVal"),i=!l.hideActions;l.hideActions=i,n.innerText=i};const o=document.querySelector("#dialog8"),e=document.querySelector("#dialog8-text-field");document.querySelector("#dialog8-primary-action-button").addEventListener("click",()=>{if(e.checkValidity()){o.close();return}e.reportValidity()})},{once:!0}),O),yl={title:"Components/Dialog",tags:["autodocs"]},B=({trapFocus:t})=>(document.addEventListener("DOMContentLoaded",()=>{document.body.querySelector("#dialog-button").addEventListener("click",()=>{const e=document.body.querySelector("#dialog1");e.open=!0})},{once:!0}),`
    <cv-button id="dialog-button" raised>Open basic dialog</cv-button>
    <cv-dialog id="dialog1" heading="Dialog header" ${t?"trapFocus":""} scrimClickAction="">
      Dialog body text
      <cv-button slot="primaryAction" dialogAction="close">Action 2</cv-button>
      <cv-button slot="secondaryAction" dialogAction="close">Action 1</cv-button>
    </cv-dialog>`),H=({open:t=!0,heading:o="Heading",scrimClickAction:e="close",escapeKeyAction:r="close",defaultAction:l="close",actionAttribute:n="dialogAction",initialFocusAttribute:i="dialogInitialFocus",hideActions:s,stacked:a})=>`<cv-dialog
  ${t?"open":""}
  heading="${o}"
  scrimClickAction="${e}"
  escapeKeyAction="${r}"
  defaultAction="${l}"
  actionAttribute="${n}"
  initialFocusAttribute="${i}"
  ${s?"hideActions":""}
  ${a?"stacked":""}
>
  Message
  <div slot="secondaryAction">
    <cv-button label="Label"> </cv-button>
  </div>
  <div slot="primaryAction">
    <cv-button label="Label"> </cv-button>
  </div>
</cv-dialog>`,K=({open:t=!0,heading:o="Heading",scrimClickAction:e="close",escapeKeyAction:r="close",defaultAction:l="close",actionAttribute:n="dialogAction",initialFocusAttribute:i="dialogInitialFocus",hideActions:s,stacked:a})=>`<cv-dialog
  ${t?"open":""}
  heading="${o}"
  scrimClickAction="${e}"
  escapeKeyAction="${r}"
  defaultAction="${l}"
  actionAttribute="${n}"
  initialFocusAttribute="${i}"
  ${s?"hideActions":""}
  ${a?"stacked":""}
>
  This action cannot be undone.
  <div slot="primaryAction">
    <cv-button color="negative" label="Delete"> </cv-button>
  </div>
  <div slot="secondaryAction">
    <cv-button label="Don't delete"> </cv-button>
  </div>
</cv-dialog>`,c={render:H,argTypes:{open:{control:{type:"boolean"}},heading:{control:{type:"text"}},scrimClickAction:{control:{type:"text"}},escapeKeyAction:{control:{type:"text"}},defaultAction:{control:{type:"text"}},actionAttribute:{control:{type:"text"}},initialFocusAttribute:{control:{type:"text"}},hideActions:{control:{type:"boolean"}},stacked:{control:{type:"boolean"}}},args:{open:!0,heading:"Heading",scrimClickAction:"close",escapeKeyAction:"close",defaultAction:"close",actionAttribute:"dialogAction",initialFocusAttribute:"dialogInitialFocus",hideActions:!1,stacked:!1}},d={argTypes:c.argTypes,args:{...c.args,open:!0,heading:"Delete this file?"},render:K},g={render:V},y={render:B,args:{trapFocus:!0}},M=()=>(document.addEventListener("DOMContentLoaded",()=>{document.body.querySelector("#logout-button").addEventListener("click",()=>{const o=document.body.querySelector("#example-logout");o.open=!0})},{once:!0}),`
  <cv-button id="logout-button" raised>Open logout dialog</cv-button>
  <cv-dialog id="example-logout" heading="You will be logged out soon" scrimClickAction="">
            Due to inactivity, you’ll be logged out in 3 minutes to protect your security.
            <cv-button slot="primaryAction" dialogAction="close">Log out</cv-button>
            <cv-button slot="secondaryAction" dialogAction="close">Stay logged in</cv-button>
          </cv-dialog>`),u={render:M},U=({})=>(document.addEventListener("DOMContentLoaded",()=>{document.body.querySelector("#udf-button").addEventListener("click",()=>{const o=document.body.querySelector("#example-udf");o.open=!0})},{once:!0}),`
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
          </cv-dialog>`),x={render:U};var w,m,p;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: defaultTemplate,
  argTypes: {
    open: {
      control: {
        type: 'boolean'
      }
    },
    heading: {
      control: {
        type: 'text'
      }
    },
    scrimClickAction: {
      control: {
        type: 'text'
      }
    },
    escapeKeyAction: {
      control: {
        type: 'text'
      }
    },
    defaultAction: {
      control: {
        type: 'text'
      }
    },
    actionAttribute: {
      control: {
        type: 'text'
      }
    },
    initialFocusAttribute: {
      control: {
        type: 'text'
      }
    },
    hideActions: {
      control: {
        type: 'boolean'
      }
    },
    stacked: {
      control: {
        type: 'boolean'
      }
    }
  },
  args: {
    open: true,
    heading: 'Heading',
    scrimClickAction: 'close',
    escapeKeyAction: 'close',
    defaultAction: 'close',
    actionAttribute: 'dialogAction',
    initialFocusAttribute: 'dialogInitialFocus',
    hideActions: false,
    stacked: false
  }
}`,...(p=(m=c.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var R,b,v;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  argTypes: Default.argTypes,
  args: {
    ...Default.args,
    open: true,
    heading: 'Delete this file?'
  },
  render: deleteTemplate
}`,...(v=(b=d.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var A,h,f;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: dialogComponent
}`,...(f=(h=g.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var k,F,T;y.parameters={...y.parameters,docs:{...(k=y.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: anatomyTemplate,
  args: {
    trapFocus: true
  }
}`,...(T=(F=y.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var S,D,C;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: logoutTemplate
}`,...(C=(D=u.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var $,L,q;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: udfTemplate
}`,...(q=(L=x.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};const ul=["Default","DeleteConfirmation","Basic","Anatomy","Logout","UDF"];export{y as Anatomy,g as Basic,c as Default,d as DeleteConfirmation,u as Logout,x as UDF,ul as __namedExportsOrder,yl as default};
