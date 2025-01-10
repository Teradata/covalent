import{a as g,b as C,c as y,h as L}from"./tslib.es6-BHOXe2z4.js";import{A as V,K as l,n as j,i as q}from"./keyboard-BGS45BWM.js";import{M as K}from"./foundation-D9HcNlNd.js";import{M as U,b as z,s as J,e as b,d as Q,c as Z}from"./component-Q6sugguR.js";/**
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
 */var F;(function(e){e.PRIMARY_ACTION="mdc-evolution-chip__action--primary",e.TRAILING_ACTION="mdc-evolution-chip__action--trailing",e.CHIP_ROOT="mdc-evolution-chip"})(F||(F={}));var m;(function(e){e[e.UNSPECIFIED=0]="UNSPECIFIED",e[e.CLICK=1]="CLICK",e[e.BACKSPACE_KEY=2]="BACKSPACE_KEY",e[e.DELETE_KEY=3]="DELETE_KEY",e[e.SPACEBAR_KEY=4]="SPACEBAR_KEY",e[e.ENTER_KEY=5]="ENTER_KEY"})(m||(m={}));var E;(function(e){e[e.UNSPECIFIED=0]="UNSPECIFIED",e[e.PRIMARY=1]="PRIMARY",e[e.TRAILING=2]="TRAILING"})(E||(E={}));var P;(function(e){e.INTERACTION="MDCChipAction:interaction",e.NAVIGATION="MDCChipAction:navigation"})(P||(P={}));var I;(function(e){e[e.FOCUSABLE=0]="FOCUSABLE",e[e.FOCUSABLE_AND_FOCUSED=1]="FOCUSABLE_AND_FOCUSED",e[e.NOT_FOCUSABLE=2]="NOT_FOCUSABLE"})(I||(I={}));var h;(function(e){e.ARIA_DISABLED="aria-disabled",e.ARIA_HIDDEN="aria-hidden",e.ARIA_SELECTED="aria-selected",e.DATA_DELETABLE="data-mdc-deletable",e.DISABLED="disabled",e.ROLE="role",e.TAB_INDEX="tabindex"})(h||(h={}));/**
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
 */var d;(function(e){e.SELECTING="mdc-evolution-chip--selecting",e.DESELECTING="mdc-evolution-chip--deselecting",e.SELECTING_WITH_PRIMARY_ICON="mdc-evolution-chip--selecting-with-primary-icon",e.DESELECTING_WITH_PRIMARY_ICON="mdc-evolution-chip--deselecting-with-primary-icon",e.DISABLED="mdc-evolution-chip--disabled",e.ENTER="mdc-evolution-chip--enter",e.EXIT="mdc-evolution-chip--exit",e.SELECTED="mdc-evolution-chip--selected",e.HIDDEN="mdc-evolution-chip--hidden",e.WITH_PRIMARY_ICON="mdc-evolution-chip--with-primary-icon"})(d||(d={}));var R;(function(e){e.INTERACTION="MDCChip:interaction",e.NAVIGATION="MDCChip:navigation",e.ANIMATION="MDCChip:animation"})(R||(R={}));var _;(function(e){e.DATA_REMOVED_ANNOUNCEMENT="data-mdc-removed-announcement",e.DATA_ADDED_ANNOUNCEMENT="data-mdc-added-announcement"})(_||(_={}));var A;(function(e){e.ENTER="mdc-evolution-chip-enter",e.EXIT="mdc-evolution-chip-exit"})(A||(A={}));/**
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
 */var N;(function(e){e[e.UNSPECIFIED=0]="UNSPECIFIED",e[e.LEFT=1]="LEFT",e[e.RIGHT=2]="RIGHT"})(N||(N={}));var v;(function(e){e.SELECTION="selection",e.EXIT="exit"})(v||(v={}));var dt=function(e){g(i,e);function i(t){var n=e.call(this,C(C({},i.defaultAdapter),t))||this;return n.animFrame=new V,n}return Object.defineProperty(i,"defaultAdapter",{get:function(){return{addClass:function(){},emitEvent:function(){},getActions:function(){return[]},getAttribute:function(){return null},getElementID:function(){return""},getOffsetWidth:function(){return 0},hasClass:function(){return!1},isActionDisabled:function(){return!1},isActionFocusable:function(){return!1},isActionSelectable:function(){return!1},isActionSelected:function(){return!1},isRTL:function(){return!1},removeClass:function(){},setActionDisabled:function(){},setActionFocus:function(){},setActionSelected:function(){},setStyleProperty:function(){}}},enumerable:!1,configurable:!0}),i.prototype.destroy=function(){this.animFrame.cancelAll()},i.prototype.getElementID=function(){return this.adapter.getElementID()},i.prototype.setDisabled=function(t){var n,r,o=this.getActions();try{for(var a=y(o),s=a.next();!s.done;s=a.next()){var u=s.value;this.adapter.setActionDisabled(u,t)}}catch(c){n={error:c}}finally{try{s&&!s.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}t?this.adapter.addClass(d.DISABLED):this.adapter.removeClass(d.DISABLED)},i.prototype.isDisabled=function(){var t,n,r=this.getActions();try{for(var o=y(r),a=o.next();!a.done;a=o.next()){var s=a.value;if(this.adapter.isActionDisabled(s))return!0}}catch(u){t={error:u}}finally{try{a&&!a.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}return!1},i.prototype.getActions=function(){return this.adapter.getActions()},i.prototype.isActionFocusable=function(t){return this.adapter.isActionFocusable(t)},i.prototype.isActionSelectable=function(t){return this.adapter.isActionSelectable(t)},i.prototype.isActionSelected=function(t){return this.adapter.isActionSelected(t)},i.prototype.setActionFocus=function(t,n){this.adapter.setActionFocus(t,n)},i.prototype.setActionSelected=function(t,n){this.adapter.setActionSelected(t,n),this.animateSelection(n)},i.prototype.startAnimation=function(t){if(t===A.ENTER){this.adapter.addClass(d.ENTER);return}if(t===A.EXIT){this.adapter.addClass(d.EXIT);return}},i.prototype.handleAnimationEnd=function(t){var n=this,r=t.animationName;if(r===A.ENTER){this.adapter.removeClass(d.ENTER),this.adapter.emitEvent(R.ANIMATION,{chipID:this.getElementID(),animation:A.ENTER,addedAnnouncement:this.getAddedAnnouncement(),isComplete:!0});return}if(r===A.EXIT){this.adapter.removeClass(d.EXIT),this.adapter.addClass(d.HIDDEN);var o=this.adapter.getOffsetWidth();this.adapter.setStyleProperty("width",o+"px"),this.animFrame.request(v.EXIT,function(){n.animFrame.request(v.EXIT,function(){n.adapter.setStyleProperty("width","0")})})}},i.prototype.handleTransitionEnd=function(){this.adapter.hasClass(d.HIDDEN)&&this.adapter.emitEvent(R.ANIMATION,{chipID:this.getElementID(),animation:A.EXIT,removedAnnouncement:this.getRemovedAnnouncement(),isComplete:!0})},i.prototype.handleActionInteraction=function(t){var n=t.detail,r=n.source,o=n.actionID,a=this.adapter.isActionSelectable(r),s=this.adapter.isActionSelected(r);this.adapter.emitEvent(R.INTERACTION,{chipID:this.getElementID(),shouldRemove:this.shouldRemove(n),actionID:o,isSelectable:a,isSelected:s,source:r})},i.prototype.handleActionNavigation=function(t){var n=t.detail,r=n.source,o=n.key,a=this.adapter.isRTL(),s=this.adapter.isActionFocusable(E.TRAILING),u=this.adapter.isActionFocusable(E.PRIMARY),c=this.directionFromKey(o,a),p=r===E.PRIMARY&&c===N.RIGHT&&s,f=r===E.TRAILING&&c===N.LEFT&&u;if(p){this.navigateActions({from:r,to:E.TRAILING});return}if(f){this.navigateActions({from:r,to:E.PRIMARY});return}this.adapter.emitEvent(R.NAVIGATION,{chipID:this.getElementID(),isRTL:a,source:r,key:o})},i.prototype.directionFromKey=function(t,n){var r=t===l.ARROW_LEFT,o=t===l.ARROW_RIGHT;return!n&&r||n&&o?N.LEFT:!n&&o||n&&r?N.RIGHT:N.UNSPECIFIED},i.prototype.navigateActions=function(t){this.adapter.setActionFocus(t.from,I.NOT_FOCUSABLE),this.adapter.setActionFocus(t.to,I.FOCUSABLE_AND_FOCUSED)},i.prototype.shouldRemove=function(t){var n=t.source,r=t.trigger;return r===m.BACKSPACE_KEY||r===m.DELETE_KEY?!0:n===E.TRAILING},i.prototype.getRemovedAnnouncement=function(){var t=this.adapter.getAttribute(_.DATA_REMOVED_ANNOUNCEMENT);return t||void 0},i.prototype.getAddedAnnouncement=function(){var t=this.adapter.getAttribute(_.DATA_ADDED_ANNOUNCEMENT);return t||void 0},i.prototype.animateSelection=function(t){var n=this;this.resetAnimationStyles(),this.animFrame.request(v.SELECTION,function(){n.animFrame.request(v.SELECTION,function(){n.updateSelectionStyles(t)})})},i.prototype.resetAnimationStyles=function(){this.adapter.removeClass(d.SELECTING),this.adapter.removeClass(d.DESELECTING),this.adapter.removeClass(d.SELECTING_WITH_PRIMARY_ICON),this.adapter.removeClass(d.DESELECTING_WITH_PRIMARY_ICON)},i.prototype.updateSelectionStyles=function(t){var n=this,r=this.adapter.hasClass(d.WITH_PRIMARY_ICON);if(r&&t){this.adapter.addClass(d.SELECTING_WITH_PRIMARY_ICON),this.animFrame.request(v.SELECTION,function(){n.adapter.addClass(d.SELECTED)});return}if(r&&!t){this.adapter.addClass(d.DESELECTING_WITH_PRIMARY_ICON),this.animFrame.request(v.SELECTION,function(){n.adapter.removeClass(d.SELECTED)});return}if(t){this.adapter.addClass(d.SELECTING),this.animFrame.request(v.SELECTION,function(){n.adapter.addClass(d.SELECTED)});return}if(!t){this.adapter.addClass(d.DESELECTING),this.animFrame.request(v.SELECTION,function(){n.adapter.removeClass(d.SELECTED)});return}},i}(K);/**
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
 */function $(e,i){var t=Number(i.replace("px",""));return Number.isNaN(t)?e:{width:e.width+t,height:e.height,top:e.top,right:e.right,bottom:e.bottom,left:e.left}}var tt="--mdc-chip-graphic-selected-width";/**
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
 */var O=new Map;O.set(l.SPACEBAR,m.SPACEBAR_KEY);O.set(l.ENTER,m.ENTER_KEY);O.set(l.DELETE,m.DELETE_KEY);O.set(l.BACKSPACE,m.BACKSPACE_KEY);var k=function(e){g(i,e);function i(t){return e.call(this,C(C({},i.defaultAdapter),t))||this}return Object.defineProperty(i,"defaultAdapter",{get:function(){return{emitEvent:function(){},focus:function(){},getAttribute:function(){return null},getElementID:function(){return""},removeAttribute:function(){},setAttribute:function(){}}},enumerable:!1,configurable:!0}),i.prototype.handleClick=function(){this.isDisabled()||this.emitInteraction(m.CLICK)},i.prototype.handleKeydown=function(t){var n=j(t);if(this.shouldNotifyInteractionFromKey(n)){t.preventDefault(),this.emitInteraction(this.getTriggerFromKey(n));return}if(q(t)){t.preventDefault(),this.emitNavigation(n);return}return!0},i.prototype.setDisabled=function(t){if(this.isSelectable()){this.adapter.setAttribute(h.ARIA_DISABLED,""+t);return}t?this.adapter.setAttribute(h.DISABLED,"true"):this.adapter.removeAttribute(h.DISABLED)},i.prototype.isDisabled=function(){return this.adapter.getAttribute(h.ARIA_DISABLED)==="true"||this.adapter.getAttribute(h.DISABLED)!==null},i.prototype.setFocus=function(t){if(this.isFocusable()){if(t===I.FOCUSABLE_AND_FOCUSED){this.adapter.setAttribute(h.TAB_INDEX,"0"),this.adapter.focus();return}if(t===I.FOCUSABLE){this.adapter.setAttribute(h.TAB_INDEX,"0");return}if(t===I.NOT_FOCUSABLE){this.adapter.setAttribute(h.TAB_INDEX,"-1");return}}},i.prototype.isFocusable=function(){return!(this.isDisabled()||this.adapter.getAttribute(h.ARIA_HIDDEN)==="true")},i.prototype.setSelected=function(t){this.isSelectable()&&this.adapter.setAttribute(h.ARIA_SELECTED,""+t)},i.prototype.isSelected=function(){return this.adapter.getAttribute(h.ARIA_SELECTED)==="true"},i.prototype.emitInteraction=function(t){this.adapter.emitEvent(P.INTERACTION,{actionID:this.adapter.getElementID(),source:this.actionType(),trigger:t})},i.prototype.emitNavigation=function(t){this.adapter.emitEvent(P.NAVIGATION,{source:this.actionType(),key:t})},i.prototype.shouldNotifyInteractionFromKey=function(t){var n=t===l.ENTER||t===l.SPACEBAR,r=t===l.BACKSPACE||t===l.DELETE;return!!(n||r&&this.shouldEmitInteractionOnRemoveKey())},i.prototype.getTriggerFromKey=function(t){var n=O.get(t);return n||m.UNSPECIFIED},i}(K);/**
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
 */var et=function(e){g(i,e);function i(){return e!==null&&e.apply(this,arguments)||this}return i.prototype.isSelectable=function(){return this.adapter.getAttribute(h.ROLE)==="option"},i.prototype.actionType=function(){return E.PRIMARY},i.prototype.shouldEmitInteractionOnRemoveKey=function(){return this.adapter.getAttribute(h.DATA_DELETABLE)==="true"},i}(k);/**
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
 */var nt=function(e){g(i,e);function i(){return e!==null&&e.apply(this,arguments)||this}return i.prototype.isSelectable=function(){return!1},i.prototype.actionType=function(){return E.TRAILING},i.prototype.shouldEmitInteractionOnRemoveKey=function(){return!0},i}(k);/**
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
 */var it=[b.safeAttrPrefix(w||(w=L(["aria-"],["aria-"]))),b.safeAttrPrefix(G||(G=L(["data-"],["data-"]))),b.safeAttrPrefix(Y||(Y=L(["disabled"],["disabled"]))),b.safeAttrPrefix(H||(H=L(["role"],["role"]))),b.safeAttrPrefix(W||(W=L(["tabindex"],["tabindex"])))],pt=function(e){g(i,e);function i(){var t=e!==null&&e.apply(this,arguments)||this;return t.rootHTML=t.root,t}return i.attachTo=function(t){return new i(t)},Object.defineProperty(i.prototype,"ripple",{get:function(){return this.rippleInstance},enumerable:!1,configurable:!0}),i.prototype.initialize=function(t){var n=this;t===void 0&&(t=function(o,a){return new U(o,a)});var r=C(C({},U.createAdapter(this)),{computeBoundingRect:function(){return n.computeRippleClientRect()}});this.rippleInstance=t(this.root,new z(r))},i.prototype.initialSyncWithDOM=function(){var t=this;this.handleClick=function(){t.foundation.handleClick()},this.handleKeydown=function(n){t.foundation.handleKeydown(n)},this.listen("click",this.handleClick),this.listen("keydown",this.handleKeydown)},i.prototype.destroy=function(){this.ripple.destroy(),this.unlisten("click",this.handleClick),this.unlisten("keydown",this.handleKeydown),e.prototype.destroy.call(this)},i.prototype.getDefaultFoundation=function(){var t=this,n={emitEvent:function(r,o){t.emit(r,o,!0)},focus:function(){t.rootHTML.focus()},getAttribute:function(r){return t.root.getAttribute(r)},getElementID:function(){return t.root.id},removeAttribute:function(r){t.root.removeAttribute(r)},setAttribute:function(r,o){J(it,t.root,r,o)}};return this.root.classList.contains(F.TRAILING_ACTION)?new nt(n):new et(n)},i.prototype.setDisabled=function(t){this.foundation.setDisabled(t)},i.prototype.isDisabled=function(){return this.foundation.isDisabled()},i.prototype.setFocus=function(t){this.foundation.setFocus(t)},i.prototype.isFocusable=function(){return this.foundation.isFocusable()},i.prototype.setSelected=function(t){this.foundation.setSelected(t)},i.prototype.isSelected=function(){return this.foundation.isSelected()},i.prototype.isSelectable=function(){return this.foundation.isSelectable()},i.prototype.actionType=function(){return this.foundation.actionType()},i.prototype.computeRippleClientRect=function(){if(this.root.classList.contains(F.PRIMARY_ACTION)){var t=Q(this.root,"."+F.CHIP_ROOT);if(!t)return this.root.getBoundingClientRect();var n=window.getComputedStyle(t).getPropertyValue(tt);return $(t.getBoundingClientRect(),n)}return this.root.getBoundingClientRect()},i}(Z),w,G,Y,H,W;/**
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
 */var M;(function(e){e.ARIA_MULTISELECTABLE="aria-multiselectable"})(M||(M={}));var X;(function(e){e.CHIP="mdc-evolution-chip"})(X||(X={}));var S;(function(e){e.INTERACTION="MDCChipSet:interaction",e.REMOVAL="MDCChipSet:removal",e.SELECTION="MDCChipSet:selection"})(S||(S={}));/**
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
 */var T;(function(e){e[e.INCREMENT=0]="INCREMENT",e[e.DECREMENT=1]="DECREMENT"})(T||(T={}));var lt=function(e){g(i,e);function i(t){return e.call(this,C(C({},i.defaultAdapter),t))||this}return Object.defineProperty(i,"defaultAdapter",{get:function(){return{announceMessage:function(){},emitEvent:function(){},getAttribute:function(){return null},getChipActionsAtIndex:function(){return[]},getChipCount:function(){return 0},getChipIdAtIndex:function(){return""},getChipIndexById:function(){return 0},isChipFocusableAtIndex:function(){return!1},isChipSelectableAtIndex:function(){return!1},isChipSelectedAtIndex:function(){return!1},removeChipAtIndex:function(){},setChipFocusAtIndex:function(){},setChipSelectedAtIndex:function(){},startChipAnimationAtIndex:function(){}}},enumerable:!1,configurable:!0}),i.prototype.handleChipAnimation=function(t){var n=t.detail,r=n.chipID,o=n.animation,a=n.isComplete,s=n.addedAnnouncement,u=n.removedAnnouncement,c=this.adapter.getChipIndexById(r);if(o===A.EXIT&&a){u&&this.adapter.announceMessage(u),this.removeAfterAnimation(c,r);return}if(o===A.ENTER&&a&&s){this.adapter.announceMessage(s);return}},i.prototype.handleChipInteraction=function(t){var n=t.detail,r=n.source,o=n.chipID,a=n.isSelectable,s=n.isSelected,u=n.shouldRemove,c=this.adapter.getChipIndexById(o);if(u){this.removeChip(c);return}this.focusChip(c,r,I.FOCUSABLE),this.adapter.emitEvent(S.INTERACTION,{chipIndex:c,chipID:o}),a&&this.setSelection(c,r,!s)},i.prototype.handleChipNavigation=function(t){var n=t.detail,r=n.chipID,o=n.key,a=n.isRTL,s=n.source,u=this.adapter.getChipIndexById(r),c=o===l.ARROW_RIGHT&&!a||o===l.ARROW_LEFT&&a;if(c){this.focusNextChipFrom(u+1);return}var p=o===l.ARROW_LEFT&&!a||o===l.ARROW_RIGHT&&a;if(p){this.focusPrevChipFrom(u-1);return}if(o===l.ARROW_DOWN){this.focusNextChipFrom(u+1,s);return}if(o===l.ARROW_UP){this.focusPrevChipFrom(u-1,s);return}if(o===l.HOME){this.focusNextChipFrom(0,s);return}if(o===l.END){this.focusPrevChipFrom(this.adapter.getChipCount()-1,s);return}},i.prototype.getSelectedChipIndexes=function(){for(var t,n,r=new Set,o=this.adapter.getChipCount(),a=0;a<o;a++){var s=this.adapter.getChipActionsAtIndex(a);try{for(var u=(t=void 0,y(s)),c=u.next();!c.done;c=u.next()){var p=c.value;this.adapter.isChipSelectedAtIndex(a,p)&&r.add(a)}}catch(f){t={error:f}}finally{try{c&&!c.done&&(n=u.return)&&n.call(u)}finally{if(t)throw t.error}}}return r},i.prototype.setChipSelected=function(t,n,r){this.adapter.isChipSelectableAtIndex(t,n)&&this.setSelection(t,n,r)},i.prototype.isChipSelected=function(t,n){return this.adapter.isChipSelectedAtIndex(t,n)},i.prototype.removeChip=function(t){t>=this.adapter.getChipCount()||t<0||(this.adapter.startChipAnimationAtIndex(t,A.EXIT),this.adapter.emitEvent(S.REMOVAL,{chipID:this.adapter.getChipIdAtIndex(t),chipIndex:t,isComplete:!1}))},i.prototype.addChip=function(t){t>=this.adapter.getChipCount()||t<0||this.adapter.startChipAnimationAtIndex(t,A.ENTER)},i.prototype.focusNextChipFrom=function(t,n){for(var r=this.adapter.getChipCount(),o=t;o<r;o++){var a=this.getFocusableAction(o,T.INCREMENT,n);if(a){this.focusChip(o,a,I.FOCUSABLE_AND_FOCUSED);return}}},i.prototype.focusPrevChipFrom=function(t,n){for(var r=t;r>-1;r--){var o=this.getFocusableAction(r,T.DECREMENT,n);if(o){this.focusChip(r,o,I.FOCUSABLE_AND_FOCUSED);return}}},i.prototype.getFocusableAction=function(t,n,r){var o=this.adapter.getChipActionsAtIndex(t);return n===T.DECREMENT&&o.reverse(),r?this.getMatchingFocusableAction(t,o,r):this.getFirstFocusableAction(t,o)},i.prototype.getFirstFocusableAction=function(t,n){var r,o;try{for(var a=y(n),s=a.next();!s.done;s=a.next()){var u=s.value;if(this.adapter.isChipFocusableAtIndex(t,u))return u}}catch(c){r={error:c}}finally{try{s&&!s.done&&(o=a.return)&&o.call(a)}finally{if(r)throw r.error}}return null},i.prototype.getMatchingFocusableAction=function(t,n,r){var o,a,s=null;try{for(var u=y(n),c=u.next();!c.done;c=u.next()){var p=c.value;if(this.adapter.isChipFocusableAtIndex(t,p)&&(s=p),s===r)return s}}catch(f){o={error:f}}finally{try{c&&!c.done&&(a=u.return)&&a.call(u)}finally{if(o)throw o.error}}return s},i.prototype.focusChip=function(t,n,r){var o,a;this.adapter.setChipFocusAtIndex(t,n,r);for(var s=this.adapter.getChipCount(),u=0;u<s;u++){var c=this.adapter.getChipActionsAtIndex(u);try{for(var p=(o=void 0,y(c)),f=p.next();!f.done;f=p.next()){var D=f.value;D===n&&u===t||this.adapter.setChipFocusAtIndex(u,D,I.NOT_FOCUSABLE)}}catch(x){o={error:x}}finally{try{f&&!f.done&&(a=p.return)&&a.call(p)}finally{if(o)throw o.error}}}},i.prototype.supportsMultiSelect=function(){return this.adapter.getAttribute(M.ARIA_MULTISELECTABLE)==="true"},i.prototype.setSelection=function(t,n,r){var o,a;if(this.adapter.setChipSelectedAtIndex(t,n,r),this.adapter.emitEvent(S.SELECTION,{chipID:this.adapter.getChipIdAtIndex(t),chipIndex:t,isSelected:r}),!this.supportsMultiSelect())for(var s=this.adapter.getChipCount(),u=0;u<s;u++){var c=this.adapter.getChipActionsAtIndex(u);try{for(var p=(o=void 0,y(c)),f=p.next();!f.done;f=p.next()){var D=f.value;D===n&&u===t||this.adapter.setChipSelectedAtIndex(u,D,!1)}}catch(x){o={error:x}}finally{try{f&&!f.done&&(a=p.return)&&a.call(p)}finally{if(o)throw o.error}}}},i.prototype.removeAfterAnimation=function(t,n){this.adapter.removeChipAtIndex(t),this.adapter.emitEvent(S.REMOVAL,{chipIndex:t,isComplete:!0,chipID:n});var r=this.adapter.getChipCount();r<=0||this.focusNearestFocusableAction(t)},i.prototype.focusNearestFocusableAction=function(t){for(var n=this.adapter.getChipCount(),r=t,o=t;r>-1||o<n;){var a=this.getNearestFocusableAction(r,o,E.TRAILING);if(a){this.focusChip(a.index,a.action,I.FOCUSABLE_AND_FOCUSED);return}r--,o++}},i.prototype.getNearestFocusableAction=function(t,n,r){var o=this.getFocusableAction(t,T.DECREMENT,r);if(o)return{index:t,action:o};if(n===t)return null;var a=this.getFocusableAction(n,T.INCREMENT,r);return a?{index:n,action:a}:null},i}(K);/**
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
 */var B;(function(e){e.POLITE="polite",e.ASSERTIVE="assertive"})(B||(B={}));var rt="data-mdc-dom-announce";function ft(e,i){ot.getInstance().say(e,i)}var ot=function(){function e(){this.liveRegions=new Map}return e.getInstance=function(){return e.instance||(e.instance=new e),e.instance},e.prototype.say=function(i,t){var n,r,o=(n=t==null?void 0:t.priority)!==null&&n!==void 0?n:B.POLITE,a=(r=t==null?void 0:t.ownerDocument)!==null&&r!==void 0?r:document,s=this.getLiveRegion(o,a);s.textContent="",setTimeout(function(){s.textContent=i,a.addEventListener("click",u)},1);function u(){s.textContent="",a.removeEventListener("click",u)}},e.prototype.getLiveRegion=function(i,t){var n=this.liveRegions.get(t);n||(n=new Map,this.liveRegions.set(t,n));var r=n.get(i);if(r&&t.body.contains(r))return r;var o=this.createLiveRegion(i,t);return n.set(i,o),o},e.prototype.createLiveRegion=function(i,t){var n=t.createElement("div");return n.style.position="absolute",n.style.top="-9999px",n.style.left="-9999px",n.style.height="1px",n.style.overflow="hidden",n.setAttribute("aria-atomic","true"),n.setAttribute("aria-live",i),n.setAttribute(rt,"true"),t.body.appendChild(n),n},e}();export{dt as M,pt as a,P as b,E as c,lt as d,R as e,ft as f,X as g};
