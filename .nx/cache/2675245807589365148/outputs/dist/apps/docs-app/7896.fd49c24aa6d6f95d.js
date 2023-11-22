'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [7896],
  {
    69345: (E, _, c) => {
      c.r(_), c.d(_, { SearchDemoModule: () => Q });
      var m = c(96814),
        s = c(56223),
        C = c(25133),
        b = c(52787),
        e = c(19212),
        Z = c(31791),
        x = c(53007),
        u = c(32296),
        l = c(49488),
        d = c(95195),
        f = c(26385),
        h = c(30617);
      function y(t, i) {
        if (1 & t) {
          const n = e.EpF();
          e.TgZ(0, 'td-search-box', 12),
            e.NdJ('searchDebounce', function (o) {
              e.CHM(n);
              const r = e.oxw();
              return e.KtG((r.searchBoxTerm = o));
            }),
            e.qZA();
        }
        if (2 & t) {
          const n = e.oxw();
          e.Q6J('alwaysVisible', n.alwaysVisible);
        }
      }
      function v(t, i) {
        if (1 & t) {
          const n = e.EpF();
          e.TgZ(0, 'td-search-box', 13),
            e.NdJ('search', function (o) {
              e.CHM(n);
              const r = e.oxw();
              return e.KtG((r.searchBoxTerm = o));
            })('clear', function () {
              e.CHM(n);
              const o = e.oxw();
              return e.KtG((o.searchBoxTerm = ''));
            }),
            e.qZA();
        }
        if (2 & t) {
          const n = e.oxw();
          e.Q6J('alwaysVisible', n.alwaysVisible);
        }
      }
      let S = (() => {
        class t {
          searchBoxTerm = '';
          debounce = 0;
          alwaysVisible = !1;
          toggleAlwaysVisible() {
            this.alwaysVisible = !this.alwaysVisible;
          }
          modeChange() {
            this.searchBoxTerm = '';
          }
          static ɵfac = function (a) {
            return new (a || t)();
          };
          static ɵcmp = e.Xpm({
            type: t,
            selectors: [['search-demo-box']],
            decls: 25,
            vars: 6,
            consts: [
              [
                'layout',
                'row',
                'layout-align',
                'start center',
                1,
                'field-container',
              ],
              ['name', 'mode', 3, 'ngModel', 'change', 'ngModelChange'],
              ['matTooltip', 'Enter/Clear Events', 3, 'value'],
              ['matTooltip', 'Debounce Events', 3, 'value'],
              ['layout-gt-xs', 'row'],
              ['flex-gt-xs', '60'],
              [
                'layout',
                'row',
                'layout-align',
                'start center',
                1,
                'push-left',
                'push-right',
              ],
              [1, 'mat-title'],
              ['flex', ''],
              [
                'placeholder',
                'Search here',
                'flex',
                '',
                3,
                'alwaysVisible',
                'searchDebounce',
                4,
                'ngIf',
              ],
              [
                'placeholder',
                'Search here',
                'flex',
                '',
                3,
                'alwaysVisible',
                'search',
                'clear',
                4,
                'ngIf',
              ],
              [
                'mat-button',
                '',
                'color',
                'accent',
                1,
                'push-top',
                'text-upper',
                3,
                'click',
              ],
              [
                'placeholder',
                'Search here',
                'flex',
                '',
                3,
                'alwaysVisible',
                'searchDebounce',
              ],
              [
                'placeholder',
                'Search here',
                'flex',
                '',
                3,
                'alwaysVisible',
                'search',
                'clear',
              ],
            ],
            template: function (a, o) {
              1 & a &&
                (e.TgZ(0, 'div', 0)(1, 'mat-button-toggle-group', 1),
                e.NdJ('change', function () {
                  return o.modeChange();
                })('ngModelChange', function (p) {
                  return (o.debounce = p);
                }),
                e.TgZ(2, 'mat-button-toggle', 2)(3, 'mat-icon'),
                e._uU(4, 'search'),
                e.qZA(),
                e._uU(5, ' Enter/Clear '),
                e.qZA(),
                e.TgZ(6, 'mat-button-toggle', 3)(7, 'mat-icon'),
                e._uU(8, 'keyboard'),
                e.qZA(),
                e._uU(9, ' Debounce '),
                e.qZA()()(),
                e.TgZ(10, 'p'),
                e._uU(11),
                e.qZA(),
                e.TgZ(12, 'div', 4)(13, 'mat-card', 5)(14, 'div', 6)(
                  15,
                  'span',
                  7
                ),
                e._uU(16, 'Card'),
                e.qZA(),
                e._UZ(17, 'span', 8),
                e.YNc(18, y, 1, 1, 'td-search-box', 9)(
                  19,
                  v,
                  1,
                  1,
                  'td-search-box',
                  10
                ),
                e.qZA(),
                e._UZ(20, 'mat-divider'),
                e.TgZ(21, 'mat-card-content'),
                e._uU(22, 'card content'),
                e.qZA()()(),
                e.TgZ(23, 'button', 11),
                e.NdJ('click', function () {
                  return o.toggleAlwaysVisible();
                }),
                e._uU(24, ' Always Visible\n'),
                e.qZA()),
                2 & a &&
                  (e.xp6(1),
                  e.Q6J('ngModel', o.debounce),
                  e.xp6(1),
                  e.Q6J('value', 0),
                  e.xp6(4),
                  e.Q6J('value', 1),
                  e.xp6(5),
                  e.hij('Search Value: ', o.searchBoxTerm || 'Empty', ''),
                  e.xp6(7),
                  e.Q6J('ngIf', o.debounce),
                  e.xp6(1),
                  e.Q6J('ngIf', !o.debounce));
            },
            dependencies: [
              s.JJ,
              s.On,
              x.K,
              m.O5,
              u.lW,
              l.A9,
              l.Yi,
              d.a8,
              d.dn,
              f.d,
              h.Hw,
            ],
          });
        }
        return t;
      })();
      var D = c(85483),
        g = c(87466);
      function w(t, i) {
        if (
          (1 & t && (e.TgZ(0, 'mat-radio-button', 11), e._uU(1), e.qZA()),
          2 & t)
        ) {
          const n = i.$implicit;
          e.Q6J('value', n), e.xp6(1), e.hij(' ', n, ' ');
        }
      }
      function A(t, i) {
        if (1 & t) {
          const n = e.EpF();
          e.TgZ(0, 'td-search-input', 12),
            e.NdJ('searchDebounce', function (o) {
              e.CHM(n);
              const r = e.oxw();
              return e.KtG(r.searchChange(o));
            })('clear', function () {
              e.CHM(n);
              const o = e.oxw();
              return e.KtG(o.modeChange());
            }),
            e.qZA();
        }
        if (2 & t) {
          const n = e.oxw();
          e.Q6J('appearance', n.appearance)('showUnderline', !0);
        }
      }
      function J(t, i) {
        if (1 & t) {
          const n = e.EpF();
          e.TgZ(0, 'td-search-input', 13),
            e.NdJ('search', function (o) {
              e.CHM(n);
              const r = e.oxw();
              return e.KtG(r.searchChange(o));
            })('clear', function () {
              e.CHM(n);
              const o = e.oxw();
              return e.KtG(o.modeChange());
            }),
            e.qZA();
        }
        if (2 & t) {
          const n = e.oxw();
          e.Q6J('appearance', n.appearance)('showUnderline', !0);
        }
      }
      let I = (() => {
        class t {
          appearanceOptions = ['fill', 'outline'];
          appearance = this.appearanceOptions[1];
          searchInputTerm = '';
          debounce = 0;
          searchChange(n) {
            this.searchInputTerm = n;
          }
          modeChange() {
            this.searchInputTerm = '';
          }
          static ɵfac = function (a) {
            return new (a || t)();
          };
          static ɵcmp = e.Xpm({
            type: t,
            selectors: [['search-demo-input']],
            decls: 21,
            vars: 8,
            consts: [
              [
                'layout',
                'row',
                'layout-align',
                'start center',
                1,
                'field-container',
              ],
              ['name', 'mode', 3, 'ngModel', 'change', 'ngModelChange'],
              ['matTooltip', 'Enter/Clear Events', 3, 'value'],
              ['matTooltip', 'Debounce Events', 3, 'value'],
              [1, 'push-right-xs'],
              [3, 'ngModel', 'ngModelChange'],
              [3, 'value', 4, 'ngFor', 'ngForOf'],
              ['layout-gt-xs', 'row'],
              ['flex-gt-xs', '40'],
              [
                'placeholder',
                'Search using debounce',
                'searchIcon',
                'image_search',
                3,
                'appearance',
                'showUnderline',
                'searchDebounce',
                'clear',
                4,
                'ngIf',
              ],
              [
                'placeholder',
                'Search using enter/clear',
                'searchIcon',
                'search',
                3,
                'appearance',
                'showUnderline',
                'search',
                'clear',
                4,
                'ngIf',
              ],
              [3, 'value'],
              [
                'placeholder',
                'Search using debounce',
                'searchIcon',
                'image_search',
                3,
                'appearance',
                'showUnderline',
                'searchDebounce',
                'clear',
              ],
              [
                'placeholder',
                'Search using enter/clear',
                'searchIcon',
                'search',
                3,
                'appearance',
                'showUnderline',
                'search',
                'clear',
              ],
            ],
            template: function (a, o) {
              1 & a &&
                (e.TgZ(0, 'div', 0)(1, 'mat-button-toggle-group', 1),
                e.NdJ('change', function () {
                  return o.modeChange();
                })('ngModelChange', function (p) {
                  return (o.debounce = p);
                }),
                e.TgZ(2, 'mat-button-toggle', 2)(3, 'mat-icon'),
                e._uU(4, 'search'),
                e.qZA(),
                e._uU(5, ' Enter/Clear '),
                e.qZA(),
                e.TgZ(6, 'mat-button-toggle', 3)(7, 'mat-icon'),
                e._uU(8, 'keyboard'),
                e.qZA(),
                e._uU(9, ' Debounce '),
                e.qZA()()(),
                e.TgZ(10, 'div', 0)(11, 'label', 4),
                e._uU(12, 'Appearance:'),
                e.qZA(),
                e.TgZ(13, 'mat-radio-group', 5),
                e.NdJ('ngModelChange', function (p) {
                  return (o.appearance = p);
                }),
                e.YNc(14, w, 2, 2, 'mat-radio-button', 6),
                e.qZA()(),
                e.TgZ(15, 'p'),
                e._uU(16),
                e.qZA(),
                e.TgZ(17, 'div', 7)(18, 'div', 8),
                e.YNc(19, A, 1, 2, 'td-search-input', 9)(
                  20,
                  J,
                  1,
                  2,
                  'td-search-input',
                  10
                ),
                e.qZA()()),
                2 & a &&
                  (e.xp6(1),
                  e.Q6J('ngModel', o.debounce),
                  e.xp6(1),
                  e.Q6J('value', 0),
                  e.xp6(4),
                  e.Q6J('value', 1),
                  e.xp6(7),
                  e.Q6J('ngModel', o.appearance),
                  e.xp6(1),
                  e.Q6J('ngForOf', o.appearanceOptions),
                  e.xp6(2),
                  e.hij('Search Value: ', o.searchInputTerm || 'Empty', ''),
                  e.xp6(3),
                  e.Q6J('ngIf', o.debounce),
                  e.xp6(1),
                  e.Q6J('ngIf', !o.debounce));
            },
            dependencies: [
              s.JJ,
              s.On,
              D.i4,
              m.sg,
              m.O5,
              l.A9,
              l.Yi,
              h.Hw,
              g.VQ,
              g.U0,
            ],
            styles: [
              '.mat-radio-button[_ngcontent-%COMP%]{margin:0 12px}.field-container[_ngcontent-%COMP%]{margin:12px 0}',
            ],
            changeDetection: 0,
          });
        }
        return t;
      })();
      var T = c(81274);
      let U = (() => {
        class t {
          alwaysVisible = !1;
          toggleAlwaysVisible() {
            this.alwaysVisible = !this.alwaysVisible;
          }
          static ɵfac = function (a) {
            return new (a || t)();
          };
          static ɵcmp = e.Xpm({
            type: t,
            selectors: [['search-demo-toolbar-box']],
            decls: 7,
            vars: 1,
            consts: [
              ['color', 'primary'],
              [
                'backIcon',
                'arrow_back',
                'placeholder',
                'Search here',
                'flex',
                '',
                3,
                'alwaysVisible',
              ],
              ['mat-icon-button', ''],
              [
                'mat-button',
                '',
                'color',
                'accent',
                1,
                'push-top',
                'text-upper',
                3,
                'click',
              ],
            ],
            template: function (a, o) {
              1 & a &&
                (e.TgZ(0, 'mat-toolbar', 0),
                e._UZ(1, 'td-search-box', 1),
                e.TgZ(2, 'button', 2)(3, 'mat-icon'),
                e._uU(4, 'more_vert'),
                e.qZA()()(),
                e.TgZ(5, 'button', 3),
                e.NdJ('click', function () {
                  return o.toggleAlwaysVisible();
                }),
                e._uU(6, ' Always Visible\n'),
                e.qZA()),
                2 & a && (e.xp6(1), e.Q6J('alwaysVisible', o.alwaysVisible));
            },
            dependencies: [x.K, u.lW, u.RK, h.Hw, T.Ye],
            changeDetection: 0,
          });
        }
        return t;
      })();
      const M = [
        {
          path: '',
          component: (() => {
            class t {
              static ɵfac = function (a) {
                return new (a || t)();
              };
              static ɵcmp = e.Xpm({
                type: t,
                selectors: [['search-demo']],
                decls: 6,
                vars: 6,
                consts: [[3, 'demoId', 'demoTitle']],
                template: function (a, o) {
                  1 & a &&
                    (e.TgZ(0, 'demo-component', 0),
                    e._UZ(1, 'search-demo-input'),
                    e.qZA(),
                    e.TgZ(2, 'demo-component', 0),
                    e._UZ(3, 'search-demo-box'),
                    e.qZA(),
                    e.TgZ(4, 'demo-component', 0),
                    e._UZ(5, 'search-demo-toolbar-box'),
                    e.qZA()),
                    2 & a &&
                      (e.Q6J('demoId', 'search-demo-input')(
                        'demoTitle',
                        'Basic'
                      ),
                      e.xp6(2),
                      e.Q6J('demoId', 'search-demo-box')(
                        'demoTitle',
                        'Search Box'
                      ),
                      e.xp6(2),
                      e.Q6J('demoId', 'search-demo-toolbar-box')(
                        'demoTitle',
                        'Search Box In Toolbar'
                      ));
                },
                dependencies: [Z.z, S, I, U],
              });
            }
            return t;
          })(),
        },
      ];
      let V = (() => {
        class t {
          static ɵfac = function (a) {
            return new (a || t)();
          };
          static ɵmod = e.oAB({ type: t });
          static ɵinj = e.cJS({ imports: [b.Bz.forChild(M), b.Bz] });
        }
        return t;
      })();
      var B = c(96535);
      let Q = (() => {
        class t {
          static ɵfac = function (a) {
            return new (a || t)();
          };
          static ɵmod = e.oAB({ type: t });
          static ɵinj = e.cJS({
            imports: [
              B.l,
              s.u5,
              V,
              C.UE,
              m.ez,
              u.ot,
              l.vV,
              d.QW,
              f.t,
              h.Ps,
              g.Fk,
              T.g0,
            ],
          });
        }
        return t;
      })();
    },
  },
]);
