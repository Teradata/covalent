import{t as $}from"./table-row-selection.content-2dc6f2e9.js";import{x as v,i as l,r as d,l as M,A as T,e as H}from"./query-assigned-elements-9f88bee1.js";import{n as c}from"./property-f36ea729.js";import{o as E}from"./class-map-018c3a6a.js";import{a as P,b as L,_ as u}from"./tslib.es6-4b90b051.js";import"./inert.esm-a76031cb.js";import{B as j}from"./base-element-cae00a28.js";import{o as B}from"./observer-1f401936.js";import{i as F}from"./query-3e91a3b8.js";import{a as Z}from"./utils-529e1a6d.js";import"./action-ribbon-30ef7d5c.js";import{C as G,s as U}from"./list-bae5af58.js";import{C as Q,s as Y,a as K,b as W}from"./list-item-2b4d18ef.js";import"./toolbar-02d53760.js";import"./button-54d97217.js";import{M as X,e as _}from"./component-95f05123.js";import"./foundation-4f97f2e7.js";import"./mwc-list-base-90359a36.js";import"./ripple-handlers-20d146be.js";import"./state-2a0073ff.js";import"./style-map-4c420736.js";import"./query-assigned-nodes-be20542b.js";import"./if-defined-c3862b86.js";import"./mwc-top-app-bar-base-b0b432c1.js";import"./mwc-button-base-82cdc40f.js";import"./mwc-icon-6ece1001.js";import"./aria-property-3dc182ec.js";import"./event-options-b5830ec0.js";import"./index-ec0f687a.js";import"./_commonjsHelpers-de833af9.js";/**
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
 */var s={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"},O={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim",LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",LIST_ITEM_ACTIVATED_SELECTOR:".mdc-list-item--activated,.mdc-deprecated-list-item--activated"};/**
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
 */var J=function(){function e(t){t===void 0&&(t={}),this.adapter=t}return Object.defineProperty(e,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),e.prototype.init=function(){},e.prototype.destroy=function(){},e}();/**
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
 */var I=function(e){P(t,e);function t(i){var n=e.call(this,L(L({},t.defaultAdapter),i))||this;return n.animationFrame=0,n.animationTimer=0,n}return Object.defineProperty(t,"strings",{get:function(){return O},enumerable:!1,configurable:!0}),Object.defineProperty(t,"cssClasses",{get:function(){return s},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!1,configurable:!0}),t.prototype.destroy=function(){this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.animationTimer&&clearTimeout(this.animationTimer)},t.prototype.open=function(){var i=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter.addClass(s.OPEN),this.adapter.addClass(s.ANIMATE),this.runNextAnimationFrame(function(){i.adapter.addClass(s.OPENING)}),this.adapter.saveFocus())},t.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter.addClass(s.CLOSING)},t.prototype.isOpen=function(){return this.adapter.hasClass(s.OPEN)},t.prototype.isOpening=function(){return this.adapter.hasClass(s.OPENING)||this.adapter.hasClass(s.ANIMATE)},t.prototype.isClosing=function(){return this.adapter.hasClass(s.CLOSING)},t.prototype.handleKeydown=function(i){var n=i.keyCode,a=i.key,o=a==="Escape"||n===27;o&&this.close()},t.prototype.handleTransitionEnd=function(i){var n=s.OPENING,a=s.CLOSING,o=s.OPEN,r=s.ANIMATE,R=s.ROOT,q=this.isElement(i.target)&&this.adapter.elementHasClass(i.target,R);q&&(this.isClosing()?(this.adapter.removeClass(o),this.closed(),this.adapter.restoreFocus(),this.adapter.notifyClose()):(this.adapter.focusActiveNavigationItem(),this.opened(),this.adapter.notifyOpen()),this.adapter.removeClass(r),this.adapter.removeClass(n),this.adapter.removeClass(a))},t.prototype.opened=function(){},t.prototype.closed=function(){},t.prototype.runNextAnimationFrame=function(i){var n=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){n.animationFrame=0,clearTimeout(n.animationTimer),n.animationTimer=setTimeout(i,0)})},t.prototype.isElement=function(i){return!!i.classList},t}(J);const tt=I;/**
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
 */var et=function(e){P(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.handleScrimClick=function(){this.close()},t.prototype.opened=function(){this.adapter.trapFocus()},t.prototype.closed=function(){this.adapter.releaseFocus()},t}(I);const z=et;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const V=document.$blockingElements;class h extends j{constructor(){super(...arguments),this._previousFocus=null,this.open=!1,this.hasHeader=!1,this.type=""}get mdcFoundationClass(){return this.type==="modal"?z:tt}createAdapter(){return Object.assign(Object.assign({},Z(this.mdcRoot)),{elementHasClass:(t,i)=>t.classList.contains(i),saveFocus:()=>{this._previousFocus=this.getRootNode().activeElement},restoreFocus:()=>{this._previousFocus&&this._previousFocus.focus&&this._previousFocus.focus()},notifyClose:()=>{this.open=!1,this.dispatchEvent(new Event(O.CLOSE_EVENT,{bubbles:!0,cancelable:!0}))},notifyOpen:()=>{this.open=!0,this.dispatchEvent(new Event(O.OPEN_EVENT,{bubbles:!0,cancelable:!0}))},focusActiveNavigationItem:()=>{},trapFocus:()=>{V.push(this),this.appContent.inert=!0},releaseFocus:()=>{V.remove(this),this.appContent.inert=!1}})}_handleScrimClick(){this.mdcFoundation instanceof z&&this.mdcFoundation.handleScrimClick()}render(){const t=this.type==="dismissible"||this.type==="modal",i=this.type==="modal",n=this.hasHeader?v`
      <div class="mdc-drawer__header">
        <h3 class="mdc-drawer__title"><slot name="title"></slot></h3>
        <h6 class="mdc-drawer__subtitle"><slot name="subtitle"></slot></h6>
        <slot name="header"></slot>
      </div>
      `:"";return v`
      <aside class="mdc-drawer ${E({"mdc-drawer--dismissible":t,"mdc-drawer--modal":i})}">
        ${n}
        <div class="mdc-drawer__content"><slot></slot></div>
      </aside>
      ${i?v`<div class="mdc-drawer-scrim"
                          @click="${this._handleScrimClick}"></div>`:""}
      <div class="mdc-drawer-app-content">
        <slot name="appContent"></slot>
      </div>
      `}firstUpdated(){this.mdcRoot.addEventListener("keydown",t=>this.mdcFoundation.handleKeydown(t)),this.mdcRoot.addEventListener("transitionend",t=>this.mdcFoundation.handleTransitionEnd(t))}updated(t){t.has("type")&&this.createFoundation()}}u([F(".mdc-drawer")],h.prototype,"mdcRoot",void 0);u([F(".mdc-drawer-app-content")],h.prototype,"appContent",void 0);u([B(function(e){this.type!==""&&(e?this.mdcFoundation.open():this.mdcFoundation.close())}),c({type:Boolean,reflect:!0})],h.prototype,"open",void 0);u([c({type:Boolean})],h.prototype,"hasHeader",void 0);u([c({reflect:!0})],h.prototype,"type",void 0);const it=`.mdc-drawer{border-color:#0000001f;background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-top-left-radius:0;border-top-right-radius:0;border-top-right-radius:var(--mdc-shape-large, 0);border-bottom-right-radius:0;border-bottom-right-radius:var(--mdc-shape-large, 0);border-bottom-left-radius:0;z-index:6;width:256px;display:flex;flex-direction:column;flex-shrink:0;box-sizing:border-box;height:100%;border-right-width:1px;border-right-style:solid;overflow:hidden;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.mdc-drawer .mdc-drawer__title{color:#000000de}.mdc-drawer .mdc-deprecated-list-group__subheader,.mdc-drawer .mdc-drawer__subtitle,.mdc-drawer .mdc-deprecated-list-item__graphic{color:#0009}.mdc-drawer .mdc-deprecated-list-item{color:#000000de}.mdc-drawer .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic{color:#6200ee}.mdc-drawer .mdc-deprecated-list-item--activated{color:#6200eede}[dir=rtl] .mdc-drawer,.mdc-drawer[dir=rtl]{border-top-left-radius:0;border-top-left-radius:var(--mdc-shape-large, 0);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:0;border-bottom-left-radius:var(--mdc-shape-large, 0)}.mdc-drawer .mdc-deprecated-list-item{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content{margin-left:256px;margin-right:0}[dir=rtl] .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content,.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:256px}[dir=rtl] .mdc-drawer,.mdc-drawer[dir=rtl]{border-right-width:0;border-left-width:1px;border-right-style:none;border-left-style:solid}.mdc-drawer .mdc-deprecated-list-item{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-subtitle2-font-size, .875rem);line-height:1.375rem;line-height:var(--mdc-typography-subtitle2-line-height, 1.375rem);font-weight:500;font-weight:var(--mdc-typography-subtitle2-font-weight, 500);letter-spacing:.0071428571em;letter-spacing:var(--mdc-typography-subtitle2-letter-spacing, .0071428571em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle2-text-transform, inherit);height:40px;margin:8px;padding:0 8px}.mdc-drawer .mdc-deprecated-list-item:nth-child(1){margin-top:2px}.mdc-drawer .mdc-deprecated-list-item:nth-last-child(1){margin-bottom:0}.mdc-drawer .mdc-deprecated-list-group__subheader{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size, .875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, .0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);display:block;line-height:normal;margin:0;padding:0 16px}.mdc-drawer .mdc-deprecated-list-group__subheader:before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-drawer .mdc-deprecated-list-divider{margin:3px 0 4px}.mdc-drawer .mdc-deprecated-list-item__text,.mdc-drawer .mdc-deprecated-list-item__graphic{pointer-events:none}.mdc-drawer--animate{transform:translate(-100%)}[dir=rtl] .mdc-drawer--animate,.mdc-drawer--animate[dir=rtl]{transform:translate(100%)}.mdc-drawer--opening{transform:translate(0);transition-duration:.25s}[dir=rtl] .mdc-drawer--opening,.mdc-drawer--opening[dir=rtl]{transform:translate(0)}.mdc-drawer--closing{transform:translate(-100%);transition-duration:.2s}[dir=rtl] .mdc-drawer--closing,.mdc-drawer--closing[dir=rtl]{transform:translate(100%)}.mdc-drawer__header{flex-shrink:0;box-sizing:border-box;min-height:64px;padding:0 16px 4px}.mdc-drawer__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, .0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-drawer__title:before{display:inline-block;width:0;height:36px;content:"";vertical-align:0}.mdc-drawer__title:after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-drawer__subtitle{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size, .875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, .0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-bottom:0}.mdc-drawer__subtitle:before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-drawer__content{height:100%;overflow-y:auto;-webkit-overflow-scrolling:touch}.mdc-drawer--dismissible{left:0;right:initial;display:none;position:absolute}[dir=rtl] .mdc-drawer--dismissible,.mdc-drawer--dismissible[dir=rtl]{left:initial;right:0}.mdc-drawer--dismissible.mdc-drawer--open{display:flex}.mdc-drawer-app-content{margin-left:0;margin-right:0;position:relative}[dir=rtl] .mdc-drawer-app-content,.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:0}.mdc-drawer--modal{box-shadow:0 8px 10px -5px #0003,0 16px 24px 2px #00000024,0 6px 30px 5px #0000001f;left:0;right:initial;display:none;position:fixed}.mdc-drawer--modal+.mdc-drawer-scrim{background-color:#00000052}[dir=rtl] .mdc-drawer--modal,.mdc-drawer--modal[dir=rtl]{left:initial;right:0}.mdc-drawer--modal.mdc-drawer--open{display:flex}.mdc-drawer-scrim{display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:5;transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1)}.mdc-drawer--open+.mdc-drawer-scrim{display:block}.mdc-drawer--animate+.mdc-drawer-scrim{opacity:0}.mdc-drawer--opening+.mdc-drawer-scrim{transition-duration:.25s;opacity:1}.mdc-drawer--closing+.mdc-drawer-scrim{transition-duration:.2s;opacity:0}:host{--mdc-theme-surface: var(--mdc-theme-background);--mdc-list-vertical-padding: 0}.app-shell{background-color:var(--mdc-theme-surface);display:grid;grid-template:"nav mini-list main help" min-content/auto auto 1fr;min-height:100vh}.app-shell:after{content:"";position:absolute;top:0;height:2px;width:100%;z-index:1000;background-color:#ff5f02}.main{grid-area:main;overflow:auto;height:100vh;border-left:1px solid;border-color:var(--mdc-theme-border, rgba(0, 0, 0, .12))}.help{grid-area:help;width:320px;height:100vh;overflow-y:auto;border-left:1px solid;border-color:var(--mdc-theme-border, rgba(0, 0, 0, .12));transition-property:width;transition-duration:.2s}.help.help--closed{width:0}[name=mini-list]{display:block;border-left:1px solid;border-color:var(--mdc-theme-border, rgba(0, 0, 0, .12));width:320px;height:100vh}@media only screen and (max-width: 1000px){[name=mini-list]{display:none}}nav.navigation{grid-area:nav;height:100vh;overflow-y:auto;border-right:0}nav.navigation .toggle-drawer{margin:8px auto}nav.navigation .navigation-toolbar{display:flex;align-items:center}nav.navigation slot[name=logo]{display:none}nav.navigation.mdc-drawer--open .toggle-drawer{margin-left:12px;margin-right:12px}nav.navigation.mdc-drawer--open slot[name=logo]{display:block}[divider]{border-bottom:1px solid;margin:16px;border-color:var(--mdc-theme-border, rgba(0, 0, 0, .12))}@media only screen and (min-width: 768px){nav.navigation{display:flex;flex-direction:column;transition-property:width;transition-duration:.2s;transform:none;background-color:transparent}.mdc-drawer--dismissible{display:block;width:72px;position:static}.mdc-drawer--open{width:256px}.mdc-drawer--opening{width:256px;transition-duration:.2s}.mdc-drawer--closing{width:72px;transition-duration:.2s}.header{display:none}}@media only screen and (max-width: 768px){.app-shell{grid-template-columns:1fr;grid-template-areas:"header" "main" "mini-list" "help"}[name=help]::slotted(*),.main{height:auto;width:auto;border:none}}
`;var nt=Object.defineProperty,at=Object.getOwnPropertyDescriptor,g=(e,t,i,n)=>{for(var a=n>1?void 0:n?at(t,i):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(a=(n?r(t,i,a):r(a))||a);return n&&a&&nt(t,i,a),a};let p=class extends h{constructor(){super(),this.appName="",this.helpOpen=!1,this.resizeEvent()}_toggleOpen(){this.mdcFoundation.isOpening()||this.mdcFoundation.isClosing()||(this.open=!this.open,[...this.navigationListElements,...this.userMenuElements].forEach(e=>e.setAttribute("navopen",this.open.toString())),this.dispatchEvent(new Event("CovalentAppShell:toggle",{bubbles:!0,composed:!0})))}resizeEvent(){const e=window.matchMedia("(max-width: 800px)");e.matches&&this.type!=="modal"?this.type="modal":!e.matches&&this.type!=="dismissible"&&(this.type="dismissible"),this.requestUpdate()}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",()=>this.resizeEvent())}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.resizeEvent)}render(){const e=this.type==="dismissible"||this.type==="modal",t=this.type==="modal",i={"mdc-drawer--dismissible":e,"mdc-drawer--modal":t},n={"help--closed":!this.helpOpen},a=t?v`<div
          class="mdc-drawer-scrim"
          @click="${this._handleScrimClick}"
        ></div>`:T;return v`
      <div class="app-shell">
        <span class="header"
          ><cv-top-app-bar-fixed centerTitle>
            <cv-icon-button
              class="toggle-drawer"
              @click=${this._toggleOpen}
              slot="navigationIcon"
              icon="menu"
            ></cv-icon-button>
            <span slot="title">${this.appName}</span>
          </cv-top-app-bar-fixed>
        </span>
        <nav class="navigation mdc-drawer ${E(i)}">
          <div class="navigation-toolbar">
            <cv-icon-button
              @click=${this._toggleOpen}
              class="toggle-drawer"
              icon="menu"
            ></cv-icon-button>
            <slot name="logo"></slot>
          </div>
          <slot name="navigation"></slot>
          <div style="display:flex; flex:1;"></div>
          <div divider></div>
          <slot name="user-menu"></slot>
        </nav>
        ${a}
        <slot name="mini-list"></slot>
        <div class="main mdc-drawer-app-content"><slot></slot></div>
        <div class="help ${E(n)}">
          <slot name="help"></slot>
        </div>
      </div>
    `}};p.styles=[l`
      ${d(it)}
    `];g([M({slot:"navigation"})],p.prototype,"navigationListElements",2);g([M({slot:"user-menu"})],p.prototype,"userMenuElements",2);g([c()],p.prototype,"appName",2);g([c({type:Boolean})],p.prototype,"helpOpen",2);p=g([H("cv-app-shell")],p);const ot=`.mdc-deprecated-list{--mdc-list-side-padding: 72px;transition:transform .15s ease-out;overflow:hidden;height:var(--cv-list-menu-height, 0)}.mdc-deprecated-list slot::slotted(*){height:32px}:host([open]) ul{transition:min-height .25s ease-in;height:var(--cv-list-menu-height, inherit)}
`;var st=Object.defineProperty,rt=Object.getOwnPropertyDescriptor,C=(e,t,i,n)=>{for(var a=n>1?void 0:n?rt(t,i):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(a=(n?r(t,i,a):r(a))||a);return n&&a&&st(t,i,a),a};let m=class extends G{constructor(){super(),this.open=!1,this.navOpen=!1}_toggleOpen(){this.open=!this.open,this.expansionHeader.forEach(e=>{e.activated=this.open,e.selected=this.open})}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e==="navopen"&&this.expansionHeader.forEach(n=>{i==="true"?(n.navOpen=!!i,n.setAttribute("navopen",i)):n.removeAttribute("navopen")})}render(){return v`
      <slot name="expansionHeader" @click=${this._toggleOpen}></slot>
      ${this.navOpen?super.render():T}
    `}};m.styles=[l`
      ${d(U)}
    `,l`
      ${d(ot)}
    `];m.shadowRootOptions={mode:"open",delegatesFocus:!0};C([c({type:Boolean,reflect:!0})],m.prototype,"open",2);C([c({type:Boolean,reflect:!0})],m.prototype,"navOpen",2);C([M({slot:"expansionHeader"})],m.prototype,"expansionHeader",2);m=C([H("cv-expansion-list")],m);const ct=`:host{font-family:var(--mdc-typography-font-family);font-size:var(--mdc-typography-body1-font-size);font-weight:var(--mdc-typography-body1-font-weight);line-height:var(--mdc-typography-body1-line-height)}:host([navopen]){border-radius:0 28px 28px 0;transition:border-radius .1s ease-out;margin-right:16px}:host([graphic=avatar]:not([navopen])){border-radius:100%;margin:0 auto 8px;padding:0;width:48px;height:48px}:host([graphic=avatar]:not([navopen])) ::slotted(cv-icon[slot=graphic]){margin-left:8px;background:transparent}:host(.home-item) ::slotted(.teradata-no-circle){--mdc-list-item-graphic-size: 40px;--mdc-icon-size: 40px;display:none}:host(.home-item) ::slotted(.home-icon){display:none}:host(.home-item) ::slotted(.home-icon):hover .covalent-icon{display:none}:host(.home-item:hover) ::slotted(.home-icon){display:block}:host(.home-item:hover) ::slotted(.teradata-circle){display:none}:host(.home-item:hover) ::slotted(.teradata-no-circle){display:none}:host(.home-item:not([navopen])){background-color:#ff5f02;--mdc-ripple-color: #ffffff;--mdc-theme-text-icon-on-background: #ffffff}:host(.home-item:not([navopen])) ::slotted(.teradata-circle){display:none}:host(.home-item:not([navopen])) ::slotted(.teradata-no-circle){display:block}:host(.home-item:hover:not([navopen])) ::slotted(.teradata-no-circle){display:none}:host(.beta-list-item){--mdc-theme-primary: var(--mdc-theme-surface-caution);--mdc-list-item-meta-size: 20px;--mdc-list-item-graphic-size: 40px;--mdc-list-item-graphic-margin: 15px;--mdc-typography-subtitle1-font-size: var( --mdc-typography-subtitle2-font-size );--mdc-typography-body2-font-size: var(--mdc-typography-caption-font-size);margin-bottom:8px;font-size:var(--mdc-typography-subtitle1-font-size);margin-right:0;border-radius:0}:host(.beta-list-item:not([navopen])){--mdc-list-item-graphic-margin: 0;--mdc-typography-subtitle1-font-size: 0;--mdc-typography-body2-font-size: 0;height:48px;font-size:0;padding:0;justify-content:center;align-content:center}
`;var lt=Object.defineProperty,dt=Object.getOwnPropertyDescriptor,D=(e,t,i,n)=>{for(var a=n>1?void 0:n?dt(t,i):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(a=(n?r(t,i,a):r(a))||a);return n&&a&&lt(t,i,a),a};let x=class extends Q{constructor(){super(),this.navOpen=!1}};x.styles=[l`
      ${d(Y)}
    `,l`
      ${d(K)}
    `,l`
      ${d(W)}
    `,l`
      ${d(ct)}
    `];D([c({type:Boolean,reflect:!0})],x.prototype,"navOpen",2);x=D([H("cv-nav-list-item")],x);const $t={title:"Patterns/App Shell",argTypes:{navClick:{action:"clicked"}},parameters:{layout:"fullscreen",design:{type:"figma",url:"https://www.figma.com/file/aDX2Rc1OIJ9tWgMcAvKRXv/Section?node-id=22%3A1453"}}};let b,w,S;const f=()=>{const e=S.getSelectedRowIds().length,t=S.rowCheckboxList.length;e?(w.labelText=`(${e}/${t}) items selected`,w.show()):w.close()},pt=({navClick:e})=>(document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".mdc-data-table");b=document.querySelector("cv-app-shell"),w=document.querySelector("cv-action-ribbon"),S=new X(t),document.querySelector(".help-item").addEventListener("click",()=>{b.helpOpen=!b.helpOpen}),document.querySelector(".help-close").addEventListener("click",()=>{b.helpOpen=!1}),setTimeout(f,150)},{once:!0}),document.addEventListener(_.SELECTED_ALL,f),document.addEventListener(_.UNSELECTED_ALL,f),document.addEventListener(_.ROW_SELECTION_CHANGED,f),`
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
    <cv-app-shell appName="[App Name]">
      <svg
        slot="logo"
        class="logo logo-light"
        style="width: 100px"
        viewBox="0 0 696 133"
        fit=""
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
      >
        <path
          style="fill: var(--covalent-theme-text-logo-on-background)"
          d="M78.882 72.796h45.059c-3.178-11.966-12.153-17.201-22.063-17.201-9.348 0-20.005 5.609-22.996 17.201zm70.3 17.388H78.134c2.43 13.462 11.965 21.689 23.37 21.689 7.292 0 16.453-.936 23.185-12.34l22.062 4.673C138.524 123.652 121.884 133 101.504 133c-26.362 0-47.864-20.006-47.864-49.36s21.502-49.547 48.238-49.547c24.867 0 46.368 19.258 47.304 47.678v8.413zM387.843 83.64c0-17.201-13.275-28.045-26.549-28.045-14.958 0-26.176 10.844-26.176 28.045s11.218 27.858 26.176 27.858c13.274 0 26.549-10.657 26.549-27.858zm24.68 46.555h-24.68v-8.039c-7.479 6.918-17.762 10.844-30.85 10.844-23.745 0-45.807-20.006-45.807-49.36s22.062-49.547 45.807-49.547c13.088 0 23.371 3.926 30.85 10.844v-44h24.68v129.258zM630.3 92.427c0 11.966-11.406 20.941-24.493 20.941-9.536 0-15.892-4.488-15.892-11.406 0-6.356 5.234-10.656 13.088-10.656H630.3v1.121zm-15.893-55.31v-.024h-34.108v20.565h34.108c9.536 0 15.893 4.107 15.893 13.455v1.497h-26.923c-23.559 0-37.021 11.966-37.021 29.914 0 18.322 14.21 30.476 35.525 30.476 12.714 0 22.062-4.3 28.419-10.47v7.665h23.558V69.244c0-22.162-15.615-31.627-39.451-32.127zM484.378 92.427c0 11.966-11.405 20.941-24.493 20.941-9.536 0-15.893-4.488-15.893-11.406 0-6.356 5.235-10.656 13.088-10.656h27.298v1.121zm-15.893-55.31v-.024h-34.108v20.565h34.108c9.535 0 15.893 4.107 15.893 13.455v1.497h-26.924c-23.559 0-37.02 11.966-37.02 29.914 0 18.322 14.21 30.476 35.524 30.476 12.714 0 22.062-4.3 28.42-10.47v7.665h23.557V69.244c0-22.162-15.614-31.627-39.45-32.127zM279.3 92.427c0 11.966-11.406 20.941-24.493 20.941-9.536 0-15.893-4.488-15.893-11.406 0-6.356 5.236-10.656 13.089-10.656H279.3v1.121zm-15.892-55.31v-.024h-34.109v20.565h34.109c9.535 0 15.892 4.107 15.892 13.455v1.497h-26.924c-23.558 0-37.02 11.966-37.02 29.914 0 18.322 14.21 30.476 35.525 30.476 12.714 0 22.062-4.3 28.419-10.47v7.665h23.558V69.244c0-22.162-15.614-31.627-39.45-32.127zM216.11 37.026c-15.144 0-25.989 6.043-33.467 16.887V36.899h-24.68v93.298h24.68v-30.102c0-25.989 10.47-42.319 33.28-42.319h1.121V37.029a141.28 141.28 0 00-.934-.003"
        ></path>
        <path
          style="fill: var(--covalent-theme-text-logo-on-background)"
          d="M48.982 107.707c-3.753 1.408-7.691 2.295-10.654 2.295-8.226 0-13.648-4.86-13.648-16.079V57.09h25.302V36.898H24.68V14.007H0v81.786C0 121.408 14.584 133 36.646 133c7.792 0 15.233-1.662 24.835-6.801-5.117-5.076-9.814-11.399-12.499-18.492M558.509 109.788c-.988.138-1.923.214-2.776.214-8.226 0-13.648-4.86-13.648-16.079V57.09h25.983V36.898h-25.983V14.007h-24.681v81.786c0 25.615 14.584 37.207 36.647 37.207 5.389 0 10.251-.794 15.913-2.983-7.319-5.243-10.165-13.736-11.455-20.229"
        ></path>
        <path
          class="logo-dot"
          fill="#e46c42"
          d="M695.029 116.028c0 8.825-6.772 15.596-16.212 15.596s-16.212-6.771-16.212-15.596c0-8.413 6.772-15.801 16.212-15.801s16.212 7.388 16.212 15.801"
        ></path>
      </svg>

      <cv-list
        class="navigation-rail"
        slot="navigation"
        activatable
      >
        <cv-nav-list-item class="home-item" graphic="avatar">
          <span>Vantage</span>
          <cv-icon class="covalent-icon teradata-circle" slot="graphic"
            >teradata</cv-icon
          >
          <cv-icon class="covalent-icon teradata-no-circle" slot="graphic"
            >teradata_nocircle</cv-icon
          >
          <cv-icon class="home-icon" slot="graphic">home</cv-icon>
        </cv-nav-list-item>

        <cv-expansion-list activatable>
          <cv-nav-list-item slot="expansionHeader" graphic="avatar" hasChildren>
            Editor
            <cv-icon class="covalent-icon" slot="graphic"
              >product_editor</cv-icon
            >
          </cv-nav-list-item>
          <cv-nav-list-item>Scripts</cv-nav-list-item>
          <cv-nav-list-item>Scripts</cv-nav-list-item>
          <cv-nav-list-item>Scripts</cv-nav-list-item>
          <cv-nav-list-item>Scripts</cv-nav-list-item>
          <cv-nav-list-item>Scripts</cv-nav-list-item>
        </cv-expansion-list>

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

      <cv-list class="navigation-rail" slot="user-menu" activatable>
        <cv-nav-list-item
          class="beta-list-item"
          graphic="icon"
          twoline
          activated
        >
          <svg
            slot="graphic"
            style="fill: orange; height: 20px"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g>
              <path
                d="M0 2C0 0.895431 0.895431 0 2 0H40L34.9206 20H2C0.895429 20 0 19.1046 0 18V2Z"
              ></path>
              <path
                d="M5.73242 14V6.8418H8.41797C8.96484 6.8418 9.40267 6.91504 9.73145 7.06152C10.0635 7.20475 10.3223 7.42773 10.5078 7.73047C10.6966 8.02995 10.791 8.34408 10.791 8.67285C10.791 8.97884 10.708 9.26693 10.542 9.53711C10.376 9.80729 10.1253 10.0254 9.79004 10.1914C10.223 10.3184 10.555 10.5348 10.7861 10.8408C11.0205 11.1468 11.1377 11.5081 11.1377 11.9248C11.1377 12.2601 11.0661 12.5726 10.9229 12.8623C10.7829 13.1488 10.6087 13.3701 10.4004 13.5264C10.1921 13.6826 9.93001 13.8014 9.61426 13.8828C9.30176 13.9609 8.91764 14 8.46191 14H5.73242ZM6.67969 9.84961H8.22754C8.64746 9.84961 8.94857 9.82194 9.13086 9.7666C9.37174 9.69499 9.55241 9.57617 9.67285 9.41016C9.79655 9.24414 9.8584 9.03581 9.8584 8.78516C9.8584 8.54753 9.80143 8.33919 9.6875 8.16016C9.57357 7.97786 9.41081 7.85417 9.19922 7.78906C8.98763 7.7207 8.62467 7.68652 8.11035 7.68652H6.67969V9.84961ZM6.67969 13.1553H8.46191C8.7679 13.1553 8.98275 13.1439 9.10645 13.1211C9.32454 13.082 9.50684 13.0169 9.65332 12.9258C9.7998 12.8346 9.92025 12.7028 10.0146 12.5303C10.109 12.3545 10.1562 12.1527 10.1562 11.9248C10.1562 11.6579 10.0879 11.4268 9.95117 11.2314C9.81445 11.0329 9.62402 10.8945 9.37988 10.8164C9.139 10.735 8.79069 10.6943 8.33496 10.6943H6.67969V13.1553ZM12.7109 14V6.8418H17.8867V7.68652H13.6582V9.87891H17.6182V10.7188H13.6582V13.1553H18.0527V14H12.7109ZM21.4326 14V7.68652H19.0742V6.8418H24.748V7.68652H22.3799V14H21.4326ZM24.4463 14L27.1953 6.8418H28.2158L31.1455 14H30.0664L29.2314 11.832H26.2383L25.4521 14H24.4463ZM26.5117 11.0605H28.9385L28.1914 9.07812C27.9635 8.47591 27.7943 7.98112 27.6836 7.59375C27.5924 8.05273 27.4639 8.50846 27.2979 8.96094L26.5117 11.0605Z"
                fill="black"
                fill-opacity="0.87"
              ></path>
            </g>
          </svg>
          <span>You're trying console beta</span>
          <span slot="secondary">Return to classic</span>
        </cv-nav-list-item>
        <cv-nav-list-item graphic="avatar">
          <span>Notification</span>
          <cv-icon slot="graphic">notifications</cv-icon>
        </cv-nav-list-item>
        <cv-nav-list-item graphic="avatar" class="help-item">
          <span>Help</span>
          <cv-icon slot="graphic">help</cv-icon>
        </cv-nav-list-item>
        <cv-nav-list-item graphic="avatar">
          <span>Account</span>
          <cv-icon slot="graphic">person</cv-icon>
        </cv-nav-list-item>
      </cv-list>

      <div slot="help" class="mdc-typography">
        <cv-toolbar>
          <span slot="title">Help</span>
          <cv-icon-button
            slot="actionItems"
            icon="open_in_browser"
          ></cv-icon-button>
          <cv-icon-button
            slot="actionItems"
            icon="close"
            class="help-close"
          ></cv-icon-button>
        </cv-toolbar>
        <div style="padding: 16px">
          <h3 class="mdc-typography--subtitle2">
            Ultricies nunc massa, id ut felis sed varius accumsan platea.
          </h3>
          <p class="mdc-typography--body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            tincidunt lectus risus, id aliquet mi congue sed.
          </p>
          <p class="mdc-typography--body1">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            pouere cubilia curae; Phasellus tincidunt eros arcu, sollicitudin
            laoreet urna aliquet eget.
          </p>
          <p class="mdc-typography--body1">
            Phasellus porta sed libero vel vulputate. Quisque non nisl sem.
            Pellentesque nec pretium magna, et vestibulum neque. Mauris molestie
            eros quis nisi pretium,
          </p>
          <p class="mdc-typography--body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            tincidunt lectus risus, id aliquet mi congue sed.
          </p>
          <p class="mdc-typography--body1">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            pouere cubilia curae; Phasellus tincidunt eros arcu, sollicitudin
            laoreet urna aliquet eget.
          </p>
          <p class="mdc-typography--body1">
            Phasellus porta sed libero vel vulputate. Quisque non nisl sem.
            Pellentesque nec pretium magna, et vestibulum neque. Mauris molestie
            eros quis nisi pretium,
          </p>
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
            <cv-icon class="covalent-icon" slot="graphic">server</cv-icon>
            <span>[Object name]</span>
            <span slot="secondary">Secondary info</span>
          </cv-list-item>
          <cv-list-item graphic="avatar" twoline>
            <cv-icon class="covalent-icon" slot="graphic">server</cv-icon>
            <span>[Object name]</span>
            <span slot="secondary">Secondary info</span>
          </cv-list-item>
          <cv-list-item graphic="avatar" twoline activated>
            <cv-icon class="covalent-icon" slot="graphic">server</cv-icon>
            <span>[Object name]</span>
            <span slot="secondary">Secondary info</span>
          </cv-list-item>
          <cv-list-item graphic="avatar" twoline>
            <cv-icon class="covalent-icon" slot="graphic">server</cv-icon>
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
          label="Create New"
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

      ${$}
    </cv-app-shell>
    `),y=pt.bind({});var N,k,A;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`({
  navClick
}) => {
  document.addEventListener('DOMContentLoaded', () => {
    const dataTableEl = document.querySelector('.mdc-data-table');
    appShell = document.querySelector('cv-app-shell');
    banner = document.querySelector('cv-action-ribbon');
    dataTable = new MDCDataTable(dataTableEl);
    document.querySelector('.help-item').addEventListener('click', () => {
      appShell.helpOpen = !appShell.helpOpen;
    });
    document.querySelector('.help-close').addEventListener('click', () => {
      appShell.helpOpen = false;
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
    <cv-app-shell appName="[App Name]">
      <svg
        slot="logo"
        class="logo logo-light"
        style="width: 100px"
        viewBox="0 0 696 133"
        fit=""
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
      >
        <path
          style="fill: var(--covalent-theme-text-logo-on-background)"
          d="M78.882 72.796h45.059c-3.178-11.966-12.153-17.201-22.063-17.201-9.348 0-20.005 5.609-22.996 17.201zm70.3 17.388H78.134c2.43 13.462 11.965 21.689 23.37 21.689 7.292 0 16.453-.936 23.185-12.34l22.062 4.673C138.524 123.652 121.884 133 101.504 133c-26.362 0-47.864-20.006-47.864-49.36s21.502-49.547 48.238-49.547c24.867 0 46.368 19.258 47.304 47.678v8.413zM387.843 83.64c0-17.201-13.275-28.045-26.549-28.045-14.958 0-26.176 10.844-26.176 28.045s11.218 27.858 26.176 27.858c13.274 0 26.549-10.657 26.549-27.858zm24.68 46.555h-24.68v-8.039c-7.479 6.918-17.762 10.844-30.85 10.844-23.745 0-45.807-20.006-45.807-49.36s22.062-49.547 45.807-49.547c13.088 0 23.371 3.926 30.85 10.844v-44h24.68v129.258zM630.3 92.427c0 11.966-11.406 20.941-24.493 20.941-9.536 0-15.892-4.488-15.892-11.406 0-6.356 5.234-10.656 13.088-10.656H630.3v1.121zm-15.893-55.31v-.024h-34.108v20.565h34.108c9.536 0 15.893 4.107 15.893 13.455v1.497h-26.923c-23.559 0-37.021 11.966-37.021 29.914 0 18.322 14.21 30.476 35.525 30.476 12.714 0 22.062-4.3 28.419-10.47v7.665h23.558V69.244c0-22.162-15.615-31.627-39.451-32.127zM484.378 92.427c0 11.966-11.405 20.941-24.493 20.941-9.536 0-15.893-4.488-15.893-11.406 0-6.356 5.235-10.656 13.088-10.656h27.298v1.121zm-15.893-55.31v-.024h-34.108v20.565h34.108c9.535 0 15.893 4.107 15.893 13.455v1.497h-26.924c-23.559 0-37.02 11.966-37.02 29.914 0 18.322 14.21 30.476 35.524 30.476 12.714 0 22.062-4.3 28.42-10.47v7.665h23.557V69.244c0-22.162-15.614-31.627-39.45-32.127zM279.3 92.427c0 11.966-11.406 20.941-24.493 20.941-9.536 0-15.893-4.488-15.893-11.406 0-6.356 5.236-10.656 13.089-10.656H279.3v1.121zm-15.892-55.31v-.024h-34.109v20.565h34.109c9.535 0 15.892 4.107 15.892 13.455v1.497h-26.924c-23.558 0-37.02 11.966-37.02 29.914 0 18.322 14.21 30.476 35.525 30.476 12.714 0 22.062-4.3 28.419-10.47v7.665h23.558V69.244c0-22.162-15.614-31.627-39.45-32.127zM216.11 37.026c-15.144 0-25.989 6.043-33.467 16.887V36.899h-24.68v93.298h24.68v-30.102c0-25.989 10.47-42.319 33.28-42.319h1.121V37.029a141.28 141.28 0 00-.934-.003"
        ></path>
        <path
          style="fill: var(--covalent-theme-text-logo-on-background)"
          d="M48.982 107.707c-3.753 1.408-7.691 2.295-10.654 2.295-8.226 0-13.648-4.86-13.648-16.079V57.09h25.302V36.898H24.68V14.007H0v81.786C0 121.408 14.584 133 36.646 133c7.792 0 15.233-1.662 24.835-6.801-5.117-5.076-9.814-11.399-12.499-18.492M558.509 109.788c-.988.138-1.923.214-2.776.214-8.226 0-13.648-4.86-13.648-16.079V57.09h25.983V36.898h-25.983V14.007h-24.681v81.786c0 25.615 14.584 37.207 36.647 37.207 5.389 0 10.251-.794 15.913-2.983-7.319-5.243-10.165-13.736-11.455-20.229"
        ></path>
        <path
          class="logo-dot"
          fill="#e46c42"
          d="M695.029 116.028c0 8.825-6.772 15.596-16.212 15.596s-16.212-6.771-16.212-15.596c0-8.413 6.772-15.801 16.212-15.801s16.212 7.388 16.212 15.801"
        ></path>
      </svg>

      <cv-list
        class="navigation-rail"
        slot="navigation"
        activatable
      >
        <cv-nav-list-item class="home-item" graphic="avatar">
          <span>Vantage</span>
          <cv-icon class="covalent-icon teradata-circle" slot="graphic"
            >teradata</cv-icon
          >
          <cv-icon class="covalent-icon teradata-no-circle" slot="graphic"
            >teradata_nocircle</cv-icon
          >
          <cv-icon class="home-icon" slot="graphic">home</cv-icon>
        </cv-nav-list-item>

        <cv-expansion-list activatable>
          <cv-nav-list-item slot="expansionHeader" graphic="avatar" hasChildren>
            Editor
            <cv-icon class="covalent-icon" slot="graphic"
              >product_editor</cv-icon
            >
          </cv-nav-list-item>
          <cv-nav-list-item>Scripts</cv-nav-list-item>
          <cv-nav-list-item>Scripts</cv-nav-list-item>
          <cv-nav-list-item>Scripts</cv-nav-list-item>
          <cv-nav-list-item>Scripts</cv-nav-list-item>
          <cv-nav-list-item>Scripts</cv-nav-list-item>
        </cv-expansion-list>

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

      <cv-list class="navigation-rail" slot="user-menu" activatable>
        <cv-nav-list-item
          class="beta-list-item"
          graphic="icon"
          twoline
          activated
        >
          <svg
            slot="graphic"
            style="fill: orange; height: 20px"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g>
              <path
                d="M0 2C0 0.895431 0.895431 0 2 0H40L34.9206 20H2C0.895429 20 0 19.1046 0 18V2Z"
              ></path>
              <path
                d="M5.73242 14V6.8418H8.41797C8.96484 6.8418 9.40267 6.91504 9.73145 7.06152C10.0635 7.20475 10.3223 7.42773 10.5078 7.73047C10.6966 8.02995 10.791 8.34408 10.791 8.67285C10.791 8.97884 10.708 9.26693 10.542 9.53711C10.376 9.80729 10.1253 10.0254 9.79004 10.1914C10.223 10.3184 10.555 10.5348 10.7861 10.8408C11.0205 11.1468 11.1377 11.5081 11.1377 11.9248C11.1377 12.2601 11.0661 12.5726 10.9229 12.8623C10.7829 13.1488 10.6087 13.3701 10.4004 13.5264C10.1921 13.6826 9.93001 13.8014 9.61426 13.8828C9.30176 13.9609 8.91764 14 8.46191 14H5.73242ZM6.67969 9.84961H8.22754C8.64746 9.84961 8.94857 9.82194 9.13086 9.7666C9.37174 9.69499 9.55241 9.57617 9.67285 9.41016C9.79655 9.24414 9.8584 9.03581 9.8584 8.78516C9.8584 8.54753 9.80143 8.33919 9.6875 8.16016C9.57357 7.97786 9.41081 7.85417 9.19922 7.78906C8.98763 7.7207 8.62467 7.68652 8.11035 7.68652H6.67969V9.84961ZM6.67969 13.1553H8.46191C8.7679 13.1553 8.98275 13.1439 9.10645 13.1211C9.32454 13.082 9.50684 13.0169 9.65332 12.9258C9.7998 12.8346 9.92025 12.7028 10.0146 12.5303C10.109 12.3545 10.1562 12.1527 10.1562 11.9248C10.1562 11.6579 10.0879 11.4268 9.95117 11.2314C9.81445 11.0329 9.62402 10.8945 9.37988 10.8164C9.139 10.735 8.79069 10.6943 8.33496 10.6943H6.67969V13.1553ZM12.7109 14V6.8418H17.8867V7.68652H13.6582V9.87891H17.6182V10.7188H13.6582V13.1553H18.0527V14H12.7109ZM21.4326 14V7.68652H19.0742V6.8418H24.748V7.68652H22.3799V14H21.4326ZM24.4463 14L27.1953 6.8418H28.2158L31.1455 14H30.0664L29.2314 11.832H26.2383L25.4521 14H24.4463ZM26.5117 11.0605H28.9385L28.1914 9.07812C27.9635 8.47591 27.7943 7.98112 27.6836 7.59375C27.5924 8.05273 27.4639 8.50846 27.2979 8.96094L26.5117 11.0605Z"
                fill="black"
                fill-opacity="0.87"
              ></path>
            </g>
          </svg>
          <span>You're trying console beta</span>
          <span slot="secondary">Return to classic</span>
        </cv-nav-list-item>
        <cv-nav-list-item graphic="avatar">
          <span>Notification</span>
          <cv-icon slot="graphic">notifications</cv-icon>
        </cv-nav-list-item>
        <cv-nav-list-item graphic="avatar" class="help-item">
          <span>Help</span>
          <cv-icon slot="graphic">help</cv-icon>
        </cv-nav-list-item>
        <cv-nav-list-item graphic="avatar">
          <span>Account</span>
          <cv-icon slot="graphic">person</cv-icon>
        </cv-nav-list-item>
      </cv-list>

      <div slot="help" class="mdc-typography">
        <cv-toolbar>
          <span slot="title">Help</span>
          <cv-icon-button
            slot="actionItems"
            icon="open_in_browser"
          ></cv-icon-button>
          <cv-icon-button
            slot="actionItems"
            icon="close"
            class="help-close"
          ></cv-icon-button>
        </cv-toolbar>
        <div style="padding: 16px">
          <h3 class="mdc-typography--subtitle2">
            Ultricies nunc massa, id ut felis sed varius accumsan platea.
          </h3>
          <p class="mdc-typography--body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            tincidunt lectus risus, id aliquet mi congue sed.
          </p>
          <p class="mdc-typography--body1">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            pouere cubilia curae; Phasellus tincidunt eros arcu, sollicitudin
            laoreet urna aliquet eget.
          </p>
          <p class="mdc-typography--body1">
            Phasellus porta sed libero vel vulputate. Quisque non nisl sem.
            Pellentesque nec pretium magna, et vestibulum neque. Mauris molestie
            eros quis nisi pretium,
          </p>
          <p class="mdc-typography--body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            tincidunt lectus risus, id aliquet mi congue sed.
          </p>
          <p class="mdc-typography--body1">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            pouere cubilia curae; Phasellus tincidunt eros arcu, sollicitudin
            laoreet urna aliquet eget.
          </p>
          <p class="mdc-typography--body1">
            Phasellus porta sed libero vel vulputate. Quisque non nisl sem.
            Pellentesque nec pretium magna, et vestibulum neque. Mauris molestie
            eros quis nisi pretium,
          </p>
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
            <cv-icon class="covalent-icon" slot="graphic">server</cv-icon>
            <span>[Object name]</span>
            <span slot="secondary">Secondary info</span>
          </cv-list-item>
          <cv-list-item graphic="avatar" twoline>
            <cv-icon class="covalent-icon" slot="graphic">server</cv-icon>
            <span>[Object name]</span>
            <span slot="secondary">Secondary info</span>
          </cv-list-item>
          <cv-list-item graphic="avatar" twoline activated>
            <cv-icon class="covalent-icon" slot="graphic">server</cv-icon>
            <span>[Object name]</span>
            <span slot="secondary">Secondary info</span>
          </cv-list-item>
          <cv-list-item graphic="avatar" twoline>
            <cv-icon class="covalent-icon" slot="graphic">server</cv-icon>
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
          label="Create New"
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
}`,...(A=(k=y.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};const jt=["Basic"];export{y as Basic,jt as __namedExportsOrder,$t as default};
//# sourceMappingURL=app-shell.stories-50eb016d.js.map
