'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [7022],
  {
    11951: (Ht, je, x) => {
      x.d(je, { f: () => oe });
      var De = x(96814),
        B = x(24549),
        ue = x(32296),
        fe = x(19212);
      let oe = (() => {
        class we {
          static ɵfac = function (ke) {
            return new (ke || we)();
          };
          static ɵmod = fe.oAB({ type: we });
          static ɵinj = fe.cJS({ imports: [De.ez, B.JB, ue.ot] });
        }
        return we;
      })();
    },
    12814: (Ht, je, x) => {
      x.d(je, { k: () => fe });
      var De = x(24549),
        B = x(19212),
        ue = x(32296);
      let fe = (() => {
        class oe {
          _guidedTourService;
          constructor(z) {
            this._guidedTourService = z;
          }
          ngOnInit() {
            this._guidedTourService.registerTour('basicDemoTour', {
              useModalOverlay: !0,
              steps: [
                {
                  title: 'Fuel',
                  text: 'Here are the fuel levels',
                  attachTo: { element: '#basic-demo #fuel', on: 'top' },
                },
                {
                  title: 'Oxygen',
                  text: 'Here are the Oxygen levels.',
                  attachTo: { element: '#basic-demo #oxygen', on: 'top' },
                },
                {
                  title: 'Global status',
                  text: 'Here you can see the global status of the vehicle. That is all there is to it!',
                  attachTo: { element: '#basic-demo #status', on: 'top' },
                },
              ],
            });
          }
          startTour() {
            this._guidedTourService.startTour('basicDemoTour');
          }
          static ɵfac = function (Oe) {
            return new (Oe || oe)(B.Y36(De.gd));
          };
          static ɵcmp = B.Xpm({
            type: oe,
            selectors: [['guided-tour-demo-basic']],
            decls: 8,
            vars: 0,
            consts: [
              ['id', 'basic-demo'],
              ['mat-raised-button', '', 'color', 'accent', 3, 'click'],
              [
                'id',
                'fuel',
                'min',
                '0',
                'max',
                '100',
                'low',
                '33',
                'high',
                '66',
                'optimum',
                '50',
                'value',
                '50',
              ],
              ['id', 'oxygen', 'max', '100', 'value', '70'],
              ['id', 'status'],
            ],
            template: function (Oe, ke) {
              1 & Oe &&
                (B.TgZ(0, 'div', 0)(1, 'button', 1),
                B.NdJ('click', function () {
                  return ke.startTour();
                }),
                B._uU(2, ' Start tour '),
                B.qZA(),
                B._UZ(3, 'meter', 2),
                B.TgZ(4, 'progress', 3),
                B._uU(5, '70%'),
                B.qZA(),
                B.TgZ(6, 'marquee', 4),
                B._uU(7, 'All systems are running smoothly'),
                B.qZA()());
            },
            dependencies: [ue.lW],
            styles: [
              'button[_ngcontent-%COMP%], marquee[_ngcontent-%COMP%], meter[_ngcontent-%COMP%], progress[_ngcontent-%COMP%]{margin-bottom:1em}marquee[_ngcontent-%COMP%], meter[_ngcontent-%COMP%], progress[_ngcontent-%COMP%]{display:block;width:100%}',
            ],
          });
        }
        return oe;
      })();
    },
    24549: (Ht, je, x) => {
      x.d(je, { JB: () => Si, gd: () => Dn, eQ: () => Y });
      var De = x(96814),
        B = x(15861),
        ue = x(52787),
        fe = x(32181),
        oe = x(99397),
        we = x(37398),
        z = x(92438),
        Oe = x(83620),
        ke = function (e) {
          return (
            (function Nt(t) {
              return !!t && 'object' == typeof t;
            })(e) &&
            !(function Xn(t) {
              var e = Object.prototype.toString.call(t);
              return (
                '[object RegExp]' === e ||
                '[object Date]' === e ||
                (function Kn(t) {
                  return t.$$typeof === zn;
                })(t)
              );
            })(e)
          );
        },
        zn =
          'function' == typeof Symbol && Symbol.for
            ? Symbol.for('react.element')
            : 60103;
      function Fe(t, e) {
        return !1 !== e.clone && e.isMergeableObject(t)
          ? Te(
              (function Zn(t) {
                return Array.isArray(t) ? [] : {};
              })(t),
              t,
              e
            )
          : t;
      }
      function Jn(t, e, n) {
        return t.concat(e).map(function (r) {
          return Fe(r, n);
        });
      }
      function $t(t) {
        return Object.keys(t).concat(
          (function Qn(t) {
            return Object.getOwnPropertySymbols
              ? Object.getOwnPropertySymbols(t).filter(function (e) {
                  return t.propertyIsEnumerable(e);
                })
              : [];
          })(t)
        );
      }
      function Wt(t, e) {
        try {
          return e in t;
        } catch {
          return !1;
        }
      }
      function Te(t, e, n) {
        ((n = n || {}).arrayMerge = n.arrayMerge || Jn),
          (n.isMergeableObject = n.isMergeableObject || ke),
          (n.cloneUnlessOtherwiseSpecified = Fe);
        var r = Array.isArray(e);
        return r === Array.isArray(t)
          ? r
            ? n.arrayMerge(t, e, n)
            : (function tr(t, e, n) {
                var r = {};
                return (
                  n.isMergeableObject(t) &&
                    $t(t).forEach(function (o) {
                      r[o] = Fe(t[o], n);
                    }),
                  $t(e).forEach(function (o) {
                    (function er(t, e) {
                      return (
                        Wt(t, e) &&
                        !(
                          Object.hasOwnProperty.call(t, e) &&
                          Object.propertyIsEnumerable.call(t, e)
                        )
                      );
                    })(t, o) ||
                      (r[o] =
                        Wt(t, o) && n.isMergeableObject(e[o])
                          ? (function qn(t, e) {
                              if (!e.customMerge) return Te;
                              var n = e.customMerge(t);
                              return 'function' == typeof n ? n : Te;
                            })(o, n)(t[o], e[o], n)
                          : Fe(e[o], n));
                  }),
                  r
                );
              })(t, e, n)
          : Fe(e, n);
      }
      Te.all = function (e, n) {
        if (!Array.isArray(e))
          throw new Error('first argument should be an array');
        return e.reduce(function (r, o) {
          return Te(r, o, n);
        }, {});
      };
      var rr = Te;
      function mt(t) {
        return t instanceof HTMLElement;
      }
      function _e(t) {
        return 'function' == typeof t;
      }
      function He(t) {
        return 'string' == typeof t;
      }
      function R(t) {
        return void 0 === t;
      }
      class gt {
        on(e, n, r, o) {
          return (
            void 0 === o && (o = !1),
            R(this.bindings) && (this.bindings = {}),
            R(this.bindings[e]) && (this.bindings[e] = []),
            this.bindings[e].push({ handler: n, ctx: r, once: o }),
            this
          );
        }
        once(e, n, r) {
          return this.on(e, n, r, !0);
        }
        off(e, n) {
          return (
            R(this.bindings) ||
              R(this.bindings[e]) ||
              (R(n)
                ? delete this.bindings[e]
                : this.bindings[e].forEach((r, o) => {
                    r.handler === n && this.bindings[e].splice(o, 1);
                  })),
            this
          );
        }
        trigger(e) {
          for (
            var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1;
            o < n;
            o++
          )
            r[o - 1] = arguments[o];
          return (
            !R(this.bindings) &&
              this.bindings[e] &&
              this.bindings[e].forEach((i, s) => {
                const { ctx: a, handler: l, once: u } = i;
                l.apply(a || this, r), u && this.bindings[e].splice(s, 1);
              }),
            this
          );
        }
      }
      function Ut(t) {
        const e = Object.getOwnPropertyNames(t.constructor.prototype);
        for (let n = 0; n < e.length; n++) {
          const r = e[n],
            o = t[r];
          'constructor' !== r && 'function' == typeof o && (t[r] = o.bind(t));
        }
        return t;
      }
      var j = 'top',
        H = 'bottom',
        N = 'right',
        D = 'left',
        vt = 'auto',
        Ne = [j, H, N, D],
        Ee = 'start',
        $e = 'end',
        Yt = 'viewport',
        We = 'popper',
        Vt = Ne.reduce(function (t, e) {
          return t.concat([e + '-' + Ee, e + '-' + $e]);
        }, []),
        Xt = [].concat(Ne, [vt]).reduce(function (t, e) {
          return t.concat([e, e + '-' + Ee, e + '-' + $e]);
        }, []),
        br = [
          'beforeRead',
          'read',
          'afterRead',
          'beforeMain',
          'main',
          'afterMain',
          'beforeWrite',
          'write',
          'afterWrite',
        ];
      function K(t) {
        return t ? (t.nodeName || '').toLowerCase() : null;
      }
      function V(t) {
        if (null == t) return window;
        if ('[object Window]' !== t.toString()) {
          var e = t.ownerDocument;
          return (e && e.defaultView) || window;
        }
        return t;
      }
      function Se(t) {
        return t instanceof V(t).Element || t instanceof Element;
      }
      function $(t) {
        return t instanceof V(t).HTMLElement || t instanceof HTMLElement;
      }
      function bt(t) {
        return (
          !(typeof ShadowRoot > 'u') &&
          (t instanceof V(t).ShadowRoot || t instanceof ShadowRoot)
        );
      }
      function Z(t) {
        return t.split('-')[0];
      }
      var de = Math.max,
        tt = Math.min,
        xe = Math.round;
      function Ae(t, e) {
        void 0 === e && (e = !1);
        var n = t.getBoundingClientRect(),
          r = 1,
          o = 1;
        if ($(t) && e) {
          var i = t.offsetHeight,
            s = t.offsetWidth;
          s > 0 && (r = xe(n.width) / s || 1),
            i > 0 && (o = xe(n.height) / i || 1);
        }
        return {
          width: n.width / r,
          height: n.height / o,
          top: n.top / o,
          right: n.right / r,
          bottom: n.bottom / o,
          left: n.left / r,
          x: n.left / r,
          y: n.top / o,
        };
      }
      function yt(t) {
        var e = Ae(t),
          n = t.offsetWidth,
          r = t.offsetHeight;
        return (
          Math.abs(e.width - n) <= 1 && (n = e.width),
          Math.abs(e.height - r) <= 1 && (r = e.height),
          { x: t.offsetLeft, y: t.offsetTop, width: n, height: r }
        );
      }
      function Gt(t, e) {
        var n = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (n && bt(n)) {
          var r = e;
          do {
            if (r && t.isSameNode(r)) return !0;
            r = r.parentNode || r.host;
          } while (r);
        }
        return !1;
      }
      function q(t) {
        return V(t).getComputedStyle(t);
      }
      function Tr(t) {
        return ['table', 'td', 'th'].indexOf(K(t)) >= 0;
      }
      function ie(t) {
        return ((Se(t) ? t.ownerDocument : t.document) || window.document)
          .documentElement;
      }
      function nt(t) {
        return 'html' === K(t)
          ? t
          : t.assignedSlot || t.parentNode || (bt(t) ? t.host : null) || ie(t);
      }
      function zt(t) {
        return $(t) && 'fixed' !== q(t).position ? t.offsetParent : null;
      }
      function Ue(t) {
        for (
          var e = V(t), n = zt(t);
          n && Tr(n) && 'static' === q(n).position;

        )
          n = zt(n);
        return n &&
          ('html' === K(n) || ('body' === K(n) && 'static' === q(n).position))
          ? e
          : n ||
              (function _r(t) {
                var e =
                  -1 !== navigator.userAgent.toLowerCase().indexOf('firefox');
                if (
                  -1 !== navigator.userAgent.indexOf('Trident') &&
                  $(t) &&
                  'fixed' === q(t).position
                )
                  return null;
                var o = nt(t);
                for (
                  bt(o) && (o = o.host);
                  $(o) && ['html', 'body'].indexOf(K(o)) < 0;

                ) {
                  var i = q(o);
                  if (
                    'none' !== i.transform ||
                    'none' !== i.perspective ||
                    'paint' === i.contain ||
                    -1 !== ['transform', 'perspective'].indexOf(i.willChange) ||
                    (e && 'filter' === i.willChange) ||
                    (e && i.filter && 'none' !== i.filter)
                  )
                    return o;
                  o = o.parentNode;
                }
                return null;
              })(t) ||
              e;
      }
      function wt(t) {
        return ['top', 'bottom'].indexOf(t) >= 0 ? 'x' : 'y';
      }
      function Ye(t, e, n) {
        return de(t, tt(e, n));
      }
      function Zt(t) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t);
      }
      function Jt(t, e) {
        return e.reduce(function (n, r) {
          return (n[r] = t), n;
        }, {});
      }
      function Ce(t) {
        return t.split('-')[1];
      }
      var Pr = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
      function qt(t) {
        var e,
          n = t.popper,
          r = t.popperRect,
          o = t.placement,
          i = t.variation,
          s = t.offsets,
          a = t.position,
          l = t.gpuAcceleration,
          u = t.adaptive,
          d = t.roundOffsets,
          h = t.isFixed,
          m = s.x,
          f = void 0 === m ? 0 : m,
          v = s.y,
          b = void 0 === v ? 0 : v,
          T = 'function' == typeof d ? d({ x: f, y: b }) : { x: f, y: b };
        (f = T.x), (b = T.y);
        var O = s.hasOwnProperty('x'),
          _ = s.hasOwnProperty('y'),
          E = D,
          c = j,
          p = window;
        if (u) {
          var g = Ue(n),
            y = 'clientHeight',
            w = 'clientWidth';
          g === V(n) &&
            'static' !== q((g = ie(n))).position &&
            'absolute' === a &&
            ((y = 'scrollHeight'), (w = 'scrollWidth')),
            (o === j || ((o === D || o === N) && i === $e)) &&
              ((c = H),
              (b -=
                (h && g === p && p.visualViewport
                  ? p.visualViewport.height
                  : g[y]) - r.height),
              (b *= l ? 1 : -1)),
            (o !== D && ((o !== j && o !== H) || i !== $e)) ||
              ((E = N),
              (f -=
                (h && g === p && p.visualViewport
                  ? p.visualViewport.width
                  : g[w]) - r.width),
              (f *= l ? 1 : -1));
        }
        var k,
          M = Object.assign({ position: a }, u && Pr),
          L =
            !0 === d
              ? (function Mr(t) {
                  var n = t.y,
                    o = window.devicePixelRatio || 1;
                  return { x: xe(t.x * o) / o || 0, y: xe(n * o) / o || 0 };
                })({ x: f, y: b })
              : { x: f, y: b };
        return (
          (f = L.x),
          (b = L.y),
          Object.assign(
            {},
            M,
            l
              ? (((k = {})[c] = _ ? '0' : ''),
                (k[E] = O ? '0' : ''),
                (k.transform =
                  (p.devicePixelRatio || 1) <= 1
                    ? 'translate(' + f + 'px, ' + b + 'px)'
                    : 'translate3d(' + f + 'px, ' + b + 'px, 0)'),
                k)
              : (((e = {})[c] = _ ? b + 'px' : ''),
                (e[E] = O ? f + 'px' : ''),
                (e.transform = ''),
                e)
          )
        );
      }
      var rt = { passive: !0 },
        jr = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
      function ot(t) {
        return t.replace(/left|right|bottom|top/g, function (e) {
          return jr[e];
        });
      }
      var Dr = { start: 'end', end: 'start' };
      function Qt(t) {
        return t.replace(/start|end/g, function (e) {
          return Dr[e];
        });
      }
      function Ot(t) {
        var e = V(t);
        return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
      }
      function Tt(t) {
        return Ae(ie(t)).left + Ot(t).scrollLeft;
      }
      function _t(t) {
        var e = q(t);
        return /auto|scroll|overlay|hidden/.test(
          e.overflow + e.overflowY + e.overflowX
        );
      }
      function en(t) {
        return ['html', 'body', '#document'].indexOf(K(t)) >= 0
          ? t.ownerDocument.body
          : $(t) && _t(t)
          ? t
          : en(nt(t));
      }
      function Ve(t, e) {
        var n;
        void 0 === e && (e = []);
        var r = en(t),
          o = r === (null == (n = t.ownerDocument) ? void 0 : n.body),
          i = V(r),
          s = o ? [i].concat(i.visualViewport || [], _t(r) ? r : []) : r,
          a = e.concat(s);
        return o ? a : a.concat(Ve(nt(s)));
      }
      function Et(t) {
        return Object.assign({}, t, {
          left: t.x,
          top: t.y,
          right: t.x + t.width,
          bottom: t.y + t.height,
        });
      }
      function tn(t, e) {
        return e === Yt
          ? Et(
              (function kr(t) {
                var e = V(t),
                  n = ie(t),
                  r = e.visualViewport,
                  o = n.clientWidth,
                  i = n.clientHeight,
                  s = 0,
                  a = 0;
                return (
                  r &&
                    ((o = r.width),
                    (i = r.height),
                    /^((?!chrome|android).)*safari/i.test(
                      navigator.userAgent
                    ) || ((s = r.offsetLeft), (a = r.offsetTop))),
                  { width: o, height: i, x: s + Tt(t), y: a }
                );
              })(t)
            )
          : Se(e)
          ? (function Hr(t) {
              var e = Ae(t);
              return (
                (e.top = e.top + t.clientTop),
                (e.left = e.left + t.clientLeft),
                (e.bottom = e.top + t.clientHeight),
                (e.right = e.left + t.clientWidth),
                (e.width = t.clientWidth),
                (e.height = t.clientHeight),
                (e.x = e.left),
                (e.y = e.top),
                e
              );
            })(e)
          : Et(
              (function Fr(t) {
                var e,
                  n = ie(t),
                  r = Ot(t),
                  o = null == (e = t.ownerDocument) ? void 0 : e.body,
                  i = de(
                    n.scrollWidth,
                    n.clientWidth,
                    o ? o.scrollWidth : 0,
                    o ? o.clientWidth : 0
                  ),
                  s = de(
                    n.scrollHeight,
                    n.clientHeight,
                    o ? o.scrollHeight : 0,
                    o ? o.clientHeight : 0
                  ),
                  a = -r.scrollLeft + Tt(t),
                  l = -r.scrollTop;
                return (
                  'rtl' === q(o || n).direction &&
                    (a += de(n.clientWidth, o ? o.clientWidth : 0) - i),
                  { width: i, height: s, x: a, y: l }
                );
              })(ie(t))
            );
      }
      function nn(t) {
        var l,
          e = t.reference,
          n = t.element,
          r = t.placement,
          o = r ? Z(r) : null,
          i = r ? Ce(r) : null,
          s = e.x + e.width / 2 - n.width / 2,
          a = e.y + e.height / 2 - n.height / 2;
        switch (o) {
          case j:
            l = { x: s, y: e.y - n.height };
            break;
          case H:
            l = { x: s, y: e.y + e.height };
            break;
          case N:
            l = { x: e.x + e.width, y: a };
            break;
          case D:
            l = { x: e.x - n.width, y: a };
            break;
          default:
            l = { x: e.x, y: e.y };
        }
        var u = o ? wt(o) : null;
        if (null != u) {
          var d = 'y' === u ? 'height' : 'width';
          switch (i) {
            case Ee:
              l[u] = l[u] - (e[d] / 2 - n[d] / 2);
              break;
            case $e:
              l[u] = l[u] + (e[d] / 2 - n[d] / 2);
          }
        }
        return l;
      }
      function Xe(t, e) {
        void 0 === e && (e = {});
        var r = e.placement,
          o = void 0 === r ? t.placement : r,
          i = e.boundary,
          s = void 0 === i ? 'clippingParents' : i,
          a = e.rootBoundary,
          l = void 0 === a ? Yt : a,
          u = e.elementContext,
          d = void 0 === u ? We : u,
          h = e.altBoundary,
          m = void 0 !== h && h,
          f = e.padding,
          v = void 0 === f ? 0 : f,
          b = Zt('number' != typeof v ? v : Jt(v, Ne)),
          O = t.rects.popper,
          _ = t.elements[m ? (d === We ? 'reference' : We) : d],
          E = (function $r(t, e, n) {
            var r =
                'clippingParents' === e
                  ? (function Nr(t) {
                      var e = Ve(nt(t)),
                        r =
                          ['absolute', 'fixed'].indexOf(q(t).position) >= 0 &&
                          $(t)
                            ? Ue(t)
                            : t;
                      return Se(r)
                        ? e.filter(function (o) {
                            return Se(o) && Gt(o, r) && 'body' !== K(o);
                          })
                        : [];
                    })(t)
                  : [].concat(e),
              o = [].concat(r, [n]),
              s = o.reduce(function (a, l) {
                var u = tn(t, l);
                return (
                  (a.top = de(u.top, a.top)),
                  (a.right = tt(u.right, a.right)),
                  (a.bottom = tt(u.bottom, a.bottom)),
                  (a.left = de(u.left, a.left)),
                  a
                );
              }, tn(t, o[0]));
            return (
              (s.width = s.right - s.left),
              (s.height = s.bottom - s.top),
              (s.x = s.left),
              (s.y = s.top),
              s
            );
          })(Se(_) ? _ : _.contextElement || ie(t.elements.popper), s, l),
          c = Ae(t.elements.reference),
          p = nn({
            reference: c,
            element: O,
            strategy: 'absolute',
            placement: o,
          }),
          g = Et(Object.assign({}, O, p)),
          y = d === We ? g : c,
          w = {
            top: E.top - y.top + b.top,
            bottom: y.bottom - E.bottom + b.bottom,
            left: E.left - y.left + b.left,
            right: y.right - E.right + b.right,
          },
          S = t.modifiersData.offset;
        if (d === We && S) {
          var C = S[o];
          Object.keys(w).forEach(function (M) {
            var L = [N, H].indexOf(M) >= 0 ? 1 : -1,
              k = [j, H].indexOf(M) >= 0 ? 'y' : 'x';
            w[M] += C[k] * L;
          });
        }
        return w;
      }
      function rn(t, e, n) {
        return (
          void 0 === n && (n = { x: 0, y: 0 }),
          {
            top: t.top - e.height - n.y,
            right: t.right - e.width + n.x,
            bottom: t.bottom - e.height + n.y,
            left: t.left - e.width - n.x,
          }
        );
      }
      function on(t) {
        return [j, N, H, D].some(function (e) {
          return t[e] >= 0;
        });
      }
      function io(t, e, n) {
        void 0 === n && (n = !1);
        var r = $(e),
          o =
            $(e) &&
            (function oo(t) {
              var e = t.getBoundingClientRect(),
                n = xe(e.width) / t.offsetWidth || 1,
                r = xe(e.height) / t.offsetHeight || 1;
              return 1 !== n || 1 !== r;
            })(e),
          i = ie(e),
          s = Ae(t, o),
          a = { scrollLeft: 0, scrollTop: 0 },
          l = { x: 0, y: 0 };
        return (
          (r || (!r && !n)) &&
            (('body' !== K(e) || _t(i)) &&
              (a = (function ro(t) {
                return t !== V(t) && $(t)
                  ? (function no(t) {
                      return {
                        scrollLeft: t.scrollLeft,
                        scrollTop: t.scrollTop,
                      };
                    })(t)
                  : Ot(t);
              })(e)),
            $(e)
              ? (((l = Ae(e, !0)).x += e.clientLeft), (l.y += e.clientTop))
              : i && (l.x = Tt(i))),
          {
            x: s.left + a.scrollLeft - l.x,
            y: s.top + a.scrollTop - l.y,
            width: s.width,
            height: s.height,
          }
        );
      }
      function so(t) {
        var e = new Map(),
          n = new Set(),
          r = [];
        function o(i) {
          n.add(i.name),
            []
              .concat(i.requires || [], i.requiresIfExists || [])
              .forEach(function (a) {
                if (!n.has(a)) {
                  var l = e.get(a);
                  l && o(l);
                }
              }),
            r.push(i);
        }
        return (
          t.forEach(function (i) {
            e.set(i.name, i);
          }),
          t.forEach(function (i) {
            n.has(i.name) || o(i);
          }),
          r
        );
      }
      function lo(t) {
        var e;
        return function () {
          return (
            e ||
              (e = new Promise(function (n) {
                Promise.resolve().then(function () {
                  (e = void 0), n(t());
                });
              })),
            e
          );
        };
      }
      var sn = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
      function an() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        return !e.some(function (r) {
          return !(r && 'function' == typeof r.getBoundingClientRect);
        });
      }
      function uo(t) {
        void 0 === t && (t = {});
        var n = t.defaultModifiers,
          r = void 0 === n ? [] : n,
          o = t.defaultOptions,
          i = void 0 === o ? sn : o;
        return function (a, l, u) {
          void 0 === u && (u = i);
          var d = {
              placement: 'bottom',
              orderedModifiers: [],
              options: Object.assign({}, sn, i),
              modifiersData: {},
              elements: { reference: a, popper: l },
              attributes: {},
              styles: {},
            },
            h = [],
            m = !1,
            f = {
              state: d,
              setOptions: function (O) {
                var _ = 'function' == typeof O ? O(d.options) : O;
                b(),
                  (d.options = Object.assign({}, i, d.options, _)),
                  (d.scrollParents = {
                    reference: Se(a)
                      ? Ve(a)
                      : a.contextElement
                      ? Ve(a.contextElement)
                      : [],
                    popper: Ve(l),
                  });
                var E = (function ao(t) {
                  var e = so(t);
                  return br.reduce(function (n, r) {
                    return n.concat(
                      e.filter(function (o) {
                        return o.phase === r;
                      })
                    );
                  }, []);
                })(
                  (function co(t) {
                    var e = t.reduce(function (n, r) {
                      var o = n[r.name];
                      return (
                        (n[r.name] = o
                          ? Object.assign({}, o, r, {
                              options: Object.assign({}, o.options, r.options),
                              data: Object.assign({}, o.data, r.data),
                            })
                          : r),
                        n
                      );
                    }, {});
                    return Object.keys(e).map(function (n) {
                      return e[n];
                    });
                  })([].concat(r, d.options.modifiers))
                );
                return (
                  (d.orderedModifiers = E.filter(function (c) {
                    return c.enabled;
                  })),
                  (function v() {
                    d.orderedModifiers.forEach(function (T) {
                      var _ = T.options,
                        c = T.effect;
                      if ('function' == typeof c) {
                        var p = c({
                          state: d,
                          name: T.name,
                          instance: f,
                          options: void 0 === _ ? {} : _,
                        });
                        h.push(p || function () {});
                      }
                    });
                  })(),
                  f.update()
                );
              },
              forceUpdate: function () {
                if (!m) {
                  var O = d.elements,
                    _ = O.reference,
                    E = O.popper;
                  if (an(_, E)) {
                    (d.rects = {
                      reference: io(_, Ue(E), 'fixed' === d.options.strategy),
                      popper: yt(E),
                    }),
                      (d.reset = !1),
                      (d.placement = d.options.placement),
                      d.orderedModifiers.forEach(function (C) {
                        return (d.modifiersData[C.name] = Object.assign(
                          {},
                          C.data
                        ));
                      });
                    for (var c = 0; c < d.orderedModifiers.length; c++)
                      if (!0 !== d.reset) {
                        var p = d.orderedModifiers[c],
                          g = p.fn,
                          y = p.options;
                        'function' == typeof g &&
                          (d =
                            g({
                              state: d,
                              options: void 0 === y ? {} : y,
                              name: p.name,
                              instance: f,
                            }) || d);
                      } else (d.reset = !1), (c = -1);
                  }
                }
              },
              update: lo(function () {
                return new Promise(function (T) {
                  f.forceUpdate(), T(d);
                });
              }),
              destroy: function () {
                b(), (m = !0);
              },
            };
          if (!an(a, l)) return f;
          function b() {
            h.forEach(function (T) {
              return T();
            }),
              (h = []);
          }
          return (
            f.setOptions(u).then(function (T) {
              !m && u.onFirstUpdate && u.onFirstUpdate(T);
            }),
            f
          );
        };
      }
      var po = uo({
        defaultModifiers: [
          {
            name: 'eventListeners',
            enabled: !0,
            phase: 'write',
            fn: function () {},
            effect: function Rr(t) {
              var e = t.state,
                n = t.instance,
                r = t.options,
                o = r.scroll,
                i = void 0 === o || o,
                s = r.resize,
                a = void 0 === s || s,
                l = V(e.elements.popper),
                u = [].concat(
                  e.scrollParents.reference,
                  e.scrollParents.popper
                );
              return (
                i &&
                  u.forEach(function (d) {
                    d.addEventListener('scroll', n.update, rt);
                  }),
                a && l.addEventListener('resize', n.update, rt),
                function () {
                  i &&
                    u.forEach(function (d) {
                      d.removeEventListener('scroll', n.update, rt);
                    }),
                    a && l.removeEventListener('resize', n.update, rt);
                }
              );
            },
            data: {},
          },
          {
            name: 'popperOffsets',
            enabled: !0,
            phase: 'read',
            fn: function Jr(t) {
              var e = t.state;
              e.modifiersData[t.name] = nn({
                reference: e.rects.reference,
                element: e.rects.popper,
                strategy: 'absolute',
                placement: e.placement,
              });
            },
            data: {},
          },
          {
            name: 'computeStyles',
            enabled: !0,
            phase: 'beforeWrite',
            fn: function Ir(t) {
              var e = t.state,
                n = t.options,
                r = n.gpuAcceleration,
                o = void 0 === r || r,
                i = n.adaptive,
                s = void 0 === i || i,
                a = n.roundOffsets,
                l = void 0 === a || a,
                u = {
                  placement: Z(e.placement),
                  variation: Ce(e.placement),
                  popper: e.elements.popper,
                  popperRect: e.rects.popper,
                  gpuAcceleration: o,
                  isFixed: 'fixed' === e.options.strategy,
                };
              null != e.modifiersData.popperOffsets &&
                (e.styles.popper = Object.assign(
                  {},
                  e.styles.popper,
                  qt(
                    Object.assign({}, u, {
                      offsets: e.modifiersData.popperOffsets,
                      position: e.options.strategy,
                      adaptive: s,
                      roundOffsets: l,
                    })
                  )
                )),
                null != e.modifiersData.arrow &&
                  (e.styles.arrow = Object.assign(
                    {},
                    e.styles.arrow,
                    qt(
                      Object.assign({}, u, {
                        offsets: e.modifiersData.arrow,
                        position: 'absolute',
                        adaptive: !1,
                        roundOffsets: l,
                      })
                    )
                  )),
                (e.attributes.popper = Object.assign({}, e.attributes.popper, {
                  'data-popper-placement': e.placement,
                }));
            },
            data: {},
          },
          {
            name: 'applyStyles',
            enabled: !0,
            phase: 'write',
            fn: function yr(t) {
              var e = t.state;
              Object.keys(e.elements).forEach(function (n) {
                var r = e.styles[n] || {},
                  o = e.attributes[n] || {},
                  i = e.elements[n];
                !$(i) ||
                  !K(i) ||
                  (Object.assign(i.style, r),
                  Object.keys(o).forEach(function (s) {
                    var a = o[s];
                    !1 === a
                      ? i.removeAttribute(s)
                      : i.setAttribute(s, !0 === a ? '' : a);
                  }));
              });
            },
            effect: function wr(t) {
              var e = t.state,
                n = {
                  popper: {
                    position: e.options.strategy,
                    left: '0',
                    top: '0',
                    margin: '0',
                  },
                  arrow: { position: 'absolute' },
                  reference: {},
                };
              return (
                Object.assign(e.elements.popper.style, n.popper),
                (e.styles = n),
                e.elements.arrow &&
                  Object.assign(e.elements.arrow.style, n.arrow),
                function () {
                  Object.keys(e.elements).forEach(function (r) {
                    var o = e.elements[r],
                      i = e.attributes[r] || {},
                      a = Object.keys(
                        e.styles.hasOwnProperty(r) ? e.styles[r] : n[r]
                      ).reduce(function (l, u) {
                        return (l[u] = ''), l;
                      }, {});
                    !$(o) ||
                      !K(o) ||
                      (Object.assign(o.style, a),
                      Object.keys(i).forEach(function (l) {
                        o.removeAttribute(l);
                      }));
                  });
                }
              );
            },
            requires: ['computeStyles'],
          },
          {
            name: 'offset',
            enabled: !0,
            phase: 'main',
            requires: ['popperOffsets'],
            fn: function Kr(t) {
              var e = t.state,
                r = t.name,
                o = t.options.offset,
                i = void 0 === o ? [0, 0] : o,
                s = Xt.reduce(function (d, h) {
                  return (
                    (d[h] = (function zr(t, e, n) {
                      var r = Z(t),
                        o = [D, j].indexOf(r) >= 0 ? -1 : 1,
                        i =
                          'function' == typeof n
                            ? n(Object.assign({}, e, { placement: t }))
                            : n,
                        s = i[0],
                        a = i[1];
                      return (
                        (s = s || 0),
                        (a = (a || 0) * o),
                        [D, N].indexOf(r) >= 0 ? { x: a, y: s } : { x: s, y: a }
                      );
                    })(h, e.rects, i)),
                    d
                  );
                }, {}),
                a = s[e.placement],
                u = a.y;
              null != e.modifiersData.popperOffsets &&
                ((e.modifiersData.popperOffsets.x += a.x),
                (e.modifiersData.popperOffsets.y += u)),
                (e.modifiersData[r] = s);
            },
          },
          {
            name: 'flip',
            enabled: !0,
            phase: 'main',
            fn: function Yr(t) {
              var e = t.state,
                n = t.options,
                r = t.name;
              if (!e.modifiersData[r]._skip) {
                for (
                  var o = n.mainAxis,
                    i = void 0 === o || o,
                    s = n.altAxis,
                    a = void 0 === s || s,
                    l = n.fallbackPlacements,
                    u = n.padding,
                    d = n.boundary,
                    h = n.rootBoundary,
                    m = n.altBoundary,
                    f = n.flipVariations,
                    v = void 0 === f || f,
                    b = n.allowedAutoPlacements,
                    T = e.options.placement,
                    O = Z(T),
                    E =
                      l ||
                      (O !== T && v
                        ? (function Ur(t) {
                            if (Z(t) === vt) return [];
                            var e = ot(t);
                            return [Qt(t), e, Qt(e)];
                          })(T)
                        : [ot(T)]),
                    c = [T].concat(E).reduce(function (Le, ce) {
                      return Le.concat(
                        Z(ce) === vt
                          ? (function Wr(t, e) {
                              void 0 === e && (e = {});
                              var o = e.boundary,
                                i = e.rootBoundary,
                                s = e.padding,
                                a = e.flipVariations,
                                l = e.allowedAutoPlacements,
                                u = void 0 === l ? Xt : l,
                                d = Ce(e.placement),
                                h = d
                                  ? a
                                    ? Vt
                                    : Vt.filter(function (v) {
                                        return Ce(v) === d;
                                      })
                                  : Ne,
                                m = h.filter(function (v) {
                                  return u.indexOf(v) >= 0;
                                });
                              0 === m.length && (m = h);
                              var f = m.reduce(function (v, b) {
                                return (
                                  (v[b] = Xe(t, {
                                    placement: b,
                                    boundary: o,
                                    rootBoundary: i,
                                    padding: s,
                                  })[Z(b)]),
                                  v
                                );
                              }, {});
                              return Object.keys(f).sort(function (v, b) {
                                return f[v] - f[b];
                              });
                            })(e, {
                              placement: ce,
                              boundary: d,
                              rootBoundary: h,
                              padding: u,
                              flipVariations: v,
                              allowedAutoPlacements: b,
                            })
                          : ce
                      );
                    }, []),
                    p = e.rects.reference,
                    g = e.rects.popper,
                    y = new Map(),
                    w = !0,
                    S = c[0],
                    C = 0;
                  C < c.length;
                  C++
                ) {
                  var M = c[C],
                    L = Z(M),
                    k = Ce(M) === Ee,
                    Je = [j, H].indexOf(L) >= 0,
                    qe = Je ? 'width' : 'height',
                    F = Xe(e, {
                      placement: M,
                      boundary: d,
                      rootBoundary: h,
                      altBoundary: m,
                      padding: u,
                    }),
                    G = Je ? (k ? N : D) : k ? H : j;
                  p[qe] > g[qe] && (G = ot(G));
                  var ut = ot(G),
                    ve = [];
                  if (
                    (i && ve.push(F[L] <= 0),
                    a && ve.push(F[G] <= 0, F[ut] <= 0),
                    ve.every(function (Le) {
                      return Le;
                    }))
                  ) {
                    (S = M), (w = !1);
                    break;
                  }
                  y.set(M, ve);
                }
                if (w)
                  for (
                    var jt = function (ce) {
                        var et = c.find(function (pt) {
                          var be = y.get(pt);
                          if (be)
                            return be.slice(0, ce).every(function (Dt) {
                              return Dt;
                            });
                        });
                        if (et) return (S = et), 'break';
                      },
                      Qe = v ? 3 : 1;
                    Qe > 0 && 'break' !== jt(Qe);
                    Qe--
                  );
                e.placement !== S &&
                  ((e.modifiersData[r]._skip = !0),
                  (e.placement = S),
                  (e.reset = !0));
              }
            },
            requiresIfExists: ['offset'],
            data: { _skip: !1 },
          },
          {
            name: 'preventOverflow',
            enabled: !0,
            phase: 'main',
            fn: function eo(t) {
              var e = t.state,
                n = t.options,
                r = t.name,
                o = n.mainAxis,
                i = void 0 === o || o,
                s = n.altAxis,
                a = void 0 !== s && s,
                m = n.tether,
                f = void 0 === m || m,
                v = n.tetherOffset,
                b = void 0 === v ? 0 : v,
                T = Xe(e, {
                  boundary: n.boundary,
                  rootBoundary: n.rootBoundary,
                  padding: n.padding,
                  altBoundary: n.altBoundary,
                }),
                O = Z(e.placement),
                _ = Ce(e.placement),
                E = !_,
                c = wt(O),
                p = (function Qr(t) {
                  return 'x' === t ? 'y' : 'x';
                })(c),
                g = e.modifiersData.popperOffsets,
                y = e.rects.reference,
                w = e.rects.popper,
                S =
                  'function' == typeof b
                    ? b(Object.assign({}, e.rects, { placement: e.placement }))
                    : b,
                C =
                  'number' == typeof S
                    ? { mainAxis: S, altAxis: S }
                    : Object.assign({ mainAxis: 0, altAxis: 0 }, S),
                M = e.modifiersData.offset
                  ? e.modifiersData.offset[e.placement]
                  : null,
                L = { x: 0, y: 0 };
              if (g) {
                if (i) {
                  var k,
                    Je = 'y' === c ? j : D,
                    qe = 'y' === c ? H : N,
                    F = 'y' === c ? 'height' : 'width',
                    G = g[c],
                    ut = G + T[Je],
                    ve = G - T[qe],
                    ft = f ? -w[F] / 2 : 0,
                    jt = _ === Ee ? y[F] : w[F],
                    Qe = _ === Ee ? -w[F] : -y[F],
                    dt = e.elements.arrow,
                    Le = f && dt ? yt(dt) : { width: 0, height: 0 },
                    ce = e.modifiersData['arrow#persistent']
                      ? e.modifiersData['arrow#persistent'].padding
                      : { top: 0, right: 0, bottom: 0, left: 0 },
                    et = ce[Je],
                    pt = ce[qe],
                    be = Ye(0, y[F], Le[F]),
                    Dt = E
                      ? y[F] / 2 - ft - be - et - C.mainAxis
                      : jt - be - et - C.mainAxis,
                    xi = E
                      ? -y[F] / 2 + ft + be + pt + C.mainAxis
                      : Qe + be + pt + C.mainAxis,
                    kt = e.elements.arrow && Ue(e.elements.arrow),
                    Ai = kt
                      ? 'y' === c
                        ? kt.clientTop || 0
                        : kt.clientLeft || 0
                      : 0,
                    kn = null != (k = M?.[c]) ? k : 0,
                    Pi = G + xi - kn,
                    Fn = Ye(
                      f ? tt(ut, G + Dt - kn - Ai) : ut,
                      G,
                      f ? de(ve, Pi) : ve
                    );
                  (g[c] = Fn), (L[c] = Fn - G);
                }
                if (a) {
                  var Hn,
                    ye = g[p],
                    ht = 'y' === p ? 'height' : 'width',
                    Nn = ye + T['x' === c ? j : D],
                    $n = ye - T['x' === c ? H : N],
                    Ft = -1 !== [j, D].indexOf(O),
                    Wn = null != (Hn = M?.[p]) ? Hn : 0,
                    Un = Ft ? Nn : ye - y[ht] - w[ht] - Wn + C.altAxis,
                    Yn = Ft ? ye + y[ht] + w[ht] - Wn - C.altAxis : $n,
                    Vn =
                      f && Ft
                        ? (function Er(t, e, n) {
                            var r = Ye(t, e, n);
                            return r > n ? n : r;
                          })(Un, ye, Yn)
                        : Ye(f ? Un : Nn, ye, f ? Yn : $n);
                  (g[p] = Vn), (L[p] = Vn - ye);
                }
                e.modifiersData[r] = L;
              }
            },
            requiresIfExists: ['offset'],
          },
          {
            name: 'arrow',
            enabled: !0,
            phase: 'main',
            fn: function xr(t) {
              var e,
                n = t.state,
                r = t.name,
                o = t.options,
                i = n.elements.arrow,
                s = n.modifiersData.popperOffsets,
                a = Z(n.placement),
                l = wt(a),
                d = [D, N].indexOf(a) >= 0 ? 'height' : 'width';
              if (i && s) {
                var h = (function (e, n) {
                    return Zt(
                      'number' !=
                        typeof (e =
                          'function' == typeof e
                            ? e(
                                Object.assign({}, n.rects, {
                                  placement: n.placement,
                                })
                              )
                            : e)
                        ? e
                        : Jt(e, Ne)
                    );
                  })(o.padding, n),
                  m = yt(i),
                  f = 'y' === l ? j : D,
                  v = 'y' === l ? H : N,
                  b =
                    n.rects.reference[d] +
                    n.rects.reference[l] -
                    s[l] -
                    n.rects.popper[d],
                  T = s[l] - n.rects.reference[l],
                  O = Ue(i),
                  _ = O
                    ? 'y' === l
                      ? O.clientHeight || 0
                      : O.clientWidth || 0
                    : 0,
                  g = _ / 2 - m[d] / 2 + (b / 2 - T / 2),
                  y = Ye(h[f], g, _ - m[d] - h[v]);
                n.modifiersData[r] =
                  (((e = {})[l] = y), (e.centerOffset = y - g), e);
              }
            },
            effect: function Ar(t) {
              var e = t.state,
                r = t.options.element,
                o = void 0 === r ? '[data-popper-arrow]' : r;
              null != o &&
                (('string' == typeof o &&
                  !(o = e.elements.popper.querySelector(o))) ||
                  (Gt(e.elements.popper, o) && (e.elements.arrow = o)));
            },
            requires: ['popperOffsets'],
            requiresIfExists: ['preventOverflow'],
          },
          {
            name: 'hide',
            enabled: !0,
            phase: 'main',
            requiresIfExists: ['preventOverflow'],
            fn: function Xr(t) {
              var e = t.state,
                n = t.name,
                r = e.rects.reference,
                o = e.rects.popper,
                i = e.modifiersData.preventOverflow,
                s = Xe(e, { elementContext: 'reference' }),
                a = Xe(e, { altBoundary: !0 }),
                l = rn(s, r),
                u = rn(a, o, i),
                d = on(l),
                h = on(u);
              (e.modifiersData[n] = {
                referenceClippingOffsets: l,
                popperEscapeOffsets: u,
                isReferenceHidden: d,
                hasPopperEscaped: h,
              }),
                (e.attributes.popper = Object.assign({}, e.attributes.popper, {
                  'data-popper-reference-hidden': d,
                  'data-popper-escaped': h,
                }));
            },
          },
        ],
      });
      function St() {
        return (
          (St =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }),
          St.apply(this, arguments)
        );
      }
      function ln(t) {
        return He(t) && '' !== t
          ? '-' !== t.charAt(t.length - 1)
            ? `${t}-`
            : t
          : '';
      }
      function xt(t) {
        const e = t.options.attachTo || {},
          n = Object.assign({}, e);
        if (He(e.element)) {
          try {
            n.element = document.querySelector(e.element);
          } catch {}
          n.element ||
            console.error(
              `The element for this Shepherd step was not found ${e.element}`
            );
        }
        return n;
      }
      function go(t) {
        t.tooltip && t.tooltip.destroy();
        const e = xt(t);
        let n = e.element;
        const r = (function vo(t, e) {
          let n = {
            modifiers: [
              { name: 'preventOverflow', options: { altAxis: !0, tether: !1 } },
              {
                name: 'focusAfterRender',
                enabled: !0,
                phase: 'afterWrite',
                fn() {
                  setTimeout(() => {
                    e.el && e.el.focus();
                  }, 300);
                },
              },
            ],
            strategy: 'absolute',
          };
          e.isCentered()
            ? (n = (function mo(t) {
                const e = (function ho() {
                  return [
                    {
                      name: 'applyStyles',
                      fn(t) {
                        let { state: e } = t;
                        Object.keys(e.elements).forEach((n) => {
                          if ('popper' !== n) return;
                          const o = e.attributes[n] || {},
                            i = e.elements[n];
                          Object.assign(i.style, {
                            position: 'fixed',
                            left: '50%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                          }),
                            Object.keys(o).forEach((s) => {
                              const a = o[s];
                              !1 === a
                                ? i.removeAttribute(s)
                                : i.setAttribute(s, !0 === a ? '' : a);
                            });
                        });
                      },
                    },
                    { name: 'computeStyles', options: { adaptive: !1 } },
                  ];
                })();
                let n = {
                  placement: 'top',
                  strategy: 'fixed',
                  modifiers: [
                    {
                      name: 'focusAfterRender',
                      enabled: !0,
                      phase: 'afterWrite',
                      fn() {
                        setTimeout(() => {
                          t.el && t.el.focus();
                        }, 300);
                      },
                    },
                  ],
                };
                return (
                  (n = St({}, n, {
                    modifiers: Array.from(new Set([...n.modifiers, ...e])),
                  })),
                  n
                );
              })(e))
            : (n.placement = t.on);
          const r =
            e.tour && e.tour.options && e.tour.options.defaultStepOptions;
          return r && (n = cn(r, n)), (n = cn(e.options, n)), n;
        })(e, t);
        return (
          t.isCentered() &&
            ((n = document.body),
            t.shepherdElementComponent
              .getElement()
              .classList.add('shepherd-centered')),
          (t.tooltip = po(n, t.el, r)),
          (t.target = e.element),
          r
        );
      }
      function At() {
        let t = Date.now();
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (e) => {
          const n = (t + 16 * Math.random()) % 16 | 0;
          return (
            (t = Math.floor(t / 16)), ('x' == e ? n : (3 & n) | 8).toString(16)
          );
        });
      }
      function cn(t, e) {
        if (t.popperOptions) {
          let n = Object.assign({}, e, t.popperOptions);
          if (
            t.popperOptions.modifiers &&
            t.popperOptions.modifiers.length > 0
          ) {
            const r = t.popperOptions.modifiers.map((i) => i.name),
              o = e.modifiers.filter((i) => !r.includes(i.name));
            n.modifiers = Array.from(
              new Set([...o, ...t.popperOptions.modifiers])
            );
          }
          return n;
        }
        return e;
      }
      function W() {}
      function bo(t, e) {
        for (const n in e) t[n] = e[n];
        return t;
      }
      function un(t) {
        return t();
      }
      function fn() {
        return Object.create(null);
      }
      function Ge(t) {
        t.forEach(un);
      }
      function dn(t) {
        return 'function' == typeof t;
      }
      function Q(t, e) {
        return t != t
          ? e == e
          : t !== e || (t && 'object' == typeof t) || 'function' == typeof t;
      }
      function Pe(t, e) {
        t.appendChild(e);
      }
      function X(t, e, n) {
        t.insertBefore(e, n || null);
      }
      function U(t) {
        t.parentNode.removeChild(t);
      }
      function J(t) {
        return document.createElement(t);
      }
      function pn(t) {
        return document.createElementNS('http://www.w3.org/2000/svg', t);
      }
      function hn(t) {
        return document.createTextNode(t);
      }
      function it() {
        return hn(' ');
      }
      function st(t, e, n, r) {
        return (
          t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r)
        );
      }
      function P(t, e, n) {
        null == n
          ? t.removeAttribute(e)
          : t.getAttribute(e) !== n && t.setAttribute(e, n);
      }
      function mn(t, e) {
        const n = Object.getOwnPropertyDescriptors(t.__proto__);
        for (const r in e)
          null == e[r]
            ? t.removeAttribute(r)
            : 'style' === r
            ? (t.style.cssText = e[r])
            : '__value' === r
            ? (t.value = t[r] = e[r])
            : n[r] && n[r].set
            ? (t[r] = e[r])
            : P(t, r, e[r]);
      }
      function Me(t, e, n) {
        t.classList[n ? 'add' : 'remove'](e);
      }
      let ze;
      function Ke(t) {
        ze = t;
      }
      function gn() {
        if (!ze)
          throw new Error('Function called outside component initialization');
        return ze;
      }
      function Ct(t) {
        gn().$$.after_update.push(t);
      }
      const Ze = [],
        Ie = [],
        at = [],
        vn = [],
        Eo = Promise.resolve();
      let Pt = !1;
      function Mt(t) {
        at.push(t);
      }
      const It = new Set();
      let lt = 0;
      function bn() {
        const t = ze;
        do {
          for (; lt < Ze.length; ) {
            const e = Ze[lt];
            lt++, Ke(e), xo(e.$$);
          }
          for (Ke(null), Ze.length = 0, lt = 0; Ie.length; ) Ie.pop()();
          for (let e = 0; e < at.length; e += 1) {
            const n = at[e];
            It.has(n) || (It.add(n), n());
          }
          at.length = 0;
        } while (Ze.length);
        for (; vn.length; ) vn.pop()();
        (Pt = !1), It.clear(), Ke(t);
      }
      function xo(t) {
        if (null !== t.fragment) {
          t.update(), Ge(t.before_update);
          const e = t.dirty;
          (t.dirty = [-1]),
            t.fragment && t.fragment.p(t.ctx, e),
            t.after_update.forEach(Mt);
        }
      }
      const ct = new Set();
      let pe;
      function he() {
        pe = { r: 0, c: [], p: pe };
      }
      function me() {
        pe.r || Ge(pe.c), (pe = pe.p);
      }
      function A(t, e) {
        t && t.i && (ct.delete(t), t.i(e));
      }
      function I(t, e, n, r) {
        if (t && t.o) {
          if (ct.has(t)) return;
          ct.add(t),
            pe.c.push(() => {
              ct.delete(t), r && (n && t.d(1), r());
            }),
            t.o(e);
        }
      }
      function ge(t) {
        t && t.c();
      }
      function se(t, e, n, r) {
        const {
          fragment: o,
          on_mount: i,
          on_destroy: s,
          after_update: a,
        } = t.$$;
        o && o.m(e, n),
          r ||
            Mt(() => {
              const l = i.map(un).filter(dn);
              s ? s.push(...l) : Ge(l), (t.$$.on_mount = []);
            }),
          a.forEach(Mt);
      }
      function ae(t, e) {
        const n = t.$$;
        null !== n.fragment &&
          (Ge(n.on_destroy),
          n.fragment && n.fragment.d(e),
          (n.on_destroy = n.fragment = null),
          (n.ctx = []));
      }
      function ee(t, e, n, r, o, i, s, a) {
        void 0 === a && (a = [-1]);
        const l = ze;
        Ke(t);
        const u = (t.$$ = {
          fragment: null,
          ctx: null,
          props: i,
          update: W,
          not_equal: o,
          bound: fn(),
          on_mount: [],
          on_destroy: [],
          on_disconnect: [],
          before_update: [],
          after_update: [],
          context: new Map(e.context || (l ? l.$$.context : [])),
          callbacks: fn(),
          dirty: a,
          skip_bound: !1,
          root: e.target || l.$$.root,
        });
        s && s(u.root);
        let d = !1;
        if (
          ((u.ctx = n
            ? n(t, e.props || {}, function (h, m) {
                const f =
                  !(arguments.length <= 2) && arguments.length - 2
                    ? arguments.length <= 2
                      ? void 0
                      : arguments[2]
                    : m;
                return (
                  u.ctx &&
                    o(u.ctx[h], (u.ctx[h] = f)) &&
                    (!u.skip_bound && u.bound[h] && u.bound[h](f),
                    d &&
                      (function Co(t, e) {
                        -1 === t.$$.dirty[0] &&
                          (Ze.push(t),
                          (function So() {
                            Pt || ((Pt = !0), Eo.then(bn));
                          })(),
                          t.$$.dirty.fill(0)),
                          (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
                      })(t, h)),
                  m
                );
              })
            : []),
          u.update(),
          (d = !0),
          Ge(u.before_update),
          (u.fragment = !!r && r(u.ctx)),
          e.target)
        ) {
          if (e.hydrate) {
            const h = (function To(t) {
              return Array.from(t.childNodes);
            })(e.target);
            u.fragment && u.fragment.l(h), h.forEach(U);
          } else u.fragment && u.fragment.c();
          e.intro && A(t.$$.fragment),
            se(t, e.target, e.anchor, e.customElement),
            bn();
        }
        Ke(l);
      }
      class te {
        $destroy() {
          ae(this, 1), (this.$destroy = W);
        }
        $on(e, n) {
          const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
          return (
            r.push(n),
            () => {
              const o = r.indexOf(n);
              -1 !== o && r.splice(o, 1);
            }
          );
        }
        $set(e) {
          this.$$set &&
            !(function yo(t) {
              return 0 === Object.keys(t).length;
            })(e) &&
            ((this.$$.skip_bound = !0),
            this.$$set(e),
            (this.$$.skip_bound = !1));
        }
      }
      function Po(t) {
        let e, n, r, o, i;
        return {
          c() {
            (e = J('button')),
              P(e, 'aria-label', (n = t[3] ? t[3] : null)),
              P(
                e,
                'class',
                (r = `${t[1] || ''} shepherd-button ${
                  t[4] ? 'shepherd-button-secondary' : ''
                }`)
              ),
              (e.disabled = t[2]),
              P(e, 'tabindex', '0');
          },
          m(s, a) {
            X(s, e, a),
              (e.innerHTML = t[5]),
              o ||
                ((i = st(e, 'click', function () {
                  dn(t[0]) && t[0].apply(this, arguments);
                })),
                (o = !0));
          },
          p(s, a) {
            let [l] = a;
            (t = s),
              32 & l && (e.innerHTML = t[5]),
              8 & l && n !== (n = t[3] ? t[3] : null) && P(e, 'aria-label', n),
              18 & l &&
                r !==
                  (r = `${t[1] || ''} shepherd-button ${
                    t[4] ? 'shepherd-button-secondary' : ''
                  }`) &&
                P(e, 'class', r),
              4 & l && (e.disabled = t[2]);
          },
          i: W,
          o: W,
          d(s) {
            s && U(e), (o = !1), i();
          },
        };
      }
      function Mo(t, e, n) {
        let i,
          s,
          a,
          l,
          u,
          d,
          { config: r, step: o } = e;
        function h(m) {
          return _e(m) ? (m = m.call(o)) : m;
        }
        return (
          (t.$$set = (m) => {
            'config' in m && n(6, (r = m.config)),
              'step' in m && n(7, (o = m.step));
          }),
          (t.$$.update = () => {
            192 & t.$$.dirty &&
              (n(0, (i = r.action ? r.action.bind(o.tour) : null)),
              n(1, (s = r.classes)),
              n(2, (a = !!r.disabled && h(r.disabled))),
              n(3, (l = r.label ? h(r.label) : null)),
              n(4, (u = r.secondary)),
              n(5, (d = r.text ? h(r.text) : null)));
          }),
          [i, s, a, l, u, d, r, o]
        );
      }
      class Io extends te {
        constructor(e) {
          super(), ee(this, e, Mo, Po, Q, { config: 6, step: 7 });
        }
      }
      function yn(t, e, n) {
        const r = t.slice();
        return (r[2] = e[n]), r;
      }
      function wn(t) {
        let e,
          n,
          r = t[1],
          o = [];
        for (let s = 0; s < r.length; s += 1) o[s] = On(yn(t, r, s));
        const i = (s) =>
          I(o[s], 1, 1, () => {
            o[s] = null;
          });
        return {
          c() {
            for (let s = 0; s < o.length; s += 1) o[s].c();
            e = (function Oo() {
              return hn('');
            })();
          },
          m(s, a) {
            for (let l = 0; l < o.length; l += 1) o[l].m(s, a);
            X(s, e, a), (n = !0);
          },
          p(s, a) {
            if (3 & a) {
              let l;
              for (r = s[1], l = 0; l < r.length; l += 1) {
                const u = yn(s, r, l);
                o[l]
                  ? (o[l].p(u, a), A(o[l], 1))
                  : ((o[l] = On(u)),
                    o[l].c(),
                    A(o[l], 1),
                    o[l].m(e.parentNode, e));
              }
              for (he(), l = r.length; l < o.length; l += 1) i(l);
              me();
            }
          },
          i(s) {
            if (!n) {
              for (let a = 0; a < r.length; a += 1) A(o[a]);
              n = !0;
            }
          },
          o(s) {
            o = o.filter(Boolean);
            for (let a = 0; a < o.length; a += 1) I(o[a]);
            n = !1;
          },
          d(s) {
            (function wo(t, e) {
              for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
            })(o, s),
              s && U(e);
          },
        };
      }
      function On(t) {
        let e, n;
        return (
          (e = new Io({ props: { config: t[2], step: t[0] } })),
          {
            c() {
              ge(e.$$.fragment);
            },
            m(r, o) {
              se(e, r, o), (n = !0);
            },
            p(r, o) {
              const i = {};
              2 & o && (i.config = r[2]), 1 & o && (i.step = r[0]), e.$set(i);
            },
            i(r) {
              n || (A(e.$$.fragment, r), (n = !0));
            },
            o(r) {
              I(e.$$.fragment, r), (n = !1);
            },
            d(r) {
              ae(e, r);
            },
          }
        );
      }
      function Bo(t) {
        let e,
          n,
          r = t[1] && wn(t);
        return {
          c() {
            (e = J('footer')), r && r.c(), P(e, 'class', 'shepherd-footer');
          },
          m(o, i) {
            X(o, e, i), r && r.m(e, null), (n = !0);
          },
          p(o, i) {
            let [s] = i;
            o[1]
              ? r
                ? (r.p(o, s), 2 & s && A(r, 1))
                : ((r = wn(o)), r.c(), A(r, 1), r.m(e, null))
              : r &&
                (he(),
                I(r, 1, 1, () => {
                  r = null;
                }),
                me());
          },
          i(o) {
            n || (A(r), (n = !0));
          },
          o(o) {
            I(r), (n = !1);
          },
          d(o) {
            o && U(e), r && r.d();
          },
        };
      }
      function Ro(t, e, n) {
        let r,
          { step: o } = e;
        return (
          (t.$$set = (i) => {
            'step' in i && n(0, (o = i.step));
          }),
          (t.$$.update = () => {
            1 & t.$$.dirty && n(1, (r = o.options.buttons));
          }),
          [o, r]
        );
      }
      class Lo extends te {
        constructor(e) {
          super(), ee(this, e, Ro, Bo, Q, { step: 0 });
        }
      }
      function jo(t) {
        let e, n, r, o, i;
        return {
          c() {
            (e = J('button')),
              (n = J('span')),
              (n.textContent = '\xd7'),
              P(n, 'aria-hidden', 'true'),
              P(e, 'aria-label', (r = t[0].label ? t[0].label : 'Close Tour')),
              P(e, 'class', 'shepherd-cancel-icon'),
              P(e, 'type', 'button');
          },
          m(s, a) {
            X(s, e, a), Pe(e, n), o || ((i = st(e, 'click', t[1])), (o = !0));
          },
          p(s, a) {
            let [l] = a;
            1 & l &&
              r !== (r = s[0].label ? s[0].label : 'Close Tour') &&
              P(e, 'aria-label', r);
          },
          i: W,
          o: W,
          d(s) {
            s && U(e), (o = !1), i();
          },
        };
      }
      function Do(t, e, n) {
        let { cancelIcon: r, step: o } = e;
        return (
          (t.$$set = (s) => {
            'cancelIcon' in s && n(0, (r = s.cancelIcon)),
              'step' in s && n(2, (o = s.step));
          }),
          [
            r,
            (s) => {
              s.preventDefault(), o.cancel();
            },
            o,
          ]
        );
      }
      class ko extends te {
        constructor(e) {
          super(), ee(this, e, Do, jo, Q, { cancelIcon: 0, step: 2 });
        }
      }
      function Fo(t) {
        let e;
        return {
          c() {
            (e = J('h3')), P(e, 'id', t[1]), P(e, 'class', 'shepherd-title');
          },
          m(n, r) {
            X(n, e, r), t[3](e);
          },
          p(n, r) {
            let [o] = r;
            2 & o && P(e, 'id', n[1]);
          },
          i: W,
          o: W,
          d(n) {
            n && U(e), t[3](null);
          },
        };
      }
      function Ho(t, e, n) {
        let { labelId: r, element: o, title: i } = e;
        return (
          Ct(() => {
            _e(i) && n(2, (i = i())), n(0, (o.innerHTML = i), o);
          }),
          (t.$$set = (a) => {
            'labelId' in a && n(1, (r = a.labelId)),
              'element' in a && n(0, (o = a.element)),
              'title' in a && n(2, (i = a.title));
          }),
          [
            o,
            r,
            i,
            function s(a) {
              Ie[a ? 'unshift' : 'push'](() => {
                (o = a), n(0, o);
              });
            },
          ]
        );
      }
      class No extends te {
        constructor(e) {
          super(), ee(this, e, Ho, Fo, Q, { labelId: 1, element: 0, title: 2 });
        }
      }
      function Tn(t) {
        let e, n;
        return (
          (e = new No({ props: { labelId: t[0], title: t[2] } })),
          {
            c() {
              ge(e.$$.fragment);
            },
            m(r, o) {
              se(e, r, o), (n = !0);
            },
            p(r, o) {
              const i = {};
              1 & o && (i.labelId = r[0]), 4 & o && (i.title = r[2]), e.$set(i);
            },
            i(r) {
              n || (A(e.$$.fragment, r), (n = !0));
            },
            o(r) {
              I(e.$$.fragment, r), (n = !1);
            },
            d(r) {
              ae(e, r);
            },
          }
        );
      }
      function _n(t) {
        let e, n;
        return (
          (e = new ko({ props: { cancelIcon: t[3], step: t[1] } })),
          {
            c() {
              ge(e.$$.fragment);
            },
            m(r, o) {
              se(e, r, o), (n = !0);
            },
            p(r, o) {
              const i = {};
              8 & o && (i.cancelIcon = r[3]),
                2 & o && (i.step = r[1]),
                e.$set(i);
            },
            i(r) {
              n || (A(e.$$.fragment, r), (n = !0));
            },
            o(r) {
              I(e.$$.fragment, r), (n = !1);
            },
            d(r) {
              ae(e, r);
            },
          }
        );
      }
      function $o(t) {
        let e,
          n,
          r,
          o = t[2] && Tn(t),
          i = t[3] && t[3].enabled && _n(t);
        return {
          c() {
            (e = J('header')),
              o && o.c(),
              (n = it()),
              i && i.c(),
              P(e, 'class', 'shepherd-header');
          },
          m(s, a) {
            X(s, e, a),
              o && o.m(e, null),
              Pe(e, n),
              i && i.m(e, null),
              (r = !0);
          },
          p(s, a) {
            let [l] = a;
            s[2]
              ? o
                ? (o.p(s, l), 4 & l && A(o, 1))
                : ((o = Tn(s)), o.c(), A(o, 1), o.m(e, n))
              : o &&
                (he(),
                I(o, 1, 1, () => {
                  o = null;
                }),
                me()),
              s[3] && s[3].enabled
                ? i
                  ? (i.p(s, l), 8 & l && A(i, 1))
                  : ((i = _n(s)), i.c(), A(i, 1), i.m(e, null))
                : i &&
                  (he(),
                  I(i, 1, 1, () => {
                    i = null;
                  }),
                  me());
          },
          i(s) {
            r || (A(o), A(i), (r = !0));
          },
          o(s) {
            I(o), I(i), (r = !1);
          },
          d(s) {
            s && U(e), o && o.d(), i && i.d();
          },
        };
      }
      function Wo(t, e, n) {
        let i,
          s,
          { labelId: r, step: o } = e;
        return (
          (t.$$set = (a) => {
            'labelId' in a && n(0, (r = a.labelId)),
              'step' in a && n(1, (o = a.step));
          }),
          (t.$$.update = () => {
            2 & t.$$.dirty &&
              (n(2, (i = o.options.title)), n(3, (s = o.options.cancelIcon)));
          }),
          [r, o, i, s]
        );
      }
      class Uo extends te {
        constructor(e) {
          super(), ee(this, e, Wo, $o, Q, { labelId: 0, step: 1 });
        }
      }
      function Yo(t) {
        let e;
        return {
          c() {
            (e = J('div')), P(e, 'class', 'shepherd-text'), P(e, 'id', t[1]);
          },
          m(n, r) {
            X(n, e, r), t[3](e);
          },
          p(n, r) {
            let [o] = r;
            2 & o && P(e, 'id', n[1]);
          },
          i: W,
          o: W,
          d(n) {
            n && U(e), t[3](null);
          },
        };
      }
      function Vo(t, e, n) {
        let { descriptionId: r, element: o, step: i } = e;
        return (
          Ct(() => {
            let { text: a } = i.options;
            _e(a) && (a = a.call(i)),
              mt(a) ? o.appendChild(a) : n(0, (o.innerHTML = a), o);
          }),
          (t.$$set = (a) => {
            'descriptionId' in a && n(1, (r = a.descriptionId)),
              'element' in a && n(0, (o = a.element)),
              'step' in a && n(2, (i = a.step));
          }),
          [
            o,
            r,
            i,
            function s(a) {
              Ie[a ? 'unshift' : 'push'](() => {
                (o = a), n(0, o);
              });
            },
          ]
        );
      }
      class Xo extends te {
        constructor(e) {
          super(),
            ee(this, e, Vo, Yo, Q, { descriptionId: 1, element: 0, step: 2 });
        }
      }
      function En(t) {
        let e, n;
        return (
          (e = new Uo({ props: { labelId: t[1], step: t[2] } })),
          {
            c() {
              ge(e.$$.fragment);
            },
            m(r, o) {
              se(e, r, o), (n = !0);
            },
            p(r, o) {
              const i = {};
              2 & o && (i.labelId = r[1]), 4 & o && (i.step = r[2]), e.$set(i);
            },
            i(r) {
              n || (A(e.$$.fragment, r), (n = !0));
            },
            o(r) {
              I(e.$$.fragment, r), (n = !1);
            },
            d(r) {
              ae(e, r);
            },
          }
        );
      }
      function Sn(t) {
        let e, n;
        return (
          (e = new Xo({ props: { descriptionId: t[0], step: t[2] } })),
          {
            c() {
              ge(e.$$.fragment);
            },
            m(r, o) {
              se(e, r, o), (n = !0);
            },
            p(r, o) {
              const i = {};
              1 & o && (i.descriptionId = r[0]),
                4 & o && (i.step = r[2]),
                e.$set(i);
            },
            i(r) {
              n || (A(e.$$.fragment, r), (n = !0));
            },
            o(r) {
              I(e.$$.fragment, r), (n = !1);
            },
            d(r) {
              ae(e, r);
            },
          }
        );
      }
      function xn(t) {
        let e, n;
        return (
          (e = new Lo({ props: { step: t[2] } })),
          {
            c() {
              ge(e.$$.fragment);
            },
            m(r, o) {
              se(e, r, o), (n = !0);
            },
            p(r, o) {
              const i = {};
              4 & o && (i.step = r[2]), e.$set(i);
            },
            i(r) {
              n || (A(e.$$.fragment, r), (n = !0));
            },
            o(r) {
              I(e.$$.fragment, r), (n = !1);
            },
            d(r) {
              ae(e, r);
            },
          }
        );
      }
      function Go(t) {
        let e,
          r,
          i,
          a,
          n =
            !R(t[2].options.title) ||
            (t[2].options.cancelIcon && t[2].options.cancelIcon.enabled),
          o = !R(t[2].options.text),
          s =
            Array.isArray(t[2].options.buttons) && t[2].options.buttons.length,
          l = n && En(t),
          u = o && Sn(t),
          d = s && xn(t);
        return {
          c() {
            (e = J('div')),
              l && l.c(),
              (r = it()),
              u && u.c(),
              (i = it()),
              d && d.c(),
              P(e, 'class', 'shepherd-content');
          },
          m(h, m) {
            X(h, e, m),
              l && l.m(e, null),
              Pe(e, r),
              u && u.m(e, null),
              Pe(e, i),
              d && d.m(e, null),
              (a = !0);
          },
          p(h, m) {
            let [f] = m;
            4 & f &&
              (n =
                !R(h[2].options.title) ||
                (h[2].options.cancelIcon && h[2].options.cancelIcon.enabled)),
              n
                ? l
                  ? (l.p(h, f), 4 & f && A(l, 1))
                  : ((l = En(h)), l.c(), A(l, 1), l.m(e, r))
                : l &&
                  (he(),
                  I(l, 1, 1, () => {
                    l = null;
                  }),
                  me()),
              4 & f && (o = !R(h[2].options.text)),
              o
                ? u
                  ? (u.p(h, f), 4 & f && A(u, 1))
                  : ((u = Sn(h)), u.c(), A(u, 1), u.m(e, i))
                : u &&
                  (he(),
                  I(u, 1, 1, () => {
                    u = null;
                  }),
                  me()),
              4 & f &&
                (s =
                  Array.isArray(h[2].options.buttons) &&
                  h[2].options.buttons.length),
              s
                ? d
                  ? (d.p(h, f), 4 & f && A(d, 1))
                  : ((d = xn(h)), d.c(), A(d, 1), d.m(e, null))
                : d &&
                  (he(),
                  I(d, 1, 1, () => {
                    d = null;
                  }),
                  me());
          },
          i(h) {
            a || (A(l), A(u), A(d), (a = !0));
          },
          o(h) {
            I(l), I(u), I(d), (a = !1);
          },
          d(h) {
            h && U(e), l && l.d(), u && u.d(), d && d.d();
          },
        };
      }
      function zo(t, e, n) {
        let { descriptionId: r, labelId: o, step: i } = e;
        return (
          (t.$$set = (s) => {
            'descriptionId' in s && n(0, (r = s.descriptionId)),
              'labelId' in s && n(1, (o = s.labelId)),
              'step' in s && n(2, (i = s.step));
          }),
          [r, o, i]
        );
      }
      class Ko extends te {
        constructor(e) {
          super(),
            ee(this, e, zo, Go, Q, { descriptionId: 0, labelId: 1, step: 2 });
        }
      }
      function An(t) {
        let e;
        return {
          c() {
            (e = J('div')),
              P(e, 'class', 'shepherd-arrow'),
              P(e, 'data-popper-arrow', '');
          },
          m(n, r) {
            X(n, e, r);
          },
          d(n) {
            n && U(e);
          },
        };
      }
      function Zo(t) {
        let e,
          n,
          r,
          o,
          i,
          s,
          a,
          l,
          u =
            t[4].options.arrow &&
            t[4].options.attachTo &&
            t[4].options.attachTo.element &&
            t[4].options.attachTo.on &&
            An();
        r = new Ko({
          props: { descriptionId: t[2], labelId: t[3], step: t[4] },
        });
        let d = [
            { 'aria-describedby': (o = R(t[4].options.text) ? null : t[2]) },
            { 'aria-labelledby': (i = t[4].options.title ? t[3] : null) },
            t[1],
            { role: 'dialog' },
            { tabindex: '0' },
          ],
          h = {};
        for (let m = 0; m < d.length; m += 1) h = bo(h, d[m]);
        return {
          c() {
            (e = J('div')),
              u && u.c(),
              (n = it()),
              ge(r.$$.fragment),
              mn(e, h),
              Me(e, 'shepherd-has-cancel-icon', t[5]),
              Me(e, 'shepherd-has-title', t[6]),
              Me(e, 'shepherd-element', !0);
          },
          m(m, f) {
            X(m, e, f),
              u && u.m(e, null),
              Pe(e, n),
              se(r, e, null),
              t[13](e),
              (s = !0),
              a || ((l = st(e, 'keydown', t[7])), (a = !0));
          },
          p(m, f) {
            let [v] = f;
            m[4].options.arrow &&
            m[4].options.attachTo &&
            m[4].options.attachTo.element &&
            m[4].options.attachTo.on
              ? u || ((u = An()), u.c(), u.m(e, n))
              : u && (u.d(1), (u = null));
            const b = {};
            4 & v && (b.descriptionId = m[2]),
              8 & v && (b.labelId = m[3]),
              16 & v && (b.step = m[4]),
              r.$set(b),
              mn(
                e,
                (h = (function Ao(t, e) {
                  const n = {},
                    r = {},
                    o = { $$scope: 1 };
                  let i = t.length;
                  for (; i--; ) {
                    const s = t[i],
                      a = e[i];
                    if (a) {
                      for (const l in s) l in a || (r[l] = 1);
                      for (const l in a) o[l] || ((n[l] = a[l]), (o[l] = 1));
                      t[i] = a;
                    } else for (const l in s) o[l] = 1;
                  }
                  for (const s in r) s in n || (n[s] = void 0);
                  return n;
                })(d, [
                  (!s ||
                    (20 & v &&
                      o !== (o = R(m[4].options.text) ? null : m[2]))) && {
                    'aria-describedby': o,
                  },
                  (!s ||
                    (24 & v &&
                      i !== (i = m[4].options.title ? m[3] : null))) && {
                    'aria-labelledby': i,
                  },
                  2 & v && m[1],
                  { role: 'dialog' },
                  { tabindex: '0' },
                ]))
              ),
              Me(e, 'shepherd-has-cancel-icon', m[5]),
              Me(e, 'shepherd-has-title', m[6]),
              Me(e, 'shepherd-element', !0);
          },
          i(m) {
            s || (A(r.$$.fragment, m), (s = !0));
          },
          o(m) {
            I(r.$$.fragment, m), (s = !1);
          },
          d(m) {
            m && U(e), u && u.d(), ae(r), t[13](null), (a = !1), l();
          },
        };
      }
      function Cn(t) {
        return t.split(' ').filter((e) => !!e.length);
      }
      function ti(t, e, n) {
        let m,
          f,
          v,
          {
            classPrefix: r,
            element: o,
            descriptionId: i,
            firstFocusableElement: s,
            focusableElements: a,
            labelId: l,
            lastFocusableElement: u,
            step: d,
            dataStepId: h,
          } = e;
        return (
          (function _o(t) {
            gn().$$.on_mount.push(t);
          })(() => {
            n(1, (h = { [`data-${r}shepherd-step-id`]: d.id })),
              n(
                9,
                (a = o.querySelectorAll(
                  'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'
                ))
              ),
              n(8, (s = a[0])),
              n(10, (u = a[a.length - 1]));
          }),
          Ct(() => {
            v !== d.options.classes &&
              (function T() {
                (function O(p) {
                  if (He(p)) {
                    const g = Cn(p);
                    g.length && o.classList.remove(...g);
                  }
                })(v),
                  (v = d.options.classes),
                  (function _(p) {
                    if (He(p)) {
                      const g = Cn(p);
                      g.length && o.classList.add(...g);
                    }
                  })(v);
              })();
          }),
          (t.$$set = (p) => {
            'classPrefix' in p && n(11, (r = p.classPrefix)),
              'element' in p && n(0, (o = p.element)),
              'descriptionId' in p && n(2, (i = p.descriptionId)),
              'firstFocusableElement' in p &&
                n(8, (s = p.firstFocusableElement)),
              'focusableElements' in p && n(9, (a = p.focusableElements)),
              'labelId' in p && n(3, (l = p.labelId)),
              'lastFocusableElement' in p &&
                n(10, (u = p.lastFocusableElement)),
              'step' in p && n(4, (d = p.step)),
              'dataStepId' in p && n(1, (h = p.dataStepId));
          }),
          (t.$$.update = () => {
            16 & t.$$.dirty &&
              (n(
                5,
                (m =
                  d.options &&
                  d.options.cancelIcon &&
                  d.options.cancelIcon.enabled)
              ),
              n(6, (f = d.options && d.options.title)));
          }),
          [
            o,
            h,
            i,
            l,
            d,
            m,
            f,
            (p) => {
              const { tour: g } = d;
              switch (p.keyCode) {
                case 9:
                  if (0 === a.length) {
                    p.preventDefault();
                    break;
                  }
                  p.shiftKey
                    ? (document.activeElement === s ||
                        document.activeElement.classList.contains(
                          'shepherd-element'
                        )) &&
                      (p.preventDefault(), u.focus())
                    : document.activeElement === u &&
                      (p.preventDefault(), s.focus());
                  break;
                case 27:
                  g.options.exitOnEsc && d.cancel();
                  break;
                case 37:
                  g.options.keyboardNavigation && g.back();
                  break;
                case 39:
                  g.options.keyboardNavigation && g.next();
              }
            },
            s,
            a,
            u,
            r,
            () => o,
            function c(p) {
              Ie[p ? 'unshift' : 'push'](() => {
                (o = p), n(0, o);
              });
            },
          ]
        );
      }
      class ni extends te {
        constructor(e) {
          super(),
            ee(this, e, ti, Zo, Q, {
              classPrefix: 11,
              element: 0,
              descriptionId: 2,
              firstFocusableElement: 8,
              focusableElements: 9,
              labelId: 3,
              lastFocusableElement: 10,
              step: 4,
              dataStepId: 1,
              getElement: 12,
            });
        }
        get getElement() {
          return this.$$.ctx[12];
        }
      }
      (function ri(t, e) {
        return t((e = { exports: {} }), e.exports), e.exports;
      })(function (t, e) {
        t.exports = {
          polyfill: function n() {
            var r = window,
              o = document;
            if (
              !('scrollBehavior' in o.documentElement.style) ||
              !0 === r.__forceSmoothScrollPolyfill__
            ) {
              var i = r.HTMLElement || r.Element,
                s = 468,
                a = {
                  scroll: r.scroll || r.scrollTo,
                  scrollBy: r.scrollBy,
                  elementScroll: i.prototype.scroll || h,
                  scrollIntoView: i.prototype.scrollIntoView,
                },
                l =
                  r.performance && r.performance.now
                    ? r.performance.now.bind(r.performance)
                    : Date.now,
                d = (function u(c) {
                  return new RegExp(
                    ['MSIE ', 'Trident/', 'Edge/'].join('|')
                  ).test(c);
                })(r.navigator.userAgent)
                  ? 1
                  : 0;
              (r.scroll = r.scrollTo =
                function () {
                  if (void 0 !== arguments[0]) {
                    if (!0 === f(arguments[0]))
                      return void a.scroll.call(
                        r,
                        void 0 !== arguments[0].left
                          ? arguments[0].left
                          : 'object' != typeof arguments[0]
                          ? arguments[0]
                          : r.scrollX || r.pageXOffset,
                        void 0 !== arguments[0].top
                          ? arguments[0].top
                          : void 0 !== arguments[1]
                          ? arguments[1]
                          : r.scrollY || r.pageYOffset
                      );
                    E.call(
                      r,
                      o.body,
                      void 0 !== arguments[0].left
                        ? ~~arguments[0].left
                        : r.scrollX || r.pageXOffset,
                      void 0 !== arguments[0].top
                        ? ~~arguments[0].top
                        : r.scrollY || r.pageYOffset
                    );
                  }
                }),
                (r.scrollBy = function () {
                  if (void 0 !== arguments[0]) {
                    if (f(arguments[0]))
                      return void a.scrollBy.call(
                        r,
                        void 0 !== arguments[0].left
                          ? arguments[0].left
                          : 'object' != typeof arguments[0]
                          ? arguments[0]
                          : 0,
                        void 0 !== arguments[0].top
                          ? arguments[0].top
                          : void 0 !== arguments[1]
                          ? arguments[1]
                          : 0
                      );
                    E.call(
                      r,
                      o.body,
                      ~~arguments[0].left + (r.scrollX || r.pageXOffset),
                      ~~arguments[0].top + (r.scrollY || r.pageYOffset)
                    );
                  }
                }),
                (i.prototype.scroll = i.prototype.scrollTo =
                  function () {
                    if (void 0 !== arguments[0]) {
                      if (!0 === f(arguments[0])) {
                        if (
                          'number' == typeof arguments[0] &&
                          void 0 === arguments[1]
                        )
                          throw new SyntaxError('Value could not be converted');
                        return void a.elementScroll.call(
                          this,
                          void 0 !== arguments[0].left
                            ? ~~arguments[0].left
                            : 'object' != typeof arguments[0]
                            ? ~~arguments[0]
                            : this.scrollLeft,
                          void 0 !== arguments[0].top
                            ? ~~arguments[0].top
                            : void 0 !== arguments[1]
                            ? ~~arguments[1]
                            : this.scrollTop
                        );
                      }
                      var c = arguments[0].left,
                        p = arguments[0].top;
                      E.call(
                        this,
                        this,
                        typeof c > 'u' ? this.scrollLeft : ~~c,
                        typeof p > 'u' ? this.scrollTop : ~~p
                      );
                    }
                  }),
                (i.prototype.scrollBy = function () {
                  if (void 0 !== arguments[0]) {
                    if (!0 === f(arguments[0]))
                      return void a.elementScroll.call(
                        this,
                        void 0 !== arguments[0].left
                          ? ~~arguments[0].left + this.scrollLeft
                          : ~~arguments[0] + this.scrollLeft,
                        void 0 !== arguments[0].top
                          ? ~~arguments[0].top + this.scrollTop
                          : ~~arguments[1] + this.scrollTop
                      );
                    this.scroll({
                      left: ~~arguments[0].left + this.scrollLeft,
                      top: ~~arguments[0].top + this.scrollTop,
                      behavior: arguments[0].behavior,
                    });
                  }
                }),
                (i.prototype.scrollIntoView = function () {
                  if (!0 !== f(arguments[0])) {
                    var c = (function O(c) {
                        for (; c !== o.body && !1 === T(c); )
                          c = c.parentNode || c.host;
                        return c;
                      })(this),
                      p = c.getBoundingClientRect(),
                      g = this.getBoundingClientRect();
                    c !== o.body
                      ? (E.call(
                          this,
                          c,
                          c.scrollLeft + g.left - p.left,
                          c.scrollTop + g.top - p.top
                        ),
                        'fixed' !== r.getComputedStyle(c).position &&
                          r.scrollBy({
                            left: p.left,
                            top: p.top,
                            behavior: 'smooth',
                          }))
                      : r.scrollBy({
                          left: g.left,
                          top: g.top,
                          behavior: 'smooth',
                        });
                  } else
                    a.scrollIntoView.call(
                      this,
                      void 0 === arguments[0] || arguments[0]
                    );
                });
            }
            function h(c, p) {
              (this.scrollLeft = c), (this.scrollTop = p);
            }
            function f(c) {
              if (
                null === c ||
                'object' != typeof c ||
                void 0 === c.behavior ||
                'auto' === c.behavior ||
                'instant' === c.behavior
              )
                return !0;
              if ('object' == typeof c && 'smooth' === c.behavior) return !1;
              throw new TypeError(
                'behavior member of ScrollOptions ' +
                  c.behavior +
                  ' is not a valid value for enumeration ScrollBehavior.'
              );
            }
            function v(c, p) {
              return 'Y' === p
                ? c.clientHeight + d < c.scrollHeight
                : 'X' === p
                ? c.clientWidth + d < c.scrollWidth
                : void 0;
            }
            function b(c, p) {
              var g = r.getComputedStyle(c, null)['overflow' + p];
              return 'auto' === g || 'scroll' === g;
            }
            function T(c) {
              var p = v(c, 'Y') && b(c, 'Y'),
                g = v(c, 'X') && b(c, 'X');
              return p || g;
            }
            function _(c) {
              var g,
                y,
                w,
                S = (l() - c.startTime) / s;
              (g = (function m(c) {
                return 0.5 * (1 - Math.cos(Math.PI * c));
              })((S = S > 1 ? 1 : S))),
                c.method.call(
                  c.scrollable,
                  (y = c.startX + (c.x - c.startX) * g),
                  (w = c.startY + (c.y - c.startY) * g)
                ),
                (y !== c.x || w !== c.y) &&
                  r.requestAnimationFrame(_.bind(r, c));
            }
            function E(c, p, g) {
              var y,
                w,
                S,
                C,
                M = l();
              c === o.body
                ? ((y = r),
                  (w = r.scrollX || r.pageXOffset),
                  (S = r.scrollY || r.pageYOffset),
                  (C = a.scroll))
                : ((y = c), (w = c.scrollLeft), (S = c.scrollTop), (C = h)),
                _({
                  scrollable: y,
                  method: C,
                  startTime: M,
                  startX: w,
                  startY: S,
                  x: p,
                  y: g,
                });
            }
          },
        };
      }).polyfill();
      class Bt extends gt {
        constructor(e, n) {
          return (
            void 0 === n && (n = {}),
            super(e, n),
            (this.tour = e),
            (this.classPrefix = this.tour.options
              ? ln(this.tour.options.classPrefix)
              : ''),
            (this.styles = e.styles),
            Ut(this),
            this._setOptions(n),
            this
          );
        }
        cancel() {
          this.tour.cancel(), this.trigger('cancel');
        }
        complete() {
          this.tour.complete(), this.trigger('complete');
        }
        destroy() {
          this.tooltip && (this.tooltip.destroy(), (this.tooltip = null)),
            mt(this.el) &&
              this.el.parentNode &&
              (this.el.parentNode.removeChild(this.el), (this.el = null)),
            this._updateStepTargetOnHide(),
            this.trigger('destroy');
        }
        getTour() {
          return this.tour;
        }
        hide() {
          this.tour.modal.hide(),
            this.trigger('before-hide'),
            this.el && (this.el.hidden = !0),
            this._updateStepTargetOnHide(),
            this.trigger('hide');
        }
        isCentered() {
          const e = xt(this);
          return !e.element || !e.on;
        }
        isOpen() {
          return !(!this.el || this.el.hidden);
        }
        show() {
          if (_e(this.options.beforeShowPromise)) {
            const e = this.options.beforeShowPromise();
            if (!R(e)) return e.then(() => this._show());
          }
          this._show();
        }
        updateStepOptions(e) {
          Object.assign(this.options, e),
            this.shepherdElementComponent &&
              this.shepherdElementComponent.$set({ step: this });
        }
        getElement() {
          return this.el;
        }
        getTarget() {
          return this.target;
        }
        _createTooltipContent() {
          return (
            (this.shepherdElementComponent = new ni({
              target: this.tour.options.stepsContainer || document.body,
              props: {
                classPrefix: this.classPrefix,
                descriptionId: `${this.id}-description`,
                labelId: `${this.id}-label`,
                step: this,
                styles: this.styles,
              },
            })),
            this.shepherdElementComponent.getElement()
          );
        }
        _scrollTo(e) {
          const { element: n } = xt(this);
          _e(this.options.scrollToHandler)
            ? this.options.scrollToHandler(n)
            : (function or(t) {
                return t instanceof Element;
              })(n) &&
              'function' == typeof n.scrollIntoView &&
              n.scrollIntoView(e);
        }
        _getClassOptions(e) {
          const n =
              this.tour &&
              this.tour.options &&
              this.tour.options.defaultStepOptions,
            o = n && n.classes ? n.classes : '',
            i = [...(e.classes ? e.classes : '').split(' '), ...o.split(' ')],
            s = new Set(i);
          return Array.from(s).join(' ').trim();
        }
        _setOptions(e) {
          void 0 === e && (e = {});
          let n =
            this.tour &&
            this.tour.options &&
            this.tour.options.defaultStepOptions;
          (n = rr({}, n || {})),
            (this.options = Object.assign({ arrow: !0 }, n, e));
          const { when: r } = this.options;
          (this.options.classes = this._getClassOptions(e)),
            this.destroy(),
            (this.id = this.options.id || `step-${At()}`),
            r &&
              Object.keys(r).forEach((o) => {
                this.on(o, r[o], this);
              });
        }
        _setupElements() {
          R(this.el) || this.destroy(),
            (this.el = this._createTooltipContent()),
            this.options.advanceOn &&
              (function sr(t) {
                const { event: e, selector: n } = t.options.advanceOn || {};
                if (!e)
                  return console.error(
                    'advanceOn was defined, but no event name was passed.'
                  );
                {
                  const r = (function ir(t, e) {
                    return (n) => {
                      if (e.isOpen()) {
                        const r = e.el && n.currentTarget === e.el;
                        ((!R(t) && n.currentTarget.matches(t)) || r) &&
                          e.tour.next();
                      }
                    };
                  })(n, t);
                  let o;
                  try {
                    o = document.querySelector(n);
                  } catch {}
                  if (!R(n) && !o)
                    return console.error(
                      `No element was found for the selector supplied to advanceOn: ${n}`
                    );
                  o
                    ? (o.addEventListener(e, r),
                      t.on('destroy', () => o.removeEventListener(e, r)))
                    : (document.body.addEventListener(e, r, !0),
                      t.on('destroy', () =>
                        document.body.removeEventListener(e, r, !0)
                      ));
                }
              })(this),
            go(this);
        }
        _show() {
          this.trigger('before-show'),
            this._setupElements(),
            this.tour.modal || this.tour._setupModal(),
            this.tour.modal.setupForStep(this),
            this._styleTargetElementForStep(this),
            (this.el.hidden = !1),
            this.options.scrollTo &&
              setTimeout(() => {
                this._scrollTo(this.options.scrollTo);
              }),
            (this.el.hidden = !1);
          const e = this.shepherdElementComponent.getElement(),
            n = this.target || document.body;
          n.classList.add(`${this.classPrefix}shepherd-enabled`),
            n.classList.add(`${this.classPrefix}shepherd-target`),
            e.classList.add('shepherd-enabled'),
            this.trigger('show');
        }
        _styleTargetElementForStep(e) {
          const n = e.target;
          n &&
            (e.options.highlightClass &&
              n.classList.add(e.options.highlightClass),
            n.classList.remove('shepherd-target-click-disabled'),
            !1 === e.options.canClickTarget &&
              n.classList.add('shepherd-target-click-disabled'));
        }
        _updateStepTargetOnHide() {
          const e = this.target || document.body;
          this.options.highlightClass &&
            e.classList.remove(this.options.highlightClass),
            e.classList.remove(
              'shepherd-target-click-disabled',
              `${this.classPrefix}shepherd-enabled`,
              `${this.classPrefix}shepherd-target`
            );
        }
      }
      function si(t) {
        let e, n, r, o, i;
        return {
          c() {
            (e = pn('svg')),
              (n = pn('path')),
              P(n, 'd', t[2]),
              P(
                e,
                'class',
                (r =
                  (t[1] ? 'shepherd-modal-is-visible' : '') +
                  ' shepherd-modal-overlay-container')
              );
          },
          m(s, a) {
            X(s, e, a),
              Pe(e, n),
              t[11](e),
              o || ((i = st(e, 'touchmove', t[3])), (o = !0));
          },
          p(s, a) {
            let [l] = a;
            4 & l && P(n, 'd', s[2]),
              2 & l &&
                r !==
                  (r =
                    (s[1] ? 'shepherd-modal-is-visible' : '') +
                    ' shepherd-modal-overlay-container') &&
                P(e, 'class', r);
          },
          i: W,
          o: W,
          d(s) {
            s && U(e), t[11](null), (o = !1), i();
          },
        };
      }
      function Mn(t) {
        if (!t) return null;
        const n =
          t instanceof HTMLElement && window.getComputedStyle(t).overflowY;
        return 'hidden' !== n &&
          'visible' !== n &&
          t.scrollHeight >= t.clientHeight
          ? t
          : Mn(t.parentElement);
      }
      function li(t, e, n) {
        let { element: r, openingProperties: o } = e;
        At();
        let s,
          a,
          i = !1;
        function u() {
          n(4, (o = { width: 0, height: 0, x: 0, y: 0, r: 0 }));
        }
        function d() {
          n(1, (i = !1)), O();
        }
        function h(c, p, g, y) {
          if ((void 0 === c && (c = 0), void 0 === p && (p = 0), y)) {
            const { y: w, height: S } = (function ai(t, e) {
                const n = t.getBoundingClientRect();
                let r = n.y || n.top,
                  o = n.bottom || r + n.height;
                if (e) {
                  const s = e.getBoundingClientRect(),
                    a = s.y || s.top,
                    l = s.bottom || a + s.height;
                  (r = Math.max(r, a)), (o = Math.min(o, l));
                }
                return { y: r, height: Math.max(o - r, 0) };
              })(y, g),
              { x: C, width: M, left: L } = y.getBoundingClientRect();
            n(
              4,
              (o = {
                width: M + 2 * c,
                height: S + 2 * c,
                x: (C || L) - c,
                y: w - c,
                r: p,
              })
            );
          } else u();
        }
        function f() {
          n(1, (i = !0));
        }
        u();
        const v = (c) => {
          c.preventDefault();
        };
        function O() {
          s && (cancelAnimationFrame(s), (s = void 0)),
            window.removeEventListener('touchmove', v, { passive: !1 });
        }
        return (
          (t.$$set = (c) => {
            'element' in c && n(0, (r = c.element)),
              'openingProperties' in c && n(4, (o = c.openingProperties));
          }),
          (t.$$.update = () => {
            16 & t.$$.dirty &&
              n(
                2,
                (a = (function ii(t) {
                  let { width: e, height: n, x: r = 0, y: o = 0, r: i = 0 } = t;
                  const { innerWidth: s, innerHeight: a } = window;
                  return `M${s},${a}H0V0H${s}V${a}ZM${
                    r + i
                  },${o}a${i},${i},0,0,0-${i},${i}V${
                    n + o - i
                  }a${i},${i},0,0,0,${i},${i}H${
                    e + r - i
                  }a${i},${i},0,0,0,${i}-${i}V${
                    o + i
                  }a${i},${i},0,0,0-${i}-${i}Z`;
                })(o))
              );
          }),
          [
            r,
            i,
            a,
            (c) => {
              c.stopPropagation();
            },
            o,
            () => r,
            u,
            d,
            h,
            function m(c) {
              O(),
                c.tour.options.useModalOverlay
                  ? ((function _(c) {
                      const {
                          modalOverlayOpeningPadding: p,
                          modalOverlayOpeningRadius: g,
                        } = c.options,
                        y = Mn(c.target),
                        w = () => {
                          (s = void 0),
                            h(p, g, y, c.target),
                            (s = requestAnimationFrame(w));
                        };
                      w(),
                        (function T() {
                          window.addEventListener('touchmove', v, {
                            passive: !1,
                          });
                        })();
                    })(c),
                    f())
                  : d();
            },
            f,
            function E(c) {
              Ie[c ? 'unshift' : 'push'](() => {
                (r = c), n(0, r);
              });
            },
          ]
        );
      }
      class ci extends te {
        constructor(e) {
          super(),
            ee(this, e, li, si, Q, {
              element: 0,
              openingProperties: 4,
              getElement: 5,
              closeModalOpening: 6,
              hide: 7,
              positionModal: 8,
              setupForStep: 9,
              show: 10,
            });
        }
        get getElement() {
          return this.$$.ctx[5];
        }
        get closeModalOpening() {
          return this.$$.ctx[6];
        }
        get hide() {
          return this.$$.ctx[7];
        }
        get positionModal() {
          return this.$$.ctx[8];
        }
        get setupForStep() {
          return this.$$.ctx[9];
        }
        get show() {
          return this.$$.ctx[10];
        }
      }
      const Be = new gt();
      Object.assign(Be, {
        Tour: class ui extends gt {
          constructor(e) {
            return (
              void 0 === e && (e = {}),
              super(e),
              Ut(this),
              (this.options = Object.assign(
                {},
                { exitOnEsc: !0, keyboardNavigation: !0 },
                e
              )),
              (this.classPrefix = ln(this.options.classPrefix)),
              (this.steps = []),
              this.addSteps(this.options.steps),
              ['active', 'cancel', 'complete', 'inactive', 'show', 'start'].map(
                (o) => {
                  ((i) => {
                    this.on(i, (s) => {
                      ((s = s || {}).tour = this), Be.trigger(i, s);
                    });
                  })(o);
                }
              ),
              this._setTourID(),
              this
            );
          }
          addStep(e, n) {
            let r = e;
            return (
              r instanceof Bt ? (r.tour = this) : (r = new Bt(this, r)),
              R(n) ? this.steps.push(r) : this.steps.splice(n, 0, r),
              r
            );
          }
          addSteps(e) {
            return (
              Array.isArray(e) &&
                e.forEach((n) => {
                  this.addStep(n);
                }),
              this
            );
          }
          back() {
            const e = this.steps.indexOf(this.currentStep);
            this.show(e - 1, !1);
          }
          cancel() {
            this.options.confirmCancel
              ? window.confirm(
                  this.options.confirmCancelMessage ||
                    'Are you sure you want to stop the tour?'
                ) && this._done('cancel')
              : this._done('cancel');
          }
          complete() {
            this._done('complete');
          }
          getById(e) {
            return this.steps.find((n) => n.id === e);
          }
          getCurrentStep() {
            return this.currentStep;
          }
          hide() {
            const e = this.getCurrentStep();
            if (e) return e.hide();
          }
          isActive() {
            return Be.activeTour === this;
          }
          next() {
            const e = this.steps.indexOf(this.currentStep);
            e === this.steps.length - 1
              ? this.complete()
              : this.show(e + 1, !0);
          }
          removeStep(e) {
            const n = this.getCurrentStep();
            this.steps.some((r, o) => {
              if (r.id === e)
                return (
                  r.isOpen() && r.hide(),
                  r.destroy(),
                  this.steps.splice(o, 1),
                  !0
                );
            }),
              n &&
                n.id === e &&
                ((this.currentStep = void 0),
                this.steps.length ? this.show(0) : this.cancel());
          }
          show(e, n) {
            void 0 === e && (e = 0), void 0 === n && (n = !0);
            const r = He(e) ? this.getById(e) : this.steps[e];
            r &&
              (this._updateStateBeforeShow(),
              _e(r.options.showOn) && !r.options.showOn()
                ? this._skipStep(r, n)
                : (this.trigger('show', {
                    step: r,
                    previous: this.currentStep,
                  }),
                  (this.currentStep = r),
                  r.show()));
          }
          start() {
            this.trigger('start'),
              (this.focusedElBeforeOpen = document.activeElement),
              (this.currentStep = null),
              this._setupModal(),
              this._setupActiveTour(),
              this.next();
          }
          _done(e) {
            const n = this.steps.indexOf(this.currentStep);
            if (
              (Array.isArray(this.steps) &&
                this.steps.forEach((r) => r.destroy()),
              (function oi(t) {
                if (t) {
                  const { steps: e } = t;
                  e.forEach((n) => {
                    n.options &&
                      !1 === n.options.canClickTarget &&
                      n.options.attachTo &&
                      n.target instanceof HTMLElement &&
                      n.target.classList.remove(
                        'shepherd-target-click-disabled'
                      );
                  });
                }
              })(this),
              this.trigger(e, { index: n }),
              (Be.activeTour = null),
              this.trigger('inactive', { tour: this }),
              this.modal && this.modal.hide(),
              ('cancel' === e || 'complete' === e) && this.modal)
            ) {
              const r = document.querySelector(
                '.shepherd-modal-overlay-container'
              );
              r && r.remove();
            }
            mt(this.focusedElBeforeOpen) && this.focusedElBeforeOpen.focus();
          }
          _setupActiveTour() {
            this.trigger('active', { tour: this }), (Be.activeTour = this);
          }
          _setupModal() {
            this.modal = new ci({
              target: this.options.modalContainer || document.body,
              props: { classPrefix: this.classPrefix, styles: this.styles },
            });
          }
          _skipStep(e, n) {
            const r = this.steps.indexOf(e);
            r === this.steps.length - 1
              ? this.complete()
              : this.show(n ? r + 1 : r - 1, n);
          }
          _updateStateBeforeShow() {
            this.currentStep && this.currentStep.hide(),
              this.isActive() || this._setupActiveTour();
          }
          _setTourID() {
            this.id = `${this.options.tourName || 'tour'}--${At()}`;
          }
        },
        Step: Bt,
      });
      var ne = x(78645),
        re = x(63019),
        fi = x(9315),
        di = x(65619),
        Rt = x(74825),
        In = x(81374),
        le = x(59773),
        pi = x(836),
        hi = x(79360),
        mi = x(8251),
        Y = (function (t) {
          return (
            (t.click = 'click'),
            (t.pointerover = 'pointerover'),
            (t.keyup = 'keyup'),
            (t.added = 'added'),
            (t.removed = 'removed'),
            t
          );
        })(Y || {});
      class vi {}
      const yi = [Y.click, Y.pointerover, Y.removed, Y.added, Y.keyup],
        wi = new Map([
          [13, 'enter'],
          [27, 'esc'],
        ]),
        Oi = {
          scrollTo: { behavior: 'smooth', block: 'center' },
          cancelIcon: { enabled: !0 },
        },
        Rn =
          'mdc-icon-button material-icons mat-mdc-icon-button mat-mdc-button-base',
        Ln = 'shepherd-void-button';
      class _i extends vi {
        _destroyedEvent$;
        shepherdTour;
        stepOptions;
        constructor(e = Oi) {
          super(), (this.stepOptions = e), this.newTour();
        }
        newTour(e) {
          if (
            ((this.shepherdTour = new Be.Tour(
              Object.assign({ defaultStepOptions: this.stepOptions }, e)
            )),
            (this._destroyedEvent$ = new ne.x()),
            (0, re.T)(
              (0, z.R)(this.shepherdTour, 'cancel'),
              (0, z.R)(this.shepherdTour, 'complete')
            )
              .pipe((0, In.P)())
              .subscribe(() => {
                this._destroyedEvent$.next(), this._destroyedEvent$.complete();
              }),
            e && e.abortOn)
          ) {
            const n = [];
            e.abortOn.forEach((o) => {
              const i = new ne.x();
              n.push(i), this._bindEvent(o, void 0, i, this._destroyedEvent$);
            });
            const r = (0, re.T)(...n)
              .pipe((0, le.R)(this._destroyedEvent$))
              .subscribe(() => {
                this.shepherdTour.complete(), r.unsubscribe();
              });
          }
        }
        back() {
          this.shepherdTour.back();
        }
        cancel() {
          this.shepherdTour.cancel();
        }
        next() {
          this.shepherdTour.next();
        }
        finish() {
          this.shepherdTour.complete();
        }
        addSteps(e) {
          this.shepherdTour.addSteps(this._prepareTour(e));
        }
        start() {
          this.shepherdTour.start();
        }
        _prepareTour(e, n = 'finish') {
          const r = new ne.x(),
            o = new ne.x();
          let i = !1;
          const s = new ne.x(),
            a = function () {
              const f = Array.from(
                  document.querySelectorAll('.shepherd-footer')
                ),
                v = f[f.length - 1],
                b = document.createElement('span');
              (b.className = 'shepherd-progress'),
                (b.innerText = `${this.shepherdTour.currentStep.options.count}/${l}`),
                v.insertBefore(b, v.querySelector('.shepherd-button'));
            };
          let l = 0;
          const u = e.map((f) => {
              let v = () => {};
              return (
                !0 === f.attachToOptions?.skipFromStepCount
                  ? (v = function () {})
                  : (void 0 === f.attachToOptions?.skipFromStepCount ||
                      !1 === f.attachToOptions?.skipFromStepCount) &&
                    ((f.count = ++l), (v = a.bind(this))),
                Object.assign({}, f, { when: { show: v } })
              );
            }),
            d = {
              text: n,
              action: this.finish.bind(this),
              classes: 'mdc-button mat-mdc-button mat-mdc-button-base',
            },
            h = { text: '', action() {}, classes: Ln };
          this._destroyedEvent$.pipe((0, In.P)()).subscribe(() => {
            r.complete(), o.complete(), s.next(), s.complete();
          });
          const m = u.length;
          return (
            u.forEach((f, v) => {
              const b = {
                  text: 'chevron_right',
                  action: () => {
                    o.next(), this.shepherdTour.next();
                  },
                  classes: Rn,
                },
                T = {
                  text: 'chevron_left',
                  action: () => {
                    r.next(),
                      (i = !0),
                      f.attachToOptions && f.attachToOptions.goBackTo
                        ? this.shepherdTour.show(f.attachToOptions.goBackTo, !1)
                        : this.shepherdTour.back();
                  },
                  classes: !1 === f.advanceOnOptions?.allowGoBack ? Ln : Rn,
                };
              (f.highlightClass =
                f.attachToOptions && f.attachToOptions.highlight
                  ? 'shepherd-highlight'
                  : f.highlightClass),
                (!f.buttons || 0 === f.buttons.length) &&
                  (f.buttons = 0 === v ? [b] : v === m - 1 ? [T, d] : [T, b]);
              let O = f.advanceOn;
              (('object' == typeof O &&
                !Array.isArray(O) &&
                O.event &&
                yi.indexOf(O.event.split('.')[0]) > -1) ||
                O instanceof Array) &&
                ((f.advanceOn = void 0),
                (f.buttons =
                  f.advanceOnOptions && f.advanceOnOptions.allowGoBack
                    ? [T, h]
                    : [h])),
                (f.beforeShowPromise = () =>
                  new Promise((_) => {
                    const E = () => {
                        if (O && !f.advanceOn) {
                          Array.isArray(O) || (O = [O]);
                          const w = [];
                          O.forEach((C, M) => {
                            const L = new ne.x();
                            w.push(L),
                              this._bindEvent(C, f.advanceOnOptions, L, s);
                          });
                          const S = (0, fi.D)(...w)
                            .pipe((0, le.R)((0, re.T)(s, r)))
                            .subscribe(() => {
                              f.advanceOnOptions && f.advanceOnOptions.jumpTo
                                ? this.shepherdTour.show(
                                    f.advanceOnOptions.jumpTo
                                  )
                                : this.shepherdTour.next(),
                                o.next(),
                                S.unsubscribe();
                            });
                        }
                        if (f.abortOn) {
                          const w = [];
                          f.abortOn.forEach((C) => {
                            const M = new ne.x();
                            w.push(M), this._bindEvent(C, void 0, M, s);
                          });
                          const S = (0, re.T)(...w)
                            .pipe((0, le.R)((0, re.T)(s, r, o)))
                            .subscribe(() => {
                              this.shepherdTour.complete(), S.unsubscribe();
                            });
                        }
                      },
                      c = new ne.x(),
                      p = new ne.x(),
                      g = new di.X(-1);
                    let y;
                    'string' == typeof f.attachTo
                      ? (y = f.attachTo)
                      : 'object' == typeof f.attachTo &&
                        'string' == typeof f.attachTo.element &&
                        (y = f.attachTo.element),
                      y
                        ? (this.shepherdTour.getCurrentStep() ===
                            this.shepherdTour.steps[0] &&
                            this.shepherdTour
                              .getCurrentStep()
                              ?.updateStepOptions({
                                buttons: e[v].advanceOn ? [h] : [b],
                              }),
                          g
                            .pipe(
                              (0, pi.T)(1),
                              (function gi(t) {
                                return (0, hi.e)((e, n) => {
                                  let r = !1,
                                    o = 0;
                                  e.subscribe(
                                    (0, mi.x)(
                                      n,
                                      (i) =>
                                        (r || (r = !t(i, o++))) && n.next(i)
                                    )
                                  );
                                });
                              })((w) =>
                                f.attachToOptions &&
                                void 0 !== f.attachToOptions.retries
                                  ? w < f.attachToOptions.retries
                                  : w < 20
                              ),
                              (0, le.R)((0, re.T)(c.asObservable(), s))
                            )
                            .subscribe((w) => {
                              if (
                                (p.next(1),
                                p.complete(),
                                f.attachToOptions &&
                                  f.attachToOptions.skipIfNotFound)
                              )
                                if (i)
                                  0 ===
                                  this.shepherdTour.steps.indexOf(
                                    this.shepherdTour.getCurrentStep()
                                  )
                                    ? this.shepherdTour.next()
                                    : this.shepherdTour.back(),
                                    (i = !1);
                                else {
                                  const S = this.shepherdTour.getCurrentStep();
                                  S?.destroy(),
                                    this.shepherdTour.next(),
                                    this.shepherdTour.removeStep(S?.id ?? '');
                                }
                              else
                                f.attachToOptions && f.attachToOptions.else
                                  ? this.shepherdTour.show(
                                      f.attachToOptions.else
                                    )
                                  : (console.warn(
                                      `Retries reached trying to find ${y}. Retried  ${w} times.`
                                    ),
                                    _());
                            }),
                          (0, Rt.H)(
                            (f.attachToOptions &&
                              f.attachToOptions.timeBeforeShow) ||
                              100,
                            (f.attachToOptions && f.attachToOptions.interval) ||
                              500
                          )
                            .pipe((0, le.R)((0, re.T)(c, p, s)))
                            .subscribe(() => {
                              document.querySelector(y ?? '')
                                ? (c.next(), c.complete(), E(), _())
                                : g.next(g.value + 1);
                            }),
                          s.subscribe(() => {
                            c.next(), c.complete(), p.next(1), p.complete();
                          }))
                        : (0, Rt.H)(
                            (f.attachToOptions &&
                              f.attachToOptions.timeBeforeShow) ||
                              100
                          )
                            .pipe((0, le.R)((0, re.T)(s)))
                            .subscribe(() => {
                              _();
                            });
                  }));
            }),
            u
          );
        }
        _bindEvent(e, n, r, o) {
          const i = e.selector ?? '',
            s = e.event,
            a = (0, Rt.H)(
              (n && n.timeBeforeShow) || 100,
              (n && n.interval) || 500
            )
              .pipe((0, le.R)(o))
              .subscribe(() => {
                const l = document.querySelector(i);
                if (l)
                  if ((a.unsubscribe(), s === Y.added)) r.next(), r.complete();
                  else if (
                    s === Y.click ||
                    s === Y.pointerover ||
                    (s && s.indexOf(Y.keyup) > -1)
                  ) {
                    const u = s?.split('.')[0],
                      d = s?.split('.')[1];
                    (0, z.R)(l, u)
                      .pipe(
                        (0, fe.h)(
                          (h) =>
                            !(h instanceof KeyboardEvent) ||
                            wi.get(h.keyCode) === d
                        ),
                        (0, le.R)((0, re.T)(r.asObservable(), o))
                      )
                      .subscribe(() => {
                        r.next(), r.complete();
                      });
                  } else if (s === Y.removed) {
                    const u = new MutationObserver(() => {
                      document.body.contains(l) ||
                        (r.next(), r.complete(), u.disconnect());
                    });
                    o.subscribe(() => {
                      u.disconnect();
                    }),
                      u.observe(l, {
                        childList: !0,
                        subtree: !0,
                        attributes: !0,
                      });
                  }
              });
        }
      }
      var Re = x(19212),
        Ei = x(69862),
        jn = (function (t) {
          return (
            (t.complete = 'complete'),
            (t.cancel = 'cancel'),
            (t.hide = 'hide'),
            (t.show = 'show'),
            (t.start = 'start'),
            (t.active = 'active'),
            (t.inactive = 'inactive'),
            t
          );
        })(jn || {});
      let Dn = (() => {
          class t extends _i {
            _router;
            _route;
            _httpClient;
            _toursMap = new Map();
            _tourStepURLs = new Map();
            constructor(n, r, o) {
              super(),
                (this._router = n),
                (this._route = r),
                (this._httpClient = o),
                n.events
                  .pipe(
                    (0, fe.h)(
                      (i) =>
                        i instanceof ue.OD && 'popstate' === i.navigationTrigger
                    )
                  )
                  .subscribe(() => {
                    this.shepherdTour.isActive() && this.shepherdTour.cancel();
                  });
            }
            tourEvent$(n) {
              return (0, z.R)(this.shepherdTour, n);
            }
            registerTour(n, r) {
              var o = this;
              return (0, B.Z)(function* () {
                const i = 'string' == typeof r ? yield o._loadTour(r) : r;
                o._toursMap.set(n, i);
              })();
            }
            startTour(n) {
              const r = this._getTour(n);
              if ((this.finish(), r && r.steps && r.steps.length)) {
                this.newTour(Object.assign({}, r, { steps: void 0 }));
                const o = this.shepherdTour.addSteps(
                  this._configureRoutesForSteps(
                    this._prepareTour(r.steps, r.finishButtonText)
                  )
                );
                return (
                  this.tourEvent$(jn.show).subscribe((i) => {
                    const s = this._router.url.split(/[?#]/)[0],
                      {
                        step: { id: a, options: l },
                      } = i;
                    if (this._tourStepURLs.has(a)) {
                      const u = this._tourStepURLs.get(a);
                      u !== s && this._router.navigate([u]);
                    } else
                      this._tourStepURLs.set(
                        a,
                        l && l.routing ? l.routing.route : s
                      );
                  }),
                  this.start(),
                  o
                );
              }
              console.warn(
                `Tour ${n} does not exist. Please try another tour.`
              );
            }
            initializeOnQueryParams(n = 'tour') {
              return this._route.queryParamMap.pipe(
                (0, Oe.b)(100),
                (0, oe.b)((r) => {
                  const o = r.get(n);
                  if (o) {
                    this.startTour(o);
                    const i = new URLSearchParams(window.location.search);
                    i.delete(n);
                    let s =
                      window.location.protocol +
                      '//' +
                      window.location.host +
                      window.location.pathname;
                    i.toString() && (s += '?' + i.toString()),
                      window.history.replaceState({ path: s }, '', s);
                  }
                })
              );
            }
            setNextBtnDisability(n, r) {
              if (this.shepherdTour.getById(n)) {
                const o = this.shepherdTour.getById(n).options;
                o.buttons?.forEach((i) => {
                  'chevron_right' === i.text && (i.disabled = r);
                }),
                  this.shepherdTour.getById(n)?.updateStepOptions(o);
              }
            }
            _loadTour(n) {
              var r = this;
              return (0, B.Z)(function* () {
                const o = r._httpClient.get(n);
                try {
                  return yield o
                    .pipe((0, we.U)((i) => JSON.parse(JSON.stringify(i))))
                    .toPromise();
                } catch {
                  return;
                }
              })();
            }
            _getTour(n) {
              return this._toursMap.get(n);
            }
            _configureRoutesForSteps(n) {
              return (
                n.forEach((r) => {
                  if (r.routing) {
                    const o = r.routing.route;
                    if (r.beforeShowPromise) {
                      const i = r.beforeShowPromise;
                      r.beforeShowPromise = () =>
                        this._router
                          .navigate([o], r.routing?.extras)
                          .then(() => i());
                    } else
                      r.beforeShowPromise = () => this._router.navigate([o]);
                  }
                }),
                n
              );
            }
            static ɵfac = function (r) {
              return new (r || t)(Re.LFG(ue.F0), Re.LFG(ue.gz), Re.LFG(Ei.eN));
            };
            static ɵprov = Re.Yz7({ token: t, factory: t.ɵfac });
          }
          return t;
        })(),
        Si = (() => {
          class t {
            static ɵfac = function (r) {
              return new (r || t)();
            };
            static ɵmod = Re.oAB({ type: t });
            static ɵinj = Re.cJS({ providers: [Dn], imports: [De.ez] });
          }
          return t;
        })();
    },
  },
]);
