"use strict";(self.webpackChunkdocs_app=self.webpackChunkdocs_app||[]).push([[3021],{2504:(v,D,o)=>{o.d(D,{J:()=>St});var c=o(74523),m=o(14825),g=o(80958),t=o(54438),y=o(29838),d=o(346),u=o(24663),C=o(47177),s=o(89417),a=o(60177),E=o(11817),i=o(6829),P=o(53719),f=o(82798),M=o(86600),I=o(99213),A=o(30450);const R=()=>["Data View","Turn Off","Refresh"],T=e=>({readOnly:!0,title:"View Data",lang:e}),S=()=>({zoom:"Zoom",back:"Back"}),x=e=>({title:e}),b=()=>({title:"Restore"}),U=(e,h,n)=>({dataView:e,dataZoom:h,restore:n}),L=()=>[3.275154,2.957587],B=e=>[e,2.603513],K=e=>[.355083,e],J=()=>[1.852435,3.547351],W=e=>[e,2.552013],l=(e,h)=>[e,h],z=()=>[2.682252,4.007573],G=e=>[e,2.878713],j=()=>[2.441611,.444826],F=e=>[e,3.111284],$=()=>[2.17768,2.387793],k=e=>[e,2.917485],N=()=>[3.625746,2.119041],w=e=>[e,1.325108],V=()=>[2.855808,3.483301],Y=e=>[e,2.856651],H=e=>[.421993,e],X=()=>[1.650821,3.407572],Q=e=>[e,3.384412],Z=()=>[4.513623,3.841029],q=e=>[e,4.607049],tt=()=>[1.919901,4.439368],et=e=>[e,3.918836],ot=()=>[3.598143,1.97597],nt=e=>[e,4.900932],st=()=>[3.914654,3.559303],at=e=>[e,4.166946],it=()=>[1.148946,3.345138],lt=e=>[e,3.548172],ct=e=>[.845762,e],_t=()=>[2.629062,3.535831],rt=e=>[e,2.990517],mt=()=>[4.606999,3.510312],dt=e=>[e,4.023316],ht=e=>[.765015,e],gt=()=>[3.121904,2.173988],ut=e=>[e,4.65231],Et=()=>[4.376754,4.863579],pt=e=>[e,4.032237],Dt=()=>[3.997787,2.518662],yt=e=>[e,2.884822],Ct=e=>[.845235,e],Ot=()=>[1.327224,3.358778],vt=e=>[e,3.596178],Mt=()=>[2.960769,3.079555],ft=e=>[e,1.577068],Pt=e=>[.639276,e],It=(e,h,n,p,_,O,r,xt,bt,Ut,Lt,Bt,Kt,Jt,Wt,zt,Gt,jt,Ft,$t,kt,Nt,wt,Vt,Yt,Ht,Xt,Qt,Zt,qt,te,ee,oe,ne,se,ae,ie,le,ce,_e,re,me,de,he,ge,ue,Ee,pe,De,ye,Ce,Oe,ve,Me,fe,Pe,Ie,Ae,Re,Te)=>[e,h,n,p,_,O,r,xt,bt,Ut,Lt,Bt,Kt,Jt,Wt,zt,Gt,jt,Ft,$t,kt,Nt,wt,Vt,Yt,Ht,Xt,Qt,Zt,qt,te,ee,oe,ne,se,ae,ie,le,ce,_e,re,me,de,he,ge,ue,Ee,pe,De,ye,Ce,Oe,ve,Me,fe,Pe,Ie,Ae,Re,Te];function At(e,h){if(1&e&&(t.j41(0,"mat-option",12),t.EFF(1),t.k0s()),2&e){const n=h.$implicit;t.Y8G("value",n),t.R7$(),t.SpI(" ",n," ")}}function Rt(e,h){if(1&e&&(t.qex(0),t.j41(1,"div",14)(2,"mat-icon")(3,"span"),t.EFF(4,"people"),t.k0s()(),t.j41(5,"span",15),t.EFF(6),t.k0s()(),t.bVm()),2&e){const n=t.XpG().$implicit;t.R7$(3),t.xc7("color",n.color),t.R7$(3),t.Lme(" ",n.seriesName?n.seriesName:n.name,": ",n.value," ")}}function Tt(e,h){1&e&&t.DNE(0,Rt,7,4,"ng-container",13),2&e&&t.Y8G("ngIf",h.$implicit)}let St=(()=>{class e{_cdr;themeSelector;themes=(0,m.$D)();selectedTheme;showCentroids=!1;constructor(n,p){this._cdr=n,this.themeSelector=p}ngOnInit(){var n=this;return(0,c.A)(function*(){n.selectedTheme=n.themeSelector.selected,n._cdr.markForCheck()})()}selectChartTheme(n){this.themeSelector.select(n)}static \u0275fac=function(p){return new(p||e)(t.rXU(t.gRc),t.rXU(g.S))};static \u0275cmp=t.VBU({type:e,selectors:[["clustering-demo-basic"]],decls:17,vars:208,consts:[["flex","","layout","row","layout-align","start center"],["hide-xs","",1,"mat-subtitle-1","pad-left","pad-right","push-bottom-none"],[3,"valueChange","value"],[3,"value",4,"ngFor","ngForOf"],[3,"ngModelChange","ngModel"],[3,"themeName"],[3,"show","right","top","feature"],[3,"trigger"],["tdTooltipFormatter",""],[3,"show","position","type","boundaryGap"],[3,"show","type"],["td-clustering","",3,"clusterCount","showCentroids","data"],[3,"value"],[4,"ngIf"],["layout","row","layout-align","start center"],[1,"mat-caption","pad-left-sm"]],template:function(p,_){1&p&&(t.j41(0,"div",0)(1,"div",1),t.EFF(2," Chart Theme: "),t.k0s(),t.j41(3,"mat-form-field")(4,"mat-select",2),t.mxI("valueChange",function(r){return t.DH7(_.selectedTheme,r)||(_.selectedTheme=r),r}),t.bIt("valueChange",function(r){return _.selectChartTheme(r)}),t.DNE(5,At,2,2,"mat-option",3),t.k0s()(),t.j41(6,"div",1),t.EFF(7," Show centroids: "),t.k0s(),t.j41(8,"mat-slide-toggle",4),t.mxI("ngModelChange",function(r){return t.DH7(_.showCentroids,r)||(_.showCentroids=r),r}),t.k0s()(),t.j41(9,"td-chart",5),t.nI1(10,"async"),t.nrm(11,"td-chart-toolbox",6),t.j41(12,"td-chart-tooltip",7),t.DNE(13,Tt,1,1,"ng-template",8),t.k0s(),t.nrm(14,"td-chart-x-axis",9)(15,"td-chart-y-axis",10)(16,"td-chart-series",11),t.k0s()),2&p&&(t.R7$(4),t.R50("value",_.selectedTheme),t.R7$(),t.Y8G("ngForOf",_.themes),t.R7$(3),t.R50("ngModel",_.showCentroids),t.R7$(),t.xc7("height",300,"px"),t.Y8G("themeName",t.bMT(10,20,_.themeSelector.selected$)),t.R7$(2),t.Y8G("show",!0)("right",30)("top",10)("feature",t.sMw(29,U,t.eq3(23,T,t.lJ4(22,R)),t.eq3(26,x,t.lJ4(25,S)),t.lJ4(28,b))),t.R7$(),t.Y8G("trigger","item"),t.R7$(2),t.Y8G("show",!0)("position","bottom")("type","value")("boundaryGap",!0),t.R7$(),t.Y8G("show",!0)("type","value"),t.R7$(),t.Y8G("clusterCount",6)("showCentroids",_.showCentroids)("data",t.zJS(147,It,[t.lJ4(33,L),t.eq3(34,B,-3.344465),t.eq3(36,K,-3.376585),t.lJ4(38,J),t.eq3(39,W,-2.078973),t.l_i(41,l,-.993756,-.884433),t.lJ4(44,z),t.eq3(45,G,-3.087776),t.l_i(47,l,-1.565978,-1.256985),t.lJ4(50,j),t.eq3(51,F,-.659487),t.l_i(53,l,-.459601,-2.618005),t.lJ4(56,$),t.eq3(57,k,-2.920969),t.l_i(59,l,-.028814,-4.168078),t.lJ4(62,N),t.eq3(63,w,-3.912363),t.l_i(65,l,-.551694,-2.814223),t.lJ4(68,V),t.eq3(69,Y,-3.594448),t.eq3(71,H,-2.372646),t.lJ4(73,X),t.eq3(74,Q,-2.082902),t.l_i(76,l,-.718809,-2.492514),t.lJ4(79,Z),t.eq3(80,q,-4.822011),t.l_i(82,l,-.656297,-1.449872),t.lJ4(85,tt),t.eq3(86,et,-3.287749),t.l_i(88,l,-1.576936,-2.977622),t.lJ4(91,ot),t.eq3(92,nt,-3.977329),t.l_i(94,l,-1.79108,-2.184517),t.lJ4(97,st),t.eq3(98,at,-1.910108),t.l_i(100,l,-1.226597,-3.317889),t.lJ4(103,it),t.eq3(104,lt,-2.113864),t.eq3(106,ct,-3.589788),t.lJ4(108,_t),t.eq3(109,rt,-1.640717),t.l_i(111,l,-1.881012,-2.485405),t.lJ4(114,mt),t.eq3(115,dt,-4.366462),t.eq3(117,ht,-3.00127),t.lJ4(119,gt),t.eq3(120,ut,-4.025139),t.l_i(122,l,-.559558,-3.840539),t.lJ4(125,Et),t.eq3(126,pt,-1.874308),t.l_i(128,l,-.089337,-3.026809),t.lJ4(131,Dt),t.eq3(132,yt,-3.082978),t.eq3(134,Ct,-3.454465),t.lJ4(136,Ot),t.eq3(137,vt,-2.889949),t.l_i(139,l,-.966018,-2.839827),t.lJ4(142,Mt),t.eq3(143,ft,-3.275518),t.eq3(145,Pt,-3.41284)])))},dependencies:[y.y,d.j,u.G,C.p,s.BC,s.vS,a.Sq,a.bT,E.Ju,E.Bq,i.t,P.rl,f.VO,M.wT,I.An,A.sG,a.Jj],styles:["[_nghost-%COMP%]{width:100%}"],changeDetection:0})}return e})()},43102:(v,D,o)=>{o.d(D,{u:()=>E});var c=o(60177),m=o(82798),g=o(99213),t=o(30450),y=o(20472),d=o(14825),u=o(60049),C=o(6626),s=o(2593),a=o(54438);let E=(()=>{class i{static \u0275fac=function(M){return new(M||i)};static \u0275mod=a.$C({type:i});static \u0275inj=a.G2t({imports:[d.wD,u.RG,y.oU,C.q8,s.K6,c.MD,m.Ve,g.m_,t.mV]})}return i})()},47177:(v,D,o)=>{o.d(D,{p:()=>d});var c=o(54438),m=o(14825),g=o(23831);const y=["td-clustering",""];let d=(()=>{class u extends m.Jg{clusterCount;showCentroids;bottom;calendarIndex;circular;coordinateSystem;cursor;edgeLabel;edges;edgeSymbol;edgeSymbolSize;emphasis;focusNodeAdjacency;geoIndex;height;hoverAnimation;itemStyle;label;left;legendHoverLink;lineStyle;links;markArea;markLine;markPoint;nodes;nodeScaleRatio;polarIndex;right;silent;symbol;symbolKeepAspect;symbolOffset;symbolRotate;symbolSize;top;width;xAxisIndex;yAxisIndex;z;zlevel;originalData;constructor(s){super("scatter",s)}ngOnChanges(){this.originalData?this.data=this.originalData:this.originalData=this.data;const a=g.clustering.hierarchicalKMeans(this.data,this.clusterCount,!1),E=[];for(let i=0;i<a.centroids.length;i++)E.push({name:`cluster ${i+1}`,type:"scatter",data:a.pointsInCluster[i],markPoint:this.showCentroids?{symbolSize:30,itemStyle:{normal:{opacity:.8}},data:[{coord:a.centroids[i],label:{show:!1},name:`centroid ${i+1}`,value:a.centroids[i]}]}:{}});this.optionsService.setOption("series",E),this.data=[],this.setOptions()}getConfig(){return{clusterCount:this.clusterCount,showCentroids:this.showCentroids,bottom:this.bottom,calendarIndex:this.calendarIndex,circular:this.circular,coordinateSystem:this.coordinateSystem,cursor:this.cursor,edgeLabel:this.edgeLabel,edges:this.edges,edgeSymbol:this.edgeSymbol,edgeSymbolSize:this.edgeSymbolSize,emphasis:this.emphasis,focusNodeAdjacency:this.focusNodeAdjacency,geoIndex:this.geoIndex,height:this.height,hoverAnimation:this.hoverAnimation,itemStyle:this.itemStyle,label:this.label,left:this.left,legendHoverLink:this.legendHoverLink,lineStyle:this.lineStyle,links:this.links,markArea:this.markArea,markLine:this.markLine,markPoint:this.markPoint,nodes:this.nodes,nodeScaleRatio:this.nodeScaleRatio,polarIndex:this.polarIndex,right:this.right,silent:this.silent,symbol:this.symbol,symbolKeepAspect:this.symbolKeepAspect,symbolOffset:this.symbolOffset,symbolRotate:this.symbolRotate,symbolSize:this.symbolSize,top:this.top,width:this.width,xAxisIndex:this.xAxisIndex,yAxisIndex:this.yAxisIndex,z:this.z,zlevel:this.zlevel}}setOptions(){const s=(0,m.J)(this._state,{id:this.id,type:this.type,name:this.name,color:this.color,data:this.data,animation:this.animation,animationThreshold:this.animationThreshold,animationDuration:this.animationDuration,animationEasing:this.animationEasing,animationDelay:this.animationDelay,animationDurationUpdate:this.animationDurationUpdate,animationEasingUpdate:this.animationEasingUpdate,animationDelayUpdate:this.animationDelayUpdate,tooltip:this.tooltip},this.getConfig(),this._options,this.config?this.config:{});this.optionsService.setArrayOption("scatter",s)}static \u0275fac=function(a){return new(a||u)(c.rXU(m.QQ))};static \u0275cmp=c.VBU({type:u,selectors:[["td-chart-series","td-clustering",""]],inputs:{config:"config",id:"id",name:"name",color:"color",data:"data",animation:"animation",animationThreshold:"animationThreshold",animationDuration:"animationDuration",animationEasing:"animationEasing",animationDelay:"animationDelay",animationDurationUpdate:"animationDurationUpdate",animationEasingUpdate:"animationEasingUpdate",animationDelayUpdate:"animationDelayUpdate",tooltip:"tooltip",clusterCount:"clusterCount",showCentroids:"showCentroids",bottom:"bottom",calendarIndex:"calendarIndex",circular:"circular",coordinateSystem:"coordinateSystem",cursor:"cursor",edgeLabel:"edgeLabel",edges:"edges",edgeSymbol:"edgeSymbol",edgeSymbolSize:"edgeSymbolSize",emphasis:"emphasis",focusNodeAdjacency:"focusNodeAdjacency",geoIndex:"geoIndex",height:"height",hoverAnimation:"hoverAnimation",itemStyle:"itemStyle",label:"label",left:"left",legendHoverLink:"legendHoverLink",lineStyle:"lineStyle",links:"links",markArea:"markArea",markLine:"markLine",markPoint:"markPoint",nodes:"nodes",nodeScaleRatio:"nodeScaleRatio",polarIndex:"polarIndex",right:"right",silent:"silent",symbol:"symbol",symbolKeepAspect:"symbolKeepAspect",symbolOffset:"symbolOffset",symbolRotate:"symbolRotate",symbolSize:"symbolSize",top:"top",width:"width",xAxisIndex:"xAxisIndex",yAxisIndex:"yAxisIndex",z:"z",zlevel:"zlevel"},features:[c.Jv_([{provide:m.Jg,useExisting:(0,c.Rfq)(()=>u)}]),c.Vt3,c.OA$],attrs:y,decls:0,vars:0,template:function(a,E){},encapsulation:2,changeDetection:0})}return u})()},60049:(v,D,o)=>{o.d(D,{RG:()=>y});var c=o(60177),g=(o(47177),o(54438));let y=(()=>{class d{static \u0275fac=function(s){return new(s||d)};static \u0275mod=g.$C({type:d});static \u0275inj=g.G2t({imports:[c.MD]})}return d})()}}]);