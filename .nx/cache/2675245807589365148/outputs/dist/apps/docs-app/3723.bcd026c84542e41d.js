'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [3723],
  {
    69837: (y, a, t) => {
      t.r(a), t.d(a, { SideSheetDemoModule: () => B });
      var d = t(96814),
        h = t(52787),
        l = t(95195),
        i = t(26385),
        u = t(30617),
        c = t(32651),
        s = t(74104),
        f = t(81274),
        S = t(22497),
        p = t(96942),
        g = t(20677),
        D = t(80549),
        e = t(19212),
        C = t(32296);
      const T = ['example'];
      function M(o, O) {
        1 & o && e._uU(0, 'It works from a TemplateRef!');
      }
      const J = (0, D.ng)({
        overviewDemoComponent: (() => {
          class o {
            sideSheet;
            template;
            constructor(m) {
              this.sideSheet = m;
            }
            toggleSideSheet() {
              this.sideSheet.open(this.template);
            }
            static ɵfac = function (n) {
              return new (n || o)(e.Y36(g.PM));
            };
            static ɵcmp = e.Xpm({
              type: o,
              selectors: [['sidesheet-demo']],
              viewQuery: function (n, r) {
                if ((1 & n && e.Gf(T, 5), 2 & n)) {
                  let v;
                  e.iGM((v = e.CRH())) && (r.template = v.first);
                }
              },
              decls: 6,
              vars: 0,
              consts: [
                ['mat-raised-button', '', 'color', 'primary', 3, 'click'],
                ['example', ''],
              ],
              template: function (n, r) {
                1 & n &&
                  (e.TgZ(0, 'p'),
                  e._uU(1, 'Open some dialog content from a TemplateRef'),
                  e.qZA(),
                  e.TgZ(2, 'button', 0),
                  e.NdJ('click', function () {
                    return r.toggleSideSheet();
                  }),
                  e._uU(3, ' Open\n'),
                  e.qZA(),
                  e.YNc(4, M, 1, 0, 'ng-template', null, 1, e.W1O));
              },
              dependencies: [C.lW],
              styles: ['[_nghost-%COMP%]{width:100%}'],
              changeDetection: 0,
            });
          }
          return o;
        })(),
        id: 'side-sheet',
      });
      let B = (() => {
        class o {
          static ɵfac = function (n) {
            return new (n || o)();
          };
          static ɵmod = e.oAB({ type: o });
          static ɵinj = e.cJS({
            imports: [
              d.ez,
              c.SJ,
              f.g0,
              C.ot,
              l.QW,
              i.t,
              u.Ps,
              c.SJ,
              s.Nh,
              f.g0,
              S.q,
              p.B,
              g.rs,
              h.Bz.forChild(J),
            ],
          });
        }
        return o;
      })();
    },
    39419: (y, a, t) => {
      t.d(a, { A0: () => c });
      var d = t(96814),
        h = t(30617),
        i = (t(21266), t(19212));
      let c = (() => {
        class s {
          static ɵfac = function (p) {
            return new (p || s)();
          };
          static ɵmod = i.oAB({ type: s });
          static ɵinj = i.cJS({ imports: [d.ez, h.Ps] });
        }
        return s;
      })();
    },
  },
]);
