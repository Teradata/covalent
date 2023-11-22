'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [8584],
  {
    77203: (M, d, o) => {
      o.d(d, { z: () => Y });
      var t = o(19212),
        p = o(22939),
        s = o(96814),
        g = o(32296),
        r = o(30617),
        m = o(6311),
        _ = o(26385);
      function f(e, a) {
        if ((1 & e && t._UZ(0, 'mat-icon', 6), 2 & e)) {
          const n = t.oxw(2);
          t.Tol(n.item.iconClasses), t.Q6J('svgIcon', n.item.svgIcon);
        }
      }
      function l(e, a) {
        if ((1 & e && (t.TgZ(0, 'mat-icon'), t._uU(1), t.qZA()), 2 & e)) {
          const n = t.oxw(2);
          t.Tol(n.item.iconClasses), t.xp6(1), t.Oqu(n.item.icon);
        }
      }
      function x(e, a) {
        1 & e && (t.TgZ(0, 'mat-icon', 7), t._uU(1, 'launch'), t.qZA());
      }
      function I(e, a) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, 'a', 2),
            t.NdJ('click', function () {
              t.CHM(n);
              const c = t.oxw();
              return t.KtG(c.emitClicked());
            }),
            t.YNc(1, f, 1, 3, 'mat-icon', 3)(2, l, 2, 3, 'mat-icon', 4),
            t.TgZ(3, 'span'),
            t._uU(4),
            t.qZA(),
            t.YNc(5, x, 2, 0, 'mat-icon', 5),
            t.qZA();
        }
        if (2 & e) {
          const n = t.oxw();
          t.Q6J('id', n.item.id)('href', n.item.link, t.LSH)(
            'target',
            n.item.newTab ? '_blank' : '_self'
          ),
            t.xp6(1),
            t.Q6J('ngIf', n.item.svgIcon),
            t.xp6(1),
            t.Q6J('ngIf', n.item.icon),
            t.xp6(2),
            t.Oqu(n.item.text),
            t.xp6(1),
            t.Q6J('ngIf', n.item.newTab);
        }
      }
      function T(e, a) {
        if ((1 & e && t._UZ(0, 'mat-icon', 6), 2 & e)) {
          const n = t.oxw(2);
          t.Tol(n.item.iconClasses), t.Q6J('svgIcon', n.item.svgIcon);
        }
      }
      function k(e, a) {
        if ((1 & e && (t.TgZ(0, 'mat-icon'), t._uU(1), t.qZA()), 2 & e)) {
          const n = t.oxw(2);
          t.Tol(n.item.iconClasses), t.xp6(1), t.Oqu(n.item.icon);
        }
      }
      function v(e, a) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, 'button', 8),
            t.NdJ('click', function () {
              t.CHM(n);
              const c = t.oxw();
              return t.KtG(c.emitClicked());
            }),
            t.YNc(1, T, 1, 3, 'mat-icon', 3)(2, k, 2, 3, 'mat-icon', 4),
            t.TgZ(3, 'span'),
            t._uU(4),
            t.qZA()();
        }
        if (2 & e) {
          const n = t.oxw();
          t.Q6J('id', n.item.id),
            t.xp6(1),
            t.Q6J('ngIf', n.item.svgIcon),
            t.xp6(1),
            t.Q6J('ngIf', n.item.icon),
            t.xp6(2),
            t.Oqu(n.item.text);
        }
      }
      let y = (() => {
        class e {
          item;
          itemClicked = new t.vpe();
          emitClicked() {
            this.itemClicked.emit({
              text: this.item.text,
              action: this.item.action,
            });
          }
          static ɵfac = function (i) {
            return new (i || e)();
          };
          static ɵcmp = t.Xpm({
            type: e,
            selectors: [['td-dynamic-menu-link']],
            inputs: { item: 'item' },
            outputs: { itemClicked: 'itemClicked' },
            decls: 2,
            vars: 2,
            consts: [
              [
                'class',
                'new-tab',
                'mat-menu-item',
                '',
                3,
                'id',
                'href',
                'target',
                'click',
                4,
                'ngIf',
              ],
              ['mat-menu-item', '', 3, 'id', 'click', 4, 'ngIf'],
              [
                'mat-menu-item',
                '',
                1,
                'new-tab',
                3,
                'id',
                'href',
                'target',
                'click',
              ],
              [3, 'class', 'svgIcon', 4, 'ngIf'],
              [3, 'class', 4, 'ngIf'],
              ['class', 'new-tab-icon', 4, 'ngIf'],
              [3, 'svgIcon'],
              [1, 'new-tab-icon'],
              ['mat-menu-item', '', 3, 'id', 'click'],
            ],
            template: function (i, c) {
              1 & i && t.YNc(0, I, 6, 7, 'a', 0)(1, v, 5, 4, 'button', 1),
                2 & i &&
                  (t.Q6J('ngIf', c.item.link),
                  t.xp6(1),
                  t.Q6J('ngIf', c.item.action));
            },
            dependencies: [s.O5, r.Hw, m.OP],
            styles: [
              '.new-tab[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center}.new-tab[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{flex:1}.new-tab[_ngcontent-%COMP%]   .new-tab-icon[_ngcontent-%COMP%]{margin:0 0 0 16px}',
            ],
          });
        }
        return e;
      })();
      const D = ['childMenu'];
      function Z(e, a) {
        if ((1 & e && t._UZ(0, 'mat-icon', 9), 2 & e)) {
          const n = t.oxw(2).$implicit;
          t.Tol(n.iconClasses), t.Q6J('svgIcon', n.svgIcon);
        }
      }
      function h(e, a) {
        if ((1 & e && (t.TgZ(0, 'mat-icon'), t._uU(1), t.qZA()), 2 & e)) {
          const n = t.oxw(2).$implicit;
          t.Tol(n.iconClasses), t.xp6(1), t.Oqu(n.icon);
        }
      }
      function w(e, a) {
        if ((1 & e && (t.TgZ(0, 'span'), t._uU(1), t.qZA()), 2 & e)) {
          const n = t.oxw(2).$implicit;
          t.xp6(1), t.hij(' ', n.text, ' ');
        }
      }
      function J(e, a) {
        if (
          (1 & e &&
            (t.ynx(0),
            t.TgZ(1, 'button', 4),
            t.YNc(2, Z, 1, 3, 'mat-icon', 5)(3, h, 2, 3, 'mat-icon', 6)(
              4,
              w,
              2,
              1,
              'span',
              3
            ),
            t.qZA(),
            t._UZ(5, 'td-dynamic-menu-item', 7, 8),
            t.BQk()),
          2 & e)
        ) {
          const n = t.MAs(6),
            i = t.oxw().$implicit;
          t.xp6(1),
            t.Q6J('id', i.id)('matMenuTriggerFor', n.childMenu),
            t.xp6(1),
            t.Q6J('ngIf', i.svgIcon),
            t.xp6(1),
            t.Q6J('ngIf', i.icon),
            t.xp6(1),
            t.Q6J('ngIf', i.text),
            t.xp6(1),
            t.Q6J('items', i.children);
        }
      }
      function O(e, a) {
        1 & e && t._UZ(0, 'mat-divider', 12);
      }
      function Q(e, a) {
        if (
          (1 & e &&
            (t.ynx(0),
            t.YNc(1, O, 1, 0, 'mat-divider', 10),
            t.TgZ(2, 'div', 11),
            t._uU(3),
            t.qZA(),
            t.BQk()),
          2 & e)
        ) {
          const n = t.oxw(2),
            i = n.index,
            c = n.$implicit;
          t.xp6(1), t.Q6J('ngIf', i > 0), t.xp6(2), t.Oqu(c.text);
        }
      }
      function A(e, a) {
        if (1 & e) {
          const n = t.EpF();
          t.ynx(0),
            t.TgZ(1, 'div', 13)(2, 'td-dynamic-menu-link', 14),
            t.NdJ('itemClicked', function (c) {
              t.CHM(n);
              const u = t.oxw(3);
              return t.KtG(u.emitClicked(c));
            }),
            t.qZA()(),
            t.BQk();
        }
        if (2 & e) {
          const n = t.oxw(2).$implicit;
          t.xp6(2), t.Q6J('item', n);
        }
      }
      function E(e, a) {
        if (
          (1 & e &&
            (t.ynx(0),
            t.YNc(1, Q, 4, 2, 'ng-container', 3)(2, A, 3, 1, 'ng-container', 3),
            t.BQk()),
          2 & e)
        ) {
          const n = t.oxw().$implicit;
          t.xp6(1),
            t.Q6J('ngIf', !n.link && !n.action),
            t.xp6(1),
            t.Q6J('ngIf', n.link || n.action);
        }
      }
      function b(e, a) {
        if (
          (1 & e &&
            t.YNc(0, J, 7, 6, 'ng-container', 3)(1, E, 3, 2, 'ng-container', 3),
          2 & e)
        ) {
          const n = a.$implicit;
          t.Q6J('ngIf', n.children && n.children.length > 0),
            t.xp6(1),
            t.Q6J('ngIf', !n.children || 0 === n.children.length);
        }
      }
      let P = (() => {
        class e {
          items;
          itemClicked = new t.vpe();
          childMenu;
          emitClicked(n) {
            this.itemClicked.emit(n);
          }
          static ɵfac = function (i) {
            return new (i || e)();
          };
          static ɵcmp = t.Xpm({
            type: e,
            selectors: [['td-dynamic-menu-item']],
            viewQuery: function (i, c) {
              if ((1 & i && t.Gf(D, 7), 2 & i)) {
                let u;
                t.iGM((u = t.CRH())) && (c.childMenu = u.first);
              }
            },
            inputs: { items: 'items' },
            outputs: { itemClicked: 'itemClicked' },
            decls: 3,
            vars: 2,
            consts: [
              [3, 'overlapTrigger'],
              ['childMenu', 'matMenu'],
              ['ngFor', '', 3, 'ngForOf'],
              [4, 'ngIf'],
              ['mat-menu-item', '', 3, 'id', 'matMenuTriggerFor'],
              [3, 'class', 'svgIcon', 4, 'ngIf'],
              [3, 'class', 4, 'ngIf'],
              [3, 'items'],
              ['menu', ''],
              [3, 'svgIcon'],
              ['class', 'group-divider', 4, 'ngIf'],
              [1, 'group-label', 'text-sm'],
              [1, 'group-divider'],
              ['mat-menu-item', '', 1, 'pad-none'],
              [3, 'item', 'itemClicked'],
            ],
            template: function (i, c) {
              1 & i &&
                (t.TgZ(0, 'mat-menu', 0, 1),
                t.YNc(2, b, 2, 2, 'ng-template', 2),
                t.qZA()),
                2 & i &&
                  (t.Q6J('overlapTrigger', !1),
                  t.xp6(2),
                  t.Q6J('ngForOf', c.items));
            },
            dependencies: [s.sg, s.O5, r.Hw, _.d, m.VK, m.OP, m.p6, e, y],
            styles: [
              '.group-divider[_ngcontent-%COMP%]{margin:8px}.group-label[_ngcontent-%COMP%]{padding:16px}',
            ],
          });
        }
        return e;
      })();
      function U(e, a) {
        if ((1 & e && t._UZ(0, 'mat-icon', 7), 2 & e)) {
          const n = t.oxw(2);
          t.Tol(n.trigger.iconClasses), t.Q6J('svgIcon', n.trigger.svgIcon);
        }
      }
      function L(e, a) {
        if ((1 & e && (t.TgZ(0, 'mat-icon'), t._uU(1), t.qZA()), 2 & e)) {
          const n = t.oxw(2);
          t.Tol(n.trigger.iconClasses), t.xp6(1), t.Oqu(n.trigger.icon);
        }
      }
      function B(e, a) {
        if (
          (1 & e &&
            (t.TgZ(0, 'button', 4),
            t.YNc(1, U, 1, 3, 'mat-icon', 5)(2, L, 2, 3, 'mat-icon', 6),
            t.qZA()),
          2 & e)
        ) {
          const n = t.oxw(),
            i = t.MAs(3);
          t.s9C('id', n.trigger.id),
            t.Q6J('matMenuTriggerFor', i.childMenu),
            t.xp6(1),
            t.Q6J('ngIf', n.trigger.svgIcon),
            t.xp6(1),
            t.Q6J('ngIf', n.trigger.icon);
        }
      }
      function F(e, a) {
        if ((1 & e && t._UZ(0, 'mat-icon', 7), 2 & e)) {
          const n = t.oxw(2);
          t.Tol(n.trigger.iconClasses), t.Q6J('svgIcon', n.trigger.svgIcon);
        }
      }
      function K(e, a) {
        if ((1 & e && (t.TgZ(0, 'mat-icon'), t._uU(1), t.qZA()), 2 & e)) {
          const n = t.oxw(2);
          t.Tol(n.trigger.iconClasses), t.xp6(1), t.Oqu(n.trigger.icon);
        }
      }
      function N(e, a) {
        if ((1 & e && (t.TgZ(0, 'span'), t._uU(1), t.qZA()), 2 & e)) {
          const n = t.oxw(2);
          t.xp6(1), t.hij(' ', n.trigger.text, ' ');
        }
      }
      function R(e, a) {
        if (
          (1 & e &&
            (t.TgZ(0, 'button', 8),
            t.YNc(1, F, 1, 3, 'mat-icon', 5)(2, K, 2, 3, 'mat-icon', 6)(
              3,
              N,
              2,
              1,
              'span',
              9
            ),
            t.qZA()),
          2 & e)
        ) {
          const n = t.oxw(),
            i = t.MAs(3);
          t.s9C('id', n.trigger.id),
            t.Q6J('matMenuTriggerFor', i.childMenu),
            t.xp6(1),
            t.Q6J('ngIf', n.trigger.svgIcon),
            t.xp6(1),
            t.Q6J('ngIf', n.trigger.icon),
            t.xp6(1),
            t.Q6J('ngIf', n.trigger.text);
        }
      }
      let W = (() => {
          class e {
            trigger;
            items;
            itemClicked = new t.vpe();
            emitClicked(n) {
              this.itemClicked.emit(n);
            }
            static ɵfac = function (i) {
              return new (i || e)();
            };
            static ɵcmp = t.Xpm({
              type: e,
              selectors: [['td-dynamic-menu']],
              inputs: { trigger: 'trigger', items: 'items' },
              outputs: { itemClicked: 'itemClicked' },
              decls: 4,
              vars: 3,
              consts: [
                [
                  'mat-icon-button',
                  '',
                  3,
                  'id',
                  'matMenuTriggerFor',
                  4,
                  'ngIf',
                ],
                ['mat-button', '', 3, 'id', 'matMenuTriggerFor', 4, 'ngIf'],
                [3, 'items', 'itemClicked'],
                ['menu', ''],
                ['mat-icon-button', '', 3, 'id', 'matMenuTriggerFor'],
                [3, 'class', 'svgIcon', 4, 'ngIf'],
                [3, 'class', 4, 'ngIf'],
                [3, 'svgIcon'],
                ['mat-button', '', 3, 'id', 'matMenuTriggerFor'],
                [4, 'ngIf'],
              ],
              template: function (i, c) {
                1 & i &&
                  (t.YNc(0, B, 3, 4, 'button', 0)(1, R, 4, 5, 'button', 1),
                  t.TgZ(2, 'td-dynamic-menu-item', 2, 3),
                  t.NdJ('itemClicked', function (C) {
                    return c.emitClicked(C);
                  }),
                  t.qZA()),
                  2 & i &&
                    (t.Q6J('ngIf', !c.trigger.text),
                    t.xp6(1),
                    t.Q6J('ngIf', c.trigger.text),
                    t.xp6(1),
                    t.Q6J('items', c.items));
              },
              dependencies: [s.O5, g.lW, g.RK, r.Hw, m.p6, P],
            });
          }
          return e;
        })(),
        Y = (() => {
          class e {
            _snackBar;
            trigger1 = {
              id: 'triggerbutton',
              icon: 'list',
              text: 'Trigger With Text And Icon',
            };
            items1 = [
              { id: 'platform', text: 'Platform' },
              {
                id: 'covalentlinkstrigger',
                text: 'Covalent Links',
                svgIcon: 'assets:covalent',
                children: [
                  {
                    id: 'quickstartlink',
                    text: 'Quickstart',
                    icon: 'flash_on',
                    link: 'https://github.com/Teradata/covalent-quickstart',
                    newTab: !0,
                  },
                  {
                    id: 'electronlink',
                    text: 'Electron App',
                    icon: 'laptop_mac',
                    link: 'https://github.com/Teradata/covalent-electron',
                    newTab: !0,
                  },
                  {
                    id: 'datalink',
                    text: 'Covalent Data',
                    icon: 'aspect_ratio',
                    link: 'https://github.com/Teradata/covalent-data',
                    newTab: !0,
                  },
                ],
              },
              { id: 'framework', text: 'Framework' },
              {
                id: 'angularlink',
                text: 'Angular Link',
                svgIcon: 'assets:angular',
                children: [
                  {
                    text: 'Angular Homepage',
                    link: 'https://angular.io/',
                    newTab: !0,
                  },
                ],
              },
              { id: 'actions', text: 'Actions' },
              {
                id: 'actionlink',
                text: 'Do Action',
                icon: 'directions_run',
                action: 'Go Run',
              },
            ];
            trigger2 = { icon: 'help' };
            items2 = [
              {
                text: 'Level 1',
                icon: 'filter_1',
                children: [
                  {
                    text: 'Level 2',
                    icon: 'filter_2',
                    children: [
                      {
                        text: 'Level 3',
                        icon: 'filter_3',
                        children: [
                          {
                            text: 'Teradata - open in current tab',
                            icon: 'filter_4',
                            link: 'www.teradata.com',
                          },
                          {
                            text: 'Teradata - open in new tab',
                            icon: 'filter_4',
                            link: 'www.teradata.com',
                            newTab: !0,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ];
            constructor(n) {
              this._snackBar = n;
            }
            reportClick(n) {
              this._snackBar.open(
                `Item "${n.text}:${n.action}" clicked`,
                void 0,
                { duration: 2e3 }
              );
            }
            static ɵfac = function (i) {
              return new (i || e)(t.Y36(p.ux));
            };
            static ɵcmp = t.Xpm({
              type: e,
              selectors: [['dynamic-menu-demo-basic']],
              decls: 3,
              vars: 4,
              consts: [
                [3, 'trigger', 'items', 'itemClicked'],
                [3, 'trigger', 'items'],
              ],
              template: function (i, c) {
                1 & i &&
                  (t.TgZ(0, 'div')(1, 'td-dynamic-menu', 0),
                  t.NdJ('itemClicked', function (C) {
                    return c.reportClick(C);
                  }),
                  t.qZA(),
                  t._UZ(2, 'td-dynamic-menu', 1),
                  t.qZA()),
                  2 & i &&
                    (t.xp6(1),
                    t.Q6J('trigger', c.trigger1)('items', c.items1),
                    t.xp6(1),
                    t.Q6J('trigger', c.trigger2)('items', c.items2));
              },
              dependencies: [W],
            });
          }
          return e;
        })();
    },
    41139: (M, d, o) => {
      o.d(d, { t: () => m });
      var t = o(96814),
        p = o(55340),
        s = o(32296),
        g = o(30617),
        r = o(19212);
      let m = (() => {
        class _ {
          static ɵfac = function (x) {
            return new (x || _)();
          };
          static ɵmod = r.oAB({ type: _ });
          static ɵinj = r.cJS({ imports: [t.ez, p.i, s.ot, g.Ps] });
        }
        return _;
      })();
    },
    55340: (M, d, o) => {
      o.d(d, { i: () => f });
      var t = o(96814),
        p = o(32296),
        s = o(30617),
        g = o(59038),
        r = o(6311),
        m = o(92596),
        _ = o(19212);
      let f = (() => {
        class l {
          static ɵfac = function (T) {
            return new (T || l)();
          };
          static ɵmod = _.oAB({ type: l });
          static ɵinj = _.cJS({
            imports: [t.ez, p.ot, s.Ps, g.ie, r.Tx, m.AV],
          });
        }
        return l;
      })();
    },
  },
]);
