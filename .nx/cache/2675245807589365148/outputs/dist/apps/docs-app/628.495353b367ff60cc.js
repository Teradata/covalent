'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [628],
  {
    40628: (J, a, n) => {
      n.r(a), n.d(a, { JsonFormatterDemoModule: () => F });
      var c = n(96814),
        d = n(42094),
        s = n(52787),
        o = n(19212),
        i = n(31791),
        p = n(74165);
      let l = (() => {
        class t {
          data = {
            stringProperty: 'This is a string',
            dateProperty: new Date(),
            numberProperty: 1e4,
            booleanProperty: !0,
            numberArray: [1, 2, 3, 4, 5, 6],
            arrayOfArrays: [
              [1, [2, 3]],
              [3, 4],
            ],
            objectArray: [{ prop: void 0 }, {}],
            functionProperty: (r, e) => {},
            undefinedProperty: void 0,
            longNameeeeeeeeeeeProoooopeeeeeeeeeeertyy: 'got truncated',
            emptyObject: {},
            emptyArray: [],
          };
          static ɵfac = function (e) {
            return new (e || t)();
          };
          static ɵcmp = o.Xpm({
            type: t,
            selectors: [['json-formatter-demo-basic']],
            decls: 1,
            vars: 2,
            consts: [[3, 'data', 'levelsOpen']],
            template: function (e, m) {
              1 & e && o._UZ(0, 'td-json-formatter', 0),
                2 & e && o.Q6J('data', m.data)('levelsOpen', 2);
            },
            dependencies: [p.W],
          });
        }
        return t;
      })();
      const u = [
        {
          path: '',
          component: (() => {
            class t {
              static ɵfac = function (e) {
                return new (e || t)();
              };
              static ɵcmp = o.Xpm({
                type: t,
                selectors: [['json-formatter-demo']],
                decls: 2,
                vars: 2,
                consts: [[3, 'demoId', 'demoTitle']],
                template: function (e, m) {
                  1 & e &&
                    (o.TgZ(0, 'demo-component', 0),
                    o._UZ(1, 'json-formatter-demo-basic'),
                    o.qZA()),
                    2 & e &&
                      o.Q6J('demoId', 'json-formatter-demo-basic')(
                        'demoTitle',
                        'Basic'
                      );
                },
                dependencies: [i.z, l],
              });
            }
            return t;
          })(),
        },
      ];
      let f = (() => {
        class t {
          static ɵfac = function (e) {
            return new (e || t)();
          };
          static ɵmod = o.oAB({ type: t });
          static ɵinj = o.cJS({ imports: [s.Bz.forChild(u), s.Bz] });
        }
        return t;
      })();
      var y = n(96535);
      let F = (() => {
        class t {
          static ɵfac = function (e) {
            return new (e || t)();
          };
          static ɵmod = o.oAB({ type: t });
          static ɵinj = o.cJS({ imports: [y.l, f, d.P, c.ez] });
        }
        return t;
      })();
    },
  },
]);
