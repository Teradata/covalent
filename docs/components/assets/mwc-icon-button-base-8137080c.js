import{_ as t}from"./tslib.es6-4b90b051.js";import{e as a,R as n}from"./ripple-handlers-20d146be.js";import{a as o}from"./aria-property-3dc182ec.js";import{s as d,x as s}from"./query-assigned-elements-9f88bee1.js";import{n as p}from"./property-f36ea729.js";import{t as u}from"./state-2a0073ff.js";import{e as l}from"./event-options-b5830ec0.js";import{i as h}from"./query-3e91a3b8.js";import{l as c}from"./if-defined-c3862b86.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class i extends d{constructor(){super(...arguments),this.disabled=!1,this.icon="",this.shouldRenderRipple=!1,this.rippleHandlers=new n(()=>(this.shouldRenderRipple=!0,this.ripple))}renderRipple(){return this.shouldRenderRipple?s`
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>`:""}focus(){const e=this.buttonElement;e&&(this.rippleHandlers.startFocus(),e.focus())}blur(){const e=this.buttonElement;e&&(this.rippleHandlers.endFocus(),e.blur())}render(){return s`<button
        class="mdc-icon-button mdc-icon-button--display-flex"
        aria-label="${this.ariaLabel||this.icon}"
        aria-haspopup="${c(this.ariaHasPopup)}"
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
    ${this.icon?s`<i class="material-icons">${this.icon}</i>`:""}
    <span
      ><slot></slot
    ></span>
  </button>`}handleRippleMouseDown(e){const r=()=>{window.removeEventListener("mouseup",r),this.handleRippleDeactivate()};window.addEventListener("mouseup",r),this.rippleHandlers.startPress(e)}handleRippleTouchStart(e){this.rippleHandlers.startPress(e)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}t([p({type:Boolean,reflect:!0})],i.prototype,"disabled",void 0);t([p({type:String})],i.prototype,"icon",void 0);t([o,p({type:String,attribute:"aria-label"})],i.prototype,"ariaLabel",void 0);t([o,p({type:String,attribute:"aria-haspopup"})],i.prototype,"ariaHasPopup",void 0);t([h("button")],i.prototype,"buttonElement",void 0);t([a("mwc-ripple")],i.prototype,"ripple",void 0);t([u()],i.prototype,"shouldRenderRipple",void 0);t([l({passive:!0})],i.prototype,"handleRippleMouseDown",null);t([l({passive:!0})],i.prototype,"handleRippleTouchStart",null);export{i as I};
//# sourceMappingURL=mwc-icon-button-base-8137080c.js.map
