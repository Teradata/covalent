const h=`<cv-button data-num="1" raised>Basic</cv-button>
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
  <div>
    In this example we set "dialogInitialFocus" on the mwc-textfield. When this
    dialog opens, it is auto-focused.
  </div>
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
`,A=({})=>(document.addEventListener("DOMContentLoaded",()=>{const n=document.body.querySelectorAll("cv-button[data-num]");for(let l=0;l<n.length;l++){const i=n[l],c=i.dataset.num,m=(b=>function(){const p=document.body.querySelector("#dialog"+b);p.open=!0})(c);i.addEventListener("click",m)}window.toggleActions.onclick=function(){const l=document.body.querySelector("#dialog4"),i=document.body.querySelector("#hideActionVal"),c=!l.hideActions;l.hideActions=c,i.innerText=c};const v=document.querySelector("#dialog8"),a=document.querySelector("#dialog8-text-field");document.querySelector("#dialog8-primary-action-button").addEventListener("click",()=>{if(a.checkValidity()){v.close();return}a.reportValidity()})},{once:!0}),h),T={title:"Components/Dialog",properties:{darkMode:{current:"dark",stylePreview:!0}}},f=({isDark:n})=>`<div class="${n?"dark":null}">
            <cv-dialog id="dialog1" heading="Dialog header" scrimClickAction="" open>
              Dialog body text
              <cv-button slot="primaryAction">Action 2</cv-button>
              <cv-button slot="secondaryAction">Action 1</cv-button>
            </cv-dialog>
          </div>`,k=A.bind({});k.parameters={docs:{inlineStories:!1}};const t=f.bind({});t.parameters={docs:{inlineStories:!1}};const F=({})=>`<cv-dialog id="example-logout" heading="You will be logged out soon" scrimClickAction="" open>
            Due to inactivity, you’ll be logged out in 3 minutes to protect your security.
            <cv-button slot="primaryAction">Log out</cv-button>
            <cv-button slot="secondaryAction">Stay logged in</cv-button>
          </cv-dialog>`,o=F.bind({});o.parameters={docs:{inlineStories:!1}};const S=({})=>`<style>
              cv-formfield {
                  margin-left: -.75rem;
              }
              .key-value {
                margin-bottom: .5rem;
                margin-top: .5rem;
              }
              .key-value--key {
                color: --mdc-theme-text-secondary-on-background;
              }
          </style>
          <cv-dialog id="example-udf" heading="Delete User Defined Function" scrimClickAction="" open>
            
            <div class="key-value">
              <div class="key-value--key mdc-typography--caption">Function to delete</div>
              <div class="key-value--value">UDF_StrCpy</div>
            </div>
            <cv-formfield label="I understand that all queries currently using this UDF will be canceled">
              <cv-checkbox class="child"></cv-checkbox>
            </cv-formfield>
            <cv-button slot="primaryAction" class="destructive primary" disabled>Delete</cv-button>
            <cv-button slot="secondaryAction">Cancel</cv-button>
          </cv-dialog>`,e=S.bind({});e.parameters={docs:{inlineStories:!1}};var r,s,d;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`({
  isDark
}) => {
  return \`<div class="\${isDark ? \`dark\` : null}">
            <cv-dialog id="dialog1" heading="Dialog header" scrimClickAction="" open>
              Dialog body text
              <cv-button slot="primaryAction">Action 2</cv-button>
              <cv-button slot="secondaryAction">Action 1</cv-button>
            </cv-dialog>
          </div>\`;
}`,...(d=(s=t.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var g,y,u;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`({}) => {
  return \`<cv-dialog id="example-logout" heading="You will be logged out soon" scrimClickAction="" open>
            Due to inactivity, you’ll be logged out in 3 minutes to protect your security.
            <cv-button slot="primaryAction">Log out</cv-button>
            <cv-button slot="secondaryAction">Stay logged in</cv-button>
          </cv-dialog>\`;
}`,...(u=(y=o.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var x,w,R;e.parameters={...e.parameters,docs:{...(x=e.parameters)==null?void 0:x.docs,source:{originalSource:`({}) => {
  return \`<style>
              cv-formfield {
                  margin-left: -.75rem;
              }
              .key-value {
                margin-bottom: .5rem;
                margin-top: .5rem;
              }
              .key-value--key {
                color: --mdc-theme-text-secondary-on-background;
              }
          </style>
          <cv-dialog id="example-udf" heading="Delete User Defined Function" scrimClickAction="" open>
            
            <div class="key-value">
              <div class="key-value--key mdc-typography--caption">Function to delete</div>
              <div class="key-value--value">UDF_StrCpy</div>
            </div>
            <cv-formfield label="I understand that all queries currently using this UDF will be canceled">
              <cv-checkbox class="child"></cv-checkbox>
            </cv-formfield>
            <cv-button slot="primaryAction" class="destructive primary" disabled>Delete</cv-button>
            <cv-button slot="secondaryAction">Cancel</cv-button>
          </cv-dialog>\`;
}`,...(R=(w=e.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};const q=["Basic","Anatomy","Logout","UDF"];export{t as Anatomy,k as Basic,o as Logout,e as UDF,q as __namedExportsOrder,T as default};
//# sourceMappingURL=dialog.stories-eaccb097.js.map
