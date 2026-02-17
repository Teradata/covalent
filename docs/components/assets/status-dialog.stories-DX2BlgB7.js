import"./code-snippet-Dx66EwP7.js";import"./button-_PqhMK-p.js";import"./icon-1XQe7S_h.js";import"./icon-button-BLwa0yFi.js";import{r as M,i as T,n as B,x as s,e as W}from"./query-assigned-elements-BJdb4KNY.js";import{t as q}from"./state-CGn7W7VL.js";import{i as U}from"./query-pFbEai1B.js";import{s as z,C as P}from"./dialog-Dv0VeR0n.js";import{o as d}from"./class-map-LmxYoNzI.js";import"./query-assigned-nodes-BxERp_Ow.js";import"./iframe-CTJ2dUpX.js";import"./preload-helper-Dp1pzeXC.js";import"./tslib.es6-X4n3o5C8.js";import"./mwc-icon-ClXlKBjv.js";import"./ripple-handlers-_TDZG32v.js";import"./base-element-BG6oFIG9.js";import"./utils-sZhlDiu_.js";import"./style-map-CNNK6hz8.js";import"./directive-CvdRHFdJ.js";import"./aria-property-BYXgNswj.js";import"./event-options-CZVCfsC0.js";import"./if-defined-dAx6j6jI.js";import"./mwc-icon-button.css-DLV-hkFx.js";import"./inert.esm-CIOG4SQk.js";import"./observer-D8jHVEI7.js";const H=':host{--mdc-dialog-content-ink-color: var(--cv-theme-on-surface-variant);--mdc-dialog-heading-ink-color: var(--cv-theme-on-surface);--mdc-dialog-min-width: 96vw;--mdc-theme-surface: var(--cv-theme-surface-container-lowest);--mdc-typography-body1-font-family: var( --cv-typography-subtitle1-font-family );--mdc-typography-headline6-font-size: var( --cv-typography-headline6-font-size );--mdc-typography-headline6-font-weight: var( --cv-typography-headline1-font-weight )}:host .mdc-dialog.error .status-dialog__state{background-color:var(--cv-theme-negative-8)}:host .mdc-dialog.error .status-dialog__state cv-icon{color:var(--cv-theme-negative)}:host .mdc-dialog.positive .status-dialog__state{background-color:var(--cv-theme-positive-8)}:host .mdc-dialog.positive .status-dialog__state cv-icon{color:var(--cv-theme-positive)}:host .mdc-dialog.warning .status-dialog__state{background-color:var(--cv-theme-caution-8)}:host .mdc-dialog.warning .status-dialog__state cv-icon{color:var(--cv-theme-caution)}:host .mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 40px)}:host .mdc-dialog .mdc-dialog__content{padding:0 16px}:host .mdc-dialog .mdc-dialog__content.padding-bottom{padding-bottom:2rem}:host .mdc-dialog__actions{flex-shrink:0;padding:16px}:host .mdc-dialog__content{flex-grow:1}:host .mdc-dialog__title{flex:1;line-height:var(--cv-typography-body1-line-height);margin:0;padding:0 40px 0 0}:host .mdc-dialog__title:before{display:none}:host .mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,:host .mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions{border:none}.status-dialog__arrow-icon{margin-top:2px}.status-dialog__arrow-icon.open{transform:rotate(0);transition:transform .25s ease-out}.status-dialog__arrow-icon.close{transform:rotate(180deg);transition:transform .25s ease-in}.status-dialog__container{display:flex}.status-dialog__content{display:flex;flex:1;flex-direction:column}.status-dialog__container,.status-dialog__content{max-height:calc(100% - 32px);overflow-y:auto}.status-dialog__details{display:none}.status-dialog__details.visible{display:block}.status-dialog__heading{--mdc-icon-button-size: 40px;align-items:start;box-sizing:border-box;display:inline-flex;justify-content:space-between;padding:18px 16px;width:100%}.status-dialog__heading.no-heading{justify-content:flex-end}.status-dialog__heading .status-dialog__close-icon{position:absolute;right:8px;top:10px}.status-dialog__state{--mdc-icon-size: 32px;padding:14px 16px 0}.status-dialog__state cv-icon{font-variation-settings:"FILL" 1}.status-dialog__toggle-details{align-items:center;color:var(--cv-theme-primary);cursor:pointer;display:inline-flex;font-size:14px;font-style:normal;font-weight:400;letter-spacing:.25px;line-height:20px;padding:16px 0}@media screen and (min-width: 600px){:host{--mdc-dialog-min-width: 575px}:host .mdc-dialog .mdc-dialog__surface{max-width:575px}}@media screen and (max-width: 480px){:host .status-dialog__container{flex-direction:column}:host .status-dialog__heading .status-dialog__close-icon{top:18px}:host .status-dialog__state{padding:4px}:host .status-dialog__state cv-icon{display:none}:host .mdc-dialog.error .status-dialog__state{background-color:var(--cv-theme-negative)}:host .mdc-dialog.positive .status-dialog__state{background-color:var(--cv-theme-positive)}:host .mdc-dialog.warning .status-dialog__state{background-color:var(--cv-theme-caution)}}';var j=Object.defineProperty,F=Object.getOwnPropertyDescriptor,p=(t,e,o,i)=>{for(var a=i>1?void 0:i?F(e,o):e,c=t.length-1,v;c>=0;c--)(v=t[c])&&(a=(i?v(e,o,a):v(a))||a);return i&&a&&j(e,o,a),a};let n=class extends P{constructor(){super(...arguments),this.state="error",this.expandDetails=!1,this.showDetailsLink=!1}firstUpdated(){if(super.firstUpdated(),this._details){const t=this._details.assignedNodes({flatten:!0});this.showDetailsLink=t.some(e=>e.nodeType===Node.ELEMENT_NODE)}}toggleDetails(){this.expandDetails=!this.expandDetails}_getStatusIcon(){switch(this.state){case"positive":return"check";default:return this.state}}renderDetails(){const t={"status-dialog__details":!0,visible:this.expandDetails},e={open:!this.expandDetails,close:this.expandDetails},o=s`<cv-icon
      class="${d(e)} status-dialog__arrow-icon"
      >arrow_drop_down</cv-icon
    >`;return s`${this.showDetailsLink?s`<div>
            <span
              class="status-dialog__toggle-details"
              @click="${this.toggleDetails}"
              >${this.expandDetails?"Hide details":"Show details"} ${o}
            </span>
          </div>`:""}
      <slot
        name="details"
        id="details"
        class="${d(t)}"
      ></slot>`}renderHeading(){const t={"status-dialog__heading":!0,"no-heading":!this.heading};let e=s``;return this.heading&&(e=s`<h2 id="title" class="mdc-dialog__title">
        ${this.heading}
      </h2>`),s`<span class="${d(t)}">
      ${e}
      <cv-icon-button
        class="status-dialog__close-icon"
        icon="close"
        @click=${this.close}
      ></cv-icon-button>
    </span>`}render(){const t={"mdc-dialog--stacked":this.stacked,error:this.state==="error",positive:this.state==="positive",warning:this.state==="warning"},e=this.renderHeading(),o=this.renderDetails(),i={"mdc-dialog__actions":!this.hideActions},a={"mdc-dialog__content":!0,"padding-bottom":this.hideActions};return s` <div
      class="mdc-dialog ${d(t)}"
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="title"
      aria-describedby="content"
    >
      <div class="mdc-dialog__container">
        <div class="mdc-dialog__surface">
          <div class="status-dialog__container">
            <div class="status-dialog__state">
              <cv-icon>${this._getStatusIcon()}<cv-icon>
            </div>
            <div class="status-dialog__content">
              ${e}
              <div id="content" class="${d(a)}">
                <slot id="contentSlot"></slot>
                ${o}
              </div>
              <footer id="actions" class="${d(i)}">
                <span>
                  <slot name="secondaryAction"></slot>
                </span>
                <span>
                  <slot name="primaryAction"></slot>
                </span>
              </footer>
            </div>
          </div>
        </div>
      </div>
      <div class="mdc-dialog__scrim"></div>
    </div>`}};n.styles=[z,T`
      ${M(H)}
    `];p([U("#details")],n.prototype,"_details",2);p([B({type:String})],n.prototype,"state",2);p([q()],n.prototype,"expandDetails",2);p([q()],n.prototype,"showDetailsLink",2);n=p([W("cv-status-dialog")],n);const N={error:`<p style="margin: 0;">
    We’re experiencing an issue in the system, so the users didn’t get added.
  </p>
  <p style="margin-bottom: 0;">
    Find a fix in the knowledge base. If the issue persists, contact Teradata Support and include the error details.
  </p>`,positive:`<p style="margin: 0;">
    We’ve successfully added data sharing users.
  </p>`,warning:`<p style="margin: 0;">
    This action will stop a process in use by other users, including: user a, user b, user c
  </p>`},I=`
SELECT * FROM load_to_teradata (
    ON (
    SELECT "class" AS class_col,
            "variable" AS variable_col,
            "type" AS type_col,
            category,
            cnt,
            "sum" AS sum_col,
            "sumSq",
            "totalCnt"
    FROM aster_nb_modelSC
    )
    tdpid ('sdt12432.labs.teradata.com')
    username ('sample_user')
    password ('sample_user')
    target_table ('td_nb_modelSC')
);
`,bt={title:"Components/Status Dialog",argTypes:{state:{options:["error","positive","warning"],control:{type:"select"}}},args:{state:"error",open:!1,hideActions:!1,heading:"Basic heading for the dialog"},tags:["autodocs"]},h=({state:t,hideActions:e,heading:o})=>(document.addEventListener("DOMContentLoaded",()=>{document.body.querySelector("#dialog-button").addEventListener("click",()=>{const c=document.body.querySelector("#dialog");c.open=!0})},{once:!0}),`
    <cv-button id="dialog-button" raised>${`${o}`.includes("Basic")?"Open basic dialog":`${`${t[0]}`.toUpperCase()}${`${t}`.substring(1)}`}</cv-button>
    <cv-status-dialog id="dialog" state="${t}" heading="${o}" ${e?"hideActions":""} scrimClickAction="" >
      ${N[t]}
      <cv-button raised slot="primaryAction" dialogAction="close">Close</cv-button>
    </cv-status-dialog>`),R=({state:t,hideActions:e,heading:o})=>(document.addEventListener("DOMContentLoaded",()=>{document.body.querySelector("#dialog-button-2").addEventListener("click",()=>{const a=document.body.querySelector("#dialog-2");a.open=!0})},{once:!0}),`
    <cv-button id="dialog-button-2" raised>Open dialog with details</cv-button>
    <cv-status-dialog id="dialog-2" state="${t}" heading="${o}" ${e?"hideActions":""} scrimClickAction="" >
      ${N[t]}
      <div slot="details">
        <cv-code-snippet language="sql" hideHeader=true>
          ${I}
        </cv-code-snippet>
      </div>
      <cv-button raised slot="primaryAction" dialogAction="close">Close</cv-button>
    </cv-status-dialog>`),m=h.bind({}),r=h.bind({});r.args={state:"positive",heading:"Data sharing users added"};const l=h.bind({});l.args={state:"warning",heading:"Warning"};const g=h.bind({});g.args={state:"error",heading:"Couldn’t add data sharing users"};const u=R.bind({});u.args={heading:"Couldn’t add data sharing users"};var b,_,y;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`({
  state,
  hideActions,
  heading
}) => {
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.body.querySelector('#dialog-button');
    button.addEventListener('click', () => {
      const dialog = document.body.querySelector('#dialog');
      dialog.open = true;
    });
  }, {
    once: true
  });
  const buttonName = \`\${heading}\`.includes('Basic') ? 'Open basic dialog' : \`\${\`\${state[0]}\`.toUpperCase()}\${\`\${state}\`.substring(1)}\`;
  return \`
    <cv-button id="dialog-button" raised>\${buttonName}</cv-button>
    <cv-status-dialog id="dialog" state="\${state}" heading="\${heading}" \${hideActions ? 'hideActions' : ''} scrimClickAction="" >
      \${dialogContent[state]}
      <cv-button raised slot="primaryAction" dialogAction="close">Close</cv-button>
    </cv-status-dialog>\`;
}`,...(y=(_=m.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var $,f,x;r.parameters={...r.parameters,docs:{...($=r.parameters)==null?void 0:$.docs,source:{originalSource:`({
  state,
  hideActions,
  heading
}) => {
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.body.querySelector('#dialog-button');
    button.addEventListener('click', () => {
      const dialog = document.body.querySelector('#dialog');
      dialog.open = true;
    });
  }, {
    once: true
  });
  const buttonName = \`\${heading}\`.includes('Basic') ? 'Open basic dialog' : \`\${\`\${state[0]}\`.toUpperCase()}\${\`\${state}\`.substring(1)}\`;
  return \`
    <cv-button id="dialog-button" raised>\${buttonName}</cv-button>
    <cv-status-dialog id="dialog" state="\${state}" heading="\${heading}" \${hideActions ? 'hideActions' : ''} scrimClickAction="" >
      \${dialogContent[state]}
      <cv-button raised slot="primaryAction" dialogAction="close">Close</cv-button>
    </cv-status-dialog>\`;
}`,...(x=(f=r.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var C,A,w;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`({
  state,
  hideActions,
  heading
}) => {
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.body.querySelector('#dialog-button');
    button.addEventListener('click', () => {
      const dialog = document.body.querySelector('#dialog');
      dialog.open = true;
    });
  }, {
    once: true
  });
  const buttonName = \`\${heading}\`.includes('Basic') ? 'Open basic dialog' : \`\${\`\${state[0]}\`.toUpperCase()}\${\`\${state}\`.substring(1)}\`;
  return \`
    <cv-button id="dialog-button" raised>\${buttonName}</cv-button>
    <cv-status-dialog id="dialog" state="\${state}" heading="\${heading}" \${hideActions ? 'hideActions' : ''} scrimClickAction="" >
      \${dialogContent[state]}
      <cv-button raised slot="primaryAction" dialogAction="close">Close</cv-button>
    </cv-status-dialog>\`;
}`,...(w=(A=l.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};var S,D,L;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`({
  state,
  hideActions,
  heading
}) => {
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.body.querySelector('#dialog-button');
    button.addEventListener('click', () => {
      const dialog = document.body.querySelector('#dialog');
      dialog.open = true;
    });
  }, {
    once: true
  });
  const buttonName = \`\${heading}\`.includes('Basic') ? 'Open basic dialog' : \`\${\`\${state[0]}\`.toUpperCase()}\${\`\${state}\`.substring(1)}\`;
  return \`
    <cv-button id="dialog-button" raised>\${buttonName}</cv-button>
    <cv-status-dialog id="dialog" state="\${state}" heading="\${heading}" \${hideActions ? 'hideActions' : ''} scrimClickAction="" >
      \${dialogContent[state]}
      <cv-button raised slot="primaryAction" dialogAction="close">Close</cv-button>
    </cv-status-dialog>\`;
}`,...(L=(D=g.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var k,E,O;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`({
  state,
  hideActions,
  heading
}) => {
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.body.querySelector('#dialog-button-2');
    button.addEventListener('click', () => {
      const dialog = document.body.querySelector('#dialog-2');
      dialog.open = true;
    });
  }, {
    once: true
  });
  return \`
    <cv-button id="dialog-button-2" raised>Open dialog with details</cv-button>
    <cv-status-dialog id="dialog-2" state="\${state}" heading="\${heading}" \${hideActions ? 'hideActions' : ''} scrimClickAction="" >
      \${dialogContent[state]}
      <div slot="details">
        <cv-code-snippet language="sql" hideHeader=true>
          \${sqlContent}
        </cv-code-snippet>
      </div>
      <cv-button raised slot="primaryAction" dialogAction="close">Close</cv-button>
    </cv-status-dialog>\`;
}`,...(O=(E=u.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};const _t=["Basic","Positive","Warning","Error","WithDetails"];export{m as Basic,g as Error,r as Positive,l as Warning,u as WithDetails,_t as __namedExportsOrder,bt as default};
