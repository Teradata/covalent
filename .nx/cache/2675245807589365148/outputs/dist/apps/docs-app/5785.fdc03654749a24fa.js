'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [5785],
  {
    11716: (y, r, t) => {
      t.r(r), t.d(r, { JsonFormatterDemoModule: () => P });
      var d = t(96814),
        c = t(52787),
        s = t(95195),
        m = t(26385),
        v = t(22497),
        l = t(96942),
        n = t(42094),
        f = t(80549),
        a = t(19212),
        i = t(74165);
      let u = (() => {
        class o {
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
            functionProperty: (p, e) => {},
            undefinedProperty: void 0,
            longNameeeeeeeeeeeProoooopeeeeeeeeeeertyy: 'got truncated',
            emptyObject: {},
            emptyArray: [],
          };
          static ɵfac = function (e) {
            return new (e || o)();
          };
          static ɵcmp = a.Xpm({
            type: o,
            selectors: [['json-formatter-demo']],
            decls: 1,
            vars: 2,
            consts: [[1, 'pad-md', 3, 'data', 'levelsOpen']],
            template: function (e, C) {
              1 & e && a._UZ(0, 'td-json-formatter', 0),
                2 & e && a.Q6J('data', C.data)('levelsOpen', 2);
            },
            dependencies: [i.W],
            styles: [
              '[_nghost-%COMP%]{width:100%}[_nghost-%COMP%]   td-json-formatter[_ngcontent-%COMP%]{width:100%}',
            ],
          });
        }
        return o;
      })();
      var g = t(41257);
      const h = (0, f.ng)({ overviewDemoComponent: u, id: 'json-formatter' });
      let P = (() => {
        class o {
          static ɵfac = function (e) {
            return new (e || o)();
          };
          static ɵmod = a.oAB({ type: o });
          static ɵinj = a.cJS({
            imports: [d.ez, s.QW, m.t, g.m, v.q, l.B, n.P, c.Bz.forChild(h)],
          });
        }
        return o;
      })();
    },
    39419: (y, r, t) => {
      t.d(r, { A0: () => l });
      var d = t(96814),
        c = t(30617),
        m = (t(21266), t(19212));
      let l = (() => {
        class n {
          static ɵfac = function (i) {
            return new (i || n)();
          };
          static ɵmod = m.oAB({ type: n });
          static ɵinj = m.cJS({ imports: [d.ez, c.Ps] });
        }
        return n;
      })();
    },
  },
]);
