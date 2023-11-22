'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [9627],
  {
    59627: (b, l, i) => {
      i.r(l), i.d(l, { HighlightDemoModule: () => v });
      var h = i(96814),
        d = i(96942),
        m = i(52787),
        t = i(19212),
        a = i(1969),
        g = i(31791),
        c = i(67479);
      let p = (() => {
          class e {
            html =
              '\n  <div>\n    <h1>hello world!</h1>\n    <span>Some additional text here</span>\n  </div>\n  ';
            static ɵfac = function (o) {
              return new (o || e)();
            };
            static ɵcmp = t.Xpm({
              type: e,
              selectors: [['highlight-demo-html']],
              decls: 2,
              vars: 1,
              consts: [['codeLang', 'html']],
              template: function (o, s) {
                1 & o && (t.TgZ(0, 'td-highlight', 0), t._uU(1), t.qZA()),
                  2 & o && (t.xp6(1), t.hij(' ', s.html, '\n'));
              },
              dependencies: [c.S],
            });
          }
          return e;
        })(),
        r = (() => {
          class e {
            code =
              "\n  import { Injectable } from '@angular/core';\n  import { Observable, Subject } from 'rxjs';\n\n  @Injectable()\n  export class Service {\n\n    private _sources: {[key : string]: Subject<any>} = {};\n    private _observables: {[key: string]: Observable<any>} = {};\n\n    constructor() { }\n\n    public register(name) : Observable<any> {\n      this._sources[name] = new Subject<any>();\n      this._observables[name] = this._sources[name].asObservable();\n      return this._observables[name];\n    }\n\n    public emit(name: string): void {\n      if (this._sources[name]) {\n        this._sources[name].next(null);\n      }\n    }\n  }\n  ";
            static ɵfac = function (o) {
              return new (o || e)();
            };
            static ɵcmp = t.Xpm({
              type: e,
              selectors: [['highlight-demo-ts']],
              decls: 2,
              vars: 3,
              consts: [
                [
                  'codeLang',
                  'typescript',
                  3,
                  'copyCodeToClipboard',
                  'toggleRawButton',
                ],
              ],
              template: function (o, s) {
                1 & o && (t.TgZ(0, 'td-highlight', 0), t._uU(1), t.qZA()),
                  2 & o &&
                    (t.Q6J('copyCodeToClipboard', !0)('toggleRawButton', !0),
                    t.xp6(1),
                    t.hij(' ', s.code, '\n'));
              },
              dependencies: [c.S],
            });
          }
          return e;
        })(),
        u = (() => {
          class e {
            css = '\n  .flex-container {\n    display: flex;\n  }\n  ';
            tooltipsConfig = { copy: 'Copy text', copied: 'Text copied' };
            static ɵfac = function (o) {
              return new (o || e)();
            };
            static ɵcmp = t.Xpm({
              type: e,
              selectors: [['highlight-demo-copy-code']],
              decls: 2,
              vars: 4,
              consts: [
                [
                  'codeLang',
                  'css',
                  1,
                  'push-bottom-md',
                  3,
                  'copyCodeToClipboard',
                  'copyCodeTooltips',
                  'toggleRawButton',
                ],
              ],
              template: function (o, s) {
                1 & o && (t.TgZ(0, 'td-highlight', 0), t._uU(1), t.qZA()),
                  2 & o &&
                    (t.Q6J('copyCodeToClipboard', !0)(
                      'copyCodeTooltips',
                      s.tooltipsConfig
                    )('toggleRawButton', !0),
                    t.xp6(1),
                    t.hij(' ', s.css, '\n'));
              },
              dependencies: [c.S],
            });
          }
          return e;
        })();
      const y = [
        {
          path: '',
          component: (() => {
            class e {
              static ɵfac = function (o) {
                return new (o || e)();
              };
              static ɵcmp = t.Xpm({
                type: e,
                selectors: [['highlight-demo']],
                decls: 8,
                vars: 8,
                consts: [[3, 'demoId', 'demoTitle']],
                template: function (o, s) {
                  1 & o &&
                    (t.TgZ(0, 'demo-component', 0),
                    t._UZ(1, 'highlight-demo-css'),
                    t.qZA(),
                    t.TgZ(2, 'demo-component', 0),
                    t._UZ(3, 'highlight-demo-html'),
                    t.qZA(),
                    t.TgZ(4, 'demo-component', 0),
                    t._UZ(5, 'highlight-demo-ts'),
                    t.qZA(),
                    t.TgZ(6, 'demo-component', 0),
                    t._UZ(7, 'highlight-demo-copy-code'),
                    t.qZA()),
                    2 & o &&
                      (t.Q6J('demoId', 'highlight-demo-css')(
                        'demoTitle',
                        'CSS'
                      ),
                      t.xp6(2),
                      t.Q6J('demoId', 'highlight-demo-html')(
                        'demoTitle',
                        'HTML'
                      ),
                      t.xp6(2),
                      t.Q6J('demoId', 'highlight-demo-ts')(
                        'demoTitle',
                        'TypeScript'
                      ),
                      t.xp6(2),
                      t.Q6J('demoId', 'highlight-demo-copy-code')(
                        'demoTitle',
                        'CopyCode and ToggleRaw'
                      ));
                },
                dependencies: [a.R, g.z, p, r, u],
              });
            }
            return e;
          })(),
        },
      ];
      let C = (() => {
        class e {
          static ɵfac = function (o) {
            return new (o || e)();
          };
          static ɵmod = t.oAB({ type: e });
          static ɵinj = t.cJS({ imports: [m.Bz.forChild(y), m.Bz] });
        }
        return e;
      })();
      var f = i(96535),
        T = i(94608);
      let v = (() => {
        class e {
          static ɵfac = function (o) {
            return new (o || e)();
          };
          static ɵmod = t.oAB({ type: e });
          static ɵinj = t.cJS({ imports: [T.n, f.l, C, d.B, h.ez] });
        }
        return e;
      })();
    },
  },
]);
