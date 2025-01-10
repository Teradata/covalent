import{s as t}from"./query-assigned-elements-DrVEbY-Z.js";import"./utils-DQt7ZoY7.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class d extends t{click(){if(this.mdcRoot){this.mdcRoot.focus(),this.mdcRoot.click();return}super.click()}createFoundation(){this.mdcFoundation!==void 0&&this.mdcFoundation.destroy(),this.mdcFoundationClass&&(this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init())}firstUpdated(){this.createFoundation()}}export{d as B};
