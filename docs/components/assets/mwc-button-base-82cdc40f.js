import{_ as t}from"./tslib.es6-4b90b051.js";import"./mwc-icon-6ece1001.js";import{e as r,R as p}from"./ripple-handlers-20d146be.js";import{a}from"./aria-property-3dc182ec.js";import{s as d,x as s}from"./query-assigned-elements-9f88bee1.js";import{n as i}from"./property-f36ea729.js";import{t as h}from"./state-2a0073ff.js";import{e as u}from"./event-options-b5830ec0.js";import{i as c}from"./query-3e91a3b8.js";import{o as l}from"./class-map-018c3a6a.js";import{l as m}from"./if-defined-c3862b86.js";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class e extends d{constructor(){super(...arguments),this.raised=!1,this.unelevated=!1,this.outlined=!1,this.dense=!1,this.disabled=!1,this.trailingIcon=!1,this.fullwidth=!1,this.icon="",this.label="",this.expandContent=!1,this.shouldRenderRipple=!1,this.rippleHandlers=new p(()=>(this.shouldRenderRipple=!0,this.ripple))}renderOverlay(){return s``}renderRipple(){const o=this.raised||this.unelevated;return this.shouldRenderRipple?s`<mwc-ripple class="ripple" .primary="${!o}" .disabled="${this.disabled}"></mwc-ripple>`:""}focus(){const o=this.buttonElement;o&&(this.rippleHandlers.startFocus(),o.focus())}blur(){const o=this.buttonElement;o&&(this.rippleHandlers.endFocus(),o.blur())}getRenderClasses(){return{"mdc-button--raised":this.raised,"mdc-button--unelevated":this.unelevated,"mdc-button--outlined":this.outlined,"mdc-button--dense":this.dense}}render(){return s`
      <button
          id="button"
          class="mdc-button ${l(this.getRenderClasses())}"
          ?disabled="${this.disabled}"
          aria-label="${this.label||this.icon}"
          aria-haspopup="${m(this.ariaHasPopup)}"
          @focus="${this.handleRippleFocus}"
          @blur="${this.handleRippleBlur}"
          @mousedown="${this.handleRippleActivate}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleActivate}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        ${this.renderOverlay()}
        ${this.renderRipple()}
        <span class="leading-icon">
          <slot name="icon">
            ${this.icon&&!this.trailingIcon?this.renderIcon():""}
          </slot>
        </span>
        <span class="mdc-button__label">${this.label}</span>
        <span class="slot-container ${l({flex:this.expandContent})}">
          <slot></slot>
        </span>
        <span class="trailing-icon">
          <slot name="trailingIcon">
            ${this.icon&&this.trailingIcon?this.renderIcon():""}
          </slot>
        </span>
      </button>`}renderIcon(){return s`
    <mwc-icon class="mdc-button__icon">
      ${this.icon}
    </mwc-icon>`}handleRippleActivate(o){const n=()=>{window.removeEventListener("mouseup",n),this.handleRippleDeactivate()};window.addEventListener("mouseup",n),this.rippleHandlers.startPress(o)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}e.shadowRootOptions={mode:"open",delegatesFocus:!0};t([a,i({type:String,attribute:"aria-haspopup"})],e.prototype,"ariaHasPopup",void 0);t([i({type:Boolean,reflect:!0})],e.prototype,"raised",void 0);t([i({type:Boolean,reflect:!0})],e.prototype,"unelevated",void 0);t([i({type:Boolean,reflect:!0})],e.prototype,"outlined",void 0);t([i({type:Boolean})],e.prototype,"dense",void 0);t([i({type:Boolean,reflect:!0})],e.prototype,"disabled",void 0);t([i({type:Boolean,attribute:"trailingicon"})],e.prototype,"trailingIcon",void 0);t([i({type:Boolean,reflect:!0})],e.prototype,"fullwidth",void 0);t([i({type:String})],e.prototype,"icon",void 0);t([i({type:String})],e.prototype,"label",void 0);t([i({type:Boolean})],e.prototype,"expandContent",void 0);t([c("#button")],e.prototype,"buttonElement",void 0);t([r("mwc-ripple")],e.prototype,"ripple",void 0);t([h()],e.prototype,"shouldRenderRipple",void 0);t([u({passive:!0})],e.prototype,"handleRippleActivate",null);export{e as B};
//# sourceMappingURL=mwc-button-base-82cdc40f.js.map
