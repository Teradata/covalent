import"./card-DvWGfXr6.js";import"./icon-button-BLwa0yFi.js";import"./expansion-panel-item-Bx9-JHPw.js";import{t as b}from"./table.content-DXiXegTF.js";/* empty css                           */import"./query-assigned-elements-BJdb4KNY.js";import"./class-map-LmxYoNzI.js";import"./directive-CvdRHFdJ.js";import"./tslib.es6-X4n3o5C8.js";import"./ripple-handlers-_TDZG32v.js";import"./base-element-BG6oFIG9.js";import"./utils-sZhlDiu_.js";import"./state-CGn7W7VL.js";import"./query-pFbEai1B.js";import"./style-map-CNNK6hz8.js";import"./aria-property-BYXgNswj.js";import"./event-options-CZVCfsC0.js";import"./if-defined-dAx6j6jI.js";import"./mwc-icon-button.css-DLV-hkFx.js";import"./icon-1XQe7S_h.js";import"./mwc-icon-ClXlKBjv.js";const G={title:"Components/Cards",args:{cardTitle:"Card title",outlined:!1,actionBar:!1,fullHeight:!1,interactive:!1},tags:["autodocs"]},g=({outlined:r,fullHeight:a,actionBar:i,cardTitle:o,interactive:c})=>`
  <cv-card 
    cardTitle='${o}'
    ${i?"actionBar":""}
    ${r?"outlined":""}
    ${a?"fullHeight":""}
    ${c?"interactive":""}
  >
    ${b}
    <div slot="card-actions" class="mdc-card__action-buttons">
      <cv-button label="Save" outlined></cv-button>
      <cv-button label="Cancel" outlined></cv-button>
    </div>
    <div slot="card-actions" class="mdc-card__action-icons">
      <cv-icon-button icon="share"></cv-icon-button>
      <cv-icon-button icon="more_vert"></cv-icon-button>
    </div>
  </cv-card>
  `,$=({outlined:r,fullHeight:a,actionBar:i,cardTitle:o,interactive:c})=>`
  <cv-card 
    cardTitle='${o}'
    ${i?"actionBar":""}
    ${r?"outlined":""}
    ${a?"fullHeight":""}
    ${c?"interactive":""}
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
  `,e={args:{cardTitle:"Card title",actionBar:!0},render:g},t={args:{cardTitle:"Card title"},render:$},n={args:{outlined:!0,cardTitle:""},render:g};var s,l,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    cardTitle: 'Card title',
    actionBar: true
  },
  render: cardTemplate
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,m,v;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    cardTitle: 'Card title'
  },
  render: cardExpansionPanelTemplate
}`,...(v=(m=t.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var u,x,T;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    outlined: true,
    cardTitle: ''
  },
  render: cardTemplate
}`,...(T=(x=n.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};const I=["Main","ExpansionPanel","Outline"];export{t as ExpansionPanel,e as Main,n as Outline,I as __namedExportsOrder,G as default};
