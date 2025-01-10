"use strict";(self.webpackChunkdocs_app=self.webpackChunkdocs_app||[]).push([[752],{86670:(f,l,t)=>{t.r(l),t.d(l,{CombinationModule:()=>F});var o=t(60177),a=t(74710),r=t(82798),d=t(99213),i=t(84843),n=t(14825),m=t(66364),s=t(31124),u=t(6626),y=t(2593),c=t(34772),g=t(74523),x=t(80958),e=t(54438),C=t(53719),S=t(86600),A=t(29838),M=t(346),D=t(24663),O=t(59169),E=t(60473);const I=()=>({show:!0}),L=h=>({tooltip:h}),z=()=>["Electronics","Toys","Grocery","Appliances","Automotive","Sports"],k=()=>[150,130,150,120,150,120],G=()=>[80,122,80,120,80,120];function R(h,w){if(1&h&&(e.j41(0,"mat-option",9),e.EFF(1),e.k0s()),2&h){const p=w.$implicit;e.Y8G("value",p),e.R7$(),e.SpI(" ",p," ")}}let U=(()=>{class h{_cdr;themeSelector;themes=(0,n.$D)();selectedTheme;config={xAxis:[{data:["Electronics","Toys","Grocery","Appliances","Automotive","Sports"]}],yAxis:[{show:!0,type:"value",axisLabel:{inside:!1},min:0,max:300}],series:[{type:"bar",markPoint:{data:[{name:"Target",value:130,xAxis:1,yAxis:130}]},name:"Yesterday",data:[150,130,150,120,150,120]},{type:"line",markPoint:{data:[{name:"Target",value:100,xAxis:1,yAxis:121}],symbolRotate:180,label:{offset:[0,10]}},markLine:{data:[{name:"Average",value:30,xAxis:1,yAxis:30}],symbol:"circle"},name:"Today",data:[80,122,80,120,80,120]}],tooltip:{show:!0,trigger:"item",showContent:!0}};constructor(p,v){this._cdr=p,this.themeSelector=v}ngOnInit(){var p=this;return(0,g.A)(function*(){p.selectedTheme=p.themeSelector.selected,p._cdr.markForCheck()})()}selectChartTheme(p){this.themeSelector.select(p)}static \u0275fac=function(v){return new(v||h)(e.rXU(e.gRc),e.rXU(x.S))};static \u0275cmp=e.VBU({type:h,selectors:[["types-combination"]],decls:12,vars:24,consts:[["layout","row","layout-align","start center"],["hide-xs","",1,"mat-subtitle-1","pad-left","pad-right","push-bottom-none"],[3,"valueChange","value"],[3,"value",4,"ngFor","ngForOf"],[3,"themeName","config"],[3,"show","data"],[3,"show","type","min","max"],["td-bar","",3,"data","name"],["td-line","",3,"data","name"],[3,"value"]],template:function(v,T){1&v&&(e.j41(0,"div",0)(1,"div",1),e.EFF(2," Chart Theme: "),e.k0s(),e.j41(3,"mat-form-field")(4,"mat-select",2),e.mxI("valueChange",function(b){return e.DH7(T.selectedTheme,b)||(T.selectedTheme=b),b}),e.bIt("valueChange",function(b){return T.selectChartTheme(b)}),e.DNE(5,R,2,2,"mat-option",3),e.k0s()()(),e.j41(6,"td-chart",4),e.nI1(7,"async"),e.nrm(8,"td-chart-x-axis",5)(9,"td-chart-y-axis",6)(10,"td-chart-series",7)(11,"td-chart-series",8),e.k0s()),2&v&&(e.R7$(4),e.R50("value",T.selectedTheme),e.R7$(),e.Y8G("ngForOf",T.themes),e.R7$(),e.xc7("height",300,"px"),e.Y8G("themeName",e.bMT(7,16,T.themeSelector.selected$))("config",e.eq3(19,L,e.lJ4(18,I))),e.R7$(2),e.Y8G("show",!0)("data",e.lJ4(21,z)),e.R7$(),e.Y8G("show",!0)("type","value")("min",0)("max",300),e.R7$(),e.Y8G("data",e.lJ4(22,k))("name","Yesterday"),e.R7$(),e.Y8G("data",e.lJ4(23,G))("name","Today"))},dependencies:[o.Sq,C.rl,r.VO,S.wT,A.y,M.j,D.G,O.R,E.M,o.Jj],styles:["[_nghost-%COMP%]{width:100%}"],changeDetection:0})}return h})();var P=t(2806);const B=(0,c.M5)({overviewDemoComponent:U,id:"combination"});let F=(()=>{class h{static \u0275fac=function(v){return new(v||h)};static \u0275mod=e.$C({type:h});static \u0275inj=e.G2t({imports:[o.MD,r.Ve,d.m_,n.wD,m.Tp,s.qd,u.q8,y.K6,i.K,P.M,a.iI.forChild(B)]})}return h})()},60473:(f,l,t)=>{t.d(l,{M:()=>d});var o=t(54438),a=t(14825);const r=["td-bar",""];let d=(()=>{class i extends a.Jg{coordinateSystem;xAxisIndex;yAxisIndex;legendHoverLink;stack;cursor;label;itemStyle;emphasis;barWidth;barMaxWidth;barMinHeight;barGap;barCategoryGap;large;largeThreshold;progressive;progressiveThreshold;progressiveChunkMode;dimensions;encode;seriesLayoutBy;datasetIndex;markPoint;markLine;markArea;zlevel;z;constructor(m){super("bar",m)}getConfig(){return{coordinateSystem:this.coordinateSystem,xAxisIndex:this.xAxisIndex,yAxisIndex:this.yAxisIndex,legendHoverLink:this.legendHoverLink,stack:this.stack,cursor:this.cursor,label:this.label,itemStyle:this.itemStyle,emphasis:this.emphasis,barWidth:this.barWidth,barMaxWidth:this.barMaxWidth,barMinHeight:this.barMinHeight,barGap:this.barGap,barCategoryGap:this.barCategoryGap,large:this.large,largeThreshold:this.largeThreshold,progressive:this.progressive,progressiveThreshold:this.progressiveThreshold,progressiveChunkMode:this.progressiveChunkMode,dimensions:this.dimensions,encode:this.encode,seriesLayoutBy:this.seriesLayoutBy,datasetIndex:this.datasetIndex,markPoint:this.markPoint,markLine:this.markLine,markArea:this.markArea,zlevel:this.zlevel,z:this.z}}static \u0275fac=function(s){return new(s||i)(o.rXU(a.QQ))};static \u0275cmp=o.VBU({type:i,selectors:[["td-chart-series","td-bar",""]],inputs:{config:"config",id:"id",name:"name",color:"color",data:"data",animation:"animation",animationThreshold:"animationThreshold",animationDuration:"animationDuration",animationEasing:"animationEasing",animationDelay:"animationDelay",animationDurationUpdate:"animationDurationUpdate",animationEasingUpdate:"animationEasingUpdate",animationDelayUpdate:"animationDelayUpdate",tooltip:"tooltip",coordinateSystem:"coordinateSystem",xAxisIndex:"xAxisIndex",yAxisIndex:"yAxisIndex",legendHoverLink:"legendHoverLink",stack:"stack",cursor:"cursor",label:"label",itemStyle:"itemStyle",emphasis:"emphasis",barWidth:"barWidth",barMaxWidth:"barMaxWidth",barMinHeight:"barMinHeight",barGap:"barGap",barCategoryGap:"barCategoryGap",large:"large",largeThreshold:"largeThreshold",progressive:"progressive",progressiveThreshold:"progressiveThreshold",progressiveChunkMode:"progressiveChunkMode",dimensions:"dimensions",encode:"encode",seriesLayoutBy:"seriesLayoutBy",datasetIndex:"datasetIndex",markPoint:"markPoint",markLine:"markLine",markArea:"markArea",zlevel:"zlevel",z:"z"},features:[o.Jv_([{provide:a.Jg,useExisting:(0,o.Rfq)(()=>i)}]),o.Vt3],attrs:r,decls:0,vars:0,template:function(s,u){},encapsulation:2,changeDetection:0})}return i})()},31124:(f,l,t)=>{t.d(l,{qd:()=>i,M_:()=>a.M});var o=t(60177),a=t(60473),r=t(54438);let i=(()=>{class n{static \u0275fac=function(u){return new(u||n)};static \u0275mod=r.$C({type:n});static \u0275inj=r.G2t({imports:[o.MD]})}return n})()},59169:(f,l,t)=>{t.d(l,{R:()=>d});var o=t(54438),a=t(14825);const r=["td-line",""];let d=(()=>{class i extends a.Jg{coordinateSystem;xAxisIndex;yAxisIndex;polarIndex;symbol;symbolSize;symbolRotate;symbolKeepAspect;symbolOffset;showSymbol;showAllSymbol;hoverAnimation;legendHoverLink;stack;cursor;connectNulls;clipOverflow;step;label;itemStyle;lineStyle;areaStyle;emphasis;smooth;smoothMonotone;sampling;dimensions;encode;seriesLayoutBy;datasetIndex;markPoint;markLine;markArea;zlevel;z;silent;constructor(m){super("line",m)}getConfig(){return{coordinateSystem:this.coordinateSystem,xAxisIndex:this.xAxisIndex,yAxisIndex:this.yAxisIndex,polarIndex:this.polarIndex,symbol:this.symbol,symbolSize:this.symbolSize,symbolRotate:this.symbolRotate,symbolKeepAspect:this.symbolKeepAspect,symbolOffset:this.symbolOffset,showSymbol:this.showSymbol,showAllSymbol:this.showAllSymbol,hoverAnimation:this.hoverAnimation,legendHoverLink:this.legendHoverLink,stack:this.stack,cursor:this.cursor,connectNulls:this.connectNulls,clipOverflow:this.clipOverflow,step:this.step,label:this.label,itemStyle:this.itemStyle,lineStyle:this.lineStyle,areaStyle:this.areaStyle,emphasis:this.emphasis,smooth:this.smooth,smoothMonotone:this.smoothMonotone,sampling:this.sampling,dimensions:this.dimensions,encode:this.encode,seriesLayoutBy:this.seriesLayoutBy,datasetIndex:this.datasetIndex,markPoint:this.markPoint,markLine:this.markLine,markArea:this.markArea,zlevel:this.zlevel,z:this.z,silent:this.silent}}static \u0275fac=function(s){return new(s||i)(o.rXU(a.QQ))};static \u0275cmp=o.VBU({type:i,selectors:[["td-chart-series","td-line",""]],inputs:{config:"config",id:"id",name:"name",color:"color",data:"data",animation:"animation",animationThreshold:"animationThreshold",animationDuration:"animationDuration",animationEasing:"animationEasing",animationDelay:"animationDelay",animationDurationUpdate:"animationDurationUpdate",animationEasingUpdate:"animationEasingUpdate",animationDelayUpdate:"animationDelayUpdate",tooltip:"tooltip",coordinateSystem:"coordinateSystem",xAxisIndex:"xAxisIndex",yAxisIndex:"yAxisIndex",polarIndex:"polarIndex",symbol:"symbol",symbolSize:"symbolSize",symbolRotate:"symbolRotate",symbolKeepAspect:"symbolKeepAspect",symbolOffset:"symbolOffset",showSymbol:"showSymbol",showAllSymbol:"showAllSymbol",hoverAnimation:"hoverAnimation",legendHoverLink:"legendHoverLink",stack:"stack",cursor:"cursor",connectNulls:"connectNulls",clipOverflow:"clipOverflow",step:"step",label:"label",itemStyle:"itemStyle",lineStyle:"lineStyle",areaStyle:"areaStyle",emphasis:"emphasis",smooth:"smooth",smoothMonotone:"smoothMonotone",sampling:"sampling",dimensions:"dimensions",encode:"encode",seriesLayoutBy:"seriesLayoutBy",datasetIndex:"datasetIndex",markPoint:"markPoint",markLine:"markLine",markArea:"markArea",zlevel:"zlevel",z:"z",silent:"silent"},features:[o.Jv_([{provide:a.Jg,useExisting:(0,o.Rfq)(()=>i)}]),o.Vt3],attrs:r,decls:0,vars:0,template:function(s,u){},encapsulation:2,changeDetection:0})}return i})()},66364:(f,l,t)=>{t.d(l,{Tp:()=>i});var o=t(60177),r=(t(59169),t(54438));let i=(()=>{class n{static \u0275fac=function(u){return new(u||n)};static \u0275mod=r.$C({type:n});static \u0275inj=r.G2t({imports:[o.MD]})}return n})()},2593:(f,l,t)=>{t.d(l,{K6:()=>i});var o=t(60177),r=(t(6829),t(54438));let i=(()=>{class n{static \u0275fac=function(u){return new(u||n)};static \u0275mod=r.$C({type:n});static \u0275inj=r.G2t({imports:[o.MD]})}return n})()},6829:(f,l,t)=>{t.d(l,{J:()=>n,t:()=>m});var o=t(54438),a=t(14825),r=t(60177);const d=["toolboxContent"];function i(s,u){}let n=(()=>{class s{static \u0275fac=function(c){return new(c||s)};static \u0275dir=o.FsC({type:s,selectors:[["ng-template","tdViewDataFormatter",""]]})}return s})(),m=(()=>{class s{_changeDetectorRef;_elementRef;_optionsService;_state={};config={};show=!0;trigger;orient;itemSize;itemGap;showTitle=!0;label;feature;iconStyle;zlevel;z;transitionDuration=.5;left="auto";top="auto";right="auto";bottom="auto";width="auto";height="auto";formatterTemplate;fullTemplate;constructor(y,c,g){this._changeDetectorRef=y,this._elementRef=c,this._optionsService=g}ngOnChanges(){this._setOptions()}ngOnDestroy(){this._removeOption()}_setOptions(){this._checkFormatterTemplate();const y=(0,a.J)(this._state,{show:this.show,name:this.trigger,orient:this.orient,itemSize:this.itemSize,itemGap:this.itemGap,showTitle:this.showTitle,label:this.label,feature:this.feature,iconStyle:this.iconStyle,zlevel:this.zlevel,z:this.z,transitionDuration:this.transitionDuration,left:this.left,top:this.top,right:this.right,bottom:this.bottom,width:this.width,height:this.height},this.config?this.config:{});this._optionsService.setOption("toolbox",y)}_removeOption(){this._optionsService.clearOption("toolbox")}_checkFormatterTemplate(){this.formatterTemplate&&(this.feature={...this.feature,dataView:{...this.feature?.dataView,optionToContent:this._optionToContentFormatter()}})}_optionToContentFormatter(){return()=>(this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.innerHTML)}static \u0275fac=function(c){return new(c||s)(o.rXU(o.gRc),o.rXU(o.aKT),o.rXU(a.QQ))};static \u0275cmp=o.VBU({type:s,selectors:[["td-chart-toolbox"]],contentQueries:function(c,g,x){if(1&c&&o.wni(x,n,5,o.C4Q),2&c){let e;o.mGM(e=o.lsd())&&(g.formatterTemplate=e.first)}},viewQuery:function(c,g){if(1&c&&o.GBs(d,7),2&c){let x;o.mGM(x=o.lsd())&&(g.fullTemplate=x.first)}},inputs:{config:"config",show:"show",trigger:"trigger",orient:"orient",itemSize:"itemSize",itemGap:"itemGap",showTitle:"showTitle",label:"label",feature:"feature",iconStyle:"iconStyle",zlevel:"zlevel",z:"z",transitionDuration:"transitionDuration",left:"left",top:"top",right:"right",bottom:"bottom",width:"width",height:"height"},features:[o.OA$],decls:2,vars:1,consts:[["toolboxContent",""],[3,"ngTemplateOutlet"]],template:function(c,g){1&c&&o.DNE(0,i,0,0,"ng-template",1,0,o.C5r),2&c&&o.Y8G("ngTemplateOutlet",g.formatterTemplate)},dependencies:[r.T3],encapsulation:2,changeDetection:0})}return s})()},7707:(f,l,t)=>{t.d(l,{_5:()=>n});var o=t(60177),a=t(99213),d=(t(85901),t(54438));let n=(()=>{class m{static \u0275fac=function(y){return new(y||m)};static \u0275mod=d.$C({type:m});static \u0275inj=d.G2t({imports:[o.MD,a.m_]})}return m})()}}]);