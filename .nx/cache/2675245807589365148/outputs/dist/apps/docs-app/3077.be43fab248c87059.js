'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [3077],
  {
    73077: (x, h, e) => {
      e.r(h), e.d(h, { ScatterDemoModule: () => xt });
      var a = e(96814),
        c = e(98525),
        d = e(30617),
        y = e(23421),
        m = e(57337),
        l = e(52514),
        f = e(84770),
        s = e(52787),
        t = e(19212),
        p = e(31791),
        r = e(15861),
        g = e(76856),
        v = e(1691),
        S = e(15079),
        A = e(39967),
        M = e(33822),
        I = e(7287),
        O = e(64170),
        z = e(23680);
      function _(n, D) {
        if ((1 & n && (t.TgZ(0, 'mat-option', 10), t._uU(1), t.qZA()), 2 & n)) {
          const o = D.$implicit;
          t.Q6J('value', o), t.xp6(1), t.hij(' ', o, ' ');
        }
      }
      function F(n, D) {
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
          const o = t.oxw().$implicit;
          t.xp6(2),
            t.Udp('color', o.color),
            t.xp6(3),
            t.hij(' ', o.seriesName + ': ' + o.value[1], ' ');
        }
      }
      function B(n, D) {
        1 & n && t.YNc(0, F, 6, 3, 'ng-container', 11),
          2 & n && t.Q6J('ngIf', D.$implicit);
      }
      const E = () => [28604, 77, 17096869, 'Australia', 1990],
        U = () => [31163, 77.4, 27662440, 'Canada', 1990],
        R = () => [1516, 68, 1154605773, 'China', 1990],
        L = () => [13670, 74.7, 10582082, 'Cuba', 1990],
        N = () => [28599, 75, 4986705, 'Finland', 1990],
        P = () => [29476, 77.1, 56943299, 'France', 1990],
        Z = () => [31476, 75.4, 78958237, 'Germany', 1990],
        w = () => [28666, 78.1, 254830, 'Iceland', 1990],
        K = () => [1777, 57.7, 870601776, 'India', 1990],
        J = () => [29550, 79.1, 122249285, 'Japan', 1990],
        G = () => [2076, 67.9, 20194354, 'North Korea', 1990],
        Q = () => [12087, 72, 42972254, 'South Korea', 1990],
        Y = () => [24021, 75.4, 3397534, 'New Zealand', 1990],
        H = () => [43296, 76.8, 4240375, 'Norway', 1990],
        j = () => [10088, 70.8, 38195258, 'Poland', 1990],
        k = () => [19349, 69.6, 147568552, 'Russia', 1990],
        W = () => [10670, 67.3, 53994605, 'Turkey', 1990],
        X = () => [26424, 75.7, 57110117, 'United Kingdom', 1990],
        $ = () => [37062, 75.4, 252847810, 'United States', 1990],
        b = (
          n,
          D,
          o,
          i,
          u,
          C,
          T,
          St,
          Ct,
          Mt,
          bt,
          At,
          It,
          Ot,
          zt,
          _t,
          Ft,
          Bt,
          Et
        ) => [
          n,
          D,
          o,
          i,
          u,
          C,
          T,
          St,
          Ct,
          Mt,
          bt,
          At,
          It,
          Ot,
          zt,
          _t,
          Ft,
          Bt,
          Et,
        ],
        V = () => [44056, 81.8, 23968973, 'Australia', 2015],
        q = () => [43294, 81.7, 35939927, 'Canada', 2015],
        tt = () => [13334, 76.9, 1376048943, 'China', 2015],
        et = () => [21291, 78.5, 11389562, 'Cuba', 2015],
        ot = () => [38923, 80.8, 5503457, 'Finland', 2015],
        at = () => [37599, 81.9, 64395345, 'France', 2015],
        nt = () => [44053, 81.1, 80688545, 'Germany', 2015],
        st = () => [42182, 82.8, 329425, 'Iceland', 2015],
        it = () => [5903, 66.8, 1311050527, 'India', 2015],
        rt = () => [36162, 83.5, 126573481, 'Japan', 2015],
        ct = () => [1390, 71.4, 25155317, 'North Korea', 2015],
        lt = () => [34644, 80.7, 50293439, 'South Korea', 2015],
        mt = () => [34186, 80.6, 4528526, 'New Zealand', 2015],
        dt = () => [64304, 81.6, 5210967, 'Norway', 2015],
        ht = () => [24787, 77.3, 38611794, 'Poland', 2015],
        pt = () => [23038, 73.13, 143456918, 'Russia', 2015],
        ut = () => [19360, 76.5, 78665830, 'Turkey', 2015],
        gt = () => [38225, 81.4, 64715810, 'United Kingdom', 2015],
        yt = () => [53354, 79.1, 321773631, 'United States', 2015];
      let ft = (() => {
        class n {
          _cdr;
          themeSelector;
          themes = (0, y.RC)();
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
                symbolSize: (o) => Math.sqrt(o[2]) / 500,
                label: {
                  show: !0,
                  formatter: (o) => o.data[3],
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
                symbolSize: (o) => Math.sqrt(o[2]) / 500,
                label: {
                  show: !0,
                  formatter: (o) => o.data[3],
                  position: 'top',
                },
              },
            ],
          };
          constructor(o, i) {
            (this._cdr = o), (this.themeSelector = i);
          }
          ngOnInit() {
            var o = this;
            return (0, r.Z)(function* () {
              (o.selectedTheme = o.themeSelector.selected),
                o._cdr.markForCheck();
            })();
          }
          selectChartTheme(o) {
            this.themeSelector.select(o);
          }
          symbolSize(o) {
            return Math.sqrt(o[2]) / 500;
          }
          static ɵfac = function (i) {
            return new (i || n)(t.Y36(t.sBO), t.Y36(g.n));
          };
          static ɵcmp = t.Xpm({
            type: n,
            selectors: [['scatter-demo-basic']],
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
            template: function (i, u) {
              1 & i &&
                (t.TgZ(0, 'div', 0)(1, 'div', 1),
                t._uU(2, ' Chart Theme: '),
                t.qZA(),
                t.TgZ(3, 'mat-form-field')(4, 'mat-select', 2),
                t.NdJ('valueChange', function (T) {
                  return (u.selectedTheme = T);
                })('valueChange', function (T) {
                  return u.selectChartTheme(T);
                }),
                t.YNc(5, _, 2, 2, 'mat-option', 3),
                t.qZA()()(),
                t.TgZ(6, 'td-chart', 4),
                t.ALo(7, 'async'),
                t.TgZ(8, 'td-chart-tooltip', 5),
                t.YNc(9, B, 1, 1, 'ng-template', 6),
                t.qZA(),
                t._UZ(10, 'td-chart-x-axis', 7)(11, 'td-chart-y-axis', 8)(
                  12,
                  'td-chart-series',
                  9
                )(13, 'td-chart-series', 9),
                t.qZA()),
                2 & i &&
                  (t.xp6(4),
                  t.Q6J('value', u.selectedTheme),
                  t.xp6(1),
                  t.Q6J('ngForOf', u.themes),
                  t.xp6(1),
                  t.Udp('height', 300, 'px'),
                  t.Q6J('themeName', t.lcZ(7, 18, u.themeSelector.selected$)),
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
                    t.rFY(39, b, [
                      t.DdM(20, E),
                      t.DdM(21, U),
                      t.DdM(22, R),
                      t.DdM(23, L),
                      t.DdM(24, N),
                      t.DdM(25, P),
                      t.DdM(26, Z),
                      t.DdM(27, w),
                      t.DdM(28, K),
                      t.DdM(29, J),
                      t.DdM(30, G),
                      t.DdM(31, Q),
                      t.DdM(32, Y),
                      t.DdM(33, H),
                      t.DdM(34, j),
                      t.DdM(35, k),
                      t.DdM(36, W),
                      t.DdM(37, X),
                      t.DdM(38, $),
                    ])
                  )('name', '1990')('symbolSize', u.symbolSize),
                  t.xp6(1),
                  t.Q6J(
                    'data',
                    t.rFY(78, b, [
                      t.DdM(59, V),
                      t.DdM(60, q),
                      t.DdM(61, tt),
                      t.DdM(62, et),
                      t.DdM(63, ot),
                      t.DdM(64, at),
                      t.DdM(65, nt),
                      t.DdM(66, st),
                      t.DdM(67, it),
                      t.DdM(68, rt),
                      t.DdM(69, ct),
                      t.DdM(70, lt),
                      t.DdM(71, mt),
                      t.DdM(72, dt),
                      t.DdM(73, ht),
                      t.DdM(74, pt),
                      t.DdM(75, ut),
                      t.DdM(76, gt),
                      t.DdM(77, yt),
                    ])
                  )('name', '2015')('symbolSize', u.symbolSize));
            },
            dependencies: [
              v.L,
              S.O,
              A.$,
              M.HN,
              M.dA,
              I._,
              a.sg,
              a.O5,
              O.KE,
              c.gD,
              z.ey,
              d.Hw,
              a.Ov,
            ],
            changeDetection: 0,
          });
        }
        return n;
      })();
      const vt = [
        {
          path: '',
          component: (() => {
            class n {
              static ɵfac = function (i) {
                return new (i || n)();
              };
              static ɵcmp = t.Xpm({
                type: n,
                selectors: [['scatter-demo']],
                decls: 2,
                vars: 2,
                consts: [[3, 'demoId', 'demoTitle']],
                template: function (i, u) {
                  1 & i &&
                    (t.TgZ(0, 'demo-component', 0),
                    t._UZ(1, 'scatter-demo-basic'),
                    t.qZA()),
                    2 & i &&
                      t.Q6J('demoId', 'scatter-demo-basic')(
                        'demoTitle',
                        'Basic'
                      );
                },
                dependencies: [p.z, ft],
              });
            }
            return n;
          })(),
        },
      ];
      let Dt = (() => {
        class n {
          static ɵfac = function (i) {
            return new (i || n)();
          };
          static ɵmod = t.oAB({ type: n });
          static ɵinj = t.cJS({ imports: [s.Bz.forChild(vt), s.Bz] });
        }
        return n;
      })();
      var Tt = e(96535);
      let xt = (() => {
        class n {
          static ɵfac = function (i) {
            return new (i || n)();
          };
          static ɵmod = t.oAB({ type: n });
          static ɵinj = t.cJS({
            imports: [Tt.l, Dt, y.MX, m.NF, l.Po, f.gQ, a.ez, c.LD, d.Ps],
          });
        }
        return n;
      })();
    },
    84770: (x, h, e) => {
      e.d(h, { gQ: () => m, _W: () => c._ });
      var a = e(96814),
        c = e(7287),
        d = e(19212);
      let m = (() => {
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
    7287: (x, h, e) => {
      e.d(h, { _: () => y });
      var a = e(19212),
        c = e(23421);
      const d = ['td-scatter', ''];
      let y = (() => {
        class m extends c.R0 {
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
          constructor(f) {
            super('scatter', f);
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
          static ɵfac = function (s) {
            return new (s || m)(a.Y36(c.ij));
          };
          static ɵcmp = a.Xpm({
            type: m,
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
              a._Bn([{ provide: c.R0, useExisting: (0, a.Gpc)(() => m) }]),
              a.qOj,
            ],
            attrs: d,
            decls: 0,
            vars: 0,
            template: function (s, t) {},
            encapsulation: 2,
            changeDetection: 0,
          });
        }
        return m;
      })();
    },
    52514: (x, h, e) => {
      e.d(h, { Po: () => m });
      var a = e(96814),
        d = (e(13063), e(19212));
      let m = (() => {
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
    13063: (x, h, e) => {
      e.d(h, { G: () => l, O: () => f });
      var a = e(19212),
        c = e(23421),
        d = e(96814);
      const y = ['toolboxContent'];
      function m(s, t) {}
      let l = (() => {
          class s {
            static ɵfac = function (r) {
              return new (r || s)();
            };
            static ɵdir = a.lG2({
              type: s,
              selectors: [['ng-template', 'tdViewDataFormatter', '']],
            });
          }
          return s;
        })(),
        f = (() => {
          class s {
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
            constructor(p, r, g) {
              (this._changeDetectorRef = p),
                (this._elementRef = r),
                (this._optionsService = g);
            }
            ngOnChanges() {
              this._setOptions();
            }
            ngOnDestroy() {
              this._removeOption();
            }
            _setOptions() {
              this._checkFormatterTemplate();
              const p = (0, c.t8)(
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
              this._optionsService.setOption('toolbox', p);
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
            static ɵfac = function (r) {
              return new (r || s)(a.Y36(a.sBO), a.Y36(a.SBq), a.Y36(c.ij));
            };
            static ɵcmp = a.Xpm({
              type: s,
              selectors: [['td-chart-toolbox']],
              contentQueries: function (r, g, v) {
                if ((1 & r && a.Suo(v, l, 5, a.Rgc), 2 & r)) {
                  let S;
                  a.iGM((S = a.CRH())) && (g.formatterTemplate = S.first);
                }
              },
              viewQuery: function (r, g) {
                if ((1 & r && a.Gf(y, 7), 2 & r)) {
                  let v;
                  a.iGM((v = a.CRH())) && (g.fullTemplate = v.first);
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
              template: function (r, g) {
                1 & r && a.YNc(0, m, 0, 0, 'ng-template', 0, 1, a.W1O),
                  2 & r && a.Q6J('ngTemplateOutlet', g.formatterTemplate);
              },
              dependencies: [d.tP],
              encapsulation: 2,
              changeDetection: 0,
            });
          }
          return s;
        })();
    },
  },
]);
