'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [7465],
  {
    49857: (h, m, t) => {
      t.r(m), t.d(m, { FileInputDemoModule: () => A });
      var d = t(96814),
        s = t(56223),
        i = t(52787),
        a = t(32296),
        u = t(95195),
        c = t(26385),
        e = t(64170),
        p = t(30617),
        v = t(2032),
        f = t(74104),
        C = t(22497),
        M = t(20951),
        y = t(96942),
        D = t(80549),
        n = t(19212),
        F = t(62013);
      const T = (0, D.ng)({
        overviewDemoComponent: (() => {
          class o {
            files;
            static ɵfac = function (l) {
              return new (l || o)();
            };
            static ɵcmp = n.Xpm({
              type: o,
              selectors: [['file-input-demo']],
              decls: 6,
              vars: 1,
              consts: [
                [
                  'multiple',
                  '',
                  1,
                  'push-left-sm',
                  'push-right-sm',
                  3,
                  'ngModel',
                  'ngModelChange',
                ],
                ['fileInput', ''],
                [1, 'tc-td-secondary'],
                [1, 'text-upper'],
              ],
              template: function (l, r) {
                1 & l &&
                  (n.TgZ(0, 'td-file-input', 0, 1),
                  n.NdJ('ngModelChange', function (J) {
                    return (r.files = J);
                  }),
                  n.TgZ(2, 'mat-icon', 2),
                  n._uU(3, 'folder'),
                  n.qZA(),
                  n.TgZ(4, 'span', 3),
                  n._uU(5, 'Browse...'),
                  n.qZA()()),
                  2 & l && n.Q6J('ngModel', r.files);
              },
              dependencies: [s.JJ, s.On, p.Hw, F.xe],
              styles: [
                '.drop-zone[_ngcontent-%COMP%]{font-weight:600}.drop-zone[_ngcontent-%COMP%]     *{pointer-events:none}',
              ],
              changeDetection: 0,
            });
          }
          return o;
        })(),
        id: 'file-input',
      });
      let A = (() => {
        class o {
          static ɵfac = function (l) {
            return new (l || o)();
          };
          static ɵmod = n.oAB({ type: o });
          static ɵinj = n.cJS({
            imports: [
              d.ez,
              s.u5,
              s.UX,
              a.ot,
              u.QW,
              c.t,
              e.lN,
              p.Ps,
              v.c,
              f.Nh,
              C.q,
              M.m_,
              y.B,
              i.Bz.forChild(T),
            ],
          });
        }
        return o;
      })();
    },
    39419: (h, m, t) => {
      t.d(m, { A0: () => c });
      var d = t(96814),
        s = t(30617),
        a = (t(21266), t(19212));
      let c = (() => {
        class e {
          static ɵfac = function (f) {
            return new (f || e)();
          };
          static ɵmod = a.oAB({ type: e });
          static ɵinj = a.cJS({ imports: [d.ez, s.Ps] });
        }
        return e;
      })();
    },
  },
]);
