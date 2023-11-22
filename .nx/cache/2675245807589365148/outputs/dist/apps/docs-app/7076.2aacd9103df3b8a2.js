'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [7076],
  {
    77076: (C, h, o) => {
      o.r(h), o.d(h, { PieDemoModule: () => G });
      var n = o(96814),
        p = o(98525),
        d = o(30617),
        T = o(23421),
        f = o(57337),
        l = o(52514),
        v = o(96535),
        s = o(99902),
        g = o(52787),
        t = o(19212),
        c = o(31791),
        m = o(76856),
        u = o(1691),
        D = o(64335),
        x = o(33822),
        y = o(13063),
        Z = o(62730);
      function _(e, r) {
        if ((1 & e && (t.TgZ(0, 'td', 11), t._uU(1), t.qZA()), 2 & e)) {
          const i = r.ngIf,
            a = t.oxw().index;
          t.xp6(1), t.hij(' ', i[a], ' ');
        }
      }
      function M(e, r) {
        if ((1 & e && (t.TgZ(0, 'td', 11), t._uU(1), t.qZA()), 2 & e)) {
          const i = r.ngIf,
            a = t.oxw().index;
          t.xp6(1), t.hij(' ', i[a], ' ');
        }
      }
      const O = () => [823, 235, 1042, 988],
        S = () => [95.8, 81.4, 91.2, 76.9];
      function B(e, r) {
        if (
          (1 & e &&
            (t.ynx(0),
            t.TgZ(1, 'tr', 10)(2, 'td', 11),
            t._uU(3),
            t.qZA(),
            t.YNc(4, _, 2, 1, 'td', 12)(5, M, 2, 1, 'td', 12),
            t.qZA(),
            t.BQk()),
          2 & e)
        ) {
          const i = r.$implicit;
          t.xp6(3),
            t.Oqu(i),
            t.xp6(1),
            t.Q6J('ngIf', t.DdM(3, O)),
            t.xp6(1),
            t.Q6J('ngIf', t.DdM(4, S));
        }
      }
      const b = () => ['Latte', 'Tea', 'Cocoa', 'Milk'];
      function P(e, r) {
        1 & e &&
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
          t.YNc(10, B, 6, 5, 'ng-container', 9),
          t.qZA()()),
          2 & e && (t.xp6(10), t.Q6J('ngForOf', t.DdM(1, b)));
      }
      function w(e, r) {
        if (
          (1 & e &&
            (t.ynx(0),
            t.TgZ(1, 'div', 14)(2, 'span', 15),
            t._uU(3),
            t.qZA()(),
            t.BQk()),
          2 & e)
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
      function A(e, r) {
        1 & e && t.YNc(0, w, 4, 2, 'ng-container', 13),
          2 & e && t.Q6J('ngIf', r.$implicit);
      }
      const F = (e, r, i) => ({ product: e, count: r, score: i }),
        z = () => ['Data View', 'Turn Off', 'Refresh'],
        E = (e) => ({ readOnly: !0, title: 'View Data', lang: e }),
        Q = (e) => ({ dataView: e }),
        R = () => ({ color: '#818181' }),
        U = () => [0, '75%'];
      let I = (() => {
        class e {
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
                  { name: 'Latte', value: 80, itemStyle: { color: '#26B99A' } },
                  { name: 'Tea', value: 50, itemStyle: { color: '#34495E' } },
                  { name: 'Cocoa', value: 60, itemStyle: { color: '#BDC3C7' } },
                  {
                    name: 'Frappe',
                    value: 122,
                    itemStyle: { color: '#3498DB' },
                  },
                  { name: 'Milk', value: 110, itemStyle: { color: '#9B59B6' } },
                  { name: 'Mocha', value: 20, itemStyle: { color: '#8abb6f' } },
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
          static ɵfac = function (a) {
            return new (a || e)(t.Y36(m.n));
          };
          static ɵcmp = t.Xpm({
            type: e,
            selectors: [['pie-demo-basic']],
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
            template: function (a, N) {
              1 & a &&
                (t.TgZ(0, 'td-chart'),
                t._UZ(1, 'td-chart-dataset', 0),
                t.TgZ(2, 'td-chart-toolbox', 1),
                t.YNc(3, P, 11, 2, 'ng-template', 2),
                t.qZA(),
                t.TgZ(4, 'td-chart-tooltip', 3),
                t.YNc(5, A, 1, 1, 'ng-template', 4),
                t.qZA(),
                t._UZ(6, 'td-chart-series', 5),
                t.qZA()),
                2 & a &&
                  (t.Udp('height', 400, 'px'),
                  t.xp6(1),
                  t.Q6J(
                    'source',
                    t.kEZ(14, F, t.DdM(11, b), t.DdM(12, O), t.DdM(13, S))
                  ),
                  t.xp6(1),
                  t.Q6J('show', !0)('right', 30)('top', 10)(
                    'feature',
                    t.VKq(21, Q, t.VKq(19, E, t.DdM(18, z)))
                  ),
                  t.xp6(2),
                  t.Q6J('trigger', 'item')('textStyle', t.DdM(23, R))(
                    'backgroundColor',
                    '#ffffff'
                  ),
                  t.xp6(2),
                  t.Q6J('radius', t.DdM(24, U)));
            },
            dependencies: [u.L, D.H, x.HN, x.dA, y.O, y.G, Z.I, n.sg, n.O5],
            changeDetection: 0,
          });
        }
        return e;
      })();
      const J = [
        {
          path: '',
          component: (() => {
            class e {
              static ɵfac = function (a) {
                return new (a || e)();
              };
              static ɵcmp = t.Xpm({
                type: e,
                selectors: [['pie-demo']],
                decls: 2,
                vars: 2,
                consts: [[3, 'demoId', 'demoTitle']],
                template: function (a, N) {
                  1 & a &&
                    (t.TgZ(0, 'demo-component', 0),
                    t._UZ(1, 'pie-demo-basic'),
                    t.qZA()),
                    2 & a &&
                      t.Q6J('demoId', 'pie-demo-basic')('demoTitle', 'Basic');
                },
                dependencies: [c.z, I],
              });
            }
            return e;
          })(),
        },
      ];
      let V = (() => {
          class e {
            static ɵfac = function (a) {
              return new (a || e)();
            };
            static ɵmod = t.oAB({ type: e });
            static ɵinj = t.cJS({ imports: [g.Bz.forChild(J), g.Bz] });
          }
          return e;
        })(),
        G = (() => {
          class e {
            static ɵfac = function (a) {
              return new (a || e)();
            };
            static ɵmod = t.oAB({ type: e });
            static ɵinj = t.cJS({
              imports: [v.l, V, T.MX, f.NF, l.Po, s.XW, n.ez, p.LD, d.Ps],
            });
          }
          return e;
        })();
    },
    52514: (C, h, o) => {
      o.d(h, { Po: () => f });
      var n = o(96814),
        d = (o(13063), o(19212));
      let f = (() => {
        class l {
          static ɵfac = function (g) {
            return new (g || l)();
          };
          static ɵmod = d.oAB({ type: l });
          static ɵinj = d.cJS({ imports: [n.ez] });
        }
        return l;
      })();
    },
    13063: (C, h, o) => {
      o.d(h, { G: () => l, O: () => v });
      var n = o(19212),
        p = o(23421),
        d = o(96814);
      const T = ['toolboxContent'];
      function f(s, g) {}
      let l = (() => {
          class s {
            static ɵfac = function (c) {
              return new (c || s)();
            };
            static ɵdir = n.lG2({
              type: s,
              selectors: [['ng-template', 'tdViewDataFormatter', '']],
            });
          }
          return s;
        })(),
        v = (() => {
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
            constructor(t, c, m) {
              (this._changeDetectorRef = t),
                (this._elementRef = c),
                (this._optionsService = m);
            }
            ngOnChanges() {
              this._setOptions();
            }
            ngOnDestroy() {
              this._removeOption();
            }
            _setOptions() {
              this._checkFormatterTemplate();
              const t = (0, p.t8)(
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
              this._optionsService.setOption('toolbox', t);
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
              return new (c || s)(n.Y36(n.sBO), n.Y36(n.SBq), n.Y36(p.ij));
            };
            static ɵcmp = n.Xpm({
              type: s,
              selectors: [['td-chart-toolbox']],
              contentQueries: function (c, m, u) {
                if ((1 & c && n.Suo(u, l, 5, n.Rgc), 2 & c)) {
                  let D;
                  n.iGM((D = n.CRH())) && (m.formatterTemplate = D.first);
                }
              },
              viewQuery: function (c, m) {
                if ((1 & c && n.Gf(T, 7), 2 & c)) {
                  let u;
                  n.iGM((u = n.CRH())) && (m.fullTemplate = u.first);
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
              template: function (c, m) {
                1 & c && n.YNc(0, f, 0, 0, 'ng-template', 0, 1, n.W1O),
                  2 & c && n.Q6J('ngTemplateOutlet', m.formatterTemplate);
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
