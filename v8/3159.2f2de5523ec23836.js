"use strict";(self.webpackChunkdocs_app=self.webpackChunkdocs_app||[]).push([[3159],{93159:(G,u,i)=>{i.r(u),i.d(u,{LoadingDemoModule:()=>R});var r=i(60177),l=i(83032),p=i(74710),e=i(54438),y=i(56214),m=i(93581),c=i(88834);function b(t,d){1&t&&(e.j41(0,"div")(1,"div",3),e.EFF(2,"loading content..."),e.k0s()())}let L=(()=>{class t{_loadingService;loadingMode=l.Qb;loadingStrategy=l.YQ;loadingType=l.Jp;overlayStarSyntax=!1;constructor(n){this._loadingService=n}toggleOverlayStarSyntax(){this.overlayStarSyntax=!this.overlayStarSyntax,this.overlayStarSyntax?this._loadingService.register("overlayStarSyntax"):this._loadingService.resolve("overlayStarSyntax")}static \u0275fac=function(o){return new(o||t)(e.rXU(l.yj))};static \u0275cmp=e.VBU({type:t,selectors:[["loading-demo-basic"]],decls:4,vars:5,consts:[[4,"tdLoading","tdLoadingMode","tdLoadingType","tdLoadingStrategy","tdLoadingColor"],["layout","row"],["mat-raised-button","","color","primary",3,"click"],[1,"pad","text-center"]],template:function(o,a){1&o&&(e.DNE(0,b,3,0,"div",0),e.j41(1,"div",1)(2,"button",2),e.bIt("click",function(){return a.toggleOverlayStarSyntax()}),e.EFF(3," Toggle loader "),e.k0s()()),2&o&&e.Y8G("tdLoading","overlayStarSyntax")("tdLoadingMode",a.loadingMode.Indeterminate)("tdLoadingType",a.loadingType.Circular)("tdLoadingStrategy",a.loadingStrategy.Overlay)("tdLoadingColor","accent")},dependencies:[m.A,c.$z]})}return t})();function D(t,d){1&t&&(e.j41(0,"div",3),e.EFF(1,"loading content..."),e.k0s())}let F=(()=>{class t{loading=!1;toggle(){this.loading=!this.loading}static \u0275fac=function(o){return new(o||t)};static \u0275cmp=e.VBU({type:t,selectors:[["loading-demo-replace"]],decls:4,vars:1,consts:[["tdLoading","",3,"tdLoadingUntil"],["layout","row"],["mat-raised-button","","color","primary",3,"click"],[1,"pad","text-center"]],template:function(o,a){1&o&&(e.DNE(0,D,2,0,"ng-template",0),e.j41(1,"div",1)(2,"button",2),e.bIt("click",function(){return a.toggle()}),e.EFF(3," Toggle loader "),e.k0s()()),2&o&&e.Y8G("tdLoadingUntil",!a.loading)},dependencies:[m.A,c.$z]})}return t})();var v=i(84412);function S(t,d){if(1&t&&(e.j41(0,"div")(1,"div",3),e.EFF(2),e.k0s()()),2&t){const n=d.$implicit;e.R7$(2),e.SpI(" ",n.name," ")}}let T=(()=>{class t{_subject=new v.t({name:"I am here!"});observable$=this._subject.asObservable();toggle(){this._subject=new v.t(void 0),this.observable$=this._subject.asObservable(),setTimeout(()=>{this._subject.next({name:"I am here!"})},1e3)}static \u0275fac=function(o){return new(o||t)};static \u0275cmp=e.VBU({type:t,selectors:[["loading-demo-observable"]],decls:5,vars:3,consts:[[4,"tdLoading","tdLoadingUntil"],["layout","row"],["mat-raised-button","","color","primary",3,"click"],[1,"pad","text-center"]],template:function(o,a){1&o&&(e.DNE(0,S,3,1,"div",0),e.nI1(1,"async"),e.j41(2,"div",1)(3,"button",2),e.bIt("click",function(){return a.toggle()}),e.EFF(4," Toggle loader "),e.k0s()()),2&o&&e.Y8G("tdLoadingUntil",e.bMT(1,1,a.observable$))},dependencies:[m.A,c.$z,r.Jj]})}return t})(),C=(()=>{class t{_loadingService;constructor(n){this._loadingService=n,this._loadingService.create({name:"customFullscreenDemo",mode:l.Qb.Indeterminate,type:l.Jp.Linear,color:"accent"})}toggleDefaultFullscreenDemo(){this._loadingService.register(),setTimeout(()=>this._loadingService.resolve(),1500)}toggleCustomFullscreenDemo(){this._loadingService.register("customFullscreenDemo"),setTimeout(()=>this._loadingService.resolve("customFullscreenDemo"),1500)}static \u0275fac=function(o){return new(o||t)(e.rXU(l.yj))};static \u0275cmp=e.VBU({type:t,selectors:[["loading-demo-fullscreen"]],decls:4,vars:0,consts:[["mat-raised-button","","color","primary",3,"click"]],template:function(o,a){1&o&&(e.j41(0,"button",0),e.bIt("click",function(){return a.toggleDefaultFullscreenDemo()}),e.EFF(1," Toggle default fullscreen loader\n"),e.k0s(),e.j41(2,"button",0),e.bIt("click",function(){return a.toggleCustomFullscreenDemo()}),e.EFF(3," Toggle custom fullscreen loader\n"),e.k0s())},dependencies:[c.$z],styles:["button[_ngcontent-%COMP%]{margin-right:1em}"]})}return t})();var f=i(99213),s=i(3902),h=i(71997);function I(t,d){1&t&&(e.j41(0,"mat-icon"),e.EFF(1,"settings_backup_restore"),e.k0s())}function j(t,d){1&t&&e.nrm(0,"mat-divider")}function k(t,d){if(1&t&&(e.j41(0,"mat-list-item")(1,"div",1),e.DNE(2,I,2,0,"ng-template",2),e.k0s(),e.j41(3,"h3",3),e.EFF(4),e.k0s()(),e.DNE(5,j,1,0,"mat-divider",4)),2&t){const n=d.$implicit,o=d.last,a=e.XpG();e.R7$(2),e.Y8G("tdLoadingUntil",!n.value)("tdLoadingStrategy",a.loadingStrategy.Overlay),e.R7$(2),e.JRh(n.label),e.R7$(),e.Y8G("ngIf",!o)}}let $=(()=>{class t{loadingMode=l.Qb;loadingStrategy=l.YQ;loadingType=l.Jp;itemList=[{label:"Light",value:!0},{label:"Console",value:!1},{label:"T.V.",value:!0}];static \u0275fac=function(o){return new(o||t)};static \u0275cmp=e.VBU({type:t,selectors:[["loading-demo-icon"]],decls:2,vars:1,consts:[["ngFor","",3,"ngForOf"],["matListItemIcon",""],["tdLoading","",3,"tdLoadingUntil","tdLoadingStrategy"],["matListItemTitle",""],[4,"ngIf"]],template:function(o,a){1&o&&(e.j41(0,"mat-list"),e.DNE(1,k,6,4,"ng-template",0),e.k0s()),2&o&&(e.R7$(),e.Y8G("ngForOf",a.itemList))},dependencies:[m.A,r.Sq,r.bT,f.An,s.jt,s.YE,s.ZV,h.q,s.yE]})}return t})();const E=[{path:"",component:(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275cmp=e.VBU({type:t,selectors:[["loading-demo"]],decls:10,vars:10,consts:[[3,"demoId","demoTitle"]],template:function(o,a){1&o&&(e.j41(0,"demo-component",0),e.nrm(1,"loading-demo-basic"),e.k0s(),e.j41(2,"demo-component",0),e.nrm(3,"loading-demo-replace"),e.k0s(),e.j41(4,"demo-component",0),e.nrm(5,"loading-demo-observable"),e.k0s(),e.j41(6,"demo-component",0),e.nrm(7,"loading-demo-fullscreen"),e.k0s(),e.j41(8,"demo-component",0),e.nrm(9,"loading-demo-icon"),e.k0s()),2&o&&(e.Y8G("demoId","loading-demo-basic")("demoTitle","Basic"),e.R7$(2),e.Y8G("demoId","loading-demo-replace")("demoTitle","Template Until Syntax"),e.R7$(2),e.Y8G("demoId","loading-demo-observable")("demoTitle","Until Syntax Using Observables"),e.R7$(2),e.Y8G("demoId","loading-demo-fullscreen")("demoTitle","Fullscreen"),e.R7$(2),e.Y8G("demoId","loading-demo-icon")("demoTitle","Icon"))},dependencies:[y.D,L,F,T,C,$]})}return t})()}];let U=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=e.$C({type:t});static \u0275inj=e.G2t({imports:[p.iI.forChild(E),p.iI]})}return t})();var _=i(69977);let R=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=e.$C({type:t});static \u0275inj=e.G2t({imports:[_.q,U,l.$$,r.MD,c.Hl,f.m_,s.Fg]})}return t})()}}]);