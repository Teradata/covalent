'use strict';
var nf = Object.create;
var Zr = Object.defineProperty;
var of = Object.getOwnPropertyDescriptor;
var af = Object.getOwnPropertyNames;
var cf = Object.getPrototypeOf,
  uf = Object.prototype.hasOwnProperty;
var le = (r, e) => () => (r && (e = r((r = 0))), e);
var E = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports),
  Pe = (r, e) => {
    for (var t in e) Zr(r, t, { get: e[t], enumerable: !0 });
  },
  ta = (r, e, t, s) => {
    if ((e && typeof e == 'object') || typeof e == 'function')
      for (let i of af(e))
        !uf.call(r, i) &&
          i !== t &&
          Zr(r, i, {
            get: () => e[i],
            enumerable: !(s = of(e, i)) || s.enumerable,
          });
    return r;
  };
var lf = (r, e, t) => (
    (t = r != null ? nf(cf(r)) : {}),
    ta(
      e || !r || !r.__esModule
        ? Zr(t, 'default', { value: r, enumerable: !0 })
        : t,
      r
    )
  ),
  ke = (r) => ta(Zr({}, '__esModule', { value: !0 }), r);
var ra = {};
Pe(ra, {
  configureLightClientRequire: () => hf,
  configuredPaths: () => gi,
  lightClientRequire: () => U,
});
function hf(r) {
  (gi = r),
    (U = function (e) {
      if (gi.length === 0)
        throw new Error(
          'Light client require must have paths configured with `configureLightClientRequire`.'
        );
      let t;
      try {
        t = require.resolve(e, { paths: r });
      } catch (s) {
        throw (
          (process.env.NX_VERBOSE_LOGGING === 'true' &&
            console.error(
              `Was not able to require.resolve module ${e} from the following paths: ${r}. This may be expected.`
            ),
          s)
        );
      }
      try {
        return require(t);
      } catch (s) {
        throw (
          (process.env.NX_VERBOSE_LOGGING === 'true' &&
            console.error(
              `Was not able require module ${e} from path ${t}. This may be expected. `
            ),
          s)
        );
      }
    });
}
var U,
  gi,
  Rr = le(() => {
    'use strict';
    gi = [];
  });
