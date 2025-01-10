"use strict";(self.webpackChunkdocs_app=self.webpackChunkdocs_app||[]).push([[3554],{254:(E,m,e)=>{e.d(m,{j:()=>Et});var a=e(74523),i=e(14825),l=e(80958),t=e(54438),n=e(29838),r=e(346),d=e(24663),c=e(14925),_=e(11817),p=e(6829),g=e(60177),D=e(53719),x=e(82798),M=e(86600),A=e(99213),b=e(7081);const f=()=>[8.3,8.5],C=()=>[8.6,8.7],T=()=>[8.8,9.2],I=()=>[10.5,9.9],P=()=>[10.7,10.2],L=()=>[10.8,10.3],S=()=>[11,11.2],R=()=>[11,11.3],U=()=>[11.1,11.3],B=()=>[11.2,11.5],k=()=>[11.3,11.6],J=()=>[11.4,11.7],W=()=>[11.4,11.8],K=()=>[11.7,12],G=()=>[12,12],H=()=>[12.9,12.5],z=()=>[12.9,12.9],F=()=>[13.3,13],$=()=>[13.7,13.5],N=()=>[13.8,14,8],j=()=>[14,15.1],V=()=>[14.2,15.2],Y=()=>[14.5,15.3],w=()=>[16,15.8],Q=()=>[16.3,16.2],X=()=>[17.3,16.3],Z=()=>[17.5,16.4],q=()=>[17.9,19.5],tt=()=>[18,19.8],et=()=>[18,20.1],at=()=>[20.6,20.2],st=(s,u,o,v,h,O,y,Dt,Mt,xt,Ot,ft,Ct,At,bt,Tt,It,Pt,Lt,St,Rt,Ut,Bt,kt,Jt,Wt,Kt,Gt,Ht,zt,Ft)=>[s,u,o,v,h,O,y,Dt,Mt,xt,Ot,ft,Ct,At,bt,Tt,It,Pt,Lt,St,Rt,Ut,Bt,kt,Jt,Wt,Kt,Gt,Ht,zt,Ft],ot=()=>["Data View","Turn Off","Refresh"],it=s=>({readOnly:!0,title:"View Data",lang:s}),nt=()=>({zoom:"Zoom",back:"Back"}),rt=s=>({title:s}),lt=()=>["line","bar"],ct=()=>({line:"Line",bar:"Bar"}),mt=(s,u)=>({type:s,title:u}),ht=()=>({title:"Restore"}),dt=(s,u,o,v)=>({dataView:s,dataZoom:u,magicType:o,restore:v}),_t=()=>({type:"dotted"}),pt=s=>({lineStyle:s});function gt(s,u){if(1&s&&(t.j41(0,"mat-option",13),t.EFF(1),t.k0s()),2&s){const o=u.$implicit;t.Y8G("value",o),t.R7$(),t.SpI(" ",o," ")}}function ut(s,u){if(1&s&&(t.j41(0,"mat-option",13),t.EFF(1),t.k0s()),2&s){const o=u.$implicit;t.Y8G("value",o),t.R7$(),t.SpI(" ",o," ")}}function yt(s,u){if(1&s&&(t.qex(0),t.j41(1,"div",15)(2,"mat-icon")(3,"span"),t.EFF(4,"people"),t.k0s()(),t.j41(5,"span",16),t.EFF(6),t.k0s()(),t.bVm()),2&s){const o=t.XpG().$implicit;t.R7$(3),t.xc7("color",o.color),t.R7$(3),t.Lme(" ",o.seriesName?o.seriesName:o.name,": ",o.value," ")}}function vt(s,u){1&s&&t.DNE(0,yt,7,4,"ng-container",14),2&s&&t.Y8G("ngIf",u.$implicit)}let Et=(()=>{class s{_cdr;themeSelector;themes=(0,i.$D)();selectedTheme;methods=["squareRoot","scott","freedmanDiaconis","sturges"];selectedMethod="squareRoot";constructor(o,v){this._cdr=o,this.themeSelector=v}ngOnInit(){var o=this;return(0,a.A)(function*(){o.selectedTheme=o.themeSelector.selected,o._cdr.markForCheck()})()}selectChartTheme(o){this.themeSelector.select(o)}static \u0275fac=function(v){return new(v||s)(t.rXU(t.gRc),t.rXU(l.S))};static \u0275cmp=t.VBU({type:s,selectors:[["histogram-demo-basic"]],decls:21,vars:111,consts:[["flex","","layout","row","layout-align","start center"],["hide-xs","",1,"mat-subtitle-1","pad-left","pad-right","push-bottom-none"],[3,"valueChange","value"],[3,"value",4,"ngFor","ngForOf"],[3,"themeName"],[3,"source"],[3,"show","right","top","feature"],[3,"trigger"],["tdTooltipFormatter",""],[3,"show","position","type","boundaryGap"],[3,"show","type","position","splitLine"],["td-histogram","",3,"method","name"],["td-histogram","",3,"method","name","datasetIndex"],[3,"value"],[4,"ngIf"],["layout","row","layout-align","start center"],[1,"mat-caption","pad-left-sm"]],template:function(v,h){1&v&&(t.j41(0,"div",0)(1,"div",1),t.EFF(2," Chart Theme: "),t.k0s(),t.j41(3,"mat-form-field")(4,"mat-select",2),t.mxI("valueChange",function(y){return t.DH7(h.selectedTheme,y)||(h.selectedTheme=y),y}),t.bIt("valueChange",function(y){return h.selectChartTheme(y)}),t.DNE(5,gt,2,2,"mat-option",3),t.k0s()(),t.j41(6,"div",1),t.EFF(7," Binning method: "),t.k0s(),t.j41(8,"mat-form-field")(9,"mat-select",2),t.mxI("valueChange",function(y){return t.DH7(h.selectedMethod,y)||(h.selectedMethod=y),y}),t.DNE(10,ut,2,2,"mat-option",3),t.k0s()()(),t.j41(11,"td-chart",4),t.nI1(12,"async"),t.nrm(13,"td-chart-dataset",5)(14,"td-chart-toolbox",6),t.j41(15,"td-chart-tooltip",7),t.DNE(16,vt,1,1,"ng-template",8),t.k0s(),t.nrm(17,"td-chart-x-axis",9)(18,"td-chart-y-axis",10)(19,"td-chart-series",11)(20,"td-chart-series",12),t.k0s()),2&v&&(t.R7$(4),t.R50("value",h.selectedTheme),t.R7$(),t.Y8G("ngForOf",h.themes),t.R7$(4),t.R50("value",h.selectedMethod),t.R7$(),t.Y8G("ngForOf",h.methods),t.R7$(),t.xc7("height",300,"px"),t.Y8G("themeName",t.bMT(12,26,h.themeSelector.selected$)),t.R7$(2),t.Y8G("source",t.zJS(59,st,[t.lJ4(28,f),t.lJ4(29,C),t.lJ4(30,T),t.lJ4(31,I),t.lJ4(32,P),t.lJ4(33,L),t.lJ4(34,S),t.lJ4(35,R),t.lJ4(36,U),t.lJ4(37,B),t.lJ4(38,k),t.lJ4(39,J),t.lJ4(40,W),t.lJ4(41,K),t.lJ4(42,G),t.lJ4(43,H),t.lJ4(44,z),t.lJ4(45,F),t.lJ4(46,$),t.lJ4(47,N),t.lJ4(48,j),t.lJ4(49,V),t.lJ4(50,Y),t.lJ4(51,w),t.lJ4(52,Q),t.lJ4(53,X),t.lJ4(54,Z),t.lJ4(55,q),t.lJ4(56,tt),t.lJ4(57,et),t.lJ4(58,at)])),t.R7$(),t.Y8G("show",!0)("right",30)("top",10)("feature",t.ziG(103,dt,t.eq3(92,it,t.lJ4(91,ot)),t.eq3(95,rt,t.lJ4(94,nt)),t.l_i(99,mt,t.lJ4(97,lt),t.lJ4(98,ct)),t.lJ4(102,ht))),t.R7$(),t.Y8G("trigger","item"),t.R7$(2),t.Y8G("show",!0)("position","bottom")("type","category")("boundaryGap",!0),t.R7$(),t.Y8G("show",!0)("type","value")("position","right")("splitLine",t.eq3(109,pt,t.lJ4(108,_t))),t.R7$(),t.Y8G("method",h.selectedMethod)("name","Sparrows"),t.R7$(),t.Y8G("method",h.selectedMethod)("name","Crows")("datasetIndex",2))},dependencies:[n.y,r.j,d.G,c.g,_.Ju,_.Bq,p.t,g.Sq,g.bT,D.rl,x.VO,M.wT,A.An,b.L,g.Jj],styles:["[_nghost-%COMP%]{width:100%}"],changeDetection:0})}return s})()},46588:(E,m,e)=>{e.d(m,{s:()=>p});var a=e(60177),i=e(82798),l=e(99213),t=e(14825),n=e(31124),r=e(32036),d=e(6626),c=e(2593),_=e(54438);let p=(()=>{class g{static \u0275fac=function(M){return new(M||g)};static \u0275mod=_.$C({type:g});static \u0275inj=_.G2t({imports:[t.wD,n.qd,d.q8,c.K6,a.MD,i.Ve,l.m_,r.rC]})}return g})()},60473:(E,m,e)=>{e.d(m,{M:()=>t});var a=e(54438),i=e(14825);const l=["td-bar",""];let t=(()=>{class n extends i.Jg{coordinateSystem;xAxisIndex;yAxisIndex;legendHoverLink;stack;cursor;label;itemStyle;emphasis;barWidth;barMaxWidth;barMinHeight;barGap;barCategoryGap;large;largeThreshold;progressive;progressiveThreshold;progressiveChunkMode;dimensions;encode;seriesLayoutBy;datasetIndex;markPoint;markLine;markArea;zlevel;z;constructor(d){super("bar",d)}getConfig(){return{coordinateSystem:this.coordinateSystem,xAxisIndex:this.xAxisIndex,yAxisIndex:this.yAxisIndex,legendHoverLink:this.legendHoverLink,stack:this.stack,cursor:this.cursor,label:this.label,itemStyle:this.itemStyle,emphasis:this.emphasis,barWidth:this.barWidth,barMaxWidth:this.barMaxWidth,barMinHeight:this.barMinHeight,barGap:this.barGap,barCategoryGap:this.barCategoryGap,large:this.large,largeThreshold:this.largeThreshold,progressive:this.progressive,progressiveThreshold:this.progressiveThreshold,progressiveChunkMode:this.progressiveChunkMode,dimensions:this.dimensions,encode:this.encode,seriesLayoutBy:this.seriesLayoutBy,datasetIndex:this.datasetIndex,markPoint:this.markPoint,markLine:this.markLine,markArea:this.markArea,zlevel:this.zlevel,z:this.z}}static \u0275fac=function(c){return new(c||n)(a.rXU(i.QQ))};static \u0275cmp=a.VBU({type:n,selectors:[["td-chart-series","td-bar",""]],inputs:{config:"config",id:"id",name:"name",color:"color",data:"data",animation:"animation",animationThreshold:"animationThreshold",animationDuration:"animationDuration",animationEasing:"animationEasing",animationDelay:"animationDelay",animationDurationUpdate:"animationDurationUpdate",animationEasingUpdate:"animationEasingUpdate",animationDelayUpdate:"animationDelayUpdate",tooltip:"tooltip",coordinateSystem:"coordinateSystem",xAxisIndex:"xAxisIndex",yAxisIndex:"yAxisIndex",legendHoverLink:"legendHoverLink",stack:"stack",cursor:"cursor",label:"label",itemStyle:"itemStyle",emphasis:"emphasis",barWidth:"barWidth",barMaxWidth:"barMaxWidth",barMinHeight:"barMinHeight",barGap:"barGap",barCategoryGap:"barCategoryGap",large:"large",largeThreshold:"largeThreshold",progressive:"progressive",progressiveThreshold:"progressiveThreshold",progressiveChunkMode:"progressiveChunkMode",dimensions:"dimensions",encode:"encode",seriesLayoutBy:"seriesLayoutBy",datasetIndex:"datasetIndex",markPoint:"markPoint",markLine:"markLine",markArea:"markArea",zlevel:"zlevel",z:"z"},features:[a.Jv_([{provide:i.Jg,useExisting:(0,a.Rfq)(()=>n)}]),a.Vt3],attrs:l,decls:0,vars:0,template:function(c,_){},encapsulation:2,changeDetection:0})}return n})()},31124:(E,m,e)=>{e.d(m,{qd:()=>n,M_:()=>i.M});var a=e(60177),i=e(60473),l=e(54438);let n=(()=>{class r{static \u0275fac=function(_){return new(_||r)};static \u0275mod=l.$C({type:r});static \u0275inj=l.G2t({imports:[a.MD]})}return r})()},7081:(E,m,e)=>{e.d(m,{L:()=>d});var a=e(54438),i=e(14825),l=e(31124),t=e(23831);const r=["td-histogram",""];let d=(()=>{class c extends l.M_{source;method;constructor(p){super(p)}ngOnChanges(){let p=[];if(!this.source){const D=this.optionsService.getOption("dataset");this.source=D?.source??[]}if(this.source?.some(D=>Array.isArray(D))){const x=this.getConfig().datasetIndex??1,M=this.source;p=M[0].map((b,f)=>M.map(C=>C[f]))[x-1]??[]}else p=this.source;const g=t.histogram(p,this.method??"squareRoot");this.data=g.data,this.setOptions()}getConfig(){return{method:this.method,coordinateSystem:this.coordinateSystem,xAxisIndex:this.xAxisIndex,yAxisIndex:this.yAxisIndex,legendHoverLink:this.legendHoverLink,stack:this.stack,cursor:this.cursor,label:this.label,itemStyle:this.itemStyle,emphasis:this.emphasis,barWidth:this.barWidth,barMaxWidth:this.barMaxWidth,barMinHeight:this.barMinHeight,barGap:this.barGap,barCategoryGap:this.barCategoryGap,large:this.large,largeThreshold:this.largeThreshold,progressive:this.progressive,progressiveThreshold:this.progressiveThreshold,progressiveChunkMode:this.progressiveChunkMode,dimensions:this.dimensions,encode:this.encode,seriesLayoutBy:this.seriesLayoutBy,datasetIndex:this.datasetIndex,markPoint:this.markPoint,markLine:this.markLine,markArea:this.markArea,zlevel:this.zlevel,z:this.z}}setOptions(){const p=(0,i.J)(this._state,{id:this.id,type:this.type,name:this.name,color:this.color,data:this.data,animation:this.animation,animationThreshold:this.animationThreshold,animationDuration:this.animationDuration,animationEasing:this.animationEasing,animationDelay:this.animationDelay,animationDurationUpdate:this.animationDurationUpdate,animationEasingUpdate:this.animationEasingUpdate,animationDelayUpdate:this.animationDelayUpdate,tooltip:this.tooltip},this.getConfig(),this._options,this.config?this.config:{});this.optionsService.setArrayOption("series",p)}static \u0275fac=function(g){return new(g||c)(a.rXU(i.QQ))};static \u0275cmp=a.VBU({type:c,selectors:[["td-chart-series","td-histogram",""]],inputs:{config:"config",id:"id",name:"name",color:"color",data:"data",animation:"animation",animationThreshold:"animationThreshold",animationDuration:"animationDuration",animationEasing:"animationEasing",animationDelay:"animationDelay",animationDurationUpdate:"animationDurationUpdate",animationEasingUpdate:"animationEasingUpdate",animationDelayUpdate:"animationDelayUpdate",tooltip:"tooltip",source:"source",method:"method"},features:[a.Jv_([{provide:i.Jg,useExisting:(0,a.Rfq)(()=>c)}]),a.Vt3,a.OA$],attrs:r,decls:0,vars:0,template:function(g,D){},encapsulation:2,changeDetection:0})}return c})()},32036:(E,m,e)=>{e.d(m,{rC:()=>n});var a=e(60177),l=(e(7081),e(54438));let n=(()=>{class r{static \u0275fac=function(_){return new(_||r)};static \u0275mod=l.$C({type:r});static \u0275inj=l.G2t({imports:[a.MD]})}return r})()},59169:(E,m,e)=>{e.d(m,{R:()=>t});var a=e(54438),i=e(14825);const l=["td-line",""];let t=(()=>{class n extends i.Jg{coordinateSystem;xAxisIndex;yAxisIndex;polarIndex;symbol;symbolSize;symbolRotate;symbolKeepAspect;symbolOffset;showSymbol;showAllSymbol;hoverAnimation;legendHoverLink;stack;cursor;connectNulls;clipOverflow;step;label;itemStyle;lineStyle;areaStyle;emphasis;smooth;smoothMonotone;sampling;dimensions;encode;seriesLayoutBy;datasetIndex;markPoint;markLine;markArea;zlevel;z;silent;constructor(d){super("line",d)}getConfig(){return{coordinateSystem:this.coordinateSystem,xAxisIndex:this.xAxisIndex,yAxisIndex:this.yAxisIndex,polarIndex:this.polarIndex,symbol:this.symbol,symbolSize:this.symbolSize,symbolRotate:this.symbolRotate,symbolKeepAspect:this.symbolKeepAspect,symbolOffset:this.symbolOffset,showSymbol:this.showSymbol,showAllSymbol:this.showAllSymbol,hoverAnimation:this.hoverAnimation,legendHoverLink:this.legendHoverLink,stack:this.stack,cursor:this.cursor,connectNulls:this.connectNulls,clipOverflow:this.clipOverflow,step:this.step,label:this.label,itemStyle:this.itemStyle,lineStyle:this.lineStyle,areaStyle:this.areaStyle,emphasis:this.emphasis,smooth:this.smooth,smoothMonotone:this.smoothMonotone,sampling:this.sampling,dimensions:this.dimensions,encode:this.encode,seriesLayoutBy:this.seriesLayoutBy,datasetIndex:this.datasetIndex,markPoint:this.markPoint,markLine:this.markLine,markArea:this.markArea,zlevel:this.zlevel,z:this.z,silent:this.silent}}static \u0275fac=function(c){return new(c||n)(a.rXU(i.QQ))};static \u0275cmp=a.VBU({type:n,selectors:[["td-chart-series","td-line",""]],inputs:{config:"config",id:"id",name:"name",color:"color",data:"data",animation:"animation",animationThreshold:"animationThreshold",animationDuration:"animationDuration",animationEasing:"animationEasing",animationDelay:"animationDelay",animationDurationUpdate:"animationDurationUpdate",animationEasingUpdate:"animationEasingUpdate",animationDelayUpdate:"animationDelayUpdate",tooltip:"tooltip",coordinateSystem:"coordinateSystem",xAxisIndex:"xAxisIndex",yAxisIndex:"yAxisIndex",polarIndex:"polarIndex",symbol:"symbol",symbolSize:"symbolSize",symbolRotate:"symbolRotate",symbolKeepAspect:"symbolKeepAspect",symbolOffset:"symbolOffset",showSymbol:"showSymbol",showAllSymbol:"showAllSymbol",hoverAnimation:"hoverAnimation",legendHoverLink:"legendHoverLink",stack:"stack",cursor:"cursor",connectNulls:"connectNulls",clipOverflow:"clipOverflow",step:"step",label:"label",itemStyle:"itemStyle",lineStyle:"lineStyle",areaStyle:"areaStyle",emphasis:"emphasis",smooth:"smooth",smoothMonotone:"smoothMonotone",sampling:"sampling",dimensions:"dimensions",encode:"encode",seriesLayoutBy:"seriesLayoutBy",datasetIndex:"datasetIndex",markPoint:"markPoint",markLine:"markLine",markArea:"markArea",zlevel:"zlevel",z:"z",silent:"silent"},features:[a.Jv_([{provide:i.Jg,useExisting:(0,a.Rfq)(()=>n)}]),a.Vt3],attrs:l,decls:0,vars:0,template:function(c,_){},encapsulation:2,changeDetection:0})}return n})()},66364:(E,m,e)=>{e.d(m,{Tp:()=>n});var a=e(60177),l=(e(59169),e(54438));let n=(()=>{class r{static \u0275fac=function(_){return new(_||r)};static \u0275mod=l.$C({type:r});static \u0275inj=l.G2t({imports:[a.MD]})}return r})()}}]);