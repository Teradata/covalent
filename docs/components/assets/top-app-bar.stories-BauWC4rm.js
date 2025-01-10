import{i as u,r as v,e as d}from"./query-assigned-elements-DrVEbY-Z.js";import{T as f}from"./mwc-top-app-bar-base-SWMY4Cuu.js";import{s as B,b as h}from"./top-app-bar-fixed-zEYt8x49.js";import"./icon-button-C19p1m3Z.js";import"./button-DL8Q-BuB.js";import{l as m}from"./lorem-ipsum.content-ttJlmQjQ.js";import{t as I}from"./table.content-DXiXegTF.js";import{t as w}from"./table-row-selection.content-tSLjFSBa.js";/* empty css                           */import"./tslib.es6-BHOXe2z4.js";import"./property-jaip2ZBL.js";import"./base-element-DsKKxcfh.js";import"./utils-DQt7ZoY7.js";import"./query-BwR-Wesx.js";import"./class-map-BiVinSLa.js";import"./directive-CvdRHFdJ.js";import"./ripple-handlers-DDpyjNEg.js";import"./state-BvMmCZpn.js";import"./style-map-CYkhWXm1.js";import"./aria-property-BYXgNswj.js";import"./event-options-DUJCy-Gh.js";import"./if-defined-BYt77_e6.js";import"./mwc-icon-button.css-BN1SKsX6.js";import"./mwc-icon-BqP9gbHN.js";var _=Object.defineProperty,$=Object.getOwnPropertyDescriptor,x=(r,n,i,e)=>{for(var t=e>1?void 0:e?$(n,i):n,s=r.length-1,o;s>=0;s--)(o=r[s])&&(t=(e?o(n,i,t):o(t))||t);return e&&t&&_(n,i,t),t};let p=class extends f{};p.styles=[B,u`
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
       `},k={title:"Components/Top App Bar",argTypes:{showContent:{options:["table","tableWithSelection","loremIpsum"],control:{type:"radio"}},showActionItems:{options:["buttons","icons"],control:{type:"radio"}}},args:{centerTitle:!1,dense:!1,prominent:!1,showContent:"table",showActionItems:"icons"},parameters:{layout:"fullscreen"}},y=l.bind({});y.args={};const T=l.bind({});T.args={showActionItems:"buttons"};const g=l.bind({});g.parameters={fixed:!0};const tt=["Basic","BasicWithButtons","Fixed"];export{y as Basic,T as BasicWithButtons,g as Fixed,tt as __namedExportsOrder,k as default};
