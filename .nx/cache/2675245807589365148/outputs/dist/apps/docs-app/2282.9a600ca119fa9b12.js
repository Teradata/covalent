'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [2282],
  {
    32282: (r, s, o) => {
      o.r(s), o.d(s, { LayoutNavDemosModule: () => y });
      var c = o(96535),
        d = o(33092),
        m = o(52787),
        a = o(19212),
        i = o(17179),
        l = o(31791);
      const u = [
        {
          path: '',
          component: (() => {
            class t {
              static ɵfac = function (n) {
                return new (n || t)();
              };
              static ɵcmp = a.Xpm({
                type: t,
                selectors: [['layout-nav-demo']],
                decls: 2,
                vars: 2,
                consts: [[3, 'demoId', 'demoTitle']],
                template: function (n, h) {
                  1 & n &&
                    (a.TgZ(0, 'demo-component', 0),
                    a._UZ(1, 'layout-nav-demo-basic'),
                    a.qZA()),
                    2 & n &&
                      a.Q6J('demoId', 'layout-nav-demo-basic')(
                        'demoTitle',
                        'Basic'
                      );
                },
                dependencies: [i.k, l.z],
                styles: [
                  '[_nghost-%COMP%]   mat-sidenav.mat-sidenav[_ngcontent-%COMP%]    {max-width:100px;min-width:100px}',
                ],
              });
            }
            return t;
          })(),
        },
      ];
      let v = (() => {
        class t {
          static ɵfac = function (n) {
            return new (n || t)();
          };
          static ɵmod = a.oAB({ type: t });
          static ɵinj = a.cJS({ imports: [m.Bz.forChild(u), m.Bz] });
        }
        return t;
      })();
      var p = o(50678);
      let y = (() => {
        class t {
          static ɵfac = function (n) {
            return new (n || t)();
          };
          static ɵmod = a.oAB({ type: t });
          static ɵinj = a.cJS({ imports: [d.X, c.l, v, p.i9] });
        }
        return t;
      })();
    },
  },
]);
