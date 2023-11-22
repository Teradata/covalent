'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [100],
  {
    50100: (z, c, o) => {
      o.r(c), o.d(c, { BarDemoModule: () => F });
      var d = o(96814),
        l = o(98525),
        e = o(30617),
        i = o(23421),
        r = o(81924),
        p = o(5965),
        v = o(57337),
        u = o(52514),
        f = o(57311),
        m = o(52787),
        a = o(19212),
        B = o(96548),
        y = o(31791);
      const h = [
        {
          path: '',
          component: (() => {
            class t {
              static ɵfac = function (s) {
                return new (s || t)();
              };
              static ɵcmp = a.Xpm({
                type: t,
                selectors: [['bar-demo']],
                decls: 2,
                vars: 2,
                consts: [[3, 'demoId', 'demoTitle']],
                template: function (s, M) {
                  1 & s &&
                    (a.TgZ(0, 'demo-component', 0),
                    a._UZ(1, 'bar-demo-basic'),
                    a.qZA()),
                    2 & s &&
                      a.Q6J('demoId', 'bar-demo-basic')('demoTitle', 'Basic');
                },
                dependencies: [B.y, y.z],
              });
            }
            return t;
          })(),
        },
      ];
      let D = (() => {
        class t {
          static ɵfac = function (s) {
            return new (s || t)();
          };
          static ɵmod = a.oAB({ type: t });
          static ɵinj = a.cJS({ imports: [m.Bz.forChild(h), m.Bz] });
        }
        return t;
      })();
      var C = o(96535);
      let F = (() => {
        class t {
          static ɵfac = function (s) {
            return new (s || t)();
          };
          static ɵmod = a.oAB({ type: t });
          static ɵinj = a.cJS({
            imports: [
              f.h,
              C.l,
              D,
              i.MX,
              r.Uy,
              p.FA,
              v.NF,
              u.Po,
              d.ez,
              l.LD,
              e.Ps,
            ],
          });
        }
        return t;
      })();
    },
  },
]);
