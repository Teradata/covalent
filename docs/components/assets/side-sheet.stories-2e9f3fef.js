import{i as f,r as E,e as q}from"./query-assigned-elements-9f88bee1.js";import{n as O}from"./property-f36ea729.js";import{s as C,C as w}from"./dialog-b47f876c.js";import{b as D}from"./side-sheet-2471e78a.js";import"./button-47b88b40.js";import{Active as T}from"./status-header.stories-7708f4a8.js";import{t as _}from"./table-row-selection.content-2dc6f2e9.js";/* empty css                           */import"./tslib.es6-6921e62d.js";import"./inert.esm-a76031cb.js";import"./base-element-cae00a28.js";import"./utils-529e1a6d.js";import"./observer-1f401936.js";import"./query-3e91a3b8.js";import"./class-map-4e4d6bc9.js";import"./directive-12249aa5.js";import"./mwc-icon-4afc0ea5.js";import"./ripple-handlers-4e438af8.js";import"./state-2a0073ff.js";import"./style-map-ec903154.js";import"./aria-property-3dc182ec.js";import"./event-options-b5830ec0.js";import"./if-defined-c3862b86.js";import"./icon-33ce3398.js";import"./circular-progress-f6678e00.js";var M=Object.defineProperty,P=Object.getOwnPropertyDescriptor,l=(e,t,o,n)=>{for(var s=n>1?void 0:n?P(t,o):t,a=e.length-1,u;a>=0;a--)(u=e[a])&&(s=(n?u(t,o,s):u(s))||s);return n&&s&&M(t,o,s),s};let r=class extends w{constructor(){super(),this.pushed=!1,this.noPadding=!1,this.hideActions=!0}};r.styles=[C,f`
      ${E(D)}
    `];l([O({type:Boolean,reflect:!0})],r.prototype,"pushed",2);l([O({type:Boolean,reflect:!0})],r.prototype,"noPadding",2);r=l([q("cv-side-sheet")],r);const se={title:"Components/Side sheet",argTypes:{onClick:{action:"clicked"}},parameters:{actions:{handles:["click cv-button"]}}},c=()=>(document.addEventListener("DOMContentLoaded",()=>{var t;const e=document.querySelector("cv-side-sheet");(t=document.querySelector("cv-button"))==null||t.addEventListener("click",()=>e!=null&&e.open?e.close():e==null?void 0:e.show())},{once:!0}),`
        <cv-button raised>Open side sheet</cv-button>
        <cv-side-sheet heading="Sample side sheet">
        </cv-side-sheet>
    `),d=()=>(document.addEventListener("DOMContentLoaded",()=>{var o,n;const e=document.querySelector("#parentSideSheet"),t=document.querySelector("#childSideSheet");(o=document.querySelector("#parentTarget"))==null||o.addEventListener("click",()=>e!=null&&e.open?e.close():e==null?void 0:e.show()),(n=document.querySelector("#childTarget"))==null||n.addEventListener("click",()=>t!=null&&t.open?t.close():t==null?void 0:t.show())},{once:!0}),`
        <cv-button id="parentTarget" raised>Open side sheet</cv-button>
        <cv-side-sheet id="parentSideSheet" heading="Sample side sheet">
            <cv-button id="childTarget" raised>Open child</cv-button>
        </cv-side-sheet>
        <cv-side-sheet id="childSideSheet" heading="Child side sheet" >
        </cv-side-sheet>
    `),i=()=>(document.addEventListener("DOMContentLoaded",()=>{var t;const e=document.querySelector("cv-side-sheet");console.log(e),(t=document.querySelector("cv-button"))==null||t.addEventListener("click",()=>e!=null&&e.open?e.close():e==null?void 0:e.show())},{once:!0}),`
        <style>
            cv-side-sheet {
                --cv-side-sheet-width: 800px;
            }
        </style>
        <cv-button raised>Open side sheet</cv-button>
        <cv-side-sheet noPadding>
          ${T({state:"active",title:"Example status from a side sheet"})}
          ${_}
        </cv-side-sheet>
    `);var h,p,m;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
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
}`,...(m=(p=c.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var v,S,y;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
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
}`,...(y=(S=d.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var b,g,L;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
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
}`,...(L=(g=i.parameters)==null?void 0:g.docs)==null?void 0:L.source}}};const oe=["Basic","Multiple","StatusHeader"];export{c as Basic,d as Multiple,i as StatusHeader,oe as __namedExportsOrder,se as default};
