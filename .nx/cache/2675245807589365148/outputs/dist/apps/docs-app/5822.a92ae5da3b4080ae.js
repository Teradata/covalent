(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [5822],
  {
    52514: (Z, l, o) => {
      'use strict';
      o.d(l, { Po: () => y });
      var r = o(96814),
        O = (o(13063), o(19212));
      let y = (() => {
        class m {
          static ɵfac = function (E) {
            return new (E || m)();
          };
          static ɵmod = O.oAB({ type: m });
          static ɵinj = O.cJS({ imports: [r.ez] });
        }
        return m;
      })();
    },
    13063: (Z, l, o) => {
      'use strict';
      o.d(l, { G: () => m, O: () => h });
      var r = o(19212),
        e = o(23421),
        O = o(96814);
      const D = ['toolboxContent'];
      function y(v, E) {}
      let m = (() => {
          class v {
            static ɵfac = function (c) {
              return new (c || v)();
            };
            static ɵdir = r.lG2({
              type: v,
              selectors: [['ng-template', 'tdViewDataFormatter', '']],
            });
          }
          return v;
        })(),
        h = (() => {
          class v {
            _changeDetectorRef;
            _elementRef;
            _optionsService;
            _state = {};
            config = {};
            show = !0;
            trigger;
            orient;
            itemSize;
            itemGap;
            showTitle = !0;
            label;
            feature;
            iconStyle;
            zlevel;
            z;
            transitionDuration = 0.5;
            left = 'auto';
            top = 'auto';
            right = 'auto';
            bottom = 'auto';
            width = 'auto';
            height = 'auto';
            formatterTemplate;
            fullTemplate;
            constructor(t, c, n) {
              (this._changeDetectorRef = t),
                (this._elementRef = c),
                (this._optionsService = n);
            }
            ngOnChanges() {
              this._setOptions();
            }
            ngOnDestroy() {
              this._removeOption();
            }
            _setOptions() {
              this._checkFormatterTemplate();
              const t = (0, e.t8)(
                this._state,
                {
                  show: this.show,
                  name: this.trigger,
                  orient: this.orient,
                  itemSize: this.itemSize,
                  itemGap: this.itemGap,
                  showTitle: this.showTitle,
                  label: this.label,
                  feature: this.feature,
                  iconStyle: this.iconStyle,
                  zlevel: this.zlevel,
                  z: this.z,
                  transitionDuration: this.transitionDuration,
                  left: this.left,
                  top: this.top,
                  right: this.right,
                  bottom: this.bottom,
                  width: this.width,
                  height: this.height,
                },
                this.config ? this.config : {}
              );
              this._optionsService.setOption('toolbox', t);
            }
            _removeOption() {
              this._optionsService.clearOption('toolbox');
            }
            _checkFormatterTemplate() {
              this.formatterTemplate &&
                (this.feature = {
                  ...this.feature,
                  dataView: {
                    ...this.feature?.dataView,
                    optionToContent: this._optionToContentFormatter(),
                  },
                });
            }
            _optionToContentFormatter() {
              return () => (
                this._changeDetectorRef.markForCheck(),
                this._elementRef.nativeElement.innerHTML
              );
            }
            static ɵfac = function (c) {
              return new (c || v)(r.Y36(r.sBO), r.Y36(r.SBq), r.Y36(e.ij));
            };
            static ɵcmp = r.Xpm({
              type: v,
              selectors: [['td-chart-toolbox']],
              contentQueries: function (c, n, i) {
                if ((1 & c && r.Suo(i, m, 5, r.Rgc), 2 & c)) {
                  let u;
                  r.iGM((u = r.CRH())) && (n.formatterTemplate = u.first);
                }
              },
              viewQuery: function (c, n) {
                if ((1 & c && r.Gf(D, 7), 2 & c)) {
                  let i;
                  r.iGM((i = r.CRH())) && (n.fullTemplate = i.first);
                }
              },
              inputs: {
                config: 'config',
                show: 'show',
                trigger: 'trigger',
                orient: 'orient',
                itemSize: 'itemSize',
                itemGap: 'itemGap',
                showTitle: 'showTitle',
                label: 'label',
                feature: 'feature',
                iconStyle: 'iconStyle',
                zlevel: 'zlevel',
                z: 'z',
                transitionDuration: 'transitionDuration',
                left: 'left',
                top: 'top',
                right: 'right',
                bottom: 'bottom',
                width: 'width',
                height: 'height',
              },
              features: [r.TTD],
              decls: 2,
              vars: 1,
              consts: [
                [3, 'ngTemplateOutlet'],
                ['toolboxContent', ''],
              ],
              template: function (c, n) {
                1 & c && r.YNc(0, y, 0, 0, 'ng-template', 0, 1, r.W1O),
                  2 & c && r.Q6J('ngTemplateOutlet', n.formatterTemplate);
              },
              dependencies: [O.tP],
              encapsulation: 2,
              changeDetection: 0,
            });
          }
          return v;
        })();
    },
    10184: function (Z) {
      Z.exports = (function (l) {
        var o = {};
        function r(e) {
          if (o[e]) return o[e].exports;
          var O = (o[e] = { exports: {}, id: e, loaded: !1 });
          return (
            l[e].call(O.exports, O, O.exports, r), (O.loaded = !0), O.exports
          );
        }
        return (r.m = l), (r.c = o), (r.p = ''), r(0);
      })([
        function (l, o, r) {
          var e;
          void 0 !==
            (e = function (O) {
              return {
                clustering: r(1),
                regression: r(5),
                statistics: r(6),
                histogram: r(15),
                transform: {
                  regression: r(18),
                  histogram: r(21),
                  clustering: r(22),
                },
              };
            }.call(o, r, o, l)) && (l.exports = e);
        },
        function (l, o, r) {
          var e;
          void 0 !==
            (e = function (O) {
              var D = r(2),
                y = D.dataPreprocess,
                m = D.normalizeDimensions,
                h = r(3),
                n = r(4),
                v = h.size,
                E = h.sumOfColumn,
                t = h.sum,
                c = h.zeros,
                i = (n = r(4)).isNumber,
                u = Math.pow,
                a = { SINGLE: 'single', MULTIPLE: 'multiple' };
              function f(M, N, T) {
                for (
                  var F,
                    P,
                    R,
                    L,
                    z = c(M.length, 2),
                    C = (function d(M, N) {
                      for (var T = c(M, N.length), z = 0; z < N.length; z++)
                        for (var C = N[z], A = 0; A < M; A++)
                          T[A][z] = C.min + C.span * Math.random();
                      return T;
                    })(N, I(M, T.dimensions)),
                    A = !0;
                  A;

                ) {
                  A = !1;
                  for (var S = 0; S < M.length; S++) {
                    (F = 1 / 0), (P = -1);
                    for (var K = 0; K < N; K++)
                      (R = x(M[S], C[K], T)) < F && ((F = R), (P = K));
                    z[S][0] !== P && (A = !0), (z[S][0] = P), (z[S][1] = F);
                  }
                  for (S = 0; S < N; S++) {
                    for (L = [], K = 0; K < z.length; K++)
                      z[K][0] === S && L.push(M[K]);
                    C[S] = g(L, T);
                  }
                }
                return { centroids: C, clusterAssigned: z };
              }
              function g(M, N) {
                for (var z, T = [], A = 0; A < N.dimensions.length; A++) {
                  var F = N.dimensions[A];
                  z = 0;
                  for (var P = 0; P < M.length; P++) z += M[P][F];
                  T.push(z / M.length);
                }
                return T;
              }
              function p(M, N) {
                var T = N.outputCentroidDimensions;
                if (N.outputType === a.SINGLE && null != T)
                  for (
                    var z = M.data, C = M.centroids, A = 0;
                    A < z.length;
                    A++
                  )
                    for (
                      var F = z[A],
                        R = C[F[N.outputClusterIndexDimension]],
                        L = Math.min(R.length, T.length),
                        S = 0;
                      S < L;
                      S++
                    )
                      F[T[S]] = R[S];
              }
              function x(M, N, T) {
                for (
                  var z = 0, C = T.dimensions, A = T.rawExtents, F = 0;
                  F < C.length;
                  F++
                ) {
                  var P = A[F].span;
                  P && (z += u((M[C[F]] - N[F]) / P, 2));
                }
                return z;
              }
              function I(M, N) {
                for (var T = [], z = N.length, C = 0; C < z; C++)
                  T.push({ min: 1 / 0, max: -1 / 0 });
                for (C = 0; C < M.length; C++)
                  for (var A = M[C], F = 0; F < z; F++) {
                    var P = T[F],
                      R = A[N[F]];
                    P.min > R && (P.min = R), P.max < R && (P.max = R);
                  }
                for (C = 0; C < z; C++) T[C].span = T[C].max - T[C].min;
                return T;
              }
              return {
                OutputType: a,
                hierarchicalKMeans: function s(M, N, T) {
                  var z = (i(N) ? { clusterCount: N, stepByStep: T } : N) || {
                      clusterCount: 2,
                    },
                    C = z.clusterCount;
                  if (!(C < 2)) {
                    var L,
                      S,
                      K,
                      A = (function B(M, N) {
                        var T = v(M);
                        if (T.length < 1)
                          throw new Error(
                            'The input data of clustering should be two-dimension array.'
                          );
                        for (var z = T[1], C = [], A = 0; A < z; A++) C.push(A);
                        var F = m(N.dimensions, C),
                          P = N.outputType || a.MULTIPLE,
                          R = N.outputClusterIndexDimension;
                        if (P === a.SINGLE && !n.isNumber(R))
                          throw new Error(
                            'outputClusterIndexDimension is required as a number.'
                          );
                        return {
                          dimensions: F,
                          rawExtents: I(M, F),
                          outputType: P,
                          outputClusterIndexDimension: R,
                          outputCentroidDimensions: N.outputCentroidDimensions,
                        };
                      })(M, z),
                      F = A.outputType === a.SINGLE,
                      P = y(M, { dimensions: A.dimensions }),
                      R = c(P.length, 2);
                    if (F) {
                      L = [];
                      var nr = A.outputClusterIndexDimension;
                      (S = function (W, V) {
                        L[W][nr] = V;
                      }),
                        (K = function (W) {
                          return L[W][nr];
                        });
                      for (var X = 0; X < P.length; X++)
                        L.push(P[X].slice()), Q(X, 0), S(X, 0);
                    } else
                      (S = function (W, V) {
                        R[W][0] = V;
                      }),
                        (K = function (W) {
                          return R[W][0];
                        });
                    var tr = g(P, A),
                      J = [tr];
                    for (X = 0; X < P.length; X++) Q(X, x(P[X], tr, A));
                    var w,
                      q,
                      j,
                      $,
                      k,
                      _,
                      er = 1,
                      Y = { data: L, centroids: J, isEnd: !1 };
                    if ((F || (Y.clusterAssment = R), z.stepByStep))
                      Y.next = function () {
                        return or(), p(Y, A), Y;
                      };
                    else for (; or(), !Y.isEnd; );
                    return p(Y, A), Y;
                  }
                  function Q(W, V) {
                    R[W][1] = V;
                  }
                  function b(W) {
                    return R[W][1];
                  }
                  function or() {
                    if (er < C) {
                      w = 1 / 0;
                      for (var W, V, H, G = 0; G < J.length; G++) {
                        (q = []), (j = []);
                        for (var U = 0; U < P.length; U++)
                          K(U) === G ? q.push(P[U]) : j.push(b(U));
                        ($ = f(q, 2, A)),
                          (k = E($.clusterAssigned, 1)),
                          (_ = t(j)),
                          k + _ < w &&
                            ((w = _ + k),
                            (W = G),
                            (V = $.centroids),
                            (H = $.clusterAssigned));
                      }
                      for (U = 0; U < H.length; U++)
                        0 === H[U][0]
                          ? (H[U][0] = W)
                          : 1 === H[U][0] && (H[U][0] = J.length);
                      for (
                        J[W] = V[0], J.push(V[1]), U = 0, G = 0;
                        U < P.length && G < H.length;
                        U++
                      )
                        K(U) === W && (S(U, H[G][0]), Q(U, H[G++][1]));
                      var rr = [];
                      if (!F) {
                        for (U = 0; U < J.length; U++)
                          for (rr[U] = [], G = 0; G < P.length; G++)
                            K(G) === U && rr[U].push(P[G]);
                        Y.pointsInCluster = rr;
                      }
                      er++;
                    } else Y.isEnd = !0;
                  }
                },
              };
            }.call(o, r, o, l)) && (l.exports = e);
        },
        function (l, o, r) {
          var e;
          void 0 !==
            (e = function (O) {
              var D = r(3),
                y = D.isArray,
                m = D.size,
                v = r(4).isNumber;
              return {
                normalizeDimensions: function E(n, i) {
                  return 'number' == typeof n ? [n] : n ?? i;
                },
                dataPreprocess: function t(n, i) {
                  var u = (i = i || {}).dimensions,
                    a = {};
                  if (null != u)
                    for (var f = 0; f < u.length; f++) a[u[f]] = !0;
                  var g = i.toOneDimensionArray ? (u ? u[0] : 0) : null;
                  if (!y(n))
                    throw new Error(
                      'Invalid data type, you should input an array'
                    );
                  var M,
                    p = [],
                    d = m(n);
                  if (1 === d.length)
                    for (f = 0; f < d[0]; f++) v((x = n[f])) && p.push(x);
                  else if (2 === d.length)
                    for (f = 0; f < d[0]; f++) {
                      for (var B = !0, x = n[f], I = 0; I < d[1]; I++)
                        (M = I),
                          (!u || a.hasOwnProperty(M)) && !v(x[I]) && (B = !1);
                      B && p.push(null != g ? x[g] : x);
                    }
                  return p;
                },
                getPrecision: function c(n) {
                  var i = n.toString(),
                    u = i.indexOf('.');
                  return u < 0 ? 0 : i.length - 1 - u;
                },
              };
            }.call(o, r, o, l)) && (l.exports = e);
        },
        function (l, o, r) {
          var e;
          void 0 !==
            (e = function (O) {
              var D = Object.prototype.toString,
                m = Array.prototype.map;
              function v(a) {
                return '[object Array]' === D.call(a);
              }
              function n(a, f) {
                return a > f ? 1 : a < f ? -1 : a === f ? 0 : NaN;
              }
              return {
                size: function h(a) {
                  for (var f = []; v(a); ) f.push(a.length), (a = a[0]);
                  return f;
                },
                isArray: v,
                zeros: function E(a, f) {
                  for (var g = [], s = 0; s < a; s++) {
                    g[s] = [];
                    for (var p = 0; p < f; p++) g[s][p] = 0;
                  }
                  return g;
                },
                sum: function t(a) {
                  for (var f = 0, g = 0; g < a.length; g++) f += a[g];
                  return f;
                },
                sumOfColumn: function c(a, f) {
                  for (var g = 0, s = 0; s < a.length; s++) g += a[s][f];
                  return g;
                },
                ascending: n,
                bisect: function i(a, f, g, s) {
                  for (
                    null == g && (g = 0), null == s && (s = a.length);
                    g < s;

                  ) {
                    var p = Math.floor((g + s) / 2),
                      d = n(a[p], f);
                    if (d > 0) s = p;
                    else {
                      if (!(d < 0)) return p + 1;
                      g = p + 1;
                    }
                  }
                  return g;
                },
                map: function u(a, f, g) {
                  if (a && f) {
                    if (a.map && a.map === m) return a.map(f, g);
                    for (var s = [], p = 0, d = a.length; p < d; p++)
                      s.push(f.call(g, a[p], p, a));
                    return s;
                  }
                },
              };
            }.call(o, r, o, l)) && (l.exports = e);
        },
        function (l, o, r) {
          var e;
          void 0 !==
            (e = function (O) {
              return {
                isNumber: function D(h) {
                  return (
                    'number' == typeof (h = null === h ? NaN : +h) && !isNaN(h)
                  );
                },
                isInteger: function y(h) {
                  return isFinite(h) && h === Math.round(h);
                },
                quantityExponent: function m(h) {
                  if (0 === h) return 0;
                  var v = Math.floor(Math.log(h) / Math.LN10);
                  return h / Math.pow(10, v) >= 10 && v++, v;
                },
              };
            }.call(o, r, o, l)) && (l.exports = e);
        },
        function (l, o, r) {
          var e;
          void 0 !==
            (e = function (O) {
              var D = r(2),
                y = D.dataPreprocess,
                m = D.normalizeDimensions,
                h = {
                  linear: function (t, c) {
                    for (
                      var n = c.dimensions[0],
                        i = c.dimensions[1],
                        u = 0,
                        a = 0,
                        f = 0,
                        g = 0,
                        s = t.length,
                        p = 0;
                      p < s;
                      p++
                    )
                      (u += (d = t[p])[n]),
                        (a += d[i]),
                        (f += d[n] * d[i]),
                        (g += d[n] * d[n]);
                    for (
                      var x = (s * f - u * a) / (s * g - u * u),
                        B = a / s - (x * u) / s,
                        I = [],
                        M = 0;
                      M < t.length;
                      M++
                    ) {
                      var d,
                        N = (d = t[M]).slice();
                      (N[n] = d[n]), (N[i] = x * d[n] + B), I.push(N);
                    }
                    return {
                      points: I,
                      parameter: { gradient: x, intercept: B },
                      expression:
                        'y = ' +
                        Math.round(100 * x) / 100 +
                        'x + ' +
                        Math.round(100 * B) / 100,
                    };
                  },
                  linearThroughOrigin: function (t, c) {
                    for (
                      var n = c.dimensions[0],
                        i = c.dimensions[1],
                        u = 0,
                        a = 0,
                        f = 0;
                      f < t.length;
                      f++
                    )
                      (u += (g = t[f])[n] * g[n]), (a += g[n] * g[i]);
                    for (var s = a / u, p = [], d = 0; d < t.length; d++) {
                      var g,
                        x = (g = t[d]).slice();
                      (x[n] = g[n]), (x[i] = g[n] * s), p.push(x);
                    }
                    return {
                      points: p,
                      parameter: { gradient: s },
                      expression: 'y = ' + Math.round(100 * s) / 100 + 'x',
                    };
                  },
                  exponential: function (t, c) {
                    for (
                      var n = c.dimensions[0],
                        i = c.dimensions[1],
                        a = 0,
                        f = 0,
                        g = 0,
                        s = 0,
                        p = 0,
                        d = 0;
                      d < t.length;
                      d++
                    )
                      (a += (x = t[d])[i]),
                        (p += x[n] * x[i]),
                        (f += x[n] * x[n] * x[i]),
                        (g += x[i] * Math.log(x[i])),
                        (s += x[n] * x[i] * Math.log(x[i]));
                    for (
                      var B = a * f - p * p,
                        I = Math.pow(Math.E, (f * g - p * s) / B),
                        M = (a * s - p * g) / B,
                        N = [],
                        T = 0;
                      T < t.length;
                      T++
                    ) {
                      var x,
                        z = (x = t[T]).slice();
                      (z[n] = x[n]),
                        (z[i] = I * Math.pow(Math.E, M * x[n])),
                        N.push(z);
                    }
                    return {
                      points: N,
                      parameter: { coefficient: I, index: M },
                      expression:
                        'y = ' +
                        Math.round(100 * I) / 100 +
                        'e^(' +
                        Math.round(100 * M) / 100 +
                        'x)',
                    };
                  },
                  logarithmic: function (t, c) {
                    for (
                      var n = c.dimensions[0],
                        i = c.dimensions[1],
                        u = 0,
                        a = 0,
                        f = 0,
                        g = 0,
                        s = 0;
                      s < t.length;
                      s++
                    ) {
                      var p = t[s];
                      (u += Math.log(p[n])),
                        (a += p[i] * Math.log(p[n])),
                        (f += p[i]),
                        (g += Math.pow(Math.log(p[n]), 2));
                    }
                    for (
                      var d = (s * a - f * u) / (s * g - u * u),
                        x = (f - d * u) / s,
                        B = [],
                        I = 0;
                      I < t.length;
                      I++
                    ) {
                      var M = (p = t[I]).slice();
                      (M[n] = p[n]), (M[i] = d * Math.log(p[n]) + x), B.push(M);
                    }
                    return {
                      points: B,
                      parameter: { gradient: d, intercept: x },
                      expression:
                        'y = ' +
                        Math.round(100 * x) / 100 +
                        ' + ' +
                        Math.round(100 * d) / 100 +
                        'ln(x)',
                    };
                  },
                  polynomial: function (t, c) {
                    var n = c.dimensions[0],
                      i = c.dimensions[1],
                      u = c.order;
                    null == u && (u = 2);
                    for (var a = [], f = [], g = u + 1, s = 0; s < g; s++) {
                      for (var p = 0, d = 0; d < t.length; d++)
                        p += (x = t[d])[i] * Math.pow(x[n], s);
                      f.push(p);
                      for (var B = [], I = 0; I < g; I++) {
                        for (var M = 0, N = 0; N < t.length; N++)
                          M += Math.pow(t[N][n], s + I);
                        B.push(M);
                      }
                      a.push(B);
                    }
                    a.push(f);
                    var T = (function v(t, c) {
                        for (var n = 0; n < t.length - 1; n++) {
                          for (var i = n, u = n + 1; u < t.length - 1; u++)
                            Math.abs(t[n][u]) > Math.abs(t[n][i]) && (i = u);
                          for (var a = n; a < t.length; a++) {
                            var f = t[a][n];
                            (t[a][n] = t[a][i]), (t[a][i] = f);
                          }
                          for (var g = n + 1; g < t.length - 1; g++)
                            for (var s = t.length - 1; s >= n; s--)
                              t[s][g] -= (t[s][n] / t[n][n]) * t[n][g];
                        }
                        var p = new Array(c),
                          d = t.length - 1;
                        for (u = t.length - 2; u >= 0; u--) {
                          for (f = 0, n = u + 1; n < t.length - 1; n++)
                            f += t[n][u] * p[n];
                          p[u] = (t[d][u] - f) / t[u][u];
                        }
                        return p;
                      })(a, g),
                      z = [];
                    for (s = 0; s < t.length; s++) {
                      var C = 0,
                        x = t[s];
                      for (d = 0; d < T.length; d++)
                        C += T[d] * Math.pow(x[n], d);
                      var A = x.slice();
                      (A[n] = x[n]), (A[i] = C), z.push(A);
                    }
                    var F = 'y = ';
                    for (s = T.length - 1; s >= 0; s--)
                      F +=
                        s > 1
                          ? Math.round(T[s] * Math.pow(10, s + 1)) /
                              Math.pow(10, s + 1) +
                            'x^' +
                            s +
                            ' + '
                          : 1 === s
                          ? Math.round(100 * T[s]) / 100 + 'x + '
                          : Math.round(100 * T[s]) / 100;
                    return { points: z, parameter: T, expression: F };
                  },
                };
              return function (t, c, n) {
                var i = 'number' == typeof n ? { order: n } : n || {},
                  u = m(i.dimensions, [0, 1]),
                  a = y(c, { dimensions: u }),
                  f = h[t](a, { order: i.order, dimensions: u }),
                  g = u[0];
                return (
                  f.points.sort(function (s, p) {
                    return s[g] - p[g];
                  }),
                  f
                );
              };
            }.call(o, r, o, l)) && (l.exports = e);
        },
        function (l, o, r) {
          var e;
          void 0 !==
            (e = function (O) {
              var D = {};
              return (
                (D.max = r(7)),
                (D.deviation = r(8)),
                (D.mean = r(10)),
                (D.median = r(12)),
                (D.min = r(14)),
                (D.quantile = r(13)),
                (D.sampleVariance = r(9)),
                (D.sum = r(11)),
                D
              );
            }.call(o, r, o, l)) && (l.exports = e);
        },
        function (l, o, r) {
          var e;
          void 0 !==
            (e = function (O) {
              var y = r(4).isNumber;
              return function m(h) {
                for (var v = -1 / 0, E = 0; E < h.length; E++)
                  y(h[E]) && h[E] > v && (v = h[E]);
                return v;
              };
            }.call(o, r, o, l)) && (l.exports = e);
        },
        function (l, o, r) {
          var e;
          void 0 !==
            (e = function (O) {
              var D = r(9);
              return function (y) {
                var m = D(y);
                return m && Math.sqrt(m);
              };
            }.call(o, r, o, l)) && (l.exports = e);
        },
        function (l, o, r) {
          var e;
          void 0 !==
            (e = function (O) {
              var y = r(4).isNumber,
                m = r(10);
              return function h(v) {
                var E = v.length;
                if (!E || E < 2) return 0;
                if (v.length >= 2) {
                  for (var n, t = m(v), c = 0, i = 0; i < v.length; i++)
                    y(v[i]) && (c += (n = v[i] - t) * n);
                  return c / (v.length - 1);
                }
              };
            }.call(o, r, o, l)) && (l.exports = e);
        },
        function (l, o, r) {
          var e;
          void 0 !==
            (e = function (O) {
              var D = r(11);
              return function y(m) {
                return m.length ? D(m) / m.length : 0;
              };
            }.call(o, r, o, l)) && (l.exports = e);
        },
        function (l, o, r) {
          var e;
          void 0 !==
            (e = function (O) {
              var y = r(4).isNumber;
              return function m(h) {
                var v = h.length;
                if (!v) return 0;
                for (var E = 0, t = 0; t < v; t++) y(h[t]) && (E += h[t]);
                return E;
              };
            }.call(o, r, o, l)) && (l.exports = e);
        },
        function (l, o, r) {
          var e;
          void 0 !==
            (e = function (O) {
              var D = r(13);
              return function y(m) {
                return D(m, 0.5);
              };
            }.call(o, r, o, l)) && (l.exports = e);
        },
        function (l, o, r) {
          var e;
          void 0 !==
            (e = function (O) {
              return function (D, y) {
                var m = D.length;
                if (!m) return 0;
                if (y <= 0 || m < 2) return D[0];
                if (y >= 1) return D[m - 1];
                var h = (m - 1) * y,
                  v = Math.floor(h),
                  E = D[v];
                return E + (D[v + 1] - E) * (h - v);
              };
            }.call(o, r, o, l)) && (l.exports = e);
        },
        function (l, o, r) {
          var e;
          void 0 !==
            (e = function (O) {
              var y = r(4).isNumber;
              return function m(h) {
                for (var v = 1 / 0, E = 0; E < h.length; E++)
                  y(h[E]) && h[E] < v && (v = h[E]);
                return v;
              };
            }.call(o, r, o, l)) && (l.exports = e);
        },
        function (l, o, r) {
          var e;
          void 0 !==
            (e = function (O) {
              var D = r(7),
                y = r(14),
                m = r(13),
                h = r(8),
                v = r(2),
                E = v.dataPreprocess,
                t = v.normalizeDimensions,
                c = r(3),
                n = c.ascending,
                i = c.map,
                u = r(16),
                a = c.bisect,
                f = r(17);
              var s = {
                squareRoot: function (p) {
                  var d = Math.ceil(Math.sqrt(p.length));
                  return d > 50 ? 50 : d;
                },
                scott: function (p, d, x) {
                  return Math.ceil(
                    (x - d) / (3.5 * h(p) * Math.pow(p.length, -1 / 3))
                  );
                },
                freedmanDiaconis: function (p, d, x) {
                  return (
                    p.sort(n),
                    Math.ceil(
                      (x - d) /
                        (2 *
                          (m(p, 0.75) - m(p, 0.25)) *
                          Math.pow(p.length, -1 / 3))
                    )
                  );
                },
                sturges: function (p) {
                  return Math.ceil(Math.log(p.length) / Math.LN2) + 1;
                },
              };
              return function g(K, d) {
                for (
                  var x = 'string' == typeof d ? { method: d } : d || {},
                    B = null == x.method ? s.squareRoot : s[x.method],
                    I = t(x.dimensions),
                    M = E(K, { dimensions: I, toOneDimensionArray: !0 }),
                    N = D(M),
                    T = y(M),
                    z = B(M, T, N),
                    C = f(T, N, z),
                    A = C.step,
                    F = C.toFixedPrecision,
                    P = u(
                      +(Math.ceil(T / A) * A).toFixed(F),
                      +(Math.floor(N / A) * A).toFixed(F),
                      A,
                      F
                    ),
                    R = P.length,
                    L = new Array(R + 1),
                    S = 0;
                  S <= R;
                  S++
                )
                  (L[S] = {}),
                    (L[S].sample = []),
                    (L[S].x0 =
                      S > 0 ? P[S - 1] : P[S] - T === A ? T : P[S] - A),
                    (L[S].x1 =
                      S < R ? P[S] : N - P[S - 1] === A ? N : P[S - 1] + A);
                for (S = 0; S < M.length; S++)
                  T <= M[S] &&
                    M[S] <= N &&
                    L[a(P, M[S], 0, R)].sample.push(M[S]);
                return {
                  bins: L,
                  data: (K = i(L, function (b) {
                    return [
                      +((b.x0 + b.x1) / 2).toFixed(F),
                      b.sample.length,
                      b.x0,
                      b.x1,
                      b.x0 + ' - ' + b.x1,
                    ];
                  })),
                  customData: i(L, function (b) {
                    return [b.x0, b.x1, b.sample.length];
                  }),
                };
              };
            }.call(o, r, o, l)) && (l.exports = e);
        },
        function (l, o, r) {
          var e;
          (e = function (O) {
            var y = r(2).getPrecision;
            return function (m, h, v, E) {
              var t = arguments.length;
              t < 2
                ? ((h = m), (m = 0), (v = 1))
                : t < 3
                ? (v = 1)
                : (E = t < 4 ? y((v = +v)) : +E);
              for (
                var c = Math.ceil(((h - m) / v).toFixed(E)),
                  n = new Array(c + 1),
                  i = 0;
                i < c + 1;
                i++
              )
                n[i] = +(m + i * v).toFixed(E);
              return n;
            };
          }.call(o, r, o, l)),
            void 0 !== e && (l.exports = e);
        },
        function (l, o, r) {
          var e;
          void 0 !==
            (e = function (O) {
              var D = r(4);
              return function (y, m, h) {
                var v = Math.abs(m - y) / h,
                  E = D.quantityExponent(v),
                  t = Math.pow(10, E),
                  c = v / t;
                c >= Math.sqrt(50)
                  ? (t *= 10)
                  : c >= Math.sqrt(10)
                  ? (t *= 5)
                  : c >= Math.sqrt(2) && (t *= 2);
                var n = E < 0 ? -E : 0;
                return {
                  step: +(m >= y ? t : -t).toFixed(n),
                  toFixedPrecision: n,
                };
              };
            }.call(o, r, o, l)) && (l.exports = e);
        },
        function (l, o, r) {
          var e;
          void 0 !==
            (e = function (O) {
              var D = r(5),
                y = r(19);
              return {
                type: 'ecStat:regression',
                transform: function (v) {
                  var a,
                    E = v.upstream,
                    t = v.config || {},
                    n = D(t.method || 'linear', E.cloneRawData(), {
                      order: t.order,
                      dimensions: y.normalizeExistingDimensions(
                        v,
                        t.dimensions
                      ),
                    }),
                    i = n.points,
                    u = t.formulaOn;
                  if ((null == u && (u = 'end'), 'none' !== u)) {
                    for (var f = 0; f < i.length; f++)
                      i[f][2] =
                        ('start' === u && 0 === f) ||
                        'all' === u ||
                        ('end' === u && f === i.length - 1)
                          ? n.expression
                          : '';
                    (a = E.cloneAllDimensionInfo())[2] = {};
                  }
                  return [{ dimensions: a, data: i }];
                },
              };
            }.call(o, r, o, l)) && (l.exports = e);
        },
        function (l, o, r) {
          var e;
          void 0 !==
            (e = function (O) {
              var D = r(3),
                y = r(4),
                m = r(20);
              return {
                normalizeExistingDimensions: function h(E, t) {
                  if (null != t) {
                    var c = E.upstream;
                    if (D.isArray(t)) {
                      for (var n = [], i = 0; i < t.length; i++) {
                        var u;
                        a((u = c.getDimensionInfo(t[i])), t[i]),
                          (n[i] = u.index);
                      }
                      return n;
                    }
                    return a((u = c.getDimensionInfo(t)), t), u.index;
                  }
                  function a(f, g) {
                    if (!f) throw new Error('Can not find dimension by ' + g);
                  }
                },
                normalizeNewDimensions: function v(E) {
                  if (D.isArray(E)) {
                    for (var t = [], c = [], n = 0; n < E.length; n++) {
                      var i = u(E[n]);
                      t.push(i.name), c.push(i.index);
                    }
                    return { name: t, index: c };
                  }
                  if (null != E) return u(E);
                  function u(a) {
                    if (y.isNumber(a)) return { index: a };
                    if (m.isObject(a) && y.isNumber(a.index)) return a;
                    throw new Error(
                      'Illegle new dimensions config. Expect `{ name: string, index: number }`.'
                    );
                  }
                },
              };
            }.call(o, r, o, l)) && (l.exports = e);
        },
        function (l, o, r) {
          var e;
          void 0 !==
            (e = function (O) {
              return {
                extend: function D(m, h) {
                  if (Object.assign) Object.assign(m, h);
                  else for (var v in h) h.hasOwnProperty(v) && (m[v] = h[v]);
                  return m;
                },
                isObject: function y(m) {
                  const h = typeof m;
                  return 'function' === h || (!!m && 'object' === h);
                },
              };
            }.call(o, r, o, l)) && (l.exports = e);
        },
        function (l, o, r) {
          var e;
          void 0 !==
            (e = function (O) {
              var D = r(15),
                y = r(19);
              return {
                type: 'ecStat:histogram',
                transform: function (h) {
                  var E = h.config || {},
                    t = D(h.upstream.cloneRawData(), {
                      method: E.method,
                      dimensions: y.normalizeExistingDimensions(
                        h,
                        E.dimensions
                      ),
                    });
                  return [
                    {
                      dimensions: [
                        'MeanOfV0V1',
                        'VCount',
                        'V0',
                        'V1',
                        'DisplayableName',
                      ],
                      data: t.data,
                    },
                    { data: t.customData },
                  ];
                },
              };
            }.call(o, r, o, l)) && (l.exports = e);
        },
        function (l, o, r) {
          var e;
          void 0 !==
            (e = function (O) {
              var D = r(1),
                y = r(4),
                m = r(19),
                h = y.isNumber;
              return {
                type: 'ecStat:clustering',
                transform: function (E) {
                  var t = E.upstream,
                    c = E.config || {},
                    n = c.clusterCount;
                  if (!h(n) || n <= 0)
                    throw new Error(
                      'config param "clusterCount" need to be specified as an interger greater than 1.'
                    );
                  if (1 === n) return [{}, { data: [] }];
                  var i = m.normalizeNewDimensions(
                      c.outputClusterIndexDimension
                    ),
                    u = m.normalizeNewDimensions(c.outputCentroidDimensions);
                  if (null == i)
                    throw new Error(
                      'outputClusterIndexDimension is required as a number.'
                    );
                  for (
                    var a = D.hierarchicalKMeans(t.cloneRawData(), {
                        clusterCount: n,
                        stepByStep: !1,
                        dimensions: m.normalizeExistingDimensions(
                          E,
                          c.dimensions
                        ),
                        outputType: D.OutputType.SINGLE,
                        outputClusterIndexDimension: i.index,
                        outputCentroidDimensions: (u || {}).index,
                      }),
                      f = t.cloneAllDimensionInfo(),
                      g = [],
                      s = 0;
                    s < f.length;
                    s++
                  )
                    g.push(f[s].name);
                  if (((g[i.index] = i.name), u))
                    for (s = 0; s < u.index.length; s++)
                      null != u.name[s] && (g[u.index[s]] = u.name[s]);
                  return [
                    { dimensions: g, data: a.data },
                    { data: a.centroids },
                  ];
                },
              };
            }.call(o, r, o, l)) && (l.exports = e);
        },
      ]);
    },
    45178: (Z, l, o) => {
      Z.exports = o(10184);
    },
  },
]);
