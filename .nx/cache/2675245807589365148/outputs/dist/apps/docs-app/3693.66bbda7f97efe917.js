'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [3693],
  {
    73693: (C, m, o) => {
      o.r(m), o.d(m, { UserProfileDemosModule: () => g });
      var c = o(96814),
        a = o(30617),
        i = o(59038),
        r = o(58643),
        l = o(52787),
        e = o(19212),
        d = o(31791),
        p = o(74309),
        u = o(73576);
      let f = (() => {
        class t {
          static ɵfac = function (s) {
            return new (s || t)();
          };
          static ɵcmp = e.Xpm({
            type: t,
            selectors: [['user-profile-demo-basic']],
            decls: 8,
            vars: 0,
            consts: [
              ['name', 'donald duck', 'email', 'donald.duck@teradata.com'],
              ['td-user-action-list', ''],
              ['mat-list-item', ''],
              ['matListItemAvatar', ''],
              ['matListItemLine', ''],
            ],
            template: function (s, y) {
              1 & s &&
                (e.TgZ(0, 'span'),
                e._uU(1, 'Click to open:'),
                e.qZA(),
                e.TgZ(2, 'td-user-profile', 0),
                e.ynx(3, 1),
                e.TgZ(4, 'button', 2),
                e._UZ(5, 'span', 3),
                e.TgZ(6, 'span', 4),
                e._uU(7, 'Sign out'),
                e.qZA()(),
                e.BQk(),
                e.qZA());
            },
            dependencies: [i.Tg, i.D1, i.WW, u.H],
            encapsulation: 2,
          });
        }
        return t;
      })();
      const v = [
        {
          path: '',
          component: (() => {
            class t {
              static ɵfac = function (s) {
                return new (s || t)();
              };
              static ɵcmp = e.Xpm({
                type: t,
                selectors: [['user-profile-demo']],
                decls: 4,
                vars: 4,
                consts: [[3, 'demoId', 'demoTitle']],
                template: function (s, y) {
                  1 & s &&
                    (e.TgZ(0, 'demo-component', 0),
                    e._UZ(1, 'user-profile-demo-basic'),
                    e.qZA(),
                    e.TgZ(2, 'demo-component', 0),
                    e._UZ(3, 'user-profile-demo-list-items'),
                    e.qZA()),
                    2 & s &&
                      (e.Q6J('demoId', 'user-profile-demo-basic')(
                        'demoTitle',
                        'Basic'
                      ),
                      e.xp6(2),
                      e.Q6J('demoId', 'user-profile-demo-list-items')(
                        'demoTitle',
                        'With list items'
                      ));
                },
                dependencies: [d.z, p.m, f],
              });
            }
            return t;
          })(),
        },
      ];
      let Z = (() => {
        class t {
          static ɵfac = function (s) {
            return new (s || t)();
          };
          static ɵmod = e.oAB({ type: t });
          static ɵinj = e.cJS({ imports: [l.Bz.forChild(v), l.Bz] });
        }
        return t;
      })();
      var U = o(96535),
        T = o(87750);
      let g = (() => {
        class t {
          static ɵfac = function (s) {
            return new (s || t)();
          };
          static ɵmod = e.oAB({ type: t });
          static ɵinj = e.cJS({
            imports: [U.l, i.ie, a.Ps, T.i, Z, r.LK, c.ez],
          });
        }
        return t;
      })();
    },
  },
]);
