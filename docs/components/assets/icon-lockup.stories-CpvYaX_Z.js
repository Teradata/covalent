import{i as z,r as E,n as s,s as F,x as $,e as R}from"./query-assigned-elements-XF8sHqwE.js";import{t as A}from"./state-DigO7a43.js";import{o as f}from"./class-map-j_UyOF6B.js";import"./typography-Ds7ZYN-2.js";import"./icon-CrSZ4KIT.js";import"./circular-progress-admkD07R.js";import"./directive-CF8sV3Lr.js";import"./mwc-icon-CKAD9T7f.js";import"./tslib.es6-B8g9kRRR.js";import"./aria-property-BYXgNswj.js";import"./if-defined-a0dakvOI.js";import"./style-map-BvUKPc5V.js";const G='.filled{font-variation-settings:"FILL" 1}.hidden{display:none}.icon-lockup{align-items:center;display:flex;gap:4px;max-width:100%}.icon-lockup cv-typography{flex:1 0 0}.icon-lockup--primary,.icon-lockup--loading{color:var(--cv-theme-primary)}.icon-lockup--positive{color:var(--cv-theme-positive)}.icon-lockup--negative{color:var(--cv-theme-negative)}.icon-lockup--caution{color:var(--cv-theme-caution)}.text{font-feature-settings:"liga" off,"clig" off;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.trailing-icon{flex-direction:row-reverse}';var H=Object.defineProperty,J=Object.getOwnPropertyDescriptor,i=(o,e,c,a)=>{for(var n=a>1?void 0:a?J(e,c):e,r=o.length-1,g;r>=0;r--)(g=o[r])&&(n=(a?g(e,c,n):g(n))||n);return a&&n&&H(e,c,n),n};let t=class extends F{constructor(){super(...arguments),this.covalentIcon=!1,this.filledIcon=!1,this.icon="",this.scale="body1",this.state="neutral",this.trailingIcon=!1,this._hasIconSlot=!1}checkIconSlot(){var e;const o=(e=this.shadowRoot)==null?void 0:e.querySelector('slot[name="icon"]');this._hasIconSlot=o&&o.assignedNodes().length>0}iconTemplate(){const o={"covalent-icon":this.covalentIcon,filled:this.filledIcon,hidden:this._hasIconSlot};return $`<slot name="icon"></slot>
      <cv-icon
        class=${f(o)}
        style="${`font-size: var(--cv-typography-${this.scale}-line-height, 16px)`}"
      >
        ${this.icon}
      </cv-icon>`}render(){const o={"icon-lockup":!0,[`icon-lockup--${this.state}`]:this.state,"trailing-icon":this.trailingIcon};return $`
      <cv-typography class=${f(o)} scale="${this.scale}">
        ${this.iconTemplate()}
        <div class="text"><slot></slot></div>
      </cv-typography>
    `}updated(o){super.updated(o),this.checkIconSlot()}};t.styles=[z`
      ${E(G)}
    `];i([s({type:Boolean,reflect:!0})],t.prototype,"covalentIcon",2);i([s({type:Boolean,reflect:!0})],t.prototype,"filledIcon",2);i([s({type:String})],t.prototype,"icon",2);i([s({type:String})],t.prototype,"scale",2);i([s({type:String})],t.prototype,"state",2);i([s({type:Boolean})],t.prototype,"trailingIcon",2);i([A()],t.prototype,"_hasIconSlot",2);t=i([R("cv-icon-lockup")],t);const co={title:"Components/Icon lockup",argTypes:{scale:{options:["headline1","headline2","headline3","headline4","headline5","headline6","subtitle1","subtitle2","button","caption","overline","body1","body2"],control:{type:"select"}},state:{options:["primary","positive","negative","caution",null],control:{type:"select"}}},args:{covalentIcon:!1,filledIcon:!1,icon:"houseboat",scale:"body1",state:"null",trailingIcon:!1}},v=({icon:o,scale:e,trailingIcon:c,state:a,covalentIcon:n,filledIcon:r})=>`<cv-icon-lockup icon="${o}" scale="${e}"${c?" trailingIcon":""}${n?" covalentIcon":""}${r?" filledIcon":""}${a?` state=${a}`:""}>Lorem ipsum dolor sit amet</cv-icon-lockup>`,K=({scale:o,trailingIcon:e,state:c})=>`<cv-icon-lockup scale="${o}"${e?" trailingIcon":""}${c?` state=${c}`:""}>Lorem ipsum dolor sit amet
    <cv-circular-progress indeterminate slot="icon" density="-6"></cv-circular-progress>
  </cv-icon-lockup>`,I=v.bind({}),l=v.bind({});l.args={state:"primary"};const p=v.bind({});p.args={state:"positive",icon:"check"};const u=v.bind({});u.args={state:"negative",icon:"error",filledIcon:!0};const d=v.bind({});d.args={state:"caution",icon:"warning",filledIcon:!0};const m=K.bind({});m.args={state:"primary"};var h,y,k;I.parameters={...I.parameters,docs:{...(h=I.parameters)==null?void 0:h.docs,source:{originalSource:`({
  icon,
  scale,
  trailingIcon,
  state,
  covalentIcon,
  filledIcon
}) => {
  return \`<cv-icon-lockup icon="\${icon}" scale="\${scale}"\${trailingIcon ? ' trailingIcon' : ''}\${covalentIcon ? ' covalentIcon' : ''}\${filledIcon ? ' filledIcon' : ''}\${state ? \` state=\${state}\` : ''}>Lorem ipsum dolor sit amet</cv-icon-lockup>\`;
}`,...(k=(y=I.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var b,S,L;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`({
  icon,
  scale,
  trailingIcon,
  state,
  covalentIcon,
  filledIcon
}) => {
  return \`<cv-icon-lockup icon="\${icon}" scale="\${scale}"\${trailingIcon ? ' trailingIcon' : ''}\${covalentIcon ? ' covalentIcon' : ''}\${filledIcon ? ' filledIcon' : ''}\${state ? \` state=\${state}\` : ''}>Lorem ipsum dolor sit amet</cv-icon-lockup>\`;
}`,...(L=(S=l.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var x,_,w;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`({
  icon,
  scale,
  trailingIcon,
  state,
  covalentIcon,
  filledIcon
}) => {
  return \`<cv-icon-lockup icon="\${icon}" scale="\${scale}"\${trailingIcon ? ' trailingIcon' : ''}\${covalentIcon ? ' covalentIcon' : ''}\${filledIcon ? ' filledIcon' : ''}\${state ? \` state=\${state}\` : ''}>Lorem ipsum dolor sit amet</cv-icon-lockup>\`;
}`,...(w=(_=p.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var P,B,C;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`({
  icon,
  scale,
  trailingIcon,
  state,
  covalentIcon,
  filledIcon
}) => {
  return \`<cv-icon-lockup icon="\${icon}" scale="\${scale}"\${trailingIcon ? ' trailingIcon' : ''}\${covalentIcon ? ' covalentIcon' : ''}\${filledIcon ? ' filledIcon' : ''}\${state ? \` state=\${state}\` : ''}>Lorem ipsum dolor sit amet</cv-icon-lockup>\`;
}`,...(C=(B=u.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var O,T,N;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`({
  icon,
  scale,
  trailingIcon,
  state,
  covalentIcon,
  filledIcon
}) => {
  return \`<cv-icon-lockup icon="\${icon}" scale="\${scale}"\${trailingIcon ? ' trailingIcon' : ''}\${covalentIcon ? ' covalentIcon' : ''}\${filledIcon ? ' filledIcon' : ''}\${state ? \` state=\${state}\` : ''}>Lorem ipsum dolor sit amet</cv-icon-lockup>\`;
}`,...(N=(T=d.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var j,D,q;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`({
  scale,
  trailingIcon,
  state
}) => {
  return \`<cv-icon-lockup scale="\${scale}"\${trailingIcon ? ' trailingIcon' : ''}\${state ? \` state=\${state}\` : ''}>Lorem ipsum dolor sit amet
    <cv-circular-progress indeterminate slot="icon" density="-6"></cv-circular-progress>
  </cv-icon-lockup>\`;
}`,...(q=(D=m.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};const io=["Basic","Primary","Positive","Negative","Caution","Loading"];export{I as Basic,d as Caution,m as Loading,u as Negative,p as Positive,l as Primary,io as __namedExportsOrder,co as default};
