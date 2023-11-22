'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [1511],
  {
    21511: (M, m, o) => {
      o.r(m), o.d(m, { MessageDemoModule: () => F });
      var g = o(96814),
        p = o(27445),
        l = o(39419),
        i = o(52787),
        e = o(19212),
        u = o(31791),
        a = o(16290),
        T = o(18035),
        d = o(21266),
        c = o(32296);
      let b = (() => {
          class t {
            _dialogService;
            constructor(n) {
              this._dialogService = n;
            }
            showAlert() {
              this._dialogService.openAlert({
                title: 'View More Clicked',
                message:
                  'Actions can be useful for displaying a dialog to provide more information',
              });
            }
            static ɵfac = function (s) {
              return new (s || t)(e.Y36(T.s$));
            };
            static ɵcmp = e.Xpm({
              type: t,
              selectors: [['message-demo-action']],
              decls: 3,
              vars: 0,
              consts: [
                [
                  'label',
                  'Warning',
                  'sublabel',
                  'Click the button for details',
                  'icon',
                  'warning',
                  1,
                  'bgc-td-orange-100',
                  'tc-td-orange',
                ],
                ['td-message-actions', '', 'mat-button', '', 3, 'click'],
              ],
              template: function (s, r) {
                1 & s &&
                  (e.TgZ(0, 'td-message', 0)(1, 'button', 1),
                  e.NdJ('click', function () {
                    return r.showAlert();
                  }),
                  e._uU(2, 'View More'),
                  e.qZA()());
              },
              dependencies: [d.T, c.lW],
            });
          }
          return t;
        })(),
        C = (() => {
          class t {
            static ɵfac = function (s) {
              return new (s || t)();
            };
            static ɵcmp = e.Xpm({
              type: t,
              selectors: [['message-demo-color']],
              decls: 2,
              vars: 0,
              consts: [
                [
                  'label',
                  'Purple',
                  'sublabel',
                  'Color assigned via the input',
                  'color',
                  'purple',
                  'icon',
                  'error',
                ],
                [
                  'label',
                  'Cyan',
                  'sublabel',
                  'Color assigned via classes',
                  'icon',
                  'error',
                  1,
                  'bgc-cyan-800',
                  'tc-cyan-100',
                ],
              ],
              template: function (s, r) {
                1 & s && e._UZ(0, 'td-message', 0)(1, 'td-message', 1);
              },
              dependencies: [d.T],
              styles: ['td-message[_ngcontent-%COMP%]{margin:5px}'],
            });
          }
          return t;
        })();
      var y = o(30617);
      let A = (() => {
        class t {
          static ɵfac = function (s) {
            return new (s || t)();
          };
          static ɵcmp = e.Xpm({
            type: t,
            selectors: [['message-demo-toggle-visibility']],
            decls: 7,
            vars: 0,
            consts: [
              [
                'color',
                'primary',
                'label',
                'Manage visibility',
                'sublabel',
                'Click the button to hide message',
                1,
                'pad-sm',
                'push-bottom',
              ],
              ['messageDemo', ''],
              ['td-message-actions', '', 'mat-icon-button', '', 3, 'click'],
              [
                'mat-button',
                '',
                'color',
                'accent',
                1,
                'push-top-sm',
                'pull-bottom',
                3,
                'click',
              ],
            ],
            template: function (s, r) {
              if (1 & s) {
                const v = e.EpF();
                e.TgZ(0, 'td-message', 0, 1)(2, 'button', 2),
                  e.NdJ('click', function () {
                    e.CHM(v);
                    const f = e.MAs(1);
                    return e.KtG(f.close());
                  }),
                  e.TgZ(3, 'mat-icon'),
                  e._uU(4, 'cancel'),
                  e.qZA()()(),
                  e.TgZ(5, 'button', 3),
                  e.NdJ('click', function () {
                    e.CHM(v);
                    const f = e.MAs(1);
                    return e.KtG(f.toggle());
                  }),
                  e._uU(6, ' Toggle Visibility\n'),
                  e.qZA();
              }
            },
            dependencies: [d.T, c.lW, c.RK, y.Hw],
          });
        }
        return t;
      })();
      const Z = [
        {
          path: '',
          component: (() => {
            class t {
              static ɵfac = function (s) {
                return new (s || t)();
              };
              static ɵcmp = e.Xpm({
                type: t,
                selectors: [['message-demo']],
                decls: 8,
                vars: 8,
                consts: [[3, 'demoId', 'demoTitle']],
                template: function (s, r) {
                  1 & s &&
                    (e.TgZ(0, 'demo-component', 0),
                    e._UZ(1, 'message-demo-basic'),
                    e.qZA(),
                    e.TgZ(2, 'demo-component', 0),
                    e._UZ(3, 'message-demo-action'),
                    e.qZA(),
                    e.TgZ(4, 'demo-component', 0),
                    e._UZ(5, 'message-demo-color'),
                    e.qZA(),
                    e.TgZ(6, 'demo-component', 0),
                    e._UZ(7, 'message-demo-toggle-visibility'),
                    e.qZA()),
                    2 & s &&
                      (e.Q6J('demoId', 'message-demo-basic')(
                        'demoTitle',
                        '\nBasic'
                      ),
                      e.xp6(2),
                      e.Q6J('demoId', 'message-demo-action')(
                        'demoTitle',
                        'Message Action'
                      ),
                      e.xp6(2),
                      e.Q6J('demoId', 'message-demo-color')(
                        'demoTitle',
                        'Color Styling'
                      ),
                      e.xp6(2),
                      e.Q6J('demoId', 'message-demo-toggle-visibility')(
                        'demoTitle',
                        'Manage Visibility'
                      ));
                },
                dependencies: [u.z, a.c, b, C, A],
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
          static ɵinj = e.cJS({ imports: [i.Bz.forChild(Z), i.Bz] });
        }
        return t;
      })();
      var h = o(96535),
        J = o(95195),
        S = o(26385);
      let F = (() => {
        class t {
          static ɵfac = function (s) {
            return new (s || t)();
          };
          static ɵmod = e.oAB({ type: t });
          static ɵinj = e.cJS({
            imports: [h.l, p.k, D, l.A0, g.ez, c.ot, J.QW, S.t, y.Ps],
          });
        }
        return t;
      })();
    },
    39419: (M, m, o) => {
      o.d(m, { A0: () => u });
      var g = o(96814),
        p = o(30617),
        i = (o(21266), o(19212));
      let u = (() => {
        class a {
          static ɵfac = function (c) {
            return new (c || a)();
          };
          static ɵmod = i.oAB({ type: a });
          static ɵinj = i.cJS({ imports: [g.ez, p.Ps] });
        }
        return a;
      })();
    },
  },
]);
