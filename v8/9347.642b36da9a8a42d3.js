"use strict";(self.webpackChunkdocs_app=self.webpackChunkdocs_app||[]).push([[9347],{77954:(et,Y,c)=>{c.d(Y,{LL:()=>p,Su:()=>G,Vq:()=>B,ib:()=>A,zj:()=>M});var v=c(4300),b=c(33651),o=c(62831),f=c(68484),L=c(96814),r=c(19212),P=c(36028),y=c(78645),z=c(74911),V=c(22096),x=c(49388),I=c(27921);function W(_,u){}class A{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.closeOnNavigation=!0,this.closeOnDestroy=!0,this.closeOnOverlayDetachments=!0}}let p=(()=>{class _ extends f.en{constructor(t,e,s,d,g,h,C,E){super(),this._elementRef=t,this._focusTrapFactory=e,this._config=d,this._interactivityChecker=g,this._ngZone=h,this._overlayRef=C,this._focusMonitor=E,this._platform=(0,r.f3M)(o.t4),this._focusTrap=null,this._elementFocusedBeforeDialogWasOpened=null,this._closeInteractionType=null,this._ariaLabelledByQueue=[],this._changeDetectorRef=(0,r.f3M)(r.sBO),this.attachDomPortal=K=>{this._portalOutlet.hasAttached();const H=this._portalOutlet.attachDomPortal(K);return this._contentAttached(),H},this._document=s,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(t){this._ariaLabelledByQueue.push(t),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(t){const e=this._ariaLabelledByQueue.indexOf(t);e>-1&&(this._ariaLabelledByQueue.splice(e,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._handleBackdropClicks(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._restoreFocus()}attachComponentPortal(t){this._portalOutlet.hasAttached();const e=this._portalOutlet.attachComponentPortal(t);return this._contentAttached(),e}attachTemplatePortal(t){this._portalOutlet.hasAttached();const e=this._portalOutlet.attachTemplatePortal(t);return this._contentAttached(),e}_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{const s=()=>{t.removeEventListener("blur",s),t.removeEventListener("mousedown",s),t.removeAttribute("tabindex")};t.addEventListener("blur",s),t.addEventListener("mousedown",s)})),t.focus(e)}_focusByCssSelector(t,e){let s=this._elementRef.nativeElement.querySelector(t);s&&this._forceFocus(s,e)}_trapFocus(){const t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus();break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElementWhenReady().then(e=>{e||this._focusDialogContainer()});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this._config.autoFocus)}}_restoreFocus(){const t=this._config.restoreFocus;let e=null;if("string"==typeof t?e=this._document.querySelector(t):"boolean"==typeof t?e=t?this._elementFocusedBeforeDialogWasOpened:null:t&&(e=t),this._config.restoreFocus&&e&&"function"==typeof e.focus){const s=(0,o.ht)(),d=this._elementRef.nativeElement;(!s||s===this._document.body||s===d||d.contains(s))&&(this._focusMonitor?(this._focusMonitor.focusVia(e,this._closeInteractionType),this._closeInteractionType=null):e.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(){this._elementRef.nativeElement.focus&&this._elementRef.nativeElement.focus()}_containsFocus(){const t=this._elementRef.nativeElement,e=(0,o.ht)();return t===e||t.contains(e)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=(0,o.ht)()))}_handleBackdropClicks(){this._overlayRef.backdropClick().subscribe(()=>{this._config.disableClose&&this._recaptureFocus()})}static#t=this.\u0275fac=function(e){return new(e||_)(r.Y36(r.SBq),r.Y36(v.qV),r.Y36(L.K0,8),r.Y36(A),r.Y36(v.ic),r.Y36(r.R0b),r.Y36(b.Iu),r.Y36(v.tE))};static#e=this.\u0275cmp=r.Xpm({type:_,selectors:[["cdk-dialog-container"]],viewQuery:function(e,s){if(1&e&&r.Gf(f.Pl,7),2&e){let d;r.iGM(d=r.CRH())&&(s._portalOutlet=d.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(e,s){2&e&&r.uIk("id",s._config.id||null)("role",s._config.role)("aria-modal",s._config.ariaModal)("aria-labelledby",s._config.ariaLabel?null:s._ariaLabelledByQueue[0])("aria-label",s._config.ariaLabel)("aria-describedby",s._config.ariaDescribedBy||null)},standalone:!0,features:[r.qOj,r.jDz],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(e,s){1&e&&r.YNc(0,W,0,0,"ng-template",0)},dependencies:[f.Pl],styles:[".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"],encapsulation:2})}return _})();class M{constructor(u,t){this.overlayRef=u,this.config=t,this.closed=new y.x,this.disableClose=t.disableClose,this.backdropClick=u.backdropClick(),this.keydownEvents=u.keydownEvents(),this.outsidePointerEvents=u.outsidePointerEvents(),this.id=t.id,this.keydownEvents.subscribe(e=>{e.keyCode===P.hY&&!this.disableClose&&!(0,P.Vb)(e)&&(e.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{this.disableClose||this.close(void 0,{focusOrigin:"mouse"})}),this._detachSubscription=u.detachments().subscribe(()=>{!1!==t.closeOnOverlayDetachments&&this.close()})}close(u,t){if(this.containerInstance){const e=this.closed;this.containerInstance._closeInteractionType=t?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),e.next(u),e.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(u="",t=""){return this.overlayRef.updateSize({width:u,height:t}),this}addPanelClass(u){return this.overlayRef.addPanelClass(u),this}removePanelClass(u){return this.overlayRef.removePanelClass(u),this}}const O=new r.OlP("DialogScrollStrategy",{providedIn:"root",factory:()=>{const _=(0,r.f3M)(b.aV);return()=>_.scrollStrategies.block()}}),w=new r.OlP("DialogData"),S=new r.OlP("DefaultDialogConfig");let U=0,B=(()=>{class _{get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}constructor(t,e,s,d,g,h){this._overlay=t,this._injector=e,this._defaultOptions=s,this._parentDialog=d,this._overlayContainer=g,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new y.x,this._afterOpenedAtThisLevel=new y.x,this._ariaHiddenElements=new Map,this.afterAllClosed=(0,z.P)(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe((0,I.O)(void 0))),this._scrollStrategy=h}open(t,e){(e={...this._defaultOptions||new A,...e}).id=e.id||"cdk-dialog-"+U++,e.id&&this.getDialogById(e.id);const d=this._getOverlayConfig(e),g=this._overlay.create(d),h=new M(g,e),C=this._attachContainer(g,h,e);return h.containerInstance=C,this._attachDialogContent(t,h,C,e),this.openDialogs.length||this._hideNonDialogContentFromAssistiveTechnology(),this.openDialogs.push(h),h.closed.subscribe(()=>this._removeOpenDialog(h,!0)),this.afterOpened.next(h),h}closeAll(){R(this.openDialogs,t=>t.close())}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){R(this._openDialogsAtThisLevel,t=>{!1===t.config.closeOnDestroy&&this._removeOpenDialog(t,!1)}),R(this._openDialogsAtThisLevel,t=>t.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(t){const e=new b.X_({positionStrategy:t.positionStrategy||this._overlay.position().global().centerHorizontally().centerVertically(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,width:t.width,height:t.height,disposeOnNavigation:t.closeOnNavigation});return t.backdropClass&&(e.backdropClass=t.backdropClass),e}_attachContainer(t,e,s){const d=s.injector||s.viewContainerRef?.injector,g=[{provide:A,useValue:s},{provide:M,useValue:e},{provide:b.Iu,useValue:t}];let h;s.container?"function"==typeof s.container?h=s.container:(h=s.container.type,g.push(...s.container.providers(s))):h=p;const C=new f.C5(h,s.viewContainerRef,r.zs3.create({parent:d||this._injector,providers:g}),s.componentFactoryResolver);return t.attach(C).instance}_attachDialogContent(t,e,s,d){if(t instanceof r.Rgc){const g=this._createInjector(d,e,s,void 0);let h={$implicit:d.data,dialogRef:e};d.templateContext&&(h={...h,..."function"==typeof d.templateContext?d.templateContext():d.templateContext}),s.attachTemplatePortal(new f.UE(t,null,h,g))}else{const g=this._createInjector(d,e,s,this._injector),h=s.attachComponentPortal(new f.C5(t,d.viewContainerRef,g,d.componentFactoryResolver));e.componentRef=h,e.componentInstance=h.instance}}_createInjector(t,e,s,d){const g=t.injector||t.viewContainerRef?.injector,h=[{provide:w,useValue:t.data},{provide:M,useValue:e}];return t.providers&&("function"==typeof t.providers?h.push(...t.providers(e,t,s)):h.push(...t.providers)),t.direction&&(!g||!g.get(x.Is,null,{optional:!0}))&&h.push({provide:x.Is,useValue:{value:t.direction,change:(0,V.of)()}}),r.zs3.create({parent:g||d,providers:h})}_removeOpenDialog(t,e){const s=this.openDialogs.indexOf(t);s>-1&&(this.openDialogs.splice(s,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((d,g)=>{d?g.setAttribute("aria-hidden",d):g.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),e&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(){const t=this._overlayContainer.getContainerElement();if(t.parentElement){const e=t.parentElement.children;for(let s=e.length-1;s>-1;s--){const d=e[s];d!==t&&"SCRIPT"!==d.nodeName&&"STYLE"!==d.nodeName&&!d.hasAttribute("aria-live")&&(this._ariaHiddenElements.set(d,d.getAttribute("aria-hidden")),d.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){const t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}static#t=this.\u0275fac=function(e){return new(e||_)(r.LFG(b.aV),r.LFG(r.zs3),r.LFG(S,8),r.LFG(_,12),r.LFG(b.Xj),r.LFG(O))};static#e=this.\u0275prov=r.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"})}return _})();function R(_,u){let t=_.length;for(;t--;)u(_[t])}let G=(()=>{class _{static#t=this.\u0275fac=function(e){return new(e||_)};static#e=this.\u0275mod=r.oAB({type:_});static#i=this.\u0275inj=r.cJS({providers:[B],imports:[b.U8,f.eL,v.rt,f.eL]})}return _})()},19347:(et,Y,c)=>{c.d(Y,{Bq:()=>s,H8:()=>Z,Is:()=>it,WI:()=>e,so:()=>u,uh:()=>$,uw:()=>E,vA:()=>O,xY:()=>X});var v=c(33651),b=c(96814),o=c(19212),f=c(4300),L=c(77954),r=c(42495),P=c(68484),y=c(78645),z=c(63019),V=c(74911),x=c(32181),I=c(48180),W=c(27921),A=c(36028),N=c(23680);function M(a,m){}c(86825);class O{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.maxWidth="80vw",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.delayFocusTrap=!0,this.closeOnNavigation=!0}}const w="mdc-dialog--open",S="mdc-dialog--opening",j="mdc-dialog--closing";let B=(()=>{class a extends L.LL{constructor(i,n,l,T,D,k,F,tt,at){super(i,n,l,T,D,k,F,at),this._animationMode=tt,this._animationStateChanged=new o.vpe,this._animationsEnabled="NoopAnimations"!==this._animationMode,this._hostElement=this._elementRef.nativeElement,this._enterAnimationDuration=this._animationsEnabled?G(this._config.enterAnimationDuration)??150:0,this._exitAnimationDuration=this._animationsEnabled?G(this._config.exitAnimationDuration)??75:0,this._animationTimer=null,this._finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)},this._finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})}}_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(R,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(S,w)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(w),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(w),this._animationsEnabled?(this._hostElement.style.setProperty(R,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(j)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_clearAnimationClasses(){this._hostElement.classList.remove(S,j)}_waitForAnimationToComplete(i,n){null!==this._animationTimer&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(n,i)}_requestAnimationFrame(i){this._ngZone.runOutsideAngular(()=>{"function"==typeof requestAnimationFrame?requestAnimationFrame(i):i()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(i){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:i})}ngOnDestroy(){super.ngOnDestroy(),null!==this._animationTimer&&clearTimeout(this._animationTimer)}attachComponentPortal(i){const n=super.attachComponentPortal(i);return n.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),n}static#t=this.\u0275fac=function(n){return new(n||a)(o.Y36(o.SBq),o.Y36(f.qV),o.Y36(b.K0,8),o.Y36(O),o.Y36(f.ic),o.Y36(o.R0b),o.Y36(v.Iu),o.Y36(o.QbO,8),o.Y36(f.tE))};static#e=this.\u0275cmp=o.Xpm({type:a,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:8,hostBindings:function(n,l){2&n&&(o.Ikx("id",l._config.id),o.uIk("aria-modal",l._config.ariaModal)("role",l._config.role)("aria-labelledby",l._config.ariaLabel?null:l._ariaLabelledByQueue[0])("aria-label",l._config.ariaLabel)("aria-describedby",l._config.ariaDescribedBy||null),o.ekj("_mat-animation-noopable",!l._animationsEnabled))},standalone:!0,features:[o.qOj,o.jDz],decls:3,vars:0,consts:[[1,"mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(n,l){1&n&&(o.TgZ(0,"div",0)(1,"div",1),o.YNc(2,M,0,0,"ng-template",2),o.qZA()())},dependencies:[P.Pl],styles:['.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:var(--mdc-dialog-z-index, 7)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:none}@media(max-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px;width:560px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 112px)}}@media(max-width: 720px)and (min-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:560px}}@media(max-width: 720px)and (max-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:calc(100vh - 160px)}}@media(max-width: 720px)and (min-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px}}@media(max-width: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-height: 400px),(max-width: 600px),(min-width: 720px)and (max-height: 400px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(min-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 400px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}.mdc-dialog.mdc-dialog__scrim--hidden .mdc-dialog__scrim{opacity:0}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto;outline:0;transform:scale(0.8)}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}[dir=rtl] .mdc-dialog__surface,.mdc-dialog__surface[dir=rtl]{text-align:right}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-dialog__surface{outline:2px solid windowText}}.mdc-dialog__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-dialog__surface::before{border-color:CanvasText}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.mdc-dialog__surface::before{content:none}}.mdc-dialog__title{display:block;margin-top:0;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:0 24px 9px}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mdc-dialog__title,.mdc-dialog__title[dir=rtl]{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{margin-bottom:1px;padding-bottom:15px}.mdc-dialog--fullscreen .mdc-dialog__header{align-items:baseline;border-bottom:1px solid rgba(0,0,0,0);display:inline-flex;justify-content:space-between;padding:0 24px 9px;z-index:1}@media screen and (forced-colors: active){.mdc-dialog--fullscreen .mdc-dialog__header{border-bottom-color:CanvasText}}.mdc-dialog--fullscreen .mdc-dialog__header .mdc-dialog__close{right:-12px}.mdc-dialog--fullscreen .mdc-dialog__title{margin-bottom:0;padding:0;border-bottom:0}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:0;margin-bottom:0}.mdc-dialog--fullscreen .mdc-dialog__close{top:5px}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--fullscreen--titleless .mdc-dialog__close{margin-top:4px}.mdc-dialog--fullscreen--titleless.mdc-dialog--scrollable .mdc-dialog__close{margin-top:0}.mdc-dialog__content{flex-grow:1;box-sizing:border-box;margin:0;overflow:auto}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content,.mdc-dialog__header+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--closing .mdc-dialog__surface{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{opacity:1}.mdc-dialog--open .mdc-dialog__surface{transform:none}.mdc-dialog--open.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim{opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{transition:opacity 75ms linear}.mdc-dialog--open.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim{transition:opacity 150ms linear}.mdc-dialog__surface-scrim{display:none;opacity:0;position:absolute;width:100%;height:100%;z-index:1}.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{display:block}.mdc-dialog-scroll-lock{overflow:hidden}.mdc-dialog--no-content-padding .mdc-dialog__content{padding:0}.mdc-dialog--sheet .mdc-dialog__container .mdc-dialog__close{right:12px;top:9px;position:absolute;z-index:1}.mdc-dialog__scrim--removed{pointer-events:none}.mdc-dialog__scrim--removed .mdc-dialog__scrim,.mdc-dialog__scrim--removed .mdc-dialog__surface-scrim{display:none}.mat-mdc-dialog-content{max-height:65vh}.mat-mdc-dialog-container{position:static;display:block}.mat-mdc-dialog-container,.mat-mdc-dialog-container .mdc-dialog__container,.mat-mdc-dialog-container .mdc-dialog__surface{max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mat-mdc-dialog-container .mdc-dialog__surface{width:100%;height:100%}.mat-mdc-dialog-component-host{display:contents}.mat-mdc-dialog-container{--mdc-dialog-container-elevation: var(--mdc-dialog-container-elevation-shadow);outline:0}.mat-mdc-dialog-container .mdc-dialog__surface{background-color:var(--mdc-dialog-container-color, white)}.mat-mdc-dialog-container .mdc-dialog__surface{box-shadow:var(--mdc-dialog-container-elevation, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12))}.mat-mdc-dialog-container .mdc-dialog__surface{border-radius:var(--mdc-dialog-container-shape, 4px)}.mat-mdc-dialog-container .mdc-dialog__title{font-family:var(--mdc-dialog-subhead-font, Roboto, sans-serif);line-height:var(--mdc-dialog-subhead-line-height, 1.5rem);font-size:var(--mdc-dialog-subhead-size, 1rem);font-weight:var(--mdc-dialog-subhead-weight, 400);letter-spacing:var(--mdc-dialog-subhead-tracking, 0.03125em)}.mat-mdc-dialog-container .mdc-dialog__title{color:var(--mdc-dialog-subhead-color, rgba(0, 0, 0, 0.87))}.mat-mdc-dialog-container .mdc-dialog__content{font-family:var(--mdc-dialog-supporting-text-font, Roboto, sans-serif);line-height:var(--mdc-dialog-supporting-text-line-height, 1.5rem);font-size:var(--mdc-dialog-supporting-text-size, 1rem);font-weight:var(--mdc-dialog-supporting-text-weight, 400);letter-spacing:var(--mdc-dialog-supporting-text-tracking, 0.03125em)}.mat-mdc-dialog-container .mdc-dialog__content{color:var(--mdc-dialog-supporting-text-color, rgba(0, 0, 0, 0.6))}.mat-mdc-dialog-container .mdc-dialog__container{transition:opacity linear var(--mat-dialog-transition-duration, 0ms)}.mat-mdc-dialog-container .mdc-dialog__surface{transition:transform var(--mat-dialog-transition-duration, 0ms) 0ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-dialog-container._mat-animation-noopable .mdc-dialog__container,.mat-mdc-dialog-container._mat-animation-noopable .mdc-dialog__surface{transition:none}.mat-mdc-dialog-content{display:block}.mat-mdc-dialog-actions{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}'],encapsulation:2})}return a})();const R="--mat-dialog-transition-duration";function G(a){return null==a?null:"number"==typeof a?a:a.endsWith("ms")?(0,r.su)(a.substring(0,a.length-2)):a.endsWith("s")?1e3*(0,r.su)(a.substring(0,a.length-1)):"0"===a?0:null}var _=function(a){return a[a.OPEN=0]="OPEN",a[a.CLOSING=1]="CLOSING",a[a.CLOSED=2]="CLOSED",a}(_||{});class u{constructor(m,i,n){this._ref=m,this._containerInstance=n,this._afterOpened=new y.x,this._beforeClosed=new y.x,this._state=_.OPEN,this.disableClose=i.disableClose,this.id=m.id,n._animationStateChanged.pipe((0,x.h)(l=>"opened"===l.state),(0,I.q)(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),n._animationStateChanged.pipe((0,x.h)(l=>"closed"===l.state),(0,I.q)(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),m.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),(0,z.T)(this.backdropClick(),this.keydownEvents().pipe((0,x.h)(l=>l.keyCode===A.hY&&!this.disableClose&&!(0,A.Vb)(l)))).subscribe(l=>{this.disableClose||(l.preventDefault(),function t(a,m,i){return a._closeInteractionType=m,a.close(i)}(this,"keydown"===l.type?"keyboard":"mouse"))})}close(m){this._result=m,this._containerInstance._animationStateChanged.pipe((0,x.h)(i=>"closing"===i.state),(0,I.q)(1)).subscribe(i=>{this._beforeClosed.next(m),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),i.totalTime+100)}),this._state=_.CLOSING,this._containerInstance._startExitAnimation()}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(m){let i=this._ref.config.positionStrategy;return m&&(m.left||m.right)?m.left?i.left(m.left):i.right(m.right):i.centerHorizontally(),m&&(m.top||m.bottom)?m.top?i.top(m.top):i.bottom(m.bottom):i.centerVertically(),this._ref.updatePosition(),this}updateSize(m="",i=""){return this._ref.updateSize(m,i),this}addPanelClass(m){return this._ref.addPanelClass(m),this}removePanelClass(m){return this._ref.removePanelClass(m),this}getState(){return this._state}_finishDialogClose(){this._state=_.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}}const e=new o.OlP("MatMdcDialogData"),s=new o.OlP("mat-mdc-dialog-default-options"),d=new o.OlP("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{const a=(0,o.f3M)(v.aV);return()=>a.scrollStrategies.block()}});let C=0,E=(()=>{class a{get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){const i=this._parentDialog;return i?i._getAfterAllClosed():this._afterAllClosedAtThisLevel}constructor(i,n,l,T,D,k,F,tt){this._overlay=i,this._defaultOptions=T,this._scrollStrategy=D,this._parentDialog=k,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new y.x,this._afterOpenedAtThisLevel=new y.x,this.dialogConfigClass=O,this.afterAllClosed=(0,V.P)(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe((0,W.O)(void 0))),this._dialog=n.get(L.Vq),this._dialogRefConstructor=u,this._dialogContainerType=B,this._dialogDataToken=e}open(i,n){let l;(n={...this._defaultOptions||new O,...n}).id=n.id||"mat-mdc-dialog-"+C++,n.scrollStrategy=n.scrollStrategy||this._scrollStrategy();const T=this._dialog.open(i,{...n,positionStrategy:this._overlay.position().global().centerHorizontally().centerVertically(),disableClose:!0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:n},{provide:L.ib,useValue:n}]},templateContext:()=>({dialogRef:l}),providers:(D,k,F)=>(l=new this._dialogRefConstructor(D,n,F),l.updatePosition(n?.position),[{provide:this._dialogContainerType,useValue:F},{provide:this._dialogDataToken,useValue:k.data},{provide:this._dialogRefConstructor,useValue:l}])});return l.componentRef=T.componentRef,l.componentInstance=T.componentInstance,this.openDialogs.push(l),this.afterOpened.next(l),l.afterClosed().subscribe(()=>{const D=this.openDialogs.indexOf(l);D>-1&&(this.openDialogs.splice(D,1),this.openDialogs.length||this._getAfterAllClosed().next())}),l}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(i){return this.openDialogs.find(n=>n.id===i)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(i){let n=i.length;for(;n--;)i[n].close()}static#t=this.\u0275fac=function(n){return new(n||a)(o.LFG(v.aV),o.LFG(o.zs3),o.LFG(b.Ye,8),o.LFG(s,8),o.LFG(d),o.LFG(a,12),o.LFG(v.Xj),o.LFG(o.QbO,8))};static#e=this.\u0275prov=o.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),K=0,$=(()=>{class a{constructor(i,n,l){this._dialogRef=i,this._elementRef=n,this._dialog=l,this.id="mat-mdc-dialog-title-"+K++}ngOnInit(){this._dialogRef||(this._dialogRef=function J(a,m){let i=a.nativeElement.parentElement;for(;i&&!i.classList.contains("mat-mdc-dialog-container");)i=i.parentElement;return i?m.find(n=>n.id===i.id):null}(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)})}ngOnDestroy(){const i=this._dialogRef?._containerInstance;i&&Promise.resolve().then(()=>{i._removeAriaLabelledBy?.(this.id)})}static#t=this.\u0275fac=function(n){return new(n||a)(o.Y36(u,8),o.Y36(o.SBq),o.Y36(E))};static#e=this.\u0275dir=o.lG2({type:a,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(n,l){2&n&&o.Ikx("id",l.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],standalone:!0})}return a})(),X=(()=>{class a{static#t=this.\u0275fac=function(n){return new(n||a)};static#e=this.\u0275dir=o.lG2({type:a,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],standalone:!0})}return a})(),Z=(()=>{class a{constructor(){this.align="start"}static#t=this.\u0275fac=function(n){return new(n||a)};static#e=this.\u0275dir=o.lG2({type:a,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:4,hostBindings:function(n,l){2&n&&o.ekj("mat-mdc-dialog-actions-align-center","center"===l.align)("mat-mdc-dialog-actions-align-end","end"===l.align)},inputs:{align:"align"},standalone:!0})}return a})();let it=(()=>{class a{static#t=this.\u0275fac=function(n){return new(n||a)};static#e=this.\u0275mod=o.oAB({type:a});static#i=this.\u0275inj=o.cJS({providers:[E],imports:[L.Su,v.U8,P.eL,N.BQ,N.BQ]})}return a})()}}]);