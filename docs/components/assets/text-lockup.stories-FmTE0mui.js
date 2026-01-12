import{r as _,i as z,n as x,s as I,x as g,A as O,e as C}from"./query-assigned-elements-BJdb4KNY.js";import{o as D}from"./class-map-LmxYoNzI.js";import"./icon-BYPYUWym.js";import{i as j}from"./material-codepoints-8gyANQCF.js";import"./directive-CvdRHFdJ.js";import"./mwc-icon-BGUO1vKj.js";import"./tslib.es6-C-hQhb2A.js";const P=".subtext--trailing{display:flex;flex-direction:column-reverse}.subtext{display:flex;align-items:center;--mdc-icon-size: 16px;color:var(--mdc-theme-text-secondary-on-background);font-family:var(--mdc-typography-caption-font-family);font-size:var(--mdc-typography-caption-font-size);font-weight:var(--mdc-typography-caption-font-weight);line-height:var(--mdc-typography-caption-line-height);margin-bottom:2px}.subtext cv-icon{margin-right:8px}slot{font-family:var(--mdc-typography-body1-font-family);font-size:var(--mdc-typography-body1-font-size);font-weight:var(--mdc-typography-body1-font-weight);line-height:var(--mdc-typography-body1-line-height);margin-bottom:8px}.scale--large .subtext{--mdc-icon-size: 24px;font-family:var(--mdc-typography-body1-font-family);font-size:var(--mdc-typography-body1-font-size);font-weight:var(--mdc-typography-body1-font-weight);line-height:var(--mdc-typography-body1-line-height);margin-bottom:2px}.scale--large slot{font-family:var(--mdc-typography-headline4-font-family);font-size:var(--mdc-typography-headline4-font-size);font-weight:var(--mdc-typography-headline4-font-weight);line-height:var(--mdc-typography-headline4-line-height);margin-bottom:8px}.subtext-state--positive .subtext{color:var(--mdc-theme-positive)}.subtext-state--negative .subtext{color:var(--mdc-theme-negative)}.subtext-state--caution .subtext{color:var(--mdc-theme-caution)}.subtext-state--active .subtext{color:var(--mdc-theme-accent)}";var A=Object.defineProperty,M=Object.getOwnPropertyDescriptor,r=(t,a,i,o)=>{for(var e=o>1?void 0:o?M(a,i):a,c=t.length-1,b;c>=0;c--)(b=t[c])&&(e=(o?b(a,i,e):b(e))||e);return o&&e&&A(a,i,e),e};let n=class extends I{constructor(){super(...arguments),this.scale="small",this.trailingSubText=!1}render(){const t={"subtext--trailing":this.trailingSubText};return t[`scale--${this.scale}`]=!0,this.state&&(t[`subtext-state--${this.state}`]=!0),g`<span class="${D(t)}"
      ><span class="subtext">${this.renderIcon()}${this.subText}</span
      ><slot></slot
    ></span>`}renderIcon(){return this.icon?g`<cv-icon>${this.icon}</cv-icon>`:O}};n.styles=[z`
      ${_(P)}
    `];r([x()],n.prototype,"subText",2);r([x()],n.prototype,"icon",2);r([x()],n.prototype,"state",2);r([x()],n.prototype,"scale",2);r([x({type:Boolean,reflect:!0})],n.prototype,"trailingSubText",2);n=r([C("cv-text-lockup")],n);const W=Object.keys(j),H={title:"Components/Text lockup",argTypes:{scale:{options:["large","small"],control:{type:"radio"}},icon:{options:W,control:{type:"select"}},subTextState:{options:["active","positive","negative","caution"],control:{type:"select"}}},args:{scale:"small",text:"TDICAM-8523411",subText:"environment Id",subTextTrailing:!1}},s=({icon:t,scale:a,subText:i,subTextState:o,subTextTrailing:e,text:c})=>`
    <cv-text-lockup
      subtext="${i}"
      scale="${a}"
      ${t?`icon="${t}"`:""}
      ${o?`state="${o}"`:""}
      ${e?"trailingSubText":""}>${c}</cv-text-lockup>
  `,l=s.bind({});l.args={scale:"large"};const p=s.bind({});p.args={text:"Jan 12th, 2022 at 5:10pm",subText:"Date last ran successfully",subTextTrailing:!0};const u=s.bind({});u.args={icon:"warning",text:"Daily production backup job",subText:"completed with issues",subTextState:"caution",subTextTrailing:!0};var m,y,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`({
  icon,
  scale,
  subText,
  subTextState,
  subTextTrailing,
  text
}) => {
  return \`
    <cv-text-lockup
      subtext="\${subText}"
      scale="\${scale}"
      \${icon ? \`icon="\${icon}"\` : ''}
      \${subTextState ? \`state="\${subTextState}"\` : ''}
      \${subTextTrailing ? 'trailingSubText' : ''}>\${text}</cv-text-lockup>
  \`;
}`,...(h=(y=s.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var d,T,v;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`({
  icon,
  scale,
  subText,
  subTextState,
  subTextTrailing,
  text
}) => {
  return \`
    <cv-text-lockup
      subtext="\${subText}"
      scale="\${scale}"
      \${icon ? \`icon="\${icon}"\` : ''}
      \${subTextState ? \`state="\${subTextState}"\` : ''}
      \${subTextTrailing ? 'trailingSubText' : ''}>\${text}</cv-text-lockup>
  \`;
}`,...(v=(T=l.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var f,$,S;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`({
  icon,
  scale,
  subText,
  subTextState,
  subTextTrailing,
  text
}) => {
  return \`
    <cv-text-lockup
      subtext="\${subText}"
      scale="\${scale}"
      \${icon ? \`icon="\${icon}"\` : ''}
      \${subTextState ? \`state="\${subTextState}"\` : ''}
      \${subTextTrailing ? 'trailingSubText' : ''}>\${text}</cv-text-lockup>
  \`;
}`,...(S=($=p.parameters)==null?void 0:$.docs)==null?void 0:S.source}}};var k,L,w;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`({
  icon,
  scale,
  subText,
  subTextState,
  subTextTrailing,
  text
}) => {
  return \`
    <cv-text-lockup
      subtext="\${subText}"
      scale="\${scale}"
      \${icon ? \`icon="\${icon}"\` : ''}
      \${subTextState ? \`state="\${subTextState}"\` : ''}
      \${subTextTrailing ? 'trailingSubText' : ''}>\${text}</cv-text-lockup>
  \`;
}`,...(w=(L=u.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};const K=["textLockup","textLockupLarge","textLockupTrailing","textLockupWithIcon"];export{K as __namedExportsOrder,H as default,s as textLockup,l as textLockupLarge,p as textLockupTrailing,u as textLockupWithIcon};
