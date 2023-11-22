'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [2564],
  {
    99455: (y, i, e) => {
      e.r(i), e.d(i, { DynamicFormsDemoModule: () => J });
      var l = e(96814),
        p = e(52787),
        c = e(98525),
        r = e(30617),
        f = e(23680),
        d = e(38034),
        m = e(22255),
        h = e(22497),
        u = e(80549),
        t = e(19212),
        x = e(10578),
        D = e(35412);
      function v(n, a) {
        if ((1 & n && (t.TgZ(0, 'span'), t._uU(1), t.qZA()), 2 & n)) {
          const o = t.oxw(3).$implicit;
          t.xp6(1), t.hij('Min length value: ', o.minLength, '');
        }
      }
      function F(n, a) {
        if ((1 & n && (t.TgZ(0, 'span'), t._uU(1), t.qZA()), 2 & n)) {
          const o = t.oxw(3).$implicit;
          t.xp6(1), t.hij('Max length value: ', o.minLength, '');
        }
      }
      function T(n, a) {
        if (
          (1 & n &&
            (t.TgZ(0, 'span'),
            t.YNc(1, v, 2, 1, 'span', 3)(2, F, 2, 1, 'span', 3),
            t.qZA()),
          2 & n)
        ) {
          const o = t.oxw().control;
          t.xp6(1),
            t.Q6J('ngIf', o.hasError('minlength')),
            t.xp6(1),
            t.Q6J('ngIf', o.hasError('maxlength'));
        }
      }
      function C(n, a) {
        if ((1 & n && t.YNc(0, T, 3, 2, 'span', 3), 2 & n)) {
          const o = a.control;
          t.Q6J('ngIf', o.touched || !o.pristine);
        }
      }
      function I(n, a) {
        1 & n && t.YNc(0, C, 1, 1, 'ng-template', 2),
          2 & n && t.Q6J('tdDynamicFormsError', a.$implicit.name);
      }
      const E = (0, u.ng)({
        overviewDemoComponent: (() => {
          class n {
            textElements = [
              {
                name: 'input',
                hint: 'this is an input hint',
                type: m.Xl.Input,
                required: !1,
                flex: 50,
              },
              {
                name: 'required-input',
                label: 'Input Label',
                placeholder: 'Input Placeholder',
                type: m.Xl.Input,
                required: !0,
                flex: 50,
              },
              {
                name: 'text-length',
                label: 'Text Length',
                type: m.Xl.Input,
                minLength: 4,
                maxLength: 12,
                flex: 50,
              },
              {
                name: 'text',
                type: m.J0.Text,
                required: !1,
                default: 'Default',
                flex: 50,
                disabled: !0,
              },
              {
                name: 'textarea',
                hint: 'this is a textarea hint',
                type: m.Xl.Textarea,
                required: !1,
              },
              {
                name: 'required-password',
                label: 'Password Label',
                type: m.Xl.Password,
                required: !0,
              },
            ];
            static ɵfac = function (s) {
              return new (s || n)();
            };
            static ɵcmp = t.Xpm({
              type: n,
              selectors: [['dynamic-forms-demo']],
              decls: 2,
              vars: 2,
              consts: [
                [3, 'elements'],
                ['ngFor', '', 3, 'ngForOf'],
                [3, 'tdDynamicFormsError'],
                [4, 'ngIf'],
              ],
              template: function (s, g) {
                1 & s &&
                  (t.TgZ(0, 'td-dynamic-forms', 0),
                  t.YNc(1, I, 1, 1, 'ng-template', 1),
                  t.qZA()),
                  2 & s &&
                    (t.Q6J('elements', g.textElements),
                    t.xp6(1),
                    t.Q6J('ngForOf', g.textElements));
              },
              dependencies: [l.sg, l.O5, x.k, D.jN],
            });
          }
          return n;
        })(),
        id: 'dynamic-forms',
      });
      let J = (() => {
        class n {
          static ɵfac = function (s) {
            return new (s || n)();
          };
          static ɵmod = t.oAB({ type: n });
          static ɵinj = t.cJS({
            imports: [
              l.ez,
              c.LD,
              r.Ps,
              f.XK,
              d.FA,
              m.gd,
              h.q,
              p.Bz.forChild(E),
            ],
          });
        }
        return n;
      })();
    },
    39419: (y, i, e) => {
      e.d(i, { A0: () => d });
      var l = e(96814),
        p = e(30617),
        r = (e(21266), e(19212));
      let d = (() => {
        class m {
          static ɵfac = function (t) {
            return new (t || m)();
          };
          static ɵmod = r.oAB({ type: m });
          static ɵinj = r.cJS({ imports: [l.ez, p.Ps] });
        }
        return m;
      })();
    },
  },
]);
