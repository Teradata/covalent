'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [4141],
  {
    24141: (_, f, a) => {
      a.r(f), a.d(f, { GraphDemoModule: () => it });
      var n = a(96814),
        u = a(98525),
        d = a(30617),
        T = a(23421),
        v = a(57337),
        h = a(52514),
        C = a(96535),
        c = a(52787),
        t = a(19212),
        m = a(31791),
        i = a(15861),
        p = a(76856),
        y = a(1691),
        x = a(33822),
        z = a(20909),
        j = a(64170),
        O = a(23680);
      function B(e, r) {
        if ((1 & e && (t.TgZ(0, 'mat-option', 8), t._uU(1), t.qZA()), 2 & e)) {
          const o = r.$implicit;
          t.Q6J('value', o), t.xp6(1), t.hij(' ', o, ' ');
        }
      }
      function M(e, r) {
        if (
          (1 & e &&
            (t.ynx(0),
            t.TgZ(1, 'mat-icon'),
            t._uU(2, 'device_hub'),
            t.qZA(),
            t.TgZ(3, 'span', 11),
            t._uU(4),
            t.qZA(),
            t.BQk()),
          2 & e)
        ) {
          const o = t.oxw(2).$implicit;
          t.xp6(1),
            t.Udp('color', o.color),
            t.xp6(3),
            t.hij(' ', o.data.name, ' ');
        }
      }
      function Z(e, r) {
        if (
          (1 & e &&
            (t.ynx(0),
            t.TgZ(1, 'span', 11),
            t._uU(2),
            t.qZA(),
            t.TgZ(3, 'mat-icon'),
            t._uU(4, 'arrow_forward'),
            t.qZA(),
            t.TgZ(5, 'span', 12),
            t._uU(6),
            t.qZA(),
            t.BQk()),
          2 & e)
        ) {
          const o = t.oxw(2).$implicit;
          t.xp6(2),
            t.hij(' ', o.data.source, ' '),
            t.xp6(4),
            t.hij(' ', o.data.target, ' ');
        }
      }
      function G(e, r) {
        if (
          (1 & e &&
            (t.ynx(0),
            t.TgZ(1, 'div', 10),
            t.YNc(2, M, 5, 3, 'ng-container', 9)(3, Z, 7, 2, 'ng-container', 9),
            t.qZA(),
            t.BQk()),
          2 & e)
        ) {
          const o = t.oxw().$implicit;
          t.xp6(2),
            t.Q6J('ngIf', 'node' === o.dataType),
            t.xp6(1),
            t.Q6J('ngIf', 'edge' === o.dataType);
        }
      }
      function A(e, r) {
        1 & e && t.YNc(0, G, 4, 2, 'ng-container', 9),
          2 & e && t.Q6J('ngIf', r.$implicit);
      }
      const F = (e, r) => ({
          x: e,
          y: r,
          id: 'jquery',
          name: 'jquery',
          symbolSize: 40.7252817,
        }),
        w = (e, r) => ({
          x: e,
          y: r,
          id: 'backbone',
          name: 'backbone',
          symbolSize: 60.1554675,
        }),
        Q = (e) => ({
          x: e,
          y: 624.50604,
          id: 'angular',
          name: 'angular',
          symbolSize: 60.7816025,
        }),
        J = (e) => ({
          x: e,
          y: 120.37976,
          id: 'socket.io',
          name: 'socket.io',
          symbolSize: 19.818306,
        }),
        N = (e) => ({
          x: e,
          y: 477.03778,
          id: 'underscore',
          name: 'underscore',
          symbolSize: 40.0429485,
        }),
        U = (e, r) => ({
          x: e,
          y: r,
          id: 'vue.js',
          name: 'vue.js',
          symbolSize: 80.163814,
        }),
        E = (e) => ({
          x: 118.30771,
          y: e,
          id: 'lodash',
          name: 'lodash',
          symbolSize: 18.935852,
        }),
        R = (e) => ({
          x: 381.10724,
          y: e,
          id: 'dateformat',
          name: 'dateformat',
          symbolSize: 30.3863845,
        }),
        L = (e, r) => ({
          x: e,
          y: r,
          id: 'express',
          name: 'express',
          symbolSize: 49.608772,
        }),
        P = (e, r, o, s, l, S, g, D, b) => [e, r, o, s, l, S, g, D, b],
        Y = () => ({ source: 'jquery', target: 'backbone' }),
        I = () => ({ source: 'jquery', target: 'vue.js' }),
        k = () => ({ source: 'jquery', target: 'lodash' }),
        K = () => ({ source: 'jquery', target: 'dateformat' }),
        V = () => ({ source: 'backbone', target: 'underscore' }),
        W = () => ({ source: 'faye', target: 'cookiejar' }),
        $ = () => ({ source: 'socket.io', target: 'express' }),
        q = () => ({ source: 'socket.io', target: 'faye' }),
        H = () => ({ source: 'vue.js', target: 'underscore' }),
        X = () => ({ source: 'vue.js', target: 'dateformat' }),
        tt = () => ({ source: 'express', target: 'socket.io' }),
        et = () => ({ source: 'express', target: 'dateformat' }),
        ot = (e, r, o, s, l, S, g, D, b, ct, mt, lt) => [
          e,
          r,
          o,
          s,
          l,
          S,
          g,
          D,
          b,
          ct,
          mt,
          lt,
        ];
      let at = (() => {
        class e {
          _cdr;
          themeSelector;
          themes = (0, T.RC)();
          selectedTheme;
          config = {
            tooltip: {},
            xAxis: { show: !1 },
            yAxis: { show: !1 },
            series: [
              {
                type: 'graph',
                layout: 'none',
                data: [
                  {
                    x: -739.36383,
                    y: -404.26147,
                    id: 'jquery',
                    name: 'jquery',
                    symbolSize: 40.7252817,
                    itemStyle: { normal: { color: '#4f19c7' } },
                  },
                  {
                    x: -134.2215,
                    y: -862.7517,
                    id: 'backbone',
                    name: 'backbone',
                    symbolSize: 60.1554675,
                    itemStyle: { normal: { color: '#c71969' } },
                  },
                  {
                    x: -818.97516,
                    y: 624.50604,
                    id: 'angular',
                    name: 'angular',
                    symbolSize: 60.7816025,
                    itemStyle: { normal: { color: '#c71969' } },
                  },
                  {
                    x: -710.59204,
                    y: 120.37976,
                    id: 'socket.io',
                    name: 'socket.io',
                    symbolSize: 19.818306,
                    itemStyle: { normal: { color: '#c71919' } },
                  },
                  {
                    x: -127.03764,
                    y: 477.03778,
                    id: 'underscore',
                    name: 'underscore',
                    symbolSize: 40.0429485,
                    itemStyle: { normal: { color: '#c76919' } },
                  },
                  {
                    x: -338.03128,
                    y: -404.62427,
                    id: 'vue.js',
                    name: 'vue.js',
                    symbolSize: 80.163814,
                    itemStyle: { normal: { color: '#8419c7' } },
                  },
                  {
                    x: 118.30771,
                    y: -380.16626,
                    id: 'lodash',
                    name: 'lodash',
                    symbolSize: 18.935852,
                    itemStyle: { normal: { color: '#c76919' } },
                  },
                  {
                    x: 381.10724,
                    y: -531.28235,
                    id: 'dateformat',
                    name: 'dateformat',
                    symbolSize: 30.3863845,
                    itemStyle: { normal: { color: '#c71969' } },
                  },
                  {
                    x: -644.2716,
                    y: -230.14833,
                    id: 'express',
                    name: 'express',
                    symbolSize: 49.608772,
                    itemStyle: { normal: { color: '#c71919' } },
                  },
                ],
                edges: [
                  { source: 'jquery', target: 'backbone' },
                  { source: 'jquery', target: 'vue.js' },
                  { source: 'jquery', target: 'lodash' },
                  { source: 'jquery', target: 'dateformat' },
                  { source: 'backbone', target: 'underscore' },
                  { source: 'faye', target: 'cookiejar' },
                  { source: 'socket.io', target: 'express' },
                  { source: 'socket.io', target: 'faye' },
                  { source: 'vue.js', target: 'underscore' },
                  { source: 'vue.js', target: 'dateformat' },
                  { source: 'express', target: 'socket.io' },
                  { source: 'express', target: 'dateformat' },
                ],
                label: { emphasis: { position: 'right', show: !0 } },
                roam: !0,
                focusNodeAdjacency: !0,
                lineStyle: {
                  normal: { width: 0.5, curveness: 0.3, opacity: 0.7 },
                },
              },
            ],
          };
          constructor(o, s) {
            (this._cdr = o), (this.themeSelector = s);
          }
          ngOnInit() {
            var o = this;
            return (0, i.Z)(function* () {
              (o.selectedTheme = o.themeSelector.selected),
                o._cdr.markForCheck();
            })();
          }
          selectChartTheme(o) {
            this.themeSelector.select(o);
          }
          static ɵfac = function (s) {
            return new (s || e)(t.Y36(t.sBO), t.Y36(p.n));
          };
          static ɵcmp = t.Xpm({
            type: e,
            selectors: [['graph-demo-basic']],
            decls: 11,
            vars: 69,
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
              [3, 'trigger'],
              ['tdTooltipFormatter', ''],
              [
                'td-graph',
                '',
                3,
                'data',
                'edges',
                'roam',
                'focusNodeAdjacency',
              ],
              [3, 'value'],
              [4, 'ngIf'],
              ['layout', 'row', 'layout-align', 'start center'],
              [1, 'mat-caption', 'pad-left-sm'],
              [1, 'mat-caption'],
            ],
            template: function (s, l) {
              1 & s &&
                (t.TgZ(0, 'div', 0)(1, 'div', 1),
                t._uU(2, ' Chart Theme: '),
                t.qZA(),
                t.TgZ(3, 'mat-form-field')(4, 'mat-select', 2),
                t.NdJ('valueChange', function (g) {
                  return (l.selectedTheme = g);
                })('valueChange', function (g) {
                  return l.selectChartTheme(g);
                }),
                t.YNc(5, B, 2, 2, 'mat-option', 3),
                t.qZA()()(),
                t.TgZ(6, 'td-chart', 4),
                t.ALo(7, 'async'),
                t.TgZ(8, 'td-chart-tooltip', 5),
                t.YNc(9, A, 1, 1, 'ng-template', 6),
                t.qZA(),
                t._UZ(10, 'td-chart-series', 7),
                t.qZA()),
                2 & s &&
                  (t.xp6(4),
                  t.Q6J('value', l.selectedTheme),
                  t.xp6(1),
                  t.Q6J('ngForOf', l.themes),
                  t.xp6(1),
                  t.Udp('height', 500, 'px'),
                  t.Q6J('themeName', t.lcZ(7, 10, l.themeSelector.selected$)),
                  t.xp6(2),
                  t.Q6J('trigger', 'item'),
                  t.xp6(2),
                  t.Q6J(
                    'data',
                    t.rFY(34, P, [
                      t.WLB(12, F, -739.36383, -404.26147),
                      t.WLB(15, w, -134.2215, -862.7517),
                      t.VKq(18, Q, -818.97516),
                      t.VKq(20, J, -710.59204),
                      t.VKq(22, N, -127.03764),
                      t.WLB(24, U, -338.03128, -404.62427),
                      t.VKq(27, E, -380.16626),
                      t.VKq(29, R, -531.28235),
                      t.WLB(31, L, -644.2716, -230.14833),
                    ])
                  )(
                    'edges',
                    t.rFY(56, ot, [
                      t.DdM(44, Y),
                      t.DdM(45, I),
                      t.DdM(46, k),
                      t.DdM(47, K),
                      t.DdM(48, V),
                      t.DdM(49, W),
                      t.DdM(50, $),
                      t.DdM(51, q),
                      t.DdM(52, H),
                      t.DdM(53, X),
                      t.DdM(54, tt),
                      t.DdM(55, et),
                    ])
                  )('roam', !0)('focusNodeAdjacency', !0));
            },
            dependencies: [
              y.L,
              x.HN,
              x.dA,
              z.n,
              n.sg,
              n.O5,
              j.KE,
              u.gD,
              O.ey,
              d.Hw,
              n.Ov,
            ],
            changeDetection: 0,
          });
        }
        return e;
      })();
      const nt = [
        {
          path: '',
          component: (() => {
            class e {
              static ɵfac = function (s) {
                return new (s || e)();
              };
              static ɵcmp = t.Xpm({
                type: e,
                selectors: [['graph-demo']],
                decls: 2,
                vars: 2,
                consts: [[3, 'demoId', 'demoTitle']],
                template: function (s, l) {
                  1 & s &&
                    (t.TgZ(0, 'demo-component', 0),
                    t._UZ(1, 'graph-demo-basic'),
                    t.qZA()),
                    2 & s &&
                      t.Q6J('demoId', 'graph-demo-basic')('demoTitle', 'Basic');
                },
                dependencies: [m.z, at],
              });
            }
            return e;
          })(),
        },
      ];
      let st = (() => {
        class e {
          static ɵfac = function (s) {
            return new (s || e)();
          };
          static ɵmod = t.oAB({ type: e });
          static ɵinj = t.cJS({ imports: [c.Bz.forChild(nt), c.Bz] });
        }
        return e;
      })();
      var rt = a(56416);
      let it = (() => {
        class e {
          static ɵfac = function (s) {
            return new (s || e)();
          };
          static ɵmod = t.oAB({ type: e });
          static ɵinj = t.cJS({
            imports: [C.l, st, T.MX, v.NF, h.Po, rt.IP, n.ez, u.LD, d.Ps],
          });
        }
        return e;
      })();
    },
    52514: (_, f, a) => {
      a.d(f, { Po: () => v });
      var n = a(96814),
        d = (a(13063), a(19212));
      let v = (() => {
        class h {
          static ɵfac = function (t) {
            return new (t || h)();
          };
          static ɵmod = d.oAB({ type: h });
          static ɵinj = d.cJS({ imports: [n.ez] });
        }
        return h;
      })();
    },
    13063: (_, f, a) => {
      a.d(f, { G: () => h, O: () => C });
      var n = a(19212),
        u = a(23421),
        d = a(96814);
      const T = ['toolboxContent'];
      function v(c, t) {}
      let h = (() => {
          class c {
            static ɵfac = function (i) {
              return new (i || c)();
            };
            static ɵdir = n.lG2({
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
            constructor(m, i, p) {
              (this._changeDetectorRef = m),
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
              const m = (0, u.t8)(
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
              this._optionsService.setOption('toolbox', m);
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
              return new (i || c)(n.Y36(n.sBO), n.Y36(n.SBq), n.Y36(u.ij));
            };
            static ɵcmp = n.Xpm({
              type: c,
              selectors: [['td-chart-toolbox']],
              contentQueries: function (i, p, y) {
                if ((1 & i && n.Suo(y, h, 5, n.Rgc), 2 & i)) {
                  let x;
                  n.iGM((x = n.CRH())) && (p.formatterTemplate = x.first);
                }
              },
              viewQuery: function (i, p) {
                if ((1 & i && n.Gf(T, 7), 2 & i)) {
                  let y;
                  n.iGM((y = n.CRH())) && (p.fullTemplate = y.first);
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
              template: function (i, p) {
                1 & i && n.YNc(0, v, 0, 0, 'ng-template', 0, 1, n.W1O),
                  2 & i && n.Q6J('ngTemplateOutlet', p.formatterTemplate);
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
