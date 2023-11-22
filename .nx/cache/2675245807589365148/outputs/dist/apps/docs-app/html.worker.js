(() => {
  'use strict';
  function Gn(e, t, n, r, i, a, o) {
    try {
      var c = e[a](o),
        l = c.value;
    } catch (u) {
      return void n(u);
    }
    c.done ? t(l) : Promise.resolve(l).then(r, i);
  }
  function Se(e) {
    return function () {
      var t = this,
        n = arguments;
      return new Promise(function (r, i) {
        var a = e.apply(t, n);
        function o(l) {
          Gn(a, r, i, o, c, 'next', l);
        }
        function c(l) {
          Gn(a, r, i, o, c, 'throw', l);
        }
        o(void 0);
      });
    };
  }
  const jn = new (class sa {
    constructor() {
      (this.listeners = []),
        (this.unexpectedErrorHandler = function (t) {
          setTimeout(() => {
            throw t.stack
              ? Ve.isErrorNoTelemetry(t)
                ? new Ve(t.message + '\n\n' + t.stack)
                : new Error(t.message + '\n\n' + t.stack)
              : t;
          }, 0);
        });
    }
    emit(t) {
      this.listeners.forEach((n) => {
        n(t);
      });
    }
    onUnexpectedError(t) {
      this.unexpectedErrorHandler(t), this.emit(t);
    }
    onUnexpectedExternalError(t) {
      this.unexpectedErrorHandler(t);
    }
  })();
  function $n(e) {
    if (e instanceof Error) {
      const { name: t, message: n } = e;
      return {
        $isError: !0,
        name: t,
        message: n,
        stack: e.stacktrace || e.stack,
        noTelemetry: Ve.isErrorNoTelemetry(e),
      };
    }
    return e;
  }
  const vt = 'Canceled';
  function Qn(e) {
    return (
      e instanceof la ||
      (e instanceof Error && e.name === vt && e.message === vt)
    );
  }
  class la extends Error {
    constructor() {
      super(vt), (this.name = this.message);
    }
  }
  class Ve extends Error {
    constructor(t) {
      super(t), (this.name = 'ErrorNoTelemetry');
    }
    static fromError(t) {
      if (t instanceof Ve) return t;
      const n = new Ve();
      return (n.message = t.message), (n.stack = t.stack), n;
    }
    static isErrorNoTelemetry(t) {
      return 'ErrorNoTelemetry' === t.name;
    }
  }
  function ua(e) {
    const t = this;
    let r,
      n = !1;
    return function () {
      return n || ((n = !0), (r = e.apply(t, arguments))), r;
    };
  }
  var yt;
  !(function (e) {
    e.is = function t(D) {
      return (
        D && 'object' == typeof D && 'function' == typeof D[Symbol.iterator]
      );
    };
    const n = Object.freeze([]);
    function k(D, H = Number.POSITIVE_INFINITY) {
      const B = [];
      if (0 === H) return [B, D];
      const p = D[Symbol.iterator]();
      for (let m = 0; m < H; m++) {
        const w = p.next();
        if (w.done) return [B, e.empty()];
        B.push(w.value);
      }
      return [B, { [Symbol.iterator]: () => p }];
    }
    (e.empty = function r() {
      return n;
    }),
      (e.single = function* i(D) {
        yield D;
      }),
      (e.from = function a(D) {
        return D || n;
      }),
      (e.isEmpty = function o(D) {
        return !D || !0 === D[Symbol.iterator]().next().done;
      }),
      (e.first = function c(D) {
        return D[Symbol.iterator]().next().value;
      }),
      (e.some = function l(D, H) {
        for (const B of D) if (H(B)) return !0;
        return !1;
      }),
      (e.find = function u(D, H) {
        for (const B of D) if (H(B)) return B;
      }),
      (e.filter = function* h(D, H) {
        for (const B of D) H(B) && (yield B);
      }),
      (e.map = function* d(D, H) {
        let B = 0;
        for (const p of D) yield H(p, B++);
      }),
      (e.concat = function* f(...D) {
        for (const H of D) for (const B of H) yield B;
      }),
      (e.concatNested = function* g(D) {
        for (const H of D) for (const B of H) yield B;
      }),
      (e.reduce = function _(D, H, B) {
        let p = B;
        for (const m of D) p = H(p, m);
        return p;
      }),
      (e.forEach = function b(D, H) {
        let B = 0;
        for (const p of D) H(p, B++);
      }),
      (e.slice = function* y(D, H, B = D.length) {
        for (
          H < 0 && (H += D.length),
            B < 0 ? (B += D.length) : B > D.length && (B = D.length);
          H < B;
          H++
        )
          yield D[H];
      }),
      (e.consume = k),
      (e.collect = function v(D) {
        return k(D)[0];
      }),
      (e.equals = function L(D, H, B = (p, m) => p === m) {
        const p = D[Symbol.iterator](),
          m = H[Symbol.iterator]();
        for (;;) {
          const w = p.next(),
            E = m.next();
          if (w.done !== E.done) return !1;
          if (w.done) return !0;
          if (!B(w.value, E.value)) return !1;
        }
      });
  })(yt || (yt = {}));
  let se = null;
  function Ke(e) {
    return se?.trackDisposable(e), e;
  }
  function et(e) {
    se?.markAsDisposed(e);
  }
  function Tt(e, t) {
    se?.setParent(e, t);
  }
  class fa extends Error {
    constructor(t) {
      super(
        `Encountered errors while disposing of store. Errors: [${t.join(', ')}]`
      ),
        (this.errors = t);
    }
  }
  function Yn(e) {
    if (yt.is(e)) {
      const t = [];
      for (const n of e)
        if (n)
          try {
            n.dispose();
          } catch (r) {
            t.push(r);
          }
      if (1 === t.length) throw t[0];
      if (t.length > 1) throw new fa(t);
      return Array.isArray(e) ? [] : e;
    }
    if (e) return e.dispose(), e;
  }
  function kt(e) {
    const t = Ke({
      dispose: ua(() => {
        et(t), e();
      }),
    });
    return t;
  }
  let Ct = (() => {
    class e {
      constructor() {
        (this._toDispose = new Set()), (this._isDisposed = !1), Ke(this);
      }
      dispose() {
        this._isDisposed || (et(this), (this._isDisposed = !0), this.clear());
      }
      get isDisposed() {
        return this._isDisposed;
      }
      clear() {
        try {
          Yn(this._toDispose.values());
        } finally {
          this._toDispose.clear();
        }
      }
      add(n) {
        if (!n) return n;
        if (n === this)
          throw new Error('Cannot register a disposable on itself!');
        return (
          Tt(n, this),
          this._isDisposed
            ? e.DISABLE_DISPOSED_WARNING ||
              console.warn(
                new Error(
                  'Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!'
                ).stack
              )
            : this._toDispose.add(n),
          n
        );
      }
    }
    return (e.DISABLE_DISPOSED_WARNING = !1), e;
  })();
  class tt {
    constructor() {
      (this._store = new Ct()), Ke(this), Tt(this._store, this);
    }
    dispose() {
      et(this), this._store.dispose();
    }
    _register(t) {
      if (t === this)
        throw new Error('Cannot register a disposable on itself!');
      return this._store.add(t);
    }
  }
  tt.None = Object.freeze({ dispose() {} });
  class pa {
    constructor() {
      (this.dispose = () => {}),
        (this.unset = () => {}),
        (this.isset = () => !1),
        Ke(this);
    }
    set(t) {
      let n = t;
      return (
        (this.unset = () => (n = void 0)),
        (this.isset = () => void 0 !== n),
        (this.dispose = () => {
          n && (n(), (n = void 0), et(this));
        }),
        this
      );
    }
  }
  class Y {
    constructor(t) {
      (this.element = t), (this.next = Y.Undefined), (this.prev = Y.Undefined);
    }
  }
  Y.Undefined = new Y(void 0);
  class At {
    constructor() {
      (this._first = Y.Undefined), (this._last = Y.Undefined), (this._size = 0);
    }
    get size() {
      return this._size;
    }
    isEmpty() {
      return this._first === Y.Undefined;
    }
    clear() {
      let t = this._first;
      for (; t !== Y.Undefined; ) {
        const n = t.next;
        (t.prev = Y.Undefined), (t.next = Y.Undefined), (t = n);
      }
      (this._first = Y.Undefined), (this._last = Y.Undefined), (this._size = 0);
    }
    unshift(t) {
      return this._insert(t, !1);
    }
    push(t) {
      return this._insert(t, !0);
    }
    _insert(t, n) {
      const r = new Y(t);
      if (this._first === Y.Undefined) (this._first = r), (this._last = r);
      else if (n) {
        const a = this._last;
        (this._last = r), (r.prev = a), (a.next = r);
      } else {
        const a = this._first;
        (this._first = r), (r.next = a), (a.prev = r);
      }
      this._size += 1;
      let i = !1;
      return () => {
        i || ((i = !0), this._remove(r));
      };
    }
    shift() {
      if (this._first !== Y.Undefined) {
        const t = this._first.element;
        return this._remove(this._first), t;
      }
    }
    pop() {
      if (this._last !== Y.Undefined) {
        const t = this._last.element;
        return this._remove(this._last), t;
      }
    }
    _remove(t) {
      if (t.prev !== Y.Undefined && t.next !== Y.Undefined) {
        const n = t.prev;
        (n.next = t.next), (t.next.prev = n);
      } else
        t.prev === Y.Undefined && t.next === Y.Undefined
          ? ((this._first = Y.Undefined), (this._last = Y.Undefined))
          : t.next === Y.Undefined
          ? ((this._last = this._last.prev), (this._last.next = Y.Undefined))
          : t.prev === Y.Undefined &&
            ((this._first = this._first.next),
            (this._first.prev = Y.Undefined));
      this._size -= 1;
    }
    *[Symbol.iterator]() {
      let t = this._first;
      for (; t !== Y.Undefined; ) yield t.element, (t = t.next);
    }
  }
  let Zn =
    typeof document < 'u' &&
    document.location &&
    document.location.hash.indexOf('pseudo=true') >= 0;
  var en;
  let Mt,
    Le,
    xt = !1,
    Lt = !1,
    Et = !1,
    wa = !1,
    _a = !1,
    nr = !1,
    va = !1,
    Ta = !1,
    tn = null,
    ka = null;
  const re =
    'object' == typeof self ? self : 'object' == typeof global ? global : {};
  let ie;
  typeof re.vscode < 'u' && typeof re.vscode.process < 'u'
    ? (ie = re.vscode.process)
    : typeof process < 'u' && (ie = process);
  const rr =
    'string' ==
    typeof (null === (en = ie?.versions) || void 0 === en
      ? void 0
      : en.electron);
  if ('object' != typeof navigator || (rr && 'renderer' === ie?.type))
    if ('object' == typeof ie) {
      (xt = 'win32' === ie.platform),
        (Lt = 'darwin' === ie.platform),
        (Et = 'linux' === ie.platform),
        (wa = Et && !!ie.env.SNAP && !!ie.env.SNAP_REVISION),
        (va = rr),
        (Ta = !!ie.env.CI || !!ie.env.BUILD_ARTIFACTSTAGINGDIRECTORY),
        (Mt = 'en'),
        (tn = 'en');
      const e = ie.env.VSCODE_NLS_CONFIG;
      if (e)
        try {
          const t = JSON.parse(e);
          (Mt = t.locale),
            (tn = t.availableLanguages['*'] || 'en'),
            (ka = t._translationsConfigFile);
        } catch {}
      _a = !0;
    } else console.error('Unable to resolve platform.');
  else
    (Le = navigator.userAgent),
      (xt = Le.indexOf('Windows') >= 0),
      (Lt = Le.indexOf('Macintosh') >= 0),
      (Le.indexOf('Macintosh') >= 0 ||
        Le.indexOf('iPad') >= 0 ||
        Le.indexOf('iPhone') >= 0) &&
        !!navigator.maxTouchPoints &&
        navigator,
      (Et = Le.indexOf('Linux') >= 0),
      !0,
      (Mt =
        void (function tr(e, t, ...n) {
          return (function Kn(e, t) {
            let n;
            return (
              (n =
                0 === t.length
                  ? e
                  : e.replace(/\{(\d+)\}/g, (r, i) => {
                      const o = t[i[0]];
                      let c = r;
                      return (
                        'string' == typeof o
                          ? (c = o)
                          : ('number' == typeof o ||
                              'boolean' == typeof o ||
                              null == o) &&
                            (c = String(o)),
                        c
                      );
                    })),
              Zn && (n = '\uff3b' + n.replace(/[aouei]/g, '$&$&') + '\uff3d'),
              n
            );
          })(t, n);
        })(0, '_') || 'en'),
      (tn = Mt);
  let nn = 0;
  Lt ? (nn = 1) : xt ? (nn = 3) : Et && (nn = 2);
  const nt = xt,
    Aa = Lt,
    ye = Le,
    Sa = 'function' == typeof re.postMessage && !re.importScripts;
  (() => {
    if (Sa) {
      const e = [];
      re.addEventListener('message', (n) => {
        if (n.data && n.data.vscodeScheduleAsyncWork)
          for (let r = 0, i = e.length; r < i; r++) {
            const a = e[r];
            if (a.id === n.data.vscodeScheduleAsyncWork)
              return e.splice(r, 1), void a.callback();
          }
      });
      let t = 0;
    }
  })();
  const xa = !!(ye && ye.indexOf('Chrome') >= 0),
    La =
      (ye && ye.indexOf('Firefox'),
      !xa && ye && ye.indexOf('Safari'),
      ye && ye.indexOf('Edg/'),
      ye && ye.indexOf('Android'),
      re.performance && 'function' == typeof re.performance.now);
  class Dt {
    constructor(t) {
      (this._highResolution = La && t),
        (this._startTime = this._now()),
        (this._stopTime = -1);
    }
    static create(t = !0) {
      return new Dt(t);
    }
    stop() {
      this._stopTime = this._now();
    }
    elapsed() {
      return -1 !== this._stopTime
        ? this._stopTime - this._startTime
        : this._now() - this._startTime;
    }
    _now() {
      return this._highResolution ? re.performance.now() : Date.now();
    }
  }
  var Rt;
  !(function (e) {
    function n(p) {
      return (m, w = null, E) => {
        let S,
          C = !1;
        return (
          (S = p(
            (z) => {
              if (!C) return S ? S.dispose() : (C = !0), m.call(w, z);
            },
            null,
            E
          )),
          C && S.dispose(),
          S
        );
      };
    }
    function r(p, m, w) {
      return u((E, C = null, S) => p((z) => E.call(C, m(z)), null, S), w);
    }
    function i(p, m, w) {
      return u(
        (E, C = null, S) =>
          p(
            (z) => {
              m(z), E.call(C, z);
            },
            null,
            S
          ),
        w
      );
    }
    function a(p, m, w) {
      return u((E, C = null, S) => p((z) => m(z) && E.call(C, z), null, S), w);
    }
    function l(p, m, w, E) {
      let C = w;
      return r(p, (S) => ((C = m(C, S)), C), E);
    }
    function u(p, m) {
      let w;
      const C = new we({
        onFirstListenerAdd() {
          w = p(C.fire, C);
        },
        onLastListenerRemove() {
          w?.dispose();
        },
      });
      return m?.add(C), C.event;
    }
    function h(p, m, w = 100, E = !1, C, S) {
      let z,
        F,
        P,
        q = 0;
      const T = new we({
        leakWarningThreshold: C,
        onFirstListenerAdd() {
          z = p((M) => {
            q++,
              (F = m(F, M)),
              E && !P && (T.fire(F), (F = void 0)),
              clearTimeout(P),
              (P = setTimeout(() => {
                const U = F;
                (F = void 0), (P = void 0), (!E || q > 1) && T.fire(U), (q = 0);
              }, w));
          });
        },
        onLastListenerRemove() {
          z.dispose();
        },
      });
      return S?.add(T), T.event;
    }
    function d(p, m = (E, C) => E === C, w) {
      let C,
        E = !0;
      return a(
        p,
        (S) => {
          const z = E || !m(S, C);
          return (E = !1), (C = S), z;
        },
        w
      );
    }
    (e.None = () => tt.None),
      (e.once = n),
      (e.map = r),
      (e.forEach = i),
      (e.filter = a),
      (e.signal = function o(p) {
        return p;
      }),
      (e.any = function c(...p) {
        return (m, w = null, E) =>
          (function ma(...e) {
            const t = kt(() => Yn(e));
            return (
              (function da(e, t) {
                if (se) for (const n of e) se.setParent(n, t);
              })(e, t),
              t
            );
          })(...p.map((C) => C((S) => m.call(w, S), null, E)));
      }),
      (e.reduce = l),
      (e.debounce = h),
      (e.latch = d),
      (e.split = function f(p, m, w) {
        return [e.filter(p, m, w), e.filter(p, (E) => !m(E), w)];
      }),
      (e.buffer = function g(p, m = !1, w = []) {
        let E = w.slice(),
          C = p((F) => {
            E ? E.push(F) : z.fire(F);
          });
        const S = () => {
            E?.forEach((F) => z.fire(F)), (E = null);
          },
          z = new we({
            onFirstListenerAdd() {
              C || (C = p((F) => z.fire(F)));
            },
            onFirstListenerDidAdd() {
              E && (m ? setTimeout(S) : S());
            },
            onLastListenerRemove() {
              C && C.dispose(), (C = null);
            },
          });
        return z.event;
      });
    class _ {
      constructor(m) {
        (this.event = m), (this.disposables = new Ct());
      }
      map(m) {
        return new _(r(this.event, m, this.disposables));
      }
      forEach(m) {
        return new _(i(this.event, m, this.disposables));
      }
      filter(m) {
        return new _(a(this.event, m, this.disposables));
      }
      reduce(m, w) {
        return new _(l(this.event, m, w, this.disposables));
      }
      latch() {
        return new _(d(this.event, void 0, this.disposables));
      }
      debounce(m, w = 100, E = !1, C) {
        return new _(h(this.event, m, w, E, C, this.disposables));
      }
      on(m, w, E) {
        return this.event(m, w, E);
      }
      once(m, w, E) {
        return n(this.event)(m, w, E);
      }
      dispose() {
        this.disposables.dispose();
      }
    }
    (e.chain = function b(p) {
      return new _(p);
    }),
      (e.fromNodeEventEmitter = function y(p, m, w = (E) => E) {
        const E = (...F) => z.fire(w(...F)),
          z = new we({
            onFirstListenerAdd: () => p.on(m, E),
            onLastListenerRemove: () => p.removeListener(m, E),
          });
        return z.event;
      }),
      (e.fromDOMEventEmitter = function k(p, m, w = (E) => E) {
        const E = (...F) => z.fire(w(...F)),
          z = new we({
            onFirstListenerAdd: () => p.addEventListener(m, E),
            onLastListenerRemove: () => p.removeEventListener(m, E),
          });
        return z.event;
      }),
      (e.toPromise = function v(p) {
        return new Promise((m) => n(p)(m));
      }),
      (e.runAndSubscribe = function L(p, m) {
        return m(void 0), p((w) => m(w));
      }),
      (e.runAndSubscribeWithStore = function D(p, m) {
        let w = null;
        function E(S) {
          w?.dispose(), (w = new Ct()), m(S, w);
        }
        E(void 0);
        const C = p((S) => E(S));
        return kt(() => {
          C.dispose(), w?.dispose();
        });
      });
    class H {
      constructor(m, w) {
        (this.obs = m), (this._counter = 0), (this._hasChanged = !1);
        (this.emitter = new we({
          onFirstListenerAdd: () => {
            m.addObserver(this);
          },
          onLastListenerRemove: () => {
            m.removeObserver(this);
          },
        })),
          w && w.add(this.emitter);
      }
      beginUpdate(m) {
        this._counter++;
      }
      handleChange(m, w) {
        this._hasChanged = !0;
      }
      endUpdate(m) {
        0 == --this._counter &&
          this._hasChanged &&
          ((this._hasChanged = !1), this.emitter.fire(this.obs.get()));
      }
    }
    e.fromObservable = function B(p, m) {
      return new H(p, m).emitter.event;
    };
  })(Rt || (Rt = {}));
  let Ma = (() => {
    class e {
      constructor(n) {
        (this._listenerCount = 0),
          (this._invocationCount = 0),
          (this._elapsedOverall = 0),
          (this._name = `${n}_${e._idPool++}`);
      }
      start(n) {
        (this._stopWatch = new Dt(!0)), (this._listenerCount = n);
      }
      stop() {
        if (this._stopWatch) {
          const n = this._stopWatch.elapsed();
          (this._elapsedOverall += n),
            (this._invocationCount += 1),
            console.info(
              `did FIRE ${this._name}: elapsed_ms: ${n.toFixed(5)}, listener: ${
                this._listenerCount
              } (elapsed_overall: ${this._elapsedOverall.toFixed(
                2
              )}, invocations: ${this._invocationCount})`
            ),
            (this._stopWatch = void 0);
        }
      }
    }
    return (e._idPool = 0), e;
  })();
  class rt {
    constructor(t) {
      this.value = t;
    }
    static create() {
      var t;
      return new rt(null !== (t = new Error().stack) && void 0 !== t ? t : '');
    }
    print() {
      console.warn(this.value.split('\n').slice(2).join('\n'));
    }
  }
  class Ra {
    constructor(t, n, r) {
      (this.callback = t),
        (this.callbackThis = n),
        (this.stack = r),
        (this.subscription = new pa());
    }
    invoke(t) {
      this.callback.call(this.callbackThis, t);
    }
  }
  class we {
    constructor(t) {
      var n, r;
      (this._disposed = !1),
        (this._options = t),
        (this._leakageMon = void 0),
        (this._perfMon =
          null !== (n = this._options) && void 0 !== n && n._profName
            ? new Ma(this._options._profName)
            : void 0),
        (this._deliveryQueue =
          null === (r = this._options) || void 0 === r
            ? void 0
            : r.deliveryQueue);
    }
    dispose() {
      var t, n, r, i;
      this._disposed ||
        ((this._disposed = !0),
        this._listeners && this._listeners.clear(),
        null === (t = this._deliveryQueue) || void 0 === t || t.clear(this),
        null ===
          (r =
            null === (n = this._options) || void 0 === n
              ? void 0
              : n.onLastListenerRemove) ||
          void 0 === r ||
          r.call(n),
        null === (i = this._leakageMon) || void 0 === i || i.dispose());
    }
    get event() {
      return (
        this._event ||
          (this._event = (t, n, r) => {
            var i, a, o;
            this._listeners || (this._listeners = new At());
            const c = this._listeners.isEmpty();
            let l, u;
            c &&
              null !== (i = this._options) &&
              void 0 !== i &&
              i.onFirstListenerAdd &&
              this._options.onFirstListenerAdd(this),
              this._leakageMon &&
                this._listeners.size >= 30 &&
                ((u = rt.create()),
                (l = this._leakageMon.check(u, this._listeners.size + 1)));
            const h = new Ra(t, n, u),
              d = this._listeners.push(h);
            c &&
              !(null === (a = this._options) || void 0 === a) &&
              a.onFirstListenerDidAdd &&
              this._options.onFirstListenerDidAdd(this),
              null !== (o = this._options) &&
                void 0 !== o &&
                o.onListenerDidAdd &&
                this._options.onListenerDidAdd(this, t, n);
            const f = h.subscription.set(() => {
              l?.(),
                this._disposed ||
                  (d(),
                  this._options &&
                    this._options.onLastListenerRemove &&
                    ((this._listeners && !this._listeners.isEmpty()) ||
                      this._options.onLastListenerRemove(this)));
            });
            return (
              r instanceof Ct ? r.add(f) : Array.isArray(r) && r.push(f), f
            );
          }),
        this._event
      );
    }
    fire(t) {
      var n, r;
      if (this._listeners) {
        this._deliveryQueue || (this._deliveryQueue = new Ia());
        for (const i of this._listeners) this._deliveryQueue.push(this, i, t);
        null === (n = this._perfMon) ||
          void 0 === n ||
          n.start(this._deliveryQueue.size),
          this._deliveryQueue.deliver(),
          null === (r = this._perfMon) || void 0 === r || r.stop();
      }
    }
  }
  class Na {
    constructor() {
      this._queue = new At();
    }
    get size() {
      return this._queue.size;
    }
    push(t, n, r) {
      this._queue.push(new Ua(t, n, r));
    }
    clear(t) {
      const n = new At();
      for (const r of this._queue) r.emitter !== t && n.push(r);
      this._queue = n;
    }
    deliver() {
      for (; this._queue.size > 0; ) {
        const t = this._queue.shift();
        try {
          t.listener.invoke(t.event);
        } catch (n) {
          Qn((e = n)) || jn.onUnexpectedError(e);
        }
      }
      var e;
    }
  }
  class Ia extends Na {
    clear(t) {
      this._queue.clear();
    }
  }
  class Ua {
    constructor(t, n, r) {
      (this.emitter = t), (this.listener = n), (this.event = r);
    }
  }
  function an(e) {
    const t = [];
    for (const n of (function Ba(e) {
      let t = [],
        n = Object.getPrototypeOf(e);
      for (; Object.prototype !== n; )
        (t = t.concat(Object.getOwnPropertyNames(n))),
          (n = Object.getPrototypeOf(n));
      return t;
    })(e))
      'function' == typeof e[n] && t.push(n);
    return t;
  }
  function Pa(e, t) {
    const n = (i) =>
        function () {
          const a = Array.prototype.slice.call(arguments, 0);
          return t(i, a);
        },
      r = {};
    for (const i of e) r[i] = n(i);
    return r;
  }
  function qa(e, t = 'Unreachable') {
    throw new Error(t);
  }
  class lr {
    constructor(t) {
      (this.executor = t), (this._didRun = !1);
    }
    hasValue() {
      return this._didRun;
    }
    getValue() {
      if (!this._didRun)
        try {
          this._value = this.executor();
        } catch (t) {
          this._error = t;
        } finally {
          this._didRun = !0;
        }
      if (this._error) throw this._error;
      return this._value;
    }
    get rawValue() {
      return this._value;
    }
  }
  var ur;
  function dr(e) {
    return e >= 65 && e <= 90;
  }
  function it(e) {
    return 55296 <= e && e <= 56319;
  }
  function at(e) {
    return 56320 <= e && e <= 57343;
  }
  function on(e, t) {
    return t - 56320 + ((e - 55296) << 10) + 65536;
  }
  function fr(e, t, n) {
    const r = e.charCodeAt(n);
    if (it(r) && n + 1 < t) {
      const i = e.charCodeAt(n + 1);
      if (at(i)) return on(r, i);
    }
    return r;
  }
  const ts = /^[\t\n\r\x20-\x7E]*$/;
  function ns(e) {
    return ts.test(e);
  }
  String.fromCharCode(65279);
  class be {
    constructor(t) {
      this.confusableDictionary = t;
    }
    static getInstance(t) {
      return be.cache.get(Array.from(t));
    }
    static getLocales() {
      return be._locales.getValue();
    }
    isAmbiguous(t) {
      return this.confusableDictionary.has(t);
    }
    getPrimaryConfusable(t) {
      return this.confusableDictionary.get(t);
    }
    getConfusableCodePoints() {
      return new Set(this.confusableDictionary.keys());
    }
  }
  (ur = be),
    (be.ambiguousCharacterData = new lr(() =>
      JSON.parse(
        '{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,8218,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,8242,96,1370,96,1523,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71922,67,71913,67,65315,67,8557,67,8450,67,8493,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71919,87,71910,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,66293,90,71909,90,65338,90,8484,90,8488,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65297,49,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125],"_default":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"cs":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"es":[8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"fr":[65374,126,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"it":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"ja":[8211,45,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65292,44,65307,59],"ko":[8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"pt-BR":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"ru":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"zh-hans":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41],"zh-hant":[8211,45,65374,126,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65307,59]}'
      )
    )),
    (be.cache = new (class Oa {
      constructor(t) {
        (this.fn = t), (this.lastCache = void 0), (this.lastArgKey = void 0);
      }
      get(t) {
        const n = JSON.stringify(t);
        return (
          this.lastArgKey !== n &&
            ((this.lastArgKey = n), (this.lastCache = this.fn(t))),
          this.lastCache
        );
      }
    })((e) => {
      function t(u) {
        const h = new Map();
        for (let d = 0; d < u.length; d += 2) h.set(u[d], u[d + 1]);
        return h;
      }
      function r(u, h) {
        if (!u) return h;
        const d = new Map();
        for (const [f, g] of u) h.has(f) && d.set(f, g);
        return d;
      }
      const i = ur.ambiguousCharacterData.getValue();
      let o,
        a = e.filter((u) => !u.startsWith('_') && u in i);
      0 === a.length && (a = ['_default']);
      for (const u of a) o = r(o, t(i[u]));
      const l = (function n(u, h) {
        const d = new Map(u);
        for (const [f, g] of h) d.set(f, g);
        return d;
      })(t(i._common), o);
      return new be(l);
    })),
    (be._locales = new lr(() =>
      Object.keys(be.ambiguousCharacterData.getValue()).filter(
        (e) => !e.startsWith('_')
      )
    ));
  class Ee {
    static getRawData() {
      return JSON.parse(
        '[9,10,11,12,13,32,127,160,173,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8203,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12288,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999]'
      );
    }
    static getData() {
      return this._data || (this._data = new Set(Ee.getRawData())), this._data;
    }
    static isInvisibleCharacter(t) {
      return Ee.getData().has(t);
    }
    static get codePoints() {
      return Ee.getData();
    }
  }
  Ee._data = void 0;
  let $e;
  class os {
    constructor(t, n, r, i) {
      (this.vsWorker = t),
        (this.req = n),
        (this.method = r),
        (this.args = i),
        (this.type = 0);
    }
  }
  class _r {
    constructor(t, n, r, i) {
      (this.vsWorker = t),
        (this.seq = n),
        (this.res = r),
        (this.err = i),
        (this.type = 1);
    }
  }
  class ls {
    constructor(t, n, r, i) {
      (this.vsWorker = t),
        (this.req = n),
        (this.eventName = r),
        (this.arg = i),
        (this.type = 2);
    }
  }
  class us {
    constructor(t, n, r) {
      (this.vsWorker = t), (this.req = n), (this.event = r), (this.type = 3);
    }
  }
  class cs {
    constructor(t, n) {
      (this.vsWorker = t), (this.req = n), (this.type = 4);
    }
  }
  class vr {
    constructor(t) {
      (this._workerId = -1),
        (this._handler = t),
        (this._lastSentReq = 0),
        (this._pendingReplies = Object.create(null)),
        (this._pendingEmitters = new Map()),
        (this._pendingEvents = new Map());
    }
    setWorkerId(t) {
      this._workerId = t;
    }
    sendMessage(t, n) {
      const r = String(++this._lastSentReq);
      return new Promise((i, a) => {
        (this._pendingReplies[r] = { resolve: i, reject: a }),
          this._send(new os(this._workerId, r, t, n));
      });
    }
    listen(t, n) {
      let r = null;
      const i = new we({
        onFirstListenerAdd: () => {
          (r = String(++this._lastSentReq)),
            this._pendingEmitters.set(r, i),
            this._send(new ls(this._workerId, r, t, n));
        },
        onLastListenerRemove: () => {
          this._pendingEmitters.delete(r),
            this._send(new cs(this._workerId, r)),
            (r = null);
        },
      });
      return i.event;
    }
    handleMessage(t) {
      !t ||
        !t.vsWorker ||
        (-1 !== this._workerId && t.vsWorker !== this._workerId) ||
        this._handleMessage(t);
    }
    _handleMessage(t) {
      switch (t.type) {
        case 1:
          return this._handleReplyMessage(t);
        case 0:
          return this._handleRequestMessage(t);
        case 2:
          return this._handleSubscribeEventMessage(t);
        case 3:
          return this._handleEventMessage(t);
        case 4:
          return this._handleUnsubscribeEventMessage(t);
      }
    }
    _handleReplyMessage(t) {
      if (!this._pendingReplies[t.seq])
        return void console.warn('Got reply to unknown seq');
      const n = this._pendingReplies[t.seq];
      if ((delete this._pendingReplies[t.seq], t.err)) {
        let r = t.err;
        return (
          t.err.$isError &&
            ((r = new Error()),
            (r.name = t.err.name),
            (r.message = t.err.message),
            (r.stack = t.err.stack)),
          void n.reject(r)
        );
      }
      n.resolve(t.res);
    }
    _handleRequestMessage(t) {
      const n = t.req;
      this._handler.handleMessage(t.method, t.args).then(
        (i) => {
          this._send(new _r(this._workerId, n, i, void 0));
        },
        (i) => {
          i.detail instanceof Error && (i.detail = $n(i.detail)),
            this._send(new _r(this._workerId, n, void 0, $n(i)));
        }
      );
    }
    _handleSubscribeEventMessage(t) {
      const n = t.req,
        r = this._handler.handleEvent(
          t.eventName,
          t.arg
        )((i) => {
          this._send(new us(this._workerId, n, i));
        });
      this._pendingEvents.set(n, r);
    }
    _handleEventMessage(t) {
      this._pendingEmitters.has(t.req)
        ? this._pendingEmitters.get(t.req).fire(t.event)
        : console.warn('Got event for unknown req');
    }
    _handleUnsubscribeEventMessage(t) {
      this._pendingEvents.has(t.req)
        ? (this._pendingEvents.get(t.req).dispose(),
          this._pendingEvents.delete(t.req))
        : console.warn('Got unsubscribe for unknown req');
    }
    _send(t) {
      const n = [];
      if (0 === t.type)
        for (let r = 0; r < t.args.length; r++)
          t.args[r] instanceof ArrayBuffer && n.push(t.args[r]);
      else 1 === t.type && t.res instanceof ArrayBuffer && n.push(t.res);
      this._handler.sendMessage(t, n);
    }
  }
  function un(e) {
    return 'o' === e[0] && 'n' === e[1] && dr(e.charCodeAt(2));
  }
  function cn(e) {
    return /^onDynamic/.test(e) && dr(e.charCodeAt(9));
  }
  class Tr {
    constructor(t, n) {
      (this._requestHandlerFactory = n),
        (this._requestHandler = null),
        (this._protocol = new vr({
          sendMessage: (r, i) => {
            t(r, i);
          },
          handleMessage: (r, i) => this._handleMessage(r, i),
          handleEvent: (r, i) => this._handleEvent(r, i),
        }));
    }
    onmessage(t) {
      this._protocol.handleMessage(t);
    }
    _handleMessage(t, n) {
      if ('$initialize' === t) return this.initialize(n[0], n[1], n[2], n[3]);
      if (!this._requestHandler || 'function' != typeof this._requestHandler[t])
        return Promise.reject(
          new Error('Missing requestHandler or method: ' + t)
        );
      try {
        return Promise.resolve(
          this._requestHandler[t].apply(this._requestHandler, n)
        );
      } catch (r) {
        return Promise.reject(r);
      }
    }
    _handleEvent(t, n) {
      if (!this._requestHandler) throw new Error('Missing requestHandler');
      if (cn(t)) {
        const r = this._requestHandler[t].call(this._requestHandler, n);
        if ('function' != typeof r)
          throw new Error(`Missing dynamic event ${t} on request handler.`);
        return r;
      }
      if (un(t)) {
        const r = this._requestHandler[t];
        if ('function' != typeof r)
          throw new Error(`Missing event ${t} on request handler.`);
        return r;
      }
      throw new Error(`Malformed event name ${t}`);
    }
    initialize(t, n, r, i) {
      this._protocol.setWorkerId(t);
      const c = (function yr(e, t, n) {
        const r = (o) =>
            function () {
              const c = Array.prototype.slice.call(arguments, 0);
              return t(o, c);
            },
          i = (o) =>
            function (c) {
              return n(o, c);
            },
          a = {};
        for (const o of e) a[o] = cn(o) ? i(o) : un(o) ? n(o, void 0) : r(o);
        return a;
      })(
        i,
        (l, u) => this._protocol.sendMessage(l, u),
        (l, u) => this._protocol.listen(l, u)
      );
      return this._requestHandlerFactory
        ? ((this._requestHandler = this._requestHandlerFactory(c)),
          Promise.resolve(an(this._requestHandler)))
        : (n &&
            (typeof n.baseUrl < 'u' && delete n.baseUrl,
            typeof n.paths < 'u' &&
              typeof n.paths.vs < 'u' &&
              delete n.paths.vs,
            void 0 !== typeof n.trustedTypesPolicy &&
              delete n.trustedTypesPolicy,
            (n.catchError = !0),
            re.require.config(n)),
          new Promise((l, u) => {
            (0, re.require)(
              [r],
              (d) => {
                (this._requestHandler = d.create(c)),
                  this._requestHandler
                    ? l(an(this._requestHandler))
                    : u(new Error('No RequestHandler!'));
              },
              u
            );
          }));
    }
  }
  class Me {
    constructor(t, n, r, i) {
      (this.originalStart = t),
        (this.originalLength = n),
        (this.modifiedStart = r),
        (this.modifiedLength = i);
    }
    getOriginalEnd() {
      return this.originalStart + this.originalLength;
    }
    getModifiedEnd() {
      return this.modifiedStart + this.modifiedLength;
    }
  }
  function xe(e, t) {
    return ((t << 5) - t + e) | 0;
  }
  function dn(e, t) {
    t = xe(149417, t);
    for (let n = 0, r = e.length; n < r; n++) t = xe(e.charCodeAt(n), t);
    return t;
  }
  function fn(e, t, n = 32) {
    const r = n - t;
    return ((e << t) | ((~((1 << r) - 1) & e) >>> r)) >>> 0;
  }
  function kr(e, t = 0, n = e.byteLength, r = 0) {
    for (let i = 0; i < n; i++) e[t + i] = r;
  }
  function st(e, t = 32) {
    return e instanceof ArrayBuffer
      ? Array.from(new Uint8Array(e))
          .map((n) => n.toString(16).padStart(2, '0'))
          .join('')
      : (function ms(e, t, n = '0') {
          for (; e.length < t; ) e = n + e;
          return e;
        })((e >>> 0).toString(16), t / 4);
  }
  class mn {
    constructor() {
      (this._h0 = 1732584193),
        (this._h1 = 4023233417),
        (this._h2 = 2562383102),
        (this._h3 = 271733878),
        (this._h4 = 3285377520),
        (this._buff = new Uint8Array(67)),
        (this._buffDV = new DataView(this._buff.buffer)),
        (this._buffLen = 0),
        (this._totalLen = 0),
        (this._leftoverHighSurrogate = 0),
        (this._finished = !1);
    }
    update(t) {
      const n = t.length;
      if (0 === n) return;
      const r = this._buff;
      let o,
        c,
        i = this._buffLen,
        a = this._leftoverHighSurrogate;
      for (
        0 !== a
          ? ((o = a), (c = -1), (a = 0))
          : ((o = t.charCodeAt(0)), (c = 0));
        ;

      ) {
        let l = o;
        if (it(o)) {
          if (!(c + 1 < n)) {
            a = o;
            break;
          }
          {
            const u = t.charCodeAt(c + 1);
            at(u) ? (c++, (l = on(o, u))) : (l = 65533);
          }
        } else at(o) && (l = 65533);
        if (((i = this._push(r, i, l)), c++, !(c < n))) break;
        o = t.charCodeAt(c);
      }
      (this._buffLen = i), (this._leftoverHighSurrogate = a);
    }
    _push(t, n, r) {
      return (
        r < 128
          ? (t[n++] = r)
          : r < 2048
          ? ((t[n++] = 192 | ((1984 & r) >>> 6)),
            (t[n++] = 128 | ((63 & r) >>> 0)))
          : r < 65536
          ? ((t[n++] = 224 | ((61440 & r) >>> 12)),
            (t[n++] = 128 | ((4032 & r) >>> 6)),
            (t[n++] = 128 | ((63 & r) >>> 0)))
          : ((t[n++] = 240 | ((1835008 & r) >>> 18)),
            (t[n++] = 128 | ((258048 & r) >>> 12)),
            (t[n++] = 128 | ((4032 & r) >>> 6)),
            (t[n++] = 128 | ((63 & r) >>> 0))),
        n >= 64 &&
          (this._step(),
          (n -= 64),
          (this._totalLen += 64),
          (t[0] = t[64]),
          (t[1] = t[65]),
          (t[2] = t[66])),
        n
      );
    }
    digest() {
      return (
        this._finished ||
          ((this._finished = !0),
          this._leftoverHighSurrogate &&
            ((this._leftoverHighSurrogate = 0),
            (this._buffLen = this._push(this._buff, this._buffLen, 65533))),
          (this._totalLen += this._buffLen),
          this._wrapUp()),
        st(this._h0) + st(this._h1) + st(this._h2) + st(this._h3) + st(this._h4)
      );
    }
    _wrapUp() {
      (this._buff[this._buffLen++] = 128),
        kr(this._buff, this._buffLen),
        this._buffLen > 56 && (this._step(), kr(this._buff));
      const t = 8 * this._totalLen;
      this._buffDV.setUint32(56, Math.floor(t / 4294967296), !1),
        this._buffDV.setUint32(60, t % 4294967296, !1),
        this._step();
    }
    _step() {
      const t = mn._bigBlock32,
        n = this._buffDV;
      for (let d = 0; d < 64; d += 4) t.setUint32(d, n.getUint32(d, !1), !1);
      for (let d = 64; d < 320; d += 4)
        t.setUint32(
          d,
          fn(
            t.getUint32(d - 12, !1) ^
              t.getUint32(d - 32, !1) ^
              t.getUint32(d - 56, !1) ^
              t.getUint32(d - 64, !1),
            1
          ),
          !1
        );
      let l,
        u,
        h,
        r = this._h0,
        i = this._h1,
        a = this._h2,
        o = this._h3,
        c = this._h4;
      for (let d = 0; d < 80; d++)
        d < 20
          ? ((l = (i & a) | (~i & o)), (u = 1518500249))
          : d < 40
          ? ((l = i ^ a ^ o), (u = 1859775393))
          : d < 60
          ? ((l = (i & a) | (i & o) | (a & o)), (u = 2400959708))
          : ((l = i ^ a ^ o), (u = 3395469782)),
          (h = (fn(r, 5) + l + c + u + t.getUint32(4 * d, !1)) & 4294967295),
          (c = o),
          (o = a),
          (a = fn(i, 30)),
          (i = r),
          (r = h);
      (this._h0 = (this._h0 + r) & 4294967295),
        (this._h1 = (this._h1 + i) & 4294967295),
        (this._h2 = (this._h2 + a) & 4294967295),
        (this._h3 = (this._h3 + o) & 4294967295),
        (this._h4 = (this._h4 + c) & 4294967295);
    }
  }
  mn._bigBlock32 = new DataView(new ArrayBuffer(320));
  class Cr {
    constructor(t) {
      this.source = t;
    }
    getElements() {
      const t = this.source,
        n = new Int32Array(t.length);
      for (let r = 0, i = t.length; r < i; r++) n[r] = t.charCodeAt(r);
      return n;
    }
  }
  function ps(e, t, n) {
    return new De(new Cr(e), new Cr(t)).ComputeDiff(n).changes;
  }
  class Ge {
    static Assert(t, n) {
      if (!t) throw new Error(n);
    }
  }
  class je {
    static Copy(t, n, r, i, a) {
      for (let o = 0; o < a; o++) r[i + o] = t[n + o];
    }
    static Copy2(t, n, r, i, a) {
      for (let o = 0; o < a; o++) r[i + o] = t[n + o];
    }
  }
  class Ar {
    constructor() {
      (this.m_changes = []),
        (this.m_originalStart = 1073741824),
        (this.m_modifiedStart = 1073741824),
        (this.m_originalCount = 0),
        (this.m_modifiedCount = 0);
    }
    MarkNextChange() {
      (this.m_originalCount > 0 || this.m_modifiedCount > 0) &&
        this.m_changes.push(
          new Me(
            this.m_originalStart,
            this.m_originalCount,
            this.m_modifiedStart,
            this.m_modifiedCount
          )
        ),
        (this.m_originalCount = 0),
        (this.m_modifiedCount = 0),
        (this.m_originalStart = 1073741824),
        (this.m_modifiedStart = 1073741824);
    }
    AddOriginalElement(t, n) {
      (this.m_originalStart = Math.min(this.m_originalStart, t)),
        (this.m_modifiedStart = Math.min(this.m_modifiedStart, n)),
        this.m_originalCount++;
    }
    AddModifiedElement(t, n) {
      (this.m_originalStart = Math.min(this.m_originalStart, t)),
        (this.m_modifiedStart = Math.min(this.m_modifiedStart, n)),
        this.m_modifiedCount++;
    }
    getChanges() {
      return (
        (this.m_originalCount > 0 || this.m_modifiedCount > 0) &&
          this.MarkNextChange(),
        this.m_changes
      );
    }
    getReverseChanges() {
      return (
        (this.m_originalCount > 0 || this.m_modifiedCount > 0) &&
          this.MarkNextChange(),
        this.m_changes.reverse(),
        this.m_changes
      );
    }
  }
  class De {
    constructor(t, n, r = null) {
      (this.ContinueProcessingPredicate = r),
        (this._originalSequence = t),
        (this._modifiedSequence = n);
      const [i, a, o] = De._getElements(t),
        [c, l, u] = De._getElements(n);
      (this._hasStrings = o && u),
        (this._originalStringElements = i),
        (this._originalElementsOrHash = a),
        (this._modifiedStringElements = c),
        (this._modifiedElementsOrHash = l),
        (this.m_forwardHistory = []),
        (this.m_reverseHistory = []);
    }
    static _isStringArray(t) {
      return t.length > 0 && 'string' == typeof t[0];
    }
    static _getElements(t) {
      const n = t.getElements();
      if (De._isStringArray(n)) {
        const r = new Int32Array(n.length);
        for (let i = 0, a = n.length; i < a; i++) r[i] = dn(n[i], 0);
        return [n, r, !0];
      }
      return n instanceof Int32Array
        ? [[], n, !1]
        : [[], new Int32Array(n), !1];
    }
    ElementsAreEqual(t, n) {
      return (
        this._originalElementsOrHash[t] === this._modifiedElementsOrHash[n] &&
        (!this._hasStrings ||
          this._originalStringElements[t] === this._modifiedStringElements[n])
      );
    }
    ElementsAreStrictEqual(t, n) {
      return (
        !!this.ElementsAreEqual(t, n) &&
        De._getStrictElement(this._originalSequence, t) ===
          De._getStrictElement(this._modifiedSequence, n)
      );
    }
    static _getStrictElement(t, n) {
      return 'function' == typeof t.getStrictElement
        ? t.getStrictElement(n)
        : null;
    }
    OriginalElementsAreEqual(t, n) {
      return (
        this._originalElementsOrHash[t] === this._originalElementsOrHash[n] &&
        (!this._hasStrings ||
          this._originalStringElements[t] === this._originalStringElements[n])
      );
    }
    ModifiedElementsAreEqual(t, n) {
      return (
        this._modifiedElementsOrHash[t] === this._modifiedElementsOrHash[n] &&
        (!this._hasStrings ||
          this._modifiedStringElements[t] === this._modifiedStringElements[n])
      );
    }
    ComputeDiff(t) {
      return this._ComputeDiff(
        0,
        this._originalElementsOrHash.length - 1,
        0,
        this._modifiedElementsOrHash.length - 1,
        t
      );
    }
    _ComputeDiff(t, n, r, i, a) {
      const o = [!1];
      let c = this.ComputeDiffRecursive(t, n, r, i, o);
      return (
        a && (c = this.PrettifyChanges(c)), { quitEarly: o[0], changes: c }
      );
    }
    ComputeDiffRecursive(t, n, r, i, a) {
      for (a[0] = !1; t <= n && r <= i && this.ElementsAreEqual(t, r); )
        t++, r++;
      for (; n >= t && i >= r && this.ElementsAreEqual(n, i); ) n--, i--;
      if (t > n || r > i) {
        let d;
        return (
          r <= i
            ? (Ge.Assert(
                t === n + 1,
                'originalStart should only be one more than originalEnd'
              ),
              (d = [new Me(t, 0, r, i - r + 1)]))
            : t <= n
            ? (Ge.Assert(
                r === i + 1,
                'modifiedStart should only be one more than modifiedEnd'
              ),
              (d = [new Me(t, n - t + 1, r, 0)]))
            : (Ge.Assert(
                t === n + 1,
                'originalStart should only be one more than originalEnd'
              ),
              Ge.Assert(
                r === i + 1,
                'modifiedStart should only be one more than modifiedEnd'
              ),
              (d = [])),
          d
        );
      }
      const o = [0],
        c = [0],
        l = this.ComputeRecursionPoint(t, n, r, i, o, c, a),
        u = o[0],
        h = c[0];
      if (null !== l) return l;
      if (!a[0]) {
        const d = this.ComputeDiffRecursive(t, u, r, h, a);
        let f = [];
        return (
          (f = a[0]
            ? [new Me(u + 1, n - (u + 1) + 1, h + 1, i - (h + 1) + 1)]
            : this.ComputeDiffRecursive(u + 1, n, h + 1, i, a)),
          this.ConcatenateChanges(d, f)
        );
      }
      return [new Me(t, n - t + 1, r, i - r + 1)];
    }
    WALKTRACE(t, n, r, i, a, o, c, l, u, h, d, f, g, _, b, y, k, v) {
      let L = null,
        D = null,
        H = new Ar(),
        B = n,
        p = r,
        m = g[0] - y[0] - i,
        w = -1073741824,
        E = this.m_forwardHistory.length - 1;
      do {
        const C = m + t;
        C === B || (C < p && u[C - 1] < u[C + 1])
          ? ((_ = (d = u[C + 1]) - m - i),
            d < w && H.MarkNextChange(),
            (w = d),
            H.AddModifiedElement(d + 1, _),
            (m = C + 1 - t))
          : ((_ = (d = u[C - 1] + 1) - m - i),
            d < w && H.MarkNextChange(),
            (w = d - 1),
            H.AddOriginalElement(d, _ + 1),
            (m = C - 1 - t)),
          E >= 0 &&
            ((t = (u = this.m_forwardHistory[E])[0]),
            (B = 1),
            (p = u.length - 1));
      } while (--E >= -1);
      if (((L = H.getReverseChanges()), v[0])) {
        let C = g[0] + 1,
          S = y[0] + 1;
        if (null !== L && L.length > 0) {
          const z = L[L.length - 1];
          (C = Math.max(C, z.getOriginalEnd())),
            (S = Math.max(S, z.getModifiedEnd()));
        }
        D = [new Me(C, f - C + 1, S, b - S + 1)];
      } else {
        (H = new Ar()),
          (B = o),
          (p = c),
          (m = g[0] - y[0] - l),
          (w = 1073741824),
          (E = k
            ? this.m_reverseHistory.length - 1
            : this.m_reverseHistory.length - 2);
        do {
          const C = m + a;
          C === B || (C < p && h[C - 1] >= h[C + 1])
            ? ((_ = (d = h[C + 1] - 1) - m - l),
              d > w && H.MarkNextChange(),
              (w = d + 1),
              H.AddOriginalElement(d + 1, _ + 1),
              (m = C + 1 - a))
            : ((_ = (d = h[C - 1]) - m - l),
              d > w && H.MarkNextChange(),
              (w = d),
              H.AddModifiedElement(d + 1, _ + 1),
              (m = C - 1 - a)),
            E >= 0 &&
              ((a = (h = this.m_reverseHistory[E])[0]),
              (B = 1),
              (p = h.length - 1));
        } while (--E >= -1);
        D = H.getChanges();
      }
      return this.ConcatenateChanges(L, D);
    }
    ComputeRecursionPoint(t, n, r, i, a, o, c) {
      let l = 0,
        u = 0,
        h = 0,
        d = 0,
        f = 0,
        g = 0;
      t--,
        r--,
        (a[0] = 0),
        (o[0] = 0),
        (this.m_forwardHistory = []),
        (this.m_reverseHistory = []);
      const _ = n - t + (i - r),
        b = _ + 1,
        y = new Int32Array(b),
        k = new Int32Array(b),
        v = i - r,
        L = n - t,
        D = t - r,
        H = n - i,
        p = (L - v) % 2 == 0;
      (y[v] = t), (k[L] = n), (c[0] = !1);
      for (let m = 1; m <= _ / 2 + 1; m++) {
        let w = 0,
          E = 0;
        (h = this.ClipDiagonalBound(v - m, m, v, b)),
          (d = this.ClipDiagonalBound(v + m, m, v, b));
        for (let S = h; S <= d; S += 2) {
          (l =
            S === h || (S < d && y[S - 1] < y[S + 1])
              ? y[S + 1]
              : y[S - 1] + 1),
            (u = l - (S - v) - D);
          const z = l;
          for (; l < n && u < i && this.ElementsAreEqual(l + 1, u + 1); )
            l++, u++;
          if (
            ((y[S] = l),
            l + u > w + E && ((w = l), (E = u)),
            !p && Math.abs(S - L) <= m - 1 && l >= k[S])
          )
            return (
              (a[0] = l),
              (o[0] = u),
              z <= k[S] && m <= 1448
                ? this.WALKTRACE(
                    v,
                    h,
                    d,
                    D,
                    L,
                    f,
                    g,
                    H,
                    y,
                    k,
                    l,
                    n,
                    a,
                    u,
                    i,
                    o,
                    p,
                    c
                  )
                : null
            );
        }
        const C = (w - t + (E - r) - m) / 2;
        if (
          null !== this.ContinueProcessingPredicate &&
          !this.ContinueProcessingPredicate(w, C)
        )
          return (
            (c[0] = !0),
            (a[0] = w),
            (o[0] = E),
            C > 0 && m <= 1448
              ? this.WALKTRACE(
                  v,
                  h,
                  d,
                  D,
                  L,
                  f,
                  g,
                  H,
                  y,
                  k,
                  l,
                  n,
                  a,
                  u,
                  i,
                  o,
                  p,
                  c
                )
              : (t++, r++, [new Me(t, n - t + 1, r, i - r + 1)])
          );
        (f = this.ClipDiagonalBound(L - m, m, L, b)),
          (g = this.ClipDiagonalBound(L + m, m, L, b));
        for (let S = f; S <= g; S += 2) {
          (l =
            S === f || (S < g && k[S - 1] >= k[S + 1])
              ? k[S + 1] - 1
              : k[S - 1]),
            (u = l - (S - L) - H);
          const z = l;
          for (; l > t && u > r && this.ElementsAreEqual(l, u); ) l--, u--;
          if (((k[S] = l), p && Math.abs(S - v) <= m && l <= y[S]))
            return (
              (a[0] = l),
              (o[0] = u),
              z >= y[S] && m <= 1448
                ? this.WALKTRACE(
                    v,
                    h,
                    d,
                    D,
                    L,
                    f,
                    g,
                    H,
                    y,
                    k,
                    l,
                    n,
                    a,
                    u,
                    i,
                    o,
                    p,
                    c
                  )
                : null
            );
        }
        if (m <= 1447) {
          let S = new Int32Array(d - h + 2);
          (S[0] = v - h + 1),
            je.Copy2(y, h, S, 1, d - h + 1),
            this.m_forwardHistory.push(S),
            (S = new Int32Array(g - f + 2)),
            (S[0] = L - f + 1),
            je.Copy2(k, f, S, 1, g - f + 1),
            this.m_reverseHistory.push(S);
        }
      }
      return this.WALKTRACE(
        v,
        h,
        d,
        D,
        L,
        f,
        g,
        H,
        y,
        k,
        l,
        n,
        a,
        u,
        i,
        o,
        p,
        c
      );
    }
    PrettifyChanges(t) {
      for (let n = 0; n < t.length; n++) {
        const r = t[n],
          i =
            n < t.length - 1
              ? t[n + 1].originalStart
              : this._originalElementsOrHash.length,
          a =
            n < t.length - 1
              ? t[n + 1].modifiedStart
              : this._modifiedElementsOrHash.length,
          o = r.originalLength > 0,
          c = r.modifiedLength > 0;
        for (
          ;
          r.originalStart + r.originalLength < i &&
          r.modifiedStart + r.modifiedLength < a &&
          (!o ||
            this.OriginalElementsAreEqual(
              r.originalStart,
              r.originalStart + r.originalLength
            )) &&
          (!c ||
            this.ModifiedElementsAreEqual(
              r.modifiedStart,
              r.modifiedStart + r.modifiedLength
            ));

        ) {
          const u = this.ElementsAreStrictEqual(
            r.originalStart,
            r.modifiedStart
          );
          if (
            this.ElementsAreStrictEqual(
              r.originalStart + r.originalLength,
              r.modifiedStart + r.modifiedLength
            ) &&
            !u
          )
            break;
          r.originalStart++, r.modifiedStart++;
        }
        const l = [null];
        n < t.length - 1 &&
          this.ChangesOverlap(t[n], t[n + 1], l) &&
          ((t[n] = l[0]), t.splice(n + 1, 1), n--);
      }
      for (let n = t.length - 1; n >= 0; n--) {
        const r = t[n];
        let i = 0,
          a = 0;
        if (n > 0) {
          const d = t[n - 1];
          (i = d.originalStart + d.originalLength),
            (a = d.modifiedStart + d.modifiedLength);
        }
        const o = r.originalLength > 0,
          c = r.modifiedLength > 0;
        let l = 0,
          u = this._boundaryScore(
            r.originalStart,
            r.originalLength,
            r.modifiedStart,
            r.modifiedLength
          );
        for (let d = 1; ; d++) {
          const f = r.originalStart - d,
            g = r.modifiedStart - d;
          if (
            f < i ||
            g < a ||
            (o && !this.OriginalElementsAreEqual(f, f + r.originalLength)) ||
            (c && !this.ModifiedElementsAreEqual(g, g + r.modifiedLength))
          )
            break;
          const b =
            (f === i && g === a ? 5 : 0) +
            this._boundaryScore(f, r.originalLength, g, r.modifiedLength);
          b > u && ((u = b), (l = d));
        }
        (r.originalStart -= l), (r.modifiedStart -= l);
        const h = [null];
        n > 0 &&
          this.ChangesOverlap(t[n - 1], t[n], h) &&
          ((t[n - 1] = h[0]), t.splice(n, 1), n++);
      }
      if (this._hasStrings)
        for (let n = 1, r = t.length; n < r; n++) {
          const i = t[n - 1],
            a = t[n],
            o = a.originalStart - i.originalStart - i.originalLength,
            c = i.originalStart,
            l = a.originalStart + a.originalLength,
            u = l - c,
            h = i.modifiedStart,
            d = a.modifiedStart + a.modifiedLength,
            f = d - h;
          if (o < 5 && u < 20 && f < 20) {
            const g = this._findBetterContiguousSequence(c, u, h, f, o);
            if (g) {
              const [_, b] = g;
              (_ !== i.originalStart + i.originalLength ||
                b !== i.modifiedStart + i.modifiedLength) &&
                ((i.originalLength = _ - i.originalStart),
                (i.modifiedLength = b - i.modifiedStart),
                (a.originalStart = _ + o),
                (a.modifiedStart = b + o),
                (a.originalLength = l - a.originalStart),
                (a.modifiedLength = d - a.modifiedStart));
            }
          }
        }
      return t;
    }
    _findBetterContiguousSequence(t, n, r, i, a) {
      if (n < a || i < a) return null;
      const o = t + n - a + 1,
        c = r + i - a + 1;
      let l = 0,
        u = 0,
        h = 0;
      for (let d = t; d < o; d++)
        for (let f = r; f < c; f++) {
          const g = this._contiguousSequenceScore(d, f, a);
          g > 0 && g > l && ((l = g), (u = d), (h = f));
        }
      return l > 0 ? [u, h] : null;
    }
    _contiguousSequenceScore(t, n, r) {
      let i = 0;
      for (let a = 0; a < r; a++) {
        if (!this.ElementsAreEqual(t + a, n + a)) return 0;
        i += this._originalStringElements[t + a].length;
      }
      return i;
    }
    _OriginalIsBoundary(t) {
      return (
        t <= 0 ||
        t >= this._originalElementsOrHash.length - 1 ||
        (this._hasStrings && /^\s*$/.test(this._originalStringElements[t]))
      );
    }
    _OriginalRegionIsBoundary(t, n) {
      if (this._OriginalIsBoundary(t) || this._OriginalIsBoundary(t - 1))
        return !0;
      if (n > 0) {
        const r = t + n;
        if (this._OriginalIsBoundary(r - 1) || this._OriginalIsBoundary(r))
          return !0;
      }
      return !1;
    }
    _ModifiedIsBoundary(t) {
      return (
        t <= 0 ||
        t >= this._modifiedElementsOrHash.length - 1 ||
        (this._hasStrings && /^\s*$/.test(this._modifiedStringElements[t]))
      );
    }
    _ModifiedRegionIsBoundary(t, n) {
      if (this._ModifiedIsBoundary(t) || this._ModifiedIsBoundary(t - 1))
        return !0;
      if (n > 0) {
        const r = t + n;
        if (this._ModifiedIsBoundary(r - 1) || this._ModifiedIsBoundary(r))
          return !0;
      }
      return !1;
    }
    _boundaryScore(t, n, r, i) {
      return (
        (this._OriginalRegionIsBoundary(t, n) ? 1 : 0) +
        (this._ModifiedRegionIsBoundary(r, i) ? 1 : 0)
      );
    }
    ConcatenateChanges(t, n) {
      const r = [];
      if (0 === t.length || 0 === n.length) return n.length > 0 ? n : t;
      if (this.ChangesOverlap(t[t.length - 1], n[0], r)) {
        const i = new Array(t.length + n.length - 1);
        return (
          je.Copy(t, 0, i, 0, t.length - 1),
          (i[t.length - 1] = r[0]),
          je.Copy(n, 1, i, t.length, n.length - 1),
          i
        );
      }
      {
        const i = new Array(t.length + n.length);
        return (
          je.Copy(t, 0, i, 0, t.length), je.Copy(n, 0, i, t.length, n.length), i
        );
      }
    }
    ChangesOverlap(t, n, r) {
      if (
        (Ge.Assert(
          t.originalStart <= n.originalStart,
          'Left change is not less than or equal to right change'
        ),
        Ge.Assert(
          t.modifiedStart <= n.modifiedStart,
          'Left change is not less than or equal to right change'
        ),
        t.originalStart + t.originalLength >= n.originalStart ||
          t.modifiedStart + t.modifiedLength >= n.modifiedStart)
      ) {
        let a = t.originalLength,
          c = t.modifiedLength;
        return (
          t.originalStart + t.originalLength >= n.originalStart &&
            (a = n.originalStart + n.originalLength - t.originalStart),
          t.modifiedStart + t.modifiedLength >= n.modifiedStart &&
            (c = n.modifiedStart + n.modifiedLength - t.modifiedStart),
          (r[0] = new Me(t.originalStart, a, t.modifiedStart, c)),
          !0
        );
      }
      return (r[0] = null), !1;
    }
    ClipDiagonalBound(t, n, r, i) {
      if (t >= 0 && t < i) return t;
      const c = n % 2 == 0;
      return t < 0
        ? c === (r % 2 == 0)
          ? 0
          : 1
        : c === ((i - r - 1) % 2 == 0)
        ? i - 1
        : i - 2;
    }
  }
  if (typeof re.vscode < 'u' && typeof re.vscode.process < 'u') {
    const e = re.vscode.process;
    $e = {
      get platform() {
        return e.platform;
      },
      get arch() {
        return e.arch;
      },
      get env() {
        return e.env;
      },
      cwd: () => e.cwd(),
    };
  } else
    $e =
      typeof process < 'u'
        ? {
            get platform() {
              return process.platform;
            },
            get arch() {
              return process.arch;
            },
            get env() {
              return process.env;
            },
            cwd: () => process.env.VSCODE_CWD || process.cwd(),
          }
        : {
            get platform() {
              return nt ? 'win32' : Aa ? 'darwin' : 'linux';
            },
            get arch() {},
            get env() {
              return {};
            },
            cwd: () => '/',
          };
  const pn = $e.cwd,
    gs = $e.env;
  class Sr extends Error {
    constructor(t, n, r) {
      let i;
      'string' == typeof n && 0 === n.indexOf('not ')
        ? ((i = 'must not be'), (n = n.replace(/^not /, '')))
        : (i = 'must be');
      const a = -1 !== t.indexOf('.') ? 'property' : 'argument';
      let o = `The "${t}" ${a} ${i} of type ${n}`;
      (o += '. Received type ' + typeof r),
        super(o),
        (this.code = 'ERR_INVALID_ARG_TYPE');
    }
  }
  function K(e, t) {
    if ('string' != typeof e) throw new Sr(t, 'string', e);
  }
  function V(e) {
    return 47 === e || 92 === e;
  }
  function gn(e) {
    return 47 === e;
  }
  function Ie(e) {
    return (e >= 65 && e <= 90) || (e >= 97 && e <= 122);
  }
  function Nt(e, t, n, r) {
    let i = '',
      a = 0,
      o = -1,
      c = 0,
      l = 0;
    for (let u = 0; u <= e.length; ++u) {
      if (u < e.length) l = e.charCodeAt(u);
      else {
        if (r(l)) break;
        l = 47;
      }
      if (r(l)) {
        if (o !== u - 1 && 1 !== c)
          if (2 === c) {
            if (
              i.length < 2 ||
              2 !== a ||
              46 !== i.charCodeAt(i.length - 1) ||
              46 !== i.charCodeAt(i.length - 2)
            ) {
              if (i.length > 2) {
                const h = i.lastIndexOf(n);
                -1 === h
                  ? ((i = ''), (a = 0))
                  : ((i = i.slice(0, h)),
                    (a = i.length - 1 - i.lastIndexOf(n))),
                  (o = u),
                  (c = 0);
                continue;
              }
              if (0 !== i.length) {
                (i = ''), (a = 0), (o = u), (c = 0);
                continue;
              }
            }
            t && ((i += i.length > 0 ? `${n}..` : '..'), (a = 2));
          } else
            i.length > 0
              ? (i += `${n}${e.slice(o + 1, u)}`)
              : (i = e.slice(o + 1, u)),
              (a = u - o - 1);
        (o = u), (c = 0);
      } else 46 === l && -1 !== c ? ++c : (c = -1);
    }
    return i;
  }
  function xr(e, t) {
    if (null === t || 'object' != typeof t)
      throw new Sr('pathObject', 'Object', t);
    const n = t.dir || t.root,
      r = t.base || `${t.name || ''}${t.ext || ''}`;
    return n ? (n === t.root ? `${n}${r}` : `${n}${e}${r}`) : r;
  }
  const oe = {
      resolve(...e) {
        let t = '',
          n = '',
          r = !1;
        for (let i = e.length - 1; i >= -1; i--) {
          let a;
          if (i >= 0) {
            if (((a = e[i]), K(a, 'path'), 0 === a.length)) continue;
          } else
            0 === t.length
              ? (a = pn())
              : ((a = gs[`=${t}`] || pn()),
                (void 0 === a ||
                  (a.slice(0, 2).toLowerCase() !== t.toLowerCase() &&
                    92 === a.charCodeAt(2))) &&
                  (a = `${t}\\`));
          const o = a.length;
          let c = 0,
            l = '',
            u = !1;
          const h = a.charCodeAt(0);
          if (1 === o) V(h) && ((c = 1), (u = !0));
          else if (V(h))
            if (((u = !0), V(a.charCodeAt(1)))) {
              let d = 2,
                f = d;
              for (; d < o && !V(a.charCodeAt(d)); ) d++;
              if (d < o && d !== f) {
                const g = a.slice(f, d);
                for (f = d; d < o && V(a.charCodeAt(d)); ) d++;
                if (d < o && d !== f) {
                  for (f = d; d < o && !V(a.charCodeAt(d)); ) d++;
                  (d === o || d !== f) &&
                    ((l = `\\\\${g}\\${a.slice(f, d)}`), (c = d));
                }
              }
            } else c = 1;
          else
            Ie(h) &&
              58 === a.charCodeAt(1) &&
              ((l = a.slice(0, 2)),
              (c = 2),
              o > 2 && V(a.charCodeAt(2)) && ((u = !0), (c = 3)));
          if (l.length > 0)
            if (t.length > 0) {
              if (l.toLowerCase() !== t.toLowerCase()) continue;
            } else t = l;
          if (r) {
            if (t.length > 0) break;
          } else if (((n = `${a.slice(c)}\\${n}`), (r = u), u && t.length > 0))
            break;
        }
        return (n = Nt(n, !r, '\\', V)), r ? `${t}\\${n}` : `${t}${n}` || '.';
      },
      normalize(e) {
        K(e, 'path');
        const t = e.length;
        if (0 === t) return '.';
        let r,
          n = 0,
          i = !1;
        const a = e.charCodeAt(0);
        if (1 === t) return gn(a) ? '\\' : e;
        if (V(a))
          if (((i = !0), V(e.charCodeAt(1)))) {
            let c = 2,
              l = c;
            for (; c < t && !V(e.charCodeAt(c)); ) c++;
            if (c < t && c !== l) {
              const u = e.slice(l, c);
              for (l = c; c < t && V(e.charCodeAt(c)); ) c++;
              if (c < t && c !== l) {
                for (l = c; c < t && !V(e.charCodeAt(c)); ) c++;
                if (c === t) return `\\\\${u}\\${e.slice(l)}\\`;
                c !== l && ((r = `\\\\${u}\\${e.slice(l, c)}`), (n = c));
              }
            }
          } else n = 1;
        else
          Ie(a) &&
            58 === e.charCodeAt(1) &&
            ((r = e.slice(0, 2)),
            (n = 2),
            t > 2 && V(e.charCodeAt(2)) && ((i = !0), (n = 3)));
        let o = n < t ? Nt(e.slice(n), !i, '\\', V) : '';
        return (
          0 === o.length && !i && (o = '.'),
          o.length > 0 && V(e.charCodeAt(t - 1)) && (o += '\\'),
          void 0 === r ? (i ? `\\${o}` : o) : i ? `${r}\\${o}` : `${r}${o}`
        );
      },
      isAbsolute(e) {
        K(e, 'path');
        const t = e.length;
        if (0 === t) return !1;
        const n = e.charCodeAt(0);
        return (
          V(n) ||
          (t > 2 && Ie(n) && 58 === e.charCodeAt(1) && V(e.charCodeAt(2)))
        );
      },
      join(...e) {
        if (0 === e.length) return '.';
        let t, n;
        for (let a = 0; a < e.length; ++a) {
          const o = e[a];
          K(o, 'path'),
            o.length > 0 && (void 0 === t ? (t = n = o) : (t += `\\${o}`));
        }
        if (void 0 === t) return '.';
        let r = !0,
          i = 0;
        if ('string' == typeof n && V(n.charCodeAt(0))) {
          ++i;
          const a = n.length;
          a > 1 &&
            V(n.charCodeAt(1)) &&
            (++i, a > 2 && (V(n.charCodeAt(2)) ? ++i : (r = !1)));
        }
        if (r) {
          for (; i < t.length && V(t.charCodeAt(i)); ) i++;
          i >= 2 && (t = `\\${t.slice(i)}`);
        }
        return oe.normalize(t);
      },
      relative(e, t) {
        if ((K(e, 'from'), K(t, 'to'), e === t)) return '';
        const n = oe.resolve(e),
          r = oe.resolve(t);
        if (n === r || (e = n.toLowerCase()) === (t = r.toLowerCase()))
          return '';
        let i = 0;
        for (; i < e.length && 92 === e.charCodeAt(i); ) i++;
        let a = e.length;
        for (; a - 1 > i && 92 === e.charCodeAt(a - 1); ) a--;
        const o = a - i;
        let c = 0;
        for (; c < t.length && 92 === t.charCodeAt(c); ) c++;
        let l = t.length;
        for (; l - 1 > c && 92 === t.charCodeAt(l - 1); ) l--;
        const u = l - c,
          h = o < u ? o : u;
        let d = -1,
          f = 0;
        for (; f < h; f++) {
          const _ = e.charCodeAt(i + f);
          if (_ !== t.charCodeAt(c + f)) break;
          92 === _ && (d = f);
        }
        if (f !== h) {
          if (-1 === d) return r;
        } else {
          if (u > h) {
            if (92 === t.charCodeAt(c + f)) return r.slice(c + f + 1);
            if (2 === f) return r.slice(c + f);
          }
          o > h && (92 === e.charCodeAt(i + f) ? (d = f) : 2 === f && (d = 3)),
            -1 === d && (d = 0);
        }
        let g = '';
        for (f = i + d + 1; f <= a; ++f)
          (f === a || 92 === e.charCodeAt(f)) &&
            (g += 0 === g.length ? '..' : '\\..');
        return (
          (c += d),
          g.length > 0
            ? `${g}${r.slice(c, l)}`
            : (92 === r.charCodeAt(c) && ++c, r.slice(c, l))
        );
      },
      toNamespacedPath(e) {
        if ('string' != typeof e) return e;
        if (0 === e.length) return '';
        const t = oe.resolve(e);
        if (t.length <= 2) return e;
        if (92 === t.charCodeAt(0)) {
          if (92 === t.charCodeAt(1)) {
            const n = t.charCodeAt(2);
            if (63 !== n && 46 !== n) return `\\\\?\\UNC\\${t.slice(2)}`;
          }
        } else if (
          Ie(t.charCodeAt(0)) &&
          58 === t.charCodeAt(1) &&
          92 === t.charCodeAt(2)
        )
          return `\\\\?\\${t}`;
        return e;
      },
      dirname(e) {
        K(e, 'path');
        const t = e.length;
        if (0 === t) return '.';
        let n = -1,
          r = 0;
        const i = e.charCodeAt(0);
        if (1 === t) return V(i) ? e : '.';
        if (V(i)) {
          if (((n = r = 1), V(e.charCodeAt(1)))) {
            let c = 2,
              l = c;
            for (; c < t && !V(e.charCodeAt(c)); ) c++;
            if (c < t && c !== l) {
              for (l = c; c < t && V(e.charCodeAt(c)); ) c++;
              if (c < t && c !== l) {
                for (l = c; c < t && !V(e.charCodeAt(c)); ) c++;
                if (c === t) return e;
                c !== l && (n = r = c + 1);
              }
            }
          }
        } else
          Ie(i) &&
            58 === e.charCodeAt(1) &&
            ((n = t > 2 && V(e.charCodeAt(2)) ? 3 : 2), (r = n));
        let a = -1,
          o = !0;
        for (let c = t - 1; c >= r; --c)
          if (V(e.charCodeAt(c))) {
            if (!o) {
              a = c;
              break;
            }
          } else o = !1;
        if (-1 === a) {
          if (-1 === n) return '.';
          a = n;
        }
        return e.slice(0, a);
      },
      basename(e, t) {
        void 0 !== t && K(t, 'ext'), K(e, 'path');
        let a,
          n = 0,
          r = -1,
          i = !0;
        if (
          (e.length >= 2 &&
            Ie(e.charCodeAt(0)) &&
            58 === e.charCodeAt(1) &&
            (n = 2),
          void 0 !== t && t.length > 0 && t.length <= e.length)
        ) {
          if (t === e) return '';
          let o = t.length - 1,
            c = -1;
          for (a = e.length - 1; a >= n; --a) {
            const l = e.charCodeAt(a);
            if (V(l)) {
              if (!i) {
                n = a + 1;
                break;
              }
            } else
              -1 === c && ((i = !1), (c = a + 1)),
                o >= 0 &&
                  (l === t.charCodeAt(o)
                    ? -1 == --o && (r = a)
                    : ((o = -1), (r = c)));
          }
          return n === r ? (r = c) : -1 === r && (r = e.length), e.slice(n, r);
        }
        for (a = e.length - 1; a >= n; --a)
          if (V(e.charCodeAt(a))) {
            if (!i) {
              n = a + 1;
              break;
            }
          } else -1 === r && ((i = !1), (r = a + 1));
        return -1 === r ? '' : e.slice(n, r);
      },
      extname(e) {
        K(e, 'path');
        let t = 0,
          n = -1,
          r = 0,
          i = -1,
          a = !0,
          o = 0;
        e.length >= 2 &&
          58 === e.charCodeAt(1) &&
          Ie(e.charCodeAt(0)) &&
          (t = r = 2);
        for (let c = e.length - 1; c >= t; --c) {
          const l = e.charCodeAt(c);
          if (V(l)) {
            if (!a) {
              r = c + 1;
              break;
            }
          } else
            -1 === i && ((a = !1), (i = c + 1)),
              46 === l
                ? -1 === n
                  ? (n = c)
                  : 1 !== o && (o = 1)
                : -1 !== n && (o = -1);
        }
        return -1 === n ||
          -1 === i ||
          0 === o ||
          (1 === o && n === i - 1 && n === r + 1)
          ? ''
          : e.slice(n, i);
      },
      format: xr.bind(null, '\\'),
      parse(e) {
        K(e, 'path');
        const t = { root: '', dir: '', base: '', ext: '', name: '' };
        if (0 === e.length) return t;
        const n = e.length;
        let r = 0,
          i = e.charCodeAt(0);
        if (1 === n)
          return V(i) ? ((t.root = t.dir = e), t) : ((t.base = t.name = e), t);
        if (V(i)) {
          if (((r = 1), V(e.charCodeAt(1)))) {
            let d = 2,
              f = d;
            for (; d < n && !V(e.charCodeAt(d)); ) d++;
            if (d < n && d !== f) {
              for (f = d; d < n && V(e.charCodeAt(d)); ) d++;
              if (d < n && d !== f) {
                for (f = d; d < n && !V(e.charCodeAt(d)); ) d++;
                d === n ? (r = d) : d !== f && (r = d + 1);
              }
            }
          }
        } else if (Ie(i) && 58 === e.charCodeAt(1)) {
          if (n <= 2) return (t.root = t.dir = e), t;
          if (((r = 2), V(e.charCodeAt(2)))) {
            if (3 === n) return (t.root = t.dir = e), t;
            r = 3;
          }
        }
        r > 0 && (t.root = e.slice(0, r));
        let a = -1,
          o = r,
          c = -1,
          l = !0,
          u = e.length - 1,
          h = 0;
        for (; u >= r; --u)
          if (((i = e.charCodeAt(u)), V(i))) {
            if (!l) {
              o = u + 1;
              break;
            }
          } else
            -1 === c && ((l = !1), (c = u + 1)),
              46 === i
                ? -1 === a
                  ? (a = u)
                  : 1 !== h && (h = 1)
                : -1 !== a && (h = -1);
        return (
          -1 !== c &&
            (-1 === a || 0 === h || (1 === h && a === c - 1 && a === o + 1)
              ? (t.base = t.name = e.slice(o, c))
              : ((t.name = e.slice(o, a)),
                (t.base = e.slice(o, c)),
                (t.ext = e.slice(a, c)))),
          (t.dir = o > 0 && o !== r ? e.slice(0, o - 1) : t.root),
          t
        );
      },
      sep: '\\',
      delimiter: ';',
      win32: null,
      posix: null,
    },
    ce = {
      resolve(...e) {
        let t = '',
          n = !1;
        for (let r = e.length - 1; r >= -1 && !n; r--) {
          const i = r >= 0 ? e[r] : pn();
          K(i, 'path'),
            0 !== i.length && ((t = `${i}/${t}`), (n = 47 === i.charCodeAt(0)));
        }
        return (t = Nt(t, !n, '/', gn)), n ? `/${t}` : t.length > 0 ? t : '.';
      },
      normalize(e) {
        if ((K(e, 'path'), 0 === e.length)) return '.';
        const t = 47 === e.charCodeAt(0),
          n = 47 === e.charCodeAt(e.length - 1);
        return 0 === (e = Nt(e, !t, '/', gn)).length
          ? t
            ? '/'
            : n
            ? './'
            : '.'
          : (n && (e += '/'), t ? `/${e}` : e);
      },
      isAbsolute: (e) => (K(e, 'path'), e.length > 0 && 47 === e.charCodeAt(0)),
      join(...e) {
        if (0 === e.length) return '.';
        let t;
        for (let n = 0; n < e.length; ++n) {
          const r = e[n];
          K(r, 'path'),
            r.length > 0 && (void 0 === t ? (t = r) : (t += `/${r}`));
        }
        return void 0 === t ? '.' : ce.normalize(t);
      },
      relative(e, t) {
        if (
          (K(e, 'from'),
          K(t, 'to'),
          e === t || (e = ce.resolve(e)) === (t = ce.resolve(t)))
        )
          return '';
        const r = e.length,
          i = r - 1,
          o = t.length - 1,
          c = i < o ? i : o;
        let l = -1,
          u = 0;
        for (; u < c; u++) {
          const d = e.charCodeAt(1 + u);
          if (d !== t.charCodeAt(1 + u)) break;
          47 === d && (l = u);
        }
        if (u === c)
          if (o > c) {
            if (47 === t.charCodeAt(1 + u)) return t.slice(1 + u + 1);
            if (0 === u) return t.slice(1 + u);
          } else
            i > c &&
              (47 === e.charCodeAt(1 + u) ? (l = u) : 0 === u && (l = 0));
        let h = '';
        for (u = 1 + l + 1; u <= r; ++u)
          (u === r || 47 === e.charCodeAt(u)) &&
            (h += 0 === h.length ? '..' : '/..');
        return `${h}${t.slice(1 + l)}`;
      },
      toNamespacedPath: (e) => e,
      dirname(e) {
        if ((K(e, 'path'), 0 === e.length)) return '.';
        const t = 47 === e.charCodeAt(0);
        let n = -1,
          r = !0;
        for (let i = e.length - 1; i >= 1; --i)
          if (47 === e.charCodeAt(i)) {
            if (!r) {
              n = i;
              break;
            }
          } else r = !1;
        return -1 === n ? (t ? '/' : '.') : t && 1 === n ? '//' : e.slice(0, n);
      },
      basename(e, t) {
        void 0 !== t && K(t, 'ext'), K(e, 'path');
        let a,
          n = 0,
          r = -1,
          i = !0;
        if (void 0 !== t && t.length > 0 && t.length <= e.length) {
          if (t === e) return '';
          let o = t.length - 1,
            c = -1;
          for (a = e.length - 1; a >= 0; --a) {
            const l = e.charCodeAt(a);
            if (47 === l) {
              if (!i) {
                n = a + 1;
                break;
              }
            } else
              -1 === c && ((i = !1), (c = a + 1)),
                o >= 0 &&
                  (l === t.charCodeAt(o)
                    ? -1 == --o && (r = a)
                    : ((o = -1), (r = c)));
          }
          return n === r ? (r = c) : -1 === r && (r = e.length), e.slice(n, r);
        }
        for (a = e.length - 1; a >= 0; --a)
          if (47 === e.charCodeAt(a)) {
            if (!i) {
              n = a + 1;
              break;
            }
          } else -1 === r && ((i = !1), (r = a + 1));
        return -1 === r ? '' : e.slice(n, r);
      },
      extname(e) {
        K(e, 'path');
        let t = -1,
          n = 0,
          r = -1,
          i = !0,
          a = 0;
        for (let o = e.length - 1; o >= 0; --o) {
          const c = e.charCodeAt(o);
          if (47 !== c)
            -1 === r && ((i = !1), (r = o + 1)),
              46 === c
                ? -1 === t
                  ? (t = o)
                  : 1 !== a && (a = 1)
                : -1 !== t && (a = -1);
          else if (!i) {
            n = o + 1;
            break;
          }
        }
        return -1 === t ||
          -1 === r ||
          0 === a ||
          (1 === a && t === r - 1 && t === n + 1)
          ? ''
          : e.slice(t, r);
      },
      format: xr.bind(null, '/'),
      parse(e) {
        K(e, 'path');
        const t = { root: '', dir: '', base: '', ext: '', name: '' };
        if (0 === e.length) return t;
        const n = 47 === e.charCodeAt(0);
        let r;
        n ? ((t.root = '/'), (r = 1)) : (r = 0);
        let i = -1,
          a = 0,
          o = -1,
          c = !0,
          l = e.length - 1,
          u = 0;
        for (; l >= r; --l) {
          const h = e.charCodeAt(l);
          if (47 !== h)
            -1 === o && ((c = !1), (o = l + 1)),
              46 === h
                ? -1 === i
                  ? (i = l)
                  : 1 !== u && (u = 1)
                : -1 !== i && (u = -1);
          else if (!c) {
            a = l + 1;
            break;
          }
        }
        if (-1 !== o) {
          const h = 0 === a && n ? 1 : a;
          -1 === i || 0 === u || (1 === u && i === o - 1 && i === a + 1)
            ? (t.base = t.name = e.slice(h, o))
            : ((t.name = e.slice(h, i)),
              (t.base = e.slice(h, o)),
              (t.ext = e.slice(i, o)));
        }
        return a > 0 ? (t.dir = e.slice(0, a - 1)) : n && (t.dir = '/'), t;
      },
      sep: '/',
      delimiter: ':',
      win32: null,
      posix: null,
    };
  (ce.win32 = oe.win32 = oe), (ce.posix = oe.posix = ce);
  const Ts = /^\w[\w\d+.-]*$/,
    ks = /^\//,
    Cs = /^\/\//;
  function Lr(e, t) {
    if (!e.scheme && t)
      throw new Error(
        `[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`
      );
    if (e.scheme && !Ts.test(e.scheme))
      throw new Error('[UriError]: Scheme contains illegal characters.');
    if (e.path)
      if (e.authority) {
        if (!ks.test(e.path))
          throw new Error(
            '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character'
          );
      } else if (Cs.test(e.path))
        throw new Error(
          '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")'
        );
  }
  const X = '',
    _e = '/',
    xs = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
  class Be {
    constructor(t, n, r, i, a, o = !1) {
      'object' == typeof t
        ? ((this.scheme = t.scheme || X),
          (this.authority = t.authority || X),
          (this.path = t.path || X),
          (this.query = t.query || X),
          (this.fragment = t.fragment || X))
        : ((this.scheme = (function As(e, t) {
            return e || t ? e : 'file';
          })(t, o)),
          (this.authority = n || X),
          (this.path = (function Ss(e, t) {
            switch (e) {
              case 'https':
              case 'http':
              case 'file':
                t ? t[0] !== _e && (t = _e + t) : (t = _e);
            }
            return t;
          })(this.scheme, r || X)),
          (this.query = i || X),
          (this.fragment = a || X),
          Lr(this, o));
    }
    static isUri(t) {
      return (
        t instanceof Be ||
        (!!t &&
          'string' == typeof t.authority &&
          'string' == typeof t.fragment &&
          'string' == typeof t.path &&
          'string' == typeof t.query &&
          'string' == typeof t.scheme &&
          'string' == typeof t.fsPath &&
          'function' == typeof t.with &&
          'function' == typeof t.toString)
      );
    }
    get fsPath() {
      return bn(this, !1);
    }
    with(t) {
      if (!t) return this;
      let { scheme: n, authority: r, path: i, query: a, fragment: o } = t;
      return (
        void 0 === n ? (n = this.scheme) : null === n && (n = X),
        void 0 === r ? (r = this.authority) : null === r && (r = X),
        void 0 === i ? (i = this.path) : null === i && (i = X),
        void 0 === a ? (a = this.query) : null === a && (a = X),
        void 0 === o ? (o = this.fragment) : null === o && (o = X),
        n === this.scheme &&
        r === this.authority &&
        i === this.path &&
        a === this.query &&
        o === this.fragment
          ? this
          : new Qe(n, r, i, a, o)
      );
    }
    static parse(t, n = !1) {
      const r = xs.exec(t);
      return r
        ? new Qe(
            r[2] || X,
            It(r[4] || X),
            It(r[5] || X),
            It(r[7] || X),
            It(r[9] || X),
            n
          )
        : new Qe(X, X, X, X, X);
    }
    static file(t) {
      let n = X;
      if ((nt && (t = t.replace(/\\/g, _e)), t[0] === _e && t[1] === _e)) {
        const r = t.indexOf(_e, 2);
        -1 === r
          ? ((n = t.substring(2)), (t = _e))
          : ((n = t.substring(2, r)), (t = t.substring(r) || _e));
      }
      return new Qe('file', n, t, X, X);
    }
    static from(t) {
      const n = new Qe(t.scheme, t.authority, t.path, t.query, t.fragment);
      return Lr(n, !0), n;
    }
    static joinPath(t, ...n) {
      if (!t.path)
        throw new Error('[UriError]: cannot call joinPath on URI without path');
      let r;
      return (
        (r =
          nt && 'file' === t.scheme
            ? Be.file(oe.join(bn(t, !0), ...n)).path
            : ce.join(t.path, ...n)),
        t.with({ path: r })
      );
    }
    toString(t = !1) {
      return wn(this, t);
    }
    toJSON() {
      return this;
    }
    static revive(t) {
      if (t) {
        if (t instanceof Be) return t;
        {
          const n = new Qe(t);
          return (
            (n._formatted = t.external),
            (n._fsPath = t._sep === Er ? t.fsPath : null),
            n
          );
        }
      }
      return t;
    }
  }
  const Er = nt ? 1 : void 0;
  class Qe extends Be {
    constructor() {
      super(...arguments), (this._formatted = null), (this._fsPath = null);
    }
    get fsPath() {
      return this._fsPath || (this._fsPath = bn(this, !1)), this._fsPath;
    }
    toString(t = !1) {
      return t
        ? wn(this, !0)
        : (this._formatted || (this._formatted = wn(this, !1)),
          this._formatted);
    }
    toJSON() {
      const t = { $mid: 1 };
      return (
        this._fsPath && ((t.fsPath = this._fsPath), (t._sep = Er)),
        this._formatted && (t.external = this._formatted),
        this.path && (t.path = this.path),
        this.scheme && (t.scheme = this.scheme),
        this.authority && (t.authority = this.authority),
        this.query && (t.query = this.query),
        this.fragment && (t.fragment = this.fragment),
        t
      );
    }
  }
  const Mr = {
    58: '%3A',
    47: '%2F',
    63: '%3F',
    35: '%23',
    91: '%5B',
    93: '%5D',
    64: '%40',
    33: '%21',
    36: '%24',
    38: '%26',
    39: '%27',
    40: '%28',
    41: '%29',
    42: '%2A',
    43: '%2B',
    44: '%2C',
    59: '%3B',
    61: '%3D',
    32: '%20',
  };
  function Dr(e, t) {
    let n,
      r = -1;
    for (let i = 0; i < e.length; i++) {
      const a = e.charCodeAt(i);
      if (
        (a >= 97 && a <= 122) ||
        (a >= 65 && a <= 90) ||
        (a >= 48 && a <= 57) ||
        45 === a ||
        46 === a ||
        95 === a ||
        126 === a ||
        (t && 47 === a)
      )
        -1 !== r && ((n += encodeURIComponent(e.substring(r, i))), (r = -1)),
          void 0 !== n && (n += e.charAt(i));
      else {
        void 0 === n && (n = e.substr(0, i));
        const o = Mr[a];
        void 0 !== o
          ? (-1 !== r &&
              ((n += encodeURIComponent(e.substring(r, i))), (r = -1)),
            (n += o))
          : -1 === r && (r = i);
      }
    }
    return (
      -1 !== r && (n += encodeURIComponent(e.substring(r))),
      void 0 !== n ? n : e
    );
  }
  function Ls(e) {
    let t;
    for (let n = 0; n < e.length; n++) {
      const r = e.charCodeAt(n);
      35 === r || 63 === r
        ? (void 0 === t && (t = e.substr(0, n)), (t += Mr[r]))
        : void 0 !== t && (t += e[n]);
    }
    return void 0 !== t ? t : e;
  }
  function bn(e, t) {
    let n;
    return (
      (n =
        e.authority && e.path.length > 1 && 'file' === e.scheme
          ? `//${e.authority}${e.path}`
          : 47 === e.path.charCodeAt(0) &&
            ((e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90) ||
              (e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122)) &&
            58 === e.path.charCodeAt(2)
          ? t
            ? e.path.substr(1)
            : e.path[1].toLowerCase() + e.path.substr(2)
          : e.path),
      nt && (n = n.replace(/\//g, '\\')),
      n
    );
  }
  function wn(e, t) {
    const n = t ? Ls : Dr;
    let r = '',
      { scheme: i, authority: a, path: o, query: c, fragment: l } = e;
    if (
      (i && ((r += i), (r += ':')),
      (a || 'file' === i) && ((r += _e), (r += _e)),
      a)
    ) {
      let u = a.indexOf('@');
      if (-1 !== u) {
        const h = a.substr(0, u);
        (a = a.substr(u + 1)),
          (u = h.indexOf(':')),
          -1 === u
            ? (r += n(h, !1))
            : ((r += n(h.substr(0, u), !1)),
              (r += ':'),
              (r += n(h.substr(u + 1), !1))),
          (r += '@');
      }
      (a = a.toLowerCase()),
        (u = a.indexOf(':')),
        -1 === u
          ? (r += n(a, !1))
          : ((r += n(a.substr(0, u), !1)), (r += a.substr(u)));
    }
    if (o) {
      if (o.length >= 3 && 47 === o.charCodeAt(0) && 58 === o.charCodeAt(2)) {
        const u = o.charCodeAt(1);
        u >= 65 &&
          u <= 90 &&
          (o = `/${String.fromCharCode(u + 32)}:${o.substr(3)}`);
      } else if (o.length >= 2 && 58 === o.charCodeAt(1)) {
        const u = o.charCodeAt(0);
        u >= 65 &&
          u <= 90 &&
          (o = `${String.fromCharCode(u + 32)}:${o.substr(2)}`);
      }
      r += n(o, !0);
    }
    return (
      c && ((r += '?'), (r += n(c, !1))),
      l && ((r += '#'), (r += t ? l : Dr(l, !1))),
      r
    );
  }
  function Rr(e) {
    try {
      return decodeURIComponent(e);
    } catch {
      return e.length > 3 ? e.substr(0, 3) + Rr(e.substr(3)) : e;
    }
  }
  const Nr = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
  function It(e) {
    return e.match(Nr) ? e.replace(Nr, (t) => Rr(t)) : e;
  }
  class he {
    constructor(t, n) {
      (this.lineNumber = t), (this.column = n);
    }
    with(t = this.lineNumber, n = this.column) {
      return t === this.lineNumber && n === this.column ? this : new he(t, n);
    }
    delta(t = 0, n = 0) {
      return this.with(this.lineNumber + t, this.column + n);
    }
    equals(t) {
      return he.equals(this, t);
    }
    static equals(t, n) {
      return (
        (!t && !n) ||
        (!!t && !!n && t.lineNumber === n.lineNumber && t.column === n.column)
      );
    }
    isBefore(t) {
      return he.isBefore(this, t);
    }
    static isBefore(t, n) {
      return (
        t.lineNumber < n.lineNumber ||
        (!(n.lineNumber < t.lineNumber) && t.column < n.column)
      );
    }
    isBeforeOrEqual(t) {
      return he.isBeforeOrEqual(this, t);
    }
    static isBeforeOrEqual(t, n) {
      return (
        t.lineNumber < n.lineNumber ||
        (!(n.lineNumber < t.lineNumber) && t.column <= n.column)
      );
    }
    static compare(t, n) {
      const r = 0 | t.lineNumber,
        i = 0 | n.lineNumber;
      return r === i ? (0 | t.column) - (0 | n.column) : r - i;
    }
    clone() {
      return new he(this.lineNumber, this.column);
    }
    toString() {
      return '(' + this.lineNumber + ',' + this.column + ')';
    }
    static lift(t) {
      return new he(t.lineNumber, t.column);
    }
    static isIPosition(t) {
      return (
        t && 'number' == typeof t.lineNumber && 'number' == typeof t.column
      );
    }
  }
  class Z {
    constructor(t, n, r, i) {
      t > r || (t === r && n > i)
        ? ((this.startLineNumber = r),
          (this.startColumn = i),
          (this.endLineNumber = t),
          (this.endColumn = n))
        : ((this.startLineNumber = t),
          (this.startColumn = n),
          (this.endLineNumber = r),
          (this.endColumn = i));
    }
    isEmpty() {
      return Z.isEmpty(this);
    }
    static isEmpty(t) {
      return (
        t.startLineNumber === t.endLineNumber && t.startColumn === t.endColumn
      );
    }
    containsPosition(t) {
      return Z.containsPosition(this, t);
    }
    static containsPosition(t, n) {
      return !(
        n.lineNumber < t.startLineNumber ||
        n.lineNumber > t.endLineNumber ||
        (n.lineNumber === t.startLineNumber && n.column < t.startColumn) ||
        (n.lineNumber === t.endLineNumber && n.column > t.endColumn)
      );
    }
    static strictContainsPosition(t, n) {
      return !(
        n.lineNumber < t.startLineNumber ||
        n.lineNumber > t.endLineNumber ||
        (n.lineNumber === t.startLineNumber && n.column <= t.startColumn) ||
        (n.lineNumber === t.endLineNumber && n.column >= t.endColumn)
      );
    }
    containsRange(t) {
      return Z.containsRange(this, t);
    }
    static containsRange(t, n) {
      return !(
        n.startLineNumber < t.startLineNumber ||
        n.endLineNumber < t.startLineNumber ||
        n.startLineNumber > t.endLineNumber ||
        n.endLineNumber > t.endLineNumber ||
        (n.startLineNumber === t.startLineNumber &&
          n.startColumn < t.startColumn) ||
        (n.endLineNumber === t.endLineNumber && n.endColumn > t.endColumn)
      );
    }
    strictContainsRange(t) {
      return Z.strictContainsRange(this, t);
    }
    static strictContainsRange(t, n) {
      return !(
        n.startLineNumber < t.startLineNumber ||
        n.endLineNumber < t.startLineNumber ||
        n.startLineNumber > t.endLineNumber ||
        n.endLineNumber > t.endLineNumber ||
        (n.startLineNumber === t.startLineNumber &&
          n.startColumn <= t.startColumn) ||
        (n.endLineNumber === t.endLineNumber && n.endColumn >= t.endColumn)
      );
    }
    plusRange(t) {
      return Z.plusRange(this, t);
    }
    static plusRange(t, n) {
      let r, i, a, o;
      return (
        n.startLineNumber < t.startLineNumber
          ? ((r = n.startLineNumber), (i = n.startColumn))
          : n.startLineNumber === t.startLineNumber
          ? ((r = n.startLineNumber),
            (i = Math.min(n.startColumn, t.startColumn)))
          : ((r = t.startLineNumber), (i = t.startColumn)),
        n.endLineNumber > t.endLineNumber
          ? ((a = n.endLineNumber), (o = n.endColumn))
          : n.endLineNumber === t.endLineNumber
          ? ((a = n.endLineNumber), (o = Math.max(n.endColumn, t.endColumn)))
          : ((a = t.endLineNumber), (o = t.endColumn)),
        new Z(r, i, a, o)
      );
    }
    intersectRanges(t) {
      return Z.intersectRanges(this, t);
    }
    static intersectRanges(t, n) {
      let r = t.startLineNumber,
        i = t.startColumn,
        a = t.endLineNumber,
        o = t.endColumn;
      const c = n.startLineNumber,
        l = n.startColumn,
        u = n.endLineNumber,
        h = n.endColumn;
      return (
        r < c ? ((r = c), (i = l)) : r === c && (i = Math.max(i, l)),
        a > u ? ((a = u), (o = h)) : a === u && (o = Math.min(o, h)),
        r > a || (r === a && i > o) ? null : new Z(r, i, a, o)
      );
    }
    equalsRange(t) {
      return Z.equalsRange(this, t);
    }
    static equalsRange(t, n) {
      return (
        !!t &&
        !!n &&
        t.startLineNumber === n.startLineNumber &&
        t.startColumn === n.startColumn &&
        t.endLineNumber === n.endLineNumber &&
        t.endColumn === n.endColumn
      );
    }
    getEndPosition() {
      return Z.getEndPosition(this);
    }
    static getEndPosition(t) {
      return new he(t.endLineNumber, t.endColumn);
    }
    getStartPosition() {
      return Z.getStartPosition(this);
    }
    static getStartPosition(t) {
      return new he(t.startLineNumber, t.startColumn);
    }
    toString() {
      return (
        '[' +
        this.startLineNumber +
        ',' +
        this.startColumn +
        ' -> ' +
        this.endLineNumber +
        ',' +
        this.endColumn +
        ']'
      );
    }
    setEndPosition(t, n) {
      return new Z(this.startLineNumber, this.startColumn, t, n);
    }
    setStartPosition(t, n) {
      return new Z(t, n, this.endLineNumber, this.endColumn);
    }
    collapseToStart() {
      return Z.collapseToStart(this);
    }
    static collapseToStart(t) {
      return new Z(
        t.startLineNumber,
        t.startColumn,
        t.startLineNumber,
        t.startColumn
      );
    }
    static fromPositions(t, n = t) {
      return new Z(t.lineNumber, t.column, n.lineNumber, n.column);
    }
    static lift(t) {
      return t
        ? new Z(t.startLineNumber, t.startColumn, t.endLineNumber, t.endColumn)
        : null;
    }
    static isIRange(t) {
      return (
        t &&
        'number' == typeof t.startLineNumber &&
        'number' == typeof t.startColumn &&
        'number' == typeof t.endLineNumber &&
        'number' == typeof t.endColumn
      );
    }
    static areIntersectingOrTouching(t, n) {
      return !(
        t.endLineNumber < n.startLineNumber ||
        (t.endLineNumber === n.startLineNumber &&
          t.endColumn < n.startColumn) ||
        n.endLineNumber < t.startLineNumber ||
        (n.endLineNumber === t.startLineNumber && n.endColumn < t.startColumn)
      );
    }
    static areIntersecting(t, n) {
      return !(
        t.endLineNumber < n.startLineNumber ||
        (t.endLineNumber === n.startLineNumber &&
          t.endColumn <= n.startColumn) ||
        n.endLineNumber < t.startLineNumber ||
        (n.endLineNumber === t.startLineNumber && n.endColumn <= t.startColumn)
      );
    }
    static compareRangesUsingStarts(t, n) {
      if (t && n) {
        const a = 0 | t.startLineNumber,
          o = 0 | n.startLineNumber;
        if (a === o) {
          const c = 0 | t.startColumn,
            l = 0 | n.startColumn;
          if (c === l) {
            const u = 0 | t.endLineNumber,
              h = 0 | n.endLineNumber;
            return u === h ? (0 | t.endColumn) - (0 | n.endColumn) : u - h;
          }
          return c - l;
        }
        return a - o;
      }
      return (t ? 1 : 0) - (n ? 1 : 0);
    }
    static compareRangesUsingEnds(t, n) {
      return t.endLineNumber === n.endLineNumber
        ? t.endColumn === n.endColumn
          ? t.startLineNumber === n.startLineNumber
            ? t.startColumn - n.startColumn
            : t.startLineNumber - n.startLineNumber
          : t.endColumn - n.endColumn
        : t.endLineNumber - n.endLineNumber;
    }
    static spansMultipleLines(t) {
      return t.endLineNumber > t.startLineNumber;
    }
    toJSON() {
      return this;
    }
  }
  function Ir(e, t, n, r) {
    return new De(e, t, n).ComputeDiff(r);
  }
  class Ur {
    constructor(t) {
      const n = [],
        r = [];
      for (let i = 0, a = t.length; i < a; i++)
        (n[i] = _n(t[i], 1)), (r[i] = vn(t[i], 1));
      (this.lines = t), (this._startColumns = n), (this._endColumns = r);
    }
    getElements() {
      const t = [];
      for (let n = 0, r = this.lines.length; n < r; n++)
        t[n] = this.lines[n].substring(
          this._startColumns[n] - 1,
          this._endColumns[n] - 1
        );
      return t;
    }
    getStrictElement(t) {
      return this.lines[t];
    }
    getStartLineNumber(t) {
      return t + 1;
    }
    getEndLineNumber(t) {
      return t + 1;
    }
    createCharSequence(t, n, r) {
      const i = [],
        a = [],
        o = [];
      let c = 0;
      for (let l = n; l <= r; l++) {
        const u = this.lines[l],
          d = t ? this._endColumns[l] : u.length + 1;
        for (let f = t ? this._startColumns[l] : 1; f < d; f++)
          (i[c] = u.charCodeAt(f - 1)), (a[c] = l + 1), (o[c] = f), c++;
        !t &&
          l < r &&
          ((i[c] = 10), (a[c] = l + 1), (o[c] = u.length + 1), c++);
      }
      return new Ms(i, a, o);
    }
  }
  class Ms {
    constructor(t, n, r) {
      (this._charCodes = t), (this._lineNumbers = n), (this._columns = r);
    }
    toString() {
      return (
        '[' +
        this._charCodes
          .map(
            (t, n) =>
              (10 === t ? '\\n' : String.fromCharCode(t)) +
              `-(${this._lineNumbers[n]},${this._columns[n]})`
          )
          .join(', ') +
        ']'
      );
    }
    _assertIndex(t, n) {
      if (t < 0 || t >= n.length) throw new Error('Illegal index');
    }
    getElements() {
      return this._charCodes;
    }
    getStartLineNumber(t) {
      return t > 0 && t === this._lineNumbers.length
        ? this.getEndLineNumber(t - 1)
        : (this._assertIndex(t, this._lineNumbers), this._lineNumbers[t]);
    }
    getEndLineNumber(t) {
      return -1 === t
        ? this.getStartLineNumber(t + 1)
        : (this._assertIndex(t, this._lineNumbers),
          10 === this._charCodes[t]
            ? this._lineNumbers[t] + 1
            : this._lineNumbers[t]);
    }
    getStartColumn(t) {
      return t > 0 && t === this._columns.length
        ? this.getEndColumn(t - 1)
        : (this._assertIndex(t, this._columns), this._columns[t]);
    }
    getEndColumn(t) {
      return -1 === t
        ? this.getStartColumn(t + 1)
        : (this._assertIndex(t, this._columns),
          10 === this._charCodes[t] ? 1 : this._columns[t] + 1);
    }
  }
  class ot {
    constructor(t, n, r, i, a, o, c, l) {
      (this.originalStartLineNumber = t),
        (this.originalStartColumn = n),
        (this.originalEndLineNumber = r),
        (this.originalEndColumn = i),
        (this.modifiedStartLineNumber = a),
        (this.modifiedStartColumn = o),
        (this.modifiedEndLineNumber = c),
        (this.modifiedEndColumn = l);
    }
    static createFromDiffChange(t, n, r) {
      const i = n.getStartLineNumber(t.originalStart),
        a = n.getStartColumn(t.originalStart),
        o = n.getEndLineNumber(t.originalStart + t.originalLength - 1),
        c = n.getEndColumn(t.originalStart + t.originalLength - 1),
        l = r.getStartLineNumber(t.modifiedStart),
        u = r.getStartColumn(t.modifiedStart),
        h = r.getEndLineNumber(t.modifiedStart + t.modifiedLength - 1),
        d = r.getEndColumn(t.modifiedStart + t.modifiedLength - 1);
      return new ot(i, a, o, c, l, u, h, d);
    }
  }
  class lt {
    constructor(t, n, r, i, a) {
      (this.originalStartLineNumber = t),
        (this.originalEndLineNumber = n),
        (this.modifiedStartLineNumber = r),
        (this.modifiedEndLineNumber = i),
        (this.charChanges = a);
    }
    static createFromDiffResult(t, n, r, i, a, o, c) {
      let l, u, h, d, f;
      if (
        (0 === n.originalLength
          ? ((l = r.getStartLineNumber(n.originalStart) - 1), (u = 0))
          : ((l = r.getStartLineNumber(n.originalStart)),
            (u = r.getEndLineNumber(n.originalStart + n.originalLength - 1))),
        0 === n.modifiedLength
          ? ((h = i.getStartLineNumber(n.modifiedStart) - 1), (d = 0))
          : ((h = i.getStartLineNumber(n.modifiedStart)),
            (d = i.getEndLineNumber(n.modifiedStart + n.modifiedLength - 1))),
        o &&
          n.originalLength > 0 &&
          n.originalLength < 20 &&
          n.modifiedLength > 0 &&
          n.modifiedLength < 20 &&
          a())
      ) {
        const g = r.createCharSequence(
            t,
            n.originalStart,
            n.originalStart + n.originalLength - 1
          ),
          _ = i.createCharSequence(
            t,
            n.modifiedStart,
            n.modifiedStart + n.modifiedLength - 1
          );
        if (g.getElements().length > 0 && _.getElements().length > 0) {
          let b = Ir(g, _, a, !0).changes;
          c &&
            (b = (function Ds(e) {
              if (e.length <= 1) return e;
              const t = [e[0]];
              let n = t[0];
              for (let r = 1, i = e.length; r < i; r++) {
                const a = e[r];
                Math.min(
                  a.originalStart - (n.originalStart + n.originalLength),
                  a.modifiedStart - (n.modifiedStart + n.modifiedLength)
                ) < 3
                  ? ((n.originalLength =
                      a.originalStart + a.originalLength - n.originalStart),
                    (n.modifiedLength =
                      a.modifiedStart + a.modifiedLength - n.modifiedStart))
                  : (t.push(a), (n = a));
              }
              return t;
            })(b)),
            (f = []);
          for (let y = 0, k = b.length; y < k; y++)
            f.push(ot.createFromDiffChange(b[y], g, _));
        }
      }
      return new lt(l, u, h, d, f);
    }
  }
  class Rs {
    constructor(t, n, r) {
      (this.shouldComputeCharChanges = r.shouldComputeCharChanges),
        (this.shouldPostProcessCharChanges = r.shouldPostProcessCharChanges),
        (this.shouldIgnoreTrimWhitespace = r.shouldIgnoreTrimWhitespace),
        (this.shouldMakePrettyDiff = r.shouldMakePrettyDiff),
        (this.originalLines = t),
        (this.modifiedLines = n),
        (this.original = new Ur(t)),
        (this.modified = new Ur(n)),
        (this.continueLineDiff = zr(r.maxComputationTime)),
        (this.continueCharDiff = zr(
          0 === r.maxComputationTime ? 0 : Math.min(r.maxComputationTime, 5e3)
        ));
    }
    computeDiff() {
      if (
        1 === this.original.lines.length &&
        0 === this.original.lines[0].length
      )
        return 1 === this.modified.lines.length &&
          0 === this.modified.lines[0].length
          ? { quitEarly: !1, changes: [] }
          : {
              quitEarly: !1,
              changes: [
                {
                  originalStartLineNumber: 1,
                  originalEndLineNumber: 1,
                  modifiedStartLineNumber: 1,
                  modifiedEndLineNumber: this.modified.lines.length,
                  charChanges: [
                    {
                      modifiedEndColumn: 0,
                      modifiedEndLineNumber: 0,
                      modifiedStartColumn: 0,
                      modifiedStartLineNumber: 0,
                      originalEndColumn: 0,
                      originalEndLineNumber: 0,
                      originalStartColumn: 0,
                      originalStartLineNumber: 0,
                    },
                  ],
                },
              ],
            };
      if (
        1 === this.modified.lines.length &&
        0 === this.modified.lines[0].length
      )
        return {
          quitEarly: !1,
          changes: [
            {
              originalStartLineNumber: 1,
              originalEndLineNumber: this.original.lines.length,
              modifiedStartLineNumber: 1,
              modifiedEndLineNumber: 1,
              charChanges: [
                {
                  modifiedEndColumn: 0,
                  modifiedEndLineNumber: 0,
                  modifiedStartColumn: 0,
                  modifiedStartLineNumber: 0,
                  originalEndColumn: 0,
                  originalEndLineNumber: 0,
                  originalStartColumn: 0,
                  originalStartLineNumber: 0,
                },
              ],
            },
          ],
        };
      const t = Ir(
          this.original,
          this.modified,
          this.continueLineDiff,
          this.shouldMakePrettyDiff
        ),
        n = t.changes,
        r = t.quitEarly;
      if (this.shouldIgnoreTrimWhitespace) {
        const c = [];
        for (let l = 0, u = n.length; l < u; l++)
          c.push(
            lt.createFromDiffResult(
              this.shouldIgnoreTrimWhitespace,
              n[l],
              this.original,
              this.modified,
              this.continueCharDiff,
              this.shouldComputeCharChanges,
              this.shouldPostProcessCharChanges
            )
          );
        return { quitEarly: r, changes: c };
      }
      const i = [];
      let a = 0,
        o = 0;
      for (let c = -1, l = n.length; c < l; c++) {
        const u = c + 1 < l ? n[c + 1] : null,
          h = u ? u.originalStart : this.originalLines.length,
          d = u ? u.modifiedStart : this.modifiedLines.length;
        for (; a < h && o < d; ) {
          const f = this.originalLines[a],
            g = this.modifiedLines[o];
          if (f !== g) {
            {
              let _ = _n(f, 1),
                b = _n(g, 1);
              for (
                ;
                _ > 1 && b > 1 && f.charCodeAt(_ - 2) === g.charCodeAt(b - 2);

              )
                _--, b--;
              (_ > 1 || b > 1) &&
                this._pushTrimWhitespaceCharChange(i, a + 1, 1, _, o + 1, 1, b);
            }
            {
              let _ = vn(f, 1),
                b = vn(g, 1);
              const y = f.length + 1,
                k = g.length + 1;
              for (
                ;
                _ < y && b < k && f.charCodeAt(_ - 1) === f.charCodeAt(b - 1);

              )
                _++, b++;
              (_ < y || b < k) &&
                this._pushTrimWhitespaceCharChange(i, a + 1, _, y, o + 1, b, k);
            }
          }
          a++, o++;
        }
        u &&
          (i.push(
            lt.createFromDiffResult(
              this.shouldIgnoreTrimWhitespace,
              u,
              this.original,
              this.modified,
              this.continueCharDiff,
              this.shouldComputeCharChanges,
              this.shouldPostProcessCharChanges
            )
          ),
          (a += u.originalLength),
          (o += u.modifiedLength));
      }
      return { quitEarly: r, changes: i };
    }
    _pushTrimWhitespaceCharChange(t, n, r, i, a, o, c) {
      if (this._mergeTrimWhitespaceCharChange(t, n, r, i, a, o, c)) return;
      let l;
      this.shouldComputeCharChanges && (l = [new ot(n, r, n, i, a, o, a, c)]),
        t.push(new lt(n, n, a, a, l));
    }
    _mergeTrimWhitespaceCharChange(t, n, r, i, a, o, c) {
      const l = t.length;
      if (0 === l) return !1;
      const u = t[l - 1];
      return (
        0 !== u.originalEndLineNumber &&
        0 !== u.modifiedEndLineNumber &&
        u.originalEndLineNumber + 1 === n &&
        u.modifiedEndLineNumber + 1 === a &&
        ((u.originalEndLineNumber = n),
        (u.modifiedEndLineNumber = a),
        this.shouldComputeCharChanges &&
          u.charChanges &&
          u.charChanges.push(new ot(n, r, n, i, a, o, a, c)),
        !0)
      );
    }
  }
  function _n(e, t) {
    const n = (function Qa(e) {
      for (let t = 0, n = e.length; t < n; t++) {
        const r = e.charCodeAt(t);
        if (32 !== r && 9 !== r) return t;
      }
      return -1;
    })(e);
    return -1 === n ? t : n + 1;
  }
  function vn(e, t) {
    const n = (function Ja(e, t = e.length - 1) {
      for (let n = t; n >= 0; n--) {
        const r = e.charCodeAt(n);
        if (32 !== r && 9 !== r) return n;
      }
      return -1;
    })(e);
    return -1 === n ? t : n + 2;
  }
  function zr(e) {
    if (0 === e) return () => !0;
    const t = Date.now();
    return () => Date.now() - t < e;
  }
  var Wr, e;
  function Br(e) {
    return e < 0 ? 0 : e > 255 ? 255 : 0 | e;
  }
  function Je(e) {
    return e < 0 ? 0 : e > 4294967295 ? 4294967295 : 0 | e;
  }
  ((e = Wr || (Wr = {})).isLessThan = function t(i) {
    return i < 0;
  }),
    (e.isGreaterThan = function n(i) {
      return i > 0;
    }),
    (e.isNeitherLessOrGreaterThan = function r(i) {
      return 0 === i;
    }),
    (e.greaterThan = 1),
    (e.lessThan = -1),
    (e.neitherLessOrGreaterThan = 0);
  class Hs {
    constructor(t) {
      (this.values = t),
        (this.prefixSum = new Uint32Array(t.length)),
        (this.prefixSumValidIndex = new Int32Array(1)),
        (this.prefixSumValidIndex[0] = -1);
    }
    insertValues(t, n) {
      t = Je(t);
      const r = this.values,
        i = this.prefixSum,
        a = n.length;
      return (
        0 !== a &&
        ((this.values = new Uint32Array(r.length + a)),
        this.values.set(r.subarray(0, t), 0),
        this.values.set(r.subarray(t), t + a),
        this.values.set(n, t),
        t - 1 < this.prefixSumValidIndex[0] &&
          (this.prefixSumValidIndex[0] = t - 1),
        (this.prefixSum = new Uint32Array(this.values.length)),
        this.prefixSumValidIndex[0] >= 0 &&
          this.prefixSum.set(i.subarray(0, this.prefixSumValidIndex[0] + 1)),
        !0)
      );
    }
    setValue(t, n) {
      return (
        (t = Je(t)),
        (n = Je(n)),
        this.values[t] !== n &&
          ((this.values[t] = n),
          t - 1 < this.prefixSumValidIndex[0] &&
            (this.prefixSumValidIndex[0] = t - 1),
          !0)
      );
    }
    removeValues(t, n) {
      (t = Je(t)), (n = Je(n));
      const r = this.values,
        i = this.prefixSum;
      if (t >= r.length) return !1;
      const a = r.length - t;
      return (
        n >= a && (n = a),
        0 !== n &&
          ((this.values = new Uint32Array(r.length - n)),
          this.values.set(r.subarray(0, t), 0),
          this.values.set(r.subarray(t + n), t),
          (this.prefixSum = new Uint32Array(this.values.length)),
          t - 1 < this.prefixSumValidIndex[0] &&
            (this.prefixSumValidIndex[0] = t - 1),
          this.prefixSumValidIndex[0] >= 0 &&
            this.prefixSum.set(i.subarray(0, this.prefixSumValidIndex[0] + 1)),
          !0)
      );
    }
    getTotalSum() {
      return 0 === this.values.length
        ? 0
        : this._getPrefixSum(this.values.length - 1);
    }
    getPrefixSum(t) {
      return t < 0 ? 0 : ((t = Je(t)), this._getPrefixSum(t));
    }
    _getPrefixSum(t) {
      if (t <= this.prefixSumValidIndex[0]) return this.prefixSum[t];
      let n = this.prefixSumValidIndex[0] + 1;
      0 === n && ((this.prefixSum[0] = this.values[0]), n++),
        t >= this.values.length && (t = this.values.length - 1);
      for (let r = n; r <= t; r++)
        this.prefixSum[r] = this.prefixSum[r - 1] + this.values[r];
      return (
        (this.prefixSumValidIndex[0] = Math.max(
          this.prefixSumValidIndex[0],
          t
        )),
        this.prefixSum[t]
      );
    }
    getIndexOf(t) {
      (t = Math.floor(t)), this.getTotalSum();
      let n = 0,
        r = this.values.length - 1,
        i = 0,
        a = 0,
        o = 0;
      for (; n <= r; )
        if (
          ((i = (n + (r - n) / 2) | 0),
          (a = this.prefixSum[i]),
          (o = a - this.values[i]),
          t < o)
        )
          r = i - 1;
        else {
          if (!(t >= a)) break;
          n = i + 1;
        }
      return new Pr(i, t - o);
    }
  }
  class Pr {
    constructor(t, n) {
      (this.index = t),
        (this.remainder = n),
        (this._prefixSumIndexOfResultBrand = void 0),
        (this.index = t),
        (this.remainder = n);
    }
  }
  class Fs {
    constructor(t, n, r, i) {
      (this._uri = t),
        (this._lines = n),
        (this._eol = r),
        (this._versionId = i),
        (this._lineStarts = null),
        (this._cachedTextValue = null);
    }
    dispose() {
      this._lines.length = 0;
    }
    get version() {
      return this._versionId;
    }
    getText() {
      return (
        null === this._cachedTextValue &&
          (this._cachedTextValue = this._lines.join(this._eol)),
        this._cachedTextValue
      );
    }
    onEvents(t) {
      t.eol &&
        t.eol !== this._eol &&
        ((this._eol = t.eol), (this._lineStarts = null));
      const n = t.changes;
      for (const r of n)
        this._acceptDeleteRange(r.range),
          this._acceptInsertText(
            new he(r.range.startLineNumber, r.range.startColumn),
            r.text
          );
      (this._versionId = t.versionId), (this._cachedTextValue = null);
    }
    _ensureLineStarts() {
      if (!this._lineStarts) {
        const t = this._eol.length,
          n = this._lines.length,
          r = new Uint32Array(n);
        for (let i = 0; i < n; i++) r[i] = this._lines[i].length + t;
        this._lineStarts = new Hs(r);
      }
    }
    _setLineText(t, n) {
      (this._lines[t] = n),
        this._lineStarts &&
          this._lineStarts.setValue(
            t,
            this._lines[t].length + this._eol.length
          );
    }
    _acceptDeleteRange(t) {
      if (t.startLineNumber !== t.endLineNumber)
        this._setLineText(
          t.startLineNumber - 1,
          this._lines[t.startLineNumber - 1].substring(0, t.startColumn - 1) +
            this._lines[t.endLineNumber - 1].substring(t.endColumn - 1)
        ),
          this._lines.splice(
            t.startLineNumber,
            t.endLineNumber - t.startLineNumber
          ),
          this._lineStarts &&
            this._lineStarts.removeValues(
              t.startLineNumber,
              t.endLineNumber - t.startLineNumber
            );
      else {
        if (t.startColumn === t.endColumn) return;
        this._setLineText(
          t.startLineNumber - 1,
          this._lines[t.startLineNumber - 1].substring(0, t.startColumn - 1) +
            this._lines[t.startLineNumber - 1].substring(t.endColumn - 1)
        );
      }
    }
    _acceptInsertText(t, n) {
      if (0 === n.length) return;
      const r = (function $a(e) {
        return e.split(/\r\n|\r|\n/);
      })(n);
      if (1 === r.length)
        return void this._setLineText(
          t.lineNumber - 1,
          this._lines[t.lineNumber - 1].substring(0, t.column - 1) +
            r[0] +
            this._lines[t.lineNumber - 1].substring(t.column - 1)
        );
      (r[r.length - 1] += this._lines[t.lineNumber - 1].substring(
        t.column - 1
      )),
        this._setLineText(
          t.lineNumber - 1,
          this._lines[t.lineNumber - 1].substring(0, t.column - 1) + r[0]
        );
      const i = new Uint32Array(r.length - 1);
      for (let a = 1; a < r.length; a++)
        this._lines.splice(t.lineNumber + a - 1, 0, r[a]),
          (i[a - 1] = r[a].length + this._eol.length);
      this._lineStarts && this._lineStarts.insertValues(t.lineNumber, i);
    }
  }
  const qr = (function Bs(e = '') {
      let t = '(-?\\d*\\.\\d\\w*)|([^';
      for (const n of '`~!@#$%^&*()-=+[{]}\\|;:\'",.<>/?')
        e.indexOf(n) >= 0 || (t += '\\' + n);
      return (t += '\\s]+)'), new RegExp(t, 'g');
    })(),
    Or = new At();
  function yn(e, t, n, r, i) {
    if ((i || (i = yt.first(Or)), n.length > i.maxLen)) {
      let u = e - i.maxLen / 2;
      return (
        u < 0 ? (u = 0) : (r += u),
        yn(e, t, (n = n.substring(u, e + i.maxLen / 2)), r, i)
      );
    }
    const a = Date.now(),
      o = e - 1 - r;
    let c = -1,
      l = null;
    for (let u = 1; !(Date.now() - a >= i.timeBudget); u++) {
      const h = o - i.windowSize * u;
      t.lastIndex = Math.max(0, h);
      const d = qs(t, n, o, c);
      if ((!d && l) || ((l = d), h <= 0)) break;
      c = h;
    }
    if (l) {
      const u = {
        word: l[0],
        startColumn: r + 1 + l.index,
        endColumn: r + 1 + l.index + l[0].length,
      };
      return (t.lastIndex = 0), u;
    }
    return null;
  }
  function qs(e, t, n, r) {
    let i;
    for (; (i = e.exec(t)); ) {
      const a = i.index || 0;
      if (a <= n && e.lastIndex >= n) return i;
      if (r > 0 && a > r) return null;
    }
    return null;
  }
  Or.unshift({ maxLen: 1e3, windowSize: 15, timeBudget: 150 });
  class ut {
    constructor(t) {
      const n = Br(t);
      (this._defaultValue = n),
        (this._asciiMap = ut._createAsciiMap(n)),
        (this._map = new Map());
    }
    static _createAsciiMap(t) {
      const n = new Uint8Array(256);
      for (let r = 0; r < 256; r++) n[r] = t;
      return n;
    }
    set(t, n) {
      const r = Br(n);
      t >= 0 && t < 256 ? (this._asciiMap[t] = r) : this._map.set(t, r);
    }
    get(t) {
      return t >= 0 && t < 256
        ? this._asciiMap[t]
        : this._map.get(t) || this._defaultValue;
    }
  }
  class Os {
    constructor(t, n, r) {
      const i = new Uint8Array(t * n);
      for (let a = 0, o = t * n; a < o; a++) i[a] = r;
      (this._data = i), (this.rows = t), (this.cols = n);
    }
    get(t, n) {
      return this._data[t * this.cols + n];
    }
    set(t, n, r) {
      this._data[t * this.cols + n] = r;
    }
  }
  class Vs {
    constructor(t) {
      let n = 0,
        r = 0;
      for (let a = 0, o = t.length; a < o; a++) {
        const [c, l, u] = t[a];
        l > n && (n = l), c > r && (r = c), u > r && (r = u);
      }
      n++, r++;
      const i = new Os(r, n, 0);
      for (let a = 0, o = t.length; a < o; a++) {
        const [c, l, u] = t[a];
        i.set(c, l, u);
      }
      (this._states = i), (this._maxCharCode = n);
    }
    nextState(t, n) {
      return n < 0 || n >= this._maxCharCode ? 0 : this._states.get(t, n);
    }
  }
  let Tn = null,
    ct = null;
  class Ut {
    static _createLink(t, n, r, i, a) {
      let o = a - 1;
      do {
        const c = n.charCodeAt(o);
        if (2 !== t.get(c)) break;
        o--;
      } while (o > i);
      if (i > 0) {
        const c = n.charCodeAt(i - 1),
          l = n.charCodeAt(o);
        ((40 === c && 41 === l) ||
          (91 === c && 93 === l) ||
          (123 === c && 125 === l)) &&
          o--;
      }
      return {
        range: {
          startLineNumber: r,
          startColumn: i + 1,
          endLineNumber: r,
          endColumn: o + 2,
        },
        url: n.substring(i, o + 1),
      };
    }
    static computeLinks(
      t,
      n = (function Gs() {
        return (
          null === Tn &&
            (Tn = new Vs([
              [1, 104, 2],
              [1, 72, 2],
              [1, 102, 6],
              [1, 70, 6],
              [2, 116, 3],
              [2, 84, 3],
              [3, 116, 4],
              [3, 84, 4],
              [4, 112, 5],
              [4, 80, 5],
              [5, 115, 9],
              [5, 83, 9],
              [5, 58, 10],
              [6, 105, 7],
              [6, 73, 7],
              [7, 108, 8],
              [7, 76, 8],
              [8, 101, 9],
              [8, 69, 9],
              [9, 58, 10],
              [10, 47, 11],
              [11, 47, 12],
            ])),
          Tn
        );
      })()
    ) {
      const r = (function js() {
          if (null === ct) {
            ct = new ut(0);
            const e =
              ' \t<>\'"\u3001\u3002\uff61\uff64\uff0c\uff0e\uff1a\uff1b\u2018\u3008\u300c\u300e\u3014\uff08\uff3b\uff5b\uff62\uff63\uff5d\uff3d\uff09\u3015\u300f\u300d\u3009\u2019\uff40\uff5e\u2026';
            for (let n = 0; n < e.length; n++) ct.set(e.charCodeAt(n), 1);
            const t = '.,;:';
            for (let n = 0; n < t.length; n++) ct.set(t.charCodeAt(n), 2);
          }
          return ct;
        })(),
        i = [];
      for (let a = 1, o = t.getLineCount(); a <= o; a++) {
        const c = t.getLineContent(a),
          l = c.length;
        let u = 0,
          h = 0,
          d = 0,
          f = 1,
          g = !1,
          _ = !1,
          b = !1,
          y = !1;
        for (; u < l; ) {
          let k = !1;
          const v = c.charCodeAt(u);
          if (13 === f) {
            let L;
            switch (v) {
              case 40:
                (g = !0), (L = 0);
                break;
              case 41:
                L = g ? 0 : 1;
                break;
              case 91:
                (b = !0), (_ = !0), (L = 0);
                break;
              case 93:
                (b = !1), (L = _ ? 0 : 1);
                break;
              case 123:
                (y = !0), (L = 0);
                break;
              case 125:
                L = y ? 0 : 1;
                break;
              case 39:
                L = 39 === d ? 1 : 0;
                break;
              case 34:
                L = 34 === d ? 1 : 0;
                break;
              case 96:
                L = 96 === d ? 1 : 0;
                break;
              case 42:
                L = 42 === d ? 1 : 0;
                break;
              case 124:
                L = 124 === d ? 1 : 0;
                break;
              case 32:
                L = b ? 0 : 1;
                break;
              default:
                L = r.get(v);
            }
            1 === L && (i.push(Ut._createLink(r, c, a, h, u)), (k = !0));
          } else if (12 === f) {
            let L;
            91 === v ? ((_ = !0), (L = 0)) : (L = r.get(v)),
              1 === L ? (k = !0) : (f = 13);
          } else (f = n.nextState(f, v)), 0 === f && (k = !0);
          k && ((f = 1), (g = !1), (_ = !1), (y = !1), (h = u + 1), (d = v)),
            u++;
        }
        13 === f && i.push(Ut._createLink(r, c, a, h, l));
      }
      return i;
    }
  }
  class kn {
    constructor() {
      this._defaultValueSet = [
        ['true', 'false'],
        ['True', 'False'],
        [
          'Private',
          'Public',
          'Friend',
          'ReadOnly',
          'Partial',
          'Protected',
          'WriteOnly',
        ],
        ['public', 'protected', 'private'],
      ];
    }
    navigateValueSet(t, n, r, i, a) {
      if (t && n) {
        const o = this.doNavigateValueSet(n, a);
        if (o) return { range: t, value: o };
      }
      if (r && i) {
        const o = this.doNavigateValueSet(i, a);
        if (o) return { range: r, value: o };
      }
      return null;
    }
    doNavigateValueSet(t, n) {
      const r = this.numberReplace(t, n);
      return null !== r ? r : this.textReplace(t, n);
    }
    numberReplace(t, n) {
      const r = Math.pow(10, t.length - (t.lastIndexOf('.') + 1));
      let i = Number(t);
      const a = parseFloat(t);
      return isNaN(i) || isNaN(a) || i !== a
        ? null
        : 0 !== i || n
        ? ((i = Math.floor(i * r)), (i += n ? r : -r), String(i / r))
        : null;
    }
    textReplace(t, n) {
      return this.valueSetsReplace(this._defaultValueSet, t, n);
    }
    valueSetsReplace(t, n, r) {
      let i = null;
      for (let a = 0, o = t.length; null === i && a < o; a++)
        i = this.valueSetReplace(t[a], n, r);
      return i;
    }
    valueSetReplace(t, n, r) {
      let i = t.indexOf(n);
      return i >= 0
        ? ((i += r ? 1 : -1),
          i < 0 ? (i = t.length - 1) : (i %= t.length),
          t[i])
        : null;
    }
  }
  kn.INSTANCE = new kn();
  const Vr = Object.freeze(function (e, t) {
    const n = setTimeout(e.bind(t), 0);
    return {
      dispose() {
        clearTimeout(n);
      },
    };
  });
  var zt;
  !(function (e) {
    (e.isCancellationToken = function t(n) {
      return (
        n === e.None ||
        n === e.Cancelled ||
        n instanceof Ht ||
        (!(!n || 'object' != typeof n) &&
          'boolean' == typeof n.isCancellationRequested &&
          'function' == typeof n.onCancellationRequested)
      );
    }),
      (e.None = Object.freeze({
        isCancellationRequested: !1,
        onCancellationRequested: Rt.None,
      })),
      (e.Cancelled = Object.freeze({
        isCancellationRequested: !0,
        onCancellationRequested: Vr,
      }));
  })(zt || (zt = {}));
  class Ht {
    constructor() {
      (this._isCancelled = !1), (this._emitter = null);
    }
    cancel() {
      this._isCancelled ||
        ((this._isCancelled = !0),
        this._emitter && (this._emitter.fire(void 0), this.dispose()));
    }
    get isCancellationRequested() {
      return this._isCancelled;
    }
    get onCancellationRequested() {
      return this._isCancelled
        ? Vr
        : (this._emitter || (this._emitter = new we()), this._emitter.event);
    }
    dispose() {
      this._emitter && (this._emitter.dispose(), (this._emitter = null));
    }
  }
  class Qs {
    constructor(t) {
      (this._token = void 0),
        (this._parentListener = void 0),
        (this._parentListener =
          t && t.onCancellationRequested(this.cancel, this));
    }
    get token() {
      return this._token || (this._token = new Ht()), this._token;
    }
    cancel() {
      this._token
        ? this._token instanceof Ht && this._token.cancel()
        : (this._token = zt.Cancelled);
    }
    dispose(t = !1) {
      t && this.cancel(),
        this._parentListener && this._parentListener.dispose(),
        this._token
          ? this._token instanceof Ht && this._token.dispose()
          : (this._token = zt.None);
    }
  }
  class Cn {
    constructor() {
      (this._keyCodeToStr = []), (this._strToKeyCode = Object.create(null));
    }
    define(t, n) {
      (this._keyCodeToStr[t] = n), (this._strToKeyCode[n.toLowerCase()] = t);
    }
    keyCodeToStr(t) {
      return this._keyCodeToStr[t];
    }
    strToKeyCode(t) {
      return this._strToKeyCode[t.toLowerCase()] || 0;
    }
  }
  const Ft = new Cn(),
    An = new Cn(),
    Sn = new Cn(),
    Js = new Array(230),
    Ys = {},
    Xs = [],
    Zs = Object.create(null),
    Ks = Object.create(null),
    Gr = [],
    xn = [];
  for (let e = 0; e <= 193; e++) Gr[e] = -1;
  for (let e = 0; e <= 127; e++) xn[e] = -1;
  var jr, $r;
  !(function () {
    const e = '',
      t = [
        [0, 1, 0, 'None', 0, 'unknown', 0, 'VK_UNKNOWN', e, e],
        [0, 1, 1, 'Hyper', 0, e, 0, e, e, e],
        [0, 1, 2, 'Super', 0, e, 0, e, e, e],
        [0, 1, 3, 'Fn', 0, e, 0, e, e, e],
        [0, 1, 4, 'FnLock', 0, e, 0, e, e, e],
        [0, 1, 5, 'Suspend', 0, e, 0, e, e, e],
        [0, 1, 6, 'Resume', 0, e, 0, e, e, e],
        [0, 1, 7, 'Turbo', 0, e, 0, e, e, e],
        [0, 1, 8, 'Sleep', 0, e, 0, 'VK_SLEEP', e, e],
        [0, 1, 9, 'WakeUp', 0, e, 0, e, e, e],
        [31, 0, 10, 'KeyA', 31, 'A', 65, 'VK_A', e, e],
        [32, 0, 11, 'KeyB', 32, 'B', 66, 'VK_B', e, e],
        [33, 0, 12, 'KeyC', 33, 'C', 67, 'VK_C', e, e],
        [34, 0, 13, 'KeyD', 34, 'D', 68, 'VK_D', e, e],
        [35, 0, 14, 'KeyE', 35, 'E', 69, 'VK_E', e, e],
        [36, 0, 15, 'KeyF', 36, 'F', 70, 'VK_F', e, e],
        [37, 0, 16, 'KeyG', 37, 'G', 71, 'VK_G', e, e],
        [38, 0, 17, 'KeyH', 38, 'H', 72, 'VK_H', e, e],
        [39, 0, 18, 'KeyI', 39, 'I', 73, 'VK_I', e, e],
        [40, 0, 19, 'KeyJ', 40, 'J', 74, 'VK_J', e, e],
        [41, 0, 20, 'KeyK', 41, 'K', 75, 'VK_K', e, e],
        [42, 0, 21, 'KeyL', 42, 'L', 76, 'VK_L', e, e],
        [43, 0, 22, 'KeyM', 43, 'M', 77, 'VK_M', e, e],
        [44, 0, 23, 'KeyN', 44, 'N', 78, 'VK_N', e, e],
        [45, 0, 24, 'KeyO', 45, 'O', 79, 'VK_O', e, e],
        [46, 0, 25, 'KeyP', 46, 'P', 80, 'VK_P', e, e],
        [47, 0, 26, 'KeyQ', 47, 'Q', 81, 'VK_Q', e, e],
        [48, 0, 27, 'KeyR', 48, 'R', 82, 'VK_R', e, e],
        [49, 0, 28, 'KeyS', 49, 'S', 83, 'VK_S', e, e],
        [50, 0, 29, 'KeyT', 50, 'T', 84, 'VK_T', e, e],
        [51, 0, 30, 'KeyU', 51, 'U', 85, 'VK_U', e, e],
        [52, 0, 31, 'KeyV', 52, 'V', 86, 'VK_V', e, e],
        [53, 0, 32, 'KeyW', 53, 'W', 87, 'VK_W', e, e],
        [54, 0, 33, 'KeyX', 54, 'X', 88, 'VK_X', e, e],
        [55, 0, 34, 'KeyY', 55, 'Y', 89, 'VK_Y', e, e],
        [56, 0, 35, 'KeyZ', 56, 'Z', 90, 'VK_Z', e, e],
        [22, 0, 36, 'Digit1', 22, '1', 49, 'VK_1', e, e],
        [23, 0, 37, 'Digit2', 23, '2', 50, 'VK_2', e, e],
        [24, 0, 38, 'Digit3', 24, '3', 51, 'VK_3', e, e],
        [25, 0, 39, 'Digit4', 25, '4', 52, 'VK_4', e, e],
        [26, 0, 40, 'Digit5', 26, '5', 53, 'VK_5', e, e],
        [27, 0, 41, 'Digit6', 27, '6', 54, 'VK_6', e, e],
        [28, 0, 42, 'Digit7', 28, '7', 55, 'VK_7', e, e],
        [29, 0, 43, 'Digit8', 29, '8', 56, 'VK_8', e, e],
        [30, 0, 44, 'Digit9', 30, '9', 57, 'VK_9', e, e],
        [21, 0, 45, 'Digit0', 21, '0', 48, 'VK_0', e, e],
        [3, 1, 46, 'Enter', 3, 'Enter', 13, 'VK_RETURN', e, e],
        [9, 1, 47, 'Escape', 9, 'Escape', 27, 'VK_ESCAPE', e, e],
        [1, 1, 48, 'Backspace', 1, 'Backspace', 8, 'VK_BACK', e, e],
        [2, 1, 49, 'Tab', 2, 'Tab', 9, 'VK_TAB', e, e],
        [10, 1, 50, 'Space', 10, 'Space', 32, 'VK_SPACE', e, e],
        [83, 0, 51, 'Minus', 83, '-', 189, 'VK_OEM_MINUS', '-', 'OEM_MINUS'],
        [81, 0, 52, 'Equal', 81, '=', 187, 'VK_OEM_PLUS', '=', 'OEM_PLUS'],
        [87, 0, 53, 'BracketLeft', 87, '[', 219, 'VK_OEM_4', '[', 'OEM_4'],
        [89, 0, 54, 'BracketRight', 89, ']', 221, 'VK_OEM_6', ']', 'OEM_6'],
        [88, 0, 55, 'Backslash', 88, '\\', 220, 'VK_OEM_5', '\\', 'OEM_5'],
        [0, 0, 56, 'IntlHash', 0, e, 0, e, e, e],
        [80, 0, 57, 'Semicolon', 80, ';', 186, 'VK_OEM_1', ';', 'OEM_1'],
        [90, 0, 58, 'Quote', 90, "'", 222, 'VK_OEM_7', "'", 'OEM_7'],
        [86, 0, 59, 'Backquote', 86, '`', 192, 'VK_OEM_3', '`', 'OEM_3'],
        [82, 0, 60, 'Comma', 82, ',', 188, 'VK_OEM_COMMA', ',', 'OEM_COMMA'],
        [84, 0, 61, 'Period', 84, '.', 190, 'VK_OEM_PERIOD', '.', 'OEM_PERIOD'],
        [85, 0, 62, 'Slash', 85, '/', 191, 'VK_OEM_2', '/', 'OEM_2'],
        [8, 1, 63, 'CapsLock', 8, 'CapsLock', 20, 'VK_CAPITAL', e, e],
        [59, 1, 64, 'F1', 59, 'F1', 112, 'VK_F1', e, e],
        [60, 1, 65, 'F2', 60, 'F2', 113, 'VK_F2', e, e],
        [61, 1, 66, 'F3', 61, 'F3', 114, 'VK_F3', e, e],
        [62, 1, 67, 'F4', 62, 'F4', 115, 'VK_F4', e, e],
        [63, 1, 68, 'F5', 63, 'F5', 116, 'VK_F5', e, e],
        [64, 1, 69, 'F6', 64, 'F6', 117, 'VK_F6', e, e],
        [65, 1, 70, 'F7', 65, 'F7', 118, 'VK_F7', e, e],
        [66, 1, 71, 'F8', 66, 'F8', 119, 'VK_F8', e, e],
        [67, 1, 72, 'F9', 67, 'F9', 120, 'VK_F9', e, e],
        [68, 1, 73, 'F10', 68, 'F10', 121, 'VK_F10', e, e],
        [69, 1, 74, 'F11', 69, 'F11', 122, 'VK_F11', e, e],
        [70, 1, 75, 'F12', 70, 'F12', 123, 'VK_F12', e, e],
        [0, 1, 76, 'PrintScreen', 0, e, 0, e, e, e],
        [79, 1, 77, 'ScrollLock', 79, 'ScrollLock', 145, 'VK_SCROLL', e, e],
        [7, 1, 78, 'Pause', 7, 'PauseBreak', 19, 'VK_PAUSE', e, e],
        [19, 1, 79, 'Insert', 19, 'Insert', 45, 'VK_INSERT', e, e],
        [14, 1, 80, 'Home', 14, 'Home', 36, 'VK_HOME', e, e],
        [11, 1, 81, 'PageUp', 11, 'PageUp', 33, 'VK_PRIOR', e, e],
        [20, 1, 82, 'Delete', 20, 'Delete', 46, 'VK_DELETE', e, e],
        [13, 1, 83, 'End', 13, 'End', 35, 'VK_END', e, e],
        [12, 1, 84, 'PageDown', 12, 'PageDown', 34, 'VK_NEXT', e, e],
        [17, 1, 85, 'ArrowRight', 17, 'RightArrow', 39, 'VK_RIGHT', 'Right', e],
        [15, 1, 86, 'ArrowLeft', 15, 'LeftArrow', 37, 'VK_LEFT', 'Left', e],
        [18, 1, 87, 'ArrowDown', 18, 'DownArrow', 40, 'VK_DOWN', 'Down', e],
        [16, 1, 88, 'ArrowUp', 16, 'UpArrow', 38, 'VK_UP', 'Up', e],
        [78, 1, 89, 'NumLock', 78, 'NumLock', 144, 'VK_NUMLOCK', e, e],
        [
          108,
          1,
          90,
          'NumpadDivide',
          108,
          'NumPad_Divide',
          111,
          'VK_DIVIDE',
          e,
          e,
        ],
        [
          103,
          1,
          91,
          'NumpadMultiply',
          103,
          'NumPad_Multiply',
          106,
          'VK_MULTIPLY',
          e,
          e,
        ],
        [
          106,
          1,
          92,
          'NumpadSubtract',
          106,
          'NumPad_Subtract',
          109,
          'VK_SUBTRACT',
          e,
          e,
        ],
        [104, 1, 93, 'NumpadAdd', 104, 'NumPad_Add', 107, 'VK_ADD', e, e],
        [3, 1, 94, 'NumpadEnter', 3, e, 0, e, e, e],
        [94, 1, 95, 'Numpad1', 94, 'NumPad1', 97, 'VK_NUMPAD1', e, e],
        [95, 1, 96, 'Numpad2', 95, 'NumPad2', 98, 'VK_NUMPAD2', e, e],
        [96, 1, 97, 'Numpad3', 96, 'NumPad3', 99, 'VK_NUMPAD3', e, e],
        [97, 1, 98, 'Numpad4', 97, 'NumPad4', 100, 'VK_NUMPAD4', e, e],
        [98, 1, 99, 'Numpad5', 98, 'NumPad5', 101, 'VK_NUMPAD5', e, e],
        [99, 1, 100, 'Numpad6', 99, 'NumPad6', 102, 'VK_NUMPAD6', e, e],
        [100, 1, 101, 'Numpad7', 100, 'NumPad7', 103, 'VK_NUMPAD7', e, e],
        [101, 1, 102, 'Numpad8', 101, 'NumPad8', 104, 'VK_NUMPAD8', e, e],
        [102, 1, 103, 'Numpad9', 102, 'NumPad9', 105, 'VK_NUMPAD9', e, e],
        [93, 1, 104, 'Numpad0', 93, 'NumPad0', 96, 'VK_NUMPAD0', e, e],
        [
          107,
          1,
          105,
          'NumpadDecimal',
          107,
          'NumPad_Decimal',
          110,
          'VK_DECIMAL',
          e,
          e,
        ],
        [92, 0, 106, 'IntlBackslash', 92, 'OEM_102', 226, 'VK_OEM_102', e, e],
        [58, 1, 107, 'ContextMenu', 58, 'ContextMenu', 93, e, e, e],
        [0, 1, 108, 'Power', 0, e, 0, e, e, e],
        [0, 1, 109, 'NumpadEqual', 0, e, 0, e, e, e],
        [71, 1, 110, 'F13', 71, 'F13', 124, 'VK_F13', e, e],
        [72, 1, 111, 'F14', 72, 'F14', 125, 'VK_F14', e, e],
        [73, 1, 112, 'F15', 73, 'F15', 126, 'VK_F15', e, e],
        [74, 1, 113, 'F16', 74, 'F16', 127, 'VK_F16', e, e],
        [75, 1, 114, 'F17', 75, 'F17', 128, 'VK_F17', e, e],
        [76, 1, 115, 'F18', 76, 'F18', 129, 'VK_F18', e, e],
        [77, 1, 116, 'F19', 77, 'F19', 130, 'VK_F19', e, e],
        [0, 1, 117, 'F20', 0, e, 0, 'VK_F20', e, e],
        [0, 1, 118, 'F21', 0, e, 0, 'VK_F21', e, e],
        [0, 1, 119, 'F22', 0, e, 0, 'VK_F22', e, e],
        [0, 1, 120, 'F23', 0, e, 0, 'VK_F23', e, e],
        [0, 1, 121, 'F24', 0, e, 0, 'VK_F24', e, e],
        [0, 1, 122, 'Open', 0, e, 0, e, e, e],
        [0, 1, 123, 'Help', 0, e, 0, e, e, e],
        [0, 1, 124, 'Select', 0, e, 0, e, e, e],
        [0, 1, 125, 'Again', 0, e, 0, e, e, e],
        [0, 1, 126, 'Undo', 0, e, 0, e, e, e],
        [0, 1, 127, 'Cut', 0, e, 0, e, e, e],
        [0, 1, 128, 'Copy', 0, e, 0, e, e, e],
        [0, 1, 129, 'Paste', 0, e, 0, e, e, e],
        [0, 1, 130, 'Find', 0, e, 0, e, e, e],
        [
          0,
          1,
          131,
          'AudioVolumeMute',
          112,
          'AudioVolumeMute',
          173,
          'VK_VOLUME_MUTE',
          e,
          e,
        ],
        [
          0,
          1,
          132,
          'AudioVolumeUp',
          113,
          'AudioVolumeUp',
          175,
          'VK_VOLUME_UP',
          e,
          e,
        ],
        [
          0,
          1,
          133,
          'AudioVolumeDown',
          114,
          'AudioVolumeDown',
          174,
          'VK_VOLUME_DOWN',
          e,
          e,
        ],
        [
          105,
          1,
          134,
          'NumpadComma',
          105,
          'NumPad_Separator',
          108,
          'VK_SEPARATOR',
          e,
          e,
        ],
        [110, 0, 135, 'IntlRo', 110, 'ABNT_C1', 193, 'VK_ABNT_C1', e, e],
        [0, 1, 136, 'KanaMode', 0, e, 0, e, e, e],
        [0, 0, 137, 'IntlYen', 0, e, 0, e, e, e],
        [0, 1, 138, 'Convert', 0, e, 0, e, e, e],
        [0, 1, 139, 'NonConvert', 0, e, 0, e, e, e],
        [0, 1, 140, 'Lang1', 0, e, 0, e, e, e],
        [0, 1, 141, 'Lang2', 0, e, 0, e, e, e],
        [0, 1, 142, 'Lang3', 0, e, 0, e, e, e],
        [0, 1, 143, 'Lang4', 0, e, 0, e, e, e],
        [0, 1, 144, 'Lang5', 0, e, 0, e, e, e],
        [0, 1, 145, 'Abort', 0, e, 0, e, e, e],
        [0, 1, 146, 'Props', 0, e, 0, e, e, e],
        [0, 1, 147, 'NumpadParenLeft', 0, e, 0, e, e, e],
        [0, 1, 148, 'NumpadParenRight', 0, e, 0, e, e, e],
        [0, 1, 149, 'NumpadBackspace', 0, e, 0, e, e, e],
        [0, 1, 150, 'NumpadMemoryStore', 0, e, 0, e, e, e],
        [0, 1, 151, 'NumpadMemoryRecall', 0, e, 0, e, e, e],
        [0, 1, 152, 'NumpadMemoryClear', 0, e, 0, e, e, e],
        [0, 1, 153, 'NumpadMemoryAdd', 0, e, 0, e, e, e],
        [0, 1, 154, 'NumpadMemorySubtract', 0, e, 0, e, e, e],
        [0, 1, 155, 'NumpadClear', 126, 'Clear', 12, 'VK_CLEAR', e, e],
        [0, 1, 156, 'NumpadClearEntry', 0, e, 0, e, e, e],
        [5, 1, 0, e, 5, 'Ctrl', 17, 'VK_CONTROL', e, e],
        [4, 1, 0, e, 4, 'Shift', 16, 'VK_SHIFT', e, e],
        [6, 1, 0, e, 6, 'Alt', 18, 'VK_MENU', e, e],
        [57, 1, 0, e, 57, 'Meta', 0, 'VK_COMMAND', e, e],
        [5, 1, 157, 'ControlLeft', 5, e, 0, 'VK_LCONTROL', e, e],
        [4, 1, 158, 'ShiftLeft', 4, e, 0, 'VK_LSHIFT', e, e],
        [6, 1, 159, 'AltLeft', 6, e, 0, 'VK_LMENU', e, e],
        [57, 1, 160, 'MetaLeft', 57, e, 0, 'VK_LWIN', e, e],
        [5, 1, 161, 'ControlRight', 5, e, 0, 'VK_RCONTROL', e, e],
        [4, 1, 162, 'ShiftRight', 4, e, 0, 'VK_RSHIFT', e, e],
        [6, 1, 163, 'AltRight', 6, e, 0, 'VK_RMENU', e, e],
        [57, 1, 164, 'MetaRight', 57, e, 0, 'VK_RWIN', e, e],
        [0, 1, 165, 'BrightnessUp', 0, e, 0, e, e, e],
        [0, 1, 166, 'BrightnessDown', 0, e, 0, e, e, e],
        [0, 1, 167, 'MediaPlay', 0, e, 0, e, e, e],
        [0, 1, 168, 'MediaRecord', 0, e, 0, e, e, e],
        [0, 1, 169, 'MediaFastForward', 0, e, 0, e, e, e],
        [0, 1, 170, 'MediaRewind', 0, e, 0, e, e, e],
        [
          114,
          1,
          171,
          'MediaTrackNext',
          119,
          'MediaTrackNext',
          176,
          'VK_MEDIA_NEXT_TRACK',
          e,
          e,
        ],
        [
          115,
          1,
          172,
          'MediaTrackPrevious',
          120,
          'MediaTrackPrevious',
          177,
          'VK_MEDIA_PREV_TRACK',
          e,
          e,
        ],
        [
          116,
          1,
          173,
          'MediaStop',
          121,
          'MediaStop',
          178,
          'VK_MEDIA_STOP',
          e,
          e,
        ],
        [0, 1, 174, 'Eject', 0, e, 0, e, e, e],
        [
          117,
          1,
          175,
          'MediaPlayPause',
          122,
          'MediaPlayPause',
          179,
          'VK_MEDIA_PLAY_PAUSE',
          e,
          e,
        ],
        [
          0,
          1,
          176,
          'MediaSelect',
          123,
          'LaunchMediaPlayer',
          181,
          'VK_MEDIA_LAUNCH_MEDIA_SELECT',
          e,
          e,
        ],
        [
          0,
          1,
          177,
          'LaunchMail',
          124,
          'LaunchMail',
          180,
          'VK_MEDIA_LAUNCH_MAIL',
          e,
          e,
        ],
        [
          0,
          1,
          178,
          'LaunchApp2',
          125,
          'LaunchApp2',
          183,
          'VK_MEDIA_LAUNCH_APP2',
          e,
          e,
        ],
        [0, 1, 179, 'LaunchApp1', 0, e, 0, 'VK_MEDIA_LAUNCH_APP1', e, e],
        [0, 1, 180, 'SelectTask', 0, e, 0, e, e, e],
        [0, 1, 181, 'LaunchScreenSaver', 0, e, 0, e, e, e],
        [
          0,
          1,
          182,
          'BrowserSearch',
          115,
          'BrowserSearch',
          170,
          'VK_BROWSER_SEARCH',
          e,
          e,
        ],
        [
          0,
          1,
          183,
          'BrowserHome',
          116,
          'BrowserHome',
          172,
          'VK_BROWSER_HOME',
          e,
          e,
        ],
        [
          112,
          1,
          184,
          'BrowserBack',
          117,
          'BrowserBack',
          166,
          'VK_BROWSER_BACK',
          e,
          e,
        ],
        [
          113,
          1,
          185,
          'BrowserForward',
          118,
          'BrowserForward',
          167,
          'VK_BROWSER_FORWARD',
          e,
          e,
        ],
        [0, 1, 186, 'BrowserStop', 0, e, 0, 'VK_BROWSER_STOP', e, e],
        [0, 1, 187, 'BrowserRefresh', 0, e, 0, 'VK_BROWSER_REFRESH', e, e],
        [0, 1, 188, 'BrowserFavorites', 0, e, 0, 'VK_BROWSER_FAVORITES', e, e],
        [0, 1, 189, 'ZoomToggle', 0, e, 0, e, e, e],
        [0, 1, 190, 'MailReply', 0, e, 0, e, e, e],
        [0, 1, 191, 'MailForward', 0, e, 0, e, e, e],
        [0, 1, 192, 'MailSend', 0, e, 0, e, e, e],
        [109, 1, 0, e, 109, 'KeyInComposition', 229, e, e, e],
        [111, 1, 0, e, 111, 'ABNT_C2', 194, 'VK_ABNT_C2', e, e],
        [91, 1, 0, e, 91, 'OEM_8', 223, 'VK_OEM_8', e, e],
        [0, 1, 0, e, 0, e, 0, 'VK_KANA', e, e],
        [0, 1, 0, e, 0, e, 0, 'VK_HANGUL', e, e],
        [0, 1, 0, e, 0, e, 0, 'VK_JUNJA', e, e],
        [0, 1, 0, e, 0, e, 0, 'VK_FINAL', e, e],
        [0, 1, 0, e, 0, e, 0, 'VK_HANJA', e, e],
        [0, 1, 0, e, 0, e, 0, 'VK_KANJI', e, e],
        [0, 1, 0, e, 0, e, 0, 'VK_CONVERT', e, e],
        [0, 1, 0, e, 0, e, 0, 'VK_NONCONVERT', e, e],
        [0, 1, 0, e, 0, e, 0, 'VK_ACCEPT', e, e],
        [0, 1, 0, e, 0, e, 0, 'VK_MODECHANGE', e, e],
        [0, 1, 0, e, 0, e, 0, 'VK_SELECT', e, e],
        [0, 1, 0, e, 0, e, 0, 'VK_PRINT', e, e],
        [0, 1, 0, e, 0, e, 0, 'VK_EXECUTE', e, e],
        [0, 1, 0, e, 0, e, 0, 'VK_SNAPSHOT', e, e],
        [0, 1, 0, e, 0, e, 0, 'VK_HELP', e, e],
        [0, 1, 0, e, 0, e, 0, 'VK_APPS', e, e],
        [0, 1, 0, e, 0, e, 0, 'VK_PROCESSKEY', e, e],
        [0, 1, 0, e, 0, e, 0, 'VK_PACKET', e, e],
        [0, 1, 0, e, 0, e, 0, 'VK_DBE_SBCSCHAR', e, e],
        [0, 1, 0, e, 0, e, 0, 'VK_DBE_DBCSCHAR', e, e],
        [0, 1, 0, e, 0, e, 0, 'VK_ATTN', e, e],
        [0, 1, 0, e, 0, e, 0, 'VK_CRSEL', e, e],
        [0, 1, 0, e, 0, e, 0, 'VK_EXSEL', e, e],
        [0, 1, 0, e, 0, e, 0, 'VK_EREOF', e, e],
        [0, 1, 0, e, 0, e, 0, 'VK_PLAY', e, e],
        [0, 1, 0, e, 0, e, 0, 'VK_ZOOM', e, e],
        [0, 1, 0, e, 0, e, 0, 'VK_NONAME', e, e],
        [0, 1, 0, e, 0, e, 0, 'VK_PA1', e, e],
        [0, 1, 0, e, 0, e, 0, 'VK_OEM_CLEAR', e, e],
      ],
      n = [],
      r = [];
    for (const i of t) {
      const [a, o, c, l, u, h, d, f, g, _] = i;
      if (
        (r[c] ||
          ((r[c] = !0),
          (Xs[c] = l),
          (Zs[l] = c),
          (Ks[l.toLowerCase()] = c),
          o &&
            ((Gr[c] = u),
            0 !== u &&
              3 !== u &&
              5 !== u &&
              4 !== u &&
              6 !== u &&
              57 !== u &&
              (xn[u] = c))),
        !n[u])
      ) {
        if (((n[u] = !0), !h))
          throw new Error(
            `String representation missing for key code ${u} around scan code ${l}`
          );
        Ft.define(u, h), An.define(u, g || h), Sn.define(u, _ || g || h);
      }
      d && (Js[d] = u), f && (Ys[f] = u);
    }
    xn[3] = 46;
  })(),
    (function (e) {
      (e.toString = function t(c) {
        return Ft.keyCodeToStr(c);
      }),
        (e.fromString = function n(c) {
          return Ft.strToKeyCode(c);
        }),
        (e.toUserSettingsUS = function r(c) {
          return An.keyCodeToStr(c);
        }),
        (e.toUserSettingsGeneral = function i(c) {
          return Sn.keyCodeToStr(c);
        }),
        (e.fromUserSettings = function a(c) {
          return An.strToKeyCode(c) || Sn.strToKeyCode(c);
        }),
        (e.toElectronAccelerator = function o(c) {
          if (c >= 93 && c <= 108) return null;
          switch (c) {
            case 16:
              return 'Up';
            case 18:
              return 'Down';
            case 15:
              return 'Left';
            case 17:
              return 'Right';
          }
          return Ft.keyCodeToStr(c);
        });
    })(jr || (jr = {}));
  class de extends Z {
    constructor(t, n, r, i) {
      super(t, n, r, i),
        (this.selectionStartLineNumber = t),
        (this.selectionStartColumn = n),
        (this.positionLineNumber = r),
        (this.positionColumn = i);
    }
    toString() {
      return (
        '[' +
        this.selectionStartLineNumber +
        ',' +
        this.selectionStartColumn +
        ' -> ' +
        this.positionLineNumber +
        ',' +
        this.positionColumn +
        ']'
      );
    }
    equalsSelection(t) {
      return de.selectionsEqual(this, t);
    }
    static selectionsEqual(t, n) {
      return (
        t.selectionStartLineNumber === n.selectionStartLineNumber &&
        t.selectionStartColumn === n.selectionStartColumn &&
        t.positionLineNumber === n.positionLineNumber &&
        t.positionColumn === n.positionColumn
      );
    }
    getDirection() {
      return this.selectionStartLineNumber === this.startLineNumber &&
        this.selectionStartColumn === this.startColumn
        ? 0
        : 1;
    }
    setEndPosition(t, n) {
      return 0 === this.getDirection()
        ? new de(this.startLineNumber, this.startColumn, t, n)
        : new de(t, n, this.startLineNumber, this.startColumn);
    }
    getPosition() {
      return new he(this.positionLineNumber, this.positionColumn);
    }
    getSelectionStart() {
      return new he(this.selectionStartLineNumber, this.selectionStartColumn);
    }
    setStartPosition(t, n) {
      return 0 === this.getDirection()
        ? new de(t, n, this.endLineNumber, this.endColumn)
        : new de(this.endLineNumber, this.endColumn, t, n);
    }
    static fromPositions(t, n = t) {
      return new de(t.lineNumber, t.column, n.lineNumber, n.column);
    }
    static fromRange(t, n) {
      return 0 === n
        ? new de(t.startLineNumber, t.startColumn, t.endLineNumber, t.endColumn)
        : new de(
            t.endLineNumber,
            t.endColumn,
            t.startLineNumber,
            t.startColumn
          );
    }
    static liftSelection(t) {
      return new de(
        t.selectionStartLineNumber,
        t.selectionStartColumn,
        t.positionLineNumber,
        t.positionColumn
      );
    }
    static selectionsArrEqual(t, n) {
      if ((t && !n) || (!t && n)) return !1;
      if (!t && !n) return !0;
      if (t.length !== n.length) return !1;
      for (let r = 0, i = t.length; r < i; r++)
        if (!this.selectionsEqual(t[r], n[r])) return !1;
      return !0;
    }
    static isISelection(t) {
      return (
        t &&
        'number' == typeof t.selectionStartLineNumber &&
        'number' == typeof t.selectionStartColumn &&
        'number' == typeof t.positionLineNumber &&
        'number' == typeof t.positionColumn
      );
    }
    static createWithDirection(t, n, r, i, a) {
      return 0 === a ? new de(t, n, r, i) : new de(r, i, t, n);
    }
  }
  class s {
    constructor(t, n, r) {
      (this.id = t),
        (this.definition = n),
        (this.description = r),
        s._allCodicons.push(this);
    }
    get classNames() {
      return 'codicon codicon-' + this.id;
    }
    get classNamesArray() {
      return ['codicon', 'codicon-' + this.id];
    }
    get cssSelector() {
      return '.codicon.codicon-' + this.id;
    }
    static getAll() {
      return s._allCodicons;
    }
  }
  (s._allCodicons = []),
    (s.add = new s('add', { fontCharacter: '\\ea60' })),
    (s.plus = new s('plus', s.add.definition)),
    (s.gistNew = new s('gist-new', s.add.definition)),
    (s.repoCreate = new s('repo-create', s.add.definition)),
    (s.lightbulb = new s('lightbulb', { fontCharacter: '\\ea61' })),
    (s.lightBulb = new s('light-bulb', { fontCharacter: '\\ea61' })),
    (s.repo = new s('repo', { fontCharacter: '\\ea62' })),
    (s.repoDelete = new s('repo-delete', { fontCharacter: '\\ea62' })),
    (s.gistFork = new s('gist-fork', { fontCharacter: '\\ea63' })),
    (s.repoForked = new s('repo-forked', { fontCharacter: '\\ea63' })),
    (s.gitPullRequest = new s('git-pull-request', { fontCharacter: '\\ea64' })),
    (s.gitPullRequestAbandoned = new s('git-pull-request-abandoned', {
      fontCharacter: '\\ea64',
    })),
    (s.recordKeys = new s('record-keys', { fontCharacter: '\\ea65' })),
    (s.keyboard = new s('keyboard', { fontCharacter: '\\ea65' })),
    (s.tag = new s('tag', { fontCharacter: '\\ea66' })),
    (s.tagAdd = new s('tag-add', { fontCharacter: '\\ea66' })),
    (s.tagRemove = new s('tag-remove', { fontCharacter: '\\ea66' })),
    (s.person = new s('person', { fontCharacter: '\\ea67' })),
    (s.personFollow = new s('person-follow', { fontCharacter: '\\ea67' })),
    (s.personOutline = new s('person-outline', { fontCharacter: '\\ea67' })),
    (s.personFilled = new s('person-filled', { fontCharacter: '\\ea67' })),
    (s.gitBranch = new s('git-branch', { fontCharacter: '\\ea68' })),
    (s.gitBranchCreate = new s('git-branch-create', {
      fontCharacter: '\\ea68',
    })),
    (s.gitBranchDelete = new s('git-branch-delete', {
      fontCharacter: '\\ea68',
    })),
    (s.sourceControl = new s('source-control', { fontCharacter: '\\ea68' })),
    (s.mirror = new s('mirror', { fontCharacter: '\\ea69' })),
    (s.mirrorPublic = new s('mirror-public', { fontCharacter: '\\ea69' })),
    (s.star = new s('star', { fontCharacter: '\\ea6a' })),
    (s.starAdd = new s('star-add', { fontCharacter: '\\ea6a' })),
    (s.starDelete = new s('star-delete', { fontCharacter: '\\ea6a' })),
    (s.starEmpty = new s('star-empty', { fontCharacter: '\\ea6a' })),
    (s.comment = new s('comment', { fontCharacter: '\\ea6b' })),
    (s.commentAdd = new s('comment-add', { fontCharacter: '\\ea6b' })),
    (s.alert = new s('alert', { fontCharacter: '\\ea6c' })),
    (s.warning = new s('warning', { fontCharacter: '\\ea6c' })),
    (s.search = new s('search', { fontCharacter: '\\ea6d' })),
    (s.searchSave = new s('search-save', { fontCharacter: '\\ea6d' })),
    (s.logOut = new s('log-out', { fontCharacter: '\\ea6e' })),
    (s.signOut = new s('sign-out', { fontCharacter: '\\ea6e' })),
    (s.logIn = new s('log-in', { fontCharacter: '\\ea6f' })),
    (s.signIn = new s('sign-in', { fontCharacter: '\\ea6f' })),
    (s.eye = new s('eye', { fontCharacter: '\\ea70' })),
    (s.eyeUnwatch = new s('eye-unwatch', { fontCharacter: '\\ea70' })),
    (s.eyeWatch = new s('eye-watch', { fontCharacter: '\\ea70' })),
    (s.circleFilled = new s('circle-filled', { fontCharacter: '\\ea71' })),
    (s.primitiveDot = new s('primitive-dot', { fontCharacter: '\\ea71' })),
    (s.closeDirty = new s('close-dirty', { fontCharacter: '\\ea71' })),
    (s.debugBreakpoint = new s('debug-breakpoint', {
      fontCharacter: '\\ea71',
    })),
    (s.debugBreakpointDisabled = new s('debug-breakpoint-disabled', {
      fontCharacter: '\\ea71',
    })),
    (s.debugHint = new s('debug-hint', { fontCharacter: '\\ea71' })),
    (s.primitiveSquare = new s('primitive-square', {
      fontCharacter: '\\ea72',
    })),
    (s.edit = new s('edit', { fontCharacter: '\\ea73' })),
    (s.pencil = new s('pencil', { fontCharacter: '\\ea73' })),
    (s.info = new s('info', { fontCharacter: '\\ea74' })),
    (s.issueOpened = new s('issue-opened', { fontCharacter: '\\ea74' })),
    (s.gistPrivate = new s('gist-private', { fontCharacter: '\\ea75' })),
    (s.gitForkPrivate = new s('git-fork-private', { fontCharacter: '\\ea75' })),
    (s.lock = new s('lock', { fontCharacter: '\\ea75' })),
    (s.mirrorPrivate = new s('mirror-private', { fontCharacter: '\\ea75' })),
    (s.close = new s('close', { fontCharacter: '\\ea76' })),
    (s.removeClose = new s('remove-close', { fontCharacter: '\\ea76' })),
    (s.x = new s('x', { fontCharacter: '\\ea76' })),
    (s.repoSync = new s('repo-sync', { fontCharacter: '\\ea77' })),
    (s.sync = new s('sync', { fontCharacter: '\\ea77' })),
    (s.clone = new s('clone', { fontCharacter: '\\ea78' })),
    (s.desktopDownload = new s('desktop-download', {
      fontCharacter: '\\ea78',
    })),
    (s.beaker = new s('beaker', { fontCharacter: '\\ea79' })),
    (s.microscope = new s('microscope', { fontCharacter: '\\ea79' })),
    (s.vm = new s('vm', { fontCharacter: '\\ea7a' })),
    (s.deviceDesktop = new s('device-desktop', { fontCharacter: '\\ea7a' })),
    (s.file = new s('file', { fontCharacter: '\\ea7b' })),
    (s.fileText = new s('file-text', { fontCharacter: '\\ea7b' })),
    (s.more = new s('more', { fontCharacter: '\\ea7c' })),
    (s.ellipsis = new s('ellipsis', { fontCharacter: '\\ea7c' })),
    (s.kebabHorizontal = new s('kebab-horizontal', {
      fontCharacter: '\\ea7c',
    })),
    (s.mailReply = new s('mail-reply', { fontCharacter: '\\ea7d' })),
    (s.reply = new s('reply', { fontCharacter: '\\ea7d' })),
    (s.organization = new s('organization', { fontCharacter: '\\ea7e' })),
    (s.organizationFilled = new s('organization-filled', {
      fontCharacter: '\\ea7e',
    })),
    (s.organizationOutline = new s('organization-outline', {
      fontCharacter: '\\ea7e',
    })),
    (s.newFile = new s('new-file', { fontCharacter: '\\ea7f' })),
    (s.fileAdd = new s('file-add', { fontCharacter: '\\ea7f' })),
    (s.newFolder = new s('new-folder', { fontCharacter: '\\ea80' })),
    (s.fileDirectoryCreate = new s('file-directory-create', {
      fontCharacter: '\\ea80',
    })),
    (s.trash = new s('trash', { fontCharacter: '\\ea81' })),
    (s.trashcan = new s('trashcan', { fontCharacter: '\\ea81' })),
    (s.history = new s('history', { fontCharacter: '\\ea82' })),
    (s.clock = new s('clock', { fontCharacter: '\\ea82' })),
    (s.folder = new s('folder', { fontCharacter: '\\ea83' })),
    (s.fileDirectory = new s('file-directory', { fontCharacter: '\\ea83' })),
    (s.symbolFolder = new s('symbol-folder', { fontCharacter: '\\ea83' })),
    (s.logoGithub = new s('logo-github', { fontCharacter: '\\ea84' })),
    (s.markGithub = new s('mark-github', { fontCharacter: '\\ea84' })),
    (s.github = new s('github', { fontCharacter: '\\ea84' })),
    (s.terminal = new s('terminal', { fontCharacter: '\\ea85' })),
    (s.console = new s('console', { fontCharacter: '\\ea85' })),
    (s.repl = new s('repl', { fontCharacter: '\\ea85' })),
    (s.zap = new s('zap', { fontCharacter: '\\ea86' })),
    (s.symbolEvent = new s('symbol-event', { fontCharacter: '\\ea86' })),
    (s.error = new s('error', { fontCharacter: '\\ea87' })),
    (s.stop = new s('stop', { fontCharacter: '\\ea87' })),
    (s.variable = new s('variable', { fontCharacter: '\\ea88' })),
    (s.symbolVariable = new s('symbol-variable', { fontCharacter: '\\ea88' })),
    (s.array = new s('array', { fontCharacter: '\\ea8a' })),
    (s.symbolArray = new s('symbol-array', { fontCharacter: '\\ea8a' })),
    (s.symbolModule = new s('symbol-module', { fontCharacter: '\\ea8b' })),
    (s.symbolPackage = new s('symbol-package', { fontCharacter: '\\ea8b' })),
    (s.symbolNamespace = new s('symbol-namespace', {
      fontCharacter: '\\ea8b',
    })),
    (s.symbolObject = new s('symbol-object', { fontCharacter: '\\ea8b' })),
    (s.symbolMethod = new s('symbol-method', { fontCharacter: '\\ea8c' })),
    (s.symbolFunction = new s('symbol-function', { fontCharacter: '\\ea8c' })),
    (s.symbolConstructor = new s('symbol-constructor', {
      fontCharacter: '\\ea8c',
    })),
    (s.symbolBoolean = new s('symbol-boolean', { fontCharacter: '\\ea8f' })),
    (s.symbolNull = new s('symbol-null', { fontCharacter: '\\ea8f' })),
    (s.symbolNumeric = new s('symbol-numeric', { fontCharacter: '\\ea90' })),
    (s.symbolNumber = new s('symbol-number', { fontCharacter: '\\ea90' })),
    (s.symbolStructure = new s('symbol-structure', {
      fontCharacter: '\\ea91',
    })),
    (s.symbolStruct = new s('symbol-struct', { fontCharacter: '\\ea91' })),
    (s.symbolParameter = new s('symbol-parameter', {
      fontCharacter: '\\ea92',
    })),
    (s.symbolTypeParameter = new s('symbol-type-parameter', {
      fontCharacter: '\\ea92',
    })),
    (s.symbolKey = new s('symbol-key', { fontCharacter: '\\ea93' })),
    (s.symbolText = new s('symbol-text', { fontCharacter: '\\ea93' })),
    (s.symbolReference = new s('symbol-reference', {
      fontCharacter: '\\ea94',
    })),
    (s.goToFile = new s('go-to-file', { fontCharacter: '\\ea94' })),
    (s.symbolEnum = new s('symbol-enum', { fontCharacter: '\\ea95' })),
    (s.symbolValue = new s('symbol-value', { fontCharacter: '\\ea95' })),
    (s.symbolRuler = new s('symbol-ruler', { fontCharacter: '\\ea96' })),
    (s.symbolUnit = new s('symbol-unit', { fontCharacter: '\\ea96' })),
    (s.activateBreakpoints = new s('activate-breakpoints', {
      fontCharacter: '\\ea97',
    })),
    (s.archive = new s('archive', { fontCharacter: '\\ea98' })),
    (s.arrowBoth = new s('arrow-both', { fontCharacter: '\\ea99' })),
    (s.arrowDown = new s('arrow-down', { fontCharacter: '\\ea9a' })),
    (s.arrowLeft = new s('arrow-left', { fontCharacter: '\\ea9b' })),
    (s.arrowRight = new s('arrow-right', { fontCharacter: '\\ea9c' })),
    (s.arrowSmallDown = new s('arrow-small-down', { fontCharacter: '\\ea9d' })),
    (s.arrowSmallLeft = new s('arrow-small-left', { fontCharacter: '\\ea9e' })),
    (s.arrowSmallRight = new s('arrow-small-right', {
      fontCharacter: '\\ea9f',
    })),
    (s.arrowSmallUp = new s('arrow-small-up', { fontCharacter: '\\eaa0' })),
    (s.arrowUp = new s('arrow-up', { fontCharacter: '\\eaa1' })),
    (s.bell = new s('bell', { fontCharacter: '\\eaa2' })),
    (s.bold = new s('bold', { fontCharacter: '\\eaa3' })),
    (s.book = new s('book', { fontCharacter: '\\eaa4' })),
    (s.bookmark = new s('bookmark', { fontCharacter: '\\eaa5' })),
    (s.debugBreakpointConditionalUnverified = new s(
      'debug-breakpoint-conditional-unverified',
      { fontCharacter: '\\eaa6' }
    )),
    (s.debugBreakpointConditional = new s('debug-breakpoint-conditional', {
      fontCharacter: '\\eaa7',
    })),
    (s.debugBreakpointConditionalDisabled = new s(
      'debug-breakpoint-conditional-disabled',
      { fontCharacter: '\\eaa7' }
    )),
    (s.debugBreakpointDataUnverified = new s(
      'debug-breakpoint-data-unverified',
      { fontCharacter: '\\eaa8' }
    )),
    (s.debugBreakpointData = new s('debug-breakpoint-data', {
      fontCharacter: '\\eaa9',
    })),
    (s.debugBreakpointDataDisabled = new s('debug-breakpoint-data-disabled', {
      fontCharacter: '\\eaa9',
    })),
    (s.debugBreakpointLogUnverified = new s('debug-breakpoint-log-unverified', {
      fontCharacter: '\\eaaa',
    })),
    (s.debugBreakpointLog = new s('debug-breakpoint-log', {
      fontCharacter: '\\eaab',
    })),
    (s.debugBreakpointLogDisabled = new s('debug-breakpoint-log-disabled', {
      fontCharacter: '\\eaab',
    })),
    (s.briefcase = new s('briefcase', { fontCharacter: '\\eaac' })),
    (s.broadcast = new s('broadcast', { fontCharacter: '\\eaad' })),
    (s.browser = new s('browser', { fontCharacter: '\\eaae' })),
    (s.bug = new s('bug', { fontCharacter: '\\eaaf' })),
    (s.calendar = new s('calendar', { fontCharacter: '\\eab0' })),
    (s.caseSensitive = new s('case-sensitive', { fontCharacter: '\\eab1' })),
    (s.check = new s('check', { fontCharacter: '\\eab2' })),
    (s.checklist = new s('checklist', { fontCharacter: '\\eab3' })),
    (s.chevronDown = new s('chevron-down', { fontCharacter: '\\eab4' })),
    (s.dropDownButton = new s('drop-down-button', s.chevronDown.definition)),
    (s.chevronLeft = new s('chevron-left', { fontCharacter: '\\eab5' })),
    (s.chevronRight = new s('chevron-right', { fontCharacter: '\\eab6' })),
    (s.chevronUp = new s('chevron-up', { fontCharacter: '\\eab7' })),
    (s.chromeClose = new s('chrome-close', { fontCharacter: '\\eab8' })),
    (s.chromeMaximize = new s('chrome-maximize', { fontCharacter: '\\eab9' })),
    (s.chromeMinimize = new s('chrome-minimize', { fontCharacter: '\\eaba' })),
    (s.chromeRestore = new s('chrome-restore', { fontCharacter: '\\eabb' })),
    (s.circleOutline = new s('circle-outline', { fontCharacter: '\\eabc' })),
    (s.debugBreakpointUnverified = new s('debug-breakpoint-unverified', {
      fontCharacter: '\\eabc',
    })),
    (s.circleSlash = new s('circle-slash', { fontCharacter: '\\eabd' })),
    (s.circuitBoard = new s('circuit-board', { fontCharacter: '\\eabe' })),
    (s.clearAll = new s('clear-all', { fontCharacter: '\\eabf' })),
    (s.clippy = new s('clippy', { fontCharacter: '\\eac0' })),
    (s.closeAll = new s('close-all', { fontCharacter: '\\eac1' })),
    (s.cloudDownload = new s('cloud-download', { fontCharacter: '\\eac2' })),
    (s.cloudUpload = new s('cloud-upload', { fontCharacter: '\\eac3' })),
    (s.code = new s('code', { fontCharacter: '\\eac4' })),
    (s.collapseAll = new s('collapse-all', { fontCharacter: '\\eac5' })),
    (s.colorMode = new s('color-mode', { fontCharacter: '\\eac6' })),
    (s.commentDiscussion = new s('comment-discussion', {
      fontCharacter: '\\eac7',
    })),
    (s.compareChanges = new s('compare-changes', { fontCharacter: '\\eafd' })),
    (s.creditCard = new s('credit-card', { fontCharacter: '\\eac9' })),
    (s.dash = new s('dash', { fontCharacter: '\\eacc' })),
    (s.dashboard = new s('dashboard', { fontCharacter: '\\eacd' })),
    (s.database = new s('database', { fontCharacter: '\\eace' })),
    (s.debugContinue = new s('debug-continue', { fontCharacter: '\\eacf' })),
    (s.debugDisconnect = new s('debug-disconnect', {
      fontCharacter: '\\ead0',
    })),
    (s.debugPause = new s('debug-pause', { fontCharacter: '\\ead1' })),
    (s.debugRestart = new s('debug-restart', { fontCharacter: '\\ead2' })),
    (s.debugStart = new s('debug-start', { fontCharacter: '\\ead3' })),
    (s.debugStepInto = new s('debug-step-into', { fontCharacter: '\\ead4' })),
    (s.debugStepOut = new s('debug-step-out', { fontCharacter: '\\ead5' })),
    (s.debugStepOver = new s('debug-step-over', { fontCharacter: '\\ead6' })),
    (s.debugStop = new s('debug-stop', { fontCharacter: '\\ead7' })),
    (s.debug = new s('debug', { fontCharacter: '\\ead8' })),
    (s.deviceCameraVideo = new s('device-camera-video', {
      fontCharacter: '\\ead9',
    })),
    (s.deviceCamera = new s('device-camera', { fontCharacter: '\\eada' })),
    (s.deviceMobile = new s('device-mobile', { fontCharacter: '\\eadb' })),
    (s.diffAdded = new s('diff-added', { fontCharacter: '\\eadc' })),
    (s.diffIgnored = new s('diff-ignored', { fontCharacter: '\\eadd' })),
    (s.diffModified = new s('diff-modified', { fontCharacter: '\\eade' })),
    (s.diffRemoved = new s('diff-removed', { fontCharacter: '\\eadf' })),
    (s.diffRenamed = new s('diff-renamed', { fontCharacter: '\\eae0' })),
    (s.diff = new s('diff', { fontCharacter: '\\eae1' })),
    (s.discard = new s('discard', { fontCharacter: '\\eae2' })),
    (s.editorLayout = new s('editor-layout', { fontCharacter: '\\eae3' })),
    (s.emptyWindow = new s('empty-window', { fontCharacter: '\\eae4' })),
    (s.exclude = new s('exclude', { fontCharacter: '\\eae5' })),
    (s.extensions = new s('extensions', { fontCharacter: '\\eae6' })),
    (s.eyeClosed = new s('eye-closed', { fontCharacter: '\\eae7' })),
    (s.fileBinary = new s('file-binary', { fontCharacter: '\\eae8' })),
    (s.fileCode = new s('file-code', { fontCharacter: '\\eae9' })),
    (s.fileMedia = new s('file-media', { fontCharacter: '\\eaea' })),
    (s.filePdf = new s('file-pdf', { fontCharacter: '\\eaeb' })),
    (s.fileSubmodule = new s('file-submodule', { fontCharacter: '\\eaec' })),
    (s.fileSymlinkDirectory = new s('file-symlink-directory', {
      fontCharacter: '\\eaed',
    })),
    (s.fileSymlinkFile = new s('file-symlink-file', {
      fontCharacter: '\\eaee',
    })),
    (s.fileZip = new s('file-zip', { fontCharacter: '\\eaef' })),
    (s.files = new s('files', { fontCharacter: '\\eaf0' })),
    (s.filter = new s('filter', { fontCharacter: '\\eaf1' })),
    (s.flame = new s('flame', { fontCharacter: '\\eaf2' })),
    (s.foldDown = new s('fold-down', { fontCharacter: '\\eaf3' })),
    (s.foldUp = new s('fold-up', { fontCharacter: '\\eaf4' })),
    (s.fold = new s('fold', { fontCharacter: '\\eaf5' })),
    (s.folderActive = new s('folder-active', { fontCharacter: '\\eaf6' })),
    (s.folderOpened = new s('folder-opened', { fontCharacter: '\\eaf7' })),
    (s.gear = new s('gear', { fontCharacter: '\\eaf8' })),
    (s.gift = new s('gift', { fontCharacter: '\\eaf9' })),
    (s.gistSecret = new s('gist-secret', { fontCharacter: '\\eafa' })),
    (s.gist = new s('gist', { fontCharacter: '\\eafb' })),
    (s.gitCommit = new s('git-commit', { fontCharacter: '\\eafc' })),
    (s.gitCompare = new s('git-compare', { fontCharacter: '\\eafd' })),
    (s.gitMerge = new s('git-merge', { fontCharacter: '\\eafe' })),
    (s.githubAction = new s('github-action', { fontCharacter: '\\eaff' })),
    (s.githubAlt = new s('github-alt', { fontCharacter: '\\eb00' })),
    (s.globe = new s('globe', { fontCharacter: '\\eb01' })),
    (s.grabber = new s('grabber', { fontCharacter: '\\eb02' })),
    (s.graph = new s('graph', { fontCharacter: '\\eb03' })),
    (s.gripper = new s('gripper', { fontCharacter: '\\eb04' })),
    (s.heart = new s('heart', { fontCharacter: '\\eb05' })),
    (s.home = new s('home', { fontCharacter: '\\eb06' })),
    (s.horizontalRule = new s('horizontal-rule', { fontCharacter: '\\eb07' })),
    (s.hubot = new s('hubot', { fontCharacter: '\\eb08' })),
    (s.inbox = new s('inbox', { fontCharacter: '\\eb09' })),
    (s.issueClosed = new s('issue-closed', { fontCharacter: '\\eba4' })),
    (s.issueReopened = new s('issue-reopened', { fontCharacter: '\\eb0b' })),
    (s.issues = new s('issues', { fontCharacter: '\\eb0c' })),
    (s.italic = new s('italic', { fontCharacter: '\\eb0d' })),
    (s.jersey = new s('jersey', { fontCharacter: '\\eb0e' })),
    (s.json = new s('json', { fontCharacter: '\\eb0f' })),
    (s.kebabVertical = new s('kebab-vertical', { fontCharacter: '\\eb10' })),
    (s.key = new s('key', { fontCharacter: '\\eb11' })),
    (s.law = new s('law', { fontCharacter: '\\eb12' })),
    (s.lightbulbAutofix = new s('lightbulb-autofix', {
      fontCharacter: '\\eb13',
    })),
    (s.linkExternal = new s('link-external', { fontCharacter: '\\eb14' })),
    (s.link = new s('link', { fontCharacter: '\\eb15' })),
    (s.listOrdered = new s('list-ordered', { fontCharacter: '\\eb16' })),
    (s.listUnordered = new s('list-unordered', { fontCharacter: '\\eb17' })),
    (s.liveShare = new s('live-share', { fontCharacter: '\\eb18' })),
    (s.loading = new s('loading', { fontCharacter: '\\eb19' })),
    (s.location = new s('location', { fontCharacter: '\\eb1a' })),
    (s.mailRead = new s('mail-read', { fontCharacter: '\\eb1b' })),
    (s.mail = new s('mail', { fontCharacter: '\\eb1c' })),
    (s.markdown = new s('markdown', { fontCharacter: '\\eb1d' })),
    (s.megaphone = new s('megaphone', { fontCharacter: '\\eb1e' })),
    (s.mention = new s('mention', { fontCharacter: '\\eb1f' })),
    (s.milestone = new s('milestone', { fontCharacter: '\\eb20' })),
    (s.mortarBoard = new s('mortar-board', { fontCharacter: '\\eb21' })),
    (s.move = new s('move', { fontCharacter: '\\eb22' })),
    (s.multipleWindows = new s('multiple-windows', {
      fontCharacter: '\\eb23',
    })),
    (s.mute = new s('mute', { fontCharacter: '\\eb24' })),
    (s.noNewline = new s('no-newline', { fontCharacter: '\\eb25' })),
    (s.note = new s('note', { fontCharacter: '\\eb26' })),
    (s.octoface = new s('octoface', { fontCharacter: '\\eb27' })),
    (s.openPreview = new s('open-preview', { fontCharacter: '\\eb28' })),
    (s.package_ = new s('package', { fontCharacter: '\\eb29' })),
    (s.paintcan = new s('paintcan', { fontCharacter: '\\eb2a' })),
    (s.pin = new s('pin', { fontCharacter: '\\eb2b' })),
    (s.play = new s('play', { fontCharacter: '\\eb2c' })),
    (s.run = new s('run', { fontCharacter: '\\eb2c' })),
    (s.plug = new s('plug', { fontCharacter: '\\eb2d' })),
    (s.preserveCase = new s('preserve-case', { fontCharacter: '\\eb2e' })),
    (s.preview = new s('preview', { fontCharacter: '\\eb2f' })),
    (s.project = new s('project', { fontCharacter: '\\eb30' })),
    (s.pulse = new s('pulse', { fontCharacter: '\\eb31' })),
    (s.question = new s('question', { fontCharacter: '\\eb32' })),
    (s.quote = new s('quote', { fontCharacter: '\\eb33' })),
    (s.radioTower = new s('radio-tower', { fontCharacter: '\\eb34' })),
    (s.reactions = new s('reactions', { fontCharacter: '\\eb35' })),
    (s.references = new s('references', { fontCharacter: '\\eb36' })),
    (s.refresh = new s('refresh', { fontCharacter: '\\eb37' })),
    (s.regex = new s('regex', { fontCharacter: '\\eb38' })),
    (s.remoteExplorer = new s('remote-explorer', { fontCharacter: '\\eb39' })),
    (s.remote = new s('remote', { fontCharacter: '\\eb3a' })),
    (s.remove = new s('remove', { fontCharacter: '\\eb3b' })),
    (s.replaceAll = new s('replace-all', { fontCharacter: '\\eb3c' })),
    (s.replace = new s('replace', { fontCharacter: '\\eb3d' })),
    (s.repoClone = new s('repo-clone', { fontCharacter: '\\eb3e' })),
    (s.repoForcePush = new s('repo-force-push', { fontCharacter: '\\eb3f' })),
    (s.repoPull = new s('repo-pull', { fontCharacter: '\\eb40' })),
    (s.repoPush = new s('repo-push', { fontCharacter: '\\eb41' })),
    (s.report = new s('report', { fontCharacter: '\\eb42' })),
    (s.requestChanges = new s('request-changes', { fontCharacter: '\\eb43' })),
    (s.rocket = new s('rocket', { fontCharacter: '\\eb44' })),
    (s.rootFolderOpened = new s('root-folder-opened', {
      fontCharacter: '\\eb45',
    })),
    (s.rootFolder = new s('root-folder', { fontCharacter: '\\eb46' })),
    (s.rss = new s('rss', { fontCharacter: '\\eb47' })),
    (s.ruby = new s('ruby', { fontCharacter: '\\eb48' })),
    (s.saveAll = new s('save-all', { fontCharacter: '\\eb49' })),
    (s.saveAs = new s('save-as', { fontCharacter: '\\eb4a' })),
    (s.save = new s('save', { fontCharacter: '\\eb4b' })),
    (s.screenFull = new s('screen-full', { fontCharacter: '\\eb4c' })),
    (s.screenNormal = new s('screen-normal', { fontCharacter: '\\eb4d' })),
    (s.searchStop = new s('search-stop', { fontCharacter: '\\eb4e' })),
    (s.server = new s('server', { fontCharacter: '\\eb50' })),
    (s.settingsGear = new s('settings-gear', { fontCharacter: '\\eb51' })),
    (s.settings = new s('settings', { fontCharacter: '\\eb52' })),
    (s.shield = new s('shield', { fontCharacter: '\\eb53' })),
    (s.smiley = new s('smiley', { fontCharacter: '\\eb54' })),
    (s.sortPrecedence = new s('sort-precedence', { fontCharacter: '\\eb55' })),
    (s.splitHorizontal = new s('split-horizontal', {
      fontCharacter: '\\eb56',
    })),
    (s.splitVertical = new s('split-vertical', { fontCharacter: '\\eb57' })),
    (s.squirrel = new s('squirrel', { fontCharacter: '\\eb58' })),
    (s.starFull = new s('star-full', { fontCharacter: '\\eb59' })),
    (s.starHalf = new s('star-half', { fontCharacter: '\\eb5a' })),
    (s.symbolClass = new s('symbol-class', { fontCharacter: '\\eb5b' })),
    (s.symbolColor = new s('symbol-color', { fontCharacter: '\\eb5c' })),
    (s.symbolCustomColor = new s('symbol-customcolor', {
      fontCharacter: '\\eb5c',
    })),
    (s.symbolConstant = new s('symbol-constant', { fontCharacter: '\\eb5d' })),
    (s.symbolEnumMember = new s('symbol-enum-member', {
      fontCharacter: '\\eb5e',
    })),
    (s.symbolField = new s('symbol-field', { fontCharacter: '\\eb5f' })),
    (s.symbolFile = new s('symbol-file', { fontCharacter: '\\eb60' })),
    (s.symbolInterface = new s('symbol-interface', {
      fontCharacter: '\\eb61',
    })),
    (s.symbolKeyword = new s('symbol-keyword', { fontCharacter: '\\eb62' })),
    (s.symbolMisc = new s('symbol-misc', { fontCharacter: '\\eb63' })),
    (s.symbolOperator = new s('symbol-operator', { fontCharacter: '\\eb64' })),
    (s.symbolProperty = new s('symbol-property', { fontCharacter: '\\eb65' })),
    (s.wrench = new s('wrench', { fontCharacter: '\\eb65' })),
    (s.wrenchSubaction = new s('wrench-subaction', {
      fontCharacter: '\\eb65',
    })),
    (s.symbolSnippet = new s('symbol-snippet', { fontCharacter: '\\eb66' })),
    (s.tasklist = new s('tasklist', { fontCharacter: '\\eb67' })),
    (s.telescope = new s('telescope', { fontCharacter: '\\eb68' })),
    (s.textSize = new s('text-size', { fontCharacter: '\\eb69' })),
    (s.threeBars = new s('three-bars', { fontCharacter: '\\eb6a' })),
    (s.thumbsdown = new s('thumbsdown', { fontCharacter: '\\eb6b' })),
    (s.thumbsup = new s('thumbsup', { fontCharacter: '\\eb6c' })),
    (s.tools = new s('tools', { fontCharacter: '\\eb6d' })),
    (s.triangleDown = new s('triangle-down', { fontCharacter: '\\eb6e' })),
    (s.triangleLeft = new s('triangle-left', { fontCharacter: '\\eb6f' })),
    (s.triangleRight = new s('triangle-right', { fontCharacter: '\\eb70' })),
    (s.triangleUp = new s('triangle-up', { fontCharacter: '\\eb71' })),
    (s.twitter = new s('twitter', { fontCharacter: '\\eb72' })),
    (s.unfold = new s('unfold', { fontCharacter: '\\eb73' })),
    (s.unlock = new s('unlock', { fontCharacter: '\\eb74' })),
    (s.unmute = new s('unmute', { fontCharacter: '\\eb75' })),
    (s.unverified = new s('unverified', { fontCharacter: '\\eb76' })),
    (s.verified = new s('verified', { fontCharacter: '\\eb77' })),
    (s.versions = new s('versions', { fontCharacter: '\\eb78' })),
    (s.vmActive = new s('vm-active', { fontCharacter: '\\eb79' })),
    (s.vmOutline = new s('vm-outline', { fontCharacter: '\\eb7a' })),
    (s.vmRunning = new s('vm-running', { fontCharacter: '\\eb7b' })),
    (s.watch = new s('watch', { fontCharacter: '\\eb7c' })),
    (s.whitespace = new s('whitespace', { fontCharacter: '\\eb7d' })),
    (s.wholeWord = new s('whole-word', { fontCharacter: '\\eb7e' })),
    (s.window = new s('window', { fontCharacter: '\\eb7f' })),
    (s.wordWrap = new s('word-wrap', { fontCharacter: '\\eb80' })),
    (s.zoomIn = new s('zoom-in', { fontCharacter: '\\eb81' })),
    (s.zoomOut = new s('zoom-out', { fontCharacter: '\\eb82' })),
    (s.listFilter = new s('list-filter', { fontCharacter: '\\eb83' })),
    (s.listFlat = new s('list-flat', { fontCharacter: '\\eb84' })),
    (s.listSelection = new s('list-selection', { fontCharacter: '\\eb85' })),
    (s.selection = new s('selection', { fontCharacter: '\\eb85' })),
    (s.listTree = new s('list-tree', { fontCharacter: '\\eb86' })),
    (s.debugBreakpointFunctionUnverified = new s(
      'debug-breakpoint-function-unverified',
      { fontCharacter: '\\eb87' }
    )),
    (s.debugBreakpointFunction = new s('debug-breakpoint-function', {
      fontCharacter: '\\eb88',
    })),
    (s.debugBreakpointFunctionDisabled = new s(
      'debug-breakpoint-function-disabled',
      { fontCharacter: '\\eb88' }
    )),
    (s.debugStackframeActive = new s('debug-stackframe-active', {
      fontCharacter: '\\eb89',
    })),
    (s.circleSmallFilled = new s('circle-small-filled', {
      fontCharacter: '\\eb8a',
    })),
    (s.debugStackframeDot = new s(
      'debug-stackframe-dot',
      s.circleSmallFilled.definition
    )),
    (s.debugStackframe = new s('debug-stackframe', {
      fontCharacter: '\\eb8b',
    })),
    (s.debugStackframeFocused = new s('debug-stackframe-focused', {
      fontCharacter: '\\eb8b',
    })),
    (s.debugBreakpointUnsupported = new s('debug-breakpoint-unsupported', {
      fontCharacter: '\\eb8c',
    })),
    (s.symbolString = new s('symbol-string', { fontCharacter: '\\eb8d' })),
    (s.debugReverseContinue = new s('debug-reverse-continue', {
      fontCharacter: '\\eb8e',
    })),
    (s.debugStepBack = new s('debug-step-back', { fontCharacter: '\\eb8f' })),
    (s.debugRestartFrame = new s('debug-restart-frame', {
      fontCharacter: '\\eb90',
    })),
    (s.callIncoming = new s('call-incoming', { fontCharacter: '\\eb92' })),
    (s.callOutgoing = new s('call-outgoing', { fontCharacter: '\\eb93' })),
    (s.menu = new s('menu', { fontCharacter: '\\eb94' })),
    (s.expandAll = new s('expand-all', { fontCharacter: '\\eb95' })),
    (s.feedback = new s('feedback', { fontCharacter: '\\eb96' })),
    (s.groupByRefType = new s('group-by-ref-type', {
      fontCharacter: '\\eb97',
    })),
    (s.ungroupByRefType = new s('ungroup-by-ref-type', {
      fontCharacter: '\\eb98',
    })),
    (s.account = new s('account', { fontCharacter: '\\eb99' })),
    (s.bellDot = new s('bell-dot', { fontCharacter: '\\eb9a' })),
    (s.debugConsole = new s('debug-console', { fontCharacter: '\\eb9b' })),
    (s.library = new s('library', { fontCharacter: '\\eb9c' })),
    (s.output = new s('output', { fontCharacter: '\\eb9d' })),
    (s.runAll = new s('run-all', { fontCharacter: '\\eb9e' })),
    (s.syncIgnored = new s('sync-ignored', { fontCharacter: '\\eb9f' })),
    (s.pinned = new s('pinned', { fontCharacter: '\\eba0' })),
    (s.githubInverted = new s('github-inverted', { fontCharacter: '\\eba1' })),
    (s.debugAlt = new s('debug-alt', { fontCharacter: '\\eb91' })),
    (s.serverProcess = new s('server-process', { fontCharacter: '\\eba2' })),
    (s.serverEnvironment = new s('server-environment', {
      fontCharacter: '\\eba3',
    })),
    (s.pass = new s('pass', { fontCharacter: '\\eba4' })),
    (s.stopCircle = new s('stop-circle', { fontCharacter: '\\eba5' })),
    (s.playCircle = new s('play-circle', { fontCharacter: '\\eba6' })),
    (s.record = new s('record', { fontCharacter: '\\eba7' })),
    (s.debugAltSmall = new s('debug-alt-small', { fontCharacter: '\\eba8' })),
    (s.vmConnect = new s('vm-connect', { fontCharacter: '\\eba9' })),
    (s.cloud = new s('cloud', { fontCharacter: '\\ebaa' })),
    (s.merge = new s('merge', { fontCharacter: '\\ebab' })),
    (s.exportIcon = new s('export', { fontCharacter: '\\ebac' })),
    (s.graphLeft = new s('graph-left', { fontCharacter: '\\ebad' })),
    (s.magnet = new s('magnet', { fontCharacter: '\\ebae' })),
    (s.notebook = new s('notebook', { fontCharacter: '\\ebaf' })),
    (s.redo = new s('redo', { fontCharacter: '\\ebb0' })),
    (s.checkAll = new s('check-all', { fontCharacter: '\\ebb1' })),
    (s.pinnedDirty = new s('pinned-dirty', { fontCharacter: '\\ebb2' })),
    (s.passFilled = new s('pass-filled', { fontCharacter: '\\ebb3' })),
    (s.circleLargeFilled = new s('circle-large-filled', {
      fontCharacter: '\\ebb4',
    })),
    (s.circleLargeOutline = new s('circle-large-outline', {
      fontCharacter: '\\ebb5',
    })),
    (s.combine = new s('combine', { fontCharacter: '\\ebb6' })),
    (s.gather = new s('gather', { fontCharacter: '\\ebb6' })),
    (s.table = new s('table', { fontCharacter: '\\ebb7' })),
    (s.variableGroup = new s('variable-group', { fontCharacter: '\\ebb8' })),
    (s.typeHierarchy = new s('type-hierarchy', { fontCharacter: '\\ebb9' })),
    (s.typeHierarchySub = new s('type-hierarchy-sub', {
      fontCharacter: '\\ebba',
    })),
    (s.typeHierarchySuper = new s('type-hierarchy-super', {
      fontCharacter: '\\ebbb',
    })),
    (s.gitPullRequestCreate = new s('git-pull-request-create', {
      fontCharacter: '\\ebbc',
    })),
    (s.runAbove = new s('run-above', { fontCharacter: '\\ebbd' })),
    (s.runBelow = new s('run-below', { fontCharacter: '\\ebbe' })),
    (s.notebookTemplate = new s('notebook-template', {
      fontCharacter: '\\ebbf',
    })),
    (s.debugRerun = new s('debug-rerun', { fontCharacter: '\\ebc0' })),
    (s.workspaceTrusted = new s('workspace-trusted', {
      fontCharacter: '\\ebc1',
    })),
    (s.workspaceUntrusted = new s('workspace-untrusted', {
      fontCharacter: '\\ebc2',
    })),
    (s.workspaceUnspecified = new s('workspace-unspecified', {
      fontCharacter: '\\ebc3',
    })),
    (s.terminalCmd = new s('terminal-cmd', { fontCharacter: '\\ebc4' })),
    (s.terminalDebian = new s('terminal-debian', { fontCharacter: '\\ebc5' })),
    (s.terminalLinux = new s('terminal-linux', { fontCharacter: '\\ebc6' })),
    (s.terminalPowershell = new s('terminal-powershell', {
      fontCharacter: '\\ebc7',
    })),
    (s.terminalTmux = new s('terminal-tmux', { fontCharacter: '\\ebc8' })),
    (s.terminalUbuntu = new s('terminal-ubuntu', { fontCharacter: '\\ebc9' })),
    (s.terminalBash = new s('terminal-bash', { fontCharacter: '\\ebca' })),
    (s.arrowSwap = new s('arrow-swap', { fontCharacter: '\\ebcb' })),
    (s.copy = new s('copy', { fontCharacter: '\\ebcc' })),
    (s.personAdd = new s('person-add', { fontCharacter: '\\ebcd' })),
    (s.filterFilled = new s('filter-filled', { fontCharacter: '\\ebce' })),
    (s.wand = new s('wand', { fontCharacter: '\\ebcf' })),
    (s.debugLineByLine = new s('debug-line-by-line', {
      fontCharacter: '\\ebd0',
    })),
    (s.inspect = new s('inspect', { fontCharacter: '\\ebd1' })),
    (s.layers = new s('layers', { fontCharacter: '\\ebd2' })),
    (s.layersDot = new s('layers-dot', { fontCharacter: '\\ebd3' })),
    (s.layersActive = new s('layers-active', { fontCharacter: '\\ebd4' })),
    (s.compass = new s('compass', { fontCharacter: '\\ebd5' })),
    (s.compassDot = new s('compass-dot', { fontCharacter: '\\ebd6' })),
    (s.compassActive = new s('compass-active', { fontCharacter: '\\ebd7' })),
    (s.azure = new s('azure', { fontCharacter: '\\ebd8' })),
    (s.issueDraft = new s('issue-draft', { fontCharacter: '\\ebd9' })),
    (s.gitPullRequestClosed = new s('git-pull-request-closed', {
      fontCharacter: '\\ebda',
    })),
    (s.gitPullRequestDraft = new s('git-pull-request-draft', {
      fontCharacter: '\\ebdb',
    })),
    (s.debugAll = new s('debug-all', { fontCharacter: '\\ebdc' })),
    (s.debugCoverage = new s('debug-coverage', { fontCharacter: '\\ebdd' })),
    (s.runErrors = new s('run-errors', { fontCharacter: '\\ebde' })),
    (s.folderLibrary = new s('folder-library', { fontCharacter: '\\ebdf' })),
    (s.debugContinueSmall = new s('debug-continue-small', {
      fontCharacter: '\\ebe0',
    })),
    (s.beakerStop = new s('beaker-stop', { fontCharacter: '\\ebe1' })),
    (s.graphLine = new s('graph-line', { fontCharacter: '\\ebe2' })),
    (s.graphScatter = new s('graph-scatter', { fontCharacter: '\\ebe3' })),
    (s.pieChart = new s('pie-chart', { fontCharacter: '\\ebe4' })),
    (s.bracket = new s('bracket', s.json.definition)),
    (s.bracketDot = new s('bracket-dot', { fontCharacter: '\\ebe5' })),
    (s.bracketError = new s('bracket-error', { fontCharacter: '\\ebe6' })),
    (s.lockSmall = new s('lock-small', { fontCharacter: '\\ebe7' })),
    (s.azureDevops = new s('azure-devops', { fontCharacter: '\\ebe8' })),
    (s.verifiedFilled = new s('verified-filled', { fontCharacter: '\\ebe9' })),
    (s.newLine = new s('newline', { fontCharacter: '\\ebea' })),
    (s.layout = new s('layout', { fontCharacter: '\\ebeb' })),
    (s.layoutActivitybarLeft = new s('layout-activitybar-left', {
      fontCharacter: '\\ebec',
    })),
    (s.layoutActivitybarRight = new s('layout-activitybar-right', {
      fontCharacter: '\\ebed',
    })),
    (s.layoutPanelLeft = new s('layout-panel-left', {
      fontCharacter: '\\ebee',
    })),
    (s.layoutPanelCenter = new s('layout-panel-center', {
      fontCharacter: '\\ebef',
    })),
    (s.layoutPanelJustify = new s('layout-panel-justify', {
      fontCharacter: '\\ebf0',
    })),
    (s.layoutPanelRight = new s('layout-panel-right', {
      fontCharacter: '\\ebf1',
    })),
    (s.layoutPanel = new s('layout-panel', { fontCharacter: '\\ebf2' })),
    (s.layoutSidebarLeft = new s('layout-sidebar-left', {
      fontCharacter: '\\ebf3',
    })),
    (s.layoutSidebarRight = new s('layout-sidebar-right', {
      fontCharacter: '\\ebf4',
    })),
    (s.layoutStatusbar = new s('layout-statusbar', {
      fontCharacter: '\\ebf5',
    })),
    (s.layoutMenubar = new s('layout-menubar', { fontCharacter: '\\ebf6' })),
    (s.layoutCentered = new s('layout-centered', { fontCharacter: '\\ebf7' })),
    (s.layoutSidebarRightOff = new s('layout-sidebar-right-off', {
      fontCharacter: '\\ec00',
    })),
    (s.layoutPanelOff = new s('layout-panel-off', { fontCharacter: '\\ec01' })),
    (s.layoutSidebarLeftOff = new s('layout-sidebar-left-off', {
      fontCharacter: '\\ec02',
    })),
    (s.target = new s('target', { fontCharacter: '\\ebf8' })),
    (s.indent = new s('indent', { fontCharacter: '\\ebf9' })),
    (s.recordSmall = new s('record-small', { fontCharacter: '\\ebfa' })),
    (s.errorSmall = new s('error-small', { fontCharacter: '\\ebfb' })),
    (s.arrowCircleDown = new s('arrow-circle-down', {
      fontCharacter: '\\ebfc',
    })),
    (s.arrowCircleLeft = new s('arrow-circle-left', {
      fontCharacter: '\\ebfd',
    })),
    (s.arrowCircleRight = new s('arrow-circle-right', {
      fontCharacter: '\\ebfe',
    })),
    (s.arrowCircleUp = new s('arrow-circle-up', { fontCharacter: '\\ebff' })),
    (s.heartFilled = new s('heart-filled', { fontCharacter: '\\ec04' })),
    (s.map = new s('map', { fontCharacter: '\\ec05' })),
    (s.mapFilled = new s('map-filled', { fontCharacter: '\\ec06' })),
    (s.circleSmall = new s('circle-small', { fontCharacter: '\\ec07' })),
    (s.bellSlash = new s('bell-slash', { fontCharacter: '\\ec08' })),
    (s.bellSlashDot = new s('bell-slash-dot', { fontCharacter: '\\ec09' })),
    (s.commentUnresolved = new s('comment-unresolved', {
      fontCharacter: '\\ec0a',
    })),
    (s.gitPullRequestGoToChanges = new s('git-pull-request-go-to-changes', {
      fontCharacter: '\\ec0b',
    })),
    (s.gitPullRequestNewChanges = new s('git-pull-request-new-changes', {
      fontCharacter: '\\ec0c',
    })),
    (s.dialogError = new s('dialog-error', s.error.definition)),
    (s.dialogWarning = new s('dialog-warning', s.warning.definition)),
    (s.dialogInfo = new s('dialog-info', s.info.definition)),
    (s.dialogClose = new s('dialog-close', s.close.definition)),
    (s.treeItemExpanded = new s(
      'tree-item-expanded',
      s.chevronDown.definition
    )),
    (s.treeFilterOnTypeOn = new s(
      'tree-filter-on-type-on',
      s.listFilter.definition
    )),
    (s.treeFilterOnTypeOff = new s(
      'tree-filter-on-type-off',
      s.listSelection.definition
    )),
    (s.treeFilterClear = new s('tree-filter-clear', s.close.definition)),
    (s.treeItemLoading = new s('tree-item-loading', s.loading.definition)),
    (s.menuSelection = new s('menu-selection', s.check.definition)),
    (s.menuSubmenu = new s('menu-submenu', s.chevronRight.definition)),
    (s.menuBarMore = new s('menubar-more', s.more.definition)),
    (s.scrollbarButtonLeft = new s(
      'scrollbar-button-left',
      s.triangleLeft.definition
    )),
    (s.scrollbarButtonRight = new s(
      'scrollbar-button-right',
      s.triangleRight.definition
    )),
    (s.scrollbarButtonUp = new s(
      'scrollbar-button-up',
      s.triangleUp.definition
    )),
    (s.scrollbarButtonDown = new s(
      'scrollbar-button-down',
      s.triangleDown.definition
    )),
    (s.toolBarMore = new s('toolbar-more', s.more.definition)),
    (s.quickInputBack = new s('quick-input-back', s.arrowLeft.definition)),
    (function (e) {
      (e.iconNameSegment = '[A-Za-z0-9]+'),
        (e.iconNameExpression = '[A-Za-z0-9-]+'),
        (e.iconModifierExpression = '~[A-Za-z]+'),
        (e.iconNameCharacter = '[A-Za-z0-9~-]');
      const t = new RegExp(
        `^(${e.iconNameExpression})(${e.iconModifierExpression})?$`
      );
      function n(a) {
        if (a instanceof s) return ['codicon', 'codicon-' + a.id];
        const o = t.exec(a.id);
        if (!o) return n(s.error);
        const [, c, l] = o,
          u = ['codicon', 'codicon-' + c];
        return l && u.push('codicon-modifier-' + l.substr(1)), u;
      }
      (e.asClassNameArray = n),
        (e.asClassName = function r(a) {
          return n(a).join(' ');
        }),
        (e.asCSSSelector = function i(a) {
          return '.' + n(a).join('.');
        });
    })($r || ($r = {}));
  var Qr,
    Jr,
    Yr,
    Ln = function (e, t, n, r) {
      return new (n || (n = Promise))(function (a, o) {
        function c(h) {
          try {
            u(r.next(h));
          } catch (d) {
            o(d);
          }
        }
        function l(h) {
          try {
            u(r.throw(h));
          } catch (d) {
            o(d);
          }
        }
        function u(h) {
          h.done
            ? a(h.value)
            : (function i(a) {
                return a instanceof n
                  ? a
                  : new n(function (o) {
                      o(a);
                    });
              })(h.value).then(c, l);
        }
        u((r = r.apply(e, t || [])).next());
      });
    };
  class no extends tt {
    constructor(t, n, r) {
      super(),
        (this._registry = t),
        (this._languageId = n),
        (this._factory = r),
        (this._isDisposed = !1),
        (this._resolvePromise = null),
        (this._isResolved = !1);
    }
    get isResolved() {
      return this._isResolved;
    }
    dispose() {
      (this._isDisposed = !0), super.dispose();
    }
    resolve() {
      return Ln(this, void 0, void 0, function* () {
        return (
          this._resolvePromise || (this._resolvePromise = this._create()),
          this._resolvePromise
        );
      });
    }
    _create() {
      return Ln(this, void 0, void 0, function* () {
        const t = yield Promise.resolve(
          this._factory.createTokenizationSupport()
        );
        (this._isResolved = !0),
          t &&
            !this._isDisposed &&
            this._register(this._registry.register(this._languageId, t));
      });
    }
  }
  class ro {
    constructor(t, n, r) {
      (this._tokenBrand = void 0),
        (this.offset = t),
        (this.type = n),
        (this.language = r);
    }
    toString() {
      return '(' + this.offset + ', ' + this.type + ')';
    }
  }
  !(function (e) {
    const t = new Map();
    t.set(0, s.symbolMethod),
      t.set(1, s.symbolFunction),
      t.set(2, s.symbolConstructor),
      t.set(3, s.symbolField),
      t.set(4, s.symbolVariable),
      t.set(5, s.symbolClass),
      t.set(6, s.symbolStruct),
      t.set(7, s.symbolInterface),
      t.set(8, s.symbolModule),
      t.set(9, s.symbolProperty),
      t.set(10, s.symbolEvent),
      t.set(11, s.symbolOperator),
      t.set(12, s.symbolUnit),
      t.set(13, s.symbolValue),
      t.set(15, s.symbolEnum),
      t.set(14, s.symbolConstant),
      t.set(15, s.symbolEnum),
      t.set(16, s.symbolEnumMember),
      t.set(17, s.symbolKeyword),
      t.set(27, s.symbolSnippet),
      t.set(18, s.symbolText),
      t.set(19, s.symbolColor),
      t.set(20, s.symbolFile),
      t.set(21, s.symbolReference),
      t.set(22, s.symbolCustomColor),
      t.set(23, s.symbolFolder),
      t.set(24, s.symbolTypeParameter),
      t.set(25, s.account),
      t.set(26, s.issues),
      (e.toIcon = function n(a) {
        let o = t.get(a);
        return (
          o ||
            (console.info('No codicon found for CompletionItemKind ' + a),
            (o = s.symbolProperty)),
          o
        );
      });
    const r = new Map();
    r.set('method', 0),
      r.set('function', 1),
      r.set('constructor', 2),
      r.set('field', 3),
      r.set('variable', 4),
      r.set('class', 5),
      r.set('struct', 6),
      r.set('interface', 7),
      r.set('module', 8),
      r.set('property', 9),
      r.set('event', 10),
      r.set('operator', 11),
      r.set('unit', 12),
      r.set('value', 13),
      r.set('constant', 14),
      r.set('enum', 15),
      r.set('enum-member', 16),
      r.set('enumMember', 16),
      r.set('keyword', 17),
      r.set('snippet', 27),
      r.set('text', 18),
      r.set('color', 19),
      r.set('file', 20),
      r.set('reference', 21),
      r.set('customcolor', 22),
      r.set('folder', 23),
      r.set('type-parameter', 24),
      r.set('typeParameter', 24),
      r.set('account', 25),
      r.set('issue', 26),
      (e.fromString = function i(a, o) {
        let c = r.get(a);
        return typeof c > 'u' && !o && (c = 9), c;
      });
  })(Qr || (Qr = {})),
    (function (e) {
      const t = new Map();
      t.set(0, s.symbolFile),
        t.set(1, s.symbolModule),
        t.set(2, s.symbolNamespace),
        t.set(3, s.symbolPackage),
        t.set(4, s.symbolClass),
        t.set(5, s.symbolMethod),
        t.set(6, s.symbolProperty),
        t.set(7, s.symbolField),
        t.set(8, s.symbolConstructor),
        t.set(9, s.symbolEnum),
        t.set(10, s.symbolInterface),
        t.set(11, s.symbolFunction),
        t.set(12, s.symbolVariable),
        t.set(13, s.symbolConstant),
        t.set(14, s.symbolString),
        t.set(15, s.symbolNumber),
        t.set(16, s.symbolBoolean),
        t.set(17, s.symbolArray),
        t.set(18, s.symbolObject),
        t.set(19, s.symbolKey),
        t.set(20, s.symbolNull),
        t.set(21, s.symbolEnumMember),
        t.set(22, s.symbolStruct),
        t.set(23, s.symbolEvent),
        t.set(24, s.symbolOperator),
        t.set(25, s.symbolTypeParameter),
        (e.toIcon = function n(r) {
          let i = t.get(r);
          return (
            i ||
              (console.info('No codicon found for SymbolKind ' + r),
              (i = s.symbolProperty)),
            i
          );
        });
    })(Jr || (Jr = {}));
  class Ye {
    constructor(t) {
      this.value = t;
    }
  }
  (Ye.Comment = new Ye('comment')),
    (Ye.Imports = new Ye('imports')),
    (Ye.Region = new Ye('region')),
    (function (e) {
      e.is = function t(n) {
        return (
          !(!n || 'object' != typeof n) &&
          'string' == typeof n.id &&
          'string' == typeof n.title
        );
      };
    })(Yr || (Yr = {})),
    new (class to {
      constructor() {
        (this._map = new Map()),
          (this._factories = new Map()),
          (this._onDidChange = new we()),
          (this.onDidChange = this._onDidChange.event),
          (this._colorMap = null);
      }
      fire(t) {
        this._onDidChange.fire({ changedLanguages: t, changedColorMap: !1 });
      }
      register(t, n) {
        return (
          this._map.set(t, n),
          this.fire([t]),
          kt(() => {
            this._map.get(t) === n && (this._map.delete(t), this.fire([t]));
          })
        );
      }
      registerFactory(t, n) {
        var r;
        null === (r = this._factories.get(t)) || void 0 === r || r.dispose();
        const i = new no(this, t, n);
        return (
          this._factories.set(t, i),
          kt(() => {
            const a = this._factories.get(t);
            !a || a !== i || (this._factories.delete(t), a.dispose());
          })
        );
      }
      getOrCreate(t) {
        return Ln(this, void 0, void 0, function* () {
          const n = this.get(t);
          if (n) return n;
          const r = this._factories.get(t);
          return !r || r.isResolved ? null : (yield r.resolve(), this.get(t));
        });
      }
      get(t) {
        return this._map.get(t) || null;
      }
      isResolved(t) {
        if (this.get(t)) return !0;
        const r = this._factories.get(t);
        return !(r && !r.isResolved);
      }
      setColorMap(t) {
        (this._colorMap = t),
          this._onDidChange.fire({
            changedLanguages: Array.from(this._map.keys()),
            changedColorMap: !0,
          });
      }
      getColorMap() {
        return this._colorMap;
      }
      getDefaultBackground() {
        return this._colorMap && this._colorMap.length > 2
          ? this._colorMap[2]
          : null;
      }
    })();
  var Xr = (function (e) {
      return (
        (e[(e.DependsOnKbLayout = -1)] = 'DependsOnKbLayout'),
        (e[(e.Unknown = 0)] = 'Unknown'),
        (e[(e.Backspace = 1)] = 'Backspace'),
        (e[(e.Tab = 2)] = 'Tab'),
        (e[(e.Enter = 3)] = 'Enter'),
        (e[(e.Shift = 4)] = 'Shift'),
        (e[(e.Ctrl = 5)] = 'Ctrl'),
        (e[(e.Alt = 6)] = 'Alt'),
        (e[(e.PauseBreak = 7)] = 'PauseBreak'),
        (e[(e.CapsLock = 8)] = 'CapsLock'),
        (e[(e.Escape = 9)] = 'Escape'),
        (e[(e.Space = 10)] = 'Space'),
        (e[(e.PageUp = 11)] = 'PageUp'),
        (e[(e.PageDown = 12)] = 'PageDown'),
        (e[(e.End = 13)] = 'End'),
        (e[(e.Home = 14)] = 'Home'),
        (e[(e.LeftArrow = 15)] = 'LeftArrow'),
        (e[(e.UpArrow = 16)] = 'UpArrow'),
        (e[(e.RightArrow = 17)] = 'RightArrow'),
        (e[(e.DownArrow = 18)] = 'DownArrow'),
        (e[(e.Insert = 19)] = 'Insert'),
        (e[(e.Delete = 20)] = 'Delete'),
        (e[(e.Digit0 = 21)] = 'Digit0'),
        (e[(e.Digit1 = 22)] = 'Digit1'),
        (e[(e.Digit2 = 23)] = 'Digit2'),
        (e[(e.Digit3 = 24)] = 'Digit3'),
        (e[(e.Digit4 = 25)] = 'Digit4'),
        (e[(e.Digit5 = 26)] = 'Digit5'),
        (e[(e.Digit6 = 27)] = 'Digit6'),
        (e[(e.Digit7 = 28)] = 'Digit7'),
        (e[(e.Digit8 = 29)] = 'Digit8'),
        (e[(e.Digit9 = 30)] = 'Digit9'),
        (e[(e.KeyA = 31)] = 'KeyA'),
        (e[(e.KeyB = 32)] = 'KeyB'),
        (e[(e.KeyC = 33)] = 'KeyC'),
        (e[(e.KeyD = 34)] = 'KeyD'),
        (e[(e.KeyE = 35)] = 'KeyE'),
        (e[(e.KeyF = 36)] = 'KeyF'),
        (e[(e.KeyG = 37)] = 'KeyG'),
        (e[(e.KeyH = 38)] = 'KeyH'),
        (e[(e.KeyI = 39)] = 'KeyI'),
        (e[(e.KeyJ = 40)] = 'KeyJ'),
        (e[(e.KeyK = 41)] = 'KeyK'),
        (e[(e.KeyL = 42)] = 'KeyL'),
        (e[(e.KeyM = 43)] = 'KeyM'),
        (e[(e.KeyN = 44)] = 'KeyN'),
        (e[(e.KeyO = 45)] = 'KeyO'),
        (e[(e.KeyP = 46)] = 'KeyP'),
        (e[(e.KeyQ = 47)] = 'KeyQ'),
        (e[(e.KeyR = 48)] = 'KeyR'),
        (e[(e.KeyS = 49)] = 'KeyS'),
        (e[(e.KeyT = 50)] = 'KeyT'),
        (e[(e.KeyU = 51)] = 'KeyU'),
        (e[(e.KeyV = 52)] = 'KeyV'),
        (e[(e.KeyW = 53)] = 'KeyW'),
        (e[(e.KeyX = 54)] = 'KeyX'),
        (e[(e.KeyY = 55)] = 'KeyY'),
        (e[(e.KeyZ = 56)] = 'KeyZ'),
        (e[(e.Meta = 57)] = 'Meta'),
        (e[(e.ContextMenu = 58)] = 'ContextMenu'),
        (e[(e.F1 = 59)] = 'F1'),
        (e[(e.F2 = 60)] = 'F2'),
        (e[(e.F3 = 61)] = 'F3'),
        (e[(e.F4 = 62)] = 'F4'),
        (e[(e.F5 = 63)] = 'F5'),
        (e[(e.F6 = 64)] = 'F6'),
        (e[(e.F7 = 65)] = 'F7'),
        (e[(e.F8 = 66)] = 'F8'),
        (e[(e.F9 = 67)] = 'F9'),
        (e[(e.F10 = 68)] = 'F10'),
        (e[(e.F11 = 69)] = 'F11'),
        (e[(e.F12 = 70)] = 'F12'),
        (e[(e.F13 = 71)] = 'F13'),
        (e[(e.F14 = 72)] = 'F14'),
        (e[(e.F15 = 73)] = 'F15'),
        (e[(e.F16 = 74)] = 'F16'),
        (e[(e.F17 = 75)] = 'F17'),
        (e[(e.F18 = 76)] = 'F18'),
        (e[(e.F19 = 77)] = 'F19'),
        (e[(e.NumLock = 78)] = 'NumLock'),
        (e[(e.ScrollLock = 79)] = 'ScrollLock'),
        (e[(e.Semicolon = 80)] = 'Semicolon'),
        (e[(e.Equal = 81)] = 'Equal'),
        (e[(e.Comma = 82)] = 'Comma'),
        (e[(e.Minus = 83)] = 'Minus'),
        (e[(e.Period = 84)] = 'Period'),
        (e[(e.Slash = 85)] = 'Slash'),
        (e[(e.Backquote = 86)] = 'Backquote'),
        (e[(e.BracketLeft = 87)] = 'BracketLeft'),
        (e[(e.Backslash = 88)] = 'Backslash'),
        (e[(e.BracketRight = 89)] = 'BracketRight'),
        (e[(e.Quote = 90)] = 'Quote'),
        (e[(e.OEM_8 = 91)] = 'OEM_8'),
        (e[(e.IntlBackslash = 92)] = 'IntlBackslash'),
        (e[(e.Numpad0 = 93)] = 'Numpad0'),
        (e[(e.Numpad1 = 94)] = 'Numpad1'),
        (e[(e.Numpad2 = 95)] = 'Numpad2'),
        (e[(e.Numpad3 = 96)] = 'Numpad3'),
        (e[(e.Numpad4 = 97)] = 'Numpad4'),
        (e[(e.Numpad5 = 98)] = 'Numpad5'),
        (e[(e.Numpad6 = 99)] = 'Numpad6'),
        (e[(e.Numpad7 = 100)] = 'Numpad7'),
        (e[(e.Numpad8 = 101)] = 'Numpad8'),
        (e[(e.Numpad9 = 102)] = 'Numpad9'),
        (e[(e.NumpadMultiply = 103)] = 'NumpadMultiply'),
        (e[(e.NumpadAdd = 104)] = 'NumpadAdd'),
        (e[(e.NUMPAD_SEPARATOR = 105)] = 'NUMPAD_SEPARATOR'),
        (e[(e.NumpadSubtract = 106)] = 'NumpadSubtract'),
        (e[(e.NumpadDecimal = 107)] = 'NumpadDecimal'),
        (e[(e.NumpadDivide = 108)] = 'NumpadDivide'),
        (e[(e.KEY_IN_COMPOSITION = 109)] = 'KEY_IN_COMPOSITION'),
        (e[(e.ABNT_C1 = 110)] = 'ABNT_C1'),
        (e[(e.ABNT_C2 = 111)] = 'ABNT_C2'),
        (e[(e.AudioVolumeMute = 112)] = 'AudioVolumeMute'),
        (e[(e.AudioVolumeUp = 113)] = 'AudioVolumeUp'),
        (e[(e.AudioVolumeDown = 114)] = 'AudioVolumeDown'),
        (e[(e.BrowserSearch = 115)] = 'BrowserSearch'),
        (e[(e.BrowserHome = 116)] = 'BrowserHome'),
        (e[(e.BrowserBack = 117)] = 'BrowserBack'),
        (e[(e.BrowserForward = 118)] = 'BrowserForward'),
        (e[(e.MediaTrackNext = 119)] = 'MediaTrackNext'),
        (e[(e.MediaTrackPrevious = 120)] = 'MediaTrackPrevious'),
        (e[(e.MediaStop = 121)] = 'MediaStop'),
        (e[(e.MediaPlayPause = 122)] = 'MediaPlayPause'),
        (e[(e.LaunchMediaPlayer = 123)] = 'LaunchMediaPlayer'),
        (e[(e.LaunchMail = 124)] = 'LaunchMail'),
        (e[(e.LaunchApp2 = 125)] = 'LaunchApp2'),
        (e[(e.Clear = 126)] = 'Clear'),
        (e[(e.MAX_VALUE = 127)] = 'MAX_VALUE'),
        e
      );
    })(Xr || {}),
    Zr = (function (e) {
      return (
        (e[(e.Hint = 1)] = 'Hint'),
        (e[(e.Info = 2)] = 'Info'),
        (e[(e.Warning = 4)] = 'Warning'),
        (e[(e.Error = 8)] = 'Error'),
        e
      );
    })(Zr || {}),
    Kr = (function (e) {
      return (
        (e[(e.Unnecessary = 1)] = 'Unnecessary'),
        (e[(e.Deprecated = 2)] = 'Deprecated'),
        e
      );
    })(Kr || {}),
    ei = (function (e) {
      return (e[(e.LTR = 0)] = 'LTR'), (e[(e.RTL = 1)] = 'RTL'), e;
    })(ei || {});
  let Oo = (() => {
    class e {
      static chord(n, r) {
        return (function eo(e, t) {
          return (e | (((65535 & t) << 16) >>> 0)) >>> 0;
        })(n, r);
      }
    }
    return (
      (e.CtrlCmd = 2048), (e.Shift = 1024), (e.Alt = 512), (e.WinCtrl = 256), e
    );
  })();
  class Go extends ut {
    constructor(t) {
      super(0);
      for (let n = 0, r = t.length; n < r; n++) this.set(t.charCodeAt(n), 2);
      this.set(32, 1), this.set(9, 1);
    }
  }
  function ri(e, t, n, r, i) {
    return (
      (function el(e, t, n, r, i) {
        if (0 === r) return !0;
        const a = t.charCodeAt(r - 1);
        if (0 !== e.get(a) || 13 === a || 10 === a) return !0;
        if (i > 0) {
          const o = t.charCodeAt(r);
          if (0 !== e.get(o)) return !0;
        }
        return !1;
      })(e, t, 0, r, i) &&
      (function tl(e, t, n, r, i) {
        if (r + i === n) return !0;
        const a = t.charCodeAt(r + i);
        if (0 !== e.get(a) || 13 === a || 10 === a) return !0;
        if (i > 0) {
          const o = t.charCodeAt(r + i - 1);
          if (0 !== e.get(o)) return !0;
        }
        return !1;
      })(e, t, n, r, i)
    );
  }
  !(function jo(e) {
    const t = {};
  })((e) => new Go(e));
  class dt {
    constructor(t, n) {
      (this._wordSeparators = t),
        (this._searchRegex = n),
        (this._prevMatchStartIndex = -1),
        (this._prevMatchLength = 0);
    }
    reset(t) {
      (this._searchRegex.lastIndex = t),
        (this._prevMatchStartIndex = -1),
        (this._prevMatchLength = 0);
    }
    next(t) {
      const n = t.length;
      let r;
      do {
        if (
          this._prevMatchStartIndex + this._prevMatchLength === n ||
          ((r = this._searchRegex.exec(t)), !r)
        )
          return null;
        const i = r.index,
          a = r[0].length;
        if (i === this._prevMatchStartIndex && a === this._prevMatchLength) {
          if (0 === a) {
            fr(t, n, this._searchRegex.lastIndex) > 65535
              ? (this._searchRegex.lastIndex += 2)
              : (this._searchRegex.lastIndex += 1);
            continue;
          }
          return null;
        }
        if (
          ((this._prevMatchStartIndex = i),
          (this._prevMatchLength = a),
          !this._wordSeparators || ri(this._wordSeparators, t, n, i, a))
        )
          return r;
      } while (r);
      return null;
    }
  }
  class nl {
    static computeUnicodeHighlights(t, n, r) {
      const i = r ? r.startLineNumber : 1,
        a = r ? r.endLineNumber : t.getLineCount(),
        o = new ii(n),
        c = o.getCandidateCodePoints();
      let l;
      l =
        'allNonBasicAscii' === c
          ? new RegExp('[^\\t\\n\\r\\x20-\\x7E]', 'g')
          : new RegExp(
              `${(function rl(e, t) {
                return `[${(function cr(e) {
                  return e.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, '\\$&');
                })(e.map((r) => String.fromCodePoint(r)).join(''))}]`;
              })(Array.from(c))}`,
              'g'
            );
      const u = new dt(null, l),
        h = [];
      let f,
        d = !1,
        g = 0,
        _ = 0,
        b = 0;
      e: for (let y = i, k = a; y <= k; y++) {
        const v = t.getLineContent(y),
          L = v.length;
        u.reset(0);
        do {
          if (((f = u.next(v)), f)) {
            let D = f.index,
              H = f.index + f[0].length;
            D > 0 && it(v.charCodeAt(D - 1)) && D--,
              H + 1 < L && it(v.charCodeAt(H - 1)) && H++;
            const B = v.substring(D, H),
              p = yn(D + 1, qr, v, 0),
              m = o.shouldHighlightNonBasicASCII(B, p ? p.word : null);
            if (0 !== m) {
              if (
                (3 === m ? g++ : 2 === m ? _++ : 1 === m ? b++ : qa(),
                h.length >= 1e3)
              ) {
                d = !0;
                break e;
              }
              h.push(new Z(y, D + 1, y, H + 1));
            }
          }
        } while (f);
      }
      return {
        ranges: h,
        hasMore: d,
        ambiguousCharacterCount: g,
        invisibleCharacterCount: _,
        nonBasicAsciiCharacterCount: b,
      };
    }
    static computeUnicodeHighlightReason(t, n) {
      const r = new ii(n);
      switch (r.shouldHighlightNonBasicASCII(t, null)) {
        case 0:
          return null;
        case 2:
          return { kind: 1 };
        case 3: {
          const a = t.codePointAt(0),
            o = r.ambiguousCharacters.getPrimaryConfusable(a),
            c = be
              .getLocales()
              .filter(
                (l) =>
                  !be
                    .getInstance(new Set([...n.allowedLocales, l]))
                    .isAmbiguous(a)
              );
          return {
            kind: 0,
            confusableWith: String.fromCodePoint(o),
            notAmbiguousInLocales: c,
          };
        }
        case 1:
          return { kind: 2 };
      }
    }
  }
  class ii {
    constructor(t) {
      (this.options = t),
        (this.allowedCodePoints = new Set(t.allowedCodePoints)),
        (this.ambiguousCharacters = be.getInstance(new Set(t.allowedLocales)));
    }
    getCandidateCodePoints() {
      if (this.options.nonBasicASCII) return 'allNonBasicAscii';
      const t = new Set();
      if (this.options.invisibleCharacters)
        for (const n of Ee.codePoints) ai(String.fromCodePoint(n)) || t.add(n);
      if (this.options.ambiguousCharacters)
        for (const n of this.ambiguousCharacters.getConfusableCodePoints())
          t.add(n);
      for (const n of this.allowedCodePoints) t.delete(n);
      return t;
    }
    shouldHighlightNonBasicASCII(t, n) {
      const r = t.codePointAt(0);
      if (this.allowedCodePoints.has(r)) return 0;
      if (this.options.nonBasicASCII) return 1;
      let i = !1,
        a = !1;
      if (n)
        for (const o of n) {
          const c = o.codePointAt(0),
            l = ns(o);
          (i = i || l),
            !l &&
              !this.ambiguousCharacters.isAmbiguous(c) &&
              !Ee.isInvisibleCharacter(c) &&
              (a = !0);
        }
      return !i && a
        ? 0
        : this.options.invisibleCharacters &&
          !ai(t) &&
          Ee.isInvisibleCharacter(r)
        ? 2
        : this.options.ambiguousCharacters &&
          this.ambiguousCharacters.isAmbiguous(r)
        ? 3
        : 0;
    }
  }
  function ai(e) {
    return ' ' === e || '\n' === e || '\t' === e;
  }
  var Pe = function (e, t, n, r) {
    return new (n || (n = Promise))(function (a, o) {
      function c(h) {
        try {
          u(r.next(h));
        } catch (d) {
          o(d);
        }
      }
      function l(h) {
        try {
          u(r.throw(h));
        } catch (d) {
          o(d);
        }
      }
      function u(h) {
        h.done
          ? a(h.value)
          : (function i(a) {
              return a instanceof n
                ? a
                : new n(function (o) {
                    o(a);
                  });
            })(h.value).then(c, l);
      }
      u((r = r.apply(e, t || [])).next());
    });
  };
  class il extends Fs {
    get uri() {
      return this._uri;
    }
    get eol() {
      return this._eol;
    }
    getValue() {
      return this.getText();
    }
    getLinesContent() {
      return this._lines.slice(0);
    }
    getLineCount() {
      return this._lines.length;
    }
    getLineContent(t) {
      return this._lines[t - 1];
    }
    getWordAtPosition(t, n) {
      const r = yn(
        t.column,
        (function Ps(e) {
          let t = qr;
          if (e && e instanceof RegExp)
            if (e.global) t = e;
            else {
              let n = 'g';
              e.ignoreCase && (n += 'i'),
                e.multiline && (n += 'm'),
                e.unicode && (n += 'u'),
                (t = new RegExp(e.source, n));
            }
          return (t.lastIndex = 0), t;
        })(n),
        this._lines[t.lineNumber - 1],
        0
      );
      return r
        ? new Z(t.lineNumber, r.startColumn, t.lineNumber, r.endColumn)
        : null;
    }
    words(t) {
      const n = this._lines,
        r = this._wordenize.bind(this);
      let i = 0,
        a = '',
        o = 0,
        c = [];
      return {
        *[Symbol.iterator]() {
          for (;;)
            if (o < c.length) {
              const l = a.substring(c[o].start, c[o].end);
              (o += 1), yield l;
            } else {
              if (!(i < n.length)) break;
              (a = n[i]), (c = r(a, t)), (o = 0), (i += 1);
            }
        },
      };
    }
    getLineWords(t, n) {
      const r = this._lines[t - 1],
        i = this._wordenize(r, n),
        a = [];
      for (const o of i)
        a.push({
          word: r.substring(o.start, o.end),
          startColumn: o.start + 1,
          endColumn: o.end + 1,
        });
      return a;
    }
    _wordenize(t, n) {
      const r = [];
      let i;
      for (n.lastIndex = 0; (i = n.exec(t)) && 0 !== i[0].length; )
        r.push({ start: i.index, end: i.index + i[0].length });
      return r;
    }
    getValueInRange(t) {
      if ((t = this._validateRange(t)).startLineNumber === t.endLineNumber)
        return this._lines[t.startLineNumber - 1].substring(
          t.startColumn - 1,
          t.endColumn - 1
        );
      const n = this._eol,
        r = t.startLineNumber - 1,
        i = t.endLineNumber - 1,
        a = [];
      a.push(this._lines[r].substring(t.startColumn - 1));
      for (let o = r + 1; o < i; o++) a.push(this._lines[o]);
      return a.push(this._lines[i].substring(0, t.endColumn - 1)), a.join(n);
    }
    offsetAt(t) {
      return (
        (t = this._validatePosition(t)),
        this._ensureLineStarts(),
        this._lineStarts.getPrefixSum(t.lineNumber - 2) + (t.column - 1)
      );
    }
    positionAt(t) {
      (t = Math.floor(t)), (t = Math.max(0, t)), this._ensureLineStarts();
      const n = this._lineStarts.getIndexOf(t);
      return {
        lineNumber: 1 + n.index,
        column: 1 + Math.min(n.remainder, this._lines[n.index].length),
      };
    }
    _validateRange(t) {
      const n = this._validatePosition({
          lineNumber: t.startLineNumber,
          column: t.startColumn,
        }),
        r = this._validatePosition({
          lineNumber: t.endLineNumber,
          column: t.endColumn,
        });
      return n.lineNumber !== t.startLineNumber ||
        n.column !== t.startColumn ||
        r.lineNumber !== t.endLineNumber ||
        r.column !== t.endColumn
        ? {
            startLineNumber: n.lineNumber,
            startColumn: n.column,
            endLineNumber: r.lineNumber,
            endColumn: r.column,
          }
        : t;
    }
    _validatePosition(t) {
      if (!he.isIPosition(t)) throw new Error('bad position');
      let { lineNumber: n, column: r } = t,
        i = !1;
      if (n < 1) (n = 1), (r = 1), (i = !0);
      else if (n > this._lines.length)
        (n = this._lines.length), (r = this._lines[n - 1].length + 1), (i = !0);
      else {
        const a = this._lines[n - 1].length + 1;
        r < 1 ? ((r = 1), (i = !0)) : r > a && ((r = a), (i = !0));
      }
      return i ? { lineNumber: n, column: r } : t;
    }
  }
  let si = (() => {
    class e {
      constructor(n, r) {
        (this._host = n),
          (this._models = Object.create(null)),
          (this._foreignModuleFactory = r),
          (this._foreignModule = null);
      }
      dispose() {
        this._models = Object.create(null);
      }
      _getModel(n) {
        return this._models[n];
      }
      _getModels() {
        const n = [];
        return (
          Object.keys(this._models).forEach((r) => n.push(this._models[r])), n
        );
      }
      acceptNewModel(n) {
        this._models[n.url] = new il(
          Be.parse(n.url),
          n.lines,
          n.EOL,
          n.versionId
        );
      }
      acceptModelChanged(n, r) {
        this._models[n] && this._models[n].onEvents(r);
      }
      acceptRemovedModel(n) {
        this._models[n] && delete this._models[n];
      }
      computeUnicodeHighlights(n, r, i) {
        return Pe(this, void 0, void 0, function* () {
          const a = this._getModel(n);
          return a
            ? nl.computeUnicodeHighlights(a, r, i)
            : {
                ranges: [],
                hasMore: !1,
                ambiguousCharacterCount: 0,
                invisibleCharacterCount: 0,
                nonBasicAsciiCharacterCount: 0,
              };
        });
      }
      computeDiff(n, r, i, a) {
        return Pe(this, void 0, void 0, function* () {
          const o = this._getModel(n),
            c = this._getModel(r);
          return o && c ? e.computeDiff(o, c, i, a) : null;
        });
      }
      static computeDiff(n, r, i, a) {
        const o = n.getLinesContent(),
          c = r.getLinesContent(),
          u = new Rs(o, c, {
            shouldComputeCharChanges: !0,
            shouldPostProcessCharChanges: !0,
            shouldIgnoreTrimWhitespace: i,
            shouldMakePrettyDiff: !0,
            maxComputationTime: a,
          }).computeDiff(),
          h = !(u.changes.length > 0) && this._modelsAreIdentical(n, r);
        return { quitEarly: u.quitEarly, identical: h, changes: u.changes };
      }
      static _modelsAreIdentical(n, r) {
        const i = n.getLineCount();
        if (i !== r.getLineCount()) return !1;
        for (let o = 1; o <= i; o++)
          if (n.getLineContent(o) !== r.getLineContent(o)) return !1;
        return !0;
      }
      computeMoreMinimalEdits(n, r) {
        return Pe(this, void 0, void 0, function* () {
          const i = this._getModel(n);
          if (!i) return r;
          const a = [];
          let o;
          r = r
            .slice(0)
            .sort((c, l) =>
              c.range && l.range
                ? Z.compareRangesUsingStarts(c.range, l.range)
                : (c.range ? 0 : 1) - (l.range ? 0 : 1)
            );
          for (let { range: c, text: l, eol: u } of r) {
            if (('number' == typeof u && (o = u), Z.isEmpty(c) && !l)) continue;
            const h = i.getValueInRange(c);
            if (((l = l.replace(/\r\n|\n|\r/g, i.eol)), h === l)) continue;
            if (Math.max(l.length, h.length) > e._diffLimit) {
              a.push({ range: c, text: l });
              continue;
            }
            const d = ps(h, l, !1),
              f = i.offsetAt(Z.lift(c).getStartPosition());
            for (const g of d) {
              const _ = i.positionAt(f + g.originalStart),
                b = i.positionAt(f + g.originalStart + g.originalLength),
                y = {
                  text: l.substr(g.modifiedStart, g.modifiedLength),
                  range: {
                    startLineNumber: _.lineNumber,
                    startColumn: _.column,
                    endLineNumber: b.lineNumber,
                    endColumn: b.column,
                  },
                };
              i.getValueInRange(y.range) !== y.text && a.push(y);
            }
          }
          return (
            'number' == typeof o &&
              a.push({
                eol: o,
                text: '',
                range: {
                  startLineNumber: 0,
                  startColumn: 0,
                  endLineNumber: 0,
                  endColumn: 0,
                },
              }),
            a
          );
        });
      }
      computeLinks(n) {
        return Pe(this, void 0, void 0, function* () {
          const r = this._getModel(n);
          return r
            ? (function $s(e) {
                return e &&
                  'function' == typeof e.getLineCount &&
                  'function' == typeof e.getLineContent
                  ? Ut.computeLinks(e)
                  : [];
              })(r)
            : null;
        });
      }
      textualSuggest(n, r, i, a) {
        return Pe(this, void 0, void 0, function* () {
          const o = new Dt(!0),
            c = new RegExp(i, a),
            l = new Set();
          e: for (const u of n) {
            const h = this._getModel(u);
            if (h)
              for (const d of h.words(c))
                if (
                  d !== r &&
                  isNaN(Number(d)) &&
                  (l.add(d), l.size > e._suggestionsLimit)
                )
                  break e;
          }
          return { words: Array.from(l), duration: o.elapsed() };
        });
      }
      computeWordRanges(n, r, i, a) {
        return Pe(this, void 0, void 0, function* () {
          const o = this._getModel(n);
          if (!o) return Object.create(null);
          const c = new RegExp(i, a),
            l = Object.create(null);
          for (let u = r.startLineNumber; u < r.endLineNumber; u++) {
            const h = o.getLineWords(u, c);
            for (const d of h) {
              if (!isNaN(Number(d.word))) continue;
              let f = l[d.word];
              f || ((f = []), (l[d.word] = f)),
                f.push({
                  startLineNumber: u,
                  startColumn: d.startColumn,
                  endLineNumber: u,
                  endColumn: d.endColumn,
                });
            }
          }
          return l;
        });
      }
      navigateValueSet(n, r, i, a, o) {
        return Pe(this, void 0, void 0, function* () {
          const c = this._getModel(n);
          if (!c) return null;
          const l = new RegExp(a, o);
          r.startColumn === r.endColumn &&
            (r = {
              startLineNumber: r.startLineNumber,
              startColumn: r.startColumn,
              endLineNumber: r.endLineNumber,
              endColumn: r.endColumn + 1,
            });
          const u = c.getValueInRange(r),
            h = c.getWordAtPosition(
              { lineNumber: r.startLineNumber, column: r.startColumn },
              l
            );
          if (!h) return null;
          const d = c.getValueInRange(h);
          return kn.INSTANCE.navigateValueSet(r, u, h, d, i);
        });
      }
      loadForeignModule(n, r, i) {
        const c = {
          host: Pa(i, (l, u) => this._host.fhr(l, u)),
          getMirrorModels: () => this._getModels(),
        };
        return this._foreignModuleFactory
          ? ((this._foreignModule = this._foreignModuleFactory(c, r)),
            Promise.resolve(an(this._foreignModule)))
          : Promise.reject(new Error('Unexpected usage'));
      }
      fmr(n, r) {
        if (!this._foreignModule || 'function' != typeof this._foreignModule[n])
          return Promise.reject(
            new Error('Missing requestHandler or method: ' + n)
          );
        try {
          return Promise.resolve(
            this._foreignModule[n].apply(this._foreignModule, r)
          );
        } catch (i) {
          return Promise.reject(i);
        }
      }
    }
    return (e._diffLimit = 1e5), (e._suggestionsLimit = 1e4), e;
  })();
  'function' == typeof importScripts &&
    (re.monaco = (function Vo() {
      return {
        editor: void 0,
        languages: void 0,
        CancellationTokenSource: Qs,
        Emitter: we,
        KeyCode: Xr,
        KeyMod: Oo,
        Position: he,
        Range: Z,
        Selection: de,
        SelectionDirection: ei,
        MarkerSeverity: Zr,
        MarkerTag: Kr,
        Uri: Be,
        Token: ro,
      };
    })());
  let Dn = !1;
  function oi(e) {
    if (Dn) return;
    Dn = !0;
    const t = new Tr(
      (n) => {
        self.postMessage(n);
      },
      (n) => new si(n, e)
    );
    self.onmessage = (n) => {
      t.onmessage(n.data);
    };
  }
  function sl(e, t, ...n) {
    return (function al(e, t) {
      let n;
      return (
        (n =
          0 === t.length
            ? e
            : e.replace(/\{(\d+)\}/g, (r, i) => {
                let a = i[0];
                return typeof t[a] < 'u' ? t[a] : r;
              })),
        n
      );
    })(t, n);
  }
  function Rn(e) {
    return sl;
  }
  self.onmessage = (e) => {
    Dn || oi(null);
  };
  var ne,
    Q,
    Wt,
    li,
    In,
    ui,
    ci,
    Nn = (function (e) {
      return (e.MIN_VALUE = 0), (e.MAX_VALUE = 2147483647), e;
    })(Nn || {});
  !(function (e) {
    (e.create = function t(r, i) {
      return (
        r === Number.MAX_VALUE && (r = Nn.MAX_VALUE),
        i === Number.MAX_VALUE && (i = Nn.MAX_VALUE),
        { line: r, character: i }
      );
    }),
      (e.is = function n(r) {
        var i = r;
        return (
          A.objectLiteral(i) && A.uinteger(i.line) && A.uinteger(i.character)
        );
      });
  })(ne || (ne = {})),
    (function (e) {
      (e.create = function t(r, i, a, o) {
        if (A.uinteger(r) && A.uinteger(i) && A.uinteger(a) && A.uinteger(o))
          return { start: ne.create(r, i), end: ne.create(a, o) };
        if (ne.is(r) && ne.is(i)) return { start: r, end: i };
        throw new Error(
          'Range#create called with invalid arguments[' +
            r +
            ', ' +
            i +
            ', ' +
            a +
            ', ' +
            o +
            ']'
        );
      }),
        (e.is = function n(r) {
          var i = r;
          return A.objectLiteral(i) && ne.is(i.start) && ne.is(i.end);
        });
    })(Q || (Q = {})),
    (function (e) {
      (e.create = function t(r, i) {
        return { uri: r, range: i };
      }),
        (e.is = function n(r) {
          var i = r;
          return (
            A.defined(i) &&
            Q.is(i.range) &&
            (A.string(i.uri) || A.undefined(i.uri))
          );
        });
    })(Wt || (Wt = {})),
    (function (e) {
      (e.create = function t(r, i, a, o) {
        return {
          targetUri: r,
          targetRange: i,
          targetSelectionRange: a,
          originSelectionRange: o,
        };
      }),
        (e.is = function n(r) {
          var i = r;
          return (
            A.defined(i) &&
            Q.is(i.targetRange) &&
            A.string(i.targetUri) &&
            (Q.is(i.targetSelectionRange) ||
              A.undefined(i.targetSelectionRange)) &&
            (Q.is(i.originSelectionRange) ||
              A.undefined(i.originSelectionRange))
          );
        });
    })(li || (li = {})),
    (function (e) {
      (e.create = function t(r, i, a, o) {
        return { red: r, green: i, blue: a, alpha: o };
      }),
        (e.is = function n(r) {
          var i = r;
          return (
            A.numberRange(i.red, 0, 1) &&
            A.numberRange(i.green, 0, 1) &&
            A.numberRange(i.blue, 0, 1) &&
            A.numberRange(i.alpha, 0, 1)
          );
        });
    })(In || (In = {})),
    (function (e) {
      (e.create = function t(r, i) {
        return { range: r, color: i };
      }),
        (e.is = function n(r) {
          var i = r;
          return Q.is(i.range) && In.is(i.color);
        });
    })(ui || (ui = {})),
    (function (e) {
      (e.create = function t(r, i, a) {
        return { label: r, textEdit: i, additionalTextEdits: a };
      }),
        (e.is = function n(r) {
          var i = r;
          return (
            A.string(i.label) &&
            (A.undefined(i.textEdit) || ee.is(i)) &&
            (A.undefined(i.additionalTextEdits) ||
              A.typedArray(i.additionalTextEdits, ee.is))
          );
        });
    })(ci || (ci = {}));
  var hi,
    zn,
    di,
    Bt,
    ft,
    ee,
    Xe,
    ae,
    Ue,
    Pt,
    mt,
    pt,
    gt,
    Hn,
    Un = (function (e) {
      return (
        (e.Comment = 'comment'),
        (e.Imports = 'imports'),
        (e.Region = 'region'),
        e
      );
    })(Un || {});
  !(function (e) {
    (e.create = function t(r, i, a, o, c) {
      var l = { startLine: r, endLine: i };
      return (
        A.defined(a) && (l.startCharacter = a),
        A.defined(o) && (l.endCharacter = o),
        A.defined(c) && (l.kind = c),
        l
      );
    }),
      (e.is = function n(r) {
        var i = r;
        return (
          A.uinteger(i.startLine) &&
          A.uinteger(i.startLine) &&
          (A.undefined(i.startCharacter) || A.uinteger(i.startCharacter)) &&
          (A.undefined(i.endCharacter) || A.uinteger(i.endCharacter)) &&
          (A.undefined(i.kind) || A.string(i.kind))
        );
      });
  })(hi || (hi = {})),
    (function (e) {
      (e.create = function t(r, i) {
        return { location: r, message: i };
      }),
        (e.is = function n(r) {
          var i = r;
          return A.defined(i) && Wt.is(i.location) && A.string(i.message);
        });
    })(zn || (zn = {})),
    (function (e) {
      e.is = function t(n) {
        return null != n && A.string(n.href);
      };
    })(di || (di = {})),
    (function (e) {
      (e.create = function t(r, i, a, o, c, l) {
        var u = { range: r, message: i };
        return (
          A.defined(a) && (u.severity = a),
          A.defined(o) && (u.code = o),
          A.defined(c) && (u.source = c),
          A.defined(l) && (u.relatedInformation = l),
          u
        );
      }),
        (e.is = function n(r) {
          var i,
            a = r;
          return (
            A.defined(a) &&
            Q.is(a.range) &&
            A.string(a.message) &&
            (A.number(a.severity) || A.undefined(a.severity)) &&
            (A.integer(a.code) || A.string(a.code) || A.undefined(a.code)) &&
            (A.undefined(a.codeDescription) ||
              A.string(
                null === (i = a.codeDescription) || void 0 === i
                  ? void 0
                  : i.href
              )) &&
            (A.string(a.source) || A.undefined(a.source)) &&
            (A.undefined(a.relatedInformation) ||
              A.typedArray(a.relatedInformation, zn.is))
          );
        });
    })(Bt || (Bt = {})),
    (function (e) {
      (e.create = function t(r, i) {
        for (var a = [], o = 2; o < arguments.length; o++)
          a[o - 2] = arguments[o];
        var c = { title: r, command: i };
        return A.defined(a) && a.length > 0 && (c.arguments = a), c;
      }),
        (e.is = function n(r) {
          var i = r;
          return A.defined(i) && A.string(i.title) && A.string(i.command);
        });
    })(ft || (ft = {})),
    (function (e) {
      (e.replace = function t(a, o) {
        return { range: a, newText: o };
      }),
        (e.insert = function n(a, o) {
          return { range: { start: a, end: a }, newText: o };
        }),
        (e.del = function r(a) {
          return { range: a, newText: '' };
        }),
        (e.is = function i(a) {
          var o = a;
          return A.objectLiteral(o) && A.string(o.newText) && Q.is(o.range);
        });
    })(ee || (ee = {})),
    (function (e) {
      (e.create = function t(r, i, a) {
        var o = { label: r };
        return (
          void 0 !== i && (o.needsConfirmation = i),
          void 0 !== a && (o.description = a),
          o
        );
      }),
        (e.is = function n(r) {
          var i = r;
          return (
            void 0 !== i &&
            A.objectLiteral(i) &&
            A.string(i.label) &&
            (A.boolean(i.needsConfirmation) ||
              void 0 === i.needsConfirmation) &&
            (A.string(i.description) || void 0 === i.description)
          );
        });
    })(Xe || (Xe = {})),
    (function (e) {
      e.is = function t(n) {
        return 'string' == typeof n;
      };
    })(ae || (ae = {})),
    (function (e) {
      (e.replace = function t(a, o, c) {
        return { range: a, newText: o, annotationId: c };
      }),
        (e.insert = function n(a, o, c) {
          return { range: { start: a, end: a }, newText: o, annotationId: c };
        }),
        (e.del = function r(a, o) {
          return { range: a, newText: '', annotationId: o };
        }),
        (e.is = function i(a) {
          var o = a;
          return ee.is(o) && (Xe.is(o.annotationId) || ae.is(o.annotationId));
        });
    })(Ue || (Ue = {})),
    (function (e) {
      (e.create = function t(r, i) {
        return { textDocument: r, edits: i };
      }),
        (e.is = function n(r) {
          var i = r;
          return (
            A.defined(i) && Ot.is(i.textDocument) && Array.isArray(i.edits)
          );
        });
    })(Pt || (Pt = {})),
    (function (e) {
      (e.create = function t(r, i, a) {
        var o = { kind: 'create', uri: r };
        return (
          void 0 !== i &&
            (void 0 !== i.overwrite || void 0 !== i.ignoreIfExists) &&
            (o.options = i),
          void 0 !== a && (o.annotationId = a),
          o
        );
      }),
        (e.is = function n(r) {
          var i = r;
          return (
            i &&
            'create' === i.kind &&
            A.string(i.uri) &&
            (void 0 === i.options ||
              ((void 0 === i.options.overwrite ||
                A.boolean(i.options.overwrite)) &&
                (void 0 === i.options.ignoreIfExists ||
                  A.boolean(i.options.ignoreIfExists)))) &&
            (void 0 === i.annotationId || ae.is(i.annotationId))
          );
        });
    })(mt || (mt = {})),
    (function (e) {
      (e.create = function t(r, i, a, o) {
        var c = { kind: 'rename', oldUri: r, newUri: i };
        return (
          void 0 !== a &&
            (void 0 !== a.overwrite || void 0 !== a.ignoreIfExists) &&
            (c.options = a),
          void 0 !== o && (c.annotationId = o),
          c
        );
      }),
        (e.is = function n(r) {
          var i = r;
          return (
            i &&
            'rename' === i.kind &&
            A.string(i.oldUri) &&
            A.string(i.newUri) &&
            (void 0 === i.options ||
              ((void 0 === i.options.overwrite ||
                A.boolean(i.options.overwrite)) &&
                (void 0 === i.options.ignoreIfExists ||
                  A.boolean(i.options.ignoreIfExists)))) &&
            (void 0 === i.annotationId || ae.is(i.annotationId))
          );
        });
    })(pt || (pt = {})),
    (function (e) {
      (e.create = function t(r, i, a) {
        var o = { kind: 'delete', uri: r };
        return (
          void 0 !== i &&
            (void 0 !== i.recursive || void 0 !== i.ignoreIfNotExists) &&
            (o.options = i),
          void 0 !== a && (o.annotationId = a),
          o
        );
      }),
        (e.is = function n(r) {
          var i = r;
          return (
            i &&
            'delete' === i.kind &&
            A.string(i.uri) &&
            (void 0 === i.options ||
              ((void 0 === i.options.recursive ||
                A.boolean(i.options.recursive)) &&
                (void 0 === i.options.ignoreIfNotExists ||
                  A.boolean(i.options.ignoreIfNotExists)))) &&
            (void 0 === i.annotationId || ae.is(i.annotationId))
          );
        });
    })(gt || (gt = {})),
    (function (e) {
      e.is = function t(n) {
        return (
          n &&
          (void 0 !== n.changes || void 0 !== n.documentChanges) &&
          (void 0 === n.documentChanges ||
            n.documentChanges.every(function (i) {
              return A.string(i.kind)
                ? mt.is(i) || pt.is(i) || gt.is(i)
                : Pt.is(i);
            }))
        );
      };
    })(Hn || (Hn = {}));
  var mi,
    pi,
    Ot,
    gi,
    qt = (function () {
      function e(t, n) {
        (this.edits = t), (this.changeAnnotations = n);
      }
      return (
        (e.prototype.insert = function (t, n, r) {
          var i, a;
          if (
            (void 0 === r
              ? (i = ee.insert(t, n))
              : ae.is(r)
              ? ((a = r), (i = Ue.insert(t, n, r)))
              : (this.assertChangeAnnotations(this.changeAnnotations),
                (a = this.changeAnnotations.manage(r)),
                (i = Ue.insert(t, n, a))),
            this.edits.push(i),
            void 0 !== a)
          )
            return a;
        }),
        (e.prototype.replace = function (t, n, r) {
          var i, a;
          if (
            (void 0 === r
              ? (i = ee.replace(t, n))
              : ae.is(r)
              ? ((a = r), (i = Ue.replace(t, n, r)))
              : (this.assertChangeAnnotations(this.changeAnnotations),
                (a = this.changeAnnotations.manage(r)),
                (i = Ue.replace(t, n, a))),
            this.edits.push(i),
            void 0 !== a)
          )
            return a;
        }),
        (e.prototype.delete = function (t, n) {
          var r, i;
          if (
            (void 0 === n
              ? (r = ee.del(t))
              : ae.is(n)
              ? ((i = n), (r = Ue.del(t, n)))
              : (this.assertChangeAnnotations(this.changeAnnotations),
                (i = this.changeAnnotations.manage(n)),
                (r = Ue.del(t, i))),
            this.edits.push(r),
            void 0 !== i)
          )
            return i;
        }),
        (e.prototype.add = function (t) {
          this.edits.push(t);
        }),
        (e.prototype.all = function () {
          return this.edits;
        }),
        (e.prototype.clear = function () {
          this.edits.splice(0, this.edits.length);
        }),
        (e.prototype.assertChangeAnnotations = function (t) {
          if (void 0 === t)
            throw new Error(
              'Text edit change is not configured to manage change annotations.'
            );
        }),
        e
      );
    })(),
    fi = (function () {
      function e(t) {
        (this._annotations = void 0 === t ? Object.create(null) : t),
          (this._counter = 0),
          (this._size = 0);
      }
      return (
        (e.prototype.all = function () {
          return this._annotations;
        }),
        Object.defineProperty(e.prototype, 'size', {
          get: function () {
            return this._size;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.manage = function (t, n) {
          var r;
          if (
            (ae.is(t) ? (r = t) : ((r = this.nextId()), (n = t)),
            void 0 !== this._annotations[r])
          )
            throw new Error('Id ' + r + ' is already in use.');
          if (void 0 === n)
            throw new Error('No annotation provided for id ' + r);
          return (this._annotations[r] = n), this._size++, r;
        }),
        (e.prototype.nextId = function () {
          return this._counter++, this._counter.toString();
        }),
        e
      );
    })();
  !(function () {
    function e(t) {
      var n = this;
      (this._textEditChanges = Object.create(null)),
        void 0 !== t
          ? ((this._workspaceEdit = t),
            t.documentChanges
              ? ((this._changeAnnotations = new fi(t.changeAnnotations)),
                (t.changeAnnotations = this._changeAnnotations.all()),
                t.documentChanges.forEach(function (r) {
                  if (Pt.is(r)) {
                    var i = new qt(r.edits, n._changeAnnotations);
                    n._textEditChanges[r.textDocument.uri] = i;
                  }
                }))
              : t.changes &&
                Object.keys(t.changes).forEach(function (r) {
                  var i = new qt(t.changes[r]);
                  n._textEditChanges[r] = i;
                }))
          : (this._workspaceEdit = {});
    }
    Object.defineProperty(e.prototype, 'edit', {
      get: function () {
        return (
          this.initDocumentChanges(),
          void 0 !== this._changeAnnotations &&
            (this._workspaceEdit.changeAnnotations =
              0 === this._changeAnnotations.size
                ? void 0
                : this._changeAnnotations.all()),
          this._workspaceEdit
        );
      },
      enumerable: !1,
      configurable: !0,
    }),
      (e.prototype.getTextEditChange = function (t) {
        if (Ot.is(t)) {
          if (
            (this.initDocumentChanges(),
            void 0 === this._workspaceEdit.documentChanges)
          )
            throw new Error(
              'Workspace edit is not configured for document changes.'
            );
          var n = { uri: t.uri, version: t.version };
          return (
            (r = this._textEditChanges[n.uri]) ||
              (this._workspaceEdit.documentChanges.push({
                textDocument: n,
                edits: (i = []),
              }),
              (r = new qt(i, this._changeAnnotations)),
              (this._textEditChanges[n.uri] = r)),
            r
          );
        }
        if ((this.initChanges(), void 0 === this._workspaceEdit.changes))
          throw new Error(
            'Workspace edit is not configured for normal text edit changes.'
          );
        var r, i;
        return (
          (r = this._textEditChanges[t]) ||
            ((this._workspaceEdit.changes[t] = i = []),
            (r = new qt(i)),
            (this._textEditChanges[t] = r)),
          r
        );
      }),
      (e.prototype.initDocumentChanges = function () {
        void 0 === this._workspaceEdit.documentChanges &&
          void 0 === this._workspaceEdit.changes &&
          ((this._changeAnnotations = new fi()),
          (this._workspaceEdit.documentChanges = []),
          (this._workspaceEdit.changeAnnotations =
            this._changeAnnotations.all()));
      }),
      (e.prototype.initChanges = function () {
        void 0 === this._workspaceEdit.documentChanges &&
          void 0 === this._workspaceEdit.changes &&
          (this._workspaceEdit.changes = Object.create(null));
      }),
      (e.prototype.createFile = function (t, n, r) {
        if (
          (this.initDocumentChanges(),
          void 0 === this._workspaceEdit.documentChanges)
        )
          throw new Error(
            'Workspace edit is not configured for document changes.'
          );
        var i, a, o;
        if (
          (Xe.is(n) || ae.is(n) ? (i = n) : (r = n),
          void 0 === i
            ? (a = mt.create(t, r))
            : ((o = ae.is(i) ? i : this._changeAnnotations.manage(i)),
              (a = mt.create(t, r, o))),
          this._workspaceEdit.documentChanges.push(a),
          void 0 !== o)
        )
          return o;
      }),
      (e.prototype.renameFile = function (t, n, r, i) {
        if (
          (this.initDocumentChanges(),
          void 0 === this._workspaceEdit.documentChanges)
        )
          throw new Error(
            'Workspace edit is not configured for document changes.'
          );
        var a, o, c;
        if (
          (Xe.is(r) || ae.is(r) ? (a = r) : (i = r),
          void 0 === a
            ? (o = pt.create(t, n, i))
            : ((c = ae.is(a) ? a : this._changeAnnotations.manage(a)),
              (o = pt.create(t, n, i, c))),
          this._workspaceEdit.documentChanges.push(o),
          void 0 !== c)
        )
          return c;
      }),
      (e.prototype.deleteFile = function (t, n, r) {
        if (
          (this.initDocumentChanges(),
          void 0 === this._workspaceEdit.documentChanges)
        )
          throw new Error(
            'Workspace edit is not configured for document changes.'
          );
        var i, a, o;
        if (
          (Xe.is(n) || ae.is(n) ? (i = n) : (r = n),
          void 0 === i
            ? (a = gt.create(t, r))
            : ((o = ae.is(i) ? i : this._changeAnnotations.manage(i)),
              (a = gt.create(t, r, o))),
          this._workspaceEdit.documentChanges.push(a),
          void 0 !== o)
        )
          return o;
      });
  })(),
    (function (e) {
      (e.create = function t(r) {
        return { uri: r };
      }),
        (e.is = function n(r) {
          var i = r;
          return A.defined(i) && A.string(i.uri);
        });
    })(mi || (mi = {})),
    (function (e) {
      (e.create = function t(r, i) {
        return { uri: r, version: i };
      }),
        (e.is = function n(r) {
          var i = r;
          return A.defined(i) && A.string(i.uri) && A.integer(i.version);
        });
    })(pi || (pi = {})),
    (function (e) {
      (e.create = function t(r, i) {
        return { uri: r, version: i };
      }),
        (e.is = function n(r) {
          var i = r;
          return (
            A.defined(i) &&
            A.string(i.uri) &&
            (null === i.version || A.integer(i.version))
          );
        });
    })(Ot || (Ot = {})),
    (function (e) {
      (e.create = function t(r, i, a, o) {
        return { uri: r, languageId: i, version: a, text: o };
      }),
        (e.is = function n(r) {
          var i = r;
          return (
            A.defined(i) &&
            A.string(i.uri) &&
            A.string(i.languageId) &&
            A.integer(i.version) &&
            A.string(i.text)
          );
        });
    })(gi || (gi = {}));
  var Fn,
    Te = (function (e) {
      return (e.PlainText = 'plaintext'), (e.Markdown = 'markdown'), e;
    })(Te || {});
  !(function (e) {
    e.is = function t(n) {
      return n === e.PlainText || n === e.Markdown;
    };
  })(Te || (Te = {})),
    (function (e) {
      e.is = function t(n) {
        var r = n;
        return A.objectLiteral(n) && Te.is(r.kind) && A.string(r.value);
      };
    })(Fn || (Fn = {}));
  var bi,
    wi,
    _i,
    Vt,
    vi,
    yi,
    Ti,
    fe = (function (e) {
      return (
        (e.Text = 1),
        (e.Method = 2),
        (e.Function = 3),
        (e.Constructor = 4),
        (e.Field = 5),
        (e.Variable = 6),
        (e.Class = 7),
        (e.Interface = 8),
        (e.Module = 9),
        (e.Property = 10),
        (e.Unit = 11),
        (e.Value = 12),
        (e.Enum = 13),
        (e.Keyword = 14),
        (e.Snippet = 15),
        (e.Color = 16),
        (e.File = 17),
        (e.Reference = 18),
        (e.Folder = 19),
        (e.EnumMember = 20),
        (e.Constant = 21),
        (e.Struct = 22),
        (e.Event = 23),
        (e.Operator = 24),
        (e.TypeParameter = 25),
        e
      );
    })(fe || {}),
    ke = (function (e) {
      return (e.PlainText = 1), (e.Snippet = 2), e;
    })(ke || {});
  !(function (e) {
    (e.create = function t(r, i, a) {
      return { newText: r, insert: i, replace: a };
    }),
      (e.is = function n(r) {
        var i = r;
        return i && A.string(i.newText) && Q.is(i.insert) && Q.is(i.replace);
      });
  })(bi || (bi = {})),
    (function (e) {
      e.create = function t(n) {
        return { label: n };
      };
    })(wi || (wi = {})),
    (function (e) {
      e.create = function t(n, r) {
        return { items: n || [], isIncomplete: !!r };
      };
    })(_i || (_i = {})),
    (function (e) {
      (e.fromPlainText = function t(r) {
        return r.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&');
      }),
        (e.is = function n(r) {
          var i = r;
          return (
            A.string(i) ||
            (A.objectLiteral(i) && A.string(i.language) && A.string(i.value))
          );
        });
    })(Vt || (Vt = {})),
    (function (e) {
      e.is = function t(n) {
        var r = n;
        return (
          !!r &&
          A.objectLiteral(r) &&
          (Fn.is(r.contents) ||
            Vt.is(r.contents) ||
            A.typedArray(r.contents, Vt.is)) &&
          (void 0 === n.range || Q.is(n.range))
        );
      };
    })(vi || (vi = {})),
    (function (e) {
      e.create = function t(n, r) {
        return r ? { label: n, documentation: r } : { label: n };
      };
    })(yi || (yi = {})),
    (function (e) {
      e.create = function t(n, r) {
        for (var i = [], a = 2; a < arguments.length; a++)
          i[a - 2] = arguments[a];
        var o = { label: n };
        return (
          A.defined(r) && (o.documentation = r),
          (o.parameters = A.defined(i) ? i : []),
          o
        );
      };
    })(Ti || (Ti = {}));
  var ki,
    Wn = (function (e) {
      return (e.Text = 1), (e.Read = 2), (e.Write = 3), e;
    })(Wn || {});
  !(function (e) {
    e.create = function t(n, r) {
      var i = { range: n };
      return A.number(r) && (i.kind = r), i;
    };
  })(ki || (ki = {}));
  var Ai,
    Si,
    xi,
    Li,
    Ei,
    Mi,
    Di,
    Gt,
    Ri,
    Ci = (function (e) {
      return (
        (e.File = 1),
        (e.Module = 2),
        (e.Namespace = 3),
        (e.Package = 4),
        (e.Class = 5),
        (e.Method = 6),
        (e.Property = 7),
        (e.Field = 8),
        (e.Constructor = 9),
        (e.Enum = 10),
        (e.Interface = 11),
        (e.Function = 12),
        (e.Variable = 13),
        (e.Constant = 14),
        (e.String = 15),
        (e.Number = 16),
        (e.Boolean = 17),
        (e.Array = 18),
        (e.Object = 19),
        (e.Key = 20),
        (e.Null = 21),
        (e.EnumMember = 22),
        (e.Struct = 23),
        (e.Event = 24),
        (e.Operator = 25),
        (e.TypeParameter = 26),
        e
      );
    })(Ci || {});
  !(function (e) {
    e.create = function t(n, r, i, a, o) {
      var c = { name: n, kind: r, location: { uri: a, range: i } };
      return o && (c.containerName = o), c;
    };
  })(Ai || (Ai = {})),
    (function (e) {
      (e.create = function t(r, i, a, o, c, l) {
        var u = { name: r, detail: i, kind: a, range: o, selectionRange: c };
        return void 0 !== l && (u.children = l), u;
      }),
        (e.is = function n(r) {
          var i = r;
          return (
            i &&
            A.string(i.name) &&
            A.number(i.kind) &&
            Q.is(i.range) &&
            Q.is(i.selectionRange) &&
            (void 0 === i.detail || A.string(i.detail)) &&
            (void 0 === i.deprecated || A.boolean(i.deprecated)) &&
            (void 0 === i.children || Array.isArray(i.children)) &&
            (void 0 === i.tags || Array.isArray(i.tags))
          );
        });
    })(Si || (Si = {})),
    (function (e) {
      (e.create = function t(r, i) {
        var a = { diagnostics: r };
        return null != i && (a.only = i), a;
      }),
        (e.is = function n(r) {
          var i = r;
          return (
            A.defined(i) &&
            A.typedArray(i.diagnostics, Bt.is) &&
            (void 0 === i.only || A.typedArray(i.only, A.string))
          );
        });
    })(xi || (xi = {})),
    (function (e) {
      (e.create = function t(r, i, a) {
        var o = { title: r },
          c = !0;
        return (
          'string' == typeof i
            ? ((c = !1), (o.kind = i))
            : ft.is(i)
            ? (o.command = i)
            : (o.edit = i),
          c && void 0 !== a && (o.kind = a),
          o
        );
      }),
        (e.is = function n(r) {
          var i = r;
          return (
            i &&
            A.string(i.title) &&
            (void 0 === i.diagnostics || A.typedArray(i.diagnostics, Bt.is)) &&
            (void 0 === i.kind || A.string(i.kind)) &&
            (void 0 !== i.edit || void 0 !== i.command) &&
            (void 0 === i.command || ft.is(i.command)) &&
            (void 0 === i.isPreferred || A.boolean(i.isPreferred)) &&
            (void 0 === i.edit || Hn.is(i.edit))
          );
        });
    })(Li || (Li = {})),
    (function (e) {
      (e.create = function t(r, i) {
        var a = { range: r };
        return A.defined(i) && (a.data = i), a;
      }),
        (e.is = function n(r) {
          var i = r;
          return (
            A.defined(i) &&
            Q.is(i.range) &&
            (A.undefined(i.command) || ft.is(i.command))
          );
        });
    })(Ei || (Ei = {})),
    (function (e) {
      (e.create = function t(r, i) {
        return { tabSize: r, insertSpaces: i };
      }),
        (e.is = function n(r) {
          var i = r;
          return (
            A.defined(i) && A.uinteger(i.tabSize) && A.boolean(i.insertSpaces)
          );
        });
    })(Mi || (Mi = {})),
    (function (e) {
      (e.create = function t(r, i, a) {
        return { range: r, target: i, data: a };
      }),
        (e.is = function n(r) {
          var i = r;
          return (
            A.defined(i) &&
            Q.is(i.range) &&
            (A.undefined(i.target) || A.string(i.target))
          );
        });
    })(Di || (Di = {})),
    (function (e) {
      (e.create = function t(r, i) {
        return { range: r, parent: i };
      }),
        (e.is = function n(r) {
          var i = r;
          return (
            void 0 !== i &&
            Q.is(i.range) &&
            (void 0 === i.parent || e.is(i.parent))
          );
        });
    })(Gt || (Gt = {})),
    (function (e) {
      function i(a, o) {
        if (a.length <= 1) return a;
        var c = (a.length / 2) | 0,
          l = a.slice(0, c),
          u = a.slice(c);
        i(l, o), i(u, o);
        for (var h = 0, d = 0, f = 0; h < l.length && d < u.length; ) {
          var g = o(l[h], u[d]);
          a[f++] = g <= 0 ? l[h++] : u[d++];
        }
        for (; h < l.length; ) a[f++] = l[h++];
        for (; d < u.length; ) a[f++] = u[d++];
        return a;
      }
      (e.create = function t(a, o, c, l) {
        return new ml(a, o, c, l);
      }),
        (e.is = function n(a) {
          var o = a;
          return !!(
            A.defined(o) &&
            A.string(o.uri) &&
            (A.undefined(o.languageId) || A.string(o.languageId)) &&
            A.uinteger(o.lineCount) &&
            A.func(o.getText) &&
            A.func(o.positionAt) &&
            A.func(o.offsetAt)
          );
        }),
        (e.applyEdits = function r(a, o) {
          for (
            var c = a.getText(),
              l = i(o, function (_, b) {
                var y = _.range.start.line - b.range.start.line;
                return 0 === y
                  ? _.range.start.character - b.range.start.character
                  : y;
              }),
              u = c.length,
              h = l.length - 1;
            h >= 0;
            h--
          ) {
            var d = l[h],
              f = a.offsetAt(d.range.start),
              g = a.offsetAt(d.range.end);
            if (!(g <= u)) throw new Error('Overlapping edit');
            (c = c.substring(0, f) + d.newText + c.substring(g, c.length)),
              (u = f);
          }
          return c;
        });
    })(Ri || (Ri = {}));
  var A,
    ml = (function () {
      function e(t, n, r, i) {
        (this._uri = t),
          (this._languageId = n),
          (this._version = r),
          (this._content = i),
          (this._lineOffsets = void 0);
      }
      return (
        Object.defineProperty(e.prototype, 'uri', {
          get: function () {
            return this._uri;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'languageId', {
          get: function () {
            return this._languageId;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'version', {
          get: function () {
            return this._version;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.getText = function (t) {
          if (t) {
            var n = this.offsetAt(t.start),
              r = this.offsetAt(t.end);
            return this._content.substring(n, r);
          }
          return this._content;
        }),
        (e.prototype.update = function (t, n) {
          (this._content = t.text),
            (this._version = n),
            (this._lineOffsets = void 0);
        }),
        (e.prototype.getLineOffsets = function () {
          if (void 0 === this._lineOffsets) {
            for (
              var t = [], n = this._content, r = !0, i = 0;
              i < n.length;
              i++
            ) {
              r && (t.push(i), (r = !1));
              var a = n.charAt(i);
              (r = '\r' === a || '\n' === a),
                '\r' === a &&
                  i + 1 < n.length &&
                  '\n' === n.charAt(i + 1) &&
                  i++;
            }
            r && n.length > 0 && t.push(n.length), (this._lineOffsets = t);
          }
          return this._lineOffsets;
        }),
        (e.prototype.positionAt = function (t) {
          t = Math.max(Math.min(t, this._content.length), 0);
          var n = this.getLineOffsets(),
            r = 0,
            i = n.length;
          if (0 === i) return ne.create(0, t);
          for (; r < i; ) {
            var a = Math.floor((r + i) / 2);
            n[a] > t ? (i = a) : (r = a + 1);
          }
          var o = r - 1;
          return ne.create(o, t - n[o]);
        }),
        (e.prototype.offsetAt = function (t) {
          var n = this.getLineOffsets();
          if (t.line >= n.length) return this._content.length;
          if (t.line < 0) return 0;
          var r = n[t.line];
          return Math.max(
            Math.min(
              r + t.character,
              t.line + 1 < n.length ? n[t.line + 1] : this._content.length
            ),
            r
          );
        }),
        Object.defineProperty(e.prototype, 'lineCount', {
          get: function () {
            return this.getLineOffsets().length;
          },
          enumerable: !1,
          configurable: !0,
        }),
        e
      );
    })();
  !(function (e) {
    var t = Object.prototype.toString;
    (e.defined = function n(g) {
      return typeof g < 'u';
    }),
      (e.undefined = function r(g) {
        return typeof g > 'u';
      }),
      (e.boolean = function i(g) {
        return !0 === g || !1 === g;
      }),
      (e.string = function a(g) {
        return '[object String]' === t.call(g);
      }),
      (e.number = function o(g) {
        return '[object Number]' === t.call(g);
      }),
      (e.numberRange = function c(g, _, b) {
        return '[object Number]' === t.call(g) && _ <= g && g <= b;
      }),
      (e.integer = function l(g) {
        return (
          '[object Number]' === t.call(g) && -2147483648 <= g && g <= 2147483647
        );
      }),
      (e.uinteger = function u(g) {
        return '[object Number]' === t.call(g) && 0 <= g && g <= 2147483647;
      }),
      (e.func = function h(g) {
        return '[object Function]' === t.call(g);
      }),
      (e.objectLiteral = function d(g) {
        return null !== g && 'object' == typeof g;
      }),
      (e.typedArray = function f(g, _) {
        return Array.isArray(g) && g.every(_);
      });
  })(A || (A = {}));
  var Bn,
    jt = class {
      constructor(e, t, n, r) {
        (this._uri = e),
          (this._languageId = t),
          (this._version = n),
          (this._content = r),
          (this._lineOffsets = void 0);
      }
      get uri() {
        return this._uri;
      }
      get languageId() {
        return this._languageId;
      }
      get version() {
        return this._version;
      }
      getText(e) {
        if (e) {
          const t = this.offsetAt(e.start),
            n = this.offsetAt(e.end);
          return this._content.substring(t, n);
        }
        return this._content;
      }
      update(e, t) {
        for (let n of e)
          if (jt.isIncremental(n)) {
            const r = Ii(n.range),
              i = this.offsetAt(r.start),
              a = this.offsetAt(r.end);
            this._content =
              this._content.substring(0, i) +
              n.text +
              this._content.substring(a, this._content.length);
            const o = Math.max(r.start.line, 0),
              c = Math.max(r.end.line, 0);
            let l = this._lineOffsets;
            const u = Ni(n.text, !1, i);
            if (c - o === u.length)
              for (let d = 0, f = u.length; d < f; d++) l[d + o + 1] = u[d];
            else
              u.length < 1e4
                ? l.splice(o + 1, c - o, ...u)
                : (this._lineOffsets = l =
                    l.slice(0, o + 1).concat(u, l.slice(c + 1)));
            const h = n.text.length - (a - i);
            if (0 !== h)
              for (let d = o + 1 + u.length, f = l.length; d < f; d++)
                l[d] = l[d] + h;
          } else {
            if (!jt.isFull(n)) throw new Error('Unknown change event received');
            (this._content = n.text), (this._lineOffsets = void 0);
          }
        this._version = t;
      }
      getLineOffsets() {
        return (
          void 0 === this._lineOffsets &&
            (this._lineOffsets = Ni(this._content, !0)),
          this._lineOffsets
        );
      }
      positionAt(e) {
        e = Math.max(Math.min(e, this._content.length), 0);
        let t = this.getLineOffsets(),
          n = 0,
          r = t.length;
        if (0 === r) return { line: 0, character: e };
        for (; n < r; ) {
          let a = Math.floor((n + r) / 2);
          t[a] > e ? (r = a) : (n = a + 1);
        }
        let i = n - 1;
        return { line: i, character: e - t[i] };
      }
      offsetAt(e) {
        let t = this.getLineOffsets();
        if (e.line >= t.length) return this._content.length;
        if (e.line < 0) return 0;
        let n = t[e.line];
        return Math.max(
          Math.min(
            n + e.character,
            e.line + 1 < t.length ? t[e.line + 1] : this._content.length
          ),
          n
        );
      }
      get lineCount() {
        return this.getLineOffsets().length;
      }
      static isIncremental(e) {
        return (
          null != e &&
          'string' == typeof e.text &&
          void 0 !== e.range &&
          (void 0 === e.rangeLength || 'number' == typeof e.rangeLength)
        );
      }
      static isFull(e) {
        return (
          null != e &&
          'string' == typeof e.text &&
          void 0 === e.range &&
          void 0 === e.rangeLength
        );
      }
    };
  function Pn(e, t) {
    if (e.length <= 1) return e;
    const n = (e.length / 2) | 0,
      r = e.slice(0, n),
      i = e.slice(n);
    Pn(r, t), Pn(i, t);
    let a = 0,
      o = 0,
      c = 0;
    for (; a < r.length && o < i.length; )
      t(r[a], i[o]) <= 0 ? (e[c++] = r[a++]) : (e[c++] = i[o++]);
    for (; a < r.length; ) e[c++] = r[a++];
    for (; o < i.length; ) e[c++] = i[o++];
    return e;
  }
  function Ni(e, t, n = 0) {
    const r = t ? [n] : [];
    for (let i = 0; i < e.length; i++) {
      let a = e.charCodeAt(i);
      (13 === a || 10 === a) &&
        (13 === a && i + 1 < e.length && 10 === e.charCodeAt(i + 1) && i++,
        r.push(n + i + 1));
    }
    return r;
  }
  function Ii(e) {
    const t = e.start,
      n = e.end;
    return t.line > n.line || (t.line === n.line && t.character > n.character)
      ? { start: n, end: t }
      : e;
  }
  function pl(e) {
    const t = Ii(e.range);
    return t !== e.range ? { newText: e.newText, range: t } : e;
  }
  !(function (e) {
    (e.create = function t(i, a, o, c) {
      return new jt(i, a, o, c);
    }),
      (e.update = function n(i, a, o) {
        if (i instanceof jt) return i.update(a, o), i;
        throw new Error(
          'TextDocument.update: document must be created by TextDocument.create'
        );
      }),
      (e.applyEdits = function r(i, a) {
        let o = i.getText(),
          c = Pn(a.map(pl), (h, d) => {
            let f = h.range.start.line - d.range.start.line;
            return 0 === f
              ? h.range.start.character - d.range.start.character
              : f;
          }),
          l = 0;
        const u = [];
        for (const h of c) {
          let d = i.offsetAt(h.range.start);
          if (d < l) throw new Error('Overlapping edit');
          d > l && u.push(o.substring(l, d)),
            h.newText.length && u.push(h.newText),
            (l = i.offsetAt(h.range.end));
        }
        return u.push(o.substr(l)), u.join('');
      });
  })(Bn || (Bn = {}));
  var Ui,
    I = (function (e) {
      return (
        (e[(e.StartCommentTag = 0)] = 'StartCommentTag'),
        (e[(e.Comment = 1)] = 'Comment'),
        (e[(e.EndCommentTag = 2)] = 'EndCommentTag'),
        (e[(e.StartTagOpen = 3)] = 'StartTagOpen'),
        (e[(e.StartTagClose = 4)] = 'StartTagClose'),
        (e[(e.StartTagSelfClose = 5)] = 'StartTagSelfClose'),
        (e[(e.StartTag = 6)] = 'StartTag'),
        (e[(e.EndTagOpen = 7)] = 'EndTagOpen'),
        (e[(e.EndTagClose = 8)] = 'EndTagClose'),
        (e[(e.EndTag = 9)] = 'EndTag'),
        (e[(e.DelimiterAssign = 10)] = 'DelimiterAssign'),
        (e[(e.AttributeName = 11)] = 'AttributeName'),
        (e[(e.AttributeValue = 12)] = 'AttributeValue'),
        (e[(e.StartDoctypeTag = 13)] = 'StartDoctypeTag'),
        (e[(e.Doctype = 14)] = 'Doctype'),
        (e[(e.EndDoctypeTag = 15)] = 'EndDoctypeTag'),
        (e[(e.Content = 16)] = 'Content'),
        (e[(e.Whitespace = 17)] = 'Whitespace'),
        (e[(e.Unknown = 18)] = 'Unknown'),
        (e[(e.Script = 19)] = 'Script'),
        (e[(e.Styles = 20)] = 'Styles'),
        (e[(e.EOS = 21)] = 'EOS'),
        e
      );
    })(I || {}),
    O = (function (e) {
      return (
        (e[(e.WithinContent = 0)] = 'WithinContent'),
        (e[(e.AfterOpeningStartTag = 1)] = 'AfterOpeningStartTag'),
        (e[(e.AfterOpeningEndTag = 2)] = 'AfterOpeningEndTag'),
        (e[(e.WithinDoctype = 3)] = 'WithinDoctype'),
        (e[(e.WithinTag = 4)] = 'WithinTag'),
        (e[(e.WithinEndTag = 5)] = 'WithinEndTag'),
        (e[(e.WithinComment = 6)] = 'WithinComment'),
        (e[(e.WithinScriptContent = 7)] = 'WithinScriptContent'),
        (e[(e.WithinStyleContent = 8)] = 'WithinStyleContent'),
        (e[(e.AfterAttributeName = 9)] = 'AfterAttributeName'),
        (e[(e.BeforeAttributeValue = 10)] = 'BeforeAttributeValue'),
        e
      );
    })(O || {});
  !(function (e) {
    e.LATEST = {
      textDocument: {
        completion: {
          completionItem: { documentationFormat: [Te.Markdown, Te.PlainText] },
        },
        hover: { contentFormat: [Te.Markdown, Te.PlainText] },
      },
    };
  })(Ui || (Ui = {}));
  var zi = (function (e) {
      return (
        (e[(e.Unknown = 0)] = 'Unknown'),
        (e[(e.File = 1)] = 'File'),
        (e[(e.Directory = 2)] = 'Directory'),
        (e[(e.SymbolicLink = 64)] = 'SymbolicLink'),
        e
      );
    })(zi || {}),
    ze = Rn(),
    gl = (function () {
      function e(t, n) {
        (this.source = t), (this.len = t.length), (this.position = n);
      }
      return (
        (e.prototype.eos = function () {
          return this.len <= this.position;
        }),
        (e.prototype.getSource = function () {
          return this.source;
        }),
        (e.prototype.pos = function () {
          return this.position;
        }),
        (e.prototype.goBackTo = function (t) {
          this.position = t;
        }),
        (e.prototype.goBack = function (t) {
          this.position -= t;
        }),
        (e.prototype.advance = function (t) {
          this.position += t;
        }),
        (e.prototype.goToEnd = function () {
          this.position = this.source.length;
        }),
        (e.prototype.nextChar = function () {
          return this.source.charCodeAt(this.position++) || 0;
        }),
        (e.prototype.peekChar = function (t) {
          return (
            void 0 === t && (t = 0),
            this.source.charCodeAt(this.position + t) || 0
          );
        }),
        (e.prototype.advanceIfChar = function (t) {
          return (
            t === this.source.charCodeAt(this.position) && (this.position++, !0)
          );
        }),
        (e.prototype.advanceIfChars = function (t) {
          var n;
          if (this.position + t.length > this.source.length) return !1;
          for (n = 0; n < t.length; n++)
            if (this.source.charCodeAt(this.position + n) !== t[n]) return !1;
          return this.advance(n), !0;
        }),
        (e.prototype.advanceIfRegExp = function (t) {
          var r = this.source.substr(this.position).match(t);
          return r
            ? ((this.position = this.position + r.index + r[0].length), r[0])
            : '';
        }),
        (e.prototype.advanceUntilRegExp = function (t) {
          var r = this.source.substr(this.position).match(t);
          return r
            ? ((this.position = this.position + r.index), r[0])
            : (this.goToEnd(), '');
        }),
        (e.prototype.advanceUntilChar = function (t) {
          for (; this.position < this.source.length; ) {
            if (this.source.charCodeAt(this.position) === t) return !0;
            this.advance(1);
          }
          return !1;
        }),
        (e.prototype.advanceUntilChars = function (t) {
          for (; this.position + t.length <= this.source.length; ) {
            for (
              var n = 0;
              n < t.length &&
              this.source.charCodeAt(this.position + n) === t[n];
              n++
            );
            if (n === t.length) return !0;
            this.advance(1);
          }
          return this.goToEnd(), !1;
        }),
        (e.prototype.skipWhitespace = function () {
          return (
            this.advanceWhileChar(function (n) {
              return n === kl || n === Cl || n === vl || n === Tl || n === yl;
            }) > 0
          );
        }),
        (e.prototype.advanceWhileChar = function (t) {
          for (
            var n = this.position;
            this.position < this.len &&
            t(this.source.charCodeAt(this.position));

          )
            this.position++;
          return this.position - n;
        }),
        e
      );
    })(),
    Hi = '!'.charCodeAt(0),
    Ze = '-'.charCodeAt(0),
    $t = '<'.charCodeAt(0),
    Ce = '>'.charCodeAt(0),
    qn = '/'.charCodeAt(0),
    bl = '='.charCodeAt(0),
    wl = '"'.charCodeAt(0),
    _l = "'".charCodeAt(0),
    vl = '\n'.charCodeAt(0),
    yl = '\r'.charCodeAt(0),
    Tl = '\f'.charCodeAt(0),
    kl = ' '.charCodeAt(0),
    Cl = '\t'.charCodeAt(0),
    Al = { 'text/x-handlebars-template': !0, 'text/html': !0 };
  function me(e, t, n, r) {
    void 0 === t && (t = 0),
      void 0 === n && (n = O.WithinContent),
      void 0 === r && (r = !1);
    var l,
      u,
      h,
      d,
      f,
      i = new gl(e, t),
      a = n,
      o = 0,
      c = I.Unknown;
    function g() {
      return i.advanceIfRegExp(/^[_:\w][_:\w-.\d]*/).toLowerCase();
    }
    function b(v, L, D) {
      return (c = L), (o = v), (l = D), L;
    }
    function k() {
      var L,
        v = i.pos();
      if (i.eos()) return b(v, I.EOS);
      switch (a) {
        case O.WithinComment:
          return i.advanceIfChars([Ze, Ze, Ce])
            ? ((a = O.WithinContent), b(v, I.EndCommentTag))
            : (i.advanceUntilChars([Ze, Ze, Ce]), b(v, I.Comment));
        case O.WithinDoctype:
          return i.advanceIfChar(Ce)
            ? ((a = O.WithinContent), b(v, I.EndDoctypeTag))
            : (i.advanceUntilChar(Ce), b(v, I.Doctype));
        case O.WithinContent:
          if (i.advanceIfChar($t)) {
            if (!i.eos() && i.peekChar() === Hi) {
              if (i.advanceIfChars([Hi, Ze, Ze]))
                return (a = O.WithinComment), b(v, I.StartCommentTag);
              if (i.advanceIfRegExp(/^!doctype/i))
                return (a = O.WithinDoctype), b(v, I.StartDoctypeTag);
            }
            return i.advanceIfChar(qn)
              ? ((a = O.AfterOpeningEndTag), b(v, I.EndTagOpen))
              : ((a = O.AfterOpeningStartTag), b(v, I.StartTagOpen));
          }
          return i.advanceUntilChar($t), b(v, I.Content);
        case O.AfterOpeningEndTag:
          return g().length > 0
            ? ((a = O.WithinEndTag), b(v, I.EndTag))
            : i.skipWhitespace()
            ? b(
                v,
                I.Whitespace,
                ze(
                  'error.unexpectedWhitespace',
                  'Tag name must directly follow the open bracket.'
                )
              )
            : ((a = O.WithinEndTag),
              i.advanceUntilChar(Ce),
              v < i.pos()
                ? b(
                    v,
                    I.Unknown,
                    ze('error.endTagNameExpected', 'End tag name expected.')
                  )
                : k());
        case O.WithinEndTag:
          if (i.skipWhitespace()) return b(v, I.Whitespace);
          if (i.advanceIfChar(Ce))
            return (a = O.WithinContent), b(v, I.EndTagClose);
          if (r && i.peekChar() === $t)
            return (
              (a = O.WithinContent),
              b(
                v,
                I.EndTagClose,
                ze('error.closingBracketMissing', 'Closing bracket missing.')
              )
            );
          L = ze('error.closingBracketExpected', 'Closing bracket expected.');
          break;
        case O.AfterOpeningStartTag:
          return (
            (h = g()),
            (f = void 0),
            (d = void 0),
            h.length > 0
              ? ((u = !1), (a = O.WithinTag), b(v, I.StartTag))
              : i.skipWhitespace()
              ? b(
                  v,
                  I.Whitespace,
                  ze(
                    'error.unexpectedWhitespace',
                    'Tag name must directly follow the open bracket.'
                  )
                )
              : ((a = O.WithinTag),
                i.advanceUntilChar(Ce),
                v < i.pos()
                  ? b(
                      v,
                      I.Unknown,
                      ze(
                        'error.startTagNameExpected',
                        'Start tag name expected.'
                      )
                    )
                  : k())
          );
        case O.WithinTag:
          return i.skipWhitespace()
            ? ((u = !0), b(v, I.Whitespace))
            : u &&
              (d = (function _() {
                return i
                  .advanceIfRegExp(/^[^\s"'></=\x00-\x0F\x7F\x80-\x9F]*/)
                  .toLowerCase();
              })()).length > 0
            ? ((a = O.AfterAttributeName), (u = !1), b(v, I.AttributeName))
            : i.advanceIfChars([qn, Ce])
            ? ((a = O.WithinContent), b(v, I.StartTagSelfClose))
            : i.advanceIfChar(Ce)
            ? ((a =
                'script' === h
                  ? f && Al[f]
                    ? O.WithinContent
                    : O.WithinScriptContent
                  : 'style' === h
                  ? O.WithinStyleContent
                  : O.WithinContent),
              b(v, I.StartTagClose))
            : r && i.peekChar() === $t
            ? ((a = O.WithinContent),
              b(
                v,
                I.StartTagClose,
                ze('error.closingBracketMissing', 'Closing bracket missing.')
              ))
            : (i.advance(1),
              b(
                v,
                I.Unknown,
                ze(
                  'error.unexpectedCharacterInTag',
                  'Unexpected character in tag.'
                )
              ));
        case O.AfterAttributeName:
          return i.skipWhitespace()
            ? ((u = !0), b(v, I.Whitespace))
            : i.advanceIfChar(bl)
            ? ((a = O.BeforeAttributeValue), b(v, I.DelimiterAssign))
            : ((a = O.WithinTag), k());
        case O.BeforeAttributeValue:
          if (i.skipWhitespace()) return b(v, I.Whitespace);
          var H = i.advanceIfRegExp(/^[^\s"'`=<>]+/);
          if (H.length > 0)
            return (
              i.peekChar() === Ce &&
                i.peekChar(-1) === qn &&
                (i.goBack(1), (H = H.substr(0, H.length - 1))),
              'type' === d && (f = H),
              (a = O.WithinTag),
              (u = !1),
              b(v, I.AttributeValue)
            );
          var B = i.peekChar();
          return B === _l || B === wl
            ? (i.advance(1),
              i.advanceUntilChar(B) && i.advance(1),
              'type' === d && (f = i.getSource().substring(v + 1, i.pos() - 1)),
              (a = O.WithinTag),
              (u = !1),
              b(v, I.AttributeValue))
            : ((a = O.WithinTag), (u = !1), k());
        case O.WithinScriptContent:
          for (var p = 1; !i.eos(); ) {
            var m = i.advanceIfRegExp(/<!--|-->|<\/?script\s*\/?>?/i);
            if (0 === m.length) return i.goToEnd(), b(v, I.Script);
            if ('\x3c!--' === m) 1 === p && (p = 2);
            else if ('--\x3e' === m) p = 1;
            else if ('/' !== m[1]) 2 === p && (p = 3);
            else {
              if (3 !== p) {
                i.goBack(m.length);
                break;
              }
              p = 2;
            }
          }
          return (a = O.WithinContent), v < i.pos() ? b(v, I.Script) : k();
        case O.WithinStyleContent:
          return (
            i.advanceUntilRegExp(/<\/style/i),
            (a = O.WithinContent),
            v < i.pos() ? b(v, I.Styles) : k()
          );
      }
      return i.advance(1), (a = O.WithinContent), b(v, I.Unknown, L);
    }
    return {
      scan: function y() {
        var v = i.pos(),
          L = a,
          D = k();
        return D === I.EOS ||
          v !== i.pos() ||
          (r && (D === I.StartTagClose || D === I.EndTagClose))
          ? D
          : (console.log(
              'Scanner.scan has not advanced at offset ' +
                v +
                ', state before: ' +
                L +
                ' after: ' +
                a
            ),
            i.advance(1),
            b(v, I.Unknown));
      },
      getTokenType: function () {
        return c;
      },
      getTokenOffset: function () {
        return o;
      },
      getTokenLength: function () {
        return i.pos() - o;
      },
      getTokenEnd: function () {
        return i.pos();
      },
      getTokenText: function () {
        return i.getSource().substring(o, i.pos());
      },
      getScannerState: function () {
        return a;
      },
      getTokenError: function () {
        return l;
      },
    };
  }
  function Fi(e, t) {
    var n = 0,
      r = e.length;
    if (0 === r) return 0;
    for (; n < r; ) {
      var i = Math.floor((n + r) / 2);
      t(e[i]) ? (r = i) : (n = i + 1);
    }
    return n;
  }
  var xl = [
    'area',
    'base',
    'br',
    'col',
    'embed',
    'hr',
    'img',
    'input',
    'keygen',
    'link',
    'menuitem',
    'meta',
    'param',
    'source',
    'track',
    'wbr',
  ];
  function Qt(e) {
    return (
      !!e &&
      (function Sl(e, t, n) {
        for (var r = 0, i = e.length - 1; r <= i; ) {
          var a = ((r + i) / 2) | 0,
            o = n(e[a], t);
          if (o < 0) r = a + 1;
          else {
            if (!(o > 0)) return a;
            i = a - 1;
          }
        }
        return -(r + 1);
      })(xl, e.toLowerCase(), function (t, n) {
        return t.localeCompare(n);
      }) >= 0
    );
  }
  var Wi = (function () {
    function e(t, n, r, i) {
      (this.start = t),
        (this.end = n),
        (this.children = r),
        (this.parent = i),
        (this.closed = !1);
    }
    return (
      Object.defineProperty(e.prototype, 'attributeNames', {
        get: function () {
          return this.attributes ? Object.keys(this.attributes) : [];
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.isSameTag = function (t) {
        return void 0 === this.tag
          ? void 0 === t
          : void 0 !== t &&
              this.tag.length === t.length &&
              this.tag.toLowerCase() === t;
      }),
      Object.defineProperty(e.prototype, 'firstChild', {
        get: function () {
          return this.children[0];
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, 'lastChild', {
        get: function () {
          return this.children.length
            ? this.children[this.children.length - 1]
            : void 0;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.findNodeBefore = function (t) {
        var n =
          Fi(this.children, function (a) {
            return t <= a.start;
          }) - 1;
        if (n >= 0) {
          var r = this.children[n];
          if (t > r.start) {
            if (t < r.end) return r.findNodeBefore(t);
            var i = r.lastChild;
            return i && i.end === r.end ? r.findNodeBefore(t) : r;
          }
        }
        return this;
      }),
      (e.prototype.findNodeAt = function (t) {
        var n =
          Fi(this.children, function (i) {
            return t <= i.start;
          }) - 1;
        if (n >= 0) {
          var r = this.children[n];
          if (t > r.start && t <= r.end) return r.findNodeAt(t);
        }
        return this;
      }),
      e
    );
  })();
  function Bi(e) {
    for (
      var t = me(e, void 0, void 0, !0),
        n = new Wi(0, e.length, [], void 0),
        r = n,
        i = -1,
        a = void 0,
        o = null,
        c = t.scan();
      c !== I.EOS;

    ) {
      switch (c) {
        case I.StartTagOpen:
          var l = new Wi(t.getTokenOffset(), e.length, [], r);
          r.children.push(l), (r = l);
          break;
        case I.StartTag:
          r.tag = t.getTokenText();
          break;
        case I.StartTagClose:
          r.parent &&
            ((r.end = t.getTokenEnd()),
            t.getTokenLength()
              ? ((r.startTagEnd = t.getTokenEnd()),
                r.tag && Qt(r.tag) && ((r.closed = !0), (r = r.parent)))
              : (r = r.parent));
          break;
        case I.StartTagSelfClose:
          r.parent &&
            ((r.closed = !0),
            (r.end = t.getTokenEnd()),
            (r.startTagEnd = t.getTokenEnd()),
            (r = r.parent));
          break;
        case I.EndTagOpen:
          (i = t.getTokenOffset()), (a = void 0);
          break;
        case I.EndTag:
          a = t.getTokenText().toLowerCase();
          break;
        case I.EndTagClose:
          for (var u = r; !u.isSameTag(a) && u.parent; ) u = u.parent;
          if (u.parent) {
            for (; r !== u; ) (r.end = i), (r.closed = !1), (r = r.parent);
            (r.closed = !0),
              (r.endTagStart = i),
              (r.end = t.getTokenEnd()),
              (r = r.parent);
          }
          break;
        case I.AttributeName:
          (o = t.getTokenText()),
            (h = r.attributes) || (r.attributes = h = {}),
            (h[o] = null);
          break;
        case I.AttributeValue:
          var h,
            d = t.getTokenText();
          (h = r.attributes) && o && ((h[o] = d), (o = null));
      }
      c = t.scan();
    }
    for (; r.parent; ) (r.end = e.length), (r.closed = !1), (r = r.parent);
    return {
      roots: n.children,
      findNodeBefore: n.findNodeBefore.bind(n),
      findNodeAt: n.findNodeAt.bind(n),
    };
  }
  var bt = {
    'Aacute;': '\xc1',
    Aacute: '\xc1',
    'aacute;': '\xe1',
    aacute: '\xe1',
    'Abreve;': '\u0102',
    'abreve;': '\u0103',
    'ac;': '\u223e',
    'acd;': '\u223f',
    'acE;': '\u223e\u0333',
    'Acirc;': '\xc2',
    Acirc: '\xc2',
    'acirc;': '\xe2',
    acirc: '\xe2',
    'acute;': '\xb4',
    acute: '\xb4',
    'Acy;': '\u0410',
    'acy;': '\u0430',
    'AElig;': '\xc6',
    AElig: '\xc6',
    'aelig;': '\xe6',
    aelig: '\xe6',
    'af;': '\u2061',
    'Afr;': '\u{1d504}',
    'afr;': '\u{1d51e}',
    'Agrave;': '\xc0',
    Agrave: '\xc0',
    'agrave;': '\xe0',
    agrave: '\xe0',
    'alefsym;': '\u2135',
    'aleph;': '\u2135',
    'Alpha;': '\u0391',
    'alpha;': '\u03b1',
    'Amacr;': '\u0100',
    'amacr;': '\u0101',
    'amalg;': '\u2a3f',
    'AMP;': '&',
    AMP: '&',
    'amp;': '&',
    amp: '&',
    'And;': '\u2a53',
    'and;': '\u2227',
    'andand;': '\u2a55',
    'andd;': '\u2a5c',
    'andslope;': '\u2a58',
    'andv;': '\u2a5a',
    'ang;': '\u2220',
    'ange;': '\u29a4',
    'angle;': '\u2220',
    'angmsd;': '\u2221',
    'angmsdaa;': '\u29a8',
    'angmsdab;': '\u29a9',
    'angmsdac;': '\u29aa',
    'angmsdad;': '\u29ab',
    'angmsdae;': '\u29ac',
    'angmsdaf;': '\u29ad',
    'angmsdag;': '\u29ae',
    'angmsdah;': '\u29af',
    'angrt;': '\u221f',
    'angrtvb;': '\u22be',
    'angrtvbd;': '\u299d',
    'angsph;': '\u2222',
    'angst;': '\xc5',
    'angzarr;': '\u237c',
    'Aogon;': '\u0104',
    'aogon;': '\u0105',
    'Aopf;': '\u{1d538}',
    'aopf;': '\u{1d552}',
    'ap;': '\u2248',
    'apacir;': '\u2a6f',
    'apE;': '\u2a70',
    'ape;': '\u224a',
    'apid;': '\u224b',
    'apos;': "'",
    'ApplyFunction;': '\u2061',
    'approx;': '\u2248',
    'approxeq;': '\u224a',
    'Aring;': '\xc5',
    Aring: '\xc5',
    'aring;': '\xe5',
    aring: '\xe5',
    'Ascr;': '\u{1d49c}',
    'ascr;': '\u{1d4b6}',
    'Assign;': '\u2254',
    'ast;': '*',
    'asymp;': '\u2248',
    'asympeq;': '\u224d',
    'Atilde;': '\xc3',
    Atilde: '\xc3',
    'atilde;': '\xe3',
    atilde: '\xe3',
    'Auml;': '\xc4',
    Auml: '\xc4',
    'auml;': '\xe4',
    auml: '\xe4',
    'awconint;': '\u2233',
    'awint;': '\u2a11',
    'backcong;': '\u224c',
    'backepsilon;': '\u03f6',
    'backprime;': '\u2035',
    'backsim;': '\u223d',
    'backsimeq;': '\u22cd',
    'Backslash;': '\u2216',
    'Barv;': '\u2ae7',
    'barvee;': '\u22bd',
    'Barwed;': '\u2306',
    'barwed;': '\u2305',
    'barwedge;': '\u2305',
    'bbrk;': '\u23b5',
    'bbrktbrk;': '\u23b6',
    'bcong;': '\u224c',
    'Bcy;': '\u0411',
    'bcy;': '\u0431',
    'bdquo;': '\u201e',
    'becaus;': '\u2235',
    'Because;': '\u2235',
    'because;': '\u2235',
    'bemptyv;': '\u29b0',
    'bepsi;': '\u03f6',
    'bernou;': '\u212c',
    'Bernoullis;': '\u212c',
    'Beta;': '\u0392',
    'beta;': '\u03b2',
    'beth;': '\u2136',
    'between;': '\u226c',
    'Bfr;': '\u{1d505}',
    'bfr;': '\u{1d51f}',
    'bigcap;': '\u22c2',
    'bigcirc;': '\u25ef',
    'bigcup;': '\u22c3',
    'bigodot;': '\u2a00',
    'bigoplus;': '\u2a01',
    'bigotimes;': '\u2a02',
    'bigsqcup;': '\u2a06',
    'bigstar;': '\u2605',
    'bigtriangledown;': '\u25bd',
    'bigtriangleup;': '\u25b3',
    'biguplus;': '\u2a04',
    'bigvee;': '\u22c1',
    'bigwedge;': '\u22c0',
    'bkarow;': '\u290d',
    'blacklozenge;': '\u29eb',
    'blacksquare;': '\u25aa',
    'blacktriangle;': '\u25b4',
    'blacktriangledown;': '\u25be',
    'blacktriangleleft;': '\u25c2',
    'blacktriangleright;': '\u25b8',
    'blank;': '\u2423',
    'blk12;': '\u2592',
    'blk14;': '\u2591',
    'blk34;': '\u2593',
    'block;': '\u2588',
    'bne;': '=\u20e5',
    'bnequiv;': '\u2261\u20e5',
    'bNot;': '\u2aed',
    'bnot;': '\u2310',
    'Bopf;': '\u{1d539}',
    'bopf;': '\u{1d553}',
    'bot;': '\u22a5',
    'bottom;': '\u22a5',
    'bowtie;': '\u22c8',
    'boxbox;': '\u29c9',
    'boxDL;': '\u2557',
    'boxDl;': '\u2556',
    'boxdL;': '\u2555',
    'boxdl;': '\u2510',
    'boxDR;': '\u2554',
    'boxDr;': '\u2553',
    'boxdR;': '\u2552',
    'boxdr;': '\u250c',
    'boxH;': '\u2550',
    'boxh;': '\u2500',
    'boxHD;': '\u2566',
    'boxHd;': '\u2564',
    'boxhD;': '\u2565',
    'boxhd;': '\u252c',
    'boxHU;': '\u2569',
    'boxHu;': '\u2567',
    'boxhU;': '\u2568',
    'boxhu;': '\u2534',
    'boxminus;': '\u229f',
    'boxplus;': '\u229e',
    'boxtimes;': '\u22a0',
    'boxUL;': '\u255d',
    'boxUl;': '\u255c',
    'boxuL;': '\u255b',
    'boxul;': '\u2518',
    'boxUR;': '\u255a',
    'boxUr;': '\u2559',
    'boxuR;': '\u2558',
    'boxur;': '\u2514',
    'boxV;': '\u2551',
    'boxv;': '\u2502',
    'boxVH;': '\u256c',
    'boxVh;': '\u256b',
    'boxvH;': '\u256a',
    'boxvh;': '\u253c',
    'boxVL;': '\u2563',
    'boxVl;': '\u2562',
    'boxvL;': '\u2561',
    'boxvl;': '\u2524',
    'boxVR;': '\u2560',
    'boxVr;': '\u255f',
    'boxvR;': '\u255e',
    'boxvr;': '\u251c',
    'bprime;': '\u2035',
    'Breve;': '\u02d8',
    'breve;': '\u02d8',
    'brvbar;': '\xa6',
    brvbar: '\xa6',
    'Bscr;': '\u212c',
    'bscr;': '\u{1d4b7}',
    'bsemi;': '\u204f',
    'bsim;': '\u223d',
    'bsime;': '\u22cd',
    'bsol;': '\\',
    'bsolb;': '\u29c5',
    'bsolhsub;': '\u27c8',
    'bull;': '\u2022',
    'bullet;': '\u2022',
    'bump;': '\u224e',
    'bumpE;': '\u2aae',
    'bumpe;': '\u224f',
    'Bumpeq;': '\u224e',
    'bumpeq;': '\u224f',
    'Cacute;': '\u0106',
    'cacute;': '\u0107',
    'Cap;': '\u22d2',
    'cap;': '\u2229',
    'capand;': '\u2a44',
    'capbrcup;': '\u2a49',
    'capcap;': '\u2a4b',
    'capcup;': '\u2a47',
    'capdot;': '\u2a40',
    'CapitalDifferentialD;': '\u2145',
    'caps;': '\u2229\ufe00',
    'caret;': '\u2041',
    'caron;': '\u02c7',
    'Cayleys;': '\u212d',
    'ccaps;': '\u2a4d',
    'Ccaron;': '\u010c',
    'ccaron;': '\u010d',
    'Ccedil;': '\xc7',
    Ccedil: '\xc7',
    'ccedil;': '\xe7',
    ccedil: '\xe7',
    'Ccirc;': '\u0108',
    'ccirc;': '\u0109',
    'Cconint;': '\u2230',
    'ccups;': '\u2a4c',
    'ccupssm;': '\u2a50',
    'Cdot;': '\u010a',
    'cdot;': '\u010b',
    'cedil;': '\xb8',
    cedil: '\xb8',
    'Cedilla;': '\xb8',
    'cemptyv;': '\u29b2',
    'cent;': '\xa2',
    cent: '\xa2',
    'CenterDot;': '\xb7',
    'centerdot;': '\xb7',
    'Cfr;': '\u212d',
    'cfr;': '\u{1d520}',
    'CHcy;': '\u0427',
    'chcy;': '\u0447',
    'check;': '\u2713',
    'checkmark;': '\u2713',
    'Chi;': '\u03a7',
    'chi;': '\u03c7',
    'cir;': '\u25cb',
    'circ;': '\u02c6',
    'circeq;': '\u2257',
    'circlearrowleft;': '\u21ba',
    'circlearrowright;': '\u21bb',
    'circledast;': '\u229b',
    'circledcirc;': '\u229a',
    'circleddash;': '\u229d',
    'CircleDot;': '\u2299',
    'circledR;': '\xae',
    'circledS;': '\u24c8',
    'CircleMinus;': '\u2296',
    'CirclePlus;': '\u2295',
    'CircleTimes;': '\u2297',
    'cirE;': '\u29c3',
    'cire;': '\u2257',
    'cirfnint;': '\u2a10',
    'cirmid;': '\u2aef',
    'cirscir;': '\u29c2',
    'ClockwiseContourIntegral;': '\u2232',
    'CloseCurlyDoubleQuote;': '\u201d',
    'CloseCurlyQuote;': '\u2019',
    'clubs;': '\u2663',
    'clubsuit;': '\u2663',
    'Colon;': '\u2237',
    'colon;': ':',
    'Colone;': '\u2a74',
    'colone;': '\u2254',
    'coloneq;': '\u2254',
    'comma;': ',',
    'commat;': '@',
    'comp;': '\u2201',
    'compfn;': '\u2218',
    'complement;': '\u2201',
    'complexes;': '\u2102',
    'cong;': '\u2245',
    'congdot;': '\u2a6d',
    'Congruent;': '\u2261',
    'Conint;': '\u222f',
    'conint;': '\u222e',
    'ContourIntegral;': '\u222e',
    'Copf;': '\u2102',
    'copf;': '\u{1d554}',
    'coprod;': '\u2210',
    'Coproduct;': '\u2210',
    'COPY;': '\xa9',
    COPY: '\xa9',
    'copy;': '\xa9',
    copy: '\xa9',
    'copysr;': '\u2117',
    'CounterClockwiseContourIntegral;': '\u2233',
    'crarr;': '\u21b5',
    'Cross;': '\u2a2f',
    'cross;': '\u2717',
    'Cscr;': '\u{1d49e}',
    'cscr;': '\u{1d4b8}',
    'csub;': '\u2acf',
    'csube;': '\u2ad1',
    'csup;': '\u2ad0',
    'csupe;': '\u2ad2',
    'ctdot;': '\u22ef',
    'cudarrl;': '\u2938',
    'cudarrr;': '\u2935',
    'cuepr;': '\u22de',
    'cuesc;': '\u22df',
    'cularr;': '\u21b6',
    'cularrp;': '\u293d',
    'Cup;': '\u22d3',
    'cup;': '\u222a',
    'cupbrcap;': '\u2a48',
    'CupCap;': '\u224d',
    'cupcap;': '\u2a46',
    'cupcup;': '\u2a4a',
    'cupdot;': '\u228d',
    'cupor;': '\u2a45',
    'cups;': '\u222a\ufe00',
    'curarr;': '\u21b7',
    'curarrm;': '\u293c',
    'curlyeqprec;': '\u22de',
    'curlyeqsucc;': '\u22df',
    'curlyvee;': '\u22ce',
    'curlywedge;': '\u22cf',
    'curren;': '\xa4',
    curren: '\xa4',
    'curvearrowleft;': '\u21b6',
    'curvearrowright;': '\u21b7',
    'cuvee;': '\u22ce',
    'cuwed;': '\u22cf',
    'cwconint;': '\u2232',
    'cwint;': '\u2231',
    'cylcty;': '\u232d',
    'Dagger;': '\u2021',
    'dagger;': '\u2020',
    'daleth;': '\u2138',
    'Darr;': '\u21a1',
    'dArr;': '\u21d3',
    'darr;': '\u2193',
    'dash;': '\u2010',
    'Dashv;': '\u2ae4',
    'dashv;': '\u22a3',
    'dbkarow;': '\u290f',
    'dblac;': '\u02dd',
    'Dcaron;': '\u010e',
    'dcaron;': '\u010f',
    'Dcy;': '\u0414',
    'dcy;': '\u0434',
    'DD;': '\u2145',
    'dd;': '\u2146',
    'ddagger;': '\u2021',
    'ddarr;': '\u21ca',
    'DDotrahd;': '\u2911',
    'ddotseq;': '\u2a77',
    'deg;': '\xb0',
    deg: '\xb0',
    'Del;': '\u2207',
    'Delta;': '\u0394',
    'delta;': '\u03b4',
    'demptyv;': '\u29b1',
    'dfisht;': '\u297f',
    'Dfr;': '\u{1d507}',
    'dfr;': '\u{1d521}',
    'dHar;': '\u2965',
    'dharl;': '\u21c3',
    'dharr;': '\u21c2',
    'DiacriticalAcute;': '\xb4',
    'DiacriticalDot;': '\u02d9',
    'DiacriticalDoubleAcute;': '\u02dd',
    'DiacriticalGrave;': '`',
    'DiacriticalTilde;': '\u02dc',
    'diam;': '\u22c4',
    'Diamond;': '\u22c4',
    'diamond;': '\u22c4',
    'diamondsuit;': '\u2666',
    'diams;': '\u2666',
    'die;': '\xa8',
    'DifferentialD;': '\u2146',
    'digamma;': '\u03dd',
    'disin;': '\u22f2',
    'div;': '\xf7',
    'divide;': '\xf7',
    divide: '\xf7',
    'divideontimes;': '\u22c7',
    'divonx;': '\u22c7',
    'DJcy;': '\u0402',
    'djcy;': '\u0452',
    'dlcorn;': '\u231e',
    'dlcrop;': '\u230d',
    'dollar;': '$',
    'Dopf;': '\u{1d53b}',
    'dopf;': '\u{1d555}',
    'Dot;': '\xa8',
    'dot;': '\u02d9',
    'DotDot;': '\u20dc',
    'doteq;': '\u2250',
    'doteqdot;': '\u2251',
    'DotEqual;': '\u2250',
    'dotminus;': '\u2238',
    'dotplus;': '\u2214',
    'dotsquare;': '\u22a1',
    'doublebarwedge;': '\u2306',
    'DoubleContourIntegral;': '\u222f',
    'DoubleDot;': '\xa8',
    'DoubleDownArrow;': '\u21d3',
    'DoubleLeftArrow;': '\u21d0',
    'DoubleLeftRightArrow;': '\u21d4',
    'DoubleLeftTee;': '\u2ae4',
    'DoubleLongLeftArrow;': '\u27f8',
    'DoubleLongLeftRightArrow;': '\u27fa',
    'DoubleLongRightArrow;': '\u27f9',
    'DoubleRightArrow;': '\u21d2',
    'DoubleRightTee;': '\u22a8',
    'DoubleUpArrow;': '\u21d1',
    'DoubleUpDownArrow;': '\u21d5',
    'DoubleVerticalBar;': '\u2225',
    'DownArrow;': '\u2193',
    'Downarrow;': '\u21d3',
    'downarrow;': '\u2193',
    'DownArrowBar;': '\u2913',
    'DownArrowUpArrow;': '\u21f5',
    'DownBreve;': '\u0311',
    'downdownarrows;': '\u21ca',
    'downharpoonleft;': '\u21c3',
    'downharpoonright;': '\u21c2',
    'DownLeftRightVector;': '\u2950',
    'DownLeftTeeVector;': '\u295e',
    'DownLeftVector;': '\u21bd',
    'DownLeftVectorBar;': '\u2956',
    'DownRightTeeVector;': '\u295f',
    'DownRightVector;': '\u21c1',
    'DownRightVectorBar;': '\u2957',
    'DownTee;': '\u22a4',
    'DownTeeArrow;': '\u21a7',
    'drbkarow;': '\u2910',
    'drcorn;': '\u231f',
    'drcrop;': '\u230c',
    'Dscr;': '\u{1d49f}',
    'dscr;': '\u{1d4b9}',
    'DScy;': '\u0405',
    'dscy;': '\u0455',
    'dsol;': '\u29f6',
    'Dstrok;': '\u0110',
    'dstrok;': '\u0111',
    'dtdot;': '\u22f1',
    'dtri;': '\u25bf',
    'dtrif;': '\u25be',
    'duarr;': '\u21f5',
    'duhar;': '\u296f',
    'dwangle;': '\u29a6',
    'DZcy;': '\u040f',
    'dzcy;': '\u045f',
    'dzigrarr;': '\u27ff',
    'Eacute;': '\xc9',
    Eacute: '\xc9',
    'eacute;': '\xe9',
    eacute: '\xe9',
    'easter;': '\u2a6e',
    'Ecaron;': '\u011a',
    'ecaron;': '\u011b',
    'ecir;': '\u2256',
    'Ecirc;': '\xca',
    Ecirc: '\xca',
    'ecirc;': '\xea',
    ecirc: '\xea',
    'ecolon;': '\u2255',
    'Ecy;': '\u042d',
    'ecy;': '\u044d',
    'eDDot;': '\u2a77',
    'Edot;': '\u0116',
    'eDot;': '\u2251',
    'edot;': '\u0117',
    'ee;': '\u2147',
    'efDot;': '\u2252',
    'Efr;': '\u{1d508}',
    'efr;': '\u{1d522}',
    'eg;': '\u2a9a',
    'Egrave;': '\xc8',
    Egrave: '\xc8',
    'egrave;': '\xe8',
    egrave: '\xe8',
    'egs;': '\u2a96',
    'egsdot;': '\u2a98',
    'el;': '\u2a99',
    'Element;': '\u2208',
    'elinters;': '\u23e7',
    'ell;': '\u2113',
    'els;': '\u2a95',
    'elsdot;': '\u2a97',
    'Emacr;': '\u0112',
    'emacr;': '\u0113',
    'empty;': '\u2205',
    'emptyset;': '\u2205',
    'EmptySmallSquare;': '\u25fb',
    'emptyv;': '\u2205',
    'EmptyVerySmallSquare;': '\u25ab',
    'emsp;': '\u2003',
    'emsp13;': '\u2004',
    'emsp14;': '\u2005',
    'ENG;': '\u014a',
    'eng;': '\u014b',
    'ensp;': '\u2002',
    'Eogon;': '\u0118',
    'eogon;': '\u0119',
    'Eopf;': '\u{1d53c}',
    'eopf;': '\u{1d556}',
    'epar;': '\u22d5',
    'eparsl;': '\u29e3',
    'eplus;': '\u2a71',
    'epsi;': '\u03b5',
    'Epsilon;': '\u0395',
    'epsilon;': '\u03b5',
    'epsiv;': '\u03f5',
    'eqcirc;': '\u2256',
    'eqcolon;': '\u2255',
    'eqsim;': '\u2242',
    'eqslantgtr;': '\u2a96',
    'eqslantless;': '\u2a95',
    'Equal;': '\u2a75',
    'equals;': '=',
    'EqualTilde;': '\u2242',
    'equest;': '\u225f',
    'Equilibrium;': '\u21cc',
    'equiv;': '\u2261',
    'equivDD;': '\u2a78',
    'eqvparsl;': '\u29e5',
    'erarr;': '\u2971',
    'erDot;': '\u2253',
    'Escr;': '\u2130',
    'escr;': '\u212f',
    'esdot;': '\u2250',
    'Esim;': '\u2a73',
    'esim;': '\u2242',
    'Eta;': '\u0397',
    'eta;': '\u03b7',
    'ETH;': '\xd0',
    ETH: '\xd0',
    'eth;': '\xf0',
    eth: '\xf0',
    'Euml;': '\xcb',
    Euml: '\xcb',
    'euml;': '\xeb',
    euml: '\xeb',
    'euro;': '\u20ac',
    'excl;': '!',
    'exist;': '\u2203',
    'Exists;': '\u2203',
    'expectation;': '\u2130',
    'ExponentialE;': '\u2147',
    'exponentiale;': '\u2147',
    'fallingdotseq;': '\u2252',
    'Fcy;': '\u0424',
    'fcy;': '\u0444',
    'female;': '\u2640',
    'ffilig;': '\ufb03',
    'fflig;': '\ufb00',
    'ffllig;': '\ufb04',
    'Ffr;': '\u{1d509}',
    'ffr;': '\u{1d523}',
    'filig;': '\ufb01',
    'FilledSmallSquare;': '\u25fc',
    'FilledVerySmallSquare;': '\u25aa',
    'fjlig;': 'fj',
    'flat;': '\u266d',
    'fllig;': '\ufb02',
    'fltns;': '\u25b1',
    'fnof;': '\u0192',
    'Fopf;': '\u{1d53d}',
    'fopf;': '\u{1d557}',
    'ForAll;': '\u2200',
    'forall;': '\u2200',
    'fork;': '\u22d4',
    'forkv;': '\u2ad9',
    'Fouriertrf;': '\u2131',
    'fpartint;': '\u2a0d',
    'frac12;': '\xbd',
    frac12: '\xbd',
    'frac13;': '\u2153',
    'frac14;': '\xbc',
    frac14: '\xbc',
    'frac15;': '\u2155',
    'frac16;': '\u2159',
    'frac18;': '\u215b',
    'frac23;': '\u2154',
    'frac25;': '\u2156',
    'frac34;': '\xbe',
    frac34: '\xbe',
    'frac35;': '\u2157',
    'frac38;': '\u215c',
    'frac45;': '\u2158',
    'frac56;': '\u215a',
    'frac58;': '\u215d',
    'frac78;': '\u215e',
    'frasl;': '\u2044',
    'frown;': '\u2322',
    'Fscr;': '\u2131',
    'fscr;': '\u{1d4bb}',
    'gacute;': '\u01f5',
    'Gamma;': '\u0393',
    'gamma;': '\u03b3',
    'Gammad;': '\u03dc',
    'gammad;': '\u03dd',
    'gap;': '\u2a86',
    'Gbreve;': '\u011e',
    'gbreve;': '\u011f',
    'Gcedil;': '\u0122',
    'Gcirc;': '\u011c',
    'gcirc;': '\u011d',
    'Gcy;': '\u0413',
    'gcy;': '\u0433',
    'Gdot;': '\u0120',
    'gdot;': '\u0121',
    'gE;': '\u2267',
    'ge;': '\u2265',
    'gEl;': '\u2a8c',
    'gel;': '\u22db',
    'geq;': '\u2265',
    'geqq;': '\u2267',
    'geqslant;': '\u2a7e',
    'ges;': '\u2a7e',
    'gescc;': '\u2aa9',
    'gesdot;': '\u2a80',
    'gesdoto;': '\u2a82',
    'gesdotol;': '\u2a84',
    'gesl;': '\u22db\ufe00',
    'gesles;': '\u2a94',
    'Gfr;': '\u{1d50a}',
    'gfr;': '\u{1d524}',
    'Gg;': '\u22d9',
    'gg;': '\u226b',
    'ggg;': '\u22d9',
    'gimel;': '\u2137',
    'GJcy;': '\u0403',
    'gjcy;': '\u0453',
    'gl;': '\u2277',
    'gla;': '\u2aa5',
    'glE;': '\u2a92',
    'glj;': '\u2aa4',
    'gnap;': '\u2a8a',
    'gnapprox;': '\u2a8a',
    'gnE;': '\u2269',
    'gne;': '\u2a88',
    'gneq;': '\u2a88',
    'gneqq;': '\u2269',
    'gnsim;': '\u22e7',
    'Gopf;': '\u{1d53e}',
    'gopf;': '\u{1d558}',
    'grave;': '`',
    'GreaterEqual;': '\u2265',
    'GreaterEqualLess;': '\u22db',
    'GreaterFullEqual;': '\u2267',
    'GreaterGreater;': '\u2aa2',
    'GreaterLess;': '\u2277',
    'GreaterSlantEqual;': '\u2a7e',
    'GreaterTilde;': '\u2273',
    'Gscr;': '\u{1d4a2}',
    'gscr;': '\u210a',
    'gsim;': '\u2273',
    'gsime;': '\u2a8e',
    'gsiml;': '\u2a90',
    'GT;': '>',
    GT: '>',
    'Gt;': '\u226b',
    'gt;': '>',
    gt: '>',
    'gtcc;': '\u2aa7',
    'gtcir;': '\u2a7a',
    'gtdot;': '\u22d7',
    'gtlPar;': '\u2995',
    'gtquest;': '\u2a7c',
    'gtrapprox;': '\u2a86',
    'gtrarr;': '\u2978',
    'gtrdot;': '\u22d7',
    'gtreqless;': '\u22db',
    'gtreqqless;': '\u2a8c',
    'gtrless;': '\u2277',
    'gtrsim;': '\u2273',
    'gvertneqq;': '\u2269\ufe00',
    'gvnE;': '\u2269\ufe00',
    'Hacek;': '\u02c7',
    'hairsp;': '\u200a',
    'half;': '\xbd',
    'hamilt;': '\u210b',
    'HARDcy;': '\u042a',
    'hardcy;': '\u044a',
    'hArr;': '\u21d4',
    'harr;': '\u2194',
    'harrcir;': '\u2948',
    'harrw;': '\u21ad',
    'Hat;': '^',
    'hbar;': '\u210f',
    'Hcirc;': '\u0124',
    'hcirc;': '\u0125',
    'hearts;': '\u2665',
    'heartsuit;': '\u2665',
    'hellip;': '\u2026',
    'hercon;': '\u22b9',
    'Hfr;': '\u210c',
    'hfr;': '\u{1d525}',
    'HilbertSpace;': '\u210b',
    'hksearow;': '\u2925',
    'hkswarow;': '\u2926',
    'hoarr;': '\u21ff',
    'homtht;': '\u223b',
    'hookleftarrow;': '\u21a9',
    'hookrightarrow;': '\u21aa',
    'Hopf;': '\u210d',
    'hopf;': '\u{1d559}',
    'horbar;': '\u2015',
    'HorizontalLine;': '\u2500',
    'Hscr;': '\u210b',
    'hscr;': '\u{1d4bd}',
    'hslash;': '\u210f',
    'Hstrok;': '\u0126',
    'hstrok;': '\u0127',
    'HumpDownHump;': '\u224e',
    'HumpEqual;': '\u224f',
    'hybull;': '\u2043',
    'hyphen;': '\u2010',
    'Iacute;': '\xcd',
    Iacute: '\xcd',
    'iacute;': '\xed',
    iacute: '\xed',
    'ic;': '\u2063',
    'Icirc;': '\xce',
    Icirc: '\xce',
    'icirc;': '\xee',
    icirc: '\xee',
    'Icy;': '\u0418',
    'icy;': '\u0438',
    'Idot;': '\u0130',
    'IEcy;': '\u0415',
    'iecy;': '\u0435',
    'iexcl;': '\xa1',
    iexcl: '\xa1',
    'iff;': '\u21d4',
    'Ifr;': '\u2111',
    'ifr;': '\u{1d526}',
    'Igrave;': '\xcc',
    Igrave: '\xcc',
    'igrave;': '\xec',
    igrave: '\xec',
    'ii;': '\u2148',
    'iiiint;': '\u2a0c',
    'iiint;': '\u222d',
    'iinfin;': '\u29dc',
    'iiota;': '\u2129',
    'IJlig;': '\u0132',
    'ijlig;': '\u0133',
    'Im;': '\u2111',
    'Imacr;': '\u012a',
    'imacr;': '\u012b',
    'image;': '\u2111',
    'ImaginaryI;': '\u2148',
    'imagline;': '\u2110',
    'imagpart;': '\u2111',
    'imath;': '\u0131',
    'imof;': '\u22b7',
    'imped;': '\u01b5',
    'Implies;': '\u21d2',
    'in;': '\u2208',
    'incare;': '\u2105',
    'infin;': '\u221e',
    'infintie;': '\u29dd',
    'inodot;': '\u0131',
    'Int;': '\u222c',
    'int;': '\u222b',
    'intcal;': '\u22ba',
    'integers;': '\u2124',
    'Integral;': '\u222b',
    'intercal;': '\u22ba',
    'Intersection;': '\u22c2',
    'intlarhk;': '\u2a17',
    'intprod;': '\u2a3c',
    'InvisibleComma;': '\u2063',
    'InvisibleTimes;': '\u2062',
    'IOcy;': '\u0401',
    'iocy;': '\u0451',
    'Iogon;': '\u012e',
    'iogon;': '\u012f',
    'Iopf;': '\u{1d540}',
    'iopf;': '\u{1d55a}',
    'Iota;': '\u0399',
    'iota;': '\u03b9',
    'iprod;': '\u2a3c',
    'iquest;': '\xbf',
    iquest: '\xbf',
    'Iscr;': '\u2110',
    'iscr;': '\u{1d4be}',
    'isin;': '\u2208',
    'isindot;': '\u22f5',
    'isinE;': '\u22f9',
    'isins;': '\u22f4',
    'isinsv;': '\u22f3',
    'isinv;': '\u2208',
    'it;': '\u2062',
    'Itilde;': '\u0128',
    'itilde;': '\u0129',
    'Iukcy;': '\u0406',
    'iukcy;': '\u0456',
    'Iuml;': '\xcf',
    Iuml: '\xcf',
    'iuml;': '\xef',
    iuml: '\xef',
    'Jcirc;': '\u0134',
    'jcirc;': '\u0135',
    'Jcy;': '\u0419',
    'jcy;': '\u0439',
    'Jfr;': '\u{1d50d}',
    'jfr;': '\u{1d527}',
    'jmath;': '\u0237',
    'Jopf;': '\u{1d541}',
    'jopf;': '\u{1d55b}',
    'Jscr;': '\u{1d4a5}',
    'jscr;': '\u{1d4bf}',
    'Jsercy;': '\u0408',
    'jsercy;': '\u0458',
    'Jukcy;': '\u0404',
    'jukcy;': '\u0454',
    'Kappa;': '\u039a',
    'kappa;': '\u03ba',
    'kappav;': '\u03f0',
    'Kcedil;': '\u0136',
    'kcedil;': '\u0137',
    'Kcy;': '\u041a',
    'kcy;': '\u043a',
    'Kfr;': '\u{1d50e}',
    'kfr;': '\u{1d528}',
    'kgreen;': '\u0138',
    'KHcy;': '\u0425',
    'khcy;': '\u0445',
    'KJcy;': '\u040c',
    'kjcy;': '\u045c',
    'Kopf;': '\u{1d542}',
    'kopf;': '\u{1d55c}',
    'Kscr;': '\u{1d4a6}',
    'kscr;': '\u{1d4c0}',
    'lAarr;': '\u21da',
    'Lacute;': '\u0139',
    'lacute;': '\u013a',
    'laemptyv;': '\u29b4',
    'lagran;': '\u2112',
    'Lambda;': '\u039b',
    'lambda;': '\u03bb',
    'Lang;': '\u27ea',
    'lang;': '\u27e8',
    'langd;': '\u2991',
    'langle;': '\u27e8',
    'lap;': '\u2a85',
    'Laplacetrf;': '\u2112',
    'laquo;': '\xab',
    laquo: '\xab',
    'Larr;': '\u219e',
    'lArr;': '\u21d0',
    'larr;': '\u2190',
    'larrb;': '\u21e4',
    'larrbfs;': '\u291f',
    'larrfs;': '\u291d',
    'larrhk;': '\u21a9',
    'larrlp;': '\u21ab',
    'larrpl;': '\u2939',
    'larrsim;': '\u2973',
    'larrtl;': '\u21a2',
    'lat;': '\u2aab',
    'lAtail;': '\u291b',
    'latail;': '\u2919',
    'late;': '\u2aad',
    'lates;': '\u2aad\ufe00',
    'lBarr;': '\u290e',
    'lbarr;': '\u290c',
    'lbbrk;': '\u2772',
    'lbrace;': '{',
    'lbrack;': '[',
    'lbrke;': '\u298b',
    'lbrksld;': '\u298f',
    'lbrkslu;': '\u298d',
    'Lcaron;': '\u013d',
    'lcaron;': '\u013e',
    'Lcedil;': '\u013b',
    'lcedil;': '\u013c',
    'lceil;': '\u2308',
    'lcub;': '{',
    'Lcy;': '\u041b',
    'lcy;': '\u043b',
    'ldca;': '\u2936',
    'ldquo;': '\u201c',
    'ldquor;': '\u201e',
    'ldrdhar;': '\u2967',
    'ldrushar;': '\u294b',
    'ldsh;': '\u21b2',
    'lE;': '\u2266',
    'le;': '\u2264',
    'LeftAngleBracket;': '\u27e8',
    'LeftArrow;': '\u2190',
    'Leftarrow;': '\u21d0',
    'leftarrow;': '\u2190',
    'LeftArrowBar;': '\u21e4',
    'LeftArrowRightArrow;': '\u21c6',
    'leftarrowtail;': '\u21a2',
    'LeftCeiling;': '\u2308',
    'LeftDoubleBracket;': '\u27e6',
    'LeftDownTeeVector;': '\u2961',
    'LeftDownVector;': '\u21c3',
    'LeftDownVectorBar;': '\u2959',
    'LeftFloor;': '\u230a',
    'leftharpoondown;': '\u21bd',
    'leftharpoonup;': '\u21bc',
    'leftleftarrows;': '\u21c7',
    'LeftRightArrow;': '\u2194',
    'Leftrightarrow;': '\u21d4',
    'leftrightarrow;': '\u2194',
    'leftrightarrows;': '\u21c6',
    'leftrightharpoons;': '\u21cb',
    'leftrightsquigarrow;': '\u21ad',
    'LeftRightVector;': '\u294e',
    'LeftTee;': '\u22a3',
    'LeftTeeArrow;': '\u21a4',
    'LeftTeeVector;': '\u295a',
    'leftthreetimes;': '\u22cb',
    'LeftTriangle;': '\u22b2',
    'LeftTriangleBar;': '\u29cf',
    'LeftTriangleEqual;': '\u22b4',
    'LeftUpDownVector;': '\u2951',
    'LeftUpTeeVector;': '\u2960',
    'LeftUpVector;': '\u21bf',
    'LeftUpVectorBar;': '\u2958',
    'LeftVector;': '\u21bc',
    'LeftVectorBar;': '\u2952',
    'lEg;': '\u2a8b',
    'leg;': '\u22da',
    'leq;': '\u2264',
    'leqq;': '\u2266',
    'leqslant;': '\u2a7d',
    'les;': '\u2a7d',
    'lescc;': '\u2aa8',
    'lesdot;': '\u2a7f',
    'lesdoto;': '\u2a81',
    'lesdotor;': '\u2a83',
    'lesg;': '\u22da\ufe00',
    'lesges;': '\u2a93',
    'lessapprox;': '\u2a85',
    'lessdot;': '\u22d6',
    'lesseqgtr;': '\u22da',
    'lesseqqgtr;': '\u2a8b',
    'LessEqualGreater;': '\u22da',
    'LessFullEqual;': '\u2266',
    'LessGreater;': '\u2276',
    'lessgtr;': '\u2276',
    'LessLess;': '\u2aa1',
    'lesssim;': '\u2272',
    'LessSlantEqual;': '\u2a7d',
    'LessTilde;': '\u2272',
    'lfisht;': '\u297c',
    'lfloor;': '\u230a',
    'Lfr;': '\u{1d50f}',
    'lfr;': '\u{1d529}',
    'lg;': '\u2276',
    'lgE;': '\u2a91',
    'lHar;': '\u2962',
    'lhard;': '\u21bd',
    'lharu;': '\u21bc',
    'lharul;': '\u296a',
    'lhblk;': '\u2584',
    'LJcy;': '\u0409',
    'ljcy;': '\u0459',
    'Ll;': '\u22d8',
    'll;': '\u226a',
    'llarr;': '\u21c7',
    'llcorner;': '\u231e',
    'Lleftarrow;': '\u21da',
    'llhard;': '\u296b',
    'lltri;': '\u25fa',
    'Lmidot;': '\u013f',
    'lmidot;': '\u0140',
    'lmoust;': '\u23b0',
    'lmoustache;': '\u23b0',
    'lnap;': '\u2a89',
    'lnapprox;': '\u2a89',
    'lnE;': '\u2268',
    'lne;': '\u2a87',
    'lneq;': '\u2a87',
    'lneqq;': '\u2268',
    'lnsim;': '\u22e6',
    'loang;': '\u27ec',
    'loarr;': '\u21fd',
    'lobrk;': '\u27e6',
    'LongLeftArrow;': '\u27f5',
    'Longleftarrow;': '\u27f8',
    'longleftarrow;': '\u27f5',
    'LongLeftRightArrow;': '\u27f7',
    'Longleftrightarrow;': '\u27fa',
    'longleftrightarrow;': '\u27f7',
    'longmapsto;': '\u27fc',
    'LongRightArrow;': '\u27f6',
    'Longrightarrow;': '\u27f9',
    'longrightarrow;': '\u27f6',
    'looparrowleft;': '\u21ab',
    'looparrowright;': '\u21ac',
    'lopar;': '\u2985',
    'Lopf;': '\u{1d543}',
    'lopf;': '\u{1d55d}',
    'loplus;': '\u2a2d',
    'lotimes;': '\u2a34',
    'lowast;': '\u2217',
    'lowbar;': '_',
    'LowerLeftArrow;': '\u2199',
    'LowerRightArrow;': '\u2198',
    'loz;': '\u25ca',
    'lozenge;': '\u25ca',
    'lozf;': '\u29eb',
    'lpar;': '(',
    'lparlt;': '\u2993',
    'lrarr;': '\u21c6',
    'lrcorner;': '\u231f',
    'lrhar;': '\u21cb',
    'lrhard;': '\u296d',
    'lrm;': '\u200e',
    'lrtri;': '\u22bf',
    'lsaquo;': '\u2039',
    'Lscr;': '\u2112',
    'lscr;': '\u{1d4c1}',
    'Lsh;': '\u21b0',
    'lsh;': '\u21b0',
    'lsim;': '\u2272',
    'lsime;': '\u2a8d',
    'lsimg;': '\u2a8f',
    'lsqb;': '[',
    'lsquo;': '\u2018',
    'lsquor;': '\u201a',
    'Lstrok;': '\u0141',
    'lstrok;': '\u0142',
    'LT;': '<',
    LT: '<',
    'Lt;': '\u226a',
    'lt;': '<',
    lt: '<',
    'ltcc;': '\u2aa6',
    'ltcir;': '\u2a79',
    'ltdot;': '\u22d6',
    'lthree;': '\u22cb',
    'ltimes;': '\u22c9',
    'ltlarr;': '\u2976',
    'ltquest;': '\u2a7b',
    'ltri;': '\u25c3',
    'ltrie;': '\u22b4',
    'ltrif;': '\u25c2',
    'ltrPar;': '\u2996',
    'lurdshar;': '\u294a',
    'luruhar;': '\u2966',
    'lvertneqq;': '\u2268\ufe00',
    'lvnE;': '\u2268\ufe00',
    'macr;': '\xaf',
    macr: '\xaf',
    'male;': '\u2642',
    'malt;': '\u2720',
    'maltese;': '\u2720',
    'Map;': '\u2905',
    'map;': '\u21a6',
    'mapsto;': '\u21a6',
    'mapstodown;': '\u21a7',
    'mapstoleft;': '\u21a4',
    'mapstoup;': '\u21a5',
    'marker;': '\u25ae',
    'mcomma;': '\u2a29',
    'Mcy;': '\u041c',
    'mcy;': '\u043c',
    'mdash;': '\u2014',
    'mDDot;': '\u223a',
    'measuredangle;': '\u2221',
    'MediumSpace;': '\u205f',
    'Mellintrf;': '\u2133',
    'Mfr;': '\u{1d510}',
    'mfr;': '\u{1d52a}',
    'mho;': '\u2127',
    'micro;': '\xb5',
    micro: '\xb5',
    'mid;': '\u2223',
    'midast;': '*',
    'midcir;': '\u2af0',
    'middot;': '\xb7',
    middot: '\xb7',
    'minus;': '\u2212',
    'minusb;': '\u229f',
    'minusd;': '\u2238',
    'minusdu;': '\u2a2a',
    'MinusPlus;': '\u2213',
    'mlcp;': '\u2adb',
    'mldr;': '\u2026',
    'mnplus;': '\u2213',
    'models;': '\u22a7',
    'Mopf;': '\u{1d544}',
    'mopf;': '\u{1d55e}',
    'mp;': '\u2213',
    'Mscr;': '\u2133',
    'mscr;': '\u{1d4c2}',
    'mstpos;': '\u223e',
    'Mu;': '\u039c',
    'mu;': '\u03bc',
    'multimap;': '\u22b8',
    'mumap;': '\u22b8',
    'nabla;': '\u2207',
    'Nacute;': '\u0143',
    'nacute;': '\u0144',
    'nang;': '\u2220\u20d2',
    'nap;': '\u2249',
    'napE;': '\u2a70\u0338',
    'napid;': '\u224b\u0338',
    'napos;': '\u0149',
    'napprox;': '\u2249',
    'natur;': '\u266e',
    'natural;': '\u266e',
    'naturals;': '\u2115',
    'nbsp;': '\xa0',
    nbsp: '\xa0',
    'nbump;': '\u224e\u0338',
    'nbumpe;': '\u224f\u0338',
    'ncap;': '\u2a43',
    'Ncaron;': '\u0147',
    'ncaron;': '\u0148',
    'Ncedil;': '\u0145',
    'ncedil;': '\u0146',
    'ncong;': '\u2247',
    'ncongdot;': '\u2a6d\u0338',
    'ncup;': '\u2a42',
    'Ncy;': '\u041d',
    'ncy;': '\u043d',
    'ndash;': '\u2013',
    'ne;': '\u2260',
    'nearhk;': '\u2924',
    'neArr;': '\u21d7',
    'nearr;': '\u2197',
    'nearrow;': '\u2197',
    'nedot;': '\u2250\u0338',
    'NegativeMediumSpace;': '\u200b',
    'NegativeThickSpace;': '\u200b',
    'NegativeThinSpace;': '\u200b',
    'NegativeVeryThinSpace;': '\u200b',
    'nequiv;': '\u2262',
    'nesear;': '\u2928',
    'nesim;': '\u2242\u0338',
    'NestedGreaterGreater;': '\u226b',
    'NestedLessLess;': '\u226a',
    'NewLine;': '\n',
    'nexist;': '\u2204',
    'nexists;': '\u2204',
    'Nfr;': '\u{1d511}',
    'nfr;': '\u{1d52b}',
    'ngE;': '\u2267\u0338',
    'nge;': '\u2271',
    'ngeq;': '\u2271',
    'ngeqq;': '\u2267\u0338',
    'ngeqslant;': '\u2a7e\u0338',
    'nges;': '\u2a7e\u0338',
    'nGg;': '\u22d9\u0338',
    'ngsim;': '\u2275',
    'nGt;': '\u226b\u20d2',
    'ngt;': '\u226f',
    'ngtr;': '\u226f',
    'nGtv;': '\u226b\u0338',
    'nhArr;': '\u21ce',
    'nharr;': '\u21ae',
    'nhpar;': '\u2af2',
    'ni;': '\u220b',
    'nis;': '\u22fc',
    'nisd;': '\u22fa',
    'niv;': '\u220b',
    'NJcy;': '\u040a',
    'njcy;': '\u045a',
    'nlArr;': '\u21cd',
    'nlarr;': '\u219a',
    'nldr;': '\u2025',
    'nlE;': '\u2266\u0338',
    'nle;': '\u2270',
    'nLeftarrow;': '\u21cd',
    'nleftarrow;': '\u219a',
    'nLeftrightarrow;': '\u21ce',
    'nleftrightarrow;': '\u21ae',
    'nleq;': '\u2270',
    'nleqq;': '\u2266\u0338',
    'nleqslant;': '\u2a7d\u0338',
    'nles;': '\u2a7d\u0338',
    'nless;': '\u226e',
    'nLl;': '\u22d8\u0338',
    'nlsim;': '\u2274',
    'nLt;': '\u226a\u20d2',
    'nlt;': '\u226e',
    'nltri;': '\u22ea',
    'nltrie;': '\u22ec',
    'nLtv;': '\u226a\u0338',
    'nmid;': '\u2224',
    'NoBreak;': '\u2060',
    'NonBreakingSpace;': '\xa0',
    'Nopf;': '\u2115',
    'nopf;': '\u{1d55f}',
    'Not;': '\u2aec',
    'not;': '\xac',
    not: '\xac',
    'NotCongruent;': '\u2262',
    'NotCupCap;': '\u226d',
    'NotDoubleVerticalBar;': '\u2226',
    'NotElement;': '\u2209',
    'NotEqual;': '\u2260',
    'NotEqualTilde;': '\u2242\u0338',
    'NotExists;': '\u2204',
    'NotGreater;': '\u226f',
    'NotGreaterEqual;': '\u2271',
    'NotGreaterFullEqual;': '\u2267\u0338',
    'NotGreaterGreater;': '\u226b\u0338',
    'NotGreaterLess;': '\u2279',
    'NotGreaterSlantEqual;': '\u2a7e\u0338',
    'NotGreaterTilde;': '\u2275',
    'NotHumpDownHump;': '\u224e\u0338',
    'NotHumpEqual;': '\u224f\u0338',
    'notin;': '\u2209',
    'notindot;': '\u22f5\u0338',
    'notinE;': '\u22f9\u0338',
    'notinva;': '\u2209',
    'notinvb;': '\u22f7',
    'notinvc;': '\u22f6',
    'NotLeftTriangle;': '\u22ea',
    'NotLeftTriangleBar;': '\u29cf\u0338',
    'NotLeftTriangleEqual;': '\u22ec',
    'NotLess;': '\u226e',
    'NotLessEqual;': '\u2270',
    'NotLessGreater;': '\u2278',
    'NotLessLess;': '\u226a\u0338',
    'NotLessSlantEqual;': '\u2a7d\u0338',
    'NotLessTilde;': '\u2274',
    'NotNestedGreaterGreater;': '\u2aa2\u0338',
    'NotNestedLessLess;': '\u2aa1\u0338',
    'notni;': '\u220c',
    'notniva;': '\u220c',
    'notnivb;': '\u22fe',
    'notnivc;': '\u22fd',
    'NotPrecedes;': '\u2280',
    'NotPrecedesEqual;': '\u2aaf\u0338',
    'NotPrecedesSlantEqual;': '\u22e0',
    'NotReverseElement;': '\u220c',
    'NotRightTriangle;': '\u22eb',
    'NotRightTriangleBar;': '\u29d0\u0338',
    'NotRightTriangleEqual;': '\u22ed',
    'NotSquareSubset;': '\u228f\u0338',
    'NotSquareSubsetEqual;': '\u22e2',
    'NotSquareSuperset;': '\u2290\u0338',
    'NotSquareSupersetEqual;': '\u22e3',
    'NotSubset;': '\u2282\u20d2',
    'NotSubsetEqual;': '\u2288',
    'NotSucceeds;': '\u2281',
    'NotSucceedsEqual;': '\u2ab0\u0338',
    'NotSucceedsSlantEqual;': '\u22e1',
    'NotSucceedsTilde;': '\u227f\u0338',
    'NotSuperset;': '\u2283\u20d2',
    'NotSupersetEqual;': '\u2289',
    'NotTilde;': '\u2241',
    'NotTildeEqual;': '\u2244',
    'NotTildeFullEqual;': '\u2247',
    'NotTildeTilde;': '\u2249',
    'NotVerticalBar;': '\u2224',
    'npar;': '\u2226',
    'nparallel;': '\u2226',
    'nparsl;': '\u2afd\u20e5',
    'npart;': '\u2202\u0338',
    'npolint;': '\u2a14',
    'npr;': '\u2280',
    'nprcue;': '\u22e0',
    'npre;': '\u2aaf\u0338',
    'nprec;': '\u2280',
    'npreceq;': '\u2aaf\u0338',
    'nrArr;': '\u21cf',
    'nrarr;': '\u219b',
    'nrarrc;': '\u2933\u0338',
    'nrarrw;': '\u219d\u0338',
    'nRightarrow;': '\u21cf',
    'nrightarrow;': '\u219b',
    'nrtri;': '\u22eb',
    'nrtrie;': '\u22ed',
    'nsc;': '\u2281',
    'nsccue;': '\u22e1',
    'nsce;': '\u2ab0\u0338',
    'Nscr;': '\u{1d4a9}',
    'nscr;': '\u{1d4c3}',
    'nshortmid;': '\u2224',
    'nshortparallel;': '\u2226',
    'nsim;': '\u2241',
    'nsime;': '\u2244',
    'nsimeq;': '\u2244',
    'nsmid;': '\u2224',
    'nspar;': '\u2226',
    'nsqsube;': '\u22e2',
    'nsqsupe;': '\u22e3',
    'nsub;': '\u2284',
    'nsubE;': '\u2ac5\u0338',
    'nsube;': '\u2288',
    'nsubset;': '\u2282\u20d2',
    'nsubseteq;': '\u2288',
    'nsubseteqq;': '\u2ac5\u0338',
    'nsucc;': '\u2281',
    'nsucceq;': '\u2ab0\u0338',
    'nsup;': '\u2285',
    'nsupE;': '\u2ac6\u0338',
    'nsupe;': '\u2289',
    'nsupset;': '\u2283\u20d2',
    'nsupseteq;': '\u2289',
    'nsupseteqq;': '\u2ac6\u0338',
    'ntgl;': '\u2279',
    'Ntilde;': '\xd1',
    Ntilde: '\xd1',
    'ntilde;': '\xf1',
    ntilde: '\xf1',
    'ntlg;': '\u2278',
    'ntriangleleft;': '\u22ea',
    'ntrianglelefteq;': '\u22ec',
    'ntriangleright;': '\u22eb',
    'ntrianglerighteq;': '\u22ed',
    'Nu;': '\u039d',
    'nu;': '\u03bd',
    'num;': '#',
    'numero;': '\u2116',
    'numsp;': '\u2007',
    'nvap;': '\u224d\u20d2',
    'nVDash;': '\u22af',
    'nVdash;': '\u22ae',
    'nvDash;': '\u22ad',
    'nvdash;': '\u22ac',
    'nvge;': '\u2265\u20d2',
    'nvgt;': '>\u20d2',
    'nvHarr;': '\u2904',
    'nvinfin;': '\u29de',
    'nvlArr;': '\u2902',
    'nvle;': '\u2264\u20d2',
    'nvlt;': '<\u20d2',
    'nvltrie;': '\u22b4\u20d2',
    'nvrArr;': '\u2903',
    'nvrtrie;': '\u22b5\u20d2',
    'nvsim;': '\u223c\u20d2',
    'nwarhk;': '\u2923',
    'nwArr;': '\u21d6',
    'nwarr;': '\u2196',
    'nwarrow;': '\u2196',
    'nwnear;': '\u2927',
    'Oacute;': '\xd3',
    Oacute: '\xd3',
    'oacute;': '\xf3',
    oacute: '\xf3',
    'oast;': '\u229b',
    'ocir;': '\u229a',
    'Ocirc;': '\xd4',
    Ocirc: '\xd4',
    'ocirc;': '\xf4',
    ocirc: '\xf4',
    'Ocy;': '\u041e',
    'ocy;': '\u043e',
    'odash;': '\u229d',
    'Odblac;': '\u0150',
    'odblac;': '\u0151',
    'odiv;': '\u2a38',
    'odot;': '\u2299',
    'odsold;': '\u29bc',
    'OElig;': '\u0152',
    'oelig;': '\u0153',
    'ofcir;': '\u29bf',
    'Ofr;': '\u{1d512}',
    'ofr;': '\u{1d52c}',
    'ogon;': '\u02db',
    'Ograve;': '\xd2',
    Ograve: '\xd2',
    'ograve;': '\xf2',
    ograve: '\xf2',
    'ogt;': '\u29c1',
    'ohbar;': '\u29b5',
    'ohm;': '\u03a9',
    'oint;': '\u222e',
    'olarr;': '\u21ba',
    'olcir;': '\u29be',
    'olcross;': '\u29bb',
    'oline;': '\u203e',
    'olt;': '\u29c0',
    'Omacr;': '\u014c',
    'omacr;': '\u014d',
    'Omega;': '\u03a9',
    'omega;': '\u03c9',
    'Omicron;': '\u039f',
    'omicron;': '\u03bf',
    'omid;': '\u29b6',
    'ominus;': '\u2296',
    'Oopf;': '\u{1d546}',
    'oopf;': '\u{1d560}',
    'opar;': '\u29b7',
    'OpenCurlyDoubleQuote;': '\u201c',
    'OpenCurlyQuote;': '\u2018',
    'operp;': '\u29b9',
    'oplus;': '\u2295',
    'Or;': '\u2a54',
    'or;': '\u2228',
    'orarr;': '\u21bb',
    'ord;': '\u2a5d',
    'order;': '\u2134',
    'orderof;': '\u2134',
    'ordf;': '\xaa',
    ordf: '\xaa',
    'ordm;': '\xba',
    ordm: '\xba',
    'origof;': '\u22b6',
    'oror;': '\u2a56',
    'orslope;': '\u2a57',
    'orv;': '\u2a5b',
    'oS;': '\u24c8',
    'Oscr;': '\u{1d4aa}',
    'oscr;': '\u2134',
    'Oslash;': '\xd8',
    Oslash: '\xd8',
    'oslash;': '\xf8',
    oslash: '\xf8',
    'osol;': '\u2298',
    'Otilde;': '\xd5',
    Otilde: '\xd5',
    'otilde;': '\xf5',
    otilde: '\xf5',
    'Otimes;': '\u2a37',
    'otimes;': '\u2297',
    'otimesas;': '\u2a36',
    'Ouml;': '\xd6',
    Ouml: '\xd6',
    'ouml;': '\xf6',
    ouml: '\xf6',
    'ovbar;': '\u233d',
    'OverBar;': '\u203e',
    'OverBrace;': '\u23de',
    'OverBracket;': '\u23b4',
    'OverParenthesis;': '\u23dc',
    'par;': '\u2225',
    'para;': '\xb6',
    para: '\xb6',
    'parallel;': '\u2225',
    'parsim;': '\u2af3',
    'parsl;': '\u2afd',
    'part;': '\u2202',
    'PartialD;': '\u2202',
    'Pcy;': '\u041f',
    'pcy;': '\u043f',
    'percnt;': '%',
    'period;': '.',
    'permil;': '\u2030',
    'perp;': '\u22a5',
    'pertenk;': '\u2031',
    'Pfr;': '\u{1d513}',
    'pfr;': '\u{1d52d}',
    'Phi;': '\u03a6',
    'phi;': '\u03c6',
    'phiv;': '\u03d5',
    'phmmat;': '\u2133',
    'phone;': '\u260e',
    'Pi;': '\u03a0',
    'pi;': '\u03c0',
    'pitchfork;': '\u22d4',
    'piv;': '\u03d6',
    'planck;': '\u210f',
    'planckh;': '\u210e',
    'plankv;': '\u210f',
    'plus;': '+',
    'plusacir;': '\u2a23',
    'plusb;': '\u229e',
    'pluscir;': '\u2a22',
    'plusdo;': '\u2214',
    'plusdu;': '\u2a25',
    'pluse;': '\u2a72',
    'PlusMinus;': '\xb1',
    'plusmn;': '\xb1',
    plusmn: '\xb1',
    'plussim;': '\u2a26',
    'plustwo;': '\u2a27',
    'pm;': '\xb1',
    'Poincareplane;': '\u210c',
    'pointint;': '\u2a15',
    'Popf;': '\u2119',
    'popf;': '\u{1d561}',
    'pound;': '\xa3',
    pound: '\xa3',
    'Pr;': '\u2abb',
    'pr;': '\u227a',
    'prap;': '\u2ab7',
    'prcue;': '\u227c',
    'prE;': '\u2ab3',
    'pre;': '\u2aaf',
    'prec;': '\u227a',
    'precapprox;': '\u2ab7',
    'preccurlyeq;': '\u227c',
    'Precedes;': '\u227a',
    'PrecedesEqual;': '\u2aaf',
    'PrecedesSlantEqual;': '\u227c',
    'PrecedesTilde;': '\u227e',
    'preceq;': '\u2aaf',
    'precnapprox;': '\u2ab9',
    'precneqq;': '\u2ab5',
    'precnsim;': '\u22e8',
    'precsim;': '\u227e',
    'Prime;': '\u2033',
    'prime;': '\u2032',
    'primes;': '\u2119',
    'prnap;': '\u2ab9',
    'prnE;': '\u2ab5',
    'prnsim;': '\u22e8',
    'prod;': '\u220f',
    'Product;': '\u220f',
    'profalar;': '\u232e',
    'profline;': '\u2312',
    'profsurf;': '\u2313',
    'prop;': '\u221d',
    'Proportion;': '\u2237',
    'Proportional;': '\u221d',
    'propto;': '\u221d',
    'prsim;': '\u227e',
    'prurel;': '\u22b0',
    'Pscr;': '\u{1d4ab}',
    'pscr;': '\u{1d4c5}',
    'Psi;': '\u03a8',
    'psi;': '\u03c8',
    'puncsp;': '\u2008',
    'Qfr;': '\u{1d514}',
    'qfr;': '\u{1d52e}',
    'qint;': '\u2a0c',
    'Qopf;': '\u211a',
    'qopf;': '\u{1d562}',
    'qprime;': '\u2057',
    'Qscr;': '\u{1d4ac}',
    'qscr;': '\u{1d4c6}',
    'quaternions;': '\u210d',
    'quatint;': '\u2a16',
    'quest;': '?',
    'questeq;': '\u225f',
    'QUOT;': '"',
    QUOT: '"',
    'quot;': '"',
    quot: '"',
    'rAarr;': '\u21db',
    'race;': '\u223d\u0331',
    'Racute;': '\u0154',
    'racute;': '\u0155',
    'radic;': '\u221a',
    'raemptyv;': '\u29b3',
    'Rang;': '\u27eb',
    'rang;': '\u27e9',
    'rangd;': '\u2992',
    'range;': '\u29a5',
    'rangle;': '\u27e9',
    'raquo;': '\xbb',
    raquo: '\xbb',
    'Rarr;': '\u21a0',
    'rArr;': '\u21d2',
    'rarr;': '\u2192',
    'rarrap;': '\u2975',
    'rarrb;': '\u21e5',
    'rarrbfs;': '\u2920',
    'rarrc;': '\u2933',
    'rarrfs;': '\u291e',
    'rarrhk;': '\u21aa',
    'rarrlp;': '\u21ac',
    'rarrpl;': '\u2945',
    'rarrsim;': '\u2974',
    'Rarrtl;': '\u2916',
    'rarrtl;': '\u21a3',
    'rarrw;': '\u219d',
    'rAtail;': '\u291c',
    'ratail;': '\u291a',
    'ratio;': '\u2236',
    'rationals;': '\u211a',
    'RBarr;': '\u2910',
    'rBarr;': '\u290f',
    'rbarr;': '\u290d',
    'rbbrk;': '\u2773',
    'rbrace;': '}',
    'rbrack;': ']',
    'rbrke;': '\u298c',
    'rbrksld;': '\u298e',
    'rbrkslu;': '\u2990',
    'Rcaron;': '\u0158',
    'rcaron;': '\u0159',
    'Rcedil;': '\u0156',
    'rcedil;': '\u0157',
    'rceil;': '\u2309',
    'rcub;': '}',
    'Rcy;': '\u0420',
    'rcy;': '\u0440',
    'rdca;': '\u2937',
    'rdldhar;': '\u2969',
    'rdquo;': '\u201d',
    'rdquor;': '\u201d',
    'rdsh;': '\u21b3',
    'Re;': '\u211c',
    'real;': '\u211c',
    'realine;': '\u211b',
    'realpart;': '\u211c',
    'reals;': '\u211d',
    'rect;': '\u25ad',
    'REG;': '\xae',
    REG: '\xae',
    'reg;': '\xae',
    reg: '\xae',
    'ReverseElement;': '\u220b',
    'ReverseEquilibrium;': '\u21cb',
    'ReverseUpEquilibrium;': '\u296f',
    'rfisht;': '\u297d',
    'rfloor;': '\u230b',
    'Rfr;': '\u211c',
    'rfr;': '\u{1d52f}',
    'rHar;': '\u2964',
    'rhard;': '\u21c1',
    'rharu;': '\u21c0',
    'rharul;': '\u296c',
    'Rho;': '\u03a1',
    'rho;': '\u03c1',
    'rhov;': '\u03f1',
    'RightAngleBracket;': '\u27e9',
    'RightArrow;': '\u2192',
    'Rightarrow;': '\u21d2',
    'rightarrow;': '\u2192',
    'RightArrowBar;': '\u21e5',
    'RightArrowLeftArrow;': '\u21c4',
    'rightarrowtail;': '\u21a3',
    'RightCeiling;': '\u2309',
    'RightDoubleBracket;': '\u27e7',
    'RightDownTeeVector;': '\u295d',
    'RightDownVector;': '\u21c2',
    'RightDownVectorBar;': '\u2955',
    'RightFloor;': '\u230b',
    'rightharpoondown;': '\u21c1',
    'rightharpoonup;': '\u21c0',
    'rightleftarrows;': '\u21c4',
    'rightleftharpoons;': '\u21cc',
    'rightrightarrows;': '\u21c9',
    'rightsquigarrow;': '\u219d',
    'RightTee;': '\u22a2',
    'RightTeeArrow;': '\u21a6',
    'RightTeeVector;': '\u295b',
    'rightthreetimes;': '\u22cc',
    'RightTriangle;': '\u22b3',
    'RightTriangleBar;': '\u29d0',
    'RightTriangleEqual;': '\u22b5',
    'RightUpDownVector;': '\u294f',
    'RightUpTeeVector;': '\u295c',
    'RightUpVector;': '\u21be',
    'RightUpVectorBar;': '\u2954',
    'RightVector;': '\u21c0',
    'RightVectorBar;': '\u2953',
    'ring;': '\u02da',
    'risingdotseq;': '\u2253',
    'rlarr;': '\u21c4',
    'rlhar;': '\u21cc',
    'rlm;': '\u200f',
    'rmoust;': '\u23b1',
    'rmoustache;': '\u23b1',
    'rnmid;': '\u2aee',
    'roang;': '\u27ed',
    'roarr;': '\u21fe',
    'robrk;': '\u27e7',
    'ropar;': '\u2986',
    'Ropf;': '\u211d',
    'ropf;': '\u{1d563}',
    'roplus;': '\u2a2e',
    'rotimes;': '\u2a35',
    'RoundImplies;': '\u2970',
    'rpar;': ')',
    'rpargt;': '\u2994',
    'rppolint;': '\u2a12',
    'rrarr;': '\u21c9',
    'Rrightarrow;': '\u21db',
    'rsaquo;': '\u203a',
    'Rscr;': '\u211b',
    'rscr;': '\u{1d4c7}',
    'Rsh;': '\u21b1',
    'rsh;': '\u21b1',
    'rsqb;': ']',
    'rsquo;': '\u2019',
    'rsquor;': '\u2019',
    'rthree;': '\u22cc',
    'rtimes;': '\u22ca',
    'rtri;': '\u25b9',
    'rtrie;': '\u22b5',
    'rtrif;': '\u25b8',
    'rtriltri;': '\u29ce',
    'RuleDelayed;': '\u29f4',
    'ruluhar;': '\u2968',
    'rx;': '\u211e',
    'Sacute;': '\u015a',
    'sacute;': '\u015b',
    'sbquo;': '\u201a',
    'Sc;': '\u2abc',
    'sc;': '\u227b',
    'scap;': '\u2ab8',
    'Scaron;': '\u0160',
    'scaron;': '\u0161',
    'sccue;': '\u227d',
    'scE;': '\u2ab4',
    'sce;': '\u2ab0',
    'Scedil;': '\u015e',
    'scedil;': '\u015f',
    'Scirc;': '\u015c',
    'scirc;': '\u015d',
    'scnap;': '\u2aba',
    'scnE;': '\u2ab6',
    'scnsim;': '\u22e9',
    'scpolint;': '\u2a13',
    'scsim;': '\u227f',
    'Scy;': '\u0421',
    'scy;': '\u0441',
    'sdot;': '\u22c5',
    'sdotb;': '\u22a1',
    'sdote;': '\u2a66',
    'searhk;': '\u2925',
    'seArr;': '\u21d8',
    'searr;': '\u2198',
    'searrow;': '\u2198',
    'sect;': '\xa7',
    sect: '\xa7',
    'semi;': ';',
    'seswar;': '\u2929',
    'setminus;': '\u2216',
    'setmn;': '\u2216',
    'sext;': '\u2736',
    'Sfr;': '\u{1d516}',
    'sfr;': '\u{1d530}',
    'sfrown;': '\u2322',
    'sharp;': '\u266f',
    'SHCHcy;': '\u0429',
    'shchcy;': '\u0449',
    'SHcy;': '\u0428',
    'shcy;': '\u0448',
    'ShortDownArrow;': '\u2193',
    'ShortLeftArrow;': '\u2190',
    'shortmid;': '\u2223',
    'shortparallel;': '\u2225',
    'ShortRightArrow;': '\u2192',
    'ShortUpArrow;': '\u2191',
    'shy;': '\xad',
    shy: '\xad',
    'Sigma;': '\u03a3',
    'sigma;': '\u03c3',
    'sigmaf;': '\u03c2',
    'sigmav;': '\u03c2',
    'sim;': '\u223c',
    'simdot;': '\u2a6a',
    'sime;': '\u2243',
    'simeq;': '\u2243',
    'simg;': '\u2a9e',
    'simgE;': '\u2aa0',
    'siml;': '\u2a9d',
    'simlE;': '\u2a9f',
    'simne;': '\u2246',
    'simplus;': '\u2a24',
    'simrarr;': '\u2972',
    'slarr;': '\u2190',
    'SmallCircle;': '\u2218',
    'smallsetminus;': '\u2216',
    'smashp;': '\u2a33',
    'smeparsl;': '\u29e4',
    'smid;': '\u2223',
    'smile;': '\u2323',
    'smt;': '\u2aaa',
    'smte;': '\u2aac',
    'smtes;': '\u2aac\ufe00',
    'SOFTcy;': '\u042c',
    'softcy;': '\u044c',
    'sol;': '/',
    'solb;': '\u29c4',
    'solbar;': '\u233f',
    'Sopf;': '\u{1d54a}',
    'sopf;': '\u{1d564}',
    'spades;': '\u2660',
    'spadesuit;': '\u2660',
    'spar;': '\u2225',
    'sqcap;': '\u2293',
    'sqcaps;': '\u2293\ufe00',
    'sqcup;': '\u2294',
    'sqcups;': '\u2294\ufe00',
    'Sqrt;': '\u221a',
    'sqsub;': '\u228f',
    'sqsube;': '\u2291',
    'sqsubset;': '\u228f',
    'sqsubseteq;': '\u2291',
    'sqsup;': '\u2290',
    'sqsupe;': '\u2292',
    'sqsupset;': '\u2290',
    'sqsupseteq;': '\u2292',
    'squ;': '\u25a1',
    'Square;': '\u25a1',
    'square;': '\u25a1',
    'SquareIntersection;': '\u2293',
    'SquareSubset;': '\u228f',
    'SquareSubsetEqual;': '\u2291',
    'SquareSuperset;': '\u2290',
    'SquareSupersetEqual;': '\u2292',
    'SquareUnion;': '\u2294',
    'squarf;': '\u25aa',
    'squf;': '\u25aa',
    'srarr;': '\u2192',
    'Sscr;': '\u{1d4ae}',
    'sscr;': '\u{1d4c8}',
    'ssetmn;': '\u2216',
    'ssmile;': '\u2323',
    'sstarf;': '\u22c6',
    'Star;': '\u22c6',
    'star;': '\u2606',
    'starf;': '\u2605',
    'straightepsilon;': '\u03f5',
    'straightphi;': '\u03d5',
    'strns;': '\xaf',
    'Sub;': '\u22d0',
    'sub;': '\u2282',
    'subdot;': '\u2abd',
    'subE;': '\u2ac5',
    'sube;': '\u2286',
    'subedot;': '\u2ac3',
    'submult;': '\u2ac1',
    'subnE;': '\u2acb',
    'subne;': '\u228a',
    'subplus;': '\u2abf',
    'subrarr;': '\u2979',
    'Subset;': '\u22d0',
    'subset;': '\u2282',
    'subseteq;': '\u2286',
    'subseteqq;': '\u2ac5',
    'SubsetEqual;': '\u2286',
    'subsetneq;': '\u228a',
    'subsetneqq;': '\u2acb',
    'subsim;': '\u2ac7',
    'subsub;': '\u2ad5',
    'subsup;': '\u2ad3',
    'succ;': '\u227b',
    'succapprox;': '\u2ab8',
    'succcurlyeq;': '\u227d',
    'Succeeds;': '\u227b',
    'SucceedsEqual;': '\u2ab0',
    'SucceedsSlantEqual;': '\u227d',
    'SucceedsTilde;': '\u227f',
    'succeq;': '\u2ab0',
    'succnapprox;': '\u2aba',
    'succneqq;': '\u2ab6',
    'succnsim;': '\u22e9',
    'succsim;': '\u227f',
    'SuchThat;': '\u220b',
    'Sum;': '\u2211',
    'sum;': '\u2211',
    'sung;': '\u266a',
    'Sup;': '\u22d1',
    'sup;': '\u2283',
    'sup1;': '\xb9',
    sup1: '\xb9',
    'sup2;': '\xb2',
    sup2: '\xb2',
    'sup3;': '\xb3',
    sup3: '\xb3',
    'supdot;': '\u2abe',
    'supdsub;': '\u2ad8',
    'supE;': '\u2ac6',
    'supe;': '\u2287',
    'supedot;': '\u2ac4',
    'Superset;': '\u2283',
    'SupersetEqual;': '\u2287',
    'suphsol;': '\u27c9',
    'suphsub;': '\u2ad7',
    'suplarr;': '\u297b',
    'supmult;': '\u2ac2',
    'supnE;': '\u2acc',
    'supne;': '\u228b',
    'supplus;': '\u2ac0',
    'Supset;': '\u22d1',
    'supset;': '\u2283',
    'supseteq;': '\u2287',
    'supseteqq;': '\u2ac6',
    'supsetneq;': '\u228b',
    'supsetneqq;': '\u2acc',
    'supsim;': '\u2ac8',
    'supsub;': '\u2ad4',
    'supsup;': '\u2ad6',
    'swarhk;': '\u2926',
    'swArr;': '\u21d9',
    'swarr;': '\u2199',
    'swarrow;': '\u2199',
    'swnwar;': '\u292a',
    'szlig;': '\xdf',
    szlig: '\xdf',
    'Tab;': '\t',
    'target;': '\u2316',
    'Tau;': '\u03a4',
    'tau;': '\u03c4',
    'tbrk;': '\u23b4',
    'Tcaron;': '\u0164',
    'tcaron;': '\u0165',
    'Tcedil;': '\u0162',
    'tcedil;': '\u0163',
    'Tcy;': '\u0422',
    'tcy;': '\u0442',
    'tdot;': '\u20db',
    'telrec;': '\u2315',
    'Tfr;': '\u{1d517}',
    'tfr;': '\u{1d531}',
    'there4;': '\u2234',
    'Therefore;': '\u2234',
    'therefore;': '\u2234',
    'Theta;': '\u0398',
    'theta;': '\u03b8',
    'thetasym;': '\u03d1',
    'thetav;': '\u03d1',
    'thickapprox;': '\u2248',
    'thicksim;': '\u223c',
    'ThickSpace;': '\u205f\u200a',
    'thinsp;': '\u2009',
    'ThinSpace;': '\u2009',
    'thkap;': '\u2248',
    'thksim;': '\u223c',
    'THORN;': '\xde',
    THORN: '\xde',
    'thorn;': '\xfe',
    thorn: '\xfe',
    'Tilde;': '\u223c',
    'tilde;': '\u02dc',
    'TildeEqual;': '\u2243',
    'TildeFullEqual;': '\u2245',
    'TildeTilde;': '\u2248',
    'times;': '\xd7',
    times: '\xd7',
    'timesb;': '\u22a0',
    'timesbar;': '\u2a31',
    'timesd;': '\u2a30',
    'tint;': '\u222d',
    'toea;': '\u2928',
    'top;': '\u22a4',
    'topbot;': '\u2336',
    'topcir;': '\u2af1',
    'Topf;': '\u{1d54b}',
    'topf;': '\u{1d565}',
    'topfork;': '\u2ada',
    'tosa;': '\u2929',
    'tprime;': '\u2034',
    'TRADE;': '\u2122',
    'trade;': '\u2122',
    'triangle;': '\u25b5',
    'triangledown;': '\u25bf',
    'triangleleft;': '\u25c3',
    'trianglelefteq;': '\u22b4',
    'triangleq;': '\u225c',
    'triangleright;': '\u25b9',
    'trianglerighteq;': '\u22b5',
    'tridot;': '\u25ec',
    'trie;': '\u225c',
    'triminus;': '\u2a3a',
    'TripleDot;': '\u20db',
    'triplus;': '\u2a39',
    'trisb;': '\u29cd',
    'tritime;': '\u2a3b',
    'trpezium;': '\u23e2',
    'Tscr;': '\u{1d4af}',
    'tscr;': '\u{1d4c9}',
    'TScy;': '\u0426',
    'tscy;': '\u0446',
    'TSHcy;': '\u040b',
    'tshcy;': '\u045b',
    'Tstrok;': '\u0166',
    'tstrok;': '\u0167',
    'twixt;': '\u226c',
    'twoheadleftarrow;': '\u219e',
    'twoheadrightarrow;': '\u21a0',
    'Uacute;': '\xda',
    Uacute: '\xda',
    'uacute;': '\xfa',
    uacute: '\xfa',
    'Uarr;': '\u219f',
    'uArr;': '\u21d1',
    'uarr;': '\u2191',
    'Uarrocir;': '\u2949',
    'Ubrcy;': '\u040e',
    'ubrcy;': '\u045e',
    'Ubreve;': '\u016c',
    'ubreve;': '\u016d',
    'Ucirc;': '\xdb',
    Ucirc: '\xdb',
    'ucirc;': '\xfb',
    ucirc: '\xfb',
    'Ucy;': '\u0423',
    'ucy;': '\u0443',
    'udarr;': '\u21c5',
    'Udblac;': '\u0170',
    'udblac;': '\u0171',
    'udhar;': '\u296e',
    'ufisht;': '\u297e',
    'Ufr;': '\u{1d518}',
    'ufr;': '\u{1d532}',
    'Ugrave;': '\xd9',
    Ugrave: '\xd9',
    'ugrave;': '\xf9',
    ugrave: '\xf9',
    'uHar;': '\u2963',
    'uharl;': '\u21bf',
    'uharr;': '\u21be',
    'uhblk;': '\u2580',
    'ulcorn;': '\u231c',
    'ulcorner;': '\u231c',
    'ulcrop;': '\u230f',
    'ultri;': '\u25f8',
    'Umacr;': '\u016a',
    'umacr;': '\u016b',
    'uml;': '\xa8',
    uml: '\xa8',
    'UnderBar;': '_',
    'UnderBrace;': '\u23df',
    'UnderBracket;': '\u23b5',
    'UnderParenthesis;': '\u23dd',
    'Union;': '\u22c3',
    'UnionPlus;': '\u228e',
    'Uogon;': '\u0172',
    'uogon;': '\u0173',
    'Uopf;': '\u{1d54c}',
    'uopf;': '\u{1d566}',
    'UpArrow;': '\u2191',
    'Uparrow;': '\u21d1',
    'uparrow;': '\u2191',
    'UpArrowBar;': '\u2912',
    'UpArrowDownArrow;': '\u21c5',
    'UpDownArrow;': '\u2195',
    'Updownarrow;': '\u21d5',
    'updownarrow;': '\u2195',
    'UpEquilibrium;': '\u296e',
    'upharpoonleft;': '\u21bf',
    'upharpoonright;': '\u21be',
    'uplus;': '\u228e',
    'UpperLeftArrow;': '\u2196',
    'UpperRightArrow;': '\u2197',
    'Upsi;': '\u03d2',
    'upsi;': '\u03c5',
    'upsih;': '\u03d2',
    'Upsilon;': '\u03a5',
    'upsilon;': '\u03c5',
    'UpTee;': '\u22a5',
    'UpTeeArrow;': '\u21a5',
    'upuparrows;': '\u21c8',
    'urcorn;': '\u231d',
    'urcorner;': '\u231d',
    'urcrop;': '\u230e',
    'Uring;': '\u016e',
    'uring;': '\u016f',
    'urtri;': '\u25f9',
    'Uscr;': '\u{1d4b0}',
    'uscr;': '\u{1d4ca}',
    'utdot;': '\u22f0',
    'Utilde;': '\u0168',
    'utilde;': '\u0169',
    'utri;': '\u25b5',
    'utrif;': '\u25b4',
    'uuarr;': '\u21c8',
    'Uuml;': '\xdc',
    Uuml: '\xdc',
    'uuml;': '\xfc',
    uuml: '\xfc',
    'uwangle;': '\u29a7',
    'vangrt;': '\u299c',
    'varepsilon;': '\u03f5',
    'varkappa;': '\u03f0',
    'varnothing;': '\u2205',
    'varphi;': '\u03d5',
    'varpi;': '\u03d6',
    'varpropto;': '\u221d',
    'vArr;': '\u21d5',
    'varr;': '\u2195',
    'varrho;': '\u03f1',
    'varsigma;': '\u03c2',
    'varsubsetneq;': '\u228a\ufe00',
    'varsubsetneqq;': '\u2acb\ufe00',
    'varsupsetneq;': '\u228b\ufe00',
    'varsupsetneqq;': '\u2acc\ufe00',
    'vartheta;': '\u03d1',
    'vartriangleleft;': '\u22b2',
    'vartriangleright;': '\u22b3',
    'Vbar;': '\u2aeb',
    'vBar;': '\u2ae8',
    'vBarv;': '\u2ae9',
    'Vcy;': '\u0412',
    'vcy;': '\u0432',
    'VDash;': '\u22ab',
    'Vdash;': '\u22a9',
    'vDash;': '\u22a8',
    'vdash;': '\u22a2',
    'Vdashl;': '\u2ae6',
    'Vee;': '\u22c1',
    'vee;': '\u2228',
    'veebar;': '\u22bb',
    'veeeq;': '\u225a',
    'vellip;': '\u22ee',
    'Verbar;': '\u2016',
    'verbar;': '|',
    'Vert;': '\u2016',
    'vert;': '|',
    'VerticalBar;': '\u2223',
    'VerticalLine;': '|',
    'VerticalSeparator;': '\u2758',
    'VerticalTilde;': '\u2240',
    'VeryThinSpace;': '\u200a',
    'Vfr;': '\u{1d519}',
    'vfr;': '\u{1d533}',
    'vltri;': '\u22b2',
    'vnsub;': '\u2282\u20d2',
    'vnsup;': '\u2283\u20d2',
    'Vopf;': '\u{1d54d}',
    'vopf;': '\u{1d567}',
    'vprop;': '\u221d',
    'vrtri;': '\u22b3',
    'Vscr;': '\u{1d4b1}',
    'vscr;': '\u{1d4cb}',
    'vsubnE;': '\u2acb\ufe00',
    'vsubne;': '\u228a\ufe00',
    'vsupnE;': '\u2acc\ufe00',
    'vsupne;': '\u228b\ufe00',
    'Vvdash;': '\u22aa',
    'vzigzag;': '\u299a',
    'Wcirc;': '\u0174',
    'wcirc;': '\u0175',
    'wedbar;': '\u2a5f',
    'Wedge;': '\u22c0',
    'wedge;': '\u2227',
    'wedgeq;': '\u2259',
    'weierp;': '\u2118',
    'Wfr;': '\u{1d51a}',
    'wfr;': '\u{1d534}',
    'Wopf;': '\u{1d54e}',
    'wopf;': '\u{1d568}',
    'wp;': '\u2118',
    'wr;': '\u2240',
    'wreath;': '\u2240',
    'Wscr;': '\u{1d4b2}',
    'wscr;': '\u{1d4cc}',
    'xcap;': '\u22c2',
    'xcirc;': '\u25ef',
    'xcup;': '\u22c3',
    'xdtri;': '\u25bd',
    'Xfr;': '\u{1d51b}',
    'xfr;': '\u{1d535}',
    'xhArr;': '\u27fa',
    'xharr;': '\u27f7',
    'Xi;': '\u039e',
    'xi;': '\u03be',
    'xlArr;': '\u27f8',
    'xlarr;': '\u27f5',
    'xmap;': '\u27fc',
    'xnis;': '\u22fb',
    'xodot;': '\u2a00',
    'Xopf;': '\u{1d54f}',
    'xopf;': '\u{1d569}',
    'xoplus;': '\u2a01',
    'xotime;': '\u2a02',
    'xrArr;': '\u27f9',
    'xrarr;': '\u27f6',
    'Xscr;': '\u{1d4b3}',
    'xscr;': '\u{1d4cd}',
    'xsqcup;': '\u2a06',
    'xuplus;': '\u2a04',
    'xutri;': '\u25b3',
    'xvee;': '\u22c1',
    'xwedge;': '\u22c0',
    'Yacute;': '\xdd',
    Yacute: '\xdd',
    'yacute;': '\xfd',
    yacute: '\xfd',
    'YAcy;': '\u042f',
    'yacy;': '\u044f',
    'Ycirc;': '\u0176',
    'ycirc;': '\u0177',
    'Ycy;': '\u042b',
    'ycy;': '\u044b',
    'yen;': '\xa5',
    yen: '\xa5',
    'Yfr;': '\u{1d51c}',
    'yfr;': '\u{1d536}',
    'YIcy;': '\u0407',
    'yicy;': '\u0457',
    'Yopf;': '\u{1d550}',
    'yopf;': '\u{1d56a}',
    'Yscr;': '\u{1d4b4}',
    'yscr;': '\u{1d4ce}',
    'YUcy;': '\u042e',
    'yucy;': '\u044e',
    'Yuml;': '\u0178',
    'yuml;': '\xff',
    yuml: '\xff',
    'Zacute;': '\u0179',
    'zacute;': '\u017a',
    'Zcaron;': '\u017d',
    'zcaron;': '\u017e',
    'Zcy;': '\u0417',
    'zcy;': '\u0437',
    'Zdot;': '\u017b',
    'zdot;': '\u017c',
    'zeetrf;': '\u2128',
    'ZeroWidthSpace;': '\u200b',
    'Zeta;': '\u0396',
    'zeta;': '\u03b6',
    'Zfr;': '\u2128',
    'zfr;': '\u{1d537}',
    'ZHcy;': '\u0416',
    'zhcy;': '\u0436',
    'zigrarr;': '\u21dd',
    'Zopf;': '\u2124',
    'zopf;': '\u{1d56b}',
    'Zscr;': '\u{1d4b5}',
    'zscr;': '\u{1d4cf}',
    'zwj;': '\u200d',
    'zwnj;': '\u200c',
  };
  function He(e, t) {
    if (e.length < t.length) return !1;
    for (var n = 0; n < t.length; n++) if (e[n] !== t[n]) return !1;
    return !0;
  }
  function Ll(e, t) {
    var n = e.length - t.length;
    return n > 0 ? e.lastIndexOf(t) === n : 0 === n && e === t;
  }
  function Pi(e, t) {
    for (var n = ''; t > 0; ) 1 == (1 & t) && (n += e), (e += e), (t >>>= 1);
    return n;
  }
  var El = 'a'.charCodeAt(0),
    Ml = 'z'.charCodeAt(0),
    Dl = 'A'.charCodeAt(0),
    Rl = 'Z'.charCodeAt(0),
    Nl = '0'.charCodeAt(0),
    Il = '9'.charCodeAt(0);
  function wt(e, t) {
    var n = e.charCodeAt(t);
    return (El <= n && n <= Ml) || (Dl <= n && n <= Rl) || (Nl <= n && n <= Il);
  }
  function Jt(e) {
    return typeof e < 'u';
  }
  var qi = (function () {
    function e(t, n) {
      var r = this;
      (this.id = t),
        (this._tags = []),
        (this._tagMap = {}),
        (this._valueSetMap = {}),
        (this._tags = n.tags || []),
        (this._globalAttributes = n.globalAttributes || []),
        this._tags.forEach(function (i) {
          r._tagMap[i.name.toLowerCase()] = i;
        }),
        n.valueSets &&
          n.valueSets.forEach(function (i) {
            r._valueSetMap[i.name] = i.values;
          });
    }
    return (
      (e.prototype.isApplicable = function () {
        return !0;
      }),
      (e.prototype.getId = function () {
        return this.id;
      }),
      (e.prototype.provideTags = function () {
        return this._tags;
      }),
      (e.prototype.provideAttributes = function (t) {
        var n = [],
          r = function (a) {
            n.push(a);
          },
          i = this._tagMap[t.toLowerCase()];
        return (
          i && i.attributes.forEach(r), this._globalAttributes.forEach(r), n
        );
      }),
      (e.prototype.provideValues = function (t, n) {
        var r = this,
          i = [];
        n = n.toLowerCase();
        var a = function (c) {
            c.forEach(function (l) {
              l.name.toLowerCase() === n &&
                (l.values &&
                  l.values.forEach(function (u) {
                    i.push(u);
                  }),
                l.valueSet &&
                  r._valueSetMap[l.valueSet] &&
                  r._valueSetMap[l.valueSet].forEach(function (u) {
                    i.push(u);
                  }));
            });
          },
          o = this._tagMap[t.toLowerCase()];
        return o && a(o.attributes), a(this._globalAttributes), i;
      }),
      e
    );
  })();
  function qe(e, t, n) {
    void 0 === t && (t = {});
    var r = { kind: n ? 'markdown' : 'plaintext', value: '' };
    if (e.description && !1 !== t.documentation) {
      var i = (function Ul(e) {
        if (e)
          return 'string' == typeof e
            ? { kind: 'markdown', value: e }
            : { kind: 'markdown', value: e.value };
      })(e.description);
      i && (r.value += i.value);
    }
    if (
      (e.references &&
        e.references.length > 0 &&
        !1 !== t.references &&
        (r.value.length && (r.value += '\n\n'),
        (r.value += n
          ? e.references
              .map(function (a) {
                return '['.concat(a.name, '](').concat(a.url, ')');
              })
              .join(' | ')
          : e.references
              .map(function (a) {
                return ''.concat(a.name, ': ').concat(a.url);
              })
              .join('\n'))),
      '' !== r.value)
    )
      return r;
  }
  var Oi = function (e, t, n, r) {
      return new (n || (n = Promise))(function (a, o) {
        function c(h) {
          try {
            u(r.next(h));
          } catch (d) {
            o(d);
          }
        }
        function l(h) {
          try {
            u(r.throw(h));
          } catch (d) {
            o(d);
          }
        }
        function u(h) {
          h.done
            ? a(h.value)
            : (function i(a) {
                return a instanceof n
                  ? a
                  : new n(function (o) {
                      o(a);
                    });
              })(h.value).then(c, l);
        }
        u((r = r.apply(e, t || [])).next());
      });
    },
    Vi = function (e, t) {
      var r,
        i,
        a,
        o,
        n = {
          label: 0,
          sent: function () {
            if (1 & a[0]) throw a[1];
            return a[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (o = { next: c(0), throw: c(1), return: c(2) }),
        'function' == typeof Symbol &&
          (o[Symbol.iterator] = function () {
            return this;
          }),
        o
      );
      function c(u) {
        return function (h) {
          return (function l(u) {
            if (r) throw new TypeError('Generator is already executing.');
            for (; n; )
              try {
                if (
                  ((r = 1),
                  i &&
                    (a =
                      2 & u[0]
                        ? i.return
                        : u[0]
                        ? i.throw || ((a = i.return) && a.call(i), 0)
                        : i.next) &&
                    !(a = a.call(i, u[1])).done)
                )
                  return a;
                switch (((i = 0), a && (u = [2 & u[0], a.value]), u[0])) {
                  case 0:
                  case 1:
                    a = u;
                    break;
                  case 4:
                    return n.label++, { value: u[1], done: !1 };
                  case 5:
                    n.label++, (i = u[1]), (u = [0]);
                    continue;
                  case 7:
                    (u = n.ops.pop()), n.trys.pop();
                    continue;
                  default:
                    if (
                      !(a = (a = n.trys).length > 0 && a[a.length - 1]) &&
                      (6 === u[0] || 2 === u[0])
                    ) {
                      n = 0;
                      continue;
                    }
                    if (3 === u[0] && (!a || (u[1] > a[0] && u[1] < a[3]))) {
                      n.label = u[1];
                      break;
                    }
                    if (6 === u[0] && n.label < a[1]) {
                      (n.label = a[1]), (a = u);
                      break;
                    }
                    if (a && n.label < a[2]) {
                      (n.label = a[2]), n.ops.push(u);
                      break;
                    }
                    a[2] && n.ops.pop(), n.trys.pop();
                    continue;
                }
                u = t.call(e, n);
              } catch (h) {
                (u = [6, h]), (i = 0);
              } finally {
                r = a = 0;
              }
            if (5 & u[0]) throw u[1];
            return { value: u[0] ? u[1] : void 0, done: !0 };
          })([u, h]);
        };
      }
    },
    zl = (function () {
      function e(t) {
        (this.readDirectory = t), (this.atributeCompletions = []);
      }
      return (
        (e.prototype.onHtmlAttributeValue = function (t) {
          (function Bl(e, t) {
            if ('src' === t || 'href' === t) return !0;
            var n = Vl[e];
            return (
              !!n && ('string' == typeof n ? n === t : -1 !== n.indexOf(t))
            );
          })(t.tag, t.attribute) && this.atributeCompletions.push(t);
        }),
        (e.prototype.computeCompletions = function (t, n) {
          return Oi(this, void 0, void 0, function () {
            var r, i, a, o, c, l, u, h, d;
            return Vi(this, function (g) {
              switch (g.label) {
                case 0:
                  (r = { items: [], isIncomplete: !1 }),
                    (i = 0),
                    (a = this.atributeCompletions),
                    (g.label = 1);
                case 1:
                  return i < a.length
                    ? ((c = (function Fl(e) {
                        return He(e, "'") || He(e, '"') ? e.slice(1, -1) : e;
                      })(t.getText((o = a[i]).range))),
                      (function Wl(e) {
                        return !(
                          He(e, 'http') ||
                          He(e, 'https') ||
                          He(e, '//')
                        );
                      })(c)
                        ? '.' === c || '..' === c
                          ? ((r.isIncomplete = !0), [3, 4])
                          : [3, 2]
                        : [3, 4])
                    : [3, 5];
                case 2:
                  return (
                    (l = (function Pl(e, t, n) {
                      var r,
                        i = e.lastIndexOf('/');
                      if (-1 === i)
                        r = (function Ol(e, t, n) {
                          var r = _t(e.start, t),
                            i = _t(e.end, n);
                          return Q.create(r, i);
                        })(n, 1, -1);
                      else {
                        var l,
                          a = t.slice(i + 1),
                          o = _t(n.end, -1 - a.length),
                          c = a.indexOf(' ');
                        (l = -1 !== c ? _t(o, c) : _t(n.end, -1)),
                          (r = Q.create(o, l));
                      }
                      return r;
                    })(o.value, c, o.range)),
                    [4, this.providePathSuggestions(o.value, l, t, n)]
                  );
                case 3:
                  for (u = g.sent(), h = 0, d = u; h < d.length; h++)
                    r.items.push(d[h]);
                  g.label = 4;
                case 4:
                  return i++, [3, 1];
                case 5:
                  return [2, r];
              }
            });
          });
        }),
        (e.prototype.providePathSuggestions = function (t, n, r, i) {
          return Oi(this, void 0, void 0, function () {
            var a, o, c, l, u, h, d, f, g;
            return Vi(this, function (b) {
              switch (b.label) {
                case 0:
                  if (
                    ((a = t.substring(0, t.lastIndexOf('/') + 1)),
                    !(o = i.resolveReference(a || '.', r.uri)))
                  )
                    return [3, 4];
                  b.label = 1;
                case 1:
                  return (
                    b.trys.push([1, 3, , 4]),
                    (c = []),
                    [4, this.readDirectory(o)]
                  );
                case 2:
                  for (l = b.sent(), u = 0, h = l; u < h.length; u++)
                    (g = (d = h[u])[1]),
                      (f = d[0]).charCodeAt(0) !== Hl &&
                        c.push(ql(f, g === zi.Directory, n));
                  return [2, c];
                case 3:
                  return b.sent(), [3, 4];
                case 4:
                  return [2, []];
              }
            });
          });
        }),
        e
      );
    })(),
    Hl = '.'.charCodeAt(0);
  function ql(e, t, n) {
    return t
      ? {
          label: (e += '/'),
          kind: fe.Folder,
          textEdit: ee.replace(n, e),
          command: {
            title: 'Suggest',
            command: 'editor.action.triggerSuggest',
          },
        }
      : { label: e, kind: fe.File, textEdit: ee.replace(n, e) };
  }
  function _t(e, t) {
    return ne.create(e.line, e.character + t);
  }
  var Vl = {
      a: 'href',
      area: 'href',
      body: 'background',
      del: 'cite',
      form: 'action',
      frame: ['src', 'longdesc'],
      img: ['src', 'longdesc'],
      ins: 'cite',
      link: 'href',
      object: 'data',
      q: 'cite',
      script: 'src',
      audio: 'src',
      button: 'formaction',
      command: 'icon',
      embed: 'src',
      html: 'manifest',
      input: ['src', 'formaction'],
      source: 'src',
      track: 'src',
      video: ['src', 'poster'],
    },
    $l = Rn(),
    Ql = (function () {
      function e(t, n) {
        (this.lsOptions = t),
          (this.dataManager = n),
          (this.completionParticipants = []);
      }
      return (
        (e.prototype.setCompletionParticipants = function (t) {
          this.completionParticipants = t || [];
        }),
        (e.prototype.doComplete2 = function (t, n, r, i, a) {
          return (function (e, t, n, r) {
            return new (n || (n = Promise))(function (a, o) {
              function c(h) {
                try {
                  u(r.next(h));
                } catch (d) {
                  o(d);
                }
              }
              function l(h) {
                try {
                  u(r.throw(h));
                } catch (d) {
                  o(d);
                }
              }
              function u(h) {
                h.done
                  ? a(h.value)
                  : (function i(a) {
                      return a instanceof n
                        ? a
                        : new n(function (o) {
                            o(a);
                          });
                    })(h.value).then(c, l);
              }
              u((r = r.apply(e, t || [])).next());
            });
          })(this, void 0, void 0, function () {
            var o, c, l, u;
            return (function (e, t) {
              var r,
                i,
                a,
                o,
                n = {
                  label: 0,
                  sent: function () {
                    if (1 & a[0]) throw a[1];
                    return a[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (o = { next: c(0), throw: c(1), return: c(2) }),
                'function' == typeof Symbol &&
                  (o[Symbol.iterator] = function () {
                    return this;
                  }),
                o
              );
              function c(u) {
                return function (h) {
                  return (function l(u) {
                    if (r)
                      throw new TypeError('Generator is already executing.');
                    for (; n; )
                      try {
                        if (
                          ((r = 1),
                          i &&
                            (a =
                              2 & u[0]
                                ? i.return
                                : u[0]
                                ? i.throw || ((a = i.return) && a.call(i), 0)
                                : i.next) &&
                            !(a = a.call(i, u[1])).done)
                        )
                          return a;
                        switch (
                          ((i = 0), a && (u = [2 & u[0], a.value]), u[0])
                        ) {
                          case 0:
                          case 1:
                            a = u;
                            break;
                          case 4:
                            return n.label++, { value: u[1], done: !1 };
                          case 5:
                            n.label++, (i = u[1]), (u = [0]);
                            continue;
                          case 7:
                            (u = n.ops.pop()), n.trys.pop();
                            continue;
                          default:
                            if (
                              !(a =
                                (a = n.trys).length > 0 && a[a.length - 1]) &&
                              (6 === u[0] || 2 === u[0])
                            ) {
                              n = 0;
                              continue;
                            }
                            if (
                              3 === u[0] &&
                              (!a || (u[1] > a[0] && u[1] < a[3]))
                            ) {
                              n.label = u[1];
                              break;
                            }
                            if (6 === u[0] && n.label < a[1]) {
                              (n.label = a[1]), (a = u);
                              break;
                            }
                            if (a && n.label < a[2]) {
                              (n.label = a[2]), n.ops.push(u);
                              break;
                            }
                            a[2] && n.ops.pop(), n.trys.pop();
                            continue;
                        }
                        u = t.call(e, n);
                      } catch (h) {
                        (u = [6, h]), (i = 0);
                      } finally {
                        r = a = 0;
                      }
                    if (5 & u[0]) throw u[1];
                    return { value: u[0] ? u[1] : void 0, done: !0 };
                  })([u, h]);
                };
              }
            })(this, function (h) {
              switch (h.label) {
                case 0:
                  if (
                    !this.lsOptions.fileSystemProvider ||
                    !this.lsOptions.fileSystemProvider.readDirectory
                  )
                    return [2, this.doComplete(t, n, r, a)];
                  (o = new zl(this.lsOptions.fileSystemProvider.readDirectory)),
                    (this.completionParticipants = [o].concat(
                      (c = this.completionParticipants)
                    )),
                    (l = this.doComplete(t, n, r, a)),
                    (h.label = 1);
                case 1:
                  return (
                    h.trys.push([1, , 3, 4]), [4, o.computeCompletions(t, i)]
                  );
                case 2:
                  return (
                    (u = h.sent()),
                    [
                      2,
                      {
                        isIncomplete: l.isIncomplete || u.isIncomplete,
                        items: u.items.concat(l.items),
                      },
                    ]
                  );
                case 3:
                  return (this.completionParticipants = c), [7];
                case 4:
                  return [2];
              }
            });
          });
        }),
        (e.prototype.doComplete = function (t, n, r, i) {
          var a = this._doComplete(t, n, r, i);
          return this.convertCompletionList(a);
        }),
        (e.prototype._doComplete = function (t, n, r, i) {
          var a = { isIncomplete: !1, items: [] },
            o = this.completionParticipants,
            c = this.dataManager.getDataProviders().filter(function (R) {
              return (
                R.isApplicable(t.languageId) && (!i || !1 !== i[R.getId()])
              );
            }),
            l = this.doesSupportMarkdown(),
            u = t.getText(),
            h = t.offsetAt(n),
            d = r.findNodeBefore(h);
          if (!d) return a;
          var _,
            W,
            f = me(u, d.start),
            g = '';
          function b(R, N) {
            return (
              void 0 === N && (N = h),
              R > h && (R = h),
              { start: t.positionAt(R), end: t.positionAt(N) }
            );
          }
          function y(R, N) {
            var W = b(R, N);
            return (
              c.forEach(function (j) {
                j.provideTags().forEach(function ($) {
                  a.items.push({
                    label: $.name,
                    kind: fe.Property,
                    documentation: qe($, void 0, l),
                    textEdit: ee.replace(W, $.name),
                    insertTextFormat: ke.PlainText,
                  });
                });
              }),
              a
            );
          }
          function k(R) {
            for (var N = R; N > 0; ) {
              var W = u.charAt(N - 1);
              if ('\n\r'.indexOf(W) >= 0) return u.substring(N, R);
              if (!Yt(W)) return null;
              N--;
            }
            return u.substring(0, R);
          }
          function v(R, N, W) {
            void 0 === W && (W = h);
            var j = b(R, W),
              $ = Gi(u, W, O.WithinEndTag, I.EndTagClose) ? '' : '>',
              G = d;
            for (N && (G = G.parent); G; ) {
              var J = G.tag;
              if (J && (!G.closed || (G.endTagStart && G.endTagStart > h))) {
                var le = {
                    label: '/' + J,
                    kind: fe.Property,
                    filterText: '/' + J,
                    textEdit: ee.replace(j, '/' + J + $),
                    insertTextFormat: ke.PlainText,
                  },
                  Ae = k(G.start),
                  Fe = k(R - 1);
                if (null !== Ae && null !== Fe && Ae !== Fe) {
                  var ge = Ae + '</' + J + $;
                  (le.textEdit = ee.replace(b(R - 1 - Fe.length), ge)),
                    (le.filterText = Fe + '</' + J);
                }
                return a.items.push(le), a;
              }
              G = G.parent;
            }
            return (
              N ||
                c.forEach(function (Oe) {
                  Oe.provideTags().forEach(function (ve) {
                    a.items.push({
                      label: '/' + ve.name,
                      kind: fe.Property,
                      documentation: qe(ve, void 0, l),
                      filterText: '/' + ve.name + $,
                      textEdit: ee.replace(j, '/' + ve.name + $),
                      insertTextFormat: ke.PlainText,
                    });
                  });
                }),
              a
            );
          }
          function L(R, N) {
            if (i && i.hideAutoCompleteProposals) return a;
            if (!Qt(N)) {
              var W = t.positionAt(R);
              a.items.push({
                label: '</' + N + '>',
                kind: fe.Property,
                filterText: '</' + N + '>',
                textEdit: ee.insert(W, '$0</' + N + '>'),
                insertTextFormat: ke.Snippet,
              });
            }
            return a;
          }
          function D(R, N) {
            return y(R, N), v(R, !0, N), a;
          }
          function B(R, N) {
            var W;
            void 0 === N && (N = h);
            for (var j = h; j < N && '<' !== u[j]; ) j++;
            var $ = u.substring(R, N),
              G = b(R, j),
              J = '';
            if (!Gi(u, N, O.AfterAttributeName, I.DelimiterAssign)) {
              var le =
                null !== (W = i?.attributeDefaultValue) && void 0 !== W
                  ? W
                  : 'doublequotes';
              J =
                'empty' === le
                  ? '=$1'
                  : 'singlequotes' === le
                  ? "='$1'"
                  : '="$1"';
            }
            var Ae = (function H() {
              var R = Object.create(null);
              return (
                d.attributeNames.forEach(function (N) {
                  R[N] = !0;
                }),
                R
              );
            })();
            return (
              (Ae[$] = !1),
              c.forEach(function (Fe) {
                Fe.provideAttributes(g).forEach(function (ge) {
                  if (!Ae[ge.name]) {
                    Ae[ge.name] = !0;
                    var ve,
                      Oe = ge.name;
                    'v' !== ge.valueSet &&
                      J.length &&
                      ((Oe += J),
                      (ge.valueSet || 'style' === ge.name) &&
                        (ve = {
                          title: 'Suggest',
                          command: 'editor.action.triggerSuggest',
                        })),
                      a.items.push({
                        label: ge.name,
                        kind:
                          'handler' === ge.valueSet ? fe.Function : fe.Value,
                        documentation: qe(ge, void 0, l),
                        textEdit: ee.replace(G, Oe),
                        insertTextFormat: ke.Snippet,
                        command: ve,
                      });
                  }
                });
              }),
              (function p(R, N) {
                var W = 'data-',
                  j = {};
                function $(G) {
                  G.attributeNames.forEach(function (J) {
                    He(J, W) && !j[J] && !N[J] && (j[J] = J + '="$1"');
                  }),
                    G.children.forEach(function (J) {
                      return $(J);
                    });
                }
                (j[W] = ''.concat(W, '$1="$2"')),
                  r &&
                    r.roots.forEach(function (G) {
                      return $(G);
                    }),
                  Object.keys(j).forEach(function (G) {
                    return a.items.push({
                      label: G,
                      kind: fe.Value,
                      textEdit: ee.replace(R, j[G]),
                      insertTextFormat: ke.Snippet,
                    });
                  });
              })(G, Ae),
              a
            );
          }
          function m(R, N) {
            var W, j, $;
            if (
              (void 0 === N && (N = h),
              h > R &&
                h <= N &&
                (function Jl(e) {
                  return /^["']*$/.test(e);
                })(u[R]))
            ) {
              var G = R + 1,
                J = N;
              N > R && u[N - 1] === u[R] && J--;
              var le = (function Yl(e, t, n) {
                  for (; t > n && !Yt(e[t - 1]); ) t--;
                  return t;
                })(u, h, G),
                Ae = (function Xl(e, t, n) {
                  for (; t < n && !Yt(e[t]); ) t++;
                  return t;
                })(u, h, J);
              (W = b(le, Ae)),
                ($ = h >= G && h <= J ? u.substring(G, h) : ''),
                (j = !1);
            } else (W = b(R, N)), ($ = u.substring(R, h)), (j = !0);
            if (o.length > 0)
              for (
                var Fe = g.toLowerCase(),
                  ge = _.toLowerCase(),
                  Oe = b(R, N),
                  ve = 0,
                  ra = o;
                ve < ra.length;
                ve++
              ) {
                var ia = ra[ve];
                ia.onHtmlAttributeValue &&
                  ia.onHtmlAttributeValue({
                    document: t,
                    position: n,
                    tag: Fe,
                    attribute: ge,
                    value: $,
                    range: Oe,
                  });
              }
            return (
              c.forEach(function (Du) {
                Du.provideValues(g, _).forEach(function (Xt) {
                  var aa = j ? '"' + Xt.name + '"' : Xt.name;
                  a.items.push({
                    label: Xt.name,
                    filterText: aa,
                    kind: fe.Unit,
                    documentation: qe(Xt, void 0, l),
                    textEdit: ee.replace(W, aa),
                    insertTextFormat: ke.PlainText,
                  });
                });
              }),
              C(),
              a
            );
          }
          function w(R) {
            return h === f.getTokenEnd() &&
              (z = f.scan()) === R &&
              f.getTokenOffset() === h
              ? f.getTokenEnd()
              : h;
          }
          function E() {
            for (var R = 0, N = o; R < N.length; R++) {
              var W = N[R];
              W.onHtmlContent && W.onHtmlContent({ document: t, position: n });
            }
            return C();
          }
          function C() {
            for (var R = h - 1, N = n.character; R >= 0 && wt(u, R); ) R--, N--;
            if (R >= 0 && '&' === u[R]) {
              var W = Q.create(ne.create(n.line, N - 1), n);
              for (var j in bt)
                if (Ll(j, ';')) {
                  var $ = '&' + j;
                  a.items.push({
                    label: $,
                    kind: fe.Keyword,
                    documentation: $l(
                      'entity.propose',
                      "Character entity representing '".concat(bt[j], "'")
                    ),
                    textEdit: ee.replace(W, $),
                    insertTextFormat: ke.PlainText,
                  });
                }
            }
            return a;
          }
          for (var z = f.scan(); z !== I.EOS && f.getTokenOffset() <= h; ) {
            switch (z) {
              case I.StartTagOpen:
                if (f.getTokenEnd() === h) {
                  var F = w(I.StartTag);
                  return (
                    0 === n.line &&
                      (void 0,
                      (W = b(h, F)),
                      a.items.push({
                        label: '!DOCTYPE',
                        kind: fe.Property,
                        documentation: 'A preamble for an HTML document.',
                        textEdit: ee.replace(W, '!DOCTYPE html>'),
                        insertTextFormat: ke.PlainText,
                      })),
                    D(h, F)
                  );
                }
                break;
              case I.StartTag:
                if (f.getTokenOffset() <= h && h <= f.getTokenEnd())
                  return y(f.getTokenOffset(), f.getTokenEnd());
                g = f.getTokenText();
                break;
              case I.AttributeName:
                if (f.getTokenOffset() <= h && h <= f.getTokenEnd())
                  return B(f.getTokenOffset(), f.getTokenEnd());
                _ = f.getTokenText();
                break;
              case I.DelimiterAssign:
                if (f.getTokenEnd() === h)
                  return (F = w(I.AttributeValue)), m(h, F);
                break;
              case I.AttributeValue:
                if (f.getTokenOffset() <= h && h <= f.getTokenEnd())
                  return m(f.getTokenOffset(), f.getTokenEnd());
                break;
              case I.Whitespace:
                if (h <= f.getTokenEnd())
                  switch (f.getScannerState()) {
                    case O.AfterOpeningStartTag:
                      return D(f.getTokenOffset(), w(I.StartTag));
                    case O.WithinTag:
                    case O.AfterAttributeName:
                      return B(f.getTokenEnd());
                    case O.BeforeAttributeValue:
                      return m(f.getTokenEnd());
                    case O.AfterOpeningEndTag:
                      return v(f.getTokenOffset() - 1, !1);
                    case O.WithinContent:
                      return E();
                  }
                break;
              case I.EndTagOpen:
                if (h <= f.getTokenEnd())
                  return v(f.getTokenOffset() + 1, !1, w(I.EndTag));
                break;
              case I.EndTag:
                if (h <= f.getTokenEnd())
                  for (var M = f.getTokenOffset() - 1; M >= 0; ) {
                    var U = u.charAt(M);
                    if ('/' === U) return v(M, !1, f.getTokenEnd());
                    if (!Yt(U)) break;
                    M--;
                  }
                break;
              case I.StartTagClose:
                if (h <= f.getTokenEnd() && g) return L(f.getTokenEnd(), g);
                break;
              case I.Content:
                if (h <= f.getTokenEnd()) return E();
                break;
              default:
                if (h <= f.getTokenEnd()) return a;
            }
            z = f.scan();
          }
          return a;
        }),
        (e.prototype.doQuoteComplete = function (t, n, r, i) {
          var a,
            o = t.offsetAt(n);
          if (o <= 0) return null;
          var c =
            null !== (a = i?.attributeDefaultValue) && void 0 !== a
              ? a
              : 'doublequotes';
          if ('empty' === c) return null;
          if ('=' !== t.getText().charAt(o - 1)) return null;
          var u = 'doublequotes' === c ? '"$1"' : "'$1'",
            h = r.findNodeBefore(o);
          if (
            h &&
            h.attributes &&
            h.start < o &&
            (!h.endTagStart || h.endTagStart > o)
          )
            for (
              var d = me(t.getText(), h.start), f = d.scan();
              f !== I.EOS && d.getTokenEnd() <= o;

            ) {
              if (f === I.AttributeName && d.getTokenEnd() === o - 1)
                return (f = d.scan()) !== I.DelimiterAssign ||
                  (f = d.scan()) === I.Unknown ||
                  f === I.AttributeValue
                  ? null
                  : u;
              f = d.scan();
            }
          return null;
        }),
        (e.prototype.doTagComplete = function (t, n, r) {
          var i = t.offsetAt(n);
          if (i <= 0) return null;
          var a = t.getText().charAt(i - 1);
          if ('>' === a) {
            if (
              (o = r.findNodeBefore(i)) &&
              o.tag &&
              !Qt(o.tag) &&
              o.start < i &&
              (!o.endTagStart || o.endTagStart > i)
            )
              for (
                var l = (c = me(t.getText(), o.start)).scan();
                l !== I.EOS && c.getTokenEnd() <= i;

              ) {
                if (l === I.StartTagClose && c.getTokenEnd() === i)
                  return '$0</'.concat(o.tag, '>');
                l = c.scan();
              }
          } else if ('/' === a) {
            for (
              var o = r.findNodeBefore(i);
              o && o.closed && !(o.endTagStart && o.endTagStart > i);

            )
              o = o.parent;
            var c;
            if (o && o.tag)
              for (
                l = (c = me(t.getText(), o.start)).scan();
                l !== I.EOS && c.getTokenEnd() <= i;

              ) {
                if (l === I.EndTagOpen && c.getTokenEnd() === i)
                  return ''.concat(o.tag, '>');
                l = c.scan();
              }
          }
          return null;
        }),
        (e.prototype.convertCompletionList = function (t) {
          return (
            this.doesSupportMarkdown() ||
              t.items.forEach(function (n) {
                n.documentation &&
                  'string' != typeof n.documentation &&
                  (n.documentation = {
                    kind: 'plaintext',
                    value: n.documentation.value,
                  });
              }),
            t
          );
        }),
        (e.prototype.doesSupportMarkdown = function () {
          var t, n, r;
          if (!Jt(this.supportsMarkdown)) {
            if (!Jt(this.lsOptions.clientCapabilities))
              return (this.supportsMarkdown = !0), this.supportsMarkdown;
            var i =
              null ===
                (r =
                  null ===
                    (n =
                      null ===
                        (t = this.lsOptions.clientCapabilities.textDocument) ||
                      void 0 === t
                        ? void 0
                        : t.completion) || void 0 === n
                    ? void 0
                    : n.completionItem) || void 0 === r
                ? void 0
                : r.documentationFormat;
            this.supportsMarkdown =
              Array.isArray(i) && -1 !== i.indexOf(Te.Markdown);
          }
          return this.supportsMarkdown;
        }),
        e
      );
    })();
  function Yt(e) {
    return /^\s*$/.test(e);
  }
  function Gi(e, t, n, r) {
    for (var i = me(e, t, n), a = i.scan(); a === I.Whitespace; ) a = i.scan();
    return a === r;
  }
  var ji,
    Zl = Rn(),
    Kl = (function () {
      function e(t, n) {
        (this.lsOptions = t), (this.dataManager = n);
      }
      return (
        (e.prototype.doHover = function (t, n, r, i) {
          var a = this.convertContents.bind(this),
            o = this.doesSupportMarkdown(),
            c = t.offsetAt(n),
            l = r.findNodeAt(c),
            u = t.getText();
          if (!l || !l.tag) return null;
          var h = this.dataManager.getDataProviders().filter(function (S) {
            return S.isApplicable(t.languageId);
          });
          function d(S, z, F) {
            for (
              var P = function (U) {
                  var R = null;
                  if (
                    (U.provideTags().forEach(function (N) {
                      if (N.name.toLowerCase() === S.toLowerCase()) {
                        var W = qe(N, i, o);
                        W ||
                          (W = {
                            kind: o ? 'markdown' : 'plaintext',
                            value: '',
                          }),
                          (R = { contents: W, range: z });
                      }
                    }),
                    R)
                  )
                    return (R.contents = a(R.contents)), { value: R };
                },
                q = 0,
                x = h;
              q < x.length;
              q++
            ) {
              var M = P(x[q]);
              if ('object' == typeof M) return M.value;
            }
            return null;
          }
          function b(S, z) {
            for (
              var F = me(t.getText(), z), P = F.scan();
              P !== I.EOS &&
              (F.getTokenEnd() < c || (F.getTokenEnd() === c && P !== S));

            )
              P = F.scan();
            return P === S && c <= F.getTokenEnd()
              ? {
                  start: t.positionAt(F.getTokenOffset()),
                  end: t.positionAt(F.getTokenEnd()),
                }
              : null;
          }
          if (l.endTagStart && c >= l.endTagStart) {
            var v = b(I.EndTag, l.endTagStart);
            return v ? d(l.tag, v) : null;
          }
          var L = b(I.StartTag, l.start);
          if (L) return d(l.tag, L);
          var D = b(I.AttributeName, l.start);
          if (D)
            return (function f(S, z, F) {
              for (
                var P = function (U) {
                    var R = null;
                    if (
                      (U.provideAttributes(S).forEach(function (N) {
                        if (z === N.name && N.description) {
                          var W = qe(N, i, o);
                          R = W ? { contents: W, range: F } : null;
                        }
                      }),
                      R)
                    )
                      return (R.contents = a(R.contents)), { value: R };
                  },
                  q = 0,
                  x = h;
                q < x.length;
                q++
              ) {
                var M = P(x[q]);
                if ('object' == typeof M) return M.value;
              }
              return null;
            })((H = l.tag), t.getText(D), D);
          var p = (function y() {
            for (var S = c - 1, z = n.character; S >= 0 && wt(u, S); ) S--, z--;
            for (var F = S + 1, P = z; wt(u, F); ) F++, P++;
            return S >= 0 && '&' === u[S]
              ? Q.create(
                  ne.create(n.line, z),
                  ne.create(n.line, ';' === u[F] ? P + 1 : P)
                )
              : null;
          })();
          if (p)
            return (function _(S, z) {
              var F = (function k(S) {
                for (var z = c - 1, F = '&'; z >= 0 && wt(S, z); ) z--;
                for (z += 1; wt(S, z); ) (F += S[z]), (z += 1);
                return (F += ';');
              })(S);
              for (var P in bt) {
                var q = null;
                if (F === '&' + P) {
                  var T = bt[P].charCodeAt(0).toString(16).toUpperCase(),
                    M = 'U+';
                  if (T.length < 4)
                    for (var U = 4 - T.length, R = 0; R < U; )
                      (M += '0'), (R += 1);
                  M += T;
                  var N = Zl(
                    'entity.propose',
                    "Character entity representing '"
                      .concat(bt[P], "', unicode equivalent '")
                      .concat(M, "'")
                  );
                  q = N ? { contents: N, range: z } : null;
                }
                if (q) return (q.contents = a(q.contents)), q;
              }
              return null;
            })(u, p);
          var w = b(I.AttributeValue, l.start);
          if (w) {
            var H = l.tag,
              E = (function eu(e) {
                return e.length <= 1
                  ? e.replace(/['"]/, '')
                  : (("'" === e[0] || '"' === e[0]) && (e = e.slice(1)),
                    ("'" === e[e.length - 1] || '"' === e[e.length - 1]) &&
                      (e = e.slice(0, -1)),
                    e);
              })(t.getText(w)),
              C = (function m(S, z) {
                for (
                  var F = me(t.getText(), S), P = F.scan(), q = void 0;
                  P !== I.EOS && F.getTokenEnd() <= z;

                )
                  (P = F.scan()) === I.AttributeName && (q = F.getTokenText());
                return q;
              })(l.start, t.offsetAt(w.start));
            if (C)
              return (function g(S, z, F, P) {
                for (
                  var q = function (R) {
                      var N = null;
                      if (
                        (R.provideValues(S, z).forEach(function (W) {
                          if (F === W.name && W.description) {
                            var j = qe(W, i, o);
                            N = j ? { contents: j, range: P } : null;
                          }
                        }),
                        N)
                      )
                        return (N.contents = a(N.contents)), { value: N };
                    },
                    x = 0,
                    T = h;
                  x < T.length;
                  x++
                ) {
                  var U = q(T[x]);
                  if ('object' == typeof U) return U.value;
                }
                return null;
              })(H, C, E, w);
          }
          return null;
        }),
        (e.prototype.convertContents = function (t) {
          if (!this.doesSupportMarkdown()) {
            if ('string' == typeof t) return t;
            if ('kind' in t) return { kind: 'plaintext', value: t.value };
            if (!Array.isArray(t)) return t.value;
            t.map(function (n) {
              return 'string' == typeof n ? n : n.value;
            });
          }
          return t;
        }),
        (e.prototype.doesSupportMarkdown = function () {
          var t, n, r;
          if (!Jt(this.supportsMarkdown)) {
            if (!Jt(this.lsOptions.clientCapabilities))
              return (this.supportsMarkdown = !0), this.supportsMarkdown;
            var i =
              null ===
                (r =
                  null ===
                    (n =
                      null === (t = this.lsOptions.clientCapabilities) ||
                      void 0 === t
                        ? void 0
                        : t.textDocument) || void 0 === n
                    ? void 0
                    : n.hover) || void 0 === r
                ? void 0
                : r.contentFormat;
            this.supportsMarkdown =
              Array.isArray(i) && -1 !== i.indexOf(Te.Markdown);
          }
          return this.supportsMarkdown;
        }),
        e
      );
    })();
  function tu(e, t) {
    return e;
  }
  !(function () {
    var e = [
        ,
        ,
        function (i) {
          function a(l) {
            (this.__parent = l),
              (this.__character_count = 0),
              (this.__indent_count = -1),
              (this.__alignment_count = 0),
              (this.__wrap_point_index = 0),
              (this.__wrap_point_character_count = 0),
              (this.__wrap_point_indent_count = -1),
              (this.__wrap_point_alignment_count = 0),
              (this.__items = []);
          }
          function o(l, u) {
            (this.__cache = ['']),
              (this.__indent_size = l.indent_size),
              (this.__indent_string = l.indent_char),
              l.indent_with_tabs ||
                (this.__indent_string = new Array(l.indent_size + 1).join(
                  l.indent_char
                )),
              (u = u || ''),
              l.indent_level > 0 &&
                (u = new Array(l.indent_level + 1).join(this.__indent_string)),
              (this.__base_string = u),
              (this.__base_string_length = u.length);
          }
          function c(l, u) {
            (this.__indent_cache = new o(l, u)),
              (this.raw = !1),
              (this._end_with_newline = l.end_with_newline),
              (this.indent_size = l.indent_size),
              (this.wrap_line_length = l.wrap_line_length),
              (this.indent_empty_lines = l.indent_empty_lines),
              (this.__lines = []),
              (this.previous_line = null),
              (this.current_line = null),
              (this.next_line = new a(this)),
              (this.space_before_token = !1),
              (this.non_breaking_space = !1),
              (this.previous_token_wrapped = !1),
              this.__add_outputline();
          }
          (a.prototype.clone_empty = function () {
            var l = new a(this.__parent);
            return l.set_indent(this.__indent_count, this.__alignment_count), l;
          }),
            (a.prototype.item = function (l) {
              return l < 0
                ? this.__items[this.__items.length + l]
                : this.__items[l];
            }),
            (a.prototype.has_match = function (l) {
              for (var u = this.__items.length - 1; u >= 0; u--)
                if (this.__items[u].match(l)) return !0;
              return !1;
            }),
            (a.prototype.set_indent = function (l, u) {
              this.is_empty() &&
                ((this.__indent_count = l || 0),
                (this.__alignment_count = u || 0),
                (this.__character_count = this.__parent.get_indent_size(
                  this.__indent_count,
                  this.__alignment_count
                )));
            }),
            (a.prototype._set_wrap_point = function () {
              this.__parent.wrap_line_length &&
                ((this.__wrap_point_index = this.__items.length),
                (this.__wrap_point_character_count = this.__character_count),
                (this.__wrap_point_indent_count =
                  this.__parent.next_line.__indent_count),
                (this.__wrap_point_alignment_count =
                  this.__parent.next_line.__alignment_count));
            }),
            (a.prototype._should_wrap = function () {
              return (
                this.__wrap_point_index &&
                this.__character_count > this.__parent.wrap_line_length &&
                this.__wrap_point_character_count >
                  this.__parent.next_line.__character_count
              );
            }),
            (a.prototype._allow_wrap = function () {
              if (this._should_wrap()) {
                this.__parent.add_new_line();
                var l = this.__parent.current_line;
                return (
                  l.set_indent(
                    this.__wrap_point_indent_count,
                    this.__wrap_point_alignment_count
                  ),
                  (l.__items = this.__items.slice(this.__wrap_point_index)),
                  (this.__items = this.__items.slice(
                    0,
                    this.__wrap_point_index
                  )),
                  (l.__character_count +=
                    this.__character_count - this.__wrap_point_character_count),
                  (this.__character_count = this.__wrap_point_character_count),
                  ' ' === l.__items[0] &&
                    (l.__items.splice(0, 1), (l.__character_count -= 1)),
                  !0
                );
              }
              return !1;
            }),
            (a.prototype.is_empty = function () {
              return 0 === this.__items.length;
            }),
            (a.prototype.last = function () {
              return this.is_empty()
                ? null
                : this.__items[this.__items.length - 1];
            }),
            (a.prototype.push = function (l) {
              this.__items.push(l);
              var u = l.lastIndexOf('\n');
              -1 !== u
                ? (this.__character_count = l.length - u)
                : (this.__character_count += l.length);
            }),
            (a.prototype.pop = function () {
              var l = null;
              return (
                this.is_empty() ||
                  ((l = this.__items.pop()),
                  (this.__character_count -= l.length)),
                l
              );
            }),
            (a.prototype._remove_indent = function () {
              this.__indent_count > 0 &&
                ((this.__indent_count -= 1),
                (this.__character_count -= this.__parent.indent_size));
            }),
            (a.prototype._remove_wrap_indent = function () {
              this.__wrap_point_indent_count > 0 &&
                (this.__wrap_point_indent_count -= 1);
            }),
            (a.prototype.trim = function () {
              for (; ' ' === this.last(); )
                this.__items.pop(), (this.__character_count -= 1);
            }),
            (a.prototype.toString = function () {
              var l = '';
              return (
                this.is_empty()
                  ? this.__parent.indent_empty_lines &&
                    (l = this.__parent.get_indent_string(this.__indent_count))
                  : ((l = this.__parent.get_indent_string(
                      this.__indent_count,
                      this.__alignment_count
                    )),
                    (l += this.__items.join(''))),
                l
              );
            }),
            (o.prototype.get_indent_size = function (l, u) {
              var h = this.__base_string_length;
              return l < 0 && (h = 0), (h += l * this.__indent_size) + (u || 0);
            }),
            (o.prototype.get_indent_string = function (l, u) {
              var h = this.__base_string;
              return (
                (u = u || 0),
                l < 0 && ((l = 0), (h = '')),
                this.__ensure_cache((u += l * this.__indent_size)),
                h + this.__cache[u]
              );
            }),
            (o.prototype.__ensure_cache = function (l) {
              for (; l >= this.__cache.length; ) this.__add_column();
            }),
            (o.prototype.__add_column = function () {
              var l = this.__cache.length,
                u = 0,
                h = '';
              this.__indent_size &&
                l >= this.__indent_size &&
                ((l -=
                  (u = Math.floor(l / this.__indent_size)) *
                  this.__indent_size),
                (h = new Array(u + 1).join(this.__indent_string))),
                l && (h += new Array(l + 1).join(' ')),
                this.__cache.push(h);
            }),
            (c.prototype.__add_outputline = function () {
              (this.previous_line = this.current_line),
                (this.current_line = this.next_line.clone_empty()),
                this.__lines.push(this.current_line);
            }),
            (c.prototype.get_line_number = function () {
              return this.__lines.length;
            }),
            (c.prototype.get_indent_string = function (l, u) {
              return this.__indent_cache.get_indent_string(l, u);
            }),
            (c.prototype.get_indent_size = function (l, u) {
              return this.__indent_cache.get_indent_size(l, u);
            }),
            (c.prototype.is_empty = function () {
              return !this.previous_line && this.current_line.is_empty();
            }),
            (c.prototype.add_new_line = function (l) {
              return !(
                this.is_empty() ||
                (!l && this.just_added_newline()) ||
                (this.raw || this.__add_outputline(), 0)
              );
            }),
            (c.prototype.get_code = function (l) {
              this.trim(!0);
              var u = this.current_line.pop();
              u &&
                ('\n' === u[u.length - 1] && (u = u.replace(/\n+$/g, '')),
                this.current_line.push(u)),
                this._end_with_newline && this.__add_outputline();
              var h = this.__lines.join('\n');
              return '\n' !== l && (h = h.replace(/[\n]/g, l)), h;
            }),
            (c.prototype.set_wrap_point = function () {
              this.current_line._set_wrap_point();
            }),
            (c.prototype.set_indent = function (l, u) {
              return (
                this.next_line.set_indent((l = l || 0), (u = u || 0)),
                this.__lines.length > 1
                  ? (this.current_line.set_indent(l, u), !0)
                  : (this.current_line.set_indent(), !1)
              );
            }),
            (c.prototype.add_raw_token = function (l) {
              for (var u = 0; u < l.newlines; u++) this.__add_outputline();
              this.current_line.set_indent(-1),
                this.current_line.push(l.whitespace_before),
                this.current_line.push(l.text),
                (this.space_before_token = !1),
                (this.non_breaking_space = !1),
                (this.previous_token_wrapped = !1);
            }),
            (c.prototype.add_token = function (l) {
              this.__add_space_before_token(),
                this.current_line.push(l),
                (this.space_before_token = !1),
                (this.non_breaking_space = !1),
                (this.previous_token_wrapped = this.current_line._allow_wrap());
            }),
            (c.prototype.__add_space_before_token = function () {
              this.space_before_token &&
                !this.just_added_newline() &&
                (this.non_breaking_space || this.set_wrap_point(),
                this.current_line.push(' '));
            }),
            (c.prototype.remove_indent = function (l) {
              for (var u = this.__lines.length; l < u; )
                this.__lines[l]._remove_indent(), l++;
              this.current_line._remove_wrap_indent();
            }),
            (c.prototype.trim = function (l) {
              for (
                l = void 0 !== l && l, this.current_line.trim();
                l && this.__lines.length > 1 && this.current_line.is_empty();

              )
                this.__lines.pop(),
                  (this.current_line = this.__lines[this.__lines.length - 1]),
                  this.current_line.trim();
              this.previous_line =
                this.__lines.length > 1
                  ? this.__lines[this.__lines.length - 2]
                  : null;
            }),
            (c.prototype.just_added_newline = function () {
              return this.current_line.is_empty();
            }),
            (c.prototype.just_added_blankline = function () {
              return (
                this.is_empty() ||
                (this.current_line.is_empty() && this.previous_line.is_empty())
              );
            }),
            (c.prototype.ensure_empty_line_above = function (l, u) {
              for (var h = this.__lines.length - 2; h >= 0; ) {
                var d = this.__lines[h];
                if (d.is_empty()) break;
                if (0 !== d.item(0).indexOf(l) && d.item(-1) !== u) {
                  this.__lines.splice(h + 1, 0, new a(this)),
                    (this.previous_line =
                      this.__lines[this.__lines.length - 2]);
                  break;
                }
                h--;
              }
            }),
            (i.exports.Output = c);
        },
        ,
        ,
        ,
        function (i) {
          function a(l, u) {
            (this.raw_options = o(l, u)),
              (this.disabled = this._get_boolean('disabled')),
              (this.eol = this._get_characters('eol', 'auto')),
              (this.end_with_newline = this._get_boolean('end_with_newline')),
              (this.indent_size = this._get_number('indent_size', 4)),
              (this.indent_char = this._get_characters('indent_char', ' ')),
              (this.indent_level = this._get_number('indent_level')),
              (this.preserve_newlines = this._get_boolean(
                'preserve_newlines',
                !0
              )),
              (this.max_preserve_newlines = this._get_number(
                'max_preserve_newlines',
                32786
              )),
              this.preserve_newlines || (this.max_preserve_newlines = 0),
              (this.indent_with_tabs = this._get_boolean(
                'indent_with_tabs',
                '\t' === this.indent_char
              )),
              this.indent_with_tabs &&
                ((this.indent_char = '\t'),
                1 === this.indent_size && (this.indent_size = 4)),
              (this.wrap_line_length = this._get_number(
                'wrap_line_length',
                this._get_number('max_char')
              )),
              (this.indent_empty_lines =
                this._get_boolean('indent_empty_lines')),
              (this.templating = this._get_selection_list(
                'templating',
                [
                  'auto',
                  'none',
                  'django',
                  'erb',
                  'handlebars',
                  'php',
                  'smarty',
                ],
                ['auto']
              ));
          }
          function o(l, u) {
            var d,
              h = {};
            for (d in (l = c(l))) d !== u && (h[d] = l[d]);
            if (u && l[u]) for (d in l[u]) h[d] = l[u][d];
            return h;
          }
          function c(l) {
            var h,
              u = {};
            for (h in l) u[h.replace(/-/g, '_')] = l[h];
            return u;
          }
          (a.prototype._get_array = function (l, u) {
            var h = this.raw_options[l],
              d = u || [];
            return (
              'object' == typeof h
                ? null !== h &&
                  'function' == typeof h.concat &&
                  (d = h.concat())
                : 'string' == typeof h && (d = h.split(/[^a-zA-Z0-9_\/\-]+/)),
              d
            );
          }),
            (a.prototype._get_boolean = function (l, u) {
              var h = this.raw_options[l];
              return void 0 === h ? !!u : !!h;
            }),
            (a.prototype._get_characters = function (l, u) {
              var h = this.raw_options[l],
                d = u || '';
              return (
                'string' == typeof h &&
                  (d = h
                    .replace(/\\r/, '\r')
                    .replace(/\\n/, '\n')
                    .replace(/\\t/, '\t')),
                d
              );
            }),
            (a.prototype._get_number = function (l, u) {
              var h = this.raw_options[l];
              (u = parseInt(u, 10)), isNaN(u) && (u = 0);
              var d = parseInt(h, 10);
              return isNaN(d) && (d = u), d;
            }),
            (a.prototype._get_selection = function (l, u, h) {
              var d = this._get_selection_list(l, u, h);
              if (1 !== d.length)
                throw new Error(
                  "Invalid Option Value: The option '" +
                    l +
                    "' can only be one of the following values:\n" +
                    u +
                    "\nYou passed in: '" +
                    this.raw_options[l] +
                    "'"
                );
              return d[0];
            }),
            (a.prototype._get_selection_list = function (l, u, h) {
              if (!u || 0 === u.length)
                throw new Error('Selection list cannot be empty.');
              if (!this._is_valid_selection((h = h || [u[0]]), u))
                throw new Error('Invalid Default Value!');
              var d = this._get_array(l, h);
              if (!this._is_valid_selection(d, u))
                throw new Error(
                  "Invalid Option Value: The option '" +
                    l +
                    "' can contain only the following values:\n" +
                    u +
                    "\nYou passed in: '" +
                    this.raw_options[l] +
                    "'"
                );
              return d;
            }),
            (a.prototype._is_valid_selection = function (l, u) {
              return (
                l.length &&
                u.length &&
                !l.some(function (h) {
                  return -1 === u.indexOf(h);
                })
              );
            }),
            (i.exports.Options = a),
            (i.exports.normalizeOpts = c),
            (i.exports.mergeOpts = o);
        },
        ,
        function (i) {
          var a = RegExp.prototype.hasOwnProperty('sticky');
          function o(c) {
            (this.__input = c || ''),
              (this.__input_length = this.__input.length),
              (this.__position = 0);
          }
          (o.prototype.restart = function () {
            this.__position = 0;
          }),
            (o.prototype.back = function () {
              this.__position > 0 && (this.__position -= 1);
            }),
            (o.prototype.hasNext = function () {
              return this.__position < this.__input_length;
            }),
            (o.prototype.next = function () {
              var c = null;
              return (
                this.hasNext() &&
                  ((c = this.__input.charAt(this.__position)),
                  (this.__position += 1)),
                c
              );
            }),
            (o.prototype.peek = function (c) {
              var l = null;
              return (
                (c = c || 0),
                (c += this.__position) >= 0 &&
                  c < this.__input_length &&
                  (l = this.__input.charAt(c)),
                l
              );
            }),
            (o.prototype.__match = function (c, l) {
              c.lastIndex = l;
              var u = c.exec(this.__input);
              return u && !(a && c.sticky) && u.index !== l && (u = null), u;
            }),
            (o.prototype.test = function (c, l) {
              return (
                (l = l || 0),
                (l += this.__position) >= 0 &&
                  l < this.__input_length &&
                  !!this.__match(c, l)
              );
            }),
            (o.prototype.testChar = function (c, l) {
              var u = this.peek(l);
              return (c.lastIndex = 0), null !== u && c.test(u);
            }),
            (o.prototype.match = function (c) {
              var l = this.__match(c, this.__position);
              return l ? (this.__position += l[0].length) : (l = null), l;
            }),
            (o.prototype.read = function (c, l, u) {
              var d,
                h = '';
              return (
                c && (d = this.match(c)) && (h += d[0]),
                l && (d || !c) && (h += this.readUntil(l, u)),
                h
              );
            }),
            (o.prototype.readUntil = function (c, l) {
              var u,
                h = this.__position;
              c.lastIndex = this.__position;
              var d = c.exec(this.__input);
              return (
                d
                  ? ((h = d.index), l && (h += d[0].length))
                  : (h = this.__input_length),
                (u = this.__input.substring(this.__position, h)),
                (this.__position = h),
                u
              );
            }),
            (o.prototype.readUntilAfter = function (c) {
              return this.readUntil(c, !0);
            }),
            (o.prototype.get_regexp = function (c, l) {
              var u = null,
                h = 'g';
              return (
                l && a && (h = 'y'),
                'string' == typeof c && '' !== c
                  ? (u = new RegExp(c, h))
                  : c && (u = new RegExp(c.source, h)),
                u
              );
            }),
            (o.prototype.get_literal_regexp = function (c) {
              return RegExp(c.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
            }),
            (o.prototype.peekUntilAfter = function (c) {
              var l = this.__position,
                u = this.readUntilAfter(c);
              return (this.__position = l), u;
            }),
            (o.prototype.lookBack = function (c) {
              var l = this.__position - 1;
              return (
                l >= c.length &&
                this.__input.substring(l - c.length, l).toLowerCase() === c
              );
            }),
            (i.exports.InputScanner = o);
        },
        ,
        ,
        ,
        ,
        function (i) {
          function a(o, c) {
            (o = 'string' == typeof o ? o : o.source),
              (c = 'string' == typeof c ? c : c.source),
              (this.__directives_block_pattern = new RegExp(
                o + / beautify( \w+[:]\w+)+ /.source + c,
                'g'
              )),
              (this.__directive_pattern = / (\w+)[:](\w+)/g),
              (this.__directives_end_ignore_pattern = new RegExp(
                o + /\sbeautify\signore:end\s/.source + c,
                'g'
              ));
          }
          (a.prototype.get_directives = function (o) {
            if (!o.match(this.__directives_block_pattern)) return null;
            var c = {};
            this.__directive_pattern.lastIndex = 0;
            for (var l = this.__directive_pattern.exec(o); l; )
              (c[l[1]] = l[2]), (l = this.__directive_pattern.exec(o));
            return c;
          }),
            (a.prototype.readIgnored = function (o) {
              return o.readUntilAfter(this.__directives_end_ignore_pattern);
            }),
            (i.exports.Directives = a);
        },
        ,
        function (i, a, o) {
          var c = o(16).Beautifier,
            l = o(17).Options;
          (i.exports = function u(h, d) {
            return new c(h, d).beautify();
          }),
            (i.exports.defaultOptions = function () {
              return new l();
            });
        },
        function (i, a, o) {
          var c = o(17).Options,
            l = o(2).Output,
            u = o(8).InputScanner,
            d = new (0, o(13).Directives)(/\/\*/, /\*\//),
            f = /\r\n|[\r\n]/,
            g = /\r\n|[\r\n]/g,
            _ = /\s/,
            b = /(?:\s|\n)+/g,
            y = /\/\*(?:[\s\S]*?)((?:\*\/)|$)/g,
            k = /\/\/(?:[^\n\r\u2028\u2029]*)/g;
          function v(L, D) {
            (this._source_text = L || ''),
              (this._options = new c(D)),
              (this._ch = null),
              (this._input = null),
              (this.NESTED_AT_RULE = {
                '@page': !0,
                '@font-face': !0,
                '@keyframes': !0,
                '@media': !0,
                '@supports': !0,
                '@document': !0,
              }),
              (this.CONDITIONAL_GROUP_RULE = {
                '@media': !0,
                '@supports': !0,
                '@document': !0,
              });
          }
          (v.prototype.eatString = function (L) {
            var D = '';
            for (this._ch = this._input.next(); this._ch; ) {
              if (((D += this._ch), '\\' === this._ch)) D += this._input.next();
              else if (-1 !== L.indexOf(this._ch) || '\n' === this._ch) break;
              this._ch = this._input.next();
            }
            return D;
          }),
            (v.prototype.eatWhitespace = function (L) {
              for (
                var D = _.test(this._input.peek()), H = 0;
                _.test(this._input.peek());

              )
                (this._ch = this._input.next()),
                  L &&
                    '\n' === this._ch &&
                    (0 === H || H < this._options.max_preserve_newlines) &&
                    (H++, this._output.add_new_line(!0));
              return D;
            }),
            (v.prototype.foundNestedPseudoClass = function () {
              for (var L = 0, D = 1, H = this._input.peek(D); H; ) {
                if ('{' === H) return !0;
                if ('(' === H) L += 1;
                else if (')' === H) {
                  if (0 === L) return !1;
                  L -= 1;
                } else if (';' === H || '}' === H) return !1;
                D++, (H = this._input.peek(D));
              }
              return !1;
            }),
            (v.prototype.print_string = function (L) {
              this._output.set_indent(this._indentLevel),
                (this._output.non_breaking_space = !0),
                this._output.add_token(L);
            }),
            (v.prototype.preserveSingleSpace = function (L) {
              L && (this._output.space_before_token = !0);
            }),
            (v.prototype.indent = function () {
              this._indentLevel++;
            }),
            (v.prototype.outdent = function () {
              this._indentLevel > 0 && this._indentLevel--;
            }),
            (v.prototype.beautify = function () {
              if (this._options.disabled) return this._source_text;
              var L = this._source_text,
                D = this._options.eol;
              'auto' === D &&
                ((D = '\n'), L && f.test(L || '') && (D = L.match(f)[0]));
              var H = (L = L.replace(g, '\n')).match(/^[\t ]*/)[0];
              (this._output = new l(this._options, H)),
                (this._input = new u(L)),
                (this._indentLevel = 0),
                (this._nestedLevel = 0),
                (this._ch = null);
              for (
                var F,
                  P,
                  B = 0,
                  p = !1,
                  m = !1,
                  w = !1,
                  E = !1,
                  C = !1,
                  S = this._ch;
                (F = '' !== this._input.read(b)),
                  (P = S),
                  (this._ch = this._input.next()),
                  '\\' === this._ch &&
                    this._input.hasNext() &&
                    (this._ch += this._input.next()),
                  (S = this._ch),
                  this._ch;

              )
                if ('/' === this._ch && '*' === this._input.peek()) {
                  this._output.add_new_line(), this._input.back();
                  var q = this._input.read(y),
                    x = d.get_directives(q);
                  x &&
                    'start' === x.ignore &&
                    (q += d.readIgnored(this._input)),
                    this.print_string(q),
                    this.eatWhitespace(!0),
                    this._output.add_new_line();
                } else if ('/' === this._ch && '/' === this._input.peek())
                  (this._output.space_before_token = !0),
                    this._input.back(),
                    this.print_string(this._input.read(k)),
                    this.eatWhitespace(!0);
                else if ('@' === this._ch)
                  if ((this.preserveSingleSpace(F), '{' === this._input.peek()))
                    this.print_string(this._ch + this.eatString('}'));
                  else {
                    this.print_string(this._ch);
                    var T = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);
                    T.match(/[ :]$/) &&
                      ((T = this.eatString(': ').replace(/\s$/, '')),
                      this.print_string(T),
                      (this._output.space_before_token = !0)),
                      'extend' === (T = T.replace(/\s$/, ''))
                        ? (E = !0)
                        : 'import' === T && (C = !0),
                      T in this.NESTED_AT_RULE
                        ? ((this._nestedLevel += 1),
                          T in this.CONDITIONAL_GROUP_RULE && (w = !0))
                        : !p &&
                          0 === B &&
                          -1 !== T.indexOf(':') &&
                          ((m = !0), this.indent());
                  }
                else
                  '#' === this._ch && '{' === this._input.peek()
                    ? (this.preserveSingleSpace(F),
                      this.print_string(this._ch + this.eatString('}')))
                    : '{' === this._ch
                    ? (m && ((m = !1), this.outdent()),
                      w
                        ? ((w = !1),
                          (p = this._indentLevel >= this._nestedLevel))
                        : (p = this._indentLevel >= this._nestedLevel - 1),
                      this._options.newline_between_rules &&
                        p &&
                        this._output.previous_line &&
                        '{' !== this._output.previous_line.item(-1) &&
                        this._output.ensure_empty_line_above('/', ','),
                      (this._output.space_before_token = !0),
                      'expand' === this._options.brace_style
                        ? (this._output.add_new_line(),
                          this.print_string(this._ch),
                          this.indent(),
                          this._output.set_indent(this._indentLevel))
                        : (this.indent(), this.print_string(this._ch)),
                      this.eatWhitespace(!0),
                      this._output.add_new_line())
                    : '}' === this._ch
                    ? (this.outdent(),
                      this._output.add_new_line(),
                      '{' === P && this._output.trim(!0),
                      (C = !1),
                      (E = !1),
                      m && (this.outdent(), (m = !1)),
                      this.print_string(this._ch),
                      (p = !1),
                      this._nestedLevel && this._nestedLevel--,
                      this.eatWhitespace(!0),
                      this._output.add_new_line(),
                      this._options.newline_between_rules &&
                        !this._output.just_added_blankline() &&
                        '}' !== this._input.peek() &&
                        this._output.add_new_line(!0))
                    : ':' === this._ch
                    ? (!p && !w) ||
                      this._input.lookBack('&') ||
                      this.foundNestedPseudoClass() ||
                      this._input.lookBack('(') ||
                      E ||
                      0 !== B
                      ? (this._input.lookBack(' ') &&
                          (this._output.space_before_token = !0),
                        ':' === this._input.peek()
                          ? ((this._ch = this._input.next()),
                            this.print_string('::'))
                          : this.print_string(':'))
                      : (this.print_string(':'),
                        m ||
                          ((m = !0),
                          (this._output.space_before_token = !0),
                          this.eatWhitespace(!0),
                          this.indent()))
                    : '"' === this._ch || "'" === this._ch
                    ? (this.preserveSingleSpace(F),
                      this.print_string(this._ch + this.eatString(this._ch)),
                      this.eatWhitespace(!0))
                    : ';' === this._ch
                    ? 0 === B
                      ? (m && (this.outdent(), (m = !1)),
                        (E = !1),
                        (C = !1),
                        this.print_string(this._ch),
                        this.eatWhitespace(!0),
                        '/' !== this._input.peek() &&
                          this._output.add_new_line())
                      : (this.print_string(this._ch),
                        this.eatWhitespace(!0),
                        (this._output.space_before_token = !0))
                    : '(' === this._ch
                    ? this._input.lookBack('url')
                      ? (this.print_string(this._ch),
                        this.eatWhitespace(),
                        B++,
                        this.indent(),
                        (this._ch = this._input.next()),
                        ')' === this._ch || '"' === this._ch || "'" === this._ch
                          ? this._input.back()
                          : this._ch &&
                            (this.print_string(this._ch + this.eatString(')')),
                            B && (B--, this.outdent())))
                      : (this.preserveSingleSpace(F),
                        this.print_string(this._ch),
                        this.eatWhitespace(),
                        B++,
                        this.indent())
                    : ')' === this._ch
                    ? (B && (B--, this.outdent()), this.print_string(this._ch))
                    : ',' === this._ch
                    ? (this.print_string(this._ch),
                      this.eatWhitespace(!0),
                      !this._options.selector_separator_newline ||
                      m ||
                      0 !== B ||
                      C ||
                      E
                        ? (this._output.space_before_token = !0)
                        : this._output.add_new_line())
                    : ('>' !== this._ch &&
                        '+' !== this._ch &&
                        '~' !== this._ch) ||
                      m ||
                      0 !== B
                    ? ']' === this._ch
                      ? this.print_string(this._ch)
                      : '[' === this._ch
                      ? (this.preserveSingleSpace(F),
                        this.print_string(this._ch))
                      : '=' === this._ch
                      ? (this.eatWhitespace(),
                        this.print_string('='),
                        _.test(this._ch) && (this._ch = ''))
                      : '!' !== this._ch || this._input.lookBack('\\')
                      ? (this.preserveSingleSpace(F),
                        this.print_string(this._ch))
                      : (this.print_string(' '), this.print_string(this._ch))
                    : this._options.space_around_combinator
                    ? ((this._output.space_before_token = !0),
                      this.print_string(this._ch),
                      (this._output.space_before_token = !0))
                    : (this.print_string(this._ch),
                      this.eatWhitespace(),
                      this._ch && _.test(this._ch) && (this._ch = ''));
              return this._output.get_code(D);
            }),
            (i.exports.Beautifier = v);
        },
        function (i, a, o) {
          var c = o(6).Options;
          function l(u) {
            c.call(this, u, 'css'),
              (this.selector_separator_newline = this._get_boolean(
                'selector_separator_newline',
                !0
              )),
              (this.newline_between_rules = this._get_boolean(
                'newline_between_rules',
                !0
              ));
            var h = this._get_boolean('space_around_selector_separator');
            this.space_around_combinator =
              this._get_boolean('space_around_combinator') || h;
            var d = this._get_selection_list('brace_style', [
              'collapse',
              'expand',
              'end-expand',
              'none',
              'preserve-inline',
            ]);
            this.brace_style = 'collapse';
            for (var f = 0; f < d.length; f++)
              this.brace_style = 'expand' !== d[f] ? 'collapse' : d[f];
          }
          (l.prototype = new c()), (i.exports.Options = l);
        },
      ],
      t = {},
      r = (function n(i) {
        var a = t[i];
        if (void 0 !== a) return a.exports;
        var o = (t[i] = { exports: {} });
        return e[i](o, o.exports, n), o.exports;
      })(15);
    ji = r;
  })();
  var $i,
    Yi,
    nu = ji;
  function iu(e, t, n) {
    var r = e.getText(),
      i = !0,
      a = 0,
      o = n.tabSize || 4;
    if (t) {
      for (var c = e.offsetAt(t.start), l = c; l > 0 && Ji(r, l - 1); ) l--;
      0 === l || Qi(r, l - 1) ? (c = l) : l < c && (c = l + 1);
      for (var u = e.offsetAt(t.end), h = u; h < r.length && Ji(r, h); ) h++;
      (h === r.length || Qi(r, h)) && (u = h),
        (t = Q.create(e.positionAt(c), e.positionAt(u)));
      var d = r.substring(0, c);
      if (new RegExp(/.*[<][^>]*$/).test(d))
        return [{ range: t, newText: (r = r.substring(c, u)) }];
      if (((i = u === r.length), (r = r.substring(c, u)), 0 !== c)) {
        var f = e.offsetAt(ne.create(t.start.line, 0));
        a = (function ou(e, t, n) {
          for (var r = t, i = 0, a = n.tabSize || 4; r < e.length; ) {
            var o = e.charAt(r);
            if (' ' === o) i++;
            else {
              if ('\t' !== o) break;
              i += a;
            }
            r++;
          }
          return Math.floor(i / a);
        })(e.getText(), f, n);
      }
    } else t = Q.create(ne.create(0, 0), e.positionAt(r.length));
    var g = {
        indent_size: o,
        indent_char: n.insertSpaces ? ' ' : '\t',
        indent_empty_lines: pe(n, 'indentEmptyLines', !1),
        wrap_line_length: pe(n, 'wrapLineLength', 120),
        unformatted: On(n, 'unformatted', void 0),
        content_unformatted: On(n, 'contentUnformatted', void 0),
        indent_inner_html: pe(n, 'indentInnerHtml', !1),
        preserve_newlines: pe(n, 'preserveNewLines', !0),
        max_preserve_newlines: pe(n, 'maxPreserveNewLines', 32786),
        indent_handlebars: pe(n, 'indentHandlebars', !1),
        end_with_newline: i && pe(n, 'endWithNewline', !1),
        extra_liners: On(n, 'extraLiners', void 0),
        wrap_attributes: pe(n, 'wrapAttributes', 'auto'),
        wrap_attributes_indent_size: pe(n, 'wrapAttributesIndentSize', void 0),
        eol: '\n',
        indent_scripts: pe(n, 'indentScripts', 'normal'),
        templating: su(n, 'all'),
        unformatted_content_delimiter: pe(n, 'unformattedContentDelimiter', ''),
      },
      _ = (function ru(e, t) {
        return $i(e, t, tu, nu);
      })(
        (function au(e) {
          return e.replace(/^\s+/, '');
        })(r),
        g
      );
    if (a > 0) {
      var b = n.insertSpaces ? Pi(' ', o * a) : Pi('\t', a);
      (_ = _.split('\n').join('\n' + b)),
        0 === t.start.character && (_ = b + _);
    }
    return [{ range: t, newText: _ }];
  }
  function pe(e, t, n) {
    if (e && e.hasOwnProperty(t)) {
      var r = e[t];
      if (null !== r) return r;
    }
    return n;
  }
  function On(e, t, n) {
    var r = pe(e, t, null);
    return 'string' == typeof r
      ? r.length > 0
        ? r.split(',').map(function (i) {
            return i.trim().toLowerCase();
          })
        : []
      : n;
  }
  function su(e, t) {
    return !0 === pe(e, 'templating', t) ? ['auto'] : ['none'];
  }
  function Qi(e, t) {
    return -1 !== '\r\n'.indexOf(e.charAt(t));
  }
  function Ji(e, t) {
    return -1 !== ' \t'.indexOf(e.charAt(t));
  }
  !(function () {
    var e = [
        ,
        ,
        function (i) {
          function a(l) {
            (this.__parent = l),
              (this.__character_count = 0),
              (this.__indent_count = -1),
              (this.__alignment_count = 0),
              (this.__wrap_point_index = 0),
              (this.__wrap_point_character_count = 0),
              (this.__wrap_point_indent_count = -1),
              (this.__wrap_point_alignment_count = 0),
              (this.__items = []);
          }
          function o(l, u) {
            (this.__cache = ['']),
              (this.__indent_size = l.indent_size),
              (this.__indent_string = l.indent_char),
              l.indent_with_tabs ||
                (this.__indent_string = new Array(l.indent_size + 1).join(
                  l.indent_char
                )),
              (u = u || ''),
              l.indent_level > 0 &&
                (u = new Array(l.indent_level + 1).join(this.__indent_string)),
              (this.__base_string = u),
              (this.__base_string_length = u.length);
          }
          function c(l, u) {
            (this.__indent_cache = new o(l, u)),
              (this.raw = !1),
              (this._end_with_newline = l.end_with_newline),
              (this.indent_size = l.indent_size),
              (this.wrap_line_length = l.wrap_line_length),
              (this.indent_empty_lines = l.indent_empty_lines),
              (this.__lines = []),
              (this.previous_line = null),
              (this.current_line = null),
              (this.next_line = new a(this)),
              (this.space_before_token = !1),
              (this.non_breaking_space = !1),
              (this.previous_token_wrapped = !1),
              this.__add_outputline();
          }
          (a.prototype.clone_empty = function () {
            var l = new a(this.__parent);
            return l.set_indent(this.__indent_count, this.__alignment_count), l;
          }),
            (a.prototype.item = function (l) {
              return l < 0
                ? this.__items[this.__items.length + l]
                : this.__items[l];
            }),
            (a.prototype.has_match = function (l) {
              for (var u = this.__items.length - 1; u >= 0; u--)
                if (this.__items[u].match(l)) return !0;
              return !1;
            }),
            (a.prototype.set_indent = function (l, u) {
              this.is_empty() &&
                ((this.__indent_count = l || 0),
                (this.__alignment_count = u || 0),
                (this.__character_count = this.__parent.get_indent_size(
                  this.__indent_count,
                  this.__alignment_count
                )));
            }),
            (a.prototype._set_wrap_point = function () {
              this.__parent.wrap_line_length &&
                ((this.__wrap_point_index = this.__items.length),
                (this.__wrap_point_character_count = this.__character_count),
                (this.__wrap_point_indent_count =
                  this.__parent.next_line.__indent_count),
                (this.__wrap_point_alignment_count =
                  this.__parent.next_line.__alignment_count));
            }),
            (a.prototype._should_wrap = function () {
              return (
                this.__wrap_point_index &&
                this.__character_count > this.__parent.wrap_line_length &&
                this.__wrap_point_character_count >
                  this.__parent.next_line.__character_count
              );
            }),
            (a.prototype._allow_wrap = function () {
              if (this._should_wrap()) {
                this.__parent.add_new_line();
                var l = this.__parent.current_line;
                return (
                  l.set_indent(
                    this.__wrap_point_indent_count,
                    this.__wrap_point_alignment_count
                  ),
                  (l.__items = this.__items.slice(this.__wrap_point_index)),
                  (this.__items = this.__items.slice(
                    0,
                    this.__wrap_point_index
                  )),
                  (l.__character_count +=
                    this.__character_count - this.__wrap_point_character_count),
                  (this.__character_count = this.__wrap_point_character_count),
                  ' ' === l.__items[0] &&
                    (l.__items.splice(0, 1), (l.__character_count -= 1)),
                  !0
                );
              }
              return !1;
            }),
            (a.prototype.is_empty = function () {
              return 0 === this.__items.length;
            }),
            (a.prototype.last = function () {
              return this.is_empty()
                ? null
                : this.__items[this.__items.length - 1];
            }),
            (a.prototype.push = function (l) {
              this.__items.push(l);
              var u = l.lastIndexOf('\n');
              -1 !== u
                ? (this.__character_count = l.length - u)
                : (this.__character_count += l.length);
            }),
            (a.prototype.pop = function () {
              var l = null;
              return (
                this.is_empty() ||
                  ((l = this.__items.pop()),
                  (this.__character_count -= l.length)),
                l
              );
            }),
            (a.prototype._remove_indent = function () {
              this.__indent_count > 0 &&
                ((this.__indent_count -= 1),
                (this.__character_count -= this.__parent.indent_size));
            }),
            (a.prototype._remove_wrap_indent = function () {
              this.__wrap_point_indent_count > 0 &&
                (this.__wrap_point_indent_count -= 1);
            }),
            (a.prototype.trim = function () {
              for (; ' ' === this.last(); )
                this.__items.pop(), (this.__character_count -= 1);
            }),
            (a.prototype.toString = function () {
              var l = '';
              return (
                this.is_empty()
                  ? this.__parent.indent_empty_lines &&
                    (l = this.__parent.get_indent_string(this.__indent_count))
                  : ((l = this.__parent.get_indent_string(
                      this.__indent_count,
                      this.__alignment_count
                    )),
                    (l += this.__items.join(''))),
                l
              );
            }),
            (o.prototype.get_indent_size = function (l, u) {
              var h = this.__base_string_length;
              return l < 0 && (h = 0), (h += l * this.__indent_size) + (u || 0);
            }),
            (o.prototype.get_indent_string = function (l, u) {
              var h = this.__base_string;
              return (
                (u = u || 0),
                l < 0 && ((l = 0), (h = '')),
                this.__ensure_cache((u += l * this.__indent_size)),
                h + this.__cache[u]
              );
            }),
            (o.prototype.__ensure_cache = function (l) {
              for (; l >= this.__cache.length; ) this.__add_column();
            }),
            (o.prototype.__add_column = function () {
              var l = this.__cache.length,
                u = 0,
                h = '';
              this.__indent_size &&
                l >= this.__indent_size &&
                ((l -=
                  (u = Math.floor(l / this.__indent_size)) *
                  this.__indent_size),
                (h = new Array(u + 1).join(this.__indent_string))),
                l && (h += new Array(l + 1).join(' ')),
                this.__cache.push(h);
            }),
            (c.prototype.__add_outputline = function () {
              (this.previous_line = this.current_line),
                (this.current_line = this.next_line.clone_empty()),
                this.__lines.push(this.current_line);
            }),
            (c.prototype.get_line_number = function () {
              return this.__lines.length;
            }),
            (c.prototype.get_indent_string = function (l, u) {
              return this.__indent_cache.get_indent_string(l, u);
            }),
            (c.prototype.get_indent_size = function (l, u) {
              return this.__indent_cache.get_indent_size(l, u);
            }),
            (c.prototype.is_empty = function () {
              return !this.previous_line && this.current_line.is_empty();
            }),
            (c.prototype.add_new_line = function (l) {
              return !(
                this.is_empty() ||
                (!l && this.just_added_newline()) ||
                (this.raw || this.__add_outputline(), 0)
              );
            }),
            (c.prototype.get_code = function (l) {
              this.trim(!0);
              var u = this.current_line.pop();
              u &&
                ('\n' === u[u.length - 1] && (u = u.replace(/\n+$/g, '')),
                this.current_line.push(u)),
                this._end_with_newline && this.__add_outputline();
              var h = this.__lines.join('\n');
              return '\n' !== l && (h = h.replace(/[\n]/g, l)), h;
            }),
            (c.prototype.set_wrap_point = function () {
              this.current_line._set_wrap_point();
            }),
            (c.prototype.set_indent = function (l, u) {
              return (
                this.next_line.set_indent((l = l || 0), (u = u || 0)),
                this.__lines.length > 1
                  ? (this.current_line.set_indent(l, u), !0)
                  : (this.current_line.set_indent(), !1)
              );
            }),
            (c.prototype.add_raw_token = function (l) {
              for (var u = 0; u < l.newlines; u++) this.__add_outputline();
              this.current_line.set_indent(-1),
                this.current_line.push(l.whitespace_before),
                this.current_line.push(l.text),
                (this.space_before_token = !1),
                (this.non_breaking_space = !1),
                (this.previous_token_wrapped = !1);
            }),
            (c.prototype.add_token = function (l) {
              this.__add_space_before_token(),
                this.current_line.push(l),
                (this.space_before_token = !1),
                (this.non_breaking_space = !1),
                (this.previous_token_wrapped = this.current_line._allow_wrap());
            }),
            (c.prototype.__add_space_before_token = function () {
              this.space_before_token &&
                !this.just_added_newline() &&
                (this.non_breaking_space || this.set_wrap_point(),
                this.current_line.push(' '));
            }),
            (c.prototype.remove_indent = function (l) {
              for (var u = this.__lines.length; l < u; )
                this.__lines[l]._remove_indent(), l++;
              this.current_line._remove_wrap_indent();
            }),
            (c.prototype.trim = function (l) {
              for (
                l = void 0 !== l && l, this.current_line.trim();
                l && this.__lines.length > 1 && this.current_line.is_empty();

              )
                this.__lines.pop(),
                  (this.current_line = this.__lines[this.__lines.length - 1]),
                  this.current_line.trim();
              this.previous_line =
                this.__lines.length > 1
                  ? this.__lines[this.__lines.length - 2]
                  : null;
            }),
            (c.prototype.just_added_newline = function () {
              return this.current_line.is_empty();
            }),
            (c.prototype.just_added_blankline = function () {
              return (
                this.is_empty() ||
                (this.current_line.is_empty() && this.previous_line.is_empty())
              );
            }),
            (c.prototype.ensure_empty_line_above = function (l, u) {
              for (var h = this.__lines.length - 2; h >= 0; ) {
                var d = this.__lines[h];
                if (d.is_empty()) break;
                if (0 !== d.item(0).indexOf(l) && d.item(-1) !== u) {
                  this.__lines.splice(h + 1, 0, new a(this)),
                    (this.previous_line =
                      this.__lines[this.__lines.length - 2]);
                  break;
                }
                h--;
              }
            }),
            (i.exports.Output = c);
        },
        function (i) {
          i.exports.Token = function a(o, c, l, u) {
            (this.type = o),
              (this.text = c),
              (this.comments_before = null),
              (this.newlines = l || 0),
              (this.whitespace_before = u || ''),
              (this.parent = null),
              (this.next = null),
              (this.previous = null),
              (this.opened = null),
              (this.closed = null),
              (this.directives = null);
          };
        },
        ,
        ,
        function (i) {
          function a(l, u) {
            (this.raw_options = o(l, u)),
              (this.disabled = this._get_boolean('disabled')),
              (this.eol = this._get_characters('eol', 'auto')),
              (this.end_with_newline = this._get_boolean('end_with_newline')),
              (this.indent_size = this._get_number('indent_size', 4)),
              (this.indent_char = this._get_characters('indent_char', ' ')),
              (this.indent_level = this._get_number('indent_level')),
              (this.preserve_newlines = this._get_boolean(
                'preserve_newlines',
                !0
              )),
              (this.max_preserve_newlines = this._get_number(
                'max_preserve_newlines',
                32786
              )),
              this.preserve_newlines || (this.max_preserve_newlines = 0),
              (this.indent_with_tabs = this._get_boolean(
                'indent_with_tabs',
                '\t' === this.indent_char
              )),
              this.indent_with_tabs &&
                ((this.indent_char = '\t'),
                1 === this.indent_size && (this.indent_size = 4)),
              (this.wrap_line_length = this._get_number(
                'wrap_line_length',
                this._get_number('max_char')
              )),
              (this.indent_empty_lines =
                this._get_boolean('indent_empty_lines')),
              (this.templating = this._get_selection_list(
                'templating',
                [
                  'auto',
                  'none',
                  'django',
                  'erb',
                  'handlebars',
                  'php',
                  'smarty',
                ],
                ['auto']
              ));
          }
          function o(l, u) {
            var d,
              h = {};
            for (d in (l = c(l))) d !== u && (h[d] = l[d]);
            if (u && l[u]) for (d in l[u]) h[d] = l[u][d];
            return h;
          }
          function c(l) {
            var h,
              u = {};
            for (h in l) u[h.replace(/-/g, '_')] = l[h];
            return u;
          }
          (a.prototype._get_array = function (l, u) {
            var h = this.raw_options[l],
              d = u || [];
            return (
              'object' == typeof h
                ? null !== h &&
                  'function' == typeof h.concat &&
                  (d = h.concat())
                : 'string' == typeof h && (d = h.split(/[^a-zA-Z0-9_\/\-]+/)),
              d
            );
          }),
            (a.prototype._get_boolean = function (l, u) {
              var h = this.raw_options[l];
              return void 0 === h ? !!u : !!h;
            }),
            (a.prototype._get_characters = function (l, u) {
              var h = this.raw_options[l],
                d = u || '';
              return (
                'string' == typeof h &&
                  (d = h
                    .replace(/\\r/, '\r')
                    .replace(/\\n/, '\n')
                    .replace(/\\t/, '\t')),
                d
              );
            }),
            (a.prototype._get_number = function (l, u) {
              var h = this.raw_options[l];
              (u = parseInt(u, 10)), isNaN(u) && (u = 0);
              var d = parseInt(h, 10);
              return isNaN(d) && (d = u), d;
            }),
            (a.prototype._get_selection = function (l, u, h) {
              var d = this._get_selection_list(l, u, h);
              if (1 !== d.length)
                throw new Error(
                  "Invalid Option Value: The option '" +
                    l +
                    "' can only be one of the following values:\n" +
                    u +
                    "\nYou passed in: '" +
                    this.raw_options[l] +
                    "'"
                );
              return d[0];
            }),
            (a.prototype._get_selection_list = function (l, u, h) {
              if (!u || 0 === u.length)
                throw new Error('Selection list cannot be empty.');
              if (!this._is_valid_selection((h = h || [u[0]]), u))
                throw new Error('Invalid Default Value!');
              var d = this._get_array(l, h);
              if (!this._is_valid_selection(d, u))
                throw new Error(
                  "Invalid Option Value: The option '" +
                    l +
                    "' can contain only the following values:\n" +
                    u +
                    "\nYou passed in: '" +
                    this.raw_options[l] +
                    "'"
                );
              return d;
            }),
            (a.prototype._is_valid_selection = function (l, u) {
              return (
                l.length &&
                u.length &&
                !l.some(function (h) {
                  return -1 === u.indexOf(h);
                })
              );
            }),
            (i.exports.Options = a),
            (i.exports.normalizeOpts = c),
            (i.exports.mergeOpts = o);
        },
        ,
        function (i) {
          var a = RegExp.prototype.hasOwnProperty('sticky');
          function o(c) {
            (this.__input = c || ''),
              (this.__input_length = this.__input.length),
              (this.__position = 0);
          }
          (o.prototype.restart = function () {
            this.__position = 0;
          }),
            (o.prototype.back = function () {
              this.__position > 0 && (this.__position -= 1);
            }),
            (o.prototype.hasNext = function () {
              return this.__position < this.__input_length;
            }),
            (o.prototype.next = function () {
              var c = null;
              return (
                this.hasNext() &&
                  ((c = this.__input.charAt(this.__position)),
                  (this.__position += 1)),
                c
              );
            }),
            (o.prototype.peek = function (c) {
              var l = null;
              return (
                (c = c || 0),
                (c += this.__position) >= 0 &&
                  c < this.__input_length &&
                  (l = this.__input.charAt(c)),
                l
              );
            }),
            (o.prototype.__match = function (c, l) {
              c.lastIndex = l;
              var u = c.exec(this.__input);
              return u && !(a && c.sticky) && u.index !== l && (u = null), u;
            }),
            (o.prototype.test = function (c, l) {
              return (
                (l = l || 0),
                (l += this.__position) >= 0 &&
                  l < this.__input_length &&
                  !!this.__match(c, l)
              );
            }),
            (o.prototype.testChar = function (c, l) {
              var u = this.peek(l);
              return (c.lastIndex = 0), null !== u && c.test(u);
            }),
            (o.prototype.match = function (c) {
              var l = this.__match(c, this.__position);
              return l ? (this.__position += l[0].length) : (l = null), l;
            }),
            (o.prototype.read = function (c, l, u) {
              var d,
                h = '';
              return (
                c && (d = this.match(c)) && (h += d[0]),
                l && (d || !c) && (h += this.readUntil(l, u)),
                h
              );
            }),
            (o.prototype.readUntil = function (c, l) {
              var u,
                h = this.__position;
              c.lastIndex = this.__position;
              var d = c.exec(this.__input);
              return (
                d
                  ? ((h = d.index), l && (h += d[0].length))
                  : (h = this.__input_length),
                (u = this.__input.substring(this.__position, h)),
                (this.__position = h),
                u
              );
            }),
            (o.prototype.readUntilAfter = function (c) {
              return this.readUntil(c, !0);
            }),
            (o.prototype.get_regexp = function (c, l) {
              var u = null,
                h = 'g';
              return (
                l && a && (h = 'y'),
                'string' == typeof c && '' !== c
                  ? (u = new RegExp(c, h))
                  : c && (u = new RegExp(c.source, h)),
                u
              );
            }),
            (o.prototype.get_literal_regexp = function (c) {
              return RegExp(c.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
            }),
            (o.prototype.peekUntilAfter = function (c) {
              var l = this.__position,
                u = this.readUntilAfter(c);
              return (this.__position = l), u;
            }),
            (o.prototype.lookBack = function (c) {
              var l = this.__position - 1;
              return (
                l >= c.length &&
                this.__input.substring(l - c.length, l).toLowerCase() === c
              );
            }),
            (i.exports.InputScanner = o);
        },
        function (i, a, o) {
          var c = o(8).InputScanner,
            l = o(3).Token,
            u = o(10).TokenStream,
            h = o(11).WhitespacePattern,
            d = { START: 'TK_START', RAW: 'TK_RAW', EOF: 'TK_EOF' },
            f = function (g, _) {
              (this._input = new c(g)),
                (this._options = _ || {}),
                (this.__tokens = null),
                (this._patterns = {}),
                (this._patterns.whitespace = new h(this._input));
            };
          (f.prototype.tokenize = function () {
            this._input.restart(), (this.__tokens = new u()), this._reset();
            for (
              var g, _ = new l(d.START, ''), b = null, y = [], k = new u();
              _.type !== d.EOF;

            ) {
              for (g = this._get_next_token(_, b); this._is_comment(g); )
                k.add(g), (g = this._get_next_token(_, b));
              k.isEmpty() || ((g.comments_before = k), (k = new u())),
                (g.parent = b),
                this._is_opening(g)
                  ? (y.push(b), (b = g))
                  : b &&
                    this._is_closing(g, b) &&
                    ((g.opened = b),
                    (b.closed = g),
                    (b = y.pop()),
                    (g.parent = b)),
                (g.previous = _),
                (_.next = g),
                this.__tokens.add(g),
                (_ = g);
            }
            return this.__tokens;
          }),
            (f.prototype._is_first_token = function () {
              return this.__tokens.isEmpty();
            }),
            (f.prototype._reset = function () {}),
            (f.prototype._get_next_token = function (g, _) {
              this._readWhitespace();
              var b = this._input.read(/.+/g);
              return b
                ? this._create_token(d.RAW, b)
                : this._create_token(d.EOF, '');
            }),
            (f.prototype._is_comment = function (g) {
              return !1;
            }),
            (f.prototype._is_opening = function (g) {
              return !1;
            }),
            (f.prototype._is_closing = function (g, _) {
              return !1;
            }),
            (f.prototype._create_token = function (g, _) {
              return new l(
                g,
                _,
                this._patterns.whitespace.newline_count,
                this._patterns.whitespace.whitespace_before_token
              );
            }),
            (f.prototype._readWhitespace = function () {
              return this._patterns.whitespace.read();
            }),
            (i.exports.Tokenizer = f),
            (i.exports.TOKEN = d);
        },
        function (i) {
          function a(o) {
            (this.__tokens = []),
              (this.__tokens_length = this.__tokens.length),
              (this.__position = 0),
              (this.__parent_token = o);
          }
          (a.prototype.restart = function () {
            this.__position = 0;
          }),
            (a.prototype.isEmpty = function () {
              return 0 === this.__tokens_length;
            }),
            (a.prototype.hasNext = function () {
              return this.__position < this.__tokens_length;
            }),
            (a.prototype.next = function () {
              var o = null;
              return (
                this.hasNext() &&
                  ((o = this.__tokens[this.__position]),
                  (this.__position += 1)),
                o
              );
            }),
            (a.prototype.peek = function (o) {
              var c = null;
              return (
                (o = o || 0),
                (o += this.__position) >= 0 &&
                  o < this.__tokens_length &&
                  (c = this.__tokens[o]),
                c
              );
            }),
            (a.prototype.add = function (o) {
              this.__parent_token && (o.parent = this.__parent_token),
                this.__tokens.push(o),
                (this.__tokens_length += 1);
            }),
            (i.exports.TokenStream = a);
        },
        function (i, a, o) {
          var c = o(12).Pattern;
          function l(u, h) {
            c.call(this, u, h),
              h
                ? (this._line_regexp = this._input.get_regexp(h._line_regexp))
                : this.__set_whitespace_patterns('', ''),
              (this.newline_count = 0),
              (this.whitespace_before_token = '');
          }
          ((l.prototype = new c()).__set_whitespace_patterns = function (u, h) {
            (this._match_pattern = this._input.get_regexp(
              '[' + (u += '\\t ') + (h += '\\n\\r') + ']+',
              !0
            )),
              (this._newline_regexp = this._input.get_regexp(
                '\\r\\n|[' + h + ']'
              ));
          }),
            (l.prototype.read = function () {
              (this.newline_count = 0), (this.whitespace_before_token = '');
              var u = this._input.read(this._match_pattern);
              if (' ' === u) this.whitespace_before_token = ' ';
              else if (u) {
                var h = this.__split(this._newline_regexp, u);
                (this.newline_count = h.length - 1),
                  (this.whitespace_before_token = h[this.newline_count]);
              }
              return u;
            }),
            (l.prototype.matching = function (u, h) {
              var d = this._create();
              return d.__set_whitespace_patterns(u, h), d._update(), d;
            }),
            (l.prototype._create = function () {
              return new l(this._input, this);
            }),
            (l.prototype.__split = function (u, h) {
              u.lastIndex = 0;
              for (var d = 0, f = [], g = u.exec(h); g; )
                f.push(h.substring(d, g.index)),
                  (d = g.index + g[0].length),
                  (g = u.exec(h));
              return f.push(d < h.length ? h.substring(d, h.length) : ''), f;
            }),
            (i.exports.WhitespacePattern = l);
        },
        function (i) {
          function a(o, c) {
            (this._input = o),
              (this._starting_pattern = null),
              (this._match_pattern = null),
              (this._until_pattern = null),
              (this._until_after = !1),
              c &&
                ((this._starting_pattern = this._input.get_regexp(
                  c._starting_pattern,
                  !0
                )),
                (this._match_pattern = this._input.get_regexp(
                  c._match_pattern,
                  !0
                )),
                (this._until_pattern = this._input.get_regexp(
                  c._until_pattern
                )),
                (this._until_after = c._until_after));
          }
          (a.prototype.read = function () {
            var o = this._input.read(this._starting_pattern);
            return (
              (!this._starting_pattern || o) &&
                (o += this._input.read(
                  this._match_pattern,
                  this._until_pattern,
                  this._until_after
                )),
              o
            );
          }),
            (a.prototype.read_match = function () {
              return this._input.match(this._match_pattern);
            }),
            (a.prototype.until_after = function (o) {
              var c = this._create();
              return (
                (c._until_after = !0),
                (c._until_pattern = this._input.get_regexp(o)),
                c._update(),
                c
              );
            }),
            (a.prototype.until = function (o) {
              var c = this._create();
              return (
                (c._until_after = !1),
                (c._until_pattern = this._input.get_regexp(o)),
                c._update(),
                c
              );
            }),
            (a.prototype.starting_with = function (o) {
              var c = this._create();
              return (
                (c._starting_pattern = this._input.get_regexp(o, !0)),
                c._update(),
                c
              );
            }),
            (a.prototype.matching = function (o) {
              var c = this._create();
              return (
                (c._match_pattern = this._input.get_regexp(o, !0)),
                c._update(),
                c
              );
            }),
            (a.prototype._create = function () {
              return new a(this._input, this);
            }),
            (a.prototype._update = function () {}),
            (i.exports.Pattern = a);
        },
        function (i) {
          function a(o, c) {
            (o = 'string' == typeof o ? o : o.source),
              (c = 'string' == typeof c ? c : c.source),
              (this.__directives_block_pattern = new RegExp(
                o + / beautify( \w+[:]\w+)+ /.source + c,
                'g'
              )),
              (this.__directive_pattern = / (\w+)[:](\w+)/g),
              (this.__directives_end_ignore_pattern = new RegExp(
                o + /\sbeautify\signore:end\s/.source + c,
                'g'
              ));
          }
          (a.prototype.get_directives = function (o) {
            if (!o.match(this.__directives_block_pattern)) return null;
            var c = {};
            this.__directive_pattern.lastIndex = 0;
            for (var l = this.__directive_pattern.exec(o); l; )
              (c[l[1]] = l[2]), (l = this.__directive_pattern.exec(o));
            return c;
          }),
            (a.prototype.readIgnored = function (o) {
              return o.readUntilAfter(this.__directives_end_ignore_pattern);
            }),
            (i.exports.Directives = a);
        },
        function (i, a, o) {
          var c = o(12).Pattern,
            l = { django: !1, erb: !1, handlebars: !1, php: !1, smarty: !1 };
          function u(h, d) {
            c.call(this, h, d),
              (this.__template_pattern = null),
              (this._disabled = Object.assign({}, l)),
              (this._excluded = Object.assign({}, l)),
              d &&
                ((this.__template_pattern = this._input.get_regexp(
                  d.__template_pattern
                )),
                (this._excluded = Object.assign(this._excluded, d._excluded)),
                (this._disabled = Object.assign(this._disabled, d._disabled)));
            var f = new c(h);
            this.__patterns = {
              handlebars_comment: f.starting_with(/{{!--/).until_after(/--}}/),
              handlebars_unescaped: f.starting_with(/{{{/).until_after(/}}}/),
              handlebars: f.starting_with(/{{/).until_after(/}}/),
              php: f.starting_with(/<\?(?:[= ]|php)/).until_after(/\?>/),
              erb: f.starting_with(/<%[^%]/).until_after(/[^%]%>/),
              django: f.starting_with(/{%/).until_after(/%}/),
              django_value: f.starting_with(/{{/).until_after(/}}/),
              django_comment: f.starting_with(/{#/).until_after(/#}/),
              smarty: f.starting_with(/{(?=[^}{\s\n])/).until_after(/[^\s\n]}/),
              smarty_comment: f.starting_with(/{\*/).until_after(/\*}/),
              smarty_literal: f
                .starting_with(/{literal}/)
                .until_after(/{\/literal}/),
            };
          }
          ((u.prototype = new c())._create = function () {
            return new u(this._input, this);
          }),
            (u.prototype._update = function () {
              this.__set_templated_pattern();
            }),
            (u.prototype.disable = function (h) {
              var d = this._create();
              return (d._disabled[h] = !0), d._update(), d;
            }),
            (u.prototype.read_options = function (h) {
              var d = this._create();
              for (var f in l) d._disabled[f] = -1 === h.templating.indexOf(f);
              return d._update(), d;
            }),
            (u.prototype.exclude = function (h) {
              var d = this._create();
              return (d._excluded[h] = !0), d._update(), d;
            }),
            (u.prototype.read = function () {
              var h = '';
              h = this._match_pattern
                ? this._input.read(this._starting_pattern)
                : this._input.read(
                    this._starting_pattern,
                    this.__template_pattern
                  );
              for (var d = this._read_template(); d; )
                (h += d +=
                  this._match_pattern
                    ? this._input.read(this._match_pattern)
                    : this._input.readUntil(this.__template_pattern)),
                  (d = this._read_template());
              return (
                this._until_after &&
                  (h += this._input.readUntilAfter(this._until_pattern)),
                h
              );
            }),
            (u.prototype.__set_templated_pattern = function () {
              var h = [];
              this._disabled.php ||
                h.push(this.__patterns.php._starting_pattern.source),
                this._disabled.handlebars ||
                  h.push(this.__patterns.handlebars._starting_pattern.source),
                this._disabled.erb ||
                  h.push(this.__patterns.erb._starting_pattern.source),
                this._disabled.django ||
                  (h.push(this.__patterns.django._starting_pattern.source),
                  h.push(this.__patterns.django_value._starting_pattern.source),
                  h.push(
                    this.__patterns.django_comment._starting_pattern.source
                  )),
                this._disabled.smarty ||
                  h.push(this.__patterns.smarty._starting_pattern.source),
                this._until_pattern && h.push(this._until_pattern.source),
                (this.__template_pattern = this._input.get_regexp(
                  '(?:' + h.join('|') + ')'
                ));
            }),
            (u.prototype._read_template = function () {
              var h = '',
                d = this._input.peek();
              if ('<' === d) {
                var f = this._input.peek(1);
                !this._disabled.php &&
                  !this._excluded.php &&
                  '?' === f &&
                  (h = h || this.__patterns.php.read()),
                  !this._disabled.erb &&
                    !this._excluded.erb &&
                    '%' === f &&
                    (h = h || this.__patterns.erb.read());
              } else
                '{' === d &&
                  (!this._disabled.handlebars &&
                    !this._excluded.handlebars &&
                    (h =
                      (h =
                        (h = h || this.__patterns.handlebars_comment.read()) ||
                        this.__patterns.handlebars_unescaped.read()) ||
                      this.__patterns.handlebars.read()),
                  this._disabled.django ||
                    (!this._excluded.django &&
                      !this._excluded.handlebars &&
                      (h = h || this.__patterns.django_value.read()),
                    this._excluded.django ||
                      (h =
                        (h = h || this.__patterns.django_comment.read()) ||
                        this.__patterns.django.read())),
                  this._disabled.smarty ||
                    (this._disabled.django &&
                      this._disabled.handlebars &&
                      (h =
                        (h =
                          (h = h || this.__patterns.smarty_comment.read()) ||
                          this.__patterns.smarty_literal.read()) ||
                        this.__patterns.smarty.read())));
              return h;
            }),
            (i.exports.TemplatablePattern = u);
        },
        ,
        ,
        ,
        function (i, a, o) {
          var c = o(19).Beautifier,
            l = o(20).Options;
          (i.exports = function u(h, d, f, g) {
            return new c(h, d, f, g).beautify();
          }),
            (i.exports.defaultOptions = function () {
              return new l();
            });
        },
        function (i, a, o) {
          var c = o(20).Options,
            l = o(2).Output,
            u = o(21).Tokenizer,
            h = o(21).TOKEN,
            d = /\r\n|[\r\n]/,
            f = /\r\n|[\r\n]/g,
            g = function (p, m) {
              (this.indent_level = 0),
                (this.alignment_size = 0),
                (this.max_preserve_newlines = p.max_preserve_newlines),
                (this.preserve_newlines = p.preserve_newlines),
                (this._output = new l(p, m));
            };
          (g.prototype.current_line_has_match = function (p) {
            return this._output.current_line.has_match(p);
          }),
            (g.prototype.set_space_before_token = function (p, m) {
              (this._output.space_before_token = p),
                (this._output.non_breaking_space = m);
            }),
            (g.prototype.set_wrap_point = function () {
              this._output.set_indent(this.indent_level, this.alignment_size),
                this._output.set_wrap_point();
            }),
            (g.prototype.add_raw_token = function (p) {
              this._output.add_raw_token(p);
            }),
            (g.prototype.print_preserved_newlines = function (p) {
              var m = 0;
              p.type !== h.TEXT &&
                p.previous.type !== h.TEXT &&
                (m = p.newlines ? 1 : 0),
                this.preserve_newlines &&
                  (m =
                    p.newlines < this.max_preserve_newlines + 1
                      ? p.newlines
                      : this.max_preserve_newlines + 1);
              for (var w = 0; w < m; w++) this.print_newline(w > 0);
              return 0 !== m;
            }),
            (g.prototype.traverse_whitespace = function (p) {
              return !(
                (!p.whitespace_before && !p.newlines) ||
                (this.print_preserved_newlines(p) ||
                  (this._output.space_before_token = !0),
                0)
              );
            }),
            (g.prototype.previous_token_wrapped = function () {
              return this._output.previous_token_wrapped;
            }),
            (g.prototype.print_newline = function (p) {
              this._output.add_new_line(p);
            }),
            (g.prototype.print_token = function (p) {
              p.text &&
                (this._output.set_indent(
                  this.indent_level,
                  this.alignment_size
                ),
                this._output.add_token(p.text));
            }),
            (g.prototype.indent = function () {
              this.indent_level++;
            }),
            (g.prototype.get_full_indent = function (p) {
              return (p = this.indent_level + (p || 0)) < 1
                ? ''
                : this._output.get_indent_string(p);
            });
          function y(p, m) {
            return -1 !== m.indexOf(p);
          }
          function k(p, m, w) {
            (this.parent = p || null),
              (this.tag = m ? m.tag_name : ''),
              (this.indent_level = w || 0),
              (this.parser_token = m || null);
          }
          function v(p) {
            (this._printer = p), (this._current_frame = null);
          }
          function L(p, m, w, E) {
            (this._source_text = p || ''),
              (m = m || {}),
              (this._js_beautify = w),
              (this._css_beautify = E),
              (this._tag_stack = null);
            var C = new c(m, 'html');
            (this._options = C),
              (this._is_wrap_attributes_force =
                'force' === this._options.wrap_attributes.substr(0, 5)),
              (this._is_wrap_attributes_force_expand_multiline =
                'force-expand-multiline' === this._options.wrap_attributes),
              (this._is_wrap_attributes_force_aligned =
                'force-aligned' === this._options.wrap_attributes),
              (this._is_wrap_attributes_aligned_multiple =
                'aligned-multiple' === this._options.wrap_attributes),
              (this._is_wrap_attributes_preserve =
                'preserve' === this._options.wrap_attributes.substr(0, 8)),
              (this._is_wrap_attributes_preserve_aligned =
                'preserve-aligned' === this._options.wrap_attributes);
          }
          (v.prototype.get_parser_token = function () {
            return this._current_frame
              ? this._current_frame.parser_token
              : null;
          }),
            (v.prototype.record_tag = function (p) {
              var m = new k(this._current_frame, p, this._printer.indent_level);
              this._current_frame = m;
            }),
            (v.prototype._try_pop_frame = function (p) {
              var m = null;
              return (
                p &&
                  ((m = p.parser_token),
                  (this._printer.indent_level = p.indent_level),
                  (this._current_frame = p.parent)),
                m
              );
            }),
            (v.prototype._get_frame = function (p, m) {
              for (
                var w = this._current_frame;
                w && -1 === p.indexOf(w.tag);

              ) {
                if (m && -1 !== m.indexOf(w.tag)) {
                  w = null;
                  break;
                }
                w = w.parent;
              }
              return w;
            }),
            (v.prototype.try_pop = function (p, m) {
              var w = this._get_frame([p], m);
              return this._try_pop_frame(w);
            }),
            (v.prototype.indent_to_tag = function (p) {
              var m = this._get_frame(p);
              m && (this._printer.indent_level = m.indent_level);
            }),
            (L.prototype.beautify = function () {
              if (this._options.disabled) return this._source_text;
              var p = this._source_text,
                m = this._options.eol;
              'auto' === this._options.eol &&
                ((m = '\n'), p && d.test(p) && (m = p.match(d)[0]));
              var w = (p = p.replace(f, '\n')).match(/^[\t ]*/)[0],
                E = { text: '', type: '' },
                C = new D(),
                S = new g(this._options, w),
                z = new u(p, this._options).tokenize();
              this._tag_stack = new v(S);
              for (var F = null, P = z.next(); P.type !== h.EOF; )
                P.type === h.TAG_OPEN || P.type === h.COMMENT
                  ? (C = F = this._handle_tag_open(S, P, C, E))
                  : P.type === h.ATTRIBUTE ||
                    P.type === h.EQUALS ||
                    P.type === h.VALUE ||
                    (P.type === h.TEXT && !C.tag_complete)
                  ? (F = this._handle_inside_tag(S, P, C, z))
                  : P.type === h.TAG_CLOSE
                  ? (F = this._handle_tag_close(S, P, C))
                  : P.type === h.TEXT
                  ? (F = this._handle_text(S, P, C))
                  : S.add_raw_token(P),
                  (E = F),
                  (P = z.next());
              return S._output.get_code(m);
            }),
            (L.prototype._handle_tag_close = function (p, m, w) {
              var E = { text: m.text, type: m.type };
              return (
                (p.alignment_size = 0),
                (w.tag_complete = !0),
                p.set_space_before_token(
                  m.newlines || '' !== m.whitespace_before,
                  !0
                ),
                w.is_unformatted
                  ? p.add_raw_token(m)
                  : ('<' === w.tag_start_char &&
                      (p.set_space_before_token('/' === m.text[0], !0),
                      this._is_wrap_attributes_force_expand_multiline &&
                        w.has_wrapped_attrs &&
                        p.print_newline(!1)),
                    p.print_token(m)),
                w.indent_content &&
                  !(w.is_unformatted || w.is_content_unformatted) &&
                  (p.indent(), (w.indent_content = !1)),
                !w.is_inline_element &&
                  !(w.is_unformatted || w.is_content_unformatted) &&
                  p.set_wrap_point(),
                E
              );
            }),
            (L.prototype._handle_inside_tag = function (p, m, w, E) {
              var C = w.has_wrapped_attrs,
                S = { text: m.text, type: m.type };
              if (
                (p.set_space_before_token(
                  m.newlines || '' !== m.whitespace_before,
                  !0
                ),
                w.is_unformatted)
              )
                p.add_raw_token(m);
              else if ('{' === w.tag_start_char && m.type === h.TEXT)
                p.print_preserved_newlines(m)
                  ? ((m.newlines = 0), p.add_raw_token(m))
                  : p.print_token(m);
              else {
                if (
                  (m.type === h.ATTRIBUTE
                    ? (p.set_space_before_token(!0), (w.attr_count += 1))
                    : (m.type === h.EQUALS ||
                        (m.type === h.VALUE && m.previous.type === h.EQUALS)) &&
                      p.set_space_before_token(!1),
                  m.type === h.ATTRIBUTE &&
                    '<' === w.tag_start_char &&
                    ((this._is_wrap_attributes_preserve ||
                      this._is_wrap_attributes_preserve_aligned) &&
                      (p.traverse_whitespace(m), (C = C || 0 !== m.newlines)),
                    this._is_wrap_attributes_force))
                ) {
                  var z = w.attr_count > 1;
                  if (
                    this._is_wrap_attributes_force_expand_multiline &&
                    1 === w.attr_count
                  ) {
                    var q,
                      F = !0,
                      P = 0;
                    do {
                      if ((q = E.peek(P)).type === h.ATTRIBUTE) {
                        F = !1;
                        break;
                      }
                      P += 1;
                    } while (
                      P < 4 &&
                      q.type !== h.EOF &&
                      q.type !== h.TAG_CLOSE
                    );
                    z = !F;
                  }
                  z && (p.print_newline(!1), (C = !0));
                }
                p.print_token(m),
                  (C = C || p.previous_token_wrapped()),
                  (w.has_wrapped_attrs = C);
              }
              return S;
            }),
            (L.prototype._handle_text = function (p, m, w) {
              var E = { text: m.text, type: 'TK_CONTENT' };
              return (
                w.custom_beautifier_name
                  ? this._print_custom_beatifier_text(p, m, w)
                  : w.is_unformatted || w.is_content_unformatted
                  ? p.add_raw_token(m)
                  : (p.traverse_whitespace(m), p.print_token(m)),
                E
              );
            }),
            (L.prototype._print_custom_beatifier_text = function (p, m, w) {
              var E = this;
              if ('' !== m.text) {
                var S,
                  C = m.text,
                  z = 1,
                  F = '',
                  P = '';
                'javascript' === w.custom_beautifier_name &&
                'function' == typeof this._js_beautify
                  ? (S = this._js_beautify)
                  : 'css' === w.custom_beautifier_name &&
                    'function' == typeof this._css_beautify
                  ? (S = this._css_beautify)
                  : 'html' === w.custom_beautifier_name &&
                    (S = function (R, N) {
                      return new L(
                        R,
                        N,
                        E._js_beautify,
                        E._css_beautify
                      ).beautify();
                    }),
                  'keep' === this._options.indent_scripts
                    ? (z = 0)
                    : 'separate' === this._options.indent_scripts &&
                      (z = -p.indent_level);
                var q = p.get_full_indent(z);
                if (
                  ((C = C.replace(/\n[ \t]*$/, '')),
                  'html' !== w.custom_beautifier_name &&
                    '<' === C[0] &&
                    C.match(/^(<!--|<!\[CDATA\[)/))
                ) {
                  var x =
                    /^(<!--[^\n]*|<!\[CDATA\[)(\n?)([ \t\n]*)([\s\S]*)(-->|]]>)$/.exec(
                      C
                    );
                  if (!x) return void p.add_raw_token(m);
                  (F = q + x[1] + '\n'),
                    x[5] && (P = q + x[5]),
                    (C = (C = x[4]).replace(/\n[ \t]*$/, '')),
                    (x[2] || -1 !== x[3].indexOf('\n')) &&
                      (x = x[3].match(/[ \t]+$/)) &&
                      (m.whitespace_before = x[0]);
                }
                if (C)
                  if (S) {
                    var T = function () {
                      this.eol = '\n';
                    };
                    (T.prototype = this._options.raw_options),
                      (C = S(q + C, new T()));
                  } else {
                    var U = m.whitespace_before;
                    U &&
                      (C = C.replace(new RegExp('\n(' + U + ')?', 'g'), '\n')),
                      (C = q + C.replace(/\n/g, '\n' + q));
                  }
                F && (C = C ? F + C + '\n' + P : F + P),
                  p.print_newline(!1),
                  C &&
                    ((m.text = C),
                    (m.whitespace_before = ''),
                    (m.newlines = 0),
                    p.add_raw_token(m),
                    p.print_newline(!0));
              }
            }),
            (L.prototype._handle_tag_open = function (p, m, w, E) {
              var C = this._get_tag_open_token(m);
              return (
                (!w.is_unformatted && !w.is_content_unformatted) ||
                w.is_empty_element ||
                m.type !== h.TAG_OPEN ||
                0 !== m.text.indexOf('</')
                  ? (p.traverse_whitespace(m),
                    this._set_tag_position(p, m, C, w, E),
                    C.is_inline_element || p.set_wrap_point(),
                    p.print_token(m))
                  : (p.add_raw_token(m),
                    (C.start_tag_token = this._tag_stack.try_pop(C.tag_name))),
                (this._is_wrap_attributes_force_aligned ||
                  this._is_wrap_attributes_aligned_multiple ||
                  this._is_wrap_attributes_preserve_aligned) &&
                  (C.alignment_size = m.text.length + 1),
                !C.tag_complete &&
                  !C.is_unformatted &&
                  (p.alignment_size = C.alignment_size),
                C
              );
            });
          var D = function (p, m) {
            var w;
            (this.parent = p || null),
              (this.text = ''),
              (this.type = 'TK_TAG_OPEN'),
              (this.tag_name = ''),
              (this.is_inline_element = !1),
              (this.is_unformatted = !1),
              (this.is_content_unformatted = !1),
              (this.is_empty_element = !1),
              (this.is_start_tag = !1),
              (this.is_end_tag = !1),
              (this.indent_content = !1),
              (this.multiline_content = !1),
              (this.custom_beautifier_name = null),
              (this.start_tag_token = null),
              (this.attr_count = 0),
              (this.has_wrapped_attrs = !1),
              (this.alignment_size = 0),
              (this.tag_complete = !1),
              (this.tag_start_char = ''),
              (this.tag_check = ''),
              m
                ? ((this.tag_start_char = m.text[0]),
                  (this.text = m.text),
                  '<' === this.tag_start_char
                    ? ((w = m.text.match(/^<([^\s>]*)/)),
                      (this.tag_check = w ? w[1] : ''))
                    : ((w = m.text.match(/^{{(?:[\^]|#\*?)?([^\s}]+)/)),
                      (this.tag_check = w ? w[1] : ''),
                      '{{#>' === m.text &&
                        '>' === this.tag_check &&
                        null !== m.next &&
                        (this.tag_check = m.next.text)),
                  (this.tag_check = this.tag_check.toLowerCase()),
                  m.type === h.COMMENT && (this.tag_complete = !0),
                  (this.is_start_tag = '/' !== this.tag_check.charAt(0)),
                  (this.tag_name = this.is_start_tag
                    ? this.tag_check
                    : this.tag_check.substr(1)),
                  (this.is_end_tag =
                    !this.is_start_tag || (m.closed && '/>' === m.closed.text)),
                  (this.is_end_tag =
                    this.is_end_tag ||
                    ('{' === this.tag_start_char &&
                      (this.text.length < 3 ||
                        /[^#\^]/.test(this.text.charAt(2))))))
                : (this.tag_complete = !0);
          };
          (L.prototype._get_tag_open_token = function (p) {
            var m = new D(this._tag_stack.get_parser_token(), p);
            return (
              (m.alignment_size = this._options.wrap_attributes_indent_size),
              (m.is_end_tag =
                m.is_end_tag || y(m.tag_check, this._options.void_elements)),
              (m.is_empty_element =
                m.tag_complete || (m.is_start_tag && m.is_end_tag)),
              (m.is_unformatted =
                !m.tag_complete && y(m.tag_check, this._options.unformatted)),
              (m.is_content_unformatted =
                !m.is_empty_element &&
                y(m.tag_check, this._options.content_unformatted)),
              (m.is_inline_element =
                y(m.tag_name, this._options.inline) ||
                '{' === m.tag_start_char),
              m
            );
          }),
            (L.prototype._set_tag_position = function (p, m, w, E, C) {
              if (
                (w.is_empty_element ||
                  (w.is_end_tag
                    ? (w.start_tag_token = this._tag_stack.try_pop(w.tag_name))
                    : (this._do_optional_end_element(w) &&
                        (w.is_inline_element || p.print_newline(!1)),
                      this._tag_stack.record_tag(w),
                      ('script' === w.tag_name || 'style' === w.tag_name) &&
                        !(w.is_unformatted || w.is_content_unformatted) &&
                        (w.custom_beautifier_name = (function (p, m) {
                          var w = null,
                            E = null;
                          return m.closed
                            ? ('script' === p
                                ? (w = 'text/javascript')
                                : 'style' === p && (w = 'text/css'),
                              (w =
                                (function (p) {
                                  for (
                                    var m = null, w = p.next;
                                    w.type !== h.EOF && p.closed !== w;

                                  ) {
                                    if (
                                      w.type === h.ATTRIBUTE &&
                                      'type' === w.text
                                    ) {
                                      w.next &&
                                        w.next.type === h.EQUALS &&
                                        w.next.next &&
                                        w.next.next.type === h.VALUE &&
                                        (m = w.next.next.text);
                                      break;
                                    }
                                    w = w.next;
                                  }
                                  return m;
                                })(m) || w),
                              w.search('text/css') > -1
                                ? (E = 'css')
                                : w.search(
                                    /module|((text|application|dojo)\/(x-)?(javascript|ecmascript|jscript|livescript|(ld\+)?json|method|aspect))/
                                  ) > -1
                                ? (E = 'javascript')
                                : w.search(
                                    /(text|application|dojo)\/(x-)?(html)/
                                  ) > -1
                                ? (E = 'html')
                                : w.search(/test\/null/) > -1 && (E = 'null'),
                              E)
                            : null;
                        })(w.tag_check, m)))),
                y(w.tag_check, this._options.extra_liners) &&
                  (p.print_newline(!1),
                  p._output.just_added_blankline() || p.print_newline(!0)),
                w.is_empty_element)
              )
                '{' === w.tag_start_char &&
                  'else' === w.tag_check &&
                  (this._tag_stack.indent_to_tag(['if', 'unless', 'each']),
                  (w.indent_content = !0),
                  p.current_line_has_match(/{{#if/) || p.print_newline(!1)),
                  ('!--' === w.tag_name &&
                    C.type === h.TAG_CLOSE &&
                    E.is_end_tag &&
                    -1 === w.text.indexOf('\n')) ||
                    (w.is_inline_element ||
                      w.is_unformatted ||
                      p.print_newline(!1),
                    this._calcluate_parent_multiline(p, w));
              else if (w.is_end_tag) {
                var z = !1;
                (z =
                  (z =
                    w.start_tag_token && w.start_tag_token.multiline_content) ||
                  (!w.is_inline_element &&
                    !(E.is_inline_element || E.is_unformatted) &&
                    !(C.type === h.TAG_CLOSE && w.start_tag_token === E) &&
                    'TK_CONTENT' !== C.type)),
                  (w.is_content_unformatted || w.is_unformatted) && (z = !1),
                  z && p.print_newline(!1);
              } else
                (w.indent_content = !w.custom_beautifier_name),
                  '<' === w.tag_start_char &&
                    ('html' === w.tag_name
                      ? (w.indent_content = this._options.indent_inner_html)
                      : 'head' === w.tag_name
                      ? (w.indent_content =
                          this._options.indent_head_inner_html)
                      : 'body' === w.tag_name &&
                        (w.indent_content =
                          this._options.indent_body_inner_html)),
                  !(w.is_inline_element || w.is_unformatted) &&
                    ('TK_CONTENT' !== C.type || w.is_content_unformatted) &&
                    p.print_newline(!1),
                  this._calcluate_parent_multiline(p, w);
            }),
            (L.prototype._calcluate_parent_multiline = function (p, m) {
              m.parent &&
                p._output.just_added_newline() &&
                ((!m.is_inline_element && !m.is_unformatted) ||
                  !m.parent.is_inline_element) &&
                (m.parent.multiline_content = !0);
            });
          var H = [
              'address',
              'article',
              'aside',
              'blockquote',
              'details',
              'div',
              'dl',
              'fieldset',
              'figcaption',
              'figure',
              'footer',
              'form',
              'h1',
              'h2',
              'h3',
              'h4',
              'h5',
              'h6',
              'header',
              'hr',
              'main',
              'nav',
              'ol',
              'p',
              'pre',
              'section',
              'table',
              'ul',
            ],
            B = ['a', 'audio', 'del', 'ins', 'map', 'noscript', 'video'];
          (L.prototype._do_optional_end_element = function (p) {
            var m = null;
            if (!p.is_empty_element && p.is_start_tag && p.parent) {
              if ('body' === p.tag_name)
                m = m || this._tag_stack.try_pop('head');
              else if ('li' === p.tag_name)
                m = m || this._tag_stack.try_pop('li', ['ol', 'ul']);
              else if ('dd' === p.tag_name || 'dt' === p.tag_name)
                m =
                  (m = m || this._tag_stack.try_pop('dt', ['dl'])) ||
                  this._tag_stack.try_pop('dd', ['dl']);
              else if (
                'p' === p.parent.tag_name &&
                -1 !== H.indexOf(p.tag_name)
              ) {
                var w = p.parent.parent;
                (!w || -1 === B.indexOf(w.tag_name)) &&
                  (m = m || this._tag_stack.try_pop('p'));
              } else
                'rp' === p.tag_name || 'rt' === p.tag_name
                  ? (m =
                      (m =
                        m || this._tag_stack.try_pop('rt', ['ruby', 'rtc'])) ||
                      this._tag_stack.try_pop('rp', ['ruby', 'rtc']))
                  : 'optgroup' === p.tag_name
                  ? (m = m || this._tag_stack.try_pop('optgroup', ['select']))
                  : 'option' === p.tag_name
                  ? (m =
                      m ||
                      this._tag_stack.try_pop('option', [
                        'select',
                        'datalist',
                        'optgroup',
                      ]))
                  : 'colgroup' === p.tag_name
                  ? (m = m || this._tag_stack.try_pop('caption', ['table']))
                  : 'thead' === p.tag_name
                  ? (m =
                      (m =
                        m || this._tag_stack.try_pop('caption', ['table'])) ||
                      this._tag_stack.try_pop('colgroup', ['table']))
                  : 'tbody' === p.tag_name || 'tfoot' === p.tag_name
                  ? (m =
                      (m =
                        (m =
                          (m =
                            m ||
                            this._tag_stack.try_pop('caption', ['table'])) ||
                          this._tag_stack.try_pop('colgroup', ['table'])) ||
                        this._tag_stack.try_pop('thead', ['table'])) ||
                      this._tag_stack.try_pop('tbody', ['table']))
                  : 'tr' === p.tag_name
                  ? (m =
                      (m =
                        (m =
                          m || this._tag_stack.try_pop('caption', ['table'])) ||
                        this._tag_stack.try_pop('colgroup', ['table'])) ||
                      this._tag_stack.try_pop('tr', [
                        'table',
                        'thead',
                        'tbody',
                        'tfoot',
                      ]))
                  : ('th' === p.tag_name || 'td' === p.tag_name) &&
                    (m =
                      (m =
                        m ||
                        this._tag_stack.try_pop('td', [
                          'table',
                          'thead',
                          'tbody',
                          'tfoot',
                          'tr',
                        ])) ||
                      this._tag_stack.try_pop('th', [
                        'table',
                        'thead',
                        'tbody',
                        'tfoot',
                        'tr',
                      ]));
              return (p.parent = this._tag_stack.get_parser_token()), m;
            }
          }),
            (i.exports.Beautifier = L);
        },
        function (i, a, o) {
          var c = o(6).Options;
          function l(u) {
            c.call(this, u, 'html'),
              1 === this.templating.length &&
                'auto' === this.templating[0] &&
                (this.templating = ['django', 'erb', 'handlebars', 'php']),
              (this.indent_inner_html = this._get_boolean('indent_inner_html')),
              (this.indent_body_inner_html = this._get_boolean(
                'indent_body_inner_html',
                !0
              )),
              (this.indent_head_inner_html = this._get_boolean(
                'indent_head_inner_html',
                !0
              )),
              (this.indent_handlebars = this._get_boolean(
                'indent_handlebars',
                !0
              )),
              (this.wrap_attributes = this._get_selection('wrap_attributes', [
                'auto',
                'force',
                'force-aligned',
                'force-expand-multiline',
                'aligned-multiple',
                'preserve',
                'preserve-aligned',
              ])),
              (this.wrap_attributes_indent_size = this._get_number(
                'wrap_attributes_indent_size',
                this.indent_size
              )),
              (this.extra_liners = this._get_array('extra_liners', [
                'head',
                'body',
                '/html',
              ])),
              (this.inline = this._get_array('inline', [
                'a',
                'abbr',
                'area',
                'audio',
                'b',
                'bdi',
                'bdo',
                'br',
                'button',
                'canvas',
                'cite',
                'code',
                'data',
                'datalist',
                'del',
                'dfn',
                'em',
                'embed',
                'i',
                'iframe',
                'img',
                'input',
                'ins',
                'kbd',
                'keygen',
                'label',
                'map',
                'mark',
                'math',
                'meter',
                'noscript',
                'object',
                'output',
                'progress',
                'q',
                'ruby',
                's',
                'samp',
                'select',
                'small',
                'span',
                'strong',
                'sub',
                'sup',
                'svg',
                'template',
                'textarea',
                'time',
                'u',
                'var',
                'video',
                'wbr',
                'text',
                'acronym',
                'big',
                'strike',
                'tt',
              ])),
              (this.void_elements = this._get_array('void_elements', [
                'area',
                'base',
                'br',
                'col',
                'embed',
                'hr',
                'img',
                'input',
                'keygen',
                'link',
                'menuitem',
                'meta',
                'param',
                'source',
                'track',
                'wbr',
                '!doctype',
                '?xml',
                'basefont',
                'isindex',
              ])),
              (this.unformatted = this._get_array('unformatted', [])),
              (this.content_unformatted = this._get_array(
                'content_unformatted',
                ['pre', 'textarea']
              )),
              (this.unformatted_content_delimiter = this._get_characters(
                'unformatted_content_delimiter'
              )),
              (this.indent_scripts = this._get_selection('indent_scripts', [
                'normal',
                'keep',
                'separate',
              ]));
          }
          (l.prototype = new c()), (i.exports.Options = l);
        },
        function (i, a, o) {
          var c = o(9).Tokenizer,
            l = o(9).TOKEN,
            u = o(13).Directives,
            h = o(14).TemplatablePattern,
            d = o(12).Pattern,
            f = {
              TAG_OPEN: 'TK_TAG_OPEN',
              TAG_CLOSE: 'TK_TAG_CLOSE',
              ATTRIBUTE: 'TK_ATTRIBUTE',
              EQUALS: 'TK_EQUALS',
              VALUE: 'TK_VALUE',
              COMMENT: 'TK_COMMENT',
              TEXT: 'TK_TEXT',
              UNKNOWN: 'TK_UNKNOWN',
              START: l.START,
              RAW: l.RAW,
              EOF: l.EOF,
            },
            g = new u(/<\!--/, /-->/),
            _ = function (b, y) {
              c.call(this, b, y), (this._current_tag_name = '');
              var k = new h(this._input).read_options(this._options),
                v = new d(this._input);
              if (
                ((this.__patterns = {
                  word: k.until(/[\n\r\t <]/),
                  single_quote: k.until_after(/'/),
                  double_quote: k.until_after(/"/),
                  attribute: k.until(/[\n\r\t =>]|\/>/),
                  element_name: k.until(/[\n\r\t >\/]/),
                  handlebars_comment: v
                    .starting_with(/{{!--/)
                    .until_after(/--}}/),
                  handlebars: v.starting_with(/{{/).until_after(/}}/),
                  handlebars_open: v.until(/[\n\r\t }]/),
                  handlebars_raw_close: v.until(/}}/),
                  comment: v.starting_with(/<!--/).until_after(/-->/),
                  cdata: v.starting_with(/<!\[CDATA\[/).until_after(/]]>/),
                  conditional_comment: v
                    .starting_with(/<!\[/)
                    .until_after(/]>/),
                  processing: v.starting_with(/<\?/).until_after(/\?>/),
                }),
                this._options.indent_handlebars &&
                  (this.__patterns.word =
                    this.__patterns.word.exclude('handlebars')),
                (this._unformatted_content_delimiter = null),
                this._options.unformatted_content_delimiter)
              ) {
                var L = this._input.get_literal_regexp(
                  this._options.unformatted_content_delimiter
                );
                this.__patterns.unformatted_content_delimiter = v
                  .matching(L)
                  .until_after(L);
              }
            };
          ((_.prototype = new c())._is_comment = function (b) {
            return !1;
          }),
            (_.prototype._is_opening = function (b) {
              return b.type === f.TAG_OPEN;
            }),
            (_.prototype._is_closing = function (b, y) {
              return (
                b.type === f.TAG_CLOSE &&
                y &&
                ((('>' === b.text || '/>' === b.text) && '<' === y.text[0]) ||
                  ('}}' === b.text && '{' === y.text[0] && '{' === y.text[1]))
              );
            }),
            (_.prototype._reset = function () {
              this._current_tag_name = '';
            }),
            (_.prototype._get_next_token = function (b, y) {
              var k = null;
              this._readWhitespace();
              var v = this._input.peek();
              return null === v
                ? this._create_token(f.EOF, '')
                : (k =
                    (k =
                      (k =
                        (k =
                          (k =
                            (k =
                              (k =
                                (k =
                                  (k = k || this._read_open_handlebars(v, y)) ||
                                  this._read_attribute(v, b, y)) ||
                                this._read_close(v, y)) ||
                              this._read_raw_content(v, b, y)) ||
                            this._read_content_word(v)) ||
                          this._read_comment_or_cdata(v)) ||
                        this._read_processing(v)) || this._read_open(v, y)) ||
                    this._create_token(f.UNKNOWN, this._input.next()));
            }),
            (_.prototype._read_comment_or_cdata = function (b) {
              var y = null,
                k = null,
                v = null;
              return (
                '<' === b &&
                  ('!' === this._input.peek(1) &&
                    ((k = this.__patterns.comment.read())
                      ? (v = g.get_directives(k)) &&
                        'start' === v.ignore &&
                        (k += g.readIgnored(this._input))
                      : (k = this.__patterns.cdata.read())),
                  k && ((y = this._create_token(f.COMMENT, k)).directives = v)),
                y
              );
            }),
            (_.prototype._read_processing = function (b) {
              var y = null,
                k = null;
              if ('<' === b) {
                var L = this._input.peek(1);
                ('!' === L || '?' === L) &&
                  (k =
                    (k = this.__patterns.conditional_comment.read()) ||
                    this.__patterns.processing.read()),
                  k &&
                    ((y = this._create_token(f.COMMENT, k)).directives = null);
              }
              return y;
            }),
            (_.prototype._read_open = function (b, y) {
              var k = null,
                v = null;
              return (
                y ||
                  ('<' === b &&
                    ((k = this._input.next()),
                    '/' === this._input.peek() && (k += this._input.next()),
                    (k += this.__patterns.element_name.read()),
                    (v = this._create_token(f.TAG_OPEN, k)))),
                v
              );
            }),
            (_.prototype._read_open_handlebars = function (b, y) {
              var k = null,
                v = null;
              return (
                y ||
                  (this._options.indent_handlebars &&
                    '{' === b &&
                    '{' === this._input.peek(1) &&
                    ('!' === this._input.peek(2)
                      ? ((k =
                          (k = this.__patterns.handlebars_comment.read()) ||
                          this.__patterns.handlebars.read()),
                        (v = this._create_token(f.COMMENT, k)))
                      : ((k = this.__patterns.handlebars_open.read()),
                        (v = this._create_token(f.TAG_OPEN, k))))),
                v
              );
            }),
            (_.prototype._read_close = function (b, y) {
              var k = null,
                v = null;
              return (
                y &&
                  ('<' === y.text[0] &&
                  ('>' === b || ('/' === b && '>' === this._input.peek(1)))
                    ? ((k = this._input.next()),
                      '/' === b && (k += this._input.next()),
                      (v = this._create_token(f.TAG_CLOSE, k)))
                    : '{' === y.text[0] &&
                      '}' === b &&
                      '}' === this._input.peek(1) &&
                      (this._input.next(),
                      this._input.next(),
                      (v = this._create_token(f.TAG_CLOSE, '}}')))),
                v
              );
            }),
            (_.prototype._read_attribute = function (b, y, k) {
              var v = null,
                L = '';
              if (k && '<' === k.text[0])
                if ('=' === b)
                  v = this._create_token(f.EQUALS, this._input.next());
                else if ('"' === b || "'" === b) {
                  var D = this._input.next();
                  (D +=
                    '"' === b
                      ? this.__patterns.double_quote.read()
                      : this.__patterns.single_quote.read()),
                    (v = this._create_token(f.VALUE, D));
                } else
                  (L = this.__patterns.attribute.read()) &&
                    (v = this._create_token(
                      y.type === f.EQUALS ? f.VALUE : f.ATTRIBUTE,
                      L
                    ));
              return v;
            }),
            (_.prototype._is_content_unformatted = function (b) {
              return (
                -1 === this._options.void_elements.indexOf(b) &&
                (-1 !== this._options.content_unformatted.indexOf(b) ||
                  -1 !== this._options.unformatted.indexOf(b))
              );
            }),
            (_.prototype._read_raw_content = function (b, y, k) {
              var v = '';
              if (k && '{' === k.text[0])
                v = this.__patterns.handlebars_raw_close.read();
              else if (
                y.type === f.TAG_CLOSE &&
                '<' === y.opened.text[0] &&
                '/' !== y.text[0]
              ) {
                var L = y.opened.text.substr(1).toLowerCase();
                if ('script' === L || 'style' === L) {
                  var D = this._read_comment_or_cdata(b);
                  if (D) return (D.type = f.TEXT), D;
                  v = this._input.readUntil(
                    new RegExp('</' + L + '[\\n\\r\\t ]*?>', 'ig')
                  );
                } else
                  this._is_content_unformatted(L) &&
                    (v = this._input.readUntil(
                      new RegExp('</' + L + '[\\n\\r\\t ]*?>', 'ig')
                    ));
              }
              return v ? this._create_token(f.TEXT, v) : null;
            }),
            (_.prototype._read_content_word = function (b) {
              var y = '';
              if (
                (this._options.unformatted_content_delimiter &&
                  b === this._options.unformatted_content_delimiter[0] &&
                  (y = this.__patterns.unformatted_content_delimiter.read()),
                y || (y = this.__patterns.word.read()),
                y)
              )
                return this._create_token(f.TEXT, y);
            }),
            (i.exports.Tokenizer = _),
            (i.exports.TOKEN = f);
        },
      ],
      t = {},
      r = (function n(i) {
        var a = t[i];
        if (void 0 !== a) return a.exports;
        var o = (t[i] = { exports: {} });
        return e[i](o, o.exports, n), o.exports;
      })(18);
    $i = r;
  })(),
    (Yi = (() => {
      var e = {
          470: (r) => {
            function i(c) {
              if ('string' != typeof c)
                throw new TypeError(
                  'Path must be a string. Received ' + JSON.stringify(c)
                );
            }
            function a(c, l) {
              for (
                var u, h = '', d = 0, f = -1, g = 0, _ = 0;
                _ <= c.length;
                ++_
              ) {
                if (_ < c.length) u = c.charCodeAt(_);
                else {
                  if (47 === u) break;
                  u = 47;
                }
                if (47 === u) {
                  if (f !== _ - 1 && 1 !== g)
                    if (f !== _ - 1 && 2 === g) {
                      if (
                        h.length < 2 ||
                        2 !== d ||
                        46 !== h.charCodeAt(h.length - 1) ||
                        46 !== h.charCodeAt(h.length - 2)
                      )
                        if (h.length > 2) {
                          var b = h.lastIndexOf('/');
                          if (b !== h.length - 1) {
                            -1 === b
                              ? ((h = ''), (d = 0))
                              : (d =
                                  (h = h.slice(0, b)).length -
                                  1 -
                                  h.lastIndexOf('/')),
                              (f = _),
                              (g = 0);
                            continue;
                          }
                        } else if (2 === h.length || 1 === h.length) {
                          (h = ''), (d = 0), (f = _), (g = 0);
                          continue;
                        }
                      l && (h.length > 0 ? (h += '/..') : (h = '..'), (d = 2));
                    } else
                      h.length > 0
                        ? (h += '/' + c.slice(f + 1, _))
                        : (h = c.slice(f + 1, _)),
                        (d = _ - f - 1);
                  (f = _), (g = 0);
                } else 46 === u && -1 !== g ? ++g : (g = -1);
              }
              return h;
            }
            var o = {
              resolve: function () {
                for (
                  var c, l = '', u = !1, h = arguments.length - 1;
                  h >= -1 && !u;
                  h--
                ) {
                  var d;
                  h >= 0
                    ? (d = arguments[h])
                    : (void 0 === c && (c = process.cwd()), (d = c)),
                    i(d),
                    0 !== d.length &&
                      ((l = d + '/' + l), (u = 47 === d.charCodeAt(0)));
                }
                return (
                  (l = a(l, !u)),
                  u ? (l.length > 0 ? '/' + l : '/') : l.length > 0 ? l : '.'
                );
              },
              normalize: function (c) {
                if ((i(c), 0 === c.length)) return '.';
                var l = 47 === c.charCodeAt(0),
                  u = 47 === c.charCodeAt(c.length - 1);
                return (
                  0 !== (c = a(c, !l)).length || l || (c = '.'),
                  c.length > 0 && u && (c += '/'),
                  l ? '/' + c : c
                );
              },
              isAbsolute: function (c) {
                return i(c), c.length > 0 && 47 === c.charCodeAt(0);
              },
              join: function () {
                if (0 === arguments.length) return '.';
                for (var c, l = 0; l < arguments.length; ++l) {
                  var u = arguments[l];
                  i(u),
                    u.length > 0 && (void 0 === c ? (c = u) : (c += '/' + u));
                }
                return void 0 === c ? '.' : o.normalize(c);
              },
              relative: function (c, l) {
                if (
                  (i(c),
                  i(l),
                  c === l || (c = o.resolve(c)) === (l = o.resolve(l)))
                )
                  return '';
                for (var u = 1; u < c.length && 47 === c.charCodeAt(u); ++u);
                for (
                  var h = c.length, d = h - u, f = 1;
                  f < l.length && 47 === l.charCodeAt(f);
                  ++f
                );
                for (
                  var g = l.length - f, _ = d < g ? d : g, b = -1, y = 0;
                  y <= _;
                  ++y
                ) {
                  if (y === _) {
                    if (g > _) {
                      if (47 === l.charCodeAt(f + y)) return l.slice(f + y + 1);
                      if (0 === y) return l.slice(f + y);
                    } else
                      d > _ &&
                        (47 === c.charCodeAt(u + y)
                          ? (b = y)
                          : 0 === y && (b = 0));
                    break;
                  }
                  var k = c.charCodeAt(u + y);
                  if (k !== l.charCodeAt(f + y)) break;
                  47 === k && (b = y);
                }
                var v = '';
                for (y = u + b + 1; y <= h; ++y)
                  (y !== h && 47 !== c.charCodeAt(y)) ||
                    (v += 0 === v.length ? '..' : '/..');
                return v.length > 0
                  ? v + l.slice(f + b)
                  : (47 === l.charCodeAt((f += b)) && ++f, l.slice(f));
              },
              _makeLong: function (c) {
                return c;
              },
              dirname: function (c) {
                if ((i(c), 0 === c.length)) return '.';
                for (
                  var l = c.charCodeAt(0),
                    u = 47 === l,
                    h = -1,
                    d = !0,
                    f = c.length - 1;
                  f >= 1;
                  --f
                )
                  if (47 === (l = c.charCodeAt(f))) {
                    if (!d) {
                      h = f;
                      break;
                    }
                  } else d = !1;
                return -1 === h
                  ? u
                    ? '/'
                    : '.'
                  : u && 1 === h
                  ? '//'
                  : c.slice(0, h);
              },
              basename: function (c, l) {
                if (void 0 !== l && 'string' != typeof l)
                  throw new TypeError('"ext" argument must be a string');
                i(c);
                var u,
                  h = 0,
                  d = -1,
                  f = !0;
                if (void 0 !== l && l.length > 0 && l.length <= c.length) {
                  if (l.length === c.length && l === c) return '';
                  var g = l.length - 1,
                    _ = -1;
                  for (u = c.length - 1; u >= 0; --u) {
                    var b = c.charCodeAt(u);
                    if (47 === b) {
                      if (!f) {
                        h = u + 1;
                        break;
                      }
                    } else
                      -1 === _ && ((f = !1), (_ = u + 1)),
                        g >= 0 &&
                          (b === l.charCodeAt(g)
                            ? -1 == --g && (d = u)
                            : ((g = -1), (d = _)));
                  }
                  return (
                    h === d ? (d = _) : -1 === d && (d = c.length),
                    c.slice(h, d)
                  );
                }
                for (u = c.length - 1; u >= 0; --u)
                  if (47 === c.charCodeAt(u)) {
                    if (!f) {
                      h = u + 1;
                      break;
                    }
                  } else -1 === d && ((f = !1), (d = u + 1));
                return -1 === d ? '' : c.slice(h, d);
              },
              extname: function (c) {
                i(c);
                for (
                  var l = -1, u = 0, h = -1, d = !0, f = 0, g = c.length - 1;
                  g >= 0;
                  --g
                ) {
                  var _ = c.charCodeAt(g);
                  if (47 !== _)
                    -1 === h && ((d = !1), (h = g + 1)),
                      46 === _
                        ? -1 === l
                          ? (l = g)
                          : 1 !== f && (f = 1)
                        : -1 !== l && (f = -1);
                  else if (!d) {
                    u = g + 1;
                    break;
                  }
                }
                return -1 === l ||
                  -1 === h ||
                  0 === f ||
                  (1 === f && l === h - 1 && l === u + 1)
                  ? ''
                  : c.slice(l, h);
              },
              format: function (c) {
                if (null === c || 'object' != typeof c)
                  throw new TypeError(
                    'The "pathObject" argument must be of type Object. Received type ' +
                      typeof c
                  );
                return (
                  (d = (u = c).base || (u.name || '') + (u.ext || '')),
                  (h = u.dir || u.root)
                    ? h === u.root
                      ? h + d
                      : h + '/' + d
                    : d
                );
                var u, h, d;
              },
              parse: function (c) {
                i(c);
                var l = { root: '', dir: '', base: '', ext: '', name: '' };
                if (0 === c.length) return l;
                var u,
                  h = c.charCodeAt(0),
                  d = 47 === h;
                d ? ((l.root = '/'), (u = 1)) : (u = 0);
                for (
                  var f = -1, g = 0, _ = -1, b = !0, y = c.length - 1, k = 0;
                  y >= u;
                  --y
                )
                  if (47 !== (h = c.charCodeAt(y)))
                    -1 === _ && ((b = !1), (_ = y + 1)),
                      46 === h
                        ? -1 === f
                          ? (f = y)
                          : 1 !== k && (k = 1)
                        : -1 !== f && (k = -1);
                  else if (!b) {
                    g = y + 1;
                    break;
                  }
                return (
                  -1 === f ||
                  -1 === _ ||
                  0 === k ||
                  (1 === k && f === _ - 1 && f === g + 1)
                    ? -1 !== _ &&
                      (l.base = l.name = c.slice(0 === g && d ? 1 : g, _))
                    : (0 === g && d
                        ? ((l.name = c.slice(1, f)), (l.base = c.slice(1, _)))
                        : ((l.name = c.slice(g, f)), (l.base = c.slice(g, _))),
                      (l.ext = c.slice(f, _))),
                  g > 0 ? (l.dir = c.slice(0, g - 1)) : d && (l.dir = '/'),
                  l
                );
              },
              sep: '/',
              delimiter: ':',
              win32: null,
              posix: null,
            };
            (o.posix = o), (r.exports = o);
          },
          447: (r, i, a) => {
            var o;
            if (
              (a.r(i),
              a.d(i, { URI: () => v, Utils: () => z }),
              'object' == typeof process)
            )
              o = 'win32' === process.platform;
            else if ('object' == typeof navigator) {
              var c = navigator.userAgent;
              o = c.indexOf('Windows') >= 0;
            }
            var l,
              u,
              h =
                ((l = function (x, T) {
                  return (l =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (M, U) {
                        M.__proto__ = U;
                      }) ||
                    function (M, U) {
                      for (var R in U)
                        Object.prototype.hasOwnProperty.call(U, R) &&
                          (M[R] = U[R]);
                    })(x, T);
                }),
                function (x, T) {
                  if ('function' != typeof T && null !== T)
                    throw new TypeError(
                      'Class extends value ' +
                        String(T) +
                        ' is not a constructor or null'
                    );
                  function M() {
                    this.constructor = x;
                  }
                  l(x, T),
                    (x.prototype =
                      null === T
                        ? Object.create(T)
                        : ((M.prototype = T.prototype), new M()));
                }),
              d = /^\w[\w\d+.-]*$/,
              f = /^\//,
              g = /^\/\//;
            function _(x, T) {
              if (!x.scheme && T)
                throw new Error(
                  '[UriError]: Scheme is missing: {scheme: "", authority: "'
                    .concat(x.authority, '", path: "')
                    .concat(x.path, '", query: "')
                    .concat(x.query, '", fragment: "')
                    .concat(x.fragment, '"}')
                );
              if (x.scheme && !d.test(x.scheme))
                throw new Error(
                  '[UriError]: Scheme contains illegal characters.'
                );
              if (x.path)
                if (x.authority) {
                  if (!f.test(x.path))
                    throw new Error(
                      '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character'
                    );
                } else if (g.test(x.path))
                  throw new Error(
                    '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")'
                  );
            }
            var b = '',
              y = '/',
              k =
                /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
              v = (function () {
                function x(T, M, U, R, N, W) {
                  var j;
                  void 0 === W && (W = !1),
                    'object' == typeof T
                      ? ((this.scheme = T.scheme || b),
                        (this.authority = T.authority || b),
                        (this.path = T.path || b),
                        (this.query = T.query || b),
                        (this.fragment = T.fragment || b))
                      : ((this.scheme = (j = T) || W ? j : 'file'),
                        (this.authority = M || b),
                        (this.path = (function (j, $) {
                          switch (j) {
                            case 'https':
                            case 'http':
                            case 'file':
                              $ ? $[0] !== y && ($ = y + $) : ($ = y);
                          }
                          return $;
                        })(this.scheme, U || b)),
                        (this.query = R || b),
                        (this.fragment = N || b),
                        _(this, W));
                }
                return (
                  (x.isUri = function (T) {
                    return (
                      T instanceof x ||
                      (!!T &&
                        'string' == typeof T.authority &&
                        'string' == typeof T.fragment &&
                        'string' == typeof T.path &&
                        'string' == typeof T.query &&
                        'string' == typeof T.scheme &&
                        'string' == typeof T.fsPath &&
                        'function' == typeof T.with &&
                        'function' == typeof T.toString)
                    );
                  }),
                  Object.defineProperty(x.prototype, 'fsPath', {
                    get: function () {
                      return m(this, !1);
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  (x.prototype.with = function (T) {
                    if (!T) return this;
                    var M = T.scheme,
                      U = T.authority,
                      R = T.path,
                      N = T.query,
                      W = T.fragment;
                    return (
                      void 0 === M ? (M = this.scheme) : null === M && (M = b),
                      void 0 === U
                        ? (U = this.authority)
                        : null === U && (U = b),
                      void 0 === R ? (R = this.path) : null === R && (R = b),
                      void 0 === N ? (N = this.query) : null === N && (N = b),
                      void 0 === W
                        ? (W = this.fragment)
                        : null === W && (W = b),
                      M === this.scheme &&
                      U === this.authority &&
                      R === this.path &&
                      N === this.query &&
                      W === this.fragment
                        ? this
                        : new D(M, U, R, N, W)
                    );
                  }),
                  (x.parse = function (T, M) {
                    void 0 === M && (M = !1);
                    var U = k.exec(T);
                    return U
                      ? new D(
                          U[2] || b,
                          S(U[4] || b),
                          S(U[5] || b),
                          S(U[7] || b),
                          S(U[9] || b),
                          M
                        )
                      : new D(b, b, b, b, b);
                  }),
                  (x.file = function (T) {
                    var M = b;
                    if (
                      (o && (T = T.replace(/\\/g, y)), T[0] === y && T[1] === y)
                    ) {
                      var U = T.indexOf(y, 2);
                      -1 === U
                        ? ((M = T.substring(2)), (T = y))
                        : ((M = T.substring(2, U)), (T = T.substring(U) || y));
                    }
                    return new D('file', M, T, b, b);
                  }),
                  (x.from = function (T) {
                    var M = new D(
                      T.scheme,
                      T.authority,
                      T.path,
                      T.query,
                      T.fragment
                    );
                    return _(M, !0), M;
                  }),
                  (x.prototype.toString = function (T) {
                    return void 0 === T && (T = !1), w(this, T);
                  }),
                  (x.prototype.toJSON = function () {
                    return this;
                  }),
                  (x.revive = function (T) {
                    if (T) {
                      if (T instanceof x) return T;
                      var M = new D(T);
                      return (
                        (M._formatted = T.external),
                        (M._fsPath = T._sep === L ? T.fsPath : null),
                        M
                      );
                    }
                    return T;
                  }),
                  x
                );
              })(),
              L = o ? 1 : void 0,
              D = (function (x) {
                function T() {
                  var M = (null !== x && x.apply(this, arguments)) || this;
                  return (M._formatted = null), (M._fsPath = null), M;
                }
                return (
                  h(T, x),
                  Object.defineProperty(T.prototype, 'fsPath', {
                    get: function () {
                      return (
                        this._fsPath || (this._fsPath = m(this, !1)),
                        this._fsPath
                      );
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  (T.prototype.toString = function (M) {
                    return (
                      void 0 === M && (M = !1),
                      M
                        ? w(this, !0)
                        : (this._formatted || (this._formatted = w(this, !1)),
                          this._formatted)
                    );
                  }),
                  (T.prototype.toJSON = function () {
                    var M = { $mid: 1 };
                    return (
                      this._fsPath && ((M.fsPath = this._fsPath), (M._sep = L)),
                      this._formatted && (M.external = this._formatted),
                      this.path && (M.path = this.path),
                      this.scheme && (M.scheme = this.scheme),
                      this.authority && (M.authority = this.authority),
                      this.query && (M.query = this.query),
                      this.fragment && (M.fragment = this.fragment),
                      M
                    );
                  }),
                  T
                );
              })(v),
              H =
                (((u = {})[58] = '%3A'),
                (u[47] = '%2F'),
                (u[63] = '%3F'),
                (u[35] = '%23'),
                (u[91] = '%5B'),
                (u[93] = '%5D'),
                (u[64] = '%40'),
                (u[33] = '%21'),
                (u[36] = '%24'),
                (u[38] = '%26'),
                (u[39] = '%27'),
                (u[40] = '%28'),
                (u[41] = '%29'),
                (u[42] = '%2A'),
                (u[43] = '%2B'),
                (u[44] = '%2C'),
                (u[59] = '%3B'),
                (u[61] = '%3D'),
                (u[32] = '%20'),
                u);
            function B(x, T) {
              for (var M = void 0, U = -1, R = 0; R < x.length; R++) {
                var N = x.charCodeAt(R);
                if (
                  (N >= 97 && N <= 122) ||
                  (N >= 65 && N <= 90) ||
                  (N >= 48 && N <= 57) ||
                  45 === N ||
                  46 === N ||
                  95 === N ||
                  126 === N ||
                  (T && 47 === N)
                )
                  -1 !== U &&
                    ((M += encodeURIComponent(x.substring(U, R))), (U = -1)),
                    void 0 !== M && (M += x.charAt(R));
                else {
                  void 0 === M && (M = x.substr(0, R));
                  var W = H[N];
                  void 0 !== W
                    ? (-1 !== U &&
                        ((M += encodeURIComponent(x.substring(U, R))),
                        (U = -1)),
                      (M += W))
                    : -1 === U && (U = R);
                }
              }
              return (
                -1 !== U && (M += encodeURIComponent(x.substring(U))),
                void 0 !== M ? M : x
              );
            }
            function p(x) {
              for (var T = void 0, M = 0; M < x.length; M++) {
                var U = x.charCodeAt(M);
                35 === U || 63 === U
                  ? (void 0 === T && (T = x.substr(0, M)), (T += H[U]))
                  : void 0 !== T && (T += x[M]);
              }
              return void 0 !== T ? T : x;
            }
            function m(x, T) {
              var M;
              return (
                (M =
                  x.authority && x.path.length > 1 && 'file' === x.scheme
                    ? '//'.concat(x.authority).concat(x.path)
                    : 47 === x.path.charCodeAt(0) &&
                      ((x.path.charCodeAt(1) >= 65 &&
                        x.path.charCodeAt(1) <= 90) ||
                        (x.path.charCodeAt(1) >= 97 &&
                          x.path.charCodeAt(1) <= 122)) &&
                      58 === x.path.charCodeAt(2)
                    ? T
                      ? x.path.substr(1)
                      : x.path[1].toLowerCase() + x.path.substr(2)
                    : x.path),
                o && (M = M.replace(/\//g, '\\')),
                M
              );
            }
            function w(x, T) {
              var M = T ? p : B,
                U = '',
                R = x.scheme,
                N = x.authority,
                W = x.path,
                j = x.query,
                $ = x.fragment;
              if (
                (R && ((U += R), (U += ':')),
                (N || 'file' === R) && ((U += y), (U += y)),
                N)
              ) {
                var G = N.indexOf('@');
                if (-1 !== G) {
                  var J = N.substr(0, G);
                  (N = N.substr(G + 1)),
                    -1 === (G = J.indexOf(':'))
                      ? (U += M(J, !1))
                      : ((U += M(J.substr(0, G), !1)),
                        (U += ':'),
                        (U += M(J.substr(G + 1), !1))),
                    (U += '@');
                }
                -1 === (G = (N = N.toLowerCase()).indexOf(':'))
                  ? (U += M(N, !1))
                  : ((U += M(N.substr(0, G), !1)), (U += N.substr(G)));
              }
              if (W) {
                if (
                  W.length >= 3 &&
                  47 === W.charCodeAt(0) &&
                  58 === W.charCodeAt(2)
                )
                  (le = W.charCodeAt(1)) >= 65 &&
                    le <= 90 &&
                    (W = '/'
                      .concat(String.fromCharCode(le + 32), ':')
                      .concat(W.substr(3)));
                else if (W.length >= 2 && 58 === W.charCodeAt(1)) {
                  var le;
                  (le = W.charCodeAt(0)) >= 65 &&
                    le <= 90 &&
                    (W = ''
                      .concat(String.fromCharCode(le + 32), ':')
                      .concat(W.substr(2)));
                }
                U += M(W, !0);
              }
              return (
                j && ((U += '?'), (U += M(j, !1))),
                $ && ((U += '#'), (U += T ? $ : B($, !1))),
                U
              );
            }
            function E(x) {
              try {
                return decodeURIComponent(x);
              } catch {
                return x.length > 3 ? x.substr(0, 3) + E(x.substr(3)) : x;
              }
            }
            var C = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
            function S(x) {
              return x.match(C)
                ? x.replace(C, function (T) {
                    return E(T);
                  })
                : x;
            }
            var z,
              x,
              F = a(470),
              P = function (x, T, M) {
                if (M || 2 === arguments.length)
                  for (var U, R = 0, N = T.length; R < N; R++)
                    (!U && R in T) ||
                      (U || (U = Array.prototype.slice.call(T, 0, R)),
                      (U[R] = T[R]));
                return x.concat(U || Array.prototype.slice.call(T));
              },
              q = F.posix || F;
            ((x = z || (z = {})).joinPath = function (T) {
              for (var M = [], U = 1; U < arguments.length; U++)
                M[U - 1] = arguments[U];
              return T.with({ path: q.join.apply(q, P([T.path], M, !1)) });
            }),
              (x.resolvePath = function (T) {
                for (var M = [], U = 1; U < arguments.length; U++)
                  M[U - 1] = arguments[U];
                return T.with({
                  path: q.resolve.apply(q, P([T.path || '/'], M, !1)),
                });
              }),
              (x.dirname = function (T) {
                var M = q.dirname(T.path);
                return 1 === M.length && 46 === M.charCodeAt(0)
                  ? T
                  : T.with({ path: M });
              }),
              (x.basename = function (T) {
                return q.basename(T.path);
              }),
              (x.extname = function (T) {
                return q.extname(T.path);
              });
          },
        },
        t = {};
      function n(r) {
        if (t[r]) return t[r].exports;
        var i = (t[r] = { exports: {} });
        return e[r](i, i.exports, n), i.exports;
      }
      return (
        (n.d = (r, i) => {
          for (var a in i)
            n.o(i, a) &&
              !n.o(r, a) &&
              Object.defineProperty(r, a, { enumerable: !0, get: i[a] });
        }),
        (n.o = (r, i) => Object.prototype.hasOwnProperty.call(r, i)),
        (n.r = (r) => {
          typeof Symbol < 'u' &&
            Symbol.toStringTag &&
            Object.defineProperty(r, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(r, '__esModule', { value: !0 });
        }),
        n(447)
      );
    })());
  var { URI: lu } = Yi;
  function Vn(e) {
    var t = e[0];
    return (
      t === e[e.length - 1] &&
        ("'" === t || '"' === t) &&
        (e = e.substr(1, e.length - 2)),
      e
    );
  }
  function hu(e, t, n, r, i, a) {
    var o = Vn(n);
    if (
      (function uu(e, t) {
        return (
          !(!e.length || ('handlebars' === t && /{{|}}/.test(e))) &&
          /\b(w[\w\d+.-]*:\/\/)?[^\s()<>]+(?:\([\w\d]+\)|([^[:punct:]\s]|\/?))/.test(
            e
          )
        );
      })(o, e.languageId)
    ) {
      o.length < n.length && (r++, i--);
      var c = (function cu(e, t, n, r) {
        if (!/^\s*javascript\:/i.test(t) && !/[\n\r]/.test(t))
          return (
            (t = t.replace(/^\s*/g, '')),
            /^https?:\/\//i.test(t) || /^file:\/\//i.test(t)
              ? t
              : /^\#/i.test(t)
              ? e + t
              : /^\/\//i.test(t)
              ? (He(e, 'https://') ? 'https' : 'http') +
                ':' +
                t.replace(/^\s*/g, '')
              : n
              ? n.resolveReference(t, r || e)
              : t
          );
      })(e.uri, o, t, a);
      if (
        c &&
        (function du(e) {
          try {
            return lu.parse(e), !0;
          } catch {
            return !1;
          }
        })(c)
      )
        return { range: Q.create(e.positionAt(r), e.positionAt(i)), target: c };
    }
  }
  function fu(e, t) {
    for (
      var n = [],
        r = me(e.getText(), 0),
        i = r.scan(),
        a = void 0,
        o = !1,
        c = void 0,
        l = {};
      i !== I.EOS;

    ) {
      switch (i) {
        case I.StartTag:
          c || (o = 'base' === r.getTokenText().toLowerCase());
          break;
        case I.AttributeName:
          a = r.getTokenText().toLowerCase();
          break;
        case I.AttributeValue:
          if ('src' === a || 'href' === a) {
            var h = r.getTokenText();
            o ||
              ((d = hu(e, t, h, r.getTokenOffset(), r.getTokenEnd(), c)) &&
                n.push(d)),
              o &&
                typeof c > 'u' &&
                (c = Vn(h)) &&
                t &&
                (c = t.resolveReference(c, e.uri)),
              (o = !1),
              (a = void 0);
          } else 'id' === a && (l[Vn(r.getTokenText())] = r.getTokenOffset());
      }
      i = r.scan();
    }
    for (var g = 0, _ = n; g < _.length; g++) {
      var d,
        b = e.uri + '#';
      if ((d = _[g]).target && He(d.target, b)) {
        var k = l[d.target.substr(b.length)];
        if (void 0 !== k) {
          var v = e.positionAt(k);
          d.target = ''
            .concat(b)
            .concat(v.line + 1, ',')
            .concat(v.character + 1);
        }
      }
    }
    return n;
  }
  function mu(e, t, n) {
    var r = e.offsetAt(t),
      i = n.findNodeAt(r);
    if (!i.tag) return [];
    var a = [],
      o = Ki(I.StartTag, e, i.start),
      c = 'number' == typeof i.endTagStart && Ki(I.EndTag, e, i.endTagStart);
    return (
      ((o && Zi(o, t)) || (c && Zi(c, t))) &&
        (o && a.push({ kind: Wn.Read, range: o }),
        c && a.push({ kind: Wn.Read, range: c })),
      a
    );
  }
  function Xi(e, t) {
    return e.line < t.line || (e.line === t.line && e.character <= t.character);
  }
  function Zi(e, t) {
    return Xi(e.start, t) && Xi(t, e.end);
  }
  function Ki(e, t, n) {
    for (var r = me(t.getText(), n), i = r.scan(); i !== I.EOS && i !== e; )
      i = r.scan();
    return i !== I.EOS
      ? {
          start: t.positionAt(r.getTokenOffset()),
          end: t.positionAt(r.getTokenEnd()),
        }
      : null;
  }
  function pu(e, t) {
    var n = [];
    return (
      t.roots.forEach(function (r) {
        ea(e, r, '', n);
      }),
      n
    );
  }
  function ea(e, t, n, r) {
    var i = (function gu(e) {
        var t = e.tag;
        if (e.attributes) {
          var n = e.attributes.id,
            r = e.attributes.class;
          n && (t += '#'.concat(n.replace(/[\"\']/g, ''))),
            r &&
              (t += r
                .replace(/[\"\']/g, '')
                .split(/\s+/)
                .map(function (i) {
                  return '.'.concat(i);
                })
                .join(''));
        }
        return t || '?';
      })(t),
      a = Wt.create(
        e.uri,
        Q.create(e.positionAt(t.start), e.positionAt(t.end))
      );
    r.push({ name: i, location: a, containerName: n, kind: Ci.Field }),
      t.children.forEach(function (c) {
        ea(e, c, i, r);
      });
  }
  function bu(e, t, n, r) {
    var i,
      a = e.offsetAt(t),
      o = r.findNodeAt(a);
    if (
      !o.tag ||
      !(function wu(e, t, n) {
        return (
          !!(
            e.endTagStart &&
            e.endTagStart + 2 <= t &&
            t <= e.endTagStart + 2 + n.length
          ) ||
          (e.start + 1 <= t && t <= e.start + 1 + n.length)
        );
      })(o, a, o.tag)
    )
      return null;
    var c = [],
      l = {
        start: e.positionAt(o.start + 1),
        end: e.positionAt(o.start + 1 + o.tag.length),
      };
    if ((c.push({ range: l, newText: n }), o.endTagStart)) {
      var u = {
        start: e.positionAt(o.endTagStart + 2),
        end: e.positionAt(o.endTagStart + 2 + o.tag.length),
      };
      c.push({ range: u, newText: n });
    }
    return { changes: (((i = {})[e.uri.toString()] = c), i) };
  }
  function _u(e, t, n) {
    var r = e.offsetAt(t),
      i = n.findNodeAt(r);
    return i.tag && i.endTagStart
      ? i.start + 1 <= r && r <= i.start + 1 + i.tag.length
        ? e.positionAt(r - 1 - i.start + i.endTagStart + 2)
        : i.endTagStart + 2 <= r && r <= i.endTagStart + 2 + i.tag.length
        ? e.positionAt(r - 2 - i.endTagStart + i.start + 1)
        : null
      : null;
  }
  function ta(e, t, n) {
    var r = e.offsetAt(t),
      i = n.findNodeAt(r),
      a = i.tag ? i.tag.length : 0;
    return i.endTagStart &&
      ((i.start + 1 <= r && r <= i.start + 1 + a) ||
        (i.endTagStart + 2 <= r && r <= i.endTagStart + 2 + a))
      ? [
          Q.create(e.positionAt(i.start + 1), e.positionAt(i.start + 1 + a)),
          Q.create(
            e.positionAt(i.endTagStart + 2),
            e.positionAt(i.endTagStart + 2 + a)
          ),
        ]
      : null;
  }
  function yu(e, t) {
    var n = me(e.getText()),
      r = n.scan(),
      i = [],
      a = [],
      o = null,
      c = -1;
    function l(v) {
      i.push(v), (c = v.startLine);
    }
    for (; r !== I.EOS; ) {
      switch (r) {
        case I.StartTag:
          var u = n.getTokenText(),
            h = e.positionAt(n.getTokenOffset()).line;
          a.push({ startLine: h, tagName: u }), (o = u);
          break;
        case I.EndTag:
          o = n.getTokenText();
          break;
        case I.StartTagClose:
          if (!o || !Qt(o)) break;
        case I.EndTagClose:
        case I.StartTagSelfClose:
          for (var d = a.length - 1; d >= 0 && a[d].tagName !== o; ) d--;
          if (d >= 0) {
            var f = a[d];
            (a.length = d),
              (_ = e.positionAt(n.getTokenOffset()).line - 1) >
                (h = f.startLine) &&
                c !== h &&
                l({ startLine: h, endLine: _ });
          }
          break;
        case I.Comment:
          h = e.positionAt(n.getTokenOffset()).line;
          var y = n.getTokenText().match(/^\s*#(region\b)|(endregion\b)/);
          if (y)
            if (y[1]) a.push({ startLine: h, tagName: '' });
            else {
              for (d = a.length - 1; d >= 0 && a[d].tagName.length; ) d--;
              var _;
              if (d >= 0)
                (f = a[d]),
                  (a.length = d),
                  (_ = h) > (h = f.startLine) &&
                    c !== h &&
                    l({ startLine: h, endLine: _, kind: Un.Region });
            }
          else
            h <
              (_ = e.positionAt(
                n.getTokenOffset() + n.getTokenLength()
              ).line) && l({ startLine: h, endLine: _, kind: Un.Comment });
      }
      r = n.scan();
    }
    var k = (t && t.rangeLimit) || Number.MAX_VALUE;
    return i.length > k
      ? (function vu(e, t) {
          e = e.sort(function (_, b) {
            var y = _.startLine - b.startLine;
            return 0 === y && (y = _.endLine - b.endLine), y;
          });
          for (
            var n = void 0,
              r = [],
              i = [],
              a = [],
              o = function (_, b) {
                (i[_] = b), b < 30 && (a[b] = (a[b] || 0) + 1);
              },
              c = 0;
            c < e.length;
            c++
          ) {
            var l = e[c];
            if (n) {
              if (l.startLine > n.startLine)
                if (l.endLine <= n.endLine) r.push(n), (n = l), o(c, r.length);
                else if (l.startLine > n.endLine) {
                  do {
                    n = r.pop();
                  } while (n && l.startLine > n.endLine);
                  n && r.push(n), (n = l), o(c, r.length);
                }
            } else (n = l), o(c, 0);
          }
          var u = 0,
            h = 0;
          for (c = 0; c < a.length; c++) {
            var d = a[c];
            if (d) {
              if (d + u > t) {
                h = c;
                break;
              }
              u += d;
            }
          }
          var f = [];
          for (c = 0; c < e.length; c++) {
            var g = i[c];
            'number' == typeof g &&
              (g < h || (g === h && u++ < t)) &&
              f.push(e[c]);
          }
          return f;
        })(i, k)
      : i;
  }
  function Tu(e, t) {
    return t.map(function n(r) {
      for (
        var i = (function ku(e, t) {
            var n = Bi(e.getText()),
              r = e.offsetAt(t),
              i = n.findNodeAt(r),
              a = (function Cu(e) {
                for (
                  var t = e,
                    n = function (i) {
                      return i.startTagEnd &&
                        i.endTagStart &&
                        i.startTagEnd < i.endTagStart
                        ? [
                            [i.startTagEnd, i.endTagStart],
                            [i.start, i.end],
                          ]
                        : [[i.start, i.end]];
                    },
                    r = [];
                  t.parent;

                )
                  n((t = t.parent)).forEach(function (i) {
                    return r.push(i);
                  });
                return r;
              })(i);
            if (i.startTagEnd && !i.endTagStart) {
              if (i.startTagEnd !== i.end) return [[i.start, i.end]];
              var o = Q.create(
                  e.positionAt(i.startTagEnd - 2),
                  e.positionAt(i.startTagEnd)
                ),
                c = e.getText(o);
              return (
                a.unshift(
                  '/>' === c
                    ? [i.start + 1, i.startTagEnd - 2]
                    : [i.start + 1, i.startTagEnd - 1]
                ),
                na(e, i, r).concat(a)
              );
            }
            return i.startTagEnd && i.endTagStart
              ? (a.unshift([i.start, i.end]),
                i.start < r && r < i.startTagEnd
                  ? (a.unshift([i.start + 1, i.startTagEnd - 1]),
                    (a = na(e, i, r).concat(a)))
                  : i.startTagEnd <= r && r <= i.endTagStart
                  ? (a.unshift([i.startTagEnd, i.endTagStart]), a)
                  : (r >= i.endTagStart + 2 &&
                      a.unshift([i.endTagStart + 2, i.end - 1]),
                    a))
              : a;
          })(e, r),
          a = void 0,
          o = void 0,
          c = i.length - 1;
        c >= 0;
        c--
      ) {
        var l = i[c];
        (!a || l[0] !== a[0] || l[1] !== a[1]) &&
          (o = Gt.create(
            Q.create(e.positionAt(i[c][0]), e.positionAt(i[c][1])),
            o
          )),
          (a = l);
      }
      return o || (o = Gt.create(Q.create(r, r))), o;
    });
  }
  function na(e, t, n) {
    for (
      var r = Q.create(e.positionAt(t.start), e.positionAt(t.end)),
        i = e.getText(r),
        a = n - t.start,
        o = me(i),
        c = o.scan(),
        l = t.start,
        u = [],
        h = !1,
        d = -1;
      c !== I.EOS;

    ) {
      switch (c) {
        case I.AttributeName:
          if (a < o.getTokenOffset()) {
            h = !1;
            break;
          }
          a <= o.getTokenEnd() &&
            u.unshift([o.getTokenOffset(), o.getTokenEnd()]),
            (h = !0),
            (d = o.getTokenOffset());
          break;
        case I.AttributeValue:
          if (!h) break;
          var f = o.getTokenText();
          if (a < o.getTokenOffset()) {
            u.push([d, o.getTokenEnd()]);
            break;
          }
          a >= o.getTokenOffset() &&
            a <= o.getTokenEnd() &&
            (u.unshift([o.getTokenOffset(), o.getTokenEnd()]),
            (('"' === f[0] && '"' === f[f.length - 1]) ||
              ("'" === f[0] && "'" === f[f.length - 1])) &&
              a >= o.getTokenOffset() + 1 &&
              a <= o.getTokenEnd() - 1 &&
              u.unshift([o.getTokenOffset() + 1, o.getTokenEnd() - 1]),
            u.push([d, o.getTokenEnd()]));
      }
      c = o.scan();
    }
    return u.map(function (g) {
      return [g[0] + l, g[1] + l];
    });
  }
  var Au = {
      version: 1.1,
      tags: [
        {
          name: 'html',
          description: {
            kind: 'markdown',
            value: 'The html element represents the root of an HTML document.',
          },
          attributes: [
            {
              name: 'manifest',
              description: {
                kind: 'markdown',
                value:
                  'Specifies the URI of a resource manifest indicating resources that should be cached locally. See [Using the application cache](https://developer.mozilla.org/en-US/docs/Web/HTML/Using_the_application_cache) for details.',
              },
            },
            {
              name: 'version',
              description:
                'Specifies the version of the HTML [Document Type Definition](https://developer.mozilla.org/en-US/docs/Glossary/DTD "Document Type Definition: In HTML, the doctype is the required "<!DOCTYPE html>" preamble found at the top of all documents. Its sole purpose is to prevent a browser from switching into so-called \u201cquirks mode\u201d when rendering a document; that is, the "<!DOCTYPE html>" doctype ensures that the browser makes a best-effort attempt at following the relevant specifications, rather than using a different rendering mode that is incompatible with some specifications.") that governs the current document. This attribute is not needed, because it is redundant with the version information in the document type declaration.',
            },
            {
              name: 'xmlns',
              description:
                'Specifies the XML Namespace of the document. Default value is `"http://www.w3.org/1999/xhtml"`. This is required in documents parsed with XML parsers, and optional in text/html documents.',
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/html',
            },
          ],
        },
        {
          name: 'head',
          description: {
            kind: 'markdown',
            value:
              'The head element represents a collection of metadata for the Document.',
          },
          attributes: [
            {
              name: 'profile',
              description:
                'The URIs of one or more metadata profiles, separated by white space.',
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/head',
            },
          ],
        },
        {
          name: 'title',
          description: {
            kind: 'markdown',
            value:
              "The title element represents the document's title or name. Authors should use titles that identify their documents even when they are used out of context, for example in a user's history or bookmarks, or in search results. The document's title is often different from its first heading, since the first heading does not have to stand alone when taken out of context.",
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/title',
            },
          ],
        },
        {
          name: 'base',
          description: {
            kind: 'markdown',
            value:
              'The base element allows authors to specify the document base URL for the purposes of resolving relative URLs, and the name of the default browsing context for the purposes of following hyperlinks. The element does not represent any content beyond this information.',
          },
          attributes: [
            {
              name: 'href',
              description: {
                kind: 'markdown',
                value:
                  'The base URL to be used throughout the document for relative URL addresses. If this attribute is specified, this element must come before any other elements with attributes whose values are URLs. Absolute and relative URLs are allowed.',
              },
            },
            {
              name: 'target',
              description: {
                kind: 'markdown',
                value:
                  'A name or keyword indicating the default location to display the result when hyperlinks or forms cause navigation, for elements that do not have an explicit target reference. It is a name of, or keyword for, a _browsing context_ (for example: tab, window, or inline frame). The following keywords have special meanings:\n\n*   `_self`: Load the result into the same browsing context as the current one. This value is the default if the attribute is not specified.\n*   `_blank`: Load the result into a new unnamed browsing context.\n*   `_parent`: Load the result into the parent browsing context of the current one. If there is no parent, this option behaves the same way as `_self`.\n*   `_top`: Load the result into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as `_self`.\n\nIf this attribute is specified, this element must come before any other elements with attributes whose values are URLs.',
              },
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/base',
            },
          ],
        },
        {
          name: 'link',
          description: {
            kind: 'markdown',
            value:
              'The link element allows authors to link their document to other resources.',
          },
          attributes: [
            {
              name: 'href',
              description: {
                kind: 'markdown',
                value:
                  'This attribute specifies the [URL](https://developer.mozilla.org/en-US/docs/Glossary/URL "URL: Uniform Resource Locator (URL) is a text string specifying where a resource can be found on the Internet.") of the linked resource. A URL can be absolute or relative.',
              },
            },
            {
              name: 'crossorigin',
              valueSet: 'xo',
              description: {
                kind: 'markdown',
                value:
                  'This enumerated attribute indicates whether [CORS](https://developer.mozilla.org/en-US/docs/Glossary/CORS "CORS: CORS (Cross-Origin Resource Sharing) is a system, consisting of transmitting HTTP headers, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests.") must be used when fetching the resource. [CORS-enabled images](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_Enabled_Image) can be reused in the [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas "Use the HTML <canvas> element with either the canvas scripting API or the WebGL API to draw graphics and animations.") element without being _tainted_. The allowed values are:\n\n`anonymous`\n\nA cross-origin request (i.e. with an [`Origin`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin "The Origin request header indicates where a fetch originates from. It doesn\'t include any path information, but only the server name. It is sent with CORS requests, as well as with POST requests. It is similar to the Referer header, but, unlike this header, it doesn\'t disclose the whole path.") HTTP header) is performed, but no credential is sent (i.e. no cookie, X.509 certificate, or HTTP Basic authentication). If the server does not give credentials to the origin site (by not setting the [`Access-Control-Allow-Origin`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin "The Access-Control-Allow-Origin response header indicates whether the response can be shared with requesting code from the given origin.") HTTP header) the image will be tainted and its usage restricted.\n\n`use-credentials`\n\nA cross-origin request (i.e. with an `Origin` HTTP header) is performed along with a credential sent (i.e. a cookie, certificate, and/or HTTP Basic authentication is performed). If the server does not give credentials to the origin site (through [`Access-Control-Allow-Credentials`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials "The Access-Control-Allow-Credentials response header tells browsers whether to expose the response to frontend JavaScript code when the request\'s credentials mode (Request.credentials) is "include".") HTTP header), the resource will be _tainted_ and its usage restricted.\n\nIf the attribute is not present, the resource is fetched without a [CORS](https://developer.mozilla.org/en-US/docs/Glossary/CORS "CORS: CORS (Cross-Origin Resource Sharing) is a system, consisting of transmitting HTTP headers, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests.") request (i.e. without sending the `Origin` HTTP header), preventing its non-tainted usage. If invalid, it is handled as if the enumerated keyword **anonymous** was used. See [CORS settings attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for additional information.',
              },
            },
            {
              name: 'rel',
              description: {
                kind: 'markdown',
                value:
                  'This attribute names a relationship of the linked document to the current document. The attribute must be a space-separated list of the [link types values](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).',
              },
            },
            {
              name: 'media',
              description: {
                kind: 'markdown',
                value:
                  "This attribute specifies the media that the linked resource applies to. Its value must be a media type / [media query](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_queries). This attribute is mainly useful when linking to external stylesheets \u2014 it allows the user agent to pick the best adapted one for the device it runs on.\n\n**Notes:**\n\n*   In HTML 4, this can only be a simple white-space-separated list of media description literals, i.e., [media types and groups](https://developer.mozilla.org/en-US/docs/Web/CSS/@media), where defined and allowed as values for this attribute, such as `print`, `screen`, `aural`, `braille`. HTML5 extended this to any kind of [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_queries), which are a superset of the allowed values of HTML 4.\n*   Browsers not supporting [CSS3 Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_queries) won't necessarily recognize the adequate link; do not forget to set fallback links, the restricted set of media queries defined in HTML 4.",
              },
            },
            {
              name: 'hreflang',
              description: {
                kind: 'markdown',
                value:
                  'This attribute indicates the language of the linked resource. It is purely advisory. Allowed values are determined by [BCP47](https://www.ietf.org/rfc/bcp/bcp47.txt). Use this attribute only if the [`href`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-href) attribute is present.',
              },
            },
            {
              name: 'type',
              description: {
                kind: 'markdown',
                value:
                  'This attribute is used to define the type of the content linked to. The value of the attribute should be a MIME type such as **text/html**, **text/css**, and so on. The common use of this attribute is to define the type of stylesheet being referenced (such as **text/css**), but given that CSS is the only stylesheet language used on the web, not only is it possible to omit the `type` attribute, but is actually now recommended practice. It is also used on `rel="preload"` link types, to make sure the browser only downloads file types that it supports.',
              },
            },
            {
              name: 'sizes',
              description: {
                kind: 'markdown',
                value:
                  "This attribute defines the sizes of the icons for visual media contained in the resource. It must be present only if the [`rel`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#attr-rel) contains a value of `icon` or a non-standard type such as Apple's `apple-touch-icon`. It may have the following values:\n\n*   `any`, meaning that the icon can be scaled to any size as it is in a vector format, like `image/svg+xml`.\n*   a white-space separated list of sizes, each in the format `_<width in pixels>_x_<height in pixels>_` or `_<width in pixels>_X_<height in pixels>_`. Each of these sizes must be contained in the resource.\n\n**Note:** Most icon formats are only able to store one single icon; therefore most of the time the [`sizes`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-sizes) contains only one entry. MS's ICO format does, as well as Apple's ICNS. ICO is more ubiquitous; you should definitely use it.",
              },
            },
            {
              name: 'as',
              description:
                'This attribute is only used when `rel="preload"` or `rel="prefetch"` has been set on the `<link>` element. It specifies the type of content being loaded by the `<link>`, which is necessary for content prioritization, request matching, application of correct [content security policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP), and setting of correct [`Accept`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept "The Accept request HTTP header advertises which content types, expressed as MIME types, the client is able to understand. Using content negotiation, the server then selects one of the proposals, uses it and informs the client of its choice with the Content-Type response header. Browsers set adequate values for this header depending on\xa0the context where the request is done: when fetching a CSS stylesheet a different value is set for the request than when fetching an image,\xa0video or a script.") request header.',
            },
            {
              name: 'importance',
              description:
                'Indicates the relative importance of the resource. Priority hints are delegated using the values:',
            },
            {
              name: 'importance',
              description:
                '**`auto`**: Indicates\xa0**no\xa0preference**. The browser may use its own heuristics to decide the priority of the resource.\n\n**`high`**: Indicates to the\xa0browser\xa0that the resource is of\xa0**high** priority.\n\n**`low`**:\xa0Indicates to the\xa0browser\xa0that the resource is of\xa0**low** priority.\n\n**Note:** The `importance` attribute may only be used for the `<link>` element if `rel="preload"` or `rel="prefetch"` is present.',
            },
            {
              name: 'integrity',
              description:
                'Contains inline metadata \u2014 a base64-encoded cryptographic hash of the resource (file) you\u2019re telling the browser to fetch. The browser can use this to verify that the fetched resource has been delivered free of unexpected manipulation. See [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity).',
            },
            {
              name: 'referrerpolicy',
              description:
                'A string indicating which referrer to use when fetching the resource:\n\n*   `no-referrer` means that the [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer "The Referer request header contains the address of the previous web page from which a link to the currently requested page was followed. The Referer header allows servers to identify where people are visiting them from and may use that data for analytics, logging, or optimized caching, for example.") header will not be sent.\n*   `no-referrer-when-downgrade` means that no [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer "The Referer request header contains the address of the previous web page from which a link to the currently requested page was followed. The Referer header allows servers to identify where people are visiting them from and may use that data for analytics, logging, or optimized caching, for example.") header will be sent when navigating to an origin without TLS (HTTPS). This is a user agent\u2019s default behavior, if no policy is otherwise specified.\n*   `origin` means that the referrer will be the origin of the page, which is roughly the scheme, the host, and the port.\n*   `origin-when-cross-origin` means that navigating to other origins will be limited to the scheme, the host, and the port, while navigating on the same origin will include the referrer\'s path.\n*   `unsafe-url` means that the referrer will include the origin and the path (but not the fragment, password, or username). This case is unsafe because it can leak origins and paths from TLS-protected resources to insecure origins.',
            },
            {
              name: 'title',
              description:
                'The `title` attribute has special semantics on the `<link>` element. When used on a `<link rel="stylesheet">` it defines a [preferred or an alternate stylesheet](https://developer.mozilla.org/en-US/docs/Web/CSS/Alternative_style_sheets). Incorrectly using it may [cause the stylesheet to be ignored](https://developer.mozilla.org/en-US/docs/Correctly_Using_Titles_With_External_Stylesheets).',
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/link',
            },
          ],
        },
        {
          name: 'meta',
          description: {
            kind: 'markdown',
            value:
              'The meta element represents various kinds of metadata that cannot be expressed using the title, base, link, style, and script elements.',
          },
          attributes: [
            {
              name: 'name',
              description: {
                kind: 'markdown',
                value:
                  'This attribute defines the name of a piece of document-level metadata. It should not be set if one of the attributes [`itemprop`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-itemprop), [`http-equiv`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-http-equiv) or [`charset`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-charset) is also set.\n\nThis metadata name is associated with the value contained by the [`content`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-content) attribute. The possible values for the name attribute are:\n\n*   `application-name` which defines the name of the application running in the web page.\n    \n    **Note:**\n    \n    *   Browsers may use this to identify the application. It is different from the [`<title>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title "The HTML Title element (<title>) defines the document\'s title that is shown in a browser\'s title bar or a page\'s tab.") element, which usually contain the application name, but may also contain information like the document name or a status.\n    *   Simple web pages shouldn\'t define an application-name.\n    \n*   `author` which defines the name of the document\'s author.\n*   `description` which contains a short and accurate summary of the content of the page. Several browsers, like Firefox and Opera, use this as the default description of bookmarked pages.\n*   `generator` which contains the identifier of the software that generated the page.\n*   `keywords` which contains words relevant to the page\'s content separated by commas.\n*   `referrer` which controls the [`Referer` HTTP header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer) attached to requests sent from the document:\n    \n    Values for the `content` attribute of `<meta name="referrer">`\n    \n    `no-referrer`\n    \n    Do not send a HTTP `Referrer` header.\n    \n    `origin`\n    \n    Send the [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin) of the document.\n    \n    `no-referrer-when-downgrade`\n    \n    Send the [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin) as a referrer to URLs as secure as the current page, (https\u2192https), but does not send a referrer to less secure URLs (https\u2192http). This is the default behaviour.\n    \n    `origin-when-cross-origin`\n    \n    Send the full URL (stripped of parameters) for same-origin requests, but only send the [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin) for other cases.\n    \n    `same-origin`\n    \n    A referrer will be sent for [same-site origins](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy), but cross-origin requests will contain no referrer information.\n    \n    `strict-origin`\n    \n    Only send the origin of the document as the referrer to a-priori as-much-secure destination (HTTPS->HTTPS), but don\'t send it to a less secure destination (HTTPS->HTTP).\n    \n    `strict-origin-when-cross-origin`\n    \n    Send a full URL when performing a same-origin request, only send the origin of the document to a-priori as-much-secure destination (HTTPS->HTTPS), and send no header to a less secure destination (HTTPS->HTTP).\n    \n    `unsafe-URL`\n    \n    Send the full URL (stripped of parameters) for same-origin or cross-origin requests.\n    \n    **Notes:**\n    \n    *   Some browsers support the deprecated values of `always`, `default`, and `never` for referrer.\n    *   Dynamically inserting `<meta name="referrer">` (with [`document.write`](https://developer.mozilla.org/en-US/docs/Web/API/Document/write) or [`appendChild`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)) makes the referrer behaviour unpredictable.\n    *   When several conflicting policies are defined, the no-referrer policy is applied.\n    \n\nThis attribute may also have a value taken from the extended list defined on [WHATWG Wiki MetaExtensions page](https://wiki.whatwg.org/wiki/MetaExtensions). Although none have been formally accepted yet, a few commonly used names are:\n\n*   `creator` which defines the name of the creator of the document, such as an organization or institution. If there are more than one, several [`<meta>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta "The HTML <meta> element represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> or <title>.") elements should be used.\n*   `googlebot`, a synonym of `robots`, is only followed by Googlebot (the indexing crawler for Google).\n*   `publisher` which defines the name of the document\'s publisher.\n*   `robots` which defines the behaviour that cooperative crawlers, or "robots", should use with the page. It is a comma-separated list of the values below:\n    \n    Values for the content of `<meta name="robots">`\n    \n    Value\n    \n    Description\n    \n    Used by\n    \n    `index`\n    \n    Allows the robot to index the page (default).\n    \n    All\n    \n    `noindex`\n    \n    Requests the robot to not index the page.\n    \n    All\n    \n    `follow`\n    \n    Allows the robot to follow the links on the page (default).\n    \n    All\n    \n    `nofollow`\n    \n    Requests the robot to not follow the links on the page.\n    \n    All\n    \n    `none`\n    \n    Equivalent to `noindex, nofollow`\n    \n    [Google](https://support.google.com/webmasters/answer/79812)\n    \n    `noodp`\n    \n    Prevents using the [Open Directory Project](https://www.dmoz.org/) description, if any, as the page description in search engine results.\n    \n    [Google](https://support.google.com/webmasters/answer/35624#nodmoz), [Yahoo](https://help.yahoo.com/kb/search-for-desktop/meta-tags-robotstxt-yahoo-search-sln2213.html#cont5), [Bing](https://www.bing.com/webmaster/help/which-robots-metatags-does-bing-support-5198d240)\n    \n    `noarchive`\n    \n    Requests the search engine not to cache the page content.\n    \n    [Google](https://developers.google.com/webmasters/control-crawl-index/docs/robots_meta_tag#valid-indexing--serving-directives), [Yahoo](https://help.yahoo.com/kb/search-for-desktop/SLN2213.html), [Bing](https://www.bing.com/webmaster/help/which-robots-metatags-does-bing-support-5198d240)\n    \n    `nosnippet`\n    \n    Prevents displaying any description of the page in search engine results.\n    \n    [Google](https://developers.google.com/webmasters/control-crawl-index/docs/robots_meta_tag#valid-indexing--serving-directives), [Bing](https://www.bing.com/webmaster/help/which-robots-metatags-does-bing-support-5198d240)\n    \n    `noimageindex`\n    \n    Requests this page not to appear as the referring page of an indexed image.\n    \n    [Google](https://developers.google.com/webmasters/control-crawl-index/docs/robots_meta_tag#valid-indexing--serving-directives)\n    \n    `nocache`\n    \n    Synonym of `noarchive`.\n    \n    [Bing](https://www.bing.com/webmaster/help/which-robots-metatags-does-bing-support-5198d240)\n    \n    **Notes:**\n    \n    *   Only cooperative robots follow these rules. Do not expect to prevent e-mail harvesters with them.\n    *   The robot still needs to access the page in order to read these rules. To prevent bandwidth consumption, use a _[robots.txt](https://developer.mozilla.org/en-US/docs/Glossary/robots.txt "robots.txt: Robots.txt is a file which is usually placed in the root of any website. It decides whether\xa0crawlers are permitted or forbidden access to the web site.")_ file.\n    *   If you want to remove a page, `noindex` will work, but only after the robot visits the page again. Ensure that the `robots.txt` file is not preventing revisits.\n    *   Some values are mutually exclusive, like `index` and `noindex`, or `follow` and `nofollow`. In these cases the robot\'s behaviour is undefined and may vary between them.\n    *   Some crawler robots, like Google, Yahoo and Bing, support the same values for the HTTP header `X-Robots-Tag`; this allows non-HTML documents like images to use these rules.\n    \n*   `slurp`, is a synonym of `robots`, but only for Slurp - the crawler for Yahoo Search.\n*   `viewport`, which gives hints about the size of the initial size of the [viewport](https://developer.mozilla.org/en-US/docs/Glossary/viewport "viewport: A viewport represents a polygonal (normally rectangular) area in computer graphics that is currently being viewed. In web browser terms, it refers to the part of the document you\'re viewing which is currently visible in its window (or the screen, if the document is being viewed in full screen mode). Content outside the viewport is not visible onscreen until scrolled into view."). Used by mobile devices only.\n    \n    Values for the content of `<meta name="viewport">`\n    \n    Value\n    \n    Possible subvalues\n    \n    Description\n    \n    `width`\n    \n    A positive integer number, or the text `device-width`\n    \n    Defines the pixel width of the viewport that you want the web site to be rendered at.\n    \n    `height`\n    \n    A positive integer, or the text `device-height`\n    \n    Defines the height of the viewport. Not used by any browser.\n    \n    `initial-scale`\n    \n    A positive number between `0.0` and `10.0`\n    \n    Defines the ratio between the device width (`device-width` in portrait mode or `device-height` in landscape mode) and the viewport size.\n    \n    `maximum-scale`\n    \n    A positive number between `0.0` and `10.0`\n    \n    Defines the maximum amount to zoom in. It must be greater or equal to the `minimum-scale` or the behaviour is undefined. Browser settings can ignore this rule and iOS10+ ignores it by default.\n    \n    `minimum-scale`\n    \n    A positive number between `0.0` and `10.0`\n    \n    Defines the minimum zoom level. It must be smaller or equal to the `maximum-scale` or the behaviour is undefined. Browser settings can ignore this rule and iOS10+ ignores it by default.\n    \n    `user-scalable`\n    \n    `yes` or `no`\n    \n    If set to `no`, the user is not able to zoom in the webpage. The default is `yes`. Browser settings can ignore this rule, and iOS10+ ignores it by default.\n    \n    Specification\n    \n    Status\n    \n    Comment\n    \n    [CSS Device Adaptation  \n    The definition of \'<meta name="viewport">\' in that specification.](https://drafts.csswg.org/css-device-adapt/#viewport-meta)\n    \n    Working Draft\n    \n    Non-normatively describes the Viewport META element\n    \n    See also: [`@viewport`](https://developer.mozilla.org/en-US/docs/Web/CSS/@viewport "The @viewport CSS at-rule lets you configure the viewport through which the document is viewed. It\'s primarily used for mobile devices, but is also used by desktop browsers that support features like "snap to edge" (such as Microsoft Edge).")\n    \n    **Notes:**\n    \n    *   Though unstandardized, this declaration is respected by most mobile browsers due to de-facto dominance.\n    *   The default values may vary between devices and browsers.\n    *   To learn about this declaration in Firefox for Mobile, see [this article](https://developer.mozilla.org/en-US/docs/Mobile/Viewport_meta_tag "Mobile/Viewport meta tag").',
              },
            },
            {
              name: 'http-equiv',
              description: {
                kind: 'markdown',
                value:
                  'Defines a pragma directive. The attribute is named `**http-equiv**(alent)` because all the allowed values are names of particular HTTP headers:\n\n*   `"content-language"`  \n    Defines the default language of the page. It can be overridden by the [lang](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) attribute on any element.\n    \n    **Warning:** Do not use this value, as it is obsolete. Prefer the `lang` attribute on the [`<html>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html "The HTML <html> element represents the root (top-level element) of an HTML document, so it is also referred to as the root element. All other elements must be descendants of this element.") element.\n    \n*   `"content-security-policy"`  \n    Allows page authors to define a [content policy](https://developer.mozilla.org/en-US/docs/Web/Security/CSP/CSP_policy_directives) for the current page. Content policies mostly specify allowed server origins and script endpoints which help guard against cross-site scripting attacks.\n*   `"content-type"`  \n    Defines the [MIME type](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type) of the document, followed by its character encoding. It follows the same syntax as the HTTP `content-type` entity-header field, but as it is inside a HTML page, most values other than `text/html` are impossible. Therefore the valid syntax for its `content` is the string \'`text/html`\' followed by a character set with the following syntax: \'`; charset=_IANAcharset_`\', where `IANAcharset` is the _preferred MIME name_ for a character set as [defined by the IANA.](https://www.iana.org/assignments/character-sets)\n    \n    **Warning:** Do not use this value, as it is obsolete. Use the [`charset`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-charset) attribute on the [`<meta>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta "The HTML <meta> element represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> or <title>.") element.\n    \n    **Note:** As [`<meta>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta "The HTML <meta> element represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> or <title>.") can\'t change documents\' types in XHTML or HTML5\'s XHTML serialization, never set the MIME type to an XHTML MIME type with `<meta>`.\n    \n*   `"refresh"`  \n    This instruction specifies:\n    *   The number of seconds until the page should be reloaded - only if the [`content`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-content) attribute contains a positive integer.\n    *   The number of seconds until the page should redirect to another - only if the [`content`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-content) attribute contains a positive integer followed by the string \'`;url=`\', and a valid URL.\n*   `"set-cookie"`  \n    Defines a [cookie](https://developer.mozilla.org/en-US/docs/cookie) for the page. Its content must follow the syntax defined in the [IETF HTTP Cookie Specification](https://tools.ietf.org/html/draft-ietf-httpstate-cookie-14).\n    \n    **Warning:** Do not use this instruction, as it is obsolete. Use the HTTP header [`Set-Cookie`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie) instead.',
              },
            },
            {
              name: 'content',
              description: {
                kind: 'markdown',
                value:
                  'This attribute contains the value for the [`http-equiv`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-http-equiv) or [`name`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-name) attribute, depending on which is used.',
              },
            },
            {
              name: 'charset',
              description: {
                kind: 'markdown',
                value:
                  'This attribute declares the page\'s character encoding. It must contain a [standard IANA MIME name for character encodings](https://www.iana.org/assignments/character-sets). Although the standard doesn\'t request a specific encoding, it suggests:\n\n*   Authors are encouraged to use [`UTF-8`](https://developer.mozilla.org/en-US/docs/Glossary/UTF-8).\n*   Authors should not use ASCII-incompatible encodings to avoid security risk: browsers not supporting them may interpret harmful content as HTML. This happens with the `JIS_C6226-1983`, `JIS_X0212-1990`, `HZ-GB-2312`, `JOHAB`, the ISO-2022 family and the EBCDIC family.\n\n**Note:** ASCII-incompatible encodings are those that don\'t map the 8-bit code points `0x20` to `0x7E` to the `0x0020` to `0x007E` Unicode code points)\n\n*   Authors **must not** use `CESU-8`, `UTF-7`, `BOCU-1` and/or `SCSU` as [cross-site scripting](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting) attacks with these encodings have been demonstrated.\n*   Authors should not use `UTF-32` because not all HTML5 encoding algorithms can distinguish it from `UTF-16`.\n\n**Notes:**\n\n*   The declared character encoding must match the one the page was saved with to avoid garbled characters and security holes.\n*   The [`<meta>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta "The HTML <meta> element represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> or <title>.") element declaring the encoding must be inside the [`<head>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head "The HTML <head> element provides general information (metadata) about the document, including its title and links to its\xa0scripts and style sheets.") element and **within the first 1024 bytes** of the HTML as some browsers only look at those bytes before choosing an encoding.\n*   This [`<meta>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta "The HTML <meta> element represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> or <title>.") element is only one part of the [algorithm to determine a page\'s character set](https://www.whatwg.org/specs/web-apps/current-work/multipage/parsing.html#encoding-sniffing-algorithm "Algorithm charset page"). The [`Content-Type` header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) and any [Byte-Order Marks](https://developer.mozilla.org/en-US/docs/Glossary/Byte-Order_Mark "The definition of that term (Byte-Order Marks) has not been written yet; please consider contributing it!") override this element.\n*   It is strongly recommended to define the character encoding. If a page\'s encoding is undefined, cross-scripting techniques are possible, such as the [`UTF-7` fallback cross-scripting technique](https://code.google.com/p/doctype-mirror/wiki/ArticleUtf7).\n*   The [`<meta>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta "The HTML <meta> element represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> or <title>.") element with a `charset` attribute is a synonym for the pre-HTML5 `<meta http-equiv="Content-Type" content="text/html; charset=_IANAcharset_">`, where _`IANAcharset`_ contains the value of the equivalent [`charset`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-charset) attribute. This syntax is still allowed, although no longer recommended.',
              },
            },
            {
              name: 'scheme',
              description:
                'This attribute defines the scheme in which metadata is described. A scheme is a context leading to the correct interpretations of the [`content`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-content) value, like a format.\n\n**Warning:** Do not use this value, as it is obsolete. There is no replacement as there was no real usage for it.',
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/meta',
            },
          ],
        },
        {
          name: 'style',
          description: {
            kind: 'markdown',
            value:
              'The style element allows authors to embed style information in their documents. The style element is one of several inputs to the styling processing model. The element does not represent content for the user.',
          },
          attributes: [
            {
              name: 'media',
              description: {
                kind: 'markdown',
                value:
                  'This attribute defines which media the style should be applied to. Its value is a [media query](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Media_queries), which defaults to `all` if the attribute is missing.',
              },
            },
            {
              name: 'nonce',
              description: {
                kind: 'markdown',
                value:
                  'A cryptographic nonce (number used once) used to whitelist inline styles in a [style-src Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src). The server must generate a unique nonce value each time it transmits a policy. It is critical to provide a nonce that cannot be guessed as bypassing a resource\u2019s policy is otherwise trivial.',
              },
            },
            {
              name: 'type',
              description: {
                kind: 'markdown',
                value:
                  'This attribute defines the styling language as a MIME type (charset should not be specified). This attribute is optional and defaults to `text/css` if it is not specified \u2014 there is very little reason to include this in modern web documents.',
              },
            },
            { name: 'scoped', valueSet: 'v' },
            {
              name: 'title',
              description:
                'This attribute specifies [alternative style sheet](https://developer.mozilla.org/en-US/docs/Web/CSS/Alternative_style_sheets) sets.',
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/style',
            },
          ],
        },
        {
          name: 'body',
          description: {
            kind: 'markdown',
            value: 'The body element represents the content of the document.',
          },
          attributes: [
            {
              name: 'onafterprint',
              description: {
                kind: 'markdown',
                value:
                  'Function to call after the user has printed the document.',
              },
            },
            {
              name: 'onbeforeprint',
              description: {
                kind: 'markdown',
                value:
                  'Function to call when the user requests printing of the document.',
              },
            },
            {
              name: 'onbeforeunload',
              description: {
                kind: 'markdown',
                value:
                  'Function to call when the document is about to be unloaded.',
              },
            },
            {
              name: 'onhashchange',
              description: {
                kind: 'markdown',
                value:
                  "Function to call when the fragment identifier part (starting with the hash (`'#'`) character) of the document's current address has changed.",
              },
            },
            {
              name: 'onlanguagechange',
              description: {
                kind: 'markdown',
                value: 'Function to call when the preferred languages changed.',
              },
            },
            {
              name: 'onmessage',
              description: {
                kind: 'markdown',
                value:
                  'Function to call when the document has received a message.',
              },
            },
            {
              name: 'onoffline',
              description: {
                kind: 'markdown',
                value:
                  'Function to call when network communication has failed.',
              },
            },
            {
              name: 'ononline',
              description: {
                kind: 'markdown',
                value:
                  'Function to call when network communication has been restored.',
              },
            },
            { name: 'onpagehide' },
            { name: 'onpageshow' },
            {
              name: 'onpopstate',
              description: {
                kind: 'markdown',
                value:
                  'Function to call when the user has navigated session history.',
              },
            },
            {
              name: 'onstorage',
              description: {
                kind: 'markdown',
                value: 'Function to call when the storage area has changed.',
              },
            },
            {
              name: 'onunload',
              description: {
                kind: 'markdown',
                value: 'Function to call when the document is going away.',
              },
            },
            {
              name: 'alink',
              description:
                'Color of text for hyperlinks when selected. _This method is non-conforming, use CSS [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color "The color CSS property sets the foreground color value of an element\'s text and text decorations, and sets the currentcolor value.") property in conjunction with the [`:active`](https://developer.mozilla.org/en-US/docs/Web/CSS/:active "The :active CSS pseudo-class represents an element (such as a button) that is being activated by the user.") pseudo-class instead._',
            },
            {
              name: 'background',
              description:
                'URI of a image to use as a background. _This method is non-conforming, use CSS [`background`](https://developer.mozilla.org/en-US/docs/Web/CSS/background "The background shorthand CSS property sets all background style properties at once, such as color, image, origin and size, or repeat method.") property on the element instead._',
            },
            {
              name: 'bgcolor',
              description:
                'Background color for the document. _This method is non-conforming, use CSS [`background-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color "The background-color CSS property sets the background color of an element.") property on the element instead._',
            },
            {
              name: 'bottommargin',
              description:
                'The margin of the bottom of the body. _This method is non-conforming, use CSS [`margin-bottom`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom "The margin-bottom CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.") property on the element instead._',
            },
            {
              name: 'leftmargin',
              description:
                'The margin of the left of the body. _This method is non-conforming, use CSS [`margin-left`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left "The margin-left CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.") property on the element instead._',
            },
            {
              name: 'link',
              description:
                'Color of text for unvisited hypertext links. _This method is non-conforming, use CSS [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color "The color CSS property sets the foreground color value of an element\'s text and text decorations, and sets the currentcolor value.") property in conjunction with the [`:link`](https://developer.mozilla.org/en-US/docs/Web/CSS/:link "The :link CSS pseudo-class represents an element that has not yet been visited. It matches every unvisited <a>, <area>, or <link> element that has an href attribute.") pseudo-class instead._',
            },
            {
              name: 'onblur',
              description: 'Function to call when the document loses focus.',
            },
            {
              name: 'onerror',
              description:
                'Function to call when the document fails to load properly.',
            },
            {
              name: 'onfocus',
              description: 'Function to call when the document receives focus.',
            },
            {
              name: 'onload',
              description:
                'Function to call when the document has finished loading.',
            },
            {
              name: 'onredo',
              description:
                'Function to call when the user has moved forward in undo transaction history.',
            },
            {
              name: 'onresize',
              description:
                'Function to call when the document has been resized.',
            },
            {
              name: 'onundo',
              description:
                'Function to call when the user has moved backward in undo transaction history.',
            },
            {
              name: 'rightmargin',
              description:
                'The margin of the right of the body. _This method is non-conforming, use CSS [`margin-right`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right "The margin-right CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.") property on the element instead._',
            },
            {
              name: 'text',
              description:
                'Foreground color of text. _This method is non-conforming, use CSS [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color "The color CSS property sets the foreground color value of an element\'s text and text decorations, and sets the currentcolor value.") property on the element instead._',
            },
            {
              name: 'topmargin',
              description:
                'The margin of the top of the body. _This method is non-conforming, use CSS [`margin-top`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top "The margin-top CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.") property on the element instead._',
            },
            {
              name: 'vlink',
              description:
                'Color of text for visited hypertext links. _This method is non-conforming, use CSS [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color "The color CSS property sets the foreground color value of an element\'s text and text decorations, and sets the currentcolor value.") property in conjunction with the [`:visited`](https://developer.mozilla.org/en-US/docs/Web/CSS/:visited "The :visited CSS pseudo-class represents links that the user has already visited. For privacy reasons, the styles that can be modified using this selector are very limited.") pseudo-class instead._',
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/body',
            },
          ],
        },
        {
          name: 'article',
          description: {
            kind: 'markdown',
            value:
              'The article element represents a complete, or self-contained, composition in a document, page, application, or site and that is, in principle, independently distributable or reusable, e.g. in syndication. This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment, an interactive widget or gadget, or any other independent item of content. Each article should be identified, typically by including a heading (h1\u2013h6 element) as a child of the article element.',
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/article',
            },
          ],
        },
        {
          name: 'section',
          description: {
            kind: 'markdown',
            value:
              'The section element represents a generic section of a document or application. A section, in this context, is a thematic grouping of content. Each section should be identified, typically by including a heading ( h1- h6 element) as a child of the section element.',
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/section',
            },
          ],
        },
        {
          name: 'nav',
          description: {
            kind: 'markdown',
            value:
              'The nav element represents a section of a page that links to other pages or to parts within the page: a section with navigation links.',
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/nav',
            },
          ],
        },
        {
          name: 'aside',
          description: {
            kind: 'markdown',
            value:
              'The aside element represents a section of a page that consists of content that is tangentially related to the content around the aside element, and which could be considered separate from that content. Such sections are often represented as sidebars in printed typography.',
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/aside',
            },
          ],
        },
        {
          name: 'h1',
          description: {
            kind: 'markdown',
            value: 'The h1 element represents a section heading.',
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements',
            },
          ],
        },
        {
          name: 'h2',
          description: {
            kind: 'markdown',
            value: 'The h2 element represents a section heading.',
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements',
            },
          ],
        },
        {
          name: 'h3',
          description: {
            kind: 'markdown',
            value: 'The h3 element represents a section heading.',
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements',
            },
          ],
        },
        {
          name: 'h4',
          description: {
            kind: 'markdown',
            value: 'The h4 element represents a section heading.',
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements',
            },
          ],
        },
        {
          name: 'h5',
          description: {
            kind: 'markdown',
            value: 'The h5 element represents a section heading.',
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements',
            },
          ],
        },
        {
          name: 'h6',
          description: {
            kind: 'markdown',
            value: 'The h6 element represents a section heading.',
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements',
            },
          ],
        },
        {
          name: 'header',
          description: {
            kind: 'markdown',
            value:
              'The header element represents introductory content for its nearest ancestor sectioning content or sectioning root element. A header typically contains a group of introductory or navigational aids. When the nearest ancestor sectioning content or sectioning root element is the body element, then it applies to the whole page.',
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/header',
            },
          ],
        },
        {
          name: 'footer',
          description: {
            kind: 'markdown',
            value:
              'The footer element represents a footer for its nearest ancestor sectioning content or sectioning root element. A footer typically contains information about its section such as who wrote it, links to related documents, copyright data, and the like.',
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/footer',
            },
          ],
        },
        {
          name: 'address',
          description: {
            kind: 'markdown',
            value:
              'The address element represents the contact information for its nearest article or body element ancestor. If that is the body element, then the contact information applies to the document as a whole.',
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/address',
            },
          ],
        },
        {
          name: 'p',
          description: {
            kind: 'markdown',
            value: 'The p element represents a paragraph.',
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/p',
            },
          ],
        },
        {
          name: 'hr',
          description: {
            kind: 'markdown',
            value:
              'The hr element represents a paragraph-level thematic break, e.g. a scene change in a story, or a transition to another topic within a section of a reference book.',
          },
          attributes: [
            {
              name: 'align',
              description:
                'Sets the alignment of the rule on the page. If no value is specified, the default value is `left`.',
            },
            {
              name: 'color',
              description:
                'Sets the color of the rule through color name or hexadecimal value.',
            },
            {
              name: 'noshade',
              description: 'Sets the rule to have no shading.',
            },
            {
              name: 'size',
              description: 'Sets the height, in pixels, of the rule.',
            },
            {
              name: 'width',
              description:
                'Sets the length of the rule on the page through a pixel or percentage value.',
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/hr',
            },
          ],
        },
        {
          name: 'pre',
          description: {
            kind: 'markdown',
            value:
              'The pre element represents a block of preformatted text, in which structure is represented by typographic conventions rather than by elements.',
          },
          attributes: [
            {
              name: 'cols',
              description:
                'Contains the _preferred_ count of characters that a line should have. It was a non-standard synonym of [`width`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre#attr-width). To achieve such an effect, use CSS [`width`](https://developer.mozilla.org/en-US/docs/Web/CSS/width "The width CSS property sets an element\'s width. By default it sets the width of the content area, but if box-sizing is set to border-box, it sets the width of the border area.") instead.',
            },
            {
              name: 'width',
              description:
                'Contains the _preferred_ count of characters that a line should have. Though technically still implemented, this attribute has no visual effect; to achieve such an effect, use CSS [`width`](https://developer.mozilla.org/en-US/docs/Web/CSS/width "The width CSS property sets an element\'s width. By default it sets the width of the content area, but if box-sizing is set to border-box, it sets the width of the border area.") instead.',
            },
            {
              name: 'wrap',
              description:
                'Is a _hint_ indicating how the overflow must happen. In modern browser this hint is ignored and no visual effect results in its present; to achieve such an effect, use CSS [`white-space`](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space "The white-space CSS property sets how white space inside an element is handled.") instead.',
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/pre',
            },
          ],
        },
        {
          name: 'blockquote',
          description: {
            kind: 'markdown',
            value:
              'The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a footer or cite element, and optionally with in-line changes such as annotations and abbreviations.',
          },
          attributes: [
            {
              name: 'cite',
              description: {
                kind: 'markdown',
                value:
                  'A URL that designates a source document or message for the information quoted. This attribute is intended to point to information explaining the context or the reference for the quote.',
              },
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/blockquote',
            },
          ],
        },
        {
          name: 'ol',
          description: {
            kind: 'markdown',
            value:
              'The ol element represents a list of items, where the items have been intentionally ordered, such that changing the order would change the meaning of the document.',
          },
          attributes: [
            {
              name: 'reversed',
              valueSet: 'v',
              description: {
                kind: 'markdown',
                value:
                  'This Boolean attribute specifies that the items of the list are specified in reversed order.',
              },
            },
            {
              name: 'start',
              description: {
                kind: 'markdown',
                value:
                  'This integer attribute specifies the start value for numbering the individual list items. Although the ordering type of list elements might be Roman numerals, such as XXXI, or letters, the value of start is always represented as a number. To start numbering elements from the letter "C", use `<ol start="3">`.\n\n**Note**: This attribute was deprecated in HTML4, but reintroduced in HTML5.',
              },
            },
            {
              name: 'type',
              valueSet: 'lt',
              description: {
                kind: 'markdown',
                value:
                  "Indicates the numbering type:\n\n*   `'a'` indicates lowercase letters,\n*   `'A'` indicates uppercase letters,\n*   `'i'` indicates lowercase Roman numerals,\n*   `'I'` indicates uppercase Roman numerals,\n*   and `'1'` indicates numbers (default).\n\nThe type set is used for the entire list unless a different [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li#attr-type) attribute is used within an enclosed [`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li \"The HTML <li> element is used to represent an item in a list. It must be contained in a parent element: an ordered list (<ol>), an unordered list (<ul>), or a menu (<menu>). In menus and unordered lists, list items are usually displayed using bullet points. In ordered lists, they are usually displayed with an ascending counter on the left, such as a number or letter.\") element.\n\n**Note:** This attribute was deprecated in HTML4, but reintroduced in HTML5.\n\nUnless the value of the list number matters (e.g. in legal or technical documents where items are to be referenced by their number/letter), the CSS [`list-style-type`](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type \"The list-style-type CSS property sets the marker (such as a disc, character, or custom counter style) of a list item element.\") property should be used instead.",
              },
            },
            {
              name: 'compact',
              description:
                'This Boolean attribute hints that the list should be rendered in a compact style. The interpretation of this attribute depends on the user agent and it doesn\'t work in all browsers.\n\n**Warning:** Do not use this attribute, as it has been deprecated: the [`<ol>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol "The HTML <ol> element represents an ordered list of items, typically rendered as a numbered list.") element should be styled using [CSS](https://developer.mozilla.org/en-US/docs/CSS). To give an effect similar to the `compact` attribute, the [CSS](https://developer.mozilla.org/en-US/docs/CSS) property [`line-height`](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height "The line-height CSS property sets the amount of space used for lines, such as in text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height.") can be used with a value of `80%`.',
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/ol',
            },
          ],
        },
        {
          name: 'ul',
          description: {
            kind: 'markdown',
            value:
              'The ul element represents a list of items, where the order of the items is not important \u2014 that is, where changing the order would not materially change the meaning of the document.',
          },
          attributes: [
            {
              name: 'compact',
              description:
                'This Boolean attribute hints that the list should be rendered in a compact style. The interpretation of this attribute depends on the user agent and it doesn\'t work in all browsers.\n\n**Usage note:\xa0**Do not use this attribute, as it has been deprecated: the [`<ul>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul "The HTML <ul> element represents an unordered list of items, typically rendered as a bulleted list.") element should be styled using [CSS](https://developer.mozilla.org/en-US/docs/CSS). To give a similar effect as the `compact` attribute, the [CSS](https://developer.mozilla.org/en-US/docs/CSS) property [line-height](https://developer.mozilla.org/en-US/docs/CSS/line-height) can be used with a value of `80%`.',
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/ul',
            },
          ],
        },
        {
          name: 'li',
          description: {
            kind: 'markdown',
            value:
              "The li element represents a list item. If its parent element is an ol, ul, or menu element, then the element is an item of the parent element's list, as defined for those elements. Otherwise, the list item has no defined list-related relationship to any other li element.",
          },
          attributes: [
            {
              name: 'value',
              description: {
                kind: 'markdown',
                value:
                  'This integer attribute indicates the current ordinal value of the list item as defined by the [`<ol>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol "The HTML <ol> element represents an ordered list of items, typically rendered as a numbered list.") element. The only allowed value for this attribute is a number, even if the list is displayed with Roman numerals or letters. List items that follow this one continue numbering from the value set. The **value** attribute has no meaning for unordered lists ([`<ul>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul "The HTML <ul> element represents an unordered list of items, typically rendered as a bulleted list.")) or for menus ([`<menu>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu "The HTML <menu> element represents a group of commands that a user can perform or activate. This includes both list menus, which might appear across the top of a screen, as well as context menus, such as those that might appear underneath a button after it has been clicked.")).\n\n**Note**: This attribute was deprecated in HTML4, but reintroduced in HTML5.\n\n**Note:** Prior to Gecko\xa09.0, negative values were incorrectly converted to 0. Starting in Gecko\xa09.0 all integer values are correctly parsed.',
              },
            },
            {
              name: 'type',
              description:
                'This character attribute indicates the numbering type:\n\n*   `a`: lowercase letters\n*   `A`: uppercase letters\n*   `i`: lowercase Roman numerals\n*   `I`: uppercase Roman numerals\n*   `1`: numbers\n\nThis type overrides the one used by its parent [`<ol>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol "The HTML <ol> element represents an ordered list of items, typically rendered as a numbered list.") element, if any.\n\n**Usage note:** This attribute has been deprecated: use the CSS [`list-style-type`](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type "The list-style-type CSS property sets the marker (such as a disc, character, or custom counter style) of a list item element.") property instead.',
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/li',
            },
          ],
        },
        {
          name: 'dl',
          description: {
            kind: 'markdown',
            value:
              'The dl element represents an association list consisting of zero or more name-value groups (a description list). A name-value group consists of one or more names (dt elements) followed by one or more values (dd elements), ignoring any nodes other than dt and dd elements. Within a single dl element, there should not be more than one dt element for each name.',
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/dl',
            },
          ],
        },
        {
          name: 'dt',
          description: {
            kind: 'markdown',
            value:
              'The dt element represents the term, or name, part of a term-description group in a description list (dl element).',
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/dt',
            },
          ],
        },
        {
          name: 'dd',
          description: {
            kind: 'markdown',
            value:
              'The dd element represents the description, definition, or value, part of a term-description group in a description list (dl element).',
          },
          attributes: [
            {
              name: 'nowrap',
              description:
                'If the value of this attribute is set to `yes`, the definition text will not wrap. The default value is `no`.',
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/dd',
            },
          ],
        },
        {
          name: 'figure',
          description: {
            kind: 'markdown',
            value:
              'The figure element represents some flow content, optionally with a caption, that is self-contained (like a complete sentence) and is typically referenced as a single unit from the main flow of the document.',
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/figure',
            },
          ],
        },
        {
          name: 'figcaption',
          description: {
            kind: 'markdown',
            value:
              "The figcaption element represents a caption or legend for the rest of the contents of the figcaption element's parent figure element, if any.",
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/figcaption',
            },
          ],
        },
        {
          name: 'main',
          description: {
            kind: 'markdown',
            value:
              'The main element represents the main content of the body of a document or application. The main content area consists of content that is directly related to or expands upon the central topic of a document or central functionality of an application.',
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/main',
            },
          ],
        },
        {
          name: 'div',
          description: {
            kind: 'markdown',
            value:
              'The div element has no special meaning at all. It represents its children. It can be used with the class, lang, and title attributes to mark up semantics common to a group of consecutive elements.',
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/div',
            },
          ],
        },
        {
          name: 'a',
          description: {
            kind: 'markdown',
            value:
              'If the a element has an href attribute, then it represents a hyperlink (a hypertext anchor) labeled by its contents.',
          },
          attributes: [
            {
              name: 'href',
              description: {
                kind: 'markdown',
                value:
                  'Contains a URL or a URL fragment that the hyperlink points to.',
              },
            },
            {
              name: 'target',
              description: {
                kind: 'markdown',
                value:
                  'Specifies where to display the linked URL. It is a name of, or keyword for, a _browsing context_: a tab, window, or `<iframe>`. The following keywords have special meanings:\n\n*   `_self`: Load the URL into the same browsing context as the current one. This is the default behavior.\n*   `_blank`: Load the URL into a new browsing context. This is usually a tab, but users can configure browsers to use new windows instead.\n*   `_parent`: Load the URL into the parent browsing context of the current one. If there is no parent, this behaves the same way as `_self`.\n*   `_top`: Load the URL into the top-level browsing context (that is, the "highest" browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this behaves the same way as `_self`.\n\n**Note:** When using `target`, consider adding `rel="noreferrer"` to avoid exploitation of the `window.opener` API.\n\n**Note:** Linking to another page using `target="_blank"` will run the new page on the same process as your page. If the new page is executing expensive JS, your page\'s performance may suffer. To avoid this use `rel="noopener"`.',
              },
            },
            {
              name: 'download',
              description: {
                kind: 'markdown',
                value:
                  'This attribute instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file. If the attribute has a value, it is used as the pre-filled file name in the Save prompt (the user can still change the file name if they want). There are no restrictions on allowed values, though `/` and `\\` are converted to underscores. Most file systems limit some punctuation in file names, and browsers will adjust the suggested name accordingly.\n\n**Notes:**\n\n*   This attribute only works for [same-origin URLs](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy).\n*   Although HTTP(s) URLs need to be in the same-origin, [`blob:` URLs](https://developer.mozilla.org/en-US/docs/Web/API/URL.createObjectURL) and [`data:` URLs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) are allowed so that content generated by JavaScript, such as pictures created in an image-editor Web app, can be downloaded.\n*   If the HTTP header [`Content-Disposition:`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition) gives a different filename than this attribute, the HTTP header takes priority over this attribute.\n*   If `Content-Disposition:` is set to `inline`, Firefox prioritizes `Content-Disposition`, like the filename case, while Chrome prioritizes the `download` attribute.',
              },
            },
            {
              name: 'ping',
              description: {
                kind: 'markdown',
                value:
                  'Contains a space-separated list of URLs to which, when the hyperlink is followed, [`POST`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST "The HTTP POST method sends data to the server. The type of the body of the request is indicated by the Content-Type header.") requests with the body `PING` will be sent by the browser (in the background). Typically used for tracking.',
              },
            },
            {
              name: 'rel',
              description: {
                kind: 'markdown',
                value:
                  'Specifies the relationship of the target object to the link object. The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).',
              },
            },
            {
              name: 'hreflang',
              description: {
                kind: 'markdown',
                value:
                  'This attribute indicates the human language of the linked resource. It is purely advisory, with no built-in functionality. Allowed values are determined by [BCP47](https://www.ietf.org/rfc/bcp/bcp47.txt "Tags for Identifying Languages").',
              },
            },
            {
              name: 'type',
              description: {
                kind: 'markdown',
                value:
                  'Specifies the media type in the form of a [MIME type](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type "MIME type: A\xa0MIME type\xa0(now properly called "media type", but\xa0also sometimes "content type") is a string sent along\xa0with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled\xa0audio/ogg, or an image file\xa0image/png).") for the linked URL. It is purely advisory, with no built-in functionality.',
              },
            },
            {
              name: 'referrerpolicy',
              description:
                "Indicates which [referrer](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer) to send when fetching the URL:\n\n*   `'no-referrer'` means the `Referer:` header will not be sent.\n*   `'no-referrer-when-downgrade'` means no `Referer:` header will be sent when navigating to an origin without HTTPS. This is the default behavior.\n*   `'origin'` means the referrer will be the [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin) of the page, not including information after the domain.\n*   `'origin-when-cross-origin'` meaning that navigations to other origins will be limited to the scheme, the host and the port, while navigations on the same origin will include the referrer's path.\n*   `'strict-origin-when-cross-origin'`\n*   `'unsafe-url'` means the referrer will include the origin and path, but not the fragment, password, or username. This is unsafe because it can leak data from secure URLs to insecure ones.",
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/a',
            },
          ],
        },
        {
          name: 'em',
          description: {
            kind: 'markdown',
            value: 'The em element represents stress emphasis of its contents.',
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/em',
            },
          ],
        },
        {
          name: 'strong',
          description: {
            kind: 'markdown',
            value:
              'The strong element represents strong importance, seriousness, or urgency for its contents.',
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/strong',
            },
          ],
        },
        {
          name: 'small',
          description: {
            kind: 'markdown',
            value:
              'The small element represents side comments such as small print.',
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/small',
            },
          ],
        },
        {
          name: 's',
          description: {
            kind: 'markdown',
            value:
              'The s element represents contents that are no longer accurate or no longer relevant.',
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/s',
            },
          ],
        },
        {
          name: 'cite',
          description: {
            kind: 'markdown',
            value:
              'The cite element represents a reference to a creative work. It must include the title of the work or the name of the author(person, people or organization) or an URL reference, or a reference in abbreviated form as per the conventions used for the addition of citation metadata.',
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/cite',
            },
          ],
        },
        {
          name: 'q',
          description: {
            kind: 'markdown',
            value:
              'The q element represents some phrasing content quoted from another source.',
          },
          attributes: [
            {
              name: 'cite',
              description: {
                kind: 'markdown',
                value:
                  'The value of this attribute is a URL that designates a source document or message for the information quoted. This attribute is intended to point to information explaining the context or the reference for the quote.',
              },
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/q',
            },
          ],
        },
        {
          name: 'dfn',
          description: {
            kind: 'markdown',
            value:
              'The dfn element represents the defining instance of a term. The paragraph, description list group, or section that is the nearest ancestor of the dfn element must also contain the definition(s) for the term given by the dfn element.',
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/dfn',
            },
          ],
        },
        {
          name: 'abbr',
          description: {
            kind: 'markdown',
            value:
              'The abbr element represents an abbreviation or acronym, optionally with its expansion. The title attribute may be used to provide an expansion of the abbreviation. The attribute, if specified, must contain an expansion of the abbreviation, and nothing else.',
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/abbr',
            },
          ],
        },
        {
          name: 'ruby',
          description: {
            kind: 'markdown',
            value:
              'The ruby element allows one or more spans of phrasing content to be marked with ruby annotations. Ruby annotations are short runs of text presented alongside base text, primarily used in East Asian typography as a guide for pronunciation or to include other annotations. In Japanese, this form of typography is also known as furigana. Ruby text can appear on either side, and sometimes both sides, of the base text, and it is possible to control its position using CSS. A more complete introduction to ruby can be found in the Use Cases & Exploratory Approaches for Ruby Markup document as well as in CSS Ruby Module Level 1. [RUBY-UC] [CSSRUBY]',
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/ruby',
            },
          ],
        },
        {
          name: 'rb',
          description: {
            kind: 'markdown',
            value:
              "The rb element marks the base text component of a ruby annotation. When it is the child of a ruby element, it doesn't represent anything itself, but its parent ruby element uses it as part of determining what it represents.",
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/rb',
            },
          ],
        },
        {
          name: 'rt',
          description: {
            kind: 'markdown',
            value:
              "The rt element marks the ruby text component of a ruby annotation. When it is the child of a ruby element or of an rtc element that is itself the child of a ruby element, it doesn't represent anything itself, but its ancestor ruby element uses it as part of determining what it represents.",
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/rt',
            },
          ],
        },
        {
          name: 'rp',
          description: {
            kind: 'markdown',
            value:
              "The rp element is used to provide fallback text to be shown by user agents that don't support ruby annotations. One widespread convention is to provide parentheses around the ruby text component of a ruby annotation.",
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/rp',
            },
          ],
        },
        {
          name: 'time',
          description: {
            kind: 'markdown',
            value:
              'The time element represents its contents, along with a machine-readable form of those contents in the datetime attribute. The kind of content is limited to various kinds of dates, times, time-zone offsets, and durations, as described below.',
          },
          attributes: [
            {
              name: 'datetime',
              description: {
                kind: 'markdown',
                value:
                  'This attribute indicates the time and/or date of the element and must be in one of the formats described below.',
              },
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/time',
            },
          ],
        },
        {
          name: 'code',
          description: {
            kind: 'markdown',
            value:
              'The code element represents a fragment of computer code. This could be an XML element name, a file name, a computer program, or any other string that a computer would recognize.',
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/code',
            },
          ],
        },
        {
          name: 'var',
          description: {
            kind: 'markdown',
            value:
              'The var element represents a variable. This could be an actual variable in a mathematical expression or programming context, an identifier representing a constant, a symbol identifying a physical quantity, a function parameter, or just be a term used as a placeholder in prose.',
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/var',
            },
          ],
        },
        {
          name: 'samp',
          description: {
            kind: 'markdown',
            value:
              'The samp element represents sample or quoted output from another program or computing system.',
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/samp',
            },
          ],
        },
        {
          name: 'kbd',
          description: {
            kind: 'markdown',
            value:
              'The kbd element represents user input (typically keyboard input, although it may also be used to represent other input, such as voice commands).',
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/kbd',
            },
          ],
        },
        {
          name: 'sub',
          description: {
            kind: 'markdown',
            value: 'The sub element represents a subscript.',
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/sub',
            },
          ],
        },
        {
          name: 'sup',
          description: {
            kind: 'markdown',
            value: 'The sup element represents a superscript.',
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/sup',
            },
          ],
        },
        {
          name: 'i',
          description: {
            kind: 'markdown',
            value:
              'The i element represents a span of text in an alternate voice or mood, or otherwise offset from the normal prose in a manner indicating a different quality of text, such as a taxonomic designation, a technical term, an idiomatic phrase from another language, transliteration, a thought, or a ship name in Western texts.',
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/i',
            },
          ],
        },
        {
          name: 'b',
          description: {
            kind: 'markdown',
            value:
              'The b element represents a span of text to which attention is being drawn for utilitarian purposes without conveying any extra importance and with no implication of an alternate voice or mood, such as key words in a document abstract, product names in a review, actionable words in interactive text-driven software, or an article lede.',
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/b',
            },
          ],
        },
        {
          name: 'u',
          description: {
            kind: 'markdown',
            value:
              'The u element represents a span of text with an unarticulated, though explicitly rendered, non-textual annotation, such as labeling the text as being a proper name in Chinese text (a Chinese proper name mark), or labeling the text as being misspelt.',
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/u',
            },
          ],
        },
        {
          name: 'mark',
          description: {
            kind: 'markdown',
            value:
              "The mark element represents a run of text in one document marked or highlighted for reference purposes, due to its relevance in another context. When used in a quotation or other block of text referred to from the prose, it indicates a highlight that was not originally present but which has been added to bring the reader's attention to a part of the text that might not have been considered important by the original author when the block was originally written, but which is now under previously unexpected scrutiny. When used in the main prose of a document, it indicates a part of the document that has been highlighted due to its likely relevance to the user's current activity.",
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/mark',
            },
          ],
        },
        {
          name: 'bdi',
          description: {
            kind: 'markdown',
            value:
              'The bdi element represents a span of text that is to be isolated from its surroundings for the purposes of bidirectional text formatting. [BIDI]',
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/bdi',
            },
          ],
        },
        {
          name: 'bdo',
          description: {
            kind: 'markdown',
            value:
              'The bdo element represents explicit text directionality formatting control for its children. It allows authors to override the Unicode bidirectional algorithm by explicitly specifying a direction override. [BIDI]',
          },
          attributes: [
            {
              name: 'dir',
              description:
                "The direction in which text should be rendered in this element's contents. Possible values are:\n\n*   `ltr`: Indicates that the text should go in a left-to-right direction.\n*   `rtl`: Indicates that the text should go in a right-to-left direction.",
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/bdo',
            },
          ],
        },
        {
          name: 'span',
          description: {
            kind: 'markdown',
            value:
              "The span element doesn't mean anything on its own, but can be useful when used together with the global attributes, e.g. class, lang, or dir. It represents its children.",
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/span',
            },
          ],
        },
        {
          name: 'br',
          description: {
            kind: 'markdown',
            value: 'The br element represents a line break.',
          },
          attributes: [
            {
              name: 'clear',
              description:
                'Indicates where to begin the next line after the break.',
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/br',
            },
          ],
        },
        {
          name: 'wbr',
          description: {
            kind: 'markdown',
            value: 'The wbr element represents a line break opportunity.',
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/wbr',
            },
          ],
        },
        {
          name: 'ins',
          description: {
            kind: 'markdown',
            value: 'The ins element represents an addition to the document.',
          },
          attributes: [
            {
              name: 'cite',
              description:
                'This attribute defines the URI of a resource that explains the change, such as a link to meeting minutes or a ticket in a troubleshooting system.',
            },
            {
              name: 'datetime',
              description:
                'This attribute indicates the time and date of the change and must be a valid date with an optional time string. If the value cannot be parsed as a date with an optional time string, the element does not have an associated time stamp. For the format of the string without a time, see [Format of a valid date string](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#Format_of_a_valid_date_string "Certain HTML elements use date and/or time values. The formats of the strings that specify these are described in this article.") in [Date and time formats used in HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats "Certain HTML elements use date and/or time values. The formats of the strings that specify these are described in this article."). The format of the string if it includes both date and time is covered in [Format of a valid local date and time string](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#Format_of_a_valid_local_date_and_time_string "Certain HTML elements use date and/or time values. The formats of the strings that specify these are described in this article.") in [Date and time formats used in HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats "Certain HTML elements use date and/or time values. The formats of the strings that specify these are described in this article.").',
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/ins',
            },
          ],
        },
        {
          name: 'del',
          description: {
            kind: 'markdown',
            value: 'The del element represents a removal from the document.',
          },
          attributes: [
            {
              name: 'cite',
              description: {
                kind: 'markdown',
                value:
                  'A URI for a resource that explains the change (for example, meeting minutes).',
              },
            },
            {
              name: 'datetime',
              description: {
                kind: 'markdown',
                value:
                  'This attribute indicates the time and date of the change and must be a valid date string with an optional time. If the value cannot be parsed as a date with an optional time string, the element does not have an associated time stamp. For the format of the string without a time, see [Format of a valid date string](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#Format_of_a_valid_date_string "Certain HTML elements use date and/or time values. The formats of the strings that specify these are described in this article.") in [Date and time formats used in HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats "Certain HTML elements use date and/or time values. The formats of the strings that specify these are described in this article."). The format of the string if it includes both date and time is covered in [Format of a valid local date and time string](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#Format_of_a_valid_local_date_and_time_string "Certain HTML elements use date and/or time values. The formats of the strings that specify these are described in this article.") in [Date and time formats used in HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats "Certain HTML elements use date and/or time values. The formats of the strings that specify these are described in this article.").',
              },
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/del',
            },
          ],
        },
        {
          name: 'picture',
          description: {
            kind: 'markdown',
            value:
              'The picture element is a container which provides multiple sources to its contained img element to allow authors to declaratively control or give hints to the user agent about which image resource to use, based on the screen pixel density, viewport size, image format, and other factors. It represents its children.',
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/picture',
            },
          ],
        },
        {
          name: 'img',
          description: {
            kind: 'markdown',
            value: 'An img element represents an image.',
          },
          attributes: [
            {
              name: 'alt',
              description: {
                kind: 'markdown',
                value:
                  'This attribute defines an alternative text description of the image.\n\n**Note:** Browsers do not always display the image referenced by the element. This is the case for non-graphical browsers (including those used by people with visual impairments), if the user chooses not to display images, or if the browser cannot display the image because it is invalid or an [unsupported type](#Supported_image_formats). In these cases, the browser may replace the image with the text defined in this element\'s `alt` attribute. You should, for these reasons and others, provide a useful value for `alt` whenever possible.\n\n**Note:** Omitting this attribute altogether indicates that the image is a key part of the content, and no textual equivalent is available. Setting this attribute to an empty string (`alt=""`) indicates that this image is _not_ a key part of the content (decorative), and that non-visual browsers may omit it from rendering.',
              },
            },
            {
              name: 'src',
              description: {
                kind: 'markdown',
                value:
                  "The image URL. This attribute is mandatory for the `<img>` element. On browsers supporting `srcset`, `src` is treated like a candidate image with a pixel density descriptor `1x` unless an image with this pixel density descriptor is already defined in `srcset,` or unless `srcset` contains '`w`' descriptors.",
              },
            },
            {
              name: 'srcset',
              description: {
                kind: 'markdown',
                value:
                  "A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use. Each string is composed of:\n\n1.  a URL to an image,\n2.  optionally, whitespace followed by one of:\n    *   A width descriptor, or a positive integer directly followed by '`w`'. The width descriptor is divided by the source size given in the `sizes` attribute to calculate the effective pixel density.\n    *   A pixel density descriptor, which is a positive floating point number directly followed by '`x`'.\n\nIf no descriptor is specified, the source is assigned the default descriptor: `1x`.\n\nIt is incorrect to mix width descriptors and pixel density descriptors in the same `srcset` attribute. Duplicate descriptors (for instance, two sources in the same `srcset` which are both described with '`2x`') are also invalid.\n\nThe user agent selects any one of the available sources at its discretion. This provides them with significant leeway to tailor their selection based on things like user preferences or bandwidth conditions. See our [Responsive images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) tutorial for an example.",
              },
            },
            {
              name: 'crossorigin',
              valueSet: 'xo',
              description: {
                kind: 'markdown',
                value:
                  'This enumerated attribute indicates if the fetching of the related image must be done using CORS or not. [CORS-enabled images](https://developer.mozilla.org/en-US/docs/CORS_Enabled_Image) can be reused in the [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas "Use the HTML <canvas> element with either the canvas scripting API or the WebGL API to draw graphics and animations.") element without being "[tainted](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image#What_is_a_tainted_canvas)." The allowed values are:',
              },
            },
            {
              name: 'usemap',
              description: {
                kind: 'markdown',
                value:
                  'The partial URL (starting with \'#\') of an [image map](https://developer.mozilla.org/en-US/docs/HTML/Element/map) associated with the element.\n\n**Note:** You cannot use this attribute if the `<img>` element is a descendant of an [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a "The HTML <a> element (or anchor element) creates a hyperlink to other web pages, files, locations within the same page, email addresses, or any other URL.") or [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") element.',
              },
            },
            {
              name: 'ismap',
              valueSet: 'v',
              description: {
                kind: 'markdown',
                value:
                  'This Boolean attribute indicates that the image is part of a server-side map. If so, the precise coordinates of a click are sent to the server.\n\n**Note:** This attribute is allowed only if the `<img>` element is a descendant of an [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a "The HTML <a> element (or anchor element) creates a hyperlink to other web pages, files, locations within the same page, email addresses, or any other URL.") element with a valid [`href`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-href) attribute.',
              },
            },
            {
              name: 'width',
              description: {
                kind: 'markdown',
                value: 'The intrinsic width of the image in pixels.',
              },
            },
            {
              name: 'height',
              description: {
                kind: 'markdown',
                value: 'The intrinsic height of the image in pixels.',
              },
            },
            {
              name: 'decoding',
              description:
                'Provides an image decoding hint to the browser. The allowed values are:',
            },
            {
              name: 'decoding',
              description:
                '`sync`\n\nDecode the image synchronously for atomic presentation with other content.\n\n`async`\n\nDecode the image asynchronously to reduce delay in presenting other content.\n\n`auto`\n\nDefault mode, which indicates no preference for the decoding mode. The browser decides what is best for the user.',
            },
            {
              name: 'importance',
              description:
                'Indicates the relative importance of the resource. Priority hints are delegated using the values:',
            },
            {
              name: 'importance',
              description:
                '`auto`: Indicates\xa0**no\xa0preference**. The browser may use its own heuristics to decide the priority of the image.\n\n`high`: Indicates to the\xa0browser\xa0that the image is of\xa0**high** priority.\n\n`low`:\xa0Indicates to the\xa0browser\xa0that the image is of\xa0**low** priority.',
            },
            {
              name: 'intrinsicsize',
              description:
                'This attribute tells the browser to ignore the actual intrinsic size of the image and pretend it\u2019s the size specified in the attribute. Specifically, the image would raster at these dimensions and `naturalWidth`/`naturalHeight` on images would return the values specified in this attribute. [Explainer](https://github.com/ojanvafai/intrinsicsize-attribute), [examples](https://googlechrome.github.io/samples/intrinsic-size/index.html)',
            },
            {
              name: 'referrerpolicy',
              description:
                'A string indicating which referrer to use when fetching the resource:\n\n*   `no-referrer:` The [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer "The Referer request header contains the address of the previous web page from which a link to the currently requested page was followed. The Referer header allows servers to identify where people are visiting them from and may use that data for analytics, logging, or optimized caching, for example.") header will not be sent.\n*   `no-referrer-when-downgrade:` No `Referer` header will be sent when navigating to an origin without TLS (HTTPS). This is a user agent\u2019s default behavior if no policy is otherwise specified.\n*   `origin:` The `Referer` header will include the page of origin\'s scheme, the host, and the port.\n*   `origin-when-cross-origin:` Navigating to other origins will limit the included referral data to the scheme, the host and the port, while navigating from the same origin will include the referrer\'s full path.\n*   `unsafe-url:` The `Referer` header will include the origin and the path, but not the fragment, password, or username. This case is unsafe because it can leak origins and paths from TLS-protected resources to insecure origins.',
            },
            {
              name: 'sizes',
              description:
                "A list of one or more strings separated by commas indicating a set of source sizes. Each source size consists of:\n\n1.  a media condition. This must be omitted for the last item.\n2.  a source size value.\n\nSource size values specify the intended display size of the image. User agents use the current source size to select one of the sources supplied by the `srcset` attribute, when those sources are described using width ('`w`') descriptors. The selected source size affects the intrinsic size of the image (the image\u2019s display size if no CSS styling is applied). If the `srcset` attribute is absent, or contains no values with a width (`w`) descriptor, then the `sizes` attribute has no effect.",
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/img',
            },
          ],
        },
        {
          name: 'iframe',
          description: {
            kind: 'markdown',
            value: 'The iframe element represents a nested browsing context.',
          },
          attributes: [
            {
              name: 'src',
              description: {
                kind: 'markdown',
                value:
                  'The URL of the page to embed. Use a value of `about:blank` to embed an empty page that conforms to the [same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy#Inherited_origins). Also note that programatically removing an `<iframe>`\'s src attribute (e.g. via [`Element.removeAttribute()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute "The Element method removeAttribute() removes the attribute with the specified name from the element.")) causes `about:blank` to be loaded in the frame in Firefox (from version 65), Chromium-based browsers, and Safari/iOS.',
              },
            },
            {
              name: 'srcdoc',
              description: {
                kind: 'markdown',
                value:
                  'Inline HTML to embed, overriding the `src` attribute. If a browser does not support the `srcdoc` attribute, it will fall back to the URL in the `src` attribute.',
              },
            },
            {
              name: 'name',
              description: {
                kind: 'markdown',
                value:
                  'A targetable name for the embedded browsing context. This can be used in the `target` attribute of the [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a "The HTML <a> element (or anchor element) creates a hyperlink to other web pages, files, locations within the same page, email addresses, or any other URL."), [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server."), or [`<base>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base "The HTML <base> element specifies the base URL to use for all relative URLs contained within a document. There can be only one <base> element in a document.") elements; the `formtarget` attribute of the [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") or [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") elements; or the `windowName` parameter in the [`window.open()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/open "The\xa0Window interface\'s open() method loads the specified resource into the browsing context (window, <iframe> or tab) with the specified name. If the name doesn\'t exist, then a new window is opened and the specified resource is loaded into its browsing context.") method.',
              },
            },
            {
              name: 'sandbox',
              valueSet: 'sb',
              description: {
                kind: 'markdown',
                value:
                  'Applies extra restrictions to the content in the frame. The value of the attribute can either be empty to apply all restrictions, or space-separated tokens to lift particular restrictions:\n\n*   `allow-forms`: Allows the resource to submit forms. If this keyword is not used, form submission is blocked.\n*   `allow-modals`: Lets the resource [open modal windows](https://html.spec.whatwg.org/multipage/origin.html#sandboxed-modals-flag).\n*   `allow-orientation-lock`: Lets the resource [lock the screen orientation](https://developer.mozilla.org/en-US/docs/Web/API/Screen/lockOrientation).\n*   `allow-pointer-lock`: Lets the resource use the [Pointer Lock API](https://developer.mozilla.org/en-US/docs/WebAPI/Pointer_Lock).\n*   `allow-popups`: Allows popups (such as `window.open()`, `target="_blank"`, or `showModalDialog()`). If this keyword is not used, the popup will silently fail to open.\n*   `allow-popups-to-escape-sandbox`: Lets the sandboxed document open new windows without those windows inheriting the sandboxing. For example, this can safely sandbox an advertisement without forcing the same restrictions upon the page the ad links to.\n*   `allow-presentation`: Lets the resource start a [presentation session](https://developer.mozilla.org/en-US/docs/Web/API/PresentationRequest).\n*   `allow-same-origin`: If this token is not used, the resource is treated as being from a special origin that always fails the [same-origin policy](https://developer.mozilla.org/en-US/docs/Glossary/same-origin_policy "same-origin policy: The same-origin policy is a critical security mechanism that restricts how a document or script loaded from one origin can interact with a resource from another origin.").\n*   `allow-scripts`: Lets the resource run scripts (but not create popup windows).\n*   `allow-storage-access-by-user-activation` : Lets the resource request access to the parent\'s storage capabilities with the [Storage Access API](https://developer.mozilla.org/en-US/docs/Web/API/Storage_Access_API).\n*   `allow-top-navigation`: Lets the resource navigate the top-level browsing context (the one named `_top`).\n*   `allow-top-navigation-by-user-activation`: Lets the resource navigate the top-level browsing context, but only if initiated by a user gesture.\n\n**Notes about sandboxing:**\n\n*   When the embedded document has the same origin as the embedding page, it is **strongly discouraged** to use both `allow-scripts` and `allow-same-origin`, as that lets the embedded document remove the `sandbox` attribute \u2014 making it no more secure than not using the `sandbox` attribute at all.\n*   Sandboxing is useless if the attacker can display content outside a sandboxed `iframe` \u2014 such as if the viewer opens the frame in a new tab. Such content should be also served from a _separate origin_ to limit potential damage.\n*   The `sandbox` attribute is unsupported in Internet Explorer 9 and earlier.',
              },
            },
            { name: 'seamless', valueSet: 'v' },
            {
              name: 'allowfullscreen',
              valueSet: 'v',
              description: {
                kind: 'markdown',
                value:
                  'Set to `true` if the `<iframe>` can activate fullscreen mode by calling the [`requestFullscreen()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullscreen "The Element.requestFullscreen() method issues an asynchronous request to make the element be displayed in full-screen mode.") method.',
              },
            },
            {
              name: 'width',
              description: {
                kind: 'markdown',
                value:
                  'The width of the frame in CSS pixels. Default is `300`.',
              },
            },
            {
              name: 'height',
              description: {
                kind: 'markdown',
                value:
                  'The height of the frame in CSS pixels. Default is `150`.',
              },
            },
            {
              name: 'allow',
              description:
                'Specifies a [feature policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Feature_Policy) for the `<iframe>`.',
            },
            {
              name: 'allowpaymentrequest',
              description:
                'Set to `true` if a cross-origin `<iframe>` should be allowed to invoke the [Payment Request API](https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API).',
            },
            {
              name: 'allowpaymentrequest',
              description:
                'This attribute is considered a legacy attribute and redefined as `allow="payment"`.',
            },
            {
              name: 'csp',
              description:
                'A [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) enforced for the embedded resource. See [`HTMLIFrameElement.csp`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/csp "The csp property of the HTMLIFrameElement interface specifies the Content Security Policy that an embedded document must agree to enforce upon itself.") for details.',
            },
            {
              name: 'importance',
              description:
                "The download priority of the resource in the `<iframe>`'s `src` attribute. Allowed values:\n\n`auto` (default)\n\nNo preference. The browser uses its own heuristics to decide the priority of the resource.\n\n`high`\n\nThe resource should be downloaded before other lower-priority page resources.\n\n`low`\n\nThe resource should be downloaded after other higher-priority page resources.",
            },
            {
              name: 'referrerpolicy',
              description:
                'Indicates which [referrer](https://developer.mozilla.org/en-US/docs/Web/API/Document/referrer) to send when fetching the frame\'s resource:\n\n*   `no-referrer`: The [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer "The Referer request header contains the address of the previous web page from which a link to the currently requested page was followed. The Referer header allows servers to identify where people are visiting them from and may use that data for analytics, logging, or optimized caching, for example.") header will not be sent.\n*   `no-referrer-when-downgrade` (default): The [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer "The Referer request header contains the address of the previous web page from which a link to the currently requested page was followed. The Referer header allows servers to identify where people are visiting them from and may use that data for analytics, logging, or optimized caching, for example.") header will not be sent to [origin](https://developer.mozilla.org/en-US/docs/Glossary/origin "origin: Web content\'s origin is defined by the scheme (protocol), host (domain), and port of the URL used to access it. Two objects have the same origin only when the scheme, host, and port all match.")s without [TLS](https://developer.mozilla.org/en-US/docs/Glossary/TLS "TLS: Transport Layer Security (TLS), previously known as Secure Sockets Layer (SSL), is a protocol used by applications to communicate securely across a network, preventing tampering with and eavesdropping on email, web browsing, messaging, and other protocols.") ([HTTPS](https://developer.mozilla.org/en-US/docs/Glossary/HTTPS "HTTPS: HTTPS (HTTP Secure) is an encrypted version of the HTTP protocol. It usually uses SSL or TLS to encrypt all communication between a client and a server. This secure connection allows clients to safely exchange sensitive data with a server, for example for banking activities or online shopping.")).\n*   `origin`: The sent referrer will be limited to the origin of the referring page: its [scheme](https://developer.mozilla.org/en-US/docs/Archive/Mozilla/URIScheme), [host](https://developer.mozilla.org/en-US/docs/Glossary/host "host: A host is a device connected to the Internet (or a local network). Some hosts called servers offer additional services like serving webpages or storing files and emails."), and [port](https://developer.mozilla.org/en-US/docs/Glossary/port "port: For a computer connected to a network with an IP address, a port is a communication endpoint. Ports are designated by numbers, and below 1024 each port is associated by default with a specific protocol.").\n*   `origin-when-cross-origin`: The referrer sent to other origins will be limited to the scheme, the host, and the port. Navigations on the same origin will still include the path.\n*   `same-origin`: A referrer will be sent for [same origin](https://developer.mozilla.org/en-US/docs/Glossary/Same-origin_policy "same origin: The same-origin policy is a critical security mechanism that restricts how a document or script loaded from one origin can interact with a resource from another origin."), but cross-origin requests will contain no referrer information.\n*   `strict-origin`: Only send the origin of the document as the referrer when the protocol security level stays the same (HTTPS\u2192HTTPS), but don\'t send it to a less secure destination (HTTPS\u2192HTTP).\n*   `strict-origin-when-cross-origin`: Send a full URL when performing a same-origin request, only send the origin when the protocol security level stays the same (HTTPS\u2192HTTPS), and send no header to a less secure destination (HTTPS\u2192HTTP).\n*   `unsafe-url`: The referrer will include the origin _and_ the path (but not the [fragment](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/hash), [password](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/password), or [username](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/username)). **This value is unsafe**, because it leaks origins and paths from TLS-protected resources to insecure origins.',
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/iframe',
            },
          ],
        },
        {
          name: 'embed',
          description: {
            kind: 'markdown',
            value:
              'The embed element provides an integration point for an external (typically non-HTML) application or interactive content.',
          },
          attributes: [
            {
              name: 'src',
              description: {
                kind: 'markdown',
                value: 'The URL\xa0of the resource being embedded.',
              },
            },
            {
              name: 'type',
              description: {
                kind: 'markdown',
                value:
                  'The MIME\xa0type to use to select the plug-in to instantiate.',
              },
            },
            {
              name: 'width',
              description: {
                kind: 'markdown',
                value:
                  'The displayed width of the resource, in [CSS pixels](https://drafts.csswg.org/css-values/#px). This must be an absolute value; percentages are _not_ allowed.',
              },
            },
            {
              name: 'height',
              description: {
                kind: 'markdown',
                value:
                  'The displayed height of the resource, in [CSS pixels](https://drafts.csswg.org/css-values/#px). This must be an absolute value; percentages are _not_ allowed.',
              },
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/embed',
            },
          ],
        },
        {
          name: 'object',
          description: {
            kind: 'markdown',
            value:
              'The object element can represent an external resource, which, depending on the type of the resource, will either be treated as an image, as a nested browsing context, or as an external resource to be processed by a plugin.',
          },
          attributes: [
            {
              name: 'data',
              description: {
                kind: 'markdown',
                value:
                  'The address of the resource as a valid URL. At least one of **data** and **type** must be defined.',
              },
            },
            {
              name: 'type',
              description: {
                kind: 'markdown',
                value:
                  'The [content type](https://developer.mozilla.org/en-US/docs/Glossary/Content_type) of the resource specified by **data**. At least one of **data** and **type** must be defined.',
              },
            },
            {
              name: 'typemustmatch',
              valueSet: 'v',
              description: {
                kind: 'markdown',
                value:
                  'This Boolean attribute indicates if the **type** attribute and the actual [content type](https://developer.mozilla.org/en-US/docs/Glossary/Content_type) of the resource must match to be used.',
              },
            },
            {
              name: 'name',
              description: {
                kind: 'markdown',
                value:
                  'The name of valid browsing context (HTML5), or the name of the control (HTML 4).',
              },
            },
            {
              name: 'usemap',
              description: {
                kind: 'markdown',
                value:
                  'A hash-name reference to a [`<map>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map "The HTML <map> element is used with <area> elements to define an image map (a clickable link area).") element; that is a \'#\' followed by the value of a [`name`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map#attr-name) of a map element.',
              },
            },
            {
              name: 'form',
              description: {
                kind: 'markdown',
                value:
                  'The form element, if any, that the object element is associated with (its _form owner_). The value of the attribute must be an ID of a [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") element in the same document.',
              },
            },
            {
              name: 'width',
              description: {
                kind: 'markdown',
                value:
                  'The width of the display resource, in [CSS pixels](https://drafts.csswg.org/css-values/#px). -- (Absolute values only. [NO percentages](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes))',
              },
            },
            {
              name: 'height',
              description: {
                kind: 'markdown',
                value:
                  'The height of the displayed resource, in [CSS pixels](https://drafts.csswg.org/css-values/#px). -- (Absolute values only. [NO percentages](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes))',
              },
            },
            {
              name: 'archive',
              description:
                'A space-separated list of URIs for archives of resources for the object.',
            },
            {
              name: 'border',
              description:
                'The width of a border around the control, in pixels.',
            },
            {
              name: 'classid',
              description:
                "The URI of the object's implementation. It can be used together with, or in place of, the **data** attribute.",
            },
            {
              name: 'codebase',
              description:
                'The base path used to resolve relative URIs specified by **classid**, **data**, or **archive**. If not specified, the default is the base URI of the current document.',
            },
            {
              name: 'codetype',
              description:
                'The content type of the data specified by **classid**.',
            },
            {
              name: 'declare',
              description:
                'The presence of this Boolean attribute makes this element a declaration only. The object must be instantiated by a subsequent `<object>` element. In HTML5, repeat the <object> element completely each that that the resource is reused.',
            },
            {
              name: 'standby',
              description:
                "A message that the browser can show while loading the object's implementation and data.",
            },
            {
              name: 'tabindex',
              description:
                'The position of the element in the tabbing navigation order for the current document.',
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/object',
            },
          ],
        },
        {
          name: 'param',
          description: {
            kind: 'markdown',
            value:
              'The param element defines parameters for plugins invoked by object elements. It does not represent anything on its own.',
          },
          attributes: [
            {
              name: 'name',
              description: {
                kind: 'markdown',
                value: 'Name of the parameter.',
              },
            },
            {
              name: 'value',
              description: {
                kind: 'markdown',
                value: 'Specifies the value of the parameter.',
              },
            },
            {
              name: 'type',
              description:
                'Only used if the `valuetype` is set to "ref". Specifies the MIME type of values found at the URI specified by value.',
            },
            {
              name: 'valuetype',
              description:
                'Specifies the type of the `value` attribute. Possible values are:\n\n*   data: Default value. The value is passed to the object\'s implementation as a string.\n*   ref: The value is a URI to a resource where run-time values are stored.\n*   object: An ID of another [`<object>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object "The HTML <object> element represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin.") in the same document.',
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/param',
            },
          ],
        },
        {
          name: 'video',
          description: {
            kind: 'markdown',
            value:
              'A video element is used for playing videos or movies, and audio files with captions.',
          },
          attributes: [
            { name: 'src' },
            { name: 'crossorigin', valueSet: 'xo' },
            { name: 'poster' },
            { name: 'preload', valueSet: 'pl' },
            {
              name: 'autoplay',
              valueSet: 'v',
              description: {
                kind: 'markdown',
                value:
                  'A Boolean attribute; if specified, the video automatically begins to play back as soon as it can do so without stopping to finish loading the data.',
              },
            },
            { name: 'mediagroup' },
            { name: 'loop', valueSet: 'v' },
            { name: 'muted', valueSet: 'v' },
            { name: 'controls', valueSet: 'v' },
            { name: 'width' },
            { name: 'height' },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/video',
            },
          ],
        },
        {
          name: 'audio',
          description: {
            kind: 'markdown',
            value: 'An audio element represents a sound or audio stream.',
          },
          attributes: [
            {
              name: 'src',
              description: {
                kind: 'markdown',
                value:
                  'The URL of the audio to embed. This is subject to [HTTP access controls](https://developer.mozilla.org/en-US/docs/HTTP_access_control). This is optional; you may instead use the [`<source>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source "The HTML <source> element specifies multiple media resources for the <picture>, the <audio> element, or the <video> element.") element within the audio block to specify the audio to embed.',
              },
            },
            {
              name: 'crossorigin',
              valueSet: 'xo',
              description: {
                kind: 'markdown',
                value:
                  'This enumerated attribute indicates whether to use CORS to fetch the related image. [CORS-enabled resources](https://developer.mozilla.org/en-US/docs/CORS_Enabled_Image) can be reused in the [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas "Use the HTML <canvas> element with either the canvas scripting API or the WebGL API to draw graphics and animations.") element without being _tainted_. The allowed values are:\n\nanonymous\n\nSends a cross-origin request without a credential. In other words, it sends the `Origin:` HTTP header without a cookie, X.509 certificate, or performing HTTP Basic authentication. If the server does not give credentials to the origin site (by not setting the `Access-Control-Allow-Origin:` HTTP header), the image will be _tainted_, and its usage restricted.\n\nuse-credentials\n\nSends a cross-origin request with a credential. In other words, it sends the `Origin:` HTTP header with a cookie, a certificate, or performing HTTP Basic authentication. If the server does not give credentials to the origin site (through `Access-Control-Allow-Credentials:` HTTP header), the image will be _tainted_ and its usage restricted.\n\nWhen not present, the resource is fetched without a CORS request (i.e. without sending the `Origin:` HTTP header), preventing its non-tainted used in [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas "Use the HTML <canvas> element with either the canvas scripting API or the WebGL API to draw graphics and animations.") elements. If invalid, it is handled as if the enumerated keyword **anonymous** was used. See [CORS settings attributes](https://developer.mozilla.org/en-US/docs/HTML/CORS_settings_attributes) for additional information.',
              },
            },
            {
              name: 'preload',
              valueSet: 'pl',
              description: {
                kind: 'markdown',
                value:
                  "This enumerated attribute is intended to provide a hint to the browser about what the author thinks will lead to the best user experience. It may have one of the following values:\n\n*   `none`: Indicates that the audio should not be preloaded.\n*   `metadata`: Indicates that only audio metadata (e.g. length) is fetched.\n*   `auto`: Indicates that the whole audio file can be downloaded, even if the user is not expected to use it.\n*   _empty string_: A synonym of the `auto` value.\n\nIf not set, `preload`'s default value is browser-defined (i.e. each browser may have its own default value). The spec advises it to be set to `metadata`.\n\n**Usage notes:**\n\n*   The `autoplay` attribute has precedence over\xa0`preload`. If `autoplay` is specified, the browser would obviously need to start downloading the audio for playback.\n*   The browser is not forced by the specification to follow the value of this attribute; it is a mere hint.",
              },
            },
            {
              name: 'autoplay',
              valueSet: 'v',
              description: {
                kind: 'markdown',
                value:
                  'A Boolean attribute:\xa0if specified, the audio will automatically begin playback as soon as it can do so, without waiting for the entire audio file to finish downloading.\n\n**Note**: Sites that automatically play audio (or videos with an audio track) can be an unpleasant experience for users, so should be avoided when possible. If you must offer autoplay functionality, you should make it opt-in (requiring a user to specifically enable it). However, this can be useful when creating media elements whose source will be set at a later time, under user control.',
              },
            },
            { name: 'mediagroup' },
            {
              name: 'loop',
              valueSet: 'v',
              description: {
                kind: 'markdown',
                value:
                  'A Boolean attribute:\xa0if specified, the audio player will\xa0automatically seek back to the start\xa0upon reaching the end of the audio.',
              },
            },
            {
              name: 'muted',
              valueSet: 'v',
              description: {
                kind: 'markdown',
                value:
                  'A Boolean attribute that indicates whether the audio will be initially silenced. Its default value is `false`.',
              },
            },
            {
              name: 'controls',
              valueSet: 'v',
              description: {
                kind: 'markdown',
                value:
                  'If this attribute is present, the browser will offer controls to allow the user to control audio playback, including volume, seeking, and pause/resume playback.',
              },
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/audio',
            },
          ],
        },
        {
          name: 'source',
          description: {
            kind: 'markdown',
            value:
              'The source element allows authors to specify multiple alternative media resources for media elements. It does not represent anything on its own.',
          },
          attributes: [
            {
              name: 'src',
              description: {
                kind: 'markdown',
                value:
                  'Required for [`<audio>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio "The HTML <audio> element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the <source> element:\xa0the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream.") and [`<video>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video "The HTML Video element (<video>) embeds a media player which supports video playback into the document."), address of the media resource. The value of this attribute is ignored when the `<source>` element is placed inside a [`<picture>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture "The HTML <picture> element contains zero or more <source> elements and one <img> element to provide versions of an image for different display/device scenarios.") element.',
              },
            },
            {
              name: 'type',
              description: {
                kind: 'markdown',
                value:
                  'The MIME-type of the resource, optionally with a `codecs` parameter. See [RFC 4281](https://tools.ietf.org/html/rfc4281) for information about how to specify codecs.',
              },
            },
            {
              name: 'sizes',
              description:
                'Is a list of source sizes that describes the final rendered width of the image represented by the source. Each source size consists of a comma-separated list of media condition-length pairs. This information is used by the browser to determine, before laying the page out, which image defined in [`srcset`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source#attr-srcset) to use.  \nThe `sizes` attribute has an effect only when the [`<source>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source "The HTML <source> element specifies multiple media resources for the <picture>, the <audio> element, or the <video> element.") element is the direct child of a [`<picture>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture "The HTML <picture> element contains zero or more <source> elements and one <img> element to provide versions of an image for different display/device scenarios.") element.',
            },
            {
              name: 'srcset',
              description:
                'A list of one or more strings separated by commas indicating a set of possible images represented by the source for the browser to use. Each string is composed of:\n\n1.  one URL to an image,\n2.  a width descriptor, that is a positive integer directly followed by `\'w\'`. The default value, if missing, is the infinity.\n3.  a pixel density descriptor, that is a positive floating number directly followed by `\'x\'`. The default value, if missing, is `1x`.\n\nEach string in the list must have at least a width descriptor or a pixel density descriptor to be valid. Among the list, there must be only one string containing the same tuple of width descriptor and pixel density descriptor.  \nThe browser chooses the most adequate image to display at a given point of time.  \nThe `srcset` attribute has an effect only when the [`<source>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source "The HTML <source> element specifies multiple media resources for the <picture>, the <audio> element, or the <video> element.") element is the direct child of a [`<picture>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture "The HTML <picture> element contains zero or more <source> elements and one <img> element to provide versions of an image for different display/device scenarios.") element.',
            },
            {
              name: 'media',
              description:
                '[Media query](https://developer.mozilla.org/en-US/docs/CSS/Media_queries) of the resource\'s intended media; this should be used only in a [`<picture>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture "The HTML <picture> element contains zero or more <source> elements and one <img> element to provide versions of an image for different display/device scenarios.") element.',
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/source',
            },
          ],
        },
        {
          name: 'track',
          description: {
            kind: 'markdown',
            value:
              'The track element allows authors to specify explicit external timed text tracks for media elements. It does not represent anything on its own.',
          },
          attributes: [
            {
              name: 'default',
              valueSet: 'v',
              description: {
                kind: 'markdown',
                value:
                  "This attribute indicates that the track should be enabled unless the user's preferences indicate that another track is more appropriate. This may only be used on one `track` element per media element.",
              },
            },
            {
              name: 'kind',
              valueSet: 'tk',
              description: {
                kind: 'markdown',
                value:
                  "How the text track is meant to be used. If omitted the default kind is `subtitles`. If the attribute is not present, it will use the `subtitles`. If the attribute contains an invalid value, it will use `metadata`. (Versions of Chrome earlier than 52 treated an invalid value as `subtitles`.)\xa0The following keywords are allowed:\n\n*   `subtitles`\n    *   Subtitles provide translation of content that cannot be understood by the viewer. For example dialogue or text that is not English in an English language film.\n    *   Subtitles may contain additional content, usually extra background information. For example the text at the beginning of the Star Wars films, or the date, time, and location of a scene.\n*   `captions`\n    *   Closed captions provide a transcription and possibly a translation of audio.\n    *   It may include important non-verbal information such as music cues or sound effects. It may indicate the cue's source (e.g. music, text, character).\n    *   Suitable for users who are deaf or when the sound is muted.\n*   `descriptions`\n    *   Textual description of the video content.\n    *   Suitable for users who are blind or where the video cannot be seen.\n*   `chapters`\n    *   Chapter titles are intended to be used when the user is navigating the media resource.\n*   `metadata`\n    *   Tracks used by scripts. Not visible to the user.",
              },
            },
            {
              name: 'label',
              description: {
                kind: 'markdown',
                value:
                  'A user-readable title of the text track which is used by the browser when listing available text tracks.',
              },
            },
            {
              name: 'src',
              description: {
                kind: 'markdown',
                value:
                  'Address of the track (`.vtt` file). Must be a valid URL. This attribute must be specified and its URL value must have the same origin as the document \u2014 unless the [`<audio>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio "The HTML <audio> element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the <source> element:\xa0the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream.") or [`<video>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video "The HTML Video element (<video>) embeds a media player which supports video playback into the document.") parent element of the `track` element has a [`crossorigin`](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) attribute.',
              },
            },
            {
              name: 'srclang',
              description: {
                kind: 'markdown',
                value:
                  'Language of the track text data. It must be a valid [BCP 47](https://r12a.github.io/app-subtags/) language tag. If the `kind` attribute is set to\xa0`subtitles,` then `srclang` must be defined.',
              },
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/track',
            },
          ],
        },
        {
          name: 'map',
          description: {
            kind: 'markdown',
            value:
              'The map element, in conjunction with an img element and any area element descendants, defines an image map. The element represents its children.',
          },
          attributes: [
            {
              name: 'name',
              description: {
                kind: 'markdown',
                value:
                  'The name attribute gives the map a name so that it can be referenced. The attribute must be present and must have a non-empty value with no space characters. The value of the name attribute must not be a compatibility-caseless match for the value of the name attribute of another map element in the same document. If the id attribute is also specified, both attributes must have the same value.',
              },
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/map',
            },
          ],
        },
        {
          name: 'area',
          description: {
            kind: 'markdown',
            value:
              'The area element represents either a hyperlink with some text and a corresponding area on an image map, or a dead area on an image map.',
          },
          attributes: [
            { name: 'alt' },
            { name: 'coords' },
            { name: 'shape', valueSet: 'sh' },
            { name: 'href' },
            { name: 'target' },
            { name: 'download' },
            { name: 'ping' },
            { name: 'rel' },
            { name: 'hreflang' },
            { name: 'type' },
            {
              name: 'accesskey',
              description:
                'Specifies a keyboard navigation accelerator for the element. Pressing ALT or a similar key in association with the specified character selects the form control correlated with that key sequence. Page designers are forewarned to avoid key sequences already bound to browsers. This attribute is global since HTML5.',
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/area',
            },
          ],
        },
        {
          name: 'table',
          description: {
            kind: 'markdown',
            value:
              'The table element represents data with more than one dimension, in the form of a table.',
          },
          attributes: [
            { name: 'border' },
            {
              name: 'align',
              description:
                'This enumerated attribute indicates how the table must be aligned inside the containing document. It may have the following values:\n\n*   left: the table is displayed on the left side of the document;\n*   center: the table is displayed in the center of the document;\n*   right: the table is displayed on the right side of the document.\n\n**Usage Note**\n\n*   **Do not use this attribute**, as it has been deprecated. The [`<table>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table "The HTML <table> element represents tabular data \u2014 that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.") element should be styled using [CSS](https://developer.mozilla.org/en-US/docs/CSS). Set [`margin-left`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left "The margin-left CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.") and [`margin-right`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right "The margin-right CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.") to `auto` or [`margin`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin "The margin CSS property sets the margin area on all four sides of an element. It is a shorthand for margin-top, margin-right, margin-bottom, and margin-left.") to `0 auto` to achieve an effect that is similar to the align attribute.\n*   Prior to Firefox 4, Firefox also supported the `middle`, `absmiddle`, and `abscenter` values as synonyms of `center`, in quirks mode only.',
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/table',
            },
          ],
        },
        {
          name: 'caption',
          description: {
            kind: 'markdown',
            value:
              'The caption element represents the title of the table that is its parent, if it has a parent and that is a table element.',
          },
          attributes: [
            {
              name: 'align',
              description:
                'This enumerated attribute indicates how the caption must be aligned with respect to the table. It may have one of the following values:\n\n`left`\n\nThe caption is displayed to the left of the table.\n\n`top`\n\nThe caption is displayed above the table.\n\n`right`\n\nThe caption is displayed to the right of the table.\n\n`bottom`\n\nThe caption is displayed below the table.\n\n**Usage note:** Do not use this attribute, as it has been deprecated. The [`<caption>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption "The HTML Table Caption element (<caption>) specifies the caption (or title) of a table, and if used is always the first child of a <table>.") element should be styled using the [CSS](https://developer.mozilla.org/en-US/docs/CSS) properties [`caption-side`](https://developer.mozilla.org/en-US/docs/Web/CSS/caption-side "The caption-side CSS property puts the content of a table\'s <caption> on the specified side. The values are relative to the writing-mode of the table.") and [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.").',
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/caption',
            },
          ],
        },
        {
          name: 'colgroup',
          description: {
            kind: 'markdown',
            value:
              'The colgroup element represents a group of one or more columns in the table that is its parent, if it has a parent and that is a table element.',
          },
          attributes: [
            { name: 'span' },
            {
              name: 'align',
              description:
                'This enumerated attribute specifies how horizontal alignment of each column cell content will be handled. Possible values are:\n\n*   `left`, aligning the content to the left of the cell\n*   `center`, centering the content in the cell\n*   `right`, aligning the content to the right of the cell\n*   `justify`, inserting spaces into the textual content so that the content is justified in the cell\n*   `char`, aligning the textual content on a special character with a minimal offset, defined by the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col#attr-char) and [`charoff`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col#attr-charoff) attributes Unimplemented (see [bug\xa02212](https://bugzilla.mozilla.org/show_bug.cgi?id=2212 "character alignment not implemented (align=char, charoff=, text-align:<string>)")).\n\nIf this attribute is not set, the `left` value is assumed. The descendant [`<col>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col "The HTML <col> element defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a <colgroup> element.") elements may override this value using their own [`align`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col#attr-align) attribute.\n\n**Note:** Do not use this attribute as it is obsolete (not supported) in the latest standard.\n\n*   To achieve the same effect as the `left`, `center`, `right` or `justify` values:\n    *   Do not try to set the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property on a selector giving a [`<colgroup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup "The HTML <colgroup> element defines a group of columns within a table.") element. Because [`<td>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td "The HTML <td> element defines a cell of a table that contains data. It participates in the table model.") elements are not descendant of the [`<colgroup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup "The HTML <colgroup> element defines a group of columns within a table.") element, they won\'t inherit it.\n    *   If the table doesn\'t use a [`colspan`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-colspan) attribute, use one `td:nth-child(an+b)` CSS selector per column, where a is the total number of the columns in the table and b is the ordinal position of this column in the table. Only after this selector the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property can be used.\n    *   If the table does use a [`colspan`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-colspan) attribute, the effect can be achieved by combining adequate CSS attribute selectors like `[colspan=n]`, though this is not trivial.\n*   To achieve the same effect as the `char` value, in CSS3, you can use the value of the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup#attr-char) as the value of the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property Unimplemented.',
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/colgroup',
            },
          ],
        },
        {
          name: 'col',
          description: {
            kind: 'markdown',
            value:
              'If a col element has a parent and that is a colgroup element that itself has a parent that is a table element, then the col element represents one or more columns in the column group represented by that colgroup.',
          },
          attributes: [
            { name: 'span' },
            {
              name: 'align',
              description:
                'This enumerated attribute specifies how horizontal alignment of each column cell content will be handled. Possible values are:\n\n*   `left`, aligning the content to the left of the cell\n*   `center`, centering the content in the cell\n*   `right`, aligning the content to the right of the cell\n*   `justify`, inserting spaces into the textual content so that the content is justified in the cell\n*   `char`, aligning the textual content on a special character with a minimal offset, defined by the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col#attr-char) and [`charoff`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col#attr-charoff) attributes Unimplemented (see [bug\xa02212](https://bugzilla.mozilla.org/show_bug.cgi?id=2212 "character alignment not implemented (align=char, charoff=, text-align:<string>)")).\n\nIf this attribute is not set, its value is inherited from the [`align`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup#attr-align) of the [`<colgroup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup "The HTML <colgroup> element defines a group of columns within a table.") element this `<col>` element belongs too. If there are none, the `left` value is assumed.\n\n**Note:** Do not use this attribute as it is obsolete (not supported) in the latest standard.\n\n*   To achieve the same effect as the `left`, `center`, `right` or `justify` values:\n    *   Do not try to set the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property on a selector giving a [`<col>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col "The HTML <col> element defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a <colgroup> element.") element. Because [`<td>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td "The HTML <td> element defines a cell of a table that contains data. It participates in the table model.") elements are not descendant of the [`<col>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col "The HTML <col> element defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a <colgroup> element.") element, they won\'t inherit it.\n    *   If the table doesn\'t use a [`colspan`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-colspan) attribute, use the `td:nth-child(an+b)` CSS selector. Set `a` to zero and `b` to the position of the column in the table, e.g. `td:nth-child(2) { text-align: right; }` to right-align the second column.\n    *   If the table does use a [`colspan`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-colspan) attribute, the effect can be achieved by combining adequate CSS attribute selectors like `[colspan=n]`, though this is not trivial.\n*   To achieve the same effect as the `char` value, in CSS3, you can use the value of the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col#attr-char) as the value of the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property Unimplemented.',
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/col',
            },
          ],
        },
        {
          name: 'tbody',
          description: {
            kind: 'markdown',
            value:
              'The tbody element represents a block of rows that consist of a body of data for the parent table element, if the tbody element has a parent and it is a table.',
          },
          attributes: [
            {
              name: 'align',
              description:
                'This enumerated attribute specifies how horizontal alignment of each cell content will be handled. Possible values are:\n\n*   `left`, aligning the content to the left of the cell\n*   `center`, centering the content in the cell\n*   `right`, aligning the content to the right of the cell\n*   `justify`, inserting spaces into the textual content so that the content is justified in the cell\n*   `char`, aligning the textual content on a special character with a minimal offset, defined by the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody#attr-char) and [`charoff`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody#attr-charoff) attributes.\n\nIf this attribute is not set, the `left` value is assumed.\n\n**Note:** Do not use this attribute as it is obsolete (not supported) in the latest standard.\n\n*   To achieve the same effect as the `left`, `center`, `right` or `justify` values, use the CSS [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property on it.\n*   To achieve the same effect as the `char` value, in CSS3, you can use the value of the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody#attr-char) as the value of the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property Unimplemented.',
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/tbody',
            },
          ],
        },
        {
          name: 'thead',
          description: {
            kind: 'markdown',
            value:
              'The thead element represents the block of rows that consist of the column labels (headers) for the parent table element, if the thead element has a parent and it is a table.',
          },
          attributes: [
            {
              name: 'align',
              description:
                'This enumerated attribute specifies how horizontal alignment of each cell content will be handled. Possible values are:\n\n*   `left`, aligning the content to the left of the cell\n*   `center`, centering the content in the cell\n*   `right`, aligning the content to the right of the cell\n*   `justify`, inserting spaces into the textual content so that the content is justified in the cell\n*   `char`, aligning the textual content on a special character with a minimal offset, defined by the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead#attr-char) and [`charoff`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead#attr-charoff) attributes Unimplemented (see [bug\xa02212](https://bugzilla.mozilla.org/show_bug.cgi?id=2212 "character alignment not implemented (align=char, charoff=, text-align:<string>)")).\n\nIf this attribute is not set, the `left` value is assumed.\n\n**Note:** Do not use this attribute as it is obsolete (not supported) in the latest standard.\n\n*   To achieve the same effect as the `left`, `center`, `right` or `justify` values, use the CSS [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property on it.\n*   To achieve the same effect as the `char` value, in CSS3, you can use the value of the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead#attr-char) as the value of the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property Unimplemented.',
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/thead',
            },
          ],
        },
        {
          name: 'tfoot',
          description: {
            kind: 'markdown',
            value:
              'The tfoot element represents the block of rows that consist of the column summaries (footers) for the parent table element, if the tfoot element has a parent and it is a table.',
          },
          attributes: [
            {
              name: 'align',
              description:
                'This enumerated attribute specifies how horizontal alignment of each cell content will be handled. Possible values are:\n\n*   `left`, aligning the content to the left of the cell\n*   `center`, centering the content in the cell\n*   `right`, aligning the content to the right of the cell\n*   `justify`, inserting spaces into the textual content so that the content is justified in the cell\n*   `char`, aligning the textual content on a special character with a minimal offset, defined by the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody#attr-char) and [`charoff`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody#attr-charoff) attributes Unimplemented (see [bug\xa02212](https://bugzilla.mozilla.org/show_bug.cgi?id=2212 "character alignment not implemented (align=char, charoff=, text-align:<string>)")).\n\nIf this attribute is not set, the `left` value is assumed.\n\n**Note:** Do not use this attribute as it is obsolete (not supported) in the latest standard.\n\n*   To achieve the same effect as the `left`, `center`, `right` or `justify` values, use the CSS [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property on it.\n*   To achieve the same effect as the `char` value, in CSS3, you can use the value of the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot#attr-char) as the value of the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property Unimplemented.',
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/tfoot',
            },
          ],
        },
        {
          name: 'tr',
          description: {
            kind: 'markdown',
            value: 'The tr element represents a row of cells in a table.',
          },
          attributes: [
            {
              name: 'align',
              description:
                'A [`DOMString`](https://developer.mozilla.org/en-US/docs/Web/API/DOMString "DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String.") which specifies how the cell\'s context should be aligned horizontally within the cells in the row; this is shorthand for using `align` on every cell in the row individually. Possible values are:\n\n`left`\n\nAlign the content of each cell at its left edge.\n\n`center`\n\nCenter the contents of each cell between their left and right edges.\n\n`right`\n\nAlign the content of each cell at its right edge.\n\n`justify`\n\nWiden whitespaces within the text of each cell so that the text fills the full width of each cell (full justification).\n\n`char`\n\nAlign each cell in the row on a specific character (such that each row in the column that is configured this way will horizontally align its cells on that character). This uses the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr#attr-char) and [`charoff`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr#attr-charoff) to establish the alignment character (typically "." or "," when aligning numerical data) and the number of characters that should follow the alignment character. This alignment type was never widely supported.\n\nIf no value is expressly set for `align`, the parent node\'s value is inherited.\n\nInstead of using the obsolete `align` attribute, you should instead use the CSS [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property to establish `left`, `center`, `right`, or `justify` alignment for the row\'s cells. To apply character-based alignment, set the CSS [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property to the alignment character (such as `"."` or `","`).',
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/tr',
            },
          ],
        },
        {
          name: 'td',
          description: {
            kind: 'markdown',
            value: 'The td element represents a data cell in a table.',
          },
          attributes: [
            { name: 'colspan' },
            { name: 'rowspan' },
            { name: 'headers' },
            {
              name: 'abbr',
              description:
                "This attribute contains a short abbreviated description of the cell's content. Some user-agents, such as speech readers, may present this description before the content itself.\n\n**Note:** Do not use this attribute as it is obsolete in the latest standard. Alternatively, you can put the abbreviated description inside the cell and place the long content in the **title** attribute.",
            },
            {
              name: 'align',
              description:
                'This enumerated attribute specifies how the cell content\'s horizontal alignment will be handled. Possible values are:\n\n*   `left`: The content is aligned to the left of the cell.\n*   `center`: The content is centered in the cell.\n*   `right`: The content is aligned to the right of the cell.\n*   `justify` (with text only): The content is stretched out inside the cell so that it covers its entire width.\n*   `char` (with text only): The content is aligned to a character inside the `<th>` element with minimal offset. This character is defined by the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-char) and [`charoff`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-charoff) attributes Unimplemented (see [bug\xa02212](https://bugzilla.mozilla.org/show_bug.cgi?id=2212 "character alignment not implemented (align=char, charoff=, text-align:<string>)")).\n\nThe default value when this attribute is not specified is `left`.\n\n**Note:** Do not use this attribute as it is obsolete in the latest standard.\n\n*   To achieve the same effect as the `left`, `center`, `right` or `justify` values, apply the CSS [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property to the element.\n*   To achieve the same effect as the `char` value, give the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property the same value you would use for the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-char). Unimplemented in CSS3.',
            },
            {
              name: 'axis',
              description:
                'This attribute contains a list of space-separated strings. Each string is the `id` of a group of cells that this header applies to.\n\n**Note:** Do not use this attribute as it is obsolete in the latest standard.',
            },
            {
              name: 'bgcolor',
              description:
                'This attribute defines the background color of each cell in a column. It consists of a 6-digit hexadecimal code as defined in [sRGB](https://www.w3.org/Graphics/Color/sRGB) and is prefixed by \'#\'. This attribute may be used with one of sixteen predefined color strings:\n\n\xa0\n\n`black` = "#000000"\n\n\xa0\n\n`green` = "#008000"\n\n\xa0\n\n`silver` = "#C0C0C0"\n\n\xa0\n\n`lime` = "#00FF00"\n\n\xa0\n\n`gray` = "#808080"\n\n\xa0\n\n`olive` = "#808000"\n\n\xa0\n\n`white` = "#FFFFFF"\n\n\xa0\n\n`yellow` = "#FFFF00"\n\n\xa0\n\n`maroon` = "#800000"\n\n\xa0\n\n`navy` = "#000080"\n\n\xa0\n\n`red` = "#FF0000"\n\n\xa0\n\n`blue` = "#0000FF"\n\n\xa0\n\n`purple` = "#800080"\n\n\xa0\n\n`teal` = "#008080"\n\n\xa0\n\n`fuchsia` = "#FF00FF"\n\n\xa0\n\n`aqua` = "#00FFFF"\n\n**Note:** Do not use this attribute, as it is non-standard and only implemented in some versions of Microsoft Internet Explorer: The [`<td>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td "The HTML <td> element defines a cell of a table that contains data. It participates in the table model.") element should be styled using [CSS](https://developer.mozilla.org/en-US/docs/CSS). To create a similar effect use the [`background-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color "The background-color CSS property sets the background color of an element.") property in [CSS](https://developer.mozilla.org/en-US/docs/CSS) instead.',
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/td',
            },
          ],
        },
        {
          name: 'th',
          description: {
            kind: 'markdown',
            value: 'The th element represents a header cell in a table.',
          },
          attributes: [
            { name: 'colspan' },
            { name: 'rowspan' },
            { name: 'headers' },
            { name: 'scope', valueSet: 's' },
            { name: 'sorted' },
            {
              name: 'abbr',
              description: {
                kind: 'markdown',
                value:
                  "This attribute contains a short abbreviated description of the cell's content. Some user-agents, such as speech readers, may present this description before the content itself.",
              },
            },
            {
              name: 'align',
              description:
                'This enumerated attribute specifies how the cell content\'s horizontal alignment will be handled. Possible values are:\n\n*   `left`: The content is aligned to the left of the cell.\n*   `center`: The content is centered in the cell.\n*   `right`: The content is aligned to the right of the cell.\n*   `justify` (with text only): The content is stretched out inside the cell so that it covers its entire width.\n*   `char` (with text only): The content is aligned to a character inside the `<th>` element with minimal offset. This character is defined by the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#attr-char) and [`charoff`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#attr-charoff) attributes.\n\nThe default value when this attribute is not specified is `left`.\n\n**Note:** Do not use this attribute as it is obsolete in the latest standard.\n\n*   To achieve the same effect as the `left`, `center`, `right` or `justify` values, apply the CSS [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property to the element.\n*   To achieve the same effect as the `char` value, give the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property the same value you would use for the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#attr-char). Unimplemented in CSS3.',
            },
            {
              name: 'axis',
              description:
                'This attribute contains a list of space-separated strings. Each string is the `id` of a group of cells that this header applies to.\n\n**Note:** Do not use this attribute as it is obsolete in the latest standard: use the [`scope`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#attr-scope) attribute instead.',
            },
            {
              name: 'bgcolor',
              description:
                'This attribute defines the background color of each cell in a column. It consists of a 6-digit hexadecimal code as defined in [sRGB](https://www.w3.org/Graphics/Color/sRGB) and is prefixed by \'#\'. This attribute may be used with one of sixteen predefined color strings:\n\n\xa0\n\n`black` = "#000000"\n\n\xa0\n\n`green` = "#008000"\n\n\xa0\n\n`silver` = "#C0C0C0"\n\n\xa0\n\n`lime` = "#00FF00"\n\n\xa0\n\n`gray` = "#808080"\n\n\xa0\n\n`olive` = "#808000"\n\n\xa0\n\n`white` = "#FFFFFF"\n\n\xa0\n\n`yellow` = "#FFFF00"\n\n\xa0\n\n`maroon` = "#800000"\n\n\xa0\n\n`navy` = "#000080"\n\n\xa0\n\n`red` = "#FF0000"\n\n\xa0\n\n`blue` = "#0000FF"\n\n\xa0\n\n`purple` = "#800080"\n\n\xa0\n\n`teal` = "#008080"\n\n\xa0\n\n`fuchsia` = "#FF00FF"\n\n\xa0\n\n`aqua` = "#00FFFF"\n\n**Note:** Do not use this attribute, as it is non-standard and only implemented in some versions of Microsoft Internet Explorer: The [`<th>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th "The HTML <th> element defines a cell as header of a group of table cells. The exact nature of this group is defined by the scope and headers attributes.") element should be styled using [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS). To create a similar effect use the [`background-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color "The background-color CSS property sets the background color of an element.") property in [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) instead.',
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/th',
            },
          ],
        },
        {
          name: 'form',
          description: {
            kind: 'markdown',
            value:
              'The form element represents a collection of form-associated elements, some of which can represent editable values that can be submitted to a server for processing.',
          },
          attributes: [
            {
              name: 'accept-charset',
              description: {
                kind: 'markdown',
                value:
                  'A space- or comma-delimited list of character encodings that the server accepts. The browser uses them in the order in which they are listed. The default value, the reserved string `"UNKNOWN"`, indicates the same encoding as that of the document containing the form element.  \nIn previous versions of HTML, the different character encodings could be delimited by spaces or commas. In HTML5, only spaces are allowed as delimiters.',
              },
            },
            {
              name: 'action',
              description: {
                kind: 'markdown',
                value:
                  'The URI of a program that processes the form information. This value can be overridden by a [`formaction`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formaction) attribute on a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") or [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") element.',
              },
            },
            {
              name: 'autocomplete',
              valueSet: 'o',
              description: {
                kind: 'markdown',
                value:
                  "Indicates whether input elements can by default have their values automatically completed by the browser. This setting can be overridden by an `autocomplete` attribute on an element belonging to the form. Possible values are:\n\n*   `off`: The user must explicitly enter a value into each field for every use, or the document provides its own auto-completion method; the browser does not automatically complete entries.\n*   `on`: The browser can automatically complete values based on values that the user has previously entered in the form.\n\nFor most modern browsers (including Firefox 38+, Google Chrome 34+, IE 11+) setting the autocomplete attribute will not prevent a browser's password manager from asking the user if they want to store login fields (username and password), if the user permits the storage the browser will autofill the login the next time the user visits the page. See [The autocomplete attribute and login fields](https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion#The_autocomplete_attribute_and_login_fields).",
              },
            },
            {
              name: 'enctype',
              valueSet: 'et',
              description: {
                kind: 'markdown',
                value:
                  'When the value of the `method` attribute is `post`, enctype is the [MIME type](https://en.wikipedia.org/wiki/Mime_type) of content that is used to submit the form to the server. Possible values are:\n\n*   `application/x-www-form-urlencoded`: The default value if the attribute is not specified.\n*   `multipart/form-data`: The value used for an [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") element with the `type` attribute set to "file".\n*   `text/plain`: (HTML5)\n\nThis value can be overridden by a [`formenctype`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formenctype) attribute on a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") or [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") element.',
              },
            },
            {
              name: 'method',
              valueSet: 'm',
              description: {
                kind: 'markdown',
                value:
                  'The [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP) method that the browser uses to submit the form. Possible values are:\n\n*   `post`: Corresponds to the HTTP [POST method](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5) ; form data are included in the body of the form and sent to the server.\n*   `get`: Corresponds to the HTTP [GET method](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3); form data are appended to the `action` attribute URI with a \'?\' as separator, and the resulting URI is sent to the server. Use this method when the form has no side-effects and contains only ASCII characters.\n*   `dialog`: Use when the form is inside a\xa0[`<dialog>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog "The HTML <dialog> element represents a dialog box or other interactive component, such as an inspector or window.") element to close the dialog when submitted.\n\nThis value can be overridden by a [`formmethod`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formmethod) attribute on a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") or [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") element.',
              },
            },
            {
              name: 'name',
              description: {
                kind: 'markdown',
                value:
                  'The name of the form. In HTML 4, its use is deprecated (`id` should be used instead). It must be unique among the forms in a document and not just an empty string in HTML 5.',
              },
            },
            {
              name: 'novalidate',
              valueSet: 'v',
              description: {
                kind: 'markdown',
                value:
                  'This Boolean attribute indicates that the form is not to be validated when submitted. If this attribute is not specified (and therefore the form is validated), this default setting can be overridden by a [`formnovalidate`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formnovalidate) attribute on a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") or [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") element belonging to the form.',
              },
            },
            {
              name: 'target',
              description: {
                kind: 'markdown',
                value:
                  'A name or keyword indicating where to display the response that is received after submitting the form. In HTML 4, this is the name/keyword for a frame. In HTML5, it is a name/keyword for a _browsing context_ (for example, tab, window, or inline frame). The following keywords have special meanings:\n\n*   `_self`: Load the response into the same HTML 4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified.\n*   `_blank`: Load the response into a new unnamed HTML 4 window or HTML5 browsing context.\n*   `_parent`: Load the response into the HTML 4 frameset parent of the current frame, or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as `_self`.\n*   `_top`: HTML 4: Load the response into the full original window, and cancel all other frames. HTML5: Load the response into the top-level browsing context (i.e., the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as `_self`.\n*   _iframename_: The response is displayed in a named [`<iframe>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe "The HTML Inline Frame element (<iframe>) represents a nested browsing context, embedding another HTML page into the current one.").\n\nHTML5: This value can be overridden by a [`formtarget`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formtarget) attribute on a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") or [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") element.',
              },
            },
            {
              name: 'accept',
              description:
                'A comma-separated list of content types that the server accepts.\n\n**Usage note:** This attribute has been removed in HTML5 and should no longer be used. Instead, use the [`accept`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept) attribute of the specific [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") element.',
            },
            {
              name: 'autocapitalize',
              description:
                'This is a nonstandard attribute used by iOS Safari Mobile which controls whether and how the text value for textual form control descendants should be automatically capitalized as it is entered/edited by the user. If the `autocapitalize` attribute is specified on an individual form control descendant, it trumps the form-wide `autocapitalize` setting. The non-deprecated values are available in iOS 5 and later. The default value is `sentences`. Possible values are:\n\n*   `none`: Completely disables automatic capitalization\n*   `sentences`: Automatically capitalize the first letter of sentences.\n*   `words`: Automatically capitalize the first letter of words.\n*   `characters`: Automatically capitalize all characters.\n*   `on`: Deprecated since iOS 5.\n*   `off`: Deprecated since iOS 5.',
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/form',
            },
          ],
        },
        {
          name: 'label',
          description: {
            kind: 'markdown',
            value:
              "The label element represents a caption in a user interface. The caption can be associated with a specific form control, known as the label element's labeled control, either using the for attribute, or by putting the form control inside the label element itself.",
          },
          attributes: [
            {
              name: 'form',
              description: {
                kind: 'markdown',
                value:
                  'The [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") element with which the label is associated (its _form owner_). If specified, the value of the attribute is the `id` of a [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") element in the same document. This lets you place label elements anywhere within a document, not just as descendants of their form elements.',
              },
            },
            {
              name: 'for',
              description: {
                kind: 'markdown',
                value:
                  'The [`id`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-id) of a [labelable](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Form_labelable) form-related element in the same document as the `<label>` element. The first element in the document with an `id` matching the value of the `for` attribute is the _labeled control_ for this label element, if it is a labelable element. If it is\xa0not labelable then the `for` attribute has no effect. If there are other elements which also match the `id` value, later in the document, they are not considered.\n\n**Note**: A `<label>` element can have both a `for` attribute and a contained control element, as long as the `for` attribute points to the contained control element.',
              },
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/label',
            },
          ],
        },
        {
          name: 'input',
          description: {
            kind: 'markdown',
            value:
              'The input element represents a typed data field, usually with a form control to allow the user to edit the data.',
          },
          attributes: [
            { name: 'accept' },
            { name: 'alt' },
            { name: 'autocomplete', valueSet: 'inputautocomplete' },
            { name: 'autofocus', valueSet: 'v' },
            { name: 'checked', valueSet: 'v' },
            { name: 'dirname' },
            { name: 'disabled', valueSet: 'v' },
            { name: 'form' },
            { name: 'formaction' },
            { name: 'formenctype', valueSet: 'et' },
            { name: 'formmethod', valueSet: 'fm' },
            { name: 'formnovalidate', valueSet: 'v' },
            { name: 'formtarget' },
            { name: 'height' },
            { name: 'inputmode', valueSet: 'im' },
            { name: 'list' },
            { name: 'max' },
            { name: 'maxlength' },
            { name: 'min' },
            { name: 'minlength' },
            { name: 'multiple', valueSet: 'v' },
            { name: 'name' },
            { name: 'pattern' },
            { name: 'placeholder' },
            { name: 'readonly', valueSet: 'v' },
            { name: 'required', valueSet: 'v' },
            { name: 'size' },
            { name: 'src' },
            { name: 'step' },
            { name: 'type', valueSet: 't' },
            { name: 'value' },
            { name: 'width' },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/input',
            },
          ],
        },
        {
          name: 'button',
          description: {
            kind: 'markdown',
            value:
              'The button element represents a button labeled by its contents.',
          },
          attributes: [
            {
              name: 'autofocus',
              valueSet: 'v',
              description: {
                kind: 'markdown',
                value:
                  'This Boolean attribute lets you specify that the button should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form-associated element in a document can have this attribute specified.',
              },
            },
            {
              name: 'disabled',
              valueSet: 'v',
              description: {
                kind: 'markdown',
                value:
                  'This Boolean attribute indicates that the user cannot interact with the button. If this attribute is not specified, the button inherits its setting from the containing element, for example [`<fieldset>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset "The HTML <fieldset> element is used to group several controls as well as labels (<label>) within a web form."); if there is no containing element with the **disabled** attribute set, then the button is enabled.\n\nFirefox will, unlike other browsers, by default, [persist the dynamic disabled state](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) of a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") across page loads. Use the [`autocomplete`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-autocomplete) attribute to control this feature.',
              },
            },
            {
              name: 'form',
              description: {
                kind: 'markdown',
                value:
                  'The form element that the button is associated with (its _form owner_). The value of the attribute must be the **id** attribute of a [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") element in the same document. If this attribute is not specified, the `<button>` element will be associated to an ancestor [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") element, if one exists. This attribute enables you to associate `<button>` elements to [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") elements anywhere within a document, not just as descendants of [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") elements.',
              },
            },
            {
              name: 'formaction',
              description: {
                kind: 'markdown',
                value:
                  "The URI of a program that processes the information submitted by the button. If specified, it overrides the [`action`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-action) attribute of the button's form owner.",
              },
            },
            {
              name: 'formenctype',
              valueSet: 'et',
              description: {
                kind: 'markdown',
                value:
                  'If the button is a submit button, this attribute specifies the type of content that is used to submit the form to the server. Possible values are:\n\n*   `application/x-www-form-urlencoded`: The default value if the attribute is not specified.\n*   `multipart/form-data`: Use this value if you are using an [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") element with the [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-type) attribute set to `file`.\n*   `text/plain`\n\nIf this attribute is specified, it overrides the [`enctype`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-enctype) attribute of the button\'s form owner.',
              },
            },
            {
              name: 'formmethod',
              valueSet: 'fm',
              description: {
                kind: 'markdown',
                value:
                  "If the button is a submit button, this attribute specifies the HTTP method that the browser uses to submit the form. Possible values are:\n\n*   `post`: The data from the form are included in the body of the form and sent to the server.\n*   `get`: The data from the form are appended to the **form** attribute URI, with a '?' as a separator, and the resulting URI is sent to the server. Use this method when the form has no side-effects and contains only ASCII characters.\n\nIf specified, this attribute overrides the [`method`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-method) attribute of the button's form owner.",
              },
            },
            {
              name: 'formnovalidate',
              valueSet: 'v',
              description: {
                kind: 'markdown',
                value:
                  "If the button is a submit button, this Boolean attribute specifies that the form is not to be validated when it is submitted. If this attribute is specified, it overrides the [`novalidate`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-novalidate) attribute of the button's form owner.",
              },
            },
            {
              name: 'formtarget',
              description: {
                kind: 'markdown',
                value:
                  "If the button is a submit button, this attribute is a name or keyword indicating where to display the response that is received after submitting the form. This is a name of, or keyword for, a _browsing context_ (for example, tab, window, or inline frame). If this attribute is specified, it overrides the [`target`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-target) attribute of the button's form owner. The following keywords have special meanings:\n\n*   `_self`: Load the response into the same browsing context as the current one. This value is the default if the attribute is not specified.\n*   `_blank`: Load the response into a new unnamed browsing context.\n*   `_parent`: Load the response into the parent browsing context of the current one. If there is no parent, this option behaves the same way as `_self`.\n*   `_top`: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as `_self`.",
              },
            },
            {
              name: 'name',
              description: {
                kind: 'markdown',
                value:
                  'The name of the button, which is submitted with the form data.',
              },
            },
            {
              name: 'type',
              valueSet: 'bt',
              description: {
                kind: 'markdown',
                value:
                  "The type of the button. Possible values are:\n\n*   `submit`: The button submits the form data to the server. This is the default if the attribute is not specified, or if the attribute is dynamically changed to an empty or invalid value.\n*   `reset`: The button resets all the controls to their initial values.\n*   `button`: The button has no default behavior. It can have client-side scripts associated with the element's events, which are triggered when the events occur.",
              },
            },
            {
              name: 'value',
              description: {
                kind: 'markdown',
                value:
                  'The initial value of the button. It defines the value associated with the button which is submitted with the form data. This value is passed to the server in params when the form is submitted.',
              },
            },
            {
              name: 'autocomplete',
              description:
                'The use of this attribute on a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") is nonstandard and Firefox-specific. By default, unlike other browsers, [Firefox persists the dynamic disabled state](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) of a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") across page loads. Setting the value of this attribute to `off` (i.e. `autocomplete="off"`) disables this feature. See [bug\xa0654072](https://bugzilla.mozilla.org/show_bug.cgi?id=654072 "if disabled state is changed with javascript, the normal state doesn\'t return after refreshing the page").',
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/button',
            },
          ],
        },
        {
          name: 'select',
          description: {
            kind: 'markdown',
            value:
              'The select element represents a control for selecting amongst a set of options.',
          },
          attributes: [
            {
              name: 'autocomplete',
              valueSet: 'inputautocomplete',
              description: {
                kind: 'markdown',
                value:
                  'A [`DOMString`](https://developer.mozilla.org/en-US/docs/Web/API/DOMString "DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String.") providing a hint for a [user agent\'s](https://developer.mozilla.org/en-US/docs/Glossary/user_agent "user agent\'s: A user agent is a computer program representing a person, for example, a browser in a Web context.") autocomplete feature. See [The HTML autocomplete attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for a complete list of values and details on how to use autocomplete.',
              },
            },
            {
              name: 'autofocus',
              valueSet: 'v',
              description: {
                kind: 'markdown',
                value:
                  'This Boolean attribute lets you specify that a form control should have input focus when the page loads. Only one form element in a document can have the `autofocus` attribute.',
              },
            },
            {
              name: 'disabled',
              valueSet: 'v',
              description: {
                kind: 'markdown',
                value:
                  'This Boolean attribute indicates that the user cannot interact with the control. If this attribute is not specified, the control inherits its setting from the containing element, for example `fieldset`; if there is no containing element with the `disabled` attribute set, then the control is enabled.',
              },
            },
            {
              name: 'form',
              description: {
                kind: 'markdown',
                value:
                  'This attribute lets you specify the form element to\xa0which\xa0the select element is associated\xa0(that is, its "form owner"). If this attribute is specified, its value must be the same as the `id` of a form element in the same document. This enables you to place select elements anywhere within a document, not just as descendants of their form elements.',
              },
            },
            {
              name: 'multiple',
              valueSet: 'v',
              description: {
                kind: 'markdown',
                value:
                  'This Boolean attribute indicates that multiple options can be selected in the list. If it is not specified, then only one option can be selected at a time. When `multiple` is specified, most browsers will show a scrolling list box instead of a single line dropdown.',
              },
            },
            {
              name: 'name',
              description: {
                kind: 'markdown',
                value:
                  'This attribute is used to specify the name of the control.',
              },
            },
            {
              name: 'required',
              valueSet: 'v',
              description: {
                kind: 'markdown',
                value:
                  'A Boolean attribute indicating that an option with a non-empty string value must be selected.',
              },
            },
            {
              name: 'size',
              description: {
                kind: 'markdown',
                value:
                  'If the control is presented as a scrolling list box (e.g. when `multiple` is specified), this attribute represents the number of rows in the list that should be visible at one time. Browsers are not required to present a select element as a scrolled list box. The default value is 0.\n\n**Note:** According to the HTML5 specification, the default value for size should be 1; however, in practice, this has been found to break some web sites, and no other browser currently does that, so Mozilla has opted to continue to return 0 for the time being with Firefox.',
              },
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/select',
            },
          ],
        },
        {
          name: 'datalist',
          description: {
            kind: 'markdown',
            value:
              'The datalist element represents a set of option elements that represent predefined options for other controls. In the rendering, the datalist element represents nothing and it, along with its children, should be hidden.',
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/datalist',
            },
          ],
        },
        {
          name: 'optgroup',
          description: {
            kind: 'markdown',
            value:
              'The optgroup element represents a group of option elements with a common label.',
          },
          attributes: [
            {
              name: 'disabled',
              valueSet: 'v',
              description: {
                kind: 'markdown',
                value:
                  "If this Boolean attribute is set, none of the items in this option group is selectable. Often browsers grey out such control and it won't receive any browsing events, like mouse clicks or focus-related ones.",
              },
            },
            {
              name: 'label',
              description: {
                kind: 'markdown',
                value:
                  'The name of the group of options, which the browser can use when labeling the options in the user interface. This attribute is mandatory if this element is used.',
              },
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/optgroup',
            },
          ],
        },
        {
          name: 'option',
          description: {
            kind: 'markdown',
            value:
              'The option element represents an option in a select element or as part of a list of suggestions in a datalist element.',
          },
          attributes: [
            {
              name: 'disabled',
              valueSet: 'v',
              description: {
                kind: 'markdown',
                value:
                  'If this Boolean attribute is set, this option is not checkable. Often browsers grey out such control and it won\'t receive any browsing event, like mouse clicks or focus-related ones. If this attribute is not set, the element can still be disabled if one of its ancestors is a disabled [`<optgroup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup "The HTML <optgroup> element creates a grouping of options within a <select> element.") element.',
              },
            },
            {
              name: 'label',
              description: {
                kind: 'markdown',
                value:
                  "This attribute is text for the label indicating the meaning of the option. If the `label` attribute isn't defined, its value is that of the element text content.",
              },
            },
            {
              name: 'selected',
              valueSet: 'v',
              description: {
                kind: 'markdown',
                value:
                  'If present, this Boolean attribute indicates that the option is initially selected. If the `<option>` element is the descendant of a [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select "The HTML <select> element represents a control that provides a menu of options") element whose [`multiple`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#attr-multiple) attribute is not set, only one single `<option>` of this [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select "The HTML <select> element represents a control that provides a menu of options") element may have the `selected` attribute.',
              },
            },
            {
              name: 'value',
              description: {
                kind: 'markdown',
                value:
                  'The content of this attribute represents the value to be submitted with the form, should this option be selected.\xa0If this attribute is omitted, the value is taken from the text content of the option element.',
              },
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/option',
            },
          ],
        },
        {
          name: 'textarea',
          description: {
            kind: 'markdown',
            value:
              "The textarea element represents a multiline plain text edit control for the element's raw value. The contents of the control represent the control's default value.",
          },
          attributes: [
            {
              name: 'autocomplete',
              valueSet: 'inputautocomplete',
              description: {
                kind: 'markdown',
                value:
                  'This attribute indicates whether the value of the control can be automatically completed by the browser. Possible values are:\n\n*   `off`: The user must explicitly enter a value into this field for every use, or the document provides its own auto-completion method; the browser does not automatically complete the entry.\n*   `on`: The browser can automatically complete the value based on values that the user has entered during previous uses.\n\nIf the `autocomplete` attribute is not specified on a `<textarea>` element, then the browser uses the `autocomplete` attribute value of the `<textarea>` element\'s form owner. The form owner is either the [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") element that this `<textarea>` element is a descendant of or the form element whose `id` is specified by the `form` attribute of the input element. For more information, see the [`autocomplete`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-autocomplete) attribute in [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.").',
              },
            },
            {
              name: 'autofocus',
              valueSet: 'v',
              description: {
                kind: 'markdown',
                value:
                  'This Boolean attribute lets you specify that a form control should have input focus when the page loads. Only one form-associated element in a document can have this attribute specified.',
              },
            },
            {
              name: 'cols',
              description: {
                kind: 'markdown',
                value:
                  'The visible width of the text control, in average character widths. If it is specified, it must be a positive integer. If it is not specified, the default value is `20`.',
              },
            },
            { name: 'dirname' },
            {
              name: 'disabled',
              valueSet: 'v',
              description: {
                kind: 'markdown',
                value:
                  'This Boolean attribute indicates that the user cannot interact with the control. If this attribute is not specified, the control inherits its setting from the containing element, for example [`<fieldset>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset "The HTML <fieldset> element is used to group several controls as well as labels (<label>) within a web form."); if there is no containing element when the `disabled` attribute is set, the control is enabled.',
              },
            },
            {
              name: 'form',
              description: {
                kind: 'markdown',
                value:
                  'The form element that the `<textarea>` element is associated with (its "form owner"). The value of the attribute must be the `id` of a form element in the same document. If this attribute is not specified, the `<textarea>` element must be a descendant of a form element. This attribute enables you to place `<textarea>` elements anywhere within a document, not just as descendants of form elements.',
              },
            },
            { name: 'inputmode', valueSet: 'im' },
            {
              name: 'maxlength',
              description: {
                kind: 'markdown',
                value:
                  "The maximum number of characters (unicode code points) that the user can enter. If this value isn't specified, the user can enter an unlimited number of characters.",
              },
            },
            {
              name: 'minlength',
              description: {
                kind: 'markdown',
                value:
                  'The minimum number of characters (unicode code points) required that the user should enter.',
              },
            },
            {
              name: 'name',
              description: {
                kind: 'markdown',
                value: 'The name of the control.',
              },
            },
            {
              name: 'placeholder',
              description: {
                kind: 'markdown',
                value:
                  'A hint to the user of what can be entered in the control. Carriage returns or line-feeds within the placeholder text must be treated as line breaks when rendering the hint.\n\n**Note:** Placeholders should only be used to show an example of the type of data that should be entered into a form; they are _not_ a substitute for a proper [`<label>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label "The HTML <label> element represents a caption for an item in a user interface.") element tied to the input. See [Labels and placeholders](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Labels_and_placeholders "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") in [<input>: The Input (Form Input) element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") for a full explanation.',
              },
            },
            {
              name: 'readonly',
              valueSet: 'v',
              description: {
                kind: 'markdown',
                value:
                  'This Boolean attribute indicates that the user cannot modify the value of the control. Unlike the `disabled` attribute, the `readonly` attribute does not prevent the user from clicking or selecting in the control. The value of a read-only control is still submitted with the form.',
              },
            },
            {
              name: 'required',
              valueSet: 'v',
              description: {
                kind: 'markdown',
                value:
                  'This attribute specifies that the user must fill in a value before submitting a form.',
              },
            },
            {
              name: 'rows',
              description: {
                kind: 'markdown',
                value: 'The number of visible text lines for the control.',
              },
            },
            {
              name: 'wrap',
              valueSet: 'w',
              description: {
                kind: 'markdown',
                value:
                  'Indicates how the control wraps text. Possible values are:\n\n*   `hard`: The browser automatically inserts line breaks (CR+LF) so that each line has no more than the width of the control; the `cols` attribute must also be specified for this to take effect.\n*   `soft`: The browser ensures that all line breaks in the value consist of a CR+LF pair, but does not insert any additional line breaks.\n*   `off` : Like `soft` but changes appearance to `white-space: pre` so line segments exceeding `cols` are not wrapped and the `<textarea>` becomes horizontally scrollable.\n\nIf this attribute is not specified, `soft` is its default value.',
              },
            },
            {
              name: 'autocapitalize',
              description:
                'This is a non-standard attribute supported by WebKit on iOS (therefore nearly all browsers running on iOS, including Safari, Firefox, and Chrome), which controls whether and how the text value should be automatically capitalized as it is entered/edited by the user. The non-deprecated values are available in iOS 5 and later. Possible values are:\n\n*   `none`: Completely disables automatic capitalization.\n*   `sentences`: Automatically capitalize the first letter of sentences.\n*   `words`: Automatically capitalize the first letter of words.\n*   `characters`: Automatically capitalize all characters.\n*   `on`: Deprecated since iOS 5.\n*   `off`: Deprecated since iOS 5.',
            },
            {
              name: 'spellcheck',
              description:
                "Specifies whether the `<textarea>` is subject to spell checking by the underlying browser/OS. the value can be:\n\n*   `true`: Indicates that the element needs to have its spelling and grammar checked.\n*   `default` : Indicates that the element is to act according to a default behavior, possibly based on the parent element's own `spellcheck` value.\n*   `false` : Indicates that the element should not be spell checked.",
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/textarea',
            },
          ],
        },
        {
          name: 'output',
          description: {
            kind: 'markdown',
            value:
              'The output element represents the result of a calculation performed by the application, or the result of a user action.',
          },
          attributes: [
            {
              name: 'for',
              description: {
                kind: 'markdown',
                value:
                  'A space-separated list of other elements\u2019 [`id`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id)s, indicating that those elements contributed input values to (or otherwise affected) the calculation.',
              },
            },
            {
              name: 'form',
              description: {
                kind: 'markdown',
                value:
                  'The [form element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) that this element is associated with (its "form owner"). The value of the attribute must be an `id` of a form element in the same document. If this attribute is not specified, the output element must be a descendant of a form element. This attribute enables you to place output elements anywhere within a document, not just as descendants of their form elements.',
              },
            },
            {
              name: 'name',
              description: {
                kind: 'markdown',
                value:
                  'The name of the element, exposed in the [`HTMLFormElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement "The HTMLFormElement interface represents a <form> element in the DOM; it allows access to and in some cases modification of aspects of the form, as well as access to its component elements.") API.',
              },
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/output',
            },
          ],
        },
        {
          name: 'progress',
          description: {
            kind: 'markdown',
            value:
              'The progress element represents the completion progress of a task. The progress is either indeterminate, indicating that progress is being made but that it is not clear how much more work remains to be done before the task is complete (e.g. because the task is waiting for a remote host to respond), or the progress is a number in the range zero to a maximum, giving the fraction of work that has so far been completed.',
          },
          attributes: [
            {
              name: 'value',
              description: {
                kind: 'markdown',
                value:
                  'This attribute specifies how much of the task that has been completed. It must be a valid floating point number between 0 and `max`, or between 0 and 1 if `max` is omitted. If there is no `value` attribute, the progress bar is indeterminate; this indicates that an activity is ongoing with no indication of how long it is expected to take.',
              },
            },
            {
              name: 'max',
              description: {
                kind: 'markdown',
                value:
                  'This attribute describes how much work the task indicated by the `progress` element requires. The `max` attribute, if present, must have a value greater than zero and be a valid floating point number. The default value is 1.',
              },
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/progress',
            },
          ],
        },
        {
          name: 'meter',
          description: {
            kind: 'markdown',
            value:
              'The meter element represents a scalar measurement within a known range, or a fractional value; for example disk usage, the relevance of a query result, or the fraction of a voting population to have selected a particular candidate.',
          },
          attributes: [
            {
              name: 'value',
              description: {
                kind: 'markdown',
                value:
                  "The current numeric value. This must be between the minimum and maximum values (`min` attribute and `max` attribute) if they are specified. If unspecified or malformed, the value is 0. If specified, but not within the range given by the `min` attribute and `max` attribute, the value is equal to the nearest end of the range.\n\n**Usage note:** Unless the `value` attribute is between `0` and `1` (inclusive), the `min` and `max` attributes should define the range so that the `value` attribute's value is within it.",
              },
            },
            {
              name: 'min',
              description: {
                kind: 'markdown',
                value:
                  'The lower numeric bound of the measured range. This must be less than the maximum value (`max` attribute), if specified. If unspecified, the minimum value is 0.',
              },
            },
            {
              name: 'max',
              description: {
                kind: 'markdown',
                value:
                  'The upper numeric bound of the measured range. This must be greater than the minimum value (`min` attribute), if specified. If unspecified, the maximum value is 1.',
              },
            },
            {
              name: 'low',
              description: {
                kind: 'markdown',
                value:
                  'The upper numeric bound of the low end of the measured range. This must be greater than the minimum value (`min` attribute), and it also must be less than the high value and maximum value (`high` attribute and `max` attribute, respectively), if any are specified. If unspecified, or if less than the minimum value, the `low` value is equal to the minimum value.',
              },
            },
            {
              name: 'high',
              description: {
                kind: 'markdown',
                value:
                  'The lower numeric bound of the high end of the measured range. This must be less than the maximum value (`max` attribute), and it also must be greater than the low value and minimum value (`low` attribute and **min** attribute, respectively), if any are specified. If unspecified, or if greater than the maximum value, the `high` value is equal to the maximum value.',
              },
            },
            {
              name: 'optimum',
              description: {
                kind: 'markdown',
                value:
                  'This attribute indicates the optimal numeric value. It must be within the range (as defined by the `min` attribute and `max` attribute). When used with the `low` attribute and `high` attribute, it gives an indication where along the range is considered preferable. For example, if it is between the `min` attribute and the `low` attribute, then the lower range is considered preferred.',
              },
            },
            {
              name: 'form',
              description:
                'This attribute associates the element with a `form` element that has ownership of the `meter` element. For example, a `meter` might be displaying a range corresponding to an `input` element of `type` _number_. This attribute is only used if the `meter` element is being used as a form-associated element; even then, it may be omitted if the element appears as a descendant of a `form` element.',
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/meter',
            },
          ],
        },
        {
          name: 'fieldset',
          description: {
            kind: 'markdown',
            value:
              'The fieldset element represents a set of form controls optionally grouped under a common name.',
          },
          attributes: [
            {
              name: 'disabled',
              valueSet: 'v',
              description: {
                kind: 'markdown',
                value:
                  "If this Boolean attribute is set, all form controls that are descendants of the `<fieldset>`, are disabled, meaning they are not editable and won't be submitted along with the `<form>`. They won't receive any browsing events, like mouse clicks or focus-related events. By default browsers display such controls grayed out. Note that form elements inside the [`<legend>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend \"The HTML <legend> element represents a caption for the content of its parent <fieldset>.\") element won't be disabled.",
              },
            },
            {
              name: 'form',
              description: {
                kind: 'markdown',
                value:
                  'This attribute takes the value of the `id` attribute of a [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") element you want the `<fieldset>` to be part of, even if it is not inside the form.',
              },
            },
            {
              name: 'name',
              description: {
                kind: 'markdown',
                value:
                  'The name associated with the group.\n\n**Note**: The caption for the fieldset is given by the first [`<legend>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend "The HTML <legend> element represents a caption for the content of its parent <fieldset>.") element nested inside it.',
              },
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/fieldset',
            },
          ],
        },
        {
          name: 'legend',
          description: {
            kind: 'markdown',
            value:
              "The legend element represents a caption for the rest of the contents of the legend element's parent fieldset element, if any.",
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/legend',
            },
          ],
        },
        {
          name: 'details',
          description: {
            kind: 'markdown',
            value:
              'The details element represents a disclosure widget from which the user can obtain additional information or controls.',
          },
          attributes: [
            {
              name: 'open',
              valueSet: 'v',
              description: {
                kind: 'markdown',
                value:
                  'This Boolean attribute indicates whether or not the details \u2014 that is, the contents of the `<details>` element \u2014 are currently visible. The default, `false`, means the details are not visible.',
              },
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/details',
            },
          ],
        },
        {
          name: 'summary',
          description: {
            kind: 'markdown',
            value:
              "The summary element represents a summary, caption, or legend for the rest of the contents of the summary element's parent details element, if any.",
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/summary',
            },
          ],
        },
        {
          name: 'dialog',
          description: {
            kind: 'markdown',
            value:
              'The dialog element represents a part of an application that a user interacts with to perform a task, for example a dialog box, inspector, or window.',
          },
          attributes: [
            {
              name: 'open',
              description:
                "Indicates that the dialog is active and available for interaction. When the `open` attribute is not set, the dialog shouldn't be shown to the user.",
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/dialog',
            },
          ],
        },
        {
          name: 'script',
          description: {
            kind: 'markdown',
            value:
              'The script element allows authors to include dynamic script and data blocks in their documents. The element does not represent content for the user.',
          },
          attributes: [
            {
              name: 'src',
              description: {
                kind: 'markdown',
                value:
                  'This attribute specifies the URI of an external script; this can be used as an alternative to embedding a script directly within a document.\n\nIf a `script` element has a `src` attribute specified, it should not have a script embedded inside its tags.',
              },
            },
            {
              name: 'type',
              description: {
                kind: 'markdown',
                value:
                  'This attribute indicates the type of script represented. The value of this attribute will be in one of the following categories:\n\n*   **Omitted or a JavaScript MIME type:** For HTML5-compliant browsers this indicates the script is JavaScript. HTML5 specification urges authors to omit the attribute rather than provide a redundant MIME type. In earlier browsers, this identified the scripting language of the embedded or imported (via the `src` attribute) code. JavaScript MIME types are [listed in the specification](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#JavaScript_types).\n*   **`module`:** For HTML5-compliant browsers the code is treated as a JavaScript module. The processing of the script contents is not affected by the `charset` and `defer` attributes. For information on using `module`, see [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/). Code may behave differently when the `module` keyword is used.\n*   **Any other value:** The embedded content is treated as a data block which won\'t be processed by the browser. Developers must use a valid MIME type that is not a JavaScript MIME type to denote data blocks. The `src` attribute will be ignored.\n\n**Note:** in Firefox you could specify the version of JavaScript contained in a `<script>` element by including a non-standard `version` parameter inside the `type` attribute \u2014 for example `type="text/javascript;version=1.8"`. This has been removed in Firefox 59 (see [bug\xa01428745](https://bugzilla.mozilla.org/show_bug.cgi?id=1428745 "FIXED: Remove support for version parameter from script loader")).',
              },
            },
            { name: 'charset' },
            {
              name: 'async',
              valueSet: 'v',
              description: {
                kind: 'markdown',
                value:
                  'This is a Boolean attribute indicating that the browser should, if possible, load the script asynchronously.\n\nThis attribute must not be used if the `src` attribute is absent (i.e. for inline scripts). If it is included in this case it will have no effect.\n\nBrowsers usually assume the worst case scenario and load scripts synchronously, (i.e. `async="false"`) during HTML parsing.\n\nDynamically inserted scripts (using [`document.createElement()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement "In an HTML document, the document.createElement() method creates the HTML element specified by tagName, or an HTMLUnknownElement if tagName isn\'t recognized.")) load asynchronously by default, so to turn on synchronous loading (i.e. scripts load in the order they were inserted) set `async="false"`.\n\nSee [Browser compatibility](#Browser_compatibility) for notes on browser support. See also [Async scripts for asm.js](https://developer.mozilla.org/en-US/docs/Games/Techniques/Async_scripts).',
              },
            },
            {
              name: 'defer',
              valueSet: 'v',
              description: {
                kind: 'markdown',
                value:
                  'This Boolean attribute is set to indicate to a browser that the script is meant to be executed after the document has been parsed, but before firing [`DOMContentLoaded`](https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded "/en-US/docs/Web/Events/DOMContentLoaded").\n\nScripts with the `defer` attribute will prevent the `DOMContentLoaded` event from firing until the script has loaded and finished evaluating.\n\nThis attribute must not be used if the `src` attribute is absent (i.e. for inline scripts), in this case it would have no effect.\n\nTo achieve a similar effect for dynamically inserted scripts use `async="false"` instead. Scripts with the `defer` attribute will execute in the order in which they appear in the document.',
              },
            },
            {
              name: 'crossorigin',
              valueSet: 'xo',
              description: {
                kind: 'markdown',
                value:
                  'Normal `script` elements pass minimal information to the [`window.onerror`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror "The onerror property of the GlobalEventHandlers mixin is an EventHandler that processes error events.") for scripts which do not pass the standard [CORS](https://developer.mozilla.org/en-US/docs/Glossary/CORS "CORS: CORS (Cross-Origin Resource Sharing) is a system, consisting of transmitting HTTP headers, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests.") checks. To allow error logging for sites which use a separate domain for static media, use this attribute. See [CORS settings attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for a more descriptive explanation of its valid arguments.',
              },
            },
            {
              name: 'nonce',
              description: {
                kind: 'markdown',
                value:
                  "A cryptographic nonce (number used once) to whitelist inline scripts in a [script-src Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src). The server must generate a unique nonce value each time it transmits a policy. It is critical to provide a nonce that cannot be guessed as bypassing a resource's policy is otherwise trivial.",
              },
            },
            {
              name: 'integrity',
              description:
                'This attribute contains inline metadata that a user agent can use to verify that a fetched resource has been delivered free of unexpected manipulation. See [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity).',
            },
            {
              name: 'nomodule',
              description:
                'This Boolean attribute is set to indicate that the script should not be executed in browsers that support [ES2015 modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) \u2014 in effect, this can be used to serve fallback scripts to older browsers that do not support modular JavaScript code.',
            },
            {
              name: 'referrerpolicy',
              description:
                'Indicates which [referrer](https://developer.mozilla.org/en-US/docs/Web/API/Document/referrer) to send when fetching the script, or resources fetched by the script:\n\n*   `no-referrer`: The [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer "The Referer request header contains the address of the previous web page from which a link to the currently requested page was followed. The Referer header allows servers to identify where people are visiting them from and may use that data for analytics, logging, or optimized caching, for example.") header will not be sent.\n*   `no-referrer-when-downgrade` (default): The [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer "The Referer request header contains the address of the previous web page from which a link to the currently requested page was followed. The Referer header allows servers to identify where people are visiting them from and may use that data for analytics, logging, or optimized caching, for example.") header will not be sent to [origin](https://developer.mozilla.org/en-US/docs/Glossary/origin "origin: Web content\'s origin is defined by the scheme (protocol), host (domain), and port of the URL used to access it. Two objects have the same origin only when the scheme, host, and port all match.")s without [TLS](https://developer.mozilla.org/en-US/docs/Glossary/TLS "TLS: Transport Layer Security (TLS), previously known as Secure Sockets Layer (SSL), is a protocol used by applications to communicate securely across a network, preventing tampering with and eavesdropping on email, web browsing, messaging, and other protocols.") ([HTTPS](https://developer.mozilla.org/en-US/docs/Glossary/HTTPS "HTTPS: HTTPS (HTTP Secure) is an encrypted version of the HTTP protocol. It usually uses SSL or TLS to encrypt all communication between a client and a server. This secure connection allows clients to safely exchange sensitive data with a server, for example for banking activities or online shopping.")).\n*   `origin`: The sent referrer will be limited to the origin of the referring page: its [scheme](https://developer.mozilla.org/en-US/docs/Archive/Mozilla/URIScheme), [host](https://developer.mozilla.org/en-US/docs/Glossary/host "host: A host is a device connected to the Internet (or a local network). Some hosts called servers offer additional services like serving webpages or storing files and emails."), and [port](https://developer.mozilla.org/en-US/docs/Glossary/port "port: For a computer connected to a network with an IP address, a port is a communication endpoint. Ports are designated by numbers, and below 1024 each port is associated by default with a specific protocol.").\n*   `origin-when-cross-origin`: The referrer sent to other origins will be limited to the scheme, the host, and the port. Navigations on the same origin will still include the path.\n*   `same-origin`: A referrer will be sent for [same origin](https://developer.mozilla.org/en-US/docs/Glossary/Same-origin_policy "same origin: The same-origin policy is a critical security mechanism that restricts how a document or script loaded from one origin can interact with a resource from another origin."), but cross-origin requests will contain no referrer information.\n*   `strict-origin`: Only send the origin of the document as the referrer when the protocol security level stays the same (e.g. HTTPS\u2192HTTPS), but don\'t send it to a less secure destination (e.g. HTTPS\u2192HTTP).\n*   `strict-origin-when-cross-origin`: Send a full URL when performing a same-origin request, but only send the origin when the protocol security level stays the same (e.g.HTTPS\u2192HTTPS), and send no header to a less secure destination (e.g. HTTPS\u2192HTTP).\n*   `unsafe-url`: The referrer will include the origin _and_ the path (but not the [fragment](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/hash), [password](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/password), or [username](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/username)). **This value is unsafe**, because it leaks origins and paths from TLS-protected resources to insecure origins.\n\n**Note**: An empty string value (`""`) is both the default value, and a fallback value if `referrerpolicy` is not supported. If `referrerpolicy` is not explicitly specified on the `<script>` element, it will adopt a higher-level referrer policy, i.e. one set on the whole document or domain. If a higher-level policy is not available,\xa0the empty string is treated as being equivalent to `no-referrer-when-downgrade`.',
            },
            {
              name: 'text',
              description:
                'Like the `textContent` attribute, this attribute sets the text content of the element. Unlike the `textContent` attribute, however, this attribute is evaluated as executable code after the node is inserted into the DOM.',
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/script',
            },
          ],
        },
        {
          name: 'noscript',
          description: {
            kind: 'markdown',
            value:
              "The noscript element represents nothing if scripting is enabled, and represents its children if scripting is disabled. It is used to present different markup to user agents that support scripting and those that don't support scripting, by affecting how the document is parsed.",
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/noscript',
            },
          ],
        },
        {
          name: 'template',
          description: {
            kind: 'markdown',
            value:
              'The template element is used to declare fragments of HTML that can be cloned and inserted in the document by script.',
          },
          attributes: [],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/template',
            },
          ],
        },
        {
          name: 'canvas',
          description: {
            kind: 'markdown',
            value:
              'The canvas element provides scripts with a resolution-dependent bitmap canvas, which can be used for rendering graphs, game graphics, art, or other visual images on the fly.',
          },
          attributes: [
            {
              name: 'width',
              description: {
                kind: 'markdown',
                value:
                  'The width of the coordinate space in CSS pixels. Defaults to 300.',
              },
            },
            {
              name: 'height',
              description: {
                kind: 'markdown',
                value:
                  'The height of the coordinate space in CSS pixels. Defaults to 150.',
              },
            },
            {
              name: 'moz-opaque',
              description:
                "Lets the canvas know whether or not translucency will be a factor. If the canvas knows there's no translucency, painting performance can be optimized. This is only supported by Mozilla-based browsers; use the standardized [`canvas.getContext('2d', { alpha: false })`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext \"The HTMLCanvasElement.getContext() method returns a drawing context on the canvas, or null if the context identifier is not supported.\") instead.",
            },
          ],
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Element/canvas',
            },
          ],
        },
      ],
      globalAttributes: [
        {
          name: 'accesskey',
          description: {
            kind: 'markdown',
            value:
              'Provides a hint for generating a keyboard shortcut for the current element. This attribute consists of a space-separated list of characters. The browser should use the first one that exists on the computer keyboard layout.',
          },
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/accesskey',
            },
          ],
        },
        {
          name: 'autocapitalize',
          description: {
            kind: 'markdown',
            value:
              'Controls whether and how text input is automatically capitalized as it is entered/edited by the user. It can have the following values:\n\n*   `off` or `none`, no autocapitalization is applied (all letters default to lowercase)\n*   `on` or `sentences`, the first letter of each sentence defaults to a capital letter; all other letters default to lowercase\n*   `words`, the first letter of each word defaults to a capital letter; all other letters default to lowercase\n*   `characters`, all letters should default to uppercase',
          },
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/autocapitalize',
            },
          ],
        },
        {
          name: 'class',
          description: {
            kind: 'markdown',
            value:
              'A space-separated list of the classes of the element. Classes allows CSS and JavaScript to select and access specific elements via the [class selectors](/en-US/docs/Web/CSS/Class_selectors) or functions like the method [`Document.getElementsByClassName()`](/en-US/docs/Web/API/Document/getElementsByClassName "returns an array-like object of all child elements which have all of the given class names.").',
          },
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/class',
            },
          ],
        },
        {
          name: 'contenteditable',
          description: {
            kind: 'markdown',
            value:
              'An enumerated attribute indicating if the element should be editable by the user. If so, the browser modifies its widget to allow editing. The attribute must take one of the following values:\n\n*   `true` or the _empty string_, which indicates that the element must be editable;\n*   `false`, which indicates that the element must not be editable.',
          },
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/contenteditable',
            },
          ],
        },
        {
          name: 'contextmenu',
          description: {
            kind: 'markdown',
            value:
              'The `[**id**](#attr-id)` of a [`<menu>`](/en-US/docs/Web/HTML/Element/menu "The HTML <menu> element represents a group of commands that a user can perform or activate. This includes both list menus, which might appear across the top of a screen, as well as context menus, such as those that might appear underneath a button after it has been clicked.") to use as the contextual menu for this element.',
          },
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/contextmenu',
            },
          ],
        },
        {
          name: 'dir',
          description: {
            kind: 'markdown',
            value:
              "An enumerated attribute indicating the directionality of the element's text. It can have the following values:\n\n*   `ltr`, which means _left to right_ and is to be used for languages that are written from the left to the right (like English);\n*   `rtl`, which means _right to left_ and is to be used for languages that are written from the right to the left (like Arabic);\n*   `auto`, which lets the user agent decide. It uses a basic algorithm as it parses the characters inside the element until it finds a character with a strong directionality, then it applies that directionality to the whole element.",
          },
          valueSet: 'd',
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/dir',
            },
          ],
        },
        {
          name: 'draggable',
          description: {
            kind: 'markdown',
            value:
              'An enumerated attribute indicating whether the element can be dragged, using the [Drag and Drop API](/en-us/docs/DragDrop/Drag_and_Drop). It can have the following values:\n\n*   `true`, which indicates that the element may be dragged\n*   `false`, which indicates that the element may not be dragged.',
          },
          valueSet: 'b',
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/draggable',
            },
          ],
        },
        {
          name: 'dropzone',
          description: {
            kind: 'markdown',
            value:
              'An enumerated attribute indicating what types of content can be dropped on an element, using the [Drag and Drop API](/en-US/docs/DragDrop/Drag_and_Drop). It can have the following values:\n\n*   `copy`, which indicates that dropping will create a copy of the element that was dragged\n*   `move`, which indicates that the element that was dragged will be moved to this new location.\n*   `link`, will create a link to the dragged data.',
          },
        },
        {
          name: 'exportparts',
          description: {
            kind: 'markdown',
            value:
              'Used to transitively export shadow parts from a nested shadow tree into a containing light tree.',
          },
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/exportparts',
            },
          ],
        },
        {
          name: 'hidden',
          description: {
            kind: 'markdown',
            value:
              "A Boolean attribute indicates that the element is not yet, or is no longer, _relevant_. For example, it can be used to hide elements of the page that can't be used until the login process has been completed. The browser won't render such elements. This attribute must not be used to hide content that could legitimately be shown.",
          },
          valueSet: 'v',
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden',
            },
          ],
        },
        {
          name: 'id',
          description: {
            kind: 'markdown',
            value:
              'Defines a unique identifier (ID) which must be unique in the whole document. Its purpose is to identify the element when linking (using a fragment identifier), scripting, or styling (with CSS).',
          },
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/id',
            },
          ],
        },
        {
          name: 'inputmode',
          description: {
            kind: 'markdown',
            value:
              'Provides a hint to browsers as to the type of virtual keyboard configuration to use when editing this element or its contents. Used primarily on [`<input>`](/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") elements, but is usable on any element while in `[contenteditable](/en-US/docs/Web/HTML/Global_attributes#attr-contenteditable)` mode.',
          },
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/inputmode',
            },
          ],
        },
        {
          name: 'is',
          description: {
            kind: 'markdown',
            value:
              'Allows you to specify that a standard HTML element should behave like a registered custom built-in element (see [Using custom elements](/en-US/docs/Web/Web_Components/Using_custom_elements) for more details).',
          },
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/is',
            },
          ],
        },
        {
          name: 'itemid',
          description: {
            kind: 'markdown',
            value: 'The unique, global identifier of an item.',
          },
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemid',
            },
          ],
        },
        {
          name: 'itemprop',
          description: {
            kind: 'markdown',
            value:
              'Used to add properties to an item. Every HTML element may have an `itemprop` attribute specified, where an `itemprop` consists of a name and value pair.',
          },
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemprop',
            },
          ],
        },
        {
          name: 'itemref',
          description: {
            kind: 'markdown',
            value:
              'Properties that are not descendants of an element with the `itemscope` attribute can be associated with the item using an `itemref`. It provides a list of element ids (not `itemid`s) with additional properties elsewhere in the document.',
          },
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemref',
            },
          ],
        },
        {
          name: 'itemscope',
          description: {
            kind: 'markdown',
            value:
              '`itemscope` (usually) works along with `[itemtype](/en-US/docs/Web/HTML/Global_attributes#attr-itemtype)` to specify that the HTML contained in a block is about a particular item. `itemscope` creates the Item and defines the scope of the `itemtype` associated with it. `itemtype` is a valid URL of a vocabulary (such as [schema.org](https://schema.org/)) that describes the item and its properties context.',
          },
          valueSet: 'v',
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemscope',
            },
          ],
        },
        {
          name: 'itemtype',
          description: {
            kind: 'markdown',
            value:
              'Specifies the URL of the vocabulary that will be used to define `itemprop`s (item properties) in the data structure. `[itemscope](/en-US/docs/Web/HTML/Global_attributes#attr-itemscope)` is used to set the scope of where in the data structure the vocabulary set by `itemtype` will be active.',
          },
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemtype',
            },
          ],
        },
        {
          name: 'lang',
          description: {
            kind: 'markdown',
            value:
              'Helps define the language of an element: the language that non-editable elements are in, or the language that editable elements should be written in by the user. The attribute contains one \u201clanguage tag\u201d (made of hyphen-separated \u201clanguage subtags\u201d) in the format defined in [_Tags for Identifying Languages (BCP47)_](https://www.ietf.org/rfc/bcp/bcp47.txt). [**xml:lang**](#attr-xml:lang) has priority over it.',
          },
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/lang',
            },
          ],
        },
        {
          name: 'part',
          description: {
            kind: 'markdown',
            value:
              'A space-separated list of the part names of the element. Part names allows CSS to select and style specific elements in a shadow tree via the [`::part`](/en-US/docs/Web/CSS/::part "The ::part CSS pseudo-element represents any element within a shadow tree that has a matching part attribute.") pseudo-element.',
          },
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/part',
            },
          ],
        },
        { name: 'role', valueSet: 'roles' },
        {
          name: 'slot',
          description: {
            kind: 'markdown',
            value:
              'Assigns a slot in a [shadow DOM](/en-US/docs/Web/Web_Components/Shadow_DOM) shadow tree to an element: An element with a `slot` attribute is assigned to the slot created by the [`<slot>`](/en-US/docs/Web/HTML/Element/slot "The HTML <slot> element\u2014part of the Web Components technology suite\u2014is a placeholder inside a web component that you can fill with your own markup, which lets you create separate DOM trees and present them together.") element whose `[name](/en-US/docs/Web/HTML/Element/slot#attr-name)` attribute\'s value matches that `slot` attribute\'s value.',
          },
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/slot',
            },
          ],
        },
        {
          name: 'spellcheck',
          description: {
            kind: 'markdown',
            value:
              'An enumerated attribute defines whether the element may be checked for spelling errors. It may have the following values:\n\n*   `true`, which indicates that the element should be, if possible, checked for spelling errors;\n*   `false`, which indicates that the element should not be checked for spelling errors.',
          },
          valueSet: 'b',
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/spellcheck',
            },
          ],
        },
        {
          name: 'style',
          description: {
            kind: 'markdown',
            value:
              'Contains [CSS](/en-US/docs/Web/CSS) styling declarations to be applied to the element. Note that it is recommended for styles to be defined in a separate file or files. This attribute and the [`<style>`](/en-US/docs/Web/HTML/Element/style "The HTML <style> element contains style information for a document, or part of a document.") element have mainly the purpose of allowing for quick styling, for example for testing purposes.',
          },
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/style',
            },
          ],
        },
        {
          name: 'tabindex',
          description: {
            kind: 'markdown',
            value:
              'An integer attribute indicating if the element can take input focus (is _focusable_), if it should participate to sequential keyboard navigation, and if so, at what position. It can take several values:\n\n*   a _negative value_ means that the element should be focusable, but should not be reachable via sequential keyboard navigation;\n*   `0` means that the element should be focusable and reachable via sequential keyboard navigation, but its relative order is defined by the platform convention;\n*   a _positive value_ means that the element should be focusable and reachable via sequential keyboard navigation; the order in which the elements are focused is the increasing value of the [**tabindex**](#attr-tabindex). If several elements share the same tabindex, their relative order follows their relative positions in the document.',
          },
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/tabindex',
            },
          ],
        },
        {
          name: 'title',
          description: {
            kind: 'markdown',
            value:
              'Contains a text representing advisory information related to the element it belongs to. Such information can typically, but not necessarily, be presented to the user as a tooltip.',
          },
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/title',
            },
          ],
        },
        {
          name: 'translate',
          description: {
            kind: 'markdown',
            value:
              'An enumerated attribute that is used to specify whether an element\'s attribute values and the values of its [`Text`](/en-US/docs/Web/API/Text "The Text interface represents the textual content of Element or Attr. If an element has no markup within its content, it has a single child implementing Text that contains the element\'s text. However, if the element contains markup, it is parsed into information items and Text nodes that form its children.") node children are to be translated when the page is localized, or whether to leave them unchanged. It can have the following values:\n\n*   empty string and `yes`, which indicates that the element will be translated.\n*   `no`, which indicates that the element will not be translated.',
          },
          valueSet: 'y',
          references: [
            {
              name: 'MDN Reference',
              url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/translate',
            },
          ],
        },
        {
          name: 'onabort',
          description: {
            kind: 'markdown',
            value: 'The loading of a resource has been aborted.',
          },
        },
        {
          name: 'onblur',
          description: {
            kind: 'markdown',
            value: 'An element has lost focus (does not bubble).',
          },
        },
        {
          name: 'oncanplay',
          description: {
            kind: 'markdown',
            value:
              'The user agent can play the media, but estimates that not enough data has been loaded to play the media up to its end without having to stop for further buffering of content.',
          },
        },
        {
          name: 'oncanplaythrough',
          description: {
            kind: 'markdown',
            value:
              'The user agent can play the media up to its end without having to stop for further buffering of content.',
          },
        },
        {
          name: 'onchange',
          description: {
            kind: 'markdown',
            value:
              "The change event is fired for <input>, <select>, and <textarea> elements when a change to the element's value is committed by the user.",
          },
        },
        {
          name: 'onclick',
          description: {
            kind: 'markdown',
            value:
              'A pointing device button has been pressed and released on an element.',
          },
        },
        {
          name: 'oncontextmenu',
          description: {
            kind: 'markdown',
            value:
              'The right button of the mouse is clicked (before the context menu is displayed).',
          },
        },
        {
          name: 'ondblclick',
          description: {
            kind: 'markdown',
            value: 'A pointing device button is clicked twice on an element.',
          },
        },
        {
          name: 'ondrag',
          description: {
            kind: 'markdown',
            value:
              'An element or text selection is being dragged (every 350ms).',
          },
        },
        {
          name: 'ondragend',
          description: {
            kind: 'markdown',
            value:
              'A drag operation is being ended (by releasing a mouse button or hitting the escape key).',
          },
        },
        {
          name: 'ondragenter',
          description: {
            kind: 'markdown',
            value:
              'A dragged element or text selection enters a valid drop target.',
          },
        },
        {
          name: 'ondragleave',
          description: {
            kind: 'markdown',
            value:
              'A dragged element or text selection leaves a valid drop target.',
          },
        },
        {
          name: 'ondragover',
          description: {
            kind: 'markdown',
            value:
              'An element or text selection is being dragged over a valid drop target (every 350ms).',
          },
        },
        {
          name: 'ondragstart',
          description: {
            kind: 'markdown',
            value: 'The user starts dragging an element or text selection.',
          },
        },
        {
          name: 'ondrop',
          description: {
            kind: 'markdown',
            value: 'An element is dropped on a valid drop target.',
          },
        },
        {
          name: 'ondurationchange',
          description: {
            kind: 'markdown',
            value: 'The duration attribute has been updated.',
          },
        },
        {
          name: 'onemptied',
          description: {
            kind: 'markdown',
            value:
              'The media has become empty; for example, this event is sent if the media has already been loaded (or partially loaded), and the load() method is called to reload it.',
          },
        },
        {
          name: 'onended',
          description: {
            kind: 'markdown',
            value:
              'Playback has stopped because the end of the media was reached.',
          },
        },
        {
          name: 'onerror',
          description: {
            kind: 'markdown',
            value: 'A resource failed to load.',
          },
        },
        {
          name: 'onfocus',
          description: {
            kind: 'markdown',
            value: 'An element has received focus (does not bubble).',
          },
        },
        { name: 'onformchange' },
        { name: 'onforminput' },
        {
          name: 'oninput',
          description: {
            kind: 'markdown',
            value:
              'The value of an element changes or the content of an element with the attribute contenteditable is modified.',
          },
        },
        {
          name: 'oninvalid',
          description: {
            kind: 'markdown',
            value:
              "A submittable element has been checked and doesn't satisfy its constraints.",
          },
        },
        {
          name: 'onkeydown',
          description: { kind: 'markdown', value: 'A key is pressed down.' },
        },
        {
          name: 'onkeypress',
          description: {
            kind: 'markdown',
            value:
              'A key is pressed down and that key normally produces a character value (use input instead).',
          },
        },
        {
          name: 'onkeyup',
          description: { kind: 'markdown', value: 'A key is released.' },
        },
        {
          name: 'onload',
          description: {
            kind: 'markdown',
            value:
              'A resource and its dependent resources have finished loading.',
          },
        },
        {
          name: 'onloadeddata',
          description: {
            kind: 'markdown',
            value: 'The first frame of the media has finished loading.',
          },
        },
        {
          name: 'onloadedmetadata',
          description: {
            kind: 'markdown',
            value: 'The metadata has been loaded.',
          },
        },
        {
          name: 'onloadstart',
          description: { kind: 'markdown', value: 'Progress has begun.' },
        },
        {
          name: 'onmousedown',
          description: {
            kind: 'markdown',
            value:
              'A pointing device button (usually a mouse) is pressed on an element.',
          },
        },
        {
          name: 'onmousemove',
          description: {
            kind: 'markdown',
            value: 'A pointing device is moved over an element.',
          },
        },
        {
          name: 'onmouseout',
          description: {
            kind: 'markdown',
            value:
              'A pointing device is moved off the element that has the listener attached or off one of its children.',
          },
        },
        {
          name: 'onmouseover',
          description: {
            kind: 'markdown',
            value:
              'A pointing device is moved onto the element that has the listener attached or onto one of its children.',
          },
        },
        {
          name: 'onmouseup',
          description: {
            kind: 'markdown',
            value: 'A pointing device button is released over an element.',
          },
        },
        { name: 'onmousewheel' },
        {
          name: 'onmouseenter',
          description: {
            kind: 'markdown',
            value:
              'A pointing device is moved onto the element that has the listener attached.',
          },
        },
        {
          name: 'onmouseleave',
          description: {
            kind: 'markdown',
            value:
              'A pointing device is moved off the element that has the listener attached.',
          },
        },
        {
          name: 'onpause',
          description: { kind: 'markdown', value: 'Playback has been paused.' },
        },
        {
          name: 'onplay',
          description: { kind: 'markdown', value: 'Playback has begun.' },
        },
        {
          name: 'onplaying',
          description: {
            kind: 'markdown',
            value:
              'Playback is ready to start after having been paused or delayed due to lack of data.',
          },
        },
        {
          name: 'onprogress',
          description: { kind: 'markdown', value: 'In progress.' },
        },
        {
          name: 'onratechange',
          description: {
            kind: 'markdown',
            value: 'The playback rate has changed.',
          },
        },
        {
          name: 'onreset',
          description: { kind: 'markdown', value: 'A form is reset.' },
        },
        {
          name: 'onresize',
          description: {
            kind: 'markdown',
            value: 'The document view has been resized.',
          },
        },
        {
          name: 'onreadystatechange',
          description: {
            kind: 'markdown',
            value: 'The readyState attribute of a document has changed.',
          },
        },
        {
          name: 'onscroll',
          description: {
            kind: 'markdown',
            value: 'The document view or an element has been scrolled.',
          },
        },
        {
          name: 'onseeked',
          description: {
            kind: 'markdown',
            value: 'A seek operation completed.',
          },
        },
        {
          name: 'onseeking',
          description: { kind: 'markdown', value: 'A seek operation began.' },
        },
        {
          name: 'onselect',
          description: {
            kind: 'markdown',
            value: 'Some text is being selected.',
          },
        },
        {
          name: 'onshow',
          description: {
            kind: 'markdown',
            value:
              'A contextmenu event was fired on/bubbled to an element that has a contextmenu attribute',
          },
        },
        {
          name: 'onstalled',
          description: {
            kind: 'markdown',
            value:
              'The user agent is trying to fetch media data, but data is unexpectedly not forthcoming.',
          },
        },
        {
          name: 'onsubmit',
          description: { kind: 'markdown', value: 'A form is submitted.' },
        },
        {
          name: 'onsuspend',
          description: {
            kind: 'markdown',
            value: 'Media data loading has been suspended.',
          },
        },
        {
          name: 'ontimeupdate',
          description: {
            kind: 'markdown',
            value:
              'The time indicated by the currentTime attribute has been updated.',
          },
        },
        {
          name: 'onvolumechange',
          description: { kind: 'markdown', value: 'The volume has changed.' },
        },
        {
          name: 'onwaiting',
          description: {
            kind: 'markdown',
            value: 'Playback has stopped because of a temporary lack of data.',
          },
        },
        {
          name: 'onpointercancel',
          description: {
            kind: 'markdown',
            value: 'The pointer is unlikely to produce any more events.',
          },
        },
        {
          name: 'onpointerdown',
          description: {
            kind: 'markdown',
            value: 'The pointer enters the active buttons state.',
          },
        },
        {
          name: 'onpointerenter',
          description: {
            kind: 'markdown',
            value: 'Pointing device is moved inside the hit-testing boundary.',
          },
        },
        {
          name: 'onpointerleave',
          description: {
            kind: 'markdown',
            value: 'Pointing device is moved out of the hit-testing boundary.',
          },
        },
        {
          name: 'onpointerlockchange',
          description: {
            kind: 'markdown',
            value: 'The pointer was locked or released.',
          },
        },
        {
          name: 'onpointerlockerror',
          description: {
            kind: 'markdown',
            value:
              'It was impossible to lock the pointer for technical reasons or because the permission was denied.',
          },
        },
        {
          name: 'onpointermove',
          description: {
            kind: 'markdown',
            value: 'The pointer changed coordinates.',
          },
        },
        {
          name: 'onpointerout',
          description: {
            kind: 'markdown',
            value:
              'The pointing device moved out of hit-testing boundary or leaves detectable hover range.',
          },
        },
        {
          name: 'onpointerover',
          description: {
            kind: 'markdown',
            value:
              'The pointing device is moved into the hit-testing boundary.',
          },
        },
        {
          name: 'onpointerup',
          description: {
            kind: 'markdown',
            value: 'The pointer leaves the active buttons state.',
          },
        },
        {
          name: 'aria-activedescendant',
          references: [
            {
              name: 'WAI-ARIA Reference',
              url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-activedescendant',
            },
          ],
          description: {
            kind: 'markdown',
            value:
              'Identifies the currently active element when DOM focus is on a [`composite`](https://www.w3.org/TR/wai-aria-1.1/#composite) widget, [`textbox`](https://www.w3.org/TR/wai-aria-1.1/#textbox), [`group`](https://www.w3.org/TR/wai-aria-1.1/#group), or [`application`](https://www.w3.org/TR/wai-aria-1.1/#application).',
          },
        },
        {
          name: 'aria-atomic',
          valueSet: 'b',
          references: [
            {
              name: 'WAI-ARIA Reference',
              url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-atomic',
            },
          ],
          description: {
            kind: 'markdown',
            value:
              'Indicates whether [assistive technologies](https://www.w3.org/TR/wai-aria-1.1/#dfn-assistive-technology) will present all, or only parts of, the changed region based on the change notifications defined by the [`aria-relevant`](https://www.w3.org/TR/wai-aria-1.1/#aria-relevant) attribute.',
          },
        },
        {
          name: 'aria-autocomplete',
          valueSet: 'autocomplete',
          references: [
            {
              name: 'WAI-ARIA Reference',
              url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-autocomplete',
            },
          ],
          description: {
            kind: 'markdown',
            value:
              "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be presented if they are made.",
          },
        },
        {
          name: 'aria-busy',
          valueSet: 'b',
          references: [
            {
              name: 'WAI-ARIA Reference',
              url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-busy',
            },
          ],
          description: {
            kind: 'markdown',
            value:
              'Indicates an element is being modified and that assistive technologies _MAY_ want to wait until the modifications are complete before exposing them to the user.',
          },
        },
        {
          name: 'aria-checked',
          valueSet: 'tristate',
          references: [
            {
              name: 'WAI-ARIA Reference',
              url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-checked',
            },
          ],
          description: {
            kind: 'markdown',
            value:
              'Indicates the current "checked" [state](https://www.w3.org/TR/wai-aria-1.1/#dfn-state) of checkboxes, radio buttons, and other [widgets](https://www.w3.org/TR/wai-aria-1.1/#dfn-widget). See related [`aria-pressed`](https://www.w3.org/TR/wai-aria-1.1/#aria-pressed) and [`aria-selected`](https://www.w3.org/TR/wai-aria-1.1/#aria-selected).',
          },
        },
        {
          name: 'aria-colcount',
          references: [
            {
              name: 'WAI-ARIA Reference',
              url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-colcount',
            },
          ],
          description: {
            kind: 'markdown',
            value:
              'Defines the total number of columns in a [`table`](https://www.w3.org/TR/wai-aria-1.1/#table), [`grid`](https://www.w3.org/TR/wai-aria-1.1/#grid), or [`treegrid`](https://www.w3.org/TR/wai-aria-1.1/#treegrid). See related [`aria-colindex`](https://www.w3.org/TR/wai-aria-1.1/#aria-colindex).',
          },
        },
        {
          name: 'aria-colindex',
          references: [
            {
              name: 'WAI-ARIA Reference',
              url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-colindex',
            },
          ],
          description: {
            kind: 'markdown',
            value:
              "Defines an [element's](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) column index or position with respect to the total number of columns within a [`table`](https://www.w3.org/TR/wai-aria-1.1/#table), [`grid`](https://www.w3.org/TR/wai-aria-1.1/#grid), or [`treegrid`](https://www.w3.org/TR/wai-aria-1.1/#treegrid). See related [`aria-colcount`](https://www.w3.org/TR/wai-aria-1.1/#aria-colcount) and [`aria-colspan`](https://www.w3.org/TR/wai-aria-1.1/#aria-colspan).",
          },
        },
        {
          name: 'aria-colspan',
          references: [
            {
              name: 'WAI-ARIA Reference',
              url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-colspan',
            },
          ],
          description: {
            kind: 'markdown',
            value:
              'Defines the number of columns spanned by a cell or gridcell within a [`table`](https://www.w3.org/TR/wai-aria-1.1/#table), [`grid`](https://www.w3.org/TR/wai-aria-1.1/#grid), or [`treegrid`](https://www.w3.org/TR/wai-aria-1.1/#treegrid). See related [`aria-colindex`](https://www.w3.org/TR/wai-aria-1.1/#aria-colindex) and [`aria-rowspan`](https://www.w3.org/TR/wai-aria-1.1/#aria-rowspan).',
          },
        },
        {
          name: 'aria-controls',
          references: [
            {
              name: 'WAI-ARIA Reference',
              url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-controls',
            },
          ],
          description: {
            kind: 'markdown',
            value:
              'Identifies the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) (or elements) whose contents or presence are controlled by the current element. See related [`aria-owns`](https://www.w3.org/TR/wai-aria-1.1/#aria-owns).',
          },
        },
        {
          name: 'aria-current',
          valueSet: 'current',
          references: [
            {
              name: 'WAI-ARIA Reference',
              url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-current',
            },
          ],
          description: {
            kind: 'markdown',
            value:
              'Indicates the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) that represents the current item within a container or set of related elements.',
          },
        },
        {
          name: 'aria-describedby',
          references: [
            {
              name: 'WAI-ARIA Reference',
              url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-describedby',
            },
          ],
          description: {
            kind: 'markdown',
            value:
              'Identifies the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) (or elements) that describes the [object](https://www.w3.org/TR/wai-aria-1.1/#dfn-object). See related [`aria-labelledby`](https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby).',
          },
        },
        {
          name: 'aria-disabled',
          valueSet: 'b',
          references: [
            {
              name: 'WAI-ARIA Reference',
              url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-disabled',
            },
          ],
          description: {
            kind: 'markdown',
            value:
              'Indicates that the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) is [perceivable](https://www.w3.org/TR/wai-aria-1.1/#dfn-perceivable) but disabled, so it is not editable or otherwise [operable](https://www.w3.org/TR/wai-aria-1.1/#dfn-operable). See related [`aria-hidden`](https://www.w3.org/TR/wai-aria-1.1/#aria-hidden) and [`aria-readonly`](https://www.w3.org/TR/wai-aria-1.1/#aria-readonly).',
          },
        },
        {
          name: 'aria-dropeffect',
          valueSet: 'dropeffect',
          references: [
            {
              name: 'WAI-ARIA Reference',
              url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-dropeffect',
            },
          ],
          description: {
            kind: 'markdown',
            value:
              '\\[Deprecated in ARIA 1.1\\] Indicates what functions can be performed when a dragged object is released on the drop target.',
          },
        },
        {
          name: 'aria-errormessage',
          references: [
            {
              name: 'WAI-ARIA Reference',
              url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-errormessage',
            },
          ],
          description: {
            kind: 'markdown',
            value:
              'Identifies the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) that provides an error message for the [object](https://www.w3.org/TR/wai-aria-1.1/#dfn-object). See related [`aria-invalid`](https://www.w3.org/TR/wai-aria-1.1/#aria-invalid) and [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby).',
          },
        },
        {
          name: 'aria-expanded',
          valueSet: 'u',
          references: [
            {
              name: 'WAI-ARIA Reference',
              url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-expanded',
            },
          ],
          description: {
            kind: 'markdown',
            value:
              'Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.',
          },
        },
        {
          name: 'aria-flowto',
          references: [
            {
              name: 'WAI-ARIA Reference',
              url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-flowto',
            },
          ],
          description: {
            kind: 'markdown',
            value:
              "Identifies the next [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) (or elements) in an alternate reading order of content which, at the user's discretion, allows assistive technology to override the general default of reading in document source order.",
          },
        },
        {
          name: 'aria-grabbed',
          valueSet: 'u',
          references: [
            {
              name: 'WAI-ARIA Reference',
              url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-grabbed',
            },
          ],
          description: {
            kind: 'markdown',
            value:
              '\\[Deprecated in ARIA 1.1\\] Indicates an element\'s "grabbed" [state](https://www.w3.org/TR/wai-aria-1.1/#dfn-state) in a drag-and-drop operation.',
          },
        },
        {
          name: 'aria-haspopup',
          valueSet: 'haspopup',
          references: [
            {
              name: 'WAI-ARIA Reference',
              url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-haspopup',
            },
          ],
          description: {
            kind: 'markdown',
            value:
              'Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element).',
          },
        },
        {
          name: 'aria-hidden',
          valueSet: 'b',
          references: [
            {
              name: 'WAI-ARIA Reference',
              url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-hidden',
            },
          ],
          description: {
            kind: 'markdown',
            value:
              'Indicates whether the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) is exposed to an accessibility API. See related [`aria-disabled`](https://www.w3.org/TR/wai-aria-1.1/#aria-disabled).',
          },
        },
        {
          name: 'aria-invalid',
          valueSet: 'invalid',
          references: [
            {
              name: 'WAI-ARIA Reference',
              url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-invalid',
            },
          ],
          description: {
            kind: 'markdown',
            value:
              'Indicates the entered value does not conform to the format expected by the application. See related [`aria-errormessage`](https://www.w3.org/TR/wai-aria-1.1/#aria-errormessage).',
          },
        },
        {
          name: 'aria-label',
          references: [
            {
              name: 'WAI-ARIA Reference',
              url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-label',
            },
          ],
          description: {
            kind: 'markdown',
            value:
              'Defines a string value that labels the current element. See related [`aria-labelledby`](https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby).',
          },
        },
        {
          name: 'aria-labelledby',
          references: [
            {
              name: 'WAI-ARIA Reference',
              url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby',
            },
          ],
          description: {
            kind: 'markdown',
            value:
              'Identifies the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) (or elements) that labels the current element. See related [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby).',
          },
        },
        {
          name: 'aria-level',
          references: [
            {
              name: 'WAI-ARIA Reference',
              url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-level',
            },
          ],
          description: {
            kind: 'markdown',
            value:
              'Defines the hierarchical level of an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) within a structure.',
          },
        },
        {
          name: 'aria-live',
          valueSet: 'live',
          references: [
            {
              name: 'WAI-ARIA Reference',
              url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-live',
            },
          ],
          description: {
            kind: 'markdown',
            value:
              'Indicates that an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) will be updated, and describes the types of updates the [user agents](https://www.w3.org/TR/wai-aria-1.1/#dfn-user-agent), [assistive technologies](https://www.w3.org/TR/wai-aria-1.1/#dfn-assistive-technology), and user can expect from the [live region](https://www.w3.org/TR/wai-aria-1.1/#dfn-live-region).',
          },
        },
        {
          name: 'aria-modal',
          valueSet: 'b',
          references: [
            {
              name: 'WAI-ARIA Reference',
              url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-modal',
            },
          ],
          description: {
            kind: 'markdown',
            value:
              'Indicates whether an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) is modal when displayed.',
          },
        },
        {
          name: 'aria-multiline',
          valueSet: 'b',
          references: [
            {
              name: 'WAI-ARIA Reference',
              url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-multiline',
            },
          ],
          description: {
            kind: 'markdown',
            value:
              'Indicates whether a text box accepts multiple lines of input or only a single line.',
          },
        },
        {
          name: 'aria-multiselectable',
          valueSet: 'b',
          references: [
            {
              name: 'WAI-ARIA Reference',
              url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-multiselectable',
            },
          ],
          description: {
            kind: 'markdown',
            value:
              'Indicates that the user may select more than one item from the current selectable descendants.',
          },
        },
        {
          name: 'aria-orientation',
          valueSet: 'orientation',
          references: [
            {
              name: 'WAI-ARIA Reference',
              url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-orientation',
            },
          ],
          description: {
            kind: 'markdown',
            value:
              "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.",
          },
        },
        {
          name: 'aria-owns',
          references: [
            {
              name: 'WAI-ARIA Reference',
              url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-owns',
            },
          ],
          description: {
            kind: 'markdown',
            value:
              'Identifies an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) (or elements) in order to define a visual, functional, or contextual parent/child [relationship](https://www.w3.org/TR/wai-aria-1.1/#dfn-relationship) between DOM elements where the DOM hierarchy cannot be used to represent the relationship. See related [`aria-controls`](https://www.w3.org/TR/wai-aria-1.1/#aria-controls).',
          },
        },
        {
          name: 'aria-placeholder',
          references: [
            {
              name: 'WAI-ARIA Reference',
              url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-placeholder',
            },
          ],
          description: {
            kind: 'markdown',
            value:
              'Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value. A hint could be a sample value or a brief description of the expected format.',
          },
        },
        {
          name: 'aria-posinset',
          references: [
            {
              name: 'WAI-ARIA Reference',
              url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-posinset',
            },
          ],
          description: {
            kind: 'markdown',
            value:
              "Defines an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element)'s number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. See related [`aria-setsize`](https://www.w3.org/TR/wai-aria-1.1/#aria-setsize).",
          },
        },
        {
          name: 'aria-pressed',
          valueSet: 'tristate',
          references: [
            {
              name: 'WAI-ARIA Reference',
              url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-pressed',
            },
          ],
          description: {
            kind: 'markdown',
            value:
              'Indicates the current "pressed" [state](https://www.w3.org/TR/wai-aria-1.1/#dfn-state) of toggle buttons. See related [`aria-checked`](https://www.w3.org/TR/wai-aria-1.1/#aria-checked) and [`aria-selected`](https://www.w3.org/TR/wai-aria-1.1/#aria-selected).',
          },
        },
        {
          name: 'aria-readonly',
          valueSet: 'b',
          references: [
            {
              name: 'WAI-ARIA Reference',
              url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-readonly',
            },
          ],
          description: {
            kind: 'markdown',
            value:
              'Indicates that the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) is not editable, but is otherwise [operable](https://www.w3.org/TR/wai-aria-1.1/#dfn-operable). See related [`aria-disabled`](https://www.w3.org/TR/wai-aria-1.1/#aria-disabled).',
          },
        },
        {
          name: 'aria-relevant',
          valueSet: 'relevant',
          references: [
            {
              name: 'WAI-ARIA Reference',
              url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-relevant',
            },
          ],
          description: {
            kind: 'markdown',
            value:
              'Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified. See related [`aria-atomic`](https://www.w3.org/TR/wai-aria-1.1/#aria-atomic).',
          },
        },
        {
          name: 'aria-required',
          valueSet: 'b',
          references: [
            {
              name: 'WAI-ARIA Reference',
              url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-required',
            },
          ],
          description: {
            kind: 'markdown',
            value:
              'Indicates that user input is required on the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) before a form may be submitted.',
          },
        },
        {
          name: 'aria-roledescription',
          references: [
            {
              name: 'WAI-ARIA Reference',
              url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-roledescription',
            },
          ],
          description: {
            kind: 'markdown',
            value:
              'Defines a human-readable, author-localized description for the [role](https://www.w3.org/TR/wai-aria-1.1/#dfn-role) of an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element).',
          },
        },
        {
          name: 'aria-rowcount',
          references: [
            {
              name: 'WAI-ARIA Reference',
              url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-rowcount',
            },
          ],
          description: {
            kind: 'markdown',
            value:
              'Defines the total number of rows in a [`table`](https://www.w3.org/TR/wai-aria-1.1/#table), [`grid`](https://www.w3.org/TR/wai-aria-1.1/#grid), or [`treegrid`](https://www.w3.org/TR/wai-aria-1.1/#treegrid). See related [`aria-rowindex`](https://www.w3.org/TR/wai-aria-1.1/#aria-rowindex).',
          },
        },
        {
          name: 'aria-rowindex',
          references: [
            {
              name: 'WAI-ARIA Reference',
              url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-rowindex',
            },
          ],
          description: {
            kind: 'markdown',
            value:
              "Defines an [element's](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) row index or position with respect to the total number of rows within a [`table`](https://www.w3.org/TR/wai-aria-1.1/#table), [`grid`](https://www.w3.org/TR/wai-aria-1.1/#grid), or [`treegrid`](https://www.w3.org/TR/wai-aria-1.1/#treegrid). See related [`aria-rowcount`](https://www.w3.org/TR/wai-aria-1.1/#aria-rowcount) and [`aria-rowspan`](https://www.w3.org/TR/wai-aria-1.1/#aria-rowspan).",
          },
        },
        {
          name: 'aria-rowspan',
          references: [
            {
              name: 'WAI-ARIA Reference',
              url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-rowspan',
            },
          ],
          description: {
            kind: 'markdown',
            value:
              'Defines the number of rows spanned by a cell or gridcell within a [`table`](https://www.w3.org/TR/wai-aria-1.1/#table), [`grid`](https://www.w3.org/TR/wai-aria-1.1/#grid), or [`treegrid`](https://www.w3.org/TR/wai-aria-1.1/#treegrid). See related [`aria-rowindex`](https://www.w3.org/TR/wai-aria-1.1/#aria-rowindex) and [`aria-colspan`](https://www.w3.org/TR/wai-aria-1.1/#aria-colspan).',
          },
        },
        {
          name: 'aria-selected',
          valueSet: 'u',
          references: [
            {
              name: 'WAI-ARIA Reference',
              url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-selected',
            },
          ],
          description: {
            kind: 'markdown',
            value:
              'Indicates the current "selected" [state](https://www.w3.org/TR/wai-aria-1.1/#dfn-state) of various [widgets](https://www.w3.org/TR/wai-aria-1.1/#dfn-widget). See related [`aria-checked`](https://www.w3.org/TR/wai-aria-1.1/#aria-checked) and [`aria-pressed`](https://www.w3.org/TR/wai-aria-1.1/#aria-pressed).',
          },
        },
        {
          name: 'aria-setsize',
          references: [
            {
              name: 'WAI-ARIA Reference',
              url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-setsize',
            },
          ],
          description: {
            kind: 'markdown',
            value:
              'Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. See related [`aria-posinset`](https://www.w3.org/TR/wai-aria-1.1/#aria-posinset).',
          },
        },
        {
          name: 'aria-sort',
          valueSet: 'sort',
          references: [
            {
              name: 'WAI-ARIA Reference',
              url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-sort',
            },
          ],
          description: {
            kind: 'markdown',
            value:
              'Indicates if items in a table or grid are sorted in ascending or descending order.',
          },
        },
        {
          name: 'aria-valuemax',
          references: [
            {
              name: 'WAI-ARIA Reference',
              url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-valuemax',
            },
          ],
          description: {
            kind: 'markdown',
            value:
              'Defines the maximum allowed value for a range [widget](https://www.w3.org/TR/wai-aria-1.1/#dfn-widget).',
          },
        },
        {
          name: 'aria-valuemin',
          references: [
            {
              name: 'WAI-ARIA Reference',
              url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-valuemin',
            },
          ],
          description: {
            kind: 'markdown',
            value:
              'Defines the minimum allowed value for a range [widget](https://www.w3.org/TR/wai-aria-1.1/#dfn-widget).',
          },
        },
        {
          name: 'aria-valuenow',
          references: [
            {
              name: 'WAI-ARIA Reference',
              url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-valuenow',
            },
          ],
          description: {
            kind: 'markdown',
            value:
              'Defines the current value for a range [widget](https://www.w3.org/TR/wai-aria-1.1/#dfn-widget). See related [`aria-valuetext`](https://www.w3.org/TR/wai-aria-1.1/#aria-valuetext).',
          },
        },
        {
          name: 'aria-valuetext',
          references: [
            {
              name: 'WAI-ARIA Reference',
              url: 'https://www.w3.org/TR/wai-aria-1.1/#aria-valuetext',
            },
          ],
          description: {
            kind: 'markdown',
            value:
              'Defines the human readable text alternative of [`aria-valuenow`](https://www.w3.org/TR/wai-aria-1.1/#aria-valuenow) for a range [widget](https://www.w3.org/TR/wai-aria-1.1/#dfn-widget).',
          },
        },
        {
          name: 'aria-details',
          description: {
            kind: 'markdown',
            value:
              'Identifies the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) that provides a detailed, extended description for the [object](https://www.w3.org/TR/wai-aria-1.1/#dfn-object). See related [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby).',
          },
        },
        {
          name: 'aria-keyshortcuts',
          description: {
            kind: 'markdown',
            value:
              'Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.',
          },
        },
      ],
      valueSets: [
        { name: 'b', values: [{ name: 'true' }, { name: 'false' }] },
        {
          name: 'u',
          values: [{ name: 'true' }, { name: 'false' }, { name: 'undefined' }],
        },
        { name: 'o', values: [{ name: 'on' }, { name: 'off' }] },
        { name: 'y', values: [{ name: 'yes' }, { name: 'no' }] },
        { name: 'w', values: [{ name: 'soft' }, { name: 'hard' }] },
        {
          name: 'd',
          values: [{ name: 'ltr' }, { name: 'rtl' }, { name: 'auto' }],
        },
        {
          name: 'm',
          values: [
            {
              name: 'get',
              description: {
                kind: 'markdown',
                value:
                  "Corresponds to the HTTP [GET method](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3); form data are appended to the `action` attribute URI with a '?' as separator, and the resulting URI is sent to the server. Use this method when the form has no side-effects and contains only ASCII characters.",
              },
            },
            {
              name: 'post',
              description: {
                kind: 'markdown',
                value:
                  'Corresponds to the HTTP [POST method](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5); form data are included in the body of the form and sent to the server.',
              },
            },
            {
              name: 'dialog',
              description: {
                kind: 'markdown',
                value:
                  'Use when the form is inside a [`<dialog>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) element to close the dialog when submitted.',
              },
            },
          ],
        },
        { name: 'fm', values: [{ name: 'get' }, { name: 'post' }] },
        {
          name: 's',
          values: [
            { name: 'row' },
            { name: 'col' },
            { name: 'rowgroup' },
            { name: 'colgroup' },
          ],
        },
        {
          name: 't',
          values: [
            { name: 'hidden' },
            { name: 'text' },
            { name: 'search' },
            { name: 'tel' },
            { name: 'url' },
            { name: 'email' },
            { name: 'password' },
            { name: 'datetime' },
            { name: 'date' },
            { name: 'month' },
            { name: 'week' },
            { name: 'time' },
            { name: 'datetime-local' },
            { name: 'number' },
            { name: 'range' },
            { name: 'color' },
            { name: 'checkbox' },
            { name: 'radio' },
            { name: 'file' },
            { name: 'submit' },
            { name: 'image' },
            { name: 'reset' },
            { name: 'button' },
          ],
        },
        {
          name: 'im',
          values: [
            { name: 'verbatim' },
            { name: 'latin' },
            { name: 'latin-name' },
            { name: 'latin-prose' },
            { name: 'full-width-latin' },
            { name: 'kana' },
            { name: 'kana-name' },
            { name: 'katakana' },
            { name: 'numeric' },
            { name: 'tel' },
            { name: 'email' },
            { name: 'url' },
          ],
        },
        {
          name: 'bt',
          values: [
            { name: 'button' },
            { name: 'submit' },
            { name: 'reset' },
            { name: 'menu' },
          ],
        },
        {
          name: 'lt',
          values: [
            { name: '1' },
            { name: 'a' },
            { name: 'A' },
            { name: 'i' },
            { name: 'I' },
          ],
        },
        { name: 'mt', values: [{ name: 'context' }, { name: 'toolbar' }] },
        {
          name: 'mit',
          values: [
            { name: 'command' },
            { name: 'checkbox' },
            { name: 'radio' },
          ],
        },
        {
          name: 'et',
          values: [
            { name: 'application/x-www-form-urlencoded' },
            { name: 'multipart/form-data' },
            { name: 'text/plain' },
          ],
        },
        {
          name: 'tk',
          values: [
            { name: 'subtitles' },
            { name: 'captions' },
            { name: 'descriptions' },
            { name: 'chapters' },
            { name: 'metadata' },
          ],
        },
        {
          name: 'pl',
          values: [{ name: 'none' }, { name: 'metadata' }, { name: 'auto' }],
        },
        {
          name: 'sh',
          values: [
            { name: 'circle' },
            { name: 'default' },
            { name: 'poly' },
            { name: 'rect' },
          ],
        },
        {
          name: 'xo',
          values: [{ name: 'anonymous' }, { name: 'use-credentials' }],
        },
        {
          name: 'sb',
          values: [
            { name: 'allow-forms' },
            { name: 'allow-modals' },
            { name: 'allow-pointer-lock' },
            { name: 'allow-popups' },
            { name: 'allow-popups-to-escape-sandbox' },
            { name: 'allow-same-origin' },
            { name: 'allow-scripts' },
            { name: 'allow-top-navigation' },
          ],
        },
        {
          name: 'tristate',
          values: [
            { name: 'true' },
            { name: 'false' },
            { name: 'mixed' },
            { name: 'undefined' },
          ],
        },
        {
          name: 'inputautocomplete',
          values: [
            { name: 'additional-name' },
            { name: 'address-level1' },
            { name: 'address-level2' },
            { name: 'address-level3' },
            { name: 'address-level4' },
            { name: 'address-line1' },
            { name: 'address-line2' },
            { name: 'address-line3' },
            { name: 'bday' },
            { name: 'bday-year' },
            { name: 'bday-day' },
            { name: 'bday-month' },
            { name: 'billing' },
            { name: 'cc-additional-name' },
            { name: 'cc-csc' },
            { name: 'cc-exp' },
            { name: 'cc-exp-month' },
            { name: 'cc-exp-year' },
            { name: 'cc-family-name' },
            { name: 'cc-given-name' },
            { name: 'cc-name' },
            { name: 'cc-number' },
            { name: 'cc-type' },
            { name: 'country' },
            { name: 'country-name' },
            { name: 'current-password' },
            { name: 'email' },
            { name: 'family-name' },
            { name: 'fax' },
            { name: 'given-name' },
            { name: 'home' },
            { name: 'honorific-prefix' },
            { name: 'honorific-suffix' },
            { name: 'impp' },
            { name: 'language' },
            { name: 'mobile' },
            { name: 'name' },
            { name: 'new-password' },
            { name: 'nickname' },
            { name: 'organization' },
            { name: 'organization-title' },
            { name: 'pager' },
            { name: 'photo' },
            { name: 'postal-code' },
            { name: 'sex' },
            { name: 'shipping' },
            { name: 'street-address' },
            { name: 'tel-area-code' },
            { name: 'tel' },
            { name: 'tel-country-code' },
            { name: 'tel-extension' },
            { name: 'tel-local' },
            { name: 'tel-local-prefix' },
            { name: 'tel-local-suffix' },
            { name: 'tel-national' },
            { name: 'transaction-amount' },
            { name: 'transaction-currency' },
            { name: 'url' },
            { name: 'username' },
            { name: 'work' },
          ],
        },
        {
          name: 'autocomplete',
          values: [
            { name: 'inline' },
            { name: 'list' },
            { name: 'both' },
            { name: 'none' },
          ],
        },
        {
          name: 'current',
          values: [
            { name: 'page' },
            { name: 'step' },
            { name: 'location' },
            { name: 'date' },
            { name: 'time' },
            { name: 'true' },
            { name: 'false' },
          ],
        },
        {
          name: 'dropeffect',
          values: [
            { name: 'copy' },
            { name: 'move' },
            { name: 'link' },
            { name: 'execute' },
            { name: 'popup' },
            { name: 'none' },
          ],
        },
        {
          name: 'invalid',
          values: [
            { name: 'grammar' },
            { name: 'false' },
            { name: 'spelling' },
            { name: 'true' },
          ],
        },
        {
          name: 'live',
          values: [{ name: 'off' }, { name: 'polite' }, { name: 'assertive' }],
        },
        {
          name: 'orientation',
          values: [
            { name: 'vertical' },
            { name: 'horizontal' },
            { name: 'undefined' },
          ],
        },
        {
          name: 'relevant',
          values: [
            { name: 'additions' },
            { name: 'removals' },
            { name: 'text' },
            { name: 'all' },
            { name: 'additions text' },
          ],
        },
        {
          name: 'sort',
          values: [
            { name: 'ascending' },
            { name: 'descending' },
            { name: 'none' },
            { name: 'other' },
          ],
        },
        {
          name: 'roles',
          values: [
            { name: 'alert' },
            { name: 'alertdialog' },
            { name: 'button' },
            { name: 'checkbox' },
            { name: 'dialog' },
            { name: 'gridcell' },
            { name: 'link' },
            { name: 'log' },
            { name: 'marquee' },
            { name: 'menuitem' },
            { name: 'menuitemcheckbox' },
            { name: 'menuitemradio' },
            { name: 'option' },
            { name: 'progressbar' },
            { name: 'radio' },
            { name: 'scrollbar' },
            { name: 'searchbox' },
            { name: 'slider' },
            { name: 'spinbutton' },
            { name: 'status' },
            { name: 'switch' },
            { name: 'tab' },
            { name: 'tabpanel' },
            { name: 'textbox' },
            { name: 'timer' },
            { name: 'tooltip' },
            { name: 'treeitem' },
            { name: 'combobox' },
            { name: 'grid' },
            { name: 'listbox' },
            { name: 'menu' },
            { name: 'menubar' },
            { name: 'radiogroup' },
            { name: 'tablist' },
            { name: 'tree' },
            { name: 'treegrid' },
            { name: 'application' },
            { name: 'article' },
            { name: 'cell' },
            { name: 'columnheader' },
            { name: 'definition' },
            { name: 'directory' },
            { name: 'document' },
            { name: 'feed' },
            { name: 'figure' },
            { name: 'group' },
            { name: 'heading' },
            { name: 'img' },
            { name: 'list' },
            { name: 'listitem' },
            { name: 'math' },
            { name: 'none' },
            { name: 'note' },
            { name: 'presentation' },
            { name: 'region' },
            { name: 'row' },
            { name: 'rowgroup' },
            { name: 'rowheader' },
            { name: 'separator' },
            { name: 'table' },
            { name: 'term' },
            { name: 'text' },
            { name: 'toolbar' },
            { name: 'banner' },
            { name: 'complementary' },
            { name: 'contentinfo' },
            { name: 'form' },
            { name: 'main' },
            { name: 'navigation' },
            { name: 'region' },
            { name: 'search' },
            { name: 'doc-abstract' },
            { name: 'doc-acknowledgments' },
            { name: 'doc-afterword' },
            { name: 'doc-appendix' },
            { name: 'doc-backlink' },
            { name: 'doc-biblioentry' },
            { name: 'doc-bibliography' },
            { name: 'doc-biblioref' },
            { name: 'doc-chapter' },
            { name: 'doc-colophon' },
            { name: 'doc-conclusion' },
            { name: 'doc-cover' },
            { name: 'doc-credit' },
            { name: 'doc-credits' },
            { name: 'doc-dedication' },
            { name: 'doc-endnote' },
            { name: 'doc-endnotes' },
            { name: 'doc-epigraph' },
            { name: 'doc-epilogue' },
            { name: 'doc-errata' },
            { name: 'doc-example' },
            { name: 'doc-footnote' },
            { name: 'doc-foreword' },
            { name: 'doc-glossary' },
            { name: 'doc-glossref' },
            { name: 'doc-index' },
            { name: 'doc-introduction' },
            { name: 'doc-noteref' },
            { name: 'doc-notice' },
            { name: 'doc-pagebreak' },
            { name: 'doc-pagelist' },
            { name: 'doc-part' },
            { name: 'doc-preface' },
            { name: 'doc-prologue' },
            { name: 'doc-pullquote' },
            { name: 'doc-qna' },
            { name: 'doc-subtitle' },
            { name: 'doc-tip' },
            { name: 'doc-toc' },
          ],
        },
        {
          name: 'metanames',
          values: [
            { name: 'application-name' },
            { name: 'author' },
            { name: 'description' },
            { name: 'format-detection' },
            { name: 'generator' },
            { name: 'keywords' },
            { name: 'publisher' },
            { name: 'referrer' },
            { name: 'robots' },
            { name: 'theme-color' },
            { name: 'viewport' },
          ],
        },
        {
          name: 'haspopup',
          values: [
            {
              name: 'false',
              description: {
                kind: 'markdown',
                value: '(default) Indicates the element does not have a popup.',
              },
            },
            {
              name: 'true',
              description: {
                kind: 'markdown',
                value: 'Indicates the popup is a menu.',
              },
            },
            {
              name: 'menu',
              description: {
                kind: 'markdown',
                value: 'Indicates the popup is a menu.',
              },
            },
            {
              name: 'listbox',
              description: {
                kind: 'markdown',
                value: 'Indicates the popup is a listbox.',
              },
            },
            {
              name: 'tree',
              description: {
                kind: 'markdown',
                value: 'Indicates the popup is a tree.',
              },
            },
            {
              name: 'grid',
              description: {
                kind: 'markdown',
                value: 'Indicates the popup is a grid.',
              },
            },
            {
              name: 'dialog',
              description: {
                kind: 'markdown',
                value: 'Indicates the popup is a dialog.',
              },
            },
          ],
        },
      ],
    },
    Su = (function () {
      function e(t) {
        (this.dataProviders = []),
          this.setDataProviders(
            !1 !== t.useDefaultDataProvider,
            t.customDataProviders || []
          );
      }
      return (
        (e.prototype.setDataProviders = function (t, n) {
          var r;
          (this.dataProviders = []),
            t && this.dataProviders.push(new qi('html5', Au)),
            (r = this.dataProviders).push.apply(r, n);
        }),
        (e.prototype.getDataProviders = function () {
          return this.dataProviders;
        }),
        e
      );
    })(),
    xu = {};
  function Eu(e, t) {
    return new qi(e, t);
  }
  var Mu = class {
    _ctx;
    _languageService;
    _languageSettings;
    _languageId;
    constructor(e, t) {
      (this._ctx = e),
        (this._languageSettings = t.languageSettings),
        (this._languageId = t.languageId);
      const n = this._languageSettings.data,
        r = n?.useDefaultDataProvider,
        i = [];
      if (n?.dataProviders)
        for (const a in n.dataProviders) i.push(Eu(a, n.dataProviders[a]));
      this._languageService = (function Lu(e) {
        void 0 === e && (e = xu);
        var t = new Su(e),
          n = new Kl(e, t),
          r = new Ql(e, t);
        return {
          setDataProviders: t.setDataProviders.bind(t),
          createScanner: me,
          parseHTMLDocument: function (i) {
            return Bi(i.getText());
          },
          doComplete: r.doComplete.bind(r),
          doComplete2: r.doComplete2.bind(r),
          setCompletionParticipants: r.setCompletionParticipants.bind(r),
          doHover: n.doHover.bind(n),
          format: iu,
          findDocumentHighlights: mu,
          findDocumentLinks: fu,
          findDocumentSymbols: pu,
          getFoldingRanges: yu,
          getSelectionRanges: Tu,
          doQuoteComplete: r.doQuoteComplete.bind(r),
          doTagComplete: r.doTagComplete.bind(r),
          doRename: bu,
          findMatchingTagPosition: _u,
          findOnTypeRenameRanges: ta,
          findLinkedEditingRanges: ta,
        };
      })({ useDefaultDataProvider: r, customDataProviders: i });
    }
    doComplete(e, t) {
      var n = this;
      return Se(function* () {
        let r = n._getTextDocument(e);
        if (!r) return null;
        let i = n._languageService.parseHTMLDocument(r);
        return Promise.resolve(
          n._languageService.doComplete(
            r,
            t,
            i,
            n._languageSettings && n._languageSettings.suggest
          )
        );
      })();
    }
    format(e, t, n) {
      var r = this;
      return Se(function* () {
        let i = r._getTextDocument(e);
        if (!i) return [];
        let a = { ...r._languageSettings.format, ...n },
          o = r._languageService.format(i, t, a);
        return Promise.resolve(o);
      })();
    }
    doHover(e, t) {
      var n = this;
      return Se(function* () {
        let r = n._getTextDocument(e);
        if (!r) return null;
        let i = n._languageService.parseHTMLDocument(r),
          a = n._languageService.doHover(r, t, i);
        return Promise.resolve(a);
      })();
    }
    findDocumentHighlights(e, t) {
      var n = this;
      return Se(function* () {
        let r = n._getTextDocument(e);
        if (!r) return [];
        let i = n._languageService.parseHTMLDocument(r),
          a = n._languageService.findDocumentHighlights(r, t, i);
        return Promise.resolve(a);
      })();
    }
    findDocumentLinks(e) {
      var t = this;
      return Se(function* () {
        let n = t._getTextDocument(e);
        if (!n) return [];
        let r = t._languageService.findDocumentLinks(n, null);
        return Promise.resolve(r);
      })();
    }
    findDocumentSymbols(e) {
      var t = this;
      return Se(function* () {
        let n = t._getTextDocument(e);
        if (!n) return [];
        let r = t._languageService.parseHTMLDocument(n),
          i = t._languageService.findDocumentSymbols(n, r);
        return Promise.resolve(i);
      })();
    }
    getFoldingRanges(e, t) {
      var n = this;
      return Se(function* () {
        let r = n._getTextDocument(e);
        if (!r) return [];
        let i = n._languageService.getFoldingRanges(r, t);
        return Promise.resolve(i);
      })();
    }
    getSelectionRanges(e, t) {
      var n = this;
      return Se(function* () {
        let r = n._getTextDocument(e);
        if (!r) return [];
        let i = n._languageService.getSelectionRanges(r, t);
        return Promise.resolve(i);
      })();
    }
    doRename(e, t, n) {
      var r = this;
      return Se(function* () {
        let i = r._getTextDocument(e);
        if (!i) return null;
        let a = r._languageService.parseHTMLDocument(i),
          o = r._languageService.doRename(i, t, n, a);
        return Promise.resolve(o);
      })();
    }
    _getTextDocument(e) {
      let t = this._ctx.getMirrorModels();
      for (let n of t)
        if (n.uri.toString() === e)
          return Bn.create(e, this._languageId, n.version, n.getValue());
      return null;
    }
  };
  self.onmessage = () => {
    oi((e, t) => new Mu(e, t));
  };
})();
