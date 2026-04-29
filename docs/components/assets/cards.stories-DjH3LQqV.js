import"./card-DvWGfXr6.js";import{r as O,i as B,n as E,s as S,x as v,e as W}from"./query-assigned-elements-BJdb4KNY.js";import"./icon-button-CeuGj9q1.js";import"./button-DegqevOX.js";import"./typography-Dg6BggJD.js";import"./expansion-panel-item-CDNpgmRV.js";import{t as P}from"./table.content-DXiXegTF.js";/* empty css                           */import"./class-map-LmxYoNzI.js";import"./directive-CvdRHFdJ.js";import"./tslib.es6-BHOXe2z4.js";import"./ripple-handlers-CbzjdAP9.js";import"./base-element-C3CkHPn4.js";import"./utils-DQt7ZoY7.js";import"./state-CGn7W7VL.js";import"./query-pFbEai1B.js";import"./style-map-CNNK6hz8.js";import"./aria-property-BYXgNswj.js";import"./event-options-CZVCfsC0.js";import"./if-defined-dAx6j6jI.js";import"./mwc-icon-button.css-DLV-hkFx.js";import"./mwc-icon-BZDiTMPV.js";import"./icon-BYm93zaG.js";const j=":host{--cv-card-header-height: 56px;display:flex;flex-direction:column;align-self:stretch}.cv-card-header{display:flex;height:var(--cv-card-header-height);padding:0 4px 0 16px;align-self:stretch;gap:8px;align-items:center}.cv-card-header__context{flex:1 0 0;display:flex;gap:8px;align-items:center}.cv-card-header__actions{display:flex;gap:8px;align-items:center}.cv-card-header__divider{width:100%;height:1px;background-color:var(--cv-theme-outline-variant)}";var A=Object.defineProperty,D=Object.getOwnPropertyDescriptor,w=(r,t,i,a)=>{for(var e=a>1?void 0:a?D(t,i):t,l=r.length-1,p;l>=0;l--)(p=r[l])&&(e=(a?p(t,i,e):p(e))||e);return a&&e&&A(t,i,e),e};let s=class extends S{constructor(){super(...arguments),this.divider=!1}render(){return v`
      <div class="cv-card-header">
        <div class="cv-card-header__context">
          <slot name="leading"></slot>
        </div>
        <div class="cv-card-header__actions">
          <slot name="trailing"></slot>
        </div>
      </div>
      ${this.divider?v`<div class="cv-card-header__divider"></div>`:""}
    `}};s.styles=[B`
      ${O(j)}
    `];w([E({type:Boolean})],s.prototype,"divider",2);s=w([W("cv-card-header")],s);const oe={title:"Components/Cards",args:{cardTitle:"Card title",outlined:!1,actionBar:!1,fullHeight:!1,interactive:!1},tags:["autodocs"]},H=({outlined:r,fullHeight:t,actionBar:i,cardTitle:a,interactive:e})=>`
  <cv-card 
    cardTitle='${a}'
    ${i?"actionBar":""}
    ${r?"outlined":""}
    ${t?"fullHeight":""}
    ${e?"interactive":""}
  >
    ${P}
    <div slot="card-actions" class="mdc-card__action-buttons">
      <cv-button label="Save" outlined></cv-button>
      <cv-button label="Cancel" outlined></cv-button>
    </div>
    <div slot="card-actions" class="mdc-card__action-icons">
      <cv-icon-button icon="share"></cv-icon-button>
      <cv-icon-button icon="more_vert"></cv-icon-button>
    </div>
  </cv-card>
  `,F=({outlined:r,fullHeight:t,actionBar:i,cardTitle:a,interactive:e})=>`
  <cv-card 
    cardTitle='${a}'
    ${i?"actionBar":""}
    ${r?"outlined":""}
    ${t?"fullHeight":""}
    ${e?"interactive":""}
  >
    <cv-expansion-panel titleWidth="150px">
      <cv-expansion-panel-item
        title="Title"
        index="0"
        contentPreview="content preview"
      >
        <div slot="content"></div>
      </cv-expansion-panel-item>
      <cv-expansion-panel-item
        title="Title"
        index="0"
        contentPreview="content preview"
      >
        <div slot="content"></div>
      </cv-expansion-panel-item>
      <cv-expansion-panel-item
        title="Title"
        index="0"
        contentPreview="content preview"
      >
        <div slot="content"></div>
      </cv-expansion-panel-item>
    </cv-expansion-panel>
  </cv-card>
  `,M=({outlined:r,divider:t})=>`
  <cv-card ${r?"outlined":""}>
    <cv-card-header ${t?"divider":""}>
      <div slot="leading">
        <cv-typography scale="headline5">Card subtitle</cv-typography>
      </div>
      <div slot="trailing">
        <cv-icon-button icon="more_vert"></cv-icon-button>
      </div>
    </cv-card-header>
    ${P}
  </cv-card>
  `,n={args:{cardTitle:"Card title",actionBar:!0},render:H},c={args:{cardTitle:"Card title"},render:F},o={args:{outlined:!0,cardTitle:""},render:H},d={args:{outlined:!1,divider:!1},render:M};var m,u,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    cardTitle: 'Card title',
    actionBar: true
  },
  render: cardTemplate
}`,...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,x,f;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    cardTitle: 'Card title'
  },
  render: cardExpansionPanelTemplate
}`,...(f=(x=c.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var _,T,b;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    outlined: true,
    cardTitle: ''
  },
  render: cardTemplate
}`,...(b=(T=o.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var $,C,y;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    outlined: false,
    divider: false
  },
  render: cardHeaderTemplate
}`,...(y=(C=d.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};const de=["Main","ExpansionPanel","Outline","WithHeaderAndFooter"];export{c as ExpansionPanel,n as Main,o as Outline,d as WithHeaderAndFooter,de as __namedExportsOrder,oe as default};
