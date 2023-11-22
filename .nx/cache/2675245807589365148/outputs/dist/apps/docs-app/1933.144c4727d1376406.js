'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [1933],
  {
    15376: (y, l, e) => {
      e.r(l), e.d(l, { BreadcrumbsDemoModule: () => d });
      var r = e(96814),
        h = e(52787),
        t = e(19212),
        p = e(7824),
        m = e(55548);
      const _ = () => ['/components', 'breadcrumbs'],
        n = () => ({ query: 1 }),
        C = () => ({ query: 2 }),
        o = () => ({ query: 3 }),
        c = () => ({ query: 4 });
      let b = (() => {
        class u {
          static ɵfac = function (f) {
            return new (f || u)();
          };
          static ɵcmp = t.Xpm({
            type: u,
            selectors: [['breadcrumbs-demo']],
            decls: 12,
            vars: 16,
            consts: [
              [1, 'pad'],
              ['td-breadcrumb', '', 3, 'routerLink', 'queryParams'],
            ],
            template: function (f, I) {
              1 & f &&
                (t.TgZ(0, 'div', 0)(1, 'td-breadcrumbs')(2, 'a', 1),
                t._uU(3, 'Home'),
                t.qZA(),
                t.TgZ(4, 'a', 1),
                t._uU(5, 'Breadcrumb 1'),
                t.qZA(),
                t.TgZ(6, 'a', 1),
                t._uU(7, 'Breadcrumb 2'),
                t.qZA(),
                t.TgZ(8, 'a', 1),
                t._uU(9, 'Breadcrumb 3'),
                t.qZA(),
                t.TgZ(10, 'td-breadcrumb'),
                t._uU(11, 'Current'),
                t.qZA()()()),
                2 & f &&
                  (t.xp6(2),
                  t.Q6J('routerLink', t.DdM(8, _))('queryParams', t.DdM(9, n)),
                  t.xp6(2),
                  t.Q6J('routerLink', t.DdM(10, _))(
                    'queryParams',
                    t.DdM(11, C)
                  ),
                  t.xp6(2),
                  t.Q6J('routerLink', t.DdM(12, _))(
                    'queryParams',
                    t.DdM(13, o)
                  ),
                  t.xp6(2),
                  t.Q6J('routerLink', t.DdM(14, _))(
                    'queryParams',
                    t.DdM(15, c)
                  ));
            },
            dependencies: [p.h, m.Z, h.rH],
          });
        }
        return u;
      })();
      var a = e(22497),
        s = e(7949);
      const g = (0, e(80549).ng)({
        overviewDemoComponent: b,
        id: 'breadcrumbs',
      });
      let d = (() => {
        class u {
          static ɵfac = function (f) {
            return new (f || u)();
          };
          static ɵmod = t.oAB({ type: u });
          static ɵinj = t.cJS({ imports: [r.ez, a.q, s.u, h.Bz.forChild(g)] });
        }
        return u;
      })();
    },
    55548: (y, l, e) => {
      e.d(l, { Z: () => _ });
      var r = e(19212),
        h = e(96814),
        t = e(30617);
      function p(n, C) {
        if (1 & n) {
          const o = r.EpF();
          r.TgZ(0, 'mat-icon', 1),
            r.NdJ('click', function (b) {
              r.CHM(o);
              const a = r.oxw();
              return r.KtG(a._handleIconClick(b));
            }),
            r._uU(1),
            r.qZA();
        }
        if (2 & n) {
          const o = r.oxw();
          r.Udp('cursor', 'default'), r.xp6(1), r.Oqu(o.separatorIcon);
        }
      }
      const m = ['*'];
      let _ = (() => {
        class n {
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
          set separatorIcon(o) {
            (this._separatorIcon = o),
              setTimeout(() => {
                this._changeDetectorRef.markForCheck();
              });
          }
          get displayIcon() {
            return this._displayIcon;
          }
          set displayIcon(o) {
            (this._displayIcon = o),
              setTimeout(() => {
                this._changeDetectorRef.markForCheck();
              });
          }
          get displayCrumb() {
            return this._displayCrumb;
          }
          set displayCrumb(o) {
            (this._displayCrumb = o),
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
          constructor(o, c) {
            (this._elementRef = o), (this._changeDetectorRef = c);
          }
          ngAfterViewInit() {
            setTimeout(() => {
              (this._width =
                this._elementRef.nativeElement.getBoundingClientRect().width),
                this._changeDetectorRef.markForCheck();
            });
          }
          _handleIconClick(o) {
            o.stopPropagation(), o.preventDefault();
          }
          static ɵfac = function (c) {
            return new (c || n)(r.Y36(r.SBq), r.Y36(r.sBO));
          };
          static ɵcmp = r.Xpm({
            type: n,
            selectors: [['td-breadcrumb'], ['a', 'td-breadcrumb', '']],
            hostVars: 6,
            hostBindings: function (c, b) {
              2 & c &&
                (r.Udp('display', b.displayBinding),
                r.ekj('mdc-button', b.matButtonClass)(
                  'td-breadcrumb',
                  b.tdBreadCrumbClass
                ));
            },
            ngContentSelectors: m,
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
            template: function (c, b) {
              1 & c && (r.F$t(), r.Hsn(0), r.YNc(1, p, 2, 3, 'mat-icon', 0)),
                2 & c && (r.xp6(1), r.Q6J('ngIf', b.displayIcon));
            },
            dependencies: [h.O5, t.Hw],
            styles: [
              '.td-breadcrumb[_nghost-%COMP%]{display:inline-block;box-sizing:border-box;flex-direction:row;align-items:center;align-content:center;max-width:100%;justify-content:flex-end}.td-breadcrumb[_nghost-%COMP%]    >*{margin:0 10px}[_nghost-%COMP%]   .td-breadcrumb-separator-icon[_ngcontent-%COMP%]{display:inline-flex;vertical-align:middle}.mat-button[_nghost-%COMP%]{min-width:0;padding:0}',
            ],
            changeDetection: 0,
          });
        }
        return n;
      })();
    },
    7824: (y, l, e) => {
      e.d(l, { h: () => o });
      var r = e(78645),
        h = e(92438),
        t = e(83620),
        p = e(59773),
        m = e(27921),
        _ = e(55548),
        n = e(19212);
      const C = ['*'];
      let o = (() => {
        class c {
          _elementRef;
          _changeDetectorRef;
          _resizing = !1;
          _separatorIcon = 'chevron_right';
          _destroy$ = new r.x();
          tdBreadCrumbsClass = !0;
          _breadcrumbs;
          hiddenBreadcrumbs = [];
          set separatorIcon(a) {
            (this._separatorIcon = a), this.setCrumbIcons();
          }
          get separatorIcon() {
            return this._separatorIcon;
          }
          constructor(a, s) {
            (this._elementRef = a), (this._changeDetectorRef = s);
          }
          ngOnInit() {
            (0, h.R)(window, 'resize')
              .pipe((0, t.b)(10), (0, p.R)(this._destroy$))
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
              .pipe((0, m.O)(this._breadcrumbs))
              .subscribe(() => {
                this.setCrumbIcons(), this._changeDetectorRef.markForCheck();
              });
          }
          ngOnDestroy() {
            this._destroy$.next();
          }
          get nativeElementWidth() {
            const a = this._elementRef.nativeElement,
              s = window.getComputedStyle(a),
              i = parseInt(s.borderLeft, 10),
              g = parseInt(s.borderRight, 10),
              d = parseInt(s.marginLeft, 10),
              u = parseInt(s.marginRight, 10),
              B = parseInt(s.paddingLeft, 10),
              D = parseInt(s.paddingRight, 10);
            return a.getBoundingClientRect().width - i - g - d - u - B - D;
          }
          get count() {
            return this._breadcrumbs ? this._breadcrumbs.length : 0;
          }
          setCrumbIcons() {
            if (this._breadcrumbs) {
              const a = this._breadcrumbs.toArray();
              a.forEach((s, i) => {
                (s.separatorIcon = this.separatorIcon),
                  (s.displayIcon = i < a.length - 1);
              });
            }
          }
          _calculateVisibility() {
            const a = this._breadcrumbs.toArray();
            let s = 0;
            const i = [];
            for (let g = a.length - 1; g >= 0; g--) {
              const d = a[g];
              s + d.width > this.nativeElementWidth
                ? ((d.displayCrumb = !1), i.push(d))
                : (d.displayCrumb = !0),
                (s += d.width);
            }
            (this.hiddenBreadcrumbs = i),
              this._changeDetectorRef.markForCheck();
          }
          static ɵfac = function (s) {
            return new (s || c)(n.Y36(n.SBq), n.Y36(n.sBO));
          };
          static ɵcmp = n.Xpm({
            type: c,
            selectors: [['td-breadcrumbs']],
            contentQueries: function (s, i, g) {
              if ((1 & s && n.Suo(g, _.Z, 5), 2 & s)) {
                let d;
                n.iGM((d = n.CRH())) && (i._breadcrumbs = d);
              }
            },
            hostVars: 2,
            hostBindings: function (s, i) {
              2 & s && n.ekj('td-breadcrumbs', i.tdBreadCrumbsClass);
            },
            inputs: { separatorIcon: 'separatorIcon' },
            ngContentSelectors: C,
            decls: 1,
            vars: 0,
            template: function (s, i) {
              1 & s && (n.F$t(), n.Hsn(0));
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
    7949: (y, l, e) => {
      e.d(l, { u: () => p });
      var r = e(96814),
        h = e(30617),
        t = e(19212);
      let p = (() => {
        class m {
          static ɵfac = function (C) {
            return new (C || m)();
          };
          static ɵmod = t.oAB({ type: m });
          static ɵinj = t.cJS({ imports: [r.ez, h.Ps] });
        }
        return m;
      })();
    },
    39419: (y, l, e) => {
      e.d(l, { A0: () => _ });
      var r = e(96814),
        h = e(30617),
        p = (e(21266), e(19212));
      let _ = (() => {
        class n {
          static ɵfac = function (c) {
            return new (c || n)();
          };
          static ɵmod = p.oAB({ type: n });
          static ɵinj = p.cJS({ imports: [r.ez, h.Ps] });
        }
        return n;
      })();
    },
  },
]);
