import{s as Z,M as ee}from"./select-DnX2CG2T.js";import{r as re,i as te,e as oe}from"./query-assigned-elements-BJdb4KNY.js";import"./button-_PqhMK-p.js";import"./list-item-EZYiye02.js";import"./if-defined-dAx6j6jI.js";import"./class-map-LmxYoNzI.js";import"./directive-CvdRHFdJ.js";import"./tslib.es6-X4n3o5C8.js";import"./mwc-line-ripple-directive-DW7x_YQk.js";import"./base-element-BG6oFIG9.js";import"./utils-sZhlDiu_.js";import"./query-pFbEai1B.js";import"./observer-D8jHVEI7.js";import"./state-CGn7W7VL.js";import"./style-map-CNNK6hz8.js";import"./mwc-icon-ClXlKBjv.js";import"./form-element-XdRIvKOk.js";import"./event-options-CZVCfsC0.js";import"./ripple-handlers-_TDZG32v.js";import"./aria-property-BYXgNswj.js";import"./query-assigned-nodes-BxERp_Ow.js";const se=":host{--mdc-menu-item-height: calc(48px + var(--cv-density-mode, 0) * var(--cv-density-interval, 4px))}mwc-menu-surface{--mdc-theme-surface: var(--cv-theme-surface-container)}";var ne=Object.getOwnPropertyDescriptor,ae=(s,c,n,e)=>{for(var a=e>1?void 0:e?ne(c,n):c,t=s.length-1,r;t>=0;t--)(r=s[t])&&(a=r(a)||a);return a};let y=class extends ee{};y.styles=[Z,te`
      ${re(se)}
    `];y=ae([oe("cv-menu")],y);const Be={title:"Components/Menu",component:"cv-menu",parameters:{layout:"padded"},args:{open:!1,anchor:"",corner:"BOTTOM_START",menuCorner:"",x:0,y:0,defaultFocus:"NONE",innerAriaLabel:"",innerRole:"menu",quick:!1,absolute:!1,fixed:!0,forceGroupSelection:!1,fullwidth:!1,stayOpenOnBodyClick:!1,wrapFocus:!1,multi:!1,activatable:!0},argTypes:{corner:{options:["TOP_START","TOP_END","BOTTOM_START","BOTTOM_END"],control:{type:"select"}},defaultFocus:{options:["NONE","LIST_ROOT","FIRST_ITEM","LAST_ITEM"],control:{type:"select"}},x:{control:{type:"number"}},y:{control:{type:"number"}},absolute:{control:{type:"boolean"}}},tags:["autodocs"]},o=s=>{document.addEventListener("DOMContentLoaded",()=>{window.basicMenu.anchor=window.basicButton,window.basicButton.addEventListener("click",function(){window.basicMenu.open=!window.basicMenu.open})});const{disabledItem:c,...n}=s;let e="";for(const[t,r]of Object.entries(n))typeof r=="boolean"?r&&(e+=`${t} `):e+=`${t}="${r}" `;return`
    <cv-button id="basicButton" raised label="Open menu"></cv-button>
    <cv-menu 
      id="basicMenu"
      ${e}
      >
      <cv-list-item>one</cv-list-item>
      <cv-list-item>two</cv-list-item>
      <cv-list-item>three</cv-list-item>
      <cv-list-item ${c?"disabled":""}><div>four</div></cv-list-item>
    </cv-menu>
  `},ce=s=>{const{disabledItem:c,...n}=s;let e="";for(const[t,r]of Object.entries(n))typeof r=="boolean"?r&&(e+=`${t} `):e+=`${t}="${r}" `;return`
    <cv-button id="basicButton" raised label="Open menu"></cv-button>
    <cv-menu id="basicMenu" ${e}>
      
    <cv-list-item graphic="icon">Create<cv-icon slot="graphic">add</cv-icon></cv-list-item>
    <cv-list-item graphic="icon">Upload<cv-icon slot="graphic">upload</cv-icon></cv-list-item>
    <cv-list-item graphic="icon">Save<cv-icon slot="graphic">save</cv-icon></cv-list-item>
    <cv-list-item graphic="icon">Download<cv-icon slot="graphic">download</cv-icon></cv-list-item>
    <cv-list-item graphic="icon">Delete<cv-icon slot="graphic">delete</cv-icon></cv-list-item>
  
    </cv-menu>
  `},ie=s=>{const{disabledItem:c,...n}=s;let e="";for(const[t,r]of Object.entries(n))typeof r=="boolean"?r&&(e+=`${t} `):e+=`${t}="${r}" `;return`
    <cv-button id="basicButton" raised label="Open menu"></cv-button>
    <cv-menu id="basicMenu" ${e}>
      
    <cv-list-item graphic="avatar" twoline>
      John Doe
      <div slot="secondary">john.doe@teradata.com</div>
      <div slot="graphic">
        <cv-icon>person</cv-icon>
      </div>
    </cv-list-item>

    <cv-list-item graphic="icon">
      Switch to dark mode
      <div slot="graphic">
        <cv-icon>brightness_4</cv-icon>
      </div>
    </cv-list-item>

    <cv-list-item graphic="icon">
      Sign out
    </cv-list-item>
  
    </cv-menu>
  `},i={render:o,args:{open:!1,multi:!1,activatable:!1}},l={render:ce,args:{open:!0}},m={render:o,args:{open:!0,disabledItem:!0},argTypes:{disabledItem:{control:{type:"boolean"}}}},u={render:o,args:{open:!0,multi:!0}},d={render:ie,args:{open:!0}},p={render:o,args:{absolute:!0,x:100,y:100}},v={render:o,args:{quick:!0}},g={render:o,args:{fullwidth:!0}},b={render:o,args:{stayOpenOnBodyClick:!0}},f={render:o,args:{corner:"TOP_END"}},T={render:o,args:{defaultFocus:"LAST_ITEM"}};var O,h,S;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: Template,
  args: {
    open: false,
    multi: false,
    activatable: false
  }
}`,...(S=(h=i.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var w,M,I;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: UseIconsRender,
  args: {
    open: true
  }
}`,...(I=(M=l.parameters)==null?void 0:M.docs)==null?void 0:I.source}}};var _,$,C;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: Template,
  args: {
    open: true,
    disabledItem: true
  },
  argTypes: {
    disabledItem: {
      control: {
        type: 'boolean'
      }
    }
  }
}`,...(C=($=m.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};var k,B,E;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: Template,
  args: {
    open: true,
    multi: true
  }
}`,...(E=(B=u.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var D,P,x;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: CustomizationRender,
  args: {
    open: true
  }
}`,...(x=(P=d.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};var A,R,F;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: Template,
  args: {
    absolute: true,
    x: 100,
    y: 100
  }
}`,...(F=(R=p.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var L,N,j;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: Template,
  args: {
    quick: true
  }
}`,...(j=(N=v.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var q,U,z;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: Template,
  args: {
    fullwidth: true
  }
}`,...(z=(U=g.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var H,G,J;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: Template,
  args: {
    stayOpenOnBodyClick: true
  }
}`,...(J=(G=b.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,V;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: Template,
  args: {
    corner: 'TOP_END'
  }
}`,...(V=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var W,X,Y;T.parameters={...T.parameters,docs:{...(W=T.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: Template,
  args: {
    defaultFocus: 'LAST_ITEM'
  }
}`,...(Y=(X=T.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const Ee=["Main","UseIcons","DisabledItems","MultiSelect","Customization","absolute","quickOpen","fullwidth","stayOpenOnBodyClick","corner","defaultFocus"];export{d as Customization,m as DisabledItems,i as Main,u as MultiSelect,l as UseIcons,Ee as __namedExportsOrder,p as absolute,f as corner,Be as default,T as defaultFocus,g as fullwidth,v as quickOpen,b as stayOpenOnBodyClick};
