import"./icon-radio-toggle--YQCqUgw.js";import"./icon-BYm93zaG.js";import"./query-assigned-elements-BJdb4KNY.js";import"./mwc-radio.css-CqRL5et0.js";import"./tslib.es6-BHOXe2z4.js";import"./ripple-handlers-CbzjdAP9.js";import"./base-element-C3CkHPn4.js";import"./utils-DQt7ZoY7.js";import"./state-CGn7W7VL.js";import"./query-pFbEai1B.js";import"./class-map-LmxYoNzI.js";import"./directive-CvdRHFdJ.js";import"./style-map-CNNK6hz8.js";import"./aria-property-BYXgNswj.js";import"./form-element-BQMFi4zf.js";import"./observer-D8jHVEI7.js";import"./event-options-CZVCfsC0.js";import"./if-defined-dAx6j6jI.js";import"./mwc-icon-BZDiTMPV.js";const Q={title:"Components/Icon Radio",args:{iconOnly:!1,checked:!1,disabled:!1,value:"",name:""},tags:["autodocs"]},r={render:({iconOnly:t,checked:e,disabled:a,value:o,name:i})=>{const n=[t?"iconOnly":"",e?"checked":"",a?"disabled":"",o?`value="${o}"`:"",i?`name="${i}"`:""].filter(Boolean).join(" ");return`
      <cv-radio-icon ${n}>
        <cv-icon slot="icon">work</cv-icon>
        <div slot="text">Balanced</div>
        <div slot="text">Every week</div>
      </cv-radio-icon>
      <cv-radio-icon ${n}>
        <cv-icon slot="icon">work</cv-icon>
        <div slot="text">Balanced</div>
        <div slot="text">Every week</div>
      </cv-radio-icon>
  `}},c={render:r.render,args:{checked:!1}},s={render:r.render,args:{checked:!0}},d={render:r.render,args:{checked:!1,disabled:!0}},l={render:()=>`
    <div id="dynamic-demo" style="display: flex; gap: 20px; flex-direction: column;">
      <cv-radio-icon id="test-card">
        <div slot="text">Short</div>
        <div slot="text">
          This is a description that should get more lines when the title is short. Let's add more text to see how it behaves with the dynamic line clamping. More content here to test the behavior properly
        </div>
      </cv-radio-icon>
      <cv-button id="change-text" label="Toggle Title Length" raised></cv-button>
    </div>
  `,play:async({canvasElement:t})=>{const e=t.querySelector("#dynamic-demo"),a=t.querySelector("#test-card");if(!e||!a)return;e.style.setProperty("--cv-icon-radio-horizontal-alignment","start"),e.style.setProperty("--cv-icon-radio-vertical-alignment","start"),e.style.setProperty("--cv-icon-radio-text-alignment","left"),e.style.setProperty("--cv-icon-radio-height","120px");const o=t.querySelector("#change-text"),i=a.querySelector('[slot="text"]');let n=!0;o==null||o.addEventListener("click",()=>{n?i.textContent="This Is Now A Very Long Title That Spans Two Full Lines":i.textContent="Short",n=!n})}},p={render:()=>`
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
          <cv-typography scale="caption" style="margin-top: 16px;">May struggle with irregular formatting or images.</cv-typography>
        </div>
      </cv-radio-icon>
      <cv-radio-icon>
        <div slot="text">Vector-Distance</div> 
        <div slot="text">
          Best for high-dimensional, large-scale datasets where fast nearest-neighbor search is required, large-scale datasets where search is required
        </div>
      </cv-radio-icon>
    </div>
  `,play:async({canvasElement:t})=>{const e=t.querySelector("#text-radio-demo");e&&(e.style.setProperty("--cv-icon-radio-horizontal-alignment","start"),e.style.setProperty("--cv-icon-radio-vertical-alignment","start"),e.style.setProperty("--cv-icon-radio-text-alignment","left"),e.style.setProperty("--cv-icon-radio-height","120px"))}};var v,y,m;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(m=(y=r.parameters)==null?void 0:y.docs)==null?void 0:m.source}}};var h,g,u;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: Template.render,
  args: {
    checked: false
  }
}`,...(u=(g=c.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var x,f,S;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: Template.render,
  args: {
    checked: true
  }
}`,...(S=(f=s.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var b,w,k;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: Template.render,
  args: {
    checked: false,
    disabled: true
  }
}`,...(k=(w=d.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var T,P,L;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => \`
    <div id="dynamic-demo" style="display: flex; gap: 20px; flex-direction: column;">
      <cv-radio-icon id="test-card">
        <div slot="text">Short</div>
        <div slot="text">
          This is a description that should get more lines when the title is short. Let's add more text to see how it behaves with the dynamic line clamping. More content here to test the behavior properly
        </div>
      </cv-radio-icon>
      <cv-button id="change-text" label="Toggle Title Length" raised></cv-button>
    </div>
  \`,
  play: async ({
    canvasElement
  }) => {
    const root = canvasElement.querySelector('#dynamic-demo');
    const card = canvasElement.querySelector('#test-card');
    if (!root || !card) return;
    root.style.setProperty('--cv-icon-radio-horizontal-alignment', 'start');
    root.style.setProperty('--cv-icon-radio-vertical-alignment', 'start');
    root.style.setProperty('--cv-icon-radio-text-alignment', 'left');
    root.style.setProperty('--cv-icon-radio-height', '120px');
    const button = canvasElement.querySelector('#change-text');
    const titleDiv = card.querySelector('[slot="text"]');
    let isShort = true;
    button?.addEventListener('click', () => {
      if (isShort) {
        titleDiv.textContent = 'This Is Now A Very Long Title That Spans Two Full Lines';
      } else {
        titleDiv.textContent = 'Short';
      }
      isShort = !isShort;
    });
  }
}`,...(L=(P=l.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var q,B,D;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
          <cv-typography scale="caption" style="margin-top: 16px;">May struggle with irregular formatting or images.</cv-typography>
        </div>
      </cv-radio-icon>
      <cv-radio-icon>
        <div slot="text">Vector-Distance</div> 
        <div slot="text">
          Best for high-dimensional, large-scale datasets where fast nearest-neighbor search is required, large-scale datasets where search is required
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
}`,...(D=(B=p.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};const W=["Template","Unchecked","Checked","Disabled","DynamicLineClamp","TextOnly"];export{s as Checked,d as Disabled,l as DynamicLineClamp,r as Template,p as TextOnly,c as Unchecked,W as __namedExportsOrder,Q as default};
