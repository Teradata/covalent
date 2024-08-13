import{_ as t}from"./tslib.es6-6921e62d.js";import{e as u,R as k}from"./ripple-handlers-4e438af8.js";import{a as r}from"./aria-property-3dc182ec.js";import{F as b}from"./form-element-8fe2c680.js";import{x as l}from"./query-assigned-elements-9f88bee1.js";import{n as d}from"./property-f36ea729.js";import{t as c}from"./state-2a0073ff.js";import{e as v}from"./event-options-b5830ec0.js";import{i as h}from"./query-3e91a3b8.js";import{o as f}from"./class-map-4e4d6bc9.js";import{l as s}from"./if-defined-c3862b86.js";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class i extends b{constructor(){super(...arguments),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.name="",this.value="on",this.reducedTouchTarget=!1,this.animationClass="",this.shouldRenderRipple=!1,this.focused=!1,this.mdcFoundationClass=void 0,this.mdcFoundation=void 0,this.rippleElement=null,this.rippleHandlers=new k(()=>(this.shouldRenderRipple=!0,this.ripple.then(e=>this.rippleElement=e),this.ripple))}createAdapter(){return{}}update(e){const a=e.get("indeterminate"),n=e.get("checked"),o=e.get("disabled");if(a!==void 0||n!==void 0||o!==void 0){const p=this.calculateAnimationStateName(!!n,!!a,!!o),m=this.calculateAnimationStateName(this.checked,this.indeterminate,this.disabled);this.animationClass=`${p}-${m}`}super.update(e)}calculateAnimationStateName(e,a,n){return n?"disabled":a?"indeterminate":e?"checked":"unchecked"}renderRipple(){return this.shouldRenderRipple?this.renderRippleTemplate():""}renderRippleTemplate(){return l`<mwc-ripple
        .disabled="${this.disabled}"
        unbounded></mwc-ripple>`}render(){const e=this.indeterminate||this.checked,a={"mdc-checkbox--disabled":this.disabled,"mdc-checkbox--selected":e,"mdc-checkbox--touch":!this.reducedTouchTarget,"mdc-ripple-upgraded--background-focused":this.focused,"mdc-checkbox--anim-checked-indeterminate":this.animationClass=="checked-indeterminate","mdc-checkbox--anim-checked-unchecked":this.animationClass=="checked-unchecked","mdc-checkbox--anim-indeterminate-checked":this.animationClass=="indeterminate-checked","mdc-checkbox--anim-indeterminate-unchecked":this.animationClass=="indeterminate-unchecked","mdc-checkbox--anim-unchecked-checked":this.animationClass=="unchecked-checked","mdc-checkbox--anim-unchecked-indeterminate":this.animationClass=="unchecked-indeterminate"},n=this.indeterminate?"mixed":void 0;return l`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${f(a)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${s(this.name)}"
              aria-checked="${s(n)}"
              aria-label="${s(this.ariaLabel)}"
              aria-labelledby="${s(this.ariaLabelledBy)}"
              aria-describedby="${s(this.ariaDescribedBy)}"
              data-indeterminate="${this.indeterminate?"true":"false"}"
              ?disabled="${this.disabled}"
              .indeterminate="${this.indeterminate}"
              .checked="${this.checked}"
              .value="${this.value}"
              @change="${this.handleChange}"
              @focus="${this.handleFocus}"
              @blur="${this.handleBlur}"
              @mousedown="${this.handleRippleMouseDown}"
              @mouseenter="${this.handleRippleMouseEnter}"
              @mouseleave="${this.handleRippleMouseLeave}"
              @touchstart="${this.handleRippleTouchStart}"
              @touchend="${this.handleRippleDeactivate}"
              @touchcancel="${this.handleRippleDeactivate}">
        <div class="mdc-checkbox__background"
          @animationend="${this.resetAnimationClass}">
          <svg class="mdc-checkbox__checkmark"
              viewBox="0 0 24 24">
            <path class="mdc-checkbox__checkmark-path"
                  fill="none"
                  d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
          </svg>
          <div class="mdc-checkbox__mixedmark"></div>
        </div>
        ${this.renderRipple()}
      </div>`}setFormData(e){this.name&&this.checked&&e.append(this.name,this.value)}handleFocus(){this.focused=!0,this.handleRippleFocus()}handleBlur(){this.focused=!1,this.handleRippleBlur()}handleRippleMouseDown(e){const a=()=>{window.removeEventListener("mouseup",a),this.handleRippleDeactivate()};window.addEventListener("mouseup",a),this.rippleHandlers.startPress(e)}handleRippleTouchStart(e){this.rippleHandlers.startPress(e)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}handleChange(){this.checked=this.formElement.checked,this.indeterminate=this.formElement.indeterminate}resetAnimationClass(){this.animationClass=""}get isRippleActive(){var e;return((e=this.rippleElement)===null||e===void 0?void 0:e.isActive)||!1}}t([h(".mdc-checkbox")],i.prototype,"mdcRoot",void 0);t([h("input")],i.prototype,"formElement",void 0);t([d({type:Boolean,reflect:!0})],i.prototype,"checked",void 0);t([d({type:Boolean})],i.prototype,"indeterminate",void 0);t([d({type:Boolean,reflect:!0})],i.prototype,"disabled",void 0);t([d({type:String,reflect:!0})],i.prototype,"name",void 0);t([d({type:String})],i.prototype,"value",void 0);t([r,d({type:String,attribute:"aria-label"})],i.prototype,"ariaLabel",void 0);t([r,d({type:String,attribute:"aria-labelledby"})],i.prototype,"ariaLabelledBy",void 0);t([r,d({type:String,attribute:"aria-describedby"})],i.prototype,"ariaDescribedBy",void 0);t([d({type:Boolean})],i.prototype,"reducedTouchTarget",void 0);t([c()],i.prototype,"animationClass",void 0);t([c()],i.prototype,"shouldRenderRipple",void 0);t([c()],i.prototype,"focused",void 0);t([u("mwc-ripple")],i.prototype,"ripple",void 0);t([v({passive:!0})],i.prototype,"handleRippleTouchStart",null);export{i as C};
