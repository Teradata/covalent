'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [8391],
  {
    78391: (B, c, o) => {
      o.r(c), o.d(c, { HistogramDemoModule: () => H });
      var i = o(96814),
        d = o(98525),
        l = o(30617),
        r = o(23421),
        e = o(81924),
        p = o(5965),
        v = o(80232),
        g = o(57337),
        u = o(52514),
        h = o(97974),
        n = o(52787),
        s = o(19212),
        f = o(42932),
        y = o(31791);
      const D = [
        {
          path: '',
          component: (() => {
            class t {
              static ɵfac = function (m) {
                return new (m || t)();
              };
              static ɵcmp = s.Xpm({
                type: t,
                selectors: [['histogram-demo']],
                decls: 2,
                vars: 2,
                consts: [[3, 'demoId', 'demoTitle']],
                template: function (m, A) {
                  1 & m &&
                    (s.TgZ(0, 'demo-component', 0),
                    s._UZ(1, 'histogram-demo-basic'),
                    s.qZA()),
                    2 & m &&
                      s.Q6J('demoId', 'histogram-demo-basic')(
                        'demoTitle',
                        'Basic'
                      );
                },
                dependencies: [f.w, y.z],
              });
            }
            return t;
          })(),
        },
      ];
      let C = (() => {
        class t {
          static ɵfac = function (m) {
            return new (m || t)();
          };
          static ɵmod = s.oAB({ type: t });
          static ɵinj = s.cJS({ imports: [n.Bz.forChild(D), n.Bz] });
        }
        return t;
      })();
      var F = o(96535);
      let H = (() => {
        class t {
          static ɵfac = function (m) {
            return new (m || t)();
          };
          static ɵmod = s.oAB({ type: t });
          static ɵinj = s.cJS({
            imports: [
              h.L,
              F.l,
              C,
              r.MX,
              e.Uy,
              p.FA,
              v.Fh,
              g.NF,
              u.Po,
              i.ez,
              d.LD,
              l.Ps,
            ],
          });
        }
        return t;
      })();
    },
  },
]);
