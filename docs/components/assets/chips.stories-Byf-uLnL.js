import{s as Ct,x as N,n as y,r as xt,i as wt,e as Tt}from"./query-assigned-elements-BJdb4KNY.js";import{a as Rt}from"./utils-sZhlDiu_.js";import{_ as D,a as I,c as x,f as O}from"./tslib.es6-X4n3o5C8.js";import{A as Dt,K as h,n as Ft,i as Lt}from"./keyboard-BGS45BWM.js";import{M as Q}from"./foundation-D9HcNlNd.js";import{i as Nt}from"./query-pFbEai1B.js";import{o as Ot}from"./class-map-LmxYoNzI.js";import{M as Z,b as kt,d as $t,c as Pt,s as Bt,e as k}from"./component-eVeawWWK.js";import"./directive-CvdRHFdJ.js";import"./iframe-Ft33L4f_.js";import"./preload-helper-Dp1pzeXC.js";/**
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
 */var G;(function(o){o.PRIMARY_ACTION="mdc-evolution-chip__action--primary",o.TRAILING_ACTION="mdc-evolution-chip__action--trailing",o.CHIP_ROOT="mdc-evolution-chip"})(G||(G={}));var A;(function(o){o[o.UNSPECIFIED=0]="UNSPECIFIED",o[o.CLICK=1]="CLICK",o[o.BACKSPACE_KEY=2]="BACKSPACE_KEY",o[o.DELETE_KEY=3]="DELETE_KEY",o[o.SPACEBAR_KEY=4]="SPACEBAR_KEY",o[o.ENTER_KEY=5]="ENTER_KEY"})(A||(A={}));var v;(function(o){o[o.UNSPECIFIED=0]="UNSPECIFIED",o[o.PRIMARY=1]="PRIMARY",o[o.TRAILING=2]="TRAILING"})(v||(v={}));var R;(function(o){o.INTERACTION="MDCChipAction:interaction",o.NAVIGATION="MDCChipAction:navigation"})(R||(R={}));var _;(function(o){o[o.FOCUSABLE=0]="FOCUSABLE",o[o.FOCUSABLE_AND_FOCUSED=1]="FOCUSABLE_AND_FOCUSED",o[o.NOT_FOCUSABLE=2]="NOT_FOCUSABLE"})(_||(_={}));var m;(function(o){o.ARIA_DISABLED="aria-disabled",o.ARIA_HIDDEN="aria-hidden",o.ARIA_SELECTED="aria-selected",o.DATA_DELETABLE="data-mdc-deletable",o.DISABLED="disabled",o.ROLE="role",o.TAB_INDEX="tabindex"})(m||(m={}));/**
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
 */var d;(function(o){o.SELECTING="mdc-evolution-chip--selecting",o.DESELECTING="mdc-evolution-chip--deselecting",o.SELECTING_WITH_PRIMARY_ICON="mdc-evolution-chip--selecting-with-primary-icon",o.DESELECTING_WITH_PRIMARY_ICON="mdc-evolution-chip--deselecting-with-primary-icon",o.DISABLED="mdc-evolution-chip--disabled",o.ENTER="mdc-evolution-chip--enter",o.EXIT="mdc-evolution-chip--exit",o.SELECTED="mdc-evolution-chip--selected",o.HIDDEN="mdc-evolution-chip--hidden",o.WITH_PRIMARY_ICON="mdc-evolution-chip--with-primary-icon"})(d||(d={}));var f;(function(o){o.INTERACTION="MDCChip:interaction",o.NAVIGATION="MDCChip:navigation",o.ANIMATION="MDCChip:animation"})(f||(f={}));var W;(function(o){o.DATA_REMOVED_ANNOUNCEMENT="data-mdc-removed-announcement",o.DATA_ADDED_ANNOUNCEMENT="data-mdc-added-announcement"})(W||(W={}));var g;(function(o){o.ENTER="mdc-evolution-chip-enter",o.EXIT="mdc-evolution-chip-exit"})(g||(g={}));/**
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
 */var w;(function(o){o[o.UNSPECIFIED=0]="UNSPECIFIED",o[o.LEFT=1]="LEFT",o[o.RIGHT=2]="RIGHT"})(w||(w={}));var b;(function(o){o.SELECTION="selection",o.EXIT="exit"})(b||(b={}));var Mt=function(o){D(i,o);function i(t){var e=o.call(this,I(I({},i.defaultAdapter),t))||this;return e.animFrame=new Dt,e}return Object.defineProperty(i,"defaultAdapter",{get:function(){return{addClass:function(){},emitEvent:function(){},getActions:function(){return[]},getAttribute:function(){return null},getElementID:function(){return""},getOffsetWidth:function(){return 0},hasClass:function(){return!1},isActionDisabled:function(){return!1},isActionFocusable:function(){return!1},isActionSelectable:function(){return!1},isActionSelected:function(){return!1},isRTL:function(){return!1},removeClass:function(){},setActionDisabled:function(){},setActionFocus:function(){},setActionSelected:function(){},setStyleProperty:function(){}}},enumerable:!1,configurable:!0}),i.prototype.destroy=function(){this.animFrame.cancelAll()},i.prototype.getElementID=function(){return this.adapter.getElementID()},i.prototype.setDisabled=function(t){var e,n,c=this.getActions();try{for(var r=x(c),p=r.next();!p.done;p=r.next()){var a=p.value;this.adapter.setActionDisabled(a,t)}}catch(l){e={error:l}}finally{try{p&&!p.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}t?this.adapter.addClass(d.DISABLED):this.adapter.removeClass(d.DISABLED)},i.prototype.isDisabled=function(){var t,e,n=this.getActions();try{for(var c=x(n),r=c.next();!r.done;r=c.next()){var p=r.value;if(this.adapter.isActionDisabled(p))return!0}}catch(a){t={error:a}}finally{try{r&&!r.done&&(e=c.return)&&e.call(c)}finally{if(t)throw t.error}}return!1},i.prototype.getActions=function(){return this.adapter.getActions()},i.prototype.isActionFocusable=function(t){return this.adapter.isActionFocusable(t)},i.prototype.isActionSelectable=function(t){return this.adapter.isActionSelectable(t)},i.prototype.isActionSelected=function(t){return this.adapter.isActionSelected(t)},i.prototype.setActionFocus=function(t,e){this.adapter.setActionFocus(t,e)},i.prototype.setActionSelected=function(t,e){this.adapter.setActionSelected(t,e),this.animateSelection(e)},i.prototype.startAnimation=function(t){if(t===g.ENTER){this.adapter.addClass(d.ENTER);return}if(t===g.EXIT){this.adapter.addClass(d.EXIT);return}},i.prototype.handleAnimationEnd=function(t){var e=this,n=t.animationName;if(n===g.ENTER){this.adapter.removeClass(d.ENTER),this.adapter.emitEvent(f.ANIMATION,{chipID:this.getElementID(),animation:g.ENTER,addedAnnouncement:this.getAddedAnnouncement(),isComplete:!0});return}if(n===g.EXIT){this.adapter.removeClass(d.EXIT),this.adapter.addClass(d.HIDDEN);var c=this.adapter.getOffsetWidth();this.adapter.setStyleProperty("width",c+"px"),this.animFrame.request(b.EXIT,function(){e.animFrame.request(b.EXIT,function(){e.adapter.setStyleProperty("width","0")})})}},i.prototype.handleTransitionEnd=function(){this.adapter.hasClass(d.HIDDEN)&&this.adapter.emitEvent(f.ANIMATION,{chipID:this.getElementID(),animation:g.EXIT,removedAnnouncement:this.getRemovedAnnouncement(),isComplete:!0})},i.prototype.handleActionInteraction=function(t){var e=t.detail,n=e.source,c=e.actionID,r=this.adapter.isActionSelectable(n),p=this.adapter.isActionSelected(n);this.adapter.emitEvent(f.INTERACTION,{chipID:this.getElementID(),shouldRemove:this.shouldRemove(e),actionID:c,isSelectable:r,isSelected:p,source:n})},i.prototype.handleActionNavigation=function(t){var e=t.detail,n=e.source,c=e.key,r=this.adapter.isRTL(),p=this.adapter.isActionFocusable(v.TRAILING),a=this.adapter.isActionFocusable(v.PRIMARY),l=this.directionFromKey(c,r),s=n===v.PRIMARY&&l===w.RIGHT&&p,u=n===v.TRAILING&&l===w.LEFT&&a;if(s){this.navigateActions({from:n,to:v.TRAILING});return}if(u){this.navigateActions({from:n,to:v.PRIMARY});return}this.adapter.emitEvent(f.NAVIGATION,{chipID:this.getElementID(),isRTL:r,source:n,key:c})},i.prototype.directionFromKey=function(t,e){var n=t===h.ARROW_LEFT,c=t===h.ARROW_RIGHT;return!e&&n||e&&c?w.LEFT:!e&&c||e&&n?w.RIGHT:w.UNSPECIFIED},i.prototype.navigateActions=function(t){this.adapter.setActionFocus(t.from,_.NOT_FOCUSABLE),this.adapter.setActionFocus(t.to,_.FOCUSABLE_AND_FOCUSED)},i.prototype.shouldRemove=function(t){var e=t.source,n=t.trigger;return n===A.BACKSPACE_KEY||n===A.DELETE_KEY?!0:e===v.TRAILING},i.prototype.getRemovedAnnouncement=function(){var t=this.adapter.getAttribute(W.DATA_REMOVED_ANNOUNCEMENT);return t||void 0},i.prototype.getAddedAnnouncement=function(){var t=this.adapter.getAttribute(W.DATA_ADDED_ANNOUNCEMENT);return t||void 0},i.prototype.animateSelection=function(t){var e=this;this.resetAnimationStyles(),this.animFrame.request(b.SELECTION,function(){e.animFrame.request(b.SELECTION,function(){e.updateSelectionStyles(t)})})},i.prototype.resetAnimationStyles=function(){this.adapter.removeClass(d.SELECTING),this.adapter.removeClass(d.DESELECTING),this.adapter.removeClass(d.SELECTING_WITH_PRIMARY_ICON),this.adapter.removeClass(d.DESELECTING_WITH_PRIMARY_ICON)},i.prototype.updateSelectionStyles=function(t){var e=this,n=this.adapter.hasClass(d.WITH_PRIMARY_ICON);if(n&&t){this.adapter.addClass(d.SELECTING_WITH_PRIMARY_ICON),this.animFrame.request(b.SELECTION,function(){e.adapter.addClass(d.SELECTED)});return}if(n&&!t){this.adapter.addClass(d.DESELECTING_WITH_PRIMARY_ICON),this.animFrame.request(b.SELECTION,function(){e.adapter.removeClass(d.SELECTED)});return}if(t){this.adapter.addClass(d.SELECTING),this.animFrame.request(b.SELECTION,function(){e.adapter.addClass(d.SELECTED)});return}if(!t){this.adapter.addClass(d.DESELECTING),this.animFrame.request(b.SELECTION,function(){e.adapter.removeClass(d.SELECTED)});return}},i}(Q);/**
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
 */function Kt(o,i){var t=Number(i.replace("px",""));return Number.isNaN(t)?o:{width:o.width+t,height:o.height,top:o.top,right:o.right,bottom:o.bottom,left:o.left}}var Gt="--mdc-chip-graphic-selected-width";/**
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
 */var U=new Map;U.set(h.SPACEBAR,A.SPACEBAR_KEY);U.set(h.ENTER,A.ENTER_KEY);U.set(h.DELETE,A.DELETE_KEY);U.set(h.BACKSPACE,A.BACKSPACE_KEY);var St=function(o){D(i,o);function i(t){return o.call(this,I(I({},i.defaultAdapter),t))||this}return Object.defineProperty(i,"defaultAdapter",{get:function(){return{emitEvent:function(){},focus:function(){},getAttribute:function(){return null},getElementID:function(){return""},removeAttribute:function(){},setAttribute:function(){}}},enumerable:!1,configurable:!0}),i.prototype.handleClick=function(){this.isDisabled()||this.emitInteraction(A.CLICK)},i.prototype.handleKeydown=function(t){var e=Ft(t);if(this.shouldNotifyInteractionFromKey(e)){t.preventDefault(),this.emitInteraction(this.getTriggerFromKey(e));return}if(Lt(t)){t.preventDefault(),this.emitNavigation(e);return}return!0},i.prototype.setDisabled=function(t){if(this.isSelectable()){this.adapter.setAttribute(m.ARIA_DISABLED,""+t);return}t?this.adapter.setAttribute(m.DISABLED,"true"):this.adapter.removeAttribute(m.DISABLED)},i.prototype.isDisabled=function(){return this.adapter.getAttribute(m.ARIA_DISABLED)==="true"||this.adapter.getAttribute(m.DISABLED)!==null},i.prototype.setFocus=function(t){if(this.isFocusable()){if(t===_.FOCUSABLE_AND_FOCUSED){this.adapter.setAttribute(m.TAB_INDEX,"0"),this.adapter.focus();return}if(t===_.FOCUSABLE){this.adapter.setAttribute(m.TAB_INDEX,"0");return}if(t===_.NOT_FOCUSABLE){this.adapter.setAttribute(m.TAB_INDEX,"-1");return}}},i.prototype.isFocusable=function(){return!(this.isDisabled()||this.adapter.getAttribute(m.ARIA_HIDDEN)==="true")},i.prototype.setSelected=function(t){this.isSelectable()&&this.adapter.setAttribute(m.ARIA_SELECTED,""+t)},i.prototype.isSelected=function(){return this.adapter.getAttribute(m.ARIA_SELECTED)==="true"},i.prototype.emitInteraction=function(t){this.adapter.emitEvent(R.INTERACTION,{actionID:this.adapter.getElementID(),source:this.actionType(),trigger:t})},i.prototype.emitNavigation=function(t){this.adapter.emitEvent(R.NAVIGATION,{source:this.actionType(),key:t})},i.prototype.shouldNotifyInteractionFromKey=function(t){var e=t===h.ENTER||t===h.SPACEBAR,n=t===h.BACKSPACE||t===h.DELETE;return!!(e||n&&this.shouldEmitInteractionOnRemoveKey())},i.prototype.getTriggerFromKey=function(t){var e=U.get(t);return e||A.UNSPECIFIED},i}(Q);/**
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
 */var Ut=function(o){D(i,o);function i(){return o!==null&&o.apply(this,arguments)||this}return i.prototype.isSelectable=function(){return this.adapter.getAttribute(m.ROLE)==="option"},i.prototype.actionType=function(){return v.PRIMARY},i.prototype.shouldEmitInteractionOnRemoveKey=function(){return this.adapter.getAttribute(m.DATA_DELETABLE)==="true"},i}(St);/**
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
 */var zt=function(o){D(i,o);function i(){return o!==null&&o.apply(this,arguments)||this}return i.prototype.isSelectable=function(){return!1},i.prototype.actionType=function(){return v.TRAILING},i.prototype.shouldEmitInteractionOnRemoveKey=function(){return!0},i}(St);/**
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
 */var Yt=[k.safeAttrPrefix(tt||(tt=O(["aria-"],["aria-"]))),k.safeAttrPrefix(it||(it=O(["data-"],["data-"]))),k.safeAttrPrefix(et||(et=O(["disabled"],["disabled"]))),k.safeAttrPrefix(ot||(ot=O(["role"],["role"]))),k.safeAttrPrefix(nt||(nt=O(["tabindex"],["tabindex"])))],Ht=function(o){D(i,o);function i(){var t=o!==null&&o.apply(this,arguments)||this;return t.rootHTML=t.root,t}return i.attachTo=function(t){return new i(t)},Object.defineProperty(i.prototype,"ripple",{get:function(){return this.rippleInstance},enumerable:!1,configurable:!0}),i.prototype.initialize=function(t){var e=this;t===void 0&&(t=function(c,r){return new Z(c,r)});var n=I(I({},Z.createAdapter(this)),{computeBoundingRect:function(){return e.computeRippleClientRect()}});this.rippleInstance=t(this.root,new kt(n))},i.prototype.initialSyncWithDOM=function(){var t=this;this.handleClick=function(){t.foundation.handleClick()},this.handleKeydown=function(e){t.foundation.handleKeydown(e)},this.listen("click",this.handleClick),this.listen("keydown",this.handleKeydown)},i.prototype.destroy=function(){this.ripple.destroy(),this.unlisten("click",this.handleClick),this.unlisten("keydown",this.handleKeydown),o.prototype.destroy.call(this)},i.prototype.getDefaultFoundation=function(){var t=this,e={emitEvent:function(n,c){t.emit(n,c,!0)},focus:function(){t.rootHTML.focus()},getAttribute:function(n){return t.root.getAttribute(n)},getElementID:function(){return t.root.id},removeAttribute:function(n){t.root.removeAttribute(n)},setAttribute:function(n,c){Bt(Yt,t.root,n,c)}};return this.root.classList.contains(G.TRAILING_ACTION)?new zt(e):new Ut(e)},i.prototype.setDisabled=function(t){this.foundation.setDisabled(t)},i.prototype.isDisabled=function(){return this.foundation.isDisabled()},i.prototype.setFocus=function(t){this.foundation.setFocus(t)},i.prototype.isFocusable=function(){return this.foundation.isFocusable()},i.prototype.setSelected=function(t){this.foundation.setSelected(t)},i.prototype.isSelected=function(){return this.foundation.isSelected()},i.prototype.isSelectable=function(){return this.foundation.isSelectable()},i.prototype.actionType=function(){return this.foundation.actionType()},i.prototype.computeRippleClientRect=function(){if(this.root.classList.contains(G.PRIMARY_ACTION)){var t=$t(this.root,"."+G.CHIP_ROOT);if(!t)return this.root.getBoundingClientRect();var e=window.getComputedStyle(t).getPropertyValue(Gt);return Kt(t.getBoundingClientRect(),e)}return this.root.getBoundingClientRect()},i}(Pt),tt,it,et,ot,nt,Wt=Object.defineProperty,C=(o,i,t,e)=>{for(var n=void 0,c=o.length-1,r;c>=0;c--)(r=o[c])&&(n=r(i,t,n)||n);return n&&Wt(i,t,n),n};let Xt=0;class E extends Ct{constructor(){super(),this.mdcFoundationClass=Mt,this.label="",this.icon="",this.trailingIcon=!1,this.avatar=!1,this.disabled=!1,this.filter=!1,this.chipId=Xt++}render(){const i={"mdc-evolution-chip":!0,"mdc-evolution-chip--disabled":this.disabled,"mdc-evolution-chip--with-trailing-action":this.trailingIcon,"mdc-evolution-chip--with-primary-graphic":!this.trailingIcon&&this.icon,"mdc-evolution-chip--with-primary-icon":this.icon&&!this.filter,"mdc-evolution-chip--filter":this.filter,"mdc-evolution-chip--selectable":this.filter,"mdc-evolution-chip--with-avatar":this.avatar,secondary:this.state==="secondary",positive:this.state==="positive",negative:this.state==="negative",caution:this.state==="caution"};return N`
      <span
        class="${Ot(i)}"
        role="${this.filter?"presentation":"row"}"
        id="cv-chip-${this.chipId}"
      >
        <span
          class="mdc-evolution-chip__cell mdc-evolution-chip__cell--primary"
          role="${this.filter?"presentation":"gridcell"}"
        >
          <button
            class="mdc-evolution-chip__action mdc-evolution-chip__action--primary"
            role="${this.filter?"option":""}"
            type="button"
            tabindex="-1"
          >
            <span
              class="mdc-evolution-chip__ripple mdc-evolution-chip__ripple--primary"
            ></span>
            ${!this.trailingIcon&&this.icon||this.filter?this.renderGraphic():""}
            <span class="mdc-evolution-chip__text-label">${this.label}</span>
          </button>
        </span>
        ${this.trailingIcon?this.renderTrailing():""}
      </span>
    `}async firstUpdated(){this.mdcFoundation!==void 0&&this.mdcFoundation.destroy(),this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.actions=new Map;const i=this.mdcRoot.querySelectorAll(".mdc-evolution-chip__action");for(let t=0;t<i.length;t++){const e=new Ht(i[t]);this.actions.set(e.actionType(),e),i[t].addEventListener(R.INTERACTION,n=>{var c;(c=this.mdcFoundation)==null||c.handleActionInteraction(n)}),i[t].addEventListener(R.NAVIGATION,n=>{var c;(c=this.mdcFoundation)==null||c.handleActionNavigation(n)})}}renderGraphic(){const i=this.filter?this.renderCheckMark():this.renderIcon();return N`<span class="mdc-evolution-chip__graphic">
      ${i}
    </span>`}renderCheckMark(){return N` <span class="mdc-evolution-chip__checkmark">
      <svg class="mdc-evolution-chip__checkmark-svg" viewBox="-2 -3 30 30">
        <path
          class="mdc-evolution-chip__checkmark-path"
          fill="none"
          d="M1.73,12.91 8.1,19.28 22.79,4.59"
        />
      </svg>
    </span>`}renderIcon(i=!1){return N` <span
      class="mdc-evolution-chip__icon mdc-evolution-chip__icon--${i?"trailing":"primary"}"
    >
      ${this.icon}
    </span>`}renderTrailing(){return N` <span
      class="mdc-evolution-chip__cell mdc-evolution-chip__cell--trailing"
      role="gridcell"
    >
      <button
        class="mdc-evolution-chip__action mdc-evolution-chip__action--trailing"
        type="button"
        tabindex="-1"
        data-mdc-deletable="true"
        aria-label="Remove ${this.label}"
      >
        <span
          class="mdc-evolution-chip__ripple mdc-evolution-chip__ripple--trailing"
        ></span>
        ${this.renderIcon(!0)}
      </button>
    </span>`}createAdapter(){return{...Rt(this.mdcRoot),emitEvent:(i,t)=>this.dispatchEvent(new CustomEvent(i,{bubbles:!0,detail:t})),getActions:()=>{const i=[];for(const[t]of this.actions)i.push(t);return i},getAttribute:i=>this.mdcRoot.getAttribute(i),getElementID:()=>this.mdcRoot.getAttribute("id")??"",getOffsetWidth:()=>this.mdcRoot.offsetWidth,hasClass:i=>this.mdcRoot.classList.contains(i),isActionSelectable:i=>{var t;return((t=this.actions.get(i))==null?void 0:t.isSelectable())??!0},isActionSelected:i=>{var t;return((t=this.actions.get(i))==null?void 0:t.isSelected())??!1},isActionFocusable:i=>{var t;return((t=this.actions.get(i))==null?void 0:t.isFocusable())??!0},isActionDisabled:i=>{var t;return((t=this.actions.get(i))==null?void 0:t.isDisabled())??!1},isRTL:()=>window.getComputedStyle(this.mdcRoot).getPropertyValue("direction")==="rtl",setActionDisabled:(i,t)=>{var e;return(e=this.actions.get(i))==null?void 0:e.setDisabled(t)},setActionFocus:(i,t)=>{var e;return(e=this.actions.get(i))==null?void 0:e.setFocus(t)},setActionSelected:(i,t)=>{var e;return(e=this.actions.get(i))==null?void 0:e.setSelected(t)},setStyleProperty:(i,t)=>this.mdcRoot.style.setProperty(i,t)}}getActions(){var i;return((i=this.mdcFoundation)==null?void 0:i.getActions())??[]}getElementID(){var i;return((i=this.mdcFoundation)==null?void 0:i.getElementID())??""}isActionFocusable(i){var t;return((t=this.mdcFoundation)==null?void 0:t.isActionFocusable(i))??!1}isActionSelectable(i){var t;return((t=this.mdcFoundation)==null?void 0:t.isActionSelectable(i))??!1}isActionSelected(i){var t;return((t=this.mdcFoundation)==null?void 0:t.isActionSelected(i))??!1}setActionFocus(i,t){var e;return(e=this.mdcFoundation)==null?void 0:e.setActionFocus(i,t)}setActionSelected(i,t){var e;return(e=this.mdcFoundation)==null?void 0:e.setActionSelected(i,t)}startAnimation(i){var t;return(t=this.mdcFoundation)==null?void 0:t.startAnimation(i)}}C([Nt(".mdc-evolution-chip")],E.prototype,"mdcRoot");C([y()],E.prototype,"label");C([y({type:String})],E.prototype,"icon");C([y({type:Boolean,reflect:!0})],E.prototype,"trailingIcon");C([y({type:Boolean,reflect:!0})],E.prototype,"avatar");C([y({type:Boolean,reflect:!0})],E.prototype,"disabled");C([y({type:Boolean,reflect:!0})],E.prototype,"filter");C([y()],E.prototype,"state");const jt='.mdc-evolution-chip,.mdc-evolution-chip__cell,.mdc-evolution-chip__action{display:inline-flex;align-items:center}.mdc-evolution-chip{position:relative;max-width:100%}.mdc-evolution-chip .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-evolution-chip__cell,.mdc-evolution-chip__action{height:100%}.mdc-evolution-chip__cell--primary{overflow-x:hidden}.mdc-evolution-chip__cell--trailing{flex:1 0 auto}.mdc-evolution-chip__action{align-items:center;background:none;border:none;box-sizing:content-box;cursor:pointer;display:inline-flex;justify-content:center;outline:none;padding:0;text-decoration:none;color:inherit}.mdc-evolution-chip__action--presentational{cursor:auto}.mdc-evolution-chip--disabled,.mdc-evolution-chip__action:disabled{pointer-events:none}.mdc-evolution-chip__action--primary{overflow-x:hidden}.mdc-evolution-chip__action--trailing{position:relative;overflow:visible}.mdc-evolution-chip__action--primary:before{box-sizing:border-box;content:"";height:100%;left:0;position:absolute;pointer-events:none;top:0;width:100%;z-index:1}.mdc-evolution-chip--touch{margin-top:8px;margin-bottom:8px}.mdc-evolution-chip__action-touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-evolution-chip__text-label{white-space:nowrap;-webkit-user-select:none;user-select:none;text-overflow:ellipsis;overflow:hidden}.mdc-evolution-chip__graphic{align-items:center;display:inline-flex;justify-content:center;overflow:hidden;pointer-events:none;position:relative;flex:1 0 auto}.mdc-evolution-chip__checkmark{position:absolute;opacity:0;top:50%;left:50%}.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic{width:0}.mdc-evolution-chip__checkmark-background{opacity:0}.mdc-evolution-chip__checkmark-svg{display:block}.mdc-evolution-chip__checkmark-path{stroke-width:2px;stroke-dasharray:29.7833385;stroke-dashoffset:29.7833385;stroke:currentColor}.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic{transition:width .15s 0ms cubic-bezier(.4,0,.2,1)}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark{transition:transform .15s 0ms cubic-bezier(.4,0,.2,1);transform:translate(-75%,-50%)}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path{transition:stroke-dashoffset .15s 45ms cubic-bezier(.4,0,.2,1)}.mdc-evolution-chip--deselecting .mdc-evolution-chip__graphic{transition:width .1s 0ms cubic-bezier(.4,0,.2,1)}.mdc-evolution-chip--deselecting .mdc-evolution-chip__checkmark{transition:opacity 50ms 0ms linear,transform .1s 0ms cubic-bezier(.4,0,.2,1);transform:translate(-75%,-50%)}.mdc-evolution-chip--deselecting .mdc-evolution-chip__checkmark-path{stroke-dashoffset:0}.mdc-evolution-chip--selecting-with-primary-icon .mdc-evolution-chip__icon--primary{transition:opacity 75ms 0ms cubic-bezier(.4,0,.2,1)}.mdc-evolution-chip--selecting-with-primary-icon .mdc-evolution-chip__checkmark-path{transition:stroke-dashoffset .15s 75ms cubic-bezier(.4,0,.2,1)}.mdc-evolution-chip--deselecting-with-primary-icon .mdc-evolution-chip__icon--primary{transition:opacity .15s 75ms cubic-bezier(.4,0,.2,1)}.mdc-evolution-chip--deselecting-with-primary-icon .mdc-evolution-chip__checkmark{transition:opacity 75ms 0ms cubic-bezier(.4,0,.2,1);transform:translate(-50%,-50%)}.mdc-evolution-chip--deselecting-with-primary-icon .mdc-evolution-chip__checkmark-path{stroke-dashoffset:0}.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary{opacity:0}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{transform:translate(-50%,-50%);opacity:1}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path{stroke-dashoffset:0}@keyframes mdc-evolution-chip-enter{0%{transform:scale(.8);opacity:.4}to{transform:scale(1);opacity:1}}.mdc-evolution-chip--enter{animation:mdc-evolution-chip-enter .1s 0ms cubic-bezier(0,0,.2,1)}@keyframes mdc-evolution-chip-exit{0%{opacity:1}to{opacity:0}}.mdc-evolution-chip--exit{animation:mdc-evolution-chip-exit 75ms 0ms cubic-bezier(.4,0,1,1)}.mdc-evolution-chip--hidden{opacity:0;pointer-events:none;transition:width .15s 0ms cubic-bezier(.4,0,1,1)}.mdc-evolution-chip{height:32px;border-radius:16px}.mdc-evolution-chip .mdc-evolution-chip__ripple{border-radius:16px}.mdc-evolution-chip .mdc-evolution-chip__action--primary:before{border-radius:16px}.mdc-evolution-chip .mdc-evolution-chip__icon--primary{border-radius:16px}.mdc-evolution-chip .mdc-evolution-chip__action--primary,[dir=rtl] .mdc-evolution-chip .mdc-evolution-chip__action--primary,.mdc-evolution-chip .mdc-evolution-chip__action--primary[dir=rtl]{padding-left:12px;padding-right:12px}.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic,[dir=rtl] .mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic,.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic[dir=rtl]{padding-left:6px;padding-right:6px}.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary,.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary[dir=rtl]{padding-left:12px;padding-right:0}.mdc-evolution-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing,[dir=rtl] .mdc-evolution-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing,.mdc-evolution-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing[dir=rtl]{padding-left:8px;padding-right:8px}.mdc-evolution-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__ripple--trailing{left:8px;right:initial}[dir=rtl] .mdc-evolution-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__ripple--trailing,.mdc-evolution-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__ripple--trailing[dir=rtl]{left:initial;right:8px}.mdc-evolution-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}[dir=rtl] .mdc-evolution-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary,.mdc-evolution-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary[dir=rtl]{padding-left:0;padding-right:12px}.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic,[dir=rtl] .mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic,.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic[dir=rtl]{padding-left:6px;padding-right:6px}.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing,[dir=rtl] .mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing,.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing[dir=rtl]{padding-left:8px;padding-right:8px}.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__ripple--trailing{left:8px;right:initial}[dir=rtl] .mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__ripple--trailing,.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__ripple--trailing[dir=rtl]{left:initial;right:8px}.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary,[dir=rtl] .mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary,.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary[dir=rtl]{padding-left:0;padding-right:0}.mdc-evolution-chip{background-color:#e0e0e0}.mdc-evolution-chip .mdc-evolution-chip__text-label,.mdc-evolution-chip .mdc-evolution-chip__icon--primary,.mdc-evolution-chip .mdc-evolution-chip__checkmark,.mdc-evolution-chip .mdc-evolution-chip__icon--trailing{color:#000000de}.mdc-evolution-chip .mdc-evolution-chip__text-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size, .875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, .0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit)}.mdc-evolution-chip.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--with-primary-icon){--mdc-chip-graphic-selected-width: 20px}.mdc-evolution-chip .mdc-evolution-chip__graphic,.mdc-evolution-chip .mdc-evolution-chip__icon--primary{height:20px;width:20px;font-size:20px}.mdc-evolution-chip .mdc-evolution-chip__checkmark{height:20px;width:20px}.mdc-evolution-chip .mdc-evolution-chip__icon--trailing{height:18px;width:18px;font-size:18px}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-evolution-chip.mdc-evolution-chip .mdc-evolution-chip__action--primary:before{border-color:CanvasText}.mdc-evolution-chip.mdc-evolution-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary:before{border-color:GrayText}.mdc-evolution-chip.mdc-evolution-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary:before{border-color:CanvasText}.mdc-evolution-chip.mdc-evolution-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary:before{border-color:GrayText}.mdc-evolution-chip.mdc-evolution-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label,.mdc-evolution-chip.mdc-evolution-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label,.mdc-evolution-chip.mdc-evolution-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary,.mdc-evolution-chip.mdc-evolution-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark,.mdc-evolution-chip.mdc-evolution-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{color:GrayText}.mdc-evolution-chip.mdc-evolution-chip.mdc-evolution-chip--disabled,.mdc-evolution-chip.mdc-evolution-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled{background-color:Canvas}}.mdc-evolution-chip .mdc-evolution-chip__focus-ring{display:none}.mdc-evolution-chip .mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational).mdc-ripple-upgraded--background-focused .mdc-evolution-chip__focus-ring,.mdc-evolution-chip .mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus .mdc-evolution-chip__focus-ring{z-index:1;display:block;pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}@media screen and (forced-colors: active){.mdc-evolution-chip .mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational).mdc-ripple-upgraded--background-focused .mdc-evolution-chip__focus-ring,.mdc-evolution-chip .mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus .mdc-evolution-chip__focus-ring{border-color:CanvasText}}.mdc-evolution-chip .mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational).mdc-ripple-upgraded--background-focused .mdc-evolution-chip__focus-ring:after,.mdc-evolution-chip .mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus .mdc-evolution-chip__focus-ring:after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-evolution-chip .mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational).mdc-ripple-upgraded--background-focused .mdc-evolution-chip__focus-ring:after,.mdc-evolution-chip .mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus .mdc-evolution-chip__focus-ring:after{border-color:CanvasText}}.mdc-evolution-chip .mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational).mdc-ripple-upgraded--background-focused .mdc-evolution-chip__focus-ring,.mdc-evolution-chip .mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus .mdc-evolution-chip__focus-ring{height:calc(100% + 4px);width:calc(100% + 4px)}.mdc-evolution-chip .mdc-evolution-chip__action--trailing:not(.mdc-evolution-chip__action--presentational).mdc-ripple-upgraded--background-focused .mdc-evolution-chip__focus-ring,.mdc-evolution-chip .mdc-evolution-chip__action--trailing:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus .mdc-evolution-chip__focus-ring{z-index:1;display:block;pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}@media screen and (forced-colors: active){.mdc-evolution-chip .mdc-evolution-chip__action--trailing:not(.mdc-evolution-chip__action--presentational).mdc-ripple-upgraded--background-focused .mdc-evolution-chip__focus-ring,.mdc-evolution-chip .mdc-evolution-chip__action--trailing:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus .mdc-evolution-chip__focus-ring{border-color:CanvasText}}.mdc-evolution-chip .mdc-evolution-chip__action--trailing:not(.mdc-evolution-chip__action--presentational).mdc-ripple-upgraded--background-focused .mdc-evolution-chip__focus-ring:after,.mdc-evolution-chip .mdc-evolution-chip__action--trailing:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus .mdc-evolution-chip__focus-ring:after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-evolution-chip .mdc-evolution-chip__action--trailing:not(.mdc-evolution-chip__action--presentational).mdc-ripple-upgraded--background-focused .mdc-evolution-chip__focus-ring:after,.mdc-evolution-chip .mdc-evolution-chip__action--trailing:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus .mdc-evolution-chip__focus-ring:after{border-color:CanvasText}}.mdc-evolution-chip .mdc-evolution-chip__action--trailing:not(.mdc-evolution-chip__action--presentational).mdc-ripple-upgraded--background-focused .mdc-evolution-chip__focus-ring,.mdc-evolution-chip .mdc-evolution-chip__action--trailing:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus .mdc-evolution-chip__focus-ring{height:calc(100% + 4px);width:calc(100% - 4px)}.mdc-evolution-chip--filter.mdc-evolution-chip--selected{background-color:#cecece}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic,.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic[dir=rtl]{padding-left:8px;padding-right:4px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary,.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary[dir=rtl]{padding-left:12px;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic,.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic[dir=rtl]{padding-left:8px;padding-right:4px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing,[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing,.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing[dir=rtl]{padding-left:8px;padding-right:8px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__ripple--trailing{left:8px;right:initial}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__ripple--trailing,.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__ripple--trailing[dir=rtl]{left:initial;right:8px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary,[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary,.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary[dir=rtl]{padding-left:0;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--with-primary-icon){--mdc-chip-graphic-selected-width: 24px}.mdc-evolution-chip--with-avatar .mdc-evolution-chip__graphic,.mdc-evolution-chip--with-avatar .mdc-evolution-chip__icon--primary{height:24px;width:24px;font-size:24px}.mdc-evolution-chip__action--primary .mdc-evolution-chip__ripple:before,.mdc-evolution-chip__action--primary .mdc-evolution-chip__ripple:after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-evolution-chip__action--primary:hover .mdc-evolution-chip__ripple:before,.mdc-evolution-chip__action--primary.mdc-ripple-surface--hover .mdc-evolution-chip__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.mdc-evolution-chip__action--primary.mdc-ripple-upgraded--background-focused .mdc-evolution-chip__ripple:before,.mdc-evolution-chip__action--primary:not(.mdc-ripple-upgraded):focus .mdc-evolution-chip__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-evolution-chip__action--primary:not(.mdc-ripple-upgraded) .mdc-evolution-chip__ripple:after{transition:opacity .15s linear}.mdc-evolution-chip__action--primary:not(.mdc-ripple-upgraded):active .mdc-evolution-chip__ripple:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-evolution-chip__action--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, .12)}.mdc-evolution-chip__action--trailing .mdc-evolution-chip__ripple:before,.mdc-evolution-chip__action--trailing .mdc-evolution-chip__ripple:after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-evolution-chip__action--trailing:hover .mdc-evolution-chip__ripple:before,.mdc-evolution-chip__action--trailing.mdc-ripple-surface--hover .mdc-evolution-chip__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.mdc-evolution-chip__action--trailing.mdc-ripple-upgraded--background-focused .mdc-evolution-chip__ripple:before,.mdc-evolution-chip__action--trailing:not(.mdc-ripple-upgraded):focus .mdc-evolution-chip__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-evolution-chip__action--trailing:not(.mdc-ripple-upgraded) .mdc-evolution-chip__ripple:after{transition:opacity .15s linear}.mdc-evolution-chip__action--trailing:not(.mdc-ripple-upgraded):active .mdc-evolution-chip__ripple:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-evolution-chip__action--trailing.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, .12)}.mdc-evolution-chip__ripple--trailing{height:18px;width:18px}.mdc-evolution-chip__action{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-evolution-chip__action .mdc-evolution-chip__ripple:before,.mdc-evolution-chip__action .mdc-evolution-chip__ripple:after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-evolution-chip__action .mdc-evolution-chip__ripple:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-evolution-chip__action .mdc-evolution-chip__ripple:after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-evolution-chip__action.mdc-ripple-upgraded .mdc-evolution-chip__ripple:before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-evolution-chip__action.mdc-ripple-upgraded .mdc-evolution-chip__ripple:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-evolution-chip__action.mdc-ripple-upgraded--unbounded .mdc-evolution-chip__ripple:after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-evolution-chip__action.mdc-ripple-upgraded--foreground-activation .mdc-evolution-chip__ripple:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-evolution-chip__action.mdc-ripple-upgraded--foreground-deactivation .mdc-evolution-chip__ripple:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-evolution-chip__action .mdc-evolution-chip__ripple:before,.mdc-evolution-chip__action .mdc-evolution-chip__ripple:after{top:-50%;left:-50%;width:200%;height:200%}.mdc-evolution-chip__action.mdc-ripple-upgraded .mdc-evolution-chip__ripple:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-evolution-chip__ripple{position:absolute;box-sizing:content-box;overflow:hidden;pointer-events:none}.mdc-evolution-chip__ripple--primary{height:100%;width:100%;top:0;left:0}.mdc-evolution-chip__ripple--trailing{top:50%;transform:translateY(-50%)}.mdc-evolution-chip{height:calc(32px + var(--cv-density-mode, 0) * var(--cv-density-interval, 4px));background-color:var(--cv-theme-surface-container)}.mdc-evolution-chip.mdc-evolution-chip--with-avatar .mdc-evolution-chip__graphic{line-height:24px}.mdc-evolution-chip .mdc-evolution-chip__graphic{line-height:20px}.mdc-evolution-chip .mdc-evolution-chip__text-label{color:var(--cv-theme-on-surface)}.mdc-evolution-chip .mdc-evolution-chip__icon{font-family:var(--mdc-icon-font, "Material Symbols Rounded");color:var(--cv-theme-on-surface)}.mdc-evolution-chip .mdc-evolution-chip__icon--trailing{line-height:18px}.mdc-evolution-chip .mdc-evolution-chip__checkmark-path{stroke:var(--mdc-theme-text-icon-on-background)}.mdc-evolution-chip.mdc-evolution-chip--selected{background-color:var(--cv-theme-secondary-container);color:var(--cv-theme-on-secondary-container)}.mdc-evolution-chip.positive{--cv-theme-surface-container: var(--cv-theme-positive-container);--cv-theme-on-surface-container: var(--cv-theme-on-positive-container)}.mdc-evolution-chip.negative{--cv-theme-surface-container: var(--cv-theme-negative-container);--cv-theme-on-surface-container: var(--cv-theme-on-negative-container)}.mdc-evolution-chip.caution{--cv-theme-surface-container: var(--cv-theme-caution-container);--cv-theme-on-surface-container: var(--cv-theme-on-caution-container)}.mdc-evolution-chip.secondary{--cv-theme-surface-container: var(--cv-theme-secondary-container);--cv-theme-on-surface-container: var(--cv-theme-on-secondary-container)}';var Vt=Object.getOwnPropertyDescriptor,qt=(o,i,t,e)=>{for(var n=e>1?void 0:e?Vt(i,t):i,c=o.length-1,r;c>=0;c--)(r=o[c])&&(n=r(n)||n);return n};let X=class extends E{};X.styles=[wt`
      ${xt(jt)}
    `];X=qt([Tt("cv-chip")],X);/**
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
 */var V;(function(o){o.ARIA_MULTISELECTABLE="aria-multiselectable"})(V||(V={}));var ct;(function(o){o.CHIP="mdc-evolution-chip"})(ct||(ct={}));var S;(function(o){o.INTERACTION="MDCChipSet:interaction",o.REMOVAL="MDCChipSet:removal",o.SELECTION="MDCChipSet:selection"})(S||(S={}));/**
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
 */var T;(function(o){o[o.INCREMENT=0]="INCREMENT",o[o.DECREMENT=1]="DECREMENT"})(T||(T={}));var Jt=function(o){D(i,o);function i(t){return o.call(this,I(I({},i.defaultAdapter),t))||this}return Object.defineProperty(i,"defaultAdapter",{get:function(){return{announceMessage:function(){},emitEvent:function(){},getAttribute:function(){return null},getChipActionsAtIndex:function(){return[]},getChipCount:function(){return 0},getChipIdAtIndex:function(){return""},getChipIndexById:function(){return 0},isChipFocusableAtIndex:function(){return!1},isChipSelectableAtIndex:function(){return!1},isChipSelectedAtIndex:function(){return!1},removeChipAtIndex:function(){},setChipFocusAtIndex:function(){},setChipSelectedAtIndex:function(){},startChipAnimationAtIndex:function(){}}},enumerable:!1,configurable:!0}),i.prototype.handleChipAnimation=function(t){var e=t.detail,n=e.chipID,c=e.animation,r=e.isComplete,p=e.addedAnnouncement,a=e.removedAnnouncement,l=this.adapter.getChipIndexById(n);if(c===g.EXIT&&r){a&&this.adapter.announceMessage(a),this.removeAfterAnimation(l,n);return}if(c===g.ENTER&&r&&p){this.adapter.announceMessage(p);return}},i.prototype.handleChipInteraction=function(t){var e=t.detail,n=e.source,c=e.chipID,r=e.isSelectable,p=e.isSelected,a=e.shouldRemove,l=this.adapter.getChipIndexById(c);if(a){this.removeChip(l);return}this.focusChip(l,n,_.FOCUSABLE),this.adapter.emitEvent(S.INTERACTION,{chipIndex:l,chipID:c}),r&&this.setSelection(l,n,!p)},i.prototype.handleChipNavigation=function(t){var e=t.detail,n=e.chipID,c=e.key,r=e.isRTL,p=e.source,a=this.adapter.getChipIndexById(n),l=c===h.ARROW_RIGHT&&!r||c===h.ARROW_LEFT&&r;if(l){this.focusNextChipFrom(a+1);return}var s=c===h.ARROW_LEFT&&!r||c===h.ARROW_RIGHT&&r;if(s){this.focusPrevChipFrom(a-1);return}if(c===h.ARROW_DOWN){this.focusNextChipFrom(a+1,p);return}if(c===h.ARROW_UP){this.focusPrevChipFrom(a-1,p);return}if(c===h.HOME){this.focusNextChipFrom(0,p);return}if(c===h.END){this.focusPrevChipFrom(this.adapter.getChipCount()-1,p);return}},i.prototype.getSelectedChipIndexes=function(){for(var t,e,n=new Set,c=this.adapter.getChipCount(),r=0;r<c;r++){var p=this.adapter.getChipActionsAtIndex(r);try{for(var a=(t=void 0,x(p)),l=a.next();!l.done;l=a.next()){var s=l.value;this.adapter.isChipSelectedAtIndex(r,s)&&n.add(r)}}catch(u){t={error:u}}finally{try{l&&!l.done&&(e=a.return)&&e.call(a)}finally{if(t)throw t.error}}}return n},i.prototype.setChipSelected=function(t,e,n){this.adapter.isChipSelectableAtIndex(t,e)&&this.setSelection(t,e,n)},i.prototype.isChipSelected=function(t,e){return this.adapter.isChipSelectedAtIndex(t,e)},i.prototype.removeChip=function(t){t>=this.adapter.getChipCount()||t<0||(this.adapter.startChipAnimationAtIndex(t,g.EXIT),this.adapter.emitEvent(S.REMOVAL,{chipID:this.adapter.getChipIdAtIndex(t),chipIndex:t,isComplete:!1}))},i.prototype.addChip=function(t){t>=this.adapter.getChipCount()||t<0||this.adapter.startChipAnimationAtIndex(t,g.ENTER)},i.prototype.focusNextChipFrom=function(t,e){for(var n=this.adapter.getChipCount(),c=t;c<n;c++){var r=this.getFocusableAction(c,T.INCREMENT,e);if(r){this.focusChip(c,r,_.FOCUSABLE_AND_FOCUSED);return}}},i.prototype.focusPrevChipFrom=function(t,e){for(var n=t;n>-1;n--){var c=this.getFocusableAction(n,T.DECREMENT,e);if(c){this.focusChip(n,c,_.FOCUSABLE_AND_FOCUSED);return}}},i.prototype.getFocusableAction=function(t,e,n){var c=this.adapter.getChipActionsAtIndex(t);return e===T.DECREMENT&&c.reverse(),n?this.getMatchingFocusableAction(t,c,n):this.getFirstFocusableAction(t,c)},i.prototype.getFirstFocusableAction=function(t,e){var n,c;try{for(var r=x(e),p=r.next();!p.done;p=r.next()){var a=p.value;if(this.adapter.isChipFocusableAtIndex(t,a))return a}}catch(l){n={error:l}}finally{try{p&&!p.done&&(c=r.return)&&c.call(r)}finally{if(n)throw n.error}}return null},i.prototype.getMatchingFocusableAction=function(t,e,n){var c,r,p=null;try{for(var a=x(e),l=a.next();!l.done;l=a.next()){var s=l.value;if(this.adapter.isChipFocusableAtIndex(t,s)&&(p=s),p===n)return p}}catch(u){c={error:u}}finally{try{l&&!l.done&&(r=a.return)&&r.call(a)}finally{if(c)throw c.error}}return p},i.prototype.focusChip=function(t,e,n){var c,r;this.adapter.setChipFocusAtIndex(t,e,n);for(var p=this.adapter.getChipCount(),a=0;a<p;a++){var l=this.adapter.getChipActionsAtIndex(a);try{for(var s=(c=void 0,x(l)),u=s.next();!u.done;u=s.next()){var L=u.value;L===e&&a===t||this.adapter.setChipFocusAtIndex(a,L,_.NOT_FOCUSABLE)}}catch(j){c={error:j}}finally{try{u&&!u.done&&(r=s.return)&&r.call(s)}finally{if(c)throw c.error}}}},i.prototype.supportsMultiSelect=function(){return this.adapter.getAttribute(V.ARIA_MULTISELECTABLE)==="true"},i.prototype.setSelection=function(t,e,n){var c,r;if(this.adapter.setChipSelectedAtIndex(t,e,n),this.adapter.emitEvent(S.SELECTION,{chipID:this.adapter.getChipIdAtIndex(t),chipIndex:t,isSelected:n}),!this.supportsMultiSelect())for(var p=this.adapter.getChipCount(),a=0;a<p;a++){var l=this.adapter.getChipActionsAtIndex(a);try{for(var s=(c=void 0,x(l)),u=s.next();!u.done;u=s.next()){var L=u.value;L===e&&a===t||this.adapter.setChipSelectedAtIndex(a,L,!1)}}catch(j){c={error:j}}finally{try{u&&!u.done&&(r=s.return)&&r.call(s)}finally{if(c)throw c.error}}}},i.prototype.removeAfterAnimation=function(t,e){this.adapter.removeChipAtIndex(t),this.adapter.emitEvent(S.REMOVAL,{chipIndex:t,isComplete:!0,chipID:e});var n=this.adapter.getChipCount();n<=0||this.focusNearestFocusableAction(t)},i.prototype.focusNearestFocusableAction=function(t){for(var e=this.adapter.getChipCount(),n=t,c=t;n>-1||c<e;){var r=this.getNearestFocusableAction(n,c,v.TRAILING);if(r){this.focusChip(r.index,r.action,_.FOCUSABLE_AND_FOCUSED);return}n--,c++}},i.prototype.getNearestFocusableAction=function(t,e,n){var c=this.getFocusableAction(t,T.DECREMENT,n);if(c)return{index:t,action:c};if(e===t)return null;var r=this.getFocusableAction(e,T.INCREMENT,n);return r?{index:e,action:r}:null},i}(Q);/**
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
 */var q;(function(o){o.POLITE="polite",o.ASSERTIVE="assertive"})(q||(q={}));var Qt="data-mdc-dom-announce";function Zt(o,i){ti.getInstance().say(o,i)}var ti=function(){function o(){this.liveRegions=new Map}return o.getInstance=function(){return o.instance||(o.instance=new o),o.instance},o.prototype.say=function(i,t){var e,n,c=(e=t==null?void 0:t.priority)!==null&&e!==void 0?e:q.POLITE,r=(n=t==null?void 0:t.ownerDocument)!==null&&n!==void 0?n:document,p=this.getLiveRegion(c,r);p.textContent="",setTimeout(function(){p.textContent=i,r.addEventListener("click",a)},1);function a(){p.textContent="",r.removeEventListener("click",a)}},o.prototype.getLiveRegion=function(i,t){var e=this.liveRegions.get(t);e||(e=new Map,this.liveRegions.set(t,e));var n=e.get(i);if(n&&t.body.contains(n))return n;var c=this.createLiveRegion(i,t);return e.set(i,c),c},o.prototype.createLiveRegion=function(i,t){var e=t.createElement("div");return e.style.position="absolute",e.style.top="-9999px",e.style.left="-9999px",e.style.height="1px",e.style.overflow="hidden",e.setAttribute("aria-atomic","true"),e.setAttribute("aria-live",i),e.setAttribute(Qt,"true"),t.body.appendChild(e),e},o}(),ii=Object.defineProperty,z=(o,i,t,e)=>{for(var n=void 0,c=o.length-1,r;c>=0;c--)(r=o[c])&&(n=r(i,t,n)||n);return n&&ii(i,t,n),n};class F extends Ct{constructor(){super(...arguments),this.selectable=!1,this.multi=!1,this.label="",this.activeIndex=0,this._previousActiveIndex=-1,this.chips=[]}render(){return N`<span
      class="mdc-evolution-chip-set"
      role="${this.selectable||this.multi?"listbox":"grid"}"
      aria-label="${this.label}"
      aria-multiselectable="${this.multi}"
    >
      <span class="mdc-evolution-chip-set__chips" role="presentation">
        <slot></slot>
      </span>
    </span>`}async updated(i){super.updated(i),await this.updateComplete,this.activeIndex!=this._previousActiveIndex&&this.mdcFoundation.setChipSelected(this.activeIndex,v.PRIMARY,!0)}firstUpdated(i){var n;super.firstUpdated(i);const t=(n=this.shadowRoot)==null?void 0:n.querySelector("slot"),e=(t==null?void 0:t.assignedElements().filter(c=>c instanceof X))??[];for(let c=0;c<e.length;c++){const r=e[c];this.chips.push(r)}this.mdcFoundation!==void 0&&this.mdcFoundation.destroy(),this.mdcFoundation=new Jt(this.createAdapter()),this.mdcFoundation.init()}connectedCallback(){super.connectedCallback(),this.addEventListener(f.ANIMATION,this._handleChipAnimation),this.addEventListener(f.INTERACTION,this._handleChipInteraction),this.addEventListener(f.NAVIGATION,this._handleChipNavigation)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(f.ANIMATION,this._handleChipAnimation),this.removeEventListener(f.INTERACTION,this._handleChipInteraction),this.removeEventListener(f.NAVIGATION,this._handleChipNavigation)}createAdapter(){return{announceMessage:Zt,emitEvent:(i,t)=>this.dispatchEvent(new CustomEvent(i,{bubbles:!0,detail:t})),getAttribute:i=>this.mdcRoot.getAttribute(i),getChipActionsAtIndex:i=>this.chips[i].getActions(),getChipCount:()=>this.chips.length,getChipIdAtIndex:i=>this.chips[i].getElementID(),getChipIndexById:i=>this.chips.findIndex(t=>t.getElementID()===i),isChipFocusableAtIndex:(i,t)=>this.chips[i].isActionFocusable(t),isChipSelectableAtIndex:(i,t)=>this.chips[i].isActionSelectable(t),isChipSelectedAtIndex:(i,t)=>this.chips[i].isActionSelected(t),removeChipAtIndex:i=>this.chips[i].remove(),setChipFocusAtIndex:(i,t,e)=>this.chips[i].setActionFocus(t,e),setChipSelectedAtIndex:(i,t,e)=>this.chips[i].setActionSelected(t,e),startChipAnimationAtIndex:(i,t)=>this.chips[i].startAnimation(t)}}_handleChipAnimation(i){this.mdcFoundation.handleChipAnimation(i)}_handleChipInteraction(i){this.mdcFoundation.handleChipInteraction(i)}_handleChipNavigation(i){this.mdcFoundation.handleChipNavigation(i)}}z([Nt(".mdc-evolution-chip-set")],F.prototype,"mdcRoot");z([y({type:Boolean,reflect:!0})],F.prototype,"selectable");z([y({type:Boolean,reflect:!0})],F.prototype,"multi");z([y()],F.prototype,"label");z([y({type:Number})],F.prototype,"activeIndex");const ei=".mdc-evolution-chip-set{display:flex}.mdc-evolution-chip-set:focus{outline:none}.mdc-evolution-chip-set__chips{display:flex;flex-flow:wrap;min-width:0}.mdc-evolution-chip-set--overflow .mdc-evolution-chip-set__chips{flex-flow:nowrap}.mdc-evolution-chip-set .mdc-evolution-chip-set__chips{margin-left:-8px;margin-right:0}[dir=rtl] .mdc-evolution-chip-set .mdc-evolution-chip-set__chips,.mdc-evolution-chip-set .mdc-evolution-chip-set__chips[dir=rtl]{margin-left:0;margin-right:-8px}.mdc-evolution-chip-set .mdc-evolution-chip{margin-left:8px;margin-right:0}[dir=rtl] .mdc-evolution-chip-set .mdc-evolution-chip,.mdc-evolution-chip-set .mdc-evolution-chip[dir=rtl]{margin-left:0;margin-right:8px}.mdc-evolution-chip-set .mdc-evolution-chip{margin-top:4px;margin-bottom:4px}::slotted(cv-chip){margin-left:8px;margin-right:0}[dir=rtl] ::slotted(cv-chip),::slotted(cv-chip[dir=rtl]){margin-left:0;margin-right:8px}::slotted(cv-chip){margin-top:4px;margin-bottom:4px}";var oi=Object.getOwnPropertyDescriptor,ni=(o,i,t,e)=>{for(var n=e>1?void 0:e?oi(i,t):i,c=o.length-1,r;c>=0;c--)(r=o[c])&&(n=r(n)||n);return n};let J=class extends F{};J.styles=[wt`
      ${xt(ei)}
    `];J=ni([Tt("cv-chip-set")],J);const gi={title:"Components/Chips",args:{label:"Chip",icon:"houseboat",showIcon:!1,trailingIcon:!1,disabled:!1,avatar:!1},tags:["autodocs"]},Y=({avatar:o,label:i,disabled:t,icon:e,showIcon:n,state:c,trailingIcon:r})=>`<cv-chip-set label="test chips">
           <cv-chip
                label="${i}"
                ${n?`icon="${e}"`:""}
                ${n&&r?"trailingIcon":""}
                ${o?"avatar":""}
                ${c?`state="${c}"`:""}
                ${t?"disabled":""} ></cv-chip>
          </cv-chip-set>`,ci=({multiSelectable:o,label:i,disabled:t,state:e})=>`<cv-chip-set 
           label="test chips" 
           selectable
           activeIndex="0"
           ${o?"multi":""}>
            <cv-chip
                  label="${i}"
                  filter
                  ${e?`state="${e}"`:""}
                  ${t?"disabled":""} ></cv-chip>
            <cv-chip
                  label="${i} 2"
                  filter
                  ${e?`state="${e}"`:""}
                  ${t?"disabled":""} ></cv-chip>
          </cv-chip-set>`,H=Y.bind({}),$=Y.bind({});$.args={state:"secondary"};const P=Y.bind({});P.args={state:"caution"};const B=Y.bind({});B.args={state:"positive"};const M=Y.bind({});M.args={state:"negative"};const K=ci.bind({});K.args={showIcon:!0,multiSelectable:!1};var rt,at,pt;H.parameters={...H.parameters,docs:{...(rt=H.parameters)==null?void 0:rt.docs,source:{originalSource:`({
  avatar,
  label,
  disabled,
  icon,
  showIcon,
  state,
  trailingIcon
}) => {
  return \`<cv-chip-set label="test chips">
           <cv-chip
                label="\${label}"
                \${showIcon ? \`icon="\${icon}"\` : ''}
                \${showIcon && trailingIcon ? \`trailingIcon\` : ''}
                \${avatar ? 'avatar' : ''}
                \${state ? \`state="\${state}"\` : ''}
                \${disabled ? 'disabled' : ''} ></cv-chip>
          </cv-chip-set>\`;
}`,...(pt=(at=H.parameters)==null?void 0:at.docs)==null?void 0:pt.source}}};var lt,dt,st;$.parameters={...$.parameters,docs:{...(lt=$.parameters)==null?void 0:lt.docs,source:{originalSource:`({
  avatar,
  label,
  disabled,
  icon,
  showIcon,
  state,
  trailingIcon
}) => {
  return \`<cv-chip-set label="test chips">
           <cv-chip
                label="\${label}"
                \${showIcon ? \`icon="\${icon}"\` : ''}
                \${showIcon && trailingIcon ? \`trailingIcon\` : ''}
                \${avatar ? 'avatar' : ''}
                \${state ? \`state="\${state}"\` : ''}
                \${disabled ? 'disabled' : ''} ></cv-chip>
          </cv-chip-set>\`;
}`,...(st=(dt=$.parameters)==null?void 0:dt.docs)==null?void 0:st.source}}};var ht,ut,mt;P.parameters={...P.parameters,docs:{...(ht=P.parameters)==null?void 0:ht.docs,source:{originalSource:`({
  avatar,
  label,
  disabled,
  icon,
  showIcon,
  state,
  trailingIcon
}) => {
  return \`<cv-chip-set label="test chips">
           <cv-chip
                label="\${label}"
                \${showIcon ? \`icon="\${icon}"\` : ''}
                \${showIcon && trailingIcon ? \`trailingIcon\` : ''}
                \${avatar ? 'avatar' : ''}
                \${state ? \`state="\${state}"\` : ''}
                \${disabled ? 'disabled' : ''} ></cv-chip>
          </cv-chip-set>\`;
}`,...(mt=(ut=P.parameters)==null?void 0:ut.docs)==null?void 0:mt.source}}};var vt,ft,gt;B.parameters={...B.parameters,docs:{...(vt=B.parameters)==null?void 0:vt.docs,source:{originalSource:`({
  avatar,
  label,
  disabled,
  icon,
  showIcon,
  state,
  trailingIcon
}) => {
  return \`<cv-chip-set label="test chips">
           <cv-chip
                label="\${label}"
                \${showIcon ? \`icon="\${icon}"\` : ''}
                \${showIcon && trailingIcon ? \`trailingIcon\` : ''}
                \${avatar ? 'avatar' : ''}
                \${state ? \`state="\${state}"\` : ''}
                \${disabled ? 'disabled' : ''} ></cv-chip>
          </cv-chip-set>\`;
}`,...(gt=(ft=B.parameters)==null?void 0:ft.docs)==null?void 0:gt.source}}};var _t,yt,bt;M.parameters={...M.parameters,docs:{...(_t=M.parameters)==null?void 0:_t.docs,source:{originalSource:`({
  avatar,
  label,
  disabled,
  icon,
  showIcon,
  state,
  trailingIcon
}) => {
  return \`<cv-chip-set label="test chips">
           <cv-chip
                label="\${label}"
                \${showIcon ? \`icon="\${icon}"\` : ''}
                \${showIcon && trailingIcon ? \`trailingIcon\` : ''}
                \${avatar ? 'avatar' : ''}
                \${state ? \`state="\${state}"\` : ''}
                \${disabled ? 'disabled' : ''} ></cv-chip>
          </cv-chip-set>\`;
}`,...(bt=(yt=M.parameters)==null?void 0:yt.docs)==null?void 0:bt.source}}};var At,Et,It;K.parameters={...K.parameters,docs:{...(At=K.parameters)==null?void 0:At.docs,source:{originalSource:`({
  multiSelectable,
  label,
  disabled,
  state
}) => {
  return \`<cv-chip-set 
           label="test chips" 
           selectable
           activeIndex="0"
           \${multiSelectable ? 'multi' : ''}>
            <cv-chip
                  label="\${label}"
                  filter
                  \${state ? \`state="\${state}"\` : ''}
                  \${disabled ? 'disabled' : ''} ></cv-chip>
            <cv-chip
                  label="\${label} 2"
                  filter
                  \${state ? \`state="\${state}"\` : ''}
                  \${disabled ? 'disabled' : ''} ></cv-chip>
          </cv-chip-set>\`;
}`,...(It=(Et=K.parameters)==null?void 0:Et.docs)==null?void 0:It.source}}};const _i=["Basic","Secondary","Caution","Positive","Negative","Selectable"];export{H as Basic,P as Caution,M as Negative,B as Positive,$ as Secondary,K as Selectable,_i as __namedExportsOrder,gi as default};
