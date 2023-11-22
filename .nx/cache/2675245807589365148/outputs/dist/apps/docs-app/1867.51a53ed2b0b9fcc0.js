'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [1867],
  {
    81867: (S, p, o) => {
      o.r(p), o.d(p, { LineDemoModule: () => X });
      var n = o(96814),
        m = o(98525),
        h = o(30617),
        g = o(23421),
        r = o(57337),
        c = o(52514),
        f = o(96535),
        a = o(52787),
        t = o(19212),
        d = o(31791),
        s = o(15861),
        u = o(76856),
        v = o(1691),
        x = o(15079),
        b = o(39967),
        O = o(33822),
        A = o(76413),
        L = o(90230),
        I = o(64170),
        Z = o(23680);
      function w(e, y) {
        if ((1 & e && (t.TgZ(0, 'mat-option', 10), t._uU(1), t.qZA()), 2 & e)) {
          const i = y.$implicit;
          t.Q6J('value', i), t.xp6(1), t.hij(' ', i, ' ');
        }
      }
      function z(e, y) {
        if (
          (1 & e &&
            (t.ynx(0),
            t.TgZ(1, 'div', 0)(2, 'mat-icon')(3, 'span', 12),
            t._uU(4, 'account_balance'),
            t.qZA()(),
            t.TgZ(5, 'span', 13),
            t._uU(6),
            t.qZA()(),
            t.TgZ(7, 'div', 14),
            t._uU(8),
            t.ALo(9, 'date'),
            t.qZA(),
            t.BQk()),
          2 & e)
        ) {
          const i = t.oxw().$implicit;
          t.xp6(6),
            t.hij(' ', i.seriesName + ': ' + i.value[1], ' '),
            t.xp6(2),
            t.hij('at ', t.xi3(9, 2, i.name, 'medium'), '');
        }
      }
      function M(e, y) {
        1 & e && t.YNc(0, z, 10, 5, 'ng-container', 11),
          2 & e && t.Q6J('ngIf', y.$implicit);
      }
      function B(e, y) {
        if (
          (1 & e &&
            (t.ynx(0),
            t.TgZ(1, 'div', 0)(2, 'mat-icon')(3, 'span', 15),
            t._uU(4, 'attach_money'),
            t.qZA()(),
            t.TgZ(5, 'span', 13),
            t._uU(6),
            t.qZA()(),
            t.TgZ(7, 'div', 14),
            t._uU(8),
            t.ALo(9, 'date'),
            t.qZA(),
            t.BQk()),
          2 & e)
        ) {
          const i = t.oxw().$implicit;
          t.xp6(6),
            t.hij(' ', i.seriesName + ': ' + i.value[1], ' '),
            t.xp6(2),
            t.hij('at ', t.xi3(9, 2, i.name, 'medium'), '');
        }
      }
      function E(e, y) {
        1 & e && t.YNc(0, B, 10, 5, 'ng-container', 11),
          2 & e && t.Q6J('ngIf', y.$implicit);
      }
      const R = () => ({ show: !1 }),
        U = () => ['2018-10-29T03:27:33.932Z', 200],
        _ = (e) => ({ name: '2018-10-29T03:27:33.932Z', value: e }),
        P = () => ['2018-10-30T03:27:33.932Z', 50],
        N = (e) => ({ name: '2018-10-30T03:27:33.932Z', value: e }),
        F = () => ['2018-10-31T03:27:33.932Z', 100],
        Q = (e) => ({ name: '2018-10-31T03:27:33.932Z', value: e }),
        C = (e, y, i) => [e, y, i],
        J = () => ['2018-10-29T03:28:59.797Z', 200],
        K = (e) => ({ name: '2018-10-29T03:28:59.797Z', value: e }),
        G = () => ['2018-10-29T13:28:59.797Z', 50],
        j = (e) => ({ name: '2018-10-29T13:28:59.797Z', value: e }),
        Y = () => ['2018-11-01T03:28:59.797Z', 100],
        k = (e) => ({ name: '2018-11-01T03:28:59.797Z', value: e });
      let H = (() => {
        class e {
          _cdr;
          themeSelector;
          today = new Date();
          themes = (0, g.RC)();
          selectedTheme;
          config = {
            xAxis: [{ show: !0, type: 'time', boundaryGap: !1 }],
            yAxis: [{ show: !0, type: 'value', axisLabel: { inside: !0 } }],
            series: [
              {
                name: 'Revenue',
                type: 'line',
                itemStyle: { opacity: 0.95, color: '#007373' },
                data: [
                  {
                    name: this.today.toISOString(),
                    value: [this.today.toISOString(), 200],
                  },
                  {
                    name: new Date(this.today.getTime() + 864e5).toISOString(),
                    value: [
                      new Date(this.today.getTime() + 864e5).toISOString(),
                      50,
                    ],
                  },
                  {
                    name: new Date(this.today.getTime() + 1728e5).toISOString(),
                    value: [
                      new Date(this.today.getTime() + 1728e5).toISOString(),
                      100,
                    ],
                  },
                ],
              },
              {
                name: 'Sales',
                type: 'line',
                itemStyle: { opacity: 0.95, color: '#1B98C6' },
                data: [
                  {
                    name: this.today.toISOString(),
                    value: [this.today.toISOString(), 200],
                  },
                  {
                    name: new Date(this.today.getTime() + 36e6).toISOString(),
                    value: [
                      new Date(this.today.getTime() + 36e6).toISOString(),
                      50,
                    ],
                  },
                  {
                    name: new Date(this.today.getTime() + 2592e5).toISOString(),
                    value: [
                      new Date(this.today.getTime() + 2592e5).toISOString(),
                      100,
                    ],
                  },
                ],
              },
            ],
            tooltip: { show: !0, trigger: 'axis', showContent: !0 },
          };
          constructor(i, l) {
            (this._cdr = i), (this.themeSelector = l);
          }
          ngOnInit() {
            var i = this;
            return (0, s.Z)(function* () {
              (i.selectedTheme = i.themeSelector.selected),
                i._cdr.markForCheck();
            })();
          }
          selectChartTheme(i) {
            this.themeSelector.select(i);
          }
          static ɵfac = function (l) {
            return new (l || e)(t.Y36(t.sBO), t.Y36(u.n));
          };
          static ɵcmp = t.Xpm({
            type: e,
            selectors: [['line-demo-basic']],
            decls: 17,
            vars: 50,
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
              [3, 'trigger'],
              [3, 'show', 'position', 'type', 'splitLine', 'boundaryGap'],
              [3, 'show', 'type'],
              ['td-line', '', 3, 'symbolSize', 'data', 'name', 'symbol'],
              ['tdTooltipFormatter', ''],
              [3, 'value'],
              [4, 'ngIf'],
              [1, 'tc-accent'],
              [1, 'mat-caption', 'pad-left-sm'],
              [1, 'mat-caption'],
              [1, 'tc-primary'],
            ],
            template: function (l, T) {
              1 & l &&
                (t.TgZ(0, 'div', 0)(1, 'div', 1),
                t._uU(2, ' Chart Theme: '),
                t.qZA(),
                t.TgZ(3, 'mat-form-field')(4, 'mat-select', 2),
                t.NdJ('valueChange', function (D) {
                  return (T.selectedTheme = D);
                })('valueChange', function (D) {
                  return T.selectChartTheme(D);
                }),
                t.YNc(5, w, 2, 2, 'mat-option', 3),
                t.qZA()()(),
                t.TgZ(6, 'td-chart', 4),
                t.ALo(7, 'async'),
                t._UZ(8, 'td-chart-tooltip', 5)(9, 'td-chart-x-axis', 6)(
                  10,
                  'td-chart-y-axis',
                  7
                ),
                t.TgZ(11, 'td-chart-series', 8)(12, 'td-chart-series-tooltip'),
                t.YNc(13, M, 1, 1, 'ng-template', 9),
                t.qZA()(),
                t.TgZ(14, 'td-chart-series', 8)(15, 'td-chart-series-tooltip'),
                t.YNc(16, E, 1, 1, 'ng-template', 9),
                t.qZA()()()),
                2 & l &&
                  (t.xp6(4),
                  t.Q6J('value', T.selectedTheme),
                  t.xp6(1),
                  t.Q6J('ngForOf', T.themes),
                  t.xp6(1),
                  t.Udp('height', 300, 'px'),
                  t.Q6J('themeName', t.lcZ(7, 21, T.themeSelector.selected$)),
                  t.xp6(2),
                  t.Q6J('trigger', 'item'),
                  t.xp6(1),
                  t.Q6J('show', !0)('position', 'top')('type', 'time')(
                    'splitLine',
                    t.DdM(23, R)
                  )('boundaryGap', !1),
                  t.xp6(1),
                  t.Q6J('show', !0)('type', 'value'),
                  t.xp6(1),
                  t.Q6J('symbolSize', 14)(
                    'data',
                    t.kEZ(
                      33,
                      C,
                      t.VKq(25, _, t.DdM(24, U)),
                      t.VKq(28, N, t.DdM(27, P)),
                      t.VKq(31, Q, t.DdM(30, F))
                    )
                  )('name', 'Revenue')('symbol', 'roundRect'),
                  t.xp6(3),
                  t.Q6J('symbolSize', 14)(
                    'data',
                    t.kEZ(
                      46,
                      C,
                      t.VKq(38, K, t.DdM(37, J)),
                      t.VKq(41, j, t.DdM(40, G)),
                      t.VKq(44, k, t.DdM(43, Y))
                    )
                  )('name', 'Sales')('symbol', 'roundRect'));
            },
            dependencies: [
              v.L,
              x.O,
              b.$,
              O.HN,
              O.dA,
              A.m,
              L.P,
              n.sg,
              n.O5,
              I.KE,
              m.gD,
              Z.ey,
              h.Hw,
              n.Ov,
              n.uU,
            ],
            changeDetection: 0,
          });
        }
        return e;
      })();
      const V = [
        {
          path: '',
          component: (() => {
            class e {
              static ɵfac = function (l) {
                return new (l || e)();
              };
              static ɵcmp = t.Xpm({
                type: e,
                selectors: [['line-demo']],
                decls: 2,
                vars: 2,
                consts: [[3, 'demoId', 'demoTitle']],
                template: function (l, T) {
                  1 & l &&
                    (t.TgZ(0, 'demo-component', 0),
                    t._UZ(1, 'line-demo-basic'),
                    t.qZA()),
                    2 & l &&
                      t.Q6J('demoId', 'line-demo-basic')('demoTitle', 'Basic');
                },
                dependencies: [d.z, H],
              });
            }
            return e;
          })(),
        },
      ];
      let $ = (() => {
        class e {
          static ɵfac = function (l) {
            return new (l || e)();
          };
          static ɵmod = t.oAB({ type: e });
          static ɵinj = t.cJS({ imports: [a.Bz.forChild(V), a.Bz] });
        }
        return e;
      })();
      var W = o(81924);
      let X = (() => {
        class e {
          static ɵfac = function (l) {
            return new (l || e)();
          };
          static ɵmod = t.oAB({ type: e });
          static ɵinj = t.cJS({
            imports: [f.l, $, g.MX, r.NF, c.Po, W.Uy, n.ez, m.LD, h.Ps],
          });
        }
        return e;
      })();
    },
    90230: (S, p, o) => {
      o.d(p, { P: () => g });
      var n = o(19212),
        m = o(23421);
      const h = ['td-line', ''];
      let g = (() => {
        class r extends m.R0 {
          coordinateSystem;
          xAxisIndex;
          yAxisIndex;
          polarIndex;
          symbol;
          symbolSize;
          symbolRotate;
          symbolKeepAspect;
          symbolOffset;
          showSymbol;
          showAllSymbol;
          hoverAnimation;
          legendHoverLink;
          stack;
          cursor;
          connectNulls;
          clipOverflow;
          step;
          label;
          itemStyle;
          lineStyle;
          areaStyle;
          emphasis;
          smooth;
          smoothMonotone;
          sampling;
          dimensions;
          encode;
          seriesLayoutBy;
          datasetIndex;
          markPoint;
          markLine;
          markArea;
          zlevel;
          z;
          silent;
          constructor(f) {
            super('line', f);
          }
          getConfig() {
            return {
              coordinateSystem: this.coordinateSystem,
              xAxisIndex: this.xAxisIndex,
              yAxisIndex: this.yAxisIndex,
              polarIndex: this.polarIndex,
              symbol: this.symbol,
              symbolSize: this.symbolSize,
              symbolRotate: this.symbolRotate,
              symbolKeepAspect: this.symbolKeepAspect,
              symbolOffset: this.symbolOffset,
              showSymbol: this.showSymbol,
              showAllSymbol: this.showAllSymbol,
              hoverAnimation: this.hoverAnimation,
              legendHoverLink: this.legendHoverLink,
              stack: this.stack,
              cursor: this.cursor,
              connectNulls: this.connectNulls,
              clipOverflow: this.clipOverflow,
              step: this.step,
              label: this.label,
              itemStyle: this.itemStyle,
              lineStyle: this.lineStyle,
              areaStyle: this.areaStyle,
              emphasis: this.emphasis,
              smooth: this.smooth,
              smoothMonotone: this.smoothMonotone,
              sampling: this.sampling,
              dimensions: this.dimensions,
              encode: this.encode,
              seriesLayoutBy: this.seriesLayoutBy,
              datasetIndex: this.datasetIndex,
              markPoint: this.markPoint,
              markLine: this.markLine,
              markArea: this.markArea,
              zlevel: this.zlevel,
              z: this.z,
              silent: this.silent,
            };
          }
          static ɵfac = function (a) {
            return new (a || r)(n.Y36(m.ij));
          };
          static ɵcmp = n.Xpm({
            type: r,
            selectors: [['td-chart-series', 'td-line', '']],
            inputs: {
              config: 'config',
              id: 'id',
              name: 'name',
              color: 'color',
              data: 'data',
              animation: 'animation',
              animationThreshold: 'animationThreshold',
              animationDuration: 'animationDuration',
              animationEasing: 'animationEasing',
              animationDelay: 'animationDelay',
              animationDurationUpdate: 'animationDurationUpdate',
              animationEasingUpdate: 'animationEasingUpdate',
              animationDelayUpdate: 'animationDelayUpdate',
              tooltip: 'tooltip',
              coordinateSystem: 'coordinateSystem',
              xAxisIndex: 'xAxisIndex',
              yAxisIndex: 'yAxisIndex',
              polarIndex: 'polarIndex',
              symbol: 'symbol',
              symbolSize: 'symbolSize',
              symbolRotate: 'symbolRotate',
              symbolKeepAspect: 'symbolKeepAspect',
              symbolOffset: 'symbolOffset',
              showSymbol: 'showSymbol',
              showAllSymbol: 'showAllSymbol',
              hoverAnimation: 'hoverAnimation',
              legendHoverLink: 'legendHoverLink',
              stack: 'stack',
              cursor: 'cursor',
              connectNulls: 'connectNulls',
              clipOverflow: 'clipOverflow',
              step: 'step',
              label: 'label',
              itemStyle: 'itemStyle',
              lineStyle: 'lineStyle',
              areaStyle: 'areaStyle',
              emphasis: 'emphasis',
              smooth: 'smooth',
              smoothMonotone: 'smoothMonotone',
              sampling: 'sampling',
              dimensions: 'dimensions',
              encode: 'encode',
              seriesLayoutBy: 'seriesLayoutBy',
              datasetIndex: 'datasetIndex',
              markPoint: 'markPoint',
              markLine: 'markLine',
              markArea: 'markArea',
              zlevel: 'zlevel',
              z: 'z',
              silent: 'silent',
            },
            features: [
              n._Bn([{ provide: m.R0, useExisting: (0, n.Gpc)(() => r) }]),
              n.qOj,
            ],
            attrs: h,
            decls: 0,
            vars: 0,
            template: function (a, t) {},
            encapsulation: 2,
            changeDetection: 0,
          });
        }
        return r;
      })();
    },
    81924: (S, p, o) => {
      o.d(p, { Uy: () => r });
      var n = o(96814),
        h = (o(90230), o(19212));
      let r = (() => {
        class c {
          static ɵfac = function (t) {
            return new (t || c)();
          };
          static ɵmod = h.oAB({ type: c });
          static ɵinj = h.cJS({ imports: [n.ez] });
        }
        return c;
      })();
    },
    52514: (S, p, o) => {
      o.d(p, { Po: () => r });
      var n = o(96814),
        h = (o(13063), o(19212));
      let r = (() => {
        class c {
          static ɵfac = function (t) {
            return new (t || c)();
          };
          static ɵmod = h.oAB({ type: c });
          static ɵinj = h.cJS({ imports: [n.ez] });
        }
        return c;
      })();
    },
    13063: (S, p, o) => {
      o.d(p, { G: () => c, O: () => f });
      var n = o(19212),
        m = o(23421),
        h = o(96814);
      const g = ['toolboxContent'];
      function r(a, t) {}
      let c = (() => {
          class a {
            static ɵfac = function (s) {
              return new (s || a)();
            };
            static ɵdir = n.lG2({
              type: a,
              selectors: [['ng-template', 'tdViewDataFormatter', '']],
            });
          }
          return a;
        })(),
        f = (() => {
          class a {
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
            constructor(d, s, u) {
              (this._changeDetectorRef = d),
                (this._elementRef = s),
                (this._optionsService = u);
            }
            ngOnChanges() {
              this._setOptions();
            }
            ngOnDestroy() {
              this._removeOption();
            }
            _setOptions() {
              this._checkFormatterTemplate();
              const d = (0, m.t8)(
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
              this._optionsService.setOption('toolbox', d);
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
              return new (s || a)(n.Y36(n.sBO), n.Y36(n.SBq), n.Y36(m.ij));
            };
            static ɵcmp = n.Xpm({
              type: a,
              selectors: [['td-chart-toolbox']],
              contentQueries: function (s, u, v) {
                if ((1 & s && n.Suo(v, c, 5, n.Rgc), 2 & s)) {
                  let x;
                  n.iGM((x = n.CRH())) && (u.formatterTemplate = x.first);
                }
              },
              viewQuery: function (s, u) {
                if ((1 & s && n.Gf(g, 7), 2 & s)) {
                  let v;
                  n.iGM((v = n.CRH())) && (u.fullTemplate = v.first);
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
              features: [n.TTD],
              decls: 2,
              vars: 1,
              consts: [
                [3, 'ngTemplateOutlet'],
                ['toolboxContent', ''],
              ],
              template: function (s, u) {
                1 & s && n.YNc(0, r, 0, 0, 'ng-template', 0, 1, n.W1O),
                  2 & s && n.Q6J('ngTemplateOutlet', u.formatterTemplate);
              },
              dependencies: [h.tP],
              encapsulation: 2,
              changeDetection: 0,
            });
          }
          return a;
        })();
    },
  },
]);
