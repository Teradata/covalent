'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [6440],
  {
    66440: (x, a, n) => {
      n.r(a), n.d(a, { TextEditorDemoModule: () => y });
      var c = n(96814),
        r = n(52787),
        e = n(19212),
        m = n(31791),
        l = n(10503),
        d = n(56223);
      let u = (() => {
        class t {
          editorVal =
            "# Intro\n  Go ahead, play around with the editor! Be sure to check out **bold** and *italic* styling, or even [links](https://google.com).\n  You can type the Markdown syntax, use the toolbar, or use shortcuts like 'cmd-b' or 'ctrl-b'.\n  \n  ## Lists\n  Unordered lists can be started using the toolbar or by typing '* ', '- ', or '+ '. Ordered lists can be started by typing '1. '.\n  \n  #### Unordered\n  * Lists are a piece of cake\n  * They even auto continue as you type\n  * A double enter will end them\n  * Tabs and shift-tabs work too\n  \n  #### Ordered\n  1. Numbered lists...\n  2. ...work too!\n  \n  ## What about images?\n  ![Yes](https://i.imgur.com/sZlktY7.png)\n  ";
          static ɵfac = function (o) {
            return new (o || t)();
          };
          static ɵcmp = e.Xpm({
            type: t,
            selectors: [['text-editor-demo-basic']],
            decls: 2,
            vars: 1,
            consts: [
              [2, 'height', '100%'],
              [3, 'ngModel', 'ngModelChange'],
            ],
            template: function (o, i) {
              1 & o &&
                (e.TgZ(0, 'div', 0)(1, 'td-text-editor', 1),
                e.NdJ('ngModelChange', function (T) {
                  return (i.editorVal = T);
                }),
                e.qZA()()),
                2 & o && (e.xp6(1), e.Q6J('ngModel', i.editorVal));
            },
            dependencies: [l.B, d.JJ, d.On],
          });
        }
        return t;
      })();
      const p = [
        {
          path: '',
          component: (() => {
            class t {
              static ɵfac = function (o) {
                return new (o || t)();
              };
              static ɵcmp = e.Xpm({
                type: t,
                selectors: [['text-editor-demo']],
                decls: 2,
                vars: 2,
                consts: [[3, 'demoId', 'demoTitle']],
                template: function (o, i) {
                  1 & o &&
                    (e.TgZ(0, 'demo-component', 0),
                    e._UZ(1, 'text-editor-demo-basic'),
                    e.qZA()),
                    2 & o &&
                      e.Q6J('demoId', 'text-editor-demo-basic')(
                        'demoTitle',
                        'Basic'
                      );
                },
                dependencies: [m.z, u],
              });
            }
            return t;
          })(),
        },
      ];
      let h = (() => {
        class t {
          static ɵfac = function (o) {
            return new (o || t)();
          };
          static ɵmod = e.oAB({ type: t });
          static ɵinj = e.cJS({ imports: [r.Bz.forChild(p), r.Bz] });
        }
        return t;
      })();
      var g = n(96535),
        f = n(21420);
      let y = (() => {
        class t {
          static ɵfac = function (o) {
            return new (o || t)();
          };
          static ɵmod = e.oAB({ type: t });
          static ɵinj = e.cJS({ imports: [g.l, h, f.N, c.ez, d.u5] });
        }
        return t;
      })();
    },
  },
]);
