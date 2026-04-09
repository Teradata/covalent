import"./icon-radio-toggle-D8LHDdGE.js";import"./icon-1XQe7S_h.js";import"./query-assigned-elements-BJdb4KNY.js";import"./mwc-radio.css-BkadBfay.js";import"./tslib.es6-X4n3o5C8.js";import"./ripple-handlers-_TDZG32v.js";import"./base-element-BG6oFIG9.js";import"./utils-sZhlDiu_.js";import"./state-CGn7W7VL.js";import"./query-pFbEai1B.js";import"./class-map-LmxYoNzI.js";import"./directive-CvdRHFdJ.js";import"./style-map-CNNK6hz8.js";import"./aria-property-BYXgNswj.js";import"./form-element-XdRIvKOk.js";import"./observer-D8jHVEI7.js";import"./event-options-CZVCfsC0.js";import"./if-defined-dAx6j6jI.js";import"./mwc-icon-ClXlKBjv.js";const H={title:"Components/Icon Radio",args:{iconOnly:!1,checked:!1,disabled:!1,value:"",name:""},tags:["autodocs"]},t={render:({iconOnly:i,checked:e,disabled:S,value:c,name:s})=>{const d=[i?"iconOnly":"",e?"checked":"",S?"disabled":"",c?`value="${c}"`:"",s?`name="${s}"`:""].filter(Boolean).join(" ");return`
      <cv-radio-icon ${d}>
        <cv-icon slot="icon">work</cv-icon>
        <div slot="text">Balanced</div>
        <div slot="text">Every week</div>
      </cv-radio-icon>
      <cv-radio-icon ${d}>
        <cv-icon slot="icon">work</cv-icon>
        <div slot="text">Balanced</div>
        <div slot="text">Every week</div>
      </cv-radio-icon>
  `}},r={render:t.render,args:{checked:!1}},o={render:t.render,args:{checked:!0}},n={render:t.render,args:{checked:!1,disabled:!0}},a={render:()=>`
    <div id="text-radio-demo">
      <cv-radio-icon>
        <div slot="text">Basic</div>
        <div slot="text">
          <cv-typography scale="body2">Best for simple, consistently formatted documents.</cv-typography>
          <cv-typography scale="caption" style="margin-top: 16px;">May split mid-sentence or lose structure in complex formats.</cv-typography>
        </div>
      </cv-radio-icon>
      <cv-radio-icon>
        <div slot="text">SherpaLLM</div>
        <div slot="text">
          <cv-typography scale="body2">Best for structured, formatted, PDF documents.</cv-typography>
          <cv-typography scale="caption" style="margin-top: 16px;">May struggle with irregular formatting or images.</cv-typography>
        </div>
      </cv-radio-icon>
      <cv-radio-icon>
        <div slot="text">Vector-Distance</div>
        <div slot="text">
          <cv-typography scale="body2">Best for high-dimensional, large-scale datasets where fast nearest-neighbor search is required</cv-typography>
        </div>
      </cv-radio-icon>
    </div>
  `,play:async({canvasElement:i})=>{const e=i.querySelector("#text-radio-demo");e&&(e.style.setProperty("--cv-icon-radio-horizontal-alignment","start"),e.style.setProperty("--cv-icon-radio-vertical-alignment","start"),e.style.setProperty("--cv-icon-radio-text-alignment","left"),e.style.setProperty("--cv-icon-radio-height","120px"))}};var l,p,v;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: ({
    iconOnly,
    checked,
    disabled,
    value,
    name
  }) => {
    const attrs = [iconOnly ? 'iconOnly' : '', checked ? 'checked' : '', disabled ? 'disabled' : '', value ? \`value="\${value}"\` : '', name ? \`name="\${name}"\` : ''].filter(Boolean).join(' ');
    return \`
      <cv-radio-icon \${attrs}>
        <cv-icon slot="icon">work</cv-icon>
        <div slot="text">Balanced</div>
        <div slot="text">Every week</div>
      </cv-radio-icon>
      <cv-radio-icon \${attrs}>
        <cv-icon slot="icon">work</cv-icon>
        <div slot="text">Balanced</div>
        <div slot="text">Every week</div>
      </cv-radio-icon>
  \`;
  }
}`,...(v=(p=t.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var m,y,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: Template.render,
  args: {
    checked: false
  }
}`,...(g=(y=r.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var h,u,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: Template.render,
  args: {
    checked: true
  }
}`,...(x=(u=o.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var f,k,b;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: Template.render,
  args: {
    checked: false,
    disabled: true
  }
}`,...(b=(k=n.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var B,w,P;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => \`
    <div id="text-radio-demo">
      <cv-radio-icon>
        <div slot="text">Basic</div>
        <div slot="text">
          <cv-typography scale="body2">Best for simple, consistently formatted documents.</cv-typography>
          <cv-typography scale="caption" style="margin-top: 16px;">May split mid-sentence or lose structure in complex formats.</cv-typography>
        </div>
      </cv-radio-icon>
      <cv-radio-icon>
        <div slot="text">SherpaLLM</div>
        <div slot="text">
          <cv-typography scale="body2">Best for structured, formatted, PDF documents.</cv-typography>
          <cv-typography scale="caption" style="margin-top: 16px;">May struggle with irregular formatting or images.</cv-typography>
        </div>
      </cv-radio-icon>
      <cv-radio-icon>
        <div slot="text">Vector-Distance</div>
        <div slot="text">
          <cv-typography scale="body2">Best for high-dimensional, large-scale datasets where fast nearest-neighbor search is required</cv-typography>
        </div>
      </cv-radio-icon>
    </div>
  \`,
  play: async ({
    canvasElement
  }) => {
    const root = canvasElement.querySelector('#text-radio-demo');
    if (!root) return;
    root.style.setProperty('--cv-icon-radio-horizontal-alignment', 'start');
    root.style.setProperty('--cv-icon-radio-vertical-alignment', 'start');
    root.style.setProperty('--cv-icon-radio-text-alignment', 'left');
    root.style.setProperty('--cv-icon-radio-height', '120px');
  }
}`,...(P=(w=a.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};const J=["Template","Unchecked","Checked","Disabled","TextOnly"];export{o as Checked,n as Disabled,t as Template,a as TextOnly,r as Unchecked,J as __namedExportsOrder,H as default};
