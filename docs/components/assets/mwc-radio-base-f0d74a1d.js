import{a as v,b as c,_ as i}from"./tslib.es6-4b90b051.js";import{e as g,R as y}from"./ripple-handlers-20d146be.js";import{a as f}from"./aria-property-3dc182ec.js";import{F as R}from"./form-element-d2a726aa.js";import{o as m}from"./observer-1f401936.js";import{x as u}from"./query-assigned-elements-9f88bee1.js";import{n as a}from"./property-f36ea729.js";import{t as l}from"./state-2a0073ff.js";import{e as C}from"./event-options-b5830ec0.js";import{i as b}from"./query-3e91a3b8.js";import{o as E}from"./class-map-018c3a6a.js";import{l as h}from"./if-defined-c3862b86.js";import{a as k}from"./utils-529e1a6d.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const p=Symbol("selection controller");class _{constructor(){this.selected=null,this.ordered=null,this.set=new Set}}class d{constructor(e){this.sets={},this.focusedSet=null,this.mouseIsDown=!1,this.updating=!1,e.addEventListener("keydown",t=>{this.keyDownHandler(t)}),e.addEventListener("mousedown",()=>{this.mousedownHandler()}),e.addEventListener("mouseup",()=>{this.mouseupHandler()})}static getController(e){const s=!("global"in e)||"global"in e&&e.global?document:e.getRootNode();let n=s[p];return n===void 0&&(n=new d(s),s[p]=n),n}keyDownHandler(e){const t=e.target;"checked"in t&&this.has(t)&&(e.key=="ArrowRight"||e.key=="ArrowDown"?this.selectNext(t):(e.key=="ArrowLeft"||e.key=="ArrowUp")&&this.selectPrevious(t))}mousedownHandler(){this.mouseIsDown=!0}mouseupHandler(){this.mouseIsDown=!1}has(e){return this.getSet(e.name).set.has(e)}selectPrevious(e){const t=this.getOrdered(e),s=t.indexOf(e),n=t[s-1]||t[t.length-1];return this.select(n),n}selectNext(e){const t=this.getOrdered(e),s=t.indexOf(e),n=t[s+1]||t[0];return this.select(n),n}select(e){e.click()}focus(e){if(this.mouseIsDown)return;const t=this.getSet(e.name),s=this.focusedSet;this.focusedSet=t,s!=t&&t.selected&&t.selected!=e&&t.selected.focus()}isAnySelected(e){const t=this.getSet(e.name);for(const s of t.set)if(s.checked)return!0;return!1}getOrdered(e){const t=this.getSet(e.name);return t.ordered||(t.ordered=Array.from(t.set),t.ordered.sort((s,n)=>s.compareDocumentPosition(n)==Node.DOCUMENT_POSITION_PRECEDING?1:0)),t.ordered}getSet(e){return this.sets[e]||(this.sets[e]=new _),this.sets[e]}register(e){const t=e.name||e.getAttribute("name")||"",s=this.getSet(t);s.set.add(e),s.ordered=null}unregister(e){const t=this.getSet(e.name);t.set.delete(e),t.ordered=null,t.selected==e&&(t.selected=null)}update(e){if(this.updating)return;this.updating=!0;const t=this.getSet(e.name);if(e.checked){for(const s of t.set)s!=e&&(s.checked=!1);t.selected=e}if(this.isAnySelected(e))for(const s of t.set){if(s.formElementTabIndex===void 0)break;s.formElementTabIndex=s.checked?0:-1}this.updating=!1}}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var D=function(){function r(e){e===void 0&&(e={}),this.adapter=e}return Object.defineProperty(r,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(r,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(r,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(r,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),r.prototype.init=function(){},r.prototype.destroy=function(){},r}();/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var S={NATIVE_CONTROL_SELECTOR:".mdc-radio__native-control"},w={DISABLED:"mdc-radio--disabled",ROOT:"mdc-radio"};/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var $=function(r){v(e,r);function e(t){return r.call(this,c(c({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return w},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return S},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNativeControlDisabled:function(){}}},enumerable:!1,configurable:!0}),e.prototype.setDisabled=function(t){var s=e.cssClasses.DISABLED;this.adapter.setNativeControlDisabled(t),t?this.adapter.addClass(s):this.adapter.removeClass(s)},e}(D);const O=$;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class o extends R{constructor(){super(...arguments),this._checked=!1,this.useStateLayerCustomProperties=!1,this.global=!1,this.disabled=!1,this.value="on",this.name="",this.reducedTouchTarget=!1,this.mdcFoundationClass=O,this.formElementTabIndex=0,this.focused=!1,this.shouldRenderRipple=!1,this.rippleElement=null,this.rippleHandlers=new y(()=>(this.shouldRenderRipple=!0,this.ripple.then(e=>{this.rippleElement=e}),this.ripple))}get checked(){return this._checked}set checked(e){var t,s;const n=this._checked;e!==n&&(this._checked=e,this.formElement&&(this.formElement.checked=e),(t=this._selectionController)===null||t===void 0||t.update(this),e===!1&&((s=this.formElement)===null||s===void 0||s.blur()),this.requestUpdate("checked",n),this.dispatchEvent(new Event("checked",{bubbles:!0,composed:!0})))}_handleUpdatedValue(e){this.formElement.value=e}renderRipple(){return this.shouldRenderRipple?u`<mwc-ripple unbounded accent
        .internalUseStateLayerCustomProperties="${this.useStateLayerCustomProperties}"
        .disabled="${this.disabled}"></mwc-ripple>`:""}get isRippleActive(){var e;return((e=this.rippleElement)===null||e===void 0?void 0:e.isActive)||!1}connectedCallback(){super.connectedCallback(),this._selectionController=d.getController(this),this._selectionController.register(this),this._selectionController.update(this)}disconnectedCallback(){this._selectionController.unregister(this),this._selectionController=void 0}focus(){this.formElement.focus()}createAdapter(){return Object.assign(Object.assign({},k(this.mdcRoot)),{setNativeControlDisabled:e=>{this.formElement.disabled=e}})}handleFocus(){this.focused=!0,this.handleRippleFocus()}handleClick(){this.formElement.focus()}handleBlur(){this.focused=!1,this.formElement.blur(),this.rippleHandlers.endFocus()}setFormData(e){this.name&&this.checked&&e.append(this.name,this.value)}render(){const e={"mdc-radio--touch":!this.reducedTouchTarget,"mdc-ripple-upgraded--background-focused":this.focused,"mdc-radio--disabled":this.disabled};return u`
      <div class="mdc-radio ${E(e)}">
        <input
          tabindex="${this.formElementTabIndex}"
          class="mdc-radio__native-control"
          type="radio"
          name="${this.name}"
          aria-label="${h(this.ariaLabel)}"
          aria-labelledby="${h(this.ariaLabelledBy)}"
          .checked="${this.checked}"
          .value="${this.value}"
          ?disabled="${this.disabled}"
          @change="${this.changeHandler}"
          @focus="${this.handleFocus}"
          @click="${this.handleClick}"
          @blur="${this.handleBlur}"
          @mousedown="${this.handleRippleMouseDown}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleTouchStart}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        <div class="mdc-radio__background">
          <div class="mdc-radio__outer-circle"></div>
          <div class="mdc-radio__inner-circle"></div>
        </div>
        ${this.renderRipple()}
      </div>`}handleRippleMouseDown(e){const t=()=>{window.removeEventListener("mouseup",t),this.handleRippleDeactivate()};window.addEventListener("mouseup",t),this.rippleHandlers.startPress(e)}handleRippleTouchStart(e){this.rippleHandlers.startPress(e)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}changeHandler(){this.checked=this.formElement.checked}}i([b(".mdc-radio")],o.prototype,"mdcRoot",void 0);i([b("input")],o.prototype,"formElement",void 0);i([l()],o.prototype,"useStateLayerCustomProperties",void 0);i([a({type:Boolean})],o.prototype,"global",void 0);i([a({type:Boolean,reflect:!0})],o.prototype,"checked",null);i([a({type:Boolean}),m(function(r){this.mdcFoundation.setDisabled(r)})],o.prototype,"disabled",void 0);i([a({type:String}),m(function(r){this._handleUpdatedValue(r)})],o.prototype,"value",void 0);i([a({type:String})],o.prototype,"name",void 0);i([a({type:Boolean})],o.prototype,"reducedTouchTarget",void 0);i([a({type:Number})],o.prototype,"formElementTabIndex",void 0);i([l()],o.prototype,"focused",void 0);i([l()],o.prototype,"shouldRenderRipple",void 0);i([g("mwc-ripple")],o.prototype,"ripple",void 0);i([f,a({attribute:"aria-label"})],o.prototype,"ariaLabel",void 0);i([f,a({attribute:"aria-labelledby"})],o.prototype,"ariaLabelledBy",void 0);i([C({passive:!0})],o.prototype,"handleRippleTouchStart",null);export{o as R};
//# sourceMappingURL=mwc-radio-base-f0d74a1d.js.map
