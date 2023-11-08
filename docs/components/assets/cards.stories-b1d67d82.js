import"./card-358fb0a4.js";import{t as u}from"./table.content-6c0ad423.js";/* empty css                           */import"./query-assigned-elements-9f88bee1.js";import"./class-map-018c3a6a.js";import"./property-f36ea729.js";const B={title:"Components/Cards",args:{cardTitle:"Card title",outlined:!1,actionBar:!1}},t=({outlined:s,actionBar:d,cardTitle:l})=>`
  <cv-card 
    cardTitle='${l}'
    ${d?"actionBar":""}
    ${s?"outlined":""}
  >
    ${u}
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
  actionBar,
  cardTitle
}) => {
  return \`
  <cv-card 
    cardTitle='\${cardTitle}'
    \${actionBar ? 'actionBar' : ''}
    \${outlined ? 'outlined' : ''}
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
  actionBar,
  cardTitle
}) => {
  return \`
  <cv-card 
    cardTitle='\${cardTitle}'
    \${actionBar ? 'actionBar' : ''}
    \${outlined ? 'outlined' : ''}
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
}`,...(e=(r=n.parameters)==null?void 0:r.docs)==null?void 0:e.source}}};const T=["Basic","Outline"];export{t as Basic,n as Outline,T as __namedExportsOrder,B as default};
//# sourceMappingURL=cards.stories-b1d67d82.js.map
