import{a as p,b as u}from"./tslib.es6-4b90b051.js";/**
 * @license
 * Copyright 2020 Google Inc.
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
 */var d={CLOSING:"mdc-banner--closing",OPEN:"mdc-banner--open",OPENING:"mdc-banner--opening"},c={BANNER_ANIMATION_CLOSE_TIME_MS:250,BANNER_ANIMATION_OPEN_TIME_MS:300},h={CLOSED:"MDCBanner:closed",CLOSING:"MDCBanner:closing",OPENED:"MDCBanner:opened",OPENING:"MDCBanner:opening",ACTION_CLICKED:"MDCBanner:actionClicked"},N={CONTENT:".mdc-banner__content",PRIMARY_ACTION:".mdc-banner__primary-action",SECONDARY_ACTION:".mdc-banner__secondary-action",TEXT:".mdc-banner__text"},r;(function(e){e[e.PRIMARY=0]="PRIMARY",e[e.SECONDARY=1]="SECONDARY",e[e.UNSPECIFIED=2]="UNSPECIFIED"})(r||(r={}));var a;(function(e){e[e.PRIMARY=0]="PRIMARY",e[e.SECONDARY=1]="SECONDARY",e[e.UNKNOWN=2]="UNKNOWN"})(a||(a={}));/**
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
 */var m=function(){function e(t){t===void 0&&(t={}),this.adapter=t}return Object.defineProperty(e,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),e.prototype.init=function(){},e.prototype.destroy=function(){},e}();/**
 * @license
 * Copyright 2020 Google Inc.
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
 */var o=d.OPENING,f=d.OPEN,s=d.CLOSING,C=function(e){p(t,e);function t(n){var i=e.call(this,u(u({},t.defaultAdapter),n))||this;return i.isOpened=!1,i.animationFrame=0,i.animationTimer=0,i}return Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},getContentHeight:function(){return 0},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},notifyActionClicked:function(){},releaseFocus:function(){},removeClass:function(){},setStyleProperty:function(){},trapFocus:function(){}}},enumerable:!1,configurable:!0}),t.prototype.destroy=function(){cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=0},t.prototype.open=function(){var n=this;this.isOpened=!0,this.adapter.removeClass(s),this.adapter.addClass(o),this.adapter.notifyOpening();var i=this.adapter.getContentHeight();this.animationFrame=requestAnimationFrame(function(){n.adapter.addClass(f),n.adapter.setStyleProperty("height",i+"px"),n.animationTimer=setTimeout(function(){n.handleAnimationTimerEnd(),n.adapter.trapFocus(),n.adapter.notifyOpened()},c.BANNER_ANIMATION_OPEN_TIME_MS)})},t.prototype.close=function(n){var i=this;this.isOpened&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=0,this.isOpened=!1,this.adapter.notifyClosing(n),this.adapter.addClass(s),this.adapter.setStyleProperty("height","0"),this.adapter.removeClass(f),this.adapter.removeClass(o),clearTimeout(this.animationTimer),this.animationTimer=setTimeout(function(){i.adapter.releaseFocus(),i.handleAnimationTimerEnd(),i.adapter.notifyClosed(n)},c.BANNER_ANIMATION_CLOSE_TIME_MS))},t.prototype.isOpen=function(){return this.isOpened},t.prototype.handlePrimaryActionClick=function(n){n===void 0&&(n=!1),n?this.adapter.notifyActionClicked(a.PRIMARY):this.close(r.PRIMARY)},t.prototype.handleSecondaryActionClick=function(n){n===void 0&&(n=!1),n?this.adapter.notifyActionClicked(a.SECONDARY):this.close(r.SECONDARY)},t.prototype.layout=function(){var n=this.adapter.getContentHeight();this.adapter.setStyleProperty("height",n+"px")},t.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(o),this.adapter.removeClass(s)},t}(m);export{r as C,C as M,h as e,N as s};
