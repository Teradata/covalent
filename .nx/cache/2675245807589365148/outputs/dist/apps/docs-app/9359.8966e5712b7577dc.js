'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [9359],
  {
    76093: (u, e, t) => {
      t.r(e), t.d(e, { LoadingDemoModule: () => J });
      var c = t(96814),
        s = t(56223),
        r = t(52787),
        i = t(32296),
        S = t(95195),
        m = t(26385),
        a = t(64170),
        L = t(30617),
        f = t(2032),
        y = t(59038),
        h = t(82599),
        p = t(74104),
        l = t(24076),
        C = t(96942),
        T = t(80549),
        D = t(75068),
        o = t(19212),
        M = t(35218);
      function x(n, N) {
        1 & n &&
          (o.TgZ(0, 'div')(1, 'div', 3),
          o._uU(2, 'loading content...'),
          o.qZA()());
      }
      let A = (() => {
        class n {
          _loadingService;
          overlayStarSyntax = !1;
          loadingMode = l.s3;
          loadingStrategy = l.I0;
          loadingType = l.Fq;
          constructor(g) {
            this._loadingService = g;
          }
          toggleOverlayStarSyntax() {
            (this.overlayStarSyntax = !this.overlayStarSyntax),
              this.overlayStarSyntax
                ? this._loadingService.register('overlayStarSyntax')
                : this._loadingService.resolve('overlayStarSyntax');
          }
          static ɵfac = function (d) {
            return new (d || n)(o.Y36(l.bI));
          };
          static ɵcmp = o.Xpm({
            type: n,
            selectors: [['loading-demo']],
            decls: 4,
            vars: 5,
            consts: [
              [
                4,
                'tdLoading',
                'tdLoadingMode',
                'tdLoadingType',
                'tdLoadingStrategy',
                'tdLoadingColor',
              ],
              ['layout', 'row'],
              [
                'mat-raised-button',
                '',
                'color',
                'primary',
                1,
                'text-upper',
                3,
                'click',
              ],
              [1, 'pad', 'text-center'],
            ],
            template: function (d, v) {
              1 & d &&
                (o.YNc(0, x, 3, 0, 'div', 0),
                o.TgZ(1, 'div', 1)(2, 'button', 2),
                o.NdJ('click', function () {
                  return v.toggleOverlayStarSyntax();
                }),
                o._uU(3, ' Toggle Loader '),
                o.qZA()()),
                2 & d &&
                  o.Q6J('tdLoading', 'overlayStarSyntax')(
                    'tdLoadingMode',
                    v.loadingMode.Indeterminate
                  )('tdLoadingType', v.loadingType.Circular)(
                    'tdLoadingStrategy',
                    v.loadingStrategy.Overlay
                  )('tdLoadingColor', 'accent');
            },
            dependencies: [i.lW, M.O],
            data: { animation: [D.kh] },
            changeDetection: 0,
          });
        }
        return n;
      })();
      var B = t(41257),
        F = t(22497);
      const I = (0, T.ng)({ overviewDemoComponent: A, id: 'loading' });
      let J = (() => {
        class n {
          static ɵfac = function (d) {
            return new (d || n)();
          };
          static ɵmod = o.oAB({ type: n });
          static ɵinj = o.cJS({
            imports: [
              c.ez,
              s.u5,
              s.UX,
              i.ot,
              S.QW,
              m.t,
              a.lN,
              L.Ps,
              f.c,
              y.ie,
              h.rP,
              p.Nh,
              B.m,
              F.q,
              C.B,
              l._,
              r.Bz.forChild(I),
            ],
          });
        }
        return n;
      })();
    },
    39419: (u, e, t) => {
      t.d(e, { A0: () => m });
      var c = t(96814),
        s = t(30617),
        i = (t(21266), t(19212));
      let m = (() => {
        class a {
          static ɵfac = function (y) {
            return new (y || a)();
          };
          static ɵmod = i.oAB({ type: a });
          static ɵinj = i.cJS({ imports: [c.ez, s.Ps] });
        }
        return a;
      })();
    },
  },
]);
