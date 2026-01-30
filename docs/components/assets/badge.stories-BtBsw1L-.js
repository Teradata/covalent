import{r as _,i as L,n as s,s as N,x as S,e as C}from"./query-assigned-elements-BJdb4KNY.js";import{o as O}from"./class-map-LmxYoNzI.js";import"./icon-BYPYUWym.js";import"./list-item-CmxEoEoc.js";import"./list-CVk4ScCz.js";import"./typography-Cz0H0E8U.js";import"./directive-CvdRHFdJ.js";import"./mwc-icon-BGUO1vKj.js";import"./tslib.es6-C-hQhb2A.js";import"./base-element-C3CkHPn4.js";import"./utils-DQt7ZoY7.js";import"./observer-D8jHVEI7.js";import"./query-pFbEai1B.js";import"./query-assigned-nodes-BxERp_Ow.js";import"./if-defined-dAx6j6jI.js";import"./ripple-handlers-CLC5WHP1.js";import"./state-CGn7W7VL.js";import"./style-map-CNNK6hz8.js";const E=".cv-badge{background-color:var(--cv-theme-negative);border-radius:11px;box-sizing:border-box;color:var(--cv-theme-on-negative);display:inline-block;font-family:var(--mdc-typography-caption-font-family);font-size:var(--mdc-typography-caption-font-size);font-weight:var(--mdc-typography-caption-font-weight);line-height:var(--mdc-typography-caption-line-height);height:16px;min-width:16px;padding:0 4px;position:absolute;text-align:center}.cv-badge.small{height:2px;padding:2px;min-width:2px}.cv-badge.top-right{top:var(--cv-badge-position-y, -2px);right:var(--cv-badge-position-x, -2px)}.cv-badge.top-left{top:var(--cv-badge-position-y, -2px);left:var(--cv-badge-position-x, -2px)}.cv-badge.bottom-right{bottom:var(--cv-badge-position-y, -2px);right:var(--cv-badge-position-x, -2px)}.cv-badge.bottom-left{bottom:var(--cv-badge-position-y, -2px);left:var(--cv-badge-position-x, -2px)}.cv-badge.isolated{position:relative;top:0;right:0;bottom:0;left:0}.cv-badge-container{position:relative;display:inline-flex}.wrapped-content{flex-grow:1}.hidden{display:none}";var T=Object.defineProperty,I=Object.getOwnPropertyDescriptor,i=(e,n,a,r)=>{for(var t=r>1?void 0:r?I(n,a):n,c=e.length-1,l;c>=0;c--)(l=e[c])&&(t=(r?l(n,a,t):l(t))||t);return r&&t&&T(n,a,t),t};let o=class extends N{constructor(){super(...arguments),this.max=100,this.size="large",this.hideBadge=!1,this.verticalAlignment="top",this.horizontalAlignment="right"}firstUpdated(){var n;const e=this.renderRoot.querySelector("slot");if(e&&!e.assignedNodes({flatten:!0}).filter(t=>t.nodeType===Node.ELEMENT_NODE).length){const t=this.renderRoot.querySelector("#badge-content");(n=t==null?void 0:t.classList)==null||n.add("isolated")}}getContent(){let e=this.content;const n=Number(e);return this.showZero&&e==0?e=e.toString():!isNaN(n)&&this.max&&(e=n>this.max?`${this.max}+`:n),e||""}render(){const e={"cv-badge":!0,small:this.size==="small",hidden:!!this.hideBadge||!this.showZero&&this.content==0};return e[`${this.verticalAlignment}-${this.horizontalAlignment}`]=!0,S`
      <div class="cv-badge-container">
        <slot class="wrapped-content"></slot>
        <span id="badge-content" class="${O(e)}">
          ${this.size!=="small"?this.getContent():""}
        </span>
      </div>
    `}};o.styles=[L`
      ${_(E)}
    `];i([s()],o.prototype,"content",2);i([s()],o.prototype,"max",2);i([s()],o.prototype,"size",2);i([s({type:Boolean,reflect:!0})],o.prototype,"hideBadge",2);i([s()],o.prototype,"verticalAlignment",2);i([s()],o.prototype,"horizontalAlignment",2);i([s({type:Boolean,reflect:!0})],o.prototype,"showZero",2);o=i([C("cv-badge")],o);const te={title:"Components/Badge",argTypes:{size:{options:["large","small"],control:{type:"select"}},verticalAlignment:{options:["top","bottom"],control:{type:"select"}},horizontalAlignment:{options:["right","left"],control:{type:"select"}}},args:{content:22,max:99,size:"large",verticalAlignment:"top",horizontalAlignment:"right",showZero:!0,hideBadge:!1}},h=({content:e,max:n,size:a,showZero:r,hideBadge:t,verticalAlignment:c,horizontalAlignment:l})=>`<cv-badge${e||e==0?` content=${e}`:""}${a?` size=${a}`:""}${n?` max=${n}`:""}${c?` verticalAlignment=${c}`:""}${l?` horizontalAlignment=${l}`:""}${r?" showZero":""}${t?" hideBadge":""}>
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
  </cv-list>`,g=h.bind({});g.args={content:3,max:99};const p=h.bind({});p.args={content:9999,max:99};const d=h.bind({});d.args={size:"small"};const m=P.bind({});var v,b,y;g.parameters={...g.parameters,docs:{...(v=g.parameters)==null?void 0:v.docs,source:{originalSource:"({\n  content,\n  max,\n  size,\n  showZero,\n  hideBadge,\n  verticalAlignment,\n  horizontalAlignment\n}) => {\n  return `<cv-badge${content || content == 0 ? ` content=${content}` : ''}${size ? ` size=${size}` : ''}${max ? ` max=${max}` : ''}${verticalAlignment ? ` verticalAlignment=${verticalAlignment}` : ''}${horizontalAlignment ? ` horizontalAlignment=${horizontalAlignment}` : ''}${showZero ? ' showZero' : ''}${hideBadge ? ' hideBadge' : ''}>\n    <cv-icon style=\"font-size: 36px\">chat<cv-icon>\n  </cv-badge>`;\n}",...(y=(b=g.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var x,$,z;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:"({\n  content,\n  max,\n  size,\n  showZero,\n  hideBadge,\n  verticalAlignment,\n  horizontalAlignment\n}) => {\n  return `<cv-badge${content || content == 0 ? ` content=${content}` : ''}${size ? ` size=${size}` : ''}${max ? ` max=${max}` : ''}${verticalAlignment ? ` verticalAlignment=${verticalAlignment}` : ''}${horizontalAlignment ? ` horizontalAlignment=${horizontalAlignment}` : ''}${showZero ? ' showZero' : ''}${hideBadge ? ' hideBadge' : ''}>\n    <cv-icon style=\"font-size: 36px\">chat<cv-icon>\n  </cv-badge>`;\n}",...(z=($=p.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var f,u,A;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:"({\n  content,\n  max,\n  size,\n  showZero,\n  hideBadge,\n  verticalAlignment,\n  horizontalAlignment\n}) => {\n  return `<cv-badge${content || content == 0 ? ` content=${content}` : ''}${size ? ` size=${size}` : ''}${max ? ` max=${max}` : ''}${verticalAlignment ? ` verticalAlignment=${verticalAlignment}` : ''}${horizontalAlignment ? ` horizontalAlignment=${horizontalAlignment}` : ''}${showZero ? ' showZero' : ''}${hideBadge ? ' hideBadge' : ''}>\n    <cv-icon style=\"font-size: 36px\">chat<cv-icon>\n  </cv-badge>`;\n}",...(A=(u=d.parameters)==null?void 0:u.docs)==null?void 0:A.source}}};var w,B,Z;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
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
}`,...(Z=(B=m.parameters)==null?void 0:B.docs)==null?void 0:Z.source}}};const ne=["Large","LargeWithLimit","Small","Basic"];export{m as Basic,g as Large,p as LargeWithLimit,d as Small,ne as __namedExportsOrder,te as default};
