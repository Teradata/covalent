'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [5615],
  {
    15615: (y, d, t) => {
      t.r(d), t.d(d, { LayoutCardOverDemosModule: () => p });
      var r = t(96535),
        n = t(52787),
        e = t(19212),
        s = t(62753),
        m = t(31791);
      const u = [
        {
          path: '',
          component: (() => {
            class o {
              static ɵfac = function (a) {
                return new (a || o)();
              };
              static ɵcmp = e.Xpm({
                type: o,
                selectors: [['layout-card-over-demo']],
                decls: 2,
                vars: 2,
                consts: [[3, 'demoId', 'demoTitle']],
                template: function (a, C) {
                  1 & a &&
                    (e.TgZ(0, 'demo-component', 0),
                    e._UZ(1, 'layout-card-over-demo-basic'),
                    e.qZA()),
                    2 & a &&
                      e.Q6J('demoId', 'layout-card-over-demo-basic')(
                        'demoTitle',
                        'Basic'
                      );
                },
                dependencies: [s.f, m.z],
              });
            }
            return o;
          })(),
        },
      ];
      let l = (() => {
        class o {
          static ɵfac = function (a) {
            return new (a || o)();
          };
          static ɵmod = e.oAB({ type: o });
          static ɵinj = e.cJS({ imports: [n.Bz.forChild(u), n.Bz] });
        }
        return o;
      })();
      var i = t(84009),
        v = t(50678);
      let p = (() => {
        class o {
          static ɵfac = function (a) {
            return new (a || o)();
          };
          static ɵmod = e.oAB({ type: o });
          static ɵinj = e.cJS({ imports: [i.N, r.l, l, v.i9] });
        }
        return o;
      })();
    },
  },
]);
