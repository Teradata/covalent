'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [7424],
  {
    97424: (C, c, o) => {
      o.r(c), o.d(c, { RegressionDemoModule: () => y });
      var i = o(96814),
        a = o(98525),
        d = o(30617),
        l = o(23421),
        r = o(29941),
        p = o(57337),
        u = o(52514),
        v = o(38708),
        m = o(52787),
        t = o(19212),
        g = o(95902),
        f = o(31791);
      const D = [
        {
          path: '',
          component: (() => {
            class s {
              static ɵfac = function (n) {
                return new (n || s)();
              };
              static ɵcmp = t.Xpm({
                type: s,
                selectors: [['regression-demo']],
                decls: 2,
                vars: 2,
                consts: [[3, 'demoId', 'demoTitle']],
                template: function (n, z) {
                  1 & n &&
                    (t.TgZ(0, 'demo-component', 0),
                    t._UZ(1, 'regression-demo-basic'),
                    t.qZA()),
                    2 & n &&
                      t.Q6J('demoId', 'regression-demo-basic')(
                        'demoTitle',
                        'Basic'
                      );
                },
                dependencies: [g.l, f.z],
              });
            }
            return s;
          })(),
        },
      ];
      let R = (() => {
        class s {
          static ɵfac = function (n) {
            return new (n || s)();
          };
          static ɵmod = t.oAB({ type: s });
          static ɵinj = t.cJS({ imports: [m.Bz.forChild(D), m.Bz] });
        }
        return s;
      })();
      var h = o(96535);
      let y = (() => {
        class s {
          static ɵfac = function (n) {
            return new (n || s)();
          };
          static ɵmod = t.oAB({ type: s });
          static ɵinj = t.cJS({
            imports: [v.X, h.l, R, l.MX, r.jt, p.NF, u.Po, i.ez, a.LD, d.Ps],
          });
        }
        return s;
      })();
    },
  },
]);
