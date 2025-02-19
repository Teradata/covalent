import{n as d,s as l,x as p,i as g,r as f,e as v}from"./query-assigned-elements-XF8sHqwE.js";import{a as _}from"./utils-DQt7ZoY7.js";import{o as u}from"./observer-D8jHVEI7.js";import{C as m,M as x,e as y}from"./foundation-CyC3Z9WI.js";import{o as w}from"./class-map-j_UyOF6B.js";import{t as k}from"./state-DigO7a43.js";import{i as b}from"./query-BIWRq3i5.js";var C=Object.defineProperty,r=(o,e,a,i)=>{for(var t=void 0,c=o.length-1,s;c>=0;c--)(s=o[c])&&(t=s(e,a,t)||t);return t&&C(e,a,t),t};class n extends l{constructor(){super(),this.mdcFoundationClass=x,this.currentWidth=0,this.open=!0,this.titleText="",this.descriptionText="",this.icon="",this.iconAriaLabel="",this.inline=!1,this.state="",this.reason=m.UNSPECIFIED,this._resizeObserver=new ResizeObserver(e=>{for(const a of e){const i=a.contentRect.width;i!==this.currentWidth&&(this.currentWidth=i,this.mdcFoundation.layout())}})}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver.disconnect()}render(){const e={"mdc-banner":!0,"cv-banner--inline":this.inline,negative:this.state==="negative",positive:this.state==="positive",caution:this.state==="caution",active:this.state==="active"};return p` <div class="${w(e)}" role="banner">
      <div
        class="mdc-banner__content"
        role="alertdialog"
        aria-live="assertive"
        aria-label="${this.titleText}"
      >
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
    </div>`}renderIcon(){return p` <div
      class="mdc-banner__graphic"
      role="img"
      aria-label="${this.iconAriaLabel}"
    >
      <slot name="icon">
        <cv-icon class="mdc-banner__icon"> ${this.icon} </cv-icon>
      </slot>
    </div>`}createAdapter(){return{..._(this.mdcRoot),getContentHeight:()=>this.mdcContent.offsetHeight,setStyleProperty:(e,a)=>{this.mdcRoot.style.setProperty(e,a)},trapFocus:()=>{},releaseFocus:()=>{},notifyActionClicked:e=>this.dispatchEvent(new CustomEvent(y.ACTION_CLICKED,{bubbles:!0,cancelable:!0,detail:{reason:e}})),notifyClosed:()=>{},notifyClosing:()=>{this.open=!1},notifyOpened:()=>{},notifyOpening:()=>{this.open=!0}}}show(){this.open=!0}close(e=m.UNSPECIFIED){this.reason=e,this.open=!1}async firstUpdated(){this.mdcFoundation!==void 0&&this.mdcFoundation.destroy(),this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.open&&this.mdcFoundation.open(),this._resizeObserver.observe(this.mdcGraphicTextWrapper)}}r([b(".mdc-banner")],n.prototype,"mdcRoot");r([b(".mdc-banner__content")],n.prototype,"mdcContent");r([b(".mdc-banner__graphic-text-wrapper")],n.prototype,"mdcGraphicTextWrapper");r([k()],n.prototype,"currentWidth");r([d({type:Boolean,reflect:!0}),u(function(o){this.mdcFoundation&&(o?this.mdcFoundation.open():(this.mdcFoundation.close(this.reason),this.reason=m.UNSPECIFIED))})],n.prototype,"open");r([d({type:String})],n.prototype,"titleText");r([d({type:String})],n.prototype,"descriptionText");r([d({type:String})],n.prototype,"icon");r([d({type:String})],n.prototype,"iconAriaLabel");r([d({type:Boolean})],n.prototype,"inline");r([d()],n.prototype,"state");const z=":host .mdc-banner__graphic{color:#fff;color:var(--mdc-theme-surface, #fff)}:host .mdc-banner__graphic{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}:host .mdc-banner__content,:host .mdc-banner__fixed{min-width:344px}@media (max-width: 480px),(max-width: 344px){:host .mdc-banner__content,:host .mdc-banner__fixed{min-width:100%}}:host .mdc-banner__content{max-width:720px}:host .mdc-banner{z-index:1;border-bottom-style:solid;box-sizing:border-box;display:none;flex-shrink:0;height:0;position:relative;width:100%}@media (max-width: 480px){:host .mdc-banner .mdc-banner__fixed{left:0;right:0}:host .mdc-banner .mdc-banner__text{margin-left:16px;margin-right:36px}[dir=rtl] :host .mdc-banner .mdc-banner__text,:host .mdc-banner .mdc-banner__text[dir=rtl]{margin-left:36px;margin-right:16px}}@media (max-width: 480px){:host .mdc-banner.mdc-banner--mobile-stacked .mdc-banner__content{flex-wrap:wrap}:host .mdc-banner.mdc-banner--mobile-stacked .mdc-banner__graphic{margin-bottom:12px}:host .mdc-banner.mdc-banner--mobile-stacked .mdc-banner__text{margin-left:16px;margin-right:8px;padding-bottom:4px}[dir=rtl] :host .mdc-banner.mdc-banner--mobile-stacked .mdc-banner__text,:host .mdc-banner.mdc-banner--mobile-stacked .mdc-banner__text[dir=rtl]{margin-left:8px;margin-right:16px}:host .mdc-banner.mdc-banner--mobile-stacked .mdc-banner__actions{margin-left:auto}}:host .mdc-banner--opening,:host .mdc-banner--open,:host .mdc-banner--closing{display:flex}:host .mdc-banner--open{transition:height .3s ease}:host .mdc-banner--open .mdc-banner__content{transition:transform .3s ease;transform:translateY(0)}:host .mdc-banner--closing{transition:height .25s ease}:host .mdc-banner--closing .mdc-banner__content{transition:transform .25s ease}:host .mdc-banner--centered .mdc-banner__content{left:0;margin-left:auto;margin-right:auto;right:0}:host .mdc-banner__fixed{border-bottom-style:solid;box-sizing:border-box;height:inherit;position:fixed;width:100%}:host .mdc-banner__content{display:flex;min-height:52px;position:absolute;transform:translateY(-100%);width:100%}:host .mdc-banner__graphic-text-wrapper{display:flex;width:100%}:host .mdc-banner__graphic{margin:16px 0 16px 16px;flex-shrink:0;text-align:center}[dir=rtl] :host .mdc-banner__graphic,:host .mdc-banner__graphic[dir=rtl]{margin-left:0;margin-right:16px}:host .mdc-banner__icon{position:relative;top:50%;transform:translateY(-50%)}:host .mdc-banner__text{margin-left:24px;margin-right:90px;align-self:center;flex-grow:1;padding-top:16px;padding-bottom:16px}[dir=rtl] :host .mdc-banner__text,:host .mdc-banner__text[dir=rtl]{margin-left:90px;margin-right:24px}:host .mdc-banner__actions{padding:8px 8px 8px 0;align-self:flex-end;display:flex;flex-shrink:0}[dir=rtl] :host .mdc-banner__actions,:host .mdc-banner__actions[dir=rtl]{padding-left:8px;padding-right:0}:host .mdc-banner{background-color:#fff;background-color:var(--mdc-banner-container-color, #fff);border-bottom-color:#0000001f;border-bottom-color:var(--mdc-banner-divider-color, rgba(0, 0, 0, .12));border-bottom-width:1px;border-bottom-width:var(--mdc-banner-divider-height, 1px);border-radius:0;border-radius:var(--mdc-banner-container-shape, 0)}:host .mdc-banner .mdc-banner__text{color:#000;color:var(--mdc-banner-supporting-text-color, #000)}:host .mdc-banner .mdc-banner__text{letter-spacing:.0178571429em;letter-spacing:var(--mdc-banner-supporting-text-tracking, .0178571429em);font-size:.875rem;font-size:var(--mdc-banner-supporting-text-size, .875rem);font-family:Roboto,sans-serif;font-family:var(--mdc-banner-supporting-text-font, Roboto, sans-serif);font-weight:400;font-weight:var(--mdc-banner-supporting-text-weight, 400);line-height:1.25rem;line-height:var(--mdc-banner-supporting-text-line-height, 1.25rem)}:host .mdc-banner .mdc-banner__graphic{border-radius:50%;border-radius:var(--mdc-banner-with-image-image-shape, 50%)}:host .mdc-banner .mdc-banner__graphic{height:40px;height:var(--mdc-banner-with-image-image-size, 40px);width:40px;width:var(--mdc-banner-with-image-image-size, 40px)}:host .mdc-banner .mdc-banner__fixed{background-color:#fff;background-color:var(--mdc-banner-container-color, #fff)}:host .mdc-banner .mdc-banner__fixed{border-bottom-color:#0000001f;border-bottom-color:var(--mdc-banner-divider-color, rgba(0, 0, 0, .12))}:host .mdc-banner .mdc-banner__fixed{border-bottom-width:1px;border-bottom-width:var(--mdc-banner-divider-height, 1px)}:host .mdc-banner .mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-text-button-label-text-color, var(--mdc-banner-action-label-text-color, #6200ee))}:host .mdc-banner .mdc-button .mdc-button__ripple:before{background-color:#6200ee;background-color:var(--mdc-text-button-hover-state-layer-color, var(--mdc-banner-action-hover-state-layer-color, #6200ee))}:host .mdc-banner .mdc-button .mdc-button__ripple:after{background-color:#6200ee;background-color:var(--mdc-text-button-pressed-state-layer-color, var(--mdc-banner-action-pressed-state-layer-color, #6200ee))}:host .mdc-banner .mdc-button:hover .mdc-button__ripple:before,:host .mdc-banner .mdc-button.mdc-ripple-surface--hover .mdc-button__ripple:before{opacity:.04;opacity:var(--mdc-text-button-hover-state-layer-opacity, var(--mdc-banner-action-hover-state-layer-opacity, .04))}:host .mdc-banner .mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__ripple:before,:host .mdc-banner .mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-text-button-focus-state-layer-opacity, var(--mdc-banner-action-focus-state-layer-opacity, .12))}:host .mdc-banner .mdc-button:not(.mdc-ripple-upgraded) .mdc-button__ripple:after{transition:opacity .15s linear}:host .mdc-banner .mdc-button:not(.mdc-ripple-upgraded):active .mdc-button__ripple:after{transition-duration:75ms;opacity:.1;opacity:var(--mdc-text-button-pressed-state-layer-opacity, var(--mdc-banner-action-pressed-state-layer-opacity, .1))}:host .mdc-banner .mdc-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-text-button-pressed-state-layer-opacity, var(--mdc-banner-action-pressed-state-layer-opacity, .1))}:host .mdc-banner__secondary-action{margin-left:0;margin-right:8px}[dir=rtl] :host .mdc-banner__secondary-action,:host .mdc-banner__secondary-action[dir=rtl]{margin-left:8px;margin-right:0}:host .mdc-banner{--mdc-theme-surface: var(--mdc-theme-surface-neutral);background-color:var(--mdc-theme-surface)}:host .mdc-banner .mdc-banner__graphic{--mdc-theme-surface: var(--mdc-theme-text-icon-on-background)}:host .mdc-banner .mdc-banner__text{color:var(--mdc-theme-text-primary-on-background)}:host .mdc-banner .mdc-banner__text .mdc-typography--body2{font-family:var(--mdc-typography-body2-font-family);font-size:var(--mdc-typography-body2-font-size);font-weight:700;line-height:var(--mdc-typography-body2-line-height)}:host .mdc-banner .mdc-banner__text .mdc-typography--body1{color:var(--mdc-theme-text-secondary-on-background);font-family:var(--mdc-typography-body1-font-family);font-size:var(--mdc-typography-body1-font-size);font-weight:var(--mdc-typography-body1-font-weight);line-height:var(--mdc-typography-body1-line-height)}:host .mdc-banner.caution{--mdc-theme-surface: var(--mdc-theme-surface-caution)}:host .mdc-banner.caution.cv-banner--inline{--mdc-theme-surface: var(--mdc-theme-surface-caution-highlight)}:host .mdc-banner.caution.cv-banner--inline .mdc-banner__graphic,:host .mdc-banner.caution.cv-banner--inline .mdc-banner__text{--mdc-theme-surface: var(--mdc-theme-caution);--mdc-theme-text-primary-on-background: var(--mdc-theme-caution)}:host .mdc-banner.negative{--mdc-theme-surface: var(--mdc-theme-surface-negative)}:host .mdc-banner.negative.cv-banner--inline{--mdc-theme-surface: var(--mdc-theme-surface-negative-highlight)}:host .mdc-banner.negative.cv-banner--inline .mdc-banner__graphic,:host .mdc-banner.negative.cv-banner--inline .mdc-banner__text{--mdc-theme-surface: var(--mdc-theme-negative);--mdc-theme-text-primary-on-background: var(--mdc-theme-negative)}:host .mdc-banner.active{--mdc-theme-surface: var(--mdc-theme-surface-secondary)}:host .mdc-banner.active.cv-banner--inline{--mdc-theme-surface: var(--mdc-theme-surface-secondary-highlight)}:host .mdc-banner.active.cv-banner--inline .mdc-banner__graphic,:host .mdc-banner.active.cv-banner--inline .mdc-banner__text{--mdc-theme-surface: var(--mdc-theme-secondary);--mdc-theme-text-primary-on-background: var(--mdc-theme-secondary)}:host .mdc-banner.positive{--mdc-theme-surface: var(--mdc-theme-surface-positive)}:host .mdc-banner.positive.cv-banner--inline{--mdc-theme-surface: var(--mdc-theme-surface-positive-highlight)}:host .mdc-banner.positive.cv-banner--inline .mdc-banner__graphic,:host .mdc-banner.positive.cv-banner--inline .mdc-banner__text{--mdc-theme-surface: var(--mdc-theme-positive);--mdc-theme-text-primary-on-background: var(--mdc-theme-positive)}:host .mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity .28s cubic-bezier(.4,0,.2,1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}:host .mdc-banner{border-radius:8px;position:relative;box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f;overflow:hidden;border:none}:host .mdc-banner .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}:host .mdc-banner .mdc-banner__content{max-width:inherit}:host .mdc-banner .mdc-banner__graphic{background:none;margin-left:24px;width:24px}:host .mdc-banner .mdc-banner__text{margin-left:24px}:host .mdc-banner .mdc-banner__actions{align-self:center;align-items:center}:host .mdc-banner.cv-banner--inline{border-radius:0;box-shadow:0 0 #0003,0 0 #00000024,0 0 #0000001f}:host ::slotted(*){margin-left:8px}";var F=Object.defineProperty,O=Object.getOwnPropertyDescriptor,P=(o,e,a,i)=>{for(var t=i>1?void 0:i?O(e,a):e,c=o.length-1,s;c>=0;c--)(s=o[c])&&(t=(i?s(e,a,t):s(t))||t);return i&&t&&F(e,a,t),t};let h=class extends n{};h.styles=[g`
      ${f(z)}
    `];h=P([v("cv-alert")],h);
