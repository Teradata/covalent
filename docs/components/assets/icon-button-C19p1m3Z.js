import{s as m,x as d,i as b,r as v,e as R}from"./query-assigned-elements-DrVEbY-Z.js";import{_ as s}from"./tslib.es6-BHOXe2z4.js";import{R as f,e as $}from"./ripple-handlers-DDpyjNEg.js";import{a as h}from"./aria-property-BYXgNswj.js";import{n as p}from"./property-jaip2ZBL.js";import{t as y}from"./state-BvMmCZpn.js";import{e as c}from"./event-options-DUJCy-Gh.js";import{i as H}from"./query-BwR-Wesx.js";import{l as w}from"./if-defined-BYt77_e6.js";import{s as P}from"./mwc-icon-button.css-BN1SKsX6.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class t extends m{constructor(){super(...arguments),this.disabled=!1,this.icon="",this.shouldRenderRipple=!1,this.rippleHandlers=new f(()=>(this.shouldRenderRipple=!0,this.ripple))}renderRipple(){return this.shouldRenderRipple?d`
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>`:""}focus(){const e=this.buttonElement;e&&(this.rippleHandlers.startFocus(),e.focus())}blur(){const e=this.buttonElement;e&&(this.rippleHandlers.endFocus(),e.blur())}render(){return d`<button
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
    ${this.icon?d`<i class="material-icons">${this.icon}</i>`:""}
    <span
      ><slot></slot
    ></span>
  </button>`}handleRippleMouseDown(e){const o=()=>{window.removeEventListener("mouseup",o),this.handleRippleDeactivate()};window.addEventListener("mouseup",o),this.rippleHandlers.startPress(e)}handleRippleTouchStart(e){this.rippleHandlers.startPress(e)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}s([p({type:Boolean,reflect:!0})],t.prototype,"disabled",void 0);s([p({type:String})],t.prototype,"icon",void 0);s([h,p({type:String,attribute:"aria-label"})],t.prototype,"ariaLabel",void 0);s([h,p({type:String,attribute:"aria-haspopup"})],t.prototype,"ariaHasPopup",void 0);s([H("button")],t.prototype,"buttonElement",void 0);s([$("mwc-ripple")],t.prototype,"ripple",void 0);s([y()],t.prototype,"shouldRenderRipple",void 0);s([c({passive:!0})],t.prototype,"handleRippleMouseDown",null);s([c({passive:!0})],t.prototype,"handleRippleTouchStart",null);const D=":host{color:var(--mdc-theme-text-icon-on-background)}:host .mdc-icon-button{cursor:var(--cv-icon-button-cursor, pointer)}";var E=Object.defineProperty,_=Object.getOwnPropertyDescriptor,M=(l,e,o,r)=>{for(var i=r>1?void 0:r?_(e,o):e,n=l.length-1,a;n>=0;n--)(a=l[n])&&(i=(r?a(e,o,i):a(i))||i);return r&&i&&E(e,o,i),i};let u=class extends t{};u.styles=[P,b`${v(D)}`];u=M([R("cv-icon-button")],u);
