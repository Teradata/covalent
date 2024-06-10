import{b as L,M as H,m as st,d as Ct,a as St,c as K,f as Ye}from"./component-6f8ff72c.js";import{a as f,c as V,e as J,b as p,d as lt}from"./tslib.es6-6921e62d.js";import{M as R}from"./foundation-402d6c96.js";import{b as Nt,M as $e,a as Qe,g as Ze,e as It,d as Je,f as tn}from"./announce-59c3507b.js";import{a as en,b as nn,M as rn}from"./component-dc75d768.js";import{A as xe,n as F,K as Ft}from"./keyboard-6abd561a.js";import{g as te}from"./util-06a02d81.js";import{s as Ot,c as A,n as Gt}from"./constants-50e40bd9.js";import"./_commonjsHelpers-de833af9.js";/**
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
 */var Xt="mdc-dom-focus-sentinel",an=function(){function a(e,t){t===void 0&&(t={}),this.root=e,this.options=t,this.elFocusedBeforeTrapFocus=null}return a.prototype.trapFocus=function(){var e=this.getFocusableElements(this.root);if(e.length===0)throw new Error("FocusTrap: Element must have at least one focusable child.");this.elFocusedBeforeTrapFocus=document.activeElement instanceof HTMLElement?document.activeElement:null,this.wrapTabFocus(this.root),this.options.skipInitialFocus||this.focusInitialElement(e,this.options.initialFocusEl)},a.prototype.releaseFocus=function(){Array.from(this.root.querySelectorAll("."+Xt)).forEach(function(e){e.parentElement.removeChild(e)}),!this.options.skipRestoreFocus&&this.elFocusedBeforeTrapFocus&&this.elFocusedBeforeTrapFocus.focus()},a.prototype.wrapTabFocus=function(e){var t=this,n=this.createSentinel(),i=this.createSentinel();n.addEventListener("focus",function(){var r=t.getFocusableElements(e);r.length>0&&r[r.length-1].focus()}),i.addEventListener("focus",function(){var r=t.getFocusableElements(e);r.length>0&&r[0].focus()}),e.insertBefore(n,e.children[0]),e.appendChild(i)},a.prototype.focusInitialElement=function(e,t){var n=0;t&&(n=Math.max(e.indexOf(t),0)),e[n].focus()},a.prototype.getFocusableElements=function(e){var t=Array.from(e.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));return t.filter(function(n){var i=n.getAttribute("aria-disabled")==="true"||n.getAttribute("disabled")!=null||n.getAttribute("hidden")!=null||n.getAttribute("aria-hidden")==="true",r=n.tabIndex>=0&&n.getBoundingClientRect().width>0&&!n.classList.contains(Xt)&&!i,s=!1;if(r){var o=getComputedStyle(n);s=o.display==="none"||o.visibility==="hidden"}return r&&!s})},a.prototype.createSentinel=function(){var e=document.createElement("div");return e.setAttribute("tabindex","0"),e.setAttribute("aria-hidden","true"),e.classList.add(Xt),e},a}();/**
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
 */var sn=function(a){f(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t){t===void 0&&(t=function(s){return new Qe(s)}),this.actions=new Map;for(var n=this.root.querySelectorAll(".mdc-evolution-chip__action"),i=0;i<n.length;i++){var r=t(n[i]);this.actions.set(r.actionType(),r)}},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleActionInteraction=function(n){t.foundation.handleActionInteraction(n)},this.handleActionNavigation=function(n){t.foundation.handleActionNavigation(n)},this.listen(Nt.INTERACTION,this.handleActionInteraction),this.listen(Nt.NAVIGATION,this.handleActionNavigation)},e.prototype.destroy=function(){this.unlisten(Nt.INTERACTION,this.handleActionInteraction),this.unlisten(Nt.NAVIGATION,this.handleActionNavigation),a.prototype.destroy.call(this)},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){t.root.classList.add(i)},emitEvent:function(i,r){t.emit(i,r,!0)},getActions:function(){var i,r,s=[];try{for(var o=V(t.actions),l=o.next();!l.done;l=o.next()){var d=J(l.value,1),u=d[0];s.push(u)}}catch(v){i={error:v}}finally{try{l&&!l.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return s},getAttribute:function(i){return t.root.getAttribute(i)},getElementID:function(){return t.root.id},getOffsetWidth:function(){return t.root.offsetWidth},hasClass:function(i){return t.root.classList.contains(i)},isActionSelectable:function(i){var r=t.actions.get(i);return r?r.isSelectable():!1},isActionSelected:function(i){var r=t.actions.get(i);return r?r.isSelected():!1},isActionFocusable:function(i){var r=t.actions.get(i);return r?r.isFocusable():!1},isActionDisabled:function(i){var r=t.actions.get(i);return r?r.isDisabled():!1},isRTL:function(){return window.getComputedStyle(t.root).getPropertyValue("direction")==="rtl"},removeClass:function(i){t.root.classList.remove(i)},setActionDisabled:function(i,r){var s=t.actions.get(i);s&&s.setDisabled(r)},setActionFocus:function(i,r){var s=t.actions.get(i);s&&s.setFocus(r)},setActionSelected:function(i,r){var s=t.actions.get(i);s&&s.setSelected(r)},setStyleProperty:function(i,r){t.root.style.setProperty(i,r)}};return new $e(n)},e.prototype.remove=function(){var t=this.root.parentNode;t!==null&&t.removeChild(this.root)},e.prototype.getActions=function(){return this.foundation.getActions()},e.prototype.getElementID=function(){return this.foundation.getElementID()},e.prototype.isDisabled=function(){return this.foundation.isDisabled()},e.prototype.setDisabled=function(t){this.foundation.setDisabled(t)},e.prototype.isActionFocusable=function(t){return this.foundation.isActionFocusable(t)},e.prototype.isActionSelectable=function(t){return this.foundation.isActionSelectable(t)},e.prototype.isActionSelected=function(t){return this.foundation.isActionSelected(t)},e.prototype.setActionFocus=function(t,n){this.foundation.setActionFocus(t,n)},e.prototype.setActionSelected=function(t,n){this.foundation.setActionSelected(t,n)},e.prototype.startAnimation=function(t){this.foundation.startAnimation(t)},e}(L);/**
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
 */var on=function(a){f(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t){t===void 0&&(t=function(s){return new sn(s)}),this.chips=[];for(var n=this.root.querySelectorAll("."+Ze.CHIP),i=0;i<n.length;i++){var r=t(n[i]);this.chips.push(r)}},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleChipAnimation=function(n){t.foundation.handleChipAnimation(n)},this.handleChipInteraction=function(n){t.foundation.handleChipInteraction(n)},this.handleChipNavigation=function(n){t.foundation.handleChipNavigation(n)},this.listen(It.ANIMATION,this.handleChipAnimation),this.listen(It.INTERACTION,this.handleChipInteraction),this.listen(It.NAVIGATION,this.handleChipNavigation)},e.prototype.destroy=function(){this.unlisten(It.ANIMATION,this.handleChipAnimation),this.unlisten(It.INTERACTION,this.handleChipInteraction),this.unlisten(It.NAVIGATION,this.handleChipNavigation),a.prototype.destroy.call(this)},e.prototype.getDefaultFoundation=function(){var t=this,n={announceMessage:function(i){tn(i)},emitEvent:function(i,r){t.emit(i,r,!0)},getAttribute:function(i){return t.root.getAttribute(i)},getChipActionsAtIndex:function(i){return t.isIndexValid(i)?t.chips[i].getActions():[]},getChipCount:function(){return t.chips.length},getChipIdAtIndex:function(i){return t.isIndexValid(i)?t.chips[i].getElementID():""},getChipIndexById:function(i){return t.chips.findIndex(function(r){return r.getElementID()===i})},isChipFocusableAtIndex:function(i,r){return t.isIndexValid(i)?t.chips[i].isActionFocusable(r):!1},isChipSelectableAtIndex:function(i,r){return t.isIndexValid(i)?t.chips[i].isActionSelectable(r):!1},isChipSelectedAtIndex:function(i,r){return t.isIndexValid(i)?t.chips[i].isActionSelected(r):!1},removeChipAtIndex:function(i){t.isIndexValid(i)&&(t.chips[i].destroy(),t.chips[i].remove(),t.chips.splice(i,1))},setChipFocusAtIndex:function(i,r,s){t.isIndexValid(i)&&t.chips[i].setActionFocus(r,s)},setChipSelectedAtIndex:function(i,r,s){t.isIndexValid(i)&&t.chips[i].setActionSelected(r,s)},startChipAnimationAtIndex:function(i,r){t.isIndexValid(i)&&t.chips[i].startAnimation(r)}};return new Je(n)},e.prototype.getChipIndexByID=function(t){return this.chips.findIndex(function(n){return n.getElementID()===t})},e.prototype.getChipIdAtIndex=function(t){return this.isIndexValid(t)?this.chips[t].getElementID():""},e.prototype.getSelectedChipIndexes=function(){return this.foundation.getSelectedChipIndexes()},e.prototype.setChipSelected=function(t,n,i){this.foundation.setChipSelected(t,n,i)},e.prototype.isChipSelected=function(t,n){return this.foundation.isChipSelected(t,n)},e.prototype.addChip=function(t){this.foundation.addChip(t)},e.prototype.removeChip=function(t){this.foundation.removeChip(t)},e.prototype.isIndexValid=function(t){return t>-1&&t<this.chips.length},e}(L);/**
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
 */function ln(a,e,t){return e(a,{initialFocusEl:t})}function cn(a){return a?a.scrollHeight>a.offsetHeight:!1}function dn(a){return a?a.scrollTop===0:!1}function un(a){return a?Math.ceil(a.scrollHeight-a.scrollTop)===a.clientHeight:!1}function pn(a){var e=new Set;return[].forEach.call(a,function(t){return e.add(t.offsetTop)}),e.size>1}/**
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
 */var qt;(function(a){a.POLL_SCROLL_POS="poll_scroll_position",a.POLL_LAYOUT_CHANGE="poll_layout_change"})(qt||(qt={}));var Oe=function(a){f(e,a);function e(t){var n=a.call(this,p(p({},e.defaultAdapter),t))||this;return n.dialogOpen=!1,n.isFullscreen=!1,n.animationFrame=0,n.animationTimer=0,n.escapeKeyAction=Ot.CLOSE_ACTION,n.scrimClickAction=Ot.CLOSE_ACTION,n.autoStackButtons=!0,n.areButtonsStacked=!1,n.suppressDefaultPressSelector=Ot.SUPPRESS_DEFAULT_PRESS_SELECTOR,n.animFrame=new xe,n.contentScrollHandler=function(){n.handleScrollEvent()},n.windowResizeHandler=function(){n.layout()},n.windowOrientationChangeHandler=function(){n.layout()},n}return Object.defineProperty(e,"cssClasses",{get:function(){return A},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Ot},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Gt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addBodyClass:function(){},addClass:function(){},areButtonsStacked:function(){return!1},clickDefaultButton:function(){},eventTargetMatches:function(){return!1},getActionFromEvent:function(){return""},getInitialFocusEl:function(){return null},hasClass:function(){return!1},isContentScrollable:function(){return!1},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},releaseFocus:function(){},removeBodyClass:function(){},removeClass:function(){},reverseButtons:function(){},trapFocus:function(){},registerContentEventHandler:function(){},deregisterContentEventHandler:function(){},isScrollableContentAtTop:function(){return!1},isScrollableContentAtBottom:function(){return!1},registerWindowEventHandler:function(){},deregisterWindowEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.hasClass(A.STACKED)&&this.setAutoStackButtons(!1),this.isFullscreen=this.adapter.hasClass(A.FULLSCREEN)},e.prototype.destroy=function(){this.animationTimer&&(clearTimeout(this.animationTimer),this.handleAnimationTimerEnd()),this.isFullscreen&&this.adapter.deregisterContentEventHandler("scroll",this.contentScrollHandler),this.animFrame.cancelAll(),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("orientationchange",this.windowOrientationChangeHandler)},e.prototype.open=function(t){var n=this;this.dialogOpen=!0,this.adapter.notifyOpening(),this.adapter.addClass(A.OPENING),this.isFullscreen&&this.adapter.registerContentEventHandler("scroll",this.contentScrollHandler),t&&t.isAboveFullscreenDialog&&this.adapter.addClass(A.SCRIM_HIDDEN),this.adapter.registerWindowEventHandler("resize",this.windowResizeHandler),this.adapter.registerWindowEventHandler("orientationchange",this.windowOrientationChangeHandler),this.runNextAnimationFrame(function(){n.adapter.addClass(A.OPEN),(!t||!t.isScrimless)&&n.adapter.addBodyClass(A.SCROLL_LOCK),n.layout(),n.animationTimer=setTimeout(function(){n.handleAnimationTimerEnd(),n.adapter.trapFocus(n.adapter.getInitialFocusEl()),n.adapter.notifyOpened()},Gt.DIALOG_ANIMATION_OPEN_TIME_MS)})},e.prototype.close=function(t){var n=this;t===void 0&&(t=""),this.dialogOpen&&(this.dialogOpen=!1,this.adapter.notifyClosing(t),this.adapter.addClass(A.CLOSING),this.adapter.removeClass(A.OPEN),this.adapter.removeBodyClass(A.SCROLL_LOCK),this.isFullscreen&&this.adapter.deregisterContentEventHandler("scroll",this.contentScrollHandler),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("orientationchange",this.windowOrientationChangeHandler),cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=setTimeout(function(){n.adapter.releaseFocus(),n.handleAnimationTimerEnd(),n.adapter.notifyClosed(t)},Gt.DIALOG_ANIMATION_CLOSE_TIME_MS))},e.prototype.showSurfaceScrim=function(){var t=this;this.adapter.addClass(A.SURFACE_SCRIM_SHOWING),this.runNextAnimationFrame(function(){t.adapter.addClass(A.SURFACE_SCRIM_SHOWN)})},e.prototype.hideSurfaceScrim=function(){this.adapter.removeClass(A.SURFACE_SCRIM_SHOWN),this.adapter.addClass(A.SURFACE_SCRIM_HIDING)},e.prototype.handleSurfaceScrimTransitionEnd=function(){this.adapter.removeClass(A.SURFACE_SCRIM_HIDING),this.adapter.removeClass(A.SURFACE_SCRIM_SHOWING)},e.prototype.isOpen=function(){return this.dialogOpen},e.prototype.getEscapeKeyAction=function(){return this.escapeKeyAction},e.prototype.setEscapeKeyAction=function(t){this.escapeKeyAction=t},e.prototype.getScrimClickAction=function(){return this.scrimClickAction},e.prototype.setScrimClickAction=function(t){this.scrimClickAction=t},e.prototype.getAutoStackButtons=function(){return this.autoStackButtons},e.prototype.setAutoStackButtons=function(t){this.autoStackButtons=t},e.prototype.getSuppressDefaultPressSelector=function(){return this.suppressDefaultPressSelector},e.prototype.setSuppressDefaultPressSelector=function(t){this.suppressDefaultPressSelector=t},e.prototype.layout=function(){var t=this;this.animFrame.request(qt.POLL_LAYOUT_CHANGE,function(){t.layoutInternal()})},e.prototype.handleClick=function(t){var n=this.adapter.eventTargetMatches(t.target,Ot.SCRIM_SELECTOR);if(n&&this.scrimClickAction!=="")this.close(this.scrimClickAction);else{var i=this.adapter.getActionFromEvent(t);i&&this.close(i)}},e.prototype.handleKeydown=function(t){var n=t.key==="Enter"||t.keyCode===13;if(n){var i=this.adapter.getActionFromEvent(t);if(!i){var r=t.composedPath?t.composedPath()[0]:t.target,s=this.suppressDefaultPressSelector?!this.adapter.eventTargetMatches(r,this.suppressDefaultPressSelector):!0;n&&s&&this.adapter.clickDefaultButton()}}},e.prototype.handleDocumentKeydown=function(t){var n=t.key==="Escape"||t.keyCode===27;n&&this.escapeKeyAction!==""&&this.close(this.escapeKeyAction)},e.prototype.handleScrollEvent=function(){var t=this;this.animFrame.request(qt.POLL_SCROLL_POS,function(){t.toggleScrollDividerHeader(),t.toggleScrollDividerFooter()})},e.prototype.layoutInternal=function(){this.autoStackButtons&&this.detectStackedButtons(),this.toggleScrollableClasses()},e.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(A.OPENING),this.adapter.removeClass(A.CLOSING)},e.prototype.runNextAnimationFrame=function(t){var n=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){n.animationFrame=0,clearTimeout(n.animationTimer),n.animationTimer=setTimeout(t,0)})},e.prototype.detectStackedButtons=function(){this.adapter.removeClass(A.STACKED);var t=this.adapter.areButtonsStacked();t&&this.adapter.addClass(A.STACKED),t!==this.areButtonsStacked&&(this.adapter.reverseButtons(),this.areButtonsStacked=t)},e.prototype.toggleScrollableClasses=function(){this.adapter.removeClass(A.SCROLLABLE),this.adapter.isContentScrollable()&&(this.adapter.addClass(A.SCROLLABLE),this.isFullscreen&&(this.toggleScrollDividerHeader(),this.toggleScrollDividerFooter()))},e.prototype.toggleScrollDividerHeader=function(){this.adapter.isScrollableContentAtTop()?this.adapter.hasClass(A.SCROLL_DIVIDER_HEADER)&&this.adapter.removeClass(A.SCROLL_DIVIDER_HEADER):this.adapter.addClass(A.SCROLL_DIVIDER_HEADER)},e.prototype.toggleScrollDividerFooter=function(){this.adapter.isScrollableContentAtBottom()?this.adapter.hasClass(A.SCROLL_DIVIDER_FOOTER)&&this.adapter.removeClass(A.SCROLL_DIVIDER_FOOTER):this.adapter.addClass(A.SCROLL_DIVIDER_FOOTER)},e}(R);/**
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
 */var q=Oe.strings,hn=function(a){f(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return Object.defineProperty(e.prototype,"isOpen",{get:function(){return this.foundation.isOpen()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"escapeKeyAction",{get:function(){return this.foundation.getEscapeKeyAction()},set:function(t){this.foundation.setEscapeKeyAction(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scrimClickAction",{get:function(){return this.foundation.getScrimClickAction()},set:function(t){this.foundation.setScrimClickAction(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"autoStackButtons",{get:function(){return this.foundation.getAutoStackButtons()},set:function(t){this.foundation.setAutoStackButtons(t)},enumerable:!1,configurable:!0}),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t){var n,i;t===void 0&&(t=function(d,u){return new an(d,u)});var r=this.root.querySelector(q.CONTAINER_SELECTOR);if(!r)throw new Error("Dialog component requires a "+q.CONTAINER_SELECTOR+" container element");this.container=r,this.content=this.root.querySelector(q.CONTENT_SELECTOR),this.buttons=Array.from(this.root.querySelectorAll(q.BUTTON_SELECTOR)),this.defaultButton=this.root.querySelector("["+q.BUTTON_DEFAULT_ATTRIBUTE+"]"),this.focusTrapFactory=t,this.buttonRipples=[];try{for(var s=V(this.buttons),o=s.next();!o.done;o=s.next()){var l=o.value;this.buttonRipples.push(new H(l))}}catch(d){n={error:d}}finally{try{o&&!o.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}},e.prototype.initialSyncWithDOM=function(){var t=this;this.focusTrap=ln(this.container,this.focusTrapFactory,this.getInitialFocusEl()||void 0),this.handleClick=this.foundation.handleClick.bind(this.foundation),this.handleKeydown=this.foundation.handleKeydown.bind(this.foundation),this.handleDocumentKeydown=this.foundation.handleDocumentKeydown.bind(this.foundation),this.handleOpening=function(){document.addEventListener("keydown",t.handleDocumentKeydown)},this.handleClosing=function(){document.removeEventListener("keydown",t.handleDocumentKeydown)},this.listen("click",this.handleClick),this.listen("keydown",this.handleKeydown),this.listen(q.OPENING_EVENT,this.handleOpening),this.listen(q.CLOSING_EVENT,this.handleClosing)},e.prototype.destroy=function(){this.unlisten("click",this.handleClick),this.unlisten("keydown",this.handleKeydown),this.unlisten(q.OPENING_EVENT,this.handleOpening),this.unlisten(q.CLOSING_EVENT,this.handleClosing),this.handleClosing(),this.buttonRipples.forEach(function(t){t.destroy()}),a.prototype.destroy.call(this)},e.prototype.layout=function(){this.foundation.layout()},e.prototype.open=function(){this.foundation.open()},e.prototype.close=function(t){t===void 0&&(t=""),this.foundation.close(t)},e.prototype.getDefaultFoundation=function(){var t=this,n={addBodyClass:function(i){document.body.classList.add(i)},addClass:function(i){t.root.classList.add(i)},areButtonsStacked:function(){return pn(t.buttons)},clickDefaultButton:function(){t.defaultButton&&!t.defaultButton.disabled&&t.defaultButton.click()},eventTargetMatches:function(i,r){return i?st(i,r):!1},getActionFromEvent:function(i){if(!i.target)return"";var r=Ct(i.target,"["+q.ACTION_ATTRIBUTE+"]");return r&&r.getAttribute(q.ACTION_ATTRIBUTE)},getInitialFocusEl:function(){return t.getInitialFocusEl()},hasClass:function(i){return t.root.classList.contains(i)},isContentScrollable:function(){return cn(t.content)},notifyClosed:function(i){t.emit(q.CLOSED_EVENT,i?{action:i}:{})},notifyClosing:function(i){t.emit(q.CLOSING_EVENT,i?{action:i}:{})},notifyOpened:function(){t.emit(q.OPENED_EVENT,{})},notifyOpening:function(){t.emit(q.OPENING_EVENT,{})},releaseFocus:function(){t.focusTrap.releaseFocus()},removeBodyClass:function(i){document.body.classList.remove(i)},removeClass:function(i){t.root.classList.remove(i)},reverseButtons:function(){t.buttons.reverse(),t.buttons.forEach(function(i){i.parentElement.appendChild(i)})},trapFocus:function(){t.focusTrap.trapFocus()},registerContentEventHandler:function(i,r){t.content instanceof HTMLElement&&t.content.addEventListener(i,r)},deregisterContentEventHandler:function(i,r){t.content instanceof HTMLElement&&t.content.removeEventListener(i,r)},isScrollableContentAtTop:function(){return dn(t.content)},isScrollableContentAtBottom:function(){return un(t.content)},registerWindowEventHandler:function(i,r){window.addEventListener(i,r)},deregisterWindowEventHandler:function(i,r){window.removeEventListener(i,r)}};return new Oe(n)},e.prototype.getInitialFocusEl=function(){return this.root.querySelector("["+q.INITIAL_FOCUS_ATTRIBUTE+"]")},e}(L);/**
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
 */var Pt={ICON_BUTTON_ON:"mdc-icon-button--on",ROOT:"mdc-icon-button"},et={ARIA_LABEL:"aria-label",ARIA_PRESSED:"aria-pressed",DATA_ARIA_LABEL_OFF:"data-aria-label-off",DATA_ARIA_LABEL_ON:"data-aria-label-on",CHANGE_EVENT:"MDCIconButtonToggle:change"};/**
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
 */var Re=function(a){f(e,a);function e(t){var n=a.call(this,p(p({},e.defaultAdapter),t))||this;return n.hasToggledAriaLabel=!1,n}return Object.defineProperty(e,"cssClasses",{get:function(){return Pt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return et},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},hasClass:function(){return!1},notifyChange:function(){},removeClass:function(){},getAttr:function(){return null},setAttr:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this.adapter.getAttr(et.DATA_ARIA_LABEL_ON),n=this.adapter.getAttr(et.DATA_ARIA_LABEL_OFF);if(t&&n){if(this.adapter.getAttr(et.ARIA_PRESSED)!==null)throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled ARIA label.");this.hasToggledAriaLabel=!0}else this.adapter.setAttr(et.ARIA_PRESSED,String(this.isOn()))},e.prototype.handleClick=function(){this.toggle(),this.adapter.notifyChange({isOn:this.isOn()})},e.prototype.isOn=function(){return this.adapter.hasClass(Pt.ICON_BUTTON_ON)},e.prototype.toggle=function(t){if(t===void 0&&(t=!this.isOn()),t?this.adapter.addClass(Pt.ICON_BUTTON_ON):this.adapter.removeClass(Pt.ICON_BUTTON_ON),this.hasToggledAriaLabel){var n=t?this.adapter.getAttr(et.DATA_ARIA_LABEL_ON):this.adapter.getAttr(et.DATA_ARIA_LABEL_OFF);this.adapter.setAttr(et.ARIA_LABEL,n||"")}else this.adapter.setAttr(et.ARIA_PRESSED,""+t)},e}(R);/**
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
 */var fn=Re.strings,mn=function(a){f(e,a);function e(){var t=a!==null&&a.apply(this,arguments)||this;return t.rippleComponent=t.createRipple(),t}return e.attachTo=function(t){return new e(t)},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleClick=function(){t.foundation.handleClick()},this.listen("click",this.handleClick)},e.prototype.destroy=function(){this.unlisten("click",this.handleClick),this.ripple.destroy(),a.prototype.destroy.call(this)},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){t.root.classList.add(i)},hasClass:function(i){return t.root.classList.contains(i)},notifyChange:function(i){t.emit(fn.CHANGE_EVENT,i)},removeClass:function(i){t.root.classList.remove(i)},getAttr:function(i){return t.root.getAttribute(i)},setAttr:function(i,r){t.safeSetAttribute(t.root,i,r)}};return new Re(n)},Object.defineProperty(e.prototype,"ripple",{get:function(){return this.rippleComponent},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"on",{get:function(){return this.foundation.isOn()},set:function(t){this.foundation.toggle(t)},enumerable:!1,configurable:!0}),e.prototype.createRipple=function(){var t=new H(this.root);return t.unbounded=!0,t},e}(L);/**
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
 */var ot,nt,g={LIST_ITEM_ACTIVATED_CLASS:"mdc-list-item--activated",LIST_ITEM_CLASS:"mdc-list-item",LIST_ITEM_DISABLED_CLASS:"mdc-list-item--disabled",LIST_ITEM_SELECTED_CLASS:"mdc-list-item--selected",LIST_ITEM_TEXT_CLASS:"mdc-list-item__text",LIST_ITEM_PRIMARY_TEXT_CLASS:"mdc-list-item__primary-text",ROOT:"mdc-list"},vn=(ot={},ot[""+g.LIST_ITEM_ACTIVATED_CLASS]="mdc-list-item--activated",ot[""+g.LIST_ITEM_CLASS]="mdc-list-item",ot[""+g.LIST_ITEM_DISABLED_CLASS]="mdc-list-item--disabled",ot[""+g.LIST_ITEM_SELECTED_CLASS]="mdc-list-item--selected",ot[""+g.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-list-item__primary-text",ot[""+g.ROOT]="mdc-list",ot),ht=(nt={},nt[""+g.LIST_ITEM_ACTIVATED_CLASS]="mdc-deprecated-list-item--activated",nt[""+g.LIST_ITEM_CLASS]="mdc-deprecated-list-item",nt[""+g.LIST_ITEM_DISABLED_CLASS]="mdc-deprecated-list-item--disabled",nt[""+g.LIST_ITEM_SELECTED_CLASS]="mdc-deprecated-list-item--selected",nt[""+g.LIST_ITEM_TEXT_CLASS]="mdc-deprecated-list-item__text",nt[""+g.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-deprecated-list-item__primary-text",nt[""+g.ROOT]="mdc-deprecated-list",nt),S={ACTION_EVENT:"MDCList:action",SELECTION_CHANGE_EVENT:"MDCList:selectionChange",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",ARIA_INTERACTIVE_ROLES_SELECTOR:'[role="listbox"], [role="menu"]',ARIA_MULTI_SELECTABLE_SELECTOR:'[aria-multiselectable="true"]',CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:`
    .`+g.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+g.LIST_ITEM_CLASS+` a,
    .`+ht[g.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+ht[g.LIST_ITEM_CLASS]+` a
  `,DEPRECATED_SELECTOR:".mdc-deprecated-list",FOCUSABLE_CHILD_ELEMENTS:`
    .`+g.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+g.LIST_ITEM_CLASS+` a,
    .`+g.LIST_ITEM_CLASS+` input[type="radio"]:not(:disabled),
    .`+g.LIST_ITEM_CLASS+` input[type="checkbox"]:not(:disabled),
    .`+ht[g.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+ht[g.LIST_ITEM_CLASS]+` a,
    .`+ht[g.LIST_ITEM_CLASS]+` input[type="radio"]:not(:disabled),
    .`+ht[g.LIST_ITEM_CLASS]+` input[type="checkbox"]:not(:disabled)
  `,RADIO_SELECTOR:'input[type="radio"]',SELECTED_ITEM_SELECTOR:'[aria-selected="true"], [aria-current="true"]'},y={UNSET_INDEX:-1,TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS:300},gn="evolution";/**
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
 */var En=["input","button","textarea","select"],G=function(a){var e=a.target;if(e){var t=(""+e.tagName).toLowerCase();En.indexOf(t)===-1&&a.preventDefault()}};/**
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
 */function bn(){var a={bufferClearTimeout:0,currentFirstChar:"",sortedIndexCursor:0,typeaheadBuffer:""};return a}function In(a,e){for(var t=new Map,n=0;n<a;n++){var i=e(n).trim();if(i){var r=i[0].toLowerCase();t.has(r)||t.set(r,[]),t.get(r).push({text:i.toLowerCase(),index:n})}}return t.forEach(function(s){s.sort(function(o,l){return o.index-l.index})}),t}function ee(a,e){var t=a.nextChar,n=a.focusItemAtIndex,i=a.sortedIndexByFirstChar,r=a.focusedItemIndex,s=a.skipFocus,o=a.isItemAtIndexDisabled;clearTimeout(e.bufferClearTimeout),e.bufferClearTimeout=setTimeout(function(){we(e)},y.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS),e.typeaheadBuffer=e.typeaheadBuffer+t;var l;return e.typeaheadBuffer.length===1?l=yn(i,r,o,e):l=Tn(i,o,e),l!==-1&&!s&&n(l),l}function yn(a,e,t,n){var i=n.typeaheadBuffer[0],r=a.get(i);if(!r)return-1;if(i===n.currentFirstChar&&r[n.sortedIndexCursor].index===e){n.sortedIndexCursor=(n.sortedIndexCursor+1)%r.length;var s=r[n.sortedIndexCursor].index;if(!t(s))return s}n.currentFirstChar=i;var o=-1,l;for(l=0;l<r.length;l++)if(!t(r[l].index)){o=l;break}for(;l<r.length;l++)if(r[l].index>e&&!t(r[l].index)){o=l;break}return o!==-1?(n.sortedIndexCursor=o,r[n.sortedIndexCursor].index):-1}function Tn(a,e,t){var n=t.typeaheadBuffer[0],i=a.get(n);if(!i)return-1;var r=i[t.sortedIndexCursor];if(r.text.lastIndexOf(t.typeaheadBuffer,0)===0&&!e(r.index))return r.index;for(var s=(t.sortedIndexCursor+1)%i.length,o=-1;s!==t.sortedIndexCursor;){var l=i[s],d=l.text.lastIndexOf(t.typeaheadBuffer,0)===0,u=!e(l.index);if(d&&u){o=s;break}s=(s+1)%i.length}return o!==-1?(t.sortedIndexCursor=o,i[t.sortedIndexCursor].index):-1}function De(a){return a.typeaheadBuffer.length>0}function we(a){a.typeaheadBuffer=""}function ae(a,e){var t=a.event,n=a.isTargetListItem,i=a.focusedItemIndex,r=a.focusItemAtIndex,s=a.sortedIndexByFirstChar,o=a.isItemAtIndexDisabled,l=F(t)==="ArrowLeft",d=F(t)==="ArrowUp",u=F(t)==="ArrowRight",v=F(t)==="ArrowDown",m=F(t)==="Home",h=F(t)==="End",b=F(t)==="Enter",I=F(t)==="Spacebar";if(t.altKey||t.ctrlKey||t.metaKey||l||d||u||v||m||h||b)return-1;var _=!I&&t.key.length===1;if(_){G(t);var k={focusItemAtIndex:r,focusedItemIndex:i,nextChar:t.key.toLowerCase(),sortedIndexByFirstChar:s,skipFocus:!1,isItemAtIndexDisabled:o};return ee(k,e)}if(!I)return-1;n&&G(t);var T=n&&De(e);if(T){var k={focusItemAtIndex:r,focusedItemIndex:i,nextChar:" ",sortedIndexByFirstChar:s,skipFocus:!1,isItemAtIndexDisabled:o};return ee(k,e)}return-1}/**
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
 */function An(a){return a instanceof Array}var _n=["Alt","Control","Meta","Shift"];function se(a){var e=new Set(a?_n.filter(function(t){return a.getModifierState(t)}):[]);return function(t){return t.every(function(n){return e.has(n)})&&t.length===e.size}}var ne=function(a){f(e,a);function e(t){var n=a.call(this,p(p({},e.defaultAdapter),t))||this;return n.wrapFocus=!1,n.isVertical=!0,n.isSingleSelectionList=!1,n.areDisabledItemsFocusable=!1,n.selectedIndex=y.UNSET_INDEX,n.focusedItemIndex=y.UNSET_INDEX,n.useActivatedClass=!1,n.useSelectedAttr=!1,n.ariaCurrentAttrValue=null,n.isCheckboxList=!1,n.isRadioList=!1,n.lastSelectedIndex=null,n.hasTypeahead=!1,n.typeaheadState=bn(),n.sortedIndexByFirstChar=new Map,n}return Object.defineProperty(e,"strings",{get:function(){return S},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return g},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return y},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassForElementIndex:function(){},focusItemAtIndex:function(){},getAttributeForElementIndex:function(){return null},getFocusedElementIndex:function(){return 0},getListItemCount:function(){return 0},hasCheckboxAtIndex:function(){return!1},hasRadioAtIndex:function(){return!1},isCheckboxCheckedAtIndex:function(){return!1},isFocusInsideList:function(){return!1},isRootFocused:function(){return!1},listItemAtIndexHasClass:function(){return!1},notifyAction:function(){},notifySelectionChange:function(){},removeClassForElementIndex:function(){},setAttributeForElementIndex:function(){},setCheckedCheckboxOrRadioAtIndex:function(){},setTabIndexForListItemChildren:function(){},getPrimaryTextAtIndex:function(){return""}}},enumerable:!1,configurable:!0}),e.prototype.layout=function(){this.adapter.getListItemCount()!==0&&(this.adapter.hasCheckboxAtIndex(0)?(this.isCheckboxList=!0,this.selectedIndex=[]):this.adapter.hasRadioAtIndex(0)?this.isRadioList=!0:this.maybeInitializeSingleSelection(),this.hasTypeahead&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex()))},e.prototype.getFocusedItemIndex=function(){return this.focusedItemIndex},e.prototype.setWrapFocus=function(t){this.wrapFocus=t},e.prototype.setVerticalOrientation=function(t){this.isVertical=t},e.prototype.setSingleSelection=function(t){this.isSingleSelectionList=t,t&&(this.maybeInitializeSingleSelection(),this.selectedIndex=this.getSelectedIndexFromDOM())},e.prototype.setDisabledItemsFocusable=function(t){this.areDisabledItemsFocusable=t},e.prototype.maybeInitializeSingleSelection=function(){var t=this.getSelectedIndexFromDOM();if(t!==y.UNSET_INDEX){var n=this.adapter.listItemAtIndexHasClass(t,g.LIST_ITEM_ACTIVATED_CLASS);n&&this.setUseActivatedClass(!0),this.isSingleSelectionList=!0,this.selectedIndex=t}},e.prototype.getSelectedIndexFromDOM=function(){for(var t=y.UNSET_INDEX,n=this.adapter.getListItemCount(),i=0;i<n;i++){var r=this.adapter.listItemAtIndexHasClass(i,g.LIST_ITEM_SELECTED_CLASS),s=this.adapter.listItemAtIndexHasClass(i,g.LIST_ITEM_ACTIVATED_CLASS);if(r||s){t=i;break}}return t},e.prototype.setHasTypeahead=function(t){this.hasTypeahead=t,t&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex())},e.prototype.isTypeaheadInProgress=function(){return this.hasTypeahead&&De(this.typeaheadState)},e.prototype.setUseActivatedClass=function(t){this.useActivatedClass=t},e.prototype.setUseSelectedAttribute=function(t){this.useSelectedAttr=t},e.prototype.getSelectedIndex=function(){return this.selectedIndex},e.prototype.setSelectedIndex=function(t,n){n===void 0&&(n={}),this.isIndexValid(t)&&(this.isCheckboxList?this.setCheckboxAtIndex(t,n):this.isRadioList?this.setRadioAtIndex(t,n):this.setSingleSelectionAtIndex(t,n))},e.prototype.handleFocusIn=function(t){t>=0&&(this.focusedItemIndex=t,this.adapter.setAttributeForElementIndex(t,"tabindex","0"),this.adapter.setTabIndexForListItemChildren(t,"0"))},e.prototype.handleFocusOut=function(t){var n=this;t>=0&&(this.adapter.setAttributeForElementIndex(t,"tabindex","-1"),this.adapter.setTabIndexForListItemChildren(t,"-1")),setTimeout(function(){n.adapter.isFocusInsideList()||n.setTabindexToFirstSelectedOrFocusedItem()},0)},e.prototype.isIndexDisabled=function(t){return this.adapter.listItemAtIndexHasClass(t,g.LIST_ITEM_DISABLED_CLASS)},e.prototype.handleKeydown=function(t,n,i){var r=this,s,o=F(t)==="ArrowLeft",l=F(t)==="ArrowUp",d=F(t)==="ArrowRight",u=F(t)==="ArrowDown",v=F(t)==="Home",m=F(t)==="End",h=F(t)==="Enter",b=F(t)==="Spacebar",I=this.isVertical&&u||!this.isVertical&&d,_=this.isVertical&&l||!this.isVertical&&o,k=t.key==="A"||t.key==="a",T=se(t);if(this.adapter.isRootFocused()){if((_||m)&&T([]))t.preventDefault(),this.focusLastElement();else if((I||v)&&T([]))t.preventDefault(),this.focusFirstElement();else if(_&&T(["Shift"])&&this.isCheckboxList){t.preventDefault();var B=this.focusLastElement();B!==-1&&this.setSelectedIndexOnAction(B,!1)}else if(I&&T(["Shift"])&&this.isCheckboxList){t.preventDefault();var B=this.focusFirstElement();B!==-1&&this.setSelectedIndexOnAction(B,!1)}if(this.hasTypeahead){var D={event:t,focusItemAtIndex:function(Lt){r.focusItemAtIndex(Lt)},focusedItemIndex:-1,isTargetListItem:n,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(Lt){return r.isIndexDisabled(Lt)}};ae(D,this.typeaheadState)}return}var C=this.adapter.getFocusedElementIndex();if(!(C===-1&&(C=i,C<0))){if(I&&T([]))G(t),this.focusNextElement(C);else if(_&&T([]))G(t),this.focusPrevElement(C);else if(I&&T(["Shift"])&&this.isCheckboxList){G(t);var B=this.focusNextElement(C);B!==-1&&this.setSelectedIndexOnAction(B,!1)}else if(_&&T(["Shift"])&&this.isCheckboxList){G(t);var B=this.focusPrevElement(C);B!==-1&&this.setSelectedIndexOnAction(B,!1)}else if(v&&T([]))G(t),this.focusFirstElement();else if(m&&T([]))G(t),this.focusLastElement();else if(v&&T(["Control","Shift"])&&this.isCheckboxList){if(G(t),this.isIndexDisabled(C))return;this.focusFirstElement(),this.toggleCheckboxRange(0,C,C)}else if(m&&T(["Control","Shift"])&&this.isCheckboxList){if(G(t),this.isIndexDisabled(C))return;this.focusLastElement(),this.toggleCheckboxRange(C,this.adapter.getListItemCount()-1,C)}else if(k&&T(["Control"])&&this.isCheckboxList)t.preventDefault(),this.checkboxListToggleAll(this.selectedIndex===y.UNSET_INDEX?[]:this.selectedIndex,!0);else if((h||b)&&(T([])||T(["Alt"]))){if(n){var ct=t.target;if(ct&&ct.tagName==="A"&&h||(G(t),this.isIndexDisabled(C)))return;this.isTypeaheadInProgress()||(this.isSelectableList()&&this.setSelectedIndexOnAction(C,!1),this.adapter.notifyAction(C))}}else if((h||b)&&T(["Shift"])&&this.isCheckboxList){var ct=t.target;if(ct&&ct.tagName==="A"&&h||(G(t),this.isIndexDisabled(C)))return;this.isTypeaheadInProgress()||(this.toggleCheckboxRange((s=this.lastSelectedIndex)!==null&&s!==void 0?s:C,C,C),this.adapter.notifyAction(C))}if(this.hasTypeahead){var D={event:t,focusItemAtIndex:function(xt){r.focusItemAtIndex(xt)},focusedItemIndex:this.focusedItemIndex,isTargetListItem:n,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(xt){return r.isIndexDisabled(xt)}};ae(D,this.typeaheadState)}}},e.prototype.handleClick=function(t,n,i){var r,s=se(i);t!==y.UNSET_INDEX&&(this.isIndexDisabled(t)||(s([])?(this.isSelectableList()&&this.setSelectedIndexOnAction(t,n),this.adapter.notifyAction(t)):this.isCheckboxList&&s(["Shift"])&&(this.toggleCheckboxRange((r=this.lastSelectedIndex)!==null&&r!==void 0?r:t,t,t),this.adapter.notifyAction(t))))},e.prototype.focusNextElement=function(t){var n=this.adapter.getListItemCount(),i=t,r=null;do{if(i++,i>=n)if(this.wrapFocus)i=0;else return t;if(i===r)return-1;r=r??i}while(!this.areDisabledItemsFocusable&&this.isIndexDisabled(i));return this.focusItemAtIndex(i),i},e.prototype.focusPrevElement=function(t){var n=this.adapter.getListItemCount(),i=t,r=null;do{if(i--,i<0)if(this.wrapFocus)i=n-1;else return t;if(i===r)return-1;r=r??i}while(!this.areDisabledItemsFocusable&&this.isIndexDisabled(i));return this.focusItemAtIndex(i),i},e.prototype.focusFirstElement=function(){return this.focusNextElement(-1)},e.prototype.focusLastElement=function(){return this.focusPrevElement(this.adapter.getListItemCount())},e.prototype.focusInitialElement=function(){var t=this.getFirstSelectedOrFocusedItemIndex();return t!==y.UNSET_INDEX&&this.focusItemAtIndex(t),t},e.prototype.setEnabled=function(t,n){this.isIndexValid(t,!1)&&(n?(this.adapter.removeClassForElementIndex(t,g.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(t,S.ARIA_DISABLED,"false")):(this.adapter.addClassForElementIndex(t,g.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(t,S.ARIA_DISABLED,"true")))},e.prototype.setSingleSelectionAtIndex=function(t,n){if(n===void 0&&(n={}),!(this.selectedIndex===t&&!n.forceUpdate)){var i=g.LIST_ITEM_SELECTED_CLASS;this.useActivatedClass&&(i=g.LIST_ITEM_ACTIVATED_CLASS),this.selectedIndex!==y.UNSET_INDEX&&this.adapter.removeClassForElementIndex(this.selectedIndex,i),this.setAriaForSingleSelectionAtIndex(t),this.setTabindexAtIndex(t),t!==y.UNSET_INDEX&&this.adapter.addClassForElementIndex(t,i),this.selectedIndex=t,n.isUserInteraction&&!n.forceUpdate&&this.adapter.notifySelectionChange([t])}},e.prototype.setAriaForSingleSelectionAtIndex=function(t){this.selectedIndex===y.UNSET_INDEX&&t!==y.UNSET_INDEX&&(this.ariaCurrentAttrValue=this.adapter.getAttributeForElementIndex(t,S.ARIA_CURRENT));var n=this.ariaCurrentAttrValue!==null,i=n?S.ARIA_CURRENT:S.ARIA_SELECTED;if(this.selectedIndex!==y.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,i,"false"),t!==y.UNSET_INDEX){var r=n?this.ariaCurrentAttrValue:"true";this.adapter.setAttributeForElementIndex(t,i,r)}},e.prototype.getSelectionAttribute=function(){return this.useSelectedAttr?S.ARIA_SELECTED:S.ARIA_CHECKED},e.prototype.setRadioAtIndex=function(t,n){n===void 0&&(n={});var i=this.getSelectionAttribute();this.adapter.setCheckedCheckboxOrRadioAtIndex(t,!0),!(this.selectedIndex===t&&!n.forceUpdate)&&(this.selectedIndex!==y.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,i,"false"),this.adapter.setAttributeForElementIndex(t,i,"true"),this.selectedIndex=t,n.isUserInteraction&&!n.forceUpdate&&this.adapter.notifySelectionChange([t]))},e.prototype.setCheckboxAtIndex=function(t,n){n===void 0&&(n={});for(var i=this.selectedIndex,r=n.isUserInteraction?new Set(i===y.UNSET_INDEX?[]:i):null,s=this.getSelectionAttribute(),o=[],l=0;l<this.adapter.getListItemCount();l++)if(!(n.omitDisabledItems&&this.isIndexDisabled(l))){var d=r==null?void 0:r.has(l),u=t.indexOf(l)>=0;u!==d&&o.push(l),this.adapter.setCheckedCheckboxOrRadioAtIndex(l,u),this.adapter.setAttributeForElementIndex(l,s,u?"true":"false")}this.selectedIndex=n.omitDisabledItems?this.resolveSelectedIndices(t):t,n.isUserInteraction&&o.length&&this.adapter.notifySelectionChange(o)},e.prototype.resolveSelectedIndices=function(t){var n=this,i=this.selectedIndex===y.UNSET_INDEX?[]:this.selectedIndex,r=i.filter(function(l){return n.isIndexDisabled(l)}),s=t.filter(function(l){return!n.isIndexDisabled(l)}),o=lt([],J(new Set(lt(lt([],J(s)),J(r)))));return o.sort(function(l,d){return l-d})},e.prototype.toggleCheckboxRange=function(t,n,i){this.lastSelectedIndex=i;for(var r=new Set(this.selectedIndex===y.UNSET_INDEX?[]:this.selectedIndex),s=!(r!=null&&r.has(i)),o=J([t,n].sort(),2),l=o[0],d=o[1],u=this.getSelectionAttribute(),v=[],m=l;m<=d;m++)if(!this.isIndexDisabled(m)){var h=r.has(m);s!==h&&(v.push(m),this.adapter.setCheckedCheckboxOrRadioAtIndex(m,s),this.adapter.setAttributeForElementIndex(m,u,""+s),s?r.add(m):r.delete(m))}v.length&&(this.selectedIndex=lt([],J(r)),this.adapter.notifySelectionChange(v))},e.prototype.setTabindexAtIndex=function(t){this.focusedItemIndex===y.UNSET_INDEX&&t!==0&&t!==y.UNSET_INDEX?this.adapter.setAttributeForElementIndex(0,"tabindex","-1"):this.focusedItemIndex>=0&&this.focusedItemIndex!==t&&this.adapter.setAttributeForElementIndex(this.focusedItemIndex,"tabindex","-1"),!(this.selectedIndex instanceof Array)&&this.selectedIndex!==t&&this.focusedItemIndex!==y.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,"tabindex","-1"),t!==y.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(t,"tabindex","0")},e.prototype.isSelectableList=function(){return this.isSingleSelectionList||this.isCheckboxList||this.isRadioList},e.prototype.setTabindexToFirstSelectedOrFocusedItem=function(){var t=this.getFirstSelectedOrFocusedItemIndex();this.setTabindexAtIndex(t)},e.prototype.getFirstSelectedOrFocusedItemIndex=function(){var t,n,i=this.getFirstEnabledItem();if(this.adapter.getListItemCount()===0)return y.UNSET_INDEX;if(!this.isSelectableList())return Math.max(this.focusedItemIndex,i);if(typeof this.selectedIndex=="number"&&this.selectedIndex!==y.UNSET_INDEX)return this.areDisabledItemsFocusable&&this.isIndexDisabled(this.selectedIndex)?i:this.selectedIndex;if(An(this.selectedIndex)&&this.selectedIndex.length>0){var r=lt([],J(this.selectedIndex)).sort(function(d,u){return d-u});try{for(var s=V(r),o=s.next();!o.done;o=s.next()){var l=o.value;if(!(this.isIndexDisabled(l)&&!this.areDisabledItemsFocusable))return l}}catch(d){t={error:d}}finally{try{o&&!o.done&&(n=s.return)&&n.call(s)}finally{if(t)throw t.error}}}return i},e.prototype.getFirstEnabledItem=function(){for(var t=this.adapter.getListItemCount(),n=0;n<t&&this.isIndexDisabled(n);)n++;return n===t?y.UNSET_INDEX:n},e.prototype.isIndexValid=function(t,n){var i=this;if(n===void 0&&(n=!0),t instanceof Array){if(!this.isCheckboxList&&n)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");return t.length===0?!0:t.some(function(r){return i.isIndexInRange(r)})}else if(typeof t=="number"){if(this.isCheckboxList&&n)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+t);return this.isIndexInRange(t)||this.isSingleSelectionList&&t===y.UNSET_INDEX}else return!1},e.prototype.isIndexInRange=function(t){var n=this.adapter.getListItemCount();return t>=0&&t<n},e.prototype.setSelectedIndexOnAction=function(t,n){this.lastSelectedIndex=t,this.isCheckboxList?(this.toggleCheckboxAtIndex(t,n),this.adapter.notifySelectionChange([t])):this.setSelectedIndex(t,{isUserInteraction:!0})},e.prototype.toggleCheckboxAtIndex=function(t,n){var i=this.getSelectionAttribute(),r=this.adapter.isCheckboxCheckedAtIndex(t),s;n?s=r:(s=!r,this.adapter.setCheckedCheckboxOrRadioAtIndex(t,s)),this.adapter.setAttributeForElementIndex(t,i,s?"true":"false");var o=this.selectedIndex===y.UNSET_INDEX?[]:this.selectedIndex.slice();s?o.push(t):o=o.filter(function(l){return l!==t}),this.selectedIndex=o},e.prototype.focusItemAtIndex=function(t){this.adapter.focusItemAtIndex(t),this.focusedItemIndex=t},e.prototype.getEnabledListItemCount=function(){for(var t=this.adapter.getListItemCount(),n=0,i=0;i<t;i++)this.isIndexDisabled(i)||n++;return n},e.prototype.checkboxListToggleAll=function(t,n){var i=this,r=this.getEnabledListItemCount(),s=this.adapter.getListItemCount(),o=t.filter(function(u){return!i.isIndexDisabled(u)});if(o.length>=r)this.setCheckboxAtIndex([],{isUserInteraction:n,omitDisabledItems:!0});else{for(var l=[],d=0;d<s;d++)(!this.isIndexDisabled(d)||t.indexOf(d)>-1)&&l.push(d);this.setCheckboxAtIndex(l,{isUserInteraction:n,omitDisabledItems:!0})}},e.prototype.typeaheadMatchItem=function(t,n,i){var r=this;i===void 0&&(i=!1);var s={focusItemAtIndex:function(o){r.focusItemAtIndex(o)},focusedItemIndex:n||this.focusedItemIndex,nextChar:t,sortedIndexByFirstChar:this.sortedIndexByFirstChar,skipFocus:i,isItemAtIndexDisabled:function(o){return r.isIndexDisabled(o)}};return ee(s,this.typeaheadState)},e.prototype.typeaheadInitSortedIndex=function(){return In(this.adapter.getListItemCount(),this.adapter.getPrimaryTextAtIndex)},e.prototype.clearTypeaheadBuffer=function(){we(this.typeaheadState)},e}(R);/**
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
 */var Me=function(a){f(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return Object.defineProperty(e.prototype,"vertical",{set:function(t){this.foundation.setVerticalOrientation(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"listElements",{get:function(){return Array.from(this.root.querySelectorAll("."+this.classNameMap[g.LIST_ITEM_CLASS]))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"wrapFocus",{set:function(t){this.foundation.setWrapFocus(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"typeaheadInProgress",{get:function(){return this.foundation.isTypeaheadInProgress()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"hasTypeahead",{set:function(t){this.foundation.setHasTypeahead(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"singleSelection",{set:function(t){this.foundation.setSingleSelection(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"disabledItemsFocusable",{set:function(t){this.foundation.setDisabledItemsFocusable(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"selectedIndex",{get:function(){return this.foundation.getSelectedIndex()},set:function(t){this.foundation.setSelectedIndex(t)},enumerable:!1,configurable:!0}),e.attachTo=function(t){return new e(t)},e.prototype.initialSyncWithDOM=function(){this.isEvolutionEnabled=gn in this.root.dataset,this.isEvolutionEnabled?this.classNameMap=vn:st(this.root,S.DEPRECATED_SELECTOR)?this.classNameMap=ht:this.classNameMap=Object.values(g).reduce(function(t,n){return t[n]=n,t},{}),this.handleClick=this.handleClickEvent.bind(this),this.handleKeydown=this.handleKeydownEvent.bind(this),this.focusInEventListener=this.handleFocusInEvent.bind(this),this.focusOutEventListener=this.handleFocusOutEvent.bind(this),this.listen("keydown",this.handleKeydown),this.listen("click",this.handleClick),this.listen("focusin",this.focusInEventListener),this.listen("focusout",this.focusOutEventListener),this.layout(),this.initializeListType(),this.ensureFocusable()},e.prototype.destroy=function(){this.unlisten("keydown",this.handleKeydown),this.unlisten("click",this.handleClick),this.unlisten("focusin",this.focusInEventListener),this.unlisten("focusout",this.focusOutEventListener)},e.prototype.layout=function(){var t=this.root.getAttribute(S.ARIA_ORIENTATION);this.vertical=t!==S.ARIA_ORIENTATION_HORIZONTAL;var n="."+this.classNameMap[g.LIST_ITEM_CLASS]+":not([tabindex])",i=S.FOCUSABLE_CHILD_ELEMENTS,r=this.root.querySelectorAll(n);r.length&&Array.prototype.forEach.call(r,function(o){o.setAttribute("tabindex","-1")});var s=this.root.querySelectorAll(i);s.length&&Array.prototype.forEach.call(s,function(o){o.setAttribute("tabindex","-1")}),this.isEvolutionEnabled&&this.foundation.setUseSelectedAttribute(!0),this.foundation.layout()},e.prototype.getPrimaryText=function(t){var n,i=t.querySelector("."+this.classNameMap[g.LIST_ITEM_PRIMARY_TEXT_CLASS]);if(this.isEvolutionEnabled||i)return(n=i==null?void 0:i.textContent)!==null&&n!==void 0?n:"";var r=t.querySelector("."+this.classNameMap[g.LIST_ITEM_TEXT_CLASS]);return r&&r.textContent||""},e.prototype.initializeListType=function(){var t=this;if(this.isInteractive=st(this.root,S.ARIA_INTERACTIVE_ROLES_SELECTOR),this.isEvolutionEnabled&&this.isInteractive){var n=Array.from(this.root.querySelectorAll(S.SELECTED_ITEM_SELECTOR),function(o){return t.listElements.indexOf(o)});st(this.root,S.ARIA_MULTI_SELECTABLE_SELECTOR)?this.selectedIndex=n:n.length>0&&(this.selectedIndex=n[0]);return}var i=this.root.querySelectorAll(S.ARIA_ROLE_CHECKBOX_SELECTOR),r=this.root.querySelector(S.ARIA_CHECKED_RADIO_SELECTOR);if(i.length){var s=this.root.querySelectorAll(S.ARIA_CHECKED_CHECKBOX_SELECTOR);this.selectedIndex=Array.from(s,function(o){return t.listElements.indexOf(o)})}else r&&(this.selectedIndex=this.listElements.indexOf(r))},e.prototype.setEnabled=function(t,n){this.foundation.setEnabled(t,n)},e.prototype.typeaheadMatchItem=function(t,n){return this.foundation.typeaheadMatchItem(t,n,!0)},e.prototype.getDefaultFoundation=function(){var t=this,n={addClassForElementIndex:function(i,r){var s=t.listElements[i];s&&s.classList.add(t.classNameMap[r])},focusItemAtIndex:function(i){var r;(r=t.listElements[i])===null||r===void 0||r.focus()},getAttributeForElementIndex:function(i,r){return t.listElements[i].getAttribute(r)},getFocusedElementIndex:function(){return t.listElements.indexOf(document.activeElement)},getListItemCount:function(){return t.listElements.length},getPrimaryTextAtIndex:function(i){return t.getPrimaryText(t.listElements[i])},hasCheckboxAtIndex:function(i){var r=t.listElements[i];return!!r.querySelector(S.CHECKBOX_SELECTOR)},hasRadioAtIndex:function(i){var r=t.listElements[i];return!!r.querySelector(S.RADIO_SELECTOR)},isCheckboxCheckedAtIndex:function(i){var r=t.listElements[i],s=r.querySelector(S.CHECKBOX_SELECTOR);return s.checked},isFocusInsideList:function(){return t.root!==document.activeElement&&t.root.contains(document.activeElement)},isRootFocused:function(){return document.activeElement===t.root},listItemAtIndexHasClass:function(i,r){return t.listElements[i].classList.contains(t.classNameMap[r])},notifyAction:function(i){t.emit(S.ACTION_EVENT,{index:i},!0)},notifySelectionChange:function(i){t.emit(S.SELECTION_CHANGE_EVENT,{changedIndices:i},!0)},removeClassForElementIndex:function(i,r){var s=t.listElements[i];s&&s.classList.remove(t.classNameMap[r])},setAttributeForElementIndex:function(i,r,s){var o=t.listElements[i];o&&t.safeSetAttribute(o,r,s)},setCheckedCheckboxOrRadioAtIndex:function(i,r){var s=t.listElements[i],o=s.querySelector(S.CHECKBOX_RADIO_SELECTOR);o.checked=r;var l=document.createEvent("Event");l.initEvent("change",!0,!0),o.dispatchEvent(l)},setTabIndexForListItemChildren:function(i,r){var s=t.listElements[i],o=S.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX;Array.prototype.forEach.call(s.querySelectorAll(o),function(l){l.tabIndex=Number(r)})}};return new ne(n)},e.prototype.ensureFocusable=function(){if(this.isEvolutionEnabled&&this.isInteractive&&!this.root.querySelector("."+this.classNameMap[g.LIST_ITEM_CLASS]+'[tabindex="0"]')){var t=this.initialFocusIndex();t!==-1&&(this.listElements[t].tabIndex=0)}},e.prototype.initialFocusIndex=function(){if(this.selectedIndex instanceof Array&&this.selectedIndex.length>0)return this.selectedIndex[0];if(typeof this.selectedIndex=="number"&&this.selectedIndex!==y.UNSET_INDEX)return this.selectedIndex;var t=this.root.querySelector("."+this.classNameMap[g.LIST_ITEM_CLASS]+":not(."+this.classNameMap[g.LIST_ITEM_DISABLED_CLASS]+")");return t===null?-1:this.getListItemIndex(t)},e.prototype.getListItemIndex=function(t){var n=Ct(t,"."+this.classNameMap[g.LIST_ITEM_CLASS]+", ."+this.classNameMap[g.ROOT]);return n&&st(n,"."+this.classNameMap[g.LIST_ITEM_CLASS])?this.listElements.indexOf(n):-1},e.prototype.handleFocusInEvent=function(t){var n=this.getListItemIndex(t.target);this.foundation.handleFocusIn(n)},e.prototype.handleFocusOutEvent=function(t){var n=this.getListItemIndex(t.target);this.foundation.handleFocusOut(n)},e.prototype.handleKeydownEvent=function(t){var n=this.getListItemIndex(t.target),i=t.target;this.foundation.handleKeydown(t,i.classList.contains(this.classNameMap[g.LIST_ITEM_CLASS]),n)},e.prototype.handleClickEvent=function(t){var n=this.getListItemIndex(t.target),i=t.target;this.foundation.handleClick(n,st(i,S.CHECKBOX_RADIO_SELECTOR),t)},e}(L);/**
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
 */var wt={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",IS_OPEN_BELOW:"mdc-menu-surface--is-open-below",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"},tt={CLOSED_EVENT:"MDCMenuSurface:closed",CLOSING_EVENT:"MDCMenuSurface:closing",OPENED_EVENT:"MDCMenuSurface:opened",OPENING_EVENT:"MDCMenuSurface:opening",FOCUSABLE_ELEMENTS:["button:not(:disabled)",'[href]:not([aria-disabled="true"])',"input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)",'[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")},Rt={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67,TOUCH_EVENT_WAIT_MS:30},w;(function(a){a[a.BOTTOM=1]="BOTTOM",a[a.CENTER=2]="CENTER",a[a.RIGHT=4]="RIGHT",a[a.FLIP_RTL=8]="FLIP_RTL"})(w||(w={}));var At;(function(a){a[a.TOP_LEFT=0]="TOP_LEFT",a[a.TOP_RIGHT=4]="TOP_RIGHT",a[a.BOTTOM_LEFT=1]="BOTTOM_LEFT",a[a.BOTTOM_RIGHT=5]="BOTTOM_RIGHT",a[a.TOP_START=8]="TOP_START",a[a.TOP_END=12]="TOP_END",a[a.BOTTOM_START=9]="BOTTOM_START",a[a.BOTTOM_END=13]="BOTTOM_END"})(At||(At={}));/**
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
 */var ft=function(a){f(e,a);function e(t){var n=a.call(this,p(p({},e.defaultAdapter),t))||this;return n.isSurfaceOpen=!1,n.isQuickOpen=!1,n.isHoistedElement=!1,n.isFixedPosition=!1,n.isHorizontallyCenteredOnViewport=!1,n.maxHeight=0,n.openBottomBias=0,n.openAnimationEndTimerId=0,n.closeAnimationEndTimerId=0,n.animationRequestId=0,n.anchorCorner=At.TOP_START,n.originCorner=At.TOP_START,n.anchorMargin={top:0,right:0,bottom:0,left:0},n.position={x:0,y:0},n}return Object.defineProperty(e,"cssClasses",{get:function(){return wt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return tt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Rt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Corner",{get:function(){return At},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},hasAnchor:function(){return!1},isElementInContainer:function(){return!1},isFocused:function(){return!1},isRtl:function(){return!1},getInnerDimensions:function(){return{height:0,width:0}},getAnchorDimensions:function(){return null},getViewportDimensions:function(){return{height:0,width:0}},getBodyDimensions:function(){return{height:0,width:0}},getWindowScroll:function(){return{x:0,y:0}},setPosition:function(){},setMaxHeight:function(){},setTransformOrigin:function(){},saveFocus:function(){},restoreFocus:function(){},notifyClose:function(){},notifyClosing:function(){},notifyOpen:function(){},notifyOpening:function(){},registerWindowEventHandler:function(){},deregisterWindowEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=e.cssClasses,n=t.ROOT,i=t.OPEN;if(!this.adapter.hasClass(n))throw new Error(n+" class required in root element.");this.adapter.hasClass(i)&&(this.isSurfaceOpen=!0),this.resizeListener=this.handleResize.bind(this),this.adapter.registerWindowEventHandler("resize",this.resizeListener)},e.prototype.destroy=function(){clearTimeout(this.openAnimationEndTimerId),clearTimeout(this.closeAnimationEndTimerId),cancelAnimationFrame(this.animationRequestId),this.adapter.deregisterWindowEventHandler("resize",this.resizeListener)},e.prototype.setAnchorCorner=function(t){this.anchorCorner=t},e.prototype.flipCornerHorizontally=function(){this.originCorner=this.originCorner^w.RIGHT},e.prototype.setAnchorMargin=function(t){this.anchorMargin.top=t.top||0,this.anchorMargin.right=t.right||0,this.anchorMargin.bottom=t.bottom||0,this.anchorMargin.left=t.left||0},e.prototype.setIsHoisted=function(t){this.isHoistedElement=t},e.prototype.setFixedPosition=function(t){this.isFixedPosition=t},e.prototype.isFixed=function(){return this.isFixedPosition},e.prototype.setAbsolutePosition=function(t,n){this.position.x=this.isFinite(t)?t:0,this.position.y=this.isFinite(n)?n:0},e.prototype.setIsHorizontallyCenteredOnViewport=function(t){this.isHorizontallyCenteredOnViewport=t},e.prototype.setQuickOpen=function(t){this.isQuickOpen=t},e.prototype.setMaxHeight=function(t){this.maxHeight=t},e.prototype.setOpenBottomBias=function(t){this.openBottomBias=t},e.prototype.isOpen=function(){return this.isSurfaceOpen},e.prototype.open=function(){var t=this;this.isSurfaceOpen||(this.adapter.notifyOpening(),this.adapter.saveFocus(),this.isQuickOpen?(this.isSurfaceOpen=!0,this.adapter.addClass(e.cssClasses.OPEN),this.dimensions=this.adapter.getInnerDimensions(),this.autoposition(),this.adapter.notifyOpen()):(this.adapter.addClass(e.cssClasses.ANIMATING_OPEN),this.animationRequestId=requestAnimationFrame(function(){t.dimensions=t.adapter.getInnerDimensions(),t.autoposition(),t.adapter.addClass(e.cssClasses.OPEN),t.openAnimationEndTimerId=setTimeout(function(){t.openAnimationEndTimerId=0,t.adapter.removeClass(e.cssClasses.ANIMATING_OPEN),t.adapter.notifyOpen()},Rt.TRANSITION_OPEN_DURATION)}),this.isSurfaceOpen=!0),this.adapter.registerWindowEventHandler("resize",this.resizeListener))},e.prototype.close=function(t){var n=this;if(t===void 0&&(t=!1),!!this.isSurfaceOpen){if(this.adapter.notifyClosing(),this.adapter.deregisterWindowEventHandler("resize",this.resizeListener),this.isQuickOpen){this.isSurfaceOpen=!1,t||this.maybeRestoreFocus(),this.adapter.removeClass(e.cssClasses.OPEN),this.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),this.adapter.notifyClose();return}this.adapter.addClass(e.cssClasses.ANIMATING_CLOSED),requestAnimationFrame(function(){n.adapter.removeClass(e.cssClasses.OPEN),n.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),n.closeAnimationEndTimerId=setTimeout(function(){n.closeAnimationEndTimerId=0,n.adapter.removeClass(e.cssClasses.ANIMATING_CLOSED),n.adapter.notifyClose()},Rt.TRANSITION_CLOSE_DURATION)}),this.isSurfaceOpen=!1,t||this.maybeRestoreFocus()}},e.prototype.handleBodyClick=function(t){var n=t.target;this.adapter.isElementInContainer(n)||this.close()},e.prototype.handleKeydown=function(t){var n=t.keyCode,i=t.key,r=i==="Escape"||n===27;r&&this.close()},e.prototype.handleResize=function(){this.dimensions=this.adapter.getInnerDimensions(),this.autoposition()},e.prototype.autoposition=function(){var t;this.measurements=this.getAutoLayoutmeasurements();var n=this.getoriginCorner(),i=this.getMenuSurfaceMaxHeight(n),r=this.hasBit(n,w.BOTTOM)?"bottom":"top",s=this.hasBit(n,w.RIGHT)?"right":"left",o=this.getHorizontalOriginOffset(n),l=this.getVerticalOriginOffset(n),d=this.measurements,u=d.anchorSize,v=d.surfaceSize,m=(t={},t[s]=o,t[r]=l,t);u.width/v.width>Rt.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(s="center"),(this.isHoistedElement||this.isFixedPosition)&&this.adjustPositionForHoistedElement(m),this.adapter.setTransformOrigin(s+" "+r),this.adapter.setPosition(m),this.adapter.setMaxHeight(i?i+"px":""),this.hasBit(n,w.BOTTOM)||this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW)},e.prototype.getAutoLayoutmeasurements=function(){var t=this.adapter.getAnchorDimensions(),n=this.adapter.getBodyDimensions(),i=this.adapter.getViewportDimensions(),r=this.adapter.getWindowScroll();return t||(t={top:this.position.y,right:this.position.x,bottom:this.position.y,left:this.position.x,width:0,height:0}),{anchorSize:t,bodySize:n,surfaceSize:this.dimensions,viewportDistance:{top:t.top,right:i.width-t.right,bottom:i.height-t.bottom,left:t.left},viewportSize:i,windowScroll:r}},e.prototype.getoriginCorner=function(){var t=this.originCorner,n=this.measurements,i=n.viewportDistance,r=n.anchorSize,s=n.surfaceSize,o=e.numbers.MARGIN_TO_EDGE,l=this.hasBit(this.anchorCorner,w.BOTTOM),d,u;l?(d=i.top-o+this.anchorMargin.bottom,u=i.bottom-o-this.anchorMargin.bottom):(d=i.top-o+this.anchorMargin.top,u=i.bottom-o+r.height-this.anchorMargin.top);var v=u-s.height>0;!v&&d>u+this.openBottomBias&&(t=this.setBit(t,w.BOTTOM));var m=this.adapter.isRtl(),h=this.hasBit(this.anchorCorner,w.FLIP_RTL),b=this.hasBit(this.anchorCorner,w.RIGHT)||this.hasBit(t,w.RIGHT),I=!1;m&&h?I=!b:I=b;var _,k;I?(_=i.left+r.width+this.anchorMargin.left,k=i.right-this.anchorMargin.left):(_=i.left+this.anchorMargin.left,k=i.right+r.width-this.anchorMargin.left);var T=_-s.width>0,B=k-s.width>0,D=this.hasBit(t,w.FLIP_RTL)&&this.hasBit(t,w.RIGHT);return B&&D&&m||!T&&D?t=this.unsetBit(t,w.RIGHT):(T&&I&&m||T&&!I&&b||!B&&_>=k)&&(t=this.setBit(t,w.RIGHT)),t},e.prototype.getMenuSurfaceMaxHeight=function(t){if(this.maxHeight>0)return this.maxHeight;var n=this.measurements.viewportDistance,i=0,r=this.hasBit(t,w.BOTTOM),s=this.hasBit(this.anchorCorner,w.BOTTOM),o=e.numbers.MARGIN_TO_EDGE;return r?(i=n.top+this.anchorMargin.top-o,s||(i+=this.measurements.anchorSize.height)):(i=n.bottom-this.anchorMargin.bottom+this.measurements.anchorSize.height-o,s&&(i-=this.measurements.anchorSize.height)),i},e.prototype.getHorizontalOriginOffset=function(t){var n=this.measurements.anchorSize,i=this.hasBit(t,w.RIGHT),r=this.hasBit(this.anchorCorner,w.RIGHT);if(i){var s=r?n.width-this.anchorMargin.left:this.anchorMargin.right;return this.isHoistedElement||this.isFixedPosition?s-(this.measurements.viewportSize.width-this.measurements.bodySize.width):s}return r?n.width-this.anchorMargin.right:this.anchorMargin.left},e.prototype.getVerticalOriginOffset=function(t){var n=this.measurements.anchorSize,i=this.hasBit(t,w.BOTTOM),r=this.hasBit(this.anchorCorner,w.BOTTOM),s=0;return i?s=r?n.height-this.anchorMargin.top:-this.anchorMargin.bottom:s=r?n.height+this.anchorMargin.bottom:this.anchorMargin.top,s},e.prototype.adjustPositionForHoistedElement=function(t){var n,i,r=this.measurements,s=r.windowScroll,o=r.viewportDistance,l=r.surfaceSize,d=r.viewportSize,u=Object.keys(t);try{for(var v=V(u),m=v.next();!m.done;m=v.next()){var h=m.value,b=t[h]||0;if(this.isHorizontallyCenteredOnViewport&&(h==="left"||h==="right")){t[h]=(d.width-l.width)/2;continue}b+=o[h],this.isFixedPosition||(h==="top"?b+=s.y:h==="bottom"?b-=s.y:h==="left"?b+=s.x:b-=s.x),t[h]=b}}catch(I){n={error:I}}finally{try{m&&!m.done&&(i=v.return)&&i.call(v)}finally{if(n)throw n.error}}},e.prototype.maybeRestoreFocus=function(){var t=this,n=this.adapter.isFocused(),i=this.adapter.getOwnerDocument?this.adapter.getOwnerDocument():document,r=i.activeElement&&this.adapter.isElementInContainer(i.activeElement);(n||r)&&setTimeout(function(){t.adapter.restoreFocus()},Rt.TOUCH_EVENT_WAIT_MS)},e.prototype.hasBit=function(t,n){return!!(t&n)},e.prototype.setBit=function(t,n){return t|n},e.prototype.unsetBit=function(t,n){return t^n},e.prototype.isFinite=function(t){return typeof t=="number"&&isFinite(t)},e}(R);/**
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
 */var Cn=function(a){f(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialSyncWithDOM=function(){var t=this,n=this.root.parentElement;this.anchorElement=n&&n.classList.contains(wt.ANCHOR)?n:null,this.root.classList.contains(wt.FIXED)&&this.setFixedPosition(!0),this.handleKeydown=function(i){t.foundation.handleKeydown(i)},this.handleBodyClick=function(i){t.foundation.handleBodyClick(i)},this.registerBodyClickListener=function(){document.body.addEventListener("click",t.handleBodyClick,{capture:!0})},this.deregisterBodyClickListener=function(){document.body.removeEventListener("click",t.handleBodyClick,{capture:!0})},this.listen("keydown",this.handleKeydown),this.listen(tt.OPENED_EVENT,this.registerBodyClickListener),this.listen(tt.CLOSED_EVENT,this.deregisterBodyClickListener)},e.prototype.destroy=function(){this.unlisten("keydown",this.handleKeydown),this.unlisten(tt.OPENED_EVENT,this.registerBodyClickListener),this.unlisten(tt.CLOSED_EVENT,this.deregisterBodyClickListener),a.prototype.destroy.call(this)},e.prototype.isOpen=function(){return this.foundation.isOpen()},e.prototype.open=function(){this.foundation.open()},e.prototype.close=function(t){t===void 0&&(t=!1),this.foundation.close(t)},Object.defineProperty(e.prototype,"quickOpen",{set:function(t){this.foundation.setQuickOpen(t)},enumerable:!1,configurable:!0}),e.prototype.setIsHoisted=function(t){this.foundation.setIsHoisted(t)},e.prototype.setMenuSurfaceAnchorElement=function(t){this.anchorElement=t},e.prototype.setFixedPosition=function(t){t?this.root.classList.add(wt.FIXED):this.root.classList.remove(wt.FIXED),this.foundation.setFixedPosition(t)},e.prototype.setAbsolutePosition=function(t,n){this.foundation.setAbsolutePosition(t,n),this.setIsHoisted(!0)},e.prototype.setAnchorCorner=function(t){this.foundation.setAnchorCorner(t)},e.prototype.setAnchorMargin=function(t){this.foundation.setAnchorMargin(t)},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){t.root.classList.add(i)},removeClass:function(i){t.root.classList.remove(i)},hasClass:function(i){return t.root.classList.contains(i)},hasAnchor:function(){return!!t.anchorElement},notifyClose:function(){t.emit(ft.strings.CLOSED_EVENT,{})},notifyClosing:function(){t.emit(ft.strings.CLOSING_EVENT,{})},notifyOpen:function(){t.emit(ft.strings.OPENED_EVENT,{})},notifyOpening:function(){t.emit(ft.strings.OPENING_EVENT,{})},isElementInContainer:function(i){return t.root.contains(i)},isRtl:function(){return getComputedStyle(t.root).getPropertyValue("direction")==="rtl"},setTransformOrigin:function(i){var r=te(window,"transform")+"-origin";t.root.style.setProperty(r,i)},isFocused:function(){return document.activeElement===t.root},saveFocus:function(){t.previousFocus=document.activeElement},restoreFocus:function(){t.root.contains(document.activeElement)&&t.previousFocus&&t.previousFocus.focus&&t.previousFocus.focus()},getInnerDimensions:function(){return{width:t.root.offsetWidth,height:t.root.offsetHeight}},getAnchorDimensions:function(){return t.anchorElement?t.anchorElement.getBoundingClientRect():null},getViewportDimensions:function(){return{width:window.innerWidth,height:window.innerHeight}},getBodyDimensions:function(){return{width:document.body.clientWidth,height:document.body.clientHeight}},getWindowScroll:function(){return{x:window.pageXOffset,y:window.pageYOffset}},setPosition:function(i){var r=t.root;r.style.left="left"in i?i.left+"px":"",r.style.right="right"in i?i.right+"px":"",r.style.top="top"in i?i.top+"px":"",r.style.bottom="bottom"in i?i.bottom+"px":""},setMaxHeight:function(i){t.root.style.maxHeight=i},registerWindowEventHandler:function(i,r){window.addEventListener(i,r)},deregisterWindowEventHandler:function(i,r){window.removeEventListener(i,r)}};return new ft(n)},e}(L);/**
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
 */var _t={MENU_SELECTED_LIST_ITEM:"mdc-menu-item--selected",MENU_SELECTION_GROUP:"mdc-menu__selection-group",ROOT:"mdc-menu"},z={ARIA_CHECKED_ATTR:"aria-checked",ARIA_DISABLED_ATTR:"aria-disabled",CHECKBOX_SELECTOR:'input[type="checkbox"]',LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",SELECTED_EVENT:"MDCMenu:selected",SKIP_RESTORE_FOCUS:"data-menu-item-skip-restore-focus"},Sn={FOCUS_ROOT_INDEX:-1},yt;(function(a){a[a.NONE=0]="NONE",a[a.LIST_ROOT=1]="LIST_ROOT",a[a.FIRST_ITEM=2]="FIRST_ITEM",a[a.LAST_ITEM=3]="LAST_ITEM"})(yt||(yt={}));/**
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
 */var Ln=function(a){f(e,a);function e(t){var n=a.call(this,p(p({},e.defaultAdapter),t))||this;return n.defaultFocusState=yt.LIST_ROOT,n.selectedIndex=-1,n}return Object.defineProperty(e,"cssClasses",{get:function(){return _t},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return z},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Sn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassToElementAtIndex:function(){},removeClassFromElementAtIndex:function(){},addAttributeToElementAtIndex:function(){},removeAttributeFromElementAtIndex:function(){},getAttributeFromElementAtIndex:function(){return null},elementContainsClass:function(){return!1},closeSurface:function(){},getElementIndex:function(){return-1},notifySelected:function(){},getMenuItemCount:function(){return 0},focusItemAtIndex:function(){},focusListRoot:function(){},getSelectedSiblingOfItemAtIndex:function(){return-1},isSelectableItemAtIndex:function(){return!1}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.adapter.closeSurface()},e.prototype.handleKeydown=function(t){var n=t.key,i=t.keyCode,r=n==="Tab"||i===9;r&&this.adapter.closeSurface(!0)},e.prototype.handleItemAction=function(t){var n=this.adapter.getElementIndex(t);if(!(n<0)){this.adapter.notifySelected({index:n});var i=this.adapter.getAttributeFromElementAtIndex(n,z.SKIP_RESTORE_FOCUS)==="true";this.adapter.closeSurface(i),this.adapter.isSelectableItemAtIndex(n)&&this.setSelectedIndex(n)}},e.prototype.handleMenuSurfaceOpened=function(){switch(this.defaultFocusState){case yt.FIRST_ITEM:this.adapter.focusItemAtIndex(0);break;case yt.LAST_ITEM:this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount()-1);break;case yt.NONE:break;default:this.adapter.focusListRoot();break}},e.prototype.setDefaultFocusState=function(t){this.defaultFocusState=t},e.prototype.getSelectedIndex=function(){return this.selectedIndex},e.prototype.setSelectedIndex=function(t){if(this.validatedIndex(t),!this.adapter.isSelectableItemAtIndex(t))throw new Error("MDCMenuFoundation: No selection group at specified index.");var n=this.adapter.getSelectedSiblingOfItemAtIndex(t);n>=0&&(this.adapter.removeAttributeFromElementAtIndex(n,z.ARIA_CHECKED_ATTR),this.adapter.removeClassFromElementAtIndex(n,_t.MENU_SELECTED_LIST_ITEM)),this.adapter.addClassToElementAtIndex(t,_t.MENU_SELECTED_LIST_ITEM),this.adapter.addAttributeToElementAtIndex(t,z.ARIA_CHECKED_ATTR,"true"),this.selectedIndex=t},e.prototype.setEnabled=function(t,n){this.validatedIndex(t),n?(this.adapter.removeClassFromElementAtIndex(t,g.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(t,z.ARIA_DISABLED_ATTR,"false")):(this.adapter.addClassToElementAtIndex(t,g.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(t,z.ARIA_DISABLED_ATTR,"true"))},e.prototype.validatedIndex=function(t){var n=this.adapter.getMenuItemCount(),i=t>=0&&t<n;if(!i)throw new Error("MDCMenuFoundation: No list item at specified index.")},e}(R);/**
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
 */var Ne=function(a){f(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t,n){t===void 0&&(t=function(i){return new Cn(i)}),n===void 0&&(n=function(i){return new Me(i)}),this.menuSurfaceFactory=t,this.listFactory=n},e.prototype.initialSyncWithDOM=function(){var t=this;this.menuSurface=this.menuSurfaceFactory(this.root);var n=this.root.querySelector(z.LIST_SELECTOR);n?(this.list=this.listFactory(n),this.list.wrapFocus=!0):this.list=null,this.handleKeydown=function(i){t.foundation.handleKeydown(i)},this.handleItemAction=function(i){t.foundation.handleItemAction(t.items[i.detail.index])},this.handleMenuSurfaceOpened=function(){t.foundation.handleMenuSurfaceOpened()},this.menuSurface.listen(ft.strings.OPENED_EVENT,this.handleMenuSurfaceOpened),this.listen("keydown",this.handleKeydown),this.listen(ne.strings.ACTION_EVENT,this.handleItemAction)},e.prototype.destroy=function(){this.list&&this.list.destroy(),this.menuSurface.destroy(),this.menuSurface.unlisten(ft.strings.OPENED_EVENT,this.handleMenuSurfaceOpened),this.unlisten("keydown",this.handleKeydown),this.unlisten(ne.strings.ACTION_EVENT,this.handleItemAction),a.prototype.destroy.call(this)},Object.defineProperty(e.prototype,"open",{get:function(){return this.menuSurface.isOpen()},set:function(t){t?this.menuSurface.open():this.menuSurface.close()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"wrapFocus",{get:function(){return this.list?this.list.wrapFocus:!1},set:function(t){this.list&&(this.list.wrapFocus=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"hasTypeahead",{set:function(t){this.list&&(this.list.hasTypeahead=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"typeaheadInProgress",{get:function(){return this.list?this.list.typeaheadInProgress:!1},enumerable:!1,configurable:!0}),e.prototype.typeaheadMatchItem=function(t,n){return this.list?this.list.typeaheadMatchItem(t,n):-1},e.prototype.layout=function(){this.list&&this.list.layout()},Object.defineProperty(e.prototype,"items",{get:function(){return this.list?this.list.listElements:[]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"singleSelection",{set:function(t){this.list&&(this.list.singleSelection=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"selectedIndex",{get:function(){return this.list?this.list.selectedIndex:y.UNSET_INDEX},set:function(t){this.list&&(this.list.selectedIndex=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"quickOpen",{set:function(t){this.menuSurface.quickOpen=t},enumerable:!1,configurable:!0}),e.prototype.setDefaultFocusState=function(t){this.foundation.setDefaultFocusState(t)},e.prototype.setAnchorCorner=function(t){this.menuSurface.setAnchorCorner(t)},e.prototype.setAnchorMargin=function(t){this.menuSurface.setAnchorMargin(t)},e.prototype.setSelectedIndex=function(t){this.foundation.setSelectedIndex(t)},e.prototype.setEnabled=function(t,n){this.foundation.setEnabled(t,n)},e.prototype.getOptionByIndex=function(t){var n=this.items;return t<n.length?this.items[t]:null},e.prototype.getPrimaryTextAtIndex=function(t){var n=this.getOptionByIndex(t);return n&&this.list&&this.list.getPrimaryText(n)||""},e.prototype.setFixedPosition=function(t){this.menuSurface.setFixedPosition(t)},e.prototype.setIsHoisted=function(t){this.menuSurface.setIsHoisted(t)},e.prototype.setAbsolutePosition=function(t,n){this.menuSurface.setAbsolutePosition(t,n)},e.prototype.setAnchorElement=function(t){this.menuSurface.anchorElement=t},e.prototype.getDefaultFoundation=function(){var t=this,n={addClassToElementAtIndex:function(i,r){var s=t.items;s[i].classList.add(r)},removeClassFromElementAtIndex:function(i,r){var s=t.items;s[i].classList.remove(r)},addAttributeToElementAtIndex:function(i,r,s){var o=t.items;t.safeSetAttribute(o[i],r,s)},removeAttributeFromElementAtIndex:function(i,r){var s=t.items;s[i].removeAttribute(r)},getAttributeFromElementAtIndex:function(i,r){var s=t.items;return s[i].getAttribute(r)},elementContainsClass:function(i,r){return i.classList.contains(r)},closeSurface:function(i){t.menuSurface.close(i)},getElementIndex:function(i){return t.items.indexOf(i)},notifySelected:function(i){t.emit(z.SELECTED_EVENT,{index:i.index,item:t.items[i.index]})},getMenuItemCount:function(){return t.items.length},focusItemAtIndex:function(i){t.items[i].focus()},focusListRoot:function(){t.root.querySelector(z.LIST_SELECTOR).focus()},isSelectableItemAtIndex:function(i){return!!Ct(t.items[i],"."+_t.MENU_SELECTION_GROUP)},getSelectedSiblingOfItemAtIndex:function(i){var r=Ct(t.items[i],"."+_t.MENU_SELECTION_GROUP),s=r.querySelector("."+_t.MENU_SELECTED_LIST_ITEM);return s?t.items.indexOf(s):-1}};return new Ln(n)},e}(L);/**
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
 */var xn={NATIVE_CONTROL_SELECTOR:".mdc-radio__native-control"},On={DISABLED:"mdc-radio--disabled",ROOT:"mdc-radio"};/**
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
 */var oe=function(a){f(e,a);function e(t){return a.call(this,p(p({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return On},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return xn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNativeControlDisabled:function(){}}},enumerable:!1,configurable:!0}),e.prototype.setDisabled=function(t){var n=e.cssClasses.DISABLED;this.adapter.setNativeControlDisabled(t),t?this.adapter.addClass(n):this.adapter.removeClass(n)},e}(R);/**
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
 */var Rn=function(a){f(e,a);function e(){var t=a!==null&&a.apply(this,arguments)||this;return t.rippleSurface=t.createRipple(),t}return e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"checked",{get:function(){return this.nativeControl.checked},set:function(t){this.nativeControl.checked=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"disabled",{get:function(){return this.nativeControl.disabled},set:function(t){this.foundation.setDisabled(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){return this.nativeControl.value},set:function(t){this.nativeControl.value=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"ripple",{get:function(){return this.rippleSurface},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.rippleSurface.destroy(),a.prototype.destroy.call(this)},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){t.root.classList.add(i)},removeClass:function(i){t.root.classList.remove(i)},setNativeControlDisabled:function(i){return t.nativeControl.disabled=i}};return new oe(n)},e.prototype.createRipple=function(){var t=this,n=p(p({},H.createAdapter(this)),{registerInteractionHandler:function(i,r){t.nativeControl.addEventListener(i,r,K())},deregisterInteractionHandler:function(i,r){t.nativeControl.removeEventListener(i,r,K())},isSurfaceActive:function(){return!1},isUnbounded:function(){return!0}});return new H(this.root,new St(n))},Object.defineProperty(e.prototype,"nativeControl",{get:function(){var t=oe.strings.NATIVE_CONTROL_SELECTOR,n=this.root.querySelector(t);if(!n)throw new Error("Radio component requires a "+t+" element");return n},enumerable:!1,configurable:!0}),e}(L);/**
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
 */var Dn={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_REQUIRED:"mdc-floating-label--required",LABEL_HIDE_REQUIRED_MARKER:"mdc-floating-label--hide-required-marker",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"};/**
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
 */var Fe=function(a){f(e,a);function e(t){var n=a.call(this,p(p({},e.defaultAdapter),t))||this;return n.shakeAnimationEndHandler=function(){n.handleShakeAnimationEnd()},n}return Object.defineProperty(e,"cssClasses",{get:function(){return Dn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.getWidth=function(){return this.adapter.getWidth()},e.prototype.shake=function(t){var n=e.cssClasses.LABEL_SHAKE;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.float=function(t){var n=e.cssClasses,i=n.LABEL_FLOAT_ABOVE,r=n.LABEL_SHAKE;t?this.adapter.addClass(i):(this.adapter.removeClass(i),this.adapter.removeClass(r))},e.prototype.setRequired=function(t){var n=e.cssClasses.LABEL_REQUIRED;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.setHideRequiredMarker=function(t){var n=e.cssClasses.LABEL_HIDE_REQUIRED_MARKER;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.getHideRequiredMarker=function(){var t=e.cssClasses.LABEL_HIDE_REQUIRED_MARKER;return this.adapter.hasClass(t)},e.prototype.handleShakeAnimationEnd=function(){var t=e.cssClasses.LABEL_SHAKE;this.adapter.removeClass(t)},e}(R);/**
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
 */var Pe=function(a){f(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.shake=function(t){this.foundation.shake(t)},e.prototype.float=function(t){this.foundation.float(t)},e.prototype.setRequired=function(t){this.foundation.setRequired(t)},e.prototype.getWidth=function(){return this.foundation.getWidth()},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){t.root.classList.add(i)},removeClass:function(i){t.root.classList.remove(i)},hasClass:function(i){return t.root.classList.contains(i)},getWidth:function(){return Ye(t.root)},registerInteractionHandler:function(i,r){t.listen(i,r)},deregisterInteractionHandler:function(i,r){t.unlisten(i,r)}};return new Fe(n)},e}(L);/**
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
 */var dt={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"};/**
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
 */var wn=function(a){f(e,a);function e(t){var n=a.call(this,p(p({},e.defaultAdapter),t))||this;return n.transitionEndHandler=function(i){n.handleTransitionEnd(i)},n}return Object.defineProperty(e,"cssClasses",{get:function(){return dt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerEventHandler("transitionend",this.transitionEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterEventHandler("transitionend",this.transitionEndHandler)},e.prototype.activate=function(){this.adapter.removeClass(dt.LINE_RIPPLE_DEACTIVATING),this.adapter.addClass(dt.LINE_RIPPLE_ACTIVE)},e.prototype.setRippleCenter=function(t){this.adapter.setStyle("transform-origin",t+"px center")},e.prototype.deactivate=function(){this.adapter.addClass(dt.LINE_RIPPLE_DEACTIVATING)},e.prototype.handleTransitionEnd=function(t){var n=this.adapter.hasClass(dt.LINE_RIPPLE_DEACTIVATING);t.propertyName==="opacity"&&n&&(this.adapter.removeClass(dt.LINE_RIPPLE_ACTIVE),this.adapter.removeClass(dt.LINE_RIPPLE_DEACTIVATING))},e}(R);/**
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
 */var ke=function(a){f(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.activate=function(){this.foundation.activate()},e.prototype.deactivate=function(){this.foundation.deactivate()},e.prototype.setRippleCenter=function(t){this.foundation.setRippleCenter(t)},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){t.root.classList.add(i)},removeClass:function(i){t.root.classList.remove(i)},hasClass:function(i){return t.root.classList.contains(i)},setStyle:function(i,r){t.root.style.setProperty(i,r)},registerEventHandler:function(i,r){t.listen(i,r)},deregisterEventHandler:function(i,r){t.unlisten(i,r)}};return new wn(n)},e}(L);/**
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
 */var Be={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},le={NOTCH_ELEMENT_PADDING:8},ie={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"};/**
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
 */var Mn=function(a){f(e,a);function e(t){return a.call(this,p(p({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"strings",{get:function(){return Be},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return ie},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return le},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.notch=function(t){var n=e.cssClasses.OUTLINE_NOTCHED;t>0&&(t+=le.NOTCH_ELEMENT_PADDING),this.adapter.setNotchWidthProperty(t),this.adapter.addClass(n)},e.prototype.closeNotch=function(){var t=e.cssClasses.OUTLINE_NOTCHED;this.adapter.removeClass(t),this.adapter.removeNotchWidthProperty()},e}(R);/**
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
 */var He=function(a){f(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialSyncWithDOM=function(){this.notchElement=this.root.querySelector(Be.NOTCH_ELEMENT_SELECTOR);var t=this.root.querySelector("."+Fe.cssClasses.ROOT);t?(t.style.transitionDuration="0s",this.root.classList.add(ie.OUTLINE_UPGRADED),requestAnimationFrame(function(){t.style.transitionDuration=""})):this.root.classList.add(ie.NO_LABEL)},e.prototype.notch=function(t){this.foundation.notch(t)},e.prototype.closeNotch=function(){this.foundation.closeNotch()},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){t.root.classList.add(i)},removeClass:function(i){t.root.classList.remove(i)},setNotchWidthProperty:function(i){t.notchElement.style.setProperty("width",i+"px")},removeNotchWidthProperty:function(){t.notchElement.style.removeProperty("width")}};return new Mn(n)},e}(L);/**
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
 */var O={ACTIVATED:"mdc-select--activated",DISABLED:"mdc-select--disabled",FOCUSED:"mdc-select--focused",INVALID:"mdc-select--invalid",MENU_INVALID:"mdc-select__menu--invalid",OUTLINED:"mdc-select--outlined",REQUIRED:"mdc-select--required",ROOT:"mdc-select",WITH_LEADING_ICON:"mdc-select--with-leading-icon"},N={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",ARIA_SELECTED_ATTR:"aria-selected",CHANGE_EVENT:"MDCSelect:change",HIDDEN_INPUT_SELECTOR:'input[type="hidden"]',LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-select__icon",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",MENU_SELECTOR:".mdc-select__menu",OUTLINE_SELECTOR:".mdc-notched-outline",SELECTED_TEXT_SELECTOR:".mdc-select__selected-text",SELECT_ANCHOR_SELECTOR:".mdc-select__anchor",VALUE_ATTR:"data-value"},ut={LABEL_SCALE:.75,UNSET_INDEX:-1,CLICK_DEBOUNCE_TIMEOUT_MS:330};/**
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
 */var Nn=function(a){f(e,a);function e(t,n){n===void 0&&(n={});var i,r,s=a.call(this,p(p({},e.defaultAdapter),t))||this;return s.disabled=!1,s.isMenuOpen=!1,s.useDefaultValidation=!0,s.customValidity=!0,s.lastSelectedIndex=ut.UNSET_INDEX,s.clickDebounceTimeout=0,s.recentlyClicked=!1,s.leadingIcon=n.leadingIcon,s.helperText=n.helperText,s.ariaDescribedbyIds=((r=(i=s.adapter.getSelectAnchorAttr(N.ARIA_DESCRIBEDBY))===null||i===void 0?void 0:i.split(" "))===null||r===void 0?void 0:r.filter(function(o){var l;return o!==((l=s.helperText)===null||l===void 0?void 0:l.getId())&&o!==""}))||[],s}return Object.defineProperty(e,"cssClasses",{get:function(){return O},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return ut},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return N},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},activateBottomLine:function(){},deactivateBottomLine:function(){},getSelectedIndex:function(){return-1},setSelectedIndex:function(){},hasLabel:function(){return!1},floatLabel:function(){},getLabelWidth:function(){return 0},setLabelRequired:function(){},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){},setRippleCenter:function(){},notifyChange:function(){},setSelectedText:function(){},isSelectAnchorFocused:function(){return!1},getSelectAnchorAttr:function(){return""},setSelectAnchorAttr:function(){},removeSelectAnchorAttr:function(){},addMenuClass:function(){},removeMenuClass:function(){},openMenu:function(){},closeMenu:function(){},getAnchorElement:function(){return null},setMenuAnchorElement:function(){},setMenuAnchorCorner:function(){},setMenuWrapFocus:function(){},focusMenuItemAtIndex:function(){},getMenuItemCount:function(){return 0},getMenuItemValues:function(){return[]},getMenuItemTextAtIndex:function(){return""},isTypeaheadInProgress:function(){return!1},typeaheadMatchItem:function(){return-1}}},enumerable:!1,configurable:!0}),e.prototype.getSelectedIndex=function(){return this.adapter.getSelectedIndex()},e.prototype.setSelectedIndex=function(t,n,i){n===void 0&&(n=!1),i===void 0&&(i=!1),!(t>=this.adapter.getMenuItemCount())&&(this.adapter.setSelectedIndex(t),t===ut.UNSET_INDEX?this.adapter.setSelectedText(""):this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(t).trim()),n&&this.adapter.closeMenu(),!i&&this.lastSelectedIndex!==t&&this.handleChange(),this.lastSelectedIndex=t)},e.prototype.setValue=function(t,n){n===void 0&&(n=!1);var i=this.adapter.getMenuItemValues().indexOf(t);this.setSelectedIndex(i,!1,n)},e.prototype.getValue=function(){var t=this.adapter.getSelectedIndex(),n=this.adapter.getMenuItemValues();return t!==ut.UNSET_INDEX?n[t]:""},e.prototype.getDisabled=function(){return this.disabled},e.prototype.setDisabled=function(t){this.disabled=t,this.disabled?(this.adapter.addClass(O.DISABLED),this.adapter.closeMenu()):this.adapter.removeClass(O.DISABLED),this.leadingIcon&&this.leadingIcon.setDisabled(this.disabled),this.disabled?this.adapter.removeSelectAnchorAttr("tabindex"):this.adapter.setSelectAnchorAttr("tabindex","0"),this.adapter.setSelectAnchorAttr("aria-disabled",this.disabled.toString())},e.prototype.openMenu=function(){this.adapter.addClass(O.ACTIVATED),this.adapter.openMenu(),this.isMenuOpen=!0,this.adapter.setSelectAnchorAttr("aria-expanded","true")},e.prototype.setHelperTextContent=function(t){this.helperText&&this.helperText.setContent(t)},e.prototype.layout=function(){if(this.adapter.hasLabel()){var t=this.getValue().length>0,n=this.adapter.hasClass(O.FOCUSED),i=t||n,r=this.adapter.hasClass(O.REQUIRED);this.notchOutline(i),this.adapter.floatLabel(i),this.adapter.setLabelRequired(r)}},e.prototype.layoutOptions=function(){var t=this.adapter.getMenuItemValues(),n=t.indexOf(this.getValue());this.setSelectedIndex(n,!1,!0)},e.prototype.handleMenuOpened=function(){if(this.adapter.getMenuItemValues().length!==0){var t=this.getSelectedIndex(),n=t>=0?t:0;this.adapter.focusMenuItemAtIndex(n)}},e.prototype.handleMenuClosing=function(){this.adapter.setSelectAnchorAttr("aria-expanded","false")},e.prototype.handleMenuClosed=function(){this.adapter.removeClass(O.ACTIVATED),this.isMenuOpen=!1,this.adapter.isSelectAnchorFocused()||this.blur()},e.prototype.handleChange=function(){this.layout(),this.adapter.notifyChange(this.getValue());var t=this.adapter.hasClass(O.REQUIRED);t&&this.useDefaultValidation&&this.setValid(this.isValid())},e.prototype.handleMenuItemAction=function(t){this.setSelectedIndex(t,!0)},e.prototype.handleFocus=function(){this.adapter.addClass(O.FOCUSED),this.layout(),this.adapter.activateBottomLine()},e.prototype.handleBlur=function(){this.isMenuOpen||this.blur()},e.prototype.handleClick=function(t){if(!(this.disabled||this.recentlyClicked)){if(this.setClickDebounceTimeout(),this.isMenuOpen){this.adapter.closeMenu();return}this.adapter.setRippleCenter(t),this.openMenu()}},e.prototype.handleKeydown=function(t){if(!(this.isMenuOpen||!this.adapter.hasClass(O.FOCUSED))){var n=F(t)===Ft.ENTER,i=F(t)===Ft.SPACEBAR,r=F(t)===Ft.ARROW_UP,s=F(t)===Ft.ARROW_DOWN,o=t.ctrlKey||t.metaKey;if(!o&&(!i&&t.key&&t.key.length===1||i&&this.adapter.isTypeaheadInProgress())){var l=i?" ":t.key,d=this.adapter.typeaheadMatchItem(l,this.getSelectedIndex());d>=0&&this.setSelectedIndex(d),t.preventDefault();return}!n&&!i&&!r&&!s||(this.openMenu(),t.preventDefault())}},e.prototype.notchOutline=function(t){if(this.adapter.hasOutline()){var n=this.adapter.hasClass(O.FOCUSED);if(t){var i=ut.LABEL_SCALE,r=this.adapter.getLabelWidth()*i;this.adapter.notchOutline(r)}else n||this.adapter.closeOutline()}},e.prototype.setLeadingIconAriaLabel=function(t){this.leadingIcon&&this.leadingIcon.setAriaLabel(t)},e.prototype.setLeadingIconContent=function(t){this.leadingIcon&&this.leadingIcon.setContent(t)},e.prototype.getUseDefaultValidation=function(){return this.useDefaultValidation},e.prototype.setUseDefaultValidation=function(t){this.useDefaultValidation=t},e.prototype.setValid=function(t){this.useDefaultValidation||(this.customValidity=t),this.adapter.setSelectAnchorAttr("aria-invalid",(!t).toString()),t?(this.adapter.removeClass(O.INVALID),this.adapter.removeMenuClass(O.MENU_INVALID)):(this.adapter.addClass(O.INVALID),this.adapter.addMenuClass(O.MENU_INVALID)),this.syncHelperTextValidity(t)},e.prototype.isValid=function(){return this.useDefaultValidation&&this.adapter.hasClass(O.REQUIRED)&&!this.adapter.hasClass(O.DISABLED)?this.getSelectedIndex()!==ut.UNSET_INDEX&&(this.getSelectedIndex()!==0||!!this.getValue()):this.customValidity},e.prototype.setRequired=function(t){t?this.adapter.addClass(O.REQUIRED):this.adapter.removeClass(O.REQUIRED),this.adapter.setSelectAnchorAttr("aria-required",t.toString()),this.adapter.setLabelRequired(t)},e.prototype.getRequired=function(){return this.adapter.getSelectAnchorAttr("aria-required")==="true"},e.prototype.init=function(){var t=this.adapter.getAnchorElement();t&&(this.adapter.setMenuAnchorElement(t),this.adapter.setMenuAnchorCorner(At.BOTTOM_START)),this.adapter.setMenuWrapFocus(!1),this.setDisabled(this.adapter.hasClass(O.DISABLED)),this.syncHelperTextValidity(!this.adapter.hasClass(O.INVALID)),this.layout(),this.layoutOptions()},e.prototype.blur=function(){this.adapter.removeClass(O.FOCUSED),this.layout(),this.adapter.deactivateBottomLine();var t=this.adapter.hasClass(O.REQUIRED);t&&this.useDefaultValidation&&this.setValid(this.isValid())},e.prototype.syncHelperTextValidity=function(t){if(this.helperText){this.helperText.setValidity(t);var n=this.helperText.isVisible(),i=this.helperText.getId();n&&i?this.adapter.setSelectAnchorAttr(N.ARIA_DESCRIBEDBY,lt(lt([],J(this.ariaDescribedbyIds)),[i]).join(" ")):this.ariaDescribedbyIds.length>0?this.adapter.setSelectAnchorAttr(N.ARIA_DESCRIBEDBY,this.ariaDescribedbyIds.join(" ")):this.adapter.removeSelectAnchorAttr(N.ARIA_DESCRIBEDBY)}},e.prototype.setClickDebounceTimeout=function(){var t=this;clearTimeout(this.clickDebounceTimeout),this.clickDebounceTimeout=setTimeout(function(){t.recentlyClicked=!1},ut.CLICK_DEBOUNCE_TIMEOUT_MS),this.recentlyClicked=!0},e}(R);/**
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
 */var pt={ARIA_HIDDEN:"aria-hidden",ROLE:"role"},it={HELPER_TEXT_VALIDATION_MSG:"mdc-select-helper-text--validation-msg",HELPER_TEXT_VALIDATION_MSG_PERSISTENT:"mdc-select-helper-text--validation-msg-persistent"};/**
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
 */var Fn=function(a){f(e,a);function e(t){return a.call(this,p(p({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return it},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return pt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},getAttr:function(){return null},removeAttr:function(){},setContent:function(){}}},enumerable:!1,configurable:!0}),e.prototype.getId=function(){return this.adapter.getAttr("id")},e.prototype.isVisible=function(){return this.adapter.getAttr(pt.ARIA_HIDDEN)!=="true"},e.prototype.setContent=function(t){this.adapter.setContent(t)},e.prototype.setValidation=function(t){t?this.adapter.addClass(it.HELPER_TEXT_VALIDATION_MSG):this.adapter.removeClass(it.HELPER_TEXT_VALIDATION_MSG)},e.prototype.setValidationMsgPersistent=function(t){t?this.adapter.addClass(it.HELPER_TEXT_VALIDATION_MSG_PERSISTENT):this.adapter.removeClass(it.HELPER_TEXT_VALIDATION_MSG_PERSISTENT)},e.prototype.getIsValidation=function(){return this.adapter.hasClass(it.HELPER_TEXT_VALIDATION_MSG)},e.prototype.getIsValidationMsgPersistent=function(){return this.adapter.hasClass(it.HELPER_TEXT_VALIDATION_MSG_PERSISTENT)},e.prototype.setValidity=function(t){var n=this.adapter.hasClass(it.HELPER_TEXT_VALIDATION_MSG);if(n){var i=this.adapter.hasClass(it.HELPER_TEXT_VALIDATION_MSG_PERSISTENT),r=!t||i;if(r){this.showToScreenReader(),t?this.adapter.removeAttr(pt.ROLE):this.adapter.setAttr(pt.ROLE,"alert");return}this.adapter.removeAttr(pt.ROLE),this.hide()}},e.prototype.showToScreenReader=function(){this.adapter.removeAttr(pt.ARIA_HIDDEN)},e.prototype.hide=function(){this.adapter.setAttr(pt.ARIA_HIDDEN,"true")},e}(R);/**
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
 */var Pn=function(a){f(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"foundationForSelect",{get:function(){return this.foundation},enumerable:!1,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){t.root.classList.add(i)},removeClass:function(i){t.root.classList.remove(i)},hasClass:function(i){return t.root.classList.contains(i)},getAttr:function(i){return t.root.getAttribute(i)},setAttr:function(i,r){t.safeSetAttribute(t.root,i,r)},removeAttr:function(i){t.root.removeAttribute(i)},setContent:function(i){t.root.textContent=i}};return new Fn(n)},e}(L);/**
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
 */var ce={ICON_EVENT:"MDCSelect:icon",ICON_ROLE:"button"};/**
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
 */var de=["click","keydown"],ue=function(a){f(e,a);function e(t){var n=a.call(this,p(p({},e.defaultAdapter),t))||this;return n.savedTabIndex=null,n.interactionHandler=function(i){n.handleInteraction(i)},n}return Object.defineProperty(e,"strings",{get:function(){return ce},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},notifyIconAction:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t,n;this.savedTabIndex=this.adapter.getAttr("tabindex");try{for(var i=V(de),r=i.next();!r.done;r=i.next()){var s=r.value;this.adapter.registerInteractionHandler(s,this.interactionHandler)}}catch(o){t={error:o}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},e.prototype.destroy=function(){var t,n;try{for(var i=V(de),r=i.next();!r.done;r=i.next()){var s=r.value;this.adapter.deregisterInteractionHandler(s,this.interactionHandler)}}catch(o){t={error:o}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},e.prototype.setDisabled=function(t){this.savedTabIndex&&(t?(this.adapter.setAttr("tabindex","-1"),this.adapter.removeAttr("role")):(this.adapter.setAttr("tabindex",this.savedTabIndex),this.adapter.setAttr("role",ce.ICON_ROLE)))},e.prototype.setAriaLabel=function(t){this.adapter.setAttr("aria-label",t)},e.prototype.setContent=function(t){this.adapter.setContent(t)},e.prototype.handleInteraction=function(t){var n=t.key==="Enter"||t.keyCode===13;(t.type==="click"||n)&&this.adapter.notifyIconAction()},e}(R);/**
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
 */var kn=function(a){f(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"foundationForSelect",{get:function(){return this.foundation},enumerable:!1,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this,n={getAttr:function(i){return t.root.getAttribute(i)},setAttr:function(i,r){t.safeSetAttribute(t.root,i,r)},removeAttr:function(i){t.root.removeAttribute(i)},setContent:function(i){t.root.textContent=i},registerInteractionHandler:function(i,r){t.listen(i,r)},deregisterInteractionHandler:function(i,r){t.unlisten(i,r)},notifyIconAction:function(){t.emit(ue.strings.ICON_EVENT,{},!0)}};return new ue(n)},e}(L);/**
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
 */var Bn=function(a){f(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t,n,i,r,s,o){if(t===void 0&&(t=function(h){return new Pe(h)}),n===void 0&&(n=function(h){return new ke(h)}),i===void 0&&(i=function(h){return new He(h)}),r===void 0&&(r=function(h){return new Ne(h)}),s===void 0&&(s=function(h){return new kn(h)}),o===void 0&&(o=function(h){return new Pn(h)}),this.selectAnchor=this.root.querySelector(N.SELECT_ANCHOR_SELECTOR),this.selectedText=this.root.querySelector(N.SELECTED_TEXT_SELECTOR),this.hiddenInput=this.root.querySelector(N.HIDDEN_INPUT_SELECTOR),!this.selectedText)throw new Error("MDCSelect: Missing required element: The following selector must be present: "+("'"+N.SELECTED_TEXT_SELECTOR+"'"));if(this.selectAnchor.hasAttribute(N.ARIA_CONTROLS)){var l=document.getElementById(this.selectAnchor.getAttribute(N.ARIA_CONTROLS));l&&(this.helperText=o(l))}this.menuSetup(r);var d=this.root.querySelector(N.LABEL_SELECTOR);this.label=d?t(d):null;var u=this.root.querySelector(N.LINE_RIPPLE_SELECTOR);this.lineRipple=u?n(u):null;var v=this.root.querySelector(N.OUTLINE_SELECTOR);this.outline=v?i(v):null;var m=this.root.querySelector(N.LEADING_ICON_SELECTOR);m&&(this.leadingIcon=s(m)),this.root.classList.contains(O.OUTLINED)||(this.ripple=this.createRipple())},e.prototype.initialSyncWithDOM=function(){var t=this;if(this.handleFocus=function(){t.foundation.handleFocus()},this.handleBlur=function(){t.foundation.handleBlur()},this.handleClick=function(n){t.selectAnchor.focus(),t.foundation.handleClick(t.getNormalizedXCoordinate(n))},this.handleKeydown=function(n){t.foundation.handleKeydown(n)},this.handleMenuItemAction=function(n){t.foundation.handleMenuItemAction(n.detail.index)},this.handleMenuOpened=function(){t.foundation.handleMenuOpened()},this.handleMenuClosed=function(){t.foundation.handleMenuClosed()},this.handleMenuClosing=function(){t.foundation.handleMenuClosing()},this.selectAnchor.addEventListener("focus",this.handleFocus),this.selectAnchor.addEventListener("blur",this.handleBlur),this.selectAnchor.addEventListener("click",this.handleClick),this.selectAnchor.addEventListener("keydown",this.handleKeydown),this.menu.listen(tt.CLOSED_EVENT,this.handleMenuClosed),this.menu.listen(tt.CLOSING_EVENT,this.handleMenuClosing),this.menu.listen(tt.OPENED_EVENT,this.handleMenuOpened),this.menu.listen(z.SELECTED_EVENT,this.handleMenuItemAction),this.hiddenInput){if(this.hiddenInput.value){this.foundation.setValue(this.hiddenInput.value,!0),this.foundation.layout();return}this.hiddenInput.value=this.value}},e.prototype.destroy=function(){this.selectAnchor.removeEventListener("focus",this.handleFocus),this.selectAnchor.removeEventListener("blur",this.handleBlur),this.selectAnchor.removeEventListener("keydown",this.handleKeydown),this.selectAnchor.removeEventListener("click",this.handleClick),this.menu.unlisten(tt.CLOSED_EVENT,this.handleMenuClosed),this.menu.unlisten(tt.OPENED_EVENT,this.handleMenuOpened),this.menu.unlisten(z.SELECTED_EVENT,this.handleMenuItemAction),this.menu.destroy(),this.ripple&&this.ripple.destroy(),this.outline&&this.outline.destroy(),this.leadingIcon&&this.leadingIcon.destroy(),this.helperText&&this.helperText.destroy(),a.prototype.destroy.call(this)},Object.defineProperty(e.prototype,"value",{get:function(){return this.foundation.getValue()},set:function(t){this.foundation.setValue(t)},enumerable:!1,configurable:!0}),e.prototype.setValue=function(t,n){n===void 0&&(n=!1),this.foundation.setValue(t,n)},Object.defineProperty(e.prototype,"selectedIndex",{get:function(){return this.foundation.getSelectedIndex()},set:function(t){this.foundation.setSelectedIndex(t,!0)},enumerable:!1,configurable:!0}),e.prototype.setSelectedIndex=function(t,n){n===void 0&&(n=!1),this.foundation.setSelectedIndex(t,!0,n)},Object.defineProperty(e.prototype,"disabled",{get:function(){return this.foundation.getDisabled()},set:function(t){this.foundation.setDisabled(t),this.hiddenInput&&(this.hiddenInput.disabled=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"leadingIconAriaLabel",{set:function(t){this.foundation.setLeadingIconAriaLabel(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"leadingIconContent",{set:function(t){this.foundation.setLeadingIconContent(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"helperTextContent",{set:function(t){this.foundation.setHelperTextContent(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"useDefaultValidation",{set:function(t){this.foundation.setUseDefaultValidation(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"valid",{get:function(){return this.foundation.isValid()},set:function(t){this.foundation.setValid(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"required",{get:function(){return this.foundation.getRequired()},set:function(t){this.foundation.setRequired(t)},enumerable:!1,configurable:!0}),e.prototype.layout=function(){this.foundation.layout()},e.prototype.layoutOptions=function(){this.foundation.layoutOptions(),this.menu.layout(),this.menuItemValues=this.menu.items.map(function(t){return t.getAttribute(N.VALUE_ATTR)||""}),this.hiddenInput&&(this.hiddenInput.value=this.value)},e.prototype.getDefaultFoundation=function(){var t=p(p(p(p({},this.getSelectAdapterMethods()),this.getCommonAdapterMethods()),this.getOutlineAdapterMethods()),this.getLabelAdapterMethods());return new Nn(t,this.getFoundationMap())},e.prototype.menuSetup=function(t){this.menuElement=this.root.querySelector(N.MENU_SELECTOR),this.menu=t(this.menuElement),this.menu.hasTypeahead=!0,this.menu.singleSelection=!0,this.menuItemValues=this.menu.items.map(function(n){return n.getAttribute(N.VALUE_ATTR)||""})},e.prototype.createRipple=function(){var t=this,n=p(p({},H.createAdapter({root:this.selectAnchor})),{registerInteractionHandler:function(i,r){t.selectAnchor.addEventListener(i,r)},deregisterInteractionHandler:function(i,r){t.selectAnchor.removeEventListener(i,r)}});return new H(this.selectAnchor,new St(n))},e.prototype.getSelectAdapterMethods=function(){var t=this;return{getMenuItemAttr:function(n,i){return n.getAttribute(i)},setSelectedText:function(n){t.selectedText.textContent=n;var i=t.menu.selectedIndex;if(i!==-1){i=i instanceof Array?i[0]:i;var r=t.menu.items[i];r&&t.selectedText.setAttribute("aria-label",r.getAttribute("aria-label")||"")}},isSelectAnchorFocused:function(){return document.activeElement===t.selectAnchor},getSelectAnchorAttr:function(n){return t.selectAnchor.getAttribute(n)},setSelectAnchorAttr:function(n,i){t.safeSetAttribute(t.selectAnchor,n,i)},removeSelectAnchorAttr:function(n){t.selectAnchor.removeAttribute(n)},addMenuClass:function(n){t.menuElement.classList.add(n)},removeMenuClass:function(n){t.menuElement.classList.remove(n)},openMenu:function(){t.menu.open=!0},closeMenu:function(){t.menu.open=!1},getAnchorElement:function(){return t.root.querySelector(N.SELECT_ANCHOR_SELECTOR)},setMenuAnchorElement:function(n){t.menu.setAnchorElement(n)},setMenuAnchorCorner:function(n){t.menu.setAnchorCorner(n)},setMenuWrapFocus:function(n){t.menu.wrapFocus=n},getSelectedIndex:function(){var n=t.menu.selectedIndex;return n instanceof Array?n[0]:n},setSelectedIndex:function(n){t.menu.selectedIndex=n},focusMenuItemAtIndex:function(n){var i;(i=t.menu.items[n])===null||i===void 0||i.focus()},getMenuItemCount:function(){return t.menu.items.length},getMenuItemValues:function(){return t.menuItemValues},getMenuItemTextAtIndex:function(n){return t.menu.getPrimaryTextAtIndex(n)},isTypeaheadInProgress:function(){return t.menu.typeaheadInProgress},typeaheadMatchItem:function(n,i){return t.menu.typeaheadMatchItem(n,i)}}},e.prototype.getCommonAdapterMethods=function(){var t=this;return{addClass:function(n){t.root.classList.add(n)},removeClass:function(n){t.root.classList.remove(n)},hasClass:function(n){return t.root.classList.contains(n)},setRippleCenter:function(n){t.lineRipple&&t.lineRipple.setRippleCenter(n)},activateBottomLine:function(){t.lineRipple&&t.lineRipple.activate()},deactivateBottomLine:function(){t.lineRipple&&t.lineRipple.deactivate()},notifyChange:function(n){t.hiddenInput&&(t.hiddenInput.value=n);var i=t.selectedIndex;t.emit(N.CHANGE_EVENT,{value:n,index:i},!0)}}},e.prototype.getOutlineAdapterMethods=function(){var t=this;return{hasOutline:function(){return!!t.outline},notchOutline:function(n){t.outline&&t.outline.notch(n)},closeOutline:function(){t.outline&&t.outline.closeNotch()}}},e.prototype.getLabelAdapterMethods=function(){var t=this;return{hasLabel:function(){return!!t.label},floatLabel:function(n){t.label&&t.label.float(n)},getLabelWidth:function(){return t.label?t.label.getWidth():0},setLabelRequired:function(n){t.label&&t.label.setRequired(n)}}},e.prototype.getNormalizedXCoordinate=function(t){var n=t.target.getBoundingClientRect(),i=this.isTouchEvent(t)?t.touches[0].clientX:t.clientX;return i-n.left},e.prototype.isTouchEvent=function(t){return!!t.touches},e.prototype.getFoundationMap=function(){return{helperText:this.helperText?this.helperText.foundationForSelect:void 0,leadingIcon:this.leadingIcon?this.leadingIcon.foundationForSelect:void 0}},e}(L);/**
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
 */var E={DISABLED:"mdc-slider--disabled",DISCRETE:"mdc-slider--discrete",INPUT:"mdc-slider__input",RANGE:"mdc-slider--range",THUMB:"mdc-slider__thumb",THUMB_FOCUSED:"mdc-slider__thumb--focused",THUMB_KNOB:"mdc-slider__thumb-knob",THUMB_TOP:"mdc-slider__thumb--top",THUMB_WITH_INDICATOR:"mdc-slider__thumb--with-indicator",TICK_MARKS:"mdc-slider--tick-marks",TICK_MARKS_CONTAINER:"mdc-slider__tick-marks",TICK_MARK_ACTIVE:"mdc-slider__tick-mark--active",TICK_MARK_INACTIVE:"mdc-slider__tick-mark--inactive",TRACK:"mdc-slider__track",TRACK_ACTIVE:"mdc-slider__track--active_fill",VALUE_INDICATOR_CONTAINER:"mdc-slider__value-indicator-container",VALUE_INDICATOR_TEXT:"mdc-slider__value-indicator-text"},zt={STEP_SIZE:1,MIN_RANGE:0,THUMB_UPDATE_MIN_PX:5},M={ARIA_VALUETEXT:"aria-valuetext",INPUT_DISABLED:"disabled",INPUT_MIN:"min",INPUT_MAX:"max",INPUT_VALUE:"value",INPUT_STEP:"step",DATA_MIN_RANGE:"data-min-range"},pe={CHANGE:"MDCSlider:change",INPUT:"MDCSlider:input"},U={VAR_VALUE_INDICATOR_CARET_LEFT:"--slider-value-indicator-caret-left",VAR_VALUE_INDICATOR_CARET_RIGHT:"--slider-value-indicator-caret-right",VAR_VALUE_INDICATOR_CARET_TRANSFORM:"--slider-value-indicator-caret-transform",VAR_VALUE_INDICATOR_CONTAINER_LEFT:"--slider-value-indicator-container-left",VAR_VALUE_INDICATOR_CONTAINER_RIGHT:"--slider-value-indicator-container-right",VAR_VALUE_INDICATOR_CONTAINER_TRANSFORM:"--slider-value-indicator-container-transform"};/**
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
 */var vt;(function(a){a[a.ACTIVE=0]="ACTIVE",a[a.INACTIVE=1]="INACTIVE"})(vt||(vt={}));var c;(function(a){a[a.START=1]="START",a[a.END=2]="END"})(c||(c={}));/**
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
 */var Wt;(function(a){a.SLIDER_UPDATE="slider_update"})(Wt||(Wt={}));var Yt=typeof window<"u",Hn=function(a){f(e,a);function e(t){var n=a.call(this,p(p({},e.defaultAdapter),t))||this;return n.initialStylesRemoved=!1,n.isDisabled=!1,n.isDiscrete=!1,n.step=zt.STEP_SIZE,n.minRange=zt.MIN_RANGE,n.hasTickMarks=!1,n.isRange=!1,n.thumb=null,n.downEventClientX=null,n.startThumbKnobWidth=0,n.endThumbKnobWidth=0,n.animFrame=new xe,n}return Object.defineProperty(e,"defaultAdapter",{get:function(){return{hasClass:function(){return!1},addClass:function(){},removeClass:function(){},addThumbClass:function(){},removeThumbClass:function(){},getAttribute:function(){return null},getInputValue:function(){return""},setInputValue:function(){},getInputAttribute:function(){return null},setInputAttribute:function(){return null},removeInputAttribute:function(){return null},focusInput:function(){},isInputFocused:function(){return!1},shouldHideFocusStylesForPointerEvents:function(){return!1},getThumbKnobWidth:function(){return 0},getValueIndicatorContainerWidth:function(){return 0},getThumbBoundingClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getBoundingClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},isRTL:function(){return!1},setThumbStyleProperty:function(){},removeThumbStyleProperty:function(){},setTrackActiveStyleProperty:function(){},removeTrackActiveStyleProperty:function(){},setValueIndicatorText:function(){},getValueToAriaValueTextFn:function(){return null},updateTickMarks:function(){},setPointerCapture:function(){},emitChangeEvent:function(){},emitInputEvent:function(){},emitDragStartEvent:function(){},emitDragEndEvent:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){},registerThumbEventHandler:function(){},deregisterThumbEventHandler:function(){},registerInputEventHandler:function(){},deregisterInputEventHandler:function(){},registerBodyEventHandler:function(){},deregisterBodyEventHandler:function(){},registerWindowEventHandler:function(){},deregisterWindowEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this;this.isDisabled=this.adapter.hasClass(E.DISABLED),this.isDiscrete=this.adapter.hasClass(E.DISCRETE),this.hasTickMarks=this.adapter.hasClass(E.TICK_MARKS),this.isRange=this.adapter.hasClass(E.RANGE);var n=this.convertAttributeValueToNumber(this.adapter.getInputAttribute(M.INPUT_MIN,this.isRange?c.START:c.END),M.INPUT_MIN),i=this.convertAttributeValueToNumber(this.adapter.getInputAttribute(M.INPUT_MAX,c.END),M.INPUT_MAX),r=this.convertAttributeValueToNumber(this.adapter.getInputAttribute(M.INPUT_VALUE,c.END),M.INPUT_VALUE),s=this.isRange?this.convertAttributeValueToNumber(this.adapter.getInputAttribute(M.INPUT_VALUE,c.START),M.INPUT_VALUE):n,o=this.adapter.getInputAttribute(M.INPUT_STEP,c.END),l=o?this.convertAttributeValueToNumber(o,M.INPUT_STEP):this.step,d=this.adapter.getAttribute(M.DATA_MIN_RANGE),u=d?this.convertAttributeValueToNumber(d,M.DATA_MIN_RANGE):this.minRange;this.validateProperties({min:n,max:i,value:r,valueStart:s,step:l,minRange:u}),this.min=n,this.max=i,this.value=r,this.valueStart=s,this.step=l,this.minRange=u,this.numDecimalPlaces=he(this.step),this.valueBeforeDownEvent=r,this.valueStartBeforeDownEvent=s,this.mousedownOrTouchstartListener=this.handleMousedownOrTouchstart.bind(this),this.moveListener=this.handleMove.bind(this),this.pointerdownListener=this.handlePointerdown.bind(this),this.pointerupListener=this.handlePointerup.bind(this),this.thumbMouseenterListener=this.handleThumbMouseenter.bind(this),this.thumbMouseleaveListener=this.handleThumbMouseleave.bind(this),this.inputStartChangeListener=function(){t.handleInputChange(c.START)},this.inputEndChangeListener=function(){t.handleInputChange(c.END)},this.inputStartFocusListener=function(){t.handleInputFocus(c.START)},this.inputEndFocusListener=function(){t.handleInputFocus(c.END)},this.inputStartBlurListener=function(){t.handleInputBlur(c.START)},this.inputEndBlurListener=function(){t.handleInputBlur(c.END)},this.resizeListener=this.handleResize.bind(this),this.registerEventHandlers()},e.prototype.destroy=function(){this.deregisterEventHandlers()},e.prototype.setMin=function(t){this.min=t,this.isRange||(this.valueStart=t),this.updateUI()},e.prototype.setMax=function(t){this.max=t,this.updateUI()},e.prototype.getMin=function(){return this.min},e.prototype.getMax=function(){return this.max},e.prototype.getValue=function(){return this.value},e.prototype.setValue=function(t){if(this.isRange&&t<this.valueStart+this.minRange)throw new Error("end thumb value ("+t+") must be >= start thumb "+("value ("+this.valueStart+") + min range ("+this.minRange+")"));this.updateValue(t,c.END)},e.prototype.getValueStart=function(){if(!this.isRange)throw new Error("`valueStart` is only applicable for range sliders.");return this.valueStart},e.prototype.setValueStart=function(t){if(!this.isRange)throw new Error("`valueStart` is only applicable for range sliders.");if(this.isRange&&t>this.value-this.minRange)throw new Error("start thumb value ("+t+") must be <= end thumb "+("value ("+this.value+") - min range ("+this.minRange+")"));this.updateValue(t,c.START)},e.prototype.setStep=function(t){this.step=t,this.numDecimalPlaces=he(t),this.updateUI()},e.prototype.setMinRange=function(t){if(!this.isRange)throw new Error("`minRange` is only applicable for range sliders.");if(t<0)throw new Error("`minRange` must be non-negative. "+("Current value: "+t));if(this.value-this.valueStart<t)throw new Error("start thumb value ("+this.valueStart+") and end thumb value "+("("+this.value+") must differ by at least "+t+"."));this.minRange=t},e.prototype.setIsDiscrete=function(t){this.isDiscrete=t,this.updateValueIndicatorUI(),this.updateTickMarksUI()},e.prototype.getStep=function(){return this.step},e.prototype.getMinRange=function(){if(!this.isRange)throw new Error("`minRange` is only applicable for range sliders.");return this.minRange},e.prototype.setHasTickMarks=function(t){this.hasTickMarks=t,this.updateTickMarksUI()},e.prototype.getDisabled=function(){return this.isDisabled},e.prototype.setDisabled=function(t){this.isDisabled=t,t?(this.adapter.addClass(E.DISABLED),this.isRange&&this.adapter.setInputAttribute(M.INPUT_DISABLED,"",c.START),this.adapter.setInputAttribute(M.INPUT_DISABLED,"",c.END)):(this.adapter.removeClass(E.DISABLED),this.isRange&&this.adapter.removeInputAttribute(M.INPUT_DISABLED,c.START),this.adapter.removeInputAttribute(M.INPUT_DISABLED,c.END))},e.prototype.getIsRange=function(){return this.isRange},e.prototype.layout=function(t){var n=t===void 0?{}:t,i=n.skipUpdateUI;this.isRange&&(this.startThumbKnobWidth=this.adapter.getThumbKnobWidth(c.START),this.endThumbKnobWidth=this.adapter.getThumbKnobWidth(c.END)),i||this.updateUI()},e.prototype.handleResize=function(){this.layout()},e.prototype.handleDown=function(t){if(!this.isDisabled){this.valueStartBeforeDownEvent=this.valueStart,this.valueBeforeDownEvent=this.value;var n=t.clientX!=null?t.clientX:t.targetTouches[0].clientX;this.downEventClientX=n;var i=this.mapClientXOnSliderScale(n);this.thumb=this.getThumbFromDownEvent(n,i),this.thumb!==null&&(this.handleDragStart(t,i,this.thumb),this.updateValue(i,this.thumb,{emitInputEvent:!0}))}},e.prototype.handleMove=function(t){if(!this.isDisabled){t.preventDefault();var n=t.clientX!=null?t.clientX:t.targetTouches[0].clientX,i=this.thumb!=null;if(this.thumb=this.getThumbFromMoveEvent(n),this.thumb!==null){var r=this.mapClientXOnSliderScale(n);i||(this.handleDragStart(t,r,this.thumb),this.adapter.emitDragStartEvent(r,this.thumb)),this.updateValue(r,this.thumb,{emitInputEvent:!0})}}},e.prototype.handleUp=function(){var t,n;if(!(this.isDisabled||this.thumb===null)){!((n=(t=this.adapter).shouldHideFocusStylesForPointerEvents)===null||n===void 0)&&n.call(t)&&this.handleInputBlur(this.thumb);var i=this.thumb===c.START?this.valueStartBeforeDownEvent:this.valueBeforeDownEvent,r=this.thumb===c.START?this.valueStart:this.value;i!==r&&this.adapter.emitChangeEvent(r,this.thumb),this.adapter.emitDragEndEvent(r,this.thumb),this.thumb=null}},e.prototype.handleThumbMouseenter=function(){!this.isDiscrete||!this.isRange||(this.adapter.addThumbClass(E.THUMB_WITH_INDICATOR,c.START),this.adapter.addThumbClass(E.THUMB_WITH_INDICATOR,c.END))},e.prototype.handleThumbMouseleave=function(){var t,n;!this.isDiscrete||!this.isRange||!(!((n=(t=this.adapter).shouldHideFocusStylesForPointerEvents)===null||n===void 0)&&n.call(t))&&(this.adapter.isInputFocused(c.START)||this.adapter.isInputFocused(c.END))||this.thumb||(this.adapter.removeThumbClass(E.THUMB_WITH_INDICATOR,c.START),this.adapter.removeThumbClass(E.THUMB_WITH_INDICATOR,c.END))},e.prototype.handleMousedownOrTouchstart=function(t){var n=this,i=t.type==="mousedown"?"mousemove":"touchmove";this.adapter.registerBodyEventHandler(i,this.moveListener);var r=function(){n.handleUp(),n.adapter.deregisterBodyEventHandler(i,n.moveListener),n.adapter.deregisterEventHandler("mouseup",r),n.adapter.deregisterEventHandler("touchend",r)};this.adapter.registerBodyEventHandler("mouseup",r),this.adapter.registerBodyEventHandler("touchend",r),this.handleDown(t)},e.prototype.handlePointerdown=function(t){var n=t.button===0;n&&(t.pointerId!=null&&this.adapter.setPointerCapture(t.pointerId),this.adapter.registerEventHandler("pointermove",this.moveListener),this.handleDown(t))},e.prototype.handleInputChange=function(t){var n=Number(this.adapter.getInputValue(t));t===c.START?this.setValueStart(n):this.setValue(n),this.adapter.emitChangeEvent(t===c.START?this.valueStart:this.value,t),this.adapter.emitInputEvent(t===c.START?this.valueStart:this.value,t)},e.prototype.handleInputFocus=function(t){if(this.adapter.addThumbClass(E.THUMB_FOCUSED,t),!!this.isDiscrete&&(this.adapter.addThumbClass(E.THUMB_WITH_INDICATOR,t),this.isRange)){var n=t===c.START?c.END:c.START;this.adapter.addThumbClass(E.THUMB_WITH_INDICATOR,n)}},e.prototype.handleInputBlur=function(t){if(this.adapter.removeThumbClass(E.THUMB_FOCUSED,t),!!this.isDiscrete&&(this.adapter.removeThumbClass(E.THUMB_WITH_INDICATOR,t),this.isRange)){var n=t===c.START?c.END:c.START;this.adapter.removeThumbClass(E.THUMB_WITH_INDICATOR,n)}},e.prototype.handleDragStart=function(t,n,i){var r,s;this.adapter.emitDragStartEvent(n,i),this.adapter.focusInput(i),!((s=(r=this.adapter).shouldHideFocusStylesForPointerEvents)===null||s===void 0)&&s.call(r)&&this.handleInputFocus(i),t.preventDefault()},e.prototype.getThumbFromDownEvent=function(t,n){if(!this.isRange)return c.END;var i=this.adapter.getThumbBoundingClientRect(c.START),r=this.adapter.getThumbBoundingClientRect(c.END),s=t>=i.left&&t<=i.right,o=t>=r.left&&t<=r.right;return s&&o?null:s?c.START:o?c.END:n<this.valueStart?c.START:n>this.value?c.END:n-this.valueStart<=this.value-n?c.START:c.END},e.prototype.getThumbFromMoveEvent=function(t){if(this.thumb!==null)return this.thumb;if(this.downEventClientX===null)throw new Error("`downEventClientX` is null after move event.");var n=Math.abs(this.downEventClientX-t)<zt.THUMB_UPDATE_MIN_PX;if(n)return this.thumb;var i=t<this.downEventClientX;return i?this.adapter.isRTL()?c.END:c.START:this.adapter.isRTL()?c.START:c.END},e.prototype.updateUI=function(t){t?this.updateThumbAndInputAttributes(t):(this.updateThumbAndInputAttributes(c.START),this.updateThumbAndInputAttributes(c.END)),this.updateThumbAndTrackUI(t),this.updateValueIndicatorUI(t),this.updateTickMarksUI()},e.prototype.updateThumbAndInputAttributes=function(t){if(t){var n=this.isRange&&t===c.START?this.valueStart:this.value,i=String(n);this.adapter.setInputAttribute(M.INPUT_VALUE,i,t),this.isRange&&t===c.START?this.adapter.setInputAttribute(M.INPUT_MIN,String(n+this.minRange),c.END):this.isRange&&t===c.END&&this.adapter.setInputAttribute(M.INPUT_MAX,String(n-this.minRange),c.START),this.adapter.getInputValue(t)!==i&&this.adapter.setInputValue(i,t);var r=this.adapter.getValueToAriaValueTextFn();r&&this.adapter.setInputAttribute(M.ARIA_VALUETEXT,r(n,t),t)}},e.prototype.updateValueIndicatorUI=function(t){if(this.isDiscrete){var n=this.isRange&&t===c.START?this.valueStart:this.value;this.adapter.setValueIndicatorText(n,t===c.START?c.START:c.END),!t&&this.isRange&&this.adapter.setValueIndicatorText(this.valueStart,c.START)}},e.prototype.updateTickMarksUI=function(){if(!(!this.isDiscrete||!this.hasTickMarks)){var t=(this.valueStart-this.min)/this.step,n=(this.value-this.valueStart)/this.step+1,i=(this.max-this.value)/this.step,r=Array.from({length:t}).fill(vt.INACTIVE),s=Array.from({length:n}).fill(vt.ACTIVE),o=Array.from({length:i}).fill(vt.INACTIVE);this.adapter.updateTickMarks(r.concat(s).concat(o))}},e.prototype.mapClientXOnSliderScale=function(t){var n=this.adapter.getBoundingClientRect(),i=t-n.left,r=i/n.width;this.adapter.isRTL()&&(r=1-r);var s=this.min+r*(this.max-this.min);return s===this.max||s===this.min?s:Number(this.quantize(s).toFixed(this.numDecimalPlaces))},e.prototype.quantize=function(t){var n=Math.round((t-this.min)/this.step);return this.min+n*this.step},e.prototype.updateValue=function(t,n,i){var r=i===void 0?{}:i,s=r.emitInputEvent;if(t=this.clampValue(t,n),this.isRange&&n===c.START){if(this.valueStart===t)return;this.valueStart=t}else{if(this.value===t)return;this.value=t}this.updateUI(n),s&&this.adapter.emitInputEvent(n===c.START?this.valueStart:this.value,n)},e.prototype.clampValue=function(t,n){t=Math.min(Math.max(t,this.min),this.max);var i=this.isRange&&n===c.START&&t>this.value-this.minRange;if(i)return this.value-this.minRange;var r=this.isRange&&n===c.END&&t<this.valueStart+this.minRange;return r?this.valueStart+this.minRange:t},e.prototype.updateThumbAndTrackUI=function(t){var n=this,i=this,r=i.max,s=i.min,o=this.adapter.getBoundingClientRect(),l=(this.value-this.valueStart)/(r-s),d=l*o.width,u=this.adapter.isRTL(),v=Yt?te(window,"transform"):"transform";if(this.isRange){var m=this.adapter.isRTL()?(r-this.value)/(r-s)*o.width:(this.valueStart-s)/(r-s)*o.width,h=m+d;this.animFrame.request(Wt.SLIDER_UPDATE,function(){var b=!u&&t===c.START||u&&t!==c.START;b?(n.adapter.setTrackActiveStyleProperty("transform-origin","right"),n.adapter.setTrackActiveStyleProperty("left","auto"),n.adapter.setTrackActiveStyleProperty("right",o.width-h+"px")):(n.adapter.setTrackActiveStyleProperty("transform-origin","left"),n.adapter.setTrackActiveStyleProperty("right","auto"),n.adapter.setTrackActiveStyleProperty("left",m+"px")),n.adapter.setTrackActiveStyleProperty(v,"scaleX("+l+")");var I=u?h:m,_=n.adapter.isRTL()?m:h;(t===c.START||!t||!n.initialStylesRemoved)&&(n.adapter.setThumbStyleProperty(v,"translateX("+I+"px)",c.START),n.alignValueIndicator(c.START,I)),(t===c.END||!t||!n.initialStylesRemoved)&&(n.adapter.setThumbStyleProperty(v,"translateX("+_+"px)",c.END),n.alignValueIndicator(c.END,_)),n.removeInitialStyles(u),n.updateOverlappingThumbsUI(I,_,t)})}else this.animFrame.request(Wt.SLIDER_UPDATE,function(){var b=u?o.width-d:d;n.adapter.setThumbStyleProperty(v,"translateX("+b+"px)",c.END),n.alignValueIndicator(c.END,b),n.adapter.setTrackActiveStyleProperty(v,"scaleX("+l+")"),n.removeInitialStyles(u)})},e.prototype.alignValueIndicator=function(t,n){if(this.isDiscrete){var i=this.adapter.getThumbBoundingClientRect(t).width/2,r=this.adapter.getValueIndicatorContainerWidth(t),s=this.adapter.getBoundingClientRect().width;r/2>n+i?(this.adapter.setThumbStyleProperty(U.VAR_VALUE_INDICATOR_CARET_LEFT,i+"px",t),this.adapter.setThumbStyleProperty(U.VAR_VALUE_INDICATOR_CARET_RIGHT,"auto",t),this.adapter.setThumbStyleProperty(U.VAR_VALUE_INDICATOR_CARET_TRANSFORM,"translateX(-50%)",t),this.adapter.setThumbStyleProperty(U.VAR_VALUE_INDICATOR_CONTAINER_LEFT,"0",t),this.adapter.setThumbStyleProperty(U.VAR_VALUE_INDICATOR_CONTAINER_RIGHT,"auto",t),this.adapter.setThumbStyleProperty(U.VAR_VALUE_INDICATOR_CONTAINER_TRANSFORM,"none",t)):r/2>s-n+i?(this.adapter.setThumbStyleProperty(U.VAR_VALUE_INDICATOR_CARET_LEFT,"auto",t),this.adapter.setThumbStyleProperty(U.VAR_VALUE_INDICATOR_CARET_RIGHT,i+"px",t),this.adapter.setThumbStyleProperty(U.VAR_VALUE_INDICATOR_CARET_TRANSFORM,"translateX(50%)",t),this.adapter.setThumbStyleProperty(U.VAR_VALUE_INDICATOR_CONTAINER_LEFT,"auto",t),this.adapter.setThumbStyleProperty(U.VAR_VALUE_INDICATOR_CONTAINER_RIGHT,"0",t),this.adapter.setThumbStyleProperty(U.VAR_VALUE_INDICATOR_CONTAINER_TRANSFORM,"none",t)):(this.adapter.setThumbStyleProperty(U.VAR_VALUE_INDICATOR_CARET_LEFT,"50%",t),this.adapter.setThumbStyleProperty(U.VAR_VALUE_INDICATOR_CARET_RIGHT,"auto",t),this.adapter.setThumbStyleProperty(U.VAR_VALUE_INDICATOR_CARET_TRANSFORM,"translateX(-50%)",t),this.adapter.setThumbStyleProperty(U.VAR_VALUE_INDICATOR_CONTAINER_LEFT,"50%",t),this.adapter.setThumbStyleProperty(U.VAR_VALUE_INDICATOR_CONTAINER_RIGHT,"auto",t),this.adapter.setThumbStyleProperty(U.VAR_VALUE_INDICATOR_CONTAINER_TRANSFORM,"translateX(-50%)",t))}},e.prototype.removeInitialStyles=function(t){if(!this.initialStylesRemoved){var n=t?"right":"left";this.adapter.removeThumbStyleProperty(n,c.END),this.isRange&&this.adapter.removeThumbStyleProperty(n,c.START),this.initialStylesRemoved=!0,this.resetTrackAndThumbAnimation()}},e.prototype.resetTrackAndThumbAnimation=function(){var t=this;if(this.isDiscrete){var n=Yt?te(window,"transition"):"transition",i="none 0s ease 0s";this.adapter.setThumbStyleProperty(n,i,c.END),this.isRange&&this.adapter.setThumbStyleProperty(n,i,c.START),this.adapter.setTrackActiveStyleProperty(n,i),requestAnimationFrame(function(){t.adapter.removeThumbStyleProperty(n,c.END),t.adapter.removeTrackActiveStyleProperty(n),t.isRange&&t.adapter.removeThumbStyleProperty(n,c.START)})}},e.prototype.updateOverlappingThumbsUI=function(t,n,i){var r=!1;if(this.adapter.isRTL()){var s=t-this.startThumbKnobWidth/2,o=n+this.endThumbKnobWidth/2;r=o>=s}else{var l=t+this.startThumbKnobWidth/2,d=n-this.endThumbKnobWidth/2;r=l>=d}r?(this.adapter.addThumbClass(E.THUMB_TOP,i||c.END),this.adapter.removeThumbClass(E.THUMB_TOP,i===c.START?c.END:c.START)):(this.adapter.removeThumbClass(E.THUMB_TOP,c.START),this.adapter.removeThumbClass(E.THUMB_TOP,c.END))},e.prototype.convertAttributeValueToNumber=function(t,n){if(t===null)throw new Error("MDCSliderFoundation: `"+n+"` must be non-null.");var i=Number(t);if(isNaN(i))throw new Error("MDCSliderFoundation: `"+n+"` value is `"+t+"`, but must be a number.");return i},e.prototype.validateProperties=function(t){var n=t.min,i=t.max,r=t.value,s=t.valueStart,o=t.step,l=t.minRange;if(n>=i)throw new Error("MDCSliderFoundation: min must be strictly less than max. "+("Current: [min: "+n+", max: "+i+"]"));if(o<=0)throw new Error("MDCSliderFoundation: step must be a positive number. "+("Current step: "+o));if(this.isRange){if(r<n||r>i||s<n||s>i)throw new Error("MDCSliderFoundation: values must be in [min, max] range. "+("Current values: [start value: "+s+", end value: ")+(r+", min: "+n+", max: "+i+"]"));if(s>r)throw new Error("MDCSliderFoundation: start value must be <= end value. "+("Current values: [start value: "+s+", end value: "+r+"]"));if(l<0)throw new Error("MDCSliderFoundation: minimum range must be non-negative. "+("Current min range: "+l));if(r-s<l)throw new Error("MDCSliderFoundation: start value and end value must differ by at least "+(l+". Current values: [start value: "+s+", ")+("end value: "+r+"]"));var d=(s-n)/o,u=(r-n)/o;if(!Number.isInteger(parseFloat(d.toFixed(6)))||!Number.isInteger(parseFloat(u.toFixed(6))))throw new Error("MDCSliderFoundation: Slider values must be valid based on the "+("step value ("+o+"). Current values: [start value: ")+(s+", end value: "+r+", min: "+n+"]"))}else{if(r<n||r>i)throw new Error("MDCSliderFoundation: value must be in [min, max] range. "+("Current values: [value: "+r+", min: "+n+", max: "+i+"]"));var u=(r-n)/o;if(!Number.isInteger(parseFloat(u.toFixed(6))))throw new Error("MDCSliderFoundation: Slider value must be valid based on the "+("step value ("+o+"). Current value: "+r))}},e.prototype.registerEventHandlers=function(){this.adapter.registerWindowEventHandler("resize",this.resizeListener),e.SUPPORTS_POINTER_EVENTS?(this.adapter.registerEventHandler("pointerdown",this.pointerdownListener),this.adapter.registerEventHandler("pointerup",this.pointerupListener)):(this.adapter.registerEventHandler("mousedown",this.mousedownOrTouchstartListener),this.adapter.registerEventHandler("touchstart",this.mousedownOrTouchstartListener)),this.isRange&&(this.adapter.registerThumbEventHandler(c.START,"mouseenter",this.thumbMouseenterListener),this.adapter.registerThumbEventHandler(c.START,"mouseleave",this.thumbMouseleaveListener),this.adapter.registerInputEventHandler(c.START,"change",this.inputStartChangeListener),this.adapter.registerInputEventHandler(c.START,"focus",this.inputStartFocusListener),this.adapter.registerInputEventHandler(c.START,"blur",this.inputStartBlurListener)),this.adapter.registerThumbEventHandler(c.END,"mouseenter",this.thumbMouseenterListener),this.adapter.registerThumbEventHandler(c.END,"mouseleave",this.thumbMouseleaveListener),this.adapter.registerInputEventHandler(c.END,"change",this.inputEndChangeListener),this.adapter.registerInputEventHandler(c.END,"focus",this.inputEndFocusListener),this.adapter.registerInputEventHandler(c.END,"blur",this.inputEndBlurListener)},e.prototype.deregisterEventHandlers=function(){this.adapter.deregisterWindowEventHandler("resize",this.resizeListener),e.SUPPORTS_POINTER_EVENTS?(this.adapter.deregisterEventHandler("pointerdown",this.pointerdownListener),this.adapter.deregisterEventHandler("pointerup",this.pointerupListener)):(this.adapter.deregisterEventHandler("mousedown",this.mousedownOrTouchstartListener),this.adapter.deregisterEventHandler("touchstart",this.mousedownOrTouchstartListener)),this.isRange&&(this.adapter.deregisterThumbEventHandler(c.START,"mouseenter",this.thumbMouseenterListener),this.adapter.deregisterThumbEventHandler(c.START,"mouseleave",this.thumbMouseleaveListener),this.adapter.deregisterInputEventHandler(c.START,"change",this.inputStartChangeListener),this.adapter.deregisterInputEventHandler(c.START,"focus",this.inputStartFocusListener),this.adapter.deregisterInputEventHandler(c.START,"blur",this.inputStartBlurListener)),this.adapter.deregisterThumbEventHandler(c.END,"mouseenter",this.thumbMouseenterListener),this.adapter.deregisterThumbEventHandler(c.END,"mouseleave",this.thumbMouseleaveListener),this.adapter.deregisterInputEventHandler(c.END,"change",this.inputEndChangeListener),this.adapter.deregisterInputEventHandler(c.END,"focus",this.inputEndFocusListener),this.adapter.deregisterInputEventHandler(c.END,"blur",this.inputEndBlurListener)},e.prototype.handlePointerup=function(){this.handleUp(),this.adapter.deregisterEventHandler("pointermove",this.moveListener)},e.SUPPORTS_POINTER_EVENTS=Yt&&!!window.PointerEvent&&!Vn(),e}(R);function Vn(){return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document}function he(a){var e=/(?:\.(\d+))?(?:[eE]([+\-]?\d+))?$/.exec(String(a));if(!e)return 0;var t=e[1]||"",n=e[2]||0;return Math.max(0,(t==="0"?0:t.length)-Number(n))}/**
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
 */var Un=function(a){f(e,a);function e(){var t=a!==null&&a.apply(this,arguments)||this;return t.skipInitialUIUpdate=!1,t.valueToAriaValueTextFn=null,t}return e.attachTo=function(t,n){return n===void 0&&(n={}),new e(t,void 0,n)},e.prototype.getDefaultFoundation=function(){var t=this,n={hasClass:function(i){return t.root.classList.contains(i)},addClass:function(i){t.root.classList.add(i)},removeClass:function(i){t.root.classList.remove(i)},addThumbClass:function(i,r){t.getThumbEl(r).classList.add(i)},removeThumbClass:function(i,r){t.getThumbEl(r).classList.remove(i)},getAttribute:function(i){return t.root.getAttribute(i)},getInputValue:function(i){return t.getInput(i).value},setInputValue:function(i,r){t.getInput(r).value=i},getInputAttribute:function(i,r){return t.getInput(r).getAttribute(i)},setInputAttribute:function(i,r,s){t.getInput(s).setAttribute(i,r)},removeInputAttribute:function(i,r){t.getInput(r).removeAttribute(i)},focusInput:function(i){t.getInput(i).focus()},isInputFocused:function(i){return t.getInput(i)===document.activeElement},shouldHideFocusStylesForPointerEvents:function(){return!1},getThumbKnobWidth:function(i){return t.getThumbEl(i).querySelector("."+E.THUMB_KNOB).getBoundingClientRect().width},getThumbBoundingClientRect:function(i){return t.getThumbEl(i).getBoundingClientRect()},getBoundingClientRect:function(){return t.root.getBoundingClientRect()},getValueIndicatorContainerWidth:function(i){return t.getThumbEl(i).querySelector("."+E.VALUE_INDICATOR_CONTAINER).getBoundingClientRect().width},isRTL:function(){return getComputedStyle(t.root).direction==="rtl"},setThumbStyleProperty:function(i,r,s){t.getThumbEl(s).style.setProperty(i,r)},removeThumbStyleProperty:function(i,r){t.getThumbEl(r).style.removeProperty(i)},setTrackActiveStyleProperty:function(i,r){t.trackActive.style.setProperty(i,r)},removeTrackActiveStyleProperty:function(i){t.trackActive.style.removeProperty(i)},setValueIndicatorText:function(i,r){var s=t.getThumbEl(r).querySelector("."+E.VALUE_INDICATOR_TEXT);s.textContent=String(i)},getValueToAriaValueTextFn:function(){return t.valueToAriaValueTextFn},updateTickMarks:function(i){var r=t.root.querySelector("."+E.TICK_MARKS_CONTAINER);if(!r){r=document.createElement("div"),r.classList.add(E.TICK_MARKS_CONTAINER);var s=t.root.querySelector("."+E.TRACK);s.appendChild(r)}if(i.length!==r.children.length){for(;r.firstChild;)r.removeChild(r.firstChild);t.addTickMarks(r,i)}else t.updateTickMarks(r,i)},setPointerCapture:function(i){t.root.setPointerCapture(i)},emitChangeEvent:function(i,r){t.emit(pe.CHANGE,{value:i,thumb:r})},emitInputEvent:function(i,r){t.emit(pe.INPUT,{value:i,thumb:r})},emitDragStartEvent:function(i,r){t.getRipple(r).activate()},emitDragEndEvent:function(i,r){t.getRipple(r).deactivate()},registerEventHandler:function(i,r){t.listen(i,r)},deregisterEventHandler:function(i,r){t.unlisten(i,r)},registerThumbEventHandler:function(i,r,s){t.getThumbEl(i).addEventListener(r,s)},deregisterThumbEventHandler:function(i,r,s){t.getThumbEl(i).removeEventListener(r,s)},registerInputEventHandler:function(i,r,s){t.getInput(i).addEventListener(r,s)},deregisterInputEventHandler:function(i,r,s){t.getInput(i).removeEventListener(r,s)},registerBodyEventHandler:function(i,r){document.body.addEventListener(i,r)},deregisterBodyEventHandler:function(i,r){document.body.removeEventListener(i,r)},registerWindowEventHandler:function(i,r){window.addEventListener(i,r)},deregisterWindowEventHandler:function(i,r){window.removeEventListener(i,r)}};return new Hn(n)},e.prototype.initialize=function(t){var n=t===void 0?{}:t,i=n.skipInitialUIUpdate;this.inputs=Array.from(this.root.querySelectorAll("."+E.INPUT)),this.thumbs=Array.from(this.root.querySelectorAll("."+E.THUMB)),this.trackActive=this.root.querySelector("."+E.TRACK_ACTIVE),this.ripples=this.createRipples(),i&&(this.skipInitialUIUpdate=!0)},e.prototype.initialSyncWithDOM=function(){this.foundation.layout({skipUpdateUI:this.skipInitialUIUpdate})},e.prototype.layout=function(){this.foundation.layout()},e.prototype.getValueStart=function(){return this.foundation.getValueStart()},e.prototype.setValueStart=function(t){this.foundation.setValueStart(t)},e.prototype.getValue=function(){return this.foundation.getValue()},e.prototype.setValue=function(t){this.foundation.setValue(t)},e.prototype.getDisabled=function(){return this.foundation.getDisabled()},e.prototype.setDisabled=function(t){this.foundation.setDisabled(t)},e.prototype.setValueToAriaValueTextFn=function(t){this.valueToAriaValueTextFn=t},e.prototype.getThumbEl=function(t){return t===c.END?this.thumbs[this.thumbs.length-1]:this.thumbs[0]},e.prototype.getInput=function(t){return t===c.END?this.inputs[this.inputs.length-1]:this.inputs[0]},e.prototype.getRipple=function(t){return t===c.END?this.ripples[this.ripples.length-1]:this.ripples[0]},e.prototype.addTickMarks=function(t,n){for(var i=document.createDocumentFragment(),r=0;r<n.length;r++){var s=document.createElement("div"),o=n[r]===vt.ACTIVE?E.TICK_MARK_ACTIVE:E.TICK_MARK_INACTIVE;s.classList.add(o),i.appendChild(s)}t.appendChild(i)},e.prototype.updateTickMarks=function(t,n){for(var i=Array.from(t.children),r=0;r<i.length;r++)n[r]===vt.ACTIVE?(i[r].classList.add(E.TICK_MARK_ACTIVE),i[r].classList.remove(E.TICK_MARK_INACTIVE)):(i[r].classList.add(E.TICK_MARK_INACTIVE),i[r].classList.remove(E.TICK_MARK_ACTIVE))},e.prototype.createRipples=function(){for(var t=[],n=Array.from(this.root.querySelectorAll("."+E.THUMB)),i=function(o){var l=n[o],d=r.inputs[o],u=p(p({},H.createAdapter(r)),{addClass:function(m){l.classList.add(m)},computeBoundingRect:function(){return l.getBoundingClientRect()},deregisterInteractionHandler:function(m,h){d.removeEventListener(m,h)},isSurfaceActive:function(){return st(d,":active")},isUnbounded:function(){return!0},registerInteractionHandler:function(m,h){d.addEventListener(m,h,K())},removeClass:function(m){l.classList.remove(m)},updateCssVariable:function(m,h){l.style.setProperty(m,h)}}),v=new H(l,new St(u));v.unbounded=!0,t.push(v)},r=this,s=0;s<n.length;s++)i(s);return t},e}(L);/**
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
 */var at={CLOSING:"mdc-snackbar--closing",OPEN:"mdc-snackbar--open",OPENING:"mdc-snackbar--opening"},j={ACTION_SELECTOR:".mdc-snackbar__action",CLOSED_EVENT:"MDCSnackbar:closed",CLOSING_EVENT:"MDCSnackbar:closing",DATA_LIVE_LABEL_TEXT:"mdcSnackbarLabelText",DISMISS_SELECTOR:".mdc-snackbar__dismiss",LABEL_SELECTOR:".mdc-snackbar__label",OPENED_EVENT:"MDCSnackbar:opened",OPENING_EVENT:"MDCSnackbar:opening",REASON_ACTION:"action",REASON_DISMISS:"dismiss",REASON_SECONDARY_ACTION:"secondary-action",SURFACE_SELECTOR:".mdc-snackbar__surface"},Q={DEFAULT_AUTO_DISMISS_TIMEOUT_MS:5e3,INDETERMINATE:-1,MAX_AUTO_DISMISS_TIMEOUT_MS:1e4,MIN_AUTO_DISMISS_TIMEOUT_MS:4e3,SNACKBAR_ANIMATION_CLOSE_TIME_MS:75,SNACKBAR_ANIMATION_OPEN_TIME_MS:150,ARIA_LIVE_DELAY_MS:1e3};/**
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
 */var Kn=Q.ARIA_LIVE_DELAY_MS,fe=j.DATA_LIVE_LABEL_TEXT;function qn(a,e){e===void 0&&(e=a);var t=a.getAttribute("aria-live"),n=e.textContent.trim();if(!(!n||!t)){a.setAttribute("aria-live","off"),e.textContent="";var i=document.createElement("span");i.setAttribute("style","display: inline-block; width: 0; height: 1px;"),i.textContent=" ",e.appendChild(i),e.dataset[fe]=n,setTimeout(function(){a.setAttribute("aria-live",t),delete e.dataset[fe],e.textContent=n},Kn)}}/**
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
 */var me=at.OPENING,ve=at.OPEN,ge=at.CLOSING,Wn=j.REASON_ACTION,$t=j.REASON_DISMISS,jn=j.REASON_SECONDARY_ACTION,Gn=function(a){f(e,a);function e(t){var n=a.call(this,p(p({},e.defaultAdapter),t))||this;return n.opened=!1,n.animationFrame=0,n.animationTimer=0,n.autoDismissTimer=0,n.autoDismissTimeoutMs=Q.DEFAULT_AUTO_DISMISS_TIMEOUT_MS,n.closeOnEscape=!0,n}return Object.defineProperty(e,"cssClasses",{get:function(){return at},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return j},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Q},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},announce:function(){},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},removeClass:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.clearAutoDismissTimer(),cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=0,this.adapter.removeClass(me),this.adapter.removeClass(ve),this.adapter.removeClass(ge)},e.prototype.open=function(){var t=this;this.clearAutoDismissTimer(),this.opened=!0,this.adapter.notifyOpening(),this.adapter.removeClass(ge),this.adapter.addClass(me),this.adapter.announce(),this.runNextAnimationFrame(function(){t.adapter.addClass(ve),t.animationTimer=setTimeout(function(){var n=t.getTimeoutMs();t.handleAnimationTimerEnd(),t.adapter.notifyOpened(),n!==Q.INDETERMINATE&&(t.autoDismissTimer=setTimeout(function(){t.close($t)},n))},Q.SNACKBAR_ANIMATION_OPEN_TIME_MS)})},e.prototype.close=function(t){var n=this;t===void 0&&(t=""),this.opened&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=0,this.clearAutoDismissTimer(),this.opened=!1,this.adapter.notifyClosing(t),this.adapter.addClass(at.CLOSING),this.adapter.removeClass(at.OPEN),this.adapter.removeClass(at.OPENING),clearTimeout(this.animationTimer),this.animationTimer=setTimeout(function(){n.handleAnimationTimerEnd(),n.adapter.notifyClosed(t)},Q.SNACKBAR_ANIMATION_CLOSE_TIME_MS))},e.prototype.isOpen=function(){return this.opened},e.prototype.getTimeoutMs=function(){return this.autoDismissTimeoutMs},e.prototype.setTimeoutMs=function(t){var n=Q.MIN_AUTO_DISMISS_TIMEOUT_MS,i=Q.MAX_AUTO_DISMISS_TIMEOUT_MS,r=Q.INDETERMINATE;if(t===Q.INDETERMINATE||t<=i&&t>=n)this.autoDismissTimeoutMs=t;else throw new Error(`
        timeoutMs must be an integer in the range `+n+"–"+i+`
        (or `+r+" to disable), but got '"+t+"'")},e.prototype.getCloseOnEscape=function(){return this.closeOnEscape},e.prototype.setCloseOnEscape=function(t){this.closeOnEscape=t},e.prototype.handleKeyDown=function(t){var n=t.key==="Escape"||t.keyCode===27;n&&this.getCloseOnEscape()&&this.close($t)},e.prototype.handleActionButtonClick=function(t){this.close(Wn)},e.prototype.handleActionIconClick=function(t){this.close($t)},e.prototype.handleSecondaryActionButtonClick=function(t){this.close(jn)},e.prototype.clearAutoDismissTimer=function(){clearTimeout(this.autoDismissTimer),this.autoDismissTimer=0},e.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(at.OPENING),this.adapter.removeClass(at.CLOSING)},e.prototype.runNextAnimationFrame=function(t){var n=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){n.animationFrame=0,clearTimeout(n.animationTimer),n.animationTimer=setTimeout(t,0)})},e}(R);/**
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
 */var Xn=j.SURFACE_SELECTOR,zn=j.LABEL_SELECTOR,Ee=j.ACTION_SELECTOR,Yn=j.DISMISS_SELECTOR,$n=j.OPENING_EVENT,Qn=j.OPENED_EVENT,Zn=j.CLOSING_EVENT,Jn=j.CLOSED_EVENT,ti=function(a){f(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t){t===void 0&&(t=function(){return qn}),this.announce=t()},e.prototype.initialSyncWithDOM=function(){var t=this;this.surfaceEl=this.root.querySelector(Xn),this.labelEl=this.root.querySelector(zn),this.actionEl=this.root.querySelector(Ee),this.handleKeyDown=function(n){t.foundation.handleKeyDown(n)},this.handleSurfaceClick=function(n){var i=n.target;t.isActionButton(i)?t.foundation.handleActionButtonClick(n):t.isActionIcon(i)&&t.foundation.handleActionIconClick(n)},this.registerKeyDownHandler(this.handleKeyDown),this.registerSurfaceClickHandler(this.handleSurfaceClick)},e.prototype.destroy=function(){a.prototype.destroy.call(this),this.deregisterKeyDownHandler(this.handleKeyDown),this.deregisterSurfaceClickHandler(this.handleSurfaceClick)},e.prototype.open=function(){this.foundation.open()},e.prototype.close=function(t){t===void 0&&(t=""),this.foundation.close(t)},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){t.root.classList.add(i)},announce:function(){t.announce(t.labelEl)},notifyClosed:function(i){t.emit(Jn,i?{reason:i}:{})},notifyClosing:function(i){t.emit(Zn,i?{reason:i}:{})},notifyOpened:function(){t.emit(Qn,{})},notifyOpening:function(){t.emit($n,{})},removeClass:function(i){t.root.classList.remove(i)}};return new Gn(n)},Object.defineProperty(e.prototype,"timeoutMs",{get:function(){return this.foundation.getTimeoutMs()},set:function(t){this.foundation.setTimeoutMs(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"closeOnEscape",{get:function(){return this.foundation.getCloseOnEscape()},set:function(t){this.foundation.setCloseOnEscape(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isOpen",{get:function(){return this.foundation.isOpen()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"labelText",{get:function(){return this.labelEl.textContent},set:function(t){this.labelEl.textContent=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"actionButtonText",{get:function(){return this.actionEl.textContent},set:function(t){this.actionEl.textContent=t},enumerable:!1,configurable:!0}),e.prototype.registerKeyDownHandler=function(t){this.listen("keydown",t)},e.prototype.deregisterKeyDownHandler=function(t){this.unlisten("keydown",t)},e.prototype.registerSurfaceClickHandler=function(t){this.surfaceEl.addEventListener("click",t)},e.prototype.deregisterSurfaceClickHandler=function(t){this.surfaceEl.removeEventListener("click",t)},e.prototype.isActionButton=function(t){return!!Ct(t,Ee)},e.prototype.isActionIcon=function(t){return!!Ct(t,Yn)},e}(L);/**
 * @license
 * Copyright 2021 Google Inc.
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
 */var mt;(function(a){a.PROCESSING="mdc-switch--processing",a.SELECTED="mdc-switch--selected",a.UNSELECTED="mdc-switch--unselected"})(mt||(mt={}));var jt;(function(a){a.RIPPLE=".mdc-switch__ripple"})(jt||(jt={}));/**
 * @license
 * Copyright 2021 Google Inc.
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
 */function ei(a,e,t){var n=ni(a,e),i=n.getObservers(e);return i.push(t),function(){i.splice(i.indexOf(t),1)}}var Vt=new WeakMap;function ni(a,e){var t=new Map;Vt.has(a)||Vt.set(a,{isEnabled:!0,getObservers:function(d){var u=t.get(d)||[];return t.has(d)||t.set(d,u),u},installedProperties:new Set});var n=Vt.get(a);if(n.installedProperties.has(e))return n;var i=ii(a,e)||{configurable:!0,enumerable:!0,value:a[e],writable:!0},r=p({},i),s=i.get,o=i.set;if("value"in i){delete r.value,delete r.writable;var l=i.value;s=function(){return l},i.writable&&(o=function(d){l=d})}return s&&(r.get=function(){return s.call(this)}),o&&(r.set=function(d){var u,v,m=s?s.call(this):d;if(o.call(this,d),n.isEnabled&&(!s||d!==m))try{for(var h=V(n.getObservers(e)),b=h.next();!b.done;b=h.next()){var I=b.value;I(d,m)}}catch(_){u={error:_}}finally{try{b&&!b.done&&(v=h.return)&&v.call(h)}finally{if(u)throw u.error}}}),n.installedProperties.add(e),Object.defineProperty(a,e,r),n}function ii(a,e){for(var t=a,n;t&&(n=Object.getOwnPropertyDescriptor(t,e),!n);)t=Object.getPrototypeOf(t);return n}function ri(a,e){var t=Vt.get(a);t&&(t.isEnabled=e)}/**
 * @license
 * Copyright 2021 Google Inc.
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
 */var ai=function(a){f(e,a);function e(t){var n=a.call(this,t)||this;return n.unobserves=new Set,n}return e.prototype.destroy=function(){a.prototype.destroy.call(this),this.unobserve()},e.prototype.observe=function(t,n){var i,r,s=this,o=[];try{for(var l=V(Object.keys(n)),d=l.next();!d.done;d=l.next()){var u=d.value,v=n[u].bind(this);o.push(this.observeProperty(t,u,v))}}catch(h){i={error:h}}finally{try{d&&!d.done&&(r=l.return)&&r.call(l)}finally{if(i)throw i.error}}var m=function(){var h,b;try{for(var I=V(o),_=I.next();!_.done;_=I.next()){var k=_.value;k()}}catch(T){h={error:T}}finally{try{_&&!_.done&&(b=I.return)&&b.call(I)}finally{if(h)throw h.error}}s.unobserves.delete(m)};return this.unobserves.add(m),m},e.prototype.observeProperty=function(t,n,i){return ei(t,n,i)},e.prototype.setObserversEnabled=function(t,n){ri(t,n)},e.prototype.unobserve=function(){var t,n;try{for(var i=V(lt([],J(this.unobserves))),r=i.next();!r.done;r=i.next()){var s=r.value;s()}}catch(o){t={error:o}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},e}(R);/**
 * @license
 * Copyright 2021 Google Inc.
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
 */var si=function(a){f(e,a);function e(t){var n=a.call(this,t)||this;return n.handleClick=n.handleClick.bind(n),n}return e.prototype.init=function(){this.observe(this.adapter.state,{disabled:this.stopProcessingIfDisabled,processing:this.stopProcessingIfDisabled})},e.prototype.handleClick=function(){this.adapter.state.disabled||(this.adapter.state.selected=!this.adapter.state.selected)},e.prototype.stopProcessingIfDisabled=function(){this.adapter.state.disabled&&(this.adapter.state.processing=!1)},e}(ai),oi=function(a){f(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.prototype.init=function(){a.prototype.init.call(this),this.observe(this.adapter.state,{disabled:this.onDisabledChange,processing:this.onProcessingChange,selected:this.onSelectedChange})},e.prototype.initFromDOM=function(){this.setObserversEnabled(this.adapter.state,!1),this.adapter.state.selected=this.adapter.hasClass(mt.SELECTED),this.onSelectedChange(),this.adapter.state.disabled=this.adapter.isDisabled(),this.adapter.state.processing=this.adapter.hasClass(mt.PROCESSING),this.setObserversEnabled(this.adapter.state,!0),this.stopProcessingIfDisabled()},e.prototype.onDisabledChange=function(){this.adapter.setDisabled(this.adapter.state.disabled)},e.prototype.onProcessingChange=function(){this.toggleClass(this.adapter.state.processing,mt.PROCESSING)},e.prototype.onSelectedChange=function(){this.adapter.setAriaChecked(String(this.adapter.state.selected)),this.toggleClass(this.adapter.state.selected,mt.SELECTED),this.toggleClass(!this.adapter.state.selected,mt.UNSELECTED)},e.prototype.toggleClass=function(t,n){t?this.adapter.addClass(n):this.adapter.removeClass(n)},e}(si);/**
 * @license
 * Copyright 2021 Google Inc.
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
 */var li=function(a){f(e,a);function e(t,n){var i=a.call(this,t,n)||this;return i.root=t,i}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(){this.ripple=new H(this.root,this.createRippleFoundation())},e.prototype.initialSyncWithDOM=function(){var t=this.root.querySelector(jt.RIPPLE);if(!t)throw new Error("Switch "+jt.RIPPLE+" element is required.");this.rippleElement=t,this.root.addEventListener("click",this.foundation.handleClick),this.foundation.initFromDOM()},e.prototype.destroy=function(){a.prototype.destroy.call(this),this.ripple.destroy(),this.root.removeEventListener("click",this.foundation.handleClick)},e.prototype.getDefaultFoundation=function(){return new oi(this.createAdapter())},e.prototype.createAdapter=function(){var t=this;return{addClass:function(n){t.root.classList.add(n)},hasClass:function(n){return t.root.classList.contains(n)},isDisabled:function(){return t.root.disabled},removeClass:function(n){t.root.classList.remove(n)},setAriaChecked:function(n){t.root.setAttribute("aria-checked",n)},setDisabled:function(n){t.root.disabled=n},state:this}},e.prototype.createRippleFoundation=function(){return new St(this.createRippleAdapter())},e.prototype.createRippleAdapter=function(){var t=this;return p(p({},H.createAdapter(this)),{computeBoundingRect:function(){return t.rippleElement.getBoundingClientRect()},isUnbounded:function(){return!0}})},e}(L);/**
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
 */var Ve={ANIMATING:"mdc-tab-scroller--animating",SCROLL_AREA_SCROLL:"mdc-tab-scroller__scroll-area--scroll",SCROLL_TEST:"mdc-tab-scroller__test"},ci={AREA_SELECTOR:".mdc-tab-scroller__scroll-area",CONTENT_SELECTOR:".mdc-tab-scroller__scroll-content"};/**
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
 */var re=function(){function a(e){this.adapter=e}return a}();/**
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
 */var di=function(a){f(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.prototype.getScrollPositionRTL=function(){var t=this.adapter.getScrollAreaScrollLeft(),n=this.calculateScrollEdges().right;return Math.round(n-t)},e.prototype.scrollToRTL=function(t){var n=this.calculateScrollEdges(),i=this.adapter.getScrollAreaScrollLeft(),r=this.clampScrollValue(n.right-t);return{finalScrollPosition:r,scrollDelta:r-i}},e.prototype.incrementScrollRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(n-t);return{finalScrollPosition:i,scrollDelta:i-n}},e.prototype.getAnimatingScrollPosition=function(t){return t},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),n=this.adapter.getScrollAreaOffsetWidth();return{left:0,right:t-n}},e.prototype.clampScrollValue=function(t){var n=this.calculateScrollEdges();return Math.min(Math.max(n.left,t),n.right)},e}(re);/**
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
 */var ui=function(a){f(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.prototype.getScrollPositionRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft();return Math.round(t-n)},e.prototype.scrollToRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(-t);return{finalScrollPosition:i,scrollDelta:i-n}},e.prototype.incrementScrollRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(n-t);return{finalScrollPosition:i,scrollDelta:i-n}},e.prototype.getAnimatingScrollPosition=function(t,n){return t-n},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),n=this.adapter.getScrollAreaOffsetWidth();return{left:n-t,right:0}},e.prototype.clampScrollValue=function(t){var n=this.calculateScrollEdges();return Math.max(Math.min(n.right,t),n.left)},e}(re);/**
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
 */var pi=function(a){f(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.prototype.getScrollPositionRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft();return Math.round(n-t)},e.prototype.scrollToRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(t);return{finalScrollPosition:i,scrollDelta:n-i}},e.prototype.incrementScrollRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(n+t);return{finalScrollPosition:i,scrollDelta:n-i}},e.prototype.getAnimatingScrollPosition=function(t,n){return t+n},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),n=this.adapter.getScrollAreaOffsetWidth();return{left:t-n,right:0}},e.prototype.clampScrollValue=function(t){var n=this.calculateScrollEdges();return Math.min(Math.max(n.right,t),n.left)},e}(re);/**
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
 */var Qt=function(a){f(e,a);function e(t){var n=a.call(this,p(p({},e.defaultAdapter),t))||this;return n.isAnimating=!1,n}return Object.defineProperty(e,"cssClasses",{get:function(){return Ve},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return ci},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{eventTargetMatchesSelector:function(){return!1},addClass:function(){},removeClass:function(){},addScrollAreaClass:function(){},setScrollAreaStyleProperty:function(){},setScrollContentStyleProperty:function(){},getScrollContentStyleValue:function(){return""},setScrollAreaScrollLeft:function(){},getScrollAreaScrollLeft:function(){return 0},getScrollContentOffsetWidth:function(){return 0},getScrollAreaOffsetWidth:function(){return 0},computeScrollAreaClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeScrollContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeHorizontalScrollbarHeight:function(){return 0}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this.adapter.computeHorizontalScrollbarHeight();this.adapter.setScrollAreaStyleProperty("margin-bottom",-t+"px"),this.adapter.addScrollAreaClass(e.cssClasses.SCROLL_AREA_SCROLL)},e.prototype.getScrollPosition=function(){if(this.isRTL())return this.computeCurrentScrollPositionRTL();var t=this.calculateCurrentTranslateX(),n=this.adapter.getScrollAreaScrollLeft();return n-t},e.prototype.handleInteraction=function(){this.isAnimating&&this.stopScrollAnimation()},e.prototype.handleTransitionEnd=function(t){var n=t.target;!this.isAnimating||!this.adapter.eventTargetMatchesSelector(n,e.strings.CONTENT_SELECTOR)||(this.isAnimating=!1,this.adapter.removeClass(e.cssClasses.ANIMATING))},e.prototype.incrementScroll=function(t){t!==0&&this.animate(this.getIncrementScrollOperation(t))},e.prototype.incrementScrollImmediate=function(t){if(t!==0){var n=this.getIncrementScrollOperation(t);n.scrollDelta!==0&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(n.finalScrollPosition))}},e.prototype.scrollTo=function(t){if(this.isRTL()){this.scrollToImplRTL(t);return}this.scrollToImpl(t)},e.prototype.getRTLScroller=function(){return this.rtlScrollerInstance||(this.rtlScrollerInstance=this.rtlScrollerFactory()),this.rtlScrollerInstance},e.prototype.calculateCurrentTranslateX=function(){var t=this.adapter.getScrollContentStyleValue("transform");if(t==="none")return 0;var n=/\((.+?)\)/.exec(t);if(!n)return 0;var i=n[1],r=J(i.split(","),6);r[0],r[1],r[2],r[3];var s=r[4];return r[5],parseFloat(s)},e.prototype.clampScrollValue=function(t){var n=this.calculateScrollEdges();return Math.min(Math.max(n.left,t),n.right)},e.prototype.computeCurrentScrollPositionRTL=function(){var t=this.calculateCurrentTranslateX();return this.getRTLScroller().getScrollPositionRTL(t)},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),n=this.adapter.getScrollAreaOffsetWidth();return{left:0,right:t-n}},e.prototype.scrollToImpl=function(t){var n=this.getScrollPosition(),i=this.clampScrollValue(t),r=i-n;this.animate({finalScrollPosition:i,scrollDelta:r})},e.prototype.scrollToImplRTL=function(t){var n=this.getRTLScroller().scrollToRTL(t);this.animate(n)},e.prototype.getIncrementScrollOperation=function(t){if(this.isRTL())return this.getRTLScroller().incrementScrollRTL(t);var n=this.getScrollPosition(),i=t+n,r=this.clampScrollValue(i),s=r-n;return{finalScrollPosition:r,scrollDelta:s}},e.prototype.animate=function(t){var n=this;t.scrollDelta!==0&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(t.finalScrollPosition),this.adapter.setScrollContentStyleProperty("transform","translateX("+t.scrollDelta+"px)"),this.adapter.computeScrollAreaClientRect(),requestAnimationFrame(function(){n.adapter.addClass(e.cssClasses.ANIMATING),n.adapter.setScrollContentStyleProperty("transform","none")}),this.isAnimating=!0)},e.prototype.stopScrollAnimation=function(){this.isAnimating=!1;var t=this.getAnimatingScrollPosition();this.adapter.removeClass(e.cssClasses.ANIMATING),this.adapter.setScrollContentStyleProperty("transform","translateX(0px)"),this.adapter.setScrollAreaScrollLeft(t)},e.prototype.getAnimatingScrollPosition=function(){var t=this.calculateCurrentTranslateX(),n=this.adapter.getScrollAreaScrollLeft();return this.isRTL()?this.getRTLScroller().getAnimatingScrollPosition(n,t):n-t},e.prototype.rtlScrollerFactory=function(){var t=this.adapter.getScrollAreaScrollLeft();this.adapter.setScrollAreaScrollLeft(t-1);var n=this.adapter.getScrollAreaScrollLeft();if(n<0)return this.adapter.setScrollAreaScrollLeft(t),new ui(this.adapter);var i=this.adapter.computeScrollAreaClientRect(),r=this.adapter.computeScrollContentClientRect(),s=Math.round(r.right-i.right);return this.adapter.setScrollAreaScrollLeft(t),s===n?new pi(this.adapter):new di(this.adapter)},e.prototype.isRTL=function(){return this.adapter.getScrollContentStyleValue("direction")==="rtl"},e}(R);/**
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
 */var Zt;function hi(a,e){if(e===void 0&&(e=!0),e&&typeof Zt<"u")return Zt;var t=a.createElement("div");t.classList.add(Ve.SCROLL_TEST),a.body.appendChild(t);var n=t.offsetHeight-t.clientHeight;return a.body.removeChild(t),e&&(Zt=n),n}/**
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
 */var fi=function(a){f(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(){this.area=this.root.querySelector(Qt.strings.AREA_SELECTOR),this.content=this.root.querySelector(Qt.strings.CONTENT_SELECTOR)},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleInteraction=function(){t.foundation.handleInteraction()},this.handleTransitionEnd=function(n){t.foundation.handleTransitionEnd(n)},this.area.addEventListener("wheel",this.handleInteraction,K()),this.area.addEventListener("touchstart",this.handleInteraction,K()),this.area.addEventListener("pointerdown",this.handleInteraction,K()),this.area.addEventListener("mousedown",this.handleInteraction,K()),this.area.addEventListener("keydown",this.handleInteraction,K()),this.content.addEventListener("transitionend",this.handleTransitionEnd)},e.prototype.destroy=function(){a.prototype.destroy.call(this),this.area.removeEventListener("wheel",this.handleInteraction,K()),this.area.removeEventListener("touchstart",this.handleInteraction,K()),this.area.removeEventListener("pointerdown",this.handleInteraction,K()),this.area.removeEventListener("mousedown",this.handleInteraction,K()),this.area.removeEventListener("keydown",this.handleInteraction,K()),this.content.removeEventListener("transitionend",this.handleTransitionEnd)},e.prototype.getDefaultFoundation=function(){var t=this,n={eventTargetMatchesSelector:function(i,r){return st(i,r)},addClass:function(i){t.root.classList.add(i)},removeClass:function(i){t.root.classList.remove(i)},addScrollAreaClass:function(i){t.area.classList.add(i)},setScrollAreaStyleProperty:function(i,r){t.area.style.setProperty(i,r)},setScrollContentStyleProperty:function(i,r){t.content.style.setProperty(i,r)},getScrollContentStyleValue:function(i){return window.getComputedStyle(t.content).getPropertyValue(i)},setScrollAreaScrollLeft:function(i){return t.area.scrollLeft=i},getScrollAreaScrollLeft:function(){return t.area.scrollLeft},getScrollContentOffsetWidth:function(){return t.content.offsetWidth},getScrollAreaOffsetWidth:function(){return t.area.offsetWidth},computeScrollAreaClientRect:function(){return t.area.getBoundingClientRect()},computeScrollContentClientRect:function(){return t.content.getBoundingClientRect()},computeHorizontalScrollbarHeight:function(){return hi(document)}};return new Qt(n)},e.prototype.getScrollPosition=function(){return this.foundation.getScrollPosition()},e.prototype.getScrollContentWidth=function(){return this.content.offsetWidth},e.prototype.incrementScroll=function(t){this.foundation.incrementScroll(t)},e.prototype.scrollTo=function(t){this.foundation.scrollTo(t)},e}(L);/**
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
 */var mi={ACTIVE:"mdc-tab-indicator--active",FADE:"mdc-tab-indicator--fade",NO_TRANSITION:"mdc-tab-indicator--no-transition"},vi={CONTENT_SELECTOR:".mdc-tab-indicator__content"};/**
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
 */var Y=function(a){f(e,a);function e(t){return a.call(this,p(p({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return mi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return vi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},computeContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},setContentStyleProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.computeContentClientRect=function(){return this.adapter.computeContentClientRect()},e}(R);/**
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
 */var gi=function(a){f(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.prototype.activate=function(){this.adapter.addClass(Y.cssClasses.ACTIVE)},e.prototype.deactivate=function(){this.adapter.removeClass(Y.cssClasses.ACTIVE)},e}(Y);/**
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
 */var Ei=function(a){f(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.prototype.activate=function(t){if(!t){this.adapter.addClass(Y.cssClasses.ACTIVE);return}var n=this.computeContentClientRect(),i=t.width/n.width,r=t.left-n.left;this.adapter.addClass(Y.cssClasses.NO_TRANSITION),this.adapter.setContentStyleProperty("transform","translateX("+r+"px) scaleX("+i+")"),this.computeContentClientRect(),this.adapter.removeClass(Y.cssClasses.NO_TRANSITION),this.adapter.addClass(Y.cssClasses.ACTIVE),this.adapter.setContentStyleProperty("transform","")},e.prototype.deactivate=function(){this.adapter.removeClass(Y.cssClasses.ACTIVE)},e}(Y);/**
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
 */var bi=function(a){f(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(){this.content=this.root.querySelector(Y.strings.CONTENT_SELECTOR)},e.prototype.computeContentClientRect=function(){return this.foundation.computeContentClientRect()},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){t.root.classList.add(i)},removeClass:function(i){t.root.classList.remove(i)},computeContentClientRect:function(){return t.content.getBoundingClientRect()},setContentStyleProperty:function(i,r){t.content.style.setProperty(i,r)}};return this.root.classList.contains(Y.cssClasses.FADE)?new gi(n):new Ei(n)},e.prototype.activate=function(t){this.foundation.activate(t)},e.prototype.deactivate=function(){this.foundation.deactivate()},e}(L);/**
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
 */var kt={ACTIVE:"mdc-tab--active"},Dt={ARIA_SELECTED:"aria-selected",CONTENT_SELECTOR:".mdc-tab__content",INTERACTED_EVENT:"MDCTab:interacted",RIPPLE_SELECTOR:".mdc-tab__ripple",TABINDEX:"tabIndex",TAB_INDICATOR_SELECTOR:".mdc-tab-indicator"};/**
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
 */var Tt=function(a){f(e,a);function e(t){var n=a.call(this,p(p({},e.defaultAdapter),t))||this;return n.focusOnActivate=!0,n}return Object.defineProperty(e,"cssClasses",{get:function(){return kt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Dt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},activateIndicator:function(){},deactivateIndicator:function(){},notifyInteracted:function(){},getOffsetLeft:function(){return 0},getOffsetWidth:function(){return 0},getContentOffsetLeft:function(){return 0},getContentOffsetWidth:function(){return 0},focus:function(){},isFocused:function(){return!1}}},enumerable:!1,configurable:!0}),e.prototype.handleClick=function(){this.adapter.notifyInteracted()},e.prototype.isActive=function(){return this.adapter.hasClass(kt.ACTIVE)},e.prototype.setFocusOnActivate=function(t){this.focusOnActivate=t},e.prototype.activate=function(t){this.adapter.addClass(kt.ACTIVE),this.adapter.setAttr(Dt.ARIA_SELECTED,"true"),this.adapter.setAttr(Dt.TABINDEX,"0"),this.adapter.activateIndicator(t),this.focusOnActivate&&!this.adapter.isFocused()&&this.adapter.focus()},e.prototype.deactivate=function(){this.isActive()&&(this.adapter.removeClass(kt.ACTIVE),this.adapter.setAttr(Dt.ARIA_SELECTED,"false"),this.adapter.setAttr(Dt.TABINDEX,"-1"),this.adapter.deactivateIndicator())},e.prototype.computeDimensions=function(){var t=this.adapter.getOffsetWidth(),n=this.adapter.getOffsetLeft(),i=this.adapter.getContentOffsetWidth(),r=this.adapter.getContentOffsetLeft();return{contentLeft:n+r,contentRight:n+r+i,rootLeft:n,rootRight:n+t}},e}(R);/**
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
 */var Ii=function(a){f(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t,n){t===void 0&&(t=function(s,o){return new H(s,o)}),n===void 0&&(n=function(s){return new bi(s)}),this.id=this.root.id;var i=new St(H.createAdapter(this));this.ripple=t(this.root,i);var r=this.root.querySelector(Tt.strings.TAB_INDICATOR_SELECTOR);this.tabIndicator=n(r),this.content=this.root.querySelector(Tt.strings.CONTENT_SELECTOR)},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleClick=function(){t.foundation.handleClick()},this.listen("click",this.handleClick)},e.prototype.destroy=function(){this.unlisten("click",this.handleClick),this.ripple.destroy(),a.prototype.destroy.call(this)},e.prototype.getDefaultFoundation=function(){var t=this,n={setAttr:function(i,r){t.safeSetAttribute(t.root,i,r)},addClass:function(i){t.root.classList.add(i)},removeClass:function(i){t.root.classList.remove(i)},hasClass:function(i){return t.root.classList.contains(i)},activateIndicator:function(i){t.tabIndicator.activate(i)},deactivateIndicator:function(){t.tabIndicator.deactivate()},notifyInteracted:function(){t.emit(Tt.strings.INTERACTED_EVENT,{tabId:t.id},!0)},getOffsetLeft:function(){return t.root.offsetLeft},getOffsetWidth:function(){return t.root.offsetWidth},getContentOffsetLeft:function(){return t.content.offsetLeft},getContentOffsetWidth:function(){return t.content.offsetWidth},focus:function(){t.root.focus()},isFocused:function(){return t.root===document.activeElement}};return new Tt(n)},Object.defineProperty(e.prototype,"active",{get:function(){return this.foundation.isActive()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"focusOnActivate",{set:function(t){this.foundation.setFocusOnActivate(t)},enumerable:!1,configurable:!0}),e.prototype.activate=function(t){this.foundation.activate(t)},e.prototype.deactivate=function(){this.foundation.deactivate()},e.prototype.computeIndicatorClientRect=function(){return this.tabIndicator.computeContentClientRect()},e.prototype.computeDimensions=function(){return this.foundation.computeDimensions()},e.prototype.focus=function(){this.root.focus()},e}(L);/**
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
 */var P={ARROW_LEFT_KEY:"ArrowLeft",ARROW_RIGHT_KEY:"ArrowRight",END_KEY:"End",ENTER_KEY:"Enter",HOME_KEY:"Home",SPACE_KEY:"Space",TAB_ACTIVATED_EVENT:"MDCTabBar:activated",TAB_SCROLLER_SELECTOR:".mdc-tab-scroller",TAB_SELECTOR:".mdc-tab"},$={ARROW_LEFT_KEYCODE:37,ARROW_RIGHT_KEYCODE:39,END_KEYCODE:35,ENTER_KEYCODE:13,EXTRA_SCROLL_AMOUNT:20,HOME_KEYCODE:36,SPACE_KEYCODE:32};/**
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
 */var gt=new Set;gt.add(P.ARROW_LEFT_KEY);gt.add(P.ARROW_RIGHT_KEY);gt.add(P.END_KEY);gt.add(P.HOME_KEY);gt.add(P.ENTER_KEY);gt.add(P.SPACE_KEY);var Et=new Map;Et.set($.ARROW_LEFT_KEYCODE,P.ARROW_LEFT_KEY);Et.set($.ARROW_RIGHT_KEYCODE,P.ARROW_RIGHT_KEY);Et.set($.END_KEYCODE,P.END_KEY);Et.set($.HOME_KEYCODE,P.HOME_KEY);Et.set($.ENTER_KEYCODE,P.ENTER_KEY);Et.set($.SPACE_KEYCODE,P.SPACE_KEY);var Ue=function(a){f(e,a);function e(t){var n=a.call(this,p(p({},e.defaultAdapter),t))||this;return n.useAutomaticActivation=!1,n}return Object.defineProperty(e,"strings",{get:function(){return P},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return $},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{scrollTo:function(){},incrementScroll:function(){},getScrollPosition:function(){return 0},getScrollContentWidth:function(){return 0},getOffsetWidth:function(){return 0},isRTL:function(){return!1},setActiveTab:function(){},activateTabAtIndex:function(){},deactivateTabAtIndex:function(){},focusTabAtIndex:function(){},getTabIndicatorClientRectAtIndex:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getTabDimensionsAtIndex:function(){return{rootLeft:0,rootRight:0,contentLeft:0,contentRight:0}},getPreviousActiveTabIndex:function(){return-1},getFocusedTabIndex:function(){return-1},getIndexOfTabById:function(){return-1},getTabListLength:function(){return 0},notifyTabActivated:function(){}}},enumerable:!1,configurable:!0}),e.prototype.setUseAutomaticActivation=function(t){this.useAutomaticActivation=t},e.prototype.activateTab=function(t){var n=this.adapter.getPreviousActiveTabIndex();if(!(!this.indexIsInRange(t)||t===n)){var i;n!==-1&&(this.adapter.deactivateTabAtIndex(n),i=this.adapter.getTabIndicatorClientRectAtIndex(n)),this.adapter.activateTabAtIndex(t,i),this.scrollIntoView(t),this.adapter.notifyTabActivated(t)}},e.prototype.handleKeyDown=function(t){var n=this.getKeyFromEvent(t);if(n!==void 0&&(this.isActivationKey(n)||t.preventDefault(),!(this.useAutomaticActivation&&this.isActivationKey(n)))){var i=this.adapter.getFocusedTabIndex();if(this.isActivationKey(n)){this.adapter.setActiveTab(i);return}var r=this.determineTargetFromKey(i,n);this.adapter.focusTabAtIndex(r),this.scrollIntoView(r),this.useAutomaticActivation&&this.adapter.setActiveTab(r)}},e.prototype.handleTabInteraction=function(t){this.adapter.setActiveTab(this.adapter.getIndexOfTabById(t.detail.tabId))},e.prototype.scrollIntoView=function(t){if(this.indexIsInRange(t)){if(t===0){this.adapter.scrollTo(0);return}if(t===this.adapter.getTabListLength()-1){this.adapter.scrollTo(this.adapter.getScrollContentWidth());return}if(this.isRTL()){this.scrollIntoViewImplRTL(t);return}this.scrollIntoViewImpl(t)}},e.prototype.determineTargetFromKey=function(t,n){var i=this.isRTL(),r=this.adapter.getTabListLength()-1,s=n===P.END_KEY,o=n===P.ARROW_LEFT_KEY&&!i||n===P.ARROW_RIGHT_KEY&&i,l=n===P.ARROW_RIGHT_KEY&&!i||n===P.ARROW_LEFT_KEY&&i,d=t;return s?d=r:o?d-=1:l?d+=1:d=0,d<0?d=r:d>r&&(d=0),d},e.prototype.calculateScrollIncrement=function(t,n,i,r){var s=this.adapter.getTabDimensionsAtIndex(n),o=s.contentLeft-i-r,l=s.contentRight-i,d=l-$.EXTRA_SCROLL_AMOUNT,u=o+$.EXTRA_SCROLL_AMOUNT;return n<t?Math.min(d,0):Math.max(u,0)},e.prototype.calculateScrollIncrementRTL=function(t,n,i,r,s){var o=this.adapter.getTabDimensionsAtIndex(n),l=s-o.contentLeft-i,d=s-o.contentRight-i-r,u=d+$.EXTRA_SCROLL_AMOUNT,v=l-$.EXTRA_SCROLL_AMOUNT;return n>t?Math.max(u,0):Math.min(v,0)},e.prototype.findAdjacentTabIndexClosestToEdge=function(t,n,i,r){var s=n.rootLeft-i,o=n.rootRight-i-r,l=s+o,d=s<0||l<0,u=o>0||l>0;return d?t-1:u?t+1:-1},e.prototype.findAdjacentTabIndexClosestToEdgeRTL=function(t,n,i,r,s){var o=s-n.rootLeft-r-i,l=s-n.rootRight-i,d=o+l,u=o>0||d>0,v=l<0||d<0;return u?t+1:v?t-1:-1},e.prototype.getKeyFromEvent=function(t){return gt.has(t.key)?t.key:Et.get(t.keyCode)},e.prototype.isActivationKey=function(t){return t===P.SPACE_KEY||t===P.ENTER_KEY},e.prototype.indexIsInRange=function(t){return t>=0&&t<this.adapter.getTabListLength()},e.prototype.isRTL=function(){return this.adapter.isRTL()},e.prototype.scrollIntoViewImpl=function(t){var n=this.adapter.getScrollPosition(),i=this.adapter.getOffsetWidth(),r=this.adapter.getTabDimensionsAtIndex(t),s=this.findAdjacentTabIndexClosestToEdge(t,r,n,i);if(this.indexIsInRange(s)){var o=this.calculateScrollIncrement(t,s,n,i);this.adapter.incrementScroll(o)}},e.prototype.scrollIntoViewImplRTL=function(t){var n=this.adapter.getScrollPosition(),i=this.adapter.getOffsetWidth(),r=this.adapter.getTabDimensionsAtIndex(t),s=this.adapter.getScrollContentWidth(),o=this.findAdjacentTabIndexClosestToEdgeRTL(t,r,n,i,s);if(this.indexIsInRange(o)){var l=this.calculateScrollIncrementRTL(t,o,n,i,s);this.adapter.incrementScroll(l)}},e}(R);/**
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
 */var Jt=Ue.strings,yi=0,Ti=function(a){f(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"focusOnActivate",{set:function(t){var n,i;try{for(var r=V(this.tabList),s=r.next();!s.done;s=r.next()){var o=s.value;o.focusOnActivate=t}}catch(l){n={error:l}}finally{try{s&&!s.done&&(i=r.return)&&i.call(r)}finally{if(n)throw n.error}}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"useAutomaticActivation",{set:function(t){this.foundation.setUseAutomaticActivation(t)},enumerable:!1,configurable:!0}),e.prototype.initialize=function(t,n){t===void 0&&(t=function(i){return new Ii(i)}),n===void 0&&(n=function(i){return new fi(i)}),this.tabList=this.instantiateTabs(t),this.tabScroller=this.instantiatetabScroller(n)},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleTabInteraction=function(i){t.foundation.handleTabInteraction(i)},this.handleKeyDown=function(i){t.foundation.handleKeyDown(i)},this.listen(Tt.strings.INTERACTED_EVENT,this.handleTabInteraction),this.listen("keydown",this.handleKeyDown);for(var n=0;n<this.tabList.length;n++)if(this.tabList[n].active){this.scrollIntoView(n);break}},e.prototype.destroy=function(){var t,n;a.prototype.destroy.call(this),this.unlisten(Tt.strings.INTERACTED_EVENT,this.handleTabInteraction),this.unlisten("keydown",this.handleKeyDown);try{for(var i=V(this.tabList),r=i.next();!r.done;r=i.next()){var s=r.value;s.destroy()}}catch(o){t={error:o}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}this.tabScroller&&this.tabScroller.destroy()},e.prototype.getDefaultFoundation=function(){var t=this,n={scrollTo:function(i){t.tabScroller.scrollTo(i)},incrementScroll:function(i){t.tabScroller.incrementScroll(i)},getScrollPosition:function(){return t.tabScroller.getScrollPosition()},getScrollContentWidth:function(){return t.tabScroller.getScrollContentWidth()},getOffsetWidth:function(){return t.root.offsetWidth},isRTL:function(){return window.getComputedStyle(t.root).getPropertyValue("direction")==="rtl"},setActiveTab:function(i){t.foundation.activateTab(i)},activateTabAtIndex:function(i,r){t.tabList[i].activate(r)},deactivateTabAtIndex:function(i){t.tabList[i].deactivate()},focusTabAtIndex:function(i){t.tabList[i].focus()},getTabIndicatorClientRectAtIndex:function(i){return t.tabList[i].computeIndicatorClientRect()},getTabDimensionsAtIndex:function(i){return t.tabList[i].computeDimensions()},getPreviousActiveTabIndex:function(){for(var i=0;i<t.tabList.length;i++)if(t.tabList[i].active)return i;return-1},getFocusedTabIndex:function(){var i=t.getTabElements(),r=document.activeElement;return i.indexOf(r)},getIndexOfTabById:function(i){for(var r=0;r<t.tabList.length;r++)if(t.tabList[r].id===i)return r;return-1},getTabListLength:function(){return t.tabList.length},notifyTabActivated:function(i){t.emit(Jt.TAB_ACTIVATED_EVENT,{index:i},!0)}};return new Ue(n)},e.prototype.activateTab=function(t){this.foundation.activateTab(t)},e.prototype.scrollIntoView=function(t){this.foundation.scrollIntoView(t)},e.prototype.getTabElements=function(){return Array.from(this.root.querySelectorAll(Jt.TAB_SELECTOR))},e.prototype.instantiateTabs=function(t){return this.getTabElements().map(function(n){return n.id=n.id||"mdc-tab-"+ ++yi,t(n)})},e.prototype.instantiatetabScroller=function(t){var n=this.root.querySelector(Jt.TAB_SCROLLER_SELECTOR);return n?t(n):null},e}(L);/**
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
 */var Ke={ROOT:"mdc-text-field-character-counter"},Ai={ROOT_SELECTOR:"."+Ke.ROOT};/**
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
 */var qe=function(a){f(e,a);function e(t){return a.call(this,p(p({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return Ke},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Ai},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{setContent:function(){},setCounterValue:function(){}}},enumerable:!1,configurable:!0}),e.prototype.setCounterValue=function(t,n){t=Math.min(t,n),this.adapter.setContent(t+" / "+n),this.adapter.setCounterValue(t,n)},e}(R);/**
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
 */var _i=function(a){f(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"foundationForTextField",{get:function(){return this.foundation},enumerable:!1,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this,n={setContent:function(i){t.root.textContent=i},setCounterValue:function(){}};return new qe(n)},e}(L);/**
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
 */var X={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",INPUT_SELECTOR:".mdc-text-field__input",LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-text-field__icon--leading",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",OUTLINE_SELECTOR:".mdc-notched-outline",PREFIX_SELECTOR:".mdc-text-field__affix--prefix",SUFFIX_SELECTOR:".mdc-text-field__affix--suffix",TRAILING_ICON_SELECTOR:".mdc-text-field__icon--trailing"},Ut={DISABLED:"mdc-text-field--disabled",FOCUSED:"mdc-text-field--focused",HELPER_LINE:"mdc-text-field-helper-line",INVALID:"mdc-text-field--invalid",LABEL_FLOATING:"mdc-text-field--label-floating",NO_LABEL:"mdc-text-field--no-label",OUTLINED:"mdc-text-field--outlined",ROOT:"mdc-text-field",TEXTAREA:"mdc-text-field--textarea",WITH_LEADING_ICON:"mdc-text-field--with-leading-icon",WITH_TRAILING_ICON:"mdc-text-field--with-trailing-icon",WITH_INTERNAL_COUNTER:"mdc-text-field--with-internal-counter"},be={LABEL_SCALE:.75},Ci=["pattern","min","max","required","step","minlength","maxlength"],Si=["color","date","datetime-local","month","range","time","week"];/**
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
 */var Ie=["mousedown","touchstart"],ye=["click","keydown"],Li=function(a){f(e,a);function e(t,n){n===void 0&&(n={});var i=a.call(this,p(p({},e.defaultAdapter),t))||this;return i.isFocused=!1,i.receivedUserInput=!1,i.useNativeValidation=!0,i.validateOnValueChange=!0,i.helperText=n.helperText,i.characterCounter=n.characterCounter,i.leadingIcon=n.leadingIcon,i.trailingIcon=n.trailingIcon,i.valid=!i.adapter.hasClass(e.cssClasses.INVALID),i.inputFocusHandler=function(){i.activateFocus()},i.inputBlurHandler=function(){i.deactivateFocus()},i.inputInputHandler=function(){i.handleInput()},i.setPointerXOffset=function(r){i.setTransformOrigin(r)},i.textFieldInteractionHandler=function(){i.handleTextFieldInteraction()},i.validationAttributeChangeHandler=function(r){i.handleValidationAttributeChange(r)},i}return Object.defineProperty(e,"cssClasses",{get:function(){return Ut},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return X},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return be},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldAlwaysFloat",{get:function(){var t=this.getNativeInput().type;return Si.indexOf(t)>=0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldFloat",{get:function(){return this.shouldAlwaysFloat||this.isFocused||!!this.getValue()||this.isBadInput()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldShake",{get:function(){return!this.isFocused&&!this.isValid()&&!!this.getValue()},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!0},setInputAttr:function(){},removeInputAttr:function(){},registerTextFieldInteractionHandler:function(){},deregisterTextFieldInteractionHandler:function(){},registerInputInteractionHandler:function(){},deregisterInputInteractionHandler:function(){},registerValidationAttributeChangeHandler:function(){return new MutationObserver(function(){})},deregisterValidationAttributeChangeHandler:function(){},getNativeInput:function(){return null},isFocused:function(){return!1},activateLineRipple:function(){},deactivateLineRipple:function(){},setLineRippleTransformOrigin:function(){},shakeLabel:function(){},floatLabel:function(){},setLabelRequired:function(){},hasLabel:function(){return!1},getLabelWidth:function(){return 0},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t,n,i,r;this.adapter.hasLabel()&&this.getNativeInput().required&&this.adapter.setLabelRequired(!0),this.adapter.isFocused()?this.inputFocusHandler():this.adapter.hasLabel()&&this.shouldFloat&&(this.notchOutline(!0),this.adapter.floatLabel(!0),this.styleFloating(!0)),this.adapter.registerInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.registerInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.registerInputInteractionHandler("input",this.inputInputHandler);try{for(var s=V(Ie),o=s.next();!o.done;o=s.next()){var l=o.value;this.adapter.registerInputInteractionHandler(l,this.setPointerXOffset)}}catch(v){t={error:v}}finally{try{o&&!o.done&&(n=s.return)&&n.call(s)}finally{if(t)throw t.error}}try{for(var d=V(ye),u=d.next();!u.done;u=d.next()){var l=u.value;this.adapter.registerTextFieldInteractionHandler(l,this.textFieldInteractionHandler)}}catch(v){i={error:v}}finally{try{u&&!u.done&&(r=d.return)&&r.call(d)}finally{if(i)throw i.error}}this.validationObserver=this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler),this.setcharacterCounter(this.getValue().length)},e.prototype.destroy=function(){var t,n,i,r;this.adapter.deregisterInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.deregisterInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.deregisterInputInteractionHandler("input",this.inputInputHandler);try{for(var s=V(Ie),o=s.next();!o.done;o=s.next()){var l=o.value;this.adapter.deregisterInputInteractionHandler(l,this.setPointerXOffset)}}catch(v){t={error:v}}finally{try{o&&!o.done&&(n=s.return)&&n.call(s)}finally{if(t)throw t.error}}try{for(var d=V(ye),u=d.next();!u.done;u=d.next()){var l=u.value;this.adapter.deregisterTextFieldInteractionHandler(l,this.textFieldInteractionHandler)}}catch(v){i={error:v}}finally{try{u&&!u.done&&(r=d.return)&&r.call(d)}finally{if(i)throw i.error}}this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver)},e.prototype.handleTextFieldInteraction=function(){var t=this.adapter.getNativeInput();t&&t.disabled||(this.receivedUserInput=!0)},e.prototype.handleValidationAttributeChange=function(t){var n=this;t.some(function(i){return Ci.indexOf(i)>-1?(n.styleValidity(!0),n.adapter.setLabelRequired(n.getNativeInput().required),!0):!1}),t.indexOf("maxlength")>-1&&this.setcharacterCounter(this.getValue().length)},e.prototype.notchOutline=function(t){if(!(!this.adapter.hasOutline()||!this.adapter.hasLabel()))if(t){var n=this.adapter.getLabelWidth()*be.LABEL_SCALE;this.adapter.notchOutline(n)}else this.adapter.closeOutline()},e.prototype.activateFocus=function(){this.isFocused=!0,this.styleFocused(this.isFocused),this.adapter.activateLineRipple(),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.helperText&&(this.helperText.isPersistent()||!this.helperText.isValidation()||!this.valid)&&this.helperText.showToScreenReader()},e.prototype.setTransformOrigin=function(t){if(!(this.isDisabled()||this.adapter.hasOutline())){var n=t.touches,i=n?n[0]:t,r=i.target.getBoundingClientRect(),s=i.clientX-r.left;this.adapter.setLineRippleTransformOrigin(s)}},e.prototype.handleInput=function(){this.autoCompleteFocus(),this.setcharacterCounter(this.getValue().length)},e.prototype.autoCompleteFocus=function(){this.receivedUserInput||this.activateFocus()},e.prototype.deactivateFocus=function(){this.isFocused=!1,this.adapter.deactivateLineRipple();var t=this.isValid();this.styleValidity(t),this.styleFocused(this.isFocused),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.shouldFloat||(this.receivedUserInput=!1)},e.prototype.getValue=function(){return this.getNativeInput().value},e.prototype.setValue=function(t){if(this.getValue()!==t&&(this.getNativeInput().value=t),this.setcharacterCounter(t.length),this.validateOnValueChange){var n=this.isValid();this.styleValidity(n)}this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.validateOnValueChange&&this.adapter.shakeLabel(this.shouldShake))},e.prototype.isValid=function(){return this.useNativeValidation?this.isNativeInputValid():this.valid},e.prototype.setValid=function(t){this.valid=t,this.styleValidity(t);var n=!t&&!this.isFocused&&!!this.getValue();this.adapter.hasLabel()&&this.adapter.shakeLabel(n)},e.prototype.setValidateOnValueChange=function(t){this.validateOnValueChange=t},e.prototype.getValidateOnValueChange=function(){return this.validateOnValueChange},e.prototype.setUseNativeValidation=function(t){this.useNativeValidation=t},e.prototype.isDisabled=function(){return this.getNativeInput().disabled},e.prototype.setDisabled=function(t){this.getNativeInput().disabled=t,this.styleDisabled(t)},e.prototype.setHelperTextContent=function(t){this.helperText&&this.helperText.setContent(t)},e.prototype.setLeadingIconAriaLabel=function(t){this.leadingIcon&&this.leadingIcon.setAriaLabel(t)},e.prototype.setLeadingIconContent=function(t){this.leadingIcon&&this.leadingIcon.setContent(t)},e.prototype.setTrailingIconAriaLabel=function(t){this.trailingIcon&&this.trailingIcon.setAriaLabel(t)},e.prototype.setTrailingIconContent=function(t){this.trailingIcon&&this.trailingIcon.setContent(t)},e.prototype.setcharacterCounter=function(t){if(this.characterCounter){var n=this.getNativeInput().maxLength;if(n===-1)throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");this.characterCounter.setCounterValue(t,n)}},e.prototype.isBadInput=function(){return this.getNativeInput().validity.badInput||!1},e.prototype.isNativeInputValid=function(){return this.getNativeInput().validity.valid},e.prototype.styleValidity=function(t){var n=e.cssClasses.INVALID;if(t?this.adapter.removeClass(n):this.adapter.addClass(n),this.helperText){this.helperText.setValidity(t);var i=this.helperText.isValidation();if(!i)return;var r=this.helperText.isVisible(),s=this.helperText.getId();r&&s?this.adapter.setInputAttr(X.ARIA_DESCRIBEDBY,s):this.adapter.removeInputAttr(X.ARIA_DESCRIBEDBY)}},e.prototype.styleFocused=function(t){var n=e.cssClasses.FOCUSED;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.styleDisabled=function(t){var n=e.cssClasses,i=n.DISABLED,r=n.INVALID;t?(this.adapter.addClass(i),this.adapter.removeClass(r)):this.adapter.removeClass(i),this.leadingIcon&&this.leadingIcon.setDisabled(t),this.trailingIcon&&this.trailingIcon.setDisabled(t)},e.prototype.styleFloating=function(t){var n=e.cssClasses.LABEL_FLOATING;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.getNativeInput=function(){var t=this.adapter?this.adapter.getNativeInput():null;return t||{disabled:!1,maxLength:-1,required:!1,type:"input",validity:{badInput:!1,valid:!0},value:""}},e}(R);/**
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
 */var Z={HELPER_TEXT_PERSISTENT:"mdc-text-field-helper-text--persistent",HELPER_TEXT_VALIDATION_MSG:"mdc-text-field-helper-text--validation-msg",ROOT:"mdc-text-field-helper-text"},rt={ARIA_HIDDEN:"aria-hidden",ROLE:"role",ROOT_SELECTOR:"."+Z.ROOT};/**
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
 */var We=function(a){f(e,a);function e(t){return a.call(this,p(p({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return Z},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return rt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){}}},enumerable:!1,configurable:!0}),e.prototype.getId=function(){return this.adapter.getAttr("id")},e.prototype.isVisible=function(){return this.adapter.getAttr(rt.ARIA_HIDDEN)!=="true"},e.prototype.setContent=function(t){this.adapter.setContent(t)},e.prototype.isPersistent=function(){return this.adapter.hasClass(Z.HELPER_TEXT_PERSISTENT)},e.prototype.setPersistent=function(t){t?this.adapter.addClass(Z.HELPER_TEXT_PERSISTENT):this.adapter.removeClass(Z.HELPER_TEXT_PERSISTENT)},e.prototype.isValidation=function(){return this.adapter.hasClass(Z.HELPER_TEXT_VALIDATION_MSG)},e.prototype.setValidation=function(t){t?this.adapter.addClass(Z.HELPER_TEXT_VALIDATION_MSG):this.adapter.removeClass(Z.HELPER_TEXT_VALIDATION_MSG)},e.prototype.showToScreenReader=function(){this.adapter.removeAttr(rt.ARIA_HIDDEN)},e.prototype.setValidity=function(t){var n=this.adapter.hasClass(Z.HELPER_TEXT_PERSISTENT),i=this.adapter.hasClass(Z.HELPER_TEXT_VALIDATION_MSG),r=i&&!t;r?(this.showToScreenReader(),this.adapter.getAttr(rt.ROLE)==="alert"?this.refreshAlertRole():this.adapter.setAttr(rt.ROLE,"alert")):this.adapter.removeAttr(rt.ROLE),!n&&!r&&this.hide()},e.prototype.hide=function(){this.adapter.setAttr(rt.ARIA_HIDDEN,"true")},e.prototype.refreshAlertRole=function(){var t=this;this.adapter.removeAttr(rt.ROLE),requestAnimationFrame(function(){t.adapter.setAttr(rt.ROLE,"alert")})},e}(R);/**
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
 */var je=function(a){f(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"foundationForTextField",{get:function(){return this.foundation},enumerable:!1,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(i){t.root.classList.add(i)},removeClass:function(i){t.root.classList.remove(i)},hasClass:function(i){return t.root.classList.contains(i)},getAttr:function(i){return t.root.getAttribute(i)},setAttr:function(i,r){t.safeSetAttribute(t.root,i,r)},removeAttr:function(i){t.root.removeAttribute(i)},setContent:function(i){t.root.textContent=i}};return new We(n)},e}(L);/**
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
 */var Te={ICON_EVENT:"MDCTextField:icon",ICON_ROLE:"button"},xi={ROOT:"mdc-text-field__icon"};/**
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
 */var Ae=["click","keydown"],_e=function(a){f(e,a);function e(t){var n=a.call(this,p(p({},e.defaultAdapter),t))||this;return n.savedTabIndex=null,n.interactionHandler=function(i){n.handleInteraction(i)},n}return Object.defineProperty(e,"strings",{get:function(){return Te},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return xi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},notifyIconAction:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t,n;this.savedTabIndex=this.adapter.getAttr("tabindex");try{for(var i=V(Ae),r=i.next();!r.done;r=i.next()){var s=r.value;this.adapter.registerInteractionHandler(s,this.interactionHandler)}}catch(o){t={error:o}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},e.prototype.destroy=function(){var t,n;try{for(var i=V(Ae),r=i.next();!r.done;r=i.next()){var s=r.value;this.adapter.deregisterInteractionHandler(s,this.interactionHandler)}}catch(o){t={error:o}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},e.prototype.setDisabled=function(t){this.savedTabIndex&&(t?(this.adapter.setAttr("tabindex","-1"),this.adapter.removeAttr("role")):(this.adapter.setAttr("tabindex",this.savedTabIndex),this.adapter.setAttr("role",Te.ICON_ROLE)))},e.prototype.setAriaLabel=function(t){this.adapter.setAttr("aria-label",t)},e.prototype.setContent=function(t){this.adapter.setContent(t)},e.prototype.handleInteraction=function(t){var n=t.key==="Enter"||t.keyCode===13,i=t.key===" ";(t.type==="click"||n||i)&&(t.preventDefault(),this.adapter.notifyIconAction())},e}(R);/**
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
 */var Oi=function(a){f(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"foundationForTextField",{get:function(){return this.foundation},enumerable:!1,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this,n={getAttr:function(i){return t.root.getAttribute(i)},setAttr:function(i,r){t.safeSetAttribute(t.root,i,r)},removeAttr:function(i){t.root.removeAttribute(i)},setContent:function(i){t.root.textContent=i},registerInteractionHandler:function(i,r){t.listen(i,r)},deregisterInteractionHandler:function(i,r){t.unlisten(i,r)},notifyIconAction:function(){t.emit(_e.strings.ICON_EVENT,{},!0)}};return new _e(n)},e}(L);/**
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
 */var Ri=function(a){f(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t,n,i,r,s,o,l){t===void 0&&(t=function(D,C){return new H(D,C)}),n===void 0&&(n=function(D){return new ke(D)}),i===void 0&&(i=function(D){return new je(D)}),r===void 0&&(r=function(D){return new _i(D)}),s===void 0&&(s=function(D){return new Oi(D)}),o===void 0&&(o=function(D){return new Pe(D)}),l===void 0&&(l=function(D){return new He(D)}),this.input=this.root.querySelector(X.INPUT_SELECTOR);var d=this.root.querySelector(X.LABEL_SELECTOR);this.label=d?o(d):null;var u=this.root.querySelector(X.LINE_RIPPLE_SELECTOR);this.lineRipple=u?n(u):null;var v=this.root.querySelector(X.OUTLINE_SELECTOR);this.outline=v?l(v):null;var m=We.strings,h=this.root.nextElementSibling,b=h&&h.classList.contains(Ut.HELPER_LINE),I=b&&h&&h.querySelector(m.ROOT_SELECTOR);this.helperText=I?i(I):null;var _=qe.strings,k=this.root.querySelector(_.ROOT_SELECTOR);!k&&b&&h&&(k=h.querySelector(_.ROOT_SELECTOR)),this.characterCounter=k?r(k):null;var T=this.root.querySelector(X.LEADING_ICON_SELECTOR);this.leadingIcon=T?s(T):null;var B=this.root.querySelector(X.TRAILING_ICON_SELECTOR);this.trailingIcon=B?s(B):null,this.prefix=this.root.querySelector(X.PREFIX_SELECTOR),this.suffix=this.root.querySelector(X.SUFFIX_SELECTOR),this.ripple=this.createRipple(t)},e.prototype.destroy=function(){this.ripple&&this.ripple.destroy(),this.lineRipple&&this.lineRipple.destroy(),this.helperText&&this.helperText.destroy(),this.characterCounter&&this.characterCounter.destroy(),this.leadingIcon&&this.leadingIcon.destroy(),this.trailingIcon&&this.trailingIcon.destroy(),this.label&&this.label.destroy(),this.outline&&this.outline.destroy(),a.prototype.destroy.call(this)},e.prototype.initialSyncWithDOM=function(){this.disabled=this.input.disabled},Object.defineProperty(e.prototype,"value",{get:function(){return this.foundation.getValue()},set:function(t){this.foundation.setValue(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"disabled",{get:function(){return this.foundation.isDisabled()},set:function(t){this.foundation.setDisabled(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"valid",{get:function(){return this.foundation.isValid()},set:function(t){this.foundation.setValid(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"required",{get:function(){return this.input.required},set:function(t){this.input.required=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"pattern",{get:function(){return this.input.pattern},set:function(t){this.input.pattern=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"minLength",{get:function(){return this.input.minLength},set:function(t){this.input.minLength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxLength",{get:function(){return this.input.maxLength},set:function(t){t<0?this.input.removeAttribute("maxLength"):this.input.maxLength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"min",{get:function(){return this.input.min},set:function(t){this.input.min=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"max",{get:function(){return this.input.max},set:function(t){this.input.max=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"step",{get:function(){return this.input.step},set:function(t){this.input.step=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"helperTextContent",{set:function(t){this.foundation.setHelperTextContent(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"leadingIconAriaLabel",{set:function(t){this.foundation.setLeadingIconAriaLabel(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"leadingIconContent",{set:function(t){this.foundation.setLeadingIconContent(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"trailingIconAriaLabel",{set:function(t){this.foundation.setTrailingIconAriaLabel(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"trailingIconContent",{set:function(t){this.foundation.setTrailingIconContent(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"useNativeValidation",{set:function(t){this.foundation.setUseNativeValidation(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"prefixText",{get:function(){return this.prefix?this.prefix.textContent:null},set:function(t){this.prefix&&(this.prefix.textContent=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"suffixText",{get:function(){return this.suffix?this.suffix.textContent:null},set:function(t){this.suffix&&(this.suffix.textContent=t)},enumerable:!1,configurable:!0}),e.prototype.focus=function(){this.input.focus()},e.prototype.layout=function(){var t=this.foundation.shouldFloat;this.foundation.notchOutline(t)},e.prototype.getDefaultFoundation=function(){var t=p(p(p(p(p({},this.getRootAdapterMethods()),this.getInputAdapterMethods()),this.getLabelAdapterMethods()),this.getLineRippleAdapterMethods()),this.getOutlineAdapterMethods());return new Li(t,this.getFoundationMap())},e.prototype.getRootAdapterMethods=function(){var t=this;return{addClass:function(n){t.root.classList.add(n)},removeClass:function(n){t.root.classList.remove(n)},hasClass:function(n){return t.root.classList.contains(n)},registerTextFieldInteractionHandler:function(n,i){t.listen(n,i)},deregisterTextFieldInteractionHandler:function(n,i){t.unlisten(n,i)},registerValidationAttributeChangeHandler:function(n){var i=function(o){return o.map(function(l){return l.attributeName}).filter(function(l){return l})},r=new MutationObserver(function(o){n(i(o))}),s={attributes:!0};return r.observe(t.input,s),r},deregisterValidationAttributeChangeHandler:function(n){n.disconnect()}}},e.prototype.getInputAdapterMethods=function(){var t=this;return{getNativeInput:function(){return t.input},setInputAttr:function(n,i){t.safeSetAttribute(t.input,n,i)},removeInputAttr:function(n){t.input.removeAttribute(n)},isFocused:function(){return document.activeElement===t.input},registerInputInteractionHandler:function(n,i){t.input.addEventListener(n,i,K())},deregisterInputInteractionHandler:function(n,i){t.input.removeEventListener(n,i,K())}}},e.prototype.getLabelAdapterMethods=function(){var t=this;return{floatLabel:function(n){t.label&&t.label.float(n)},getLabelWidth:function(){return t.label?t.label.getWidth():0},hasLabel:function(){return!!t.label},shakeLabel:function(n){t.label&&t.label.shake(n)},setLabelRequired:function(n){t.label&&t.label.setRequired(n)}}},e.prototype.getLineRippleAdapterMethods=function(){var t=this;return{activateLineRipple:function(){t.lineRipple&&t.lineRipple.activate()},deactivateLineRipple:function(){t.lineRipple&&t.lineRipple.deactivate()},setLineRippleTransformOrigin:function(n){t.lineRipple&&t.lineRipple.setRippleCenter(n)}}},e.prototype.getOutlineAdapterMethods=function(){var t=this;return{closeOutline:function(){t.outline&&t.outline.closeNotch()},hasOutline:function(){return!!t.outline},notchOutline:function(n){t.outline&&t.outline.notch(n)}}},e.prototype.getFoundationMap=function(){return{characterCounter:this.characterCounter?this.characterCounter.foundationForTextField:void 0,helperText:this.helperText?this.helperText.foundationForTextField:void 0,leadingIcon:this.leadingIcon?this.leadingIcon.foundationForTextField:void 0,trailingIcon:this.trailingIcon?this.trailingIcon.foundationForTextField:void 0}},e.prototype.createRipple=function(t){var n=this,i=this.root.classList.contains(Ut.TEXTAREA),r=this.root.classList.contains(Ut.OUTLINED);if(i||r)return null;var s=p(p({},H.createAdapter(this)),{isSurfaceActive:function(){return st(n.input,":active")},registerInteractionHandler:function(o,l){n.input.addEventListener(o,l,K())},deregisterInteractionHandler:function(o,l){n.input.removeEventListener(o,l,K())}});return t(this.root,new St(s))},e}(L);/**
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
 */var W={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},Kt={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},Mt={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"};/**
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
 */var Ge=function(a){f(e,a);function e(t){return a.call(this,p(p({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"strings",{get:function(){return Mt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return W},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Kt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!1,configurable:!0}),e.prototype.handleTargetScroll=function(){},e.prototype.handleWindowResize=function(){},e.prototype.handleNavigationClick=function(){this.adapter.notifyNavigationIconClicked()},e}(R);/**
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
 */var Bt=0,Xe=function(a){f(e,a);function e(t){var n=a.call(this,t)||this;return n.wasDocked=!0,n.isDockedShowing=!0,n.currentAppBarOffsetTop=0,n.isCurrentlyBeingResized=!1,n.resizeThrottleId=Bt,n.resizeDebounceId=Bt,n.lastScrollPosition=n.adapter.getViewportScrollY(),n.topAppBarHeight=n.adapter.getTopAppBarHeight(),n}return e.prototype.destroy=function(){a.prototype.destroy.call(this),this.adapter.setStyle("top","")},e.prototype.handleTargetScroll=function(){var t=Math.max(this.adapter.getViewportScrollY(),0),n=t-this.lastScrollPosition;this.lastScrollPosition=t,this.isCurrentlyBeingResized||(this.currentAppBarOffsetTop-=n,this.currentAppBarOffsetTop>0?this.currentAppBarOffsetTop=0:Math.abs(this.currentAppBarOffsetTop)>this.topAppBarHeight&&(this.currentAppBarOffsetTop=-this.topAppBarHeight),this.moveTopAppBar())},e.prototype.handleWindowResize=function(){var t=this;this.resizeThrottleId||(this.resizeThrottleId=setTimeout(function(){t.resizeThrottleId=Bt,t.throttledResizeHandler()},Kt.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized=!0,this.resizeDebounceId&&clearTimeout(this.resizeDebounceId),this.resizeDebounceId=setTimeout(function(){t.handleTargetScroll(),t.isCurrentlyBeingResized=!1,t.resizeDebounceId=Bt},Kt.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},e.prototype.checkForUpdate=function(){var t=-this.topAppBarHeight,n=this.currentAppBarOffsetTop<0,i=this.currentAppBarOffsetTop>t,r=n&&i;if(r)this.wasDocked=!1;else if(this.wasDocked){if(this.isDockedShowing!==i)return this.isDockedShowing=i,!0}else return this.wasDocked=!0,!0;return r},e.prototype.moveTopAppBar=function(){if(this.checkForUpdate()){var t=this.currentAppBarOffsetTop;Math.abs(t)>=this.topAppBarHeight&&(t=-Kt.MAX_TOP_APP_BAR_HEIGHT),this.adapter.setStyle("top",t+"px")}},e.prototype.throttledResizeHandler=function(){var t=this.adapter.getTopAppBarHeight();this.topAppBarHeight!==t&&(this.wasDocked=!1,this.currentAppBarOffsetTop-=this.topAppBarHeight-t,this.topAppBarHeight=t),this.handleTargetScroll()},e}(Ge);/**
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
 */var Di=function(a){f(e,a);function e(){var t=a!==null&&a.apply(this,arguments)||this;return t.wasScrolled=!1,t}return e.prototype.handleTargetScroll=function(){var t=this.adapter.getViewportScrollY();t<=0?this.wasScrolled&&(this.adapter.removeClass(W.FIXED_SCROLLED_CLASS),this.wasScrolled=!1):this.wasScrolled||(this.adapter.addClass(W.FIXED_SCROLLED_CLASS),this.wasScrolled=!0)},e}(Xe);/**
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
 */var wi=function(a){f(e,a);function e(t){var n=a.call(this,t)||this;return n.collapsed=!1,n.isAlwaysCollapsed=!1,n}return Object.defineProperty(e.prototype,"isCollapsed",{get:function(){return this.collapsed},enumerable:!1,configurable:!0}),e.prototype.init=function(){a.prototype.init.call(this),this.adapter.getTotalActionItems()>0&&this.adapter.addClass(W.SHORT_HAS_ACTION_ITEM_CLASS),this.setAlwaysCollapsed(this.adapter.hasClass(W.SHORT_COLLAPSED_CLASS))},e.prototype.setAlwaysCollapsed=function(t){this.isAlwaysCollapsed=!!t,this.isAlwaysCollapsed?this.collapse():this.maybeCollapseBar()},e.prototype.getAlwaysCollapsed=function(){return this.isAlwaysCollapsed},e.prototype.handleTargetScroll=function(){this.maybeCollapseBar()},e.prototype.maybeCollapseBar=function(){if(!this.isAlwaysCollapsed){var t=this.adapter.getViewportScrollY();t<=0?this.collapsed&&this.uncollapse():this.collapsed||this.collapse()}},e.prototype.uncollapse=function(){this.adapter.removeClass(W.SHORT_COLLAPSED_CLASS),this.collapsed=!1},e.prototype.collapse=function(){this.adapter.addClass(W.SHORT_COLLAPSED_CLASS),this.collapsed=!0},e}(Ge);/**
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
 */var Mi=function(a){f(e,a);function e(){return a!==null&&a.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t){t===void 0&&(t=function(i){return H.attachTo(i)}),this.navIcon=this.root.querySelector(Mt.NAVIGATION_ICON_SELECTOR);var n=Array.from(this.root.querySelectorAll(Mt.ACTION_ITEM_SELECTOR));this.navIcon&&n.push(this.navIcon),this.iconRipples=n.map(function(i){var r=t(i);return r.unbounded=!0,r}),this.scrollTarget=window},e.prototype.initialSyncWithDOM=function(){this.handleNavigationClick=this.foundation.handleNavigationClick.bind(this.foundation),this.handleWindowResize=this.foundation.handleWindowResize.bind(this.foundation),this.handleTargetScroll=this.foundation.handleTargetScroll.bind(this.foundation),this.scrollTarget.addEventListener("scroll",this.handleTargetScroll),this.navIcon&&this.navIcon.addEventListener("click",this.handleNavigationClick);var t=this.root.classList.contains(W.FIXED_CLASS),n=this.root.classList.contains(W.SHORT_CLASS);!n&&!t&&window.addEventListener("resize",this.handleWindowResize)},e.prototype.destroy=function(){var t,n;try{for(var i=V(this.iconRipples),r=i.next();!r.done;r=i.next()){var s=r.value;s.destroy()}}catch(d){t={error:d}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}this.scrollTarget.removeEventListener("scroll",this.handleTargetScroll),this.navIcon&&this.navIcon.removeEventListener("click",this.handleNavigationClick);var o=this.root.classList.contains(W.FIXED_CLASS),l=this.root.classList.contains(W.SHORT_CLASS);!l&&!o&&window.removeEventListener("resize",this.handleWindowResize),a.prototype.destroy.call(this)},e.prototype.setScrollTarget=function(t){this.scrollTarget.removeEventListener("scroll",this.handleTargetScroll),this.scrollTarget=t,this.handleTargetScroll=this.foundation.handleTargetScroll.bind(this.foundation),this.scrollTarget.addEventListener("scroll",this.handleTargetScroll)},e.prototype.getDefaultFoundation=function(){var t=this,n={hasClass:function(r){return t.root.classList.contains(r)},addClass:function(r){t.root.classList.add(r)},removeClass:function(r){t.root.classList.remove(r)},setStyle:function(r,s){t.root.style.setProperty(r,s)},getTopAppBarHeight:function(){return t.root.clientHeight},notifyNavigationIconClicked:function(){t.emit(Mt.NAVIGATION_EVENT,{})},getViewportScrollY:function(){var r=t.scrollTarget,s=t.scrollTarget;return r.pageYOffset!==void 0?r.pageYOffset:s.scrollTop},getTotalActionItems:function(){return t.root.querySelectorAll(Mt.ACTION_ITEM_SELECTOR).length}},i;return this.root.classList.contains(W.SHORT_CLASS)?i=new wi(n):this.root.classList.contains(W.FIXED_CLASS)?i=new Di(n):i=new Xe(n),i},e}(L);const Ni=`<!-- Required styles for Material Web -->
<link
  rel="stylesheet"
  href="https://unpkg.com/material-components-web@13.0.0/dist/material-components-web.min.css"
/>
<style>
  body {
    display: flex;
    margin: 0;
  }

  .remix-fab {
    position: fixed;
    right: 24px;
    bottom: 24px;
    z-index: 200;
  }

  .drawer-content--theme-summary {
    display: none;
  }

  .theme-name {
    margin-bottom: 0;
  }
  .theme-name:focus {
    outline: 1px solid rgba(0, 0, 0, 0.12);
  }
  .theme-name:empty:before {
    content: attr(placeholder);
    color: rgba(0, 0, 0, 0.6);
  }

  .mdc-list-divider.theme-summary-divider {
    border-bottom-width: 2px;
    margin: 20px 0;
  }

  .theme-summary-line {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 8px 0;
  }
  .theme-summary-line figure {
    margin: 0;
  }
  .theme-summary-line .theme-summary-code {
    background: none;
  }
  .theme-summary-line .theme-summary-color {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
  .theme-summary-line .theme-summary-shape {
    width: 48px;
    height: 36px;
    line-height: 36px;
    text-align: center;
  }
  .theme-summary-line.theme-summary-line--typography {
    margin: 0;
  }
  .theme-summary-line .theme-summary-typography {
    width: 120px;
  }

  .mdc-list-divider.typography-baseline-divider {
    margin-top: 0;
    margin-bottom: 12px;
  }

  .mdc-drawer-app-content {
    width: 100%;
  }

  .theme-builder-desc-banner {
    display: none;
    width: 100%;
    text-align: center;
    padding: 10px;
  }

  @media (max-width: 1310px) {
    .theme-builder-app-bar,
    .theme-builder-desc-banner {
      display: block;
    }

    .theme-builder-drawer {
      display: none;
    }
  }
  .main-content {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  .main-content:not(.mdc-top-app-bar--fixed-adjust) {
    padding: 2vh 0;
  }
  .main-content .column {
    width: 420px;
  }

  .component-section-row {
    display: flex;
  }
  .component-section-row .component-section:first-child {
    width: 200px;
  }

  .component-section {
    margin: 16px 20px 40px 20px;
  }
  .component-section.dialog-component-section {
    margin-bottom: 60px;
  }

  @media only screen and (max-width: 600px) {
    .component-section {
      margin-left: auto;
      margin-right: auto;
    }

    .mdc-image-list {
      width: auto;
    }

    .mdc-drawer {
      width: 60%;
      min-width: calc(100% - 56px);
    }

    .column {
      width: auto;
      max-width: 420px;
      padding-right: 8px;
      padding-left: 8px;
    }
  }
  @media only screen and (max-width: 485px) {
    .column {
      overflow: hidden;
    }

    .remix-fab {
      position: fixed;
      bottom: 16px;
      right: auto;
      margin: 0;
      z-index: 200;
    }

    .mdc-dialog .mdc-dialog__surface {
      max-width: calc(100% - 100px);
    }
  }
  .section-header {
    display: flex;
    height: 36px;
    font-family: Inter, sans-serif;
  }
  .section-header a {
    display: flex;
    align-items: center;
  }
  .section-header a:hover,
  .section-header a:focus {
    text-decoration: none;
  }
  .section-header .material-icons {
    font-size: 1rem;
    padding: 8px;
  }
  .section-header .material-icons.leading-icon {
    padding-left: 0;
  }

  .component-wrapper {
    margin: 16px 0;
  }

  .print .column {
    width: 30vw;
  }
  .print .component-wrapper {
    margin-bottom: 60px;
  }
  .print .component-wrapper.text-field-component-wrapper,
  .print .component-wrapper.chips-component-wrapper {
    margin-bottom: 96px;
  }
  .print .theme-name {
    margin-bottom: 8px;
  }
  .print .glitch-url {
    font-size: 1rem;
  }
  .print .drawer-content--instructions .mdc-typography--overline {
    font-size: 0.9rem;
  }
  .print .drawer-content--instructions .mdc-typography--body2 {
    font-size: 1.2rem;
    line-height: 1.75rem;
  }
  .print .drawer-content--options {
    display: none;
  }
  .print .button-component-wrapper,
  .print .fab-component-wrapper {
    margin: 24px 0 44px;
  }
  .print .top-bar-component-wrapper {
    margin: 24px 0 52px;
  }
  .print .switch-component-wrapper {
    margin-left: -8px;
    margin-top: 24px;
  }
  .print .component-wrapper.checkbox-component-wrapper {
    margin-left: -18px;
  }
  .print .component-wrapper.chips-component-wrapper-1 {
    margin: 12px 0 92px -8px;
  }
  .print .select-component {
    margin: 0 20px 40px 20px;
  }
  .print .column-2 {
    transform: translate(-16px);
  }
  .print .card-component-wrapper {
    margin: 16px 0 38px;
  }
  .print .component-wrapper.text-field-component-wrapper-1 {
    margin: 22px 0 90px;
  }
  .print .dialog-component-wrapper {
    margin: 8px 0 52px;
  }
  .print .linear-progress-section {
    margin-top: -8px;
  }
  .print .tabs-section {
    margin-top: -16px;
  }
  .print .radio-row {
    margin-top: -24px;
    margin-bottom: -16px;
  }
  .print .snackbar-section {
    margin-top: -16px;
  }
  .print .image-section {
    margin-top: -4px;
  }
  .print .switch-section {
    margin-top: 0;
  }
  .print .short-app-bar-section,
  .print .menu-section {
    margin-top: 0px;
  }
  .print .switch-checkbox-row {
    margin-bottom: 16px;
  }
  .print .list-section {
    margin-top: 8px;
  }
  .print .dialog-component-section {
    margin-bottom: 52px;
    margin-top: -16px;
  }
  .print .chips-section {
    margin: 16px 20px -32px 20px;
  }
  .print .image-list-section {
    transform: translateY(-8px);
  }

  .typography-callout {
    font-size: 12px;
    padding: 16px;
  }

  .font-link {
    font-size: 12px;
    margin-top: 8px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: -16px;
  }

  .font-link i {
    font-size: 16px;
    margin-left: 8px;
  }

  .theme-shape .varValue {
    display: block;
  }

  .varValue {
    font-weight: 600;
  }

  .mdc-checkbox,
  .mdc-radio {
    margin-right: 4px;
  }

  .component-wrapper .mdc-top-app-bar {
    position: relative;
    z-index: 1;
  }
  .component-wrapper .mdc-top-app-bar:not(.mdc-top-app-bar--short) {
    width: 100%;
  }

  .mdc-card {
    width: 100%;
  }
  .mdc-card .demo-card__primary {
    padding: 1rem;
  }
  .mdc-card .demo-card__title,
  .mdc-card .demo-card__subtitle {
    margin: 0;
  }
  .mdc-card .demo-card__secondary {
    padding: 0 1rem 8px;
    opacity: 0.87;
  }

  .mdc-linear-progress {
    width: 100%;
  }

  .mdc-menu-surface--anchor > .mdc-menu {
    position: relative;
    z-index: 1;
  }

  .mdc-select {
    width: 160px;
  }

  .drawer-component-wrapper {
    background: rgba(0, 0, 0, 0.3);
  }
  .drawer-component-wrapper .mdc-drawer .mdc-drawer__content {
    padding: 0;
  }

  .mdc-text-field {
    width: 100%;
  }

  .mdc-snackbar {
    position: relative;
    margin: 0;
    justify-content: start;
    z-index: 1;
  }

  .mdc-dialog {
    position: relative;
    justify-content: start;
    z-index: 1;
  }
  .mdc-dialog .mdc-dialog__surface {
    max-width: 100%;
  }

  .mdc-image-list {
    max-width: 400px;
    max-height: 600px;
    margin: 0;
  }

  .component-wrapper.button-component-wrapper,
  .component-wrapper.fab-component-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>

<!-- Required styles for Material Web -->
<div class="mdc-typography">
  <div class="mdc-drawer-app-content">
    <main class="main-content">
      <div class="theme-builder-desc-banner mdc-typography--caption">
        An HTML rendering of MDC styled Components themed with Covalent
      </div>

      <!-- <button onclick=" window.open('https://glitch.com/edit/#!/remix/material-theme-builder','_blank')" class="mdc-fab mdc-fab--extended remix-fab" >
                <span class="material-icons mdc-fab__icon">photo_filter</span>
                <span class="mdc-fab__label">Create a new Theme</span>
        </button> -->
      <div class="column">
        <!-- Button -->
        <section class="component-section">
          <div class="section-header">
            <a
              href="https://material.io/design/components/buttons.html"
              class="mdc-typography--button"
              target="_blank"
            >
              Button
              <i class="material-icons">open_in_new</i>
            </a>
          </div>
          <div class="component-wrapper button-component-wrapper">
            <button class="mdc-button mdc-button--raised">
              <span class="mdc-button__ripple"></span>
              Button
            </button>
            <button class="mdc-button">
              <span class="mdc-button__ripple"></span>
              Button
            </button>
            <button class="mdc-button mdc-button--outlined">
              <span class="mdc-button__ripple"></span>
              Button
            </button>
          </div>
        </section>

        <!-- Top app bar -->
        <section class="component-section">
          <div class="section-header">
            <a
              href="https://material.io/design/components/app-bars-top.html"
              class="mdc-typography--button"
              target="_blank"
            >
              Top App Bar
              <i class="material-icons">open_in_new</i>
            </a>
          </div>
          <div class="component-wrapper top-bar-component-wrapper">
            <header class="mdc-top-app-bar mdc-top-app-bar--fixed">
              <div class="mdc-top-app-bar__row">
                <section
                  class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start"
                >
                  <a class="material-icons mdc-top-app-bar__navigation-icon"
                    >menu</a
                  >
                  <span class="mdc-top-app-bar__title">Headline 6</span>
                </section>
                <section
                  class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end"
                  role="toolbar"
                >
                  <a
                    class="material-icons mdc-icon-button mdc-top-app-bar__action-item"
                    aria-label="Share"
                    alt="Share"
                    >share</a
                  >
                  <a
                    class="material-icons mdc-icon-button mdc-top-app-bar__action-item"
                    aria-label="Bookmark this page"
                    alt="Bookmark this page"
                    >bookmark</a
                  >
                  <a
                    class="material-icons mdc-icon-button mdc-top-app-bar__action-item"
                    aria-label="Search this page"
                    alt="Search this page"
                    >search</a
                  >
                </section>
              </div>
            </header>
          </div>
        </section>

        <!-- Drawer -->
        <section class="component-section">
          <div class="section-header">
            <a
              href="https://material.io/design/components/navigation-drawer.html"
              class="mdc-typography--button"
              target="_blank"
            >
              Drawer
              <i class="material-icons">open_in_new</i>
            </a>
          </div>
          <div class="component-wrapper drawer-component-wrapper">
            <aside class="mdc-drawer">
              <div class="mdc-drawer__header">
                <h3 class="mdc-drawer__title">Headline 6</h3>
                <h6 class="mdc-drawer__subtitle">Body 2</h6>
              </div>
              <div class="mdc-list-divider"></div>
              <div class="mdc-drawer__content">
                <nav class="mdc-list" role="listbox">
                  <a
                    class="mdc-list-item mdc-list-item--activated"
                    aria-selected="true"
                  >
                    <i
                      class="material-icons mdc-deprecated-list-item__graphic"
                      aria-hidden="true"
                      >inbox</i
                    >
                    <span class="mdc-list-item__ripple"></span>
                    <span class="mdc-list-item__text">Body 2</span>
                  </a>
                  <a class="mdc-list-item">
                    <i
                      class="material-icons mdc-deprecated-list-item__graphic"
                      aria-hidden="true"
                      >star</i
                    >
                    <span class="mdc-list-item__ripple"></span>
                    <span class="mdc-list-item__text">Body 2</span>
                  </a>
                  <a class="mdc-list-item">
                    <i
                      class="material-icons mdc-deprecated-list-item__graphic"
                      aria-hidden="true"
                      >bookmark</i
                    >
                    <span class="mdc-list-item__ripple"></span>
                    <span class="mdc-list-item__text">Body 2</span>
                  </a>
                  <a class="mdc-list-item">
                    <i
                      class="material-icons mdc-deprecated-list-item__graphic"
                      aria-hidden="true"
                      >send</i
                    >
                    <span class="mdc-list-item__ripple"></span>
                    <span class="mdc-list-item__text">Body 2</span>
                  </a>
                  <a class="mdc-list-item">
                    <i
                      class="material-icons mdc-deprecated-list-item__graphic"
                      aria-hidden="true"
                      >drafts</i
                    >
                    <span class="mdc-list-item__ripple"></span>
                    <span class="mdc-list-item__text">Body 2</span>
                  </a>
                </nav>
              </div>
            </aside>
          </div>
        </section>

        <div class="component-section-row">
          <!-- Short top app bar -->
          <section class="component-section short-app-bar-section">
            <div class="section-header">
              <a
                href="https://material.io/design/components/app-bars-top.html"
                class="mdc-typography--button"
                target="_blank"
              >
                Short App Bar
                <i class="material-icons">open_in_new</i>
              </a>
            </div>
            <div class="component-wrapper">
              <header
                class="mdc-top-app-bar mdc-top-app-bar--short mdc-top-app-bar--short-collapsed"
              >
                <div class="mdc-top-app-bar__row">
                  <section
                    class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start"
                  >
                    <a
                      class="material-icons mdc-icon-button mdc-top-app-bar__navigation-icon"
                      >menu</a
                    >
                  </section>
                  <section
                    class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end"
                    role="toolbar"
                  >
                    <a
                      class="material-icons mdc-icon-button mdc-top-app-bar__action-item"
                      aria-label="Open shopping cart"
                      alt="Open shopping cart"
                      >shopping_cart</a
                    >
                  </section>
                </div>
              </header>
            </div>
          </section>

          <!-- Menu -->
          <section class="component-section menu-section">
            <div class="section-header">
              <a
                href="https://material.io/design/components/menus.html"
                class="mdc-typography--button"
                target="_blank"
              >
                Menu
                <i class="material-icons">open_in_new</i>
              </a>
            </div>
            <div class="component-wrapper">
              <div class="mdc-menu-surface--anchor">
                <div class="mdc-menu mdc-menu-surface mdc-menu-surface--open">
                  <ul
                    class="mdc-list"
                    role="menu"
                    aria-hidden="true"
                    aria-orientation="vertical"
                    tabindex="-1"
                  >
                    <li class="mdc-list-item" role="menuitem">
                      <span class="mdc-list-item__ripple"></span>
                      <span class="mdc-list-item__text">A Menu Item</span>
                    </li>
                    <li class="mdc-list-item" role="menuitem">
                      <span class="mdc-list-item__ripple"></span>
                      <span class="mdc-list-item__text">Another Menu Item</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

        <!-- Linear progress -->
        <section class="component-section linear-progress-section">
          <div class="section-header">
            <a
              href="https://material.io/design/components/progress-indicators.html#linear-progress-indicators"
              class="mdc-typography--button"
              target="_blank"
            >
              Linear Progress
              <i class="material-icons">open_in_new</i>
            </a>
          </div>
          <div class="component-wrapper linear-progress-component-wrapper">
            <div
              role="progressbar"
              class="mdc-linear-progress mdc-linear-progress--indeterminate"
            >
              <div class="mdc-linear-progress__buffering-dots"></div>
              <div class="mdc-linear-progress__buffer"></div>
              <div
                class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"
              >
                <span class="mdc-linear-progress__bar-inner"></span>
              </div>
              <div
                class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"
              >
                <span class="mdc-linear-progress__bar-inner"></span>
              </div>
            </div>
          </div>
        </section>

        <div class="component-section-row switch-checkbox-row">
          <!-- Switch -->
          <section class="component-section switch-section">
            <div class="section-header">
              <a
                href="https://material.io/design/components/selection-controls.html#switches"
                class="mdc-typography--button"
                target="_blank"
              >
                Switch
                <i class="material-icons">open_in_new</i>
              </a>
            </div>
            <div class="component-wrapper switch-component-wrapper">
              <button
                id="basic-switch"
                class="mdc-switch mdc-switch--unselected"
                type="button"
                role="switch"
                aria-checked="false"
              >
                <div class="mdc-switch__track"></div>
                <div class="mdc-switch__handle-track">
                  <div class="mdc-switch__handle">
                    <div class="mdc-switch__shadow">
                      <div class="mdc-elevation-overlay"></div>
                    </div>
                    <div class="mdc-switch__ripple"></div>
                    <div class="mdc-switch__icons">
                      <svg
                        class="mdc-switch__icon mdc-switch__icon--on"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"
                        />
                      </svg>
                      <svg
                        class="mdc-switch__icon mdc-switch__icon--off"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 13H4v-2h16v2z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
              <label for="basic-switch">off/on</label>
            </div>
          </section>

          <!-- Checkbox -->
          <section class="component-section">
            <div class="section-header">
              <a
                href="https://material.io/design/components/selection-controls.html#checkboxes"
                class="mdc-typography--button"
                target="_blank"
              >
                Checkbox
                <i class="material-icons">open_in_new</i>
              </a>
            </div>
            <div class="component-wrapper checkbox-component-wrapper">
              <div class="mdc-checkbox">
                <input type="checkbox" class="mdc-checkbox__native-control" />
                <div class="mdc-checkbox__background">
                  <svg class="mdc-checkbox__checkmark" viewbox="0 0 24 24">
                    <path
                      class="mdc-checkbox__checkmark-path"
                      fill="none"
                      d="M1.73,12.91 8.1,19.28 22.79,4.59"
                    />
                  </svg>
                  <div class="mdc-checkbox__mixedmark"></div>
                </div>
              </div>
              <div class="mdc-checkbox indeterminate-checkbox">
                <input type="checkbox" class="mdc-checkbox__native-control" />
                <div class="mdc-checkbox__background">
                  <svg class="mdc-checkbox__checkmark" viewbox="0 0 24 24">
                    <path
                      class="mdc-checkbox__checkmark-path"
                      fill="none"
                      d="M1.73,12.91 8.1,19.28 22.79,4.59"
                    />
                  </svg>
                  <div class="mdc-checkbox__mixedmark"></div>
                </div>
              </div>
              <div class="mdc-checkbox">
                <input
                  type="checkbox"
                  class="mdc-checkbox__native-control"
                  checked
                />
                <div class="mdc-checkbox__background">
                  <svg class="mdc-checkbox__checkmark" viewbox="0 0 24 24">
                    <path
                      class="mdc-checkbox__checkmark-path"
                      fill="none"
                      d="M1.73,12.91 8.1,19.28 22.79,4.59"
                    />
                  </svg>
                  <div class="mdc-checkbox__mixedmark"></div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div class="component-section-row radio-row">
          <!-- Radio -->
          <section class="component-section">
            <div class="section-header">
              <a
                href="https://material.io/design/components/selection-controls.html#radio-buttons"
                class="mdc-typography--button"
                target="_blank"
              >
                Radio Button
                <i class="material-icons">open_in_new</i>
              </a>
            </div>
            <div class="component-wrapper radio-component-wrapper">
              <div class="mdc-radio">
                <input
                  class="mdc-radio__native-control"
                  type="radio"
                  id="radio-1"
                  name="radios"
                  checked
                />
                <div class="mdc-radio__background">
                  <div class="mdc-radio__outer-circle"></div>
                  <div class="mdc-radio__inner-circle"></div>
                </div>
              </div>
              <div class="mdc-radio">
                <input
                  class="mdc-radio__native-control"
                  type="radio"
                  id="radio-2"
                  name="radios"
                  checked
                />
                <div class="mdc-radio__background">
                  <div class="mdc-radio__outer-circle"></div>
                  <div class="mdc-radio__inner-circle"></div>
                </div>
              </div>
            </div>
          </section>

          <!-- Icon button -->
          <section class="component-section">
            <div class="section-header">
              <a
                href="https://material.io/design/components/buttons.html#toggle-button"
                class="mdc-typography--button"
                target="_blank"
              >
                Icon Button
                <i class="material-icons">open_in_new</i>
              </a>
            </div>
            <div class="component-wrapper icon-button-component-wrapper">
              <button
                id="icon-toggle-button"
                class="mdc-icon-button"
                aria-label="Add to favorites"
                aria-pressed="false"
              >
                <div class="mdc-icon-button__ripple"></div>
                <i
                  class="material-icons mdc-icon-button__icon mdc-icon-button__icon--on"
                  >music_off</i
                >
                <i class="material-icons mdc-icon-button__icon">music_note</i>
              </button>
            </div>
          </section>
        </div>

        <!-- Chips -->
        <section class="component-section">
          <div class="section-header">
            <a
              href="https://material.io/design/components/chips.html"
              class="mdc-typography--button"
              target="_blank"
            >
              Chips
              <i class="material-icons">open_in_new</i>
            </a>
          </div>
          <div
            class="component-wrapper chips-component-wrapper chips-component-wrapper-1"
          >
            <span
              class="mdc-evolution-chip-set"
              role="listbox"
              aria-orientation="horizontal"
              aria-multiselectable="true"
            >
              <span class="mdc-evolution-chip-set__chips" role="presentation">
                <span class="mdc-evolution-chip" role="row" id="c1">
                  <span
                    class="mdc-evolution-chip__cell mdc-evolution-chip__cell--primary"
                    role="gridcell"
                  >
                    <button
                      class="mdc-evolution-chip__action mdc-evolution-chip__action--primary"
                      type="button"
                      tabindex="-1"
                    >
                      <span
                        class="mdc-evolution-chip__ripple mdc-evolution-chip__ripple--primary"
                      ></span>
                      <span class="mdc-evolution-chip__text-label"
                        >Regular chip</span
                      >
                    </button>
                  </span>
                </span>
                <span
                  class="mdc-evolution-chip mdc-evolution-chip--with-trailing-action"
                  role="row"
                  id="c2"
                  data-mdc-deletable="true"
                >
                  <span
                    class="mdc-evolution-chip__cell mdc-evolution-chip__cell--primary"
                    role="gridcell"
                  >
                    <button
                      class="mdc-evolution-chip__action mdc-evolution-chip__action--primary"
                      type="button"
                      tabindex="0"
                    >
                      <span
                        class="mdc-evolution-chip__ripple mdc-evolution-chip__ripple--primary"
                      ></span>
                      <span class="mdc-evolution-chip__text-label"
                        >Trialing chip</span
                      >
                    </button>
                  </span>
                  <span
                    class="mdc-evolution-chip__cell mdc-evolution-chip__cell--trailing"
                    role="gridcell"
                  >
                    <button
                      class="mdc-evolution-chip__action mdc-evolution-chip__action--trailing"
                      type="button"
                      tabindex="-1"
                      aria-label="Remove chip foo"
                    >
                      <span
                        class="mdc-evolution-chip__ripple mdc-evolution-chip__ripple--trailing"
                      ></span>
                      <span
                        class="mdc-evolution-chip__icon material-icons mdc-evolution-chip__icon--trailing"
                        >close</span
                      >
                    </button>
                  </span>
                </span>

                <span
                  class="mdc-evolution-chip mdc-evolution-chip--with-primary-graphic mdc-evolution-chip--with-primary-icon"
                  role="row"
                  id="c0"
                >
                  <span
                    class="mdc-evolution-chip__cell mdc-evolution-chip__cell--primary"
                    role="gridcell"
                  >
                    <button
                      class="mdc-evolution-chip__action mdc-evolution-chip__action--primary"
                      type="button"
                      tabindex="0"
                    >
                      <span
                        class="mdc-evolution-chip__ripple mdc-evolution-chip__ripple--primary"
                      ></span>
                      <span class="mdc-evolution-chip__graphic">
                        <span
                          class="mdc-evolution-chip__icon mdc-evolution-chip__icon--primary material-icons"
                          >favorite</span
                        >
                      </span>
                      <span class="mdc-evolution-chip__text-label"
                        >Leading chip</span
                      >
                    </button>
                  </span>
                </span>

                <span
                  class="mdc-evolution-chip mdc-evolution-chip--with-primary-graphic mdc-evolution-chip--with-primary-icon mdc-evolution-chip--with-avatar"
                  role="row"
                  id="c0"
                >
                  <span
                    class="mdc-evolution-chip__cell mdc-evolution-chip__cell--primary"
                    role="gridcell"
                  >
                    <button
                      class="mdc-evolution-chip__action mdc-evolution-chip__action--primary"
                      type="button"
                      tabindex="0"
                    >
                      <span
                        class="mdc-evolution-chip__ripple mdc-evolution-chip__ripple--primary"
                      ></span>
                      <span class="mdc-evolution-chip__graphic">
                        <span
                          class="mdc-evolution-chip__icon mdc-evolution-chip__icon--primary material-icons"
                          style="background: rgba(0, 0, 0, 0.3)"
                          >person</span
                        >
                      </span>
                      <span class="mdc-evolution-chip__text-label"
                        >Avatar chip</span
                      >
                    </button>
                  </span>
                </span>

                <span
                  class="mdc-evolution-chip mdc-evolution-chip--disabled"
                  role="row"
                  id="c1"
                >
                  <span
                    class="mdc-evolution-chip__cell mdc-evolution-chip__cell--primary"
                    role="gridcell"
                  >
                    <button
                      class="mdc-evolution-chip__action mdc-evolution-chip__action--primary"
                      type="button"
                      tabindex="-1"
                      disabled
                    >
                      <span
                        class="mdc-evolution-chip__ripple mdc-evolution-chip__ripple--primary"
                      ></span>
                      <span class="mdc-evolution-chip__text-label"
                        >Disabled chip</span
                      >
                    </button>
                  </span>
                </span>

                <span
                  class="mdc-evolution-chip mdc-evolution-chip--filter mdc-evolution-chip--with-primary-graphic mdc-evolution-chip--selectable"
                  role="presentation"
                  id="c5"
                >
                  <span
                    class="mdc-evolution-chip__action mdc-evolution-chip__action--primary"
                    role="option"
                    aria-selected="false"
                    tabindex="0"
                  >
                    <span
                      class="mdc-evolution-chip__ripple mdc-evolution-chip__ripple--primary"
                    ></span>
                    <span class="mdc-evolution-chip__graphic">
                      <span class="mdc-evolution-chip__checkmark">
                        <svg
                          class="mdc-evolution-chip__checkmark-svg"
                          viewBox="-2 -3 30 30"
                        >
                          <path
                            class="mdc-evolution-chip__checkmark-path"
                            fill="none"
                            stroke="black"
                            d="M1.73,12.91 8.1,19.28 22.79,4.59"
                          />
                        </svg>
                      </span>
                    </span>
                    <span class="mdc-evolution-chip__text-label"
                      >Filter chip</span
                    >
                  </span>
                </span>

                <span
                  class="mdc-evolution-chip mdc-evolution-chip--filter mdc-evolution-chip--with-primary-graphic mdc-evolution-chip--selectable"
                  role="presentation"
                  id="c6"
                >
                  <span
                    class="mdc-evolution-chip__action mdc-evolution-chip__action--primary"
                    role="option"
                    aria-selected="false"
                    tabindex="0"
                    data-mdc-deletable="true"
                  >
                    <span
                      class="mdc-evolution-chip__ripple mdc-evolution-chip__ripple--primary"
                    ></span>
                    <span class="mdc-evolution-chip__graphic">
                      <span class="mdc-evolution-chip__checkmark">
                        <svg
                          class="mdc-evolution-chip__checkmark-svg"
                          viewBox="-2 -3 30 30"
                        >
                          <path
                            class="mdc-evolution-chip__checkmark-path"
                            fill="none"
                            stroke="black"
                            d="M1.73,12.91 8.1,19.28 22.79,4.59"
                          />
                        </svg>
                      </span>
                    </span>
                    <span class="mdc-evolution-chip__text-label"
                      >Filter chip</span
                    >
                  </span>
                </span>
              </span>
            </span>
          </div>
          <div
            class="component-wrapper chips-component-wrapper chips-component-wrapper-2"
          >
            <span
              class="mdc-evolution-chip-set"
              role="listbox"
              aria-orientation="horizontal"
              aria-multiselectable="false"
            >
              <span class="mdc-evolution-chip-set__chips" role="presentation">
                <span
                  class="mdc-evolution-chip mdc-evolution-chip--filter mdc-evolution-chip--with-primary-graphic mdc-evolution-chip--selectable mdc-evolution-chip--selected"
                  role="presentation"
                  id="c20"
                >
                  <span
                    class="mdc-evolution-chip__action mdc-evolution-chip__action--primary"
                    role="option"
                    aria-selected="false"
                    tabindex="0"
                  >
                    <span
                      class="mdc-evolution-chip__ripple mdc-evolution-chip__ripple--primary"
                    ></span>
                    <span class="mdc-evolution-chip__graphic">
                      <span class="mdc-evolution-chip__checkmark">
                        <svg
                          class="mdc-evolution-chip__checkmark-svg"
                          viewBox="-2 -3 30 30"
                        >
                          <path
                            class="mdc-evolution-chip__checkmark-path"
                            fill="none"
                            stroke="black"
                            d="M1.73,12.91 8.1,19.28 22.79,4.59"
                          />
                        </svg>
                      </span>
                    </span>
                    <span class="mdc-evolution-chip__text-label"
                      >Filter chip</span
                    >
                  </span>
                </span>

                <span
                  class="mdc-evolution-chip mdc-evolution-chip--filter mdc-evolution-chip--with-primary-graphic mdc-evolution-chip--selectable"
                  role="presentation"
                  id="c21"
                >
                  <span
                    class="mdc-evolution-chip__action mdc-evolution-chip__action--primary"
                    role="option"
                    aria-selected="false"
                    tabindex="0"
                    data-mdc-deletable="true"
                  >
                    <span
                      class="mdc-evolution-chip__ripple mdc-evolution-chip__ripple--primary"
                    ></span>
                    <span class="mdc-evolution-chip__graphic">
                      <span class="mdc-evolution-chip__checkmark">
                        <svg
                          class="mdc-evolution-chip__checkmark-svg"
                          viewBox="-2 -3 30 30"
                        >
                          <path
                            class="mdc-evolution-chip__checkmark-path"
                            fill="none"
                            stroke="black"
                            d="M1.73,12.91 8.1,19.28 22.79,4.59"
                          />
                        </svg>
                      </span>
                    </span>
                    <span class="mdc-evolution-chip__text-label"
                      >Filter chip</span
                    >
                  </span>
                </span>
              </span>
            </span>
          </div>
        </section>

        <div class="component-section-row">
          <!-- Select -->
          <section class="component-section select-component">
            <div class="section-header">
              <a
                href="https://material.io/develop/web/components/input-controls/select-menus/"
                class="mdc-typography--button"
                target="_blank"
              >
                Select
                <i class="material-icons">open_in_new</i>
              </a>
            </div>
            <div class="component-wrapper">
              <div class="mdc-select mdc-select--filled demo-width-class">
                <div
                  class="mdc-select__anchor"
                  role="button"
                  aria-haspopup="listbox"
                  aria-expanded="false"
                  aria-labelledby="demo-label demo-selected-text"
                >
                  <span class="mdc-select__ripple"></span>
                  <span id="demo-label" class="mdc-floating-label"
                    >Pick a Food Group</span
                  >
                  <span class="mdc-select__selected-text-container">
                    <span
                      id="demo-selected-text"
                      class="mdc-select__selected-text"
                    ></span>
                  </span>
                  <span class="mdc-select__dropdown-icon">
                    <svg
                      class="mdc-select__dropdown-icon-graphic"
                      viewBox="7 10 10 5"
                      focusable="false"
                    >
                      <polygon
                        class="mdc-select__dropdown-icon-inactive"
                        stroke="none"
                        fill-rule="evenodd"
                        points="7 10 12 15 17 10"
                      ></polygon>
                      <polygon
                        class="mdc-select__dropdown-icon-active"
                        stroke="none"
                        fill-rule="evenodd"
                        points="7 15 12 10 17 15"
                      ></polygon>
                    </svg>
                  </span>
                  <span class="mdc-line-ripple"></span>
                </div>

                <div
                  class="mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fullwidth"
                >
                  <ul
                    class="mdc-deprecated-list"
                    role="listbox"
                    aria-label="Food picker listbox"
                  >
                    <li
                      class="mdc-deprecated-list-item mdc-deprecated-list-item--selected"
                      aria-selected="true"
                      data-value=""
                      role="option"
                    >
                      <span class="mdc-deprecated-list-item__ripple"></span>
                    </li>
                    <li
                      class="mdc-deprecated-list-item"
                      aria-selected="false"
                      data-value="grains"
                      role="option"
                    >
                      <span class="mdc-deprecated-list-item__ripple"></span>
                      <span class="mdc-deprecated-list-item__text">
                        Bread, Cereal, Rice, and Pasta
                      </span>
                    </li>
                    <li
                      class="mdc-deprecated-list-item mdc-deprecated-list-item--disabled"
                      aria-selected="false"
                      data-value="vegetables"
                      aria-disabled="true"
                      role="option"
                    >
                      <span class="mdc-deprecated-list-item__ripple"></span>
                      <span class="mdc-deprecated-list-item__text">
                        Vegetables
                      </span>
                    </li>
                    <li
                      class="mdc-deprecated-list-item"
                      aria-selected="false"
                      data-value="fruit"
                      role="option"
                    >
                      <span class="mdc-deprecated-list-item__ripple"></span>
                      <span class="mdc-deprecated-list-item__text">
                        Fruit
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <!-- Select -->
          <section class="component-section select-component">
            <div class="section-header"><!-- Hold space for layout --></div>
            <div class="component-wrapper">
              <div class="mdc-select mdc-select--outlined">
                <div
                  class="mdc-select__anchor"
                  aria-labelledby="outlined-select-label"
                >
                  <span class="mdc-notched-outline">
                    <span class="mdc-notched-outline__leading"></span>
                    <span class="mdc-notched-outline__notch">
                      <span
                        id="outlined-select-label"
                        class="mdc-floating-label"
                        >Pick a Food Group</span
                      >
                    </span>
                    <span class="mdc-notched-outline__trailing"></span>
                  </span>
                  <span class="mdc-select__selected-text-container">
                    <span
                      id="demo-selected-text"
                      class="mdc-select__selected-text"
                    ></span>
                  </span>
                  <span class="mdc-select__dropdown-icon">
                    <svg
                      class="mdc-select__dropdown-icon-graphic"
                      viewBox="7 10 10 5"
                      focusable="false"
                    >
                      <polygon
                        class="mdc-select__dropdown-icon-inactive"
                        stroke="none"
                        fill-rule="evenodd"
                        points="7 10 12 15 17 10"
                      ></polygon>
                      <polygon
                        class="mdc-select__dropdown-icon-active"
                        stroke="none"
                        fill-rule="evenodd"
                        points="7 15 12 10 17 15"
                      ></polygon>
                    </svg>
                  </span>
                  <div
                    class="mdc-select__menu mdc-menu mdc-menu-surface"
                    role="listbox"
                  >
                    <ul class="mdc-list">
                      <li
                        class="mdc-list-item"
                        data-value=""
                        role="option"
                      ></li>
                      <li
                        class="mdc-list-item"
                        data-value="outlined-item1"
                        role="option"
                      >
                        Body 2
                      </li>
                      <li
                        class="mdc-list-item"
                        data-value="outlined-item2"
                        aria-selected="true"
                        role="option"
                      >
                        Body 2
                      </li>
                      <li
                        class="mdc-list-item"
                        data-value="outlined-item3"
                        role="option"
                      >
                        Body 2
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- Other elements from the select remain. -->
                <div
                  class="mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fullwidth"
                >
                  ...
                </div>
              </div>
            </div>
          </section>
        </div>

        <!-- List -->
        <section class="component-section list-section">
          <div class="section-header">
            <a
              href="https://material.io/design/components/lists.html"
              class="mdc-typography--button"
              target="_blank"
            >
              List
              <i class="material-icons">open_in_new</i>
            </a>
          </div>
          <div class="component-wrapper">
            <ul class="mdc-list">
              <li class="mdc-list-item" tabindex="0">
                <span class="mdc-list-item__ripple"></span>
                <span class="mdc-list-item__text">Single-line item</span>
              </li>
              <li class="mdc-list-item">
                <span class="mdc-list-item__ripple"></span>
                <span class="mdc-list-item__text">Single-line item</span>
              </li>
              <li class="mdc-list-item">
                <span class="mdc-list-item__ripple"></span>
                <span class="mdc-list-item__text">Single-line item</span>
              </li>
            </ul>

            <ul class="mdc-list mdc-list--two-line mdc-list--avatar-list">
              <li class="mdc-list-item" tabindex="0">
                <span class="mdc-list-item__ripple"></span>
                <span
                  class="mdc-deprecated-list-item__graphic material-icons"
                  aria-hidden="true"
                  >child_care</span
                >
                <span class="mdc-list-item__text">
                  <span class="mdc-list-item__primary-text">Two-line item</span>
                  <span class="mdc-list-item__secondary-text"
                    >Secondary text</span
                  >
                </span>
              </li>
              <li role="separator" class="mdc-list-divider"></li>
              <li class="mdc-list-item">
                <span class="mdc-list-item__ripple"></span>
                <span
                  class="mdc-deprecated-list-item__graphic material-icons"
                  aria-hidden="true"
                  >child_care</span
                >
                <span class="mdc-list-item__text">
                  <span class="mdc-list-item__primary-text">Two-line item</span>
                  <span class="mdc-list-item__secondary-text"
                    >Secondary text</span
                  >
                </span>
              </li>
              <li role="separator" class="mdc-list-divider"></li>
              <li class="mdc-list-item">
                <span class="mdc-list-item__ripple"></span>
                <span
                  class="mdc-deprecated-list-item__graphic material-icons"
                  aria-hidden="true"
                  >child_care</span
                >
                <span class="mdc-list-item__text">
                  <span class="mdc-list-item__primary-text">Two-line item</span>
                  <span class="mdc-list-item__secondary-text"
                    >Secondary text</span
                  >
                </span>
              </li>
            </ul>
          </div>
        </section>

        <!-- Deprecated List -->
        <section class="component-section list-section">
          <div class="section-header">
            <a
              href="https://material.io/design/components/lists.html"
              class="mdc-typography--button"
              target="_blank"
            >
              List (Deprecated)
              <i class="material-icons">open_in_new</i>
            </a>
          </div>
          <div class="component-wrapper">
            <ul class="mdc-deprecated-list">
              <li class="mdc-deprecated-list-item" tabindex="0">
                <span class="mdc-deprecated-list-item__ripple"></span>
                <span class="mdc-deprecated-list-item__text"
                  >Single-line item</span
                >
              </li>
              <li class="mdc-deprecated-list-item">
                <span class="mdc-deprecated-list-item__ripple"></span>
                <span class="mdc-deprecated-list-item__text"
                  >Single-line item</span
                >
              </li>
              <li class="mdc-deprecated-list-item">
                <span class="mdc-deprecated-list-item__ripple"></span>
                <span class="mdc-deprecated-list-item__text"
                  >Single-line item</span
                >
              </li>
            </ul>

            <ul
              class="mdc-deprecated-list mdc-deprecated-list--two-line mdc-deprecated-list--avatar-list"
            >
              <li class="mdc-deprecated-list-item" tabindex="0">
                <span class="mdc-deprecated-list-item__ripple"></span>
                <span
                  class="mdc-deprecated-list-item__graphic material-icons"
                  aria-hidden="true"
                  >child_care</span
                >
                <span class="mdc-deprecated-list-item__text">
                  <span class="mdc-deprecated-list-item__primary-text"
                    >Two-line item</span
                  >
                  <span class="mdc-deprecated-list-item__secondary-text"
                    >Secondary text</span
                  >
                </span>
              </li>
              <li role="separator" class="mdc-deprecated-list-divider"></li>
              <li class="mdc-deprecated-list-item">
                <span class="mdc-deprecated-list-item__ripple"></span>
                <span
                  class="mdc-deprecated-list-item__graphic material-icons"
                  aria-hidden="true"
                  >child_care</span
                >
                <span class="mdc-deprecated-list-item__text">
                  <span class="mdc-deprecated-list-item__primary-text"
                    >Two-line item</span
                  >
                  <span class="mdc-deprecated-list-item__secondary-text"
                    >Secondary text</span
                  >
                </span>
              </li>
              <li role="separator" class="mdc-deprecated-list-divider"></li>
              <li class="mdc-deprecated-list-item">
                <span class="mdc-deprecated-list-item__ripple"></span>
                <span
                  class="mdc-deprecated-list-item__graphic material-icons"
                  aria-hidden="true"
                  >child_care</span
                >
                <span class="mdc-deprecated-list-item__text">
                  <span class="mdc-deprecated-list-item__primary-text"
                    >Two-line item</span
                  >
                  <span class="mdc-deprecated-list-item__secondary-text"
                    >Secondary text</span
                  >
                </span>
              </li>
            </ul>
          </div>
        </section>

        <!-- Data Table -->
        <section class="component-section data-table-section">
          <div class="section-header">
            <a
              href="https://material.io/design/components/data-tables.html"
              class="mdc-typography--button"
              target="_blank"
            >
              Data Table
              <i class="material-icons">open_in_new</i>
            </a>
          </div>
          <div class="component-wrapper">
            <div class="mdc-data-table">
              <table
                class="mdc-data-table__table"
                aria-label="Dessert calories"
              >
                <thead>
                  <tr class="mdc-data-table__header-row">
                    <th
                      class="mdc-data-table__header-cell mdc-data-table__header-cell--checkbox"
                      role="columnheader"
                      scope="col"
                    >
                      <div
                        class="mdc-checkbox mdc-checkbox--selected mdc-data-table__header-row-checkbox"
                      >
                        <input
                          type="checkbox"
                          class="mdc-checkbox__native-control"
                          aria-label="Toggle all rows"
                        />
                        <div class="mdc-checkbox__background">
                          <svg
                            class="mdc-checkbox__checkmark"
                            viewbox="0 0 24 24"
                          >
                            <path
                              class="mdc-checkbox__checkmark-path"
                              fill="none"
                              d="M1.73,12.91 8.1,19.28 22.79,4.59"
                            />
                          </svg>
                          <div class="mdc-checkbox__mixedmark"></div>
                        </div>
                      </div>
                    </th>
                    <th
                      class="mdc-data-table__header-cell"
                      role="columnheader"
                      scope="col"
                    >
                      Dessert
                    </th>
                    <th
                      class="mdc-data-table__header-cell"
                      role="columnheader"
                      scope="col"
                    >
                      Carbs (g)
                    </th>
                    <th
                      class="mdc-data-table__header-cell"
                      role="columnheader"
                      scope="col"
                    >
                      Protein (g)
                    </th>
                  </tr>
                </thead>
                <tbody class="mdc-data-table__content">
                  <tr class="mdc-data-table__row" data-row-id="u0">
                    <td
                      class="mdc-data-table__cell mdc-data-table__cell--checkbox"
                    >
                      <div class="mdc-checkbox mdc-data-table__row-checkbox">
                        <input
                          type="checkbox"
                          class="mdc-checkbox__native-control"
                          aria-labelledby="r0"
                        />
                        <div class="mdc-checkbox__background">
                          <svg
                            class="mdc-checkbox__checkmark"
                            viewbox="0 0 24 24"
                          >
                            <path
                              class="mdc-checkbox__checkmark-path"
                              fill="none"
                              d="M1.73,12.91 8.1,19.28 22.79,4.59"
                            />
                          </svg>
                          <div class="mdc-checkbox__mixedmark"></div>
                        </div>
                      </div>
                    </td>
                    <td class="mdc-data-table__cell" id="r0">Froyo</td>
                    <td
                      class="mdc-data-table__cell mdc-data-table__cell--numeric"
                    >
                      24
                    </td>
                    <td
                      class="mdc-data-table__cell mdc-data-table__cell--numeric"
                    >
                      4.0
                    </td>
                  </tr>
                  <tr
                    class="mdc-data-table__row mdc-data-table__row--selected"
                    aria-selected="true"
                    data-row-id="u1"
                  >
                    <td
                      class="mdc-data-table__cell mdc-data-table__cell--checkbox"
                    >
                      <div
                        class="mdc-checkbox mdc-checkbox--selected mdc-data-table__row-checkbox"
                      >
                        <input
                          type="checkbox"
                          class="mdc-checkbox__native-control"
                          checked
                          aria-labelledby="r1"
                        />
                        <div class="mdc-checkbox__background">
                          <svg
                            class="mdc-checkbox__checkmark"
                            viewbox="0 0 24 24"
                          >
                            <path
                              class="mdc-checkbox__checkmark-path"
                              fill="none"
                              d="M1.73,12.91 8.1,19.28 22.79,4.59"
                            />
                          </svg>
                          <div class="mdc-checkbox__mixedmark"></div>
                        </div>
                      </div>
                    </td>
                    <td class="mdc-data-table__cell" id="r1">Eclair</td>
                    <td
                      class="mdc-data-table__cell mdc-data-table__cell--numeric"
                    >
                      37
                    </td>
                    <td
                      class="mdc-data-table__cell mdc-data-table__cell--numeric"
                    >
                      4.3
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
      <div class="column column-2">
        <!-- FAB -->
        <section class="component-section">
          <div class="section-header">
            <a
              href="https://material.io/design/components/buttons-floating-action-button.html"
              class="mdc-typography--button"
              target="_blank"
            >
              FAB
              <i class="material-icons">open_in_new</i>
            </a>
          </div>
          <div class="component-wrapper fab-component-wrapper">
            <button class="mdc-fab mdc-fab--extended">
              <span class="material-icons mdc-fab__icon">edit</span>
              <span class="mdc-fab__ripple"></span>
              <span class="mdc-fab__label">Button</span>
            </button>
            <button class="mdc-fab" aria-label="Favorite">
              <span class="mdc-fab__ripple"></span>
              <span class="mdc-fab__icon material-icons">favorite</span>
            </button>
            <button class="mdc-fab mdc-fab--mini" aria-label="Add">
              <span class="mdc-fab__ripple"></span>
              <span class="mdc-fab__icon material-icons">add</span>
            </button>
          </div>
        </section>

        <!-- Card -->
        <section class="component-section">
          <div class="section-header">
            <a
              href="https://material.io/design/components/cards.html"
              class="mdc-typography--button"
              target="_blank"
            >
              Card
              <i class="material-icons">open_in_new</i>
            </a>
          </div>
          <div class="component-wrapper card-component-wrapper">
            <div class="mdc-card demo-card">
              <div class="mdc-card__primary-action" tabindex="0">
                <div
                  class="mdc-card__media mdc-card__media--16-9 demo-card__media"
                  style="
                    background-image: url('https://cdn.glitch.com/9c389208-b279-4e96-bcbc-e5f8712d8706%2Fplaceholder-landscape-short.png?1553629848209');
                  "
                ></div>
                <div class="demo-card__primary">
                  <h3
                    class="demo-card__subtitle mdc-typography mdc-typography--overline"
                  >
                    Overline
                  </h3>
                  <h2
                    class="demo-card__title mdc-typography mdc-typography--headline6"
                  >
                    Headline 6
                  </h2>
                </div>
                <div
                  class="demo-card__secondary mdc-typography mdc-typography--body2"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
              <div class="mdc-card__actions">
                <div class="mdc-card__action-buttons">
                  <button
                    class="mdc-button mdc-card__action mdc-card__action--button"
                  >
                    <span class="mdc-button__ripple"></span>Button
                  </button>
                  <button
                    class="mdc-button mdc-card__action mdc-card__action--button"
                  >
                    <span class="mdc-button__ripple"></span>Button
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Text field -->
        <section class="component-section">
          <div class="section-header">
            <a
              href="https://material.io/design/components/text-fields.html"
              class="mdc-typography--button"
              target="_blank"
            >
              Text field
              <i class="material-icons">open_in_new</i>
            </a>
          </div>
          <div
            class="component-wrapper text-field-component-wrapper text-field-component-wrapper-1"
          >
            <label
              class="mdc-text-field mdc-text-field--outlined mdc-text-field--with-trialing-icon"
            >
              <span class="mdc-notched-outline">
                <span class="mdc-notched-outline__leading"></span>
                <span class="mdc-notched-outline__notch">
                  <span class="mdc-floating-label" id="my-label-id"
                    >Your Name</span
                  >
                </span>
                <span class="mdc-notched-outline__trailing"></span>
              </span>
              <input
                type="text"
                class="mdc-text-field__input"
                aria-labelledby="my-label-id"
              />
              <i
                class="material-icons mdc-text-field__icon mdc-text-field__icon--trailing"
                >visibility</i
              >
            </label>
            <div class="mdc-text-field-helper-line">
              <div
                class="mdc-text-field-helper-text mdc-text-field-helper-text--persistent"
              >
                Assistive text
              </div>
            </div>
          </div>
          <div
            class="component-wrapper text-field-component-wrapper text-field-component-wrapper-2"
          >
            <label
              class="mdc-text-field mdc-text-field--filled mdc-text-field--with-leading-icon"
            >
              <span class="mdc-text-field__ripple"></span>
              <span class="mdc-floating-label" id="my-label-id">Hint text</span>
              <i
                class="material-icons mdc-text-field__icon mdc-text-field__icon--leading"
                >visibility</i
              >
              <input
                class="mdc-text-field__input"
                type="text"
                aria-labelledby="my-label-id"
              />
              <span class="mdc-line-ripple"></span>
            </label>
            <div class="mdc-text-field-helper-line">
              <div
                class="mdc-text-field-helper-text mdc-text-field-helper-text--persistent"
              >
                Assistive text
              </div>
            </div>
          </div>
        </section>

        <!-- Tabs -->
        <section class="component-section tabs-section">
          <div class="section-header">
            <a
              href="https://material.io/design/components/tabs.html"
              class="mdc-typography--button"
              target="_blank"
            >
              Tabs
              <i class="material-icons">open_in_new</i>
            </a>
          </div>
          <div class="component-wrapper">
            <div class="mdc-tab-bar" role="tablist">
              <div class="mdc-tab-scroller">
                <div class="mdc-tab-scroller__scroll-area">
                  <div class="mdc-tab-scroller__scroll-content">
                    <button
                      class="mdc-tab mdc-tab--active"
                      role="tab"
                      aria-selected="true"
                      tabindex="0"
                    >
                      <span class="mdc-tab__content">
                        <span class="mdc-tab__text-label">Button</span>
                      </span>
                      <span class="mdc-tab-indicator mdc-tab-indicator--active">
                        <span
                          class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"
                        ></span>
                      </span>
                      <span class="mdc-tab__ripple"></span>
                    </button>
                    <button
                      class="mdc-tab"
                      role="tab"
                      aria-selected="true"
                      tabindex="0"
                    >
                      <span class="mdc-tab__content">
                        <span class="mdc-tab__text-label">Button</span>
                      </span>
                      <span class="mdc-tab-indicator">
                        <span
                          class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"
                        ></span>
                      </span>
                      <span class="mdc-tab__ripple"></span>
                    </button>
                    <button
                      class="mdc-tab"
                      role="tab"
                      aria-selected="true"
                      tabindex="0"
                    >
                      <span class="mdc-tab__content">
                        <span class="mdc-tab__text-label">Button</span>
                      </span>
                      <span class="mdc-tab-indicator">
                        <span
                          class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"
                        ></span>
                      </span>
                      <span class="mdc-tab__ripple"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Slider -->
        <section class="component-section">
          <div class="section-header">
            <a
              href="https://material.io/design/components/sliders.html"
              class="mdc-typography--button"
              target="_blank"
            >
              Slider
              <i class="material-icons">open_in_new</i>
            </a>
          </div>
          <div class="component-wrapper">
            <div class="mdc-slider">
              <input
                class="mdc-slider__input"
                type="range"
                min="0"
                max="100"
                value="50"
                name="volume"
                aria-label="Continuous slider demo"
              />
              <div class="mdc-slider__track">
                <div class="mdc-slider__track--inactive"></div>
                <div class="mdc-slider__track--active">
                  <div class="mdc-slider__track--active_fill"></div>
                </div>
              </div>
              <div class="mdc-slider__thumb">
                <div class="mdc-slider__thumb-knob"></div>
              </div>
            </div>
          </div>
        </section>

        <!-- Snackbar -->
        <section class="component-section snackbar-section">
          <div class="section-header">
            <a
              href="https://material.io/design/components/snackbars.html"
              class="mdc-typography--button"
              target="_blank"
            >
              Snackbar
              <i class="material-icons">open_in_new</i>
            </a>
          </div>
          <div class="component-wrapper">
            <div class="mdc-snackbar mdc-snackbar--open">
              <div class="mdc-snackbar__surface">
                <div
                  class="mdc-snackbar__label"
                  role="status"
                  aria-live="polite"
                >
                  Marked as favorite.
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Dialog -->
        <section class="component-section dialog-component-section">
          <div class="section-header">
            <a
              href="https://material.io/design/components/dialogs.html"
              class="mdc-typography--button"
              target="_blank"
            >
              Dialog
              <i class="material-icons">open_in_new</i>
            </a>
          </div>
          <div class="component-wrapper dialog-component-wrapper">
            <div
              class="mdc-dialog mdc-dialog--open"
              role="alertdialog"
              aria-modal="true"
              aria-labelledby="my-dialog-title"
              aria-describedby="my-dialog-content"
            >
              <div class="mdc-dialog__container">
                <div class="mdc-dialog__surface">
                  <!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->
                  <h2 class="mdc-dialog__title" id="my-dialog-title">
                    Headline 6
                  </h2>
                  <div class="mdc-dialog__content" id="my-dialog-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </div>
                  <footer class="mdc-dialog__actions">
                    <button
                      type="button"
                      class="mdc-button mdc-dialog__button"
                      data-mdc-dialog-action="no"
                    >
                      <span class="mdc-button__ripple"></span>
                      <span class="mdc-button__label">Button</span>
                    </button>
                    <button
                      type="button"
                      class="mdc-button mdc-dialog__button"
                      data-mdc-dialog-action="yes"
                    >
                      <span class="mdc-button__ripple"></span>
                      <span class="mdc-button__label">Button</span>
                    </button>
                  </footer>
                </div>
              </div>
              <!-- Note scrim element has been removed for this stickersheet -->
              <!-- <div class="mdc-dialog__scrim"></div> -->
            </div>
          </div>
        </section>

        <!-- Image List -->
        <section class="component-section image-list-section">
          <div class="section-header">
            <a
              href="https://material.io/design/components/image-lists.html"
              class="mdc-typography--button"
              target="_blank"
            >
              Image List
              <i class="material-icons">open_in_new</i>
            </a>
          </div>
          <div class="component-wrapper">
            <ul class="mdc-image-list mdc-image-list--masonry">
              <li class="mdc-image-list__item">
                <img
                  class="mdc-image-list__image"
                  src="https://cdn.glitch.com/9c389208-b279-4e96-bcbc-e5f8712d8706%2Fplaceholder-portrait.png?1553629847850"
                />
              </li>
              <li class="mdc-image-list__item">
                <img
                  class="mdc-image-list__image"
                  src="https://cdn.glitch.com/9c389208-b279-4e96-bcbc-e5f8712d8706%2Fplaceholder-landscape-short.png?1553629848209"
                />
              </li>
              <li class="mdc-image-list__item">
                <img
                  class="mdc-image-list__image"
                  src="https://cdn.glitch.com/9c389208-b279-4e96-bcbc-e5f8712d8706%2Fplaceholder-landscape-med.png?1553629847913"
                />
              </li>
              <li class="mdc-image-list__item">
                <img
                  class="mdc-image-list__image"
                  src="https://cdn.glitch.com/9c389208-b279-4e96-bcbc-e5f8712d8706%2Fplaceholder-landscape-short.png?1553629848209"
                />
              </li>
              <li class="mdc-image-list__item">
                <img
                  class="mdc-image-list__image"
                  src="https://cdn.glitch.com/9c389208-b279-4e96-bcbc-e5f8712d8706%2Fplaceholder-portrait.png?1553629847850"
                />
              </li>
              <li class="mdc-image-list__item">
                <img
                  class="mdc-image-list__image"
                  src="https://cdn.glitch.com/9c389208-b279-4e96-bcbc-e5f8712d8706%2Fplaceholder-landscape-short.png?1553629848209"
                />
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  </div>
</div>
`;const Wi={title:"Patterns/Kitchen Sink",parameters:{layout:"fullscreen"}},Ht=({})=>(document.addEventListener("DOMContentLoaded",()=>{const a=document;Array.from(a.querySelectorAll(".mdc-button")).forEach(x=>new H(x));const t=a.querySelector("#icon-toggle-button"),n=new mn(t);n.unbounded=!0,Array.from(a.querySelectorAll(".mdc-card__primary-action")).forEach(x=>new H(x)),Array.from(a.querySelectorAll(".mdc-chip-set, .mdc-evolution-chip-set")).forEach(x=>new on(x)),Array.from(a.querySelectorAll(".mdc-text-field")).forEach(x=>{let bt=new Ri(x);x.classList.contains("text-field-with-input")&&(bt.value="Input text")}),Array.from(a.querySelectorAll(".mdc-text-field-helper-text")).forEach(x=>new je(x));const l=a.querySelector(".mdc-linear-progress"),d=new en(l);d.progress=.5,Array.from(a.querySelectorAll(".mdc-fab")).forEach(x=>new H(x)),Array.from(a.querySelectorAll(".mdc-checkbox")).forEach(x=>{let bt=new nn(x);x.classList.contains("indeterminate-checkbox")&&(bt.indeterminate=!0)}),Array.from(a.querySelectorAll(".mdc-radio")).forEach(x=>new Rn(x)),Array.from(a.querySelectorAll(".mdc-switch")).forEach(x=>new li(x)),Array.from(a.querySelectorAll(".mdc-top-app-bar")).forEach(x=>new Mi(x)),Array.from(a.querySelectorAll(".mdc-list")).forEach(x=>{let bt=new Me(x);bt.listElements.map(ze=>new H(ze)),bt.singleSelection=!0}),Array.from(a.querySelectorAll(".mdc-select")).forEach(x=>new Bn(x));const k=a.querySelector(".mdc-snackbar");new ti(k);const T=a.querySelector(".mdc-dialog");new hn(T);const B=a.querySelector(".mdc-slider"),D=new Un(B);D.value=5;const C=a.querySelector(".mdc-menu"),ct=new Ne(C);ct.open=!0,window.top===window&&C.addEventListener("MDCMenuSurface:opened",()=>document.querySelector(".mdc-button").focus());const Lt=a.querySelector(".mdc-tab-bar");new Ti(Lt);const xt=document.querySelector(".mdc-data-table");new rn(xt),document.querySelector(".theme-builder-drawer")},{once:!0}),Ni);var Ce,Se,Le;Ht.parameters={...Ht.parameters,docs:{...(Ce=Ht.parameters)==null?void 0:Ce.docs,source:{originalSource:`({}) => {
  document.addEventListener('DOMContentLoaded', () => {
    //
    // Instantiate all components in the main content
    //

    const mainEl = document;

    // Button
    const buttonEls = Array.from(mainEl.querySelectorAll('.mdc-button'));
    buttonEls.forEach(el => new MDCRipple(el));

    // Icon button toggle
    const iconToggleEl = mainEl.querySelector('#icon-toggle-button');
    const iconToggle = new MDCIconButtonToggle(iconToggleEl);
    iconToggle.unbounded = true;

    // Card
    const cardPrimaryActionEls = Array.from(mainEl.querySelectorAll('.mdc-card__primary-action'));
    cardPrimaryActionEls.forEach(el => new MDCRipple(el));

    // Chips
    const chipSetEls = Array.from(mainEl.querySelectorAll('.mdc-chip-set, .mdc-evolution-chip-set'));
    chipSetEls.forEach(el => new MDCChipSet(el));

    // Text field
    const textFieldEls = Array.from(mainEl.querySelectorAll('.mdc-text-field'));
    textFieldEls.forEach(el => {
      let textField = new MDCTextField(el);
      if (el.classList.contains('text-field-with-input')) {
        textField.value = 'Input text';
      }
    });
    const helperTextEls = Array.from(mainEl.querySelectorAll('.mdc-text-field-helper-text'));
    helperTextEls.forEach(el => new MDCTextFieldHelperText(el));

    // Linear progress
    const linearProgressEl = mainEl.querySelector('.mdc-linear-progress');
    const linearProgress = new MDCLinearProgress(linearProgressEl);
    linearProgress.progress = 0.5;

    // FAB
    const fabEls = Array.from(mainEl.querySelectorAll('.mdc-fab'));
    fabEls.forEach(el => new MDCRipple(el));

    // Checkbox
    const checkboxEls = Array.from(mainEl.querySelectorAll('.mdc-checkbox'));
    checkboxEls.forEach(el => {
      let checkbox = new MDCCheckbox(el);
      if (el.classList.contains('indeterminate-checkbox')) {
        checkbox.indeterminate = true;
      }
    });

    // Radio
    const radioEls = Array.from(mainEl.querySelectorAll('.mdc-radio'));
    radioEls.forEach(el => new MDCRadio(el));

    // Switch
    const switchEls = Array.from(mainEl.querySelectorAll('.mdc-switch'));
    switchEls.forEach(el => new MDCSwitch(el));

    // Top app bar
    const topAppBarEls = Array.from(mainEl.querySelectorAll('.mdc-top-app-bar'));
    topAppBarEls.forEach(el => new MDCTopAppBar(el));

    // List
    const listEls = Array.from(mainEl.querySelectorAll('.mdc-list'));
    listEls.forEach(el => {
      let list = new MDCList(el);
      list.listElements.map(listItemEl => new MDCRipple(listItemEl));
      list.singleSelection = true;
    });

    // Select
    const selectEls = Array.from(mainEl.querySelectorAll('.mdc-select'));
    selectEls.forEach(el => new MDCSelect(el));

    // Snackbar
    const snackbarEl = mainEl.querySelector('.mdc-snackbar');
    new MDCSnackbar(snackbarEl);

    // Dialog
    const dialogEl = mainEl.querySelector('.mdc-dialog');
    new MDCDialog(dialogEl);

    // Slider
    const sliderEl = mainEl.querySelector('.mdc-slider');
    const slider = new MDCSlider(sliderEl);
    slider.value = 5;

    // Menu
    const menuEl = mainEl.querySelector('.mdc-menu');
    const menu = new MDCMenu(menuEl);
    menu.open = true;
    // Override MDCMenuSurfaceFoundation so the menu never closes
    //menu.menuSurface_.foundation_.close = () => {};
    // Focus first component when menu is done opening if not in an iframe
    if (window.top === window) {
      menuEl.addEventListener('MDCMenuSurface:opened', () => document.querySelector('.mdc-button').focus());
    }

    // Tabs
    const tabBarEl = mainEl.querySelector('.mdc-tab-bar');
    new MDCTabBar(tabBarEl);

    // Data Table
    const dataTableEl = document.querySelector('.mdc-data-table');
    new MDCDataTable(dataTableEl);

    //
    // Theme Builder drawer contents
    //

    const themeBuilderDrawerEl = document.querySelector('.theme-builder-drawer');

    // Theme name
    //themeBuilderDrawerEl.querySelector('.theme-name').textContent = themeName;

    //
    // Handle responsive layout
    //

    // const themeBuilderDrawer = null;
    // const initModalDrawer = () => {
    //   themeBuilderDrawerEl.classList.add("mdc-drawer--modal");
    //   const themeBuilderDrawer = new MDCDrawer(themeBuilderDrawerEl);
    //   themeBuilderDrawer.open = false;
    //   themeBuilderAppBar.setScrollTarget(mainEl);
    //   themeBuilderAppBar.listen('MDCTopAppBar:nav', () => {
    //     themeBuilderDrawer.open = !themeBuilderDrawer.open;
    //   });
    // }
    // const destroyModalDrawer = () => {
    //   themeBuilderDrawerEl.classList.remove("mdc-drawer--modal");
    //   if (themeBuilderDrawer) {
    //     themeBuilderDrawer.destroy();
    //   }
    // }

    // // Toggle between permanent drawer and modal drawer at 1310px
    // const layoutForScreenSize = () => {
    //   if (window.matchMedia("(max-width: 1310px)").matches) {
    //     initModalDrawer();
    //     mainEl.classList.add('mdc-top-app-bar--fixed-adjust');
    //   } else {
    //     destroyModalDrawer();
    //     mainEl.classList.remove('mdc-top-app-bar--fixed-adjust');
    //   }
    // }

    // window.addEventListener('resize', layoutForScreenSize);
    // layoutForScreenSize();
  }, {
    once: true
  });
  return kitchenSinkContent;
}`,...(Le=(Se=Ht.parameters)==null?void 0:Se.docs)==null?void 0:Le.source}}};const ji=["Basic"];export{Ht as Basic,ji as __namedExportsOrder,Wi as default};
