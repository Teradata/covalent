'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [6964],
  {
    44749: (D, C, n) => {
      n.d(C, { R: () => u });
      var r = n(55629),
        t = n(19212);
      let u = (() => {
        class l {
          static ɵfac = function (d) {
            return new (d || l)();
          };
          static ɵmod = t.oAB({ type: l });
          static ɵinj = t.cJS({ imports: [r._m] });
        }
        return l;
      })();
    },
    66816: (D, C, n) => {
      n.d(C, { M: () => u });
      var r = n(19212),
        t = n(36454);
      let u = (() => {
        class l {
          items = [
            {
              title: 'RxJS',
              description: 'Reactive programming',
              icon: 'speed',
              url: 'https://github.com/ReactiveX/rxjs/blob/master/README.md',
              children: [
                { title: 'Intro pt 1', markdownString: '\u{1f525}' },
                { title: 'Intro pt 2', markdownString: '\u26a1' },
              ],
            },
            {
              title: 'Covalent',
              description: 'Terdata UI Platform',
              icon: 'whatshot',
              url: 'https://github.com/Teradata/covalent/blob/main/README.md',
            },
          ];
          static ɵfac = function (d) {
            return new (d || l)();
          };
          static ɵcmp = r.Xpm({
            type: l,
            selectors: [['markdown-navigator-demo-basic']],
            decls: 1,
            vars: 4,
            consts: [[3, 'items', 'copyCodeToClipboard']],
            template: function (d, b) {
              1 & d && r._UZ(0, 'td-markdown-navigator', 0),
                2 & d &&
                  (r.Udp('height', 700, 'px'),
                  r.Q6J('items', b.items)('copyCodeToClipboard', !0));
            },
            dependencies: [t.L],
            styles: ['[_nghost-%COMP%]{width:100%;background-color:#fff}'],
          });
        }
        return l;
      })();
    },
    55548: (D, C, n) => {
      n.d(C, { Z: () => w });
      var r = n(19212),
        t = n(96814),
        u = n(30617);
      function l(d, b) {
        if (1 & d) {
          const m = r.EpF();
          r.TgZ(0, 'mat-icon', 1),
            r.NdJ('click', function (v) {
              r.CHM(m);
              const p = r.oxw();
              return r.KtG(p._handleIconClick(v));
            }),
            r._uU(1),
            r.qZA();
        }
        if (2 & d) {
          const m = r.oxw();
          r.Udp('cursor', 'default'), r.xp6(1), r.Oqu(m.separatorIcon);
        }
      }
      const T = ['*'];
      let w = (() => {
        class d {
          _elementRef;
          _changeDetectorRef;
          _displayCrumb = !0;
          _width = 0;
          _displayIcon = !0;
          _separatorIcon = 'chevron_right';
          matButtonClass = !0;
          tdBreadCrumbClass = !0;
          get separatorIcon() {
            return this._separatorIcon;
          }
          set separatorIcon(m) {
            (this._separatorIcon = m),
              setTimeout(() => {
                this._changeDetectorRef.markForCheck();
              });
          }
          get displayIcon() {
            return this._displayIcon;
          }
          set displayIcon(m) {
            (this._displayIcon = m),
              setTimeout(() => {
                this._changeDetectorRef.markForCheck();
              });
          }
          get displayCrumb() {
            return this._displayCrumb;
          }
          set displayCrumb(m) {
            (this._displayCrumb = m),
              setTimeout(() => {
                this._changeDetectorRef.markForCheck();
              });
          }
          get width() {
            return this._width;
          }
          get displayBinding() {
            return this._displayCrumb ? void 0 : 'none';
          }
          constructor(m, c) {
            (this._elementRef = m), (this._changeDetectorRef = c);
          }
          ngAfterViewInit() {
            setTimeout(() => {
              (this._width =
                this._elementRef.nativeElement.getBoundingClientRect().width),
                this._changeDetectorRef.markForCheck();
            });
          }
          _handleIconClick(m) {
            m.stopPropagation(), m.preventDefault();
          }
          static ɵfac = function (c) {
            return new (c || d)(r.Y36(r.SBq), r.Y36(r.sBO));
          };
          static ɵcmp = r.Xpm({
            type: d,
            selectors: [['td-breadcrumb'], ['a', 'td-breadcrumb', '']],
            hostVars: 6,
            hostBindings: function (c, v) {
              2 & c &&
                (r.Udp('display', v.displayBinding),
                r.ekj('mdc-button', v.matButtonClass)(
                  'td-breadcrumb',
                  v.tdBreadCrumbClass
                ));
            },
            ngContentSelectors: T,
            decls: 2,
            vars: 1,
            consts: [
              [
                'class',
                'td-breadcrumb-separator-icon',
                3,
                'cursor',
                'click',
                4,
                'ngIf',
              ],
              [1, 'td-breadcrumb-separator-icon', 3, 'click'],
            ],
            template: function (c, v) {
              1 & c && (r.F$t(), r.Hsn(0), r.YNc(1, l, 2, 3, 'mat-icon', 0)),
                2 & c && (r.xp6(1), r.Q6J('ngIf', v.displayIcon));
            },
            dependencies: [t.O5, u.Hw],
            styles: [
              '.td-breadcrumb[_nghost-%COMP%]{display:inline-block;box-sizing:border-box;flex-direction:row;align-items:center;align-content:center;max-width:100%;justify-content:flex-end}.td-breadcrumb[_nghost-%COMP%]    >*{margin:0 10px}[_nghost-%COMP%]   .td-breadcrumb-separator-icon[_ngcontent-%COMP%]{display:inline-flex;vertical-align:middle}.mat-button[_nghost-%COMP%]{min-width:0;padding:0}',
            ],
            changeDetection: 0,
          });
        }
        return d;
      })();
    },
    7824: (D, C, n) => {
      n.d(C, { h: () => m });
      var r = n(78645),
        t = n(92438),
        u = n(83620),
        l = n(59773),
        T = n(27921),
        w = n(55548),
        d = n(19212);
      const b = ['*'];
      let m = (() => {
        class c {
          _elementRef;
          _changeDetectorRef;
          _resizing = !1;
          _separatorIcon = 'chevron_right';
          _destroy$ = new r.x();
          tdBreadCrumbsClass = !0;
          _breadcrumbs;
          hiddenBreadcrumbs = [];
          set separatorIcon(p) {
            (this._separatorIcon = p), this.setCrumbIcons();
          }
          get separatorIcon() {
            return this._separatorIcon;
          }
          constructor(p, g) {
            (this._elementRef = p), (this._changeDetectorRef = g);
          }
          ngOnInit() {
            (0, t.R)(window, 'resize')
              .pipe((0, u.b)(10), (0, l.R)(this._destroy$))
              .subscribe(() => {
                this._resizing ||
                  ((this._resizing = !0),
                  setTimeout(() => {
                    this._calculateVisibility(),
                      (this._resizing = !1),
                      this._changeDetectorRef.markForCheck();
                  }, 100));
              });
          }
          ngAfterContentInit() {
            this._breadcrumbs.changes
              .pipe((0, T.O)(this._breadcrumbs))
              .subscribe(() => {
                this.setCrumbIcons(), this._changeDetectorRef.markForCheck();
              });
          }
          ngOnDestroy() {
            this._destroy$.next();
          }
          get nativeElementWidth() {
            const p = this._elementRef.nativeElement,
              g = window.getComputedStyle(p),
              y = parseInt(g.borderLeft, 10),
              h = parseInt(g.borderRight, 10),
              f = parseInt(g.marginLeft, 10),
              M = parseInt(g.marginRight, 10),
              S = parseInt(g.paddingLeft, 10),
              O = parseInt(g.paddingRight, 10);
            return p.getBoundingClientRect().width - y - h - f - M - S - O;
          }
          get count() {
            return this._breadcrumbs ? this._breadcrumbs.length : 0;
          }
          setCrumbIcons() {
            if (this._breadcrumbs) {
              const p = this._breadcrumbs.toArray();
              p.forEach((g, y) => {
                (g.separatorIcon = this.separatorIcon),
                  (g.displayIcon = y < p.length - 1);
              });
            }
          }
          _calculateVisibility() {
            const p = this._breadcrumbs.toArray();
            let g = 0;
            const y = [];
            for (let h = p.length - 1; h >= 0; h--) {
              const f = p[h];
              g + f.width > this.nativeElementWidth
                ? ((f.displayCrumb = !1), y.push(f))
                : (f.displayCrumb = !0),
                (g += f.width);
            }
            (this.hiddenBreadcrumbs = y),
              this._changeDetectorRef.markForCheck();
          }
          static ɵfac = function (g) {
            return new (g || c)(d.Y36(d.SBq), d.Y36(d.sBO));
          };
          static ɵcmp = d.Xpm({
            type: c,
            selectors: [['td-breadcrumbs']],
            contentQueries: function (g, y, h) {
              if ((1 & g && d.Suo(h, w.Z, 5), 2 & g)) {
                let f;
                d.iGM((f = d.CRH())) && (y._breadcrumbs = f);
              }
            },
            hostVars: 2,
            hostBindings: function (g, y) {
              2 & g && d.ekj('td-breadcrumbs', y.tdBreadCrumbsClass);
            },
            inputs: { separatorIcon: 'separatorIcon' },
            ngContentSelectors: b,
            decls: 1,
            vars: 0,
            template: function (g, y) {
              1 & g && (d.F$t(), d.Hsn(0));
            },
            styles: [
              '[_nghost-%COMP%]{display:flex;align-items:center}.td-breadcrumbs[_nghost-%COMP%]{white-space:nowrap}',
            ],
            changeDetection: 0,
          });
        }
        return c;
      })();
    },
    7949: (D, C, n) => {
      n.d(C, { u: () => l });
      var r = n(96814),
        t = n(30617),
        u = n(19212);
      let l = (() => {
        class T {
          static ɵfac = function (b) {
            return new (b || T)();
          };
          static ɵmod = u.oAB({ type: T });
          static ɵinj = u.cJS({ imports: [r.ez, t.Ps] });
        }
        return T;
      })();
    },
    39419: (D, C, n) => {
      n.d(C, { A0: () => w });
      var r = n(96814),
        t = n(30617),
        l = (n(21266), n(19212));
      let w = (() => {
        class d {
          static ɵfac = function (c) {
            return new (c || d)();
          };
          static ɵmod = l.oAB({ type: d });
          static ɵinj = l.cJS({ imports: [r.ez, t.Ps] });
        }
        return d;
      })();
    },
    84859: (D, C, n) => {
      n.d(C, { i: () => u });
      var r = n(8926),
        t = n(19212);
      let u = (() => {
        class l {
          _markdownNavigatorWindowService;
          config;
          disabled = !1;
          constructor(w) {
            this._markdownNavigatorWindowService = w;
          }
          click() {
            !this.disabled &&
              this.config &&
              this._markdownNavigatorWindowService.open(this.config);
          }
          static ɵfac = function (d) {
            return new (d || l)(t.Y36(r.R));
          };
          static ɵdir = t.lG2({
            type: l,
            selectors: [['', 'tdMarkdownNavigatorWindow', '']],
            hostBindings: function (d, b) {
              1 & d &&
                t.NdJ('click', function () {
                  return b.click();
                });
            },
            inputs: {
              config: ['tdMarkdownNavigatorWindow', 'config'],
              disabled: 'disabled',
            },
          });
        }
        return l;
      })();
    },
    8926: (D, C, n) => {
      n.d(C, { R: () => p });
      var r = n(41245),
        t = n(18035),
        u = n(96814),
        l = n(19212);
      const w = { bottom: '0px', right: '0px' },
        d = '360px',
        v = {
          hasBackdrop: !1,
          closeOnNavigation: !0,
          panelClass: ['td-window-dialog'],
          position: w,
          height: '75vh',
          width: d,
          maxWidth: '100vw',
        };
      let p = (() => {
        class g {
          _tdDialogService;
          _document;
          rendererFactory;
          _renderer2;
          dragRef;
          resizableDraggableDialog;
          markdownNavigatorWindowDialog;
          markdownNavigatorWindowDialogsOpen = 0;
          constructor(h, f, M) {
            (this._tdDialogService = h),
              (this._document = f),
              (this.rendererFactory = M),
              (this._renderer2 = M.createRenderer(void 0, null));
          }
          open(h) {
            this.close();
            const f = h?.dialogConfig?.panelClass,
              M = f && !Array.isArray(f) ? [f] : [],
              S = { ...v, ...h.dialogConfig, ...M },
              { matDialogRef: O, dragRefSubject: A } =
                this._tdDialogService.openDraggable({
                  component: r.h,
                  config: S,
                  dragHandleSelectors: ['.td-window-dialog-toolbar'],
                  draggableClass: 'td-draggable-markdown-navigator-window',
                });
            return (
              (this.markdownNavigatorWindowDialog = O),
              (this.markdownNavigatorWindowDialog.componentInstance.items =
                h.items),
              (this.markdownNavigatorWindowDialog.componentInstance.labels =
                h.labels),
              (this.markdownNavigatorWindowDialog.componentInstance.startAt =
                h.startAt),
              (this.markdownNavigatorWindowDialog.componentInstance.copyCodeToClipboard =
                h.copyCodeToClipboard),
              (this.markdownNavigatorWindowDialog.componentInstance.copyCodeTooltips =
                h.copyCodeTooltips),
              (this.markdownNavigatorWindowDialog.componentInstance.compareWith =
                h.compareWith),
              (this.markdownNavigatorWindowDialog.componentInstance.toolbarColor =
                'toolbarColor' in h ? h.toolbarColor : 'primary'),
              this.markdownNavigatorWindowDialogsOpen++,
              (this.markdownNavigatorWindowDialog.componentInstance.footer =
                h.footer),
              A.subscribe((N) => {
                (this.dragRef = N),
                  (this.resizableDraggableDialog = new t.Mw(
                    this._document,
                    this._renderer2,
                    this.markdownNavigatorWindowDialog,
                    this.dragRef
                  ));
              }),
              this._handleEvents(),
              this.markdownNavigatorWindowDialog
            );
          }
          close() {
            this.markdownNavigatorWindowDialog &&
              (this.resizableDraggableDialog &&
                this.resizableDraggableDialog.detach(),
              this.markdownNavigatorWindowDialog.close());
          }
          get isOpen() {
            return this.markdownNavigatorWindowDialogsOpen > 0;
          }
          _handleEvents() {
            let h, f;
            this.markdownNavigatorWindowDialog.componentInstance.closed.subscribe(
              () => this.close()
            ),
              this.markdownNavigatorWindowDialog.componentInstance.dockToggled.subscribe(
                (M) => {
                  M
                    ? ((this.markdownNavigatorWindowDialog.componentInstance.docked =
                        !1),
                      this.markdownNavigatorWindowDialog.updateSize(
                        f.width,
                        f.height
                      ),
                      this.markdownNavigatorWindowDialog.updatePosition({
                        top: '0px',
                        right: '0px',
                        bottom: '0px',
                        left: '0px',
                      }),
                      this.dragRef.setFreeDragPosition(h),
                      (this.dragRef.disabled = !1),
                      this.resizableDraggableDialog.attach())
                    : ((f = this._getDialogSize(
                        this.markdownNavigatorWindowDialog
                      )),
                      (h = this.dragRef.getFreeDragPosition()),
                      (this.markdownNavigatorWindowDialog.componentInstance.docked =
                        !0),
                      this.markdownNavigatorWindowDialog.updateSize(d, '56px'),
                      this.markdownNavigatorWindowDialog.updatePosition(w),
                      this.dragRef.reset(),
                      (this.dragRef.disabled = !0),
                      this.resizableDraggableDialog.detach());
                }
              ),
              this.markdownNavigatorWindowDialog
                .afterClosed()
                .toPromise()
                .then(() => {
                  this.markdownNavigatorWindowDialogsOpen--;
                });
          }
          _getDialogSize(h) {
            const { width: f, height: M } = getComputedStyle(
              this._document.getElementById(h.id).parentElement
            );
            return { width: f, height: M };
          }
          static ɵfac = function (f) {
            return new (f || g)(l.LFG(t.s$), l.LFG(u.K0), l.LFG(l.FYo));
          };
          static ɵprov = l.Yz7({ token: g, factory: g.ɵfac });
        }
        return g;
      })();
    },
    41245: (D, C, n) => {
      n.d(C, { h: () => T });
      var r = n(19212),
        t = n(73545),
        u = n(36454);
      let T = (() => {
        class w {
          items;
          labels;
          toolbarColor = 'primary';
          startAt;
          compareWith;
          docked = !1;
          copyCodeToClipboard = !1;
          copyCodeTooltips = {};
          footer;
          closed = new r.vpe();
          dockToggled = new r.vpe();
          buttonClicked = new r.vpe();
          itemSelected = new r.vpe();
          get markdownNavigatorLabels() {
            if (!this.labels) return;
            const { goHome: b, goBack: m, emptyState: c } = this.labels;
            return { goHome: b, goBack: m, emptyState: c };
          }
          get titleLabel() {
            return (this.labels && this.labels.title) || 'Help';
          }
          get closeLabel() {
            return (this.labels && this.labels.close) || 'Close';
          }
          get toggleDockedStateLabel() {
            return this.docked
              ? (this.labels && this.labels.unDock) || 'Undock'
              : (this.labels && this.labels.dock) || 'Dock';
          }
          toggleDockedState() {
            this.dockToggled.emit(this.docked);
          }
          static ɵfac = function (m) {
            return new (m || w)();
          };
          static ɵcmp = r.Xpm({
            type: w,
            selectors: [['td-markdown-navigator-window']],
            inputs: {
              items: 'items',
              labels: 'labels',
              toolbarColor: 'toolbarColor',
              startAt: 'startAt',
              compareWith: 'compareWith',
              docked: 'docked',
              copyCodeToClipboard: 'copyCodeToClipboard',
              copyCodeTooltips: 'copyCodeTooltips',
              footer: 'footer',
            },
            outputs: {
              closed: 'closed',
              dockToggled: 'dockToggled',
              buttonClicked: 'buttonClicked',
              itemSelected: 'itemSelected',
            },
            decls: 2,
            vars: 14,
            consts: [
              [
                3,
                'toolbarColor',
                'docked',
                'title',
                'toggleDockedStateLabel',
                'closeLabel',
                'dockToggled',
                'closed',
              ],
              [
                3,
                'items',
                'labels',
                'startAt',
                'compareWith',
                'footer',
                'copyCodeToClipboard',
                'copyCodeTooltips',
                'buttonClicked',
                'itemSelected',
              ],
            ],
            template: function (m, c) {
              1 & m &&
                (r.TgZ(0, 'td-window-dialog', 0),
                r.NdJ('dockToggled', function () {
                  return c.toggleDockedState();
                })('closed', function () {
                  return c.closed.emit();
                }),
                r.TgZ(1, 'td-markdown-navigator', 1),
                r.NdJ('buttonClicked', function (p) {
                  return c.buttonClicked.emit(p);
                })('itemSelected', function (p) {
                  return c.itemSelected.emit(p);
                }),
                r.qZA()()),
                2 & m &&
                  (r.Q6J('toolbarColor', c.toolbarColor)('docked', c.docked)(
                    'title',
                    c.titleLabel
                  )('toggleDockedStateLabel', c.toggleDockedStateLabel)(
                    'closeLabel',
                    c.closeLabel
                  ),
                  r.xp6(1),
                  r.Udp('display', c.docked ? 'none' : 'inherit'),
                  r.Q6J('items', c.items)('labels', c.markdownNavigatorLabels)(
                    'startAt',
                    c.startAt
                  )('compareWith', c.compareWith)('footer', c.footer)(
                    'copyCodeToClipboard',
                    c.copyCodeToClipboard
                  )('copyCodeTooltips', c.copyCodeTooltips));
            },
            dependencies: [t.y, u.L],
            styles: [
              '[_nghost-%COMP%]{height:100%;display:flex;flex-direction:column}td-markdown-navigator[_ngcontent-%COMP%]{height:calc(100% - 56px)}',
            ],
            changeDetection: 0,
          });
        }
        return w;
      })();
    },
    36454: (D, C, n) => {
      n.d(C, { L: () => X });
      var r = n(15861),
        t = n(19212),
        u = n(18437),
        l = n(46973),
        T = n(80305),
        d = n(6593),
        b = n(69862),
        m = n(96814),
        c = n(92596),
        v = n(59038),
        p = n(26385),
        g = n(30617),
        y = n(16007),
        h = n(7824),
        f = n(55548),
        M = n(57742),
        S = n(87632),
        O = n(21266);
      const A = ['markdownWrapper'];
      function N(a, _) {
        1 & a && t._UZ(0, 'mat-progress-bar', 8);
      }
      function R(a, _) {
        if (1 & a) {
          const e = t.EpF();
          t.ynx(0),
            t.TgZ(1, 'a', 14),
            t.NdJ('click', function () {
              t.CHM(e);
              const i = t.oxw().index,
                s = t.oxw(3);
              return t.KtG(s.goBack(s.historyStack.length - i));
            }),
            t._uU(2),
            t.qZA(),
            t.BQk();
        }
        if (2 & a) {
          const e = t.oxw().$implicit;
          t.xp6(1), t.uIk('data-test', 'back-button'), t.xp6(1), t.Oqu(e.title);
        }
      }
      function B(a, _) {
        1 & a && (t.TgZ(0, 'mat-icon', 15), t._uU(1, 'chevron_right'), t.qZA());
      }
      function U(a, _) {
        if (
          (1 & a &&
            (t.ynx(0),
            t.YNc(1, R, 3, 2, 'ng-container', 12)(
              2,
              B,
              2,
              0,
              'ng-template',
              null,
              13,
              t.W1O
            ),
            t.BQk()),
          2 & a)
        ) {
          const e = _.last,
            o = t.MAs(3);
          t.xp6(1), t.Q6J('ngIf', !e)('ngIfElse', o);
        }
      }
      function F(a, _) {
        if (1 & a) {
          const e = t.EpF();
          t.ynx(0),
            t.TgZ(1, 'td-breadcrumbs')(2, 'a', 9),
            t.NdJ('click', function () {
              t.CHM(e);
              const i = t.oxw(2);
              return t.KtG(i.reset());
            }),
            t._uU(3, 'Home'),
            t.qZA(),
            t.YNc(4, U, 4, 2, 'ng-container', 10),
            t.qZA(),
            t.TgZ(5, 'div', 11),
            t._uU(6),
            t.qZA(),
            t._UZ(7, 'mat-divider'),
            t.BQk();
        }
        if (2 & a) {
          const e = t.oxw(2);
          let o;
          t.xp6(2),
            t.Q6J(
              'matTooltip',
              null !== (o = e.goHomeLabel) && void 0 !== o ? o : ''
            ),
            t.uIk('data-test', 'home-button'),
            t.xp6(2),
            t.Q6J('ngForOf', e.historyStack),
            t.xp6(1),
            t.uIk('data-test', 'title'),
            t.xp6(1),
            t.hij(' ', e.currentItemTitle, ' '),
            t.xp6(1),
            t.Udp('position', 'relative');
        }
      }
      function Z(a, _) {
        if ((1 & a && t._UZ(0, 'td-message', 20), 2 & a)) {
          const e = t.oxw(3);
          t.Q6J('sublabel', e.markdownLoaderError),
            t.uIk('data-test', 'markdown-loader-error');
        }
      }
      const H = () => ({});
      function J(a, _) {
        if (1 & a) {
          const e = t.EpF();
          t.TgZ(0, 'td-flavored-markdown-loader', 21),
            t.NdJ('loadFailed', function (i) {
              t.CHM(e);
              const s = t.oxw(3);
              return t.KtG(s.handleMarkdownLoaderError(i));
            })('buttonClicked', function (i) {
              t.CHM(e);
              const s = t.oxw(3);
              return t.KtG(s.buttonClicked.emit(i));
            }),
            t.qZA();
        }
        if (2 & a) {
          const e = t.oxw(3);
          let o, i, s;
          t.Q6J('url', null !== (o = e.url) && void 0 !== o ? o : '')(
            'httpOptions',
            null !== (i = e.httpOptions) && void 0 !== i ? i : t.DdM(5, H)
          )('anchor', null !== (s = e.anchor) && void 0 !== s ? s : '')(
            'copyCodeToClipboard',
            e.copyCodeToClipboard
          )('copyCodeTooltips', e.copyCodeTooltips);
        }
      }
      function K(a, _) {
        if (1 & a) {
          const e = t.EpF();
          t.TgZ(0, 'td-flavored-markdown', 22),
            t.NdJ('buttonClicked', function (i) {
              t.CHM(e);
              const s = t.oxw(3);
              return t.KtG(s.buttonClicked.emit(i));
            }),
            t.qZA();
        }
        if (2 & a) {
          const e = t.oxw(3);
          let o, i, s;
          t.Q6J(
            'content',
            null !== (o = e.markdownString) && void 0 !== o ? o : ''
          )('hostedUrl', null !== (i = e.url) && void 0 !== i ? i : '')(
            'anchor',
            null !== (s = e.anchor) && void 0 !== s ? s : ''
          )('copyCodeToClipboard', e.copyCodeToClipboard)(
            'copyCodeTooltips',
            e.copyCodeTooltips
          );
        }
      }
      function Q(a, _) {
        if (
          (1 & a &&
            (t.TgZ(0, 'div', 16, 17),
            t.YNc(2, Z, 1, 2, 'td-message', 5)(
              3,
              J,
              1,
              6,
              'td-flavored-markdown-loader',
              18
            )(4, K, 1, 5, 'td-flavored-markdown', 19),
            t.qZA()),
          2 & a)
        ) {
          const e = t.oxw(2);
          t.xp6(2),
            t.Q6J('ngIf', e.markdownLoaderError),
            t.xp6(1),
            t.Q6J('ngIf', e.showTdMarkdownLoader),
            t.xp6(1),
            t.Q6J('ngIf', e.showTdMarkdown);
        }
      }
      function G(a, _) {
        if ((1 & a && t._UZ(0, 'td-message', 20), 2 & a)) {
          const e = t.oxw(2);
          t.Q6J('sublabel', e.childrenUrlError),
            t.uIk('data-test', 'children-url-error');
        }
      }
      function z(a, _) {
        if (1 & a) {
          const e = t.EpF();
          t.TgZ(0, 'button', 25),
            t.NdJ('click', function () {
              const s = t.CHM(e).$implicit,
                k = t.oxw(3);
              return t.KtG(k.handleItemSelected(s));
            }),
            t.TgZ(1, 'mat-icon', 26),
            t._uU(2),
            t.qZA(),
            t.TgZ(3, 'span', 27),
            t._uU(4),
            t.qZA(),
            t.TgZ(5, 'span', 27),
            t._uU(6),
            t.qZA(),
            t._UZ(7, 'mat-divider'),
            t.qZA();
        }
        if (2 & a) {
          const e = _.$implicit,
            o = _.index,
            i = t.oxw(3);
          t.Q6J('id', 'td-markdown-navigator-list-item-' + (e.id ? e.id : o))(
            'matTooltip',
            i.getTitle(e)
          ),
            t.xp6(2),
            t.hij(' ', i.getIcon(e), ' '),
            t.xp6(2),
            t.hij(' ', i.getTitle(e), ' '),
            t.xp6(2),
            t.Oqu(e.description);
        }
      }
      function j(a, _) {
        if (
          (1 & a &&
            (t.TgZ(0, 'div', 23)(1, 'mat-action-list'),
            t.YNc(2, z, 8, 5, 'button', 24),
            t.qZA()()),
          2 & a)
        ) {
          const e = t.oxw(2);
          t.xp6(2), t.Q6J('ngForOf', e.currentMenuItems);
        }
      }
      function Y(a, _) {
        1 & a && t.GkF(0);
      }
      function V(a, _) {
        if (
          (1 & a &&
            (t.ynx(0),
            t.YNc(1, N, 1, 0, 'mat-progress-bar', 2)(
              2,
              F,
              8,
              7,
              'ng-container',
              0
            ),
            t.TgZ(3, 'div', 3),
            t.YNc(4, Q, 5, 3, 'div', 4)(5, G, 1, 2, 'td-message', 5)(
              6,
              j,
              3,
              1,
              'div',
              6
            )(7, Y, 1, 0, 'ng-container', 7),
            t.qZA(),
            t.BQk()),
          2 & a)
        ) {
          const e = t.oxw();
          t.xp6(1),
            t.Q6J('ngIf', e.loading),
            t.xp6(1),
            t.Q6J('ngIf', e.showHeader),
            t.xp6(2),
            t.Q6J('ngIf', e.showTdMarkdownLoader || e.showTdMarkdown),
            t.xp6(1),
            t.Q6J('ngIf', e.childrenUrlError),
            t.xp6(1),
            t.Q6J('ngIf', e.showMenu),
            t.xp6(1),
            t.Q6J('ngComponentOutlet', e.footerComponent);
        }
      }
      function $(a, _) {
        if (
          (1 & a &&
            (t.TgZ(0, 'div', 28)(1, 'mat-icon', 29),
            t._uU(2, 'subject'),
            t.qZA(),
            t.TgZ(3, 'h2'),
            t._uU(4),
            t.qZA()()),
          2 & a)
        ) {
          const e = t.oxw();
          t.xp6(4), t.Oqu(e.emptyStateLabel);
        }
      }
      let X = (() => {
        class a {
          _markdownUrlLoaderService;
          _changeDetectorRef;
          _sanitizer;
          _http;
          items;
          labels;
          startAt;
          copyCodeToClipboard = !1;
          copyCodeTooltips = {};
          footer;
          compareWith;
          buttonClicked = new t.vpe();
          itemSelected = new t.vpe();
          markdownWrapper;
          historyStack = [];
          currentMarkdownItem;
          currentMenuItems = [];
          loading = !1;
          markdownLoaderError;
          childrenUrlError;
          constructor(e, o, i, s) {
            (this._markdownUrlLoaderService = e),
              (this._changeDetectorRef = o),
              (this._sanitizer = i),
              (this._http = s);
          }
          clickListener(e) {
            const o = e.srcElement;
            o.matches('a[href]') &&
              (function et(a) {
                return !(0, u.E2)(a) && a.pathname.endsWith('.md');
              })(o) &&
              this.handleLinkClick(e);
          }
          get showGoBackButton() {
            return this.historyStack.length > 0;
          }
          get showHeader() {
            return !!this.currentItemTitle;
          }
          get showMenu() {
            return (
              (this.currentMenuItems && this.currentMenuItems.length > 0) ?? !1
            );
          }
          get showTdMarkdownLoader() {
            return (
              !!this.currentMarkdownItem &&
              !!this.currentMarkdownItem.url &&
              !this.showTdMarkdown
            );
          }
          get showTdMarkdown() {
            return (
              !!this.currentMarkdownItem &&
              !!this.currentMarkdownItem.markdownString
            );
          }
          get url() {
            if (this.currentMarkdownItem) return this.currentMarkdownItem.url;
          }
          get footerComponent() {
            return this.currentMarkdownItem && this.currentMarkdownItem.footer
              ? this.currentMarkdownItem.footer
              : this.footer;
          }
          get httpOptions() {
            if (this.currentMarkdownItem)
              return this.currentMarkdownItem.httpOptions;
          }
          get markdownString() {
            if (this.currentMarkdownItem)
              return this.currentMarkdownItem.markdownString;
          }
          get anchor() {
            if (this.currentMarkdownItem)
              return this.currentMarkdownItem.anchor;
          }
          get showEmptyState() {
            return !this.items || this.items.length < 1;
          }
          get goHomeLabel() {
            return (this.labels && this.labels.goHome) || 'Go home';
          }
          get goBackLabel() {
            return (this.labels && this.labels.goBack) || 'Go back';
          }
          get emptyStateLabel() {
            return (
              (this.labels && this.labels.emptyState) || 'No item(s) to display'
            );
          }
          get currentItemTitle() {
            return this.currentMarkdownItem
              ? this.getTitle(this.currentMarkdownItem)
              : this.historyStack.length > 0
              ? this.getTitle(this.historyStack[this.historyStack.length - 1])
              : '';
          }
          ngOnChanges(e) {
            var o = this;
            return (0, r.Z)(function* () {
              e.items && o.reset(),
                e.startAt &&
                  o.items &&
                  o.startAt &&
                  o._jumpTo(o.startAt, void 0);
            })();
          }
          hasChildrenOrChildrenUrl(e) {
            return (e.children && e.children.length > 0) || !!e.childrenUrl;
          }
          clearErrors() {
            (this.markdownLoaderError = void 0),
              (this.childrenUrlError = void 0);
          }
          reset() {
            (this.loading = !1),
              this.clearErrors(),
              this.items &&
              1 === this.items.length &&
              !this.hasChildrenOrChildrenUrl(this.items[0])
                ? ((this.currentMenuItems = []),
                  (this.currentMarkdownItem = this.items[0]))
                : ((this.currentMenuItems = this.items),
                  (this.currentMarkdownItem = void 0)),
              (this.historyStack = []),
              this.itemSelected.emit(void 0),
              this._changeDetectorRef.markForCheck();
          }
          goBack(e = 2) {
            (this.loading = !1), this.clearErrors();
            let o = this.historyStack[this.historyStack.length - e];
            o?.startAtLink &&
              ((o = this.historyStack[this.historyStack.length - 3]
                ? this.historyStack[this.historyStack.length - 3]
                : void 0),
              (this.historyStack = this.historyStack.slice(0, -e))),
              o
                ? ((this.currentMarkdownItem = o),
                  (this.historyStack = this.historyStack.slice(
                    0,
                    this.historyStack.length - e + 1
                  )),
                  this.setChildrenAsCurrentMenuItems(o))
                : this.reset(),
              this.itemSelected.emit(o),
              this._changeDetectorRef.markForCheck();
          }
          handleItemSelected(e) {
            this.clearErrors(),
              (this.currentMarkdownItem = e),
              (this.historyStack = [...this.historyStack, e]),
              this.setChildrenAsCurrentMenuItems(e),
              this.itemSelected.emit(e),
              this._changeDetectorRef.markForCheck();
          }
          setChildrenAsCurrentMenuItems(e) {
            var o = this;
            return (0, r.Z)(function* () {
              (o.currentMenuItems = []),
                (o.loading = !0),
                o._changeDetectorRef.markForCheck();
              const i = o.historyStack;
              let s = [];
              e.children
                ? (s = e.children)
                : e.childrenUrl && (s = yield o.loadChildrenUrl(e)),
                s && s.length && e.startAtLink && o._jumpTo(e.startAtLink, s);
              const k = o.historyStack;
              i.length === k.length &&
                i.every((E, x) => E === k[x]) &&
                (o.currentMenuItems = s),
                (o.loading = !1),
                o._changeDetectorRef.markForCheck();
            })();
          }
          loadChildrenUrl(e) {
            var o = this;
            return (0, r.Z)(function* () {
              const i =
                o._sanitizer.sanitize(t.q3G.URL, e.childrenUrl ?? null) ?? '';
              try {
                return yield (function w(a, _) {
                  const e = 'object' == typeof _;
                  return new Promise((o, i) => {
                    const s = new T.Hp({
                      next: (k) => {
                        o(k), s.unsubscribe();
                      },
                      error: i,
                      complete: () => {
                        e ? o(_.defaultValue) : i(new l.K());
                      },
                    });
                    a.subscribe(s);
                  });
                })(o._http.get(i, { ...e.httpOptions }));
              } catch (s) {
                return o.handleChildrenUrlError(s), [];
              }
            })();
          }
          getTitle(e) {
            return e
              ? (
                  (0, u.B_)(e.anchor ?? '') ||
                  e.title ||
                  (function q(a) {
                    if (a) {
                      const _ = new URL(a);
                      if (_.hash) return (0, u.B_)(_.hash);
                      {
                        const e = _.pathname.split('/');
                        return e[e.length - 1].replace(/\.[^/.]+$/, '');
                      }
                    }
                    return '';
                  })(e.url ?? '') ||
                  (function tt(a) {
                    if (a) {
                      const _ = a.split(/[\r\n]+/).find((e) => !!e) ?? '';
                      return (0, u.B_)(_).trim();
                    }
                    return '';
                  })(e.markdownString ?? '') ||
                  ''
                ).trim()
              : '';
          }
          getIcon(e) {
            return e?.icon || 'subject';
          }
          handleChildrenUrlError(e) {
            (this.childrenUrlError = e.message),
              this._changeDetectorRef.markForCheck();
          }
          handleMarkdownLoaderError(e) {
            (this.markdownLoaderError = e ? e.message : ''),
              this._changeDetectorRef.markForCheck();
          }
          _jumpTo(e, o) {
            var i = this;
            return (0, r.Z)(function* () {
              const s = i.historyStack;
              let k = [];
              return (
                i.items?.length &&
                  (Array.isArray(e)
                    ? (k = yield i.followPath(i.items, e))
                    : o && o.length > 0
                    ? ((i.historyStack = s), (k = i.findPath(o, e)))
                    : (k = i.findPath(i.items, e)),
                  k.forEach((E, x) => {
                    0 === x && i.reset(), i.handleItemSelected(E);
                  })),
                !!k.length
              );
            })();
          }
          followPath(e, o) {
            var i = this;
            return (0, r.Z)(function* () {
              let s = [],
                k = e;
              const E = i.compareWith || P;
              for (const x of o) {
                const I = k.find((L) => E(x, L));
                if (!I) break;
                (s = [...s, I]),
                  I.children
                    ? (k = I.children)
                    : I.childrenUrl && (k = yield i.loadChildrenUrl(I));
              }
              return s.length !== o.length && (s = []), s;
            })();
          }
          findPath(e, o) {
            const i = this.compareWith || P;
            if (e)
              for (const s of e) {
                if (o && i(s, o)) return [s];
                const k = this.findPath(s.children, o);
                if (k.length) return [s, ...k];
              }
            return [];
          }
          handleLinkClick(e) {
            var o = this;
            return (0, r.Z)(function* () {
              e.preventDefault();
              const s = new URL(e.target.href),
                k = s.href.split('/'),
                E = k[k.length - 1].split('.md')[0];
              if (
                ((o.loading = !0),
                o._changeDetectorRef.markForCheck(),
                !(yield o._jumpTo({ id: E })))
              ) {
                try {
                  const I = yield o._markdownUrlLoaderService.load(s.href);
                  o.handleItemSelected({ markdownString: I, url: s.href }),
                    (o.markdownWrapper.nativeElement.scrollTop = 0);
                } catch {
                  window.open(s.href, '_blank')?.focus();
                } finally {
                  o.loading = !1;
                }
                o._changeDetectorRef.markForCheck();
              }
            })();
          }
          static ɵfac = function (o) {
            return new (o || a)(
              t.Y36(u.mt),
              t.Y36(t.sBO),
              t.Y36(d.H7),
              t.Y36(b.eN)
            );
          };
          static ɵcmp = t.Xpm({
            type: a,
            selectors: [['td-markdown-navigator']],
            viewQuery: function (o, i) {
              if ((1 & o && t.Gf(A, 5), 2 & o)) {
                let s;
                t.iGM((s = t.CRH())) && (i.markdownWrapper = s.first);
              }
            },
            hostBindings: function (o, i) {
              1 & o &&
                t.NdJ('click', function (k) {
                  return i.clickListener(k);
                });
            },
            inputs: {
              items: 'items',
              labels: 'labels',
              startAt: 'startAt',
              copyCodeToClipboard: 'copyCodeToClipboard',
              copyCodeTooltips: 'copyCodeTooltips',
              footer: 'footer',
              compareWith: 'compareWith',
            },
            outputs: {
              buttonClicked: 'buttonClicked',
              itemSelected: 'itemSelected',
            },
            features: [t.TTD],
            decls: 2,
            vars: 2,
            consts: [
              [4, 'ngIf'],
              [
                'layout',
                'column',
                'layout-align',
                'center center',
                'class',
                'empty-state',
                4,
                'ngIf',
              ],
              ['mode', 'indeterminate', 'color', 'accent', 4, 'ngIf'],
              ['id', 'td-markdown-navigator-content', 1, 'scroll-area'],
              ['class', 'markdown-wrapper', 4, 'ngIf'],
              ['color', 'warn', 'icon', 'error', 3, 'sublabel', 4, 'ngIf'],
              ['class', 'td-markdown-list', 4, 'ngIf'],
              [4, 'ngComponentOutlet'],
              ['mode', 'indeterminate', 'color', 'accent'],
              ['td-breadcrumb', '', 3, 'matTooltip', 'click'],
              [4, 'ngFor', 'ngForOf'],
              [1, 'breadcrumb-current-title'],
              [4, 'ngIf', 'ngIfElse'],
              ['lastBreadCrumb', ''],
              ['td-breadcrumb', '', 3, 'click'],
              [1, 'breadcrumb-end-icon'],
              [1, 'markdown-wrapper'],
              ['markdownWrapper', ''],
              [
                3,
                'url',
                'httpOptions',
                'anchor',
                'copyCodeToClipboard',
                'copyCodeTooltips',
                'loadFailed',
                'buttonClicked',
                4,
                'ngIf',
              ],
              [
                3,
                'content',
                'hostedUrl',
                'anchor',
                'copyCodeToClipboard',
                'copyCodeTooltips',
                'buttonClicked',
                4,
                'ngIf',
              ],
              ['color', 'warn', 'icon', 'error', 3, 'sublabel'],
              [
                3,
                'url',
                'httpOptions',
                'anchor',
                'copyCodeToClipboard',
                'copyCodeTooltips',
                'loadFailed',
                'buttonClicked',
              ],
              [
                3,
                'content',
                'hostedUrl',
                'anchor',
                'copyCodeToClipboard',
                'copyCodeTooltips',
                'buttonClicked',
              ],
              [1, 'td-markdown-list'],
              [
                'mat-list-item',
                '',
                'matTooltipPosition',
                'before',
                'matTooltipShowDelay',
                '500',
                3,
                'id',
                'matTooltip',
                'click',
                4,
                'ngFor',
                'ngForOf',
              ],
              [
                'mat-list-item',
                '',
                'matTooltipPosition',
                'before',
                'matTooltipShowDelay',
                '500',
                3,
                'id',
                'matTooltip',
                'click',
              ],
              ['matListIcon', ''],
              ['matListItemLine', '', 1, 'truncate'],
              [
                'layout',
                'column',
                'layout-align',
                'center center',
                1,
                'empty-state',
              ],
              ['matListItemAvatar', ''],
            ],
            template: function (o, i) {
              1 & o &&
                t.YNc(0, V, 8, 6, 'ng-container', 0)(1, $, 5, 1, 'div', 1),
                2 & o &&
                  (t.Q6J('ngIf', !i.showEmptyState),
                  t.xp6(1),
                  t.Q6J('ngIf', i.showEmptyState));
            },
            dependencies: [
              m.$G,
              m.sg,
              m.O5,
              c.gM,
              v.lT,
              v.Tg,
              v.D1,
              p.d,
              v.WW,
              g.Hw,
              y.pW,
              h.h,
              f.Z,
              M.oN,
              S.D,
              O.T,
            ],
            styles: [
              '[_nghost-%COMP%]{position:relative;height:inherit;height:100%;box-sizing:border-box;display:flex;flex-direction:column}[_nghost-%COMP%]   td-breadcrumbs[_ngcontent-%COMP%] {margin:16px 16px 8px}[_nghost-%COMP%]   td-breadcrumbs[_ngcontent-%COMP%]  mat-icon{font-size:16px;margin-left:1px;margin-right:0;margin-top:-1px}[_nghost-%COMP%]   .breadcrumb-end-icon[_ngcontent-%COMP%]{line-height:16px;margin-top:1px}[_nghost-%COMP%]   .breadcrumb-current-title[_ngcontent-%COMP%]{font-weight:700;margin:0 16px 16px}[_nghost-%COMP%]   .scroll-area[_ngcontent-%COMP%]{min-height:1px;overflow-y:auto;flex:1;box-sizing:border-box}[_nghost-%COMP%]   .markdown-wrapper[_ngcontent-%COMP%]{padding:16px 16px 0}[_nghost-%COMP%]   .td-markdown-list[_ngcontent-%COMP%] > .mat-list[_ngcontent-%COMP%]{padding-top:0}[_nghost-%COMP%]   td-flavored-markdown-loader[_ngcontent-%COMP%]     .mat-progress-bar{top:0;left:0;right:0;position:absolute}[_nghost-%COMP%]   .title[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;margin:8px 0;padding-left:16px}.truncate[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.empty-state[_ngcontent-%COMP%]{padding:32px}.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:4em}',
            ],
            changeDetection: 0,
          });
        }
        return a;
      })();
      function P(a, _) {
        return a.id && _.id ? a.id === _.id : a === _;
      }
    },
    55629: (D, C, n) => {
      n.d(C, { _m: () => g, RT: () => c.R });
      var r = n(96814),
        t = n(32296),
        u = n(92596),
        l = n(59038),
        T = n(30617),
        w = n(16007),
        d = n(1209),
        b = n(18035),
        m = n(39419),
        c = n(8926),
        v = n(7949),
        p = n(19212);
      let g = (() => {
        class M {
          static ɵfac = function (A) {
            return new (A || M)();
          };
          static ɵmod = p.oAB({ type: M });
          static ɵinj = p.cJS({
            providers: [c.R],
            imports: [
              r.ez,
              t.ot,
              u.AV,
              l.ie,
              T.Ps,
              w.Cv,
              v.u,
              b.gk,
              d._3,
              m.A0,
            ],
          });
        }
        return M;
      })();
      n(36454), n(41245), n(84859);
    },
  },
]);
