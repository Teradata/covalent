'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [7575],
  {
    7575: (S, m, n) => {
      n.r(m), n.d(m, { DialogsDemoModule: () => U });
      var r = n(96814),
        i = n(32296),
        c = n(30617),
        g = n(18035),
        p = n(52787),
        e = n(19212),
        u = n(62041),
        D = n(31791);
      let h = (() => {
          class a {
            static ɵfac = function (o) {
              return new (o || a)();
            };
            static ɵcmp = e.Xpm({
              type: a,
              selectors: [['draggable-dialog']],
              decls: 7,
              vars: 0,
              consts: [['mat-icon-button', '', 1, 'drag-handle']],
              template: function (o, l) {
                1 & o &&
                  (e.TgZ(0, 'h2'),
                  e._uU(1, 'Draggable dialog'),
                  e.qZA(),
                  e.TgZ(2, 'p'),
                  e._uU(3, 'Draggable via the drag handle'),
                  e.qZA(),
                  e.TgZ(4, 'button', 0)(5, 'mat-icon'),
                  e._uU(6, 'drag_handle'),
                  e.qZA()());
              },
              dependencies: [i.RK, c.Hw],
              encapsulation: 2,
            });
          }
          return a;
        })(),
        f = (() => {
          class a {
            _dialogService;
            constructor(t) {
              this._dialogService = t;
            }
            openDraggableDialog() {
              this._dialogService.openDraggable({
                component: h,
                dragHandleSelectors: ['.drag-handle'],
                draggableClass: 'custom-class',
              });
            }
            static ɵfac = function (o) {
              return new (o || a)(e.Y36(g.s$));
            };
            static ɵcmp = e.Xpm({
              type: a,
              selectors: [['dialogs-demo-draggable']],
              decls: 2,
              vars: 0,
              consts: [
                [
                  'mat-button',
                  '',
                  'color',
                  'accent',
                  1,
                  'text-upper',
                  'push-right-sm',
                  3,
                  'click',
                ],
              ],
              template: function (o, l) {
                1 & o &&
                  (e.TgZ(0, 'button', 0),
                  e.NdJ('click', function () {
                    return l.openDraggableDialog();
                  }),
                  e._uU(1, ' Open Draggable Dialog\n'),
                  e.qZA());
              },
              dependencies: [i.lW],
            });
          }
          return a;
        })();
      var b = n(78645),
        d = n(59773);
      let Z = (() => {
          class a {
            static ɵfac = function (o) {
              return new (o || a)();
            };
            static ɵcmp = e.Xpm({
              type: a,
              selectors: [['draggable-resizable-dialog']],
              decls: 9,
              vars: 0,
              consts: [['mat-icon-button', '', 1, 'drag-handle']],
              template: function (o, l) {
                1 & o &&
                  (e.TgZ(0, 'h2'),
                  e._uU(1, 'Draggable resizable dialog'),
                  e.qZA(),
                  e.TgZ(2, 'p'),
                  e._uU(3, 'Draggable via the drag handle'),
                  e.qZA(),
                  e.TgZ(4, 'button', 0)(5, 'mat-icon'),
                  e._uU(6, 'drag_handle'),
                  e.qZA()(),
                  e.TgZ(7, 'p'),
                  e._uU(8, 'Resizable via the corners'),
                  e.qZA());
              },
              dependencies: [i.RK, c.Hw],
              encapsulation: 2,
            });
          }
          return a;
        })(),
        z = (() => {
          class a {
            _dialogService;
            _document;
            _renderer2;
            _destroy$ = new b.x();
            constructor(t, o, l) {
              (this._dialogService = t),
                (this._document = o),
                (this._renderer2 = l);
            }
            ngOnDestroy() {
              this._destroy$.next();
            }
            openDraggableResizableDialog() {
              const { matDialogRef: t, dragRefSubject: o } =
                this._dialogService.openDraggable({
                  component: Z,
                  dragHandleSelectors: ['.drag-handle'],
                });
              let l;
              o.pipe((0, d.R)(this._destroy$)).subscribe((s) => {
                l = new g.Mw(this._document, this._renderer2, t, s);
              }),
                t.afterClosed().subscribe(() => l.detach());
            }
            static ɵfac = function (o) {
              return new (o || a)(e.Y36(g.s$), e.Y36(r.K0), e.Y36(e.Qsj));
            };
            static ɵcmp = e.Xpm({
              type: a,
              selectors: [['dialogs-demo-draggable-resizable']],
              decls: 2,
              vars: 0,
              consts: [
                [
                  'mat-button',
                  '',
                  'color',
                  'accent',
                  1,
                  'text-upper',
                  'push-right-sm',
                  3,
                  'click',
                ],
              ],
              template: function (o, l) {
                1 & o &&
                  (e.TgZ(0, 'button', 0),
                  e.NdJ('click', function () {
                    return l.openDraggableResizableDialog();
                  }),
                  e._uU(1, ' Open Draggable Resizable Dialog\n'),
                  e.qZA());
              },
              dependencies: [i.lW],
            });
          }
          return a;
        })();
      var v = n(73545);
      let w = (() => {
          class a {
            closed = new e.vpe();
            static ɵfac = function (o) {
              return new (o || a)();
            };
            static ɵcmp = e.Xpm({
              type: a,
              selectors: [['draggable-resizable-window-dialog']],
              outputs: { closed: 'closed' },
              decls: 8,
              vars: 5,
              consts: [[3, 'title', 'toolbarColor', 'closeLabel', 'closed']],
              template: function (o, l) {
                1 & o &&
                  (e.TgZ(0, 'td-window-dialog', 0),
                  e.NdJ('closed', function () {
                    return l.closed.emit();
                  }),
                  e.TgZ(1, 'div')(2, 'p'),
                  e._uU(3, 'Comes with a handy toolbar'),
                  e.qZA(),
                  e.TgZ(4, 'p'),
                  e._uU(5, 'Draggable via the toolbar'),
                  e.qZA(),
                  e.TgZ(6, 'p'),
                  e._uU(7, 'Resizable via the corners'),
                  e.qZA()()()),
                  2 & o &&
                    (e.Q6J('title', 'Draggable resizable window dialog')(
                      'toolbarColor',
                      'accent'
                    )('closeLabel', 'Close'),
                    e.xp6(1),
                    e.Udp('padding', 1, 'em'));
              },
              dependencies: [v.y],
              encapsulation: 2,
            });
          }
          return a;
        })(),
        T = (() => {
          class a {
            _dialogService;
            _document;
            _renderer2;
            _destroy$ = new b.x();
            constructor(t, o, l) {
              (this._dialogService = t),
                (this._document = o),
                (this._renderer2 = l);
            }
            ngOnDestroy() {
              this._destroy$.next();
            }
            openDraggableResizableWindowDialog() {
              const { matDialogRef: t, dragRefSubject: o } =
                this._dialogService.openDraggable({
                  component: w,
                  dragHandleSelectors: ['mat-toolbar'],
                  config: { panelClass: ['td-window-dialog'] },
                });
              let l;
              t.componentInstance.closed
                .pipe((0, d.R)(this._destroy$))
                .subscribe(() => t.close()),
                o.pipe((0, d.R)(this._destroy$)).subscribe((s) => {
                  l = new g.Mw(this._document, this._renderer2, t, s);
                }),
                t.afterClosed().subscribe(() => l.detach());
            }
            static ɵfac = function (o) {
              return new (o || a)(e.Y36(g.s$), e.Y36(r.K0), e.Y36(e.Qsj));
            };
            static ɵcmp = e.Xpm({
              type: a,
              selectors: [['dialogs-demo-draggable-resizable-window']],
              decls: 2,
              vars: 0,
              consts: [
                [
                  'mat-button',
                  '',
                  'color',
                  'accent',
                  1,
                  'text-upper',
                  'push-right-sm',
                  3,
                  'click',
                ],
              ],
              template: function (o, l) {
                1 & o &&
                  (e.TgZ(0, 'button', 0),
                  e.NdJ('click', function () {
                    return l.openDraggableResizableWindowDialog();
                  }),
                  e._uU(1, ' Open Draggable Resizable Window Dialog\n'),
                  e.qZA());
              },
              dependencies: [i.lW],
            });
          }
          return a;
        })();
      const R = [
        {
          path: '',
          component: (() => {
            class a {
              static ɵfac = function (o) {
                return new (o || a)();
              };
              static ɵcmp = e.Xpm({
                type: a,
                selectors: [['dialogs-demo']],
                decls: 8,
                vars: 8,
                consts: [[3, 'demoId', 'demoTitle']],
                template: function (o, l) {
                  1 & o &&
                    (e.TgZ(0, 'demo-component', 0),
                    e._UZ(1, 'dialogs-demo-basic'),
                    e.qZA(),
                    e.TgZ(2, 'demo-component', 0),
                    e._UZ(3, 'dialogs-demo-draggable'),
                    e.qZA(),
                    e.TgZ(4, 'demo-component', 0),
                    e._UZ(5, 'dialogs-demo-draggable-resizable'),
                    e.qZA(),
                    e.TgZ(6, 'demo-component', 0),
                    e._UZ(7, 'dialogs-demo-draggable-resizable-window'),
                    e.qZA()),
                    2 & o &&
                      (e.Q6J('demoId', 'dialogs-demo-basic')(
                        'demoTitle',
                        'Basic'
                      ),
                      e.xp6(2),
                      e.Q6J('demoId', 'dialogs-demo-draggable')(
                        'demoTitle',
                        'Draggable'
                      ),
                      e.xp6(2),
                      e.Q6J('demoId', 'dialogs-demo-draggable-resizable')(
                        'demoTitle',
                        'Draggable And Resizable'
                      ),
                      e.xp6(2),
                      e.Q6J(
                        'demoId',
                        'dialogs-demo-draggable-resizable-window'
                      )('demoTitle', 'Draggable Resizable Window Dialog'));
                },
                dependencies: [u.N, D.z, f, z, T],
              });
            }
            return a;
          })(),
        },
      ];
      let C = (() => {
        class a {
          static ɵfac = function (o) {
            return new (o || a)();
          };
          static ɵmod = e.oAB({ type: a });
          static ɵinj = e.cJS({ imports: [p.Bz.forChild(R), p.Bz] });
        }
        return a;
      })();
      var y = n(96535),
        A = n(18570);
      let U = (() => {
        class a {
          static ɵfac = function (o) {
            return new (o || a)();
          };
          static ɵmod = e.oAB({ type: a });
          static ɵinj = e.cJS({
            imports: [A.Z, y.l, C, g.gk, r.ez, i.ot, c.Ps],
          });
        }
        return a;
      })();
    },
  },
]);
