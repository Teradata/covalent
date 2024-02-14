import{i as L,r as w,e as O}from"./query-assigned-elements-9f88bee1.js";import{n as _}from"./property-f36ea729.js";import{s as E,C as q}from"./dialog-c246c46c.js";import"./button-84697cef.js";import{Active as C}from"./status-header.stories-3aaf8240.js";import{t as x}from"./table-row-selection.content-2dc6f2e9.js";/* empty css                           */import"./tslib.es6-4b90b051.js";import"./inert.esm-a76031cb.js";import"./base-element-cae00a28.js";import"./utils-529e1a6d.js";import"./observer-1f401936.js";import"./query-3e91a3b8.js";import"./class-map-018c3a6a.js";import"./mwc-icon-6ece1001.js";import"./ripple-handlers-20d146be.js";import"./state-2a0073ff.js";import"./style-map-4c420736.js";import"./aria-property-3dc182ec.js";import"./event-options-b5830ec0.js";import"./if-defined-c3862b86.js";import"./icon-dab2e138.js";import"./circular-progress-33ef1f71.js";const D=`:host{--cv-side-sheet-width: 800px;--mdc-dialog-heading-ink-color: var(--mdc-theme-text-primary-on-background)}.mdc-dialog{justify-content:flex-end}.mdc-dialog .mdc-dialog__surface{border-radius:0;height:100%;min-height:inherit;max-height:inherit;min-width:var(--cv-side-sheet-width, 400px)}.mdc-dialog--opening .mdc-dialog__container{transform:translate(100%);transition:transform .15s cubic-bezier(.4,0,1,1)}.mdc-dialog--open .mdc-dialog__container{transform:translate(0)}.mdc-dialog--closing .mdc-dialog__container{opacity:1;transform:translate(100%);transition:transform .15s cubic-bezier(0,0,.2,1)}:host([pushed]) .mdc-dialog__surface{min-width:100vw}:host([noPadding]) .mdc-dialog .mdc-dialog__content{padding:0}
`;var P=Object.defineProperty,T=Object.getOwnPropertyDescriptor,h=(e,t,s,n)=>{for(var o=n>1?void 0:n?T(t,s):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(o=(n?l(t,s,o):l(o))||o);return n&&o&&P(t,s,o),o};let d=class extends q{constructor(){super(),this.pushed=!1,this.noPadding=!1,this.hideActions=!0}};d.styles=[E,L`
      ${w(D)}
    `];h([_({type:Boolean,reflect:!0})],d.prototype,"pushed",2);h([_({type:Boolean,reflect:!0})],d.prototype,"noPadding",2);d=h([O("cv-side-sheet")],d);const te={title:"Components/Side sheet",argTypes:{onClick:{action:"clicked"}},parameters:{actions:{handles:["click cv-button"]}}},i=()=>(document.addEventListener("DOMContentLoaded",()=>{var t;const e=document.querySelector("cv-side-sheet");(t=document.querySelector("cv-button"))==null||t.addEventListener("click",()=>e!=null&&e.open?e.close():e==null?void 0:e.show())},{once:!0}),`
        <cv-button raised>Open side sheet</cv-button>
        <cv-side-sheet heading="Sample side sheet">
        </cv-side-sheet>
    `),r=()=>(document.addEventListener("DOMContentLoaded",()=>{var s,n;const e=document.querySelector("#parentSideSheet"),t=document.querySelector("#childSideSheet");(s=document.querySelector("#parentTarget"))==null||s.addEventListener("click",()=>e!=null&&e.open?e.close():e==null?void 0:e.show()),(n=document.querySelector("#childTarget"))==null||n.addEventListener("click",()=>t!=null&&t.open?t.close():t==null?void 0:t.show())},{once:!0}),`
        <cv-button id="parentTarget" raised>Open side sheet</cv-button>
        <cv-side-sheet id="parentSideSheet" heading="Sample side sheet">
            <cv-button id="childTarget" raised>Open child</cv-button>
        </cv-side-sheet>
        <cv-side-sheet id="childSideSheet" heading="Child side sheet" >
        </cv-side-sheet>
    `),c=()=>(document.addEventListener("DOMContentLoaded",()=>{var t;const e=document.querySelector("cv-side-sheet");console.log(e),(t=document.querySelector("cv-button"))==null||t.addEventListener("click",()=>e!=null&&e.open?e.close():e==null?void 0:e.show())},{once:!0}),`
        <style>
            cv-side-sheet {
                --cv-side-sheet-width: 800px;
            }
        </style>
        <cv-button raised>Open side sheet</cv-button>
        <cv-side-sheet noPadding>
          ${C({state:"active",title:"Example status from a side sheet"})}
          ${x}
        </cv-side-sheet>
    `);var u,m,p;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  document.addEventListener('DOMContentLoaded', () => {
    const sideSheet = document.querySelector('cv-side-sheet');
    document.querySelector('cv-button')?.addEventListener('click', () => sideSheet?.open ? sideSheet.close() : sideSheet?.show());
  }, {
    once: true
  });
  return \`
        <cv-button raised>Open side sheet</cv-button>
        <cv-side-sheet heading="Sample side sheet">
        </cv-side-sheet>
    \`;
}`,...(p=(m=i.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var v,S,g;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
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
        <cv-side-sheet id="parentSideSheet" heading="Sample side sheet">
            <cv-button id="childTarget" raised>Open child</cv-button>
        </cv-side-sheet>
        <cv-side-sheet id="childSideSheet" heading="Child side sheet" >
        </cv-side-sheet>
    \`;
}`,...(g=(S=r.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var b,y,f;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  document.addEventListener('DOMContentLoaded', () => {
    const sideSheet = document.querySelector('cv-side-sheet');
    console.log(sideSheet);
    document.querySelector('cv-button')?.addEventListener('click', () => sideSheet?.open ? sideSheet.close() : sideSheet?.show());
  }, {
    once: true
  });
  return \`
        <style>
            cv-side-sheet {
                --cv-side-sheet-width: 800px;
            }
        </style>
        <cv-button raised>Open side sheet</cv-button>
        <cv-side-sheet noPadding>
          \${ActiveStatusHeader({
    state: 'active',
    title: 'Example status from a side sheet'
  })}
          \${tableRowSelectionContent}
        </cv-side-sheet>
    \`;
}`,...(f=(y=c.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const ne=["Basic","Multiple","StatusHeader"];export{i as Basic,r as Multiple,c as StatusHeader,ne as __namedExportsOrder,te as default};
