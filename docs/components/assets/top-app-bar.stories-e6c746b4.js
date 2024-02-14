import{i as u,r as v,e as d}from"./query-assigned-elements-9f88bee1.js";import{T as f}from"./mwc-top-app-bar-base-b0b432c1.js";import{s as B,b as h}from"./top-app-bar-fixed-7d30e1f3.js";import"./icon-button-d4aa61be.js";import"./button-84697cef.js";import{l as m}from"./lorem-ipsum.content-89678e1d.js";import{t as I}from"./table.content-6c0ad423.js";import{t as w}from"./table-row-selection.content-2dc6f2e9.js";/* empty css                           */import"./tslib.es6-4b90b051.js";import"./property-f36ea729.js";import"./base-element-cae00a28.js";import"./utils-529e1a6d.js";import"./query-3e91a3b8.js";import"./class-map-018c3a6a.js";import"./ripple-handlers-20d146be.js";import"./state-2a0073ff.js";import"./style-map-4c420736.js";import"./aria-property-3dc182ec.js";import"./event-options-b5830ec0.js";import"./if-defined-c3862b86.js";import"./mwc-icon-6ece1001.js";var _=Object.defineProperty,$=Object.getOwnPropertyDescriptor,x=(r,n,i,e)=>{for(var t=e>1?void 0:e?$(n,i):n,s=r.length-1,o;s>=0;s--)(o=r[s])&&(t=(e?o(n,i,t):o(t))||t);return e&&t&&_(n,i,t),t};let p=class extends f{};p.styles=[B,u`
      ${v(h)}
    `];p=x([d("cv-top-app-bar")],p);const A=`
        <cv-icon-button icon="filter_list" slot="actionItems"></cv-icon-button>
        <cv-icon-button icon="search" slot="actionItems"></cv-icon-button>
        <cv-icon-button icon="add" slot="actionItems"></cv-icon-button>`,C=`<cv-button label="Buttons" slot="actionItems" ></cv-button>
    <cv-button outlined label="Buttons" slot="actionItems" ></cv-button>`,l=({title:r="App Bar Title",centerTitle:n,dense:i,prominent:e,showContent:t,showActionItems:s}={},{parameters:o}={})=>{const a=o!=null&&o.fixed?"cv-top-app-bar-fixed":"cv-top-app-bar",b=s==="buttons"?C:A;let c=m;switch(t){case"table":c=`<div style="flex-grow: inherit;>${I}</div>`;break;case"tableWithSelection":c=`<div style="flex-grow: inherit;>${w}</div>`;break;case"loremIpsum":default:c=m}return`
      <${a}
          ${n?"centerTitle":null}
          ${i?"dense":null}
          ${e?"prominent":null}>
        <cv-icon-button slot="navigationIcon" icon="menu_open"></cv-icon-button>
        <div slot="title">${r}</div>
        ${b}
       </${a}>
       ${c}
       `},Y={title:"Components/Top App Bar",argTypes:{showContent:{options:["table","tableWithSelection","loremIpsum"],control:{type:"radio"}},showActionItems:{options:["buttons","icons"],control:{type:"radio"}}},args:{centerTitle:!1,dense:!1,prominent:!1,showContent:"table",showActionItems:"icons"},parameters:{layout:"fullscreen"}},y=l.bind({});y.args={};const T=l.bind({});T.args={showActionItems:"buttons"};const g=l.bind({});g.parameters={fixed:!0};const Z=["Basic","BasicWithButtons","Fixed"];export{y as Basic,T as BasicWithButtons,g as Fixed,Z as __namedExportsOrder,Y as default};
