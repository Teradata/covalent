"use strict";(self.webpackChunkdocs_app=self.webpackChunkdocs_app||[]).push([[5479],{85479:(v,b,t)=>{t.d(b,{Po:()=>O});var e=t(60177),o=t(89417),i=t(99631),f=t(99213),C=t(88834),M=t(54438);let O=(()=>{class m{static \u0275fac=function(s){return new(s||m)};static \u0275mod=M.$C({type:m});static \u0275inj=M.G2t({imports:[o.YN,e.MD,i.fS,f.m_,C.Hl]})}return m})();t(69595),t(66341)},69595:(v,b,t)=>{t.d(b,{$:()=>E});var e=t(54438),o=t(89417),i=t(49969),f=t(66341),M=(t(85343),t(60177)),O=t(99213),B=t(88834);function P(s,D){if(1&s&&(e.j41(0,"mat-icon"),e.EFF(1),e.k0s()),2&s){const c=e.XpG();e.R7$(),e.JRh(c.backIcon)}}function m(s,D){if(1&s&&(e.j41(0,"mat-icon"),e.EFF(1),e.k0s()),2&s){const c=e.XpG();e.R7$(),e.JRh(c.searchIcon)}}let E=(()=>{class s{_changeDetectorRef;_searchVisible=!1;_searchInput;get searchVisible(){return this._searchVisible}backIcon="search";searchIcon="search";clearIcon="cancel";showUnderline=!1;debounce=400;alwaysVisible=!1;placeholder="";value;searchDebounce=new e.bkB;search=new e.bkB;clear=new e.bkB;blurSearch=new e.bkB;constructor(c){this._changeDetectorRef=c}writeValue(c){this.value=c,this._changeDetectorRef.markForCheck()}registerOnChange(){}registerOnTouched(){}searchClicked(){!this.alwaysVisible&&this._searchVisible?(this.value="",this.handleClear()):(this.alwaysVisible||!this._searchVisible)&&this._searchInput?.focus(),this.toggleVisibility()}toggleVisibility(){this._searchVisible=!this._searchVisible,this._changeDetectorRef.markForCheck()}handleSearchDebounce(c){this.searchDebounce.emit(c)}handleSearch(c){this.search.emit(c)}handleClear(){this.clear.emit()}handleBlur(){this.blurSearch.emit()}static \u0275fac=function(_){return new(_||s)(e.rXU(e.gRc))};static \u0275cmp=e.VBU({type:s,selectors:[["td-search-box"]],viewQuery:function(_,n){if(1&_&&e.GBs(f.Cl,7),2&_){let d;e.mGM(d=e.lsd())&&(n._searchInput=d.first)}},inputs:{backIcon:"backIcon",searchIcon:"searchIcon",clearIcon:"clearIcon",showUnderline:"showUnderline",debounce:"debounce",alwaysVisible:"alwaysVisible",placeholder:"placeholder",value:"value"},outputs:{searchDebounce:"searchDebounce",search:"search",clear:"clear",blurSearch:"blurSearch"},features:[e.Jv_([{provide:o.kq,useExisting:(0,e.Rfq)(()=>s),multi:!0}])],decls:6,vars:8,consts:[["searchInput",""],[1,"td-search-box"],["mat-icon-button","","type","button",1,"td-search-icon",3,"click"],[4,"ngIf"],[3,"ngModelChange","searchDebounce","search","clear","blur","debounce","ngModel","showUnderline","placeholder","clearIcon"]],template:function(_,n){if(1&_){const d=e.RV6();e.j41(0,"div",1)(1,"button",2),e.bIt("click",function(){return e.eBV(d),e.Njj(n.searchClicked())}),e.DNE(2,P,2,1,"mat-icon",3)(3,m,2,1,"mat-icon",3),e.k0s(),e.j41(4,"td-search-input",4,0),e.mxI("ngModelChange",function(u){return e.eBV(d),e.DH7(n.value,u)||(n.value=u),e.Njj(u)}),e.bIt("searchDebounce",function(u){return e.eBV(d),e.Njj(n.handleSearchDebounce(u))})("search",function(u){return e.eBV(d),e.Njj(n.handleSearch(u))})("clear",function(){return e.eBV(d),n.handleClear(),e.Njj(n.toggleVisibility())})("blur",function(){return e.eBV(d),e.Njj(n.handleBlur())}),e.k0s()()}2&_&&(e.R7$(2),e.Y8G("ngIf",n.searchVisible&&!n.alwaysVisible),e.R7$(),e.Y8G("ngIf",!n.searchVisible||n.alwaysVisible),e.R7$(),e.Y8G("@inputState",n.alwaysVisible||n.searchVisible)("debounce",n.debounce),e.R50("ngModel",n.value),e.Y8G("showUnderline",n.showUnderline)("placeholder",n.placeholder)("clearIcon",n.clearIcon))},dependencies:[o.BC,o.vS,M.bT,O.An,B.iY,f.Cl],styles:["[_nghost-%COMP%]{display:block}.td-search-box[_ngcontent-%COMP%]{box-sizing:border-box;display:flex;flex-direction:row;align-content:center;max-width:100%;justify-content:flex-end}.td-search-box[_ngcontent-%COMP%]   .td-search-icon[_ngcontent-%COMP%]{margin-top:4px}.td-search-box[_ngcontent-%COMP%]   td-search-input[_ngcontent-%COMP%]{margin-left:12px}  [dir=rtl] .td-search-box td-search-input{margin-right:12px;margin-left:0!important}.td-search-box[_ngcontent-%COMP%]   td-search-input[_ngcontent-%COMP%]     .mat-form.field.mat-form-field-appearance-legacy .mat-form-field-wrapper{padding-bottom:1em}.mat-toolbar   [_nghost-%COMP%]     .mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:#fff}"],data:{animation:[(0,i.hZ)("inputState",[(0,i.wk)("0",(0,i.iF)({width:"0%",margin:"0px"})),(0,i.wk)("1",(0,i.iF)({width:"100%",margin:i.kp})),(0,i.kY)("0 => 1",(0,i.i0)("200ms ease-in")),(0,i.kY)("1 => 0",(0,i.i0)("200ms ease-out"))])]},changeDetection:0})}return s})()},66341:(v,b,t)=>{t.d(b,{Cl:()=>x});var e=t(54438),o=t(49969),i=t(89417),f=t(99631),C=t(21413),M=t(33726),O=t(70152),B=t(65245),P=t(56977),m=t(20472),R=t(28203),E=t(60177),s=t(53719),D=t(99213),c=t(88834);const _=["searchElement"];function n(l,I){}function d(l,I){if(1&l&&(e.j41(0,"span",6),e.DNE(1,n,0,0,"ng-template",7),e.k0s()),2&l){e.XpG();const a=e.sdS(6);e.R7$(),e.Y8G("ngTemplateOutlet",a)}}function g(l,I){if(1&l){const a=e.RV6();e.j41(0,"button",8),e.bIt("click",function(){e.eBV(a);const r=e.XpG();return e.Njj(r.clearSearch())}),e.j41(1,"mat-icon"),e.EFF(2),e.k0s()()}if(2&l){const a=e.XpG(),h=e.sdS(3);e.Y8G("@searchState",h.value?"show":a.isRTL?"hide-left":"hide-right"),e.R7$(2),e.JRh(a.clearIcon)}}const y=(0,m.$k)(class u{_changeDetectorRef;constructor(I){this._changeDetectorRef=I}});let x=(()=>{class l extends y{_dir;_changeDetectorRef;_ngZone;_input;_searchElement;appearance="outline";showUnderline=!1;debounce=400;placeholder="";clearIcon="cancel";value;searchDebounce=new e.bkB;search=new e.bkB;clear=new e.bkB;blurSearch=new e.bkB;get isRTL(){return!!this._dir&&"rtl"===this._dir.dir}_destroy$=new C.B;constructor(a,h,r){super(h),this._dir=a,this._changeDetectorRef=h,this._ngZone=r}ngOnInit(){this._input?.ngControl?.valueChanges?.pipe((0,O.B)(this.debounce),(0,B.i)(1),(0,P.Q)(this._destroy$)).subscribe(a=>{this._searchTermChanged(a)}),this._ngZone.runOutsideAngular(()=>(0,M.R)(this._searchElement.nativeElement,"search").pipe((0,P.Q)(this._destroy$)).subscribe(this._stopPropagation))}ngOnDestroy(){this._destroy$.next()}focus(){this._input?.focus()}handleBlur(){this.blurSearch.emit()}handleSearch(a){this._stopPropagation(a),"string"==typeof this.value&&this.search.emit(this.value)}clearSearch(){this.value="",this._changeDetectorRef.markForCheck(),this.clear.emit()}_searchTermChanged(a){this.searchDebounce.emit(a)}_stopPropagation(a){a.stopPropagation()}static \u0275fac=function(h){return new(h||l)(e.rXU(R.ig,8),e.rXU(e.gRc),e.rXU(e.SKi))};static \u0275cmp=e.VBU({type:l,selectors:[["td-search-input"]],viewQuery:function(h,r){if(1&h&&(e.GBs(f.fg,7),e.GBs(_,7,e.aKT)),2&h){let p;e.mGM(p=e.lsd())&&(r._input=p.first),e.mGM(p=e.lsd())&&(r._searchElement=p.first)}},inputs:{appearance:"appearance",showUnderline:"showUnderline",debounce:"debounce",placeholder:"placeholder",clearIcon:"clearIcon",value:"value"},outputs:{searchDebounce:"searchDebounce",search:"search",clear:"clear",blurSearch:"blurSearch"},features:[e.Jv_([{provide:i.kq,useExisting:(0,e.Rfq)(()=>l),multi:!0}]),e.Vt3],decls:7,vars:6,consts:[["searchElement",""],["clearButton",""],[1,"td-search-input"],[1,"td-search-input-field",3,"appearance"],["matInput","","type","search",3,"ngModelChange","blur","keyup.enter","ngModel","placeholder"],["matSuffix","",4,"ngIf"],["matSuffix",""],[3,"ngTemplateOutlet"],["mat-icon-button","","type","button",1,"td-search-input-clear",3,"click"]],template:function(h,r){if(1&h){const p=e.RV6();e.j41(0,"div",2)(1,"mat-form-field",3)(2,"input",4,0),e.mxI("ngModelChange",function(T){return e.eBV(p),e.DH7(r.value,T)||(r.value=T),e.Njj(T)}),e.bIt("blur",function(){return e.eBV(p),e.Njj(r.handleBlur())})("keyup.enter",function(T){return e.eBV(p),e.Njj(r.handleSearch(T))}),e.k0s(),e.DNE(4,d,2,1,"span",5),e.k0s()(),e.DNE(5,g,3,2,"ng-template",null,1,e.C5r)}2&h&&(e.R7$(),e.AVh("mat-hide-underline",!r.showUnderline),e.Y8G("appearance",r.appearance),e.R7$(),e.R50("ngModel",r.value),e.Y8G("placeholder",r.placeholder),e.R7$(2),e.Y8G("ngIf","fill"===r.appearance||"outline"===r.appearance||"standard"===r.appearance))},dependencies:[i.me,i.BC,i.vS,E.bT,E.T3,f.fg,s.rl,s.yw,D.An,c.iY],styles:["[_nghost-%COMP%]   .td-search-input[_ngcontent-%COMP%]{overflow-x:hidden;box-sizing:border-box;display:flex;flex-direction:row;align-items:baseline;align-content:center;max-width:100%;justify-content:flex-end}[_nghost-%COMP%]   .td-search-input[_ngcontent-%COMP%]   .td-search-input-field[_ngcontent-%COMP%]{flex:1}[_nghost-%COMP%]   .td-search-input[_ngcontent-%COMP%]     mat-form-field .mat-mdc-form-field-subscript-wrapper{display:none}[_nghost-%COMP%]   .td-search-input[_ngcontent-%COMP%]     mat-form-field.mat-form-field-appearance-outline .mat-form-field-wrapper{padding-bottom:0}[_nghost-%COMP%]   .td-search-input[_ngcontent-%COMP%]     mat-form-field.mat-form-field-appearance-fill .mat-form-field-wrapper{padding-bottom:0}[_nghost-%COMP%]   .td-search-input[_ngcontent-%COMP%]     mat-form-field.mat-form-field-appearance-fill .mat-form-field-wrapper .mat-form-field-flex{height:52px}[_nghost-%COMP%]   .td-search-input[_ngcontent-%COMP%]     mat-form-field.mat-form-field-appearance-fill .mat-form-field-wrapper .mat-form-field-underline{bottom:0}[_nghost-%COMP%]   .td-search-input[_ngcontent-%COMP%]     mat-form-field.mat-form-field-appearance-standard .mat-form-field-wrapper{padding-bottom:0}[_nghost-%COMP%]   .td-search-input[_ngcontent-%COMP%]     mat-form-field.mat-form-field-appearance-standard .mat-form-field-wrapper .mat-form-field-infix{bottom:.4em}[_nghost-%COMP%]   .td-search-input[_ngcontent-%COMP%]     mat-form-field.mat-form-field-appearance-standard .mat-form-field-wrapper .mat-form-field-underline{bottom:0}[_nghost-%COMP%]   .td-search-input[_ngcontent-%COMP%]     mat-form-field .mat-input-element{caret-color:currentColor}[_nghost-%COMP%]   .td-search-input[_ngcontent-%COMP%]     mat-form-field.mat-hide-underline .mat-form-field-underline{display:none}[_nghost-%COMP%]   .td-search-input[_ngcontent-%COMP%]   .td-search-input-clear[_ngcontent-%COMP%]{flex:0 0 auto}"],data:{animation:[(0,o.hZ)("searchState",[(0,o.wk)("hide-left",(0,o.iF)({transform:"translateX(-150%)",display:"none"})),(0,o.wk)("hide-right",(0,o.iF)({transform:"translateX(150%)",display:"none"})),(0,o.wk)("show",(0,o.iF)({transform:"translateX(0%)",display:"block"})),(0,o.kY)("* => show",(0,o.i0)("200ms ease-in")),(0,o.kY)("show => *",(0,o.i0)("200ms ease-out"))])]},changeDetection:0})}return l})()}}]);