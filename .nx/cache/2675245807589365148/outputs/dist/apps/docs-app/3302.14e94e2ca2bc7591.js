'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [3302],
  {
    23302: (B, c, o) => {
      o.r(c), o.d(c, { TreeDemoModule: () => C });
      var a = o(96814),
        d = o(98525),
        l = o(30617),
        r = o(23421),
        i = o(57337),
        p = o(52514),
        u = o(90305),
        m = o(52787),
        e = o(19212),
        v = o(61298),
        f = o(31791);
      const T = [
        {
          path: '',
          component: (() => {
            class t {
              static ɵfac = function (s) {
                return new (s || t)();
              };
              static ɵcmp = e.Xpm({
                type: t,
                selectors: [['tree-demo']],
                decls: 2,
                vars: 2,
                consts: [[3, 'demoId', 'demoTitle']],
                template: function (s, F) {
                  1 & s &&
                    (e.TgZ(0, 'demo-component', 0),
                    e._UZ(1, 'tree-demo-basic'),
                    e.qZA()),
                    2 & s &&
                      e.Q6J('demoId', 'tree-demo-basic')('demoTitle', 'Basic');
                },
                dependencies: [v.Z, f.z],
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
          static ɵmod = e.oAB({ type: t });
          static ɵinj = e.cJS({ imports: [m.Bz.forChild(T), m.Bz] });
        }
        return t;
      })();
      var h = o(96535),
        y = o(99275);
      let C = (() => {
        class t {
          static ɵfac = function (s) {
            return new (s || t)();
          };
          static ɵmod = e.oAB({ type: t });
          static ɵinj = e.cJS({
            imports: [y.V, h.l, D, r.MX, i.NF, p.Po, u.u5, a.ez, d.LD, l.Ps],
          });
        }
        return t;
      })();
    },
  },
]);
