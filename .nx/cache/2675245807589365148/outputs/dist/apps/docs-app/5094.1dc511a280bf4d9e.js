'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [5094],
  {
    5094: (v, c, t) => {
      t.r(c), t.d(c, { MapDemoModule: () => O });
      var e = t(96814),
        l = t(98525),
        r = t(30617),
        u = t(23421),
        m = t(81924),
        s = t(57337),
        y = t(52514),
        o = t(52787),
        n = t(19212),
        h = t(90336),
        i = t(31791);
      const f = [
        {
          path: '',
          component: (() => {
            class a {
              static ɵfac = function (d) {
                return new (d || a)();
              };
              static ɵcmp = n.Xpm({
                type: a,
                selectors: [['map-demo']],
                decls: 2,
                vars: 2,
                consts: [[3, 'demoId', 'demoTitle']],
                template: function (d, D) {
                  1 & d &&
                    (n.TgZ(0, 'demo-component', 0),
                    n._UZ(1, 'map-demo-basic'),
                    n.qZA()),
                    2 & d &&
                      n.Q6J('demoId', 'map-demo-basic')('demoTitle', 'Basic');
                },
                dependencies: [h.Y, i.z],
              });
            }
            return a;
          })(),
        },
      ];
      let g = (() => {
        class a {
          static ɵfac = function (d) {
            return new (d || a)();
          };
          static ɵmod = n.oAB({ type: a });
          static ɵinj = n.cJS({ imports: [o.Bz.forChild(f), o.Bz] });
        }
        return a;
      })();
      var b = t(96535),
        x = t(55589),
        T = t(73514);
      let O = (() => {
        class a {
          static ɵfac = function (d) {
            return new (d || a)();
          };
          static ɵmod = n.oAB({ type: a });
          static ɵinj = n.cJS({
            imports: [
              T.v,
              b.l,
              g,
              u.MX,
              m.Uy,
              x.rL,
              s.NF,
              y.Po,
              e.ez,
              l.LD,
              r.Ps,
            ],
          });
        }
        return a;
      })();
    },
    90230: (v, c, t) => {
      t.d(c, { P: () => u });
      var e = t(19212),
        l = t(23421);
      const r = ['td-line', ''];
      let u = (() => {
        class m extends l.R0 {
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
          constructor(y) {
            super('line', y);
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
          static ɵfac = function (o) {
            return new (o || m)(e.Y36(l.ij));
          };
          static ɵcmp = e.Xpm({
            type: m,
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
              e._Bn([{ provide: l.R0, useExisting: (0, e.Gpc)(() => m) }]),
              e.qOj,
            ],
            attrs: r,
            decls: 0,
            vars: 0,
            template: function (o, n) {},
            encapsulation: 2,
            changeDetection: 0,
          });
        }
        return m;
      })();
    },
    81924: (v, c, t) => {
      t.d(c, { Uy: () => m });
      var e = t(96814),
        r = (t(90230), t(19212));
      let m = (() => {
        class s {
          static ɵfac = function (n) {
            return new (n || s)();
          };
          static ɵmod = r.oAB({ type: s });
          static ɵinj = r.cJS({ imports: [e.ez] });
        }
        return s;
      })();
    },
    52514: (v, c, t) => {
      t.d(c, { Po: () => m });
      var e = t(96814),
        r = (t(13063), t(19212));
      let m = (() => {
        class s {
          static ɵfac = function (n) {
            return new (n || s)();
          };
          static ɵmod = r.oAB({ type: s });
          static ɵinj = r.cJS({ imports: [e.ez] });
        }
        return s;
      })();
    },
    13063: (v, c, t) => {
      t.d(c, { G: () => s, O: () => y });
      var e = t(19212),
        l = t(23421),
        r = t(96814);
      const u = ['toolboxContent'];
      function m(o, n) {}
      let s = (() => {
          class o {
            static ɵfac = function (i) {
              return new (i || o)();
            };
            static ɵdir = e.lG2({
              type: o,
              selectors: [['ng-template', 'tdViewDataFormatter', '']],
            });
          }
          return o;
        })(),
        y = (() => {
          class o {
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
            constructor(h, i, p) {
              (this._changeDetectorRef = h),
                (this._elementRef = i),
                (this._optionsService = p);
            }
            ngOnChanges() {
              this._setOptions();
            }
            ngOnDestroy() {
              this._removeOption();
            }
            _setOptions() {
              this._checkFormatterTemplate();
              const h = (0, l.t8)(
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
              this._optionsService.setOption('toolbox', h);
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
            static ɵfac = function (i) {
              return new (i || o)(e.Y36(e.sBO), e.Y36(e.SBq), e.Y36(l.ij));
            };
            static ɵcmp = e.Xpm({
              type: o,
              selectors: [['td-chart-toolbox']],
              contentQueries: function (i, p, f) {
                if ((1 & i && e.Suo(f, s, 5, e.Rgc), 2 & i)) {
                  let g;
                  e.iGM((g = e.CRH())) && (p.formatterTemplate = g.first);
                }
              },
              viewQuery: function (i, p) {
                if ((1 & i && e.Gf(u, 7), 2 & i)) {
                  let f;
                  e.iGM((f = e.CRH())) && (p.fullTemplate = f.first);
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
              features: [e.TTD],
              decls: 2,
              vars: 1,
              consts: [
                [3, 'ngTemplateOutlet'],
                ['toolboxContent', ''],
              ],
              template: function (i, p) {
                1 & i && e.YNc(0, m, 0, 0, 'ng-template', 0, 1, e.W1O),
                  2 & i && e.Q6J('ngTemplateOutlet', p.formatterTemplate);
              },
              dependencies: [r.tP],
              encapsulation: 2,
              changeDetection: 0,
            });
          }
          return o;
        })();
    },
  },
]);
