'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [9448],
  {
    96548: (v, d, e) => {
      e.d(d, { y: () => ot });
      var o = e(15861),
        r = e(23421),
        c = e(76856),
        t = e(19212),
        s = e(1691),
        l = e(15079),
        u = e(39967),
        i = e(64335),
        g = e(64360),
        _ = e(33822),
        m = e(13063),
        y = e(96814),
        x = e(64170),
        T = e(98525),
        A = e(23680),
        E = e(30617);
      function O(a, h) {
        if ((1 & a && (t.TgZ(0, 'mat-option', 14), t._uU(1), t.qZA()), 2 & a)) {
          const n = h.$implicit;
          t.Q6J('value', n), t.xp6(1), t.hij(' ', n, ' ');
        }
      }
      function M(a, h) {
        if ((1 & a && (t.TgZ(0, 'td', 20), t._uU(1), t.qZA()), 2 & a)) {
          const n = h.ngIf,
            p = t.oxw().index;
          t.xp6(1), t.hij(' ', n[p], ' ');
        }
      }
      function C(a, h) {
        if ((1 & a && (t.TgZ(0, 'td', 20), t._uU(1), t.qZA()), 2 & a)) {
          const n = h.ngIf,
            p = t.oxw().index;
          t.xp6(1), t.hij(' ', n[p], ' ');
        }
      }
      const B = () => [150, 130, 150, 120, 150, 120],
        S = () => [80, 122, 80, 120, 80, 120];
      function P(a, h) {
        if (
          (1 & a &&
            (t.ynx(0),
            t.TgZ(1, 'tr', 19)(2, 'td', 20),
            t._uU(3),
            t.qZA(),
            t.YNc(4, M, 2, 1, 'td', 21)(5, C, 2, 1, 'td', 21),
            t.qZA(),
            t.BQk()),
          2 & a)
        ) {
          const n = h.$implicit;
          t.xp6(3),
            t.Oqu(n),
            t.xp6(1),
            t.Q6J('ngIf', t.DdM(3, B)),
            t.xp6(1),
            t.Q6J('ngIf', t.DdM(4, S));
        }
      }
      const L = () => [
        'Electronics',
        'Toys',
        'Grocery',
        'Appliances',
        'Automotive',
        'Sports',
      ];
      function I(a, h) {
        if (
          (1 & a &&
            (t.TgZ(0, 'table', 15)(1, 'thead')(2, 'tr', 16)(3, 'th', 17),
            t._uU(4, 'Category'),
            t.qZA(),
            t.TgZ(5, 'th', 17),
            t._uU(6),
            t.qZA(),
            t.TgZ(7, 'th', 17),
            t._uU(8),
            t.qZA()()(),
            t.TgZ(9, 'tbody'),
            t.YNc(10, P, 6, 5, 'ng-container', 18),
            t.qZA()()),
          2 & a)
        ) {
          const n = t.oxw();
          t.xp6(6),
            t.Oqu(n.config.series[0].name),
            t.xp6(2),
            t.Oqu(n.config.series[1].name),
            t.xp6(2),
            t.Q6J('ngForOf', t.DdM(3, L));
        }
      }
      function U(a, h) {
        if (
          (1 & a &&
            (t.ynx(0),
            t.TgZ(1, 'div', 23)(2, 'mat-icon')(3, 'span'),
            t._uU(4, 'people'),
            t.qZA()(),
            t.TgZ(5, 'span', 24),
            t._uU(6),
            t.qZA()(),
            t.BQk()),
          2 & a)
        ) {
          const n = t.oxw().$implicit;
          t.xp6(3),
            t.Udp('color', n.color),
            t.xp6(3),
            t.AsE(
              ' ',
              n.seriesName ? n.seriesName : n.name,
              ': ',
              n.value,
              ' '
            );
        }
      }
      function R(a, h) {
        1 & a && t.YNc(0, U, 7, 4, 'ng-container', 22),
          2 & a && t.Q6J('ngIf', h.$implicit);
      }
      const k = () => ['Electronics', 150, 80],
        z = () => ['Toys', 130, 122],
        w = () => ['Grocery', 150, 80],
        W = () => ['Appliances', 120, 120],
        K = () => ['Automotive', 150, 80],
        Z = () => ['Sports', 120, 120],
        G = (a, h, n, p, f, D) => [a, h, n, p, f, D],
        F = () => ['Data View', 'Turn Off', 'Refresh'],
        N = (a) => ({ readOnly: !0, title: 'View Data', lang: a }),
        H = () => ({ zoom: 'Zoom', back: 'Back' }),
        Q = (a) => ({ title: a }),
        J = () => ['line', 'bar', 'stack', 'tiled'],
        V = () => ({
          line: 'Line',
          bar: 'Bar',
          stack: 'Stack',
          tiled: 'Tiled',
        }),
        Y = (a, h) => ({ type: a, title: h }),
        j = () => ({ title: 'Restore' }),
        X = (a, h, n, p) => ({
          dataView: a,
          dataZoom: h,
          magicType: n,
          restore: p,
        }),
        $ = () => ({ type: 'dotted' }),
        q = (a) => ({ lineStyle: a }),
        tt = () => ({ name: 'Average', value: 30, xAxis: 1, yAxis: 30 }),
        et = (a) => [a],
        at = (a) => ({ data: a });
      let ot = (() => {
        class a {
          _cdr;
          themeSelector;
          themes = (0, r.RC)();
          selectedTheme;
          config = {
            toolbox: {
              showTitle: !0,
              top: 0,
              right: '30px',
              show: !0,
              feature: {
                dataView: {
                  title: 'View Data',
                  lang: ['Data View', 'Turn Off', 'Refresh'],
                },
                dataZoom: { title: { zoom: 'Zoom', back: 'Back' } },
                magicType: {
                  type: ['line', 'bar', 'stack', 'tiled'],
                  title: {
                    line: 'Line',
                    bar: 'Bar',
                    stack: 'Stack',
                    tiled: 'Tiled',
                  },
                },
                restore: { title: 'Restore' },
              },
            },
            xAxis: [
              {
                data: [
                  'Electronics',
                  'Toys',
                  'Grocery',
                  'Appliances',
                  'Automotive',
                  'Sports',
                ],
              },
              { show: !0, type: 'time', boundaryGap: !1 },
            ],
            yAxis: [
              { show: !0, type: 'value', axisLabel: { inside: !1 }, max: 300 },
            ],
            series: [
              {
                type: 'bar',
                itemStyle: { opacity: 0.95, color: '#007373' },
                markPoint: {
                  data: [{ name: 'test', value: 130, xAxis: 1, yAxis: 130 }],
                },
                name: 'Yesterday',
                data: [150, 130, 150, 120, 150, 120],
              },
              {
                type: 'bar',
                itemStyle: { opacity: 0.95, color: '#1B98C6' },
                markPoint: {
                  data: [{ name: 'Target', value: 80, xAxis: 1, yAxis: 121 }],
                },
                markLine: {
                  data: [{ name: 'Average', value: 30, xAxis: 1, yAxis: 30 }],
                  symbol: 'circle',
                },
                name: 'Today',
                data: [80, 122, 80, 120, 80, 120],
              },
            ],
            tooltip: { show: !0, trigger: 'item', showContent: !0 },
          };
          constructor(n, p) {
            (this._cdr = n), (this.themeSelector = p);
          }
          ngOnInit() {
            var n = this;
            return (0, o.Z)(function* () {
              (n.selectedTheme = n.themeSelector.selected),
                n._cdr.markForCheck();
            })();
          }
          selectChartTheme(n) {
            this.themeSelector.select(n);
          }
          static ɵfac = function (p) {
            return new (p || a)(t.Y36(t.sBO), t.Y36(c.n));
          };
          static ɵcmp = t.Xpm({
            type: a,
            selectors: [['bar-demo-basic']],
            decls: 17,
            vars: 63,
            consts: [
              ['flex', '', 'layout', 'row', 'layout-align', 'start center'],
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
              [3, 'source'],
              [3, 'show', 'right', 'top', 'feature'],
              ['tdViewDataFormatter', ''],
              [3, 'trigger'],
              ['tdTooltipFormatter', ''],
              [3, 'show', 'position', 'type', 'boundaryGap'],
              [3, 'show', 'type', 'position', 'max', 'splitLine'],
              ['td-bar', '', 3, 'name'],
              ['td-bar', '', 3, 'name', 'markLine'],
              [3, 'value'],
              ['td-data-table', ''],
              ['td-data-table-column-row', ''],
              ['td-data-table-column', ''],
              [4, 'ngFor', 'ngForOf'],
              ['td-data-table-row', ''],
              ['td-data-table-cell', ''],
              ['td-data-table-cell', '', 4, 'ngIf'],
              [4, 'ngIf'],
              ['layout', 'row', 'layout-align', 'start center'],
              [1, 'mat-caption', 'pad-left-sm'],
            ],
            template: function (p, f) {
              1 & p &&
                (t.TgZ(0, 'div', 0)(1, 'div', 1),
                t._uU(2, ' Chart Theme: '),
                t.qZA(),
                t.TgZ(3, 'mat-form-field')(4, 'mat-select', 2),
                t.NdJ('valueChange', function (b) {
                  return (f.selectedTheme = b);
                })('valueChange', function (b) {
                  return f.selectChartTheme(b);
                }),
                t.YNc(5, O, 2, 2, 'mat-option', 3),
                t.qZA()()(),
                t.TgZ(6, 'td-chart', 4),
                t.ALo(7, 'async'),
                t._UZ(8, 'td-chart-dataset', 5),
                t.TgZ(9, 'td-chart-toolbox', 6),
                t.YNc(10, I, 11, 4, 'ng-template', 7),
                t.qZA(),
                t.TgZ(11, 'td-chart-tooltip', 8),
                t.YNc(12, R, 1, 1, 'ng-template', 9),
                t.qZA(),
                t._UZ(13, 'td-chart-x-axis', 10)(14, 'td-chart-y-axis', 11)(
                  15,
                  'td-chart-series',
                  12
                )(16, 'td-chart-series', 13),
                t.qZA()),
                2 & p &&
                  (t.xp6(4),
                  t.Q6J('value', f.selectedTheme),
                  t.xp6(1),
                  t.Q6J('ngForOf', f.themes),
                  t.xp6(1),
                  t.Udp('height', 300, 'px'),
                  t.Q6J('themeName', t.lcZ(7, 23, f.themeSelector.selected$)),
                  t.xp6(2),
                  t.Q6J(
                    'source',
                    t.HTZ(
                      31,
                      G,
                      t.DdM(25, k),
                      t.DdM(26, z),
                      t.DdM(27, w),
                      t.DdM(28, W),
                      t.DdM(29, K),
                      t.DdM(30, Z)
                    )
                  ),
                  t.xp6(1),
                  t.Q6J('show', !0)('right', 30)('top', 10)(
                    'feature',
                    t.l5B(
                      50,
                      X,
                      t.VKq(39, N, t.DdM(38, F)),
                      t.VKq(42, Q, t.DdM(41, H)),
                      t.WLB(46, Y, t.DdM(44, J), t.DdM(45, V)),
                      t.DdM(49, j)
                    )
                  ),
                  t.xp6(2),
                  t.Q6J('trigger', 'item'),
                  t.xp6(2),
                  t.Q6J('show', !0)('position', 'bottom')('type', 'category')(
                    'boundaryGap',
                    !0
                  ),
                  t.xp6(1),
                  t.Q6J('show', !0)('type', 'value')('position', 'right')(
                    'max',
                    300
                  )('splitLine', t.VKq(56, q, t.DdM(55, $))),
                  t.xp6(1),
                  t.Q6J('name', 'Today'),
                  t.xp6(1),
                  t.Q6J('name', 'Yesterday')(
                    'markLine',
                    t.VKq(61, at, t.VKq(59, et, t.DdM(58, tt)))
                  ));
            },
            dependencies: [
              s.L,
              l.O,
              u.$,
              i.H,
              g.h,
              _.HN,
              _.dA,
              m.O,
              m.G,
              y.sg,
              y.O5,
              x.KE,
              T.gD,
              A.ey,
              E.Hw,
              y.Ov,
            ],
            styles: ['[_nghost-%COMP%]{width:100%}'],
            changeDetection: 0,
          });
        }
        return a;
      })();
    },
    57311: (v, d, e) => {
      e.d(d, { h: () => g });
      var o = e(96814),
        r = e(98525),
        c = e(30617),
        t = e(23421),
        s = e(5965),
        l = e(57337),
        u = e(52514),
        i = e(19212);
      let g = (() => {
        class _ {
          static ɵfac = function (x) {
            return new (x || _)();
          };
          static ɵmod = i.oAB({ type: _ });
          static ɵinj = i.cJS({
            imports: [t.MX, s.FA, l.NF, u.Po, o.ez, r.LD, c.Ps],
          });
        }
        return _;
      })();
    },
    64360: (v, d, e) => {
      e.d(d, { h: () => t });
      var o = e(19212),
        r = e(23421);
      const c = ['td-bar', ''];
      let t = (() => {
        class s extends r.R0 {
          coordinateSystem;
          xAxisIndex;
          yAxisIndex;
          legendHoverLink;
          stack;
          cursor;
          label;
          itemStyle;
          emphasis;
          barWidth;
          barMaxWidth;
          barMinHeight;
          barGap;
          barCategoryGap;
          large;
          largeThreshold;
          progressive;
          progressiveThreshold;
          progressiveChunkMode;
          dimensions;
          encode;
          seriesLayoutBy;
          datasetIndex;
          markPoint;
          markLine;
          markArea;
          zlevel;
          z;
          constructor(u) {
            super('bar', u);
          }
          getConfig() {
            return {
              coordinateSystem: this.coordinateSystem,
              xAxisIndex: this.xAxisIndex,
              yAxisIndex: this.yAxisIndex,
              legendHoverLink: this.legendHoverLink,
              stack: this.stack,
              cursor: this.cursor,
              label: this.label,
              itemStyle: this.itemStyle,
              emphasis: this.emphasis,
              barWidth: this.barWidth,
              barMaxWidth: this.barMaxWidth,
              barMinHeight: this.barMinHeight,
              barGap: this.barGap,
              barCategoryGap: this.barCategoryGap,
              large: this.large,
              largeThreshold: this.largeThreshold,
              progressive: this.progressive,
              progressiveThreshold: this.progressiveThreshold,
              progressiveChunkMode: this.progressiveChunkMode,
              dimensions: this.dimensions,
              encode: this.encode,
              seriesLayoutBy: this.seriesLayoutBy,
              datasetIndex: this.datasetIndex,
              markPoint: this.markPoint,
              markLine: this.markLine,
              markArea: this.markArea,
              zlevel: this.zlevel,
              z: this.z,
            };
          }
          static ɵfac = function (i) {
            return new (i || s)(o.Y36(r.ij));
          };
          static ɵcmp = o.Xpm({
            type: s,
            selectors: [['td-chart-series', 'td-bar', '']],
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
              legendHoverLink: 'legendHoverLink',
              stack: 'stack',
              cursor: 'cursor',
              label: 'label',
              itemStyle: 'itemStyle',
              emphasis: 'emphasis',
              barWidth: 'barWidth',
              barMaxWidth: 'barMaxWidth',
              barMinHeight: 'barMinHeight',
              barGap: 'barGap',
              barCategoryGap: 'barCategoryGap',
              large: 'large',
              largeThreshold: 'largeThreshold',
              progressive: 'progressive',
              progressiveThreshold: 'progressiveThreshold',
              progressiveChunkMode: 'progressiveChunkMode',
              dimensions: 'dimensions',
              encode: 'encode',
              seriesLayoutBy: 'seriesLayoutBy',
              datasetIndex: 'datasetIndex',
              markPoint: 'markPoint',
              markLine: 'markLine',
              markArea: 'markArea',
              zlevel: 'zlevel',
              z: 'z',
            },
            features: [
              o._Bn([{ provide: r.R0, useExisting: (0, o.Gpc)(() => s) }]),
              o.qOj,
            ],
            attrs: c,
            decls: 0,
            vars: 0,
            template: function (i, g) {},
            encapsulation: 2,
            changeDetection: 0,
          });
        }
        return s;
      })();
    },
    5965: (v, d, e) => {
      e.d(d, { FA: () => s, hP: () => r.h });
      var o = e(96814),
        r = e(64360),
        c = e(19212);
      let s = (() => {
        class l {
          static ɵfac = function (g) {
            return new (g || l)();
          };
          static ɵmod = c.oAB({ type: l });
          static ɵinj = c.cJS({ imports: [o.ez] });
        }
        return l;
      })();
    },
    90230: (v, d, e) => {
      e.d(d, { P: () => t });
      var o = e(19212),
        r = e(23421);
      const c = ['td-line', ''];
      let t = (() => {
        class s extends r.R0 {
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
          constructor(u) {
            super('line', u);
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
          static ɵfac = function (i) {
            return new (i || s)(o.Y36(r.ij));
          };
          static ɵcmp = o.Xpm({
            type: s,
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
              o._Bn([{ provide: r.R0, useExisting: (0, o.Gpc)(() => s) }]),
              o.qOj,
            ],
            attrs: c,
            decls: 0,
            vars: 0,
            template: function (i, g) {},
            encapsulation: 2,
            changeDetection: 0,
          });
        }
        return s;
      })();
    },
    81924: (v, d, e) => {
      e.d(d, { Uy: () => s });
      var o = e(96814),
        c = (e(90230), e(19212));
      let s = (() => {
        class l {
          static ɵfac = function (g) {
            return new (g || l)();
          };
          static ɵmod = c.oAB({ type: l });
          static ɵinj = c.cJS({ imports: [o.ez] });
        }
        return l;
      })();
    },
    52514: (v, d, e) => {
      e.d(d, { Po: () => s });
      var o = e(96814),
        c = (e(13063), e(19212));
      let s = (() => {
        class l {
          static ɵfac = function (g) {
            return new (g || l)();
          };
          static ɵmod = c.oAB({ type: l });
          static ɵinj = c.cJS({ imports: [o.ez] });
        }
        return l;
      })();
    },
    13063: (v, d, e) => {
      e.d(d, { G: () => l, O: () => u });
      var o = e(19212),
        r = e(23421),
        c = e(96814);
      const t = ['toolboxContent'];
      function s(i, g) {}
      let l = (() => {
          class i {
            static ɵfac = function (m) {
              return new (m || i)();
            };
            static ɵdir = o.lG2({
              type: i,
              selectors: [['ng-template', 'tdViewDataFormatter', '']],
            });
          }
          return i;
        })(),
        u = (() => {
          class i {
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
            constructor(_, m, y) {
              (this._changeDetectorRef = _),
                (this._elementRef = m),
                (this._optionsService = y);
            }
            ngOnChanges() {
              this._setOptions();
            }
            ngOnDestroy() {
              this._removeOption();
            }
            _setOptions() {
              this._checkFormatterTemplate();
              const _ = (0, r.t8)(
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
              this._optionsService.setOption('toolbox', _);
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
            static ɵfac = function (m) {
              return new (m || i)(o.Y36(o.sBO), o.Y36(o.SBq), o.Y36(r.ij));
            };
            static ɵcmp = o.Xpm({
              type: i,
              selectors: [['td-chart-toolbox']],
              contentQueries: function (m, y, x) {
                if ((1 & m && o.Suo(x, l, 5, o.Rgc), 2 & m)) {
                  let T;
                  o.iGM((T = o.CRH())) && (y.formatterTemplate = T.first);
                }
              },
              viewQuery: function (m, y) {
                if ((1 & m && o.Gf(t, 7), 2 & m)) {
                  let x;
                  o.iGM((x = o.CRH())) && (y.fullTemplate = x.first);
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
              features: [o.TTD],
              decls: 2,
              vars: 1,
              consts: [
                [3, 'ngTemplateOutlet'],
                ['toolboxContent', ''],
              ],
              template: function (m, y) {
                1 & m && o.YNc(0, s, 0, 0, 'ng-template', 0, 1, o.W1O),
                  2 & m && o.Q6J('ngTemplateOutlet', y.formatterTemplate);
              },
              dependencies: [c.tP],
              encapsulation: 2,
              changeDetection: 0,
            });
          }
          return i;
        })();
    },
  },
]);
