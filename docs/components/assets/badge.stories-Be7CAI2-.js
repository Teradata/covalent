import{r as P,i as W,n as p,s as D,x as M,e as U}from"./query-assigned-elements-BJdb4KNY.js";import{o as j}from"./class-map-LmxYoNzI.js";import"./icon-1XQe7S_h.js";import"./icon-button-BLwa0yFi.js";import"./list-item-EZYiye02.js";import"./list-DBoJjtpq.js";import"./typography-Cz0H0E8U.js";import"./directive-CvdRHFdJ.js";import"./mwc-icon-ClXlKBjv.js";import"./tslib.es6-X4n3o5C8.js";import"./ripple-handlers-_TDZG32v.js";import"./base-element-BG6oFIG9.js";import"./utils-sZhlDiu_.js";import"./state-CGn7W7VL.js";import"./query-pFbEai1B.js";import"./style-map-CNNK6hz8.js";import"./aria-property-BYXgNswj.js";import"./event-options-CZVCfsC0.js";import"./if-defined-dAx6j6jI.js";import"./mwc-icon-button.css-DLV-hkFx.js";import"./observer-D8jHVEI7.js";import"./query-assigned-nodes-BxERp_Ow.js";const q=".cv-badge{background-color:var(--cv-theme-negative);border-radius:11px;box-sizing:border-box;color:var(--cv-theme-on-negative);display:inline-block;font-family:var(--mdc-typography-caption-font-family);font-size:var(--mdc-typography-caption-font-size);font-weight:var(--mdc-typography-caption-font-weight);line-height:var(--mdc-typography-caption-line-height);height:16px;min-width:16px;padding:0 4px;position:absolute;text-align:center}.cv-badge.small{height:2px;padding:2px;min-width:2px}.cv-badge.top-right{top:var(--cv-badge-position-y, -2px);right:var(--cv-badge-position-x, -2px)}.cv-badge.top-left{top:var(--cv-badge-position-y, -2px);left:var(--cv-badge-position-x, -2px)}.cv-badge.bottom-right{bottom:var(--cv-badge-position-y, -2px);right:var(--cv-badge-position-x, -2px)}.cv-badge.bottom-left{bottom:var(--cv-badge-position-y, -2px);left:var(--cv-badge-position-x, -2px)}.cv-badge.isolated{position:relative;top:0;right:0;bottom:0;left:0}.cv-badge-container{position:relative;display:inline-flex}.wrapped-content{flex-grow:1}.hidden{display:none}";var H=Object.defineProperty,R=Object.getOwnPropertyDescriptor,c=(e,t,n,r)=>{for(var o=r>1?void 0:r?R(t,n):t,i=e.length-1,s;i>=0;i--)(s=e[i])&&(o=(r?s(t,n,o):s(o))||o);return r&&o&&H(t,n,o),o};let a=class extends D{constructor(){super(...arguments),this.max=100,this.size="large",this.hideBadge=!1,this.verticalAlignment="top",this.horizontalAlignment="right"}firstUpdated(){var t;const e=this.renderRoot.querySelector("slot");if(e&&!e.assignedNodes({flatten:!0}).filter(o=>o.nodeType===Node.ELEMENT_NODE).length){const o=this.renderRoot.querySelector("#badge-content");(t=o==null?void 0:o.classList)==null||t.add("isolated")}}getContent(){let e=this.content;const t=Number(e);return this.showZero&&e==0?e=e.toString():!isNaN(t)&&this.max&&(e=t>this.max?`${this.max}+`:t),e||""}render(){const e={"cv-badge":!0,small:this.size==="small",hidden:!!this.hideBadge||!this.showZero&&this.content==0};return e[`${this.verticalAlignment}-${this.horizontalAlignment}`]=!0,M`
      <div class="cv-badge-container">
        <slot class="wrapped-content"></slot>
        <span id="badge-content" class="${j(e)}">
          ${this.size!=="small"?this.getContent():""}
        </span>
      </div>
    `}};a.styles=[W`
      ${P(q)}
    `];c([p()],a.prototype,"content",2);c([p()],a.prototype,"max",2);c([p()],a.prototype,"size",2);c([p({type:Boolean,reflect:!0})],a.prototype,"hideBadge",2);c([p()],a.prototype,"verticalAlignment",2);c([p()],a.prototype,"horizontalAlignment",2);c([p({type:Boolean,reflect:!0})],a.prototype,"showZero",2);a=c([U("cv-badge")],a);const ve={title:"Components/Badge",argTypes:{size:{options:["large","small"],control:{type:"select"}},verticalAlignment:{options:["top","bottom"],control:{type:"select"}},horizontalAlignment:{options:["right","left"],control:{type:"select"}}},args:{content:22,max:99,size:"large",verticalAlignment:"top",horizontalAlignment:"right",showZero:!0,hideBadge:!1},tags:["autodocs"]},b=({content:e,max:t,size:n,showZero:r,hideBadge:o,verticalAlignment:i,horizontalAlignment:s,showicon:y=!0})=>`<cv-badge${e||e==0?` content=${e}`:""}${n?` size=${n}`:""}${t?` max=${t}`:""}${i?` verticalAlignment=${i}`:""}${s?` horizontalAlignment=${s}`:""}${r?" showZero":""}${o?" hideBadge":""}>
    ${y?'<cv-icon style="font-size: 36px">chat</cv-icon>':""}
  </cv-badge>`,F=({content:e,max:t,size:n,showZero:r,hideBadge:o,verticalAlignment:i,horizontalAlignment:s,showicon:y=!0})=>`<cv-badge${e||e==0?` content=${e}`:""}${n?` size=${n}`:""}${t?` max=${t}`:""}${i?` verticalAlignment=${i}`:""}${s?` horizontalAlignment=${s}`:""}${r?" showZero":""}${o?" hideBadge":""}>
    ${y?'<cv-icon-button icon="houseboat"></cv-icon-button>':""}
  </cv-badge>`,l={args:{content:"1000",max:99,size:"large",showZero:!0,verticalAlignment:"top",horizontalAlignment:"right",showicon:!1},render:b},d={args:{content:33,max:99},render:F},g={args:{content:3,max:99},render:b},m={args:{content:9999,max:99},render:b},v={args:{size:"small"},render:b},h={render:()=>`
  <div style="margin-bottom: 3em;">
    <cv-typography scale="headline5">Basic</cv-typography>
    <cv-badge content='Hello world'></cv-badge>
  </div>
  <cv-typography scale="headline5">Used in a list</cv-typography>
  <cv-list>
    <cv-list-item>
      <span style="padding-right: 2em;">Item 1</span>
      <cv-badge content=22 max=999></cv-badge>
    </cv-list-item>
    <cv-list-item>
      <span style="padding-right: 2em;">Item 2</span>
      <cv-badge content=1000 max=999></cv-badge>
    </cv-list-item>
  </cv-list>`};var u,x,f;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    content: '1000',
    max: 99,
    size: 'large',
    showZero: true,
    verticalAlignment: 'top',
    horizontalAlignment: 'right',
    showicon: false
  },
  render: badgeTemplate
}`,...(f=(x=l.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var $,w,z;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    content: 33,
    max: 99
  },
  render: badgeButtonTemplate
}`,...(z=(w=d.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var B,A,S;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    content: 3,
    max: 99
  },
  render: badgeTemplate
}`,...(S=(A=g.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var T,_,N;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    content: 9999,
    max: 99
  },
  render: badgeTemplate
}`,...(N=(_=m.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var I,L,Z;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    size: 'small'
  },
  render: badgeTemplate
}`,...(Z=(L=v.parameters)==null?void 0:L.docs)==null?void 0:Z.source}}};var C,O,E;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => \`
  <div style="margin-bottom: 3em;">
    <cv-typography scale="headline5">Basic</cv-typography>
    <cv-badge content='Hello world'></cv-badge>
  </div>
  <cv-typography scale="headline5">Used in a list</cv-typography>
  <cv-list>
    <cv-list-item>
      <span style="padding-right: 2em;">Item 1</span>
      <cv-badge content=22 max=999></cv-badge>
    </cv-list-item>
    <cv-list-item>
      <span style="padding-right: 2em;">Item 2</span>
      <cv-badge content=1000 max=999></cv-badge>
    </cv-list-item>
  </cv-list>\`
}`,...(E=(O=h.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};const he=["Main","IconButton","Large","LargeWithLimit","IconWithSmallBadge","Basic"];export{h as Basic,d as IconButton,v as IconWithSmallBadge,g as Large,m as LargeWithLimit,l as Main,he as __namedExportsOrder,ve as default};
