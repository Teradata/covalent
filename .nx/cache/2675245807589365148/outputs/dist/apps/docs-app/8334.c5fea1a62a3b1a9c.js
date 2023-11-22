'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [8334],
  {
    89862: (g, d, e) => {
      e.r(d), e.d(d, { LineModule: () => W });
      var a = e(96814),
        m = e(52787),
        s = e(98525),
        h = e(30617),
        i = e(22497),
        c = e(23421),
        l = e(81924),
        y = e(57337),
        u = e(63048),
        S = e(41257),
        A = e(15861),
        I = e(76856),
        t = e(19212),
        L = e(64170),
        Z = e(23680),
        O = e(1691),
        D = e(15079),
        C = e(39967),
        b = e(90230),
        T = e(33822),
        M = e(76413);
      function z(o, r) {
        if ((1 & o && (t.TgZ(0, 'mat-option', 10), t._uU(1), t.qZA()), 2 & o)) {
          const n = r.$implicit;
          t.Q6J('value', n), t.xp6(1), t.hij(' ', n, ' ');
        }
      }
      function U(o, r) {
        if (
          (1 & o &&
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
          2 & o)
        ) {
          const n = t.oxw().$implicit;
          t.xp6(6),
            t.hij(' ', n.seriesName + ': ' + n.value[1], ' '),
            t.xp6(2),
            t.hij('at ', t.xi3(9, 2, n.name, 'medium'), '');
        }
      }
      function E(o, r) {
        1 & o && t.YNc(0, U, 10, 5, 'ng-container', 11),
          2 & o && t.Q6J('ngIf', r.$implicit);
      }
      function N(o, r) {
        if (
          (1 & o &&
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
          2 & o)
        ) {
          const n = t.oxw().$implicit;
          t.xp6(6),
            t.hij(' ', n.seriesName + ': ' + n.value[1], ' '),
            t.xp6(2),
            t.hij('at ', t.xi3(9, 2, n.name, 'medium'), '');
        }
      }
      function w(o, r) {
        1 & o && t.YNc(0, N, 10, 5, 'ng-container', 11),
          2 & o && t.Q6J('ngIf', r.$implicit);
      }
      const B = () => ({ show: !1 }),
        P = () => ['2018-10-29T03:27:33.932Z', 200],
        J = (o) => ({ name: '2018-10-29T03:27:33.932Z', value: o }),
        K = () => ['2018-10-30T03:27:33.932Z', 50],
        R = (o) => ({ name: '2018-10-30T03:27:33.932Z', value: o }),
        Q = () => ['2018-10-31T03:27:33.932Z', 100],
        F = (o) => ({ name: '2018-10-31T03:27:33.932Z', value: o }),
        f = (o, r, n) => [o, r, n],
        j = () => ['2018-10-29T03:28:59.797Z', 200],
        Y = (o) => ({ name: '2018-10-29T03:28:59.797Z', value: o }),
        k = () => ['2018-10-29T13:28:59.797Z', 50],
        H = (o) => ({ name: '2018-10-29T13:28:59.797Z', value: o }),
        $ = () => ['2018-11-01T03:28:59.797Z', 100],
        G = (o) => ({ name: '2018-11-01T03:28:59.797Z', value: o }),
        X = (0, u.uw)({
          overviewDemoComponent: (() => {
            class o {
              _cdr;
              themeSelector;
              today = new Date();
              themes = (0, c.RC)();
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
                        name: new Date(
                          this.today.getTime() + 864e5
                        ).toISOString(),
                        value: [
                          new Date(this.today.getTime() + 864e5).toISOString(),
                          50,
                        ],
                      },
                      {
                        name: new Date(
                          this.today.getTime() + 1728e5
                        ).toISOString(),
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
                        name: new Date(
                          this.today.getTime() + 36e6
                        ).toISOString(),
                        value: [
                          new Date(this.today.getTime() + 36e6).toISOString(),
                          50,
                        ],
                      },
                      {
                        name: new Date(
                          this.today.getTime() + 2592e5
                        ).toISOString(),
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
              constructor(n, p) {
                (this._cdr = n), (this.themeSelector = p);
              }
              ngOnInit() {
                var n = this;
                return (0, A.Z)(function* () {
                  (n.selectedTheme = n.themeSelector.selected),
                    n._cdr.markForCheck();
                })();
              }
              selectChartTheme(n) {
                this.themeSelector.select(n);
              }
              static ɵfac = function (p) {
                return new (p || o)(t.Y36(t.sBO), t.Y36(I.n));
              };
              static ɵcmp = t.Xpm({
                type: o,
                selectors: [['types-line']],
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
                template: function (p, v) {
                  1 & p &&
                    (t.TgZ(0, 'div', 0)(1, 'div', 1),
                    t._uU(2, ' Chart Theme: '),
                    t.qZA(),
                    t.TgZ(3, 'mat-form-field')(4, 'mat-select', 2),
                    t.NdJ('valueChange', function (x) {
                      return (v.selectedTheme = x);
                    })('valueChange', function (x) {
                      return v.selectChartTheme(x);
                    }),
                    t.YNc(5, z, 2, 2, 'mat-option', 3),
                    t.qZA()()(),
                    t.TgZ(6, 'td-chart', 4),
                    t.ALo(7, 'async'),
                    t._UZ(8, 'td-chart-tooltip', 5)(9, 'td-chart-x-axis', 6)(
                      10,
                      'td-chart-y-axis',
                      7
                    ),
                    t.TgZ(
                      11,
                      'td-chart-series',
                      8
                    )(12, 'td-chart-series-tooltip'),
                    t.YNc(13, E, 1, 1, 'ng-template', 9),
                    t.qZA()(),
                    t.TgZ(
                      14,
                      'td-chart-series',
                      8
                    )(15, 'td-chart-series-tooltip'),
                    t.YNc(16, w, 1, 1, 'ng-template', 9),
                    t.qZA()()()),
                    2 & p &&
                      (t.xp6(4),
                      t.Q6J('value', v.selectedTheme),
                      t.xp6(1),
                      t.Q6J('ngForOf', v.themes),
                      t.xp6(1),
                      t.Udp('height', 300, 'px'),
                      t.Q6J(
                        'themeName',
                        t.lcZ(7, 21, v.themeSelector.selected$)
                      ),
                      t.xp6(2),
                      t.Q6J('trigger', 'item'),
                      t.xp6(1),
                      t.Q6J('show', !0)('position', 'top')('type', 'time')(
                        'splitLine',
                        t.DdM(23, B)
                      )('boundaryGap', !1),
                      t.xp6(1),
                      t.Q6J('show', !0)('type', 'value'),
                      t.xp6(1),
                      t.Q6J('symbolSize', 14)(
                        'data',
                        t.kEZ(
                          33,
                          f,
                          t.VKq(25, J, t.DdM(24, P)),
                          t.VKq(28, R, t.DdM(27, K)),
                          t.VKq(31, F, t.DdM(30, Q))
                        )
                      )('name', 'Revenue')('symbol', 'roundRect'),
                      t.xp6(3),
                      t.Q6J('symbolSize', 14)(
                        'data',
                        t.kEZ(
                          46,
                          f,
                          t.VKq(38, Y, t.DdM(37, j)),
                          t.VKq(41, H, t.DdM(40, k)),
                          t.VKq(44, G, t.DdM(43, $))
                        )
                      )('name', 'Sales')('symbol', 'roundRect'));
                },
                dependencies: [
                  a.sg,
                  a.O5,
                  L.KE,
                  s.gD,
                  Z.ey,
                  h.Hw,
                  O.L,
                  D.O,
                  C.$,
                  b.P,
                  T.HN,
                  T.dA,
                  M.m,
                  a.Ov,
                  a.uU,
                ],
                styles: ['[_nghost-%COMP%]{width:100%}'],
                changeDetection: 0,
              });
            }
            return o;
          })(),
          id: 'line',
        });
      let W = (() => {
        class o {
          static ɵfac = function (p) {
            return new (p || o)();
          };
          static ɵmod = t.oAB({ type: o });
          static ɵinj = t.cJS({
            imports: [
              a.ez,
              s.LD,
              h.Ps,
              c.MX,
              l.Uy,
              y.NF,
              i.q,
              S.m,
              m.Bz.forChild(X),
            ],
          });
        }
        return o;
      })();
    },
    90230: (g, d, e) => {
      e.d(d, { P: () => h });
      var a = e(19212),
        m = e(23421);
      const s = ['td-line', ''];
      let h = (() => {
        class i extends m.R0 {
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
          constructor(l) {
            super('line', l);
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
          static ɵfac = function (y) {
            return new (y || i)(a.Y36(m.ij));
          };
          static ɵcmp = a.Xpm({
            type: i,
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
              a._Bn([{ provide: m.R0, useExisting: (0, a.Gpc)(() => i) }]),
              a.qOj,
            ],
            attrs: s,
            decls: 0,
            vars: 0,
            template: function (y, u) {},
            encapsulation: 2,
            changeDetection: 0,
          });
        }
        return i;
      })();
    },
    81924: (g, d, e) => {
      e.d(d, { Uy: () => i });
      var a = e(96814),
        s = (e(90230), e(19212));
      let i = (() => {
        class c {
          static ɵfac = function (u) {
            return new (u || c)();
          };
          static ɵmod = s.oAB({ type: c });
          static ɵinj = s.cJS({ imports: [a.ez] });
        }
        return c;
      })();
    },
    39419: (g, d, e) => {
      e.d(d, { A0: () => c });
      var a = e(96814),
        m = e(30617),
        h = (e(21266), e(19212));
      let c = (() => {
        class l {
          static ɵfac = function (S) {
            return new (S || l)();
          };
          static ɵmod = h.oAB({ type: l });
          static ɵinj = h.cJS({ imports: [a.ez, m.Ps] });
        }
        return l;
      })();
    },
  },
]);
