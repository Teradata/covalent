import{s as g,x as u,e as f,i as R,r as v}from"./query-assigned-elements-CymsZmtQ.js";import{n as r}from"./property-jaip2ZBL.js";import{_ as e}from"./tslib.es6-B8g9kRRR.js";import{s as y}from"./mwc-icon-button.css-Fu8EP9K0.js";import{e as $,R as O}from"./ripple-handlers-Gu4a3Vem.js";import{a as w}from"./aria-property-BYXgNswj.js";import{t as L}from"./state-C-wh0DpU.js";import{e as m}from"./event-options-Dr5E6kGq.js";import{i as _}from"./query-BNmDdGNL.js";import{o as H}from"./class-map-DSF43RfV.js";import{l as h}from"./if-defined-GlF589cx.js";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class t extends g{constructor(){super(...arguments),this.disabled=!1,this.onIcon="",this.offIcon="",this.on=!1,this.shouldRenderRipple=!1,this.rippleHandlers=new O(()=>(this.shouldRenderRipple=!0,this.ripple))}handleClick(){this.on=!this.on,this.dispatchEvent(new CustomEvent("icon-button-toggle-change",{detail:{isOn:this.on},bubbles:!0}))}click(){this.mdcRoot.focus(),this.mdcRoot.click()}focus(){this.rippleHandlers.startFocus(),this.mdcRoot.focus()}blur(){this.rippleHandlers.endFocus(),this.mdcRoot.blur()}renderRipple(){return this.shouldRenderRipple?u`
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>`:""}render(){const o={"mdc-icon-button--on":this.on},n=this.ariaLabelOn!==void 0&&this.ariaLabelOff!==void 0,l=n?void 0:this.on,s=n?this.on?this.ariaLabelOn:this.ariaLabelOff:this.ariaLabel;return u`<button
          class="mdc-icon-button mdc-icon-button--display-flex ${H(o)}"
          aria-pressed="${h(l)}"
          aria-label="${h(s)}"
          @click="${this.handleClick}"
          ?disabled="${this.disabled}"
          @focus="${this.handleRippleFocus}"
          @blur="${this.handleRippleBlur}"
          @mousedown="${this.handleRippleMouseDown}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleTouchStart}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}"
        >${this.renderRipple()}
        <span class="mdc-icon-button__icon"
          ><slot name="offIcon"
            ><i class="material-icons">${this.offIcon}</i
          ></slot
        ></span>
        <span class="mdc-icon-button__icon mdc-icon-button__icon--on"
          ><slot name="onIcon"
            ><i class="material-icons">${this.onIcon}</i
          ></slot
        ></span>
      </button>`}handleRippleMouseDown(o){const n=()=>{window.removeEventListener("mouseup",n),this.handleRippleDeactivate()};window.addEventListener("mouseup",n),this.rippleHandlers.startPress(o)}handleRippleTouchStart(o){this.rippleHandlers.startPress(o)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}e([_(".mdc-icon-button")],t.prototype,"mdcRoot",void 0);e([w,r({type:String,attribute:"aria-label"})],t.prototype,"ariaLabel",void 0);e([r({type:Boolean,reflect:!0})],t.prototype,"disabled",void 0);e([r({type:String})],t.prototype,"onIcon",void 0);e([r({type:String})],t.prototype,"offIcon",void 0);e([r({type:String})],t.prototype,"ariaLabelOn",void 0);e([r({type:String})],t.prototype,"ariaLabelOff",void 0);e([r({type:Boolean,reflect:!0})],t.prototype,"on",void 0);e([$("mwc-ripple")],t.prototype,"ripple",void 0);e([L()],t.prototype,"shouldRenderRipple",void 0);e([m({passive:!0})],t.prototype,"handleRippleMouseDown",null);e([m({passive:!0})],t.prototype,"handleRippleTouchStart",null);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let a=class extends t{};a.styles=[y];a=e([f("mwc-icon-button-toggle")],a);const I=':host{border-radius:50%;color:var(--cv-theme-on-surface-variant)}:host([disabled]){background-color:transparent}:host([on]){--mdc-ripple-color: var(--cv-theme-on-surface);background-color:var(--cv-theme-secondary-container);color:var(--cv-theme-on-secondary-container)}:host([on]) .material-icons{font-variation-settings:"FILL" 1}';var B=Object.defineProperty,D=Object.getOwnPropertyDescriptor,b=(i,o,n,l)=>{for(var s=l>1?void 0:l?D(o,n):o,d=i.length-1,c;d>=0;d--)(c=i[d])&&(s=(l?c(o,n,s):c(s))||s);return l&&s&&B(o,n,s),s};let p=class extends a{constructor(){super(...arguments),this.toggledOn=!1}update(i){i.has("toggledOn")&&this.toggledOn!==this.on&&(this.on=this.toggledOn),i.has("on")&&this.toggledOn!==this.on&&(this.toggledOn=this.on),super.update(i)}renderRipple(){return this.shouldRenderRipple?u` <mwc-ripple
          .disabled="${this.disabled}"
          .activated="${this.toggledOn}"
          unbounded
        >
        </mwc-ripple>`:""}};p.styles=[...a.styles,R`
      ${v(I)}
    `];b([r({type:Boolean,reflect:!0})],p.prototype,"toggledOn",2);p=b([f("cv-icon-button-toggle")],p);
