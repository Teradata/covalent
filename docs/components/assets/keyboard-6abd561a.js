/**
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
 */var P=function(){function R(){this.rafIDs=new Map}return R.prototype.request=function(A,r){var d=this;this.cancel(A);var s=requestAnimationFrame(function(O){d.rafIDs.delete(A),r(O)});this.rafIDs.set(A,s)},R.prototype.cancel=function(A){var r=this.rafIDs.get(A);r&&(cancelAnimationFrame(r),this.rafIDs.delete(A))},R.prototype.cancelAll=function(){var A=this;this.rafIDs.forEach(function(r,d){A.cancel(d)})},R.prototype.getQueue=function(){var A=[];return this.rafIDs.forEach(function(r,d){A.push(d)}),A},R}();/**
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
 */var E={UNKNOWN:"Unknown",BACKSPACE:"Backspace",ENTER:"Enter",SPACEBAR:"Spacebar",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",END:"End",HOME:"Home",ARROW_LEFT:"ArrowLeft",ARROW_UP:"ArrowUp",ARROW_RIGHT:"ArrowRight",ARROW_DOWN:"ArrowDown",DELETE:"Delete",ESCAPE:"Escape",TAB:"Tab"},a=new Set;a.add(E.BACKSPACE);a.add(E.ENTER);a.add(E.SPACEBAR);a.add(E.PAGE_UP);a.add(E.PAGE_DOWN);a.add(E.END);a.add(E.HOME);a.add(E.ARROW_LEFT);a.add(E.ARROW_UP);a.add(E.ARROW_RIGHT);a.add(E.ARROW_DOWN);a.add(E.DELETE);a.add(E.ESCAPE);a.add(E.TAB);var t={BACKSPACE:8,ENTER:13,SPACEBAR:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ESCAPE:27,TAB:9},e=new Map;e.set(t.BACKSPACE,E.BACKSPACE);e.set(t.ENTER,E.ENTER);e.set(t.SPACEBAR,E.SPACEBAR);e.set(t.PAGE_UP,E.PAGE_UP);e.set(t.PAGE_DOWN,E.PAGE_DOWN);e.set(t.END,E.END);e.set(t.HOME,E.HOME);e.set(t.ARROW_LEFT,E.ARROW_LEFT);e.set(t.ARROW_UP,E.ARROW_UP);e.set(t.ARROW_RIGHT,E.ARROW_RIGHT);e.set(t.ARROW_DOWN,E.ARROW_DOWN);e.set(t.DELETE,E.DELETE);e.set(t.ESCAPE,E.ESCAPE);e.set(t.TAB,E.TAB);var n=new Set;n.add(E.PAGE_UP);n.add(E.PAGE_DOWN);n.add(E.END);n.add(E.HOME);n.add(E.ARROW_LEFT);n.add(E.ARROW_UP);n.add(E.ARROW_RIGHT);n.add(E.ARROW_DOWN);function i(R){var A=R.key;if(a.has(A))return A;var r=e.get(R.keyCode);return r||E.UNKNOWN}function _(R){return n.has(i(R))}export{P as A,E as K,_ as i,i as n};
