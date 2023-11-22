'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [5687],
  {
    46860: (Z, d, a) => {
      a.r(d), a.d(d, { SankeyModule: () => R });
      var l = a(96814),
        g = a(52787),
        m = a(98525),
        i = a(30617),
        f = a(22497),
        p = a(23421),
        r = a(57337),
        x = a(86709),
        y = a(63048),
        u = a(41257),
        A = a(15861),
        S = a(76856),
        e = a(19212),
        M = a(64170),
        D = a(23680),
        J = a(1691),
        N = a(84180),
        T = a(33822);
      function Q(n, c) {
        if ((1 & n && (e.TgZ(0, 'mat-option', 8), e._uU(1), e.qZA()), 2 & n)) {
          const t = c.$implicit;
          e.Q6J('value', t), e.xp6(1), e.hij(' ', t, ' ');
        }
      }
      function F(n, c) {
        if (
          (1 & n &&
            (e.ynx(0),
            e.TgZ(1, 'mat-icon'),
            e._uU(2, 'device_hub'),
            e.qZA(),
            e.TgZ(3, 'span', 10),
            e._uU(4),
            e.qZA(),
            e.BQk()),
          2 & n)
        ) {
          const t = e.oxw(2).$implicit;
          e.xp6(1),
            e.Udp('color', t.color),
            e.xp6(3),
            e.hij(' ', t.data.name, ' ');
        }
      }
      function U(n, c) {
        if (
          (1 & n &&
            (e.ynx(0),
            e.TgZ(1, 'span', 10),
            e._uU(2),
            e.qZA(),
            e.TgZ(3, 'mat-icon'),
            e._uU(4, 'arrow_forward'),
            e.qZA(),
            e.TgZ(5, 'span', 11),
            e._uU(6),
            e.qZA(),
            e.BQk()),
          2 & n)
        ) {
          const t = e.oxw(2).$implicit;
          e.xp6(2),
            e.hij(' ', t.data.source, ' '),
            e.xp6(4),
            e.AsE('', t.data.target, ' : ', t.value, '');
        }
      }
      function j(n, c) {
        if (
          (1 & n &&
            (e.ynx(0),
            e.TgZ(1, 'div', 0),
            e.YNc(2, F, 5, 3, 'ng-container', 9)(3, U, 7, 3, 'ng-container', 9),
            e.qZA(),
            e.BQk()),
          2 & n)
        ) {
          const t = e.oxw().$implicit;
          e.xp6(2),
            e.Q6J('ngIf', 'node' === t.dataType),
            e.xp6(1),
            e.Q6J('ngIf', 'edge' === t.dataType);
        }
      }
      function O(n, c) {
        1 & n && e.YNc(0, j, 4, 2, 'ng-container', 9),
          2 & n && e.Q6J('ngIf', c.$implicit);
      }
      const k = () => ({ name: 'a' }),
        B = () => ({ name: 'b' }),
        E = () => ({ name: 'a1' }),
        I = () => ({ name: 'a2' }),
        Y = () => ({ name: 'b1' }),
        $ = () => ({ name: 'c' }),
        C = (n, c, t, o, s, h) => [n, c, t, o, s, h],
        b = () => ({ source: 'a', target: 'a1', value: 5 }),
        H = () => ({ source: 'a', target: 'a2', value: 3 }),
        z = () => ({ source: 'b', target: 'b1', value: 8 }),
        L = () => ({ source: 'a', target: 'b1', value: 3 }),
        P = () => ({ source: 'b1', target: 'a1', value: 1 }),
        X = () => ({ source: 'b1', target: 'c', value: 2 }),
        K = (0, y.uw)({
          overviewDemoComponent: (() => {
            class n {
              _cdr;
              themeSelector;
              themes = (0, p.RC)();
              selectedTheme;
              config = {
                xAxis: { show: !1 },
                yAxis: { show: !1 },
                grid: { borderColor: 'transparent' },
                color: [
                  '#67001f',
                  '#b2182b',
                  '#d6604d',
                  '#f4a582',
                  '#fddbc7',
                  '#d1e5f0',
                  '#92c5de',
                  '#4393c3',
                  '#2166ac',
                  '#053061',
                ],
                tooltip: { trigger: 'item', triggerOn: 'mousemove' },
                animation: !1,
                series: [
                  {
                    type: 'sankey',
                    right: 40,
                    left: 40,
                    focusNodeAdjacency: 'allEdges',
                    data: [
                      { name: 'a' },
                      { name: 'b' },
                      { name: 'a1' },
                      { name: 'b1' },
                      { name: 'c' },
                      { name: 'e' },
                    ],
                    links: [
                      { source: 'a', target: 'a1', value: 5 },
                      { source: 'e', target: 'b', value: 3 },
                      { source: 'a', target: 'b1', value: 3 },
                      { source: 'b1', target: 'a1', value: 1 },
                      { source: 'b1', target: 'c', value: 2 },
                      { source: 'b', target: 'c', value: 1 },
                    ],
                    label: { position: 'top' },
                    lineStyle: { normal: { color: 'source', curveness: 0.5 } },
                  },
                ],
              };
              constructor(t, o) {
                (this._cdr = t), (this.themeSelector = o);
              }
              ngOnInit() {
                var t = this;
                return (0, A.Z)(function* () {
                  (t.selectedTheme = t.themeSelector.selected),
                    t._cdr.markForCheck();
                })();
              }
              selectChartTheme(t) {
                this.themeSelector.select(t);
              }
              static ɵfac = function (o) {
                return new (o || n)(e.Y36(e.sBO), e.Y36(S.n));
              };
              static ɵcmp = e.Xpm({
                type: n,
                selectors: [['types-sankey']],
                decls: 11,
                vars: 39,
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
                  [
                    'td-sankey',
                    '',
                    3,
                    'focusNodeAdjacency',
                    'right',
                    'left',
                    'data',
                    'links',
                  ],
                  [3, 'trigger'],
                  ['tdTooltipFormatter', ''],
                  [3, 'value'],
                  [4, 'ngIf'],
                  [1, 'mat-caption', 'pad-left-sm'],
                  [1, 'mat-caption'],
                ],
                template: function (o, s) {
                  1 & o &&
                    (e.TgZ(0, 'div', 0)(1, 'div', 1),
                    e._uU(2, ' Chart Theme: '),
                    e.qZA(),
                    e.TgZ(3, 'mat-form-field')(4, 'mat-select', 2),
                    e.NdJ('valueChange', function (v) {
                      return (s.selectedTheme = v);
                    })('valueChange', function (v) {
                      return s.selectChartTheme(v);
                    }),
                    e.YNc(5, Q, 2, 2, 'mat-option', 3),
                    e.qZA()()(),
                    e.TgZ(6, 'td-chart', 4),
                    e.ALo(7, 'async'),
                    e.TgZ(8, 'td-chart-series', 5)(9, 'td-chart-tooltip', 6),
                    e.YNc(10, O, 1, 1, 'ng-template', 7),
                    e.qZA()()()),
                    2 & o &&
                      (e.xp6(4),
                      e.Q6J('value', s.selectedTheme),
                      e.xp6(1),
                      e.Q6J('ngForOf', s.themes),
                      e.xp6(1),
                      e.Udp('height', 300, 'px'),
                      e.Q6J(
                        'themeName',
                        e.lcZ(7, 11, s.themeSelector.selected$)
                      ),
                      e.xp6(2),
                      e.Q6J('focusNodeAdjacency', 'allEdges')('right', 40)(
                        'left',
                        40
                      )(
                        'data',
                        e.HTZ(
                          19,
                          C,
                          e.DdM(13, k),
                          e.DdM(14, B),
                          e.DdM(15, E),
                          e.DdM(16, I),
                          e.DdM(17, Y),
                          e.DdM(18, $)
                        )
                      )(
                        'links',
                        e.HTZ(
                          32,
                          C,
                          e.DdM(26, b),
                          e.DdM(27, H),
                          e.DdM(28, z),
                          e.DdM(29, L),
                          e.DdM(30, P),
                          e.DdM(31, X)
                        )
                      ),
                      e.xp6(1),
                      e.Q6J('trigger', 'item'));
                },
                dependencies: [
                  l.sg,
                  l.O5,
                  M.KE,
                  m.gD,
                  D.ey,
                  i.Hw,
                  J.L,
                  N.x,
                  T.HN,
                  T.dA,
                  l.Ov,
                ],
                styles: ['[_nghost-%COMP%]{width:100%}'],
                changeDetection: 0,
              });
            }
            return n;
          })(),
          id: 'sankey',
        });
      let R = (() => {
        class n {
          static ɵfac = function (o) {
            return new (o || n)();
          };
          static ɵmod = e.oAB({ type: n });
          static ɵinj = e.cJS({
            imports: [
              l.ez,
              m.LD,
              i.Ps,
              p.MX,
              x.Xi,
              r.NF,
              f.q,
              u.m,
              g.Bz.forChild(K),
            ],
          });
        }
        return n;
      })();
    },
    39419: (Z, d, a) => {
      a.d(d, { A0: () => p });
      var l = a(96814),
        g = a(30617),
        i = (a(21266), a(19212));
      let p = (() => {
        class r {
          static ɵfac = function (u) {
            return new (u || r)();
          };
          static ɵmod = i.oAB({ type: r });
          static ɵinj = i.cJS({ imports: [l.ez, g.Ps] });
        }
        return r;
      })();
    },
  },
]);
