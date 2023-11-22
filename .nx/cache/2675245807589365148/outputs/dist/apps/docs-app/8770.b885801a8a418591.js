'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [8770],
  {
    28770: (T, h, t) => {
      t.r(h), t.d(h, { BreadcrumbsDemoModule: () => J });
      var r = t(96814),
        f = t(98525),
        g = t(30617),
        C = t(26385),
        l = t(7949),
        b = t(52787),
        e = t(19212),
        y = t(31791),
        o = t(7824),
        d = t(55548);
      const i = () => ['/components', 'breadcrumbs', 'examples'],
        c = () => ({ query: 1 }),
        s = () => ({ query: 2 }),
        m = () => ({ query: 3 }),
        p = () => ({ query: 4 });
      let u = (() => {
        class n {
          static ɵfac = function (a) {
            return new (a || n)();
          };
          static ɵcmp = e.Xpm({
            type: n,
            selectors: [['breadcrumbs-demo-basic']],
            decls: 11,
            vars: 16,
            consts: [['td-breadcrumb', '', 3, 'routerLink', 'queryParams']],
            template: function (a, Z) {
              1 & a &&
                (e.TgZ(0, 'td-breadcrumbs')(1, 'a', 0),
                e._uU(2, 'Home'),
                e.qZA(),
                e.TgZ(3, 'a', 0),
                e._uU(4, ' Breadcrumb 1 '),
                e.qZA(),
                e.TgZ(5, 'a', 0),
                e._uU(6, ' Breadcrumb 2 '),
                e.qZA(),
                e.TgZ(7, 'a', 0),
                e._uU(8, ' Breadcrumb 3 '),
                e.qZA(),
                e.TgZ(9, 'td-breadcrumb'),
                e._uU(10, 'Current'),
                e.qZA()()),
                2 & a &&
                  (e.xp6(1),
                  e.Q6J('routerLink', e.DdM(8, i))('queryParams', e.DdM(9, c)),
                  e.xp6(2),
                  e.Q6J('routerLink', e.DdM(10, i))(
                    'queryParams',
                    e.DdM(11, s)
                  ),
                  e.xp6(2),
                  e.Q6J('routerLink', e.DdM(12, i))(
                    'queryParams',
                    e.DdM(13, m)
                  ),
                  e.xp6(2),
                  e.Q6J('routerLink', e.DdM(14, i))(
                    'queryParams',
                    e.DdM(15, p)
                  ));
            },
            dependencies: [b.rH, o.h, d.Z],
          });
        }
        return n;
      })();
      const B = () => ['/components', 'breadcrumbs', 'examples'],
        I = () => ({ query: 1 }),
        P = () => ({ query: 2 }),
        E = () => ({ query: 3 }),
        R = () => ({ query: 4 });
      let A = (() => {
        class n {
          static ɵfac = function (a) {
            return new (a || n)();
          };
          static ɵcmp = e.Xpm({
            type: n,
            selectors: [['breadcrumbs-demo-custom-separator']],
            decls: 11,
            vars: 16,
            consts: [
              ['separatorIcon', 'motorcycle'],
              ['td-breadcrumb', '', 3, 'routerLink', 'queryParams'],
            ],
            template: function (a, Z) {
              1 & a &&
                (e.TgZ(0, 'td-breadcrumbs', 0)(1, 'a', 1),
                e._uU(2, 'Home'),
                e.qZA(),
                e.TgZ(3, 'a', 1),
                e._uU(4, ' Breadcrumb 1 '),
                e.qZA(),
                e.TgZ(5, 'a', 1),
                e._uU(6, ' Breadcrumb 2 '),
                e.qZA(),
                e.TgZ(7, 'a', 1),
                e._uU(8, ' Breadcrumb 3 '),
                e.qZA(),
                e.TgZ(9, 'td-breadcrumb'),
                e._uU(10, 'Current'),
                e.qZA()()),
                2 & a &&
                  (e.xp6(1),
                  e.Q6J('routerLink', e.DdM(8, B))('queryParams', e.DdM(9, I)),
                  e.xp6(2),
                  e.Q6J('routerLink', e.DdM(10, B))(
                    'queryParams',
                    e.DdM(11, P)
                  ),
                  e.xp6(2),
                  e.Q6J('routerLink', e.DdM(12, B))(
                    'queryParams',
                    e.DdM(13, E)
                  ),
                  e.xp6(2),
                  e.Q6J('routerLink', e.DdM(14, B))(
                    'queryParams',
                    e.DdM(15, R)
                  ));
            },
            dependencies: [b.rH, o.h, d.Z],
          });
        }
        return n;
      })();
      const M = () => ['/components', 'breadcrumbs', 'examples'],
        x = () => ({ query: 1 }),
        v = () => ({ query: 2 }),
        O = () => ({ query: 3 }),
        U = () => ({ query: 4 });
      let L = (() => {
        class n {
          count = 0;
          static ɵfac = function (a) {
            return new (a || n)();
          };
          static ɵcmp = e.Xpm({
            type: n,
            selectors: [['breadcrumbs-demo-resize']],
            decls: 18,
            vars: 18,
            consts: [
              ['breadcrumbs', ''],
              ['td-breadcrumb', '', 3, 'routerLink', 'queryParams'],
            ],
            template: function (a, Z) {
              if (
                (1 & a &&
                  (e.TgZ(0, 'td-breadcrumbs', null, 0)(2, 'a', 1),
                  e._uU(3, 'Home'),
                  e.qZA(),
                  e.TgZ(4, 'a', 1),
                  e._uU(5, ' Breadcrumb 1 '),
                  e.qZA(),
                  e.TgZ(6, 'a', 1),
                  e._uU(7, ' Breadcrumb 2 '),
                  e.qZA(),
                  e.TgZ(8, 'a', 1),
                  e._uU(9, ' Breadcrumb 3 '),
                  e.qZA(),
                  e.TgZ(10, 'td-breadcrumb'),
                  e._uU(11, 'Current'),
                  e.qZA()(),
                  e._UZ(12, 'mat-divider'),
                  e.TgZ(13, 'div')(14, 'p'),
                  e._uU(15),
                  e.qZA(),
                  e.TgZ(16, 'p'),
                  e._uU(17),
                  e.qZA()()),
                2 & a)
              ) {
                const D = e.MAs(1);
                e.xp6(2),
                  e.Q6J('routerLink', e.DdM(10, M))(
                    'queryParams',
                    e.DdM(11, x)
                  ),
                  e.xp6(2),
                  e.Q6J('routerLink', e.DdM(12, M))(
                    'queryParams',
                    e.DdM(13, v)
                  ),
                  e.xp6(2),
                  e.Q6J('routerLink', e.DdM(14, M))(
                    'queryParams',
                    e.DdM(15, O)
                  ),
                  e.xp6(2),
                  e.Q6J('routerLink', e.DdM(16, M))(
                    'queryParams',
                    e.DdM(17, U)
                  ),
                  e.xp6(7),
                  e.hij(
                    'Total Breadcrumbs Count: ',
                    null == D ? null : D.count,
                    ''
                  ),
                  e.xp6(2),
                  e.hij(
                    ' Hidden Breadcrumbs Count (shrink window to see): ',
                    null == D || null == D.hiddenBreadcrumbs
                      ? null
                      : D.hiddenBreadcrumbs.length,
                    ' '
                  );
              }
            },
            dependencies: [C.d, b.rH, o.h, d.Z],
          });
        }
        return n;
      })();
      const q = [
        {
          path: '',
          component: (() => {
            class n {
              static ɵfac = function (a) {
                return new (a || n)();
              };
              static ɵcmp = e.Xpm({
                type: n,
                selectors: [['breadcrumbs-demo']],
                decls: 6,
                vars: 6,
                consts: [[3, 'demoId', 'demoTitle']],
                template: function (a, Z) {
                  1 & a &&
                    (e.TgZ(0, 'demo-component', 0),
                    e._UZ(1, 'breadcrumbs-demo-basic'),
                    e.qZA(),
                    e.TgZ(2, 'demo-component', 0),
                    e._UZ(3, 'breadcrumbs-demo-custom-separator'),
                    e.qZA(),
                    e.TgZ(4, 'demo-component', 0),
                    e._UZ(5, 'breadcrumbs-demo-resize'),
                    e.qZA()),
                    2 & a &&
                      (e.Q6J('demoId', 'breadcrumbs-demo-basic')(
                        'demoTitle',
                        'Basic'
                      ),
                      e.xp6(2),
                      e.Q6J('demoId', 'breadcrumbs-demo-custom-separator')(
                        'demoTitle',
                        'Custom Separator Icon'
                      ),
                      e.xp6(2),
                      e.Q6J('demoId', 'breadcrumbs-demo-resize')(
                        'demoTitle',
                        'Responsive'
                      ));
                },
                dependencies: [y.z, u, A, L],
              });
            }
            return n;
          })(),
        },
      ];
      let k = (() => {
        class n {
          static ɵfac = function (a) {
            return new (a || n)();
          };
          static ɵmod = e.oAB({ type: n });
          static ɵinj = e.cJS({ imports: [b.Bz.forChild(q), b.Bz] });
        }
        return n;
      })();
      var z = t(96535);
      let J = (() => {
        class n {
          static ɵfac = function (a) {
            return new (a || n)();
          };
          static ɵmod = e.oAB({ type: n });
          static ɵinj = e.cJS({
            imports: [z.l, f.LD, C.t, g.Ps, k, l.u, r.ez],
          });
        }
        return n;
      })();
    },
    55548: (T, h, t) => {
      t.d(h, { Z: () => b });
      var r = t(19212),
        f = t(96814),
        g = t(30617);
      function C(e, y) {
        if (1 & e) {
          const o = r.EpF();
          r.TgZ(0, 'mat-icon', 1),
            r.NdJ('click', function (i) {
              r.CHM(o);
              const c = r.oxw();
              return r.KtG(c._handleIconClick(i));
            }),
            r._uU(1),
            r.qZA();
        }
        if (2 & e) {
          const o = r.oxw();
          r.Udp('cursor', 'default'), r.xp6(1), r.Oqu(o.separatorIcon);
        }
      }
      const l = ['*'];
      let b = (() => {
        class e {
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
          constructor(o, d) {
            (this._elementRef = o), (this._changeDetectorRef = d);
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
          static ɵfac = function (d) {
            return new (d || e)(r.Y36(r.SBq), r.Y36(r.sBO));
          };
          static ɵcmp = r.Xpm({
            type: e,
            selectors: [['td-breadcrumb'], ['a', 'td-breadcrumb', '']],
            hostVars: 6,
            hostBindings: function (d, i) {
              2 & d &&
                (r.Udp('display', i.displayBinding),
                r.ekj('mdc-button', i.matButtonClass)(
                  'td-breadcrumb',
                  i.tdBreadCrumbClass
                ));
            },
            ngContentSelectors: l,
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
            template: function (d, i) {
              1 & d && (r.F$t(), r.Hsn(0), r.YNc(1, C, 2, 3, 'mat-icon', 0)),
                2 & d && (r.xp6(1), r.Q6J('ngIf', i.displayIcon));
            },
            dependencies: [f.O5, g.Hw],
            styles: [
              '.td-breadcrumb[_nghost-%COMP%]{display:inline-block;box-sizing:border-box;flex-direction:row;align-items:center;align-content:center;max-width:100%;justify-content:flex-end}.td-breadcrumb[_nghost-%COMP%]    >*{margin:0 10px}[_nghost-%COMP%]   .td-breadcrumb-separator-icon[_ngcontent-%COMP%]{display:inline-flex;vertical-align:middle}.mat-button[_nghost-%COMP%]{min-width:0;padding:0}',
            ],
            changeDetection: 0,
          });
        }
        return e;
      })();
    },
    7824: (T, h, t) => {
      t.d(h, { h: () => o });
      var r = t(78645),
        f = t(92438),
        g = t(83620),
        C = t(59773),
        l = t(27921),
        b = t(55548),
        e = t(19212);
      const y = ['*'];
      let o = (() => {
        class d {
          _elementRef;
          _changeDetectorRef;
          _resizing = !1;
          _separatorIcon = 'chevron_right';
          _destroy$ = new r.x();
          tdBreadCrumbsClass = !0;
          _breadcrumbs;
          hiddenBreadcrumbs = [];
          set separatorIcon(c) {
            (this._separatorIcon = c), this.setCrumbIcons();
          }
          get separatorIcon() {
            return this._separatorIcon;
          }
          constructor(c, s) {
            (this._elementRef = c), (this._changeDetectorRef = s);
          }
          ngOnInit() {
            (0, f.R)(window, 'resize')
              .pipe((0, g.b)(10), (0, C.R)(this._destroy$))
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
              .pipe((0, l.O)(this._breadcrumbs))
              .subscribe(() => {
                this.setCrumbIcons(), this._changeDetectorRef.markForCheck();
              });
          }
          ngOnDestroy() {
            this._destroy$.next();
          }
          get nativeElementWidth() {
            const c = this._elementRef.nativeElement,
              s = window.getComputedStyle(c),
              m = parseInt(s.borderLeft, 10),
              p = parseInt(s.borderRight, 10),
              u = parseInt(s.marginLeft, 10),
              B = parseInt(s.marginRight, 10),
              I = parseInt(s.paddingLeft, 10),
              P = parseInt(s.paddingRight, 10);
            return c.getBoundingClientRect().width - m - p - u - B - I - P;
          }
          get count() {
            return this._breadcrumbs ? this._breadcrumbs.length : 0;
          }
          setCrumbIcons() {
            if (this._breadcrumbs) {
              const c = this._breadcrumbs.toArray();
              c.forEach((s, m) => {
                (s.separatorIcon = this.separatorIcon),
                  (s.displayIcon = m < c.length - 1);
              });
            }
          }
          _calculateVisibility() {
            const c = this._breadcrumbs.toArray();
            let s = 0;
            const m = [];
            for (let p = c.length - 1; p >= 0; p--) {
              const u = c[p];
              s + u.width > this.nativeElementWidth
                ? ((u.displayCrumb = !1), m.push(u))
                : (u.displayCrumb = !0),
                (s += u.width);
            }
            (this.hiddenBreadcrumbs = m),
              this._changeDetectorRef.markForCheck();
          }
          static ɵfac = function (s) {
            return new (s || d)(e.Y36(e.SBq), e.Y36(e.sBO));
          };
          static ɵcmp = e.Xpm({
            type: d,
            selectors: [['td-breadcrumbs']],
            contentQueries: function (s, m, p) {
              if ((1 & s && e.Suo(p, b.Z, 5), 2 & s)) {
                let u;
                e.iGM((u = e.CRH())) && (m._breadcrumbs = u);
              }
            },
            hostVars: 2,
            hostBindings: function (s, m) {
              2 & s && e.ekj('td-breadcrumbs', m.tdBreadCrumbsClass);
            },
            inputs: { separatorIcon: 'separatorIcon' },
            ngContentSelectors: y,
            decls: 1,
            vars: 0,
            template: function (s, m) {
              1 & s && (e.F$t(), e.Hsn(0));
            },
            styles: [
              '[_nghost-%COMP%]{display:flex;align-items:center}.td-breadcrumbs[_nghost-%COMP%]{white-space:nowrap}',
            ],
            changeDetection: 0,
          });
        }
        return d;
      })();
    },
    7949: (T, h, t) => {
      t.d(h, { u: () => C });
      var r = t(96814),
        f = t(30617),
        g = t(19212);
      let C = (() => {
        class l {
          static ɵfac = function (y) {
            return new (y || l)();
          };
          static ɵmod = g.oAB({ type: l });
          static ɵinj = g.cJS({ imports: [r.ez, f.Ps] });
        }
        return l;
      })();
    },
  },
]);
