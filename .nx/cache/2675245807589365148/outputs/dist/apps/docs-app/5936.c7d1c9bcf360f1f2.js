'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [5936],
  {
    12927: (x, h, e) => {
      e.r(h), e.d(h, { ScatterModule: () => St });
      var o = e(96814),
        s = e(52787),
        i = e(98525),
        p = e(30617),
        r = e(22497),
        d = e(23421),
        c = e(57337),
        u = e(84770),
        g = e(63048),
        D = e(41257),
        T = e(15861),
        A = e(76856),
        t = e(19212),
        C = e(64170),
        I = e(23680),
        b = e(1691),
        z = e(15079),
        U = e(39967),
        N = e(7287),
        f = e(33822);
      function F(n, y) {
        if ((1 & n && (t.TgZ(0, 'mat-option', 10), t._uU(1), t.qZA()), 2 & n)) {
          const a = y.$implicit;
          t.Q6J('value', a), t.xp6(1), t.hij(' ', a, ' ');
        }
      }
      function L(n, y) {
        if (
          (1 & n &&
            (t.ynx(0),
            t.TgZ(1, 'div', 0)(2, 'mat-icon'),
            t._uU(3, 'person'),
            t.qZA(),
            t.TgZ(4, 'span', 12),
            t._uU(5),
            t.qZA()(),
            t.BQk()),
          2 & n)
        ) {
          const a = t.oxw().$implicit;
          t.xp6(2),
            t.Udp('color', a.color),
            t.xp6(3),
            t.hij(' ', a.seriesName + ': ' + a.value[1], ' ');
        }
      }
      function O(n, y) {
        1 & n && t.YNc(0, L, 6, 3, 'ng-container', 11),
          2 & n && t.Q6J('ngIf', y.$implicit);
      }
      const Z = () => [28604, 77, 17096869, 'Australia', 1990],
        K = () => [31163, 77.4, 27662440, 'Canada', 1990],
        E = () => [1516, 68, 1154605773, 'China', 1990],
        J = () => [13670, 74.7, 10582082, 'Cuba', 1990],
        P = () => [28599, 75, 4986705, 'Finland', 1990],
        B = () => [29476, 77.1, 56943299, 'France', 1990],
        R = () => [31476, 75.4, 78958237, 'Germany', 1990],
        Q = () => [28666, 78.1, 254830, 'Iceland', 1990],
        G = () => [1777, 57.7, 870601776, 'India', 1990],
        Y = () => [29550, 79.1, 122249285, 'Japan', 1990],
        j = () => [2076, 67.9, 20194354, 'North Korea', 1990],
        H = () => [12087, 72, 42972254, 'South Korea', 1990],
        $ = () => [24021, 75.4, 3397534, 'New Zealand', 1990],
        k = () => [43296, 76.8, 4240375, 'Norway', 1990],
        w = () => [10088, 70.8, 38195258, 'Poland', 1990],
        W = () => [19349, 69.6, 147568552, 'Russia', 1990],
        X = () => [10670, 67.3, 53994605, 'Turkey', 1990],
        V = () => [26424, 75.7, 57110117, 'United Kingdom', 1990],
        _ = () => [37062, 75.4, 252847810, 'United States', 1990],
        M = (
          n,
          y,
          a,
          l,
          m,
          S,
          v,
          ft,
          Mt,
          Tt,
          At,
          Ct,
          It,
          bt,
          zt,
          Ut,
          Nt,
          Ft,
          Lt
        ) => [
          n,
          y,
          a,
          l,
          m,
          S,
          v,
          ft,
          Mt,
          Tt,
          At,
          Ct,
          It,
          bt,
          zt,
          Ut,
          Nt,
          Ft,
          Lt,
        ],
        q = () => [44056, 81.8, 23968973, 'Australia', 2015],
        tt = () => [43294, 81.7, 35939927, 'Canada', 2015],
        et = () => [13334, 76.9, 1376048943, 'China', 2015],
        at = () => [21291, 78.5, 11389562, 'Cuba', 2015],
        nt = () => [38923, 80.8, 5503457, 'Finland', 2015],
        ot = () => [37599, 81.9, 64395345, 'France', 2015],
        st = () => [44053, 81.1, 80688545, 'Germany', 2015],
        it = () => [42182, 82.8, 329425, 'Iceland', 2015],
        rt = () => [5903, 66.8, 1311050527, 'India', 2015],
        ct = () => [36162, 83.5, 126573481, 'Japan', 2015],
        lt = () => [1390, 71.4, 25155317, 'North Korea', 2015],
        dt = () => [34644, 80.7, 50293439, 'South Korea', 2015],
        mt = () => [34186, 80.6, 4528526, 'New Zealand', 2015],
        ht = () => [64304, 81.6, 5210967, 'Norway', 2015],
        pt = () => [24787, 77.3, 38611794, 'Poland', 2015],
        yt = () => [23038, 73.13, 143456918, 'Russia', 2015],
        ut = () => [19360, 76.5, 78665830, 'Turkey', 2015],
        gt = () => [38225, 81.4, 64715810, 'United Kingdom', 2015],
        vt = () => [53354, 79.1, 321773631, 'United States', 2015],
        Dt = (0, g.uw)({
          overviewDemoComponent: (() => {
            class n {
              _cdr;
              themeSelector;
              themes = (0, d.RC)();
              selectedTheme;
              config = {
                tooltip: { show: !0 },
                legend: { right: 10, data: ['1990', '2015'] },
                xAxis: [{ show: !0 }],
                yAxis: [{ show: !0 }],
                series: [
                  {
                    name: '1990',
                    data: [
                      [28604, 77, 17096869, 'Australia', 1990],
                      [31163, 77.4, 27662440, 'Canada', 1990],
                      [1516, 68, 1154605773, 'China', 1990],
                      [13670, 74.7, 10582082, 'Cuba', 1990],
                      [28599, 75, 4986705, 'Finland', 1990],
                      [29476, 77.1, 56943299, 'France', 1990],
                      [31476, 75.4, 78958237, 'Germany', 1990],
                      [28666, 78.1, 254830, 'Iceland', 1990],
                      [1777, 57.7, 870601776, 'India', 1990],
                      [29550, 79.1, 122249285, 'Japan', 1990],
                      [2076, 67.9, 20194354, 'North Korea', 1990],
                      [12087, 72, 42972254, 'South Korea', 1990],
                      [24021, 75.4, 3397534, 'New Zealand', 1990],
                      [43296, 76.8, 4240375, 'Norway', 1990],
                      [10088, 70.8, 38195258, 'Poland', 1990],
                      [19349, 69.6, 147568552, 'Russia', 1990],
                      [10670, 67.3, 53994605, 'Turkey', 1990],
                      [26424, 75.7, 57110117, 'United Kingdom', 1990],
                      [37062, 75.4, 252847810, 'United States', 1990],
                    ],
                    type: 'scatter',
                    itemStyle: { opacity: 0.75, color: '#007373' },
                    symbolSize: (a) => Math.sqrt(a[2]) / 500,
                    label: {
                      show: !0,
                      formatter: (a) => a.data[3],
                      position: 'top',
                    },
                  },
                  {
                    name: '2015',
                    data: [
                      [44056, 81.8, 23968973, 'Australia', 2015],
                      [43294, 81.7, 35939927, 'Canada', 2015],
                      [13334, 76.9, 1376048943, 'China', 2015],
                      [21291, 78.5, 11389562, 'Cuba', 2015],
                      [38923, 80.8, 5503457, 'Finland', 2015],
                      [37599, 81.9, 64395345, 'France', 2015],
                      [44053, 81.1, 80688545, 'Germany', 2015],
                      [42182, 82.8, 329425, 'Iceland', 2015],
                      [5903, 66.8, 1311050527, 'India', 2015],
                      [36162, 83.5, 126573481, 'Japan', 2015],
                      [1390, 71.4, 25155317, 'North Korea', 2015],
                      [34644, 80.7, 50293439, 'South Korea', 2015],
                      [34186, 80.6, 4528526, 'New Zealand', 2015],
                      [64304, 81.6, 5210967, 'Norway', 2015],
                      [24787, 77.3, 38611794, 'Poland', 2015],
                      [23038, 73.13, 143456918, 'Russia', 2015],
                      [19360, 76.5, 78665830, 'Turkey', 2015],
                      [38225, 81.4, 64715810, 'United Kingdom', 2015],
                      [53354, 79.1, 321773631, 'United States', 2015],
                    ],
                    type: 'scatter',
                    itemStyle: { opacity: 0.75, color: '#1B98C6' },
                    symbolSize: (a) => Math.sqrt(a[2]) / 500,
                    label: {
                      show: !0,
                      formatter: (a) => a.data[3],
                      position: 'top',
                    },
                  },
                ],
              };
              constructor(a, l) {
                (this._cdr = a), (this.themeSelector = l);
              }
              ngOnInit() {
                var a = this;
                return (0, T.Z)(function* () {
                  (a.selectedTheme = a.themeSelector.selected),
                    a._cdr.markForCheck();
                })();
              }
              selectChartTheme(a) {
                this.themeSelector.select(a);
              }
              symbolSize(a) {
                return Math.sqrt(a[2]) / 500;
              }
              static ɵfac = function (l) {
                return new (l || n)(t.Y36(t.sBO), t.Y36(A.n));
              };
              static ɵcmp = t.Xpm({
                type: n,
                selectors: [['types-scatter']],
                decls: 14,
                vars: 98,
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
                  ['tdTooltipFormatter', ''],
                  [3, 'show', 'position', 'type', 'boundaryGap'],
                  [3, 'show', 'type'],
                  ['td-scatter', '', 3, 'data', 'name', 'symbolSize'],
                  [3, 'value'],
                  [4, 'ngIf'],
                  [1, 'mat-caption', 'pad-left-sm'],
                ],
                template: function (l, m) {
                  1 & l &&
                    (t.TgZ(0, 'div', 0)(1, 'div', 1),
                    t._uU(2, ' Chart Theme: '),
                    t.qZA(),
                    t.TgZ(3, 'mat-form-field')(4, 'mat-select', 2),
                    t.NdJ('valueChange', function (v) {
                      return (m.selectedTheme = v);
                    })('valueChange', function (v) {
                      return m.selectChartTheme(v);
                    }),
                    t.YNc(5, F, 2, 2, 'mat-option', 3),
                    t.qZA()()(),
                    t.TgZ(6, 'td-chart', 4),
                    t.ALo(7, 'async'),
                    t.TgZ(8, 'td-chart-tooltip', 5),
                    t.YNc(9, O, 1, 1, 'ng-template', 6),
                    t.qZA(),
                    t._UZ(10, 'td-chart-x-axis', 7)(11, 'td-chart-y-axis', 8)(
                      12,
                      'td-chart-series',
                      9
                    )(13, 'td-chart-series', 9),
                    t.qZA()),
                    2 & l &&
                      (t.xp6(4),
                      t.Q6J('value', m.selectedTheme),
                      t.xp6(1),
                      t.Q6J('ngForOf', m.themes),
                      t.xp6(1),
                      t.Udp('height', 300, 'px'),
                      t.Q6J(
                        'themeName',
                        t.lcZ(7, 18, m.themeSelector.selected$)
                      ),
                      t.xp6(2),
                      t.Q6J('trigger', 'item'),
                      t.xp6(2),
                      t.Q6J('show', !0)('position', 'bottom')('type', 'value')(
                        'boundaryGap',
                        !0
                      ),
                      t.xp6(1),
                      t.Q6J('show', !0)('type', 'value'),
                      t.xp6(1),
                      t.Q6J(
                        'data',
                        t.rFY(39, M, [
                          t.DdM(20, Z),
                          t.DdM(21, K),
                          t.DdM(22, E),
                          t.DdM(23, J),
                          t.DdM(24, P),
                          t.DdM(25, B),
                          t.DdM(26, R),
                          t.DdM(27, Q),
                          t.DdM(28, G),
                          t.DdM(29, Y),
                          t.DdM(30, j),
                          t.DdM(31, H),
                          t.DdM(32, $),
                          t.DdM(33, k),
                          t.DdM(34, w),
                          t.DdM(35, W),
                          t.DdM(36, X),
                          t.DdM(37, V),
                          t.DdM(38, _),
                        ])
                      )('name', '1990')('symbolSize', m.symbolSize),
                      t.xp6(1),
                      t.Q6J(
                        'data',
                        t.rFY(78, M, [
                          t.DdM(59, q),
                          t.DdM(60, tt),
                          t.DdM(61, et),
                          t.DdM(62, at),
                          t.DdM(63, nt),
                          t.DdM(64, ot),
                          t.DdM(65, st),
                          t.DdM(66, it),
                          t.DdM(67, rt),
                          t.DdM(68, ct),
                          t.DdM(69, lt),
                          t.DdM(70, dt),
                          t.DdM(71, mt),
                          t.DdM(72, ht),
                          t.DdM(73, pt),
                          t.DdM(74, yt),
                          t.DdM(75, ut),
                          t.DdM(76, gt),
                          t.DdM(77, vt),
                        ])
                      )('name', '2015')('symbolSize', m.symbolSize));
                },
                dependencies: [
                  o.sg,
                  o.O5,
                  C.KE,
                  i.gD,
                  I.ey,
                  p.Hw,
                  b.L,
                  z.O,
                  U.$,
                  N._,
                  f.HN,
                  f.dA,
                  o.Ov,
                ],
                styles: ['[_nghost-%COMP%]{width:100%}'],
                changeDetection: 0,
              });
            }
            return n;
          })(),
          id: 'scatter',
        });
      let St = (() => {
        class n {
          static ɵfac = function (l) {
            return new (l || n)();
          };
          static ɵmod = t.oAB({ type: n });
          static ɵinj = t.cJS({
            imports: [
              o.ez,
              i.LD,
              p.Ps,
              d.MX,
              u.gQ,
              c.NF,
              r.q,
              D.m,
              s.Bz.forChild(Dt),
            ],
          });
        }
        return n;
      })();
    },
    84770: (x, h, e) => {
      e.d(h, { gQ: () => r, _W: () => s._ });
      var o = e(96814),
        s = e(7287),
        i = e(19212);
      let r = (() => {
        class d {
          static ɵfac = function (g) {
            return new (g || d)();
          };
          static ɵmod = i.oAB({ type: d });
          static ɵinj = i.cJS({ imports: [o.ez] });
        }
        return d;
      })();
    },
    7287: (x, h, e) => {
      e.d(h, { _: () => p });
      var o = e(19212),
        s = e(23421);
      const i = ['td-scatter', ''];
      let p = (() => {
        class r extends s.R0 {
          coordinateSystem;
          xAxisIndex;
          yAxisIndex;
          polarIndex;
          geoIndex;
          calendarIndex;
          hoverAnimation;
          legendHoverLink;
          symbol;
          symbolSize;
          symbolRotate;
          symbolKeepAspect;
          symbolOffset;
          large;
          largeThreshold;
          cursor;
          label;
          itemStyle;
          emphasis;
          progressive;
          progressiveThreshold;
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
          constructor(c) {
            super('scatter', c);
          }
          getConfig() {
            return {
              coordinateSystem: this.coordinateSystem,
              xAxisIndex: this.xAxisIndex,
              yAxisIndex: this.yAxisIndex,
              polarIndex: this.polarIndex,
              geoIndex: this.geoIndex,
              calendarIndex: this.calendarIndex,
              hoverAnimation: this.hoverAnimation,
              legendHoverLink: this.legendHoverLink,
              symbol: this.symbol,
              symbolSize: this.symbolSize,
              symbolRotate: this.symbolRotate,
              symbolKeepAspect: this.symbolKeepAspect,
              symbolOffset: this.symbolOffset,
              large: this.large,
              largeThreshold: this.largeThreshold,
              cursor: this.cursor,
              label: this.label,
              itemStyle: this.itemStyle,
              emphasis: this.emphasis,
              progressive: this.progressive,
              progressiveThreshold: this.progressiveThreshold,
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
          static ɵfac = function (u) {
            return new (u || r)(o.Y36(s.ij));
          };
          static ɵcmp = o.Xpm({
            type: r,
            selectors: [['td-chart-series', 'td-scatter', '']],
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
              geoIndex: 'geoIndex',
              calendarIndex: 'calendarIndex',
              hoverAnimation: 'hoverAnimation',
              legendHoverLink: 'legendHoverLink',
              symbol: 'symbol',
              symbolSize: 'symbolSize',
              symbolRotate: 'symbolRotate',
              symbolKeepAspect: 'symbolKeepAspect',
              symbolOffset: 'symbolOffset',
              large: 'large',
              largeThreshold: 'largeThreshold',
              cursor: 'cursor',
              label: 'label',
              itemStyle: 'itemStyle',
              emphasis: 'emphasis',
              progressive: 'progressive',
              progressiveThreshold: 'progressiveThreshold',
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
              o._Bn([{ provide: s.R0, useExisting: (0, o.Gpc)(() => r) }]),
              o.qOj,
            ],
            attrs: i,
            decls: 0,
            vars: 0,
            template: function (u, g) {},
            encapsulation: 2,
            changeDetection: 0,
          });
        }
        return r;
      })();
    },
    39419: (x, h, e) => {
      e.d(h, { A0: () => d });
      var o = e(96814),
        s = e(30617),
        p = (e(21266), e(19212));
      let d = (() => {
        class c {
          static ɵfac = function (D) {
            return new (D || c)();
          };
          static ɵmod = p.oAB({ type: c });
          static ɵinj = p.cJS({ imports: [o.ez, s.Ps] });
        }
        return c;
      })();
    },
  },
]);
