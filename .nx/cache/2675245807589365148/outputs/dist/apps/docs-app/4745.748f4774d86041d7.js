'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [4745],
  {
    94745: (x, g, o) => {
      o.r(g), o.d(g, { SankeyDemoModule: () => $ });
      var a = o(96814),
        h = o(98525),
        d = o(30617),
        T = o(23421),
        v = o(57337),
        l = o(52514),
        C = o(96535),
        c = o(52787),
        t = o(19212),
        r = o(31791),
        s = o(15861),
        m = o(76856),
        f = o(1691),
        y = o(33822),
        O = o(84180),
        b = o(64170),
        M = o(23680);
      function Z(e, p) {
        if ((1 & e && (t.TgZ(0, 'mat-option', 8), t._uU(1), t.qZA()), 2 & e)) {
          const n = p.$implicit;
          t.Q6J('value', n), t.xp6(1), t.hij(' ', n, ' ');
        }
      }
      function A(e, p) {
        if (
          (1 & e &&
            (t.ynx(0),
            t.TgZ(1, 'mat-icon'),
            t._uU(2, 'device_hub'),
            t.qZA(),
            t.TgZ(3, 'span', 10),
            t._uU(4),
            t.qZA(),
            t.BQk()),
          2 & e)
        ) {
          const n = t.oxw(2).$implicit;
          t.xp6(1),
            t.Udp('color', n.color),
            t.xp6(3),
            t.hij(' ', n.data.name, ' ');
        }
      }
      function B(e, p) {
        if (
          (1 & e &&
            (t.ynx(0),
            t.TgZ(1, 'span', 10),
            t._uU(2),
            t.qZA(),
            t.TgZ(3, 'mat-icon'),
            t._uU(4, 'arrow_forward'),
            t.qZA(),
            t.TgZ(5, 'span', 11),
            t._uU(6),
            t.qZA(),
            t.BQk()),
          2 & e)
        ) {
          const n = t.oxw(2).$implicit;
          t.xp6(2),
            t.hij(' ', n.data.source, ' '),
            t.xp6(4),
            t.AsE('', n.data.target, ' : ', n.value, '');
        }
      }
      function z(e, p) {
        if (
          (1 & e &&
            (t.ynx(0),
            t.TgZ(1, 'div', 0),
            t.YNc(2, A, 5, 3, 'ng-container', 9)(3, B, 7, 3, 'ng-container', 9),
            t.qZA(),
            t.BQk()),
          2 & e)
        ) {
          const n = t.oxw().$implicit;
          t.xp6(2),
            t.Q6J('ngIf', 'node' === n.dataType),
            t.xp6(1),
            t.Q6J('ngIf', 'edge' === n.dataType);
        }
      }
      function F(e, p) {
        1 & e && t.YNc(0, z, 4, 2, 'ng-container', 9),
          2 & e && t.Q6J('ngIf', p.$implicit);
      }
      const Q = () => ({ name: 'a' }),
        E = () => ({ name: 'b' }),
        k = () => ({ name: 'a1' }),
        w = () => ({ name: 'a2' }),
        J = () => ({ name: 'b1' }),
        N = () => ({ name: 'c' }),
        _ = (e, p, n, i, u, D) => [e, p, n, i, u, D],
        R = () => ({ source: 'a', target: 'a1', value: 5 }),
        U = () => ({ source: 'a', target: 'a2', value: 3 }),
        G = () => ({ source: 'b', target: 'b1', value: 8 }),
        P = () => ({ source: 'a', target: 'b1', value: 3 }),
        j = () => ({ source: 'b1', target: 'a1', value: 1 }),
        I = () => ({ source: 'b1', target: 'c', value: 2 });
      let Y = (() => {
        class e {
          _cdr;
          themeSelector;
          themes = (0, T.RC)();
          selectedTheme;
          config = {
            xAxis: { show: !1 },
            yAxis: { show: !1 },
            grid: { borderColor: 'transparent' },
            color: [
              '#67001f',
              '#b2182b',
              '#d6604d',
              '#f4a582',
              '#fddbc7',
              '#d1e5f0',
              '#92c5de',
              '#4393c3',
              '#2166ac',
              '#053061',
            ],
            tooltip: { trigger: 'item', triggerOn: 'mousemove' },
            animation: !1,
            series: [
              {
                type: 'sankey',
                right: 40,
                left: 40,
                focusNodeAdjacency: 'allEdges',
                data: [
                  { name: 'a' },
                  { name: 'b' },
                  { name: 'a1' },
                  { name: 'b1' },
                  { name: 'c' },
                  { name: 'e' },
                ],
                links: [
                  { source: 'a', target: 'a1', value: 5 },
                  { source: 'e', target: 'b', value: 3 },
                  { source: 'a', target: 'b1', value: 3 },
                  { source: 'b1', target: 'a1', value: 1 },
                  { source: 'b1', target: 'c', value: 2 },
                  { source: 'b', target: 'c', value: 1 },
                ],
                label: { position: 'top' },
                lineStyle: { normal: { color: 'source', curveness: 0.5 } },
              },
            ],
          };
          constructor(n, i) {
            (this._cdr = n), (this.themeSelector = i);
          }
          ngOnInit() {
            var n = this;
            return (0, s.Z)(function* () {
              (n.selectedTheme = n.themeSelector.selected),
                n._cdr.markForCheck();
            })();
          }
          selectChartTheme(n) {
            this.themeSelector.select(n);
          }
          static ɵfac = function (i) {
            return new (i || e)(t.Y36(t.sBO), t.Y36(m.n));
          };
          static ɵcmp = t.Xpm({
            type: e,
            selectors: [['sankey-demo-basic']],
            decls: 11,
            vars: 39,
            consts: [
              ['layout', 'row', 'layout-align', 'start center'],
              [
                'hide-xs',
                '',
                1,
                'mat-subtitle-1',
                'pad-left',
                'pad-right',
                'push-bottom-none',
              ],
              [3, 'value', 'valueChange'],
              [3, 'value', 4, 'ngFor', 'ngForOf'],
              [3, 'themeName'],
              [
                'td-sankey',
                '',
                3,
                'focusNodeAdjacency',
                'right',
                'left',
                'data',
                'links',
              ],
              [3, 'trigger'],
              ['tdTooltipFormatter', ''],
              [3, 'value'],
              [4, 'ngIf'],
              [1, 'mat-caption', 'pad-left-sm'],
              [1, 'mat-caption'],
            ],
            template: function (i, u) {
              1 & i &&
                (t.TgZ(0, 'div', 0)(1, 'div', 1),
                t._uU(2, ' Chart Theme: '),
                t.qZA(),
                t.TgZ(3, 'mat-form-field')(4, 'mat-select', 2),
                t.NdJ('valueChange', function (S) {
                  return (u.selectedTheme = S);
                })('valueChange', function (S) {
                  return u.selectChartTheme(S);
                }),
                t.YNc(5, Z, 2, 2, 'mat-option', 3),
                t.qZA()()(),
                t.TgZ(6, 'td-chart', 4),
                t.ALo(7, 'async'),
                t.TgZ(8, 'td-chart-series', 5)(9, 'td-chart-tooltip', 6),
                t.YNc(10, F, 1, 1, 'ng-template', 7),
                t.qZA()()()),
                2 & i &&
                  (t.xp6(4),
                  t.Q6J('value', u.selectedTheme),
                  t.xp6(1),
                  t.Q6J('ngForOf', u.themes),
                  t.xp6(1),
                  t.Udp('height', 300, 'px'),
                  t.Q6J('themeName', t.lcZ(7, 11, u.themeSelector.selected$)),
                  t.xp6(2),
                  t.Q6J('focusNodeAdjacency', 'allEdges')('right', 40)(
                    'left',
                    40
                  )(
                    'data',
                    t.HTZ(
                      19,
                      _,
                      t.DdM(13, Q),
                      t.DdM(14, E),
                      t.DdM(15, k),
                      t.DdM(16, w),
                      t.DdM(17, J),
                      t.DdM(18, N)
                    )
                  )(
                    'links',
                    t.HTZ(
                      32,
                      _,
                      t.DdM(26, R),
                      t.DdM(27, U),
                      t.DdM(28, G),
                      t.DdM(29, P),
                      t.DdM(30, j),
                      t.DdM(31, I)
                    )
                  ),
                  t.xp6(1),
                  t.Q6J('trigger', 'item'));
            },
            dependencies: [
              f.L,
              y.HN,
              y.dA,
              O.x,
              a.sg,
              a.O5,
              b.KE,
              h.gD,
              M.ey,
              d.Hw,
              a.Ov,
            ],
            changeDetection: 0,
          });
        }
        return e;
      })();
      const L = [
        {
          path: '',
          component: (() => {
            class e {
              static ɵfac = function (i) {
                return new (i || e)();
              };
              static ɵcmp = t.Xpm({
                type: e,
                selectors: [['sankey-demo']],
                decls: 2,
                vars: 2,
                consts: [[3, 'demoId', 'demoTitle']],
                template: function (i, u) {
                  1 & i &&
                    (t.TgZ(0, 'demo-component', 0),
                    t._UZ(1, 'sankey-demo-basic'),
                    t.qZA()),
                    2 & i &&
                      t.Q6J('demoId', 'sankey-demo-basic')(
                        'demoTitle',
                        'Basic'
                      );
                },
                dependencies: [r.z, Y],
              });
            }
            return e;
          })(),
        },
      ];
      let H = (() => {
        class e {
          static ɵfac = function (i) {
            return new (i || e)();
          };
          static ɵmod = t.oAB({ type: e });
          static ɵinj = t.cJS({ imports: [c.Bz.forChild(L), c.Bz] });
        }
        return e;
      })();
      var X = o(86709);
      let $ = (() => {
        class e {
          static ɵfac = function (i) {
            return new (i || e)();
          };
          static ɵmod = t.oAB({ type: e });
          static ɵinj = t.cJS({
            imports: [C.l, H, T.MX, v.NF, l.Po, X.Xi, a.ez, h.LD, d.Ps],
          });
        }
        return e;
      })();
    },
    52514: (x, g, o) => {
      o.d(g, { Po: () => v });
      var a = o(96814),
        d = (o(13063), o(19212));
      let v = (() => {
        class l {
          static ɵfac = function (t) {
            return new (t || l)();
          };
          static ɵmod = d.oAB({ type: l });
          static ɵinj = d.cJS({ imports: [a.ez] });
        }
        return l;
      })();
    },
    13063: (x, g, o) => {
      o.d(g, { G: () => l, O: () => C });
      var a = o(19212),
        h = o(23421),
        d = o(96814);
      const T = ['toolboxContent'];
      function v(c, t) {}
      let l = (() => {
          class c {
            static ɵfac = function (s) {
              return new (s || c)();
            };
            static ɵdir = a.lG2({
              type: c,
              selectors: [['ng-template', 'tdViewDataFormatter', '']],
            });
          }
          return c;
        })(),
        C = (() => {
          class c {
            _changeDetectorRef;
            _elementRef;
            _optionsService;
            _state = {};
            config = {};
            show = !0;
            trigger;
            orient;
            itemSize;
            itemGap;
            showTitle = !0;
            label;
            feature;
            iconStyle;
            zlevel;
            z;
            transitionDuration = 0.5;
            left = 'auto';
            top = 'auto';
            right = 'auto';
            bottom = 'auto';
            width = 'auto';
            height = 'auto';
            formatterTemplate;
            fullTemplate;
            constructor(r, s, m) {
              (this._changeDetectorRef = r),
                (this._elementRef = s),
                (this._optionsService = m);
            }
            ngOnChanges() {
              this._setOptions();
            }
            ngOnDestroy() {
              this._removeOption();
            }
            _setOptions() {
              this._checkFormatterTemplate();
              const r = (0, h.t8)(
                this._state,
                {
                  show: this.show,
                  name: this.trigger,
                  orient: this.orient,
                  itemSize: this.itemSize,
                  itemGap: this.itemGap,
                  showTitle: this.showTitle,
                  label: this.label,
                  feature: this.feature,
                  iconStyle: this.iconStyle,
                  zlevel: this.zlevel,
                  z: this.z,
                  transitionDuration: this.transitionDuration,
                  left: this.left,
                  top: this.top,
                  right: this.right,
                  bottom: this.bottom,
                  width: this.width,
                  height: this.height,
                },
                this.config ? this.config : {}
              );
              this._optionsService.setOption('toolbox', r);
            }
            _removeOption() {
              this._optionsService.clearOption('toolbox');
            }
            _checkFormatterTemplate() {
              this.formatterTemplate &&
                (this.feature = {
                  ...this.feature,
                  dataView: {
                    ...this.feature?.dataView,
                    optionToContent: this._optionToContentFormatter(),
                  },
                });
            }
            _optionToContentFormatter() {
              return () => (
                this._changeDetectorRef.markForCheck(),
                this._elementRef.nativeElement.innerHTML
              );
            }
            static ɵfac = function (s) {
              return new (s || c)(a.Y36(a.sBO), a.Y36(a.SBq), a.Y36(h.ij));
            };
            static ɵcmp = a.Xpm({
              type: c,
              selectors: [['td-chart-toolbox']],
              contentQueries: function (s, m, f) {
                if ((1 & s && a.Suo(f, l, 5, a.Rgc), 2 & s)) {
                  let y;
                  a.iGM((y = a.CRH())) && (m.formatterTemplate = y.first);
                }
              },
              viewQuery: function (s, m) {
                if ((1 & s && a.Gf(T, 7), 2 & s)) {
                  let f;
                  a.iGM((f = a.CRH())) && (m.fullTemplate = f.first);
                }
              },
              inputs: {
                config: 'config',
                show: 'show',
                trigger: 'trigger',
                orient: 'orient',
                itemSize: 'itemSize',
                itemGap: 'itemGap',
                showTitle: 'showTitle',
                label: 'label',
                feature: 'feature',
                iconStyle: 'iconStyle',
                zlevel: 'zlevel',
                z: 'z',
                transitionDuration: 'transitionDuration',
                left: 'left',
                top: 'top',
                right: 'right',
                bottom: 'bottom',
                width: 'width',
                height: 'height',
              },
              features: [a.TTD],
              decls: 2,
              vars: 1,
              consts: [
                [3, 'ngTemplateOutlet'],
                ['toolboxContent', ''],
              ],
              template: function (s, m) {
                1 & s && a.YNc(0, v, 0, 0, 'ng-template', 0, 1, a.W1O),
                  2 & s && a.Q6J('ngTemplateOutlet', m.formatterTemplate);
              },
              dependencies: [d.tP],
              encapsulation: 2,
              changeDetection: 0,
            });
          }
          return c;
        })();
    },
  },
]);
