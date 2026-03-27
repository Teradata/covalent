import{r as _,i as L,n as u,e as O}from"./query-assigned-elements-BJdb4KNY.js";import{s as E,a as q}from"./dialog-Dv0VeR0n.js";import"./button-_PqhMK-p.js";import{Active as C}from"./status-header.stories-DSVRvCkN.js";import{t as $}from"./table-row-selection.content-tSLjFSBa.js";/* empty css                           */import"./tslib.es6-X4n3o5C8.js";import"./inert.esm-CIOG4SQk.js";import"./base-element-BG6oFIG9.js";import"./utils-sZhlDiu_.js";import"./observer-D8jHVEI7.js";import"./query-pFbEai1B.js";import"./class-map-LmxYoNzI.js";import"./directive-CvdRHFdJ.js";import"./mwc-icon-ClXlKBjv.js";import"./ripple-handlers-_TDZG32v.js";import"./state-CGn7W7VL.js";import"./style-map-CNNK6hz8.js";import"./aria-property-BYXgNswj.js";import"./event-options-CZVCfsC0.js";import"./if-defined-dAx6j6jI.js";import"./icon-1XQe7S_h.js";import"./circular-progress-yvfMitWj.js";const x=":host{--cv-side-sheet-width: 800px;--mdc-dialog-heading-ink-color: var(--mdc-theme-text-primary-on-background);--mdc-theme-surface: var(--cv-theme-surface)}.mdc-dialog{justify-content:flex-end}.mdc-dialog .mdc-dialog__surface{border-radius:0;height:100%;min-height:inherit;max-height:inherit;min-width:var(--cv-side-sheet-width, 400px)}.mdc-dialog--opening .mdc-dialog__container{transform:translate(100%);transition:transform .15s cubic-bezier(.4,0,1,1)}.mdc-dialog--open .mdc-dialog__container{transform:translate(0)}.mdc-dialog--closing .mdc-dialog__container{opacity:1;transform:translate(100%);transition:transform .15s cubic-bezier(0,0,.2,1)}:host([pushed]) .mdc-dialog__surface{min-width:100vw}:host([noPadding]) .mdc-dialog .mdc-dialog__content{padding:0}";var P=Object.defineProperty,D=Object.getOwnPropertyDescriptor,a=(n,e,t,i)=>{for(var o=i>1?void 0:i?D(e,t):e,h=n.length-1,l;h>=0;h--)(l=n[h])&&(o=(i?l(e,t,o):l(o))||o);return i&&o&&P(e,t,o),o};let s=class extends q{constructor(){super(),this.pushed=!1,this.noPadding=!1,this.width=800,this.hideActions=!0}willUpdate(n){super.willUpdate(n),n.has("width")&&(this.width!==800?this.style.setProperty("--cv-side-sheet-width",`${this.width}px`):this.style.removeProperty("--cv-side-sheet-width"))}};s.styles=[E,L`
      ${_(x)}
    `];a([u({type:Boolean,reflect:!0})],s.prototype,"pushed",2);a([u({type:Boolean,reflect:!0})],s.prototype,"noPadding",2);a([u({type:Number})],s.prototype,"width",2);s=a([O("cv-side-sheet")],s);const te={title:"Components/Side sheet",argTypes:{onClick:{action:"clicked"},width:{control:{type:"number"}}},args:{width:800},parameters:{actions:{handles:["click cv-button"]}},tags:["autodocs"]},d=({width:n})=>(document.addEventListener("DOMContentLoaded",()=>{var t;const e=document.querySelector("cv-side-sheet");(t=document.querySelector("cv-button"))==null||t.addEventListener("click",()=>e!=null&&e.open?e.close():e==null?void 0:e.show())},{once:!0}),`
        <cv-button raised>Open side sheet</cv-button>
        <cv-side-sheet heading="Sample side sheet" width="${n}">
        </cv-side-sheet>
    `),r=({width:n})=>(document.addEventListener("DOMContentLoaded",()=>{var i,o;const e=document.querySelector("#parentSideSheet"),t=document.querySelector("#childSideSheet");(i=document.querySelector("#parentTarget"))==null||i.addEventListener("click",()=>e!=null&&e.open?e.close():e==null?void 0:e.show()),(o=document.querySelector("#childTarget"))==null||o.addEventListener("click",()=>t!=null&&t.open?t.close():t==null?void 0:t.show())},{once:!0}),`
        <cv-button id="parentTarget" raised>Open side sheet</cv-button>
        <cv-side-sheet id="parentSideSheet" heading="Sample side sheet" width="${n}">
            <cv-button id="childTarget" raised>Open child</cv-button>
        </cv-side-sheet>
        <cv-side-sheet id="childSideSheet" heading="Child side sheet" width="${n}">
        </cv-side-sheet>
    `),c=({width:n})=>(document.addEventListener("DOMContentLoaded",()=>{var t;const e=document.querySelector("cv-side-sheet");console.log(e),(t=document.querySelector("cv-button"))==null||t.addEventListener("click",()=>e!=null&&e.open?e.close():e==null?void 0:e.show())},{once:!0}),`
        <cv-button raised>Open side sheet</cv-button>
        <cv-side-sheet noPadding width="${n}">
          ${C({state:"active",title:"Example status from a side sheet"})}
          ${$}
        </cv-side-sheet>
    `);var m,p,v;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`({
  width
}) => {
  document.addEventListener('DOMContentLoaded', () => {
    const sideSheet = document.querySelector('cv-side-sheet');
    document.querySelector('cv-button')?.addEventListener('click', () => sideSheet?.open ? sideSheet.close() : sideSheet?.show());
  }, {
    once: true
  });
  return \`
        <cv-button raised>Open side sheet</cv-button>
        <cv-side-sheet heading="Sample side sheet" width="\${width}">
        </cv-side-sheet>
    \`;
}`,...(v=(p=d.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var S,g,w;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`({
  width
}) => {
  document.addEventListener('DOMContentLoaded', () => {
    const sideSheet = document.querySelector('#parentSideSheet');
    const childSideSheet = document.querySelector('#childSideSheet');
    document.querySelector('#parentTarget')?.addEventListener('click', () => sideSheet?.open ? sideSheet.close() : sideSheet?.show());
    document.querySelector('#childTarget')?.addEventListener('click', () => childSideSheet?.open ? childSideSheet.close() : childSideSheet?.show());
  }, {
    once: true
  });
  return \`
        <cv-button id="parentTarget" raised>Open side sheet</cv-button>
        <cv-side-sheet id="parentSideSheet" heading="Sample side sheet" width="\${width}">
            <cv-button id="childTarget" raised>Open child</cv-button>
        </cv-side-sheet>
        <cv-side-sheet id="childSideSheet" heading="Child side sheet" width="\${width}">
        </cv-side-sheet>
    \`;
}`,...(w=(g=r.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var b,y,f;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`({
  width
}) => {
  document.addEventListener('DOMContentLoaded', () => {
    const sideSheet = document.querySelector('cv-side-sheet');
    console.log(sideSheet);
    document.querySelector('cv-button')?.addEventListener('click', () => sideSheet?.open ? sideSheet.close() : sideSheet?.show());
  }, {
    once: true
  });
  return \`
        <cv-button raised>Open side sheet</cv-button>
        <cv-side-sheet noPadding width="\${width}">
          \${ActiveStatusHeader({
    state: 'active',
    title: 'Example status from a side sheet'
  })}
          \${tableRowSelectionContent}
        </cv-side-sheet>
    \`;
}`,...(f=(y=c.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const ne=["Basic","Multiple","StatusHeader"];export{d as Basic,r as Multiple,c as StatusHeader,ne as __namedExportsOrder,te as default};
