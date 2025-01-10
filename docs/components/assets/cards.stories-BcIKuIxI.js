import"./card-CDmxGZrs.js";import{t as v}from"./table.content-DXiXegTF.js";/* empty css                           */import"./query-assigned-elements-DrVEbY-Z.js";import"./class-map-BiVinSLa.js";import"./directive-CvdRHFdJ.js";import"./property-jaip2ZBL.js";const h={title:"Components/Cards",args:{cardTitle:"Card title",outlined:!1,actionBar:!1,fullHeight:!1}},t=({outlined:l,fullHeight:s,actionBar:d,cardTitle:u})=>`
  <cv-card 
    cardTitle='${u}'
    ${d?"actionBar":""}
    ${l?"outlined":""}
    ${s?"fullHeight":""}
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
}`,...(e=(r=n.parameters)==null?void 0:r.docs)==null?void 0:e.source}}};const B=["Basic","Outline"];export{t as Basic,n as Outline,B as __namedExportsOrder,h as default};
