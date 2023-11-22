'use strict';
var rv = Object.create;
var $i = Object.defineProperty;
var nv = Object.getOwnPropertyDescriptor;
var iv = Object.getOwnPropertyNames;
var sv = Object.getPrototypeOf,
  ov = Object.prototype.hasOwnProperty;
var B = (r, e) => () => (r && (e = r((r = 0))), e);
var E = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports),
  Nt = (r, e) => {
    for (var t in e) $i(r, t, { get: e[t], enumerable: !0 });
  },
  Wf = (r, e, t, n) => {
    if ((e && typeof e == 'object') || typeof e == 'function')
      for (let i of iv(e))
        !ov.call(r, i) &&
          i !== t &&
          $i(r, i, {
            get: () => e[i],
            enumerable: !(n = nv(e, i)) || n.enumerable,
          });
    return r;
  };
var br = (r, e, t) => (
    (t = r != null ? rv(sv(r)) : {}),
    Wf(
      e || !r || !r.__esModule
        ? $i(t, 'default', { value: r, enumerable: !0 })
        : t,
      r
    )
  ),
  be = (r) => Wf($i({}, '__esModule', { value: !0 }), r);
function Xf() {
  return (
    process.env.CI === 'true' ||
    process.env.TF_BUILD === 'true' ||
    process.env.GITHUB_ACTIONS === 'true' ||
    process.env.BUILDKITE === 'true' ||
    process.env.CIRCLECI === 'true' ||
    process.env.CIRRUS_CI === 'true' ||
    process.env.TRAVIS === 'true' ||
    !!process.env['bamboo.buildKey'] ||
    !!process.env.CODEBUILD_BUILD_ID ||
    !!process.env.GITLAB_CI ||
    !!process.env.HEROKU_TEST_RUN_ID ||
    !!process.env.BUILD_ID ||
    !!process.env.BUILD_BUILDID ||
    !!process.env.TEAMCITY_VERSION
  );
}
var Kf = B(() => {
  'use strict';
});
var Qf = E((TN, aa) => {
  'use strict';
  var av = require('fs'),
    Yf = require('path'),
    cv = require('os');
  function Jf(r) {
    console.log(`[dotenv][DEBUG] ${r}`);
  }
  var uv = `
`,
    lv = /^\s*([\w.-]+)\s*=\s*(.*)?\s*$/,
    fv = /\\n/g,
    hv = /\r\n|\n|\r/;
  function Zf(r, e) {
    let t = !!(e && e.debug),
      n = {};
    return (
      r
        .toString()
        .split(hv)
        .forEach(function (i, s) {
          let o = i.match(lv);
          if (o != null) {
            let a = o[1],
              c = o[2] || '',
              l = c.length - 1,
              u = c[0] === '"' && c[l] === '"';
            (c[0] === "'" && c[l] === "'") || u
              ? ((c = c.substring(1, l)), u && (c = c.replace(fv, uv)))
              : (c = c.trim()),
              (n[a] = c);
          } else t && Jf(`did not match key and value when parsing line ${s + 1}: ${i}`);
        }),
      n
    );
  }
  function dv(r) {
    return r[0] === '~' ? Yf.join(cv.homedir(), r.slice(1)) : r;
  }
  function pv(r) {
    let e = Yf.resolve(process.cwd(), '.env'),
      t = 'utf8',
      n = !1;
    r &&
      (r.path != null && (e = dv(r.path)),
      r.encoding != null && (t = r.encoding),
      r.debug != null && (n = !0));
    try {
      let i = Zf(av.readFileSync(e, { encoding: t }), { debug: n });
      return (
        Object.keys(i).forEach(function (s) {
          Object.prototype.hasOwnProperty.call(process.env, s)
            ? n &&
              Jf(
                `"${s}" is already defined in \`process.env\` and will not be overwritten`
              )
            : (process.env[s] = i[s]);
        }),
        { parsed: i }
      );
    } catch (i) {
      return { error: i };
    }
  }
  aa.exports.config = pv;
  aa.exports.parse = Zf;
});
var eh = E((Wn, ca) => {
  'use strict';
  (function (r, e) {
    typeof Wn == 'object' && typeof ca == 'object'
      ? (ca.exports = e(require('child_process'), require('crypto')))
      : typeof define == 'function' && define.amd
      ? define(['child_process', 'crypto'], e)
      : typeof Wn == 'object'
      ? (Wn['electron-machine-id'] = e(
          require('child_process'),
          require('crypto')
        ))
      : (r['electron-machine-id'] = e(r.child_process, r.crypto));
  })(Wn, function (r, e) {
    return (function (t) {
      function n(s) {
        if (i[s]) return i[s].exports;
        var o = (i[s] = { exports: {}, id: s, loaded: !1 });
        return (
          t[s].call(o.exports, o, o.exports, n), (o.loaded = !0), o.exports
        );
      }
      var i = {};
      return (n.m = t), (n.c = i), (n.p = ''), n(0);
    })([
      function (t, n, i) {
        t.exports = i(34);
      },
      function (t, n, i) {
        var s = i(29)('wks'),
          o = i(33),
          a = i(2).Symbol,
          c = typeof a == 'function',
          l = (t.exports = function (u) {
            return s[u] || (s[u] = (c && a[u]) || (c ? a : o)('Symbol.' + u));
          });
        l.store = s;
      },
      function (t, n) {
        var i = (t.exports =
          typeof window < 'u' && window.Math == Math
            ? window
            : typeof self < 'u' && self.Math == Math
            ? self
            : Function('return this')());
        typeof __g == 'number' && (__g = i);
      },
      function (t, n, i) {
        var s = i(9);
        t.exports = function (o) {
          if (!s(o)) throw TypeError(o + ' is not an object!');
          return o;
        };
      },
      function (t, n, i) {
        t.exports = !i(24)(function () {
          return (
            Object.defineProperty({}, 'a', {
              get: function () {
                return 7;
              },
            }).a != 7
          );
        });
      },
      function (t, n, i) {
        var s = i(12),
          o = i(17);
        t.exports = i(4)
          ? function (a, c, l) {
              return s.f(a, c, o(1, l));
            }
          : function (a, c, l) {
              return (a[c] = l), a;
            };
      },
      function (t, n) {
        var i = (t.exports = { version: '2.4.0' });
        typeof __e == 'number' && (__e = i);
      },
      function (t, n, i) {
        var s = i(14);
        t.exports = function (o, a, c) {
          if ((s(o), a === void 0)) return o;
          switch (c) {
            case 1:
              return function (l) {
                return o.call(a, l);
              };
            case 2:
              return function (l, u) {
                return o.call(a, l, u);
              };
            case 3:
              return function (l, u, f) {
                return o.call(a, l, u, f);
              };
          }
          return function () {
            return o.apply(a, arguments);
          };
        };
      },
      function (t, n) {
        var i = {}.hasOwnProperty;
        t.exports = function (s, o) {
          return i.call(s, o);
        };
      },
      function (t, n) {
        t.exports = function (i) {
          return typeof i == 'object' ? i !== null : typeof i == 'function';
        };
      },
      function (t, n) {
        t.exports = {};
      },
      function (t, n) {
        var i = {}.toString;
        t.exports = function (s) {
          return i.call(s).slice(8, -1);
        };
      },
      function (t, n, i) {
        var s = i(3),
          o = i(26),
          a = i(32),
          c = Object.defineProperty;
        n.f = i(4)
          ? Object.defineProperty
          : function (l, u, f) {
              if ((s(l), (u = a(u, !0)), s(f), o))
                try {
                  return c(l, u, f);
                } catch {}
              if ('get' in f || 'set' in f)
                throw TypeError('Accessors not supported!');
              return 'value' in f && (l[u] = f.value), l;
            };
      },
      function (t, n, i) {
        var s = i(42),
          o = i(15);
        t.exports = function (a) {
          return s(o(a));
        };
      },
      function (t, n) {
        t.exports = function (i) {
          if (typeof i != 'function')
            throw TypeError(i + ' is not a function!');
          return i;
        };
      },
      function (t, n) {
        t.exports = function (i) {
          if (i == null) throw TypeError("Can't call method on  " + i);
          return i;
        };
      },
      function (t, n, i) {
        var s = i(9),
          o = i(2).document,
          a = s(o) && s(o.createElement);
        t.exports = function (c) {
          return a ? o.createElement(c) : {};
        };
      },
      function (t, n) {
        t.exports = function (i, s) {
          return {
            enumerable: !(1 & i),
            configurable: !(2 & i),
            writable: !(4 & i),
            value: s,
          };
        };
      },
      function (t, n, i) {
        var s = i(12).f,
          o = i(8),
          a = i(1)('toStringTag');
        t.exports = function (c, l, u) {
          c &&
            !o((c = u ? c : c.prototype), a) &&
            s(c, a, { configurable: !0, value: l });
        };
      },
      function (t, n, i) {
        var s = i(29)('keys'),
          o = i(33);
        t.exports = function (a) {
          return s[a] || (s[a] = o(a));
        };
      },
      function (t, n) {
        var i = Math.ceil,
          s = Math.floor;
        t.exports = function (o) {
          return isNaN((o = +o)) ? 0 : (o > 0 ? s : i)(o);
        };
      },
      function (t, n, i) {
        var s = i(11),
          o = i(1)('toStringTag'),
          a =
            s(
              (function () {
                return arguments;
              })()
            ) == 'Arguments',
          c = function (l, u) {
            try {
              return l[u];
            } catch {}
          };
        t.exports = function (l) {
          var u, f, h;
          return l === void 0
            ? 'Undefined'
            : l === null
            ? 'Null'
            : typeof (f = c((u = Object(l)), o)) == 'string'
            ? f
            : a
            ? s(u)
            : (h = s(u)) == 'Object' && typeof u.callee == 'function'
            ? 'Arguments'
            : h;
        };
      },
      function (t, n) {
        t.exports =
          'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
            ','
          );
      },
      function (t, n, i) {
        var s = i(2),
          o = i(6),
          a = i(7),
          c = i(5),
          l = 'prototype',
          u = function (f, h, d) {
            var y,
              v,
              p,
              w = f & u.F,
              k = f & u.G,
              O = f & u.S,
              N = f & u.P,
              P = f & u.B,
              I = f & u.W,
              z = k ? o : o[h] || (o[h] = {}),
              G = z[l],
              T = k ? s : O ? s[h] : (s[h] || {})[l];
            k && (d = h);
            for (y in d)
              (v = !w && T && T[y] !== void 0),
                (v && y in z) ||
                  ((p = v ? T[y] : d[y]),
                  (z[y] =
                    k && typeof T[y] != 'function'
                      ? d[y]
                      : P && v
                      ? a(p, s)
                      : I && T[y] == p
                      ? (function (C) {
                          var j = function (X, V, J) {
                            if (this instanceof C) {
                              switch (arguments.length) {
                                case 0:
                                  return new C();
                                case 1:
                                  return new C(X);
                                case 2:
                                  return new C(X, V);
                              }
                              return new C(X, V, J);
                            }
                            return C.apply(this, arguments);
                          };
                          return (j[l] = C[l]), j;
                        })(p)
                      : N && typeof p == 'function'
                      ? a(Function.call, p)
                      : p),
                  N &&
                    (((z.virtual || (z.virtual = {}))[y] = p),
                    f & u.R && G && !G[y] && c(G, y, p)));
          };
        (u.F = 1),
          (u.G = 2),
          (u.S = 4),
          (u.P = 8),
          (u.B = 16),
          (u.W = 32),
          (u.U = 64),
          (u.R = 128),
          (t.exports = u);
      },
      function (t, n) {
        t.exports = function (i) {
          try {
            return !!i();
          } catch {
            return !0;
          }
        };
      },
      function (t, n, i) {
        t.exports = i(2).document && document.documentElement;
      },
      function (t, n, i) {
        t.exports =
          !i(4) &&
          !i(24)(function () {
            return (
              Object.defineProperty(i(16)('div'), 'a', {
                get: function () {
                  return 7;
                },
              }).a != 7
            );
          });
      },
      function (t, n, i) {
        'use strict';
        var s = i(28),
          o = i(23),
          a = i(57),
          c = i(5),
          l = i(8),
          u = i(10),
          f = i(45),
          h = i(18),
          d = i(52),
          y = i(1)('iterator'),
          v = !([].keys && 'next' in [].keys()),
          p = '@@iterator',
          w = 'keys',
          k = 'values',
          O = function () {
            return this;
          };
        t.exports = function (N, P, I, z, G, T, C) {
          f(I, P, z);
          var j,
            X,
            V,
            J = function (A) {
              if (!v && A in L) return L[A];
              switch (A) {
                case w:
                  return function () {
                    return new I(this, A);
                  };
                case k:
                  return function () {
                    return new I(this, A);
                  };
              }
              return function () {
                return new I(this, A);
              };
            },
            q = P + ' Iterator',
            K = G == k,
            $ = !1,
            L = N.prototype,
            H = L[y] || L[p] || (G && L[G]),
            le = H || J(G),
            Re = G ? (K ? J('entries') : le) : void 0,
            R = (P == 'Array' && L.entries) || H;
          if (
            (R &&
              ((V = d(R.call(new N()))),
              V !== Object.prototype &&
                (h(V, q, !0), s || l(V, y) || c(V, y, O))),
            K &&
              H &&
              H.name !== k &&
              (($ = !0),
              (le = function () {
                return H.call(this);
              })),
            (s && !C) || (!v && !$ && L[y]) || c(L, y, le),
            (u[P] = le),
            (u[q] = O),
            G)
          )
            if (
              ((j = {
                values: K ? le : J(k),
                keys: T ? le : J(w),
                entries: Re,
              }),
              C)
            )
              for (X in j) X in L || a(L, X, j[X]);
            else o(o.P + o.F * (v || $), P, j);
          return j;
        };
      },
      function (t, n) {
        t.exports = !0;
      },
      function (t, n, i) {
        var s = i(2),
          o = '__core-js_shared__',
          a = s[o] || (s[o] = {});
        t.exports = function (c) {
          return a[c] || (a[c] = {});
        };
      },
      function (t, n, i) {
        var s,
          o,
          a,
          c = i(7),
          l = i(41),
          u = i(25),
          f = i(16),
          h = i(2),
          d = h.process,
          y = h.setImmediate,
          v = h.clearImmediate,
          p = h.MessageChannel,
          w = 0,
          k = {},
          O = 'onreadystatechange',
          N = function () {
            var I = +this;
            if (k.hasOwnProperty(I)) {
              var z = k[I];
              delete k[I], z();
            }
          },
          P = function (I) {
            N.call(I.data);
          };
        (y && v) ||
          ((y = function (I) {
            for (var z = [], G = 1; arguments.length > G; )
              z.push(arguments[G++]);
            return (
              (k[++w] = function () {
                l(typeof I == 'function' ? I : Function(I), z);
              }),
              s(w),
              w
            );
          }),
          (v = function (I) {
            delete k[I];
          }),
          i(11)(d) == 'process'
            ? (s = function (I) {
                d.nextTick(c(N, I, 1));
              })
            : p
            ? ((o = new p()),
              (a = o.port2),
              (o.port1.onmessage = P),
              (s = c(a.postMessage, a, 1)))
            : h.addEventListener &&
              typeof postMessage == 'function' &&
              !h.importScripts
            ? ((s = function (I) {
                h.postMessage(I + '', '*');
              }),
              h.addEventListener('message', P, !1))
            : (s =
                O in f('script')
                  ? function (I) {
                      u.appendChild(f('script'))[O] = function () {
                        u.removeChild(this), N.call(I);
                      };
                    }
                  : function (I) {
                      setTimeout(c(N, I, 1), 0);
                    })),
          (t.exports = { set: y, clear: v });
      },
      function (t, n, i) {
        var s = i(20),
          o = Math.min;
        t.exports = function (a) {
          return a > 0 ? o(s(a), 9007199254740991) : 0;
        };
      },
      function (t, n, i) {
        var s = i(9);
        t.exports = function (o, a) {
          if (!s(o)) return o;
          var c, l;
          if (
            (a &&
              typeof (c = o.toString) == 'function' &&
              !s((l = c.call(o)))) ||
            (typeof (c = o.valueOf) == 'function' && !s((l = c.call(o)))) ||
            (!a && typeof (c = o.toString) == 'function' && !s((l = c.call(o))))
          )
            return l;
          throw TypeError("Can't convert object to primitive value");
        };
      },
      function (t, n) {
        var i = 0,
          s = Math.random();
        t.exports = function (o) {
          return 'Symbol('.concat(
            o === void 0 ? '' : o,
            ')_',
            (++i + s).toString(36)
          );
        };
      },
      function (t, n, i) {
        'use strict';
        function s(O) {
          return O && O.__esModule ? O : { default: O };
        }
        function o() {
          return process.platform !== 'win32'
            ? ''
            : process.arch === 'ia32' &&
              process.env.hasOwnProperty('PROCESSOR_ARCHITEW6432')
            ? 'mixed'
            : 'native';
        }
        function a(O) {
          return (0, y.createHash)('sha256').update(O).digest('hex');
        }
        function c(O) {
          switch (p) {
            case 'darwin':
              return O.split('IOPlatformUUID')[1]
                .split(
                  `
`
                )[0]
                .replace(/\=|\s+|\"/gi, '')
                .toLowerCase();
            case 'win32':
              return O.toString()
                .split('REG_SZ')[1]
                .replace(/\r+|\n+|\s+/gi, '')
                .toLowerCase();
            case 'linux':
              return O.toString()
                .replace(/\r+|\n+|\s+/gi, '')
                .toLowerCase();
            case 'freebsd':
              return O.toString()
                .replace(/\r+|\n+|\s+/gi, '')
                .toLowerCase();
            default:
              throw new Error('Unsupported platform: ' + process.platform);
          }
        }
        function l(O) {
          var N = c((0, d.execSync)(k[p]).toString());
          return O ? N : a(N);
        }
        function u(O) {
          return new h.default(function (N, P) {
            return (0, d.exec)(k[p], {}, function (I, z, G) {
              if (I)
                return P(
                  new Error('Error while obtaining machine id: ' + I.stack)
                );
              var T = c(z.toString());
              return N(O ? T : a(T));
            });
          });
        }
        Object.defineProperty(n, '__esModule', { value: !0 });
        var f = i(35),
          h = s(f);
        (n.machineIdSync = l), (n.machineId = u);
        var d = i(70),
          y = i(71),
          v = process,
          p = v.platform,
          w = {
            native: '%windir%\\System32',
            mixed: '%windir%\\sysnative\\cmd.exe /c %windir%\\System32',
          },
          k = {
            darwin: 'ioreg -rd1 -c IOPlatformExpertDevice',
            win32:
              w[o()] +
              '\\REG.exe QUERY HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Cryptography /v MachineGuid',
            linux:
              '( cat /var/lib/dbus/machine-id /etc/machine-id 2> /dev/null || hostname ) | head -n 1 || :',
            freebsd: 'kenv -q smbios.system.uuid || sysctl -n kern.hostuuid',
          };
      },
      function (t, n, i) {
        t.exports = { default: i(36), __esModule: !0 };
      },
      function (t, n, i) {
        i(66), i(68), i(69), i(67), (t.exports = i(6).Promise);
      },
      function (t, n) {
        t.exports = function () {};
      },
      function (t, n) {
        t.exports = function (i, s, o, a) {
          if (!(i instanceof s) || (a !== void 0 && a in i))
            throw TypeError(o + ': incorrect invocation!');
          return i;
        };
      },
      function (t, n, i) {
        var s = i(13),
          o = i(31),
          a = i(62);
        t.exports = function (c) {
          return function (l, u, f) {
            var h,
              d = s(l),
              y = o(d.length),
              v = a(f, y);
            if (c && u != u) {
              for (; y > v; ) if (((h = d[v++]), h != h)) return !0;
            } else
              for (; y > v; v++)
                if ((c || v in d) && d[v] === u) return c || v || 0;
            return !c && -1;
          };
        };
      },
      function (t, d, i) {
        var s = i(7),
          o = i(44),
          a = i(43),
          c = i(3),
          l = i(31),
          u = i(64),
          f = {},
          h = {},
          d = (t.exports = function (y, v, p, w, k) {
            var O,
              N,
              P,
              I,
              z = k
                ? function () {
                    return y;
                  }
                : u(y),
              G = s(p, w, v ? 2 : 1),
              T = 0;
            if (typeof z != 'function')
              throw TypeError(y + ' is not iterable!');
            if (a(z)) {
              for (O = l(y.length); O > T; T++)
                if (
                  ((I = v ? G(c((N = y[T]))[0], N[1]) : G(y[T])),
                  I === f || I === h)
                )
                  return I;
            } else
              for (P = z.call(y); !(N = P.next()).done; )
                if (((I = o(P, G, N.value, v)), I === f || I === h)) return I;
          });
        (d.BREAK = f), (d.RETURN = h);
      },
      function (t, n) {
        t.exports = function (i, s, o) {
          var a = o === void 0;
          switch (s.length) {
            case 0:
              return a ? i() : i.call(o);
            case 1:
              return a ? i(s[0]) : i.call(o, s[0]);
            case 2:
              return a ? i(s[0], s[1]) : i.call(o, s[0], s[1]);
            case 3:
              return a ? i(s[0], s[1], s[2]) : i.call(o, s[0], s[1], s[2]);
            case 4:
              return a
                ? i(s[0], s[1], s[2], s[3])
                : i.call(o, s[0], s[1], s[2], s[3]);
          }
          return i.apply(o, s);
        };
      },
      function (t, n, i) {
        var s = i(11);
        t.exports = Object('z').propertyIsEnumerable(0)
          ? Object
          : function (o) {
              return s(o) == 'String' ? o.split('') : Object(o);
            };
      },
      function (t, n, i) {
        var s = i(10),
          o = i(1)('iterator'),
          a = Array.prototype;
        t.exports = function (c) {
          return c !== void 0 && (s.Array === c || a[o] === c);
        };
      },
      function (t, n, i) {
        var s = i(3);
        t.exports = function (o, a, c, l) {
          try {
            return l ? a(s(c)[0], c[1]) : a(c);
          } catch (f) {
            var u = o.return;
            throw (u !== void 0 && s(u.call(o)), f);
          }
        };
      },
      function (t, n, i) {
        'use strict';
        var s = i(49),
          o = i(17),
          a = i(18),
          c = {};
        i(5)(c, i(1)('iterator'), function () {
          return this;
        }),
          (t.exports = function (l, u, f) {
            (l.prototype = s(c, { next: o(1, f) })), a(l, u + ' Iterator');
          });
      },
      function (t, n, i) {
        var s = i(1)('iterator'),
          o = !1;
        try {
          var a = [7][s]();
          (a.return = function () {
            o = !0;
          }),
            Array.from(a, function () {
              throw 2;
            });
        } catch {}
        t.exports = function (c, l) {
          if (!l && !o) return !1;
          var u = !1;
          try {
            var f = [7],
              h = f[s]();
            (h.next = function () {
              return { done: (u = !0) };
            }),
              (f[s] = function () {
                return h;
              }),
              c(f);
          } catch {}
          return u;
        };
      },
      function (t, n) {
        t.exports = function (i, s) {
          return { value: s, done: !!i };
        };
      },
      function (t, n, i) {
        var s = i(2),
          o = i(30).set,
          a = s.MutationObserver || s.WebKitMutationObserver,
          c = s.process,
          l = s.Promise,
          u = i(11)(c) == 'process';
        t.exports = function () {
          var f,
            h,
            d,
            y = function () {
              var k, O;
              for (u && (k = c.domain) && k.exit(); f; ) {
                (O = f.fn), (f = f.next);
                try {
                  O();
                } catch (N) {
                  throw (f ? d() : (h = void 0), N);
                }
              }
              (h = void 0), k && k.enter();
            };
          if (u)
            d = function () {
              c.nextTick(y);
            };
          else if (a) {
            var v = !0,
              p = document.createTextNode('');
            new a(y).observe(p, { characterData: !0 }),
              (d = function () {
                p.data = v = !v;
              });
          } else if (l && l.resolve) {
            var w = l.resolve();
            d = function () {
              w.then(y);
            };
          } else
            d = function () {
              o.call(s, y);
            };
          return function (k) {
            var O = { fn: k, next: void 0 };
            h && (h.next = O), f || ((f = O), d()), (h = O);
          };
        };
      },
      function (t, n, i) {
        var s = i(3),
          o = i(50),
          a = i(22),
          c = i(19)('IE_PROTO'),
          l = function () {},
          u = 'prototype',
          f = function () {
            var h,
              d = i(16)('iframe'),
              y = a.length,
              v = '>';
            for (
              d.style.display = 'none',
                i(25).appendChild(d),
                d.src = 'javascript:',
                h = d.contentWindow.document,
                h.open(),
                h.write('<script>document.F=Object</script' + v),
                h.close(),
                f = h.F;
              y--;

            )
              delete f[u][a[y]];
            return f();
          };
        t.exports =
          Object.create ||
          function (h, d) {
            var y;
            return (
              h !== null
                ? ((l[u] = s(h)), (y = new l()), (l[u] = null), (y[c] = h))
                : (y = f()),
              d === void 0 ? y : o(y, d)
            );
          };
      },
      function (t, n, i) {
        var s = i(12),
          o = i(3),
          a = i(54);
        t.exports = i(4)
          ? Object.defineProperties
          : function (c, l) {
              o(c);
              for (var u, f = a(l), h = f.length, d = 0; h > d; )
                s.f(c, (u = f[d++]), l[u]);
              return c;
            };
      },
      function (t, n, i) {
        var s = i(55),
          o = i(17),
          a = i(13),
          c = i(32),
          l = i(8),
          u = i(26),
          f = Object.getOwnPropertyDescriptor;
        n.f = i(4)
          ? f
          : function (h, d) {
              if (((h = a(h)), (d = c(d, !0)), u))
                try {
                  return f(h, d);
                } catch {}
              if (l(h, d)) return o(!s.f.call(h, d), h[d]);
            };
      },
      function (t, n, i) {
        var s = i(8),
          o = i(63),
          a = i(19)('IE_PROTO'),
          c = Object.prototype;
        t.exports =
          Object.getPrototypeOf ||
          function (l) {
            return (
              (l = o(l)),
              s(l, a)
                ? l[a]
                : typeof l.constructor == 'function' &&
                  l instanceof l.constructor
                ? l.constructor.prototype
                : l instanceof Object
                ? c
                : null
            );
          };
      },
      function (t, n, i) {
        var s = i(8),
          o = i(13),
          a = i(39)(!1),
          c = i(19)('IE_PROTO');
        t.exports = function (l, u) {
          var f,
            h = o(l),
            d = 0,
            y = [];
          for (f in h) f != c && s(h, f) && y.push(f);
          for (; u.length > d; ) s(h, (f = u[d++])) && (~a(y, f) || y.push(f));
          return y;
        };
      },
      function (t, n, i) {
        var s = i(53),
          o = i(22);
        t.exports =
          Object.keys ||
          function (a) {
            return s(a, o);
          };
      },
      function (t, n) {
        n.f = {}.propertyIsEnumerable;
      },
      function (t, n, i) {
        var s = i(5);
        t.exports = function (o, a, c) {
          for (var l in a) c && o[l] ? (o[l] = a[l]) : s(o, l, a[l]);
          return o;
        };
      },
      function (t, n, i) {
        t.exports = i(5);
      },
      function (t, n, i) {
        var s = i(9),
          o = i(3),
          a = function (c, l) {
            if ((o(c), !s(l) && l !== null))
              throw TypeError(l + ": can't set as prototype!");
          };
        t.exports = {
          set:
            Object.setPrototypeOf ||
            ('__proto__' in {}
              ? (function (c, l, u) {
                  try {
                    (u = i(7)(
                      Function.call,
                      i(51).f(Object.prototype, '__proto__').set,
                      2
                    )),
                      u(c, []),
                      (l = !(c instanceof Array));
                  } catch {
                    l = !0;
                  }
                  return function (f, h) {
                    return a(f, h), l ? (f.__proto__ = h) : u(f, h), f;
                  };
                })({}, !1)
              : void 0),
          check: a,
        };
      },
      function (t, n, i) {
        'use strict';
        var s = i(2),
          o = i(6),
          a = i(12),
          c = i(4),
          l = i(1)('species');
        t.exports = function (u) {
          var f = typeof o[u] == 'function' ? o[u] : s[u];
          c &&
            f &&
            !f[l] &&
            a.f(f, l, {
              configurable: !0,
              get: function () {
                return this;
              },
            });
        };
      },
      function (t, n, i) {
        var s = i(3),
          o = i(14),
          a = i(1)('species');
        t.exports = function (c, l) {
          var u,
            f = s(c).constructor;
          return f === void 0 || (u = s(f)[a]) == null ? l : o(u);
        };
      },
      function (t, n, i) {
        var s = i(20),
          o = i(15);
        t.exports = function (a) {
          return function (c, l) {
            var u,
              f,
              h = String(o(c)),
              d = s(l),
              y = h.length;
            return d < 0 || d >= y
              ? a
                ? ''
                : void 0
              : ((u = h.charCodeAt(d)),
                u < 55296 ||
                u > 56319 ||
                d + 1 === y ||
                (f = h.charCodeAt(d + 1)) < 56320 ||
                f > 57343
                  ? a
                    ? h.charAt(d)
                    : u
                  : a
                  ? h.slice(d, d + 2)
                  : ((u - 55296) << 10) + (f - 56320) + 65536);
          };
        };
      },
      function (t, n, i) {
        var s = i(20),
          o = Math.max,
          a = Math.min;
        t.exports = function (c, l) {
          return (c = s(c)), c < 0 ? o(c + l, 0) : a(c, l);
        };
      },
      function (t, n, i) {
        var s = i(15);
        t.exports = function (o) {
          return Object(s(o));
        };
      },
      function (t, n, i) {
        var s = i(21),
          o = i(1)('iterator'),
          a = i(10);
        t.exports = i(6).getIteratorMethod = function (c) {
          if (c != null) return c[o] || c['@@iterator'] || a[s(c)];
        };
      },
      function (t, n, i) {
        'use strict';
        var s = i(37),
          o = i(47),
          a = i(10),
          c = i(13);
        (t.exports = i(27)(
          Array,
          'Array',
          function (l, u) {
            (this._t = c(l)), (this._i = 0), (this._k = u);
          },
          function () {
            var l = this._t,
              u = this._k,
              f = this._i++;
            return !l || f >= l.length
              ? ((this._t = void 0), o(1))
              : u == 'keys'
              ? o(0, f)
              : u == 'values'
              ? o(0, l[f])
              : o(0, [f, l[f]]);
          },
          'values'
        )),
          (a.Arguments = a.Array),
          s('keys'),
          s('values'),
          s('entries');
      },
      function (t, n) {},
      function (t, n, i) {
        'use strict';
        var s,
          o,
          a,
          c = i(28),
          l = i(2),
          u = i(7),
          f = i(21),
          h = i(23),
          d = i(9),
          y = (i(3), i(14)),
          v = i(38),
          p = i(40),
          w = (i(58).set, i(60)),
          k = i(30).set,
          O = i(48)(),
          N = 'Promise',
          P = l.TypeError,
          z = l.process,
          I = l[N],
          z = l.process,
          G = f(z) == 'process',
          T = function () {},
          C = !!(function () {
            try {
              var R = I.resolve(1),
                A = ((R.constructor = {})[i(1)('species')] = function (S) {
                  S(T, T);
                });
              return (
                (G || typeof PromiseRejectionEvent == 'function') &&
                R.then(T) instanceof A
              );
            } catch {}
          })(),
          j = function (R, A) {
            return R === A || (R === I && A === a);
          },
          X = function (R) {
            var A;
            return !(!d(R) || typeof (A = R.then) != 'function') && A;
          },
          V = function (R) {
            return j(I, R) ? new J(R) : new o(R);
          },
          J = (o = function (R) {
            var A, S;
            (this.promise = new R(function (W, de) {
              if (A !== void 0 || S !== void 0)
                throw P('Bad Promise constructor');
              (A = W), (S = de);
            })),
              (this.resolve = y(A)),
              (this.reject = y(S));
          }),
          q = function (R) {
            try {
              R();
            } catch (A) {
              return { error: A };
            }
          },
          K = function (R, A) {
            if (!R._n) {
              R._n = !0;
              var S = R._c;
              O(function () {
                for (
                  var W = R._v,
                    de = R._s == 1,
                    It = 0,
                    ct = function (yt) {
                      var _e,
                        Kr,
                        _r = de ? yt.ok : yt.fail,
                        Pe = yt.resolve,
                        zt = yt.reject,
                        m = yt.domain;
                      try {
                        _r
                          ? (de || (R._h == 2 && H(R), (R._h = 1)),
                            _r === !0
                              ? (_e = W)
                              : (m && m.enter(), (_e = _r(W)), m && m.exit()),
                            _e === yt.promise
                              ? zt(P('Promise-chain cycle'))
                              : (Kr = X(_e))
                              ? Kr.call(_e, Pe, zt)
                              : Pe(_e))
                          : zt(W);
                      } catch (_) {
                        zt(_);
                      }
                    };
                  S.length > It;

                )
                  ct(S[It++]);
                (R._c = []), (R._n = !1), A && !R._h && $(R);
              });
            }
          },
          $ = function (R) {
            k.call(l, function () {
              var A,
                S,
                W,
                de = R._v;
              if (
                (L(R) &&
                  ((A = q(function () {
                    G
                      ? z.emit('unhandledRejection', de, R)
                      : (S = l.onunhandledrejection)
                      ? S({ promise: R, reason: de })
                      : (W = l.console) &&
                        W.error &&
                        W.error('Unhandled promise rejection', de);
                  })),
                  (R._h = G || L(R) ? 2 : 1)),
                (R._a = void 0),
                A)
              )
                throw A.error;
            });
          },
          L = function (R) {
            if (R._h == 1) return !1;
            for (var A, S = R._a || R._c, W = 0; S.length > W; )
              if (((A = S[W++]), A.fail || !L(A.promise))) return !1;
            return !0;
          },
          H = function (R) {
            k.call(l, function () {
              var A;
              G
                ? z.emit('rejectionHandled', R)
                : (A = l.onrejectionhandled) && A({ promise: R, reason: R._v });
            });
          },
          le = function (R) {
            var A = this;
            A._d ||
              ((A._d = !0),
              (A = A._w || A),
              (A._v = R),
              (A._s = 2),
              A._a || (A._a = A._c.slice()),
              K(A, !0));
          },
          Re = function (R) {
            var A,
              S = this;
            if (!S._d) {
              (S._d = !0), (S = S._w || S);
              try {
                if (S === R) throw P("Promise can't be resolved itself");
                (A = X(R))
                  ? O(function () {
                      var W = { _w: S, _d: !1 };
                      try {
                        A.call(R, u(Re, W, 1), u(le, W, 1));
                      } catch (de) {
                        le.call(W, de);
                      }
                    })
                  : ((S._v = R), (S._s = 1), K(S, !1));
              } catch (W) {
                le.call({ _w: S, _d: !1 }, W);
              }
            }
          };
        C ||
          ((I = function (R) {
            v(this, I, N, '_h'), y(R), s.call(this);
            try {
              R(u(Re, this, 1), u(le, this, 1));
            } catch (A) {
              le.call(this, A);
            }
          }),
          (s = function (R) {
            (this._c = []),
              (this._a = void 0),
              (this._s = 0),
              (this._d = !1),
              (this._v = void 0),
              (this._h = 0),
              (this._n = !1);
          }),
          (s.prototype = i(56)(I.prototype, {
            then: function (R, A) {
              var S = V(w(this, I));
              return (
                (S.ok = typeof R != 'function' || R),
                (S.fail = typeof A == 'function' && A),
                (S.domain = G ? z.domain : void 0),
                this._c.push(S),
                this._a && this._a.push(S),
                this._s && K(this, !1),
                S.promise
              );
            },
            catch: function (R) {
              return this.then(void 0, R);
            },
          })),
          (J = function () {
            var R = new s();
            (this.promise = R),
              (this.resolve = u(Re, R, 1)),
              (this.reject = u(le, R, 1));
          })),
          h(h.G + h.W + h.F * !C, { Promise: I }),
          i(18)(I, N),
          i(59)(N),
          (a = i(6)[N]),
          h(h.S + h.F * !C, N, {
            reject: function (R) {
              var A = V(this),
                S = A.reject;
              return S(R), A.promise;
            },
          }),
          h(h.S + h.F * (c || !C), N, {
            resolve: function (R) {
              if (R instanceof I && j(R.constructor, this)) return R;
              var A = V(this),
                S = A.resolve;
              return S(R), A.promise;
            },
          }),
          h(
            h.S +
              h.F *
                !(
                  C &&
                  i(46)(function (R) {
                    I.all(R).catch(T);
                  })
                ),
            N,
            {
              all: function (R) {
                var A = this,
                  S = V(A),
                  W = S.resolve,
                  de = S.reject,
                  It = q(function () {
                    var ct = [],
                      yt = 0,
                      _e = 1;
                    p(R, !1, function (Kr) {
                      var _r = yt++,
                        Pe = !1;
                      ct.push(void 0),
                        _e++,
                        A.resolve(Kr).then(function (zt) {
                          Pe || ((Pe = !0), (ct[_r] = zt), --_e || W(ct));
                        }, de);
                    }),
                      --_e || W(ct);
                  });
                return It && de(It.error), S.promise;
              },
              race: function (R) {
                var A = this,
                  S = V(A),
                  W = S.reject,
                  de = q(function () {
                    p(R, !1, function (It) {
                      A.resolve(It).then(S.resolve, W);
                    });
                  });
                return de && W(de.error), S.promise;
              },
            }
          );
      },
      function (t, n, i) {
        'use strict';
        var s = i(61)(!0);
        i(27)(
          String,
          'String',
          function (o) {
            (this._t = String(o)), (this._i = 0);
          },
          function () {
            var o,
              a = this._t,
              c = this._i;
            return c >= a.length
              ? { value: void 0, done: !0 }
              : ((o = s(a, c)), (this._i += o.length), { value: o, done: !1 });
          }
        );
      },
      function (t, n, i) {
        i(65);
        for (
          var s = i(2),
            o = i(5),
            a = i(10),
            c = i(1)('toStringTag'),
            l = [
              'NodeList',
              'DOMTokenList',
              'MediaList',
              'StyleSheetList',
              'CSSRuleList',
            ],
            u = 0;
          u < 5;
          u++
        ) {
          var f = l[u],
            h = s[f],
            d = h && h.prototype;
          d && !d[c] && o(d, c, f), (a[f] = a.Array);
        }
      },
      function (t, n) {
        t.exports = require('child_process');
      },
      function (t, n) {
        t.exports = require('crypto');
      },
    ]);
  });
});
var th = {};
Nt(th, {
  configureLightClientRequire: () => mv,
  configuredPaths: () => vr,
  lightClientRequire: () => ne,
});
function mv(r) {
  (vr = r),
    (ne = function (e) {
      if (vr.length === 0)
        throw new Error(
          'Light client require must have paths configured with `configureLightClientRequire`.'
        );
      let t;
      try {
        t = require.resolve(e, { paths: r });
      } catch (n) {
        throw (
          (process.env.NX_VERBOSE_LOGGING === 'true' &&
            console.error(
              `Was not able to require.resolve module ${e} from the following paths: ${r}. This may be expected.`
            ),
          n)
        );
      }
      try {
        return require(t);
      } catch (n) {
        throw (
          (process.env.NX_VERBOSE_LOGGING === 'true' &&
            console.error(
              `Was not able require module ${e} from path ${t}. This may be expected. `
            ),
          n)
        );
      }
    });
}
var ne,
  vr,
  Sr = B(() => {
    'use strict';
    vr = [];
  });
var Y = E((wr) => {
  'use strict';
  Sr();
  try {
    try {
      let { output: r } = ne('nx/src/utils/output'),
        e;
      try {
        e = ne('nx/src/utils/app-root').workspaceRoot;
      } catch {
        e = ne('nx/src/utils/workspace-root').workspaceRoot;
      }
      (wr.workspaceRoot = e), (wr.output = r);
    } catch {
      let { output: e } = ne('@nrwl/workspace/src/utilities/output'),
        { appRootPath: t } = ne('@nrwl/tao/src/utils/app-root');
      (wr.workspaceRoot = t), (wr.output = e);
    }
  } catch {
    let e = (t) => {
      var n;
      return `${t.title}

${
  (n = t.bodyLines) == null
    ? void 0
    : n.join(`
`)
}`;
    };
    (wr.output = {
      note: (t) => console.info(e(t)),
      error: (t) => console.error(e(t)),
      warn: (t) => console.warn(e(t)),
      success: (t) => console.log(e(t)),
      addVerticalSeparator: () => '',
      addNewline: () =>
        console.log(`
`),
    }),
      (wr.workspaceRoot = process.cwd());
  }
});
function ut(r) {
  return !!r;
}
function ch() {
  return (
    process.env.NX_INVOKED_BY_RUNNER === 'true' ||
    process.env.NX_CLOUD === 'false'
  );
}
function et() {
  try {
    return (0, ua.execSync)('git rev-parse HEAD', { stdio: 'pipe' })
      .toString()
      .trim();
  } catch {
    return;
  }
}
function Vi() {
  try {
    return (0, ua.execSync)('git rev-parse --symbolic-full-name HEAD', {
      stdio: 'pipe',
    })
      .toString()
      .trim();
  } catch {
    return;
  }
}
function _v() {
  try {
    let r = (0, nh.readFileSync)((0, Hi.join)(gv, 'nx-cloud.env'));
    return yv.parse(r);
  } catch {
    return {};
  }
}
function bv() {
  let r = _v();
  (At =
    process.env.NX_CLOUD_AUTH_TOKEN ||
    process.env.NX_CLOUD_ACCESS_TOKEN ||
    r.NX_CLOUD_AUTH_TOKEN ||
    r.NX_CLOUD_ACCESS_TOKEN),
    (Rr = process.env.NX_CLOUD_ENCRYPTION_KEY || r.NX_CLOUD_ENCRYPTION_KEY),
    (U =
      process.env.NX_VERBOSE_LOGGING === 'true' ||
      r.NX_VERBOSE_LOGGING === 'true'),
    (Et =
      process.env.NX_CLOUD_NO_TIMEOUTS === 'true' ||
      r.NX_CLOUD_NO_TIMEOUTS === 'true');
}
function je() {
  return uh();
}
function uh() {
  return process.env.NX_CI_EXECUTION_ID !== void 0
    ? process.env.NX_CI_EXECUTION_ID
    : process.env.NX_RUN_GROUP !== void 0
    ? process.env.NX_RUN_GROUP
    : process.env.CIRCLECI !== void 0 && process.env.CIRCLE_WORKFLOW_ID
    ? process.env.CIRCLE_WORKFLOW_ID
    : process.env.TRAVIS_BUILD_ID !== void 0
    ? process.env.TRAVIS_BUILD_ID
    : process.env.GITHUB_ACTIONS && process.env.GITHUB_RUN_ID
    ? `${process.env.GITHUB_RUN_ID}-${process.env.GITHUB_RUN_ATTEMPT}`
    : process.env.BUILD_BUILDID
    ? process.env.BUILD_BUILDID
    : process.env.BITBUCKET_BUILD_NUMBER !== void 0
    ? process.env.BITBUCKET_BUILD_NUMBER
    : process.env.VERCEL_GIT_COMMIT_SHA !== void 0
    ? process.env.VERCEL_GIT_COMMIT_SHA
    : process.env.CI_PIPELINE_ID
    ? process.env.CI_PIPELINE_ID
    : process.env.BUILD_TAG
    ? process.env.BUILD_TAG
    : null;
}
function xe() {
  return process.env.NX_CI_EXECUTION_ENV ?? '';
}
function ve() {
  if (process.env.NX_RUN_GROUP !== void 0) return process.env.NX_RUN_GROUP;
  let r = uh();
  return r ? (xe() ? `${r}-${xe()}` : r) : et();
}
function me() {
  if (process.env.NX_BRANCH !== void 0) return process.env.NX_BRANCH;
  if (process.env.CIRCLECI !== void 0) {
    if (process.env.CIRCLE_PR_NUMBER !== void 0)
      return process.env.CIRCLE_PR_NUMBER;
    if (process.env.CIRCLE_PULL_REQUEST !== void 0) {
      let r = process.env.CIRCLE_PULL_REQUEST.split('/');
      return r[r.length - 1];
    } else if (process.env.CIRCLE_BRANCH !== void 0)
      return process.env.CIRCLE_BRANCH;
  }
  if (process.env.TRAVIS_PULL_REQUEST !== void 0)
    return process.env.TRAVIS_PULL_REQUEST;
  if (process.env.GITHUB_ACTIONS) {
    if (process.env.GITHUB_REF) {
      let r = process.env.GITHUB_REF.match(/refs\/pull\/(\d+)\/merge/);
      if (r) return r[1];
    }
    return process.env.GITHUB_HEAD_REF ?? '';
  }
  return process.env.BITBUCKET_PR_ID !== void 0
    ? process.env.BITBUCKET_PR_ID
    : process.env.VERCEL_GIT_COMMIT_REF !== void 0
    ? process.env.VERCEL_GIT_COMMIT_REF
    : process.env.CI_MERGE_REQUEST_IID
    ? process.env.CI_MERGE_REQUEST_IID
    : process.env.CI_COMMIT_BRANCH
    ? process.env.CI_COMMIT_BRANCH
    : process.env.GIT_BRANCH
    ? process.env.GIT_BRANCH
    : null;
}
function Yr() {
  let r = require('os'),
    e = (0, rh.createHash)('md5');
  return (
    e.update(Ev()),
    {
      machineId: e.digest('base64'),
      platform: r.platform(),
      version: r.version ? r.version() : '',
      cpuCores: r.cpus().length,
    }
  );
}
function Wi() {
  let r = (0, Hi.parse)(process.argv[1]).name,
    e = `${process.argv.slice(2).join(' ')}`;
  return `${r} ${e}`;
}
var ua,
  rh,
  nh,
  Hi,
  yv,
  Ev,
  gv,
  Xn,
  la,
  fa,
  Kn,
  ih,
  Yn,
  Vt,
  ha,
  sh,
  oh,
  zi,
  ah,
  At,
  Rr,
  U,
  Et,
  ie = B(() => {
    'use strict';
    (ua = require('child_process')),
      (rh = require('crypto')),
      (nh = require('fs')),
      (Hi = require('path'));
    Kf();
    (yv = Qf()),
      ({ machineIdSync: Ev } = eh()),
      ({ workspaceRoot: gv } = Y()),
      (Xn = 9999999),
      (la = process.env.NX_CLOUD_AGENT_TIMEOUT_MS
        ? Number(process.env.NX_CLOUD_AGENT_TIMEOUT_MS)
        : 36e5),
      (fa = process.env.NX_CLOUD_ORCHESTRATOR_TIMEOUT_MS
        ? Number(process.env.NX_CLOUD_ORCHESTRATOR_TIMEOUT_MS)
        : 36e5),
      (Kn = 1e3 * 1e3 * 1e4),
      (ih = process.env.NX_CLOUD_UNLIMITED_OUTPUT === 'true'),
      (Yn = 1e3 * 1e3 * 300),
      (Vt = 166),
      (ha = process.env.NX_CLOUD_DISTRIBUTED_EXECUTION_AGENT_COUNT
        ? Number(process.env.NX_CLOUD_DISTRIBUTED_EXECUTION_AGENT_COUNT)
        : null),
      (sh =
        process.env.NX_CLOUD_DISTRIBUTED_EXECUTION_STOP_AGENTS_ON_FAILURE !=
        'false'),
      (oh = process.env.NX_CLOUD_FORCE_METRICS === 'true'),
      (zi = process.env.NX_CLOUD_NUMBER_OF_RETRIES
        ? Number(process.env.NX_CLOUD_NUMBER_OF_RETRIES)
        : Xf()
        ? 10
        : 1),
      (ah = process.env.NX_NO_CLOUD === 'true');
    bv();
  });
function tt(r) {
  return new Promise((e) => {
    setTimeout(() => e(null), r);
  });
}
var Jn = B(() => {
  'use strict';
});
var da = E((kN, lh) => {
  'use strict';
  lh.exports = function (e, t) {
    return function () {
      for (var i = new Array(arguments.length), s = 0; s < i.length; s++)
        i[s] = arguments[s];
      return e.apply(t, i);
    };
  };
});
var Ue = E((LN, dh) => {
  'use strict';
  var vv = da(),
    xr = Object.prototype.toString;
  function ya(r) {
    return xr.call(r) === '[object Array]';
  }
  function pa(r) {
    return typeof r > 'u';
  }
  function Sv(r) {
    return (
      r !== null &&
      !pa(r) &&
      r.constructor !== null &&
      !pa(r.constructor) &&
      typeof r.constructor.isBuffer == 'function' &&
      r.constructor.isBuffer(r)
    );
  }
  function wv(r) {
    return xr.call(r) === '[object ArrayBuffer]';
  }
  function Rv(r) {
    return typeof FormData < 'u' && r instanceof FormData;
  }
  function xv(r) {
    var e;
    return (
      typeof ArrayBuffer < 'u' && ArrayBuffer.isView
        ? (e = ArrayBuffer.isView(r))
        : (e = r && r.buffer && r.buffer instanceof ArrayBuffer),
      e
    );
  }
  function Ov(r) {
    return typeof r == 'string';
  }
  function Tv(r) {
    return typeof r == 'number';
  }
  function fh(r) {
    return r !== null && typeof r == 'object';
  }
  function Xi(r) {
    if (xr.call(r) !== '[object Object]') return !1;
    var e = Object.getPrototypeOf(r);
    return e === null || e === Object.prototype;
  }
  function Cv(r) {
    return xr.call(r) === '[object Date]';
  }
  function Iv(r) {
    return xr.call(r) === '[object File]';
  }
  function Nv(r) {
    return xr.call(r) === '[object Blob]';
  }
  function hh(r) {
    return xr.call(r) === '[object Function]';
  }
  function Av(r) {
    return fh(r) && hh(r.pipe);
  }
  function Dv(r) {
    return typeof URLSearchParams < 'u' && r instanceof URLSearchParams;
  }
  function kv(r) {
    return r.trim ? r.trim() : r.replace(/^\s+|\s+$/g, '');
  }
  function Lv() {
    return typeof navigator < 'u' &&
      (navigator.product === 'ReactNative' ||
        navigator.product === 'NativeScript' ||
        navigator.product === 'NS')
      ? !1
      : typeof window < 'u' && typeof document < 'u';
  }
  function Ea(r, e) {
    if (!(r === null || typeof r > 'u'))
      if ((typeof r != 'object' && (r = [r]), ya(r)))
        for (var t = 0, n = r.length; t < n; t++) e.call(null, r[t], t, r);
      else
        for (var i in r)
          Object.prototype.hasOwnProperty.call(r, i) &&
            e.call(null, r[i], i, r);
  }
  function ma() {
    var r = {};
    function e(i, s) {
      Xi(r[s]) && Xi(i)
        ? (r[s] = ma(r[s], i))
        : Xi(i)
        ? (r[s] = ma({}, i))
        : ya(i)
        ? (r[s] = i.slice())
        : (r[s] = i);
    }
    for (var t = 0, n = arguments.length; t < n; t++) Ea(arguments[t], e);
    return r;
  }
  function Pv(r, e, t) {
    return (
      Ea(e, function (i, s) {
        t && typeof i == 'function' ? (r[s] = vv(i, t)) : (r[s] = i);
      }),
      r
    );
  }
  function Fv(r) {
    return r.charCodeAt(0) === 65279 && (r = r.slice(1)), r;
  }
  dh.exports = {
    isArray: ya,
    isArrayBuffer: wv,
    isBuffer: Sv,
    isFormData: Rv,
    isArrayBufferView: xv,
    isString: Ov,
    isNumber: Tv,
    isObject: fh,
    isPlainObject: Xi,
    isUndefined: pa,
    isDate: Cv,
    isFile: Iv,
    isBlob: Nv,
    isFunction: hh,
    isStream: Av,
    isURLSearchParams: Dv,
    isStandardBrowserEnv: Lv,
    forEach: Ea,
    merge: ma,
    extend: Pv,
    trim: kv,
    stripBOM: Fv,
  };
});
var Ki = E((PN, mh) => {
  'use strict';
  var Jr = Ue();
  function ph(r) {
    return encodeURIComponent(r)
      .replace(/%3A/gi, ':')
      .replace(/%24/g, '$')
      .replace(/%2C/gi, ',')
      .replace(/%20/g, '+')
      .replace(/%5B/gi, '[')
      .replace(/%5D/gi, ']');
  }
  mh.exports = function (e, t, n) {
    if (!t) return e;
    var i;
    if (n) i = n(t);
    else if (Jr.isURLSearchParams(t)) i = t.toString();
    else {
      var s = [];
      Jr.forEach(t, function (c, l) {
        c === null ||
          typeof c > 'u' ||
          (Jr.isArray(c) ? (l = l + '[]') : (c = [c]),
          Jr.forEach(c, function (f) {
            Jr.isDate(f)
              ? (f = f.toISOString())
              : Jr.isObject(f) && (f = JSON.stringify(f)),
              s.push(ph(l) + '=' + ph(f));
          }));
      }),
        (i = s.join('&'));
    }
    if (i) {
      var o = e.indexOf('#');
      o !== -1 && (e = e.slice(0, o)),
        (e += (e.indexOf('?') === -1 ? '?' : '&') + i);
    }
    return e;
  };
});
var Eh = E((FN, yh) => {
  'use strict';
  var Uv = Ue();
  function Yi() {
    this.handlers = [];
  }
  Yi.prototype.use = function (e, t, n) {
    return (
      this.handlers.push({
        fulfilled: e,
        rejected: t,
        synchronous: n ? n.synchronous : !1,
        runWhen: n ? n.runWhen : null,
      }),
      this.handlers.length - 1
    );
  };
  Yi.prototype.eject = function (e) {
    this.handlers[e] && (this.handlers[e] = null);
  };
  Yi.prototype.forEach = function (e) {
    Uv.forEach(this.handlers, function (n) {
      n !== null && e(n);
    });
  };
  yh.exports = Yi;
});
var _h = E((UN, gh) => {
  'use strict';
  var Mv = Ue();
  gh.exports = function (e, t) {
    Mv.forEach(e, function (i, s) {
      s !== t &&
        s.toUpperCase() === t.toUpperCase() &&
        ((e[t] = i), delete e[s]);
    });
  };
});
var Ji = E((MN, bh) => {
  'use strict';
  bh.exports = function (e, t, n, i, s) {
    return (
      (e.config = t),
      n && (e.code = n),
      (e.request = i),
      (e.response = s),
      (e.isAxiosError = !0),
      (e.toJSON = function () {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: this.config,
          code: this.code,
        };
      }),
      e
    );
  };
});
var Zi = E((qN, vh) => {
  'use strict';
  var qv = Ji();
  vh.exports = function (e, t, n, i, s) {
    var o = new Error(e);
    return qv(o, t, n, i, s);
  };
});
var ga = E((BN, Sh) => {
  'use strict';
  var Bv = Zi();
  Sh.exports = function (e, t, n) {
    var i = n.config.validateStatus;
    !n.status || !i || i(n.status)
      ? e(n)
      : t(
          Bv(
            'Request failed with status code ' + n.status,
            n.config,
            null,
            n.request,
            n
          )
        );
  };
});
var Rh = E((jN, wh) => {
  'use strict';
  var Qi = Ue();
  wh.exports = Qi.isStandardBrowserEnv()
    ? (function () {
        return {
          write: function (t, n, i, s, o, a) {
            var c = [];
            c.push(t + '=' + encodeURIComponent(n)),
              Qi.isNumber(i) && c.push('expires=' + new Date(i).toGMTString()),
              Qi.isString(s) && c.push('path=' + s),
              Qi.isString(o) && c.push('domain=' + o),
              a === !0 && c.push('secure'),
              (document.cookie = c.join('; '));
          },
          read: function (t) {
            var n = document.cookie.match(
              new RegExp('(^|;\\s*)(' + t + ')=([^;]*)')
            );
            return n ? decodeURIComponent(n[3]) : null;
          },
          remove: function (t) {
            this.write(t, '', Date.now() - 864e5);
          },
        };
      })()
    : (function () {
        return {
          write: function () {},
          read: function () {
            return null;
          },
          remove: function () {},
        };
      })();
});
var Oh = E((GN, xh) => {
  'use strict';
  xh.exports = function (e) {
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
  };
});
var Ch = E(($N, Th) => {
  'use strict';
  Th.exports = function (e, t) {
    return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e;
  };
});
var _a = E((HN, Ih) => {
  'use strict';
  var jv = Oh(),
    Gv = Ch();
  Ih.exports = function (e, t) {
    return e && !jv(t) ? Gv(e, t) : t;
  };
});
var Ah = E((zN, Nh) => {
  'use strict';
  var ba = Ue(),
    $v = [
      'age',
      'authorization',
      'content-length',
      'content-type',
      'etag',
      'expires',
      'from',
      'host',
      'if-modified-since',
      'if-unmodified-since',
      'last-modified',
      'location',
      'max-forwards',
      'proxy-authorization',
      'referer',
      'retry-after',
      'user-agent',
    ];
  Nh.exports = function (e) {
    var t = {},
      n,
      i,
      s;
    return (
      e &&
        ba.forEach(
          e.split(`
`),
          function (a) {
            if (
              ((s = a.indexOf(':')),
              (n = ba.trim(a.substr(0, s)).toLowerCase()),
              (i = ba.trim(a.substr(s + 1))),
              n)
            ) {
              if (t[n] && $v.indexOf(n) >= 0) return;
              n === 'set-cookie'
                ? (t[n] = (t[n] ? t[n] : []).concat([i]))
                : (t[n] = t[n] ? t[n] + ', ' + i : i);
            }
          }
        ),
      t
    );
  };
});
var Lh = E((VN, kh) => {
  'use strict';
  var Dh = Ue();
  kh.exports = Dh.isStandardBrowserEnv()
    ? (function () {
        var e = /(msie|trident)/i.test(navigator.userAgent),
          t = document.createElement('a'),
          n;
        function i(s) {
          var o = s;
          return (
            e && (t.setAttribute('href', o), (o = t.href)),
            t.setAttribute('href', o),
            {
              href: t.href,
              protocol: t.protocol ? t.protocol.replace(/:$/, '') : '',
              host: t.host,
              search: t.search ? t.search.replace(/^\?/, '') : '',
              hash: t.hash ? t.hash.replace(/^#/, '') : '',
              hostname: t.hostname,
              port: t.port,
              pathname:
                t.pathname.charAt(0) === '/' ? t.pathname : '/' + t.pathname,
            }
          );
        }
        return (
          (n = i(window.location.href)),
          function (o) {
            var a = Dh.isString(o) ? i(o) : o;
            return a.protocol === n.protocol && a.host === n.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })();
});
var Fh = E((WN, Ph) => {
  'use strict';
  var es = Ue(),
    Hv = ga(),
    zv = Rh(),
    Vv = Ki(),
    Wv = _a(),
    Xv = Ah(),
    Kv = Lh(),
    va = Zi();
  Ph.exports = function (e) {
    return new Promise(function (n, i) {
      var s = e.data,
        o = e.headers,
        a = e.responseType;
      es.isFormData(s) && delete o['Content-Type'];
      var c = new XMLHttpRequest();
      if (e.auth) {
        var l = e.auth.username || '',
          u = e.auth.password
            ? unescape(encodeURIComponent(e.auth.password))
            : '';
        o.Authorization = 'Basic ' + btoa(l + ':' + u);
      }
      var f = Wv(e.baseURL, e.url);
      c.open(e.method.toUpperCase(), Vv(f, e.params, e.paramsSerializer), !0),
        (c.timeout = e.timeout);
      function h() {
        if (c) {
          var y =
              'getAllResponseHeaders' in c
                ? Xv(c.getAllResponseHeaders())
                : null,
            v =
              !a || a === 'text' || a === 'json' ? c.responseText : c.response,
            p = {
              data: v,
              status: c.status,
              statusText: c.statusText,
              headers: y,
              config: e,
              request: c,
            };
          Hv(n, i, p), (c = null);
        }
      }
      if (
        ('onloadend' in c
          ? (c.onloadend = h)
          : (c.onreadystatechange = function () {
              !c ||
                c.readyState !== 4 ||
                (c.status === 0 &&
                  !(c.responseURL && c.responseURL.indexOf('file:') === 0)) ||
                setTimeout(h);
            }),
        (c.onabort = function () {
          c && (i(va('Request aborted', e, 'ECONNABORTED', c)), (c = null));
        }),
        (c.onerror = function () {
          i(va('Network Error', e, null, c)), (c = null);
        }),
        (c.ontimeout = function () {
          var v = 'timeout of ' + e.timeout + 'ms exceeded';
          e.timeoutErrorMessage && (v = e.timeoutErrorMessage),
            i(
              va(
                v,
                e,
                e.transitional && e.transitional.clarifyTimeoutError
                  ? 'ETIMEDOUT'
                  : 'ECONNABORTED',
                c
              )
            ),
            (c = null);
        }),
        es.isStandardBrowserEnv())
      ) {
        var d =
          (e.withCredentials || Kv(f)) && e.xsrfCookieName
            ? zv.read(e.xsrfCookieName)
            : void 0;
        d && (o[e.xsrfHeaderName] = d);
      }
      'setRequestHeader' in c &&
        es.forEach(o, function (v, p) {
          typeof s > 'u' && p.toLowerCase() === 'content-type'
            ? delete o[p]
            : c.setRequestHeader(p, v);
        }),
        es.isUndefined(e.withCredentials) ||
          (c.withCredentials = !!e.withCredentials),
        a && a !== 'json' && (c.responseType = e.responseType),
        typeof e.onDownloadProgress == 'function' &&
          c.addEventListener('progress', e.onDownloadProgress),
        typeof e.onUploadProgress == 'function' &&
          c.upload &&
          c.upload.addEventListener('progress', e.onUploadProgress),
        e.cancelToken &&
          e.cancelToken.promise.then(function (v) {
            c && (c.abort(), i(v), (c = null));
          }),
        s || (s = null),
        c.send(s);
    });
  };
});
var Mh = E((XN, Uh) => {
  'use strict';
  var Zr = 1e3,
    Qr = Zr * 60,
    en = Qr * 60,
    Or = en * 24,
    Yv = Or * 7,
    Jv = Or * 365.25;
  Uh.exports = function (r, e) {
    e = e || {};
    var t = typeof r;
    if (t === 'string' && r.length > 0) return Zv(r);
    if (t === 'number' && isFinite(r)) return e.long ? eS(r) : Qv(r);
    throw new Error(
      'val is not a non-empty string or a valid number. val=' +
        JSON.stringify(r)
    );
  };
  function Zv(r) {
    if (((r = String(r)), !(r.length > 100))) {
      var e =
        /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
          r
        );
      if (e) {
        var t = parseFloat(e[1]),
          n = (e[2] || 'ms').toLowerCase();
        switch (n) {
          case 'years':
          case 'year':
          case 'yrs':
          case 'yr':
          case 'y':
            return t * Jv;
          case 'weeks':
          case 'week':
          case 'w':
            return t * Yv;
          case 'days':
          case 'day':
          case 'd':
            return t * Or;
          case 'hours':
          case 'hour':
          case 'hrs':
          case 'hr':
          case 'h':
            return t * en;
          case 'minutes':
          case 'minute':
          case 'mins':
          case 'min':
          case 'm':
            return t * Qr;
          case 'seconds':
          case 'second':
          case 'secs':
          case 'sec':
          case 's':
            return t * Zr;
          case 'milliseconds':
          case 'millisecond':
          case 'msecs':
          case 'msec':
          case 'ms':
            return t;
          default:
            return;
        }
      }
    }
  }
  function Qv(r) {
    var e = Math.abs(r);
    return e >= Or
      ? Math.round(r / Or) + 'd'
      : e >= en
      ? Math.round(r / en) + 'h'
      : e >= Qr
      ? Math.round(r / Qr) + 'm'
      : e >= Zr
      ? Math.round(r / Zr) + 's'
      : r + 'ms';
  }
  function eS(r) {
    var e = Math.abs(r);
    return e >= Or
      ? ts(r, e, Or, 'day')
      : e >= en
      ? ts(r, e, en, 'hour')
      : e >= Qr
      ? ts(r, e, Qr, 'minute')
      : e >= Zr
      ? ts(r, e, Zr, 'second')
      : r + ' ms';
  }
  function ts(r, e, t, n) {
    var i = e >= t * 1.5;
    return Math.round(r / t) + ' ' + n + (i ? 's' : '');
  }
});
var Sa = E((KN, qh) => {
  'use strict';
  function tS(r) {
    (t.debug = t),
      (t.default = t),
      (t.coerce = c),
      (t.disable = s),
      (t.enable = i),
      (t.enabled = o),
      (t.humanize = Mh()),
      (t.destroy = l),
      Object.keys(r).forEach((u) => {
        t[u] = r[u];
      }),
      (t.names = []),
      (t.skips = []),
      (t.formatters = {});
    function e(u) {
      let f = 0;
      for (let h = 0; h < u.length; h++)
        (f = (f << 5) - f + u.charCodeAt(h)), (f |= 0);
      return t.colors[Math.abs(f) % t.colors.length];
    }
    t.selectColor = e;
    function t(u) {
      let f,
        h = null,
        d,
        y;
      function v(...p) {
        if (!v.enabled) return;
        let w = v,
          k = Number(new Date()),
          O = k - (f || k);
        (w.diff = O),
          (w.prev = f),
          (w.curr = k),
          (f = k),
          (p[0] = t.coerce(p[0])),
          typeof p[0] != 'string' && p.unshift('%O');
        let N = 0;
        (p[0] = p[0].replace(/%([a-zA-Z%])/g, (I, z) => {
          if (I === '%%') return '%';
          N++;
          let G = t.formatters[z];
          if (typeof G == 'function') {
            let T = p[N];
            (I = G.call(w, T)), p.splice(N, 1), N--;
          }
          return I;
        })),
          t.formatArgs.call(w, p),
          (w.log || t.log).apply(w, p);
      }
      return (
        (v.namespace = u),
        (v.useColors = t.useColors()),
        (v.color = t.selectColor(u)),
        (v.extend = n),
        (v.destroy = t.destroy),
        Object.defineProperty(v, 'enabled', {
          enumerable: !0,
          configurable: !1,
          get: () =>
            h !== null
              ? h
              : (d !== t.namespaces && ((d = t.namespaces), (y = t.enabled(u))),
                y),
          set: (p) => {
            h = p;
          },
        }),
        typeof t.init == 'function' && t.init(v),
        v
      );
    }
    function n(u, f) {
      let h = t(this.namespace + (typeof f > 'u' ? ':' : f) + u);
      return (h.log = this.log), h;
    }
    function i(u) {
      t.save(u), (t.namespaces = u), (t.names = []), (t.skips = []);
      let f,
        h = (typeof u == 'string' ? u : '').split(/[\s,]+/),
        d = h.length;
      for (f = 0; f < d; f++)
        h[f] &&
          ((u = h[f].replace(/\*/g, '.*?')),
          u[0] === '-'
            ? t.skips.push(new RegExp('^' + u.slice(1) + '$'))
            : t.names.push(new RegExp('^' + u + '$')));
    }
    function s() {
      let u = [...t.names.map(a), ...t.skips.map(a).map((f) => '-' + f)].join(
        ','
      );
      return t.enable(''), u;
    }
    function o(u) {
      if (u[u.length - 1] === '*') return !0;
      let f, h;
      for (f = 0, h = t.skips.length; f < h; f++)
        if (t.skips[f].test(u)) return !1;
      for (f = 0, h = t.names.length; f < h; f++)
        if (t.names[f].test(u)) return !0;
      return !1;
    }
    function a(u) {
      return u
        .toString()
        .substring(2, u.toString().length - 2)
        .replace(/\.\*\?$/, '*');
    }
    function c(u) {
      return u instanceof Error ? u.stack || u.message : u;
    }
    function l() {
      console.warn(
        'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
      );
    }
    return t.enable(t.load()), t;
  }
  qh.exports = tS;
});
var Bh = E((Xe, rs) => {
  'use strict';
  Xe.formatArgs = nS;
  Xe.save = iS;
  Xe.load = sS;
  Xe.useColors = rS;
  Xe.storage = oS();
  Xe.destroy = (() => {
    let r = !1;
    return () => {
      r ||
        ((r = !0),
        console.warn(
          'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
        ));
    };
  })();
  Xe.colors = [
    '#0000CC',
    '#0000FF',
    '#0033CC',
    '#0033FF',
    '#0066CC',
    '#0066FF',
    '#0099CC',
    '#0099FF',
    '#00CC00',
    '#00CC33',
    '#00CC66',
    '#00CC99',
    '#00CCCC',
    '#00CCFF',
    '#3300CC',
    '#3300FF',
    '#3333CC',
    '#3333FF',
    '#3366CC',
    '#3366FF',
    '#3399CC',
    '#3399FF',
    '#33CC00',
    '#33CC33',
    '#33CC66',
    '#33CC99',
    '#33CCCC',
    '#33CCFF',
    '#6600CC',
    '#6600FF',
    '#6633CC',
    '#6633FF',
    '#66CC00',
    '#66CC33',
    '#9900CC',
    '#9900FF',
    '#9933CC',
    '#9933FF',
    '#99CC00',
    '#99CC33',
    '#CC0000',
    '#CC0033',
    '#CC0066',
    '#CC0099',
    '#CC00CC',
    '#CC00FF',
    '#CC3300',
    '#CC3333',
    '#CC3366',
    '#CC3399',
    '#CC33CC',
    '#CC33FF',
    '#CC6600',
    '#CC6633',
    '#CC9900',
    '#CC9933',
    '#CCCC00',
    '#CCCC33',
    '#FF0000',
    '#FF0033',
    '#FF0066',
    '#FF0099',
    '#FF00CC',
    '#FF00FF',
    '#FF3300',
    '#FF3333',
    '#FF3366',
    '#FF3399',
    '#FF33CC',
    '#FF33FF',
    '#FF6600',
    '#FF6633',
    '#FF9900',
    '#FF9933',
    '#FFCC00',
    '#FFCC33',
  ];
  function rS() {
    return typeof window < 'u' &&
      window.process &&
      (window.process.type === 'renderer' || window.process.__nwjs)
      ? !0
      : typeof navigator < 'u' &&
        navigator.userAgent &&
        navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
      ? !1
      : (typeof document < 'u' &&
          document.documentElement &&
          document.documentElement.style &&
          document.documentElement.style.WebkitAppearance) ||
        (typeof window < 'u' &&
          window.console &&
          (window.console.firebug ||
            (window.console.exception && window.console.table))) ||
        (typeof navigator < 'u' &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
          parseInt(RegExp.$1, 10) >= 31) ||
        (typeof navigator < 'u' &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
  }
  function nS(r) {
    if (
      ((r[0] =
        (this.useColors ? '%c' : '') +
        this.namespace +
        (this.useColors ? ' %c' : ' ') +
        r[0] +
        (this.useColors ? '%c ' : ' ') +
        '+' +
        rs.exports.humanize(this.diff)),
      !this.useColors)
    )
      return;
    let e = 'color: ' + this.color;
    r.splice(1, 0, e, 'color: inherit');
    let t = 0,
      n = 0;
    r[0].replace(/%[a-zA-Z%]/g, (i) => {
      i !== '%%' && (t++, i === '%c' && (n = t));
    }),
      r.splice(n, 0, e);
  }
  Xe.log = console.debug || console.log || (() => {});
  function iS(r) {
    try {
      r ? Xe.storage.setItem('debug', r) : Xe.storage.removeItem('debug');
    } catch {}
  }
  function sS() {
    let r;
    try {
      r = Xe.storage.getItem('debug');
    } catch {}
    return (
      !r && typeof process < 'u' && 'env' in process && (r = process.env.DEBUG),
      r
    );
  }
  function oS() {
    try {
      return localStorage;
    } catch {}
  }
  rs.exports = Sa()(Xe);
  var { formatters: aS } = rs.exports;
  aS.j = function (r) {
    try {
      return JSON.stringify(r);
    } catch (e) {
      return '[UnexpectedJSONParseError]: ' + e.message;
    }
  };
});
var Gh = E((YN, jh) => {
  'use strict';
  jh.exports = (r, e = process.argv) => {
    let t = r.startsWith('-') ? '' : r.length === 1 ? '-' : '--',
      n = e.indexOf(t + r),
      i = e.indexOf('--');
    return n !== -1 && (i === -1 || n < i);
  };
});
var zh = E((JN, Hh) => {
  'use strict';
  var cS = require('os'),
    $h = require('tty'),
    rt = Gh(),
    { env: ye } = process,
    Wt;
  rt('no-color') || rt('no-colors') || rt('color=false') || rt('color=never')
    ? (Wt = 0)
    : (rt('color') || rt('colors') || rt('color=true') || rt('color=always')) &&
      (Wt = 1);
  'FORCE_COLOR' in ye &&
    (ye.FORCE_COLOR === 'true'
      ? (Wt = 1)
      : ye.FORCE_COLOR === 'false'
      ? (Wt = 0)
      : (Wt =
          ye.FORCE_COLOR.length === 0
            ? 1
            : Math.min(parseInt(ye.FORCE_COLOR, 10), 3)));
  function wa(r) {
    return r === 0
      ? !1
      : { level: r, hasBasic: !0, has256: r >= 2, has16m: r >= 3 };
  }
  function Ra(r, e) {
    if (Wt === 0) return 0;
    if (rt('color=16m') || rt('color=full') || rt('color=truecolor')) return 3;
    if (rt('color=256')) return 2;
    if (r && !e && Wt === void 0) return 0;
    let t = Wt || 0;
    if (ye.TERM === 'dumb') return t;
    if (process.platform === 'win32') {
      let n = cS.release().split('.');
      return Number(n[0]) >= 10 && Number(n[2]) >= 10586
        ? Number(n[2]) >= 14931
          ? 3
          : 2
        : 1;
    }
    if ('CI' in ye)
      return [
        'TRAVIS',
        'CIRCLECI',
        'APPVEYOR',
        'GITLAB_CI',
        'GITHUB_ACTIONS',
        'BUILDKITE',
      ].some((n) => n in ye) || ye.CI_NAME === 'codeship'
        ? 1
        : t;
    if ('TEAMCITY_VERSION' in ye)
      return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(ye.TEAMCITY_VERSION) ? 1 : 0;
    if (ye.COLORTERM === 'truecolor') return 3;
    if ('TERM_PROGRAM' in ye) {
      let n = parseInt((ye.TERM_PROGRAM_VERSION || '').split('.')[0], 10);
      switch (ye.TERM_PROGRAM) {
        case 'iTerm.app':
          return n >= 3 ? 3 : 2;
        case 'Apple_Terminal':
          return 2;
      }
    }
    return /-256(color)?$/i.test(ye.TERM)
      ? 2
      : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(
          ye.TERM
        ) || 'COLORTERM' in ye
      ? 1
      : t;
  }
  function uS(r) {
    let e = Ra(r, r && r.isTTY);
    return wa(e);
  }
  Hh.exports = {
    supportsColor: uS,
    stdout: wa(Ra(!0, $h.isatty(1))),
    stderr: wa(Ra(!0, $h.isatty(2))),
  };
});
var Wh = E((Se, is) => {
  'use strict';
  var lS = require('tty'),
    ns = require('util');
  Se.init = ES;
  Se.log = pS;
  Se.formatArgs = hS;
  Se.save = mS;
  Se.load = yS;
  Se.useColors = fS;
  Se.destroy = ns.deprecate(() => {},
  'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
  Se.colors = [6, 2, 3, 4, 5, 1];
  try {
    let r = zh();
    r &&
      (r.stderr || r).level >= 2 &&
      (Se.colors = [
        20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63,
        68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128,
        129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168,
        169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200,
        201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221,
      ]);
  } catch {}
  Se.inspectOpts = Object.keys(process.env)
    .filter((r) => /^debug_/i.test(r))
    .reduce((r, e) => {
      let t = e
          .substring(6)
          .toLowerCase()
          .replace(/_([a-z])/g, (i, s) => s.toUpperCase()),
        n = process.env[e];
      return (
        /^(yes|on|true|enabled)$/i.test(n)
          ? (n = !0)
          : /^(no|off|false|disabled)$/i.test(n)
          ? (n = !1)
          : n === 'null'
          ? (n = null)
          : (n = Number(n)),
        (r[t] = n),
        r
      );
    }, {});
  function fS() {
    return 'colors' in Se.inspectOpts
      ? !!Se.inspectOpts.colors
      : lS.isatty(process.stderr.fd);
  }
  function hS(r) {
    let { namespace: e, useColors: t } = this;
    if (t) {
      let n = this.color,
        i = '\x1B[3' + (n < 8 ? n : '8;5;' + n),
        s = `  ${i};1m${e} \x1B[0m`;
      (r[0] =
        s +
        r[0]
          .split(
            `
`
          )
          .join(
            `
` + s
          )),
        r.push(i + 'm+' + is.exports.humanize(this.diff) + '\x1B[0m');
    } else r[0] = dS() + e + ' ' + r[0];
  }
  function dS() {
    return Se.inspectOpts.hideDate ? '' : new Date().toISOString() + ' ';
  }
  function pS(...r) {
    return process.stderr.write(
      ns.format(...r) +
        `
`
    );
  }
  function mS(r) {
    r ? (process.env.DEBUG = r) : delete process.env.DEBUG;
  }
  function yS() {
    return process.env.DEBUG;
  }
  function ES(r) {
    r.inspectOpts = {};
    let e = Object.keys(Se.inspectOpts);
    for (let t = 0; t < e.length; t++)
      r.inspectOpts[e[t]] = Se.inspectOpts[e[t]];
  }
  is.exports = Sa()(Se);
  var { formatters: Vh } = is.exports;
  Vh.o = function (r) {
    return (
      (this.inspectOpts.colors = this.useColors),
      ns
        .inspect(r, this.inspectOpts)
        .split(
          `
`
        )
        .map((e) => e.trim())
        .join(' ')
    );
  };
  Vh.O = function (r) {
    return (
      (this.inspectOpts.colors = this.useColors),
      ns.inspect(r, this.inspectOpts)
    );
  };
});
var Xh = E((ZN, xa) => {
  'use strict';
  typeof process > 'u' ||
  process.type === 'renderer' ||
  process.browser === !0 ||
  process.__nwjs
    ? (xa.exports = Bh())
    : (xa.exports = Wh());
});
var Yh = E((QN, Kh) => {
  'use strict';
  var Zn;
  Kh.exports = function () {
    if (!Zn) {
      try {
        Zn = Xh()('follow-redirects');
      } catch {}
      typeof Zn != 'function' && (Zn = function () {});
    }
    Zn.apply(null, arguments);
  };
});
var ka = E((eA, Da) => {
  'use strict';
  var Tr = require('url'),
    Oa = Tr.URL,
    gS = require('http'),
    _S = require('https'),
    Ca = require('stream').Writable,
    Qh = require('assert'),
    ed = Yh(),
    Ia = ['abort', 'aborted', 'connect', 'error', 'socket', 'timeout'],
    Na = Object.create(null);
  Ia.forEach(function (r) {
    Na[r] = function (e, t, n) {
      this._redirectable.emit(r, e, t, n);
    };
  });
  var bS = ei('ERR_INVALID_URL', 'Invalid URL', TypeError),
    Jh = ei('ERR_FR_REDIRECTION_FAILURE', 'Redirected request failed'),
    vS = ei(
      'ERR_FR_TOO_MANY_REDIRECTS',
      'Maximum number of redirects exceeded'
    ),
    SS = ei(
      'ERR_FR_MAX_BODY_LENGTH_EXCEEDED',
      'Request body larger than maxBodyLength limit'
    ),
    wS = ei('ERR_STREAM_WRITE_AFTER_END', 'write after end'),
    RS = Ca.prototype.destroy || rd;
  function Ge(r, e) {
    Ca.call(this),
      this._sanitizeOptions(r),
      (this._options = r),
      (this._ended = !1),
      (this._ending = !1),
      (this._redirectCount = 0),
      (this._redirects = []),
      (this._requestBodyLength = 0),
      (this._requestBodyBuffers = []),
      e && this.on('response', e);
    var t = this;
    (this._onNativeResponse = function (n) {
      t._processResponse(n);
    }),
      this._performRequest();
  }
  Ge.prototype = Object.create(Ca.prototype);
  Ge.prototype.abort = function () {
    Aa(this._currentRequest), this._currentRequest.abort(), this.emit('abort');
  };
  Ge.prototype.destroy = function (r) {
    return Aa(this._currentRequest, r), RS.call(this, r), this;
  };
  Ge.prototype.write = function (r, e, t) {
    if (this._ending) throw new wS();
    if (!Cr(r) && !OS(r))
      throw new TypeError('data should be a string, Buffer or Uint8Array');
    if ((Qn(e) && ((t = e), (e = null)), r.length === 0)) {
      t && t();
      return;
    }
    this._requestBodyLength + r.length <= this._options.maxBodyLength
      ? ((this._requestBodyLength += r.length),
        this._requestBodyBuffers.push({ data: r, encoding: e }),
        this._currentRequest.write(r, e, t))
      : (this.emit('error', new SS()), this.abort());
  };
  Ge.prototype.end = function (r, e, t) {
    if (
      (Qn(r) ? ((t = r), (r = e = null)) : Qn(e) && ((t = e), (e = null)), !r)
    )
      (this._ended = this._ending = !0),
        this._currentRequest.end(null, null, t);
    else {
      var n = this,
        i = this._currentRequest;
      this.write(r, e, function () {
        (n._ended = !0), i.end(null, null, t);
      }),
        (this._ending = !0);
    }
  };
  Ge.prototype.setHeader = function (r, e) {
    (this._options.headers[r] = e), this._currentRequest.setHeader(r, e);
  };
  Ge.prototype.removeHeader = function (r) {
    delete this._options.headers[r], this._currentRequest.removeHeader(r);
  };
  Ge.prototype.setTimeout = function (r, e) {
    var t = this;
    function n(o) {
      o.setTimeout(r),
        o.removeListener('timeout', o.destroy),
        o.addListener('timeout', o.destroy);
    }
    function i(o) {
      t._timeout && clearTimeout(t._timeout),
        (t._timeout = setTimeout(function () {
          t.emit('timeout'), s();
        }, r)),
        n(o);
    }
    function s() {
      t._timeout && (clearTimeout(t._timeout), (t._timeout = null)),
        t.removeListener('abort', s),
        t.removeListener('error', s),
        t.removeListener('response', s),
        t.removeListener('close', s),
        e && t.removeListener('timeout', e),
        t.socket || t._currentRequest.removeListener('socket', i);
    }
    return (
      e && this.on('timeout', e),
      this.socket ? i(this.socket) : this._currentRequest.once('socket', i),
      this.on('socket', n),
      this.on('abort', s),
      this.on('error', s),
      this.on('response', s),
      this.on('close', s),
      this
    );
  };
  ['flushHeaders', 'getHeader', 'setNoDelay', 'setSocketKeepAlive'].forEach(
    function (r) {
      Ge.prototype[r] = function (e, t) {
        return this._currentRequest[r](e, t);
      };
    }
  );
  ['aborted', 'connection', 'socket'].forEach(function (r) {
    Object.defineProperty(Ge.prototype, r, {
      get: function () {
        return this._currentRequest[r];
      },
    });
  });
  Ge.prototype._sanitizeOptions = function (r) {
    if (
      (r.headers || (r.headers = {}),
      r.host && (r.hostname || (r.hostname = r.host), delete r.host),
      !r.pathname && r.path)
    ) {
      var e = r.path.indexOf('?');
      e < 0
        ? (r.pathname = r.path)
        : ((r.pathname = r.path.substring(0, e)),
          (r.search = r.path.substring(e)));
    }
  };
  Ge.prototype._performRequest = function () {
    var r = this._options.protocol,
      e = this._options.nativeProtocols[r];
    if (!e) {
      this.emit('error', new TypeError('Unsupported protocol ' + r));
      return;
    }
    if (this._options.agents) {
      var t = r.slice(0, -1);
      this._options.agent = this._options.agents[t];
    }
    var n = (this._currentRequest = e.request(
      this._options,
      this._onNativeResponse
    ));
    n._redirectable = this;
    for (var i of Ia) n.on(i, Na[i]);
    if (
      ((this._currentUrl = /^\//.test(this._options.path)
        ? Tr.format(this._options)
        : this._options.path),
      this._isRedirect)
    ) {
      var s = 0,
        o = this,
        a = this._requestBodyBuffers;
      (function c(l) {
        if (n === o._currentRequest)
          if (l) o.emit('error', l);
          else if (s < a.length) {
            var u = a[s++];
            n.finished || n.write(u.data, u.encoding, c);
          } else o._ended && n.end();
      })();
    }
  };
  Ge.prototype._processResponse = function (r) {
    var e = r.statusCode;
    this._options.trackRedirects &&
      this._redirects.push({
        url: this._currentUrl,
        headers: r.headers,
        statusCode: e,
      });
    var t = r.headers.location;
    if (!t || this._options.followRedirects === !1 || e < 300 || e >= 400) {
      (r.responseUrl = this._currentUrl),
        (r.redirects = this._redirects),
        this.emit('response', r),
        (this._requestBodyBuffers = []);
      return;
    }
    if (
      (Aa(this._currentRequest),
      r.destroy(),
      ++this._redirectCount > this._options.maxRedirects)
    ) {
      this.emit('error', new vS());
      return;
    }
    var n,
      i = this._options.beforeRedirect;
    i &&
      (n = Object.assign(
        { Host: r.req.getHeader('host') },
        this._options.headers
      ));
    var s = this._options.method;
    (((e === 301 || e === 302) && this._options.method === 'POST') ||
      (e === 303 && !/^(?:GET|HEAD)$/.test(this._options.method))) &&
      ((this._options.method = 'GET'),
      (this._requestBodyBuffers = []),
      Ta(/^content-/i, this._options.headers));
    var o = Ta(/^host$/i, this._options.headers),
      a = Tr.parse(this._currentUrl),
      c = o || a.host,
      l = /^\w+:/.test(t)
        ? this._currentUrl
        : Tr.format(Object.assign(a, { host: c })),
      u;
    try {
      u = Tr.resolve(l, t);
    } catch (y) {
      this.emit('error', new Jh({ cause: y }));
      return;
    }
    ed('redirecting to', u), (this._isRedirect = !0);
    var f = Tr.parse(u);
    if (
      (Object.assign(this._options, f),
      ((f.protocol !== a.protocol && f.protocol !== 'https:') ||
        (f.host !== c && !xS(f.host, c))) &&
        Ta(/^(?:authorization|cookie)$/i, this._options.headers),
      Qn(i))
    ) {
      var h = { headers: r.headers, statusCode: e },
        d = { url: l, method: s, headers: n };
      try {
        i(this._options, h, d);
      } catch (y) {
        this.emit('error', y);
        return;
      }
      this._sanitizeOptions(this._options);
    }
    try {
      this._performRequest();
    } catch (y) {
      this.emit('error', new Jh({ cause: y }));
    }
  };
  function td(r) {
    var e = { maxRedirects: 21, maxBodyLength: 10485760 },
      t = {};
    return (
      Object.keys(r).forEach(function (n) {
        var i = n + ':',
          s = (t[i] = r[n]),
          o = (e[n] = Object.create(s));
        function a(l, u, f) {
          if (Cr(l)) {
            var h;
            try {
              h = Zh(new Oa(l));
            } catch {
              h = Tr.parse(l);
            }
            if (!Cr(h.protocol)) throw new bS({ input: l });
            l = h;
          } else Oa && l instanceof Oa ? (l = Zh(l)) : ((f = u), (u = l), (l = { protocol: i }));
          return (
            Qn(u) && ((f = u), (u = null)),
            (u = Object.assign(
              { maxRedirects: e.maxRedirects, maxBodyLength: e.maxBodyLength },
              l,
              u
            )),
            (u.nativeProtocols = t),
            !Cr(u.host) && !Cr(u.hostname) && (u.hostname = '::1'),
            Qh.equal(u.protocol, i, 'protocol mismatch'),
            ed('options', u),
            new Ge(u, f)
          );
        }
        function c(l, u, f) {
          var h = o.request(l, u, f);
          return h.end(), h;
        }
        Object.defineProperties(o, {
          request: { value: a, configurable: !0, enumerable: !0, writable: !0 },
          get: { value: c, configurable: !0, enumerable: !0, writable: !0 },
        });
      }),
      e
    );
  }
  function rd() {}
  function Zh(r) {
    var e = {
      protocol: r.protocol,
      hostname: r.hostname.startsWith('[')
        ? r.hostname.slice(1, -1)
        : r.hostname,
      hash: r.hash,
      search: r.search,
      pathname: r.pathname,
      path: r.pathname + r.search,
      href: r.href,
    };
    return r.port !== '' && (e.port = Number(r.port)), e;
  }
  function Ta(r, e) {
    var t;
    for (var n in e) r.test(n) && ((t = e[n]), delete e[n]);
    return t === null || typeof t > 'u' ? void 0 : String(t).trim();
  }
  function ei(r, e, t) {
    function n(i) {
      Error.captureStackTrace(this, this.constructor),
        Object.assign(this, i || {}),
        (this.code = r),
        (this.message = this.cause ? e + ': ' + this.cause.message : e);
    }
    return (
      (n.prototype = new (t || Error)()),
      (n.prototype.constructor = n),
      (n.prototype.name = 'Error [' + r + ']'),
      n
    );
  }
  function Aa(r, e) {
    for (var t of Ia) r.removeListener(t, Na[t]);
    r.on('error', rd), r.destroy(e);
  }
  function xS(r, e) {
    Qh(Cr(r) && Cr(e));
    var t = r.length - e.length - 1;
    return t > 0 && r[t] === '.' && r.endsWith(e);
  }
  function Cr(r) {
    return typeof r == 'string' || r instanceof String;
  }
  function Qn(r) {
    return typeof r == 'function';
  }
  function OS(r) {
    return typeof r == 'object' && 'length' in r;
  }
  Da.exports = td({ http: gS, https: _S });
  Da.exports.wrap = td;
});
var La = E((tA, TS) => {
  TS.exports = {
    name: 'axios',
    version: '0.21.2',
    description: 'Promise based HTTP client for the browser and node.js',
    main: 'index.js',
    scripts: {
      test: 'grunt test',
      start: 'node ./sandbox/server.js',
      build: 'NODE_ENV=production grunt build',
      preversion: 'npm test',
      version:
        'npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json',
      postversion: 'git push && git push --tags',
      examples: 'node ./examples/server.js',
      coveralls:
        'cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js',
      fix: 'eslint --fix lib/**/*.js',
    },
    repository: { type: 'git', url: 'https://github.com/axios/axios.git' },
    keywords: ['xhr', 'http', 'ajax', 'promise', 'node'],
    author: 'Matt Zabriskie',
    license: 'MIT',
    bugs: { url: 'https://github.com/axios/axios/issues' },
    homepage: 'https://axios-http.com',
    devDependencies: {
      coveralls: '^3.0.0',
      'es6-promise': '^4.2.4',
      grunt: '^1.3.0',
      'grunt-banner': '^0.6.0',
      'grunt-cli': '^1.2.0',
      'grunt-contrib-clean': '^1.1.0',
      'grunt-contrib-watch': '^1.0.0',
      'grunt-eslint': '^23.0.0',
      'grunt-karma': '^4.0.0',
      'grunt-mocha-test': '^0.13.3',
      'grunt-ts': '^6.0.0-beta.19',
      'grunt-webpack': '^4.0.2',
      'istanbul-instrumenter-loader': '^1.0.0',
      'jasmine-core': '^2.4.1',
      karma: '^6.3.2',
      'karma-chrome-launcher': '^3.1.0',
      'karma-firefox-launcher': '^2.1.0',
      'karma-jasmine': '^1.1.1',
      'karma-jasmine-ajax': '^0.1.13',
      'karma-safari-launcher': '^1.0.0',
      'karma-sauce-launcher': '^4.3.6',
      'karma-sinon': '^1.0.5',
      'karma-sourcemap-loader': '^0.3.8',
      'karma-webpack': '^4.0.2',
      'load-grunt-tasks': '^3.5.2',
      minimist: '^1.2.0',
      mocha: '^8.2.1',
      sinon: '^4.5.0',
      'terser-webpack-plugin': '^4.2.3',
      typescript: '^4.0.5',
      'url-search-params': '^0.10.0',
      webpack: '^4.44.2',
      'webpack-dev-server': '^3.11.0',
    },
    browser: { './lib/adapters/http.js': './lib/adapters/xhr.js' },
    jsdelivr: 'dist/axios.min.js',
    unpkg: 'dist/axios.min.js',
    typings: './index.d.ts',
    dependencies: { 'follow-redirects': '^1.14.0' },
    bundlesize: [{ path: './dist/axios.min.js', threshold: '5kB' }],
  };
});
var cd = E((rA, ad) => {
  'use strict';
  var ti = Ue(),
    nd = ga(),
    CS = _a(),
    IS = Ki(),
    NS = require('http'),
    AS = require('https'),
    DS = ka().http,
    kS = ka().https,
    id = require('url'),
    LS = require('zlib'),
    PS = La(),
    ss = Zi(),
    Pa = Ji(),
    sd = /https:?/;
  function od(r, e, t) {
    if (
      ((r.hostname = e.host),
      (r.host = e.host),
      (r.port = e.port),
      (r.path = t),
      e.auth)
    ) {
      var n = Buffer.from(
        e.auth.username + ':' + e.auth.password,
        'utf8'
      ).toString('base64');
      r.headers['Proxy-Authorization'] = 'Basic ' + n;
    }
    r.beforeRedirect = function (s) {
      (s.headers.host = s.host), od(s, e, s.href);
    };
  }
  ad.exports = function (e) {
    return new Promise(function (n, i) {
      var s = function (L) {
          n(L);
        },
        o = function (L) {
          i(L);
        },
        a = e.data,
        c = e.headers;
      if (
        ('User-Agent' in c || 'user-agent' in c
          ? !c['User-Agent'] &&
            !c['user-agent'] &&
            (delete c['User-Agent'], delete c['user-agent'])
          : (c['User-Agent'] = 'axios/' + PS.version),
        a && !ti.isStream(a))
      ) {
        if (!Buffer.isBuffer(a))
          if (ti.isArrayBuffer(a)) a = Buffer.from(new Uint8Array(a));
          else if (ti.isString(a)) a = Buffer.from(a, 'utf-8');
          else
            return o(
              ss(
                'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',
                e
              )
            );
        c['Content-Length'] = a.length;
      }
      var l = void 0;
      if (e.auth) {
        var u = e.auth.username || '',
          f = e.auth.password || '';
        l = u + ':' + f;
      }
      var h = CS(e.baseURL, e.url),
        d = id.parse(h),
        y = d.protocol || 'http:';
      if (!l && d.auth) {
        var v = d.auth.split(':'),
          p = v[0] || '',
          w = v[1] || '';
        l = p + ':' + w;
      }
      l && delete c.Authorization;
      var k = sd.test(y),
        O = k ? e.httpsAgent : e.httpAgent,
        N = {
          path: IS(d.path, e.params, e.paramsSerializer).replace(/^\?/, ''),
          method: e.method.toUpperCase(),
          headers: c,
          agent: O,
          agents: { http: e.httpAgent, https: e.httpsAgent },
          auth: l,
        };
      e.socketPath
        ? (N.socketPath = e.socketPath)
        : ((N.hostname = d.hostname), (N.port = d.port));
      var P = e.proxy;
      if (!P && P !== !1) {
        var I = y.slice(0, -1) + '_proxy',
          z = process.env[I] || process.env[I.toUpperCase()];
        if (z) {
          var G = id.parse(z),
            T = process.env.no_proxy || process.env.NO_PROXY,
            C = !0;
          if (T) {
            var j = T.split(',').map(function (L) {
              return L.trim();
            });
            C = !j.some(function (L) {
              return L
                ? L === '*' ||
                  (L[0] === '.' &&
                    d.hostname.substr(d.hostname.length - L.length) === L)
                  ? !0
                  : d.hostname === L
                : !1;
            });
          }
          if (
            C &&
            ((P = { host: G.hostname, port: G.port, protocol: G.protocol }),
            G.auth)
          ) {
            var X = G.auth.split(':');
            P.auth = { username: X[0], password: X[1] };
          }
        }
      }
      P &&
        ((N.headers.host = d.hostname + (d.port ? ':' + d.port : '')),
        od(
          N,
          P,
          y + '//' + d.hostname + (d.port ? ':' + d.port : '') + N.path
        ));
      var V,
        J = k && (P ? sd.test(P.protocol) : !0);
      e.transport
        ? (V = e.transport)
        : e.maxRedirects === 0
        ? (V = J ? AS : NS)
        : (e.maxRedirects && (N.maxRedirects = e.maxRedirects),
          (V = J ? kS : DS)),
        e.maxBodyLength > -1 && (N.maxBodyLength = e.maxBodyLength);
      var q = V.request(N, function (L) {
        if (!q.aborted) {
          var H = L,
            le = L.req || q;
          if (
            L.statusCode !== 204 &&
            le.method !== 'HEAD' &&
            e.decompress !== !1
          )
            switch (L.headers['content-encoding']) {
              case 'gzip':
              case 'compress':
              case 'deflate':
                (H = H.pipe(LS.createUnzip())),
                  delete L.headers['content-encoding'];
                break;
            }
          var Re = {
            status: L.statusCode,
            statusText: L.statusMessage,
            headers: L.headers,
            config: e,
            request: le,
          };
          if (e.responseType === 'stream') (Re.data = H), nd(s, o, Re);
          else {
            var R = [],
              A = 0;
            H.on('data', function (W) {
              R.push(W),
                (A += W.length),
                e.maxContentLength > -1 &&
                  A > e.maxContentLength &&
                  (H.destroy(),
                  o(
                    ss(
                      'maxContentLength size of ' +
                        e.maxContentLength +
                        ' exceeded',
                      e,
                      null,
                      le
                    )
                  ));
            }),
              H.on('error', function (W) {
                q.aborted || o(Pa(W, e, null, le));
              }),
              H.on('end', function () {
                var W = Buffer.concat(R);
                e.responseType !== 'arraybuffer' &&
                  ((W = W.toString(e.responseEncoding)),
                  (!e.responseEncoding || e.responseEncoding === 'utf8') &&
                    (W = ti.stripBOM(W))),
                  (Re.data = W),
                  nd(s, o, Re);
              });
          }
        }
      });
      if (
        (q.on('error', function (L) {
          (q.aborted && L.code !== 'ERR_FR_TOO_MANY_REDIRECTS') ||
            o(Pa(L, e, null, q));
        }),
        e.timeout)
      ) {
        var K = parseInt(e.timeout, 10);
        if (isNaN(K)) {
          o(
            ss(
              'error trying to parse `config.timeout` to int',
              e,
              'ERR_PARSE_TIMEOUT',
              q
            )
          );
          return;
        }
        q.setTimeout(K, function () {
          q.abort(),
            o(
              ss(
                'timeout of ' + K + 'ms exceeded',
                e,
                e.transitional && e.transitional.clarifyTimeoutError
                  ? 'ETIMEDOUT'
                  : 'ECONNABORTED',
                q
              )
            );
        });
      }
      e.cancelToken &&
        e.cancelToken.promise.then(function (L) {
          q.aborted || (q.abort(), o(L));
        }),
        ti.isStream(a)
          ? a
              .on('error', function (L) {
                o(Pa(L, e, null, q));
              })
              .pipe(q)
          : q.end(a);
    });
  };
});
var as = E((nA, fd) => {
  'use strict';
  var Me = Ue(),
    ud = _h(),
    FS = Ji(),
    US = { 'Content-Type': 'application/x-www-form-urlencoded' };
  function ld(r, e) {
    !Me.isUndefined(r) &&
      Me.isUndefined(r['Content-Type']) &&
      (r['Content-Type'] = e);
  }
  function MS() {
    var r;
    return (
      typeof XMLHttpRequest < 'u'
        ? (r = Fh())
        : typeof process < 'u' &&
          Object.prototype.toString.call(process) === '[object process]' &&
          (r = cd()),
      r
    );
  }
  var os = {
    transitional: {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1,
    },
    adapter: MS(),
    transformRequest: [
      function (e, t) {
        return (
          ud(t, 'Accept'),
          ud(t, 'Content-Type'),
          Me.isFormData(e) ||
          Me.isArrayBuffer(e) ||
          Me.isBuffer(e) ||
          Me.isStream(e) ||
          Me.isFile(e) ||
          Me.isBlob(e)
            ? e
            : Me.isArrayBufferView(e)
            ? e.buffer
            : Me.isURLSearchParams(e)
            ? (ld(t, 'application/x-www-form-urlencoded;charset=utf-8'),
              e.toString())
            : Me.isObject(e) || (t && t['Content-Type'] === 'application/json')
            ? (ld(t, 'application/json'), JSON.stringify(e))
            : e
        );
      },
    ],
    transformResponse: [
      function (e) {
        var t = this.transitional,
          n = t && t.silentJSONParsing,
          i = t && t.forcedJSONParsing,
          s = !n && this.responseType === 'json';
        if (s || (i && Me.isString(e) && e.length))
          try {
            return JSON.parse(e);
          } catch (o) {
            if (s)
              throw o.name === 'SyntaxError' ? FS(o, this, 'E_JSON_PARSE') : o;
          }
        return e;
      },
    ],
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    validateStatus: function (e) {
      return e >= 200 && e < 300;
    },
  };
  os.headers = { common: { Accept: 'application/json, text/plain, */*' } };
  Me.forEach(['delete', 'get', 'head'], function (e) {
    os.headers[e] = {};
  });
  Me.forEach(['post', 'put', 'patch'], function (e) {
    os.headers[e] = Me.merge(US);
  });
  fd.exports = os;
});
var dd = E((iA, hd) => {
  'use strict';
  var qS = Ue(),
    BS = as();
  hd.exports = function (e, t, n) {
    var i = this || BS;
    return (
      qS.forEach(n, function (o) {
        e = o.call(i, e, t);
      }),
      e
    );
  };
});
var Fa = E((sA, pd) => {
  'use strict';
  pd.exports = function (e) {
    return !!(e && e.__CANCEL__);
  };
});
var Ed = E((oA, yd) => {
  'use strict';
  var md = Ue(),
    Ua = dd(),
    jS = Fa(),
    GS = as();
  function Ma(r) {
    r.cancelToken && r.cancelToken.throwIfRequested();
  }
  yd.exports = function (e) {
    Ma(e),
      (e.headers = e.headers || {}),
      (e.data = Ua.call(e, e.data, e.headers, e.transformRequest)),
      (e.headers = md.merge(
        e.headers.common || {},
        e.headers[e.method] || {},
        e.headers
      )),
      md.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        function (i) {
          delete e.headers[i];
        }
      );
    var t = e.adapter || GS.adapter;
    return t(e).then(
      function (i) {
        return (
          Ma(e),
          (i.data = Ua.call(e, i.data, i.headers, e.transformResponse)),
          i
        );
      },
      function (i) {
        return (
          jS(i) ||
            (Ma(e),
            i &&
              i.response &&
              (i.response.data = Ua.call(
                e,
                i.response.data,
                i.response.headers,
                e.transformResponse
              ))),
          Promise.reject(i)
        );
      }
    );
  };
});
var qa = E((aA, gd) => {
  'use strict';
  var Oe = Ue();
  gd.exports = function (e, t) {
    t = t || {};
    var n = {},
      i = ['url', 'method', 'data'],
      s = ['headers', 'auth', 'proxy', 'params'],
      o = [
        'baseURL',
        'transformRequest',
        'transformResponse',
        'paramsSerializer',
        'timeout',
        'timeoutMessage',
        'withCredentials',
        'adapter',
        'responseType',
        'xsrfCookieName',
        'xsrfHeaderName',
        'onUploadProgress',
        'onDownloadProgress',
        'decompress',
        'maxContentLength',
        'maxBodyLength',
        'maxRedirects',
        'transport',
        'httpAgent',
        'httpsAgent',
        'cancelToken',
        'socketPath',
        'responseEncoding',
      ],
      a = ['validateStatus'];
    function c(h, d) {
      return Oe.isPlainObject(h) && Oe.isPlainObject(d)
        ? Oe.merge(h, d)
        : Oe.isPlainObject(d)
        ? Oe.merge({}, d)
        : Oe.isArray(d)
        ? d.slice()
        : d;
    }
    function l(h) {
      Oe.isUndefined(t[h])
        ? Oe.isUndefined(e[h]) || (n[h] = c(void 0, e[h]))
        : (n[h] = c(e[h], t[h]));
    }
    Oe.forEach(i, function (d) {
      Oe.isUndefined(t[d]) || (n[d] = c(void 0, t[d]));
    }),
      Oe.forEach(s, l),
      Oe.forEach(o, function (d) {
        Oe.isUndefined(t[d])
          ? Oe.isUndefined(e[d]) || (n[d] = c(void 0, e[d]))
          : (n[d] = c(void 0, t[d]));
      }),
      Oe.forEach(a, function (d) {
        d in t ? (n[d] = c(e[d], t[d])) : d in e && (n[d] = c(void 0, e[d]));
      });
    var u = i.concat(s).concat(o).concat(a),
      f = Object.keys(e)
        .concat(Object.keys(t))
        .filter(function (d) {
          return u.indexOf(d) === -1;
        });
    return Oe.forEach(f, l), n;
  };
});
var wd = E((cA, Sd) => {
  'use strict';
  var bd = La(),
    Ba = {};
  ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
    function (r, e) {
      Ba[r] = function (n) {
        return typeof n === r || 'a' + (e < 1 ? 'n ' : ' ') + r;
      };
    }
  );
  var _d = {},
    $S = bd.version.split('.');
  function vd(r, e) {
    for (var t = e ? e.split('.') : $S, n = r.split('.'), i = 0; i < 3; i++) {
      if (t[i] > n[i]) return !0;
      if (t[i] < n[i]) return !1;
    }
    return !1;
  }
  Ba.transitional = function (e, t, n) {
    var i = t && vd(t);
    function s(o, a) {
      return (
        '[Axios v' +
        bd.version +
        "] Transitional option '" +
        o +
        "'" +
        a +
        (n ? '. ' + n : '')
      );
    }
    return function (o, a, c) {
      if (e === !1) throw new Error(s(a, ' has been removed in ' + t));
      return (
        i &&
          !_d[a] &&
          ((_d[a] = !0),
          console.warn(
            s(
              a,
              ' has been deprecated since v' +
                t +
                ' and will be removed in the near future'
            )
          )),
        e ? e(o, a, c) : !0
      );
    };
  };
  function HS(r, e, t) {
    if (typeof r != 'object') throw new TypeError('options must be an object');
    for (var n = Object.keys(r), i = n.length; i-- > 0; ) {
      var s = n[i],
        o = e[s];
      if (o) {
        var a = r[s],
          c = a === void 0 || o(a, s, r);
        if (c !== !0) throw new TypeError('option ' + s + ' must be ' + c);
        continue;
      }
      if (t !== !0) throw Error('Unknown option ' + s);
    }
  }
  Sd.exports = { isOlderVersion: vd, assertOptions: HS, validators: Ba };
});
var Id = E((uA, Cd) => {
  'use strict';
  var Od = Ue(),
    zS = Ki(),
    Rd = Eh(),
    xd = Ed(),
    cs = qa(),
    Td = wd(),
    tn = Td.validators;
  function ri(r) {
    (this.defaults = r),
      (this.interceptors = { request: new Rd(), response: new Rd() });
  }
  ri.prototype.request = function (e) {
    typeof e == 'string'
      ? ((e = arguments[1] || {}), (e.url = arguments[0]))
      : (e = e || {}),
      (e = cs(this.defaults, e)),
      e.method
        ? (e.method = e.method.toLowerCase())
        : this.defaults.method
        ? (e.method = this.defaults.method.toLowerCase())
        : (e.method = 'get');
    var t = e.transitional;
    t !== void 0 &&
      Td.assertOptions(
        t,
        {
          silentJSONParsing: tn.transitional(tn.boolean, '1.0.0'),
          forcedJSONParsing: tn.transitional(tn.boolean, '1.0.0'),
          clarifyTimeoutError: tn.transitional(tn.boolean, '1.0.0'),
        },
        !1
      );
    var n = [],
      i = !0;
    this.interceptors.request.forEach(function (h) {
      (typeof h.runWhen == 'function' && h.runWhen(e) === !1) ||
        ((i = i && h.synchronous), n.unshift(h.fulfilled, h.rejected));
    });
    var s = [];
    this.interceptors.response.forEach(function (h) {
      s.push(h.fulfilled, h.rejected);
    });
    var o;
    if (!i) {
      var a = [xd, void 0];
      for (
        Array.prototype.unshift.apply(a, n),
          a.concat(s),
          o = Promise.resolve(e);
        a.length;

      )
        o = o.then(a.shift(), a.shift());
      return o;
    }
    for (var c = e; n.length; ) {
      var l = n.shift(),
        u = n.shift();
      try {
        c = l(c);
      } catch (f) {
        u(f);
        break;
      }
    }
    try {
      o = xd(c);
    } catch (f) {
      return Promise.reject(f);
    }
    for (; s.length; ) o = o.then(s.shift(), s.shift());
    return o;
  };
  ri.prototype.getUri = function (e) {
    return (
      (e = cs(this.defaults, e)),
      zS(e.url, e.params, e.paramsSerializer).replace(/^\?/, '')
    );
  };
  Od.forEach(['delete', 'get', 'head', 'options'], function (e) {
    ri.prototype[e] = function (t, n) {
      return this.request(
        cs(n || {}, { method: e, url: t, data: (n || {}).data })
      );
    };
  });
  Od.forEach(['post', 'put', 'patch'], function (e) {
    ri.prototype[e] = function (t, n, i) {
      return this.request(cs(i || {}, { method: e, url: t, data: n }));
    };
  });
  Cd.exports = ri;
});
var Ga = E((lA, Nd) => {
  'use strict';
  function ja(r) {
    this.message = r;
  }
  ja.prototype.toString = function () {
    return 'Cancel' + (this.message ? ': ' + this.message : '');
  };
  ja.prototype.__CANCEL__ = !0;
  Nd.exports = ja;
});
var Dd = E((fA, Ad) => {
  'use strict';
  var VS = Ga();
  function us(r) {
    if (typeof r != 'function')
      throw new TypeError('executor must be a function.');
    var e;
    this.promise = new Promise(function (i) {
      e = i;
    });
    var t = this;
    r(function (i) {
      t.reason || ((t.reason = new VS(i)), e(t.reason));
    });
  }
  us.prototype.throwIfRequested = function () {
    if (this.reason) throw this.reason;
  };
  us.source = function () {
    var e,
      t = new us(function (i) {
        e = i;
      });
    return { token: t, cancel: e };
  };
  Ad.exports = us;
});
var Ld = E((hA, kd) => {
  'use strict';
  kd.exports = function (e) {
    return function (n) {
      return e.apply(null, n);
    };
  };
});
var Fd = E((dA, Pd) => {
  'use strict';
  Pd.exports = function (e) {
    return typeof e == 'object' && e.isAxiosError === !0;
  };
});
var qd = E((pA, $a) => {
  'use strict';
  var Ud = Ue(),
    WS = da(),
    ls = Id(),
    XS = qa(),
    KS = as();
  function Md(r) {
    var e = new ls(r),
      t = WS(ls.prototype.request, e);
    return Ud.extend(t, ls.prototype, e), Ud.extend(t, e), t;
  }
  var lt = Md(KS);
  lt.Axios = ls;
  lt.create = function (e) {
    return Md(XS(lt.defaults, e));
  };
  lt.Cancel = Ga();
  lt.CancelToken = Dd();
  lt.isCancel = Fa();
  lt.all = function (e) {
    return Promise.all(e);
  };
  lt.spread = Ld();
  lt.isAxiosError = Fd();
  $a.exports = lt;
  $a.exports.default = lt;
});
var Ha = E((mA, Bd) => {
  'use strict';
  Bd.exports = qd();
});
function Te(r, e = 1e4) {
  let t = (s) => s,
    n = process.env.NX_CLOUD_API || r.url || 'https://cloud.nx.app',
    i = At ? At : r.accessToken;
  if (!i)
    throw new Error(
      'Unable to authenticate. Either define accessToken in nx.json or set the NX_CLOUD_ACCESS_TOKEN env variable.'
    );
  if (r.customProxyConfigPath) {
    let { nxCloudProxyConfig: s } = require((0, Gd.join)(
      process.cwd(),
      r.customProxyConfigPath
    ));
    t = s ?? t;
  }
  return YS.create(
    t({
      baseURL: n,
      timeout: Et ? Xn : e,
      headers: {
        authorization: i,
        'Nx-Cloud-Client-Version': r.clientVersion || 'unknown',
      },
    })
  );
}
async function Va(r, e) {
  let t = new Date(),
    n = await e();
  return U && console.log(`${r}: ${new Date().getTime() - t.getTime()}`), n;
}
async function ce(r, e = zi) {
  try {
    return await r();
  } catch (t) {
    let n = (t.response && t.response.status) || t.code;
    (n === 401 || n === 403) && (e = 0);
    let i = t.response
      ? t.response.data.message
        ? t.response.data.message
        : t.response.data
      : t.message;
    if (e === 0)
      throw (
        (typeof i != 'string' && (i = t.message),
        new za(
          'failure',
          `Error when connecting to Nx Cloud. Code: ${n}. Error: ${i}`,
          t
        ))
      );
    if (n == 429) {
      if (!fs) {
        let s = 1e4 + (zi + 1 - e) * 6e4 * Math.random();
        jd.note({ title: `Received Code ${n}. ${i} Retrying in ${s}ms.` }),
          (fs = tt(s));
      }
      await fs, (fs = null);
    } else {
      let s = 1e3 + (zi + 1 - e) * 4e3 * Math.random();
      U && jd.note({ title: `Received Code ${n}. Retrying in ${s}ms.` }),
        await tt(s);
    }
    return ce(r, e - 1);
  }
}
var Gd,
  jd,
  YS,
  za,
  fs,
  gt = B(() => {
    'use strict';
    Gd = require('path');
    ie();
    Jn();
    ({ output: jd } = Y()),
      (YS = Ha()),
      (za = class {
        constructor(e, t, n) {
          this.type = e;
          this.message = t;
          this.axiosException = n;
        }
      });
    fs = null;
  });
function Xt(r) {
  JS()
    ? (process.stdout.write(`   ${Wa(r)}`), _t.addNewline(), _t.addNewline())
    : ZS()
    ? (_t.addNewline(),
      process.stdout.write(`${Wa(r)}`),
      _t.addNewline(),
      _t.addNewline())
    : (process.stdout.write(`  ${Wa(r)}`), _t.addNewline(), _t.addNewline());
}
function JS() {
  try {
    return (
      ne(
        'nx/src/tasks-runner/life-cycles/dynamic-run-many-terminal-output-life-cycle'
      ),
      !0
    );
  } catch {
    try {
      return (
        ne(
          '@nrwl/workspace/src/tasks-runner/life-cycles/dynamic-run-many-terminal-output-life-cycle'
        ),
        !0
      );
    } catch {
      return !1;
    }
  }
}
function Wa(r) {
  let e;
  if (typeof _t.dim == 'function') return _t.dim(r);
  try {
    return _t.colors.gray(r);
  } catch {
    return r;
  }
}
function ZS() {
  return (
    process.argv.indexOf('run-many') === -1 &&
    process.argv.indexOf('affected') === -1
  );
}
var _t,
  ni = B(() => {
    'use strict';
    Sr();
    ({ output: _t } = Y());
  });
var Xa,
  $d,
  Ce,
  re,
  Ie,
  QS,
  ew,
  rn,
  Dt = B(() => {
    'use strict';
    Xa = require('perf_hooks');
    gt();
    ie();
    ni();
    ($d = []),
      (Ce = (r) => {
        let e = Xa.performance.now();
        return {
          recordMetric: (n) => {
            let i = Xa.performance.now();
            (n.durationMs = i - e), (n.entryType = r), $d.push(n);
          },
        };
      }),
      (re = (r) => {
        var e;
        return {
          success:
            ((e = r == null ? void 0 : r.status) == null
              ? void 0
              : e.toString().startsWith('2')) ?? !1,
          statusCode: (r == null ? void 0 : r.status) ?? -1,
        };
      }),
      (Ie = { success: !1, statusCode: -1 }),
      (QS = 0.1),
      (ew = 0.01),
      (rn = (r) => {
        let e;
        me() ? (e = QS) : (e = ew);
        try {
          return oh || Math.random() < e
            ? (U && Xt('Submitting runner metrics for this run.'),
              Te(r)
                .post('/nx-cloud/save-metrics', { entries: $d })
                .catch((n) => {}))
            : Promise.resolve();
        } catch {}
      });
  });
function hs(r) {
  return r[r.length - 1] === '/' ? r.substr(0, r.length - 1) : r;
}
var Ka = B(() => {
  'use strict';
});
var tw,
  Kt,
  ds = B(() => {
    'use strict';
    gt();
    ({ output: tw } = Y()),
      (Kt = class {
        constructor(e) {
          this.apiAxiosInstance = Te(e);
        }
        async reportError(e) {
          try {
            await ce(() =>
              this.apiAxiosInstance.post('/nx-cloud/report-client-error', {
                message: e,
              })
            );
          } catch (t) {
            tw.warn({
              title: `Unable to record the following error: '${e}'`,
              bodyLines: [t.message],
            });
          }
        }
      });
  });
var sn,
  nn,
  Yt,
  ps = B(() => {
    'use strict';
    (sn = require('crypto')),
      (nn = require('fs')),
      (Yt = class {
        constructor(e) {
          e && (this.encryptionKey = this.to32bytes(e));
        }
        to32bytes(e) {
          let t = e;
          for (; t.length < 32; ) t += e;
          return Buffer.from(t).slice(0, 32);
        }
        hasEncryption() {
          return !!this.encryptionKey;
        }
        encryptFile(e) {
          let t = (0, sn.randomBytes)(16),
            n = (0, sn.createCipheriv)('aes-256-cbc', this.encryptionKey, t),
            i = (0, nn.readFileSync)(e),
            s = n.update(i),
            o = Buffer.concat([t, s, n.final()]);
          (0, nn.writeFileSync)(e, o);
        }
        decryptFile(e) {
          let t = (0, nn.readFileSync)(e);
          try {
            let n = (0, sn.createDecipheriv)(
                'aes-256-cbc',
                this.encryptionKey,
                t.slice(0, 16)
              ),
              i = t.slice(16),
              s = n.update(i),
              o = Buffer.concat([s, n.final()]);
            (0, nn.writeFileSync)(e, o);
          } catch {
            throw new Error(
              'Could not decrypt the artifact. Please check your encryption key.'
            );
          }
        }
      });
  });
var on = E((IA, zd) => {
  'use strict';
  var Hd = new Map([
    ['C', 'cwd'],
    ['f', 'file'],
    ['z', 'gzip'],
    ['P', 'preservePaths'],
    ['U', 'unlink'],
    ['strip-components', 'strip'],
    ['stripComponents', 'strip'],
    ['keep-newer', 'newer'],
    ['keepNewer', 'newer'],
    ['keep-newer-files', 'newer'],
    ['keepNewerFiles', 'newer'],
    ['k', 'keep'],
    ['keep-existing', 'keep'],
    ['keepExisting', 'keep'],
    ['m', 'noMtime'],
    ['no-mtime', 'noMtime'],
    ['p', 'preserveOwner'],
    ['L', 'follow'],
    ['h', 'follow'],
  ]);
  zd.exports = (r) =>
    r
      ? Object.keys(r)
          .map((e) => [Hd.has(e) ? Hd.get(e) : e, r[e]])
          .reduce((e, t) => ((e[t[0]] = t[1]), e), Object.create(null))
      : {};
});
var cn = E((NA, ep) => {
  'use strict';
  var Vd =
      typeof process == 'object' && process
        ? process
        : { stdout: null, stderr: null },
    rw = require('events'),
    Wd = require('stream'),
    Xd = require('string_decoder').StringDecoder,
    kt = Symbol('EOF'),
    Lt = Symbol('maybeEmitEnd'),
    Jt = Symbol('emittedEnd'),
    ms = Symbol('emittingEnd'),
    ii = Symbol('emittedError'),
    ys = Symbol('closed'),
    Kd = Symbol('read'),
    Es = Symbol('flush'),
    Yd = Symbol('flushChunk'),
    $e = Symbol('encoding'),
    Pt = Symbol('decoder'),
    gs = Symbol('flowing'),
    si = Symbol('paused'),
    an = Symbol('resume'),
    Ee = Symbol('bufferLength'),
    Ya = Symbol('bufferPush'),
    Ja = Symbol('bufferShift'),
    Ne = Symbol('objectMode'),
    Ae = Symbol('destroyed'),
    Za = Symbol('emitData'),
    Jd = Symbol('emitEnd'),
    Qa = Symbol('emitEnd2'),
    Ft = Symbol('async'),
    oi = (r) => Promise.resolve().then(r),
    Zd = global._MP_NO_ITERATOR_SYMBOLS_ !== '1',
    nw =
      (Zd && Symbol.asyncIterator) || Symbol('asyncIterator not implemented'),
    iw = (Zd && Symbol.iterator) || Symbol('iterator not implemented'),
    sw = (r) => r === 'end' || r === 'finish' || r === 'prefinish',
    ow = (r) =>
      r instanceof ArrayBuffer ||
      (typeof r == 'object' &&
        r.constructor &&
        r.constructor.name === 'ArrayBuffer' &&
        r.byteLength >= 0),
    aw = (r) => !Buffer.isBuffer(r) && ArrayBuffer.isView(r),
    _s = class {
      constructor(e, t, n) {
        (this.src = e),
          (this.dest = t),
          (this.opts = n),
          (this.ondrain = () => e[an]()),
          t.on('drain', this.ondrain);
      }
      unpipe() {
        this.dest.removeListener('drain', this.ondrain);
      }
      proxyErrors() {}
      end() {
        this.unpipe(), this.opts.end && this.dest.end();
      }
    },
    ec = class extends _s {
      unpipe() {
        this.src.removeListener('error', this.proxyErrors), super.unpipe();
      }
      constructor(e, t, n) {
        super(e, t, n),
          (this.proxyErrors = (i) => t.emit('error', i)),
          e.on('error', this.proxyErrors);
      }
    };
  ep.exports = class Qd extends Wd {
    constructor(e) {
      super(),
        (this[gs] = !1),
        (this[si] = !1),
        (this.pipes = []),
        (this.buffer = []),
        (this[Ne] = (e && e.objectMode) || !1),
        this[Ne] ? (this[$e] = null) : (this[$e] = (e && e.encoding) || null),
        this[$e] === 'buffer' && (this[$e] = null),
        (this[Ft] = (e && !!e.async) || !1),
        (this[Pt] = this[$e] ? new Xd(this[$e]) : null),
        (this[kt] = !1),
        (this[Jt] = !1),
        (this[ms] = !1),
        (this[ys] = !1),
        (this[ii] = null),
        (this.writable = !0),
        (this.readable = !0),
        (this[Ee] = 0),
        (this[Ae] = !1);
    }
    get bufferLength() {
      return this[Ee];
    }
    get encoding() {
      return this[$e];
    }
    set encoding(e) {
      if (this[Ne]) throw new Error('cannot set encoding in objectMode');
      if (
        this[$e] &&
        e !== this[$e] &&
        ((this[Pt] && this[Pt].lastNeed) || this[Ee])
      )
        throw new Error('cannot change encoding');
      this[$e] !== e &&
        ((this[Pt] = e ? new Xd(e) : null),
        this.buffer.length &&
          (this.buffer = this.buffer.map((t) => this[Pt].write(t)))),
        (this[$e] = e);
    }
    setEncoding(e) {
      this.encoding = e;
    }
    get objectMode() {
      return this[Ne];
    }
    set objectMode(e) {
      this[Ne] = this[Ne] || !!e;
    }
    get async() {
      return this[Ft];
    }
    set async(e) {
      this[Ft] = this[Ft] || !!e;
    }
    write(e, t, n) {
      if (this[kt]) throw new Error('write after end');
      if (this[Ae])
        return (
          this.emit(
            'error',
            Object.assign(
              new Error('Cannot call write after a stream was destroyed'),
              { code: 'ERR_STREAM_DESTROYED' }
            )
          ),
          !0
        );
      typeof t == 'function' && ((n = t), (t = 'utf8')), t || (t = 'utf8');
      let i = this[Ft] ? oi : (s) => s();
      return (
        !this[Ne] &&
          !Buffer.isBuffer(e) &&
          (aw(e)
            ? (e = Buffer.from(e.buffer, e.byteOffset, e.byteLength))
            : ow(e)
            ? (e = Buffer.from(e))
            : typeof e != 'string' && (this.objectMode = !0)),
        this[Ne]
          ? (this.flowing && this[Ee] !== 0 && this[Es](!0),
            this.flowing ? this.emit('data', e) : this[Ya](e),
            this[Ee] !== 0 && this.emit('readable'),
            n && i(n),
            this.flowing)
          : e.length
          ? (typeof e == 'string' &&
              !(t === this[$e] && !this[Pt].lastNeed) &&
              (e = Buffer.from(e, t)),
            Buffer.isBuffer(e) && this[$e] && (e = this[Pt].write(e)),
            this.flowing && this[Ee] !== 0 && this[Es](!0),
            this.flowing ? this.emit('data', e) : this[Ya](e),
            this[Ee] !== 0 && this.emit('readable'),
            n && i(n),
            this.flowing)
          : (this[Ee] !== 0 && this.emit('readable'), n && i(n), this.flowing)
      );
    }
    read(e) {
      if (this[Ae]) return null;
      if (this[Ee] === 0 || e === 0 || e > this[Ee]) return this[Lt](), null;
      this[Ne] && (e = null),
        this.buffer.length > 1 &&
          !this[Ne] &&
          (this.encoding
            ? (this.buffer = [this.buffer.join('')])
            : (this.buffer = [Buffer.concat(this.buffer, this[Ee])]));
      let t = this[Kd](e || null, this.buffer[0]);
      return this[Lt](), t;
    }
    [Kd](e, t) {
      return (
        e === t.length || e === null
          ? this[Ja]()
          : ((this.buffer[0] = t.slice(e)),
            (t = t.slice(0, e)),
            (this[Ee] -= e)),
        this.emit('data', t),
        !this.buffer.length && !this[kt] && this.emit('drain'),
        t
      );
    }
    end(e, t, n) {
      return (
        typeof e == 'function' && ((n = e), (e = null)),
        typeof t == 'function' && ((n = t), (t = 'utf8')),
        e && this.write(e, t),
        n && this.once('end', n),
        (this[kt] = !0),
        (this.writable = !1),
        (this.flowing || !this[si]) && this[Lt](),
        this
      );
    }
    [an]() {
      this[Ae] ||
        ((this[si] = !1),
        (this[gs] = !0),
        this.emit('resume'),
        this.buffer.length
          ? this[Es]()
          : this[kt]
          ? this[Lt]()
          : this.emit('drain'));
    }
    resume() {
      return this[an]();
    }
    pause() {
      (this[gs] = !1), (this[si] = !0);
    }
    get destroyed() {
      return this[Ae];
    }
    get flowing() {
      return this[gs];
    }
    get paused() {
      return this[si];
    }
    [Ya](e) {
      this[Ne] ? (this[Ee] += 1) : (this[Ee] += e.length), this.buffer.push(e);
    }
    [Ja]() {
      return (
        this.buffer.length &&
          (this[Ne] ? (this[Ee] -= 1) : (this[Ee] -= this.buffer[0].length)),
        this.buffer.shift()
      );
    }
    [Es](e) {
      do;
      while (this[Yd](this[Ja]()));
      !e && !this.buffer.length && !this[kt] && this.emit('drain');
    }
    [Yd](e) {
      return e ? (this.emit('data', e), this.flowing) : !1;
    }
    pipe(e, t) {
      if (this[Ae]) return;
      let n = this[Jt];
      return (
        (t = t || {}),
        e === Vd.stdout || e === Vd.stderr
          ? (t.end = !1)
          : (t.end = t.end !== !1),
        (t.proxyErrors = !!t.proxyErrors),
        n
          ? t.end && e.end()
          : (this.pipes.push(
              t.proxyErrors ? new ec(this, e, t) : new _s(this, e, t)
            ),
            this[Ft] ? oi(() => this[an]()) : this[an]()),
        e
      );
    }
    unpipe(e) {
      let t = this.pipes.find((n) => n.dest === e);
      t && (this.pipes.splice(this.pipes.indexOf(t), 1), t.unpipe());
    }
    addListener(e, t) {
      return this.on(e, t);
    }
    on(e, t) {
      let n = super.on(e, t);
      return (
        e === 'data' && !this.pipes.length && !this.flowing
          ? this[an]()
          : e === 'readable' && this[Ee] !== 0
          ? super.emit('readable')
          : sw(e) && this[Jt]
          ? (super.emit(e), this.removeAllListeners(e))
          : e === 'error' &&
            this[ii] &&
            (this[Ft]
              ? oi(() => t.call(this, this[ii]))
              : t.call(this, this[ii])),
        n
      );
    }
    get emittedEnd() {
      return this[Jt];
    }
    [Lt]() {
      !this[ms] &&
        !this[Jt] &&
        !this[Ae] &&
        this.buffer.length === 0 &&
        this[kt] &&
        ((this[ms] = !0),
        this.emit('end'),
        this.emit('prefinish'),
        this.emit('finish'),
        this[ys] && this.emit('close'),
        (this[ms] = !1));
    }
    emit(e, t, ...n) {
      if (e !== 'error' && e !== 'close' && e !== Ae && this[Ae]) return;
      if (e === 'data')
        return t ? (this[Ft] ? oi(() => this[Za](t)) : this[Za](t)) : !1;
      if (e === 'end') return this[Jd]();
      if (e === 'close') {
        if (((this[ys] = !0), !this[Jt] && !this[Ae])) return;
        let s = super.emit('close');
        return this.removeAllListeners('close'), s;
      } else if (e === 'error') {
        this[ii] = t;
        let s = super.emit('error', t);
        return this[Lt](), s;
      } else if (e === 'resume') {
        let s = super.emit('resume');
        return this[Lt](), s;
      } else if (e === 'finish' || e === 'prefinish') {
        let s = super.emit(e);
        return this.removeAllListeners(e), s;
      }
      let i = super.emit(e, t, ...n);
      return this[Lt](), i;
    }
    [Za](e) {
      for (let n of this.pipes) n.dest.write(e) === !1 && this.pause();
      let t = super.emit('data', e);
      return this[Lt](), t;
    }
    [Jd]() {
      this[Jt] ||
        ((this[Jt] = !0),
        (this.readable = !1),
        this[Ft] ? oi(() => this[Qa]()) : this[Qa]());
    }
    [Qa]() {
      if (this[Pt]) {
        let t = this[Pt].end();
        if (t) {
          for (let n of this.pipes) n.dest.write(t);
          super.emit('data', t);
        }
      }
      for (let t of this.pipes) t.end();
      let e = super.emit('end');
      return this.removeAllListeners('end'), e;
    }
    collect() {
      let e = [];
      this[Ne] || (e.dataLength = 0);
      let t = this.promise();
      return (
        this.on('data', (n) => {
          e.push(n), this[Ne] || (e.dataLength += n.length);
        }),
        t.then(() => e)
      );
    }
    concat() {
      return this[Ne]
        ? Promise.reject(new Error('cannot concat in objectMode'))
        : this.collect().then((e) =>
            this[Ne]
              ? Promise.reject(new Error('cannot concat in objectMode'))
              : this[$e]
              ? e.join('')
              : Buffer.concat(e, e.dataLength)
          );
    }
    promise() {
      return new Promise((e, t) => {
        this.on(Ae, () => t(new Error('stream destroyed'))),
          this.on('error', (n) => t(n)),
          this.on('end', () => e());
      });
    }
    [nw]() {
      return {
        next: () => {
          let t = this.read();
          if (t !== null) return Promise.resolve({ done: !1, value: t });
          if (this[kt]) return Promise.resolve({ done: !0 });
          let n = null,
            i = null,
            s = (l) => {
              this.removeListener('data', o),
                this.removeListener('end', a),
                i(l);
            },
            o = (l) => {
              this.removeListener('error', s),
                this.removeListener('end', a),
                this.pause(),
                n({ value: l, done: !!this[kt] });
            },
            a = () => {
              this.removeListener('error', s),
                this.removeListener('data', o),
                n({ done: !0 });
            },
            c = () => s(new Error('stream destroyed'));
          return new Promise((l, u) => {
            (i = u),
              (n = l),
              this.once(Ae, c),
              this.once('error', s),
              this.once('end', a),
              this.once('data', o);
          });
        },
      };
    }
    [iw]() {
      return {
        next: () => {
          let t = this.read();
          return { value: t, done: t === null };
        },
      };
    }
    destroy(e) {
      return this[Ae]
        ? (e ? this.emit('error', e) : this.emit(Ae), this)
        : ((this[Ae] = !0),
          (this.buffer.length = 0),
          (this[Ee] = 0),
          typeof this.close == 'function' && !this[ys] && this.close(),
          e ? this.emit('error', e) : this.emit(Ae),
          this);
    }
    static isStream(e) {
      return (
        !!e &&
        (e instanceof Qd ||
          e instanceof Wd ||
          (e instanceof rw &&
            (typeof e.pipe == 'function' ||
              (typeof e.write == 'function' && typeof e.end == 'function'))))
      );
    }
  };
});
var rp = E((AA, tp) => {
  'use strict';
  var cw = require('zlib').constants || { ZLIB_VERNUM: 4736 };
  tp.exports = Object.freeze(
    Object.assign(
      Object.create(null),
      {
        Z_NO_FLUSH: 0,
        Z_PARTIAL_FLUSH: 1,
        Z_SYNC_FLUSH: 2,
        Z_FULL_FLUSH: 3,
        Z_FINISH: 4,
        Z_BLOCK: 5,
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        Z_ERRNO: -1,
        Z_STREAM_ERROR: -2,
        Z_DATA_ERROR: -3,
        Z_MEM_ERROR: -4,
        Z_BUF_ERROR: -5,
        Z_VERSION_ERROR: -6,
        Z_NO_COMPRESSION: 0,
        Z_BEST_SPEED: 1,
        Z_BEST_COMPRESSION: 9,
        Z_DEFAULT_COMPRESSION: -1,
        Z_FILTERED: 1,
        Z_HUFFMAN_ONLY: 2,
        Z_RLE: 3,
        Z_FIXED: 4,
        Z_DEFAULT_STRATEGY: 0,
        DEFLATE: 1,
        INFLATE: 2,
        GZIP: 3,
        GUNZIP: 4,
        DEFLATERAW: 5,
        INFLATERAW: 6,
        UNZIP: 7,
        BROTLI_DECODE: 8,
        BROTLI_ENCODE: 9,
        Z_MIN_WINDOWBITS: 8,
        Z_MAX_WINDOWBITS: 15,
        Z_DEFAULT_WINDOWBITS: 15,
        Z_MIN_CHUNK: 64,
        Z_MAX_CHUNK: 1 / 0,
        Z_DEFAULT_CHUNK: 16384,
        Z_MIN_MEMLEVEL: 1,
        Z_MAX_MEMLEVEL: 9,
        Z_DEFAULT_MEMLEVEL: 8,
        Z_MIN_LEVEL: -1,
        Z_MAX_LEVEL: 9,
        Z_DEFAULT_LEVEL: -1,
        BROTLI_OPERATION_PROCESS: 0,
        BROTLI_OPERATION_FLUSH: 1,
        BROTLI_OPERATION_FINISH: 2,
        BROTLI_OPERATION_EMIT_METADATA: 3,
        BROTLI_MODE_GENERIC: 0,
        BROTLI_MODE_TEXT: 1,
        BROTLI_MODE_FONT: 2,
        BROTLI_DEFAULT_MODE: 0,
        BROTLI_MIN_QUALITY: 0,
        BROTLI_MAX_QUALITY: 11,
        BROTLI_DEFAULT_QUALITY: 11,
        BROTLI_MIN_WINDOW_BITS: 10,
        BROTLI_MAX_WINDOW_BITS: 24,
        BROTLI_LARGE_MAX_WINDOW_BITS: 30,
        BROTLI_DEFAULT_WINDOW: 22,
        BROTLI_MIN_INPUT_BLOCK_BITS: 16,
        BROTLI_MAX_INPUT_BLOCK_BITS: 24,
        BROTLI_PARAM_MODE: 0,
        BROTLI_PARAM_QUALITY: 1,
        BROTLI_PARAM_LGWIN: 2,
        BROTLI_PARAM_LGBLOCK: 3,
        BROTLI_PARAM_DISABLE_LITERAL_CONTEXT_MODELING: 4,
        BROTLI_PARAM_SIZE_HINT: 5,
        BROTLI_PARAM_LARGE_WINDOW: 6,
        BROTLI_PARAM_NPOSTFIX: 7,
        BROTLI_PARAM_NDIRECT: 8,
        BROTLI_DECODER_RESULT_ERROR: 0,
        BROTLI_DECODER_RESULT_SUCCESS: 1,
        BROTLI_DECODER_RESULT_NEEDS_MORE_INPUT: 2,
        BROTLI_DECODER_RESULT_NEEDS_MORE_OUTPUT: 3,
        BROTLI_DECODER_PARAM_DISABLE_RING_BUFFER_REALLOCATION: 0,
        BROTLI_DECODER_PARAM_LARGE_WINDOW: 1,
        BROTLI_DECODER_NO_ERROR: 0,
        BROTLI_DECODER_SUCCESS: 1,
        BROTLI_DECODER_NEEDS_MORE_INPUT: 2,
        BROTLI_DECODER_NEEDS_MORE_OUTPUT: 3,
        BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_NIBBLE: -1,
        BROTLI_DECODER_ERROR_FORMAT_RESERVED: -2,
        BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_META_NIBBLE: -3,
        BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_ALPHABET: -4,
        BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_SAME: -5,
        BROTLI_DECODER_ERROR_FORMAT_CL_SPACE: -6,
        BROTLI_DECODER_ERROR_FORMAT_HUFFMAN_SPACE: -7,
        BROTLI_DECODER_ERROR_FORMAT_CONTEXT_MAP_REPEAT: -8,
        BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_1: -9,
        BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_2: -10,
        BROTLI_DECODER_ERROR_FORMAT_TRANSFORM: -11,
        BROTLI_DECODER_ERROR_FORMAT_DICTIONARY: -12,
        BROTLI_DECODER_ERROR_FORMAT_WINDOW_BITS: -13,
        BROTLI_DECODER_ERROR_FORMAT_PADDING_1: -14,
        BROTLI_DECODER_ERROR_FORMAT_PADDING_2: -15,
        BROTLI_DECODER_ERROR_FORMAT_DISTANCE: -16,
        BROTLI_DECODER_ERROR_DICTIONARY_NOT_SET: -19,
        BROTLI_DECODER_ERROR_INVALID_ARGUMENTS: -20,
        BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MODES: -21,
        BROTLI_DECODER_ERROR_ALLOC_TREE_GROUPS: -22,
        BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MAP: -25,
        BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_1: -26,
        BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_2: -27,
        BROTLI_DECODER_ERROR_ALLOC_BLOCK_TYPE_TREES: -30,
        BROTLI_DECODER_ERROR_UNREACHABLE: -31,
      },
      cw
    )
  );
});
var yc = E((Ke) => {
  'use strict';
  var sc = require('assert'),
    Zt = require('buffer').Buffer,
    sp = require('zlib'),
    Ir = (Ke.constants = rp()),
    uw = cn(),
    np = Zt.concat,
    Nr = Symbol('_superWrite'),
    ln = class extends Error {
      constructor(e) {
        super('zlib: ' + e.message),
          (this.code = e.code),
          (this.errno = e.errno),
          this.code || (this.code = 'ZLIB_ERROR'),
          (this.message = 'zlib: ' + e.message),
          Error.captureStackTrace(this, this.constructor);
      }
      get name() {
        return 'ZlibError';
      }
    },
    lw = Symbol('opts'),
    ai = Symbol('flushFlag'),
    ip = Symbol('finishFlushFlag'),
    mc = Symbol('fullFlushFlag'),
    se = Symbol('handle'),
    bs = Symbol('onError'),
    un = Symbol('sawError'),
    tc = Symbol('level'),
    rc = Symbol('strategy'),
    nc = Symbol('ended'),
    DA = Symbol('_defaultFullFlush'),
    vs = class extends uw {
      constructor(e, t) {
        if (!e || typeof e != 'object')
          throw new TypeError('invalid options for ZlibBase constructor');
        super(e),
          (this[un] = !1),
          (this[nc] = !1),
          (this[lw] = e),
          (this[ai] = e.flush),
          (this[ip] = e.finishFlush);
        try {
          this[se] = new sp[t](e);
        } catch (n) {
          throw new ln(n);
        }
        (this[bs] = (n) => {
          this[un] || ((this[un] = !0), this.close(), this.emit('error', n));
        }),
          this[se].on('error', (n) => this[bs](new ln(n))),
          this.once('end', () => this.close);
      }
      close() {
        this[se] && (this[se].close(), (this[se] = null), this.emit('close'));
      }
      reset() {
        if (!this[un])
          return sc(this[se], 'zlib binding closed'), this[se].reset();
      }
      flush(e) {
        this.ended ||
          (typeof e != 'number' && (e = this[mc]),
          this.write(Object.assign(Zt.alloc(0), { [ai]: e })));
      }
      end(e, t, n) {
        return (
          e && this.write(e, t),
          this.flush(this[ip]),
          (this[nc] = !0),
          super.end(null, null, n)
        );
      }
      get ended() {
        return this[nc];
      }
      write(e, t, n) {
        if (
          (typeof t == 'function' && ((n = t), (t = 'utf8')),
          typeof e == 'string' && (e = Zt.from(e, t)),
          this[un])
        )
          return;
        sc(this[se], 'zlib binding closed');
        let i = this[se]._handle,
          s = i.close;
        i.close = () => {};
        let o = this[se].close;
        (this[se].close = () => {}), (Zt.concat = (l) => l);
        let a;
        try {
          let l = typeof e[ai] == 'number' ? e[ai] : this[ai];
          (a = this[se]._processChunk(e, l)), (Zt.concat = np);
        } catch (l) {
          (Zt.concat = np), this[bs](new ln(l));
        } finally {
          this[se] &&
            ((this[se]._handle = i),
            (i.close = s),
            (this[se].close = o),
            this[se].removeAllListeners('error'));
        }
        this[se] && this[se].on('error', (l) => this[bs](new ln(l)));
        let c;
        if (a)
          if (Array.isArray(a) && a.length > 0) {
            c = this[Nr](Zt.from(a[0]));
            for (let l = 1; l < a.length; l++) c = this[Nr](a[l]);
          } else c = this[Nr](Zt.from(a));
        return n && n(), c;
      }
      [Nr](e) {
        return super.write(e);
      }
    },
    Ut = class extends vs {
      constructor(e, t) {
        (e = e || {}),
          (e.flush = e.flush || Ir.Z_NO_FLUSH),
          (e.finishFlush = e.finishFlush || Ir.Z_FINISH),
          super(e, t),
          (this[mc] = Ir.Z_FULL_FLUSH),
          (this[tc] = e.level),
          (this[rc] = e.strategy);
      }
      params(e, t) {
        if (!this[un]) {
          if (!this[se])
            throw new Error('cannot switch params when binding is closed');
          if (!this[se].params)
            throw new Error('not supported in this implementation');
          if (this[tc] !== e || this[rc] !== t) {
            this.flush(Ir.Z_SYNC_FLUSH), sc(this[se], 'zlib binding closed');
            let n = this[se].flush;
            this[se].flush = (i, s) => {
              this.flush(i), s();
            };
            try {
              this[se].params(e, t);
            } finally {
              this[se].flush = n;
            }
            this[se] && ((this[tc] = e), (this[rc] = t));
          }
        }
      }
    },
    oc = class extends Ut {
      constructor(e) {
        super(e, 'Deflate');
      }
    },
    ac = class extends Ut {
      constructor(e) {
        super(e, 'Inflate');
      }
    },
    ic = Symbol('_portable'),
    cc = class extends Ut {
      constructor(e) {
        super(e, 'Gzip'), (this[ic] = e && !!e.portable);
      }
      [Nr](e) {
        return this[ic]
          ? ((this[ic] = !1), (e[9] = 255), super[Nr](e))
          : super[Nr](e);
      }
    },
    uc = class extends Ut {
      constructor(e) {
        super(e, 'Gunzip');
      }
    },
    lc = class extends Ut {
      constructor(e) {
        super(e, 'DeflateRaw');
      }
    },
    fc = class extends Ut {
      constructor(e) {
        super(e, 'InflateRaw');
      }
    },
    hc = class extends Ut {
      constructor(e) {
        super(e, 'Unzip');
      }
    },
    Ss = class extends vs {
      constructor(e, t) {
        (e = e || {}),
          (e.flush = e.flush || Ir.BROTLI_OPERATION_PROCESS),
          (e.finishFlush = e.finishFlush || Ir.BROTLI_OPERATION_FINISH),
          super(e, t),
          (this[mc] = Ir.BROTLI_OPERATION_FLUSH);
      }
    },
    dc = class extends Ss {
      constructor(e) {
        super(e, 'BrotliCompress');
      }
    },
    pc = class extends Ss {
      constructor(e) {
        super(e, 'BrotliDecompress');
      }
    };
  Ke.Deflate = oc;
  Ke.Inflate = ac;
  Ke.Gzip = cc;
  Ke.Gunzip = uc;
  Ke.DeflateRaw = lc;
  Ke.InflateRaw = fc;
  Ke.Unzip = hc;
  typeof sp.BrotliCompress == 'function'
    ? ((Ke.BrotliCompress = dc), (Ke.BrotliDecompress = pc))
    : (Ke.BrotliCompress = Ke.BrotliDecompress =
        class {
          constructor() {
            throw new Error(
              'Brotli is not supported in this version of Node.js'
            );
          }
        });
});
var fn = E((PA, op) => {
  'use strict';
  var fw = process.env.TESTING_TAR_FAKE_PLATFORM || process.platform;
  op.exports = fw !== 'win32' ? (r) => r : (r) => r && r.replace(/\\/g, '/');
});
var ws = E((UA, ap) => {
  'use strict';
  var hw = cn(),
    Ec = fn(),
    gc = Symbol('slurp');
  ap.exports = class extends hw {
    constructor(e, t, n) {
      switch (
        (super(),
        this.pause(),
        (this.extended = t),
        (this.globalExtended = n),
        (this.header = e),
        (this.startBlockSize = 512 * Math.ceil(e.size / 512)),
        (this.blockRemain = this.startBlockSize),
        (this.remain = e.size),
        (this.type = e.type),
        (this.meta = !1),
        (this.ignore = !1),
        this.type)
      ) {
        case 'File':
        case 'OldFile':
        case 'Link':
        case 'SymbolicLink':
        case 'CharacterDevice':
        case 'BlockDevice':
        case 'Directory':
        case 'FIFO':
        case 'ContiguousFile':
        case 'GNUDumpDir':
          break;
        case 'NextFileHasLongLinkpath':
        case 'NextFileHasLongPath':
        case 'OldGnuLongPath':
        case 'GlobalExtendedHeader':
        case 'ExtendedHeader':
        case 'OldExtendedHeader':
          this.meta = !0;
          break;
        default:
          this.ignore = !0;
      }
      (this.path = Ec(e.path)),
        (this.mode = e.mode),
        this.mode && (this.mode = this.mode & 4095),
        (this.uid = e.uid),
        (this.gid = e.gid),
        (this.uname = e.uname),
        (this.gname = e.gname),
        (this.size = e.size),
        (this.mtime = e.mtime),
        (this.atime = e.atime),
        (this.ctime = e.ctime),
        (this.linkpath = Ec(e.linkpath)),
        (this.uname = e.uname),
        (this.gname = e.gname),
        t && this[gc](t),
        n && this[gc](n, !0);
    }
    write(e) {
      let t = e.length;
      if (t > this.blockRemain)
        throw new Error('writing more to entry than is appropriate');
      let n = this.remain,
        i = this.blockRemain;
      return (
        (this.remain = Math.max(0, n - t)),
        (this.blockRemain = Math.max(0, i - t)),
        this.ignore ? !0 : n >= t ? super.write(e) : super.write(e.slice(0, n))
      );
    }
    [gc](e, t) {
      for (let n in e)
        e[n] !== null &&
          e[n] !== void 0 &&
          !(t && n === 'path') &&
          (this[n] = n === 'path' || n === 'linkpath' ? Ec(e[n]) : e[n]);
    }
  };
});
var _c = E((Rs) => {
  'use strict';
  Rs.name = new Map([
    ['0', 'File'],
    ['', 'OldFile'],
    ['1', 'Link'],
    ['2', 'SymbolicLink'],
    ['3', 'CharacterDevice'],
    ['4', 'BlockDevice'],
    ['5', 'Directory'],
    ['6', 'FIFO'],
    ['7', 'ContiguousFile'],
    ['g', 'GlobalExtendedHeader'],
    ['x', 'ExtendedHeader'],
    ['A', 'SolarisACL'],
    ['D', 'GNUDumpDir'],
    ['I', 'Inode'],
    ['K', 'NextFileHasLongLinkpath'],
    ['L', 'NextFileHasLongPath'],
    ['M', 'ContinuationFile'],
    ['N', 'OldGnuLongPath'],
    ['S', 'SparseFile'],
    ['V', 'TapeVolumeHeader'],
    ['X', 'OldExtendedHeader'],
  ]);
  Rs.code = new Map(Array.from(Rs.name).map((r) => [r[1], r[0]]));
});
var fp = E((qA, lp) => {
  'use strict';
  var dw = (r, e) => {
      if (Number.isSafeInteger(r)) r < 0 ? mw(r, e) : pw(r, e);
      else
        throw Error(
          'cannot encode number outside of javascript safe integer range'
        );
      return e;
    },
    pw = (r, e) => {
      e[0] = 128;
      for (var t = e.length; t > 1; t--)
        (e[t - 1] = r & 255), (r = Math.floor(r / 256));
    },
    mw = (r, e) => {
      e[0] = 255;
      var t = !1;
      r = r * -1;
      for (var n = e.length; n > 1; n--) {
        var i = r & 255;
        (r = Math.floor(r / 256)),
          t
            ? (e[n - 1] = cp(i))
            : i === 0
            ? (e[n - 1] = 0)
            : ((t = !0), (e[n - 1] = up(i)));
      }
    },
    yw = (r) => {
      let e = r[0],
        t = e === 128 ? gw(r.slice(1, r.length)) : e === 255 ? Ew(r) : null;
      if (t === null) throw Error('invalid base256 encoding');
      if (!Number.isSafeInteger(t))
        throw Error('parsed number outside of javascript safe integer range');
      return t;
    },
    Ew = (r) => {
      for (var e = r.length, t = 0, n = !1, i = e - 1; i > -1; i--) {
        var s = r[i],
          o;
        n ? (o = cp(s)) : s === 0 ? (o = s) : ((n = !0), (o = up(s))),
          o !== 0 && (t -= o * Math.pow(256, e - i - 1));
      }
      return t;
    },
    gw = (r) => {
      for (var e = r.length, t = 0, n = e - 1; n > -1; n--) {
        var i = r[n];
        i !== 0 && (t += i * Math.pow(256, e - n - 1));
      }
      return t;
    },
    cp = (r) => (255 ^ r) & 255,
    up = (r) => ((255 ^ r) + 1) & 255;
  lp.exports = { encode: dw, parse: yw };
});
var dn = E((BA, dp) => {
  'use strict';
  var bc = _c(),
    hn = require('path').posix,
    hp = fp(),
    vc = Symbol('slurp'),
    Ye = Symbol('type'),
    Rc = class {
      constructor(e, t, n, i) {
        (this.cksumValid = !1),
          (this.needPax = !1),
          (this.nullBlock = !1),
          (this.block = null),
          (this.path = null),
          (this.mode = null),
          (this.uid = null),
          (this.gid = null),
          (this.size = null),
          (this.mtime = null),
          (this.cksum = null),
          (this[Ye] = '0'),
          (this.linkpath = null),
          (this.uname = null),
          (this.gname = null),
          (this.devmaj = 0),
          (this.devmin = 0),
          (this.atime = null),
          (this.ctime = null),
          Buffer.isBuffer(e) ? this.decode(e, t || 0, n, i) : e && this.set(e);
      }
      decode(e, t, n, i) {
        if ((t || (t = 0), !e || !(e.length >= t + 512)))
          throw new Error('need 512 bytes for header');
        if (
          ((this.path = Ar(e, t, 100)),
          (this.mode = Qt(e, t + 100, 8)),
          (this.uid = Qt(e, t + 108, 8)),
          (this.gid = Qt(e, t + 116, 8)),
          (this.size = Qt(e, t + 124, 12)),
          (this.mtime = Sc(e, t + 136, 12)),
          (this.cksum = Qt(e, t + 148, 12)),
          this[vc](n),
          this[vc](i, !0),
          (this[Ye] = Ar(e, t + 156, 1)),
          this[Ye] === '' && (this[Ye] = '0'),
          this[Ye] === '0' && this.path.substr(-1) === '/' && (this[Ye] = '5'),
          this[Ye] === '5' && (this.size = 0),
          (this.linkpath = Ar(e, t + 157, 100)),
          e.slice(t + 257, t + 265).toString() === 'ustar\x0000')
        )
          if (
            ((this.uname = Ar(e, t + 265, 32)),
            (this.gname = Ar(e, t + 297, 32)),
            (this.devmaj = Qt(e, t + 329, 8)),
            (this.devmin = Qt(e, t + 337, 8)),
            e[t + 475] !== 0)
          ) {
            let o = Ar(e, t + 345, 155);
            this.path = o + '/' + this.path;
          } else {
            let o = Ar(e, t + 345, 130);
            o && (this.path = o + '/' + this.path),
              (this.atime = Sc(e, t + 476, 12)),
              (this.ctime = Sc(e, t + 488, 12));
          }
        let s = 8 * 32;
        for (let o = t; o < t + 148; o++) s += e[o];
        for (let o = t + 156; o < t + 512; o++) s += e[o];
        (this.cksumValid = s === this.cksum),
          this.cksum === null && s === 8 * 32 && (this.nullBlock = !0);
      }
      [vc](e, t) {
        for (let n in e)
          e[n] !== null &&
            e[n] !== void 0 &&
            !(t && n === 'path') &&
            (this[n] = e[n]);
      }
      encode(e, t) {
        if (
          (e || ((e = this.block = Buffer.alloc(512)), (t = 0)),
          t || (t = 0),
          !(e.length >= t + 512))
        )
          throw new Error('need 512 bytes for header');
        let n = this.ctime || this.atime ? 130 : 155,
          i = _w(this.path || '', n),
          s = i[0],
          o = i[1];
        (this.needPax = i[2]),
          (this.needPax = Dr(e, t, 100, s) || this.needPax),
          (this.needPax = er(e, t + 100, 8, this.mode) || this.needPax),
          (this.needPax = er(e, t + 108, 8, this.uid) || this.needPax),
          (this.needPax = er(e, t + 116, 8, this.gid) || this.needPax),
          (this.needPax = er(e, t + 124, 12, this.size) || this.needPax),
          (this.needPax = wc(e, t + 136, 12, this.mtime) || this.needPax),
          (e[t + 156] = this[Ye].charCodeAt(0)),
          (this.needPax = Dr(e, t + 157, 100, this.linkpath) || this.needPax),
          e.write('ustar\x0000', t + 257, 8),
          (this.needPax = Dr(e, t + 265, 32, this.uname) || this.needPax),
          (this.needPax = Dr(e, t + 297, 32, this.gname) || this.needPax),
          (this.needPax = er(e, t + 329, 8, this.devmaj) || this.needPax),
          (this.needPax = er(e, t + 337, 8, this.devmin) || this.needPax),
          (this.needPax = Dr(e, t + 345, n, o) || this.needPax),
          e[t + 475] !== 0
            ? (this.needPax = Dr(e, t + 345, 155, o) || this.needPax)
            : ((this.needPax = Dr(e, t + 345, 130, o) || this.needPax),
              (this.needPax = wc(e, t + 476, 12, this.atime) || this.needPax),
              (this.needPax = wc(e, t + 488, 12, this.ctime) || this.needPax));
        let a = 8 * 32;
        for (let c = t; c < t + 148; c++) a += e[c];
        for (let c = t + 156; c < t + 512; c++) a += e[c];
        return (
          (this.cksum = a),
          er(e, t + 148, 8, this.cksum),
          (this.cksumValid = !0),
          this.needPax
        );
      }
      set(e) {
        for (let t in e) e[t] !== null && e[t] !== void 0 && (this[t] = e[t]);
      }
      get type() {
        return bc.name.get(this[Ye]) || this[Ye];
      }
      get typeKey() {
        return this[Ye];
      }
      set type(e) {
        bc.code.has(e) ? (this[Ye] = bc.code.get(e)) : (this[Ye] = e);
      }
    },
    _w = (r, e) => {
      let n = r,
        i = '',
        s,
        o = hn.parse(r).root || '.';
      if (Buffer.byteLength(n) < 100) s = [n, i, !1];
      else {
        (i = hn.dirname(n)), (n = hn.basename(n));
        do
          Buffer.byteLength(n) <= 100 && Buffer.byteLength(i) <= e
            ? (s = [n, i, !1])
            : Buffer.byteLength(n) > 100 && Buffer.byteLength(i) <= e
            ? (s = [n.substr(0, 100 - 1), i, !0])
            : ((n = hn.join(hn.basename(i), n)), (i = hn.dirname(i)));
        while (i !== o && !s);
        s || (s = [r.substr(0, 100 - 1), '', !0]);
      }
      return s;
    },
    Ar = (r, e, t) =>
      r
        .slice(e, e + t)
        .toString('utf8')
        .replace(/\0.*/, ''),
    Sc = (r, e, t) => bw(Qt(r, e, t)),
    bw = (r) => (r === null ? null : new Date(r * 1e3)),
    Qt = (r, e, t) => (r[e] & 128 ? hp.parse(r.slice(e, e + t)) : Sw(r, e, t)),
    vw = (r) => (isNaN(r) ? null : r),
    Sw = (r, e, t) =>
      vw(
        parseInt(
          r
            .slice(e, e + t)
            .toString('utf8')
            .replace(/\0.*$/, '')
            .trim(),
          8
        )
      ),
    ww = { 12: 8589934591, 8: 2097151 },
    er = (r, e, t, n) =>
      n === null
        ? !1
        : n > ww[t] || n < 0
        ? (hp.encode(n, r.slice(e, e + t)), !0)
        : (Rw(r, e, t, n), !1),
    Rw = (r, e, t, n) => r.write(xw(n, t), e, t, 'ascii'),
    xw = (r, e) => Ow(Math.floor(r).toString(8), e),
    Ow = (r, e) =>
      (r.length === e - 1
        ? r
        : new Array(e - r.length - 1).join('0') + r + ' ') + '\0',
    wc = (r, e, t, n) => (n === null ? !1 : er(r, e, t, n.getTime() / 1e3)),
    Tw = new Array(156).join('\0'),
    Dr = (r, e, t, n) =>
      n === null
        ? !1
        : (r.write(n + Tw, e, t, 'utf8'),
          n.length !== Buffer.byteLength(n) || n.length > t);
  dp.exports = Rc;
});
var xs = E((jA, pp) => {
  'use strict';
  var Cw = dn(),
    Iw = require('path'),
    ci = class {
      constructor(e, t) {
        (this.atime = e.atime || null),
          (this.charset = e.charset || null),
          (this.comment = e.comment || null),
          (this.ctime = e.ctime || null),
          (this.gid = e.gid || null),
          (this.gname = e.gname || null),
          (this.linkpath = e.linkpath || null),
          (this.mtime = e.mtime || null),
          (this.path = e.path || null),
          (this.size = e.size || null),
          (this.uid = e.uid || null),
          (this.uname = e.uname || null),
          (this.dev = e.dev || null),
          (this.ino = e.ino || null),
          (this.nlink = e.nlink || null),
          (this.global = t || !1);
      }
      encode() {
        let e = this.encodeBody();
        if (e === '') return null;
        let t = Buffer.byteLength(e),
          n = 512 * Math.ceil(1 + t / 512),
          i = Buffer.allocUnsafe(n);
        for (let s = 0; s < 512; s++) i[s] = 0;
        new Cw({
          path: ('PaxHeader/' + Iw.basename(this.path)).slice(0, 99),
          mode: this.mode || 420,
          uid: this.uid || null,
          gid: this.gid || null,
          size: t,
          mtime: this.mtime || null,
          type: this.global ? 'GlobalExtendedHeader' : 'ExtendedHeader',
          linkpath: '',
          uname: this.uname || '',
          gname: this.gname || '',
          devmaj: 0,
          devmin: 0,
          atime: this.atime || null,
          ctime: this.ctime || null,
        }).encode(i),
          i.write(e, 512, t, 'utf8');
        for (let s = t + 512; s < i.length; s++) i[s] = 0;
        return i;
      }
      encodeBody() {
        return (
          this.encodeField('path') +
          this.encodeField('ctime') +
          this.encodeField('atime') +
          this.encodeField('dev') +
          this.encodeField('ino') +
          this.encodeField('nlink') +
          this.encodeField('charset') +
          this.encodeField('comment') +
          this.encodeField('gid') +
          this.encodeField('gname') +
          this.encodeField('linkpath') +
          this.encodeField('mtime') +
          this.encodeField('size') +
          this.encodeField('uid') +
          this.encodeField('uname')
        );
      }
      encodeField(e) {
        if (this[e] === null || this[e] === void 0) return '';
        let t = this[e] instanceof Date ? this[e].getTime() / 1e3 : this[e],
          n =
            ' ' +
            (e === 'dev' || e === 'ino' || e === 'nlink' ? 'SCHILY.' : '') +
            e +
            '=' +
            t +
            `
`,
          i = Buffer.byteLength(n),
          s = Math.floor(Math.log(i) / Math.log(10)) + 1;
        return i + s >= Math.pow(10, s) && (s += 1), s + i + n;
      }
    };
  ci.parse = (r, e, t) => new ci(Nw(Aw(r), e), t);
  var Nw = (r, e) =>
      e ? Object.keys(r).reduce((t, n) => ((t[n] = r[n]), t), e) : r,
    Aw = (r) =>
      r
        .replace(/\n$/, '')
        .split(
          `
`
        )
        .reduce(Dw, Object.create(null)),
    Dw = (r, e) => {
      let t = parseInt(e, 10);
      if (t !== Buffer.byteLength(e) + 1) return r;
      e = e.substr((t + ' ').length);
      let n = e.split('='),
        i = n.shift().replace(/^SCHILY\.(dev|ino|nlink)/, '$1');
      if (!i) return r;
      let s = n.join('=');
      return (
        (r[i] = /^([A-Z]+\.)?([mac]|birth|creation)time$/.test(i)
          ? new Date(s * 1e3)
          : /^[0-9]+$/.test(s)
          ? +s
          : s),
        r
      );
    };
  pp.exports = ci;
});
var pn = E((GA, mp) => {
  'use strict';
  mp.exports = (r) => {
    let e = r.length - 1,
      t = -1;
    for (; e > -1 && r.charAt(e) === '/'; ) (t = e), e--;
    return t === -1 ? r : r.slice(0, t);
  };
});
var Os = E(($A, yp) => {
  'use strict';
  yp.exports = (r) =>
    class extends r {
      warn(e, t, n = {}) {
        this.file && (n.file = this.file),
          this.cwd && (n.cwd = this.cwd),
          (n.code = (t instanceof Error && t.code) || e),
          (n.tarCode = e),
          !this.strict && n.recoverable !== !1
            ? (t instanceof Error &&
                ((n = Object.assign(t, n)), (t = t.message)),
              this.emit('warn', n.tarCode, t, n))
            : t instanceof Error
            ? this.emit('error', Object.assign(t, n))
            : this.emit('error', Object.assign(new Error(`${e}: ${t}`), n));
      }
    };
});
var Oc = E((zA, Ep) => {
  'use strict';
  var Ts = ['|', '<', '>', '?', ':'],
    xc = Ts.map((r) => String.fromCharCode(61440 + r.charCodeAt(0))),
    kw = new Map(Ts.map((r, e) => [r, xc[e]])),
    Lw = new Map(xc.map((r, e) => [r, Ts[e]]));
  Ep.exports = {
    encode: (r) => Ts.reduce((e, t) => e.split(t).join(kw.get(t)), r),
    decode: (r) => xc.reduce((e, t) => e.split(t).join(Lw.get(t)), r),
  };
});
var Tc = E((VA, _p) => {
  'use strict';
  var { isAbsolute: Pw, parse: gp } = require('path').win32;
  _p.exports = (r) => {
    let e = '',
      t = gp(r);
    for (; Pw(r) || t.root; ) {
      let n = r.charAt(0) === '/' && r.slice(0, 4) !== '//?/' ? '/' : t.root;
      (r = r.substr(n.length)), (e += n), (t = gp(r));
    }
    return [e, r];
  };
});
var vp = E((WA, bp) => {
  'use strict';
  bp.exports = (r, e, t) => (
    (r &= 4095),
    t && (r = (r | 384) & -19),
    e && (r & 256 && (r |= 64), r & 32 && (r |= 8), r & 4 && (r |= 1)),
    r
  );
});
var Uc = E((YA, Pp) => {
  'use strict';
  var Cp = cn(),
    Ip = xs(),
    Np = dn(),
    vt = require('fs'),
    Sp = require('path'),
    bt = fn(),
    Fw = pn(),
    Ap = (r, e) =>
      e ? ((r = bt(r).replace(/^\.(\/|$)/, '')), Fw(e) + '/' + r) : bt(r),
    Uw = 16 * 1024 * 1024,
    wp = Symbol('process'),
    Rp = Symbol('file'),
    xp = Symbol('directory'),
    Ic = Symbol('symlink'),
    Op = Symbol('hardlink'),
    ui = Symbol('header'),
    Cs = Symbol('read'),
    Nc = Symbol('lstat'),
    Is = Symbol('onlstat'),
    Ac = Symbol('onread'),
    Dc = Symbol('onreadlink'),
    kc = Symbol('openfile'),
    Lc = Symbol('onopenfile'),
    tr = Symbol('close'),
    Ns = Symbol('mode'),
    Pc = Symbol('awaitDrain'),
    Cc = Symbol('ondrain'),
    St = Symbol('prefix'),
    Tp = Symbol('hadError'),
    Dp = Os(),
    Mw = Oc(),
    kp = Tc(),
    Lp = vp(),
    As = Dp(
      class extends Cp {
        constructor(e, t) {
          if (((t = t || {}), super(t), typeof e != 'string'))
            throw new TypeError('path is required');
          (this.path = bt(e)),
            (this.portable = !!t.portable),
            (this.myuid = (process.getuid && process.getuid()) || 0),
            (this.myuser = process.env.USER || ''),
            (this.maxReadSize = t.maxReadSize || Uw),
            (this.linkCache = t.linkCache || new Map()),
            (this.statCache = t.statCache || new Map()),
            (this.preservePaths = !!t.preservePaths),
            (this.cwd = bt(t.cwd || process.cwd())),
            (this.strict = !!t.strict),
            (this.noPax = !!t.noPax),
            (this.noMtime = !!t.noMtime),
            (this.mtime = t.mtime || null),
            (this.prefix = t.prefix ? bt(t.prefix) : null),
            (this.fd = null),
            (this.blockLen = null),
            (this.blockRemain = null),
            (this.buf = null),
            (this.offset = null),
            (this.length = null),
            (this.pos = null),
            (this.remain = null),
            typeof t.onwarn == 'function' && this.on('warn', t.onwarn);
          let n = !1;
          if (!this.preservePaths) {
            let [i, s] = kp(this.path);
            i && ((this.path = s), (n = i));
          }
          (this.win32 = !!t.win32 || process.platform === 'win32'),
            this.win32 &&
              ((this.path = Mw.decode(this.path.replace(/\\/g, '/'))),
              (e = e.replace(/\\/g, '/'))),
            (this.absolute = bt(t.absolute || Sp.resolve(this.cwd, e))),
            this.path === '' && (this.path = './'),
            n &&
              this.warn('TAR_ENTRY_INFO', `stripping ${n} from absolute path`, {
                entry: this,
                path: n + this.path,
              }),
            this.statCache.has(this.absolute)
              ? this[Is](this.statCache.get(this.absolute))
              : this[Nc]();
        }
        emit(e, ...t) {
          return e === 'error' && (this[Tp] = !0), super.emit(e, ...t);
        }
        [Nc]() {
          vt.lstat(this.absolute, (e, t) => {
            if (e) return this.emit('error', e);
            this[Is](t);
          });
        }
        [Is](e) {
          this.statCache.set(this.absolute, e),
            (this.stat = e),
            e.isFile() || (e.size = 0),
            (this.type = Bw(e)),
            this.emit('stat', e),
            this[wp]();
        }
        [wp]() {
          switch (this.type) {
            case 'File':
              return this[Rp]();
            case 'Directory':
              return this[xp]();
            case 'SymbolicLink':
              return this[Ic]();
            default:
              return this.end();
          }
        }
        [Ns](e) {
          return Lp(e, this.type === 'Directory', this.portable);
        }
        [St](e) {
          return Ap(e, this.prefix);
        }
        [ui]() {
          this.type === 'Directory' && this.portable && (this.noMtime = !0),
            (this.header = new Np({
              path: this[St](this.path),
              linkpath:
                this.type === 'Link' ? this[St](this.linkpath) : this.linkpath,
              mode: this[Ns](this.stat.mode),
              uid: this.portable ? null : this.stat.uid,
              gid: this.portable ? null : this.stat.gid,
              size: this.stat.size,
              mtime: this.noMtime ? null : this.mtime || this.stat.mtime,
              type: this.type,
              uname: this.portable
                ? null
                : this.stat.uid === this.myuid
                ? this.myuser
                : '',
              atime: this.portable ? null : this.stat.atime,
              ctime: this.portable ? null : this.stat.ctime,
            })),
            this.header.encode() &&
              !this.noPax &&
              super.write(
                new Ip({
                  atime: this.portable ? null : this.header.atime,
                  ctime: this.portable ? null : this.header.ctime,
                  gid: this.portable ? null : this.header.gid,
                  mtime: this.noMtime ? null : this.mtime || this.header.mtime,
                  path: this[St](this.path),
                  linkpath:
                    this.type === 'Link'
                      ? this[St](this.linkpath)
                      : this.linkpath,
                  size: this.header.size,
                  uid: this.portable ? null : this.header.uid,
                  uname: this.portable ? null : this.header.uname,
                  dev: this.portable ? null : this.stat.dev,
                  ino: this.portable ? null : this.stat.ino,
                  nlink: this.portable ? null : this.stat.nlink,
                }).encode()
              ),
            super.write(this.header.block);
        }
        [xp]() {
          this.path.substr(-1) !== '/' && (this.path += '/'),
            (this.stat.size = 0),
            this[ui](),
            this.end();
        }
        [Ic]() {
          vt.readlink(this.absolute, (e, t) => {
            if (e) return this.emit('error', e);
            this[Dc](t);
          });
        }
        [Dc](e) {
          (this.linkpath = bt(e)), this[ui](), this.end();
        }
        [Op](e) {
          (this.type = 'Link'),
            (this.linkpath = bt(Sp.relative(this.cwd, e))),
            (this.stat.size = 0),
            this[ui](),
            this.end();
        }
        [Rp]() {
          if (this.stat.nlink > 1) {
            let e = this.stat.dev + ':' + this.stat.ino;
            if (this.linkCache.has(e)) {
              let t = this.linkCache.get(e);
              if (t.indexOf(this.cwd) === 0) return this[Op](t);
            }
            this.linkCache.set(e, this.absolute);
          }
          if ((this[ui](), this.stat.size === 0)) return this.end();
          this[kc]();
        }
        [kc]() {
          vt.open(this.absolute, 'r', (e, t) => {
            if (e) return this.emit('error', e);
            this[Lc](t);
          });
        }
        [Lc](e) {
          if (((this.fd = e), this[Tp])) return this[tr]();
          (this.blockLen = 512 * Math.ceil(this.stat.size / 512)),
            (this.blockRemain = this.blockLen);
          let t = Math.min(this.blockLen, this.maxReadSize);
          (this.buf = Buffer.allocUnsafe(t)),
            (this.offset = 0),
            (this.pos = 0),
            (this.remain = this.stat.size),
            (this.length = this.buf.length),
            this[Cs]();
        }
        [Cs]() {
          let { fd: e, buf: t, offset: n, length: i, pos: s } = this;
          vt.read(e, t, n, i, s, (o, a) => {
            if (o) return this[tr](() => this.emit('error', o));
            this[Ac](a);
          });
        }
        [tr](e) {
          vt.close(this.fd, e);
        }
        [Ac](e) {
          if (e <= 0 && this.remain > 0) {
            let i = new Error('encountered unexpected EOF');
            return (
              (i.path = this.absolute),
              (i.syscall = 'read'),
              (i.code = 'EOF'),
              this[tr](() => this.emit('error', i))
            );
          }
          if (e > this.remain) {
            let i = new Error('did not encounter expected EOF');
            return (
              (i.path = this.absolute),
              (i.syscall = 'read'),
              (i.code = 'EOF'),
              this[tr](() => this.emit('error', i))
            );
          }
          if (e === this.remain)
            for (let i = e; i < this.length && e < this.blockRemain; i++)
              (this.buf[i + this.offset] = 0), e++, this.remain++;
          let t =
            this.offset === 0 && e === this.buf.length
              ? this.buf
              : this.buf.slice(this.offset, this.offset + e);
          this.write(t) ? this[Cc]() : this[Pc](() => this[Cc]());
        }
        [Pc](e) {
          this.once('drain', e);
        }
        write(e) {
          if (this.blockRemain < e.length) {
            let t = new Error('writing more data than expected');
            return (t.path = this.absolute), this.emit('error', t);
          }
          return (
            (this.remain -= e.length),
            (this.blockRemain -= e.length),
            (this.pos += e.length),
            (this.offset += e.length),
            super.write(e)
          );
        }
        [Cc]() {
          if (!this.remain)
            return (
              this.blockRemain && super.write(Buffer.alloc(this.blockRemain)),
              this[tr]((e) => (e ? this.emit('error', e) : this.end()))
            );
          this.offset >= this.length &&
            ((this.buf = Buffer.allocUnsafe(
              Math.min(this.blockRemain, this.buf.length)
            )),
            (this.offset = 0)),
            (this.length = this.buf.length - this.offset),
            this[Cs]();
        }
      }
    ),
    Fc = class extends As {
      [Nc]() {
        this[Is](vt.lstatSync(this.absolute));
      }
      [Ic]() {
        this[Dc](vt.readlinkSync(this.absolute));
      }
      [kc]() {
        this[Lc](vt.openSync(this.absolute, 'r'));
      }
      [Cs]() {
        let e = !0;
        try {
          let { fd: t, buf: n, offset: i, length: s, pos: o } = this,
            a = vt.readSync(t, n, i, s, o);
          this[Ac](a), (e = !1);
        } finally {
          if (e)
            try {
              this[tr](() => {});
            } catch {}
        }
      }
      [Pc](e) {
        e();
      }
      [tr](e) {
        vt.closeSync(this.fd), e();
      }
    },
    qw = Dp(
      class extends Cp {
        constructor(e, t) {
          (t = t || {}),
            super(t),
            (this.preservePaths = !!t.preservePaths),
            (this.portable = !!t.portable),
            (this.strict = !!t.strict),
            (this.noPax = !!t.noPax),
            (this.noMtime = !!t.noMtime),
            (this.readEntry = e),
            (this.type = e.type),
            this.type === 'Directory' && this.portable && (this.noMtime = !0),
            (this.prefix = t.prefix || null),
            (this.path = bt(e.path)),
            (this.mode = this[Ns](e.mode)),
            (this.uid = this.portable ? null : e.uid),
            (this.gid = this.portable ? null : e.gid),
            (this.uname = this.portable ? null : e.uname),
            (this.gname = this.portable ? null : e.gname),
            (this.size = e.size),
            (this.mtime = this.noMtime ? null : t.mtime || e.mtime),
            (this.atime = this.portable ? null : e.atime),
            (this.ctime = this.portable ? null : e.ctime),
            (this.linkpath = bt(e.linkpath)),
            typeof t.onwarn == 'function' && this.on('warn', t.onwarn);
          let n = !1;
          if (!this.preservePaths) {
            let [i, s] = kp(this.path);
            i && ((this.path = s), (n = i));
          }
          (this.remain = e.size),
            (this.blockRemain = e.startBlockSize),
            (this.header = new Np({
              path: this[St](this.path),
              linkpath:
                this.type === 'Link' ? this[St](this.linkpath) : this.linkpath,
              mode: this.mode,
              uid: this.portable ? null : this.uid,
              gid: this.portable ? null : this.gid,
              size: this.size,
              mtime: this.noMtime ? null : this.mtime,
              type: this.type,
              uname: this.portable ? null : this.uname,
              atime: this.portable ? null : this.atime,
              ctime: this.portable ? null : this.ctime,
            })),
            n &&
              this.warn('TAR_ENTRY_INFO', `stripping ${n} from absolute path`, {
                entry: this,
                path: n + this.path,
              }),
            this.header.encode() &&
              !this.noPax &&
              super.write(
                new Ip({
                  atime: this.portable ? null : this.atime,
                  ctime: this.portable ? null : this.ctime,
                  gid: this.portable ? null : this.gid,
                  mtime: this.noMtime ? null : this.mtime,
                  path: this[St](this.path),
                  linkpath:
                    this.type === 'Link'
                      ? this[St](this.linkpath)
                      : this.linkpath,
                  size: this.size,
                  uid: this.portable ? null : this.uid,
                  uname: this.portable ? null : this.uname,
                  dev: this.portable ? null : this.readEntry.dev,
                  ino: this.portable ? null : this.readEntry.ino,
                  nlink: this.portable ? null : this.readEntry.nlink,
                }).encode()
              ),
            super.write(this.header.block),
            e.pipe(this);
        }
        [St](e) {
          return Ap(e, this.prefix);
        }
        [Ns](e) {
          return Lp(e, this.type === 'Directory', this.portable);
        }
        write(e) {
          let t = e.length;
          if (t > this.blockRemain)
            throw new Error('writing more to entry than is appropriate');
          return (this.blockRemain -= t), super.write(e);
        }
        end() {
          return (
            this.blockRemain && super.write(Buffer.alloc(this.blockRemain)),
            super.end()
          );
        }
      }
    );
  As.Sync = Fc;
  As.Tar = qw;
  var Bw = (r) =>
    r.isFile()
      ? 'File'
      : r.isDirectory()
      ? 'Directory'
      : r.isSymbolicLink()
      ? 'SymbolicLink'
      : 'Unsupported';
  Pp.exports = As;
});
var Up = E((JA, Fp) => {
  'use strict';
  Fp.exports = function (r) {
    r.prototype[Symbol.iterator] = function* () {
      for (let e = this.head; e; e = e.next) yield e.value;
    };
  };
});
var Mc = E((ZA, Mp) => {
  'use strict';
  Mp.exports = Z;
  Z.Node = kr;
  Z.create = Z;
  function Z(r) {
    var e = this;
    if (
      (e instanceof Z || (e = new Z()),
      (e.tail = null),
      (e.head = null),
      (e.length = 0),
      r && typeof r.forEach == 'function')
    )
      r.forEach(function (i) {
        e.push(i);
      });
    else if (arguments.length > 0)
      for (var t = 0, n = arguments.length; t < n; t++) e.push(arguments[t]);
    return e;
  }
  Z.prototype.removeNode = function (r) {
    if (r.list !== this)
      throw new Error('removing node which does not belong to this list');
    var e = r.next,
      t = r.prev;
    return (
      e && (e.prev = t),
      t && (t.next = e),
      r === this.head && (this.head = e),
      r === this.tail && (this.tail = t),
      r.list.length--,
      (r.next = null),
      (r.prev = null),
      (r.list = null),
      e
    );
  };
  Z.prototype.unshiftNode = function (r) {
    if (r !== this.head) {
      r.list && r.list.removeNode(r);
      var e = this.head;
      (r.list = this),
        (r.next = e),
        e && (e.prev = r),
        (this.head = r),
        this.tail || (this.tail = r),
        this.length++;
    }
  };
  Z.prototype.pushNode = function (r) {
    if (r !== this.tail) {
      r.list && r.list.removeNode(r);
      var e = this.tail;
      (r.list = this),
        (r.prev = e),
        e && (e.next = r),
        (this.tail = r),
        this.head || (this.head = r),
        this.length++;
    }
  };
  Z.prototype.push = function () {
    for (var r = 0, e = arguments.length; r < e; r++) Gw(this, arguments[r]);
    return this.length;
  };
  Z.prototype.unshift = function () {
    for (var r = 0, e = arguments.length; r < e; r++) $w(this, arguments[r]);
    return this.length;
  };
  Z.prototype.pop = function () {
    if (this.tail) {
      var r = this.tail.value;
      return (
        (this.tail = this.tail.prev),
        this.tail ? (this.tail.next = null) : (this.head = null),
        this.length--,
        r
      );
    }
  };
  Z.prototype.shift = function () {
    if (this.head) {
      var r = this.head.value;
      return (
        (this.head = this.head.next),
        this.head ? (this.head.prev = null) : (this.tail = null),
        this.length--,
        r
      );
    }
  };
  Z.prototype.forEach = function (r, e) {
    e = e || this;
    for (var t = this.head, n = 0; t !== null; n++)
      r.call(e, t.value, n, this), (t = t.next);
  };
  Z.prototype.forEachReverse = function (r, e) {
    e = e || this;
    for (var t = this.tail, n = this.length - 1; t !== null; n--)
      r.call(e, t.value, n, this), (t = t.prev);
  };
  Z.prototype.get = function (r) {
    for (var e = 0, t = this.head; t !== null && e < r; e++) t = t.next;
    if (e === r && t !== null) return t.value;
  };
  Z.prototype.getReverse = function (r) {
    for (var e = 0, t = this.tail; t !== null && e < r; e++) t = t.prev;
    if (e === r && t !== null) return t.value;
  };
  Z.prototype.map = function (r, e) {
    e = e || this;
    for (var t = new Z(), n = this.head; n !== null; )
      t.push(r.call(e, n.value, this)), (n = n.next);
    return t;
  };
  Z.prototype.mapReverse = function (r, e) {
    e = e || this;
    for (var t = new Z(), n = this.tail; n !== null; )
      t.push(r.call(e, n.value, this)), (n = n.prev);
    return t;
  };
  Z.prototype.reduce = function (r, e) {
    var t,
      n = this.head;
    if (arguments.length > 1) t = e;
    else if (this.head) (n = this.head.next), (t = this.head.value);
    else throw new TypeError('Reduce of empty list with no initial value');
    for (var i = 0; n !== null; i++) (t = r(t, n.value, i)), (n = n.next);
    return t;
  };
  Z.prototype.reduceReverse = function (r, e) {
    var t,
      n = this.tail;
    if (arguments.length > 1) t = e;
    else if (this.tail) (n = this.tail.prev), (t = this.tail.value);
    else throw new TypeError('Reduce of empty list with no initial value');
    for (var i = this.length - 1; n !== null; i--)
      (t = r(t, n.value, i)), (n = n.prev);
    return t;
  };
  Z.prototype.toArray = function () {
    for (var r = new Array(this.length), e = 0, t = this.head; t !== null; e++)
      (r[e] = t.value), (t = t.next);
    return r;
  };
  Z.prototype.toArrayReverse = function () {
    for (var r = new Array(this.length), e = 0, t = this.tail; t !== null; e++)
      (r[e] = t.value), (t = t.prev);
    return r;
  };
  Z.prototype.slice = function (r, e) {
    (e = e || this.length),
      e < 0 && (e += this.length),
      (r = r || 0),
      r < 0 && (r += this.length);
    var t = new Z();
    if (e < r || e < 0) return t;
    r < 0 && (r = 0), e > this.length && (e = this.length);
    for (var n = 0, i = this.head; i !== null && n < r; n++) i = i.next;
    for (; i !== null && n < e; n++, i = i.next) t.push(i.value);
    return t;
  };
  Z.prototype.sliceReverse = function (r, e) {
    (e = e || this.length),
      e < 0 && (e += this.length),
      (r = r || 0),
      r < 0 && (r += this.length);
    var t = new Z();
    if (e < r || e < 0) return t;
    r < 0 && (r = 0), e > this.length && (e = this.length);
    for (var n = this.length, i = this.tail; i !== null && n > e; n--)
      i = i.prev;
    for (; i !== null && n > r; n--, i = i.prev) t.push(i.value);
    return t;
  };
  Z.prototype.splice = function (r, e, ...t) {
    r > this.length && (r = this.length - 1), r < 0 && (r = this.length + r);
    for (var n = 0, i = this.head; i !== null && n < r; n++) i = i.next;
    for (var s = [], n = 0; i && n < e; n++)
      s.push(i.value), (i = this.removeNode(i));
    i === null && (i = this.tail),
      i !== this.head && i !== this.tail && (i = i.prev);
    for (var n = 0; n < t.length; n++) i = jw(this, i, t[n]);
    return s;
  };
  Z.prototype.reverse = function () {
    for (var r = this.head, e = this.tail, t = r; t !== null; t = t.prev) {
      var n = t.prev;
      (t.prev = t.next), (t.next = n);
    }
    return (this.head = e), (this.tail = r), this;
  };
  function jw(r, e, t) {
    var n = e === r.head ? new kr(t, null, e, r) : new kr(t, e, e.next, r);
    return (
      n.next === null && (r.tail = n),
      n.prev === null && (r.head = n),
      r.length++,
      n
    );
  }
  function Gw(r, e) {
    (r.tail = new kr(e, r.tail, null, r)),
      r.head || (r.head = r.tail),
      r.length++;
  }
  function $w(r, e) {
    (r.head = new kr(e, null, r.head, r)),
      r.tail || (r.tail = r.head),
      r.length++;
  }
  function kr(r, e, t, n) {
    if (!(this instanceof kr)) return new kr(r, e, t, n);
    (this.list = n),
      (this.value = r),
      e ? ((e.next = this), (this.prev = e)) : (this.prev = null),
      t ? ((t.prev = this), (this.next = t)) : (this.next = null);
  }
  try {
    Up()(Z);
  } catch {}
});
var Bs = E((eD, zp) => {
  'use strict';
  var Ms = class {
      constructor(e, t) {
        (this.path = e || './'),
          (this.absolute = t),
          (this.entry = null),
          (this.stat = null),
          (this.readdir = null),
          (this.pending = !1),
          (this.ignore = !1),
          (this.piped = !1);
      }
    },
    Hw = cn(),
    zw = yc(),
    Vw = ws(),
    Wc = Uc(),
    Ww = Wc.Sync,
    Xw = Wc.Tar,
    Kw = Mc(),
    qp = Buffer.alloc(1024),
    Ls = Symbol('onStat'),
    Ds = Symbol('ended'),
    wt = Symbol('queue'),
    mn = Symbol('current'),
    Lr = Symbol('process'),
    ks = Symbol('processing'),
    Bp = Symbol('processJob'),
    Rt = Symbol('jobs'),
    qc = Symbol('jobDone'),
    Ps = Symbol('addFSEntry'),
    jp = Symbol('addTarEntry'),
    $c = Symbol('stat'),
    Hc = Symbol('readdir'),
    Fs = Symbol('onreaddir'),
    Us = Symbol('pipe'),
    Gp = Symbol('entry'),
    Bc = Symbol('entryOpt'),
    zc = Symbol('writeEntryClass'),
    Hp = Symbol('write'),
    jc = Symbol('ondrain'),
    qs = require('fs'),
    $p = require('path'),
    Yw = Os(),
    Gc = fn(),
    Xc = Yw(
      class extends Hw {
        constructor(e) {
          super(e),
            (e = e || Object.create(null)),
            (this.opt = e),
            (this.file = e.file || ''),
            (this.cwd = e.cwd || process.cwd()),
            (this.maxReadSize = e.maxReadSize),
            (this.preservePaths = !!e.preservePaths),
            (this.strict = !!e.strict),
            (this.noPax = !!e.noPax),
            (this.prefix = Gc(e.prefix || '')),
            (this.linkCache = e.linkCache || new Map()),
            (this.statCache = e.statCache || new Map()),
            (this.readdirCache = e.readdirCache || new Map()),
            (this[zc] = Wc),
            typeof e.onwarn == 'function' && this.on('warn', e.onwarn),
            (this.portable = !!e.portable),
            (this.zip = null),
            e.gzip
              ? (typeof e.gzip != 'object' && (e.gzip = {}),
                this.portable && (e.gzip.portable = !0),
                (this.zip = new zw.Gzip(e.gzip)),
                this.zip.on('data', (t) => super.write(t)),
                this.zip.on('end', (t) => super.end()),
                this.zip.on('drain', (t) => this[jc]()),
                this.on('resume', (t) => this.zip.resume()))
              : this.on('drain', this[jc]),
            (this.noDirRecurse = !!e.noDirRecurse),
            (this.follow = !!e.follow),
            (this.noMtime = !!e.noMtime),
            (this.mtime = e.mtime || null),
            (this.filter =
              typeof e.filter == 'function' ? e.filter : (t) => !0),
            (this[wt] = new Kw()),
            (this[Rt] = 0),
            (this.jobs = +e.jobs || 4),
            (this[ks] = !1),
            (this[Ds] = !1);
        }
        [Hp](e) {
          return super.write(e);
        }
        add(e) {
          return this.write(e), this;
        }
        end(e) {
          return e && this.write(e), (this[Ds] = !0), this[Lr](), this;
        }
        write(e) {
          if (this[Ds]) throw new Error('write after end');
          return e instanceof Vw ? this[jp](e) : this[Ps](e), this.flowing;
        }
        [jp](e) {
          let t = Gc($p.resolve(this.cwd, e.path));
          if (!this.filter(e.path, e)) e.resume();
          else {
            let n = new Ms(e.path, t, !1);
            (n.entry = new Xw(e, this[Bc](n))),
              n.entry.on('end', (i) => this[qc](n)),
              (this[Rt] += 1),
              this[wt].push(n);
          }
          this[Lr]();
        }
        [Ps](e) {
          let t = Gc($p.resolve(this.cwd, e));
          this[wt].push(new Ms(e, t)), this[Lr]();
        }
        [$c](e) {
          (e.pending = !0), (this[Rt] += 1);
          let t = this.follow ? 'stat' : 'lstat';
          qs[t](e.absolute, (n, i) => {
            (e.pending = !1),
              (this[Rt] -= 1),
              n ? this.emit('error', n) : this[Ls](e, i);
          });
        }
        [Ls](e, t) {
          this.statCache.set(e.absolute, t),
            (e.stat = t),
            this.filter(e.path, t) || (e.ignore = !0),
            this[Lr]();
        }
        [Hc](e) {
          (e.pending = !0),
            (this[Rt] += 1),
            qs.readdir(e.absolute, (t, n) => {
              if (((e.pending = !1), (this[Rt] -= 1), t))
                return this.emit('error', t);
              this[Fs](e, n);
            });
        }
        [Fs](e, t) {
          this.readdirCache.set(e.absolute, t), (e.readdir = t), this[Lr]();
        }
        [Lr]() {
          if (!this[ks]) {
            this[ks] = !0;
            for (
              let e = this[wt].head;
              e !== null && this[Rt] < this.jobs;
              e = e.next
            )
              if ((this[Bp](e.value), e.value.ignore)) {
                let t = e.next;
                this[wt].removeNode(e), (e.next = t);
              }
            (this[ks] = !1),
              this[Ds] &&
                !this[wt].length &&
                this[Rt] === 0 &&
                (this.zip ? this.zip.end(qp) : (super.write(qp), super.end()));
          }
        }
        get [mn]() {
          return this[wt] && this[wt].head && this[wt].head.value;
        }
        [qc](e) {
          this[wt].shift(), (this[Rt] -= 1), this[Lr]();
        }
        [Bp](e) {
          if (!e.pending) {
            if (e.entry) {
              e === this[mn] && !e.piped && this[Us](e);
              return;
            }
            if (
              (e.stat ||
                (this.statCache.has(e.absolute)
                  ? this[Ls](e, this.statCache.get(e.absolute))
                  : this[$c](e)),
              !!e.stat &&
                !e.ignore &&
                !(
                  !this.noDirRecurse &&
                  e.stat.isDirectory() &&
                  !e.readdir &&
                  (this.readdirCache.has(e.absolute)
                    ? this[Fs](e, this.readdirCache.get(e.absolute))
                    : this[Hc](e),
                  !e.readdir)
                ))
            ) {
              if (((e.entry = this[Gp](e)), !e.entry)) {
                e.ignore = !0;
                return;
              }
              e === this[mn] && !e.piped && this[Us](e);
            }
          }
        }
        [Bc](e) {
          return {
            onwarn: (t, n, i) => this.warn(t, n, i),
            noPax: this.noPax,
            cwd: this.cwd,
            absolute: e.absolute,
            preservePaths: this.preservePaths,
            maxReadSize: this.maxReadSize,
            strict: this.strict,
            portable: this.portable,
            linkCache: this.linkCache,
            statCache: this.statCache,
            noMtime: this.noMtime,
            mtime: this.mtime,
            prefix: this.prefix,
          };
        }
        [Gp](e) {
          this[Rt] += 1;
          try {
            return new this[zc](e.path, this[Bc](e))
              .on('end', () => this[qc](e))
              .on('error', (t) => this.emit('error', t));
          } catch (t) {
            this.emit('error', t);
          }
        }
        [jc]() {
          this[mn] && this[mn].entry && this[mn].entry.resume();
        }
        [Us](e) {
          (e.piped = !0),
            e.readdir &&
              e.readdir.forEach((i) => {
                let s = e.path,
                  o = s === './' ? '' : s.replace(/\/*$/, '/');
                this[Ps](o + i);
              });
          let t = e.entry,
            n = this.zip;
          n
            ? t.on('data', (i) => {
                n.write(i) || t.pause();
              })
            : t.on('data', (i) => {
                super.write(i) || t.pause();
              });
        }
        pause() {
          return this.zip && this.zip.pause(), super.pause();
        }
      }
    ),
    Vc = class extends Xc {
      constructor(e) {
        super(e), (this[zc] = Ww);
      }
      pause() {}
      resume() {}
      [$c](e) {
        let t = this.follow ? 'statSync' : 'lstatSync';
        this[Ls](e, qs[t](e.absolute));
      }
      [Hc](e, t) {
        this[Fs](e, qs.readdirSync(e.absolute));
      }
      [Us](e) {
        let t = e.entry,
          n = this.zip;
        e.readdir &&
          e.readdir.forEach((i) => {
            let s = e.path,
              o = s === './' ? '' : s.replace(/\/*$/, '/');
            this[Ps](o + i);
          }),
          n
            ? t.on('data', (i) => {
                n.write(i);
              })
            : t.on('data', (i) => {
                super[Hp](i);
              });
      }
    };
  Xc.Sync = Vc;
  zp.exports = Xc;
});
var wn = E((fi) => {
  'use strict';
  var Jw = cn(),
    Zw = require('events').EventEmitter,
    He = require('fs'),
    Jc = He.writev;
  if (!Jc) {
    let r = process.binding('fs'),
      e = r.FSReqWrap || r.FSReqCallback;
    Jc = (t, n, i, s) => {
      let o = (c, l) => s(c, l, n),
        a = new e();
      (a.oncomplete = o), r.writeBuffers(t, n, i, a);
    };
  }
  var vn = Symbol('_autoClose'),
    ft = Symbol('_close'),
    li = Symbol('_ended'),
    te = Symbol('_fd'),
    Vp = Symbol('_finished'),
    nr = Symbol('_flags'),
    Kc = Symbol('_flush'),
    Zc = Symbol('_handleChunk'),
    Qc = Symbol('_makeBuf'),
    zs = Symbol('_mode'),
    js = Symbol('_needDrain'),
    _n = Symbol('_onerror'),
    Sn = Symbol('_onopen'),
    Yc = Symbol('_onread'),
    En = Symbol('_onwrite'),
    ir = Symbol('_open'),
    Mt = Symbol('_path'),
    Pr = Symbol('_pos'),
    xt = Symbol('_queue'),
    gn = Symbol('_read'),
    Wp = Symbol('_readSize'),
    rr = Symbol('_reading'),
    Gs = Symbol('_remain'),
    Xp = Symbol('_size'),
    $s = Symbol('_write'),
    yn = Symbol('_writing'),
    Hs = Symbol('_defaultFlag'),
    bn = Symbol('_errored'),
    Vs = class extends Jw {
      constructor(e, t) {
        if (
          ((t = t || {}),
          super(t),
          (this.readable = !0),
          (this.writable = !1),
          typeof e != 'string')
        )
          throw new TypeError('path must be a string');
        (this[bn] = !1),
          (this[te] = typeof t.fd == 'number' ? t.fd : null),
          (this[Mt] = e),
          (this[Wp] = t.readSize || 16 * 1024 * 1024),
          (this[rr] = !1),
          (this[Xp] = typeof t.size == 'number' ? t.size : 1 / 0),
          (this[Gs] = this[Xp]),
          (this[vn] = typeof t.autoClose == 'boolean' ? t.autoClose : !0),
          typeof this[te] == 'number' ? this[gn]() : this[ir]();
      }
      get fd() {
        return this[te];
      }
      get path() {
        return this[Mt];
      }
      write() {
        throw new TypeError('this is a readable stream');
      }
      end() {
        throw new TypeError('this is a readable stream');
      }
      [ir]() {
        He.open(this[Mt], 'r', (e, t) => this[Sn](e, t));
      }
      [Sn](e, t) {
        e ? this[_n](e) : ((this[te] = t), this.emit('open', t), this[gn]());
      }
      [Qc]() {
        return Buffer.allocUnsafe(Math.min(this[Wp], this[Gs]));
      }
      [gn]() {
        if (!this[rr]) {
          this[rr] = !0;
          let e = this[Qc]();
          if (e.length === 0)
            return process.nextTick(() => this[Yc](null, 0, e));
          He.read(this[te], e, 0, e.length, null, (t, n, i) =>
            this[Yc](t, n, i)
          );
        }
      }
      [Yc](e, t, n) {
        (this[rr] = !1), e ? this[_n](e) : this[Zc](t, n) && this[gn]();
      }
      [ft]() {
        if (this[vn] && typeof this[te] == 'number') {
          let e = this[te];
          (this[te] = null),
            He.close(e, (t) =>
              t ? this.emit('error', t) : this.emit('close')
            );
        }
      }
      [_n](e) {
        (this[rr] = !0), this[ft](), this.emit('error', e);
      }
      [Zc](e, t) {
        let n = !1;
        return (
          (this[Gs] -= e),
          e > 0 && (n = super.write(e < t.length ? t.slice(0, e) : t)),
          (e === 0 || this[Gs] <= 0) && ((n = !1), this[ft](), super.end()),
          n
        );
      }
      emit(e, t) {
        switch (e) {
          case 'prefinish':
          case 'finish':
            break;
          case 'drain':
            typeof this[te] == 'number' && this[gn]();
            break;
          case 'error':
            return this[bn] ? void 0 : ((this[bn] = !0), super.emit(e, t));
          default:
            return super.emit(e, t);
        }
      }
    },
    eu = class extends Vs {
      [ir]() {
        let e = !0;
        try {
          this[Sn](null, He.openSync(this[Mt], 'r')), (e = !1);
        } finally {
          e && this[ft]();
        }
      }
      [gn]() {
        let e = !0;
        try {
          if (!this[rr]) {
            this[rr] = !0;
            do {
              let t = this[Qc](),
                n =
                  t.length === 0
                    ? 0
                    : He.readSync(this[te], t, 0, t.length, null);
              if (!this[Zc](n, t)) break;
            } while (!0);
            this[rr] = !1;
          }
          e = !1;
        } finally {
          e && this[ft]();
        }
      }
      [ft]() {
        if (this[vn] && typeof this[te] == 'number') {
          let e = this[te];
          (this[te] = null), He.closeSync(e), this.emit('close');
        }
      }
    },
    Ws = class extends Zw {
      constructor(e, t) {
        (t = t || {}),
          super(t),
          (this.readable = !1),
          (this.writable = !0),
          (this[bn] = !1),
          (this[yn] = !1),
          (this[li] = !1),
          (this[js] = !1),
          (this[xt] = []),
          (this[Mt] = e),
          (this[te] = typeof t.fd == 'number' ? t.fd : null),
          (this[zs] = t.mode === void 0 ? 438 : t.mode),
          (this[Pr] = typeof t.start == 'number' ? t.start : null),
          (this[vn] = typeof t.autoClose == 'boolean' ? t.autoClose : !0);
        let n = this[Pr] !== null ? 'r+' : 'w';
        (this[Hs] = t.flags === void 0),
          (this[nr] = this[Hs] ? n : t.flags),
          this[te] === null && this[ir]();
      }
      emit(e, t) {
        if (e === 'error') {
          if (this[bn]) return;
          this[bn] = !0;
        }
        return super.emit(e, t);
      }
      get fd() {
        return this[te];
      }
      get path() {
        return this[Mt];
      }
      [_n](e) {
        this[ft](), (this[yn] = !0), this.emit('error', e);
      }
      [ir]() {
        He.open(this[Mt], this[nr], this[zs], (e, t) => this[Sn](e, t));
      }
      [Sn](e, t) {
        this[Hs] && this[nr] === 'r+' && e && e.code === 'ENOENT'
          ? ((this[nr] = 'w'), this[ir]())
          : e
          ? this[_n](e)
          : ((this[te] = t), this.emit('open', t), this[Kc]());
      }
      end(e, t) {
        return (
          e && this.write(e, t),
          (this[li] = !0),
          !this[yn] &&
            !this[xt].length &&
            typeof this[te] == 'number' &&
            this[En](null, 0),
          this
        );
      }
      write(e, t) {
        return (
          typeof e == 'string' && (e = Buffer.from(e, t)),
          this[li]
            ? (this.emit('error', new Error('write() after end()')), !1)
            : this[te] === null || this[yn] || this[xt].length
            ? (this[xt].push(e), (this[js] = !0), !1)
            : ((this[yn] = !0), this[$s](e), !0)
        );
      }
      [$s](e) {
        He.write(this[te], e, 0, e.length, this[Pr], (t, n) => this[En](t, n));
      }
      [En](e, t) {
        e
          ? this[_n](e)
          : (this[Pr] !== null && (this[Pr] += t),
            this[xt].length
              ? this[Kc]()
              : ((this[yn] = !1),
                this[li] && !this[Vp]
                  ? ((this[Vp] = !0), this[ft](), this.emit('finish'))
                  : this[js] && ((this[js] = !1), this.emit('drain'))));
      }
      [Kc]() {
        if (this[xt].length === 0) this[li] && this[En](null, 0);
        else if (this[xt].length === 1) this[$s](this[xt].pop());
        else {
          let e = this[xt];
          (this[xt] = []), Jc(this[te], e, this[Pr], (t, n) => this[En](t, n));
        }
      }
      [ft]() {
        if (this[vn] && typeof this[te] == 'number') {
          let e = this[te];
          (this[te] = null),
            He.close(e, (t) =>
              t ? this.emit('error', t) : this.emit('close')
            );
        }
      }
    },
    tu = class extends Ws {
      [ir]() {
        let e;
        if (this[Hs] && this[nr] === 'r+')
          try {
            e = He.openSync(this[Mt], this[nr], this[zs]);
          } catch (t) {
            if (t.code === 'ENOENT') return (this[nr] = 'w'), this[ir]();
            throw t;
          }
        else e = He.openSync(this[Mt], this[nr], this[zs]);
        this[Sn](null, e);
      }
      [ft]() {
        if (this[vn] && typeof this[te] == 'number') {
          let e = this[te];
          (this[te] = null), He.closeSync(e), this.emit('close');
        }
      }
      [$s](e) {
        let t = !0;
        try {
          this[En](null, He.writeSync(this[te], e, 0, e.length, this[Pr])),
            (t = !1);
        } finally {
          if (t)
            try {
              this[ft]();
            } catch {}
        }
      }
    };
  fi.ReadStream = Vs;
  fi.ReadStreamSync = eu;
  fi.WriteStream = Ws;
  fi.WriteStreamSync = tu;
});
var eo = E((nD, tm) => {
  'use strict';
  var Qw = Os(),
    eR = dn(),
    tR = require('events'),
    rR = Mc(),
    nR = 1024 * 1024,
    iR = ws(),
    Kp = xs(),
    sR = yc(),
    ru = Buffer.from([31, 139]),
    nt = Symbol('state'),
    Fr = Symbol('writeEntry'),
    qt = Symbol('readEntry'),
    nu = Symbol('nextEntry'),
    Yp = Symbol('processEntry'),
    it = Symbol('extendedHeader'),
    hi = Symbol('globalExtendedHeader'),
    sr = Symbol('meta'),
    Jp = Symbol('emitMeta'),
    ae = Symbol('buffer'),
    Bt = Symbol('queue'),
    Ur = Symbol('ended'),
    Zp = Symbol('emittedEnd'),
    Mr = Symbol('emit'),
    ze = Symbol('unzip'),
    Xs = Symbol('consumeChunk'),
    Ks = Symbol('consumeChunkSub'),
    iu = Symbol('consumeBody'),
    Qp = Symbol('consumeMeta'),
    em = Symbol('consumeHeader'),
    Ys = Symbol('consuming'),
    su = Symbol('bufferConcat'),
    ou = Symbol('maybeEnd'),
    di = Symbol('writing'),
    or = Symbol('aborted'),
    Js = Symbol('onDone'),
    qr = Symbol('sawValidEntry'),
    Zs = Symbol('sawNullBlock'),
    Qs = Symbol('sawEOF'),
    oR = (r) => !0;
  tm.exports = Qw(
    class extends tR {
      constructor(e) {
        (e = e || {}),
          super(e),
          (this.file = e.file || ''),
          (this[qr] = null),
          this.on(Js, (t) => {
            (this[nt] === 'begin' || this[qr] === !1) &&
              this.warn('TAR_BAD_ARCHIVE', 'Unrecognized archive format');
          }),
          e.ondone
            ? this.on(Js, e.ondone)
            : this.on(Js, (t) => {
                this.emit('prefinish'),
                  this.emit('finish'),
                  this.emit('end'),
                  this.emit('close');
              }),
          (this.strict = !!e.strict),
          (this.maxMetaEntrySize = e.maxMetaEntrySize || nR),
          (this.filter = typeof e.filter == 'function' ? e.filter : oR),
          (this.writable = !0),
          (this.readable = !1),
          (this[Bt] = new rR()),
          (this[ae] = null),
          (this[qt] = null),
          (this[Fr] = null),
          (this[nt] = 'begin'),
          (this[sr] = ''),
          (this[it] = null),
          (this[hi] = null),
          (this[Ur] = !1),
          (this[ze] = null),
          (this[or] = !1),
          (this[Zs] = !1),
          (this[Qs] = !1),
          typeof e.onwarn == 'function' && this.on('warn', e.onwarn),
          typeof e.onentry == 'function' && this.on('entry', e.onentry);
      }
      [em](e, t) {
        this[qr] === null && (this[qr] = !1);
        let n;
        try {
          n = new eR(e, t, this[it], this[hi]);
        } catch (i) {
          return this.warn('TAR_ENTRY_INVALID', i);
        }
        if (n.nullBlock)
          this[Zs]
            ? ((this[Qs] = !0),
              this[nt] === 'begin' && (this[nt] = 'header'),
              this[Mr]('eof'))
            : ((this[Zs] = !0), this[Mr]('nullBlock'));
        else if (((this[Zs] = !1), !n.cksumValid))
          this.warn('TAR_ENTRY_INVALID', 'checksum failure', { header: n });
        else if (!n.path)
          this.warn('TAR_ENTRY_INVALID', 'path is required', { header: n });
        else {
          let i = n.type;
          if (/^(Symbolic)?Link$/.test(i) && !n.linkpath)
            this.warn('TAR_ENTRY_INVALID', 'linkpath required', { header: n });
          else if (!/^(Symbolic)?Link$/.test(i) && n.linkpath)
            this.warn('TAR_ENTRY_INVALID', 'linkpath forbidden', { header: n });
          else {
            let s = (this[Fr] = new iR(n, this[it], this[hi]));
            if (!this[qr])
              if (s.remain) {
                let o = () => {
                  s.invalid || (this[qr] = !0);
                };
                s.on('end', o);
              } else this[qr] = !0;
            s.meta
              ? s.size > this.maxMetaEntrySize
                ? ((s.ignore = !0),
                  this[Mr]('ignoredEntry', s),
                  (this[nt] = 'ignore'),
                  s.resume())
                : s.size > 0 &&
                  ((this[sr] = ''),
                  s.on('data', (o) => (this[sr] += o)),
                  (this[nt] = 'meta'))
              : ((this[it] = null),
                (s.ignore = s.ignore || !this.filter(s.path, s)),
                s.ignore
                  ? (this[Mr]('ignoredEntry', s),
                    (this[nt] = s.remain ? 'ignore' : 'header'),
                    s.resume())
                  : (s.remain
                      ? (this[nt] = 'body')
                      : ((this[nt] = 'header'), s.end()),
                    this[qt]
                      ? this[Bt].push(s)
                      : (this[Bt].push(s), this[nu]())));
          }
        }
      }
      [Yp](e) {
        let t = !0;
        return (
          e
            ? Array.isArray(e)
              ? this.emit.apply(this, e)
              : ((this[qt] = e),
                this.emit('entry', e),
                e.emittedEnd || (e.on('end', (n) => this[nu]()), (t = !1)))
            : ((this[qt] = null), (t = !1)),
          t
        );
      }
      [nu]() {
        do;
        while (this[Yp](this[Bt].shift()));
        if (!this[Bt].length) {
          let e = this[qt];
          !e || e.flowing || e.size === e.remain
            ? this[di] || this.emit('drain')
            : e.once('drain', (n) => this.emit('drain'));
        }
      }
      [iu](e, t) {
        let n = this[Fr],
          i = n.blockRemain,
          s = i >= e.length && t === 0 ? e : e.slice(t, t + i);
        return (
          n.write(s),
          n.blockRemain || ((this[nt] = 'header'), (this[Fr] = null), n.end()),
          s.length
        );
      }
      [Qp](e, t) {
        let n = this[Fr],
          i = this[iu](e, t);
        return this[Fr] || this[Jp](n), i;
      }
      [Mr](e, t, n) {
        !this[Bt].length && !this[qt]
          ? this.emit(e, t, n)
          : this[Bt].push([e, t, n]);
      }
      [Jp](e) {
        switch ((this[Mr]('meta', this[sr]), e.type)) {
          case 'ExtendedHeader':
          case 'OldExtendedHeader':
            this[it] = Kp.parse(this[sr], this[it], !1);
            break;
          case 'GlobalExtendedHeader':
            this[hi] = Kp.parse(this[sr], this[hi], !0);
            break;
          case 'NextFileHasLongPath':
          case 'OldGnuLongPath':
            (this[it] = this[it] || Object.create(null)),
              (this[it].path = this[sr].replace(/\0.*/, ''));
            break;
          case 'NextFileHasLongLinkpath':
            (this[it] = this[it] || Object.create(null)),
              (this[it].linkpath = this[sr].replace(/\0.*/, ''));
            break;
          default:
            throw new Error('unknown meta: ' + e.type);
        }
      }
      abort(e) {
        (this[or] = !0),
          this.emit('abort', e),
          this.warn('TAR_ABORT', e, { recoverable: !1 });
      }
      write(e) {
        if (this[or]) return;
        if (this[ze] === null && e) {
          if (
            (this[ae] &&
              ((e = Buffer.concat([this[ae], e])), (this[ae] = null)),
            e.length < ru.length)
          )
            return (this[ae] = e), !0;
          for (let n = 0; this[ze] === null && n < ru.length; n++)
            e[n] !== ru[n] && (this[ze] = !1);
          if (this[ze] === null) {
            let n = this[Ur];
            (this[Ur] = !1),
              (this[ze] = new sR.Unzip()),
              this[ze].on('data', (s) => this[Xs](s)),
              this[ze].on('error', (s) => this.abort(s)),
              this[ze].on('end', (s) => {
                (this[Ur] = !0), this[Xs]();
              }),
              (this[di] = !0);
            let i = this[ze][n ? 'end' : 'write'](e);
            return (this[di] = !1), i;
          }
        }
        (this[di] = !0),
          this[ze] ? this[ze].write(e) : this[Xs](e),
          (this[di] = !1);
        let t = this[Bt].length ? !1 : this[qt] ? this[qt].flowing : !0;
        return (
          !t &&
            !this[Bt].length &&
            this[qt].once('drain', (n) => this.emit('drain')),
          t
        );
      }
      [su](e) {
        e &&
          !this[or] &&
          (this[ae] = this[ae] ? Buffer.concat([this[ae], e]) : e);
      }
      [ou]() {
        if (this[Ur] && !this[Zp] && !this[or] && !this[Ys]) {
          this[Zp] = !0;
          let e = this[Fr];
          if (e && e.blockRemain) {
            let t = this[ae] ? this[ae].length : 0;
            this.warn(
              'TAR_BAD_ARCHIVE',
              `Truncated input (needed ${e.blockRemain} more bytes, only ${t} available)`,
              { entry: e }
            ),
              this[ae] && e.write(this[ae]),
              e.end();
          }
          this[Mr](Js);
        }
      }
      [Xs](e) {
        if (this[Ys]) this[su](e);
        else if (!e && !this[ae]) this[ou]();
        else {
          if (((this[Ys] = !0), this[ae])) {
            this[su](e);
            let t = this[ae];
            (this[ae] = null), this[Ks](t);
          } else this[Ks](e);
          for (
            ;
            this[ae] && this[ae].length >= 512 && !this[or] && !this[Qs];

          ) {
            let t = this[ae];
            (this[ae] = null), this[Ks](t);
          }
          this[Ys] = !1;
        }
        (!this[ae] || this[Ur]) && this[ou]();
      }
      [Ks](e) {
        let t = 0,
          n = e.length;
        for (; t + 512 <= n && !this[or] && !this[Qs]; )
          switch (this[nt]) {
            case 'begin':
            case 'header':
              this[em](e, t), (t += 512);
              break;
            case 'ignore':
            case 'body':
              t += this[iu](e, t);
              break;
            case 'meta':
              t += this[Qp](e, t);
              break;
            default:
              throw new Error('invalid state: ' + this[nt]);
          }
        t < n &&
          (this[ae]
            ? (this[ae] = Buffer.concat([e.slice(t), this[ae]]))
            : (this[ae] = e.slice(t)));
      }
      end(e) {
        this[or] ||
          (this[ze] ? this[ze].end(e) : ((this[Ur] = !0), this.write(e)));
      }
    }
  );
});
var to = E((iD, sm) => {
  'use strict';
  var aR = on(),
    nm = eo(),
    Rn = require('fs'),
    cR = wn(),
    rm = require('path'),
    au = pn();
  sm.exports = (r, e, t) => {
    typeof r == 'function'
      ? ((t = r), (e = null), (r = {}))
      : Array.isArray(r) && ((e = r), (r = {})),
      typeof e == 'function' && ((t = e), (e = null)),
      e ? (e = Array.from(e)) : (e = []);
    let n = aR(r);
    if (n.sync && typeof t == 'function')
      throw new TypeError('callback not supported for sync tar functions');
    if (!n.file && typeof t == 'function')
      throw new TypeError('callback only supported with file option');
    return (
      e.length && lR(n, e),
      n.noResume || uR(n),
      n.file && n.sync ? fR(n) : n.file ? hR(n, t) : im(n)
    );
  };
  var uR = (r) => {
      let e = r.onentry;
      r.onentry = e
        ? (t) => {
            e(t), t.resume();
          }
        : (t) => t.resume();
    },
    lR = (r, e) => {
      let t = new Map(e.map((s) => [au(s), !0])),
        n = r.filter,
        i = (s, o) => {
          let a = o || rm.parse(s).root || '.',
            c = s === a ? !1 : t.has(s) ? t.get(s) : i(rm.dirname(s), a);
          return t.set(s, c), c;
        };
      r.filter = n ? (s, o) => n(s, o) && i(au(s)) : (s) => i(au(s));
    },
    fR = (r) => {
      let e = im(r),
        t = r.file,
        n = !0,
        i;
      try {
        let s = Rn.statSync(t),
          o = r.maxReadSize || 16 * 1024 * 1024;
        if (s.size < o) e.end(Rn.readFileSync(t));
        else {
          let a = 0,
            c = Buffer.allocUnsafe(o);
          for (i = Rn.openSync(t, 'r'); a < s.size; ) {
            let l = Rn.readSync(i, c, 0, o, a);
            (a += l), e.write(c.slice(0, l));
          }
          e.end();
        }
        n = !1;
      } finally {
        if (n && i)
          try {
            Rn.closeSync(i);
          } catch {}
      }
    },
    hR = (r, e) => {
      let t = new nm(r),
        n = r.maxReadSize || 16 * 1024 * 1024,
        i = r.file,
        s = new Promise((o, a) => {
          t.on('error', a),
            t.on('end', o),
            Rn.stat(i, (c, l) => {
              if (c) a(c);
              else {
                let u = new cR.ReadStream(i, { readSize: n, size: l.size });
                u.on('error', a), u.pipe(t);
              }
            });
        });
      return e ? s.then(e, e) : s;
    },
    im = (r) => new nm(r);
});
var fm = E((sD, lm) => {
  'use strict';
  var dR = on(),
    ro = Bs(),
    om = wn(),
    am = to(),
    cm = require('path');
  lm.exports = (r, e, t) => {
    if (
      (typeof e == 'function' && (t = e),
      Array.isArray(r) && ((e = r), (r = {})),
      !e || !Array.isArray(e) || !e.length)
    )
      throw new TypeError('no files or directories specified');
    e = Array.from(e);
    let n = dR(r);
    if (n.sync && typeof t == 'function')
      throw new TypeError('callback not supported for sync tar functions');
    if (!n.file && typeof t == 'function')
      throw new TypeError('callback only supported with file option');
    return n.file && n.sync
      ? pR(n, e)
      : n.file
      ? mR(n, e, t)
      : n.sync
      ? yR(n, e)
      : ER(n, e);
  };
  var pR = (r, e) => {
      let t = new ro.Sync(r),
        n = new om.WriteStreamSync(r.file, { mode: r.mode || 438 });
      t.pipe(n), um(t, e);
    },
    mR = (r, e, t) => {
      let n = new ro(r),
        i = new om.WriteStream(r.file, { mode: r.mode || 438 });
      n.pipe(i);
      let s = new Promise((o, a) => {
        i.on('error', a), i.on('close', o), n.on('error', a);
      });
      return cu(n, e), t ? s.then(t, t) : s;
    },
    um = (r, e) => {
      e.forEach((t) => {
        t.charAt(0) === '@'
          ? am({
              file: cm.resolve(r.cwd, t.substr(1)),
              sync: !0,
              noResume: !0,
              onentry: (n) => r.add(n),
            })
          : r.add(t);
      }),
        r.end();
    },
    cu = (r, e) => {
      for (; e.length; ) {
        let t = e.shift();
        if (t.charAt(0) === '@')
          return am({
            file: cm.resolve(r.cwd, t.substr(1)),
            noResume: !0,
            onentry: (n) => r.add(n),
          }).then((n) => cu(r, e));
        r.add(t);
      }
      r.end();
    },
    yR = (r, e) => {
      let t = new ro.Sync(r);
      return um(t, e), t;
    },
    ER = (r, e) => {
      let t = new ro(r);
      return cu(t, e), t;
    };
});
var uu = E((oD, gm) => {
  'use strict';
  var gR = on(),
    hm = Bs(),
    Je = require('fs'),
    dm = wn(),
    pm = to(),
    mm = require('path'),
    ym = dn();
  gm.exports = (r, e, t) => {
    let n = gR(r);
    if (!n.file) throw new TypeError('file is required');
    if (n.gzip) throw new TypeError('cannot append to compressed archives');
    if (!e || !Array.isArray(e) || !e.length)
      throw new TypeError('no files or directories specified');
    return (e = Array.from(e)), n.sync ? _R(n, e) : vR(n, e, t);
  };
  var _R = (r, e) => {
      let t = new hm.Sync(r),
        n = !0,
        i,
        s;
      try {
        try {
          i = Je.openSync(r.file, 'r+');
        } catch (c) {
          if (c.code === 'ENOENT') i = Je.openSync(r.file, 'w+');
          else throw c;
        }
        let o = Je.fstatSync(i),
          a = Buffer.alloc(512);
        e: for (s = 0; s < o.size; s += 512) {
          for (let u = 0, f = 0; u < 512; u += f) {
            if (
              ((f = Je.readSync(i, a, u, a.length - u, s + u)),
              s === 0 && a[0] === 31 && a[1] === 139)
            )
              throw new Error('cannot append to compressed archives');
            if (!f) break e;
          }
          let c = new ym(a);
          if (!c.cksumValid) break;
          let l = 512 * Math.ceil(c.size / 512);
          if (s + l + 512 > o.size) break;
          (s += l), r.mtimeCache && r.mtimeCache.set(c.path, c.mtime);
        }
        (n = !1), bR(r, t, s, i, e);
      } finally {
        if (n)
          try {
            Je.closeSync(i);
          } catch {}
      }
    },
    bR = (r, e, t, n, i) => {
      let s = new dm.WriteStreamSync(r.file, { fd: n, start: t });
      e.pipe(s), SR(e, i);
    },
    vR = (r, e, t) => {
      e = Array.from(e);
      let n = new hm(r),
        i = (o, a, c) => {
          let l = (y, v) => {
              y ? Je.close(o, (p) => c(y)) : c(null, v);
            },
            u = 0;
          if (a === 0) return l(null, 0);
          let f = 0,
            h = Buffer.alloc(512),
            d = (y, v) => {
              if (y) return l(y);
              if (((f += v), f < 512 && v))
                return Je.read(o, h, f, h.length - f, u + f, d);
              if (u === 0 && h[0] === 31 && h[1] === 139)
                return l(new Error('cannot append to compressed archives'));
              if (f < 512) return l(null, u);
              let p = new ym(h);
              if (!p.cksumValid) return l(null, u);
              let w = 512 * Math.ceil(p.size / 512);
              if (u + w + 512 > a || ((u += w + 512), u >= a))
                return l(null, u);
              r.mtimeCache && r.mtimeCache.set(p.path, p.mtime),
                (f = 0),
                Je.read(o, h, 0, 512, u, d);
            };
          Je.read(o, h, 0, 512, u, d);
        },
        s = new Promise((o, a) => {
          n.on('error', a);
          let c = 'r+',
            l = (u, f) => {
              if (u && u.code === 'ENOENT' && c === 'r+')
                return (c = 'w+'), Je.open(r.file, c, l);
              if (u) return a(u);
              Je.fstat(f, (h, d) => {
                if (h) return Je.close(f, () => a(h));
                i(f, d.size, (y, v) => {
                  if (y) return a(y);
                  let p = new dm.WriteStream(r.file, { fd: f, start: v });
                  n.pipe(p), p.on('error', a), p.on('close', o), Em(n, e);
                });
              });
            };
          Je.open(r.file, c, l);
        });
      return t ? s.then(t, t) : s;
    },
    SR = (r, e) => {
      e.forEach((t) => {
        t.charAt(0) === '@'
          ? pm({
              file: mm.resolve(r.cwd, t.substr(1)),
              sync: !0,
              noResume: !0,
              onentry: (n) => r.add(n),
            })
          : r.add(t);
      }),
        r.end();
    },
    Em = (r, e) => {
      for (; e.length; ) {
        let t = e.shift();
        if (t.charAt(0) === '@')
          return pm({
            file: mm.resolve(r.cwd, t.substr(1)),
            noResume: !0,
            onentry: (n) => r.add(n),
          }).then((n) => Em(r, e));
        r.add(t);
      }
      r.end();
    };
});
var bm = E((aD, _m) => {
  'use strict';
  var wR = on(),
    RR = uu();
  _m.exports = (r, e, t) => {
    let n = wR(r);
    if (!n.file) throw new TypeError('file is required');
    if (n.gzip) throw new TypeError('cannot append to compressed archives');
    if (!e || !Array.isArray(e) || !e.length)
      throw new TypeError('no files or directories specified');
    return (e = Array.from(e)), xR(n), RR(n, e, t);
  };
  var xR = (r) => {
    let e = r.filter;
    r.mtimeCache || (r.mtimeCache = new Map()),
      (r.filter = e
        ? (t, n) => e(t, n) && !(r.mtimeCache.get(t) > n.mtime)
        : (t, n) => !(r.mtimeCache.get(t) > n.mtime));
  };
});
var wm = E((cD, Sm) => {
  'use strict';
  var { promisify: vm } = require('util'),
    ar = require('fs'),
    OR = (r) => {
      if (!r) r = { mode: 511, fs: ar };
      else if (typeof r == 'object') r = { mode: 511, fs: ar, ...r };
      else if (typeof r == 'number') r = { mode: r, fs: ar };
      else if (typeof r == 'string') r = { mode: parseInt(r, 8), fs: ar };
      else throw new TypeError('invalid options argument');
      return (
        (r.mkdir = r.mkdir || r.fs.mkdir || ar.mkdir),
        (r.mkdirAsync = vm(r.mkdir)),
        (r.stat = r.stat || r.fs.stat || ar.stat),
        (r.statAsync = vm(r.stat)),
        (r.statSync = r.statSync || r.fs.statSync || ar.statSync),
        (r.mkdirSync = r.mkdirSync || r.fs.mkdirSync || ar.mkdirSync),
        r
      );
    };
  Sm.exports = OR;
});
var xm = E((uD, Rm) => {
  'use strict';
  var TR = process.env.__TESTING_MKDIRP_PLATFORM__ || process.platform,
    { resolve: CR, parse: IR } = require('path'),
    NR = (r) => {
      if (/\0/.test(r))
        throw Object.assign(
          new TypeError('path must be a string without null bytes'),
          { path: r, code: 'ERR_INVALID_ARG_VALUE' }
        );
      if (((r = CR(r)), TR === 'win32')) {
        let e = /[*|"<>?:]/,
          { root: t } = IR(r);
        if (e.test(r.substr(t.length)))
          throw Object.assign(new Error('Illegal characters in path.'), {
            path: r,
            code: 'EINVAL',
          });
      }
      return r;
    };
  Rm.exports = NR;
});
var Nm = E((lD, Im) => {
  'use strict';
  var { dirname: Om } = require('path'),
    Tm = (r, e, t = void 0) =>
      t === e
        ? Promise.resolve()
        : r.statAsync(e).then(
            (n) => (n.isDirectory() ? t : void 0),
            (n) => (n.code === 'ENOENT' ? Tm(r, Om(e), e) : void 0)
          ),
    Cm = (r, e, t = void 0) => {
      if (t !== e)
        try {
          return r.statSync(e).isDirectory() ? t : void 0;
        } catch (n) {
          return n.code === 'ENOENT' ? Cm(r, Om(e), e) : void 0;
        }
    };
  Im.exports = { findMade: Tm, findMadeSync: Cm };
});
var hu = E((fD, Dm) => {
  'use strict';
  var { dirname: Am } = require('path'),
    lu = (r, e, t) => {
      e.recursive = !1;
      let n = Am(r);
      return n === r
        ? e.mkdirAsync(r, e).catch((i) => {
            if (i.code !== 'EISDIR') throw i;
          })
        : e.mkdirAsync(r, e).then(
            () => t || r,
            (i) => {
              if (i.code === 'ENOENT') return lu(n, e).then((s) => lu(r, e, s));
              if (i.code !== 'EEXIST' && i.code !== 'EROFS') throw i;
              return e.statAsync(r).then(
                (s) => {
                  if (s.isDirectory()) return t;
                  throw i;
                },
                () => {
                  throw i;
                }
              );
            }
          );
    },
    fu = (r, e, t) => {
      let n = Am(r);
      if (((e.recursive = !1), n === r))
        try {
          return e.mkdirSync(r, e);
        } catch (i) {
          if (i.code !== 'EISDIR') throw i;
          return;
        }
      try {
        return e.mkdirSync(r, e), t || r;
      } catch (i) {
        if (i.code === 'ENOENT') return fu(r, e, fu(n, e, t));
        if (i.code !== 'EEXIST' && i.code !== 'EROFS') throw i;
        try {
          if (!e.statSync(r).isDirectory()) throw i;
        } catch {
          throw i;
        }
      }
    };
  Dm.exports = { mkdirpManual: lu, mkdirpManualSync: fu };
});
var Pm = E((hD, Lm) => {
  'use strict';
  var { dirname: km } = require('path'),
    { findMade: AR, findMadeSync: DR } = Nm(),
    { mkdirpManual: kR, mkdirpManualSync: LR } = hu(),
    PR = (r, e) => (
      (e.recursive = !0),
      km(r) === r
        ? e.mkdirAsync(r, e)
        : AR(e, r).then((n) =>
            e
              .mkdirAsync(r, e)
              .then(() => n)
              .catch((i) => {
                if (i.code === 'ENOENT') return kR(r, e);
                throw i;
              })
          )
    ),
    FR = (r, e) => {
      if (((e.recursive = !0), km(r) === r)) return e.mkdirSync(r, e);
      let n = DR(e, r);
      try {
        return e.mkdirSync(r, e), n;
      } catch (i) {
        if (i.code === 'ENOENT') return LR(r, e);
        throw i;
      }
    };
  Lm.exports = { mkdirpNative: PR, mkdirpNativeSync: FR };
});
var qm = E((dD, Mm) => {
  'use strict';
  var Fm = require('fs'),
    UR = process.env.__TESTING_MKDIRP_NODE_VERSION__ || process.version,
    du = UR.replace(/^v/, '').split('.'),
    Um = +du[0] > 10 || (+du[0] == 10 && +du[1] >= 12),
    MR = Um ? (r) => r.mkdir === Fm.mkdir : () => !1,
    qR = Um ? (r) => r.mkdirSync === Fm.mkdirSync : () => !1;
  Mm.exports = { useNative: MR, useNativeSync: qR };
});
var zm = E((pD, Hm) => {
  'use strict';
  var xn = wm(),
    On = xm(),
    { mkdirpNative: Bm, mkdirpNativeSync: jm } = Pm(),
    { mkdirpManual: Gm, mkdirpManualSync: $m } = hu(),
    { useNative: BR, useNativeSync: jR } = qm(),
    Tn = (r, e) => ((r = On(r)), (e = xn(e)), BR(e) ? Bm(r, e) : Gm(r, e)),
    GR = (r, e) => ((r = On(r)), (e = xn(e)), jR(e) ? jm(r, e) : $m(r, e));
  Tn.sync = GR;
  Tn.native = (r, e) => Bm(On(r), xn(e));
  Tn.manual = (r, e) => Gm(On(r), xn(e));
  Tn.nativeSync = (r, e) => jm(On(r), xn(e));
  Tn.manualSync = (r, e) => $m(On(r), xn(e));
  Hm.exports = Tn;
});
var Zm = E((mD, Jm) => {
  'use strict';
  var st = require('fs'),
    Br = require('path'),
    $R = st.lchown ? 'lchown' : 'chown',
    HR = st.lchownSync ? 'lchownSync' : 'chownSync',
    Wm =
      st.lchown &&
      !process.version.match(/v1[1-9]+\./) &&
      !process.version.match(/v10\.[6-9]/),
    Vm = (r, e, t) => {
      try {
        return st[HR](r, e, t);
      } catch (n) {
        if (n.code !== 'ENOENT') throw n;
      }
    },
    zR = (r, e, t) => {
      try {
        return st.chownSync(r, e, t);
      } catch (n) {
        if (n.code !== 'ENOENT') throw n;
      }
    },
    VR = Wm
      ? (r, e, t, n) => (i) => {
          !i || i.code !== 'EISDIR' ? n(i) : st.chown(r, e, t, n);
        }
      : (r, e, t, n) => n,
    pu = Wm
      ? (r, e, t) => {
          try {
            return Vm(r, e, t);
          } catch (n) {
            if (n.code !== 'EISDIR') throw n;
            zR(r, e, t);
          }
        }
      : (r, e, t) => Vm(r, e, t),
    WR = process.version,
    Xm = (r, e, t) => st.readdir(r, e, t),
    XR = (r, e) => st.readdirSync(r, e);
  /^v4\./.test(WR) && (Xm = (r, e, t) => st.readdir(r, t));
  var no = (r, e, t, n) => {
      st[$R](
        r,
        e,
        t,
        VR(r, e, t, (i) => {
          n(i && i.code !== 'ENOENT' ? i : null);
        })
      );
    },
    Km = (r, e, t, n, i) => {
      if (typeof e == 'string')
        return st.lstat(Br.resolve(r, e), (s, o) => {
          if (s) return i(s.code !== 'ENOENT' ? s : null);
          (o.name = e), Km(r, o, t, n, i);
        });
      if (e.isDirectory())
        mu(Br.resolve(r, e.name), t, n, (s) => {
          if (s) return i(s);
          let o = Br.resolve(r, e.name);
          no(o, t, n, i);
        });
      else {
        let s = Br.resolve(r, e.name);
        no(s, t, n, i);
      }
    },
    mu = (r, e, t, n) => {
      Xm(r, { withFileTypes: !0 }, (i, s) => {
        if (i) {
          if (i.code === 'ENOENT') return n();
          if (i.code !== 'ENOTDIR' && i.code !== 'ENOTSUP') return n(i);
        }
        if (i || !s.length) return no(r, e, t, n);
        let o = s.length,
          a = null,
          c = (l) => {
            if (!a) {
              if (l) return n((a = l));
              if (--o === 0) return no(r, e, t, n);
            }
          };
        s.forEach((l) => Km(r, l, e, t, c));
      });
    },
    KR = (r, e, t, n) => {
      if (typeof e == 'string')
        try {
          let i = st.lstatSync(Br.resolve(r, e));
          (i.name = e), (e = i);
        } catch (i) {
          if (i.code === 'ENOENT') return;
          throw i;
        }
      e.isDirectory() && Ym(Br.resolve(r, e.name), t, n),
        pu(Br.resolve(r, e.name), t, n);
    },
    Ym = (r, e, t) => {
      let n;
      try {
        n = XR(r, { withFileTypes: !0 });
      } catch (i) {
        if (i.code === 'ENOENT') return;
        if (i.code === 'ENOTDIR' || i.code === 'ENOTSUP') return pu(r, e, t);
        throw i;
      }
      return n && n.length && n.forEach((i) => KR(r, i, e, t)), pu(r, e, t);
    };
  Jm.exports = mu;
  mu.sync = Ym;
});
var ry = E((yD, yu) => {
  'use strict';
  var Qm = zm(),
    ot = require('fs'),
    io = require('path'),
    ey = Zm(),
    ht = fn(),
    so = class extends Error {
      constructor(e, t) {
        super('Cannot extract through symbolic link'),
          (this.path = t),
          (this.symlink = e);
      }
      get name() {
        return 'SylinkError';
      }
    },
    oo = class extends Error {
      constructor(e, t) {
        super(t + ": Cannot cd into '" + e + "'"),
          (this.path = e),
          (this.code = t);
      }
      get name() {
        return 'CwdError';
      }
    },
    ao = (r, e) => r.get(ht(e)),
    pi = (r, e, t) => r.set(ht(e), t),
    YR = (r, e) => {
      ot.stat(r, (t, n) => {
        (t || !n.isDirectory()) && (t = new oo(r, (t && t.code) || 'ENOTDIR')),
          e(t);
      });
    };
  yu.exports = (r, e, t) => {
    r = ht(r);
    let n = e.umask,
      i = e.mode | 448,
      s = (i & n) !== 0,
      o = e.uid,
      a = e.gid,
      c =
        typeof o == 'number' &&
        typeof a == 'number' &&
        (o !== e.processUid || a !== e.processGid),
      l = e.preserve,
      u = e.unlink,
      f = e.cache,
      h = ht(e.cwd),
      d = (p, w) => {
        p
          ? t(p)
          : (pi(f, r, !0),
            w && c ? ey(w, o, a, (k) => d(k)) : s ? ot.chmod(r, i, t) : t());
      };
    if (f && ao(f, r) === !0) return d();
    if (r === h) return YR(r, d);
    if (l) return Qm(r, { mode: i }).then((p) => d(null, p), d);
    let v = ht(io.relative(h, r)).split('/');
    co(h, v, i, f, u, h, null, d);
  };
  var co = (r, e, t, n, i, s, o, a) => {
      if (!e.length) return a(null, o);
      let c = e.shift(),
        l = ht(io.resolve(r + '/' + c));
      if (ao(n, l)) return co(l, e, t, n, i, s, o, a);
      ot.mkdir(l, t, ty(l, e, t, n, i, s, o, a));
    },
    ty = (r, e, t, n, i, s, o, a) => (c) => {
      c
        ? ot.lstat(r, (l, u) => {
            if (l) (l.path = l.path && ht(l.path)), a(l);
            else if (u.isDirectory()) co(r, e, t, n, i, s, o, a);
            else if (i)
              ot.unlink(r, (f) => {
                if (f) return a(f);
                ot.mkdir(r, t, ty(r, e, t, n, i, s, o, a));
              });
            else {
              if (u.isSymbolicLink())
                return a(new so(r, r + '/' + e.join('/')));
              a(c);
            }
          })
        : ((o = o || r), co(r, e, t, n, i, s, o, a));
    },
    JR = (r) => {
      let e = !1,
        t = 'ENOTDIR';
      try {
        e = ot.statSync(r).isDirectory();
      } catch (n) {
        t = n.code;
      } finally {
        if (!e) throw new oo(r, t);
      }
    };
  yu.exports.sync = (r, e) => {
    r = ht(r);
    let t = e.umask,
      n = e.mode | 448,
      i = (n & t) !== 0,
      s = e.uid,
      o = e.gid,
      a =
        typeof s == 'number' &&
        typeof o == 'number' &&
        (s !== e.processUid || o !== e.processGid),
      c = e.preserve,
      l = e.unlink,
      u = e.cache,
      f = ht(e.cwd),
      h = (p) => {
        pi(u, r, !0), p && a && ey.sync(p, s, o), i && ot.chmodSync(r, n);
      };
    if (u && ao(u, r) === !0) return h();
    if (r === f) return JR(f), h();
    if (c) return h(Qm.sync(r, n));
    let y = ht(io.relative(f, r)).split('/'),
      v = null;
    for (let p = y.shift(), w = f; p && (w += '/' + p); p = y.shift())
      if (((w = ht(io.resolve(w))), !ao(u, w)))
        try {
          ot.mkdirSync(w, n), (v = v || w), pi(u, w, !0);
        } catch {
          let O = ot.lstatSync(w);
          if (O.isDirectory()) {
            pi(u, w, !0);
            continue;
          } else if (l) {
            ot.unlinkSync(w), ot.mkdirSync(w, n), (v = v || w), pi(u, w, !0);
            continue;
          } else if (O.isSymbolicLink())
            return new so(w, w + '/' + y.join('/'));
        }
    return h(v);
  };
});
var gu = E((ED, ny) => {
  'use strict';
  var Eu = Object.create(null),
    { hasOwnProperty: ZR } = Object.prototype;
  ny.exports = (r) => (ZR.call(Eu, r) || (Eu[r] = r.normalize('NFKD')), Eu[r]);
});
var ay = E((gD, oy) => {
  'use strict';
  var iy = require('assert'),
    QR = gu(),
    ex = pn(),
    { join: sy } = require('path'),
    tx = process.env.TESTING_TAR_FAKE_PLATFORM || process.platform,
    rx = tx === 'win32';
  oy.exports = () => {
    let r = new Map(),
      e = new Map(),
      t = (l) =>
        l
          .split('/')
          .slice(0, -1)
          .reduce(
            (f, h) => (
              f.length && (h = sy(f[f.length - 1], h)), f.push(h || '/'), f
            ),
            []
          ),
      n = new Set(),
      i = (l) => {
        let u = e.get(l);
        if (!u) throw new Error('function does not have any path reservations');
        return {
          paths: u.paths.map((f) => r.get(f)),
          dirs: [...u.dirs].map((f) => r.get(f)),
        };
      },
      s = (l) => {
        let { paths: u, dirs: f } = i(l);
        return (
          u.every((h) => h[0] === l) &&
          f.every((h) => h[0] instanceof Set && h[0].has(l))
        );
      },
      o = (l) => (n.has(l) || !s(l) ? !1 : (n.add(l), l(() => a(l)), !0)),
      a = (l) => {
        if (!n.has(l)) return !1;
        let { paths: u, dirs: f } = e.get(l),
          h = new Set();
        return (
          u.forEach((d) => {
            let y = r.get(d);
            iy.equal(y[0], l),
              y.length === 1
                ? r.delete(d)
                : (y.shift(),
                  typeof y[0] == 'function'
                    ? h.add(y[0])
                    : y[0].forEach((v) => h.add(v)));
          }),
          f.forEach((d) => {
            let y = r.get(d);
            iy(y[0] instanceof Set),
              y[0].size === 1 && y.length === 1
                ? r.delete(d)
                : y[0].size === 1
                ? (y.shift(), h.add(y[0]))
                : y[0].delete(l);
          }),
          n.delete(l),
          h.forEach((d) => o(d)),
          !0
        );
      };
    return {
      check: s,
      reserve: (l, u) => {
        l = rx
          ? ['win32 parallelization disabled']
          : l.map((h) => QR(ex(sy(h))).toLowerCase());
        let f = new Set(l.map((h) => t(h)).reduce((h, d) => h.concat(d)));
        return (
          e.set(u, { dirs: f, paths: l }),
          l.forEach((h) => {
            let d = r.get(h);
            d ? d.push(u) : r.set(h, [u]);
          }),
          f.forEach((h) => {
            let d = r.get(h);
            d
              ? d[d.length - 1] instanceof Set
                ? d[d.length - 1].add(u)
                : d.push(new Set([u]))
              : r.set(h, [new Set([u])]);
          }),
          o(u)
        );
      },
    };
  };
});
var ly = E((_D, uy) => {
  'use strict';
  var nx = process.env.__FAKE_PLATFORM__ || process.platform,
    ix = nx === 'win32',
    sx = global.__FAKE_TESTING_FS__ || require('fs'),
    {
      O_CREAT: ox,
      O_TRUNC: ax,
      O_WRONLY: cx,
      UV_FS_O_FILEMAP: cy = 0,
    } = sx.constants,
    ux = ix && !!cy,
    lx = 512 * 1024,
    fx = cy | ax | ox | cx;
  uy.exports = ux ? (r) => (r < lx ? fx : 'w') : () => 'w';
});
var Tu = E((bD, Ry) => {
  'use strict';
  var hx = require('assert'),
    dx = eo(),
    Q = require('fs'),
    px = wn(),
    jt = require('path'),
    vy = ry(),
    fy = Oc(),
    mx = ay(),
    yx = Tc(),
    Ze = fn(),
    Ex = pn(),
    gx = gu(),
    hy = Symbol('onEntry'),
    vu = Symbol('checkFs'),
    dy = Symbol('checkFs2'),
    fo = Symbol('pruneCache'),
    Su = Symbol('isReusable'),
    at = Symbol('makeFs'),
    wu = Symbol('file'),
    Ru = Symbol('directory'),
    ho = Symbol('link'),
    py = Symbol('symlink'),
    my = Symbol('hardlink'),
    yy = Symbol('unsupported'),
    Ey = Symbol('checkPath'),
    cr = Symbol('mkdir'),
    De = Symbol('onError'),
    uo = Symbol('pending'),
    gy = Symbol('pend'),
    Cn = Symbol('unpend'),
    _u = Symbol('ended'),
    bu = Symbol('maybeClose'),
    xu = Symbol('skip'),
    mi = Symbol('doChown'),
    yi = Symbol('uid'),
    Ei = Symbol('gid'),
    gi = Symbol('checkedCwd'),
    Sy = require('crypto'),
    wy = ly(),
    _x = process.env.TESTING_TAR_FAKE_PLATFORM || process.platform,
    _i = _x === 'win32',
    bx = (r, e) => {
      if (!_i) return Q.unlink(r, e);
      let t = r + '.DELETE.' + Sy.randomBytes(16).toString('hex');
      Q.rename(r, t, (n) => {
        if (n) return e(n);
        Q.unlink(t, e);
      });
    },
    vx = (r) => {
      if (!_i) return Q.unlinkSync(r);
      let e = r + '.DELETE.' + Sy.randomBytes(16).toString('hex');
      Q.renameSync(r, e), Q.unlinkSync(e);
    },
    _y = (r, e, t) => (r === r >>> 0 ? r : e === e >>> 0 ? e : t),
    by = (r) => gx(Ex(Ze(r))).toLowerCase(),
    Sx = (r, e) => {
      e = by(e);
      for (let t of r.keys()) {
        let n = by(t);
        (n === e || n.indexOf(e + '/') === 0) && r.delete(t);
      }
    },
    wx = (r) => {
      for (let e of r.keys()) r.delete(e);
    },
    bi = class extends dx {
      constructor(e) {
        if (
          (e || (e = {}),
          (e.ondone = (t) => {
            (this[_u] = !0), this[bu]();
          }),
          super(e),
          (this[gi] = !1),
          (this.reservations = mx()),
          (this.transform =
            typeof e.transform == 'function' ? e.transform : null),
          (this.writable = !0),
          (this.readable = !1),
          (this[uo] = 0),
          (this[_u] = !1),
          (this.dirCache = e.dirCache || new Map()),
          typeof e.uid == 'number' || typeof e.gid == 'number')
        ) {
          if (typeof e.uid != 'number' || typeof e.gid != 'number')
            throw new TypeError('cannot set owner without number uid and gid');
          if (e.preserveOwner)
            throw new TypeError(
              'cannot preserve owner in archive and also set owner explicitly'
            );
          (this.uid = e.uid), (this.gid = e.gid), (this.setOwner = !0);
        } else (this.uid = null), (this.gid = null), (this.setOwner = !1);
        e.preserveOwner === void 0 && typeof e.uid != 'number'
          ? (this.preserveOwner = process.getuid && process.getuid() === 0)
          : (this.preserveOwner = !!e.preserveOwner),
          (this.processUid =
            (this.preserveOwner || this.setOwner) && process.getuid
              ? process.getuid()
              : null),
          (this.processGid =
            (this.preserveOwner || this.setOwner) && process.getgid
              ? process.getgid()
              : null),
          (this.forceChown = e.forceChown === !0),
          (this.win32 = !!e.win32 || _i),
          (this.newer = !!e.newer),
          (this.keep = !!e.keep),
          (this.noMtime = !!e.noMtime),
          (this.preservePaths = !!e.preservePaths),
          (this.unlink = !!e.unlink),
          (this.cwd = Ze(jt.resolve(e.cwd || process.cwd()))),
          (this.strip = +e.strip || 0),
          (this.processUmask = e.noChmod ? 0 : process.umask()),
          (this.umask =
            typeof e.umask == 'number' ? e.umask : this.processUmask),
          (this.dmode = e.dmode || 511 & ~this.umask),
          (this.fmode = e.fmode || 438 & ~this.umask),
          this.on('entry', (t) => this[hy](t));
      }
      warn(e, t, n = {}) {
        return (
          (e === 'TAR_BAD_ARCHIVE' || e === 'TAR_ABORT') &&
            (n.recoverable = !1),
          super.warn(e, t, n)
        );
      }
      [bu]() {
        this[_u] &&
          this[uo] === 0 &&
          (this.emit('prefinish'),
          this.emit('finish'),
          this.emit('end'),
          this.emit('close'));
      }
      [Ey](e) {
        if (this.strip) {
          let t = Ze(e.path).split('/');
          if (t.length < this.strip) return !1;
          if (((e.path = t.slice(this.strip).join('/')), e.type === 'Link')) {
            let n = Ze(e.linkpath).split('/');
            if (n.length >= this.strip)
              e.linkpath = n.slice(this.strip).join('/');
            else return !1;
          }
        }
        if (!this.preservePaths) {
          let t = Ze(e.path),
            n = t.split('/');
          if (n.includes('..') || (_i && /^[a-z]:\.\.$/i.test(n[0])))
            return (
              this.warn('TAR_ENTRY_ERROR', "path contains '..'", {
                entry: e,
                path: t,
              }),
              !1
            );
          let [i, s] = yx(t);
          i &&
            ((e.path = s),
            this.warn('TAR_ENTRY_INFO', `stripping ${i} from absolute path`, {
              entry: e,
              path: t,
            }));
        }
        if (
          (jt.isAbsolute(e.path)
            ? (e.absolute = Ze(jt.resolve(e.path)))
            : (e.absolute = Ze(jt.resolve(this.cwd, e.path))),
          !this.preservePaths &&
            e.absolute.indexOf(this.cwd + '/') !== 0 &&
            e.absolute !== this.cwd)
        )
          return (
            this.warn('TAR_ENTRY_ERROR', 'path escaped extraction target', {
              entry: e,
              path: Ze(e.path),
              resolvedPath: e.absolute,
              cwd: this.cwd,
            }),
            !1
          );
        if (
          e.absolute === this.cwd &&
          e.type !== 'Directory' &&
          e.type !== 'GNUDumpDir'
        )
          return !1;
        if (this.win32) {
          let { root: t } = jt.win32.parse(e.absolute);
          e.absolute = t + fy.encode(e.absolute.substr(t.length));
          let { root: n } = jt.win32.parse(e.path);
          e.path = n + fy.encode(e.path.substr(n.length));
        }
        return !0;
      }
      [hy](e) {
        if (!this[Ey](e)) return e.resume();
        switch ((hx.equal(typeof e.absolute, 'string'), e.type)) {
          case 'Directory':
          case 'GNUDumpDir':
            e.mode && (e.mode = e.mode | 448);
          case 'File':
          case 'OldFile':
          case 'ContiguousFile':
          case 'Link':
          case 'SymbolicLink':
            return this[vu](e);
          case 'CharacterDevice':
          case 'BlockDevice':
          case 'FIFO':
          default:
            return this[yy](e);
        }
      }
      [De](e, t) {
        e.name === 'CwdError'
          ? this.emit('error', e)
          : (this.warn('TAR_ENTRY_ERROR', e, { entry: t }),
            this[Cn](),
            t.resume());
      }
      [cr](e, t, n) {
        vy(
          Ze(e),
          {
            uid: this.uid,
            gid: this.gid,
            processUid: this.processUid,
            processGid: this.processGid,
            umask: this.processUmask,
            preserve: this.preservePaths,
            unlink: this.unlink,
            cache: this.dirCache,
            cwd: this.cwd,
            mode: t,
            noChmod: this.noChmod,
          },
          n
        );
      }
      [mi](e) {
        return (
          this.forceChown ||
          (this.preserveOwner &&
            ((typeof e.uid == 'number' && e.uid !== this.processUid) ||
              (typeof e.gid == 'number' && e.gid !== this.processGid))) ||
          (typeof this.uid == 'number' && this.uid !== this.processUid) ||
          (typeof this.gid == 'number' && this.gid !== this.processGid)
        );
      }
      [yi](e) {
        return _y(this.uid, e.uid, this.processUid);
      }
      [Ei](e) {
        return _y(this.gid, e.gid, this.processGid);
      }
      [wu](e, t) {
        let n = e.mode & 4095 || this.fmode,
          i = new px.WriteStream(e.absolute, {
            flags: wy(e.size),
            mode: n,
            autoClose: !1,
          });
        i.on('error', (c) => {
          i.fd && Q.close(i.fd, () => {}),
            (i.write = () => !0),
            this[De](c, e),
            t();
        });
        let s = 1,
          o = (c) => {
            if (c) {
              i.fd && Q.close(i.fd, () => {}), this[De](c, e), t();
              return;
            }
            --s === 0 &&
              Q.close(i.fd, (l) => {
                l ? this[De](l, e) : this[Cn](), t();
              });
          };
        i.on('finish', (c) => {
          let l = e.absolute,
            u = i.fd;
          if (e.mtime && !this.noMtime) {
            s++;
            let f = e.atime || new Date(),
              h = e.mtime;
            Q.futimes(u, f, h, (d) =>
              d ? Q.utimes(l, f, h, (y) => o(y && d)) : o()
            );
          }
          if (this[mi](e)) {
            s++;
            let f = this[yi](e),
              h = this[Ei](e);
            Q.fchown(u, f, h, (d) =>
              d ? Q.chown(l, f, h, (y) => o(y && d)) : o()
            );
          }
          o();
        });
        let a = (this.transform && this.transform(e)) || e;
        a !== e &&
          (a.on('error', (c) => {
            this[De](c, e), t();
          }),
          e.pipe(a)),
          a.pipe(i);
      }
      [Ru](e, t) {
        let n = e.mode & 4095 || this.dmode;
        this[cr](e.absolute, n, (i) => {
          if (i) {
            this[De](i, e), t();
            return;
          }
          let s = 1,
            o = (a) => {
              --s === 0 && (t(), this[Cn](), e.resume());
            };
          e.mtime &&
            !this.noMtime &&
            (s++, Q.utimes(e.absolute, e.atime || new Date(), e.mtime, o)),
            this[mi](e) &&
              (s++, Q.chown(e.absolute, this[yi](e), this[Ei](e), o)),
            o();
        });
      }
      [yy](e) {
        (e.unsupported = !0),
          this.warn(
            'TAR_ENTRY_UNSUPPORTED',
            `unsupported entry type: ${e.type}`,
            { entry: e }
          ),
          e.resume();
      }
      [py](e, t) {
        this[ho](e, e.linkpath, 'symlink', t);
      }
      [my](e, t) {
        let n = Ze(jt.resolve(this.cwd, e.linkpath));
        this[ho](e, n, 'link', t);
      }
      [gy]() {
        this[uo]++;
      }
      [Cn]() {
        this[uo]--, this[bu]();
      }
      [xu](e) {
        this[Cn](), e.resume();
      }
      [Su](e, t) {
        return (
          e.type === 'File' && !this.unlink && t.isFile() && t.nlink <= 1 && !_i
        );
      }
      [vu](e) {
        this[gy]();
        let t = [e.path];
        e.linkpath && t.push(e.linkpath),
          this.reservations.reserve(t, (n) => this[dy](e, n));
      }
      [fo](e) {
        e.type === 'SymbolicLink'
          ? wx(this.dirCache)
          : e.type !== 'Directory' && Sx(this.dirCache, e.absolute);
      }
      [dy](e, t) {
        this[fo](e);
        let n = (a) => {
            this[fo](e), t(a);
          },
          i = () => {
            this[cr](this.cwd, this.dmode, (a) => {
              if (a) {
                this[De](a, e), n();
                return;
              }
              (this[gi] = !0), s();
            });
          },
          s = () => {
            if (e.absolute !== this.cwd) {
              let a = Ze(jt.dirname(e.absolute));
              if (a !== this.cwd)
                return this[cr](a, this.dmode, (c) => {
                  if (c) {
                    this[De](c, e), n();
                    return;
                  }
                  o();
                });
            }
            o();
          },
          o = () => {
            Q.lstat(e.absolute, (a, c) => {
              if (c && (this.keep || (this.newer && c.mtime > e.mtime))) {
                this[xu](e), n();
                return;
              }
              if (a || this[Su](e, c)) return this[at](null, e, n);
              if (c.isDirectory()) {
                if (e.type === 'Directory') {
                  let l = !this.noChmod && e.mode && (c.mode & 4095) !== e.mode,
                    u = (f) => this[at](f, e, n);
                  return l ? Q.chmod(e.absolute, e.mode, u) : u();
                }
                if (e.absolute !== this.cwd)
                  return Q.rmdir(e.absolute, (l) => this[at](l, e, n));
              }
              if (e.absolute === this.cwd) return this[at](null, e, n);
              bx(e.absolute, (l) => this[at](l, e, n));
            });
          };
        this[gi] ? s() : i();
      }
      [at](e, t, n) {
        if (e) {
          this[De](e, t), n();
          return;
        }
        switch (t.type) {
          case 'File':
          case 'OldFile':
          case 'ContiguousFile':
            return this[wu](t, n);
          case 'Link':
            return this[my](t, n);
          case 'SymbolicLink':
            return this[py](t, n);
          case 'Directory':
          case 'GNUDumpDir':
            return this[Ru](t, n);
        }
      }
      [ho](e, t, n, i) {
        Q[n](t, e.absolute, (s) => {
          s ? this[De](s, e) : (this[Cn](), e.resume()), i();
        });
      }
    },
    lo = (r) => {
      try {
        return [null, r()];
      } catch (e) {
        return [e, null];
      }
    },
    Ou = class extends bi {
      [at](e, t) {
        return super[at](e, t, () => {});
      }
      [vu](e) {
        if ((this[fo](e), !this[gi])) {
          let s = this[cr](this.cwd, this.dmode);
          if (s) return this[De](s, e);
          this[gi] = !0;
        }
        if (e.absolute !== this.cwd) {
          let s = Ze(jt.dirname(e.absolute));
          if (s !== this.cwd) {
            let o = this[cr](s, this.dmode);
            if (o) return this[De](o, e);
          }
        }
        let [t, n] = lo(() => Q.lstatSync(e.absolute));
        if (n && (this.keep || (this.newer && n.mtime > e.mtime)))
          return this[xu](e);
        if (t || this[Su](e, n)) return this[at](null, e);
        if (n.isDirectory()) {
          if (e.type === 'Directory') {
            let o = !this.noChmod && e.mode && (n.mode & 4095) !== e.mode,
              [a] = o
                ? lo(() => {
                    Q.chmodSync(e.absolute, e.mode);
                  })
                : [];
            return this[at](a, e);
          }
          let [s] = lo(() => Q.rmdirSync(e.absolute));
          this[at](s, e);
        }
        let [i] = e.absolute === this.cwd ? [] : lo(() => vx(e.absolute));
        this[at](i, e);
      }
      [wu](e, t) {
        let n = e.mode & 4095 || this.fmode,
          i = (a) => {
            let c;
            try {
              Q.closeSync(s);
            } catch (l) {
              c = l;
            }
            (a || c) && this[De](a || c, e), t();
          },
          s;
        try {
          s = Q.openSync(e.absolute, wy(e.size), n);
        } catch (a) {
          return i(a);
        }
        let o = (this.transform && this.transform(e)) || e;
        o !== e && (o.on('error', (a) => this[De](a, e)), e.pipe(o)),
          o.on('data', (a) => {
            try {
              Q.writeSync(s, a, 0, a.length);
            } catch (c) {
              i(c);
            }
          }),
          o.on('end', (a) => {
            let c = null;
            if (e.mtime && !this.noMtime) {
              let l = e.atime || new Date(),
                u = e.mtime;
              try {
                Q.futimesSync(s, l, u);
              } catch (f) {
                try {
                  Q.utimesSync(e.absolute, l, u);
                } catch {
                  c = f;
                }
              }
            }
            if (this[mi](e)) {
              let l = this[yi](e),
                u = this[Ei](e);
              try {
                Q.fchownSync(s, l, u);
              } catch (f) {
                try {
                  Q.chownSync(e.absolute, l, u);
                } catch {
                  c = c || f;
                }
              }
            }
            i(c);
          });
      }
      [Ru](e, t) {
        let n = e.mode & 4095 || this.dmode,
          i = this[cr](e.absolute, n);
        if (i) {
          this[De](i, e), t();
          return;
        }
        if (e.mtime && !this.noMtime)
          try {
            Q.utimesSync(e.absolute, e.atime || new Date(), e.mtime);
          } catch {}
        if (this[mi](e))
          try {
            Q.chownSync(e.absolute, this[yi](e), this[Ei](e));
          } catch {}
        t(), e.resume();
      }
      [cr](e, t) {
        try {
          return vy.sync(Ze(e), {
            uid: this.uid,
            gid: this.gid,
            processUid: this.processUid,
            processGid: this.processGid,
            umask: this.processUmask,
            preserve: this.preservePaths,
            unlink: this.unlink,
            cache: this.dirCache,
            cwd: this.cwd,
            mode: t,
          });
        } catch (n) {
          return n;
        }
      }
      [ho](e, t, n, i) {
        try {
          Q[n + 'Sync'](t, e.absolute), i(), e.resume();
        } catch (s) {
          return this[De](s, e);
        }
      }
    };
  bi.Sync = Ou;
  Ry.exports = bi;
});
var Iy = E((vD, Cy) => {
  'use strict';
  var Rx = on(),
    po = Tu(),
    Oy = require('fs'),
    Ty = wn(),
    xy = require('path'),
    Cu = pn();
  Cy.exports = (r, e, t) => {
    typeof r == 'function'
      ? ((t = r), (e = null), (r = {}))
      : Array.isArray(r) && ((e = r), (r = {})),
      typeof e == 'function' && ((t = e), (e = null)),
      e ? (e = Array.from(e)) : (e = []);
    let n = Rx(r);
    if (n.sync && typeof t == 'function')
      throw new TypeError('callback not supported for sync tar functions');
    if (!n.file && typeof t == 'function')
      throw new TypeError('callback only supported with file option');
    return (
      e.length && xx(n, e),
      n.file && n.sync ? Ox(n) : n.file ? Tx(n, t) : n.sync ? Cx(n) : Ix(n)
    );
  };
  var xx = (r, e) => {
      let t = new Map(e.map((s) => [Cu(s), !0])),
        n = r.filter,
        i = (s, o) => {
          let a = o || xy.parse(s).root || '.',
            c = s === a ? !1 : t.has(s) ? t.get(s) : i(xy.dirname(s), a);
          return t.set(s, c), c;
        };
      r.filter = n ? (s, o) => n(s, o) && i(Cu(s)) : (s) => i(Cu(s));
    },
    Ox = (r) => {
      let e = new po.Sync(r),
        t = r.file,
        n = Oy.statSync(t),
        i = r.maxReadSize || 16 * 1024 * 1024;
      new Ty.ReadStreamSync(t, { readSize: i, size: n.size }).pipe(e);
    },
    Tx = (r, e) => {
      let t = new po(r),
        n = r.maxReadSize || 16 * 1024 * 1024,
        i = r.file,
        s = new Promise((o, a) => {
          t.on('error', a),
            t.on('close', o),
            Oy.stat(i, (c, l) => {
              if (c) a(c);
              else {
                let u = new Ty.ReadStream(i, { readSize: n, size: l.size });
                u.on('error', a), u.pipe(t);
              }
            });
        });
      return e ? s.then(e, e) : s;
    },
    Cx = (r) => new po.Sync(r),
    Ix = (r) => new po(r);
});
var Ny = E((fe) => {
  'use strict';
  fe.c = fe.create = fm();
  fe.r = fe.replace = uu();
  fe.t = fe.list = to();
  fe.u = fe.update = bm();
  fe.x = fe.extract = Iy();
  fe.Pack = Bs();
  fe.Unpack = Tu();
  fe.Parse = eo();
  fe.ReadEntry = ws();
  fe.WriteEntry = Uc();
  fe.Header = dn();
  fe.Pax = xs();
  fe.types = _c();
});
var Dy,
  ke,
  Gr,
  ky,
  Ay,
  mo,
  jr,
  ur,
  yo = B(() => {
    'use strict';
    (Dy = require('crypto')),
      (ke = require('fs')),
      (Gr = br(require('path'))),
      (ky = require('path'));
    gt();
    ie();
    Dt();
    Jn();
    (Ay = Ha()),
      (mo = Ny()),
      ({ output: jr } = Y()),
      (ur = class {
        constructor(e, t, n, i) {
          this.encryption = e;
          this.errorReporter = t;
          this.context = i;
          this.storedHashes = [];
          this.axiosConfigBuilder = (e) => e;
          if (n.customProxyConfigPath) {
            let { fileServerProxyConfig: s } = require((0, ky.join)(
              process.cwd(),
              n.customProxyConfigPath
            ));
            this.axiosConfigBuilder = s ?? this.axiosConfigBuilder;
          }
        }
        async retrieve(e, t, n) {
          process.env.NX_CLOUD_DEBUG_URLS == 'true' &&
            jr.note({
              title: `Nx Cloud: Downloading ${e}`,
              bodyLines: [`RETRIEVAL URL: ${t}`],
            });
          let i = this.createFileName(e, n),
            s = this.createCommitFilePath(e, n);
          try {
            await this.downloadFile(t, i, s),
              this.createCommitFile(s),
              U && jr.note({ title: `Nx Cloud: Downloaded ${e}` });
          } catch (o) {
            let a = o.message || o.toString(),
              c = `Failed to download or untar the cached artifacts for ${e}. Context: ${this.context}. Error: ${a}.`;
            throw (
              ((this.context === 'dte-agent' || this.context === 'dte-main') &&
                (jr.note({
                  title: `An error occurred while trying to download artifacts in the DTE context. Hash: ${e}.`,
                  bodyLines: [
                    '- Please update the nx-cloud package to the latest version.',
                    '- Please update the nx package to 15.8.9 or higher. You can do it without updating the plugins.',
                    '- If you are not able to update the nx package, and you are passing --configuration to a run-many or an affected command, define that configuration for all the projects.',
                  ],
                }),
                process.env.NX_CLOUD_DEBUG_URLS == 'true' &&
                  jr.note({ title: `URL: ${e}` })),
              await this.errorReporter.reportError(c),
              new Error(c))
            );
          }
        }
        async store(e, t, n) {
          process.env.NX_CLOUD_DEBUG_URLS == 'true' &&
            jr.note({
              title: `Nx Cloud: Storing ${e}`,
              bodyLines: [`STORAGE URL: ${t}`],
            });
          let i;
          if (process.env.NRWL_INTERNAL_TAR_DEBUG) {
            let o = 1,
              a = !1,
              c = [];
            for (; o <= 3 && !a; ) {
              i = await this.createFile(e, n);
              let l = `/tmp/${e}/attempt${o}`;
              (0, ke.mkdirSync)(l, { recursive: !0 });
              try {
                let u = (0, ke.createReadStream)(i).pipe(mo.x({ cwd: l }));
                await this.convertStreamIntoPromise(u), (a = !0);
              } catch (u) {
                console.error(u), await tt(5e3);
              }
              c.push({ attempt: o, success: a }), o++;
            }
            if (c.some((l) => !l.success)) {
              console.error(JSON.stringify(c, null, 2));
              let l = c
                .filter((u) => !u.success)
                .map((u) => u.attempt)
                .join(', ');
              throw new Error(
                `Untar failed for hash ${e} in attempts ${l} out of ${c.length}`
              );
            }
          } else i = await this.createFile(e, n);
          await this.uploadFile(t, i),
            this.storedHashes.push(e),
            U && jr.note({ title: `Nx Cloud: Stored ${e}` });
        }
        createFileName(e, t) {
          return Gr.join(t, `${e}.tar.gz`);
        }
        async downloadFile(e, t, n) {
          var o;
          let i = Ce('retrieveFile'),
            s;
          try {
            let a = new URL(e),
              c = a.origin + a.pathname,
              l = {};
            for (let [u, f] of a.searchParams.entries()) l[u] = f;
            (s = await ce(() =>
              Ay(
                c,
                this.axiosConfigBuilder({
                  method: 'GET',
                  responseType: 'stream',
                  maxContentLength: Et ? Kn : Yn,
                  maxBodyLength: Et ? Kn : Yn,
                  timeout: Et ? Xn : 6e4,
                  params: l,
                })
              )
            )),
              i.recordMetric({
                ...re(s),
                payloadSize: s.data.headers['content-length'],
              });
          } catch (a) {
            throw (
              (i.recordMetric(
                (o = a == null ? void 0 : a.axiosException) != null &&
                  o.response
                  ? re(a.axiosException.response)
                  : Ie
              ),
              a)
            );
          }
          if ((0, ke.existsSync)(t)) {
            let a = 0;
            for (; a++ < 50; ) {
              if ((0, ke.existsSync)(n)) return;
              await tt(500);
            }
          }
          if (this.encryption.hasEncryption()) {
            await new Promise((c) => {
              s.data
                .pipe((0, ke.createWriteStream)(t))
                .on('close', () => c(null));
            }),
              this.encryption.decryptFile(t);
            let a = (0, ke.createReadStream)(t).pipe(
              mo.x({ cwd: Gr.dirname(t) })
            );
            return this.convertStreamIntoPromise(a);
          } else {
            let a = s.data.pipe(mo.x({ cwd: Gr.dirname(t) }));
            return this.convertStreamIntoPromise(a);
          }
        }
        convertStreamIntoPromise(e) {
          return new Promise((t, n) => {
            e.on('error', (i) => {
              i.tarCode === 'TAR_ABORT' &&
              i.message.indexOf('incorrect header check') > -1
                ? (console.warn(
                    'FileStorage: Decompression OK, Trailing garbage ignored.'
                  ),
                  t(null))
                : n(i);
            }),
              e.on('close', () => t(null));
          });
        }
        createCommitFile(e) {
          (0, ke.writeFileSync)(e, 'true');
        }
        createCommitFilePath(e, t) {
          return Gr.join(t, `${e}.commit`);
        }
        async createFile(e, t) {
          let n = this.createFileName(e, t);
          try {
            (0, ke.unlinkSync)(Gr.join(t, e, 'source'));
          } catch {}
          return (
            await mo.c({ gzip: !0, file: n, cwd: t }, [e]),
            this.encryption.hasEncryption() && this.encryption.encryptFile(n),
            n
          );
        }
        async uploadFile(e, t) {
          var a;
          process.env.NX_CLOUD_ECONNABORTED_LOGGING == 'true' &&
            jr.note({ title: `Attempting to upload file with path: ${t}` });
          let n = Ce('storeFile'),
            i = (0, ke.readFileSync)(t),
            s = this.generateMD5(i),
            o = this.getFileUploadHeaders(e, s);
          try {
            let c = await ce(() =>
              Ay(
                e,
                this.axiosConfigBuilder({
                  method: 'PUT',
                  data: i,
                  headers: o,
                  maxContentLength: Et ? Kn : Yn,
                  maxBodyLength: Et ? Kn : Yn,
                  timeout: Et ? Xn : 12e4,
                })
              )
            );
            n.recordMetric({
              ...re(c),
              payloadSize: c.config.headers['Content-Length'],
            });
          } catch (c) {
            if (c.message && c.message.includes('RetentionPolicyNotMet'))
              return;
            throw (
              (n.recordMetric(
                (a = c == null ? void 0 : c.axiosException) != null &&
                  a.response
                  ? re(c.axiosException.response)
                  : Ie
              ),
              c)
            );
          }
        }
        generateMD5(e) {
          let t = (0, Dy.createHash)('md5');
          return t.update(e), t.digest('base64');
        }
        getFileUploadHeaders(e, t) {
          let n = e.includes('/file/'),
            i = {
              'Content-Type': 'application/octet-stream',
              'x-ms-blob-type': 'BlockBlob',
            };
          return n && (i['Content-MD5'] = t), i;
        }
      });
  });
var Eo,
  Ly = B(() => {
    'use strict';
    ie();
    ni();
    Eo = class {
      constructor(e, t, n) {
        this.runContext = e;
        this.taskExecutions = t;
        this.distributedExecutionId = n;
      }
      printCacheHitsMessage() {
        if (ut(this.distributedExecutionId) || !this.runContext.runUrl) return;
        let e = !!this.taskExecutions.find((s) => s.status !== 0),
          t = !!this.taskExecutions.find((s) => s.cacheStatus === 'cache-miss'),
          n = this.taskExecutions
            .filter(
              (s) => this.runContext.statuses[s.hash] === 'remote-cache-hit'
            )
            .map((s) => s.projectName),
          i = [];
        if (e)
          i.push(
            `View structured, searchable error logs at ${this.runContext.runUrl}`
          );
        else if (t)
          i.push(
            `View logs and investigate cache misses at ${this.runContext.runUrl}`
          );
        else if (n.length > 0) {
          let s = n.length === 1 ? n[0] : `${n.length} tasks`;
          i.push(
            `Nx Cloud made it possible to reuse ${s}: ${this.runContext.runUrl}`
          );
        } else
          this.runContext.runUrl &&
            i.push(`View logs and run details at ${this.runContext.runUrl}`);
        i.length > 0 && Xt(i.join(' '));
      }
    };
  });
var Nx,
  In,
  Iu = B(() => {
    'use strict';
    ni();
    ({ output: Nx } = Y()),
      (In = class {
        constructor(e) {
          this.options = e;
          this.cacheError = null;
          this.apiError = null;
          this.message = null;
        }
        get anyErrors() {
          return this.cacheError || this.apiError;
        }
        printMessages() {
          if (this.anyErrors) {
            let e = [];
            this.cacheError && e.push(`- ${this.cacheError}`),
              this.apiError &&
                this.apiError !== this.cacheError &&
                e.push(`- ${this.apiError}`),
              Nx.warn({ title: 'Nx Cloud Problems', bodyLines: e });
          }
          this.message && Xt(this.message);
        }
        extractErrorMessage(e, t) {
          if (e.code === 'ECONNABORTED')
            return (
              process.env.NX_CLOUD_ECONNABORTED_LOGGING == 'true' &&
                (console.log('[NX CLOUD DEBUG] Request config without `data`'),
                delete e.config.data,
                console.log(JSON.stringify(e.config, null, 2))),
              `Cannot connect to Nx Cloud (scope: ${t}, code: ${e.code}). Try invoking the command with the NX_CLOUD_NO_TIMEOUTS env variable set to 'true'.`
            );
          if (
            e.code === 'ECONNREFUSED' ||
            e.code === 'EAI_AGAIN' ||
            e.code === 'ENOTFOUND' ||
            e.code === 'EPROTO'
          )
            return `Cannot connect to Nx Cloud (scope: ${t}, code: ${e.code}).`;
          if (e.response && e.response.status === 401)
            return e.response.data.message
              ? e.response.data.message
              : e.response.data;
          if (e.response && e.response.status === 402)
            return this.options.showUsageWarnings === !1 ||
              this.options.showUsageWarnings === void 0
              ? null
              : e.response.data.message
              ? e.response.data.message
              : e.response.data;
          {
            let n = '';
            e.response && e.response.data && e.response.data.message
              ? (n = `. ${e.response.data.message}`)
              : e.response && e.response.data && (n = `. ${e.response.data}`);
            let i = e.code ? ` (code: ${e.code})` : '';
            return `${e.message}${n}${i}`;
          }
        }
      });
  });
var lr,
  go = B(() => {
    'use strict';
    lr = class {
      constructor(e = []) {
        this.normalizedMaskedProperties = [];
        this.normalizedMaskedProperties = Array.from(new Set(e)).map(
          this.toCamelCase
        );
      }
      obfuscate(e) {
        return (
          this.normalizedMaskedProperties.length &&
            (this.normalizedMaskedProperties.forEach((n) => {
              let i = new RegExp(`(--${n}=)[\\S]*`);
              e = e.replace(i, '$1********');
            }),
            this.normalizedMaskedProperties
              .filter((n) => n in process.env)
              .map((n) => process.env[n])
              .forEach((n) => {
                e = e.replace(n, '********');
              })),
          e
        );
      }
      toCamelCase(e) {
        return e.indexOf('-') > 1
          ? e.toLowerCase().replace(/-(.)/g, (t, n) => n.toUpperCase())
          : e;
      }
    };
  });
function Nn(r) {
  return r.overrides.__overrides_unparsed__
    ? r.overrides.__overrides_unparsed__.join(' ')
    : Nu(r.overrides).join(' ');
}
function Nu(r) {
  let e = [];
  for (let t of Object.keys(r)) {
    let n = r[t];
    Py(t, n, e);
  }
  return e;
}
function Py(r, e, t) {
  if (r === '_') t.push(...e);
  else if (e === !0) t.push(`--${r}`);
  else if (e === !1) t.push(`--no-${r}`);
  else if (Array.isArray(e)) e.forEach((n) => Py(r, n, t));
  else if (typeof e == 'string' && Ax(e)) {
    let n = e.replace(/"/g, String.raw`\"`);
    t.push(`--${r}="${n}"`);
  } else e != null && t.push(`--${r}=${e}`);
}
function Ax(r) {
  return r.includes(' ') || r.includes('{') || r.includes('"');
}
var vi = B(() => {
  'use strict';
});
function _o(r, e, t, n, i) {
  let s;
  r
    ? r.startsWith('./')
      ? (s = (0, ku.join)(Fy, r))
      : (s = r)
    : (s = (0, ku.join)(Fy, 'node_modules', '.cache', 'nx'));
  try {
    let o = Px(s, t),
      a = e.obfuscate(o);
    if (ih) return a;
    let c = n === 'cache-miss' ? (i === 0 ? kx : Dx) : Lx;
    return a.length > c
      ? `TRUNCATED

${a.slice(a.length - c)}`
      : a;
  } catch (o) {
    return process.env.NX_VERBOSE_LOGGING === 'true' && console.error(o), '';
  }
}
function Px(r, e) {
  try {
    return (0, Au.readFileSync)(Du.join(r, 'terminalOutputs', e)).toString();
  } catch {
    try {
      return (0, Au.readFileSync)(Du.join(r, e, 'terminalOutput')).toString();
    } catch {
      return '';
    }
  }
}
var Au,
  Du,
  ku,
  Fy,
  Dx,
  kx,
  Lx,
  Lu = B(() => {
    'use strict';
    (Au = require('fs')), (Du = br(require('path'))), (ku = require('path'));
    ie();
    ({ workspaceRoot: Fy } = Y()), (Dx = 2e5), (kx = 2e4), (Lx = 2e4);
  });
var Uy,
  bo,
  My = B(() => {
    'use strict';
    Uy = require('crypto');
    vi();
    Lu();
    bo = class {
      constructor(e, t, n, i, s, o) {
        this.runContext = e;
        this.cacheDirectory = t;
        this.collectTerminalOutput = n;
        this.cacheableOperations = i;
        this.outputObfuscator = s;
        this.tasks = o;
      }
      scheduleTask(e) {
        this.runContext.scheduledTasks.push(e);
      }
      startTask(e) {
        this.tasks.push({
          taskId: e.id,
          startTime: new Date().toISOString(),
          target: e.target.target,
          projectName: e.target.project,
          hash: e.hash,
          hashDetails: this.cleanUpHashDetails(e.hashDetails),
          params: Nn(e),
          uploadedToStorage: !1,
        });
      }
      endTasks(e) {
        for (let t of e) {
          let n,
            i = t.status === 'remote-cache',
            s = t.status === 'cache',
            o =
              t.status === 'local-cache' ||
              t.status === 'local-cache-kept-existing' ||
              s;
          this.runContext.statuses[t.task.hash]
            ? (n = this.runContext.statuses[t.task.hash])
            : i
            ? (n = 'remote-cache-hit')
            : o
            ? (n = 'local-cache-hit')
            : (n = 'cache-miss'),
            this.updateStartedTask(t, n);
        }
      }
      endCommand() {}
      updateStartedTask(e, t) {
        let n = this.tasks.find((i) => i.taskId === e.task.id);
        if (!n) throw new Error(`Cannot find task ${e.task.id}`);
        e != null && e.startTime && e != null && e.endTime
          ? ((n.startTime = new Date(e.startTime).toISOString()),
            (n.endTime = new Date(e.endTime).toISOString()))
          : (n.endTime = new Date().toISOString()),
          (n.status = e.code),
          (n.params = this.outputObfuscator.obfuscate(n.params)),
          (n.cacheStatus = t),
          this.collectTerminalOutput &&
            (n.terminalOutput = this.getTerminalOutput(
              e.task.hash,
              n.cacheStatus,
              e.code
            ));
      }
      getTerminalOutput(e, t, n) {
        return _o(this.cacheDirectory, this.outputObfuscator, e, t, n);
      }
      cleanUpHashDetails(e) {
        let t = {},
          n = [];
        for (let i of Object.keys(e.nodes))
          i.startsWith('npm:') ? n.push(e.nodes[i]) : (t[i] = e.nodes[i]);
        if ((n.sort(), n.length > 0)) {
          let i = (0, Uy.createHash)('md5');
          i.update(n.join('|')), (t.npmDependencies = i.digest('base64'));
        }
        return { nodes: t, runtime: e.runtime, implicitDeps: e.implicitDeps };
      }
    };
  });
var Pu,
  vo,
  qy = B(() => {
    'use strict';
    ie();
    ({ output: Pu } = Y()),
      (vo = class {
        constructor(e, t, n, i, s, o) {
          this.messages = e;
          this.api = t;
          this.runContext = n;
          this.fileStorage = i;
          this.distributedExecutionId = s;
          this.storeInCurrentProcess = o;
          this.storeRequests = [];
          this.delayedStoreRequests = [];
        }
        async retrieve(e, t) {
          if (this.messages.cacheError) return !1;
          let n = await this.hashUrls(e);
          if (!n || !n.get)
            return (
              U && Pu.note({ title: `Nx Cloud: Cache miss ${e}.` }),
              (this.runContext.statuses[e] = 'cache-miss'),
              !1
            );
          try {
            return (
              await this.fileStorage.retrieve(e, n.get, t),
              (this.runContext.statuses[e] = 'remote-cache-hit'),
              !0
            );
          } catch (i) {
            let s = i.axiosException ?? i;
            return (
              s.response && s.response.status === 404
                ? U &&
                  Pu.note({ title: `Nx Cloud: Cache miss ${e}. Status 404.` })
                : (this.messages.cacheError = this.messages.extractErrorMessage(
                    s,
                    'storage'
                  )),
              (this.runContext.statuses[e] = 'cache-miss'),
              !1
            );
          }
        }
        async store(e, t) {
          if (this.messages.cacheError) return !1;
          let n = Promise.resolve().then(async () => {
            let i = await this.hashUrls(e);
            if (!i) return !1;
            if (!i.put)
              return (
                U &&
                  Pu.note({
                    title: `Nx Cloud: Skipping storing ${e}.`,
                    bodyLines: [
                      'There are several reasons why this can happen.',
                      'Maybe you are using a read-only token or the artifact has already being uploaded.',
                    ],
                  }),
                !0
              );
            if (!this.storeInCurrentProcess)
              return (
                this.delayedStoreRequests.push({ hash: e, url: i.put }), !0
              );
            try {
              return await this.fileStorage.store(e, i.put, t), !0;
            } catch (s) {
              let o = s.axiosException ?? s;
              return (
                (this.messages.cacheError = this.messages.extractErrorMessage(
                  o,
                  'storage'
                )),
                !1
              );
            }
          });
          return this.storeRequests.push(n), n;
        }
        async hashUrls(e) {
          if (e in this.runContext.requests)
            return (await this.runContext.requests[e])[e];
          {
            let t = this.runContext.scheduledTasks
              .filter((i) => !this.runContext.requests[i.hash])
              .map((i) => i.hash);
            t.indexOf(e) === -1 && t.push(e);
            let n = this.api.startRun(this.distributedExecutionId, t);
            return (
              t.forEach((i) => {
                this.runContext.requests[i] = n;
              }),
              (await n)[e]
            );
          }
        }
        async waitForStoreRequestsToComplete() {
          if (
            !(await Promise.all(this.storeRequests).then((t) =>
              t.reduce((n, i) => n && i, !0)
            ))
          )
            throw new Error('Error when storing artifacts');
        }
      });
  });
function fr() {
  for (let r of Object.values(Fx))
    if (r.detectorFn(process.env)) {
      let e = r.contextRetrieverFn(process.env);
      return (
        U && console.log(JSON.stringify(e, null, 2)),
        { ...e, inferredFromTaskRunner: !0 }
      );
    }
  return U && console.log('[Nx Cloud] Did not identify a VCS platform.'), null;
}
function Ux(r) {
  return r.CIRCLECI === 'true';
}
function Mx(r) {
  U && console.log('[Nx Cloud] Detected Env: CircleCI');
  let e = (n) => {
      if (n.CIRCLE_PR_NUMBER !== void 0) return n.CIRCLE_PR_NUMBER;
      if (n.CIRCLE_PULL_REQUEST !== void 0) {
        let i = n.CIRCLE_PULL_REQUEST.split('/');
        return i[i.length - 1];
      }
      return n.CIRCLE_BRANCH !== void 0 ? n.CIRCLE_BRANCH : 'unknown';
    },
    t = (n) =>
      n.CIRCLE_USERNAME !== void 0
        ? n.CIRCLE_USERNAME
        : n.CIRCLE_PR_USERNAME
        ? n.CIRCLE_PR_USERNAME
        : null;
  return {
    branch: e(r),
    ref: r.CIRCLE_BRANCH ?? null,
    title: Uu(),
    headSha: r.CIRCLE_SHA1 ?? 'unknown',
    baseSha: null,
    commitLink: r.CIRCLE_PULL_REQUEST ?? null,
    author: t(r),
    authorUrl: null,
    authorAvatarUrl: null,
  };
}
function qx(r) {
  return r.TRAVIS === 'true';
}
function Bx(r) {
  return (
    U && console.log('[Nx Cloud] Detected Env: TravisCI'),
    {
      branch: ((t) =>
        t.TRAVIS_EVENT_TYPE === 'pull_request'
          ? t.TRAVIS_PULL_REQUEST
          : t.TRAVIS_BRANCH)(r),
      ref: null,
      title: r.TRAVIS_COMMIT_MESSAGE,
      headSha: r.TRAVIS_COMMIT ?? 'unknown',
      baseSha: null,
      commitLink: null,
      author: By(),
      authorUrl: null,
      authorAvatarUrl: null,
    }
  );
}
function jx(r) {
  return r.GITHUB_ACTIONS === 'true';
}
function Gx(r) {
  U && console.log('[Nx Cloud] Detected Env: GitHub Actions');
  let e = (i) => {
      if (i.GITHUB_REF) {
        let s = i.GITHUB_REF.match(/refs\/pull\/(\d+)\/merge/);
        if (s) return s[1];
      }
      return i.GITHUB_HEAD_REF
        ? i.GITHUB_HEAD_REF
        : i.GITHUB_REF_NAME
        ? i.GITHUB_REF_NAME
        : 'unknown';
    },
    t = (i) => {
      let s = `${i.GITHUB_SERVER_URL}/${i.GITHUB_REPOSITORY}`;
      return i.GITHUB_EVENT_NAME === 'pull_request'
        ? `${s}/pull/${e(i)}`
        : `${s}/commit/${i.GITHUB_SHA}`;
    },
    n = (i) =>
      i.GITHUB_HEAD_REF
        ? i.GITHUB_HEAD_REF
        : i.GITHUB_REF
        ? i.GITHUB_REF
        : null;
  return {
    branch: e(r),
    ref: n(r),
    title: Uu(),
    headSha: r.GITHUB_SHA ?? 'unknown',
    baseSha: null,
    commitLink: t(r),
    author: r.GITHUB_ACTOR ?? null,
    authorUrl: `https://github.com/${r.GITHUB_ACTOR}`,
    authorAvatarUrl: `https://avatars.githubusercontent.com/u/${r.GITHUB_ACTOR_ID}`,
  };
}
function $x(r) {
  return r.BITBUCKET_BUILD_NUMBER != null;
}
function Hx(r) {
  return (
    U && console.log('[Nx Cloud] Detected Env: BitBucket Pipelines'),
    {
      branch: r.BITBUCKET_PR_ID ?? r.BITBUCKET_BRANCH ?? 'unknown',
      ref: null,
      title: Uu(),
      headSha: r.BITBUCKET_COMMIT ?? 'unknown',
      baseSha: null,
      commitLink: null,
      author: By(),
      authorUrl: null,
      authorAvatarUrl: null,
    }
  );
}
function zx(r) {
  return r.BUILD_BUILDID !== void 0 && r.AGENT_NAME !== void 0;
}
function Vx(r) {
  return (
    U && console.log('[Nx Cloud] Detected Env: Azure DevOps'),
    {
      branch:
        r.SYSTEM_PULLREQUEST_PULLREQUESTNUMBER ??
        r.BUILD_SOURCEBRANCHNAME ??
        'unknown',
      ref: null,
      title: r.BUILD_SOURCEVERSIONMESSAGE ?? null,
      headSha: et() ?? 'unknown',
      baseSha: null,
      commitLink: null,
      author: r.BUILD_REQUESTEDFOR ?? null,
      authorUrl: null,
      authorAvatarUrl: null,
    }
  );
}
function Wx(r) {
  return r.GITLAB_CI === 'true';
}
function Xx(r) {
  return (
    U && console.log('[Nx Cloud] Detected Env: GitLab Pipelines'),
    {
      branch: ((t) =>
        t.CI_MERGE_REQUEST_IID
          ? t.CI_MERGE_REQUEST_IID
          : t.CI_COMMIT_BRANCH
          ? t.CI_COMMIT_BRANCH
          : 'unknown')(r),
      ref: r.CI_COMMIT_REF_NAME ?? null,
      title: r.CI_COMMIT_MESSAGE ?? null,
      headSha: et() ?? 'unknown',
      baseSha: null,
      commitLink: null,
      author: r.GITLAB_USER_NAME ?? null,
      authorUrl: null,
      authorAvatarUrl: null,
    }
  );
}
function Uu() {
  try {
    return (0, Fu.execSync)('git log -1 --pretty=%B', {
      encoding: 'utf-8',
    }).trim();
  } catch {
    return null;
  }
}
function By() {
  try {
    return (0, Fu.execSync)('git log -1 --pretty=%aN', {
      encoding: 'utf-8',
    }).trim();
  } catch {
    return null;
  }
}
var Fu,
  Fx,
  So = B(() => {
    'use strict';
    Fu = require('child_process');
    ie();
    Fx = {
      CIRCLE_CI: { detectorFn: Ux, contextRetrieverFn: Mx },
      TRAVIS_CI: { detectorFn: qx, contextRetrieverFn: Bx },
      GITHUB_ACTIONS: { detectorFn: jx, contextRetrieverFn: Gx },
      BITBUCKET_PIPELINES: { detectorFn: $x, contextRetrieverFn: Hx },
      AZURE_DEVOPS: { detectorFn: zx, contextRetrieverFn: Vx },
      GITLAB_PIPELINES: { detectorFn: Wx, contextRetrieverFn: Xx },
    };
  });
var jy,
  Gy,
  $y,
  wo,
  An,
  Mu = B(() => {
    'use strict';
    (jy = require('fs')), (Gy = require('util')), ($y = require('zlib'));
    gt();
    ie();
    So();
    Dt();
    ({ output: wo } = Y()),
      (An = class {
        constructor(e, t, n, i) {
          this.messages = e;
          this.runContext = t;
          this.machineInfo = i;
          this.apiAxiosInstance = Te(n);
        }
        async startRun(e, t) {
          var i;
          if (this.messages.apiError) return {};
          let n = Ce('startRun');
          try {
            let s = {
              meta: { nxCloudVersion: this.nxCloudVersion() },
              branch: me(),
              runGroup: ve(),
              ciExecutionId: je(),
              ciExecutionEnv: xe(),
              distributedExecutionId: e,
              hashes: t,
              machineInfo: this.machineInfo,
              vcsContext: fr(),
            };
            U &&
              wo.note({
                title: 'RunStart',
                bodyLines: [
                  `
` + JSON.stringify(s, null, 2),
                ],
              });
            let o = await Va('RunStart duration', () =>
              ce(() => this.apiAxiosInstance.post('/nx-cloud/runs/start', s))
            );
            return (
              n.recordMetric(re(o)),
              o.data &&
                o.data.message &&
                (this.messages.message = o.data.message),
              !o.data || !o.data.urls
                ? ((this.messages.apiError = `Invalid Nx Cloud response: ${JSON.stringify(
                    o.data
                  )}`),
                  {})
                : o.data.urls
            );
          } catch (s) {
            return (
              n.recordMetric(
                (i = s == null ? void 0 : s.axiosException) != null &&
                  i.response
                  ? re(s.axiosException.response)
                  : Ie
              ),
              (this.messages.apiError = this.messages.extractErrorMessage(
                s,
                'api'
              )),
              {}
            );
          }
        }
        createReqBody(e, t, n, i) {
          let s = {
            meta: { nxCloudVersion: this.nxCloudVersion() },
            tasks: t,
            run: e,
            linkId: i,
            ...n,
            machineInfo: this.machineInfo,
            vcsContext: fr(),
          };
          return JSON.stringify(s);
        }
        async endRun(e, t, n, i) {
          var l;
          if (this.messages.apiError) return !1;
          (e.runGroup = null), (e.branch = null);
          let s = this.createReqBody(e, t, n, i);
          s.length > 20 * 1e3 * 1e3 &&
            (s = this.createReqBody(
              e,
              t.map((u) => ({ ...u, hashDetails: void 0 })),
              n,
              i
            ));
          let o = Buffer.from(s),
            a = await (0, Gy.promisify)($y.gzip)(o),
            c = Ce('endRun');
          try {
            if (U) {
              let f = t.map((h) => ({
                ...h,
                terminalOutput: h.terminalOutput
                  ? `${h.terminalOutput.slice(0, 20)}...`
                  : void 0,
              }));
              wo.note({
                title: 'RunEnd. Completed tasks',
                bodyLines: [
                  `
` + JSON.stringify(f, null, 2),
                ],
              });
            }
            let u = await Va('RunEnd duration', () =>
              ce(() =>
                this.apiAxiosInstance.post('/nx-cloud/runs/end', a, {
                  headers: {
                    ...this.apiAxiosInstance.defaults.headers,
                    'Content-Encoding': 'gzip',
                    'Content-Type': 'application/octet-stream',
                  },
                })
              )
            );
            if (u) {
              if (
                (c.recordMetric(re(u)),
                u.data && u.data.runUrl && u.data.status === 'success')
              )
                return (this.runContext.runUrl = u.data.runUrl), !0;
              u.data && u.data.status
                ? (this.messages.apiError = `Invalid end run response: ${JSON.stringify(
                    u.data.message
                  )}`)
                : u.data && typeof u.data == 'string'
                ? u.data !== 'success' &&
                  (this.messages.apiError = `Invalid end run response: ${JSON.stringify(
                    u.data
                  )}`)
                : (this.messages.apiError = `Invalid end run response: ${JSON.stringify(
                    u.data
                  )}`),
                U &&
                  wo.note({
                    title: 'Invalid end run response',
                    bodyLines: [JSON.stringify(u.data, null, 2)],
                  });
            } else
              wo.error({
                title: 'Nx Cloud: Unknown Error Occurred',
                bodyLines: [
                  'Run completion responded with `undefined`.',
                  'Run Details:',
                  JSON.stringify(e, null, 2),
                  'Stack Trace:',
                  JSON.stringify(new Error().stack, null, 2),
                ],
              });
            return !1;
          } catch (u) {
            c.recordMetric(
              (l = u == null ? void 0 : u.axiosException) != null && l.response
                ? re(u.axiosException.response)
                : Ie
            );
            let f = u.axiosException ?? u;
            return (
              (this.messages.apiError = this.messages.extractErrorMessage(
                f,
                'api'
              )),
              !1
            );
          }
        }
        nxCloudVersion() {
          try {
            let e = JSON.parse((0, jy.readFileSync)('package.json').toString());
            return (
              e.devDependencies['nx-cloud'] ||
              e.devDependencies['@nrwl/nx-cloud']
            );
          } catch {
            return 'unknown';
          }
        }
      });
  });
function Ro() {
  let r = '';
  for (let e = 0; e < 10; ++e) r += Hy[Math.floor(Math.random() * Hy.length)];
  return r;
}
var zy,
  Kx,
  Yx,
  Hy,
  qu = B(() => {
    'use strict';
    (zy = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'),
      (Kx = '0123456789'),
      (Yx = zy.toLowerCase()),
      (Hy = zy + Yx + Kx);
  });
var dt = E((qe) => {
  'use strict';
  var Bu = require('path');
  Sr();
  try {
    try {
      let r;
      try {
        r = ne('nx/src/utils/app-root').workspaceRoot;
      } catch {
        r = ne('nx/src/utils/workspace-root').workspaceRoot;
      }
      let { getDependencyConfigs: e } = ne('nx/src/tasks-runner/utils'),
        t = ne('nx/tasks-runners/default').default,
        { CompositeLifeCycle: n } = ne('nx/src/tasks-runner/life-cycle'),
        i = null;
      try {
        i = ne('nx/src/index').initTasksRunner;
      } catch {}
      let s;
      try {
        s = ne('nx/src/devkit-exports').cacheDir;
      } catch {
        try {
          s = ne('nx/src/utils/cache-directory').cacheDir;
        } catch {
          s = (0, Bu.join)(r, './node_modules/.cache/nx');
        }
      }
      let o = ne('nx/src/tasks-runner/utils').isCacheableTask;
      (qe.cacheDirectory = s),
        (qe.runnerReturnsPromise = !0),
        (qe.tasksRunner = t),
        (qe.CompositeLifeCycle = n),
        (qe.getDependencyConfigs = e),
        (qe.initTasksRunner = i),
        (qe.isCacheableTask = o);
    } catch {
      let { appRootPath: e } = ne('@nrwl/tao/src/utils/app-root'),
        { getDependencyConfigs: t } = ne(
          '@nrwl/workspace/src/tasks-runner/utils'
        ),
        { tasksRunnerV2: n } = ne(
          '@nrwl/workspace/src/tasks-runner/tasks-runner-v2'
        ),
        i;
      try {
        i = ne(
          '@nrwl/workspace/src/tasks-runner/life-cycle'
        ).CompositeLifeCycle;
      } catch {}
      let s = ne('@nrwl/workspace/src/tasks-runner/utils').isCacheableTask;
      (qe.cacheDirectory = (0, Bu.join)(e, './node_modules/.cache/nx')),
        (qe.runnerReturnsPromise = !1),
        (qe.tasksRunner = n),
        (qe.CompositeLifeCycle = i),
        (qe.getDependencyConfigs = t),
        (qe.initTasksRunner = null),
        (qe.isCacheableTask = s);
    }
  } catch (r) {
    process.env.NX_VERBOSE_LOGGING === 'true' && console.log(r),
      console.error('NX CLOUD ERROR'),
      console.error('---------------------------------------'),
      console.error(
        'This version of Nx Cloud is incompatible with the @nrwl/* and @nx/* packages in your workspace, or Nx was not installed properly.'
      ),
      console.error(''),
      console.error('Verify your install step was successful, and if it was,'),
      console.error(
        'match your @nrwl/nx-cloud version to the same major version of your @nx/* and @nrwl/* packages and try again.'
      ),
      console.error('---------------------------------------'),
      process.exit(1);
  }
});
var Ve = E((ju) => {
  'use strict';
  ju.fromCallback = function (r) {
    return Object.defineProperty(
      function () {
        if (typeof arguments[arguments.length - 1] == 'function')
          r.apply(this, arguments);
        else
          return new Promise((e, t) => {
            (arguments[arguments.length] = (n, i) => {
              if (n) return t(n);
              e(i);
            }),
              arguments.length++,
              r.apply(this, arguments);
          });
      },
      'name',
      { value: r.name }
    );
  };
  ju.fromPromise = function (r) {
    return Object.defineProperty(
      function () {
        let e = arguments[arguments.length - 1];
        if (typeof e != 'function') return r.apply(this, arguments);
        r.apply(this, arguments).then((t) => e(null, t), e);
      },
      'name',
      { value: r.name }
    );
  };
});
var Wy = E((QD, Vy) => {
  'use strict';
  var hr = require('constants'),
    Jx = process.cwd,
    xo = null,
    Zx = process.env.GRACEFUL_FS_PLATFORM || process.platform;
  process.cwd = function () {
    return xo || (xo = Jx.call(process)), xo;
  };
  try {
    process.cwd();
  } catch {}
  typeof process.chdir == 'function' &&
    ((Gu = process.chdir),
    (process.chdir = function (r) {
      (xo = null), Gu.call(process, r);
    }),
    Object.setPrototypeOf && Object.setPrototypeOf(process.chdir, Gu));
  var Gu;
  Vy.exports = Qx;
  function Qx(r) {
    hr.hasOwnProperty('O_SYMLINK') &&
      process.version.match(/^v0\.6\.[0-2]|^v0\.5\./) &&
      e(r),
      r.lutimes || t(r),
      (r.chown = s(r.chown)),
      (r.fchown = s(r.fchown)),
      (r.lchown = s(r.lchown)),
      (r.chmod = n(r.chmod)),
      (r.fchmod = n(r.fchmod)),
      (r.lchmod = n(r.lchmod)),
      (r.chownSync = o(r.chownSync)),
      (r.fchownSync = o(r.fchownSync)),
      (r.lchownSync = o(r.lchownSync)),
      (r.chmodSync = i(r.chmodSync)),
      (r.fchmodSync = i(r.fchmodSync)),
      (r.lchmodSync = i(r.lchmodSync)),
      (r.stat = a(r.stat)),
      (r.fstat = a(r.fstat)),
      (r.lstat = a(r.lstat)),
      (r.statSync = c(r.statSync)),
      (r.fstatSync = c(r.fstatSync)),
      (r.lstatSync = c(r.lstatSync)),
      r.chmod &&
        !r.lchmod &&
        ((r.lchmod = function (u, f, h) {
          h && process.nextTick(h);
        }),
        (r.lchmodSync = function () {})),
      r.chown &&
        !r.lchown &&
        ((r.lchown = function (u, f, h, d) {
          d && process.nextTick(d);
        }),
        (r.lchownSync = function () {})),
      Zx === 'win32' &&
        (r.rename =
          typeof r.rename != 'function'
            ? r.rename
            : (function (u) {
                function f(h, d, y) {
                  var v = Date.now(),
                    p = 0;
                  u(h, d, function w(k) {
                    if (
                      k &&
                      (k.code === 'EACCES' ||
                        k.code === 'EPERM' ||
                        k.code === 'EBUSY') &&
                      Date.now() - v < 6e4
                    ) {
                      setTimeout(function () {
                        r.stat(d, function (O, N) {
                          O && O.code === 'ENOENT' ? u(h, d, w) : y(k);
                        });
                      }, p),
                        p < 100 && (p += 10);
                      return;
                    }
                    y && y(k);
                  });
                }
                return Object.setPrototypeOf && Object.setPrototypeOf(f, u), f;
              })(r.rename)),
      (r.read =
        typeof r.read != 'function'
          ? r.read
          : (function (u) {
              function f(h, d, y, v, p, w) {
                var k;
                if (w && typeof w == 'function') {
                  var O = 0;
                  k = function (N, P, I) {
                    if (N && N.code === 'EAGAIN' && O < 10)
                      return O++, u.call(r, h, d, y, v, p, k);
                    w.apply(this, arguments);
                  };
                }
                return u.call(r, h, d, y, v, p, k);
              }
              return Object.setPrototypeOf && Object.setPrototypeOf(f, u), f;
            })(r.read)),
      (r.readSync =
        typeof r.readSync != 'function'
          ? r.readSync
          : (function (u) {
              return function (f, h, d, y, v) {
                for (var p = 0; ; )
                  try {
                    return u.call(r, f, h, d, y, v);
                  } catch (w) {
                    if (w.code === 'EAGAIN' && p < 10) {
                      p++;
                      continue;
                    }
                    throw w;
                  }
              };
            })(r.readSync));
    function e(u) {
      (u.lchmod = function (f, h, d) {
        u.open(f, hr.O_WRONLY | hr.O_SYMLINK, h, function (y, v) {
          if (y) {
            d && d(y);
            return;
          }
          u.fchmod(v, h, function (p) {
            u.close(v, function (w) {
              d && d(p || w);
            });
          });
        });
      }),
        (u.lchmodSync = function (f, h) {
          var d = u.openSync(f, hr.O_WRONLY | hr.O_SYMLINK, h),
            y = !0,
            v;
          try {
            (v = u.fchmodSync(d, h)), (y = !1);
          } finally {
            if (y)
              try {
                u.closeSync(d);
              } catch {}
            else u.closeSync(d);
          }
          return v;
        });
    }
    function t(u) {
      hr.hasOwnProperty('O_SYMLINK') && u.futimes
        ? ((u.lutimes = function (f, h, d, y) {
            u.open(f, hr.O_SYMLINK, function (v, p) {
              if (v) {
                y && y(v);
                return;
              }
              u.futimes(p, h, d, function (w) {
                u.close(p, function (k) {
                  y && y(w || k);
                });
              });
            });
          }),
          (u.lutimesSync = function (f, h, d) {
            var y = u.openSync(f, hr.O_SYMLINK),
              v,
              p = !0;
            try {
              (v = u.futimesSync(y, h, d)), (p = !1);
            } finally {
              if (p)
                try {
                  u.closeSync(y);
                } catch {}
              else u.closeSync(y);
            }
            return v;
          }))
        : u.futimes &&
          ((u.lutimes = function (f, h, d, y) {
            y && process.nextTick(y);
          }),
          (u.lutimesSync = function () {}));
    }
    function n(u) {
      return (
        u &&
        function (f, h, d) {
          return u.call(r, f, h, function (y) {
            l(y) && (y = null), d && d.apply(this, arguments);
          });
        }
      );
    }
    function i(u) {
      return (
        u &&
        function (f, h) {
          try {
            return u.call(r, f, h);
          } catch (d) {
            if (!l(d)) throw d;
          }
        }
      );
    }
    function s(u) {
      return (
        u &&
        function (f, h, d, y) {
          return u.call(r, f, h, d, function (v) {
            l(v) && (v = null), y && y.apply(this, arguments);
          });
        }
      );
    }
    function o(u) {
      return (
        u &&
        function (f, h, d) {
          try {
            return u.call(r, f, h, d);
          } catch (y) {
            if (!l(y)) throw y;
          }
        }
      );
    }
    function a(u) {
      return (
        u &&
        function (f, h, d) {
          typeof h == 'function' && ((d = h), (h = null));
          function y(v, p) {
            p &&
              (p.uid < 0 && (p.uid += 4294967296),
              p.gid < 0 && (p.gid += 4294967296)),
              d && d.apply(this, arguments);
          }
          return h ? u.call(r, f, h, y) : u.call(r, f, y);
        }
      );
    }
    function c(u) {
      return (
        u &&
        function (f, h) {
          var d = h ? u.call(r, f, h) : u.call(r, f);
          return (
            d &&
              (d.uid < 0 && (d.uid += 4294967296),
              d.gid < 0 && (d.gid += 4294967296)),
            d
          );
        }
      );
    }
    function l(u) {
      if (!u || u.code === 'ENOSYS') return !0;
      var f = !process.getuid || process.getuid() !== 0;
      return !!(f && (u.code === 'EINVAL' || u.code === 'EPERM'));
    }
  }
});
var Yy = E((ek, Ky) => {
  'use strict';
  var Xy = require('stream').Stream;
  Ky.exports = eO;
  function eO(r) {
    return { ReadStream: e, WriteStream: t };
    function e(n, i) {
      if (!(this instanceof e)) return new e(n, i);
      Xy.call(this);
      var s = this;
      (this.path = n),
        (this.fd = null),
        (this.readable = !0),
        (this.paused = !1),
        (this.flags = 'r'),
        (this.mode = 438),
        (this.bufferSize = 64 * 1024),
        (i = i || {});
      for (var o = Object.keys(i), a = 0, c = o.length; a < c; a++) {
        var l = o[a];
        this[l] = i[l];
      }
      if (
        (this.encoding && this.setEncoding(this.encoding),
        this.start !== void 0)
      ) {
        if (typeof this.start != 'number')
          throw TypeError('start must be a Number');
        if (this.end === void 0) this.end = 1 / 0;
        else if (typeof this.end != 'number')
          throw TypeError('end must be a Number');
        if (this.start > this.end) throw new Error('start must be <= end');
        this.pos = this.start;
      }
      if (this.fd !== null) {
        process.nextTick(function () {
          s._read();
        });
        return;
      }
      r.open(this.path, this.flags, this.mode, function (u, f) {
        if (u) {
          s.emit('error', u), (s.readable = !1);
          return;
        }
        (s.fd = f), s.emit('open', f), s._read();
      });
    }
    function t(n, i) {
      if (!(this instanceof t)) return new t(n, i);
      Xy.call(this),
        (this.path = n),
        (this.fd = null),
        (this.writable = !0),
        (this.flags = 'w'),
        (this.encoding = 'binary'),
        (this.mode = 438),
        (this.bytesWritten = 0),
        (i = i || {});
      for (var s = Object.keys(i), o = 0, a = s.length; o < a; o++) {
        var c = s[o];
        this[c] = i[c];
      }
      if (this.start !== void 0) {
        if (typeof this.start != 'number')
          throw TypeError('start must be a Number');
        if (this.start < 0) throw new Error('start must be >= zero');
        this.pos = this.start;
      }
      (this.busy = !1),
        (this._queue = []),
        this.fd === null &&
          ((this._open = r.open),
          this._queue.push([
            this._open,
            this.path,
            this.flags,
            this.mode,
            void 0,
          ]),
          this.flush());
    }
  }
});
var Zy = E((tk, Jy) => {
  'use strict';
  Jy.exports = rO;
  var tO =
    Object.getPrototypeOf ||
    function (r) {
      return r.__proto__;
    };
  function rO(r) {
    if (r === null || typeof r != 'object') return r;
    if (r instanceof Object) var e = { __proto__: tO(r) };
    else var e = Object.create(null);
    return (
      Object.getOwnPropertyNames(r).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      }),
      e
    );
  }
});
var ge = E((rk, zu) => {
  'use strict';
  var ue = require('fs'),
    nO = Wy(),
    iO = Yy(),
    sO = Zy(),
    Oo = require('util'),
    we,
    Co;
  typeof Symbol == 'function' && typeof Symbol.for == 'function'
    ? ((we = Symbol.for('graceful-fs.queue')),
      (Co = Symbol.for('graceful-fs.previous')))
    : ((we = '___graceful-fs.queue'), (Co = '___graceful-fs.previous'));
  function oO() {}
  function tE(r, e) {
    Object.defineProperty(r, we, {
      get: function () {
        return e;
      },
    });
  }
  var $r = oO;
  Oo.debuglog
    ? ($r = Oo.debuglog('gfs4'))
    : /\bgfs4\b/i.test(process.env.NODE_DEBUG || '') &&
      ($r = function () {
        var r = Oo.format.apply(Oo, arguments);
        (r =
          'GFS4: ' +
          r.split(/\n/).join(`
GFS4: `)),
          console.error(r);
      });
  ue[we] ||
    ((Qy = global[we] || []),
    tE(ue, Qy),
    (ue.close = (function (r) {
      function e(t, n) {
        return r.call(ue, t, function (i) {
          i || eE(), typeof n == 'function' && n.apply(this, arguments);
        });
      }
      return Object.defineProperty(e, Co, { value: r }), e;
    })(ue.close)),
    (ue.closeSync = (function (r) {
      function e(t) {
        r.apply(ue, arguments), eE();
      }
      return Object.defineProperty(e, Co, { value: r }), e;
    })(ue.closeSync)),
    /\bgfs4\b/i.test(process.env.NODE_DEBUG || '') &&
      process.on('exit', function () {
        $r(ue[we]), require('assert').equal(ue[we].length, 0);
      }));
  var Qy;
  global[we] || tE(global, ue[we]);
  zu.exports = $u(sO(ue));
  process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH &&
    !ue.__patched &&
    ((zu.exports = $u(ue)), (ue.__patched = !0));
  function $u(r) {
    nO(r),
      (r.gracefulify = $u),
      (r.createReadStream = P),
      (r.createWriteStream = I);
    var e = r.readFile;
    r.readFile = t;
    function t(T, C, j) {
      return typeof C == 'function' && ((j = C), (C = null)), X(T, C, j);
      function X(V, J, q, K) {
        return e(V, J, function ($) {
          $ && ($.code === 'EMFILE' || $.code === 'ENFILE')
            ? Dn([X, [V, J, q], $, K || Date.now(), Date.now()])
            : typeof q == 'function' && q.apply(this, arguments);
        });
      }
    }
    var n = r.writeFile;
    r.writeFile = i;
    function i(T, C, j, X) {
      return typeof j == 'function' && ((X = j), (j = null)), V(T, C, j, X);
      function V(J, q, K, $, L) {
        return n(J, q, K, function (H) {
          H && (H.code === 'EMFILE' || H.code === 'ENFILE')
            ? Dn([V, [J, q, K, $], H, L || Date.now(), Date.now()])
            : typeof $ == 'function' && $.apply(this, arguments);
        });
      }
    }
    var s = r.appendFile;
    s && (r.appendFile = o);
    function o(T, C, j, X) {
      return typeof j == 'function' && ((X = j), (j = null)), V(T, C, j, X);
      function V(J, q, K, $, L) {
        return s(J, q, K, function (H) {
          H && (H.code === 'EMFILE' || H.code === 'ENFILE')
            ? Dn([V, [J, q, K, $], H, L || Date.now(), Date.now()])
            : typeof $ == 'function' && $.apply(this, arguments);
        });
      }
    }
    var a = r.copyFile;
    a && (r.copyFile = c);
    function c(T, C, j, X) {
      return typeof j == 'function' && ((X = j), (j = 0)), V(T, C, j, X);
      function V(J, q, K, $, L) {
        return a(J, q, K, function (H) {
          H && (H.code === 'EMFILE' || H.code === 'ENFILE')
            ? Dn([V, [J, q, K, $], H, L || Date.now(), Date.now()])
            : typeof $ == 'function' && $.apply(this, arguments);
        });
      }
    }
    var l = r.readdir;
    r.readdir = f;
    var u = /^v[0-5]\./;
    function f(T, C, j) {
      typeof C == 'function' && ((j = C), (C = null));
      var X = u.test(process.version)
        ? function (q, K, $, L) {
            return l(q, V(q, K, $, L));
          }
        : function (q, K, $, L) {
            return l(q, K, V(q, K, $, L));
          };
      return X(T, C, j);
      function V(J, q, K, $) {
        return function (L, H) {
          L && (L.code === 'EMFILE' || L.code === 'ENFILE')
            ? Dn([X, [J, q, K], L, $ || Date.now(), Date.now()])
            : (H && H.sort && H.sort(),
              typeof K == 'function' && K.call(this, L, H));
        };
      }
    }
    if (process.version.substr(0, 4) === 'v0.8') {
      var h = iO(r);
      (w = h.ReadStream), (O = h.WriteStream);
    }
    var d = r.ReadStream;
    d && ((w.prototype = Object.create(d.prototype)), (w.prototype.open = k));
    var y = r.WriteStream;
    y && ((O.prototype = Object.create(y.prototype)), (O.prototype.open = N)),
      Object.defineProperty(r, 'ReadStream', {
        get: function () {
          return w;
        },
        set: function (T) {
          w = T;
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(r, 'WriteStream', {
        get: function () {
          return O;
        },
        set: function (T) {
          O = T;
        },
        enumerable: !0,
        configurable: !0,
      });
    var v = w;
    Object.defineProperty(r, 'FileReadStream', {
      get: function () {
        return v;
      },
      set: function (T) {
        v = T;
      },
      enumerable: !0,
      configurable: !0,
    });
    var p = O;
    Object.defineProperty(r, 'FileWriteStream', {
      get: function () {
        return p;
      },
      set: function (T) {
        p = T;
      },
      enumerable: !0,
      configurable: !0,
    });
    function w(T, C) {
      return this instanceof w
        ? (d.apply(this, arguments), this)
        : w.apply(Object.create(w.prototype), arguments);
    }
    function k() {
      var T = this;
      G(T.path, T.flags, T.mode, function (C, j) {
        C
          ? (T.autoClose && T.destroy(), T.emit('error', C))
          : ((T.fd = j), T.emit('open', j), T.read());
      });
    }
    function O(T, C) {
      return this instanceof O
        ? (y.apply(this, arguments), this)
        : O.apply(Object.create(O.prototype), arguments);
    }
    function N() {
      var T = this;
      G(T.path, T.flags, T.mode, function (C, j) {
        C ? (T.destroy(), T.emit('error', C)) : ((T.fd = j), T.emit('open', j));
      });
    }
    function P(T, C) {
      return new r.ReadStream(T, C);
    }
    function I(T, C) {
      return new r.WriteStream(T, C);
    }
    var z = r.open;
    r.open = G;
    function G(T, C, j, X) {
      return typeof j == 'function' && ((X = j), (j = null)), V(T, C, j, X);
      function V(J, q, K, $, L) {
        return z(J, q, K, function (H, le) {
          H && (H.code === 'EMFILE' || H.code === 'ENFILE')
            ? Dn([V, [J, q, K, $], H, L || Date.now(), Date.now()])
            : typeof $ == 'function' && $.apply(this, arguments);
        });
      }
    }
    return r;
  }
  function Dn(r) {
    $r('ENQUEUE', r[0].name, r[1]), ue[we].push(r), Hu();
  }
  var To;
  function eE() {
    for (var r = Date.now(), e = 0; e < ue[we].length; ++e)
      ue[we][e].length > 2 && ((ue[we][e][3] = r), (ue[we][e][4] = r));
    Hu();
  }
  function Hu() {
    if ((clearTimeout(To), (To = void 0), ue[we].length !== 0)) {
      var r = ue[we].shift(),
        e = r[0],
        t = r[1],
        n = r[2],
        i = r[3],
        s = r[4];
      if (i === void 0) $r('RETRY', e.name, t), e.apply(null, t);
      else if (Date.now() - i >= 6e4) {
        $r('TIMEOUT', e.name, t);
        var o = t.pop();
        typeof o == 'function' && o.call(null, n);
      } else {
        var a = Date.now() - s,
          c = Math.max(s - i, 1),
          l = Math.min(c * 1.2, 100);
        a >= l
          ? ($r('RETRY', e.name, t), e.apply(null, t.concat([i])))
          : ue[we].push(r);
      }
      To === void 0 && (To = setTimeout(Hu, 0));
    }
  }
});
var Vu = E((kn) => {
  'use strict';
  var aO = Ve().fromCallback,
    Ot = ge(),
    cO = [
      'access',
      'appendFile',
      'chmod',
      'chown',
      'close',
      'copyFile',
      'fchmod',
      'fchown',
      'fdatasync',
      'fstat',
      'fsync',
      'ftruncate',
      'futimes',
      'lchown',
      'lchmod',
      'link',
      'lstat',
      'mkdir',
      'mkdtemp',
      'open',
      'readFile',
      'readdir',
      'readlink',
      'realpath',
      'rename',
      'rmdir',
      'stat',
      'symlink',
      'truncate',
      'unlink',
      'utimes',
      'writeFile',
    ].filter((r) => typeof Ot[r] == 'function');
  Object.keys(Ot).forEach((r) => {
    r !== 'promises' && (kn[r] = Ot[r]);
  });
  cO.forEach((r) => {
    kn[r] = aO(Ot[r]);
  });
  kn.exists = function (r, e) {
    return typeof e == 'function'
      ? Ot.exists(r, e)
      : new Promise((t) => Ot.exists(r, t));
  };
  kn.read = function (r, e, t, n, i, s) {
    return typeof s == 'function'
      ? Ot.read(r, e, t, n, i, s)
      : new Promise((o, a) => {
          Ot.read(r, e, t, n, i, (c, l, u) => {
            if (c) return a(c);
            o({ bytesRead: l, buffer: u });
          });
        });
  };
  kn.write = function (r, e, ...t) {
    return typeof t[t.length - 1] == 'function'
      ? Ot.write(r, e, ...t)
      : new Promise((n, i) => {
          Ot.write(r, e, ...t, (s, o, a) => {
            if (s) return i(s);
            n({ bytesWritten: o, buffer: a });
          });
        });
  };
});
var Xu = E((ik, nE) => {
  'use strict';
  var Wu = require('path');
  function rE(r) {
    return (
      (r = Wu.normalize(Wu.resolve(r)).split(Wu.sep)),
      r.length > 0 ? r[0] : null
    );
  }
  var uO = /[<>:"|?*]/;
  function lO(r) {
    let e = rE(r);
    return (r = r.replace(e, '')), uO.test(r);
  }
  nE.exports = { getRootPath: rE, invalidWin32Path: lO };
});
var sE = E((sk, iE) => {
  'use strict';
  var fO = ge(),
    Ku = require('path'),
    hO = Xu().invalidWin32Path,
    dO = parseInt('0777', 8);
  function Yu(r, e, t, n) {
    if (
      (typeof e == 'function'
        ? ((t = e), (e = {}))
        : (!e || typeof e != 'object') && (e = { mode: e }),
      process.platform === 'win32' && hO(r))
    ) {
      let o = new Error(r + ' contains invalid WIN32 path characters.');
      return (o.code = 'EINVAL'), t(o);
    }
    let i = e.mode,
      s = e.fs || fO;
    i === void 0 && (i = dO & ~process.umask()),
      n || (n = null),
      (t = t || function () {}),
      (r = Ku.resolve(r)),
      s.mkdir(r, i, (o) => {
        if (!o) return (n = n || r), t(null, n);
        switch (o.code) {
          case 'ENOENT':
            if (Ku.dirname(r) === r) return t(o);
            Yu(Ku.dirname(r), e, (a, c) => {
              a ? t(a, c) : Yu(r, e, t, c);
            });
            break;
          default:
            s.stat(r, (a, c) => {
              a || !c.isDirectory() ? t(o, n) : t(null, n);
            });
            break;
        }
      });
  }
  iE.exports = Yu;
});
var aE = E((ok, oE) => {
  'use strict';
  var pO = ge(),
    Ju = require('path'),
    mO = Xu().invalidWin32Path,
    yO = parseInt('0777', 8);
  function Zu(r, e, t) {
    (!e || typeof e != 'object') && (e = { mode: e });
    let n = e.mode,
      i = e.fs || pO;
    if (process.platform === 'win32' && mO(r)) {
      let s = new Error(r + ' contains invalid WIN32 path characters.');
      throw ((s.code = 'EINVAL'), s);
    }
    n === void 0 && (n = yO & ~process.umask()),
      t || (t = null),
      (r = Ju.resolve(r));
    try {
      i.mkdirSync(r, n), (t = t || r);
    } catch (s) {
      if (s.code === 'ENOENT') {
        if (Ju.dirname(r) === r) throw s;
        (t = Zu(Ju.dirname(r), e, t)), Zu(r, e, t);
      } else {
        let o;
        try {
          o = i.statSync(r);
        } catch {
          throw s;
        }
        if (!o.isDirectory()) throw s;
      }
    }
    return t;
  }
  oE.exports = Zu;
});
var Qe = E((ak, cE) => {
  'use strict';
  var EO = Ve().fromCallback,
    Qu = EO(sE()),
    el = aE();
  cE.exports = {
    mkdirs: Qu,
    mkdirsSync: el,
    mkdirp: Qu,
    mkdirpSync: el,
    ensureDir: Qu,
    ensureDirSync: el,
  };
});
var tl = E((ck, lE) => {
  'use strict';
  var Le = ge(),
    uE = require('os'),
    Io = require('path');
  function gO() {
    let r = Io.join(
      'millis-test-sync' +
        Date.now().toString() +
        Math.random().toString().slice(2)
    );
    r = Io.join(uE.tmpdir(), r);
    let e = new Date(1435410243862);
    Le.writeFileSync(
      r,
      'https://github.com/jprichardson/node-fs-extra/pull/141'
    );
    let t = Le.openSync(r, 'r+');
    return (
      Le.futimesSync(t, e, e),
      Le.closeSync(t),
      Le.statSync(r).mtime > 1435410243e3
    );
  }
  function _O(r) {
    let e = Io.join(
      'millis-test' + Date.now().toString() + Math.random().toString().slice(2)
    );
    e = Io.join(uE.tmpdir(), e);
    let t = new Date(1435410243862);
    Le.writeFile(
      e,
      'https://github.com/jprichardson/node-fs-extra/pull/141',
      (n) => {
        if (n) return r(n);
        Le.open(e, 'r+', (i, s) => {
          if (i) return r(i);
          Le.futimes(s, t, t, (o) => {
            if (o) return r(o);
            Le.close(s, (a) => {
              if (a) return r(a);
              Le.stat(e, (c, l) => {
                if (c) return r(c);
                r(null, l.mtime > 1435410243e3);
              });
            });
          });
        });
      }
    );
  }
  function bO(r) {
    if (typeof r == 'number') return Math.floor(r / 1e3) * 1e3;
    if (r instanceof Date) return new Date(Math.floor(r.getTime() / 1e3) * 1e3);
    throw new Error('fs-extra: timeRemoveMillis() unknown parameter type');
  }
  function vO(r, e, t, n) {
    Le.open(r, 'r+', (i, s) => {
      if (i) return n(i);
      Le.futimes(s, e, t, (o) => {
        Le.close(s, (a) => {
          n && n(o || a);
        });
      });
    });
  }
  function SO(r, e, t) {
    let n = Le.openSync(r, 'r+');
    return Le.futimesSync(n, e, t), Le.closeSync(n);
  }
  lE.exports = {
    hasMillisRes: _O,
    hasMillisResSync: gO,
    timeRemoveMillis: bO,
    utimesMillis: vO,
    utimesMillisSync: SO,
  };
});
var rl = E((uk, fE) => {
  'use strict';
  fE.exports = function (r) {
    if (typeof Buffer.allocUnsafe == 'function')
      try {
        return Buffer.allocUnsafe(r);
      } catch {
        return new Buffer(r);
      }
    return new Buffer(r);
  };
});
var EE = E((lk, yE) => {
  'use strict';
  var oe = ge(),
    Gt = require('path'),
    wO = Qe().mkdirsSync,
    RO = tl().utimesMillisSync,
    No = Symbol('notExist');
  function xO(r, e, t) {
    typeof t == 'function' && (t = { filter: t }),
      (t = t || {}),
      (t.clobber = 'clobber' in t ? !!t.clobber : !0),
      (t.overwrite = 'overwrite' in t ? !!t.overwrite : t.clobber),
      t.preserveTimestamps &&
        process.arch === 'ia32' &&
        console.warn(`fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;

    see https://github.com/jprichardson/node-fs-extra/issues/269`);
    let n = mE(r, e);
    if (t.filter && !t.filter(r, e)) return;
    let i = Gt.dirname(e);
    return oe.existsSync(i) || wO(i), hE(n, r, e, t);
  }
  function hE(r, e, t, n) {
    if (!(n.filter && !n.filter(e, t))) return OO(r, e, t, n);
  }
  function OO(r, e, t, n) {
    let s = (n.dereference ? oe.statSync : oe.lstatSync)(e);
    if (s.isDirectory()) return NO(s, r, e, t, n);
    if (s.isFile() || s.isCharacterDevice() || s.isBlockDevice())
      return TO(s, r, e, t, n);
    if (s.isSymbolicLink()) return kO(r, e, t, n);
  }
  function TO(r, e, t, n, i) {
    return e === No ? dE(r, t, n, i) : CO(r, t, n, i);
  }
  function CO(r, e, t, n) {
    if (n.overwrite) return oe.unlinkSync(t), dE(r, e, t, n);
    if (n.errorOnExist) throw new Error(`'${t}' already exists`);
  }
  function dE(r, e, t, n) {
    return typeof oe.copyFileSync == 'function'
      ? (oe.copyFileSync(e, t),
        oe.chmodSync(t, r.mode),
        n.preserveTimestamps ? RO(t, r.atime, r.mtime) : void 0)
      : IO(r, e, t, n);
  }
  function IO(r, e, t, n) {
    let s = rl()(65536),
      o = oe.openSync(e, 'r'),
      a = oe.openSync(t, 'w', r.mode),
      c = 0;
    for (; c < r.size; ) {
      let l = oe.readSync(o, s, 0, 65536, c);
      oe.writeSync(a, s, 0, l), (c += l);
    }
    n.preserveTimestamps && oe.futimesSync(a, r.atime, r.mtime),
      oe.closeSync(o),
      oe.closeSync(a);
  }
  function NO(r, e, t, n, i) {
    if (e === No) return AO(r, t, n, i);
    if (e && !e.isDirectory())
      throw new Error(
        `Cannot overwrite non-directory '${n}' with directory '${t}'.`
      );
    return pE(t, n, i);
  }
  function AO(r, e, t, n) {
    return oe.mkdirSync(t), pE(e, t, n), oe.chmodSync(t, r.mode);
  }
  function pE(r, e, t) {
    oe.readdirSync(r).forEach((n) => DO(n, r, e, t));
  }
  function DO(r, e, t, n) {
    let i = Gt.join(e, r),
      s = Gt.join(t, r),
      o = mE(i, s);
    return hE(o, i, s, n);
  }
  function kO(r, e, t, n) {
    let i = oe.readlinkSync(e);
    if ((n.dereference && (i = Gt.resolve(process.cwd(), i)), r === No))
      return oe.symlinkSync(i, t);
    {
      let s;
      try {
        s = oe.readlinkSync(t);
      } catch (o) {
        if (o.code === 'EINVAL' || o.code === 'UNKNOWN')
          return oe.symlinkSync(i, t);
        throw o;
      }
      if ((n.dereference && (s = Gt.resolve(process.cwd(), s)), nl(i, s)))
        throw new Error(
          `Cannot copy '${i}' to a subdirectory of itself, '${s}'.`
        );
      if (oe.statSync(t).isDirectory() && nl(s, i))
        throw new Error(`Cannot overwrite '${s}' with '${i}'.`);
      return LO(i, t);
    }
  }
  function LO(r, e) {
    return oe.unlinkSync(e), oe.symlinkSync(r, e);
  }
  function nl(r, e) {
    let t = Gt.resolve(r).split(Gt.sep),
      n = Gt.resolve(e).split(Gt.sep);
    return t.reduce((i, s, o) => i && n[o] === s, !0);
  }
  function PO(r, e) {
    let t = oe.statSync(r),
      n;
    try {
      n = oe.statSync(e);
    } catch (i) {
      if (i.code === 'ENOENT') return { srcStat: t, destStat: No };
      throw i;
    }
    return { srcStat: t, destStat: n };
  }
  function mE(r, e) {
    let { srcStat: t, destStat: n } = PO(r, e);
    if (n.ino && n.ino === t.ino)
      throw new Error('Source and destination must not be the same.');
    if (t.isDirectory() && nl(r, e))
      throw new Error(
        `Cannot copy '${r}' to a subdirectory of itself, '${e}'.`
      );
    return n;
  }
  yE.exports = xO;
});
var il = E((fk, gE) => {
  'use strict';
  gE.exports = { copySync: EE() };
});
var Tt = E((hk, bE) => {
  'use strict';
  var FO = Ve().fromPromise,
    _E = Vu();
  function UO(r) {
    return _E
      .access(r)
      .then(() => !0)
      .catch(() => !1);
  }
  bE.exports = { pathExists: FO(UO), pathExistsSync: _E.existsSync };
});
var NE = E((dk, IE) => {
  'use strict';
  var he = ge(),
    $t = require('path'),
    MO = Qe().mkdirs,
    qO = Tt().pathExists,
    BO = tl().utimesMillis,
    Ao = Symbol('notExist');
  function jO(r, e, t, n) {
    typeof t == 'function' && !n
      ? ((n = t), (t = {}))
      : typeof t == 'function' && (t = { filter: t }),
      (n = n || function () {}),
      (t = t || {}),
      (t.clobber = 'clobber' in t ? !!t.clobber : !0),
      (t.overwrite = 'overwrite' in t ? !!t.overwrite : t.clobber),
      t.preserveTimestamps &&
        process.arch === 'ia32' &&
        console.warn(`fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;

    see https://github.com/jprichardson/node-fs-extra/issues/269`),
      CE(r, e, (i, s) =>
        i ? n(i) : t.filter ? wE(vE, s, r, e, t, n) : vE(s, r, e, t, n)
      );
  }
  function vE(r, e, t, n, i) {
    let s = $t.dirname(t);
    qO(s, (o, a) => {
      if (o) return i(o);
      if (a) return sl(r, e, t, n, i);
      MO(s, (c) => (c ? i(c) : sl(r, e, t, n, i)));
    });
  }
  function wE(r, e, t, n, i, s) {
    Promise.resolve(i.filter(t, n)).then(
      (o) => (o ? (e ? r(e, t, n, i, s) : r(t, n, i, s)) : s()),
      (o) => s(o)
    );
  }
  function sl(r, e, t, n, i) {
    return n.filter ? wE(SE, r, e, t, n, i) : SE(r, e, t, n, i);
  }
  function SE(r, e, t, n, i) {
    (n.dereference ? he.stat : he.lstat)(e, (o, a) => {
      if (o) return i(o);
      if (a.isDirectory()) return zO(a, r, e, t, n, i);
      if (a.isFile() || a.isCharacterDevice() || a.isBlockDevice())
        return GO(a, r, e, t, n, i);
      if (a.isSymbolicLink()) return XO(r, e, t, n, i);
    });
  }
  function GO(r, e, t, n, i, s) {
    return e === Ao ? RE(r, t, n, i, s) : $O(r, t, n, i, s);
  }
  function $O(r, e, t, n, i) {
    if (n.overwrite) he.unlink(t, (s) => (s ? i(s) : RE(r, e, t, n, i)));
    else return n.errorOnExist ? i(new Error(`'${t}' already exists`)) : i();
  }
  function RE(r, e, t, n, i) {
    return typeof he.copyFile == 'function'
      ? he.copyFile(e, t, (s) => (s ? i(s) : xE(r, t, n, i)))
      : HO(r, e, t, n, i);
  }
  function HO(r, e, t, n, i) {
    let s = he.createReadStream(e);
    s.on('error', (o) => i(o)).once('open', () => {
      let o = he.createWriteStream(t, { mode: r.mode });
      o.on('error', (a) => i(a))
        .on('open', () => s.pipe(o))
        .once('close', () => xE(r, t, n, i));
    });
  }
  function xE(r, e, t, n) {
    he.chmod(e, r.mode, (i) =>
      i ? n(i) : t.preserveTimestamps ? BO(e, r.atime, r.mtime, n) : n()
    );
  }
  function zO(r, e, t, n, i, s) {
    return e === Ao
      ? VO(r, t, n, i, s)
      : e && !e.isDirectory()
      ? s(
          new Error(
            `Cannot overwrite non-directory '${n}' with directory '${t}'.`
          )
        )
      : OE(t, n, i, s);
  }
  function VO(r, e, t, n, i) {
    he.mkdir(t, (s) => {
      if (s) return i(s);
      OE(e, t, n, (o) => (o ? i(o) : he.chmod(t, r.mode, i)));
    });
  }
  function OE(r, e, t, n) {
    he.readdir(r, (i, s) => (i ? n(i) : TE(s, r, e, t, n)));
  }
  function TE(r, e, t, n, i) {
    let s = r.pop();
    return s ? WO(r, s, e, t, n, i) : i();
  }
  function WO(r, e, t, n, i, s) {
    let o = $t.join(t, e),
      a = $t.join(n, e);
    CE(o, a, (c, l) => {
      if (c) return s(c);
      sl(l, o, a, i, (u) => (u ? s(u) : TE(r, t, n, i, s)));
    });
  }
  function XO(r, e, t, n, i) {
    he.readlink(e, (s, o) => {
      if (s) return i(s);
      if ((n.dereference && (o = $t.resolve(process.cwd(), o)), r === Ao))
        return he.symlink(o, t, i);
      he.readlink(t, (a, c) =>
        a
          ? a.code === 'EINVAL' || a.code === 'UNKNOWN'
            ? he.symlink(o, t, i)
            : i(a)
          : (n.dereference && (c = $t.resolve(process.cwd(), c)),
            ol(o, c)
              ? i(
                  new Error(
                    `Cannot copy '${o}' to a subdirectory of itself, '${c}'.`
                  )
                )
              : r.isDirectory() && ol(c, o)
              ? i(new Error(`Cannot overwrite '${c}' with '${o}'.`))
              : KO(o, t, i))
      );
    });
  }
  function KO(r, e, t) {
    he.unlink(e, (n) => (n ? t(n) : he.symlink(r, e, t)));
  }
  function ol(r, e) {
    let t = $t.resolve(r).split($t.sep),
      n = $t.resolve(e).split($t.sep);
    return t.reduce((i, s, o) => i && n[o] === s, !0);
  }
  function YO(r, e, t) {
    he.stat(r, (n, i) => {
      if (n) return t(n);
      he.stat(e, (s, o) =>
        s
          ? s.code === 'ENOENT'
            ? t(null, { srcStat: i, destStat: Ao })
            : t(s)
          : t(null, { srcStat: i, destStat: o })
      );
    });
  }
  function CE(r, e, t) {
    YO(r, e, (n, i) => {
      if (n) return t(n);
      let { srcStat: s, destStat: o } = i;
      return o.ino && o.ino === s.ino
        ? t(new Error('Source and destination must not be the same.'))
        : s.isDirectory() && ol(r, e)
        ? t(
            new Error(`Cannot copy '${r}' to a subdirectory of itself, '${e}'.`)
          )
        : t(null, o);
    });
  }
  IE.exports = jO;
});
var al = E((pk, AE) => {
  'use strict';
  var JO = Ve().fromCallback;
  AE.exports = { copy: JO(NE()) };
});
var BE = E((mk, qE) => {
  'use strict';
  var DE = ge(),
    FE = require('path'),
    ee = require('assert'),
    Si = process.platform === 'win32';
  function UE(r) {
    ['unlink', 'chmod', 'stat', 'lstat', 'rmdir', 'readdir'].forEach((t) => {
      (r[t] = r[t] || DE[t]), (t = t + 'Sync'), (r[t] = r[t] || DE[t]);
    }),
      (r.maxBusyTries = r.maxBusyTries || 3);
  }
  function cl(r, e, t) {
    let n = 0;
    typeof e == 'function' && ((t = e), (e = {})),
      ee(r, 'rimraf: missing path'),
      ee.strictEqual(typeof r, 'string', 'rimraf: path should be a string'),
      ee.strictEqual(
        typeof t,
        'function',
        'rimraf: callback function required'
      ),
      ee(e, 'rimraf: invalid options argument provided'),
      ee.strictEqual(typeof e, 'object', 'rimraf: options should be object'),
      UE(e),
      kE(r, e, function i(s) {
        if (s) {
          if (
            (s.code === 'EBUSY' ||
              s.code === 'ENOTEMPTY' ||
              s.code === 'EPERM') &&
            n < e.maxBusyTries
          ) {
            n++;
            let o = n * 100;
            return setTimeout(() => kE(r, e, i), o);
          }
          s.code === 'ENOENT' && (s = null);
        }
        t(s);
      });
  }
  function kE(r, e, t) {
    ee(r),
      ee(e),
      ee(typeof t == 'function'),
      e.lstat(r, (n, i) => {
        if (n && n.code === 'ENOENT') return t(null);
        if (n && n.code === 'EPERM' && Si) return LE(r, e, n, t);
        if (i && i.isDirectory()) return Do(r, e, n, t);
        e.unlink(r, (s) => {
          if (s) {
            if (s.code === 'ENOENT') return t(null);
            if (s.code === 'EPERM') return Si ? LE(r, e, s, t) : Do(r, e, s, t);
            if (s.code === 'EISDIR') return Do(r, e, s, t);
          }
          return t(s);
        });
      });
  }
  function LE(r, e, t, n) {
    ee(r),
      ee(e),
      ee(typeof n == 'function'),
      t && ee(t instanceof Error),
      e.chmod(r, 438, (i) => {
        i
          ? n(i.code === 'ENOENT' ? null : t)
          : e.stat(r, (s, o) => {
              s
                ? n(s.code === 'ENOENT' ? null : t)
                : o.isDirectory()
                ? Do(r, e, t, n)
                : e.unlink(r, n);
            });
      });
  }
  function PE(r, e, t) {
    let n;
    ee(r), ee(e), t && ee(t instanceof Error);
    try {
      e.chmodSync(r, 438);
    } catch (i) {
      if (i.code === 'ENOENT') return;
      throw t;
    }
    try {
      n = e.statSync(r);
    } catch (i) {
      if (i.code === 'ENOENT') return;
      throw t;
    }
    n.isDirectory() ? ko(r, e, t) : e.unlinkSync(r);
  }
  function Do(r, e, t, n) {
    ee(r),
      ee(e),
      t && ee(t instanceof Error),
      ee(typeof n == 'function'),
      e.rmdir(r, (i) => {
        i &&
        (i.code === 'ENOTEMPTY' || i.code === 'EEXIST' || i.code === 'EPERM')
          ? ZO(r, e, n)
          : i && i.code === 'ENOTDIR'
          ? n(t)
          : n(i);
      });
  }
  function ZO(r, e, t) {
    ee(r),
      ee(e),
      ee(typeof t == 'function'),
      e.readdir(r, (n, i) => {
        if (n) return t(n);
        let s = i.length,
          o;
        if (s === 0) return e.rmdir(r, t);
        i.forEach((a) => {
          cl(FE.join(r, a), e, (c) => {
            if (!o) {
              if (c) return t((o = c));
              --s === 0 && e.rmdir(r, t);
            }
          });
        });
      });
  }
  function ME(r, e) {
    let t;
    (e = e || {}),
      UE(e),
      ee(r, 'rimraf: missing path'),
      ee.strictEqual(typeof r, 'string', 'rimraf: path should be a string'),
      ee(e, 'rimraf: missing options'),
      ee.strictEqual(typeof e, 'object', 'rimraf: options should be object');
    try {
      t = e.lstatSync(r);
    } catch (n) {
      if (n.code === 'ENOENT') return;
      n.code === 'EPERM' && Si && PE(r, e, n);
    }
    try {
      t && t.isDirectory() ? ko(r, e, null) : e.unlinkSync(r);
    } catch (n) {
      if (n.code === 'ENOENT') return;
      if (n.code === 'EPERM') return Si ? PE(r, e, n) : ko(r, e, n);
      if (n.code !== 'EISDIR') throw n;
      ko(r, e, n);
    }
  }
  function ko(r, e, t) {
    ee(r), ee(e), t && ee(t instanceof Error);
    try {
      e.rmdirSync(r);
    } catch (n) {
      if (n.code === 'ENOTDIR') throw t;
      if (n.code === 'ENOTEMPTY' || n.code === 'EEXIST' || n.code === 'EPERM')
        QO(r, e);
      else if (n.code !== 'ENOENT') throw n;
    }
  }
  function QO(r, e) {
    if (
      (ee(r), ee(e), e.readdirSync(r).forEach((t) => ME(FE.join(r, t), e)), Si)
    ) {
      let t = Date.now();
      do
        try {
          return e.rmdirSync(r, e);
        } catch {}
      while (Date.now() - t < 500);
    } else return e.rmdirSync(r, e);
  }
  qE.exports = cl;
  cl.sync = ME;
});
var wi = E((yk, GE) => {
  'use strict';
  var eT = Ve().fromCallback,
    jE = BE();
  GE.exports = { remove: eT(jE), removeSync: jE.sync };
});
var YE = E((Ek, KE) => {
  'use strict';
  var tT = Ve().fromCallback,
    zE = require('fs'),
    VE = require('path'),
    WE = Qe(),
    XE = wi(),
    $E = tT(function (e, t) {
      (t = t || function () {}),
        zE.readdir(e, (n, i) => {
          if (n) return WE.mkdirs(e, t);
          (i = i.map((o) => VE.join(e, o))), s();
          function s() {
            let o = i.pop();
            if (!o) return t();
            XE.remove(o, (a) => {
              if (a) return t(a);
              s();
            });
          }
        });
    });
  function HE(r) {
    let e;
    try {
      e = zE.readdirSync(r);
    } catch {
      return WE.mkdirsSync(r);
    }
    e.forEach((t) => {
      (t = VE.join(r, t)), XE.removeSync(t);
    });
  }
  KE.exports = {
    emptyDirSync: HE,
    emptydirSync: HE,
    emptyDir: $E,
    emptydir: $E,
  };
});
var eg = E((gk, QE) => {
  'use strict';
  var rT = Ve().fromCallback,
    JE = require('path'),
    Ri = ge(),
    ZE = Qe(),
    nT = Tt().pathExists;
  function iT(r, e) {
    function t() {
      Ri.writeFile(r, '', (n) => {
        if (n) return e(n);
        e();
      });
    }
    Ri.stat(r, (n, i) => {
      if (!n && i.isFile()) return e();
      let s = JE.dirname(r);
      nT(s, (o, a) => {
        if (o) return e(o);
        if (a) return t();
        ZE.mkdirs(s, (c) => {
          if (c) return e(c);
          t();
        });
      });
    });
  }
  function sT(r) {
    let e;
    try {
      e = Ri.statSync(r);
    } catch {}
    if (e && e.isFile()) return;
    let t = JE.dirname(r);
    Ri.existsSync(t) || ZE.mkdirsSync(t), Ri.writeFileSync(r, '');
  }
  QE.exports = { createFile: rT(iT), createFileSync: sT };
});
var sg = E((_k, ig) => {
  'use strict';
  var oT = Ve().fromCallback,
    rg = require('path'),
    Hr = ge(),
    ng = Qe(),
    tg = Tt().pathExists;
  function aT(r, e, t) {
    function n(i, s) {
      Hr.link(i, s, (o) => {
        if (o) return t(o);
        t(null);
      });
    }
    tg(e, (i, s) => {
      if (i) return t(i);
      if (s) return t(null);
      Hr.lstat(r, (o) => {
        if (o)
          return (o.message = o.message.replace('lstat', 'ensureLink')), t(o);
        let a = rg.dirname(e);
        tg(a, (c, l) => {
          if (c) return t(c);
          if (l) return n(r, e);
          ng.mkdirs(a, (u) => {
            if (u) return t(u);
            n(r, e);
          });
        });
      });
    });
  }
  function cT(r, e) {
    if (Hr.existsSync(e)) return;
    try {
      Hr.lstatSync(r);
    } catch (s) {
      throw ((s.message = s.message.replace('lstat', 'ensureLink')), s);
    }
    let n = rg.dirname(e);
    return Hr.existsSync(n) || ng.mkdirsSync(n), Hr.linkSync(r, e);
  }
  ig.exports = { createLink: oT(aT), createLinkSync: cT };
});
var ag = E((bk, og) => {
  'use strict';
  var dr = require('path'),
    xi = ge(),
    uT = Tt().pathExists;
  function lT(r, e, t) {
    if (dr.isAbsolute(r))
      return xi.lstat(r, (n) =>
        n
          ? ((n.message = n.message.replace('lstat', 'ensureSymlink')), t(n))
          : t(null, { toCwd: r, toDst: r })
      );
    {
      let n = dr.dirname(e),
        i = dr.join(n, r);
      return uT(i, (s, o) =>
        s
          ? t(s)
          : o
          ? t(null, { toCwd: i, toDst: r })
          : xi.lstat(r, (a) =>
              a
                ? ((a.message = a.message.replace('lstat', 'ensureSymlink')),
                  t(a))
                : t(null, { toCwd: r, toDst: dr.relative(n, r) })
            )
      );
    }
  }
  function fT(r, e) {
    let t;
    if (dr.isAbsolute(r)) {
      if (((t = xi.existsSync(r)), !t))
        throw new Error('absolute srcpath does not exist');
      return { toCwd: r, toDst: r };
    } else {
      let n = dr.dirname(e),
        i = dr.join(n, r);
      if (((t = xi.existsSync(i)), t)) return { toCwd: i, toDst: r };
      if (((t = xi.existsSync(r)), !t))
        throw new Error('relative srcpath does not exist');
      return { toCwd: r, toDst: dr.relative(n, r) };
    }
  }
  og.exports = { symlinkPaths: lT, symlinkPathsSync: fT };
});
var lg = E((vk, ug) => {
  'use strict';
  var cg = ge();
  function hT(r, e, t) {
    if (
      ((t = typeof e == 'function' ? e : t),
      (e = typeof e == 'function' ? !1 : e),
      e)
    )
      return t(null, e);
    cg.lstat(r, (n, i) => {
      if (n) return t(null, 'file');
      (e = i && i.isDirectory() ? 'dir' : 'file'), t(null, e);
    });
  }
  function dT(r, e) {
    let t;
    if (e) return e;
    try {
      t = cg.lstatSync(r);
    } catch {
      return 'file';
    }
    return t && t.isDirectory() ? 'dir' : 'file';
  }
  ug.exports = { symlinkType: hT, symlinkTypeSync: dT };
});
var Eg = E((Sk, yg) => {
  'use strict';
  var pT = Ve().fromCallback,
    hg = require('path'),
    Ln = ge(),
    dg = Qe(),
    mT = dg.mkdirs,
    yT = dg.mkdirsSync,
    pg = ag(),
    ET = pg.symlinkPaths,
    gT = pg.symlinkPathsSync,
    mg = lg(),
    _T = mg.symlinkType,
    bT = mg.symlinkTypeSync,
    fg = Tt().pathExists;
  function vT(r, e, t, n) {
    (n = typeof t == 'function' ? t : n),
      (t = typeof t == 'function' ? !1 : t),
      fg(e, (i, s) => {
        if (i) return n(i);
        if (s) return n(null);
        ET(r, e, (o, a) => {
          if (o) return n(o);
          (r = a.toDst),
            _T(a.toCwd, t, (c, l) => {
              if (c) return n(c);
              let u = hg.dirname(e);
              fg(u, (f, h) => {
                if (f) return n(f);
                if (h) return Ln.symlink(r, e, l, n);
                mT(u, (d) => {
                  if (d) return n(d);
                  Ln.symlink(r, e, l, n);
                });
              });
            });
        });
      });
  }
  function ST(r, e, t) {
    if (Ln.existsSync(e)) return;
    let i = gT(r, e);
    (r = i.toDst), (t = bT(i.toCwd, t));
    let s = hg.dirname(e);
    return Ln.existsSync(s) || yT(s), Ln.symlinkSync(r, e, t);
  }
  yg.exports = { createSymlink: pT(vT), createSymlinkSync: ST };
});
var _g = E((wk, gg) => {
  'use strict';
  var Lo = eg(),
    Po = sg(),
    Fo = Eg();
  gg.exports = {
    createFile: Lo.createFile,
    createFileSync: Lo.createFileSync,
    ensureFile: Lo.createFile,
    ensureFileSync: Lo.createFileSync,
    createLink: Po.createLink,
    createLinkSync: Po.createLinkSync,
    ensureLink: Po.createLink,
    ensureLinkSync: Po.createLinkSync,
    createSymlink: Fo.createSymlink,
    createSymlinkSync: Fo.createSymlinkSync,
    ensureSymlink: Fo.createSymlink,
    ensureSymlinkSync: Fo.createSymlinkSync,
  };
});
var wg = E((Rk, Sg) => {
  'use strict';
  var Pn;
  try {
    Pn = ge();
  } catch {
    Pn = require('fs');
  }
  function wT(r, e, t) {
    t == null && ((t = e), (e = {})),
      typeof e == 'string' && (e = { encoding: e }),
      (e = e || {});
    var n = e.fs || Pn,
      i = !0;
    'throws' in e && (i = e.throws),
      n.readFile(r, e, function (s, o) {
        if (s) return t(s);
        o = vg(o);
        var a;
        try {
          a = JSON.parse(o, e ? e.reviver : null);
        } catch (c) {
          return i ? ((c.message = r + ': ' + c.message), t(c)) : t(null, null);
        }
        t(null, a);
      });
  }
  function RT(r, e) {
    (e = e || {}), typeof e == 'string' && (e = { encoding: e });
    var t = e.fs || Pn,
      n = !0;
    'throws' in e && (n = e.throws);
    try {
      var i = t.readFileSync(r, e);
      return (i = vg(i)), JSON.parse(i, e.reviver);
    } catch (s) {
      if (n) throw ((s.message = r + ': ' + s.message), s);
      return null;
    }
  }
  function bg(r, e) {
    var t,
      n = `
`;
    typeof e == 'object' &&
      e !== null &&
      (e.spaces && (t = e.spaces), e.EOL && (n = e.EOL));
    var i = JSON.stringify(r, e ? e.replacer : null, t);
    return i.replace(/\n/g, n) + n;
  }
  function xT(r, e, t, n) {
    n == null && ((n = t), (t = {})), (t = t || {});
    var i = t.fs || Pn,
      s = '';
    try {
      s = bg(e, t);
    } catch (o) {
      n && n(o, null);
      return;
    }
    i.writeFile(r, s, t, n);
  }
  function OT(r, e, t) {
    t = t || {};
    var n = t.fs || Pn,
      i = bg(e, t);
    return n.writeFileSync(r, i, t);
  }
  function vg(r) {
    return (
      Buffer.isBuffer(r) && (r = r.toString('utf8')),
      (r = r.replace(/^\uFEFF/, '')),
      r
    );
  }
  var TT = { readFile: wT, readFileSync: RT, writeFile: xT, writeFileSync: OT };
  Sg.exports = TT;
});
var Mo = E((xk, xg) => {
  'use strict';
  var Rg = Ve().fromCallback,
    Uo = wg();
  xg.exports = {
    readJson: Rg(Uo.readFile),
    readJsonSync: Uo.readFileSync,
    writeJson: Rg(Uo.writeFile),
    writeJsonSync: Uo.writeFileSync,
  };
});
var Cg = E((Ok, Tg) => {
  'use strict';
  var CT = require('path'),
    IT = Qe(),
    NT = Tt().pathExists,
    Og = Mo();
  function AT(r, e, t, n) {
    typeof t == 'function' && ((n = t), (t = {}));
    let i = CT.dirname(r);
    NT(i, (s, o) => {
      if (s) return n(s);
      if (o) return Og.writeJson(r, e, t, n);
      IT.mkdirs(i, (a) => {
        if (a) return n(a);
        Og.writeJson(r, e, t, n);
      });
    });
  }
  Tg.exports = AT;
});
var Ng = E((Tk, Ig) => {
  'use strict';
  var DT = ge(),
    kT = require('path'),
    LT = Qe(),
    PT = Mo();
  function FT(r, e, t) {
    let n = kT.dirname(r);
    DT.existsSync(n) || LT.mkdirsSync(n), PT.writeJsonSync(r, e, t);
  }
  Ig.exports = FT;
});
var Dg = E((Ck, Ag) => {
  'use strict';
  var UT = Ve().fromCallback,
    Be = Mo();
  Be.outputJson = UT(Cg());
  Be.outputJsonSync = Ng();
  Be.outputJSON = Be.outputJson;
  Be.outputJSONSync = Be.outputJsonSync;
  Be.writeJSON = Be.writeJson;
  Be.writeJSONSync = Be.writeJsonSync;
  Be.readJSON = Be.readJson;
  Be.readJSONSync = Be.readJsonSync;
  Ag.exports = Be;
});
var Fg = E((Ik, Pg) => {
  'use strict';
  var We = ge(),
    zr = require('path'),
    MT = il().copySync,
    ul = wi().removeSync,
    qT = Qe().mkdirsSync,
    BT = rl();
  function Lg(r, e, t) {
    t = t || {};
    let n = t.overwrite || t.clobber || !1;
    if (((r = zr.resolve(r)), (e = zr.resolve(e)), r === e))
      return We.accessSync(r);
    if ($T(r, e)) throw new Error(`Cannot move '${r}' into itself '${e}'.`);
    qT(zr.dirname(e)), i();
    function i() {
      if (n)
        try {
          return We.renameSync(r, e);
        } catch (s) {
          if (
            s.code === 'ENOTEMPTY' ||
            s.code === 'EEXIST' ||
            s.code === 'EPERM'
          )
            return ul(e), (t.overwrite = !1), Lg(r, e, t);
          if (s.code !== 'EXDEV') throw s;
          return kg(r, e, n);
        }
      else
        try {
          return We.linkSync(r, e), We.unlinkSync(r);
        } catch (s) {
          if (
            s.code === 'EXDEV' ||
            s.code === 'EISDIR' ||
            s.code === 'EPERM' ||
            s.code === 'ENOTSUP'
          )
            return kg(r, e, n);
          throw s;
        }
    }
  }
  function kg(r, e, t) {
    return We.statSync(r).isDirectory() ? GT(r, e, t) : jT(r, e, t);
  }
  function jT(r, e, t) {
    let i = BT(65536),
      s = t ? 'w' : 'wx',
      o = We.openSync(r, 'r'),
      a = We.fstatSync(o),
      c = We.openSync(e, s, a.mode),
      l = 0;
    for (; l < a.size; ) {
      let u = We.readSync(o, i, 0, 65536, l);
      We.writeSync(c, i, 0, u), (l += u);
    }
    return We.closeSync(o), We.closeSync(c), We.unlinkSync(r);
  }
  function GT(r, e, t) {
    let n = { overwrite: !1 };
    t && ul(e), i();
    function i() {
      return MT(r, e, n), ul(r);
    }
  }
  function $T(r, e) {
    try {
      return (
        We.statSync(r).isDirectory() &&
        r !== e &&
        e.indexOf(r) > -1 &&
        e.split(zr.dirname(r) + zr.sep)[1].split(zr.sep)[0] === zr.basename(r)
      );
    } catch {
      return !1;
    }
  }
  Pg.exports = { moveSync: Lg };
});
var Bg = E((Nk, qg) => {
  'use strict';
  var HT = Ve().fromCallback,
    ll = ge(),
    Oi = require('path'),
    zT = al().copy,
    Mg = wi().remove,
    VT = Qe().mkdirp,
    WT = Tt().pathExists;
  function XT(r, e, t, n) {
    typeof t == 'function' && ((n = t), (t = {}));
    let i = t.overwrite || t.clobber || !1;
    if (((r = Oi.resolve(r)), (e = Oi.resolve(e)), r === e))
      return ll.access(r, n);
    ll.stat(r, (s, o) => {
      if (s) return n(s);
      if (o.isDirectory() && JT(r, e))
        return n(
          new Error(`Cannot move '${r}' to a subdirectory of itself, '${e}'.`)
        );
      VT(Oi.dirname(e), (a) => (a ? n(a) : KT(r, e, i, n)));
    });
  }
  function KT(r, e, t, n) {
    if (t) return Mg(e, (i) => (i ? n(i) : Ug(r, e, t, n)));
    WT(e, (i, s) =>
      i ? n(i) : s ? n(new Error('dest already exists.')) : Ug(r, e, t, n)
    );
  }
  function Ug(r, e, t, n) {
    ll.rename(r, e, (i) =>
      i ? (i.code !== 'EXDEV' ? n(i) : YT(r, e, t, n)) : n()
    );
  }
  function YT(r, e, t, n) {
    zT(r, e, { overwrite: t, errorOnExist: !0 }, (s) => (s ? n(s) : Mg(r, n)));
  }
  function JT(r, e) {
    let t = r.split(Oi.sep),
      n = e.split(Oi.sep);
    return t.reduce((i, s, o) => i && n[o] === s, !0);
  }
  qg.exports = { move: HT(XT) };
});
var Hg = E((Ak, $g) => {
  'use strict';
  var ZT = Ve().fromCallback,
    Ti = ge(),
    jg = require('path'),
    Gg = Qe(),
    QT = Tt().pathExists;
  function eC(r, e, t, n) {
    typeof t == 'function' && ((n = t), (t = 'utf8'));
    let i = jg.dirname(r);
    QT(i, (s, o) => {
      if (s) return n(s);
      if (o) return Ti.writeFile(r, e, t, n);
      Gg.mkdirs(i, (a) => {
        if (a) return n(a);
        Ti.writeFile(r, e, t, n);
      });
    });
  }
  function tC(r, ...e) {
    let t = jg.dirname(r);
    if (Ti.existsSync(t)) return Ti.writeFileSync(r, ...e);
    Gg.mkdirsSync(t), Ti.writeFileSync(r, ...e);
  }
  $g.exports = { outputFile: ZT(eC), outputFileSync: tC };
});
var qo = E((Dk, fl) => {
  'use strict';
  fl.exports = Object.assign(
    {},
    Vu(),
    il(),
    al(),
    YE(),
    _g(),
    Dg(),
    Qe(),
    Fg(),
    Bg(),
    Hg(),
    Tt(),
    wi()
  );
  var zg = require('fs');
  Object.getOwnPropertyDescriptor(zg, 'promises') &&
    Object.defineProperty(fl.exports, 'promises', {
      get() {
        return zg.promises;
      },
    });
});
var dl = E((hl) => {
  'use strict';
  Object.defineProperty(hl, '__esModule', { value: !0 });
  function rC(r) {
    return typeof r == 'function';
  }
  hl.isFunction = rC;
});
var Bo = E((ml) => {
  'use strict';
  Object.defineProperty(ml, '__esModule', { value: !0 });
  var pl = !1;
  ml.config = {
    Promise: void 0,
    set useDeprecatedSynchronousErrorHandling(r) {
      if (r) {
        var e = new Error();
        console.warn(
          `DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: 
` + e.stack
        );
      } else
        pl &&
          console.log('RxJS: Back to a better error behavior. Thank you. <3');
      pl = r;
    },
    get useDeprecatedSynchronousErrorHandling() {
      return pl;
    },
  };
});
var jo = E((yl) => {
  'use strict';
  Object.defineProperty(yl, '__esModule', { value: !0 });
  function nC(r) {
    setTimeout(function () {
      throw r;
    }, 0);
  }
  yl.hostReportError = nC;
});
var gl = E((El) => {
  'use strict';
  Object.defineProperty(El, '__esModule', { value: !0 });
  var iC = Bo(),
    sC = jo();
  El.empty = {
    closed: !0,
    next: function (r) {},
    error: function (r) {
      if (iC.config.useDeprecatedSynchronousErrorHandling) throw r;
      sC.hostReportError(r);
    },
    complete: function () {},
  };
});
var Vg = E((_l) => {
  'use strict';
  Object.defineProperty(_l, '__esModule', { value: !0 });
  _l.isArray = (function () {
    return (
      Array.isArray ||
      function (r) {
        return r && typeof r.length == 'number';
      }
    );
  })();
});
var vl = E((bl) => {
  'use strict';
  Object.defineProperty(bl, '__esModule', { value: !0 });
  function oC(r) {
    return r !== null && typeof r == 'object';
  }
  bl.isObject = oC;
});
var Wg = E((Sl) => {
  'use strict';
  Object.defineProperty(Sl, '__esModule', { value: !0 });
  var aC = (function () {
    function r(e) {
      return (
        Error.call(this),
        (this.message = e
          ? e.length +
            ` errors occurred during unsubscription:
` +
            e.map(function (t, n) {
              return n + 1 + ') ' + t.toString();
            }).join(`
  `)
          : ''),
        (this.name = 'UnsubscriptionError'),
        (this.errors = e),
        this
      );
    }
    return (r.prototype = Object.create(Error.prototype)), r;
  })();
  Sl.UnsubscriptionError = aC;
});
var pr = E((wl) => {
  'use strict';
  Object.defineProperty(wl, '__esModule', { value: !0 });
  var cC = Vg(),
    uC = vl(),
    lC = dl(),
    Go = Wg(),
    fC = (function () {
      function r(e) {
        (this.closed = !1),
          (this._parentOrParents = null),
          (this._subscriptions = null),
          e && (this._unsubscribe = e);
      }
      return (
        (r.prototype.unsubscribe = function () {
          var e;
          if (!this.closed) {
            var t = this,
              n = t._parentOrParents,
              i = t._unsubscribe,
              s = t._subscriptions;
            if (
              ((this.closed = !0),
              (this._parentOrParents = null),
              (this._subscriptions = null),
              n instanceof r)
            )
              n.remove(this);
            else if (n !== null)
              for (var o = 0; o < n.length; ++o) {
                var a = n[o];
                a.remove(this);
              }
            if (lC.isFunction(i))
              try {
                i.call(this);
              } catch (u) {
                e = u instanceof Go.UnsubscriptionError ? Xg(u.errors) : [u];
              }
            if (cC.isArray(s))
              for (var o = -1, c = s.length; ++o < c; ) {
                var l = s[o];
                if (uC.isObject(l))
                  try {
                    l.unsubscribe();
                  } catch (f) {
                    (e = e || []),
                      f instanceof Go.UnsubscriptionError
                        ? (e = e.concat(Xg(f.errors)))
                        : e.push(f);
                  }
              }
            if (e) throw new Go.UnsubscriptionError(e);
          }
        }),
        (r.prototype.add = function (e) {
          var t = e;
          if (!e) return r.EMPTY;
          switch (typeof e) {
            case 'function':
              t = new r(e);
            case 'object':
              if (t === this || t.closed || typeof t.unsubscribe != 'function')
                return t;
              if (this.closed) return t.unsubscribe(), t;
              if (!(t instanceof r)) {
                var n = t;
                (t = new r()), (t._subscriptions = [n]);
              }
              break;
            default:
              throw new Error(
                'unrecognized teardown ' + e + ' added to Subscription.'
              );
          }
          var i = t._parentOrParents;
          if (i === null) t._parentOrParents = this;
          else if (i instanceof r) {
            if (i === this) return t;
            t._parentOrParents = [i, this];
          } else if (i.indexOf(this) === -1) i.push(this);
          else return t;
          var s = this._subscriptions;
          return s === null ? (this._subscriptions = [t]) : s.push(t), t;
        }),
        (r.prototype.remove = function (e) {
          var t = this._subscriptions;
          if (t) {
            var n = t.indexOf(e);
            n !== -1 && t.splice(n, 1);
          }
        }),
        (r.EMPTY = (function (e) {
          return (e.closed = !0), e;
        })(new r())),
        r
      );
    })();
  wl.Subscription = fC;
  function Xg(r) {
    return r.reduce(function (e, t) {
      return e.concat(t instanceof Go.UnsubscriptionError ? t.errors : t);
    }, []);
  }
});
var $o = E((Ci) => {
  'use strict';
  Object.defineProperty(Ci, '__esModule', { value: !0 });
  Ci.rxSubscriber = (function () {
    return typeof Symbol == 'function'
      ? Symbol('rxSubscriber')
      : '@@rxSubscriber_' + Math.random();
  })();
  Ci.$$rxSubscriber = Ci.rxSubscriber;
});
var Vr = E((Un) => {
  'use strict';
  var Yg =
    (Un && Un.__extends) ||
    (function () {
      var r = function (e, t) {
        return (
          (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (n, i) {
                n.__proto__ = i;
              }) ||
            function (n, i) {
              for (var s in i) i.hasOwnProperty(s) && (n[s] = i[s]);
            }),
          r(e, t)
        );
      };
      return function (e, t) {
        r(e, t);
        function n() {
          this.constructor = e;
        }
        e.prototype =
          t === null
            ? Object.create(t)
            : ((n.prototype = t.prototype), new n());
      };
    })();
  Object.defineProperty(Un, '__esModule', { value: !0 });
  var Kg = dl(),
    Rl = gl(),
    hC = pr(),
    dC = $o(),
    Fn = Bo(),
    Ho = jo(),
    Jg = (function (r) {
      Yg(e, r);
      function e(t, n, i) {
        var s = r.call(this) || this;
        switch (
          ((s.syncErrorValue = null),
          (s.syncErrorThrown = !1),
          (s.syncErrorThrowable = !1),
          (s.isStopped = !1),
          arguments.length)
        ) {
          case 0:
            s.destination = Rl.empty;
            break;
          case 1:
            if (!t) {
              s.destination = Rl.empty;
              break;
            }
            if (typeof t == 'object') {
              t instanceof e
                ? ((s.syncErrorThrowable = t.syncErrorThrowable),
                  (s.destination = t),
                  t.add(s))
                : ((s.syncErrorThrowable = !0), (s.destination = new xl(s, t)));
              break;
            }
          default:
            (s.syncErrorThrowable = !0), (s.destination = new xl(s, t, n, i));
            break;
        }
        return s;
      }
      return (
        (e.prototype[dC.rxSubscriber] = function () {
          return this;
        }),
        (e.create = function (t, n, i) {
          var s = new e(t, n, i);
          return (s.syncErrorThrowable = !1), s;
        }),
        (e.prototype.next = function (t) {
          this.isStopped || this._next(t);
        }),
        (e.prototype.error = function (t) {
          this.isStopped || ((this.isStopped = !0), this._error(t));
        }),
        (e.prototype.complete = function () {
          this.isStopped || ((this.isStopped = !0), this._complete());
        }),
        (e.prototype.unsubscribe = function () {
          this.closed ||
            ((this.isStopped = !0), r.prototype.unsubscribe.call(this));
        }),
        (e.prototype._next = function (t) {
          this.destination.next(t);
        }),
        (e.prototype._error = function (t) {
          this.destination.error(t), this.unsubscribe();
        }),
        (e.prototype._complete = function () {
          this.destination.complete(), this.unsubscribe();
        }),
        (e.prototype._unsubscribeAndRecycle = function () {
          var t = this._parentOrParents;
          return (
            (this._parentOrParents = null),
            this.unsubscribe(),
            (this.closed = !1),
            (this.isStopped = !1),
            (this._parentOrParents = t),
            this
          );
        }),
        e
      );
    })(hC.Subscription);
  Un.Subscriber = Jg;
  var xl = (function (r) {
    Yg(e, r);
    function e(t, n, i, s) {
      var o = r.call(this) || this;
      o._parentSubscriber = t;
      var a,
        c = o;
      return (
        Kg.isFunction(n)
          ? (a = n)
          : n &&
            ((a = n.next),
            (i = n.error),
            (s = n.complete),
            n !== Rl.empty &&
              ((c = Object.create(n)),
              Kg.isFunction(c.unsubscribe) && o.add(c.unsubscribe.bind(c)),
              (c.unsubscribe = o.unsubscribe.bind(o)))),
        (o._context = c),
        (o._next = a),
        (o._error = i),
        (o._complete = s),
        o
      );
    }
    return (
      (e.prototype.next = function (t) {
        if (!this.isStopped && this._next) {
          var n = this._parentSubscriber;
          !Fn.config.useDeprecatedSynchronousErrorHandling ||
          !n.syncErrorThrowable
            ? this.__tryOrUnsub(this._next, t)
            : this.__tryOrSetError(n, this._next, t) && this.unsubscribe();
        }
      }),
      (e.prototype.error = function (t) {
        if (!this.isStopped) {
          var n = this._parentSubscriber,
            i = Fn.config.useDeprecatedSynchronousErrorHandling;
          if (this._error)
            !i || !n.syncErrorThrowable
              ? (this.__tryOrUnsub(this._error, t), this.unsubscribe())
              : (this.__tryOrSetError(n, this._error, t), this.unsubscribe());
          else if (n.syncErrorThrowable)
            i
              ? ((n.syncErrorValue = t), (n.syncErrorThrown = !0))
              : Ho.hostReportError(t),
              this.unsubscribe();
          else {
            if ((this.unsubscribe(), i)) throw t;
            Ho.hostReportError(t);
          }
        }
      }),
      (e.prototype.complete = function () {
        var t = this;
        if (!this.isStopped) {
          var n = this._parentSubscriber;
          if (this._complete) {
            var i = function () {
              return t._complete.call(t._context);
            };
            !Fn.config.useDeprecatedSynchronousErrorHandling ||
            !n.syncErrorThrowable
              ? (this.__tryOrUnsub(i), this.unsubscribe())
              : (this.__tryOrSetError(n, i), this.unsubscribe());
          } else this.unsubscribe();
        }
      }),
      (e.prototype.__tryOrUnsub = function (t, n) {
        try {
          t.call(this._context, n);
        } catch (i) {
          if (
            (this.unsubscribe(),
            Fn.config.useDeprecatedSynchronousErrorHandling)
          )
            throw i;
          Ho.hostReportError(i);
        }
      }),
      (e.prototype.__tryOrSetError = function (t, n, i) {
        if (!Fn.config.useDeprecatedSynchronousErrorHandling)
          throw new Error('bad call');
        try {
          n.call(this._context, i);
        } catch (s) {
          return Fn.config.useDeprecatedSynchronousErrorHandling
            ? ((t.syncErrorValue = s), (t.syncErrorThrown = !0), !0)
            : (Ho.hostReportError(s), !0);
        }
        return !1;
      }),
      (e.prototype._unsubscribe = function () {
        var t = this._parentSubscriber;
        (this._context = null),
          (this._parentSubscriber = null),
          t.unsubscribe();
      }),
      e
    );
  })(Jg);
  Un.SafeSubscriber = xl;
});
var Zg = E((Ol) => {
  'use strict';
  Object.defineProperty(Ol, '__esModule', { value: !0 });
  var pC = Vr();
  function mC(r) {
    for (; r; ) {
      var e = r,
        t = e.closed,
        n = e.destination,
        i = e.isStopped;
      if (t || i) return !1;
      n && n instanceof pC.Subscriber ? (r = n) : (r = null);
    }
    return !0;
  }
  Ol.canReportError = mC;
});
var e_ = E((Cl) => {
  'use strict';
  Object.defineProperty(Cl, '__esModule', { value: !0 });
  var Tl = Vr(),
    Qg = $o(),
    yC = gl();
  function EC(r, e, t) {
    if (r) {
      if (r instanceof Tl.Subscriber) return r;
      if (r[Qg.rxSubscriber]) return r[Qg.rxSubscriber]();
    }
    return !r && !e && !t
      ? new Tl.Subscriber(yC.empty)
      : new Tl.Subscriber(r, e, t);
  }
  Cl.toSubscriber = EC;
});
var Mn = E((Il) => {
  'use strict';
  Object.defineProperty(Il, '__esModule', { value: !0 });
  Il.observable = (function () {
    return (typeof Symbol == 'function' && Symbol.observable) || '@@observable';
  })();
});
var t_ = E((Nl) => {
  'use strict';
  Object.defineProperty(Nl, '__esModule', { value: !0 });
  function gC(r) {
    return r;
  }
  Nl.identity = gC;
});
var n_ = E((zo) => {
  'use strict';
  Object.defineProperty(zo, '__esModule', { value: !0 });
  var _C = t_();
  function bC() {
    for (var r = [], e = 0; e < arguments.length; e++) r[e] = arguments[e];
    return r_(r);
  }
  zo.pipe = bC;
  function r_(r) {
    return r.length === 0
      ? _C.identity
      : r.length === 1
      ? r[0]
      : function (t) {
          return r.reduce(function (n, i) {
            return i(n);
          }, t);
        };
  }
  zo.pipeFromArray = r_;
});
var mr = E((Al) => {
  'use strict';
  Object.defineProperty(Al, '__esModule', { value: !0 });
  var vC = Zg(),
    SC = e_(),
    wC = Mn(),
    RC = n_(),
    Vo = Bo(),
    xC = (function () {
      function r(e) {
        (this._isScalar = !1), e && (this._subscribe = e);
      }
      return (
        (r.prototype.lift = function (e) {
          var t = new r();
          return (t.source = this), (t.operator = e), t;
        }),
        (r.prototype.subscribe = function (e, t, n) {
          var i = this.operator,
            s = SC.toSubscriber(e, t, n);
          if (
            (i
              ? s.add(i.call(s, this.source))
              : s.add(
                  this.source ||
                    (Vo.config.useDeprecatedSynchronousErrorHandling &&
                      !s.syncErrorThrowable)
                    ? this._subscribe(s)
                    : this._trySubscribe(s)
                ),
            Vo.config.useDeprecatedSynchronousErrorHandling &&
              s.syncErrorThrowable &&
              ((s.syncErrorThrowable = !1), s.syncErrorThrown))
          )
            throw s.syncErrorValue;
          return s;
        }),
        (r.prototype._trySubscribe = function (e) {
          try {
            return this._subscribe(e);
          } catch (t) {
            Vo.config.useDeprecatedSynchronousErrorHandling &&
              ((e.syncErrorThrown = !0), (e.syncErrorValue = t)),
              vC.canReportError(e) ? e.error(t) : console.warn(t);
          }
        }),
        (r.prototype.forEach = function (e, t) {
          var n = this;
          return (
            (t = i_(t)),
            new t(function (i, s) {
              var o;
              o = n.subscribe(
                function (a) {
                  try {
                    e(a);
                  } catch (c) {
                    s(c), o && o.unsubscribe();
                  }
                },
                s,
                i
              );
            })
          );
        }),
        (r.prototype._subscribe = function (e) {
          var t = this.source;
          return t && t.subscribe(e);
        }),
        (r.prototype[wC.observable] = function () {
          return this;
        }),
        (r.prototype.pipe = function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          return e.length === 0 ? this : RC.pipeFromArray(e)(this);
        }),
        (r.prototype.toPromise = function (e) {
          var t = this;
          return (
            (e = i_(e)),
            new e(function (n, i) {
              var s;
              t.subscribe(
                function (o) {
                  return (s = o);
                },
                function (o) {
                  return i(o);
                },
                function () {
                  return n(s);
                }
              );
            })
          );
        }),
        (r.create = function (e) {
          return new r(e);
        }),
        r
      );
    })();
  Al.Observable = xC;
  function i_(r) {
    if ((r || (r = Vo.config.Promise || Promise), !r))
      throw new Error('no Promise impl found');
    return r;
  }
});
var s_ = E((Dl) => {
  'use strict';
  Object.defineProperty(Dl, '__esModule', { value: !0 });
  var OC = (function () {
    function r() {
      return (
        Error.call(this),
        (this.message = 'object unsubscribed'),
        (this.name = 'ObjectUnsubscribedError'),
        this
      );
    }
    return (r.prototype = Object.create(Error.prototype)), r;
  })();
  Dl.ObjectUnsubscribedError = OC;
});
var o_ = E((Ii) => {
  'use strict';
  var TC =
    (Ii && Ii.__extends) ||
    (function () {
      var r = function (e, t) {
        return (
          (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (n, i) {
                n.__proto__ = i;
              }) ||
            function (n, i) {
              for (var s in i) i.hasOwnProperty(s) && (n[s] = i[s]);
            }),
          r(e, t)
        );
      };
      return function (e, t) {
        r(e, t);
        function n() {
          this.constructor = e;
        }
        e.prototype =
          t === null
            ? Object.create(t)
            : ((n.prototype = t.prototype), new n());
      };
    })();
  Object.defineProperty(Ii, '__esModule', { value: !0 });
  var CC = pr(),
    IC = (function (r) {
      TC(e, r);
      function e(t, n) {
        var i = r.call(this) || this;
        return (i.subject = t), (i.subscriber = n), (i.closed = !1), i;
      }
      return (
        (e.prototype.unsubscribe = function () {
          if (!this.closed) {
            this.closed = !0;
            var t = this.subject,
              n = t.observers;
            if (
              ((this.subject = null),
              !(!n || n.length === 0 || t.isStopped || t.closed))
            ) {
              var i = n.indexOf(this.subscriber);
              i !== -1 && n.splice(i, 1);
            }
          }
        }),
        e
      );
    })(CC.Subscription);
  Ii.SubjectSubscription = IC;
});
var l_ = E((Wr) => {
  'use strict';
  var Pl =
    (Wr && Wr.__extends) ||
    (function () {
      var r = function (e, t) {
        return (
          (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (n, i) {
                n.__proto__ = i;
              }) ||
            function (n, i) {
              for (var s in i) i.hasOwnProperty(s) && (n[s] = i[s]);
            }),
          r(e, t)
        );
      };
      return function (e, t) {
        r(e, t);
        function n() {
          this.constructor = e;
        }
        e.prototype =
          t === null
            ? Object.create(t)
            : ((n.prototype = t.prototype), new n());
      };
    })();
  Object.defineProperty(Wr, '__esModule', { value: !0 });
  var a_ = mr(),
    NC = Vr(),
    kl = pr(),
    Ni = s_(),
    AC = o_(),
    DC = $o(),
    c_ = (function (r) {
      Pl(e, r);
      function e(t) {
        var n = r.call(this, t) || this;
        return (n.destination = t), n;
      }
      return e;
    })(NC.Subscriber);
  Wr.SubjectSubscriber = c_;
  var u_ = (function (r) {
    Pl(e, r);
    function e() {
      var t = r.call(this) || this;
      return (
        (t.observers = []),
        (t.closed = !1),
        (t.isStopped = !1),
        (t.hasError = !1),
        (t.thrownError = null),
        t
      );
    }
    return (
      (e.prototype[DC.rxSubscriber] = function () {
        return new c_(this);
      }),
      (e.prototype.lift = function (t) {
        var n = new Ll(this, this);
        return (n.operator = t), n;
      }),
      (e.prototype.next = function (t) {
        if (this.closed) throw new Ni.ObjectUnsubscribedError();
        if (!this.isStopped)
          for (
            var n = this.observers, i = n.length, s = n.slice(), o = 0;
            o < i;
            o++
          )
            s[o].next(t);
      }),
      (e.prototype.error = function (t) {
        if (this.closed) throw new Ni.ObjectUnsubscribedError();
        (this.hasError = !0), (this.thrownError = t), (this.isStopped = !0);
        for (
          var n = this.observers, i = n.length, s = n.slice(), o = 0;
          o < i;
          o++
        )
          s[o].error(t);
        this.observers.length = 0;
      }),
      (e.prototype.complete = function () {
        if (this.closed) throw new Ni.ObjectUnsubscribedError();
        this.isStopped = !0;
        for (
          var t = this.observers, n = t.length, i = t.slice(), s = 0;
          s < n;
          s++
        )
          i[s].complete();
        this.observers.length = 0;
      }),
      (e.prototype.unsubscribe = function () {
        (this.isStopped = !0), (this.closed = !0), (this.observers = null);
      }),
      (e.prototype._trySubscribe = function (t) {
        if (this.closed) throw new Ni.ObjectUnsubscribedError();
        return r.prototype._trySubscribe.call(this, t);
      }),
      (e.prototype._subscribe = function (t) {
        if (this.closed) throw new Ni.ObjectUnsubscribedError();
        return this.hasError
          ? (t.error(this.thrownError), kl.Subscription.EMPTY)
          : this.isStopped
          ? (t.complete(), kl.Subscription.EMPTY)
          : (this.observers.push(t), new AC.SubjectSubscription(this, t));
      }),
      (e.prototype.asObservable = function () {
        var t = new a_.Observable();
        return (t.source = this), t;
      }),
      (e.create = function (t, n) {
        return new Ll(t, n);
      }),
      e
    );
  })(a_.Observable);
  Wr.Subject = u_;
  var Ll = (function (r) {
    Pl(e, r);
    function e(t, n) {
      var i = r.call(this) || this;
      return (i.destination = t), (i.source = n), i;
    }
    return (
      (e.prototype.next = function (t) {
        var n = this.destination;
        n && n.next && n.next(t);
      }),
      (e.prototype.error = function (t) {
        var n = this.destination;
        n && n.error && this.destination.error(t);
      }),
      (e.prototype.complete = function () {
        var t = this.destination;
        t && t.complete && this.destination.complete();
      }),
      (e.prototype._subscribe = function (t) {
        var n = this.source;
        return n ? this.source.subscribe(t) : kl.Subscription.EMPTY;
      }),
      e
    );
  })(u_);
  Wr.AnonymousSubject = Ll;
});
function PC(r, e, t) {
  let n = Yr();
  return new An(r, t, e, n);
}
function FC(r, e, t) {
  let n = JSON.stringify(r.map((i) => ({ taskId: i.taskId, hash: i.hash })));
  U && Wo.note({ title: `Executed tasks with hashes: ${n}` }),
    (0, f_.writeFileSync)(h_.join(e, `tasks-hashes-${t}`), n);
}
function UC(r, e, t) {
  r.filter((i) => i.cacheStatus === 'local-cache-hit')
    .map((i) => i.hash)
    .forEach((i) => e.store(i, t));
}
async function Fl({
  daemon: r,
  options: e,
  fileStorage: t,
  remoteCache: n,
  api: i,
  outputObfuscator: s,
  runStartTime: o,
  messages: a,
  endOfRunMessage: c,
  taskExecutions: l,
  versionOfNxBefore133: u,
  inner: f,
  encryptionKey: h,
  storeInCurrentProcess: d,
  distributedExecutionId: y,
  runContext: v,
}) {
  let p = new Date().toISOString(),
    w = me(),
    k = {
      command: s.obfuscate(Wi()),
      startTime: o,
      endTime: p,
      distributedExecutionId: y,
      branch: w,
      runGroup: ve(),
      sha: w ? et() : void 0,
      inner: f,
    },
    O = {
      branch: w,
      runGroup: ve(),
      ciExecutionId: je(),
      ciExecutionEnv: xe(),
    };
  if (d) {
    ut(y) && (FC(l, Xo, y), UC(l, n, Xo));
    try {
      await n.waitForStoreRequestsToComplete();
    } catch {
      return (
        Wo.error({ title: "Nx Cloud wasn't able to store artifacts." }),
        a.printMessages(),
        !1
      );
    }
    for (let N of t.storedHashes) {
      let P = l.find((I) => I.hash === N);
      if (!P) throw new Error(`Task with hash ${N} isn't recorded`);
      P.uploadedToStorage = !0;
    }
    try {
      await i.endRun(k, l, O);
    } catch {
      return (
        Wo.error({ title: "Nx Cloud wasn't able to record its run." }),
        a.printMessages(),
        !1
      );
    }
    await rn(e);
  } else
    try {
      let N = At ? At : e.accessToken,
        P = Ro(),
        I = require.resolve('./lib/daemon/process-run-end');
      await r.processInBackground(I, {
        encryptionKey: h,
        runnerOptions: { ...e, accessToken: N },
        delayedStoreRequests: n.delayedStoreRequests,
        ciExecutionContext: O,
        runEnd: { runData: k, taskExecutions: l, linkId: P },
        lightRunnerResolutionPaths: vr,
      }),
        (v.runUrl = `${hs(e.url || 'https://nx.app')}/runs/${P}`);
    } catch (N) {
      return (
        Wo.warn({
          title: 'Nx Cloud Problems',
          bodyLines: [N.message || N.toString()],
        }),
        !1
      );
    }
  return (
    u
      ? setTimeout(() => {
          a.printMessages(), !a.anyErrors && !f && c.printCacheHitsMessage();
        }, 0)
      : (a.printMessages(), !a.anyErrors && !f && c.printCacheHitsMessage()),
    !0
  );
}
function MC(r, e, t, n) {
  let i = new bo(r, Xo, !0, e.cacheableOperations || [], t, n);
  try {
    let { CompositeLifeCycle: s } = dt();
    return s ? new s([e.lifeCycle, i]) : i;
  } catch {
    return i;
  }
}
async function qC(r, e, t, n, i) {
  if (n.skipNxCache) return;
  let s = t.map((c) => c.hash).filter((c) => !!c),
    o = await Promise.all(
      s.map((c) => {
        let l = (0, d_.join)(Xo, `${c}.commit`);
        return LC(l);
      })
    ),
    a = [];
  for (let c = 0; c < o.length; ++c) o[c] || a.push(s[c]);
  if (a.length > 0) {
    let c = r.startRun(i, a);
    for (let l of a) e.requests[l] = c;
  }
}
function Ai(r, e, t, n = !1) {
  var P;
  let i = process.env.NX_CLOUD_DISTRIBUTED_EXECUTION_ID,
    s = { statuses: {}, scheduledTasks: [], requests: {}, allTasks: r },
    o = e.lifeCycle === void 0,
    a = [],
    c = new In(e),
    l = PC(c, e, s),
    u = new Eo(s, a, i),
    f = new lr(e.maskedProperties),
    h = new Date().toISOString(),
    d = MC(s, e, f, a),
    y = Rr || e.encryptionKey,
    v = new Yt(y),
    p = new Kt(e),
    w = ut(i) || !((P = t.daemon) != null && P.enabled()),
    k = new ur(v, p, e, 'cloud-enabled-runner'),
    O = new vo(c, l, s, k, i, w);
  qC(l, s, r, e, i), delete process.env.NX_CLOUD_DISTRIBUTED_EXECUTION_ID;
  let N = kC(r, { ...e, remoteCache: O, lifeCycle: d }, t);
  if (N.subscribe) {
    let { Subject: I } = l_(),
      z = new I();
    return (
      N.subscribe({
        next: (G) => z.next(G),
        error: (G) => z.error(G),
        complete: async () => {
          !(await Fl({
            daemon: t.daemon,
            options: e,
            fileStorage: k,
            remoteCache: O,
            api: l,
            outputObfuscator: f,
            runStartTime: h,
            messages: c,
            endOfRunMessage: u,
            taskExecutions: a,
            versionOfNxBefore133: o,
            inner: n,
            encryptionKey: y,
            storeInCurrentProcess: w,
            runContext: s,
            distributedExecutionId: i,
          })) &&
            ut(i) &&
            process.exit(Vt),
            z.complete();
        },
      }),
      z
    );
  } else
    return N.then(
      async (I) => (
        !(await Fl({
          daemon: t.daemon,
          options: e,
          fileStorage: k,
          remoteCache: O,
          api: l,
          outputObfuscator: f,
          runStartTime: h,
          messages: c,
          endOfRunMessage: u,
          taskExecutions: a,
          versionOfNxBefore133: o,
          inner: n,
          encryptionKey: y,
          storeInCurrentProcess: w,
          runContext: s,
          distributedExecutionId: i,
        })) &&
          ut(i) &&
          process.exit(Vt),
        I
      )
    ).catch(async (I) => {
      throw (
        (!(await Fl({
          daemon: t.daemon,
          options: e,
          fileStorage: k,
          remoteCache: O,
          api: l,
          outputObfuscator: f,
          runStartTime: h,
          messages: c,
          endOfRunMessage: u,
          taskExecutions: a,
          versionOfNxBefore133: o,
          inner: n,
          encryptionKey: y,
          storeInCurrentProcess: w,
          runContext: s,
          distributedExecutionId: i,
        })) &&
          ut(i) &&
          process.exit(Vt),
        I)
      );
    });
}
var f_,
  h_,
  d_,
  Wo,
  kC,
  Xo,
  LC,
  p_ = B(() => {
    'use strict';
    (f_ = require('fs')), (h_ = br(require('path'))), (d_ = require('path'));
    ie();
    Sr();
    Dt();
    Ka();
    ds();
    ps();
    yo();
    Ly();
    Iu();
    go();
    My();
    qy();
    Mu();
    qu();
    ({ output: Wo } = Y()),
      ({ tasksRunner: kC, cacheDirectory: Xo } = dt()),
      ({ pathExists: LC } = qo());
  });
function BC(r) {
  return (0, E_.join)((0, y_.tmpdir)(), `run-group-${r}-marker.lock`);
}
function g_(r) {
  (0, m_.mkdirSync)(BC(r));
}
var m_,
  y_,
  E_,
  __ = B(() => {
    'use strict';
    (m_ = require('fs')), (y_ = require('os')), (E_ = require('path'));
  });
function Ko() {
  if (me() == null) return;
  let r = ve();
  U &&
    b_.note({
      title: `Trying to create heartbeat background process for run group: ${r}`,
    });
  try {
    g_(r);
  } catch {
    U && b_.note({ title: 'Heartbeat marker exists, process must be running' });
    return;
  }
  jC();
}
function jC() {
  let r =
    process.env.NX_CLOUD_HEARTBEAT_INHERIT_STDIO == 'true' ? 'inherit' : 'pipe';
  (0, v_.spawn)(
    process.execPath,
    [require.resolve('./lib/heartbeat/heartbeat-process.js')],
    {
      detached: !0,
      windowsHide: !0,
      stdio: r,
      env: {
        ...process.env,
        NX_CLOUD_LIGHT_CLIENT_RESOLUTION_PATHS: JSON.stringify(vr),
      },
    }
  ).unref();
}
var v_,
  b_,
  Ul = B(() => {
    'use strict';
    v_ = require('child_process');
    ie();
    Sr();
    __();
    ({ output: b_ } = Y());
  });
function x_() {
  GC(w_), $C(R_, 'true');
}
function O_(r) {
  if (r === !0) return !0;
  if (r === !1) return !1;
  let e = process.env.NX_CLOUD_DISTRIBUTED_EXECUTION;
  if (e === 'false' || e === 'FALSE' || e === '0') return !1;
  if (e === 'true' || e === 'TRUE' || e === '1') return !0;
  try {
    return (0, S_.readFileSync)(R_), !0;
  } catch {
    return !1;
  }
}
var S_,
  Ml,
  GC,
  $C,
  HC,
  w_,
  R_,
  ql = B(() => {
    'use strict';
    (S_ = require('fs')),
      (Ml = require('path')),
      ({ ensureDirSync: GC, writeFileSync: $C } = qo()),
      (HC = process.env.NX_CACHE_DIRECTORY
        ? [process.env.NX_CACHE_DIRECTORY]
        : ['node_modules', '.cache', 'nx']),
      (w_ = (0, Ml.join)(process.cwd(), ...HC)),
      (R_ = (0, Ml.join)(w_, 'NX_CLOUD_DISTRIBUTED_EXECUTION'));
  });
async function Di(r) {
  let e = Te(r);
  return await ce(() => e.get('/nx-cloud/executions/workspace-status'));
}
var Bl = B(() => {
  'use strict';
  gt();
});
var T_ = E((jl) => {
  'use strict';
  Object.defineProperty(jl, '__esModule', { value: !0 });
  jl.subscribeToArray = function (r) {
    return function (e) {
      for (var t = 0, n = r.length; t < n && !e.closed; t++) e.next(r[t]);
      e.complete();
    };
  };
});
var C_ = E((Gl) => {
  'use strict';
  Object.defineProperty(Gl, '__esModule', { value: !0 });
  var zC = jo();
  Gl.subscribeToPromise = function (r) {
    return function (e) {
      return (
        r
          .then(
            function (t) {
              e.closed || (e.next(t), e.complete());
            },
            function (t) {
              return e.error(t);
            }
          )
          .then(null, zC.hostReportError),
        e
      );
    };
  };
});
var ki = E((qn) => {
  'use strict';
  Object.defineProperty(qn, '__esModule', { value: !0 });
  function I_() {
    return typeof Symbol != 'function' || !Symbol.iterator
      ? '@@iterator'
      : Symbol.iterator;
  }
  qn.getSymbolIterator = I_;
  qn.iterator = I_();
  qn.$$iterator = qn.iterator;
});
var N_ = E(($l) => {
  'use strict';
  Object.defineProperty($l, '__esModule', { value: !0 });
  var VC = ki();
  $l.subscribeToIterable = function (r) {
    return function (e) {
      var t = r[VC.iterator]();
      do {
        var n = t.next();
        if (n.done) {
          e.complete();
          break;
        }
        if ((e.next(n.value), e.closed)) break;
      } while (!0);
      return (
        typeof t.return == 'function' &&
          e.add(function () {
            t.return && t.return();
          }),
        e
      );
    };
  };
});
var A_ = E((Hl) => {
  'use strict';
  Object.defineProperty(Hl, '__esModule', { value: !0 });
  var WC = Mn();
  Hl.subscribeToObservable = function (r) {
    return function (e) {
      var t = r[WC.observable]();
      if (typeof t.subscribe != 'function')
        throw new TypeError(
          'Provided object does not correctly implement Symbol.observable'
        );
      return t.subscribe(e);
    };
  };
});
var Vl = E((zl) => {
  'use strict';
  Object.defineProperty(zl, '__esModule', { value: !0 });
  zl.isArrayLike = function (r) {
    return r && typeof r.length == 'number' && typeof r != 'function';
  };
});
var Xl = E((Wl) => {
  'use strict';
  Object.defineProperty(Wl, '__esModule', { value: !0 });
  function XC(r) {
    return (
      !!r && typeof r.subscribe != 'function' && typeof r.then == 'function'
    );
  }
  Wl.isPromise = XC;
});
var Yl = E((Kl) => {
  'use strict';
  Object.defineProperty(Kl, '__esModule', { value: !0 });
  var KC = T_(),
    YC = C_(),
    JC = N_(),
    ZC = A_(),
    QC = Vl(),
    eI = Xl(),
    tI = vl(),
    rI = ki(),
    nI = Mn();
  Kl.subscribeTo = function (r) {
    if (r && typeof r[nI.observable] == 'function')
      return ZC.subscribeToObservable(r);
    if (QC.isArrayLike(r)) return KC.subscribeToArray(r);
    if (eI.isPromise(r)) return YC.subscribeToPromise(r);
    if (r && typeof r[rI.iterator] == 'function')
      return JC.subscribeToIterable(r);
    var e = tI.isObject(r) ? 'an invalid object' : "'" + r + "'",
      t =
        'You provided ' +
        e +
        ' where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.';
    throw new TypeError(t);
  };
});
var D_ = E((Jl) => {
  'use strict';
  Object.defineProperty(Jl, '__esModule', { value: !0 });
  var iI = mr(),
    sI = pr(),
    oI = Mn();
  function aI(r, e) {
    return new iI.Observable(function (t) {
      var n = new sI.Subscription();
      return (
        n.add(
          e.schedule(function () {
            var i = r[oI.observable]();
            n.add(
              i.subscribe({
                next: function (s) {
                  n.add(
                    e.schedule(function () {
                      return t.next(s);
                    })
                  );
                },
                error: function (s) {
                  n.add(
                    e.schedule(function () {
                      return t.error(s);
                    })
                  );
                },
                complete: function () {
                  n.add(
                    e.schedule(function () {
                      return t.complete();
                    })
                  );
                },
              })
            );
          })
        ),
        n
      );
    });
  }
  Jl.scheduleObservable = aI;
});
var k_ = E((Zl) => {
  'use strict';
  Object.defineProperty(Zl, '__esModule', { value: !0 });
  var cI = mr(),
    uI = pr();
  function lI(r, e) {
    return new cI.Observable(function (t) {
      var n = new uI.Subscription();
      return (
        n.add(
          e.schedule(function () {
            return r.then(
              function (i) {
                n.add(
                  e.schedule(function () {
                    t.next(i),
                      n.add(
                        e.schedule(function () {
                          return t.complete();
                        })
                      );
                  })
                );
              },
              function (i) {
                n.add(
                  e.schedule(function () {
                    return t.error(i);
                  })
                );
              }
            );
          })
        ),
        n
      );
    });
  }
  Zl.schedulePromise = lI;
});
var L_ = E((Ql) => {
  'use strict';
  Object.defineProperty(Ql, '__esModule', { value: !0 });
  var fI = mr(),
    hI = pr();
  function dI(r, e) {
    return new fI.Observable(function (t) {
      var n = new hI.Subscription(),
        i = 0;
      return (
        n.add(
          e.schedule(function () {
            if (i === r.length) {
              t.complete();
              return;
            }
            t.next(r[i++]), t.closed || n.add(this.schedule());
          })
        ),
        n
      );
    });
  }
  Ql.scheduleArray = dI;
});
var P_ = E((ef) => {
  'use strict';
  Object.defineProperty(ef, '__esModule', { value: !0 });
  var pI = mr(),
    mI = pr(),
    yI = ki();
  function EI(r, e) {
    if (!r) throw new Error('Iterable cannot be null');
    return new pI.Observable(function (t) {
      var n = new mI.Subscription(),
        i;
      return (
        n.add(function () {
          i && typeof i.return == 'function' && i.return();
        }),
        n.add(
          e.schedule(function () {
            (i = r[yI.iterator]()),
              n.add(
                e.schedule(function () {
                  if (!t.closed) {
                    var s, o;
                    try {
                      var a = i.next();
                      (s = a.value), (o = a.done);
                    } catch (c) {
                      t.error(c);
                      return;
                    }
                    o ? t.complete() : (t.next(s), this.schedule());
                  }
                })
              );
          })
        ),
        n
      );
    });
  }
  ef.scheduleIterable = EI;
});
var F_ = E((tf) => {
  'use strict';
  Object.defineProperty(tf, '__esModule', { value: !0 });
  var gI = Mn();
  function _I(r) {
    return r && typeof r[gI.observable] == 'function';
  }
  tf.isInteropObservable = _I;
});
var U_ = E((rf) => {
  'use strict';
  Object.defineProperty(rf, '__esModule', { value: !0 });
  var bI = ki();
  function vI(r) {
    return r && typeof r[bI.iterator] == 'function';
  }
  rf.isIterable = vI;
});
var M_ = E((nf) => {
  'use strict';
  Object.defineProperty(nf, '__esModule', { value: !0 });
  var SI = D_(),
    wI = k_(),
    RI = L_(),
    xI = P_(),
    OI = F_(),
    TI = Xl(),
    CI = Vl(),
    II = U_();
  function NI(r, e) {
    if (r != null) {
      if (OI.isInteropObservable(r)) return SI.scheduleObservable(r, e);
      if (TI.isPromise(r)) return wI.schedulePromise(r, e);
      if (CI.isArrayLike(r)) return RI.scheduleArray(r, e);
      if (II.isIterable(r) || typeof r == 'string')
        return xI.scheduleIterable(r, e);
    }
    throw new TypeError(((r !== null && typeof r) || r) + ' is not observable');
  }
  nf.scheduled = NI;
});
var of = E((sf) => {
  'use strict';
  Object.defineProperty(sf, '__esModule', { value: !0 });
  var q_ = mr(),
    AI = Yl(),
    DI = M_();
  function kI(r, e) {
    return e
      ? DI.scheduled(r, e)
      : r instanceof q_.Observable
      ? r
      : new q_.Observable(AI.subscribeTo(r));
  }
  sf.from = kI;
});
var B_ = E((Li) => {
  'use strict';
  var LI =
    (Li && Li.__extends) ||
    (function () {
      var r = function (e, t) {
        return (
          (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (n, i) {
                n.__proto__ = i;
              }) ||
            function (n, i) {
              for (var s in i) i.hasOwnProperty(s) && (n[s] = i[s]);
            }),
          r(e, t)
        );
      };
      return function (e, t) {
        r(e, t);
        function n() {
          this.constructor = e;
        }
        e.prototype =
          t === null
            ? Object.create(t)
            : ((n.prototype = t.prototype), new n());
      };
    })();
  Object.defineProperty(Li, '__esModule', { value: !0 });
  var PI = Vr(),
    FI = (function (r) {
      LI(e, r);
      function e() {
        return (r !== null && r.apply(this, arguments)) || this;
      }
      return (
        (e.prototype.notifyNext = function (t, n, i, s, o) {
          this.destination.next(n);
        }),
        (e.prototype.notifyError = function (t, n) {
          this.destination.error(t);
        }),
        (e.prototype.notifyComplete = function (t) {
          this.destination.complete();
        }),
        e
      );
    })(PI.Subscriber);
  Li.OuterSubscriber = FI;
});
var af = E((Pi) => {
  'use strict';
  var UI =
    (Pi && Pi.__extends) ||
    (function () {
      var r = function (e, t) {
        return (
          (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (n, i) {
                n.__proto__ = i;
              }) ||
            function (n, i) {
              for (var s in i) i.hasOwnProperty(s) && (n[s] = i[s]);
            }),
          r(e, t)
        );
      };
      return function (e, t) {
        r(e, t);
        function n() {
          this.constructor = e;
        }
        e.prototype =
          t === null
            ? Object.create(t)
            : ((n.prototype = t.prototype), new n());
      };
    })();
  Object.defineProperty(Pi, '__esModule', { value: !0 });
  var MI = Vr(),
    qI = (function (r) {
      UI(e, r);
      function e(t, n, i) {
        var s = r.call(this) || this;
        return (
          (s.parent = t),
          (s.outerValue = n),
          (s.outerIndex = i),
          (s.index = 0),
          s
        );
      }
      return (
        (e.prototype._next = function (t) {
          this.parent.notifyNext(
            this.outerValue,
            t,
            this.outerIndex,
            this.index++,
            this
          );
        }),
        (e.prototype._error = function (t) {
          this.parent.notifyError(t, this), this.unsubscribe();
        }),
        (e.prototype._complete = function () {
          this.parent.notifyComplete(this), this.unsubscribe();
        }),
        e
      );
    })(MI.Subscriber);
  Pi.InnerSubscriber = qI;
});
var j_ = E((cf) => {
  'use strict';
  Object.defineProperty(cf, '__esModule', { value: !0 });
  var BI = af(),
    jI = Yl(),
    GI = mr();
  function $I(r, e, t, n, i) {
    if ((i === void 0 && (i = new BI.InnerSubscriber(r, t, n)), !i.closed))
      return e instanceof GI.Observable ? e.subscribe(i) : jI.subscribeTo(e)(i);
  }
  cf.subscribeToResult = $I;
});
var $_ = E((Bn) => {
  'use strict';
  var HI =
    (Bn && Bn.__extends) ||
    (function () {
      var r = function (e, t) {
        return (
          (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (n, i) {
                n.__proto__ = i;
              }) ||
            function (n, i) {
              for (var s in i) i.hasOwnProperty(s) && (n[s] = i[s]);
            }),
          r(e, t)
        );
      };
      return function (e, t) {
        r(e, t);
        function n() {
          this.constructor = e;
        }
        e.prototype =
          t === null
            ? Object.create(t)
            : ((n.prototype = t.prototype), new n());
      };
    })();
  Object.defineProperty(Bn, '__esModule', { value: !0 });
  var zI = Vr();
  function VI(r, e) {
    return function (n) {
      if (typeof r != 'function')
        throw new TypeError(
          'argument is not a function. Are you looking for `mapTo()`?'
        );
      return n.lift(new G_(r, e));
    };
  }
  Bn.map = VI;
  var G_ = (function () {
    function r(e, t) {
      (this.project = e), (this.thisArg = t);
    }
    return (
      (r.prototype.call = function (e, t) {
        return t.subscribe(new WI(e, this.project, this.thisArg));
      }),
      r
    );
  })();
  Bn.MapOperator = G_;
  var WI = (function (r) {
    HI(e, r);
    function e(t, n, i) {
      var s = r.call(this, t) || this;
      return (s.project = n), (s.count = 0), (s.thisArg = i || s), s;
    }
    return (
      (e.prototype._next = function (t) {
        var n;
        try {
          n = this.project.call(this.thisArg, t, this.count++);
        } catch (i) {
          this.destination.error(i);
          return;
        }
        this.destination.next(n);
      }),
      e
    );
  })(zI.Subscriber);
});
var z_ = E((Fi) => {
  'use strict';
  var XI =
    (Fi && Fi.__extends) ||
    (function () {
      var r = function (e, t) {
        return (
          (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (n, i) {
                n.__proto__ = i;
              }) ||
            function (n, i) {
              for (var s in i) i.hasOwnProperty(s) && (n[s] = i[s]);
            }),
          r(e, t)
        );
      };
      return function (e, t) {
        r(e, t);
        function n() {
          this.constructor = e;
        }
        e.prototype =
          t === null
            ? Object.create(t)
            : ((n.prototype = t.prototype), new n());
      };
    })();
  Object.defineProperty(Fi, '__esModule', { value: !0 });
  var KI = B_(),
    YI = af(),
    JI = j_(),
    ZI = $_(),
    QI = of();
  function H_(r, e) {
    return typeof e == 'function'
      ? function (t) {
          return t.pipe(
            H_(function (n, i) {
              return QI.from(r(n, i)).pipe(
                ZI.map(function (s, o) {
                  return e(n, s, i, o);
                })
              );
            })
          );
        }
      : function (t) {
          return t.lift(new e0(r));
        };
  }
  Fi.switchMap = H_;
  var e0 = (function () {
      function r(e) {
        this.project = e;
      }
      return (
        (r.prototype.call = function (e, t) {
          return t.subscribe(new t0(e, this.project));
        }),
        r
      );
    })(),
    t0 = (function (r) {
      XI(e, r);
      function e(t, n) {
        var i = r.call(this, t) || this;
        return (i.project = n), (i.index = 0), i;
      }
      return (
        (e.prototype._next = function (t) {
          var n,
            i = this.index++;
          try {
            n = this.project(t, i);
          } catch (s) {
            this.destination.error(s);
            return;
          }
          this._innerSub(n, t, i);
        }),
        (e.prototype._innerSub = function (t, n, i) {
          var s = this.innerSubscription;
          s && s.unsubscribe();
          var o = new YI.InnerSubscriber(this, n, i),
            a = this.destination;
          a.add(o),
            (this.innerSubscription = JI.subscribeToResult(
              this,
              t,
              void 0,
              void 0,
              o
            )),
            this.innerSubscription !== o && a.add(this.innerSubscription);
        }),
        (e.prototype._complete = function () {
          var t = this.innerSubscription;
          (!t || t.closed) && r.prototype._complete.call(this),
            this.unsubscribe();
        }),
        (e.prototype._unsubscribe = function () {
          this.innerSubscription = null;
        }),
        (e.prototype.notifyComplete = function (t) {
          var n = this.destination;
          n.remove(t),
            (this.innerSubscription = null),
            this.isStopped && r.prototype._complete.call(this);
        }),
        (e.prototype.notifyNext = function (t, n, i, s, o) {
          this.destination.next(n);
        }),
        e
      );
    })(KI.OuterSubscriber);
});
var uf,
  r0,
  n0,
  i0,
  V_,
  s0,
  jn,
  lf = B(() => {
    'use strict';
    uf = require('path');
    ie();
    ({ readFile: r0, copy: n0, mkdirSync: i0 } = qo()),
      ({ output: V_, workspaceRoot: s0 } = Y()),
      (jn = class {
        constructor(e, t) {
          this.fileStorage = e;
          this.cacheDirectory = t;
          i0(t, { recursive: !0 });
        }
        async retrieveAndExtract(e, t) {
          process.env.NX_CLOUD_DEBUG_URLS == 'true' &&
            V_.note({ title: `Retrieving artifacts from ${t}` }),
            await this.fileStorage.retrieve(e, t, this.cacheDirectory),
            U && V_.note({ title: 'Extracting artifacts' });
          let n = (0, uf.join)(this.cacheDirectory, e, 'outputs');
          return (
            await n0(n, s0),
            (
              await r0((0, uf.join)(this.cacheDirectory, e, 'terminalOutput'))
            ).toString()
          );
        }
      });
  });
function yr(r, e) {
  return !!r || !!e;
}
function Er() {
  o0.error({
    title: 'Unable to determine the context for running Nx in CI',
    bodyLines: [
      "- Nx tried to determine the context automatically but wasn't able to do it.",
      '- Use the NX_CI_EXECUTION_ID env variable to set it manually.',
      '- NX_CI_EXECUTION_ID must be a unique value for every CI execution/run.',
    ],
  });
}
var o0,
  Ui = B(() => {
    'use strict';
    ({ output: o0 } = Y());
  });
function W_(r, e, t, n, i, s, o) {
  let a = i.map((l) =>
      l.map((u) => ({
        taskId: u.id,
        hash: u.hash,
        projectName: u.target.project,
        target: u.target.target,
        configuration: u.target.configuration || null,
        params: Nn(u),
        projectRoot: u.projectRoot,
        cache: u.cache,
      }))
    ),
    c = {
      command: Wi(),
      branch: r,
      runGroup: e,
      ciExecutionId: t,
      ciExecutionEnv: n,
      tasks: a,
      maxParallel: a0(s),
      commitSha: o,
    };
  return ha && (c.agentCount = ha), sh || (c.stopAgentsOnFailure = !1), c;
}
function a0(r) {
  return r.parallel === 'false' || r.parallel === !1
    ? 1
    : r.parallel === 'true' || r.parallel === !0
    ? Number(r.maxParallel || 3)
    : r.parallel === void 0
    ? r.maxParallel
      ? Number(r.maxParallel)
      : 3
    : Number(r.parallel) || 3;
}
var ff,
  Gn,
  hf = B(() => {
    'use strict';
    gt();
    ie();
    So();
    Dt();
    vi();
    ({ output: ff } = Y()),
      (Gn = class {
        constructor(e) {
          this.apiAxiosInstance = Te(e, 6e4);
        }
        async start(e) {
          var i;
          let t = Ce('dteStart'),
            n;
          U &&
            ff.note({
              title: 'Starting a distributed execution',
              bodyLines: [JSON.stringify(e, null, 2)],
            });
          try {
            (n = await ce(() =>
              this.apiAxiosInstance.post('/nx-cloud/executions/start', e)
            )),
              t.recordMetric(re(n));
          } catch (s) {
            throw (
              (t.recordMetric(
                (i = s == null ? void 0 : s.axiosException) != null &&
                  i.response
                  ? re(s.axiosException.response)
                  : Ie
              ),
              s)
            );
          }
          if (!n.data.enabled)
            throw new Error(
              'Workspace is disabled. Cannot perform distributed task executions.'
            );
          if (n.data.error) throw new Error(n.data.error);
          return n.data.id;
        }
        async status(e, t) {
          var i;
          let n = Ce('dteStatus');
          try {
            let s = await ce(() =>
              this.apiAxiosInstance.post('/nx-cloud/executions/status', {
                id: e,
                prevUpdatedAt: t,
              })
            );
            return n.recordMetric(re(s)), s.data;
          } catch (s) {
            n.recordMetric(
              (i = s == null ? void 0 : s.axiosException) != null && i.response
                ? re(s.axiosException.response)
                : Ie
            ),
              ff.error({ title: s.message }),
              process.exit(1);
          }
        }
        async completeRunGroupWithError(e, t, n, i, s) {
          var a;
          let o = Ce('completeRunGroup');
          U &&
            ff.note({
              title: 'Completing with an error',
              bodyLines: [
                `ciExecutionId: ${n}`,
                `ciExecutionEnv: ${i}`,
                `runGroup: ${t}`,
                `error: ${s}`,
              ],
            });
          try {
            let c = await ce(
              () =>
                this.apiAxiosInstance.post(
                  '/nx-cloud/executions/complete-run-group',
                  {
                    branch: e,
                    runGroup: t,
                    ciExecutionId: n,
                    ciExecutionEnv: i,
                    criticalErrorMessage: s,
                    vcsContext: fr(),
                  }
                ),
              3
            );
            o.recordMetric(re(c));
          } catch (c) {
            o.recordMetric(
              (a = c == null ? void 0 : c.axiosException) != null && a.response
                ? re(c.axiosException.response)
                : Ie
            );
          }
        }
      });
  });
function Yo(r) {
  let e = new Object(),
    t;
  return (n) => {
    e !== n
      ? ((e = n), (t = new Date()))
      : new Date().getTime() - t.getTime() > r.timeout &&
        (c0.error({ title: r.title }), process.exit(1));
  };
}
var c0,
  df = B(() => {
    'use strict';
    ({ output: c0 } = Y());
  });
async function X_(r, e, t) {
  U && pf.note({ title: `Processing task ${t.taskId}` });
  let n = e.find((s) => t.taskId === s.id);
  if (!n) throw new Error(`Found unknown task: ${t.taskId}`);
  let i = await r.retrieveAndExtract(t.hash, t.url);
  pf.logCommand(u0(n)), process.stdout.write(i), pf.addVerticalSeparator();
}
function u0(r) {
  let e = r.target.configuration ? `:${r.target.configuration}` : '';
  return [
    'nx',
    'run',
    `${r.target.project}:${r.target.target}${e}`,
    Nn(r),
  ].join(' ');
}
var pf,
  K_ = B(() => {
    'use strict';
    ie();
    vi();
    ({ output: pf } = Y());
  });
async function Y_(r, e, t, n) {
  let i = null,
    s = {},
    o = Yo({
      title: `No new completed tasks after ${fa / 1e3} seconds.`,
      timeout: fa,
    });
  for (await tt(1e3); ; ) {
    U && mf.note({ title: 'Waiting...' });
    let a = await r.status(t, i);
    U &&
      mf.note({
        title: 'Status update',
        bodyLines: [
          `executionId: ${t}`,
          `executionStatus: ${a.executionStatus}`,
          `number of completed tasks: ${a.completedTasks.length}`,
          `error: ${a.criticalErrorMessage}`,
        ],
      }),
      a.criticalErrorMessage &&
        (mf.error({
          title: 'Distributed Execution Terminated',
          bodyLines: ['Error:', a.criticalErrorMessage],
        }),
        process.exit(1)),
      a.updatedAt || (await tt(5e3)),
      (i = a.updatedAt),
      o(a.completedTasks.length);
    for (let c of a.completedTasks)
      s[c.taskId] || (await X_(e, n, c), (s[c.taskId] = !0));
    if (a.executionStatus === 'COMPLETED')
      return { commandStatus: a.commandStatus, runUrl: a.runUrl };
  }
}
var mf,
  J_ = B(() => {
    'use strict';
    df();
    ie();
    Jn();
    K_();
    ({ output: mf } = Y());
  });
function Z_(r) {
  let e = [],
    t = new Set(Object.values(r.tasks).map((i) => i.id)),
    n = 0;
  for (; t.size > 0; ) {
    let i = (e[n] = []);
    for (let s of t) {
      let o = !0;
      for (let c of r.dependencies[s])
        if (t.has(c)) {
          o = !1;
          break;
        }
      if (!o) continue;
      let a = r.tasks[s];
      i.push(a);
    }
    for (let s of i) t.delete(s.id);
    n++;
  }
  return e;
}
var Q_ = B(() => {
  'use strict';
});
var Jo = E((a1, tb) => {
  'use strict';
  var yf = Symbol('singleComment'),
    eb = Symbol('multiComment'),
    l0 = () => '',
    f0 = (r, e, t) => r.slice(e, t).replace(/\S/g, ' '),
    h0 = (r, e) => {
      let t = e - 1,
        n = 0;
      for (; r[t] === '\\'; ) (t -= 1), (n += 1);
      return !!(n % 2);
    };
  tb.exports = (r, e = {}) => {
    if (typeof r != 'string')
      throw new TypeError(
        `Expected argument \`jsonString\` to be a \`string\`, got \`${typeof r}\``
      );
    let t = e.whitespace === !1 ? l0 : f0,
      n = !1,
      i = !1,
      s = 0,
      o = '';
    for (let a = 0; a < r.length; a++) {
      let c = r[a],
        l = r[a + 1];
      if ((!i && c === '"' && (h0(r, a) || (n = !n)), !n)) {
        if (!i && c + l === '//') (o += r.slice(s, a)), (s = a), (i = yf), a++;
        else if (
          i === yf &&
          c + l ===
            `\r
`
        ) {
          a++, (i = !1), (o += t(r, s, a)), (s = a);
          continue;
        } else if (
          i === yf &&
          c ===
            `
`
        )
          (i = !1), (o += t(r, s, a)), (s = a);
        else if (!i && c + l === '/*') {
          (o += r.slice(s, a)), (s = a), (i = eb), a++;
          continue;
        } else if (i === eb && c + l === '*/') {
          a++, (i = !1), (o += t(r, s, a + 1)), (s = a + 1);
          continue;
        }
      }
    }
    return o + (i ? t(r.slice(s)) : r.slice(s));
  };
});
function nb(r, e, t) {
  let n = JSON.parse(m0((0, rb.readFileSync)(`${d0}/nx.json`).toString()));
  return new Ef(e, y0(n, r)).createTaskGraph(t);
}
function y0(r, e) {
  let t = r.targetDependencies ?? {},
    n = e ? e.strictlyOrderedTargets ?? ['build'] : [];
  for (let i of n)
    (t[i] = t[i] || []), t[i].push({ target: i, projects: 'dependencies' });
  return t;
}
var rb,
  d0,
  p0,
  m0,
  Ef,
  ib = B(() => {
    'use strict';
    (rb = require('fs')),
      ({ workspaceRoot: d0 } = Y()),
      ({ getDependencyConfigs: p0 } = dt()),
      (m0 = Jo());
    Ef = class {
      constructor(e, t) {
        this.projectGraph = e;
        this.defaultTargetDependencies = t;
      }
      createTaskGraph(e) {
        let t = { roots: [], tasks: {}, dependencies: {} };
        for (let n of e) {
          this.addTaskToGraph(n, t);
          let i = p0(
            n.target,
            this.defaultTargetDependencies,
            this.projectGraph
          );
          i && this.addTaskDependencies(n, i, e, t);
        }
        return (
          (t.roots = Object.keys(t.dependencies).filter(
            (n) => t.dependencies[n].length === 0
          )),
          t
        );
      }
      addTaskDependencies(e, t, n, i) {
        for (let s of t)
          if (s.projects === 'self')
            for (let o of n)
              o.target.project === e.target.project &&
                o.target.target === s.target &&
                i.dependencies[e.id].push(o.id);
          else if (s.projects === 'dependencies') {
            let o = new Set();
            this.addDependencies(e.target.project, s.target, n, i, e.id, o);
          }
      }
      addDependencies(e, t, n, i, s, o) {
        o.add(e);
        let a = this.projectGraph.dependencies[e];
        if (a) {
          let c = a.map((l) => l.target);
          for (let l of c) {
            if (o.has(l)) continue;
            let u = this.findTask({ project: l, target: t }, n);
            u
              ? i.dependencies[s].indexOf(u.id) === -1 &&
                i.dependencies[s].push(u.id)
              : this.addDependencies(l, t, n, i, s, o);
          }
        }
      }
      findTask({ project: e, target: t }, n) {
        return n.find((i) => i.target.project === e && i.target.target === t);
      }
      addTaskToGraph(e, t) {
        (t.tasks[e.id] = e), (t.dependencies[e.id] = []);
      }
    };
  });
var _f = {};
Nt(_f, { nxCloudDistributedTasksRunner: () => g0 });
function _0(r, e, t) {
  return r.taskGraph ? r.taskGraph : nb(t, r.projectGraph, e);
}
function b0(r, e, t, n, i) {
  process.on('SIGINT', async () => {
    await r.completeRunGroupWithError(
      e,
      t,
      n,
      i,
      'Main job was terminated via SIGINT'
    ),
      process.exit(1);
  }),
    process.on('SIGTERM', async () => {
      await r.completeRunGroupWithError(
        e,
        t,
        n,
        i,
        'Main job was terminated via SIGTERM'
      ),
        process.exit(1);
    });
}
async function v0(r, e, t, n, i, s, o, a, c, l) {
  let u = await r.start(W_(n, i, s, o, Z_(a), e, c));
  return await Y_(r, t, u, Object.values(a.tasks));
}
var Mi,
  E0,
  gf,
  g0,
  bf = B(() => {
    'use strict';
    lf();
    ie();
    Dt();
    ds();
    Ui();
    ps();
    yo();
    hf();
    J_();
    Q_();
    ib();
    ({ output: Mi } = Y()),
      ({ cacheDirectory: E0 } = dt()),
      (gf = class {
        scheduleTask(e) {}
        startTask(e) {}
        endTasks(e) {}
      }),
      (g0 = async (r, e, t) => {
        e.skipNxCache &&
          Mi.warn({
            title:
              '--skip-nx-cache is ignored when using distributed tasks execution (DTE).',
            bodyLine: ['DTE needs the cache to share files between agents.'],
          }),
          U && Mi.note({ title: 'Starting distributed command execution' }),
          (e.lifeCycle = new gf());
        let n = me(),
          i = ve(),
          s = je(),
          o = xe(),
          a = et(),
          c = Vi();
        yr(i, s) || (Er(), process.exit(1));
        let l = new Yt(Rr || e.encryptionKey),
          u = new Kt(e),
          f = new jn(new ur(l, u, e, 'dte-main'), E0),
          h = new Gn(e);
        b0(h, n, i, s, o);
        try {
          let d = _0(t, r, e),
            y = await v0(h, e, f, n, i, s, o, d, a, c);
          y.commandStatus === 0
            ? Mi.success({
                title: 'Successfully completed running the command.',
                bodyLines: [`See run details at ${y.runUrl}`],
              })
            : Mi.error({
                title: 'Command execution failed.',
                bodyLines: [`See run details at ${y.runUrl}`],
              }),
            await rn(e),
            process.exit(y.commandStatus);
        } catch (d) {
          Mi.error({
            title: 'Unable to complete a run.',
            bodyLines: [d.message],
          }),
            d.axiosException ? console.log(d.axiosException) : console.log(d);
          try {
            await h.completeRunGroupWithError(
              n,
              i,
              s,
              o,
              `Main job terminated with an error: "${d.message}"`
            );
          } finally {
            process.exit(1);
          }
        }
      });
  });
var ob = {};
Nt(ob, { default: () => I0 });
function R0(r, e, t) {
  let { from: n } = of(),
    { switchMap: i } = z_();
  return n(Di(e)).pipe(
    i((s) =>
      s.data.enabled
        ? (bf(), be(_f)).nxCloudDistributedTasksRunner(r, e, t)
        : (Xr.warn({
            title: 'Nx Cloud: Workspace Disabled',
            bodyLines: [
              'This run and following runs will not use distributed task execution until',
              'the outstanding balance is paid or additional coupons are added for this',
              'workspace. If you believe you are receiving this message in error, please',
              'contact support at cloud-support@nrwl.io.',
              '',
              'Execution will now continue using this machine only.',
            ],
          }),
          (process.env.NX_INVOKED_BY_RUNNER = 'true'),
          Ai(r, e, t))
    )
  );
}
async function x0(r, e, t) {
  return (await Di(e)).data.enabled
    ? (bf(), be(_f)).nxCloudDistributedTasksRunner(r, e, t)
    : (Xr.warn({
        title: 'Nx Cloud: Workspace Disabled',
        bodyLines: [
          'This run and following runs will not use distributed task execution until',
          'the outstanding balance is paid.',
          '',
          'If you believe you are receiving this message in error, please',
          'contact support at cloud-support@nrwl.io.',
          '',
          'Execution will now continue using this machine only.',
        ],
      }),
      (process.env.NX_INVOKED_BY_RUNNER = 'true'),
      Ai(r, e, t));
}
function O0(r, e) {
  let t = e.cacheableOperations || [];
  return r.some((n) => vf(n, { cacheableOperations: t }));
}
function T0(r, e) {
  let t = e.cacheableOperations || [];
  for (let n of r)
    vf(n, { cacheableOperations: t }) ||
      (Xr.error({
        title: 'Distributed task execution only works for cacheable targets',
        bodyLines: [
          `Target '${n.target.project}:${n.target.target}' cannot be executed.`,
          'To be able to replay the output of the target, distributed task execution only supports cacheable targets.',
          `You can verify that '${n.target.target}' is part of the list of cacheable targets in the 'nx.json' file.`,
          'You can invoke this command without distribution by doing "NX_CLOUD_DISTRIBUTED_EXECUTION=false nx ...".',
        ],
      }),
      process.exit(1));
}
function C0(r, e) {
  let t = e.cacheableOperations || [];
  for (let n of r)
    vf(n, { cacheableOperations: t }) ||
      (Xr.error({
        title: 'Distributed task execution only works for cacheable targets',
        bodyLines: [
          `Target ${n.target.project}:${n.target.target} cannot be executed.`,
          'To be able to replay the output of the target, distributed task execution only supports cacheable targets.',
          `You can still invoke "nx ${n.target.target} ${n.target.project}" from within a cacheable target when using "nx:run-commands".`,
        ],
      }),
      process.exit(Vt));
}
var Xr,
  sb,
  S0,
  vf,
  w0,
  I0,
  ab = B(() => {
    'use strict';
    p_();
    Ul();
    ql();
    ie();
    Bl();
    ({ output: Xr } = Y()),
      ({
        tasksRunner: sb,
        runnerReturnsPromise: S0,
        isCacheableTask: vf,
      } = dt()),
      (w0 = (r, e, t = {}) => {
        let n = t.nxArgs || {},
          i = !At && !e.accessToken,
          s = n.cloud === !1 || ah;
        return i || s || e.skipNxCache
          ? (i &&
              Xr.warn({
                title: 'No access token found',
                bodyLines: [
                  'Nx will continue running, but nothing will be written or read from the remote cache.',
                  'Run details will also not be available in the Nx Cloud UI.',
                ],
              }),
            s &&
              Xr.warn({
                title: 'Nx Cloud Manually Disabled',
                bodyLines: [
                  'Nx will continue running, but nothing will be written or read from the remote cache.',
                  'Run details will also not be available in the Nx Cloud UI.',
                  '',
                  "If this wasn't intentional, check for the NX_NO_CLOUD environment variable, the --no-cloud flag",
                ],
              }),
            e.skipNxCache &&
              Xr.warn({
                title:
                  '--skip-nx-cache disables the connection to Nx Cloud for the current run.',
                bodyLines: [
                  'The remote cache will not be read from or written to during this run.',
                ],
              }),
            sb(r, e, t))
          : ch()
          ? O0(r, e)
            ? Ai(r, e, t, !0)
            : sb(r, e, t)
          : (ut(process.env.NX_CLOUD_DISTRIBUTED_EXECUTION_ID)
              ? C0(r, e)
              : Ko(),
            O_(n.dte) && !ut(process.env.NX_CLOUD_DISTRIBUTED_EXECUTION_ID)
              ? (T0(r, e), S0 ? x0(r, e, t) : R0(r, e, t))
              : ((process.env.NX_INVOKED_BY_RUNNER = 'true'), Ai(r, e, t)));
      });
    I0 = w0;
  });
var Sf = {};
Nt(Sf, { cleanUpAgents: () => D0 });
async function D0() {
  let r = `${A0}/lockfiles`;
  return (
    U && N0.note({ title: 'Cleaning up agent metadata for this workspace.' }),
    (0, cb.rm)(r, { recursive: !0, force: !0 }, (e) => {
      if (e) throw e;
    })
  );
}
var cb,
  N0,
  A0,
  wf = B(() => {
    'use strict';
    cb = require('fs');
    ie();
    ({ output: N0 } = Y()), ({ cacheDirectory: A0 } = dt());
  });
function Ct() {
  var n, i;
  let r = JSON.parse(k0((0, ub.readFileSync)(`${L0}/nx.json`).toString())),
    e = {},
    t = [];
  for (let s in r.targetDefaults) r.targetDefaults[s].cache && t.push(s);
  return (
    r.nxCloudAccessToken &&
      (e.accessToken ?? (e.accessToken = r.nxCloudAccessToken)),
    r.nxCloudUrl && (e.url ?? (e.url = r.nxCloudUrl)),
    r.nxCloudEncryptionKey && (e.encryptionKey = r.nxCloudEncryptionKey),
    r.parallel && (e.parallel ?? (e.parallel = r.parallel)),
    r.cacheDirectory &&
      (e.cacheDirectory ?? (e.cacheDirectory = r.cacheDirectory)),
    t.length && (e.cacheableOperations ?? (e.cacheableOperations = t)),
    {
      nxJson: r,
      nxCloudOptions: {
        ...e,
        ...((i = (n = r.tasksRunnerOptions) == null ? void 0 : n.default) ==
        null
          ? void 0
          : i.options),
      },
    }
  );
}
var ub,
  k0,
  L0,
  $n = B(() => {
    'use strict';
    (ub = require('fs')), (k0 = Jo()), ({ workspaceRoot: L0 } = Y());
  });
var Rf = {};
Nt(Rf, { runCommandAndStoreInCloud: () => P0 });
async function P0() {
  let { nxCloudOptions: r } = Ct(),
    e = Te(r),
    t = new Gn(r),
    n = new lr(r.maskedProperties),
    i = me(),
    s = ve(),
    o = je(),
    a = xe(),
    c = F0(process.argv),
    [l, ...u] = c,
    f = new Date().toISOString(),
    { statusCode: h, terminalOutput: d } = await U0(l, u),
    y = new Date().toISOString(),
    v = {
      statusCode: h,
      terminalOutput: d,
      userCommandAndArgsString: c.join(' '),
      startTime: f,
      endTime: y,
      branch: i,
      runGroup: s,
      ciExecutionId: o,
      ciExecutionEnv: a,
    };
  await q0(e, n, r, v, t), process.exit(h);
}
function F0(r) {
  let e = r.findIndex((n) => n === 'record') + 1,
    t;
  if (e < process.argv.length) {
    let n = process.argv[e] === '--' ? 1 : 0;
    t = process.argv.slice(e + n);
  } else
    console.log(
      'Invalid command. Use `nx-cloud record [my command] [my arg1] [my arg...]`'
    ),
      process.exit(1);
  return t;
}
function U0(r, e) {
  return new Promise((t, n) => {
    try {
      let i = hb.spawn(r, e, { stdio: ['inherit', 'pipe', 'pipe', 'ipc'] }),
        s = [];
      i.stdout.on('data', (o) => {
        process.stdout.write(o), s.push(o.toString());
      }),
        i.stderr.on('data', (o) => {
          process.stderr.write(o), s.push(o.toString());
        }),
        i.on('exit', (o, a) => {
          let c = o ?? j0(a || ''),
            l = s.join('');
          t({ statusCode: c, terminalOutput: l });
        });
    } catch (i) {
      n(i);
    }
  });
}
function M0(r, e) {
  let t = r.obfuscate(e.terminalOutput),
    n =
      t.length > fb
        ? `TRUNCATED

${t.slice(t.length - fb)}`
        : t;
  return {
    taskId: 'nx-cloud-tasks-runner:record-command',
    target: 'record-command',
    projectName: 'nx-cloud-tasks-runner',
    hash: '',
    startTime: e.startTime,
    endTime: e.endTime,
    hashDetails: {},
    params: e.userCommandAndArgsString,
    cacheStatus: 'n/a',
    status: e.statusCode,
    terminalOutput: n,
  };
}
async function q0(r, e, t, n, i) {
  let s = `nx-cloud record -- ${n.userCommandAndArgsString}`,
    o = {
      meta: { nxCloudVersion: '0.0.0' },
      tasks: [M0(e, n)],
      run: {
        command: s,
        startTime: n.startTime,
        endTime: n.endTime,
        branch: n.branch,
        runGroup: n.runGroup,
        sha: n.branch ? et() : void 0,
      },
      branch: n.branch,
      runGroup: n.runGroup,
      ciExecutionId: n.ciExecutionId,
      ciExecutionEnv: n.ciExecutionEnv,
      machineInfo: Yr(),
    },
    a = Buffer.from(JSON.stringify(o)),
    c = await (0, db.promisify)(pb.gzip)(a),
    l = await ce(() =>
      r.post('/nx-cloud/runs/end', c, {
        headers: {
          ...r.defaults.headers,
          'Content-Encoding': 'gzip',
          'Content-Type': 'application/octet-stream',
        },
      })
    );
  process.env.NX_CLOUD_SILENT_RECORD !== 'true' && B0(l.data.runUrl),
    n.statusCode !== 0 &&
      (n.ciExecutionId || n.runGroup) &&
      (await i.completeRunGroupWithError(
        n.branch,
        n.runGroup,
        n.ciExecutionId,
        n.ciExecutionEnv,
        null
      ));
}
function B0(r) {
  lb.addVerticalSeparator(),
    lb.note({ title: 'Nx Cloud: Successfully recorded command output' }),
    Xt(`You can view or share your output by visiting ${r}`);
}
function j0(r) {
  return r === 'SIGHUP'
    ? 128 + 1
    : r === 'SIGINT'
    ? 128 + 2
    : r === 'SIGTERM'
    ? 128 + 15
    : 128;
}
var hb,
  db,
  pb,
  lb,
  fb,
  xf = B(() => {
    'use strict';
    (hb = br(require('child_process'))),
      (db = require('util')),
      (pb = require('zlib'));
    gt();
    ie();
    $n();
    ni();
    hf();
    go();
    ({ output: lb } = Y()), (fb = 2e5);
  });
function mb() {
  G0.error({
    title: 'Invalid Task Runner Configuration',
    bodyLines: [
      'To use Distributed Task Execution, your default task runner configuration must',
      'use the "nx-cloud" task runner.',
      '',
      'This can be adjusted in "nx.json".',
    ],
  });
}
var G0,
  yb = B(() => {
    'use strict';
    ({ output: G0 } = Y());
  });
var Eb,
  Zo,
  gb = B(() => {
    'use strict';
    gt();
    ie();
    Dt();
    ({ output: Eb } = Y()),
      (Zo = class {
        constructor(e, t, n, i, s, o) {
          this.branch = t;
          this.runGroup = n;
          this.ciExecutionId = i;
          this.ciExecutionEnv = s;
          this.agentName = o;
          this.apiAxiosInstance = Te(e, 6e4);
        }
        async tasks(e, t, n, i) {
          var o;
          let s = Ce('dtePollTasks');
          try {
            let a = await ce(() =>
              this.apiAxiosInstance.post('/nx-cloud/executions/tasks', {
                runGroup: this.runGroup,
                ciExecutionId: this.ciExecutionId,
                ciExecutionEnv: this.ciExecutionEnv,
                agentName: this.agentName,
                executionId: e,
                statusCode: t,
                completedTasks: n,
                targets: i,
              })
            );
            return s.recordMetric(re(a)), a.data;
          } catch (a) {
            throw (
              (s.recordMetric(
                (o = a == null ? void 0 : a.axiosException) != null &&
                  o.response
                  ? re(a.axiosException.response)
                  : Ie
              ),
              a)
            );
          }
        }
        async completeRunGroupWithError(e) {
          var n;
          U &&
            Eb.note({
              title: 'Completing with an error',
              bodyLines: [
                `ciExecutionId: ${this.ciExecutionId}`,
                `ciExecutionEnv: ${this.ciExecutionEnv}`,
                `runGroup: ${this.runGroup}`,
                `error: ${e}`,
              ],
            });
          let t = Ce('completeRunGroup');
          try {
            let i = await ce(() =>
              this.apiAxiosInstance.post(
                '/nx-cloud/executions/complete-run-group',
                {
                  branch: this.branch,
                  runGroup: this.runGroup,
                  ciExecutionId: this.ciExecutionId,
                  ciExecutionEnv: this.ciExecutionEnv,
                  agentName: this.agentName,
                  criticalErrorMessage: e,
                }
              )
            );
            U && Eb.note({ title: 'Completed run group with an error' }),
              t.recordMetric(re(i));
          } catch (i) {
            t.recordMetric(
              (n = i == null ? void 0 : i.axiosException) != null && n.response
                ? re(i.axiosException.response)
                : Ie
            ),
              console.error(i);
          }
        }
      });
  });
async function _b(r, e, t, n, i) {
  let s = 0,
    o = null,
    a = Yo({
      title: `No new messages received after ${la / 1e3} seconds`,
      timeout: la,
    }),
    c = [],
    l = new Date(),
    u = !1,
    f = {};
  for (;;) {
    if (
      (U && qi.note({ title: `${r} fetching tasks...` }),
      (o = await e.tasks(o ? o.executionId : null, s, c, i)),
      U &&
        qi.note({
          title: `${r} received an API Response`,
          bodyLines: [
            `completed: ${o.completed}`,
            `status: ${o.status}`,
            `retryDuring: ${o.retryDuring}`,
            `executionId: ${o.executionId}`,
            `number of tasks: ${o.tasks.length}`,
            `error: ${o.criticalErrorMessage}`,
            `maxParallel: ${o.maxParallel}`,
          ],
        }),
      o.criticalErrorMessage &&
        (qi.error({
          title: 'Distributed Execution Terminated',
          bodyLines: ['Error:', o.criticalErrorMessage],
        }),
        process.exit(1)),
      o != null &&
        o.retryDuring &&
        (o == null ? void 0 : o.retryDuring) !== 0 &&
        !u &&
        new Date().getTime() - l.getTime() > o.retryDuring)
    ) {
      await tt(2e4);
      continue;
    }
    if ((o == null ? void 0 : o.status) !== void 0) {
      if (
        o.status === 'RUN_GROUP_COMPLETED' ||
        o.status === 'NO_FURTHER_TASKS_TO_RUN'
      )
        return;
    } else if (o.completed) return;
    if ((a(o.tasks.map((d) => d.taskId).join('')), !o.executionId)) {
      U && qi.note({ title: `${r} waiting...` }),
        await tt(5e3),
        (s = 0),
        (c = []);
      continue;
    }
    if (((u = !0), o.completedTasks))
      for (let d of o.completedTasks)
        f[d.taskId] ||
          (qi.note({
            title: `${r} downloading artifacts for ${d.taskId} Hash: ${d.hash}}`,
          }),
          await t.retrieveAndExtract(d.hash, d.url),
          (f[d.taskId] = !0));
    let h = await n(o.executionId, o.tasks, o.maxParallel);
    for (let d of h.completedTasks) f[d.taskId] = !0;
    (s = h.completedStatusCode), (c = h.completedTasks);
  }
}
var qi,
  bb = B(() => {
    'use strict';
    df();
    ie();
    Jn();
    ({ output: qi } = Y());
  });
var Qo = E((G1, Cb) => {
  'use strict';
  var $0 = require('util'),
    vb = require('path'),
    H0 = require('fs');
  function Bi(r) {
    if (
      ((r !== r.toLowerCase() && r !== r.toUpperCase()) ||
        (r = r.toLowerCase()),
      r.indexOf('-') === -1 && r.indexOf('_') === -1)
    )
      return r;
    {
      let t = '',
        n = !1,
        i = r.match(/^-+/);
      for (let s = i ? i[0].length : 0; s < r.length; s++) {
        let o = r.charAt(s);
        n && ((n = !1), (o = o.toUpperCase())),
          s !== 0 && (o === '-' || o === '_')
            ? (n = !0)
            : o !== '-' && o !== '_' && (t += o);
      }
      return t;
    }
  }
  function xb(r, e) {
    let t = r.toLowerCase();
    e = e || '-';
    let n = '';
    for (let i = 0; i < r.length; i++) {
      let s = t.charAt(i),
        o = r.charAt(i);
      s !== o && i > 0 ? (n += `${e}${t.charAt(i)}`) : (n += o);
    }
    return n;
  }
  function Ob(r) {
    return r == null
      ? !1
      : typeof r == 'number' || /^0x[0-9a-f]+$/i.test(r)
      ? !0
      : /^0[^.]/.test(r)
      ? !1
      : /^[-]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(r);
  }
  function z0(r) {
    if (Array.isArray(r))
      return r.map((o) => (typeof o != 'string' ? o + '' : o));
    r = r.trim();
    let e = 0,
      t = null,
      n = null,
      i = null,
      s = [];
    for (let o = 0; o < r.length; o++) {
      if (((t = n), (n = r.charAt(o)), n === ' ' && !i)) {
        t !== ' ' && e++;
        continue;
      }
      n === i ? (i = null) : (n === "'" || n === '"') && !i && (i = n),
        s[e] || (s[e] = ''),
        (s[e] += n);
    }
    return s;
  }
  var pt;
  (function (r) {
    (r.BOOLEAN = 'boolean'),
      (r.STRING = 'string'),
      (r.NUMBER = 'number'),
      (r.ARRAY = 'array');
  })(pt || (pt = {}));
  var Ht,
    Nf = class {
      constructor(e) {
        Ht = e;
      }
      parse(e, t) {
        let n = Object.assign(
            {
              alias: void 0,
              array: void 0,
              boolean: void 0,
              config: void 0,
              configObjects: void 0,
              configuration: void 0,
              coerce: void 0,
              count: void 0,
              default: void 0,
              envPrefix: void 0,
              narg: void 0,
              normalize: void 0,
              string: void 0,
              number: void 0,
              __: void 0,
              key: void 0,
            },
            t
          ),
          i = z0(e),
          s = typeof e == 'string',
          o = V0(Object.assign(Object.create(null), n.alias)),
          a = Object.assign(
            {
              'boolean-negation': !0,
              'camel-case-expansion': !0,
              'combine-arrays': !1,
              'dot-notation': !0,
              'duplicate-arguments-array': !0,
              'flatten-duplicate-arrays': !0,
              'greedy-arrays': !0,
              'halt-at-non-option': !1,
              'nargs-eats-options': !1,
              'negation-prefix': 'no-',
              'parse-numbers': !0,
              'parse-positional-numbers': !0,
              'populate--': !1,
              'set-placeholder-key': !1,
              'short-option-groups': !0,
              'strip-aliased': !1,
              'strip-dashed': !1,
              'unknown-options-as-args': !1,
            },
            n.configuration
          ),
          c = Object.assign(Object.create(null), n.default),
          l = n.configObjects || [],
          u = n.envPrefix,
          f = a['populate--'],
          h = f ? '--' : '_',
          d = Object.create(null),
          y = Object.create(null),
          v = n.__ || Ht.format,
          p = {
            aliases: Object.create(null),
            arrays: Object.create(null),
            bools: Object.create(null),
            strings: Object.create(null),
            numbers: Object.create(null),
            counts: Object.create(null),
            normalize: Object.create(null),
            configs: Object.create(null),
            nargs: Object.create(null),
            coercions: Object.create(null),
            keys: [],
          },
          w = /^-([0-9]+(\.[0-9]+)?|\.[0-9]+)$/,
          k = new RegExp('^--' + a['negation-prefix'] + '(.+)');
        []
          .concat(n.array || [])
          .filter(Boolean)
          .forEach(function (m) {
            let _ = typeof m == 'object' ? m.key : m,
              x = Object.keys(m)
                .map(function (b) {
                  return {
                    boolean: 'bools',
                    string: 'strings',
                    number: 'numbers',
                  }[b];
                })
                .filter(Boolean)
                .pop();
            x && (p[x][_] = !0), (p.arrays[_] = !0), p.keys.push(_);
          }),
          []
            .concat(n.boolean || [])
            .filter(Boolean)
            .forEach(function (m) {
              (p.bools[m] = !0), p.keys.push(m);
            }),
          []
            .concat(n.string || [])
            .filter(Boolean)
            .forEach(function (m) {
              (p.strings[m] = !0), p.keys.push(m);
            }),
          []
            .concat(n.number || [])
            .filter(Boolean)
            .forEach(function (m) {
              (p.numbers[m] = !0), p.keys.push(m);
            }),
          []
            .concat(n.count || [])
            .filter(Boolean)
            .forEach(function (m) {
              (p.counts[m] = !0), p.keys.push(m);
            }),
          []
            .concat(n.normalize || [])
            .filter(Boolean)
            .forEach(function (m) {
              (p.normalize[m] = !0), p.keys.push(m);
            }),
          typeof n.narg == 'object' &&
            Object.entries(n.narg).forEach(([m, _]) => {
              typeof _ == 'number' && ((p.nargs[m] = _), p.keys.push(m));
            }),
          typeof n.coerce == 'object' &&
            Object.entries(n.coerce).forEach(([m, _]) => {
              typeof _ == 'function' && ((p.coercions[m] = _), p.keys.push(m));
            }),
          typeof n.config < 'u' &&
            (Array.isArray(n.config) || typeof n.config == 'string'
              ? []
                  .concat(n.config)
                  .filter(Boolean)
                  .forEach(function (m) {
                    p.configs[m] = !0;
                  })
              : typeof n.config == 'object' &&
                Object.entries(n.config).forEach(([m, _]) => {
                  (typeof _ == 'boolean' || typeof _ == 'function') &&
                    (p.configs[m] = _);
                })),
          A(n.key, o, n.default, p.arrays),
          Object.keys(c).forEach(function (m) {
            (p.aliases[m] || []).forEach(function (_) {
              c[_] = c[m];
            });
          });
        let O = null;
        zt();
        let N = [],
          P = Object.assign(Object.create(null), { _: [] }),
          I = {};
        for (let m = 0; m < i.length; m++) {
          let _ = i[m],
            x = _.replace(/^-{3,}/, '---'),
            b,
            g,
            F,
            D,
            M,
            pe;
          if (_ !== '--' && /^-/.test(_) && ct(_)) z(_);
          else if (x.match(/^---+(=|$)/)) {
            z(_);
            continue;
          } else if (
            _.match(/^--.+=/) ||
            (!a['short-option-groups'] && _.match(/^-.+=/))
          )
            (D = _.match(/^--?([^=]+)=([\s\S]*)$/)),
              D !== null &&
                Array.isArray(D) &&
                D.length >= 3 &&
                (S(D[1], p.arrays)
                  ? (m = T(m, D[1], i, D[2]))
                  : S(D[1], p.nargs) !== !1
                  ? (m = G(m, D[1], i, D[2]))
                  : C(D[1], D[2], !0));
          else if (_.match(k) && a['boolean-negation'])
            (D = _.match(k)),
              D !== null &&
                Array.isArray(D) &&
                D.length >= 2 &&
                ((g = D[1]), C(g, S(g, p.arrays) ? [!1] : !1));
          else if (
            _.match(/^--.+/) ||
            (!a['short-option-groups'] && _.match(/^-[^-]+/))
          )
            (D = _.match(/^--?(.+)/)),
              D !== null &&
                Array.isArray(D) &&
                D.length >= 2 &&
                ((g = D[1]),
                S(g, p.arrays)
                  ? (m = T(m, g, i))
                  : S(g, p.nargs) !== !1
                  ? (m = G(m, g, i))
                  : ((M = i[m + 1]),
                    (M !== void 0 &&
                      (!M.match(/^-/) || M.match(w)) &&
                      !S(g, p.bools) &&
                      !S(g, p.counts)) ||
                    /^(true|false)$/.test(M)
                      ? (C(g, M), m++)
                      : C(g, _e(g))));
          else if (_.match(/^-.\..+=/))
            (D = _.match(/^-([^=]+)=([\s\S]*)$/)),
              D !== null && Array.isArray(D) && D.length >= 3 && C(D[1], D[2]);
          else if (_.match(/^-.\..+/) && !_.match(w))
            (M = i[m + 1]),
              (D = _.match(/^-(.\..+)/)),
              D !== null &&
                Array.isArray(D) &&
                D.length >= 2 &&
                ((g = D[1]),
                M !== void 0 &&
                !M.match(/^-/) &&
                !S(g, p.bools) &&
                !S(g, p.counts)
                  ? (C(g, M), m++)
                  : C(g, _e(g)));
          else if (_.match(/^-[^-]+/) && !_.match(w)) {
            (F = _.slice(1, -1).split('')), (b = !1);
            for (let Fe = 0; Fe < F.length; Fe++) {
              if (((M = _.slice(Fe + 2)), F[Fe + 1] && F[Fe + 1] === '=')) {
                (pe = _.slice(Fe + 3)),
                  (g = F[Fe]),
                  S(g, p.arrays)
                    ? (m = T(m, g, i, pe))
                    : S(g, p.nargs) !== !1
                    ? (m = G(m, g, i, pe))
                    : C(g, pe),
                  (b = !0);
                break;
              }
              if (M === '-') {
                C(F[Fe], M);
                continue;
              }
              if (
                /[A-Za-z]/.test(F[Fe]) &&
                /^-?\d+(\.\d*)?(e-?\d+)?$/.test(M) &&
                S(M, p.bools) === !1
              ) {
                C(F[Fe], M), (b = !0);
                break;
              }
              if (F[Fe + 1] && F[Fe + 1].match(/\W/)) {
                C(F[Fe], M), (b = !0);
                break;
              } else C(F[Fe], _e(F[Fe]));
            }
            (g = _.slice(-1)[0]),
              !b &&
                g !== '-' &&
                (S(g, p.arrays)
                  ? (m = T(m, g, i))
                  : S(g, p.nargs) !== !1
                  ? (m = G(m, g, i))
                  : ((M = i[m + 1]),
                    (M !== void 0 &&
                      (!/^(-|--)[^-]/.test(M) || M.match(w)) &&
                      !S(g, p.bools) &&
                      !S(g, p.counts)) ||
                    /^(true|false)$/.test(M)
                      ? (C(g, M), m++)
                      : C(g, _e(g))));
          } else if (
            _.match(/^-[0-9]$/) &&
            _.match(w) &&
            S(_.slice(1), p.bools)
          )
            (g = _.slice(1)), C(g, _e(g));
          else if (_ === '--') {
            N = i.slice(m + 1);
            break;
          } else if (a['halt-at-non-option']) {
            N = i.slice(m);
            break;
          } else z(_);
        }
        $(P, !0),
          $(P, !1),
          J(P),
          K(),
          le(P, p.aliases, c, !0),
          L(P),
          a['set-placeholder-key'] && H(P),
          Object.keys(p.counts).forEach(function (m) {
            Re(P, m.split('.')) || C(m, 0);
          }),
          f && N.length && (P[h] = []),
          N.forEach(function (m) {
            P[h].push(m);
          }),
          a['camel-case-expansion'] &&
            a['strip-dashed'] &&
            Object.keys(P)
              .filter((m) => m !== '--' && m.includes('-'))
              .forEach((m) => {
                delete P[m];
              }),
          a['strip-aliased'] &&
            [].concat(...Object.keys(o).map((m) => o[m])).forEach((m) => {
              a['camel-case-expansion'] &&
                m.includes('-') &&
                delete P[
                  m
                    .split('.')
                    .map((_) => Bi(_))
                    .join('.')
                ],
                delete P[m];
            });
        function z(m) {
          let _ = V('_', m);
          (typeof _ == 'string' || typeof _ == 'number') && P._.push(_);
        }
        function G(m, _, x, b) {
          let g,
            F = S(_, p.nargs);
          if (((F = typeof F != 'number' || isNaN(F) ? 1 : F), F === 0))
            return (
              Pe(b) || (O = Error(v('Argument unexpected for: %s', _))),
              C(_, _e(_)),
              m
            );
          let D = Pe(b) ? 0 : 1;
          if (a['nargs-eats-options'])
            x.length - (m + 1) + D < F &&
              (O = Error(v('Not enough arguments following: %s', _))),
              (D = F);
          else {
            for (
              g = m + 1;
              g < x.length &&
              (!x[g].match(/^-[^0-9]/) || x[g].match(w) || ct(x[g]));
              g++
            )
              D++;
            D < F && (O = Error(v('Not enough arguments following: %s', _)));
          }
          let M = Math.min(D, F);
          for (!Pe(b) && M > 0 && (C(_, b), M--), g = m + 1; g < M + m + 1; g++)
            C(_, x[g]);
          return m + M;
        }
        function T(m, _, x, b) {
          let g = [],
            F = b || x[m + 1],
            D = S(_, p.nargs);
          if (S(_, p.bools) && !/^(true|false)$/.test(F)) g.push(!0);
          else if (Pe(F) || (Pe(b) && /^-/.test(F) && !w.test(F) && !ct(F))) {
            if (c[_] !== void 0) {
              let M = c[_];
              g = Array.isArray(M) ? M : [M];
            }
          } else {
            Pe(b) || g.push(X(_, b, !0));
            for (
              let M = m + 1;
              M < x.length &&
              !(
                (!a['greedy-arrays'] && g.length > 0) ||
                (D && typeof D == 'number' && g.length >= D) ||
                ((F = x[M]), /^-/.test(F) && !w.test(F) && !ct(F))
              );
              M++
            )
              (m = M), g.push(X(_, F, s));
          }
          return (
            typeof D == 'number' &&
              ((D && g.length < D) || (isNaN(D) && g.length === 0)) &&
              (O = Error(v('Not enough arguments following: %s', _))),
            C(_, g),
            m
          );
        }
        function C(m, _, x = s) {
          if (/-/.test(m) && a['camel-case-expansion']) {
            let F = m
              .split('.')
              .map(function (D) {
                return Bi(D);
              })
              .join('.');
            j(m, F);
          }
          let b = X(m, _, x),
            g = m.split('.');
          R(P, g, b),
            p.aliases[m] &&
              p.aliases[m].forEach(function (F) {
                let D = F.split('.');
                R(P, D, b);
              }),
            g.length > 1 &&
              a['dot-notation'] &&
              (p.aliases[g[0]] || []).forEach(function (F) {
                let D = F.split('.'),
                  M = [].concat(g);
                M.shift(),
                  (D = D.concat(M)),
                  (p.aliases[m] || []).includes(D.join('.')) || R(P, D, b);
              }),
            S(m, p.normalize) &&
              !S(m, p.arrays) &&
              [m].concat(p.aliases[m] || []).forEach(function (D) {
                Object.defineProperty(I, D, {
                  enumerable: !0,
                  get() {
                    return _;
                  },
                  set(M) {
                    _ = typeof M == 'string' ? Ht.normalize(M) : M;
                  },
                });
              });
        }
        function j(m, _) {
          (p.aliases[m] && p.aliases[m].length) ||
            ((p.aliases[m] = [_]), (d[_] = !0)),
            (p.aliases[_] && p.aliases[_].length) || j(_, m);
        }
        function X(m, _, x) {
          x && (_ = W0(_)),
            (S(m, p.bools) || S(m, p.counts)) &&
              typeof _ == 'string' &&
              (_ = _ === 'true');
          let b = Array.isArray(_)
            ? _.map(function (g) {
                return V(m, g);
              })
            : V(m, _);
          return (
            S(m, p.counts) && (Pe(b) || typeof b == 'boolean') && (b = Of()),
            S(m, p.normalize) &&
              S(m, p.arrays) &&
              (Array.isArray(_)
                ? (b = _.map((g) => Ht.normalize(g)))
                : (b = Ht.normalize(_))),
            b
          );
        }
        function V(m, _) {
          return (
            (!a['parse-positional-numbers'] && m === '_') ||
              (!S(m, p.strings) &&
                !S(m, p.bools) &&
                !Array.isArray(_) &&
                ((Ob(_) &&
                  a['parse-numbers'] &&
                  Number.isSafeInteger(Math.floor(parseFloat(`${_}`)))) ||
                  (!Pe(_) && S(m, p.numbers))) &&
                (_ = Number(_))),
            _
          );
        }
        function J(m) {
          let _ = Object.create(null);
          le(_, p.aliases, c),
            Object.keys(p.configs).forEach(function (x) {
              let b = m[x] || _[x];
              if (b)
                try {
                  let g = null,
                    F = Ht.resolve(Ht.cwd(), b),
                    D = p.configs[x];
                  if (typeof D == 'function') {
                    try {
                      g = D(F);
                    } catch (M) {
                      g = M;
                    }
                    if (g instanceof Error) {
                      O = g;
                      return;
                    }
                  } else g = Ht.require(F);
                  q(g);
                } catch (g) {
                  g.name === 'PermissionDenied'
                    ? (O = g)
                    : m[x] && (O = Error(v('Invalid JSON config file: %s', b)));
                }
            });
        }
        function q(m, _) {
          Object.keys(m).forEach(function (x) {
            let b = m[x],
              g = _ ? _ + '.' + x : x;
            typeof b == 'object' &&
            b !== null &&
            !Array.isArray(b) &&
            a['dot-notation']
              ? q(b, g)
              : (!Re(P, g.split('.')) ||
                  (S(g, p.arrays) && a['combine-arrays'])) &&
                C(g, b);
          });
        }
        function K() {
          typeof l < 'u' &&
            l.forEach(function (m) {
              q(m);
            });
        }
        function $(m, _) {
          if (typeof u > 'u') return;
          let x = typeof u == 'string' ? u : '',
            b = Ht.env();
          Object.keys(b).forEach(function (g) {
            if (x === '' || g.lastIndexOf(x, 0) === 0) {
              let F = g.split('__').map(function (D, M) {
                return M === 0 && (D = D.substring(x.length)), Bi(D);
              });
              ((_ && p.configs[F.join('.')]) || !_) &&
                !Re(m, F) &&
                C(F.join('.'), b[g]);
            }
          });
        }
        function L(m) {
          let _,
            x = new Set();
          Object.keys(m).forEach(function (b) {
            if (!x.has(b) && ((_ = S(b, p.coercions)), typeof _ == 'function'))
              try {
                let g = V(b, _(m[b]));
                [].concat(p.aliases[b] || [], b).forEach((F) => {
                  x.add(F), (m[F] = g);
                });
              } catch (g) {
                O = g;
              }
          });
        }
        function H(m) {
          return (
            p.keys.forEach((_) => {
              ~_.indexOf('.') || (typeof m[_] > 'u' && (m[_] = void 0));
            }),
            m
          );
        }
        function le(m, _, x, b = !1) {
          Object.keys(x).forEach(function (g) {
            Re(m, g.split('.')) ||
              (R(m, g.split('.'), x[g]),
              b && (y[g] = !0),
              (_[g] || []).forEach(function (F) {
                Re(m, F.split('.')) || R(m, F.split('.'), x[g]);
              }));
          });
        }
        function Re(m, _) {
          let x = m;
          a['dot-notation'] || (_ = [_.join('.')]),
            _.slice(0, -1).forEach(function (g) {
              x = x[g] || {};
            });
          let b = _[_.length - 1];
          return typeof x != 'object' ? !1 : b in x;
        }
        function R(m, _, x) {
          let b = m;
          a['dot-notation'] || (_ = [_.join('.')]),
            _.slice(0, -1).forEach(function (pe) {
              (pe = Sb(pe)),
                typeof b == 'object' && b[pe] === void 0 && (b[pe] = {}),
                typeof b[pe] != 'object' || Array.isArray(b[pe])
                  ? (Array.isArray(b[pe])
                      ? b[pe].push({})
                      : (b[pe] = [b[pe], {}]),
                    (b = b[pe][b[pe].length - 1]))
                  : (b = b[pe]);
            });
          let g = Sb(_[_.length - 1]),
            F = S(_.join('.'), p.arrays),
            D = Array.isArray(x),
            M = a['duplicate-arguments-array'];
          !M &&
            S(g, p.nargs) &&
            ((M = !0),
            ((!Pe(b[g]) && p.nargs[g] === 1) ||
              (Array.isArray(b[g]) && b[g].length === p.nargs[g])) &&
              (b[g] = void 0)),
            x === Of()
              ? (b[g] = Of(b[g]))
              : Array.isArray(b[g])
              ? M && F && D
                ? (b[g] = a['flatten-duplicate-arrays']
                    ? b[g].concat(x)
                    : (Array.isArray(b[g][0]) ? b[g] : [b[g]]).concat([x]))
                : !M && !!F == !!D
                ? (b[g] = x)
                : (b[g] = b[g].concat([x]))
              : b[g] === void 0 && F
              ? (b[g] = D ? x : [x])
              : M && !(b[g] === void 0 || S(g, p.counts) || S(g, p.bools))
              ? (b[g] = [b[g], x])
              : (b[g] = x);
        }
        function A(...m) {
          m.forEach(function (_) {
            Object.keys(_ || {}).forEach(function (x) {
              p.aliases[x] ||
                ((p.aliases[x] = [].concat(o[x] || [])),
                p.aliases[x].concat(x).forEach(function (b) {
                  if (/-/.test(b) && a['camel-case-expansion']) {
                    let g = Bi(b);
                    g !== x &&
                      p.aliases[x].indexOf(g) === -1 &&
                      (p.aliases[x].push(g), (d[g] = !0));
                  }
                }),
                p.aliases[x].concat(x).forEach(function (b) {
                  if (
                    b.length > 1 &&
                    /[A-Z]/.test(b) &&
                    a['camel-case-expansion']
                  ) {
                    let g = xb(b, '-');
                    g !== x &&
                      p.aliases[x].indexOf(g) === -1 &&
                      (p.aliases[x].push(g), (d[g] = !0));
                  }
                }),
                p.aliases[x].forEach(function (b) {
                  p.aliases[b] = [x].concat(
                    p.aliases[x].filter(function (g) {
                      return b !== g;
                    })
                  );
                }));
            });
          });
        }
        function S(m, _) {
          let x = [].concat(p.aliases[m] || [], m),
            b = Object.keys(_),
            g = x.find((F) => b.includes(F));
          return g ? _[g] : !1;
        }
        function W(m) {
          let _ = Object.keys(p);
          return [].concat(_.map((b) => p[b])).some(function (b) {
            return Array.isArray(b) ? b.includes(m) : b[m];
          });
        }
        function de(m, ..._) {
          return [].concat(..._).some(function (b) {
            let g = m.match(b);
            return g && W(g[1]);
          });
        }
        function It(m) {
          if (m.match(w) || !m.match(/^-[^-]+/)) return !1;
          let _ = !0,
            x,
            b = m.slice(1).split('');
          for (let g = 0; g < b.length; g++) {
            if (((x = m.slice(g + 2)), !W(b[g]))) {
              _ = !1;
              break;
            }
            if (
              (b[g + 1] && b[g + 1] === '=') ||
              x === '-' ||
              (/[A-Za-z]/.test(b[g]) && /^-?\d+(\.\d*)?(e-?\d+)?$/.test(x)) ||
              (b[g + 1] && b[g + 1].match(/\W/))
            )
              break;
          }
          return _;
        }
        function ct(m) {
          return a['unknown-options-as-args'] && yt(m);
        }
        function yt(m) {
          return (
            (m = m.replace(/^-{3,}/, '--')),
            m.match(w) || It(m)
              ? !1
              : !de(
                  m,
                  /^-+([^=]+?)=[\s\S]*$/,
                  k,
                  /^-+([^=]+?)$/,
                  /^-+([^=]+?)-$/,
                  /^-+([^=]+?\d+)$/,
                  /^-+([^=]+?)\W+.*$/
                )
          );
        }
        function _e(m) {
          return !S(m, p.bools) && !S(m, p.counts) && `${m}` in c
            ? c[m]
            : Kr(_r(m));
        }
        function Kr(m) {
          return {
            [pt.BOOLEAN]: !0,
            [pt.STRING]: '',
            [pt.NUMBER]: void 0,
            [pt.ARRAY]: [],
          }[m];
        }
        function _r(m) {
          let _ = pt.BOOLEAN;
          return (
            S(m, p.strings)
              ? (_ = pt.STRING)
              : S(m, p.numbers)
              ? (_ = pt.NUMBER)
              : S(m, p.bools)
              ? (_ = pt.BOOLEAN)
              : S(m, p.arrays) && (_ = pt.ARRAY),
            _
          );
        }
        function Pe(m) {
          return m === void 0;
        }
        function zt() {
          Object.keys(p.counts).find((m) =>
            S(m, p.arrays)
              ? ((O = Error(
                  v(
                    'Invalid configuration: %s, opts.count excludes opts.array.',
                    m
                  )
                )),
                !0)
              : S(m, p.nargs)
              ? ((O = Error(
                  v(
                    'Invalid configuration: %s, opts.count excludes opts.narg.',
                    m
                  )
                )),
                !0)
              : !1
          );
        }
        return {
          aliases: Object.assign({}, p.aliases),
          argv: Object.assign(I, P),
          configuration: a,
          defaulted: Object.assign({}, y),
          error: O,
          newAliases: Object.assign({}, d),
        };
      }
    };
  function V0(r) {
    let e = [],
      t = Object.create(null),
      n = !0;
    for (
      Object.keys(r).forEach(function (i) {
        e.push([].concat(r[i], i));
      });
      n;

    ) {
      n = !1;
      for (let i = 0; i < e.length; i++)
        for (let s = i + 1; s < e.length; s++)
          if (
            e[i].filter(function (a) {
              return e[s].indexOf(a) !== -1;
            }).length
          ) {
            (e[i] = e[i].concat(e[s])), e.splice(s, 1), (n = !0);
            break;
          }
    }
    return (
      e.forEach(function (i) {
        i = i.filter(function (o, a, c) {
          return c.indexOf(o) === a;
        });
        let s = i.pop();
        s !== void 0 && typeof s == 'string' && (t[s] = i);
      }),
      t
    );
  }
  function Of(r) {
    return r !== void 0 ? r + 1 : 1;
  }
  function Sb(r) {
    return r === '__proto__' ? '___proto___' : r;
  }
  function W0(r) {
    return typeof r == 'string' &&
      (r[0] === "'" || r[0] === '"') &&
      r[r.length - 1] === r[0]
      ? r.substring(1, r.length - 1)
      : r;
  }
  var Tf,
    Cf,
    If,
    wb =
      process && process.env && process.env.YARGS_MIN_NODE_VERSION
        ? Number(process.env.YARGS_MIN_NODE_VERSION)
        : 12,
    Rb =
      (Cf =
        (Tf = process == null ? void 0 : process.versions) === null ||
        Tf === void 0
          ? void 0
          : Tf.node) !== null && Cf !== void 0
        ? Cf
        : (If = process == null ? void 0 : process.version) === null ||
          If === void 0
        ? void 0
        : If.slice(1);
  if (Rb && Number(Rb.match(/^([^.]+)/)[1]) < wb)
    throw Error(
      `yargs parser supports a minimum Node.js version of ${wb}. Read our version support policy: https://github.com/yargs/yargs-parser#supported-nodejs-versions`
    );
  var X0 = process ? process.env : {},
    Tb = new Nf({
      cwd: process.cwd,
      env: () => X0,
      format: $0.format,
      normalize: vb.normalize,
      resolve: vb.resolve,
      require: (r) => {
        if (typeof require < 'u') return require(r);
        if (r.match(/\.json$/)) return JSON.parse(H0.readFileSync(r, 'utf8'));
        throw Error('only .json config files are supported in ESM');
      },
    }),
    ji = function (e, t) {
      return Tb.parse(e.slice(), t).argv;
    };
  ji.detailed = function (r, e) {
    return Tb.parse(r.slice(), e);
  };
  ji.camelCase = Bi;
  ji.decamelize = xb;
  ji.looksLikeNumber = Ob;
  Cb.exports = ji;
});
async function Ib(r) {
  let e = await K0(r);
  return async (t, n, i) => {
    let s = n.map((c) => {
      let l = Y0(c.params, {
          configuration: { 'camel-case-expansion': !1, 'dot-notation': !0 },
        }),
        u = Nu(l);
      return (
        l._.length == 0 && delete l._,
        {
          id: c.taskId,
          target: {
            project: c.projectName,
            target: c.target,
            configuration: c.configuration,
          },
          overrides: { ...l, __overrides_unparsed__: u },
          projectRoot: c.projectRoot,
          cache: c.cache,
        }
      );
    });
    (process.env.NX_CACHE_FAILURES = 'true'),
      (process.env.NX_CLOUD_DISTRIBUTED_EXECUTION_ID = t),
      (process.env.NX_STREAM_OUTPUT = 'true'),
      (process.env.NX_PREFIX_OUTPUT = 'true');
    let o = await e.invoke({ tasks: s, parallel: i });
    return {
      completedTasks: Object.values(o.taskGraph.tasks).map((c) => ({
        taskId: c.id,
        hash: c.hash,
      })),
      completedStatusCode: o.status,
    };
  };
}
var K0,
  Y0,
  Nb = B(() => {
    'use strict';
    vi();
    ({ initTasksRunner: K0 } = dt()), (Y0 = Qo());
  });
async function Db() {
  let r = eN();
  return async function (t, n, i) {
    let s = 0,
      o = [];
    for (let a of Q0(n)) {
      let c = a.configuration ? `--configuration=${a.configuration}` : '',
        l = i > 1 ? ` --parallel --max-parallel=${i}` : '',
        u = `npx nx run-many --target=${
          a.target
        } ${c} --projects=${a.projects.join(',')} ${a.params}${l}`;
      U && J0.note({ title: `Executing: '${u}'` });
      try {
        (0, Ab.execSync)(u, {
          stdio: ['ignore', 'inherit', 'inherit'],
          env: {
            ...process.env,
            NX_CACHE_FAILURES: 'true',
            NX_CLOUD_DISTRIBUTED_EXECUTION_ID: t,
            NX_STREAM_OUTPUT: 'true',
            NX_PREFIX_OUTPUT: 'true',
          },
        }),
          o.push(...r(t));
      } catch (f) {
        if (f.status === Vt) throw f;
        (s = 1), o.push(...r(t));
      }
    }
    return { completedStatusCode: s, completedTasks: o };
  };
}
function Q0(r) {
  let e = [];
  return (
    r.forEach((t) => {
      let n = e.find(
        (i) => i.target === t.target && i.configuration === t.configuration
      );
      n
        ? n.projects.push(t.projectName)
        : e.push({
            target: t.target,
            projects: [t.projectName],
            params: t.params,
            configuration: t.configuration,
          });
    }),
    e
  );
}
function eN() {
  return (r) => {
    let e = `Command execution failed (distributed task execution: ${r}). Tasks hashes haven't been recorded.`,
      t;
    try {
      let n = `${Z0}/tasks-hashes-${r}`;
      (t = JSON.parse((0, ea.readFileSync)(n).toString())),
        (0, ea.unlinkSync)(n);
    } catch {
      throw new Error(e);
    }
    if (t.length == 0) throw new Error(e);
    return t;
  };
}
var Ab,
  ea,
  J0,
  Z0,
  kb = B(() => {
    'use strict';
    (Ab = require('child_process')), (ea = require('fs'));
    ie();
    ({ output: J0 } = Y()), ({ cacheDirectory: Z0 } = dt());
  });
var Df = {};
Nt(Df, { startAgent: () => nN });
async function nN() {
  let r = me(),
    e = ve(),
    t = je(),
    n = xe();
  yr(e, t) || (Er(), process.exit(1)),
    gr.targets && gr.targets.length
      ? Gi.note({
          title: `Starting an agent for running Nx target(s) [${gr.targets.join(
            ', '
          )}]`,
        })
      : Gi.note({ title: 'Starting an agent for running Nx tasks' });
  let { nxJson: i, nxCloudOptions: s } = Ct();
  function o() {
    var v;
    let y = (v = i.tasksRunnerOptions) == null ? void 0 : v.default;
    return i.nxCloudAccessToken && !y
      ? !0
      : (!(y != null && y.runner) && i.nxCloudAccessToken) ||
          (y == null ? void 0 : y.runner) === 'nx-cloud' ||
          (y == null ? void 0 : y.runner) === '@nrwl/nx-cloud';
  }
  if (!o()) return mb(), process.exit(1);
  (await Di(s)) ||
    (Gi.error({
      title: 'Nx Cloud: Workspace is disabled',
      bodyLines: [
        'Distributed Task Execution is disabled when your workspace is disabled',
        '',
        "Organization administrators can find more information on the 'Billing and Plans' page in the Nx Cloud Webapp",
      ],
    }),
    process.exit(1));
  let c = iN(),
    l = new Zo(s, r, e, t, n, c);
  sN(l, s, c);
  let u = new Yt(Rr || s.encryptionKey),
    f = new Kt(s),
    h = new jn(new ur(u, f, s, 'dte-agent'), Lb),
    d = rN ? await Ib(s) : await Db();
  return _b(c, l, h, d, gr.targets)
    .then(async (y) => (await rn(s), y))
    .catch(async (y) => {
      throw (
        (await l.completeRunGroupWithError(
          `Critical Error in Agent: "${y.message}"`
        ),
        y)
      );
    });
}
function iN() {
  return process.env.NX_AGENT_NAME !== void 0
    ? process.env.NX_AGENT_NAME
    : process.env.CIRCLECI !== void 0 && process.env.CIRCLE_STAGE
    ? process.env.CIRCLE_STAGE
    : process.env.CIRCLECI !== void 0 && process.env.CIRCLE_JOB
    ? process.env.CIRCLE_JOB
    : `Agent ${Math.floor(Math.random() * 1e5)}`;
}
function sN(r, e, t) {
  let n = `${Lb}/lockfiles`,
    i = `${n}/${t}.lock`;
  (0, mt.existsSync)(n) || (0, mt.mkdirSync)(n, { recursive: !0 });
  let s = (0, mt.readdirSync)(n);
  s.length &&
    (s.includes(`${t}.lock`) &&
      (Gi.error({
        title: 'Duplicate Agent ID Detected',
        bodyLines: [
          'We have detected another agent with this ID running in this workspace. This should not happen.',
          '',
          'End all currently running agents, run "npx nx-cloud clean-up-agents", and try again.',
        ],
      }),
      process.exit(1)),
    Gi.warn({
      title: 'Other Nx Cloud Agents Detected',
      bodyLines: [
        'We have detected other agents running in this workspace. This can cause unexpected behavior.',
        '',
        'This can also be a false positive caused by agents that did not shut down correctly.',
        'If you believe this is the case, run "npx nx-cloud clean-up-agents".',
      ],
    })),
    (0, mt.writeFileSync)(i, ''),
    process.on('exit', (o) => {
      Af(i, o);
    }),
    process.on('SIGTERM', async () => {
      await r.completeRunGroupWithError('Agent was terminated via SIGTERM'),
        Af(i, 1);
    }),
    process.on('SIGINT', async () => {
      await r.completeRunGroupWithError('Agent was terminated via SIGINT'),
        Af(i, 1);
    });
}
function Af(r, e) {
  (0, mt.existsSync)(r) && ((0, mt.unlinkSync)(r), process.exit(e));
}
var mt,
  tN,
  aP,
  Gi,
  cP,
  rN,
  Lb,
  gr,
  kf = B(() => {
    'use strict';
    mt = require('fs');
    lf();
    ie();
    $n();
    Bl();
    Dt();
    ds();
    yb();
    Ui();
    ps();
    yo();
    gb();
    bb();
    Nb();
    kb();
    (tN = Qo()),
      (aP = Jo()),
      ({ output: Gi, workspaceRoot: cP } = Y()),
      ({ initTasksRunner: rN, cacheDirectory: Lb } = dt()),
      (gr = tN(process.argv, { array: ['targets'], default: {} }));
    gr.targets &&
      gr.targets.length === 1 &&
      (gr.targets = gr.targets[0].split(',').map((r) => r.trim()));
  });
var Lf,
  Hn,
  Pf = B(() => {
    'use strict';
    gt();
    So();
    Dt();
    ({ output: Lf } = Y()),
      (Hn = class {
        constructor(e) {
          this.apiAxiosInstance = Te(e);
        }
        async createRunGroup(e, t, n, i, s, o, a, c, l, u) {
          var h;
          let f = Ce('createRunGroup');
          try {
            let d = await ce(() =>
              this.apiAxiosInstance.post(
                '/nx-cloud/executions/create-run-group',
                {
                  branch: e,
                  runGroup: t,
                  ciExecutionId: n,
                  ciExecutionEnv: i,
                  stopAgentsOnFailure: s,
                  agentCount: o,
                  stopAgentsAfter: a,
                  commitSha: l,
                  distributesOn: c,
                  vcsContext: fr(),
                }
              )
            );
            f.recordMetric(re(d));
          } catch (d) {
            f.recordMetric(
              (h = d == null ? void 0 : d.axiosException) != null && h.response
                ? re(d.axiosException.response)
                : Ie
            ),
              Lf.error({ title: d.message }),
              process.exit(1);
          }
        }
        async completeRunGroup(e, t, n, i) {
          var o;
          let s = Ce('completeRunGroup');
          try {
            let a = await ce(() =>
              this.apiAxiosInstance.post(
                '/nx-cloud/executions/complete-run-group',
                {
                  branch: e,
                  runGroup: t,
                  ciExecutionId: n,
                  ciExecutionEnv: i,
                  vcsContext: fr(),
                }
              )
            );
            s.recordMetric(re(a));
          } catch (a) {
            s.recordMetric(
              (o = a == null ? void 0 : a.axiosException) != null && o.response
                ? re(a.axiosException.response)
                : Ie
            ),
              Lf.error({ title: a.message }),
              process.exit(1);
          }
        }
        async sendHeartbeat(e, t) {
          try {
            await this.apiAxiosInstance.post('/nx-cloud/heartbeat', {
              ciExecutionId: e,
              runGroup: t,
            });
          } catch (n) {
            Lf.error({
              title: n.message,
              bodyLines: JSON.stringify(n, null, 2).split(`
`),
            }),
              process.exit(1);
          }
        }
      });
  });
var Ff = {};
Nt(Ff, { startCiRun: () => aN });
async function aN() {
  let r = me(),
    e = ve(),
    t = je(),
    n = xe(),
    i = et(),
    s = Vi();
  yr(e, t) || (Er(), process.exit(1)),
    U &&
      Pb.note({
        title: `Creating run group. branch: ${r}, ciExecutionId: ${t}, ciExecutionEnv: ${n}, runGroup: ${e}, commitSha: ${i}`,
      }),
    zn.commandCount &&
      (Pb.error({
        title:
          '--command-count is deprecated. Use --stop-agents-after instead.',
        bodyLines: [
          'E.g., npx nx-cloud start-ci-run --stop-agents-after="e2e"',
        ],
      }),
      process.exit(1));
  let { nxCloudOptions: o } = Ct();
  await new Hn(o).createRunGroup(
    r,
    e,
    t,
    n,
    zn.stopAgentsOnFailure,
    zn.agentCount,
    zn.stopAgentsAfter,
    zn.distributesOn,
    i,
    s
  ),
    Ko(),
    zn.useDteByDefault && x_();
}
var oN,
  Pb,
  _P,
  zn,
  Uf = B(() => {
    'use strict';
    Ul();
    ql();
    ie();
    $n();
    Pf();
    Ui();
    (oN = Qo()),
      ({ output: Pb, workspaceRoot: _P } = Y()),
      (zn = oN(process.argv, {
        boolean: ['stop-agents-on-failure', 'use-dte-by-default'],
        number: ['agent-count', 'command-count'],
        string: ['stop-agents-after'],
        default: { useDteByDefault: !0 },
      }));
  });
var ta = {};
Nt(ta, { stopAllAgents: () => uN });
async function uN() {
  let r = me(),
    e = ve(),
    t = je(),
    n = xe();
  yr(e, t) || (Er(), process.exit(1)),
    U &&
      cN.note({
        title: `Stopping all agents running tasks for run group. branch: ${r}, ciExecutionId: ${t}, ciExecutionEnv: ${n}, runGroup: ${e}`,
      });
  let { nxCloudOptions: i } = Ct();
  await new Hn(i).completeRunGroup(r, e, t, n);
}
var cN,
  ra = B(() => {
    'use strict';
    ie();
    $n();
    Pf();
    Ui();
    ({ output: cN } = Y());
  });
var qf = E((RP, Ub) => {
  'use strict';
  var Fb = require('fs'),
    Mf;
  function lN() {
    try {
      return Fb.statSync('/.dockerenv'), !0;
    } catch {
      return !1;
    }
  }
  function fN() {
    try {
      return Fb.readFileSync('/proc/self/cgroup', 'utf8').includes('docker');
    } catch {
      return !1;
    }
  }
  Ub.exports = () => (Mf === void 0 && (Mf = lN() || fN()), Mf);
});
var Bb = E((xP, Bf) => {
  'use strict';
  var hN = require('os'),
    dN = require('fs'),
    Mb = qf(),
    qb = () => {
      if (process.platform !== 'linux') return !1;
      if (hN.release().toLowerCase().includes('microsoft')) return !Mb();
      try {
        return dN
          .readFileSync('/proc/version', 'utf8')
          .toLowerCase()
          .includes('microsoft')
          ? !Mb()
          : !1;
      } catch {
        return !1;
      }
    };
  process.env.__IS_WSL_TEST__ ? (Bf.exports = qb) : (Bf.exports = qb());
});
var Gb = E((OP, jb) => {
  'use strict';
  jb.exports = (r, e, t) => {
    let n = (i) =>
      Object.defineProperty(r, e, { value: i, enumerable: !0, writable: !0 });
    return (
      Object.defineProperty(r, e, {
        configurable: !0,
        enumerable: !0,
        get() {
          let i = t();
          return n(i), i;
        },
        set(i) {
          n(i);
        },
      }),
      r
    );
  };
});
var Kb = E((TP, Xb) => {
  'use strict';
  var pN = require('path'),
    mN = require('child_process'),
    { promises: ia, constants: Wb } = require('fs'),
    na = Bb(),
    yN = qf(),
    Gf = Gb(),
    $b = pN.join(__dirname, 'xdg-open'),
    { platform: Vn, arch: Hb } = process,
    EN = () => {
      try {
        return ia.statSync('/run/.containerenv'), !0;
      } catch {
        return !1;
      }
    },
    jf;
  function gN() {
    return jf === void 0 && (jf = EN() || yN()), jf;
  }
  var _N = (() => {
      let r = '/mnt/',
        e;
      return async function () {
        if (e) return e;
        let t = '/etc/wsl.conf',
          n = !1;
        try {
          await ia.access(t, Wb.F_OK), (n = !0);
        } catch {}
        if (!n) return r;
        let i = await ia.readFile(t, { encoding: 'utf8' }),
          s = /(?<!#.*)root\s*=\s*(?<mountPoint>.*)/g.exec(i);
        return s
          ? ((e = s.groups.mountPoint.trim()),
            (e = e.endsWith('/') ? e : `${e}/`),
            e)
          : r;
      };
    })(),
    zb = async (r, e) => {
      let t;
      for (let n of r)
        try {
          return await e(n);
        } catch (i) {
          t = i;
        }
      throw t;
    },
    sa = async (r) => {
      if (
        ((r = {
          wait: !1,
          background: !1,
          newInstance: !1,
          allowNonzeroExitCode: !1,
          ...r,
        }),
        Array.isArray(r.app))
      )
        return zb(r.app, (a) => sa({ ...r, app: a }));
      let { name: e, arguments: t = [] } = r.app || {};
      if (((t = [...t]), Array.isArray(e)))
        return zb(e, (a) => sa({ ...r, app: { name: a, arguments: t } }));
      let n,
        i = [],
        s = {};
      if (Vn === 'darwin')
        (n = 'open'),
          r.wait && i.push('--wait-apps'),
          r.background && i.push('--background'),
          r.newInstance && i.push('--new'),
          e && i.push('-a', e);
      else if (Vn === 'win32' || (na && !gN() && !e)) {
        let a = await _N();
        (n = na
          ? `${a}c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe`
          : `${process.env.SYSTEMROOT}\\System32\\WindowsPowerShell\\v1.0\\powershell`),
          i.push(
            '-NoProfile',
            '-NonInteractive',
            '\u2013ExecutionPolicy',
            'Bypass',
            '-EncodedCommand'
          ),
          na || (s.windowsVerbatimArguments = !0);
        let c = ['Start'];
        r.wait && c.push('-Wait'),
          e
            ? (c.push(`"\`"${e}\`""`, '-ArgumentList'),
              r.target && t.unshift(r.target))
            : r.target && c.push(`"${r.target}"`),
          t.length > 0 &&
            ((t = t.map((l) => `"\`"${l}\`""`)), c.push(t.join(','))),
          (r.target = Buffer.from(c.join(' '), 'utf16le').toString('base64'));
      } else {
        if (e) n = e;
        else {
          let a = !__dirname || __dirname === '/',
            c = !1;
          try {
            await ia.access($b, Wb.X_OK), (c = !0);
          } catch {}
          n =
            process.versions.electron || Vn === 'android' || a || !c
              ? 'xdg-open'
              : $b;
        }
        t.length > 0 && i.push(...t),
          r.wait || ((s.stdio = 'ignore'), (s.detached = !0));
      }
      r.target && i.push(r.target),
        Vn === 'darwin' && t.length > 0 && i.push('--args', ...t);
      let o = mN.spawn(n, i, s);
      return r.wait
        ? new Promise((a, c) => {
            o.once('error', c),
              o.once('close', (l) => {
                if (!r.allowNonzeroExitCode && l > 0) {
                  c(new Error(`Exited with code ${l}`));
                  return;
                }
                a(o);
              });
          })
        : (o.unref(), o);
    },
    $f = (r, e) => {
      if (typeof r != 'string') throw new TypeError('Expected a `target`');
      return sa({ ...e, target: r });
    },
    bN = (r, e) => {
      if (typeof r != 'string') throw new TypeError('Expected a `name`');
      let { arguments: t = [] } = e || {};
      if (t != null && !Array.isArray(t))
        throw new TypeError('Expected `appArguments` as Array type');
      return sa({ ...e, app: { name: r, arguments: t } });
    };
  function Vb(r) {
    if (typeof r == 'string' || Array.isArray(r)) return r;
    let { [Hb]: e } = r;
    if (!e) throw new Error(`${Hb} is not supported`);
    return e;
  }
  function Hf({ [Vn]: r }, { wsl: e }) {
    if (e && na) return Vb(e);
    if (!r) throw new Error(`${Vn} is not supported`);
    return Vb(r);
  }
  var oa = {};
  Gf(oa, 'chrome', () =>
    Hf(
      {
        darwin: 'google chrome',
        win32: 'chrome',
        linux: ['google-chrome', 'google-chrome-stable', 'chromium'],
      },
      {
        wsl: {
          ia32: '/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe',
          x64: [
            '/mnt/c/Program Files/Google/Chrome/Application/chrome.exe',
            '/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe',
          ],
        },
      }
    )
  );
  Gf(oa, 'firefox', () =>
    Hf(
      {
        darwin: 'firefox',
        win32: 'C:\\Program Files\\Mozilla Firefox\\firefox.exe',
        linux: 'firefox',
      },
      { wsl: '/mnt/c/Program Files/Mozilla Firefox/firefox.exe' }
    )
  );
  Gf(oa, 'edge', () =>
    Hf(
      {
        darwin: 'microsoft edge',
        win32: 'msedge',
        linux: ['microsoft-edge', 'microsoft-edge-dev'],
      },
      {
        wsl: '/mnt/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
      }
    )
  );
  $f.apps = oa;
  $f.openApp = bN;
  Xb.exports = $f;
});
function Yb() {
  let { output: r } = Y();
  r.error({
    title: 'Connections to Nx Cloud are disabled for this workspace',
    bodyLines: [
      'This was an intentional decision by someone on your team.',
      'Nx Cloud cannot and will not be enabled.',
      '',
      "To allow connections to Nx Cloud again, remove the 'neverConnectToCloud'",
      'property in nx.json.',
    ],
  });
}
var Jb = B(() => {
  'use strict';
});
var zf = {};
Nt(zf, { uploadAndShowRunDetails: () => wN });
async function SN(r) {
  let e = new In(r),
    t = {},
    n = Yr(),
    i = new An(e, t, r, n),
    s = new lr(r.maskedProperties),
    o = JSON.parse(
      (0, Qb.readFileSync)((0, tv.join)(Zb, 'run.json')).toString()
    ),
    a = o.tasks.map((l) => ({
      ...l,
      terminalOutput: _o(Zb, s, l.hash, l.cacheStatus, l.status),
    })),
    c = Ro();
  return (
    await i.endRun(
      o.run,
      a,
      {
        branch: null,
        runGroup: null,
        ciExecutionId: null,
        ciExecutionEnv: null,
      },
      c
    ),
    `${hs(r.url || 'https://nx.app')}/runs/${c}`
  );
}
async function wN() {
  let { nxJson: r, nxCloudOptions: e } = Ct();
  r.neverConnectToCloud && (Yb(), process.exit(1));
  let t = await SN(e);
  vN.success({
    title: 'Successfully uploaded the run details',
    bodyLines: [`View run details at ${t}`],
  }),
    (0, ev.default)(t);
}
var Qb,
  ev,
  tv,
  vN,
  Zb,
  Vf = B(() => {
    'use strict';
    (Qb = require('fs')), (ev = br(Kb())), (tv = require('path'));
    ie();
    $n();
    Jb();
    Ka();
    Mu();
    qu();
    Iu();
    go();
    Lu();
    ({ output: vN } = Y()), ({ cacheDirectory: Zb } = dt());
  });
exports.nxCloudTasksRunner = (...r) => (ab(), be(ob)).default(...r);
exports.configureLightClientRequire = () =>
  (Sr(), be(th)).configureLightClientRequire;
var RN = {
  'clean-up-agents': () => (wf(), be(Sf)).cleanUpAgents(),
  record: () => (xf(), be(Rf)).runCommandAndStoreInCloud(),
  'start-agent': () => (kf(), be(Df)).startAgent(),
  'start-ci-run': () => (Uf(), be(Ff)).startCiRun(),
  'stop-all-agents': () => (ra(), be(ta)).stopAllAgents(),
  'complete-run-group': () => (ra(), be(ta)).stopAllAgents(),
  'upload-and-show-run-details': () => (Vf(), be(zf)).uploadAndShowRunDetails(),
};
exports.commands = RN;
exports.cleanUpAgents = () => (wf(), be(Sf)).cleanUpAgents();
exports.runCommandAndStoreInCloud = () =>
  (xf(), be(Rf)).runCommandAndStoreInCloud();
exports.startAgent = () => (kf(), be(Df)).startAgent();
exports.startCiRun = () => (Uf(), be(Ff)).startCiRun();
exports.stopAllAgents = () => (ra(), be(ta)).stopAllAgents();
exports.uploadAndShowRunDetails = () =>
  (Vf(), be(zf)).uploadAndShowRunDetails();
