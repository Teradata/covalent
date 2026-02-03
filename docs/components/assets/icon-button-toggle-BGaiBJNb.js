import{n as r,s as f,x as h,e as m,r as g,i as R}from"./query-assigned-elements-BJdb4KNY.js";import{b as e}from"./tslib.es6-X4n3o5C8.js";import{s as y}from"./mwc-icon-button.css-DLV-hkFx.js";import{e as $,R as O}from"./ripple-handlers-_TDZG32v.js";import{a as w}from"./aria-property-BYXgNswj.js";import{t as L}from"./state-CGn7W7VL.js";import{e as v}from"./event-options-CZVCfsC0.js";import{i as _}from"./query-pFbEai1B.js";import{o as H}from"./class-map-LmxYoNzI.js";import{l as u}from"./if-defined-dAx6j6jI.js";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class t extends f{constructor(){super(...arguments),this.disabled=!1,this.onIcon="",this.offIcon="",this.on=!1,this.shouldRenderRipple=!1,this.rippleHandlers=new O(()=>(this.shouldRenderRipple=!0,this.ripple))}handleClick(){this.on=!this.on,this.dispatchEvent(new CustomEvent("icon-button-toggle-change",{detail:{isOn:this.on},bubbles:!0}))}click(){this.mdcRoot.focus(),this.mdcRoot.click()}focus(){this.rippleHandlers.startFocus(),this.mdcRoot.focus()}blur(){this.rippleHandlers.endFocus(),this.mdcRoot.blur()}renderRipple(){return this.shouldRenderRipple?h`
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>`:""}render(){const o={"mdc-icon-button--on":this.on},s=this.ariaLabelOn!==void 0&&this.ariaLabelOff!==void 0,l=s?void 0:this.on,i=s?this.on?this.ariaLabelOn:this.ariaLabelOff:this.ariaLabel;return h`<button
          class="mdc-icon-button mdc-icon-button--display-flex ${H(o)}"
          aria-pressed="${u(l)}"
          aria-label="${u(i)}"
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
      </button>`}handleRippleMouseDown(o){const s=()=>{window.removeEventListener("mouseup",s),this.handleRippleDeactivate()};window.addEventListener("mouseup",s),this.rippleHandlers.startPress(o)}handleRippleTouchStart(o){this.rippleHandlers.startPress(o)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}e([_(".mdc-icon-button")],t.prototype,"mdcRoot",void 0);e([w,r({type:String,attribute:"aria-label"})],t.prototype,"ariaLabel",void 0);e([r({type:Boolean,reflect:!0})],t.prototype,"disabled",void 0);e([r({type:String})],t.prototype,"onIcon",void 0);e([r({type:String})],t.prototype,"offIcon",void 0);e([r({type:String})],t.prototype,"ariaLabelOn",void 0);e([r({type:String})],t.prototype,"ariaLabelOff",void 0);e([r({type:Boolean,reflect:!0})],t.prototype,"on",void 0);e([$("mwc-ripple")],t.prototype,"ripple",void 0);e([L()],t.prototype,"shouldRenderRipple",void 0);e([v({passive:!0})],t.prototype,"handleRippleMouseDown",null);e([v({passive:!0})],t.prototype,"handleRippleTouchStart",null);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let a=class extends t{};a.styles=[y];a=e([m("mwc-icon-button-toggle")],a);const I=':host{--mdc-icon-button-size: calc(48px + var(--cv-density-mode, 0) * var(--cv-density-interval, 4px));border-radius:50%;color:var(--cv-theme-on-surface-variant)}:host([disabled]){background-color:transparent}:host([on]){--mdc-ripple-color: var(--cv-theme-on-surface);background-color:var(--cv-theme-secondary-container);color:var(--cv-theme-on-secondary-container)}:host([on]) .material-icons{font-variation-settings:"FILL" 1}';var B=Object.defineProperty,D=Object.getOwnPropertyDescriptor,b=(n,o,s,l)=>{for(var i=l>1?void 0:l?D(o,s):o,d=n.length-1,c;d>=0;d--)(c=n[d])&&(i=(l?c(o,s,i):c(i))||i);return l&&i&&B(o,s,i),i};let p=class extends a{constructor(){super(...arguments),this.toggledOn=!1}update(n){n.has("toggledOn")&&this.toggledOn!==this.on&&(this.on=this.toggledOn),n.has("on")&&this.toggledOn!==this.on&&(this.toggledOn=this.on),super.update(n)}renderRipple(){return this.shouldRenderRipple?h` <mwc-ripple
          .disabled="${this.disabled}"
          .activated="${this.toggledOn}"
          unbounded
        >
        </mwc-ripple>`:""}};p.styles=[...a.styles,R`
      ${g(I)}
    `];b([r({type:Boolean,reflect:!0})],p.prototype,"toggledOn",2);p=b([m("cv-icon-button-toggle")],p);
