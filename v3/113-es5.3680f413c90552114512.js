!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var c=t[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function n(e,n,c){return n&&t(e.prototype,n),c&&t(e,c),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{Lx23:function(t,c,o){"use strict";o.r(c),o.d(c,"SideSheetDemoModule",function(){return D});var i=o("SVse"),s=o("Tj54"),r=o("q7Ft"),a=o("Dxy4"),u=o("l0rg"),d=o("Jin3"),l=o("Krbs"),m=o("iInd"),p=o("8Y7J"),b=o("MJ5V"),f=["example"];function h(e,t){1&e&&p.Oc(0,"It works from a TemplateRef!")}var y,v,S,w,O,g,T,k,I=((S=function(){function t(n){e(this,t),this.sideSheet=n}return n(t,[{key:"toggleSideSheet",value:function(){this.sideSheet.open(this.template)}}]),t}()).\u0275fac=function(e){return new(e||S)(p.Ob(d.a))},S.\u0275cmp=p.Ib({type:S,selectors:[["side-sheet-demo-basic"]],viewQuery:function(e,t){var n;1&e&&p.Sc(f,!0),2&e&&p.zc(n=p.dc())&&(t.template=n.first)},decls:6,vars:0,consts:[["mat-raised-button","","color","primary",3,"click"],["example",""]],template:function(e,t){1&e&&(p.Ub(0,"p"),p.Oc(1,"Open some dialog content from a TemplateRef"),p.Tb(),p.Ub(2,"button",0),p.cc("click",function(){return t.toggleSideSheet()}),p.Oc(3,"Open"),p.Tb(),p.Mc(4,h,1,0,"ng-template",null,1,p.Nc))},directives:[a.b],styles:[""]}),S),U=((v=function t(){e(this,t)}).\u0275fac=function(e){return new(e||v)},v.\u0275cmp=p.Ib({type:v,selectors:[["example"]],decls:1,vars:0,template:function(e,t){1&e&&p.Oc(0," it works from a component ")},encapsulation:2}),v),x=((y=function(){function t(n){e(this,t),this.sideSheet=n}return n(t,[{key:"toggleSideSheet",value:function(){this.sideSheet.open(U)}}]),t}()).\u0275fac=function(e){return new(e||y)(p.Ob(d.a))},y.\u0275cmp=p.Ib({type:y,selectors:[["side-sheet-demo-advanced"]],decls:4,vars:0,consts:[["mat-raised-button","","color","primary",3,"click"]],template:function(e,t){1&e&&(p.Ub(0,"p"),p.Oc(1,"Open some dialog content from a Component"),p.Tb(),p.Ub(2,"button",0),p.cc("click",function(){return t.toggleSideSheet()}),p.Oc(3,"Open"),p.Tb())},directives:[a.b],styles:[""]}),y),C=o("o62C"),M=function(){var t=function(){function t(n){e(this,t),this.sideSheet=n}return n(t,[{key:"openSideSheet",value:function(){this.sideSheet.open(j,{minWidth:"800px"})}}]),t}();return t.\u0275fac=function(e){return new(e||t)(p.Ob(d.a))},t.\u0275cmp=p.Ib({type:t,selectors:[["example"]],decls:6,vars:0,consts:[[2,"display","flex","justify-content","space-between"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","td-side-sheet-close",""]],template:function(e,t){1&e&&(p.Oc(0," it works from a component "),p.Ub(1,"div",0),p.Ub(2,"button",1),p.cc("click",function(){return t.openSideSheet()}),p.Oc(3,"Open"),p.Tb(),p.Ub(4,"button",2),p.Oc(5,"Close"),p.Tb(),p.Tb())},directives:[a.b,C.a],encapsulation:2}),t}(),j=((O=function t(){e(this,t)}).\u0275fac=function(e){return new(e||O)},O.\u0275cmp=p.Ib({type:O,selectors:[["example-layered"]],decls:1,vars:0,template:function(e,t){1&e&&p.Oc(0,"Im Mulit layered!")},encapsulation:2}),O),J=((w=function(){function t(n){e(this,t),this.sideSheet=n}return n(t,[{key:"toggleSideSheet",value:function(){this.sideSheet.open(M)}}]),t}()).\u0275fac=function(e){return new(e||w)(p.Ob(d.a))},w.\u0275cmp=p.Ib({type:w,selectors:[["side-sheet-demo-multi"]],decls:4,vars:0,consts:[["mat-raised-button","","color","primary",3,"click"]],template:function(e,t){1&e&&(p.Ub(0,"p"),p.Oc(1,"Open a side sheet with multiple layers"),p.Tb(),p.Ub(2,"button",0),p.cc("click",function(){return t.toggleSideSheet()}),p.Oc(3,"Open"),p.Tb())},directives:[a.b],styles:[""]}),w),P=[{path:"",component:(g=function t(){e(this,t)},g.\u0275fac=function(e){return new(e||g)},g.\u0275cmp=p.Ib({type:g,selectors:[["sidesheet-demo"]],decls:6,vars:6,consts:[[3,"demoId","demoTitle"]],template:function(e,t){1&e&&(p.Ub(0,"demo-component",0),p.Pb(1,"side-sheet-demo-basic"),p.Tb(),p.Ub(2,"demo-component",0),p.Pb(3,"side-sheet-demo-advanced"),p.Tb(),p.Ub(4,"demo-component",0),p.Pb(5,"side-sheet-demo-multi"),p.Tb()),2&e&&(p.mc("demoId","side-sheet-demo-basic")("demoTitle","Basic"),p.Cb(2),p.mc("demoId","side-sheet-demo-advanced")("demoTitle","Advanced"),p.Cb(2),p.mc("demoId","side-sheet-demo-multi")("demoTitle","Multi"))},directives:[b.a,I,x,J],styles:[""]}),g)}],L=((k=function t(){e(this,t)}).\u0275mod=p.Mb({type:k}),k.\u0275inj=p.Lb({factory:function(e){return new(e||k)},imports:[[m.g.forChild(P)],m.g]}),k),D=((T=function t(){e(this,t)}).\u0275mod=p.Mb({type:T}),T.\u0275inj=p.Lb({factory:function(e){return new(e||T)},imports:[[l.a,L,d.b,i.c,s.b,r.d,a.c,u.b]]}),T)}}])}();