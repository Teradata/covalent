import{s as m,x as d,i as b,r as f,e as R}from"./query-assigned-elements-CymsZmtQ.js";import{_ as s}from"./tslib.es6-B8g9kRRR.js";import{e as v,R as $}from"./ripple-handlers-Gu4a3Vem.js";import{a as h}from"./aria-property-BYXgNswj.js";import{n as o}from"./property-jaip2ZBL.js";import{t as y}from"./state-C-wh0DpU.js";import{e as c}from"./event-options-Dr5E6kGq.js";import{i as H}from"./query-BNmDdGNL.js";import{l as w}from"./if-defined-GlF589cx.js";import{s as P}from"./mwc-icon-button.css-Fu8EP9K0.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class t extends m{constructor(){super(...arguments),this.disabled=!1,this.icon="",this.shouldRenderRipple=!1,this.rippleHandlers=new $(()=>(this.shouldRenderRipple=!0,this.ripple))}renderRipple(){return this.shouldRenderRipple?d`
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
  </button>`}handleRippleMouseDown(e){const r=()=>{window.removeEventListener("mouseup",r),this.handleRippleDeactivate()};window.addEventListener("mouseup",r),this.rippleHandlers.startPress(e)}handleRippleTouchStart(e){this.rippleHandlers.startPress(e)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}s([o({type:Boolean,reflect:!0})],t.prototype,"disabled",void 0);s([o({type:String})],t.prototype,"icon",void 0);s([h,o({type:String,attribute:"aria-label"})],t.prototype,"ariaLabel",void 0);s([h,o({type:String,attribute:"aria-haspopup"})],t.prototype,"ariaHasPopup",void 0);s([H("button")],t.prototype,"buttonElement",void 0);s([v("mwc-ripple")],t.prototype,"ripple",void 0);s([y()],t.prototype,"shouldRenderRipple",void 0);s([c({passive:!0})],t.prototype,"handleRippleMouseDown",null);s([c({passive:!0})],t.prototype,"handleRippleTouchStart",null);const D=":host{color:var(--mdc-theme-text-icon-on-background)}:host .mdc-icon-button{cursor:var(--cv-icon-button-cursor, pointer)}";var E=Object.defineProperty,_=Object.getOwnPropertyDescriptor,M=(n,e,r,p)=>{for(var i=p>1?void 0:p?_(e,r):e,l=n.length-1,a;l>=0;l--)(a=n[l])&&(i=(p?a(e,r,i):a(i))||i);return p&&i&&E(e,r,i),i};let u=class extends t{};u.styles=[P,b`${f(D)}`];u=M([R("cv-icon-button")],u);
