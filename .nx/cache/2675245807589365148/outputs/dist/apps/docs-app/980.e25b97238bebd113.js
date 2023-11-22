'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [980],
  {
    38672: (v, d, t) => {
      t.r(d), t.d(d, { TextEditorDemoModule: () => T });
      var c = t(96814),
        m = t(52787),
        i = t(98525),
        r = t(30617),
        a = t(56223),
        u = t(22497),
        s = t(80549),
        f = t(21420),
        o = t(19212),
        p = t(10503);
      const y = ['editor'],
        M = (0, s.ng)({
          overviewDemoComponent: (() => {
            class e {
              _tdEditor;
              editorVal =
                "# Intro\nGo ahead, play around with the editor! Be sure to check out **bold** and *italic* styling, or even [links](https://google.com).\nYou can type the Markdown syntax, use the toolbar, or use shortcuts like 'cmd-b' or 'ctrl-b'.\n\n## Lists\nUnordered lists can be started using the toolbar or by typing '* ', '- ', or '+ '. Ordered lists can be started by typing '1. '.\n\n#### Unordered\n* Lists are a piece of cake\n* They even auto continue as you type\n* A double enter will end them\n* Tabs and shift-tabs work too\n\n#### Ordered\n1. Numbered lists...\n2. ...work too!\n\n## What about images?\n![Yes](https://i.imgur.com/sZlktY7.png)\n";
              simpleLineBreaks = !0;
              static ɵfac = function (n) {
                return new (n || e)();
              };
              static ɵcmp = o.Xpm({
                type: e,
                selectors: [['text-editor-demo']],
                viewQuery: function (n, l) {
                  if ((1 & n && o.Gf(y, 5), 2 & n)) {
                    let g;
                    o.iGM((g = o.CRH())) && (l._tdEditor = g.first);
                  }
                },
                decls: 2,
                vars: 1,
                consts: [
                  [2, 'height', '100%'],
                  [3, 'ngModel', 'ngModelChange'],
                ],
                template: function (n, l) {
                  1 & n &&
                    (o.TgZ(0, 'div', 0)(1, 'td-text-editor', 1),
                    o.NdJ('ngModelChange', function (x) {
                      return (l.editorVal = x);
                    }),
                    o.qZA()()),
                    2 & n && (o.xp6(1), o.Q6J('ngModel', l.editorVal));
                },
                dependencies: [a.JJ, a.On, p.B],
                styles: ['.editor[_ngcontent-%COMP%]{height:200px}'],
              });
            }
            return e;
          })(),
          id: 'text-editor',
        });
      let T = (() => {
        class e {
          static ɵfac = function (n) {
            return new (n || e)();
          };
          static ɵmod = o.oAB({ type: e });
          static ɵinj = o.cJS({
            imports: [c.ez, i.LD, r.Ps, a.u5, u.q, f.N, m.Bz.forChild(M)],
          });
        }
        return e;
      })();
    },
    39419: (v, d, t) => {
      t.d(d, { A0: () => u });
      var c = t(96814),
        m = t(30617),
        r = (t(21266), t(19212));
      let u = (() => {
        class s {
          static ɵfac = function (p) {
            return new (p || s)();
          };
          static ɵmod = r.oAB({ type: s });
          static ɵinj = r.cJS({ imports: [c.ez, m.Ps] });
        }
        return s;
      })();
    },
  },
]);
