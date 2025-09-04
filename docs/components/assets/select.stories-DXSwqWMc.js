import"./select-C-nox3-2.js";import"./typography-cb1uvqFc.js";import"./list-item-CmxEoEoc.js";import"./button-DClSbiA8.js";import"./divider-B9-DEYML.js";import"./icon-Bpv62u9Q.js";import"./icon-lockup-k4dy3h9B.js";import"./query-assigned-elements-BJdb4KNY.js";import"./if-defined-dAx6j6jI.js";import"./class-map-LmxYoNzI.js";import"./directive-CvdRHFdJ.js";import"./tslib.es6-C-hQhb2A.js";import"./mwc-line-ripple-directive-CtRFQWit.js";import"./base-element-C3CkHPn4.js";import"./utils-DQt7ZoY7.js";import"./query-pFbEai1B.js";import"./observer-D8jHVEI7.js";import"./state-CGn7W7VL.js";import"./style-map-CNNK6hz8.js";import"./mwc-icon-BGUO1vKj.js";import"./form-element-BmZ4g8Y6.js";import"./event-options-CZVCfsC0.js";import"./query-assigned-nodes-BxERp_Ow.js";import"./ripple-handlers-CLC5WHP1.js";import"./aria-property-BYXgNswj.js";const X={title:"Components/Select",argTypes:{style:{options:["outlined","filled","text"],control:{type:"radio"}}},args:{style:"outlined"}},o=({icon:e,style:i,required:a,helper:t})=>`
        <cv-select
            label="${i}"
            validationMessage="This Field is Required"
            ${i}
            ${e?`icon="${e}"`:null}
            ${t?`helper="${t}"`:null}
            ${a?"required":null}>
            <cv-list-item selected></cv-list-item>
            <cv-list-item ${e?'graphic="icon"':null} value="0">Item 0</cv-list-item>
            <cv-list-item ${e?'graphic="icon"':null} value="1">Item 1</cv-list-item>
            <cv-list-item ${e?'graphic="icon"':null} value="2">Item 2</cv-list-item>
            <cv-list-item ${e?'graphic="icon"':null} value="3">Item 3</cv-list-item>
        </cv-select>`,R=({icon:e,style:i,required:a,helper:t})=>`
        <cv-select
            label="${i}"
            validationMessage="This Field is Required"
            naturalMenuWidth
            twoLine
            ${i}
            ${e?`icon="${e}"`:null}
            ${t?`helper="${t}"`:null}
            ${a?"required":null}>
            <cv-icon-lockup slot="selected-secondary" icon="check" scale="caption" state="positive">online</cv-icon-lockup>
            <cv-typography scale="subtitle2" style="margin:0px 16px 10px;">Select an Item</cv-typography>
            <cv-divider flush></cv-divider>
            <cv-list-item twoline selected hasMeta ${e?'graphic="icon"':null} value="0">
            Basic user
            <cv-icon slot="graphic">check</cv-icon>
            <span slot="secondary">1 CPU, 2GB RAM</span>
            <cv-button slot="meta" label="start" outlined style="--cv-density-mode:-3; margin-left: 24px"></cv-button>
          </cv-list-item>
          <cv-list-item twoline selected ${e?'graphic="icon"':null} value="1">
            Advanced user
            <span slot="secondary">2 CPU, 4GB RAM</span>
          </cv-list-item>
          <cv-list-item twoline ${e?'graphic="icon"':null} value="2">
            Pro user
            <span slot="secondary">4 CPU, 8GB RAM</span>
          </cv-list-item>
          <cv-divider flush></cv-divider>
          <div>
            <cv-list-item graphic="icon" label="Add New" style="--mdc-theme-text-primary-on-background:var(--mdc-theme-primary);--mdc-theme-text-icon-on-background:var(--mdc-theme-primary);">
              <cv-icon slot="graphic">add</cv-icon>
              Add New
            </cv-list-item>
          </div>
        </cv-select>`,s=o.bind({}),n=o.bind({});n.args={required:!0};const l=o.bind({});l.args={icon:"event"};const c=o.bind({});c.args={helper:"Helper Text"};const r=R.bind({});r.args={icon:"power",required:!0};var m,v,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:'({\n  icon,\n  style,\n  required,\n  helper\n}) => {\n  return `\n        <cv-select\n            label="${style}"\n            validationMessage="This Field is Required"\n            ${style}\n            ${icon ? `icon="${icon}"` : null}\n            ${helper ? `helper="${helper}"` : null}\n            ${required ? `required` : null}>\n            <cv-list-item selected></cv-list-item>\n            <cv-list-item ${icon ? `graphic="icon"` : null} value="0">Item 0</cv-list-item>\n            <cv-list-item ${icon ? `graphic="icon"` : null} value="1">Item 1</cv-list-item>\n            <cv-list-item ${icon ? `graphic="icon"` : null} value="2">Item 2</cv-list-item>\n            <cv-list-item ${icon ? `graphic="icon"` : null} value="3">Item 3</cv-list-item>\n        </cv-select>`;\n}',...(u=(v=s.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var p,d,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:'({\n  icon,\n  style,\n  required,\n  helper\n}) => {\n  return `\n        <cv-select\n            label="${style}"\n            validationMessage="This Field is Required"\n            ${style}\n            ${icon ? `icon="${icon}"` : null}\n            ${helper ? `helper="${helper}"` : null}\n            ${required ? `required` : null}>\n            <cv-list-item selected></cv-list-item>\n            <cv-list-item ${icon ? `graphic="icon"` : null} value="0">Item 0</cv-list-item>\n            <cv-list-item ${icon ? `graphic="icon"` : null} value="1">Item 1</cv-list-item>\n            <cv-list-item ${icon ? `graphic="icon"` : null} value="2">Item 2</cv-list-item>\n            <cv-list-item ${icon ? `graphic="icon"` : null} value="3">Item 3</cv-list-item>\n        </cv-select>`;\n}',...(h=(d=n.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var $,g,y;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:'({\n  icon,\n  style,\n  required,\n  helper\n}) => {\n  return `\n        <cv-select\n            label="${style}"\n            validationMessage="This Field is Required"\n            ${style}\n            ${icon ? `icon="${icon}"` : null}\n            ${helper ? `helper="${helper}"` : null}\n            ${required ? `required` : null}>\n            <cv-list-item selected></cv-list-item>\n            <cv-list-item ${icon ? `graphic="icon"` : null} value="0">Item 0</cv-list-item>\n            <cv-list-item ${icon ? `graphic="icon"` : null} value="1">Item 1</cv-list-item>\n            <cv-list-item ${icon ? `graphic="icon"` : null} value="2">Item 2</cv-list-item>\n            <cv-list-item ${icon ? `graphic="icon"` : null} value="3">Item 3</cv-list-item>\n        </cv-select>`;\n}',...(y=(g=l.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var q,b,I;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:'({\n  icon,\n  style,\n  required,\n  helper\n}) => {\n  return `\n        <cv-select\n            label="${style}"\n            validationMessage="This Field is Required"\n            ${style}\n            ${icon ? `icon="${icon}"` : null}\n            ${helper ? `helper="${helper}"` : null}\n            ${required ? `required` : null}>\n            <cv-list-item selected></cv-list-item>\n            <cv-list-item ${icon ? `graphic="icon"` : null} value="0">Item 0</cv-list-item>\n            <cv-list-item ${icon ? `graphic="icon"` : null} value="1">Item 1</cv-list-item>\n            <cv-list-item ${icon ? `graphic="icon"` : null} value="2">Item 2</cv-list-item>\n            <cv-list-item ${icon ? `graphic="icon"` : null} value="3">Item 3</cv-list-item>\n        </cv-select>`;\n}',...(I=(b=c.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};var x,M,w;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`({
  icon,
  style,
  required,
  helper
}) => {
  return \`
        <cv-select
            label="\${style}"
            validationMessage="This Field is Required"
            naturalMenuWidth
            twoLine
            \${style}
            \${icon ? \`icon="\${icon}"\` : null}
            \${helper ? \`helper="\${helper}"\` : null}
            \${required ? \`required\` : null}>
            <cv-icon-lockup slot="selected-secondary" icon="check" scale="caption" state="positive">online</cv-icon-lockup>
            <cv-typography scale="subtitle2" style="margin:0px 16px 10px;">Select an Item</cv-typography>
            <cv-divider flush></cv-divider>
            <cv-list-item twoline selected hasMeta \${icon ? \`graphic="icon"\` : null} value="0">
            Basic user
            <cv-icon slot="graphic">check</cv-icon>
            <span slot="secondary">1 CPU, 2GB RAM</span>
            <cv-button slot="meta" label="start" outlined style="--cv-density-mode:-3; margin-left: 24px"></cv-button>
          </cv-list-item>
          <cv-list-item twoline selected \${icon ? \`graphic="icon"\` : null} value="1">
            Advanced user
            <span slot="secondary">2 CPU, 4GB RAM</span>
          </cv-list-item>
          <cv-list-item twoline \${icon ? \`graphic="icon"\` : null} value="2">
            Pro user
            <span slot="secondary">4 CPU, 8GB RAM</span>
          </cv-list-item>
          <cv-divider flush></cv-divider>
          <div>
            <cv-list-item graphic="icon" label="Add New" style="--mdc-theme-text-primary-on-background:var(--mdc-theme-primary);--mdc-theme-text-icon-on-background:var(--mdc-theme-primary);">
              <cv-icon slot="graphic">add</cv-icon>
              Add New
            </cv-list-item>
          </div>
        </cv-select>\`;
}`,...(w=(M=r.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};const Y=["Basic","Required","Icon","HelperText","twoLine"];export{s as Basic,c as HelperText,l as Icon,n as Required,Y as __namedExportsOrder,X as default,r as twoLine};
