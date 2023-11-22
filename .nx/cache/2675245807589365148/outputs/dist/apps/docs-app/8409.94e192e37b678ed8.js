'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [8409],
  {
    56010: (u, s, o) => {
      o.r(s), o.d(s, { FlavoredMarkdownDemoModule: () => y });
      var l = o(96814),
        c = o(52787),
        d = o(95195),
        r = o(26385),
        m = o(74104),
        i = o(22497),
        n = o(1209),
        h = o(96942),
        p = o(80549),
        t = o(19212),
        g = o(57742);
      const f = (0, p.ng)({
        overviewDemoComponent: (() => {
          class e {
            basicFlavoredMarkdown =
              "\n## Checkboxes\n\n- [x] My checkbox\n- [x] My second checkbox\n- [ ] My empty checkbox\n\n## List\n\n+ One\n  + subline\n+ Two\n+ Three\n  + subline\n  + second subline\n\n## Table\n\n|Connects to|With connector|\n|-----------|--------------|\n|VantageCloud Enterprise on Azure|Teradata-to-TeradataTo setup and configure the required PrivateLink endpoint on VantageCloud Enterprise, open a [PrivateLink change request](https://www.google.com) on the VantageCloud Enterprise customer support portal.|\n|VantageCore (on-premises)|Teradata-to-Teradata|\n|**This text is bolded**|*this text is italicized*|\n\n\n## Code \n```typescript\nthis._renderer.appendChild(this._elementRef.nativeElement, preElement); // long long long long line\n\nimport { Component } from '@angular/core';\nexport class AppComponent {\n  title = 'my-app';\n  constructor() {}\n}\n```\n  ";
            static ɵfac = function (a) {
              return new (a || e)();
            };
            static ɵcmp = t.Xpm({
              type: e,
              selectors: [['flavored-markdown-demo']],
              decls: 2,
              vars: 3,
              consts: [[3, 'copyCodeToClipboard', 'toggleRawCode']],
              template: function (a, M) {
                1 & a &&
                  (t.TgZ(0, 'td-flavored-markdown', 0), t._uU(1), t.qZA()),
                  2 & a &&
                    (t.Q6J('copyCodeToClipboard', !0)('toggleRawCode', !0),
                    t.xp6(1),
                    t.Oqu(M.basicFlavoredMarkdown));
              },
              dependencies: [g.oN],
              styles: ['[_nghost-%COMP%]{width:90%}'],
            });
          }
          return e;
        })(),
        id: 'flavored-markdown',
      });
      let y = (() => {
        class e {
          static ɵfac = function (a) {
            return new (a || e)();
          };
          static ɵmod = t.oAB({ type: e });
          static ɵinj = t.cJS({
            imports: [l.ez, d.QW, r.t, m.Nh, i.q, n._3, h.B, c.Bz.forChild(f)],
          });
        }
        return e;
      })();
    },
    39419: (u, s, o) => {
      o.d(s, { A0: () => i });
      var l = o(96814),
        c = o(30617),
        r = (o(21266), o(19212));
      let i = (() => {
        class n {
          static ɵfac = function (t) {
            return new (t || n)();
          };
          static ɵmod = r.oAB({ type: n });
          static ɵinj = r.cJS({ imports: [l.ez, c.Ps] });
        }
        return n;
      })();
    },
  },
]);
