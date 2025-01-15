"use strict";(self.webpackChunkdocs_app=self.webpackChunkdocs_app||[]).push([[8058],{68058:(v,h,o)=>{o.r(h),o.d(h,{PieDemoModule:()=>L});var n=o(60177),p=o(82798),d=o(99213),T=o(14825),u=o(6626),l=o(2593),D=o(69977),r=o(16758),g=o(74710),t=o(54438),s=o(56214),m=o(80958),f=o(29838),C=o(14925),y=o(11817),F=o(6829),O=o(5961);const S=()=>["Latte","Tea","Cocoa","Milk"],b=()=>[823,235,1042,988],x=()=>[95.8,81.4,91.2,76.9],E=(e,c,i)=>({product:e,count:c,score:i}),w=()=>["Data View","Turn Off","Refresh"],R=e=>({readOnly:!0,title:"View Data",lang:e}),G=e=>({dataView:e}),B=()=>({color:"#818181"}),P=()=>[0,"75%"];function M(e,c){if(1&e&&(t.j41(0,"td",11),t.EFF(1),t.k0s()),2&e){const i=c.ngIf,a=t.XpG().index;t.R7$(),t.SpI(" ",i[a]," ")}}function _(e,c){if(1&e&&(t.j41(0,"td",11),t.EFF(1),t.k0s()),2&e){const i=c.ngIf,a=t.XpG().index;t.R7$(),t.SpI(" ",i[a]," ")}}function $(e,c){if(1&e&&(t.qex(0),t.j41(1,"tr",10)(2,"td",11),t.EFF(3),t.k0s(),t.DNE(4,M,2,1,"td",12)(5,_,2,1,"td",12),t.k0s(),t.bVm()),2&e){const i=c.$implicit;t.R7$(3),t.JRh(i),t.R7$(),t.Y8G("ngIf",t.lJ4(3,b)),t.R7$(),t.Y8G("ngIf",t.lJ4(4,x))}}function V(e,c){1&e&&(t.j41(0,"table",6)(1,"thead")(2,"tr",7)(3,"th",8),t.EFF(4,"Product"),t.k0s(),t.j41(5,"th",8),t.EFF(6,"Count"),t.k0s(),t.j41(7,"th",8),t.EFF(8,"Score"),t.k0s()()(),t.j41(9,"tbody"),t.DNE(10,$,6,5,"ng-container",9),t.k0s()()),2&e&&(t.R7$(10),t.Y8G("ngForOf",t.lJ4(1,S)))}function I(e,c){if(1&e&&(t.qex(0),t.j41(1,"div",14)(2,"span",15),t.EFF(3),t.k0s()(),t.bVm()),2&e){const i=t.XpG().$implicit;t.R7$(3),t.Lme(" ",i.seriesName?i.seriesName:i.name," : ",i.value," ")}}function j(e,c){1&e&&t.DNE(0,I,4,2,"ng-container",13),2&e&&t.Y8G("ngIf",c.$implicit)}let z=(()=>{class e{themeSelector;config={toolbox:{showTitle:!0,top:0,right:"30px",show:!0,feature:{dataView:{title:"View Data",lang:["Data View","Turn Off","Refresh"]}}},grid:{top:"0",bottom:"10",left:"0"},series:[{type:"pie",itemStyle:{opacity:.95},name:"Product",radius:[0,"75%"],data:[{name:"Latte",value:80,itemStyle:{color:"#26B99A"}},{name:"Tea",value:50,itemStyle:{color:"#34495E"}},{name:"Cocoa",value:60,itemStyle:{color:"#BDC3C7"}},{name:"Frappe",value:122,itemStyle:{color:"#3498DB"}},{name:"Milk",value:110,itemStyle:{color:"#9B59B6"}},{name:"Mocha",value:20,itemStyle:{color:"#8abb6f"}}]}],tooltip:{show:!0,trigger:"item",showContent:!0,formatter:"{a} <br/>{b} : {c} ({d}%)"}};constructor(i){this.themeSelector=i}static \u0275fac=function(a){return new(a||e)(t.rXU(m.S))};static \u0275cmp=t.VBU({type:e,selectors:[["pie-demo-basic"]],decls:7,vars:25,consts:[[3,"source"],[3,"show","right","top","feature"],["tdViewDataFormatter",""],[3,"trigger","textStyle","backgroundColor"],["tdTooltipFormatter",""],["td-pie","",3,"radius"],["td-data-table",""],["td-data-table-column-row",""],["td-data-table-column",""],[4,"ngFor","ngForOf"],["td-data-table-row",""],["td-data-table-cell",""],["td-data-table-cell","",4,"ngIf"],[4,"ngIf"],["layout","row","layout-align","start center"],[1,"mat-caption","pad-left-sm"]],template:function(a,N){1&a&&(t.j41(0,"td-chart"),t.nrm(1,"td-chart-dataset",0),t.j41(2,"td-chart-toolbox",1),t.DNE(3,V,11,2,"ng-template",2),t.k0s(),t.j41(4,"td-chart-tooltip",3),t.DNE(5,j,1,1,"ng-template",4),t.k0s(),t.nrm(6,"td-chart-series",5),t.k0s()),2&a&&(t.xc7("height",400,"px"),t.R7$(),t.Y8G("source",t.sMw(14,E,t.lJ4(11,S),t.lJ4(12,b),t.lJ4(13,x))),t.R7$(),t.Y8G("show",!0)("right",30)("top",10)("feature",t.eq3(21,G,t.eq3(19,R,t.lJ4(18,w)))),t.R7$(2),t.Y8G("trigger","item")("textStyle",t.lJ4(23,B))("backgroundColor","#ffffff"),t.R7$(2),t.Y8G("radius",t.lJ4(24,P)))},dependencies:[f.y,C.g,y.Ju,y.Bq,F.t,F.J,O.L,n.Sq,n.bT],changeDetection:0})}return e})();const J=[{path:"",component:(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275cmp=t.VBU({type:e,selectors:[["pie-demo"]],decls:2,vars:2,consts:[[3,"demoId","demoTitle"]],template:function(a,N){1&a&&(t.j41(0,"demo-component",0),t.nrm(1,"pie-demo-basic"),t.k0s()),2&a&&t.Y8G("demoId","pie-demo-basic")("demoTitle","Basic")},dependencies:[s.D,z]})}return e})()}];let U=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275mod=t.$C({type:e});static \u0275inj=t.G2t({imports:[g.iI.forChild(J),g.iI]})}return e})(),L=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275mod=t.$C({type:e});static \u0275inj=t.G2t({imports:[D.q,U,T.wD,u.q8,l.K6,r.$q,n.MD,p.Ve,d.m_]})}return e})()},2593:(v,h,o)=>{o.d(h,{K6:()=>u});var n=o(60177),d=(o(6829),o(54438));let u=(()=>{class l{static \u0275fac=function(g){return new(g||l)};static \u0275mod=d.$C({type:l});static \u0275inj=d.G2t({imports:[n.MD]})}return l})()},6829:(v,h,o)=>{o.d(h,{J:()=>l,t:()=>D});var n=o(54438),p=o(14825),d=o(60177);const T=["toolboxContent"];function u(r,g){}let l=(()=>{class r{static \u0275fac=function(s){return new(s||r)};static \u0275dir=n.FsC({type:r,selectors:[["ng-template","tdViewDataFormatter",""]]})}return r})(),D=(()=>{class r{_changeDetectorRef;_elementRef;_optionsService;_state={};config={};show=!0;trigger;orient;itemSize;itemGap;showTitle=!0;label;feature;iconStyle;zlevel;z;transitionDuration=.5;left="auto";top="auto";right="auto";bottom="auto";width="auto";height="auto";formatterTemplate;fullTemplate;constructor(t,s,m){this._changeDetectorRef=t,this._elementRef=s,this._optionsService=m}ngOnChanges(){this._setOptions()}ngOnDestroy(){this._removeOption()}_setOptions(){this._checkFormatterTemplate();const t=(0,p.J)(this._state,{show:this.show,name:this.trigger,orient:this.orient,itemSize:this.itemSize,itemGap:this.itemGap,showTitle:this.showTitle,label:this.label,feature:this.feature,iconStyle:this.iconStyle,zlevel:this.zlevel,z:this.z,transitionDuration:this.transitionDuration,left:this.left,top:this.top,right:this.right,bottom:this.bottom,width:this.width,height:this.height},this.config?this.config:{});this._optionsService.setOption("toolbox",t)}_removeOption(){this._optionsService.clearOption("toolbox")}_checkFormatterTemplate(){this.formatterTemplate&&(this.feature={...this.feature,dataView:{...this.feature?.dataView,optionToContent:this._optionToContentFormatter()}})}_optionToContentFormatter(){return()=>(this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.innerHTML)}static \u0275fac=function(s){return new(s||r)(n.rXU(n.gRc),n.rXU(n.aKT),n.rXU(p.QQ))};static \u0275cmp=n.VBU({type:r,selectors:[["td-chart-toolbox"]],contentQueries:function(s,m,f){if(1&s&&n.wni(f,l,5,n.C4Q),2&s){let C;n.mGM(C=n.lsd())&&(m.formatterTemplate=C.first)}},viewQuery:function(s,m){if(1&s&&n.GBs(T,7),2&s){let f;n.mGM(f=n.lsd())&&(m.fullTemplate=f.first)}},inputs:{config:"config",show:"show",trigger:"trigger",orient:"orient",itemSize:"itemSize",itemGap:"itemGap",showTitle:"showTitle",label:"label",feature:"feature",iconStyle:"iconStyle",zlevel:"zlevel",z:"z",transitionDuration:"transitionDuration",left:"left",top:"top",right:"right",bottom:"bottom",width:"width",height:"height"},features:[n.OA$],decls:2,vars:1,consts:[["toolboxContent",""],[3,"ngTemplateOutlet"]],template:function(s,m){1&s&&n.DNE(0,u,0,0,"ng-template",1,0,n.C5r),2&s&&n.Y8G("ngTemplateOutlet",m.formatterTemplate)},dependencies:[d.T3],encapsulation:2,changeDetection:0})}return r})()}}]);