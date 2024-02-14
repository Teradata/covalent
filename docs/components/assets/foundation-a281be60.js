import{a as F,b as g,c as I,f as T,d as dt,e as ct}from"./tslib.es6-4b90b051.js";import{s as nt,a as N}from"./index-ec0f687a.js";/**
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
 */var ft=function(){function n(){this.rafIDs=new Map}return n.prototype.request=function(i,t){var e=this;this.cancel(i);var r=requestAnimationFrame(function(a){e.rafIDs.delete(i),t(a)});this.rafIDs.set(i,r)},n.prototype.cancel=function(i){var t=this.rafIDs.get(i);t&&(cancelAnimationFrame(t),this.rafIDs.delete(i))},n.prototype.cancelAll=function(){var i=this;this.rafIDs.forEach(function(t,e){i.cancel(e)})},n.prototype.getQueue=function(){var i=[];return this.rafIDs.forEach(function(t,e){i.push(e)}),i},n}();/**
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
 */var _=function(){function n(i){i===void 0&&(i={}),this.adapter=i}return Object.defineProperty(n,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(n,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(n,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),n.prototype.init=function(){},n.prototype.destroy=function(){},n}();/**
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
 */var u={UNKNOWN:"Unknown",BACKSPACE:"Backspace",ENTER:"Enter",SPACEBAR:"Spacebar",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",END:"End",HOME:"Home",ARROW_LEFT:"ArrowLeft",ARROW_UP:"ArrowUp",ARROW_RIGHT:"ArrowRight",ARROW_DOWN:"ArrowDown",DELETE:"Delete",ESCAPE:"Escape",TAB:"Tab"},v=new Set;v.add(u.BACKSPACE);v.add(u.ENTER);v.add(u.SPACEBAR);v.add(u.PAGE_UP);v.add(u.PAGE_DOWN);v.add(u.END);v.add(u.HOME);v.add(u.ARROW_LEFT);v.add(u.ARROW_UP);v.add(u.ARROW_RIGHT);v.add(u.ARROW_DOWN);v.add(u.DELETE);v.add(u.ESCAPE);v.add(u.TAB);var m={BACKSPACE:8,ENTER:13,SPACEBAR:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ESCAPE:27,TAB:9},A=new Map;A.set(m.BACKSPACE,u.BACKSPACE);A.set(m.ENTER,u.ENTER);A.set(m.SPACEBAR,u.SPACEBAR);A.set(m.PAGE_UP,u.PAGE_UP);A.set(m.PAGE_DOWN,u.PAGE_DOWN);A.set(m.END,u.END);A.set(m.HOME,u.HOME);A.set(m.ARROW_LEFT,u.ARROW_LEFT);A.set(m.ARROW_UP,u.ARROW_UP);A.set(m.ARROW_RIGHT,u.ARROW_RIGHT);A.set(m.ARROW_DOWN,u.ARROW_DOWN);A.set(m.DELETE,u.DELETE);A.set(m.ESCAPE,u.ESCAPE);A.set(m.TAB,u.TAB);var S=new Set;S.add(u.PAGE_UP);S.add(u.PAGE_DOWN);S.add(u.END);S.add(u.HOME);S.add(u.ARROW_LEFT);S.add(u.ARROW_UP);S.add(u.ARROW_RIGHT);S.add(u.ARROW_DOWN);function rt(n){var i=n.key;if(v.has(i))return i;var t=A.get(n.keyCode);return t||u.UNKNOWN}function pt(n){return S.has(rt(n))}/**
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
 */var U;(function(n){n.PRIMARY_ACTION="mdc-evolution-chip__action--primary",n.TRAILING_ACTION="mdc-evolution-chip__action--trailing",n.CHIP_ROOT="mdc-evolution-chip"})(U||(U={}));var D;(function(n){n[n.UNSPECIFIED=0]="UNSPECIFIED",n[n.CLICK=1]="CLICK",n[n.BACKSPACE_KEY=2]="BACKSPACE_KEY",n[n.DELETE_KEY=3]="DELETE_KEY",n[n.SPACEBAR_KEY=4]="SPACEBAR_KEY",n[n.ENTER_KEY=5]="ENTER_KEY"})(D||(D={}));var E;(function(n){n[n.UNSPECIFIED=0]="UNSPECIFIED",n[n.PRIMARY=1]="PRIMARY",n[n.TRAILING=2]="TRAILING"})(E||(E={}));var W;(function(n){n.INTERACTION="MDCChipAction:interaction",n.NAVIGATION="MDCChipAction:navigation"})(W||(W={}));var C;(function(n){n[n.FOCUSABLE=0]="FOCUSABLE",n[n.FOCUSABLE_AND_FOCUSED=1]="FOCUSABLE_AND_FOCUSED",n[n.NOT_FOCUSABLE=2]="NOT_FOCUSABLE"})(C||(C={}));var h;(function(n){n.ARIA_DISABLED="aria-disabled",n.ARIA_HIDDEN="aria-hidden",n.ARIA_SELECTED="aria-selected",n.DATA_DELETABLE="data-mdc-deletable",n.DISABLED="disabled",n.ROLE="role",n.TAB_INDEX="tabindex"})(h||(h={}));/**
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
 */var p;(function(n){n.SELECTING="mdc-evolution-chip--selecting",n.DESELECTING="mdc-evolution-chip--deselecting",n.SELECTING_WITH_PRIMARY_ICON="mdc-evolution-chip--selecting-with-primary-icon",n.DESELECTING_WITH_PRIMARY_ICON="mdc-evolution-chip--deselecting-with-primary-icon",n.DISABLED="mdc-evolution-chip--disabled",n.ENTER="mdc-evolution-chip--enter",n.EXIT="mdc-evolution-chip--exit",n.SELECTED="mdc-evolution-chip--selected",n.HIDDEN="mdc-evolution-chip--hidden",n.WITH_PRIMARY_ICON="mdc-evolution-chip--with-primary-icon"})(p||(p={}));var w;(function(n){n.INTERACTION="MDCChip:interaction",n.NAVIGATION="MDCChip:navigation",n.ANIMATION="MDCChip:animation"})(w||(w={}));var K;(function(n){n.DATA_REMOVED_ANNOUNCEMENT="data-mdc-removed-announcement",n.DATA_ADDED_ANNOUNCEMENT="data-mdc-added-announcement"})(K||(K={}));var y;(function(n){n.ENTER="mdc-evolution-chip-enter",n.EXIT="mdc-evolution-chip-exit"})(y||(y={}));/**
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
 */var O;(function(n){n[n.UNSPECIFIED=0]="UNSPECIFIED",n[n.LEFT=1]="LEFT",n[n.RIGHT=2]="RIGHT"})(O||(O={}));var R;(function(n){n.SELECTION="selection",n.EXIT="exit"})(R||(R={}));var Ft=function(n){F(i,n);function i(t){var e=n.call(this,g(g({},i.defaultAdapter),t))||this;return e.animFrame=new ft,e}return Object.defineProperty(i,"defaultAdapter",{get:function(){return{addClass:function(){},emitEvent:function(){},getActions:function(){return[]},getAttribute:function(){return null},getElementID:function(){return""},getOffsetWidth:function(){return 0},hasClass:function(){return!1},isActionDisabled:function(){return!1},isActionFocusable:function(){return!1},isActionSelectable:function(){return!1},isActionSelected:function(){return!1},isRTL:function(){return!1},removeClass:function(){},setActionDisabled:function(){},setActionFocus:function(){},setActionSelected:function(){},setStyleProperty:function(){}}},enumerable:!1,configurable:!0}),i.prototype.destroy=function(){this.animFrame.cancelAll()},i.prototype.getElementID=function(){return this.adapter.getElementID()},i.prototype.setDisabled=function(t){var e,r,a=this.getActions();try{for(var o=I(a),s=o.next();!s.done;s=o.next()){var d=s.value;this.adapter.setActionDisabled(d,t)}}catch(c){e={error:c}}finally{try{s&&!s.done&&(r=o.return)&&r.call(o)}finally{if(e)throw e.error}}t?this.adapter.addClass(p.DISABLED):this.adapter.removeClass(p.DISABLED)},i.prototype.isDisabled=function(){var t,e,r=this.getActions();try{for(var a=I(r),o=a.next();!o.done;o=a.next()){var s=o.value;if(this.adapter.isActionDisabled(s))return!0}}catch(d){t={error:d}}finally{try{o&&!o.done&&(e=a.return)&&e.call(a)}finally{if(t)throw t.error}}return!1},i.prototype.getActions=function(){return this.adapter.getActions()},i.prototype.isActionFocusable=function(t){return this.adapter.isActionFocusable(t)},i.prototype.isActionSelectable=function(t){return this.adapter.isActionSelectable(t)},i.prototype.isActionSelected=function(t){return this.adapter.isActionSelected(t)},i.prototype.setActionFocus=function(t,e){this.adapter.setActionFocus(t,e)},i.prototype.setActionSelected=function(t,e){this.adapter.setActionSelected(t,e),this.animateSelection(e)},i.prototype.startAnimation=function(t){if(t===y.ENTER){this.adapter.addClass(p.ENTER);return}if(t===y.EXIT){this.adapter.addClass(p.EXIT);return}},i.prototype.handleAnimationEnd=function(t){var e=this,r=t.animationName;if(r===y.ENTER){this.adapter.removeClass(p.ENTER),this.adapter.emitEvent(w.ANIMATION,{chipID:this.getElementID(),animation:y.ENTER,addedAnnouncement:this.getAddedAnnouncement(),isComplete:!0});return}if(r===y.EXIT){this.adapter.removeClass(p.EXIT),this.adapter.addClass(p.HIDDEN);var a=this.adapter.getOffsetWidth();this.adapter.setStyleProperty("width",a+"px"),this.animFrame.request(R.EXIT,function(){e.animFrame.request(R.EXIT,function(){e.adapter.setStyleProperty("width","0")})})}},i.prototype.handleTransitionEnd=function(){this.adapter.hasClass(p.HIDDEN)&&this.adapter.emitEvent(w.ANIMATION,{chipID:this.getElementID(),animation:y.EXIT,removedAnnouncement:this.getRemovedAnnouncement(),isComplete:!0})},i.prototype.handleActionInteraction=function(t){var e=t.detail,r=e.source,a=e.actionID,o=this.adapter.isActionSelectable(r),s=this.adapter.isActionSelected(r);this.adapter.emitEvent(w.INTERACTION,{chipID:this.getElementID(),shouldRemove:this.shouldRemove(e),actionID:a,isSelectable:o,isSelected:s,source:r})},i.prototype.handleActionNavigation=function(t){var e=t.detail,r=e.source,a=e.key,o=this.adapter.isRTL(),s=this.adapter.isActionFocusable(E.TRAILING),d=this.adapter.isActionFocusable(E.PRIMARY),c=this.directionFromKey(a,o),f=r===E.PRIMARY&&c===O.RIGHT&&s,l=r===E.TRAILING&&c===O.LEFT&&d;if(f){this.navigateActions({from:r,to:E.TRAILING});return}if(l){this.navigateActions({from:r,to:E.PRIMARY});return}this.adapter.emitEvent(w.NAVIGATION,{chipID:this.getElementID(),isRTL:o,source:r,key:a})},i.prototype.directionFromKey=function(t,e){var r=t===u.ARROW_LEFT,a=t===u.ARROW_RIGHT;return!e&&r||e&&a?O.LEFT:!e&&a||e&&r?O.RIGHT:O.UNSPECIFIED},i.prototype.navigateActions=function(t){this.adapter.setActionFocus(t.from,C.NOT_FOCUSABLE),this.adapter.setActionFocus(t.to,C.FOCUSABLE_AND_FOCUSED)},i.prototype.shouldRemove=function(t){var e=t.source,r=t.trigger;return r===D.BACKSPACE_KEY||r===D.DELETE_KEY?!0:e===E.TRAILING},i.prototype.getRemovedAnnouncement=function(){var t=this.adapter.getAttribute(K.DATA_REMOVED_ANNOUNCEMENT);return t||void 0},i.prototype.getAddedAnnouncement=function(){var t=this.adapter.getAttribute(K.DATA_ADDED_ANNOUNCEMENT);return t||void 0},i.prototype.animateSelection=function(t){var e=this;this.resetAnimationStyles(),this.animFrame.request(R.SELECTION,function(){e.animFrame.request(R.SELECTION,function(){e.updateSelectionStyles(t)})})},i.prototype.resetAnimationStyles=function(){this.adapter.removeClass(p.SELECTING),this.adapter.removeClass(p.DESELECTING),this.adapter.removeClass(p.SELECTING_WITH_PRIMARY_ICON),this.adapter.removeClass(p.DESELECTING_WITH_PRIMARY_ICON)},i.prototype.updateSelectionStyles=function(t){var e=this,r=this.adapter.hasClass(p.WITH_PRIMARY_ICON);if(r&&t){this.adapter.addClass(p.SELECTING_WITH_PRIMARY_ICON),this.animFrame.request(R.SELECTION,function(){e.adapter.addClass(p.SELECTED)});return}if(r&&!t){this.adapter.addClass(p.DESELECTING_WITH_PRIMARY_ICON),this.animFrame.request(R.SELECTION,function(){e.adapter.removeClass(p.SELECTED)});return}if(t){this.adapter.addClass(p.SELECTING),this.animFrame.request(R.SELECTION,function(){e.adapter.addClass(p.SELECTED)});return}if(!t){this.adapter.addClass(p.DESELECTING),this.animFrame.request(R.SELECTION,function(){e.adapter.removeClass(p.SELECTED)});return}},i}(_);/**
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
 */function lt(n){return String(n).replace(/\-([a-z])/g,function(i,t){return t.toUpperCase()})}var at=function(){function n(i,t){for(var e=[],r=2;r<arguments.length;r++)e[r-2]=arguments[r];this.root=i,this.initialize.apply(this,dt([],ct(e))),this.foundation=t===void 0?this.getDefaultFoundation():t,this.foundation.init(),this.initialSyncWithDOM()}return n.attachTo=function(i){return new n(i,new _({}))},n.prototype.initialize=function(){},n.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},n.prototype.initialSyncWithDOM=function(){},n.prototype.destroy=function(){this.foundation.destroy()},n.prototype.listen=function(i,t,e){this.root.addEventListener(i,t,e)},n.prototype.unlisten=function(i,t,e){this.root.removeEventListener(i,t,e)},n.prototype.emit=function(i,t,e){e===void 0&&(e=!1);var r;typeof CustomEvent=="function"?r=new CustomEvent(i,{bubbles:e,detail:t}):(r=document.createEvent("CustomEvent"),r.initCustomEvent(i,e,!1,t)),this.root.dispatchEvent(r)},n.prototype.safeSetAttribute=function(i,t,e){if(t.toLowerCase()==="tabindex")i.tabIndex=Number(e);else if(t.indexOf("data-")===0){var r=lt(t.replace(/^data-/,""));i.dataset[r]=e}else nt([N.safeAttrPrefix(X||(X=T(["aria-"],["aria-"]))),N.safeAttrPrefix(q||(q=T(["role"],["role"])))],i,t,e)},n}(),X,q;/**
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
 */function ht(n,i){if(n.closest)return n.closest(i);for(var t=n;t;){if(ot(t,i))return t;t=t.parentElement}return null}function ot(n,i){var t=n.matches||n.webkitMatchesSelector||n.msMatchesSelector;return t.call(n,i)}/**
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
 */function B(n){return n===void 0&&(n=window),vt(n)?{passive:!0}:!1}function vt(n){n===void 0&&(n=window);var i=!1;try{var t={get passive(){return i=!0,!1}},e=function(){};n.document.addEventListener("test",e,t),n.document.removeEventListener("test",e,t)}catch{i=!1}return i}/**
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
 */var At={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},mt={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},j={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300},M;function Et(n,i){i===void 0&&(i=!1);var t=n.CSS,e=M;if(typeof M=="boolean"&&!i)return M;var r=t&&typeof t.supports=="function";if(!r)return!1;var a=t.supports("--css-vars","yes"),o=t.supports("(--css-vars: yes)")&&t.supports("color","#00000000");return e=a||o,i||(M=e),e}function yt(n,i,t){if(!n)return{x:0,y:0};var e=i.x,r=i.y,a=e+t.left,o=r+t.top,s,d;if(n.type==="touchstart"){var c=n;s=c.changedTouches[0].pageX-a,d=c.changedTouches[0].pageY-o}else{var f=n;s=f.pageX-a,d=f.pageY-o}return{x:s,y:d}}/**
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
 */var V=["touchstart","pointerdown","mousedown","keydown"],Y=["touchend","pointerup","mouseup","contextmenu"],G=[],st=function(n){F(i,n);function i(t){var e=n.call(this,g(g({},i.defaultAdapter),t))||this;return e.activationAnimationHasEnded=!1,e.activationTimer=0,e.fgDeactivationRemovalTimer=0,e.fgScale="0",e.frame={width:0,height:0},e.initialSize=0,e.layoutFrame=0,e.maxRadius=0,e.unboundedCoords={left:0,top:0},e.activationState=e.defaultActivationState(),e.activationTimerCallback=function(){e.activationAnimationHasEnded=!0,e.runDeactivationUXLogicIfReady()},e.activateHandler=function(r){e.activateImpl(r)},e.deactivateHandler=function(){e.deactivateImpl()},e.focusHandler=function(){e.handleFocus()},e.blurHandler=function(){e.handleBlur()},e.resizeHandler=function(){e.layout()},e}return Object.defineProperty(i,"cssClasses",{get:function(){return At},enumerable:!1,configurable:!0}),Object.defineProperty(i,"strings",{get:function(){return mt},enumerable:!1,configurable:!0}),Object.defineProperty(i,"numbers",{get:function(){return j},enumerable:!1,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),i.prototype.init=function(){var t=this,e=this.supportsPressRipple();if(this.registerRootHandlers(e),e){var r=i.cssClasses,a=r.ROOT,o=r.UNBOUNDED;requestAnimationFrame(function(){t.adapter.addClass(a),t.adapter.isUnbounded()&&(t.adapter.addClass(o),t.layoutInternal())})}},i.prototype.destroy=function(){var t=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(i.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(i.cssClasses.FG_DEACTIVATION));var e=i.cssClasses,r=e.ROOT,a=e.UNBOUNDED;requestAnimationFrame(function(){t.adapter.removeClass(r),t.adapter.removeClass(a),t.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},i.prototype.activate=function(t){this.activateImpl(t)},i.prototype.deactivate=function(){this.deactivateImpl()},i.prototype.layout=function(){var t=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){t.layoutInternal(),t.layoutFrame=0})},i.prototype.setUnbounded=function(t){var e=i.cssClasses.UNBOUNDED;t?this.adapter.addClass(e):this.adapter.removeClass(e)},i.prototype.handleFocus=function(){var t=this;requestAnimationFrame(function(){t.adapter.addClass(i.cssClasses.BG_FOCUSED)})},i.prototype.handleBlur=function(){var t=this;requestAnimationFrame(function(){t.adapter.removeClass(i.cssClasses.BG_FOCUSED)})},i.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},i.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},i.prototype.registerRootHandlers=function(t){var e,r;if(t){try{for(var a=I(V),o=a.next();!o.done;o=a.next()){var s=o.value;this.adapter.registerInteractionHandler(s,this.activateHandler)}}catch(d){e={error:d}}finally{try{o&&!o.done&&(r=a.return)&&r.call(a)}finally{if(e)throw e.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},i.prototype.registerDeactivationHandlers=function(t){var e,r;if(t.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var a=I(Y),o=a.next();!o.done;o=a.next()){var s=o.value;this.adapter.registerDocumentInteractionHandler(s,this.deactivateHandler)}}catch(d){e={error:d}}finally{try{o&&!o.done&&(r=a.return)&&r.call(a)}finally{if(e)throw e.error}}},i.prototype.deregisterRootHandlers=function(){var t,e;try{for(var r=I(V),a=r.next();!a.done;a=r.next()){var o=a.value;this.adapter.deregisterInteractionHandler(o,this.activateHandler)}}catch(s){t={error:s}}finally{try{a&&!a.done&&(e=r.return)&&e.call(r)}finally{if(t)throw t.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},i.prototype.deregisterDeactivationHandlers=function(){var t,e;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var r=I(Y),a=r.next();!a.done;a=r.next()){var o=a.value;this.adapter.deregisterDocumentInteractionHandler(o,this.deactivateHandler)}}catch(s){t={error:s}}finally{try{a&&!a.done&&(e=r.return)&&e.call(r)}finally{if(t)throw t.error}}},i.prototype.removeCssVars=function(){var t=this,e=i.strings,r=Object.keys(e);r.forEach(function(a){a.indexOf("VAR_")===0&&t.adapter.updateCssVariable(e[a],null)})},i.prototype.activateImpl=function(t){var e=this;if(!this.adapter.isSurfaceDisabled()){var r=this.activationState;if(!r.isActivated){var a=this.previousActivationEvent,o=a&&t!==void 0&&a.type!==t.type;if(!o){r.isActivated=!0,r.isProgrammatic=t===void 0,r.activationEvent=t,r.wasActivatedByPointer=r.isProgrammatic?!1:t!==void 0&&(t.type==="mousedown"||t.type==="touchstart"||t.type==="pointerdown");var s=t!==void 0&&G.length>0&&G.some(function(d){return e.adapter.containsEventTarget(d)});if(s){this.resetActivationState();return}t!==void 0&&(G.push(t.target),this.registerDeactivationHandlers(t)),r.wasElementMadeActive=this.checkElementMadeActive(t),r.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){G=[],!r.wasElementMadeActive&&t!==void 0&&(t.key===" "||t.keyCode===32)&&(r.wasElementMadeActive=e.checkElementMadeActive(t),r.wasElementMadeActive&&e.animateActivation()),r.wasElementMadeActive||(e.activationState=e.defaultActivationState())})}}}},i.prototype.checkElementMadeActive=function(t){return t!==void 0&&t.type==="keydown"?this.adapter.isSurfaceActive():!0},i.prototype.animateActivation=function(){var t=this,e=i.strings,r=e.VAR_FG_TRANSLATE_START,a=e.VAR_FG_TRANSLATE_END,o=i.cssClasses,s=o.FG_DEACTIVATION,d=o.FG_ACTIVATION,c=i.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var f="",l="";if(!this.adapter.isUnbounded()){var b=this.getFgTranslationCoordinates(),P=b.startPoint,k=b.endPoint;f=P.x+"px, "+P.y+"px",l=k.x+"px, "+k.y+"px"}this.adapter.updateCssVariable(r,f),this.adapter.updateCssVariable(a,l),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(s),this.adapter.computeBoundingRect(),this.adapter.addClass(d),this.activationTimer=setTimeout(function(){t.activationTimerCallback()},c)},i.prototype.getFgTranslationCoordinates=function(){var t=this.activationState,e=t.activationEvent,r=t.wasActivatedByPointer,a;r?a=yt(e,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):a={x:this.frame.width/2,y:this.frame.height/2},a={x:a.x-this.initialSize/2,y:a.y-this.initialSize/2};var o={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:a,endPoint:o}},i.prototype.runDeactivationUXLogicIfReady=function(){var t=this,e=i.cssClasses.FG_DEACTIVATION,r=this.activationState,a=r.hasDeactivationUXRun,o=r.isActivated,s=a||!o;s&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(e),this.fgDeactivationRemovalTimer=setTimeout(function(){t.adapter.removeClass(e)},j.FG_DEACTIVATION_MS))},i.prototype.rmBoundedActivationClasses=function(){var t=i.cssClasses.FG_ACTIVATION;this.adapter.removeClass(t),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},i.prototype.resetActivationState=function(){var t=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return t.previousActivationEvent=void 0},i.numbers.TAP_DELAY_MS)},i.prototype.deactivateImpl=function(){var t=this,e=this.activationState;if(e.isActivated){var r=g({},e);e.isProgrammatic?(requestAnimationFrame(function(){t.animateDeactivation(r)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){t.activationState.hasDeactivationUXRun=!0,t.animateDeactivation(r),t.resetActivationState()}))}},i.prototype.animateDeactivation=function(t){var e=t.wasActivatedByPointer,r=t.wasElementMadeActive;(e||r)&&this.runDeactivationUXLogicIfReady()},i.prototype.layoutInternal=function(){var t=this;this.frame=this.adapter.computeBoundingRect();var e=Math.max(this.frame.height,this.frame.width),r=function(){var o=Math.sqrt(Math.pow(t.frame.width,2)+Math.pow(t.frame.height,2));return o+i.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?e:r();var a=Math.floor(e*i.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&a%2!==0?this.initialSize=a-1:this.initialSize=a,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},i.prototype.updateLayoutCssVars=function(){var t=i.strings,e=t.VAR_FG_SIZE,r=t.VAR_LEFT,a=t.VAR_TOP,o=t.VAR_FG_SCALE;this.adapter.updateCssVariable(e,this.initialSize+"px"),this.adapter.updateCssVariable(o,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(r,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(a,this.unboundedCoords.top+"px"))},i}(_);/**
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
 */var Z=function(n){F(i,n);function i(){var t=n!==null&&n.apply(this,arguments)||this;return t.disabled=!1,t}return i.attachTo=function(t,e){e===void 0&&(e={isUnbounded:void 0});var r=new i(t);return e.isUnbounded!==void 0&&(r.unbounded=e.isUnbounded),r},i.createAdapter=function(t){return{addClass:function(e){t.root.classList.add(e)},browserSupportsCssVars:function(){return Et(window)},computeBoundingRect:function(){return t.root.getBoundingClientRect()},containsEventTarget:function(e){return t.root.contains(e)},deregisterDocumentInteractionHandler:function(e,r){document.documentElement.removeEventListener(e,r,B())},deregisterInteractionHandler:function(e,r){t.root.removeEventListener(e,r,B())},deregisterResizeHandler:function(e){window.removeEventListener("resize",e)},getWindowPageOffset:function(){return{x:window.pageXOffset,y:window.pageYOffset}},isSurfaceActive:function(){return ot(t.root,":active")},isSurfaceDisabled:function(){return!!t.disabled},isUnbounded:function(){return!!t.unbounded},registerDocumentInteractionHandler:function(e,r){document.documentElement.addEventListener(e,r,B())},registerInteractionHandler:function(e,r){t.root.addEventListener(e,r,B())},registerResizeHandler:function(e){window.addEventListener("resize",e)},removeClass:function(e){t.root.classList.remove(e)},updateCssVariable:function(e,r){t.root.style.setProperty(e,r)}}},Object.defineProperty(i.prototype,"unbounded",{get:function(){return!!this.isUnbounded},set:function(t){this.isUnbounded=!!t,this.setUnbounded()},enumerable:!1,configurable:!0}),i.prototype.activate=function(){this.foundation.activate()},i.prototype.deactivate=function(){this.foundation.deactivate()},i.prototype.layout=function(){this.foundation.layout()},i.prototype.getDefaultFoundation=function(){return new st(i.createAdapter(this))},i.prototype.initialSyncWithDOM=function(){var t=this.root;this.isUnbounded="mdcRippleIsUnbounded"in t.dataset},i.prototype.setUnbounded=function(){this.foundation.setUnbounded(!!this.isUnbounded)},i}(at);/**
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
 */function Ct(n,i){var t=Number(i.replace("px",""));return Number.isNaN(t)?n:{width:n.width+t,height:n.height,top:n.top,right:n.right,bottom:n.bottom,left:n.left}}var It="--mdc-chip-graphic-selected-width";/**
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
 */var H=new Map;H.set(u.SPACEBAR,D.SPACEBAR_KEY);H.set(u.ENTER,D.ENTER_KEY);H.set(u.DELETE,D.DELETE_KEY);H.set(u.BACKSPACE,D.BACKSPACE_KEY);var ut=function(n){F(i,n);function i(t){return n.call(this,g(g({},i.defaultAdapter),t))||this}return Object.defineProperty(i,"defaultAdapter",{get:function(){return{emitEvent:function(){},focus:function(){},getAttribute:function(){return null},getElementID:function(){return""},removeAttribute:function(){},setAttribute:function(){}}},enumerable:!1,configurable:!0}),i.prototype.handleClick=function(){this.isDisabled()||this.emitInteraction(D.CLICK)},i.prototype.handleKeydown=function(t){var e=rt(t);if(this.shouldNotifyInteractionFromKey(e)){t.preventDefault(),this.emitInteraction(this.getTriggerFromKey(e));return}if(pt(t)){t.preventDefault(),this.emitNavigation(e);return}return!0},i.prototype.setDisabled=function(t){if(this.isSelectable()){this.adapter.setAttribute(h.ARIA_DISABLED,""+t);return}t?this.adapter.setAttribute(h.DISABLED,"true"):this.adapter.removeAttribute(h.DISABLED)},i.prototype.isDisabled=function(){return this.adapter.getAttribute(h.ARIA_DISABLED)==="true"||this.adapter.getAttribute(h.DISABLED)!==null},i.prototype.setFocus=function(t){if(this.isFocusable()){if(t===C.FOCUSABLE_AND_FOCUSED){this.adapter.setAttribute(h.TAB_INDEX,"0"),this.adapter.focus();return}if(t===C.FOCUSABLE){this.adapter.setAttribute(h.TAB_INDEX,"0");return}if(t===C.NOT_FOCUSABLE){this.adapter.setAttribute(h.TAB_INDEX,"-1");return}}},i.prototype.isFocusable=function(){return!(this.isDisabled()||this.adapter.getAttribute(h.ARIA_HIDDEN)==="true")},i.prototype.setSelected=function(t){this.isSelectable()&&this.adapter.setAttribute(h.ARIA_SELECTED,""+t)},i.prototype.isSelected=function(){return this.adapter.getAttribute(h.ARIA_SELECTED)==="true"},i.prototype.emitInteraction=function(t){this.adapter.emitEvent(W.INTERACTION,{actionID:this.adapter.getElementID(),source:this.actionType(),trigger:t})},i.prototype.emitNavigation=function(t){this.adapter.emitEvent(W.NAVIGATION,{source:this.actionType(),key:t})},i.prototype.shouldNotifyInteractionFromKey=function(t){var e=t===u.ENTER||t===u.SPACEBAR,r=t===u.BACKSPACE||t===u.DELETE;return!!(e||r&&this.shouldEmitInteractionOnRemoveKey())},i.prototype.getTriggerFromKey=function(t){var e=H.get(t);return e||D.UNSPECIFIED},i}(_);/**
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
 */var gt=function(n){F(i,n);function i(){return n!==null&&n.apply(this,arguments)||this}return i.prototype.isSelectable=function(){return this.adapter.getAttribute(h.ROLE)==="option"},i.prototype.actionType=function(){return E.PRIMARY},i.prototype.shouldEmitInteractionOnRemoveKey=function(){return this.adapter.getAttribute(h.DATA_DELETABLE)==="true"},i}(ut);/**
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
 */var Rt=function(n){F(i,n);function i(){return n!==null&&n.apply(this,arguments)||this}return i.prototype.isSelectable=function(){return!1},i.prototype.actionType=function(){return E.TRAILING},i.prototype.shouldEmitInteractionOnRemoveKey=function(){return!0},i}(ut);/**
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
 */var Dt=[N.safeAttrPrefix($||($=T(["aria-"],["aria-"]))),N.safeAttrPrefix(Q||(Q=T(["data-"],["data-"]))),N.safeAttrPrefix(J||(J=T(["disabled"],["disabled"]))),N.safeAttrPrefix(tt||(tt=T(["role"],["role"]))),N.safeAttrPrefix(et||(et=T(["tabindex"],["tabindex"])))],Tt=function(n){F(i,n);function i(){var t=n!==null&&n.apply(this,arguments)||this;return t.rootHTML=t.root,t}return i.attachTo=function(t){return new i(t)},Object.defineProperty(i.prototype,"ripple",{get:function(){return this.rippleInstance},enumerable:!1,configurable:!0}),i.prototype.initialize=function(t){var e=this;t===void 0&&(t=function(a,o){return new Z(a,o)});var r=g(g({},Z.createAdapter(this)),{computeBoundingRect:function(){return e.computeRippleClientRect()}});this.rippleInstance=t(this.root,new st(r))},i.prototype.initialSyncWithDOM=function(){var t=this;this.handleClick=function(){t.foundation.handleClick()},this.handleKeydown=function(e){t.foundation.handleKeydown(e)},this.listen("click",this.handleClick),this.listen("keydown",this.handleKeydown)},i.prototype.destroy=function(){this.ripple.destroy(),this.unlisten("click",this.handleClick),this.unlisten("keydown",this.handleKeydown),n.prototype.destroy.call(this)},i.prototype.getDefaultFoundation=function(){var t=this,e={emitEvent:function(r,a){t.emit(r,a,!0)},focus:function(){t.rootHTML.focus()},getAttribute:function(r){return t.root.getAttribute(r)},getElementID:function(){return t.root.id},removeAttribute:function(r){t.root.removeAttribute(r)},setAttribute:function(r,a){nt(Dt,t.root,r,a)}};return this.root.classList.contains(U.TRAILING_ACTION)?new Rt(e):new gt(e)},i.prototype.setDisabled=function(t){this.foundation.setDisabled(t)},i.prototype.isDisabled=function(){return this.foundation.isDisabled()},i.prototype.setFocus=function(t){this.foundation.setFocus(t)},i.prototype.isFocusable=function(){return this.foundation.isFocusable()},i.prototype.setSelected=function(t){this.foundation.setSelected(t)},i.prototype.isSelected=function(){return this.foundation.isSelected()},i.prototype.isSelectable=function(){return this.foundation.isSelectable()},i.prototype.actionType=function(){return this.foundation.actionType()},i.prototype.computeRippleClientRect=function(){if(this.root.classList.contains(U.PRIMARY_ACTION)){var t=ht(this.root,"."+U.CHIP_ROOT);if(!t)return this.root.getBoundingClientRect();var e=window.getComputedStyle(t).getPropertyValue(It);return Ct(t.getBoundingClientRect(),e)}return this.root.getBoundingClientRect()},i}(at),$,Q,J,tt,et;/**
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
 */var z;(function(n){n.ARIA_MULTISELECTABLE="aria-multiselectable"})(z||(z={}));var it;(function(n){n.CHIP="mdc-evolution-chip"})(it||(it={}));var x;(function(n){n.INTERACTION="MDCChipSet:interaction",n.REMOVAL="MDCChipSet:removal",n.SELECTION="MDCChipSet:selection"})(x||(x={}));/**
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
 */var L;(function(n){n[n.INCREMENT=0]="INCREMENT",n[n.DECREMENT=1]="DECREMENT"})(L||(L={}));var Nt=function(n){F(i,n);function i(t){return n.call(this,g(g({},i.defaultAdapter),t))||this}return Object.defineProperty(i,"defaultAdapter",{get:function(){return{announceMessage:function(){},emitEvent:function(){},getAttribute:function(){return null},getChipActionsAtIndex:function(){return[]},getChipCount:function(){return 0},getChipIdAtIndex:function(){return""},getChipIndexById:function(){return 0},isChipFocusableAtIndex:function(){return!1},isChipSelectableAtIndex:function(){return!1},isChipSelectedAtIndex:function(){return!1},removeChipAtIndex:function(){},setChipFocusAtIndex:function(){},setChipSelectedAtIndex:function(){},startChipAnimationAtIndex:function(){}}},enumerable:!1,configurable:!0}),i.prototype.handleChipAnimation=function(t){var e=t.detail,r=e.chipID,a=e.animation,o=e.isComplete,s=e.addedAnnouncement,d=e.removedAnnouncement,c=this.adapter.getChipIndexById(r);if(a===y.EXIT&&o){d&&this.adapter.announceMessage(d),this.removeAfterAnimation(c,r);return}if(a===y.ENTER&&o&&s){this.adapter.announceMessage(s);return}},i.prototype.handleChipInteraction=function(t){var e=t.detail,r=e.source,a=e.chipID,o=e.isSelectable,s=e.isSelected,d=e.shouldRemove,c=this.adapter.getChipIndexById(a);if(d){this.removeChip(c);return}this.focusChip(c,r,C.FOCUSABLE),this.adapter.emitEvent(x.INTERACTION,{chipIndex:c,chipID:a}),o&&this.setSelection(c,r,!s)},i.prototype.handleChipNavigation=function(t){var e=t.detail,r=e.chipID,a=e.key,o=e.isRTL,s=e.source,d=this.adapter.getChipIndexById(r),c=a===u.ARROW_RIGHT&&!o||a===u.ARROW_LEFT&&o;if(c){this.focusNextChipFrom(d+1);return}var f=a===u.ARROW_LEFT&&!o||a===u.ARROW_RIGHT&&o;if(f){this.focusPrevChipFrom(d-1);return}if(a===u.ARROW_DOWN){this.focusNextChipFrom(d+1,s);return}if(a===u.ARROW_UP){this.focusPrevChipFrom(d-1,s);return}if(a===u.HOME){this.focusNextChipFrom(0,s);return}if(a===u.END){this.focusPrevChipFrom(this.adapter.getChipCount()-1,s);return}},i.prototype.getSelectedChipIndexes=function(){for(var t,e,r=new Set,a=this.adapter.getChipCount(),o=0;o<a;o++){var s=this.adapter.getChipActionsAtIndex(o);try{for(var d=(t=void 0,I(s)),c=d.next();!c.done;c=d.next()){var f=c.value;this.adapter.isChipSelectedAtIndex(o,f)&&r.add(o)}}catch(l){t={error:l}}finally{try{c&&!c.done&&(e=d.return)&&e.call(d)}finally{if(t)throw t.error}}}return r},i.prototype.setChipSelected=function(t,e,r){this.adapter.isChipSelectableAtIndex(t,e)&&this.setSelection(t,e,r)},i.prototype.isChipSelected=function(t,e){return this.adapter.isChipSelectedAtIndex(t,e)},i.prototype.removeChip=function(t){t>=this.adapter.getChipCount()||t<0||(this.adapter.startChipAnimationAtIndex(t,y.EXIT),this.adapter.emitEvent(x.REMOVAL,{chipID:this.adapter.getChipIdAtIndex(t),chipIndex:t,isComplete:!1}))},i.prototype.addChip=function(t){t>=this.adapter.getChipCount()||t<0||this.adapter.startChipAnimationAtIndex(t,y.ENTER)},i.prototype.focusNextChipFrom=function(t,e){for(var r=this.adapter.getChipCount(),a=t;a<r;a++){var o=this.getFocusableAction(a,L.INCREMENT,e);if(o){this.focusChip(a,o,C.FOCUSABLE_AND_FOCUSED);return}}},i.prototype.focusPrevChipFrom=function(t,e){for(var r=t;r>-1;r--){var a=this.getFocusableAction(r,L.DECREMENT,e);if(a){this.focusChip(r,a,C.FOCUSABLE_AND_FOCUSED);return}}},i.prototype.getFocusableAction=function(t,e,r){var a=this.adapter.getChipActionsAtIndex(t);return e===L.DECREMENT&&a.reverse(),r?this.getMatchingFocusableAction(t,a,r):this.getFirstFocusableAction(t,a)},i.prototype.getFirstFocusableAction=function(t,e){var r,a;try{for(var o=I(e),s=o.next();!s.done;s=o.next()){var d=s.value;if(this.adapter.isChipFocusableAtIndex(t,d))return d}}catch(c){r={error:c}}finally{try{s&&!s.done&&(a=o.return)&&a.call(o)}finally{if(r)throw r.error}}return null},i.prototype.getMatchingFocusableAction=function(t,e,r){var a,o,s=null;try{for(var d=I(e),c=d.next();!c.done;c=d.next()){var f=c.value;if(this.adapter.isChipFocusableAtIndex(t,f)&&(s=f),s===r)return s}}catch(l){a={error:l}}finally{try{c&&!c.done&&(o=d.return)&&o.call(d)}finally{if(a)throw a.error}}return s},i.prototype.focusChip=function(t,e,r){var a,o;this.adapter.setChipFocusAtIndex(t,e,r);for(var s=this.adapter.getChipCount(),d=0;d<s;d++){var c=this.adapter.getChipActionsAtIndex(d);try{for(var f=(a=void 0,I(c)),l=f.next();!l.done;l=f.next()){var b=l.value;b===e&&d===t||this.adapter.setChipFocusAtIndex(d,b,C.NOT_FOCUSABLE)}}catch(P){a={error:P}}finally{try{l&&!l.done&&(o=f.return)&&o.call(f)}finally{if(a)throw a.error}}}},i.prototype.supportsMultiSelect=function(){return this.adapter.getAttribute(z.ARIA_MULTISELECTABLE)==="true"},i.prototype.setSelection=function(t,e,r){var a,o;if(this.adapter.setChipSelectedAtIndex(t,e,r),this.adapter.emitEvent(x.SELECTION,{chipID:this.adapter.getChipIdAtIndex(t),chipIndex:t,isSelected:r}),!this.supportsMultiSelect())for(var s=this.adapter.getChipCount(),d=0;d<s;d++){var c=this.adapter.getChipActionsAtIndex(d);try{for(var f=(a=void 0,I(c)),l=f.next();!l.done;l=f.next()){var b=l.value;b===e&&d===t||this.adapter.setChipSelectedAtIndex(d,b,!1)}}catch(P){a={error:P}}finally{try{l&&!l.done&&(o=f.return)&&o.call(f)}finally{if(a)throw a.error}}}},i.prototype.removeAfterAnimation=function(t,e){this.adapter.removeChipAtIndex(t),this.adapter.emitEvent(x.REMOVAL,{chipIndex:t,isComplete:!0,chipID:e});var r=this.adapter.getChipCount();r<=0||this.focusNearestFocusableAction(t)},i.prototype.focusNearestFocusableAction=function(t){for(var e=this.adapter.getChipCount(),r=t,a=t;r>-1||a<e;){var o=this.getNearestFocusableAction(r,a,E.TRAILING);if(o){this.focusChip(o.index,o.action,C.FOCUSABLE_AND_FOCUSED);return}r--,a++}},i.prototype.getNearestFocusableAction=function(t,e,r){var a=this.getFocusableAction(t,L.DECREMENT,r);if(a)return{index:t,action:a};if(e===t)return null;var o=this.getFocusableAction(e,L.INCREMENT,r);return o?{index:e,action:o}:null},i}(_);export{Ft as M,Tt as a,W as b,E as c,Nt as d,w as e,at as f,it as g};
