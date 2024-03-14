"use strict";(self.webpackChunkdocs_app=self.webpackChunkdocs_app||[]).push([[4970],{47649:(C,d,e)=>{e.r(d),e.d(d,{PieModule:()=>J});var n=e(69808),h=e(99826),p=e(74107),g=e(25245),T=e(43416),l=e(8370),c=e(34803),r=e(8406),m=e(81032),a=e(64966),u=e(37641),f=e(17606),t=e(5e3),S=e(80338),b=e(2310),P=e(62611),y=e(80878),x=e(93683);function w(o,s){if(1&o&&(t.TgZ(0,"td",11),t._uU(1),t.qZA()),2&o){const i=s.ngIf,v=t.oxw().index;t.xp6(1),t.hij(" ",i[v]," ")}}function Z(o,s){if(1&o&&(t.TgZ(0,"td",11),t._uU(1),t.qZA()),2&o){const i=s.ngIf,v=t.oxw().index;t.xp6(1),t.hij(" ",i[v]," ")}}const D=function(){return[823,235,1042,988]},M=function(){return[95.8,81.4,91.2,76.9]};function A(o,s){if(1&o&&(t.ynx(0),t.TgZ(1,"tr",10)(2,"td",11),t._uU(3),t.qZA(),t.YNc(4,w,2,1,"td",12),t.YNc(5,Z,2,1,"td",12),t.qZA(),t.BQk()),2&o){const i=s.$implicit;t.xp6(3),t.Oqu(i),t.xp6(1),t.Q6J("ngIf",t.DdM(3,D)),t.xp6(1),t.Q6J("ngIf",t.DdM(4,M))}}const O=function(){return["Latte","Tea","Cocoa","Milk"]};function F(o,s){1&o&&(t.TgZ(0,"table",6)(1,"thead")(2,"tr",7)(3,"th",8),t._uU(4,"Product"),t.qZA(),t.TgZ(5,"th",8),t._uU(6,"Count"),t.qZA(),t.TgZ(7,"th",8),t._uU(8,"Score"),t.qZA()()(),t.TgZ(9,"tbody"),t.YNc(10,A,6,5,"ng-container",9),t.qZA()()),2&o&&(t.xp6(10),t.Q6J("ngForOf",t.DdM(1,O)))}function _(o,s){if(1&o&&(t.ynx(0),t.TgZ(1,"div",14)(2,"span",15),t._uU(3),t.qZA()(),t.BQk()),2&o){const i=t.oxw().$implicit;t.xp6(3),t.AsE(" ",i.seriesName?i.seriesName:i.name," : ",i.value," ")}}function E(o,s){1&o&&t.YNc(0,_,4,2,"ng-container",13),2&o&&t.Q6J("ngIf",s.$implicit)}const B=function(o,s,i){return{product:o,count:s,score:i}},z=function(){return["Data View","Turn Off","Refresh"]},Q=function(o){return{readOnly:!0,title:"View Data",lang:o}},V=function(o){return{dataView:o}},U=function(){return{color:"#818181"}},N=function(){return[0,"75%"]},I=(0,a.uw)({overviewDemoComponent:(()=>{class o{constructor(i){this.themeSelector=i,this.config={toolbox:{showTitle:!0,top:0,right:"30px",show:!0,feature:{dataView:{title:"View Data",lang:["Data View","Turn Off","Refresh"]}}},grid:{top:"0",bottom:"10",left:"0"},series:[{type:"pie",itemStyle:{opacity:.95},name:"Product",radius:[0,"75%"],data:[{name:"Latte",value:80,itemStyle:{color:"#26B99A"}},{name:"Tea",value:50,itemStyle:{color:"#34495E"}},{name:"Cocoa",value:60,itemStyle:{color:"#BDC3C7"}},{name:"Frappe",value:122,itemStyle:{color:"#3498DB"}},{name:"Milk",value:110,itemStyle:{color:"#9B59B6"}},{name:"Mocha",value:20,itemStyle:{color:"#8abb6f"}}]}],tooltip:{show:!0,trigger:"item",showContent:!0,formatter:"{a} <br/>{b} : {c} ({d}%)"}}}}return o.\u0275fac=function(i){return new(i||o)(t.Y36(f.n))},o.\u0275cmp=t.Xpm({type:o,selectors:[["types-pie"]],decls:7,vars:25,consts:[[3,"source"],[3,"show","right","top","feature"],["tdViewDataFormatter",""],[3,"trigger","textStyle","backgroundColor"],["tdTooltipFormatter",""],["td-pie","",3,"radius"],["td-data-table",""],["td-data-table-column-row",""],["td-data-table-column",""],[4,"ngFor","ngForOf"],["td-data-table-row",""],["td-data-table-cell",""],["td-data-table-cell","",4,"ngIf"],[4,"ngIf"],["layout","row","layout-align","start center"],[1,"mat-caption","pad-left-sm"]],template:function(i,v){1&i&&(t.TgZ(0,"td-chart"),t._UZ(1,"td-chart-dataset",0),t.TgZ(2,"td-chart-toolbox",1),t.YNc(3,F,11,2,"ng-template",2),t.qZA(),t.TgZ(4,"td-chart-tooltip",3),t.YNc(5,E,1,1,"ng-template",4),t.qZA(),t._UZ(6,"td-chart-series",5),t.qZA()),2&i&&(t.Udp("height",400,"px"),t.xp6(1),t.Q6J("source",t.kEZ(14,B,t.DdM(11,O),t.DdM(12,D),t.DdM(13,M))),t.xp6(1),t.Q6J("show",!0)("right",30)("top",10)("feature",t.VKq(21,V,t.VKq(19,Q,t.DdM(18,z)))),t.xp6(2),t.Q6J("trigger","item")("textStyle",t.DdM(23,U))("backgroundColor","#ffffff"),t.xp6(2),t.Q6J("radius",t.DdM(24,N)))},dependencies:[n.sg,n.O5,S.L,b.H,P.I,y.HN,y.dA,x.O,x.G],styles:["[_nghost-%COMP%]{width:100%}"],changeDetection:0}),o})(),id:"pie"});let J=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[n.ez,p.LD,g.Ps,l.MX,m.XW,c.NF,r.Po,T.q,u.m,h.Bz.forChild(I)]}),o})()},8406:(C,d,e)=>{e.d(d,{Po:()=>T});var n=e(69808),p=(e(93683),e(5e3));let T=(()=>{class l{}return l.\u0275fac=function(r){return new(r||l)},l.\u0275mod=p.oAB({type:l}),l.\u0275inj=p.cJS({imports:[n.ez]}),l})()},93683:(C,d,e)=>{e.d(d,{G:()=>l,O:()=>c});var n=e(5e3),h=e(8370),p=e(69808);const g=["toolboxContent"];function T(r,m){}let l=(()=>{class r{}return r.\u0275fac=function(a){return new(a||r)},r.\u0275dir=n.lG2({type:r,selectors:[["ng-template","tdViewDataFormatter",""]]}),r})(),c=(()=>{class r{constructor(a,u,f){this._changeDetectorRef=a,this._elementRef=u,this._optionsService=f,this._state={},this.config={},this.show=!0,this.showTitle=!0,this.transitionDuration=.5,this.left="auto",this.top="auto",this.right="auto",this.bottom="auto",this.width="auto",this.height="auto"}ngOnChanges(){this._setOptions()}ngOnDestroy(){this._removeOption()}_setOptions(){this._checkFormatterTemplate();const a=(0,h.t8)(this._state,{show:this.show,name:this.trigger,orient:this.orient,itemSize:this.itemSize,itemGap:this.itemGap,showTitle:this.showTitle,label:this.label,feature:this.feature,iconStyle:this.iconStyle,zlevel:this.zlevel,z:this.z,transitionDuration:this.transitionDuration,left:this.left,top:this.top,right:this.right,bottom:this.bottom,width:this.width,height:this.height},this.config?this.config:{});this._optionsService.setOption("toolbox",a)}_removeOption(){this._optionsService.clearOption("toolbox")}_checkFormatterTemplate(){var a;this.formatterTemplate&&(this.feature=Object.assign(Object.assign({},this.feature),{dataView:Object.assign(Object.assign({},null===(a=this.feature)||void 0===a?void 0:a.dataView),{optionToContent:this._optionToContentFormatter()})}))}_optionToContentFormatter(){return()=>(this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.innerHTML)}}return r.\u0275fac=function(a){return new(a||r)(n.Y36(n.sBO),n.Y36(n.SBq),n.Y36(h.ij))},r.\u0275cmp=n.Xpm({type:r,selectors:[["td-chart-toolbox"]],contentQueries:function(a,u,f){if(1&a&&n.Suo(f,l,5,n.Rgc),2&a){let t;n.iGM(t=n.CRH())&&(u.formatterTemplate=t.first)}},viewQuery:function(a,u){if(1&a&&n.Gf(g,7),2&a){let f;n.iGM(f=n.CRH())&&(u.fullTemplate=f.first)}},inputs:{config:"config",show:"show",trigger:"trigger",orient:"orient",itemSize:"itemSize",itemGap:"itemGap",showTitle:"showTitle",label:"label",feature:"feature",iconStyle:"iconStyle",zlevel:"zlevel",z:"z",transitionDuration:"transitionDuration",left:"left",top:"top",right:"right",bottom:"bottom",width:"width",height:"height"},features:[n.TTD],decls:2,vars:1,consts:[[3,"ngTemplateOutlet"],["toolboxContent",""]],template:function(a,u){1&a&&n.YNc(0,T,0,0,"ng-template",0,1,n.W1O),2&a&&n.Q6J("ngTemplateOutlet",u.formatterTemplate)},dependencies:[p.tP],encapsulation:2,changeDetection:0}),r})()},9782:(C,d,e)=>{e.d(d,{A0:()=>l});var n=e(69808),h=e(25245),g=(e(31498),e(5e3));let l=(()=>{class c{}return c.\u0275fac=function(m){return new(m||c)},c.\u0275mod=g.oAB({type:c}),c.\u0275inj=g.cJS({imports:[n.ez,h.Ps]}),c})()}}]);