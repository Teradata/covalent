'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [677],
  {
    20677: (A, g, n) => {
      n.d(g, { PM: () => v.P, rs: () => R, dQ: () => h.d });
      var i = n(68484),
        p = n(23680),
        c = n(19347),
        v = n(63399),
        u = n(19212);
      let R = (() => {
        class f {
          static ɵfac = function (C) {
            return new (C || f)();
          };
          static ɵmod = u.oAB({ type: f });
          static ɵinj = u.cJS({
            providers: [v.P],
            imports: [i.eL, c.Is, p.BQ],
          });
        }
        return f;
      })();
      var h = n(36490);
      n(64902);
    },
    72124: (A, g, n) => {
      n.d(g, { F: () => u, m: () => v });
      var i = n(77954),
        p = n(19347);
      let c = 0;
      class v extends p.so {
        overlayRef;
        config;
        _containerInstance;
        id;
        constructor(h, E, f, D = 'td-side-sheet-' + c++) {
          const S = new i.zj(h, E);
          super(S, E, f),
            (this.overlayRef = h),
            (this.config = E),
            (this._containerInstance = f),
            (this.id = D),
            (S.containerInstance = this._containerInstance);
        }
      }
      function u(R, h, E) {
        return (
          void 0 !== R._containerInstance &&
            (R._containerInstance._closeInteractionType = h),
          R.close(E)
        );
      }
    },
    36490: (A, g, n) => {
      n.d(g, { d: () => p, k: () => c });
      var i = n(19347),
        p = (function (v) {
          return (
            (v.pushed = 'pushed'), (v.shifted = 'shifted'), (v.none = 'none'), v
          );
        })(p || {});
      class c extends i.vA {
        subPageMode = p.pushed;
      }
    },
    64902: (A, g, n) => {
      n.d(g, { eA: () => u });
      var i = n(63399),
        p = n(72124),
        c = n(19212);
      let u = (() => {
        class S {
          dialogRef;
          _elementRef;
          _dialog;
          ariaLabel;
          type = 'button';
          dialogResult;
          _CovalentSideSheetClose;
          onClick(a) {
            this._onButtonClick(a);
          }
          constructor(a, d, m) {
            (this.dialogRef = a), (this._elementRef = d), (this._dialog = m);
          }
          ngOnInit() {
            this.dialogRef ||
              (this.dialogRef = (function D(S, C) {
                let a = S.nativeElement.parentElement;
                for (; a && !a.classList.contains('td-side-sheet-container'); )
                  a = a.parentElement;
                return a ? C.find((d) => d.id === a?.id) ?? C[0] : C[0];
              })(this._elementRef, this._dialog.openSideSheets));
          }
          ngOnChanges(a) {
            const d =
              a._CovalentSideSheetClose || a._CovalentSideSheetCloseResult;
            d && (this.dialogResult = d.currentValue);
          }
          _onButtonClick(a) {
            (0, p.F)(
              this.dialogRef,
              0 === a.screenX && 0 === a.screenY ? 'keyboard' : 'mouse',
              this.dialogResult
            );
          }
          static ɵfac = function (d) {
            return new (d || S)(c.Y36(p.m, 8), c.Y36(c.SBq), c.Y36(i.P));
          };
          static ɵdir = c.lG2({
            type: S,
            selectors: [
              ['', 'td-side-sheet-close', ''],
              ['', 'CovalentSideSheetClose', ''],
            ],
            hostVars: 2,
            hostBindings: function (d, m) {
              1 & d &&
                c.NdJ('click', function (x) {
                  return m.onClick(x);
                }),
                2 & d && c.uIk('arial-label', m.ariaLabel)('type', m.type);
            },
            inputs: {
              ariaLabel: ['aria-label', 'ariaLabel'],
              type: 'type',
              dialogResult: ['td-side-sheet-close', 'dialogResult'],
              _CovalentSideSheetClose: [
                'CovalentSideSheetClose',
                '_CovalentSideSheetClose',
              ],
            },
            exportAs: ['CovalentSideSheetClose'],
            features: [c.TTD],
          });
        }
        return S;
      })();
    },
    63399: (A, g, n) => {
      n.d(g, { P: () => L });
      var i = n(19212),
        p = n(33651),
        c = n(68484),
        v = n(19347),
        u = n(23680),
        R = n(96814),
        h = n(86825);
      const E = {
        sideSheetContainer: (0, h.X$)('sideSheetContainer', [
          (0, h.SB)('void, exit', (0, h.oB)({ transform: 'translateX(100%)' })),
          (0, h.SB)(
            'enter',
            (0, h.oB)({ transform: 'translateX(0%)', opacity: 1 })
          ),
          (0, h.eR)(
            '* => enter',
            (0, h.jt)(
              `${u.mZ.ENTERING} ${u.yN.ACCELERATION_CURVE}`,
              (0, h.oB)({ transform: 'translateX(0)', opacity: 1 })
            )
          ),
          (0, h.eR)(
            '* => void, * => exit',
            (0, h.jt)(
              `${u.mZ.EXITING} ${u.yN.ACCELERATION_CURVE}`,
              (0, h.oB)({ transform: 'translateX(100%)' })
            )
          ),
        ]),
      };
      var f = n(36490),
        D = n(4300);
      function S(o, B) {}
      function C() {
        let o =
          typeof document < 'u' && document ? document.activeElement : null;
        for (; o && o.shadowRoot; ) {
          const B = o.shadowRoot.activeElement;
          if (B === o) break;
          o = B;
        }
        return o;
      }
      let a = (() => {
          class o extends c.en {
            _elementRef;
            _focusTrapFactory;
            _changeDetectorRef;
            _config;
            _focusMonitor;
            _document;
            _portalOutlet;
            _focusTrap;
            _animationStateChanged = new i.vpe();
            _elementFocusedBeforeSideSheetWasOpened = null;
            _closeInteractionType = null;
            _ariaLabelledBy;
            _id;
            constructor(e, t, s, r, l, _) {
              super(),
                (this._elementRef = e),
                (this._focusTrapFactory = t),
                (this._changeDetectorRef = s),
                (this._config = l),
                (this._focusMonitor = _),
                (this._ariaLabelledBy = l.ariaLabelledBy || null),
                (this._document = r);
            }
            _initializeWithAttachedContent() {
              this._setupFocusTrap(), this._capturePreviouslyFocusedElement();
            }
            attachComponentPortal(e) {
              return this._portalOutlet.attachComponentPortal(e);
            }
            attachTemplatePortal(e) {
              return this._portalOutlet.attachTemplatePortal(e);
            }
            attachDomPortal = (e) => this._portalOutlet.attachDomPortal(e);
            _recaptureFocus() {
              this._containsFocus() || this._trapFocus();
            }
            _trapFocus() {
              const e = this._elementRef.nativeElement;
              this._config.autoFocus
                ? this._focusTrap.focusInitialElementWhenReady().then((t) => {
                    t || this._focusSideSheetContainer();
                  })
                : this._containsFocus() || e.focus();
            }
            _restoreFocus() {
              const e = this._elementFocusedBeforeSideSheetWasOpened;
              if (
                this._config.restoreFocus &&
                e &&
                'function' == typeof e.focus
              ) {
                const t = C(),
                  s = this._elementRef.nativeElement;
                (!t || t === this._document.body || t === s || s.contains(t)) &&
                  (this._focusMonitor
                    ? (this._focusMonitor.focusVia(
                        e,
                        this._closeInteractionType
                      ),
                      (this._closeInteractionType = null))
                    : e.focus());
              }
              this._focusTrap && this._focusTrap.destroy();
            }
            _setupFocusTrap() {
              this._focusTrap = this._focusTrapFactory.create(
                this._elementRef.nativeElement
              );
            }
            _capturePreviouslyFocusedElement() {
              this._document &&
                (this._elementFocusedBeforeSideSheetWasOpened = C());
            }
            _focusSideSheetContainer() {
              this._elementRef.nativeElement.focus &&
                this._elementRef.nativeElement.focus();
            }
            _containsFocus() {
              const e = this._elementRef.nativeElement,
                t = C();
              return e === t || e.contains(t);
            }
            static ɵfac = function (t) {
              return new (t || o)(
                i.Y36(i.SBq),
                i.Y36(D.vO),
                i.Y36(i.sBO),
                i.Y36(R.K0, 8),
                i.Y36(f.k),
                i.Y36(D.tE)
              );
            };
            static ɵdir = i.lG2({
              type: o,
              viewQuery: function (t, s) {
                if ((1 & t && i.Gf(c.Pl, 7), 2 & t)) {
                  let r;
                  i.iGM((r = i.CRH())) && (s._portalOutlet = r.first);
                }
              },
              features: [i.qOj],
            });
          }
          return o;
        })(),
        d = (() => {
          class o extends a {
            _state = 'enter';
            tdSideSheetContainerClass = !0;
            tabIndex = -1;
            arialModal = !0;
            idAttr = this._id;
            roleAttr = this._config.role;
            arialLabelByAttr = this._config.ariaLabel
              ? null
              : this._ariaLabelledBy;
            arialDescribeByAttr = this._config.ariaDescribedBy || null;
            arialLabelAttr = this._config.ariaLabel;
            get sideSheetAnimationState() {
              return this._state;
            }
            onAnimateStart(e) {
              this._onAnimationStart(e);
            }
            onAnimateDone(e) {
              this._onAnimationDone(e);
            }
            _onAnimationDone({ toState: e, totalTime: t }) {
              'enter' === e
                ? (this._trapFocus(),
                  this._animationStateChanged.next({
                    state: 'opened',
                    totalTime: t,
                  }))
                : 'exit' === e &&
                  (this._restoreFocus(),
                  this._animationStateChanged.next({
                    state: 'closed',
                    totalTime: t,
                  }));
            }
            _onAnimationStart({ toState: e, totalTime: t }) {
              'enter' === e
                ? this._animationStateChanged.next({
                    state: 'opening',
                    totalTime: t,
                  })
                : ('exit' === e || 'void' === e) &&
                  this._animationStateChanged.next({
                    state: 'closing',
                    totalTime: t,
                  });
            }
            _startExitAnimation() {
              (this._state = 'exit'), this._changeDetectorRef.markForCheck();
            }
            static ɵfac = (() => {
              let e;
              return function (s) {
                return (e || (e = i.n5z(o)))(s || o);
              };
            })();
            static ɵcmp = i.Xpm({
              type: o,
              selectors: [['td-side-sheet-container']],
              hostVars: 10,
              hostBindings: function (t, s) {
                1 & t &&
                  i.WFA('@sideSheetContainer.start', function (l) {
                    return s.onAnimateStart(l);
                  })('@sideSheetContainer.done', function (l) {
                    return s.onAnimateDone(l);
                  }),
                  2 & t &&
                    (i.Ikx('tabindex', s.tabIndex)('aria-modal', s.arialModal)(
                      'id',
                      s.idAttr
                    ),
                    i.uIk('role', s.roleAttr)(
                      'aria-labelledby',
                      s.arialLabelByAttr
                    )('aria-describedby', s.arialDescribeByAttr)(
                      'aria-label',
                      s.arialLabelAttr
                    ),
                    i.d8E('@sideSheetContainer', s.sideSheetAnimationState),
                    i.ekj(
                      'td-side-sheet-container',
                      s.tdSideSheetContainerClass
                    ));
              },
              features: [i.qOj],
              decls: 1,
              vars: 0,
              consts: [['cdkPortalOutlet', '']],
              template: function (t, s) {
                1 & t && i.YNc(0, S, 0, 0, 'ng-template', 0);
              },
              dependencies: [c.Pl],
              styles: [
                '.td-side-sheet-container{box-shadow:0 8px 10px -5px #0003,0 16px 24px 2px #00000024,0 6px 30px 5px #0000001f;display:block;padding:24px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.td-side-sheet-wrapper{display:flex;flex-direction:column;height:100%}.td-side-sheet-content{margin:0 -24px;padding:0 24px;overflow:auto;flex:1;-webkit-overflow-scrolling:touch}.td-side-sheet-title{margin:-16px 0 20px;display:flex;align-items:center}.td-side-sheet-actions{padding:8px 0;margin:0 -16px -24px;display:flex;justify-content:space-between;flex-wrap:wrap;align-items:center;box-sizing:content-box}.td-side-sheet-actions[align=end]{justify-content:flex-end}.td-side-sheet-actions[align=center]{justify-content:center}.td-side-sheet-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .td-side-sheet-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n',
              ],
              encapsulation: 2,
              data: { animation: [E.sideSheetContainer] },
            });
          }
          return o;
        })();
      var m = n(78645),
        T = n(22096),
        x = n(32181),
        b = n(48180),
        I = n(49388),
        O = n(72124);
      let F = (() => {
          class o {
            _overlay;
            _injector;
            _defaultOptions;
            _parentSideSheet;
            _sideSheetRefConstructor;
            _sideSheetContainerType;
            _sideSheetDataToken;
            _openSideSheetsAtThisLevel = [];
            _afterAllClosedAtThisLevel = new m.x();
            _afterOpenedAtThisLevel = new m.x();
            _animationStateSubscriptions;
            defaultSidebarConfig = { minWidth: '400px', maxWidth: '100vw' };
            constructor(e, t, s, r, l, _, y) {
              (this._overlay = e),
                (this._injector = t),
                (this._defaultOptions = s),
                (this._parentSideSheet = r),
                (this._sideSheetRefConstructor = l),
                (this._sideSheetContainerType = _),
                (this._sideSheetDataToken = y);
            }
            get openSideSheets() {
              return this._parentSideSheet
                ? this._parentSideSheet.openSideSheets
                : this._openSideSheetsAtThisLevel;
            }
            open(e, t) {
              t = {
                ...(this._defaultOptions || new f.k()),
                ...this.defaultSidebarConfig,
                ...t,
              };
              const s = this._createOverlay(t),
                r = this._attachSideSheetContainer(s, t),
                l = this._attachSideSheetContent(e, r, s, t),
                _ = this.openSideSheets.slice(-1)[0],
                y = _?.overlayRef;
              return (
                y?.overlayElement &&
                  t.subPageMode !== f.d.none &&
                  ((y.overlayElement.style.transition = `${u.mZ.COMPLEX} ${u.yN.DECELERATION_CURVE}`),
                  t.subPageMode === f.d.pushed
                    ? (y.overlayElement.style.minWidth = `${window.innerWidth}px`)
                    : t.subPageMode === f.d.shifted &&
                      (y.overlayElement.style.minWidth = `${
                        l.overlayRef.overlayElement.offsetWidth + 200
                      }px`)),
                l._containerInstance._animationStateChanged
                  .pipe(
                    (0, x.h)((P) => 'closing' === P.state && !(!_ || !y)),
                    (0, b.q)(1)
                  )
                  .subscribe(() => {
                    (y.overlayElement.style.transition = `${u.mZ.EXITING} ${u.yN.DECELERATION_CURVE}`),
                      _.updateSize();
                  }),
                this.openSideSheets.push(l),
                l
                  .afterClosed()
                  .pipe((0, b.q)(1))
                  .subscribe(() => this._removeOpenSideSheet(l)),
                r._initializeWithAttachedContent(),
                l
              );
            }
            ngOnDestroy() {
              this._closeSideSheets(this._openSideSheetsAtThisLevel),
                this._afterAllClosedAtThisLevel.complete(),
                this._afterOpenedAtThisLevel.complete(),
                this._animationStateSubscriptions &&
                  this._animationStateSubscriptions.unsubscribe();
            }
            closeAll() {
              this._closeSideSheets(this.openSideSheets);
            }
            _createOverlay(e) {
              const t = new p.X_({
                  positionStrategy: this._overlay.position().global(),
                  scrollStrategy: this._overlay.scrollStrategies.block(),
                  panelClass: e.panelClass,
                  hasBackdrop: e.hasBackdrop,
                  direction: e.direction,
                  minWidth: e.minWidth,
                  minHeight: e.minHeight,
                  maxWidth: e.maxWidth,
                }),
                s = this._overlay.create(t);
              return s.getConfig().positionStrategy.right('0px'), s;
            }
            _attachSideSheetContainer(e, t) {
              const r = i.zs3.create({
                  parent:
                    (t && t.viewContainerRef && t.viewContainerRef.injector) ||
                    this._injector,
                  providers: [{ provide: f.k, useValue: t }],
                }),
                l = new c.C5(
                  this._sideSheetContainerType,
                  t.viewContainerRef,
                  r,
                  t.componentFactoryResolver
                );
              return e.attach(l).instance;
            }
            _attachSideSheetContent(e, t, s, r) {
              const l = new this._sideSheetRefConstructor(s, r, t, r.id);
              if (e instanceof i.Rgc)
                t.attachTemplatePortal(
                  new c.UE(e, null, { $implicit: r.data, sideSheetRef: l })
                );
              else {
                const _ = this._createInjector(r, l, t),
                  y = t.attach(new c.C5(e, r.viewContainerRef, _));
                l.componentInstance = y.instance;
              }
              return l.updateSize(r.width, r.height), l;
            }
            _createInjector(e, t, s) {
              const r = e && e.viewContainerRef && e.viewContainerRef.injector,
                l = [
                  { provide: this._sideSheetContainerType, useValue: s },
                  { provide: this._sideSheetDataToken, useValue: e.data },
                  { provide: this._sideSheetRefConstructor, useValue: t },
                ];
              return (
                e.direction &&
                  (!r || !r.get(I.Is, null, i.XFs.Optional)) &&
                  l.push({
                    provide: I.Is,
                    useValue: { value: e.direction, change: (0, T.of)() },
                  }),
                i.zs3.create({ parent: r || this._injector, providers: l })
              );
            }
            _removeOpenSideSheet(e) {
              const t = this.openSideSheets.indexOf(e);
              t > -1 && this.openSideSheets.splice(t, 1);
            }
            _closeSideSheets(e) {
              let t = e.length;
              for (; t--; ) e[t].close();
            }
            static ɵfac = function (t) {
              i.$Z();
            };
            static ɵdir = i.lG2({ type: o });
          }
          return o;
        })(),
        L = (() => {
          class o extends F {
            constructor(e, t, s, r) {
              super(e, t, s, r, O.m, d, v.WI);
            }
            static ɵfac = function (t) {
              return new (t || o)(
                i.LFG(p.aV),
                i.LFG(i.zs3),
                i.LFG(v.Bq, 8),
                i.LFG(o, 12)
              );
            };
            static ɵprov = i.Yz7({ token: o, factory: o.ɵfac });
          }
          return o;
        })();
    },
  },
]);
