'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [8119],
  {
    53347: (h, m, o) => {
      o.r(m), o.d(m, { MarkdownDemoModule: () => M });
      var e = o(96814),
        r = o(52787),
        d = o(98525),
        c = o(30617),
        u = o(18437),
        l = o(22497),
        s = o(80549),
        t = o(19212),
        p = o(33410);
      const f = (0, s.ng)({
        overviewDemoComponent: (() => {
          class n {
            anchor;
            markdown =
              '\n    # Heading (H1)\n    ## Sub Heading (H2)\n    ### Steps (H3)\n  ';
            jumpToH1() {
              this.anchor = 'heading-1';
            }
            jumpToH2() {
              this.anchor = 'heading-2';
            }
            static ɵfac = function (a) {
              return new (a || n)();
            };
            static ɵcmp = t.Xpm({
              type: n,
              selectors: [['markdown-demo']],
              decls: 2,
              vars: 1,
              template: function (a, g) {
                1 & a && (t.TgZ(0, 'td-markdown'), t._uU(1), t.qZA()),
                  2 & a && (t.xp6(1), t.Oqu(g.markdown));
              },
              dependencies: [p.r],
              styles: ['[_nghost-%COMP%]{width:80%}'],
            });
          }
          return n;
        })(),
        id: 'markdown-parser',
      });
      let M = (() => {
        class n {
          static ɵfac = function (a) {
            return new (a || n)();
          };
          static ɵmod = t.oAB({ type: n });
          static ɵinj = t.cJS({
            imports: [e.ez, d.LD, c.Ps, l.q, u.WD, r.Bz.forChild(f)],
          });
        }
        return n;
      })();
    },
    39419: (h, m, o) => {
      o.d(m, { A0: () => l });
      var e = o(96814),
        r = o(30617),
        c = (o(21266), o(19212));
      let l = (() => {
        class s {
          static ɵfac = function (i) {
            return new (i || s)();
          };
          static ɵmod = c.oAB({ type: s });
          static ɵinj = c.cJS({ imports: [e.ez, r.Ps] });
        }
        return s;
      })();
    },
  },
]);
