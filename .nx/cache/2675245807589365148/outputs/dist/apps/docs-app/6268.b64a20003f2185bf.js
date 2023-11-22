'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [6268],
  {
    6268: (Z, l, a) => {
      a.r(l), a.d(l, { FlavoredMarkdownDemoModule: () => b });
      var c = a(96814),
        i = a(1209),
        s = a(52787),
        o = a(19212),
        p = a(31791),
        r = a(57742);
      let u = (() => {
          class e {
            basicFlavoredMarkdown =
              '\n    ## Checkboxes\n\n    - [x] My checkbox\n    - [x] My second checkbox\n    - [ ] My empty checkbox\n\n    ## List\n\n    + One\n      + subline\n    + Two\n    + Three\n      + subline\n      + second subline\n  ';
            static ɵfac = function (n) {
              return new (n || e)();
            };
            static ɵcmp = o.Xpm({
              type: e,
              selectors: [['flavored-markdown-demo-basic']],
              decls: 2,
              vars: 1,
              template: function (n, d) {
                1 & n && (o.TgZ(0, 'td-flavored-markdown'), o._uU(1), o.qZA()),
                  2 & n && (o.xp6(1), o.Oqu(d.basicFlavoredMarkdown));
              },
              dependencies: [r.oN],
            });
          }
          return e;
        })(),
        v = (() => {
          class e {
            inlineFlavoredMarkdown =
              "\n    ## Inline\n\n    Inline piece of code `var obj: Type = bla;`\n\n    ## Snippet\n\n    ```typescript\n      @Component({\n        selector: 'demo',\n        styleUrls: ['./demo.component.scss'],\n        templateUrl: './demo.component.html',\n      })\n      export class DemoComponent {\n        property: Type;\n      }\n    ```\n  ";
            tooltipsConfig = { copy: 'Copiar', copied: 'Copiado' };
            static ɵfac = function (n) {
              return new (n || e)();
            };
            static ɵcmp = o.Xpm({
              type: e,
              selectors: [['flavored-markdown-demo-inline']],
              decls: 2,
              vars: 3,
              consts: [[3, 'copyCodeToClipboard', 'copyCodeTooltips']],
              template: function (n, d) {
                1 & n &&
                  (o.TgZ(0, 'td-flavored-markdown', 0), o._uU(1), o.qZA()),
                  2 & n &&
                    (o.Q6J('copyCodeToClipboard', !0)(
                      'copyCodeTooltips',
                      d.tooltipsConfig
                    ),
                    o.xp6(1),
                    o.hij(' ', d.inlineFlavoredMarkdown, '\n'));
              },
              dependencies: [r.oN],
            });
          }
          return e;
        })(),
        f = (() => {
          class e {
            tablesFlavoredMarkdown =
              '\n    | Tables   |      Are      |  Cool |\n    |----------|--------------:|------:|\n    | col 1 is | left-aligned  | $1600 |\n    | col 2 is | right-aligned |   $12 |\n    | col 3 is | right-aligned |    $1 |\n  ';
            static ɵfac = function (n) {
              return new (n || e)();
            };
            static ɵcmp = o.Xpm({
              type: e,
              selectors: [['flavored-markdown-demo-tables']],
              decls: 2,
              vars: 1,
              template: function (n, d) {
                1 & n && (o.TgZ(0, 'td-flavored-markdown'), o._uU(1), o.qZA()),
                  2 & n && (o.xp6(1), o.Oqu(d.tablesFlavoredMarkdown));
              },
              dependencies: [r.oN],
            });
          }
          return e;
        })();
      var k = a(87632);
      let w = (() => {
        class e {
          static ɵfac = function (n) {
            return new (n || e)();
          };
          static ɵcmp = o.Xpm({
            type: e,
            selectors: [['flavored-markdown-demo-loader']],
            decls: 1,
            vars: 1,
            consts: [[3, 'url']],
            template: function (n, d) {
              1 & n && o._UZ(0, 'td-flavored-markdown-loader', 0),
                2 & n &&
                  o.Q6J(
                    'url',
                    'https://github.com/angular/angular/blob/master/README.md'
                  );
            },
            dependencies: [k.D],
          });
        }
        return e;
      })();
      var m = a(22939);
      let C = (() => {
        class e {
          _snackBar;
          buttonsFlavoredMarkdown =
            '\n    ## Buttons\n\n    [Go to Mars](#data={"planet": "mars"})\n    ---\n    [Go to Jupiter](#data={"planet": "Jupiter"})\n  ';
          constructor(t) {
            this._snackBar = t;
          }
          handleButtonClicked(t) {
            this._snackBar.open(
              `Button clicked: ${JSON.stringify(t)}`,
              void 0,
              { duration: 2e3 }
            );
          }
          static ɵfac = function (n) {
            return new (n || e)(o.Y36(m.ux));
          };
          static ɵcmp = o.Xpm({
            type: e,
            selectors: [['flavored-markdown-demo-buttons']],
            decls: 2,
            vars: 1,
            consts: [[3, 'buttonClicked']],
            template: function (n, d) {
              1 & n &&
                (o.TgZ(0, 'td-flavored-markdown', 0),
                o.NdJ('buttonClicked', function (y) {
                  return d.handleButtonClicked(y);
                }),
                o._uU(1),
                o.qZA()),
                2 & n && (o.xp6(1), o.Oqu(d.buttonsFlavoredMarkdown));
            },
            dependencies: [r.oN],
          });
        }
        return e;
      })();
      const F = [
        {
          path: '',
          component: (() => {
            class e {
              static ɵfac = function (n) {
                return new (n || e)();
              };
              static ɵcmp = o.Xpm({
                type: e,
                selectors: [['flavored-markdown-demo']],
                decls: 10,
                vars: 10,
                consts: [[3, 'demoId', 'demoTitle']],
                template: function (n, d) {
                  1 & n &&
                    (o.TgZ(0, 'demo-component', 0),
                    o._UZ(1, 'flavored-markdown-demo-basic'),
                    o.qZA(),
                    o.TgZ(2, 'demo-component', 0),
                    o._UZ(3, 'flavored-markdown-demo-inline'),
                    o.qZA(),
                    o.TgZ(4, 'demo-component', 0),
                    o._UZ(5, 'flavored-markdown-demo-tables'),
                    o.qZA(),
                    o.TgZ(6, 'demo-component', 0),
                    o._UZ(7, 'flavored-markdown-demo-buttons'),
                    o.qZA(),
                    o.TgZ(8, 'demo-component', 0),
                    o._UZ(9, 'flavored-markdown-demo-loader'),
                    o.qZA()),
                    2 & n &&
                      (o.Q6J('demoId', 'flavored-markdown-demo-basic')(
                        'demoTitle',
                        'Checkboxes & Lists'
                      ),
                      o.xp6(2),
                      o.Q6J('demoId', 'flavored-markdown-demo-inline')(
                        'demoTitle',
                        'Inline Code & Snippets'
                      ),
                      o.xp6(2),
                      o.Q6J('demoId', 'flavored-markdown-demo-tables')(
                        'demoTitle',
                        'Tables'
                      ),
                      o.xp6(2),
                      o.Q6J('demoId', 'flavored-markdown-demo-buttons')(
                        'demoTitle',
                        'Buttons'
                      ),
                      o.xp6(2),
                      o.Q6J('demoId', 'flavored-markdown-demo-loader')(
                        'demoTitle',
                        'Flavored Markdown Loader'
                      ));
                },
                dependencies: [p.z, u, v, f, w, C],
              });
            }
            return e;
          })(),
        },
      ];
      let M = (() => {
        class e {
          static ɵfac = function (n) {
            return new (n || e)();
          };
          static ɵmod = o.oAB({ type: e });
          static ɵinj = o.cJS({ imports: [s.Bz.forChild(F), s.Bz] });
        }
        return e;
      })();
      var T = a(96535);
      let b = (() => {
        class e {
          static ɵfac = function (n) {
            return new (n || e)();
          };
          static ɵmod = o.oAB({ type: e });
          static ɵinj = o.cJS({ imports: [T.l, M, i._3, m.ZX, c.ez] });
        }
        return e;
      })();
    },
  },
]);
