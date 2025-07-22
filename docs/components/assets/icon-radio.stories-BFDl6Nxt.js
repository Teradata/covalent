import"./icon-radio-toggle-C5mnHKIh.js";import"./icon-DGxKLRfL.js";import"./query-assigned-elements-TXvH8BPC.js";import"./mwc-radio.css-BGkai51c.js";import"./tslib.es6-C-hQhb2A.js";import"./ripple-handlers-Y4T00Vej.js";import"./base-element-CYNOzLiN.js";import"./utils-DQt7ZoY7.js";import"./property-jaip2ZBL.js";import"./state-C-wh0DpU.js";import"./query-C-WWPLnw.js";import"./class-map-s1sGgw8A.js";import"./directive-CvdRHFdJ.js";import"./style-map-BRLUR99k.js";import"./aria-property-BYXgNswj.js";import"./form-element-DfOpRtaI.js";import"./observer-D8jHVEI7.js";import"./event-options-DSmr0rIs.js";import"./if-defined-BRq_wxIY.js";import"./mwc-icon-BO_vOlXN.js";const M={title:"Components/Icon Radio",args:{iconOnly:!1}},o=({iconOnly:t})=>`
      <cv-radio-icon ${t?"iconOnly":""}>
        <cv-icon slot="icon">work</cv-icon>
        <div slot="text">Balanced</div>
        <div slot="text">Every week</div>
      </cv-radio-icon>
      <cv-radio-icon ${t?"iconOnly":""}>
        <cv-icon slot="icon">work</cv-icon>
        <div slot="text">Balanced</div>
        <div slot="text">Every week</div>
      </cv-radio-icon>
  `,e=()=>(document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("text-radio-demo");t.style.setProperty("--cv-icon-radio-horizontal-alignment","start"),t.style.setProperty("--cv-icon-radio-vertical-alignment","start"),t.style.setProperty("--cv-icon-radio-text-alignment","left"),t.style.setProperty("--cv-icon-radio-height","120px")}),`
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
  `);var i,r,n;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`({
  iconOnly
}) => {
  return \`
      <cv-radio-icon \${iconOnly ? 'iconOnly' : ''}>
        <cv-icon slot="icon">work</cv-icon>
        <div slot="text">Balanced</div>
        <div slot="text">Every week</div>
      </cv-radio-icon>
      <cv-radio-icon \${iconOnly ? 'iconOnly' : ''}>
        <cv-icon slot="icon">work</cv-icon>
        <div slot="text">Balanced</div>
        <div slot="text">Every week</div>
      </cv-radio-icon>
  \`;
}`,...(n=(r=o.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};var a,c,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  document.addEventListener('DOMContentLoaded', () => {
    const textRadioContainer = document.getElementById('text-radio-demo');
    textRadioContainer.style.setProperty('--cv-icon-radio-horizontal-alignment', 'start');
    textRadioContainer.style.setProperty('--cv-icon-radio-vertical-alignment', 'start');
    textRadioContainer.style.setProperty('--cv-icon-radio-text-alignment', 'left');
    textRadioContainer.style.setProperty('--cv-icon-radio-height', '120px');
  });
  return \`
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
  \`;
}`,...(s=(c=e.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};const R=["Template","TextOnly"];export{o as Template,e as TextOnly,R as __namedExportsOrder,M as default};
