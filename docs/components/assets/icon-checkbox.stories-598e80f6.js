import{i as k,r as u,x as h,e as _}from"./query-assigned-elements-9f88bee1.js";import{n as v}from"./property-f36ea729.js";import{o as p}from"./class-map-018c3a6a.js";import{o as w}from"./style-map-4c420736.js";import{C as O}from"./mwc-checkbox-base-10de1463.js";import{s as $}from"./mwc-checkbox.css-e8d2335f.js";import"./icon-dab2e138.js";import"./tslib.es6-4b90b051.js";import"./ripple-handlers-20d146be.js";import"./base-element-cae00a28.js";import"./utils-529e1a6d.js";import"./state-2a0073ff.js";import"./query-3e91a3b8.js";import"./aria-property-3dc182ec.js";import"./form-element-d2a726aa.js";import"./event-options-b5830ec0.js";import"./if-defined-c3862b86.js";import"./mwc-icon-6ece1001.js";const z=`:host .mdc-toggle__background{position:absolute;top:4px;right:4px;width:15px;height:15px;border:none;color:var(--mdc-theme-text-icon-on-dark)}:host .mdc-toggle__checkmark-path{transition:stroke-dashoffset .18s cubic-bezier(.4,0,.6,1) 0ms;stroke:currentcolor;stroke-width:3.12px;stroke-dashoffset:29.7833;stroke-dasharray:29.7833}:host .showCheck{stroke-dashoffset:0;opacity:1}:host([width=fill]){width:100%}.container{display:flex;justify-content:center;align-items:center;flex-direction:column;text-align:center;row-gap:8px;width:var(--width);height:var(--height);border:solid 2px var(--mdc-theme-border);border-radius:8px;color:var(--mdc-theme-text-primary-on-background);--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.container:before,.container:after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.container:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.container:after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.container.mdc-ripple-upgraded:before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.container.mdc-ripple-upgraded:after{top:0;left:0;transform:scale(0);transform-origin:center center}.container.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.container.mdc-ripple-upgraded--foreground-activation:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.container.mdc-ripple-upgraded--foreground-deactivation:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.container:before,.container:after{top:0%;left:0%;width:100%;height:100%}.container.mdc-ripple-upgraded:before,.container.mdc-ripple-upgraded:after{top:var(--mdc-ripple-top, 0%);left:var(--mdc-ripple-left, 0%);width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.container.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.container:before,.container:after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.container:hover:before,.container.mdc-ripple-surface--hover:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.container.mdc-ripple-upgraded--background-focused:before,.container:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.container:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.container:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.container.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, .12)}.container:after,.container:before{border-radius:8px}.container:hover{cursor:pointer}.cornerFill{background:linear-gradient(225deg,var(--mdc-theme-secondary) 28px,transparent 0)}.checked{border:solid 2px var(--mdc-theme-primary);background-color:var(--mdc-theme-surface-primary-highlight)}.checked:hover{background-color:var(--mdc-theme-surface-primary-highlight-hover)}[name=icon]::slotted(*){font-size:40px;color:var(--mdc-theme-text-icon-on-background)}[name=text]::slotted(*){color:var(--mdc-theme-text-primary-on-background);font-family:var(--mdc-typography-body1-font-family);font-size:var(--mdc-typography-body1-font-size);font-weight:var(--mdc-typography-body1-font-weight);line-height:var(--mdc-typography-body1-line-height);letter-spacing:.4px}[name=text]::slotted(*:last-child){color:var(--mdc-theme-text-secondary-on-background);font-family:var(--mdc-typography-body2-font-family);font-size:var(--mdc-typography-body2-font-size);font-weight:var(--mdc-typography-body2-font-weight);line-height:var(--mdc-typography-body2-line-height)}
`;var C=Object.defineProperty,B=Object.getOwnPropertyDescriptor,d=(c,o,e,n)=>{for(var i=n>1?void 0:n?B(o,e):o,l=c.length-1,s;l>=0;l--)(s=c[l])&&(i=(n?s(o,e,i):s(i))||i);return n&&i&&C(o,e,i),i};let t=class extends O{constructor(){super(...arguments),this.width="200",this.height="160",this.iconOnly=!1}render(){const c={checked:this.checked,cornerFill:this.checked},o={showCheck:this.checked},e={"--width":this.width=="fill"?"100%":`${this.width}px`,"--height":`${this.height}px`};return h`
        <div class="${p(c)} container" style="${w(e)}" @click="${this._handleClick}">
            <input type="checkbox" class="mdc-checkbox__native-control"></input>
            <div class="mdc-toggle__background">
                <svg class="mdc-toggle__checkmark ${p(o)}" viewBox="0 0 24 24">
                    <path class="mdc-toggle__checkmark-path ${p(o)}" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
                </svg>
            </div>
            <slot name="icon"></slot>
            ${this.iconOnly?"":h`<div><slot name="text"></slot></div>`}
        </div>
    `}_handleClick(){this.checked=!this.checked}};t.styles=[k`
      ${u(z)}
    `,$];d([v()],t.prototype,"width",2);d([v()],t.prototype,"height",2);d([v({type:Boolean})],t.prototype,"iconOnly",2);t=d([_("cv-checkbox-icon")],t);const R={title:"Components/Icon Checkbox",args:{width:200,height:160,iconOnly:!1}},a=({width:c,height:o,iconOnly:e})=>`
  <cv-checkbox-icon  ${e?" iconOnly":""}>
        <cv-icon slot="icon">work</cv-icon>
        <div slot="text">Balanced</div>
        <div slot="text">Every week</div>
      </cv-checkbox-icon>
      <cv-checkbox-icon  ${e?"iconOnly":""}>
        <cv-icon slot="icon">work</cv-icon>
        <div slot="text">Balanced</div>
        <div slot="text">Every week</div>
      </cv-checkbox-icon>
  `,E=({iconOnly:c})=>`
  <div class="mdc-layout-grid">
  <div class="mdc-layout-grid__inner">
    <cv-checkbox-icon ${c?"iconOnly":""} class="mdc-layout-grid__cell">
          <cv-icon slot="icon">storage</cv-icon>
          <div slot="text">Data</div>
        </cv-checkbox-icon>
        <cv-checkbox-icon ${c?"iconOnly":""} class="mdc-layout-grid__cell">
          <cv-icon slot="icon">description</cv-icon>
          <div slot="text">Files</div>
        </cv-checkbox-icon>
        <cv-checkbox-icon ${c?"iconOnly":""} class="mdc-layout-grid__cell">
          <cv-icon slot="icon">bookmark</cv-icon>
          <div slot="text">Articles</div>
        </cv-checkbox-icon>
        <cv-checkbox-icon ${c?"iconOnly":""} class="mdc-layout-grid__cell">
          <cv-icon slot="icon">folder</cv-icon>
          <div slot="text">Projects</div>
        </cv-checkbox-icon>
        <cv-checkbox-icon ${c?"iconOnly":""} class="mdc-layout-grid__cell">
          <cv-icon slot="icon">assignment</cv-icon>
          <div slot="text">Notebooks</div>
        </cv-checkbox-icon>
        <cv-checkbox-icon ${c?"iconOnly":""} class="mdc-layout-grid__cell">
          <cv-icon slot="icon" >receipt_long</cv-icon>
          <div slot="text">Scripts</div>
        </cv-checkbox-icon>
        </div>
        </div>
  `,r=E.bind({});r.args={width:"105",height:"100"};var m,g,y;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`({
  width,
  height,
  iconOnly
}) => {
  return \`
  <cv-checkbox-icon  \${iconOnly ? ' iconOnly' : ''}>
        <cv-icon slot="icon">work</cv-icon>
        <div slot="text">Balanced</div>
        <div slot="text">Every week</div>
      </cv-checkbox-icon>
      <cv-checkbox-icon  \${iconOnly ? 'iconOnly' : ''}>
        <cv-icon slot="icon">work</cv-icon>
        <div slot="text">Balanced</div>
        <div slot="text">Every week</div>
      </cv-checkbox-icon>
  \`;
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var f,x,b;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`({
  iconOnly
}) => {
  return \`
  <div class="mdc-layout-grid">
  <div class="mdc-layout-grid__inner">
    <cv-checkbox-icon \${iconOnly ? 'iconOnly' : ''} class="mdc-layout-grid__cell">
          <cv-icon slot="icon">storage</cv-icon>
          <div slot="text">Data</div>
        </cv-checkbox-icon>
        <cv-checkbox-icon \${iconOnly ? 'iconOnly' : ''} class="mdc-layout-grid__cell">
          <cv-icon slot="icon">description</cv-icon>
          <div slot="text">Files</div>
        </cv-checkbox-icon>
        <cv-checkbox-icon \${iconOnly ? 'iconOnly' : ''} class="mdc-layout-grid__cell">
          <cv-icon slot="icon">bookmark</cv-icon>
          <div slot="text">Articles</div>
        </cv-checkbox-icon>
        <cv-checkbox-icon \${iconOnly ? 'iconOnly' : ''} class="mdc-layout-grid__cell">
          <cv-icon slot="icon">folder</cv-icon>
          <div slot="text">Projects</div>
        </cv-checkbox-icon>
        <cv-checkbox-icon \${iconOnly ? 'iconOnly' : ''} class="mdc-layout-grid__cell">
          <cv-icon slot="icon">assignment</cv-icon>
          <div slot="text">Notebooks</div>
        </cv-checkbox-icon>
        <cv-checkbox-icon \${iconOnly ? 'iconOnly' : ''} class="mdc-layout-grid__cell">
          <cv-icon slot="icon" >receipt_long</cv-icon>
          <div slot="text">Scripts</div>
        </cv-checkbox-icon>
        </div>
        </div>
  \`;
}`,...(b=(x=r.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const U=["Template","WithGrid"];export{a as Template,r as WithGrid,U as __namedExportsOrder,R as default};
//# sourceMappingURL=icon-checkbox.stories-598e80f6.js.map
