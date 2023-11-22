'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [5133],
  {
    25133: (I, M, t) => {
      t.d(M, { UE: () => O });
      var e = t(96814),
        r = t(56223),
        o = t(2032),
        u = t(30617),
        g = t(32296),
        C = t(19212);
      let O = (() => {
        class p {
          static ɵfac = function (c) {
            return new (c || p)();
          };
          static ɵmod = C.oAB({ type: p });
          static ɵinj = C.cJS({ imports: [r.u5, e.ez, o.c, u.Ps, g.ot] });
        }
        return p;
      })();
      t(53007), t(85483);
    },
    53007: (I, M, t) => {
      t.d(M, { K: () => b });
      var e = t(19212),
        r = t(56223),
        o = t(86825),
        u = t(85483),
        C = (t(72420), t(96814)),
        O = t(30617),
        T = t(32296);
      function P(c, E) {
        if ((1 & c && (e.TgZ(0, 'mat-icon'), e._uU(1), e.qZA()), 2 & c)) {
          const s = e.oxw();
          e.xp6(1), e.Oqu(s.backIcon);
        }
      }
      function p(c, E) {
        if ((1 & c && (e.TgZ(0, 'mat-icon'), e._uU(1), e.qZA()), 2 & c)) {
          const s = e.oxw();
          e.xp6(1), e.Oqu(s.searchIcon);
        }
      }
      let b = (() => {
        class c {
          _changeDetectorRef;
          _searchVisible = !1;
          _searchInput;
          get searchVisible() {
            return this._searchVisible;
          }
          backIcon = 'search';
          searchIcon = 'search';
          clearIcon = 'cancel';
          showUnderline = !1;
          debounce = 400;
          alwaysVisible = !1;
          placeholder = '';
          value;
          searchDebounce = new e.vpe();
          search = new e.vpe();
          clear = new e.vpe();
          blurSearch = new e.vpe();
          constructor(s) {
            this._changeDetectorRef = s;
          }
          writeValue(s) {
            (this.value = s), this._changeDetectorRef.markForCheck();
          }
          registerOnChange() {}
          registerOnTouched() {}
          searchClicked() {
            !this.alwaysVisible && this._searchVisible
              ? ((this.value = ''), this.handleClear())
              : (this.alwaysVisible || !this._searchVisible) &&
                this._searchInput?.focus(),
              this.toggleVisibility();
          }
          toggleVisibility() {
            (this._searchVisible = !this._searchVisible),
              this._changeDetectorRef.markForCheck();
          }
          handleSearchDebounce(s) {
            this.searchDebounce.emit(s);
          }
          handleSearch(s) {
            this.search.emit(s);
          }
          handleClear() {
            this.clear.emit();
          }
          handleBlur() {
            this.blurSearch.emit();
          }
          static ɵfac = function (d) {
            return new (d || c)(e.Y36(e.sBO));
          };
          static ɵcmp = e.Xpm({
            type: c,
            selectors: [['td-search-box']],
            viewQuery: function (d, n) {
              if ((1 & d && e.Gf(u.i4, 7), 2 & d)) {
                let _;
                e.iGM((_ = e.CRH())) && (n._searchInput = _.first);
              }
            },
            inputs: {
              backIcon: 'backIcon',
              searchIcon: 'searchIcon',
              clearIcon: 'clearIcon',
              showUnderline: 'showUnderline',
              debounce: 'debounce',
              alwaysVisible: 'alwaysVisible',
              placeholder: 'placeholder',
              value: 'value',
            },
            outputs: {
              searchDebounce: 'searchDebounce',
              search: 'search',
              clear: 'clear',
              blurSearch: 'blurSearch',
            },
            features: [
              e._Bn([
                { provide: r.JU, useExisting: (0, e.Gpc)(() => c), multi: !0 },
              ]),
            ],
            decls: 6,
            vars: 8,
            consts: [
              [1, 'td-search-box'],
              [
                'mat-icon-button',
                '',
                'type',
                'button',
                1,
                'td-search-icon',
                3,
                'click',
              ],
              [4, 'ngIf'],
              [
                3,
                'debounce',
                'ngModel',
                'showUnderline',
                'placeholder',
                'clearIcon',
                'ngModelChange',
                'searchDebounce',
                'search',
                'clear',
                'blur',
              ],
              ['searchInput', ''],
            ],
            template: function (d, n) {
              1 & d &&
                (e.TgZ(0, 'div', 0)(1, 'button', 1),
                e.NdJ('click', function () {
                  return n.searchClicked();
                }),
                e.YNc(2, P, 2, 1, 'mat-icon', 2)(3, p, 2, 1, 'mat-icon', 2),
                e.qZA(),
                e.TgZ(4, 'td-search-input', 3, 4),
                e.NdJ('ngModelChange', function (m) {
                  return (n.value = m);
                })('searchDebounce', function (m) {
                  return n.handleSearchDebounce(m);
                })('search', function (m) {
                  return n.handleSearch(m);
                })('clear', function () {
                  return n.handleClear(), n.toggleVisibility();
                })('blur', function () {
                  return n.handleBlur();
                }),
                e.qZA()()),
                2 & d &&
                  (e.xp6(2),
                  e.Q6J('ngIf', n.searchVisible && !n.alwaysVisible),
                  e.xp6(1),
                  e.Q6J('ngIf', !n.searchVisible || n.alwaysVisible),
                  e.xp6(1),
                  e.Q6J('@inputState', n.alwaysVisible || n.searchVisible)(
                    'debounce',
                    n.debounce
                  )('ngModel', n.value)('showUnderline', n.showUnderline)(
                    'placeholder',
                    n.placeholder
                  )('clearIcon', n.clearIcon));
            },
            dependencies: [r.JJ, r.On, C.O5, O.Hw, T.RK, u.i4],
            styles: [
              '[_nghost-%COMP%]{display:block}.td-search-box[_ngcontent-%COMP%]{box-sizing:border-box;display:flex;flex-direction:row;align-content:center;max-width:100%;justify-content:flex-end}.td-search-box[_ngcontent-%COMP%]   .td-search-icon[_ngcontent-%COMP%]{margin-top:4px}.td-search-box[_ngcontent-%COMP%]   td-search-input[_ngcontent-%COMP%]{margin-left:12px}  [dir=rtl] .td-search-box td-search-input{margin-right:12px;margin-left:0!important}.td-search-box[_ngcontent-%COMP%]   td-search-input[_ngcontent-%COMP%]     .mat-form.field.mat-form-field-appearance-legacy .mat-form-field-wrapper{padding-bottom:1em}.mat-toolbar   [_nghost-%COMP%]     .mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:#fff}',
            ],
            data: {
              animation: [
                (0, o.X$)('inputState', [
                  (0, o.SB)('0', (0, o.oB)({ width: '0%', margin: '0px' })),
                  (0, o.SB)('1', (0, o.oB)({ width: '100%', margin: o.l3 })),
                  (0, o.eR)('0 => 1', (0, o.jt)('200ms ease-in')),
                  (0, o.eR)('1 => 0', (0, o.jt)('200ms ease-out')),
                ]),
              ],
            },
            changeDetection: 0,
          });
        }
        return c;
      })();
    },
    85483: (I, M, t) => {
      t.d(M, { i4: () => R });
      var e = t(19212),
        r = t(86825),
        o = t(56223),
        u = t(2032),
        g = t(78645),
        C = t(92438),
        O = t(83620),
        T = t(836),
        P = t(59773),
        p = t(1904),
        B = t(49388),
        b = t(96814),
        c = t(64170),
        E = t(30617),
        s = t(32296);
      const d = ['searchElement'];
      function n(l, D) {}
      function _(l, D) {
        if (
          (1 & l &&
            (e.TgZ(0, 'span', 6), e.YNc(1, n, 0, 0, 'ng-template', 7), e.qZA()),
          2 & l)
        ) {
          e.oxw();
          const a = e.MAs(6);
          e.xp6(1), e.Q6J('ngTemplateOutlet', a);
        }
      }
      function m(l, D) {
        if (1 & l) {
          const a = e.EpF();
          e.TgZ(0, 'button', 8),
            e.NdJ('click', function () {
              e.CHM(a);
              const i = e.oxw();
              return e.KtG(i.clearSearch());
            }),
            e.TgZ(1, 'mat-icon'),
            e._uU(2),
            e.qZA()();
        }
        if (2 & l) {
          const a = e.oxw(),
            h = e.MAs(3);
          e.Q6J(
            '@searchState',
            h.value ? 'show' : a.isRTL ? 'hide-left' : 'hide-right'
          ),
            e.xp6(2),
            e.Oqu(a.clearIcon);
        }
      }
      const S = (0, p.b8)(
        class x {
          _changeDetectorRef;
          constructor(D) {
            this._changeDetectorRef = D;
          }
        }
      );
      let R = (() => {
        class l extends S {
          _dir;
          _changeDetectorRef;
          _ngZone;
          _input;
          _searchElement;
          appearance = 'outline';
          showUnderline = !1;
          debounce = 400;
          placeholder = '';
          clearIcon = 'cancel';
          value;
          searchDebounce = new e.vpe();
          search = new e.vpe();
          clear = new e.vpe();
          blurSearch = new e.vpe();
          get isRTL() {
            return !!this._dir && 'rtl' === this._dir.dir;
          }
          _destroy$ = new g.x();
          constructor(a, h, i) {
            super(h),
              (this._dir = a),
              (this._changeDetectorRef = h),
              (this._ngZone = i);
          }
          ngOnInit() {
            this._input?.ngControl?.valueChanges
              ?.pipe(
                (0, O.b)(this.debounce),
                (0, T.T)(1),
                (0, P.R)(this._destroy$)
              )
              .subscribe((a) => {
                this._searchTermChanged(a);
              }),
              this._ngZone.runOutsideAngular(() =>
                (0, C.R)(this._searchElement.nativeElement, 'search')
                  .pipe((0, P.R)(this._destroy$))
                  .subscribe(this._stopPropagation)
              );
          }
          ngOnDestroy() {
            this._destroy$.next();
          }
          focus() {
            this._input?.focus();
          }
          handleBlur() {
            this.blurSearch.emit();
          }
          handleSearch(a) {
            this._stopPropagation(a),
              'string' == typeof this.value && this.search.emit(this.value);
          }
          clearSearch() {
            (this.value = ''),
              this._changeDetectorRef.markForCheck(),
              this.clear.emit();
          }
          _searchTermChanged(a) {
            this.searchDebounce.emit(a);
          }
          _stopPropagation(a) {
            a.stopPropagation();
          }
          static ɵfac = function (h) {
            return new (h || l)(e.Y36(B.Lv, 8), e.Y36(e.sBO), e.Y36(e.R0b));
          };
          static ɵcmp = e.Xpm({
            type: l,
            selectors: [['td-search-input']],
            viewQuery: function (h, i) {
              if ((1 & h && (e.Gf(u.Nt, 7), e.Gf(d, 7, e.SBq)), 2 & h)) {
                let f;
                e.iGM((f = e.CRH())) && (i._input = f.first),
                  e.iGM((f = e.CRH())) && (i._searchElement = f.first);
              }
            },
            inputs: {
              appearance: 'appearance',
              showUnderline: 'showUnderline',
              debounce: 'debounce',
              placeholder: 'placeholder',
              clearIcon: 'clearIcon',
              value: 'value',
            },
            outputs: {
              searchDebounce: 'searchDebounce',
              search: 'search',
              clear: 'clear',
              blurSearch: 'blurSearch',
            },
            features: [
              e._Bn([
                { provide: o.JU, useExisting: (0, e.Gpc)(() => l), multi: !0 },
              ]),
              e.qOj,
            ],
            decls: 7,
            vars: 6,
            consts: [
              [1, 'td-search-input'],
              [1, 'td-search-input-field', 3, 'appearance'],
              [
                'matInput',
                '',
                'type',
                'search',
                3,
                'ngModel',
                'placeholder',
                'ngModelChange',
                'blur',
                'keyup.enter',
              ],
              ['searchElement', ''],
              ['matSuffix', '', 4, 'ngIf'],
              ['clearButton', ''],
              ['matSuffix', ''],
              [3, 'ngTemplateOutlet'],
              [
                'mat-icon-button',
                '',
                'type',
                'button',
                1,
                'td-search-input-clear',
                3,
                'click',
              ],
            ],
            template: function (h, i) {
              1 & h &&
                (e.TgZ(0, 'div', 0)(1, 'mat-form-field', 1)(2, 'input', 2, 3),
                e.NdJ('ngModelChange', function (v) {
                  return (i.value = v);
                })('blur', function () {
                  return i.handleBlur();
                })('keyup.enter', function (v) {
                  return i.handleSearch(v);
                }),
                e.qZA(),
                e.YNc(4, _, 2, 1, 'span', 4),
                e.qZA()(),
                e.YNc(5, m, 3, 2, 'ng-template', null, 5, e.W1O)),
                2 & h &&
                  (e.xp6(1),
                  e.ekj('mat-hide-underline', !i.showUnderline),
                  e.Q6J('appearance', i.appearance),
                  e.xp6(1),
                  e.Q6J('ngModel', i.value)('placeholder', i.placeholder),
                  e.xp6(2),
                  e.Q6J(
                    'ngIf',
                    'fill' === i.appearance ||
                      'outline' === i.appearance ||
                      'standard' === i.appearance
                  ));
            },
            dependencies: [
              o.Fj,
              o.JJ,
              o.On,
              b.O5,
              b.tP,
              u.Nt,
              c.KE,
              c.R9,
              E.Hw,
              s.RK,
            ],
            styles: [
              '[_nghost-%COMP%]   .td-search-input[_ngcontent-%COMP%]{overflow-x:hidden;box-sizing:border-box;display:flex;flex-direction:row;align-items:baseline;align-content:center;max-width:100%;justify-content:flex-end}[_nghost-%COMP%]   .td-search-input[_ngcontent-%COMP%]   .td-search-input-field[_ngcontent-%COMP%]{flex:1}[_nghost-%COMP%]   .td-search-input[_ngcontent-%COMP%]     mat-form-field .mat-mdc-form-field-subscript-wrapper{display:none}[_nghost-%COMP%]   .td-search-input[_ngcontent-%COMP%]     mat-form-field.mat-form-field-appearance-outline .mat-form-field-wrapper{padding-bottom:0}[_nghost-%COMP%]   .td-search-input[_ngcontent-%COMP%]     mat-form-field.mat-form-field-appearance-fill .mat-form-field-wrapper{padding-bottom:0}[_nghost-%COMP%]   .td-search-input[_ngcontent-%COMP%]     mat-form-field.mat-form-field-appearance-fill .mat-form-field-wrapper .mat-form-field-flex{height:52px}[_nghost-%COMP%]   .td-search-input[_ngcontent-%COMP%]     mat-form-field.mat-form-field-appearance-fill .mat-form-field-wrapper .mat-form-field-underline{bottom:0}[_nghost-%COMP%]   .td-search-input[_ngcontent-%COMP%]     mat-form-field.mat-form-field-appearance-standard .mat-form-field-wrapper{padding-bottom:0}[_nghost-%COMP%]   .td-search-input[_ngcontent-%COMP%]     mat-form-field.mat-form-field-appearance-standard .mat-form-field-wrapper .mat-form-field-infix{bottom:.4em}[_nghost-%COMP%]   .td-search-input[_ngcontent-%COMP%]     mat-form-field.mat-form-field-appearance-standard .mat-form-field-wrapper .mat-form-field-underline{bottom:0}[_nghost-%COMP%]   .td-search-input[_ngcontent-%COMP%]     mat-form-field .mat-input-element{caret-color:currentColor}[_nghost-%COMP%]   .td-search-input[_ngcontent-%COMP%]     mat-form-field.mat-hide-underline .mat-form-field-underline{display:none}[_nghost-%COMP%]   .td-search-input[_ngcontent-%COMP%]   .td-search-input-clear[_ngcontent-%COMP%]{flex:0 0 auto}',
            ],
            data: {
              animation: [
                (0, r.X$)('searchState', [
                  (0, r.SB)(
                    'hide-left',
                    (0, r.oB)({
                      transform: 'translateX(-150%)',
                      display: 'none',
                    })
                  ),
                  (0, r.SB)(
                    'hide-right',
                    (0, r.oB)({
                      transform: 'translateX(150%)',
                      display: 'none',
                    })
                  ),
                  (0, r.SB)(
                    'show',
                    (0, r.oB)({ transform: 'translateX(0%)', display: 'block' })
                  ),
                  (0, r.eR)('* => show', (0, r.jt)('200ms ease-in')),
                  (0, r.eR)('show => *', (0, r.jt)('200ms ease-out')),
                ]),
              ],
            },
            changeDetection: 0,
          });
        }
        return l;
      })();
    },
  },
]);
