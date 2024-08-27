import{D as M,x as u,i as A,r as D,e as w}from"./query-assigned-elements-9f88bee1.js";import{a as L,b as v,_ as m}from"./tslib.es6-6921e62d.js";import{B as R}from"./base-element-cae00a28.js";import{o as h}from"./observer-1f401936.js";import{n as l}from"./property-f36ea729.js";import{i as I}from"./query-3e91a3b8.js";import{o as F}from"./class-map-4e4d6bc9.js";import{c as P}from"./async-directive-ee28bedc.js";import{e as z,t as B}from"./directive-12249aa5.js";import{a as U}from"./utils-529e1a6d.js";import"./button-d9b036d1.js";import"./icon-button-7258a669.js";import"./directive-helpers-67cb89d8.js";import"./mwc-icon-4afc0ea5.js";import"./ripple-handlers-4e438af8.js";import"./state-2a0073ff.js";import"./style-map-ec903154.js";import"./aria-property-3dc182ec.js";import"./event-options-b5830ec0.js";import"./if-defined-c3862b86.js";/**
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
 */var $=function(){function n(t){t===void 0&&(t={}),this.adapter=t}return Object.defineProperty(n,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(n,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(n,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),n.prototype.init=function(){},n.prototype.destroy=function(){},n}();/**
 * @license
 * Copyright 2018 Google Inc.
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
 */var c={CLOSING:"mdc-snackbar--closing",OPEN:"mdc-snackbar--open",OPENING:"mdc-snackbar--opening"},g={ACTION_SELECTOR:".mdc-snackbar__action",ARIA_LIVE_LABEL_TEXT_ATTR:"data-mdc-snackbar-label-text",CLOSED_EVENT:"MDCSnackbar:closed",CLOSING_EVENT:"MDCSnackbar:closing",DISMISS_SELECTOR:".mdc-snackbar__dismiss",LABEL_SELECTOR:".mdc-snackbar__label",OPENED_EVENT:"MDCSnackbar:opened",OPENING_EVENT:"MDCSnackbar:opening",REASON_ACTION:"action",REASON_DISMISS:"dismiss",SURFACE_SELECTOR:".mdc-snackbar__surface"},o={DEFAULT_AUTO_DISMISS_TIMEOUT_MS:5e3,INDETERMINATE:-1,MAX_AUTO_DISMISS_TIMEOUT_MS:1e4,MIN_AUTO_DISMISS_TIMEOUT_MS:4e3,SNACKBAR_ANIMATION_CLOSE_TIME_MS:75,SNACKBAR_ANIMATION_OPEN_TIME_MS:150,ARIA_LIVE_DELAY_MS:1e3};/**
 * @license
 * Copyright 2018 Google Inc.
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
 */var x=c.OPENING,E=c.OPEN,T=c.CLOSING,j=g.REASON_ACTION,_=g.REASON_DISMISS,V=function(n){L(t,n);function t(e){var a=n.call(this,v(v({},t.defaultAdapter),e))||this;return a.opened=!1,a.animationFrame=0,a.animationTimer=0,a.autoDismissTimer=0,a.autoDismissTimeoutMs=o.DEFAULT_AUTO_DISMISS_TIMEOUT_MS,a.closeOnEscape=!0,a}return Object.defineProperty(t,"cssClasses",{get:function(){return c},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return g},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return o},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},announce:function(){},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},removeClass:function(){}}},enumerable:!1,configurable:!0}),t.prototype.destroy=function(){this.clearAutoDismissTimer(),cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=0,this.adapter.removeClass(x),this.adapter.removeClass(E),this.adapter.removeClass(T)},t.prototype.open=function(){var e=this;this.clearAutoDismissTimer(),this.opened=!0,this.adapter.notifyOpening(),this.adapter.removeClass(T),this.adapter.addClass(x),this.adapter.announce(),this.runNextAnimationFrame(function(){e.adapter.addClass(E),e.animationTimer=setTimeout(function(){var a=e.getTimeoutMs();e.handleAnimationTimerEnd(),e.adapter.notifyOpened(),a!==o.INDETERMINATE&&(e.autoDismissTimer=setTimeout(function(){e.close(_)},a))},o.SNACKBAR_ANIMATION_OPEN_TIME_MS)})},t.prototype.close=function(e){var a=this;e===void 0&&(e=""),this.opened&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=0,this.clearAutoDismissTimer(),this.opened=!1,this.adapter.notifyClosing(e),this.adapter.addClass(c.CLOSING),this.adapter.removeClass(c.OPEN),this.adapter.removeClass(c.OPENING),clearTimeout(this.animationTimer),this.animationTimer=setTimeout(function(){a.handleAnimationTimerEnd(),a.adapter.notifyClosed(e)},o.SNACKBAR_ANIMATION_CLOSE_TIME_MS))},t.prototype.isOpen=function(){return this.opened},t.prototype.getTimeoutMs=function(){return this.autoDismissTimeoutMs},t.prototype.setTimeoutMs=function(e){var a=o.MIN_AUTO_DISMISS_TIMEOUT_MS,i=o.MAX_AUTO_DISMISS_TIMEOUT_MS,s=o.INDETERMINATE;if(e===o.INDETERMINATE||e<=i&&e>=a)this.autoDismissTimeoutMs=e;else throw new Error(`
        timeoutMs must be an integer in the range `+a+"–"+i+`
        (or `+s+" to disable), but got '"+e+"'")},t.prototype.getCloseOnEscape=function(){return this.closeOnEscape},t.prototype.setCloseOnEscape=function(e){this.closeOnEscape=e},t.prototype.handleKeyDown=function(e){var a=e.key==="Escape"||e.keyCode===27;a&&this.getCloseOnEscape()&&this.close(_)},t.prototype.handleActionButtonClick=function(e){this.close(j)},t.prototype.handleActionIconClick=function(e){this.close(_)},t.prototype.clearAutoDismissTimer=function(){clearTimeout(this.autoDismissTimer),this.autoDismissTimer=0},t.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(c.OPENING),this.adapter.removeClass(c.CLOSING)},t.prototype.runNextAnimationFrame=function(e){var a=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){a.animationFrame=0,clearTimeout(a.animationTimer),a.animationTimer=setTimeout(e,0)})},t}($);const k=V;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const{ARIA_LIVE_DELAY_MS:G}=k.numbers;class K extends P{constructor(t){if(super(t),this.labelEl=null,this.timerId=null,this.previousPart=null,t.type!==B.CHILD)throw new Error("AccessibleSnackbarLabel only supports child parts.")}update(t,[e,a]){var i;if(!a)return;if(this.labelEl===null){const y=document.createElement("div"),N=u`<div class="mdc-snackbar__label" role="status" aria-live="polite"></div>`;M(N,y);const b=y.firstElementChild;return b.textContent=e,(i=t.endNode)===null||i===void 0||i.parentNode.insertBefore(b,t.endNode),this.labelEl=b,b}const s=this.labelEl;s.setAttribute("aria-live","off"),s.textContent="";const r=document.createElement("span");return r.style.display="inline-block",r.style.width="0",r.style.height="1px",r.textContent=" ",s.appendChild(r),s.setAttribute("data-mdc-snackbar-label-text",e),this.timerId!==null&&clearTimeout(this.timerId),this.timerId=window.setTimeout(()=>{this.timerId=null,s.setAttribute("aria-live","polite"),s.removeAttribute("data-mdc-snackbar-label-text"),s.textContent=e,this.setValue(this.labelEl)},G),s}render(t,e){return e?u`
      <div class="mdc-snackbar__label" role="status" aria-live="polite">${t}</div>`:u``}}const q=z(K);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const{OPENING_EVENT:Y,OPENED_EVENT:X,CLOSING_EVENT:H,CLOSED_EVENT:J}=k.strings;class d extends R{constructor(){super(...arguments),this.mdcFoundationClass=k,this.open=!1,this.timeoutMs=5e3,this.closeOnEscape=!1,this.labelText="",this.stacked=!1,this.leading=!1,this.reason=""}render(){const t={"mdc-snackbar--stacked":this.stacked,"mdc-snackbar--leading":this.leading};return u`
      <div class="mdc-snackbar ${F(t)}" @keydown="${this._handleKeydown}">
        <div class="mdc-snackbar__surface">
          ${q(this.labelText,this.open)}
          <div class="mdc-snackbar__actions">
            <slot name="action" @click="${this._handleActionClick}"></slot>
            <slot name="dismiss" @click="${this._handleDismissClick}"></slot>
          </div>
        </div>
      </div>`}createAdapter(){return Object.assign(Object.assign({},U(this.mdcRoot)),{announce:()=>{},notifyClosed:t=>{this.dispatchEvent(new CustomEvent(J,{bubbles:!0,cancelable:!0,detail:{reason:t}}))},notifyClosing:t=>{this.open=!1,this.dispatchEvent(new CustomEvent(H,{bubbles:!0,cancelable:!0,detail:{reason:t}}))},notifyOpened:()=>{this.dispatchEvent(new CustomEvent(X,{bubbles:!0,cancelable:!0}))},notifyOpening:()=>{this.open=!0,this.dispatchEvent(new CustomEvent(Y,{bubbles:!0,cancelable:!0}))}})}show(){this.open=!0}close(t=""){this.reason=t,this.open=!1}firstUpdated(){super.firstUpdated(),this.open&&this.mdcFoundation.open()}_handleKeydown(t){this.mdcFoundation.handleKeyDown(t)}_handleActionClick(t){this.mdcFoundation.handleActionButtonClick(t)}_handleDismissClick(t){this.mdcFoundation.handleActionIconClick(t)}}m([I(".mdc-snackbar")],d.prototype,"mdcRoot",void 0);m([I(".mdc-snackbar__label")],d.prototype,"labelElement",void 0);m([l({type:Boolean,reflect:!0}),h(function(n){this.mdcFoundation&&(n?this.mdcFoundation.open():(this.mdcFoundation.close(this.reason),this.reason=""))})],d.prototype,"open",void 0);m([h(function(n){this.mdcFoundation.setTimeoutMs(n)}),l({type:Number})],d.prototype,"timeoutMs",void 0);m([h(function(n){this.mdcFoundation.setCloseOnEscape(n)}),l({type:Boolean})],d.prototype,"closeOnEscape",void 0);m([l({type:String})],d.prototype,"labelText",void 0);m([l({type:Boolean})],d.prototype,"stacked",void 0);m([l({type:Boolean})],d.prototype,"leading",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */const Q=A`.mdc-snackbar{z-index:8;margin:8px;display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-snackbar__surface{background-color:#333333}.mdc-snackbar__label{color:rgba(255, 255, 255, 0.87)}.mdc-snackbar__surface{min-width:344px}@media(max-width: 480px),(max-width: 344px){.mdc-snackbar__surface{min-width:100%}}.mdc-snackbar__surface{max-width:672px}.mdc-snackbar__surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12)}.mdc-snackbar__surface{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--open .mdc-snackbar__label,.mdc-snackbar--open .mdc-snackbar__actions{visibility:visible}.mdc-snackbar--leading{justify-content:flex-start}.mdc-snackbar--stacked .mdc-snackbar__label{padding-left:16px;padding-right:8px;padding-bottom:12px}[dir=rtl] .mdc-snackbar--stacked .mdc-snackbar__label,.mdc-snackbar--stacked .mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar--stacked .mdc-snackbar__surface{flex-direction:column;align-items:flex-start}.mdc-snackbar--stacked .mdc-snackbar__actions{align-self:flex-end;margin-bottom:8px}.mdc-snackbar__surface{padding-left:0;padding-right:8px;display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(0.8);opacity:0}.mdc-snackbar__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-snackbar__surface::before{border-color:CanvasText}}[dir=rtl] .mdc-snackbar__surface,.mdc-snackbar__surface[dir=rtl]{padding-left:8px;padding-right:0}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto;transition:opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1);transition:opacity 75ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-snackbar__label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);padding-left:16px;padding-right:8px;width:100%;flex-grow:1;box-sizing:border-box;margin:0;visibility:hidden;padding-top:14px;padding-bottom:14px}[dir=rtl] .mdc-snackbar__label,.mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar__label::before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box;visibility:hidden}.mdc-snackbar__action:not(:disabled){color:#bb86fc}.mdc-snackbar__action .mdc-button__ripple::before,.mdc-snackbar__action .mdc-button__ripple::after{background-color:#bb86fc;background-color:var(--mdc-ripple-color, #bb86fc)}.mdc-snackbar__action:hover .mdc-button__ripple::before,.mdc-snackbar__action.mdc-ripple-surface--hover .mdc-button__ripple::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-snackbar__action.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.mdc-snackbar__action:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-snackbar__action:not(.mdc-ripple-upgraded) .mdc-button__ripple::after{transition:opacity 150ms linear}.mdc-snackbar__action:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__action.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss{color:rgba(255, 255, 255, 0.87)}.mdc-snackbar__dismiss .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss .mdc-icon-button__ripple::after{background-color:rgba(255, 255, 255, 0.87);background-color:var(--mdc-ripple-color, rgba(255, 255, 255, 0.87))}.mdc-snackbar__dismiss:hover .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss.mdc-snackbar__dismiss{width:36px;height:36px;padding:6px;font-size:18px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss .mdc-icon-button__focus-ring{display:none}.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-snackbar__dismiss.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block;max-height:36px;max-width:36px}@media screen and (forced-colors: active){.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-snackbar__dismiss.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-snackbar__dismiss.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-snackbar__dismiss.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-snackbar__dismiss.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{border-color:CanvasText}}.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:36px;height:36px;margin-top:0px;margin-bottom:0px;margin-right:0px;margin-left:0px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-icon-button--reduced-size.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-icon-button--reduced-size:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{max-height:36px;max-width:36px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss .mdc-icon-button__touch{position:absolute;top:50%;height:36px;left:50%;width:36px;transform:translate(-50%, -50%)}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px}slot[name=action]::slotted(mwc-button){--mdc-theme-primary: var( --mdc-snackbar-action-color, #bb86fc )}slot[name=dismiss]::slotted(mwc-icon-button){--mdc-icon-size: 18px;--mdc-icon-button-size: 36px;color:rgba(255, 255, 255, 0.87);margin-left:8px;margin-right:0}[dir=rtl] slot[name=dismiss]::slotted(mwc-icon-button),::slotted(mwc-icon-buttonslot[name=dismiss][dir=rtl]){margin-left:0;margin-right:8px}`,W=`:host{--mdc-snackbar-action-color: var(--mdc-theme-text-primary-on-dark);--mdc-theme-text-primary-on-background: var(--mdc-theme-text-primary-on-dark)}:host ::slotted(cv-icon-button){color:var(--mdc-theme-text-icon-on-dark)}
`;var Z=Object.defineProperty,tt=Object.getOwnPropertyDescriptor,et=(n,t,e,a)=>{for(var i=a>1?void 0:a?tt(t,e):t,s=n.length-1,r;s>=0;s--)(r=n[s])&&(i=(a?r(t,e,i):r(i))||i);return a&&i&&Z(t,e,i),i};let f=class extends d{};f.styles=[Q,A`${D(W)}`];f=et([w("cv-snackbar")],f);const Et={title:"Components/Snackbar",args:{stacked:!1,leading:!1,label:"Can't send photo. Retry in 5 seconds."}},at=({label:n,leading:t,stacked:e})=>(document.addEventListener("DOMContentLoaded",()=>{const a=document.querySelector("cv-snackbar");document.querySelector(".show-snackbar-button").addEventListener("click",()=>a.open?a.close():a.show())},{once:!0}),`
    <cv-button class="show-snackbar-button">Toggle Snackbar</cv-button>
    <cv-snackbar
       class="my-snackbar"
       labelText="${n}"
       ${t?"leading":""}
       ${e?"stacked":""}
       open>
      <cv-button slot="action">RETRY</cv-button>
      <cv-icon-button icon="close" slot="dismiss"></cv-icon-button>
    </cv-snackbar>`),p=at.bind({});p.args={};var C,S,O;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`({
  label,
  leading,
  stacked
}) => {
  document.addEventListener('DOMContentLoaded', () => {
    const snackbar = document.querySelector('cv-snackbar');
    const snackbarTarget = document.querySelector('.show-snackbar-button');
    snackbarTarget.addEventListener('click', () => {
      return snackbar.open ? snackbar.close() : snackbar.show();
    });
  }, {
    once: true
  });
  return \`
    <cv-button class="show-snackbar-button">Toggle Snackbar</cv-button>
    <cv-snackbar
       class="my-snackbar"
       labelText="\${label}"
       \${leading ? 'leading' : ''}
       \${stacked ? 'stacked' : ''}
       open>
      <cv-button slot="action">RETRY</cv-button>
      <cv-icon-button icon="close" slot="dismiss"></cv-icon-button>
    </cv-snackbar>\`;
}`,...(O=(S=p.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};const Tt=["Basic"];export{p as Basic,Tt as __namedExportsOrder,Et as default};
