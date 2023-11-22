'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [6424],
  {
    42932: (D, m, e) => {
      e.d(m, { w: () => Mt });
      var a = e(15861),
        i = e(23421),
        l = e(76856),
        t = e(19212),
        n = e(1691),
        r = e(15079),
        d = e(39967),
        c = e(64335),
        h = e(33822),
        _ = e(13063),
        p = e(96814),
        M = e(64170),
        x = e(98525),
        E = e(23680),
        f = e(30617),
        C = e(4563);
      function A(s, g) {
        if ((1 & s && (t.TgZ(0, 'mat-option', 13), t._uU(1), t.qZA()), 2 & s)) {
          const o = g.$implicit;
          t.Q6J('value', o), t.xp6(1), t.hij(' ', o, ' ');
        }
      }
      function T(s, g) {
        if ((1 & s && (t.TgZ(0, 'mat-option', 13), t._uU(1), t.qZA()), 2 & s)) {
          const o = g.$implicit;
          t.Q6J('value', o), t.xp6(1), t.hij(' ', o, ' ');
        }
      }
      function P(s, g) {
        if (
          (1 & s &&
            (t.ynx(0),
            t.TgZ(1, 'div', 15)(2, 'mat-icon')(3, 'span'),
            t._uU(4, 'people'),
            t.qZA()(),
            t.TgZ(5, 'span', 16),
            t._uU(6),
            t.qZA()(),
            t.BQk()),
          2 & s)
        ) {
          const o = t.oxw().$implicit;
          t.xp6(3),
            t.Udp('color', o.color),
            t.xp6(3),
            t.AsE(
              ' ',
              o.seriesName ? o.seriesName : o.name,
              ': ',
              o.value,
              ' '
            );
        }
      }
      function b(s, g) {
        1 & s && t.YNc(0, P, 7, 4, 'ng-container', 14),
          2 & s && t.Q6J('ngIf', g.$implicit);
      }
      const L = () => [8.3, 8.5],
        I = () => [8.6, 8.7],
        B = () => [8.8, 9.2],
        U = () => [10.5, 9.9],
        S = () => [10.7, 10.2],
        R = () => [10.8, 10.3],
        W = () => [11, 11.2],
        K = () => [11, 11.3],
        k = () => [11.1, 11.3],
        H = () => [11.2, 11.5],
        z = () => [11.3, 11.6],
        N = () => [11.4, 11.7],
        Z = () => [11.4, 11.8],
        G = () => [11.7, 12],
        J = () => [12, 12],
        F = () => [12.9, 12.5],
        Q = () => [12.9, 12.9],
        j = () => [13.3, 13],
        Y = () => [13.7, 13.5],
        w = () => [13.8, 14, 8],
        V = () => [14, 15.1],
        $ = () => [14.2, 15.2],
        X = () => [14.5, 15.3],
        q = () => [16, 15.8],
        tt = () => [16.3, 16.2],
        et = () => [17.3, 16.3],
        at = () => [17.5, 16.4],
        st = () => [17.9, 19.5],
        ot = () => [18, 19.8],
        it = () => [18, 20.1],
        nt = () => [20.6, 20.2],
        rt = (
          s,
          g,
          o,
          y,
          u,
          O,
          v,
          vt,
          Et,
          xt,
          Ot,
          At,
          Tt,
          ft,
          Ct,
          Pt,
          bt,
          Lt,
          It,
          Bt,
          Ut,
          St,
          Rt,
          Wt,
          Kt,
          kt,
          Ht,
          zt,
          Nt,
          Zt,
          Gt
        ) => [
          s,
          g,
          o,
          y,
          u,
          O,
          v,
          vt,
          Et,
          xt,
          Ot,
          At,
          Tt,
          ft,
          Ct,
          Pt,
          bt,
          Lt,
          It,
          Bt,
          Ut,
          St,
          Rt,
          Wt,
          Kt,
          kt,
          Ht,
          zt,
          Nt,
          Zt,
          Gt,
        ],
        lt = () => ['Data View', 'Turn Off', 'Refresh'],
        ct = (s) => ({ readOnly: !0, title: 'View Data', lang: s }),
        mt = () => ({ zoom: 'Zoom', back: 'Back' }),
        dt = (s) => ({ title: s }),
        ht = () => ['line', 'bar'],
        _t = () => ({ line: 'Line', bar: 'Bar' }),
        pt = (s, g) => ({ type: s, title: g }),
        gt = () => ({ title: 'Restore' }),
        ut = (s, g, o, y) => ({
          dataView: s,
          dataZoom: g,
          magicType: o,
          restore: y,
        }),
        yt = () => ({ type: 'dotted' }),
        Dt = (s) => ({ lineStyle: s });
      let Mt = (() => {
        class s {
          _cdr;
          themeSelector;
          themes = (0, i.RC)();
          selectedTheme;
          methods = ['squareRoot', 'scott', 'freedmanDiaconis', 'sturges'];
          selectedMethod = 'squareRoot';
          constructor(o, y) {
            (this._cdr = o), (this.themeSelector = y);
          }
          ngOnInit() {
            var o = this;
            return (0, a.Z)(function* () {
              (o.selectedTheme = o.themeSelector.selected),
                o._cdr.markForCheck();
            })();
          }
          selectChartTheme(o) {
            this.themeSelector.select(o);
          }
          static ɵfac = function (y) {
            return new (y || s)(t.Y36(t.sBO), t.Y36(l.n));
          };
          static ɵcmp = t.Xpm({
            type: s,
            selectors: [['histogram-demo-basic']],
            decls: 21,
            vars: 111,
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
              [3, 'trigger'],
              ['tdTooltipFormatter', ''],
              [3, 'show', 'position', 'type', 'boundaryGap'],
              [3, 'show', 'type', 'position', 'splitLine'],
              ['td-histogram', '', 3, 'method', 'name'],
              ['td-histogram', '', 3, 'method', 'name', 'datasetIndex'],
              [3, 'value'],
              [4, 'ngIf'],
              ['layout', 'row', 'layout-align', 'start center'],
              [1, 'mat-caption', 'pad-left-sm'],
            ],
            template: function (y, u) {
              1 & y &&
                (t.TgZ(0, 'div', 0)(1, 'div', 1),
                t._uU(2, ' Chart Theme: '),
                t.qZA(),
                t.TgZ(3, 'mat-form-field')(4, 'mat-select', 2),
                t.NdJ('valueChange', function (v) {
                  return (u.selectedTheme = v);
                })('valueChange', function (v) {
                  return u.selectChartTheme(v);
                }),
                t.YNc(5, A, 2, 2, 'mat-option', 3),
                t.qZA()(),
                t.TgZ(6, 'div', 1),
                t._uU(7, ' Binning method: '),
                t.qZA(),
                t.TgZ(8, 'mat-form-field')(9, 'mat-select', 2),
                t.NdJ('valueChange', function (v) {
                  return (u.selectedMethod = v);
                }),
                t.YNc(10, T, 2, 2, 'mat-option', 3),
                t.qZA()()(),
                t.TgZ(11, 'td-chart', 4),
                t.ALo(12, 'async'),
                t._UZ(13, 'td-chart-dataset', 5)(14, 'td-chart-toolbox', 6),
                t.TgZ(15, 'td-chart-tooltip', 7),
                t.YNc(16, b, 1, 1, 'ng-template', 8),
                t.qZA(),
                t._UZ(17, 'td-chart-x-axis', 9)(18, 'td-chart-y-axis', 10)(
                  19,
                  'td-chart-series',
                  11
                )(20, 'td-chart-series', 12),
                t.qZA()),
                2 & y &&
                  (t.xp6(4),
                  t.Q6J('value', u.selectedTheme),
                  t.xp6(1),
                  t.Q6J('ngForOf', u.themes),
                  t.xp6(4),
                  t.Q6J('value', u.selectedMethod),
                  t.xp6(1),
                  t.Q6J('ngForOf', u.methods),
                  t.xp6(1),
                  t.Udp('height', 300, 'px'),
                  t.Q6J('themeName', t.lcZ(12, 26, u.themeSelector.selected$)),
                  t.xp6(2),
                  t.Q6J(
                    'source',
                    t.rFY(59, rt, [
                      t.DdM(28, L),
                      t.DdM(29, I),
                      t.DdM(30, B),
                      t.DdM(31, U),
                      t.DdM(32, S),
                      t.DdM(33, R),
                      t.DdM(34, W),
                      t.DdM(35, K),
                      t.DdM(36, k),
                      t.DdM(37, H),
                      t.DdM(38, z),
                      t.DdM(39, N),
                      t.DdM(40, Z),
                      t.DdM(41, G),
                      t.DdM(42, J),
                      t.DdM(43, F),
                      t.DdM(44, Q),
                      t.DdM(45, j),
                      t.DdM(46, Y),
                      t.DdM(47, w),
                      t.DdM(48, V),
                      t.DdM(49, $),
                      t.DdM(50, X),
                      t.DdM(51, q),
                      t.DdM(52, tt),
                      t.DdM(53, et),
                      t.DdM(54, at),
                      t.DdM(55, st),
                      t.DdM(56, ot),
                      t.DdM(57, it),
                      t.DdM(58, nt),
                    ])
                  ),
                  t.xp6(1),
                  t.Q6J('show', !0)('right', 30)('top', 10)(
                    'feature',
                    t.l5B(
                      103,
                      ut,
                      t.VKq(92, ct, t.DdM(91, lt)),
                      t.VKq(95, dt, t.DdM(94, mt)),
                      t.WLB(99, pt, t.DdM(97, ht), t.DdM(98, _t)),
                      t.DdM(102, gt)
                    )
                  ),
                  t.xp6(1),
                  t.Q6J('trigger', 'item'),
                  t.xp6(2),
                  t.Q6J('show', !0)('position', 'bottom')('type', 'category')(
                    'boundaryGap',
                    !0
                  ),
                  t.xp6(1),
                  t.Q6J('show', !0)('type', 'value')('position', 'right')(
                    'splitLine',
                    t.VKq(109, Dt, t.DdM(108, yt))
                  ),
                  t.xp6(1),
                  t.Q6J('method', u.selectedMethod)('name', 'Sparrows'),
                  t.xp6(1),
                  t.Q6J('method', u.selectedMethod)('name', 'Crows')(
                    'datasetIndex',
                    2
                  ));
            },
            dependencies: [
              n.L,
              r.O,
              d.$,
              c.H,
              h.HN,
              h.dA,
              _.O,
              p.sg,
              p.O5,
              M.KE,
              x.gD,
              E.ey,
              f.Hw,
              C.N,
              p.Ov,
            ],
            styles: ['[_nghost-%COMP%]{width:100%}'],
            changeDetection: 0,
          });
        }
        return s;
      })();
    },
    97974: (D, m, e) => {
      e.d(m, { L: () => _ });
      var a = e(96814),
        i = e(98525),
        l = e(30617),
        t = e(23421),
        n = e(5965),
        r = e(80232),
        d = e(57337),
        c = e(52514),
        h = e(19212);
      let _ = (() => {
        class p {
          static ɵfac = function (E) {
            return new (E || p)();
          };
          static ɵmod = h.oAB({ type: p });
          static ɵinj = h.cJS({
            imports: [t.MX, n.FA, d.NF, c.Po, a.ez, i.LD, l.Ps, r.Fh],
          });
        }
        return p;
      })();
    },
    64360: (D, m, e) => {
      e.d(m, { h: () => t });
      var a = e(19212),
        i = e(23421);
      const l = ['td-bar', ''];
      let t = (() => {
        class n extends i.R0 {
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
          constructor(d) {
            super('bar', d);
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
          static ɵfac = function (c) {
            return new (c || n)(a.Y36(i.ij));
          };
          static ɵcmp = a.Xpm({
            type: n,
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
              a._Bn([{ provide: i.R0, useExisting: (0, a.Gpc)(() => n) }]),
              a.qOj,
            ],
            attrs: l,
            decls: 0,
            vars: 0,
            template: function (c, h) {},
            encapsulation: 2,
            changeDetection: 0,
          });
        }
        return n;
      })();
    },
    5965: (D, m, e) => {
      e.d(m, { FA: () => n, hP: () => i.h });
      var a = e(96814),
        i = e(64360),
        l = e(19212);
      let n = (() => {
        class r {
          static ɵfac = function (h) {
            return new (h || r)();
          };
          static ɵmod = l.oAB({ type: r });
          static ɵinj = l.cJS({ imports: [a.ez] });
        }
        return r;
      })();
    },
    4563: (D, m, e) => {
      e.d(m, { N: () => d });
      var a = e(19212),
        i = e(23421),
        l = e(5965),
        t = e(45178);
      const r = ['td-histogram', ''];
      let d = (() => {
        class c extends l.hP {
          source;
          method;
          constructor(_) {
            super(_);
          }
          ngOnChanges() {
            let _ = [];
            if (!this.source) {
              const M = this.optionsService.getOption('dataset');
              this.source = M?.source ?? [];
            }
            if (this.source?.some((M) => Array.isArray(M))) {
              const x = this.getConfig().datasetIndex ?? 1,
                E = this.source;
              _ = E[0].map((C, A) => E.map((T) => T[A]))[x - 1] ?? [];
            } else _ = this.source;
            const p = t.histogram(_, this.method ?? 'squareRoot');
            (this.data = p.data), this.setOptions();
          }
          getConfig() {
            return {
              method: this.method,
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
          setOptions() {
            const _ = (0, i.t8)(
              this._state,
              {
                id: this.id,
                type: this.type,
                name: this.name,
                color: this.color,
                data: this.data,
                animation: this.animation,
                animationThreshold: this.animationThreshold,
                animationDuration: this.animationDuration,
                animationEasing: this.animationEasing,
                animationDelay: this.animationDelay,
                animationDurationUpdate: this.animationDurationUpdate,
                animationEasingUpdate: this.animationEasingUpdate,
                animationDelayUpdate: this.animationDelayUpdate,
                tooltip: this.tooltip,
              },
              this.getConfig(),
              this._options,
              this.config ? this.config : {}
            );
            this.optionsService.setArrayOption('series', _);
          }
          static ɵfac = function (p) {
            return new (p || c)(a.Y36(i.ij));
          };
          static ɵcmp = a.Xpm({
            type: c,
            selectors: [['td-chart-series', 'td-histogram', '']],
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
              source: 'source',
              method: 'method',
            },
            features: [
              a._Bn([{ provide: i.R0, useExisting: (0, a.Gpc)(() => c) }]),
              a.qOj,
              a.TTD,
            ],
            attrs: r,
            decls: 0,
            vars: 0,
            template: function (p, M) {},
            encapsulation: 2,
            changeDetection: 0,
          });
        }
        return c;
      })();
    },
    80232: (D, m, e) => {
      e.d(m, { Fh: () => n });
      var a = e(96814),
        l = (e(4563), e(19212));
      let n = (() => {
        class r {
          static ɵfac = function (h) {
            return new (h || r)();
          };
          static ɵmod = l.oAB({ type: r });
          static ɵinj = l.cJS({ imports: [a.ez] });
        }
        return r;
      })();
    },
    90230: (D, m, e) => {
      e.d(m, { P: () => t });
      var a = e(19212),
        i = e(23421);
      const l = ['td-line', ''];
      let t = (() => {
        class n extends i.R0 {
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
          constructor(d) {
            super('line', d);
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
          static ɵfac = function (c) {
            return new (c || n)(a.Y36(i.ij));
          };
          static ɵcmp = a.Xpm({
            type: n,
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
              a._Bn([{ provide: i.R0, useExisting: (0, a.Gpc)(() => n) }]),
              a.qOj,
            ],
            attrs: l,
            decls: 0,
            vars: 0,
            template: function (c, h) {},
            encapsulation: 2,
            changeDetection: 0,
          });
        }
        return n;
      })();
    },
    81924: (D, m, e) => {
      e.d(m, { Uy: () => n });
      var a = e(96814),
        l = (e(90230), e(19212));
      let n = (() => {
        class r {
          static ɵfac = function (h) {
            return new (h || r)();
          };
          static ɵmod = l.oAB({ type: r });
          static ɵinj = l.cJS({ imports: [a.ez] });
        }
        return r;
      })();
    },
  },
]);
