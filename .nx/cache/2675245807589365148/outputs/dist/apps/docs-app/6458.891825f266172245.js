'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [6458],
  {
    36458: (g, m, o) => {
      o.r(m), o.d(m, { LayoutManagementListDemosModule: () => r });
      var c = o(96535),
        i = o(69496),
        s = o(52787),
        e = o(19212),
        l = o(95874),
        d = o(31791);
      const u = [
        {
          path: '',
          component: (() => {
            class t {
              static ɵfac = function (a) {
                return new (a || t)();
              };
              static ɵcmp = e.Xpm({
                type: t,
                selectors: [['layout-management-list-demo']],
                decls: 2,
                vars: 2,
                consts: [[3, 'demoId', 'demoTitle']],
                template: function (a, f) {
                  1 & a &&
                    (e.TgZ(0, 'demo-component', 0),
                    e._UZ(1, 'layout-management-list-demo-basic'),
                    e.qZA()),
                    2 & a &&
                      e.Q6J('demoId', 'layout-management-list-demo-basic')(
                        'demoTitle',
                        'Basic'
                      );
                },
                dependencies: [l.W, d.z],
              });
            }
            return t;
          })(),
        },
      ];
      let p = (() => {
        class t {
          static ɵfac = function (a) {
            return new (a || t)();
          };
          static ɵmod = e.oAB({ type: t });
          static ɵinj = e.cJS({ imports: [s.Bz.forChild(u), s.Bz] });
        }
        return t;
      })();
      var y = o(50678);
      let r = (() => {
        class t {
          static ɵfac = function (a) {
            return new (a || t)();
          };
          static ɵmod = e.oAB({ type: t });
          static ɵinj = e.cJS({ imports: [i._, c.l, p, y.i9] });
        }
        return t;
      })();
    },
  },
]);
