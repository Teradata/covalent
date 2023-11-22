'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [2671],
  {
    2671: (A, i, a) => {
      a.r(i), a.d(i, { MarkdownDemoModule: () => Z });
      var u = a(96814),
        l = a(18437),
        c = a(52787),
        e = a(19212),
        p = a(31791),
        s = a(33410);
      let h = (() => {
        class t {
          basicMarkdown =
            '\n    # Heading (H1)\n\n    ## Sub Heading (H2)\n\n    ### Steps (H3)\n\n    ###List Items\n\n    - One\n    - Two\n    - Three\n        * 4 extra spaces for nested lists\n            * Another 4 spaces for a nested list\n\n    Emphasis, aka italics, with *asterisks* or _underscores_.\n\n    Strong emphasis, aka bold, with **asterisks** or __underscores__.\n\n    Combined emphasis with **asterisks and _underscores_**.\n  ';
          blockquoteMarkdown =
            "\n    > Blockquotes are very handy in email to emulate reply text.\n    > This line is part of the same quote.\n\n    Quote break.\n\n    > This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure\n    this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.\n  ";
          dividerMarkdown =
            '\n    Three or more...\n\n    ---\n\n    Hyphens\n\n    ***\n\n    Asterisks\n\n    ___\n\n    Underscores\n  ';
          codeblockMarkdown =
            '\n    `this is an inline code snippet`\n\n    ```javascript\n    var s = "JavaScript syntax highlighting";\n    alert(s);\n    ```\n\n    ```python\n    s = "Python syntax highlighting"\n    print s\n    ```\n  ';
          linksMarkdown =
            '\n    [I\'m an inline-style link](https://teradata.github.io/)\n\n    [I\'m a reference-style link case does not matter][Teradata Github Landing]\n\n    [teradata github Landing]: https://teradata.github.io/\n\n    Inline image:\n    ![alt text here](assets/icons/teradata-dark.svg)\n\n    Reference-style image:\n    ![alt text][logo]\n\n    [logo]: assets/icons/teradata-dark.svg "Teradata Labs"\n  ';
          static ɵfac = function (o) {
            return new (o || t)();
          };
          static ɵcmp = e.Xpm({
            type: t,
            selectors: [['markdown-demo-basic']],
            decls: 29,
            vars: 5,
            template: function (o, n) {
              1 & o &&
                (e.TgZ(0, 'h2'),
                e._uU(1, 'Basic Markdown'),
                e.qZA(),
                e.TgZ(2, 'td-markdown'),
                e._uU(3),
                e.qZA(),
                e.TgZ(4, 'h2'),
                e._uU(5, 'Blockquotes'),
                e.qZA(),
                e.TgZ(6, 'td-markdown'),
                e._uU(7),
                e.qZA(),
                e.TgZ(8, 'h2'),
                e._uU(9, 'Dividers'),
                e.qZA(),
                e.TgZ(10, 'td-markdown'),
                e._uU(11),
                e.qZA(),
                e.TgZ(12, 'h2'),
                e._uU(13, 'Code Blocks'),
                e.qZA(),
                e.TgZ(14, 'p'),
                e._uU(15, 'Inline has `back-ticks` around it.'),
                e.qZA(),
                e.TgZ(16, 'p'),
                e._uU(
                  17,
                  ' Blocks of code are either fenced by lines with three back-ticks '
                ),
                e.TgZ(18, 'code'),
                e._uU(19, '```'),
                e.qZA(),
                e._uU(20, ' , or are indented with four spaces.\n'),
                e.qZA(),
                e.TgZ(21, 'td-markdown'),
                e._uU(22),
                e.qZA(),
                e.TgZ(23, 'h2'),
                e._uU(24, 'Links & Images'),
                e.qZA(),
                e.TgZ(25, 'p'),
                e._uU(
                  26,
                  'There are two ways to create links. Inline & reference:'
                ),
                e.qZA(),
                e.TgZ(27, 'td-markdown'),
                e._uU(28),
                e.qZA()),
                2 & o &&
                  (e.xp6(3),
                  e.Oqu(n.basicMarkdown),
                  e.xp6(4),
                  e.Oqu(n.blockquoteMarkdown),
                  e.xp6(4),
                  e.Oqu(n.dividerMarkdown),
                  e.xp6(11),
                  e.Oqu(n.codeblockMarkdown),
                  e.xp6(6),
                  e.Oqu(n.linksMarkdown));
            },
            dependencies: [s.r],
          });
        }
        return t;
      })();
      var m = a(32296),
        r = a(95195);
      let w = (() => {
          class t {
            anchor;
            markdown =
              '\n    * [Heading 1](#heading-1)\n    * [Heading 2](#heading-2)\n\n    # Heading 1\n\n    ## Heading 2';
            jumpToH1() {
              this.anchor = 'heading-1';
            }
            jumpToH2() {
              this.anchor = 'heading-2';
            }
            static ɵfac = function (o) {
              return new (o || t)();
            };
            static ɵcmp = e.Xpm({
              type: t,
              selectors: [['markdown-demo-anchor-jumping']],
              decls: 8,
              vars: 2,
              consts: [
                [3, 'anchor'],
                [
                  'mat-button',
                  '',
                  'color',
                  'accent',
                  1,
                  'text-upper',
                  3,
                  'click',
                ],
              ],
              template: function (o, n) {
                1 & o &&
                  (e.TgZ(0, 'mat-card-content')(1, 'td-markdown', 0),
                  e._uU(2),
                  e.qZA()(),
                  e.TgZ(3, 'mat-card-actions')(4, 'button', 1),
                  e.NdJ('click', function () {
                    return n.jumpToH1();
                  }),
                  e._uU(5, ' Jump to heading 1 '),
                  e.qZA(),
                  e.TgZ(6, 'button', 1),
                  e.NdJ('click', function () {
                    return n.jumpToH2();
                  }),
                  e._uU(7, ' Jump to heading 2 '),
                  e.qZA()()),
                  2 & o &&
                    (e.xp6(1),
                    e.Q6J('anchor', n.anchor),
                    e.xp6(1),
                    e.Oqu(n.markdown));
              },
              dependencies: [s.r, m.lW, r.hq, r.dn],
            });
          }
          return t;
        })(),
        k = (() => {
          class t {
            static ɵfac = function (o) {
              return new (o || t)();
            };
            static ɵcmp = e.Xpm({
              type: t,
              selectors: [['markdown-demo-hosted-url']],
              decls: 4,
              vars: 0,
              consts: [
                [
                  'hostedUrl',
                  'https://github.com/Teradata/covalent/blob/main/README.md',
                ],
              ],
              template: function (o, n) {
                1 & o &&
                  (e.TgZ(0, 'td-markdown', 0),
                  e._uU(
                    1,
                    ' * [Relative path with a hostedUrl provided](docs/GETTING_STARTED.md)\n'
                  ),
                  e.qZA(),
                  e.TgZ(2, 'td-markdown'),
                  e._uU(
                    3,
                    '* [Relative path without a hostedUrl provided](docs/GETTING_STARTED.md)'
                  ),
                  e.qZA());
              },
              dependencies: [s.r],
            });
          }
          return t;
        })(),
        g = (() => {
          class t {
            videoMarkdown =
              "\n## Embed YouTube Videos\n\nUse this custom embed syntax and you can embed YouTube videos with ease\n```![youtube URL here]```\n\nThis works with any of these base URLs (with or without the 'https://www.' portion):\n* youtube.com\n* youtu.be\n\n## Example\n\n\n\n### Short syntax\n(youtu.be/dQw4w9WgXcQ)\n\n![youtu.be/dQw4w9WgXcQ]\n\n### Watch link syntax\n(https://www.youtube.com/watch?v=dQw4w9WgXcQ&start=10)\n\n![https://www.youtube.com/watch?v=dQw4w9WgXcQ&start=10]\n\n### Embed link syntax\n(www.youtube.com/embed/dQw4w9WgXcQ?start=20)\n\n![www.youtube.com/embed/dQw4w9WgXcQ?start=20]\n\n### Playlist embedding\n(https://youtube.com/playlist?list=PLXIU9mpT9-03zDjIdMvJRmcANfW644x3F)\n\n![https://youtube.com/playlist?list=PLXIU9mpT9-03zDjIdMvJRmcANfW644x3F&autoplay=1]\n  ";
            static ɵfac = function (o) {
              return new (o || t)();
            };
            static ɵcmp = e.Xpm({
              type: t,
              selectors: [['markdown-demo-youtube']],
              decls: 4,
              vars: 1,
              template: function (o, n) {
                1 & o &&
                  (e.TgZ(0, 'h2'),
                  e._uU(1, 'Embed videos directly'),
                  e.qZA(),
                  e.TgZ(2, 'td-markdown'),
                  e._uU(3),
                  e.qZA()),
                  2 & o && (e.xp6(3), e.Oqu(n.videoMarkdown));
              },
              dependencies: [s.r],
            });
          }
          return t;
        })();
      const T = [
        {
          path: '',
          component: (() => {
            class t {
              static ɵfac = function (o) {
                return new (o || t)();
              };
              static ɵcmp = e.Xpm({
                type: t,
                selectors: [['markdown-demo']],
                decls: 8,
                vars: 8,
                consts: [[3, 'demoId', 'demoTitle']],
                template: function (o, n) {
                  1 & o &&
                    (e.TgZ(0, 'demo-component', 0),
                    e._UZ(1, 'markdown-demo-basic'),
                    e.qZA(),
                    e.TgZ(2, 'demo-component', 0),
                    e._UZ(3, 'markdown-demo-anchor-jumping'),
                    e.qZA(),
                    e.TgZ(4, 'demo-component', 0),
                    e._UZ(5, 'markdown-demo-hosted-url'),
                    e.qZA(),
                    e.TgZ(6, 'demo-component', 0),
                    e._UZ(7, 'markdown-demo-youtube'),
                    e.qZA()),
                    2 & o &&
                      (e.Q6J('demoId', 'markdown-demo-basic')(
                        'demoTitle',
                        'Basic'
                      ),
                      e.xp6(2),
                      e.Q6J('demoId', 'markdown-demo-anchor-jumping')(
                        'demoTitle',
                        'Anchor Jumping'
                      ),
                      e.xp6(2),
                      e.Q6J('demoId', 'markdown-demo-hosted-url')(
                        'demoTitle',
                        'Hosted URL For Generating Absolute URLs'
                      ),
                      e.xp6(2),
                      e.Q6J('demoId', 'markdown-demo-youtube')(
                        'demoTitle',
                        'YouTube video embedding'
                      ));
                },
                dependencies: [p.z, h, w, k, g],
              });
            }
            return t;
          })(),
        },
      ];
      let y = (() => {
        class t {
          static ɵfac = function (o) {
            return new (o || t)();
          };
          static ɵmod = e.oAB({ type: t });
          static ɵinj = e.cJS({ imports: [c.Bz.forChild(T), c.Bz] });
        }
        return t;
      })();
      var b = a(96535);
      let Z = (() => {
        class t {
          static ɵfac = function (o) {
            return new (o || t)();
          };
          static ɵmod = e.oAB({ type: t });
          static ɵinj = e.cJS({ imports: [b.l, y, l.WD, u.ez, m.ot, r.QW] });
        }
        return t;
      })();
    },
  },
]);
