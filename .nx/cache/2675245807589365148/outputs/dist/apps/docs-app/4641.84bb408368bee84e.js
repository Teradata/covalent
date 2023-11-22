'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [4641],
  {
    34641: (z, l, d) => {
      d.r(l), d.d(l, { CodeEditorDemoModule: () => J });
      var p = d(96814),
        g = d(91694),
        s = d(52787),
        o = d(19212),
        h = d(82433),
        f = d(31791),
        C = d(15861),
        v = d(84535),
        a = d(56223),
        m = d(64170),
        u = d(98525),
        M = d(23680);
      const T = () => ({ autoIndent: !0, cursorBlinking: 'phase' });
      let y = (() => {
        class t {
          _editor;
          editorTheme = 'vs';
          editorVal =
            'var rows = prompt("How many rows for your multiplication table?");\nvar cols = prompt("How many columns for your multiplication table?");\nif(rows == "" || rows == null)\n  rows = 10;\nif(cols== "" || cols== null)\n  cols = 10;\ncreateTable(rows, cols);\nfunction createTable(rows, cols) {\n  var j=1;\n  var output = "<table border=\'1\' width=\'500\' cellspacing=\'0\'cellpadding=\'5\'>";\n  for(i=1;i<=rows;i++) {\n    output = output + "<tr>";\n    while(j<=cols) {\n      output = output + "<td>" + i*j + "</td>";\n      j = j+1;\n    }\n    output = output + "</tr>";\n    j = 1;\n  }\n  output = output + "</table>";\n  document.write(output);\n}\n';
          configChanged(n) {
            const e = window.monaco;
            e && e.editor.setTheme(n), this.getModel();
          }
          editorInitialized(n) {
            this._editor = n;
          }
          getModel() {
            var n = this;
            return (0, C.Z)(function* () {
              return yield n._editor.getModel();
            })();
          }
          static ɵfac = function (e) {
            return new (e || t)();
          };
          static ɵcmp = o.Xpm({
            type: t,
            selectors: [['code-editor-demo-monaco']],
            decls: 13,
            vars: 5,
            consts: [
              [
                'data-cy',
                'td-code-editor',
                'flex',
                '',
                'language',
                'javascript',
                3,
                'editorOptions',
                'ngModel',
                'theme',
                'ngModelChange',
                'editorInitialized',
                'editorConfigurationChanged',
              ],
              ['editor', ''],
              ['layout', 'row', 'layout-align', 'start center', 1, 'pad-sm'],
              ['flex', 'none', 'hide-xs', '', 1, 'push-right', 'mat-body-1'],
              ['placeholder', 'Editor Theme', 3, 'ngModel', 'ngModelChange'],
              ['value', 'vs-dark'],
              ['value', 'hc-black'],
              ['value', 'vs'],
            ],
            template: function (e, i) {
              if (1 & e) {
                const j = o.EpF();
                o.TgZ(0, 'td-code-editor', 0, 1),
                  o.NdJ('ngModelChange', function (r) {
                    return (i.editorVal = r);
                  })('editorInitialized', function (r) {
                    return i.editorInitialized(r);
                  })('editorConfigurationChanged', function () {
                    o.CHM(j);
                    const r = o.MAs(1);
                    return o.KtG(i.configChanged(r.theme));
                  }),
                  o.qZA(),
                  o.TgZ(2, 'div', 2)(3, 'span', 3),
                  o._uU(4, 'Editor Theme'),
                  o.qZA(),
                  o.TgZ(5, 'mat-form-field')(6, 'mat-select', 4),
                  o.NdJ('ngModelChange', function (r) {
                    return (i.editorTheme = r);
                  }),
                  o.TgZ(7, 'mat-option', 5),
                  o._uU(8, 'Dark'),
                  o.qZA(),
                  o.TgZ(9, 'mat-option', 6),
                  o._uU(10, 'High Contrast'),
                  o.qZA(),
                  o.TgZ(11, 'mat-option', 7),
                  o._uU(12, 'Light'),
                  o.qZA()()()();
              }
              2 & e &&
                (o.Q6J('editorOptions', o.DdM(4, T))('ngModel', i.editorVal)(
                  'theme',
                  i.editorTheme
                ),
                o.xp6(6),
                o.Q6J('ngModel', i.editorTheme));
            },
            dependencies: [v.dD, a.JJ, a.On, m.KE, u.gD, M.ey],
            styles: ['td-code-editor{height:400px}'],
          });
        }
        return t;
      })();
      const Z = [
        {
          path: '',
          component: (() => {
            class t {
              static ɵfac = function (e) {
                return new (e || t)();
              };
              static ɵcmp = o.Xpm({
                type: t,
                selectors: [['code-editor-demo']],
                decls: 4,
                vars: 4,
                consts: [[3, 'demoId', 'demoTitle']],
                template: function (e, i) {
                  1 & e &&
                    (o.TgZ(0, 'demo-component', 0),
                    o._UZ(1, 'code-editor-demo-basic'),
                    o.qZA(),
                    o.TgZ(2, 'demo-component', 0),
                    o._UZ(3, 'code-editor-demo-monaco'),
                    o.qZA()),
                    2 & e &&
                      (o.Q6J('demoId', 'code-editor-demo-basic')(
                        'demoTitle',
                        'Basic'
                      ),
                      o.xp6(2),
                      o.Q6J('demoId', 'code-editor-demo-monaco')(
                        'demoTitle',
                        'Code Editor with Monaco'
                      ));
                },
                dependencies: [h.p, f.z, y],
              });
            }
            return t;
          })(),
        },
      ];
      let D = (() => {
        class t {
          static ɵfac = function (e) {
            return new (e || t)();
          };
          static ɵmod = o.oAB({ type: t });
          static ɵinj = o.cJS({ imports: [s.Bz.forChild(Z), s.Bz] });
        }
        return t;
      })();
      var E = d(96535),
        A = d(67814);
      let J = (() => {
        class t {
          static ɵfac = function (e) {
            return new (e || t)();
          };
          static ɵmod = o.oAB({ type: t });
          static ɵinj = o.cJS({
            imports: [A.Q, E.l, D, g.T, p.ez, a.u5, m.lN, u.LD],
          });
        }
        return t;
      })();
    },
  },
]);
