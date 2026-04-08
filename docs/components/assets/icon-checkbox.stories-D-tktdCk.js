import{r as E,i as j,n as u,x as b,e as F}from"./query-assigned-elements-BJdb4KNY.js";import{i as G}from"./query-pFbEai1B.js";import{o as v}from"./class-map-LmxYoNzI.js";import{o as I}from"./style-map-CNNK6hz8.js";import{s as L,C as U}from"./mwc-checkbox.css-4EIEciRr.js";import"./icon-1XQe7S_h.js";import"./directive-CvdRHFdJ.js";import"./tslib.es6-X4n3o5C8.js";import"./ripple-handlers-_TDZG32v.js";import"./base-element-BG6oFIG9.js";import"./utils-sZhlDiu_.js";import"./state-CGn7W7VL.js";import"./aria-property-BYXgNswj.js";import"./form-element-XdRIvKOk.js";import"./event-options-CZVCfsC0.js";import"./if-defined-dAx6j6jI.js";import"./mwc-icon-ClXlKBjv.js";const W=':host .mdc-toggle__background{position:absolute;top:4px;right:4px;width:15px;height:15px;border:none;color:var(--mdc-theme-on-primary)}:host .mdc-toggle__checkmark-path{transition:stroke-dashoffset .18s cubic-bezier(.4,0,.6,1) 0ms;stroke:currentcolor;stroke-width:3.12px;stroke-dashoffset:29.7833;stroke-dasharray:29.7833}:host .showCheck{stroke-dashoffset:0;opacity:1}:host([width=fill]){width:100%}.container{display:flex;justify-content:center;align-items:center;flex-direction:column;text-align:center;row-gap:8px;width:var(--width);height:var(--height);border:solid 2px var(--mdc-theme-border);border-radius:8px;color:var(--mdc-theme-text-primary-on-background);--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.container:before,.container:after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.container:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.container:after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.container.mdc-ripple-upgraded:before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.container.mdc-ripple-upgraded:after{top:0;left:0;transform:scale(0);transform-origin:center center}.container.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.container.mdc-ripple-upgraded--foreground-activation:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.container.mdc-ripple-upgraded--foreground-deactivation:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.container:before,.container:after{top:0%;left:0%;width:100%;height:100%}.container.mdc-ripple-upgraded:before,.container.mdc-ripple-upgraded:after{top:var(--mdc-ripple-top, 0% );left:var(--mdc-ripple-left, 0% );width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.container.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.container:before,.container:after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.container:hover:before,.container.mdc-ripple-surface--hover:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.container.mdc-ripple-upgraded--background-focused:before,.container:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.container:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.container:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.container.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, .12)}.container:after,.container:before{border-radius:8px}.container:hover{cursor:pointer}.cornerFill{background:linear-gradient(225deg,var(--mdc-theme-primary) 28px,transparent 0)}.checked{--mdc-theme-text-icon-on-background: var(--mdc-theme-primary);border:solid 2px var(--mdc-theme-primary);background-color:var(--mdc-theme-surface-primary-highlight);font-variation-settings:"FILL" 1}.checked:hover{background-color:var(--mdc-theme-surface-primary-highlight-hover)}[name=icon]::slotted(*){font-size:40px;color:var(--mdc-theme-text-icon-on-background)}[name=text]::slotted(*){color:var(--mdc-theme-text-primary-on-background);font-family:var(--mdc-typography-body1-font-family);font-size:var(--mdc-typography-body1-font-size);font-weight:var(--mdc-typography-body1-font-weight);line-height:var(--mdc-typography-body1-line-height);letter-spacing:.4px}[name=text]::slotted(*:last-child){color:var(--mdc-theme-text-secondary-on-background);font-family:var(--mdc-typography-body2-font-family);font-size:var(--mdc-typography-body2-font-size);font-weight:var(--mdc-typography-body2-font-weight);line-height:var(--mdc-typography-body2-line-height)}';var A=Object.defineProperty,M=Object.getOwnPropertyDescriptor,s=(i,e,o,c)=>{for(var t=c>1?void 0:c?M(e,o):e,a=i.length-1,r;a>=0;a--)(r=i[a])&&(t=(c?r(e,o,t):r(t))||t);return c&&t&&A(e,o,t),t};let n=class extends U{constructor(){super(...arguments),this.width="200",this.height="160",this.iconOnly=!1}render(){const i={checked:this.checked,cornerFill:this.checked},e={showCheck:this.checked},o={"--width":this.width=="fill"?"100%":`${this.width}px`,"--height":`${this.height}px`};return b`
        <div class="${v(i)} container" style="${I(o)}" @click="${this._handleClick}">
            <input type="checkbox" class="mdc-checkbox__native-control"></input>
            <div class="mdc-toggle__background">
                <svg class="mdc-toggle__checkmark ${v(e)}" viewBox="0 0 24 24">
                    <path class="mdc-toggle__checkmark-path ${v(e)}" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
                </svg>
            </div>
            <slot name="icon"></slot>
            ${this.iconOnly?"":b`<div><slot name="text"></slot></div>`}
        </div>
    `}_handleClick(){this.checked=!this.checked}};n.styles=[j`
      ${E(W)}
    `,L];s([u()],n.prototype,"width",2);s([u()],n.prototype,"height",2);s([u({type:Boolean})],n.prototype,"iconOnly",2);s([G(".container")],n.prototype,"mdcRoot",2);n=s([F("cv-checkbox-icon")],n);const de={title:"Components/Icon Checkbox",argTypes:{checked:{control:"boolean",description:"True when the icon checkbox is checked"},disabled:{control:"boolean",description:"Disables the icon checkbox and renders in muted colors."},iconOnly:{control:"boolean",description:"Displays the icon without any text in the icon checkbox"},value:{control:"text",description:"The value that will be included if the checkbox is submitted in a form."},width:{control:"number",description:"Sets the width of the icon checkbox"},height:{control:"number",description:"Sets the height of the icon checkbox"}},args:{width:200,height:160,iconOnly:!1,checked:!1,disabled:!1,value:""},tags:["autodocs"]},f=i=>{const{width:e,height:o,iconOnly:c,checked:t,disabled:a,value:r}=i;return`
      <cv-checkbox-icon
        ${c?"iconOnly":""}
        ${t?"checked":""}
        ${a?"disabled":""}
        ${r?`value="${r}"`:""}
        style="width:${e}px; height:${o}px"
      >
        <cv-icon slot="icon">work</cv-icon>
        <div slot="text">Balanced</div>
        <div slot="text">Every week</div>
      </cv-checkbox-icon>
      <cv-checkbox-icon  
        ${c?"iconOnly":""} 
        ${t?"checked":""} 
        ${a?"disabled":""} 
        ${r?`value="${r}"`:""}
        style="width:${e}px; height:${o}px"
      >
        <cv-icon slot="icon">work</cv-icon>
        <div slot="text">Balanced</div>
        <div slot="text">Every week</div>
      </cv-checkbox-icon>
  `},l={render:f},p={render:f,args:{width:200,height:160,checked:!1,disabled:!1,iconOnly:!1,indeterminate:!1,reducedTouchTarget:!1}},h={render:f,args:{width:200,height:160,checked:!0,disabled:!1,iconOnly:!1,indeterminate:!1,reducedTouchTarget:!1}},m={render:f,args:{width:200,height:160,checked:!1,disabled:!0,iconOnly:!1,indeterminate:!1,reducedTouchTarget:!1}},N=i=>{const{width:e,height:o,iconOnly:c,checked:t,disabled:a,value:r}=i,d=`
  ${c?"iconOnly":""}
  ${t?"checked":""}
  ${a?"disabled":""}
  ${r?`value="${r}"`:""}
  style="width:${e}px; height:${o}px"
  `;return`
    <div class="mdc-layout-grid">
      <div class="mdc-layout-grid__inner">
        <cv-checkbox-icon ${d} class="mdc-layout-grid__cell">
          <cv-icon slot="icon">storage</cv-icon>
          <div slot="text">Data</div>
        </cv-checkbox-icon>
        <cv-checkbox-icon ${d} class="mdc-layout-grid__cell">
          <cv-icon slot="icon">description</cv-icon>
          <div slot="text">Files</div>
        </cv-checkbox-icon>
        <cv-checkbox-icon ${d} class="mdc-layout-grid__cell">
          <cv-icon slot="icon">bookmark</cv-icon>
          <div slot="text">Articles</div>
        </cv-checkbox-icon>
        <cv-checkbox-icon ${d} class="mdc-layout-grid__cell">
          <cv-icon slot="icon">folder</cv-icon>
          <div slot="text">Projects</div>
        </cv-checkbox-icon>
        <cv-checkbox-icon ${d} class="mdc-layout-grid__cell">
          <cv-icon slot="icon">assignment</cv-icon>
          <div slot="text">Notebooks</div>
        </cv-checkbox-icon>
        <cv-checkbox-icon ${d} class="mdc-layout-grid__cell">
          <cv-icon slot="icon" >receipt_long</cv-icon>
          <div slot="text">Scripts</div>
        </cv-checkbox-icon>
      </div>
    </div>
  `},g={render:N,args:{width:105,height:100}};var y,k,x;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: TemplateRender
}`,...(x=(k=l.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var w,$,_;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: TemplateRender,
  args: {
    width: 200,
    height: 160,
    checked: false,
    disabled: false,
    iconOnly: false,
    indeterminate: false,
    reducedTouchTarget: false
  }
}`,...(_=($=p.parameters)==null?void 0:$.docs)==null?void 0:_.source}}};var T,O,z;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: TemplateRender,
  args: {
    width: 200,
    height: 160,
    checked: true,
    disabled: false,
    iconOnly: false,
    indeterminate: false,
    reducedTouchTarget: false
  }
}`,...(z=(O=h.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var C,S,D;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: TemplateRender,
  args: {
    width: 200,
    height: 160,
    checked: false,
    disabled: true,
    iconOnly: false,
    indeterminate: false,
    reducedTouchTarget: false
  }
}`,...(D=(S=m.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var P,R,B;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: GridExample,
  args: {
    width: 105,
    height: 100
  }
}`,...(B=(R=g.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};const se=["Template","Unchecked","Checked","Disabled","WithGrid"];export{h as Checked,m as Disabled,l as Template,p as Unchecked,g as WithGrid,se as __namedExportsOrder,de as default};
