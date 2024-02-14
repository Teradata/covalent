/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const v=n=>(s,b)=>{if(s.constructor._observers){if(!s.constructor.hasOwnProperty("_observers")){const r=s.constructor._observers;s.constructor._observers=new Map,r.forEach((e,c)=>s.constructor._observers.set(c,e))}}else{s.constructor._observers=new Map;const r=s.updated;s.updated=function(e){r.call(this,e),e.forEach((c,t)=>{const o=this.constructor._observers.get(t);o!==void 0&&o.call(this,this[t],c)})}}s.constructor._observers.set(b,n)};export{v as o};
