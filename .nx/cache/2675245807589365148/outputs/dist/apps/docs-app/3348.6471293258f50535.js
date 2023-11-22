'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [3348],
  {
    33348: (M, l, t) => {
      t.r(l), t.d(l, { ClusteringDemoModule: () => B });
      var m = t(96814),
        i = t(98525),
        a = t(30617),
        d = t(82599),
        r = t(23421),
        u = t(68946),
        p = t(57337),
        g = t(52514),
        v = t(45747),
        e = t(52787),
        s = t(19212),
        f = t(51551),
        C = t(31791);
      const D = [
        {
          path: '',
          component: (() => {
            class o {
              static ɵfac = function (n) {
                return new (n || o)();
              };
              static ɵcmp = s.Xpm({
                type: o,
                selectors: [['clustering-demo']],
                decls: 2,
                vars: 2,
                consts: [[3, 'demoId', 'demoTitle']],
                template: function (n, F) {
                  1 & n &&
                    (s.TgZ(0, 'demo-component', 0),
                    s._UZ(1, 'clustering-demo-basic'),
                    s.qZA()),
                    2 & n &&
                      s.Q6J('demoId', 'clustering-demo-basic')(
                        'demoTitle',
                        'Basic'
                      );
                },
                dependencies: [f.n, C.z],
              });
            }
            return o;
          })(),
        },
      ];
      let h = (() => {
        class o {
          static ɵfac = function (n) {
            return new (n || o)();
          };
          static ɵmod = s.oAB({ type: o });
          static ɵinj = s.cJS({ imports: [e.Bz.forChild(D), e.Bz] });
        }
        return o;
      })();
      var y = t(96535);
      let B = (() => {
        class o {
          static ɵfac = function (n) {
            return new (n || o)();
          };
          static ɵmod = s.oAB({ type: o });
          static ɵinj = s.cJS({
            imports: [
              v.M,
              y.l,
              h,
              r.MX,
              u.OE,
              p.NF,
              g.Po,
              m.ez,
              i.LD,
              a.Ps,
              d.rP,
            ],
          });
        }
        return o;
      })();
    },
  },
]);
