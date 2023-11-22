'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [5359],
  {
    65359: (O, a, s) => {
      s.r(a), s.d(a, { SideSheetDemoModule: () => U });
      var p = s(96814),
        r = s(30617),
        u = s(32651),
        m = s(32296),
        S = s(81274),
        d = s(20677),
        h = s(96535),
        l = s(52787),
        e = s(19212),
        f = s(31791);
      const g = ['example'];
      function y(t, k) {
        1 & t && e._uU(0, 'It works from a TemplateRef!');
      }
      let T = (() => {
          class t {
            sideSheet;
            template;
            constructor(n) {
              this.sideSheet = n;
            }
            toggleSideSheet() {
              this.sideSheet.open(this.template);
            }
            static ɵfac = function (o) {
              return new (o || t)(e.Y36(d.PM));
            };
            static ɵcmp = e.Xpm({
              type: t,
              selectors: [['side-sheet-demo-basic']],
              viewQuery: function (o, i) {
                if ((1 & o && e.Gf(g, 5), 2 & o)) {
                  let c;
                  e.iGM((c = e.CRH())) && (i.template = c.first);
                }
              },
              decls: 6,
              vars: 0,
              consts: [
                ['mat-raised-button', '', 'color', 'primary', 3, 'click'],
                ['example', ''],
              ],
              template: function (o, i) {
                1 & o &&
                  (e.TgZ(0, 'p'),
                  e._uU(1, 'Open some dialog content from a TemplateRef'),
                  e.qZA(),
                  e.TgZ(2, 'button', 0),
                  e.NdJ('click', function () {
                    return i.toggleSideSheet();
                  }),
                  e._uU(3, ' Open\n'),
                  e.qZA(),
                  e.YNc(4, y, 1, 0, 'ng-template', null, 1, e.W1O));
              },
              dependencies: [m.lW],
            });
          }
          return t;
        })(),
        v = (() => {
          class t {
            static ɵfac = function (o) {
              return new (o || t)();
            };
            static ɵcmp = e.Xpm({
              type: t,
              selectors: [['example']],
              decls: 1,
              vars: 0,
              template: function (o, i) {
                1 & o && e._uU(0, ' it works from a component ');
              },
              encapsulation: 2,
            });
          }
          return t;
        })(),
        C = (() => {
          class t {
            sideSheet;
            constructor(n) {
              this.sideSheet = n;
            }
            toggleSideSheet() {
              this.sideSheet.open(v);
            }
            static ɵfac = function (o) {
              return new (o || t)(e.Y36(d.PM));
            };
            static ɵcmp = e.Xpm({
              type: t,
              selectors: [['side-sheet-demo-advanced']],
              decls: 4,
              vars: 0,
              consts: [
                ['mat-raised-button', '', 'color', 'primary', 3, 'click'],
              ],
              template: function (o, i) {
                1 & o &&
                  (e.TgZ(0, 'p'),
                  e._uU(1, 'Open some dialog content from a Component'),
                  e.qZA(),
                  e.TgZ(2, 'button', 0),
                  e.NdJ('click', function () {
                    return i.toggleSideSheet();
                  }),
                  e._uU(3, ' Open\n'),
                  e.qZA());
              },
              dependencies: [m.lW],
            });
          }
          return t;
        })();
      var Z = s(64902);
      let D = (() => {
          class t {
            sideSheet;
            SubPageOpenMode = d.dQ;
            constructor(n) {
              this.sideSheet = n;
            }
            openSideSheet(n = d.dQ.pushed) {
              this.sideSheet.open(x, { minWidth: '400px', subPageMode: n });
            }
            static ɵfac = function (o) {
              return new (o || t)(e.Y36(d.PM));
            };
            static ɵcmp = e.Xpm({
              type: t,
              selectors: [['example']],
              decls: 13,
              vars: 0,
              consts: [
                [
                  2,
                  'display',
                  'flex',
                  'justify-content',
                  'right',
                  'padding-top',
                  '50px',
                ],
                ['mat-raised-button', '', 'td-side-sheet-close', ''],
                [
                  2,
                  'display',
                  'flex',
                  'justify-content',
                  'space-between',
                  'padding-top',
                  '50px',
                ],
                ['mat-raised-button', '', 'color', 'primary', 3, 'click'],
              ],
              template: function (o, i) {
                1 & o &&
                  (e._uU(0, ' it works from a component '),
                  e.TgZ(1, 'div', 0)(2, 'button', 1),
                  e._uU(3, 'Close'),
                  e.qZA()(),
                  e.TgZ(4, 'div', 2)(5, 'button', 3),
                  e.NdJ('click', function () {
                    return i.openSideSheet();
                  }),
                  e._uU(6, ' Open pushed '),
                  e.qZA()(),
                  e.TgZ(7, 'div', 2)(8, 'button', 3),
                  e.NdJ('click', function () {
                    return i.openSideSheet(i.SubPageOpenMode.shifted);
                  }),
                  e._uU(9, ' Open shifted '),
                  e.qZA()(),
                  e.TgZ(10, 'div', 2)(11, 'button', 3),
                  e.NdJ('click', function () {
                    return i.openSideSheet(i.SubPageOpenMode.none);
                  }),
                  e._uU(12, ' Open none '),
                  e.qZA()());
              },
              dependencies: [Z.eA, m.lW],
              encapsulation: 2,
            });
          }
          return t;
        })(),
        x = (() => {
          class t {
            static ɵfac = function (o) {
              return new (o || t)();
            };
            static ɵcmp = e.Xpm({
              type: t,
              selectors: [['example-layered']],
              decls: 1,
              vars: 0,
              template: function (o, i) {
                1 & o && e._uU(0, 'Im Multi layered!');
              },
              encapsulation: 2,
            });
          }
          return t;
        })(),
        A = (() => {
          class t {
            sideSheet;
            constructor(n) {
              this.sideSheet = n;
            }
            toggleSideSheet() {
              this.sideSheet.open(D);
            }
            static ɵfac = function (o) {
              return new (o || t)(e.Y36(d.PM));
            };
            static ɵcmp = e.Xpm({
              type: t,
              selectors: [['side-sheet-demo-multi']],
              decls: 4,
              vars: 0,
              consts: [
                ['mat-raised-button', '', 'color', 'primary', 3, 'click'],
              ],
              template: function (o, i) {
                1 & o &&
                  (e.TgZ(0, 'p'),
                  e._uU(1, 'Open a side sheet with multiple layers'),
                  e.qZA(),
                  e.TgZ(2, 'button', 0),
                  e.NdJ('click', function () {
                    return i.toggleSideSheet();
                  }),
                  e._uU(3, ' Open\n'),
                  e.qZA());
              },
              dependencies: [m.lW],
            });
          }
          return t;
        })();
      const b = [
        {
          path: '',
          component: (() => {
            class t {
              static ɵfac = function (o) {
                return new (o || t)();
              };
              static ɵcmp = e.Xpm({
                type: t,
                selectors: [['sidesheet-demo']],
                decls: 6,
                vars: 6,
                consts: [[3, 'demoId', 'demoTitle']],
                template: function (o, i) {
                  1 & o &&
                    (e.TgZ(0, 'demo-component', 0),
                    e._UZ(1, 'side-sheet-demo-basic'),
                    e.qZA(),
                    e.TgZ(2, 'demo-component', 0),
                    e._UZ(3, 'side-sheet-demo-advanced'),
                    e.qZA(),
                    e.TgZ(4, 'demo-component', 0),
                    e._UZ(5, 'side-sheet-demo-multi'),
                    e.qZA()),
                    2 & o &&
                      (e.Q6J('demoId', 'side-sheet-demo-basic')(
                        'demoTitle',
                        'Basic'
                      ),
                      e.xp6(2),
                      e.Q6J('demoId', 'side-sheet-demo-advanced')(
                        'demoTitle',
                        'Advanced'
                      ),
                      e.xp6(2),
                      e.Q6J('demoId', 'side-sheet-demo-multi')(
                        'demoTitle',
                        'Multi'
                      ));
                },
                dependencies: [f.z, T, C, A],
              });
            }
            return t;
          })(),
        },
      ];
      let M = (() => {
          class t {
            static ɵfac = function (o) {
              return new (o || t)();
            };
            static ɵmod = e.oAB({ type: t });
            static ɵinj = e.cJS({ imports: [l.Bz.forChild(b), l.Bz] });
          }
          return t;
        })(),
        U = (() => {
          class t {
            static ɵfac = function (o) {
              return new (o || t)();
            };
            static ɵmod = e.oAB({ type: t });
            static ɵinj = e.cJS({
              imports: [h.l, M, d.rs, p.ez, r.Ps, u.SJ, m.ot, S.g0],
            });
          }
          return t;
        })();
    },
  },
]);
