"use strict";(self.webpackChunkdocs_app=self.webpackChunkdocs_app||[]).push([[6913],{46913:(tt,u,r)=>{r.r(u),r.d(u,{MarkdownNavigatorDemoModule:()=>q});var C=r(60177),l=r(25667),v=r(74710),t=r(54438),M=r(56214),N=r(92402),d=r(68941);let b=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275cmp=t.VBU({type:e,selectors:[["ng-component"]],decls:2,vars:2,template:function(o,n){1&o&&(t.j41(0,"p"),t.EFF(1,"Global footer"),t.k0s()),2&o&&t.xc7("padding",1,"em")},encapsulation:2})}return e})(),S=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275cmp=t.VBU({type:e,selectors:[["ng-component"]],decls:2,vars:2,template:function(o,n){1&o&&(t.j41(0,"p"),t.EFF(1,"Item footer"),t.k0s()),2&o&&t.xc7("padding",1,"em")},encapsulation:2})}return e})(),D=(()=>{class e{items=[{title:"Item Footer",markdownString:"Uses footer set at item level",footer:S},{title:"Global footer",markdownString:"Falls back to footer set at the top level"}];footer=b;static \u0275fac=function(o){return new(o||e)};static \u0275cmp=t.VBU({type:e,selectors:[["markdown-navigator-demo-footer"]],decls:1,vars:4,consts:[[3,"items","footer"]],template:function(o,n){1&o&&t.nrm(0,"td-markdown-navigator",0),2&o&&(t.xc7("height",300,"px"),t.Y8G("items",n.items)("footer",n.footer))},dependencies:[d.Y]})}return e})();var y=r(21413),F=r(56977),k=r(95416),s=r(88834);let A=(()=>{class e{_markdownNavigatorWindowService;_snackBar;_destroy$=new y.B;constructor(a,o){this._markdownNavigatorWindowService=a,this._snackBar=o}ngOnDestroy(){this._destroy$.next()}open(){this._markdownNavigatorWindowService.open({items:[{markdownString:'[Trigger button click event](#data={"planet":"mars"})'}]}).componentInstance.buttonClicked.pipe((0,F.Q)(this._destroy$)).subscribe(o=>this._snackBar.open(`Button clicked: ${JSON.stringify(o)}`,void 0,{duration:2e3}))}static \u0275fac=function(o){return new(o||e)(t.rXU(l.A3),t.rXU(k.UG))};static \u0275cmp=t.VBU({type:e,selectors:[["markdown-navigator-demo-service-button-clicked"]],decls:2,vars:0,consts:[["mat-raised-button","",3,"click"]],template:function(o,n){1&o&&(t.j41(0,"button",0),t.bIt("click",function(){return n.open()}),t.EFF(1,"Open"),t.k0s())},dependencies:[s.$z]})}return e})(),T=(()=>{class e{items=[{title:"Url children demo",childrenUrl:"assets/demos-data/children_url_1.json"}];static \u0275fac=function(o){return new(o||e)};static \u0275cmp=t.VBU({type:e,selectors:[["markdown-navigator-demo-children-url"]],decls:1,vars:1,consts:[[3,"items"]],template:function(o,n){1&o&&t.nrm(0,"td-markdown-navigator",0),2&o&&t.Y8G("items",n.items)},dependencies:[d.Y]})}return e})(),B=(()=>{class e{_snackBar;items=[{markdownString:'[Trigger button click event](#data={"planet":"mars"})'}];constructor(a){this._snackBar=a}handleButtonClicked(a){this._snackBar.open(`Button clicked: ${JSON.stringify(a)}`,void 0,{duration:2e3})}static \u0275fac=function(o){return new(o||e)(t.rXU(k.UG))};static \u0275cmp=t.VBU({type:e,selectors:[["markdown-navigator-demo-button-clicked"]],decls:1,vars:3,consts:[[3,"buttonClicked","items"]],template:function(o,n){1&o&&(t.j41(0,"td-markdown-navigator",0),t.bIt("buttonClicked",function(i){return n.handleButtonClicked(i)}),t.k0s()),2&o&&(t.xc7("height",200,"px"),t.Y8G("items",n.items))},dependencies:[d.Y]})}return e})();var I=r(50549);const j=()=>({markdownString:"Directive demo"}),U=e=>[e],G=e=>({items:e});let _=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275cmp=t.VBU({type:e,selectors:[["markdown-navigator-demo-directive"]],decls:2,vars:7,consts:[["mat-raised-button","",3,"tdMarkdownNavigatorWindow","disabled"]],template:function(o,n){1&o&&(t.j41(0,"button",0),t.EFF(1," Open\n"),t.k0s()),2&o&&t.Y8G("tdMarkdownNavigatorWindow",t.eq3(5,G,t.eq3(3,U,t.lJ4(2,j))))("disabled",!1)},dependencies:[I.q,s.$z]})}return e})(),Y=(()=>{class e{_markdownNavigatorWindowService;constructor(a){this._markdownNavigatorWindowService=a}open(){this._markdownNavigatorWindowService.open({items:[{title:"Mars",markdownString:'[Go to Mars](#data={"planet":"mars"})'},{title:"Jupiter",markdownString:'[Go to Jupiter](#data={"planet":"Jupiter"})'},{title:"Covalent Browser Support",url:"https://github.com/Teradata/covalent/blob/main/README.md",anchor:"browser-support"},{id:"child_id",title:"Children",childrenUrl:"assets/demos-data/children_url_1.json"}],dialogConfig:{width:"300px",height:"300px"},startAt:[{id:"child_id"},{id:"child-1"}]})}static \u0275fac=function(o){return new(o||e)(t.rXU(l.A3))};static \u0275cmp=t.VBU({type:e,selectors:[["markdown-navigator-demo-service"]],decls:2,vars:0,consts:[["mat-raised-button","",3,"click"]],template:function(o,n){1&o&&(t.j41(0,"button",0),t.bIt("click",function(){return n.open()}),t.EFF(1,"Open"),t.k0s())},dependencies:[s.$z]})}return e})();var p=r(65571),c=r(89417);function E(e,g){return e.title===g.title}let O=(()=>{class e{items=[{title:"Item A",id:"A",children:[{title:"Item A1",id:"A1"},{title:"Item A2",id:"A2"},{title:"Item A3",id:"A3"}]}];startAt;compareWith;selection;handleChange(){switch(this.selection){case"reference":this.startAt={id:"A1"},this.compareWith=void 0;break;case"id":this.startAt={id:"A2"},this.compareWith=void 0;break;case"custom":this.startAt={title:"Item A3"},this.compareWith=E}}static \u0275fac=function(o){return new(o||e)};static \u0275cmp=t.VBU({type:e,selectors:[["markdown-navigator-demo-start-at"]],decls:10,vars:6,consts:[[3,"change","ngModelChange","ngModel"],["value","reference"],["value","id"],["value","custom"],[3,"items","startAt","compareWith"]],template:function(o,n){1&o&&(t.j41(0,"span"),t.EFF(1,"Start at descendant:"),t.k0s(),t.j41(2,"mat-button-toggle-group",0),t.bIt("change",function(){return n.handleChange()}),t.mxI("ngModelChange",function(i){return t.DH7(n.selection,i)||(n.selection=i),i}),t.j41(3,"mat-button-toggle",1),t.EFF(4,"A1"),t.k0s(),t.j41(5,"mat-button-toggle",2),t.EFF(6,"A2"),t.k0s(),t.j41(7,"mat-button-toggle",3),t.EFF(8,"A3"),t.k0s()(),t.nrm(9,"td-markdown-navigator",4)),2&o&&(t.R7$(2),t.R50("ngModel",n.selection),t.R7$(7),t.xc7("height",200,"px"),t.Y8G("items",n.items)("startAt",n.startAt)("compareWith",n.compareWith))},dependencies:[d.Y,p.ec,p.pc,c.BC,c.vS],styles:["span[_ngcontent-%COMP%]{margin-right:1em}"]})}return e})(),R=(()=>{class e{items=[{title:"Covalent Browser Support",url:"https://github.com/teradata/covalent/blob/main/README.md",anchor:"browser-support"},{title:"Angular Commit Message Format",url:"https://github.com/angular/angular/blob/main/CONTRIBUTING.md",anchor:"commit-message-format"}];static \u0275fac=function(o){return new(o||e)};static \u0275cmp=t.VBU({type:e,selectors:[["markdown-navigator-demo-anchor"]],decls:1,vars:3,consts:[[3,"items"]],template:function(o,n){1&o&&t.nrm(0,"td-markdown-navigator",0),2&o&&(t.xc7("height",300,"px"),t.Y8G("items",n.items))},dependencies:[d.Y]})}return e})();var W=r(85233),w=r(30450);const x=()=>({enabled:!1}),$=e=>({minimap:e});function h(e){return JSON.stringify(e,void 0,4)}const f=[{title:"Item 1",markdownString:"wow"},{title:"Item 2",markdownString:"wow"}];let V=(()=>{class e{_markdownNavigatorWindowService;input=h(f);items=f;windowShouldOpen=!1;constructor(a){this._markdownNavigatorWindowService=a}applyInput(){this.items=JSON.parse(this.input),this.input=h(this.items),this.openOrClose()}openOrClose(){this.windowShouldOpen?this._markdownNavigatorWindowService.open({items:this.items}):this._markdownNavigatorWindowService.close()}static \u0275fac=function(o){return new(o||e)(t.rXU(l.A3))};static \u0275cmp=t.VBU({type:e,selectors:[["markdown-navigator-demo-editor"]],decls:10,vars:14,consts:[["layout","row","layout-xs","column"],["flex","50","flex-xs","100"],["flex","",3,"ngModelChange","language","ngModel","editorOptions"],["layout","row","layout-align","space-between center"],[3,"ngModelChange","change","ngModel"],["mat-raised-button","",3,"click"],["flex","50","flex-xs","100",2,"margin-left","16px"],[3,"items"]],template:function(o,n){1&o&&(t.j41(0,"div",0)(1,"div",1)(2,"td-code-editor",2),t.mxI("ngModelChange",function(i){return t.DH7(n.input,i)||(n.input=i),i}),t.k0s(),t.j41(3,"div",3)(4,"mat-slide-toggle",4),t.mxI("ngModelChange",function(i){return t.DH7(n.windowShouldOpen,i)||(n.windowShouldOpen=i),i}),t.bIt("change",function(){return n.openOrClose()}),t.EFF(5,"Open window"),t.k0s(),t.j41(6,"button",5),t.bIt("click",function(){return n.applyInput()}),t.EFF(7,"Apply"),t.k0s()()(),t.j41(8,"div",6),t.nrm(9,"td-markdown-navigator",7),t.k0s()()),2&o&&(t.R7$(2),t.xc7("height",300,"px")("margin-bottom",16,"px"),t.Y8G("language","json"),t.R50("ngModel",n.input),t.Y8G("editorOptions",t.eq3(12,$,t.lJ4(11,x))),t.R7$(2),t.R50("ngModel",n.windowShouldOpen),t.R7$(5),t.xc7("height",300,"px"),t.Y8G("items",n.items))},dependencies:[d.Y,W.A1,s.$z,w.sG,c.BC,c.vS]})}return e})(),J=(()=>{class e{startAt=[{id:"url-children-demo"},{id:"child-2"},{id:"grandchild-2"}];items=[{id:"url-children-demo",title:"Url children demo",childrenUrl:"assets/demos-data/children_url_1.json"}];static \u0275fac=function(o){return new(o||e)};static \u0275cmp=t.VBU({type:e,selectors:[["markdown-navigator-demo-children-url-start-at"]],decls:1,vars:2,consts:[[3,"items","startAt"]],template:function(o,n){1&o&&t.nrm(0,"td-markdown-navigator",0),2&o&&t.Y8G("items",n.items)("startAt",n.startAt)},dependencies:[d.Y]})}return e})();function X(e,g){return e.title===g.title}let z=(()=>{class e{items=[{id:"external_obj_store",title:"External Object Store",childrenUrl:"https://www.teradata.com/product-help/UseCases/use_cases.json",startAtLink:{title:"External Object Store"}},{id:"url-children-demo",title:"Url children demo",childrenUrl:"/assets/demos-data/children_url_3.json"}];compareWith=X;static \u0275fac=function(o){return new(o||e)};static \u0275cmp=t.VBU({type:e,selectors:[["markdown-navigator-demo-start-at-onclick-children-url"]],decls:1,vars:2,consts:[[3,"items","compareWith"]],template:function(o,n){1&o&&t.nrm(0,"td-markdown-navigator",0),2&o&&t.Y8G("items",n.items)("compareWith",n.compareWith)},dependencies:[d.Y]})}return e})();const H=[{path:"",component:(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275cmp=t.VBU({type:e,selectors:[["markdown-navigator-demo"]],decls:24,vars:24,consts:[[3,"demoId","demoTitle"]],template:function(o,n){1&o&&(t.j41(0,"demo-component",0),t.nrm(1,"markdown-navigator-demo-basic"),t.k0s(),t.j41(2,"demo-component",0),t.nrm(3,"markdown-navigator-demo-children-url"),t.k0s(),t.j41(4,"demo-component",0),t.nrm(5,"markdown-navigator-demo-anchor"),t.k0s(),t.j41(6,"demo-component",0),t.nrm(7,"markdown-navigator-demo-start-at"),t.k0s(),t.j41(8,"demo-component",0),t.nrm(9,"markdown-navigator-demo-children-url-start-at"),t.k0s(),t.j41(10,"demo-component",0),t.nrm(11,"markdown-navigator-demo-start-at-onclick-children-url"),t.k0s(),t.j41(12,"demo-component",0),t.nrm(13,"markdown-navigator-demo-footer"),t.k0s(),t.j41(14,"demo-component",0),t.nrm(15,"markdown-navigator-demo-button-clicked"),t.k0s(),t.j41(16,"demo-component",0),t.nrm(17,"markdown-navigator-demo-service"),t.k0s(),t.j41(18,"demo-component",0),t.nrm(19,"markdown-navigator-demo-service-button-clicked"),t.k0s(),t.j41(20,"demo-component",0),t.nrm(21,"markdown-navigator-demo-directive"),t.k0s(),t.j41(22,"demo-component",0),t.nrm(23,"markdown-navigator-demo-editor"),t.k0s()),2&o&&(t.Y8G("demoId","markdown-navigator-demo-basic")("demoTitle","Basic"),t.R7$(2),t.Y8G("demoId","markdown-navigator-demo-children-url")("demoTitle","Children url"),t.R7$(2),t.Y8G("demoId","markdown-navigator-demo-anchor")("demoTitle","Anchor jumping"),t.R7$(2),t.Y8G("demoId","markdown-navigator-demo-start-at")("demoTitle","Start at"),t.R7$(2),t.Y8G("demoId","markdown-navigator-demo-children-url-start-at")("demoTitle","Start at with children url"),t.R7$(2),t.Y8G("demoId","markdown-navigator-demo-start-at-onclick-children-url")("demoTitle","StartAt on nested url"),t.R7$(2),t.Y8G("demoId","markdown-navigator-demo-footer")("demoTitle","Footer"),t.R7$(2),t.Y8G("demoId","markdown-navigator-demo-button-clicked")("demoTitle","Button click events"),t.R7$(2),t.Y8G("demoId","markdown-navigator-demo-service")("demoTitle","Service"),t.R7$(2),t.Y8G("demoId","markdown-navigator-demo-service-button-clicked")("demoTitle","Button click events via service"),t.R7$(2),t.Y8G("demoId","markdown-navigator-demo-directive")("demoTitle","Directive"),t.R7$(2),t.Y8G("demoId","markdown-navigator-demo-editor")("demoTitle","Live editor"))},dependencies:[M.D,N.h,D,A,T,B,_,Y,O,R,V,J,z]})}return e})()}];let L=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=t.$C({type:e});static \u0275inj=t.G2t({imports:[v.iI.forChild(H),v.iI]})}return e})();var P=r(69977),Q=r(3902),K=r(95877),Z=r(88406);let q=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=t.$C({type:e});static \u0275inj=t.G2t({imports:[P.q,L,K.k,l.Br,Z.h,C.MD,s.Hl,Q.Fg,p.Vg,w.mV,c.YN]})}return e})()}}]);