'use strict';
var ot = Object.defineProperty;
var _o = Object.getOwnPropertyDescriptor;
var Co = Object.getOwnPropertyNames;
var Eo = Object.prototype.hasOwnProperty;
var te = (e, t) => () => (e && (t = e((e = 0))), t);
var x = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
  Be = (e, t) => {
    for (var r in t) ot(e, r, { get: t[r], enumerable: !0 });
  },
  yo = (e, t, r, o) => {
    if ((t && typeof t == 'object') || typeof t == 'function')
      for (let n of Co(t))
        !Eo.call(e, n) &&
          n !== r &&
          ot(e, n, {
            get: () => t[n],
            enumerable: !(o = _o(t, n)) || o.enumerable,
          });
    return e;
  };
var Fe = (e) => yo(ot({}, '__esModule', { value: !0 }), e);
function rr() {
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
var nr = te(() => {
  'use strict';
});
var ar = x((Ji, st) => {
  'use strict';
  var Ro = require('fs'),
    or = require('path'),
    go = require('os');
  function sr(e) {
    console.log(`[dotenv][DEBUG] ${e}`);
  }
  var xo = `
`,
    Io = /^\s*([\w.-]+)\s*=\s*(.*)?\s*$/,
    To = /\\n/g,
    Oo = /\r\n|\n|\r/;
  function ir(e, t) {
    let r = !!(t && t.debug),
      o = {};
    return (
      e
        .toString()
        .split(Oo)
        .forEach(function (n, s) {
          let i = n.match(Io);
          if (i != null) {
            let u = i[1],
              a = i[2] || '',
              f = a.length - 1,
              c = a[0] === '"' && a[f] === '"';
            (a[0] === "'" && a[f] === "'") || c
              ? ((a = a.substring(1, f)), c && (a = a.replace(To, xo)))
              : (a = a.trim()),
              (o[u] = a);
          } else r && sr(`did not match key and value when parsing line ${s + 1}: ${n}`);
        }),
      o
    );
  }
  function wo(e) {
    return e[0] === '~' ? or.join(go.homedir(), e.slice(1)) : e;
  }
  function bo(e) {
    let t = or.resolve(process.cwd(), '.env'),
      r = 'utf8',
      o = !1;
    e &&
      (e.path != null && (t = wo(e.path)),
      e.encoding != null && (r = e.encoding),
      e.debug != null && (o = !0));
    try {
      let n = ir(Ro.readFileSync(t, { encoding: r }), { debug: o });
      return (
        Object.keys(n).forEach(function (s) {
          Object.prototype.hasOwnProperty.call(process.env, s)
            ? o &&
              sr(
                `"${s}" is already defined in \`process.env\` and will not be overwritten`
              )
            : (process.env[s] = n[s]);
        }),
        { parsed: n }
      );
    } catch (n) {
      return { error: n };
    }
  }
  st.exports.config = bo;
  st.exports.parse = ir;
});
var ur = x((ge, it) => {
  'use strict';
  (function (e, t) {
    typeof ge == 'object' && typeof it == 'object'
      ? (it.exports = t(require('child_process'), require('crypto')))
      : typeof define == 'function' && define.amd
      ? define(['child_process', 'crypto'], t)
      : typeof ge == 'object'
      ? (ge['electron-machine-id'] = t(
          require('child_process'),
          require('crypto')
        ))
      : (e['electron-machine-id'] = t(e.child_process, e.crypto));
  })(ge, function (e, t) {
    return (function (r) {
      function o(s) {
        if (n[s]) return n[s].exports;
        var i = (n[s] = { exports: {}, id: s, loaded: !1 });
        return (
          r[s].call(i.exports, i, i.exports, o), (i.loaded = !0), i.exports
        );
      }
      var n = {};
      return (o.m = r), (o.c = n), (o.p = ''), o(0);
    })([
      function (r, o, n) {
        r.exports = n(34);
      },
      function (r, o, n) {
        var s = n(29)('wks'),
          i = n(33),
          u = n(2).Symbol,
          a = typeof u == 'function',
          f = (r.exports = function (c) {
            return s[c] || (s[c] = (a && u[c]) || (a ? u : i)('Symbol.' + c));
          });
        f.store = s;
      },
      function (r, o) {
        var n = (r.exports =
          typeof window < 'u' && window.Math == Math
            ? window
            : typeof self < 'u' && self.Math == Math
            ? self
            : Function('return this')());
        typeof __g == 'number' && (__g = n);
      },
      function (r, o, n) {
        var s = n(9);
        r.exports = function (i) {
          if (!s(i)) throw TypeError(i + ' is not an object!');
          return i;
        };
      },
      function (r, o, n) {
        r.exports = !n(24)(function () {
          return (
            Object.defineProperty({}, 'a', {
              get: function () {
                return 7;
              },
            }).a != 7
          );
        });
      },
      function (r, o, n) {
        var s = n(12),
          i = n(17);
        r.exports = n(4)
          ? function (u, a, f) {
              return s.f(u, a, i(1, f));
            }
          : function (u, a, f) {
              return (u[a] = f), u;
            };
      },
      function (r, o) {
        var n = (r.exports = { version: '2.4.0' });
        typeof __e == 'number' && (__e = n);
      },
      function (r, o, n) {
        var s = n(14);
        r.exports = function (i, u, a) {
          if ((s(i), u === void 0)) return i;
          switch (a) {
            case 1:
              return function (f) {
                return i.call(u, f);
              };
            case 2:
              return function (f, c) {
                return i.call(u, f, c);
              };
            case 3:
              return function (f, c, l) {
                return i.call(u, f, c, l);
              };
          }
          return function () {
            return i.apply(u, arguments);
          };
        };
      },
      function (r, o) {
        var n = {}.hasOwnProperty;
        r.exports = function (s, i) {
          return n.call(s, i);
        };
      },
      function (r, o) {
        r.exports = function (n) {
          return typeof n == 'object' ? n !== null : typeof n == 'function';
        };
      },
      function (r, o) {
        r.exports = {};
      },
      function (r, o) {
        var n = {}.toString;
        r.exports = function (s) {
          return n.call(s).slice(8, -1);
        };
      },
      function (r, o, n) {
        var s = n(3),
          i = n(26),
          u = n(32),
          a = Object.defineProperty;
        o.f = n(4)
          ? Object.defineProperty
          : function (f, c, l) {
              if ((s(f), (c = u(c, !0)), s(l), i))
                try {
                  return a(f, c, l);
                } catch {}
              if ('get' in l || 'set' in l)
                throw TypeError('Accessors not supported!');
              return 'value' in l && (f[c] = l.value), f;
            };
      },
      function (r, o, n) {
        var s = n(42),
          i = n(15);
        r.exports = function (u) {
          return s(i(u));
        };
      },
      function (r, o) {
        r.exports = function (n) {
          if (typeof n != 'function')
            throw TypeError(n + ' is not a function!');
          return n;
        };
      },
      function (r, o) {
        r.exports = function (n) {
          if (n == null) throw TypeError("Can't call method on  " + n);
          return n;
        };
      },
      function (r, o, n) {
        var s = n(9),
          i = n(2).document,
          u = s(i) && s(i.createElement);
        r.exports = function (a) {
          return u ? i.createElement(a) : {};
        };
      },
      function (r, o) {
        r.exports = function (n, s) {
          return {
            enumerable: !(1 & n),
            configurable: !(2 & n),
            writable: !(4 & n),
            value: s,
          };
        };
      },
      function (r, o, n) {
        var s = n(12).f,
          i = n(8),
          u = n(1)('toStringTag');
        r.exports = function (a, f, c) {
          a &&
            !i((a = c ? a : a.prototype), u) &&
            s(a, u, { configurable: !0, value: f });
        };
      },
      function (r, o, n) {
        var s = n(29)('keys'),
          i = n(33);
        r.exports = function (u) {
          return s[u] || (s[u] = i(u));
        };
      },
      function (r, o) {
        var n = Math.ceil,
          s = Math.floor;
        r.exports = function (i) {
          return isNaN((i = +i)) ? 0 : (i > 0 ? s : n)(i);
        };
      },
      function (r, o, n) {
        var s = n(11),
          i = n(1)('toStringTag'),
          u =
            s(
              (function () {
                return arguments;
              })()
            ) == 'Arguments',
          a = function (f, c) {
            try {
              return f[c];
            } catch {}
          };
        r.exports = function (f) {
          var c, l, p;
          return f === void 0
            ? 'Undefined'
            : f === null
            ? 'Null'
            : typeof (l = a((c = Object(f)), i)) == 'string'
            ? l
            : u
            ? s(c)
            : (p = s(c)) == 'Object' && typeof c.callee == 'function'
            ? 'Arguments'
            : p;
        };
      },
      function (r, o) {
        r.exports =
          'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
            ','
          );
      },
      function (r, o, n) {
        var s = n(2),
          i = n(6),
          u = n(7),
          a = n(5),
          f = 'prototype',
          c = function (l, p, d) {
            var h,
              C,
              y,
              U = l & c.F,
              T = l & c.G,
              I = l & c.S,
              R = l & c.P,
              b = l & c.B,
              _ = l & c.W,
              S = T ? i : i[p] || (i[p] = {}),
              w = S[f],
              N = T ? s : I ? s[p] : (s[p] || {})[f];
            T && (d = p);
            for (h in d)
              (C = !U && N && N[h] !== void 0),
                (C && h in S) ||
                  ((y = C ? N[h] : d[h]),
                  (S[h] =
                    T && typeof N[h] != 'function'
                      ? d[h]
                      : b && C
                      ? u(y, s)
                      : _ && N[h] == y
                      ? (function (L) {
                          var K = function (j, B, z) {
                            if (this instanceof L) {
                              switch (arguments.length) {
                                case 0:
                                  return new L();
                                case 1:
                                  return new L(j);
                                case 2:
                                  return new L(j, B);
                              }
                              return new L(j, B, z);
                            }
                            return L.apply(this, arguments);
                          };
                          return (K[f] = L[f]), K;
                        })(y)
                      : R && typeof y == 'function'
                      ? u(Function.call, y)
                      : y),
                  R &&
                    (((S.virtual || (S.virtual = {}))[h] = y),
                    l & c.R && w && !w[h] && a(w, h, y)));
          };
        (c.F = 1),
          (c.G = 2),
          (c.S = 4),
          (c.P = 8),
          (c.B = 16),
          (c.W = 32),
          (c.U = 64),
          (c.R = 128),
          (r.exports = c);
      },
      function (r, o) {
        r.exports = function (n) {
          try {
            return !!n();
          } catch {
            return !0;
          }
        };
      },
      function (r, o, n) {
        r.exports = n(2).document && document.documentElement;
      },
      function (r, o, n) {
        r.exports =
          !n(4) &&
          !n(24)(function () {
            return (
              Object.defineProperty(n(16)('div'), 'a', {
                get: function () {
                  return 7;
                },
              }).a != 7
            );
          });
      },
      function (r, o, n) {
        'use strict';
        var s = n(28),
          i = n(23),
          u = n(57),
          a = n(5),
          f = n(8),
          c = n(10),
          l = n(45),
          p = n(18),
          d = n(52),
          h = n(1)('iterator'),
          C = !([].keys && 'next' in [].keys()),
          y = '@@iterator',
          U = 'keys',
          T = 'values',
          I = function () {
            return this;
          };
        r.exports = function (R, b, _, S, w, N, L) {
          l(_, b, S);
          var K,
            j,
            B,
            z = function (v) {
              if (!C && v in g) return g[v];
              switch (v) {
                case U:
                  return function () {
                    return new _(this, v);
                  };
                case T:
                  return function () {
                    return new _(this, v);
                  };
              }
              return function () {
                return new _(this, v);
              };
            },
            A = b + ' Iterator',
            Y = w == T,
            V = !1,
            g = R.prototype,
            P = g[h] || g[y] || (w && g[w]),
            F = P || z(w),
            Z = w ? (Y ? z('entries') : F) : void 0,
            m = (b == 'Array' && g.entries) || P;
          if (
            (m &&
              ((B = d(m.call(new R()))),
              B !== Object.prototype &&
                (p(B, A, !0), s || f(B, h) || a(B, h, I))),
            Y &&
              P &&
              P.name !== T &&
              ((V = !0),
              (F = function () {
                return P.call(this);
              })),
            (s && !L) || (!C && !V && g[h]) || a(g, h, F),
            (c[b] = F),
            (c[A] = I),
            w)
          )
            if (
              ((K = { values: Y ? F : z(T), keys: N ? F : z(U), entries: Z }),
              L)
            )
              for (j in K) j in g || u(g, j, K[j]);
            else i(i.P + i.F * (C || V), b, K);
          return K;
        };
      },
      function (r, o) {
        r.exports = !0;
      },
      function (r, o, n) {
        var s = n(2),
          i = '__core-js_shared__',
          u = s[i] || (s[i] = {});
        r.exports = function (a) {
          return u[a] || (u[a] = {});
        };
      },
      function (r, o, n) {
        var s,
          i,
          u,
          a = n(7),
          f = n(41),
          c = n(25),
          l = n(16),
          p = n(2),
          d = p.process,
          h = p.setImmediate,
          C = p.clearImmediate,
          y = p.MessageChannel,
          U = 0,
          T = {},
          I = 'onreadystatechange',
          R = function () {
            var _ = +this;
            if (T.hasOwnProperty(_)) {
              var S = T[_];
              delete T[_], S();
            }
          },
          b = function (_) {
            R.call(_.data);
          };
        (h && C) ||
          ((h = function (_) {
            for (var S = [], w = 1; arguments.length > w; )
              S.push(arguments[w++]);
            return (
              (T[++U] = function () {
                f(typeof _ == 'function' ? _ : Function(_), S);
              }),
              s(U),
              U
            );
          }),
          (C = function (_) {
            delete T[_];
          }),
          n(11)(d) == 'process'
            ? (s = function (_) {
                d.nextTick(a(R, _, 1));
              })
            : y
            ? ((i = new y()),
              (u = i.port2),
              (i.port1.onmessage = b),
              (s = a(u.postMessage, u, 1)))
            : p.addEventListener &&
              typeof postMessage == 'function' &&
              !p.importScripts
            ? ((s = function (_) {
                p.postMessage(_ + '', '*');
              }),
              p.addEventListener('message', b, !1))
            : (s =
                I in l('script')
                  ? function (_) {
                      c.appendChild(l('script'))[I] = function () {
                        c.removeChild(this), R.call(_);
                      };
                    }
                  : function (_) {
                      setTimeout(a(R, _, 1), 0);
                    })),
          (r.exports = { set: h, clear: C });
      },
      function (r, o, n) {
        var s = n(20),
          i = Math.min;
        r.exports = function (u) {
          return u > 0 ? i(s(u), 9007199254740991) : 0;
        };
      },
      function (r, o, n) {
        var s = n(9);
        r.exports = function (i, u) {
          if (!s(i)) return i;
          var a, f;
          if (
            (u &&
              typeof (a = i.toString) == 'function' &&
              !s((f = a.call(i)))) ||
            (typeof (a = i.valueOf) == 'function' && !s((f = a.call(i)))) ||
            (!u && typeof (a = i.toString) == 'function' && !s((f = a.call(i))))
          )
            return f;
          throw TypeError("Can't convert object to primitive value");
        };
      },
      function (r, o) {
        var n = 0,
          s = Math.random();
        r.exports = function (i) {
          return 'Symbol('.concat(
            i === void 0 ? '' : i,
            ')_',
            (++n + s).toString(36)
          );
        };
      },
      function (r, o, n) {
        'use strict';
        function s(I) {
          return I && I.__esModule ? I : { default: I };
        }
        function i() {
          return process.platform !== 'win32'
            ? ''
            : process.arch === 'ia32' &&
              process.env.hasOwnProperty('PROCESSOR_ARCHITEW6432')
            ? 'mixed'
            : 'native';
        }
        function u(I) {
          return (0, h.createHash)('sha256').update(I).digest('hex');
        }
        function a(I) {
          switch (y) {
            case 'darwin':
              return I.split('IOPlatformUUID')[1]
                .split(
                  `
`
                )[0]
                .replace(/\=|\s+|\"/gi, '')
                .toLowerCase();
            case 'win32':
              return I.toString()
                .split('REG_SZ')[1]
                .replace(/\r+|\n+|\s+/gi, '')
                .toLowerCase();
            case 'linux':
              return I.toString()
                .replace(/\r+|\n+|\s+/gi, '')
                .toLowerCase();
            case 'freebsd':
              return I.toString()
                .replace(/\r+|\n+|\s+/gi, '')
                .toLowerCase();
            default:
              throw new Error('Unsupported platform: ' + process.platform);
          }
        }
        function f(I) {
          var R = a((0, d.execSync)(T[y]).toString());
          return I ? R : u(R);
        }
        function c(I) {
          return new p.default(function (R, b) {
            return (0, d.exec)(T[y], {}, function (_, S, w) {
              if (_)
                return b(
                  new Error('Error while obtaining machine id: ' + _.stack)
                );
              var N = a(S.toString());
              return R(I ? N : u(N));
            });
          });
        }
        Object.defineProperty(o, '__esModule', { value: !0 });
        var l = n(35),
          p = s(l);
        (o.machineIdSync = f), (o.machineId = c);
        var d = n(70),
          h = n(71),
          C = process,
          y = C.platform,
          U = {
            native: '%windir%\\System32',
            mixed: '%windir%\\sysnative\\cmd.exe /c %windir%\\System32',
          },
          T = {
            darwin: 'ioreg -rd1 -c IOPlatformExpertDevice',
            win32:
              U[i()] +
              '\\REG.exe QUERY HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Cryptography /v MachineGuid',
            linux:
              '( cat /var/lib/dbus/machine-id /etc/machine-id 2> /dev/null || hostname ) | head -n 1 || :',
            freebsd: 'kenv -q smbios.system.uuid || sysctl -n kern.hostuuid',
          };
      },
      function (r, o, n) {
        r.exports = { default: n(36), __esModule: !0 };
      },
      function (r, o, n) {
        n(66), n(68), n(69), n(67), (r.exports = n(6).Promise);
      },
      function (r, o) {
        r.exports = function () {};
      },
      function (r, o) {
        r.exports = function (n, s, i, u) {
          if (!(n instanceof s) || (u !== void 0 && u in n))
            throw TypeError(i + ': incorrect invocation!');
          return n;
        };
      },
      function (r, o, n) {
        var s = n(13),
          i = n(31),
          u = n(62);
        r.exports = function (a) {
          return function (f, c, l) {
            var p,
              d = s(f),
              h = i(d.length),
              C = u(l, h);
            if (a && c != c) {
              for (; h > C; ) if (((p = d[C++]), p != p)) return !0;
            } else
              for (; h > C; C++)
                if ((a || C in d) && d[C] === c) return a || C || 0;
            return !a && -1;
          };
        };
      },
      function (r, d, n) {
        var s = n(7),
          i = n(44),
          u = n(43),
          a = n(3),
          f = n(31),
          c = n(64),
          l = {},
          p = {},
          d = (r.exports = function (h, C, y, U, T) {
            var I,
              R,
              b,
              _,
              S = T
                ? function () {
                    return h;
                  }
                : c(h),
              w = s(y, U, C ? 2 : 1),
              N = 0;
            if (typeof S != 'function')
              throw TypeError(h + ' is not iterable!');
            if (u(S)) {
              for (I = f(h.length); I > N; N++)
                if (
                  ((_ = C ? w(a((R = h[N]))[0], R[1]) : w(h[N])),
                  _ === l || _ === p)
                )
                  return _;
            } else
              for (b = S.call(h); !(R = b.next()).done; )
                if (((_ = i(b, w, R.value, C)), _ === l || _ === p)) return _;
          });
        (d.BREAK = l), (d.RETURN = p);
      },
      function (r, o) {
        r.exports = function (n, s, i) {
          var u = i === void 0;
          switch (s.length) {
            case 0:
              return u ? n() : n.call(i);
            case 1:
              return u ? n(s[0]) : n.call(i, s[0]);
            case 2:
              return u ? n(s[0], s[1]) : n.call(i, s[0], s[1]);
            case 3:
              return u ? n(s[0], s[1], s[2]) : n.call(i, s[0], s[1], s[2]);
            case 4:
              return u
                ? n(s[0], s[1], s[2], s[3])
                : n.call(i, s[0], s[1], s[2], s[3]);
          }
          return n.apply(i, s);
        };
      },
      function (r, o, n) {
        var s = n(11);
        r.exports = Object('z').propertyIsEnumerable(0)
          ? Object
          : function (i) {
              return s(i) == 'String' ? i.split('') : Object(i);
            };
      },
      function (r, o, n) {
        var s = n(10),
          i = n(1)('iterator'),
          u = Array.prototype;
        r.exports = function (a) {
          return a !== void 0 && (s.Array === a || u[i] === a);
        };
      },
      function (r, o, n) {
        var s = n(3);
        r.exports = function (i, u, a, f) {
          try {
            return f ? u(s(a)[0], a[1]) : u(a);
          } catch (l) {
            var c = i.return;
            throw (c !== void 0 && s(c.call(i)), l);
          }
        };
      },
      function (r, o, n) {
        'use strict';
        var s = n(49),
          i = n(17),
          u = n(18),
          a = {};
        n(5)(a, n(1)('iterator'), function () {
          return this;
        }),
          (r.exports = function (f, c, l) {
            (f.prototype = s(a, { next: i(1, l) })), u(f, c + ' Iterator');
          });
      },
      function (r, o, n) {
        var s = n(1)('iterator'),
          i = !1;
        try {
          var u = [7][s]();
          (u.return = function () {
            i = !0;
          }),
            Array.from(u, function () {
              throw 2;
            });
        } catch {}
        r.exports = function (a, f) {
          if (!f && !i) return !1;
          var c = !1;
          try {
            var l = [7],
              p = l[s]();
            (p.next = function () {
              return { done: (c = !0) };
            }),
              (l[s] = function () {
                return p;
              }),
              a(l);
          } catch {}
          return c;
        };
      },
      function (r, o) {
        r.exports = function (n, s) {
          return { value: s, done: !!n };
        };
      },
      function (r, o, n) {
        var s = n(2),
          i = n(30).set,
          u = s.MutationObserver || s.WebKitMutationObserver,
          a = s.process,
          f = s.Promise,
          c = n(11)(a) == 'process';
        r.exports = function () {
          var l,
            p,
            d,
            h = function () {
              var T, I;
              for (c && (T = a.domain) && T.exit(); l; ) {
                (I = l.fn), (l = l.next);
                try {
                  I();
                } catch (R) {
                  throw (l ? d() : (p = void 0), R);
                }
              }
              (p = void 0), T && T.enter();
            };
          if (c)
            d = function () {
              a.nextTick(h);
            };
          else if (u) {
            var C = !0,
              y = document.createTextNode('');
            new u(h).observe(y, { characterData: !0 }),
              (d = function () {
                y.data = C = !C;
              });
          } else if (f && f.resolve) {
            var U = f.resolve();
            d = function () {
              U.then(h);
            };
          } else
            d = function () {
              i.call(s, h);
            };
          return function (T) {
            var I = { fn: T, next: void 0 };
            p && (p.next = I), l || ((l = I), d()), (p = I);
          };
        };
      },
      function (r, o, n) {
        var s = n(3),
          i = n(50),
          u = n(22),
          a = n(19)('IE_PROTO'),
          f = function () {},
          c = 'prototype',
          l = function () {
            var p,
              d = n(16)('iframe'),
              h = u.length,
              C = '>';
            for (
              d.style.display = 'none',
                n(25).appendChild(d),
                d.src = 'javascript:',
                p = d.contentWindow.document,
                p.open(),
                p.write('<script>document.F=Object</script' + C),
                p.close(),
                l = p.F;
              h--;

            )
              delete l[c][u[h]];
            return l();
          };
        r.exports =
          Object.create ||
          function (p, d) {
            var h;
            return (
              p !== null
                ? ((f[c] = s(p)), (h = new f()), (f[c] = null), (h[a] = p))
                : (h = l()),
              d === void 0 ? h : i(h, d)
            );
          };
      },
      function (r, o, n) {
        var s = n(12),
          i = n(3),
          u = n(54);
        r.exports = n(4)
          ? Object.defineProperties
          : function (a, f) {
              i(a);
              for (var c, l = u(f), p = l.length, d = 0; p > d; )
                s.f(a, (c = l[d++]), f[c]);
              return a;
            };
      },
      function (r, o, n) {
        var s = n(55),
          i = n(17),
          u = n(13),
          a = n(32),
          f = n(8),
          c = n(26),
          l = Object.getOwnPropertyDescriptor;
        o.f = n(4)
          ? l
          : function (p, d) {
              if (((p = u(p)), (d = a(d, !0)), c))
                try {
                  return l(p, d);
                } catch {}
              if (f(p, d)) return i(!s.f.call(p, d), p[d]);
            };
      },
      function (r, o, n) {
        var s = n(8),
          i = n(63),
          u = n(19)('IE_PROTO'),
          a = Object.prototype;
        r.exports =
          Object.getPrototypeOf ||
          function (f) {
            return (
              (f = i(f)),
              s(f, u)
                ? f[u]
                : typeof f.constructor == 'function' &&
                  f instanceof f.constructor
                ? f.constructor.prototype
                : f instanceof Object
                ? a
                : null
            );
          };
      },
      function (r, o, n) {
        var s = n(8),
          i = n(13),
          u = n(39)(!1),
          a = n(19)('IE_PROTO');
        r.exports = function (f, c) {
          var l,
            p = i(f),
            d = 0,
            h = [];
          for (l in p) l != a && s(p, l) && h.push(l);
          for (; c.length > d; ) s(p, (l = c[d++])) && (~u(h, l) || h.push(l));
          return h;
        };
      },
      function (r, o, n) {
        var s = n(53),
          i = n(22);
        r.exports =
          Object.keys ||
          function (u) {
            return s(u, i);
          };
      },
      function (r, o) {
        o.f = {}.propertyIsEnumerable;
      },
      function (r, o, n) {
        var s = n(5);
        r.exports = function (i, u, a) {
          for (var f in u) a && i[f] ? (i[f] = u[f]) : s(i, f, u[f]);
          return i;
        };
      },
      function (r, o, n) {
        r.exports = n(5);
      },
      function (r, o, n) {
        var s = n(9),
          i = n(3),
          u = function (a, f) {
            if ((i(a), !s(f) && f !== null))
              throw TypeError(f + ": can't set as prototype!");
          };
        r.exports = {
          set:
            Object.setPrototypeOf ||
            ('__proto__' in {}
              ? (function (a, f, c) {
                  try {
                    (c = n(7)(
                      Function.call,
                      n(51).f(Object.prototype, '__proto__').set,
                      2
                    )),
                      c(a, []),
                      (f = !(a instanceof Array));
                  } catch {
                    f = !0;
                  }
                  return function (l, p) {
                    return u(l, p), f ? (l.__proto__ = p) : c(l, p), l;
                  };
                })({}, !1)
              : void 0),
          check: u,
        };
      },
      function (r, o, n) {
        'use strict';
        var s = n(2),
          i = n(6),
          u = n(12),
          a = n(4),
          f = n(1)('species');
        r.exports = function (c) {
          var l = typeof i[c] == 'function' ? i[c] : s[c];
          a &&
            l &&
            !l[f] &&
            u.f(l, f, {
              configurable: !0,
              get: function () {
                return this;
              },
            });
        };
      },
      function (r, o, n) {
        var s = n(3),
          i = n(14),
          u = n(1)('species');
        r.exports = function (a, f) {
          var c,
            l = s(a).constructor;
          return l === void 0 || (c = s(l)[u]) == null ? f : i(c);
        };
      },
      function (r, o, n) {
        var s = n(20),
          i = n(15);
        r.exports = function (u) {
          return function (a, f) {
            var c,
              l,
              p = String(i(a)),
              d = s(f),
              h = p.length;
            return d < 0 || d >= h
              ? u
                ? ''
                : void 0
              : ((c = p.charCodeAt(d)),
                c < 55296 ||
                c > 56319 ||
                d + 1 === h ||
                (l = p.charCodeAt(d + 1)) < 56320 ||
                l > 57343
                  ? u
                    ? p.charAt(d)
                    : c
                  : u
                  ? p.slice(d, d + 2)
                  : ((c - 55296) << 10) + (l - 56320) + 65536);
          };
        };
      },
      function (r, o, n) {
        var s = n(20),
          i = Math.max,
          u = Math.min;
        r.exports = function (a, f) {
          return (a = s(a)), a < 0 ? i(a + f, 0) : u(a, f);
        };
      },
      function (r, o, n) {
        var s = n(15);
        r.exports = function (i) {
          return Object(s(i));
        };
      },
      function (r, o, n) {
        var s = n(21),
          i = n(1)('iterator'),
          u = n(10);
        r.exports = n(6).getIteratorMethod = function (a) {
          if (a != null) return a[i] || a['@@iterator'] || u[s(a)];
        };
      },
      function (r, o, n) {
        'use strict';
        var s = n(37),
          i = n(47),
          u = n(10),
          a = n(13);
        (r.exports = n(27)(
          Array,
          'Array',
          function (f, c) {
            (this._t = a(f)), (this._i = 0), (this._k = c);
          },
          function () {
            var f = this._t,
              c = this._k,
              l = this._i++;
            return !f || l >= f.length
              ? ((this._t = void 0), i(1))
              : c == 'keys'
              ? i(0, l)
              : c == 'values'
              ? i(0, f[l])
              : i(0, [l, f[l]]);
          },
          'values'
        )),
          (u.Arguments = u.Array),
          s('keys'),
          s('values'),
          s('entries');
      },
      function (r, o) {},
      function (r, o, n) {
        'use strict';
        var s,
          i,
          u,
          a = n(28),
          f = n(2),
          c = n(7),
          l = n(21),
          p = n(23),
          d = n(9),
          h = (n(3), n(14)),
          C = n(38),
          y = n(40),
          U = (n(58).set, n(60)),
          T = n(30).set,
          I = n(48)(),
          R = 'Promise',
          b = f.TypeError,
          S = f.process,
          _ = f[R],
          S = f.process,
          w = l(S) == 'process',
          N = function () {},
          L = !!(function () {
            try {
              var m = _.resolve(1),
                v = ((m.constructor = {})[n(1)('species')] = function (E) {
                  E(N, N);
                });
              return (
                (w || typeof PromiseRejectionEvent == 'function') &&
                m.then(N) instanceof v
              );
            } catch {}
          })(),
          K = function (m, v) {
            return m === v || (m === _ && v === u);
          },
          j = function (m) {
            var v;
            return !(!d(m) || typeof (v = m.then) != 'function') && v;
          },
          B = function (m) {
            return K(_, m) ? new z(m) : new i(m);
          },
          z = (i = function (m) {
            var v, E;
            (this.promise = new m(function (O, q) {
              if (v !== void 0 || E !== void 0)
                throw b('Bad Promise constructor');
              (v = O), (E = q);
            })),
              (this.resolve = h(v)),
              (this.reject = h(E));
          }),
          A = function (m) {
            try {
              m();
            } catch (v) {
              return { error: v };
            }
          },
          Y = function (m, v) {
            if (!m._n) {
              m._n = !0;
              var E = m._c;
              I(function () {
                for (
                  var O = m._v,
                    q = m._s == 1,
                    se = 0,
                    le = function (ne) {
                      var ee,
                        Ae,
                        ye = q ? ne.ok : ne.fail,
                        Re = ne.resolve,
                        pe = ne.reject,
                        Le = ne.domain;
                      try {
                        ye
                          ? (q || (m._h == 2 && P(m), (m._h = 1)),
                            ye === !0
                              ? (ee = O)
                              : (Le && Le.enter(),
                                (ee = ye(O)),
                                Le && Le.exit()),
                            ee === ne.promise
                              ? pe(b('Promise-chain cycle'))
                              : (Ae = j(ee))
                              ? Ae.call(ee, Re, pe)
                              : Re(ee))
                          : pe(O);
                      } catch (vo) {
                        pe(vo);
                      }
                    };
                  E.length > se;

                )
                  le(E[se++]);
                (m._c = []), (m._n = !1), v && !m._h && V(m);
              });
            }
          },
          V = function (m) {
            T.call(f, function () {
              var v,
                E,
                O,
                q = m._v;
              if (
                (g(m) &&
                  ((v = A(function () {
                    w
                      ? S.emit('unhandledRejection', q, m)
                      : (E = f.onunhandledrejection)
                      ? E({ promise: m, reason: q })
                      : (O = f.console) &&
                        O.error &&
                        O.error('Unhandled promise rejection', q);
                  })),
                  (m._h = w || g(m) ? 2 : 1)),
                (m._a = void 0),
                v)
              )
                throw v.error;
            });
          },
          g = function (m) {
            if (m._h == 1) return !1;
            for (var v, E = m._a || m._c, O = 0; E.length > O; )
              if (((v = E[O++]), v.fail || !g(v.promise))) return !1;
            return !0;
          },
          P = function (m) {
            T.call(f, function () {
              var v;
              w
                ? S.emit('rejectionHandled', m)
                : (v = f.onrejectionhandled) && v({ promise: m, reason: m._v });
            });
          },
          F = function (m) {
            var v = this;
            v._d ||
              ((v._d = !0),
              (v = v._w || v),
              (v._v = m),
              (v._s = 2),
              v._a || (v._a = v._c.slice()),
              Y(v, !0));
          },
          Z = function (m) {
            var v,
              E = this;
            if (!E._d) {
              (E._d = !0), (E = E._w || E);
              try {
                if (E === m) throw b("Promise can't be resolved itself");
                (v = j(m))
                  ? I(function () {
                      var O = { _w: E, _d: !1 };
                      try {
                        v.call(m, c(Z, O, 1), c(F, O, 1));
                      } catch (q) {
                        F.call(O, q);
                      }
                    })
                  : ((E._v = m), (E._s = 1), Y(E, !1));
              } catch (O) {
                F.call({ _w: E, _d: !1 }, O);
              }
            }
          };
        L ||
          ((_ = function (m) {
            C(this, _, R, '_h'), h(m), s.call(this);
            try {
              m(c(Z, this, 1), c(F, this, 1));
            } catch (v) {
              F.call(this, v);
            }
          }),
          (s = function (m) {
            (this._c = []),
              (this._a = void 0),
              (this._s = 0),
              (this._d = !1),
              (this._v = void 0),
              (this._h = 0),
              (this._n = !1);
          }),
          (s.prototype = n(56)(_.prototype, {
            then: function (m, v) {
              var E = B(U(this, _));
              return (
                (E.ok = typeof m != 'function' || m),
                (E.fail = typeof v == 'function' && v),
                (E.domain = w ? S.domain : void 0),
                this._c.push(E),
                this._a && this._a.push(E),
                this._s && Y(this, !1),
                E.promise
              );
            },
            catch: function (m) {
              return this.then(void 0, m);
            },
          })),
          (z = function () {
            var m = new s();
            (this.promise = m),
              (this.resolve = c(Z, m, 1)),
              (this.reject = c(F, m, 1));
          })),
          p(p.G + p.W + p.F * !L, { Promise: _ }),
          n(18)(_, R),
          n(59)(R),
          (u = n(6)[R]),
          p(p.S + p.F * !L, R, {
            reject: function (m) {
              var v = B(this),
                E = v.reject;
              return E(m), v.promise;
            },
          }),
          p(p.S + p.F * (a || !L), R, {
            resolve: function (m) {
              if (m instanceof _ && K(m.constructor, this)) return m;
              var v = B(this),
                E = v.resolve;
              return E(m), v.promise;
            },
          }),
          p(
            p.S +
              p.F *
                !(
                  L &&
                  n(46)(function (m) {
                    _.all(m).catch(N);
                  })
                ),
            R,
            {
              all: function (m) {
                var v = this,
                  E = B(v),
                  O = E.resolve,
                  q = E.reject,
                  se = A(function () {
                    var le = [],
                      ne = 0,
                      ee = 1;
                    y(m, !1, function (Ae) {
                      var ye = ne++,
                        Re = !1;
                      le.push(void 0),
                        ee++,
                        v.resolve(Ae).then(function (pe) {
                          Re || ((Re = !0), (le[ye] = pe), --ee || O(le));
                        }, q);
                    }),
                      --ee || O(le);
                  });
                return se && q(se.error), E.promise;
              },
              race: function (m) {
                var v = this,
                  E = B(v),
                  O = E.reject,
                  q = A(function () {
                    y(m, !1, function (se) {
                      v.resolve(se).then(E.resolve, O);
                    });
                  });
                return q && O(q.error), E.promise;
              },
            }
          );
      },
      function (r, o, n) {
        'use strict';
        var s = n(61)(!0);
        n(27)(
          String,
          'String',
          function (i) {
            (this._t = String(i)), (this._i = 0);
          },
          function () {
            var i,
              u = this._t,
              a = this._i;
            return a >= u.length
              ? { value: void 0, done: !0 }
              : ((i = s(u, a)), (this._i += i.length), { value: i, done: !1 });
          }
        );
      },
      function (r, o, n) {
        n(65);
        for (
          var s = n(2),
            i = n(5),
            u = n(10),
            a = n(1)('toStringTag'),
            f = [
              'NodeList',
              'DOMTokenList',
              'MediaList',
              'StyleSheetList',
              'CSSRuleList',
            ],
            c = 0;
          c < 5;
          c++
        ) {
          var l = f[c],
            p = s[l],
            d = p && p.prototype;
          d && !d[a] && i(d, a, l), (u[l] = u.Array);
        }
      },
      function (r, o) {
        r.exports = require('child_process');
      },
      function (r, o) {
        r.exports = require('crypto');
      },
    ]);
  });
});
var cr = {};
Be(cr, {
  configureLightClientRequire: () => So,
  configuredPaths: () => at,
  lightClientRequire: () => re,
});
function So(e) {
  (at = e),
    (re = function (t) {
      if (at.length === 0)
        throw new Error(
          'Light client require must have paths configured with `configureLightClientRequire`.'
        );
      let r;
      try {
        r = require.resolve(t, { paths: e });
      } catch (o) {
        throw (
          (process.env.NX_VERBOSE_LOGGING === 'true' &&
            console.error(
              `Was not able to require.resolve module ${t} from the following paths: ${e}. This may be expected.`
            ),
          o)
        );
      }
      try {
        return require(r);
      } catch (o) {
        throw (
          (process.env.NX_VERBOSE_LOGGING === 'true' &&
            console.error(
              `Was not able require module ${t} from path ${r}. This may be expected. `
            ),
          o)
        );
      }
    });
}
var re,
  at,
  Me = te(() => {
    'use strict';
    at = [];
  });
var de = x((ie) => {
  'use strict';
  Me();
  try {
    try {
      let { output: e } = re('nx/src/utils/output'),
        t;
      try {
        t = re('nx/src/utils/app-root').workspaceRoot;
      } catch {
        t = re('nx/src/utils/workspace-root').workspaceRoot;
      }
      (ie.workspaceRoot = t), (ie.output = e);
    } catch {
      let { output: t } = re('@nrwl/workspace/src/utilities/output'),
        { appRootPath: r } = re('@nrwl/tao/src/utils/app-root');
      (ie.workspaceRoot = r), (ie.output = t);
    }
  } catch {
    let t = (r) => {
      var o;
      return `${r.title}

${
  (o = r.bodyLines) == null
    ? void 0
    : o.join(`
`)
}`;
    };
    (ie.output = {
      note: (r) => console.info(t(r)),
      error: (r) => console.error(t(r)),
      warn: (r) => console.warn(t(r)),
      success: (r) => console.log(t(r)),
      addVerticalSeparator: () => '',
      addNewline: () =>
        console.log(`
`),
    }),
      (ie.workspaceRoot = process.cwd());
  }
});
var vr = {};
Be(vr, {
  ACCESS_TOKEN: () => Ie,
  DEFAULT_FILE_SIZE_LIMIT: () => Do,
  DISTRIBUTED_TASK_EXECUTION_INTERNAL_ERROR_STATUS_CODE: () => Po,
  ENCRYPTION_KEY: () => dr,
  NO_COMPLETED_TASKS_TIMEOUT: () => Bo,
  NO_MESSAGES_TIMEOUT: () => Lo,
  NUMBER_OF_AXIOS_RETRIES: () => xe,
  NX_CLOUD_DISTRIBUTED_EXECUTION_AGENT_COUNT: () => qo,
  NX_CLOUD_DISTRIBUTED_EXECUTION_STOP_AGENTS_ON_FAILURE: () => ko,
  NX_CLOUD_FORCE_METRICS: () => pr,
  NX_CLOUD_NO_TIMEOUTS: () => Pe,
  NX_CLOUD_UNLIMITED_OUTPUT: () => Mo,
  NX_NO_CLOUD: () => Ho,
  UNLIMITED_FILE_SIZE: () => Fo,
  UNLIMITED_TIMEOUT: () => ft,
  VERBOSE_LOGGING: () => X,
  agentRunningInDistributedExecution: () => Go,
  extractGitRef: () => Vo,
  extractGitSha: () => Te,
  getBranch: () => mr,
  getCIExecutionEnv: () => ut,
  getCIExecutionId: () => lt,
  getMachineInfo: () => Wo,
  getRunGroup: () => Ko,
  nxInvokedByRunner: () => jo,
  parseCommand: () => zo,
});
function Go(e) {
  return !!e;
}
function jo() {
  return (
    process.env.NX_INVOKED_BY_RUNNER === 'true' ||
    process.env.NX_CLOUD === 'false'
  );
}
function Te() {
  try {
    return (0, ct.execSync)('git rev-parse HEAD', { stdio: 'pipe' })
      .toString()
      .trim();
  } catch {
    return;
  }
}
function Vo() {
  try {
    return (0, ct.execSync)('git rev-parse --symbolic-full-name HEAD', {
      stdio: 'pipe',
    })
      .toString()
      .trim();
  } catch {
    return;
  }
}
function Xo() {
  try {
    let e = (0, lr.readFileSync)((0, De.join)(Ao, 'nx-cloud.env'));
    return Uo.parse(e);
  } catch {
    return {};
  }
}
function $o() {
  let e = Xo();
  (Ie =
    process.env.NX_CLOUD_AUTH_TOKEN ||
    process.env.NX_CLOUD_ACCESS_TOKEN ||
    e.NX_CLOUD_AUTH_TOKEN ||
    e.NX_CLOUD_ACCESS_TOKEN),
    (dr = process.env.NX_CLOUD_ENCRYPTION_KEY || e.NX_CLOUD_ENCRYPTION_KEY),
    (X =
      process.env.NX_VERBOSE_LOGGING === 'true' ||
      e.NX_VERBOSE_LOGGING === 'true'),
    (Pe =
      process.env.NX_CLOUD_NO_TIMEOUTS === 'true' ||
      e.NX_CLOUD_NO_TIMEOUTS === 'true');
}
function lt() {
  return hr();
}
function hr() {
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
function ut() {
  return process.env.NX_CI_EXECUTION_ENV ?? '';
}
function Ko() {
  if (process.env.NX_RUN_GROUP !== void 0) return process.env.NX_RUN_GROUP;
  let e = hr();
  return e ? (ut() ? `${e}-${ut()}` : e) : Te();
}
function mr() {
  if (process.env.NX_BRANCH !== void 0) return process.env.NX_BRANCH;
  if (process.env.CIRCLECI !== void 0) {
    if (process.env.CIRCLE_PR_NUMBER !== void 0)
      return process.env.CIRCLE_PR_NUMBER;
    if (process.env.CIRCLE_PULL_REQUEST !== void 0) {
      let e = process.env.CIRCLE_PULL_REQUEST.split('/');
      return e[e.length - 1];
    } else if (process.env.CIRCLE_BRANCH !== void 0)
      return process.env.CIRCLE_BRANCH;
  }
  if (process.env.TRAVIS_PULL_REQUEST !== void 0)
    return process.env.TRAVIS_PULL_REQUEST;
  if (process.env.GITHUB_ACTIONS) {
    if (process.env.GITHUB_REF) {
      let e = process.env.GITHUB_REF.match(/refs\/pull\/(\d+)\/merge/);
      if (e) return e[1];
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
function Wo() {
  let e = require('os'),
    t = (0, fr.createHash)('md5');
  return (
    t.update(No()),
    {
      machineId: t.digest('base64'),
      platform: e.platform(),
      version: e.version ? e.version() : '',
      cpuCores: e.cpus().length,
    }
  );
}
function zo() {
  let e = (0, De.parse)(process.argv[1]).name,
    t = `${process.argv.slice(2).join(' ')}`;
  return `${e} ${t}`;
}
var ct,
  fr,
  lr,
  De,
  Uo,
  No,
  Ao,
  ft,
  Lo,
  Bo,
  Fo,
  Mo,
  Do,
  Po,
  qo,
  ko,
  pr,
  xe,
  Ho,
  Ie,
  dr,
  X,
  Pe,
  he = te(() => {
    'use strict';
    (ct = require('child_process')),
      (fr = require('crypto')),
      (lr = require('fs')),
      (De = require('path'));
    nr();
    (Uo = ar()),
      ({ machineIdSync: No } = ur()),
      ({ workspaceRoot: Ao } = de()),
      (ft = 9999999),
      (Lo = process.env.NX_CLOUD_AGENT_TIMEOUT_MS
        ? Number(process.env.NX_CLOUD_AGENT_TIMEOUT_MS)
        : 36e5),
      (Bo = process.env.NX_CLOUD_ORCHESTRATOR_TIMEOUT_MS
        ? Number(process.env.NX_CLOUD_ORCHESTRATOR_TIMEOUT_MS)
        : 36e5),
      (Fo = 1e3 * 1e3 * 1e4),
      (Mo = process.env.NX_CLOUD_UNLIMITED_OUTPUT === 'true'),
      (Do = 1e3 * 1e3 * 300),
      (Po = 166),
      (qo = process.env.NX_CLOUD_DISTRIBUTED_EXECUTION_AGENT_COUNT
        ? Number(process.env.NX_CLOUD_DISTRIBUTED_EXECUTION_AGENT_COUNT)
        : null),
      (ko =
        process.env.NX_CLOUD_DISTRIBUTED_EXECUTION_STOP_AGENTS_ON_FAILURE !=
        'false'),
      (pr = process.env.NX_CLOUD_FORCE_METRICS === 'true'),
      (xe = process.env.NX_CLOUD_NUMBER_OF_RETRIES
        ? Number(process.env.NX_CLOUD_NUMBER_OF_RETRIES)
        : rr()
        ? 10
        : 1),
      (Ho = process.env.NX_NO_CLOUD === 'true');
    $o();
  });
var gr = x((ta, Rr) => {
  'use strict';
  var pt = Symbol('singleComment'),
    yr = Symbol('multiComment'),
    Jo = () => '',
    Yo = (e, t, r) => e.slice(t, r).replace(/\S/g, ' '),
    Qo = (e, t) => {
      let r = t - 1,
        o = 0;
      for (; e[r] === '\\'; ) (r -= 1), (o += 1);
      return !!(o % 2);
    };
  Rr.exports = (e, t = {}) => {
    if (typeof e != 'string')
      throw new TypeError(
        `Expected argument \`jsonString\` to be a \`string\`, got \`${typeof e}\``
      );
    let r = t.whitespace === !1 ? Jo : Yo,
      o = !1,
      n = !1,
      s = 0,
      i = '';
    for (let u = 0; u < e.length; u++) {
      let a = e[u],
        f = e[u + 1];
      if ((!n && a === '"' && (Qo(e, u) || (o = !o)), !o)) {
        if (!n && a + f === '//') (i += e.slice(s, u)), (s = u), (n = pt), u++;
        else if (
          n === pt &&
          a + f ===
            `\r
`
        ) {
          u++, (n = !1), (i += r(e, s, u)), (s = u);
          continue;
        } else if (
          n === pt &&
          a ===
            `
`
        )
          (n = !1), (i += r(e, s, u)), (s = u);
        else if (!n && a + f === '/*') {
          (i += e.slice(s, u)), (s = u), (n = yr), u++;
          continue;
        } else if (n === yr && a + f === '*/') {
          u++, (n = !1), (i += r(e, s, u + 1)), (s = u + 1);
          continue;
        }
      }
    }
    return i + (n ? r(e.slice(s)) : e.slice(s));
  };
});
var Ir = {};
Be(Ir, { getCloudOptions: () => ts });
function ts() {
  var o, n;
  let e = JSON.parse(Zo((0, xr.readFileSync)(`${es}/nx.json`).toString())),
    t = {},
    r = [];
  for (let s in e.targetDefaults) e.targetDefaults[s].cache && r.push(s);
  return (
    e.nxCloudAccessToken &&
      (t.accessToken ?? (t.accessToken = e.nxCloudAccessToken)),
    e.nxCloudUrl && (t.url ?? (t.url = e.nxCloudUrl)),
    e.nxCloudEncryptionKey && (t.encryptionKey = e.nxCloudEncryptionKey),
    e.parallel && (t.parallel ?? (t.parallel = e.parallel)),
    e.cacheDirectory &&
      (t.cacheDirectory ?? (t.cacheDirectory = e.cacheDirectory)),
    r.length && (t.cacheableOperations ?? (t.cacheableOperations = r)),
    {
      nxJson: e,
      nxCloudOptions: {
        ...t,
        ...((n = (o = e.tasksRunnerOptions) == null ? void 0 : o.default) ==
        null
          ? void 0
          : n.options),
      },
    }
  );
}
var xr,
  Zo,
  es,
  Tr = te(() => {
    'use strict';
    (xr = require('fs')), (Zo = gr()), ({ workspaceRoot: es } = de());
  });
function dt(e) {
  return new Promise((t) => {
    setTimeout(() => t(null), e);
  });
}
var Or = te(() => {
  'use strict';
});
var ht = x((na, wr) => {
  'use strict';
  wr.exports = function (t, r) {
    return function () {
      for (var n = new Array(arguments.length), s = 0; s < n.length; s++)
        n[s] = arguments[s];
      return t.apply(r, n);
    };
  };
});
var H = x((oa, Ur) => {
  'use strict';
  var rs = ht(),
    ae = Object.prototype.toString;
  function _t(e) {
    return ae.call(e) === '[object Array]';
  }
  function mt(e) {
    return typeof e > 'u';
  }
  function ns(e) {
    return (
      e !== null &&
      !mt(e) &&
      e.constructor !== null &&
      !mt(e.constructor) &&
      typeof e.constructor.isBuffer == 'function' &&
      e.constructor.isBuffer(e)
    );
  }
  function os(e) {
    return ae.call(e) === '[object ArrayBuffer]';
  }
  function ss(e) {
    return typeof FormData < 'u' && e instanceof FormData;
  }
  function is(e) {
    var t;
    return (
      typeof ArrayBuffer < 'u' && ArrayBuffer.isView
        ? (t = ArrayBuffer.isView(e))
        : (t = e && e.buffer && e.buffer instanceof ArrayBuffer),
      t
    );
  }
  function as(e) {
    return typeof e == 'string';
  }
  function us(e) {
    return typeof e == 'number';
  }
  function br(e) {
    return e !== null && typeof e == 'object';
  }
  function qe(e) {
    if (ae.call(e) !== '[object Object]') return !1;
    var t = Object.getPrototypeOf(e);
    return t === null || t === Object.prototype;
  }
  function cs(e) {
    return ae.call(e) === '[object Date]';
  }
  function fs(e) {
    return ae.call(e) === '[object File]';
  }
  function ls(e) {
    return ae.call(e) === '[object Blob]';
  }
  function Sr(e) {
    return ae.call(e) === '[object Function]';
  }
  function ps(e) {
    return br(e) && Sr(e.pipe);
  }
  function ds(e) {
    return typeof URLSearchParams < 'u' && e instanceof URLSearchParams;
  }
  function hs(e) {
    return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, '');
  }
  function ms() {
    return typeof navigator < 'u' &&
      (navigator.product === 'ReactNative' ||
        navigator.product === 'NativeScript' ||
        navigator.product === 'NS')
      ? !1
      : typeof window < 'u' && typeof document < 'u';
  }
  function Ct(e, t) {
    if (!(e === null || typeof e > 'u'))
      if ((typeof e != 'object' && (e = [e]), _t(e)))
        for (var r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
      else
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.call(null, e[n], n, e);
  }
  function vt() {
    var e = {};
    function t(n, s) {
      qe(e[s]) && qe(n)
        ? (e[s] = vt(e[s], n))
        : qe(n)
        ? (e[s] = vt({}, n))
        : _t(n)
        ? (e[s] = n.slice())
        : (e[s] = n);
    }
    for (var r = 0, o = arguments.length; r < o; r++) Ct(arguments[r], t);
    return e;
  }
  function vs(e, t, r) {
    return (
      Ct(t, function (n, s) {
        r && typeof n == 'function' ? (e[s] = rs(n, r)) : (e[s] = n);
      }),
      e
    );
  }
  function _s(e) {
    return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
  }
  Ur.exports = {
    isArray: _t,
    isArrayBuffer: os,
    isBuffer: ns,
    isFormData: ss,
    isArrayBufferView: is,
    isString: as,
    isNumber: us,
    isObject: br,
    isPlainObject: qe,
    isUndefined: mt,
    isDate: cs,
    isFile: fs,
    isBlob: ls,
    isFunction: Sr,
    isStream: ps,
    isURLSearchParams: ds,
    isStandardBrowserEnv: ms,
    forEach: Ct,
    merge: vt,
    extend: vs,
    trim: hs,
    stripBOM: _s,
  };
});
var ke = x((sa, Ar) => {
  'use strict';
  var me = H();
  function Nr(e) {
    return encodeURIComponent(e)
      .replace(/%3A/gi, ':')
      .replace(/%24/g, '$')
      .replace(/%2C/gi, ',')
      .replace(/%20/g, '+')
      .replace(/%5B/gi, '[')
      .replace(/%5D/gi, ']');
  }
  Ar.exports = function (t, r, o) {
    if (!r) return t;
    var n;
    if (o) n = o(r);
    else if (me.isURLSearchParams(r)) n = r.toString();
    else {
      var s = [];
      me.forEach(r, function (a, f) {
        a === null ||
          typeof a > 'u' ||
          (me.isArray(a) ? (f = f + '[]') : (a = [a]),
          me.forEach(a, function (l) {
            me.isDate(l)
              ? (l = l.toISOString())
              : me.isObject(l) && (l = JSON.stringify(l)),
              s.push(Nr(f) + '=' + Nr(l));
          }));
      }),
        (n = s.join('&'));
    }
    if (n) {
      var i = t.indexOf('#');
      i !== -1 && (t = t.slice(0, i)),
        (t += (t.indexOf('?') === -1 ? '?' : '&') + n);
    }
    return t;
  };
});
var Br = x((ia, Lr) => {
  'use strict';
  var Cs = H();
  function He() {
    this.handlers = [];
  }
  He.prototype.use = function (t, r, o) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: r,
        synchronous: o ? o.synchronous : !1,
        runWhen: o ? o.runWhen : null,
      }),
      this.handlers.length - 1
    );
  };
  He.prototype.eject = function (t) {
    this.handlers[t] && (this.handlers[t] = null);
  };
  He.prototype.forEach = function (t) {
    Cs.forEach(this.handlers, function (o) {
      o !== null && t(o);
    });
  };
  Lr.exports = He;
});
var Mr = x((aa, Fr) => {
  'use strict';
  var Es = H();
  Fr.exports = function (t, r) {
    Es.forEach(t, function (n, s) {
      s !== r &&
        s.toUpperCase() === r.toUpperCase() &&
        ((t[r] = n), delete t[s]);
    });
  };
});
var Ge = x((ua, Dr) => {
  'use strict';
  Dr.exports = function (t, r, o, n, s) {
    return (
      (t.config = r),
      o && (t.code = o),
      (t.request = n),
      (t.response = s),
      (t.isAxiosError = !0),
      (t.toJSON = function () {
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
      t
    );
  };
});
var je = x((ca, Pr) => {
  'use strict';
  var ys = Ge();
  Pr.exports = function (t, r, o, n, s) {
    var i = new Error(t);
    return ys(i, r, o, n, s);
  };
});
var Et = x((fa, qr) => {
  'use strict';
  var Rs = je();
  qr.exports = function (t, r, o) {
    var n = o.config.validateStatus;
    !o.status || !n || n(o.status)
      ? t(o)
      : r(
          Rs(
            'Request failed with status code ' + o.status,
            o.config,
            null,
            o.request,
            o
          )
        );
  };
});
var Hr = x((la, kr) => {
  'use strict';
  var Ve = H();
  kr.exports = Ve.isStandardBrowserEnv()
    ? (function () {
        return {
          write: function (r, o, n, s, i, u) {
            var a = [];
            a.push(r + '=' + encodeURIComponent(o)),
              Ve.isNumber(n) && a.push('expires=' + new Date(n).toGMTString()),
              Ve.isString(s) && a.push('path=' + s),
              Ve.isString(i) && a.push('domain=' + i),
              u === !0 && a.push('secure'),
              (document.cookie = a.join('; '));
          },
          read: function (r) {
            var o = document.cookie.match(
              new RegExp('(^|;\\s*)(' + r + ')=([^;]*)')
            );
            return o ? decodeURIComponent(o[3]) : null;
          },
          remove: function (r) {
            this.write(r, '', Date.now() - 864e5);
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
var jr = x((pa, Gr) => {
  'use strict';
  Gr.exports = function (t) {
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t);
  };
});
var Xr = x((da, Vr) => {
  'use strict';
  Vr.exports = function (t, r) {
    return r ? t.replace(/\/+$/, '') + '/' + r.replace(/^\/+/, '') : t;
  };
});
var yt = x((ha, $r) => {
  'use strict';
  var gs = jr(),
    xs = Xr();
  $r.exports = function (t, r) {
    return t && !gs(r) ? xs(t, r) : r;
  };
});
var Wr = x((ma, Kr) => {
  'use strict';
  var Rt = H(),
    Is = [
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
  Kr.exports = function (t) {
    var r = {},
      o,
      n,
      s;
    return (
      t &&
        Rt.forEach(
          t.split(`
`),
          function (u) {
            if (
              ((s = u.indexOf(':')),
              (o = Rt.trim(u.substr(0, s)).toLowerCase()),
              (n = Rt.trim(u.substr(s + 1))),
              o)
            ) {
              if (r[o] && Is.indexOf(o) >= 0) return;
              o === 'set-cookie'
                ? (r[o] = (r[o] ? r[o] : []).concat([n]))
                : (r[o] = r[o] ? r[o] + ', ' + n : n);
            }
          }
        ),
      r
    );
  };
});
var Yr = x((va, Jr) => {
  'use strict';
  var zr = H();
  Jr.exports = zr.isStandardBrowserEnv()
    ? (function () {
        var t = /(msie|trident)/i.test(navigator.userAgent),
          r = document.createElement('a'),
          o;
        function n(s) {
          var i = s;
          return (
            t && (r.setAttribute('href', i), (i = r.href)),
            r.setAttribute('href', i),
            {
              href: r.href,
              protocol: r.protocol ? r.protocol.replace(/:$/, '') : '',
              host: r.host,
              search: r.search ? r.search.replace(/^\?/, '') : '',
              hash: r.hash ? r.hash.replace(/^#/, '') : '',
              hostname: r.hostname,
              port: r.port,
              pathname:
                r.pathname.charAt(0) === '/' ? r.pathname : '/' + r.pathname,
            }
          );
        }
        return (
          (o = n(window.location.href)),
          function (i) {
            var u = zr.isString(i) ? n(i) : i;
            return u.protocol === o.protocol && u.host === o.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })();
});
var Zr = x((_a, Qr) => {
  'use strict';
  var Xe = H(),
    Ts = Et(),
    Os = Hr(),
    ws = ke(),
    bs = yt(),
    Ss = Wr(),
    Us = Yr(),
    gt = je();
  Qr.exports = function (t) {
    return new Promise(function (o, n) {
      var s = t.data,
        i = t.headers,
        u = t.responseType;
      Xe.isFormData(s) && delete i['Content-Type'];
      var a = new XMLHttpRequest();
      if (t.auth) {
        var f = t.auth.username || '',
          c = t.auth.password
            ? unescape(encodeURIComponent(t.auth.password))
            : '';
        i.Authorization = 'Basic ' + btoa(f + ':' + c);
      }
      var l = bs(t.baseURL, t.url);
      a.open(t.method.toUpperCase(), ws(l, t.params, t.paramsSerializer), !0),
        (a.timeout = t.timeout);
      function p() {
        if (a) {
          var h =
              'getAllResponseHeaders' in a
                ? Ss(a.getAllResponseHeaders())
                : null,
            C =
              !u || u === 'text' || u === 'json' ? a.responseText : a.response,
            y = {
              data: C,
              status: a.status,
              statusText: a.statusText,
              headers: h,
              config: t,
              request: a,
            };
          Ts(o, n, y), (a = null);
        }
      }
      if (
        ('onloadend' in a
          ? (a.onloadend = p)
          : (a.onreadystatechange = function () {
              !a ||
                a.readyState !== 4 ||
                (a.status === 0 &&
                  !(a.responseURL && a.responseURL.indexOf('file:') === 0)) ||
                setTimeout(p);
            }),
        (a.onabort = function () {
          a && (n(gt('Request aborted', t, 'ECONNABORTED', a)), (a = null));
        }),
        (a.onerror = function () {
          n(gt('Network Error', t, null, a)), (a = null);
        }),
        (a.ontimeout = function () {
          var C = 'timeout of ' + t.timeout + 'ms exceeded';
          t.timeoutErrorMessage && (C = t.timeoutErrorMessage),
            n(
              gt(
                C,
                t,
                t.transitional && t.transitional.clarifyTimeoutError
                  ? 'ETIMEDOUT'
                  : 'ECONNABORTED',
                a
              )
            ),
            (a = null);
        }),
        Xe.isStandardBrowserEnv())
      ) {
        var d =
          (t.withCredentials || Us(l)) && t.xsrfCookieName
            ? Os.read(t.xsrfCookieName)
            : void 0;
        d && (i[t.xsrfHeaderName] = d);
      }
      'setRequestHeader' in a &&
        Xe.forEach(i, function (C, y) {
          typeof s > 'u' && y.toLowerCase() === 'content-type'
            ? delete i[y]
            : a.setRequestHeader(y, C);
        }),
        Xe.isUndefined(t.withCredentials) ||
          (a.withCredentials = !!t.withCredentials),
        u && u !== 'json' && (a.responseType = t.responseType),
        typeof t.onDownloadProgress == 'function' &&
          a.addEventListener('progress', t.onDownloadProgress),
        typeof t.onUploadProgress == 'function' &&
          a.upload &&
          a.upload.addEventListener('progress', t.onUploadProgress),
        t.cancelToken &&
          t.cancelToken.promise.then(function (C) {
            a && (a.abort(), n(C), (a = null));
          }),
        s || (s = null),
        a.send(s);
    });
  };
});
var tn = x((Ca, en) => {
  'use strict';
  var ve = 1e3,
    _e = ve * 60,
    Ce = _e * 60,
    ue = Ce * 24,
    Ns = ue * 7,
    As = ue * 365.25;
  en.exports = function (e, t) {
    t = t || {};
    var r = typeof e;
    if (r === 'string' && e.length > 0) return Ls(e);
    if (r === 'number' && isFinite(e)) return t.long ? Fs(e) : Bs(e);
    throw new Error(
      'val is not a non-empty string or a valid number. val=' +
        JSON.stringify(e)
    );
  };
  function Ls(e) {
    if (((e = String(e)), !(e.length > 100))) {
      var t =
        /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
          e
        );
      if (t) {
        var r = parseFloat(t[1]),
          o = (t[2] || 'ms').toLowerCase();
        switch (o) {
          case 'years':
          case 'year':
          case 'yrs':
          case 'yr':
          case 'y':
            return r * As;
          case 'weeks':
          case 'week':
          case 'w':
            return r * Ns;
          case 'days':
          case 'day':
          case 'd':
            return r * ue;
          case 'hours':
          case 'hour':
          case 'hrs':
          case 'hr':
          case 'h':
            return r * Ce;
          case 'minutes':
          case 'minute':
          case 'mins':
          case 'min':
          case 'm':
            return r * _e;
          case 'seconds':
          case 'second':
          case 'secs':
          case 'sec':
          case 's':
            return r * ve;
          case 'milliseconds':
          case 'millisecond':
          case 'msecs':
          case 'msec':
          case 'ms':
            return r;
          default:
            return;
        }
      }
    }
  }
  function Bs(e) {
    var t = Math.abs(e);
    return t >= ue
      ? Math.round(e / ue) + 'd'
      : t >= Ce
      ? Math.round(e / Ce) + 'h'
      : t >= _e
      ? Math.round(e / _e) + 'm'
      : t >= ve
      ? Math.round(e / ve) + 's'
      : e + 'ms';
  }
  function Fs(e) {
    var t = Math.abs(e);
    return t >= ue
      ? $e(e, t, ue, 'day')
      : t >= Ce
      ? $e(e, t, Ce, 'hour')
      : t >= _e
      ? $e(e, t, _e, 'minute')
      : t >= ve
      ? $e(e, t, ve, 'second')
      : e + ' ms';
  }
  function $e(e, t, r, o) {
    var n = t >= r * 1.5;
    return Math.round(e / r) + ' ' + o + (n ? 's' : '');
  }
});
var xt = x((Ea, rn) => {
  'use strict';
  function Ms(e) {
    (r.debug = r),
      (r.default = r),
      (r.coerce = a),
      (r.disable = s),
      (r.enable = n),
      (r.enabled = i),
      (r.humanize = tn()),
      (r.destroy = f),
      Object.keys(e).forEach((c) => {
        r[c] = e[c];
      }),
      (r.names = []),
      (r.skips = []),
      (r.formatters = {});
    function t(c) {
      let l = 0;
      for (let p = 0; p < c.length; p++)
        (l = (l << 5) - l + c.charCodeAt(p)), (l |= 0);
      return r.colors[Math.abs(l) % r.colors.length];
    }
    r.selectColor = t;
    function r(c) {
      let l,
        p = null,
        d,
        h;
      function C(...y) {
        if (!C.enabled) return;
        let U = C,
          T = Number(new Date()),
          I = T - (l || T);
        (U.diff = I),
          (U.prev = l),
          (U.curr = T),
          (l = T),
          (y[0] = r.coerce(y[0])),
          typeof y[0] != 'string' && y.unshift('%O');
        let R = 0;
        (y[0] = y[0].replace(/%([a-zA-Z%])/g, (_, S) => {
          if (_ === '%%') return '%';
          R++;
          let w = r.formatters[S];
          if (typeof w == 'function') {
            let N = y[R];
            (_ = w.call(U, N)), y.splice(R, 1), R--;
          }
          return _;
        })),
          r.formatArgs.call(U, y),
          (U.log || r.log).apply(U, y);
      }
      return (
        (C.namespace = c),
        (C.useColors = r.useColors()),
        (C.color = r.selectColor(c)),
        (C.extend = o),
        (C.destroy = r.destroy),
        Object.defineProperty(C, 'enabled', {
          enumerable: !0,
          configurable: !1,
          get: () =>
            p !== null
              ? p
              : (d !== r.namespaces && ((d = r.namespaces), (h = r.enabled(c))),
                h),
          set: (y) => {
            p = y;
          },
        }),
        typeof r.init == 'function' && r.init(C),
        C
      );
    }
    function o(c, l) {
      let p = r(this.namespace + (typeof l > 'u' ? ':' : l) + c);
      return (p.log = this.log), p;
    }
    function n(c) {
      r.save(c), (r.namespaces = c), (r.names = []), (r.skips = []);
      let l,
        p = (typeof c == 'string' ? c : '').split(/[\s,]+/),
        d = p.length;
      for (l = 0; l < d; l++)
        p[l] &&
          ((c = p[l].replace(/\*/g, '.*?')),
          c[0] === '-'
            ? r.skips.push(new RegExp('^' + c.slice(1) + '$'))
            : r.names.push(new RegExp('^' + c + '$')));
    }
    function s() {
      let c = [...r.names.map(u), ...r.skips.map(u).map((l) => '-' + l)].join(
        ','
      );
      return r.enable(''), c;
    }
    function i(c) {
      if (c[c.length - 1] === '*') return !0;
      let l, p;
      for (l = 0, p = r.skips.length; l < p; l++)
        if (r.skips[l].test(c)) return !1;
      for (l = 0, p = r.names.length; l < p; l++)
        if (r.names[l].test(c)) return !0;
      return !1;
    }
    function u(c) {
      return c
        .toString()
        .substring(2, c.toString().length - 2)
        .replace(/\.\*\?$/, '*');
    }
    function a(c) {
      return c instanceof Error ? c.stack || c.message : c;
    }
    function f() {
      console.warn(
        'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
      );
    }
    return r.enable(r.load()), r;
  }
  rn.exports = Ms;
});
var nn = x((W, Ke) => {
  'use strict';
  W.formatArgs = Ps;
  W.save = qs;
  W.load = ks;
  W.useColors = Ds;
  W.storage = Hs();
  W.destroy = (() => {
    let e = !1;
    return () => {
      e ||
        ((e = !0),
        console.warn(
          'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
        ));
    };
  })();
  W.colors = [
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
  function Ds() {
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
  function Ps(e) {
    if (
      ((e[0] =
        (this.useColors ? '%c' : '') +
        this.namespace +
        (this.useColors ? ' %c' : ' ') +
        e[0] +
        (this.useColors ? '%c ' : ' ') +
        '+' +
        Ke.exports.humanize(this.diff)),
      !this.useColors)
    )
      return;
    let t = 'color: ' + this.color;
    e.splice(1, 0, t, 'color: inherit');
    let r = 0,
      o = 0;
    e[0].replace(/%[a-zA-Z%]/g, (n) => {
      n !== '%%' && (r++, n === '%c' && (o = r));
    }),
      e.splice(o, 0, t);
  }
  W.log = console.debug || console.log || (() => {});
  function qs(e) {
    try {
      e ? W.storage.setItem('debug', e) : W.storage.removeItem('debug');
    } catch {}
  }
  function ks() {
    let e;
    try {
      e = W.storage.getItem('debug');
    } catch {}
    return (
      !e && typeof process < 'u' && 'env' in process && (e = process.env.DEBUG),
      e
    );
  }
  function Hs() {
    try {
      return localStorage;
    } catch {}
  }
  Ke.exports = xt()(W);
  var { formatters: Gs } = Ke.exports;
  Gs.j = function (e) {
    try {
      return JSON.stringify(e);
    } catch (t) {
      return '[UnexpectedJSONParseError]: ' + t.message;
    }
  };
});
var sn = x((ya, on) => {
  'use strict';
  on.exports = (e, t = process.argv) => {
    let r = e.startsWith('-') ? '' : e.length === 1 ? '-' : '--',
      o = t.indexOf(r + e),
      n = t.indexOf('--');
    return o !== -1 && (n === -1 || o < n);
  };
});
var cn = x((Ra, un) => {
  'use strict';
  var js = require('os'),
    an = require('tty'),
    J = sn(),
    { env: M } = process,
    oe;
  J('no-color') || J('no-colors') || J('color=false') || J('color=never')
    ? (oe = 0)
    : (J('color') || J('colors') || J('color=true') || J('color=always')) &&
      (oe = 1);
  'FORCE_COLOR' in M &&
    (M.FORCE_COLOR === 'true'
      ? (oe = 1)
      : M.FORCE_COLOR === 'false'
      ? (oe = 0)
      : (oe =
          M.FORCE_COLOR.length === 0
            ? 1
            : Math.min(parseInt(M.FORCE_COLOR, 10), 3)));
  function It(e) {
    return e === 0
      ? !1
      : { level: e, hasBasic: !0, has256: e >= 2, has16m: e >= 3 };
  }
  function Tt(e, t) {
    if (oe === 0) return 0;
    if (J('color=16m') || J('color=full') || J('color=truecolor')) return 3;
    if (J('color=256')) return 2;
    if (e && !t && oe === void 0) return 0;
    let r = oe || 0;
    if (M.TERM === 'dumb') return r;
    if (process.platform === 'win32') {
      let o = js.release().split('.');
      return Number(o[0]) >= 10 && Number(o[2]) >= 10586
        ? Number(o[2]) >= 14931
          ? 3
          : 2
        : 1;
    }
    if ('CI' in M)
      return [
        'TRAVIS',
        'CIRCLECI',
        'APPVEYOR',
        'GITLAB_CI',
        'GITHUB_ACTIONS',
        'BUILDKITE',
      ].some((o) => o in M) || M.CI_NAME === 'codeship'
        ? 1
        : r;
    if ('TEAMCITY_VERSION' in M)
      return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(M.TEAMCITY_VERSION) ? 1 : 0;
    if (M.COLORTERM === 'truecolor') return 3;
    if ('TERM_PROGRAM' in M) {
      let o = parseInt((M.TERM_PROGRAM_VERSION || '').split('.')[0], 10);
      switch (M.TERM_PROGRAM) {
        case 'iTerm.app':
          return o >= 3 ? 3 : 2;
        case 'Apple_Terminal':
          return 2;
      }
    }
    return /-256(color)?$/i.test(M.TERM)
      ? 2
      : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(
          M.TERM
        ) || 'COLORTERM' in M
      ? 1
      : r;
  }
  function Vs(e) {
    let t = Tt(e, e && e.isTTY);
    return It(t);
  }
  un.exports = {
    supportsColor: Vs,
    stdout: It(Tt(!0, an.isatty(1))),
    stderr: It(Tt(!0, an.isatty(2))),
  };
});
var ln = x((D, ze) => {
  'use strict';
  var Xs = require('tty'),
    We = require('util');
  D.init = Qs;
  D.log = zs;
  D.formatArgs = Ks;
  D.save = Js;
  D.load = Ys;
  D.useColors = $s;
  D.destroy = We.deprecate(() => {},
  'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
  D.colors = [6, 2, 3, 4, 5, 1];
  try {
    let e = cn();
    e &&
      (e.stderr || e).level >= 2 &&
      (D.colors = [
        20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63,
        68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128,
        129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168,
        169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200,
        201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221,
      ]);
  } catch {}
  D.inspectOpts = Object.keys(process.env)
    .filter((e) => /^debug_/i.test(e))
    .reduce((e, t) => {
      let r = t
          .substring(6)
          .toLowerCase()
          .replace(/_([a-z])/g, (n, s) => s.toUpperCase()),
        o = process.env[t];
      return (
        /^(yes|on|true|enabled)$/i.test(o)
          ? (o = !0)
          : /^(no|off|false|disabled)$/i.test(o)
          ? (o = !1)
          : o === 'null'
          ? (o = null)
          : (o = Number(o)),
        (e[r] = o),
        e
      );
    }, {});
  function $s() {
    return 'colors' in D.inspectOpts
      ? !!D.inspectOpts.colors
      : Xs.isatty(process.stderr.fd);
  }
  function Ks(e) {
    let { namespace: t, useColors: r } = this;
    if (r) {
      let o = this.color,
        n = '\x1B[3' + (o < 8 ? o : '8;5;' + o),
        s = `  ${n};1m${t} \x1B[0m`;
      (e[0] =
        s +
        e[0]
          .split(
            `
`
          )
          .join(
            `
` + s
          )),
        e.push(n + 'm+' + ze.exports.humanize(this.diff) + '\x1B[0m');
    } else e[0] = Ws() + t + ' ' + e[0];
  }
  function Ws() {
    return D.inspectOpts.hideDate ? '' : new Date().toISOString() + ' ';
  }
  function zs(...e) {
    return process.stderr.write(
      We.format(...e) +
        `
`
    );
  }
  function Js(e) {
    e ? (process.env.DEBUG = e) : delete process.env.DEBUG;
  }
  function Ys() {
    return process.env.DEBUG;
  }
  function Qs(e) {
    e.inspectOpts = {};
    let t = Object.keys(D.inspectOpts);
    for (let r = 0; r < t.length; r++)
      e.inspectOpts[t[r]] = D.inspectOpts[t[r]];
  }
  ze.exports = xt()(D);
  var { formatters: fn } = ze.exports;
  fn.o = function (e) {
    return (
      (this.inspectOpts.colors = this.useColors),
      We.inspect(e, this.inspectOpts)
        .split(
          `
`
        )
        .map((t) => t.trim())
        .join(' ')
    );
  };
  fn.O = function (e) {
    return (
      (this.inspectOpts.colors = this.useColors),
      We.inspect(e, this.inspectOpts)
    );
  };
});
var pn = x((ga, Ot) => {
  'use strict';
  typeof process > 'u' ||
  process.type === 'renderer' ||
  process.browser === !0 ||
  process.__nwjs
    ? (Ot.exports = nn())
    : (Ot.exports = ln());
});
var hn = x((xa, dn) => {
  'use strict';
  var Oe;
  dn.exports = function () {
    if (!Oe) {
      try {
        Oe = pn()('follow-redirects');
      } catch {}
      typeof Oe != 'function' && (Oe = function () {});
    }
    Oe.apply(null, arguments);
  };
});
var Bt = x((Ia, Lt) => {
  'use strict';
  var ce = require('url'),
    wt = ce.URL,
    Zs = require('http'),
    ei = require('https'),
    St = require('stream').Writable,
    _n = require('assert'),
    Cn = hn(),
    Ut = ['abort', 'aborted', 'connect', 'error', 'socket', 'timeout'],
    Nt = Object.create(null);
  Ut.forEach(function (e) {
    Nt[e] = function (t, r, o) {
      this._redirectable.emit(e, t, r, o);
    };
  });
  var ti = be('ERR_INVALID_URL', 'Invalid URL', TypeError),
    mn = be('ERR_FR_REDIRECTION_FAILURE', 'Redirected request failed'),
    ri = be(
      'ERR_FR_TOO_MANY_REDIRECTS',
      'Maximum number of redirects exceeded'
    ),
    ni = be(
      'ERR_FR_MAX_BODY_LENGTH_EXCEEDED',
      'Request body larger than maxBodyLength limit'
    ),
    oi = be('ERR_STREAM_WRITE_AFTER_END', 'write after end'),
    si = St.prototype.destroy || yn;
  function $(e, t) {
    St.call(this),
      this._sanitizeOptions(e),
      (this._options = e),
      (this._ended = !1),
      (this._ending = !1),
      (this._redirectCount = 0),
      (this._redirects = []),
      (this._requestBodyLength = 0),
      (this._requestBodyBuffers = []),
      t && this.on('response', t);
    var r = this;
    (this._onNativeResponse = function (o) {
      r._processResponse(o);
    }),
      this._performRequest();
  }
  $.prototype = Object.create(St.prototype);
  $.prototype.abort = function () {
    At(this._currentRequest), this._currentRequest.abort(), this.emit('abort');
  };
  $.prototype.destroy = function (e) {
    return At(this._currentRequest, e), si.call(this, e), this;
  };
  $.prototype.write = function (e, t, r) {
    if (this._ending) throw new oi();
    if (!fe(e) && !ai(e))
      throw new TypeError('data should be a string, Buffer or Uint8Array');
    if ((we(t) && ((r = t), (t = null)), e.length === 0)) {
      r && r();
      return;
    }
    this._requestBodyLength + e.length <= this._options.maxBodyLength
      ? ((this._requestBodyLength += e.length),
        this._requestBodyBuffers.push({ data: e, encoding: t }),
        this._currentRequest.write(e, t, r))
      : (this.emit('error', new ni()), this.abort());
  };
  $.prototype.end = function (e, t, r) {
    if (
      (we(e) ? ((r = e), (e = t = null)) : we(t) && ((r = t), (t = null)), !e)
    )
      (this._ended = this._ending = !0),
        this._currentRequest.end(null, null, r);
    else {
      var o = this,
        n = this._currentRequest;
      this.write(e, t, function () {
        (o._ended = !0), n.end(null, null, r);
      }),
        (this._ending = !0);
    }
  };
  $.prototype.setHeader = function (e, t) {
    (this._options.headers[e] = t), this._currentRequest.setHeader(e, t);
  };
  $.prototype.removeHeader = function (e) {
    delete this._options.headers[e], this._currentRequest.removeHeader(e);
  };
  $.prototype.setTimeout = function (e, t) {
    var r = this;
    function o(i) {
      i.setTimeout(e),
        i.removeListener('timeout', i.destroy),
        i.addListener('timeout', i.destroy);
    }
    function n(i) {
      r._timeout && clearTimeout(r._timeout),
        (r._timeout = setTimeout(function () {
          r.emit('timeout'), s();
        }, e)),
        o(i);
    }
    function s() {
      r._timeout && (clearTimeout(r._timeout), (r._timeout = null)),
        r.removeListener('abort', s),
        r.removeListener('error', s),
        r.removeListener('response', s),
        r.removeListener('close', s),
        t && r.removeListener('timeout', t),
        r.socket || r._currentRequest.removeListener('socket', n);
    }
    return (
      t && this.on('timeout', t),
      this.socket ? n(this.socket) : this._currentRequest.once('socket', n),
      this.on('socket', o),
      this.on('abort', s),
      this.on('error', s),
      this.on('response', s),
      this.on('close', s),
      this
    );
  };
  ['flushHeaders', 'getHeader', 'setNoDelay', 'setSocketKeepAlive'].forEach(
    function (e) {
      $.prototype[e] = function (t, r) {
        return this._currentRequest[e](t, r);
      };
    }
  );
  ['aborted', 'connection', 'socket'].forEach(function (e) {
    Object.defineProperty($.prototype, e, {
      get: function () {
        return this._currentRequest[e];
      },
    });
  });
  $.prototype._sanitizeOptions = function (e) {
    if (
      (e.headers || (e.headers = {}),
      e.host && (e.hostname || (e.hostname = e.host), delete e.host),
      !e.pathname && e.path)
    ) {
      var t = e.path.indexOf('?');
      t < 0
        ? (e.pathname = e.path)
        : ((e.pathname = e.path.substring(0, t)),
          (e.search = e.path.substring(t)));
    }
  };
  $.prototype._performRequest = function () {
    var e = this._options.protocol,
      t = this._options.nativeProtocols[e];
    if (!t) {
      this.emit('error', new TypeError('Unsupported protocol ' + e));
      return;
    }
    if (this._options.agents) {
      var r = e.slice(0, -1);
      this._options.agent = this._options.agents[r];
    }
    var o = (this._currentRequest = t.request(
      this._options,
      this._onNativeResponse
    ));
    o._redirectable = this;
    for (var n of Ut) o.on(n, Nt[n]);
    if (
      ((this._currentUrl = /^\//.test(this._options.path)
        ? ce.format(this._options)
        : this._options.path),
      this._isRedirect)
    ) {
      var s = 0,
        i = this,
        u = this._requestBodyBuffers;
      (function a(f) {
        if (o === i._currentRequest)
          if (f) i.emit('error', f);
          else if (s < u.length) {
            var c = u[s++];
            o.finished || o.write(c.data, c.encoding, a);
          } else i._ended && o.end();
      })();
    }
  };
  $.prototype._processResponse = function (e) {
    var t = e.statusCode;
    this._options.trackRedirects &&
      this._redirects.push({
        url: this._currentUrl,
        headers: e.headers,
        statusCode: t,
      });
    var r = e.headers.location;
    if (!r || this._options.followRedirects === !1 || t < 300 || t >= 400) {
      (e.responseUrl = this._currentUrl),
        (e.redirects = this._redirects),
        this.emit('response', e),
        (this._requestBodyBuffers = []);
      return;
    }
    if (
      (At(this._currentRequest),
      e.destroy(),
      ++this._redirectCount > this._options.maxRedirects)
    ) {
      this.emit('error', new ri());
      return;
    }
    var o,
      n = this._options.beforeRedirect;
    n &&
      (o = Object.assign(
        { Host: e.req.getHeader('host') },
        this._options.headers
      ));
    var s = this._options.method;
    (((t === 301 || t === 302) && this._options.method === 'POST') ||
      (t === 303 && !/^(?:GET|HEAD)$/.test(this._options.method))) &&
      ((this._options.method = 'GET'),
      (this._requestBodyBuffers = []),
      bt(/^content-/i, this._options.headers));
    var i = bt(/^host$/i, this._options.headers),
      u = ce.parse(this._currentUrl),
      a = i || u.host,
      f = /^\w+:/.test(r)
        ? this._currentUrl
        : ce.format(Object.assign(u, { host: a })),
      c;
    try {
      c = ce.resolve(f, r);
    } catch (h) {
      this.emit('error', new mn({ cause: h }));
      return;
    }
    Cn('redirecting to', c), (this._isRedirect = !0);
    var l = ce.parse(c);
    if (
      (Object.assign(this._options, l),
      ((l.protocol !== u.protocol && l.protocol !== 'https:') ||
        (l.host !== a && !ii(l.host, a))) &&
        bt(/^(?:authorization|cookie)$/i, this._options.headers),
      we(n))
    ) {
      var p = { headers: e.headers, statusCode: t },
        d = { url: f, method: s, headers: o };
      try {
        n(this._options, p, d);
      } catch (h) {
        this.emit('error', h);
        return;
      }
      this._sanitizeOptions(this._options);
    }
    try {
      this._performRequest();
    } catch (h) {
      this.emit('error', new mn({ cause: h }));
    }
  };
  function En(e) {
    var t = { maxRedirects: 21, maxBodyLength: 10485760 },
      r = {};
    return (
      Object.keys(e).forEach(function (o) {
        var n = o + ':',
          s = (r[n] = e[o]),
          i = (t[o] = Object.create(s));
        function u(f, c, l) {
          if (fe(f)) {
            var p;
            try {
              p = vn(new wt(f));
            } catch {
              p = ce.parse(f);
            }
            if (!fe(p.protocol)) throw new ti({ input: f });
            f = p;
          } else wt && f instanceof wt ? (f = vn(f)) : ((l = c), (c = f), (f = { protocol: n }));
          return (
            we(c) && ((l = c), (c = null)),
            (c = Object.assign(
              { maxRedirects: t.maxRedirects, maxBodyLength: t.maxBodyLength },
              f,
              c
            )),
            (c.nativeProtocols = r),
            !fe(c.host) && !fe(c.hostname) && (c.hostname = '::1'),
            _n.equal(c.protocol, n, 'protocol mismatch'),
            Cn('options', c),
            new $(c, l)
          );
        }
        function a(f, c, l) {
          var p = i.request(f, c, l);
          return p.end(), p;
        }
        Object.defineProperties(i, {
          request: { value: u, configurable: !0, enumerable: !0, writable: !0 },
          get: { value: a, configurable: !0, enumerable: !0, writable: !0 },
        });
      }),
      t
    );
  }
  function yn() {}
  function vn(e) {
    var t = {
      protocol: e.protocol,
      hostname: e.hostname.startsWith('[')
        ? e.hostname.slice(1, -1)
        : e.hostname,
      hash: e.hash,
      search: e.search,
      pathname: e.pathname,
      path: e.pathname + e.search,
      href: e.href,
    };
    return e.port !== '' && (t.port = Number(e.port)), t;
  }
  function bt(e, t) {
    var r;
    for (var o in t) e.test(o) && ((r = t[o]), delete t[o]);
    return r === null || typeof r > 'u' ? void 0 : String(r).trim();
  }
  function be(e, t, r) {
    function o(n) {
      Error.captureStackTrace(this, this.constructor),
        Object.assign(this, n || {}),
        (this.code = e),
        (this.message = this.cause ? t + ': ' + this.cause.message : t);
    }
    return (
      (o.prototype = new (r || Error)()),
      (o.prototype.constructor = o),
      (o.prototype.name = 'Error [' + e + ']'),
      o
    );
  }
  function At(e, t) {
    for (var r of Ut) e.removeListener(r, Nt[r]);
    e.on('error', yn), e.destroy(t);
  }
  function ii(e, t) {
    _n(fe(e) && fe(t));
    var r = e.length - t.length - 1;
    return r > 0 && e[r] === '.' && e.endsWith(t);
  }
  function fe(e) {
    return typeof e == 'string' || e instanceof String;
  }
  function we(e) {
    return typeof e == 'function';
  }
  function ai(e) {
    return typeof e == 'object' && 'length' in e;
  }
  Lt.exports = En({ http: Zs, https: ei });
  Lt.exports.wrap = En;
});
var Ft = x((Ta, ui) => {
  ui.exports = {
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
var On = x((Oa, Tn) => {
  'use strict';
  var Se = H(),
    Rn = Et(),
    ci = yt(),
    fi = ke(),
    li = require('http'),
    pi = require('https'),
    di = Bt().http,
    hi = Bt().https,
    gn = require('url'),
    mi = require('zlib'),
    vi = Ft(),
    Je = je(),
    Mt = Ge(),
    xn = /https:?/;
  function In(e, t, r) {
    if (
      ((e.hostname = t.host),
      (e.host = t.host),
      (e.port = t.port),
      (e.path = r),
      t.auth)
    ) {
      var o = Buffer.from(
        t.auth.username + ':' + t.auth.password,
        'utf8'
      ).toString('base64');
      e.headers['Proxy-Authorization'] = 'Basic ' + o;
    }
    e.beforeRedirect = function (s) {
      (s.headers.host = s.host), In(s, t, s.href);
    };
  }
  Tn.exports = function (t) {
    return new Promise(function (o, n) {
      var s = function (g) {
          o(g);
        },
        i = function (g) {
          n(g);
        },
        u = t.data,
        a = t.headers;
      if (
        ('User-Agent' in a || 'user-agent' in a
          ? !a['User-Agent'] &&
            !a['user-agent'] &&
            (delete a['User-Agent'], delete a['user-agent'])
          : (a['User-Agent'] = 'axios/' + vi.version),
        u && !Se.isStream(u))
      ) {
        if (!Buffer.isBuffer(u))
          if (Se.isArrayBuffer(u)) u = Buffer.from(new Uint8Array(u));
          else if (Se.isString(u)) u = Buffer.from(u, 'utf-8');
          else
            return i(
              Je(
                'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',
                t
              )
            );
        a['Content-Length'] = u.length;
      }
      var f = void 0;
      if (t.auth) {
        var c = t.auth.username || '',
          l = t.auth.password || '';
        f = c + ':' + l;
      }
      var p = ci(t.baseURL, t.url),
        d = gn.parse(p),
        h = d.protocol || 'http:';
      if (!f && d.auth) {
        var C = d.auth.split(':'),
          y = C[0] || '',
          U = C[1] || '';
        f = y + ':' + U;
      }
      f && delete a.Authorization;
      var T = xn.test(h),
        I = T ? t.httpsAgent : t.httpAgent,
        R = {
          path: fi(d.path, t.params, t.paramsSerializer).replace(/^\?/, ''),
          method: t.method.toUpperCase(),
          headers: a,
          agent: I,
          agents: { http: t.httpAgent, https: t.httpsAgent },
          auth: f,
        };
      t.socketPath
        ? (R.socketPath = t.socketPath)
        : ((R.hostname = d.hostname), (R.port = d.port));
      var b = t.proxy;
      if (!b && b !== !1) {
        var _ = h.slice(0, -1) + '_proxy',
          S = process.env[_] || process.env[_.toUpperCase()];
        if (S) {
          var w = gn.parse(S),
            N = process.env.no_proxy || process.env.NO_PROXY,
            L = !0;
          if (N) {
            var K = N.split(',').map(function (g) {
              return g.trim();
            });
            L = !K.some(function (g) {
              return g
                ? g === '*' ||
                  (g[0] === '.' &&
                    d.hostname.substr(d.hostname.length - g.length) === g)
                  ? !0
                  : d.hostname === g
                : !1;
            });
          }
          if (
            L &&
            ((b = { host: w.hostname, port: w.port, protocol: w.protocol }),
            w.auth)
          ) {
            var j = w.auth.split(':');
            b.auth = { username: j[0], password: j[1] };
          }
        }
      }
      b &&
        ((R.headers.host = d.hostname + (d.port ? ':' + d.port : '')),
        In(
          R,
          b,
          h + '//' + d.hostname + (d.port ? ':' + d.port : '') + R.path
        ));
      var B,
        z = T && (b ? xn.test(b.protocol) : !0);
      t.transport
        ? (B = t.transport)
        : t.maxRedirects === 0
        ? (B = z ? pi : li)
        : (t.maxRedirects && (R.maxRedirects = t.maxRedirects),
          (B = z ? hi : di)),
        t.maxBodyLength > -1 && (R.maxBodyLength = t.maxBodyLength);
      var A = B.request(R, function (g) {
        if (!A.aborted) {
          var P = g,
            F = g.req || A;
          if (
            g.statusCode !== 204 &&
            F.method !== 'HEAD' &&
            t.decompress !== !1
          )
            switch (g.headers['content-encoding']) {
              case 'gzip':
              case 'compress':
              case 'deflate':
                (P = P.pipe(mi.createUnzip())),
                  delete g.headers['content-encoding'];
                break;
            }
          var Z = {
            status: g.statusCode,
            statusText: g.statusMessage,
            headers: g.headers,
            config: t,
            request: F,
          };
          if (t.responseType === 'stream') (Z.data = P), Rn(s, i, Z);
          else {
            var m = [],
              v = 0;
            P.on('data', function (O) {
              m.push(O),
                (v += O.length),
                t.maxContentLength > -1 &&
                  v > t.maxContentLength &&
                  (P.destroy(),
                  i(
                    Je(
                      'maxContentLength size of ' +
                        t.maxContentLength +
                        ' exceeded',
                      t,
                      null,
                      F
                    )
                  ));
            }),
              P.on('error', function (O) {
                A.aborted || i(Mt(O, t, null, F));
              }),
              P.on('end', function () {
                var O = Buffer.concat(m);
                t.responseType !== 'arraybuffer' &&
                  ((O = O.toString(t.responseEncoding)),
                  (!t.responseEncoding || t.responseEncoding === 'utf8') &&
                    (O = Se.stripBOM(O))),
                  (Z.data = O),
                  Rn(s, i, Z);
              });
          }
        }
      });
      if (
        (A.on('error', function (g) {
          (A.aborted && g.code !== 'ERR_FR_TOO_MANY_REDIRECTS') ||
            i(Mt(g, t, null, A));
        }),
        t.timeout)
      ) {
        var Y = parseInt(t.timeout, 10);
        if (isNaN(Y)) {
          i(
            Je(
              'error trying to parse `config.timeout` to int',
              t,
              'ERR_PARSE_TIMEOUT',
              A
            )
          );
          return;
        }
        A.setTimeout(Y, function () {
          A.abort(),
            i(
              Je(
                'timeout of ' + Y + 'ms exceeded',
                t,
                t.transitional && t.transitional.clarifyTimeoutError
                  ? 'ETIMEDOUT'
                  : 'ECONNABORTED',
                A
              )
            );
        });
      }
      t.cancelToken &&
        t.cancelToken.promise.then(function (g) {
          A.aborted || (A.abort(), i(g));
        }),
        Se.isStream(u)
          ? u
              .on('error', function (g) {
                i(Mt(g, t, null, A));
              })
              .pipe(A)
          : A.end(u);
    });
  };
});
var Qe = x((wa, Sn) => {
  'use strict';
  var G = H(),
    wn = Mr(),
    _i = Ge(),
    Ci = { 'Content-Type': 'application/x-www-form-urlencoded' };
  function bn(e, t) {
    !G.isUndefined(e) &&
      G.isUndefined(e['Content-Type']) &&
      (e['Content-Type'] = t);
  }
  function Ei() {
    var e;
    return (
      typeof XMLHttpRequest < 'u'
        ? (e = Zr())
        : typeof process < 'u' &&
          Object.prototype.toString.call(process) === '[object process]' &&
          (e = On()),
      e
    );
  }
  var Ye = {
    transitional: {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1,
    },
    adapter: Ei(),
    transformRequest: [
      function (t, r) {
        return (
          wn(r, 'Accept'),
          wn(r, 'Content-Type'),
          G.isFormData(t) ||
          G.isArrayBuffer(t) ||
          G.isBuffer(t) ||
          G.isStream(t) ||
          G.isFile(t) ||
          G.isBlob(t)
            ? t
            : G.isArrayBufferView(t)
            ? t.buffer
            : G.isURLSearchParams(t)
            ? (bn(r, 'application/x-www-form-urlencoded;charset=utf-8'),
              t.toString())
            : G.isObject(t) || (r && r['Content-Type'] === 'application/json')
            ? (bn(r, 'application/json'), JSON.stringify(t))
            : t
        );
      },
    ],
    transformResponse: [
      function (t) {
        var r = this.transitional,
          o = r && r.silentJSONParsing,
          n = r && r.forcedJSONParsing,
          s = !o && this.responseType === 'json';
        if (s || (n && G.isString(t) && t.length))
          try {
            return JSON.parse(t);
          } catch (i) {
            if (s)
              throw i.name === 'SyntaxError' ? _i(i, this, 'E_JSON_PARSE') : i;
          }
        return t;
      },
    ],
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    validateStatus: function (t) {
      return t >= 200 && t < 300;
    },
  };
  Ye.headers = { common: { Accept: 'application/json, text/plain, */*' } };
  G.forEach(['delete', 'get', 'head'], function (t) {
    Ye.headers[t] = {};
  });
  G.forEach(['post', 'put', 'patch'], function (t) {
    Ye.headers[t] = G.merge(Ci);
  });
  Sn.exports = Ye;
});
var Nn = x((ba, Un) => {
  'use strict';
  var yi = H(),
    Ri = Qe();
  Un.exports = function (t, r, o) {
    var n = this || Ri;
    return (
      yi.forEach(o, function (i) {
        t = i.call(n, t, r);
      }),
      t
    );
  };
});
var Dt = x((Sa, An) => {
  'use strict';
  An.exports = function (t) {
    return !!(t && t.__CANCEL__);
  };
});
var Fn = x((Ua, Bn) => {
  'use strict';
  var Ln = H(),
    Pt = Nn(),
    gi = Dt(),
    xi = Qe();
  function qt(e) {
    e.cancelToken && e.cancelToken.throwIfRequested();
  }
  Bn.exports = function (t) {
    qt(t),
      (t.headers = t.headers || {}),
      (t.data = Pt.call(t, t.data, t.headers, t.transformRequest)),
      (t.headers = Ln.merge(
        t.headers.common || {},
        t.headers[t.method] || {},
        t.headers
      )),
      Ln.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        function (n) {
          delete t.headers[n];
        }
      );
    var r = t.adapter || xi.adapter;
    return r(t).then(
      function (n) {
        return (
          qt(t),
          (n.data = Pt.call(t, n.data, n.headers, t.transformResponse)),
          n
        );
      },
      function (n) {
        return (
          gi(n) ||
            (qt(t),
            n &&
              n.response &&
              (n.response.data = Pt.call(
                t,
                n.response.data,
                n.response.headers,
                t.transformResponse
              ))),
          Promise.reject(n)
        );
      }
    );
  };
});
var kt = x((Na, Mn) => {
  'use strict';
  var k = H();
  Mn.exports = function (t, r) {
    r = r || {};
    var o = {},
      n = ['url', 'method', 'data'],
      s = ['headers', 'auth', 'proxy', 'params'],
      i = [
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
      u = ['validateStatus'];
    function a(p, d) {
      return k.isPlainObject(p) && k.isPlainObject(d)
        ? k.merge(p, d)
        : k.isPlainObject(d)
        ? k.merge({}, d)
        : k.isArray(d)
        ? d.slice()
        : d;
    }
    function f(p) {
      k.isUndefined(r[p])
        ? k.isUndefined(t[p]) || (o[p] = a(void 0, t[p]))
        : (o[p] = a(t[p], r[p]));
    }
    k.forEach(n, function (d) {
      k.isUndefined(r[d]) || (o[d] = a(void 0, r[d]));
    }),
      k.forEach(s, f),
      k.forEach(i, function (d) {
        k.isUndefined(r[d])
          ? k.isUndefined(t[d]) || (o[d] = a(void 0, t[d]))
          : (o[d] = a(void 0, r[d]));
      }),
      k.forEach(u, function (d) {
        d in r ? (o[d] = a(t[d], r[d])) : d in t && (o[d] = a(void 0, t[d]));
      });
    var c = n.concat(s).concat(i).concat(u),
      l = Object.keys(t)
        .concat(Object.keys(r))
        .filter(function (d) {
          return c.indexOf(d) === -1;
        });
    return k.forEach(l, f), o;
  };
});
var Hn = x((Aa, kn) => {
  'use strict';
  var Pn = Ft(),
    Ht = {};
  ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
    function (e, t) {
      Ht[e] = function (o) {
        return typeof o === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
      };
    }
  );
  var Dn = {},
    Ii = Pn.version.split('.');
  function qn(e, t) {
    for (var r = t ? t.split('.') : Ii, o = e.split('.'), n = 0; n < 3; n++) {
      if (r[n] > o[n]) return !0;
      if (r[n] < o[n]) return !1;
    }
    return !1;
  }
  Ht.transitional = function (t, r, o) {
    var n = r && qn(r);
    function s(i, u) {
      return (
        '[Axios v' +
        Pn.version +
        "] Transitional option '" +
        i +
        "'" +
        u +
        (o ? '. ' + o : '')
      );
    }
    return function (i, u, a) {
      if (t === !1) throw new Error(s(u, ' has been removed in ' + r));
      return (
        n &&
          !Dn[u] &&
          ((Dn[u] = !0),
          console.warn(
            s(
              u,
              ' has been deprecated since v' +
                r +
                ' and will be removed in the near future'
            )
          )),
        t ? t(i, u, a) : !0
      );
    };
  };
  function Ti(e, t, r) {
    if (typeof e != 'object') throw new TypeError('options must be an object');
    for (var o = Object.keys(e), n = o.length; n-- > 0; ) {
      var s = o[n],
        i = t[s];
      if (i) {
        var u = e[s],
          a = u === void 0 || i(u, s, e);
        if (a !== !0) throw new TypeError('option ' + s + ' must be ' + a);
        continue;
      }
      if (r !== !0) throw Error('Unknown option ' + s);
    }
  }
  kn.exports = { isOlderVersion: qn, assertOptions: Ti, validators: Ht };
});
var Kn = x((La, $n) => {
  'use strict';
  var Vn = H(),
    Oi = ke(),
    Gn = Br(),
    jn = Fn(),
    Ze = kt(),
    Xn = Hn(),
    Ee = Xn.validators;
  function Ue(e) {
    (this.defaults = e),
      (this.interceptors = { request: new Gn(), response: new Gn() });
  }
  Ue.prototype.request = function (t) {
    typeof t == 'string'
      ? ((t = arguments[1] || {}), (t.url = arguments[0]))
      : (t = t || {}),
      (t = Ze(this.defaults, t)),
      t.method
        ? (t.method = t.method.toLowerCase())
        : this.defaults.method
        ? (t.method = this.defaults.method.toLowerCase())
        : (t.method = 'get');
    var r = t.transitional;
    r !== void 0 &&
      Xn.assertOptions(
        r,
        {
          silentJSONParsing: Ee.transitional(Ee.boolean, '1.0.0'),
          forcedJSONParsing: Ee.transitional(Ee.boolean, '1.0.0'),
          clarifyTimeoutError: Ee.transitional(Ee.boolean, '1.0.0'),
        },
        !1
      );
    var o = [],
      n = !0;
    this.interceptors.request.forEach(function (p) {
      (typeof p.runWhen == 'function' && p.runWhen(t) === !1) ||
        ((n = n && p.synchronous), o.unshift(p.fulfilled, p.rejected));
    });
    var s = [];
    this.interceptors.response.forEach(function (p) {
      s.push(p.fulfilled, p.rejected);
    });
    var i;
    if (!n) {
      var u = [jn, void 0];
      for (
        Array.prototype.unshift.apply(u, o),
          u.concat(s),
          i = Promise.resolve(t);
        u.length;

      )
        i = i.then(u.shift(), u.shift());
      return i;
    }
    for (var a = t; o.length; ) {
      var f = o.shift(),
        c = o.shift();
      try {
        a = f(a);
      } catch (l) {
        c(l);
        break;
      }
    }
    try {
      i = jn(a);
    } catch (l) {
      return Promise.reject(l);
    }
    for (; s.length; ) i = i.then(s.shift(), s.shift());
    return i;
  };
  Ue.prototype.getUri = function (t) {
    return (
      (t = Ze(this.defaults, t)),
      Oi(t.url, t.params, t.paramsSerializer).replace(/^\?/, '')
    );
  };
  Vn.forEach(['delete', 'get', 'head', 'options'], function (t) {
    Ue.prototype[t] = function (r, o) {
      return this.request(
        Ze(o || {}, { method: t, url: r, data: (o || {}).data })
      );
    };
  });
  Vn.forEach(['post', 'put', 'patch'], function (t) {
    Ue.prototype[t] = function (r, o, n) {
      return this.request(Ze(n || {}, { method: t, url: r, data: o }));
    };
  });
  $n.exports = Ue;
});
var jt = x((Ba, Wn) => {
  'use strict';
  function Gt(e) {
    this.message = e;
  }
  Gt.prototype.toString = function () {
    return 'Cancel' + (this.message ? ': ' + this.message : '');
  };
  Gt.prototype.__CANCEL__ = !0;
  Wn.exports = Gt;
});
var Jn = x((Fa, zn) => {
  'use strict';
  var wi = jt();
  function et(e) {
    if (typeof e != 'function')
      throw new TypeError('executor must be a function.');
    var t;
    this.promise = new Promise(function (n) {
      t = n;
    });
    var r = this;
    e(function (n) {
      r.reason || ((r.reason = new wi(n)), t(r.reason));
    });
  }
  et.prototype.throwIfRequested = function () {
    if (this.reason) throw this.reason;
  };
  et.source = function () {
    var t,
      r = new et(function (n) {
        t = n;
      });
    return { token: r, cancel: t };
  };
  zn.exports = et;
});
var Qn = x((Ma, Yn) => {
  'use strict';
  Yn.exports = function (t) {
    return function (o) {
      return t.apply(null, o);
    };
  };
});
var eo = x((Da, Zn) => {
  'use strict';
  Zn.exports = function (t) {
    return typeof t == 'object' && t.isAxiosError === !0;
  };
});
var no = x((Pa, Vt) => {
  'use strict';
  var to = H(),
    bi = ht(),
    tt = Kn(),
    Si = kt(),
    Ui = Qe();
  function ro(e) {
    var t = new tt(e),
      r = bi(tt.prototype.request, t);
    return to.extend(r, tt.prototype, t), to.extend(r, t), r;
  }
  var Q = ro(Ui);
  Q.Axios = tt;
  Q.create = function (t) {
    return ro(Si(Q.defaults, t));
  };
  Q.Cancel = jt();
  Q.CancelToken = Jn();
  Q.isCancel = Dt();
  Q.all = function (t) {
    return Promise.all(t);
  };
  Q.spread = Qn();
  Q.isAxiosError = eo();
  Vt.exports = Q;
  Vt.exports.default = Q;
});
var so = x((qa, oo) => {
  'use strict';
  oo.exports = no();
});
function $t(e, t = 1e4) {
  let r = (s) => s,
    o = process.env.NX_CLOUD_API || e.url || 'https://cloud.nx.app',
    n = Ie ? Ie : e.accessToken;
  if (!n)
    throw new Error(
      'Unable to authenticate. Either define accessToken in nx.json or set the NX_CLOUD_ACCESS_TOKEN env variable.'
    );
  if (e.customProxyConfigPath) {
    let { nxCloudProxyConfig: s } = require((0, ao.join)(
      process.cwd(),
      e.customProxyConfigPath
    ));
    r = s ?? r;
  }
  return Ni.create(
    r({
      baseURL: o,
      timeout: Pe ? ft : t,
      headers: {
        authorization: n,
        'Nx-Cloud-Client-Version': e.clientVersion || 'unknown',
      },
    })
  );
}
async function nt(e, t = xe) {
  try {
    return await e();
  } catch (r) {
    let o = (r.response && r.response.status) || r.code;
    (o === 401 || o === 403) && (t = 0);
    let n = r.response
      ? r.response.data.message
        ? r.response.data.message
        : r.response.data
      : r.message;
    if (t === 0)
      throw (
        (typeof n != 'string' && (n = r.message),
        new Xt(
          'failure',
          `Error when connecting to Nx Cloud. Code: ${o}. Error: ${n}`,
          r
        ))
      );
    if (o == 429) {
      if (!rt) {
        let s = 1e4 + (xe + 1 - t) * 6e4 * Math.random();
        io.note({ title: `Received Code ${o}. ${n} Retrying in ${s}ms.` }),
          (rt = dt(s));
      }
      await rt, (rt = null);
    } else {
      let s = 1e3 + (xe + 1 - t) * 4e3 * Math.random();
      X && io.note({ title: `Received Code ${o}. Retrying in ${s}ms.` }),
        await dt(s);
    }
    return nt(e, t - 1);
  }
}
var ao,
  io,
  Ni,
  Xt,
  rt,
  Kt = te(() => {
    'use strict';
    ao = require('path');
    he();
    Or();
    ({ output: io } = de()),
      (Ni = so()),
      (Xt = class {
        constructor(t, r, o) {
          this.type = t;
          this.message = r;
          this.axiosException = o;
        }
      });
    rt = null;
  });
function zt() {
  for (let e of Object.values(Ai))
    if (e.detectorFn(process.env)) {
      let t = e.contextRetrieverFn(process.env);
      return (
        X && console.log(JSON.stringify(t, null, 2)),
        { ...t, inferredFromTaskRunner: !0 }
      );
    }
  return X && console.log('[Nx Cloud] Did not identify a VCS platform.'), null;
}
function Li(e) {
  return e.CIRCLECI === 'true';
}
function Bi(e) {
  X && console.log('[Nx Cloud] Detected Env: CircleCI');
  let t = (o) => {
      if (o.CIRCLE_PR_NUMBER !== void 0) return o.CIRCLE_PR_NUMBER;
      if (o.CIRCLE_PULL_REQUEST !== void 0) {
        let n = o.CIRCLE_PULL_REQUEST.split('/');
        return n[n.length - 1];
      }
      return o.CIRCLE_BRANCH !== void 0 ? o.CIRCLE_BRANCH : 'unknown';
    },
    r = (o) =>
      o.CIRCLE_USERNAME !== void 0
        ? o.CIRCLE_USERNAME
        : o.CIRCLE_PR_USERNAME
        ? o.CIRCLE_PR_USERNAME
        : null;
  return {
    branch: t(e),
    ref: e.CIRCLE_BRANCH ?? null,
    title: Jt(),
    headSha: e.CIRCLE_SHA1 ?? 'unknown',
    baseSha: null,
    commitLink: e.CIRCLE_PULL_REQUEST ?? null,
    author: r(e),
    authorUrl: null,
    authorAvatarUrl: null,
  };
}
function Fi(e) {
  return e.TRAVIS === 'true';
}
function Mi(e) {
  return (
    X && console.log('[Nx Cloud] Detected Env: TravisCI'),
    {
      branch: ((r) =>
        r.TRAVIS_EVENT_TYPE === 'pull_request'
          ? r.TRAVIS_PULL_REQUEST
          : r.TRAVIS_BRANCH)(e),
      ref: null,
      title: e.TRAVIS_COMMIT_MESSAGE,
      headSha: e.TRAVIS_COMMIT ?? 'unknown',
      baseSha: null,
      commitLink: null,
      author: uo(),
      authorUrl: null,
      authorAvatarUrl: null,
    }
  );
}
function Di(e) {
  return e.GITHUB_ACTIONS === 'true';
}
function Pi(e) {
  X && console.log('[Nx Cloud] Detected Env: GitHub Actions');
  let t = (n) => {
      if (n.GITHUB_REF) {
        let s = n.GITHUB_REF.match(/refs\/pull\/(\d+)\/merge/);
        if (s) return s[1];
      }
      return n.GITHUB_HEAD_REF
        ? n.GITHUB_HEAD_REF
        : n.GITHUB_REF_NAME
        ? n.GITHUB_REF_NAME
        : 'unknown';
    },
    r = (n) => {
      let s = `${n.GITHUB_SERVER_URL}/${n.GITHUB_REPOSITORY}`;
      return n.GITHUB_EVENT_NAME === 'pull_request'
        ? `${s}/pull/${t(n)}`
        : `${s}/commit/${n.GITHUB_SHA}`;
    },
    o = (n) =>
      n.GITHUB_HEAD_REF
        ? n.GITHUB_HEAD_REF
        : n.GITHUB_REF
        ? n.GITHUB_REF
        : null;
  return {
    branch: t(e),
    ref: o(e),
    title: Jt(),
    headSha: e.GITHUB_SHA ?? 'unknown',
    baseSha: null,
    commitLink: r(e),
    author: e.GITHUB_ACTOR ?? null,
    authorUrl: `https://github.com/${e.GITHUB_ACTOR}`,
    authorAvatarUrl: `https://avatars.githubusercontent.com/u/${e.GITHUB_ACTOR_ID}`,
  };
}
function qi(e) {
  return e.BITBUCKET_BUILD_NUMBER != null;
}
function ki(e) {
  return (
    X && console.log('[Nx Cloud] Detected Env: BitBucket Pipelines'),
    {
      branch: e.BITBUCKET_PR_ID ?? e.BITBUCKET_BRANCH ?? 'unknown',
      ref: null,
      title: Jt(),
      headSha: e.BITBUCKET_COMMIT ?? 'unknown',
      baseSha: null,
      commitLink: null,
      author: uo(),
      authorUrl: null,
      authorAvatarUrl: null,
    }
  );
}
function Hi(e) {
  return e.BUILD_BUILDID !== void 0 && e.AGENT_NAME !== void 0;
}
function Gi(e) {
  return (
    X && console.log('[Nx Cloud] Detected Env: Azure DevOps'),
    {
      branch:
        e.SYSTEM_PULLREQUEST_PULLREQUESTNUMBER ??
        e.BUILD_SOURCEBRANCHNAME ??
        'unknown',
      ref: null,
      title: e.BUILD_SOURCEVERSIONMESSAGE ?? null,
      headSha: Te() ?? 'unknown',
      baseSha: null,
      commitLink: null,
      author: e.BUILD_REQUESTEDFOR ?? null,
      authorUrl: null,
      authorAvatarUrl: null,
    }
  );
}
function ji(e) {
  return e.GITLAB_CI === 'true';
}
function Vi(e) {
  return (
    X && console.log('[Nx Cloud] Detected Env: GitLab Pipelines'),
    {
      branch: ((r) =>
        r.CI_MERGE_REQUEST_IID
          ? r.CI_MERGE_REQUEST_IID
          : r.CI_COMMIT_BRANCH
          ? r.CI_COMMIT_BRANCH
          : 'unknown')(e),
      ref: e.CI_COMMIT_REF_NAME ?? null,
      title: e.CI_COMMIT_MESSAGE ?? null,
      headSha: Te() ?? 'unknown',
      baseSha: null,
      commitLink: null,
      author: e.GITLAB_USER_NAME ?? null,
      authorUrl: null,
      authorAvatarUrl: null,
    }
  );
}
function Jt() {
  try {
    return (0, Wt.execSync)('git log -1 --pretty=%B', {
      encoding: 'utf-8',
    }).trim();
  } catch {
    return null;
  }
}
function uo() {
  try {
    return (0, Wt.execSync)('git log -1 --pretty=%aN', {
      encoding: 'utf-8',
    }).trim();
  } catch {
    return null;
  }
}
var Wt,
  Ai,
  co = te(() => {
    'use strict';
    Wt = require('child_process');
    he();
    Ai = {
      CIRCLE_CI: { detectorFn: Li, contextRetrieverFn: Bi },
      TRAVIS_CI: { detectorFn: Fi, contextRetrieverFn: Mi },
      GITHUB_ACTIONS: { detectorFn: Di, contextRetrieverFn: Pi },
      BITBUCKET_PIPELINES: { detectorFn: qi, contextRetrieverFn: ki },
      AZURE_DEVOPS: { detectorFn: Hi, contextRetrieverFn: Gi },
      GITLAB_PIPELINES: { detectorFn: ji, contextRetrieverFn: Vi },
    };
  });
var $a,
  fo = te(() => {
    'use strict';
    Me();
    ({ output: $a } = de());
  });
var Yt,
  Xi,
  Qt,
  Ne,
  Zt,
  lo = te(() => {
    'use strict';
    Yt = require('perf_hooks');
    Kt();
    he();
    fo();
    (Xi = []),
      (Qt = (e) => {
        let t = Yt.performance.now();
        return {
          recordMetric: (o) => {
            let n = Yt.performance.now();
            (o.durationMs = n - t), (o.entryType = e), Xi.push(o);
          },
        };
      }),
      (Ne = (e) => {
        var t;
        return {
          success:
            ((t = e == null ? void 0 : e.status) == null
              ? void 0
              : t.toString().startsWith('2')) ?? !1,
          statusCode: (e == null ? void 0 : e.status) ?? -1,
        };
      }),
      (Zt = { success: !1, statusCode: -1 });
  });
var po = {};
Be(po, { RunGroupApi: () => tr });
var er,
  tr,
  ho = te(() => {
    'use strict';
    Kt();
    co();
    lo();
    ({ output: er } = de()),
      (tr = class {
        constructor(t) {
          this.apiAxiosInstance = $t(t);
        }
        async createRunGroup(t, r, o, n, s, i, u, a, f, c) {
          var p;
          let l = Qt('createRunGroup');
          try {
            let d = await nt(() =>
              this.apiAxiosInstance.post(
                '/nx-cloud/executions/create-run-group',
                {
                  branch: t,
                  runGroup: r,
                  ciExecutionId: o,
                  ciExecutionEnv: n,
                  stopAgentsOnFailure: s,
                  agentCount: i,
                  stopAgentsAfter: u,
                  commitSha: f,
                  distributesOn: a,
                  vcsContext: zt(),
                }
              )
            );
            l.recordMetric(Ne(d));
          } catch (d) {
            l.recordMetric(
              (p = d == null ? void 0 : d.axiosException) != null && p.response
                ? Ne(d.axiosException.response)
                : Zt
            ),
              er.error({ title: d.message }),
              process.exit(1);
          }
        }
        async completeRunGroup(t, r, o, n) {
          var i;
          let s = Qt('completeRunGroup');
          try {
            let u = await nt(() =>
              this.apiAxiosInstance.post(
                '/nx-cloud/executions/complete-run-group',
                {
                  branch: t,
                  runGroup: r,
                  ciExecutionId: o,
                  ciExecutionEnv: n,
                  vcsContext: zt(),
                }
              )
            );
            s.recordMetric(Ne(u));
          } catch (u) {
            s.recordMetric(
              (i = u == null ? void 0 : u.axiosException) != null && i.response
                ? Ne(u.axiosException.response)
                : Zt
            ),
              er.error({ title: u.message }),
              process.exit(1);
          }
        }
        async sendHeartbeat(t, r) {
          try {
            await this.apiAxiosInstance.post('/nx-cloud/heartbeat', {
              ciExecutionId: t,
              runGroup: r,
            });
          } catch (o) {
            er.error({
              title: o.message,
              bodyLines: JSON.stringify(o, null, 2).split(`
`),
            }),
              process.exit(1);
          }
        }
      });
  });
var mo = require('fs');
he();
var _r = require('os'),
  Cr = require('path');
function Er(e) {
  return (0, Cr.join)((0, _r.tmpdir)(), `run-group-${e}-marker.lock`);
}
function $i() {
  let e = JSON.parse(process.env.NX_CLOUD_LIGHT_CLIENT_RESOLUTION_PATHS),
    { configureLightClientRequire: t } = (Me(), Fe(cr));
  t(e);
  let { getCloudOptions: r } = (Tr(), Fe(Ir)),
    { RunGroupApi: o } = (ho(), Fe(po)),
    { getRunGroup: n, VERBOSE_LOGGING: s } = (he(), Fe(vr)),
    { nxCloudOptions: i } = r(),
    u = new o(i),
    a = lt();
  a == null && process.exit(0);
  let f = n();
  Ki(f, s), setInterval(() => u.sendHeartbeat(a, f), 5e3);
}
function Ki(e, t) {
  let r = async () => {
    t && console.log('[NX CLOUD] Shutting down heartbeat process'),
      (0, mo.rmdirSync)(Er(e)),
      process.exit(0);
  };
  process.on('SIGINT', r), process.on('SIGTERM', r);
}
$i();
