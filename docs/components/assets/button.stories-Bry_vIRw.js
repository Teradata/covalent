import"./button-_PqhMK-p.js";import"./query-assigned-elements-BJdb4KNY.js";import"./tslib.es6-X4n3o5C8.js";import"./mwc-icon-ClXlKBjv.js";import"./ripple-handlers-_TDZG32v.js";import"./base-element-BG6oFIG9.js";import"./utils-sZhlDiu_.js";import"./state-CGn7W7VL.js";import"./query-pFbEai1B.js";import"./class-map-LmxYoNzI.js";import"./directive-CvdRHFdJ.js";import"./style-map-CNNK6hz8.js";import"./aria-property-BYXgNswj.js";import"./event-options-CZVCfsC0.js";import"./if-defined-dAx6j6jI.js";const pe={title:"Components/Button",args:{label:"Button",icon:"houseboat",showIcon:!1,trailingIcon:!1,disabled:!1,dense:!1,raised:!1,unelevated:!1,outlined:!1,expandContent:!1,fullwidth:!1},argTypes:{color:{options:["primary","secondary","emphasis","positive","negative","caution"],control:{type:"select"}}},tags:["autodocs"]},e=({label:H,showIcon:p,trailingIcon:J,icon:u,color:m,disabled:K,dense:L,raised:M,unelevated:N,outlined:P,expandContent:Q,fullwidth:U})=>`<cv-button id="myButton"
                      label="${H}"
                      ${p&&J?"trailingIcon":""}
                      ${p&&u?`icon="${u}"`:""}
                      ${L?"dense":""}
                      ${K?"disabled":""}
                      ${M?"raised":""}
                      ${N?"unelevated":""}
                      ${P?"outlined":""}
                      ${Q?"expandContent":""}
                      ${U?"fullwidth":""}
                      ${m?`color="${m}"`:""}>         
        </cv-button>`,r={args:{raised:!0},render:e},s={args:{outlined:!0},render:e},t={args:{style:"text"},render:e},a={args:{raised:!0,color:"secondary"},render:e},o={args:{raised:!0,color:"emphasis"},render:e},n={args:{raised:!0,color:"caution"},render:e},i={args:{raised:!0,color:"negative"},render:e},c={args:{raised:!0,color:"positive"},render:e},d={args:{dense:!0,raised:!0},render:e};var l,g,b;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    raised: true
  },
  render: buttonTemplate
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var v,T,$;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    outlined: true
  },
  render: buttonTemplate
}`,...($=(T=s.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var f,y,S;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    style: 'text'
  },
  render: buttonTemplate
}`,...(S=(y=t.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var h,x,B;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    raised: true,
    color: 'secondary'
  },
  render: buttonTemplate
}`,...(B=(x=a.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var C,O,_;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    raised: true,
    color: 'emphasis'
  },
  render: buttonTemplate
}`,...(_=(O=o.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var w,I,R;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    raised: true,
    color: 'caution'
  },
  render: buttonTemplate
}`,...(R=(I=n.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var E,j,k;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    raised: true,
    color: 'negative'
  },
  render: buttonTemplate
}`,...(k=(j=i.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var q,z,A;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    raised: true,
    color: 'positive'
  },
  render: buttonTemplate
}`,...(A=(z=c.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var D,F,G;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    dense: true,
    raised: true
  },
  render: buttonTemplate
}`,...(G=(F=d.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};const ue=["Raised","Outlined","Text","secondary","emphasis","caution","negative","positive","dense"];export{s as Outlined,r as Raised,t as Text,ue as __namedExportsOrder,n as caution,pe as default,d as dense,o as emphasis,i as negative,c as positive,a as secondary};
