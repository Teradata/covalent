'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [6889],
  {
    81047: (v, c, e) => {
      e.r(c), e.d(c, { DocsModule: () => D });
      var p = e(32651),
        d = e(96814),
        h = e(41257),
        r = e(32296),
        m = e(59038),
        l = e(30617),
        i = e(95195),
        U = e(81274),
        A = e(6311),
        g = e(96942),
        S = e(72297),
        b = e(78721),
        y = e(52787),
        I = e(22497),
        Z = e(78955),
        u = e(75068),
        t = e(19212),
        f = e(26385);
      let C = (() => {
          class o {
            routeAnimation = !0;
            classAnimation = !0;
            static ɵfac = function (a) {
              return new (a || o)();
            };
            static ɵcmp = t.Xpm({
              type: o,
              selectors: [['docs-angular-material']],
              hostVars: 3,
              hostBindings: function (a, n) {
                2 & a &&
                  (t.d8E('@routeAnimation', n.routeAnimation),
                  t.ekj('td-route-animation', n.classAnimation));
              },
              decls: 53,
              vars: 0,
              consts: [
                [1, 'push-bottom-xl'],
                [1, 'push-bottom-sm', 'mat-h1'],
                [1, 'tc-td-secondary', 'push-bottom-md'],
                [
                  'mat-button',
                  '',
                  'color',
                  'accent',
                  'target',
                  '_blank',
                  'href',
                  'https://material.angular.io/components',
                  1,
                  'text-upper',
                ],
                [
                  'mat-button',
                  '',
                  'target',
                  '_blank',
                  'href',
                  'https://github.com/angular/material2',
                  1,
                  'text-upper',
                ],
                [1, 'push-bottom-xxl'],
                [
                  'mat-list-item',
                  '',
                  'href',
                  'https://medium.com/@kyleledbetter/why-we-re-doubling-down-on-material-design-for-our-enterprise-web-apps-ce7d36d498db',
                  'target',
                  '_blank',
                ],
                ['matListItemIcon', ''],
                ['matListItemLine', ''],
                [
                  'mat-list-item',
                  '',
                  'href',
                  'https://material.angular.io/',
                  'target',
                  '_blank',
                ],
                [
                  'mat-list-item',
                  '',
                  'href',
                  'https://github.com/angular/material2#available-features',
                  'target',
                  '_blank',
                ],
              ],
              template: function (a, n) {
                1 & a &&
                  (t.TgZ(0, 'section', 0)(1, 'h1', 1),
                  t._uU(2, 'Angular Material'),
                  t.qZA(),
                  t.TgZ(3, 'p', 2),
                  t._uU(4, 'Material Design components'),
                  t.qZA()(),
                  t.TgZ(5, 'section')(6, 'h3'),
                  t._uU(7, 'Core Components'),
                  t.qZA(),
                  t.TgZ(8, 'p'),
                  t._uU(
                    9,
                    ' The UI Platform is built on top of @angular/material components which are the core of Covalent. '
                  ),
                  t.qZA(),
                  t.TgZ(10, 'h3'),
                  t._uU(11, 'New & Custom Components'),
                  t.qZA(),
                  t.TgZ(12, 'p'),
                  t._uU(
                    13,
                    ' With the UI Platform and your app usage, we suggest to follow the official material spec as closely as possible for these reasons: '
                  ),
                  t.qZA(),
                  t.TgZ(14, 'ul')(15, 'li'),
                  t._uU(16, 'So our products remain consistent'),
                  t.qZA(),
                  t.TgZ(17, 'li'),
                  t._uU(
                    18,
                    'To be able to use public material design resources'
                  ),
                  t.qZA(),
                  t.TgZ(19, 'li'),
                  t._uU(20, 'To onboard new hires more easily'),
                  t.qZA(),
                  t.TgZ(21, 'li'),
                  t._uU(22, 'So devs can easily work on multiple products'),
                  t.qZA(),
                  t.TgZ(23, 'li'),
                  t._uU(24, 'To enable easy updates and pull down the latest'),
                  t.qZA()(),
                  t.TgZ(25, 'p'),
                  t._uU(
                    26,
                    " Obviously we'll need to extend and customize material, but when doing so try to submit to the main UI Platform repo and collaborate with others to ensure standards. "
                  ),
                  t.qZA(),
                  t.TgZ(27, 'a', 3),
                  t._uU(28, ' Components '),
                  t.qZA(),
                  t.TgZ(29, 'a', 4),
                  t._uU(30, 'Github Repo'),
                  t.qZA()(),
                  t.TgZ(31, 'mat-card', 5)(32, 'mat-card-header')(
                    33,
                    'mat-card-title'
                  ),
                  t._uU(34, 'Resources'),
                  t.qZA()(),
                  t.TgZ(35, 'mat-nav-list')(36, 'a', 6)(37, 'mat-icon', 7),
                  t._uU(38, 'launch'),
                  t.qZA(),
                  t.TgZ(39, 'span', 8),
                  t._uU(40, 'Why Angular Material?'),
                  t.qZA()(),
                  t._UZ(41, 'mat-divider'),
                  t.TgZ(42, 'a', 9)(43, 'mat-icon', 7),
                  t._uU(44, 'launch'),
                  t.qZA(),
                  t.TgZ(45, 'span', 8),
                  t._uU(46, 'Angular Material Docs Site'),
                  t.qZA()(),
                  t._UZ(47, 'mat-divider'),
                  t.TgZ(48, 'a', 10)(49, 'mat-icon', 7),
                  t._uU(50, 'launch'),
                  t.qZA(),
                  t.TgZ(51, 'span', 8),
                  t._uU(52, 'Angular Material Feature Status'),
                  t.qZA()()()());
              },
              dependencies: [
                r.zs,
                m.Hk,
                m.Tg,
                m.Yt,
                f.d,
                m.WW,
                l.Hw,
                i.a8,
                i.dk,
                i.n5,
              ],
              data: { animation: [u.kh] },
            });
          }
          return o;
        })(),
        M = (() => {
          class o {
            routeAnimation = !0;
            classAnimation = !0;
            static ɵfac = function (a) {
              return new (a || o)();
            };
            static ɵcmp = t.Xpm({
              type: o,
              selectors: [['utility-sass-mixins']],
              hostVars: 3,
              hostBindings: function (a, n) {
                2 & a &&
                  (t.d8E('@routeAnimation', n.routeAnimation),
                  t.ekj('td-route-animation', n.classAnimation));
              },
              decls: 1,
              vars: 0,
              consts: [['resourceUrl', 'docs/UTILITY_MIXINS.md']],
              template: function (a, n) {
                1 & a && t._UZ(0, 'td-readme-loader', 0);
              },
              dependencies: [Z.I],
              data: { animation: [u.kh] },
            });
          }
          return o;
        })();
      var T = e(67479);
      const w = y.Bz.forChild([
        {
          children: [
            { path: '', redirectTo: 'get-started', pathMatch: 'full' },
            {
              path: 'get-started',
              children: [
                { path: '', redirectTo: 'what-is-covalent', pathMatch: 'full' },
                {
                  path: 'overview',
                  component: Z.I,
                  data: { resourceUrl: 'docs/GETTING_STARTED.md' },
                },
                { path: 'angular', component: C },
                {
                  path: 'what-is-covalent',
                  component: Z.I,
                  data: { resourceUrl: 'docs/WHAT_IS_COVALENT.md' },
                },
              ],
            },
            {
              path: 'theming',
              children: [
                { path: '', redirectTo: 'icon-sets', pathMatch: 'full' },
                { path: 'sass-mixins', component: M },
                {
                  path: 'icon-sets',
                  component: (() => {
                    class o {
                      routeAnimation = !0;
                      classAnimation = !0;
                      iconsHtml = '\n  <mat-icon>home</mat-icon> \n  ';
                      svgIconsTypescript =
                        "\n  import { DomSanitizer } from '@angular/platform-browser'; \n  import { MatIconRegistry } from '@angular/material/icon';\n  ...\n  ...\n  constructor(private _iconRegistry: MatIconRegistry, private _domSanitizer:DomSanitizer) { \n    this._iconRegistry.addSvgIconInNamespace('assets', 'sun',\n    this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/sun.svg')); \n  } \n  ";
                      svgIconsHtml =
                        '\n  <mat-icon svgIcon="assets:sun"></mat-icon>\n  ';
                      static ɵfac = function (a) {
                        return new (a || o)();
                      };
                      static ɵcmp = t.Xpm({
                        type: o,
                        selectors: [['docs-icons']],
                        hostVars: 3,
                        hostBindings: function (a, n) {
                          2 & a &&
                            (t.d8E('@routeAnimation', n.routeAnimation),
                            t.ekj('td-route-animation', n.classAnimation));
                        },
                        decls: 32,
                        vars: 3,
                        consts: [
                          [1, 'push-bottom-xl'],
                          [1, 'push-bottom-sm', 'mat-h1'],
                          [1, 'tc-td-secondary', 'push-bottom-md'],
                          [1, 'push-bottom-xxl'],
                          [1, 'push-bottom-sm', 'mat-title'],
                          ['codeLang', 'html'],
                          [1, 'push-bottom-lg'],
                          ['codeLang', 'typescript'],
                          ['codeLang', 'html', 1, 'push-bottom-lg'],
                          [
                            'mat-button',
                            '',
                            'color',
                            'accent',
                            'target',
                            '_blank',
                            'href',
                            'https://material.io/icons/',
                            1,
                            'text-upper',
                          ],
                        ],
                        template: function (a, n) {
                          1 & a &&
                            (t.TgZ(0, 'section', 0)(1, 'h1', 1),
                            t._uU(2, 'Material Design Icons'),
                            t.qZA(),
                            t.TgZ(3, 'p', 2),
                            t._uU(4, 'Access 1000+ SVG or Font icons'),
                            t.qZA()(),
                            t.TgZ(5, 'section', 3)(6, 'h3', 4),
                            t._uU(7, 'Font Icons'),
                            t.qZA(),
                            t._UZ(8, 'mat-divider'),
                            t.TgZ(9, 'p'),
                            t._uU(
                              10,
                              'Font icons using ligatures are the default option and simple to use:'
                            ),
                            t.qZA(),
                            t.TgZ(11, 'td-highlight', 5),
                            t._uU(12),
                            t.qZA(),
                            t.TgZ(13, 'p', 6),
                            t._uU(14, ' which renders '),
                            t.TgZ(15, 'mat-icon'),
                            t._uU(16, 'home'),
                            t.qZA()(),
                            t.TgZ(17, 'h3', 4),
                            t._uU(18, 'SVG Icons (from Safe URLS)'),
                            t.qZA(),
                            t._UZ(19, 'mat-divider'),
                            t.TgZ(20, 'p'),
                            t._uU(
                              21,
                              ' SVG icons have to be sanitized before they can be used with [DomSanitizer] and then icons need to be registered in [MatIconRegistry] so it can be referred later on: '
                            ),
                            t.qZA(),
                            t.TgZ(22, 'p'),
                            t._uU(23, 'Typescript:'),
                            t.qZA(),
                            t.TgZ(24, 'td-highlight', 7),
                            t._uU(25),
                            t.qZA(),
                            t.TgZ(26, 'p'),
                            t._uU(27, 'HTML:'),
                            t.qZA(),
                            t.TgZ(28, 'td-highlight', 8),
                            t._uU(29),
                            t.qZA(),
                            t.TgZ(30, 'a', 9),
                            t._uU(31, 'Search Icons'),
                            t.qZA()()),
                            2 & a &&
                              (t.xp6(12),
                              t.hij(' ', n.iconsHtml, ' '),
                              t.xp6(13),
                              t.hij(' ', n.svgIconsTypescript, ' '),
                              t.xp6(4),
                              t.hij(' ', n.svgIconsHtml, ' '));
                        },
                        dependencies: [r.zs, f.d, l.Hw, T.S],
                        data: { animation: [u.kh] },
                      });
                    }
                    return o;
                  })(),
                },
                {
                  path: 'custom-theme',
                  component: (() => {
                    class o {
                      routeAnimation = !0;
                      classAnimation = !0;
                      themeScss =
                        "\n  @use '@angular/material' as mat;\n  @use '@covalent/core/theming/all-theme' as cov;\n  @use '@covalent/markdown/markdown-theme' as markdown;\n  @use '@covalent/highlight/highlight-theme' as highlight;\n  // Plus imports for other components in your app.\n  \n  // Define a custom typography config that overrides the font-family\n  // or any typography level.\n  $typography: mat.define-typography-config(\n    $font-family: 'Inter, monospace',\n    $headline: mat.define-typography-level(32px, 48px, 700)\n  );\n  \n  @include mat.core($typography); // $typography is an **optional** argument for the mat-core\n  \n  // Define the palettes for your theme using the Material Design palettes available in palette.scss\n  // (imported above). For each palette, you can optionally specify a default, lighter, and darker\n  // hue.\n  $primary: mat.define-palette($mat-blue, 700);\n  $accent:  mat.define-palette($mat-orange, 800, A100, A400);\n  \n  // The warn palette is optional (defaults to red).\n  $warn:    mat.define-palette($mat-red, 600);\n  \n  // Create the theme object (a Sass map containing all of the palettes).\n  $theme: mat.define-light-theme($primary, $accent, $warn);\n  \n  // Include theme styles for core and each component used in your app.\n  // Alternatively, you can import and @include the theme mixins for each component\n  // that you are using.\n  mat.angular-material-theme($theme);\n  cov.covalent-theme($theme, $typography); // $typography is an **optional** argument for the covalent-theme\n  markdown.covalent-markdown-theme($theme);\n  highlight.covalent-highlight-theme();\n  ";
                      static ɵfac = function (a) {
                        return new (a || o)();
                      };
                      static ɵcmp = t.Xpm({
                        type: o,
                        selectors: [['docs-theme']],
                        hostVars: 3,
                        hostBindings: function (a, n) {
                          2 & a &&
                            (t.d8E('@routeAnimation', n.routeAnimation),
                            t.ekj('td-route-animation', n.classAnimation));
                        },
                        decls: 21,
                        vars: 1,
                        consts: [
                          [1, 'push-bottom-xl'],
                          [1, 'push-bottom-sm', 'mat-h1'],
                          [1, 'tc-td-secondary', 'push-bottom-md'],
                          [1, 'push-bottom-xxl'],
                          [1, 'push-bottom-sm', 'mat-title'],
                          ['codeLang', 'scss'],
                          [
                            'href',
                            'https://material.google.com/style/color.html',
                            'target',
                            '_blank',
                          ],
                          [
                            'mat-button',
                            '',
                            'color',
                            'accent',
                            'target',
                            '_blank',
                            'href',
                            'https://material.angular.io/guide/theming',
                            1,
                            'text-upper',
                          ],
                        ],
                        template: function (a, n) {
                          1 & a &&
                            (t.TgZ(0, 'section', 0)(1, 'h1', 1),
                            t._uU(2, 'Custom Theme'),
                            t.qZA(),
                            t.TgZ(3, 'p', 2),
                            t._uU(
                              4,
                              ' SCSS variables to customize the color scheme '
                            ),
                            t.qZA()(),
                            t.TgZ(5, 'section', 3)(6, 'h3', 4),
                            t._uU(7, 'SCSS Variables'),
                            t.qZA(),
                            t._UZ(8, 'mat-divider'),
                            t.TgZ(9, 'p'),
                            t._uU(
                              10,
                              'Simply edit the /theme.scss file and update these SCSS variables:'
                            ),
                            t.qZA(),
                            t.TgZ(11, 'td-highlight', 5),
                            t._uU(12),
                            t.qZA(),
                            t.TgZ(13, 'p'),
                            t._uU(
                              14,
                              ' Color palettes and hues follow the official '
                            ),
                            t.TgZ(15, 'a', 6),
                            t._uU(16, 'Material Design Spec'),
                            t.qZA(),
                            t._uU(17, ' . '),
                            t.qZA(),
                            t._UZ(18, 'mat-divider'),
                            t.TgZ(19, 'a', 7),
                            t._uU(20, ' Theming Docs '),
                            t.qZA()()),
                            2 & a && (t.xp6(12), t.hij(' ', n.themeScss, ' '));
                        },
                        dependencies: [r.zs, f.d, T.S],
                        styles: [
                          '.mat-fab-position-bottom-right[_ngcontent-%COMP%]{bottom:20px}',
                        ],
                        data: { animation: [u.kh] },
                      });
                    }
                    return o;
                  })(),
                },
              ],
            },
          ],
          path: 'docs',
        },
      ]);
      var z = e(50678);
      let D = (() => {
        class o {
          static ɵfac = function (a) {
            return new (a || o)();
          };
          static ɵmod = t.oAB({ type: o });
          static ɵinj = t.cJS({
            imports: [
              d.ez,
              y.Bz,
              p.SJ,
              r.ot,
              m.ie,
              l.Ps,
              i.QW,
              U.g0,
              A.Tx,
              z.i9,
              g.B,
              h.m,
              b.V,
              I.q,
              S.E,
              w,
            ],
          });
        }
        return o;
      })();
    },
    39419: (v, c, e) => {
      e.d(c, { A0: () => l });
      var p = e(96814),
        d = e(30617),
        r = (e(21266), e(19212));
      let l = (() => {
        class i {
          static ɵfac = function (g) {
            return new (g || i)();
          };
          static ɵmod = r.oAB({ type: i });
          static ɵinj = r.cJS({ imports: [p.ez, d.Ps] });
        }
        return i;
      })();
    },
  },
]);
