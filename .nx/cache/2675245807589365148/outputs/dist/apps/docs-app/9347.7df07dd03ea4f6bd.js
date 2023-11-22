'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [9347],
  {
    77954: (J, V, c) => {
      c.d(V, {
        LL: () => u,
        Su: () => G,
        Vq: () => j,
        ib: () => T,
        zj: () => P,
      });
      var D = c(4300),
        b = c(33651),
        n = c(62831),
        f = c(68484),
        R = c(96814),
        d = c(19212),
        I = c(36028),
        A = c(78645),
        z = c(74911),
        U = c(22096),
        E = c(49388),
        B = c(27921);
      function K(g, p) {}
      class T {
        constructor() {
          (this.role = 'dialog'),
            (this.panelClass = ''),
            (this.hasBackdrop = !0),
            (this.backdropClass = ''),
            (this.disableClose = !1),
            (this.width = ''),
            (this.height = ''),
            (this.data = null),
            (this.ariaDescribedBy = null),
            (this.ariaLabelledBy = null),
            (this.ariaLabel = null),
            (this.ariaModal = !0),
            (this.autoFocus = 'first-tabbable'),
            (this.restoreFocus = !0),
            (this.closeOnNavigation = !0),
            (this.closeOnDestroy = !0),
            (this.closeOnOverlayDetachments = !0);
        }
      }
      let u = (() => {
        class g extends f.en {
          constructor(t, e, s, r, m, _, M, W) {
            super(),
              (this._elementRef = t),
              (this._focusTrapFactory = e),
              (this._config = r),
              (this._interactivityChecker = m),
              (this._ngZone = _),
              (this._overlayRef = M),
              (this._focusMonitor = W),
              (this._elementFocusedBeforeDialogWasOpened = null),
              (this._closeInteractionType = null),
              (this._ariaLabelledByQueue = []),
              (this.attachDomPortal = ($) => {
                this._portalOutlet.hasAttached();
                const F = this._portalOutlet.attachDomPortal($);
                return this._contentAttached(), F;
              }),
              (this._document = s),
              this._config.ariaLabelledBy &&
                this._ariaLabelledByQueue.push(this._config.ariaLabelledBy);
          }
          _contentAttached() {
            this._initializeFocusTrap(),
              this._handleBackdropClicks(),
              this._captureInitialFocus();
          }
          _captureInitialFocus() {
            this._trapFocus();
          }
          ngOnDestroy() {
            this._restoreFocus();
          }
          attachComponentPortal(t) {
            this._portalOutlet.hasAttached();
            const e = this._portalOutlet.attachComponentPortal(t);
            return this._contentAttached(), e;
          }
          attachTemplatePortal(t) {
            this._portalOutlet.hasAttached();
            const e = this._portalOutlet.attachTemplatePortal(t);
            return this._contentAttached(), e;
          }
          _recaptureFocus() {
            this._containsFocus() || this._trapFocus();
          }
          _forceFocus(t, e) {
            this._interactivityChecker.isFocusable(t) ||
              ((t.tabIndex = -1),
              this._ngZone.runOutsideAngular(() => {
                const s = () => {
                  t.removeEventListener('blur', s),
                    t.removeEventListener('mousedown', s),
                    t.removeAttribute('tabindex');
                };
                t.addEventListener('blur', s),
                  t.addEventListener('mousedown', s);
              })),
              t.focus(e);
          }
          _focusByCssSelector(t, e) {
            let s = this._elementRef.nativeElement.querySelector(t);
            s && this._forceFocus(s, e);
          }
          _trapFocus() {
            const t = this._elementRef.nativeElement;
            switch (this._config.autoFocus) {
              case !1:
              case 'dialog':
                this._containsFocus() || t.focus();
                break;
              case !0:
              case 'first-tabbable':
                this._focusTrap.focusInitialElementWhenReady().then((e) => {
                  e || this._focusDialogContainer();
                });
                break;
              case 'first-heading':
                this._focusByCssSelector(
                  'h1, h2, h3, h4, h5, h6, [role="heading"]'
                );
                break;
              default:
                this._focusByCssSelector(this._config.autoFocus);
            }
          }
          _restoreFocus() {
            const t = this._config.restoreFocus;
            let e = null;
            if (
              ('string' == typeof t
                ? (e = this._document.querySelector(t))
                : 'boolean' == typeof t
                ? (e = t ? this._elementFocusedBeforeDialogWasOpened : null)
                : t && (e = t),
              this._config.restoreFocus && e && 'function' == typeof e.focus)
            ) {
              const s = (0, n.ht)(),
                r = this._elementRef.nativeElement;
              (!s || s === this._document.body || s === r || r.contains(s)) &&
                (this._focusMonitor
                  ? (this._focusMonitor.focusVia(e, this._closeInteractionType),
                    (this._closeInteractionType = null))
                  : e.focus());
            }
            this._focusTrap && this._focusTrap.destroy();
          }
          _focusDialogContainer() {
            this._elementRef.nativeElement.focus &&
              this._elementRef.nativeElement.focus();
          }
          _containsFocus() {
            const t = this._elementRef.nativeElement,
              e = (0, n.ht)();
            return t === e || t.contains(e);
          }
          _initializeFocusTrap() {
            (this._focusTrap = this._focusTrapFactory.create(
              this._elementRef.nativeElement
            )),
              this._document &&
                (this._elementFocusedBeforeDialogWasOpened = (0, n.ht)());
          }
          _handleBackdropClicks() {
            this._overlayRef.backdropClick().subscribe(() => {
              this._config.disableClose && this._recaptureFocus();
            });
          }
          static #t = (this.ɵfac = function (e) {
            return new (e || g)(
              d.Y36(d.SBq),
              d.Y36(D.qV),
              d.Y36(R.K0, 8),
              d.Y36(T),
              d.Y36(D.ic),
              d.Y36(d.R0b),
              d.Y36(b.Iu),
              d.Y36(D.tE)
            );
          });
          static #e = (this.ɵcmp = d.Xpm({
            type: g,
            selectors: [['cdk-dialog-container']],
            viewQuery: function (e, s) {
              if ((1 & e && d.Gf(f.Pl, 7), 2 & e)) {
                let r;
                d.iGM((r = d.CRH())) && (s._portalOutlet = r.first);
              }
            },
            hostAttrs: ['tabindex', '-1', 1, 'cdk-dialog-container'],
            hostVars: 6,
            hostBindings: function (e, s) {
              2 & e &&
                d.uIk('id', s._config.id || null)('role', s._config.role)(
                  'aria-modal',
                  s._config.ariaModal
                )(
                  'aria-labelledby',
                  s._config.ariaLabel ? null : s._ariaLabelledByQueue[0]
                )('aria-label', s._config.ariaLabel)(
                  'aria-describedby',
                  s._config.ariaDescribedBy || null
                );
            },
            features: [d.qOj],
            decls: 1,
            vars: 0,
            consts: [['cdkPortalOutlet', '']],
            template: function (e, s) {
              1 & e && d.YNc(0, K, 0, 0, 'ng-template', 0);
            },
            dependencies: [f.Pl],
            styles: [
              '.cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}',
            ],
            encapsulation: 2,
          }));
        }
        return g;
      })();
      class P {
        constructor(p, t) {
          (this.overlayRef = p),
            (this.config = t),
            (this.closed = new A.x()),
            (this.disableClose = t.disableClose),
            (this.backdropClick = p.backdropClick()),
            (this.keydownEvents = p.keydownEvents()),
            (this.outsidePointerEvents = p.outsidePointerEvents()),
            (this.id = t.id),
            this.keydownEvents.subscribe((e) => {
              e.keyCode === I.hY &&
                !this.disableClose &&
                !(0, I.Vb)(e) &&
                (e.preventDefault(),
                this.close(void 0, { focusOrigin: 'keyboard' }));
            }),
            this.backdropClick.subscribe(() => {
              this.disableClose || this.close(void 0, { focusOrigin: 'mouse' });
            }),
            (this._detachSubscription = p.detachments().subscribe(() => {
              !1 !== t.closeOnOverlayDetachments && this.close();
            }));
        }
        close(p, t) {
          if (this.containerInstance) {
            const e = this.closed;
            (this.containerInstance._closeInteractionType =
              t?.focusOrigin || 'program'),
              this._detachSubscription.unsubscribe(),
              this.overlayRef.dispose(),
              e.next(p),
              e.complete(),
              (this.componentInstance = this.containerInstance = null);
          }
        }
        updatePosition() {
          return this.overlayRef.updatePosition(), this;
        }
        updateSize(p = '', t = '') {
          return this.overlayRef.updateSize({ width: p, height: t }), this;
        }
        addPanelClass(p) {
          return this.overlayRef.addPanelClass(p), this;
        }
        removePanelClass(p) {
          return this.overlayRef.removePanelClass(p), this;
        }
      }
      const O = new d.OlP('DialogScrollStrategy'),
        k = new d.OlP('DialogData'),
        S = new d.OlP('DefaultDialogConfig'),
        H = {
          provide: O,
          deps: [b.aV],
          useFactory: function Y(g) {
            return () => g.scrollStrategies.block();
          },
        };
      let Q = 0,
        j = (() => {
          class g {
            get openDialogs() {
              return this._parentDialog
                ? this._parentDialog.openDialogs
                : this._openDialogsAtThisLevel;
            }
            get afterOpened() {
              return this._parentDialog
                ? this._parentDialog.afterOpened
                : this._afterOpenedAtThisLevel;
            }
            constructor(t, e, s, r, m, _) {
              (this._overlay = t),
                (this._injector = e),
                (this._defaultOptions = s),
                (this._parentDialog = r),
                (this._overlayContainer = m),
                (this._openDialogsAtThisLevel = []),
                (this._afterAllClosedAtThisLevel = new A.x()),
                (this._afterOpenedAtThisLevel = new A.x()),
                (this._ariaHiddenElements = new Map()),
                (this.afterAllClosed = (0, z.P)(() =>
                  this.openDialogs.length
                    ? this._getAfterAllClosed()
                    : this._getAfterAllClosed().pipe((0, B.O)(void 0))
                )),
                (this._scrollStrategy = _);
            }
            open(t, e) {
              ((e = { ...(this._defaultOptions || new T()), ...e }).id =
                e.id || 'cdk-dialog-' + Q++),
                e.id && this.getDialogById(e.id);
              const r = this._getOverlayConfig(e),
                m = this._overlay.create(r),
                _ = new P(m, e),
                M = this._attachContainer(m, _, e);
              return (
                (_.containerInstance = M),
                this._attachDialogContent(t, _, M, e),
                this.openDialogs.length ||
                  this._hideNonDialogContentFromAssistiveTechnology(),
                this.openDialogs.push(_),
                _.closed.subscribe(() => this._removeOpenDialog(_, !0)),
                this.afterOpened.next(_),
                _
              );
            }
            closeAll() {
              w(this.openDialogs, (t) => t.close());
            }
            getDialogById(t) {
              return this.openDialogs.find((e) => e.id === t);
            }
            ngOnDestroy() {
              w(this._openDialogsAtThisLevel, (t) => {
                !1 === t.config.closeOnDestroy && this._removeOpenDialog(t, !1);
              }),
                w(this._openDialogsAtThisLevel, (t) => t.close()),
                this._afterAllClosedAtThisLevel.complete(),
                this._afterOpenedAtThisLevel.complete(),
                (this._openDialogsAtThisLevel = []);
            }
            _getOverlayConfig(t) {
              const e = new b.X_({
                positionStrategy:
                  t.positionStrategy ||
                  this._overlay
                    .position()
                    .global()
                    .centerHorizontally()
                    .centerVertically(),
                scrollStrategy: t.scrollStrategy || this._scrollStrategy(),
                panelClass: t.panelClass,
                hasBackdrop: t.hasBackdrop,
                direction: t.direction,
                minWidth: t.minWidth,
                minHeight: t.minHeight,
                maxWidth: t.maxWidth,
                maxHeight: t.maxHeight,
                width: t.width,
                height: t.height,
                disposeOnNavigation: t.closeOnNavigation,
              });
              return t.backdropClass && (e.backdropClass = t.backdropClass), e;
            }
            _attachContainer(t, e, s) {
              const r = s.injector || s.viewContainerRef?.injector,
                m = [
                  { provide: T, useValue: s },
                  { provide: P, useValue: e },
                  { provide: b.Iu, useValue: t },
                ];
              let _;
              s.container
                ? 'function' == typeof s.container
                  ? (_ = s.container)
                  : ((_ = s.container.type),
                    m.push(...s.container.providers(s)))
                : (_ = u);
              const M = new f.C5(
                _,
                s.viewContainerRef,
                d.zs3.create({ parent: r || this._injector, providers: m }),
                s.componentFactoryResolver
              );
              return t.attach(M).instance;
            }
            _attachDialogContent(t, e, s, r) {
              if (t instanceof d.Rgc) {
                const m = this._createInjector(r, e, s, void 0);
                let _ = { $implicit: r.data, dialogRef: e };
                r.templateContext &&
                  (_ = {
                    ..._,
                    ...('function' == typeof r.templateContext
                      ? r.templateContext()
                      : r.templateContext),
                  }),
                  s.attachTemplatePortal(new f.UE(t, null, _, m));
              } else {
                const m = this._createInjector(r, e, s, this._injector),
                  _ = s.attachComponentPortal(
                    new f.C5(
                      t,
                      r.viewContainerRef,
                      m,
                      r.componentFactoryResolver
                    )
                  );
                (e.componentRef = _), (e.componentInstance = _.instance);
              }
            }
            _createInjector(t, e, s, r) {
              const m = t.injector || t.viewContainerRef?.injector,
                _ = [
                  { provide: k, useValue: t.data },
                  { provide: P, useValue: e },
                ];
              return (
                t.providers &&
                  ('function' == typeof t.providers
                    ? _.push(...t.providers(e, t, s))
                    : _.push(...t.providers)),
                t.direction &&
                  (!m || !m.get(E.Is, null, { optional: !0 })) &&
                  _.push({
                    provide: E.Is,
                    useValue: { value: t.direction, change: (0, U.of)() },
                  }),
                d.zs3.create({ parent: m || r, providers: _ })
              );
            }
            _removeOpenDialog(t, e) {
              const s = this.openDialogs.indexOf(t);
              s > -1 &&
                (this.openDialogs.splice(s, 1),
                this.openDialogs.length ||
                  (this._ariaHiddenElements.forEach((r, m) => {
                    r
                      ? m.setAttribute('aria-hidden', r)
                      : m.removeAttribute('aria-hidden');
                  }),
                  this._ariaHiddenElements.clear(),
                  e && this._getAfterAllClosed().next()));
            }
            _hideNonDialogContentFromAssistiveTechnology() {
              const t = this._overlayContainer.getContainerElement();
              if (t.parentElement) {
                const e = t.parentElement.children;
                for (let s = e.length - 1; s > -1; s--) {
                  const r = e[s];
                  r !== t &&
                    'SCRIPT' !== r.nodeName &&
                    'STYLE' !== r.nodeName &&
                    !r.hasAttribute('aria-live') &&
                    (this._ariaHiddenElements.set(
                      r,
                      r.getAttribute('aria-hidden')
                    ),
                    r.setAttribute('aria-hidden', 'true'));
                }
              }
            }
            _getAfterAllClosed() {
              const t = this._parentDialog;
              return t
                ? t._getAfterAllClosed()
                : this._afterAllClosedAtThisLevel;
            }
            static #t = (this.ɵfac = function (e) {
              return new (e || g)(
                d.LFG(b.aV),
                d.LFG(d.zs3),
                d.LFG(S, 8),
                d.LFG(g, 12),
                d.LFG(b.Xj),
                d.LFG(O)
              );
            });
            static #e = (this.ɵprov = d.Yz7({ token: g, factory: g.ɵfac }));
          }
          return g;
        })();
      function w(g, p) {
        let t = g.length;
        for (; t--; ) p(g[t]);
      }
      let G = (() => {
        class g {
          static #t = (this.ɵfac = function (e) {
            return new (e || g)();
          });
          static #e = (this.ɵmod = d.oAB({ type: g }));
          static #i = (this.ɵinj = d.cJS({
            providers: [j, H],
            imports: [b.U8, f.eL, D.rt, f.eL],
          }));
        }
        return g;
      })();
    },
    19347: (J, V, c) => {
      c.d(V, {
        Bq: () => s,
        H8: () => it,
        Is: () => ot,
        WI: () => e,
        so: () => p,
        uh: () => tt,
        uw: () => F,
        vA: () => O,
        xY: () => et,
      });
      var D = c(33651),
        b = c(96814),
        n = c(19212),
        f = c(4300),
        R = c(77954),
        d = c(42495),
        I = c(68484),
        A = c(78645),
        z = c(63019),
        U = c(74911),
        E = c(32181),
        B = c(48180),
        K = c(27921),
        T = c(36028),
        N = c(23680);
      function P(a, h) {}
      c(86825);
      class O {
        constructor() {
          (this.role = 'dialog'),
            (this.panelClass = ''),
            (this.hasBackdrop = !0),
            (this.backdropClass = ''),
            (this.disableClose = !1),
            (this.width = ''),
            (this.height = ''),
            (this.maxWidth = '80vw'),
            (this.data = null),
            (this.ariaDescribedBy = null),
            (this.ariaLabelledBy = null),
            (this.ariaLabel = null),
            (this.ariaModal = !0),
            (this.autoFocus = 'first-tabbable'),
            (this.restoreFocus = !0),
            (this.delayFocusTrap = !0),
            (this.closeOnNavigation = !0);
        }
      }
      const k = 'mdc-dialog--open',
        S = 'mdc-dialog--opening',
        Y = 'mdc-dialog--closing';
      let j = (() => {
        class a extends R.LL {
          constructor(i, o, l, x, v, C, y, L) {
            super(i, o, l, x, v, C, y, L),
              (this._animationStateChanged = new n.vpe());
          }
          _captureInitialFocus() {
            this._config.delayFocusTrap || this._trapFocus();
          }
          _openAnimationDone(i) {
            this._config.delayFocusTrap && this._trapFocus(),
              this._animationStateChanged.next({
                state: 'opened',
                totalTime: i,
              });
          }
          static #t = (this.ɵfac = function (o) {
            return new (o || a)(
              n.Y36(n.SBq),
              n.Y36(f.qV),
              n.Y36(b.K0, 8),
              n.Y36(O),
              n.Y36(f.ic),
              n.Y36(n.R0b),
              n.Y36(D.Iu),
              n.Y36(f.tE)
            );
          });
          static #e = (this.ɵcmp = n.Xpm({
            type: a,
            selectors: [['ng-component']],
            features: [n.qOj],
            decls: 0,
            vars: 0,
            template: function (o, l) {},
            encapsulation: 2,
          }));
        }
        return a;
      })();
      const w = '--mat-dialog-transition-duration';
      function G(a) {
        return null == a
          ? null
          : 'number' == typeof a
          ? a
          : a.endsWith('ms')
          ? (0, d.su)(a.substring(0, a.length - 2))
          : a.endsWith('s')
          ? 1e3 * (0, d.su)(a.substring(0, a.length - 1))
          : '0' === a
          ? 0
          : null;
      }
      let g = (() => {
        class a extends j {
          constructor(i, o, l, x, v, C, y, L, X) {
            super(i, o, l, x, v, C, y, X),
              (this._animationMode = L),
              (this._animationsEnabled =
                'NoopAnimations' !== this._animationMode),
              (this._hostElement = this._elementRef.nativeElement),
              (this._enterAnimationDuration = this._animationsEnabled
                ? G(this._config.enterAnimationDuration) ?? 150
                : 0),
              (this._exitAnimationDuration = this._animationsEnabled
                ? G(this._config.exitAnimationDuration) ?? 75
                : 0),
              (this._animationTimer = null),
              (this._finishDialogOpen = () => {
                this._clearAnimationClasses(),
                  this._openAnimationDone(this._enterAnimationDuration);
              }),
              (this._finishDialogClose = () => {
                this._clearAnimationClasses(),
                  this._animationStateChanged.emit({
                    state: 'closed',
                    totalTime: this._exitAnimationDuration,
                  });
              });
          }
          _contentAttached() {
            super._contentAttached(), this._startOpenAnimation();
          }
          ngOnDestroy() {
            super.ngOnDestroy(),
              null !== this._animationTimer &&
                clearTimeout(this._animationTimer);
          }
          _startOpenAnimation() {
            this._animationStateChanged.emit({
              state: 'opening',
              totalTime: this._enterAnimationDuration,
            }),
              this._animationsEnabled
                ? (this._hostElement.style.setProperty(
                    w,
                    `${this._enterAnimationDuration}ms`
                  ),
                  this._requestAnimationFrame(() =>
                    this._hostElement.classList.add(S, k)
                  ),
                  this._waitForAnimationToComplete(
                    this._enterAnimationDuration,
                    this._finishDialogOpen
                  ))
                : (this._hostElement.classList.add(k),
                  Promise.resolve().then(() => this._finishDialogOpen()));
          }
          _startExitAnimation() {
            this._animationStateChanged.emit({
              state: 'closing',
              totalTime: this._exitAnimationDuration,
            }),
              this._hostElement.classList.remove(k),
              this._animationsEnabled
                ? (this._hostElement.style.setProperty(
                    w,
                    `${this._exitAnimationDuration}ms`
                  ),
                  this._requestAnimationFrame(() =>
                    this._hostElement.classList.add(Y)
                  ),
                  this._waitForAnimationToComplete(
                    this._exitAnimationDuration,
                    this._finishDialogClose
                  ))
                : Promise.resolve().then(() => this._finishDialogClose());
          }
          _clearAnimationClasses() {
            this._hostElement.classList.remove(S, Y);
          }
          _waitForAnimationToComplete(i, o) {
            null !== this._animationTimer && clearTimeout(this._animationTimer),
              (this._animationTimer = setTimeout(o, i));
          }
          _requestAnimationFrame(i) {
            this._ngZone.runOutsideAngular(() => {
              'function' == typeof requestAnimationFrame
                ? requestAnimationFrame(i)
                : i();
            });
          }
          static #t = (this.ɵfac = function (o) {
            return new (o || a)(
              n.Y36(n.SBq),
              n.Y36(f.qV),
              n.Y36(b.K0, 8),
              n.Y36(O),
              n.Y36(f.ic),
              n.Y36(n.R0b),
              n.Y36(D.Iu),
              n.Y36(n.QbO, 8),
              n.Y36(f.tE)
            );
          });
          static #e = (this.ɵcmp = n.Xpm({
            type: a,
            selectors: [['mat-dialog-container']],
            hostAttrs: [
              'tabindex',
              '-1',
              1,
              'mat-mdc-dialog-container',
              'mdc-dialog',
            ],
            hostVars: 8,
            hostBindings: function (o, l) {
              2 & o &&
                (n.Ikx('id', l._config.id),
                n.uIk('aria-modal', l._config.ariaModal)(
                  'role',
                  l._config.role
                )(
                  'aria-labelledby',
                  l._config.ariaLabel ? null : l._ariaLabelledByQueue[0]
                )('aria-label', l._config.ariaLabel)(
                  'aria-describedby',
                  l._config.ariaDescribedBy || null
                ),
                n.ekj('_mat-animation-noopable', !l._animationsEnabled));
            },
            features: [n.qOj],
            decls: 3,
            vars: 0,
            consts: [
              [1, 'mdc-dialog__container'],
              [1, 'mat-mdc-dialog-surface', 'mdc-dialog__surface'],
              ['cdkPortalOutlet', ''],
            ],
            template: function (o, l) {
              1 & o &&
                (n.TgZ(0, 'div', 0)(1, 'div', 1),
                n.YNc(2, P, 0, 0, 'ng-template', 2),
                n.qZA()());
            },
            dependencies: [I.Pl],
            styles: [
              '.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:var(--mdc-dialog-z-index, 7)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:none}@media(max-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px;width:560px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 112px)}}@media(max-width: 720px)and (min-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:560px}}@media(max-width: 720px)and (max-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:calc(100vh - 160px)}}@media(max-width: 720px)and (min-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px}}@media(max-width: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-height: 400px),(max-width: 600px),(min-width: 720px)and (max-height: 400px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(min-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 400px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}.mdc-dialog.mdc-dialog__scrim--hidden .mdc-dialog__scrim{opacity:0}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;transform:scale(0.8);opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto;outline:0}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}[dir=rtl] .mdc-dialog__surface,.mdc-dialog__surface[dir=rtl]{text-align:right}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-dialog__surface{outline:2px solid windowText}}.mdc-dialog__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-dialog__surface::before{border-color:CanvasText}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.mdc-dialog__surface::before{content:none}}.mdc-dialog__title{display:block;margin-top:0;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:0 24px 9px}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mdc-dialog__title,.mdc-dialog__title[dir=rtl]{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{margin-bottom:1px;padding-bottom:15px}.mdc-dialog--fullscreen .mdc-dialog__header{align-items:baseline;border-bottom:1px solid rgba(0,0,0,0);display:inline-flex;justify-content:space-between;padding:0 24px 9px;z-index:1}@media screen and (forced-colors: active){.mdc-dialog--fullscreen .mdc-dialog__header{border-bottom-color:CanvasText}}.mdc-dialog--fullscreen .mdc-dialog__header .mdc-dialog__close{right:-12px}.mdc-dialog--fullscreen .mdc-dialog__title{margin-bottom:0;padding:0;border-bottom:0}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:0;margin-bottom:0}.mdc-dialog--fullscreen .mdc-dialog__close{top:5px}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--fullscreen--titleless .mdc-dialog__close{margin-top:4px}.mdc-dialog--fullscreen--titleless.mdc-dialog--scrollable .mdc-dialog__close{margin-top:0}.mdc-dialog__content{flex-grow:1;box-sizing:border-box;margin:0;overflow:auto}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content,.mdc-dialog__header+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{transform:none;opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim{opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{transition:opacity 75ms linear}.mdc-dialog--open.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim{transition:opacity 150ms linear}.mdc-dialog__surface-scrim{display:none;opacity:0;position:absolute;width:100%;height:100%;z-index:1}.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{display:block}.mdc-dialog-scroll-lock{overflow:hidden}.mdc-dialog--no-content-padding .mdc-dialog__content{padding:0}.mdc-dialog--sheet .mdc-dialog__container .mdc-dialog__close{right:12px;top:9px;position:absolute;z-index:1}.mdc-dialog__scrim--removed{pointer-events:none}.mdc-dialog__scrim--removed .mdc-dialog__scrim,.mdc-dialog__scrim--removed .mdc-dialog__surface-scrim{display:none}.mat-mdc-dialog-content{max-height:65vh}.mat-mdc-dialog-container{position:static;display:block}.mat-mdc-dialog-container,.mat-mdc-dialog-container .mdc-dialog__container,.mat-mdc-dialog-container .mdc-dialog__surface{max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mat-mdc-dialog-container .mdc-dialog__surface{display:block;width:100%;height:100%}.mat-mdc-dialog-container{--mdc-dialog-container-elevation-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);--mdc-dialog-container-shadow-color:#000;--mdc-dialog-container-shape:4px;--mdc-dialog-container-elevation: var(--mdc-dialog-container-elevation-shadow);outline:0}.mat-mdc-dialog-container .mdc-dialog__surface{background-color:var(--mdc-dialog-container-color, white)}.mat-mdc-dialog-container .mdc-dialog__surface{box-shadow:var(--mdc-dialog-container-elevation, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12))}.mat-mdc-dialog-container .mdc-dialog__surface{border-radius:var(--mdc-dialog-container-shape, 4px)}.mat-mdc-dialog-container .mdc-dialog__title{font-family:var(--mdc-dialog-subhead-font, Roboto, sans-serif);line-height:var(--mdc-dialog-subhead-line-height, 1.5rem);font-size:var(--mdc-dialog-subhead-size, 1rem);font-weight:var(--mdc-dialog-subhead-weight, 400);letter-spacing:var(--mdc-dialog-subhead-tracking, 0.03125em)}.mat-mdc-dialog-container .mdc-dialog__title{color:var(--mdc-dialog-subhead-color, rgba(0, 0, 0, 0.87))}.mat-mdc-dialog-container .mdc-dialog__content{font-family:var(--mdc-dialog-supporting-text-font, Roboto, sans-serif);line-height:var(--mdc-dialog-supporting-text-line-height, 1.5rem);font-size:var(--mdc-dialog-supporting-text-size, 1rem);font-weight:var(--mdc-dialog-supporting-text-weight, 400);letter-spacing:var(--mdc-dialog-supporting-text-tracking, 0.03125em)}.mat-mdc-dialog-container .mdc-dialog__content{color:var(--mdc-dialog-supporting-text-color, rgba(0, 0, 0, 0.6))}.mat-mdc-dialog-container .mdc-dialog__container{transition-duration:var(--mat-dialog-transition-duration, 0ms)}.mat-mdc-dialog-container._mat-animation-noopable .mdc-dialog__container{transition:none}.mat-mdc-dialog-content{display:block}.mat-mdc-dialog-actions{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}',
            ],
            encapsulation: 2,
          }));
        }
        return a;
      })();
      class p {
        constructor(h, i, o) {
          (this._ref = h),
            (this._containerInstance = o),
            (this._afterOpened = new A.x()),
            (this._beforeClosed = new A.x()),
            (this._state = 0),
            (this.disableClose = i.disableClose),
            (this.id = h.id),
            o._animationStateChanged
              .pipe(
                (0, E.h)((l) => 'opened' === l.state),
                (0, B.q)(1)
              )
              .subscribe(() => {
                this._afterOpened.next(), this._afterOpened.complete();
              }),
            o._animationStateChanged
              .pipe(
                (0, E.h)((l) => 'closed' === l.state),
                (0, B.q)(1)
              )
              .subscribe(() => {
                clearTimeout(this._closeFallbackTimeout),
                  this._finishDialogClose();
              }),
            h.overlayRef.detachments().subscribe(() => {
              this._beforeClosed.next(this._result),
                this._beforeClosed.complete(),
                this._finishDialogClose();
            }),
            (0, z.T)(
              this.backdropClick(),
              this.keydownEvents().pipe(
                (0, E.h)(
                  (l) =>
                    l.keyCode === T.hY && !this.disableClose && !(0, T.Vb)(l)
                )
              )
            ).subscribe((l) => {
              this.disableClose ||
                (l.preventDefault(),
                (function t(a, h, i) {
                  (a._closeInteractionType = h), a.close(i);
                })(this, 'keydown' === l.type ? 'keyboard' : 'mouse'));
            });
        }
        close(h) {
          (this._result = h),
            this._containerInstance._animationStateChanged
              .pipe(
                (0, E.h)((i) => 'closing' === i.state),
                (0, B.q)(1)
              )
              .subscribe((i) => {
                this._beforeClosed.next(h),
                  this._beforeClosed.complete(),
                  this._ref.overlayRef.detachBackdrop(),
                  (this._closeFallbackTimeout = setTimeout(
                    () => this._finishDialogClose(),
                    i.totalTime + 100
                  ));
              }),
            (this._state = 1),
            this._containerInstance._startExitAnimation();
        }
        afterOpened() {
          return this._afterOpened;
        }
        afterClosed() {
          return this._ref.closed;
        }
        beforeClosed() {
          return this._beforeClosed;
        }
        backdropClick() {
          return this._ref.backdropClick;
        }
        keydownEvents() {
          return this._ref.keydownEvents;
        }
        updatePosition(h) {
          let i = this._ref.config.positionStrategy;
          return (
            h && (h.left || h.right)
              ? h.left
                ? i.left(h.left)
                : i.right(h.right)
              : i.centerHorizontally(),
            h && (h.top || h.bottom)
              ? h.top
                ? i.top(h.top)
                : i.bottom(h.bottom)
              : i.centerVertically(),
            this._ref.updatePosition(),
            this
          );
        }
        updateSize(h = '', i = '') {
          return this._ref.updateSize(h, i), this;
        }
        addPanelClass(h) {
          return this._ref.addPanelClass(h), this;
        }
        removePanelClass(h) {
          return this._ref.removePanelClass(h), this;
        }
        getState() {
          return this._state;
        }
        _finishDialogClose() {
          (this._state = 2),
            this._ref.close(this._result, {
              focusOrigin: this._closeInteractionType,
            }),
            (this.componentInstance = null);
        }
      }
      const e = new n.OlP('MatMdcDialogData'),
        s = new n.OlP('mat-mdc-dialog-default-options'),
        r = new n.OlP('mat-mdc-dialog-scroll-strategy'),
        _ = {
          provide: r,
          deps: [D.aV],
          useFactory: function m(a) {
            return () => a.scrollStrategies.block();
          },
        };
      let W = 0,
        $ = (() => {
          class a {
            get openDialogs() {
              return this._parentDialog
                ? this._parentDialog.openDialogs
                : this._openDialogsAtThisLevel;
            }
            get afterOpened() {
              return this._parentDialog
                ? this._parentDialog.afterOpened
                : this._afterOpenedAtThisLevel;
            }
            _getAfterAllClosed() {
              const i = this._parentDialog;
              return i
                ? i._getAfterAllClosed()
                : this._afterAllClosedAtThisLevel;
            }
            constructor(i, o, l, x, v, C, y, L, X, lt) {
              (this._overlay = i),
                (this._defaultOptions = l),
                (this._parentDialog = x),
                (this._dialogRefConstructor = y),
                (this._dialogContainerType = L),
                (this._dialogDataToken = X),
                (this._openDialogsAtThisLevel = []),
                (this._afterAllClosedAtThisLevel = new A.x()),
                (this._afterOpenedAtThisLevel = new A.x()),
                (this._idPrefix = 'mat-dialog-'),
                (this.dialogConfigClass = O),
                (this.afterAllClosed = (0, U.P)(() =>
                  this.openDialogs.length
                    ? this._getAfterAllClosed()
                    : this._getAfterAllClosed().pipe((0, K.O)(void 0))
                )),
                (this._scrollStrategy = C),
                (this._dialog = o.get(R.Vq));
            }
            open(i, o) {
              let l;
              ((o = { ...(this._defaultOptions || new O()), ...o }).id =
                o.id || `${this._idPrefix}${W++}`),
                (o.scrollStrategy = o.scrollStrategy || this._scrollStrategy());
              const x = this._dialog.open(i, {
                ...o,
                positionStrategy: this._overlay
                  .position()
                  .global()
                  .centerHorizontally()
                  .centerVertically(),
                disableClose: !0,
                closeOnDestroy: !1,
                closeOnOverlayDetachments: !1,
                container: {
                  type: this._dialogContainerType,
                  providers: () => [
                    { provide: this.dialogConfigClass, useValue: o },
                    { provide: R.ib, useValue: o },
                  ],
                },
                templateContext: () => ({ dialogRef: l }),
                providers: (v, C, y) => (
                  (l = new this._dialogRefConstructor(v, o, y)),
                  l.updatePosition(o?.position),
                  [
                    { provide: this._dialogContainerType, useValue: y },
                    { provide: this._dialogDataToken, useValue: C.data },
                    { provide: this._dialogRefConstructor, useValue: l },
                  ]
                ),
              });
              return (
                (l.componentRef = x.componentRef),
                (l.componentInstance = x.componentInstance),
                this.openDialogs.push(l),
                this.afterOpened.next(l),
                l.afterClosed().subscribe(() => {
                  const v = this.openDialogs.indexOf(l);
                  v > -1 &&
                    (this.openDialogs.splice(v, 1),
                    this.openDialogs.length ||
                      this._getAfterAllClosed().next());
                }),
                l
              );
            }
            closeAll() {
              this._closeDialogs(this.openDialogs);
            }
            getDialogById(i) {
              return this.openDialogs.find((o) => o.id === i);
            }
            ngOnDestroy() {
              this._closeDialogs(this._openDialogsAtThisLevel),
                this._afterAllClosedAtThisLevel.complete(),
                this._afterOpenedAtThisLevel.complete();
            }
            _closeDialogs(i) {
              let o = i.length;
              for (; o--; ) i[o].close();
            }
            static #t = (this.ɵfac = function (o) {
              n.$Z();
            });
            static #e = (this.ɵprov = n.Yz7({ token: a, factory: a.ɵfac }));
          }
          return a;
        })(),
        F = (() => {
          class a extends $ {
            constructor(i, o, l, x, v, C, y, L) {
              super(i, o, x, C, y, v, p, g, e, L),
                (this._idPrefix = 'mat-mdc-dialog-');
            }
            static #t = (this.ɵfac = function (o) {
              return new (o || a)(
                n.LFG(D.aV),
                n.LFG(n.zs3),
                n.LFG(b.Ye, 8),
                n.LFG(s, 8),
                n.LFG(r),
                n.LFG(a, 12),
                n.LFG(D.Xj),
                n.LFG(n.QbO, 8)
              );
            });
            static #e = (this.ɵprov = n.Yz7({ token: a, factory: a.ɵfac }));
          }
          return a;
        })(),
        q = 0,
        tt = (() => {
          class a {
            constructor(i, o, l) {
              (this._dialogRef = i),
                (this._elementRef = o),
                (this._dialog = l),
                (this.id = 'mat-mdc-dialog-title-' + q++);
            }
            ngOnInit() {
              this._dialogRef ||
                (this._dialogRef = (function at(a, h) {
                  let i = a.nativeElement.parentElement;
                  for (
                    ;
                    i && !i.classList.contains('mat-mdc-dialog-container');

                  )
                    i = i.parentElement;
                  return i ? h.find((o) => o.id === i.id) : null;
                })(this._elementRef, this._dialog.openDialogs)),
                this._dialogRef &&
                  Promise.resolve().then(() => {
                    this._dialogRef._containerInstance?._ariaLabelledByQueue?.push(
                      this.id
                    );
                  });
            }
            ngOnDestroy() {
              const i =
                this._dialogRef?._containerInstance?._ariaLabelledByQueue;
              i &&
                Promise.resolve().then(() => {
                  const o = i.indexOf(this.id);
                  o > -1 && i.splice(o, 1);
                });
            }
            static #t = (this.ɵfac = function (o) {
              return new (o || a)(n.Y36(p, 8), n.Y36(n.SBq), n.Y36(F));
            });
            static #e = (this.ɵdir = n.lG2({
              type: a,
              selectors: [
                ['', 'mat-dialog-title', ''],
                ['', 'matDialogTitle', ''],
              ],
              hostAttrs: [1, 'mat-mdc-dialog-title', 'mdc-dialog__title'],
              hostVars: 1,
              hostBindings: function (o, l) {
                2 & o && n.Ikx('id', l.id);
              },
              inputs: { id: 'id' },
              exportAs: ['matDialogTitle'],
            }));
          }
          return a;
        })(),
        et = (() => {
          class a {
            static #t = (this.ɵfac = function (o) {
              return new (o || a)();
            });
            static #e = (this.ɵdir = n.lG2({
              type: a,
              selectors: [
                ['', 'mat-dialog-content', ''],
                ['mat-dialog-content'],
                ['', 'matDialogContent', ''],
              ],
              hostAttrs: [1, 'mat-mdc-dialog-content', 'mdc-dialog__content'],
            }));
          }
          return a;
        })(),
        it = (() => {
          class a {
            constructor() {
              this.align = 'start';
            }
            static #t = (this.ɵfac = function (o) {
              return new (o || a)();
            });
            static #e = (this.ɵdir = n.lG2({
              type: a,
              selectors: [
                ['', 'mat-dialog-actions', ''],
                ['mat-dialog-actions'],
                ['', 'matDialogActions', ''],
              ],
              hostAttrs: [1, 'mat-mdc-dialog-actions', 'mdc-dialog__actions'],
              hostVars: 4,
              hostBindings: function (o, l) {
                2 & o &&
                  n.ekj(
                    'mat-mdc-dialog-actions-align-center',
                    'center' === l.align
                  )('mat-mdc-dialog-actions-align-end', 'end' === l.align);
              },
              inputs: { align: 'align' },
            }));
          }
          return a;
        })(),
        ot = (() => {
          class a {
            static #t = (this.ɵfac = function (o) {
              return new (o || a)();
            });
            static #e = (this.ɵmod = n.oAB({ type: a }));
            static #i = (this.ɵinj = n.cJS({
              providers: [F, _],
              imports: [R.Su, D.U8, I.eL, N.BQ, N.BQ],
            }));
          }
          return a;
        })();
    },
  },
]);
