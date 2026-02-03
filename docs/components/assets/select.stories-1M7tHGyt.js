import"./select-8550eXcI.js";import"./typography-Cz0H0E8U.js";import"./list-item-CmxEoEoc.js";import"./button-ADBjHWlY.js";import"./divider-B9-DEYML.js";import"./icon-BYPYUWym.js";import"./icon-lockup-B0UNFivd.js";import"./query-assigned-elements-BJdb4KNY.js";import"./if-defined-dAx6j6jI.js";import"./class-map-LmxYoNzI.js";import"./directive-CvdRHFdJ.js";import"./tslib.es6-C-hQhb2A.js";import"./mwc-line-ripple-directive-CtRFQWit.js";import"./base-element-C3CkHPn4.js";import"./utils-DQt7ZoY7.js";import"./query-pFbEai1B.js";import"./observer-D8jHVEI7.js";import"./state-CGn7W7VL.js";import"./style-map-CNNK6hz8.js";import"./mwc-icon-BGUO1vKj.js";import"./form-element-BmZ4g8Y6.js";import"./event-options-CZVCfsC0.js";import"./query-assigned-nodes-BxERp_Ow.js";import"./ripple-handlers-CLC5WHP1.js";import"./aria-property-BYXgNswj.js";const Y={title:"Components/Select",argTypes:{style:{options:["outlined","filled","text"],control:{type:"radio"}},disabled:{control:"boolean"}},args:{style:"outlined",disabled:!1}},a=({icon:e,style:i,required:o,helper:l,disabled:d})=>`
        <cv-select
            label="${i}"
            validationMessage="This Field is Required"
            ${i}
            ${e?`icon="${e}"`:null}
            ${l?`helper="${l}"`:null}
            ${o?"required":null}
            ${d?"disabled":null}>
            <cv-list-item selected></cv-list-item>
            <cv-list-item ${e?'graphic="icon"':null} value="0">Item 0</cv-list-item>
            <cv-list-item ${e?'graphic="icon"':null} value="1">Item 1</cv-list-item>
            <cv-list-item ${e?'graphic="icon"':null} value="2">Item 2</cv-list-item>
            <cv-list-item ${e?'graphic="icon"':null} value="3">Item 3</cv-list-item>
        </cv-select>`,A=({icon:e,style:i,required:o,helper:l,disabled:d})=>`
        <cv-select
            label="${i}"
            validationMessage="This Field is Required"
            naturalMenuWidth
            twoLine
            ${i}
            ${e?`icon="${e}"`:null}
            ${l?`helper="${l}"`:null}
            ${o?"required":null}
            ${d?"disabled":null}>
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
        </cv-select>`,r=a.bind({}),t=a.bind({});t.args={required:!0};const n=a.bind({});n.args={icon:"event"};const c=a.bind({});c.args={helper:"Helper Text"};const s=A.bind({});s.args={icon:"power",required:!0};var m,u,v;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:'({\n  icon,\n  style,\n  required,\n  helper,\n  disabled\n}) => {\n  return `\n        <cv-select\n            label="${style}"\n            validationMessage="This Field is Required"\n            ${style}\n            ${icon ? `icon="${icon}"` : null}\n            ${helper ? `helper="${helper}"` : null}\n            ${required ? `required` : null}\n            ${disabled ? `disabled` : null}>\n            <cv-list-item selected></cv-list-item>\n            <cv-list-item ${icon ? `graphic="icon"` : null} value="0">Item 0</cv-list-item>\n            <cv-list-item ${icon ? `graphic="icon"` : null} value="1">Item 1</cv-list-item>\n            <cv-list-item ${icon ? `graphic="icon"` : null} value="2">Item 2</cv-list-item>\n            <cv-list-item ${icon ? `graphic="icon"` : null} value="3">Item 3</cv-list-item>\n        </cv-select>`;\n}',...(v=(u=r.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var p,h,$;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:'({\n  icon,\n  style,\n  required,\n  helper,\n  disabled\n}) => {\n  return `\n        <cv-select\n            label="${style}"\n            validationMessage="This Field is Required"\n            ${style}\n            ${icon ? `icon="${icon}"` : null}\n            ${helper ? `helper="${helper}"` : null}\n            ${required ? `required` : null}\n            ${disabled ? `disabled` : null}>\n            <cv-list-item selected></cv-list-item>\n            <cv-list-item ${icon ? `graphic="icon"` : null} value="0">Item 0</cv-list-item>\n            <cv-list-item ${icon ? `graphic="icon"` : null} value="1">Item 1</cv-list-item>\n            <cv-list-item ${icon ? `graphic="icon"` : null} value="2">Item 2</cv-list-item>\n            <cv-list-item ${icon ? `graphic="icon"` : null} value="3">Item 3</cv-list-item>\n        </cv-select>`;\n}',...($=(h=t.parameters)==null?void 0:h.docs)==null?void 0:$.source}}};var g,y,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:'({\n  icon,\n  style,\n  required,\n  helper,\n  disabled\n}) => {\n  return `\n        <cv-select\n            label="${style}"\n            validationMessage="This Field is Required"\n            ${style}\n            ${icon ? `icon="${icon}"` : null}\n            ${helper ? `helper="${helper}"` : null}\n            ${required ? `required` : null}\n            ${disabled ? `disabled` : null}>\n            <cv-list-item selected></cv-list-item>\n            <cv-list-item ${icon ? `graphic="icon"` : null} value="0">Item 0</cv-list-item>\n            <cv-list-item ${icon ? `graphic="icon"` : null} value="1">Item 1</cv-list-item>\n            <cv-list-item ${icon ? `graphic="icon"` : null} value="2">Item 2</cv-list-item>\n            <cv-list-item ${icon ? `graphic="icon"` : null} value="3">Item 3</cv-list-item>\n        </cv-select>`;\n}',...(b=(y=n.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var q,I,x;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:'({\n  icon,\n  style,\n  required,\n  helper,\n  disabled\n}) => {\n  return `\n        <cv-select\n            label="${style}"\n            validationMessage="This Field is Required"\n            ${style}\n            ${icon ? `icon="${icon}"` : null}\n            ${helper ? `helper="${helper}"` : null}\n            ${required ? `required` : null}\n            ${disabled ? `disabled` : null}>\n            <cv-list-item selected></cv-list-item>\n            <cv-list-item ${icon ? `graphic="icon"` : null} value="0">Item 0</cv-list-item>\n            <cv-list-item ${icon ? `graphic="icon"` : null} value="1">Item 1</cv-list-item>\n            <cv-list-item ${icon ? `graphic="icon"` : null} value="2">Item 2</cv-list-item>\n            <cv-list-item ${icon ? `graphic="icon"` : null} value="3">Item 3</cv-list-item>\n        </cv-select>`;\n}',...(x=(I=c.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var M,w,R;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`({
  icon,
  style,
  required,
  helper,
  disabled
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
            \${required ? \`required\` : null}
            \${disabled ? \`disabled\` : null}>
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
}`,...(R=(w=s.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};const Z=["Basic","Required","Icon","HelperText","twoLine"];export{r as Basic,c as HelperText,n as Icon,t as Required,Z as __namedExportsOrder,Y as default,s as twoLine};
