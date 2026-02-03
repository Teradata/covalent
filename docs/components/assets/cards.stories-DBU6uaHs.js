import"./card-DvWGfXr6.js";import{t as v}from"./table.content-DXiXegTF.js";/* empty css                           */import"./query-assigned-elements-BJdb4KNY.js";import"./class-map-LmxYoNzI.js";import"./directive-CvdRHFdJ.js";const g={title:"Components/Cards",args:{cardTitle:"Card title",outlined:!1,actionBar:!1,fullHeight:!1},tags:["autodocs"]},t=({outlined:s,fullHeight:l,actionBar:d,cardTitle:u})=>`
  <cv-card 
    cardTitle='${u}'
    ${d?"actionBar":""}
    ${s?"outlined":""}
    ${l?"fullHeight":""}
  >
    ${v}
    <div slot="card-actions" class="mdc-card__action-buttons">
      <cv-button label="Action 1"></cv-button>
      <cv-button label="Action 2"></cv-button>
    </div>
    <div slot="card-actions" class="mdc-card__action-icons">
      <cv-icon-button icon="share"></cv-icon-button>
      <cv-icon-button icon="more_vert"></cv-icon-button>
    </div>
  </cv-card>
  `,n=t.bind({});n.args={outlined:!0,cardTitle:""};var c,o,a;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`({
  outlined,
  fullHeight,
  actionBar,
  cardTitle
}) => {
  return \`
  <cv-card 
    cardTitle='\${cardTitle}'
    \${actionBar ? 'actionBar' : ''}
    \${outlined ? 'outlined' : ''}
    \${fullHeight ? 'fullHeight' : ''}
  >
    \${tableContent}
    <div slot="card-actions" class="mdc-card__action-buttons">
      <cv-button label="Action 1"></cv-button>
      <cv-button label="Action 2"></cv-button>
    </div>
    <div slot="card-actions" class="mdc-card__action-icons">
      <cv-icon-button icon="share"></cv-icon-button>
      <cv-icon-button icon="more_vert"></cv-icon-button>
    </div>
  </cv-card>
  \`;
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var i,r,e;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`({
  outlined,
  fullHeight,
  actionBar,
  cardTitle
}) => {
  return \`
  <cv-card 
    cardTitle='\${cardTitle}'
    \${actionBar ? 'actionBar' : ''}
    \${outlined ? 'outlined' : ''}
    \${fullHeight ? 'fullHeight' : ''}
  >
    \${tableContent}
    <div slot="card-actions" class="mdc-card__action-buttons">
      <cv-button label="Action 1"></cv-button>
      <cv-button label="Action 2"></cv-button>
    </div>
    <div slot="card-actions" class="mdc-card__action-icons">
      <cv-icon-button icon="share"></cv-icon-button>
      <cv-icon-button icon="more_vert"></cv-icon-button>
    </div>
  </cv-card>
  \`;
}`,...(e=(r=n.parameters)==null?void 0:r.docs)==null?void 0:e.source}}};const h=["Basic","Outline"];export{t as Basic,n as Outline,h as __namedExportsOrder,g as default};
