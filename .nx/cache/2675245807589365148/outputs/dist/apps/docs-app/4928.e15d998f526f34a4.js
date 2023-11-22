'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [4928],
  {
    44928: (N, u, i) => {
      i.r(u), i.d(u, { LoadingDemoModule: () => J });
      var r = i(96814),
        l = i(24076),
        p = i(52787),
        e = i(19212),
        y = i(31791),
        m = i(35218),
        c = i(32296);
      function L(t, d) {
        1 & t &&
          (e.TgZ(0, 'div')(1, 'div', 3),
          e._uU(2, 'loading content...'),
          e.qZA()());
      }
      let T = (() => {
        class t {
          _loadingService;
          loadingMode = l.s3;
          loadingStrategy = l.I0;
          loadingType = l.Fq;
          overlayStarSyntax = !1;
          constructor(n) {
            this._loadingService = n;
          }
          toggleOverlayStarSyntax() {
            (this.overlayStarSyntax = !this.overlayStarSyntax),
              this.overlayStarSyntax
                ? this._loadingService.register('overlayStarSyntax')
                : this._loadingService.resolve('overlayStarSyntax');
          }
          static ɵfac = function (o) {
            return new (o || t)(e.Y36(l.bI));
          };
          static ɵcmp = e.Xpm({
            type: t,
            selectors: [['loading-demo-basic']],
            decls: 4,
            vars: 5,
            consts: [
              [
                4,
                'tdLoading',
                'tdLoadingMode',
                'tdLoadingType',
                'tdLoadingStrategy',
                'tdLoadingColor',
              ],
              ['layout', 'row'],
              [
                'mat-raised-button',
                '',
                'color',
                'primary',
                1,
                'text-upper',
                3,
                'click',
              ],
              [1, 'pad', 'text-center'],
            ],
            template: function (o, a) {
              1 & o &&
                (e.YNc(0, L, 3, 0, 'div', 0),
                e.TgZ(1, 'div', 1)(2, 'button', 2),
                e.NdJ('click', function () {
                  return a.toggleOverlayStarSyntax();
                }),
                e._uU(3, ' Toggle Loader '),
                e.qZA()()),
                2 & o &&
                  e.Q6J('tdLoading', 'overlayStarSyntax')(
                    'tdLoadingMode',
                    a.loadingMode.Indeterminate
                  )('tdLoadingType', a.loadingType.Circular)(
                    'tdLoadingStrategy',
                    a.loadingStrategy.Overlay
                  )('tdLoadingColor', 'accent');
            },
            dependencies: [m.O, c.lW],
          });
        }
        return t;
      })();
      function b(t, d) {
        1 & t && (e.TgZ(0, 'div', 3), e._uU(1, 'loading content...'), e.qZA());
      }
      let S = (() => {
        class t {
          loading = !1;
          toggle() {
            this.loading = !this.loading;
          }
          static ɵfac = function (o) {
            return new (o || t)();
          };
          static ɵcmp = e.Xpm({
            type: t,
            selectors: [['loading-demo-replace']],
            decls: 4,
            vars: 1,
            consts: [
              ['tdLoading', '', 3, 'tdLoadingUntil'],
              ['layout', 'row'],
              [
                'mat-raised-button',
                '',
                'color',
                'primary',
                1,
                'text-upper',
                3,
                'click',
              ],
              [1, 'pad', 'text-center'],
            ],
            template: function (o, a) {
              1 & o &&
                (e.YNc(0, b, 2, 0, 'ng-template', 0),
                e.TgZ(1, 'div', 1)(2, 'button', 2),
                e.NdJ('click', function () {
                  return a.toggle();
                }),
                e._uU(3, ' Toggle Loader '),
                e.qZA()()),
                2 & o && e.Q6J('tdLoadingUntil', !a.loading);
            },
            dependencies: [m.O, c.lW],
          });
        }
        return t;
      })();
      var v = i(65619);
      function Z(t, d) {
        if (
          (1 & t && (e.TgZ(0, 'div')(1, 'div', 3), e._uU(2), e.qZA()()), 2 & t)
        ) {
          const n = d.$implicit;
          e.xp6(2), e.hij(' ', n.name, ' ');
        }
      }
      let D = (() => {
          class t {
            _subject = new v.X({ name: 'I am here!' });
            observable$ = this._subject.asObservable();
            toggle() {
              (this._subject = new v.X(void 0)),
                (this.observable$ = this._subject.asObservable()),
                setTimeout(() => {
                  this._subject.next({ name: 'I am here!' });
                }, 1e3);
            }
            static ɵfac = function (o) {
              return new (o || t)();
            };
            static ɵcmp = e.Xpm({
              type: t,
              selectors: [['loading-demo-observable']],
              decls: 5,
              vars: 3,
              consts: [
                [4, 'tdLoading', 'tdLoadingUntil'],
                ['layout', 'row'],
                [
                  'mat-raised-button',
                  '',
                  'color',
                  'primary',
                  1,
                  'text-upper',
                  3,
                  'click',
                ],
                [1, 'pad', 'text-center'],
              ],
              template: function (o, a) {
                1 & o &&
                  (e.YNc(0, Z, 3, 1, 'div', 0),
                  e.ALo(1, 'async'),
                  e.TgZ(2, 'div', 1)(3, 'button', 2),
                  e.NdJ('click', function () {
                    return a.toggle();
                  }),
                  e._uU(4, ' Toggle Loader '),
                  e.qZA()()),
                  2 & o && e.Q6J('tdLoadingUntil', e.lcZ(1, 1, a.observable$));
              },
              dependencies: [m.O, c.lW, r.Ov],
            });
          }
          return t;
        })(),
        C = (() => {
          class t {
            _loadingService;
            constructor(n) {
              (this._loadingService = n),
                this._loadingService.create({
                  name: 'customFullscreenDemo',
                  mode: l.s3.Indeterminate,
                  type: l.Fq.Linear,
                  color: 'accent',
                });
            }
            toggleDefaultFullscreenDemo() {
              this._loadingService.register(),
                setTimeout(() => this._loadingService.resolve(), 1500);
            }
            toggleCustomFullscreenDemo() {
              this._loadingService.register('customFullscreenDemo'),
                setTimeout(
                  () => this._loadingService.resolve('customFullscreenDemo'),
                  1500
                );
            }
            static ɵfac = function (o) {
              return new (o || t)(e.Y36(l.bI));
            };
            static ɵcmp = e.Xpm({
              type: t,
              selectors: [['loading-demo-fullscreen']],
              decls: 4,
              vars: 0,
              consts: [
                [
                  'mat-raised-button',
                  '',
                  'color',
                  'primary',
                  1,
                  'text-upper',
                  3,
                  'click',
                ],
              ],
              template: function (o, a) {
                1 & o &&
                  (e.TgZ(0, 'button', 0),
                  e.NdJ('click', function () {
                    return a.toggleDefaultFullscreenDemo();
                  }),
                  e._uU(1, ' Toggle default fullscreen Loader\n'),
                  e.qZA(),
                  e.TgZ(2, 'button', 0),
                  e.NdJ('click', function () {
                    return a.toggleCustomFullscreenDemo();
                  }),
                  e._uU(3, ' Toggle custom Fullscreen Loader\n'),
                  e.qZA());
              },
              dependencies: [c.lW],
              styles: ['button[_ngcontent-%COMP%]{margin-right:1em}'],
            });
          }
          return t;
        })();
      var f = i(30617),
        s = i(59038),
        _ = i(26385);
      function h(t, d) {
        1 & t &&
          (e.TgZ(0, 'mat-icon', 1),
          e._uU(1, 'settings_backup_restore'),
          e.qZA());
      }
      function x(t, d) {
        1 & t && e._UZ(0, 'mat-divider');
      }
      function F(t, d) {
        if (
          (1 & t &&
            (e.TgZ(0, 'mat-list-item')(1, 'div', 1),
            e.YNc(2, h, 2, 0, 'ng-template', 2),
            e.qZA(),
            e.TgZ(3, 'h3', 3),
            e._uU(4),
            e.qZA()(),
            e.YNc(5, x, 1, 0, 'mat-divider', 4)),
          2 & t)
        ) {
          const n = d.$implicit,
            o = d.last,
            a = e.oxw();
          e.xp6(2),
            e.Q6J('tdLoadingUntil', !n.value)(
              'tdLoadingStrategy',
              a.loadingStrategy.Overlay
            ),
            e.xp6(2),
            e.Oqu(n.label),
            e.xp6(1),
            e.Q6J('ngIf', !o);
        }
      }
      let U = (() => {
        class t {
          loadingMode = l.s3;
          loadingStrategy = l.I0;
          loadingType = l.Fq;
          itemList = [
            { label: 'Light', value: !0 },
            { label: 'Console', value: !1 },
            { label: 'T.V.', value: !0 },
          ];
          static ɵfac = function (o) {
            return new (o || t)();
          };
          static ɵcmp = e.Xpm({
            type: t,
            selectors: [['loading-demo-icon']],
            decls: 2,
            vars: 1,
            consts: [
              ['ngFor', '', 3, 'ngForOf'],
              ['matListItemAvatar', ''],
              ['tdLoading', '', 3, 'tdLoadingUntil', 'tdLoadingStrategy'],
              ['matListItemTitle', ''],
              [4, 'ngIf'],
            ],
            template: function (o, a) {
              1 & o &&
                (e.TgZ(0, 'mat-list'),
                e.YNc(1, F, 6, 4, 'ng-template', 0),
                e.qZA()),
                2 & o && (e.xp6(1), e.Q6J('ngForOf', a.itemList));
            },
            dependencies: [m.O, r.sg, r.O5, f.Hw, s.i$, s.Tg, s.D1, _.d, s.sL],
          });
        }
        return t;
      })();
      const I = [
        {
          path: '',
          component: (() => {
            class t {
              static ɵfac = function (o) {
                return new (o || t)();
              };
              static ɵcmp = e.Xpm({
                type: t,
                selectors: [['loading-demo']],
                decls: 10,
                vars: 10,
                consts: [[3, 'demoId', 'demoTitle']],
                template: function (o, a) {
                  1 & o &&
                    (e.TgZ(0, 'demo-component', 0),
                    e._UZ(1, 'loading-demo-basic'),
                    e.qZA(),
                    e.TgZ(2, 'demo-component', 0),
                    e._UZ(3, 'loading-demo-replace'),
                    e.qZA(),
                    e.TgZ(4, 'demo-component', 0),
                    e._UZ(5, 'loading-demo-observable'),
                    e.qZA(),
                    e.TgZ(6, 'demo-component', 0),
                    e._UZ(7, 'loading-demo-fullscreen'),
                    e.qZA(),
                    e.TgZ(8, 'demo-component', 0),
                    e._UZ(9, 'loading-demo-icon'),
                    e.qZA()),
                    2 & o &&
                      (e.Q6J('demoId', 'loading-demo-basic')(
                        'demoTitle',
                        'Basic'
                      ),
                      e.xp6(2),
                      e.Q6J('demoId', 'loading-demo-replace')(
                        'demoTitle',
                        'Template Until Syntax'
                      ),
                      e.xp6(2),
                      e.Q6J('demoId', 'loading-demo-observable')(
                        'demoTitle',
                        'Until Syntax Using Observables'
                      ),
                      e.xp6(2),
                      e.Q6J('demoId', 'loading-demo-fullscreen')(
                        'demoTitle',
                        'Fullscreen'
                      ),
                      e.xp6(2),
                      e.Q6J('demoId', 'loading-demo-icon')(
                        'demoTitle',
                        'Icon'
                      ));
                },
                dependencies: [y.z, T, S, D, C, U],
              });
            }
            return t;
          })(),
        },
      ];
      let A = (() => {
        class t {
          static ɵfac = function (o) {
            return new (o || t)();
          };
          static ɵmod = e.oAB({ type: t });
          static ɵinj = e.cJS({ imports: [p.Bz.forChild(I), p.Bz] });
        }
        return t;
      })();
      var O = i(96535);
      let J = (() => {
        class t {
          static ɵfac = function (o) {
            return new (o || t)();
          };
          static ɵmod = e.oAB({ type: t });
          static ɵinj = e.cJS({
            imports: [O.l, A, l._, r.ez, c.ot, f.Ps, s.ie],
          });
        }
        return t;
      })();
    },
  },
]);
