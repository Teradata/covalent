'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [154],
  {
    154: (r, e, o) => {
      o.r(e), o.d(e, { LayoutNavListDemosModule: () => y });
      var m = o(96535),
        i = o(57322),
        c = o(52787),
        a = o(19212),
        l = o(7544),
        d = o(31791);
      const u = [
        {
          path: '',
          component: (() => {
            class t {
              static ɵfac = function (s) {
                return new (s || t)();
              };
              static ɵcmp = a.Xpm({
                type: t,
                selectors: [['layout-nav-list-demo']],
                decls: 2,
                vars: 2,
                consts: [[3, 'demoId', 'demoTitle']],
                template: function (s, f) {
                  1 & s &&
                    (a.TgZ(0, 'demo-component', 0),
                    a._UZ(1, 'layout-nav-list-demo-basic'),
                    a.qZA()),
                    2 & s &&
                      a.Q6J('demoId', 'layout-nav-list-demo-basic')(
                        'demoTitle',
                        'Basic'
                      );
                },
                dependencies: [l.l, d.z],
              });
            }
            return t;
          })(),
        },
      ];
      let v = (() => {
        class t {
          static ɵfac = function (s) {
            return new (s || t)();
          };
          static ɵmod = a.oAB({ type: t });
          static ɵinj = a.cJS({ imports: [c.Bz.forChild(u), c.Bz] });
        }
        return t;
      })();
      var p = o(50678);
      let y = (() => {
        class t {
          static ɵfac = function (s) {
            return new (s || t)();
          };
          static ɵmod = a.oAB({ type: t });
          static ɵinj = a.cJS({ imports: [i.I, m.l, v, p.i9] });
        }
        return t;
      })();
    },
  },
]);
