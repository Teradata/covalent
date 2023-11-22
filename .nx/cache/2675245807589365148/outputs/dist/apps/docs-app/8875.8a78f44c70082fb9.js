'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [8875],
  {
    76856: (C, y, e) => {
      e.d(y, { n: () => m });
      var o = e(65619),
        c = e(23421),
        a = e(19212);
      let m = (() => {
        class l {
          selected = (0, c.RC)()[0];
          selectedSubject = new o.X(this.selected);
          selected$ = this.selectedSubject.asObservable();
          select(t) {
            (this.selected = t), this.selectedSubject.next(t);
          }
          static ɵfac = function (i) {
            return new (i || l)();
          };
          static ɵprov = a.Yz7({
            token: l,
            factory: l.ɵfac,
            providedIn: 'root',
          });
        }
        return l;
      })();
    },
    60118: (C, y, e) => {
      e.d(y, { u: () => m }), e(38807);
      var c = e(98376),
        a = e(19212);
      let m = (() => {
        class l {
          _axisOption;
          _optionsService;
          _state = {};
          config = {};
          id;
          show = !0;
          gridIndex;
          offset;
          type;
          name;
          nameLocation;
          nameTextStyle;
          nameGap;
          nameRotate;
          inverse;
          boundaryGap;
          min;
          max;
          scale;
          minInterval;
          interval;
          logBase;
          silent;
          triggerEvent;
          axisLine;
          axisTick;
          axisLabel;
          splitLine;
          splitArea;
          data;
          axisPointer;
          zlevel;
          z;
          constructor(t, i) {
            (this._axisOption = t), (this._optionsService = i);
          }
          ngOnInit() {
            this._setOptions();
          }
          ngOnChanges() {
            this._setOptions();
          }
          ngOnDestroy() {
            this._removeOption();
          }
          _setOptions() {
            const t = (0, c.t8)(
              this._state,
              {
                id: this.id,
                show: this.show,
                gridIndex: this.gridIndex,
                position: this.position,
                offset: this.offset,
                type: this.type,
                name: this.name,
                nameLocation: this.nameLocation,
                nameTextStyle: this.nameTextStyle,
                nameGap: this.nameGap,
                nameRotate: this.nameRotate,
                inverse: this.inverse,
                boundaryGap: this.boundaryGap,
                min: this.min,
                max: this.max,
                scale: this.scale,
                minInterval: this.minInterval,
                interval: this.interval,
                logBase: this.logBase,
                silent: this.silent,
                triggerEvent: this.triggerEvent,
                axisLine: this.axisLine,
                axisTick: this.axisTick,
                axisLabel: this.axisLabel,
                splitLine: this.splitLine,
                splitArea: this.splitArea,
                data: this.data,
                axisPointer: this.axisPointer,
                zlevel: this.zlevel,
                z: this.z,
              },
              this.config ? this.config : {}
            );
            this._optionsService.setArrayOption(this._axisOption, t);
          }
          _removeOption() {
            this._optionsService.clearOption(this._axisOption);
          }
          static ɵfac = function (i) {
            a.$Z();
          };
          static ɵdir = a.lG2({
            type: l,
            inputs: {
              config: 'config',
              id: 'id',
              show: 'show',
              gridIndex: 'gridIndex',
              offset: 'offset',
              type: 'type',
              name: 'name',
              nameLocation: 'nameLocation',
              nameTextStyle: 'nameTextStyle',
              nameGap: 'nameGap',
              nameRotate: 'nameRotate',
              inverse: 'inverse',
              boundaryGap: 'boundaryGap',
              min: 'min',
              max: 'max',
              scale: 'scale',
              minInterval: 'minInterval',
              interval: 'interval',
              logBase: 'logBase',
              silent: 'silent',
              triggerEvent: 'triggerEvent',
              axisLine: 'axisLine',
              axisTick: 'axisTick',
              axisLabel: 'axisLabel',
              splitLine: 'splitLine',
              splitArea: 'splitArea',
              data: 'data',
              axisPointer: 'axisPointer',
              zlevel: 'zlevel',
              z: 'z',
            },
            features: [a.TTD],
          });
        }
        return l;
      })();
    },
    15079: (C, y, e) => {
      e.d(y, { O: () => m });
      var o = e(38807),
        c = e(60118),
        a = e(19212);
      let m = (() => {
        class l extends c.u {
          position;
          constructor(t) {
            super('xAxis', t);
          }
          static ɵfac = function (i) {
            return new (i || l)(a.Y36(o.ij));
          };
          static ɵcmp = a.Xpm({
            type: l,
            selectors: [['td-chart-x-axis']],
            inputs: {
              config: 'config',
              id: 'id',
              show: 'show',
              gridIndex: 'gridIndex',
              offset: 'offset',
              type: 'type',
              name: 'name',
              nameLocation: 'nameLocation',
              nameTextStyle: 'nameTextStyle',
              nameGap: 'nameGap',
              nameRotate: 'nameRotate',
              inverse: 'inverse',
              boundaryGap: 'boundaryGap',
              min: 'min',
              max: 'max',
              scale: 'scale',
              minInterval: 'minInterval',
              interval: 'interval',
              logBase: 'logBase',
              silent: 'silent',
              triggerEvent: 'triggerEvent',
              axisLine: 'axisLine',
              axisTick: 'axisTick',
              axisLabel: 'axisLabel',
              splitLine: 'splitLine',
              splitArea: 'splitArea',
              data: 'data',
              axisPointer: 'axisPointer',
              zlevel: 'zlevel',
              z: 'z',
              position: 'position',
            },
            features: [a.qOj],
            decls: 0,
            vars: 0,
            template: function (i, h) {},
            encapsulation: 2,
            changeDetection: 0,
          });
        }
        return l;
      })();
    },
    39967: (C, y, e) => {
      e.d(y, { $: () => m });
      var o = e(38807),
        c = e(60118),
        a = e(19212);
      let m = (() => {
        class l extends c.u {
          position;
          constructor(t) {
            super('yAxis', t);
          }
          static ɵfac = function (i) {
            return new (i || l)(a.Y36(o.ij));
          };
          static ɵcmp = a.Xpm({
            type: l,
            selectors: [['td-chart-y-axis']],
            inputs: {
              config: 'config',
              id: 'id',
              show: 'show',
              gridIndex: 'gridIndex',
              offset: 'offset',
              type: 'type',
              name: 'name',
              nameLocation: 'nameLocation',
              nameTextStyle: 'nameTextStyle',
              nameGap: 'nameGap',
              nameRotate: 'nameRotate',
              inverse: 'inverse',
              boundaryGap: 'boundaryGap',
              min: 'min',
              max: 'max',
              scale: 'scale',
              minInterval: 'minInterval',
              interval: 'interval',
              logBase: 'logBase',
              silent: 'silent',
              triggerEvent: 'triggerEvent',
              axisLine: 'axisLine',
              axisTick: 'axisTick',
              axisLabel: 'axisLabel',
              splitLine: 'splitLine',
              splitArea: 'splitArea',
              data: 'data',
              axisPointer: 'axisPointer',
              zlevel: 'zlevel',
              z: 'z',
              position: 'position',
            },
            features: [a.qOj],
            decls: 0,
            vars: 0,
            template: function (i, h) {},
            encapsulation: 2,
            changeDetection: 0,
          });
        }
        return l;
      })();
    },
    38807: (C, y, e) => {
      e.d(y, { ij: () => a, wC: () => l });
      var o = e(19212),
        c = e(65619);
      let a = (() => {
        class s {
          _options = {};
          _optionsSubject = new c.X(this._options);
          setOption(i, h) {
            const n = {};
            (n[i] = h),
              Object.assign(this._options, n),
              this._optionsSubject.next(this._options);
          }
          setArrayOption(i, h) {
            let n = this.getOption(i);
            if (n) {
              const r = n.indexOf(h);
              r > -1 ? (n[r] = h) : n.push(h);
            } else n = [h];
            this.setOption(i, n);
          }
          removeArrayOption(i, h) {
            let n = this.getOption(i);
            if (n) {
              const r = n.indexOf(h);
              r > -1 ? (n[r] = null) : (n = []);
            }
            this.setOption(i, n);
          }
          getOption(i) {
            return this._options[i];
          }
          clearOption(i) {
            this.setOption(i, null);
          }
          listen() {
            return this._optionsSubject.asObservable();
          }
          static ɵfac = function (h) {
            return new (h || s)();
          };
          static ɵprov = o.Yz7({ token: s, factory: s.ɵfac });
        }
        return s;
      })();
      const l = {
        provide: a,
        deps: [[new o.FiY(), new o.tp0(), a]],
        useFactory: function m(s) {
          return s || new a();
        },
      };
    },
    1691: (C, y, e) => {
      e.d(y, { L: () => d });
      var o = e(19212),
        c = e(78645),
        a = e(92438),
        m = e(63019),
        l = e(74825),
        s = e(59773),
        t = e(83620),
        i = e(93997),
        h = e(99397),
        n = e(38807),
        r = e(98376);
      let d = (() => {
        class f {
          _changeDetectorRef;
          _elementRef;
          _optionsService;
          _destroy = new c.x();
          _widthSubject = new c.x();
          _heightSubject = new c.x();
          _instance;
          get instance() {
            return this._instance;
          }
          _state = {};
          _options = {};
          config = {};
          group;
          themeName;
          renderer = 'canvas';
          chartClick = new o.vpe();
          chartDblclick = new o.vpe();
          chartContextmenu = new o.vpe();
          magicTypeChanged = new o.vpe();
          dataViewChanged = new o.vpe();
          datazoom = new o.vpe();
          restore = new o.vpe();
          constructor(b, S, x) {
            (this._changeDetectorRef = b),
              (this._elementRef = S),
              (this._optionsService = x);
          }
          ngAfterViewInit() {
            this._initializeChart();
          }
          ngOnChanges(b) {
            this._instance &&
              (b.renderer || b.themeName || b.group
                ? (this._disposeChart(), this._initializeChart())
                : this.render());
          }
          ngOnDestroy() {
            this._disposeChart(), this._destroy.unsubscribe();
          }
          render() {
            this._instance &&
              (this._instance.setOption(
                (0, r.t8)(
                  this._state,
                  {
                    grid: {
                      show: !0,
                      left: '20',
                      right: '20',
                      bottom:
                        (this.config.toolbox &&
                          'number' == typeof this.config.toolbox.bottom) ||
                        (this._options.toolbox &&
                          'number' == typeof this._options.toolbox.bottom)
                          ? '40'
                          : '10',
                      top:
                        (this.config.toolbox &&
                          'number' == typeof this.config.toolbox.top) ||
                        (this._options.toolbox &&
                          'number' == typeof this._options.toolbox.top)
                          ? '40'
                          : '10',
                      containLabel: !0,
                    },
                  },
                  this._options,
                  this.config ? this.config : {}
                ),
                !0
              ),
              this._changeDetectorRef.markForCheck());
          }
          _initializeChart() {
            (this._instance = echarts.init(
              this._elementRef.nativeElement,
              this.themeName ?? '',
              { renderer: this.renderer }
            )),
              (0, a.R)(this._instance, 'click')
                .pipe((0, s.R)(this._destroy))
                .subscribe((b) => {
                  this.chartClick.next(b);
                }),
              (0, a.R)(this._instance, 'dblclick')
                .pipe((0, s.R)(this._destroy))
                .subscribe((b) => {
                  this.chartDblclick.next(b);
                }),
              (0, a.R)(this._instance, 'contextmenu')
                .pipe((0, s.R)(this._destroy))
                .subscribe((b) => {
                  this.chartContextmenu.next(b);
                }),
              (0, a.R)(this._instance, 'magictypechanged')
                .pipe((0, s.R)(this._destroy))
                .subscribe((b) => {
                  this.magicTypeChanged.next(b);
                }),
              (0, a.R)(this._instance, 'dataviewchanged')
                .pipe((0, s.R)(this._destroy))
                .subscribe((b) => {
                  this.dataViewChanged.next(b);
                }),
              (0, a.R)(this._instance, 'datazoom')
                .pipe((0, s.R)(this._destroy))
                .subscribe((b) => {
                  this.datazoom.next(b);
                }),
              (0, a.R)(this._instance, 'restore')
                .pipe((0, s.R)(this._destroy))
                .subscribe((b) => {
                  this.restore.next(b);
                }),
              this.group &&
                ((this._instance.group = this.group),
                echarts.connect(this.group),
                this._changeDetectorRef.markForCheck()),
              (0, m.T)(
                (0, a.R)(window, 'resize').pipe((0, t.b)(100)),
                this._widthSubject.asObservable().pipe((0, i.x)()),
                this._heightSubject.asObservable().pipe((0, i.x)())
              )
                .pipe((0, s.R)(this._destroy), (0, t.b)(100))
                .subscribe(() => {
                  this._instance &&
                    (this._instance.resize(),
                    this._changeDetectorRef.markForCheck());
                }),
              this._optionsService
                .listen()
                .pipe(
                  (0, h.b)((b) => {
                    (0, r.t8)(this._options, b);
                  }),
                  (0, t.b)(0),
                  (0, s.R)(this._destroy)
                )
                .subscribe(() => {
                  this.render();
                }),
              (0, l.H)(500, 250)
                .pipe((0, s.R)(this._destroy))
                .subscribe(() => {
                  this._elementRef &&
                    this._elementRef.nativeElement &&
                    (this._widthSubject.next(
                      this._elementRef.nativeElement.getBoundingClientRect()
                        .width
                    ),
                    this._heightSubject.next(
                      this._elementRef.nativeElement.getBoundingClientRect()
                        .height
                    ));
                });
          }
          _disposeChart() {
            this._instance &&
              (this._instance.clear(), echarts.dispose(this._instance)),
              this._destroy.next(!0);
          }
          static ɵfac = function (S) {
            return new (S || f)(o.Y36(o.sBO), o.Y36(o.SBq), o.Y36(n.ij));
          };
          static ɵcmp = o.Xpm({
            type: f,
            selectors: [['td-chart']],
            inputs: {
              config: 'config',
              group: 'group',
              themeName: 'themeName',
              renderer: 'renderer',
            },
            outputs: {
              chartClick: 'chartClick',
              chartDblclick: 'chartDblclick',
              chartContextmenu: 'chartContextmenu',
              magicTypeChanged: 'magicTypeChanged',
              dataViewChanged: 'dataViewChanged',
              datazoom: 'datazoom',
              restore: 'restore',
            },
            features: [o._Bn([n.wC]), o.TTD],
            decls: 0,
            vars: 0,
            template: function (S, x) {},
            styles: ['[_nghost-%COMP%]{display:block;width:100%}'],
            changeDetection: 0,
          });
        }
        return f;
      })();
    },
    64335: (C, y, e) => {
      e.d(y, { H: () => m });
      var o = e(38807),
        c = e(98376),
        a = e(19212);
      let m = (() => {
        class l {
          _optionsService;
          _state = {};
          id;
          config = {};
          source;
          dimensions;
          sourceHeader;
          constructor(t) {
            this._optionsService = t;
          }
          ngOnChanges() {
            this._setOptions();
          }
          ngOnDestroy() {
            this._removeOption();
          }
          _setOptions() {
            const t = (0, c.t8)(
              this._state,
              {
                id: this.id,
                source: this.source,
                dimensions: this.dimensions,
                sourceHeader: this.sourceHeader,
              },
              this.config ? this.config : {}
            );
            this._optionsService.setOption('dataset', t);
          }
          _removeOption() {
            this._optionsService.clearOption('dataset');
          }
          static ɵfac = function (i) {
            return new (i || l)(a.Y36(o.ij));
          };
          static ɵcmp = a.Xpm({
            type: l,
            selectors: [['td-chart-dataset']],
            inputs: {
              id: 'id',
              config: 'config',
              source: 'source',
              dimensions: 'dimensions',
              sourceHeader: 'sourceHeader',
            },
            features: [a.TTD],
            decls: 0,
            vars: 0,
            template: function (i, h) {},
            encapsulation: 2,
            changeDetection: 0,
          });
        }
        return l;
      })();
    },
    23421: (C, y, e) => {
      e.d(y, {
        MX: () => h,
        ij: () => r.ij,
        R0: () => f,
        t8: () => s.t8,
        RC: () => s.RC,
      });
      var o = e(96814),
        s = (e(1691), e(15079), e(39967), e(64335), e(98376)),
        t = e(19212);
      (0, s.oc)();
      let h = (() => {
        class p {
          static ɵfac = function (x) {
            return new (x || p)();
          };
          static ɵmod = t.oAB({ type: p });
          static ɵinj = t.cJS({ imports: [o.ez] });
        }
        return p;
      })();
      e(60118);
      var r = e(38807),
        d = e(42656);
      let f = (() => {
        class p {
          optionsService;
          _type;
          get type() {
            return this._type;
          }
          _state = {};
          _options = {};
          config = {};
          id;
          name;
          color;
          data;
          animation;
          animationThreshold;
          animationDuration;
          animationEasing;
          animationDelay;
          animationDurationUpdate;
          animationEasingUpdate;
          animationDelayUpdate;
          tooltip;
          constructor(S, x) {
            (this.optionsService = x), (this._type = S);
          }
          ngOnInit() {
            this._setOptions();
          }
          ngOnChanges() {
            this._setOptions();
          }
          ngOnDestroy() {
            this._removeOption();
          }
          setStateOption(S, x) {
            (this._options[S] = x), this._setOptions();
          }
          removeStateOption(S) {
            (this._options[S] = null), this._setOptions();
          }
          _setOptions() {
            const S = (0, d.t)(
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
            this.optionsService.setArrayOption('series', S);
          }
          _removeOption() {
            this.optionsService.removeArrayOption('series', this._state);
          }
          static ɵfac = function (x) {
            t.$Z();
          };
          static ɵdir = t.lG2({
            type: p,
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
            },
            features: [t.TTD],
          });
        }
        return p;
      })();
    },
    42656: (C, y, e) => {
      function o(c, ...a) {
        const m = new Set();
        for (const l of a)
          for (const s of Object.keys(l)) {
            m.add(s);
            const t = l[s];
            null != t ? (c[s] = t) : null === t && delete c[s];
          }
        for (const l of Object.keys(c)) m.has(l) || delete c[l];
        return c;
      }
      e.d(y, { t: () => o });
    },
    98376: (C, y, e) => {
      e.d(y, { t8: () => o.t, RC: () => f, oc: () => d });
      var o = e(42656);
      const c = {
          color: [
            '#305b9e',
            '#0076a9',
            '#1d8daa',
            '#51a2a8',
            '#7fb5aa',
            '#aac6b4',
            '#CFD8C8',
            '#ECEBE4',
          ],
          backgroundColor: 'transparent',
          textStyle: {},
          title: {
            textStyle: { color: '#aaaaaa' },
            subtextStyle: { color: '#aaaaaa' },
          },
          tree: { itemStyle: { color: '#ECEBE4', borderColor: '#305b9e' } },
          line: {
            itemStyle: { normal: { borderWidth: '2' } },
            lineStyle: { normal: { width: '2' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
          },
          radar: {
            itemStyle: { normal: { borderWidth: '2' } },
            lineStyle: { normal: { width: '2' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
          },
          bar: {
            itemStyle: {
              normal: { barBorderWidth: 0, barBorderColor: '#ccc' },
              emphasis: { barBorderWidth: 0, barBorderColor: '#ccc' },
            },
          },
          pie: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          scatter: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          boxplot: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          parallel: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          sankey: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          funnel: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          gauge: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          candlestick: {
            itemStyle: {
              normal: {
                color: '#305b9e',
                color0: 'transparent',
                borderColor: '#305b9e',
                borderColor0: '#1d8daa',
                borderWidth: '2',
              },
            },
          },
          graph: {
            itemStyle: { normal: { borderWidth: 0, borderColor: '#ccc' } },
            lineStyle: { normal: { width: 1, color: '#aaaaaa' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
            color: [
              '#305b9e',
              '#0076a9',
              '#1d8daa',
              '#51a2a8',
              '#7fb5aa',
              '#aac6b4',
              '#CFD8C8',
              '#ECEBE4',
            ],
            label: { normal: { textStyle: { color: '#ffffff' } } },
          },
          map: {
            itemStyle: {
              normal: {
                areaColor: '#f3f3f3',
                borderColor: '#999999',
                borderWidth: 0.5,
              },
              emphasis: {
                areaColor: 'rgba(254,198,77,1)',
                borderColor: '#ecaf2b',
                borderWidth: 1,
              },
            },
            label: {
              normal: { textStyle: { color: '#00475e' } },
              emphasis: { textStyle: { color: 'rgb(0,71,94)' } },
            },
          },
          geo: {
            itemStyle: {
              normal: {
                areaColor: '#f3f3f3',
                borderColor: '#999999',
                borderWidth: 0.5,
              },
              emphasis: {
                areaColor: 'rgba(254,198,77,1)',
                borderColor: '#ecaf2b',
                borderWidth: 1,
              },
            },
            label: {
              normal: { textStyle: { color: '#00475e' } },
              emphasis: { textStyle: { color: 'rgb(0,71,94)' } },
            },
          },
          categoryAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: {
              show: !1,
              areaStyle: {
                color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
              },
            },
          },
          valueAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: {
              show: !1,
              areaStyle: {
                color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
              },
            },
          },
          logAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: {
              show: !1,
              areaStyle: {
                color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
              },
            },
          },
          timeAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: {
              show: !1,
              areaStyle: {
                color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
              },
            },
          },
          toolbox: {
            iconStyle: {
              normal: { borderColor: '#999999' },
              emphasis: { borderColor: '#666666' },
            },
          },
          legend: { textStyle: { color: '#000000' } },
          tooltip: {
            axisPointer: {
              lineStyle: { color: '#cccccc', width: 1 },
              crossStyle: { color: '#cccccc', width: 1 },
            },
          },
          timeline: {
            lineStyle: { color: '#666666', width: 1 },
            itemStyle: {
              normal: { color: '#666666', borderWidth: 1 },
              emphasis: { color: '#f7ac4f' },
            },
            controlStyle: {
              normal: {
                color: '#666666',
                borderColor: '#666666',
                borderWidth: 0.5,
              },
              emphasis: {
                color: '#666666',
                borderColor: '#666666',
                borderWidth: 0.5,
              },
            },
            checkpointStyle: {
              color: '#f7ac4f',
              borderColor: 'rgba(254,198,77,0.6)',
            },
            label: {
              normal: { textStyle: { color: '#666666' } },
              emphasis: { textStyle: { color: '#666666' } },
            },
          },
          visualMap: {
            color: [
              '#305b9e',
              '#0076a9',
              '#1d8daa',
              '#51a2a8',
              '#7fb5aa',
              '#aac6b4',
              '#CFD8C8',
              '#ECEBE4',
            ],
          },
          dataZoom: {
            backgroundColor: 'rgba(255,255,255,0)',
            dataBackgroundColor: 'rgba(255,178,72,0.5)',
            fillerColor: 'rgba(255,178,72,0.15)',
            handleColor: '#ffb248',
            handleSize: '100%',
            textStyle: { color: '#aaaaaa' },
          },
          markPoint: {
            label: {
              normal: { textStyle: { color: '#ffffff' } },
              emphasis: { textStyle: { color: '#ffffff' } },
            },
          },
        },
        a = {
          color: [
            '#0098c9',
            '#6ab1d7',
            '#a0cae4',
            '#ffbb9c',
            '#fd986d',
            '#ff5f02',
          ],
          backgroundColor: 'transparent',
          textStyle: {},
          title: {
            textStyle: { color: '#aaaaaa' },
            subtextStyle: { color: '#aaaaaa' },
          },
          tree: { itemStyle: { color: '#ffbb9c', borderColor: '#0098c9' } },
          line: {
            itemStyle: { normal: { borderWidth: '2' } },
            lineStyle: { normal: { width: '2' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
          },
          radar: {
            itemStyle: { normal: { borderWidth: '2' } },
            lineStyle: { normal: { width: '2' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
          },
          bar: {
            itemStyle: {
              normal: { barBorderWidth: 0, barBorderColor: '#ccc' },
              emphasis: { barBorderWidth: 0, barBorderColor: '#ccc' },
            },
          },
          pie: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          scatter: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          boxplot: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          parallel: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          sankey: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          funnel: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          gauge: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          candlestick: {
            itemStyle: {
              normal: {
                color: '#ff5f02',
                color0: 'transparent',
                borderColor: '#ff5f02',
                borderColor0: '#0098c9',
                borderWidth: '2',
              },
            },
          },
          graph: {
            itemStyle: { normal: { borderWidth: 0, borderColor: '#ccc' } },
            lineStyle: { normal: { width: 1, color: '#aaaaaa' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
            color: [
              '#0098c9',
              '#6ab1d7',
              '#a0cae4',
              '#ffbb9c',
              '#fd986d',
              '#ff5f02',
            ],
            label: { normal: { textStyle: { color: '#ffffff' } } },
          },
          map: {
            itemStyle: {
              normal: {
                areaColor: '#f3f3f3',
                borderColor: '#999999',
                borderWidth: 0.5,
              },
              emphasis: {
                areaColor: 'rgba(254,198,77,1)',
                borderColor: '#ecaf2b',
                borderWidth: 1,
              },
            },
            label: {
              normal: { textStyle: { color: '#394851' } },
              emphasis: { textStyle: { color: 'rgb(57,72,81)' } },
            },
          },
          geo: {
            itemStyle: {
              normal: {
                areaColor: '#f3f3f3',
                borderColor: '#999999',
                borderWidth: 0.5,
              },
              emphasis: {
                areaColor: 'rgba(254,198,77,1)',
                borderColor: '#ecaf2b',
                borderWidth: 1,
              },
            },
            label: {
              normal: { textStyle: { color: '#394851' } },
              emphasis: { textStyle: { color: 'rgb(57,72,81)' } },
            },
          },
          categoryAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: {
              show: !1,
              areaStyle: {
                color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
              },
            },
          },
          valueAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: {
              show: !1,
              areaStyle: {
                color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
              },
            },
          },
          logAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: {
              show: !1,
              areaStyle: {
                color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
              },
            },
          },
          timeAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: {
              show: !1,
              areaStyle: {
                color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
              },
            },
          },
          toolbox: {
            iconStyle: {
              normal: { borderColor: '#999999' },
              emphasis: { borderColor: '#666666' },
            },
          },
          legend: { textStyle: { color: '#aaaaaa' } },
          tooltip: {
            axisPointer: {
              lineStyle: { color: '#cccccc', width: 1 },
              crossStyle: { color: '#cccccc', width: 1 },
            },
          },
          timeline: {
            lineStyle: { color: '#666666', width: 1 },
            itemStyle: {
              normal: { color: '#666666', borderWidth: 1 },
              emphasis: { color: '#fec64d' },
            },
            controlStyle: {
              normal: {
                color: '#666666',
                borderColor: '#666666',
                borderWidth: 0.5,
              },
              emphasis: {
                color: '#666666',
                borderColor: '#666666',
                borderWidth: 0.5,
              },
            },
            checkpointStyle: {
              color: '#ff5f02',
              borderColor: 'rgba(255,178,72,0.41)',
            },
            label: {
              normal: { textStyle: { color: '#666666' } },
              emphasis: { textStyle: { color: '#666666' } },
            },
          },
          visualMap: {
            color: [
              '#0098c9',
              '#6ab1d7',
              '#a0cae4',
              '#FFBB9C',
              '#FD986D',
              '#ff5f02',
            ],
          },
          dataZoom: {
            backgroundColor: 'rgba(255,255,255,0)',
            dataBackgroundColor: 'rgba(255,178,72,0.5)',
            fillerColor: 'rgba(255,178,72,0.15)',
            handleColor: '#fec64d',
            handleSize: '100%',
            textStyle: { color: '#aaaaaa' },
          },
          markPoint: {
            label: {
              normal: { textStyle: { color: '#ffffff' } },
              emphasis: { textStyle: { color: '#ffffff' } },
            },
          },
        },
        m = {
          color: [
            '#00b2b1',
            '#69c6c4',
            '#a0d9d7',
            '#ffbb9c',
            '#fd986d',
            '#ff5f02',
          ],
          backgroundColor: 'transparent',
          textStyle: {},
          title: {
            textStyle: { color: '#aaaaaa' },
            subtextStyle: { color: '#aaaaaa' },
          },
          tree: { itemStyle: { color: '#a0d9d7', borderColor: '#00b2b1' } },
          line: {
            itemStyle: { normal: { borderWidth: '2' } },
            lineStyle: { normal: { width: '2' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
          },
          radar: {
            itemStyle: { normal: { borderWidth: '2' } },
            lineStyle: { normal: { width: '2' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
          },
          bar: {
            itemStyle: {
              normal: { barBorderWidth: 0, barBorderColor: '#ccc' },
              emphasis: { barBorderWidth: 0, barBorderColor: '#ccc' },
            },
          },
          pie: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          scatter: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          boxplot: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          parallel: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          sankey: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          funnel: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          gauge: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          candlestick: {
            itemStyle: {
              normal: {
                color: '#ff5f02',
                color0: 'transparent',
                borderColor: '#ff5f02',
                borderColor0: '#00b2b1',
                borderWidth: '2',
              },
            },
          },
          graph: {
            itemStyle: { normal: { borderWidth: 0, borderColor: '#ccc' } },
            lineStyle: { normal: { width: 1, color: '#aaaaaa' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
            color: [
              '#00b2b1',
              '#69c6c4',
              '#a0d9d7',
              '#ffbb9c',
              '#fd986d',
              '#ff5f02',
            ],
            label: { normal: { textStyle: { color: '#ffffff' } } },
          },
          map: {
            itemStyle: {
              normal: {
                areaColor: '#f3f3f3',
                borderColor: '#999999',
                borderWidth: 0.5,
              },
              emphasis: {
                areaColor: 'rgba(254,198,77,1)',
                borderColor: '#ecaf2b',
                borderWidth: 1,
              },
            },
            label: {
              normal: { textStyle: { color: '#007373' } },
              emphasis: { textStyle: { color: 'rgb(0,115,115)' } },
            },
          },
          geo: {
            itemStyle: {
              normal: {
                areaColor: '#f3f3f3',
                borderColor: '#999999',
                borderWidth: 0.5,
              },
              emphasis: {
                areaColor: 'rgba(254,198,77,1)',
                borderColor: '#ecaf2b',
                borderWidth: 1,
              },
            },
            label: {
              normal: { textStyle: { color: '#007373' } },
              emphasis: { textStyle: { color: 'rgb(0,115,115)' } },
            },
          },
          categoryAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: {
              show: !1,
              areaStyle: {
                color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
              },
            },
          },
          valueAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: {
              show: !1,
              areaStyle: {
                color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
              },
            },
          },
          logAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: {
              show: !1,
              areaStyle: {
                color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
              },
            },
          },
          timeAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: {
              show: !1,
              areaStyle: {
                color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
              },
            },
          },
          toolbox: {
            iconStyle: {
              normal: { borderColor: '#999999' },
              emphasis: { borderColor: '#666666' },
            },
          },
          legend: { textStyle: { color: '#000000' } },
          tooltip: {
            axisPointer: {
              lineStyle: { color: '#cccccc', width: 1 },
              crossStyle: { color: '#cccccc', width: 1 },
            },
          },
          timeline: {
            lineStyle: { color: '#666666', width: 1 },
            itemStyle: {
              normal: { color: '#666666', borderWidth: 1 },
              emphasis: { color: '#fec64d' },
            },
            controlStyle: {
              normal: {
                color: '#666666',
                borderColor: '#666666',
                borderWidth: 0.5,
              },
              emphasis: {
                color: '#666666',
                borderColor: '#666666',
                borderWidth: 0.5,
              },
            },
            checkpointStyle: {
              color: '#ff5f02',
              borderColor: 'rgba(255,178,72,0.41)',
            },
            label: {
              normal: { textStyle: { color: '#666666' } },
              emphasis: { textStyle: { color: '#666666' } },
            },
          },
          visualMap: {
            color: [
              '#00b2b1',
              '#69c6c4',
              '#a0d9d7',
              '#ffbb9c',
              '#fd986d',
              '#ff5f02',
            ],
          },
          dataZoom: {
            backgroundColor: 'rgba(255,255,255,0)',
            dataBackgroundColor: 'rgba(255,178,72,0.5)',
            fillerColor: 'rgba(255,178,72,0.15)',
            handleColor: '#fec64d',
            handleSize: '100%',
            textStyle: { color: '#aaaaaa' },
          },
          markPoint: {
            label: {
              normal: { textStyle: { color: '#ffffff' } },
              emphasis: { textStyle: { color: '#ffffff' } },
            },
          },
        },
        l = {
          color: [
            '#007e7d',
            '#977ed2',
            '#d58a9c',
            '#97b6eb',
            '#ceccbb',
            '#f2dfd8',
          ],
          backgroundColor: 'transparent',
          textStyle: {},
          title: {
            textStyle: { color: '#aaaaaa' },
            subtextStyle: { color: '#aaaaaa' },
          },
          tree: { itemStyle: { color: '#f2dfd8', borderColor: '#007e7d' } },
          line: {
            itemStyle: { normal: { borderWidth: '2' } },
            lineStyle: { normal: { width: '2' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
          },
          radar: {
            itemStyle: { normal: { borderWidth: '2' } },
            lineStyle: { normal: { width: '2' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
          },
          bar: {
            itemStyle: {
              normal: { barBorderWidth: 0, barBorderColor: '#ccc' },
              emphasis: { barBorderWidth: 0, barBorderColor: '#ccc' },
            },
          },
          pie: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          scatter: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          boxplot: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          parallel: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          sankey: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          funnel: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          gauge: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          candlestick: {
            itemStyle: {
              normal: {
                color: '#977ed2',
                color0: 'transparent',
                borderColor: '#977ed2',
                borderColor0: '#007e7d',
                borderWidth: '2',
              },
            },
          },
          graph: {
            itemStyle: { normal: { borderWidth: 0, borderColor: '#ccc' } },
            lineStyle: { normal: { width: 1, color: '#aaaaaa' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
            color: [
              '#007e7d',
              '#977ed2',
              '#d58a9c',
              '#97b6eb',
              '#ceccbb',
              '#f2dfd8',
            ],
            label: { normal: { textStyle: { color: '#ffffff' } } },
          },
          map: {
            itemStyle: {
              normal: {
                areaColor: '#f3f3f3',
                borderColor: '#999999',
                borderWidth: 0.5,
              },
              emphasis: {
                areaColor: 'rgba(254,198,77,1)',
                borderColor: '#ecaf2b',
                borderWidth: 1,
              },
            },
            label: {
              normal: { textStyle: { color: '#00475e' } },
              emphasis: { textStyle: { color: 'rgb(0,71,94)' } },
            },
          },
          geo: {
            itemStyle: {
              normal: {
                areaColor: '#f3f3f3',
                borderColor: '#999999',
                borderWidth: 0.5,
              },
              emphasis: {
                areaColor: 'rgba(254,198,77,1)',
                borderColor: '#ecaf2b',
                borderWidth: 1,
              },
            },
            label: {
              normal: { textStyle: { color: '#00475e' } },
              emphasis: { textStyle: { color: 'rgb(0,71,94)' } },
            },
          },
          categoryAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: {
              show: !1,
              areaStyle: {
                color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
              },
            },
          },
          valueAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: {
              show: !1,
              areaStyle: {
                color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
              },
            },
          },
          logAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: {
              show: !1,
              areaStyle: {
                color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
              },
            },
          },
          timeAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: {
              show: !1,
              areaStyle: {
                color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
              },
            },
          },
          toolbox: {
            iconStyle: {
              normal: { borderColor: '#999999' },
              emphasis: { borderColor: '#666666' },
            },
          },
          legend: { textStyle: { color: '#999999' } },
          tooltip: {
            axisPointer: {
              lineStyle: { color: '#cccccc', width: 1 },
              crossStyle: { color: '#cccccc', width: 1 },
            },
          },
          timeline: {
            lineStyle: { color: '#666666', width: 1 },
            itemStyle: {
              normal: { color: '#666666', borderWidth: 1 },
              emphasis: { color: '#f7ac4f' },
            },
            controlStyle: {
              normal: {
                color: '#666666',
                borderColor: '#666666',
                borderWidth: 0.5,
              },
              emphasis: {
                color: '#666666',
                borderColor: '#666666',
                borderWidth: 0.5,
              },
            },
            checkpointStyle: {
              color: '#f7ac4f',
              borderColor: 'rgba(254,198,77,0.6)',
            },
            label: {
              normal: { textStyle: { color: '#666666' } },
              emphasis: { textStyle: { color: '#666666' } },
            },
          },
          visualMap: {
            color: [
              '#007e7d',
              '#977ed2',
              '#d58a9c',
              '#97b6eb',
              '#ceccbb',
              '#f2dfd8',
            ],
          },
          dataZoom: {
            backgroundColor: 'rgba(255,255,255,0)',
            dataBackgroundColor: 'rgba(255,178,72,0.5)',
            fillerColor: 'rgba(255,178,72,0.15)',
            handleColor: '#ffb248',
            handleSize: '100%',
            textStyle: { color: '#aaaaaa' },
          },
          markPoint: {
            label: {
              normal: { textStyle: { color: '#ffffff' } },
              emphasis: { textStyle: { color: '#ffffff' } },
            },
          },
        },
        s = {
          color: [
            '#523e85',
            '#8b4f8f',
            '#b96595',
            '#e0829a',
            '#ffa3a2',
            '#f9b8a3',
            '#f1ccb1',
            '#ebddc8',
          ],
          backgroundColor: 'transparent',
          textStyle: {},
          title: {
            textStyle: { color: '#aaaaaa' },
            subtextStyle: { color: '#aaaaaa' },
          },
          tree: { itemStyle: { color: '#ffa3a2', borderColor: '#523e85' } },
          line: {
            itemStyle: { normal: { borderWidth: '2' } },
            lineStyle: { normal: { width: '2' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
          },
          radar: {
            itemStyle: { normal: { borderWidth: '2' } },
            lineStyle: { normal: { width: '2' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
          },
          bar: {
            itemStyle: {
              normal: { barBorderWidth: 0, barBorderColor: '#ccc' },
              emphasis: { barBorderWidth: 0, barBorderColor: '#ccc' },
            },
          },
          pie: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          scatter: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          boxplot: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          parallel: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          sankey: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          funnel: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          gauge: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          candlestick: {
            itemStyle: {
              normal: {
                color: '#8b4f8f',
                color0: '#ffa3a2',
                borderColor: '#8b4f8f',
                borderColor0: '#ffa3a2',
                borderWidth: '2',
              },
            },
          },
          graph: {
            itemStyle: { normal: { borderWidth: 0, borderColor: '#ccc' } },
            lineStyle: { normal: { width: 1, color: '#aaaaaa' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
            color: [
              '#523e85',
              '#8b4f8f',
              '#b96595',
              '#e0829a',
              '#ffa3a2',
              '#f9b8a3',
              '#f1ccb1',
              '#ebddc8',
            ],
            label: { normal: { textStyle: { color: '#ffffff' } } },
          },
          map: {
            itemStyle: {
              normal: {
                areaColor: '#f3f3f3',
                borderColor: '#999999',
                borderWidth: 0.5,
              },
              emphasis: {
                areaColor: 'rgba(255,178,72,1)',
                borderColor: '#eb8146',
                borderWidth: 1,
              },
            },
            label: {
              normal: { textStyle: { color: '#523e85' } },
              emphasis: { textStyle: { color: 'rgb(82,62,133)' } },
            },
          },
          geo: {
            itemStyle: {
              normal: {
                areaColor: '#f3f3f3',
                borderColor: '#999999',
                borderWidth: 0.5,
              },
              emphasis: {
                areaColor: 'rgba(255,178,72,1)',
                borderColor: '#eb8146',
                borderWidth: 1,
              },
            },
            label: {
              normal: { textStyle: { color: '#523e85' } },
              emphasis: { textStyle: { color: 'rgb(82,62,133)' } },
            },
          },
          categoryAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: {
              show: !1,
              areaStyle: {
                color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
              },
            },
          },
          valueAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: {
              show: !1,
              areaStyle: {
                color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
              },
            },
          },
          logAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: {
              show: !1,
              areaStyle: {
                color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
              },
            },
          },
          timeAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: {
              show: !1,
              areaStyle: {
                color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
              },
            },
          },
          toolbox: {
            iconStyle: {
              normal: { borderColor: '#999999' },
              emphasis: { borderColor: '#666666' },
            },
          },
          legend: { textStyle: { color: '#000000' } },
          tooltip: {
            axisPointer: {
              lineStyle: { color: '#cccccc', width: 1 },
              crossStyle: { color: '#cccccc', width: 1 },
            },
          },
          timeline: {
            lineStyle: { color: '#523e85', width: 1 },
            itemStyle: {
              normal: { color: '#523e85', borderWidth: 1 },
              emphasis: { color: '#ffb248' },
            },
            controlStyle: {
              normal: {
                color: '#523e85',
                borderColor: '#523e85',
                borderWidth: 0.5,
              },
              emphasis: {
                color: '#523e85',
                borderColor: '#523e85',
                borderWidth: 0.5,
              },
            },
            checkpointStyle: {
              color: '#eb8146',
              borderColor: 'rgba(255,178,72,0.41)',
            },
            label: {
              normal: { textStyle: { color: '#523e85' } },
              emphasis: { textStyle: { color: '#523e85' } },
            },
          },
          visualMap: {
            color: [
              '#523e85',
              '#8b4f8f',
              '#b96595',
              '#e0829a',
              '#ffa3a2',
              '#f9b8a3',
              '#f1ccb1',
              '#ebddc8',
            ],
          },
          dataZoom: {
            backgroundColor: 'rgba(255,255,255,0)',
            dataBackgroundColor: 'rgba(255,178,72,0.5)',
            fillerColor: 'rgba(255,178,72,0.15)',
            handleColor: '#ffb248',
            handleSize: '100%',
            textStyle: { color: '#aaaaaa' },
          },
          markPoint: {
            label: {
              normal: { textStyle: { color: '#ffffff' } },
              emphasis: { textStyle: { color: '#ffffff' } },
            },
          },
        },
        t = {
          color: [
            '#005e7d',
            '#c54b17',
            '#009392',
            '#f5bb3c',
            '#0098c9',
            '#f58b5e',
            '#59cecd',
            '#fee2a6',
          ],
          backgroundColor: 'transparent',
          textStyle: {},
          title: {
            textStyle: { color: '#aaaaaa' },
            subtextStyle: { color: '#aaaaaa' },
          },
          tree: { itemStyle: { color: '#fee2a6', borderColor: '#005e7d' } },
          line: {
            itemStyle: { normal: { borderWidth: '2' } },
            lineStyle: { normal: { width: '2' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
          },
          radar: {
            itemStyle: { normal: { borderWidth: '2' } },
            lineStyle: { normal: { width: '2' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
          },
          bar: {
            itemStyle: {
              normal: { barBorderWidth: 0, barBorderColor: '#ccc' },
              emphasis: { barBorderWidth: 0, barBorderColor: '#ccc' },
            },
          },
          pie: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          scatter: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          boxplot: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          parallel: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          sankey: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          funnel: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          gauge: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          candlestick: {
            itemStyle: {
              normal: {
                color: '#0098c9',
                color0: 'transparent',
                borderColor: '#0098c9',
                borderColor0: '#c54b17',
                borderWidth: '2',
              },
            },
          },
          graph: {
            itemStyle: { normal: { borderWidth: 0, borderColor: '#ccc' } },
            lineStyle: { normal: { width: 1, color: '#aaaaaa' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
            color: [
              '#005e7d',
              '#c54b17',
              '#009392',
              '#f5bb3c',
              '#0098c9',
              '#f58b5e',
              '#59cecd',
              '#fee2a6',
            ],
            label: { normal: { textStyle: { color: '#ffffff' } } },
          },
          map: {
            itemStyle: {
              normal: {
                areaColor: '#f3f3f3',
                borderColor: '#999999',
                borderWidth: 0.5,
              },
              emphasis: {
                areaColor: 'rgba(254,198,77,1)',
                borderColor: '#ecaf2b',
                borderWidth: 1,
              },
            },
            label: {
              normal: { textStyle: { color: '#00475e' } },
              emphasis: { textStyle: { color: 'rgb(0,71,94)' } },
            },
          },
          geo: {
            itemStyle: {
              normal: {
                areaColor: '#f3f3f3',
                borderColor: '#999999',
                borderWidth: 0.5,
              },
              emphasis: {
                areaColor: 'rgba(254,198,77,1)',
                borderColor: '#ecaf2b',
                borderWidth: 1,
              },
            },
            label: {
              normal: { textStyle: { color: '#00475e' } },
              emphasis: { textStyle: { color: 'rgb(0,71,94)' } },
            },
          },
          categoryAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: {
              show: !1,
              areaStyle: {
                color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
              },
            },
          },
          valueAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: {
              show: !1,
              areaStyle: {
                color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
              },
            },
          },
          logAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: {
              show: !1,
              areaStyle: {
                color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
              },
            },
          },
          timeAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: {
              show: !1,
              areaStyle: {
                color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
              },
            },
          },
          toolbox: {
            iconStyle: {
              normal: { borderColor: '#999999' },
              emphasis: { borderColor: '#666666' },
            },
          },
          legend: { textStyle: { color: '#999999' } },
          tooltip: {
            axisPointer: {
              lineStyle: { color: '#cccccc', width: 1 },
              crossStyle: { color: '#cccccc', width: 1 },
            },
          },
          timeline: {
            lineStyle: { color: '#666666', width: 1 },
            itemStyle: {
              normal: { color: '#666666', borderWidth: 1 },
              emphasis: { color: '#f7ac4f' },
            },
            controlStyle: {
              normal: {
                color: '#666666',
                borderColor: '#666666',
                borderWidth: 0.5,
              },
              emphasis: {
                color: '#666666',
                borderColor: '#666666',
                borderWidth: 0.5,
              },
            },
            checkpointStyle: {
              color: '#f7ac4f',
              borderColor: 'rgba(254,198,77,0.6)',
            },
            label: {
              normal: { textStyle: { color: '#666666' } },
              emphasis: { textStyle: { color: '#666666' } },
            },
          },
          visualMap: {
            color: [
              '#005e7d',
              '#c54b17',
              '#009392',
              '#f5bb3c',
              '#0098c9',
              '#f58b5e',
              '#59cecd',
              '#fee2a6',
            ],
          },
          dataZoom: {
            backgroundColor: 'rgba(255,255,255,0)',
            dataBackgroundColor: 'rgba(255,178,72,0.5)',
            fillerColor: 'rgba(255,178,72,0.15)',
            handleColor: '#ffb248',
            handleSize: '100%',
            textStyle: { color: '#aaaaaa' },
          },
          markPoint: {
            label: {
              normal: { textStyle: { color: '#ffffff' } },
              emphasis: { textStyle: { color: '#ffffff' } },
            },
          },
        },
        i = {
          color: ['#4d5b62', '#008ab6', '#ff5f02', '#2cc0bf', '#fed887'],
          backgroundColor: 'transparent',
          textStyle: {},
          title: {
            textStyle: { color: '#aaaaaa' },
            subtextStyle: { color: '#aaaaaa' },
          },
          tree: { itemStyle: { color: '#fed887', borderColor: '#4d5b62' } },
          line: {
            itemStyle: { normal: { borderWidth: '2' } },
            lineStyle: { normal: { width: '2' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
          },
          radar: {
            itemStyle: { normal: { borderWidth: '2' } },
            lineStyle: { normal: { width: '2' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
          },
          bar: {
            itemStyle: {
              normal: { barBorderWidth: 0, barBorderColor: '#ccc' },
              emphasis: { barBorderWidth: 0, barBorderColor: '#ccc' },
            },
          },
          pie: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          scatter: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          boxplot: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          parallel: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          sankey: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          funnel: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          gauge: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          candlestick: {
            itemStyle: {
              normal: {
                color: '#977ed2',
                color0: 'transparent',
                borderColor: '#977ed2',
                borderColor0: '#009d9c',
                borderWidth: '2',
              },
            },
          },
          graph: {
            itemStyle: { normal: { borderWidth: 0, borderColor: '#ccc' } },
            lineStyle: { normal: { width: 1, color: '#aaaaaa' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
            color: ['#4d5b62', '#008ab6', '#ff5f02', '#2cc0bf', '#fed887'],
            label: { normal: { textStyle: { color: '#ffffff' } } },
          },
          map: {
            itemStyle: {
              normal: {
                areaColor: '#f3f3f3',
                borderColor: '#999999',
                borderWidth: 0.5,
              },
              emphasis: {
                areaColor: 'rgba(254,198,77,1)',
                borderColor: '#ecaf2b',
                borderWidth: 1,
              },
            },
            label: {
              normal: { textStyle: { color: '#00475e' } },
              emphasis: { textStyle: { color: 'rgb(0,71,94)' } },
            },
          },
          geo: {
            itemStyle: {
              normal: {
                areaColor: '#f3f3f3',
                borderColor: '#999999',
                borderWidth: 0.5,
              },
              emphasis: {
                areaColor: 'rgba(254,198,77,1)',
                borderColor: '#ecaf2b',
                borderWidth: 1,
              },
            },
            label: {
              normal: { textStyle: { color: '#00475e' } },
              emphasis: { textStyle: { color: 'rgb(0,71,94)' } },
            },
          },
          categoryAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: {
              show: !1,
              areaStyle: {
                color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
              },
            },
          },
          valueAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: {
              show: !1,
              areaStyle: {
                color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
              },
            },
          },
          logAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: {
              show: !1,
              areaStyle: {
                color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
              },
            },
          },
          timeAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: {
              show: !1,
              areaStyle: {
                color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
              },
            },
          },
          toolbox: {
            iconStyle: {
              normal: { borderColor: '#999999' },
              emphasis: { borderColor: '#666666' },
            },
          },
          legend: { textStyle: { color: '#999999' } },
          tooltip: {
            axisPointer: {
              lineStyle: { color: '#cccccc', width: 1 },
              crossStyle: { color: '#cccccc', width: 1 },
            },
          },
          timeline: {
            lineStyle: { color: '#666666', width: 1 },
            itemStyle: {
              normal: { color: '#666666', borderWidth: 1 },
              emphasis: { color: '#f7ac4f' },
            },
            controlStyle: {
              normal: {
                color: '#666666',
                borderColor: '#666666',
                borderWidth: 0.5,
              },
              emphasis: {
                color: '#666666',
                borderColor: '#666666',
                borderWidth: 0.5,
              },
            },
            checkpointStyle: {
              color: '#f7ac4f',
              borderColor: 'rgba(254,198,77,0.6)',
            },
            label: {
              normal: { textStyle: { color: '#666666' } },
              emphasis: { textStyle: { color: '#666666' } },
            },
          },
          visualMap: {
            color: ['#4d5b62', '#008ab6', '#ff5f02', '#2cc0bf', '#fed887'],
          },
          dataZoom: {
            backgroundColor: 'rgba(255,255,255,0)',
            dataBackgroundColor: 'rgba(255,178,72,0.5)',
            fillerColor: 'rgba(255,178,72,0.15)',
            handleColor: '#ffb248',
            handleSize: '100%',
            textStyle: { color: '#aaaaaa' },
          },
          markPoint: {
            label: {
              normal: { textStyle: { color: '#ffffff' } },
              emphasis: { textStyle: { color: '#ffffff' } },
            },
          },
        },
        h = {
          color: [
            '#667279',
            '#979ea4',
            '#caced0',
            '#ffbb9c',
            '#fd986d',
            '#ff5f02',
          ],
          backgroundColor: 'transparent',
          textStyle: {},
          title: {
            textStyle: { color: '#aaaaaa' },
            subtextStyle: { color: '#aaaaaa' },
          },
          tree: { itemStyle: { color: '#ffbb9c', borderColor: '#667279' } },
          line: {
            itemStyle: { normal: { borderWidth: '2' } },
            lineStyle: { normal: { width: '2' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
          },
          radar: {
            itemStyle: { normal: { borderWidth: '2' } },
            lineStyle: { normal: { width: '2' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
          },
          bar: {
            itemStyle: {
              normal: { barBorderWidth: 0, barBorderColor: '#ccc' },
              emphasis: { barBorderWidth: 0, barBorderColor: '#ccc' },
            },
          },
          pie: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          scatter: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          boxplot: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          parallel: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          sankey: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          funnel: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          gauge: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          candlestick: {
            itemStyle: {
              normal: {
                color: '#ff5f02',
                color0: 'transparent',
                borderColor: '#ff5f02',
                borderColor0: '#667279',
                borderWidth: '2',
              },
            },
          },
          graph: {
            itemStyle: { normal: { borderWidth: 0, borderColor: '#ccc' } },
            lineStyle: { normal: { width: 1, color: '#aaaaaa' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
            color: [
              '#667279',
              '#979ea4',
              '#caced0',
              '#ffbb9c',
              '#fd986d',
              '#ff5f02',
            ],
            label: { normal: { textStyle: { color: '#ffffff' } } },
          },
          map: {
            itemStyle: {
              normal: {
                areaColor: '#f3f3f3',
                borderColor: '#999999',
                borderWidth: 0.5,
              },
              emphasis: {
                areaColor: 'rgba(254,198,77,1)',
                borderColor: '#ecaf2b',
                borderWidth: 1,
              },
            },
            label: {
              normal: { textStyle: { color: '#667279' } },
              emphasis: { textStyle: { color: 'rgb(102,114,121)' } },
            },
          },
          geo: {
            itemStyle: {
              normal: {
                areaColor: '#f3f3f3',
                borderColor: '#999999',
                borderWidth: 0.5,
              },
              emphasis: {
                areaColor: 'rgba(254,198,77,1)',
                borderColor: '#ecaf2b',
                borderWidth: 1,
              },
            },
            label: {
              normal: { textStyle: { color: '#667279' } },
              emphasis: { textStyle: { color: 'rgb(102,114,121)' } },
            },
          },
          categoryAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: {
              show: !1,
              areaStyle: {
                color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
              },
            },
          },
          valueAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: {
              show: !1,
              areaStyle: {
                color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
              },
            },
          },
          logAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: {
              show: !1,
              areaStyle: {
                color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
              },
            },
          },
          timeAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: {
              show: !1,
              areaStyle: {
                color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
              },
            },
          },
          toolbox: {
            iconStyle: {
              normal: { borderColor: '#999999' },
              emphasis: { borderColor: '#666666' },
            },
          },
          legend: { textStyle: { color: '#999999' } },
          tooltip: {
            axisPointer: {
              lineStyle: { color: '#cccccc', width: 1 },
              crossStyle: { color: '#cccccc', width: 1 },
            },
          },
          timeline: {
            lineStyle: { color: '#666666', width: 1 },
            itemStyle: {
              normal: { color: '#666666', borderWidth: 1 },
              emphasis: { color: '#fec64d' },
            },
            controlStyle: {
              normal: {
                color: '#666666',
                borderColor: '#666666',
                borderWidth: 0.5,
              },
              emphasis: {
                color: '#666666',
                borderColor: '#666666',
                borderWidth: 0.5,
              },
            },
            checkpointStyle: {
              color: '#ff5f02',
              borderColor: 'rgba(255,178,72,0.41)',
            },
            label: {
              normal: { textStyle: { color: '#666666' } },
              emphasis: { textStyle: { color: '#666666' } },
            },
          },
          visualMap: {
            color: [
              '#667279',
              '#979ea4',
              '#caced0',
              '#ffbb9c',
              '#fd986d',
              '#ff5f02',
            ],
          },
          dataZoom: {
            backgroundColor: 'rgba(255,255,255,0)',
            dataBackgroundColor: 'rgba(255,178,72,0.5)',
            fillerColor: 'rgba(255,178,72,0.15)',
            handleColor: '#fec64d',
            handleSize: '100%',
            textStyle: { color: '#aaaaaa' },
          },
          markPoint: {
            label: {
              normal: { textStyle: { color: '#ffffff' } },
              emphasis: { textStyle: { color: '#ffffff' } },
            },
          },
        },
        n = {
          color: [
            '#565a83',
            '#7c5c91',
            '#a85a90',
            '#cf5880',
            '#ea5f64',
            '#ff5f02',
          ],
          backgroundColor: 'transparent',
          textStyle: {},
          title: {
            textStyle: { color: '#aaaaaa' },
            subtextStyle: { color: '#aaaaaa' },
          },
          tree: { itemStyle: { color: '#a85a90', borderColor: '#565a83' } },
          line: {
            itemStyle: { normal: { borderWidth: '2' } },
            lineStyle: { normal: { width: '2' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
          },
          radar: {
            itemStyle: { normal: { borderWidth: '2' } },
            lineStyle: { normal: { width: '2' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
          },
          bar: {
            itemStyle: {
              normal: { barBorderWidth: 0, barBorderColor: '#ccc' },
              emphasis: { barBorderWidth: 0, barBorderColor: '#ccc' },
            },
          },
          pie: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          scatter: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          boxplot: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          parallel: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          sankey: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          funnel: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          gauge: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          candlestick: {
            itemStyle: {
              normal: {
                color: '#ff5f02',
                color0: 'transparent',
                borderColor: '#ff5f02',
                borderColor0: '#667279',
                borderWidth: '2',
              },
            },
          },
          graph: {
            itemStyle: { normal: { borderWidth: 0, borderColor: '#ccc' } },
            lineStyle: { normal: { width: 1, color: '#aaaaaa' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
            color: [
              '#565a83',
              '#7c5c91',
              '#a85a90',
              '#cf5880',
              '#ea5f64',
              '#ff5f02',
            ],
            label: { normal: { textStyle: { color: '#ffffff' } } },
          },
          map: {
            itemStyle: {
              normal: {
                areaColor: '#f3f3f3',
                borderColor: '#999999',
                borderWidth: 0.5,
              },
              emphasis: {
                areaColor: 'rgba(254,198,77,1)',
                borderColor: '#ecaf2b',
                borderWidth: 1,
              },
            },
            label: {
              normal: { textStyle: { color: '#667279' } },
              emphasis: { textStyle: { color: 'rgb(102,114,121)' } },
            },
          },
          geo: {
            itemStyle: {
              normal: {
                areaColor: '#f3f3f3',
                borderColor: '#999999',
                borderWidth: 0.5,
              },
              emphasis: {
                areaColor: 'rgba(254,198,77,1)',
                borderColor: '#ecaf2b',
                borderWidth: 1,
              },
            },
            label: {
              normal: { textStyle: { color: '#667279' } },
              emphasis: { textStyle: { color: 'rgb(102,114,121)' } },
            },
          },
          categoryAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: {
              show: !1,
              areaStyle: {
                color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
              },
            },
          },
          valueAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: {
              show: !1,
              areaStyle: {
                color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
              },
            },
          },
          logAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: {
              show: !1,
              areaStyle: {
                color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
              },
            },
          },
          timeAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: {
              show: !1,
              areaStyle: {
                color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
              },
            },
          },
          toolbox: {
            iconStyle: {
              normal: { borderColor: '#999999' },
              emphasis: { borderColor: '#666666' },
            },
          },
          legend: { textStyle: { color: '#000000' } },
          tooltip: {
            axisPointer: {
              lineStyle: { color: '#cccccc', width: 1 },
              crossStyle: { color: '#cccccc', width: 1 },
            },
          },
          timeline: {
            lineStyle: { color: '#666666', width: 1 },
            itemStyle: {
              normal: { color: '#666666', borderWidth: 1 },
              emphasis: { color: '#fec64d' },
            },
            controlStyle: {
              normal: {
                color: '#666666',
                borderColor: '#666666',
                borderWidth: 0.5,
              },
              emphasis: {
                color: '#666666',
                borderColor: '#666666',
                borderWidth: 0.5,
              },
            },
            checkpointStyle: {
              color: '#ff5f02',
              borderColor: 'rgba(255,178,72,0.41)',
            },
            label: {
              normal: { textStyle: { color: '#666666' } },
              emphasis: { textStyle: { color: '#666666' } },
            },
          },
          visualMap: {
            color: [
              '#565a83',
              '#7c5c91',
              '#a85a90',
              '#cf5880',
              '#ea5f64',
              '#ff5f02',
            ],
          },
          dataZoom: {
            backgroundColor: 'rgba(255,255,255,0)',
            dataBackgroundColor: 'rgba(255,178,72,0.5)',
            fillerColor: 'rgba(255,178,72,0.15)',
            handleColor: '#fec64d',
            handleSize: '100%',
            textStyle: { color: '#aaaaaa' },
          },
          markPoint: {
            label: {
              normal: { textStyle: { color: '#ffffff' } },
              emphasis: { textStyle: { color: '#ffffff' } },
            },
          },
        };
      function r(p, b) {
        echarts.registerTheme(p, b);
      }
      function d() {
        r('aqua-splash', c),
          r('california-coast', a),
          r('hawaiian-sunrise', m),
          r('passion-flower', l),
          r('razzleberry-pie', s),
          r('teradata-classic', t),
          r('teradata-default', i),
          r('urban-sunrise', h),
          r('volcanic-eruption', n);
      }
      function f() {
        return [
          'aqua-splash',
          'california-coast',
          'hawaiian-sunrise',
          'passion-flower',
          'razzleberry-pie',
          'teradata-classic',
          'teradata-default',
          'urban-sunrise',
          'volcanic-eruption',
        ];
      }
    },
    57337: (C, y, e) => {
      e.d(y, { NF: () => s });
      var o = e(96814),
        m = (e(33822), e(76413), e(19212));
      let s = (() => {
        class t {
          static ɵfac = function (n) {
            return new (n || t)();
          };
          static ɵmod = m.oAB({ type: t });
          static ɵinj = m.cJS({ imports: [o.ez] });
        }
        return t;
      })();
    },
    76413: (C, y, e) => {
      e.d(y, { m: () => t });
      var o = e(19212),
        c = e(23421),
        a = e(33822),
        m = e(96814);
      const l = ['tooltipContent'];
      function s(i, h) {}
      let t = (() => {
        class i {
          _changeDetectorRef;
          _elementRef;
          _seriesComponent;
          _state = {};
          _context = new a.LF();
          config;
          formatter;
          position;
          backgroundColor = 'rgba(50,50,50,0.7)';
          borderColor = '#333';
          borderWidth = 0;
          padding = 5;
          textStyle = { color: '#FFF' };
          extraCssText;
          formatterTemplate;
          fullTemplate;
          constructor(n, r, d) {
            (this._changeDetectorRef = n),
              (this._elementRef = r),
              (this._seriesComponent = d);
          }
          ngOnChanges() {
            this._setOptions();
          }
          ngOnDestroy() {
            this._removeOption();
          }
          _setOptions() {
            const n = (0, c.t8)(
              this._state,
              {
                position: this.position,
                backgroundColor: this.backgroundColor,
                borderColor: this.borderColor,
                borderWidth: this.borderWidth,
                padding: this.padding,
                textStyle: this.textStyle,
                extraCssText: this.extraCssText,
                formatter: this.formatter
                  ? this.formatter
                  : this.formatterTemplate
                  ? this._formatter()
                  : void 0,
              },
              this.config ? this.config : {}
            );
            this._seriesComponent.setStateOption('tooltip', n);
          }
          _formatter() {
            return (n, r, d) => (
              (this._context = { $implicit: n, ticket: r }),
              setTimeout(() => {
                d(r, this._elementRef.nativeElement.innerHTML);
              }),
              this._changeDetectorRef.markForCheck(),
              this._elementRef.nativeElement.innerHTML
            );
          }
          _removeOption() {
            this._seriesComponent.removeStateOption('tooltip');
          }
          static ɵfac = function (r) {
            return new (r || i)(o.Y36(o.sBO), o.Y36(o.SBq), o.Y36(c.R0));
          };
          static ɵcmp = o.Xpm({
            type: i,
            selectors: [['td-chart-series-tooltip']],
            contentQueries: function (r, d, f) {
              if ((1 & r && o.Suo(f, a.dA, 7, o.Rgc), 2 & r)) {
                let p;
                o.iGM((p = o.CRH())) && (d.formatterTemplate = p.first);
              }
            },
            viewQuery: function (r, d) {
              if ((1 & r && o.Gf(l, 7), 2 & r)) {
                let f;
                o.iGM((f = o.CRH())) && (d.fullTemplate = f.first);
              }
            },
            inputs: {
              config: 'config',
              formatter: 'formatter',
              position: 'position',
              backgroundColor: 'backgroundColor',
              borderColor: 'borderColor',
              borderWidth: 'borderWidth',
              padding: 'padding',
              textStyle: 'textStyle',
              extraCssText: 'extraCssText',
            },
            features: [o.TTD],
            decls: 2,
            vars: 2,
            consts: [
              [3, 'ngTemplateOutlet', 'ngTemplateOutletContext'],
              ['tooltipContent', ''],
            ],
            template: function (r, d) {
              1 & r && o.YNc(0, s, 0, 0, 'ng-template', 0, 1, o.W1O),
                2 & r &&
                  o.Q6J('ngTemplateOutlet', d.formatterTemplate)(
                    'ngTemplateOutletContext',
                    d._context
                  );
            },
            dependencies: [m.tP],
            encapsulation: 2,
            changeDetection: 0,
          });
        }
        return i;
      })();
    },
    33822: (C, y, e) => {
      e.d(y, { HN: () => i, LF: () => s, dA: () => t });
      var o = e(19212),
        c = e(23421),
        a = e(96814);
      const m = ['tooltipContent'];
      function l(h, n) {}
      class s {
        $implicit;
        ticket;
      }
      let t = (() => {
          class h {
            static ɵfac = function (d) {
              return new (d || h)();
            };
            static ɵdir = o.lG2({
              type: h,
              selectors: [['ng-template', 'tdTooltipFormatter', '']],
            });
          }
          return h;
        })(),
        i = (() => {
          class h {
            _changeDetectorRef;
            _elementRef;
            _optionsService;
            _state = {};
            _context = new s();
            config = {};
            show = !0;
            trigger = 'axis';
            axisPointer;
            showContent = !0;
            alwaysShowContent = !1;
            triggerOn = 'mousemove|click';
            showDelay = 0;
            hideDelay = 0;
            enterable = !1;
            renderMode;
            confine = !1;
            transitionDuration = 0.5;
            position;
            formatter;
            backgroundColor = 'rgba(50,50,50,0.7)';
            borderColor = '#333';
            borderWidth = 0;
            padding = 5;
            textStyle = { color: '#FFF' };
            extraCssText;
            formatterTemplate;
            fullTemplate;
            constructor(r, d, f) {
              (this._changeDetectorRef = r),
                (this._elementRef = d),
                (this._optionsService = f);
            }
            ngOnChanges() {
              this._setOptions();
            }
            ngOnDestroy() {
              this._removeOption();
            }
            _setOptions() {
              const r = (0, c.t8)(
                this._state,
                {
                  show: this.show,
                  trigger: this.trigger,
                  axisPointer: this.axisPointer,
                  showContent: this.showContent,
                  alwaysShowContent: this.alwaysShowContent,
                  triggerOn: this.triggerOn,
                  showDelay: this.showDelay,
                  hideDelay: this.hideDelay,
                  enterable: this.enterable,
                  confine: this.confine,
                  transitionDuration: this.transitionDuration,
                  position: this.position,
                  formatter: this.formatter
                    ? this.formatter
                    : this.formatterTemplate
                    ? this._formatter()
                    : void 0,
                  backgroundColor: this.backgroundColor,
                  borderColor: this.borderColor,
                  borderWidth: this.borderWidth,
                  padding: this.padding,
                  textStyle: this.textStyle,
                  extraCssText: this.extraCssText,
                },
                this.config ? this.config : {}
              );
              this._optionsService.setOption('tooltip', r);
            }
            _removeOption() {
              this._optionsService.clearOption('tooltip');
            }
            _formatter() {
              return (r, d, f) => (
                (this._context = { $implicit: r, ticket: d }),
                setTimeout(() => {
                  f(d, this._elementRef.nativeElement.innerHTML);
                }),
                this._changeDetectorRef.markForCheck(),
                this._elementRef.nativeElement.innerHTML
              );
            }
            static ɵfac = function (d) {
              return new (d || h)(o.Y36(o.sBO), o.Y36(o.SBq), o.Y36(c.ij));
            };
            static ɵcmp = o.Xpm({
              type: h,
              selectors: [['td-chart-tooltip']],
              contentQueries: function (d, f, p) {
                if ((1 & d && o.Suo(p, t, 7, o.Rgc), 2 & d)) {
                  let b;
                  o.iGM((b = o.CRH())) && (f.formatterTemplate = b.first);
                }
              },
              viewQuery: function (d, f) {
                if ((1 & d && o.Gf(m, 7), 2 & d)) {
                  let p;
                  o.iGM((p = o.CRH())) && (f.fullTemplate = p.first);
                }
              },
              inputs: {
                config: 'config',
                show: 'show',
                trigger: 'trigger',
                axisPointer: 'axisPointer',
                showContent: 'showContent',
                alwaysShowContent: 'alwaysShowContent',
                triggerOn: 'triggerOn',
                showDelay: 'showDelay',
                hideDelay: 'hideDelay',
                enterable: 'enterable',
                renderMode: 'renderMode',
                confine: 'confine',
                transitionDuration: 'transitionDuration',
                position: 'position',
                formatter: 'formatter',
                backgroundColor: 'backgroundColor',
                borderColor: 'borderColor',
                borderWidth: 'borderWidth',
                padding: 'padding',
                textStyle: 'textStyle',
                extraCssText: 'extraCssText',
              },
              features: [o.TTD],
              decls: 2,
              vars: 2,
              consts: [
                [3, 'ngTemplateOutlet', 'ngTemplateOutletContext'],
                ['tooltipContent', ''],
              ],
              template: function (d, f) {
                1 & d && o.YNc(0, l, 0, 0, 'ng-template', 0, 1, o.W1O),
                  2 & d &&
                    o.Q6J('ngTemplateOutlet', f.formatterTemplate)(
                      'ngTemplateOutletContext',
                      f._context
                    );
              },
              dependencies: [a.tP],
              encapsulation: 2,
              changeDetection: 0,
            });
          }
          return h;
        })();
    },
  },
]);
