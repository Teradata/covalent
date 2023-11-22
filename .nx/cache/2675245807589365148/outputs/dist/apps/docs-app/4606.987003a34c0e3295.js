'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [4606],
  {
    24606: (tt, u, r) => {
      r.r(u), r.d(u, { MarkdownNavigatorDemoModule: () => H });
      var C = r(96814),
        l = r(55629),
        v = r(52787),
        t = r(19212),
        T = r(31791),
        A = r(66816),
        i = r(36454);
      let Z = (() => {
          class e {
            static ɵfac = function (o) {
              return new (o || e)();
            };
            static ɵcmp = t.Xpm({
              type: e,
              selectors: [['ng-component']],
              decls: 2,
              vars: 2,
              template: function (o, a) {
                1 & o && (t.TgZ(0, 'p'), t._uU(1, 'Global footer'), t.qZA()),
                  2 & o && t.Udp('padding', 1, 'em');
              },
              encapsulation: 2,
            });
          }
          return e;
        })(),
        M = (() => {
          class e {
            static ɵfac = function (o) {
              return new (o || e)();
            };
            static ɵcmp = t.Xpm({
              type: e,
              selectors: [['ng-component']],
              decls: 2,
              vars: 2,
              template: function (o, a) {
                1 & o && (t.TgZ(0, 'p'), t._uU(1, 'Item footer'), t.qZA()),
                  2 & o && t.Udp('padding', 1, 'em');
              },
              encapsulation: 2,
            });
          }
          return e;
        })(),
        N = (() => {
          class e {
            items = [
              {
                title: 'Item Footer',
                markdownString: 'Uses footer set at item level',
                footer: M,
              },
              {
                title: 'Global footer',
                markdownString: 'Falls back to footer set at the top level',
              },
            ];
            footer = Z;
            static ɵfac = function (o) {
              return new (o || e)();
            };
            static ɵcmp = t.Xpm({
              type: e,
              selectors: [['markdown-navigator-demo-footer']],
              decls: 1,
              vars: 4,
              consts: [[3, 'items', 'footer']],
              template: function (o, a) {
                1 & o && t._UZ(0, 'td-markdown-navigator', 0),
                  2 & o &&
                    (t.Udp('height', 300, 'px'),
                    t.Q6J('items', a.items)('footer', a.footer));
              },
              dependencies: [i.L],
            });
          }
          return e;
        })();
      var _ = r(78645),
        U = r(59773),
        w = r(22939),
        c = r(32296);
      let S = (() => {
          class e {
            _markdownNavigatorWindowService;
            _snackBar;
            _destroy$ = new _.x();
            constructor(n, o) {
              (this._markdownNavigatorWindowService = n), (this._snackBar = o);
            }
            ngOnDestroy() {
              this._destroy$.next();
            }
            open() {
              this._markdownNavigatorWindowService
                .open({
                  items: [
                    {
                      markdownString:
                        '[Trigger button click event](#data={"planet":"mars"})',
                    },
                  ],
                })
                .componentInstance.buttonClicked.pipe((0, U.R)(this._destroy$))
                .subscribe((o) =>
                  this._snackBar.open(
                    `Button clicked: ${JSON.stringify(o)}`,
                    void 0,
                    { duration: 2e3 }
                  )
                );
            }
            static ɵfac = function (o) {
              return new (o || e)(t.Y36(l.RT), t.Y36(w.ux));
            };
            static ɵcmp = t.Xpm({
              type: e,
              selectors: [['markdown-navigator-demo-service-button-clicked']],
              decls: 2,
              vars: 0,
              consts: [['mat-raised-button', '', 3, 'click']],
              template: function (o, a) {
                1 & o &&
                  (t.TgZ(0, 'button', 0),
                  t.NdJ('click', function () {
                    return a.open();
                  }),
                  t._uU(1, 'Open'),
                  t.qZA());
              },
              dependencies: [c.lW],
            });
          }
          return e;
        })(),
        D = (() => {
          class e {
            items = [
              {
                title: 'Url children demo',
                childrenUrl: 'assets/demos-data/children_url_1.json',
              },
            ];
            static ɵfac = function (o) {
              return new (o || e)();
            };
            static ɵcmp = t.Xpm({
              type: e,
              selectors: [['markdown-navigator-demo-children-url']],
              decls: 1,
              vars: 1,
              consts: [[3, 'items']],
              template: function (o, a) {
                1 & o && t._UZ(0, 'td-markdown-navigator', 0),
                  2 & o && t.Q6J('items', a.items);
              },
              dependencies: [i.L],
            });
          }
          return e;
        })(),
        b = (() => {
          class e {
            _snackBar;
            items = [
              {
                markdownString:
                  '[Trigger button click event](#data={"planet":"mars"})',
              },
            ];
            constructor(n) {
              this._snackBar = n;
            }
            handleButtonClicked(n) {
              this._snackBar.open(
                `Button clicked: ${JSON.stringify(n)}`,
                void 0,
                { duration: 2e3 }
              );
            }
            static ɵfac = function (o) {
              return new (o || e)(t.Y36(w.ux));
            };
            static ɵcmp = t.Xpm({
              type: e,
              selectors: [['markdown-navigator-demo-button-clicked']],
              decls: 1,
              vars: 3,
              consts: [[3, 'items', 'buttonClicked']],
              template: function (o, a) {
                1 & o &&
                  (t.TgZ(0, 'td-markdown-navigator', 0),
                  t.NdJ('buttonClicked', function (m) {
                    return a.handleButtonClicked(m);
                  }),
                  t.qZA()),
                  2 & o &&
                    (t.Udp('height', 200, 'px'), t.Q6J('items', a.items));
              },
              dependencies: [i.L],
            });
          }
          return e;
        })();
      var y = r(84859);
      const J = () => ({ markdownString: 'Directive demo' }),
        x = (e) => [e],
        I = (e) => ({ items: e });
      let B = (() => {
          class e {
            static ɵfac = function (o) {
              return new (o || e)();
            };
            static ɵcmp = t.Xpm({
              type: e,
              selectors: [['markdown-navigator-demo-directive']],
              decls: 2,
              vars: 7,
              consts: [
                [
                  'mat-raised-button',
                  '',
                  3,
                  'tdMarkdownNavigatorWindow',
                  'disabled',
                ],
              ],
              template: function (o, a) {
                1 & o && (t.TgZ(0, 'button', 0), t._uU(1, ' Open\n'), t.qZA()),
                  2 & o &&
                    t.Q6J(
                      'tdMarkdownNavigatorWindow',
                      t.VKq(5, I, t.VKq(3, x, t.DdM(2, J)))
                    )('disabled', !1);
              },
              dependencies: [y.i, c.lW],
            });
          }
          return e;
        })(),
        W = (() => {
          class e {
            _markdownNavigatorWindowService;
            constructor(n) {
              this._markdownNavigatorWindowService = n;
            }
            open() {
              this._markdownNavigatorWindowService.open({
                items: [
                  {
                    title: 'Mars',
                    markdownString: '[Go to Mars](#data={"planet":"mars"})',
                  },
                  {
                    title: 'Jupiter',
                    markdownString:
                      '[Go to Jupiter](#data={"planet":"Jupiter"})',
                  },
                  {
                    title: 'Covalent Browser Support',
                    url: 'https://github.com/Teradata/covalent/blob/main/README.md',
                    anchor: 'browser-support',
                  },
                  {
                    id: 'child_id',
                    title: 'Children',
                    childrenUrl: 'assets/demos-data/children_url_1.json',
                  },
                ],
                dialogConfig: { width: '300px', height: '300px' },
                startAt: [{ id: 'child_id' }, { id: 'child-1' }],
              });
            }
            static ɵfac = function (o) {
              return new (o || e)(t.Y36(l.RT));
            };
            static ɵcmp = t.Xpm({
              type: e,
              selectors: [['markdown-navigator-demo-service']],
              decls: 2,
              vars: 0,
              consts: [['mat-raised-button', '', 3, 'click']],
              template: function (o, a) {
                1 & o &&
                  (t.TgZ(0, 'button', 0),
                  t.NdJ('click', function () {
                    return a.open();
                  }),
                  t._uU(1, 'Open'),
                  t.qZA());
              },
              dependencies: [c.lW],
            });
          }
          return e;
        })();
      var p = r(49488),
        s = r(56223);
      function F(e, g) {
        return e.title === g.title;
      }
      let O = (() => {
          class e {
            items = [
              {
                title: 'Item A',
                id: 'A',
                children: [
                  { title: 'Item A1', id: 'A1' },
                  { title: 'Item A2', id: 'A2' },
                  { title: 'Item A3', id: 'A3' },
                ],
              },
            ];
            startAt;
            compareWith;
            selection;
            handleChange() {
              switch (this.selection) {
                case 'reference':
                  (this.startAt = { id: 'A1' }), (this.compareWith = void 0);
                  break;
                case 'id':
                  (this.startAt = { id: 'A2' }), (this.compareWith = void 0);
                  break;
                case 'custom':
                  (this.startAt = { title: 'Item A3' }), (this.compareWith = F);
              }
            }
            static ɵfac = function (o) {
              return new (o || e)();
            };
            static ɵcmp = t.Xpm({
              type: e,
              selectors: [['markdown-navigator-demo-start-at']],
              decls: 10,
              vars: 6,
              consts: [
                [3, 'ngModel', 'change', 'ngModelChange'],
                ['value', 'reference'],
                ['value', 'id'],
                ['value', 'custom'],
                [3, 'items', 'startAt', 'compareWith'],
              ],
              template: function (o, a) {
                1 & o &&
                  (t.TgZ(0, 'span'),
                  t._uU(1, 'Start at descendant:'),
                  t.qZA(),
                  t.TgZ(2, 'mat-button-toggle-group', 0),
                  t.NdJ('change', function () {
                    return a.handleChange();
                  })('ngModelChange', function (m) {
                    return (a.selection = m);
                  }),
                  t.TgZ(3, 'mat-button-toggle', 1),
                  t._uU(4, 'A1'),
                  t.qZA(),
                  t.TgZ(5, 'mat-button-toggle', 2),
                  t._uU(6, 'A2'),
                  t.qZA(),
                  t.TgZ(7, 'mat-button-toggle', 3),
                  t._uU(8, 'A3'),
                  t.qZA()(),
                  t._UZ(9, 'td-markdown-navigator', 4)),
                  2 & o &&
                    (t.xp6(2),
                    t.Q6J('ngModel', a.selection),
                    t.xp6(7),
                    t.Udp('height', 200, 'px'),
                    t.Q6J('items', a.items)('startAt', a.startAt)(
                      'compareWith',
                      a.compareWith
                    ));
              },
              dependencies: [i.L, p.A9, p.Yi, s.JJ, s.On],
              styles: ['span[_ngcontent-%COMP%]{margin-right:1em}'],
            });
          }
          return e;
        })(),
        Q = (() => {
          class e {
            items = [
              {
                title: 'Covalent Browser Support',
                url: 'https://github.com/teradata/covalent/blob/main/README.md',
                anchor: 'browser-support',
              },
              {
                title: 'Angular Commit Message Format',
                url: 'https://github.com/angular/angular/blob/main/CONTRIBUTING.md',
                anchor: 'commit-message-format',
              },
            ];
            static ɵfac = function (o) {
              return new (o || e)();
            };
            static ɵcmp = t.Xpm({
              type: e,
              selectors: [['markdown-navigator-demo-anchor']],
              decls: 1,
              vars: 3,
              consts: [[3, 'items']],
              template: function (o, a) {
                1 & o && t._UZ(0, 'td-markdown-navigator', 0),
                  2 & o &&
                    (t.Udp('height', 300, 'px'), t.Q6J('items', a.items));
              },
              dependencies: [i.L],
            });
          }
          return e;
        })();
      var E = r(84535),
        k = r(82599);
      const X = () => ({ enabled: !1 }),
        j = (e) => ({ minimap: e });
      function h(e) {
        return JSON.stringify(e, void 0, 4);
      }
      const f = [
        { title: 'Item 1', markdownString: 'wow' },
        { title: 'Item 2', markdownString: 'wow' },
      ];
      let R = (() => {
          class e {
            _markdownNavigatorWindowService;
            input = h(f);
            items = f;
            windowShouldOpen = !1;
            constructor(n) {
              this._markdownNavigatorWindowService = n;
            }
            applyInput() {
              (this.items = JSON.parse(this.input)),
                (this.input = h(this.items)),
                this.openOrClose();
            }
            openOrClose() {
              this.windowShouldOpen
                ? this._markdownNavigatorWindowService.open({
                    items: this.items,
                  })
                : this._markdownNavigatorWindowService.close();
            }
            static ɵfac = function (o) {
              return new (o || e)(t.Y36(l.RT));
            };
            static ɵcmp = t.Xpm({
              type: e,
              selectors: [['markdown-navigator-demo-editor']],
              decls: 10,
              vars: 14,
              consts: [
                ['layout', 'row', 'layout-xs', 'column'],
                ['flex', '50', 'flex-xs', '100'],
                [
                  'flex',
                  '',
                  3,
                  'language',
                  'ngModel',
                  'editorOptions',
                  'ngModelChange',
                ],
                ['layout', 'row', 'layout-align', 'space-between center'],
                [3, 'ngModel', 'ngModelChange', 'change'],
                ['mat-raised-button', '', 1, 'text-upper', 3, 'click'],
                ['flex', '50', 'flex-xs', '100', 2, 'margin-left', '16px'],
                [3, 'items'],
              ],
              template: function (o, a) {
                1 & o &&
                  (t.TgZ(0, 'div', 0)(1, 'div', 1)(2, 'td-code-editor', 2),
                  t.NdJ('ngModelChange', function (m) {
                    return (a.input = m);
                  }),
                  t.qZA(),
                  t.TgZ(3, 'div', 3)(4, 'mat-slide-toggle', 4),
                  t.NdJ('ngModelChange', function (m) {
                    return (a.windowShouldOpen = m);
                  })('change', function () {
                    return a.openOrClose();
                  }),
                  t._uU(5, 'Open window'),
                  t.qZA(),
                  t.TgZ(6, 'button', 5),
                  t.NdJ('click', function () {
                    return a.applyInput();
                  }),
                  t._uU(7, ' Apply '),
                  t.qZA()()(),
                  t.TgZ(8, 'div', 6),
                  t._UZ(9, 'td-markdown-navigator', 7),
                  t.qZA()()),
                  2 & o &&
                    (t.xp6(2),
                    t.Udp('height', 300, 'px')('margin-bottom', 16, 'px'),
                    t.Q6J('language', 'json')('ngModel', a.input)(
                      'editorOptions',
                      t.VKq(12, j, t.DdM(11, X))
                    ),
                    t.xp6(2),
                    t.Q6J('ngModel', a.windowShouldOpen),
                    t.xp6(5),
                    t.Udp('height', 300, 'px'),
                    t.Q6J('items', a.items));
              },
              dependencies: [i.L, E.dD, c.lW, k.Rr, s.JJ, s.On],
            });
          }
          return e;
        })(),
        L = (() => {
          class e {
            startAt = [
              { id: 'url-children-demo' },
              { id: 'child-2' },
              { id: 'grandchild-2' },
            ];
            items = [
              {
                id: 'url-children-demo',
                title: 'Url children demo',
                childrenUrl: 'assets/demos-data/children_url_1.json',
              },
            ];
            static ɵfac = function (o) {
              return new (o || e)();
            };
            static ɵcmp = t.Xpm({
              type: e,
              selectors: [['markdown-navigator-demo-children-url-start-at']],
              decls: 1,
              vars: 2,
              consts: [[3, 'items', 'startAt']],
              template: function (o, a) {
                1 & o && t._UZ(0, 'td-markdown-navigator', 0),
                  2 & o && t.Q6J('items', a.items)('startAt', a.startAt);
              },
              dependencies: [i.L],
            });
          }
          return e;
        })();
      function q(e, g) {
        return e.title === g.title;
      }
      let G = (() => {
        class e {
          items = [
            {
              id: 'external_obj_store',
              title: 'External Object Store',
              childrenUrl:
                'https://www.teradata.com/product-help/UseCases/use_cases.json',
              startAtLink: { title: 'External Object Store' },
            },
            {
              id: 'url-children-demo',
              title: 'Url children demo',
              childrenUrl: '/assets/demos-data/children_url_3.json',
            },
          ];
          compareWith = q;
          static ɵfac = function (o) {
            return new (o || e)();
          };
          static ɵcmp = t.Xpm({
            type: e,
            selectors: [
              ['markdown-navigator-demo-start-at-onclick-children-url'],
            ],
            decls: 1,
            vars: 2,
            consts: [[3, 'items', 'compareWith']],
            template: function (o, a) {
              1 & o && t._UZ(0, 'td-markdown-navigator', 0),
                2 & o && t.Q6J('items', a.items)('compareWith', a.compareWith);
            },
            dependencies: [i.L],
          });
        }
        return e;
      })();
      const Y = [
        {
          path: '',
          component: (() => {
            class e {
              static ɵfac = function (o) {
                return new (o || e)();
              };
              static ɵcmp = t.Xpm({
                type: e,
                selectors: [['markdown-navigator-demo']],
                decls: 24,
                vars: 24,
                consts: [[3, 'demoId', 'demoTitle']],
                template: function (o, a) {
                  1 & o &&
                    (t.TgZ(0, 'demo-component', 0),
                    t._UZ(1, 'markdown-navigator-demo-basic'),
                    t.qZA(),
                    t.TgZ(2, 'demo-component', 0),
                    t._UZ(3, 'markdown-navigator-demo-children-url'),
                    t.qZA(),
                    t.TgZ(4, 'demo-component', 0),
                    t._UZ(5, 'markdown-navigator-demo-anchor'),
                    t.qZA(),
                    t.TgZ(6, 'demo-component', 0),
                    t._UZ(7, 'markdown-navigator-demo-start-at'),
                    t.qZA(),
                    t.TgZ(8, 'demo-component', 0),
                    t._UZ(9, 'markdown-navigator-demo-children-url-start-at'),
                    t.qZA(),
                    t.TgZ(10, 'demo-component', 0),
                    t._UZ(
                      11,
                      'markdown-navigator-demo-start-at-onclick-children-url'
                    ),
                    t.qZA(),
                    t.TgZ(12, 'demo-component', 0),
                    t._UZ(13, 'markdown-navigator-demo-footer'),
                    t.qZA(),
                    t.TgZ(14, 'demo-component', 0),
                    t._UZ(15, 'markdown-navigator-demo-button-clicked'),
                    t.qZA(),
                    t.TgZ(16, 'demo-component', 0),
                    t._UZ(17, 'markdown-navigator-demo-service'),
                    t.qZA(),
                    t.TgZ(18, 'demo-component', 0),
                    t._UZ(19, 'markdown-navigator-demo-service-button-clicked'),
                    t.qZA(),
                    t.TgZ(20, 'demo-component', 0),
                    t._UZ(21, 'markdown-navigator-demo-directive'),
                    t.qZA(),
                    t.TgZ(22, 'demo-component', 0),
                    t._UZ(23, 'markdown-navigator-demo-editor'),
                    t.qZA()),
                    2 & o &&
                      (t.Q6J('demoId', 'markdown-navigator-demo-basic')(
                        'demoTitle',
                        'Basic'
                      ),
                      t.xp6(2),
                      t.Q6J('demoId', 'markdown-navigator-demo-children-url')(
                        'demoTitle',
                        'Children url'
                      ),
                      t.xp6(2),
                      t.Q6J('demoId', 'markdown-navigator-demo-anchor')(
                        'demoTitle',
                        'Anchor jumping'
                      ),
                      t.xp6(2),
                      t.Q6J('demoId', 'markdown-navigator-demo-start-at')(
                        'demoTitle',
                        'Start at'
                      ),
                      t.xp6(2),
                      t.Q6J(
                        'demoId',
                        'markdown-navigator-demo-children-url-start-at'
                      )('demoTitle', 'Start at with children url'),
                      t.xp6(2),
                      t.Q6J(
                        'demoId',
                        'markdown-navigator-demo-start-at-onclick-children-url'
                      )('demoTitle', 'StartAt on nested url'),
                      t.xp6(2),
                      t.Q6J('demoId', 'markdown-navigator-demo-footer')(
                        'demoTitle',
                        'Footer'
                      ),
                      t.xp6(2),
                      t.Q6J('demoId', 'markdown-navigator-demo-button-clicked')(
                        'demoTitle',
                        'Button click events'
                      ),
                      t.xp6(2),
                      t.Q6J('demoId', 'markdown-navigator-demo-service')(
                        'demoTitle',
                        'Service'
                      ),
                      t.xp6(2),
                      t.Q6J(
                        'demoId',
                        'markdown-navigator-demo-service-button-clicked'
                      )('demoTitle', 'Button click events via service'),
                      t.xp6(2),
                      t.Q6J('demoId', 'markdown-navigator-demo-directive')(
                        'demoTitle',
                        'Directive'
                      ),
                      t.xp6(2),
                      t.Q6J('demoId', 'markdown-navigator-demo-editor')(
                        'demoTitle',
                        'Live editor'
                      ));
                },
                dependencies: [T.z, A.M, N, S, D, b, B, W, O, Q, R, L, G],
              });
            }
            return e;
          })(),
        },
      ];
      let $ = (() => {
        class e {
          static ɵfac = function (o) {
            return new (o || e)();
          };
          static ɵmod = t.oAB({ type: e });
          static ɵinj = t.cJS({ imports: [v.Bz.forChild(Y), v.Bz] });
        }
        return e;
      })();
      var z = r(96535),
        V = r(59038),
        K = r(44749),
        P = r(91694);
      let H = (() => {
        class e {
          static ɵfac = function (o) {
            return new (o || e)();
          };
          static ɵmod = t.oAB({ type: e });
          static ɵinj = t.cJS({
            imports: [
              z.l,
              $,
              K.R,
              l._m,
              P.T,
              C.ez,
              c.ot,
              V.ie,
              p.vV,
              k.rP,
              s.u5,
            ],
          });
        }
        return e;
      })();
    },
  },
]);
