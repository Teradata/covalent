import"./icon-lockup-DJXH7FJb.js";import"./circular-progress-yvfMitWj.js";import"./query-assigned-elements-BJdb4KNY.js";import"./state-CGn7W7VL.js";import"./class-map-LmxYoNzI.js";import"./directive-CvdRHFdJ.js";import"./typography-BHFGcuk9.js";import"./icon-1XQe7S_h.js";import"./mwc-icon-ClXlKBjv.js";import"./tslib.es6-X4n3o5C8.js";import"./aria-property-BYXgNswj.js";import"./if-defined-dAx6j6jI.js";import"./style-map-CNNK6hz8.js";const K={title:"Components/Icon lockup",argTypes:{covalentIcon:{control:"boolean"},filledIcon:{control:"boolean"},icon:{control:"text"},trailingIcon:{control:"boolean"},scale:{options:["headline1","headline2","headline3","headline4","headline5","headline6","subtitle1","subtitle2","button","caption","overline","body1","body2"],control:{type:"select"}},state:{options:["primary","positive","negative","caution",null],control:{type:"select"}}},args:{covalentIcon:!1,filledIcon:!1,icon:"houseboat",scale:"body1",state:null,trailingIcon:!1},tags:["autodocs"]},e=i=>{const{icon:l,scale:p,trailingIcon:r,state:d,covalentIcon:_,filledIcon:w}=i;return`<cv-icon-lockup icon="${l}" scale="${p}"${r?" trailingIcon":""}${_?" covalentIcon":""}${w?" filledIcon":""}${d?` state=${d}`:""}>Lorem ipsum dolor sit amet</cv-icon-lockup>`},M=i=>{const{scale:l,trailingIcon:p,state:r}=i;return`<cv-icon-lockup scale="${l}"${p?" trailingIcon":""}${r?` state=${r}`:""}>Lorem ipsum dolor sit amet
    <cv-circular-progress indeterminate slot="icon" density="-6"></cv-circular-progress>
  </cv-icon-lockup>`},o={render:e},n={render:e,args:{state:"primary"}},t={render:e,args:{state:"positive",icon:"check"}},a={render:e,args:{state:"negative",icon:"error",filledIcon:!0}},s={render:e,args:{state:"caution",icon:"warning",filledIcon:!0}},c={render:M,args:{state:"primary"}};var m,u,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: TemplateRender
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var v,I,y;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: TemplateRender,
  args: {
    state: 'primary'
  }
}`,...(y=(I=n.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var f,$,b;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: TemplateRender,
  args: {
    state: 'positive',
    icon: 'check'
  }
}`,...(b=($=t.parameters)==null?void 0:$.docs)==null?void 0:b.source}}};var h,k,R;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: TemplateRender,
  args: {
    state: 'negative',
    icon: 'error',
    filledIcon: true
  }
}`,...(R=(k=a.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var L,T,S;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: TemplateRender,
  args: {
    state: 'caution',
    icon: 'warning',
    filledIcon: true
  }
}`,...(S=(T=s.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var P,x,C;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: LoadingRender,
  args: {
    state: 'primary'
  }
}`,...(C=(x=c.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const Q=["Main","Primary","Positive","Negative","Caution","Loading"];export{s as Caution,c as Loading,o as Main,a as Negative,t as Positive,n as Primary,Q as __namedExportsOrder,K as default};
