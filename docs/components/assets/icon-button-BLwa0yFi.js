import{n as r,s as m,x as l,r as v,i as b,e as R}from"./query-assigned-elements-BJdb4KNY.js";import{b as o}from"./tslib.es6-X4n3o5C8.js";import{e as f,R as y}from"./ripple-handlers-_TDZG32v.js";import{a as c}from"./aria-property-BYXgNswj.js";import{t as $}from"./state-CGn7W7VL.js";import{e as h}from"./event-options-CZVCfsC0.js";import{i as H}from"./query-pFbEai1B.js";import{l as w}from"./if-defined-dAx6j6jI.js";import{s as D}from"./mwc-icon-button.css-DLV-hkFx.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class t extends m{constructor(){super(...arguments),this.disabled=!1,this.icon="",this.shouldRenderRipple=!1,this.rippleHandlers=new y(()=>(this.shouldRenderRipple=!0,this.ripple))}renderRipple(){return this.shouldRenderRipple?l`
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>`:""}focus(){const e=this.buttonElement;e&&(this.rippleHandlers.startFocus(),e.focus())}blur(){const e=this.buttonElement;e&&(this.rippleHandlers.endFocus(),e.blur())}render(){return l`<button
        class="mdc-icon-button mdc-icon-button--display-flex"
        aria-label="${this.ariaLabel||this.icon}"
        aria-haspopup="${w(this.ariaHasPopup)}"
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
    ${this.icon?l`<i class="material-icons">${this.icon}</i>`:""}
    <span
      ><slot></slot
    ></span>
  </button>`}handleRippleMouseDown(e){const s=()=>{window.removeEventListener("mouseup",s),this.handleRippleDeactivate()};window.addEventListener("mouseup",s),this.rippleHandlers.startPress(e)}handleRippleTouchStart(e){this.rippleHandlers.startPress(e)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}o([r({type:Boolean,reflect:!0})],t.prototype,"disabled",void 0);o([r({type:String})],t.prototype,"icon",void 0);o([c,r({type:String,attribute:"aria-label"})],t.prototype,"ariaLabel",void 0);o([c,r({type:String,attribute:"aria-haspopup"})],t.prototype,"ariaHasPopup",void 0);o([H("button")],t.prototype,"buttonElement",void 0);o([f("mwc-ripple")],t.prototype,"ripple",void 0);o([$()],t.prototype,"shouldRenderRipple",void 0);o([h({passive:!0})],t.prototype,"handleRippleMouseDown",null);o([h({passive:!0})],t.prototype,"handleRippleTouchStart",null);const E=':host{--mdc-icon-button-size: calc(48px + var(--cv-density-mode, 0) * var(--cv-density-interval, 4px));color:var(--mdc-theme-text-icon-on-background)}:host .mdc-icon-button{cursor:var(--cv-icon-button-cursor, pointer)}:host .mdc-icon-button:active,:host .mdc-icon-button:focus{font-variation-settings:"FILL" 1}:host .mdc-icon-button:disabled{cursor:default;color:var(--cv-theme-on-surface-38)}';var g=Object.getOwnPropertyDescriptor,L=(p,e,s,d)=>{for(var i=d>1?void 0:d?g(e,s):e,n=p.length-1,u;n>=0;n--)(u=p[n])&&(i=u(i)||i);return i};let a=class extends t{};a.styles=[D,b`${v(E)}`];a=L([R("cv-icon-button")],a);
