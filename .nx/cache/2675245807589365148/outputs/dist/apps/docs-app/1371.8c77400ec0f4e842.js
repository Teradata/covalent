'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [1371],
  {
    95277: (x, l, t) => {
      t.r(l), t.d(l, { CombinationModule: () => F });
      var o = t(96814),
        a = t(52787),
        r = t(98525),
        d = t(30617),
        i = t(22497),
        n = t(23421),
        m = t(81924),
        s = t(5965),
        u = t(57337),
        y = t(52514),
        c = t(63048),
        g = t(15861),
        f = t(76856),
        e = t(19212),
        A = t(64170),
        S = t(23680),
        C = t(1691),
        O = t(15079),
        D = t(39967),
        M = t(90230),
        L = t(64360);
      function E(h, w) {
        if ((1 & h && (e.TgZ(0, 'mat-option', 9), e._uU(1), e.qZA()), 2 & h)) {
          const p = w.$implicit;
          e.Q6J('value', p), e.xp6(1), e.hij(' ', p, ' ');
        }
      }
      const z = () => ({ show: !0 }),
        I = (h) => ({ tooltip: h }),
        P = () => [
          'Electronics',
          'Toys',
          'Grocery',
          'Appliances',
          'Automotive',
          'Sports',
        ],
        k = () => [150, 130, 150, 120, 150, 120],
        B = () => [80, 122, 80, 120, 80, 120];
      let R = (() => {
        class h {
          _cdr;
          themeSelector;
          themes = (0, n.RC)();
          selectedTheme;
          config = {
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
            ],
            yAxis: [
              {
                show: !0,
                type: 'value',
                axisLabel: { inside: !1 },
                min: 0,
                max: 300,
              },
            ],
            series: [
              {
                type: 'bar',
                markPoint: {
                  data: [{ name: 'Target', value: 130, xAxis: 1, yAxis: 130 }],
                },
                name: 'Yesterday',
                data: [150, 130, 150, 120, 150, 120],
              },
              {
                type: 'line',
                markPoint: {
                  data: [{ name: 'Target', value: 100, xAxis: 1, yAxis: 121 }],
                  symbolRotate: 180,
                  label: { offset: [0, 10] },
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
          constructor(p, v) {
            (this._cdr = p), (this.themeSelector = v);
          }
          ngOnInit() {
            var p = this;
            return (0, g.Z)(function* () {
              (p.selectedTheme = p.themeSelector.selected),
                p._cdr.markForCheck();
            })();
          }
          selectChartTheme(p) {
            this.themeSelector.select(p);
          }
          static ɵfac = function (v) {
            return new (v || h)(e.Y36(e.sBO), e.Y36(f.n));
          };
          static ɵcmp = e.Xpm({
            type: h,
            selectors: [['types-combination']],
            decls: 12,
            vars: 24,
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
              [3, 'themeName', 'config'],
              [3, 'show', 'data'],
              [3, 'show', 'type', 'min', 'max'],
              ['td-bar', '', 3, 'data', 'name'],
              ['td-line', '', 3, 'data', 'name'],
              [3, 'value'],
            ],
            template: function (v, T) {
              1 & v &&
                (e.TgZ(0, 'div', 0)(1, 'div', 1),
                e._uU(2, ' Chart Theme: '),
                e.qZA(),
                e.TgZ(3, 'mat-form-field')(4, 'mat-select', 2),
                e.NdJ('valueChange', function (b) {
                  return (T.selectedTheme = b);
                })('valueChange', function (b) {
                  return T.selectChartTheme(b);
                }),
                e.YNc(5, E, 2, 2, 'mat-option', 3),
                e.qZA()()(),
                e.TgZ(6, 'td-chart', 4),
                e.ALo(7, 'async'),
                e._UZ(8, 'td-chart-x-axis', 5)(9, 'td-chart-y-axis', 6)(
                  10,
                  'td-chart-series',
                  7
                )(11, 'td-chart-series', 8),
                e.qZA()),
                2 & v &&
                  (e.xp6(4),
                  e.Q6J('value', T.selectedTheme),
                  e.xp6(1),
                  e.Q6J('ngForOf', T.themes),
                  e.xp6(1),
                  e.Udp('height', 300, 'px'),
                  e.Q6J('themeName', e.lcZ(7, 16, T.themeSelector.selected$))(
                    'config',
                    e.VKq(19, I, e.DdM(18, z))
                  ),
                  e.xp6(2),
                  e.Q6J('show', !0)('data', e.DdM(21, P)),
                  e.xp6(1),
                  e.Q6J('show', !0)('type', 'value')('min', 0)('max', 300),
                  e.xp6(1),
                  e.Q6J('data', e.DdM(22, k))('name', 'Yesterday'),
                  e.xp6(1),
                  e.Q6J('data', e.DdM(23, B))('name', 'Today'));
            },
            dependencies: [
              o.sg,
              A.KE,
              r.gD,
              S.ey,
              C.L,
              O.O,
              D.$,
              M.P,
              L.h,
              o.Ov,
            ],
            styles: ['[_nghost-%COMP%]{width:100%}'],
            changeDetection: 0,
          });
        }
        return h;
      })();
      var U = t(41257);
      const G = (0, c.uw)({ overviewDemoComponent: R, id: 'combination' });
      let F = (() => {
        class h {
          static ɵfac = function (v) {
            return new (v || h)();
          };
          static ɵmod = e.oAB({ type: h });
          static ɵinj = e.cJS({
            imports: [
              o.ez,
              r.LD,
              d.Ps,
              n.MX,
              m.Uy,
              s.FA,
              u.NF,
              y.Po,
              i.q,
              U.m,
              a.Bz.forChild(G),
            ],
          });
        }
        return h;
      })();
    },
    64360: (x, l, t) => {
      t.d(l, { h: () => d });
      var o = t(19212),
        a = t(23421);
      const r = ['td-bar', ''];
      let d = (() => {
        class i extends a.R0 {
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
          constructor(m) {
            super('bar', m);
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
          static ɵfac = function (s) {
            return new (s || i)(o.Y36(a.ij));
          };
          static ɵcmp = o.Xpm({
            type: i,
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
              o._Bn([{ provide: a.R0, useExisting: (0, o.Gpc)(() => i) }]),
              o.qOj,
            ],
            attrs: r,
            decls: 0,
            vars: 0,
            template: function (s, u) {},
            encapsulation: 2,
            changeDetection: 0,
          });
        }
        return i;
      })();
    },
    5965: (x, l, t) => {
      t.d(l, { FA: () => i, hP: () => a.h });
      var o = t(96814),
        a = t(64360),
        r = t(19212);
      let i = (() => {
        class n {
          static ɵfac = function (u) {
            return new (u || n)();
          };
          static ɵmod = r.oAB({ type: n });
          static ɵinj = r.cJS({ imports: [o.ez] });
        }
        return n;
      })();
    },
    90230: (x, l, t) => {
      t.d(l, { P: () => d });
      var o = t(19212),
        a = t(23421);
      const r = ['td-line', ''];
      let d = (() => {
        class i extends a.R0 {
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
          constructor(m) {
            super('line', m);
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
          static ɵfac = function (s) {
            return new (s || i)(o.Y36(a.ij));
          };
          static ɵcmp = o.Xpm({
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
              o._Bn([{ provide: a.R0, useExisting: (0, o.Gpc)(() => i) }]),
              o.qOj,
            ],
            attrs: r,
            decls: 0,
            vars: 0,
            template: function (s, u) {},
            encapsulation: 2,
            changeDetection: 0,
          });
        }
        return i;
      })();
    },
    81924: (x, l, t) => {
      t.d(l, { Uy: () => i });
      var o = t(96814),
        r = (t(90230), t(19212));
      let i = (() => {
        class n {
          static ɵfac = function (u) {
            return new (u || n)();
          };
          static ɵmod = r.oAB({ type: n });
          static ɵinj = r.cJS({ imports: [o.ez] });
        }
        return n;
      })();
    },
    52514: (x, l, t) => {
      t.d(l, { Po: () => i });
      var o = t(96814),
        r = (t(13063), t(19212));
      let i = (() => {
        class n {
          static ɵfac = function (u) {
            return new (u || n)();
          };
          static ɵmod = r.oAB({ type: n });
          static ɵinj = r.cJS({ imports: [o.ez] });
        }
        return n;
      })();
    },
    13063: (x, l, t) => {
      t.d(l, { G: () => n, O: () => m });
      var o = t(19212),
        a = t(23421),
        r = t(96814);
      const d = ['toolboxContent'];
      function i(s, u) {}
      let n = (() => {
          class s {
            static ɵfac = function (c) {
              return new (c || s)();
            };
            static ɵdir = o.lG2({
              type: s,
              selectors: [['ng-template', 'tdViewDataFormatter', '']],
            });
          }
          return s;
        })(),
        m = (() => {
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
            constructor(y, c, g) {
              (this._changeDetectorRef = y),
                (this._elementRef = c),
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
              const y = (0, a.t8)(
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
              this._optionsService.setOption('toolbox', y);
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
            static ɵfac = function (c) {
              return new (c || s)(o.Y36(o.sBO), o.Y36(o.SBq), o.Y36(a.ij));
            };
            static ɵcmp = o.Xpm({
              type: s,
              selectors: [['td-chart-toolbox']],
              contentQueries: function (c, g, f) {
                if ((1 & c && o.Suo(f, n, 5, o.Rgc), 2 & c)) {
                  let e;
                  o.iGM((e = o.CRH())) && (g.formatterTemplate = e.first);
                }
              },
              viewQuery: function (c, g) {
                if ((1 & c && o.Gf(d, 7), 2 & c)) {
                  let f;
                  o.iGM((f = o.CRH())) && (g.fullTemplate = f.first);
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
              template: function (c, g) {
                1 & c && o.YNc(0, i, 0, 0, 'ng-template', 0, 1, o.W1O),
                  2 & c && o.Q6J('ngTemplateOutlet', g.formatterTemplate);
              },
              dependencies: [r.tP],
              encapsulation: 2,
              changeDetection: 0,
            });
          }
          return s;
        })();
    },
    39419: (x, l, t) => {
      t.d(l, { A0: () => n });
      var o = t(96814),
        a = t(30617),
        d = (t(21266), t(19212));
      let n = (() => {
        class m {
          static ɵfac = function (y) {
            return new (y || m)();
          };
          static ɵmod = d.oAB({ type: m });
          static ɵinj = d.cJS({ imports: [o.ez, a.Ps] });
        }
        return m;
      })();
    },
  },
]);