var sa = E((ee) => {
  'use strict';
  var vi = require('path');
  Rr();
  try {
    try {
      let r;
      try {
        r = U('nx/src/utils/app-root').workspaceRoot;
      } catch {
        r = U('nx/src/utils/workspace-root').workspaceRoot;
      }
      let { getDependencyConfigs: e } = U('nx/src/tasks-runner/utils'),
        t = U('nx/tasks-runners/default').default,
        { CompositeLifeCycle: s } = U('nx/src/tasks-runner/life-cycle'),
        i = null;
      try {
        i = U('nx/src/index').initTasksRunner;
      } catch {}
      let n;
      try {
        n = U('nx/src/devkit-exports').cacheDir;
      } catch {
        try {
          n = U('nx/src/utils/cache-directory').cacheDir;
        } catch {
          n = (0, vi.join)(r, './node_modules/.cache/nx');
        }
      }
      let o = U('nx/src/tasks-runner/utils').isCacheableTask;
      (ee.cacheDirectory = n),
        (ee.runnerReturnsPromise = !0),
        (ee.tasksRunner = t),
        (ee.CompositeLifeCycle = s),
        (ee.getDependencyConfigs = e),
        (ee.initTasksRunner = i),
        (ee.isCacheableTask = o);
    } catch {
      let { appRootPath: e } = U('@nrwl/tao/src/utils/app-root'),
        { getDependencyConfigs: t } = U(
          '@nrwl/workspace/src/tasks-runner/utils'
        ),
        { tasksRunnerV2: s } = U(
          '@nrwl/workspace/src/tasks-runner/tasks-runner-v2'
        ),
        i;
      try {
        i = U('@nrwl/workspace/src/tasks-runner/life-cycle').CompositeLifeCycle;
      } catch {}
      let n = U('@nrwl/workspace/src/tasks-runner/utils').isCacheableTask;
      (ee.cacheDirectory = (0, vi.join)(e, './node_modules/.cache/nx')),
        (ee.runnerReturnsPromise = !1),
        (ee.tasksRunner = s),
        (ee.CompositeLifeCycle = i),
        (ee.getDependencyConfigs = t),
        (ee.initTasksRunner = null),
        (ee.isCacheableTask = n);
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
function ia() {
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
var na = le(() => {
  'use strict';
});
var ua = E((fy, wi) => {
  'use strict';
  var ff = require('fs'),
    oa = require('path'),
    df = require('os');
  function aa(r) {
    console.log(`[dotenv][DEBUG] ${r}`);
  }
  var pf = `
`,
    mf = /^\s*([\w.-]+)\s*=\s*(.*)?\s*$/,
    Ef = /\\n/g,
    yf = /\r\n|\n|\r/;
  function ca(r, e) {
    let t = !!(e && e.debug),
      s = {};
    return (
      r
        .toString()
        .split(yf)
        .forEach(function (i, n) {
          let o = i.match(mf);
          if (o != null) {
            let c = o[1],
              a = o[2] || '',
              l = a.length - 1,
              u = a[0] === '"' && a[l] === '"';
            (a[0] === "'" && a[l] === "'") || u
              ? ((a = a.substring(1, l)), u && (a = a.replace(Ef, pf)))
              : (a = a.trim()),
              (s[c] = a);
          } else t && aa(`did not match key and value when parsing line ${n + 1}: ${i}`);
        }),
      s
    );
  }
  function _f(r) {
    return r[0] === '~' ? oa.join(df.homedir(), r.slice(1)) : r;
  }
  function Rf(r) {
    let e = oa.resolve(process.cwd(), '.env'),
      t = 'utf8',
      s = !1;
    r &&
      (r.path != null && (e = _f(r.path)),
      r.encoding != null && (t = r.encoding),
      r.debug != null && (s = !0));
    try {
      let i = ca(ff.readFileSync(e, { encoding: t }), { debug: s });
      return (
        Object.keys(i).forEach(function (n) {
          Object.prototype.hasOwnProperty.call(process.env, n)
            ? s &&
              aa(
                `"${n}" is already defined in \`process.env\` and will not be overwritten`
              )
            : (process.env[n] = i[n]);
        }),
        { parsed: i }
      );
    } catch (i) {
      return { error: i };
    }
  }
  wi.exports.config = Rf;
  wi.exports.parse = ca;
});
var la = E((gr, Ci) => {
  'use strict';
  (function (r, e) {
    typeof gr == 'object' && typeof Ci == 'object'
      ? (Ci.exports = e(require('child_process'), require('crypto')))
      : typeof define == 'function' && define.amd
      ? define(['child_process', 'crypto'], e)
      : typeof gr == 'object'
      ? (gr['electron-machine-id'] = e(
          require('child_process'),
          require('crypto')
        ))
      : (r['electron-machine-id'] = e(r.child_process, r.crypto));
  })(gr, function (r, e) {
    return (function (t) {
      function s(n) {
        if (i[n]) return i[n].exports;
        var o = (i[n] = { exports: {}, id: n, loaded: !1 });
        return (
          t[n].call(o.exports, o, o.exports, s), (o.loaded = !0), o.exports
        );
      }
      var i = {};
      return (s.m = t), (s.c = i), (s.p = ''), s(0);
    })([
      function (t, s, i) {
        t.exports = i(34);
      },
      function (t, s, i) {
        var n = i(29)('wks'),
          o = i(33),
          c = i(2).Symbol,
          a = typeof c == 'function',
          l = (t.exports = function (u) {
            return n[u] || (n[u] = (a && c[u]) || (a ? c : o)('Symbol.' + u));
          });
        l.store = n;
      },
      function (t, s) {
        var i = (t.exports =
          typeof window < 'u' && window.Math == Math
            ? window
            : typeof self < 'u' && self.Math == Math
            ? self
            : Function('return this')());
        typeof __g == 'number' && (__g = i);
      },
      function (t, s, i) {
        var n = i(9);
        t.exports = function (o) {
          if (!n(o)) throw TypeError(o + ' is not an object!');
          return o;
        };
      },
      function (t, s, i) {
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
      function (t, s, i) {
        var n = i(12),
          o = i(17);
        t.exports = i(4)
          ? function (c, a, l) {
              return n.f(c, a, o(1, l));
            }
          : function (c, a, l) {
              return (c[a] = l), c;
            };
      },
      function (t, s) {
        var i = (t.exports = { version: '2.4.0' });
        typeof __e == 'number' && (__e = i);
      },
      function (t, s, i) {
        var n = i(14);
        t.exports = function (o, c, a) {
          if ((n(o), c === void 0)) return o;
          switch (a) {
            case 1:
              return function (l) {
                return o.call(c, l);
              };
            case 2:
              return function (l, u) {
                return o.call(c, l, u);
              };
            case 3:
              return function (l, u, h) {
                return o.call(c, l, u, h);
              };
          }
          return function () {
            return o.apply(c, arguments);
          };
        };
      },
      function (t, s) {
        var i = {}.hasOwnProperty;
        t.exports = function (n, o) {
          return i.call(n, o);
        };
      },
      function (t, s) {
        t.exports = function (i) {
          return typeof i == 'object' ? i !== null : typeof i == 'function';
        };
      },
      function (t, s) {
        t.exports = {};
      },
      function (t, s) {
        var i = {}.toString;
        t.exports = function (n) {
          return i.call(n).slice(8, -1);
        };
      },
      function (t, s, i) {
        var n = i(3),
          o = i(26),
          c = i(32),
          a = Object.defineProperty;
        s.f = i(4)
          ? Object.defineProperty
          : function (l, u, h) {
              if ((n(l), (u = c(u, !0)), n(h), o))
                try {
                  return a(l, u, h);
                } catch {}
              if ('get' in h || 'set' in h)
                throw TypeError('Accessors not supported!');
              return 'value' in h && (l[u] = h.value), l;
            };
      },
      function (t, s, i) {
        var n = i(42),
          o = i(15);
        t.exports = function (c) {
          return n(o(c));
        };
      },
      function (t, s) {
        t.exports = function (i) {
          if (typeof i != 'function')
            throw TypeError(i + ' is not a function!');
          return i;
        };
      },
      function (t, s) {
        t.exports = function (i) {
          if (i == null) throw TypeError("Can't call method on  " + i);
          return i;
        };
      },
      function (t, s, i) {
        var n = i(9),
          o = i(2).document,
          c = n(o) && n(o.createElement);
        t.exports = function (a) {
          return c ? o.createElement(a) : {};
        };
      },
      function (t, s) {
        t.exports = function (i, n) {
          return {
            enumerable: !(1 & i),
            configurable: !(2 & i),
            writable: !(4 & i),
            value: n,
          };
        };
      },
      function (t, s, i) {
        var n = i(12).f,
          o = i(8),
          c = i(1)('toStringTag');
        t.exports = function (a, l, u) {
          a &&
            !o((a = u ? a : a.prototype), c) &&
            n(a, c, { configurable: !0, value: l });
        };
      },
      function (t, s, i) {
        var n = i(29)('keys'),
          o = i(33);
        t.exports = function (c) {
          return n[c] || (n[c] = o(c));
        };
      },
      function (t, s) {
        var i = Math.ceil,
          n = Math.floor;
        t.exports = function (o) {
          return isNaN((o = +o)) ? 0 : (o > 0 ? n : i)(o);
        };
      },
      function (t, s, i) {
        var n = i(11),
          o = i(1)('toStringTag'),
          c =
            n(
              (function () {
                return arguments;
              })()
            ) == 'Arguments',
          a = function (l, u) {
            try {
              return l[u];
            } catch {}
          };
        t.exports = function (l) {
          var u, h, f;
          return l === void 0
            ? 'Undefined'
            : l === null
            ? 'Null'
            : typeof (h = a((u = Object(l)), o)) == 'string'
            ? h
            : c
            ? n(u)
            : (f = n(u)) == 'Object' && typeof u.callee == 'function'
            ? 'Arguments'
            : f;
        };
      },
      function (t, s) {
        t.exports =
          'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
            ','
          );
      },
      function (t, s, i) {
        var n = i(2),
          o = i(6),
          c = i(7),
          a = i(5),
          l = 'prototype',
          u = function (h, f, d) {
            var p,
              y,
              _,
              g = h & u.F,
              O = h & u.G,
              S = h & u.S,
              C = h & u.P,
              L = h & u.B,
              v = h & u.W,
              A = O ? o : o[f] || (o[f] = {}),
              b = A[l],
              B = O ? n : S ? n[f] : (n[f] || {})[l];
            O && (d = f);
            for (p in d)
              (y = !g && B && B[p] !== void 0),
                (y && p in A) ||
                  ((_ = y ? B[p] : d[p]),
                  (A[p] =
                    O && typeof B[p] != 'function'
                      ? d[p]
                      : L && y
                      ? c(_, n)
                      : v && B[p] == _
                      ? (function (q) {
                          var ue = function (se, H, Ee) {
                            if (this instanceof q) {
                              switch (arguments.length) {
                                case 0:
                                  return new q();
                                case 1:
                                  return new q(se);
                                case 2:
                                  return new q(se, H);
                              }
                              return new q(se, H, Ee);
                            }
                            return q.apply(this, arguments);
                          };
                          return (ue[l] = q[l]), ue;
                        })(_)
                      : C && typeof _ == 'function'
                      ? c(Function.call, _)
                      : _),
                  C &&
                    (((A.virtual || (A.virtual = {}))[p] = _),
                    h & u.R && b && !b[p] && a(b, p, _)));
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
      function (t, s) {
        t.exports = function (i) {
          try {
            return !!i();
          } catch {
            return !0;
          }
        };
      },
      function (t, s, i) {
        t.exports = i(2).document && document.documentElement;
      },
      function (t, s, i) {
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
      function (t, s, i) {
        'use strict';
        var n = i(28),
          o = i(23),
          c = i(57),
          a = i(5),
          l = i(8),
          u = i(10),
          h = i(45),
          f = i(18),
          d = i(52),
          p = i(1)('iterator'),
          y = !([].keys && 'next' in [].keys()),
          _ = '@@iterator',
          g = 'keys',
          O = 'values',
          S = function () {
            return this;
          };
        t.exports = function (C, L, v, A, b, B, q) {
          h(v, L, A);
          var ue,
            se,
            H,
            Ee = function (R) {
              if (!y && R in T) return T[R];
              switch (R) {
                case g:
                  return function () {
                    return new v(this, R);
                  };
                case O:
                  return function () {
                    return new v(this, R);
                  };
              }
              return function () {
                return new v(this, R);
              };
            },
            k = L + ' Iterator',
            Ce = b == O,
            ie = !1,
            T = C.prototype,
            X = T[p] || T[_] || (b && T[b]),
            z = X || Ee(b),
            Ie = b ? (Ce ? Ee('entries') : z) : void 0,
            m = (L == 'Array' && T.entries) || X;
          if (
            (m &&
              ((H = d(m.call(new C()))),
              H !== Object.prototype &&
                (f(H, k, !0), n || l(H, p) || a(H, p, S))),
            Ce &&
              X &&
              X.name !== O &&
              ((ie = !0),
              (z = function () {
                return X.call(this);
              })),
            (n && !q) || (!y && !ie && T[p]) || a(T, p, z),
            (u[L] = z),
            (u[k] = S),
            b)
          )
            if (
              ((ue = {
                values: Ce ? z : Ee(O),
                keys: B ? z : Ee(g),
                entries: Ie,
              }),
              q)
            )
              for (se in ue) se in T || c(T, se, ue[se]);
            else o(o.P + o.F * (y || ie), L, ue);
          return ue;
        };
      },
      function (t, s) {
        t.exports = !0;
      },
      function (t, s, i) {
        var n = i(2),
          o = '__core-js_shared__',
          c = n[o] || (n[o] = {});
        t.exports = function (a) {
          return c[a] || (c[a] = {});
        };
      },
      function (t, s, i) {
        var n,
          o,
          c,
          a = i(7),
          l = i(41),
          u = i(25),
          h = i(16),
          f = i(2),
          d = f.process,
          p = f.setImmediate,
          y = f.clearImmediate,
          _ = f.MessageChannel,
          g = 0,
          O = {},
          S = 'onreadystatechange',
          C = function () {
            var v = +this;
            if (O.hasOwnProperty(v)) {
              var A = O[v];
              delete O[v], A();
            }
          },
          L = function (v) {
            C.call(v.data);
          };
        (p && y) ||
          ((p = function (v) {
            for (var A = [], b = 1; arguments.length > b; )
              A.push(arguments[b++]);
            return (
              (O[++g] = function () {
                l(typeof v == 'function' ? v : Function(v), A);
              }),
              n(g),
              g
            );
          }),
          (y = function (v) {
            delete O[v];
          }),
          i(11)(d) == 'process'
            ? (n = function (v) {
                d.nextTick(a(C, v, 1));
              })
            : _
            ? ((o = new _()),
              (c = o.port2),
              (o.port1.onmessage = L),
              (n = a(c.postMessage, c, 1)))
            : f.addEventListener &&
              typeof postMessage == 'function' &&
              !f.importScripts
            ? ((n = function (v) {
                f.postMessage(v + '', '*');
              }),
              f.addEventListener('message', L, !1))
            : (n =
                S in h('script')
                  ? function (v) {
                      u.appendChild(h('script'))[S] = function () {
                        u.removeChild(this), C.call(v);
                      };
                    }
                  : function (v) {
                      setTimeout(a(C, v, 1), 0);
                    })),
          (t.exports = { set: p, clear: y });
      },
      function (t, s, i) {
        var n = i(20),
          o = Math.min;
        t.exports = function (c) {
          return c > 0 ? o(n(c), 9007199254740991) : 0;
        };
      },
      function (t, s, i) {
        var n = i(9);
        t.exports = function (o, c) {
          if (!n(o)) return o;
          var a, l;
          if (
            (c &&
              typeof (a = o.toString) == 'function' &&
              !n((l = a.call(o)))) ||
            (typeof (a = o.valueOf) == 'function' && !n((l = a.call(o)))) ||
            (!c && typeof (a = o.toString) == 'function' && !n((l = a.call(o))))
          )
            return l;
          throw TypeError("Can't convert object to primitive value");
        };
      },
      function (t, s) {
        var i = 0,
          n = Math.random();
        t.exports = function (o) {
          return 'Symbol('.concat(
            o === void 0 ? '' : o,
            ')_',
            (++i + n).toString(36)
          );
        };
      },
      function (t, s, i) {
        'use strict';
        function n(S) {
          return S && S.__esModule ? S : { default: S };
        }
        function o() {
          return process.platform !== 'win32'
            ? ''
            : process.arch === 'ia32' &&
              process.env.hasOwnProperty('PROCESSOR_ARCHITEW6432')
            ? 'mixed'
            : 'native';
        }
        function c(S) {
          return (0, p.createHash)('sha256').update(S).digest('hex');
        }
        function a(S) {
          switch (_) {
            case 'darwin':
              return S.split('IOPlatformUUID')[1]
                .split(
                  `
`
                )[0]
                .replace(/\=|\s+|\"/gi, '')
                .toLowerCase();
            case 'win32':
              return S.toString()
                .split('REG_SZ')[1]
                .replace(/\r+|\n+|\s+/gi, '')
                .toLowerCase();
            case 'linux':
              return S.toString()
                .replace(/\r+|\n+|\s+/gi, '')
                .toLowerCase();
            case 'freebsd':
              return S.toString()
                .replace(/\r+|\n+|\s+/gi, '')
                .toLowerCase();
            default:
              throw new Error('Unsupported platform: ' + process.platform);
          }
        }
        function l(S) {
          var C = a((0, d.execSync)(O[_]).toString());
          return S ? C : c(C);
        }
        function u(S) {
          return new f.default(function (C, L) {
            return (0, d.exec)(O[_], {}, function (v, A, b) {
              if (v)
                return L(
                  new Error('Error while obtaining machine id: ' + v.stack)
                );
              var B = a(A.toString());
              return C(S ? B : c(B));
            });
          });
        }
        Object.defineProperty(s, '__esModule', { value: !0 });
        var h = i(35),
          f = n(h);
        (s.machineIdSync = l), (s.machineId = u);
        var d = i(70),
          p = i(71),
          y = process,
          _ = y.platform,
          g = {
            native: '%windir%\\System32',
            mixed: '%windir%\\sysnative\\cmd.exe /c %windir%\\System32',
          },
          O = {
            darwin: 'ioreg -rd1 -c IOPlatformExpertDevice',
            win32:
              g[o()] +
              '\\REG.exe QUERY HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Cryptography /v MachineGuid',
            linux:
              '( cat /var/lib/dbus/machine-id /etc/machine-id 2> /dev/null || hostname ) | head -n 1 || :',
            freebsd: 'kenv -q smbios.system.uuid || sysctl -n kern.hostuuid',
          };
      },
      function (t, s, i) {
        t.exports = { default: i(36), __esModule: !0 };
      },
      function (t, s, i) {
        i(66), i(68), i(69), i(67), (t.exports = i(6).Promise);
      },
      function (t, s) {
        t.exports = function () {};
      },
      function (t, s) {
        t.exports = function (i, n, o, c) {
          if (!(i instanceof n) || (c !== void 0 && c in i))
            throw TypeError(o + ': incorrect invocation!');
          return i;
        };
      },
      function (t, s, i) {
        var n = i(13),
          o = i(31),
          c = i(62);
        t.exports = function (a) {
          return function (l, u, h) {
            var f,
              d = n(l),
              p = o(d.length),
              y = c(h, p);
            if (a && u != u) {
              for (; p > y; ) if (((f = d[y++]), f != f)) return !0;
            } else
              for (; p > y; y++)
                if ((a || y in d) && d[y] === u) return a || y || 0;
            return !a && -1;
          };
        };
      },
      function (t, d, i) {
        var n = i(7),
          o = i(44),
          c = i(43),
          a = i(3),
          l = i(31),
          u = i(64),
          h = {},
          f = {},
          d = (t.exports = function (p, y, _, g, O) {
            var S,
              C,
              L,
              v,
              A = O
                ? function () {
                    return p;
                  }
                : u(p),
              b = n(_, g, y ? 2 : 1),
              B = 0;
            if (typeof A != 'function')
              throw TypeError(p + ' is not iterable!');
            if (c(A)) {
              for (S = l(p.length); S > B; B++)
                if (
                  ((v = y ? b(a((C = p[B]))[0], C[1]) : b(p[B])),
                  v === h || v === f)
                )
                  return v;
            } else
              for (L = A.call(p); !(C = L.next()).done; )
                if (((v = o(L, b, C.value, y)), v === h || v === f)) return v;
          });
        (d.BREAK = h), (d.RETURN = f);
      },
      function (t, s) {
        t.exports = function (i, n, o) {
          var c = o === void 0;
          switch (n.length) {
            case 0:
              return c ? i() : i.call(o);
            case 1:
              return c ? i(n[0]) : i.call(o, n[0]);
            case 2:
              return c ? i(n[0], n[1]) : i.call(o, n[0], n[1]);
            case 3:
              return c ? i(n[0], n[1], n[2]) : i.call(o, n[0], n[1], n[2]);
            case 4:
              return c
                ? i(n[0], n[1], n[2], n[3])
                : i.call(o, n[0], n[1], n[2], n[3]);
          }
          return i.apply(o, n);
        };
      },
      function (t, s, i) {
        var n = i(11);
        t.exports = Object('z').propertyIsEnumerable(0)
          ? Object
          : function (o) {
              return n(o) == 'String' ? o.split('') : Object(o);
            };
      },
      function (t, s, i) {
        var n = i(10),
          o = i(1)('iterator'),
          c = Array.prototype;
        t.exports = function (a) {
          return a !== void 0 && (n.Array === a || c[o] === a);
        };
      },
      function (t, s, i) {
        var n = i(3);
        t.exports = function (o, c, a, l) {
          try {
            return l ? c(n(a)[0], a[1]) : c(a);
          } catch (h) {
            var u = o.return;
            throw (u !== void 0 && n(u.call(o)), h);
          }
        };
      },
      function (t, s, i) {
        'use strict';
        var n = i(49),
          o = i(17),
          c = i(18),
          a = {};
        i(5)(a, i(1)('iterator'), function () {
          return this;
        }),
          (t.exports = function (l, u, h) {
            (l.prototype = n(a, { next: o(1, h) })), c(l, u + ' Iterator');
          });
      },
      function (t, s, i) {
        var n = i(1)('iterator'),
          o = !1;
        try {
          var c = [7][n]();
          (c.return = function () {
            o = !0;
          }),
            Array.from(c, function () {
              throw 2;
            });
        } catch {}
        t.exports = function (a, l) {
          if (!l && !o) return !1;
          var u = !1;
          try {
            var h = [7],
              f = h[n]();
            (f.next = function () {
              return { done: (u = !0) };
            }),
              (h[n] = function () {
                return f;
              }),
              a(h);
          } catch {}
          return u;
        };
      },
      function (t, s) {
        t.exports = function (i, n) {
          return { value: n, done: !!i };
        };
      },
      function (t, s, i) {
        var n = i(2),
          o = i(30).set,
          c = n.MutationObserver || n.WebKitMutationObserver,
          a = n.process,
          l = n.Promise,
          u = i(11)(a) == 'process';
        t.exports = function () {
          var h,
            f,
            d,
            p = function () {
              var O, S;
              for (u && (O = a.domain) && O.exit(); h; ) {
                (S = h.fn), (h = h.next);
                try {
                  S();
                } catch (C) {
                  throw (h ? d() : (f = void 0), C);
                }
              }
              (f = void 0), O && O.enter();
            };
          if (u)
            d = function () {
              a.nextTick(p);
            };
          else if (c) {
            var y = !0,
              _ = document.createTextNode('');
            new c(p).observe(_, { characterData: !0 }),
              (d = function () {
                _.data = y = !y;
              });
          } else if (l && l.resolve) {
            var g = l.resolve();
            d = function () {
              g.then(p);
            };
          } else
            d = function () {
              o.call(n, p);
            };
          return function (O) {
            var S = { fn: O, next: void 0 };
            f && (f.next = S), h || ((h = S), d()), (f = S);
          };
        };
      },
      function (t, s, i) {
        var n = i(3),
          o = i(50),
          c = i(22),
          a = i(19)('IE_PROTO'),
          l = function () {},
          u = 'prototype',
          h = function () {
            var f,
              d = i(16)('iframe'),
              p = c.length,
              y = '>';
            for (
              d.style.display = 'none',
                i(25).appendChild(d),
                d.src = 'javascript:',
                f = d.contentWindow.document,
                f.open(),
                f.write('<script>document.F=Object</script' + y),
                f.close(),
                h = f.F;
              p--;

            )
              delete h[u][c[p]];
            return h();
          };
        t.exports =
          Object.create ||
          function (f, d) {
            var p;
            return (
              f !== null
                ? ((l[u] = n(f)), (p = new l()), (l[u] = null), (p[a] = f))
                : (p = h()),
              d === void 0 ? p : o(p, d)
            );
          };
      },
      function (t, s, i) {
        var n = i(12),
          o = i(3),
          c = i(54);
        t.exports = i(4)
          ? Object.defineProperties
          : function (a, l) {
              o(a);
              for (var u, h = c(l), f = h.length, d = 0; f > d; )
                n.f(a, (u = h[d++]), l[u]);
              return a;
            };
      },
      function (t, s, i) {
        var n = i(55),
          o = i(17),
          c = i(13),
          a = i(32),
          l = i(8),
          u = i(26),
          h = Object.getOwnPropertyDescriptor;
        s.f = i(4)
          ? h
          : function (f, d) {
              if (((f = c(f)), (d = a(d, !0)), u))
                try {
                  return h(f, d);
                } catch {}
              if (l(f, d)) return o(!n.f.call(f, d), f[d]);
            };
      },
      function (t, s, i) {
        var n = i(8),
          o = i(63),
          c = i(19)('IE_PROTO'),
          a = Object.prototype;
        t.exports =
          Object.getPrototypeOf ||
          function (l) {
            return (
              (l = o(l)),
              n(l, c)
                ? l[c]
                : typeof l.constructor == 'function' &&
                  l instanceof l.constructor
                ? l.constructor.prototype
                : l instanceof Object
                ? a
                : null
            );
          };
      },
      function (t, s, i) {
        var n = i(8),
          o = i(13),
          c = i(39)(!1),
          a = i(19)('IE_PROTO');
        t.exports = function (l, u) {
          var h,
            f = o(l),
            d = 0,
            p = [];
          for (h in f) h != a && n(f, h) && p.push(h);
          for (; u.length > d; ) n(f, (h = u[d++])) && (~c(p, h) || p.push(h));
          return p;
        };
      },
      function (t, s, i) {
        var n = i(53),
          o = i(22);
        t.exports =
          Object.keys ||
          function (c) {
            return n(c, o);
          };
      },
      function (t, s) {
        s.f = {}.propertyIsEnumerable;
      },
      function (t, s, i) {
        var n = i(5);
        t.exports = function (o, c, a) {
          for (var l in c) a && o[l] ? (o[l] = c[l]) : n(o, l, c[l]);
          return o;
        };
      },
      function (t, s, i) {
        t.exports = i(5);
      },
      function (t, s, i) {
        var n = i(9),
          o = i(3),
          c = function (a, l) {
            if ((o(a), !n(l) && l !== null))
              throw TypeError(l + ": can't set as prototype!");
          };
        t.exports = {
          set:
            Object.setPrototypeOf ||
            ('__proto__' in {}
              ? (function (a, l, u) {
                  try {
                    (u = i(7)(
                      Function.call,
                      i(51).f(Object.prototype, '__proto__').set,
                      2
                    )),
                      u(a, []),
                      (l = !(a instanceof Array));
                  } catch {
                    l = !0;
                  }
                  return function (h, f) {
                    return c(h, f), l ? (h.__proto__ = f) : u(h, f), h;
                  };
                })({}, !1)
              : void 0),
          check: c,
        };
      },
      function (t, s, i) {
        'use strict';
        var n = i(2),
          o = i(6),
          c = i(12),
          a = i(4),
          l = i(1)('species');
        t.exports = function (u) {
          var h = typeof o[u] == 'function' ? o[u] : n[u];
          a &&
            h &&
            !h[l] &&
            c.f(h, l, {
              configurable: !0,
              get: function () {
                return this;
              },
            });
        };
      },
      function (t, s, i) {
        var n = i(3),
          o = i(14),
          c = i(1)('species');
        t.exports = function (a, l) {
          var u,
            h = n(a).constructor;
          return h === void 0 || (u = n(h)[c]) == null ? l : o(u);
        };
      },
      function (t, s, i) {
        var n = i(20),
          o = i(15);
        t.exports = function (c) {
          return function (a, l) {
            var u,
              h,
              f = String(o(a)),
              d = n(l),
              p = f.length;
            return d < 0 || d >= p
              ? c
                ? ''
                : void 0
              : ((u = f.charCodeAt(d)),
                u < 55296 ||
                u > 56319 ||
                d + 1 === p ||
                (h = f.charCodeAt(d + 1)) < 56320 ||
                h > 57343
                  ? c
                    ? f.charAt(d)
                    : u
                  : c
                  ? f.slice(d, d + 2)
                  : ((u - 55296) << 10) + (h - 56320) + 65536);
          };
        };
      },
      function (t, s, i) {
        var n = i(20),
          o = Math.max,
          c = Math.min;
        t.exports = function (a, l) {
          return (a = n(a)), a < 0 ? o(a + l, 0) : c(a, l);
        };
      },
      function (t, s, i) {
        var n = i(15);
        t.exports = function (o) {
          return Object(n(o));
        };
      },
      function (t, s, i) {
        var n = i(21),
          o = i(1)('iterator'),
          c = i(10);
        t.exports = i(6).getIteratorMethod = function (a) {
          if (a != null) return a[o] || a['@@iterator'] || c[n(a)];
        };
      },
      function (t, s, i) {
        'use strict';
        var n = i(37),
          o = i(47),
          c = i(10),
          a = i(13);
        (t.exports = i(27)(
          Array,
          'Array',
          function (l, u) {
            (this._t = a(l)), (this._i = 0), (this._k = u);
          },
          function () {
            var l = this._t,
              u = this._k,
              h = this._i++;
            return !l || h >= l.length
              ? ((this._t = void 0), o(1))
              : u == 'keys'
              ? o(0, h)
              : u == 'values'
              ? o(0, l[h])
              : o(0, [h, l[h]]);
          },
          'values'
        )),
          (c.Arguments = c.Array),
          n('keys'),
          n('values'),
          n('entries');
      },
      function (t, s) {},
      function (t, s, i) {
        'use strict';
        var n,
          o,
          c,
          a = i(28),
          l = i(2),
          u = i(7),
          h = i(21),
          f = i(23),
          d = i(9),
          p = (i(3), i(14)),
          y = i(38),
          _ = i(40),
          g = (i(58).set, i(60)),
          O = i(30).set,
          S = i(48)(),
          C = 'Promise',
          L = l.TypeError,
          A = l.process,
          v = l[C],
          A = l.process,
          b = h(A) == 'process',
          B = function () {},
          q = !!(function () {
            try {
              var m = v.resolve(1),
                R = ((m.constructor = {})[i(1)('species')] = function (w) {
                  w(B, B);
                });
              return (
                (b || typeof PromiseRejectionEvent == 'function') &&
                m.then(B) instanceof R
              );
            } catch {}
          })(),
          ue = function (m, R) {
            return m === R || (m === v && R === c);
          },
          se = function (m) {
            var R;
            return !(!d(m) || typeof (R = m.then) != 'function') && R;
          },
          H = function (m) {
            return ue(v, m) ? new Ee(m) : new o(m);
          },
          Ee = (o = function (m) {
            var R, w;
            (this.promise = new m(function (x, K) {
              if (R !== void 0 || w !== void 0)
                throw L('Bad Promise constructor');
              (R = x), (w = K);
            })),
              (this.resolve = p(R)),
              (this.reject = p(w));
          }),
          k = function (m) {
            try {
              m();
            } catch (R) {
              return { error: R };
            }
          },
          Ce = function (m, R) {
            if (!m._n) {
              m._n = !0;
              var w = m._c;
              S(function () {
                for (
                  var x = m._v,
                    K = m._s == 1,
                    ht = 0,
                    Ut = function (Ye) {
                      var Ne,
                        Wr,
                        yr = K ? Ye.ok : Ye.fail,
                        _r = Ye.resolve,
                        Ft = Ye.reject,
                        Yr = Ye.domain;
                      try {
                        yr
                          ? (K || (m._h == 2 && X(m), (m._h = 1)),
                            yr === !0
                              ? (Ne = x)
                              : (Yr && Yr.enter(),
                                (Ne = yr(x)),
                                Yr && Yr.exit()),
                            Ne === Ye.promise
                              ? Ft(L('Promise-chain cycle'))
                              : (Wr = se(Ne))
                              ? Wr.call(Ne, _r, Ft)
                              : _r(Ne))
                          : Ft(x);
                      } catch (sf) {
                        Ft(sf);
                      }
                    };
                  w.length > ht;

                )
                  Ut(w[ht++]);
                (m._c = []), (m._n = !1), R && !m._h && ie(m);
              });
            }
          },
          ie = function (m) {
            O.call(l, function () {
              var R,
                w,
                x,
                K = m._v;
              if (
                (T(m) &&
                  ((R = k(function () {
                    b
                      ? A.emit('unhandledRejection', K, m)
                      : (w = l.onunhandledrejection)
                      ? w({ promise: m, reason: K })
                      : (x = l.console) &&
                        x.error &&
                        x.error('Unhandled promise rejection', K);
                  })),
                  (m._h = b || T(m) ? 2 : 1)),
                (m._a = void 0),
                R)
              )
                throw R.error;
            });
          },
          T = function (m) {
            if (m._h == 1) return !1;
            for (var R, w = m._a || m._c, x = 0; w.length > x; )
              if (((R = w[x++]), R.fail || !T(R.promise))) return !1;
            return !0;
          },
          X = function (m) {
            O.call(l, function () {
              var R;
              b
                ? A.emit('rejectionHandled', m)
                : (R = l.onrejectionhandled) && R({ promise: m, reason: m._v });
            });
          },
          z = function (m) {
            var R = this;
            R._d ||
              ((R._d = !0),
              (R = R._w || R),
              (R._v = m),
              (R._s = 2),
              R._a || (R._a = R._c.slice()),
              Ce(R, !0));
          },
          Ie = function (m) {
            var R,
              w = this;
            if (!w._d) {
              (w._d = !0), (w = w._w || w);
              try {
                if (w === m) throw L("Promise can't be resolved itself");
                (R = se(m))
                  ? S(function () {
                      var x = { _w: w, _d: !1 };
                      try {
                        R.call(m, u(Ie, x, 1), u(z, x, 1));
                      } catch (K) {
                        z.call(x, K);
                      }
                    })
                  : ((w._v = m), (w._s = 1), Ce(w, !1));
              } catch (x) {
                z.call({ _w: w, _d: !1 }, x);
              }
            }
          };
        q ||
          ((v = function (m) {
            y(this, v, C, '_h'), p(m), n.call(this);
            try {
              m(u(Ie, this, 1), u(z, this, 1));
            } catch (R) {
              z.call(this, R);
            }
          }),
          (n = function (m) {
            (this._c = []),
              (this._a = void 0),
              (this._s = 0),
              (this._d = !1),
              (this._v = void 0),
              (this._h = 0),
              (this._n = !1);
          }),
          (n.prototype = i(56)(v.prototype, {
            then: function (m, R) {
              var w = H(g(this, v));
              return (
                (w.ok = typeof m != 'function' || m),
                (w.fail = typeof R == 'function' && R),
                (w.domain = b ? A.domain : void 0),
                this._c.push(w),
                this._a && this._a.push(w),
                this._s && Ce(this, !1),
                w.promise
              );
            },
            catch: function (m) {
              return this.then(void 0, m);
            },
          })),
          (Ee = function () {
            var m = new n();
            (this.promise = m),
              (this.resolve = u(Ie, m, 1)),
              (this.reject = u(z, m, 1));
          })),
          f(f.G + f.W + f.F * !q, { Promise: v }),
          i(18)(v, C),
          i(59)(C),
          (c = i(6)[C]),
          f(f.S + f.F * !q, C, {
            reject: function (m) {
              var R = H(this),
                w = R.reject;
              return w(m), R.promise;
            },
          }),
          f(f.S + f.F * (a || !q), C, {
            resolve: function (m) {
              if (m instanceof v && ue(m.constructor, this)) return m;
              var R = H(this),
                w = R.resolve;
              return w(m), R.promise;
            },
          }),
          f(
            f.S +
              f.F *
                !(
                  q &&
                  i(46)(function (m) {
                    v.all(m).catch(B);
                  })
                ),
            C,
            {
              all: function (m) {
                var R = this,
                  w = H(R),
                  x = w.resolve,
                  K = w.reject,
                  ht = k(function () {
                    var Ut = [],
                      Ye = 0,
                      Ne = 1;
                    _(m, !1, function (Wr) {
                      var yr = Ye++,
                        _r = !1;
                      Ut.push(void 0),
                        Ne++,
                        R.resolve(Wr).then(function (Ft) {
                          _r || ((_r = !0), (Ut[yr] = Ft), --Ne || x(Ut));
                        }, K);
                    }),
                      --Ne || x(Ut);
                  });
                return ht && K(ht.error), w.promise;
              },
              race: function (m) {
                var R = this,
                  w = H(R),
                  x = w.reject,
                  K = k(function () {
                    _(m, !1, function (ht) {
                      R.resolve(ht).then(w.resolve, x);
                    });
                  });
                return K && x(K.error), w.promise;
              },
            }
          );
      },
      function (t, s, i) {
        'use strict';
        var n = i(61)(!0);
        i(27)(
          String,
          'String',
          function (o) {
            (this._t = String(o)), (this._i = 0);
          },
          function () {
            var o,
              c = this._t,
              a = this._i;
            return a >= c.length
              ? { value: void 0, done: !0 }
              : ((o = n(c, a)), (this._i += o.length), { value: o, done: !1 });
          }
        );
      },
      function (t, s, i) {
        i(65);
        for (
          var n = i(2),
            o = i(5),
            c = i(10),
            a = i(1)('toStringTag'),
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
          var h = l[u],
            f = n[h],
            d = f && f.prototype;
          d && !d[a] && o(d, a, h), (c[h] = c.Array);
        }
      },
      function (t, s) {
        t.exports = require('child_process');
      },
      function (t, s) {
        t.exports = require('crypto');
      },
    ]);
  });
});
var Ze = E((ft) => {
  'use strict';
  Rr();
  try {
    try {
      let { output: r } = U('nx/src/utils/output'),
        e;
      try {
        e = U('nx/src/utils/app-root').workspaceRoot;
      } catch {
        e = U('nx/src/utils/workspace-root').workspaceRoot;
      }
      (ft.workspaceRoot = e), (ft.output = r);
    } catch {
      let { output: e } = U('@nrwl/workspace/src/utilities/output'),
        { appRootPath: t } = U('@nrwl/tao/src/utils/app-root');
      (ft.workspaceRoot = t), (ft.output = e);
    }
  } catch {
    let e = (t) => {
      var s;
      return `${t.title}

${
  (s = t.bodyLines) == null
    ? void 0
    : s.join(`
`)
}`;
    };
    (ft.output = {
      note: (t) => console.info(e(t)),
      error: (t) => console.error(e(t)),
      warn: (t) => console.warn(e(t)),
      success: (t) => console.log(e(t)),
      addVerticalSeparator: () => '',
      addNewline: () =>
        console.log(`
`),
    }),
      (ft.workspaceRoot = process.cwd());
  }
});
var ma = {};
Pe(ma, {
  ACCESS_TOKEN: () => Cr,
  DEFAULT_FILE_SIZE_LIMIT: () => Pt,
  DISTRIBUTED_TASK_EXECUTION_INTERNAL_ERROR_STATUS_CODE: () => Tf,
  ENCRYPTION_KEY: () => da,
  NO_COMPLETED_TASKS_TIMEOUT: () => Sf,
  NO_MESSAGES_TIMEOUT: () => Cf,
  NUMBER_OF_AXIOS_RETRIES: () => wr,
  NX_CLOUD_DISTRIBUTED_EXECUTION_AGENT_COUNT: () => xf,
  NX_CLOUD_DISTRIBUTED_EXECUTION_STOP_AGENTS_ON_FAILURE: () => bf,
  NX_CLOUD_FORCE_METRICS: () => Oi,
  NX_CLOUD_NO_TIMEOUTS: () => Se,
  NX_CLOUD_UNLIMITED_OUTPUT: () => Of,
  NX_NO_CLOUD: () => If,
  UNLIMITED_FILE_SIZE: () => Mt,
  UNLIMITED_TIMEOUT: () => Bt,
  VERBOSE_LOGGING: () => P,
  agentRunningInDistributedExecution: () => Nf,
  extractGitRef: () => Af,
  extractGitSha: () => Sr,
  getBranch: () => Or,
  getCIExecutionEnv: () => vr,
  getCIExecutionId: () => Ti,
  getMachineInfo: () => Ff,
  getRunGroup: () => xi,
  nxInvokedByRunner: () => Lf,
  parseCommand: () => Bf,
});
function Nf(r) {
  return !!r;
}
function Lf() {
  return (
    process.env.NX_INVOKED_BY_RUNNER === 'true' ||
    process.env.NX_CLOUD === 'false'
  );
}
function Sr() {
  try {
    return (0, Si.execSync)('git rev-parse HEAD', { stdio: 'pipe' })
      .toString()
      .trim();
  } catch {
    return;
  }
}
function Af() {
  try {
    return (0, Si.execSync)('git rev-parse --symbolic-full-name HEAD', {
      stdio: 'pipe',
    })
      .toString()
      .trim();
  } catch {
    return;
  }
}
function Df() {
  try {
    let r = (0, fa.readFileSync)((0, Jr.join)(wf, 'nx-cloud.env'));
    return gf.parse(r);
  } catch {
    return {};
  }
}
function Uf() {
  let r = Df();
  (Cr =
    process.env.NX_CLOUD_AUTH_TOKEN ||
    process.env.NX_CLOUD_ACCESS_TOKEN ||
    r.NX_CLOUD_AUTH_TOKEN ||
    r.NX_CLOUD_ACCESS_TOKEN),
    (da = process.env.NX_CLOUD_ENCRYPTION_KEY || r.NX_CLOUD_ENCRYPTION_KEY),
    (P =
      process.env.NX_VERBOSE_LOGGING === 'true' ||
      r.NX_VERBOSE_LOGGING === 'true'),
    (Se =
      process.env.NX_CLOUD_NO_TIMEOUTS === 'true' ||
      r.NX_CLOUD_NO_TIMEOUTS === 'true');
}
function Ti() {
  return pa();
}
function pa() {
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
function vr() {
  return process.env.NX_CI_EXECUTION_ENV ?? '';
}
function xi() {
  if (process.env.NX_RUN_GROUP !== void 0) return process.env.NX_RUN_GROUP;
  let r = pa();
  return r ? (vr() ? `${r}-${vr()}` : r) : Sr();
}
function Or() {
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
function Ff() {
  let r = require('os'),
    e = (0, ha.createHash)('md5');
  return (
    e.update(vf()),
    {
      machineId: e.digest('base64'),
      platform: r.platform(),
      version: r.version ? r.version() : '',
      cpuCores: r.cpus().length,
    }
  );
}
function Bf() {
  let r = (0, Jr.parse)(process.argv[1]).name,
    e = `${process.argv.slice(2).join(' ')}`;
  return `${r} ${e}`;
}
var Si,
  ha,
  fa,
  Jr,
  gf,
  vf,
  wf,
  Bt,
  Cf,
  Sf,
  Mt,
  Of,
  Pt,
  Tf,
  xf,
  bf,
  Oi,
  wr,
  If,
  Cr,
  da,
  P,
  Se,
  dt = le(() => {
    'use strict';
    (Si = require('child_process')),
      (ha = require('crypto')),
      (fa = require('fs')),
      (Jr = require('path'));
    na();
    (gf = ua()),
      ({ machineIdSync: vf } = la()),
      ({ workspaceRoot: wf } = Ze()),
      (Bt = 9999999),
      (Cf = process.env.NX_CLOUD_AGENT_TIMEOUT_MS
        ? Number(process.env.NX_CLOUD_AGENT_TIMEOUT_MS)
        : 36e5),
      (Sf = process.env.NX_CLOUD_ORCHESTRATOR_TIMEOUT_MS
        ? Number(process.env.NX_CLOUD_ORCHESTRATOR_TIMEOUT_MS)
        : 36e5),
      (Mt = 1e3 * 1e3 * 1e4),
      (Of = process.env.NX_CLOUD_UNLIMITED_OUTPUT === 'true'),
      (Pt = 1e3 * 1e3 * 300),
      (Tf = 166),
      (xf = process.env.NX_CLOUD_DISTRIBUTED_EXECUTION_AGENT_COUNT
        ? Number(process.env.NX_CLOUD_DISTRIBUTED_EXECUTION_AGENT_COUNT)
        : null),
      (bf =
        process.env.NX_CLOUD_DISTRIBUTED_EXECUTION_STOP_AGENTS_ON_FAILURE !=
        'false'),
      (Oi = process.env.NX_CLOUD_FORCE_METRICS === 'true'),
      (wr = process.env.NX_CLOUD_NUMBER_OF_RETRIES
        ? Number(process.env.NX_CLOUD_NUMBER_OF_RETRIES)
        : ia()
        ? 10
        : 1),
      (If = process.env.NX_NO_CLOUD === 'true');
    Uf();
  });
function kt(r) {
  return new Promise((e) => {
    setTimeout(() => e(null), r);
  });
}
var bi = le(() => {
  'use strict';
});
var Ii = E((yy, Ea) => {
  'use strict';
  Ea.exports = function (e, t) {
    return function () {
      for (var i = new Array(arguments.length), n = 0; n < i.length; n++)
        i[n] = arguments[n];
      return e.apply(t, i);
    };
  };
});
var te = E((_y, Ra) => {
  'use strict';
  var Mf = Ii(),
    pt = Object.prototype.toString;
  function Ai(r) {
    return pt.call(r) === '[object Array]';
  }
  function Ni(r) {
    return typeof r > 'u';
  }
  function Pf(r) {
    return (
      r !== null &&
      !Ni(r) &&
      r.constructor !== null &&
      !Ni(r.constructor) &&
      typeof r.constructor.isBuffer == 'function' &&
      r.constructor.isBuffer(r)
    );
  }
  function kf(r) {
    return pt.call(r) === '[object ArrayBuffer]';
  }
  function qf(r) {
    return typeof FormData < 'u' && r instanceof FormData;
  }
  function Hf(r) {
    var e;
    return (
      typeof ArrayBuffer < 'u' && ArrayBuffer.isView
        ? (e = ArrayBuffer.isView(r))
        : (e = r && r.buffer && r.buffer instanceof ArrayBuffer),
      e
    );
  }
  function Gf(r) {
    return typeof r == 'string';
  }
  function zf(r) {
    return typeof r == 'number';
  }
  function ya(r) {
    return r !== null && typeof r == 'object';
  }
  function Qr(r) {
    if (pt.call(r) !== '[object Object]') return !1;
    var e = Object.getPrototypeOf(r);
    return e === null || e === Object.prototype;
  }
  function jf(r) {
    return pt.call(r) === '[object Date]';
  }
  function Vf(r) {
    return pt.call(r) === '[object File]';
  }
  function $f(r) {
    return pt.call(r) === '[object Blob]';
  }
  function _a(r) {
    return pt.call(r) === '[object Function]';
  }
  function Xf(r) {
    return ya(r) && _a(r.pipe);
  }
  function Kf(r) {
    return typeof URLSearchParams < 'u' && r instanceof URLSearchParams;
  }
  function Wf(r) {
    return r.trim ? r.trim() : r.replace(/^\s+|\s+$/g, '');
  }
  function Yf() {
    return typeof navigator < 'u' &&
      (navigator.product === 'ReactNative' ||
        navigator.product === 'NativeScript' ||
        navigator.product === 'NS')
      ? !1
      : typeof window < 'u' && typeof document < 'u';
  }
  function Di(r, e) {
    if (!(r === null || typeof r > 'u'))
      if ((typeof r != 'object' && (r = [r]), Ai(r)))
        for (var t = 0, s = r.length; t < s; t++) e.call(null, r[t], t, r);
      else
        for (var i in r)
          Object.prototype.hasOwnProperty.call(r, i) &&
            e.call(null, r[i], i, r);
  }
  function Li() {
    var r = {};
    function e(i, n) {
      Qr(r[n]) && Qr(i)
        ? (r[n] = Li(r[n], i))
        : Qr(i)
        ? (r[n] = Li({}, i))
        : Ai(i)
        ? (r[n] = i.slice())
        : (r[n] = i);
    }
    for (var t = 0, s = arguments.length; t < s; t++) Di(arguments[t], e);
    return r;
  }
  function Zf(r, e, t) {
    return (
      Di(e, function (i, n) {
        t && typeof i == 'function' ? (r[n] = Mf(i, t)) : (r[n] = i);
      }),
      r
    );
  }
  function Jf(r) {
    return r.charCodeAt(0) === 65279 && (r = r.slice(1)), r;
  }
  Ra.exports = {
    isArray: Ai,
    isArrayBuffer: kf,
    isBuffer: Pf,
    isFormData: qf,
    isArrayBufferView: Hf,
    isString: Gf,
    isNumber: zf,
    isObject: ya,
    isPlainObject: Qr,
    isUndefined: Ni,
    isDate: jf,
    isFile: Vf,
    isBlob: $f,
    isFunction: _a,
    isStream: Xf,
    isURLSearchParams: Kf,
    isStandardBrowserEnv: Yf,
    forEach: Di,
    merge: Li,
    extend: Zf,
    trim: Wf,
    stripBOM: Jf,
  };
});
var es = E((Ry, va) => {
  'use strict';
  var qt = te();
  function ga(r) {
    return encodeURIComponent(r)
      .replace(/%3A/gi, ':')
      .replace(/%24/g, '$')
      .replace(/%2C/gi, ',')
      .replace(/%20/g, '+')
      .replace(/%5B/gi, '[')
      .replace(/%5D/gi, ']');
  }
  va.exports = function (e, t, s) {
    if (!t) return e;
    var i;
    if (s) i = s(t);
    else if (qt.isURLSearchParams(t)) i = t.toString();
    else {
      var n = [];
      qt.forEach(t, function (a, l) {
        a === null ||
          typeof a > 'u' ||
          (qt.isArray(a) ? (l = l + '[]') : (a = [a]),
          qt.forEach(a, function (h) {
            qt.isDate(h)
              ? (h = h.toISOString())
              : qt.isObject(h) && (h = JSON.stringify(h)),
              n.push(ga(l) + '=' + ga(h));
          }));
      }),
        (i = n.join('&'));
    }
    if (i) {
      var o = e.indexOf('#');
      o !== -1 && (e = e.slice(0, o)),
        (e += (e.indexOf('?') === -1 ? '?' : '&') + i);
    }
    return e;
  };
});
var Ca = E((gy, wa) => {
  'use strict';
  var Qf = te();
  function ts() {
    this.handlers = [];
  }
  ts.prototype.use = function (e, t, s) {
    return (
      this.handlers.push({
        fulfilled: e,
        rejected: t,
        synchronous: s ? s.synchronous : !1,
        runWhen: s ? s.runWhen : null,
      }),
      this.handlers.length - 1
    );
  };
  ts.prototype.eject = function (e) {
    this.handlers[e] && (this.handlers[e] = null);
  };
  ts.prototype.forEach = function (e) {
    Qf.forEach(this.handlers, function (s) {
      s !== null && e(s);
    });
  };
  wa.exports = ts;
});
var Oa = E((vy, Sa) => {
  'use strict';
  var ed = te();
  Sa.exports = function (e, t) {
    ed.forEach(e, function (i, n) {
      n !== t &&
        n.toUpperCase() === t.toUpperCase() &&
        ((e[t] = i), delete e[n]);
    });
  };
});
var rs = E((wy, Ta) => {
  'use strict';
  Ta.exports = function (e, t, s, i, n) {
    return (
      (e.config = t),
      s && (e.code = s),
      (e.request = i),
      (e.response = n),
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
var ss = E((Cy, xa) => {
  'use strict';
  var td = rs();
  xa.exports = function (e, t, s, i, n) {
    var o = new Error(e);
    return td(o, t, s, i, n);
  };
});
var Ui = E((Sy, ba) => {
  'use strict';
  var rd = ss();
  ba.exports = function (e, t, s) {
    var i = s.config.validateStatus;
    !s.status || !i || i(s.status)
      ? e(s)
      : t(
          rd(
            'Request failed with status code ' + s.status,
            s.config,
            null,
            s.request,
            s
          )
        );
  };
});
var Na = E((Oy, Ia) => {
  'use strict';
  var is = te();
  Ia.exports = is.isStandardBrowserEnv()
    ? (function () {
        return {
          write: function (t, s, i, n, o, c) {
            var a = [];
            a.push(t + '=' + encodeURIComponent(s)),
              is.isNumber(i) && a.push('expires=' + new Date(i).toGMTString()),
              is.isString(n) && a.push('path=' + n),
              is.isString(o) && a.push('domain=' + o),
              c === !0 && a.push('secure'),
              (document.cookie = a.join('; '));
          },
          read: function (t) {
            var s = document.cookie.match(
              new RegExp('(^|;\\s*)(' + t + ')=([^;]*)')
            );
            return s ? decodeURIComponent(s[3]) : null;
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
var Aa = E((Ty, La) => {
  'use strict';
  La.exports = function (e) {
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
  };
});
var Ua = E((xy, Da) => {
  'use strict';
  Da.exports = function (e, t) {
    return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e;
  };
});
var Fi = E((by, Fa) => {
  'use strict';
  var sd = Aa(),
    id = Ua();
  Fa.exports = function (e, t) {
    return e && !sd(t) ? id(e, t) : t;
  };
});
var Ma = E((Iy, Ba) => {
  'use strict';
  var Bi = te(),
    nd = [
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
  Ba.exports = function (e) {
    var t = {},
      s,
      i,
      n;
    return (
      e &&
        Bi.forEach(
          e.split(`
`),
          function (c) {
            if (
              ((n = c.indexOf(':')),
              (s = Bi.trim(c.substr(0, n)).toLowerCase()),
              (i = Bi.trim(c.substr(n + 1))),
              s)
            ) {
              if (t[s] && nd.indexOf(s) >= 0) return;
              s === 'set-cookie'
                ? (t[s] = (t[s] ? t[s] : []).concat([i]))
                : (t[s] = t[s] ? t[s] + ', ' + i : i);
            }
          }
        ),
      t
    );
  };
});
var qa = E((Ny, ka) => {
  'use strict';
  var Pa = te();
  ka.exports = Pa.isStandardBrowserEnv()
    ? (function () {
        var e = /(msie|trident)/i.test(navigator.userAgent),
          t = document.createElement('a'),
          s;
        function i(n) {
          var o = n;
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
          (s = i(window.location.href)),
          function (o) {
            var c = Pa.isString(o) ? i(o) : o;
            return c.protocol === s.protocol && c.host === s.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })();
});
var Ga = E((Ly, Ha) => {
  'use strict';
  var ns = te(),
    od = Ui(),
    ad = Na(),
    cd = es(),
    ud = Fi(),
    ld = Ma(),
    hd = qa(),
    Mi = ss();
  Ha.exports = function (e) {
    return new Promise(function (s, i) {
      var n = e.data,
        o = e.headers,
        c = e.responseType;
      ns.isFormData(n) && delete o['Content-Type'];
      var a = new XMLHttpRequest();
      if (e.auth) {
        var l = e.auth.username || '',
          u = e.auth.password
            ? unescape(encodeURIComponent(e.auth.password))
            : '';
        o.Authorization = 'Basic ' + btoa(l + ':' + u);
      }
      var h = ud(e.baseURL, e.url);
      a.open(e.method.toUpperCase(), cd(h, e.params, e.paramsSerializer), !0),
        (a.timeout = e.timeout);
      function f() {
        if (a) {
          var p =
              'getAllResponseHeaders' in a
                ? ld(a.getAllResponseHeaders())
                : null,
            y =
              !c || c === 'text' || c === 'json' ? a.responseText : a.response,
            _ = {
              data: y,
              status: a.status,
              statusText: a.statusText,
              headers: p,
              config: e,
              request: a,
            };
          od(s, i, _), (a = null);
        }
      }
      if (
        ('onloadend' in a
          ? (a.onloadend = f)
          : (a.onreadystatechange = function () {
              !a ||
                a.readyState !== 4 ||
                (a.status === 0 &&
                  !(a.responseURL && a.responseURL.indexOf('file:') === 0)) ||
                setTimeout(f);
            }),
        (a.onabort = function () {
          a && (i(Mi('Request aborted', e, 'ECONNABORTED', a)), (a = null));
        }),
        (a.onerror = function () {
          i(Mi('Network Error', e, null, a)), (a = null);
        }),
        (a.ontimeout = function () {
          var y = 'timeout of ' + e.timeout + 'ms exceeded';
          e.timeoutErrorMessage && (y = e.timeoutErrorMessage),
            i(
              Mi(
                y,
                e,
                e.transitional && e.transitional.clarifyTimeoutError
                  ? 'ETIMEDOUT'
                  : 'ECONNABORTED',
                a
              )
            ),
            (a = null);
        }),
        ns.isStandardBrowserEnv())
      ) {
        var d =
          (e.withCredentials || hd(h)) && e.xsrfCookieName
            ? ad.read(e.xsrfCookieName)
            : void 0;
        d && (o[e.xsrfHeaderName] = d);
      }
      'setRequestHeader' in a &&
        ns.forEach(o, function (y, _) {
          typeof n > 'u' && _.toLowerCase() === 'content-type'
            ? delete o[_]
            : a.setRequestHeader(_, y);
        }),
        ns.isUndefined(e.withCredentials) ||
          (a.withCredentials = !!e.withCredentials),
        c && c !== 'json' && (a.responseType = e.responseType),
        typeof e.onDownloadProgress == 'function' &&
          a.addEventListener('progress', e.onDownloadProgress),
        typeof e.onUploadProgress == 'function' &&
          a.upload &&
          a.upload.addEventListener('progress', e.onUploadProgress),
        e.cancelToken &&
          e.cancelToken.promise.then(function (y) {
            a && (a.abort(), i(y), (a = null));
          }),
        n || (n = null),
        a.send(n);
    });
  };
});
var ja = E((Ay, za) => {
  'use strict';
  var Ht = 1e3,
    Gt = Ht * 60,
    zt = Gt * 60,
    mt = zt * 24,
    fd = mt * 7,
    dd = mt * 365.25;
  za.exports = function (r, e) {
    e = e || {};
    var t = typeof r;
    if (t === 'string' && r.length > 0) return pd(r);
    if (t === 'number' && isFinite(r)) return e.long ? Ed(r) : md(r);
    throw new Error(
      'val is not a non-empty string or a valid number. val=' +
        JSON.stringify(r)
    );
  };
  function pd(r) {
    if (((r = String(r)), !(r.length > 100))) {
      var e =
        /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
          r
        );
      if (e) {
        var t = parseFloat(e[1]),
          s = (e[2] || 'ms').toLowerCase();
        switch (s) {
          case 'years':
          case 'year':
          case 'yrs':
          case 'yr':
          case 'y':
            return t * dd;
          case 'weeks':
          case 'week':
          case 'w':
            return t * fd;
          case 'days':
          case 'day':
          case 'd':
            return t * mt;
          case 'hours':
          case 'hour':
          case 'hrs':
          case 'hr':
          case 'h':
            return t * zt;
          case 'minutes':
          case 'minute':
          case 'mins':
          case 'min':
          case 'm':
            return t * Gt;
          case 'seconds':
          case 'second':
          case 'secs':
          case 'sec':
          case 's':
            return t * Ht;
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
  function md(r) {
    var e = Math.abs(r);
    return e >= mt
      ? Math.round(r / mt) + 'd'
      : e >= zt
      ? Math.round(r / zt) + 'h'
      : e >= Gt
      ? Math.round(r / Gt) + 'm'
      : e >= Ht
      ? Math.round(r / Ht) + 's'
      : r + 'ms';
  }
  function Ed(r) {
    var e = Math.abs(r);
    return e >= mt
      ? os(r, e, mt, 'day')
      : e >= zt
      ? os(r, e, zt, 'hour')
      : e >= Gt
      ? os(r, e, Gt, 'minute')
      : e >= Ht
      ? os(r, e, Ht, 'second')
      : r + ' ms';
  }
  function os(r, e, t, s) {
    var i = e >= t * 1.5;
    return Math.round(r / t) + ' ' + s + (i ? 's' : '');
  }
});
var Pi = E((Dy, Va) => {
  'use strict';
  function yd(r) {
    (t.debug = t),
      (t.default = t),
      (t.coerce = a),
      (t.disable = n),
      (t.enable = i),
      (t.enabled = o),
      (t.humanize = ja()),
      (t.destroy = l),
      Object.keys(r).forEach((u) => {
        t[u] = r[u];
      }),
      (t.names = []),
      (t.skips = []),
      (t.formatters = {});
    function e(u) {
      let h = 0;
      for (let f = 0; f < u.length; f++)
        (h = (h << 5) - h + u.charCodeAt(f)), (h |= 0);
      return t.colors[Math.abs(h) % t.colors.length];
    }
    t.selectColor = e;
    function t(u) {
      let h,
        f = null,
        d,
        p;
      function y(..._) {
        if (!y.enabled) return;
        let g = y,
          O = Number(new Date()),
          S = O - (h || O);
        (g.diff = S),
          (g.prev = h),
          (g.curr = O),
          (h = O),
          (_[0] = t.coerce(_[0])),
          typeof _[0] != 'string' && _.unshift('%O');
        let C = 0;
        (_[0] = _[0].replace(/%([a-zA-Z%])/g, (v, A) => {
          if (v === '%%') return '%';
          C++;
          let b = t.formatters[A];
          if (typeof b == 'function') {
            let B = _[C];
            (v = b.call(g, B)), _.splice(C, 1), C--;
          }
          return v;
        })),
          t.formatArgs.call(g, _),
          (g.log || t.log).apply(g, _);
      }
      return (
        (y.namespace = u),
        (y.useColors = t.useColors()),
        (y.color = t.selectColor(u)),
        (y.extend = s),
        (y.destroy = t.destroy),
        Object.defineProperty(y, 'enabled', {
          enumerable: !0,
          configurable: !1,
          get: () =>
            f !== null
              ? f
              : (d !== t.namespaces && ((d = t.namespaces), (p = t.enabled(u))),
                p),
          set: (_) => {
            f = _;
          },
        }),
        typeof t.init == 'function' && t.init(y),
        y
      );
    }
    function s(u, h) {
      let f = t(this.namespace + (typeof h > 'u' ? ':' : h) + u);
      return (f.log = this.log), f;
    }
    function i(u) {
      t.save(u), (t.namespaces = u), (t.names = []), (t.skips = []);
      let h,
        f = (typeof u == 'string' ? u : '').split(/[\s,]+/),
        d = f.length;
      for (h = 0; h < d; h++)
        f[h] &&
          ((u = f[h].replace(/\*/g, '.*?')),
          u[0] === '-'
            ? t.skips.push(new RegExp('^' + u.slice(1) + '$'))
            : t.names.push(new RegExp('^' + u + '$')));
    }
    function n() {
      let u = [...t.names.map(c), ...t.skips.map(c).map((h) => '-' + h)].join(
        ','
      );
      return t.enable(''), u;
    }
    function o(u) {
      if (u[u.length - 1] === '*') return !0;
      let h, f;
      for (h = 0, f = t.skips.length; h < f; h++)
        if (t.skips[h].test(u)) return !1;
      for (h = 0, f = t.names.length; h < f; h++)
        if (t.names[h].test(u)) return !0;
      return !1;
    }
    function c(u) {
      return u
        .toString()
        .substring(2, u.toString().length - 2)
        .replace(/\.\*\?$/, '*');
    }
    function a(u) {
      return u instanceof Error ? u.stack || u.message : u;
    }
    function l() {
      console.warn(
        'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
      );
    }
    return t.enable(t.load()), t;
  }
  Va.exports = yd;
});
var $a = E((he, as) => {
  'use strict';
  he.formatArgs = Rd;
  he.save = gd;
  he.load = vd;
  he.useColors = _d;
  he.storage = wd();
  he.destroy = (() => {
    let r = !1;
    return () => {
      r ||
        ((r = !0),
        console.warn(
          'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
        ));
    };
  })();
  he.colors = [
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
  function _d() {
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
  function Rd(r) {
    if (
      ((r[0] =
        (this.useColors ? '%c' : '') +
        this.namespace +
        (this.useColors ? ' %c' : ' ') +
        r[0] +
        (this.useColors ? '%c ' : ' ') +
        '+' +
        as.exports.humanize(this.diff)),
      !this.useColors)
    )
      return;
    let e = 'color: ' + this.color;
    r.splice(1, 0, e, 'color: inherit');
    let t = 0,
      s = 0;
    r[0].replace(/%[a-zA-Z%]/g, (i) => {
      i !== '%%' && (t++, i === '%c' && (s = t));
    }),
      r.splice(s, 0, e);
  }
  he.log = console.debug || console.log || (() => {});
  function gd(r) {
    try {
      r ? he.storage.setItem('debug', r) : he.storage.removeItem('debug');
    } catch {}
  }
  function vd() {
    let r;
    try {
      r = he.storage.getItem('debug');
    } catch {}
    return (
      !r && typeof process < 'u' && 'env' in process && (r = process.env.DEBUG),
      r
    );
  }
  function wd() {
    try {
      return localStorage;
    } catch {}
  }
  as.exports = Pi()(he);
  var { formatters: Cd } = as.exports;
  Cd.j = function (r) {
    try {
      return JSON.stringify(r);
    } catch (e) {
      return '[UnexpectedJSONParseError]: ' + e.message;
    }
  };
});
var Ka = E((Uy, Xa) => {
  'use strict';
  Xa.exports = (r, e = process.argv) => {
    let t = r.startsWith('-') ? '' : r.length === 1 ? '-' : '--',
      s = e.indexOf(t + r),
      i = e.indexOf('--');
    return s !== -1 && (i === -1 || s < i);
  };
});
var Za = E((Fy, Ya) => {
  'use strict';
  var Sd = require('os'),
    Wa = require('tty'),
    ye = Ka(),
    { env: j } = process,
    Je;
  ye('no-color') || ye('no-colors') || ye('color=false') || ye('color=never')
    ? (Je = 0)
    : (ye('color') || ye('colors') || ye('color=true') || ye('color=always')) &&
      (Je = 1);
  'FORCE_COLOR' in j &&
    (j.FORCE_COLOR === 'true'
      ? (Je = 1)
      : j.FORCE_COLOR === 'false'
      ? (Je = 0)
      : (Je =
          j.FORCE_COLOR.length === 0
            ? 1
            : Math.min(parseInt(j.FORCE_COLOR, 10), 3)));
  function ki(r) {
    return r === 0
      ? !1
      : { level: r, hasBasic: !0, has256: r >= 2, has16m: r >= 3 };
  }
  function qi(r, e) {
    if (Je === 0) return 0;
    if (ye('color=16m') || ye('color=full') || ye('color=truecolor')) return 3;
    if (ye('color=256')) return 2;
    if (r && !e && Je === void 0) return 0;
    let t = Je || 0;
    if (j.TERM === 'dumb') return t;
    if (process.platform === 'win32') {
      let s = Sd.release().split('.');
      return Number(s[0]) >= 10 && Number(s[2]) >= 10586
        ? Number(s[2]) >= 14931
          ? 3
          : 2
        : 1;
    }
    if ('CI' in j)
      return [
        'TRAVIS',
        'CIRCLECI',
        'APPVEYOR',
        'GITLAB_CI',
        'GITHUB_ACTIONS',
        'BUILDKITE',
      ].some((s) => s in j) || j.CI_NAME === 'codeship'
        ? 1
        : t;
    if ('TEAMCITY_VERSION' in j)
      return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(j.TEAMCITY_VERSION) ? 1 : 0;
    if (j.COLORTERM === 'truecolor') return 3;
    if ('TERM_PROGRAM' in j) {
      let s = parseInt((j.TERM_PROGRAM_VERSION || '').split('.')[0], 10);
      switch (j.TERM_PROGRAM) {
        case 'iTerm.app':
          return s >= 3 ? 3 : 2;
        case 'Apple_Terminal':
          return 2;
      }
    }
    return /-256(color)?$/i.test(j.TERM)
      ? 2
      : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(
          j.TERM
        ) || 'COLORTERM' in j
      ? 1
      : t;
  }
  function Od(r) {
    let e = qi(r, r && r.isTTY);
    return ki(e);
  }
  Ya.exports = {
    supportsColor: Od,
    stdout: ki(qi(!0, Wa.isatty(1))),
    stderr: ki(qi(!0, Wa.isatty(2))),
  };
});
var Qa = E(($, us) => {
  'use strict';
  var Td = require('tty'),
    cs = require('util');
  $.init = Dd;
  $.log = Nd;
  $.formatArgs = bd;
  $.save = Ld;
  $.load = Ad;
  $.useColors = xd;
  $.destroy = cs.deprecate(() => {},
  'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
  $.colors = [6, 2, 3, 4, 5, 1];
  try {
    let r = Za();
    r &&
      (r.stderr || r).level >= 2 &&
      ($.colors = [
        20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63,
        68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128,
        129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168,
        169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200,
        201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221,
      ]);
  } catch {}
  $.inspectOpts = Object.keys(process.env)
    .filter((r) => /^debug_/i.test(r))
    .reduce((r, e) => {
      let t = e
          .substring(6)
          .toLowerCase()
          .replace(/_([a-z])/g, (i, n) => n.toUpperCase()),
        s = process.env[e];
      return (
        /^(yes|on|true|enabled)$/i.test(s)
          ? (s = !0)
          : /^(no|off|false|disabled)$/i.test(s)
          ? (s = !1)
          : s === 'null'
          ? (s = null)
          : (s = Number(s)),
        (r[t] = s),
        r
      );
    }, {});
  function xd() {
    return 'colors' in $.inspectOpts
      ? !!$.inspectOpts.colors
      : Td.isatty(process.stderr.fd);
  }
  function bd(r) {
    let { namespace: e, useColors: t } = this;
    if (t) {
      let s = this.color,
        i = '\x1B[3' + (s < 8 ? s : '8;5;' + s),
        n = `  ${i};1m${e} \x1B[0m`;
      (r[0] =
        n +
        r[0]
          .split(
            `
`
          )
          .join(
            `
` + n
          )),
        r.push(i + 'm+' + us.exports.humanize(this.diff) + '\x1B[0m');
    } else r[0] = Id() + e + ' ' + r[0];
  }
  function Id() {
    return $.inspectOpts.hideDate ? '' : new Date().toISOString() + ' ';
  }
  function Nd(...r) {
    return process.stderr.write(
      cs.format(...r) +
        `
`
    );
  }
  function Ld(r) {
    r ? (process.env.DEBUG = r) : delete process.env.DEBUG;
  }
  function Ad() {
    return process.env.DEBUG;
  }
  function Dd(r) {
    r.inspectOpts = {};
    let e = Object.keys($.inspectOpts);
    for (let t = 0; t < e.length; t++)
      r.inspectOpts[e[t]] = $.inspectOpts[e[t]];
  }
  us.exports = Pi()($);
  var { formatters: Ja } = us.exports;
  Ja.o = function (r) {
    return (
      (this.inspectOpts.colors = this.useColors),
      cs
        .inspect(r, this.inspectOpts)
        .split(
          `
`
        )
        .map((e) => e.trim())
        .join(' ')
    );
  };
  Ja.O = function (r) {
    return (
      (this.inspectOpts.colors = this.useColors),
      cs.inspect(r, this.inspectOpts)
    );
  };
});
var ec = E((By, Hi) => {
  'use strict';
  typeof process > 'u' ||
  process.type === 'renderer' ||
  process.browser === !0 ||
  process.__nwjs
    ? (Hi.exports = $a())
    : (Hi.exports = Qa());
});
var rc = E((My, tc) => {
  'use strict';
  var Tr;
  tc.exports = function () {
    if (!Tr) {
      try {
        Tr = ec()('follow-redirects');
      } catch {}
      typeof Tr != 'function' && (Tr = function () {});
    }
    Tr.apply(null, arguments);
  };
});
var Wi = E((Py, Ki) => {
  'use strict';
  var Et = require('url'),
    Gi = Et.URL,
    Ud = require('http'),
    Fd = require('https'),
    ji = require('stream').Writable,
    nc = require('assert'),
    oc = rc(),
    Vi = ['abort', 'aborted', 'connect', 'error', 'socket', 'timeout'],
    $i = Object.create(null);
  Vi.forEach(function (r) {
    $i[r] = function (e, t, s) {
      this._redirectable.emit(r, e, t, s);
    };
  });
  var Bd = br('ERR_INVALID_URL', 'Invalid URL', TypeError),
    sc = br('ERR_FR_REDIRECTION_FAILURE', 'Redirected request failed'),
    Md = br(
      'ERR_FR_TOO_MANY_REDIRECTS',
      'Maximum number of redirects exceeded'
    ),
    Pd = br(
      'ERR_FR_MAX_BODY_LENGTH_EXCEEDED',
      'Request body larger than maxBodyLength limit'
    ),
    kd = br('ERR_STREAM_WRITE_AFTER_END', 'write after end'),
    qd = ji.prototype.destroy || cc;
  function ne(r, e) {
    ji.call(this),
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
    (this._onNativeResponse = function (s) {
      t._processResponse(s);
    }),
      this._performRequest();
  }
  ne.prototype = Object.create(ji.prototype);
  ne.prototype.abort = function () {
    Xi(this._currentRequest), this._currentRequest.abort(), this.emit('abort');
  };
  ne.prototype.destroy = function (r) {
    return Xi(this._currentRequest, r), qd.call(this, r), this;
  };
  ne.prototype.write = function (r, e, t) {
    if (this._ending) throw new kd();
    if (!yt(r) && !Gd(r))
      throw new TypeError('data should be a string, Buffer or Uint8Array');
    if ((xr(e) && ((t = e), (e = null)), r.length === 0)) {
      t && t();
      return;
    }
    this._requestBodyLength + r.length <= this._options.maxBodyLength
      ? ((this._requestBodyLength += r.length),
        this._requestBodyBuffers.push({ data: r, encoding: e }),
        this._currentRequest.write(r, e, t))
      : (this.emit('error', new Pd()), this.abort());
  };
  ne.prototype.end = function (r, e, t) {
    if (
      (xr(r) ? ((t = r), (r = e = null)) : xr(e) && ((t = e), (e = null)), !r)
    )
      (this._ended = this._ending = !0),
        this._currentRequest.end(null, null, t);
    else {
      var s = this,
        i = this._currentRequest;
      this.write(r, e, function () {
        (s._ended = !0), i.end(null, null, t);
      }),
        (this._ending = !0);
    }
  };
  ne.prototype.setHeader = function (r, e) {
    (this._options.headers[r] = e), this._currentRequest.setHeader(r, e);
  };
  ne.prototype.removeHeader = function (r) {
    delete this._options.headers[r], this._currentRequest.removeHeader(r);
  };
  ne.prototype.setTimeout = function (r, e) {
    var t = this;
    function s(o) {
      o.setTimeout(r),
        o.removeListener('timeout', o.destroy),
        o.addListener('timeout', o.destroy);
    }
    function i(o) {
      t._timeout && clearTimeout(t._timeout),
        (t._timeout = setTimeout(function () {
          t.emit('timeout'), n();
        }, r)),
        s(o);
    }
    function n() {
      t._timeout && (clearTimeout(t._timeout), (t._timeout = null)),
        t.removeListener('abort', n),
        t.removeListener('error', n),
        t.removeListener('response', n),
        t.removeListener('close', n),
        e && t.removeListener('timeout', e),
        t.socket || t._currentRequest.removeListener('socket', i);
    }
    return (
      e && this.on('timeout', e),
      this.socket ? i(this.socket) : this._currentRequest.once('socket', i),
      this.on('socket', s),
      this.on('abort', n),
      this.on('error', n),
      this.on('response', n),
      this.on('close', n),
      this
    );
  };
  ['flushHeaders', 'getHeader', 'setNoDelay', 'setSocketKeepAlive'].forEach(
    function (r) {
      ne.prototype[r] = function (e, t) {
        return this._currentRequest[r](e, t);
      };
    }
  );
  ['aborted', 'connection', 'socket'].forEach(function (r) {
    Object.defineProperty(ne.prototype, r, {
      get: function () {
        return this._currentRequest[r];
      },
    });
  });
  ne.prototype._sanitizeOptions = function (r) {
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
  ne.prototype._performRequest = function () {
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
    var s = (this._currentRequest = e.request(
      this._options,
      this._onNativeResponse
    ));
    s._redirectable = this;
    for (var i of Vi) s.on(i, $i[i]);
    if (
      ((this._currentUrl = /^\//.test(this._options.path)
        ? Et.format(this._options)
        : this._options.path),
      this._isRedirect)
    ) {
      var n = 0,
        o = this,
        c = this._requestBodyBuffers;
      (function a(l) {
        if (s === o._currentRequest)
          if (l) o.emit('error', l);
          else if (n < c.length) {
            var u = c[n++];
            s.finished || s.write(u.data, u.encoding, a);
          } else o._ended && s.end();
      })();
    }
  };
  ne.prototype._processResponse = function (r) {
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
      (Xi(this._currentRequest),
      r.destroy(),
      ++this._redirectCount > this._options.maxRedirects)
    ) {
      this.emit('error', new Md());
      return;
    }
    var s,
      i = this._options.beforeRedirect;
    i &&
      (s = Object.assign(
        { Host: r.req.getHeader('host') },
        this._options.headers
      ));
    var n = this._options.method;
    (((e === 301 || e === 302) && this._options.method === 'POST') ||
      (e === 303 && !/^(?:GET|HEAD)$/.test(this._options.method))) &&
      ((this._options.method = 'GET'),
      (this._requestBodyBuffers = []),
      zi(/^content-/i, this._options.headers));
    var o = zi(/^host$/i, this._options.headers),
      c = Et.parse(this._currentUrl),
      a = o || c.host,
      l = /^\w+:/.test(t)
        ? this._currentUrl
        : Et.format(Object.assign(c, { host: a })),
      u;
    try {
      u = Et.resolve(l, t);
    } catch (p) {
      this.emit('error', new sc({ cause: p }));
      return;
    }
    oc('redirecting to', u), (this._isRedirect = !0);
    var h = Et.parse(u);
    if (
      (Object.assign(this._options, h),
      ((h.protocol !== c.protocol && h.protocol !== 'https:') ||
        (h.host !== a && !Hd(h.host, a))) &&
        zi(/^(?:authorization|cookie)$/i, this._options.headers),
      xr(i))
    ) {
      var f = { headers: r.headers, statusCode: e },
        d = { url: l, method: n, headers: s };
      try {
        i(this._options, f, d);
      } catch (p) {
        this.emit('error', p);
        return;
      }
      this._sanitizeOptions(this._options);
    }
    try {
      this._performRequest();
    } catch (p) {
      this.emit('error', new sc({ cause: p }));
    }
  };
  function ac(r) {
    var e = { maxRedirects: 21, maxBodyLength: 10485760 },
      t = {};
    return (
      Object.keys(r).forEach(function (s) {
        var i = s + ':',
          n = (t[i] = r[s]),
          o = (e[s] = Object.create(n));
        function c(l, u, h) {
          if (yt(l)) {
            var f;
            try {
              f = ic(new Gi(l));
            } catch {
              f = Et.parse(l);
            }
            if (!yt(f.protocol)) throw new Bd({ input: l });
            l = f;
          } else Gi && l instanceof Gi ? (l = ic(l)) : ((h = u), (u = l), (l = { protocol: i }));
          return (
            xr(u) && ((h = u), (u = null)),
            (u = Object.assign(
              { maxRedirects: e.maxRedirects, maxBodyLength: e.maxBodyLength },
              l,
              u
            )),
            (u.nativeProtocols = t),
            !yt(u.host) && !yt(u.hostname) && (u.hostname = '::1'),
            nc.equal(u.protocol, i, 'protocol mismatch'),
            oc('options', u),
            new ne(u, h)
          );
        }
        function a(l, u, h) {
          var f = o.request(l, u, h);
          return f.end(), f;
        }
        Object.defineProperties(o, {
          request: { value: c, configurable: !0, enumerable: !0, writable: !0 },
          get: { value: a, configurable: !0, enumerable: !0, writable: !0 },
        });
      }),
      e
    );
  }
  function cc() {}
  function ic(r) {
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
  function zi(r, e) {
    var t;
    for (var s in e) r.test(s) && ((t = e[s]), delete e[s]);
    return t === null || typeof t > 'u' ? void 0 : String(t).trim();
  }
  function br(r, e, t) {
    function s(i) {
      Error.captureStackTrace(this, this.constructor),
        Object.assign(this, i || {}),
        (this.code = r),
        (this.message = this.cause ? e + ': ' + this.cause.message : e);
    }
    return (
      (s.prototype = new (t || Error)()),
      (s.prototype.constructor = s),
      (s.prototype.name = 'Error [' + r + ']'),
      s
    );
  }
  function Xi(r, e) {
    for (var t of Vi) r.removeListener(t, $i[t]);
    r.on('error', cc), r.destroy(e);
  }
  function Hd(r, e) {
    nc(yt(r) && yt(e));
    var t = r.length - e.length - 1;
    return t > 0 && r[t] === '.' && r.endsWith(e);
  }
  function yt(r) {
    return typeof r == 'string' || r instanceof String;
  }
  function xr(r) {
    return typeof r == 'function';
  }
  function Gd(r) {
    return typeof r == 'object' && 'length' in r;
  }
  Ki.exports = ac({ http: Ud, https: Fd });
  Ki.exports.wrap = ac;
});
var Yi = E((ky, zd) => {
  zd.exports = {
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
var pc = E((qy, dc) => {
  'use strict';
  var Ir = te(),
    uc = Ui(),
    jd = Fi(),
    Vd = es(),
    $d = require('http'),
    Xd = require('https'),
    Kd = Wi().http,
    Wd = Wi().https,
    lc = require('url'),
    Yd = require('zlib'),
    Zd = Yi(),
    ls = ss(),
    Zi = rs(),
    hc = /https:?/;
  function fc(r, e, t) {
    if (
      ((r.hostname = e.host),
      (r.host = e.host),
      (r.port = e.port),
      (r.path = t),
      e.auth)
    ) {
      var s = Buffer.from(
        e.auth.username + ':' + e.auth.password,
        'utf8'
      ).toString('base64');
      r.headers['Proxy-Authorization'] = 'Basic ' + s;
    }
    r.beforeRedirect = function (n) {
      (n.headers.host = n.host), fc(n, e, n.href);
    };
  }
  dc.exports = function (e) {
    return new Promise(function (s, i) {
      var n = function (T) {
          s(T);
        },
        o = function (T) {
          i(T);
        },
        c = e.data,
        a = e.headers;
      if (
        ('User-Agent' in a || 'user-agent' in a
          ? !a['User-Agent'] &&
            !a['user-agent'] &&
            (delete a['User-Agent'], delete a['user-agent'])
          : (a['User-Agent'] = 'axios/' + Zd.version),
        c && !Ir.isStream(c))
      ) {
        if (!Buffer.isBuffer(c))
          if (Ir.isArrayBuffer(c)) c = Buffer.from(new Uint8Array(c));
          else if (Ir.isString(c)) c = Buffer.from(c, 'utf-8');
          else
            return o(
              ls(
                'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',
                e
              )
            );
        a['Content-Length'] = c.length;
      }
      var l = void 0;
      if (e.auth) {
        var u = e.auth.username || '',
          h = e.auth.password || '';
        l = u + ':' + h;
      }
      var f = jd(e.baseURL, e.url),
        d = lc.parse(f),
        p = d.protocol || 'http:';
      if (!l && d.auth) {
        var y = d.auth.split(':'),
          _ = y[0] || '',
          g = y[1] || '';
        l = _ + ':' + g;
      }
      l && delete a.Authorization;
      var O = hc.test(p),
        S = O ? e.httpsAgent : e.httpAgent,
        C = {
          path: Vd(d.path, e.params, e.paramsSerializer).replace(/^\?/, ''),
          method: e.method.toUpperCase(),
          headers: a,
          agent: S,
          agents: { http: e.httpAgent, https: e.httpsAgent },
          auth: l,
        };
      e.socketPath
        ? (C.socketPath = e.socketPath)
        : ((C.hostname = d.hostname), (C.port = d.port));
      var L = e.proxy;
      if (!L && L !== !1) {
        var v = p.slice(0, -1) + '_proxy',
          A = process.env[v] || process.env[v.toUpperCase()];
        if (A) {
          var b = lc.parse(A),
            B = process.env.no_proxy || process.env.NO_PROXY,
            q = !0;
          if (B) {
            var ue = B.split(',').map(function (T) {
              return T.trim();
            });
            q = !ue.some(function (T) {
              return T
                ? T === '*' ||
                  (T[0] === '.' &&
                    d.hostname.substr(d.hostname.length - T.length) === T)
                  ? !0
                  : d.hostname === T
                : !1;
            });
          }
          if (
            q &&
            ((L = { host: b.hostname, port: b.port, protocol: b.protocol }),
            b.auth)
          ) {
            var se = b.auth.split(':');
            L.auth = { username: se[0], password: se[1] };
          }
        }
      }
      L &&
        ((C.headers.host = d.hostname + (d.port ? ':' + d.port : '')),
        fc(
          C,
          L,
          p + '//' + d.hostname + (d.port ? ':' + d.port : '') + C.path
        ));
      var H,
        Ee = O && (L ? hc.test(L.protocol) : !0);
      e.transport
        ? (H = e.transport)
        : e.maxRedirects === 0
        ? (H = Ee ? Xd : $d)
        : (e.maxRedirects && (C.maxRedirects = e.maxRedirects),
          (H = Ee ? Wd : Kd)),
        e.maxBodyLength > -1 && (C.maxBodyLength = e.maxBodyLength);
      var k = H.request(C, function (T) {
        if (!k.aborted) {
          var X = T,
            z = T.req || k;
          if (
            T.statusCode !== 204 &&
            z.method !== 'HEAD' &&
            e.decompress !== !1
          )
            switch (T.headers['content-encoding']) {
              case 'gzip':
              case 'compress':
              case 'deflate':
                (X = X.pipe(Yd.createUnzip())),
                  delete T.headers['content-encoding'];
                break;
            }
          var Ie = {
            status: T.statusCode,
            statusText: T.statusMessage,
            headers: T.headers,
            config: e,
            request: z,
          };
          if (e.responseType === 'stream') (Ie.data = X), uc(n, o, Ie);
          else {
            var m = [],
              R = 0;
            X.on('data', function (x) {
              m.push(x),
                (R += x.length),
                e.maxContentLength > -1 &&
                  R > e.maxContentLength &&
                  (X.destroy(),
                  o(
                    ls(
                      'maxContentLength size of ' +
                        e.maxContentLength +
                        ' exceeded',
                      e,
                      null,
                      z
                    )
                  ));
            }),
              X.on('error', function (x) {
                k.aborted || o(Zi(x, e, null, z));
              }),
              X.on('end', function () {
                var x = Buffer.concat(m);
                e.responseType !== 'arraybuffer' &&
                  ((x = x.toString(e.responseEncoding)),
                  (!e.responseEncoding || e.responseEncoding === 'utf8') &&
                    (x = Ir.stripBOM(x))),
                  (Ie.data = x),
                  uc(n, o, Ie);
              });
          }
        }
      });
      if (
        (k.on('error', function (T) {
          (k.aborted && T.code !== 'ERR_FR_TOO_MANY_REDIRECTS') ||
            o(Zi(T, e, null, k));
        }),
        e.timeout)
      ) {
        var Ce = parseInt(e.timeout, 10);
        if (isNaN(Ce)) {
          o(
            ls(
              'error trying to parse `config.timeout` to int',
              e,
              'ERR_PARSE_TIMEOUT',
              k
            )
          );
          return;
        }
        k.setTimeout(Ce, function () {
          k.abort(),
            o(
              ls(
                'timeout of ' + Ce + 'ms exceeded',
                e,
                e.transitional && e.transitional.clarifyTimeoutError
                  ? 'ETIMEDOUT'
                  : 'ECONNABORTED',
                k
              )
            );
        });
      }
      e.cancelToken &&
        e.cancelToken.promise.then(function (T) {
          k.aborted || (k.abort(), o(T));
        }),
        Ir.isStream(c)
          ? c
              .on('error', function (T) {
                o(Zi(T, e, null, k));
              })
              .pipe(k)
          : k.end(c);
    });
  };
});
var fs = E((Hy, yc) => {
  'use strict';
  var re = te(),
    mc = Oa(),
    Jd = rs(),
    Qd = { 'Content-Type': 'application/x-www-form-urlencoded' };
  function Ec(r, e) {
    !re.isUndefined(r) &&
      re.isUndefined(r['Content-Type']) &&
      (r['Content-Type'] = e);
  }
  function ep() {
    var r;
    return (
      typeof XMLHttpRequest < 'u'
        ? (r = Ga())
        : typeof process < 'u' &&
          Object.prototype.toString.call(process) === '[object process]' &&
          (r = pc()),
      r
    );
  }
  var hs = {
    transitional: {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1,
    },
    adapter: ep(),
    transformRequest: [
      function (e, t) {
        return (
          mc(t, 'Accept'),
          mc(t, 'Content-Type'),
          re.isFormData(e) ||
          re.isArrayBuffer(e) ||
          re.isBuffer(e) ||
          re.isStream(e) ||
          re.isFile(e) ||
          re.isBlob(e)
            ? e
            : re.isArrayBufferView(e)
            ? e.buffer
            : re.isURLSearchParams(e)
            ? (Ec(t, 'application/x-www-form-urlencoded;charset=utf-8'),
              e.toString())
            : re.isObject(e) || (t && t['Content-Type'] === 'application/json')
            ? (Ec(t, 'application/json'), JSON.stringify(e))
            : e
        );
      },
    ],
    transformResponse: [
      function (e) {
        var t = this.transitional,
          s = t && t.silentJSONParsing,
          i = t && t.forcedJSONParsing,
          n = !s && this.responseType === 'json';
        if (n || (i && re.isString(e) && e.length))
          try {
            return JSON.parse(e);
          } catch (o) {
            if (n)
              throw o.name === 'SyntaxError' ? Jd(o, this, 'E_JSON_PARSE') : o;
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
  hs.headers = { common: { Accept: 'application/json, text/plain, */*' } };
  re.forEach(['delete', 'get', 'head'], function (e) {
    hs.headers[e] = {};
  });
  re.forEach(['post', 'put', 'patch'], function (e) {
    hs.headers[e] = re.merge(Qd);
  });
  yc.exports = hs;
});
var Rc = E((Gy, _c) => {
  'use strict';
  var tp = te(),
    rp = fs();
  _c.exports = function (e, t, s) {
    var i = this || rp;
    return (
      tp.forEach(s, function (o) {
        e = o.call(i, e, t);
      }),
      e
    );
  };
});
var Ji = E((zy, gc) => {
  'use strict';
  gc.exports = function (e) {
    return !!(e && e.__CANCEL__);
  };
});
var Cc = E((jy, wc) => {
  'use strict';
  var vc = te(),
    Qi = Rc(),
    sp = Ji(),
    ip = fs();
  function en(r) {
    r.cancelToken && r.cancelToken.throwIfRequested();
  }
  wc.exports = function (e) {
    en(e),
      (e.headers = e.headers || {}),
      (e.data = Qi.call(e, e.data, e.headers, e.transformRequest)),
      (e.headers = vc.merge(
        e.headers.common || {},
        e.headers[e.method] || {},
        e.headers
      )),
      vc.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        function (i) {
          delete e.headers[i];
        }
      );
    var t = e.adapter || ip.adapter;
    return t(e).then(
      function (i) {
        return (
          en(e),
          (i.data = Qi.call(e, i.data, i.headers, e.transformResponse)),
          i
        );
      },
      function (i) {
        return (
          sp(i) ||
            (en(e),
            i &&
              i.response &&
              (i.response.data = Qi.call(
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
var tn = E((Vy, Sc) => {
  'use strict';
  var W = te();
  Sc.exports = function (e, t) {
    t = t || {};
    var s = {},
      i = ['url', 'method', 'data'],
      n = ['headers', 'auth', 'proxy', 'params'],
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
      c = ['validateStatus'];
    function a(f, d) {
      return W.isPlainObject(f) && W.isPlainObject(d)
        ? W.merge(f, d)
        : W.isPlainObject(d)
        ? W.merge({}, d)
        : W.isArray(d)
        ? d.slice()
        : d;
    }
    function l(f) {
      W.isUndefined(t[f])
        ? W.isUndefined(e[f]) || (s[f] = a(void 0, e[f]))
        : (s[f] = a(e[f], t[f]));
    }
    W.forEach(i, function (d) {
      W.isUndefined(t[d]) || (s[d] = a(void 0, t[d]));
    }),
      W.forEach(n, l),
      W.forEach(o, function (d) {
        W.isUndefined(t[d])
          ? W.isUndefined(e[d]) || (s[d] = a(void 0, e[d]))
          : (s[d] = a(void 0, t[d]));
      }),
      W.forEach(c, function (d) {
        d in t ? (s[d] = a(e[d], t[d])) : d in e && (s[d] = a(void 0, e[d]));
      });
    var u = i.concat(n).concat(o).concat(c),
      h = Object.keys(e)
        .concat(Object.keys(t))
        .filter(function (d) {
          return u.indexOf(d) === -1;
        });
    return W.forEach(h, l), s;
  };
});
var Ic = E(($y, bc) => {
  'use strict';
  var Tc = Yi(),
    rn = {};
  ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
    function (r, e) {
      rn[r] = function (s) {
        return typeof s === r || 'a' + (e < 1 ? 'n ' : ' ') + r;
      };
    }
  );
  var Oc = {},
    np = Tc.version.split('.');
  function xc(r, e) {
    for (var t = e ? e.split('.') : np, s = r.split('.'), i = 0; i < 3; i++) {
      if (t[i] > s[i]) return !0;
      if (t[i] < s[i]) return !1;
    }
    return !1;
  }
  rn.transitional = function (e, t, s) {
    var i = t && xc(t);
    function n(o, c) {
      return (
        '[Axios v' +
        Tc.version +
        "] Transitional option '" +
        o +
        "'" +
        c +
        (s ? '. ' + s : '')
      );
    }
    return function (o, c, a) {
      if (e === !1) throw new Error(n(c, ' has been removed in ' + t));
      return (
        i &&
          !Oc[c] &&
          ((Oc[c] = !0),
          console.warn(
            n(
              c,
              ' has been deprecated since v' +
                t +
                ' and will be removed in the near future'
            )
          )),
        e ? e(o, c, a) : !0
      );
    };
  };
  function op(r, e, t) {
    if (typeof r != 'object') throw new TypeError('options must be an object');
    for (var s = Object.keys(r), i = s.length; i-- > 0; ) {
      var n = s[i],
        o = e[n];
      if (o) {
        var c = r[n],
          a = c === void 0 || o(c, n, r);
        if (a !== !0) throw new TypeError('option ' + n + ' must be ' + a);
        continue;
      }
      if (t !== !0) throw Error('Unknown option ' + n);
    }
  }
  bc.exports = { isOlderVersion: xc, assertOptions: op, validators: rn };
});
var Fc = E((Xy, Uc) => {
  'use strict';
  var Ac = te(),
    ap = es(),
    Nc = Ca(),
    Lc = Cc(),
    ds = tn(),
    Dc = Ic(),
    jt = Dc.validators;
  function Nr(r) {
    (this.defaults = r),
      (this.interceptors = { request: new Nc(), response: new Nc() });
  }
  Nr.prototype.request = function (e) {
    typeof e == 'string'
      ? ((e = arguments[1] || {}), (e.url = arguments[0]))
      : (e = e || {}),
      (e = ds(this.defaults, e)),
      e.method
        ? (e.method = e.method.toLowerCase())
        : this.defaults.method
        ? (e.method = this.defaults.method.toLowerCase())
        : (e.method = 'get');
    var t = e.transitional;
    t !== void 0 &&
      Dc.assertOptions(
        t,
        {
          silentJSONParsing: jt.transitional(jt.boolean, '1.0.0'),
          forcedJSONParsing: jt.transitional(jt.boolean, '1.0.0'),
          clarifyTimeoutError: jt.transitional(jt.boolean, '1.0.0'),
        },
        !1
      );
    var s = [],
      i = !0;
    this.interceptors.request.forEach(function (f) {
      (typeof f.runWhen == 'function' && f.runWhen(e) === !1) ||
        ((i = i && f.synchronous), s.unshift(f.fulfilled, f.rejected));
    });
    var n = [];
    this.interceptors.response.forEach(function (f) {
      n.push(f.fulfilled, f.rejected);
    });
    var o;
    if (!i) {
      var c = [Lc, void 0];
      for (
        Array.prototype.unshift.apply(c, s),
          c.concat(n),
          o = Promise.resolve(e);
        c.length;

      )
        o = o.then(c.shift(), c.shift());
      return o;
    }
    for (var a = e; s.length; ) {
      var l = s.shift(),
        u = s.shift();
      try {
        a = l(a);
      } catch (h) {
        u(h);
        break;
      }
    }
    try {
      o = Lc(a);
    } catch (h) {
      return Promise.reject(h);
    }
    for (; n.length; ) o = o.then(n.shift(), n.shift());
    return o;
  };
  Nr.prototype.getUri = function (e) {
    return (
      (e = ds(this.defaults, e)),
      ap(e.url, e.params, e.paramsSerializer).replace(/^\?/, '')
    );
  };
  Ac.forEach(['delete', 'get', 'head', 'options'], function (e) {
    Nr.prototype[e] = function (t, s) {
      return this.request(
        ds(s || {}, { method: e, url: t, data: (s || {}).data })
      );
    };
  });
  Ac.forEach(['post', 'put', 'patch'], function (e) {
    Nr.prototype[e] = function (t, s, i) {
      return this.request(ds(i || {}, { method: e, url: t, data: s }));
    };
  });
  Uc.exports = Nr;
});
var nn = E((Ky, Bc) => {
  'use strict';
  function sn(r) {
    this.message = r;
  }
  sn.prototype.toString = function () {
    return 'Cancel' + (this.message ? ': ' + this.message : '');
  };
  sn.prototype.__CANCEL__ = !0;
  Bc.exports = sn;
});
var Pc = E((Wy, Mc) => {
  'use strict';
  var cp = nn();
  function ps(r) {
    if (typeof r != 'function')
      throw new TypeError('executor must be a function.');
    var e;
    this.promise = new Promise(function (i) {
      e = i;
    });
    var t = this;
    r(function (i) {
      t.reason || ((t.reason = new cp(i)), e(t.reason));
    });
  }
  ps.prototype.throwIfRequested = function () {
    if (this.reason) throw this.reason;
  };
  ps.source = function () {
    var e,
      t = new ps(function (i) {
        e = i;
      });
    return { token: t, cancel: e };
  };
  Mc.exports = ps;
});
var qc = E((Yy, kc) => {
  'use strict';
  kc.exports = function (e) {
    return function (s) {
      return e.apply(null, s);
    };
  };
});
var Gc = E((Zy, Hc) => {
  'use strict';
  Hc.exports = function (e) {
    return typeof e == 'object' && e.isAxiosError === !0;
  };
});
var Vc = E((Jy, on) => {
  'use strict';
  var zc = te(),
    up = Ii(),
    ms = Fc(),
    lp = tn(),
    hp = fs();
  function jc(r) {
    var e = new ms(r),
      t = up(ms.prototype.request, e);
    return zc.extend(t, ms.prototype, e), zc.extend(t, e), t;
  }
  var Oe = jc(hp);
  Oe.Axios = ms;
  Oe.create = function (e) {
    return jc(lp(Oe.defaults, e));
  };
  Oe.Cancel = nn();
  Oe.CancelToken = Pc();
  Oe.isCancel = Ji();
  Oe.all = function (e) {
    return Promise.all(e);
  };
  Oe.spread = qc();
  Oe.isAxiosError = Gc();
  on.exports = Oe;
  on.exports.default = Oe;
});
var an = E((Qy, $c) => {
  'use strict';
  $c.exports = Vc();
});
function Vt(r, e = 1e4) {
  let t = (n) => n,
    s = process.env.NX_CLOUD_API || r.url || 'https://cloud.nx.app',
    i = Cr ? Cr : r.accessToken;
  if (!i)
    throw new Error(
      'Unable to authenticate. Either define accessToken in nx.json or set the NX_CLOUD_ACCESS_TOKEN env variable.'
    );
  if (r.customProxyConfigPath) {
    let { nxCloudProxyConfig: n } = require((0, Kc.join)(
      process.cwd(),
      r.customProxyConfigPath
    ));
    t = n ?? t;
  }
  return fp.create(
    t({
      baseURL: s,
      timeout: Se ? Bt : e,
      headers: {
        authorization: i,
        'Nx-Cloud-Client-Version': r.clientVersion || 'unknown',
      },
    })
  );
}
async function un(r, e) {
  let t = new Date(),
    s = await e();
  return P && console.log(`${r}: ${new Date().getTime() - t.getTime()}`), s;
}
async function qe(r, e = wr) {
  try {
    return await r();
  } catch (t) {
    let s = (t.response && t.response.status) || t.code;
    (s === 401 || s === 403) && (e = 0);
    let i = t.response
      ? t.response.data.message
        ? t.response.data.message
        : t.response.data
      : t.message;
    if (e === 0)
      throw (
        (typeof i != 'string' && (i = t.message),
        new cn(
          'failure',
          `Error when connecting to Nx Cloud. Code: ${s}. Error: ${i}`,
          t
        ))
      );
    if (s == 429) {
      if (!Es) {
        let n = 1e4 + (wr + 1 - e) * 6e4 * Math.random();
        Xc.note({ title: `Received Code ${s}. ${i} Retrying in ${n}ms.` }),
          (Es = kt(n));
      }
      await Es, (Es = null);
    } else {
      let n = 1e3 + (wr + 1 - e) * 4e3 * Math.random();
      P && Xc.note({ title: `Received Code ${s}. Retrying in ${n}ms.` }),
        await kt(n);
    }
    return qe(r, e - 1);
  }
}
var Kc,
  Xc,
  fp,
  cn,
  Es,
  Lr = le(() => {
    'use strict';
    Kc = require('path');
    dt();
    bi();
    ({ output: Xc } = Ze()),
      (fp = an()),
      (cn = class {
        constructor(e, t, s) {
          this.type = e;
          this.message = t;
          this.axiosException = s;
        }
      });
    Es = null;
  });
function ys(r) {
  dp()
    ? (process.stdout.write(`   ${ln(r)}`), Le.addNewline(), Le.addNewline())
    : pp()
    ? (Le.addNewline(),
      process.stdout.write(`${ln(r)}`),
      Le.addNewline(),
      Le.addNewline())
    : (process.stdout.write(`  ${ln(r)}`), Le.addNewline(), Le.addNewline());
}
function dp() {
  try {
    return (
      U(
        'nx/src/tasks-runner/life-cycles/dynamic-run-many-terminal-output-life-cycle'
      ),
      !0
    );
  } catch {
    try {
      return (
        U(
          '@nrwl/workspace/src/tasks-runner/life-cycles/dynamic-run-many-terminal-output-life-cycle'
        ),
        !0
      );
    } catch {
      return !1;
    }
  }
}
function ln(r) {
  let e;
  if (typeof Le.dim == 'function') return Le.dim(r);
  try {
    return Le.colors.gray(r);
  } catch {
    return r;
  }
}
function pp() {
  return (
    process.argv.indexOf('run-many') === -1 &&
    process.argv.indexOf('affected') === -1
  );
}
var Le,
  hn = le(() => {
    'use strict';
    Rr();
    ({ output: Le } = Ze());
  });
var Yc = {};
Pe(Yc, {
  RUNNER_FAILURE_PERF_ENTRY: () => Rt,
  createMetricRecorder: () => _t,
  mapRespToPerfEntry: () => Te,
  submitRunMetrics: () => yp,
});
var fn,
  Wc,
  _t,
  Te,
  Rt,
  mp,
  Ep,
  yp,
  _s = le(() => {
    'use strict';
    fn = require('perf_hooks');
    Lr();
    dt();
    hn();
    (Wc = []),
      (_t = (r) => {
        let e = fn.performance.now();
        return {
          recordMetric: (s) => {
            let i = fn.performance.now();
            (s.durationMs = i - e), (s.entryType = r), Wc.push(s);
          },
        };
      }),
      (Te = (r) => {
        var e;
        return {
          success:
            ((e = r == null ? void 0 : r.status) == null
              ? void 0
              : e.toString().startsWith('2')) ?? !1,
          statusCode: (r == null ? void 0 : r.status) ?? -1,
        };
      }),
      (Rt = { success: !1, statusCode: -1 }),
      (mp = 0.1),
      (Ep = 0.01),
      (yp = (r) => {
        let e;
        Or() ? (e = mp) : (e = Ep);
        try {
          return Oi || Math.random() < e
            ? (P && ys('Submitting runner metrics for this run.'),
              Vt(r)
                .post('/nx-cloud/save-metrics', { entries: Wc })
                .catch((s) => {}))
            : Promise.resolve();
        } catch {}
      });
  });
var $t = E((c_, Jc) => {
  'use strict';
  var Zc = new Map([
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
  Jc.exports = (r) =>
    r
      ? Object.keys(r)
          .map((e) => [Zc.has(e) ? Zc.get(e) : e, r[e]])
          .reduce((e, t) => ((e[t[0]] = t[1]), e), Object.create(null))
      : {};
});
var Kt = E((u_, au) => {
  'use strict';
  var Qc =
      typeof process == 'object' && process
        ? process
        : { stdout: null, stderr: null },
    _p = require('events'),
    eu = require('stream'),
    tu = require('string_decoder').StringDecoder,
    He = Symbol('EOF'),
    Ge = Symbol('maybeEmitEnd'),
    Qe = Symbol('emittedEnd'),
    Rs = Symbol('emittingEnd'),
    Ar = Symbol('emittedError'),
    gs = Symbol('closed'),
    ru = Symbol('read'),
    vs = Symbol('flush'),
    su = Symbol('flushChunk'),
    oe = Symbol('encoding'),
    ze = Symbol('decoder'),
    ws = Symbol('flowing'),
    Dr = Symbol('paused'),
    Xt = Symbol('resume'),
    V = Symbol('bufferLength'),
    dn = Symbol('bufferPush'),
    pn = Symbol('bufferShift'),
    Y = Symbol('objectMode'),
    Z = Symbol('destroyed'),
    mn = Symbol('emitData'),
    iu = Symbol('emitEnd'),
    En = Symbol('emitEnd2'),
    je = Symbol('async'),
    Ur = (r) => Promise.resolve().then(r),
    nu = global._MP_NO_ITERATOR_SYMBOLS_ !== '1',
    Rp =
      (nu && Symbol.asyncIterator) || Symbol('asyncIterator not implemented'),
    gp = (nu && Symbol.iterator) || Symbol('iterator not implemented'),
    vp = (r) => r === 'end' || r === 'finish' || r === 'prefinish',
    wp = (r) =>
      r instanceof ArrayBuffer ||
      (typeof r == 'object' &&
        r.constructor &&
        r.constructor.name === 'ArrayBuffer' &&
        r.byteLength >= 0),
    Cp = (r) => !Buffer.isBuffer(r) && ArrayBuffer.isView(r),
    Cs = class {
      constructor(e, t, s) {
        (this.src = e),
          (this.dest = t),
          (this.opts = s),
          (this.ondrain = () => e[Xt]()),
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
    yn = class extends Cs {
      unpipe() {
        this.src.removeListener('error', this.proxyErrors), super.unpipe();
      }
      constructor(e, t, s) {
        super(e, t, s),
          (this.proxyErrors = (i) => t.emit('error', i)),
          e.on('error', this.proxyErrors);
      }
    };
  au.exports = class ou extends eu {
    constructor(e) {
      super(),
        (this[ws] = !1),
        (this[Dr] = !1),
        (this.pipes = []),
        (this.buffer = []),
        (this[Y] = (e && e.objectMode) || !1),
        this[Y] ? (this[oe] = null) : (this[oe] = (e && e.encoding) || null),
        this[oe] === 'buffer' && (this[oe] = null),
        (this[je] = (e && !!e.async) || !1),
        (this[ze] = this[oe] ? new tu(this[oe]) : null),
        (this[He] = !1),
        (this[Qe] = !1),
        (this[Rs] = !1),
        (this[gs] = !1),
        (this[Ar] = null),
        (this.writable = !0),
        (this.readable = !0),
        (this[V] = 0),
        (this[Z] = !1);
    }
    get bufferLength() {
      return this[V];
    }
    get encoding() {
      return this[oe];
    }
    set encoding(e) {
      if (this[Y]) throw new Error('cannot set encoding in objectMode');
      if (
        this[oe] &&
        e !== this[oe] &&
        ((this[ze] && this[ze].lastNeed) || this[V])
      )
        throw new Error('cannot change encoding');
      this[oe] !== e &&
        ((this[ze] = e ? new tu(e) : null),
        this.buffer.length &&
          (this.buffer = this.buffer.map((t) => this[ze].write(t)))),
        (this[oe] = e);
    }
    setEncoding(e) {
      this.encoding = e;
    }
    get objectMode() {
      return this[Y];
    }
    set objectMode(e) {
      this[Y] = this[Y] || !!e;
    }
    get async() {
      return this[je];
    }
    set async(e) {
      this[je] = this[je] || !!e;
    }
    write(e, t, s) {
      if (this[He]) throw new Error('write after end');
      if (this[Z])
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
      typeof t == 'function' && ((s = t), (t = 'utf8')), t || (t = 'utf8');
      let i = this[je] ? Ur : (n) => n();
      return (
        !this[Y] &&
          !Buffer.isBuffer(e) &&
          (Cp(e)
            ? (e = Buffer.from(e.buffer, e.byteOffset, e.byteLength))
            : wp(e)
            ? (e = Buffer.from(e))
            : typeof e != 'string' && (this.objectMode = !0)),
        this[Y]
          ? (this.flowing && this[V] !== 0 && this[vs](!0),
            this.flowing ? this.emit('data', e) : this[dn](e),
            this[V] !== 0 && this.emit('readable'),
            s && i(s),
            this.flowing)
          : e.length
          ? (typeof e == 'string' &&
              !(t === this[oe] && !this[ze].lastNeed) &&
              (e = Buffer.from(e, t)),
            Buffer.isBuffer(e) && this[oe] && (e = this[ze].write(e)),
            this.flowing && this[V] !== 0 && this[vs](!0),
            this.flowing ? this.emit('data', e) : this[dn](e),
            this[V] !== 0 && this.emit('readable'),
            s && i(s),
            this.flowing)
          : (this[V] !== 0 && this.emit('readable'), s && i(s), this.flowing)
      );
    }
    read(e) {
      if (this[Z]) return null;
      if (this[V] === 0 || e === 0 || e > this[V]) return this[Ge](), null;
      this[Y] && (e = null),
        this.buffer.length > 1 &&
          !this[Y] &&
          (this.encoding
            ? (this.buffer = [this.buffer.join('')])
            : (this.buffer = [Buffer.concat(this.buffer, this[V])]));
      let t = this[ru](e || null, this.buffer[0]);
      return this[Ge](), t;
    }
    [ru](e, t) {
      return (
        e === t.length || e === null
          ? this[pn]()
          : ((this.buffer[0] = t.slice(e)),
            (t = t.slice(0, e)),
            (this[V] -= e)),
        this.emit('data', t),
        !this.buffer.length && !this[He] && this.emit('drain'),
        t
      );
    }
    end(e, t, s) {
      return (
        typeof e == 'function' && ((s = e), (e = null)),
        typeof t == 'function' && ((s = t), (t = 'utf8')),
        e && this.write(e, t),
        s && this.once('end', s),
        (this[He] = !0),
        (this.writable = !1),
        (this.flowing || !this[Dr]) && this[Ge](),
        this
      );
    }
    [Xt]() {
      this[Z] ||
        ((this[Dr] = !1),
        (this[ws] = !0),
        this.emit('resume'),
        this.buffer.length
          ? this[vs]()
          : this[He]
          ? this[Ge]()
          : this.emit('drain'));
    }
    resume() {
      return this[Xt]();
    }
    pause() {
      (this[ws] = !1), (this[Dr] = !0);
    }
    get destroyed() {
      return this[Z];
    }
    get flowing() {
      return this[ws];
    }
    get paused() {
      return this[Dr];
    }
    [dn](e) {
      this[Y] ? (this[V] += 1) : (this[V] += e.length), this.buffer.push(e);
    }
    [pn]() {
      return (
        this.buffer.length &&
          (this[Y] ? (this[V] -= 1) : (this[V] -= this.buffer[0].length)),
        this.buffer.shift()
      );
    }
    [vs](e) {
      do;
      while (this[su](this[pn]()));
      !e && !this.buffer.length && !this[He] && this.emit('drain');
    }
    [su](e) {
      return e ? (this.emit('data', e), this.flowing) : !1;
    }
    pipe(e, t) {
      if (this[Z]) return;
      let s = this[Qe];
      return (
        (t = t || {}),
        e === Qc.stdout || e === Qc.stderr
          ? (t.end = !1)
          : (t.end = t.end !== !1),
        (t.proxyErrors = !!t.proxyErrors),
        s
          ? t.end && e.end()
          : (this.pipes.push(
              t.proxyErrors ? new yn(this, e, t) : new Cs(this, e, t)
            ),
            this[je] ? Ur(() => this[Xt]()) : this[Xt]()),
        e
      );
    }
    unpipe(e) {
      let t = this.pipes.find((s) => s.dest === e);
      t && (this.pipes.splice(this.pipes.indexOf(t), 1), t.unpipe());
    }
    addListener(e, t) {
      return this.on(e, t);
    }
    on(e, t) {
      let s = super.on(e, t);
      return (
        e === 'data' && !this.pipes.length && !this.flowing
          ? this[Xt]()
          : e === 'readable' && this[V] !== 0
          ? super.emit('readable')
          : vp(e) && this[Qe]
          ? (super.emit(e), this.removeAllListeners(e))
          : e === 'error' &&
            this[Ar] &&
            (this[je]
              ? Ur(() => t.call(this, this[Ar]))
              : t.call(this, this[Ar])),
        s
      );
    }
    get emittedEnd() {
      return this[Qe];
    }
    [Ge]() {
      !this[Rs] &&
        !this[Qe] &&
        !this[Z] &&
        this.buffer.length === 0 &&
        this[He] &&
        ((this[Rs] = !0),
        this.emit('end'),
        this.emit('prefinish'),
        this.emit('finish'),
        this[gs] && this.emit('close'),
        (this[Rs] = !1));
    }
    emit(e, t, ...s) {
      if (e !== 'error' && e !== 'close' && e !== Z && this[Z]) return;
      if (e === 'data')
        return t ? (this[je] ? Ur(() => this[mn](t)) : this[mn](t)) : !1;
      if (e === 'end') return this[iu]();
      if (e === 'close') {
        if (((this[gs] = !0), !this[Qe] && !this[Z])) return;
        let n = super.emit('close');
        return this.removeAllListeners('close'), n;
      } else if (e === 'error') {
        this[Ar] = t;
        let n = super.emit('error', t);
        return this[Ge](), n;
      } else if (e === 'resume') {
        let n = super.emit('resume');
        return this[Ge](), n;
      } else if (e === 'finish' || e === 'prefinish') {
        let n = super.emit(e);
        return this.removeAllListeners(e), n;
      }
      let i = super.emit(e, t, ...s);
      return this[Ge](), i;
    }
    [mn](e) {
      for (let s of this.pipes) s.dest.write(e) === !1 && this.pause();
      let t = super.emit('data', e);
      return this[Ge](), t;
    }
    [iu]() {
      this[Qe] ||
        ((this[Qe] = !0),
        (this.readable = !1),
        this[je] ? Ur(() => this[En]()) : this[En]());
    }
    [En]() {
      if (this[ze]) {
        let t = this[ze].end();
        if (t) {
          for (let s of this.pipes) s.dest.write(t);
          super.emit('data', t);
        }
      }
      for (let t of this.pipes) t.end();
      let e = super.emit('end');
      return this.removeAllListeners('end'), e;
    }
    collect() {
      let e = [];
      this[Y] || (e.dataLength = 0);
      let t = this.promise();
      return (
        this.on('data', (s) => {
          e.push(s), this[Y] || (e.dataLength += s.length);
        }),
        t.then(() => e)
      );
    }
    concat() {
      return this[Y]
        ? Promise.reject(new Error('cannot concat in objectMode'))
        : this.collect().then((e) =>
            this[Y]
              ? Promise.reject(new Error('cannot concat in objectMode'))
              : this[oe]
              ? e.join('')
              : Buffer.concat(e, e.dataLength)
          );
    }
    promise() {
      return new Promise((e, t) => {
        this.on(Z, () => t(new Error('stream destroyed'))),
          this.on('error', (s) => t(s)),
          this.on('end', () => e());
      });
    }
    [Rp]() {
      return {
        next: () => {
          let t = this.read();
          if (t !== null) return Promise.resolve({ done: !1, value: t });
          if (this[He]) return Promise.resolve({ done: !0 });
          let s = null,
            i = null,
            n = (l) => {
              this.removeListener('data', o),
                this.removeListener('end', c),
                i(l);
            },
            o = (l) => {
              this.removeListener('error', n),
                this.removeListener('end', c),
                this.pause(),
                s({ value: l, done: !!this[He] });
            },
            c = () => {
              this.removeListener('error', n),
                this.removeListener('data', o),
                s({ done: !0 });
            },
            a = () => n(new Error('stream destroyed'));
          return new Promise((l, u) => {
            (i = u),
              (s = l),
              this.once(Z, a),
              this.once('error', n),
              this.once('end', c),
              this.once('data', o);
          });
        },
      };
    }
    [gp]() {
      return {
        next: () => {
          let t = this.read();
          return { value: t, done: t === null };
        },
      };
    }
    destroy(e) {
      return this[Z]
        ? (e ? this.emit('error', e) : this.emit(Z), this)
        : ((this[Z] = !0),
          (this.buffer.length = 0),
          (this[V] = 0),
          typeof this.close == 'function' && !this[gs] && this.close(),
          e ? this.emit('error', e) : this.emit(Z),
          this);
    }
    static isStream(e) {
      return (
        !!e &&
        (e instanceof ou ||
          e instanceof eu ||
          (e instanceof _p &&
            (typeof e.pipe == 'function' ||
              (typeof e.write == 'function' && typeof e.end == 'function'))))
      );
    }
  };
});
var uu = E((l_, cu) => {
  'use strict';
  var Sp = require('zlib').constants || { ZLIB_VERNUM: 4736 };
  cu.exports = Object.freeze(
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
      Sp
    )
  );
});
var Dn = E((fe) => {
  'use strict';
  var wn = require('assert'),
    et = require('buffer').Buffer,
    fu = require('zlib'),
    gt = (fe.constants = uu()),
    Op = Kt(),
    lu = et.concat,
    vt = Symbol('_superWrite'),
    Yt = class extends Error {
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
    Tp = Symbol('opts'),
    Fr = Symbol('flushFlag'),
    hu = Symbol('finishFlushFlag'),
    An = Symbol('fullFlushFlag'),
    F = Symbol('handle'),
    Ss = Symbol('onError'),
    Wt = Symbol('sawError'),
    _n = Symbol('level'),
    Rn = Symbol('strategy'),
    gn = Symbol('ended'),
    h_ = Symbol('_defaultFullFlush'),
    Os = class extends Op {
      constructor(e, t) {
        if (!e || typeof e != 'object')
          throw new TypeError('invalid options for ZlibBase constructor');
        super(e),
          (this[Wt] = !1),
          (this[gn] = !1),
          (this[Tp] = e),
          (this[Fr] = e.flush),
          (this[hu] = e.finishFlush);
        try {
          this[F] = new fu[t](e);
        } catch (s) {
          throw new Yt(s);
        }
        (this[Ss] = (s) => {
          this[Wt] || ((this[Wt] = !0), this.close(), this.emit('error', s));
        }),
          this[F].on('error', (s) => this[Ss](new Yt(s))),
          this.once('end', () => this.close);
      }
      close() {
        this[F] && (this[F].close(), (this[F] = null), this.emit('close'));
      }
      reset() {
        if (!this[Wt])
          return wn(this[F], 'zlib binding closed'), this[F].reset();
      }
      flush(e) {
        this.ended ||
          (typeof e != 'number' && (e = this[An]),
          this.write(Object.assign(et.alloc(0), { [Fr]: e })));
      }
      end(e, t, s) {
        return (
          e && this.write(e, t),
          this.flush(this[hu]),
          (this[gn] = !0),
          super.end(null, null, s)
        );
      }
      get ended() {
        return this[gn];
      }
      write(e, t, s) {
        if (
          (typeof t == 'function' && ((s = t), (t = 'utf8')),
          typeof e == 'string' && (e = et.from(e, t)),
          this[Wt])
        )
          return;
        wn(this[F], 'zlib binding closed');
        let i = this[F]._handle,
          n = i.close;
        i.close = () => {};
        let o = this[F].close;
        (this[F].close = () => {}), (et.concat = (l) => l);
        let c;
        try {
          let l = typeof e[Fr] == 'number' ? e[Fr] : this[Fr];
          (c = this[F]._processChunk(e, l)), (et.concat = lu);
        } catch (l) {
          (et.concat = lu), this[Ss](new Yt(l));
        } finally {
          this[F] &&
            ((this[F]._handle = i),
            (i.close = n),
            (this[F].close = o),
            this[F].removeAllListeners('error'));
        }
        this[F] && this[F].on('error', (l) => this[Ss](new Yt(l)));
        let a;
        if (c)
          if (Array.isArray(c) && c.length > 0) {
            a = this[vt](et.from(c[0]));
            for (let l = 1; l < c.length; l++) a = this[vt](c[l]);
          } else a = this[vt](et.from(c));
        return s && s(), a;
      }
      [vt](e) {
        return super.write(e);
      }
    },
    Ve = class extends Os {
      constructor(e, t) {
        (e = e || {}),
          (e.flush = e.flush || gt.Z_NO_FLUSH),
          (e.finishFlush = e.finishFlush || gt.Z_FINISH),
          super(e, t),
          (this[An] = gt.Z_FULL_FLUSH),
          (this[_n] = e.level),
          (this[Rn] = e.strategy);
      }
      params(e, t) {
        if (!this[Wt]) {
          if (!this[F])
            throw new Error('cannot switch params when binding is closed');
          if (!this[F].params)
            throw new Error('not supported in this implementation');
          if (this[_n] !== e || this[Rn] !== t) {
            this.flush(gt.Z_SYNC_FLUSH), wn(this[F], 'zlib binding closed');
            let s = this[F].flush;
            this[F].flush = (i, n) => {
              this.flush(i), n();
            };
            try {
              this[F].params(e, t);
            } finally {
              this[F].flush = s;
            }
            this[F] && ((this[_n] = e), (this[Rn] = t));
          }
        }
      }
    },
    Cn = class extends Ve {
      constructor(e) {
        super(e, 'Deflate');
      }
    },
    Sn = class extends Ve {
      constructor(e) {
        super(e, 'Inflate');
      }
    },
    vn = Symbol('_portable'),
    On = class extends Ve {
      constructor(e) {
        super(e, 'Gzip'), (this[vn] = e && !!e.portable);
      }
      [vt](e) {
        return this[vn]
          ? ((this[vn] = !1), (e[9] = 255), super[vt](e))
          : super[vt](e);
      }
    },
    Tn = class extends Ve {
      constructor(e) {
        super(e, 'Gunzip');
      }
    },
    xn = class extends Ve {
      constructor(e) {
        super(e, 'DeflateRaw');
      }
    },
    bn = class extends Ve {
      constructor(e) {
        super(e, 'InflateRaw');
      }
    },
    In = class extends Ve {
      constructor(e) {
        super(e, 'Unzip');
      }
    },
    Ts = class extends Os {
      constructor(e, t) {
        (e = e || {}),
          (e.flush = e.flush || gt.BROTLI_OPERATION_PROCESS),
          (e.finishFlush = e.finishFlush || gt.BROTLI_OPERATION_FINISH),
          super(e, t),
          (this[An] = gt.BROTLI_OPERATION_FLUSH);
      }
    },
    Nn = class extends Ts {
      constructor(e) {
        super(e, 'BrotliCompress');
      }
    },
    Ln = class extends Ts {
      constructor(e) {
        super(e, 'BrotliDecompress');
      }
    };
  fe.Deflate = Cn;
  fe.Inflate = Sn;
  fe.Gzip = On;
  fe.Gunzip = Tn;
  fe.DeflateRaw = xn;
  fe.InflateRaw = bn;
  fe.Unzip = In;
  typeof fu.BrotliCompress == 'function'
    ? ((fe.BrotliCompress = Nn), (fe.BrotliDecompress = Ln))
    : (fe.BrotliCompress = fe.BrotliDecompress =
        class {
          constructor() {
            throw new Error(
              'Brotli is not supported in this version of Node.js'
            );
          }
        });
});
var Zt = E((p_, du) => {
  'use strict';
  var xp = process.env.TESTING_TAR_FAKE_PLATFORM || process.platform;
  du.exports = xp !== 'win32' ? (r) => r : (r) => r && r.replace(/\\/g, '/');
});
var xs = E((E_, pu) => {
  'use strict';
  var bp = Kt(),
    Un = Zt(),
    Fn = Symbol('slurp');
  pu.exports = class extends bp {
    constructor(e, t, s) {
      switch (
        (super(),
        this.pause(),
        (this.extended = t),
        (this.globalExtended = s),
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
      (this.path = Un(e.path)),
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
        (this.linkpath = Un(e.linkpath)),
        (this.uname = e.uname),
        (this.gname = e.gname),
        t && this[Fn](t),
        s && this[Fn](s, !0);
    }
    write(e) {
      let t = e.length;
      if (t > this.blockRemain)
        throw new Error('writing more to entry than is appropriate');
      let s = this.remain,
        i = this.blockRemain;
      return (
        (this.remain = Math.max(0, s - t)),
        (this.blockRemain = Math.max(0, i - t)),
        this.ignore ? !0 : s >= t ? super.write(e) : super.write(e.slice(0, s))
      );
    }
    [Fn](e, t) {
      for (let s in e)
        e[s] !== null &&
          e[s] !== void 0 &&
          !(t && s === 'path') &&
          (this[s] = s === 'path' || s === 'linkpath' ? Un(e[s]) : e[s]);
    }
  };
});
var Bn = E((bs) => {
  'use strict';
  bs.name = new Map([
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
  bs.code = new Map(Array.from(bs.name).map((r) => [r[1], r[0]]));
});
var _u = E((__, yu) => {
  'use strict';
  var Ip = (r, e) => {
      if (Number.isSafeInteger(r)) r < 0 ? Lp(r, e) : Np(r, e);
      else
        throw Error(
          'cannot encode number outside of javascript safe integer range'
        );
      return e;
    },
    Np = (r, e) => {
      e[0] = 128;
      for (var t = e.length; t > 1; t--)
        (e[t - 1] = r & 255), (r = Math.floor(r / 256));
    },
    Lp = (r, e) => {
      e[0] = 255;
      var t = !1;
      r = r * -1;
      for (var s = e.length; s > 1; s--) {
        var i = r & 255;
        (r = Math.floor(r / 256)),
          t
            ? (e[s - 1] = mu(i))
            : i === 0
            ? (e[s - 1] = 0)
            : ((t = !0), (e[s - 1] = Eu(i)));
      }
    },
    Ap = (r) => {
      let e = r[0],
        t = e === 128 ? Up(r.slice(1, r.length)) : e === 255 ? Dp(r) : null;
      if (t === null) throw Error('invalid base256 encoding');
      if (!Number.isSafeInteger(t))
        throw Error('parsed number outside of javascript safe integer range');
      return t;
    },
    Dp = (r) => {
      for (var e = r.length, t = 0, s = !1, i = e - 1; i > -1; i--) {
        var n = r[i],
          o;
        s ? (o = mu(n)) : n === 0 ? (o = n) : ((s = !0), (o = Eu(n))),
          o !== 0 && (t -= o * Math.pow(256, e - i - 1));
      }
      return t;
    },
    Up = (r) => {
      for (var e = r.length, t = 0, s = e - 1; s > -1; s--) {
        var i = r[s];
        i !== 0 && (t += i * Math.pow(256, e - s - 1));
      }
      return t;
    },
    mu = (r) => (255 ^ r) & 255,
    Eu = (r) => ((255 ^ r) + 1) & 255;
  yu.exports = { encode: Ip, parse: Ap };
});
var Qt = E((R_, gu) => {
  'use strict';
  var Mn = Bn(),
    Jt = require('path').posix,
    Ru = _u(),
    Pn = Symbol('slurp'),
    de = Symbol('type'),
    Hn = class {
      constructor(e, t, s, i) {
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
          (this[de] = '0'),
          (this.linkpath = null),
          (this.uname = null),
          (this.gname = null),
          (this.devmaj = 0),
          (this.devmin = 0),
          (this.atime = null),
          (this.ctime = null),
          Buffer.isBuffer(e) ? this.decode(e, t || 0, s, i) : e && this.set(e);
      }
      decode(e, t, s, i) {
        if ((t || (t = 0), !e || !(e.length >= t + 512)))
          throw new Error('need 512 bytes for header');
        if (
          ((this.path = wt(e, t, 100)),
          (this.mode = tt(e, t + 100, 8)),
          (this.uid = tt(e, t + 108, 8)),
          (this.gid = tt(e, t + 116, 8)),
          (this.size = tt(e, t + 124, 12)),
          (this.mtime = kn(e, t + 136, 12)),
          (this.cksum = tt(e, t + 148, 12)),
          this[Pn](s),
          this[Pn](i, !0),
          (this[de] = wt(e, t + 156, 1)),
          this[de] === '' && (this[de] = '0'),
          this[de] === '0' && this.path.substr(-1) === '/' && (this[de] = '5'),
          this[de] === '5' && (this.size = 0),
          (this.linkpath = wt(e, t + 157, 100)),
          e.slice(t + 257, t + 265).toString() === 'ustar\x0000')
        )
          if (
            ((this.uname = wt(e, t + 265, 32)),
            (this.gname = wt(e, t + 297, 32)),
            (this.devmaj = tt(e, t + 329, 8)),
            (this.devmin = tt(e, t + 337, 8)),
            e[t + 475] !== 0)
          ) {
            let o = wt(e, t + 345, 155);
            this.path = o + '/' + this.path;
          } else {
            let o = wt(e, t + 345, 130);
            o && (this.path = o + '/' + this.path),
              (this.atime = kn(e, t + 476, 12)),
              (this.ctime = kn(e, t + 488, 12));
          }
        let n = 8 * 32;
        for (let o = t; o < t + 148; o++) n += e[o];
        for (let o = t + 156; o < t + 512; o++) n += e[o];
        (this.cksumValid = n === this.cksum),
          this.cksum === null && n === 8 * 32 && (this.nullBlock = !0);
      }
      [Pn](e, t) {
        for (let s in e)
          e[s] !== null &&
            e[s] !== void 0 &&
            !(t && s === 'path') &&
            (this[s] = e[s]);
      }
      encode(e, t) {
        if (
          (e || ((e = this.block = Buffer.alloc(512)), (t = 0)),
          t || (t = 0),
          !(e.length >= t + 512))
        )
          throw new Error('need 512 bytes for header');
        let s = this.ctime || this.atime ? 130 : 155,
          i = Fp(this.path || '', s),
          n = i[0],
          o = i[1];
        (this.needPax = i[2]),
          (this.needPax = Ct(e, t, 100, n) || this.needPax),
          (this.needPax = rt(e, t + 100, 8, this.mode) || this.needPax),
          (this.needPax = rt(e, t + 108, 8, this.uid) || this.needPax),
          (this.needPax = rt(e, t + 116, 8, this.gid) || this.needPax),
          (this.needPax = rt(e, t + 124, 12, this.size) || this.needPax),
          (this.needPax = qn(e, t + 136, 12, this.mtime) || this.needPax),
          (e[t + 156] = this[de].charCodeAt(0)),
          (this.needPax = Ct(e, t + 157, 100, this.linkpath) || this.needPax),
          e.write('ustar\x0000', t + 257, 8),
          (this.needPax = Ct(e, t + 265, 32, this.uname) || this.needPax),
          (this.needPax = Ct(e, t + 297, 32, this.gname) || this.needPax),
          (this.needPax = rt(e, t + 329, 8, this.devmaj) || this.needPax),
          (this.needPax = rt(e, t + 337, 8, this.devmin) || this.needPax),
          (this.needPax = Ct(e, t + 345, s, o) || this.needPax),
          e[t + 475] !== 0
            ? (this.needPax = Ct(e, t + 345, 155, o) || this.needPax)
            : ((this.needPax = Ct(e, t + 345, 130, o) || this.needPax),
              (this.needPax = qn(e, t + 476, 12, this.atime) || this.needPax),
              (this.needPax = qn(e, t + 488, 12, this.ctime) || this.needPax));
        let c = 8 * 32;
        for (let a = t; a < t + 148; a++) c += e[a];
        for (let a = t + 156; a < t + 512; a++) c += e[a];
        return (
          (this.cksum = c),
          rt(e, t + 148, 8, this.cksum),
          (this.cksumValid = !0),
          this.needPax
        );
      }
      set(e) {
        for (let t in e) e[t] !== null && e[t] !== void 0 && (this[t] = e[t]);
      }
      get type() {
        return Mn.name.get(this[de]) || this[de];
      }
      get typeKey() {
        return this[de];
      }
      set type(e) {
        Mn.code.has(e) ? (this[de] = Mn.code.get(e)) : (this[de] = e);
      }
    },
    Fp = (r, e) => {
      let s = r,
        i = '',
        n,
        o = Jt.parse(r).root || '.';
      if (Buffer.byteLength(s) < 100) n = [s, i, !1];
      else {
        (i = Jt.dirname(s)), (s = Jt.basename(s));
        do
          Buffer.byteLength(s) <= 100 && Buffer.byteLength(i) <= e
            ? (n = [s, i, !1])
            : Buffer.byteLength(s) > 100 && Buffer.byteLength(i) <= e
            ? (n = [s.substr(0, 100 - 1), i, !0])
            : ((s = Jt.join(Jt.basename(i), s)), (i = Jt.dirname(i)));
        while (i !== o && !n);
        n || (n = [r.substr(0, 100 - 1), '', !0]);
      }
      return n;
    },
    wt = (r, e, t) =>
      r
        .slice(e, e + t)
        .toString('utf8')
        .replace(/\0.*/, ''),
    kn = (r, e, t) => Bp(tt(r, e, t)),
    Bp = (r) => (r === null ? null : new Date(r * 1e3)),
    tt = (r, e, t) => (r[e] & 128 ? Ru.parse(r.slice(e, e + t)) : Pp(r, e, t)),
    Mp = (r) => (isNaN(r) ? null : r),
    Pp = (r, e, t) =>
      Mp(
        parseInt(
          r
            .slice(e, e + t)
            .toString('utf8')
            .replace(/\0.*$/, '')
            .trim(),
          8
        )
      ),
    kp = { 12: 8589934591, 8: 2097151 },
    rt = (r, e, t, s) =>
      s === null
        ? !1
        : s > kp[t] || s < 0
        ? (Ru.encode(s, r.slice(e, e + t)), !0)
        : (qp(r, e, t, s), !1),
    qp = (r, e, t, s) => r.write(Hp(s, t), e, t, 'ascii'),
    Hp = (r, e) => Gp(Math.floor(r).toString(8), e),
    Gp = (r, e) =>
      (r.length === e - 1
        ? r
        : new Array(e - r.length - 1).join('0') + r + ' ') + '\0',
    qn = (r, e, t, s) => (s === null ? !1 : rt(r, e, t, s.getTime() / 1e3)),
    zp = new Array(156).join('\0'),
    Ct = (r, e, t, s) =>
      s === null
        ? !1
        : (r.write(s + zp, e, t, 'utf8'),
          s.length !== Buffer.byteLength(s) || s.length > t);
  gu.exports = Hn;
});
var Is = E((g_, vu) => {
  'use strict';
  var jp = Qt(),
    Vp = require('path'),
    Br = class {
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
          s = 512 * Math.ceil(1 + t / 512),
          i = Buffer.allocUnsafe(s);
        for (let n = 0; n < 512; n++) i[n] = 0;
        new jp({
          path: ('PaxHeader/' + Vp.basename(this.path)).slice(0, 99),
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
        for (let n = t + 512; n < i.length; n++) i[n] = 0;
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
          s =
            ' ' +
            (e === 'dev' || e === 'ino' || e === 'nlink' ? 'SCHILY.' : '') +
            e +
            '=' +
            t +
            `
`,
          i = Buffer.byteLength(s),
          n = Math.floor(Math.log(i) / Math.log(10)) + 1;
        return i + n >= Math.pow(10, n) && (n += 1), n + i + s;
      }
    };
  Br.parse = (r, e, t) => new Br($p(Xp(r), e), t);
  var $p = (r, e) =>
      e ? Object.keys(r).reduce((t, s) => ((t[s] = r[s]), t), e) : r,
    Xp = (r) =>
      r
        .replace(/\n$/, '')
        .split(
          `
`
        )
        .reduce(Kp, Object.create(null)),
    Kp = (r, e) => {
      let t = parseInt(e, 10);
      if (t !== Buffer.byteLength(e) + 1) return r;
      e = e.substr((t + ' ').length);
      let s = e.split('='),
        i = s.shift().replace(/^SCHILY\.(dev|ino|nlink)/, '$1');
      if (!i) return r;
      let n = s.join('=');
      return (
        (r[i] = /^([A-Z]+\.)?([mac]|birth|creation)time$/.test(i)
          ? new Date(n * 1e3)
          : /^[0-9]+$/.test(n)
          ? +n
          : n),
        r
      );
    };
  vu.exports = Br;
});
var er = E((v_, wu) => {
  'use strict';
  wu.exports = (r) => {
    let e = r.length - 1,
      t = -1;
    for (; e > -1 && r.charAt(e) === '/'; ) (t = e), e--;
    return t === -1 ? r : r.slice(0, t);
  };
});
var Ns = E((w_, Cu) => {
  'use strict';
  Cu.exports = (r) =>
    class extends r {
      warn(e, t, s = {}) {
        this.file && (s.file = this.file),
          this.cwd && (s.cwd = this.cwd),
          (s.code = (t instanceof Error && t.code) || e),
          (s.tarCode = e),
          !this.strict && s.recoverable !== !1
            ? (t instanceof Error &&
                ((s = Object.assign(t, s)), (t = t.message)),
              this.emit('warn', s.tarCode, t, s))
            : t instanceof Error
            ? this.emit('error', Object.assign(t, s))
            : this.emit('error', Object.assign(new Error(`${e}: ${t}`), s));
      }
    };
});
var zn = E((S_, Su) => {
  'use strict';
  var Ls = ['|', '<', '>', '?', ':'],
    Gn = Ls.map((r) => String.fromCharCode(61440 + r.charCodeAt(0))),
    Wp = new Map(Ls.map((r, e) => [r, Gn[e]])),
    Yp = new Map(Gn.map((r, e) => [r, Ls[e]]));
  Su.exports = {
    encode: (r) => Ls.reduce((e, t) => e.split(t).join(Wp.get(t)), r),
    decode: (r) => Gn.reduce((e, t) => e.split(t).join(Yp.get(t)), r),
  };
});
var jn = E((O_, Tu) => {
  'use strict';
  var { isAbsolute: Zp, parse: Ou } = require('path').win32;
  Tu.exports = (r) => {
    let e = '',
      t = Ou(r);
    for (; Zp(r) || t.root; ) {
      let s = r.charAt(0) === '/' && r.slice(0, 4) !== '//?/' ? '/' : t.root;
      (r = r.substr(s.length)), (e += s), (t = Ou(r));
    }
    return [e, r];
  };
});
var bu = E((T_, xu) => {
  'use strict';
  xu.exports = (r, e, t) => (
    (r &= 4095),
    t && (r = (r | 384) & -19),
    e && (r & 256 && (r |= 64), r & 32 && (r |= 8), r & 4 && (r |= 1)),
    r
  );
});
var eo = E((I_, Gu) => {
  'use strict';
  var Fu = Kt(),
    Bu = Is(),
    Mu = Qt(),
    De = require('fs'),
    Iu = require('path'),
    Ae = Zt(),
    Jp = er(),
    Pu = (r, e) =>
      e ? ((r = Ae(r).replace(/^\.(\/|$)/, '')), Jp(e) + '/' + r) : Ae(r),
    Qp = 16 * 1024 * 1024,
    Nu = Symbol('process'),
    Lu = Symbol('file'),
    Au = Symbol('directory'),
    $n = Symbol('symlink'),
    Du = Symbol('hardlink'),
    Mr = Symbol('header'),
    As = Symbol('read'),
    Xn = Symbol('lstat'),
    Ds = Symbol('onlstat'),
    Kn = Symbol('onread'),
    Wn = Symbol('onreadlink'),
    Yn = Symbol('openfile'),
    Zn = Symbol('onopenfile'),
    st = Symbol('close'),
    Us = Symbol('mode'),
    Jn = Symbol('awaitDrain'),
    Vn = Symbol('ondrain'),
    Ue = Symbol('prefix'),
    Uu = Symbol('hadError'),
    ku = Ns(),
    em = zn(),
    qu = jn(),
    Hu = bu(),
    Fs = ku(
      class extends Fu {
        constructor(e, t) {
          if (((t = t || {}), super(t), typeof e != 'string'))
            throw new TypeError('path is required');
          (this.path = Ae(e)),
            (this.portable = !!t.portable),
            (this.myuid = (process.getuid && process.getuid()) || 0),
            (this.myuser = process.env.USER || ''),
            (this.maxReadSize = t.maxReadSize || Qp),
            (this.linkCache = t.linkCache || new Map()),
            (this.statCache = t.statCache || new Map()),
            (this.preservePaths = !!t.preservePaths),
            (this.cwd = Ae(t.cwd || process.cwd())),
            (this.strict = !!t.strict),
            (this.noPax = !!t.noPax),
            (this.noMtime = !!t.noMtime),
            (this.mtime = t.mtime || null),
            (this.prefix = t.prefix ? Ae(t.prefix) : null),
            (this.fd = null),
            (this.blockLen = null),
            (this.blockRemain = null),
            (this.buf = null),
            (this.offset = null),
            (this.length = null),
            (this.pos = null),
            (this.remain = null),
            typeof t.onwarn == 'function' && this.on('warn', t.onwarn);
          let s = !1;
          if (!this.preservePaths) {
            let [i, n] = qu(this.path);
            i && ((this.path = n), (s = i));
          }
          (this.win32 = !!t.win32 || process.platform === 'win32'),
            this.win32 &&
              ((this.path = em.decode(this.path.replace(/\\/g, '/'))),
              (e = e.replace(/\\/g, '/'))),
            (this.absolute = Ae(t.absolute || Iu.resolve(this.cwd, e))),
            this.path === '' && (this.path = './'),
            s &&
              this.warn('TAR_ENTRY_INFO', `stripping ${s} from absolute path`, {
                entry: this,
                path: s + this.path,
              }),
            this.statCache.has(this.absolute)
              ? this[Ds](this.statCache.get(this.absolute))
              : this[Xn]();
        }
        emit(e, ...t) {
          return e === 'error' && (this[Uu] = !0), super.emit(e, ...t);
        }
        [Xn]() {
          De.lstat(this.absolute, (e, t) => {
            if (e) return this.emit('error', e);
            this[Ds](t);
          });
        }
        [Ds](e) {
          this.statCache.set(this.absolute, e),
            (this.stat = e),
            e.isFile() || (e.size = 0),
            (this.type = rm(e)),
            this.emit('stat', e),
            this[Nu]();
        }
        [Nu]() {
          switch (this.type) {
            case 'File':
              return this[Lu]();
            case 'Directory':
              return this[Au]();
            case 'SymbolicLink':
              return this[$n]();
            default:
              return this.end();
          }
        }
        [Us](e) {
          return Hu(e, this.type === 'Directory', this.portable);
        }
        [Ue](e) {
          return Pu(e, this.prefix);
        }
        [Mr]() {
          this.type === 'Directory' && this.portable && (this.noMtime = !0),
            (this.header = new Mu({
              path: this[Ue](this.path),
              linkpath:
                this.type === 'Link' ? this[Ue](this.linkpath) : this.linkpath,
              mode: this[Us](this.stat.mode),
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
                new Bu({
                  atime: this.portable ? null : this.header.atime,
                  ctime: this.portable ? null : this.header.ctime,
                  gid: this.portable ? null : this.header.gid,
                  mtime: this.noMtime ? null : this.mtime || this.header.mtime,
                  path: this[Ue](this.path),
                  linkpath:
                    this.type === 'Link'
                      ? this[Ue](this.linkpath)
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
        [Au]() {
          this.path.substr(-1) !== '/' && (this.path += '/'),
            (this.stat.size = 0),
            this[Mr](),
            this.end();
        }
        [$n]() {
          De.readlink(this.absolute, (e, t) => {
            if (e) return this.emit('error', e);
            this[Wn](t);
          });
        }
        [Wn](e) {
          (this.linkpath = Ae(e)), this[Mr](), this.end();
        }
        [Du](e) {
          (this.type = 'Link'),
            (this.linkpath = Ae(Iu.relative(this.cwd, e))),
            (this.stat.size = 0),
            this[Mr](),
            this.end();
        }
        [Lu]() {
          if (this.stat.nlink > 1) {
            let e = this.stat.dev + ':' + this.stat.ino;
            if (this.linkCache.has(e)) {
              let t = this.linkCache.get(e);
              if (t.indexOf(this.cwd) === 0) return this[Du](t);
            }
            this.linkCache.set(e, this.absolute);
          }
          if ((this[Mr](), this.stat.size === 0)) return this.end();
          this[Yn]();
        }
        [Yn]() {
          De.open(this.absolute, 'r', (e, t) => {
            if (e) return this.emit('error', e);
            this[Zn](t);
          });
        }
        [Zn](e) {
          if (((this.fd = e), this[Uu])) return this[st]();
          (this.blockLen = 512 * Math.ceil(this.stat.size / 512)),
            (this.blockRemain = this.blockLen);
          let t = Math.min(this.blockLen, this.maxReadSize);
          (this.buf = Buffer.allocUnsafe(t)),
            (this.offset = 0),
            (this.pos = 0),
            (this.remain = this.stat.size),
            (this.length = this.buf.length),
            this[As]();
        }
        [As]() {
          let { fd: e, buf: t, offset: s, length: i, pos: n } = this;
          De.read(e, t, s, i, n, (o, c) => {
            if (o) return this[st](() => this.emit('error', o));
            this[Kn](c);
          });
        }
        [st](e) {
          De.close(this.fd, e);
        }
        [Kn](e) {
          if (e <= 0 && this.remain > 0) {
            let i = new Error('encountered unexpected EOF');
            return (
              (i.path = this.absolute),
              (i.syscall = 'read'),
              (i.code = 'EOF'),
              this[st](() => this.emit('error', i))
            );
          }
          if (e > this.remain) {
            let i = new Error('did not encounter expected EOF');
            return (
              (i.path = this.absolute),
              (i.syscall = 'read'),
              (i.code = 'EOF'),
              this[st](() => this.emit('error', i))
            );
          }
          if (e === this.remain)
            for (let i = e; i < this.length && e < this.blockRemain; i++)
              (this.buf[i + this.offset] = 0), e++, this.remain++;
          let t =
            this.offset === 0 && e === this.buf.length
              ? this.buf
              : this.buf.slice(this.offset, this.offset + e);
          this.write(t) ? this[Vn]() : this[Jn](() => this[Vn]());
        }
        [Jn](e) {
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
        [Vn]() {
          if (!this.remain)
            return (
              this.blockRemain && super.write(Buffer.alloc(this.blockRemain)),
              this[st]((e) => (e ? this.emit('error', e) : this.end()))
            );
          this.offset >= this.length &&
            ((this.buf = Buffer.allocUnsafe(
              Math.min(this.blockRemain, this.buf.length)
            )),
            (this.offset = 0)),
            (this.length = this.buf.length - this.offset),
            this[As]();
        }
      }
    ),
    Qn = class extends Fs {
      [Xn]() {
        this[Ds](De.lstatSync(this.absolute));
      }
      [$n]() {
        this[Wn](De.readlinkSync(this.absolute));
      }
      [Yn]() {
        this[Zn](De.openSync(this.absolute, 'r'));
      }
      [As]() {
        let e = !0;
        try {
          let { fd: t, buf: s, offset: i, length: n, pos: o } = this,
            c = De.readSync(t, s, i, n, o);
          this[Kn](c), (e = !1);
        } finally {
          if (e)
            try {
              this[st](() => {});
            } catch {}
        }
      }
      [Jn](e) {
        e();
      }
      [st](e) {
        De.closeSync(this.fd), e();
      }
    },
    tm = ku(
      class extends Fu {
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
            (this.path = Ae(e.path)),
            (this.mode = this[Us](e.mode)),
            (this.uid = this.portable ? null : e.uid),
            (this.gid = this.portable ? null : e.gid),
            (this.uname = this.portable ? null : e.uname),
            (this.gname = this.portable ? null : e.gname),
            (this.size = e.size),
            (this.mtime = this.noMtime ? null : t.mtime || e.mtime),
            (this.atime = this.portable ? null : e.atime),
            (this.ctime = this.portable ? null : e.ctime),
            (this.linkpath = Ae(e.linkpath)),
            typeof t.onwarn == 'function' && this.on('warn', t.onwarn);
          let s = !1;
          if (!this.preservePaths) {
            let [i, n] = qu(this.path);
            i && ((this.path = n), (s = i));
          }
          (this.remain = e.size),
            (this.blockRemain = e.startBlockSize),
            (this.header = new Mu({
              path: this[Ue](this.path),
              linkpath:
                this.type === 'Link' ? this[Ue](this.linkpath) : this.linkpath,
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
            s &&
              this.warn('TAR_ENTRY_INFO', `stripping ${s} from absolute path`, {
                entry: this,
                path: s + this.path,
              }),
            this.header.encode() &&
              !this.noPax &&
              super.write(
                new Bu({
                  atime: this.portable ? null : this.atime,
                  ctime: this.portable ? null : this.ctime,
                  gid: this.portable ? null : this.gid,
                  mtime: this.noMtime ? null : this.mtime,
                  path: this[Ue](this.path),
                  linkpath:
                    this.type === 'Link'
                      ? this[Ue](this.linkpath)
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
        [Ue](e) {
          return Pu(e, this.prefix);
        }
        [Us](e) {
          return Hu(e, this.type === 'Directory', this.portable);
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
  Fs.Sync = Qn;
  Fs.Tar = tm;
  var rm = (r) =>
    r.isFile()
      ? 'File'
      : r.isDirectory()
      ? 'Directory'
      : r.isSymbolicLink()
      ? 'SymbolicLink'
      : 'Unsupported';
  Gu.exports = Fs;
});
var ju = E((N_, zu) => {
  'use strict';
  zu.exports = function (r) {
    r.prototype[Symbol.iterator] = function* () {
      for (let e = this.head; e; e = e.next) yield e.value;
    };
  };
});
var to = E((L_, Vu) => {
  'use strict';
  Vu.exports = I;
  I.Node = St;
  I.create = I;
  function I(r) {
    var e = this;
    if (
      (e instanceof I || (e = new I()),
      (e.tail = null),
      (e.head = null),
      (e.length = 0),
      r && typeof r.forEach == 'function')
    )
      r.forEach(function (i) {
        e.push(i);
      });
    else if (arguments.length > 0)
      for (var t = 0, s = arguments.length; t < s; t++) e.push(arguments[t]);
    return e;
  }
  I.prototype.removeNode = function (r) {
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
  I.prototype.unshiftNode = function (r) {
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
  I.prototype.pushNode = function (r) {
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
  I.prototype.push = function () {
    for (var r = 0, e = arguments.length; r < e; r++) im(this, arguments[r]);
    return this.length;
  };
  I.prototype.unshift = function () {
    for (var r = 0, e = arguments.length; r < e; r++) nm(this, arguments[r]);
    return this.length;
  };
  I.prototype.pop = function () {
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
  I.prototype.shift = function () {
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
  I.prototype.forEach = function (r, e) {
    e = e || this;
    for (var t = this.head, s = 0; t !== null; s++)
      r.call(e, t.value, s, this), (t = t.next);
  };
  I.prototype.forEachReverse = function (r, e) {
    e = e || this;
    for (var t = this.tail, s = this.length - 1; t !== null; s--)
      r.call(e, t.value, s, this), (t = t.prev);
  };
  I.prototype.get = function (r) {
    for (var e = 0, t = this.head; t !== null && e < r; e++) t = t.next;
    if (e === r && t !== null) return t.value;
  };
  I.prototype.getReverse = function (r) {
    for (var e = 0, t = this.tail; t !== null && e < r; e++) t = t.prev;
    if (e === r && t !== null) return t.value;
  };
  I.prototype.map = function (r, e) {
    e = e || this;
    for (var t = new I(), s = this.head; s !== null; )
      t.push(r.call(e, s.value, this)), (s = s.next);
    return t;
  };
  I.prototype.mapReverse = function (r, e) {
    e = e || this;
    for (var t = new I(), s = this.tail; s !== null; )
      t.push(r.call(e, s.value, this)), (s = s.prev);
    return t;
  };
  I.prototype.reduce = function (r, e) {
    var t,
      s = this.head;
    if (arguments.length > 1) t = e;
    else if (this.head) (s = this.head.next), (t = this.head.value);
    else throw new TypeError('Reduce of empty list with no initial value');
    for (var i = 0; s !== null; i++) (t = r(t, s.value, i)), (s = s.next);
    return t;
  };
  I.prototype.reduceReverse = function (r, e) {
    var t,
      s = this.tail;
    if (arguments.length > 1) t = e;
    else if (this.tail) (s = this.tail.prev), (t = this.tail.value);
    else throw new TypeError('Reduce of empty list with no initial value');
    for (var i = this.length - 1; s !== null; i--)
      (t = r(t, s.value, i)), (s = s.prev);
    return t;
  };
  I.prototype.toArray = function () {
    for (var r = new Array(this.length), e = 0, t = this.head; t !== null; e++)
      (r[e] = t.value), (t = t.next);
    return r;
  };
  I.prototype.toArrayReverse = function () {
    for (var r = new Array(this.length), e = 0, t = this.tail; t !== null; e++)
      (r[e] = t.value), (t = t.prev);
    return r;
  };
  I.prototype.slice = function (r, e) {
    (e = e || this.length),
      e < 0 && (e += this.length),
      (r = r || 0),
      r < 0 && (r += this.length);
    var t = new I();
    if (e < r || e < 0) return t;
    r < 0 && (r = 0), e > this.length && (e = this.length);
    for (var s = 0, i = this.head; i !== null && s < r; s++) i = i.next;
    for (; i !== null && s < e; s++, i = i.next) t.push(i.value);
    return t;
  };
  I.prototype.sliceReverse = function (r, e) {
    (e = e || this.length),
      e < 0 && (e += this.length),
      (r = r || 0),
      r < 0 && (r += this.length);
    var t = new I();
    if (e < r || e < 0) return t;
    r < 0 && (r = 0), e > this.length && (e = this.length);
    for (var s = this.length, i = this.tail; i !== null && s > e; s--)
      i = i.prev;
    for (; i !== null && s > r; s--, i = i.prev) t.push(i.value);
    return t;
  };
  I.prototype.splice = function (r, e, ...t) {
    r > this.length && (r = this.length - 1), r < 0 && (r = this.length + r);
    for (var s = 0, i = this.head; i !== null && s < r; s++) i = i.next;
    for (var n = [], s = 0; i && s < e; s++)
      n.push(i.value), (i = this.removeNode(i));
    i === null && (i = this.tail),
      i !== this.head && i !== this.tail && (i = i.prev);
    for (var s = 0; s < t.length; s++) i = sm(this, i, t[s]);
    return n;
  };
  I.prototype.reverse = function () {
    for (var r = this.head, e = this.tail, t = r; t !== null; t = t.prev) {
      var s = t.prev;
      (t.prev = t.next), (t.next = s);
    }
    return (this.head = e), (this.tail = r), this;
  };
  function sm(r, e, t) {
    var s = e === r.head ? new St(t, null, e, r) : new St(t, e, e.next, r);
    return (
      s.next === null && (r.tail = s),
      s.prev === null && (r.head = s),
      r.length++,
      s
    );
  }
  function im(r, e) {
    (r.tail = new St(e, r.tail, null, r)),
      r.head || (r.head = r.tail),
      r.length++;
  }
  function nm(r, e) {
    (r.head = new St(e, null, r.head, r)),
      r.tail || (r.tail = r.head),
      r.length++;
  }
  function St(r, e, t, s) {
    if (!(this instanceof St)) return new St(r, e, t, s);
    (this.list = s),
      (this.value = r),
      e ? ((e.next = this), (this.prev = e)) : (this.prev = null),
      t ? ((t.prev = this), (this.next = t)) : (this.next = null);
  }
  try {
    ju()(I);
  } catch {}
});
var js = E((D_, Ju) => {
  'use strict';
  var Gs = class {
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
    om = Kt(),
    am = Dn(),
    cm = xs(),
    lo = eo(),
    um = lo.Sync,
    lm = lo.Tar,
    hm = to(),
    $u = Buffer.alloc(1024),
    Ps = Symbol('onStat'),
    Bs = Symbol('ended'),
    Fe = Symbol('queue'),
    tr = Symbol('current'),
    Ot = Symbol('process'),
    Ms = Symbol('processing'),
    Xu = Symbol('processJob'),
    Be = Symbol('jobs'),
    ro = Symbol('jobDone'),
    ks = Symbol('addFSEntry'),
    Ku = Symbol('addTarEntry'),
    oo = Symbol('stat'),
    ao = Symbol('readdir'),
    qs = Symbol('onreaddir'),
    Hs = Symbol('pipe'),
    Wu = Symbol('entry'),
    so = Symbol('entryOpt'),
    co = Symbol('writeEntryClass'),
    Zu = Symbol('write'),
    io = Symbol('ondrain'),
    zs = require('fs'),
    Yu = require('path'),
    fm = Ns(),
    no = Zt(),
    ho = fm(
      class extends om {
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
            (this.prefix = no(e.prefix || '')),
            (this.linkCache = e.linkCache || new Map()),
            (this.statCache = e.statCache || new Map()),
            (this.readdirCache = e.readdirCache || new Map()),
            (this[co] = lo),
            typeof e.onwarn == 'function' && this.on('warn', e.onwarn),
            (this.portable = !!e.portable),
            (this.zip = null),
            e.gzip
              ? (typeof e.gzip != 'object' && (e.gzip = {}),
                this.portable && (e.gzip.portable = !0),
                (this.zip = new am.Gzip(e.gzip)),
                this.zip.on('data', (t) => super.write(t)),
                this.zip.on('end', (t) => super.end()),
                this.zip.on('drain', (t) => this[io]()),
                this.on('resume', (t) => this.zip.resume()))
              : this.on('drain', this[io]),
            (this.noDirRecurse = !!e.noDirRecurse),
            (this.follow = !!e.follow),
            (this.noMtime = !!e.noMtime),
            (this.mtime = e.mtime || null),
            (this.filter =
              typeof e.filter == 'function' ? e.filter : (t) => !0),
            (this[Fe] = new hm()),
            (this[Be] = 0),
            (this.jobs = +e.jobs || 4),
            (this[Ms] = !1),
            (this[Bs] = !1);
        }
        [Zu](e) {
          return super.write(e);
        }
        add(e) {
          return this.write(e), this;
        }
        end(e) {
          return e && this.write(e), (this[Bs] = !0), this[Ot](), this;
        }
        write(e) {
          if (this[Bs]) throw new Error('write after end');
          return e instanceof cm ? this[Ku](e) : this[ks](e), this.flowing;
        }
        [Ku](e) {
          let t = no(Yu.resolve(this.cwd, e.path));
          if (!this.filter(e.path, e)) e.resume();
          else {
            let s = new Gs(e.path, t, !1);
            (s.entry = new lm(e, this[so](s))),
              s.entry.on('end', (i) => this[ro](s)),
              (this[Be] += 1),
              this[Fe].push(s);
          }
          this[Ot]();
        }
        [ks](e) {
          let t = no(Yu.resolve(this.cwd, e));
          this[Fe].push(new Gs(e, t)), this[Ot]();
        }
        [oo](e) {
          (e.pending = !0), (this[Be] += 1);
          let t = this.follow ? 'stat' : 'lstat';
          zs[t](e.absolute, (s, i) => {
            (e.pending = !1),
              (this[Be] -= 1),
              s ? this.emit('error', s) : this[Ps](e, i);
          });
        }
        [Ps](e, t) {
          this.statCache.set(e.absolute, t),
            (e.stat = t),
            this.filter(e.path, t) || (e.ignore = !0),
            this[Ot]();
        }
        [ao](e) {
          (e.pending = !0),
            (this[Be] += 1),
            zs.readdir(e.absolute, (t, s) => {
              if (((e.pending = !1), (this[Be] -= 1), t))
                return this.emit('error', t);
              this[qs](e, s);
            });
        }
        [qs](e, t) {
          this.readdirCache.set(e.absolute, t), (e.readdir = t), this[Ot]();
        }
        [Ot]() {
          if (!this[Ms]) {
            this[Ms] = !0;
            for (
              let e = this[Fe].head;
              e !== null && this[Be] < this.jobs;
              e = e.next
            )
              if ((this[Xu](e.value), e.value.ignore)) {
                let t = e.next;
                this[Fe].removeNode(e), (e.next = t);
              }
            (this[Ms] = !1),
              this[Bs] &&
                !this[Fe].length &&
                this[Be] === 0 &&
                (this.zip ? this.zip.end($u) : (super.write($u), super.end()));
          }
        }
        get [tr]() {
          return this[Fe] && this[Fe].head && this[Fe].head.value;
        }
        [ro](e) {
          this[Fe].shift(), (this[Be] -= 1), this[Ot]();
        }
        [Xu](e) {
          if (!e.pending) {
            if (e.entry) {
              e === this[tr] && !e.piped && this[Hs](e);
              return;
            }
            if (
              (e.stat ||
                (this.statCache.has(e.absolute)
                  ? this[Ps](e, this.statCache.get(e.absolute))
                  : this[oo](e)),
              !!e.stat &&
                !e.ignore &&
                !(
                  !this.noDirRecurse &&
                  e.stat.isDirectory() &&
                  !e.readdir &&
                  (this.readdirCache.has(e.absolute)
                    ? this[qs](e, this.readdirCache.get(e.absolute))
                    : this[ao](e),
                  !e.readdir)
                ))
            ) {
              if (((e.entry = this[Wu](e)), !e.entry)) {
                e.ignore = !0;
                return;
              }
              e === this[tr] && !e.piped && this[Hs](e);
            }
          }
        }
        [so](e) {
          return {
            onwarn: (t, s, i) => this.warn(t, s, i),
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
        [Wu](e) {
          this[Be] += 1;
          try {
            return new this[co](e.path, this[so](e))
              .on('end', () => this[ro](e))
              .on('error', (t) => this.emit('error', t));
          } catch (t) {
            this.emit('error', t);
          }
        }
        [io]() {
          this[tr] && this[tr].entry && this[tr].entry.resume();
        }
        [Hs](e) {
          (e.piped = !0),
            e.readdir &&
              e.readdir.forEach((i) => {
                let n = e.path,
                  o = n === './' ? '' : n.replace(/\/*$/, '/');
                this[ks](o + i);
              });
          let t = e.entry,
            s = this.zip;
          s
            ? t.on('data', (i) => {
                s.write(i) || t.pause();
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
    uo = class extends ho {
      constructor(e) {
        super(e), (this[co] = um);
      }
      pause() {}
      resume() {}
      [oo](e) {
        let t = this.follow ? 'statSync' : 'lstatSync';
        this[Ps](e, zs[t](e.absolute));
      }
      [ao](e, t) {
        this[qs](e, zs.readdirSync(e.absolute));
      }
      [Hs](e) {
        let t = e.entry,
          s = this.zip;
        e.readdir &&
          e.readdir.forEach((i) => {
            let n = e.path,
              o = n === './' ? '' : n.replace(/\/*$/, '/');
            this[ks](o + i);
          }),
          s
            ? t.on('data', (i) => {
                s.write(i);
              })
            : t.on('data', (i) => {
                super[Zu](i);
              });
      }
    };
  ho.Sync = uo;
  Ju.exports = ho;
});
var ur = E((kr) => {
  'use strict';
  var dm = Kt(),
    pm = require('events').EventEmitter,
    ae = require('fs'),
    mo = ae.writev;
  if (!mo) {
    let r = process.binding('fs'),
      e = r.FSReqWrap || r.FSReqCallback;
    mo = (t, s, i, n) => {
      let o = (a, l) => n(a, l, s),
        c = new e();
      (c.oncomplete = o), r.writeBuffers(t, s, i, c);
    };
  }
  var ar = Symbol('_autoClose'),
    xe = Symbol('_close'),
    Pr = Symbol('_ended'),
    D = Symbol('_fd'),
    Qu = Symbol('_finished'),
    nt = Symbol('_flags'),
    fo = Symbol('_flush'),
    Eo = Symbol('_handleChunk'),
    yo = Symbol('_makeBuf'),
    Ws = Symbol('_mode'),
    Vs = Symbol('_needDrain'),
    nr = Symbol('_onerror'),
    cr = Symbol('_onopen'),
    po = Symbol('_onread'),
    sr = Symbol('_onwrite'),
    ot = Symbol('_open'),
    $e = Symbol('_path'),
    Tt = Symbol('_pos'),
    Me = Symbol('_queue'),
    ir = Symbol('_read'),
    el = Symbol('_readSize'),
    it = Symbol('_reading'),
    $s = Symbol('_remain'),
    tl = Symbol('_size'),
    Xs = Symbol('_write'),
    rr = Symbol('_writing'),
    Ks = Symbol('_defaultFlag'),
    or = Symbol('_errored'),
    Ys = class extends dm {
      constructor(e, t) {
        if (
          ((t = t || {}),
          super(t),
          (this.readable = !0),
          (this.writable = !1),
          typeof e != 'string')
        )
          throw new TypeError('path must be a string');
        (this[or] = !1),
          (this[D] = typeof t.fd == 'number' ? t.fd : null),
          (this[$e] = e),
          (this[el] = t.readSize || 16 * 1024 * 1024),
          (this[it] = !1),
          (this[tl] = typeof t.size == 'number' ? t.size : 1 / 0),
          (this[$s] = this[tl]),
          (this[ar] = typeof t.autoClose == 'boolean' ? t.autoClose : !0),
          typeof this[D] == 'number' ? this[ir]() : this[ot]();
      }
      get fd() {
        return this[D];
      }
      get path() {
        return this[$e];
      }
      write() {
        throw new TypeError('this is a readable stream');
      }
      end() {
        throw new TypeError('this is a readable stream');
      }
      [ot]() {
        ae.open(this[$e], 'r', (e, t) => this[cr](e, t));
      }
      [cr](e, t) {
        e ? this[nr](e) : ((this[D] = t), this.emit('open', t), this[ir]());
      }
      [yo]() {
        return Buffer.allocUnsafe(Math.min(this[el], this[$s]));
      }
      [ir]() {
        if (!this[it]) {
          this[it] = !0;
          let e = this[yo]();
          if (e.length === 0)
            return process.nextTick(() => this[po](null, 0, e));
          ae.read(this[D], e, 0, e.length, null, (t, s, i) =>
            this[po](t, s, i)
          );
        }
      }
      [po](e, t, s) {
        (this[it] = !1), e ? this[nr](e) : this[Eo](t, s) && this[ir]();
      }
      [xe]() {
        if (this[ar] && typeof this[D] == 'number') {
          let e = this[D];
          (this[D] = null),
            ae.close(e, (t) =>
              t ? this.emit('error', t) : this.emit('close')
            );
        }
      }
      [nr](e) {
        (this[it] = !0), this[xe](), this.emit('error', e);
      }
      [Eo](e, t) {
        let s = !1;
        return (
          (this[$s] -= e),
          e > 0 && (s = super.write(e < t.length ? t.slice(0, e) : t)),
          (e === 0 || this[$s] <= 0) && ((s = !1), this[xe](), super.end()),
          s
        );
      }
      emit(e, t) {
        switch (e) {
          case 'prefinish':
          case 'finish':
            break;
          case 'drain':
            typeof this[D] == 'number' && this[ir]();
            break;
          case 'error':
            return this[or] ? void 0 : ((this[or] = !0), super.emit(e, t));
          default:
            return super.emit(e, t);
        }
      }
    },
    _o = class extends Ys {
      [ot]() {
        let e = !0;
        try {
          this[cr](null, ae.openSync(this[$e], 'r')), (e = !1);
        } finally {
          e && this[xe]();
        }
      }
      [ir]() {
        let e = !0;
        try {
          if (!this[it]) {
            this[it] = !0;
            do {
              let t = this[yo](),
                s =
                  t.length === 0
                    ? 0
                    : ae.readSync(this[D], t, 0, t.length, null);
              if (!this[Eo](s, t)) break;
            } while (!0);
            this[it] = !1;
          }
          e = !1;
        } finally {
          e && this[xe]();
        }
      }
      [xe]() {
        if (this[ar] && typeof this[D] == 'number') {
          let e = this[D];
          (this[D] = null), ae.closeSync(e), this.emit('close');
        }
      }
    },
    Zs = class extends pm {
      constructor(e, t) {
        (t = t || {}),
          super(t),
          (this.readable = !1),
          (this.writable = !0),
          (this[or] = !1),
          (this[rr] = !1),
          (this[Pr] = !1),
          (this[Vs] = !1),
          (this[Me] = []),
          (this[$e] = e),
          (this[D] = typeof t.fd == 'number' ? t.fd : null),
          (this[Ws] = t.mode === void 0 ? 438 : t.mode),
          (this[Tt] = typeof t.start == 'number' ? t.start : null),
          (this[ar] = typeof t.autoClose == 'boolean' ? t.autoClose : !0);
        let s = this[Tt] !== null ? 'r+' : 'w';
        (this[Ks] = t.flags === void 0),
          (this[nt] = this[Ks] ? s : t.flags),
          this[D] === null && this[ot]();
      }
      emit(e, t) {
        if (e === 'error') {
          if (this[or]) return;
          this[or] = !0;
        }
        return super.emit(e, t);
      }
      get fd() {
        return this[D];
      }
      get path() {
        return this[$e];
      }
      [nr](e) {
        this[xe](), (this[rr] = !0), this.emit('error', e);
      }
      [ot]() {
        ae.open(this[$e], this[nt], this[Ws], (e, t) => this[cr](e, t));
      }
      [cr](e, t) {
        this[Ks] && this[nt] === 'r+' && e && e.code === 'ENOENT'
          ? ((this[nt] = 'w'), this[ot]())
          : e
          ? this[nr](e)
          : ((this[D] = t), this.emit('open', t), this[fo]());
      }
      end(e, t) {
        return (
          e && this.write(e, t),
          (this[Pr] = !0),
          !this[rr] &&
            !this[Me].length &&
            typeof this[D] == 'number' &&
            this[sr](null, 0),
          this
        );
      }
      write(e, t) {
        return (
          typeof e == 'string' && (e = Buffer.from(e, t)),
          this[Pr]
            ? (this.emit('error', new Error('write() after end()')), !1)
            : this[D] === null || this[rr] || this[Me].length
            ? (this[Me].push(e), (this[Vs] = !0), !1)
            : ((this[rr] = !0), this[Xs](e), !0)
        );
      }
      [Xs](e) {
        ae.write(this[D], e, 0, e.length, this[Tt], (t, s) => this[sr](t, s));
      }
      [sr](e, t) {
        e
          ? this[nr](e)
          : (this[Tt] !== null && (this[Tt] += t),
            this[Me].length
              ? this[fo]()
              : ((this[rr] = !1),
                this[Pr] && !this[Qu]
                  ? ((this[Qu] = !0), this[xe](), this.emit('finish'))
                  : this[Vs] && ((this[Vs] = !1), this.emit('drain'))));
      }
      [fo]() {
        if (this[Me].length === 0) this[Pr] && this[sr](null, 0);
        else if (this[Me].length === 1) this[Xs](this[Me].pop());
        else {
          let e = this[Me];
          (this[Me] = []), mo(this[D], e, this[Tt], (t, s) => this[sr](t, s));
        }
      }
      [xe]() {
        if (this[ar] && typeof this[D] == 'number') {
          let e = this[D];
          (this[D] = null),
            ae.close(e, (t) =>
              t ? this.emit('error', t) : this.emit('close')
            );
        }
      }
    },
    Ro = class extends Zs {
      [ot]() {
        let e;
        if (this[Ks] && this[nt] === 'r+')
          try {
            e = ae.openSync(this[$e], this[nt], this[Ws]);
          } catch (t) {
            if (t.code === 'ENOENT') return (this[nt] = 'w'), this[ot]();
            throw t;
          }
        else e = ae.openSync(this[$e], this[nt], this[Ws]);
        this[cr](null, e);
      }
      [xe]() {
        if (this[ar] && typeof this[D] == 'number') {
          let e = this[D];
          (this[D] = null), ae.closeSync(e), this.emit('close');
        }
      }
      [Xs](e) {
        let t = !0;
        try {
          this[sr](null, ae.writeSync(this[D], e, 0, e.length, this[Tt])),
            (t = !1);
        } finally {
          if (t)
            try {
              this[xe]();
            } catch {}
        }
      }
    };
  kr.ReadStream = Ys;
  kr.ReadStreamSync = _o;
  kr.WriteStream = Zs;
  kr.WriteStreamSync = Ro;
});
var ii = E((B_, cl) => {
  'use strict';
  var mm = Ns(),
    Em = Qt(),
    ym = require('events'),
    _m = to(),
    Rm = 1024 * 1024,
    gm = xs(),
    rl = Is(),
    vm = Dn(),
    go = Buffer.from([31, 139]),
    _e = Symbol('state'),
    xt = Symbol('writeEntry'),
    Xe = Symbol('readEntry'),
    vo = Symbol('nextEntry'),
    sl = Symbol('processEntry'),
    Re = Symbol('extendedHeader'),
    qr = Symbol('globalExtendedHeader'),
    at = Symbol('meta'),
    il = Symbol('emitMeta'),
    M = Symbol('buffer'),
    Ke = Symbol('queue'),
    bt = Symbol('ended'),
    nl = Symbol('emittedEnd'),
    It = Symbol('emit'),
    ce = Symbol('unzip'),
    Js = Symbol('consumeChunk'),
    Qs = Symbol('consumeChunkSub'),
    wo = Symbol('consumeBody'),
    ol = Symbol('consumeMeta'),
    al = Symbol('consumeHeader'),
    ei = Symbol('consuming'),
    Co = Symbol('bufferConcat'),
    So = Symbol('maybeEnd'),
    Hr = Symbol('writing'),
    ct = Symbol('aborted'),
    ti = Symbol('onDone'),
    Nt = Symbol('sawValidEntry'),
    ri = Symbol('sawNullBlock'),
    si = Symbol('sawEOF'),
    wm = (r) => !0;
  cl.exports = mm(
    class extends ym {
      constructor(e) {
        (e = e || {}),
          super(e),
          (this.file = e.file || ''),
          (this[Nt] = null),
          this.on(ti, (t) => {
            (this[_e] === 'begin' || this[Nt] === !1) &&
              this.warn('TAR_BAD_ARCHIVE', 'Unrecognized archive format');
          }),
          e.ondone
            ? this.on(ti, e.ondone)
            : this.on(ti, (t) => {
                this.emit('prefinish'),
                  this.emit('finish'),
                  this.emit('end'),
                  this.emit('close');
              }),
          (this.strict = !!e.strict),
          (this.maxMetaEntrySize = e.maxMetaEntrySize || Rm),
          (this.filter = typeof e.filter == 'function' ? e.filter : wm),
          (this.writable = !0),
          (this.readable = !1),
          (this[Ke] = new _m()),
          (this[M] = null),
          (this[Xe] = null),
          (this[xt] = null),
          (this[_e] = 'begin'),
          (this[at] = ''),
          (this[Re] = null),
          (this[qr] = null),
          (this[bt] = !1),
          (this[ce] = null),
          (this[ct] = !1),
          (this[ri] = !1),
          (this[si] = !1),
          typeof e.onwarn == 'function' && this.on('warn', e.onwarn),
          typeof e.onentry == 'function' && this.on('entry', e.onentry);
      }
      [al](e, t) {
        this[Nt] === null && (this[Nt] = !1);
        let s;
        try {
          s = new Em(e, t, this[Re], this[qr]);
        } catch (i) {
          return this.warn('TAR_ENTRY_INVALID', i);
        }
        if (s.nullBlock)
          this[ri]
            ? ((this[si] = !0),
              this[_e] === 'begin' && (this[_e] = 'header'),
              this[It]('eof'))
            : ((this[ri] = !0), this[It]('nullBlock'));
        else if (((this[ri] = !1), !s.cksumValid))
          this.warn('TAR_ENTRY_INVALID', 'checksum failure', { header: s });
        else if (!s.path)
          this.warn('TAR_ENTRY_INVALID', 'path is required', { header: s });
        else {
          let i = s.type;
          if (/^(Symbolic)?Link$/.test(i) && !s.linkpath)
            this.warn('TAR_ENTRY_INVALID', 'linkpath required', { header: s });
          else if (!/^(Symbolic)?Link$/.test(i) && s.linkpath)
            this.warn('TAR_ENTRY_INVALID', 'linkpath forbidden', { header: s });
          else {
            let n = (this[xt] = new gm(s, this[Re], this[qr]));
            if (!this[Nt])
              if (n.remain) {
                let o = () => {
                  n.invalid || (this[Nt] = !0);
                };
                n.on('end', o);
              } else this[Nt] = !0;
            n.meta
              ? n.size > this.maxMetaEntrySize
                ? ((n.ignore = !0),
                  this[It]('ignoredEntry', n),
                  (this[_e] = 'ignore'),
                  n.resume())
                : n.size > 0 &&
                  ((this[at] = ''),
                  n.on('data', (o) => (this[at] += o)),
                  (this[_e] = 'meta'))
              : ((this[Re] = null),
                (n.ignore = n.ignore || !this.filter(n.path, n)),
                n.ignore
                  ? (this[It]('ignoredEntry', n),
                    (this[_e] = n.remain ? 'ignore' : 'header'),
                    n.resume())
                  : (n.remain
                      ? (this[_e] = 'body')
                      : ((this[_e] = 'header'), n.end()),
                    this[Xe]
                      ? this[Ke].push(n)
                      : (this[Ke].push(n), this[vo]())));
          }
        }
      }
      [sl](e) {
        let t = !0;
        return (
          e
            ? Array.isArray(e)
              ? this.emit.apply(this, e)
              : ((this[Xe] = e),
                this.emit('entry', e),
                e.emittedEnd || (e.on('end', (s) => this[vo]()), (t = !1)))
            : ((this[Xe] = null), (t = !1)),
          t
        );
      }
      [vo]() {
        do;
        while (this[sl](this[Ke].shift()));
        if (!this[Ke].length) {
          let e = this[Xe];
          !e || e.flowing || e.size === e.remain
            ? this[Hr] || this.emit('drain')
            : e.once('drain', (s) => this.emit('drain'));
        }
      }
      [wo](e, t) {
        let s = this[xt],
          i = s.blockRemain,
          n = i >= e.length && t === 0 ? e : e.slice(t, t + i);
        return (
          s.write(n),
          s.blockRemain || ((this[_e] = 'header'), (this[xt] = null), s.end()),
          n.length
        );
      }
      [ol](e, t) {
        let s = this[xt],
          i = this[wo](e, t);
        return this[xt] || this[il](s), i;
      }
      [It](e, t, s) {
        !this[Ke].length && !this[Xe]
          ? this.emit(e, t, s)
          : this[Ke].push([e, t, s]);
      }
      [il](e) {
        switch ((this[It]('meta', this[at]), e.type)) {
          case 'ExtendedHeader':
          case 'OldExtendedHeader':
            this[Re] = rl.parse(this[at], this[Re], !1);
            break;
          case 'GlobalExtendedHeader':
            this[qr] = rl.parse(this[at], this[qr], !0);
            break;
          case 'NextFileHasLongPath':
          case 'OldGnuLongPath':
            (this[Re] = this[Re] || Object.create(null)),
              (this[Re].path = this[at].replace(/\0.*/, ''));
            break;
          case 'NextFileHasLongLinkpath':
            (this[Re] = this[Re] || Object.create(null)),
              (this[Re].linkpath = this[at].replace(/\0.*/, ''));
            break;
          default:
            throw new Error('unknown meta: ' + e.type);
        }
      }
      abort(e) {
        (this[ct] = !0),
          this.emit('abort', e),
          this.warn('TAR_ABORT', e, { recoverable: !1 });
      }
      write(e) {
        if (this[ct]) return;
        if (this[ce] === null && e) {
          if (
            (this[M] && ((e = Buffer.concat([this[M], e])), (this[M] = null)),
            e.length < go.length)
          )
            return (this[M] = e), !0;
          for (let s = 0; this[ce] === null && s < go.length; s++)
            e[s] !== go[s] && (this[ce] = !1);
          if (this[ce] === null) {
            let s = this[bt];
            (this[bt] = !1),
              (this[ce] = new vm.Unzip()),
              this[ce].on('data', (n) => this[Js](n)),
              this[ce].on('error', (n) => this.abort(n)),
              this[ce].on('end', (n) => {
                (this[bt] = !0), this[Js]();
              }),
              (this[Hr] = !0);
            let i = this[ce][s ? 'end' : 'write'](e);
            return (this[Hr] = !1), i;
          }
        }
        (this[Hr] = !0),
          this[ce] ? this[ce].write(e) : this[Js](e),
          (this[Hr] = !1);
        let t = this[Ke].length ? !1 : this[Xe] ? this[Xe].flowing : !0;
        return (
          !t &&
            !this[Ke].length &&
            this[Xe].once('drain', (s) => this.emit('drain')),
          t
        );
      }
      [Co](e) {
        e && !this[ct] && (this[M] = this[M] ? Buffer.concat([this[M], e]) : e);
      }
      [So]() {
        if (this[bt] && !this[nl] && !this[ct] && !this[ei]) {
          this[nl] = !0;
          let e = this[xt];
          if (e && e.blockRemain) {
            let t = this[M] ? this[M].length : 0;
            this.warn(
              'TAR_BAD_ARCHIVE',
              `Truncated input (needed ${e.blockRemain} more bytes, only ${t} available)`,
              { entry: e }
            ),
              this[M] && e.write(this[M]),
              e.end();
          }
          this[It](ti);
        }
      }
      [Js](e) {
        if (this[ei]) this[Co](e);
        else if (!e && !this[M]) this[So]();
        else {
          if (((this[ei] = !0), this[M])) {
            this[Co](e);
            let t = this[M];
            (this[M] = null), this[Qs](t);
          } else this[Qs](e);
          for (; this[M] && this[M].length >= 512 && !this[ct] && !this[si]; ) {
            let t = this[M];
            (this[M] = null), this[Qs](t);
          }
          this[ei] = !1;
        }
        (!this[M] || this[bt]) && this[So]();
      }
      [Qs](e) {
        let t = 0,
          s = e.length;
        for (; t + 512 <= s && !this[ct] && !this[si]; )
          switch (this[_e]) {
            case 'begin':
            case 'header':
              this[al](e, t), (t += 512);
              break;
            case 'ignore':
            case 'body':
              t += this[wo](e, t);
              break;
            case 'meta':
              t += this[ol](e, t);
              break;
            default:
              throw new Error('invalid state: ' + this[_e]);
          }
        t < s &&
          (this[M]
            ? (this[M] = Buffer.concat([e.slice(t), this[M]]))
            : (this[M] = e.slice(t)));
      }
      end(e) {
        this[ct] ||
          (this[ce] ? this[ce].end(e) : ((this[bt] = !0), this.write(e)));
      }
    }
  );
});
var ni = E((M_, fl) => {
  'use strict';
  var Cm = $t(),
    ll = ii(),
    lr = require('fs'),
    Sm = ur(),
    ul = require('path'),
    Oo = er();
  fl.exports = (r, e, t) => {
    typeof r == 'function'
      ? ((t = r), (e = null), (r = {}))
      : Array.isArray(r) && ((e = r), (r = {})),
      typeof e == 'function' && ((t = e), (e = null)),
      e ? (e = Array.from(e)) : (e = []);
    let s = Cm(r);
    if (s.sync && typeof t == 'function')
      throw new TypeError('callback not supported for sync tar functions');
    if (!s.file && typeof t == 'function')
      throw new TypeError('callback only supported with file option');
    return (
      e.length && Tm(s, e),
      s.noResume || Om(s),
      s.file && s.sync ? xm(s) : s.file ? bm(s, t) : hl(s)
    );
  };
  var Om = (r) => {
      let e = r.onentry;
      r.onentry = e
        ? (t) => {
            e(t), t.resume();
          }
        : (t) => t.resume();
    },
    Tm = (r, e) => {
      let t = new Map(e.map((n) => [Oo(n), !0])),
        s = r.filter,
        i = (n, o) => {
          let c = o || ul.parse(n).root || '.',
            a = n === c ? !1 : t.has(n) ? t.get(n) : i(ul.dirname(n), c);
          return t.set(n, a), a;
        };
      r.filter = s ? (n, o) => s(n, o) && i(Oo(n)) : (n) => i(Oo(n));
    },
    xm = (r) => {
      let e = hl(r),
        t = r.file,
        s = !0,
        i;
      try {
        let n = lr.statSync(t),
          o = r.maxReadSize || 16 * 1024 * 1024;
        if (n.size < o) e.end(lr.readFileSync(t));
        else {
          let c = 0,
            a = Buffer.allocUnsafe(o);
          for (i = lr.openSync(t, 'r'); c < n.size; ) {
            let l = lr.readSync(i, a, 0, o, c);
            (c += l), e.write(a.slice(0, l));
          }
          e.end();
        }
        s = !1;
      } finally {
        if (s && i)
          try {
            lr.closeSync(i);
          } catch {}
      }
    },
    bm = (r, e) => {
      let t = new ll(r),
        s = r.maxReadSize || 16 * 1024 * 1024,
        i = r.file,
        n = new Promise((o, c) => {
          t.on('error', c),
            t.on('end', o),
            lr.stat(i, (a, l) => {
              if (a) c(a);
              else {
                let u = new Sm.ReadStream(i, { readSize: s, size: l.size });
                u.on('error', c), u.pipe(t);
              }
            });
        });
      return e ? n.then(e, e) : n;
    },
    hl = (r) => new ll(r);
});
var _l = E((P_, yl) => {
  'use strict';
  var Im = $t(),
    oi = js(),
    dl = ur(),
    pl = ni(),
    ml = require('path');
  yl.exports = (r, e, t) => {
    if (
      (typeof e == 'function' && (t = e),
      Array.isArray(r) && ((e = r), (r = {})),
      !e || !Array.isArray(e) || !e.length)
    )
      throw new TypeError('no files or directories specified');
    e = Array.from(e);
    let s = Im(r);
    if (s.sync && typeof t == 'function')
      throw new TypeError('callback not supported for sync tar functions');
    if (!s.file && typeof t == 'function')
      throw new TypeError('callback only supported with file option');
    return s.file && s.sync
      ? Nm(s, e)
      : s.file
      ? Lm(s, e, t)
      : s.sync
      ? Am(s, e)
      : Dm(s, e);
  };
  var Nm = (r, e) => {
      let t = new oi.Sync(r),
        s = new dl.WriteStreamSync(r.file, { mode: r.mode || 438 });
      t.pipe(s), El(t, e);
    },
    Lm = (r, e, t) => {
      let s = new oi(r),
        i = new dl.WriteStream(r.file, { mode: r.mode || 438 });
      s.pipe(i);
      let n = new Promise((o, c) => {
        i.on('error', c), i.on('close', o), s.on('error', c);
      });
      return To(s, e), t ? n.then(t, t) : n;
    },
    El = (r, e) => {
      e.forEach((t) => {
        t.charAt(0) === '@'
          ? pl({
              file: ml.resolve(r.cwd, t.substr(1)),
              sync: !0,
              noResume: !0,
              onentry: (s) => r.add(s),
            })
          : r.add(t);
      }),
        r.end();
    },
    To = (r, e) => {
      for (; e.length; ) {
        let t = e.shift();
        if (t.charAt(0) === '@')
          return pl({
            file: ml.resolve(r.cwd, t.substr(1)),
            noResume: !0,
            onentry: (s) => r.add(s),
          }).then((s) => To(r, e));
        r.add(t);
      }
      r.end();
    },
    Am = (r, e) => {
      let t = new oi.Sync(r);
      return El(t, e), t;
    },
    Dm = (r, e) => {
      let t = new oi(r);
      return To(t, e), t;
    };
});
var xo = E((k_, Ol) => {
  'use strict';
  var Um = $t(),
    Rl = js(),
    pe = require('fs'),
    gl = ur(),
    vl = ni(),
    wl = require('path'),
    Cl = Qt();
  Ol.exports = (r, e, t) => {
    let s = Um(r);
    if (!s.file) throw new TypeError('file is required');
    if (s.gzip) throw new TypeError('cannot append to compressed archives');
    if (!e || !Array.isArray(e) || !e.length)
      throw new TypeError('no files or directories specified');
    return (e = Array.from(e)), s.sync ? Fm(s, e) : Mm(s, e, t);
  };
  var Fm = (r, e) => {
      let t = new Rl.Sync(r),
        s = !0,
        i,
        n;
      try {
        try {
          i = pe.openSync(r.file, 'r+');
        } catch (a) {
          if (a.code === 'ENOENT') i = pe.openSync(r.file, 'w+');
          else throw a;
        }
        let o = pe.fstatSync(i),
          c = Buffer.alloc(512);
        e: for (n = 0; n < o.size; n += 512) {
          for (let u = 0, h = 0; u < 512; u += h) {
            if (
              ((h = pe.readSync(i, c, u, c.length - u, n + u)),
              n === 0 && c[0] === 31 && c[1] === 139)
            )
              throw new Error('cannot append to compressed archives');
            if (!h) break e;
          }
          let a = new Cl(c);
          if (!a.cksumValid) break;
          let l = 512 * Math.ceil(a.size / 512);
          if (n + l + 512 > o.size) break;
          (n += l), r.mtimeCache && r.mtimeCache.set(a.path, a.mtime);
        }
        (s = !1), Bm(r, t, n, i, e);
      } finally {
        if (s)
          try {
            pe.closeSync(i);
          } catch {}
      }
    },
    Bm = (r, e, t, s, i) => {
      let n = new gl.WriteStreamSync(r.file, { fd: s, start: t });
      e.pipe(n), Pm(e, i);
    },
    Mm = (r, e, t) => {
      e = Array.from(e);
      let s = new Rl(r),
        i = (o, c, a) => {
          let l = (p, y) => {
              p ? pe.close(o, (_) => a(p)) : a(null, y);
            },
            u = 0;
          if (c === 0) return l(null, 0);
          let h = 0,
            f = Buffer.alloc(512),
            d = (p, y) => {
              if (p) return l(p);
              if (((h += y), h < 512 && y))
                return pe.read(o, f, h, f.length - h, u + h, d);
              if (u === 0 && f[0] === 31 && f[1] === 139)
                return l(new Error('cannot append to compressed archives'));
              if (h < 512) return l(null, u);
              let _ = new Cl(f);
              if (!_.cksumValid) return l(null, u);
              let g = 512 * Math.ceil(_.size / 512);
              if (u + g + 512 > c || ((u += g + 512), u >= c))
                return l(null, u);
              r.mtimeCache && r.mtimeCache.set(_.path, _.mtime),
                (h = 0),
                pe.read(o, f, 0, 512, u, d);
            };
          pe.read(o, f, 0, 512, u, d);
        },
        n = new Promise((o, c) => {
          s.on('error', c);
          let a = 'r+',
            l = (u, h) => {
              if (u && u.code === 'ENOENT' && a === 'r+')
                return (a = 'w+'), pe.open(r.file, a, l);
              if (u) return c(u);
              pe.fstat(h, (f, d) => {
                if (f) return pe.close(h, () => c(f));
                i(h, d.size, (p, y) => {
                  if (p) return c(p);
                  let _ = new gl.WriteStream(r.file, { fd: h, start: y });
                  s.pipe(_), _.on('error', c), _.on('close', o), Sl(s, e);
                });
              });
            };
          pe.open(r.file, a, l);
        });
      return t ? n.then(t, t) : n;
    },
    Pm = (r, e) => {
      e.forEach((t) => {
        t.charAt(0) === '@'
          ? vl({
              file: wl.resolve(r.cwd, t.substr(1)),
              sync: !0,
              noResume: !0,
              onentry: (s) => r.add(s),
            })
          : r.add(t);
      }),
        r.end();
    },
    Sl = (r, e) => {
      for (; e.length; ) {
        let t = e.shift();
        if (t.charAt(0) === '@')
          return vl({
            file: wl.resolve(r.cwd, t.substr(1)),
            noResume: !0,
            onentry: (s) => r.add(s),
          }).then((s) => Sl(r, e));
        r.add(t);
      }
      r.end();
    };
});
var xl = E((q_, Tl) => {
  'use strict';
  var km = $t(),
    qm = xo();
  Tl.exports = (r, e, t) => {
    let s = km(r);
    if (!s.file) throw new TypeError('file is required');
    if (s.gzip) throw new TypeError('cannot append to compressed archives');
    if (!e || !Array.isArray(e) || !e.length)
      throw new TypeError('no files or directories specified');
    return (e = Array.from(e)), Hm(s), qm(s, e, t);
  };
  var Hm = (r) => {
    let e = r.filter;
    r.mtimeCache || (r.mtimeCache = new Map()),
      (r.filter = e
        ? (t, s) => e(t, s) && !(r.mtimeCache.get(t) > s.mtime)
        : (t, s) => !(r.mtimeCache.get(t) > s.mtime));
  };
});
var Nl = E((H_, Il) => {
  'use strict';
  var { promisify: bl } = require('util'),
    ut = require('fs'),
    Gm = (r) => {
      if (!r) r = { mode: 511, fs: ut };
      else if (typeof r == 'object') r = { mode: 511, fs: ut, ...r };
      else if (typeof r == 'number') r = { mode: r, fs: ut };
      else if (typeof r == 'string') r = { mode: parseInt(r, 8), fs: ut };
      else throw new TypeError('invalid options argument');
      return (
        (r.mkdir = r.mkdir || r.fs.mkdir || ut.mkdir),
        (r.mkdirAsync = bl(r.mkdir)),
        (r.stat = r.stat || r.fs.stat || ut.stat),
        (r.statAsync = bl(r.stat)),
        (r.statSync = r.statSync || r.fs.statSync || ut.statSync),
        (r.mkdirSync = r.mkdirSync || r.fs.mkdirSync || ut.mkdirSync),
        r
      );
    };
  Il.exports = Gm;
});
var Al = E((G_, Ll) => {
  'use strict';
  var zm = process.env.__TESTING_MKDIRP_PLATFORM__ || process.platform,
    { resolve: jm, parse: Vm } = require('path'),
    $m = (r) => {
      if (/\0/.test(r))
        throw Object.assign(
          new TypeError('path must be a string without null bytes'),
          { path: r, code: 'ERR_INVALID_ARG_VALUE' }
        );
      if (((r = jm(r)), zm === 'win32')) {
        let e = /[*|"<>?:]/,
          { root: t } = Vm(r);
        if (e.test(r.substr(t.length)))
          throw Object.assign(new Error('Illegal characters in path.'), {
            path: r,
            code: 'EINVAL',
          });
      }
      return r;
    };
  Ll.exports = $m;
});
var Ml = E((z_, Bl) => {
  'use strict';
  var { dirname: Dl } = require('path'),
    Ul = (r, e, t = void 0) =>
      t === e
        ? Promise.resolve()
        : r.statAsync(e).then(
            (s) => (s.isDirectory() ? t : void 0),
            (s) => (s.code === 'ENOENT' ? Ul(r, Dl(e), e) : void 0)
          ),
    Fl = (r, e, t = void 0) => {
      if (t !== e)
        try {
          return r.statSync(e).isDirectory() ? t : void 0;
        } catch (s) {
          return s.code === 'ENOENT' ? Fl(r, Dl(e), e) : void 0;
        }
    };
  Bl.exports = { findMade: Ul, findMadeSync: Fl };
});
var No = E((j_, kl) => {
  'use strict';
  var { dirname: Pl } = require('path'),
    bo = (r, e, t) => {
      e.recursive = !1;
      let s = Pl(r);
      return s === r
        ? e.mkdirAsync(r, e).catch((i) => {
            if (i.code !== 'EISDIR') throw i;
          })
        : e.mkdirAsync(r, e).then(
            () => t || r,
            (i) => {
              if (i.code === 'ENOENT') return bo(s, e).then((n) => bo(r, e, n));
              if (i.code !== 'EEXIST' && i.code !== 'EROFS') throw i;
              return e.statAsync(r).then(
                (n) => {
                  if (n.isDirectory()) return t;
                  throw i;
                },
                () => {
                  throw i;
                }
              );
            }
          );
    },
    Io = (r, e, t) => {
      let s = Pl(r);
      if (((e.recursive = !1), s === r))
        try {
          return e.mkdirSync(r, e);
        } catch (i) {
          if (i.code !== 'EISDIR') throw i;
          return;
        }
      try {
        return e.mkdirSync(r, e), t || r;
      } catch (i) {
        if (i.code === 'ENOENT') return Io(r, e, Io(s, e, t));
        if (i.code !== 'EEXIST' && i.code !== 'EROFS') throw i;
        try {
          if (!e.statSync(r).isDirectory()) throw i;
        } catch {
          throw i;
        }
      }
    };
  kl.exports = { mkdirpManual: bo, mkdirpManualSync: Io };
});
var Gl = E((V_, Hl) => {
  'use strict';
  var { dirname: ql } = require('path'),
    { findMade: Xm, findMadeSync: Km } = Ml(),
    { mkdirpManual: Wm, mkdirpManualSync: Ym } = No(),
    Zm = (r, e) => (
      (e.recursive = !0),
      ql(r) === r
        ? e.mkdirAsync(r, e)
        : Xm(e, r).then((s) =>
            e
              .mkdirAsync(r, e)
              .then(() => s)
              .catch((i) => {
                if (i.code === 'ENOENT') return Wm(r, e);
                throw i;
              })
          )
    ),
    Jm = (r, e) => {
      if (((e.recursive = !0), ql(r) === r)) return e.mkdirSync(r, e);
      let s = Km(e, r);
      try {
        return e.mkdirSync(r, e), s;
      } catch (i) {
        if (i.code === 'ENOENT') return Ym(r, e);
        throw i;
      }
    };
  Hl.exports = { mkdirpNative: Zm, mkdirpNativeSync: Jm };
});
var $l = E(($_, Vl) => {
  'use strict';
  var zl = require('fs'),
    Qm = process.env.__TESTING_MKDIRP_NODE_VERSION__ || process.version,
    Lo = Qm.replace(/^v/, '').split('.'),
    jl = +Lo[0] > 10 || (+Lo[0] == 10 && +Lo[1] >= 12),
    eE = jl ? (r) => r.mkdir === zl.mkdir : () => !1,
    tE = jl ? (r) => r.mkdirSync === zl.mkdirSync : () => !1;
  Vl.exports = { useNative: eE, useNativeSync: tE };
});
var Jl = E((X_, Zl) => {
  'use strict';
  var hr = Nl(),
    fr = Al(),
    { mkdirpNative: Xl, mkdirpNativeSync: Kl } = Gl(),
    { mkdirpManual: Wl, mkdirpManualSync: Yl } = No(),
    { useNative: rE, useNativeSync: sE } = $l(),
    dr = (r, e) => ((r = fr(r)), (e = hr(e)), rE(e) ? Xl(r, e) : Wl(r, e)),
    iE = (r, e) => ((r = fr(r)), (e = hr(e)), sE(e) ? Kl(r, e) : Yl(r, e));
  dr.sync = iE;
  dr.native = (r, e) => Xl(fr(r), hr(e));
  dr.manual = (r, e) => Wl(fr(r), hr(e));
  dr.nativeSync = (r, e) => Kl(fr(r), hr(e));
  dr.manualSync = (r, e) => Yl(fr(r), hr(e));
  Zl.exports = dr;
});
var nh = E((K_, ih) => {
  'use strict';
  var ge = require('fs'),
    Lt = require('path'),
    nE = ge.lchown ? 'lchown' : 'chown',
    oE = ge.lchownSync ? 'lchownSync' : 'chownSync',
    eh =
      ge.lchown &&
      !process.version.match(/v1[1-9]+\./) &&
      !process.version.match(/v10\.[6-9]/),
    Ql = (r, e, t) => {
      try {
        return ge[oE](r, e, t);
      } catch (s) {
        if (s.code !== 'ENOENT') throw s;
      }
    },
    aE = (r, e, t) => {
      try {
        return ge.chownSync(r, e, t);
      } catch (s) {
        if (s.code !== 'ENOENT') throw s;
      }
    },
    cE = eh
      ? (r, e, t, s) => (i) => {
          !i || i.code !== 'EISDIR' ? s(i) : ge.chown(r, e, t, s);
        }
      : (r, e, t, s) => s,
    Ao = eh
      ? (r, e, t) => {
          try {
            return Ql(r, e, t);
          } catch (s) {
            if (s.code !== 'EISDIR') throw s;
            aE(r, e, t);
          }
        }
      : (r, e, t) => Ql(r, e, t),
    uE = process.version,
    th = (r, e, t) => ge.readdir(r, e, t),
    lE = (r, e) => ge.readdirSync(r, e);
  /^v4\./.test(uE) && (th = (r, e, t) => ge.readdir(r, t));
  var ai = (r, e, t, s) => {
      ge[nE](
        r,
        e,
        t,
        cE(r, e, t, (i) => {
          s(i && i.code !== 'ENOENT' ? i : null);
        })
      );
    },
    rh = (r, e, t, s, i) => {
      if (typeof e == 'string')
        return ge.lstat(Lt.resolve(r, e), (n, o) => {
          if (n) return i(n.code !== 'ENOENT' ? n : null);
          (o.name = e), rh(r, o, t, s, i);
        });
      if (e.isDirectory())
        Do(Lt.resolve(r, e.name), t, s, (n) => {
          if (n) return i(n);
          let o = Lt.resolve(r, e.name);
          ai(o, t, s, i);
        });
      else {
        let n = Lt.resolve(r, e.name);
        ai(n, t, s, i);
      }
    },
    Do = (r, e, t, s) => {
      th(r, { withFileTypes: !0 }, (i, n) => {
        if (i) {
          if (i.code === 'ENOENT') return s();
          if (i.code !== 'ENOTDIR' && i.code !== 'ENOTSUP') return s(i);
        }
        if (i || !n.length) return ai(r, e, t, s);
        let o = n.length,
          c = null,
          a = (l) => {
            if (!c) {
              if (l) return s((c = l));
              if (--o === 0) return ai(r, e, t, s);
            }
          };
        n.forEach((l) => rh(r, l, e, t, a));
      });
    },
    hE = (r, e, t, s) => {
      if (typeof e == 'string')
        try {
          let i = ge.lstatSync(Lt.resolve(r, e));
          (i.name = e), (e = i);
        } catch (i) {
          if (i.code === 'ENOENT') return;
          throw i;
        }
      e.isDirectory() && sh(Lt.resolve(r, e.name), t, s),
        Ao(Lt.resolve(r, e.name), t, s);
    },
    sh = (r, e, t) => {
      let s;
      try {
        s = lE(r, { withFileTypes: !0 });
      } catch (i) {
        if (i.code === 'ENOENT') return;
        if (i.code === 'ENOTDIR' || i.code === 'ENOTSUP') return Ao(r, e, t);
        throw i;
      }
      return s && s.length && s.forEach((i) => hE(r, i, e, t)), Ao(r, e, t);
    };
  ih.exports = Do;
  Do.sync = sh;
});
var uh = E((W_, Uo) => {
  'use strict';
  var oh = Jl(),
    ve = require('fs'),
    ci = require('path'),
    ah = nh(),
    be = Zt(),
    ui = class extends Error {
      constructor(e, t) {
        super('Cannot extract through symbolic link'),
          (this.path = t),
          (this.symlink = e);
      }
      get name() {
        return 'SylinkError';
      }
    },
    li = class extends Error {
      constructor(e, t) {
        super(t + ": Cannot cd into '" + e + "'"),
          (this.path = e),
          (this.code = t);
      }
      get name() {
        return 'CwdError';
      }
    },
    hi = (r, e) => r.get(be(e)),
    Gr = (r, e, t) => r.set(be(e), t),
    fE = (r, e) => {
      ve.stat(r, (t, s) => {
        (t || !s.isDirectory()) && (t = new li(r, (t && t.code) || 'ENOTDIR')),
          e(t);
      });
    };
  Uo.exports = (r, e, t) => {
    r = be(r);
    let s = e.umask,
      i = e.mode | 448,
      n = (i & s) !== 0,
      o = e.uid,
      c = e.gid,
      a =
        typeof o == 'number' &&
        typeof c == 'number' &&
        (o !== e.processUid || c !== e.processGid),
      l = e.preserve,
      u = e.unlink,
      h = e.cache,
      f = be(e.cwd),
      d = (_, g) => {
        _
          ? t(_)
          : (Gr(h, r, !0),
            g && a ? ah(g, o, c, (O) => d(O)) : n ? ve.chmod(r, i, t) : t());
      };
    if (h && hi(h, r) === !0) return d();
    if (r === f) return fE(r, d);
    if (l) return oh(r, { mode: i }).then((_) => d(null, _), d);
    let y = be(ci.relative(f, r)).split('/');
    fi(f, y, i, h, u, f, null, d);
  };
  var fi = (r, e, t, s, i, n, o, c) => {
      if (!e.length) return c(null, o);
      let a = e.shift(),
        l = be(ci.resolve(r + '/' + a));
      if (hi(s, l)) return fi(l, e, t, s, i, n, o, c);
      ve.mkdir(l, t, ch(l, e, t, s, i, n, o, c));
    },
    ch = (r, e, t, s, i, n, o, c) => (a) => {
      a
        ? ve.lstat(r, (l, u) => {
            if (l) (l.path = l.path && be(l.path)), c(l);
            else if (u.isDirectory()) fi(r, e, t, s, i, n, o, c);
            else if (i)
              ve.unlink(r, (h) => {
                if (h) return c(h);
                ve.mkdir(r, t, ch(r, e, t, s, i, n, o, c));
              });
            else {
              if (u.isSymbolicLink())
                return c(new ui(r, r + '/' + e.join('/')));
              c(a);
            }
          })
        : ((o = o || r), fi(r, e, t, s, i, n, o, c));
    },
    dE = (r) => {
      let e = !1,
        t = 'ENOTDIR';
      try {
        e = ve.statSync(r).isDirectory();
      } catch (s) {
        t = s.code;
      } finally {
        if (!e) throw new li(r, t);
      }
    };
  Uo.exports.sync = (r, e) => {
    r = be(r);
    let t = e.umask,
      s = e.mode | 448,
      i = (s & t) !== 0,
      n = e.uid,
      o = e.gid,
      c =
        typeof n == 'number' &&
        typeof o == 'number' &&
        (n !== e.processUid || o !== e.processGid),
      a = e.preserve,
      l = e.unlink,
      u = e.cache,
      h = be(e.cwd),
      f = (_) => {
        Gr(u, r, !0), _ && c && ah.sync(_, n, o), i && ve.chmodSync(r, s);
      };
    if (u && hi(u, r) === !0) return f();
    if (r === h) return dE(h), f();
    if (a) return f(oh.sync(r, s));
    let p = be(ci.relative(h, r)).split('/'),
      y = null;
    for (let _ = p.shift(), g = h; _ && (g += '/' + _); _ = p.shift())
      if (((g = be(ci.resolve(g))), !hi(u, g)))
        try {
          ve.mkdirSync(g, s), (y = y || g), Gr(u, g, !0);
        } catch {
          let S = ve.lstatSync(g);
          if (S.isDirectory()) {
            Gr(u, g, !0);
            continue;
          } else if (l) {
            ve.unlinkSync(g), ve.mkdirSync(g, s), (y = y || g), Gr(u, g, !0);
            continue;
          } else if (S.isSymbolicLink())
            return new ui(g, g + '/' + p.join('/'));
        }
    return f(y);
  };
});
var Bo = E((Y_, lh) => {
  'use strict';
  var Fo = Object.create(null),
    { hasOwnProperty: pE } = Object.prototype;
  lh.exports = (r) => (pE.call(Fo, r) || (Fo[r] = r.normalize('NFKD')), Fo[r]);
});
var ph = E((Z_, dh) => {
  'use strict';
  var hh = require('assert'),
    mE = Bo(),
    EE = er(),
    { join: fh } = require('path'),
    yE = process.env.TESTING_TAR_FAKE_PLATFORM || process.platform,
    _E = yE === 'win32';
  dh.exports = () => {
    let r = new Map(),
      e = new Map(),
      t = (l) =>
        l
          .split('/')
          .slice(0, -1)
          .reduce(
            (h, f) => (
              h.length && (f = fh(h[h.length - 1], f)), h.push(f || '/'), h
            ),
            []
          ),
      s = new Set(),
      i = (l) => {
        let u = e.get(l);
        if (!u) throw new Error('function does not have any path reservations');
        return {
          paths: u.paths.map((h) => r.get(h)),
          dirs: [...u.dirs].map((h) => r.get(h)),
        };
      },
      n = (l) => {
        let { paths: u, dirs: h } = i(l);
        return (
          u.every((f) => f[0] === l) &&
          h.every((f) => f[0] instanceof Set && f[0].has(l))
        );
      },
      o = (l) => (s.has(l) || !n(l) ? !1 : (s.add(l), l(() => c(l)), !0)),
      c = (l) => {
        if (!s.has(l)) return !1;
        let { paths: u, dirs: h } = e.get(l),
          f = new Set();
        return (
          u.forEach((d) => {
            let p = r.get(d);
            hh.equal(p[0], l),
              p.length === 1
                ? r.delete(d)
                : (p.shift(),
                  typeof p[0] == 'function'
                    ? f.add(p[0])
                    : p[0].forEach((y) => f.add(y)));
          }),
          h.forEach((d) => {
            let p = r.get(d);
            hh(p[0] instanceof Set),
              p[0].size === 1 && p.length === 1
                ? r.delete(d)
                : p[0].size === 1
                ? (p.shift(), f.add(p[0]))
                : p[0].delete(l);
          }),
          s.delete(l),
          f.forEach((d) => o(d)),
          !0
        );
      };
    return {
      check: n,
      reserve: (l, u) => {
        l = _E
          ? ['win32 parallelization disabled']
          : l.map((f) => mE(EE(fh(f))).toLowerCase());
        let h = new Set(l.map((f) => t(f)).reduce((f, d) => f.concat(d)));
        return (
          e.set(u, { dirs: h, paths: l }),
          l.forEach((f) => {
            let d = r.get(f);
            d ? d.push(u) : r.set(f, [u]);
          }),
          h.forEach((f) => {
            let d = r.get(f);
            d
              ? d[d.length - 1] instanceof Set
                ? d[d.length - 1].add(u)
                : d.push(new Set([u]))
              : r.set(f, [new Set([u])]);
          }),
          o(u)
        );
      },
    };
  };
});
var yh = E((J_, Eh) => {
  'use strict';
  var RE = process.env.__FAKE_PLATFORM__ || process.platform,
    gE = RE === 'win32',
    vE = global.__FAKE_TESTING_FS__ || require('fs'),
    {
      O_CREAT: wE,
      O_TRUNC: CE,
      O_WRONLY: SE,
      UV_FS_O_FILEMAP: mh = 0,
    } = vE.constants,
    OE = gE && !!mh,
    TE = 512 * 1024,
    xE = mh | CE | wE | SE;
  Eh.exports = OE ? (r) => (r < TE ? xE : 'w') : () => 'w';
});
var Vo = E((Q_, Lh) => {
  'use strict';
  var bE = require('assert'),
    IE = ii(),
    N = require('fs'),
    NE = ur(),
    We = require('path'),
    bh = uh(),
    _h = zn(),
    LE = ph(),
    AE = jn(),
    me = Zt(),
    DE = er(),
    UE = Bo(),
    Rh = Symbol('onEntry'),
    ko = Symbol('checkFs'),
    gh = Symbol('checkFs2'),
    mi = Symbol('pruneCache'),
    qo = Symbol('isReusable'),
    we = Symbol('makeFs'),
    Ho = Symbol('file'),
    Go = Symbol('directory'),
    Ei = Symbol('link'),
    vh = Symbol('symlink'),
    wh = Symbol('hardlink'),
    Ch = Symbol('unsupported'),
    Sh = Symbol('checkPath'),
    lt = Symbol('mkdir'),
    J = Symbol('onError'),
    di = Symbol('pending'),
    Oh = Symbol('pend'),
    pr = Symbol('unpend'),
    Mo = Symbol('ended'),
    Po = Symbol('maybeClose'),
    zo = Symbol('skip'),
    zr = Symbol('doChown'),
    jr = Symbol('uid'),
    Vr = Symbol('gid'),
    $r = Symbol('checkedCwd'),
    Ih = require('crypto'),
    Nh = yh(),
    FE = process.env.TESTING_TAR_FAKE_PLATFORM || process.platform,
    Xr = FE === 'win32',
    BE = (r, e) => {
      if (!Xr) return N.unlink(r, e);
      let t = r + '.DELETE.' + Ih.randomBytes(16).toString('hex');
      N.rename(r, t, (s) => {
        if (s) return e(s);
        N.unlink(t, e);
      });
    },
    ME = (r) => {
      if (!Xr) return N.unlinkSync(r);
      let e = r + '.DELETE.' + Ih.randomBytes(16).toString('hex');
      N.renameSync(r, e), N.unlinkSync(e);
    },
    Th = (r, e, t) => (r === r >>> 0 ? r : e === e >>> 0 ? e : t),
    xh = (r) => UE(DE(me(r))).toLowerCase(),
    PE = (r, e) => {
      e = xh(e);
      for (let t of r.keys()) {
        let s = xh(t);
        (s === e || s.indexOf(e + '/') === 0) && r.delete(t);
      }
    },
    kE = (r) => {
      for (let e of r.keys()) r.delete(e);
    },
    Kr = class extends IE {
      constructor(e) {
        if (
          (e || (e = {}),
          (e.ondone = (t) => {
            (this[Mo] = !0), this[Po]();
          }),
          super(e),
          (this[$r] = !1),
          (this.reservations = LE()),
          (this.transform =
            typeof e.transform == 'function' ? e.transform : null),
          (this.writable = !0),
          (this.readable = !1),
          (this[di] = 0),
          (this[Mo] = !1),
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
          (this.win32 = !!e.win32 || Xr),
          (this.newer = !!e.newer),
          (this.keep = !!e.keep),
          (this.noMtime = !!e.noMtime),
          (this.preservePaths = !!e.preservePaths),
          (this.unlink = !!e.unlink),
          (this.cwd = me(We.resolve(e.cwd || process.cwd()))),
          (this.strip = +e.strip || 0),
          (this.processUmask = e.noChmod ? 0 : process.umask()),
          (this.umask =
            typeof e.umask == 'number' ? e.umask : this.processUmask),
          (this.dmode = e.dmode || 511 & ~this.umask),
          (this.fmode = e.fmode || 438 & ~this.umask),
          this.on('entry', (t) => this[Rh](t));
      }
      warn(e, t, s = {}) {
        return (
          (e === 'TAR_BAD_ARCHIVE' || e === 'TAR_ABORT') &&
            (s.recoverable = !1),
          super.warn(e, t, s)
        );
      }
      [Po]() {
        this[Mo] &&
          this[di] === 0 &&
          (this.emit('prefinish'),
          this.emit('finish'),
          this.emit('end'),
          this.emit('close'));
      }
      [Sh](e) {
        if (this.strip) {
          let t = me(e.path).split('/');
          if (t.length < this.strip) return !1;
          if (((e.path = t.slice(this.strip).join('/')), e.type === 'Link')) {
            let s = me(e.linkpath).split('/');
            if (s.length >= this.strip)
              e.linkpath = s.slice(this.strip).join('/');
            else return !1;
          }
        }
        if (!this.preservePaths) {
          let t = me(e.path),
            s = t.split('/');
          if (s.includes('..') || (Xr && /^[a-z]:\.\.$/i.test(s[0])))
            return (
              this.warn('TAR_ENTRY_ERROR', "path contains '..'", {
                entry: e,
                path: t,
              }),
              !1
            );
          let [i, n] = AE(t);
          i &&
            ((e.path = n),
            this.warn('TAR_ENTRY_INFO', `stripping ${i} from absolute path`, {
              entry: e,
              path: t,
            }));
        }
        if (
          (We.isAbsolute(e.path)
            ? (e.absolute = me(We.resolve(e.path)))
            : (e.absolute = me(We.resolve(this.cwd, e.path))),
          !this.preservePaths &&
            e.absolute.indexOf(this.cwd + '/') !== 0 &&
            e.absolute !== this.cwd)
        )
          return (
            this.warn('TAR_ENTRY_ERROR', 'path escaped extraction target', {
              entry: e,
              path: me(e.path),
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
          let { root: t } = We.win32.parse(e.absolute);
          e.absolute = t + _h.encode(e.absolute.substr(t.length));
          let { root: s } = We.win32.parse(e.path);
          e.path = s + _h.encode(e.path.substr(s.length));
        }
        return !0;
      }
      [Rh](e) {
        if (!this[Sh](e)) return e.resume();
        switch ((bE.equal(typeof e.absolute, 'string'), e.type)) {
          case 'Directory':
          case 'GNUDumpDir':
            e.mode && (e.mode = e.mode | 448);
          case 'File':
          case 'OldFile':
          case 'ContiguousFile':
          case 'Link':
          case 'SymbolicLink':
            return this[ko](e);
          case 'CharacterDevice':
          case 'BlockDevice':
          case 'FIFO':
          default:
            return this[Ch](e);
        }
      }
      [J](e, t) {
        e.name === 'CwdError'
          ? this.emit('error', e)
          : (this.warn('TAR_ENTRY_ERROR', e, { entry: t }),
            this[pr](),
            t.resume());
      }
      [lt](e, t, s) {
        bh(
          me(e),
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
          s
        );
      }
      [zr](e) {
        return (
          this.forceChown ||
          (this.preserveOwner &&
            ((typeof e.uid == 'number' && e.uid !== this.processUid) ||
              (typeof e.gid == 'number' && e.gid !== this.processGid))) ||
          (typeof this.uid == 'number' && this.uid !== this.processUid) ||
          (typeof this.gid == 'number' && this.gid !== this.processGid)
        );
      }
      [jr](e) {
        return Th(this.uid, e.uid, this.processUid);
      }
      [Vr](e) {
        return Th(this.gid, e.gid, this.processGid);
      }
      [Ho](e, t) {
        let s = e.mode & 4095 || this.fmode,
          i = new NE.WriteStream(e.absolute, {
            flags: Nh(e.size),
            mode: s,
            autoClose: !1,
          });
        i.on('error', (a) => {
          i.fd && N.close(i.fd, () => {}),
            (i.write = () => !0),
            this[J](a, e),
            t();
        });
        let n = 1,
          o = (a) => {
            if (a) {
              i.fd && N.close(i.fd, () => {}), this[J](a, e), t();
              return;
            }
            --n === 0 &&
              N.close(i.fd, (l) => {
                l ? this[J](l, e) : this[pr](), t();
              });
          };
        i.on('finish', (a) => {
          let l = e.absolute,
            u = i.fd;
          if (e.mtime && !this.noMtime) {
            n++;
            let h = e.atime || new Date(),
              f = e.mtime;
            N.futimes(u, h, f, (d) =>
              d ? N.utimes(l, h, f, (p) => o(p && d)) : o()
            );
          }
          if (this[zr](e)) {
            n++;
            let h = this[jr](e),
              f = this[Vr](e);
            N.fchown(u, h, f, (d) =>
              d ? N.chown(l, h, f, (p) => o(p && d)) : o()
            );
          }
          o();
        });
        let c = (this.transform && this.transform(e)) || e;
        c !== e &&
          (c.on('error', (a) => {
            this[J](a, e), t();
          }),
          e.pipe(c)),
          c.pipe(i);
      }
      [Go](e, t) {
        let s = e.mode & 4095 || this.dmode;
        this[lt](e.absolute, s, (i) => {
          if (i) {
            this[J](i, e), t();
            return;
          }
          let n = 1,
            o = (c) => {
              --n === 0 && (t(), this[pr](), e.resume());
            };
          e.mtime &&
            !this.noMtime &&
            (n++, N.utimes(e.absolute, e.atime || new Date(), e.mtime, o)),
            this[zr](e) &&
              (n++, N.chown(e.absolute, this[jr](e), this[Vr](e), o)),
            o();
        });
      }
      [Ch](e) {
        (e.unsupported = !0),
          this.warn(
            'TAR_ENTRY_UNSUPPORTED',
            `unsupported entry type: ${e.type}`,
            { entry: e }
          ),
          e.resume();
      }
      [vh](e, t) {
        this[Ei](e, e.linkpath, 'symlink', t);
      }
      [wh](e, t) {
        let s = me(We.resolve(this.cwd, e.linkpath));
        this[Ei](e, s, 'link', t);
      }
      [Oh]() {
        this[di]++;
      }
      [pr]() {
        this[di]--, this[Po]();
      }
      [zo](e) {
        this[pr](), e.resume();
      }
      [qo](e, t) {
        return (
          e.type === 'File' && !this.unlink && t.isFile() && t.nlink <= 1 && !Xr
        );
      }
      [ko](e) {
        this[Oh]();
        let t = [e.path];
        e.linkpath && t.push(e.linkpath),
          this.reservations.reserve(t, (s) => this[gh](e, s));
      }
      [mi](e) {
        e.type === 'SymbolicLink'
          ? kE(this.dirCache)
          : e.type !== 'Directory' && PE(this.dirCache, e.absolute);
      }
      [gh](e, t) {
        this[mi](e);
        let s = (c) => {
            this[mi](e), t(c);
          },
          i = () => {
            this[lt](this.cwd, this.dmode, (c) => {
              if (c) {
                this[J](c, e), s();
                return;
              }
              (this[$r] = !0), n();
            });
          },
          n = () => {
            if (e.absolute !== this.cwd) {
              let c = me(We.dirname(e.absolute));
              if (c !== this.cwd)
                return this[lt](c, this.dmode, (a) => {
                  if (a) {
                    this[J](a, e), s();
                    return;
                  }
                  o();
                });
            }
            o();
          },
          o = () => {
            N.lstat(e.absolute, (c, a) => {
              if (a && (this.keep || (this.newer && a.mtime > e.mtime))) {
                this[zo](e), s();
                return;
              }
              if (c || this[qo](e, a)) return this[we](null, e, s);
              if (a.isDirectory()) {
                if (e.type === 'Directory') {
                  let l = !this.noChmod && e.mode && (a.mode & 4095) !== e.mode,
                    u = (h) => this[we](h, e, s);
                  return l ? N.chmod(e.absolute, e.mode, u) : u();
                }
                if (e.absolute !== this.cwd)
                  return N.rmdir(e.absolute, (l) => this[we](l, e, s));
              }
              if (e.absolute === this.cwd) return this[we](null, e, s);
              BE(e.absolute, (l) => this[we](l, e, s));
            });
          };
        this[$r] ? n() : i();
      }
      [we](e, t, s) {
        if (e) {
          this[J](e, t), s();
          return;
        }
        switch (t.type) {
          case 'File':
          case 'OldFile':
          case 'ContiguousFile':
            return this[Ho](t, s);
          case 'Link':
            return this[wh](t, s);
          case 'SymbolicLink':
            return this[vh](t, s);
          case 'Directory':
          case 'GNUDumpDir':
            return this[Go](t, s);
        }
      }
      [Ei](e, t, s, i) {
        N[s](t, e.absolute, (n) => {
          n ? this[J](n, e) : (this[pr](), e.resume()), i();
        });
      }
    },
    pi = (r) => {
      try {
        return [null, r()];
      } catch (e) {
        return [e, null];
      }
    },
    jo = class extends Kr {
      [we](e, t) {
        return super[we](e, t, () => {});
      }
      [ko](e) {
        if ((this[mi](e), !this[$r])) {
          let n = this[lt](this.cwd, this.dmode);
          if (n) return this[J](n, e);
          this[$r] = !0;
        }
        if (e.absolute !== this.cwd) {
          let n = me(We.dirname(e.absolute));
          if (n !== this.cwd) {
            let o = this[lt](n, this.dmode);
            if (o) return this[J](o, e);
          }
        }
        let [t, s] = pi(() => N.lstatSync(e.absolute));
        if (s && (this.keep || (this.newer && s.mtime > e.mtime)))
          return this[zo](e);
        if (t || this[qo](e, s)) return this[we](null, e);
        if (s.isDirectory()) {
          if (e.type === 'Directory') {
            let o = !this.noChmod && e.mode && (s.mode & 4095) !== e.mode,
              [c] = o
                ? pi(() => {
                    N.chmodSync(e.absolute, e.mode);
                  })
                : [];
            return this[we](c, e);
          }
          let [n] = pi(() => N.rmdirSync(e.absolute));
          this[we](n, e);
        }
        let [i] = e.absolute === this.cwd ? [] : pi(() => ME(e.absolute));
        this[we](i, e);
      }
      [Ho](e, t) {
        let s = e.mode & 4095 || this.fmode,
          i = (c) => {
            let a;
            try {
              N.closeSync(n);
            } catch (l) {
              a = l;
            }
            (c || a) && this[J](c || a, e), t();
          },
          n;
        try {
          n = N.openSync(e.absolute, Nh(e.size), s);
        } catch (c) {
          return i(c);
        }
        let o = (this.transform && this.transform(e)) || e;
        o !== e && (o.on('error', (c) => this[J](c, e)), e.pipe(o)),
          o.on('data', (c) => {
            try {
              N.writeSync(n, c, 0, c.length);
            } catch (a) {
              i(a);
            }
          }),
          o.on('end', (c) => {
            let a = null;
            if (e.mtime && !this.noMtime) {
              let l = e.atime || new Date(),
                u = e.mtime;
              try {
                N.futimesSync(n, l, u);
              } catch (h) {
                try {
                  N.utimesSync(e.absolute, l, u);
                } catch {
                  a = h;
                }
              }
            }
            if (this[zr](e)) {
              let l = this[jr](e),
                u = this[Vr](e);
              try {
                N.fchownSync(n, l, u);
              } catch (h) {
                try {
                  N.chownSync(e.absolute, l, u);
                } catch {
                  a = a || h;
                }
              }
            }
            i(a);
          });
      }
      [Go](e, t) {
        let s = e.mode & 4095 || this.dmode,
          i = this[lt](e.absolute, s);
        if (i) {
          this[J](i, e), t();
          return;
        }
        if (e.mtime && !this.noMtime)
          try {
            N.utimesSync(e.absolute, e.atime || new Date(), e.mtime);
          } catch {}
        if (this[zr](e))
          try {
            N.chownSync(e.absolute, this[jr](e), this[Vr](e));
          } catch {}
        t(), e.resume();
      }
      [lt](e, t) {
        try {
          return bh.sync(me(e), {
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
        } catch (s) {
          return s;
        }
      }
      [Ei](e, t, s, i) {
        try {
          N[s + 'Sync'](t, e.absolute), i(), e.resume();
        } catch (n) {
          return this[J](n, e);
        }
      }
    };
  Kr.Sync = jo;
  Lh.exports = Kr;
});
var Bh = E((eR, Fh) => {
  'use strict';
  var qE = $t(),
    yi = Vo(),
    Dh = require('fs'),
    Uh = ur(),
    Ah = require('path'),
    $o = er();
  Fh.exports = (r, e, t) => {
    typeof r == 'function'
      ? ((t = r), (e = null), (r = {}))
      : Array.isArray(r) && ((e = r), (r = {})),
      typeof e == 'function' && ((t = e), (e = null)),
      e ? (e = Array.from(e)) : (e = []);
    let s = qE(r);
    if (s.sync && typeof t == 'function')
      throw new TypeError('callback not supported for sync tar functions');
    if (!s.file && typeof t == 'function')
      throw new TypeError('callback only supported with file option');
    return (
      e.length && HE(s, e),
      s.file && s.sync ? GE(s) : s.file ? zE(s, t) : s.sync ? jE(s) : VE(s)
    );
  };
  var HE = (r, e) => {
      let t = new Map(e.map((n) => [$o(n), !0])),
        s = r.filter,
        i = (n, o) => {
          let c = o || Ah.parse(n).root || '.',
            a = n === c ? !1 : t.has(n) ? t.get(n) : i(Ah.dirname(n), c);
          return t.set(n, a), a;
        };
      r.filter = s ? (n, o) => s(n, o) && i($o(n)) : (n) => i($o(n));
    },
    GE = (r) => {
      let e = new yi.Sync(r),
        t = r.file,
        s = Dh.statSync(t),
        i = r.maxReadSize || 16 * 1024 * 1024;
      new Uh.ReadStreamSync(t, { readSize: i, size: s.size }).pipe(e);
    },
    zE = (r, e) => {
      let t = new yi(r),
        s = r.maxReadSize || 16 * 1024 * 1024,
        i = r.file,
        n = new Promise((o, c) => {
          t.on('error', c),
            t.on('close', o),
            Dh.stat(i, (a, l) => {
              if (a) c(a);
              else {
                let u = new Uh.ReadStream(i, { readSize: s, size: l.size });
                u.on('error', c), u.pipe(t);
              }
            });
        });
      return e ? n.then(e, e) : n;
    },
    jE = (r) => new yi.Sync(r),
    VE = (r) => new yi(r);
});
var Mh = E((G) => {
  'use strict';
  G.c = G.create = _l();
  G.r = G.replace = xo();
  G.t = G.list = ni();
  G.u = G.update = xl();
  G.x = G.extract = Bh();
  G.Pack = js();
  G.Unpack = Vo();
  G.Parse = ii();
  G.ReadEntry = xs();
  G.WriteEntry = eo();
  G.Header = Qt();
  G.Pax = Is();
  G.types = Bn();
});
var Hh = {};
Pe(Hh, { FileStorage: () => Xo });
var kh,
  Q,
  Dt,
  qh,
  Ph,
  _i,
  At,
  Xo,
  Gh = le(() => {
    'use strict';
    (kh = require('crypto')),
      (Q = require('fs')),
      (Dt = lf(require('path'))),
      (qh = require('path'));
    Lr();
    dt();
    _s();
    bi();
    (Ph = an()),
      (_i = Mh()),
      ({ output: At } = Ze()),
      (Xo = class {
        constructor(e, t, s, i) {
          this.encryption = e;
          this.errorReporter = t;
          this.context = i;
          this.storedHashes = [];
          this.axiosConfigBuilder = (e) => e;
          if (s.customProxyConfigPath) {
            let { fileServerProxyConfig: n } = require((0, qh.join)(
              process.cwd(),
              s.customProxyConfigPath
            ));
            this.axiosConfigBuilder = n ?? this.axiosConfigBuilder;
          }
        }
        async retrieve(e, t, s) {
          process.env.NX_CLOUD_DEBUG_URLS == 'true' &&
            At.note({
              title: `Nx Cloud: Downloading ${e}`,
              bodyLines: [`RETRIEVAL URL: ${t}`],
            });
          let i = this.createFileName(e, s),
            n = this.createCommitFilePath(e, s);
          try {
            await this.downloadFile(t, i, n),
              this.createCommitFile(n),
              P && At.note({ title: `Nx Cloud: Downloaded ${e}` });
          } catch (o) {
            let c = o.message || o.toString(),
              a = `Failed to download or untar the cached artifacts for ${e}. Context: ${this.context}. Error: ${c}.`;
            throw (
              ((this.context === 'dte-agent' || this.context === 'dte-main') &&
                (At.note({
                  title: `An error occurred while trying to download artifacts in the DTE context. Hash: ${e}.`,
                  bodyLines: [
                    '- Please update the nx-cloud package to the latest version.',
                    '- Please update the nx package to 15.8.9 or higher. You can do it without updating the plugins.',
                    '- If you are not able to update the nx package, and you are passing --configuration to a run-many or an affected command, define that configuration for all the projects.',
                  ],
                }),
                process.env.NX_CLOUD_DEBUG_URLS == 'true' &&
                  At.note({ title: `URL: ${e}` })),
              await this.errorReporter.reportError(a),
              new Error(a))
            );
          }
        }
        async store(e, t, s) {
          process.env.NX_CLOUD_DEBUG_URLS == 'true' &&
            At.note({
              title: `Nx Cloud: Storing ${e}`,
              bodyLines: [`STORAGE URL: ${t}`],
            });
          let i;
          if (process.env.NRWL_INTERNAL_TAR_DEBUG) {
            let o = 1,
              c = !1,
              a = [];
            for (; o <= 3 && !c; ) {
              i = await this.createFile(e, s);
              let l = `/tmp/${e}/attempt${o}`;
              (0, Q.mkdirSync)(l, { recursive: !0 });
              try {
                let u = (0, Q.createReadStream)(i).pipe(_i.x({ cwd: l }));
                await this.convertStreamIntoPromise(u), (c = !0);
              } catch (u) {
                console.error(u), await kt(5e3);
              }
              a.push({ attempt: o, success: c }), o++;
            }
            if (a.some((l) => !l.success)) {
              console.error(JSON.stringify(a, null, 2));
              let l = a
                .filter((u) => !u.success)
                .map((u) => u.attempt)
                .join(', ');
              throw new Error(
                `Untar failed for hash ${e} in attempts ${l} out of ${a.length}`
              );
            }
          } else i = await this.createFile(e, s);
          await this.uploadFile(t, i),
            this.storedHashes.push(e),
            P && At.note({ title: `Nx Cloud: Stored ${e}` });
        }
        createFileName(e, t) {
          return Dt.join(t, `${e}.tar.gz`);
        }
        async downloadFile(e, t, s) {
          var o;
          let i = _t('retrieveFile'),
            n;
          try {
            let c = new URL(e),
              a = c.origin + c.pathname,
              l = {};
            for (let [u, h] of c.searchParams.entries()) l[u] = h;
            (n = await qe(() =>
              Ph(
                a,
                this.axiosConfigBuilder({
                  method: 'GET',
                  responseType: 'stream',
                  maxContentLength: Se ? Mt : Pt,
                  maxBodyLength: Se ? Mt : Pt,
                  timeout: Se ? Bt : 6e4,
                  params: l,
                })
              )
            )),
              i.recordMetric({
                ...Te(n),
                payloadSize: n.data.headers['content-length'],
              });
          } catch (c) {
            throw (
              (i.recordMetric(
                (o = c == null ? void 0 : c.axiosException) != null &&
                  o.response
                  ? Te(c.axiosException.response)
                  : Rt
              ),
              c)
            );
          }
          if ((0, Q.existsSync)(t)) {
            let c = 0;
            for (; c++ < 50; ) {
              if ((0, Q.existsSync)(s)) return;
              await kt(500);
            }
          }
          if (this.encryption.hasEncryption()) {
            await new Promise((a) => {
              n.data
                .pipe((0, Q.createWriteStream)(t))
                .on('close', () => a(null));
            }),
              this.encryption.decryptFile(t);
            let c = (0, Q.createReadStream)(t).pipe(
              _i.x({ cwd: Dt.dirname(t) })
            );
            return this.convertStreamIntoPromise(c);
          } else {
            let c = n.data.pipe(_i.x({ cwd: Dt.dirname(t) }));
            return this.convertStreamIntoPromise(c);
          }
        }
        convertStreamIntoPromise(e) {
          return new Promise((t, s) => {
            e.on('error', (i) => {
              i.tarCode === 'TAR_ABORT' &&
              i.message.indexOf('incorrect header check') > -1
                ? (console.warn(
                    'FileStorage: Decompression OK, Trailing garbage ignored.'
                  ),
                  t(null))
                : s(i);
            }),
              e.on('close', () => t(null));
          });
        }
        createCommitFile(e) {
          (0, Q.writeFileSync)(e, 'true');
        }
        createCommitFilePath(e, t) {
          return Dt.join(t, `${e}.commit`);
        }
        async createFile(e, t) {
          let s = this.createFileName(e, t);
          try {
            (0, Q.unlinkSync)(Dt.join(t, e, 'source'));
          } catch {}
          return (
            await _i.c({ gzip: !0, file: s, cwd: t }, [e]),
            this.encryption.hasEncryption() && this.encryption.encryptFile(s),
            s
          );
        }
        async uploadFile(e, t) {
          var c;
          process.env.NX_CLOUD_ECONNABORTED_LOGGING == 'true' &&
            At.note({ title: `Attempting to upload file with path: ${t}` });
          let s = _t('storeFile'),
            i = (0, Q.readFileSync)(t),
            n = this.generateMD5(i),
            o = this.getFileUploadHeaders(e, n);
          try {
            let a = await qe(() =>
              Ph(
                e,
                this.axiosConfigBuilder({
                  method: 'PUT',
                  data: i,
                  headers: o,
                  maxContentLength: Se ? Mt : Pt,
                  maxBodyLength: Se ? Mt : Pt,
                  timeout: Se ? Bt : 12e4,
                })
              )
            );
            s.recordMetric({
              ...Te(a),
              payloadSize: a.config.headers['Content-Length'],
            });
          } catch (a) {
            if (a.message && a.message.includes('RetentionPolicyNotMet'))
              return;
            throw (
              (s.recordMetric(
                (c = a == null ? void 0 : a.axiosException) != null &&
                  c.response
                  ? Te(a.axiosException.response)
                  : Rt
              ),
              a)
            );
          }
        }
        generateMD5(e) {
          let t = (0, kh.createHash)('md5');
          return t.update(e), t.digest('base64');
        }
        getFileUploadHeaders(e, t) {
          let s = e.includes('/file/'),
            i = {
              'Content-Type': 'application/octet-stream',
              'x-ms-blob-type': 'BlockBlob',
            };
          return s && (i['Content-MD5'] = t), i;
        }
      });
  });
function Wo() {
  for (let r of Object.values($E))
    if (r.detectorFn(process.env)) {
      let e = r.contextRetrieverFn(process.env);
      return (
        P && console.log(JSON.stringify(e, null, 2)),
        { ...e, inferredFromTaskRunner: !0 }
      );
    }
  return P && console.log('[Nx Cloud] Did not identify a VCS platform.'), null;
}
function XE(r) {
  return r.CIRCLECI === 'true';
}
function KE(r) {
  P && console.log('[Nx Cloud] Detected Env: CircleCI');
  let e = (s) => {
      if (s.CIRCLE_PR_NUMBER !== void 0) return s.CIRCLE_PR_NUMBER;
      if (s.CIRCLE_PULL_REQUEST !== void 0) {
        let i = s.CIRCLE_PULL_REQUEST.split('/');
        return i[i.length - 1];
      }
      return s.CIRCLE_BRANCH !== void 0 ? s.CIRCLE_BRANCH : 'unknown';
    },
    t = (s) =>
      s.CIRCLE_USERNAME !== void 0
        ? s.CIRCLE_USERNAME
        : s.CIRCLE_PR_USERNAME
        ? s.CIRCLE_PR_USERNAME
        : null;
  return {
    branch: e(r),
    ref: r.CIRCLE_BRANCH ?? null,
    title: Yo(),
    headSha: r.CIRCLE_SHA1 ?? 'unknown',
    baseSha: null,
    commitLink: r.CIRCLE_PULL_REQUEST ?? null,
    author: t(r),
    authorUrl: null,
    authorAvatarUrl: null,
  };
}
function WE(r) {
  return r.TRAVIS === 'true';
}
function YE(r) {
  return (
    P && console.log('[Nx Cloud] Detected Env: TravisCI'),
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
      author: zh(),
      authorUrl: null,
      authorAvatarUrl: null,
    }
  );
}
function ZE(r) {
  return r.GITHUB_ACTIONS === 'true';
}
function JE(r) {
  P && console.log('[Nx Cloud] Detected Env: GitHub Actions');
  let e = (i) => {
      if (i.GITHUB_REF) {
        let n = i.GITHUB_REF.match(/refs\/pull\/(\d+)\/merge/);
        if (n) return n[1];
      }
      return i.GITHUB_HEAD_REF
        ? i.GITHUB_HEAD_REF
        : i.GITHUB_REF_NAME
        ? i.GITHUB_REF_NAME
        : 'unknown';
    },
    t = (i) => {
      let n = `${i.GITHUB_SERVER_URL}/${i.GITHUB_REPOSITORY}`;
      return i.GITHUB_EVENT_NAME === 'pull_request'
        ? `${n}/pull/${e(i)}`
        : `${n}/commit/${i.GITHUB_SHA}`;
    },
    s = (i) =>
      i.GITHUB_HEAD_REF
        ? i.GITHUB_HEAD_REF
        : i.GITHUB_REF
        ? i.GITHUB_REF
        : null;
  return {
    branch: e(r),
    ref: s(r),
    title: Yo(),
    headSha: r.GITHUB_SHA ?? 'unknown',
    baseSha: null,
    commitLink: t(r),
    author: r.GITHUB_ACTOR ?? null,
    authorUrl: `https://github.com/${r.GITHUB_ACTOR}`,
    authorAvatarUrl: `https://avatars.githubusercontent.com/u/${r.GITHUB_ACTOR_ID}`,
  };
}
function QE(r) {
  return r.BITBUCKET_BUILD_NUMBER != null;
}
function ey(r) {
  return (
    P && console.log('[Nx Cloud] Detected Env: BitBucket Pipelines'),
    {
      branch: r.BITBUCKET_PR_ID ?? r.BITBUCKET_BRANCH ?? 'unknown',
      ref: null,
      title: Yo(),
      headSha: r.BITBUCKET_COMMIT ?? 'unknown',
      baseSha: null,
      commitLink: null,
      author: zh(),
      authorUrl: null,
      authorAvatarUrl: null,
    }
  );
}
function ty(r) {
  return r.BUILD_BUILDID !== void 0 && r.AGENT_NAME !== void 0;
}
function ry(r) {
  return (
    P && console.log('[Nx Cloud] Detected Env: Azure DevOps'),
    {
      branch:
        r.SYSTEM_PULLREQUEST_PULLREQUESTNUMBER ??
        r.BUILD_SOURCEBRANCHNAME ??
        'unknown',
      ref: null,
      title: r.BUILD_SOURCEVERSIONMESSAGE ?? null,
      headSha: Sr() ?? 'unknown',
      baseSha: null,
      commitLink: null,
      author: r.BUILD_REQUESTEDFOR ?? null,
      authorUrl: null,
      authorAvatarUrl: null,
    }
  );
}
function sy(r) {
  return r.GITLAB_CI === 'true';
}
function iy(r) {
  return (
    P && console.log('[Nx Cloud] Detected Env: GitLab Pipelines'),
    {
      branch: ((t) =>
        t.CI_MERGE_REQUEST_IID
          ? t.CI_MERGE_REQUEST_IID
          : t.CI_COMMIT_BRANCH
          ? t.CI_COMMIT_BRANCH
          : 'unknown')(r),
      ref: r.CI_COMMIT_REF_NAME ?? null,
      title: r.CI_COMMIT_MESSAGE ?? null,
      headSha: Sr() ?? 'unknown',
      baseSha: null,
      commitLink: null,
      author: r.GITLAB_USER_NAME ?? null,
      authorUrl: null,
      authorAvatarUrl: null,
    }
  );
}
function Yo() {
  try {
    return (0, Ko.execSync)('git log -1 --pretty=%B', {
      encoding: 'utf-8',
    }).trim();
  } catch {
    return null;
  }
}
function zh() {
  try {
    return (0, Ko.execSync)('git log -1 --pretty=%aN', {
      encoding: 'utf-8',
    }).trim();
  } catch {
    return null;
  }
}
var Ko,
  $E,
  jh = le(() => {
    'use strict';
    Ko = require('child_process');
    dt();
    $E = {
      CIRCLE_CI: { detectorFn: XE, contextRetrieverFn: KE },
      TRAVIS_CI: { detectorFn: WE, contextRetrieverFn: YE },
      GITHUB_ACTIONS: { detectorFn: ZE, contextRetrieverFn: JE },
      BITBUCKET_PIPELINES: { detectorFn: QE, contextRetrieverFn: ey },
      AZURE_DEVOPS: { detectorFn: ty, contextRetrieverFn: ry },
      GITLAB_PIPELINES: { detectorFn: sy, contextRetrieverFn: iy },
    };
  });
var Kh = {};
Pe(Kh, { CloudRunApi: () => Zo });
var Vh,
  $h,
  Xh,
  Ri,
  Zo,
  Wh = le(() => {
    'use strict';
    (Vh = require('fs')), ($h = require('util')), (Xh = require('zlib'));
    Lr();
    dt();
    jh();
    _s();
    ({ output: Ri } = Ze()),
      (Zo = class {
        constructor(e, t, s, i) {
          this.messages = e;
          this.runContext = t;
          this.machineInfo = i;
          this.apiAxiosInstance = Vt(s);
        }
        async startRun(e, t) {
          var i;
          if (this.messages.apiError) return {};
          let s = _t('startRun');
          try {
            let n = {
              meta: { nxCloudVersion: this.nxCloudVersion() },
              branch: Or(),
              runGroup: xi(),
              ciExecutionId: Ti(),
              ciExecutionEnv: vr(),
              distributedExecutionId: e,
              hashes: t,
              machineInfo: this.machineInfo,
              vcsContext: Wo(),
            };
            P &&
              Ri.note({
                title: 'RunStart',
                bodyLines: [
                  `
` + JSON.stringify(n, null, 2),
                ],
              });
            let o = await un('RunStart duration', () =>
              qe(() => this.apiAxiosInstance.post('/nx-cloud/runs/start', n))
            );
            return (
              s.recordMetric(Te(o)),
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
          } catch (n) {
            return (
              s.recordMetric(
                (i = n == null ? void 0 : n.axiosException) != null &&
                  i.response
                  ? Te(n.axiosException.response)
                  : Rt
              ),
              (this.messages.apiError = this.messages.extractErrorMessage(
                n,
                'api'
              )),
              {}
            );
          }
        }
        createReqBody(e, t, s, i) {
          let n = {
            meta: { nxCloudVersion: this.nxCloudVersion() },
            tasks: t,
            run: e,
            linkId: i,
            ...s,
            machineInfo: this.machineInfo,
            vcsContext: Wo(),
          };
          return JSON.stringify(n);
        }
        async endRun(e, t, s, i) {
          var l;
          if (this.messages.apiError) return !1;
          (e.runGroup = null), (e.branch = null);
          let n = this.createReqBody(e, t, s, i);
          n.length > 20 * 1e3 * 1e3 &&
            (n = this.createReqBody(
              e,
              t.map((u) => ({ ...u, hashDetails: void 0 })),
              s,
              i
            ));
          let o = Buffer.from(n),
            c = await (0, $h.promisify)(Xh.gzip)(o),
            a = _t('endRun');
          try {
            if (P) {
              let h = t.map((f) => ({
                ...f,
                terminalOutput: f.terminalOutput
                  ? `${f.terminalOutput.slice(0, 20)}...`
                  : void 0,
              }));
              Ri.note({
                title: 'RunEnd. Completed tasks',
                bodyLines: [
                  `
` + JSON.stringify(h, null, 2),
                ],
              });
            }
            let u = await un('RunEnd duration', () =>
              qe(() =>
                this.apiAxiosInstance.post('/nx-cloud/runs/end', c, {
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
                (a.recordMetric(Te(u)),
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
                P &&
                  Ri.note({
                    title: 'Invalid end run response',
                    bodyLines: [JSON.stringify(u.data, null, 2)],
                  });
            } else
              Ri.error({
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
            a.recordMetric(
              (l = u == null ? void 0 : u.axiosException) != null && l.response
                ? Te(u.axiosException.response)
                : Rt
            );
            let h = u.axiosException ?? u;
            return (
              (this.messages.apiError = this.messages.extractErrorMessage(
                h,
                'api'
              )),
              !1
            );
          }
        }
        nxCloudVersion() {
          try {
            let e = JSON.parse((0, Vh.readFileSync)('package.json').toString());
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
var Yh = {};
Pe(Yh, { ErrorReporterApi: () => Jo });
var ny,
  Jo,
  Zh = le(() => {
    'use strict';
    Lr();
    ({ output: ny } = Ze()),
      (Jo = class {
        constructor(e) {
          this.apiAxiosInstance = Vt(e);
        }
        async reportError(e) {
          try {
            await qe(() =>
              this.apiAxiosInstance.post('/nx-cloud/report-client-error', {
                message: e,
              })
            );
          } catch (t) {
            ny.warn({
              title: `Unable to record the following error: '${e}'`,
              bodyLines: [t.message],
            });
          }
        }
      });
  });
var Jh = {};
Pe(Jh, { E2EEncryption: () => Qo });
var Er,
  mr,
  Qo,
  Qh = le(() => {
    'use strict';
    (Er = require('crypto')),
      (mr = require('fs')),
      (Qo = class {
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
          let t = (0, Er.randomBytes)(16),
            s = (0, Er.createCipheriv)('aes-256-cbc', this.encryptionKey, t),
            i = (0, mr.readFileSync)(e),
            n = s.update(i),
            o = Buffer.concat([t, n, s.final()]);
          (0, mr.writeFileSync)(e, o);
        }
        decryptFile(e) {
          let t = (0, mr.readFileSync)(e);
          try {
            let s = (0, Er.createDecipheriv)(
                'aes-256-cbc',
                this.encryptionKey,
                t.slice(0, 16)
              ),
              i = t.slice(16),
              n = s.update(i),
              o = Buffer.concat([n, s.final()]);
            (0, mr.writeFileSync)(e, o);
          } catch {
            throw new Error(
              'Could not decrypt the artifact. Please check your encryption key.'
            );
          }
        }
      });
  });
var ef = {};
Pe(ef, { MessageReporter: () => ea });
var oy,
  ea,
  tf = le(() => {
    'use strict';
    hn();
    ({ output: oy } = Ze()),
      (ea = class {
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
              oy.warn({ title: 'Nx Cloud Problems', bodyLines: e });
          }
          this.message && ys(this.message);
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
            let s = '';
            e.response && e.response.data && e.response.data.message
              ? (s = `. ${e.response.data.message}`)
              : e.response && e.response.data && (s = `. ${e.response.data}`);
            let i = e.code ? ` (code: ${e.code})` : '';
            return `${e.message}${s}${i}`;
          }
        }
      });
  });
var ay = {};
Pe(ay, { default: () => rf });
module.exports = ke(ay);
async function rf(r, e) {
  if (r.lightRunnerResolutionPaths) {
    let { configureLightClientRequire: g } = (Rr(), ke(ra));
    g(r.lightRunnerResolutionPaths);
  }
  let { cacheDirectory: t } = sa(),
    { FileStorage: s } = (Gh(), ke(Hh)),
    { CloudRunApi: i } = (Wh(), ke(Kh)),
    { ErrorReporterApi: n } = (Zh(), ke(Yh)),
    { E2EEncryption: o } = (Qh(), ke(Jh)),
    { getMachineInfo: c } = (dt(), ke(ma)),
    { MessageReporter: a } = (tf(), ke(ef)),
    { submitRunMetrics: l } = (_s(), ke(Yc)),
    u = new o(r.encryptionKey),
    h = new n(r.runnerOptions),
    f = new s(u, h, r.runnerOptions, 'daemon'),
    d = new a(r.runnerOptions),
    p = {},
    y = c(),
    _ = new i(d, p, r.runnerOptions, y);
  return (
    setTimeout(async () => {
      e.log('Uploading file artifacts');
      try {
        await Promise.all(
          r.delayedStoreRequests.map((g) => f.store(g.hash, g.url, t))
        ),
          e.log('Done uploading file artifacts');
      } catch (g) {
        e.log('Error when uploading file artifacts'), console.log(g);
        return;
      }
      for (let g of f.storedHashes) {
        let O = r.runEnd.taskExecutions.find((S) => S.hash === g);
        if (!O) throw new Error(`Task with hash ${g} isn't recorded`);
        O.uploadedToStorage = !0;
      }
      e.log('Sending EndRun request');
      try {
        if (
          !(await _.endRun(
            r.runEnd.runData,
            r.runEnd.taskExecutions,
            r.ciExecutionContext,
            r.runEnd.linkId
          ))
        )
          throw new Error(d.apiError);
        e.log('Done sending EndRun request');
      } catch (g) {
        e.log('Error when sending EndRun'), console.log(g);
      }
      await l(r.runOptions);
    }, 0),
    '{}'
  );
}
