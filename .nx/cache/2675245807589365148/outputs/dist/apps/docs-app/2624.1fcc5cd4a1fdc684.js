'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [2624],
  {
    32624: (B, g, n) => {
      n.r(g), n.d(g, { TreemapDemoModule: () => Ie });
      var c = n(96814),
        h = n(98525),
        p = n(30617),
        v = n(23421),
        f = n(57337),
        r = n(52514),
        T = n(60874),
        i = n(52787),
        e = n(19212),
        u = n(31791),
        s = n(15861),
        d = n(76856),
        A = n(1691),
        P = n(33822),
        I = n(34303),
        M = n(64170),
        O = n(23680);
      function k(t, l) {
        if ((1 & t && (e.TgZ(0, 'mat-option', 8), e._uU(1), e.qZA()), 2 & t)) {
          const o = l.$implicit;
          e.Q6J('value', o), e.xp6(1), e.hij(' ', o, ' ');
        }
      }
      function V(t, l) {
        if (
          (1 & t &&
            (e.ynx(0),
            e.TgZ(1, 'div', 0)(2, 'mat-icon', 10)(3, 'span', 11),
            e._uU(4, 'info'),
            e.qZA()(),
            e.TgZ(5, 'span'),
            e._uU(6),
            e.qZA()(),
            e.BQk()),
          2 & t)
        ) {
          const o = e.oxw().$implicit;
          e.xp6(6), e.Oqu(o.name);
        }
      }
      function x(t, l) {
        1 & t && e.YNc(0, V, 7, 1, 'ng-container', 9),
          2 & t && e.Q6J('ngIf', l.$implicit);
      }
      const L = () => ({
          value: 40,
          name: 'Accessibility',
          path: 'Accessibility',
        }),
        F = () => ({
          value: 12,
          name: 'DefaultAccessPlugin.bundle',
          path: 'Accounts/Access/DefaultAccessPlugin.bundle',
        }),
        K = () => ({
          value: 28,
          name: 'FacebookAccessPlugin.bundle',
          path: 'Accounts/Access/FacebookAccessPlugin.bundle',
        }),
        W = () => ({
          value: 20,
          name: 'LinkedInAccessPlugin.bundle',
          path: 'Accounts/Access/LinkedInAccessPlugin.bundle',
        }),
        E = () => ({
          value: 16,
          name: 'TencentWeiboAccessPlugin.bundle',
          path: 'Accounts/Access/TencentWeiboAccessPlugin.bundle',
        }),
        Z = (t, l, o, a) => [t, l, o, a],
        N = (t) => ({
          value: 76,
          name: 'Access',
          path: 'Accounts/Access',
          children: t,
        }),
        w = () => ({
          value: 24,
          name: 'FacebookAuthenticationPlugin.bundle',
          path: 'Accounts/Authentication/FacebookAuthenticationPlugin.bundle',
        }),
        R = () => ({
          value: 16,
          name: 'LinkedInAuthenticationPlugin.bundle',
          path: 'Accounts/Authentication/LinkedInAuthenticationPlugin.bundle',
        }),
        G = () => ({
          value: 20,
          name: 'TencentWeiboAuthenticationPlugin.bundle',
          path: 'Accounts/Authentication/TencentWeiboAuthenticationPlugin.bundle',
        }),
        Y = () => ({
          value: 16,
          name: 'TwitterAuthenticationPlugin.bundle',
          path: 'Accounts/Authentication/TwitterAuthenticationPlugin.bundle',
        }),
        j = () => ({
          value: 16,
          name: 'WeiboAuthenticationPlugin.bundle',
          path: 'Accounts/Authentication/WeiboAuthenticationPlugin.bundle',
        }),
        _ = (t, l, o, a, m) => [t, l, o, a, m],
        H = (t) => ({
          value: 92,
          name: 'Authentication',
          path: 'Accounts/Authentication',
          children: t,
        }),
        $ = () => ({
          value: 12,
          name: 'SPAAccountsNotificationPlugin.bundle',
          path: 'Accounts/Notification/SPAAccountsNotificationPlugin.bundle',
        }),
        b = (t) => [t],
        ee = (t) => ({
          value: 12,
          name: 'Notification',
          path: 'Accounts/Notification',
          children: t,
        }),
        D = (t, l, o) => [t, l, o],
        te = (t) => ({
          value: 180,
          name: 'Accounts',
          path: 'Accounts',
          children: t,
        }),
        oe = () => ({
          value: 744,
          name: 'Contents',
          path: 'AddressBook Plug-Ins/CardDAVPlugin.sourcebundle/Contents',
        }),
        ce = (t) => ({
          value: 744,
          name: 'CardDAVPlugin.sourcebundle',
          path: 'AddressBook Plug-Ins/CardDAVPlugin.sourcebundle',
          children: t,
        }),
        se = () => ({
          value: 28,
          name: 'Contents',
          path: 'AddressBook Plug-Ins/DirectoryServices.sourcebundle/Contents',
        }),
        le = (t) => ({
          value: 28,
          name: 'DirectoryServices.sourcebundle',
          path: 'AddressBook Plug-Ins/DirectoryServices.sourcebundle',
          children: t,
        }),
        re = () => ({
          value: 680,
          name: 'Contents',
          path: 'AddressBook Plug-Ins/Exchange.sourcebundle/Contents',
        }),
        de = (t) => ({
          value: 680,
          name: 'Exchange.sourcebundle',
          path: 'AddressBook Plug-Ins/Exchange.sourcebundle',
          children: t,
        }),
        he = () => ({
          value: 432,
          name: 'Contents',
          path: 'AddressBook Plug-Ins/LDAP.sourcebundle/Contents',
        }),
        me = (t) => ({
          value: 432,
          name: 'LDAP.sourcebundle',
          path: 'AddressBook Plug-Ins/LDAP.sourcebundle',
          children: t,
        }),
        ge = () => ({
          value: 20,
          name: 'Contents',
          path: 'AddressBook Plug-Ins/LocalSource.sourcebundle/Contents',
        }),
        Ae = (t) => ({
          value: 20,
          name: 'LocalSource.sourcebundle',
          path: 'AddressBook Plug-Ins/LocalSource.sourcebundle',
          children: t,
        }),
        be = (t) => ({
          value: 1904,
          name: 'AddressBook Plug-Ins',
          path: 'AddressBook Plug-Ins',
          children: t,
        }),
        ve = () => ({ show: !0, formatter: '{b}' }),
        fe = () => ({ borderWidth: 0, gapWidth: 5 }),
        C = (t) => ({ normal: t }),
        y = (t) => ({ itemStyle: t }),
        Pe = () => ({ gapWidth: 1 }),
        Te = () => [0.35, 0.5],
        De = () => ({ gapWidth: 1, borderColorSaturation: 0.6 }),
        Ce = (t, l) => ({ colorSaturation: t, itemStyle: l });
      let Se = (() => {
        class t {
          _cdr;
          themeSelector;
          themes = (0, v.RC)();
          selectedTheme;
          data = [
            { value: 40, name: 'Accessibility', path: 'Accessibility' },
            {
              value: 180,
              name: 'Accounts',
              path: 'Accounts',
              children: [
                {
                  value: 76,
                  name: 'Access',
                  path: 'Accounts/Access',
                  children: [
                    {
                      value: 12,
                      name: 'DefaultAccessPlugin.bundle',
                      path: 'Accounts/Access/DefaultAccessPlugin.bundle',
                    },
                    {
                      value: 28,
                      name: 'FacebookAccessPlugin.bundle',
                      path: 'Accounts/Access/FacebookAccessPlugin.bundle',
                    },
                    {
                      value: 20,
                      name: 'LinkedInAccessPlugin.bundle',
                      path: 'Accounts/Access/LinkedInAccessPlugin.bundle',
                    },
                    {
                      value: 16,
                      name: 'TencentWeiboAccessPlugin.bundle',
                      path: 'Accounts/Access/TencentWeiboAccessPlugin.bundle',
                    },
                  ],
                },
                {
                  value: 92,
                  name: 'Authentication',
                  path: 'Accounts/Authentication',
                  children: [
                    {
                      value: 24,
                      name: 'FacebookAuthenticationPlugin.bundle',
                      path: 'Accounts/Authentication/FacebookAuthenticationPlugin.bundle',
                    },
                    {
                      value: 16,
                      name: 'LinkedInAuthenticationPlugin.bundle',
                      path: 'Accounts/Authentication/LinkedInAuthenticationPlugin.bundle',
                    },
                    {
                      value: 20,
                      name: 'TencentWeiboAuthenticationPlugin.bundle',
                      path: 'Accounts/Authentication/TencentWeiboAuthenticationPlugin.bundle',
                    },
                    {
                      value: 16,
                      name: 'TwitterAuthenticationPlugin.bundle',
                      path: 'Accounts/Authentication/TwitterAuthenticationPlugin.bundle',
                    },
                    {
                      value: 16,
                      name: 'WeiboAuthenticationPlugin.bundle',
                      path: 'Accounts/Authentication/WeiboAuthenticationPlugin.bundle',
                    },
                  ],
                },
                {
                  value: 12,
                  name: 'Notification',
                  path: 'Accounts/Notification',
                  children: [
                    {
                      value: 12,
                      name: 'SPAAccountsNotificationPlugin.bundle',
                      path: 'Accounts/Notification/SPAAccountsNotificationPlugin.bundle',
                    },
                  ],
                },
              ],
            },
            {
              value: 1904,
              name: 'AddressBook Plug-Ins',
              path: 'AddressBook Plug-Ins',
              children: [
                {
                  value: 744,
                  name: 'CardDAVPlugin.sourcebundle',
                  path: 'AddressBook Plug-Ins/CardDAVPlugin.sourcebundle',
                  children: [
                    {
                      value: 744,
                      name: 'Contents',
                      path: 'AddressBook Plug-Ins/CardDAVPlugin.sourcebundle/Contents',
                    },
                  ],
                },
                {
                  value: 28,
                  name: 'DirectoryServices.sourcebundle',
                  path: 'AddressBook Plug-Ins/DirectoryServices.sourcebundle',
                  children: [
                    {
                      value: 28,
                      name: 'Contents',
                      path: 'AddressBook Plug-Ins/DirectoryServices.sourcebundle/Contents',
                    },
                  ],
                },
                {
                  value: 680,
                  name: 'Exchange.sourcebundle',
                  path: 'AddressBook Plug-Ins/Exchange.sourcebundle',
                  children: [
                    {
                      value: 680,
                      name: 'Contents',
                      path: 'AddressBook Plug-Ins/Exchange.sourcebundle/Contents',
                    },
                  ],
                },
                {
                  value: 432,
                  name: 'LDAP.sourcebundle',
                  path: 'AddressBook Plug-Ins/LDAP.sourcebundle',
                  children: [
                    {
                      value: 432,
                      name: 'Contents',
                      path: 'AddressBook Plug-Ins/LDAP.sourcebundle/Contents',
                    },
                  ],
                },
                {
                  value: 20,
                  name: 'LocalSource.sourcebundle',
                  path: 'AddressBook Plug-Ins/LocalSource.sourcebundle',
                  children: [
                    {
                      value: 20,
                      name: 'Contents',
                      path: 'AddressBook Plug-Ins/LocalSource.sourcebundle/Contents',
                    },
                  ],
                },
              ],
            },
          ];
          config = {
            grid: { borderColor: 'transparent' },
            xAxis: { show: !1 },
            yAxis: { show: !1 },
            series: [
              {
                type: 'treemap',
                data: this.data,
                top: '10%',
                left: '10%',
                bottom: '10%',
                right: '10%',
                itemStyle: { normal: { borderColor: '#fff' } },
                levels: [
                  { itemStyle: { normal: { borderWidth: 0, gapWidth: 5 } } },
                  { itemStyle: { normal: { gapWidth: 1 } } },
                  {
                    colorSaturation: [0.35, 0.5],
                    itemStyle: {
                      normal: { gapWidth: 1, borderColorSaturation: 0.6 },
                    },
                  },
                ],
                label: { show: !0, formatter: '{b}' },
              },
            ],
          };
          constructor(o, a) {
            (this._cdr = o), (this.themeSelector = a);
          }
          ngOnInit() {
            var o = this;
            return (0, s.Z)(function* () {
              (o.selectedTheme = o.themeSelector.selected),
                o._cdr.markForCheck();
            })();
          }
          selectChartTheme(o) {
            this.themeSelector.select(o);
          }
          static ɵfac = function (a) {
            return new (a || t)(e.Y36(e.sBO), e.Y36(d.n));
          };
          static ɵcmp = e.Xpm({
            type: t,
            selectors: [['treemap-demo-basic']],
            decls: 11,
            vars: 112,
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
              [
                'td-treemap',
                '',
                3,
                'top',
                'left',
                'bottom',
                'right',
                'data',
                'visibleMin',
                'label',
                'leafDepth',
                'levels',
              ],
              [3, 'value'],
              [4, 'ngIf'],
              [1, 'push-right-sm'],
              [1, 'tc-blue-300'],
            ],
            template: function (a, m) {
              1 & a &&
                (e.TgZ(0, 'div', 0)(1, 'div', 1),
                e._uU(2, ' Chart Theme: '),
                e.qZA(),
                e.TgZ(3, 'mat-form-field')(4, 'mat-select', 2),
                e.NdJ('valueChange', function (S) {
                  return (m.selectedTheme = S);
                })('valueChange', function (S) {
                  return m.selectChartTheme(S);
                }),
                e.YNc(5, k, 2, 2, 'mat-option', 3),
                e.qZA()()(),
                e.TgZ(6, 'td-chart', 4),
                e.ALo(7, 'async'),
                e.TgZ(8, 'td-chart-tooltip', 5),
                e.YNc(9, x, 1, 1, 'ng-template', 6),
                e.qZA(),
                e._UZ(10, 'td-chart-series', 7),
                e.qZA()),
                2 & a &&
                  (e.xp6(4),
                  e.Q6J('value', m.selectedTheme),
                  e.xp6(1),
                  e.Q6J('ngForOf', m.themes),
                  e.xp6(1),
                  e.Udp('height', 600, 'px'),
                  e.Q6J('themeName', e.lcZ(7, 15, m.themeSelector.selected$)),
                  e.xp6(2),
                  e.Q6J('trigger', 'item'),
                  e.xp6(2),
                  e.Q6J('top', '10%')('left', '10%')('bottom', '10%')(
                    'right',
                    '10%'
                  )(
                    'data',
                    e.kEZ(
                      86,
                      D,
                      e.DdM(17, L),
                      e.VKq(
                        51,
                        te,
                        e.kEZ(
                          47,
                          D,
                          e.VKq(
                            27,
                            N,
                            e.l5B(
                              22,
                              Z,
                              e.DdM(18, F),
                              e.DdM(19, K),
                              e.DdM(20, W),
                              e.DdM(21, E)
                            )
                          ),
                          e.VKq(
                            40,
                            H,
                            e.qbA(
                              34,
                              _,
                              e.DdM(29, w),
                              e.DdM(30, R),
                              e.DdM(31, G),
                              e.DdM(32, Y),
                              e.DdM(33, j)
                            )
                          ),
                          e.VKq(45, ee, e.VKq(43, b, e.DdM(42, $)))
                        )
                      ),
                      e.VKq(
                        84,
                        be,
                        e.qbA(
                          78,
                          _,
                          e.VKq(56, ce, e.VKq(54, b, e.DdM(53, oe))),
                          e.VKq(61, le, e.VKq(59, b, e.DdM(58, se))),
                          e.VKq(66, de, e.VKq(64, b, e.DdM(63, re))),
                          e.VKq(71, me, e.VKq(69, b, e.DdM(68, he))),
                          e.VKq(76, Ae, e.VKq(74, b, e.DdM(73, ge)))
                        )
                      )
                    )
                  )('visibleMin', 300)('label', e.DdM(90, ve))('leafDepth', 2)(
                    'levels',
                    e.kEZ(
                      108,
                      D,
                      e.VKq(94, y, e.VKq(92, C, e.DdM(91, fe))),
                      e.VKq(99, y, e.VKq(97, C, e.DdM(96, Pe))),
                      e.WLB(
                        105,
                        Ce,
                        e.DdM(101, Te),
                        e.VKq(103, C, e.DdM(102, De))
                      )
                    )
                  ));
            },
            dependencies: [
              A.L,
              P.HN,
              P.dA,
              I.a,
              c.sg,
              c.O5,
              M.KE,
              h.gD,
              O.ey,
              p.Hw,
              c.Ov,
            ],
            changeDetection: 0,
          });
        }
        return t;
      })();
      const Be = [
        {
          path: '',
          component: (() => {
            class t {
              static ɵfac = function (a) {
                return new (a || t)();
              };
              static ɵcmp = e.Xpm({
                type: t,
                selectors: [['treemap-demo']],
                decls: 2,
                vars: 2,
                consts: [[3, 'demoId', 'demoTitle']],
                template: function (a, m) {
                  1 & a &&
                    (e.TgZ(0, 'demo-component', 0),
                    e._UZ(1, 'treemap-demo-basic'),
                    e.qZA()),
                    2 & a &&
                      e.Q6J('demoId', 'treemap-demo-basic')(
                        'demoTitle',
                        'Basic'
                      );
                },
                dependencies: [u.z, Se],
              });
            }
            return t;
          })(),
        },
      ];
      let _e = (() => {
        class t {
          static ɵfac = function (a) {
            return new (a || t)();
          };
          static ɵmod = e.oAB({ type: t });
          static ɵinj = e.cJS({ imports: [i.Bz.forChild(Be), i.Bz] });
        }
        return t;
      })();
      var ye = n(96535);
      let Ie = (() => {
        class t {
          static ɵfac = function (a) {
            return new (a || t)();
          };
          static ɵmod = e.oAB({ type: t });
          static ɵinj = e.cJS({
            imports: [ye.l, _e, v.MX, f.NF, r.Po, T.Vk, c.ez, h.LD, p.Ps],
          });
        }
        return t;
      })();
    },
    52514: (B, g, n) => {
      n.d(g, { Po: () => f });
      var c = n(96814),
        p = (n(13063), n(19212));
      let f = (() => {
        class r {
          static ɵfac = function (e) {
            return new (e || r)();
          };
          static ɵmod = p.oAB({ type: r });
          static ɵinj = p.cJS({ imports: [c.ez] });
        }
        return r;
      })();
    },
    13063: (B, g, n) => {
      n.d(g, { G: () => r, O: () => T });
      var c = n(19212),
        h = n(23421),
        p = n(96814);
      const v = ['toolboxContent'];
      function f(i, e) {}
      let r = (() => {
          class i {
            static ɵfac = function (s) {
              return new (s || i)();
            };
            static ɵdir = c.lG2({
              type: i,
              selectors: [['ng-template', 'tdViewDataFormatter', '']],
            });
          }
          return i;
        })(),
        T = (() => {
          class i {
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
            constructor(u, s, d) {
              (this._changeDetectorRef = u),
                (this._elementRef = s),
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
              const u = (0, h.t8)(
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
              this._optionsService.setOption('toolbox', u);
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
            static ɵfac = function (s) {
              return new (s || i)(c.Y36(c.sBO), c.Y36(c.SBq), c.Y36(h.ij));
            };
            static ɵcmp = c.Xpm({
              type: i,
              selectors: [['td-chart-toolbox']],
              contentQueries: function (s, d, A) {
                if ((1 & s && c.Suo(A, r, 5, c.Rgc), 2 & s)) {
                  let P;
                  c.iGM((P = c.CRH())) && (d.formatterTemplate = P.first);
                }
              },
              viewQuery: function (s, d) {
                if ((1 & s && c.Gf(v, 7), 2 & s)) {
                  let A;
                  c.iGM((A = c.CRH())) && (d.fullTemplate = A.first);
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
              features: [c.TTD],
              decls: 2,
              vars: 1,
              consts: [
                [3, 'ngTemplateOutlet'],
                ['toolboxContent', ''],
              ],
              template: function (s, d) {
                1 & s && c.YNc(0, f, 0, 0, 'ng-template', 0, 1, c.W1O),
                  2 & s && c.Q6J('ngTemplateOutlet', d.formatterTemplate);
              },
              dependencies: [p.tP],
              encapsulation: 2,
              changeDetection: 0,
            });
          }
          return i;
        })();
    },
  },
]);
