import{t as ie}from"./table-row-selection.content-2dc6f2e9.js";/* empty css                           */import{x as l,i as h,r as u,l as q,A as E,e as J}from"./query-assigned-elements-9f88bee1.js";import{n as r}from"./property-f36ea729.js";import{o as I}from"./class-map-4e4d6bc9.js";import{a as Y,b as N,_ as C}from"./tslib.es6-6921e62d.js";import"./inert.esm-a76031cb.js";import{B as ae}from"./base-element-cae00a28.js";import{o as oe}from"./observer-1f401936.js";import{i as ee}from"./query-3e91a3b8.js";import{a as se}from"./utils-529e1a6d.js";import"./top-app-bar-fixed-8dcaae2e.js";import"./icon-button-7258a669.js";import"./card-837ec290.js";import"./action-ribbon-ad0ab890.js";import"./icon-33ce3398.js";import"./icon-button-toggle-5afc3a79.js";import"./select-8c84db7b.js";import"./list-0ec6e3a4.js";import{C as ce,s as re,b as le,c as de}from"./list-item-500f4587.js";import"./toolbar-44c5c2b2.js";import"./button-d9b036d1.js";import"./textfield-3bf0ddf1.js";import"./typography-9d0b5d22.js";import{M as pe,e as O}from"./component-dc75d768.js";import"./directive-12249aa5.js";import"./mwc-top-app-bar-base-3fd10d04.js";import"./ripple-handlers-4e438af8.js";import"./state-2a0073ff.js";import"./style-map-ec903154.js";import"./aria-property-3dc182ec.js";import"./event-options-b5830ec0.js";import"./if-defined-c3862b86.js";import"./foundation-ebc4a482.js";import"./foundation-402d6c96.js";import"./mwc-icon-4afc0ea5.js";import"./mwc-line-ripple-directive-d0626047.js";import"./form-element-8fe2c680.js";import"./query-assigned-nodes-be20542b.js";import"./textfield-ef828c0f.js";import"./directive-helpers-67cb89d8.js";import"./component-6f8ff72c.js";import"./_commonjsHelpers-de833af9.js";import"./util-06a02d81.js";/**
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
 */var s={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"},M={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim",LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",LIST_ITEM_ACTIVATED_SELECTOR:".mdc-list-item--activated,.mdc-deprecated-list-item--activated"};/**
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
 */var ve=function(){function t(e){e===void 0&&(e={}),this.adapter=e}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}();/**
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
 */var te=function(t){Y(e,t);function e(n){var i=t.call(this,N(N({},e.defaultAdapter),n))||this;return i.animationFrame=0,i.animationTimer=0,i}return Object.defineProperty(e,"strings",{get:function(){return M},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return s},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.animationTimer&&clearTimeout(this.animationTimer)},e.prototype.open=function(){var n=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter.addClass(s.OPEN),this.adapter.addClass(s.ANIMATE),this.runNextAnimationFrame(function(){n.adapter.addClass(s.OPENING)}),this.adapter.saveFocus())},e.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter.addClass(s.CLOSING)},e.prototype.isOpen=function(){return this.adapter.hasClass(s.OPEN)},e.prototype.isOpening=function(){return this.adapter.hasClass(s.OPENING)||this.adapter.hasClass(s.ANIMATE)},e.prototype.isClosing=function(){return this.adapter.hasClass(s.CLOSING)},e.prototype.handleKeydown=function(n){var i=n.keyCode,a=n.key,o=a==="Escape"||i===27;o&&this.close()},e.prototype.handleTransitionEnd=function(n){var i=s.OPENING,a=s.CLOSING,o=s.OPEN,d=s.ANIMATE,x=s.ROOT,ne=this.isElement(n.target)&&this.adapter.elementHasClass(n.target,x);ne&&(this.isClosing()?(this.adapter.removeClass(o),this.closed(),this.adapter.restoreFocus(),this.adapter.notifyClose()):(this.adapter.focusActiveNavigationItem(),this.opened(),this.adapter.notifyOpen()),this.adapter.removeClass(d),this.adapter.removeClass(i),this.adapter.removeClass(a))},e.prototype.opened=function(){},e.prototype.closed=function(){},e.prototype.runNextAnimationFrame=function(n){var i=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){i.animationFrame=0,clearTimeout(i.animationTimer),i.animationTimer=setTimeout(n,0)})},e.prototype.isElement=function(n){return!!n.classList},e}(ve);const me=te;/**
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
 */var he=function(t){Y(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.handleScrimClick=function(){this.close()},e.prototype.opened=function(){this.adapter.trapFocus()},e.prototype.closed=function(){this.adapter.releaseFocus()},e}(te);const T=he;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const z=document.$blockingElements;class m extends ae{constructor(){super(...arguments),this._previousFocus=null,this.open=!1,this.hasHeader=!1,this.type=""}get mdcFoundationClass(){return this.type==="modal"?T:me}createAdapter(){return Object.assign(Object.assign({},se(this.mdcRoot)),{elementHasClass:(e,n)=>e.classList.contains(n),saveFocus:()=>{this._previousFocus=this.getRootNode().activeElement},restoreFocus:()=>{this._previousFocus&&this._previousFocus.focus&&this._previousFocus.focus()},notifyClose:()=>{this.open=!1,this.dispatchEvent(new Event(M.CLOSE_EVENT,{bubbles:!0,cancelable:!0}))},notifyOpen:()=>{this.open=!0,this.dispatchEvent(new Event(M.OPEN_EVENT,{bubbles:!0,cancelable:!0}))},focusActiveNavigationItem:()=>{},trapFocus:()=>{z.push(this),this.appContent.inert=!0},releaseFocus:()=>{z.remove(this),this.appContent.inert=!1}})}_handleScrimClick(){this.mdcFoundation instanceof T&&this.mdcFoundation.handleScrimClick()}render(){const e=this.type==="dismissible"||this.type==="modal",n=this.type==="modal",i=this.hasHeader?l`
      <div class="mdc-drawer__header">
        <h3 class="mdc-drawer__title"><slot name="title"></slot></h3>
        <h6 class="mdc-drawer__subtitle"><slot name="subtitle"></slot></h6>
        <slot name="header"></slot>
      </div>
      `:"";return l`
      <aside class="mdc-drawer ${I({"mdc-drawer--dismissible":e,"mdc-drawer--modal":n})}">
        ${i}
        <div class="mdc-drawer__content"><slot></slot></div>
      </aside>
      ${n?l`<div class="mdc-drawer-scrim"
                          @click="${this._handleScrimClick}"></div>`:""}
      <div class="mdc-drawer-app-content">
        <slot name="appContent"></slot>
      </div>
      `}firstUpdated(){this.mdcRoot.addEventListener("keydown",e=>this.mdcFoundation.handleKeydown(e)),this.mdcRoot.addEventListener("transitionend",e=>this.mdcFoundation.handleTransitionEnd(e))}updated(e){e.has("type")&&this.createFoundation()}}C([ee(".mdc-drawer")],m.prototype,"mdcRoot",void 0);C([ee(".mdc-drawer-app-content")],m.prototype,"appContent",void 0);C([oe(function(t){this.type!==""&&(t?this.mdcFoundation.open():this.mdcFoundation.close())}),r({type:Boolean,reflect:!0})],m.prototype,"open",void 0);C([r({type:Boolean})],m.prototype,"hasHeader",void 0);C([r({reflect:!0})],m.prototype,"type",void 0);const ue=`.mdc-drawer{border-color:#0000001f;background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-top-left-radius:0;border-top-right-radius:0;border-top-right-radius:var(--mdc-shape-large, 0);border-bottom-right-radius:0;border-bottom-right-radius:var(--mdc-shape-large, 0);border-bottom-left-radius:0;z-index:6;width:256px;display:flex;flex-direction:column;flex-shrink:0;box-sizing:border-box;height:100%;border-right-width:1px;border-right-style:solid;overflow:hidden;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.mdc-drawer .mdc-drawer__title{color:#000000de}.mdc-drawer .mdc-deprecated-list-group__subheader,.mdc-drawer .mdc-drawer__subtitle,.mdc-drawer .mdc-deprecated-list-item__graphic{color:#0009}.mdc-drawer .mdc-deprecated-list-item{color:#000000de}.mdc-drawer .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic{color:#6200ee}.mdc-drawer .mdc-deprecated-list-item--activated{color:#6200eede}[dir=rtl] .mdc-drawer,.mdc-drawer[dir=rtl]{border-top-left-radius:0;border-top-left-radius:var(--mdc-shape-large, 0);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:0;border-bottom-left-radius:var(--mdc-shape-large, 0)}.mdc-drawer .mdc-deprecated-list-item{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content{margin-left:256px;margin-right:0}[dir=rtl] .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content,.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:256px}[dir=rtl] .mdc-drawer,.mdc-drawer[dir=rtl]{border-right-width:0;border-left-width:1px;border-right-style:none;border-left-style:solid}.mdc-drawer .mdc-deprecated-list-item{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-subtitle2-font-size, .875rem);line-height:1.375rem;line-height:var(--mdc-typography-subtitle2-line-height, 1.375rem);font-weight:500;font-weight:var(--mdc-typography-subtitle2-font-weight, 500);letter-spacing:.0071428571em;letter-spacing:var(--mdc-typography-subtitle2-letter-spacing, .0071428571em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle2-text-transform, inherit);height:40px;margin:8px;padding:0 8px}.mdc-drawer .mdc-deprecated-list-item:nth-child(1){margin-top:2px}.mdc-drawer .mdc-deprecated-list-item:nth-last-child(1){margin-bottom:0}.mdc-drawer .mdc-deprecated-list-group__subheader{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size, .875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, .0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);display:block;line-height:normal;margin:0;padding:0 16px}.mdc-drawer .mdc-deprecated-list-group__subheader:before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-drawer .mdc-deprecated-list-divider{margin:3px 0 4px}.mdc-drawer .mdc-deprecated-list-item__text,.mdc-drawer .mdc-deprecated-list-item__graphic{pointer-events:none}.mdc-drawer--animate{transform:translate(-100%)}[dir=rtl] .mdc-drawer--animate,.mdc-drawer--animate[dir=rtl]{transform:translate(100%)}.mdc-drawer--opening{transform:translate(0);transition-duration:.25s}[dir=rtl] .mdc-drawer--opening,.mdc-drawer--opening[dir=rtl]{transform:translate(0)}.mdc-drawer--closing{transform:translate(-100%);transition-duration:.2s}[dir=rtl] .mdc-drawer--closing,.mdc-drawer--closing[dir=rtl]{transform:translate(100%)}.mdc-drawer__header{flex-shrink:0;box-sizing:border-box;min-height:64px;padding:0 16px 4px}.mdc-drawer__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, .0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-drawer__title:before{display:inline-block;width:0;height:36px;content:"";vertical-align:0}.mdc-drawer__title:after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-drawer__subtitle{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size, .875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, .0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-bottom:0}.mdc-drawer__subtitle:before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-drawer__content{height:100%;overflow-y:auto;-webkit-overflow-scrolling:touch}.mdc-drawer--dismissible{left:0;right:initial;display:none;position:absolute}[dir=rtl] .mdc-drawer--dismissible,.mdc-drawer--dismissible[dir=rtl]{left:initial;right:0}.mdc-drawer--dismissible.mdc-drawer--open{display:flex}.mdc-drawer-app-content{margin-left:0;margin-right:0;position:relative}[dir=rtl] .mdc-drawer-app-content,.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:0}.mdc-drawer--modal{box-shadow:0 8px 10px -5px #0003,0 16px 24px 2px #00000024,0 6px 30px 5px #0000001f;left:0;right:initial;display:none;position:fixed}.mdc-drawer--modal+.mdc-drawer-scrim{background-color:#00000052}[dir=rtl] .mdc-drawer--modal,.mdc-drawer--modal[dir=rtl]{left:initial;right:0}.mdc-drawer--modal.mdc-drawer--open{display:flex}.mdc-drawer-scrim{display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:5;transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1)}.mdc-drawer--open+.mdc-drawer-scrim{display:block}.mdc-drawer--animate+.mdc-drawer-scrim{opacity:0}.mdc-drawer--opening+.mdc-drawer-scrim{transition-duration:.25s;opacity:1}.mdc-drawer--closing+.mdc-drawer-scrim{transition-duration:.2s;opacity:0}:host{--cv-border-radius-outer: 28px}:host .navigation{--mdc-theme-surface: var(--mdc-theme-background);--mdc-list-vertical-padding: 0;--cv-list-padding-right: 0;--cv-list-padding-left: 12px;--cv-list-item-border-radius: 100px;--cv-list-item-width: 48px;--cv-list-item-height: 48px;--cv-list-item-graphic-margin-left: 0;--cv-list-menu-height: 0;--cv-list-item-expansion-icon-size: 0;--cv-list-item-selected-background-color: var(--cv-theme-primary-24);--cv-list-item-selected-color: var(--cv-theme-primary)}:host([open]) .navigation{--cv-list-padding-right: 12px;--cv-list-padding-left: 12px;--cv-list-item-width: 100%;--cv-list-item-height: inherit;--cv-list-item-graphic-margin-left: 0;--cv-list-item-expansion-icon-margin: -24px;--cv-list-item-expansion-icon-size: 24px;--cv-list-menu-height: inherit;--cv-list-item-selected-background-color: var( --cv-theme-on-surface-variant-8 );--cv-list-item-selected-color: var(--cv-theme-on-surface-variant)}@media only screen and (max-width: 768px){:host([helpOpen]) .app-shell,:host([helpOpen]) .main{height:100vh;overflow:hidden}}.app-shell{--mdc-theme-surface: var(--mdc-theme-background);background-color:var(--mdc-theme-background);display:grid;grid-template:"nav mini-list main help" min-content/auto auto 1fr;min-height:100%}.app-shell:after{content:"";position:fixed;top:0;height:2px;width:100%;z-index:1000;background-color:#ff5f02}@media only screen and (min-width: 768px){.app-shell{position:fixed;width:100%}}.app-shell .main-wrapper>:host(cv-card) .mdc-card{border-radius:var(--cv-border-radius-outer)}.cov-help--resizing .main,.cov-help--resizing .help{transition-duration:0ms}.main{height:100vh;grid-area:main;overflow:auto;transition:margin-left .2s ease-in-out,margin-right .2s ease-in-out}.main .main-wrapper{margin:0 auto;max-width:1200px}.cov-content--full-width .main .main-wrapper{margin:0;width:100%;max-width:100%}.main cv-card{margin:0 0 12px;display:block}.main cv-card.wrapper-card{--mdc-shape-medium: var(--cv-border-radius-outer)}@media only screen and (min-width: 768px){.cov-drawer--hovered .main,.main.cov-drawer--hovered-closing{margin-left:72px;padding-right:24px}:not(.cov-drawer--forced-open) .main{margin-left:72px;padding-right:24px}.cov-drawer--open .main{margin-left:256px;padding-right:24px}.cov-help--open .main{margin-right:var(--cv-help-width, 320px);padding-right:0}}@media only screen and (max-width: 1600px){.main .main-wrapper{max-width:960px}}.help{grid-area:help;position:fixed;right:0;width:var(--cv-help-width, 320px);transition:width .2s;height:100vh;overflow-y:auto}.help .resize-handle{position:absolute;left:0;width:8px;height:100vh;cursor:ew-resize;z-index:1100;-webkit-user-select:none;user-select:none}.help .resize-handle:after{content:"";position:absolute;left:1px;top:0;width:4px;height:100%;background-color:var(--mdc-theme-primary);transform:translate(-50%);transition:opacity .3s ease;opacity:0}.help .resize-handle:hover:after,.help .resize-handle.helpResizable:after{opacity:1}.help :host([helpResizable]) .resize-handle{display:block}.help :host(:not([helpResizable])) .resize-handle{display:none}.cov-help--closed .help{width:0;border:none}@media only screen and (max-width: 768px){.help{background-color:var(--mdc-theme-surface);width:100%;z-index:100}}.current-section{align-items:center;display:flex;font-size:var(--mdc-typography-body2-font-size);font-family:var(--mdc-typography-body2-font-family);color:var(--cv-theme-on-surface);font-weight:600;justify-content:flex-start;overflow:hidden;min-height:48px;padding:8px 16px 8px 12px;position:relative;text-align:left}.current-section .current-section-name{opacity:0;transition:opacity .2s}:host([open]) .current-section .current-section-name{opacity:1}[name=user-menu]{position:sticky;top:0;display:block;z-index:1}[name=mini-list]{display:none;width:320px;height:100vh}@media only screen and (min-width: 768px){.cov-appshell--minilist [name=mini-list]{display:block}:not(.cov-drawer--forced-open) [name=mini-list]{margin-left:72px}}@media only screen and (max-width: 1000px){[name=mini-list]{display:none}}nav.navigation{grid-area:nav;height:100vh;overflow-y:auto;border-right:0;position:fixed;background-color:var(--mdc-theme-background)}nav.navigation .toggle-drawer{margin:8px auto}nav.navigation .navigation-toolbar{display:flex;align-items:center;position:sticky;top:0;background-color:var(--mdc-theme-background);z-index:2;padding-left:var(--cv-list-padding-left, 0)}nav.navigation slot[name=logo]{display:block}nav.navigation slot[name=navigation]{margin-top:8px;display:block}:not(.cov-drawer--forced-open) nav.navigation,:not(.cov-drawer--forced-open) nav.navigation.mdc-drawer--closed,:not(.cov-drawer--forced-open) nav.navigation.mdc-drawer--closing{top:0;left:0;bottom:0}:not(.cov-drawer--forced-open) nav.navigation slot[name=logo],:not(.cov-drawer--forced-open) nav.navigation.mdc-drawer--closed slot[name=logo],:not(.cov-drawer--forced-open) nav.navigation.mdc-drawer--closing slot[name=logo]{transition:all .2s;opacity:0}nav.navigation.mdc-drawer--open .toggle-drawer{margin-left:0;margin-right:0}nav.navigation.mdc-drawer--open slot[name=logo]{opacity:1}.cov-drawer--hovered nav.navigation{box-shadow:0 11px 15px -7px #0003,0 24px 38px 3px #00000024,0 9px 46px 8px #0000001f;background-color:var(--mdc-theme-surface)}[divider]{border-bottom:1px solid;margin:16px;border-color:var(--mdc-theme-border, rgba(0, 0, 0, .12))}@media only screen and (min-width: 768px){nav.navigation{display:flex;flex-direction:column;transition-property:width;transform:none}.mdc-drawer--dismissible{display:block;width:72px;position:static}.mdc-drawer--open,.mdc-drawer--opening{width:256px;transition-duration:.2s}.mdc-drawer--closing{width:72px;transition-duration:.2s}.header{display:none}}@media only screen and (max-width: 768px){.app-shell{grid-template-columns:1fr;grid-template-areas:"header" "main" "mini-list" "help"}[name=help]::slotted(*),.main{height:auto;width:auto;border:none}}
`;var be=Object.defineProperty,ge=Object.getOwnPropertyDescriptor,p=(t,e,n,i)=>{for(var a=i>1?void 0:i?ge(e,n):e,o=t.length-1,d;o>=0;o--)(d=t[o])&&(a=(i?d(e,n,a):d(a))||a);return i&&a&&be(e,n,a),a};let c=class extends m{constructor(){super(),this.element=document.querySelector(".help"),this.helpWidth=0,this._resizing=!1,this.appName="",this.sectionName="",this.drawerOpen=!1,this.helpOpen=!1,this.helpResizable=!1,this.contained=!1,this.forcedOpen=!1,this.fullWidth=!1,this.hovered=!1,this.hoverEntryDuration=250,this.hoverExitDuration=250,this._handleNavMouseOver=()=>{this.hovered=!0,clearTimeout(this.hoverTimeout),!this.open&&!this.forcedOpen&&(this.hoverTimeout=setTimeout(()=>{this.hovered&&this._toggleOpen()},this.hoverEntryDuration))},this._handleNavMouseOut=()=>{this.hovered=!1,clearTimeout(this.hoverTimeout),this.open&&!this.forcedOpen&&(this.hoverTimeout=setTimeout(()=>{this.hovered||this._toggleOpen()},this.hoverExitDuration))},this.resizeEvent(),this._resize=this._resize.bind(this),this._stopResize=this._stopResize.bind(this),this._startResizing=this._startResizing.bind(this),this._setupEventListeners(),window.addEventListener("DOMContentLoaded",()=>{this.setupHelpPanelListeners();const t=localStorage.getItem("helpWidth");t&&(this.helpWidth=parseInt(t,10),this.updateHelpPanelWidth())})}setupHelpPanelListeners(){const t=document.querySelector(".help-item"),e=document.querySelector(".help-close");t==null||t.addEventListener("click",()=>{this.toggleHelpPanel()}),e==null||e.addEventListener("click",()=>{this.toggleHelpPanel(!1)})}toggleHelpPanel(t){if(this.helpOpen=t!==void 0?t:!this.helpOpen,this.helpOpen){const e=localStorage.getItem("helpWidth");this.helpWidth=e?parseInt(e,10):320}else this.helpWidth=0;this.updateHelpPanelWidth(),this.requestUpdate()}_setupEventListeners(){window.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".help-item"),e=document.querySelector(".help-close");t==null||t.addEventListener("click",()=>{this.helpOpen=!this.helpOpen,this.helpWidth=this.helpOpen?320:0,this.requestUpdate()}),e==null||e.addEventListener("click",()=>{this.helpOpen=!1,this.helpWidth=0,this.requestUpdate()})})}_startResizing(t){var n;if(!this.helpResizable)return;const e=(n=this.shadowRoot)==null?void 0:n.querySelector(".resize-handle");t.target===e&&(this._startX=t.clientX,this._startWidth=this.helpWidth,this._resizing=!0,document.addEventListener("mousemove",this._resize),document.addEventListener("mouseup",this._stopResize),t.target.classList.add("helpResizable")),e==null||e.addEventListener("dblclick",()=>{(this.helpWidth>320||this.helpWidth!==320)&&(this.helpWidth=320,localStorage.setItem("helpWidth","320"),this.updateHelpPanelWidth(),this.requestUpdate())}),this.requestUpdate()}_resize(t){const e=t.clientX-this._startX,n=window.innerWidth,a=Math.max(320,n-600),o=Math.max(320,Math.min(a,this._startWidth-e));this.helpWidth!==o&&(this.helpWidth=o,localStorage.setItem("helpWidth",this.helpWidth.toString()),this.updateHelpPanelWidth()),t.preventDefault()}_stopResize(){var e;document.removeEventListener("mousemove",this._resize),document.removeEventListener("mouseup",this._stopResize),this._resizing=!1;const t=(e=this.shadowRoot)==null?void 0:e.querySelector(".resize-handle");t&&t.classList.remove("helpResizable"),this.requestUpdate()}_toggleOpen(t=!1){this.mdcFoundation.isOpening()||this.mdcFoundation.isClosing()||(this.open=t||!this.open,this.forcedOpen=t,this.dispatchEvent(new Event("CovalentAppShell:toggle",{bubbles:!0,composed:!0})),this.requestUpdate())}updateHelpPanelWidth(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector(".app-shell");t==null||t.style.setProperty("--cv-help-width",`${this.helpWidth}px`)}_handleMenuClick(){this.mdcRoot.dispatchEvent(new Event("transitionend",{bubbles:!0,composed:!0})),this._toggleOpen(!this.forcedOpen),this.dispatchEvent(new Event("CovalentAppShell:menuClick")),this.hovered=!1}_handleDrawerClosed(){this.forcedOpen=!1,this.hovered=!1,this.requestUpdate()}resizeEvent(){const t=window.matchMedia("(max-width: 767px)");t.matches&&this.type!=="modal"?this.type="modal":!t.matches&&this.type!=="dismissible"&&(this.type="dismissible"),this.requestUpdate()}connectedCallback(){super.connectedCallback(),this.addEventListener("MDCDrawer:closed",this._handleDrawerClosed),window.addEventListener("resize",()=>this.resizeEvent())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("MDCDrawer:closed",this._handleDrawerClosed),window.removeEventListener("resize",this.resizeEvent)}renderSection(){return this.sectionName?l`<div class="current-section">
          <slot name="section-action"></slot>
          <span class="current-section-name">${this.sectionName}</span>
        </div>`:E}renderMain(){return this.contained?l`<cv-card class="wrapper-card"><slot></slot></cv-card>`:l`<slot></slot>`}render(){const t=this.type==="dismissible"||this.type==="modal",e=this.type==="modal",n={"cov-drawer--forced-open":this.forcedOpen,"cov-drawer--open":this.drawerOpen||this.forcedOpen,"cov-drawer--hovered":this.hovered,"cov-help--open":this.helpOpen,"cov-help--closed":!this.helpOpen,"cov-help--resizing":this._resizing,"cov-content--full-width":this.fullWidth},i={"mdc-drawer--dismissible":t,"mdc-drawer--modal":e},a=e?l`<div
          class="mdc-drawer-scrim"
          @click="${this._handleScrimClick}"
        ></div>`:E;return l`
      <div class="app-shell ${I(n)}">
        <span class="header"
          ><cv-top-app-bar-fixed centerTitle>
            <cv-icon-button
              class="toggle-drawer"
              @click=${this._handleMenuClick}
              slot="navigationIcon"
              icon="menu"
            ></cv-icon-button>
            <span slot="title">${this.appName}</span>
          </cv-top-app-bar-fixed>
        </span>
        <nav
          class="navigation mdc-drawer ${I(i)}"
          @mouseenter="${this._handleNavMouseOver}"
          @mouseleave="${this._handleNavMouseOut}"
        >
          <div class="navigation-toolbar">
            <cv-icon-button
              @click="${this._handleMenuClick}"
              class="toggle-drawer"
              icon="menu"
            ></cv-icon-button>
            <slot name="logo"></slot>
          </div>
          ${this.renderSection()}
          <slot name="navigation"></slot>
        </nav>
        ${a}
        <slot name="mini-list"></slot>
        <div class="main mdc-drawer-app-content">
          <div class="main-wrapper">
            <slot name="user-menu"></slot>
            ${this.renderMain()}
          </div>
        </div>
        <div class="help" @mousedown="${this._startResizing}">
          ${this.helpResizable?l`<div class="resize-handle"></div>`:E}
          <slot name="help"></slot>
        </div>
      </div>
    `}};c.styles=[h`
      ${u(ue)}
    `];p([q({slot:"navigation"})],c.prototype,"navigationListElements",2);p([q({slot:"user-menu"})],c.prototype,"userMenuElements",2);p([r()],c.prototype,"appName",2);p([r()],c.prototype,"sectionName",2);p([r({type:Boolean,reflect:!0})],c.prototype,"drawerOpen",2);p([r({type:Boolean,reflect:!0})],c.prototype,"helpOpen",2);p([r({type:Boolean,reflect:!0})],c.prototype,"helpResizable",2);p([r({type:Boolean,reflect:!0})],c.prototype,"contained",2);p([r({type:Boolean,reflect:!0})],c.prototype,"forcedOpen",2);p([r({type:Boolean,reflect:!0})],c.prototype,"fullWidth",2);c=p([J("cv-app-shell")],c);const ye=`:host{font-family:var(--mdc-typography-font-family);font-size:var(--mdc-typography-body2-font-size);font-weight:600;line-height:var(--mdc-typography-body2-line-height);text-align:left;border-radius:var(--cv-list-item-border-radius, 100px);transition:border-radius .2s cubic-bezier(.4,0,.2,1),width .2s cubic-bezier(.4,0,.2,1);width:var(--cv-list-item-width, 100%);color:var(--cv-theme-on-surface-variant);--mdc-list-item-graphic-margin: 4px}:host ::slotted(cv-icon[slot=graphic]){color:var(--cv-theme-on-surface-variant)}::slotted(*){--cv-list-padding-right: 0;--cv-list-padding-left: 0;--cv-list-item-text-padding: 16px}:host([activated]){color:var(--cv-theme-on-secondary-container)}:host([activated]) ::slotted(cv-icon[slot=graphic]){color:var(--cv-theme-on-secondary-container)}:host([selected]:not([activated])) .expansion-header{transition:background-color .25s cubic-bezier(.4,0,.2,1) color .25s cubic-bezier(.4,0,.2,1);background-color:var(--cv-list-item-selected-background-color);color:var(--cv-list-item-selected-color)}:host([selected]:not([activated])) .expansion-header .mdc-deprecated-list-item__graphic{--mdc-theme-text-icon-on-background: var(--cv-list-item-selected-color)}:host([subnav]){--cv-list-item-text-padding: 16px;height:32px;font-weight:var(--mdc-typography-body2-font-weight);border-radius:var(--cv-list-item-border-radius, 100px);padding:0;padding-right:var(--cv-list-padding-right, 12px);padding-left:var(--cv-list-padding-left, 12px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{--mdc-theme-text-icon-on-background: var(--cv-theme-on-surface);margin-left:var(--cv-list-item-graphic-margin-left, 12px);padding-left:4px;background-color:transparent}:host([graphic=avatar]){padding:0;background-color:transparent}:host([graphic=avatar]:not([twoline])){height:48px}:host([selected]) .mdc-deprecated-list-item__graphic.material-icons,:host([activated]) .mdc-deprecated-list-item__graphic.material-icons,:host([hasActivatedChild]) .mdc-deprecated-list-item__graphic.material-icons{font-variation-settings:"FILL" 1}:host([hasChildren]){flex-direction:column;overflow:visible;height:var(--cv-list-item-height, inherit)!important;background:none;padding:0;--mdc-list-side-padding: 0;--cv-list-item-graphic-margin-left: 0}:host([hasChildren]) ::slotted(cv-list){padding-left:32px}:host([hasChildren][open]:hover:not([activated])) .expansion-header{--mdc-ripple-color: transparent}:host([hasChildren][open]:hover:not([activated])) .expansion-header:hover{--mdc-ripple-color: var(--mdc-theme-on-surface-variant)}.expansion-header{position:relative;height:48px;width:100%;border-radius:var(--cv-list-item-border-radius, 100px);overflow:hidden;display:flex;flex-shrink:0;align-items:center;background-color:var(--cv-list-item-background-color);color:var(--cv-list-item-text-color)}.expansion-header mwc-ripple{border-radius:var(--cv-list-item-border-radius, 100px);overflow:hidden}.expansion-header-inner{padding:0 16px}.expansion-icon{margin-right:var(--cv-list-item-expansion-icon-margin, 0);font-size:var(--cv-list-item-expansion-icon-size, --mdc-icon-size);color:var(--cv-list-item-text-icon-on-background, var(--mdc-theme-text-icon-on-background))}.expansion-panel{display:block;width:100%;max-height:var(--cv-list-menu-height, 0);overflow:hidden;transition:max-height .2s cubic-bezier(.4,0,1,1);--mdc-list-side-padding: 72px}:host([open][hasChildren]:not([twoline])){height:inherit;display:flex;flex-direction:column;border-radius:0}:host([open][hasChildren]:not([twoline])) .expansion-panel{transition-timing-function:cubic-bezier(0,0,.2,1);max-height:var(--cv-list-menu-height, inherit)}
`;var fe=Object.defineProperty,Ce=Object.getOwnPropertyDescriptor,H=(t,e,n,i)=>{for(var a=i>1?void 0:i?Ce(e,n):e,o=t.length-1,d;o>=0;o--)(d=t[o])&&(a=(i?d(e,n,a):d(a))||a);return i&&a&&fe(e,n,a),a};let v=class extends ce{constructor(){super(...arguments),this.open=!1,this.hasChildren=!1,this.activated=!1,this.lastKeySelected=0}_toggleOpen(){this.open=!this.open}_handleKeydown(t){const e=this.expansionPanelElements[0],n=e?e==null?void 0:e.getFocusedItemIndex():0,i=(e==null?void 0:e.items.length)??0;if(this.hasChildren){if(t.code==="Enter"){t.preventDefault(),t.stopImmediatePropagation(),t.target.hasChildren?this._toggleOpen():this._deselectHeader(t);return}if(this.open){if(t.code==="ArrowUp"&&n===0&&this.lastKeySelected===0&&!t.target.hasChildren){t.preventDefault(),t.stopImmediatePropagation(),e.items[0].blur(),this.focus();return}t.code==="ArrowDown"&&n===-1&&(t.preventDefault(),t.stopImmediatePropagation(),e.focusItemAtIndex(0),this.lastKeySelected=0),t.code==="ArrowUp"&&n!==-1&&(t.preventDefault(),t.stopImmediatePropagation(),e.focusItemAtIndex(n),this.lastKeySelected=n),(t.code==="ArrowDown"||t.code==="ArrowUp")&&n!==-1&&this.lastKeySelected<i-1&&(t.preventDefault(),t.stopImmediatePropagation(),e.focusItemAtIndex(n),this.lastKeySelected=n)}}}_handleRequestSelected(t){const e=t;this.hasChildren&&e.detail.selected===!1&&e.detail.source==="property"&&this._deselectChildren()}_deselectChildren(){this.expansionPanelElements.forEach(t=>{t.items.forEach(e=>e.selected=!1)})}_deselectHeader(t){t.preventDefault(),t.stopImmediatePropagation(),this.fireRequestSelected(!1,"interaction"),this.activated=!1}_updateMaxHeight(t=this.open){var i;const e=(i=this.shadowRoot)==null?void 0:i.querySelector(".expansion-panel");let n="0";t&&(n=e!=null&&e.scrollHeight?`${e.scrollHeight}px`:"inherit"),this.style.setProperty("--cv-list-menu-height",n)}renderExpansionItem(){const t=this.renderText(),e=this.graphic?this.renderGraphic():E,n=this.renderMeta();return l`
      <div
        @mousedown=${this._toggleOpen}
        @touchstart="${this._toggleOpen}"
        @keydown=${this._toggleOpen}
        class="expansion-header"
      >
        ${this.renderRipple()} ${e} ${t} ${n}
      </div>
      <div class="expansion-panel" @click=${this._deselectHeader}>
        <slot name="expansion-panel"></slot>
      </div>
    `}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._handleKeydown),this.addEventListener("request-selected",this._handleRequestSelected)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._handleKeydown),this.addEventListener("request-selected",this._handleRequestSelected)}renderMeta(){const t=this.open?"arrow_drop_up":"arrow_drop_down",e=this.hasChildren?l`<cv-icon class="expansion-icon">${t}</cv-icon>`:"";return l`<span class="mdc-deprecated-list-item__meta material-icons">
      ${e}
      <slot name="meta"></slot>
    </span>`}firstUpdated(){super.firstUpdated(),this.hasChildren&&this._updateMaxHeight()}updated(t){super.updated(t),t.has("open")&&this.hasChildren&&this._updateMaxHeight()}render(){return this.hasChildren?this.renderExpansionItem():super.render()}};v.styles=[h`
      ${u(re)}
    `,h`
      ${u(le)}
    `,h`
      ${u(de)}
    `,h`
      ${u(ye)}
    `];H([q({slot:"expansion-panel",flatten:!0})],v.prototype,"expansionPanelElements",2);H([r({type:Boolean,reflect:!0})],v.prototype,"open",2);H([r({type:Boolean,reflect:!0})],v.prototype,"hasChildren",2);v=H([J("cv-nav-list-item")],v);const pt={title:"Patterns/App Shell",args:{contained:!0,fullWidth:!1,helpResizable:!0},argTypes:{navClick:{action:"clicked"}},parameters:{layout:"fullscreen"}};let L,S,k;const _=()=>{const t=k.getSelectedRowIds().length,e=k.rowCheckboxList.length;t?(S.labelText=`(${t}/${e}) items selected`,S.show()):S.close()},w=({appName:t="[App name]",sectionTitle:e="",forcedOpen:n=!1,contained:i=!0,fullWidth:a=!1,helpResizable:o=!0})=>(document.addEventListener("DOMContentLoaded",()=>{const d=document.querySelector(".mdc-data-table"),x=document.querySelector(".help-item");L=document.querySelector("cv-app-shell"),S=document.querySelector("cv-action-ribbon"),k=new pe(d),x.addEventListener("click",()=>{L.helpOpen=!L.helpOpen}),document.querySelector(".help-close").addEventListener("click",()=>{L.helpOpen=!1,x.on=!1}),setTimeout(_,150)},{once:!0}),document.addEventListener(O.SELECTED_ALL,_),document.addEventListener(O.UNSELECTED_ALL,_),document.addEventListener(O.ROW_SELECTION_CHANGED,_),`
    <style>
    .hidden-large {
        display: none;
    }

    @media only screen and (max-width: 800px) {
        .hidden-large {
            display:flex;
        }
        .hidden-small {
            display: none;
        }
    }
    </style>
    <cv-app-shell
    ${t?`appName="${t}"`:""}
    ${e?`sectionName="${e}"`:""}
    ${n?"forcedOpen open":""}
    ${i?"contained":""}
    ${a?"fullWidth":""}
    ${o?"helpResizable":""}

    >

      <cv-icon-button slot="section-action" icon="arrow_back"></cv-icon-button>

      <svg
        slot="logo"
        width="103"
        height="20"
        viewBox="0 0 103 20"
        style="fill: var(--cv-theme-text-logo-on-background)"
        fill="none">
        <path d="M0 2.30182H3.53561V5.6615H7.47898V8.88045H3.53561V14.5072C3.53561 15.9632 4.26909 16.4391 5.30341 16.4391H7.47898V19.658H5.30341C1.68575 19.658 0 18.0358 0 14.5072V2.30182Z" />
        <path d="M15.9376 19.9907C11.5865 19.9907 8.67492 17.0506 8.67492 12.6854C8.67492 8.32008 11.5318 5.32374 15.7461 5.32374C19.9605 5.32374 22.708 8.17934 22.708 12.5446C22.708 12.9643 22.6806 13.4121 22.5986 13.9443H12.3746C12.7003 15.9043 13.8714 16.828 15.9923 16.828C17.325 16.828 18.3046 16.2395 18.685 15.4565H22.33C21.5145 18.1714 19.2295 19.9907 15.9376 19.9907ZM12.4293 10.9787H19.0107C18.6577 9.21565 17.6233 8.37637 15.7461 8.37637C13.9783 8.37637 12.8371 9.27194 12.4293 10.9787Z" />
        <path d="M24.6672 5.65895H28.0661V7.33751C29.3167 6.05044 30.8135 5.40563 32.2282 5.65895V9.01863C30.4604 8.79601 29.3192 9.63529 28.2028 11.1168V19.6529H24.6672V5.65895Z" />
        <path d="M36.6316 19.8218C34.1303 19.8218 32.1437 18.3096 32.1437 15.1751C32.1437 12.6009 33.7201 10.8379 37.2557 10.8379H40.3288V10.4183C40.3288 9.13121 39.5406 8.59898 37.5814 8.59898C36.276 8.59898 35.2417 8.73972 33.827 9.15936V5.88412C34.916 5.57706 36.276 5.38004 37.8797 5.38004C41.9599 5.38004 43.8619 6.97416 43.8619 10.4183V19.6555H40.4084V18.8443L39.6202 19.1795C38.6132 19.5992 37.5814 19.8244 36.6291 19.8244L36.6316 19.8218ZM38.5635 16.5466L40.3313 15.7636V13.6935H37.6386C36.4153 13.6935 35.6793 14.282 35.6793 15.2058C35.6793 16.2984 36.4128 16.828 37.3377 16.828C37.7181 16.828 38.1532 16.7154 38.561 16.5491L38.5635 16.5466Z" />
        <path d="M56.3758 19.6555V18.7318L56.1868 18.8162C54.9362 19.4329 53.6035 19.7399 52.3255 19.7399C48.9267 19.7399 45.9331 17.4728 45.9331 12.6598C45.9331 7.8467 48.9242 5.55148 52.3529 5.55148C53.6035 5.55148 54.9362 5.85853 56.1868 6.4752L56.2962 6.53149V0.341797H59.8318V19.6555H56.3758ZM52.9769 16.3802C53.7378 16.3802 54.5806 16.1832 55.4509 15.7636L56.2938 15.3439V9.97049L55.4509 9.55085C54.5806 9.13121 53.7378 8.93419 52.9769 8.93419C51.0177 8.93419 49.5507 10.1931 49.5507 12.6572C49.5507 15.1213 51.0202 16.3802 52.9769 16.3802Z" />
        <path d="M66.2218 19.8218C63.7205 19.8218 61.7339 18.3096 61.7339 15.1751C61.7339 12.6009 63.3103 10.8379 66.8459 10.8379H69.919V10.4183C69.919 9.13121 69.1308 8.59898 67.1716 8.59898C65.8662 8.59898 64.8319 8.73972 63.4172 9.15936V5.88412C64.5062 5.57706 65.8662 5.38004 67.4699 5.38004C71.5501 5.38004 73.4521 6.97416 73.4521 10.4183V19.6555H69.9986V18.8443L69.2104 19.1795C68.2034 19.5992 67.1716 19.8244 66.2193 19.8244L66.2218 19.8218ZM68.1537 16.5466L69.9215 15.7636V13.6935H67.2288C66.0055 13.6935 65.2695 14.282 65.2695 15.2058C65.2695 16.2984 66.003 16.828 66.9279 16.828C67.3083 16.828 67.7435 16.7154 68.1512 16.5491L68.1537 16.5466Z" />
        <path d="M76.0653 2.30182H79.6009V5.6615H83.5443V8.88045H79.6009V14.5072C79.6009 15.9632 80.3344 16.4391 81.3687 16.4391H83.5443V19.658H81.3687C77.7511 19.658 76.0653 18.0358 76.0653 14.5072V2.30182Z" />
        <path d="M89.2555 19.8218C86.7542 19.8218 84.7676 18.3096 84.7676 15.1751C84.7676 12.6009 86.3439 10.8379 89.8795 10.8379H92.9527V10.4183C92.9527 9.13121 92.1645 8.59898 90.2053 8.59898C88.8999 8.59898 87.8656 8.73972 86.4509 9.15936V5.88412C87.5399 5.57706 88.8999 5.38004 90.5036 5.38004C94.5837 5.38004 96.4858 6.97416 96.4858 10.4183V19.6555H93.0323V18.8443L92.2441 19.1795C91.2371 19.5992 90.2053 19.8244 89.253 19.8244L89.2555 19.8218ZM91.1874 16.5466L92.9552 15.7636V13.6935H90.2624C89.0392 13.6935 88.3032 14.282 88.3032 15.2058C88.3032 16.2984 89.0367 16.828 89.9616 16.828C90.342 16.828 90.7771 16.7154 91.1849 16.5491L91.1874 16.5466Z" />
        <path d="M98.5296 18.0588C98.5296 16.9943 99.3451 16.1551 100.407 16.1551C101.468 16.1551 102.284 16.9943 102.284 18.0588C102.284 19.1233 101.441 19.9907 100.407 19.9907C99.3725 19.9907 98.5296 19.1233 98.5296 18.0588Z" />
      </svg>

      <cv-list
        class="navigation-rail"
        slot="navigation"
        activatable
      >
      <cv-nav-list-item graphic="avatar">
        <cv-icon class="home-icon" slot="graphic">home</cv-icon>
        Home
      </cv-nav-list-item>

      <cv-nav-list-item graphic="avatar" hasChildren>
        <span>Editor</span>
        <cv-icon class="covalent-icon" slot="graphic">product_editor</cv-icon>
        <cv-list
          slot="expansion-panel"
          activatable>
          <cv-nav-list-item subNav>Scripts</cv-nav-list-item>
          <cv-nav-list-item subNav>Scripts</cv-nav-list-item>
          <cv-nav-list-item subNav>Scripts</cv-nav-list-item>
          <cv-nav-list-item subNav>Scripts</cv-nav-list-item>
          <cv-nav-list-item subNav>Scripts</cv-nav-list-item>
        </cv-list>
      </cv-nav-list-item>

        <cv-nav-list-item graphic="avatar">
          <span>Sites</span>
          <cv-icon class="covalent-icon" slot="graphic">server</cv-icon>
        </cv-nav-list-item>
        <cv-nav-list-item graphic="avatar">
          <span>Data Protections</span>
          <cv-icon slot="graphic">settings_backup_restore</cv-icon>
        </cv-nav-list-item>
        <cv-nav-list-item graphic="avatar">
          <span>Identity</span>
          <cv-icon slot="graphic">contacts</cv-icon>
        </cv-nav-list-item>
      </cv-list>

      <cv-toolbar slot="user-menu" sticky>
       <span slot="title" style="display:flex; align-items: center">
        <cv-typography scale="body1">All environments</cv-typography>
        <cv-icon>arrow_drop_down</cv-icon>
       </span>

       <cv-textfield slot="actionItems" icon="forum" placeholder="Message ask.ai" style="margin-right: 8px" dense></cv-textfield>
       <cv-icon-button slot="actionItems" icon="notifications"></cv-icon-button>
       <cv-icon-button-toggle slot="actionItems" onIcon="help" offIcon="help" class="help-item"></cv-icon-button-toggle>
       <cv-icon-button slot="actionItems" icon="person" style="margin-right: -12px"></cv-icon-button>
      </cv-toolbar>

      <div slot="help" class="help-panel mdc-typography">
        <cv-toolbar sticky>
          <span slot="title" style="padding-left: 12px;">Help</span>
          <cv-icon-button
            slot="actionItems"
            icon="undock"
            covalent-icons
          ></cv-icon-button>
          <cv-icon-button
            slot="actionItems"
            icon="close"
            class="help-close"
            style="margin-right: -4px;"
          ></cv-icon-button>
        </cv-toolbar>
        <div class="help-content" style="padding: 16px 24px 24px">
          <cv-typography scale="headline5">
            Ultricies nunc massa, id ut felis sed varius accumsan platea.
          </cv-typography><br />
          <cv-typography scale="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            tincidunt lectus risus, id aliquet mi congue sed.
          </cv-typography><br />
          <cv-typography scale="body1">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            pouere cubilia curae; Phasellus tincidunt eros arcu, sollicitudin
            laoreet urna aliquet eget.
          </cv-typography><br />
          <cv-typography scale="body1">
            Phasellus porta sed libero vel vulputate. Quisque non nisl sem.
            Pellentesque nec pretium magna, et vestibulum neque. Mauris molestie
            eros quis nisi pretium,
          </cv-typography><br />
          <cv-typography scale="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            tincidunt lectus risus, id aliquet mi congue sed.
          </cv-typography><br />
          <cv-typography scale="body1">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            pouere cubilia curae; Phasellus tincidunt eros arcu, sollicitudin
            laoreet urna aliquet eget.
          </cv-typography><br />
          <cv-typography scale="body1">
            Phasellus porta sed libero vel vulputate. Quisque non nisl sem.
            Pellentesque nec pretium magna, et vestibulum neque. Mauris molestie
            eros quis nisi pretium,
          </cv-typography>
        </div>
      </div>
      <div slot="mini-list">
        <cv-toolbar divider>
          <span slot="title">[Page name]</span>
          <cv-icon-button
            slot="actionItems"
            icon="filter_list"
          ></cv-icon-button>
          <cv-icon-button slot="actionItems" icon="add"></cv-icon-button>
        </cv-toolbar>
        <cv-list activatable>
          <cv-list-item graphic="avatar" twoline>
            <cv-icon covalent slot="graphic">server</cv-icon>
            <span>[Object name]</span>
            <span slot="secondary">Secondary info</span>
          </cv-list-item>
          <cv-list-item graphic="avatar" twoline>
            <cv-icon covalent slot="graphic">server</cv-icon>
            <span>[Object name]</span>
            <span slot="secondary">Secondary info</span>
          </cv-list-item>
          <cv-list-item graphic="avatar" twoline activated>
            <cv-icon covalent slot="graphic">server</cv-icon>
            <span>[Object name]</span>
            <span slot="secondary">Secondary info</span>
          </cv-list-item>
          <cv-list-item graphic="avatar" twoline>
            <cv-icon covalent slot="graphic">server</cv-icon>
            <span>[Object name]</span>
            <span slot="secondary">Secondary info</span>
          </cv-list-item>
        </cv-list>
      </div>

      <cv-toolbar>
        <span slot="title">[Section name]</span>
        <cv-icon-button slot="actionItems" icon="menu_open"></cv-icon-button>
        <cv-icon-button
          class="hidden-large"
          slot="actionItems"
          icon="add"
        ></cv-icon-button>
        <cv-button
          class="hidden-small"
          class="create-new-button"
          label="Create new"
          slot="actionItems"
          raised
        ></cv-button>
      </cv-toolbar>

      <cv-tab-bar>
        <cv-tab label="Overview"></cv-tab>
        <cv-tab label="Usage"></cv-tab>
        <cv-tab label="Objects"></cv-tab>
        <cv-tab label="Queries"></cv-tab>
        <cv-tab label="Network"></cv-tab>
        <cv-tab label="Settings"></cv-tab>
      </cv-tab-bar>

      <cv-action-ribbon labelText="this is my label" state="active">
        <cv-button
          slot="action-items"
          class="mdc-banner__secondary-action"
          outlined
          >Bulk action</cv-button
        >
      </cv-action-ribbon>

      ${ie}
    </cv-app-shell>
    `),V=w.bind({}),b=w.bind({});b.args={sectionTitle:"Environments"};const g=w.bind({});g.args={forcedOpen:!0};const y=w.bind({});y.args={fullWidth:!0};const f=w.bind({});f.args={helpResizable:!0};var R,A,$;V.parameters={...V.parameters,docs:{...(R=V.parameters)==null?void 0:R.docs,source:{originalSource:`({
  appName = '[App name]',
  sectionTitle = '',
  forcedOpen = false,
  contained = true,
  fullWidth = false,
  helpResizable = true
}) => {
  document.addEventListener('DOMContentLoaded', () => {
    const dataTableEl = document.querySelector('.mdc-data-table');
    const helpItem = document.querySelector('.help-item');
    appShell = document.querySelector('cv-app-shell');
    banner = document.querySelector('cv-action-ribbon');
    dataTable = new MDCDataTable(dataTableEl);
    helpItem.addEventListener('click', () => {
      appShell.helpOpen = !appShell.helpOpen;
    });
    document.querySelector('.help-close').addEventListener('click', () => {
      appShell.helpOpen = false;
      helpItem.on = false;
    });
    setTimeout(updateActionRibbon, 150);
  }, {
    once: true
  });
  document.addEventListener(events.SELECTED_ALL, updateActionRibbon);
  document.addEventListener(events.UNSELECTED_ALL, updateActionRibbon);
  document.addEventListener(events.ROW_SELECTION_CHANGED, updateActionRibbon);
  return \`
    <style>
    .hidden-large {
        display: none;
    }

    @media only screen and (max-width: 800px) {
        .hidden-large {
            display:flex;
        }
        .hidden-small {
            display: none;
        }
    }
    </style>
    <cv-app-shell
    \${appName ? \`appName="\${appName}"\` : ''}
    \${sectionTitle ? \`sectionName="\${sectionTitle}"\` : ''}
    \${forcedOpen ? \`forcedOpen open\` : ''}
    \${contained ? \`contained\` : ''}
    \${fullWidth ? \`fullWidth\` : ''}
    \${helpResizable ? \`helpResizable\` : ''}

    >

      <cv-icon-button slot="section-action" icon="arrow_back"></cv-icon-button>

      <svg
        slot="logo"
        width="103"
        height="20"
        viewBox="0 0 103 20"
        style="fill: var(--cv-theme-text-logo-on-background)"
        fill="none">
        <path d="M0 2.30182H3.53561V5.6615H7.47898V8.88045H3.53561V14.5072C3.53561 15.9632 4.26909 16.4391 5.30341 16.4391H7.47898V19.658H5.30341C1.68575 19.658 0 18.0358 0 14.5072V2.30182Z" />
        <path d="M15.9376 19.9907C11.5865 19.9907 8.67492 17.0506 8.67492 12.6854C8.67492 8.32008 11.5318 5.32374 15.7461 5.32374C19.9605 5.32374 22.708 8.17934 22.708 12.5446C22.708 12.9643 22.6806 13.4121 22.5986 13.9443H12.3746C12.7003 15.9043 13.8714 16.828 15.9923 16.828C17.325 16.828 18.3046 16.2395 18.685 15.4565H22.33C21.5145 18.1714 19.2295 19.9907 15.9376 19.9907ZM12.4293 10.9787H19.0107C18.6577 9.21565 17.6233 8.37637 15.7461 8.37637C13.9783 8.37637 12.8371 9.27194 12.4293 10.9787Z" />
        <path d="M24.6672 5.65895H28.0661V7.33751C29.3167 6.05044 30.8135 5.40563 32.2282 5.65895V9.01863C30.4604 8.79601 29.3192 9.63529 28.2028 11.1168V19.6529H24.6672V5.65895Z" />
        <path d="M36.6316 19.8218C34.1303 19.8218 32.1437 18.3096 32.1437 15.1751C32.1437 12.6009 33.7201 10.8379 37.2557 10.8379H40.3288V10.4183C40.3288 9.13121 39.5406 8.59898 37.5814 8.59898C36.276 8.59898 35.2417 8.73972 33.827 9.15936V5.88412C34.916 5.57706 36.276 5.38004 37.8797 5.38004C41.9599 5.38004 43.8619 6.97416 43.8619 10.4183V19.6555H40.4084V18.8443L39.6202 19.1795C38.6132 19.5992 37.5814 19.8244 36.6291 19.8244L36.6316 19.8218ZM38.5635 16.5466L40.3313 15.7636V13.6935H37.6386C36.4153 13.6935 35.6793 14.282 35.6793 15.2058C35.6793 16.2984 36.4128 16.828 37.3377 16.828C37.7181 16.828 38.1532 16.7154 38.561 16.5491L38.5635 16.5466Z" />
        <path d="M56.3758 19.6555V18.7318L56.1868 18.8162C54.9362 19.4329 53.6035 19.7399 52.3255 19.7399C48.9267 19.7399 45.9331 17.4728 45.9331 12.6598C45.9331 7.8467 48.9242 5.55148 52.3529 5.55148C53.6035 5.55148 54.9362 5.85853 56.1868 6.4752L56.2962 6.53149V0.341797H59.8318V19.6555H56.3758ZM52.9769 16.3802C53.7378 16.3802 54.5806 16.1832 55.4509 15.7636L56.2938 15.3439V9.97049L55.4509 9.55085C54.5806 9.13121 53.7378 8.93419 52.9769 8.93419C51.0177 8.93419 49.5507 10.1931 49.5507 12.6572C49.5507 15.1213 51.0202 16.3802 52.9769 16.3802Z" />
        <path d="M66.2218 19.8218C63.7205 19.8218 61.7339 18.3096 61.7339 15.1751C61.7339 12.6009 63.3103 10.8379 66.8459 10.8379H69.919V10.4183C69.919 9.13121 69.1308 8.59898 67.1716 8.59898C65.8662 8.59898 64.8319 8.73972 63.4172 9.15936V5.88412C64.5062 5.57706 65.8662 5.38004 67.4699 5.38004C71.5501 5.38004 73.4521 6.97416 73.4521 10.4183V19.6555H69.9986V18.8443L69.2104 19.1795C68.2034 19.5992 67.1716 19.8244 66.2193 19.8244L66.2218 19.8218ZM68.1537 16.5466L69.9215 15.7636V13.6935H67.2288C66.0055 13.6935 65.2695 14.282 65.2695 15.2058C65.2695 16.2984 66.003 16.828 66.9279 16.828C67.3083 16.828 67.7435 16.7154 68.1512 16.5491L68.1537 16.5466Z" />
        <path d="M76.0653 2.30182H79.6009V5.6615H83.5443V8.88045H79.6009V14.5072C79.6009 15.9632 80.3344 16.4391 81.3687 16.4391H83.5443V19.658H81.3687C77.7511 19.658 76.0653 18.0358 76.0653 14.5072V2.30182Z" />
        <path d="M89.2555 19.8218C86.7542 19.8218 84.7676 18.3096 84.7676 15.1751C84.7676 12.6009 86.3439 10.8379 89.8795 10.8379H92.9527V10.4183C92.9527 9.13121 92.1645 8.59898 90.2053 8.59898C88.8999 8.59898 87.8656 8.73972 86.4509 9.15936V5.88412C87.5399 5.57706 88.8999 5.38004 90.5036 5.38004C94.5837 5.38004 96.4858 6.97416 96.4858 10.4183V19.6555H93.0323V18.8443L92.2441 19.1795C91.2371 19.5992 90.2053 19.8244 89.253 19.8244L89.2555 19.8218ZM91.1874 16.5466L92.9552 15.7636V13.6935H90.2624C89.0392 13.6935 88.3032 14.282 88.3032 15.2058C88.3032 16.2984 89.0367 16.828 89.9616 16.828C90.342 16.828 90.7771 16.7154 91.1849 16.5491L91.1874 16.5466Z" />
        <path d="M98.5296 18.0588C98.5296 16.9943 99.3451 16.1551 100.407 16.1551C101.468 16.1551 102.284 16.9943 102.284 18.0588C102.284 19.1233 101.441 19.9907 100.407 19.9907C99.3725 19.9907 98.5296 19.1233 98.5296 18.0588Z" />
      </svg>

      <cv-list
        class="navigation-rail"
        slot="navigation"
        activatable
      >
      <cv-nav-list-item graphic="avatar">
        <cv-icon class="home-icon" slot="graphic">home</cv-icon>
        Home
      </cv-nav-list-item>

      <cv-nav-list-item graphic="avatar" hasChildren>
        <span>Editor</span>
        <cv-icon class="covalent-icon" slot="graphic">product_editor</cv-icon>
        <cv-list
          slot="expansion-panel"
          activatable>
          <cv-nav-list-item subNav>Scripts</cv-nav-list-item>
          <cv-nav-list-item subNav>Scripts</cv-nav-list-item>
          <cv-nav-list-item subNav>Scripts</cv-nav-list-item>
          <cv-nav-list-item subNav>Scripts</cv-nav-list-item>
          <cv-nav-list-item subNav>Scripts</cv-nav-list-item>
        </cv-list>
      </cv-nav-list-item>

        <cv-nav-list-item graphic="avatar">
          <span>Sites</span>
          <cv-icon class="covalent-icon" slot="graphic">server</cv-icon>
        </cv-nav-list-item>
        <cv-nav-list-item graphic="avatar">
          <span>Data Protections</span>
          <cv-icon slot="graphic">settings_backup_restore</cv-icon>
        </cv-nav-list-item>
        <cv-nav-list-item graphic="avatar">
          <span>Identity</span>
          <cv-icon slot="graphic">contacts</cv-icon>
        </cv-nav-list-item>
      </cv-list>

      <cv-toolbar slot="user-menu" sticky>
       <span slot="title" style="display:flex; align-items: center">
        <cv-typography scale="body1">All environments</cv-typography>
        <cv-icon>arrow_drop_down</cv-icon>
       </span>

       <cv-textfield slot="actionItems" icon="forum" placeholder="Message ask.ai" style="margin-right: 8px" dense></cv-textfield>
       <cv-icon-button slot="actionItems" icon="notifications"></cv-icon-button>
       <cv-icon-button-toggle slot="actionItems" onIcon="help" offIcon="help" class="help-item"></cv-icon-button-toggle>
       <cv-icon-button slot="actionItems" icon="person" style="margin-right: -12px"></cv-icon-button>
      </cv-toolbar>

      <div slot="help" class="help-panel mdc-typography">
        <cv-toolbar sticky>
          <span slot="title" style="padding-left: 12px;">Help</span>
          <cv-icon-button
            slot="actionItems"
            icon="undock"
            covalent-icons
          ></cv-icon-button>
          <cv-icon-button
            slot="actionItems"
            icon="close"
            class="help-close"
            style="margin-right: -4px;"
          ></cv-icon-button>
        </cv-toolbar>
        <div class="help-content" style="padding: 16px 24px 24px">
          <cv-typography scale="headline5">
            Ultricies nunc massa, id ut felis sed varius accumsan platea.
          </cv-typography><br />
          <cv-typography scale="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            tincidunt lectus risus, id aliquet mi congue sed.
          </cv-typography><br />
          <cv-typography scale="body1">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            pouere cubilia curae; Phasellus tincidunt eros arcu, sollicitudin
            laoreet urna aliquet eget.
          </cv-typography><br />
          <cv-typography scale="body1">
            Phasellus porta sed libero vel vulputate. Quisque non nisl sem.
            Pellentesque nec pretium magna, et vestibulum neque. Mauris molestie
            eros quis nisi pretium,
          </cv-typography><br />
          <cv-typography scale="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            tincidunt lectus risus, id aliquet mi congue sed.
          </cv-typography><br />
          <cv-typography scale="body1">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            pouere cubilia curae; Phasellus tincidunt eros arcu, sollicitudin
            laoreet urna aliquet eget.
          </cv-typography><br />
          <cv-typography scale="body1">
            Phasellus porta sed libero vel vulputate. Quisque non nisl sem.
            Pellentesque nec pretium magna, et vestibulum neque. Mauris molestie
            eros quis nisi pretium,
          </cv-typography>
        </div>
      </div>
      <div slot="mini-list">
        <cv-toolbar divider>
          <span slot="title">[Page name]</span>
          <cv-icon-button
            slot="actionItems"
            icon="filter_list"
          ></cv-icon-button>
          <cv-icon-button slot="actionItems" icon="add"></cv-icon-button>
        </cv-toolbar>
        <cv-list activatable>
          <cv-list-item graphic="avatar" twoline>
            <cv-icon covalent slot="graphic">server</cv-icon>
            <span>[Object name]</span>
            <span slot="secondary">Secondary info</span>
          </cv-list-item>
          <cv-list-item graphic="avatar" twoline>
            <cv-icon covalent slot="graphic">server</cv-icon>
            <span>[Object name]</span>
            <span slot="secondary">Secondary info</span>
          </cv-list-item>
          <cv-list-item graphic="avatar" twoline activated>
            <cv-icon covalent slot="graphic">server</cv-icon>
            <span>[Object name]</span>
            <span slot="secondary">Secondary info</span>
          </cv-list-item>
          <cv-list-item graphic="avatar" twoline>
            <cv-icon covalent slot="graphic">server</cv-icon>
            <span>[Object name]</span>
            <span slot="secondary">Secondary info</span>
          </cv-list-item>
        </cv-list>
      </div>

      <cv-toolbar>
        <span slot="title">[Section name]</span>
        <cv-icon-button slot="actionItems" icon="menu_open"></cv-icon-button>
        <cv-icon-button
          class="hidden-large"
          slot="actionItems"
          icon="add"
        ></cv-icon-button>
        <cv-button
          class="hidden-small"
          class="create-new-button"
          label="Create new"
          slot="actionItems"
          raised
        ></cv-button>
      </cv-toolbar>

      <cv-tab-bar>
        <cv-tab label="Overview"></cv-tab>
        <cv-tab label="Usage"></cv-tab>
        <cv-tab label="Objects"></cv-tab>
        <cv-tab label="Queries"></cv-tab>
        <cv-tab label="Network"></cv-tab>
        <cv-tab label="Settings"></cv-tab>
      </cv-tab-bar>

      <cv-action-ribbon labelText="this is my label" state="active">
        <cv-button
          slot="action-items"
          class="mdc-banner__secondary-action"
          outlined
          >Bulk action</cv-button
        >
      </cv-action-ribbon>

      \${tableRowSelectionContent}
    </cv-app-shell>
    \`;
}`,...($=(A=V.parameters)==null?void 0:A.docs)==null?void 0:$.source}}};var P,D,Z;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`({
  appName = '[App name]',
  sectionTitle = '',
  forcedOpen = false,
  contained = true,
  fullWidth = false,
  helpResizable = true
}) => {
  document.addEventListener('DOMContentLoaded', () => {
    const dataTableEl = document.querySelector('.mdc-data-table');
    const helpItem = document.querySelector('.help-item');
    appShell = document.querySelector('cv-app-shell');
    banner = document.querySelector('cv-action-ribbon');
    dataTable = new MDCDataTable(dataTableEl);
    helpItem.addEventListener('click', () => {
      appShell.helpOpen = !appShell.helpOpen;
    });
    document.querySelector('.help-close').addEventListener('click', () => {
      appShell.helpOpen = false;
      helpItem.on = false;
    });
    setTimeout(updateActionRibbon, 150);
  }, {
    once: true
  });
  document.addEventListener(events.SELECTED_ALL, updateActionRibbon);
  document.addEventListener(events.UNSELECTED_ALL, updateActionRibbon);
  document.addEventListener(events.ROW_SELECTION_CHANGED, updateActionRibbon);
  return \`
    <style>
    .hidden-large {
        display: none;
    }

    @media only screen and (max-width: 800px) {
        .hidden-large {
            display:flex;
        }
        .hidden-small {
            display: none;
        }
    }
    </style>
    <cv-app-shell
    \${appName ? \`appName="\${appName}"\` : ''}
    \${sectionTitle ? \`sectionName="\${sectionTitle}"\` : ''}
    \${forcedOpen ? \`forcedOpen open\` : ''}
    \${contained ? \`contained\` : ''}
    \${fullWidth ? \`fullWidth\` : ''}
    \${helpResizable ? \`helpResizable\` : ''}

    >

      <cv-icon-button slot="section-action" icon="arrow_back"></cv-icon-button>

      <svg
        slot="logo"
        width="103"
        height="20"
        viewBox="0 0 103 20"
        style="fill: var(--cv-theme-text-logo-on-background)"
        fill="none">
        <path d="M0 2.30182H3.53561V5.6615H7.47898V8.88045H3.53561V14.5072C3.53561 15.9632 4.26909 16.4391 5.30341 16.4391H7.47898V19.658H5.30341C1.68575 19.658 0 18.0358 0 14.5072V2.30182Z" />
        <path d="M15.9376 19.9907C11.5865 19.9907 8.67492 17.0506 8.67492 12.6854C8.67492 8.32008 11.5318 5.32374 15.7461 5.32374C19.9605 5.32374 22.708 8.17934 22.708 12.5446C22.708 12.9643 22.6806 13.4121 22.5986 13.9443H12.3746C12.7003 15.9043 13.8714 16.828 15.9923 16.828C17.325 16.828 18.3046 16.2395 18.685 15.4565H22.33C21.5145 18.1714 19.2295 19.9907 15.9376 19.9907ZM12.4293 10.9787H19.0107C18.6577 9.21565 17.6233 8.37637 15.7461 8.37637C13.9783 8.37637 12.8371 9.27194 12.4293 10.9787Z" />
        <path d="M24.6672 5.65895H28.0661V7.33751C29.3167 6.05044 30.8135 5.40563 32.2282 5.65895V9.01863C30.4604 8.79601 29.3192 9.63529 28.2028 11.1168V19.6529H24.6672V5.65895Z" />
        <path d="M36.6316 19.8218C34.1303 19.8218 32.1437 18.3096 32.1437 15.1751C32.1437 12.6009 33.7201 10.8379 37.2557 10.8379H40.3288V10.4183C40.3288 9.13121 39.5406 8.59898 37.5814 8.59898C36.276 8.59898 35.2417 8.73972 33.827 9.15936V5.88412C34.916 5.57706 36.276 5.38004 37.8797 5.38004C41.9599 5.38004 43.8619 6.97416 43.8619 10.4183V19.6555H40.4084V18.8443L39.6202 19.1795C38.6132 19.5992 37.5814 19.8244 36.6291 19.8244L36.6316 19.8218ZM38.5635 16.5466L40.3313 15.7636V13.6935H37.6386C36.4153 13.6935 35.6793 14.282 35.6793 15.2058C35.6793 16.2984 36.4128 16.828 37.3377 16.828C37.7181 16.828 38.1532 16.7154 38.561 16.5491L38.5635 16.5466Z" />
        <path d="M56.3758 19.6555V18.7318L56.1868 18.8162C54.9362 19.4329 53.6035 19.7399 52.3255 19.7399C48.9267 19.7399 45.9331 17.4728 45.9331 12.6598C45.9331 7.8467 48.9242 5.55148 52.3529 5.55148C53.6035 5.55148 54.9362 5.85853 56.1868 6.4752L56.2962 6.53149V0.341797H59.8318V19.6555H56.3758ZM52.9769 16.3802C53.7378 16.3802 54.5806 16.1832 55.4509 15.7636L56.2938 15.3439V9.97049L55.4509 9.55085C54.5806 9.13121 53.7378 8.93419 52.9769 8.93419C51.0177 8.93419 49.5507 10.1931 49.5507 12.6572C49.5507 15.1213 51.0202 16.3802 52.9769 16.3802Z" />
        <path d="M66.2218 19.8218C63.7205 19.8218 61.7339 18.3096 61.7339 15.1751C61.7339 12.6009 63.3103 10.8379 66.8459 10.8379H69.919V10.4183C69.919 9.13121 69.1308 8.59898 67.1716 8.59898C65.8662 8.59898 64.8319 8.73972 63.4172 9.15936V5.88412C64.5062 5.57706 65.8662 5.38004 67.4699 5.38004C71.5501 5.38004 73.4521 6.97416 73.4521 10.4183V19.6555H69.9986V18.8443L69.2104 19.1795C68.2034 19.5992 67.1716 19.8244 66.2193 19.8244L66.2218 19.8218ZM68.1537 16.5466L69.9215 15.7636V13.6935H67.2288C66.0055 13.6935 65.2695 14.282 65.2695 15.2058C65.2695 16.2984 66.003 16.828 66.9279 16.828C67.3083 16.828 67.7435 16.7154 68.1512 16.5491L68.1537 16.5466Z" />
        <path d="M76.0653 2.30182H79.6009V5.6615H83.5443V8.88045H79.6009V14.5072C79.6009 15.9632 80.3344 16.4391 81.3687 16.4391H83.5443V19.658H81.3687C77.7511 19.658 76.0653 18.0358 76.0653 14.5072V2.30182Z" />
        <path d="M89.2555 19.8218C86.7542 19.8218 84.7676 18.3096 84.7676 15.1751C84.7676 12.6009 86.3439 10.8379 89.8795 10.8379H92.9527V10.4183C92.9527 9.13121 92.1645 8.59898 90.2053 8.59898C88.8999 8.59898 87.8656 8.73972 86.4509 9.15936V5.88412C87.5399 5.57706 88.8999 5.38004 90.5036 5.38004C94.5837 5.38004 96.4858 6.97416 96.4858 10.4183V19.6555H93.0323V18.8443L92.2441 19.1795C91.2371 19.5992 90.2053 19.8244 89.253 19.8244L89.2555 19.8218ZM91.1874 16.5466L92.9552 15.7636V13.6935H90.2624C89.0392 13.6935 88.3032 14.282 88.3032 15.2058C88.3032 16.2984 89.0367 16.828 89.9616 16.828C90.342 16.828 90.7771 16.7154 91.1849 16.5491L91.1874 16.5466Z" />
        <path d="M98.5296 18.0588C98.5296 16.9943 99.3451 16.1551 100.407 16.1551C101.468 16.1551 102.284 16.9943 102.284 18.0588C102.284 19.1233 101.441 19.9907 100.407 19.9907C99.3725 19.9907 98.5296 19.1233 98.5296 18.0588Z" />
      </svg>

      <cv-list
        class="navigation-rail"
        slot="navigation"
        activatable
      >
      <cv-nav-list-item graphic="avatar">
        <cv-icon class="home-icon" slot="graphic">home</cv-icon>
        Home
      </cv-nav-list-item>

      <cv-nav-list-item graphic="avatar" hasChildren>
        <span>Editor</span>
        <cv-icon class="covalent-icon" slot="graphic">product_editor</cv-icon>
        <cv-list
          slot="expansion-panel"
          activatable>
          <cv-nav-list-item subNav>Scripts</cv-nav-list-item>
          <cv-nav-list-item subNav>Scripts</cv-nav-list-item>
          <cv-nav-list-item subNav>Scripts</cv-nav-list-item>
          <cv-nav-list-item subNav>Scripts</cv-nav-list-item>
          <cv-nav-list-item subNav>Scripts</cv-nav-list-item>
        </cv-list>
      </cv-nav-list-item>

        <cv-nav-list-item graphic="avatar">
          <span>Sites</span>
          <cv-icon class="covalent-icon" slot="graphic">server</cv-icon>
        </cv-nav-list-item>
        <cv-nav-list-item graphic="avatar">
          <span>Data Protections</span>
          <cv-icon slot="graphic">settings_backup_restore</cv-icon>
        </cv-nav-list-item>
        <cv-nav-list-item graphic="avatar">
          <span>Identity</span>
          <cv-icon slot="graphic">contacts</cv-icon>
        </cv-nav-list-item>
      </cv-list>

      <cv-toolbar slot="user-menu" sticky>
       <span slot="title" style="display:flex; align-items: center">
        <cv-typography scale="body1">All environments</cv-typography>
        <cv-icon>arrow_drop_down</cv-icon>
       </span>

       <cv-textfield slot="actionItems" icon="forum" placeholder="Message ask.ai" style="margin-right: 8px" dense></cv-textfield>
       <cv-icon-button slot="actionItems" icon="notifications"></cv-icon-button>
       <cv-icon-button-toggle slot="actionItems" onIcon="help" offIcon="help" class="help-item"></cv-icon-button-toggle>
       <cv-icon-button slot="actionItems" icon="person" style="margin-right: -12px"></cv-icon-button>
      </cv-toolbar>

      <div slot="help" class="help-panel mdc-typography">
        <cv-toolbar sticky>
          <span slot="title" style="padding-left: 12px;">Help</span>
          <cv-icon-button
            slot="actionItems"
            icon="undock"
            covalent-icons
          ></cv-icon-button>
          <cv-icon-button
            slot="actionItems"
            icon="close"
            class="help-close"
            style="margin-right: -4px;"
          ></cv-icon-button>
        </cv-toolbar>
        <div class="help-content" style="padding: 16px 24px 24px">
          <cv-typography scale="headline5">
            Ultricies nunc massa, id ut felis sed varius accumsan platea.
          </cv-typography><br />
          <cv-typography scale="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            tincidunt lectus risus, id aliquet mi congue sed.
          </cv-typography><br />
          <cv-typography scale="body1">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            pouere cubilia curae; Phasellus tincidunt eros arcu, sollicitudin
            laoreet urna aliquet eget.
          </cv-typography><br />
          <cv-typography scale="body1">
            Phasellus porta sed libero vel vulputate. Quisque non nisl sem.
            Pellentesque nec pretium magna, et vestibulum neque. Mauris molestie
            eros quis nisi pretium,
          </cv-typography><br />
          <cv-typography scale="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            tincidunt lectus risus, id aliquet mi congue sed.
          </cv-typography><br />
          <cv-typography scale="body1">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            pouere cubilia curae; Phasellus tincidunt eros arcu, sollicitudin
            laoreet urna aliquet eget.
          </cv-typography><br />
          <cv-typography scale="body1">
            Phasellus porta sed libero vel vulputate. Quisque non nisl sem.
            Pellentesque nec pretium magna, et vestibulum neque. Mauris molestie
            eros quis nisi pretium,
          </cv-typography>
        </div>
      </div>
      <div slot="mini-list">
        <cv-toolbar divider>
          <span slot="title">[Page name]</span>
          <cv-icon-button
            slot="actionItems"
            icon="filter_list"
          ></cv-icon-button>
          <cv-icon-button slot="actionItems" icon="add"></cv-icon-button>
        </cv-toolbar>
        <cv-list activatable>
          <cv-list-item graphic="avatar" twoline>
            <cv-icon covalent slot="graphic">server</cv-icon>
            <span>[Object name]</span>
            <span slot="secondary">Secondary info</span>
          </cv-list-item>
          <cv-list-item graphic="avatar" twoline>
            <cv-icon covalent slot="graphic">server</cv-icon>
            <span>[Object name]</span>
            <span slot="secondary">Secondary info</span>
          </cv-list-item>
          <cv-list-item graphic="avatar" twoline activated>
            <cv-icon covalent slot="graphic">server</cv-icon>
            <span>[Object name]</span>
            <span slot="secondary">Secondary info</span>
          </cv-list-item>
          <cv-list-item graphic="avatar" twoline>
            <cv-icon covalent slot="graphic">server</cv-icon>
            <span>[Object name]</span>
            <span slot="secondary">Secondary info</span>
          </cv-list-item>
        </cv-list>
      </div>

      <cv-toolbar>
        <span slot="title">[Section name]</span>
        <cv-icon-button slot="actionItems" icon="menu_open"></cv-icon-button>
        <cv-icon-button
          class="hidden-large"
          slot="actionItems"
          icon="add"
        ></cv-icon-button>
        <cv-button
          class="hidden-small"
          class="create-new-button"
          label="Create new"
          slot="actionItems"
          raised
        ></cv-button>
      </cv-toolbar>

      <cv-tab-bar>
        <cv-tab label="Overview"></cv-tab>
        <cv-tab label="Usage"></cv-tab>
        <cv-tab label="Objects"></cv-tab>
        <cv-tab label="Queries"></cv-tab>
        <cv-tab label="Network"></cv-tab>
        <cv-tab label="Settings"></cv-tab>
      </cv-tab-bar>

      <cv-action-ribbon labelText="this is my label" state="active">
        <cv-button
          slot="action-items"
          class="mdc-banner__secondary-action"
          outlined
          >Bulk action</cv-button
        >
      </cv-action-ribbon>

      \${tableRowSelectionContent}
    </cv-app-shell>
    \`;
}`,...(Z=(D=b.parameters)==null?void 0:D.docs)==null?void 0:Z.source}}};var W,F,j;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`({
  appName = '[App name]',
  sectionTitle = '',
  forcedOpen = false,
  contained = true,
  fullWidth = false,
  helpResizable = true
}) => {
  document.addEventListener('DOMContentLoaded', () => {
    const dataTableEl = document.querySelector('.mdc-data-table');
    const helpItem = document.querySelector('.help-item');
    appShell = document.querySelector('cv-app-shell');
    banner = document.querySelector('cv-action-ribbon');
    dataTable = new MDCDataTable(dataTableEl);
    helpItem.addEventListener('click', () => {
      appShell.helpOpen = !appShell.helpOpen;
    });
    document.querySelector('.help-close').addEventListener('click', () => {
      appShell.helpOpen = false;
      helpItem.on = false;
    });
    setTimeout(updateActionRibbon, 150);
  }, {
    once: true
  });
  document.addEventListener(events.SELECTED_ALL, updateActionRibbon);
  document.addEventListener(events.UNSELECTED_ALL, updateActionRibbon);
  document.addEventListener(events.ROW_SELECTION_CHANGED, updateActionRibbon);
  return \`
    <style>
    .hidden-large {
        display: none;
    }

    @media only screen and (max-width: 800px) {
        .hidden-large {
            display:flex;
        }
        .hidden-small {
            display: none;
        }
    }
    </style>
    <cv-app-shell
    \${appName ? \`appName="\${appName}"\` : ''}
    \${sectionTitle ? \`sectionName="\${sectionTitle}"\` : ''}
    \${forcedOpen ? \`forcedOpen open\` : ''}
    \${contained ? \`contained\` : ''}
    \${fullWidth ? \`fullWidth\` : ''}
    \${helpResizable ? \`helpResizable\` : ''}

    >

      <cv-icon-button slot="section-action" icon="arrow_back"></cv-icon-button>

      <svg
        slot="logo"
        width="103"
        height="20"
        viewBox="0 0 103 20"
        style="fill: var(--cv-theme-text-logo-on-background)"
        fill="none">
        <path d="M0 2.30182H3.53561V5.6615H7.47898V8.88045H3.53561V14.5072C3.53561 15.9632 4.26909 16.4391 5.30341 16.4391H7.47898V19.658H5.30341C1.68575 19.658 0 18.0358 0 14.5072V2.30182Z" />
        <path d="M15.9376 19.9907C11.5865 19.9907 8.67492 17.0506 8.67492 12.6854C8.67492 8.32008 11.5318 5.32374 15.7461 5.32374C19.9605 5.32374 22.708 8.17934 22.708 12.5446C22.708 12.9643 22.6806 13.4121 22.5986 13.9443H12.3746C12.7003 15.9043 13.8714 16.828 15.9923 16.828C17.325 16.828 18.3046 16.2395 18.685 15.4565H22.33C21.5145 18.1714 19.2295 19.9907 15.9376 19.9907ZM12.4293 10.9787H19.0107C18.6577 9.21565 17.6233 8.37637 15.7461 8.37637C13.9783 8.37637 12.8371 9.27194 12.4293 10.9787Z" />
        <path d="M24.6672 5.65895H28.0661V7.33751C29.3167 6.05044 30.8135 5.40563 32.2282 5.65895V9.01863C30.4604 8.79601 29.3192 9.63529 28.2028 11.1168V19.6529H24.6672V5.65895Z" />
        <path d="M36.6316 19.8218C34.1303 19.8218 32.1437 18.3096 32.1437 15.1751C32.1437 12.6009 33.7201 10.8379 37.2557 10.8379H40.3288V10.4183C40.3288 9.13121 39.5406 8.59898 37.5814 8.59898C36.276 8.59898 35.2417 8.73972 33.827 9.15936V5.88412C34.916 5.57706 36.276 5.38004 37.8797 5.38004C41.9599 5.38004 43.8619 6.97416 43.8619 10.4183V19.6555H40.4084V18.8443L39.6202 19.1795C38.6132 19.5992 37.5814 19.8244 36.6291 19.8244L36.6316 19.8218ZM38.5635 16.5466L40.3313 15.7636V13.6935H37.6386C36.4153 13.6935 35.6793 14.282 35.6793 15.2058C35.6793 16.2984 36.4128 16.828 37.3377 16.828C37.7181 16.828 38.1532 16.7154 38.561 16.5491L38.5635 16.5466Z" />
        <path d="M56.3758 19.6555V18.7318L56.1868 18.8162C54.9362 19.4329 53.6035 19.7399 52.3255 19.7399C48.9267 19.7399 45.9331 17.4728 45.9331 12.6598C45.9331 7.8467 48.9242 5.55148 52.3529 5.55148C53.6035 5.55148 54.9362 5.85853 56.1868 6.4752L56.2962 6.53149V0.341797H59.8318V19.6555H56.3758ZM52.9769 16.3802C53.7378 16.3802 54.5806 16.1832 55.4509 15.7636L56.2938 15.3439V9.97049L55.4509 9.55085C54.5806 9.13121 53.7378 8.93419 52.9769 8.93419C51.0177 8.93419 49.5507 10.1931 49.5507 12.6572C49.5507 15.1213 51.0202 16.3802 52.9769 16.3802Z" />
        <path d="M66.2218 19.8218C63.7205 19.8218 61.7339 18.3096 61.7339 15.1751C61.7339 12.6009 63.3103 10.8379 66.8459 10.8379H69.919V10.4183C69.919 9.13121 69.1308 8.59898 67.1716 8.59898C65.8662 8.59898 64.8319 8.73972 63.4172 9.15936V5.88412C64.5062 5.57706 65.8662 5.38004 67.4699 5.38004C71.5501 5.38004 73.4521 6.97416 73.4521 10.4183V19.6555H69.9986V18.8443L69.2104 19.1795C68.2034 19.5992 67.1716 19.8244 66.2193 19.8244L66.2218 19.8218ZM68.1537 16.5466L69.9215 15.7636V13.6935H67.2288C66.0055 13.6935 65.2695 14.282 65.2695 15.2058C65.2695 16.2984 66.003 16.828 66.9279 16.828C67.3083 16.828 67.7435 16.7154 68.1512 16.5491L68.1537 16.5466Z" />
        <path d="M76.0653 2.30182H79.6009V5.6615H83.5443V8.88045H79.6009V14.5072C79.6009 15.9632 80.3344 16.4391 81.3687 16.4391H83.5443V19.658H81.3687C77.7511 19.658 76.0653 18.0358 76.0653 14.5072V2.30182Z" />
        <path d="M89.2555 19.8218C86.7542 19.8218 84.7676 18.3096 84.7676 15.1751C84.7676 12.6009 86.3439 10.8379 89.8795 10.8379H92.9527V10.4183C92.9527 9.13121 92.1645 8.59898 90.2053 8.59898C88.8999 8.59898 87.8656 8.73972 86.4509 9.15936V5.88412C87.5399 5.57706 88.8999 5.38004 90.5036 5.38004C94.5837 5.38004 96.4858 6.97416 96.4858 10.4183V19.6555H93.0323V18.8443L92.2441 19.1795C91.2371 19.5992 90.2053 19.8244 89.253 19.8244L89.2555 19.8218ZM91.1874 16.5466L92.9552 15.7636V13.6935H90.2624C89.0392 13.6935 88.3032 14.282 88.3032 15.2058C88.3032 16.2984 89.0367 16.828 89.9616 16.828C90.342 16.828 90.7771 16.7154 91.1849 16.5491L91.1874 16.5466Z" />
        <path d="M98.5296 18.0588C98.5296 16.9943 99.3451 16.1551 100.407 16.1551C101.468 16.1551 102.284 16.9943 102.284 18.0588C102.284 19.1233 101.441 19.9907 100.407 19.9907C99.3725 19.9907 98.5296 19.1233 98.5296 18.0588Z" />
      </svg>

      <cv-list
        class="navigation-rail"
        slot="navigation"
        activatable
      >
      <cv-nav-list-item graphic="avatar">
        <cv-icon class="home-icon" slot="graphic">home</cv-icon>
        Home
      </cv-nav-list-item>

      <cv-nav-list-item graphic="avatar" hasChildren>
        <span>Editor</span>
        <cv-icon class="covalent-icon" slot="graphic">product_editor</cv-icon>
        <cv-list
          slot="expansion-panel"
          activatable>
          <cv-nav-list-item subNav>Scripts</cv-nav-list-item>
          <cv-nav-list-item subNav>Scripts</cv-nav-list-item>
          <cv-nav-list-item subNav>Scripts</cv-nav-list-item>
          <cv-nav-list-item subNav>Scripts</cv-nav-list-item>
          <cv-nav-list-item subNav>Scripts</cv-nav-list-item>
        </cv-list>
      </cv-nav-list-item>

        <cv-nav-list-item graphic="avatar">
          <span>Sites</span>
          <cv-icon class="covalent-icon" slot="graphic">server</cv-icon>
        </cv-nav-list-item>
        <cv-nav-list-item graphic="avatar">
          <span>Data Protections</span>
          <cv-icon slot="graphic">settings_backup_restore</cv-icon>
        </cv-nav-list-item>
        <cv-nav-list-item graphic="avatar">
          <span>Identity</span>
          <cv-icon slot="graphic">contacts</cv-icon>
        </cv-nav-list-item>
      </cv-list>

      <cv-toolbar slot="user-menu" sticky>
       <span slot="title" style="display:flex; align-items: center">
        <cv-typography scale="body1">All environments</cv-typography>
        <cv-icon>arrow_drop_down</cv-icon>
       </span>

       <cv-textfield slot="actionItems" icon="forum" placeholder="Message ask.ai" style="margin-right: 8px" dense></cv-textfield>
       <cv-icon-button slot="actionItems" icon="notifications"></cv-icon-button>
       <cv-icon-button-toggle slot="actionItems" onIcon="help" offIcon="help" class="help-item"></cv-icon-button-toggle>
       <cv-icon-button slot="actionItems" icon="person" style="margin-right: -12px"></cv-icon-button>
      </cv-toolbar>

      <div slot="help" class="help-panel mdc-typography">
        <cv-toolbar sticky>
          <span slot="title" style="padding-left: 12px;">Help</span>
          <cv-icon-button
            slot="actionItems"
            icon="undock"
            covalent-icons
          ></cv-icon-button>
          <cv-icon-button
            slot="actionItems"
            icon="close"
            class="help-close"
            style="margin-right: -4px;"
          ></cv-icon-button>
        </cv-toolbar>
        <div class="help-content" style="padding: 16px 24px 24px">
          <cv-typography scale="headline5">
            Ultricies nunc massa, id ut felis sed varius accumsan platea.
          </cv-typography><br />
          <cv-typography scale="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            tincidunt lectus risus, id aliquet mi congue sed.
          </cv-typography><br />
          <cv-typography scale="body1">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            pouere cubilia curae; Phasellus tincidunt eros arcu, sollicitudin
            laoreet urna aliquet eget.
          </cv-typography><br />
          <cv-typography scale="body1">
            Phasellus porta sed libero vel vulputate. Quisque non nisl sem.
            Pellentesque nec pretium magna, et vestibulum neque. Mauris molestie
            eros quis nisi pretium,
          </cv-typography><br />
          <cv-typography scale="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            tincidunt lectus risus, id aliquet mi congue sed.
          </cv-typography><br />
          <cv-typography scale="body1">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            pouere cubilia curae; Phasellus tincidunt eros arcu, sollicitudin
            laoreet urna aliquet eget.
          </cv-typography><br />
          <cv-typography scale="body1">
            Phasellus porta sed libero vel vulputate. Quisque non nisl sem.
            Pellentesque nec pretium magna, et vestibulum neque. Mauris molestie
            eros quis nisi pretium,
          </cv-typography>
        </div>
      </div>
      <div slot="mini-list">
        <cv-toolbar divider>
          <span slot="title">[Page name]</span>
          <cv-icon-button
            slot="actionItems"
            icon="filter_list"
          ></cv-icon-button>
          <cv-icon-button slot="actionItems" icon="add"></cv-icon-button>
        </cv-toolbar>
        <cv-list activatable>
          <cv-list-item graphic="avatar" twoline>
            <cv-icon covalent slot="graphic">server</cv-icon>
            <span>[Object name]</span>
            <span slot="secondary">Secondary info</span>
          </cv-list-item>
          <cv-list-item graphic="avatar" twoline>
            <cv-icon covalent slot="graphic">server</cv-icon>
            <span>[Object name]</span>
            <span slot="secondary">Secondary info</span>
          </cv-list-item>
          <cv-list-item graphic="avatar" twoline activated>
            <cv-icon covalent slot="graphic">server</cv-icon>
            <span>[Object name]</span>
            <span slot="secondary">Secondary info</span>
          </cv-list-item>
          <cv-list-item graphic="avatar" twoline>
            <cv-icon covalent slot="graphic">server</cv-icon>
            <span>[Object name]</span>
            <span slot="secondary">Secondary info</span>
          </cv-list-item>
        </cv-list>
      </div>

      <cv-toolbar>
        <span slot="title">[Section name]</span>
        <cv-icon-button slot="actionItems" icon="menu_open"></cv-icon-button>
        <cv-icon-button
          class="hidden-large"
          slot="actionItems"
          icon="add"
        ></cv-icon-button>
        <cv-button
          class="hidden-small"
          class="create-new-button"
          label="Create new"
          slot="actionItems"
          raised
        ></cv-button>
      </cv-toolbar>

      <cv-tab-bar>
        <cv-tab label="Overview"></cv-tab>
        <cv-tab label="Usage"></cv-tab>
        <cv-tab label="Objects"></cv-tab>
        <cv-tab label="Queries"></cv-tab>
        <cv-tab label="Network"></cv-tab>
        <cv-tab label="Settings"></cv-tab>
      </cv-tab-bar>

      <cv-action-ribbon labelText="this is my label" state="active">
        <cv-button
          slot="action-items"
          class="mdc-banner__secondary-action"
          outlined
          >Bulk action</cv-button
        >
      </cv-action-ribbon>

      \${tableRowSelectionContent}
    </cv-app-shell>
    \`;
}`,...(j=(F=g.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var U,B,Q;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`({
  appName = '[App name]',
  sectionTitle = '',
  forcedOpen = false,
  contained = true,
  fullWidth = false,
  helpResizable = true
}) => {
  document.addEventListener('DOMContentLoaded', () => {
    const dataTableEl = document.querySelector('.mdc-data-table');
    const helpItem = document.querySelector('.help-item');
    appShell = document.querySelector('cv-app-shell');
    banner = document.querySelector('cv-action-ribbon');
    dataTable = new MDCDataTable(dataTableEl);
    helpItem.addEventListener('click', () => {
      appShell.helpOpen = !appShell.helpOpen;
    });
    document.querySelector('.help-close').addEventListener('click', () => {
      appShell.helpOpen = false;
      helpItem.on = false;
    });
    setTimeout(updateActionRibbon, 150);
  }, {
    once: true
  });
  document.addEventListener(events.SELECTED_ALL, updateActionRibbon);
  document.addEventListener(events.UNSELECTED_ALL, updateActionRibbon);
  document.addEventListener(events.ROW_SELECTION_CHANGED, updateActionRibbon);
  return \`
    <style>
    .hidden-large {
        display: none;
    }

    @media only screen and (max-width: 800px) {
        .hidden-large {
            display:flex;
        }
        .hidden-small {
            display: none;
        }
    }
    </style>
    <cv-app-shell
    \${appName ? \`appName="\${appName}"\` : ''}
    \${sectionTitle ? \`sectionName="\${sectionTitle}"\` : ''}
    \${forcedOpen ? \`forcedOpen open\` : ''}
    \${contained ? \`contained\` : ''}
    \${fullWidth ? \`fullWidth\` : ''}
    \${helpResizable ? \`helpResizable\` : ''}

    >

      <cv-icon-button slot="section-action" icon="arrow_back"></cv-icon-button>

      <svg
        slot="logo"
        width="103"
        height="20"
        viewBox="0 0 103 20"
        style="fill: var(--cv-theme-text-logo-on-background)"
        fill="none">
        <path d="M0 2.30182H3.53561V5.6615H7.47898V8.88045H3.53561V14.5072C3.53561 15.9632 4.26909 16.4391 5.30341 16.4391H7.47898V19.658H5.30341C1.68575 19.658 0 18.0358 0 14.5072V2.30182Z" />
        <path d="M15.9376 19.9907C11.5865 19.9907 8.67492 17.0506 8.67492 12.6854C8.67492 8.32008 11.5318 5.32374 15.7461 5.32374C19.9605 5.32374 22.708 8.17934 22.708 12.5446C22.708 12.9643 22.6806 13.4121 22.5986 13.9443H12.3746C12.7003 15.9043 13.8714 16.828 15.9923 16.828C17.325 16.828 18.3046 16.2395 18.685 15.4565H22.33C21.5145 18.1714 19.2295 19.9907 15.9376 19.9907ZM12.4293 10.9787H19.0107C18.6577 9.21565 17.6233 8.37637 15.7461 8.37637C13.9783 8.37637 12.8371 9.27194 12.4293 10.9787Z" />
        <path d="M24.6672 5.65895H28.0661V7.33751C29.3167 6.05044 30.8135 5.40563 32.2282 5.65895V9.01863C30.4604 8.79601 29.3192 9.63529 28.2028 11.1168V19.6529H24.6672V5.65895Z" />
        <path d="M36.6316 19.8218C34.1303 19.8218 32.1437 18.3096 32.1437 15.1751C32.1437 12.6009 33.7201 10.8379 37.2557 10.8379H40.3288V10.4183C40.3288 9.13121 39.5406 8.59898 37.5814 8.59898C36.276 8.59898 35.2417 8.73972 33.827 9.15936V5.88412C34.916 5.57706 36.276 5.38004 37.8797 5.38004C41.9599 5.38004 43.8619 6.97416 43.8619 10.4183V19.6555H40.4084V18.8443L39.6202 19.1795C38.6132 19.5992 37.5814 19.8244 36.6291 19.8244L36.6316 19.8218ZM38.5635 16.5466L40.3313 15.7636V13.6935H37.6386C36.4153 13.6935 35.6793 14.282 35.6793 15.2058C35.6793 16.2984 36.4128 16.828 37.3377 16.828C37.7181 16.828 38.1532 16.7154 38.561 16.5491L38.5635 16.5466Z" />
        <path d="M56.3758 19.6555V18.7318L56.1868 18.8162C54.9362 19.4329 53.6035 19.7399 52.3255 19.7399C48.9267 19.7399 45.9331 17.4728 45.9331 12.6598C45.9331 7.8467 48.9242 5.55148 52.3529 5.55148C53.6035 5.55148 54.9362 5.85853 56.1868 6.4752L56.2962 6.53149V0.341797H59.8318V19.6555H56.3758ZM52.9769 16.3802C53.7378 16.3802 54.5806 16.1832 55.4509 15.7636L56.2938 15.3439V9.97049L55.4509 9.55085C54.5806 9.13121 53.7378 8.93419 52.9769 8.93419C51.0177 8.93419 49.5507 10.1931 49.5507 12.6572C49.5507 15.1213 51.0202 16.3802 52.9769 16.3802Z" />
        <path d="M66.2218 19.8218C63.7205 19.8218 61.7339 18.3096 61.7339 15.1751C61.7339 12.6009 63.3103 10.8379 66.8459 10.8379H69.919V10.4183C69.919 9.13121 69.1308 8.59898 67.1716 8.59898C65.8662 8.59898 64.8319 8.73972 63.4172 9.15936V5.88412C64.5062 5.57706 65.8662 5.38004 67.4699 5.38004C71.5501 5.38004 73.4521 6.97416 73.4521 10.4183V19.6555H69.9986V18.8443L69.2104 19.1795C68.2034 19.5992 67.1716 19.8244 66.2193 19.8244L66.2218 19.8218ZM68.1537 16.5466L69.9215 15.7636V13.6935H67.2288C66.0055 13.6935 65.2695 14.282 65.2695 15.2058C65.2695 16.2984 66.003 16.828 66.9279 16.828C67.3083 16.828 67.7435 16.7154 68.1512 16.5491L68.1537 16.5466Z" />
        <path d="M76.0653 2.30182H79.6009V5.6615H83.5443V8.88045H79.6009V14.5072C79.6009 15.9632 80.3344 16.4391 81.3687 16.4391H83.5443V19.658H81.3687C77.7511 19.658 76.0653 18.0358 76.0653 14.5072V2.30182Z" />
        <path d="M89.2555 19.8218C86.7542 19.8218 84.7676 18.3096 84.7676 15.1751C84.7676 12.6009 86.3439 10.8379 89.8795 10.8379H92.9527V10.4183C92.9527 9.13121 92.1645 8.59898 90.2053 8.59898C88.8999 8.59898 87.8656 8.73972 86.4509 9.15936V5.88412C87.5399 5.57706 88.8999 5.38004 90.5036 5.38004C94.5837 5.38004 96.4858 6.97416 96.4858 10.4183V19.6555H93.0323V18.8443L92.2441 19.1795C91.2371 19.5992 90.2053 19.8244 89.253 19.8244L89.2555 19.8218ZM91.1874 16.5466L92.9552 15.7636V13.6935H90.2624C89.0392 13.6935 88.3032 14.282 88.3032 15.2058C88.3032 16.2984 89.0367 16.828 89.9616 16.828C90.342 16.828 90.7771 16.7154 91.1849 16.5491L91.1874 16.5466Z" />
        <path d="M98.5296 18.0588C98.5296 16.9943 99.3451 16.1551 100.407 16.1551C101.468 16.1551 102.284 16.9943 102.284 18.0588C102.284 19.1233 101.441 19.9907 100.407 19.9907C99.3725 19.9907 98.5296 19.1233 98.5296 18.0588Z" />
      </svg>

      <cv-list
        class="navigation-rail"
        slot="navigation"
        activatable
      >
      <cv-nav-list-item graphic="avatar">
        <cv-icon class="home-icon" slot="graphic">home</cv-icon>
        Home
      </cv-nav-list-item>

      <cv-nav-list-item graphic="avatar" hasChildren>
        <span>Editor</span>
        <cv-icon class="covalent-icon" slot="graphic">product_editor</cv-icon>
        <cv-list
          slot="expansion-panel"
          activatable>
          <cv-nav-list-item subNav>Scripts</cv-nav-list-item>
          <cv-nav-list-item subNav>Scripts</cv-nav-list-item>
          <cv-nav-list-item subNav>Scripts</cv-nav-list-item>
          <cv-nav-list-item subNav>Scripts</cv-nav-list-item>
          <cv-nav-list-item subNav>Scripts</cv-nav-list-item>
        </cv-list>
      </cv-nav-list-item>

        <cv-nav-list-item graphic="avatar">
          <span>Sites</span>
          <cv-icon class="covalent-icon" slot="graphic">server</cv-icon>
        </cv-nav-list-item>
        <cv-nav-list-item graphic="avatar">
          <span>Data Protections</span>
          <cv-icon slot="graphic">settings_backup_restore</cv-icon>
        </cv-nav-list-item>
        <cv-nav-list-item graphic="avatar">
          <span>Identity</span>
          <cv-icon slot="graphic">contacts</cv-icon>
        </cv-nav-list-item>
      </cv-list>

      <cv-toolbar slot="user-menu" sticky>
       <span slot="title" style="display:flex; align-items: center">
        <cv-typography scale="body1">All environments</cv-typography>
        <cv-icon>arrow_drop_down</cv-icon>
       </span>

       <cv-textfield slot="actionItems" icon="forum" placeholder="Message ask.ai" style="margin-right: 8px" dense></cv-textfield>
       <cv-icon-button slot="actionItems" icon="notifications"></cv-icon-button>
       <cv-icon-button-toggle slot="actionItems" onIcon="help" offIcon="help" class="help-item"></cv-icon-button-toggle>
       <cv-icon-button slot="actionItems" icon="person" style="margin-right: -12px"></cv-icon-button>
      </cv-toolbar>

      <div slot="help" class="help-panel mdc-typography">
        <cv-toolbar sticky>
          <span slot="title" style="padding-left: 12px;">Help</span>
          <cv-icon-button
            slot="actionItems"
            icon="undock"
            covalent-icons
          ></cv-icon-button>
          <cv-icon-button
            slot="actionItems"
            icon="close"
            class="help-close"
            style="margin-right: -4px;"
          ></cv-icon-button>
        </cv-toolbar>
        <div class="help-content" style="padding: 16px 24px 24px">
          <cv-typography scale="headline5">
            Ultricies nunc massa, id ut felis sed varius accumsan platea.
          </cv-typography><br />
          <cv-typography scale="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            tincidunt lectus risus, id aliquet mi congue sed.
          </cv-typography><br />
          <cv-typography scale="body1">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            pouere cubilia curae; Phasellus tincidunt eros arcu, sollicitudin
            laoreet urna aliquet eget.
          </cv-typography><br />
          <cv-typography scale="body1">
            Phasellus porta sed libero vel vulputate. Quisque non nisl sem.
            Pellentesque nec pretium magna, et vestibulum neque. Mauris molestie
            eros quis nisi pretium,
          </cv-typography><br />
          <cv-typography scale="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            tincidunt lectus risus, id aliquet mi congue sed.
          </cv-typography><br />
          <cv-typography scale="body1">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            pouere cubilia curae; Phasellus tincidunt eros arcu, sollicitudin
            laoreet urna aliquet eget.
          </cv-typography><br />
          <cv-typography scale="body1">
            Phasellus porta sed libero vel vulputate. Quisque non nisl sem.
            Pellentesque nec pretium magna, et vestibulum neque. Mauris molestie
            eros quis nisi pretium,
          </cv-typography>
        </div>
      </div>
      <div slot="mini-list">
        <cv-toolbar divider>
          <span slot="title">[Page name]</span>
          <cv-icon-button
            slot="actionItems"
            icon="filter_list"
          ></cv-icon-button>
          <cv-icon-button slot="actionItems" icon="add"></cv-icon-button>
        </cv-toolbar>
        <cv-list activatable>
          <cv-list-item graphic="avatar" twoline>
            <cv-icon covalent slot="graphic">server</cv-icon>
            <span>[Object name]</span>
            <span slot="secondary">Secondary info</span>
          </cv-list-item>
          <cv-list-item graphic="avatar" twoline>
            <cv-icon covalent slot="graphic">server</cv-icon>
            <span>[Object name]</span>
            <span slot="secondary">Secondary info</span>
          </cv-list-item>
          <cv-list-item graphic="avatar" twoline activated>
            <cv-icon covalent slot="graphic">server</cv-icon>
            <span>[Object name]</span>
            <span slot="secondary">Secondary info</span>
          </cv-list-item>
          <cv-list-item graphic="avatar" twoline>
            <cv-icon covalent slot="graphic">server</cv-icon>
            <span>[Object name]</span>
            <span slot="secondary">Secondary info</span>
          </cv-list-item>
        </cv-list>
      </div>

      <cv-toolbar>
        <span slot="title">[Section name]</span>
        <cv-icon-button slot="actionItems" icon="menu_open"></cv-icon-button>
        <cv-icon-button
          class="hidden-large"
          slot="actionItems"
          icon="add"
        ></cv-icon-button>
        <cv-button
          class="hidden-small"
          class="create-new-button"
          label="Create new"
          slot="actionItems"
          raised
        ></cv-button>
      </cv-toolbar>

      <cv-tab-bar>
        <cv-tab label="Overview"></cv-tab>
        <cv-tab label="Usage"></cv-tab>
        <cv-tab label="Objects"></cv-tab>
        <cv-tab label="Queries"></cv-tab>
        <cv-tab label="Network"></cv-tab>
        <cv-tab label="Settings"></cv-tab>
      </cv-tab-bar>

      <cv-action-ribbon labelText="this is my label" state="active">
        <cv-button
          slot="action-items"
          class="mdc-banner__secondary-action"
          outlined
          >Bulk action</cv-button
        >
      </cv-action-ribbon>

      \${tableRowSelectionContent}
    </cv-app-shell>
    \`;
}`,...(Q=(B=y.parameters)==null?void 0:B.docs)==null?void 0:Q.source}}};var G,K,X;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`({
  appName = '[App name]',
  sectionTitle = '',
  forcedOpen = false,
  contained = true,
  fullWidth = false,
  helpResizable = true
}) => {
  document.addEventListener('DOMContentLoaded', () => {
    const dataTableEl = document.querySelector('.mdc-data-table');
    const helpItem = document.querySelector('.help-item');
    appShell = document.querySelector('cv-app-shell');
    banner = document.querySelector('cv-action-ribbon');
    dataTable = new MDCDataTable(dataTableEl);
    helpItem.addEventListener('click', () => {
      appShell.helpOpen = !appShell.helpOpen;
    });
    document.querySelector('.help-close').addEventListener('click', () => {
      appShell.helpOpen = false;
      helpItem.on = false;
    });
    setTimeout(updateActionRibbon, 150);
  }, {
    once: true
  });
  document.addEventListener(events.SELECTED_ALL, updateActionRibbon);
  document.addEventListener(events.UNSELECTED_ALL, updateActionRibbon);
  document.addEventListener(events.ROW_SELECTION_CHANGED, updateActionRibbon);
  return \`
    <style>
    .hidden-large {
        display: none;
    }

    @media only screen and (max-width: 800px) {
        .hidden-large {
            display:flex;
        }
        .hidden-small {
            display: none;
        }
    }
    </style>
    <cv-app-shell
    \${appName ? \`appName="\${appName}"\` : ''}
    \${sectionTitle ? \`sectionName="\${sectionTitle}"\` : ''}
    \${forcedOpen ? \`forcedOpen open\` : ''}
    \${contained ? \`contained\` : ''}
    \${fullWidth ? \`fullWidth\` : ''}
    \${helpResizable ? \`helpResizable\` : ''}

    >

      <cv-icon-button slot="section-action" icon="arrow_back"></cv-icon-button>

      <svg
        slot="logo"
        width="103"
        height="20"
        viewBox="0 0 103 20"
        style="fill: var(--cv-theme-text-logo-on-background)"
        fill="none">
        <path d="M0 2.30182H3.53561V5.6615H7.47898V8.88045H3.53561V14.5072C3.53561 15.9632 4.26909 16.4391 5.30341 16.4391H7.47898V19.658H5.30341C1.68575 19.658 0 18.0358 0 14.5072V2.30182Z" />
        <path d="M15.9376 19.9907C11.5865 19.9907 8.67492 17.0506 8.67492 12.6854C8.67492 8.32008 11.5318 5.32374 15.7461 5.32374C19.9605 5.32374 22.708 8.17934 22.708 12.5446C22.708 12.9643 22.6806 13.4121 22.5986 13.9443H12.3746C12.7003 15.9043 13.8714 16.828 15.9923 16.828C17.325 16.828 18.3046 16.2395 18.685 15.4565H22.33C21.5145 18.1714 19.2295 19.9907 15.9376 19.9907ZM12.4293 10.9787H19.0107C18.6577 9.21565 17.6233 8.37637 15.7461 8.37637C13.9783 8.37637 12.8371 9.27194 12.4293 10.9787Z" />
        <path d="M24.6672 5.65895H28.0661V7.33751C29.3167 6.05044 30.8135 5.40563 32.2282 5.65895V9.01863C30.4604 8.79601 29.3192 9.63529 28.2028 11.1168V19.6529H24.6672V5.65895Z" />
        <path d="M36.6316 19.8218C34.1303 19.8218 32.1437 18.3096 32.1437 15.1751C32.1437 12.6009 33.7201 10.8379 37.2557 10.8379H40.3288V10.4183C40.3288 9.13121 39.5406 8.59898 37.5814 8.59898C36.276 8.59898 35.2417 8.73972 33.827 9.15936V5.88412C34.916 5.57706 36.276 5.38004 37.8797 5.38004C41.9599 5.38004 43.8619 6.97416 43.8619 10.4183V19.6555H40.4084V18.8443L39.6202 19.1795C38.6132 19.5992 37.5814 19.8244 36.6291 19.8244L36.6316 19.8218ZM38.5635 16.5466L40.3313 15.7636V13.6935H37.6386C36.4153 13.6935 35.6793 14.282 35.6793 15.2058C35.6793 16.2984 36.4128 16.828 37.3377 16.828C37.7181 16.828 38.1532 16.7154 38.561 16.5491L38.5635 16.5466Z" />
        <path d="M56.3758 19.6555V18.7318L56.1868 18.8162C54.9362 19.4329 53.6035 19.7399 52.3255 19.7399C48.9267 19.7399 45.9331 17.4728 45.9331 12.6598C45.9331 7.8467 48.9242 5.55148 52.3529 5.55148C53.6035 5.55148 54.9362 5.85853 56.1868 6.4752L56.2962 6.53149V0.341797H59.8318V19.6555H56.3758ZM52.9769 16.3802C53.7378 16.3802 54.5806 16.1832 55.4509 15.7636L56.2938 15.3439V9.97049L55.4509 9.55085C54.5806 9.13121 53.7378 8.93419 52.9769 8.93419C51.0177 8.93419 49.5507 10.1931 49.5507 12.6572C49.5507 15.1213 51.0202 16.3802 52.9769 16.3802Z" />
        <path d="M66.2218 19.8218C63.7205 19.8218 61.7339 18.3096 61.7339 15.1751C61.7339 12.6009 63.3103 10.8379 66.8459 10.8379H69.919V10.4183C69.919 9.13121 69.1308 8.59898 67.1716 8.59898C65.8662 8.59898 64.8319 8.73972 63.4172 9.15936V5.88412C64.5062 5.57706 65.8662 5.38004 67.4699 5.38004C71.5501 5.38004 73.4521 6.97416 73.4521 10.4183V19.6555H69.9986V18.8443L69.2104 19.1795C68.2034 19.5992 67.1716 19.8244 66.2193 19.8244L66.2218 19.8218ZM68.1537 16.5466L69.9215 15.7636V13.6935H67.2288C66.0055 13.6935 65.2695 14.282 65.2695 15.2058C65.2695 16.2984 66.003 16.828 66.9279 16.828C67.3083 16.828 67.7435 16.7154 68.1512 16.5491L68.1537 16.5466Z" />
        <path d="M76.0653 2.30182H79.6009V5.6615H83.5443V8.88045H79.6009V14.5072C79.6009 15.9632 80.3344 16.4391 81.3687 16.4391H83.5443V19.658H81.3687C77.7511 19.658 76.0653 18.0358 76.0653 14.5072V2.30182Z" />
        <path d="M89.2555 19.8218C86.7542 19.8218 84.7676 18.3096 84.7676 15.1751C84.7676 12.6009 86.3439 10.8379 89.8795 10.8379H92.9527V10.4183C92.9527 9.13121 92.1645 8.59898 90.2053 8.59898C88.8999 8.59898 87.8656 8.73972 86.4509 9.15936V5.88412C87.5399 5.57706 88.8999 5.38004 90.5036 5.38004C94.5837 5.38004 96.4858 6.97416 96.4858 10.4183V19.6555H93.0323V18.8443L92.2441 19.1795C91.2371 19.5992 90.2053 19.8244 89.253 19.8244L89.2555 19.8218ZM91.1874 16.5466L92.9552 15.7636V13.6935H90.2624C89.0392 13.6935 88.3032 14.282 88.3032 15.2058C88.3032 16.2984 89.0367 16.828 89.9616 16.828C90.342 16.828 90.7771 16.7154 91.1849 16.5491L91.1874 16.5466Z" />
        <path d="M98.5296 18.0588C98.5296 16.9943 99.3451 16.1551 100.407 16.1551C101.468 16.1551 102.284 16.9943 102.284 18.0588C102.284 19.1233 101.441 19.9907 100.407 19.9907C99.3725 19.9907 98.5296 19.1233 98.5296 18.0588Z" />
      </svg>

      <cv-list
        class="navigation-rail"
        slot="navigation"
        activatable
      >
      <cv-nav-list-item graphic="avatar">
        <cv-icon class="home-icon" slot="graphic">home</cv-icon>
        Home
      </cv-nav-list-item>

      <cv-nav-list-item graphic="avatar" hasChildren>
        <span>Editor</span>
        <cv-icon class="covalent-icon" slot="graphic">product_editor</cv-icon>
        <cv-list
          slot="expansion-panel"
          activatable>
          <cv-nav-list-item subNav>Scripts</cv-nav-list-item>
          <cv-nav-list-item subNav>Scripts</cv-nav-list-item>
          <cv-nav-list-item subNav>Scripts</cv-nav-list-item>
          <cv-nav-list-item subNav>Scripts</cv-nav-list-item>
          <cv-nav-list-item subNav>Scripts</cv-nav-list-item>
        </cv-list>
      </cv-nav-list-item>

        <cv-nav-list-item graphic="avatar">
          <span>Sites</span>
          <cv-icon class="covalent-icon" slot="graphic">server</cv-icon>
        </cv-nav-list-item>
        <cv-nav-list-item graphic="avatar">
          <span>Data Protections</span>
          <cv-icon slot="graphic">settings_backup_restore</cv-icon>
        </cv-nav-list-item>
        <cv-nav-list-item graphic="avatar">
          <span>Identity</span>
          <cv-icon slot="graphic">contacts</cv-icon>
        </cv-nav-list-item>
      </cv-list>

      <cv-toolbar slot="user-menu" sticky>
       <span slot="title" style="display:flex; align-items: center">
        <cv-typography scale="body1">All environments</cv-typography>
        <cv-icon>arrow_drop_down</cv-icon>
       </span>

       <cv-textfield slot="actionItems" icon="forum" placeholder="Message ask.ai" style="margin-right: 8px" dense></cv-textfield>
       <cv-icon-button slot="actionItems" icon="notifications"></cv-icon-button>
       <cv-icon-button-toggle slot="actionItems" onIcon="help" offIcon="help" class="help-item"></cv-icon-button-toggle>
       <cv-icon-button slot="actionItems" icon="person" style="margin-right: -12px"></cv-icon-button>
      </cv-toolbar>

      <div slot="help" class="help-panel mdc-typography">
        <cv-toolbar sticky>
          <span slot="title" style="padding-left: 12px;">Help</span>
          <cv-icon-button
            slot="actionItems"
            icon="undock"
            covalent-icons
          ></cv-icon-button>
          <cv-icon-button
            slot="actionItems"
            icon="close"
            class="help-close"
            style="margin-right: -4px;"
          ></cv-icon-button>
        </cv-toolbar>
        <div class="help-content" style="padding: 16px 24px 24px">
          <cv-typography scale="headline5">
            Ultricies nunc massa, id ut felis sed varius accumsan platea.
          </cv-typography><br />
          <cv-typography scale="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            tincidunt lectus risus, id aliquet mi congue sed.
          </cv-typography><br />
          <cv-typography scale="body1">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            pouere cubilia curae; Phasellus tincidunt eros arcu, sollicitudin
            laoreet urna aliquet eget.
          </cv-typography><br />
          <cv-typography scale="body1">
            Phasellus porta sed libero vel vulputate. Quisque non nisl sem.
            Pellentesque nec pretium magna, et vestibulum neque. Mauris molestie
            eros quis nisi pretium,
          </cv-typography><br />
          <cv-typography scale="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            tincidunt lectus risus, id aliquet mi congue sed.
          </cv-typography><br />
          <cv-typography scale="body1">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            pouere cubilia curae; Phasellus tincidunt eros arcu, sollicitudin
            laoreet urna aliquet eget.
          </cv-typography><br />
          <cv-typography scale="body1">
            Phasellus porta sed libero vel vulputate. Quisque non nisl sem.
            Pellentesque nec pretium magna, et vestibulum neque. Mauris molestie
            eros quis nisi pretium,
          </cv-typography>
        </div>
      </div>
      <div slot="mini-list">
        <cv-toolbar divider>
          <span slot="title">[Page name]</span>
          <cv-icon-button
            slot="actionItems"
            icon="filter_list"
          ></cv-icon-button>
          <cv-icon-button slot="actionItems" icon="add"></cv-icon-button>
        </cv-toolbar>
        <cv-list activatable>
          <cv-list-item graphic="avatar" twoline>
            <cv-icon covalent slot="graphic">server</cv-icon>
            <span>[Object name]</span>
            <span slot="secondary">Secondary info</span>
          </cv-list-item>
          <cv-list-item graphic="avatar" twoline>
            <cv-icon covalent slot="graphic">server</cv-icon>
            <span>[Object name]</span>
            <span slot="secondary">Secondary info</span>
          </cv-list-item>
          <cv-list-item graphic="avatar" twoline activated>
            <cv-icon covalent slot="graphic">server</cv-icon>
            <span>[Object name]</span>
            <span slot="secondary">Secondary info</span>
          </cv-list-item>
          <cv-list-item graphic="avatar" twoline>
            <cv-icon covalent slot="graphic">server</cv-icon>
            <span>[Object name]</span>
            <span slot="secondary">Secondary info</span>
          </cv-list-item>
        </cv-list>
      </div>

      <cv-toolbar>
        <span slot="title">[Section name]</span>
        <cv-icon-button slot="actionItems" icon="menu_open"></cv-icon-button>
        <cv-icon-button
          class="hidden-large"
          slot="actionItems"
          icon="add"
        ></cv-icon-button>
        <cv-button
          class="hidden-small"
          class="create-new-button"
          label="Create new"
          slot="actionItems"
          raised
        ></cv-button>
      </cv-toolbar>

      <cv-tab-bar>
        <cv-tab label="Overview"></cv-tab>
        <cv-tab label="Usage"></cv-tab>
        <cv-tab label="Objects"></cv-tab>
        <cv-tab label="Queries"></cv-tab>
        <cv-tab label="Network"></cv-tab>
        <cv-tab label="Settings"></cv-tab>
      </cv-tab-bar>

      <cv-action-ribbon labelText="this is my label" state="active">
        <cv-button
          slot="action-items"
          class="mdc-banner__secondary-action"
          outlined
          >Bulk action</cv-button
        >
      </cv-action-ribbon>

      \${tableRowSelectionContent}
    </cv-app-shell>
    \`;
}`,...(X=(K=f.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};const vt=["Basic","sectionTitle","forcedOpen","fullWidth","helpResizable"];export{V as Basic,vt as __namedExportsOrder,pt as default,g as forcedOpen,y as fullWidth,f as helpResizable,b as sectionTitle};
