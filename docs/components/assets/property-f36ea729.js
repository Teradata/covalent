/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t=(e,i)=>i.kind==="method"&&i.descriptor&&!("value"in i.descriptor)?{...i,finisher(r){r.createProperty(i.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){typeof i.initializer=="function"&&(this[i.key]=i.initializer.call(this))},finisher(r){r.createProperty(i.key,e)}},n=(e,i,r)=>{i.constructor.createProperty(r,e)};function o(e){return(i,r)=>r!==void 0?n(e,i,r):t(e,i)}export{o as n};
//# sourceMappingURL=property-f36ea729.js.map
