'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [9916],
  {
    39916: (z, a, n) => {
      n.r(a), n.d(a, { DynamicMenuDemoModule: () => C });
      var i = n(96814),
        l = n(55340),
        s = n(52787),
        t = n(19212),
        u = n(77203),
        y = n(31791);
      const v = [
        {
          path: '',
          component: (() => {
            class o {
              static ɵfac = function (m) {
                return new (m || o)();
              };
              static ɵcmp = t.Xpm({
                type: o,
                selectors: [['dynamic-menu-demo']],
                decls: 2,
                vars: 2,
                consts: [[3, 'demoId', 'demoTitle']],
                template: function (m, T) {
                  1 & m &&
                    (t.TgZ(0, 'demo-component', 0),
                    t._UZ(1, 'dynamic-menu-demo-basic'),
                    t.qZA()),
                    2 & m &&
                      t.Q6J('demoId', 'dynamic-menu-demo-basic')(
                        'demoTitle',
                        'Basic'
                      );
                },
                dependencies: [u.z, y.z],
              });
            }
            return o;
          })(),
        },
      ];
      let f = (() => {
        class o {
          static ɵfac = function (m) {
            return new (m || o)();
          };
          static ɵmod = t.oAB({ type: o });
          static ɵinj = t.cJS({ imports: [s.Bz.forChild(v), s.Bz] });
        }
        return o;
      })();
      var r = n(96535),
        e = n(30617),
        d = n(32296),
        D = n(59038),
        p = n(74104),
        M = n(81274),
        h = n(41139);
      let C = (() => {
        class o {
          static ɵfac = function (m) {
            return new (m || o)();
          };
          static ɵmod = t.oAB({ type: o });
          static ɵinj = t.cJS({
            imports: [
              h.t,
              r.l,
              f,
              l.i,
              i.ez,
              e.Ps,
              d.ot,
              e.Ps,
              d.ot,
              D.ie,
              p.Nh,
              M.g0,
            ],
          });
        }
        return o;
      })();
    },
  },
]);
