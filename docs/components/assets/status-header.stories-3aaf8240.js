import{s as Y,x as D,i as E,r as B,e as R}from"./query-assigned-elements-9f88bee1.js";import{o as q}from"./class-map-018c3a6a.js";import{n as m}from"./property-f36ea729.js";import"./icon-dab2e138.js";import"./circular-progress-33ef1f71.js";import"./mwc-icon-6ece1001.js";import"./tslib.es6-4b90b051.js";import"./aria-property-3dc182ec.js";import"./if-defined-c3862b86.js";import"./style-map-4c420736.js";var F=Object.defineProperty,G=Object.getOwnPropertyDescriptor,x=(s,e,r,a)=>{for(var t=a>1?void 0:a?G(e,r):e,n=s.length-1,c;n>=0;n--)(c=s[n])&&(t=(a?c(e,r,t):c(t))||t);return a&&t&&F(e,r,t),t};class b extends Y{constructor(){super(...arguments),this.state="neutral",this.statusText="",this.statusHelper="",this.titleText=""}render(){const e={active:this.state==="active",caution:this.state==="caution",error:this.state==="error",positive:this.state==="positive"};return D`
      <div class="status-header ${q(e)}">
        <div class="status-header-title">
          <div class="status-header-title-text">${this.titleText}</div>
          <slot name="status-header-actions"></slot>
        </div>
        <div class="status-header-status">
          <div class="status-header-icon">
            <slot name="status-header-icon"></slot>
          </div>
          <div class="status-header-text-block">
            <div class="status-header-text">${this.statusText}</div>
            <div class="status-header-helper">${this.statusHelper}</div>
          </div>
          <div class="status-header-slot">
            <slot name="status-header-text"></slot>
          </div>
        </div>
        <slot></slot>
      </div>
    `}}x([m()],b.prototype,"state",2);x([m({type:String})],b.prototype,"statusText",2);x([m({type:String})],b.prototype,"statusHelper",2);x([m({type:String})],b.prototype,"titleText",2);const J=`.status-header{--cv-status-header-background: transparent;--cv-status-header-icon-background: var( --mdc-theme-surface-neutral-highlight-hover );--cv-status-header-icon-color: var(--mdc-theme-text-icon-on-background);--cv-status-header-status-color: var(--mdc-theme-on-surface);background-color:var(--cv-status-header-background)}.status-header .status-header-content{max-width:inherit;flex-direction:column}.status-header .status-header-icon{background-color:var(--cv-status-header-icon-background);color:var(--cv-status-header-icon-color)}.status-header .status-header-text{--mdc-theme-primary: var(--mdc-theme-surface-neutral-highlight-hover);--mdc-theme-on-surface: var(--mdc-theme-text-icon-on-background);color:var(--cv-status-header-status-color)}.status-header .status-header-helper{color:var(--mdc-theme-text-secondary-on-background)}.status-header .status-header-title-text{color:var(--mdc-theme-on-surface)}.status-header.active{--cv-status-header-background: var( --mdc-theme-surface-secondary-highlight );--cv-status-header-icon-background: var( --mdc-theme-surface-secondary-highlight-hover );--cv-status-header-icon-color: var(--mdc-theme-secondary);--cv-status-header-status-color: var(--mdc-theme-secondary)}.status-header.caution{--cv-status-header-background: var(--mdc-theme-surface-caution-highlight);--cv-status-header-icon-background: var( --mdc-theme-surface-caution-highlight-hover );--cv-status-header-icon-color: var(--mdc-theme-caution);--cv-status-header-status-color: var(--mdc-theme-caution)}.status-header.error{--cv-status-header-background: var( --mdc-theme-surface-negative-highlight );--cv-status-header-icon-background: var( --mdc-theme-surface-negative-highlight-hover );--cv-status-header-icon-color: var(--mdc-theme-negative);--cv-status-header-status-color: var(--mdc-theme-negative)}.status-header.positive{--cv-status-header-background: var( --mdc-theme-surface-positive-highlight );--cv-status-header-icon-background: var( --mdc-theme-surface-positive-highlight-hover );--cv-status-header-icon-color: var(--mdc-theme-positive);--cv-status-header-status-color: var(--mdc-theme-positive)}.status-header-title{padding:0 0 16px 16px;height:fit-content;display:flex;justify-content:space-between;align-items:center}.status-header-title-text{font-family:var(--mdc-typography-headline6-font-family);font-size:var(--mdc-typography-headline6-font-size);font-weight:var(--mdc-typography-headline6-font-weight);line-height:var(--mdc-typography-headline6-line-height)}.status-header-text{font-family:var(--mdc-typography-body2-font-family);font-size:var(--mdc-typography-body2-font-size);font-weight:var(--mdc-typography-body2-font-weight);line-height:var(--mdc-typography-body2-line-height)}.status-header-icon{--mdc-icon-size: 36px;border-radius:50%;min-width:72px;height:72px;display:flex;justify-content:center;align-items:center}.status-header-status{padding-left:32px;padding-bottom:16px;display:flex;flex-direction:row;align-items:center}.status-header-text-block{display:flex;flex-direction:column;margin-left:12px;margin-right:56px}.status-header-text-block .status-header-helper{font-family:var(--mdc-typography-caption-font-family);font-size:var(--mdc-typography-caption-font-size);font-weight:var(--mdc-typography-caption-font-weight);line-height:var(--mdc-typography-caption-line-height)}
`;var K=Object.defineProperty,N=Object.getOwnPropertyDescriptor,Q=(s,e,r,a)=>{for(var t=a>1?void 0:a?N(e,r):e,n=s.length-1,c;n>=0;n--)(c=s[n])&&(t=(a?c(e,r,t):c(t))||t);return a&&t&&K(e,r,t),t};let g=class extends b{};g.styles=[E`
      ${B(J)}
    `];g=Q([R("cv-status-header")],g);const U=`:host{--cv-status-header-item-width: 178px;display:flex;padding:14px 16px;align-items:center;font-family:var(--mdc-typography-body2-font-family);font-size:var(--mdc-typography-body2-font-size);font-weight:var(--mdc-typography-body2-font-weight);line-height:var(--mdc-typography-body2-line-height)}span{display:inline-block;width:var(--cv-status-header-item-width);color:var(--mdc-theme-text-secondary-on-background)}
`;var V=Object.defineProperty,X=Object.getOwnPropertyDescriptor,W=(s,e,r,a)=>{for(var t=a>1?void 0:a?X(e,r):e,n=s.length-1,c;n>=0;n--)(c=s[n])&&(t=(a?c(e,r,t):c(t))||t);return a&&t&&V(e,r,t),t};let p=class extends Y{render(){return D`<span>${this.label}</span> <slot></slot>`}};p.styles=[E`
      ${B(U)}
    `];W([m()],p.prototype,"label",2);p=W([R("cv-status-header-item")],p);const dt={title:"Components/Status Header",parameters:{layout:"fullscreen"},argTypes:{state:{options:["active","caution","error","positive","neutral"],control:{type:"select"}}},args:{state:"neutral",title:"Item details",status:"Status",icon:"Status"}},Z=(s,e)=>s==="active"?'<cv-circular-progress slot="status-header-icon" indeterminate density="-2"></cv-circular-progress>':s==="pending"?'<cv-icon slot="status-header-icon" class="covalent-icon">loader_dots</cv-icon>':`<cv-icon slot="status-header-icon">${e}</cv-icon>`,o=({state:s="neutral",status:e="status",title:r="title",icon:a})=>`
    <cv-status-header state="${s}" statusText="${e}" statusHelper="secondary text" titleText="${r}">
      ${Z(s,a)}

      <cv-icon-button slot="status-header-actions" icon="close" dialogAction="close" ></cv-icon-button>

      <cv-status-header-item slot="status-header-text" label="Start time">
        09/30/21 4:38:50 PM
      </cv-status-header-item>
      <cv-status-header-item slot="status-header-text" label="Last heartbeat">
        09/30/21 4:38:51 PM
      </cv-status-header-item>
      <cv-status-header-item slot="status-header-text" label="Platform">
        linux-x64
      </cv-status-header-item>
      <cv-status-header-item slot="status-header-text" label="Softvare version">
        02.18.00.01-1
      </cv-status-header-item>
      <cv-status-header-item slot="status-header-text" label="Primary Cluster">
        Yes
      </cv-status-header-item>
      <cv-status-header-item slot="status-header-text" label="Primary Cluster manager">
        cs3094-04.labs.teradata.com
      </cv-status-header-item>
      <cv-tab-bar activeIndex="0">
        <cv-tab label="Tab one">
        </cv-tab>
        <cv-tab label="Tab two">
        </cv-tab>
        <cv-tab label="Tab three">
        </cv-tab>
      </cv-tab-bar>
    </cv-status-header>`,i=o.bind({});i.args={state:"active",status:"Running",title:"Active item details"};const l=o.bind({});l.args={state:"caution",icon:"warning",status:"Caution",title:"Caution item details"};const d=o.bind({});d.args={state:"error",icon:"error",status:"Error",title:"Error item details"};const u=o.bind({});u.args={state:"positive",icon:"done",status:"Positive",title:"Positive item details"};const h=o.bind({});h.args={icon:"pause",status:"Paused",title:"Paused item details"};const v=o.bind({});v.args={state:"pending",status:"Pending",title:"Pending item details"};var y,f,P;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`({
  state = 'neutral',
  status = 'status',
  title = 'title',
  icon
}) => {
  return \`
    <cv-status-header state="\${state}" statusText="\${status}" statusHelper="secondary text" titleText="\${title}">
      \${renderIcon(state, icon)}

      <cv-icon-button slot="status-header-actions" icon="close" dialogAction="close" ></cv-icon-button>

      <cv-status-header-item slot="status-header-text" label="Start time">
        09/30/21 4:38:50 PM
      </cv-status-header-item>
      <cv-status-header-item slot="status-header-text" label="Last heartbeat">
        09/30/21 4:38:51 PM
      </cv-status-header-item>
      <cv-status-header-item slot="status-header-text" label="Platform">
        linux-x64
      </cv-status-header-item>
      <cv-status-header-item slot="status-header-text" label="Softvare version">
        02.18.00.01-1
      </cv-status-header-item>
      <cv-status-header-item slot="status-header-text" label="Primary Cluster">
        Yes
      </cv-status-header-item>
      <cv-status-header-item slot="status-header-text" label="Primary Cluster manager">
        cs3094-04.labs.teradata.com
      </cv-status-header-item>
      <cv-tab-bar activeIndex="0">
        <cv-tab label="Tab one">
        </cv-tab>
        <cv-tab label="Tab two">
        </cv-tab>
        <cv-tab label="Tab three">
        </cv-tab>
      </cv-tab-bar>
    </cv-status-header>\`;
}`,...(P=(f=i.parameters)==null?void 0:f.docs)==null?void 0:P.source}}};var T,$,w;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`({
  state = 'neutral',
  status = 'status',
  title = 'title',
  icon
}) => {
  return \`
    <cv-status-header state="\${state}" statusText="\${status}" statusHelper="secondary text" titleText="\${title}">
      \${renderIcon(state, icon)}

      <cv-icon-button slot="status-header-actions" icon="close" dialogAction="close" ></cv-icon-button>

      <cv-status-header-item slot="status-header-text" label="Start time">
        09/30/21 4:38:50 PM
      </cv-status-header-item>
      <cv-status-header-item slot="status-header-text" label="Last heartbeat">
        09/30/21 4:38:51 PM
      </cv-status-header-item>
      <cv-status-header-item slot="status-header-text" label="Platform">
        linux-x64
      </cv-status-header-item>
      <cv-status-header-item slot="status-header-text" label="Softvare version">
        02.18.00.01-1
      </cv-status-header-item>
      <cv-status-header-item slot="status-header-text" label="Primary Cluster">
        Yes
      </cv-status-header-item>
      <cv-status-header-item slot="status-header-text" label="Primary Cluster manager">
        cs3094-04.labs.teradata.com
      </cv-status-header-item>
      <cv-tab-bar activeIndex="0">
        <cv-tab label="Tab one">
        </cv-tab>
        <cv-tab label="Tab two">
        </cv-tab>
        <cv-tab label="Tab three">
        </cv-tab>
      </cv-tab-bar>
    </cv-status-header>\`;
}`,...(w=($=l.parameters)==null?void 0:$.docs)==null?void 0:w.source}}};var S,C,_;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`({
  state = 'neutral',
  status = 'status',
  title = 'title',
  icon
}) => {
  return \`
    <cv-status-header state="\${state}" statusText="\${status}" statusHelper="secondary text" titleText="\${title}">
      \${renderIcon(state, icon)}

      <cv-icon-button slot="status-header-actions" icon="close" dialogAction="close" ></cv-icon-button>

      <cv-status-header-item slot="status-header-text" label="Start time">
        09/30/21 4:38:50 PM
      </cv-status-header-item>
      <cv-status-header-item slot="status-header-text" label="Last heartbeat">
        09/30/21 4:38:51 PM
      </cv-status-header-item>
      <cv-status-header-item slot="status-header-text" label="Platform">
        linux-x64
      </cv-status-header-item>
      <cv-status-header-item slot="status-header-text" label="Softvare version">
        02.18.00.01-1
      </cv-status-header-item>
      <cv-status-header-item slot="status-header-text" label="Primary Cluster">
        Yes
      </cv-status-header-item>
      <cv-status-header-item slot="status-header-text" label="Primary Cluster manager">
        cs3094-04.labs.teradata.com
      </cv-status-header-item>
      <cv-tab-bar activeIndex="0">
        <cv-tab label="Tab one">
        </cv-tab>
        <cv-tab label="Tab two">
        </cv-tab>
        <cv-tab label="Tab three">
        </cv-tab>
      </cv-tab-bar>
    </cv-status-header>\`;
}`,...(_=(C=d.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var H,I,M;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`({
  state = 'neutral',
  status = 'status',
  title = 'title',
  icon
}) => {
  return \`
    <cv-status-header state="\${state}" statusText="\${status}" statusHelper="secondary text" titleText="\${title}">
      \${renderIcon(state, icon)}

      <cv-icon-button slot="status-header-actions" icon="close" dialogAction="close" ></cv-icon-button>

      <cv-status-header-item slot="status-header-text" label="Start time">
        09/30/21 4:38:50 PM
      </cv-status-header-item>
      <cv-status-header-item slot="status-header-text" label="Last heartbeat">
        09/30/21 4:38:51 PM
      </cv-status-header-item>
      <cv-status-header-item slot="status-header-text" label="Platform">
        linux-x64
      </cv-status-header-item>
      <cv-status-header-item slot="status-header-text" label="Softvare version">
        02.18.00.01-1
      </cv-status-header-item>
      <cv-status-header-item slot="status-header-text" label="Primary Cluster">
        Yes
      </cv-status-header-item>
      <cv-status-header-item slot="status-header-text" label="Primary Cluster manager">
        cs3094-04.labs.teradata.com
      </cv-status-header-item>
      <cv-tab-bar activeIndex="0">
        <cv-tab label="Tab one">
        </cv-tab>
        <cv-tab label="Tab two">
        </cv-tab>
        <cv-tab label="Tab three">
        </cv-tab>
      </cv-tab-bar>
    </cv-status-header>\`;
}`,...(M=(I=u.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var O,A,z;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`({
  state = 'neutral',
  status = 'status',
  title = 'title',
  icon
}) => {
  return \`
    <cv-status-header state="\${state}" statusText="\${status}" statusHelper="secondary text" titleText="\${title}">
      \${renderIcon(state, icon)}

      <cv-icon-button slot="status-header-actions" icon="close" dialogAction="close" ></cv-icon-button>

      <cv-status-header-item slot="status-header-text" label="Start time">
        09/30/21 4:38:50 PM
      </cv-status-header-item>
      <cv-status-header-item slot="status-header-text" label="Last heartbeat">
        09/30/21 4:38:51 PM
      </cv-status-header-item>
      <cv-status-header-item slot="status-header-text" label="Platform">
        linux-x64
      </cv-status-header-item>
      <cv-status-header-item slot="status-header-text" label="Softvare version">
        02.18.00.01-1
      </cv-status-header-item>
      <cv-status-header-item slot="status-header-text" label="Primary Cluster">
        Yes
      </cv-status-header-item>
      <cv-status-header-item slot="status-header-text" label="Primary Cluster manager">
        cs3094-04.labs.teradata.com
      </cv-status-header-item>
      <cv-tab-bar activeIndex="0">
        <cv-tab label="Tab one">
        </cv-tab>
        <cv-tab label="Tab two">
        </cv-tab>
        <cv-tab label="Tab three">
        </cv-tab>
      </cv-tab-bar>
    </cv-status-header>\`;
}`,...(z=(A=h.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var j,k,L;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`({
  state = 'neutral',
  status = 'status',
  title = 'title',
  icon
}) => {
  return \`
    <cv-status-header state="\${state}" statusText="\${status}" statusHelper="secondary text" titleText="\${title}">
      \${renderIcon(state, icon)}

      <cv-icon-button slot="status-header-actions" icon="close" dialogAction="close" ></cv-icon-button>

      <cv-status-header-item slot="status-header-text" label="Start time">
        09/30/21 4:38:50 PM
      </cv-status-header-item>
      <cv-status-header-item slot="status-header-text" label="Last heartbeat">
        09/30/21 4:38:51 PM
      </cv-status-header-item>
      <cv-status-header-item slot="status-header-text" label="Platform">
        linux-x64
      </cv-status-header-item>
      <cv-status-header-item slot="status-header-text" label="Softvare version">
        02.18.00.01-1
      </cv-status-header-item>
      <cv-status-header-item slot="status-header-text" label="Primary Cluster">
        Yes
      </cv-status-header-item>
      <cv-status-header-item slot="status-header-text" label="Primary Cluster manager">
        cs3094-04.labs.teradata.com
      </cv-status-header-item>
      <cv-tab-bar activeIndex="0">
        <cv-tab label="Tab one">
        </cv-tab>
        <cv-tab label="Tab two">
        </cv-tab>
        <cv-tab label="Tab three">
        </cv-tab>
      </cv-tab-bar>
    </cv-status-header>\`;
}`,...(L=(k=v.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};const ut=["Active","Caution","Error","Positive","Paused","Pending"];export{i as Active,l as Caution,d as Error,h as Paused,v as Pending,u as Positive,ut as __namedExportsOrder,dt as default};
