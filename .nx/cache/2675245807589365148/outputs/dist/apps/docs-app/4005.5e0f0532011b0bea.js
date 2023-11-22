'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [4005],
  {
    98802: (y, u, e) => {
      e.r(u), e.d(u, { PieModule: () => N });
      var n = e(96814),
        p = e(52787),
        h = e(98525),
        g = e(30617),
        T = e(22497),
        c = e(23421),
        f = e(57337),
        s = e(52514),
        v = e(99902),
        r = e(63048),
        a = e(41257),
        d = e(76856),
        t = e(19212),
        C = e(1691),
        Z = e(64335),
        P = e(62730),
        x = e(33822),
        D = e(13063);
      function w(o, l) {
        if ((1 & o && (t.TgZ(0, 'td', 11), t._uU(1), t.qZA()), 2 & o)) {
          const i = l.ngIf,
            m = t.oxw().index;
          t.xp6(1), t.hij(' ', i[m], ' ');
        }
      }
      function A(o, l) {
        if ((1 & o && (t.TgZ(0, 'td', 11), t._uU(1), t.qZA()), 2 & o)) {
          const i = l.ngIf,
            m = t.oxw().index;
          t.xp6(1), t.hij(' ', i[m], ' ');
        }
      }
      const S = () => [823, 235, 1042, 988],
        O = () => [95.8, 81.4, 91.2, 76.9];
      function b(o, l) {
        if (
          (1 & o &&
            (t.ynx(0),
            t.TgZ(1, 'tr', 10)(2, 'td', 11),
            t._uU(3),
            t.qZA(),
            t.YNc(4, w, 2, 1, 'td', 12)(5, A, 2, 1, 'td', 12),
            t.qZA(),
            t.BQk()),
          2 & o)
        ) {
          const i = l.$implicit;
          t.xp6(3),
            t.Oqu(i),
            t.xp6(1),
            t.Q6J('ngIf', t.DdM(3, S)),
            t.xp6(1),
            t.Q6J('ngIf', t.DdM(4, O));
        }
      }
      const M = () => ['Latte', 'Tea', 'Cocoa', 'Milk'];
      function F(o, l) {
        1 & o &&
          (t.TgZ(0, 'table', 6)(1, 'thead')(2, 'tr', 7)(3, 'th', 8),
          t._uU(4, 'Product'),
          t.qZA(),
          t.TgZ(5, 'th', 8),
          t._uU(6, 'Count'),
          t.qZA(),
          t.TgZ(7, 'th', 8),
          t._uU(8, 'Score'),
          t.qZA()()(),
          t.TgZ(9, 'tbody'),
          t.YNc(10, b, 6, 5, 'ng-container', 9),
          t.qZA()()),
          2 & o && (t.xp6(10), t.Q6J('ngForOf', t.DdM(1, M)));
      }
      function z(o, l) {
        if (
          (1 & o &&
            (t.ynx(0),
            t.TgZ(1, 'div', 14)(2, 'span', 15),
            t._uU(3),
            t.qZA()(),
            t.BQk()),
          2 & o)
        ) {
          const i = t.oxw().$implicit;
          t.xp6(3),
            t.AsE(
              ' ',
              i.seriesName ? i.seriesName : i.name,
              ' : ',
              i.value,
              ' '
            );
        }
      }
      function E(o, l) {
        1 & o && t.YNc(0, z, 4, 2, 'ng-container', 13),
          2 & o && t.Q6J('ngIf', l.$implicit);
      }
      const B = (o, l, i) => ({ product: o, count: l, score: i }),
        Q = () => ['Data View', 'Turn Off', 'Refresh'],
        R = (o) => ({ readOnly: !0, title: 'View Data', lang: o }),
        U = (o) => ({ dataView: o }),
        G = () => ({ color: '#818181' }),
        V = () => [0, '75%'],
        J = (0, r.uw)({
          overviewDemoComponent: (() => {
            class o {
              themeSelector;
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
                  },
                },
                grid: { top: '0', bottom: '10', left: '0' },
                series: [
                  {
                    type: 'pie',
                    itemStyle: { opacity: 0.95 },
                    name: 'Product',
                    radius: [0, '75%'],
                    data: [
                      {
                        name: 'Latte',
                        value: 80,
                        itemStyle: { color: '#26B99A' },
                      },
                      {
                        name: 'Tea',
                        value: 50,
                        itemStyle: { color: '#34495E' },
                      },
                      {
                        name: 'Cocoa',
                        value: 60,
                        itemStyle: { color: '#BDC3C7' },
                      },
                      {
                        name: 'Frappe',
                        value: 122,
                        itemStyle: { color: '#3498DB' },
                      },
                      {
                        name: 'Milk',
                        value: 110,
                        itemStyle: { color: '#9B59B6' },
                      },
                      {
                        name: 'Mocha',
                        value: 20,
                        itemStyle: { color: '#8abb6f' },
                      },
                    ],
                  },
                ],
                tooltip: {
                  show: !0,
                  trigger: 'item',
                  showContent: !0,
                  formatter: '{a} <br/>{b} : {c} ({d}%)',
                },
              };
              constructor(i) {
                this.themeSelector = i;
              }
              static ɵfac = function (m) {
                return new (m || o)(t.Y36(d.n));
              };
              static ɵcmp = t.Xpm({
                type: o,
                selectors: [['types-pie']],
                decls: 7,
                vars: 25,
                consts: [
                  [3, 'source'],
                  [3, 'show', 'right', 'top', 'feature'],
                  ['tdViewDataFormatter', ''],
                  [3, 'trigger', 'textStyle', 'backgroundColor'],
                  ['tdTooltipFormatter', ''],
                  ['td-pie', '', 3, 'radius'],
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
                template: function (m, _) {
                  1 & m &&
                    (t.TgZ(0, 'td-chart'),
                    t._UZ(1, 'td-chart-dataset', 0),
                    t.TgZ(2, 'td-chart-toolbox', 1),
                    t.YNc(3, F, 11, 2, 'ng-template', 2),
                    t.qZA(),
                    t.TgZ(4, 'td-chart-tooltip', 3),
                    t.YNc(5, E, 1, 1, 'ng-template', 4),
                    t.qZA(),
                    t._UZ(6, 'td-chart-series', 5),
                    t.qZA()),
                    2 & m &&
                      (t.Udp('height', 400, 'px'),
                      t.xp6(1),
                      t.Q6J(
                        'source',
                        t.kEZ(14, B, t.DdM(11, M), t.DdM(12, S), t.DdM(13, O))
                      ),
                      t.xp6(1),
                      t.Q6J('show', !0)('right', 30)('top', 10)(
                        'feature',
                        t.VKq(21, U, t.VKq(19, R, t.DdM(18, Q)))
                      ),
                      t.xp6(2),
                      t.Q6J('trigger', 'item')('textStyle', t.DdM(23, G))(
                        'backgroundColor',
                        '#ffffff'
                      ),
                      t.xp6(2),
                      t.Q6J('radius', t.DdM(24, V)));
                },
                dependencies: [n.sg, n.O5, C.L, Z.H, P.I, x.HN, x.dA, D.O, D.G],
                styles: ['[_nghost-%COMP%]{width:100%}'],
                changeDetection: 0,
              });
            }
            return o;
          })(),
          id: 'pie',
        });
      let N = (() => {
        class o {
          static ɵfac = function (m) {
            return new (m || o)();
          };
          static ɵmod = t.oAB({ type: o });
          static ɵinj = t.cJS({
            imports: [
              n.ez,
              h.LD,
              g.Ps,
              c.MX,
              v.XW,
              f.NF,
              s.Po,
              T.q,
              a.m,
              p.Bz.forChild(J),
            ],
          });
        }
        return o;
      })();
    },
    52514: (y, u, e) => {
      e.d(u, { Po: () => T });
      var n = e(96814),
        h = (e(13063), e(19212));
      let T = (() => {
        class c {
          static ɵfac = function (v) {
            return new (v || c)();
          };
          static ɵmod = h.oAB({ type: c });
          static ɵinj = h.cJS({ imports: [n.ez] });
        }
        return c;
      })();
    },
    13063: (y, u, e) => {
      e.d(u, { G: () => c, O: () => f });
      var n = e(19212),
        p = e(23421),
        h = e(96814);
      const g = ['toolboxContent'];
      function T(s, v) {}
      let c = (() => {
          class s {
            static ɵfac = function (a) {
              return new (a || s)();
            };
            static ɵdir = n.lG2({
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
            constructor(r, a, d) {
              (this._changeDetectorRef = r),
                (this._elementRef = a),
                (this._optionsService = d);
            }
            ngOnChanges() {
              this._setOptions();
            }
            ngOnDestroy() {
              this._removeOption();
            }
            _setOptions() {
              this._checkFormatterTemplate();
              const r = (0, p.t8)(
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
              this._optionsService.setOption('toolbox', r);
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
            static ɵfac = function (a) {
              return new (a || s)(n.Y36(n.sBO), n.Y36(n.SBq), n.Y36(p.ij));
            };
            static ɵcmp = n.Xpm({
              type: s,
              selectors: [['td-chart-toolbox']],
              contentQueries: function (a, d, t) {
                if ((1 & a && n.Suo(t, c, 5, n.Rgc), 2 & a)) {
                  let C;
                  n.iGM((C = n.CRH())) && (d.formatterTemplate = C.first);
                }
              },
              viewQuery: function (a, d) {
                if ((1 & a && n.Gf(g, 7), 2 & a)) {
                  let t;
                  n.iGM((t = n.CRH())) && (d.fullTemplate = t.first);
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
              template: function (a, d) {
                1 & a && n.YNc(0, T, 0, 0, 'ng-template', 0, 1, n.W1O),
                  2 & a && n.Q6J('ngTemplateOutlet', d.formatterTemplate);
              },
              dependencies: [h.tP],
              encapsulation: 2,
              changeDetection: 0,
            });
          }
          return s;
        })();
    },
    39419: (y, u, e) => {
      e.d(u, { A0: () => c });
      var n = e(96814),
        p = e(30617),
        g = (e(21266), e(19212));
      let c = (() => {
        class f {
          static ɵfac = function (r) {
            return new (r || f)();
          };
          static ɵmod = g.oAB({ type: f });
          static ɵinj = g.cJS({ imports: [n.ez, p.Ps] });
        }
        return f;
      })();
    },
  },
]);
