import{s as _,x as L,i as N,r as S,e as C}from"./query-assigned-elements-DrVEbY-Z.js";import{n as s}from"./property-jaip2ZBL.js";import{o as O}from"./class-map-BiVinSLa.js";import"./icon-t35jb-S6.js";import"./list-item-C78QTt4t.js";import"./list-BS7AukG1.js";import"./typography-DUYqxpre.js";import"./directive-CvdRHFdJ.js";import"./mwc-icon-BqP9gbHN.js";import"./tslib.es6-BHOXe2z4.js";import"./base-element-DsKKxcfh.js";import"./utils-DQt7ZoY7.js";import"./observer-D8jHVEI7.js";import"./query-BwR-Wesx.js";import"./query-assigned-nodes-kmKsePzO.js";import"./if-defined-BYt77_e6.js";import"./ripple-handlers-DDpyjNEg.js";import"./state-BvMmCZpn.js";import"./style-map-CYkhWXm1.js";const E=".cv-badge{background-color:var(--cv-theme-negative);border-radius:11px;box-sizing:border-box;color:var(--cv-theme-on-negative);display:inline-block;font-family:var(--mdc-typography-caption-font-family);font-size:var(--mdc-typography-caption-font-size);font-weight:var(--mdc-typography-caption-font-weight);line-height:var(--mdc-typography-caption-line-height);height:16px;min-width:16px;padding:0 4px;position:absolute;text-align:center}.cv-badge.small{height:2px;padding:2px;min-width:2px}.cv-badge.top-right{top:var(--cv-badge-position-y, -2px);right:var(--cv-badge-position-x, -2px)}.cv-badge.top-left{top:var(--cv-badge-position-y, -2px);left:var(--cv-badge-position-x, -2px)}.cv-badge.bottom-right{bottom:var(--cv-badge-position-y, -2px);right:var(--cv-badge-position-x, -2px)}.cv-badge.bottom-left{bottom:var(--cv-badge-position-y, -2px);left:var(--cv-badge-position-x, -2px)}.cv-badge.isolated{position:relative;top:0;right:0;bottom:0;left:0}.cv-badge-container{position:relative;display:inline-flex}.wrapped-content{flex-grow:1}.hidden{display:none}";var T=Object.defineProperty,I=Object.getOwnPropertyDescriptor,i=(e,n,a,r)=>{for(var t=r>1?void 0:r?I(n,a):n,c=e.length-1,l;c>=0;c--)(l=e[c])&&(t=(r?l(n,a,t):l(t))||t);return r&&t&&T(n,a,t),t};let o=class extends _{constructor(){super(...arguments),this.max=100,this.size="large",this.hideBadge=!1,this.verticalAlignment="top",this.horizontalAlignment="right"}firstUpdated(){var n;const e=this.renderRoot.querySelector("slot");if(e&&!e.assignedNodes({flatten:!0}).filter(t=>t.nodeType===Node.ELEMENT_NODE).length){const t=this.renderRoot.querySelector("#badge-content");(n=t==null?void 0:t.classList)==null||n.add("isolated")}}getContent(){let e=this.content;const n=Number(e);return this.showZero&&e==0?e=e.toString():!isNaN(n)&&this.max&&(e=n>this.max?`${this.max}+`:n),e||""}render(){const e={"cv-badge":!0,small:this.size==="small",hidden:!!this.hideBadge||!this.showZero&&this.content==0};return e[`${this.verticalAlignment}-${this.horizontalAlignment}`]=!0,L`
      <div class="cv-badge-container">
        <slot class="wrapped-content"></slot>
        <span id="badge-content" class="${O(e)}">
          ${this.size!=="small"?this.getContent():""}
        </span>
      </div>
    `}};o.styles=[N`
      ${S(E)}
    `];i([s()],o.prototype,"content",2);i([s()],o.prototype,"max",2);i([s()],o.prototype,"size",2);i([s({type:Boolean,reflect:!0})],o.prototype,"hideBadge",2);i([s()],o.prototype,"verticalAlignment",2);i([s()],o.prototype,"horizontalAlignment",2);i([s({type:Boolean,reflect:!0})],o.prototype,"showZero",2);o=i([C("cv-badge")],o);const ne={title:"Components/Badge",argTypes:{size:{options:["large","small"],control:{type:"select"}},verticalAlignment:{options:["top","bottom"],control:{type:"select"}},horizontalAlignment:{options:["right","left"],control:{type:"select"}}},args:{content:22,max:99,size:"large",verticalAlignment:"top",horizontalAlignment:"right",showZero:!0,hideBadge:!1}},h=({content:e,max:n,size:a,showZero:r,hideBadge:t,verticalAlignment:c,horizontalAlignment:l})=>`<cv-badge${e||e==0?` content=${e}`:""}${a?` size=${a}`:""}${n?` max=${n}`:""}${c?` verticalAlignment=${c}`:""}${l?` horizontalAlignment=${l}`:""}${r?" showZero":""}${t?" hideBadge":""}>
    <cv-icon style="font-size: 36px">chat<cv-icon>
  </cv-badge>`,P=()=>`
  <div style="margin-bottom: 3em;">
    <cv-typography scale="headline5">Basic</cv-typography>
    <cv-badge content='Hello world'></cv-badge>
  </div>
  <cv-typography scale="headline5">Used in a list</cv-typography>
  <cv-list>
    <cv-list-item>
      <span style="padding-right: 2em;">Item 1</span>
      <cv-badge content=22 max=999></cv-badge>
    </cv-list-item>
    <cv-list-item>
      <span style="padding-right: 2em;">Item 2</span>
      <cv-badge content=1000 max=999></cv-badge>
    </cv-list-item>
  </cv-list>`,p=h.bind({});p.args={content:3,max:99};const g=h.bind({});g.args={content:9999,max:99};const m=h.bind({});m.args={size:"small"};const d=P.bind({});var v,b,y;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:"({\n  content,\n  max,\n  size,\n  showZero,\n  hideBadge,\n  verticalAlignment,\n  horizontalAlignment\n}) => {\n  return `<cv-badge${content || content == 0 ? ` content=${content}` : ''}${size ? ` size=${size}` : ''}${max ? ` max=${max}` : ''}${verticalAlignment ? ` verticalAlignment=${verticalAlignment}` : ''}${horizontalAlignment ? ` horizontalAlignment=${horizontalAlignment}` : ''}${showZero ? ' showZero' : ''}${hideBadge ? ' hideBadge' : ''}>\n    <cv-icon style=\"font-size: 36px\">chat<cv-icon>\n  </cv-badge>`;\n}",...(y=(b=p.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var x,$,z;g.parameters={...g.parameters,docs:{...(x=g.parameters)==null?void 0:x.docs,source:{originalSource:"({\n  content,\n  max,\n  size,\n  showZero,\n  hideBadge,\n  verticalAlignment,\n  horizontalAlignment\n}) => {\n  return `<cv-badge${content || content == 0 ? ` content=${content}` : ''}${size ? ` size=${size}` : ''}${max ? ` max=${max}` : ''}${verticalAlignment ? ` verticalAlignment=${verticalAlignment}` : ''}${horizontalAlignment ? ` horizontalAlignment=${horizontalAlignment}` : ''}${showZero ? ' showZero' : ''}${hideBadge ? ' hideBadge' : ''}>\n    <cv-icon style=\"font-size: 36px\">chat<cv-icon>\n  </cv-badge>`;\n}",...(z=($=g.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var f,u,A;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:"({\n  content,\n  max,\n  size,\n  showZero,\n  hideBadge,\n  verticalAlignment,\n  horizontalAlignment\n}) => {\n  return `<cv-badge${content || content == 0 ? ` content=${content}` : ''}${size ? ` size=${size}` : ''}${max ? ` max=${max}` : ''}${verticalAlignment ? ` verticalAlignment=${verticalAlignment}` : ''}${horizontalAlignment ? ` horizontalAlignment=${horizontalAlignment}` : ''}${showZero ? ' showZero' : ''}${hideBadge ? ' hideBadge' : ''}>\n    <cv-icon style=\"font-size: 36px\">chat<cv-icon>\n  </cv-badge>`;\n}",...(A=(u=m.parameters)==null?void 0:u.docs)==null?void 0:A.source}}};var w,B,Z;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  return \`
  <div style="margin-bottom: 3em;">
    <cv-typography scale="headline5">Basic</cv-typography>
    <cv-badge content='Hello world'></cv-badge>
  </div>
  <cv-typography scale="headline5">Used in a list</cv-typography>
  <cv-list>
    <cv-list-item>
      <span style="padding-right: 2em;">Item 1</span>
      <cv-badge content=22 max=999></cv-badge>
    </cv-list-item>
    <cv-list-item>
      <span style="padding-right: 2em;">Item 2</span>
      <cv-badge content=1000 max=999></cv-badge>
    </cv-list-item>
  </cv-list>\`;
}`,...(Z=(B=d.parameters)==null?void 0:B.docs)==null?void 0:Z.source}}};const oe=["Large","LargeWithLimit","Small","Basic"];export{d as Basic,p as Large,g as LargeWithLimit,m as Small,oe as __namedExportsOrder,ne as default};
