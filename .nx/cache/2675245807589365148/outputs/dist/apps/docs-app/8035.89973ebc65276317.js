'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [8035],
  {
    18035: (Jt, ot, g) => {
      g.d(ot, { gk: () => Le, Mw: () => Me, s$: () => Qt });
      var p = g(96814),
        C = g(56223),
        S = g(19347),
        J = g(2032),
        A = g(32296),
        n = g(19212);
      function rt(o, i) {
        1 & o && (n.TgZ(0, 'div', 3), n.Hsn(1), n.qZA());
      }
      function B(o, i) {
        1 & o && (n.TgZ(0, 'mat-dialog-content', 4), n.Hsn(1, 1), n.qZA());
      }
      function jt(o, i) {
        1 & o &&
          (n.TgZ(0, 'mat-dialog-actions', 5),
          n._UZ(1, 'span', 6),
          n.Hsn(2, 2),
          n.qZA());
      }
      const at = [
          [['', 'tdDialogTitle', '']],
          [['', 'tdDialogContent', '']],
          [['', 'tdDialogActions', '']],
        ],
        F = ['[tdDialogTitle]', '[tdDialogContent]', '[tdDialogActions]'];
      let b = (() => {
          class o {
            static ɵfac = function (e) {
              return new (e || o)();
            };
            static ɵdir = n.lG2({
              type: o,
              selectors: [['', 'tdDialogTitle', '']],
            });
          }
          return o;
        })(),
        R = (() => {
          class o {
            static ɵfac = function (e) {
              return new (e || o)();
            };
            static ɵdir = n.lG2({
              type: o,
              selectors: [['', 'tdDialogContent', '']],
            });
          }
          return o;
        })(),
        G = (() => {
          class o {
            static ɵfac = function (e) {
              return new (e || o)();
            };
            static ɵdir = n.lG2({
              type: o,
              selectors: [['', 'tdDialogActions', '']],
            });
          }
          return o;
        })(),
        j = (() => {
          class o {
            dialogTitle;
            dialogContent;
            dialogActions;
            ngAfterContentInit() {
              if (this.dialogTitle.length > 1)
                throw new Error(
                  'Duplicate td-dialog-title component at in td-dialog.'
                );
              if (this.dialogContent.length > 1)
                throw new Error(
                  'Duplicate td-dialog-content component at in td-dialog.'
                );
              if (this.dialogActions.length > 1)
                throw new Error(
                  'Duplicate td-dialog-actions component at in td-dialog.'
                );
            }
            static ɵfac = function (e) {
              return new (e || o)();
            };
            static ɵcmp = n.Xpm({
              type: o,
              selectors: [['td-dialog']],
              contentQueries: function (e, s, r) {
                if (
                  (1 & e && (n.Suo(r, b, 5), n.Suo(r, R, 5), n.Suo(r, G, 5)),
                  2 & e)
                ) {
                  let a;
                  n.iGM((a = n.CRH())) && (s.dialogTitle = a),
                    n.iGM((a = n.CRH())) && (s.dialogContent = a),
                    n.iGM((a = n.CRH())) && (s.dialogActions = a);
                }
              },
              ngContentSelectors: F,
              decls: 3,
              vars: 3,
              consts: [
                ['mat-dialog-title', '', 4, 'ngIf'],
                ['class', 'td-dialog-content', 4, 'ngIf'],
                ['class', 'td-dialog-actions', 4, 'ngIf'],
                ['mat-dialog-title', ''],
                [1, 'td-dialog-content'],
                [1, 'td-dialog-actions'],
                [1, 'td-dialog-spacer'],
              ],
              template: function (e, s) {
                1 & e &&
                  (n.F$t(at),
                  n.YNc(0, rt, 2, 0, 'div', 0)(
                    1,
                    B,
                    2,
                    0,
                    'mat-dialog-content',
                    1
                  )(2, jt, 3, 0, 'mat-dialog-actions', 2)),
                  2 & e &&
                    (n.Q6J('ngIf', s.dialogTitle.length > 0),
                    n.xp6(1),
                    n.Q6J('ngIf', s.dialogContent.length > 0),
                    n.xp6(1),
                    n.Q6J('ngIf', s.dialogActions.length > 0));
              },
              dependencies: [p.O5, S.uh, S.xY, S.H8],
              styles: [
                '.td-dialog-actions[_ngcontent-%COMP%]{flex-direction:row;box-sizing:border-box;display:flex}.td-dialog-actions[_ngcontent-%COMP%]   .td-dialog-spacer[_ngcontent-%COMP%]{flex:1}.td-dialog-actions[_ngcontent-%COMP%]     button{text-transform:uppercase;margin-left:8px;padding-left:8px;padding-right:8px;min-width:64px}[dir=rtl][_ngcontent-%COMP%]   .td-dialog-actions[_ngcontent-%COMP%]     button{margin-right:8px;margin-left:inherit}',
              ],
            });
          }
          return o;
        })();
      function qt(o, i) {
        if ((1 & o && (n.ynx(0, 5), n._uU(1), n.BQk()), 2 & o)) {
          const t = n.oxw();
          n.xp6(1), n.Oqu(t.title);
        }
      }
      let lt = (() => {
        class o {
          _dialogRef;
          title;
          message;
          closeButton = 'CLOSE';
          constructor(t) {
            this._dialogRef = t;
          }
          close() {
            this._dialogRef.close();
          }
          static ɵfac = function (e) {
            return new (e || o)(n.Y36(S.so));
          };
          static ɵcmp = n.Xpm({
            type: o,
            selectors: [['td-alert-dialog']],
            decls: 8,
            vars: 3,
            consts: [
              ['tdDialogTitle', '', 4, 'ngIf'],
              ['tdDialogContent', ''],
              [1, 'td-dialog-message'],
              ['tdDialogActions', ''],
              ['mat-button', '', 'color', 'accent', 3, 'click'],
              ['tdDialogTitle', ''],
            ],
            template: function (e, s) {
              1 & e &&
                (n.TgZ(0, 'td-dialog'),
                n.YNc(1, qt, 2, 1, 'ng-container', 0),
                n.ynx(2, 1),
                n.TgZ(3, 'span', 2),
                n._uU(4),
                n.qZA(),
                n.BQk(),
                n.ynx(5, 3),
                n.TgZ(6, 'button', 4),
                n.NdJ('click', function () {
                  return s.close();
                }),
                n._uU(7),
                n.qZA(),
                n.BQk(),
                n.qZA()),
                2 & e &&
                  (n.xp6(1),
                  n.Q6J('ngIf', s.title),
                  n.xp6(3),
                  n.Oqu(s.message),
                  n.xp6(3),
                  n.hij(' ', s.closeButton, ' '));
            },
            dependencies: [p.O5, A.lW, j, b, G, R],
            styles: [
              '.td-dialog-message[_ngcontent-%COMP%]{word-break:break-word}',
            ],
          });
        }
        return o;
      })();
      function Xt(o, i) {
        if ((1 & o && (n.ynx(0, 8), n._uU(1), n.BQk()), 2 & o)) {
          const t = n.oxw();
          n.xp6(1), n.Oqu(t.title);
        }
      }
      let ct = (() => {
        class o {
          _dialogRef;
          title;
          message;
          cancelButton = 'CANCEL';
          acceptButton = 'ACCEPT';
          isDestructive = !1;
          constructor(t) {
            this._dialogRef = t;
          }
          cancel() {
            this._dialogRef.close(!1);
          }
          accept() {
            this._dialogRef.close(!0);
          }
          static ɵfac = function (e) {
            return new (e || o)(n.Y36(S.so));
          };
          static ɵcmp = n.Xpm({
            type: o,
            selectors: [['td-confirm-dialog']],
            decls: 12,
            vars: 5,
            consts: [
              ['tdDialogTitle', '', 4, 'ngIf'],
              ['tdDialogContent', ''],
              [1, 'td-dialog-message'],
              ['tdDialogActions', ''],
              ['mat-button', '', 3, 'keydown.arrowright', 'click'],
              ['closeBtn', ''],
              ['mat-button', '', 3, 'color', 'keydown.arrowleft', 'click'],
              ['acceptBtn', ''],
              ['tdDialogTitle', ''],
            ],
            template: function (e, s) {
              if (1 & e) {
                const r = n.EpF();
                n.TgZ(0, 'td-dialog'),
                  n.YNc(1, Xt, 2, 1, 'ng-container', 0),
                  n.ynx(2, 1),
                  n.TgZ(3, 'span', 2),
                  n._uU(4),
                  n.qZA(),
                  n.BQk(),
                  n.ynx(5, 3),
                  n.TgZ(6, 'button', 4, 5),
                  n.NdJ('keydown.arrowright', function () {
                    n.CHM(r);
                    const l = n.MAs(10);
                    return n.KtG(l.focus());
                  })('click', function () {
                    return s.cancel();
                  }),
                  n._uU(8),
                  n.qZA(),
                  n.TgZ(9, 'button', 6, 7),
                  n.NdJ('keydown.arrowleft', function () {
                    n.CHM(r);
                    const l = n.MAs(7);
                    return n.KtG(l.focus());
                  })('click', function () {
                    return s.accept();
                  }),
                  n._uU(11),
                  n.qZA(),
                  n.BQk(),
                  n.qZA();
              }
              2 & e &&
                (n.xp6(1),
                n.Q6J('ngIf', s.title),
                n.xp6(3),
                n.Oqu(s.message),
                n.xp6(4),
                n.hij(' ', s.cancelButton, ' '),
                n.xp6(1),
                n.Q6J('color', s.isDestructive ? 'warn' : 'accent'),
                n.xp6(2),
                n.hij(' ', s.acceptButton, ' '));
            },
            dependencies: [p.O5, A.lW, j, b, G, R],
            styles: [
              '.td-dialog-message[_ngcontent-%COMP%]{word-break:break-word}',
            ],
          });
        }
        return o;
      })();
      var St = g(36028),
        _ = g(78645),
        L = g(92438),
        M = g(59773),
        te = g(64170);
      const ee = ['input'],
        ie = ['closeBtn'],
        se = ['acceptBtn'];
      function ne(o, i) {
        if ((1 & o && (n.ynx(0, 14), n._uU(1), n.BQk()), 2 & o)) {
          const t = n.oxw();
          n.xp6(1), n.Oqu(t.title);
        }
      }
      let ht = (() => {
        class o {
          _ngZone;
          _dialogRef;
          title;
          message;
          value;
          cancelButton = 'CANCEL';
          acceptButton = 'ACCEPT';
          _input;
          _closeBtn;
          _acceptBtn;
          _destroy$ = new _.x();
          constructor(t, e) {
            (this._ngZone = t), (this._dialogRef = e);
          }
          ngAfterViewInit() {
            this._ngZone.runOutsideAngular(() => {
              requestAnimationFrame(() => this._input.nativeElement.focus()),
                (0, L.R)(this._input.nativeElement, 'focus')
                  .pipe((0, M.R)(this._destroy$))
                  .subscribe(() => {
                    this._input.nativeElement.select();
                  }),
                (0, L.R)(this._closeBtn.nativeElement, 'keydown')
                  .pipe((0, M.R)(this._destroy$))
                  .subscribe((t) => {
                    t.keyCode === St.SV &&
                      this._acceptBtn.nativeElement.focus();
                  }),
                (0, L.R)(this._acceptBtn.nativeElement, 'keydown')
                  .pipe((0, M.R)(this._destroy$))
                  .subscribe((t) => {
                    t.keyCode === St.oh && this._closeBtn.nativeElement.focus();
                  });
            });
          }
          ngOnDestroy() {
            this._destroy$.next();
          }
          cancel() {
            this._dialogRef.close();
          }
          accept() {
            this._dialogRef.close(this.value);
          }
          static ɵfac = function (e) {
            return new (e || o)(n.Y36(n.R0b), n.Y36(S.so));
          };
          static ɵcmp = n.Xpm({
            type: o,
            selectors: [['td-prompt-dialog']],
            viewQuery: function (e, s) {
              if (
                (1 & e && (n.Gf(ee, 7), n.Gf(ie, 7, n.SBq), n.Gf(se, 7, n.SBq)),
                2 & e)
              ) {
                let r;
                n.iGM((r = n.CRH())) && (s._input = r.first),
                  n.iGM((r = n.CRH())) && (s._closeBtn = r.first),
                  n.iGM((r = n.CRH())) && (s._acceptBtn = r.first);
              }
            },
            decls: 18,
            vars: 6,
            consts: [
              ['tdDialogTitle', '', 4, 'ngIf'],
              ['tdDialogContent', ''],
              [1, 'td-dialog-message'],
              ['novalidate', ''],
              ['form', 'ngForm'],
              [1, 'td-dialog-input-wrapper'],
              [1, 'td-dialog-input'],
              [
                'matInput',
                '',
                'name',
                'value',
                'required',
                '',
                3,
                'ngModel',
                'keydown.enter',
                'ngModelChange',
              ],
              ['input', ''],
              ['tdDialogActions', ''],
              ['mat-button', '', 3, 'click'],
              ['closeBtn', ''],
              ['mat-button', '', 'color', 'accent', 3, 'disabled', 'click'],
              ['acceptBtn', ''],
              ['tdDialogTitle', ''],
            ],
            template: function (e, s) {
              if (1 & e) {
                const r = n.EpF();
                n.TgZ(0, 'td-dialog'),
                  n.YNc(1, ne, 2, 1, 'ng-container', 0),
                  n.ynx(2, 1),
                  n.TgZ(3, 'span', 2),
                  n._uU(4),
                  n.qZA(),
                  n.TgZ(5, 'form', 3, 4)(7, 'div', 5)(8, 'mat-form-field', 6)(
                    9,
                    'input',
                    7,
                    8
                  ),
                  n.NdJ('keydown.enter', function (l) {
                    n.CHM(r);
                    const c = n.MAs(6);
                    return l.preventDefault(), n.KtG(c.valid && s.accept());
                  })('ngModelChange', function (l) {
                    return (s.value = l);
                  }),
                  n.qZA()()()(),
                  n.BQk(),
                  n.ynx(11, 9),
                  n.TgZ(12, 'button', 10, 11),
                  n.NdJ('click', function () {
                    return s.cancel();
                  }),
                  n._uU(14),
                  n.qZA(),
                  n.TgZ(15, 'button', 12, 13),
                  n.NdJ('click', function () {
                    return s.accept();
                  }),
                  n._uU(17),
                  n.qZA(),
                  n.BQk(),
                  n.qZA();
              }
              if (2 & e) {
                const r = n.MAs(6);
                n.xp6(1),
                  n.Q6J('ngIf', s.title),
                  n.xp6(3),
                  n.Oqu(s.message),
                  n.xp6(5),
                  n.Q6J('ngModel', s.value),
                  n.xp6(5),
                  n.Oqu(s.cancelButton),
                  n.xp6(1),
                  n.Q6J('disabled', !r.valid),
                  n.xp6(2),
                  n.hij(' ', s.acceptButton, ' ');
              }
            },
            dependencies: [
              C._Y,
              C.Fj,
              C.JJ,
              C.JL,
              C.Q7,
              C.On,
              C.F,
              p.O5,
              J.Nt,
              te.KE,
              A.lW,
              j,
              b,
              G,
              R,
            ],
            styles: [
              '.td-dialog-input-wrapper[_ngcontent-%COMP%]{flex-direction:row;box-sizing:border-box;display:flex}.td-dialog-input-wrapper[_ngcontent-%COMP%]   .td-dialog-input[_ngcontent-%COMP%]{flex:1;box-sizing:border-box}.td-dialog-message[_ngcontent-%COMP%]{word-break:break-word}',
            ],
          });
        }
        return o;
      })();
      var Pt = g(9473),
        T = g(62831),
        f = g(42495),
        Ct = g(4300),
        N = g(47394),
        oe = g(16321),
        re = g(74825),
        le = g(80927),
        Rt = g(65592),
        q = g(63019);
      function gt(o, i, t) {
        for (let e in i)
          if (i.hasOwnProperty(e)) {
            const s = i[e];
            s
              ? o.setProperty(e, s, t?.has(e) ? 'important' : '')
              : o.removeProperty(e);
          }
        return o;
      }
      function H(o, i) {
        const t = i ? '' : 'none';
        gt(o.style, {
          'touch-action': i ? '' : 'none',
          '-webkit-user-drag': i ? '' : 'none',
          '-webkit-tap-highlight-color': i ? '' : 'transparent',
          'user-select': t,
          '-ms-user-select': t,
          '-webkit-user-select': t,
          '-moz-user-select': t,
        });
      }
      function Tt(o, i, t) {
        gt(
          o.style,
          {
            position: i ? '' : 'fixed',
            top: i ? '' : '0',
            opacity: i ? '' : '0',
            left: i ? '' : '-999em',
          },
          t
        );
      }
      function X(o, i) {
        return i && 'none' != i ? o + ' ' + i : o;
      }
      function It(o) {
        const i = o.toLowerCase().indexOf('ms') > -1 ? 1 : 1e3;
        return parseFloat(o) * i;
      }
      function pt(o, i) {
        return o
          .getPropertyValue(i)
          .split(',')
          .map((e) => e.trim());
      }
      function ut(o) {
        const i = o.getBoundingClientRect();
        return {
          top: i.top,
          right: i.right,
          bottom: i.bottom,
          left: i.left,
          width: i.width,
          height: i.height,
          x: i.x,
          y: i.y,
        };
      }
      function _t(o, i, t) {
        const { top: e, bottom: s, left: r, right: a } = o;
        return t >= e && t <= s && i >= r && i <= a;
      }
      function Z(o, i, t) {
        (o.top += i),
          (o.bottom = o.top + o.height),
          (o.left += t),
          (o.right = o.left + o.width);
      }
      function Ot(o, i, t, e) {
        const { top: s, right: r, bottom: a, left: l, width: c, height: h } = o,
          d = c * i,
          u = h * i;
        return e > s - u && e < a + u && t > l - d && t < r + d;
      }
      g(37398), g(48180), g(27921), g(99397), g(94664), g(49388);
      class kt {
        constructor(i) {
          (this._document = i), (this.positions = new Map());
        }
        clear() {
          this.positions.clear();
        }
        cache(i) {
          this.clear(),
            this.positions.set(this._document, {
              scrollPosition: this.getViewportScrollPosition(),
            }),
            i.forEach((t) => {
              this.positions.set(t, {
                scrollPosition: { top: t.scrollTop, left: t.scrollLeft },
                clientRect: ut(t),
              });
            });
        }
        handleScroll(i) {
          const t = (0, T.sA)(i),
            e = this.positions.get(t);
          if (!e) return null;
          const s = e.scrollPosition;
          let r, a;
          if (t === this._document) {
            const h = this.getViewportScrollPosition();
            (r = h.top), (a = h.left);
          } else (r = t.scrollTop), (a = t.scrollLeft);
          const l = s.top - r,
            c = s.left - a;
          return (
            this.positions.forEach((h, d) => {
              h.clientRect && t !== d && t.contains(d) && Z(h.clientRect, l, c);
            }),
            (s.top = r),
            (s.left = a),
            { top: l, left: c }
          );
        }
        getViewportScrollPosition() {
          return { top: window.scrollY, left: window.scrollX };
        }
      }
      function Lt(o) {
        const i = o.cloneNode(!0),
          t = i.querySelectorAll('[id]'),
          e = o.nodeName.toLowerCase();
        i.removeAttribute('id');
        for (let s = 0; s < t.length; s++) t[s].removeAttribute('id');
        return (
          'canvas' === e
            ? Bt(o, i)
            : ('input' === e || 'select' === e || 'textarea' === e) && At(o, i),
          Mt('canvas', o, i, Bt),
          Mt('input, textarea, select', o, i, At),
          i
        );
      }
      function Mt(o, i, t, e) {
        const s = i.querySelectorAll(o);
        if (s.length) {
          const r = t.querySelectorAll(o);
          for (let a = 0; a < s.length; a++) e(s[a], r[a]);
        }
      }
      let pe = 0;
      function At(o, i) {
        'file' !== i.type && (i.value = o.value),
          'radio' === i.type &&
            i.name &&
            (i.name = `mat-clone-${i.name}-${pe++}`);
      }
      function Bt(o, i) {
        const t = i.getContext('2d');
        if (t)
          try {
            t.drawImage(o, 0, 0);
          } catch {}
      }
      const Ft = (0, T.i$)({ passive: !0 }),
        tt = (0, T.i$)({ passive: !1 }),
        ft = new Set(['position']);
      class _e {
        get disabled() {
          return (
            this._disabled ||
            !(!this._dropContainer || !this._dropContainer.disabled)
          );
        }
        set disabled(i) {
          const t = (0, f.Ig)(i);
          t !== this._disabled &&
            ((this._disabled = t),
            this._toggleNativeDragInteractions(),
            this._handles.forEach((e) => H(e, t)));
        }
        constructor(i, t, e, s, r, a) {
          (this._config = t),
            (this._document = e),
            (this._ngZone = s),
            (this._viewportRuler = r),
            (this._dragDropRegistry = a),
            (this._passiveTransform = { x: 0, y: 0 }),
            (this._activeTransform = { x: 0, y: 0 }),
            (this._hasStartedDragging = !1),
            (this._moveEvents = new _.x()),
            (this._pointerMoveSubscription = N.w0.EMPTY),
            (this._pointerUpSubscription = N.w0.EMPTY),
            (this._scrollSubscription = N.w0.EMPTY),
            (this._resizeSubscription = N.w0.EMPTY),
            (this._boundaryElement = null),
            (this._nativeInteractionsEnabled = !0),
            (this._handles = []),
            (this._disabledHandles = new Set()),
            (this._direction = 'ltr'),
            (this.dragStartDelay = 0),
            (this._disabled = !1),
            (this.beforeStarted = new _.x()),
            (this.started = new _.x()),
            (this.released = new _.x()),
            (this.ended = new _.x()),
            (this.entered = new _.x()),
            (this.exited = new _.x()),
            (this.dropped = new _.x()),
            (this.moved = this._moveEvents),
            (this._pointerDown = (l) => {
              if ((this.beforeStarted.next(), this._handles.length)) {
                const c = this._getTargetHandle(l);
                c &&
                  !this._disabledHandles.has(c) &&
                  !this.disabled &&
                  this._initializeDragSequence(c, l);
              } else
                this.disabled ||
                  this._initializeDragSequence(this._rootElement, l);
            }),
            (this._pointerMove = (l) => {
              const c = this._getPointerPositionOnPage(l);
              if (!this._hasStartedDragging) {
                if (
                  Math.abs(c.x - this._pickupPositionOnPage.x) +
                    Math.abs(c.y - this._pickupPositionOnPage.y) >=
                  this._config.dragStartThreshold
                ) {
                  const v =
                      Date.now() >=
                      this._dragStartTime + this._getDragStartDelay(l),
                    y = this._dropContainer;
                  if (!v) return void this._endDragSequence(l);
                  (!y || (!y.isDragging() && !y.isReceiving())) &&
                    (l.preventDefault(),
                    (this._hasStartedDragging = !0),
                    this._ngZone.run(() => this._startDragSequence(l)));
                }
                return;
              }
              l.preventDefault();
              const h = this._getConstrainedPointerPosition(c);
              if (
                ((this._hasMoved = !0),
                (this._lastKnownPointerPosition = c),
                this._updatePointerDirectionDelta(h),
                this._dropContainer)
              )
                this._updateActiveDropContainer(h, c);
              else {
                const d = this.constrainPosition
                    ? this._initialClientRect
                    : this._pickupPositionOnPage,
                  u = this._activeTransform;
                (u.x = h.x - d.x + this._passiveTransform.x),
                  (u.y = h.y - d.y + this._passiveTransform.y),
                  this._applyRootElementTransform(u.x, u.y);
              }
              this._moveEvents.observers.length &&
                this._ngZone.run(() => {
                  this._moveEvents.next({
                    source: this,
                    pointerPosition: h,
                    event: l,
                    distance: this._getDragDistance(h),
                    delta: this._pointerDirectionDelta,
                  });
                });
            }),
            (this._pointerUp = (l) => {
              this._endDragSequence(l);
            }),
            (this._nativeDragStart = (l) => {
              if (this._handles.length) {
                const c = this._getTargetHandle(l);
                c &&
                  !this._disabledHandles.has(c) &&
                  !this.disabled &&
                  l.preventDefault();
              } else this.disabled || l.preventDefault();
            }),
            this.withRootElement(i).withParent(t.parentDragRef || null),
            (this._parentPositions = new kt(e)),
            a.registerDragItem(this);
        }
        getPlaceholderElement() {
          return this._placeholder;
        }
        getRootElement() {
          return this._rootElement;
        }
        getVisibleElement() {
          return this.isDragging()
            ? this.getPlaceholderElement()
            : this.getRootElement();
        }
        withHandles(i) {
          (this._handles = i.map((e) => (0, f.fI)(e))),
            this._handles.forEach((e) => H(e, this.disabled)),
            this._toggleNativeDragInteractions();
          const t = new Set();
          return (
            this._disabledHandles.forEach((e) => {
              this._handles.indexOf(e) > -1 && t.add(e);
            }),
            (this._disabledHandles = t),
            this
          );
        }
        withPreviewTemplate(i) {
          return (this._previewTemplate = i), this;
        }
        withPlaceholderTemplate(i) {
          return (this._placeholderTemplate = i), this;
        }
        withRootElement(i) {
          const t = (0, f.fI)(i);
          return (
            t !== this._rootElement &&
              (this._rootElement &&
                this._removeRootElementListeners(this._rootElement),
              this._ngZone.runOutsideAngular(() => {
                t.addEventListener('mousedown', this._pointerDown, tt),
                  t.addEventListener('touchstart', this._pointerDown, Ft),
                  t.addEventListener('dragstart', this._nativeDragStart, tt);
              }),
              (this._initialTransform = void 0),
              (this._rootElement = t)),
            typeof SVGElement < 'u' &&
              this._rootElement instanceof SVGElement &&
              (this._ownerSVGElement = this._rootElement.ownerSVGElement),
            this
          );
        }
        withBoundaryElement(i) {
          return (
            (this._boundaryElement = i ? (0, f.fI)(i) : null),
            this._resizeSubscription.unsubscribe(),
            i &&
              (this._resizeSubscription = this._viewportRuler
                .change(10)
                .subscribe(() => this._containInsideBoundaryOnResize())),
            this
          );
        }
        withParent(i) {
          return (this._parentDragRef = i), this;
        }
        dispose() {
          this._removeRootElementListeners(this._rootElement),
            this.isDragging() && this._rootElement?.remove(),
            this._anchor?.remove(),
            this._destroyPreview(),
            this._destroyPlaceholder(),
            this._dragDropRegistry.removeDragItem(this),
            this._removeSubscriptions(),
            this.beforeStarted.complete(),
            this.started.complete(),
            this.released.complete(),
            this.ended.complete(),
            this.entered.complete(),
            this.exited.complete(),
            this.dropped.complete(),
            this._moveEvents.complete(),
            (this._handles = []),
            this._disabledHandles.clear(),
            (this._dropContainer = void 0),
            this._resizeSubscription.unsubscribe(),
            this._parentPositions.clear(),
            (this._boundaryElement =
              this._rootElement =
              this._ownerSVGElement =
              this._placeholderTemplate =
              this._previewTemplate =
              this._anchor =
              this._parentDragRef =
                null);
        }
        isDragging() {
          return (
            this._hasStartedDragging && this._dragDropRegistry.isDragging(this)
          );
        }
        reset() {
          (this._rootElement.style.transform = this._initialTransform || ''),
            (this._activeTransform = { x: 0, y: 0 }),
            (this._passiveTransform = { x: 0, y: 0 });
        }
        disableHandle(i) {
          !this._disabledHandles.has(i) &&
            this._handles.indexOf(i) > -1 &&
            (this._disabledHandles.add(i), H(i, !0));
        }
        enableHandle(i) {
          this._disabledHandles.has(i) &&
            (this._disabledHandles.delete(i), H(i, this.disabled));
        }
        withDirection(i) {
          return (this._direction = i), this;
        }
        _withDropContainer(i) {
          this._dropContainer = i;
        }
        getFreeDragPosition() {
          const i = this.isDragging()
            ? this._activeTransform
            : this._passiveTransform;
          return { x: i.x, y: i.y };
        }
        setFreeDragPosition(i) {
          return (
            (this._activeTransform = { x: 0, y: 0 }),
            (this._passiveTransform.x = i.x),
            (this._passiveTransform.y = i.y),
            this._dropContainer || this._applyRootElementTransform(i.x, i.y),
            this
          );
        }
        withPreviewContainer(i) {
          return (this._previewContainer = i), this;
        }
        _sortFromLastPointerPosition() {
          const i = this._lastKnownPointerPosition;
          i &&
            this._dropContainer &&
            this._updateActiveDropContainer(
              this._getConstrainedPointerPosition(i),
              i
            );
        }
        _removeSubscriptions() {
          this._pointerMoveSubscription.unsubscribe(),
            this._pointerUpSubscription.unsubscribe(),
            this._scrollSubscription.unsubscribe();
        }
        _destroyPreview() {
          this._preview?.remove(),
            this._previewRef?.destroy(),
            (this._preview = this._previewRef = null);
        }
        _destroyPlaceholder() {
          this._placeholder?.remove(),
            this._placeholderRef?.destroy(),
            (this._placeholder = this._placeholderRef = null);
        }
        _endDragSequence(i) {
          if (
            this._dragDropRegistry.isDragging(this) &&
            (this._removeSubscriptions(),
            this._dragDropRegistry.stopDragging(this),
            this._toggleNativeDragInteractions(),
            this._handles &&
              (this._rootElement.style.webkitTapHighlightColor =
                this._rootElementTapHighlight),
            this._hasStartedDragging)
          )
            if (
              (this.released.next({ source: this, event: i }),
              this._dropContainer)
            )
              this._dropContainer._stopScrolling(),
                this._animatePreviewToPlaceholder().then(() => {
                  this._cleanupDragArtifacts(i),
                    this._cleanupCachedDimensions(),
                    this._dragDropRegistry.stopDragging(this);
                });
            else {
              this._passiveTransform.x = this._activeTransform.x;
              const t = this._getPointerPositionOnPage(i);
              (this._passiveTransform.y = this._activeTransform.y),
                this._ngZone.run(() => {
                  this.ended.next({
                    source: this,
                    distance: this._getDragDistance(t),
                    dropPoint: t,
                    event: i,
                  });
                }),
                this._cleanupCachedDimensions(),
                this._dragDropRegistry.stopDragging(this);
            }
        }
        _startDragSequence(i) {
          Y(i) && (this._lastTouchEventTime = Date.now()),
            this._toggleNativeDragInteractions();
          const t = this._dropContainer;
          if (t) {
            const e = this._rootElement,
              s = e.parentNode,
              r = (this._placeholder = this._createPlaceholderElement()),
              a = (this._anchor =
                this._anchor || this._document.createComment('')),
              l = this._getShadowRoot();
            s.insertBefore(a, e),
              (this._initialTransform = e.style.transform || ''),
              (this._preview = this._createPreviewElement()),
              Tt(e, !1, ft),
              this._document.body.appendChild(s.replaceChild(r, e)),
              this._getPreviewInsertionPoint(s, l).appendChild(this._preview),
              this.started.next({ source: this, event: i }),
              t.start(),
              (this._initialContainer = t),
              (this._initialIndex = t.getItemIndex(this));
          } else
            this.started.next({ source: this, event: i }),
              (this._initialContainer = this._initialIndex = void 0);
          this._parentPositions.cache(t ? t.getScrollableParents() : []);
        }
        _initializeDragSequence(i, t) {
          this._parentDragRef && t.stopPropagation();
          const e = this.isDragging(),
            s = Y(t),
            r = !s && 0 !== t.button,
            a = this._rootElement,
            l = (0, T.sA)(t),
            c =
              !s &&
              this._lastTouchEventTime &&
              this._lastTouchEventTime + 800 > Date.now(),
            h = s ? (0, Ct.yG)(t) : (0, Ct.X6)(t);
          if (
            (l && l.draggable && 'mousedown' === t.type && t.preventDefault(),
            e || r || c || h)
          )
            return;
          if (this._handles.length) {
            const m = a.style;
            (this._rootElementTapHighlight = m.webkitTapHighlightColor || ''),
              (m.webkitTapHighlightColor = 'transparent');
          }
          (this._hasStartedDragging = this._hasMoved = !1),
            this._removeSubscriptions(),
            (this._initialClientRect =
              this._rootElement.getBoundingClientRect()),
            (this._pointerMoveSubscription =
              this._dragDropRegistry.pointerMove.subscribe(this._pointerMove)),
            (this._pointerUpSubscription =
              this._dragDropRegistry.pointerUp.subscribe(this._pointerUp)),
            (this._scrollSubscription = this._dragDropRegistry
              .scrolled(this._getShadowRoot())
              .subscribe((m) => this._updateOnScroll(m))),
            this._boundaryElement &&
              (this._boundaryRect = ut(this._boundaryElement));
          const d = this._previewTemplate;
          this._pickupPositionInElement =
            d && d.template && !d.matchSize
              ? { x: 0, y: 0 }
              : this._getPointerPositionInElement(
                  this._initialClientRect,
                  i,
                  t
                );
          const u =
            (this._pickupPositionOnPage =
            this._lastKnownPointerPosition =
              this._getPointerPositionOnPage(t));
          (this._pointerDirectionDelta = { x: 0, y: 0 }),
            (this._pointerPositionAtLastDirectionChange = { x: u.x, y: u.y }),
            (this._dragStartTime = Date.now()),
            this._dragDropRegistry.startDragging(this, t);
        }
        _cleanupDragArtifacts(i) {
          Tt(this._rootElement, !0, ft),
            this._anchor.parentNode.replaceChild(
              this._rootElement,
              this._anchor
            ),
            this._destroyPreview(),
            this._destroyPlaceholder(),
            (this._initialClientRect =
              this._boundaryRect =
              this._previewRect =
              this._initialTransform =
                void 0),
            this._ngZone.run(() => {
              const t = this._dropContainer,
                e = t.getItemIndex(this),
                s = this._getPointerPositionOnPage(i),
                r = this._getDragDistance(s),
                a = t._isOverContainer(s.x, s.y);
              this.ended.next({
                source: this,
                distance: r,
                dropPoint: s,
                event: i,
              }),
                this.dropped.next({
                  item: this,
                  currentIndex: e,
                  previousIndex: this._initialIndex,
                  container: t,
                  previousContainer: this._initialContainer,
                  isPointerOverContainer: a,
                  distance: r,
                  dropPoint: s,
                  event: i,
                }),
                t.drop(
                  this,
                  e,
                  this._initialIndex,
                  this._initialContainer,
                  a,
                  r,
                  s,
                  i
                ),
                (this._dropContainer = this._initialContainer);
            });
        }
        _updateActiveDropContainer({ x: i, y: t }, { x: e, y: s }) {
          let r = this._initialContainer._getSiblingContainerFromPosition(
            this,
            i,
            t
          );
          !r &&
            this._dropContainer !== this._initialContainer &&
            this._initialContainer._isOverContainer(i, t) &&
            (r = this._initialContainer),
            r &&
              r !== this._dropContainer &&
              this._ngZone.run(() => {
                this.exited.next({
                  item: this,
                  container: this._dropContainer,
                }),
                  this._dropContainer.exit(this),
                  (this._dropContainer = r),
                  this._dropContainer.enter(
                    this,
                    i,
                    t,
                    r === this._initialContainer && r.sortingDisabled
                      ? this._initialIndex
                      : void 0
                  ),
                  this.entered.next({
                    item: this,
                    container: r,
                    currentIndex: r.getItemIndex(this),
                  });
              }),
            this.isDragging() &&
              (this._dropContainer._startScrollingIfNecessary(e, s),
              this._dropContainer._sortItem(
                this,
                i,
                t,
                this._pointerDirectionDelta
              ),
              this.constrainPosition
                ? this._applyPreviewTransform(i, t)
                : this._applyPreviewTransform(
                    i - this._pickupPositionInElement.x,
                    t - this._pickupPositionInElement.y
                  ));
        }
        _createPreviewElement() {
          const i = this._previewTemplate,
            t = this.previewClass,
            e = i ? i.template : null;
          let s;
          if (e && i) {
            const r = i.matchSize ? this._initialClientRect : null,
              a = i.viewContainer.createEmbeddedView(e, i.context);
            a.detectChanges(),
              (s = zt(a, this._document)),
              (this._previewRef = a),
              i.matchSize
                ? Gt(s, r)
                : (s.style.transform = et(
                    this._pickupPositionOnPage.x,
                    this._pickupPositionOnPage.y
                  ));
          } else
            (s = Lt(this._rootElement)),
              Gt(s, this._initialClientRect),
              this._initialTransform &&
                (s.style.transform = this._initialTransform);
          return (
            gt(
              s.style,
              {
                'pointer-events': 'none',
                margin: '0',
                position: 'fixed',
                top: '0',
                left: '0',
                'z-index': `${this._config.zIndex || 1e3}`,
              },
              ft
            ),
            H(s, !1),
            s.classList.add('cdk-drag-preview'),
            s.setAttribute('dir', this._direction),
            t &&
              (Array.isArray(t)
                ? t.forEach((r) => s.classList.add(r))
                : s.classList.add(t)),
            s
          );
        }
        _animatePreviewToPlaceholder() {
          if (!this._hasMoved) return Promise.resolve();
          const i = this._placeholder.getBoundingClientRect();
          this._preview.classList.add('cdk-drag-animating'),
            this._applyPreviewTransform(i.left, i.top);
          const t = (function ge(o) {
            const i = getComputedStyle(o),
              t = pt(i, 'transition-property'),
              e = t.find((l) => 'transform' === l || 'all' === l);
            if (!e) return 0;
            const s = t.indexOf(e),
              r = pt(i, 'transition-duration'),
              a = pt(i, 'transition-delay');
            return It(r[s]) + It(a[s]);
          })(this._preview);
          return 0 === t
            ? Promise.resolve()
            : this._ngZone.runOutsideAngular(
                () =>
                  new Promise((e) => {
                    const s = (a) => {
                        (!a ||
                          ((0, T.sA)(a) === this._preview &&
                            'transform' === a.propertyName)) &&
                          (this._preview?.removeEventListener(
                            'transitionend',
                            s
                          ),
                          e(),
                          clearTimeout(r));
                      },
                      r = setTimeout(s, 1.5 * t);
                    this._preview.addEventListener('transitionend', s);
                  })
              );
        }
        _createPlaceholderElement() {
          const i = this._placeholderTemplate,
            t = i ? i.template : null;
          let e;
          return (
            t
              ? ((this._placeholderRef = i.viewContainer.createEmbeddedView(
                  t,
                  i.context
                )),
                this._placeholderRef.detectChanges(),
                (e = zt(this._placeholderRef, this._document)))
              : (e = Lt(this._rootElement)),
            (e.style.pointerEvents = 'none'),
            e.classList.add('cdk-drag-placeholder'),
            e
          );
        }
        _getPointerPositionInElement(i, t, e) {
          const s = t === this._rootElement ? null : t,
            r = s ? s.getBoundingClientRect() : i,
            a = Y(e) ? e.targetTouches[0] : e,
            l = this._getViewportScrollPosition();
          return {
            x: r.left - i.left + (a.pageX - r.left - l.left),
            y: r.top - i.top + (a.pageY - r.top - l.top),
          };
        }
        _getPointerPositionOnPage(i) {
          const t = this._getViewportScrollPosition(),
            e = Y(i)
              ? i.touches[0] || i.changedTouches[0] || { pageX: 0, pageY: 0 }
              : i,
            s = e.pageX - t.left,
            r = e.pageY - t.top;
          if (this._ownerSVGElement) {
            const a = this._ownerSVGElement.getScreenCTM();
            if (a) {
              const l = this._ownerSVGElement.createSVGPoint();
              return (l.x = s), (l.y = r), l.matrixTransform(a.inverse());
            }
          }
          return { x: s, y: r };
        }
        _getConstrainedPointerPosition(i) {
          const t = this._dropContainer ? this._dropContainer.lockAxis : null;
          let { x: e, y: s } = this.constrainPosition
            ? this.constrainPosition(
                i,
                this,
                this._initialClientRect,
                this._pickupPositionInElement
              )
            : i;
          if (
            ('x' === this.lockAxis || 'x' === t
              ? (s =
                  this._pickupPositionOnPage.y -
                  (this.constrainPosition
                    ? this._pickupPositionInElement.y
                    : 0))
              : ('y' === this.lockAxis || 'y' === t) &&
                (e =
                  this._pickupPositionOnPage.x -
                  (this.constrainPosition
                    ? this._pickupPositionInElement.x
                    : 0)),
            this._boundaryRect)
          ) {
            const { x: r, y: a } = this.constrainPosition
                ? { x: 0, y: 0 }
                : this._pickupPositionInElement,
              l = this._boundaryRect,
              { width: c, height: h } = this._getPreviewRect(),
              d = l.top + a,
              u = l.bottom - (h - a);
            (e = Ht(e, l.left + r, l.right - (c - r))), (s = Ht(s, d, u));
          }
          return { x: e, y: s };
        }
        _updatePointerDirectionDelta(i) {
          const { x: t, y: e } = i,
            s = this._pointerDirectionDelta,
            r = this._pointerPositionAtLastDirectionChange,
            a = Math.abs(t - r.x),
            l = Math.abs(e - r.y);
          return (
            a > this._config.pointerDirectionChangeThreshold &&
              ((s.x = t > r.x ? 1 : -1), (r.x = t)),
            l > this._config.pointerDirectionChangeThreshold &&
              ((s.y = e > r.y ? 1 : -1), (r.y = e)),
            s
          );
        }
        _toggleNativeDragInteractions() {
          if (!this._rootElement || !this._handles) return;
          const i = this._handles.length > 0 || !this.isDragging();
          i !== this._nativeInteractionsEnabled &&
            ((this._nativeInteractionsEnabled = i), H(this._rootElement, i));
        }
        _removeRootElementListeners(i) {
          i.removeEventListener('mousedown', this._pointerDown, tt),
            i.removeEventListener('touchstart', this._pointerDown, Ft),
            i.removeEventListener('dragstart', this._nativeDragStart, tt);
        }
        _applyRootElementTransform(i, t) {
          const e = et(i, t),
            s = this._rootElement.style;
          null == this._initialTransform &&
            (this._initialTransform =
              s.transform && 'none' != s.transform ? s.transform : ''),
            (s.transform = X(e, this._initialTransform));
        }
        _applyPreviewTransform(i, t) {
          const e = this._previewTemplate?.template
              ? void 0
              : this._initialTransform,
            s = et(i, t);
          this._preview.style.transform = X(s, e);
        }
        _getDragDistance(i) {
          const t = this._pickupPositionOnPage;
          return t ? { x: i.x - t.x, y: i.y - t.y } : { x: 0, y: 0 };
        }
        _cleanupCachedDimensions() {
          (this._boundaryRect = this._previewRect = void 0),
            this._parentPositions.clear();
        }
        _containInsideBoundaryOnResize() {
          let { x: i, y: t } = this._passiveTransform;
          if (
            (0 === i && 0 === t) ||
            this.isDragging() ||
            !this._boundaryElement
          )
            return;
          const e = this._rootElement.getBoundingClientRect(),
            s = this._boundaryElement.getBoundingClientRect();
          if (
            (0 === s.width && 0 === s.height) ||
            (0 === e.width && 0 === e.height)
          )
            return;
          const r = s.left - e.left,
            a = e.right - s.right,
            l = s.top - e.top,
            c = e.bottom - s.bottom;
          s.width > e.width ? (r > 0 && (i += r), a > 0 && (i -= a)) : (i = 0),
            s.height > e.height
              ? (l > 0 && (t += l), c > 0 && (t -= c))
              : (t = 0),
            (i !== this._passiveTransform.x ||
              t !== this._passiveTransform.y) &&
              this.setFreeDragPosition({ y: t, x: i });
        }
        _getDragStartDelay(i) {
          const t = this.dragStartDelay;
          return 'number' == typeof t ? t : Y(i) ? t.touch : t ? t.mouse : 0;
        }
        _updateOnScroll(i) {
          const t = this._parentPositions.handleScroll(i);
          if (t) {
            const e = (0, T.sA)(i);
            this._boundaryRect &&
              e !== this._boundaryElement &&
              e.contains(this._boundaryElement) &&
              Z(this._boundaryRect, t.top, t.left),
              (this._pickupPositionOnPage.x += t.left),
              (this._pickupPositionOnPage.y += t.top),
              this._dropContainer ||
                ((this._activeTransform.x -= t.left),
                (this._activeTransform.y -= t.top),
                this._applyRootElementTransform(
                  this._activeTransform.x,
                  this._activeTransform.y
                ));
          }
        }
        _getViewportScrollPosition() {
          return (
            this._parentPositions.positions.get(this._document)
              ?.scrollPosition ||
            this._parentPositions.getViewportScrollPosition()
          );
        }
        _getShadowRoot() {
          return (
            void 0 === this._cachedShadowRoot &&
              (this._cachedShadowRoot = (0, T.kV)(this._rootElement)),
            this._cachedShadowRoot
          );
        }
        _getPreviewInsertionPoint(i, t) {
          const e = this._previewContainer || 'global';
          if ('parent' === e) return i;
          if ('global' === e) {
            const s = this._document;
            return (
              t ||
              s.fullscreenElement ||
              s.webkitFullscreenElement ||
              s.mozFullScreenElement ||
              s.msFullscreenElement ||
              s.body
            );
          }
          return (0, f.fI)(e);
        }
        _getPreviewRect() {
          return (
            (!this._previewRect ||
              (!this._previewRect.width && !this._previewRect.height)) &&
              (this._previewRect = this._preview
                ? this._preview.getBoundingClientRect()
                : this._initialClientRect),
            this._previewRect
          );
        }
        _getTargetHandle(i) {
          return this._handles.find(
            (t) => i.target && (i.target === t || t.contains(i.target))
          );
        }
      }
      function et(o, i) {
        return `translate3d(${Math.round(o)}px, ${Math.round(i)}px, 0)`;
      }
      function Ht(o, i, t) {
        return Math.max(i, Math.min(t, o));
      }
      function Y(o) {
        return 't' === o.type[0];
      }
      function zt(o, i) {
        const t = o.rootNodes;
        if (1 === t.length && t[0].nodeType === i.ELEMENT_NODE) return t[0];
        const e = i.createElement('div');
        return t.forEach((s) => e.appendChild(s)), e;
      }
      function Gt(o, i) {
        (o.style.width = `${i.width}px`),
          (o.style.height = `${i.height}px`),
          (o.style.transform = et(i.left, i.top));
      }
      function V(o, i) {
        return Math.max(0, Math.min(i, o));
      }
      class me {
        constructor(i, t) {
          (this._element = i),
            (this._dragDropRegistry = t),
            (this._itemPositions = []),
            (this.orientation = 'vertical'),
            (this._previousSwap = { drag: null, delta: 0, overlaps: !1 });
        }
        start(i) {
          this.withItems(i);
        }
        sort(i, t, e, s) {
          const r = this._itemPositions,
            a = this._getItemIndexFromPointerPosition(i, t, e, s);
          if (-1 === a && r.length > 0) return null;
          const l = 'horizontal' === this.orientation,
            c = r.findIndex((D) => D.drag === i),
            h = r[a],
            u = h.clientRect,
            m = c > a ? 1 : -1,
            v = this._getItemOffsetPx(r[c].clientRect, u, m),
            y = this._getSiblingOffsetPx(c, r, m),
            x = r.slice();
          return (
            (function fe(o, i, t) {
              const e = V(i, o.length - 1),
                s = V(t, o.length - 1);
              if (e === s) return;
              const r = o[e],
                a = s < e ? -1 : 1;
              for (let l = e; l !== s; l += a) o[l] = o[l + a];
              o[s] = r;
            })(r, c, a),
            r.forEach((D, k) => {
              if (x[k] === D) return;
              const I = D.drag === i,
                P = I ? v : y,
                E = I ? i.getPlaceholderElement() : D.drag.getRootElement();
              (D.offset += P),
                l
                  ? ((E.style.transform = X(
                      `translate3d(${Math.round(D.offset)}px, 0, 0)`,
                      D.initialTransform
                    )),
                    Z(D.clientRect, 0, P))
                  : ((E.style.transform = X(
                      `translate3d(0, ${Math.round(D.offset)}px, 0)`,
                      D.initialTransform
                    )),
                    Z(D.clientRect, P, 0));
            }),
            (this._previousSwap.overlaps = _t(u, t, e)),
            (this._previousSwap.drag = h.drag),
            (this._previousSwap.delta = l ? s.x : s.y),
            { previousIndex: c, currentIndex: a }
          );
        }
        enter(i, t, e, s) {
          const r =
              null == s || s < 0
                ? this._getItemIndexFromPointerPosition(i, t, e)
                : s,
            a = this._activeDraggables,
            l = a.indexOf(i),
            c = i.getPlaceholderElement();
          let h = a[r];
          if (
            (h === i && (h = a[r + 1]),
            !h &&
              (null == r || -1 === r || r < a.length - 1) &&
              this._shouldEnterAsFirstChild(t, e) &&
              (h = a[0]),
            l > -1 && a.splice(l, 1),
            h && !this._dragDropRegistry.isDragging(h))
          ) {
            const d = h.getRootElement();
            d.parentElement.insertBefore(c, d), a.splice(r, 0, i);
          } else (0, f.fI)(this._element).appendChild(c), a.push(i);
          (c.style.transform = ''), this._cacheItemPositions();
        }
        withItems(i) {
          (this._activeDraggables = i.slice()), this._cacheItemPositions();
        }
        withSortPredicate(i) {
          this._sortPredicate = i;
        }
        reset() {
          this._activeDraggables.forEach((i) => {
            const t = i.getRootElement();
            if (t) {
              const e = this._itemPositions.find(
                (s) => s.drag === i
              )?.initialTransform;
              t.style.transform = e || '';
            }
          }),
            (this._itemPositions = []),
            (this._activeDraggables = []),
            (this._previousSwap.drag = null),
            (this._previousSwap.delta = 0),
            (this._previousSwap.overlaps = !1);
        }
        getActiveItemsSnapshot() {
          return this._activeDraggables;
        }
        getItemIndex(i) {
          return (
            'horizontal' === this.orientation && 'rtl' === this.direction
              ? this._itemPositions.slice().reverse()
              : this._itemPositions
          ).findIndex((e) => e.drag === i);
        }
        updateOnScroll(i, t) {
          this._itemPositions.forEach(({ clientRect: e }) => {
            Z(e, i, t);
          }),
            this._itemPositions.forEach(({ drag: e }) => {
              this._dragDropRegistry.isDragging(e) &&
                e._sortFromLastPointerPosition();
            });
        }
        _cacheItemPositions() {
          const i = 'horizontal' === this.orientation;
          this._itemPositions = this._activeDraggables
            .map((t) => {
              const e = t.getVisibleElement();
              return {
                drag: t,
                offset: 0,
                initialTransform: e.style.transform || '',
                clientRect: ut(e),
              };
            })
            .sort((t, e) =>
              i
                ? t.clientRect.left - e.clientRect.left
                : t.clientRect.top - e.clientRect.top
            );
        }
        _getItemOffsetPx(i, t, e) {
          const s = 'horizontal' === this.orientation;
          let r = s ? t.left - i.left : t.top - i.top;
          return (
            -1 === e && (r += s ? t.width - i.width : t.height - i.height), r
          );
        }
        _getSiblingOffsetPx(i, t, e) {
          const s = 'horizontal' === this.orientation,
            r = t[i].clientRect,
            a = t[i + -1 * e];
          let l = r[s ? 'width' : 'height'] * e;
          if (a) {
            const c = s ? 'left' : 'top',
              h = s ? 'right' : 'bottom';
            -1 === e
              ? (l -= a.clientRect[c] - r[h])
              : (l += r[c] - a.clientRect[h]);
          }
          return l;
        }
        _shouldEnterAsFirstChild(i, t) {
          if (!this._activeDraggables.length) return !1;
          const e = this._itemPositions,
            s = 'horizontal' === this.orientation;
          if (e[0].drag !== this._activeDraggables[0]) {
            const a = e[e.length - 1].clientRect;
            return s ? i >= a.right : t >= a.bottom;
          }
          {
            const a = e[0].clientRect;
            return s ? i <= a.left : t <= a.top;
          }
        }
        _getItemIndexFromPointerPosition(i, t, e, s) {
          const r = 'horizontal' === this.orientation,
            a = this._itemPositions.findIndex(
              ({ drag: l, clientRect: c }) =>
                l !== i &&
                (!s ||
                  l !== this._previousSwap.drag ||
                  !this._previousSwap.overlaps ||
                  (r ? s.x : s.y) !== this._previousSwap.delta) &&
                (r
                  ? t >= Math.floor(c.left) && t < Math.floor(c.right)
                  : e >= Math.floor(c.top) && e < Math.floor(c.bottom))
            );
          return -1 !== a && this._sortPredicate(a, i) ? a : -1;
        }
      }
      class De {
        constructor(i, t, e, s, r) {
          (this._dragDropRegistry = t),
            (this._ngZone = s),
            (this._viewportRuler = r),
            (this.disabled = !1),
            (this.sortingDisabled = !1),
            (this.autoScrollDisabled = !1),
            (this.autoScrollStep = 2),
            (this.enterPredicate = () => !0),
            (this.sortPredicate = () => !0),
            (this.beforeStarted = new _.x()),
            (this.entered = new _.x()),
            (this.exited = new _.x()),
            (this.dropped = new _.x()),
            (this.sorted = new _.x()),
            (this.receivingStarted = new _.x()),
            (this.receivingStopped = new _.x()),
            (this._isDragging = !1),
            (this._draggables = []),
            (this._siblings = []),
            (this._activeSiblings = new Set()),
            (this._viewportScrollSubscription = N.w0.EMPTY),
            (this._verticalScrollDirection = 0),
            (this._horizontalScrollDirection = 0),
            (this._stopScrollTimers = new _.x()),
            (this._cachedShadowRoot = null),
            (this._startScrollInterval = () => {
              this._stopScrolling(),
                (function ae(o = 0, i = oe.z) {
                  return o < 0 && (o = 0), (0, re.H)(o, o, i);
                })(0, le.Z)
                  .pipe((0, M.R)(this._stopScrollTimers))
                  .subscribe(() => {
                    const a = this._scrollNode,
                      l = this.autoScrollStep;
                    1 === this._verticalScrollDirection
                      ? a.scrollBy(0, -l)
                      : 2 === this._verticalScrollDirection && a.scrollBy(0, l),
                      1 === this._horizontalScrollDirection
                        ? a.scrollBy(-l, 0)
                        : 2 === this._horizontalScrollDirection &&
                          a.scrollBy(l, 0);
                  });
            }),
            (this.element = (0, f.fI)(i)),
            (this._document = e),
            this.withScrollableParents([this.element]),
            t.registerDropContainer(this),
            (this._parentPositions = new kt(e)),
            (this._sortStrategy = new me(this.element, t)),
            this._sortStrategy.withSortPredicate((a, l) =>
              this.sortPredicate(a, l, this)
            );
        }
        dispose() {
          this._stopScrolling(),
            this._stopScrollTimers.complete(),
            this._viewportScrollSubscription.unsubscribe(),
            this.beforeStarted.complete(),
            this.entered.complete(),
            this.exited.complete(),
            this.dropped.complete(),
            this.sorted.complete(),
            this.receivingStarted.complete(),
            this.receivingStopped.complete(),
            this._activeSiblings.clear(),
            (this._scrollNode = null),
            this._parentPositions.clear(),
            this._dragDropRegistry.removeDropContainer(this);
        }
        isDragging() {
          return this._isDragging;
        }
        start() {
          this._draggingStarted(), this._notifyReceivingSiblings();
        }
        enter(i, t, e, s) {
          this._draggingStarted(),
            null == s &&
              this.sortingDisabled &&
              (s = this._draggables.indexOf(i)),
            this._sortStrategy.enter(i, t, e, s),
            this._cacheParentPositions(),
            this._notifyReceivingSiblings(),
            this.entered.next({
              item: i,
              container: this,
              currentIndex: this.getItemIndex(i),
            });
        }
        exit(i) {
          this._reset(), this.exited.next({ item: i, container: this });
        }
        drop(i, t, e, s, r, a, l, c = {}) {
          this._reset(),
            this.dropped.next({
              item: i,
              currentIndex: t,
              previousIndex: e,
              container: this,
              previousContainer: s,
              isPointerOverContainer: r,
              distance: a,
              dropPoint: l,
              event: c,
            });
        }
        withItems(i) {
          const t = this._draggables;
          return (
            (this._draggables = i),
            i.forEach((e) => e._withDropContainer(this)),
            this.isDragging() &&
              (t.filter((s) => s.isDragging()).every((s) => -1 === i.indexOf(s))
                ? this._reset()
                : this._sortStrategy.withItems(this._draggables)),
            this
          );
        }
        withDirection(i) {
          return (this._sortStrategy.direction = i), this;
        }
        connectedTo(i) {
          return (this._siblings = i.slice()), this;
        }
        withOrientation(i) {
          return (this._sortStrategy.orientation = i), this;
        }
        withScrollableParents(i) {
          const t = (0, f.fI)(this.element);
          return (
            (this._scrollableElements =
              -1 === i.indexOf(t) ? [t, ...i] : i.slice()),
            this
          );
        }
        getScrollableParents() {
          return this._scrollableElements;
        }
        getItemIndex(i) {
          return this._isDragging
            ? this._sortStrategy.getItemIndex(i)
            : this._draggables.indexOf(i);
        }
        isReceiving() {
          return this._activeSiblings.size > 0;
        }
        _sortItem(i, t, e, s) {
          if (
            this.sortingDisabled ||
            !this._clientRect ||
            !Ot(this._clientRect, 0.05, t, e)
          )
            return;
          const r = this._sortStrategy.sort(i, t, e, s);
          r &&
            this.sorted.next({
              previousIndex: r.previousIndex,
              currentIndex: r.currentIndex,
              container: this,
              item: i,
            });
        }
        _startScrollingIfNecessary(i, t) {
          if (this.autoScrollDisabled) return;
          let e,
            s = 0,
            r = 0;
          if (
            (this._parentPositions.positions.forEach((a, l) => {
              l === this._document ||
                !a.clientRect ||
                e ||
                (Ot(a.clientRect, 0.05, i, t) &&
                  (([s, r] = (function ve(o, i, t, e) {
                    const s = Yt(i, e),
                      r = Vt(i, t);
                    let a = 0,
                      l = 0;
                    if (s) {
                      const c = o.scrollTop;
                      1 === s
                        ? c > 0 && (a = 1)
                        : o.scrollHeight - c > o.clientHeight && (a = 2);
                    }
                    if (r) {
                      const c = o.scrollLeft;
                      1 === r
                        ? c > 0 && (l = 1)
                        : o.scrollWidth - c > o.clientWidth && (l = 2);
                    }
                    return [a, l];
                  })(l, a.clientRect, i, t)),
                  (s || r) && (e = l)));
            }),
            !s && !r)
          ) {
            const { width: a, height: l } =
                this._viewportRuler.getViewportSize(),
              c = { width: a, height: l, top: 0, right: a, bottom: l, left: 0 };
            (s = Yt(c, t)), (r = Vt(c, i)), (e = window);
          }
          e &&
            (s !== this._verticalScrollDirection ||
              r !== this._horizontalScrollDirection ||
              e !== this._scrollNode) &&
            ((this._verticalScrollDirection = s),
            (this._horizontalScrollDirection = r),
            (this._scrollNode = e),
            (s || r) && e
              ? this._ngZone.runOutsideAngular(this._startScrollInterval)
              : this._stopScrolling());
        }
        _stopScrolling() {
          this._stopScrollTimers.next();
        }
        _draggingStarted() {
          const i = (0, f.fI)(this.element).style;
          this.beforeStarted.next(),
            (this._isDragging = !0),
            (this._initialScrollSnap =
              i.msScrollSnapType || i.scrollSnapType || ''),
            (i.scrollSnapType = i.msScrollSnapType = 'none'),
            this._sortStrategy.start(this._draggables),
            this._cacheParentPositions(),
            this._viewportScrollSubscription.unsubscribe(),
            this._listenToScrollEvents();
        }
        _cacheParentPositions() {
          const i = (0, f.fI)(this.element);
          this._parentPositions.cache(this._scrollableElements),
            (this._clientRect =
              this._parentPositions.positions.get(i).clientRect);
        }
        _reset() {
          this._isDragging = !1;
          const i = (0, f.fI)(this.element).style;
          (i.scrollSnapType = i.msScrollSnapType = this._initialScrollSnap),
            this._siblings.forEach((t) => t._stopReceiving(this)),
            this._sortStrategy.reset(),
            this._stopScrolling(),
            this._viewportScrollSubscription.unsubscribe(),
            this._parentPositions.clear();
        }
        _isOverContainer(i, t) {
          return null != this._clientRect && _t(this._clientRect, i, t);
        }
        _getSiblingContainerFromPosition(i, t, e) {
          return this._siblings.find((s) => s._canReceive(i, t, e));
        }
        _canReceive(i, t, e) {
          if (
            !this._clientRect ||
            !_t(this._clientRect, t, e) ||
            !this.enterPredicate(i, this)
          )
            return !1;
          const s = this._getShadowRoot().elementFromPoint(t, e);
          if (!s) return !1;
          const r = (0, f.fI)(this.element);
          return s === r || r.contains(s);
        }
        _startReceiving(i, t) {
          const e = this._activeSiblings;
          !e.has(i) &&
            t.every(
              (s) =>
                this.enterPredicate(s, this) || this._draggables.indexOf(s) > -1
            ) &&
            (e.add(i),
            this._cacheParentPositions(),
            this._listenToScrollEvents(),
            this.receivingStarted.next({
              initiator: i,
              receiver: this,
              items: t,
            }));
        }
        _stopReceiving(i) {
          this._activeSiblings.delete(i),
            this._viewportScrollSubscription.unsubscribe(),
            this.receivingStopped.next({ initiator: i, receiver: this });
        }
        _listenToScrollEvents() {
          this._viewportScrollSubscription = this._dragDropRegistry
            .scrolled(this._getShadowRoot())
            .subscribe((i) => {
              if (this.isDragging()) {
                const t = this._parentPositions.handleScroll(i);
                t && this._sortStrategy.updateOnScroll(t.top, t.left);
              } else this.isReceiving() && this._cacheParentPositions();
            });
        }
        _getShadowRoot() {
          if (!this._cachedShadowRoot) {
            const i = (0, T.kV)((0, f.fI)(this.element));
            this._cachedShadowRoot = i || this._document;
          }
          return this._cachedShadowRoot;
        }
        _notifyReceivingSiblings() {
          const i = this._sortStrategy
            .getActiveItemsSnapshot()
            .filter((t) => t.isDragging());
          this._siblings.forEach((t) => t._startReceiving(this, i));
        }
      }
      function Yt(o, i) {
        const { top: t, bottom: e, height: s } = o,
          r = 0.05 * s;
        return i >= t - r && i <= t + r ? 1 : i >= e - r && i <= e + r ? 2 : 0;
      }
      function Vt(o, i) {
        const { left: t, right: e, width: s } = o,
          r = 0.05 * s;
        return i >= t - r && i <= t + r ? 1 : i >= e - r && i <= e + r ? 2 : 0;
      }
      const it = (0, T.i$)({ passive: !1, capture: !0 });
      let be = (() => {
        class o {
          constructor(t, e) {
            (this._ngZone = t),
              (this._dropInstances = new Set()),
              (this._dragInstances = new Set()),
              (this._activeDragInstances = []),
              (this._globalListeners = new Map()),
              (this._draggingPredicate = (s) => s.isDragging()),
              (this.pointerMove = new _.x()),
              (this.pointerUp = new _.x()),
              (this.scroll = new _.x()),
              (this._preventDefaultWhileDragging = (s) => {
                this._activeDragInstances.length > 0 && s.preventDefault();
              }),
              (this._persistentTouchmoveListener = (s) => {
                this._activeDragInstances.length > 0 &&
                  (this._activeDragInstances.some(this._draggingPredicate) &&
                    s.preventDefault(),
                  this.pointerMove.next(s));
              }),
              (this._document = e);
          }
          registerDropContainer(t) {
            this._dropInstances.has(t) || this._dropInstances.add(t);
          }
          registerDragItem(t) {
            this._dragInstances.add(t),
              1 === this._dragInstances.size &&
                this._ngZone.runOutsideAngular(() => {
                  this._document.addEventListener(
                    'touchmove',
                    this._persistentTouchmoveListener,
                    it
                  );
                });
          }
          removeDropContainer(t) {
            this._dropInstances.delete(t);
          }
          removeDragItem(t) {
            this._dragInstances.delete(t),
              this.stopDragging(t),
              0 === this._dragInstances.size &&
                this._document.removeEventListener(
                  'touchmove',
                  this._persistentTouchmoveListener,
                  it
                );
          }
          startDragging(t, e) {
            if (
              !(this._activeDragInstances.indexOf(t) > -1) &&
              (this._activeDragInstances.push(t),
              1 === this._activeDragInstances.length)
            ) {
              const s = e.type.startsWith('touch');
              this._globalListeners
                .set(s ? 'touchend' : 'mouseup', {
                  handler: (r) => this.pointerUp.next(r),
                  options: !0,
                })
                .set('scroll', {
                  handler: (r) => this.scroll.next(r),
                  options: !0,
                })
                .set('selectstart', {
                  handler: this._preventDefaultWhileDragging,
                  options: it,
                }),
                s ||
                  this._globalListeners.set('mousemove', {
                    handler: (r) => this.pointerMove.next(r),
                    options: it,
                  }),
                this._ngZone.runOutsideAngular(() => {
                  this._globalListeners.forEach((r, a) => {
                    this._document.addEventListener(a, r.handler, r.options);
                  });
                });
            }
          }
          stopDragging(t) {
            const e = this._activeDragInstances.indexOf(t);
            e > -1 &&
              (this._activeDragInstances.splice(e, 1),
              0 === this._activeDragInstances.length &&
                this._clearGlobalListeners());
          }
          isDragging(t) {
            return this._activeDragInstances.indexOf(t) > -1;
          }
          scrolled(t) {
            const e = [this.scroll];
            return (
              t &&
                t !== this._document &&
                e.push(
                  new Rt.y((s) =>
                    this._ngZone.runOutsideAngular(() => {
                      const a = (l) => {
                        this._activeDragInstances.length && s.next(l);
                      };
                      return (
                        t.addEventListener('scroll', a, !0),
                        () => {
                          t.removeEventListener('scroll', a, !0);
                        }
                      );
                    })
                  )
                ),
              (0, q.T)(...e)
            );
          }
          ngOnDestroy() {
            this._dragInstances.forEach((t) => this.removeDragItem(t)),
              this._dropInstances.forEach((t) => this.removeDropContainer(t)),
              this._clearGlobalListeners(),
              this.pointerMove.complete(),
              this.pointerUp.complete();
          }
          _clearGlobalListeners() {
            this._globalListeners.forEach((t, e) => {
              this._document.removeEventListener(e, t.handler, t.options);
            }),
              this._globalListeners.clear();
          }
          static #t = (this.ɵfac = function (e) {
            return new (e || o)(n.LFG(n.R0b), n.LFG(p.K0));
          });
          static #e = (this.ɵprov = n.Yz7({
            token: o,
            factory: o.ɵfac,
            providedIn: 'root',
          }));
        }
        return o;
      })();
      const we = { dragStartThreshold: 5, pointerDirectionChangeThreshold: 5 };
      let mt = (() => {
          class o {
            constructor(t, e, s, r) {
              (this._document = t),
                (this._ngZone = e),
                (this._viewportRuler = s),
                (this._dragDropRegistry = r);
            }
            createDrag(t, e = we) {
              return new _e(
                t,
                e,
                this._document,
                this._ngZone,
                this._viewportRuler,
                this._dragDropRegistry
              );
            }
            createDropList(t) {
              return new De(
                t,
                this._dragDropRegistry,
                this._document,
                this._ngZone,
                this._viewportRuler
              );
            }
            static #t = (this.ɵfac = function (e) {
              return new (e || o)(
                n.LFG(p.K0),
                n.LFG(n.R0b),
                n.LFG(Pt.rL),
                n.LFG(be)
              );
            });
            static #e = (this.ɵprov = n.Yz7({
              token: o,
              factory: o.ɵfac,
              providedIn: 'root',
            }));
          }
          return o;
        })(),
        Qt = (() => {
          class o {
            _document;
            _dialogService;
            _dragDrop;
            rendererFactory;
            _renderer2;
            constructor(t, e, s, r) {
              (this._document = t),
                (this._dialogService = e),
                (this._dragDrop = s),
                (this.rendererFactory = r),
                (this._renderer2 = r.createRenderer(void 0, null));
            }
            open(t, e) {
              return this._dialogService.open(t, e);
            }
            closeAll() {
              this._dialogService.closeAll();
            }
            openAlert(t) {
              const e = this._createConfig(t),
                s = this._dialogService.open(lt, e),
                r = s.componentInstance;
              return (
                (r.title = t.title),
                (r.message = t.message),
                t.closeButton && (r.closeButton = t.closeButton),
                s
              );
            }
            openConfirm(t) {
              const e = this._createConfig(t),
                s = this._dialogService.open(ct, e),
                r = s.componentInstance;
              return (
                (r.title = t.title),
                (r.message = t.message),
                t.acceptButton && (r.acceptButton = t.acceptButton),
                t.isDestructive && (r.isDestructive = t.isDestructive),
                t.cancelButton && (r.cancelButton = t.cancelButton),
                s
              );
            }
            openPrompt(t) {
              const e = this._createConfig(t),
                s = this._dialogService.open(ht, e),
                r = s.componentInstance;
              return (
                (r.title = t.title),
                (r.message = t.message),
                (r.value = t.value),
                t.acceptButton && (r.acceptButton = t.acceptButton),
                t.cancelButton && (r.cancelButton = t.cancelButton),
                s
              );
            }
            openDraggable({
              component: t,
              config: e,
              dragHandleSelectors: s,
              draggableClass: r,
            }) {
              const a = this._dialogService.open(t, e),
                l = new _.x();
              return (
                a.afterOpened().subscribe(() => {
                  const d = this._document.getElementById(a.id);
                  if (!d) return;
                  const u = this._dragDrop.createDrag(d);
                  if (
                    (r && this._renderer2.addClass(d.firstElementChild, r),
                    s && s.length)
                  ) {
                    const y = s.reduce(
                      (x, D) => [...x, ...Array.from(d.querySelectorAll(D))],
                      []
                    );
                    y.length > 0 && u.withHandles(y);
                  }
                  const m = d.closest('.cdk-overlay-pane');
                  m && u.withRootElement(m);
                  const v = d.closest('.cdk-overlay-container');
                  v && u.withBoundaryElement(v), l.next(u);
                }),
                { matDialogRef: a, dragRefSubject: l }
              );
            }
            _createConfig(t) {
              const e = new S.vA();
              return (e.width = '400px'), Object.assign(e, t), e;
            }
            static ɵfac = function (e) {
              return new (e || o)(
                n.LFG(p.K0),
                n.LFG(S.uw),
                n.LFG(mt),
                n.LFG(n.FYo)
              );
            };
            static ɵprov = n.Yz7({ token: o, factory: o.ɵfac });
          }
          return o;
        })();
      g(73545);
      var Ie = g(81274),
        Oe = g(92596),
        ke = g(30617);
      let Le = (() => {
        class o {
          static ɵfac = function (e) {
            return new (e || o)();
          };
          static ɵmod = n.oAB({ type: o });
          static ɵinj = n.cJS({
            providers: [Qt],
            imports: [C.u5, p.ez, S.Is, J.c, A.ot, Ie.g0, Oe.AV, ke.Ps],
          });
        }
        return o;
      })();
      var O = (function (o) {
          return (
            (o.topRight = 'topRight'),
            (o.bottomRight = 'bottomRight'),
            (o.bottomLeft = 'bottomLeft'),
            (o.topLeft = 'topLeft'),
            o
          );
        })(O || {}),
        W = (function (o) {
          return (o.nesw = 'nesw-resize'), (o.nwse = 'nwse-resize'), o;
        })(W || {}),
        U = (function (o) {
          return (o.top = 'top'), (o.bottom = 'bottom'), o;
        })(U || {}),
        $ = (function (o) {
          return (o.right = 'right'), (o.left = 'left'), o;
        })($ || {});
      const wt = '16px';
      function z(o) {
        return parseFloat((o || '').replace('px', ''));
      }
      function w(o, i, t) {
        return Math.min(Math.max(i, o), t);
      }
      class Me {
        _document;
        _renderer2;
        _dialogRef;
        _dragRef;
        cornerElements = [];
        pointerDownSubs = [];
        constructor(i, t, e, s) {
          (this._document = i),
            (this._renderer2 = t),
            (this._dialogRef = e),
            (this._dragRef = s),
            this._initialPositionReset(),
            this._attachCorners();
        }
        attach() {
          this.detach(), this._attachCorners();
        }
        detach() {
          this.pointerDownSubs.forEach((i) => i.unsubscribe()),
            (this.pointerDownSubs = []),
            this.cornerElements.forEach((i) =>
              this._renderer2.removeChild(this._getDialogWrapper(), i)
            ),
            (this.cornerElements = []);
        }
        _getDialogWrapper() {
          return (this._document.getElementById(this._dialogRef.id) || {})
            .parentElement;
        }
        _getViewportDimensions() {
          return this._getDialogWrapper()?.parentElement?.getBoundingClientRect();
        }
        _getDialogWrapperDimensions() {
          const i = this._getDialogWrapper();
          if (!i) return { width: 0, height: 0 };
          const t = getComputedStyle(i);
          return { width: z(t.width), height: z(t.height) };
        }
        _initialPositionReset() {
          const i = this._getViewportDimensions()?.right ?? 0,
            t = this._getViewportDimensions()?.bottom ?? 0,
            { width: e, height: s } = this._getDialogWrapperDimensions(),
            r = this._getDialogWrapper()?.style,
            a = r?.marginRight,
            l = r?.marginLeft,
            c = r?.marginBottom,
            h = r?.marginTop;
          let d, u;
          (d = l ? z(l) : a ? i - z(a) - e : (i - e) / 2),
            (u = h ? z(h) : c ? t - z(c) - s : (t - s) / 2),
            this._dialogRef.updatePosition({
              top: '0px',
              right: '0px',
              bottom: '0px',
              left: '0px',
            }),
            this._dragRef.setFreeDragPosition({ x: d, y: u });
        }
        _attachCorners() {
          Object.values(O).forEach((i) => {
            const t = this._renderer2.createElement('div');
            let e, s, r;
            if (
              ((this.cornerElements = [...this.cornerElements, t]),
              this._renderer2.setStyle(t, 'position', 'absolute'),
              this._renderer2.setStyle(t, 'width', wt),
              this._renderer2.setStyle(t, 'height', wt),
              this._renderer2.appendChild(this._getDialogWrapper(), t),
              i === O.topRight)
            )
              (e = W.nesw), (s = U.top), (r = $.right);
            else if (i === O.bottomRight) {
              (e = W.nwse), (s = U.bottom), (r = $.right);
              const l = this._renderer2.createElement('i');
              this._renderer2.addClass(l, 'material-icons'),
                this._renderer2.appendChild(
                  l,
                  this._renderer2.createText('filter_list')
                ),
                this._renderer2.appendChild(t, l),
                this._renderer2.setStyle(
                  l,
                  'transform',
                  'rotate(315deg) translate(0px, 0px)'
                ),
                this._renderer2.setStyle(l, 'font-size', wt);
            } else
              i === O.bottomLeft
                ? ((e = W.nesw), (s = U.bottom), (r = $.left))
                : ((e = W.nwse), (s = U.top), (r = $.left));
            this._renderer2.setStyle(t, s, '0px'),
              this._renderer2.setStyle(t, r, '0px'),
              this._renderer2.setStyle(t, 'cursor', e);
            const a = (0, L.R)(t, 'pointerdown').subscribe((l) => {
              this._handleMouseDown(l, i);
            });
            this.pointerDownSubs = [...this.pointerDownSubs, a];
          });
        }
        _handleMouseDown(i, t) {
          this._renderer2.setStyle(this._document.body, 'user-select', 'none');
          const { width: e, height: s } = this._getDialogWrapperDimensions(),
            r = i.pageX,
            a = i.pageY,
            { x: l, y: c } = this._dragRef.getFreeDragPosition(),
            h = this._getDialogWrapper()?.getBoundingClientRect(),
            d = h?.bottom ?? 0,
            u = h?.right ?? 0,
            m = this._getViewportDimensions()?.right ?? 0,
            v = this._getViewportDimensions()?.bottom ?? 0,
            y = (0, L.R)(window, 'pointermove').subscribe((D) => {
              D.preventDefault();
              const k = w(0, D.pageY, v) - a,
                I = w(0, D.pageX, m) - r;
              let P,
                E,
                K = 0,
                Q = 0;
              t === O.topRight
                ? ((P = w(200, s - k, v)),
                  (E = w(200, e + I, m)),
                  (K = w(0, c + k, d - P)),
                  (Q = l))
                : t === O.bottomRight
                ? ((P = w(200, s + k, v)),
                  (E = w(200, e + I, m)),
                  (K = c),
                  (Q = l))
                : t === O.bottomLeft
                ? ((P = w(200, s + k, v)),
                  (E = w(200, e - I, m)),
                  (K = c),
                  (Q = w(0, l + I, u - E)))
                : ((P = w(200, s - k, v)),
                  (E = w(200, e - I, m)),
                  (Q = w(0, l + I, u - E)),
                  (K = w(0, c + k, d - P))),
                this._dialogRef.updateSize(`${E}px`, `${P}px`),
                this._dragRef.setFreeDragPosition({ x: Q, y: K });
            }),
            x = (0, q.T)(
              (0, L.R)(window, 'pointerup'),
              (0, L.R)(window, 'pointercancel')
            ).subscribe(() => {
              this._renderer2.removeStyle(this._document.body, 'user-select'),
                y.unsubscribe(),
                x.unsubscribe();
            });
        }
      }
    },
    73545: (Jt, ot, g) => {
      g.d(ot, { y: () => rt });
      var p = g(19212),
        C = g(32296),
        S = g(81274),
        J = g(92596),
        A = g(30617);
      const n = ['*'];
      let rt = (() => {
        class B {
          toolbarColor;
          docked = !1;
          title;
          toggleDockedStateLabel;
          closeLabel;
          dockToggled = new p.vpe();
          closed = new p.vpe();
          toolbarHeight = 56;
          toggleDockedState() {
            this.dockToggled.emit(this.docked);
          }
          static ɵfac = function (F) {
            return new (F || B)();
          };
          static ɵcmp = p.Xpm({
            type: B,
            selectors: [['td-window-dialog']],
            inputs: {
              toolbarColor: 'toolbarColor',
              docked: 'docked',
              title: 'title',
              toggleDockedStateLabel: 'toggleDockedStateLabel',
              closeLabel: 'closeLabel',
            },
            outputs: { dockToggled: 'dockToggled', closed: 'closed' },
            ngContentSelectors: n,
            decls: 9,
            vars: 11,
            consts: [
              [1, 'td-window-dialog-toolbar', 3, 'color'],
              ['layout', 'row', 'layout-align', 'start center', 'flex', ''],
              [
                'flex',
                '',
                1,
                'mat-title',
                'td-window-dialog-title',
                'truncate',
              ],
              [
                'mat-icon-button',
                '',
                1,
                'td-window-dialog-close',
                3,
                'matTooltip',
                'click',
              ],
            ],
            template: function (F, b) {
              if (
                (1 & F &&
                  (p.F$t(),
                  p.TgZ(0, 'mat-toolbar', 0)(1, 'mat-toolbar-row')(2, 'div', 1)(
                    3,
                    'span',
                    2
                  ),
                  p._uU(4),
                  p.qZA(),
                  p.TgZ(5, 'button', 3),
                  p.NdJ('click', function () {
                    return b.closed.emit();
                  }),
                  p.TgZ(6, 'mat-icon'),
                  p._uU(7, 'close'),
                  p.qZA()()()()(),
                  p.Hsn(8)),
                2 & F)
              ) {
                let R;
                p.Udp(
                  'min-height',
                  b.toolbarHeight,
                  'px'
                )('cursor', b.docked ? 'inherit' : 'move'),
                  p.Q6J('color', b.toolbarColor),
                  p.xp6(1),
                  p.Udp('height', b.toolbarHeight, 'px'),
                  p.xp6(3),
                  p.hij(' ', b.title, ' '),
                  p.xp6(1),
                  p.Q6J(
                    'matTooltip',
                    null !== (R = b.closeLabel) && void 0 !== R ? R : ''
                  ),
                  p.uIk('data-test', 'close-button'),
                  p.xp6(1),
                  p.uIk('aria-label', b.closeLabel);
              }
            },
            dependencies: [C.RK, S.Ye, S.rD, J.gM, A.Hw],
            styles: [
              '[_nghost-%COMP%]{height:100%;display:flex;flex-direction:column}.truncate[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.td-window-dialog-toolbar[_ngcontent-%COMP%]{background:none}.td-window-dialog-title[_ngcontent-%COMP%]{margin-bottom:0}.td-window-dialog-close[_ngcontent-%COMP%]{margin-right:-8px}  .td-window-dialog .mat-dialog-container{padding:0}',
            ],
            changeDetection: 0,
          });
        }
        return B;
      })();
    },
  },
]);
