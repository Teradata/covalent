"use strict";(self.webpackChunkdocs_app=self.webpackChunkdocs_app||[]).push([[7802],{97802:(v,c,t)=>{t.r(c),t.d(c,{MapDemoModule:()=>S});var e=t(69808),r=t(74107),h=t(25245),u=t(8370),l=t(81453),n=t(34803),m=t(8406),i=t(99826),a=t(5e3),o=t(41246),p=t(48763);const g=[{path:"",component:(()=>{class s{}return s.\u0275fac=function(d){return new(d||s)},s.\u0275cmp=a.Xpm({type:s,selectors:[["map-demo"]],decls:2,vars:2,consts:[[3,"demoId","demoTitle"]],template:function(d,x){1&d&&(a.TgZ(0,"demo-component",0),a._UZ(1,"map-demo-basic"),a.qZA()),2&d&&a.Q6J("demoId","map-demo-basic")("demoTitle","Basic")},dependencies:[o.Y,p.z]}),s})()}];let T=(()=>{class s{}return s.\u0275fac=function(d){return new(d||s)},s.\u0275mod=a.oAB({type:s}),s.\u0275inj=a.cJS({imports:[i.Bz.forChild(g),i.Bz]}),s})();var C=t(92234),b=t(5056),D=t(11579);let S=(()=>{class s{}return s.\u0275fac=function(d){return new(d||s)},s.\u0275mod=a.oAB({type:s}),s.\u0275inj=a.cJS({imports:[D.v,C.l,T,u.MX,l.Uy,b.rL,n.NF,m.Po,e.ez,r.LD,h.Ps]}),s})()},73808:(v,c,t)=>{t.d(c,{P:()=>u});var e=t(5e3),r=t(8370);const h=["td-line",""];let u=(()=>{class l extends r.R0{constructor(m){super("line",m)}getConfig(){return{coordinateSystem:this.coordinateSystem,xAxisIndex:this.xAxisIndex,yAxisIndex:this.yAxisIndex,polarIndex:this.polarIndex,symbol:this.symbol,symbolSize:this.symbolSize,symbolRotate:this.symbolRotate,symbolKeepAspect:this.symbolKeepAspect,symbolOffset:this.symbolOffset,showSymbol:this.showSymbol,showAllSymbol:this.showAllSymbol,hoverAnimation:this.hoverAnimation,legendHoverLink:this.legendHoverLink,stack:this.stack,cursor:this.cursor,connectNulls:this.connectNulls,clipOverflow:this.clipOverflow,step:this.step,label:this.label,itemStyle:this.itemStyle,lineStyle:this.lineStyle,areaStyle:this.areaStyle,emphasis:this.emphasis,smooth:this.smooth,smoothMonotone:this.smoothMonotone,sampling:this.sampling,dimensions:this.dimensions,encode:this.encode,seriesLayoutBy:this.seriesLayoutBy,datasetIndex:this.datasetIndex,markPoint:this.markPoint,markLine:this.markLine,markArea:this.markArea,zlevel:this.zlevel,z:this.z,silent:this.silent}}}return l.\u0275fac=function(m){return new(m||l)(e.Y36(r.ij))},l.\u0275cmp=e.Xpm({type:l,selectors:[["td-chart-series","td-line",""]],inputs:{config:"config",id:"id",name:"name",color:"color",data:"data",animation:"animation",animationThreshold:"animationThreshold",animationDuration:"animationDuration",animationEasing:"animationEasing",animationDelay:"animationDelay",animationDurationUpdate:"animationDurationUpdate",animationEasingUpdate:"animationEasingUpdate",animationDelayUpdate:"animationDelayUpdate",tooltip:"tooltip",coordinateSystem:"coordinateSystem",xAxisIndex:"xAxisIndex",yAxisIndex:"yAxisIndex",polarIndex:"polarIndex",symbol:"symbol",symbolSize:"symbolSize",symbolRotate:"symbolRotate",symbolKeepAspect:"symbolKeepAspect",symbolOffset:"symbolOffset",showSymbol:"showSymbol",showAllSymbol:"showAllSymbol",hoverAnimation:"hoverAnimation",legendHoverLink:"legendHoverLink",stack:"stack",cursor:"cursor",connectNulls:"connectNulls",clipOverflow:"clipOverflow",step:"step",label:"label",itemStyle:"itemStyle",lineStyle:"lineStyle",areaStyle:"areaStyle",emphasis:"emphasis",smooth:"smooth",smoothMonotone:"smoothMonotone",sampling:"sampling",dimensions:"dimensions",encode:"encode",seriesLayoutBy:"seriesLayoutBy",datasetIndex:"datasetIndex",markPoint:"markPoint",markLine:"markLine",markArea:"markArea",zlevel:"zlevel",z:"z",silent:"silent"},features:[e._Bn([{provide:r.R0,useExisting:(0,e.Gpc)(()=>l)}]),e.qOj],attrs:h,decls:0,vars:0,template:function(m,i){},encapsulation:2,changeDetection:0}),l})()},81453:(v,c,t)=>{t.d(c,{Uy:()=>l});var e=t(69808),h=(t(73808),t(5e3));let l=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=h.oAB({type:n}),n.\u0275inj=h.cJS({imports:[e.ez]}),n})()},8406:(v,c,t)=>{t.d(c,{Po:()=>l});var e=t(69808),h=(t(93683),t(5e3));let l=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=h.oAB({type:n}),n.\u0275inj=h.cJS({imports:[e.ez]}),n})()},93683:(v,c,t)=>{t.d(c,{G:()=>n,O:()=>m});var e=t(5e3),r=t(8370),h=t(69808);const u=["toolboxContent"];function l(i,a){}let n=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275dir=e.lG2({type:i,selectors:[["ng-template","tdViewDataFormatter",""]]}),i})(),m=(()=>{class i{constructor(o,p,y){this._changeDetectorRef=o,this._elementRef=p,this._optionsService=y,this._state={},this.config={},this.show=!0,this.showTitle=!0,this.transitionDuration=.5,this.left="auto",this.top="auto",this.right="auto",this.bottom="auto",this.width="auto",this.height="auto"}ngOnChanges(){this._setOptions()}ngOnDestroy(){this._removeOption()}_setOptions(){this._checkFormatterTemplate();const o=(0,r.t8)(this._state,{show:this.show,name:this.trigger,orient:this.orient,itemSize:this.itemSize,itemGap:this.itemGap,showTitle:this.showTitle,label:this.label,feature:this.feature,iconStyle:this.iconStyle,zlevel:this.zlevel,z:this.z,transitionDuration:this.transitionDuration,left:this.left,top:this.top,right:this.right,bottom:this.bottom,width:this.width,height:this.height},this.config?this.config:{});this._optionsService.setOption("toolbox",o)}_removeOption(){this._optionsService.clearOption("toolbox")}_checkFormatterTemplate(){var o;this.formatterTemplate&&(this.feature=Object.assign(Object.assign({},this.feature),{dataView:Object.assign(Object.assign({},null===(o=this.feature)||void 0===o?void 0:o.dataView),{optionToContent:this._optionToContentFormatter()})}))}_optionToContentFormatter(){return()=>(this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.innerHTML)}}return i.\u0275fac=function(o){return new(o||i)(e.Y36(e.sBO),e.Y36(e.SBq),e.Y36(r.ij))},i.\u0275cmp=e.Xpm({type:i,selectors:[["td-chart-toolbox"]],contentQueries:function(o,p,y){if(1&o&&e.Suo(y,n,5,e.Rgc),2&o){let g;e.iGM(g=e.CRH())&&(p.formatterTemplate=g.first)}},viewQuery:function(o,p){if(1&o&&e.Gf(u,7),2&o){let y;e.iGM(y=e.CRH())&&(p.fullTemplate=y.first)}},inputs:{config:"config",show:"show",trigger:"trigger",orient:"orient",itemSize:"itemSize",itemGap:"itemGap",showTitle:"showTitle",label:"label",feature:"feature",iconStyle:"iconStyle",zlevel:"zlevel",z:"z",transitionDuration:"transitionDuration",left:"left",top:"top",right:"right",bottom:"bottom",width:"width",height:"height"},features:[e.TTD],decls:2,vars:1,consts:[[3,"ngTemplateOutlet"],["toolboxContent",""]],template:function(o,p){1&o&&e.YNc(0,l,0,0,"ng-template",0,1,e.W1O),2&o&&e.Q6J("ngTemplateOutlet",p.formatterTemplate)},dependencies:[h.tP],encapsulation:2,changeDetection:0}),i})()}}]);