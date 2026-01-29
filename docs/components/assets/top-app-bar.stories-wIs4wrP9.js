import{r as b,i as v,e as d}from"./query-assigned-elements-BJdb4KNY.js";import{T as f}from"./mwc-top-app-bar-base-C3czOyFE.js";import{s as B,b as h}from"./top-app-bar-fixed-BO2dhX4H.js";import"./icon-button-DIHzEZC4.js";import"./button-BEli9AVj.js";import{l as m}from"./lorem-ipsum.content-ttJlmQjQ.js";import{t as I}from"./table.content-DXiXegTF.js";import{t as w}from"./table-row-selection.content-tSLjFSBa.js";/* empty css                           */import"./tslib.es6-C-hQhb2A.js";import"./base-element-C3CkHPn4.js";import"./utils-DQt7ZoY7.js";import"./query-pFbEai1B.js";import"./class-map-LmxYoNzI.js";import"./directive-CvdRHFdJ.js";import"./ripple-handlers-CLC5WHP1.js";import"./state-CGn7W7VL.js";import"./style-map-CNNK6hz8.js";import"./aria-property-BYXgNswj.js";import"./event-options-CZVCfsC0.js";import"./if-defined-dAx6j6jI.js";import"./mwc-icon-button.css-DLV-hkFx.js";import"./mwc-icon-BGUO1vKj.js";var $=Object.getOwnPropertyDescriptor,x=(e,i,c,s)=>{for(var t=s>1?void 0:s?$(i,c):i,n=e.length-1,o;n>=0;n--)(o=e[n])&&(t=o(t)||t);return t};let p=class extends f{};p.styles=[B,v`
      ${b(h)}
    `];p=x([d("cv-top-app-bar")],p);const y=`
        <cv-icon-button icon="filter_list" slot="actionItems"></cv-icon-button>
        <cv-icon-button icon="search" slot="actionItems"></cv-icon-button>
        <cv-icon-button icon="add" slot="actionItems"></cv-icon-button>`,A=`<cv-button label="Buttons" slot="actionItems" ></cv-button>
    <cv-button outlined label="Buttons" slot="actionItems" ></cv-button>`,a=({title:e="App Bar Title",centerTitle:i,dense:c,prominent:s,showContent:t,showActionItems:n}={},{parameters:o}={})=>{const l=o!=null&&o.fixed?"cv-top-app-bar-fixed":"cv-top-app-bar",u=n==="buttons"?A:y;let r=m;switch(t){case"table":r=`<div style="flex-grow: inherit;>${I}</div>`;break;case"tableWithSelection":r=`<div style="flex-grow: inherit;>${w}</div>`;break;case"loremIpsum":default:r=m}return`
      <${l}
          ${i?"centerTitle":null}
          ${c?"dense":null}
          ${s?"prominent":null}>
        <cv-icon-button slot="navigationIcon" icon="menu_open"></cv-icon-button>
        <div slot="title">${e}</div>
        ${u}
       </${l}>
       ${r}
       `},X={title:"Components/Top App Bar",argTypes:{showContent:{options:["table","tableWithSelection","loremIpsum"],control:{type:"radio"}},showActionItems:{options:["buttons","icons"],control:{type:"radio"}}},args:{centerTitle:!1,dense:!1,prominent:!1,showContent:"table",showActionItems:"icons"},parameters:{layout:"fullscreen"}},C=a.bind({});C.args={};const g=a.bind({});g.args={showActionItems:"buttons"};const _=a.bind({});_.parameters={fixed:!0};const Y=["Basic","BasicWithButtons","Fixed"];export{C as Basic,g as BasicWithButtons,_ as Fixed,Y as __namedExportsOrder,X as default};
