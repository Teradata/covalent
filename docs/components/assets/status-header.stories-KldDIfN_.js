import{s as j,x as E,n as m,r as D,i as B,e as R}from"./query-assigned-elements-BJdb4KNY.js";import{o as q}from"./class-map-LmxYoNzI.js";import"./icon-BYPYUWym.js";import"./circular-progress-LWZPy8Lw.js";import"./directive-CvdRHFdJ.js";import"./mwc-icon-BGUO1vKj.js";import"./tslib.es6-C-hQhb2A.js";import"./aria-property-BYXgNswj.js";import"./if-defined-dAx6j6jI.js";import"./style-map-CNNK6hz8.js";var F=Object.defineProperty,g=(a,e,r,n)=>{for(var t=void 0,s=a.length-1,c;s>=0;s--)(c=a[s])&&(t=c(e,r,t)||t);return t&&F(e,r,t),t};class b extends j{constructor(){super(...arguments),this.state="neutral",this.statusText="",this.statusHelper="",this.titleText=""}render(){const e={active:this.state==="active",caution:this.state==="caution",error:this.state==="error",positive:this.state==="positive"};return E`
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
    `}}g([m()],b.prototype,"state");g([m({type:String})],b.prototype,"statusText");g([m({type:String})],b.prototype,"statusHelper");g([m({type:String})],b.prototype,"titleText");const G=".status-header{--cv-status-header-background: transparent;--cv-status-header-icon-background: var( --mdc-theme-surface-neutral-highlight-hover );--cv-status-header-icon-color: var(--mdc-theme-text-icon-on-background);--cv-status-header-status-color: var(--mdc-theme-on-surface);background-color:var(--cv-status-header-background)}.status-header .status-header-content{max-width:inherit;flex-direction:column}.status-header .status-header-icon{background-color:var(--cv-status-header-icon-background);color:var(--cv-status-header-icon-color)}.status-header .status-header-text{--mdc-theme-primary: var(--mdc-theme-surface-neutral-highlight-hover);--mdc-theme-on-surface: var(--mdc-theme-text-icon-on-background);color:var(--cv-status-header-status-color)}.status-header .status-header-helper{color:var(--mdc-theme-text-secondary-on-background)}.status-header .status-header-title-text{color:var(--mdc-theme-on-surface)}.status-header.active{--cv-status-header-background: var( --mdc-theme-surface-secondary-highlight );--cv-status-header-icon-background: var( --mdc-theme-surface-secondary-highlight-hover );--cv-status-header-icon-color: var(--mdc-theme-secondary);--cv-status-header-status-color: var(--mdc-theme-secondary)}.status-header.caution{--cv-status-header-background: var(--mdc-theme-surface-caution-highlight);--cv-status-header-icon-background: var( --mdc-theme-surface-caution-highlight-hover );--cv-status-header-icon-color: var(--mdc-theme-caution);--cv-status-header-status-color: var(--mdc-theme-caution)}.status-header.error{--cv-status-header-background: var( --mdc-theme-surface-negative-highlight );--cv-status-header-icon-background: var( --mdc-theme-surface-negative-highlight-hover );--cv-status-header-icon-color: var(--mdc-theme-negative);--cv-status-header-status-color: var(--mdc-theme-negative)}.status-header.positive{--cv-status-header-background: var( --mdc-theme-surface-positive-highlight );--cv-status-header-icon-background: var( --mdc-theme-surface-positive-highlight-hover );--cv-status-header-icon-color: var(--mdc-theme-positive);--cv-status-header-status-color: var(--mdc-theme-positive)}.status-header-title{padding:0 0 16px 16px;height:fit-content;display:flex;justify-content:space-between;align-items:center}.status-header-title-text{font-family:var(--mdc-typography-headline6-font-family);font-size:var(--mdc-typography-headline6-font-size);font-weight:var(--mdc-typography-headline6-font-weight);line-height:var(--mdc-typography-headline6-line-height)}.status-header-text{font-family:var(--mdc-typography-body2-font-family);font-size:var(--mdc-typography-body2-font-size);font-weight:var(--mdc-typography-body2-font-weight);line-height:var(--mdc-typography-body2-line-height)}.status-header-icon{--mdc-icon-size: 36px;border-radius:50%;min-width:72px;height:72px;display:flex;justify-content:center;align-items:center}.status-header-status{padding-left:32px;padding-bottom:16px;display:flex;flex-direction:row;align-items:center}.status-header-text-block{display:flex;flex-direction:column;margin-left:12px;margin-right:56px}.status-header-text-block .status-header-helper{font-family:var(--mdc-typography-caption-font-family);font-size:var(--mdc-typography-caption-font-size);font-weight:var(--mdc-typography-caption-font-weight);line-height:var(--mdc-typography-caption-line-height)}";var J=Object.getOwnPropertyDescriptor,K=(a,e,r,n)=>{for(var t=n>1?void 0:n?J(e,r):e,s=a.length-1,c;s>=0;s--)(c=a[s])&&(t=c(t)||t);return t};let x=class extends b{};x.styles=[B`
      ${D(G)}
    `];x=K([R("cv-status-header")],x);const N=":host{--cv-status-header-item-width: 178px;display:flex;padding:14px 16px;align-items:center;font-family:var(--mdc-typography-body2-font-family);font-size:var(--mdc-typography-body2-font-size);font-weight:var(--mdc-typography-body2-font-weight);line-height:var(--mdc-typography-body2-line-height)}span{display:inline-block;width:var(--cv-status-header-item-width);color:var(--mdc-theme-text-secondary-on-background)}";var Q=Object.defineProperty,U=Object.getOwnPropertyDescriptor,W=(a,e,r,n)=>{for(var t=n>1?void 0:n?U(e,r):e,s=a.length-1,c;s>=0;s--)(c=a[s])&&(t=(n?c(e,r,t):c(t))||t);return n&&t&&Q(e,r,t),t};let p=class extends j{render(){return E`<span>${this.label}</span> <slot></slot>`}};p.styles=[B`
      ${D(N)}
    `];W([m()],p.prototype,"label",2);p=W([R("cv-status-header-item")],p);const ot={title:"Components/Status Header",parameters:{layout:"fullscreen"},argTypes:{state:{options:["active","caution","error","positive","neutral"],control:{type:"select"}}},args:{state:"neutral",title:"Item details",status:"Status",icon:"Status"}},V=(a,e)=>a==="active"?'<cv-circular-progress slot="status-header-icon" indeterminate density="-2"></cv-circular-progress>':a==="pending"?'<cv-icon slot="status-header-icon" class="covalent-icon">loader_dots</cv-icon>':`<cv-icon slot="status-header-icon">${e}</cv-icon>`,i=({state:a="neutral",status:e="status",title:r="title",icon:n})=>`
    <cv-status-header state="${a}" statusText="${e}" statusHelper="secondary text" titleText="${r}">
      ${V(a,n)}

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
    </cv-status-header>`,o=i.bind({});o.args={state:"active",status:"Running",title:"Active item details"};const l=i.bind({});l.args={state:"caution",icon:"warning",status:"Caution",title:"Caution item details"};const d=i.bind({});d.args={state:"error",icon:"error",status:"Error",title:"Error item details"};const u=i.bind({});u.args={state:"positive",icon:"done",status:"Positive",title:"Positive item details"};const h=i.bind({});h.args={icon:"pause",status:"Paused",title:"Paused item details"};const v=i.bind({});v.args={state:"pending",status:"Pending",title:"Pending item details"};var y,f,P;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`({
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
}`,...(P=(f=o.parameters)==null?void 0:f.docs)==null?void 0:P.source}}};var T,$,S;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`({
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
}`,...(S=($=l.parameters)==null?void 0:$.docs)==null?void 0:S.source}}};var w,C,_;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`({
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
}`,...(_=(C=d.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var k,H,I;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`({
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
}`,...(I=(H=u.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var M,A,z;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`({
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
}`,...(z=(A=h.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var O,L,Y;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`({
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
}`,...(Y=(L=v.parameters)==null?void 0:L.docs)==null?void 0:Y.source}}};const lt=["Active","Caution","Error","Positive","Paused","Pending"];export{o as Active,l as Caution,d as Error,h as Paused,v as Pending,u as Positive,lt as __namedExportsOrder,ot as default};
