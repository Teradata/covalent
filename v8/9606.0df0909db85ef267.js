"use strict";(self.webpackChunkdocs_app=self.webpackChunkdocs_app||[]).push([[9606],{79368:(y,d,e)=>{e.r(d),e.d(d,{PieModule:()=>U});var n=e(60177),p=e(74710),h=e(82798),g=e(99213),T=e(84843),l=e(14825),u=e(6626),s=e(2593),v=e(16758),r=e(34772),a=e(2806),f=e(80958),t=e(54438),C=e(29838),x=e(14925),M=e(5961),D=e(11817),S=e(6829);const F=()=>["Latte","Tea","Cocoa","Milk"],E=()=>[823,235,1042,988],O=()=>[95.8,81.4,91.2,76.9],b=(o,c,i)=>({product:o,count:c,score:i}),G=()=>["Data View","Turn Off","Refresh"],R=o=>({readOnly:!0,title:"View Data",lang:o}),w=o=>({dataView:o}),P=()=>({color:"#818181"}),$=()=>[0,"75%"];function V(o,c){if(1&o&&(t.j41(0,"td",11),t.EFF(1),t.k0s()),2&o){const i=c.ngIf,m=t.XpG().index;t.R7$(),t.SpI(" ",i[m]," ")}}function z(o,c){if(1&o&&(t.j41(0,"td",11),t.EFF(1),t.k0s()),2&o){const i=c.ngIf,m=t.XpG().index;t.R7$(),t.SpI(" ",i[m]," ")}}function J(o,c){if(1&o&&(t.qex(0),t.j41(1,"tr",10)(2,"td",11),t.EFF(3),t.k0s(),t.DNE(4,V,2,1,"td",12)(5,z,2,1,"td",12),t.k0s(),t.bVm()),2&o){const i=c.$implicit;t.R7$(3),t.JRh(i),t.R7$(),t.Y8G("ngIf",t.lJ4(3,E)),t.R7$(),t.Y8G("ngIf",t.lJ4(4,O))}}function j(o,c){1&o&&(t.j41(0,"table",6)(1,"thead")(2,"tr",7)(3,"th",8),t.EFF(4,"Product"),t.k0s(),t.j41(5,"th",8),t.EFF(6,"Count"),t.k0s(),t.j41(7,"th",8),t.EFF(8,"Score"),t.k0s()()(),t.j41(9,"tbody"),t.DNE(10,J,6,5,"ng-container",9),t.k0s()()),2&o&&(t.R7$(10),t.Y8G("ngForOf",t.lJ4(1,F)))}function B(o,c){if(1&o&&(t.qex(0),t.j41(1,"div",14)(2,"span",15),t.EFF(3),t.k0s()(),t.bVm()),2&o){const i=t.XpG().$implicit;t.R7$(3),t.Lme(" ",i.seriesName?i.seriesName:i.name," : ",i.value," ")}}function I(o,c){1&o&&t.DNE(0,B,4,2,"ng-container",13),2&o&&t.Y8G("ngIf",c.$implicit)}const N=(0,r.M5)({overviewDemoComponent:(()=>{class o{themeSelector;config={toolbox:{showTitle:!0,top:0,right:"30px",show:!0,feature:{dataView:{title:"View Data",lang:["Data View","Turn Off","Refresh"]}}},grid:{top:"0",bottom:"10",left:"0"},series:[{type:"pie",itemStyle:{opacity:.95},name:"Product",radius:[0,"75%"],data:[{name:"Latte",value:80,itemStyle:{color:"#26B99A"}},{name:"Tea",value:50,itemStyle:{color:"#34495E"}},{name:"Cocoa",value:60,itemStyle:{color:"#BDC3C7"}},{name:"Frappe",value:122,itemStyle:{color:"#3498DB"}},{name:"Milk",value:110,itemStyle:{color:"#9B59B6"}},{name:"Mocha",value:20,itemStyle:{color:"#8abb6f"}}]}],tooltip:{show:!0,trigger:"item",showContent:!0,formatter:"{a} <br/>{b} : {c} ({d}%)"}};constructor(i){this.themeSelector=i}static \u0275fac=function(m){return new(m||o)(t.rXU(f.S))};static \u0275cmp=t.VBU({type:o,selectors:[["types-pie"]],decls:7,vars:25,consts:[[3,"source"],[3,"show","right","top","feature"],["tdViewDataFormatter",""],[3,"trigger","textStyle","backgroundColor"],["tdTooltipFormatter",""],["td-pie","",3,"radius"],["td-data-table",""],["td-data-table-column-row",""],["td-data-table-column",""],[4,"ngFor","ngForOf"],["td-data-table-row",""],["td-data-table-cell",""],["td-data-table-cell","",4,"ngIf"],[4,"ngIf"],["layout","row","layout-align","start center"],[1,"mat-caption","pad-left-sm"]],template:function(m,Y){1&m&&(t.j41(0,"td-chart"),t.nrm(1,"td-chart-dataset",0),t.j41(2,"td-chart-toolbox",1),t.DNE(3,j,11,2,"ng-template",2),t.k0s(),t.j41(4,"td-chart-tooltip",3),t.DNE(5,I,1,1,"ng-template",4),t.k0s(),t.nrm(6,"td-chart-series",5),t.k0s()),2&m&&(t.xc7("height",400,"px"),t.R7$(),t.Y8G("source",t.sMw(14,b,t.lJ4(11,F),t.lJ4(12,E),t.lJ4(13,O))),t.R7$(),t.Y8G("show",!0)("right",30)("top",10)("feature",t.eq3(21,w,t.eq3(19,R,t.lJ4(18,G)))),t.R7$(2),t.Y8G("trigger","item")("textStyle",t.lJ4(23,P))("backgroundColor","#ffffff"),t.R7$(2),t.Y8G("radius",t.lJ4(24,$)))},dependencies:[n.Sq,n.bT,C.y,x.g,M.L,D.Ju,D.Bq,S.t,S.J],styles:["[_nghost-%COMP%]{width:100%}"],changeDetection:0})}return o})(),id:"pie"});let U=(()=>{class o{static \u0275fac=function(m){return new(m||o)};static \u0275mod=t.$C({type:o});static \u0275inj=t.G2t({imports:[n.MD,h.Ve,g.m_,l.wD,v.$q,u.q8,s.K6,T.K,a.M,p.iI.forChild(N)]})}return o})()},2593:(y,d,e)=>{e.d(d,{K6:()=>T});var n=e(60177),h=(e(6829),e(54438));let T=(()=>{class l{static \u0275fac=function(v){return new(v||l)};static \u0275mod=h.$C({type:l});static \u0275inj=h.G2t({imports:[n.MD]})}return l})()},6829:(y,d,e)=>{e.d(d,{J:()=>l,t:()=>u});var n=e(54438),p=e(14825),h=e(60177);const g=["toolboxContent"];function T(s,v){}let l=(()=>{class s{static \u0275fac=function(a){return new(a||s)};static \u0275dir=n.FsC({type:s,selectors:[["ng-template","tdViewDataFormatter",""]]})}return s})(),u=(()=>{class s{_changeDetectorRef;_elementRef;_optionsService;_state={};config={};show=!0;trigger;orient;itemSize;itemGap;showTitle=!0;label;feature;iconStyle;zlevel;z;transitionDuration=.5;left="auto";top="auto";right="auto";bottom="auto";width="auto";height="auto";formatterTemplate;fullTemplate;constructor(r,a,f){this._changeDetectorRef=r,this._elementRef=a,this._optionsService=f}ngOnChanges(){this._setOptions()}ngOnDestroy(){this._removeOption()}_setOptions(){this._checkFormatterTemplate();const r=(0,p.J)(this._state,{show:this.show,name:this.trigger,orient:this.orient,itemSize:this.itemSize,itemGap:this.itemGap,showTitle:this.showTitle,label:this.label,feature:this.feature,iconStyle:this.iconStyle,zlevel:this.zlevel,z:this.z,transitionDuration:this.transitionDuration,left:this.left,top:this.top,right:this.right,bottom:this.bottom,width:this.width,height:this.height},this.config?this.config:{});this._optionsService.setOption("toolbox",r)}_removeOption(){this._optionsService.clearOption("toolbox")}_checkFormatterTemplate(){this.formatterTemplate&&(this.feature={...this.feature,dataView:{...this.feature?.dataView,optionToContent:this._optionToContentFormatter()}})}_optionToContentFormatter(){return()=>(this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.innerHTML)}static \u0275fac=function(a){return new(a||s)(n.rXU(n.gRc),n.rXU(n.aKT),n.rXU(p.QQ))};static \u0275cmp=n.VBU({type:s,selectors:[["td-chart-toolbox"]],contentQueries:function(a,f,t){if(1&a&&n.wni(t,l,5,n.C4Q),2&a){let C;n.mGM(C=n.lsd())&&(f.formatterTemplate=C.first)}},viewQuery:function(a,f){if(1&a&&n.GBs(g,7),2&a){let t;n.mGM(t=n.lsd())&&(f.fullTemplate=t.first)}},inputs:{config:"config",show:"show",trigger:"trigger",orient:"orient",itemSize:"itemSize",itemGap:"itemGap",showTitle:"showTitle",label:"label",feature:"feature",iconStyle:"iconStyle",zlevel:"zlevel",z:"z",transitionDuration:"transitionDuration",left:"left",top:"top",right:"right",bottom:"bottom",width:"width",height:"height"},features:[n.OA$],decls:2,vars:1,consts:[["toolboxContent",""],[3,"ngTemplateOutlet"]],template:function(a,f){1&a&&n.DNE(0,T,0,0,"ng-template",1,0,n.C5r),2&a&&n.Y8G("ngTemplateOutlet",f.formatterTemplate)},dependencies:[h.T3],encapsulation:2,changeDetection:0})}return s})()},7707:(y,d,e)=>{e.d(d,{_5:()=>l});var n=e(60177),p=e(99213),g=(e(85901),e(54438));let l=(()=>{class u{static \u0275fac=function(r){return new(r||u)};static \u0275mod=g.$C({type:u});static \u0275inj=g.G2t({imports:[n.MD,p.m_]})}return u})()}}]);