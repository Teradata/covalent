import{f as B,d as re,e as ne,a as y,b as E,c as g,g as ae,h as ie}from"./tslib.es6-4b90b051.js";import{s as oe,a as U}from"./index-ec0f687a.js";/**
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
 */var N=function(){function i(n){n===void 0&&(n={}),this.adapter=n}return Object.defineProperty(i,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(i,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(i,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),i.prototype.init=function(){},i.prototype.destroy=function(){},i}();/**
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
 */function se(i){return String(i).replace(/\-([a-z])/g,function(n,e){return e.toUpperCase()})}var x=function(){function i(n,e){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];this.root=n,this.initialize.apply(this,re([],ne(t))),this.foundation=e===void 0?this.getDefaultFoundation():e,this.foundation.init(),this.initialSyncWithDOM()}return i.attachTo=function(n){return new i(n,new N({}))},i.prototype.initialize=function(){},i.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},i.prototype.initialSyncWithDOM=function(){},i.prototype.destroy=function(){this.foundation.destroy()},i.prototype.listen=function(n,e,t){this.root.addEventListener(n,e,t)},i.prototype.unlisten=function(n,e,t){this.root.removeEventListener(n,e,t)},i.prototype.emit=function(n,e,t){t===void 0&&(t=!1);var r;typeof CustomEvent=="function"?r=new CustomEvent(n,{bubbles:t,detail:e}):(r=document.createEvent("CustomEvent"),r.initCustomEvent(n,t,!1,e)),this.root.dispatchEvent(r)},i.prototype.safeSetAttribute=function(n,e,t){if(e.toLowerCase()==="tabindex")n.tabIndex=Number(t);else if(e.indexOf("data-")===0){var r=se(e.replace(/^data-/,""));n.dataset[r]=t}else oe([U.safeAttrPrefix(F||(F=B(["aria-"],["aria-"]))),U.safeAttrPrefix(K||(K=B(["role"],["role"])))],n,e,t)},i}(),F,K;/**
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
 */var G={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}},P={animationend:{cssProperty:"animation",prefixed:"webkitAnimationEnd",standard:"animationend"},animationiteration:{cssProperty:"animation",prefixed:"webkitAnimationIteration",standard:"animationiteration"},animationstart:{cssProperty:"animation",prefixed:"webkitAnimationStart",standard:"animationstart"},transitionend:{cssProperty:"transition",prefixed:"webkitTransitionEnd",standard:"transitionend"}};function J(i){return!!i.document&&typeof i.document.createElement=="function"}function de(i,n){if(J(i)&&n in G){var e=i.document.createElement("div"),t=G[n],r=t.standard,a=t.prefixed,o=r in e.style;return o?r:a}return n}function W(i,n){if(J(i)&&n in P){var e=i.document.createElement("div"),t=P[n],r=t.standard,a=t.prefixed,o=t.cssProperty,s=o in e.style;return s?r:a}return n}/**
 * @license
 * Copyright 2019 Google Inc.
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
 */function I(i){return i===void 0&&(i=window),ce(i)?{passive:!0}:!1}function ce(i){i===void 0&&(i=window);var n=!1;try{var e={get passive(){return n=!0,!1}},t=function(){};i.document.addEventListener("test",t,e),i.document.removeEventListener("test",t,e)}catch{n=!1}return n}/**
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
 */function k(i,n){if(i.closest)return i.closest(n);for(var e=i;e;){if(M(e,n))return e;e=e.parentElement}return null}function M(i,n){var e=i.matches||i.webkitMatchesSelector||i.msMatchesSelector;return e.call(i,n)}/**
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
 */var ue={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},le={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},z={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300},T;function fe(i,n){n===void 0&&(n=!1);var e=i.CSS,t=T;if(typeof T=="boolean"&&!n)return T;var r=e&&typeof e.supports=="function";if(!r)return!1;var a=e.supports("--css-vars","yes"),o=e.supports("(--css-vars: yes)")&&e.supports("color","#00000000");return t=a||o,n||(T=t),t}function he(i,n,e){if(!i)return{x:0,y:0};var t=n.x,r=n.y,a=t+e.left,o=r+e.top,s,d;if(i.type==="touchstart"){var u=i;s=u.changedTouches[0].pageX-a,d=u.changedTouches[0].pageY-o}else{var C=i;s=C.pageX-a,d=C.pageY-o}return{x:s,y:d}}/**
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
 */var j=["touchstart","pointerdown","mousedown","keydown"],q=["touchend","pointerup","mouseup","contextmenu"],L=[],Y=function(i){y(n,i);function n(e){var t=i.call(this,E(E({},n.defaultAdapter),e))||this;return t.activationAnimationHasEnded=!1,t.activationTimer=0,t.fgDeactivationRemovalTimer=0,t.fgScale="0",t.frame={width:0,height:0},t.initialSize=0,t.layoutFrame=0,t.maxRadius=0,t.unboundedCoords={left:0,top:0},t.activationState=t.defaultActivationState(),t.activationTimerCallback=function(){t.activationAnimationHasEnded=!0,t.runDeactivationUXLogicIfReady()},t.activateHandler=function(r){t.activateImpl(r)},t.deactivateHandler=function(){t.deactivateImpl()},t.focusHandler=function(){t.handleFocus()},t.blurHandler=function(){t.handleBlur()},t.resizeHandler=function(){t.layout()},t}return Object.defineProperty(n,"cssClasses",{get:function(){return ue},enumerable:!1,configurable:!0}),Object.defineProperty(n,"strings",{get:function(){return le},enumerable:!1,configurable:!0}),Object.defineProperty(n,"numbers",{get:function(){return z},enumerable:!1,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),n.prototype.init=function(){var e=this,t=this.supportsPressRipple();if(this.registerRootHandlers(t),t){var r=n.cssClasses,a=r.ROOT,o=r.UNBOUNDED;requestAnimationFrame(function(){e.adapter.addClass(a),e.adapter.isUnbounded()&&(e.adapter.addClass(o),e.layoutInternal())})}},n.prototype.destroy=function(){var e=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(n.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(n.cssClasses.FG_DEACTIVATION));var t=n.cssClasses,r=t.ROOT,a=t.UNBOUNDED;requestAnimationFrame(function(){e.adapter.removeClass(r),e.adapter.removeClass(a),e.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},n.prototype.activate=function(e){this.activateImpl(e)},n.prototype.deactivate=function(){this.deactivateImpl()},n.prototype.layout=function(){var e=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){e.layoutInternal(),e.layoutFrame=0})},n.prototype.setUnbounded=function(e){var t=n.cssClasses.UNBOUNDED;e?this.adapter.addClass(t):this.adapter.removeClass(t)},n.prototype.handleFocus=function(){var e=this;requestAnimationFrame(function(){e.adapter.addClass(n.cssClasses.BG_FOCUSED)})},n.prototype.handleBlur=function(){var e=this;requestAnimationFrame(function(){e.adapter.removeClass(n.cssClasses.BG_FOCUSED)})},n.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},n.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},n.prototype.registerRootHandlers=function(e){var t,r;if(e){try{for(var a=g(j),o=a.next();!o.done;o=a.next()){var s=o.value;this.adapter.registerInteractionHandler(s,this.activateHandler)}}catch(d){t={error:d}}finally{try{o&&!o.done&&(r=a.return)&&r.call(a)}finally{if(t)throw t.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},n.prototype.registerDeactivationHandlers=function(e){var t,r;if(e.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var a=g(q),o=a.next();!o.done;o=a.next()){var s=o.value;this.adapter.registerDocumentInteractionHandler(s,this.deactivateHandler)}}catch(d){t={error:d}}finally{try{o&&!o.done&&(r=a.return)&&r.call(a)}finally{if(t)throw t.error}}},n.prototype.deregisterRootHandlers=function(){var e,t;try{for(var r=g(j),a=r.next();!a.done;a=r.next()){var o=a.value;this.adapter.deregisterInteractionHandler(o,this.activateHandler)}}catch(s){e={error:s}}finally{try{a&&!a.done&&(t=r.return)&&t.call(r)}finally{if(e)throw e.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},n.prototype.deregisterDeactivationHandlers=function(){var e,t;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var r=g(q),a=r.next();!a.done;a=r.next()){var o=a.value;this.adapter.deregisterDocumentInteractionHandler(o,this.deactivateHandler)}}catch(s){e={error:s}}finally{try{a&&!a.done&&(t=r.return)&&t.call(r)}finally{if(e)throw e.error}}},n.prototype.removeCssVars=function(){var e=this,t=n.strings,r=Object.keys(t);r.forEach(function(a){a.indexOf("VAR_")===0&&e.adapter.updateCssVariable(t[a],null)})},n.prototype.activateImpl=function(e){var t=this;if(!this.adapter.isSurfaceDisabled()){var r=this.activationState;if(!r.isActivated){var a=this.previousActivationEvent,o=a&&e!==void 0&&a.type!==e.type;if(!o){r.isActivated=!0,r.isProgrammatic=e===void 0,r.activationEvent=e,r.wasActivatedByPointer=r.isProgrammatic?!1:e!==void 0&&(e.type==="mousedown"||e.type==="touchstart"||e.type==="pointerdown");var s=e!==void 0&&L.length>0&&L.some(function(d){return t.adapter.containsEventTarget(d)});if(s){this.resetActivationState();return}e!==void 0&&(L.push(e.target),this.registerDeactivationHandlers(e)),r.wasElementMadeActive=this.checkElementMadeActive(e),r.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){L=[],!r.wasElementMadeActive&&e!==void 0&&(e.key===" "||e.keyCode===32)&&(r.wasElementMadeActive=t.checkElementMadeActive(e),r.wasElementMadeActive&&t.animateActivation()),r.wasElementMadeActive||(t.activationState=t.defaultActivationState())})}}}},n.prototype.checkElementMadeActive=function(e){return e!==void 0&&e.type==="keydown"?this.adapter.isSurfaceActive():!0},n.prototype.animateActivation=function(){var e=this,t=n.strings,r=t.VAR_FG_TRANSLATE_START,a=t.VAR_FG_TRANSLATE_END,o=n.cssClasses,s=o.FG_DEACTIVATION,d=o.FG_ACTIVATION,u=n.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var C="",R="";if(!this.adapter.isUnbounded()){var v=this.getFgTranslationCoordinates(),A=v.startPoint,w=v.endPoint;C=A.x+"px, "+A.y+"px",R=w.x+"px, "+w.y+"px"}this.adapter.updateCssVariable(r,C),this.adapter.updateCssVariable(a,R),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(s),this.adapter.computeBoundingRect(),this.adapter.addClass(d),this.activationTimer=setTimeout(function(){e.activationTimerCallback()},u)},n.prototype.getFgTranslationCoordinates=function(){var e=this.activationState,t=e.activationEvent,r=e.wasActivatedByPointer,a;r?a=he(t,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):a={x:this.frame.width/2,y:this.frame.height/2},a={x:a.x-this.initialSize/2,y:a.y-this.initialSize/2};var o={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:a,endPoint:o}},n.prototype.runDeactivationUXLogicIfReady=function(){var e=this,t=n.cssClasses.FG_DEACTIVATION,r=this.activationState,a=r.hasDeactivationUXRun,o=r.isActivated,s=a||!o;s&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(t),this.fgDeactivationRemovalTimer=setTimeout(function(){e.adapter.removeClass(t)},z.FG_DEACTIVATION_MS))},n.prototype.rmBoundedActivationClasses=function(){var e=n.cssClasses.FG_ACTIVATION;this.adapter.removeClass(e),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},n.prototype.resetActivationState=function(){var e=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return e.previousActivationEvent=void 0},n.numbers.TAP_DELAY_MS)},n.prototype.deactivateImpl=function(){var e=this,t=this.activationState;if(t.isActivated){var r=E({},t);t.isProgrammatic?(requestAnimationFrame(function(){e.animateDeactivation(r)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){e.activationState.hasDeactivationUXRun=!0,e.animateDeactivation(r),e.resetActivationState()}))}},n.prototype.animateDeactivation=function(e){var t=e.wasActivatedByPointer,r=e.wasElementMadeActive;(t||r)&&this.runDeactivationUXLogicIfReady()},n.prototype.layoutInternal=function(){var e=this;this.frame=this.adapter.computeBoundingRect();var t=Math.max(this.frame.height,this.frame.width),r=function(){var o=Math.sqrt(Math.pow(e.frame.width,2)+Math.pow(e.frame.height,2));return o+n.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?t:r();var a=Math.floor(t*n.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&a%2!==0?this.initialSize=a-1:this.initialSize=a,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},n.prototype.updateLayoutCssVars=function(){var e=n.strings,t=e.VAR_FG_SIZE,r=e.VAR_LEFT,a=e.VAR_TOP,o=e.VAR_FG_SCALE;this.adapter.updateCssVariable(t,this.initialSize+"px"),this.adapter.updateCssVariable(o,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(r,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(a,this.unboundedCoords.top+"px"))},n}(N);/**
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
 */var X=function(i){y(n,i);function n(){var e=i!==null&&i.apply(this,arguments)||this;return e.disabled=!1,e}return n.attachTo=function(e,t){t===void 0&&(t={isUnbounded:void 0});var r=new n(e);return t.isUnbounded!==void 0&&(r.unbounded=t.isUnbounded),r},n.createAdapter=function(e){return{addClass:function(t){e.root.classList.add(t)},browserSupportsCssVars:function(){return fe(window)},computeBoundingRect:function(){return e.root.getBoundingClientRect()},containsEventTarget:function(t){return e.root.contains(t)},deregisterDocumentInteractionHandler:function(t,r){document.documentElement.removeEventListener(t,r,I())},deregisterInteractionHandler:function(t,r){e.root.removeEventListener(t,r,I())},deregisterResizeHandler:function(t){window.removeEventListener("resize",t)},getWindowPageOffset:function(){return{x:window.pageXOffset,y:window.pageYOffset}},isSurfaceActive:function(){return M(e.root,":active")},isSurfaceDisabled:function(){return!!e.disabled},isUnbounded:function(){return!!e.unbounded},registerDocumentInteractionHandler:function(t,r){document.documentElement.addEventListener(t,r,I())},registerInteractionHandler:function(t,r){e.root.addEventListener(t,r,I())},registerResizeHandler:function(t){window.addEventListener("resize",t)},removeClass:function(t){e.root.classList.remove(t)},updateCssVariable:function(t,r){e.root.style.setProperty(t,r)}}},Object.defineProperty(n.prototype,"unbounded",{get:function(){return!!this.isUnbounded},set:function(e){this.isUnbounded=!!e,this.setUnbounded()},enumerable:!1,configurable:!0}),n.prototype.activate=function(){this.foundation.activate()},n.prototype.deactivate=function(){this.foundation.deactivate()},n.prototype.layout=function(){this.foundation.layout()},n.prototype.getDefaultFoundation=function(){return new Y(n.createAdapter(this))},n.prototype.initialSyncWithDOM=function(){var e=this.root;this.isUnbounded="mdcRippleIsUnbounded"in e.dataset},n.prototype.setUnbounded=function(){this.foundation.setUnbounded(!!this.isUnbounded)},n}(x);/**
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
 */var S={ANIM_CHECKED_INDETERMINATE:"mdc-checkbox--anim-checked-indeterminate",ANIM_CHECKED_UNCHECKED:"mdc-checkbox--anim-checked-unchecked",ANIM_INDETERMINATE_CHECKED:"mdc-checkbox--anim-indeterminate-checked",ANIM_INDETERMINATE_UNCHECKED:"mdc-checkbox--anim-indeterminate-unchecked",ANIM_UNCHECKED_CHECKED:"mdc-checkbox--anim-unchecked-checked",ANIM_UNCHECKED_INDETERMINATE:"mdc-checkbox--anim-unchecked-indeterminate",BACKGROUND:"mdc-checkbox__background",CHECKED:"mdc-checkbox--checked",CHECKMARK:"mdc-checkbox__checkmark",CHECKMARK_PATH:"mdc-checkbox__checkmark-path",DISABLED:"mdc-checkbox--disabled",INDETERMINATE:"mdc-checkbox--indeterminate",MIXEDMARK:"mdc-checkbox__mixedmark",NATIVE_CONTROL:"mdc-checkbox__native-control",ROOT:"mdc-checkbox",SELECTED:"mdc-checkbox--selected",UPGRADED:"mdc-checkbox--upgraded"},f={ARIA_CHECKED_ATTR:"aria-checked",ARIA_CHECKED_INDETERMINATE_VALUE:"mixed",DATA_INDETERMINATE_ATTR:"data-indeterminate",NATIVE_CONTROL_SELECTOR:".mdc-checkbox__native-control",TRANSITION_STATE_CHECKED:"checked",TRANSITION_STATE_INDETERMINATE:"indeterminate",TRANSITION_STATE_INIT:"init",TRANSITION_STATE_UNCHECKED:"unchecked"},V={ANIM_END_LATCH_MS:250};/**
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
 */var pe=function(i){y(n,i);function n(e){var t=i.call(this,E(E({},n.defaultAdapter),e))||this;return t.currentCheckState=f.TRANSITION_STATE_INIT,t.currentAnimationClass="",t.animEndLatchTimer=0,t.enableAnimationEndHandler=!1,t}return Object.defineProperty(n,"cssClasses",{get:function(){return S},enumerable:!1,configurable:!0}),Object.defineProperty(n,"strings",{get:function(){return f},enumerable:!1,configurable:!0}),Object.defineProperty(n,"numbers",{get:function(){return V},enumerable:!1,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{addClass:function(){},forceLayout:function(){},hasNativeControl:function(){return!1},isAttachedToDOM:function(){return!1},isChecked:function(){return!1},isIndeterminate:function(){return!1},removeClass:function(){},removeNativeControlAttr:function(){},setNativeControlAttr:function(){},setNativeControlDisabled:function(){}}},enumerable:!1,configurable:!0}),n.prototype.init=function(){this.currentCheckState=this.determineCheckState(),this.updateAriaChecked(),this.adapter.addClass(S.UPGRADED)},n.prototype.destroy=function(){clearTimeout(this.animEndLatchTimer)},n.prototype.setDisabled=function(e){this.adapter.setNativeControlDisabled(e),e?this.adapter.addClass(S.DISABLED):this.adapter.removeClass(S.DISABLED)},n.prototype.handleAnimationEnd=function(){var e=this;this.enableAnimationEndHandler&&(clearTimeout(this.animEndLatchTimer),this.animEndLatchTimer=setTimeout(function(){e.adapter.removeClass(e.currentAnimationClass),e.enableAnimationEndHandler=!1},V.ANIM_END_LATCH_MS))},n.prototype.handleChange=function(){this.transitionCheckState()},n.prototype.transitionCheckState=function(){if(this.adapter.hasNativeControl()){var e=this.currentCheckState,t=this.determineCheckState();if(e!==t){this.updateAriaChecked();var r=f.TRANSITION_STATE_UNCHECKED,a=S.SELECTED;t===r?this.adapter.removeClass(a):this.adapter.addClass(a),this.currentAnimationClass.length>0&&(clearTimeout(this.animEndLatchTimer),this.adapter.forceLayout(),this.adapter.removeClass(this.currentAnimationClass)),this.currentAnimationClass=this.getTransitionAnimationClass(e,t),this.currentCheckState=t,this.adapter.isAttachedToDOM()&&this.currentAnimationClass.length>0&&(this.adapter.addClass(this.currentAnimationClass),this.enableAnimationEndHandler=!0)}}},n.prototype.determineCheckState=function(){var e=f.TRANSITION_STATE_INDETERMINATE,t=f.TRANSITION_STATE_CHECKED,r=f.TRANSITION_STATE_UNCHECKED;return this.adapter.isIndeterminate()?e:this.adapter.isChecked()?t:r},n.prototype.getTransitionAnimationClass=function(e,t){var r=f.TRANSITION_STATE_INIT,a=f.TRANSITION_STATE_CHECKED,o=f.TRANSITION_STATE_UNCHECKED,s=n.cssClasses,d=s.ANIM_UNCHECKED_CHECKED,u=s.ANIM_UNCHECKED_INDETERMINATE,C=s.ANIM_CHECKED_UNCHECKED,R=s.ANIM_CHECKED_INDETERMINATE,v=s.ANIM_INDETERMINATE_CHECKED,A=s.ANIM_INDETERMINATE_UNCHECKED;switch(e){case r:return t===o?"":t===a?v:A;case o:return t===a?d:u;case a:return t===o?C:R;default:return t===a?v:A}},n.prototype.updateAriaChecked=function(){this.adapter.isIndeterminate()?this.adapter.setNativeControlAttr(f.ARIA_CHECKED_ATTR,f.ARIA_CHECKED_INDETERMINATE_VALUE):this.adapter.removeNativeControlAttr(f.ARIA_CHECKED_ATTR)},n}(N);/**
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
 */var $=["checked","indeterminate"],Ce=function(i){y(n,i);function n(){var e=i!==null&&i.apply(this,arguments)||this;return e.rippleSurface=e.createRipple(),e}return n.attachTo=function(e){return new n(e)},Object.defineProperty(n.prototype,"ripple",{get:function(){return this.rippleSurface},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"checked",{get:function(){return this.getNativeControl().checked},set:function(e){this.getNativeControl().checked=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"indeterminate",{get:function(){return this.getNativeControl().indeterminate},set:function(e){this.getNativeControl().indeterminate=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"disabled",{get:function(){return this.getNativeControl().disabled},set:function(e){this.foundation.setDisabled(e)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"value",{get:function(){return this.getNativeControl().value},set:function(e){this.getNativeControl().value=e},enumerable:!1,configurable:!0}),n.prototype.initialize=function(){var e=f.DATA_INDETERMINATE_ATTR;this.getNativeControl().indeterminate=this.getNativeControl().getAttribute(e)==="true",this.getNativeControl().removeAttribute(e)},n.prototype.initialSyncWithDOM=function(){var e=this;this.handleChange=function(){e.foundation.handleChange()},this.handleAnimationEnd=function(){e.foundation.handleAnimationEnd()},this.getNativeControl().addEventListener("change",this.handleChange),this.listen(W(window,"animationend"),this.handleAnimationEnd),this.installPropertyChangeHooks()},n.prototype.destroy=function(){this.rippleSurface.destroy(),this.getNativeControl().removeEventListener("change",this.handleChange),this.unlisten(W(window,"animationend"),this.handleAnimationEnd),this.uninstallPropertyChangeHooks(),i.prototype.destroy.call(this)},n.prototype.getDefaultFoundation=function(){var e=this,t={addClass:function(r){e.root.classList.add(r)},forceLayout:function(){return e.root.offsetWidth},hasNativeControl:function(){return!!e.getNativeControl()},isAttachedToDOM:function(){return!!e.root.parentNode},isChecked:function(){return e.checked},isIndeterminate:function(){return e.indeterminate},removeClass:function(r){e.root.classList.remove(r)},removeNativeControlAttr:function(r){e.getNativeControl().removeAttribute(r)},setNativeControlAttr:function(r,a){e.safeSetAttribute(e.getNativeControl(),r,a)},setNativeControlDisabled:function(r){e.getNativeControl().disabled=r}};return new pe(t)},n.prototype.createRipple=function(){var e=this,t=E(E({},X.createAdapter(this)),{deregisterInteractionHandler:function(r,a){e.getNativeControl().removeEventListener(r,a,I())},isSurfaceActive:function(){return M(e.getNativeControl(),":active")},isUnbounded:function(){return!0},registerInteractionHandler:function(r,a){e.getNativeControl().addEventListener(r,a,I())}});return new X(this.root,new Y(t))},n.prototype.installPropertyChangeHooks=function(){var e,t,r=this,a=this.getNativeControl(),o=Object.getPrototypeOf(a),s=function(v){var A=Object.getOwnPropertyDescriptor(o,v);if(!Q(A))return{value:void 0};var w=A.get,ee={configurable:A.configurable,enumerable:A.enumerable,get:w,set:function(te){A.set.call(a,te),r.foundation.handleChange()}};Object.defineProperty(a,v,ee)};try{for(var d=g($),u=d.next();!u.done;u=d.next()){var C=u.value,R=s(C);if(typeof R=="object")return R.value}}catch(v){e={error:v}}finally{try{u&&!u.done&&(t=d.return)&&t.call(d)}finally{if(e)throw e.error}}},n.prototype.uninstallPropertyChangeHooks=function(){var e,t,r=this.getNativeControl(),a=Object.getPrototypeOf(r);try{for(var o=g($),s=o.next();!s.done;s=o.next()){var d=s.value,u=Object.getOwnPropertyDescriptor(a,d);if(!Q(u))return;Object.defineProperty(r,d,u)}}catch(C){e={error:C}}finally{try{s&&!s.done&&(t=o.return)&&t.call(o)}finally{if(e)throw e.error}}},n.prototype.getNativeControl=function(){var e=f.NATIVE_CONTROL_SELECTOR,t=this.root.querySelector(e);if(!t)throw new Error("Checkbox component requires a "+e+" element");return t},n}(x);function Q(i){return!!i&&typeof i.set=="function"}/**
 * @license
 * Copyright 2017 Google Inc.
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
 */var h={CLOSED_CLASS:"mdc-linear-progress--closed",CLOSED_ANIMATION_OFF_CLASS:"mdc-linear-progress--closed-animation-off",INDETERMINATE_CLASS:"mdc-linear-progress--indeterminate",REVERSED_CLASS:"mdc-linear-progress--reversed",ANIMATION_READY_CLASS:"mdc-linear-progress--animation-ready"},m={ARIA_HIDDEN:"aria-hidden",ARIA_VALUEMAX:"aria-valuemax",ARIA_VALUEMIN:"aria-valuemin",ARIA_VALUENOW:"aria-valuenow",BUFFER_BAR_SELECTOR:".mdc-linear-progress__buffer-bar",FLEX_BASIS:"flex-basis",PRIMARY_BAR_SELECTOR:".mdc-linear-progress__primary-bar"},D={PRIMARY_HALF:.8367142,PRIMARY_FULL:2.00611057,SECONDARY_QUARTER:.37651913,SECONDARY_HALF:.84386165,SECONDARY_FULL:1.60277782};/**
 * @license
 * Copyright 2017 Google Inc.
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
 */var O=function(i){y(n,i);function n(e){var t=i.call(this,E(E({},n.defaultAdapter),e))||this;return t.observer=null,t}return Object.defineProperty(n,"cssClasses",{get:function(){return h},enumerable:!1,configurable:!0}),Object.defineProperty(n,"strings",{get:function(){return m},enumerable:!1,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{addClass:function(){},attachResizeObserver:function(){return null},forceLayout:function(){},getWidth:function(){return 0},hasClass:function(){return!1},setBufferBarStyle:function(){return null},setPrimaryBarStyle:function(){return null},setStyle:function(){},removeAttribute:function(){},removeClass:function(){},setAttribute:function(){}}},enumerable:!1,configurable:!0}),n.prototype.init=function(){var e=this;this.determinate=!this.adapter.hasClass(h.INDETERMINATE_CLASS),this.adapter.addClass(h.ANIMATION_READY_CLASS),this.progress=0,this.buffer=1,this.observer=this.adapter.attachResizeObserver(function(t){var r,a;if(!e.determinate)try{for(var o=g(t),s=o.next();!s.done;s=o.next()){var d=s.value;d.contentRect&&e.calculateAndSetDimensions(d.contentRect.width)}}catch(u){r={error:u}}finally{try{s&&!s.done&&(a=o.return)&&a.call(o)}finally{if(r)throw r.error}}}),!this.determinate&&this.observer&&this.calculateAndSetDimensions(this.adapter.getWidth())},n.prototype.setDeterminate=function(e){if(this.determinate=e,this.determinate){this.adapter.removeClass(h.INDETERMINATE_CLASS),this.adapter.setAttribute(m.ARIA_VALUENOW,this.progress.toString()),this.adapter.setAttribute(m.ARIA_VALUEMAX,"1"),this.adapter.setAttribute(m.ARIA_VALUEMIN,"0"),this.setPrimaryBarProgress(this.progress),this.setBufferBarProgress(this.buffer);return}this.observer&&this.calculateAndSetDimensions(this.adapter.getWidth()),this.adapter.addClass(h.INDETERMINATE_CLASS),this.adapter.removeAttribute(m.ARIA_VALUENOW),this.adapter.removeAttribute(m.ARIA_VALUEMAX),this.adapter.removeAttribute(m.ARIA_VALUEMIN),this.setPrimaryBarProgress(1),this.setBufferBarProgress(1)},n.prototype.isDeterminate=function(){return this.determinate},n.prototype.setProgress=function(e){this.progress=e,this.determinate&&(this.setPrimaryBarProgress(e),this.adapter.setAttribute(m.ARIA_VALUENOW,e.toString()))},n.prototype.getProgress=function(){return this.progress},n.prototype.setBuffer=function(e){this.buffer=e,this.determinate&&this.setBufferBarProgress(e)},n.prototype.getBuffer=function(){return this.buffer},n.prototype.open=function(){this.adapter.removeClass(h.CLOSED_CLASS),this.adapter.removeClass(h.CLOSED_ANIMATION_OFF_CLASS),this.adapter.removeAttribute(m.ARIA_HIDDEN)},n.prototype.close=function(){this.adapter.addClass(h.CLOSED_CLASS),this.adapter.setAttribute(m.ARIA_HIDDEN,"true")},n.prototype.isClosed=function(){return this.adapter.hasClass(h.CLOSED_CLASS)},n.prototype.handleTransitionEnd=function(){this.adapter.hasClass(h.CLOSED_CLASS)&&this.adapter.addClass(h.CLOSED_ANIMATION_OFF_CLASS)},n.prototype.destroy=function(){i.prototype.destroy.call(this),this.observer&&this.observer.disconnect()},n.prototype.restartAnimation=function(){this.adapter.removeClass(h.ANIMATION_READY_CLASS),this.adapter.forceLayout(),this.adapter.addClass(h.ANIMATION_READY_CLASS)},n.prototype.setPrimaryBarProgress=function(e){var t="scaleX("+e+")",r=typeof window<"u"?de(window,"transform"):"transform";this.adapter.setPrimaryBarStyle(r,t)},n.prototype.setBufferBarProgress=function(e){var t=e*100+"%";this.adapter.setBufferBarStyle(m.FLEX_BASIS,t)},n.prototype.calculateAndSetDimensions=function(e){var t=e*D.PRIMARY_HALF,r=e*D.PRIMARY_FULL,a=e*D.SECONDARY_QUARTER,o=e*D.SECONDARY_HALF,s=e*D.SECONDARY_FULL;this.adapter.setStyle("--mdc-linear-progress-primary-half",t+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-half-neg",-t+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-full",r+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-full-neg",-r+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-quarter",a+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg",-a+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-half",o+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg",-o+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-full",s+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg",-s+"px"),this.restartAnimation()},n}(N);/**
 * @license
 * Copyright 2017 Google Inc.
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
 */var Ae=function(i){y(n,i);function n(){return i!==null&&i.apply(this,arguments)||this}return n.attachTo=function(e){return new n(e)},Object.defineProperty(n.prototype,"determinate",{set:function(e){this.foundation.setDeterminate(e)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"progress",{set:function(e){this.foundation.setProgress(e)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"buffer",{set:function(e){this.foundation.setBuffer(e)},enumerable:!1,configurable:!0}),n.prototype.open=function(){this.foundation.open()},n.prototype.close=function(){this.foundation.close()},n.prototype.initialSyncWithDOM=function(){var e=this;this.root.addEventListener("transitionend",function(){e.foundation.handleTransitionEnd()})},n.prototype.getDefaultFoundation=function(){var e=this,t={addClass:function(r){e.root.classList.add(r)},forceLayout:function(){e.root.getBoundingClientRect()},setBufferBarStyle:function(r,a){var o=e.root.querySelector(O.strings.BUFFER_BAR_SELECTOR);o&&o.style.setProperty(r,a)},setPrimaryBarStyle:function(r,a){var o=e.root.querySelector(O.strings.PRIMARY_BAR_SELECTOR);o&&o.style.setProperty(r,a)},hasClass:function(r){return e.root.classList.contains(r)},removeAttribute:function(r){e.root.removeAttribute(r)},removeClass:function(r){e.root.classList.remove(r)},setAttribute:function(r,a){e.safeSetAttribute(e.root,r,a)},setStyle:function(r,a){e.root.style.setProperty(r,a)},attachResizeObserver:function(r){var a=window.ResizeObserver;if(a){var o=new a(r);return o.observe(e.root),o}return null},getWidth:function(){return e.root.offsetWidth}};return new O(t)},n}(x);/**
 * @license
 * Copyright 2019 Google Inc.
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
 */var c={CELL:"mdc-data-table__cell",CELL_NUMERIC:"mdc-data-table__cell--numeric",CONTENT:"mdc-data-table__content",HEADER_CELL:"mdc-data-table__header-cell",HEADER_CELL_LABEL:"mdc-data-table__header-cell-label",HEADER_CELL_SORTED:"mdc-data-table__header-cell--sorted",HEADER_CELL_SORTED_DESCENDING:"mdc-data-table__header-cell--sorted-descending",HEADER_CELL_WITH_SORT:"mdc-data-table__header-cell--with-sort",HEADER_CELL_WRAPPER:"mdc-data-table__header-cell-wrapper",HEADER_ROW:"mdc-data-table__header-row",HEADER_ROW_CHECKBOX:"mdc-data-table__header-row-checkbox",IN_PROGRESS:"mdc-data-table--in-progress",LINEAR_PROGRESS:"mdc-data-table__linear-progress",PAGINATION_ROWS_PER_PAGE_LABEL:"mdc-data-table__pagination-rows-per-page-label",PAGINATION_ROWS_PER_PAGE_SELECT:"mdc-data-table__pagination-rows-per-page-select",PROGRESS_INDICATOR:"mdc-data-table__progress-indicator",ROOT:"mdc-data-table",ROW:"mdc-data-table__row",ROW_CHECKBOX:"mdc-data-table__row-checkbox",ROW_SELECTED:"mdc-data-table__row--selected",SORT_ICON_BUTTON:"mdc-data-table__sort-icon-button",SORT_STATUS_LABEL:"mdc-data-table__sort-status-label",TABLE_CONTAINER:"mdc-data-table__table-container"},b={ARIA_SELECTED:"aria-selected",ARIA_SORT:"aria-sort"},H={COLUMN_ID:"data-column-id",ROW_ID:"data-row-id"},p={CONTENT:"."+c.CONTENT,HEADER_CELL:"."+c.HEADER_CELL,HEADER_CELL_WITH_SORT:"."+c.HEADER_CELL_WITH_SORT,HEADER_ROW:"."+c.HEADER_ROW,HEADER_ROW_CHECKBOX:"."+c.HEADER_ROW_CHECKBOX,PROGRESS_INDICATOR:"."+c.PROGRESS_INDICATOR,ROW:"."+c.ROW,ROW_CHECKBOX:"."+c.ROW_CHECKBOX,ROW_SELECTED:"."+c.ROW_SELECTED,SORT_ICON_BUTTON:"."+c.SORT_ICON_BUTTON,SORT_STATUS_LABEL:"."+c.SORT_STATUS_LABEL},Z={SORTED_IN_DESCENDING:"Sorted in descending order",SORTED_IN_ASCENDING:"Sorted in ascending order"},l;(function(i){i.ASCENDING="ascending",i.DESCENDING="descending",i.NONE="none",i.OTHER="other"})(l||(l={}));var _={ROW_CLICK:"MDCDataTable:rowClick",ROW_SELECTION_CHANGED:"MDCDataTable:rowSelectionChanged",SELECTED_ALL:"MDCDataTable:selectedAll",SORTED:"MDCDataTable:sorted",UNSELECTED_ALL:"MDCDataTable:unselectedAll"};/**
 * @license
 * Copyright 2019 Google Inc.
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
 */var me=function(i){y(n,i);function n(e){return i.call(this,E(E({},n.defaultAdapter),e))||this}return Object.defineProperty(n,"defaultAdapter",{get:function(){return{addClass:function(){},addClassAtRowIndex:function(){},getAttributeByHeaderCellIndex:function(){return""},getHeaderCellCount:function(){return 0},getHeaderCellElements:function(){return[]},getRowCount:function(){return 0},getRowElements:function(){return[]},getRowIdAtIndex:function(){return""},getRowIndexByChildElement:function(){return 0},getSelectedRowCount:function(){return 0},getTableContainerHeight:function(){return 0},getTableHeaderHeight:function(){return 0},isCheckboxAtRowIndexChecked:function(){return!1},isHeaderRowCheckboxChecked:function(){return!1},isRowsSelectable:function(){return!1},notifyRowSelectionChanged:function(){},notifySelectedAll:function(){},notifySortAction:function(){},notifyUnselectedAll:function(){},notifyRowClick:function(){},registerHeaderRowCheckbox:function(){},registerRowCheckboxes:function(){},removeClass:function(){},removeClassAtRowIndex:function(){},removeClassNameByHeaderCellIndex:function(){},setAttributeAtRowIndex:function(){},setAttributeByHeaderCellIndex:function(){},setClassNameByHeaderCellIndex:function(){},setHeaderRowCheckboxChecked:function(){},setHeaderRowCheckboxIndeterminate:function(){},setProgressIndicatorStyles:function(){},setRowCheckboxCheckedAtIndex:function(){},setSortStatusLabelByHeaderCellIndex:function(){}}},enumerable:!1,configurable:!0}),n.prototype.layout=function(){this.adapter.isRowsSelectable()&&(this.adapter.registerHeaderRowCheckbox(),this.adapter.registerRowCheckboxes(),this.setHeaderRowCheckboxState())},n.prototype.layoutAsync=function(){return ae(this,void 0,void 0,function(){return ie(this,function(e){switch(e.label){case 0:return this.adapter.isRowsSelectable()?[4,this.adapter.registerHeaderRowCheckbox()]:[3,3];case 1:return e.sent(),[4,this.adapter.registerRowCheckboxes()];case 2:e.sent(),this.setHeaderRowCheckboxState(),e.label=3;case 3:return[2]}})})},n.prototype.getRows=function(){return this.adapter.getRowElements()},n.prototype.getHeaderCells=function(){return this.adapter.getHeaderCellElements()},n.prototype.setSelectedRowIds=function(e){for(var t=0;t<this.adapter.getRowCount();t++){var r=this.adapter.getRowIdAtIndex(t),a=!1;r&&e.indexOf(r)>=0&&(a=!0),this.adapter.setRowCheckboxCheckedAtIndex(t,a),this.selectRowAtIndex(t,a)}this.setHeaderRowCheckboxState()},n.prototype.getRowIds=function(){for(var e=[],t=0;t<this.adapter.getRowCount();t++)e.push(this.adapter.getRowIdAtIndex(t));return e},n.prototype.getSelectedRowIds=function(){for(var e=[],t=0;t<this.adapter.getRowCount();t++)this.adapter.isCheckboxAtRowIndexChecked(t)&&e.push(this.adapter.getRowIdAtIndex(t));return e},n.prototype.handleHeaderRowCheckboxChange=function(){for(var e=this.adapter.isHeaderRowCheckboxChecked(),t=0;t<this.adapter.getRowCount();t++)this.adapter.setRowCheckboxCheckedAtIndex(t,e),this.selectRowAtIndex(t,e);e?this.adapter.notifySelectedAll():this.adapter.notifyUnselectedAll()},n.prototype.handleRowCheckboxChange=function(e){var t=this.adapter.getRowIndexByChildElement(e.target);if(t!==-1){var r=this.adapter.isCheckboxAtRowIndexChecked(t);this.selectRowAtIndex(t,r),this.setHeaderRowCheckboxState();var a=this.adapter.getRowIdAtIndex(t);this.adapter.notifyRowSelectionChanged({rowId:a,rowIndex:t,selected:r})}},n.prototype.handleSortAction=function(e){for(var t=e.columnId,r=e.columnIndex,a=e.headerCell,o=0;o<this.adapter.getHeaderCellCount();o++)o!==r&&(this.adapter.removeClassNameByHeaderCellIndex(o,c.HEADER_CELL_SORTED),this.adapter.removeClassNameByHeaderCellIndex(o,c.HEADER_CELL_SORTED_DESCENDING),this.adapter.setAttributeByHeaderCellIndex(o,b.ARIA_SORT,l.NONE),this.adapter.setSortStatusLabelByHeaderCellIndex(o,l.NONE));this.adapter.setClassNameByHeaderCellIndex(r,c.HEADER_CELL_SORTED);var s=this.adapter.getAttributeByHeaderCellIndex(r,b.ARIA_SORT),d=l.NONE;s===l.ASCENDING?(this.adapter.setClassNameByHeaderCellIndex(r,c.HEADER_CELL_SORTED_DESCENDING),this.adapter.setAttributeByHeaderCellIndex(r,b.ARIA_SORT,l.DESCENDING),d=l.DESCENDING):s===l.DESCENDING?(this.adapter.removeClassNameByHeaderCellIndex(r,c.HEADER_CELL_SORTED_DESCENDING),this.adapter.setAttributeByHeaderCellIndex(r,b.ARIA_SORT,l.ASCENDING),d=l.ASCENDING):(this.adapter.setAttributeByHeaderCellIndex(r,b.ARIA_SORT,l.ASCENDING),d=l.ASCENDING),this.adapter.setSortStatusLabelByHeaderCellIndex(r,d),this.adapter.notifySortAction({columnId:t,columnIndex:r,headerCell:a,sortValue:d})},n.prototype.handleRowClick=function(e){var t=e.rowId,r=e.row,a=e.altKey,o=e.ctrlKey,s=e.metaKey,d=e.shiftKey;this.adapter.notifyRowClick({rowId:t,row:r,altKey:a,ctrlKey:o,metaKey:s,shiftKey:d})},n.prototype.showProgress=function(){var e=this.adapter.getTableHeaderHeight(),t=this.adapter.getTableContainerHeight()-e,r=e;this.adapter.setProgressIndicatorStyles({height:t+"px",top:r+"px"}),this.adapter.addClass(c.IN_PROGRESS)},n.prototype.hideProgress=function(){this.adapter.removeClass(c.IN_PROGRESS)},n.prototype.setHeaderRowCheckboxState=function(){this.adapter.getSelectedRowCount()===0?(this.adapter.setHeaderRowCheckboxChecked(!1),this.adapter.setHeaderRowCheckboxIndeterminate(!1)):this.adapter.getSelectedRowCount()===this.adapter.getRowCount()?(this.adapter.setHeaderRowCheckboxChecked(!0),this.adapter.setHeaderRowCheckboxIndeterminate(!1)):(this.adapter.setHeaderRowCheckboxIndeterminate(!0),this.adapter.setHeaderRowCheckboxChecked(!1))},n.prototype.selectRowAtIndex=function(e,t){t?(this.adapter.addClassAtRowIndex(e,c.ROW_SELECTED),this.adapter.setAttributeAtRowIndex(e,b.ARIA_SELECTED,"true")):(this.adapter.removeClassAtRowIndex(e,c.ROW_SELECTED),this.adapter.setAttributeAtRowIndex(e,b.ARIA_SELECTED,"false"))},n}(N);/**
 * @license
 * Copyright 2019 Google Inc.
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
 */var ge=function(i){y(n,i);function n(){return i!==null&&i.apply(this,arguments)||this}return n.attachTo=function(e){return new n(e)},n.prototype.initialize=function(e){e===void 0&&(e=function(t){return new Ce(t)}),this.checkboxFactory=e},n.prototype.initialSyncWithDOM=function(){var e=this;this.headerRow=this.root.querySelector("."+c.HEADER_ROW),this.handleHeaderRowCheckboxChange=function(){e.foundation.handleHeaderRowCheckboxChange()},this.headerRow.addEventListener("change",this.handleHeaderRowCheckboxChange),this.headerRowClickListener=function(t){e.handleHeaderRowClick(t)},this.headerRow.addEventListener("click",this.headerRowClickListener),this.content=this.root.querySelector("."+c.CONTENT),this.handleContentClick=function(t){var r=k(t.target,p.ROW);r&&e.foundation.handleRowClick({rowId:e.getRowIdByRowElement(r),row:r,altKey:t.altKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,shiftKey:t.shiftKey})},this.content.addEventListener("click",this.handleContentClick),this.handleRowCheckboxChange=function(t){e.foundation.handleRowCheckboxChange(t)},this.content.addEventListener("change",this.handleRowCheckboxChange),this.layout()},n.prototype.layout=function(){this.foundation.layout()},n.prototype.getHeaderCells=function(){return Array.from(this.root.querySelectorAll(p.HEADER_CELL))},n.prototype.getRows=function(){return this.foundation.getRows()},n.prototype.getSelectedRowIds=function(){return this.foundation.getSelectedRowIds()},n.prototype.setSelectedRowIds=function(e){this.foundation.setSelectedRowIds(e)},n.prototype.showProgress=function(){this.getLinearProgress().open(),this.foundation.showProgress()},n.prototype.hideProgress=function(){this.foundation.hideProgress(),this.getLinearProgress().close()},n.prototype.destroy=function(){var e,t;if(this.handleHeaderRowCheckboxChange&&this.headerRow.removeEventListener("change",this.handleHeaderRowCheckboxChange),this.headerRowClickListener&&this.headerRow.removeEventListener("click",this.headerRowClickListener),this.handleRowCheckboxChange&&this.content.removeEventListener("change",this.handleRowCheckboxChange),this.headerRowCheckbox&&this.headerRowCheckbox.destroy(),this.rowCheckboxList)try{for(var r=g(this.rowCheckboxList),a=r.next();!a.done;a=r.next()){var o=a.value;o.destroy()}}catch(s){e={error:s}}finally{try{a&&!a.done&&(t=r.return)&&t.call(r)}finally{if(e)throw e.error}}this.handleContentClick&&this.content.removeEventListener("click",this.handleContentClick)},n.prototype.getDefaultFoundation=function(){var e=this,t={addClass:function(r){e.root.classList.add(r)},removeClass:function(r){e.root.classList.remove(r)},getHeaderCellElements:function(){return e.getHeaderCells()},getHeaderCellCount:function(){return e.getHeaderCells().length},getAttributeByHeaderCellIndex:function(r,a){return e.getHeaderCells()[r].getAttribute(a)},setAttributeByHeaderCellIndex:function(r,a,o){e.safeSetAttribute(e.getHeaderCells()[r],a,o)},setClassNameByHeaderCellIndex:function(r,a){e.getHeaderCells()[r].classList.add(a)},removeClassNameByHeaderCellIndex:function(r,a){e.getHeaderCells()[r].classList.remove(a)},notifySortAction:function(r){e.emit(_.SORTED,r,!0)},getTableContainerHeight:function(){var r=e.root.querySelector("."+c.TABLE_CONTAINER);if(!r)throw new Error("MDCDataTable: Table container element not found.");return r.getBoundingClientRect().height},getTableHeaderHeight:function(){var r=e.root.querySelector(p.HEADER_ROW);if(!r)throw new Error("MDCDataTable: Table header element not found.");return r.getBoundingClientRect().height},setProgressIndicatorStyles:function(r){var a=e.root.querySelector(p.PROGRESS_INDICATOR);if(!a)throw new Error("MDCDataTable: Progress indicator element not found.");a.style.setProperty("height",r.height),a.style.setProperty("top",r.top)},addClassAtRowIndex:function(r,a){e.getRows()[r].classList.add(a)},getRowCount:function(){return e.getRows().length},getRowElements:function(){return Array.from(e.root.querySelectorAll(p.ROW))},getRowIdAtIndex:function(r){return e.getRows()[r].getAttribute(H.ROW_ID)},getRowIndexByChildElement:function(r){return e.getRows().indexOf(k(r,p.ROW))},getSelectedRowCount:function(){return e.root.querySelectorAll(p.ROW_SELECTED).length},isCheckboxAtRowIndexChecked:function(r){return e.rowCheckboxList[r].checked},isHeaderRowCheckboxChecked:function(){return e.headerRowCheckbox.checked},isRowsSelectable:function(){return!!e.root.querySelector(p.ROW_CHECKBOX)||!!e.root.querySelector(p.HEADER_ROW_CHECKBOX)},notifyRowSelectionChanged:function(r){e.emit(_.ROW_SELECTION_CHANGED,{row:e.getRowByIndex(r.rowIndex),rowId:e.getRowIdByIndex(r.rowIndex),rowIndex:r.rowIndex,selected:r.selected},!0)},notifySelectedAll:function(){e.emit(_.SELECTED_ALL,{},!0)},notifyUnselectedAll:function(){e.emit(_.UNSELECTED_ALL,{},!0)},notifyRowClick:function(r){e.emit(_.ROW_CLICK,r,!0)},registerHeaderRowCheckbox:function(){e.headerRowCheckbox&&e.headerRowCheckbox.destroy();var r=e.root.querySelector(p.HEADER_ROW_CHECKBOX);e.headerRowCheckbox=e.checkboxFactory(r)},registerRowCheckboxes:function(){e.rowCheckboxList&&e.rowCheckboxList.forEach(function(r){r.destroy()}),e.rowCheckboxList=[],e.getRows().forEach(function(r){var a=e.checkboxFactory(r.querySelector(p.ROW_CHECKBOX));e.rowCheckboxList.push(a)})},removeClassAtRowIndex:function(r,a){e.getRows()[r].classList.remove(a)},setAttributeAtRowIndex:function(r,a,o){e.safeSetAttribute(e.getRows()[r],a,o)},setHeaderRowCheckboxChecked:function(r){e.headerRowCheckbox.checked=r},setHeaderRowCheckboxIndeterminate:function(r){e.headerRowCheckbox.indeterminate=r},setRowCheckboxCheckedAtIndex:function(r,a){e.rowCheckboxList[r].checked=a},setSortStatusLabelByHeaderCellIndex:function(r,a){var o=e.getHeaderCells()[r],s=o.querySelector(p.SORT_STATUS_LABEL);s&&(s.textContent=e.getSortStatusMessageBySortValue(a))}};return new me(t)},n.prototype.getRowByIndex=function(e){return this.getRows()[e]},n.prototype.getRowIdByIndex=function(e){return this.getRowByIndex(e).getAttribute(H.ROW_ID)},n.prototype.handleHeaderRowClick=function(e){var t=k(e.target,p.HEADER_CELL_WITH_SORT);if(t){var r=t.getAttribute(H.COLUMN_ID),a=this.getHeaderCells().indexOf(t);a!==-1&&this.foundation.handleSortAction({columnId:r,columnIndex:a,headerCell:t})}},n.prototype.getSortStatusMessageBySortValue=function(e){switch(e){case l.ASCENDING:return Z.SORTED_IN_ASCENDING;case l.DESCENDING:return Z.SORTED_IN_DESCENDING;default:return""}},n.prototype.getLinearProgressElement=function(){var e=this.root.querySelector("."+c.LINEAR_PROGRESS);if(!e)throw new Error("MDCDataTable: linear progress element is not found.");return e},n.prototype.getLinearProgress=function(){if(!this.linearProgress){var e=this.getLinearProgressElement();this.linearProgress=new Ae(e)}return this.linearProgress},n.prototype.getRowIdByRowElement=function(e){return e.getAttribute(H.ROW_ID)},n}(x);export{ge as M,_ as e};
