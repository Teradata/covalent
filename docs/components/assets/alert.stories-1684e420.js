import{s as w,x as p,i as $,r as k,e as C}from"./query-assigned-elements-9f88bee1.js";import{a as T}from"./utils-529e1a6d.js";import{o as E}from"./observer-1f401936.js";import{C as l,M as A,e as F}from"./foundation-ebc4a482.js";import{o as P}from"./class-map-018c3a6a.js";import{n as d}from"./property-f36ea729.js";import{i as y}from"./query-3e91a3b8.js";import"./tslib.es6-6921e62d.js";import"./foundation-402d6c96.js";var z=Object.defineProperty,I=Object.getOwnPropertyDescriptor,c=(a,e,r,t)=>{for(var n=t>1?void 0:t?I(e,r):e,i=a.length-1,s;i>=0;i--)(s=a[i])&&(n=(t?s(e,r,n):s(n))||n);return t&&n&&z(e,r,n),n};class o extends w{constructor(){super(...arguments),this.mdcFoundationClass=A,this.open=!0,this.titleText="",this.descriptionText="",this.icon="",this.iconAriaLabel="",this.inline=!1,this.state="",this.reason=l.UNSPECIFIED}render(){const e={"mdc-banner":!0,"cv-banner--inline":this.inline,negative:this.state==="negative",positive:this.state==="positive",caution:this.state==="caution",active:this.state==="active"};return p` <div class="${P(e)}" role="banner">
      <div class="mdc-banner__content" role="alertdialog" aria-live="assertive" aria-label="${this.titleText}">
        <div class="mdc-banner__graphic-text-wrapper">
          ${this.icon?this.renderIcon():""}
          <div class="mdc-banner__text">
            <span class="mdc-typography--body2">${this.titleText}</span>
            <div class="mdc-typography--body1">${this.descriptionText}</div>
          </div>
        </div>
        <div class="mdc-banner__actions">
          <slot name="action-items"></slot>
        </div>
      </div>
    </div>`}renderIcon(){return p` <div class="mdc-banner__graphic" role="img" aria-label="${this.iconAriaLabel}">
      <slot name="icon">
        <cv-icon class="mdc-banner__icon"> ${this.icon} </cv-icon>
      </slot>
    </div>`}createAdapter(){return{...T(this.mdcRoot),getContentHeight:()=>this.mdcContent.offsetHeight,setStyleProperty:(e,r)=>{this.mdcRoot.style.setProperty(e,r)},trapFocus:()=>{},releaseFocus:()=>{},notifyActionClicked:e=>this.dispatchEvent(new CustomEvent(F.ACTION_CLICKED,{bubbles:!0,cancelable:!0,detail:{reason:e}})),notifyClosed:()=>{},notifyClosing:()=>{this.open=!1},notifyOpened:()=>{},notifyOpening:()=>{this.open=!0}}}show(){this.open=!0}close(e=l.UNSPECIFIED){this.reason=e,this.open=!1}async firstUpdated(){this.mdcFoundation!==void 0&&this.mdcFoundation.destroy(),this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.open&&this.mdcFoundation.open()}}c([y(".mdc-banner")],o.prototype,"mdcRoot",2);c([y(".mdc-banner__content")],o.prototype,"mdcContent",2);c([d({type:Boolean,reflect:!0}),E(function(a){this.mdcFoundation&&(a?this.mdcFoundation.open():(this.mdcFoundation.close(this.reason),this.reason=l.UNSPECIFIED))})],o.prototype,"open",2);c([d({type:String})],o.prototype,"titleText",2);c([d({type:String})],o.prototype,"descriptionText",2);c([d({type:String})],o.prototype,"icon",2);c([d({type:String})],o.prototype,"iconAriaLabel",2);c([d({type:Boolean})],o.prototype,"inline",2);c([d()],o.prototype,"state",2);const O=`:host .mdc-banner__graphic{color:#fff;color:var(--mdc-theme-surface, #fff)}:host .mdc-banner__graphic{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}:host .mdc-banner__content,:host .mdc-banner__fixed{min-width:344px}@media (max-width: 480px),(max-width: 344px){:host .mdc-banner__content,:host .mdc-banner__fixed{min-width:100%}}:host .mdc-banner__content{max-width:720px}:host .mdc-banner{z-index:1;border-bottom-style:solid;box-sizing:border-box;display:none;flex-shrink:0;height:0;position:relative;width:100%}@media (max-width: 480px){:host .mdc-banner .mdc-banner__fixed{left:0;right:0}:host .mdc-banner .mdc-banner__text{margin-left:16px;margin-right:36px}[dir=rtl] :host .mdc-banner .mdc-banner__text,:host .mdc-banner .mdc-banner__text[dir=rtl]{margin-left:36px;margin-right:16px}}@media (max-width: 480px){:host .mdc-banner.mdc-banner--mobile-stacked .mdc-banner__content{flex-wrap:wrap}:host .mdc-banner.mdc-banner--mobile-stacked .mdc-banner__graphic{margin-bottom:12px}:host .mdc-banner.mdc-banner--mobile-stacked .mdc-banner__text{margin-left:16px;margin-right:8px;padding-bottom:4px}[dir=rtl] :host .mdc-banner.mdc-banner--mobile-stacked .mdc-banner__text,:host .mdc-banner.mdc-banner--mobile-stacked .mdc-banner__text[dir=rtl]{margin-left:8px;margin-right:16px}:host .mdc-banner.mdc-banner--mobile-stacked .mdc-banner__actions{margin-left:auto}}:host .mdc-banner--opening,:host .mdc-banner--open,:host .mdc-banner--closing{display:flex}:host .mdc-banner--open{transition:height .3s ease}:host .mdc-banner--open .mdc-banner__content{transition:transform .3s ease;transform:translateY(0)}:host .mdc-banner--closing{transition:height .25s ease}:host .mdc-banner--closing .mdc-banner__content{transition:transform .25s ease}:host .mdc-banner--centered .mdc-banner__content{left:0;margin-left:auto;margin-right:auto;right:0}:host .mdc-banner__fixed{border-bottom-style:solid;box-sizing:border-box;height:inherit;position:fixed;width:100%}:host .mdc-banner__content{display:flex;min-height:52px;position:absolute;transform:translateY(-100%);width:100%}:host .mdc-banner__graphic-text-wrapper{display:flex;width:100%}:host .mdc-banner__graphic{margin:16px 0 16px 16px;flex-shrink:0;text-align:center}[dir=rtl] :host .mdc-banner__graphic,:host .mdc-banner__graphic[dir=rtl]{margin-left:0;margin-right:16px}:host .mdc-banner__icon{position:relative;top:50%;transform:translateY(-50%)}:host .mdc-banner__text{margin-left:24px;margin-right:90px;align-self:center;flex-grow:1;padding-top:16px;padding-bottom:16px}[dir=rtl] :host .mdc-banner__text,:host .mdc-banner__text[dir=rtl]{margin-left:90px;margin-right:24px}:host .mdc-banner__actions{padding:8px 8px 8px 0;align-self:flex-end;display:flex;flex-shrink:0}[dir=rtl] :host .mdc-banner__actions,:host .mdc-banner__actions[dir=rtl]{padding-left:8px;padding-right:0}:host .mdc-banner{background-color:#fff;background-color:var(--mdc-banner-container-color, #fff);border-bottom-color:#0000001f;border-bottom-color:var(--mdc-banner-divider-color, rgba(0, 0, 0, .12));border-bottom-width:1px;border-bottom-width:var(--mdc-banner-divider-height, 1px);border-radius:0;border-radius:var(--mdc-banner-container-shape, 0)}:host .mdc-banner .mdc-banner__text{color:#000;color:var(--mdc-banner-supporting-text-color, #000)}:host .mdc-banner .mdc-banner__text{letter-spacing:.0178571429em;letter-spacing:var(--mdc-banner-supporting-text-tracking, .0178571429em);font-size:.875rem;font-size:var(--mdc-banner-supporting-text-size, .875rem);font-family:Roboto,sans-serif;font-family:var(--mdc-banner-supporting-text-font, Roboto, sans-serif);font-weight:400;font-weight:var(--mdc-banner-supporting-text-weight, 400);line-height:1.25rem;line-height:var(--mdc-banner-supporting-text-line-height, 1.25rem)}:host .mdc-banner .mdc-banner__graphic{border-radius:50%;border-radius:var(--mdc-banner-with-image-image-shape, 50%)}:host .mdc-banner .mdc-banner__graphic{height:40px;height:var(--mdc-banner-with-image-image-size, 40px);width:40px;width:var(--mdc-banner-with-image-image-size, 40px)}:host .mdc-banner .mdc-banner__fixed{background-color:#fff;background-color:var(--mdc-banner-container-color, #fff)}:host .mdc-banner .mdc-banner__fixed{border-bottom-color:#0000001f;border-bottom-color:var(--mdc-banner-divider-color, rgba(0, 0, 0, .12))}:host .mdc-banner .mdc-banner__fixed{border-bottom-width:1px;border-bottom-width:var(--mdc-banner-divider-height, 1px)}:host .mdc-banner .mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-text-button-label-text-color, var(--mdc-banner-action-label-text-color, #6200ee))}:host .mdc-banner .mdc-button .mdc-button__ripple:before{background-color:#6200ee;background-color:var(--mdc-text-button-hover-state-layer-color, var(--mdc-banner-action-hover-state-layer-color, #6200ee))}:host .mdc-banner .mdc-button .mdc-button__ripple:after{background-color:#6200ee;background-color:var(--mdc-text-button-pressed-state-layer-color, var(--mdc-banner-action-pressed-state-layer-color, #6200ee))}:host .mdc-banner .mdc-button:hover .mdc-button__ripple:before,:host .mdc-banner .mdc-button.mdc-ripple-surface--hover .mdc-button__ripple:before{opacity:.04;opacity:var(--mdc-text-button-hover-state-layer-opacity, var(--mdc-banner-action-hover-state-layer-opacity, .04))}:host .mdc-banner .mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__ripple:before,:host .mdc-banner .mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-text-button-focus-state-layer-opacity, var(--mdc-banner-action-focus-state-layer-opacity, .12))}:host .mdc-banner .mdc-button:not(.mdc-ripple-upgraded) .mdc-button__ripple:after{transition:opacity .15s linear}:host .mdc-banner .mdc-button:not(.mdc-ripple-upgraded):active .mdc-button__ripple:after{transition-duration:75ms;opacity:.1;opacity:var(--mdc-text-button-pressed-state-layer-opacity, var(--mdc-banner-action-pressed-state-layer-opacity, .1))}:host .mdc-banner .mdc-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-text-button-pressed-state-layer-opacity, var(--mdc-banner-action-pressed-state-layer-opacity, .1))}:host .mdc-banner__secondary-action{margin-left:0;margin-right:8px}[dir=rtl] :host .mdc-banner__secondary-action,:host .mdc-banner__secondary-action[dir=rtl]{margin-left:8px;margin-right:0}:host .mdc-banner{--mdc-theme-surface: var(--mdc-theme-surface-neutral);background-color:var(--mdc-theme-surface)}:host .mdc-banner .mdc-banner__graphic{--mdc-theme-surface: var(--mdc-theme-text-icon-on-background)}:host .mdc-banner .mdc-banner__text{color:var(--mdc-theme-text-primary-on-background)}:host .mdc-banner .mdc-banner__text .mdc-typography--body2{font-family:var(--mdc-typography-body2-font-family);font-size:var(--mdc-typography-body2-font-size);font-weight:700;line-height:var(--mdc-typography-body2-line-height)}:host .mdc-banner .mdc-banner__text .mdc-typography--body1{color:var(--mdc-theme-text-secondary-on-background);font-family:var(--mdc-typography-body1-font-family);font-size:var(--mdc-typography-body1-font-size);font-weight:var(--mdc-typography-body1-font-weight);line-height:var(--mdc-typography-body1-line-height)}:host .mdc-banner.caution{--mdc-theme-surface: var(--mdc-theme-surface-caution)}:host .mdc-banner.caution.cv-banner--inline{--mdc-theme-surface: var(--mdc-theme-surface-caution-highlight)}:host .mdc-banner.caution.cv-banner--inline .mdc-banner__graphic,:host .mdc-banner.caution.cv-banner--inline .mdc-banner__text{--mdc-theme-surface: var(--mdc-theme-caution);--mdc-theme-text-primary-on-background: var(--mdc-theme-caution)}:host .mdc-banner.negative{--mdc-theme-surface: var(--mdc-theme-surface-negative)}:host .mdc-banner.negative.cv-banner--inline{--mdc-theme-surface: var(--mdc-theme-surface-negative-highlight)}:host .mdc-banner.negative.cv-banner--inline .mdc-banner__graphic,:host .mdc-banner.negative.cv-banner--inline .mdc-banner__text{--mdc-theme-surface: var(--mdc-theme-negative);--mdc-theme-text-primary-on-background: var(--mdc-theme-negative)}:host .mdc-banner.active{--mdc-theme-surface: var(--mdc-theme-surface-secondary)}:host .mdc-banner.active.cv-banner--inline{--mdc-theme-surface: var(--mdc-theme-surface-secondary-highlight)}:host .mdc-banner.active.cv-banner--inline .mdc-banner__graphic,:host .mdc-banner.active.cv-banner--inline .mdc-banner__text{--mdc-theme-surface: var(--mdc-theme-secondary);--mdc-theme-text-primary-on-background: var(--mdc-theme-secondary)}:host .mdc-banner.positive{--mdc-theme-surface: var(--mdc-theme-surface-positive)}:host .mdc-banner.positive.cv-banner--inline{--mdc-theme-surface: var(--mdc-theme-surface-positive-highlight)}:host .mdc-banner.positive.cv-banner--inline .mdc-banner__graphic,:host .mdc-banner.positive.cv-banner--inline .mdc-banner__text{--mdc-theme-surface: var(--mdc-theme-positive);--mdc-theme-text-primary-on-background: var(--mdc-theme-positive)}:host .mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity .28s cubic-bezier(.4,0,.2,1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}:host .mdc-banner{border-radius:8px;position:relative;box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f;overflow:hidden;border:none}:host .mdc-banner .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}:host .mdc-banner .mdc-banner__content{max-width:inherit}:host .mdc-banner .mdc-banner__graphic{background:none;margin-left:24px;width:24px}:host .mdc-banner .mdc-banner__text{margin-left:24px}:host .mdc-banner .mdc-banner__actions{align-self:center;align-items:center}:host .mdc-banner.cv-banner--inline{border-radius:0;box-shadow:0 0 #0003,0 0 #00000024,0 0 #0000001f}:host ::slotted(*){margin-left:8px}
`;var S=Object.defineProperty,D=Object.getOwnPropertyDescriptor,L=(a,e,r,t)=>{for(var n=t>1?void 0:t?D(e,r):e,i=a.length-1,s;i>=0;i--)(s=a[i])&&(n=(t?s(e,r,n):s(n))||n);return t&&n&&S(e,r,n),n};let h=class extends o{};h.styles=[$`
      ${k(O)}
    `];h=L([C("cv-alert")],h);const q={title:"Components/Alert",parameters:{layout:"padded"},argTypes:{state:{options:["neutral","active","positive","negative","caution"],control:{type:"select"}},actionElement:{options:["button","close icon","none"],control:{type:"select"}}},args:{title:"Alert title",description:"Alert description",state:"active",actionElement:"button"}},b=({title:a,description:e,state:r,icon:t,actionElement:n,inline:i})=>{switch(r){case"positive":t="check";break;case"negative":t="error";break;case"caution":t="warning";break;case"active":default:t="info"}return`
        <cv-alert
          titleText="${a}"
          descriptionText="${e}"
          state="${r}"
          ${t?`icon="${t}"`:""}
          ${t?`iconAriaLabel="${t}"`:""}
          ${i?"inline":""}>
          ${n==="button"?'<cv-button slot="action-items">Button Text</cv-button>':""}
          ${n==="close icon"?'<cv-icon-button slot="action-items" icon="close"></cv-icon-button>':""}
        </cv-alert>`},m=b.bind({});m.args={inline:!0};m.parameters={layout:"fullscreen"};var g,v,u;b.parameters={...b.parameters,docs:{...(g=b.parameters)==null?void 0:g.docs,source:{originalSource:`({
  title,
  description,
  state,
  icon,
  actionElement,
  inline
}) => {
  switch (state) {
    case 'positive':
      icon = 'check';
      break;
    case 'negative':
      icon = 'error';
      break;
    case 'caution':
      icon = 'warning';
      break;
    case 'active':
    default:
      icon = 'info';
  }
  return \`
        <cv-alert
          titleText="\${title}"
          descriptionText="\${description}"
          state="\${state}"
          \${icon ? \`icon="\${icon}"\` : ''}
          \${icon ? \`iconAriaLabel="\${icon}"\` : ''}
          \${inline ? \`inline\` : ''}>
          \${actionElement === 'button' ? \`<cv-button slot="action-items">Button Text</cv-button>\` : ''}
          \${actionElement === 'close icon' ? \`<cv-icon-button slot="action-items" icon="close"></cv-icon-button>\` : ''}
        </cv-alert>\`;
}`,...(u=(v=b.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var f,_,x;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`({
  title,
  description,
  state,
  icon,
  actionElement,
  inline
}) => {
  switch (state) {
    case 'positive':
      icon = 'check';
      break;
    case 'negative':
      icon = 'error';
      break;
    case 'caution':
      icon = 'warning';
      break;
    case 'active':
    default:
      icon = 'info';
  }
  return \`
        <cv-alert
          titleText="\${title}"
          descriptionText="\${description}"
          state="\${state}"
          \${icon ? \`icon="\${icon}"\` : ''}
          \${icon ? \`iconAriaLabel="\${icon}"\` : ''}
          \${inline ? \`inline\` : ''}>
          \${actionElement === 'button' ? \`<cv-button slot="action-items">Button Text</cv-button>\` : ''}
          \${actionElement === 'close icon' ? \`<cv-icon-button slot="action-items" icon="close"></cv-icon-button>\` : ''}
        </cv-alert>\`;
}`,...(x=(_=m.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};const G=["PageLevel","Inline"];export{m as Inline,b as PageLevel,G as __namedExportsOrder,q as default};
