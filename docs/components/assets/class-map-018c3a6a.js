import{T as h}from"./query-assigned-elements-9f88bee1.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const a={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},d=e=>(...t)=>({_$litDirective$:e,values:t});class l{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,r){this._$Ct=t,this._$AM=s,this._$Ci=r}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u=d(class extends l{constructor(e){var t;if(super(e),e.type!==a.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var s,r;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!(!((s=this.nt)===null||s===void 0)&&s.has(i))&&this.it.add(i);return this.render(t)}const n=e.element.classList;this.it.forEach(i=>{i in t||(n.remove(i),this.it.delete(i))});for(const i in t){const o=!!t[i];o===this.it.has(i)||!((r=this.nt)===null||r===void 0)&&r.has(i)||(o?(n.add(i),this.it.add(i)):(n.remove(i),this.it.delete(i)))}return h}});export{d as e,l as i,u as o,a as t};
