'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [9409],
  {
    61247: (g, s, t) => {
      t.r(s), t.d(s, { SearchDemoModule: () => M });
      var m = t(96814),
        c = t(56223),
        r = t(52787),
        l = t(32296),
        u = t(49488),
        h = t(95195),
        e = t(26385),
        S = t(64170),
        p = t(2032),
        d = t(30617),
        T = t(87466),
        C = t(81274),
        y = t(22497),
        D = t(25133),
        U = t(80549),
        n = t(19212),
        Z = t(85483),
        A = t(53007);
      const J = (0, U.ng)({
        overviewDemoComponent: (() => {
          class o {
            searchInputTerm = '';
            static ɵfac = function (a) {
              return new (a || o)();
            };
            static ɵcmp = n.Xpm({
              type: o,
              selectors: [['search-demo']],
              decls: 10,
              vars: 3,
              consts: [
                [1, 'push-bottom-lg'],
                [1, 'mat-caption', 'tc-grey-700', 'push-none'],
                [
                  'appearance',
                  'outline',
                  'placeholder',
                  'Search here',
                  3,
                  'showUnderline',
                  'search',
                  'clear',
                ],
                [1, 'push-bottom'],
                [
                  'placeholder',
                  'Search here',
                  3,
                  'showUnderline',
                  'alwaysVisible',
                  'clear',
                ],
              ],
              template: function (a, i) {
                1 & a &&
                  (n.TgZ(0, 'div', 0),
                  n._uU(1, ' Search Input '),
                  n.TgZ(2, 'p', 1),
                  n._uU(3, 'Appearance: outline'),
                  n.qZA(),
                  n.TgZ(4, 'td-search-input', 2),
                  n.NdJ('search', function (B) {
                    return (i.searchInputTerm = B);
                  })('clear', function () {
                    return (i.searchInputTerm = '');
                  }),
                  n.qZA()(),
                  n.TgZ(5, 'div', 3),
                  n._uU(6, ' Search Box '),
                  n.TgZ(7, 'p', 1),
                  n._uU(8, 'Search input with animations'),
                  n.qZA(),
                  n.TgZ(9, 'td-search-box', 4),
                  n.NdJ('clear', function () {
                    return (i.searchInputTerm = '');
                  }),
                  n.qZA()()),
                  2 & a &&
                    (n.xp6(4),
                    n.Q6J('showUnderline', !0),
                    n.xp6(5),
                    n.Q6J('showUnderline', !0)('alwaysVisible', !0));
              },
              dependencies: [Z.i4, A.K],
              styles: ['[_nghost-%COMP%]{width:80%}'],
              changeDetection: 0,
            });
          }
          return o;
        })(),
        id: 'search',
      });
      let M = (() => {
        class o {
          static ɵfac = function (a) {
            return new (a || o)();
          };
          static ɵmod = n.oAB({ type: o });
          static ɵinj = n.cJS({
            imports: [
              m.ez,
              c.u5,
              c.UX,
              l.ot,
              u.vV,
              h.QW,
              e.t,
              S.lN,
              d.Ps,
              p.c,
              T.Fk,
              C.g0,
              y.q,
              D.UE,
              r.Bz.forChild(J),
            ],
          });
        }
        return o;
      })();
    },
    39419: (g, s, t) => {
      t.d(s, { A0: () => h });
      var m = t(96814),
        c = t(30617),
        l = (t(21266), t(19212));
      let h = (() => {
        class e {
          static ɵfac = function (d) {
            return new (d || e)();
          };
          static ɵmod = l.oAB({ type: e });
          static ɵinj = l.cJS({ imports: [m.ez, c.Ps] });
        }
        return e;
      })();
    },
  },
]);
