'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [5838],
  {
    65838: (B, m, o) => {
      o.r(m), o.d(m, { FileInputDemoModule: () => I });
      var a = o(96814),
        u = o(20951),
        c = o(52787),
        t = o(19212),
        d = o(31791),
        f = o(62013),
        i = o(56223),
        p = o(30617);
      let r = (() => {
        class e {
          files;
          static ɵfac = function (n) {
            return new (n || e)();
          };
          static ɵcmp = t.Xpm({
            type: e,
            selectors: [['file-input-demo-basic']],
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
              [1, 'text-upper'],
            ],
            template: function (n, l) {
              1 & n &&
                (t.TgZ(0, 'td-file-input', 0, 1),
                t.NdJ('ngModelChange', function (h) {
                  return (l.files = h);
                }),
                t.TgZ(2, 'mat-icon'),
                t._uU(3, 'folder'),
                t.qZA(),
                t.TgZ(4, 'span', 2),
                t._uU(5, 'Browse...'),
                t.qZA()()),
                2 & n && t.Q6J('ngModel', l.files);
            },
            dependencies: [f.xe, i.JJ, i.On, p.Hw],
          });
        }
        return e;
      })();
      const g = [
        {
          path: '',
          component: (() => {
            class e {
              static ɵfac = function (n) {
                return new (n || e)();
              };
              static ɵcmp = t.Xpm({
                type: e,
                selectors: [['file-input-demo']],
                decls: 2,
                vars: 2,
                consts: [[3, 'demoId', 'demoTitle']],
                template: function (n, l) {
                  1 & n &&
                    (t.TgZ(0, 'demo-component', 0),
                    t._UZ(1, 'file-input-demo-basic'),
                    t.qZA()),
                    2 & n &&
                      t.Q6J('demoId', 'file-input-demo-basic')(
                        'demoTitle',
                        'Basic'
                      );
                },
                dependencies: [d.z, r],
              });
            }
            return e;
          })(),
        },
      ];
      let F = (() => {
        class e {
          static ɵfac = function (n) {
            return new (n || e)();
          };
          static ɵmod = t.oAB({ type: e });
          static ɵinj = t.cJS({ imports: [c.Bz.forChild(g), c.Bz] });
        }
        return e;
      })();
      var v = o(96535),
        C = o(32296);
      let I = (() => {
        class e {
          static ɵfac = function (n) {
            return new (n || e)();
          };
          static ɵmod = t.oAB({ type: e });
          static ɵinj = t.cJS({
            imports: [v.l, F, u.m_, a.ez, i.u5, p.Ps, C.ot],
          });
        }
        return e;
      })();
    },
  },
]);
