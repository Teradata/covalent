"use strict";(self.webpackChunkdocs_app=self.webpackChunkdocs_app||[]).push([[9448],{96548:(T,g,e)=>{e.d(g,{y:()=>at});var a=e(15861),l=e(23421),d=e(76856),t=e(65879),r=e(1691),n=e(15079),m=e(39967),i=e(64335),u=e(64360),p=e(33822),c=e(13063),y=e(96814),f=e(64170),x=e(98525),E=e(23680),M=e(30617);function O(o,h){if(1&o&&(t.TgZ(0,"mat-option",14),t._uU(1),t.qZA()),2&o){const s=h.$implicit;t.Q6J("value",s),t.xp6(1),t.hij(" ",s," ")}}function A(o,h){if(1&o&&(t.TgZ(0,"td",20),t._uU(1),t.qZA()),2&o){const s=h.ngIf,_=t.oxw().index;t.xp6(1),t.hij(" ",s[_]," ")}}function b(o,h){if(1&o&&(t.TgZ(0,"td",20),t._uU(1),t.qZA()),2&o){const s=h.ngIf,_=t.oxw().index;t.xp6(1),t.hij(" ",s[_]," ")}}const B=function(){return[150,130,150,120,150,120]},P=function(){return[80,122,80,120,80,120]};function S(o,h){if(1&o&&(t.ynx(0),t.TgZ(1,"tr",19)(2,"td",20),t._uU(3),t.qZA(),t.YNc(4,A,2,1,"td",21),t.YNc(5,b,2,1,"td",21),t.qZA(),t.BQk()),2&o){const s=h.$implicit;t.xp6(3),t.Oqu(s),t.xp6(1),t.Q6J("ngIf",t.DdM(3,B)),t.xp6(1),t.Q6J("ngIf",t.DdM(4,P))}}const L=function(){return["Electronics","Toys","Grocery","Appliances","Automotive","Sports"]};function I(o,h){if(1&o&&(t.TgZ(0,"table",15)(1,"thead")(2,"tr",16)(3,"th",17),t._uU(4,"Category"),t.qZA(),t.TgZ(5,"th",17),t._uU(6),t.qZA(),t.TgZ(7,"th",17),t._uU(8),t.qZA()()(),t.TgZ(9,"tbody"),t.YNc(10,S,6,5,"ng-container",18),t.qZA()()),2&o){const s=t.oxw();t.xp6(6),t.Oqu(s.config.series[0].name),t.xp6(2),t.Oqu(s.config.series[1].name),t.xp6(2),t.Q6J("ngForOf",t.DdM(3,L))}}function U(o,h){if(1&o&&(t.ynx(0),t.TgZ(1,"div",23)(2,"mat-icon")(3,"span"),t._uU(4,"people"),t.qZA()(),t.TgZ(5,"span",24),t._uU(6),t.qZA()(),t.BQk()),2&o){const s=t.oxw().$implicit;t.xp6(3),t.Udp("color",s.color),t.xp6(3),t.AsE(" ",s.seriesName?s.seriesName:s.name,": ",s.value," ")}}function R(o,h){1&o&&t.YNc(0,U,7,4,"ng-container",22),2&o&&t.Q6J("ngIf",h.$implicit)}const w=function(){return["Electronics",150,80]},K=function(){return["Toys",130,122]},W=function(){return["Grocery",150,80]},k=function(){return["Appliances",120,120]},Z=function(){return["Automotive",150,80]},z=function(){return["Sports",120,120]},F=function(o,h,s,_,v,D){return[o,h,s,_,v,D]},G=function(){return["Data View","Turn Off","Refresh"]},N=function(o){return{readOnly:!0,title:"View Data",lang:o}},Q=function(){return{zoom:"Zoom",back:"Back"}},J=function(o){return{title:o}},H=function(){return["line","bar","stack","tiled"]},V=function(){return{line:"Line",bar:"Bar",stack:"Stack",tiled:"Tiled"}},Y=function(o,h){return{type:o,title:h}},j=function(){return{title:"Restore"}},X=function(o,h,s,_){return{dataView:o,dataZoom:h,magicType:s,restore:_}},$=function(){return{type:"dotted"}},q=function(o){return{lineStyle:o}},tt=function(){return{name:"Average",value:30,xAxis:1,yAxis:30}},et=function(o){return[o]},ot=function(o){return{data:o}};let at=(()=>{var o;class h{constructor(_,v){this._cdr=_,this.themeSelector=v,this.themes=(0,l.RC)(),this.config={toolbox:{showTitle:!0,top:0,right:"30px",show:!0,feature:{dataView:{title:"View Data",lang:["Data View","Turn Off","Refresh"]},dataZoom:{title:{zoom:"Zoom",back:"Back"}},magicType:{type:["line","bar","stack","tiled"],title:{line:"Line",bar:"Bar",stack:"Stack",tiled:"Tiled"}},restore:{title:"Restore"}}},xAxis:[{data:["Electronics","Toys","Grocery","Appliances","Automotive","Sports"]},{show:!0,type:"time",boundaryGap:!1}],yAxis:[{show:!0,type:"value",axisLabel:{inside:!1},max:300}],series:[{type:"bar",itemStyle:{opacity:.95,color:"#007373"},markPoint:{data:[{name:"test",value:130,xAxis:1,yAxis:130}]},name:"Yesterday",data:[150,130,150,120,150,120]},{type:"bar",itemStyle:{opacity:.95,color:"#1B98C6"},markPoint:{data:[{name:"Target",value:80,xAxis:1,yAxis:121}]},markLine:{data:[{name:"Average",value:30,xAxis:1,yAxis:30}],symbol:"circle"},name:"Today",data:[80,122,80,120,80,120]}],tooltip:{show:!0,trigger:"item",showContent:!0}}}ngOnInit(){var _=this;return(0,a.Z)(function*(){_.selectedTheme=_.themeSelector.selected,_._cdr.markForCheck()})()}selectChartTheme(_){this.themeSelector.select(_)}}return(o=h).\u0275fac=function(_){return new(_||o)(t.Y36(t.sBO),t.Y36(d.n))},o.\u0275cmp=t.Xpm({type:o,selectors:[["bar-demo-basic"]],decls:17,vars:63,consts:[["flex","","layout","row","layout-align","start center"],["hide-xs","",1,"mat-subtitle-1","pad-left","pad-right","push-bottom-none"],[3,"value","valueChange"],[3,"value",4,"ngFor","ngForOf"],[3,"themeName"],[3,"source"],[3,"show","right","top","feature"],["tdViewDataFormatter",""],[3,"trigger"],["tdTooltipFormatter",""],[3,"show","position","type","boundaryGap"],[3,"show","type","position","max","splitLine"],["td-bar","",3,"name"],["td-bar","",3,"name","markLine"],[3,"value"],["td-data-table",""],["td-data-table-column-row",""],["td-data-table-column",""],[4,"ngFor","ngForOf"],["td-data-table-row",""],["td-data-table-cell",""],["td-data-table-cell","",4,"ngIf"],[4,"ngIf"],["layout","row","layout-align","start center"],[1,"mat-caption","pad-left-sm"]],template:function(_,v){1&_&&(t.TgZ(0,"div",0)(1,"div",1),t._uU(2," Chart Theme: "),t.qZA(),t.TgZ(3,"mat-form-field")(4,"mat-select",2),t.NdJ("valueChange",function(C){return v.selectedTheme=C})("valueChange",function(C){return v.selectChartTheme(C)}),t.YNc(5,O,2,2,"mat-option",3),t.qZA()()(),t.TgZ(6,"td-chart",4),t.ALo(7,"async"),t._UZ(8,"td-chart-dataset",5),t.TgZ(9,"td-chart-toolbox",6),t.YNc(10,I,11,4,"ng-template",7),t.qZA(),t.TgZ(11,"td-chart-tooltip",8),t.YNc(12,R,1,1,"ng-template",9),t.qZA(),t._UZ(13,"td-chart-x-axis",10)(14,"td-chart-y-axis",11)(15,"td-chart-series",12)(16,"td-chart-series",13),t.qZA()),2&_&&(t.xp6(4),t.Q6J("value",v.selectedTheme),t.xp6(1),t.Q6J("ngForOf",v.themes),t.xp6(1),t.Udp("height",300,"px"),t.Q6J("themeName",t.lcZ(7,23,v.themeSelector.selected$)),t.xp6(2),t.Q6J("source",t.HTZ(31,F,t.DdM(25,w),t.DdM(26,K),t.DdM(27,W),t.DdM(28,k),t.DdM(29,Z),t.DdM(30,z))),t.xp6(1),t.Q6J("show",!0)("right",30)("top",10)("feature",t.l5B(50,X,t.VKq(39,N,t.DdM(38,G)),t.VKq(42,J,t.DdM(41,Q)),t.WLB(46,Y,t.DdM(44,H),t.DdM(45,V)),t.DdM(49,j))),t.xp6(2),t.Q6J("trigger","item"),t.xp6(2),t.Q6J("show",!0)("position","bottom")("type","category")("boundaryGap",!0),t.xp6(1),t.Q6J("show",!0)("type","value")("position","right")("max",300)("splitLine",t.VKq(56,q,t.DdM(55,$))),t.xp6(1),t.Q6J("name","Today"),t.xp6(1),t.Q6J("name","Yesterday")("markLine",t.VKq(61,ot,t.VKq(59,et,t.DdM(58,tt)))))},dependencies:[r.L,n.O,m.$,i.H,u.h,p.HN,p.dA,c.O,c.G,y.sg,y.O5,f.KE,x.gD,E.ey,M.Hw,y.Ov],styles:["[_nghost-%COMP%]{width:100%}"],changeDetection:0}),h})()},57311:(T,g,e)=>{e.d(g,{h:()=>u});var a=e(96814),l=e(98525),d=e(30617),t=e(23421),r=e(5965),n=e(57337),m=e(52514),i=e(65879);let u=(()=>{var p;class c{}return(p=c).\u0275fac=function(f){return new(f||p)},p.\u0275mod=i.oAB({type:p}),p.\u0275inj=i.cJS({imports:[t.MX,r.FA,n.NF,m.Po,a.ez,l.LD,d.Ps]}),c})()},64360:(T,g,e)=>{e.d(g,{h:()=>t});var a=e(65879),l=e(23421);const d=["td-bar",""];let t=(()=>{var r;class n extends l.R0{constructor(i){super("bar",i)}getConfig(){return{coordinateSystem:this.coordinateSystem,xAxisIndex:this.xAxisIndex,yAxisIndex:this.yAxisIndex,legendHoverLink:this.legendHoverLink,stack:this.stack,cursor:this.cursor,label:this.label,itemStyle:this.itemStyle,emphasis:this.emphasis,barWidth:this.barWidth,barMaxWidth:this.barMaxWidth,barMinHeight:this.barMinHeight,barGap:this.barGap,barCategoryGap:this.barCategoryGap,large:this.large,largeThreshold:this.largeThreshold,progressive:this.progressive,progressiveThreshold:this.progressiveThreshold,progressiveChunkMode:this.progressiveChunkMode,dimensions:this.dimensions,encode:this.encode,seriesLayoutBy:this.seriesLayoutBy,datasetIndex:this.datasetIndex,markPoint:this.markPoint,markLine:this.markLine,markArea:this.markArea,zlevel:this.zlevel,z:this.z}}}return(r=n).\u0275fac=function(i){return new(i||r)(a.Y36(l.ij))},r.\u0275cmp=a.Xpm({type:r,selectors:[["td-chart-series","td-bar",""]],inputs:{config:"config",id:"id",name:"name",color:"color",data:"data",animation:"animation",animationThreshold:"animationThreshold",animationDuration:"animationDuration",animationEasing:"animationEasing",animationDelay:"animationDelay",animationDurationUpdate:"animationDurationUpdate",animationEasingUpdate:"animationEasingUpdate",animationDelayUpdate:"animationDelayUpdate",tooltip:"tooltip",coordinateSystem:"coordinateSystem",xAxisIndex:"xAxisIndex",yAxisIndex:"yAxisIndex",legendHoverLink:"legendHoverLink",stack:"stack",cursor:"cursor",label:"label",itemStyle:"itemStyle",emphasis:"emphasis",barWidth:"barWidth",barMaxWidth:"barMaxWidth",barMinHeight:"barMinHeight",barGap:"barGap",barCategoryGap:"barCategoryGap",large:"large",largeThreshold:"largeThreshold",progressive:"progressive",progressiveThreshold:"progressiveThreshold",progressiveChunkMode:"progressiveChunkMode",dimensions:"dimensions",encode:"encode",seriesLayoutBy:"seriesLayoutBy",datasetIndex:"datasetIndex",markPoint:"markPoint",markLine:"markLine",markArea:"markArea",zlevel:"zlevel",z:"z"},features:[a._Bn([{provide:l.R0,useExisting:(0,a.Gpc)(()=>r)}]),a.qOj],attrs:d,decls:0,vars:0,template:function(i,u){},encapsulation:2,changeDetection:0}),n})()},5965:(T,g,e)=>{e.d(g,{FA:()=>r,hP:()=>l.h});var a=e(96814),l=e(64360),d=e(65879);let r=(()=>{var n;class m{}return(n=m).\u0275fac=function(u){return new(u||n)},n.\u0275mod=d.oAB({type:n}),n.\u0275inj=d.cJS({imports:[a.ez]}),m})()},90230:(T,g,e)=>{e.d(g,{P:()=>t});var a=e(65879),l=e(23421);const d=["td-line",""];let t=(()=>{var r;class n extends l.R0{constructor(i){super("line",i)}getConfig(){return{coordinateSystem:this.coordinateSystem,xAxisIndex:this.xAxisIndex,yAxisIndex:this.yAxisIndex,polarIndex:this.polarIndex,symbol:this.symbol,symbolSize:this.symbolSize,symbolRotate:this.symbolRotate,symbolKeepAspect:this.symbolKeepAspect,symbolOffset:this.symbolOffset,showSymbol:this.showSymbol,showAllSymbol:this.showAllSymbol,hoverAnimation:this.hoverAnimation,legendHoverLink:this.legendHoverLink,stack:this.stack,cursor:this.cursor,connectNulls:this.connectNulls,clipOverflow:this.clipOverflow,step:this.step,label:this.label,itemStyle:this.itemStyle,lineStyle:this.lineStyle,areaStyle:this.areaStyle,emphasis:this.emphasis,smooth:this.smooth,smoothMonotone:this.smoothMonotone,sampling:this.sampling,dimensions:this.dimensions,encode:this.encode,seriesLayoutBy:this.seriesLayoutBy,datasetIndex:this.datasetIndex,markPoint:this.markPoint,markLine:this.markLine,markArea:this.markArea,zlevel:this.zlevel,z:this.z,silent:this.silent}}}return(r=n).\u0275fac=function(i){return new(i||r)(a.Y36(l.ij))},r.\u0275cmp=a.Xpm({type:r,selectors:[["td-chart-series","td-line",""]],inputs:{config:"config",id:"id",name:"name",color:"color",data:"data",animation:"animation",animationThreshold:"animationThreshold",animationDuration:"animationDuration",animationEasing:"animationEasing",animationDelay:"animationDelay",animationDurationUpdate:"animationDurationUpdate",animationEasingUpdate:"animationEasingUpdate",animationDelayUpdate:"animationDelayUpdate",tooltip:"tooltip",coordinateSystem:"coordinateSystem",xAxisIndex:"xAxisIndex",yAxisIndex:"yAxisIndex",polarIndex:"polarIndex",symbol:"symbol",symbolSize:"symbolSize",symbolRotate:"symbolRotate",symbolKeepAspect:"symbolKeepAspect",symbolOffset:"symbolOffset",showSymbol:"showSymbol",showAllSymbol:"showAllSymbol",hoverAnimation:"hoverAnimation",legendHoverLink:"legendHoverLink",stack:"stack",cursor:"cursor",connectNulls:"connectNulls",clipOverflow:"clipOverflow",step:"step",label:"label",itemStyle:"itemStyle",lineStyle:"lineStyle",areaStyle:"areaStyle",emphasis:"emphasis",smooth:"smooth",smoothMonotone:"smoothMonotone",sampling:"sampling",dimensions:"dimensions",encode:"encode",seriesLayoutBy:"seriesLayoutBy",datasetIndex:"datasetIndex",markPoint:"markPoint",markLine:"markLine",markArea:"markArea",zlevel:"zlevel",z:"z",silent:"silent"},features:[a._Bn([{provide:l.R0,useExisting:(0,a.Gpc)(()=>r)}]),a.qOj],attrs:d,decls:0,vars:0,template:function(i,u){},encapsulation:2,changeDetection:0}),n})()},81924:(T,g,e)=>{e.d(g,{Uy:()=>r});var a=e(96814),d=(e(90230),e(65879));let r=(()=>{var n;class m{}return(n=m).\u0275fac=function(u){return new(u||n)},n.\u0275mod=d.oAB({type:n}),n.\u0275inj=d.cJS({imports:[a.ez]}),m})()},52514:(T,g,e)=>{e.d(g,{Po:()=>r});var a=e(96814),d=(e(13063),e(65879));let r=(()=>{var n;class m{}return(n=m).\u0275fac=function(u){return new(u||n)},n.\u0275mod=d.oAB({type:n}),n.\u0275inj=d.cJS({imports:[a.ez]}),m})()},13063:(T,g,e)=>{e.d(g,{G:()=>n,O:()=>m});var a=e(65879),l=e(23421),d=e(96814);const t=["toolboxContent"];function r(i,u){}let n=(()=>{var i;class u{}return(i=u).\u0275fac=function(c){return new(c||i)},i.\u0275dir=a.lG2({type:i,selectors:[["ng-template","tdViewDataFormatter",""]]}),u})(),m=(()=>{var i;class u{constructor(c,y,f){this._changeDetectorRef=c,this._elementRef=y,this._optionsService=f,this._state={},this.config={},this.show=!0,this.showTitle=!0,this.transitionDuration=.5,this.left="auto",this.top="auto",this.right="auto",this.bottom="auto",this.width="auto",this.height="auto"}ngOnChanges(){this._setOptions()}ngOnDestroy(){this._removeOption()}_setOptions(){this._checkFormatterTemplate();const c=(0,l.t8)(this._state,{show:this.show,name:this.trigger,orient:this.orient,itemSize:this.itemSize,itemGap:this.itemGap,showTitle:this.showTitle,label:this.label,feature:this.feature,iconStyle:this.iconStyle,zlevel:this.zlevel,z:this.z,transitionDuration:this.transitionDuration,left:this.left,top:this.top,right:this.right,bottom:this.bottom,width:this.width,height:this.height},this.config?this.config:{});this._optionsService.setOption("toolbox",c)}_removeOption(){this._optionsService.clearOption("toolbox")}_checkFormatterTemplate(){this.formatterTemplate&&(this.feature={...this.feature,dataView:{...this.feature?.dataView,optionToContent:this._optionToContentFormatter()}})}_optionToContentFormatter(){return()=>(this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.innerHTML)}}return(i=u).\u0275fac=function(c){return new(c||i)(a.Y36(a.sBO),a.Y36(a.SBq),a.Y36(l.ij))},i.\u0275cmp=a.Xpm({type:i,selectors:[["td-chart-toolbox"]],contentQueries:function(c,y,f){if(1&c&&a.Suo(f,n,5,a.Rgc),2&c){let x;a.iGM(x=a.CRH())&&(y.formatterTemplate=x.first)}},viewQuery:function(c,y){if(1&c&&a.Gf(t,7),2&c){let f;a.iGM(f=a.CRH())&&(y.fullTemplate=f.first)}},inputs:{config:"config",show:"show",trigger:"trigger",orient:"orient",itemSize:"itemSize",itemGap:"itemGap",showTitle:"showTitle",label:"label",feature:"feature",iconStyle:"iconStyle",zlevel:"zlevel",z:"z",transitionDuration:"transitionDuration",left:"left",top:"top",right:"right",bottom:"bottom",width:"width",height:"height"},features:[a.TTD],decls:2,vars:1,consts:[[3,"ngTemplateOutlet"],["toolboxContent",""]],template:function(c,y){1&c&&a.YNc(0,r,0,0,"ng-template",0,1,a.W1O),2&c&&a.Q6J("ngTemplateOutlet",y.formatterTemplate)},dependencies:[d.tP],encapsulation:2,changeDetection:0}),u})()}}]);