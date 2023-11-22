(() => {
  'use strict';
  const kt = new (class $1 {
    constructor() {
      (this.listeners = []),
        (this.unexpectedErrorHandler = function (t) {
          setTimeout(() => {
            throw t.stack
              ? oe.isErrorNoTelemetry(t)
                ? new oe(t.message + '\n\n' + t.stack)
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
  function Ft(e) {
    if (e instanceof Error) {
      const { name: t, message: n } = e;
      return {
        $isError: !0,
        name: t,
        message: n,
        stack: e.stacktrace || e.stack,
        noTelemetry: oe.isErrorNoTelemetry(e),
      };
    }
    return e;
  }
  const xe = 'Canceled';
  function Et(e) {
    return (
      e instanceof j1 ||
      (e instanceof Error && e.name === xe && e.message === xe)
    );
  }
  class j1 extends Error {
    constructor() {
      super(xe), (this.name = this.message);
    }
  }
  class oe extends Error {
    constructor(t) {
      super(t), (this.name = 'ErrorNoTelemetry');
    }
    static fromError(t) {
      if (t instanceof oe) return t;
      const n = new oe();
      return (n.message = t.message), (n.stack = t.stack), n;
    }
    static isErrorNoTelemetry(t) {
      return 'ErrorNoTelemetry' === t.name;
    }
  }
  function Q1(e) {
    const t = this;
    let s,
      n = !1;
    return function () {
      return n || ((n = !0), (s = e.apply(t, arguments))), s;
    };
  }
  var ke;
  !(function (e) {
    e.is = function t(v) {
      return (
        v && 'object' == typeof v && 'function' == typeof v[Symbol.iterator]
      );
    };
    const n = Object.freeze([]);
    function k(v, S = Number.POSITIVE_INFINITY) {
      const x = [];
      if (0 === S) return [x, v];
      const _ = v[Symbol.iterator]();
      for (let m = 0; m < S; m++) {
        const g = _.next();
        if (g.done) return [x, e.empty()];
        x.push(g.value);
      }
      return [x, { [Symbol.iterator]: () => _ }];
    }
    (e.empty = function s() {
      return n;
    }),
      (e.single = function* i(v) {
        yield v;
      }),
      (e.from = function a(v) {
        return v || n;
      }),
      (e.isEmpty = function o(v) {
        return !v || !0 === v[Symbol.iterator]().next().done;
      }),
      (e.first = function l(v) {
        return v[Symbol.iterator]().next().value;
      }),
      (e.some = function c(v, S) {
        for (const x of v) if (S(x)) return !0;
        return !1;
      }),
      (e.find = function u(v, S) {
        for (const x of v) if (S(x)) return x;
      }),
      (e.filter = function* h(v, S) {
        for (const x of v) S(x) && (yield x);
      }),
      (e.map = function* f(v, S) {
        let x = 0;
        for (const _ of v) yield S(_, x++);
      }),
      (e.concat = function* d(...v) {
        for (const S of v) for (const x of S) yield x;
      }),
      (e.concatNested = function* b(v) {
        for (const S of v) for (const x of S) yield x;
      }),
      (e.reduce = function L(v, S, x) {
        let _ = x;
        for (const m of v) _ = S(_, m);
        return _;
      }),
      (e.forEach = function N(v, S) {
        let x = 0;
        for (const _ of v) S(_, x++);
      }),
      (e.slice = function* y(v, S, x = v.length) {
        for (
          S < 0 && (S += v.length),
            x < 0 ? (x += v.length) : x > v.length && (x = v.length);
          S < x;
          S++
        )
          yield v[S];
      }),
      (e.consume = k),
      (e.collect = function F(v) {
        return k(v)[0];
      }),
      (e.equals = function A(v, S, x = (_, m) => _ === m) {
        const _ = v[Symbol.iterator](),
          m = S[Symbol.iterator]();
        for (;;) {
          const g = _.next(),
            C = m.next();
          if (g.done !== C.done) return !1;
          if (g.done) return !0;
          if (!x(g.value, C.value)) return !1;
        }
      });
  })(ke || (ke = {}));
  let W = null;
  function me(e) {
    return W?.trackDisposable(e), e;
  }
  function ge(e) {
    W?.markAsDisposed(e);
  }
  function Fe(e, t) {
    W?.setParent(e, t);
  }
  class X1 extends Error {
    constructor(t) {
      super(
        `Encountered errors while disposing of store. Errors: [${t.join(', ')}]`
      ),
        (this.errors = t);
    }
  }
  function Pt(e) {
    if (ke.is(e)) {
      const t = [];
      for (const n of e)
        if (n)
          try {
            n.dispose();
          } catch (s) {
            t.push(s);
          }
      if (1 === t.length) throw t[0];
      if (t.length > 1) throw new X1(t);
      return Array.isArray(e) ? [] : e;
    }
    if (e) return e.dispose(), e;
  }
  function Ee(e) {
    const t = me({
      dispose: Q1(() => {
        ge(t), e();
      }),
    });
    return t;
  }
  let De = (() => {
    class e {
      constructor() {
        (this._toDispose = new Set()), (this._isDisposed = !1), me(this);
      }
      dispose() {
        this._isDisposed || (ge(this), (this._isDisposed = !0), this.clear());
      }
      get isDisposed() {
        return this._isDisposed;
      }
      clear() {
        try {
          Pt(this._toDispose.values());
        } finally {
          this._toDispose.clear();
        }
      }
      add(n) {
        if (!n) return n;
        if (n === this)
          throw new Error('Cannot register a disposable on itself!');
        return (
          Fe(n, this),
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
  class be {
    constructor() {
      (this._store = new De()), me(this), Fe(this._store, this);
    }
    dispose() {
      ge(this), this._store.dispose();
    }
    _register(t) {
      if (t === this)
        throw new Error('Cannot register a disposable on itself!');
      return this._store.add(t);
    }
  }
  be.None = Object.freeze({ dispose() {} });
  class en {
    constructor() {
      (this.dispose = () => {}),
        (this.unset = () => {}),
        (this.isset = () => !1),
        me(this);
    }
    set(t) {
      let n = t;
      return (
        (this.unset = () => (n = void 0)),
        (this.isset = () => void 0 !== n),
        (this.dispose = () => {
          n && (n(), (n = void 0), ge(this));
        }),
        this
      );
    }
  }
  class D {
    constructor(t) {
      (this.element = t), (this.next = D.Undefined), (this.prev = D.Undefined);
    }
  }
  D.Undefined = new D(void 0);
  class Pe {
    constructor() {
      (this._first = D.Undefined), (this._last = D.Undefined), (this._size = 0);
    }
    get size() {
      return this._size;
    }
    isEmpty() {
      return this._first === D.Undefined;
    }
    clear() {
      let t = this._first;
      for (; t !== D.Undefined; ) {
        const n = t.next;
        (t.prev = D.Undefined), (t.next = D.Undefined), (t = n);
      }
      (this._first = D.Undefined), (this._last = D.Undefined), (this._size = 0);
    }
    unshift(t) {
      return this._insert(t, !1);
    }
    push(t) {
      return this._insert(t, !0);
    }
    _insert(t, n) {
      const s = new D(t);
      if (this._first === D.Undefined) (this._first = s), (this._last = s);
      else if (n) {
        const a = this._last;
        (this._last = s), (s.prev = a), (a.next = s);
      } else {
        const a = this._first;
        (this._first = s), (s.next = a), (a.prev = s);
      }
      this._size += 1;
      let i = !1;
      return () => {
        i || ((i = !0), this._remove(s));
      };
    }
    shift() {
      if (this._first !== D.Undefined) {
        const t = this._first.element;
        return this._remove(this._first), t;
      }
    }
    pop() {
      if (this._last !== D.Undefined) {
        const t = this._last.element;
        return this._remove(this._last), t;
      }
    }
    _remove(t) {
      if (t.prev !== D.Undefined && t.next !== D.Undefined) {
        const n = t.prev;
        (n.next = t.next), (t.next.prev = n);
      } else
        t.prev === D.Undefined && t.next === D.Undefined
          ? ((this._first = D.Undefined), (this._last = D.Undefined))
          : t.next === D.Undefined
          ? ((this._last = this._last.prev), (this._last.next = D.Undefined))
          : t.prev === D.Undefined &&
            ((this._first = this._first.next),
            (this._first.prev = D.Undefined));
      this._size -= 1;
    }
    *[Symbol.iterator]() {
      let t = this._first;
      for (; t !== D.Undefined; ) yield t.element, (t = t.next);
    }
  }
  let Bt =
    typeof document < 'u' &&
    document.location &&
    document.location.hash.indexOf('pseudo=true') >= 0;
  var Je;
  let Te,
    J,
    Be = !1,
    Ve = !1,
    Ie = !1,
    rn = !1,
    sn = !1,
    Ut = !1,
    an = !1,
    ln = !1,
    Xe = null,
    un = null;
  const I =
    'object' == typeof self ? self : 'object' == typeof global ? global : {};
  let T;
  typeof I.vscode < 'u' && typeof I.vscode.process < 'u'
    ? (T = I.vscode.process)
    : typeof process < 'u' && (T = process);
  const Wt =
    'string' ==
    typeof (null === (Je = T?.versions) || void 0 === Je
      ? void 0
      : Je.electron);
  if ('object' != typeof navigator || (Wt && 'renderer' === T?.type))
    if ('object' == typeof T) {
      (Be = 'win32' === T.platform),
        (Ve = 'darwin' === T.platform),
        (Ie = 'linux' === T.platform),
        (rn = Ie && !!T.env.SNAP && !!T.env.SNAP_REVISION),
        (an = Wt),
        (ln = !!T.env.CI || !!T.env.BUILD_ARTIFACTSTAGINGDIRECTORY),
        (Te = 'en'),
        (Xe = 'en');
      const e = T.env.VSCODE_NLS_CONFIG;
      if (e)
        try {
          const t = JSON.parse(e);
          (Te = t.locale),
            (Xe = t.availableLanguages['*'] || 'en'),
            (un = t._translationsConfigFile);
        } catch {}
      sn = !0;
    } else console.error('Unable to resolve platform.');
  else
    (J = navigator.userAgent),
      (Be = J.indexOf('Windows') >= 0),
      (Ve = J.indexOf('Macintosh') >= 0),
      (J.indexOf('Macintosh') >= 0 ||
        J.indexOf('iPad') >= 0 ||
        J.indexOf('iPhone') >= 0) &&
        !!navigator.maxTouchPoints &&
        navigator,
      (Ie = J.indexOf('Linux') >= 0),
      !0,
      (Te =
        void (function Tt(e, t, ...n) {
          return (function Vt(e, t) {
            let n;
            return (
              (n =
                0 === t.length
                  ? e
                  : e.replace(/\{(\d+)\}/g, (s, i) => {
                      const o = t[i[0]];
                      let l = s;
                      return (
                        'string' == typeof o
                          ? (l = o)
                          : ('number' == typeof o ||
                              'boolean' == typeof o ||
                              null == o) &&
                            (l = String(o)),
                        l
                      );
                    })),
              Bt && (n = '\uff3b' + n.replace(/[aouei]/g, '$&$&') + '\uff3d'),
              n
            );
          })(t, n);
        })(0, '_') || 'en'),
      (Xe = Te);
  let Ke = 0;
  Ve ? (Ke = 1) : Be ? (Ke = 3) : Ie && (Ke = 2);
  const _e = Be,
    fn = Ve,
    Y = J,
    hn = 'function' == typeof I.postMessage && !I.importScripts;
  (() => {
    if (hn) {
      const e = [];
      I.addEventListener('message', (n) => {
        if (n.data && n.data.vscodeScheduleAsyncWork)
          for (let s = 0, i = e.length; s < i; s++) {
            const a = e[s];
            if (a.id === n.data.vscodeScheduleAsyncWork)
              return e.splice(s, 1), void a.callback();
          }
      });
      let t = 0;
    }
  })();
  const dn = !!(Y && Y.indexOf('Chrome') >= 0),
    mn =
      (Y && Y.indexOf('Firefox'),
      !dn && Y && Y.indexOf('Safari'),
      Y && Y.indexOf('Edg/'),
      Y && Y.indexOf('Android'),
      I.performance && 'function' == typeof I.performance.now);
  class Ue {
    constructor(t) {
      (this._highResolution = mn && t),
        (this._startTime = this._now()),
        (this._stopTime = -1);
    }
    static create(t = !0) {
      return new Ue(t);
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
      return this._highResolution ? I.performance.now() : Date.now();
    }
  }
  var We;
  !(function (e) {
    function n(_) {
      return (m, g = null, C) => {
        let w,
          p = !1;
        return (
          (w = _(
            (E) => {
              if (!p) return w ? w.dispose() : (p = !0), m.call(g, E);
            },
            null,
            C
          )),
          p && w.dispose(),
          w
        );
      };
    }
    function s(_, m, g) {
      return u((C, p = null, w) => _((E) => C.call(p, m(E)), null, w), g);
    }
    function i(_, m, g) {
      return u(
        (C, p = null, w) =>
          _(
            (E) => {
              m(E), C.call(p, E);
            },
            null,
            w
          ),
        g
      );
    }
    function a(_, m, g) {
      return u((C, p = null, w) => _((E) => m(E) && C.call(p, E), null, w), g);
    }
    function c(_, m, g, C) {
      let p = g;
      return s(_, (w) => ((p = m(p, w)), p), C);
    }
    function u(_, m) {
      let g;
      const p = new j({
        onFirstListenerAdd() {
          g = _(p.fire, p);
        },
        onLastListenerRemove() {
          g?.dispose();
        },
      });
      return m?.add(p), p.event;
    }
    function h(_, m, g = 100, C = !1, p, w) {
      let E,
        U,
        je,
        xt = 0;
      const Qe = new j({
        leakWarningThreshold: p,
        onFirstListenerAdd() {
          E = _(($s) => {
            xt++,
              (U = m(U, $s)),
              C && !je && (Qe.fire(U), (U = void 0)),
              clearTimeout(je),
              (je = setTimeout(() => {
                const Gs = U;
                (U = void 0),
                  (je = void 0),
                  (!C || xt > 1) && Qe.fire(Gs),
                  (xt = 0);
              }, g));
          });
        },
        onLastListenerRemove() {
          E.dispose();
        },
      });
      return w?.add(Qe), Qe.event;
    }
    function f(_, m = (C, p) => C === p, g) {
      let p,
        C = !0;
      return a(
        _,
        (w) => {
          const E = C || !m(w, p);
          return (C = !1), (p = w), E;
        },
        g
      );
    }
    (e.None = () => be.None),
      (e.once = n),
      (e.map = s),
      (e.forEach = i),
      (e.filter = a),
      (e.signal = function o(_) {
        return _;
      }),
      (e.any = function l(..._) {
        return (m, g = null, C) =>
          (function K1(...e) {
            const t = Ee(() => Pt(e));
            return (
              (function J1(e, t) {
                if (W) for (const n of e) W.setParent(n, t);
              })(e, t),
              t
            );
          })(..._.map((p) => p((w) => m.call(g, w), null, C)));
      }),
      (e.reduce = c),
      (e.debounce = h),
      (e.latch = f),
      (e.split = function d(_, m, g) {
        return [e.filter(_, m, g), e.filter(_, (C) => !m(C), g)];
      }),
      (e.buffer = function b(_, m = !1, g = []) {
        let C = g.slice(),
          p = _((U) => {
            C ? C.push(U) : E.fire(U);
          });
        const w = () => {
            C?.forEach((U) => E.fire(U)), (C = null);
          },
          E = new j({
            onFirstListenerAdd() {
              p || (p = _((U) => E.fire(U)));
            },
            onFirstListenerDidAdd() {
              C && (m ? setTimeout(w) : w());
            },
            onLastListenerRemove() {
              p && p.dispose(), (p = null);
            },
          });
        return E.event;
      });
    class L {
      constructor(m) {
        (this.event = m), (this.disposables = new De());
      }
      map(m) {
        return new L(s(this.event, m, this.disposables));
      }
      forEach(m) {
        return new L(i(this.event, m, this.disposables));
      }
      filter(m) {
        return new L(a(this.event, m, this.disposables));
      }
      reduce(m, g) {
        return new L(c(this.event, m, g, this.disposables));
      }
      latch() {
        return new L(f(this.event, void 0, this.disposables));
      }
      debounce(m, g = 100, C = !1, p) {
        return new L(h(this.event, m, g, C, p, this.disposables));
      }
      on(m, g, C) {
        return this.event(m, g, C);
      }
      once(m, g, C) {
        return n(this.event)(m, g, C);
      }
      dispose() {
        this.disposables.dispose();
      }
    }
    (e.chain = function N(_) {
      return new L(_);
    }),
      (e.fromNodeEventEmitter = function y(_, m, g = (C) => C) {
        const C = (...U) => E.fire(g(...U)),
          E = new j({
            onFirstListenerAdd: () => _.on(m, C),
            onLastListenerRemove: () => _.removeListener(m, C),
          });
        return E.event;
      }),
      (e.fromDOMEventEmitter = function k(_, m, g = (C) => C) {
        const C = (...U) => E.fire(g(...U)),
          E = new j({
            onFirstListenerAdd: () => _.addEventListener(m, C),
            onLastListenerRemove: () => _.removeEventListener(m, C),
          });
        return E.event;
      }),
      (e.toPromise = function F(_) {
        return new Promise((m) => n(_)(m));
      }),
      (e.runAndSubscribe = function A(_, m) {
        return m(void 0), _((g) => m(g));
      }),
      (e.runAndSubscribeWithStore = function v(_, m) {
        let g = null;
        function C(w) {
          g?.dispose(), (g = new De()), m(w, g);
        }
        C(void 0);
        const p = _((w) => C(w));
        return Ee(() => {
          p.dispose(), g?.dispose();
        });
      });
    class S {
      constructor(m, g) {
        (this.obs = m), (this._counter = 0), (this._hasChanged = !1);
        (this.emitter = new j({
          onFirstListenerAdd: () => {
            m.addObserver(this);
          },
          onLastListenerRemove: () => {
            m.removeObserver(this);
          },
        })),
          g && g.add(this.emitter);
      }
      beginUpdate(m) {
        this._counter++;
      }
      handleChange(m, g) {
        this._hasChanged = !0;
      }
      endUpdate(m) {
        0 == --this._counter &&
          this._hasChanged &&
          ((this._hasChanged = !1), this.emitter.fire(this.obs.get()));
      }
    }
    e.fromObservable = function x(_, m) {
      return new S(_, m).emitter.event;
    };
  })(We || (We = {}));
  let bn = (() => {
    class e {
      constructor(n) {
        (this._listenerCount = 0),
          (this._invocationCount = 0),
          (this._elapsedOverall = 0),
          (this._name = `${n}_${e._idPool++}`);
      }
      start(n) {
        (this._stopWatch = new Ue(!0)), (this._listenerCount = n);
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
  class we {
    constructor(t) {
      this.value = t;
    }
    static create() {
      var t;
      return new we(null !== (t = new Error().stack) && void 0 !== t ? t : '');
    }
    print() {
      console.warn(this.value.split('\n').slice(2).join('\n'));
    }
  }
  class wn {
    constructor(t, n, s) {
      (this.callback = t),
        (this.callbackThis = n),
        (this.stack = s),
        (this.subscription = new en());
    }
    invoke(t) {
      this.callback.call(this.callbackThis, t);
    }
  }
  class j {
    constructor(t) {
      var n, s;
      (this._disposed = !1),
        (this._options = t),
        (this._leakageMon = void 0),
        (this._perfMon =
          null !== (n = this._options) && void 0 !== n && n._profName
            ? new bn(this._options._profName)
            : void 0),
        (this._deliveryQueue =
          null === (s = this._options) || void 0 === s
            ? void 0
            : s.deliveryQueue);
    }
    dispose() {
      var t, n, s, i;
      this._disposed ||
        ((this._disposed = !0),
        this._listeners && this._listeners.clear(),
        null === (t = this._deliveryQueue) || void 0 === t || t.clear(this),
        null ===
          (s =
            null === (n = this._options) || void 0 === n
              ? void 0
              : n.onLastListenerRemove) ||
          void 0 === s ||
          s.call(n),
        null === (i = this._leakageMon) || void 0 === i || i.dispose());
    }
    get event() {
      return (
        this._event ||
          (this._event = (t, n, s) => {
            var i, a, o;
            this._listeners || (this._listeners = new Pe());
            const l = this._listeners.isEmpty();
            let c, u;
            l &&
              null !== (i = this._options) &&
              void 0 !== i &&
              i.onFirstListenerAdd &&
              this._options.onFirstListenerAdd(this),
              this._leakageMon &&
                this._listeners.size >= 30 &&
                ((u = we.create()),
                (c = this._leakageMon.check(u, this._listeners.size + 1)));
            const h = new wn(t, n, u),
              f = this._listeners.push(h);
            l &&
              !(null === (a = this._options) || void 0 === a) &&
              a.onFirstListenerDidAdd &&
              this._options.onFirstListenerDidAdd(this),
              null !== (o = this._options) &&
                void 0 !== o &&
                o.onListenerDidAdd &&
                this._options.onListenerDidAdd(this, t, n);
            const d = h.subscription.set(() => {
              c?.(),
                this._disposed ||
                  (f(),
                  this._options &&
                    this._options.onLastListenerRemove &&
                    ((this._listeners && !this._listeners.isEmpty()) ||
                      this._options.onLastListenerRemove(this)));
            });
            return (
              s instanceof De ? s.add(d) : Array.isArray(s) && s.push(d), d
            );
          }),
        this._event
      );
    }
    fire(t) {
      var n, s;
      if (this._listeners) {
        this._deliveryQueue || (this._deliveryQueue = new pn());
        for (const i of this._listeners) this._deliveryQueue.push(this, i, t);
        null === (n = this._perfMon) ||
          void 0 === n ||
          n.start(this._deliveryQueue.size),
          this._deliveryQueue.deliver(),
          null === (s = this._perfMon) || void 0 === s || s.stop();
      }
    }
  }
  class Cn {
    constructor() {
      this._queue = new Pe();
    }
    get size() {
      return this._queue.size;
    }
    push(t, n, s) {
      this._queue.push(new Ln(t, n, s));
    }
    clear(t) {
      const n = new Pe();
      for (const s of this._queue) s.emitter !== t && n.push(s);
      this._queue = n;
    }
    deliver() {
      for (; this._queue.size > 0; ) {
        const t = this._queue.shift();
        try {
          t.listener.invoke(t.event);
        } catch (n) {
          Et((e = n)) || kt.onUnexpectedError(e);
        }
      }
      var e;
    }
  }
  class pn extends Cn {
    clear(t) {
      this._queue.clear();
    }
  }
  class Ln {
    constructor(t, n, s) {
      (this.emitter = t), (this.listener = n), (this.event = s);
    }
  }
  function tt(e) {
    const t = [];
    for (const n of (function yn(e) {
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
  function Mn(e, t) {
    const n = (i) =>
        function () {
          const a = Array.prototype.slice.call(arguments, 0);
          return t(i, a);
        },
      s = {};
    for (const i of e) s[i] = n(i);
    return s;
  }
  function xn(e, t = 'Unreachable') {
    throw new Error(t);
  }
  class $t {
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
  var Gt;
  function Yt(e) {
    return e >= 65 && e <= 90;
  }
  function Ce(e) {
    return 55296 <= e && e <= 56319;
  }
  function pe(e) {
    return 56320 <= e && e <= 57343;
  }
  function rt(e, t) {
    return t - 56320 + ((e - 55296) << 10) + 65536;
  }
  function Zt(e, t, n) {
    const s = e.charCodeAt(n);
    if (Ce(s) && n + 1 < t) {
      const i = e.charCodeAt(n + 1);
      if (pe(i)) return rt(s, i);
    }
    return s;
  }
  const qn = /^[\t\n\r\x20-\x7E]*$/;
  function Hn(e) {
    return qn.test(e);
  }
  String.fromCharCode(65279);
  class G {
    constructor(t) {
      this.confusableDictionary = t;
    }
    static getInstance(t) {
      return G.cache.get(Array.from(t));
    }
    static getLocales() {
      return G._locales.getValue();
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
  (Gt = G),
    (G.ambiguousCharacterData = new $t(() =>
      JSON.parse(
        '{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,8218,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,8242,96,1370,96,1523,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71922,67,71913,67,65315,67,8557,67,8450,67,8493,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71919,87,71910,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,66293,90,71909,90,65338,90,8484,90,8488,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65297,49,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125],"_default":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"cs":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"es":[8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"fr":[65374,126,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"it":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"ja":[8211,45,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65292,44,65307,59],"ko":[8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"pt-BR":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"ru":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"zh-hans":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41],"zh-hant":[8211,45,65374,126,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65307,59]}'
      )
    )),
    (G.cache = new (class kn {
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
        for (let f = 0; f < u.length; f += 2) h.set(u[f], u[f + 1]);
        return h;
      }
      function s(u, h) {
        if (!u) return h;
        const f = new Map();
        for (const [d, b] of u) h.has(d) && f.set(d, b);
        return f;
      }
      const i = Gt.ambiguousCharacterData.getValue();
      let o,
        a = e.filter((u) => !u.startsWith('_') && u in i);
      0 === a.length && (a = ['_default']);
      for (const u of a) o = s(o, t(i[u]));
      const c = (function n(u, h) {
        const f = new Map(u);
        for (const [d, b] of h) f.set(d, b);
        return f;
      })(t(i._common), o);
      return new G(c);
    })),
    (G._locales = new $t(() =>
      Object.keys(G.ambiguousCharacterData.getValue()).filter(
        (e) => !e.startsWith('_')
      )
    ));
  class X {
    static getRawData() {
      return JSON.parse(
        '[9,10,11,12,13,32,127,160,173,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8203,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12288,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999]'
      );
    }
    static getData() {
      return this._data || (this._data = new Set(X.getRawData())), this._data;
    }
    static isInvisibleCharacter(t) {
      return X.getData().has(t);
    }
    static get codePoints() {
      return X.getData();
    }
  }
  X._data = void 0;
  let ce;
  class jn {
    constructor(t, n, s, i) {
      (this.vsWorker = t),
        (this.req = n),
        (this.method = s),
        (this.args = i),
        (this.type = 0);
    }
  }
  class n1 {
    constructor(t, n, s, i) {
      (this.vsWorker = t),
        (this.seq = n),
        (this.res = s),
        (this.err = i),
        (this.type = 1);
    }
  }
  class Qn {
    constructor(t, n, s, i) {
      (this.vsWorker = t),
        (this.req = n),
        (this.eventName = s),
        (this.arg = i),
        (this.type = 2);
    }
  }
  class Yn {
    constructor(t, n, s) {
      (this.vsWorker = t), (this.req = n), (this.event = s), (this.type = 3);
    }
  }
  class Zn {
    constructor(t, n) {
      (this.vsWorker = t), (this.req = n), (this.type = 4);
    }
  }
  class r1 {
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
      const s = String(++this._lastSentReq);
      return new Promise((i, a) => {
        (this._pendingReplies[s] = { resolve: i, reject: a }),
          this._send(new jn(this._workerId, s, t, n));
      });
    }
    listen(t, n) {
      let s = null;
      const i = new j({
        onFirstListenerAdd: () => {
          (s = String(++this._lastSentReq)),
            this._pendingEmitters.set(s, i),
            this._send(new Qn(this._workerId, s, t, n));
        },
        onLastListenerRemove: () => {
          this._pendingEmitters.delete(s),
            this._send(new Zn(this._workerId, s)),
            (s = null);
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
        let s = t.err;
        return (
          t.err.$isError &&
            ((s = new Error()),
            (s.name = t.err.name),
            (s.message = t.err.message),
            (s.stack = t.err.stack)),
          void n.reject(s)
        );
      }
      n.resolve(t.res);
    }
    _handleRequestMessage(t) {
      const n = t.req;
      this._handler.handleMessage(t.method, t.args).then(
        (i) => {
          this._send(new n1(this._workerId, n, i, void 0));
        },
        (i) => {
          i.detail instanceof Error && (i.detail = Ft(i.detail)),
            this._send(new n1(this._workerId, n, void 0, Ft(i)));
        }
      );
    }
    _handleSubscribeEventMessage(t) {
      const n = t.req,
        s = this._handler.handleEvent(
          t.eventName,
          t.arg
        )((i) => {
          this._send(new Yn(this._workerId, n, i));
        });
      this._pendingEvents.set(n, s);
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
        for (let s = 0; s < t.args.length; s++)
          t.args[s] instanceof ArrayBuffer && n.push(t.args[s]);
      else 1 === t.type && t.res instanceof ArrayBuffer && n.push(t.res);
      this._handler.sendMessage(t, n);
    }
  }
  function it(e) {
    return 'o' === e[0] && 'n' === e[1] && Yt(e.charCodeAt(2));
  }
  function at(e) {
    return /^onDynamic/.test(e) && Yt(e.charCodeAt(9));
  }
  class i1 {
    constructor(t, n) {
      (this._requestHandlerFactory = n),
        (this._requestHandler = null),
        (this._protocol = new r1({
          sendMessage: (s, i) => {
            t(s, i);
          },
          handleMessage: (s, i) => this._handleMessage(s, i),
          handleEvent: (s, i) => this._handleEvent(s, i),
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
      } catch (s) {
        return Promise.reject(s);
      }
    }
    _handleEvent(t, n) {
      if (!this._requestHandler) throw new Error('Missing requestHandler');
      if (at(t)) {
        const s = this._requestHandler[t].call(this._requestHandler, n);
        if ('function' != typeof s)
          throw new Error(`Missing dynamic event ${t} on request handler.`);
        return s;
      }
      if (it(t)) {
        const s = this._requestHandler[t];
        if ('function' != typeof s)
          throw new Error(`Missing event ${t} on request handler.`);
        return s;
      }
      throw new Error(`Malformed event name ${t}`);
    }
    initialize(t, n, s, i) {
      this._protocol.setWorkerId(t);
      const l = (function s1(e, t, n) {
        const s = (o) =>
            function () {
              const l = Array.prototype.slice.call(arguments, 0);
              return t(o, l);
            },
          i = (o) =>
            function (l) {
              return n(o, l);
            },
          a = {};
        for (const o of e) a[o] = at(o) ? i(o) : it(o) ? n(o, void 0) : s(o);
        return a;
      })(
        i,
        (c, u) => this._protocol.sendMessage(c, u),
        (c, u) => this._protocol.listen(c, u)
      );
      return this._requestHandlerFactory
        ? ((this._requestHandler = this._requestHandlerFactory(l)),
          Promise.resolve(tt(this._requestHandler)))
        : (n &&
            (typeof n.baseUrl < 'u' && delete n.baseUrl,
            typeof n.paths < 'u' &&
              typeof n.paths.vs < 'u' &&
              delete n.paths.vs,
            void 0 !== typeof n.trustedTypesPolicy &&
              delete n.trustedTypesPolicy,
            (n.catchError = !0),
            I.require.config(n)),
          new Promise((c, u) => {
            (0, I.require)(
              [s],
              (f) => {
                (this._requestHandler = f.create(l)),
                  this._requestHandler
                    ? c(tt(this._requestHandler))
                    : u(new Error('No RequestHandler!'));
              },
              u
            );
          }));
    }
  }
  class K {
    constructor(t, n, s, i) {
      (this.originalStart = t),
        (this.originalLength = n),
        (this.modifiedStart = s),
        (this.modifiedLength = i);
    }
    getOriginalEnd() {
      return this.originalStart + this.originalLength;
    }
    getModifiedEnd() {
      return this.modifiedStart + this.modifiedLength;
    }
  }
  function Z(e, t) {
    return ((t << 5) - t + e) | 0;
  }
  function lt(e, t) {
    t = Z(149417, t);
    for (let n = 0, s = e.length; n < s; n++) t = Z(e.charCodeAt(n), t);
    return t;
  }
  function ut(e, t, n = 32) {
    const s = n - t;
    return ((e << t) | ((~((1 << s) - 1) & e) >>> s)) >>> 0;
  }
  function a1(e, t = 0, n = e.byteLength, s = 0) {
    for (let i = 0; i < n; i++) e[t + i] = s;
  }
  function Le(e, t = 32) {
    return e instanceof ArrayBuffer
      ? Array.from(new Uint8Array(e))
          .map((n) => n.toString(16).padStart(2, '0'))
          .join('')
      : (function er(e, t, n = '0') {
          for (; e.length < t; ) e = n + e;
          return e;
        })((e >>> 0).toString(16), t / 4);
  }
  class ct {
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
      const s = this._buff;
      let o,
        l,
        i = this._buffLen,
        a = this._leftoverHighSurrogate;
      for (
        0 !== a
          ? ((o = a), (l = -1), (a = 0))
          : ((o = t.charCodeAt(0)), (l = 0));
        ;

      ) {
        let c = o;
        if (Ce(o)) {
          if (!(l + 1 < n)) {
            a = o;
            break;
          }
          {
            const u = t.charCodeAt(l + 1);
            pe(u) ? (l++, (c = rt(o, u))) : (c = 65533);
          }
        } else pe(o) && (c = 65533);
        if (((i = this._push(s, i, c)), l++, !(l < n))) break;
        o = t.charCodeAt(l);
      }
      (this._buffLen = i), (this._leftoverHighSurrogate = a);
    }
    _push(t, n, s) {
      return (
        s < 128
          ? (t[n++] = s)
          : s < 2048
          ? ((t[n++] = 192 | ((1984 & s) >>> 6)),
            (t[n++] = 128 | ((63 & s) >>> 0)))
          : s < 65536
          ? ((t[n++] = 224 | ((61440 & s) >>> 12)),
            (t[n++] = 128 | ((4032 & s) >>> 6)),
            (t[n++] = 128 | ((63 & s) >>> 0)))
          : ((t[n++] = 240 | ((1835008 & s) >>> 18)),
            (t[n++] = 128 | ((258048 & s) >>> 12)),
            (t[n++] = 128 | ((4032 & s) >>> 6)),
            (t[n++] = 128 | ((63 & s) >>> 0))),
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
        Le(this._h0) + Le(this._h1) + Le(this._h2) + Le(this._h3) + Le(this._h4)
      );
    }
    _wrapUp() {
      (this._buff[this._buffLen++] = 128),
        a1(this._buff, this._buffLen),
        this._buffLen > 56 && (this._step(), a1(this._buff));
      const t = 8 * this._totalLen;
      this._buffDV.setUint32(56, Math.floor(t / 4294967296), !1),
        this._buffDV.setUint32(60, t % 4294967296, !1),
        this._step();
    }
    _step() {
      const t = ct._bigBlock32,
        n = this._buffDV;
      for (let f = 0; f < 64; f += 4) t.setUint32(f, n.getUint32(f, !1), !1);
      for (let f = 64; f < 320; f += 4)
        t.setUint32(
          f,
          ut(
            t.getUint32(f - 12, !1) ^
              t.getUint32(f - 32, !1) ^
              t.getUint32(f - 56, !1) ^
              t.getUint32(f - 64, !1),
            1
          ),
          !1
        );
      let c,
        u,
        h,
        s = this._h0,
        i = this._h1,
        a = this._h2,
        o = this._h3,
        l = this._h4;
      for (let f = 0; f < 80; f++)
        f < 20
          ? ((c = (i & a) | (~i & o)), (u = 1518500249))
          : f < 40
          ? ((c = i ^ a ^ o), (u = 1859775393))
          : f < 60
          ? ((c = (i & a) | (i & o) | (a & o)), (u = 2400959708))
          : ((c = i ^ a ^ o), (u = 3395469782)),
          (h = (ut(s, 5) + c + l + u + t.getUint32(4 * f, !1)) & 4294967295),
          (l = o),
          (o = a),
          (a = ut(i, 30)),
          (i = s),
          (s = h);
      (this._h0 = (this._h0 + s) & 4294967295),
        (this._h1 = (this._h1 + i) & 4294967295),
        (this._h2 = (this._h2 + a) & 4294967295),
        (this._h3 = (this._h3 + o) & 4294967295),
        (this._h4 = (this._h4 + l) & 4294967295);
    }
  }
  ct._bigBlock32 = new DataView(new ArrayBuffer(320));
  class o1 {
    constructor(t) {
      this.source = t;
    }
    getElements() {
      const t = this.source,
        n = new Int32Array(t.length);
      for (let s = 0, i = t.length; s < i; s++) n[s] = t.charCodeAt(s);
      return n;
    }
  }
  function tr(e, t, n) {
    return new ee(new o1(e), new o1(t)).ComputeDiff(n).changes;
  }
  class le {
    static Assert(t, n) {
      if (!t) throw new Error(n);
    }
  }
  class ue {
    static Copy(t, n, s, i, a) {
      for (let o = 0; o < a; o++) s[i + o] = t[n + o];
    }
    static Copy2(t, n, s, i, a) {
      for (let o = 0; o < a; o++) s[i + o] = t[n + o];
    }
  }
  class l1 {
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
          new K(
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
  class ee {
    constructor(t, n, s = null) {
      (this.ContinueProcessingPredicate = s),
        (this._originalSequence = t),
        (this._modifiedSequence = n);
      const [i, a, o] = ee._getElements(t),
        [l, c, u] = ee._getElements(n);
      (this._hasStrings = o && u),
        (this._originalStringElements = i),
        (this._originalElementsOrHash = a),
        (this._modifiedStringElements = l),
        (this._modifiedElementsOrHash = c),
        (this.m_forwardHistory = []),
        (this.m_reverseHistory = []);
    }
    static _isStringArray(t) {
      return t.length > 0 && 'string' == typeof t[0];
    }
    static _getElements(t) {
      const n = t.getElements();
      if (ee._isStringArray(n)) {
        const s = new Int32Array(n.length);
        for (let i = 0, a = n.length; i < a; i++) s[i] = lt(n[i], 0);
        return [n, s, !0];
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
        ee._getStrictElement(this._originalSequence, t) ===
          ee._getStrictElement(this._modifiedSequence, n)
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
    _ComputeDiff(t, n, s, i, a) {
      const o = [!1];
      let l = this.ComputeDiffRecursive(t, n, s, i, o);
      return (
        a && (l = this.PrettifyChanges(l)), { quitEarly: o[0], changes: l }
      );
    }
    ComputeDiffRecursive(t, n, s, i, a) {
      for (a[0] = !1; t <= n && s <= i && this.ElementsAreEqual(t, s); )
        t++, s++;
      for (; n >= t && i >= s && this.ElementsAreEqual(n, i); ) n--, i--;
      if (t > n || s > i) {
        let f;
        return (
          s <= i
            ? (le.Assert(
                t === n + 1,
                'originalStart should only be one more than originalEnd'
              ),
              (f = [new K(t, 0, s, i - s + 1)]))
            : t <= n
            ? (le.Assert(
                s === i + 1,
                'modifiedStart should only be one more than modifiedEnd'
              ),
              (f = [new K(t, n - t + 1, s, 0)]))
            : (le.Assert(
                t === n + 1,
                'originalStart should only be one more than originalEnd'
              ),
              le.Assert(
                s === i + 1,
                'modifiedStart should only be one more than modifiedEnd'
              ),
              (f = [])),
          f
        );
      }
      const o = [0],
        l = [0],
        c = this.ComputeRecursionPoint(t, n, s, i, o, l, a),
        u = o[0],
        h = l[0];
      if (null !== c) return c;
      if (!a[0]) {
        const f = this.ComputeDiffRecursive(t, u, s, h, a);
        let d = [];
        return (
          (d = a[0]
            ? [new K(u + 1, n - (u + 1) + 1, h + 1, i - (h + 1) + 1)]
            : this.ComputeDiffRecursive(u + 1, n, h + 1, i, a)),
          this.ConcatenateChanges(f, d)
        );
      }
      return [new K(t, n - t + 1, s, i - s + 1)];
    }
    WALKTRACE(t, n, s, i, a, o, l, c, u, h, f, d, b, L, N, y, k, F) {
      let A = null,
        v = null,
        S = new l1(),
        x = n,
        _ = s,
        m = b[0] - y[0] - i,
        g = -1073741824,
        C = this.m_forwardHistory.length - 1;
      do {
        const p = m + t;
        p === x || (p < _ && u[p - 1] < u[p + 1])
          ? ((L = (f = u[p + 1]) - m - i),
            f < g && S.MarkNextChange(),
            (g = f),
            S.AddModifiedElement(f + 1, L),
            (m = p + 1 - t))
          : ((L = (f = u[p - 1] + 1) - m - i),
            f < g && S.MarkNextChange(),
            (g = f - 1),
            S.AddOriginalElement(f, L + 1),
            (m = p - 1 - t)),
          C >= 0 &&
            ((t = (u = this.m_forwardHistory[C])[0]),
            (x = 1),
            (_ = u.length - 1));
      } while (--C >= -1);
      if (((A = S.getReverseChanges()), F[0])) {
        let p = b[0] + 1,
          w = y[0] + 1;
        if (null !== A && A.length > 0) {
          const E = A[A.length - 1];
          (p = Math.max(p, E.getOriginalEnd())),
            (w = Math.max(w, E.getModifiedEnd()));
        }
        v = [new K(p, d - p + 1, w, N - w + 1)];
      } else {
        (S = new l1()),
          (x = o),
          (_ = l),
          (m = b[0] - y[0] - c),
          (g = 1073741824),
          (C = k
            ? this.m_reverseHistory.length - 1
            : this.m_reverseHistory.length - 2);
        do {
          const p = m + a;
          p === x || (p < _ && h[p - 1] >= h[p + 1])
            ? ((L = (f = h[p + 1] - 1) - m - c),
              f > g && S.MarkNextChange(),
              (g = f + 1),
              S.AddOriginalElement(f + 1, L + 1),
              (m = p + 1 - a))
            : ((L = (f = h[p - 1]) - m - c),
              f > g && S.MarkNextChange(),
              (g = f),
              S.AddModifiedElement(f + 1, L + 1),
              (m = p - 1 - a)),
            C >= 0 &&
              ((a = (h = this.m_reverseHistory[C])[0]),
              (x = 1),
              (_ = h.length - 1));
        } while (--C >= -1);
        v = S.getChanges();
      }
      return this.ConcatenateChanges(A, v);
    }
    ComputeRecursionPoint(t, n, s, i, a, o, l) {
      let c = 0,
        u = 0,
        h = 0,
        f = 0,
        d = 0,
        b = 0;
      t--,
        s--,
        (a[0] = 0),
        (o[0] = 0),
        (this.m_forwardHistory = []),
        (this.m_reverseHistory = []);
      const L = n - t + (i - s),
        N = L + 1,
        y = new Int32Array(N),
        k = new Int32Array(N),
        F = i - s,
        A = n - t,
        v = t - s,
        S = n - i,
        _ = (A - F) % 2 == 0;
      (y[F] = t), (k[A] = n), (l[0] = !1);
      for (let m = 1; m <= L / 2 + 1; m++) {
        let g = 0,
          C = 0;
        (h = this.ClipDiagonalBound(F - m, m, F, N)),
          (f = this.ClipDiagonalBound(F + m, m, F, N));
        for (let w = h; w <= f; w += 2) {
          (c =
            w === h || (w < f && y[w - 1] < y[w + 1])
              ? y[w + 1]
              : y[w - 1] + 1),
            (u = c - (w - F) - v);
          const E = c;
          for (; c < n && u < i && this.ElementsAreEqual(c + 1, u + 1); )
            c++, u++;
          if (
            ((y[w] = c),
            c + u > g + C && ((g = c), (C = u)),
            !_ && Math.abs(w - A) <= m - 1 && c >= k[w])
          )
            return (
              (a[0] = c),
              (o[0] = u),
              E <= k[w] && m <= 1448
                ? this.WALKTRACE(
                    F,
                    h,
                    f,
                    v,
                    A,
                    d,
                    b,
                    S,
                    y,
                    k,
                    c,
                    n,
                    a,
                    u,
                    i,
                    o,
                    _,
                    l
                  )
                : null
            );
        }
        const p = (g - t + (C - s) - m) / 2;
        if (
          null !== this.ContinueProcessingPredicate &&
          !this.ContinueProcessingPredicate(g, p)
        )
          return (
            (l[0] = !0),
            (a[0] = g),
            (o[0] = C),
            p > 0 && m <= 1448
              ? this.WALKTRACE(
                  F,
                  h,
                  f,
                  v,
                  A,
                  d,
                  b,
                  S,
                  y,
                  k,
                  c,
                  n,
                  a,
                  u,
                  i,
                  o,
                  _,
                  l
                )
              : (t++, s++, [new K(t, n - t + 1, s, i - s + 1)])
          );
        (d = this.ClipDiagonalBound(A - m, m, A, N)),
          (b = this.ClipDiagonalBound(A + m, m, A, N));
        for (let w = d; w <= b; w += 2) {
          (c =
            w === d || (w < b && k[w - 1] >= k[w + 1])
              ? k[w + 1] - 1
              : k[w - 1]),
            (u = c - (w - A) - S);
          const E = c;
          for (; c > t && u > s && this.ElementsAreEqual(c, u); ) c--, u--;
          if (((k[w] = c), _ && Math.abs(w - F) <= m && c <= y[w]))
            return (
              (a[0] = c),
              (o[0] = u),
              E >= y[w] && m <= 1448
                ? this.WALKTRACE(
                    F,
                    h,
                    f,
                    v,
                    A,
                    d,
                    b,
                    S,
                    y,
                    k,
                    c,
                    n,
                    a,
                    u,
                    i,
                    o,
                    _,
                    l
                  )
                : null
            );
        }
        if (m <= 1447) {
          let w = new Int32Array(f - h + 2);
          (w[0] = F - h + 1),
            ue.Copy2(y, h, w, 1, f - h + 1),
            this.m_forwardHistory.push(w),
            (w = new Int32Array(b - d + 2)),
            (w[0] = A - d + 1),
            ue.Copy2(k, d, w, 1, b - d + 1),
            this.m_reverseHistory.push(w);
        }
      }
      return this.WALKTRACE(
        F,
        h,
        f,
        v,
        A,
        d,
        b,
        S,
        y,
        k,
        c,
        n,
        a,
        u,
        i,
        o,
        _,
        l
      );
    }
    PrettifyChanges(t) {
      for (let n = 0; n < t.length; n++) {
        const s = t[n],
          i =
            n < t.length - 1
              ? t[n + 1].originalStart
              : this._originalElementsOrHash.length,
          a =
            n < t.length - 1
              ? t[n + 1].modifiedStart
              : this._modifiedElementsOrHash.length,
          o = s.originalLength > 0,
          l = s.modifiedLength > 0;
        for (
          ;
          s.originalStart + s.originalLength < i &&
          s.modifiedStart + s.modifiedLength < a &&
          (!o ||
            this.OriginalElementsAreEqual(
              s.originalStart,
              s.originalStart + s.originalLength
            )) &&
          (!l ||
            this.ModifiedElementsAreEqual(
              s.modifiedStart,
              s.modifiedStart + s.modifiedLength
            ));

        ) {
          const u = this.ElementsAreStrictEqual(
            s.originalStart,
            s.modifiedStart
          );
          if (
            this.ElementsAreStrictEqual(
              s.originalStart + s.originalLength,
              s.modifiedStart + s.modifiedLength
            ) &&
            !u
          )
            break;
          s.originalStart++, s.modifiedStart++;
        }
        const c = [null];
        n < t.length - 1 &&
          this.ChangesOverlap(t[n], t[n + 1], c) &&
          ((t[n] = c[0]), t.splice(n + 1, 1), n--);
      }
      for (let n = t.length - 1; n >= 0; n--) {
        const s = t[n];
        let i = 0,
          a = 0;
        if (n > 0) {
          const f = t[n - 1];
          (i = f.originalStart + f.originalLength),
            (a = f.modifiedStart + f.modifiedLength);
        }
        const o = s.originalLength > 0,
          l = s.modifiedLength > 0;
        let c = 0,
          u = this._boundaryScore(
            s.originalStart,
            s.originalLength,
            s.modifiedStart,
            s.modifiedLength
          );
        for (let f = 1; ; f++) {
          const d = s.originalStart - f,
            b = s.modifiedStart - f;
          if (
            d < i ||
            b < a ||
            (o && !this.OriginalElementsAreEqual(d, d + s.originalLength)) ||
            (l && !this.ModifiedElementsAreEqual(b, b + s.modifiedLength))
          )
            break;
          const N =
            (d === i && b === a ? 5 : 0) +
            this._boundaryScore(d, s.originalLength, b, s.modifiedLength);
          N > u && ((u = N), (c = f));
        }
        (s.originalStart -= c), (s.modifiedStart -= c);
        const h = [null];
        n > 0 &&
          this.ChangesOverlap(t[n - 1], t[n], h) &&
          ((t[n - 1] = h[0]), t.splice(n, 1), n++);
      }
      if (this._hasStrings)
        for (let n = 1, s = t.length; n < s; n++) {
          const i = t[n - 1],
            a = t[n],
            o = a.originalStart - i.originalStart - i.originalLength,
            l = i.originalStart,
            c = a.originalStart + a.originalLength,
            u = c - l,
            h = i.modifiedStart,
            f = a.modifiedStart + a.modifiedLength,
            d = f - h;
          if (o < 5 && u < 20 && d < 20) {
            const b = this._findBetterContiguousSequence(l, u, h, d, o);
            if (b) {
              const [L, N] = b;
              (L !== i.originalStart + i.originalLength ||
                N !== i.modifiedStart + i.modifiedLength) &&
                ((i.originalLength = L - i.originalStart),
                (i.modifiedLength = N - i.modifiedStart),
                (a.originalStart = L + o),
                (a.modifiedStart = N + o),
                (a.originalLength = c - a.originalStart),
                (a.modifiedLength = f - a.modifiedStart));
            }
          }
        }
      return t;
    }
    _findBetterContiguousSequence(t, n, s, i, a) {
      if (n < a || i < a) return null;
      const o = t + n - a + 1,
        l = s + i - a + 1;
      let c = 0,
        u = 0,
        h = 0;
      for (let f = t; f < o; f++)
        for (let d = s; d < l; d++) {
          const b = this._contiguousSequenceScore(f, d, a);
          b > 0 && b > c && ((c = b), (u = f), (h = d));
        }
      return c > 0 ? [u, h] : null;
    }
    _contiguousSequenceScore(t, n, s) {
      let i = 0;
      for (let a = 0; a < s; a++) {
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
        const s = t + n;
        if (this._OriginalIsBoundary(s - 1) || this._OriginalIsBoundary(s))
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
        const s = t + n;
        if (this._ModifiedIsBoundary(s - 1) || this._ModifiedIsBoundary(s))
          return !0;
      }
      return !1;
    }
    _boundaryScore(t, n, s, i) {
      return (
        (this._OriginalRegionIsBoundary(t, n) ? 1 : 0) +
        (this._ModifiedRegionIsBoundary(s, i) ? 1 : 0)
      );
    }
    ConcatenateChanges(t, n) {
      const s = [];
      if (0 === t.length || 0 === n.length) return n.length > 0 ? n : t;
      if (this.ChangesOverlap(t[t.length - 1], n[0], s)) {
        const i = new Array(t.length + n.length - 1);
        return (
          ue.Copy(t, 0, i, 0, t.length - 1),
          (i[t.length - 1] = s[0]),
          ue.Copy(n, 1, i, t.length, n.length - 1),
          i
        );
      }
      {
        const i = new Array(t.length + n.length);
        return (
          ue.Copy(t, 0, i, 0, t.length), ue.Copy(n, 0, i, t.length, n.length), i
        );
      }
    }
    ChangesOverlap(t, n, s) {
      if (
        (le.Assert(
          t.originalStart <= n.originalStart,
          'Left change is not less than or equal to right change'
        ),
        le.Assert(
          t.modifiedStart <= n.modifiedStart,
          'Left change is not less than or equal to right change'
        ),
        t.originalStart + t.originalLength >= n.originalStart ||
          t.modifiedStart + t.modifiedLength >= n.modifiedStart)
      ) {
        let a = t.originalLength,
          l = t.modifiedLength;
        return (
          t.originalStart + t.originalLength >= n.originalStart &&
            (a = n.originalStart + n.originalLength - t.originalStart),
          t.modifiedStart + t.modifiedLength >= n.modifiedStart &&
            (l = n.modifiedStart + n.modifiedLength - t.modifiedStart),
          (s[0] = new K(t.originalStart, a, t.modifiedStart, l)),
          !0
        );
      }
      return (s[0] = null), !1;
    }
    ClipDiagonalBound(t, n, s, i) {
      if (t >= 0 && t < i) return t;
      const l = n % 2 == 0;
      return t < 0
        ? l === (s % 2 == 0)
          ? 0
          : 1
        : l === ((i - s - 1) % 2 == 0)
        ? i - 1
        : i - 2;
    }
  }
  if (typeof I.vscode < 'u' && typeof I.vscode.process < 'u') {
    const e = I.vscode.process;
    ce = {
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
    ce =
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
              return _e ? 'win32' : fn ? 'darwin' : 'linux';
            },
            get arch() {},
            get env() {
              return {};
            },
            cwd: () => '/',
          };
  const ft = ce.cwd,
    nr = ce.env,
    V = 47,
    H = 92;
  class u1 extends Error {
    constructor(t, n, s) {
      let i;
      'string' == typeof n && 0 === n.indexOf('not ')
        ? ((i = 'must not be'), (n = n.replace(/^not /, '')))
        : (i = 'must be');
      const a = -1 !== t.indexOf('.') ? 'property' : 'argument';
      let o = `The "${t}" ${a} ${i} of type ${n}`;
      (o += '. Received type ' + typeof s),
        super(o),
        (this.code = 'ERR_INVALID_ARG_TYPE');
    }
  }
  function B(e, t) {
    if ('string' != typeof e) throw new u1(t, 'string', e);
  }
  function M(e) {
    return e === V || e === H;
  }
  function ht(e) {
    return e === V;
  }
  function re(e) {
    return (e >= 65 && e <= 90) || (e >= 97 && e <= 122);
  }
  function qe(e, t, n, s) {
    let i = '',
      a = 0,
      o = -1,
      l = 0,
      c = 0;
    for (let u = 0; u <= e.length; ++u) {
      if (u < e.length) c = e.charCodeAt(u);
      else {
        if (s(c)) break;
        c = V;
      }
      if (s(c)) {
        if (o !== u - 1 && 1 !== l)
          if (2 === l) {
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
                  (l = 0);
                continue;
              }
              if (0 !== i.length) {
                (i = ''), (a = 0), (o = u), (l = 0);
                continue;
              }
            }
            t && ((i += i.length > 0 ? `${n}..` : '..'), (a = 2));
          } else
            i.length > 0
              ? (i += `${n}${e.slice(o + 1, u)}`)
              : (i = e.slice(o + 1, u)),
              (a = u - o - 1);
        (o = u), (l = 0);
      } else 46 === c && -1 !== l ? ++l : (l = -1);
    }
    return i;
  }
  function c1(e, t) {
    if (null === t || 'object' != typeof t)
      throw new u1('pathObject', 'Object', t);
    const n = t.dir || t.root,
      s = t.base || `${t.name || ''}${t.ext || ''}`;
    return n ? (n === t.root ? `${n}${s}` : `${n}${e}${s}`) : s;
  }
  const q = {
      resolve(...e) {
        let t = '',
          n = '',
          s = !1;
        for (let i = e.length - 1; i >= -1; i--) {
          let a;
          if (i >= 0) {
            if (((a = e[i]), B(a, 'path'), 0 === a.length)) continue;
          } else
            0 === t.length
              ? (a = ft())
              : ((a = nr[`=${t}`] || ft()),
                (void 0 === a ||
                  (a.slice(0, 2).toLowerCase() !== t.toLowerCase() &&
                    a.charCodeAt(2) === H)) &&
                  (a = `${t}\\`));
          const o = a.length;
          let l = 0,
            c = '',
            u = !1;
          const h = a.charCodeAt(0);
          if (1 === o) M(h) && ((l = 1), (u = !0));
          else if (M(h))
            if (((u = !0), M(a.charCodeAt(1)))) {
              let f = 2,
                d = f;
              for (; f < o && !M(a.charCodeAt(f)); ) f++;
              if (f < o && f !== d) {
                const b = a.slice(d, f);
                for (d = f; f < o && M(a.charCodeAt(f)); ) f++;
                if (f < o && f !== d) {
                  for (d = f; f < o && !M(a.charCodeAt(f)); ) f++;
                  (f === o || f !== d) &&
                    ((c = `\\\\${b}\\${a.slice(d, f)}`), (l = f));
                }
              }
            } else l = 1;
          else
            re(h) &&
              58 === a.charCodeAt(1) &&
              ((c = a.slice(0, 2)),
              (l = 2),
              o > 2 && M(a.charCodeAt(2)) && ((u = !0), (l = 3)));
          if (c.length > 0)
            if (t.length > 0) {
              if (c.toLowerCase() !== t.toLowerCase()) continue;
            } else t = c;
          if (s) {
            if (t.length > 0) break;
          } else if (((n = `${a.slice(l)}\\${n}`), (s = u), u && t.length > 0))
            break;
        }
        return (n = qe(n, !s, '\\', M)), s ? `${t}\\${n}` : `${t}${n}` || '.';
      },
      normalize(e) {
        B(e, 'path');
        const t = e.length;
        if (0 === t) return '.';
        let s,
          n = 0,
          i = !1;
        const a = e.charCodeAt(0);
        if (1 === t) return ht(a) ? '\\' : e;
        if (M(a))
          if (((i = !0), M(e.charCodeAt(1)))) {
            let l = 2,
              c = l;
            for (; l < t && !M(e.charCodeAt(l)); ) l++;
            if (l < t && l !== c) {
              const u = e.slice(c, l);
              for (c = l; l < t && M(e.charCodeAt(l)); ) l++;
              if (l < t && l !== c) {
                for (c = l; l < t && !M(e.charCodeAt(l)); ) l++;
                if (l === t) return `\\\\${u}\\${e.slice(c)}\\`;
                l !== c && ((s = `\\\\${u}\\${e.slice(c, l)}`), (n = l));
              }
            }
          } else n = 1;
        else
          re(a) &&
            58 === e.charCodeAt(1) &&
            ((s = e.slice(0, 2)),
            (n = 2),
            t > 2 && M(e.charCodeAt(2)) && ((i = !0), (n = 3)));
        let o = n < t ? qe(e.slice(n), !i, '\\', M) : '';
        return (
          0 === o.length && !i && (o = '.'),
          o.length > 0 && M(e.charCodeAt(t - 1)) && (o += '\\'),
          void 0 === s ? (i ? `\\${o}` : o) : i ? `${s}\\${o}` : `${s}${o}`
        );
      },
      isAbsolute(e) {
        B(e, 'path');
        const t = e.length;
        if (0 === t) return !1;
        const n = e.charCodeAt(0);
        return (
          M(n) ||
          (t > 2 && re(n) && 58 === e.charCodeAt(1) && M(e.charCodeAt(2)))
        );
      },
      join(...e) {
        if (0 === e.length) return '.';
        let t, n;
        for (let a = 0; a < e.length; ++a) {
          const o = e[a];
          B(o, 'path'),
            o.length > 0 && (void 0 === t ? (t = n = o) : (t += `\\${o}`));
        }
        if (void 0 === t) return '.';
        let s = !0,
          i = 0;
        if ('string' == typeof n && M(n.charCodeAt(0))) {
          ++i;
          const a = n.length;
          a > 1 &&
            M(n.charCodeAt(1)) &&
            (++i, a > 2 && (M(n.charCodeAt(2)) ? ++i : (s = !1)));
        }
        if (s) {
          for (; i < t.length && M(t.charCodeAt(i)); ) i++;
          i >= 2 && (t = `\\${t.slice(i)}`);
        }
        return q.normalize(t);
      },
      relative(e, t) {
        if ((B(e, 'from'), B(t, 'to'), e === t)) return '';
        const n = q.resolve(e),
          s = q.resolve(t);
        if (n === s || (e = n.toLowerCase()) === (t = s.toLowerCase()))
          return '';
        let i = 0;
        for (; i < e.length && e.charCodeAt(i) === H; ) i++;
        let a = e.length;
        for (; a - 1 > i && e.charCodeAt(a - 1) === H; ) a--;
        const o = a - i;
        let l = 0;
        for (; l < t.length && t.charCodeAt(l) === H; ) l++;
        let c = t.length;
        for (; c - 1 > l && t.charCodeAt(c - 1) === H; ) c--;
        const u = c - l,
          h = o < u ? o : u;
        let f = -1,
          d = 0;
        for (; d < h; d++) {
          const L = e.charCodeAt(i + d);
          if (L !== t.charCodeAt(l + d)) break;
          L === H && (f = d);
        }
        if (d !== h) {
          if (-1 === f) return s;
        } else {
          if (u > h) {
            if (t.charCodeAt(l + d) === H) return s.slice(l + d + 1);
            if (2 === d) return s.slice(l + d);
          }
          o > h && (e.charCodeAt(i + d) === H ? (f = d) : 2 === d && (f = 3)),
            -1 === f && (f = 0);
        }
        let b = '';
        for (d = i + f + 1; d <= a; ++d)
          (d === a || e.charCodeAt(d) === H) &&
            (b += 0 === b.length ? '..' : '\\..');
        return (
          (l += f),
          b.length > 0
            ? `${b}${s.slice(l, c)}`
            : (s.charCodeAt(l) === H && ++l, s.slice(l, c))
        );
      },
      toNamespacedPath(e) {
        if ('string' != typeof e) return e;
        if (0 === e.length) return '';
        const t = q.resolve(e);
        if (t.length <= 2) return e;
        if (t.charCodeAt(0) === H) {
          if (t.charCodeAt(1) === H) {
            const n = t.charCodeAt(2);
            if (63 !== n && 46 !== n) return `\\\\?\\UNC\\${t.slice(2)}`;
          }
        } else if (
          re(t.charCodeAt(0)) &&
          58 === t.charCodeAt(1) &&
          t.charCodeAt(2) === H
        )
          return `\\\\?\\${t}`;
        return e;
      },
      dirname(e) {
        B(e, 'path');
        const t = e.length;
        if (0 === t) return '.';
        let n = -1,
          s = 0;
        const i = e.charCodeAt(0);
        if (1 === t) return M(i) ? e : '.';
        if (M(i)) {
          if (((n = s = 1), M(e.charCodeAt(1)))) {
            let l = 2,
              c = l;
            for (; l < t && !M(e.charCodeAt(l)); ) l++;
            if (l < t && l !== c) {
              for (c = l; l < t && M(e.charCodeAt(l)); ) l++;
              if (l < t && l !== c) {
                for (c = l; l < t && !M(e.charCodeAt(l)); ) l++;
                if (l === t) return e;
                l !== c && (n = s = l + 1);
              }
            }
          }
        } else
          re(i) &&
            58 === e.charCodeAt(1) &&
            ((n = t > 2 && M(e.charCodeAt(2)) ? 3 : 2), (s = n));
        let a = -1,
          o = !0;
        for (let l = t - 1; l >= s; --l)
          if (M(e.charCodeAt(l))) {
            if (!o) {
              a = l;
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
        void 0 !== t && B(t, 'ext'), B(e, 'path');
        let a,
          n = 0,
          s = -1,
          i = !0;
        if (
          (e.length >= 2 &&
            re(e.charCodeAt(0)) &&
            58 === e.charCodeAt(1) &&
            (n = 2),
          void 0 !== t && t.length > 0 && t.length <= e.length)
        ) {
          if (t === e) return '';
          let o = t.length - 1,
            l = -1;
          for (a = e.length - 1; a >= n; --a) {
            const c = e.charCodeAt(a);
            if (M(c)) {
              if (!i) {
                n = a + 1;
                break;
              }
            } else
              -1 === l && ((i = !1), (l = a + 1)),
                o >= 0 &&
                  (c === t.charCodeAt(o)
                    ? -1 == --o && (s = a)
                    : ((o = -1), (s = l)));
          }
          return n === s ? (s = l) : -1 === s && (s = e.length), e.slice(n, s);
        }
        for (a = e.length - 1; a >= n; --a)
          if (M(e.charCodeAt(a))) {
            if (!i) {
              n = a + 1;
              break;
            }
          } else -1 === s && ((i = !1), (s = a + 1));
        return -1 === s ? '' : e.slice(n, s);
      },
      extname(e) {
        B(e, 'path');
        let t = 0,
          n = -1,
          s = 0,
          i = -1,
          a = !0,
          o = 0;
        e.length >= 2 &&
          58 === e.charCodeAt(1) &&
          re(e.charCodeAt(0)) &&
          (t = s = 2);
        for (let l = e.length - 1; l >= t; --l) {
          const c = e.charCodeAt(l);
          if (M(c)) {
            if (!a) {
              s = l + 1;
              break;
            }
          } else
            -1 === i && ((a = !1), (i = l + 1)),
              46 === c
                ? -1 === n
                  ? (n = l)
                  : 1 !== o && (o = 1)
                : -1 !== n && (o = -1);
        }
        return -1 === n ||
          -1 === i ||
          0 === o ||
          (1 === o && n === i - 1 && n === s + 1)
          ? ''
          : e.slice(n, i);
      },
      format: c1.bind(null, '\\'),
      parse(e) {
        B(e, 'path');
        const t = { root: '', dir: '', base: '', ext: '', name: '' };
        if (0 === e.length) return t;
        const n = e.length;
        let s = 0,
          i = e.charCodeAt(0);
        if (1 === n)
          return M(i) ? ((t.root = t.dir = e), t) : ((t.base = t.name = e), t);
        if (M(i)) {
          if (((s = 1), M(e.charCodeAt(1)))) {
            let f = 2,
              d = f;
            for (; f < n && !M(e.charCodeAt(f)); ) f++;
            if (f < n && f !== d) {
              for (d = f; f < n && M(e.charCodeAt(f)); ) f++;
              if (f < n && f !== d) {
                for (d = f; f < n && !M(e.charCodeAt(f)); ) f++;
                f === n ? (s = f) : f !== d && (s = f + 1);
              }
            }
          }
        } else if (re(i) && 58 === e.charCodeAt(1)) {
          if (n <= 2) return (t.root = t.dir = e), t;
          if (((s = 2), M(e.charCodeAt(2)))) {
            if (3 === n) return (t.root = t.dir = e), t;
            s = 3;
          }
        }
        s > 0 && (t.root = e.slice(0, s));
        let a = -1,
          o = s,
          l = -1,
          c = !0,
          u = e.length - 1,
          h = 0;
        for (; u >= s; --u)
          if (((i = e.charCodeAt(u)), M(i))) {
            if (!c) {
              o = u + 1;
              break;
            }
          } else
            -1 === l && ((c = !1), (l = u + 1)),
              46 === i
                ? -1 === a
                  ? (a = u)
                  : 1 !== h && (h = 1)
                : -1 !== a && (h = -1);
        return (
          -1 !== l &&
            (-1 === a || 0 === h || (1 === h && a === l - 1 && a === o + 1)
              ? (t.base = t.name = e.slice(o, l))
              : ((t.name = e.slice(o, a)),
                (t.base = e.slice(o, l)),
                (t.ext = e.slice(a, l)))),
          (t.dir = o > 0 && o !== s ? e.slice(0, o - 1) : t.root),
          t
        );
      },
      sep: '\\',
      delimiter: ';',
      win32: null,
      posix: null,
    },
    O = {
      resolve(...e) {
        let t = '',
          n = !1;
        for (let s = e.length - 1; s >= -1 && !n; s--) {
          const i = s >= 0 ? e[s] : ft();
          B(i, 'path'),
            0 !== i.length && ((t = `${i}/${t}`), (n = i.charCodeAt(0) === V));
        }
        return (t = qe(t, !n, '/', ht)), n ? `/${t}` : t.length > 0 ? t : '.';
      },
      normalize(e) {
        if ((B(e, 'path'), 0 === e.length)) return '.';
        const t = e.charCodeAt(0) === V,
          n = e.charCodeAt(e.length - 1) === V;
        return 0 === (e = qe(e, !t, '/', ht)).length
          ? t
            ? '/'
            : n
            ? './'
            : '.'
          : (n && (e += '/'), t ? `/${e}` : e);
      },
      isAbsolute: (e) => (B(e, 'path'), e.length > 0 && e.charCodeAt(0) === V),
      join(...e) {
        if (0 === e.length) return '.';
        let t;
        for (let n = 0; n < e.length; ++n) {
          const s = e[n];
          B(s, 'path'),
            s.length > 0 && (void 0 === t ? (t = s) : (t += `/${s}`));
        }
        return void 0 === t ? '.' : O.normalize(t);
      },
      relative(e, t) {
        if (
          (B(e, 'from'),
          B(t, 'to'),
          e === t || (e = O.resolve(e)) === (t = O.resolve(t)))
        )
          return '';
        const s = e.length,
          i = s - 1,
          o = t.length - 1,
          l = i < o ? i : o;
        let c = -1,
          u = 0;
        for (; u < l; u++) {
          const f = e.charCodeAt(1 + u);
          if (f !== t.charCodeAt(1 + u)) break;
          f === V && (c = u);
        }
        if (u === l)
          if (o > l) {
            if (t.charCodeAt(1 + u) === V) return t.slice(1 + u + 1);
            if (0 === u) return t.slice(1 + u);
          } else
            i > l && (e.charCodeAt(1 + u) === V ? (c = u) : 0 === u && (c = 0));
        let h = '';
        for (u = 1 + c + 1; u <= s; ++u)
          (u === s || e.charCodeAt(u) === V) &&
            (h += 0 === h.length ? '..' : '/..');
        return `${h}${t.slice(1 + c)}`;
      },
      toNamespacedPath: (e) => e,
      dirname(e) {
        if ((B(e, 'path'), 0 === e.length)) return '.';
        const t = e.charCodeAt(0) === V;
        let n = -1,
          s = !0;
        for (let i = e.length - 1; i >= 1; --i)
          if (e.charCodeAt(i) === V) {
            if (!s) {
              n = i;
              break;
            }
          } else s = !1;
        return -1 === n ? (t ? '/' : '.') : t && 1 === n ? '//' : e.slice(0, n);
      },
      basename(e, t) {
        void 0 !== t && B(t, 'ext'), B(e, 'path');
        let a,
          n = 0,
          s = -1,
          i = !0;
        if (void 0 !== t && t.length > 0 && t.length <= e.length) {
          if (t === e) return '';
          let o = t.length - 1,
            l = -1;
          for (a = e.length - 1; a >= 0; --a) {
            const c = e.charCodeAt(a);
            if (c === V) {
              if (!i) {
                n = a + 1;
                break;
              }
            } else
              -1 === l && ((i = !1), (l = a + 1)),
                o >= 0 &&
                  (c === t.charCodeAt(o)
                    ? -1 == --o && (s = a)
                    : ((o = -1), (s = l)));
          }
          return n === s ? (s = l) : -1 === s && (s = e.length), e.slice(n, s);
        }
        for (a = e.length - 1; a >= 0; --a)
          if (e.charCodeAt(a) === V) {
            if (!i) {
              n = a + 1;
              break;
            }
          } else -1 === s && ((i = !1), (s = a + 1));
        return -1 === s ? '' : e.slice(n, s);
      },
      extname(e) {
        B(e, 'path');
        let t = -1,
          n = 0,
          s = -1,
          i = !0,
          a = 0;
        for (let o = e.length - 1; o >= 0; --o) {
          const l = e.charCodeAt(o);
          if (l !== V)
            -1 === s && ((i = !1), (s = o + 1)),
              46 === l
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
          -1 === s ||
          0 === a ||
          (1 === a && t === s - 1 && t === n + 1)
          ? ''
          : e.slice(t, s);
      },
      format: c1.bind(null, '/'),
      parse(e) {
        B(e, 'path');
        const t = { root: '', dir: '', base: '', ext: '', name: '' };
        if (0 === e.length) return t;
        const n = e.charCodeAt(0) === V;
        let s;
        n ? ((t.root = '/'), (s = 1)) : (s = 0);
        let i = -1,
          a = 0,
          o = -1,
          l = !0,
          c = e.length - 1,
          u = 0;
        for (; c >= s; --c) {
          const h = e.charCodeAt(c);
          if (h !== V)
            -1 === o && ((l = !1), (o = c + 1)),
              46 === h
                ? -1 === i
                  ? (i = c)
                  : 1 !== u && (u = 1)
                : -1 !== i && (u = -1);
          else if (!l) {
            a = c + 1;
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
  (O.win32 = q.win32 = q), (O.posix = q.posix = O);
  const lr = /^\w[\w\d+.-]*$/,
    ur = /^\//,
    cr = /^\/\//;
  function f1(e, t) {
    if (!e.scheme && t)
      throw new Error(
        `[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`
      );
    if (e.scheme && !lr.test(e.scheme))
      throw new Error('[UriError]: Scheme contains illegal characters.');
    if (e.path)
      if (e.authority) {
        if (!ur.test(e.path))
          throw new Error(
            '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character'
          );
      } else if (cr.test(e.path))
        throw new Error(
          '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")'
        );
  }
  const P = '',
    Q = '/',
    dr = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
  class ie {
    constructor(t, n, s, i, a, o = !1) {
      'object' == typeof t
        ? ((this.scheme = t.scheme || P),
          (this.authority = t.authority || P),
          (this.path = t.path || P),
          (this.query = t.query || P),
          (this.fragment = t.fragment || P))
        : ((this.scheme = (function fr(e, t) {
            return e || t ? e : 'file';
          })(t, o)),
          (this.authority = n || P),
          (this.path = (function hr(e, t) {
            switch (e) {
              case 'https':
              case 'http':
              case 'file':
                t ? t[0] !== Q && (t = Q + t) : (t = Q);
            }
            return t;
          })(this.scheme, s || P)),
          (this.query = i || P),
          (this.fragment = a || P),
          f1(this, o));
    }
    static isUri(t) {
      return (
        t instanceof ie ||
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
      return dt(this, !1);
    }
    with(t) {
      if (!t) return this;
      let { scheme: n, authority: s, path: i, query: a, fragment: o } = t;
      return (
        void 0 === n ? (n = this.scheme) : null === n && (n = P),
        void 0 === s ? (s = this.authority) : null === s && (s = P),
        void 0 === i ? (i = this.path) : null === i && (i = P),
        void 0 === a ? (a = this.query) : null === a && (a = P),
        void 0 === o ? (o = this.fragment) : null === o && (o = P),
        n === this.scheme &&
        s === this.authority &&
        i === this.path &&
        a === this.query &&
        o === this.fragment
          ? this
          : new fe(n, s, i, a, o)
      );
    }
    static parse(t, n = !1) {
      const s = dr.exec(t);
      return s
        ? new fe(
            s[2] || P,
            He(s[4] || P),
            He(s[5] || P),
            He(s[7] || P),
            He(s[9] || P),
            n
          )
        : new fe(P, P, P, P, P);
    }
    static file(t) {
      let n = P;
      if ((_e && (t = t.replace(/\\/g, Q)), t[0] === Q && t[1] === Q)) {
        const s = t.indexOf(Q, 2);
        -1 === s
          ? ((n = t.substring(2)), (t = Q))
          : ((n = t.substring(2, s)), (t = t.substring(s) || Q));
      }
      return new fe('file', n, t, P, P);
    }
    static from(t) {
      const n = new fe(t.scheme, t.authority, t.path, t.query, t.fragment);
      return f1(n, !0), n;
    }
    static joinPath(t, ...n) {
      if (!t.path)
        throw new Error('[UriError]: cannot call joinPath on URI without path');
      let s;
      return (
        (s =
          _e && 'file' === t.scheme
            ? ie.file(q.join(dt(t, !0), ...n)).path
            : O.join(t.path, ...n)),
        t.with({ path: s })
      );
    }
    toString(t = !1) {
      return mt(this, t);
    }
    toJSON() {
      return this;
    }
    static revive(t) {
      if (t) {
        if (t instanceof ie) return t;
        {
          const n = new fe(t);
          return (
            (n._formatted = t.external),
            (n._fsPath = t._sep === h1 ? t.fsPath : null),
            n
          );
        }
      }
      return t;
    }
  }
  const h1 = _e ? 1 : void 0;
  class fe extends ie {
    constructor() {
      super(...arguments), (this._formatted = null), (this._fsPath = null);
    }
    get fsPath() {
      return this._fsPath || (this._fsPath = dt(this, !1)), this._fsPath;
    }
    toString(t = !1) {
      return t
        ? mt(this, !0)
        : (this._formatted || (this._formatted = mt(this, !1)),
          this._formatted);
    }
    toJSON() {
      const t = { $mid: 1 };
      return (
        this._fsPath && ((t.fsPath = this._fsPath), (t._sep = h1)),
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
  const d1 = {
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
  function m1(e, t) {
    let n,
      s = -1;
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
        -1 !== s && ((n += encodeURIComponent(e.substring(s, i))), (s = -1)),
          void 0 !== n && (n += e.charAt(i));
      else {
        void 0 === n && (n = e.substr(0, i));
        const o = d1[a];
        void 0 !== o
          ? (-1 !== s &&
              ((n += encodeURIComponent(e.substring(s, i))), (s = -1)),
            (n += o))
          : -1 === s && (s = i);
      }
    }
    return (
      -1 !== s && (n += encodeURIComponent(e.substring(s))),
      void 0 !== n ? n : e
    );
  }
  function mr(e) {
    let t;
    for (let n = 0; n < e.length; n++) {
      const s = e.charCodeAt(n);
      35 === s || 63 === s
        ? (void 0 === t && (t = e.substr(0, n)), (t += d1[s]))
        : void 0 !== t && (t += e[n]);
    }
    return void 0 !== t ? t : e;
  }
  function dt(e, t) {
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
      _e && (n = n.replace(/\//g, '\\')),
      n
    );
  }
  function mt(e, t) {
    const n = t ? mr : m1;
    let s = '',
      { scheme: i, authority: a, path: o, query: l, fragment: c } = e;
    if (
      (i && ((s += i), (s += ':')),
      (a || 'file' === i) && ((s += Q), (s += Q)),
      a)
    ) {
      let u = a.indexOf('@');
      if (-1 !== u) {
        const h = a.substr(0, u);
        (a = a.substr(u + 1)),
          (u = h.indexOf(':')),
          -1 === u
            ? (s += n(h, !1))
            : ((s += n(h.substr(0, u), !1)),
              (s += ':'),
              (s += n(h.substr(u + 1), !1))),
          (s += '@');
      }
      (a = a.toLowerCase()),
        (u = a.indexOf(':')),
        -1 === u
          ? (s += n(a, !1))
          : ((s += n(a.substr(0, u), !1)), (s += a.substr(u)));
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
      s += n(o, !0);
    }
    return (
      l && ((s += '?'), (s += n(l, !1))),
      c && ((s += '#'), (s += t ? c : m1(c, !1))),
      s
    );
  }
  function g1(e) {
    try {
      return decodeURIComponent(e);
    } catch {
      return e.length > 3 ? e.substr(0, 3) + g1(e.substr(3)) : e;
    }
  }
  const b1 = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
  function He(e) {
    return e.match(b1) ? e.replace(b1, (t) => g1(t)) : e;
  }
  class z {
    constructor(t, n) {
      (this.lineNumber = t), (this.column = n);
    }
    with(t = this.lineNumber, n = this.column) {
      return t === this.lineNumber && n === this.column ? this : new z(t, n);
    }
    delta(t = 0, n = 0) {
      return this.with(this.lineNumber + t, this.column + n);
    }
    equals(t) {
      return z.equals(this, t);
    }
    static equals(t, n) {
      return (
        (!t && !n) ||
        (!!t && !!n && t.lineNumber === n.lineNumber && t.column === n.column)
      );
    }
    isBefore(t) {
      return z.isBefore(this, t);
    }
    static isBefore(t, n) {
      return (
        t.lineNumber < n.lineNumber ||
        (!(n.lineNumber < t.lineNumber) && t.column < n.column)
      );
    }
    isBeforeOrEqual(t) {
      return z.isBeforeOrEqual(this, t);
    }
    static isBeforeOrEqual(t, n) {
      return (
        t.lineNumber < n.lineNumber ||
        (!(n.lineNumber < t.lineNumber) && t.column <= n.column)
      );
    }
    static compare(t, n) {
      const s = 0 | t.lineNumber,
        i = 0 | n.lineNumber;
      return s === i ? (0 | t.column) - (0 | n.column) : s - i;
    }
    clone() {
      return new z(this.lineNumber, this.column);
    }
    toString() {
      return '(' + this.lineNumber + ',' + this.column + ')';
    }
    static lift(t) {
      return new z(t.lineNumber, t.column);
    }
    static isIPosition(t) {
      return (
        t && 'number' == typeof t.lineNumber && 'number' == typeof t.column
      );
    }
  }
  class R {
    constructor(t, n, s, i) {
      t > s || (t === s && n > i)
        ? ((this.startLineNumber = s),
          (this.startColumn = i),
          (this.endLineNumber = t),
          (this.endColumn = n))
        : ((this.startLineNumber = t),
          (this.startColumn = n),
          (this.endLineNumber = s),
          (this.endColumn = i));
    }
    isEmpty() {
      return R.isEmpty(this);
    }
    static isEmpty(t) {
      return (
        t.startLineNumber === t.endLineNumber && t.startColumn === t.endColumn
      );
    }
    containsPosition(t) {
      return R.containsPosition(this, t);
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
      return R.containsRange(this, t);
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
      return R.strictContainsRange(this, t);
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
      return R.plusRange(this, t);
    }
    static plusRange(t, n) {
      let s, i, a, o;
      return (
        n.startLineNumber < t.startLineNumber
          ? ((s = n.startLineNumber), (i = n.startColumn))
          : n.startLineNumber === t.startLineNumber
          ? ((s = n.startLineNumber),
            (i = Math.min(n.startColumn, t.startColumn)))
          : ((s = t.startLineNumber), (i = t.startColumn)),
        n.endLineNumber > t.endLineNumber
          ? ((a = n.endLineNumber), (o = n.endColumn))
          : n.endLineNumber === t.endLineNumber
          ? ((a = n.endLineNumber), (o = Math.max(n.endColumn, t.endColumn)))
          : ((a = t.endLineNumber), (o = t.endColumn)),
        new R(s, i, a, o)
      );
    }
    intersectRanges(t) {
      return R.intersectRanges(this, t);
    }
    static intersectRanges(t, n) {
      let s = t.startLineNumber,
        i = t.startColumn,
        a = t.endLineNumber,
        o = t.endColumn;
      const l = n.startLineNumber,
        c = n.startColumn,
        u = n.endLineNumber,
        h = n.endColumn;
      return (
        s < l ? ((s = l), (i = c)) : s === l && (i = Math.max(i, c)),
        a > u ? ((a = u), (o = h)) : a === u && (o = Math.min(o, h)),
        s > a || (s === a && i > o) ? null : new R(s, i, a, o)
      );
    }
    equalsRange(t) {
      return R.equalsRange(this, t);
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
      return R.getEndPosition(this);
    }
    static getEndPosition(t) {
      return new z(t.endLineNumber, t.endColumn);
    }
    getStartPosition() {
      return R.getStartPosition(this);
    }
    static getStartPosition(t) {
      return new z(t.startLineNumber, t.startColumn);
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
      return new R(this.startLineNumber, this.startColumn, t, n);
    }
    setStartPosition(t, n) {
      return new R(t, n, this.endLineNumber, this.endColumn);
    }
    collapseToStart() {
      return R.collapseToStart(this);
    }
    static collapseToStart(t) {
      return new R(
        t.startLineNumber,
        t.startColumn,
        t.startLineNumber,
        t.startColumn
      );
    }
    static fromPositions(t, n = t) {
      return new R(t.lineNumber, t.column, n.lineNumber, n.column);
    }
    static lift(t) {
      return t
        ? new R(t.startLineNumber, t.startColumn, t.endLineNumber, t.endColumn)
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
          const l = 0 | t.startColumn,
            c = 0 | n.startColumn;
          if (l === c) {
            const u = 0 | t.endLineNumber,
              h = 0 | n.endLineNumber;
            return u === h ? (0 | t.endColumn) - (0 | n.endColumn) : u - h;
          }
          return l - c;
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
  function _1(e, t, n, s) {
    return new ee(e, t, n).ComputeDiff(s);
  }
  class w1 {
    constructor(t) {
      const n = [],
        s = [];
      for (let i = 0, a = t.length; i < a; i++)
        (n[i] = gt(t[i], 1)), (s[i] = bt(t[i], 1));
      (this.lines = t), (this._startColumns = n), (this._endColumns = s);
    }
    getElements() {
      const t = [];
      for (let n = 0, s = this.lines.length; n < s; n++)
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
    createCharSequence(t, n, s) {
      const i = [],
        a = [],
        o = [];
      let l = 0;
      for (let c = n; c <= s; c++) {
        const u = this.lines[c],
          f = t ? this._endColumns[c] : u.length + 1;
        for (let d = t ? this._startColumns[c] : 1; d < f; d++)
          (i[l] = u.charCodeAt(d - 1)), (a[l] = c + 1), (o[l] = d), l++;
        !t &&
          c < s &&
          ((i[l] = 10), (a[l] = c + 1), (o[l] = u.length + 1), l++);
      }
      return new br(i, a, o);
    }
  }
  class br {
    constructor(t, n, s) {
      (this._charCodes = t), (this._lineNumbers = n), (this._columns = s);
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
  class ve {
    constructor(t, n, s, i, a, o, l, c) {
      (this.originalStartLineNumber = t),
        (this.originalStartColumn = n),
        (this.originalEndLineNumber = s),
        (this.originalEndColumn = i),
        (this.modifiedStartLineNumber = a),
        (this.modifiedStartColumn = o),
        (this.modifiedEndLineNumber = l),
        (this.modifiedEndColumn = c);
    }
    static createFromDiffChange(t, n, s) {
      const i = n.getStartLineNumber(t.originalStart),
        a = n.getStartColumn(t.originalStart),
        o = n.getEndLineNumber(t.originalStart + t.originalLength - 1),
        l = n.getEndColumn(t.originalStart + t.originalLength - 1),
        c = s.getStartLineNumber(t.modifiedStart),
        u = s.getStartColumn(t.modifiedStart),
        h = s.getEndLineNumber(t.modifiedStart + t.modifiedLength - 1),
        f = s.getEndColumn(t.modifiedStart + t.modifiedLength - 1);
      return new ve(i, a, o, l, c, u, h, f);
    }
  }
  class Ne {
    constructor(t, n, s, i, a) {
      (this.originalStartLineNumber = t),
        (this.originalEndLineNumber = n),
        (this.modifiedStartLineNumber = s),
        (this.modifiedEndLineNumber = i),
        (this.charChanges = a);
    }
    static createFromDiffResult(t, n, s, i, a, o, l) {
      let c, u, h, f, d;
      if (
        (0 === n.originalLength
          ? ((c = s.getStartLineNumber(n.originalStart) - 1), (u = 0))
          : ((c = s.getStartLineNumber(n.originalStart)),
            (u = s.getEndLineNumber(n.originalStart + n.originalLength - 1))),
        0 === n.modifiedLength
          ? ((h = i.getStartLineNumber(n.modifiedStart) - 1), (f = 0))
          : ((h = i.getStartLineNumber(n.modifiedStart)),
            (f = i.getEndLineNumber(n.modifiedStart + n.modifiedLength - 1))),
        o &&
          n.originalLength > 0 &&
          n.originalLength < 20 &&
          n.modifiedLength > 0 &&
          n.modifiedLength < 20 &&
          a())
      ) {
        const b = s.createCharSequence(
            t,
            n.originalStart,
            n.originalStart + n.originalLength - 1
          ),
          L = i.createCharSequence(
            t,
            n.modifiedStart,
            n.modifiedStart + n.modifiedLength - 1
          );
        if (b.getElements().length > 0 && L.getElements().length > 0) {
          let N = _1(b, L, a, !0).changes;
          l &&
            (N = (function _r(e) {
              if (e.length <= 1) return e;
              const t = [e[0]];
              let n = t[0];
              for (let s = 1, i = e.length; s < i; s++) {
                const a = e[s];
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
            })(N)),
            (d = []);
          for (let y = 0, k = N.length; y < k; y++)
            d.push(ve.createFromDiffChange(N[y], b, L));
        }
      }
      return new Ne(c, u, h, f, d);
    }
  }
  class wr {
    constructor(t, n, s) {
      (this.shouldComputeCharChanges = s.shouldComputeCharChanges),
        (this.shouldPostProcessCharChanges = s.shouldPostProcessCharChanges),
        (this.shouldIgnoreTrimWhitespace = s.shouldIgnoreTrimWhitespace),
        (this.shouldMakePrettyDiff = s.shouldMakePrettyDiff),
        (this.originalLines = t),
        (this.modifiedLines = n),
        (this.original = new w1(t)),
        (this.modified = new w1(n)),
        (this.continueLineDiff = C1(s.maxComputationTime)),
        (this.continueCharDiff = C1(
          0 === s.maxComputationTime ? 0 : Math.min(s.maxComputationTime, 5e3)
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
      const t = _1(
          this.original,
          this.modified,
          this.continueLineDiff,
          this.shouldMakePrettyDiff
        ),
        n = t.changes,
        s = t.quitEarly;
      if (this.shouldIgnoreTrimWhitespace) {
        const l = [];
        for (let c = 0, u = n.length; c < u; c++)
          l.push(
            Ne.createFromDiffResult(
              this.shouldIgnoreTrimWhitespace,
              n[c],
              this.original,
              this.modified,
              this.continueCharDiff,
              this.shouldComputeCharChanges,
              this.shouldPostProcessCharChanges
            )
          );
        return { quitEarly: s, changes: l };
      }
      const i = [];
      let a = 0,
        o = 0;
      for (let l = -1, c = n.length; l < c; l++) {
        const u = l + 1 < c ? n[l + 1] : null,
          h = u ? u.originalStart : this.originalLines.length,
          f = u ? u.modifiedStart : this.modifiedLines.length;
        for (; a < h && o < f; ) {
          const d = this.originalLines[a],
            b = this.modifiedLines[o];
          if (d !== b) {
            {
              let L = gt(d, 1),
                N = gt(b, 1);
              for (
                ;
                L > 1 && N > 1 && d.charCodeAt(L - 2) === b.charCodeAt(N - 2);

              )
                L--, N--;
              (L > 1 || N > 1) &&
                this._pushTrimWhitespaceCharChange(i, a + 1, 1, L, o + 1, 1, N);
            }
            {
              let L = bt(d, 1),
                N = bt(b, 1);
              const y = d.length + 1,
                k = b.length + 1;
              for (
                ;
                L < y && N < k && d.charCodeAt(L - 1) === d.charCodeAt(N - 1);

              )
                L++, N++;
              (L < y || N < k) &&
                this._pushTrimWhitespaceCharChange(i, a + 1, L, y, o + 1, N, k);
            }
          }
          a++, o++;
        }
        u &&
          (i.push(
            Ne.createFromDiffResult(
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
      return { quitEarly: s, changes: i };
    }
    _pushTrimWhitespaceCharChange(t, n, s, i, a, o, l) {
      if (this._mergeTrimWhitespaceCharChange(t, n, s, i, a, o, l)) return;
      let c;
      this.shouldComputeCharChanges && (c = [new ve(n, s, n, i, a, o, a, l)]),
        t.push(new Ne(n, n, a, a, c));
    }
    _mergeTrimWhitespaceCharChange(t, n, s, i, a, o, l) {
      const c = t.length;
      if (0 === c) return !1;
      const u = t[c - 1];
      return (
        0 !== u.originalEndLineNumber &&
        0 !== u.modifiedEndLineNumber &&
        u.originalEndLineNumber + 1 === n &&
        u.modifiedEndLineNumber + 1 === a &&
        ((u.originalEndLineNumber = n),
        (u.modifiedEndLineNumber = a),
        this.shouldComputeCharChanges &&
          u.charChanges &&
          u.charChanges.push(new ve(n, s, n, i, a, o, a, l)),
        !0)
      );
    }
  }
  function gt(e, t) {
    const n = (function Rn(e) {
      for (let t = 0, n = e.length; t < n; t++) {
        const s = e.charCodeAt(t);
        if (32 !== s && 9 !== s) return t;
      }
      return -1;
    })(e);
    return -1 === n ? t : n + 1;
  }
  function bt(e, t) {
    const n = (function Bn(e, t = e.length - 1) {
      for (let n = t; n >= 0; n--) {
        const s = e.charCodeAt(n);
        if (32 !== s && 9 !== s) return n;
      }
      return -1;
    })(e);
    return -1 === n ? t : n + 2;
  }
  function C1(e) {
    if (0 === e) return () => !0;
    const t = Date.now();
    return () => Date.now() - t < e;
  }
  var v1, e;
  function N1(e) {
    return e < 0 ? 0 : e > 255 ? 255 : 0 | e;
  }
  function he(e) {
    return e < 0 ? 0 : e > 4294967295 ? 4294967295 : 0 | e;
  }
  ((e = v1 || (v1 = {})).isLessThan = function t(i) {
    return i < 0;
  }),
    (e.isGreaterThan = function n(i) {
      return i > 0;
    }),
    (e.isNeitherLessOrGreaterThan = function s(i) {
      return 0 === i;
    }),
    (e.greaterThan = 1),
    (e.lessThan = -1),
    (e.neitherLessOrGreaterThan = 0);
  class Nr {
    constructor(t) {
      (this.values = t),
        (this.prefixSum = new Uint32Array(t.length)),
        (this.prefixSumValidIndex = new Int32Array(1)),
        (this.prefixSumValidIndex[0] = -1);
    }
    insertValues(t, n) {
      t = he(t);
      const s = this.values,
        i = this.prefixSum,
        a = n.length;
      return (
        0 !== a &&
        ((this.values = new Uint32Array(s.length + a)),
        this.values.set(s.subarray(0, t), 0),
        this.values.set(s.subarray(t), t + a),
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
        (t = he(t)),
        (n = he(n)),
        this.values[t] !== n &&
          ((this.values[t] = n),
          t - 1 < this.prefixSumValidIndex[0] &&
            (this.prefixSumValidIndex[0] = t - 1),
          !0)
      );
    }
    removeValues(t, n) {
      (t = he(t)), (n = he(n));
      const s = this.values,
        i = this.prefixSum;
      if (t >= s.length) return !1;
      const a = s.length - t;
      return (
        n >= a && (n = a),
        0 !== n &&
          ((this.values = new Uint32Array(s.length - n)),
          this.values.set(s.subarray(0, t), 0),
          this.values.set(s.subarray(t + n), t),
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
      return t < 0 ? 0 : ((t = he(t)), this._getPrefixSum(t));
    }
    _getPrefixSum(t) {
      if (t <= this.prefixSumValidIndex[0]) return this.prefixSum[t];
      let n = this.prefixSumValidIndex[0] + 1;
      0 === n && ((this.prefixSum[0] = this.values[0]), n++),
        t >= this.values.length && (t = this.values.length - 1);
      for (let s = n; s <= t; s++)
        this.prefixSum[s] = this.prefixSum[s - 1] + this.values[s];
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
        s = this.values.length - 1,
        i = 0,
        a = 0,
        o = 0;
      for (; n <= s; )
        if (
          ((i = (n + (s - n) / 2) | 0),
          (a = this.prefixSum[i]),
          (o = a - this.values[i]),
          t < o)
        )
          s = i - 1;
        else {
          if (!(t >= a)) break;
          n = i + 1;
        }
      return new S1(i, t - o);
    }
  }
  class S1 {
    constructor(t, n) {
      (this.index = t),
        (this.remainder = n),
        (this._prefixSumIndexOfResultBrand = void 0),
        (this.index = t),
        (this.remainder = n);
    }
  }
  class Sr {
    constructor(t, n, s, i) {
      (this._uri = t),
        (this._lines = n),
        (this._eol = s),
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
      for (const s of n)
        this._acceptDeleteRange(s.range),
          this._acceptInsertText(
            new z(s.range.startLineNumber, s.range.startColumn),
            s.text
          );
      (this._versionId = t.versionId), (this._cachedTextValue = null);
    }
    _ensureLineStarts() {
      if (!this._lineStarts) {
        const t = this._eol.length,
          n = this._lines.length,
          s = new Uint32Array(n);
        for (let i = 0; i < n; i++) s[i] = this._lines[i].length + t;
        this._lineStarts = new Nr(s);
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
      const s = (function Pn(e) {
        return e.split(/\r\n|\r|\n/);
      })(n);
      if (1 === s.length)
        return void this._setLineText(
          t.lineNumber - 1,
          this._lines[t.lineNumber - 1].substring(0, t.column - 1) +
            s[0] +
            this._lines[t.lineNumber - 1].substring(t.column - 1)
        );
      (s[s.length - 1] += this._lines[t.lineNumber - 1].substring(
        t.column - 1
      )),
        this._setLineText(
          t.lineNumber - 1,
          this._lines[t.lineNumber - 1].substring(0, t.column - 1) + s[0]
        );
      const i = new Uint32Array(s.length - 1);
      for (let a = 1; a < s.length; a++)
        this._lines.splice(t.lineNumber + a - 1, 0, s[a]),
          (i[a - 1] = s[a].length + this._eol.length);
      this._lineStarts && this._lineStarts.insertValues(t.lineNumber, i);
    }
  }
  const A1 = (function yr(e = '') {
      let t = '(-?\\d*\\.\\d\\w*)|([^';
      for (const n of '`~!@#$%^&*()-=+[{]}\\|;:\'",.<>/?')
        e.indexOf(n) >= 0 || (t += '\\' + n);
      return (t += '\\s]+)'), new RegExp(t, 'g');
    })(),
    y1 = new Pe();
  function _t(e, t, n, s, i) {
    if ((i || (i = ke.first(y1)), n.length > i.maxLen)) {
      let u = e - i.maxLen / 2;
      return (
        u < 0 ? (u = 0) : (s += u),
        _t(e, t, (n = n.substring(u, e + i.maxLen / 2)), s, i)
      );
    }
    const a = Date.now(),
      o = e - 1 - s;
    let l = -1,
      c = null;
    for (let u = 1; !(Date.now() - a >= i.timeBudget); u++) {
      const h = o - i.windowSize * u;
      t.lastIndex = Math.max(0, h);
      const f = xr(t, n, o, l);
      if ((!f && c) || ((c = f), h <= 0)) break;
      l = h;
    }
    if (c) {
      const u = {
        word: c[0],
        startColumn: s + 1 + c.index,
        endColumn: s + 1 + c.index + c[0].length,
      };
      return (t.lastIndex = 0), u;
    }
    return null;
  }
  function xr(e, t, n, s) {
    let i;
    for (; (i = e.exec(t)); ) {
      const a = i.index || 0;
      if (a <= n && e.lastIndex >= n) return i;
      if (s > 0 && a > s) return null;
    }
    return null;
  }
  y1.unshift({ maxLen: 1e3, windowSize: 15, timeBudget: 150 });
  class Se {
    constructor(t) {
      const n = N1(t);
      (this._defaultValue = n),
        (this._asciiMap = Se._createAsciiMap(n)),
        (this._map = new Map());
    }
    static _createAsciiMap(t) {
      const n = new Uint8Array(256);
      for (let s = 0; s < 256; s++) n[s] = t;
      return n;
    }
    set(t, n) {
      const s = N1(n);
      t >= 0 && t < 256 ? (this._asciiMap[t] = s) : this._map.set(t, s);
    }
    get(t) {
      return t >= 0 && t < 256
        ? this._asciiMap[t]
        : this._map.get(t) || this._defaultValue;
    }
  }
  class kr {
    constructor(t, n, s) {
      const i = new Uint8Array(t * n);
      for (let a = 0, o = t * n; a < o; a++) i[a] = s;
      (this._data = i), (this.rows = t), (this.cols = n);
    }
    get(t, n) {
      return this._data[t * this.cols + n];
    }
    set(t, n, s) {
      this._data[t * this.cols + n] = s;
    }
  }
  class Fr {
    constructor(t) {
      let n = 0,
        s = 0;
      for (let a = 0, o = t.length; a < o; a++) {
        const [l, c, u] = t[a];
        c > n && (n = c), l > s && (s = l), u > s && (s = u);
      }
      n++, s++;
      const i = new kr(s, n, 0);
      for (let a = 0, o = t.length; a < o; a++) {
        const [l, c, u] = t[a];
        i.set(l, c, u);
      }
      (this._states = i), (this._maxCharCode = n);
    }
    nextState(t, n) {
      return n < 0 || n >= this._maxCharCode ? 0 : this._states.get(t, n);
    }
  }
  let wt = null,
    Ae = null;
  class Oe {
    static _createLink(t, n, s, i, a) {
      let o = a - 1;
      do {
        const l = n.charCodeAt(o);
        if (2 !== t.get(l)) break;
        o--;
      } while (o > i);
      if (i > 0) {
        const l = n.charCodeAt(i - 1),
          c = n.charCodeAt(o);
        ((40 === l && 41 === c) ||
          (91 === l && 93 === c) ||
          (123 === l && 125 === c)) &&
          o--;
      }
      return {
        range: {
          startLineNumber: s,
          startColumn: i + 1,
          endLineNumber: s,
          endColumn: o + 2,
        },
        url: n.substring(i, o + 1),
      };
    }
    static computeLinks(
      t,
      n = (function Er() {
        return (
          null === wt &&
            (wt = new Fr([
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
          wt
        );
      })()
    ) {
      const s = (function Dr() {
          if (null === Ae) {
            Ae = new Se(0);
            const e =
              ' \t<>\'"\u3001\u3002\uff61\uff64\uff0c\uff0e\uff1a\uff1b\u2018\u3008\u300c\u300e\u3014\uff08\uff3b\uff5b\uff62\uff63\uff5d\uff3d\uff09\u3015\u300f\u300d\u3009\u2019\uff40\uff5e\u2026';
            for (let n = 0; n < e.length; n++) Ae.set(e.charCodeAt(n), 1);
            const t = '.,;:';
            for (let n = 0; n < t.length; n++) Ae.set(t.charCodeAt(n), 2);
          }
          return Ae;
        })(),
        i = [];
      for (let a = 1, o = t.getLineCount(); a <= o; a++) {
        const l = t.getLineContent(a),
          c = l.length;
        let u = 0,
          h = 0,
          f = 0,
          d = 1,
          b = !1,
          L = !1,
          N = !1,
          y = !1;
        for (; u < c; ) {
          let k = !1;
          const F = l.charCodeAt(u);
          if (13 === d) {
            let A;
            switch (F) {
              case 40:
                (b = !0), (A = 0);
                break;
              case 41:
                A = b ? 0 : 1;
                break;
              case 91:
                (N = !0), (L = !0), (A = 0);
                break;
              case 93:
                (N = !1), (A = L ? 0 : 1);
                break;
              case 123:
                (y = !0), (A = 0);
                break;
              case 125:
                A = y ? 0 : 1;
                break;
              case 39:
                A = 39 === f ? 1 : 0;
                break;
              case 34:
                A = 34 === f ? 1 : 0;
                break;
              case 96:
                A = 96 === f ? 1 : 0;
                break;
              case 42:
                A = 42 === f ? 1 : 0;
                break;
              case 124:
                A = 124 === f ? 1 : 0;
                break;
              case 32:
                A = N ? 0 : 1;
                break;
              default:
                A = s.get(F);
            }
            1 === A && (i.push(Oe._createLink(s, l, a, h, u)), (k = !0));
          } else if (12 === d) {
            let A;
            91 === F ? ((L = !0), (A = 0)) : (A = s.get(F)),
              1 === A ? (k = !0) : (d = 13);
          } else (d = n.nextState(d, F)), 0 === d && (k = !0);
          k && ((d = 1), (b = !1), (L = !1), (y = !1), (h = u + 1), (f = F)),
            u++;
        }
        13 === d && i.push(Oe._createLink(s, l, a, h, c));
      }
      return i;
    }
  }
  class Ct {
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
    navigateValueSet(t, n, s, i, a) {
      if (t && n) {
        const o = this.doNavigateValueSet(n, a);
        if (o) return { range: t, value: o };
      }
      if (s && i) {
        const o = this.doNavigateValueSet(i, a);
        if (o) return { range: s, value: o };
      }
      return null;
    }
    doNavigateValueSet(t, n) {
      const s = this.numberReplace(t, n);
      return null !== s ? s : this.textReplace(t, n);
    }
    numberReplace(t, n) {
      const s = Math.pow(10, t.length - (t.lastIndexOf('.') + 1));
      let i = Number(t);
      const a = parseFloat(t);
      return isNaN(i) || isNaN(a) || i !== a
        ? null
        : 0 !== i || n
        ? ((i = Math.floor(i * s)), (i += n ? s : -s), String(i / s))
        : null;
    }
    textReplace(t, n) {
      return this.valueSetsReplace(this._defaultValueSet, t, n);
    }
    valueSetsReplace(t, n, s) {
      let i = null;
      for (let a = 0, o = t.length; null === i && a < o; a++)
        i = this.valueSetReplace(t[a], n, s);
      return i;
    }
    valueSetReplace(t, n, s) {
      let i = t.indexOf(n);
      return i >= 0
        ? ((i += s ? 1 : -1),
          i < 0 ? (i = t.length - 1) : (i %= t.length),
          t[i])
        : null;
    }
  }
  Ct.INSTANCE = new Ct();
  const M1 = Object.freeze(function (e, t) {
    const n = setTimeout(e.bind(t), 0);
    return {
      dispose() {
        clearTimeout(n);
      },
    };
  });
  var ze;
  !(function (e) {
    (e.isCancellationToken = function t(n) {
      return (
        n === e.None ||
        n === e.Cancelled ||
        n instanceof $e ||
        (!(!n || 'object' != typeof n) &&
          'boolean' == typeof n.isCancellationRequested &&
          'function' == typeof n.onCancellationRequested)
      );
    }),
      (e.None = Object.freeze({
        isCancellationRequested: !1,
        onCancellationRequested: We.None,
      })),
      (e.Cancelled = Object.freeze({
        isCancellationRequested: !0,
        onCancellationRequested: M1,
      }));
  })(ze || (ze = {}));
  class $e {
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
        ? M1
        : (this._emitter || (this._emitter = new j()), this._emitter.event);
    }
    dispose() {
      this._emitter && (this._emitter.dispose(), (this._emitter = null));
    }
  }
  class Rr {
    constructor(t) {
      (this._token = void 0),
        (this._parentListener = void 0),
        (this._parentListener =
          t && t.onCancellationRequested(this.cancel, this));
    }
    get token() {
      return this._token || (this._token = new $e()), this._token;
    }
    cancel() {
      this._token
        ? this._token instanceof $e && this._token.cancel()
        : (this._token = ze.Cancelled);
    }
    dispose(t = !1) {
      t && this.cancel(),
        this._parentListener && this._parentListener.dispose(),
        this._token
          ? this._token instanceof $e && this._token.dispose()
          : (this._token = ze.None);
    }
  }
  class pt {
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
  const Ge = new pt(),
    Lt = new pt(),
    vt = new pt(),
    Br = new Array(230),
    Vr = {},
    Ir = [],
    Tr = Object.create(null),
    Ur = Object.create(null),
    x1 = [],
    Nt = [];
  for (let e = 0; e <= 193; e++) x1[e] = -1;
  for (let e = 0; e <= 127; e++) Nt[e] = -1;
  var k1, F1;
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
      s = [];
    for (const i of t) {
      const [a, o, l, c, u, h, f, d, b, L] = i;
      if (
        (s[l] ||
          ((s[l] = !0),
          (Ir[l] = c),
          (Tr[c] = l),
          (Ur[c.toLowerCase()] = l),
          o &&
            ((x1[l] = u),
            0 !== u &&
              3 !== u &&
              5 !== u &&
              4 !== u &&
              6 !== u &&
              57 !== u &&
              (Nt[u] = l))),
        !n[u])
      ) {
        if (((n[u] = !0), !h))
          throw new Error(
            `String representation missing for key code ${u} around scan code ${c}`
          );
        Ge.define(u, h), Lt.define(u, b || h), vt.define(u, L || b || h);
      }
      f && (Br[f] = u), d && (Vr[d] = u);
    }
    Nt[3] = 46;
  })(),
    (function (e) {
      (e.toString = function t(l) {
        return Ge.keyCodeToStr(l);
      }),
        (e.fromString = function n(l) {
          return Ge.strToKeyCode(l);
        }),
        (e.toUserSettingsUS = function s(l) {
          return Lt.keyCodeToStr(l);
        }),
        (e.toUserSettingsGeneral = function i(l) {
          return vt.keyCodeToStr(l);
        }),
        (e.fromUserSettings = function a(l) {
          return Lt.strToKeyCode(l) || vt.strToKeyCode(l);
        }),
        (e.toElectronAccelerator = function o(l) {
          if (l >= 93 && l <= 108) return null;
          switch (l) {
            case 16:
              return 'Up';
            case 18:
              return 'Down';
            case 15:
              return 'Left';
            case 17:
              return 'Right';
          }
          return Ge.keyCodeToStr(l);
        });
    })(k1 || (k1 = {}));
  class $ extends R {
    constructor(t, n, s, i) {
      super(t, n, s, i),
        (this.selectionStartLineNumber = t),
        (this.selectionStartColumn = n),
        (this.positionLineNumber = s),
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
      return $.selectionsEqual(this, t);
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
        ? new $(this.startLineNumber, this.startColumn, t, n)
        : new $(t, n, this.startLineNumber, this.startColumn);
    }
    getPosition() {
      return new z(this.positionLineNumber, this.positionColumn);
    }
    getSelectionStart() {
      return new z(this.selectionStartLineNumber, this.selectionStartColumn);
    }
    setStartPosition(t, n) {
      return 0 === this.getDirection()
        ? new $(t, n, this.endLineNumber, this.endColumn)
        : new $(this.endLineNumber, this.endColumn, t, n);
    }
    static fromPositions(t, n = t) {
      return new $(t.lineNumber, t.column, n.lineNumber, n.column);
    }
    static fromRange(t, n) {
      return 0 === n
        ? new $(t.startLineNumber, t.startColumn, t.endLineNumber, t.endColumn)
        : new $(t.endLineNumber, t.endColumn, t.startLineNumber, t.startColumn);
    }
    static liftSelection(t) {
      return new $(
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
      for (let s = 0, i = t.length; s < i; s++)
        if (!this.selectionsEqual(t[s], n[s])) return !1;
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
    static createWithDirection(t, n, s, i, a) {
      return 0 === a ? new $(t, n, s, i) : new $(s, i, t, n);
    }
  }
  class r {
    constructor(t, n, s) {
      (this.id = t),
        (this.definition = n),
        (this.description = s),
        r._allCodicons.push(this);
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
      return r._allCodicons;
    }
  }
  (r._allCodicons = []),
    (r.add = new r('add', { fontCharacter: '\\ea60' })),
    (r.plus = new r('plus', r.add.definition)),
    (r.gistNew = new r('gist-new', r.add.definition)),
    (r.repoCreate = new r('repo-create', r.add.definition)),
    (r.lightbulb = new r('lightbulb', { fontCharacter: '\\ea61' })),
    (r.lightBulb = new r('light-bulb', { fontCharacter: '\\ea61' })),
    (r.repo = new r('repo', { fontCharacter: '\\ea62' })),
    (r.repoDelete = new r('repo-delete', { fontCharacter: '\\ea62' })),
    (r.gistFork = new r('gist-fork', { fontCharacter: '\\ea63' })),
    (r.repoForked = new r('repo-forked', { fontCharacter: '\\ea63' })),
    (r.gitPullRequest = new r('git-pull-request', { fontCharacter: '\\ea64' })),
    (r.gitPullRequestAbandoned = new r('git-pull-request-abandoned', {
      fontCharacter: '\\ea64',
    })),
    (r.recordKeys = new r('record-keys', { fontCharacter: '\\ea65' })),
    (r.keyboard = new r('keyboard', { fontCharacter: '\\ea65' })),
    (r.tag = new r('tag', { fontCharacter: '\\ea66' })),
    (r.tagAdd = new r('tag-add', { fontCharacter: '\\ea66' })),
    (r.tagRemove = new r('tag-remove', { fontCharacter: '\\ea66' })),
    (r.person = new r('person', { fontCharacter: '\\ea67' })),
    (r.personFollow = new r('person-follow', { fontCharacter: '\\ea67' })),
    (r.personOutline = new r('person-outline', { fontCharacter: '\\ea67' })),
    (r.personFilled = new r('person-filled', { fontCharacter: '\\ea67' })),
    (r.gitBranch = new r('git-branch', { fontCharacter: '\\ea68' })),
    (r.gitBranchCreate = new r('git-branch-create', {
      fontCharacter: '\\ea68',
    })),
    (r.gitBranchDelete = new r('git-branch-delete', {
      fontCharacter: '\\ea68',
    })),
    (r.sourceControl = new r('source-control', { fontCharacter: '\\ea68' })),
    (r.mirror = new r('mirror', { fontCharacter: '\\ea69' })),
    (r.mirrorPublic = new r('mirror-public', { fontCharacter: '\\ea69' })),
    (r.star = new r('star', { fontCharacter: '\\ea6a' })),
    (r.starAdd = new r('star-add', { fontCharacter: '\\ea6a' })),
    (r.starDelete = new r('star-delete', { fontCharacter: '\\ea6a' })),
    (r.starEmpty = new r('star-empty', { fontCharacter: '\\ea6a' })),
    (r.comment = new r('comment', { fontCharacter: '\\ea6b' })),
    (r.commentAdd = new r('comment-add', { fontCharacter: '\\ea6b' })),
    (r.alert = new r('alert', { fontCharacter: '\\ea6c' })),
    (r.warning = new r('warning', { fontCharacter: '\\ea6c' })),
    (r.search = new r('search', { fontCharacter: '\\ea6d' })),
    (r.searchSave = new r('search-save', { fontCharacter: '\\ea6d' })),
    (r.logOut = new r('log-out', { fontCharacter: '\\ea6e' })),
    (r.signOut = new r('sign-out', { fontCharacter: '\\ea6e' })),
    (r.logIn = new r('log-in', { fontCharacter: '\\ea6f' })),
    (r.signIn = new r('sign-in', { fontCharacter: '\\ea6f' })),
    (r.eye = new r('eye', { fontCharacter: '\\ea70' })),
    (r.eyeUnwatch = new r('eye-unwatch', { fontCharacter: '\\ea70' })),
    (r.eyeWatch = new r('eye-watch', { fontCharacter: '\\ea70' })),
    (r.circleFilled = new r('circle-filled', { fontCharacter: '\\ea71' })),
    (r.primitiveDot = new r('primitive-dot', { fontCharacter: '\\ea71' })),
    (r.closeDirty = new r('close-dirty', { fontCharacter: '\\ea71' })),
    (r.debugBreakpoint = new r('debug-breakpoint', {
      fontCharacter: '\\ea71',
    })),
    (r.debugBreakpointDisabled = new r('debug-breakpoint-disabled', {
      fontCharacter: '\\ea71',
    })),
    (r.debugHint = new r('debug-hint', { fontCharacter: '\\ea71' })),
    (r.primitiveSquare = new r('primitive-square', {
      fontCharacter: '\\ea72',
    })),
    (r.edit = new r('edit', { fontCharacter: '\\ea73' })),
    (r.pencil = new r('pencil', { fontCharacter: '\\ea73' })),
    (r.info = new r('info', { fontCharacter: '\\ea74' })),
    (r.issueOpened = new r('issue-opened', { fontCharacter: '\\ea74' })),
    (r.gistPrivate = new r('gist-private', { fontCharacter: '\\ea75' })),
    (r.gitForkPrivate = new r('git-fork-private', { fontCharacter: '\\ea75' })),
    (r.lock = new r('lock', { fontCharacter: '\\ea75' })),
    (r.mirrorPrivate = new r('mirror-private', { fontCharacter: '\\ea75' })),
    (r.close = new r('close', { fontCharacter: '\\ea76' })),
    (r.removeClose = new r('remove-close', { fontCharacter: '\\ea76' })),
    (r.x = new r('x', { fontCharacter: '\\ea76' })),
    (r.repoSync = new r('repo-sync', { fontCharacter: '\\ea77' })),
    (r.sync = new r('sync', { fontCharacter: '\\ea77' })),
    (r.clone = new r('clone', { fontCharacter: '\\ea78' })),
    (r.desktopDownload = new r('desktop-download', {
      fontCharacter: '\\ea78',
    })),
    (r.beaker = new r('beaker', { fontCharacter: '\\ea79' })),
    (r.microscope = new r('microscope', { fontCharacter: '\\ea79' })),
    (r.vm = new r('vm', { fontCharacter: '\\ea7a' })),
    (r.deviceDesktop = new r('device-desktop', { fontCharacter: '\\ea7a' })),
    (r.file = new r('file', { fontCharacter: '\\ea7b' })),
    (r.fileText = new r('file-text', { fontCharacter: '\\ea7b' })),
    (r.more = new r('more', { fontCharacter: '\\ea7c' })),
    (r.ellipsis = new r('ellipsis', { fontCharacter: '\\ea7c' })),
    (r.kebabHorizontal = new r('kebab-horizontal', {
      fontCharacter: '\\ea7c',
    })),
    (r.mailReply = new r('mail-reply', { fontCharacter: '\\ea7d' })),
    (r.reply = new r('reply', { fontCharacter: '\\ea7d' })),
    (r.organization = new r('organization', { fontCharacter: '\\ea7e' })),
    (r.organizationFilled = new r('organization-filled', {
      fontCharacter: '\\ea7e',
    })),
    (r.organizationOutline = new r('organization-outline', {
      fontCharacter: '\\ea7e',
    })),
    (r.newFile = new r('new-file', { fontCharacter: '\\ea7f' })),
    (r.fileAdd = new r('file-add', { fontCharacter: '\\ea7f' })),
    (r.newFolder = new r('new-folder', { fontCharacter: '\\ea80' })),
    (r.fileDirectoryCreate = new r('file-directory-create', {
      fontCharacter: '\\ea80',
    })),
    (r.trash = new r('trash', { fontCharacter: '\\ea81' })),
    (r.trashcan = new r('trashcan', { fontCharacter: '\\ea81' })),
    (r.history = new r('history', { fontCharacter: '\\ea82' })),
    (r.clock = new r('clock', { fontCharacter: '\\ea82' })),
    (r.folder = new r('folder', { fontCharacter: '\\ea83' })),
    (r.fileDirectory = new r('file-directory', { fontCharacter: '\\ea83' })),
    (r.symbolFolder = new r('symbol-folder', { fontCharacter: '\\ea83' })),
    (r.logoGithub = new r('logo-github', { fontCharacter: '\\ea84' })),
    (r.markGithub = new r('mark-github', { fontCharacter: '\\ea84' })),
    (r.github = new r('github', { fontCharacter: '\\ea84' })),
    (r.terminal = new r('terminal', { fontCharacter: '\\ea85' })),
    (r.console = new r('console', { fontCharacter: '\\ea85' })),
    (r.repl = new r('repl', { fontCharacter: '\\ea85' })),
    (r.zap = new r('zap', { fontCharacter: '\\ea86' })),
    (r.symbolEvent = new r('symbol-event', { fontCharacter: '\\ea86' })),
    (r.error = new r('error', { fontCharacter: '\\ea87' })),
    (r.stop = new r('stop', { fontCharacter: '\\ea87' })),
    (r.variable = new r('variable', { fontCharacter: '\\ea88' })),
    (r.symbolVariable = new r('symbol-variable', { fontCharacter: '\\ea88' })),
    (r.array = new r('array', { fontCharacter: '\\ea8a' })),
    (r.symbolArray = new r('symbol-array', { fontCharacter: '\\ea8a' })),
    (r.symbolModule = new r('symbol-module', { fontCharacter: '\\ea8b' })),
    (r.symbolPackage = new r('symbol-package', { fontCharacter: '\\ea8b' })),
    (r.symbolNamespace = new r('symbol-namespace', {
      fontCharacter: '\\ea8b',
    })),
    (r.symbolObject = new r('symbol-object', { fontCharacter: '\\ea8b' })),
    (r.symbolMethod = new r('symbol-method', { fontCharacter: '\\ea8c' })),
    (r.symbolFunction = new r('symbol-function', { fontCharacter: '\\ea8c' })),
    (r.symbolConstructor = new r('symbol-constructor', {
      fontCharacter: '\\ea8c',
    })),
    (r.symbolBoolean = new r('symbol-boolean', { fontCharacter: '\\ea8f' })),
    (r.symbolNull = new r('symbol-null', { fontCharacter: '\\ea8f' })),
    (r.symbolNumeric = new r('symbol-numeric', { fontCharacter: '\\ea90' })),
    (r.symbolNumber = new r('symbol-number', { fontCharacter: '\\ea90' })),
    (r.symbolStructure = new r('symbol-structure', {
      fontCharacter: '\\ea91',
    })),
    (r.symbolStruct = new r('symbol-struct', { fontCharacter: '\\ea91' })),
    (r.symbolParameter = new r('symbol-parameter', {
      fontCharacter: '\\ea92',
    })),
    (r.symbolTypeParameter = new r('symbol-type-parameter', {
      fontCharacter: '\\ea92',
    })),
    (r.symbolKey = new r('symbol-key', { fontCharacter: '\\ea93' })),
    (r.symbolText = new r('symbol-text', { fontCharacter: '\\ea93' })),
    (r.symbolReference = new r('symbol-reference', {
      fontCharacter: '\\ea94',
    })),
    (r.goToFile = new r('go-to-file', { fontCharacter: '\\ea94' })),
    (r.symbolEnum = new r('symbol-enum', { fontCharacter: '\\ea95' })),
    (r.symbolValue = new r('symbol-value', { fontCharacter: '\\ea95' })),
    (r.symbolRuler = new r('symbol-ruler', { fontCharacter: '\\ea96' })),
    (r.symbolUnit = new r('symbol-unit', { fontCharacter: '\\ea96' })),
    (r.activateBreakpoints = new r('activate-breakpoints', {
      fontCharacter: '\\ea97',
    })),
    (r.archive = new r('archive', { fontCharacter: '\\ea98' })),
    (r.arrowBoth = new r('arrow-both', { fontCharacter: '\\ea99' })),
    (r.arrowDown = new r('arrow-down', { fontCharacter: '\\ea9a' })),
    (r.arrowLeft = new r('arrow-left', { fontCharacter: '\\ea9b' })),
    (r.arrowRight = new r('arrow-right', { fontCharacter: '\\ea9c' })),
    (r.arrowSmallDown = new r('arrow-small-down', { fontCharacter: '\\ea9d' })),
    (r.arrowSmallLeft = new r('arrow-small-left', { fontCharacter: '\\ea9e' })),
    (r.arrowSmallRight = new r('arrow-small-right', {
      fontCharacter: '\\ea9f',
    })),
    (r.arrowSmallUp = new r('arrow-small-up', { fontCharacter: '\\eaa0' })),
    (r.arrowUp = new r('arrow-up', { fontCharacter: '\\eaa1' })),
    (r.bell = new r('bell', { fontCharacter: '\\eaa2' })),
    (r.bold = new r('bold', { fontCharacter: '\\eaa3' })),
    (r.book = new r('book', { fontCharacter: '\\eaa4' })),
    (r.bookmark = new r('bookmark', { fontCharacter: '\\eaa5' })),
    (r.debugBreakpointConditionalUnverified = new r(
      'debug-breakpoint-conditional-unverified',
      { fontCharacter: '\\eaa6' }
    )),
    (r.debugBreakpointConditional = new r('debug-breakpoint-conditional', {
      fontCharacter: '\\eaa7',
    })),
    (r.debugBreakpointConditionalDisabled = new r(
      'debug-breakpoint-conditional-disabled',
      { fontCharacter: '\\eaa7' }
    )),
    (r.debugBreakpointDataUnverified = new r(
      'debug-breakpoint-data-unverified',
      { fontCharacter: '\\eaa8' }
    )),
    (r.debugBreakpointData = new r('debug-breakpoint-data', {
      fontCharacter: '\\eaa9',
    })),
    (r.debugBreakpointDataDisabled = new r('debug-breakpoint-data-disabled', {
      fontCharacter: '\\eaa9',
    })),
    (r.debugBreakpointLogUnverified = new r('debug-breakpoint-log-unverified', {
      fontCharacter: '\\eaaa',
    })),
    (r.debugBreakpointLog = new r('debug-breakpoint-log', {
      fontCharacter: '\\eaab',
    })),
    (r.debugBreakpointLogDisabled = new r('debug-breakpoint-log-disabled', {
      fontCharacter: '\\eaab',
    })),
    (r.briefcase = new r('briefcase', { fontCharacter: '\\eaac' })),
    (r.broadcast = new r('broadcast', { fontCharacter: '\\eaad' })),
    (r.browser = new r('browser', { fontCharacter: '\\eaae' })),
    (r.bug = new r('bug', { fontCharacter: '\\eaaf' })),
    (r.calendar = new r('calendar', { fontCharacter: '\\eab0' })),
    (r.caseSensitive = new r('case-sensitive', { fontCharacter: '\\eab1' })),
    (r.check = new r('check', { fontCharacter: '\\eab2' })),
    (r.checklist = new r('checklist', { fontCharacter: '\\eab3' })),
    (r.chevronDown = new r('chevron-down', { fontCharacter: '\\eab4' })),
    (r.dropDownButton = new r('drop-down-button', r.chevronDown.definition)),
    (r.chevronLeft = new r('chevron-left', { fontCharacter: '\\eab5' })),
    (r.chevronRight = new r('chevron-right', { fontCharacter: '\\eab6' })),
    (r.chevronUp = new r('chevron-up', { fontCharacter: '\\eab7' })),
    (r.chromeClose = new r('chrome-close', { fontCharacter: '\\eab8' })),
    (r.chromeMaximize = new r('chrome-maximize', { fontCharacter: '\\eab9' })),
    (r.chromeMinimize = new r('chrome-minimize', { fontCharacter: '\\eaba' })),
    (r.chromeRestore = new r('chrome-restore', { fontCharacter: '\\eabb' })),
    (r.circleOutline = new r('circle-outline', { fontCharacter: '\\eabc' })),
    (r.debugBreakpointUnverified = new r('debug-breakpoint-unverified', {
      fontCharacter: '\\eabc',
    })),
    (r.circleSlash = new r('circle-slash', { fontCharacter: '\\eabd' })),
    (r.circuitBoard = new r('circuit-board', { fontCharacter: '\\eabe' })),
    (r.clearAll = new r('clear-all', { fontCharacter: '\\eabf' })),
    (r.clippy = new r('clippy', { fontCharacter: '\\eac0' })),
    (r.closeAll = new r('close-all', { fontCharacter: '\\eac1' })),
    (r.cloudDownload = new r('cloud-download', { fontCharacter: '\\eac2' })),
    (r.cloudUpload = new r('cloud-upload', { fontCharacter: '\\eac3' })),
    (r.code = new r('code', { fontCharacter: '\\eac4' })),
    (r.collapseAll = new r('collapse-all', { fontCharacter: '\\eac5' })),
    (r.colorMode = new r('color-mode', { fontCharacter: '\\eac6' })),
    (r.commentDiscussion = new r('comment-discussion', {
      fontCharacter: '\\eac7',
    })),
    (r.compareChanges = new r('compare-changes', { fontCharacter: '\\eafd' })),
    (r.creditCard = new r('credit-card', { fontCharacter: '\\eac9' })),
    (r.dash = new r('dash', { fontCharacter: '\\eacc' })),
    (r.dashboard = new r('dashboard', { fontCharacter: '\\eacd' })),
    (r.database = new r('database', { fontCharacter: '\\eace' })),
    (r.debugContinue = new r('debug-continue', { fontCharacter: '\\eacf' })),
    (r.debugDisconnect = new r('debug-disconnect', {
      fontCharacter: '\\ead0',
    })),
    (r.debugPause = new r('debug-pause', { fontCharacter: '\\ead1' })),
    (r.debugRestart = new r('debug-restart', { fontCharacter: '\\ead2' })),
    (r.debugStart = new r('debug-start', { fontCharacter: '\\ead3' })),
    (r.debugStepInto = new r('debug-step-into', { fontCharacter: '\\ead4' })),
    (r.debugStepOut = new r('debug-step-out', { fontCharacter: '\\ead5' })),
    (r.debugStepOver = new r('debug-step-over', { fontCharacter: '\\ead6' })),
    (r.debugStop = new r('debug-stop', { fontCharacter: '\\ead7' })),
    (r.debug = new r('debug', { fontCharacter: '\\ead8' })),
    (r.deviceCameraVideo = new r('device-camera-video', {
      fontCharacter: '\\ead9',
    })),
    (r.deviceCamera = new r('device-camera', { fontCharacter: '\\eada' })),
    (r.deviceMobile = new r('device-mobile', { fontCharacter: '\\eadb' })),
    (r.diffAdded = new r('diff-added', { fontCharacter: '\\eadc' })),
    (r.diffIgnored = new r('diff-ignored', { fontCharacter: '\\eadd' })),
    (r.diffModified = new r('diff-modified', { fontCharacter: '\\eade' })),
    (r.diffRemoved = new r('diff-removed', { fontCharacter: '\\eadf' })),
    (r.diffRenamed = new r('diff-renamed', { fontCharacter: '\\eae0' })),
    (r.diff = new r('diff', { fontCharacter: '\\eae1' })),
    (r.discard = new r('discard', { fontCharacter: '\\eae2' })),
    (r.editorLayout = new r('editor-layout', { fontCharacter: '\\eae3' })),
    (r.emptyWindow = new r('empty-window', { fontCharacter: '\\eae4' })),
    (r.exclude = new r('exclude', { fontCharacter: '\\eae5' })),
    (r.extensions = new r('extensions', { fontCharacter: '\\eae6' })),
    (r.eyeClosed = new r('eye-closed', { fontCharacter: '\\eae7' })),
    (r.fileBinary = new r('file-binary', { fontCharacter: '\\eae8' })),
    (r.fileCode = new r('file-code', { fontCharacter: '\\eae9' })),
    (r.fileMedia = new r('file-media', { fontCharacter: '\\eaea' })),
    (r.filePdf = new r('file-pdf', { fontCharacter: '\\eaeb' })),
    (r.fileSubmodule = new r('file-submodule', { fontCharacter: '\\eaec' })),
    (r.fileSymlinkDirectory = new r('file-symlink-directory', {
      fontCharacter: '\\eaed',
    })),
    (r.fileSymlinkFile = new r('file-symlink-file', {
      fontCharacter: '\\eaee',
    })),
    (r.fileZip = new r('file-zip', { fontCharacter: '\\eaef' })),
    (r.files = new r('files', { fontCharacter: '\\eaf0' })),
    (r.filter = new r('filter', { fontCharacter: '\\eaf1' })),
    (r.flame = new r('flame', { fontCharacter: '\\eaf2' })),
    (r.foldDown = new r('fold-down', { fontCharacter: '\\eaf3' })),
    (r.foldUp = new r('fold-up', { fontCharacter: '\\eaf4' })),
    (r.fold = new r('fold', { fontCharacter: '\\eaf5' })),
    (r.folderActive = new r('folder-active', { fontCharacter: '\\eaf6' })),
    (r.folderOpened = new r('folder-opened', { fontCharacter: '\\eaf7' })),
    (r.gear = new r('gear', { fontCharacter: '\\eaf8' })),
    (r.gift = new r('gift', { fontCharacter: '\\eaf9' })),
    (r.gistSecret = new r('gist-secret', { fontCharacter: '\\eafa' })),
    (r.gist = new r('gist', { fontCharacter: '\\eafb' })),
    (r.gitCommit = new r('git-commit', { fontCharacter: '\\eafc' })),
    (r.gitCompare = new r('git-compare', { fontCharacter: '\\eafd' })),
    (r.gitMerge = new r('git-merge', { fontCharacter: '\\eafe' })),
    (r.githubAction = new r('github-action', { fontCharacter: '\\eaff' })),
    (r.githubAlt = new r('github-alt', { fontCharacter: '\\eb00' })),
    (r.globe = new r('globe', { fontCharacter: '\\eb01' })),
    (r.grabber = new r('grabber', { fontCharacter: '\\eb02' })),
    (r.graph = new r('graph', { fontCharacter: '\\eb03' })),
    (r.gripper = new r('gripper', { fontCharacter: '\\eb04' })),
    (r.heart = new r('heart', { fontCharacter: '\\eb05' })),
    (r.home = new r('home', { fontCharacter: '\\eb06' })),
    (r.horizontalRule = new r('horizontal-rule', { fontCharacter: '\\eb07' })),
    (r.hubot = new r('hubot', { fontCharacter: '\\eb08' })),
    (r.inbox = new r('inbox', { fontCharacter: '\\eb09' })),
    (r.issueClosed = new r('issue-closed', { fontCharacter: '\\eba4' })),
    (r.issueReopened = new r('issue-reopened', { fontCharacter: '\\eb0b' })),
    (r.issues = new r('issues', { fontCharacter: '\\eb0c' })),
    (r.italic = new r('italic', { fontCharacter: '\\eb0d' })),
    (r.jersey = new r('jersey', { fontCharacter: '\\eb0e' })),
    (r.json = new r('json', { fontCharacter: '\\eb0f' })),
    (r.kebabVertical = new r('kebab-vertical', { fontCharacter: '\\eb10' })),
    (r.key = new r('key', { fontCharacter: '\\eb11' })),
    (r.law = new r('law', { fontCharacter: '\\eb12' })),
    (r.lightbulbAutofix = new r('lightbulb-autofix', {
      fontCharacter: '\\eb13',
    })),
    (r.linkExternal = new r('link-external', { fontCharacter: '\\eb14' })),
    (r.link = new r('link', { fontCharacter: '\\eb15' })),
    (r.listOrdered = new r('list-ordered', { fontCharacter: '\\eb16' })),
    (r.listUnordered = new r('list-unordered', { fontCharacter: '\\eb17' })),
    (r.liveShare = new r('live-share', { fontCharacter: '\\eb18' })),
    (r.loading = new r('loading', { fontCharacter: '\\eb19' })),
    (r.location = new r('location', { fontCharacter: '\\eb1a' })),
    (r.mailRead = new r('mail-read', { fontCharacter: '\\eb1b' })),
    (r.mail = new r('mail', { fontCharacter: '\\eb1c' })),
    (r.markdown = new r('markdown', { fontCharacter: '\\eb1d' })),
    (r.megaphone = new r('megaphone', { fontCharacter: '\\eb1e' })),
    (r.mention = new r('mention', { fontCharacter: '\\eb1f' })),
    (r.milestone = new r('milestone', { fontCharacter: '\\eb20' })),
    (r.mortarBoard = new r('mortar-board', { fontCharacter: '\\eb21' })),
    (r.move = new r('move', { fontCharacter: '\\eb22' })),
    (r.multipleWindows = new r('multiple-windows', {
      fontCharacter: '\\eb23',
    })),
    (r.mute = new r('mute', { fontCharacter: '\\eb24' })),
    (r.noNewline = new r('no-newline', { fontCharacter: '\\eb25' })),
    (r.note = new r('note', { fontCharacter: '\\eb26' })),
    (r.octoface = new r('octoface', { fontCharacter: '\\eb27' })),
    (r.openPreview = new r('open-preview', { fontCharacter: '\\eb28' })),
    (r.package_ = new r('package', { fontCharacter: '\\eb29' })),
    (r.paintcan = new r('paintcan', { fontCharacter: '\\eb2a' })),
    (r.pin = new r('pin', { fontCharacter: '\\eb2b' })),
    (r.play = new r('play', { fontCharacter: '\\eb2c' })),
    (r.run = new r('run', { fontCharacter: '\\eb2c' })),
    (r.plug = new r('plug', { fontCharacter: '\\eb2d' })),
    (r.preserveCase = new r('preserve-case', { fontCharacter: '\\eb2e' })),
    (r.preview = new r('preview', { fontCharacter: '\\eb2f' })),
    (r.project = new r('project', { fontCharacter: '\\eb30' })),
    (r.pulse = new r('pulse', { fontCharacter: '\\eb31' })),
    (r.question = new r('question', { fontCharacter: '\\eb32' })),
    (r.quote = new r('quote', { fontCharacter: '\\eb33' })),
    (r.radioTower = new r('radio-tower', { fontCharacter: '\\eb34' })),
    (r.reactions = new r('reactions', { fontCharacter: '\\eb35' })),
    (r.references = new r('references', { fontCharacter: '\\eb36' })),
    (r.refresh = new r('refresh', { fontCharacter: '\\eb37' })),
    (r.regex = new r('regex', { fontCharacter: '\\eb38' })),
    (r.remoteExplorer = new r('remote-explorer', { fontCharacter: '\\eb39' })),
    (r.remote = new r('remote', { fontCharacter: '\\eb3a' })),
    (r.remove = new r('remove', { fontCharacter: '\\eb3b' })),
    (r.replaceAll = new r('replace-all', { fontCharacter: '\\eb3c' })),
    (r.replace = new r('replace', { fontCharacter: '\\eb3d' })),
    (r.repoClone = new r('repo-clone', { fontCharacter: '\\eb3e' })),
    (r.repoForcePush = new r('repo-force-push', { fontCharacter: '\\eb3f' })),
    (r.repoPull = new r('repo-pull', { fontCharacter: '\\eb40' })),
    (r.repoPush = new r('repo-push', { fontCharacter: '\\eb41' })),
    (r.report = new r('report', { fontCharacter: '\\eb42' })),
    (r.requestChanges = new r('request-changes', { fontCharacter: '\\eb43' })),
    (r.rocket = new r('rocket', { fontCharacter: '\\eb44' })),
    (r.rootFolderOpened = new r('root-folder-opened', {
      fontCharacter: '\\eb45',
    })),
    (r.rootFolder = new r('root-folder', { fontCharacter: '\\eb46' })),
    (r.rss = new r('rss', { fontCharacter: '\\eb47' })),
    (r.ruby = new r('ruby', { fontCharacter: '\\eb48' })),
    (r.saveAll = new r('save-all', { fontCharacter: '\\eb49' })),
    (r.saveAs = new r('save-as', { fontCharacter: '\\eb4a' })),
    (r.save = new r('save', { fontCharacter: '\\eb4b' })),
    (r.screenFull = new r('screen-full', { fontCharacter: '\\eb4c' })),
    (r.screenNormal = new r('screen-normal', { fontCharacter: '\\eb4d' })),
    (r.searchStop = new r('search-stop', { fontCharacter: '\\eb4e' })),
    (r.server = new r('server', { fontCharacter: '\\eb50' })),
    (r.settingsGear = new r('settings-gear', { fontCharacter: '\\eb51' })),
    (r.settings = new r('settings', { fontCharacter: '\\eb52' })),
    (r.shield = new r('shield', { fontCharacter: '\\eb53' })),
    (r.smiley = new r('smiley', { fontCharacter: '\\eb54' })),
    (r.sortPrecedence = new r('sort-precedence', { fontCharacter: '\\eb55' })),
    (r.splitHorizontal = new r('split-horizontal', {
      fontCharacter: '\\eb56',
    })),
    (r.splitVertical = new r('split-vertical', { fontCharacter: '\\eb57' })),
    (r.squirrel = new r('squirrel', { fontCharacter: '\\eb58' })),
    (r.starFull = new r('star-full', { fontCharacter: '\\eb59' })),
    (r.starHalf = new r('star-half', { fontCharacter: '\\eb5a' })),
    (r.symbolClass = new r('symbol-class', { fontCharacter: '\\eb5b' })),
    (r.symbolColor = new r('symbol-color', { fontCharacter: '\\eb5c' })),
    (r.symbolCustomColor = new r('symbol-customcolor', {
      fontCharacter: '\\eb5c',
    })),
    (r.symbolConstant = new r('symbol-constant', { fontCharacter: '\\eb5d' })),
    (r.symbolEnumMember = new r('symbol-enum-member', {
      fontCharacter: '\\eb5e',
    })),
    (r.symbolField = new r('symbol-field', { fontCharacter: '\\eb5f' })),
    (r.symbolFile = new r('symbol-file', { fontCharacter: '\\eb60' })),
    (r.symbolInterface = new r('symbol-interface', {
      fontCharacter: '\\eb61',
    })),
    (r.symbolKeyword = new r('symbol-keyword', { fontCharacter: '\\eb62' })),
    (r.symbolMisc = new r('symbol-misc', { fontCharacter: '\\eb63' })),
    (r.symbolOperator = new r('symbol-operator', { fontCharacter: '\\eb64' })),
    (r.symbolProperty = new r('symbol-property', { fontCharacter: '\\eb65' })),
    (r.wrench = new r('wrench', { fontCharacter: '\\eb65' })),
    (r.wrenchSubaction = new r('wrench-subaction', {
      fontCharacter: '\\eb65',
    })),
    (r.symbolSnippet = new r('symbol-snippet', { fontCharacter: '\\eb66' })),
    (r.tasklist = new r('tasklist', { fontCharacter: '\\eb67' })),
    (r.telescope = new r('telescope', { fontCharacter: '\\eb68' })),
    (r.textSize = new r('text-size', { fontCharacter: '\\eb69' })),
    (r.threeBars = new r('three-bars', { fontCharacter: '\\eb6a' })),
    (r.thumbsdown = new r('thumbsdown', { fontCharacter: '\\eb6b' })),
    (r.thumbsup = new r('thumbsup', { fontCharacter: '\\eb6c' })),
    (r.tools = new r('tools', { fontCharacter: '\\eb6d' })),
    (r.triangleDown = new r('triangle-down', { fontCharacter: '\\eb6e' })),
    (r.triangleLeft = new r('triangle-left', { fontCharacter: '\\eb6f' })),
    (r.triangleRight = new r('triangle-right', { fontCharacter: '\\eb70' })),
    (r.triangleUp = new r('triangle-up', { fontCharacter: '\\eb71' })),
    (r.twitter = new r('twitter', { fontCharacter: '\\eb72' })),
    (r.unfold = new r('unfold', { fontCharacter: '\\eb73' })),
    (r.unlock = new r('unlock', { fontCharacter: '\\eb74' })),
    (r.unmute = new r('unmute', { fontCharacter: '\\eb75' })),
    (r.unverified = new r('unverified', { fontCharacter: '\\eb76' })),
    (r.verified = new r('verified', { fontCharacter: '\\eb77' })),
    (r.versions = new r('versions', { fontCharacter: '\\eb78' })),
    (r.vmActive = new r('vm-active', { fontCharacter: '\\eb79' })),
    (r.vmOutline = new r('vm-outline', { fontCharacter: '\\eb7a' })),
    (r.vmRunning = new r('vm-running', { fontCharacter: '\\eb7b' })),
    (r.watch = new r('watch', { fontCharacter: '\\eb7c' })),
    (r.whitespace = new r('whitespace', { fontCharacter: '\\eb7d' })),
    (r.wholeWord = new r('whole-word', { fontCharacter: '\\eb7e' })),
    (r.window = new r('window', { fontCharacter: '\\eb7f' })),
    (r.wordWrap = new r('word-wrap', { fontCharacter: '\\eb80' })),
    (r.zoomIn = new r('zoom-in', { fontCharacter: '\\eb81' })),
    (r.zoomOut = new r('zoom-out', { fontCharacter: '\\eb82' })),
    (r.listFilter = new r('list-filter', { fontCharacter: '\\eb83' })),
    (r.listFlat = new r('list-flat', { fontCharacter: '\\eb84' })),
    (r.listSelection = new r('list-selection', { fontCharacter: '\\eb85' })),
    (r.selection = new r('selection', { fontCharacter: '\\eb85' })),
    (r.listTree = new r('list-tree', { fontCharacter: '\\eb86' })),
    (r.debugBreakpointFunctionUnverified = new r(
      'debug-breakpoint-function-unverified',
      { fontCharacter: '\\eb87' }
    )),
    (r.debugBreakpointFunction = new r('debug-breakpoint-function', {
      fontCharacter: '\\eb88',
    })),
    (r.debugBreakpointFunctionDisabled = new r(
      'debug-breakpoint-function-disabled',
      { fontCharacter: '\\eb88' }
    )),
    (r.debugStackframeActive = new r('debug-stackframe-active', {
      fontCharacter: '\\eb89',
    })),
    (r.circleSmallFilled = new r('circle-small-filled', {
      fontCharacter: '\\eb8a',
    })),
    (r.debugStackframeDot = new r(
      'debug-stackframe-dot',
      r.circleSmallFilled.definition
    )),
    (r.debugStackframe = new r('debug-stackframe', {
      fontCharacter: '\\eb8b',
    })),
    (r.debugStackframeFocused = new r('debug-stackframe-focused', {
      fontCharacter: '\\eb8b',
    })),
    (r.debugBreakpointUnsupported = new r('debug-breakpoint-unsupported', {
      fontCharacter: '\\eb8c',
    })),
    (r.symbolString = new r('symbol-string', { fontCharacter: '\\eb8d' })),
    (r.debugReverseContinue = new r('debug-reverse-continue', {
      fontCharacter: '\\eb8e',
    })),
    (r.debugStepBack = new r('debug-step-back', { fontCharacter: '\\eb8f' })),
    (r.debugRestartFrame = new r('debug-restart-frame', {
      fontCharacter: '\\eb90',
    })),
    (r.callIncoming = new r('call-incoming', { fontCharacter: '\\eb92' })),
    (r.callOutgoing = new r('call-outgoing', { fontCharacter: '\\eb93' })),
    (r.menu = new r('menu', { fontCharacter: '\\eb94' })),
    (r.expandAll = new r('expand-all', { fontCharacter: '\\eb95' })),
    (r.feedback = new r('feedback', { fontCharacter: '\\eb96' })),
    (r.groupByRefType = new r('group-by-ref-type', {
      fontCharacter: '\\eb97',
    })),
    (r.ungroupByRefType = new r('ungroup-by-ref-type', {
      fontCharacter: '\\eb98',
    })),
    (r.account = new r('account', { fontCharacter: '\\eb99' })),
    (r.bellDot = new r('bell-dot', { fontCharacter: '\\eb9a' })),
    (r.debugConsole = new r('debug-console', { fontCharacter: '\\eb9b' })),
    (r.library = new r('library', { fontCharacter: '\\eb9c' })),
    (r.output = new r('output', { fontCharacter: '\\eb9d' })),
    (r.runAll = new r('run-all', { fontCharacter: '\\eb9e' })),
    (r.syncIgnored = new r('sync-ignored', { fontCharacter: '\\eb9f' })),
    (r.pinned = new r('pinned', { fontCharacter: '\\eba0' })),
    (r.githubInverted = new r('github-inverted', { fontCharacter: '\\eba1' })),
    (r.debugAlt = new r('debug-alt', { fontCharacter: '\\eb91' })),
    (r.serverProcess = new r('server-process', { fontCharacter: '\\eba2' })),
    (r.serverEnvironment = new r('server-environment', {
      fontCharacter: '\\eba3',
    })),
    (r.pass = new r('pass', { fontCharacter: '\\eba4' })),
    (r.stopCircle = new r('stop-circle', { fontCharacter: '\\eba5' })),
    (r.playCircle = new r('play-circle', { fontCharacter: '\\eba6' })),
    (r.record = new r('record', { fontCharacter: '\\eba7' })),
    (r.debugAltSmall = new r('debug-alt-small', { fontCharacter: '\\eba8' })),
    (r.vmConnect = new r('vm-connect', { fontCharacter: '\\eba9' })),
    (r.cloud = new r('cloud', { fontCharacter: '\\ebaa' })),
    (r.merge = new r('merge', { fontCharacter: '\\ebab' })),
    (r.exportIcon = new r('export', { fontCharacter: '\\ebac' })),
    (r.graphLeft = new r('graph-left', { fontCharacter: '\\ebad' })),
    (r.magnet = new r('magnet', { fontCharacter: '\\ebae' })),
    (r.notebook = new r('notebook', { fontCharacter: '\\ebaf' })),
    (r.redo = new r('redo', { fontCharacter: '\\ebb0' })),
    (r.checkAll = new r('check-all', { fontCharacter: '\\ebb1' })),
    (r.pinnedDirty = new r('pinned-dirty', { fontCharacter: '\\ebb2' })),
    (r.passFilled = new r('pass-filled', { fontCharacter: '\\ebb3' })),
    (r.circleLargeFilled = new r('circle-large-filled', {
      fontCharacter: '\\ebb4',
    })),
    (r.circleLargeOutline = new r('circle-large-outline', {
      fontCharacter: '\\ebb5',
    })),
    (r.combine = new r('combine', { fontCharacter: '\\ebb6' })),
    (r.gather = new r('gather', { fontCharacter: '\\ebb6' })),
    (r.table = new r('table', { fontCharacter: '\\ebb7' })),
    (r.variableGroup = new r('variable-group', { fontCharacter: '\\ebb8' })),
    (r.typeHierarchy = new r('type-hierarchy', { fontCharacter: '\\ebb9' })),
    (r.typeHierarchySub = new r('type-hierarchy-sub', {
      fontCharacter: '\\ebba',
    })),
    (r.typeHierarchySuper = new r('type-hierarchy-super', {
      fontCharacter: '\\ebbb',
    })),
    (r.gitPullRequestCreate = new r('git-pull-request-create', {
      fontCharacter: '\\ebbc',
    })),
    (r.runAbove = new r('run-above', { fontCharacter: '\\ebbd' })),
    (r.runBelow = new r('run-below', { fontCharacter: '\\ebbe' })),
    (r.notebookTemplate = new r('notebook-template', {
      fontCharacter: '\\ebbf',
    })),
    (r.debugRerun = new r('debug-rerun', { fontCharacter: '\\ebc0' })),
    (r.workspaceTrusted = new r('workspace-trusted', {
      fontCharacter: '\\ebc1',
    })),
    (r.workspaceUntrusted = new r('workspace-untrusted', {
      fontCharacter: '\\ebc2',
    })),
    (r.workspaceUnspecified = new r('workspace-unspecified', {
      fontCharacter: '\\ebc3',
    })),
    (r.terminalCmd = new r('terminal-cmd', { fontCharacter: '\\ebc4' })),
    (r.terminalDebian = new r('terminal-debian', { fontCharacter: '\\ebc5' })),
    (r.terminalLinux = new r('terminal-linux', { fontCharacter: '\\ebc6' })),
    (r.terminalPowershell = new r('terminal-powershell', {
      fontCharacter: '\\ebc7',
    })),
    (r.terminalTmux = new r('terminal-tmux', { fontCharacter: '\\ebc8' })),
    (r.terminalUbuntu = new r('terminal-ubuntu', { fontCharacter: '\\ebc9' })),
    (r.terminalBash = new r('terminal-bash', { fontCharacter: '\\ebca' })),
    (r.arrowSwap = new r('arrow-swap', { fontCharacter: '\\ebcb' })),
    (r.copy = new r('copy', { fontCharacter: '\\ebcc' })),
    (r.personAdd = new r('person-add', { fontCharacter: '\\ebcd' })),
    (r.filterFilled = new r('filter-filled', { fontCharacter: '\\ebce' })),
    (r.wand = new r('wand', { fontCharacter: '\\ebcf' })),
    (r.debugLineByLine = new r('debug-line-by-line', {
      fontCharacter: '\\ebd0',
    })),
    (r.inspect = new r('inspect', { fontCharacter: '\\ebd1' })),
    (r.layers = new r('layers', { fontCharacter: '\\ebd2' })),
    (r.layersDot = new r('layers-dot', { fontCharacter: '\\ebd3' })),
    (r.layersActive = new r('layers-active', { fontCharacter: '\\ebd4' })),
    (r.compass = new r('compass', { fontCharacter: '\\ebd5' })),
    (r.compassDot = new r('compass-dot', { fontCharacter: '\\ebd6' })),
    (r.compassActive = new r('compass-active', { fontCharacter: '\\ebd7' })),
    (r.azure = new r('azure', { fontCharacter: '\\ebd8' })),
    (r.issueDraft = new r('issue-draft', { fontCharacter: '\\ebd9' })),
    (r.gitPullRequestClosed = new r('git-pull-request-closed', {
      fontCharacter: '\\ebda',
    })),
    (r.gitPullRequestDraft = new r('git-pull-request-draft', {
      fontCharacter: '\\ebdb',
    })),
    (r.debugAll = new r('debug-all', { fontCharacter: '\\ebdc' })),
    (r.debugCoverage = new r('debug-coverage', { fontCharacter: '\\ebdd' })),
    (r.runErrors = new r('run-errors', { fontCharacter: '\\ebde' })),
    (r.folderLibrary = new r('folder-library', { fontCharacter: '\\ebdf' })),
    (r.debugContinueSmall = new r('debug-continue-small', {
      fontCharacter: '\\ebe0',
    })),
    (r.beakerStop = new r('beaker-stop', { fontCharacter: '\\ebe1' })),
    (r.graphLine = new r('graph-line', { fontCharacter: '\\ebe2' })),
    (r.graphScatter = new r('graph-scatter', { fontCharacter: '\\ebe3' })),
    (r.pieChart = new r('pie-chart', { fontCharacter: '\\ebe4' })),
    (r.bracket = new r('bracket', r.json.definition)),
    (r.bracketDot = new r('bracket-dot', { fontCharacter: '\\ebe5' })),
    (r.bracketError = new r('bracket-error', { fontCharacter: '\\ebe6' })),
    (r.lockSmall = new r('lock-small', { fontCharacter: '\\ebe7' })),
    (r.azureDevops = new r('azure-devops', { fontCharacter: '\\ebe8' })),
    (r.verifiedFilled = new r('verified-filled', { fontCharacter: '\\ebe9' })),
    (r.newLine = new r('newline', { fontCharacter: '\\ebea' })),
    (r.layout = new r('layout', { fontCharacter: '\\ebeb' })),
    (r.layoutActivitybarLeft = new r('layout-activitybar-left', {
      fontCharacter: '\\ebec',
    })),
    (r.layoutActivitybarRight = new r('layout-activitybar-right', {
      fontCharacter: '\\ebed',
    })),
    (r.layoutPanelLeft = new r('layout-panel-left', {
      fontCharacter: '\\ebee',
    })),
    (r.layoutPanelCenter = new r('layout-panel-center', {
      fontCharacter: '\\ebef',
    })),
    (r.layoutPanelJustify = new r('layout-panel-justify', {
      fontCharacter: '\\ebf0',
    })),
    (r.layoutPanelRight = new r('layout-panel-right', {
      fontCharacter: '\\ebf1',
    })),
    (r.layoutPanel = new r('layout-panel', { fontCharacter: '\\ebf2' })),
    (r.layoutSidebarLeft = new r('layout-sidebar-left', {
      fontCharacter: '\\ebf3',
    })),
    (r.layoutSidebarRight = new r('layout-sidebar-right', {
      fontCharacter: '\\ebf4',
    })),
    (r.layoutStatusbar = new r('layout-statusbar', {
      fontCharacter: '\\ebf5',
    })),
    (r.layoutMenubar = new r('layout-menubar', { fontCharacter: '\\ebf6' })),
    (r.layoutCentered = new r('layout-centered', { fontCharacter: '\\ebf7' })),
    (r.layoutSidebarRightOff = new r('layout-sidebar-right-off', {
      fontCharacter: '\\ec00',
    })),
    (r.layoutPanelOff = new r('layout-panel-off', { fontCharacter: '\\ec01' })),
    (r.layoutSidebarLeftOff = new r('layout-sidebar-left-off', {
      fontCharacter: '\\ec02',
    })),
    (r.target = new r('target', { fontCharacter: '\\ebf8' })),
    (r.indent = new r('indent', { fontCharacter: '\\ebf9' })),
    (r.recordSmall = new r('record-small', { fontCharacter: '\\ebfa' })),
    (r.errorSmall = new r('error-small', { fontCharacter: '\\ebfb' })),
    (r.arrowCircleDown = new r('arrow-circle-down', {
      fontCharacter: '\\ebfc',
    })),
    (r.arrowCircleLeft = new r('arrow-circle-left', {
      fontCharacter: '\\ebfd',
    })),
    (r.arrowCircleRight = new r('arrow-circle-right', {
      fontCharacter: '\\ebfe',
    })),
    (r.arrowCircleUp = new r('arrow-circle-up', { fontCharacter: '\\ebff' })),
    (r.heartFilled = new r('heart-filled', { fontCharacter: '\\ec04' })),
    (r.map = new r('map', { fontCharacter: '\\ec05' })),
    (r.mapFilled = new r('map-filled', { fontCharacter: '\\ec06' })),
    (r.circleSmall = new r('circle-small', { fontCharacter: '\\ec07' })),
    (r.bellSlash = new r('bell-slash', { fontCharacter: '\\ec08' })),
    (r.bellSlashDot = new r('bell-slash-dot', { fontCharacter: '\\ec09' })),
    (r.commentUnresolved = new r('comment-unresolved', {
      fontCharacter: '\\ec0a',
    })),
    (r.gitPullRequestGoToChanges = new r('git-pull-request-go-to-changes', {
      fontCharacter: '\\ec0b',
    })),
    (r.gitPullRequestNewChanges = new r('git-pull-request-new-changes', {
      fontCharacter: '\\ec0c',
    })),
    (r.dialogError = new r('dialog-error', r.error.definition)),
    (r.dialogWarning = new r('dialog-warning', r.warning.definition)),
    (r.dialogInfo = new r('dialog-info', r.info.definition)),
    (r.dialogClose = new r('dialog-close', r.close.definition)),
    (r.treeItemExpanded = new r(
      'tree-item-expanded',
      r.chevronDown.definition
    )),
    (r.treeFilterOnTypeOn = new r(
      'tree-filter-on-type-on',
      r.listFilter.definition
    )),
    (r.treeFilterOnTypeOff = new r(
      'tree-filter-on-type-off',
      r.listSelection.definition
    )),
    (r.treeFilterClear = new r('tree-filter-clear', r.close.definition)),
    (r.treeItemLoading = new r('tree-item-loading', r.loading.definition)),
    (r.menuSelection = new r('menu-selection', r.check.definition)),
    (r.menuSubmenu = new r('menu-submenu', r.chevronRight.definition)),
    (r.menuBarMore = new r('menubar-more', r.more.definition)),
    (r.scrollbarButtonLeft = new r(
      'scrollbar-button-left',
      r.triangleLeft.definition
    )),
    (r.scrollbarButtonRight = new r(
      'scrollbar-button-right',
      r.triangleRight.definition
    )),
    (r.scrollbarButtonUp = new r(
      'scrollbar-button-up',
      r.triangleUp.definition
    )),
    (r.scrollbarButtonDown = new r(
      'scrollbar-button-down',
      r.triangleDown.definition
    )),
    (r.toolBarMore = new r('toolbar-more', r.more.definition)),
    (r.quickInputBack = new r('quick-input-back', r.arrowLeft.definition)),
    (function (e) {
      (e.iconNameSegment = '[A-Za-z0-9]+'),
        (e.iconNameExpression = '[A-Za-z0-9-]+'),
        (e.iconModifierExpression = '~[A-Za-z]+'),
        (e.iconNameCharacter = '[A-Za-z0-9~-]');
      const t = new RegExp(
        `^(${e.iconNameExpression})(${e.iconModifierExpression})?$`
      );
      function n(a) {
        if (a instanceof r) return ['codicon', 'codicon-' + a.id];
        const o = t.exec(a.id);
        if (!o) return n(r.error);
        const [, l, c] = o,
          u = ['codicon', 'codicon-' + l];
        return c && u.push('codicon-modifier-' + c.substr(1)), u;
      }
      (e.asClassNameArray = n),
        (e.asClassName = function s(a) {
          return n(a).join(' ');
        }),
        (e.asCSSSelector = function i(a) {
          return '.' + n(a).join('.');
        });
    })(F1 || (F1 = {}));
  var E1,
    D1,
    P1,
    St = function (e, t, n, s) {
      return new (n || (n = Promise))(function (a, o) {
        function l(h) {
          try {
            u(s.next(h));
          } catch (f) {
            o(f);
          }
        }
        function c(h) {
          try {
            u(s.throw(h));
          } catch (f) {
            o(f);
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
              })(h.value).then(l, c);
        }
        u((s = s.apply(e, t || [])).next());
      });
    };
  class Hr extends be {
    constructor(t, n, s) {
      super(),
        (this._registry = t),
        (this._languageId = n),
        (this._factory = s),
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
      return St(this, void 0, void 0, function* () {
        return (
          this._resolvePromise || (this._resolvePromise = this._create()),
          this._resolvePromise
        );
      });
    }
    _create() {
      return St(this, void 0, void 0, function* () {
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
  class Or {
    constructor(t, n, s) {
      (this._tokenBrand = void 0),
        (this.offset = t),
        (this.type = n),
        (this.language = s);
    }
    toString() {
      return '(' + this.offset + ', ' + this.type + ')';
    }
  }
  !(function (e) {
    const t = new Map();
    t.set(0, r.symbolMethod),
      t.set(1, r.symbolFunction),
      t.set(2, r.symbolConstructor),
      t.set(3, r.symbolField),
      t.set(4, r.symbolVariable),
      t.set(5, r.symbolClass),
      t.set(6, r.symbolStruct),
      t.set(7, r.symbolInterface),
      t.set(8, r.symbolModule),
      t.set(9, r.symbolProperty),
      t.set(10, r.symbolEvent),
      t.set(11, r.symbolOperator),
      t.set(12, r.symbolUnit),
      t.set(13, r.symbolValue),
      t.set(15, r.symbolEnum),
      t.set(14, r.symbolConstant),
      t.set(15, r.symbolEnum),
      t.set(16, r.symbolEnumMember),
      t.set(17, r.symbolKeyword),
      t.set(27, r.symbolSnippet),
      t.set(18, r.symbolText),
      t.set(19, r.symbolColor),
      t.set(20, r.symbolFile),
      t.set(21, r.symbolReference),
      t.set(22, r.symbolCustomColor),
      t.set(23, r.symbolFolder),
      t.set(24, r.symbolTypeParameter),
      t.set(25, r.account),
      t.set(26, r.issues),
      (e.toIcon = function n(a) {
        let o = t.get(a);
        return (
          o ||
            (console.info('No codicon found for CompletionItemKind ' + a),
            (o = r.symbolProperty)),
          o
        );
      });
    const s = new Map();
    s.set('method', 0),
      s.set('function', 1),
      s.set('constructor', 2),
      s.set('field', 3),
      s.set('variable', 4),
      s.set('class', 5),
      s.set('struct', 6),
      s.set('interface', 7),
      s.set('module', 8),
      s.set('property', 9),
      s.set('event', 10),
      s.set('operator', 11),
      s.set('unit', 12),
      s.set('value', 13),
      s.set('constant', 14),
      s.set('enum', 15),
      s.set('enum-member', 16),
      s.set('enumMember', 16),
      s.set('keyword', 17),
      s.set('snippet', 27),
      s.set('text', 18),
      s.set('color', 19),
      s.set('file', 20),
      s.set('reference', 21),
      s.set('customcolor', 22),
      s.set('folder', 23),
      s.set('type-parameter', 24),
      s.set('typeParameter', 24),
      s.set('account', 25),
      s.set('issue', 26),
      (e.fromString = function i(a, o) {
        let l = s.get(a);
        return typeof l > 'u' && !o && (l = 9), l;
      });
  })(E1 || (E1 = {})),
    (function (e) {
      const t = new Map();
      t.set(0, r.symbolFile),
        t.set(1, r.symbolModule),
        t.set(2, r.symbolNamespace),
        t.set(3, r.symbolPackage),
        t.set(4, r.symbolClass),
        t.set(5, r.symbolMethod),
        t.set(6, r.symbolProperty),
        t.set(7, r.symbolField),
        t.set(8, r.symbolConstructor),
        t.set(9, r.symbolEnum),
        t.set(10, r.symbolInterface),
        t.set(11, r.symbolFunction),
        t.set(12, r.symbolVariable),
        t.set(13, r.symbolConstant),
        t.set(14, r.symbolString),
        t.set(15, r.symbolNumber),
        t.set(16, r.symbolBoolean),
        t.set(17, r.symbolArray),
        t.set(18, r.symbolObject),
        t.set(19, r.symbolKey),
        t.set(20, r.symbolNull),
        t.set(21, r.symbolEnumMember),
        t.set(22, r.symbolStruct),
        t.set(23, r.symbolEvent),
        t.set(24, r.symbolOperator),
        t.set(25, r.symbolTypeParameter),
        (e.toIcon = function n(s) {
          let i = t.get(s);
          return (
            i ||
              (console.info('No codicon found for SymbolKind ' + s),
              (i = r.symbolProperty)),
            i
          );
        });
    })(D1 || (D1 = {}));
  class de {
    constructor(t) {
      this.value = t;
    }
  }
  (de.Comment = new de('comment')),
    (de.Imports = new de('imports')),
    (de.Region = new de('region')),
    (function (e) {
      e.is = function t(n) {
        return (
          !(!n || 'object' != typeof n) &&
          'string' == typeof n.id &&
          'string' == typeof n.title
        );
      };
    })(P1 || (P1 = {})),
    new (class qr {
      constructor() {
        (this._map = new Map()),
          (this._factories = new Map()),
          (this._onDidChange = new j()),
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
          Ee(() => {
            this._map.get(t) === n && (this._map.delete(t), this.fire([t]));
          })
        );
      }
      registerFactory(t, n) {
        var s;
        null === (s = this._factories.get(t)) || void 0 === s || s.dispose();
        const i = new Hr(this, t, n);
        return (
          this._factories.set(t, i),
          Ee(() => {
            const a = this._factories.get(t);
            !a || a !== i || (this._factories.delete(t), a.dispose());
          })
        );
      }
      getOrCreate(t) {
        return St(this, void 0, void 0, function* () {
          const n = this.get(t);
          if (n) return n;
          const s = this._factories.get(t);
          return !s || s.isResolved ? null : (yield s.resolve(), this.get(t));
        });
      }
      get(t) {
        return this._map.get(t) || null;
      }
      isResolved(t) {
        if (this.get(t)) return !0;
        const s = this._factories.get(t);
        return !(s && !s.isResolved);
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
  var R1 = (function (e) {
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
    })(R1 || {}),
    B1 = (function (e) {
      return (
        (e[(e.Hint = 1)] = 'Hint'),
        (e[(e.Info = 2)] = 'Info'),
        (e[(e.Warning = 4)] = 'Warning'),
        (e[(e.Error = 8)] = 'Error'),
        e
      );
    })(B1 || {}),
    V1 = (function (e) {
      return (
        (e[(e.Unnecessary = 1)] = 'Unnecessary'),
        (e[(e.Deprecated = 2)] = 'Deprecated'),
        e
      );
    })(V1 || {}),
    I1 = (function (e) {
      return (e[(e.LTR = 0)] = 'LTR'), (e[(e.RTL = 1)] = 'RTL'), e;
    })(I1 || {});
  let xs = (() => {
    class e {
      static chord(n, s) {
        return (function Wr(e, t) {
          return (e | (((65535 & t) << 16) >>> 0)) >>> 0;
        })(n, s);
      }
    }
    return (
      (e.CtrlCmd = 2048), (e.Shift = 1024), (e.Alt = 512), (e.WinCtrl = 256), e
    );
  })();
  class Fs extends Se {
    constructor(t) {
      super(0);
      for (let n = 0, s = t.length; n < s; n++) this.set(t.charCodeAt(n), 2);
      this.set(32, 1), this.set(9, 1);
    }
  }
  function W1(e, t, n, s, i) {
    return (
      (function Us(e, t, n, s, i) {
        if (0 === s) return !0;
        const a = t.charCodeAt(s - 1);
        if (0 !== e.get(a) || 13 === a || 10 === a) return !0;
        if (i > 0) {
          const o = t.charCodeAt(s);
          if (0 !== e.get(o)) return !0;
        }
        return !1;
      })(e, t, 0, s, i) &&
      (function Ws(e, t, n, s, i) {
        if (s + i === n) return !0;
        const a = t.charCodeAt(s + i);
        if (0 !== e.get(a) || 13 === a || 10 === a) return !0;
        if (i > 0) {
          const o = t.charCodeAt(s + i - 1);
          if (0 !== e.get(o)) return !0;
        }
        return !1;
      })(e, t, n, s, i)
    );
  }
  !(function Es(e) {
    const t = {};
  })((e) => new Fs(e));
  class Me {
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
      let s;
      do {
        if (
          this._prevMatchStartIndex + this._prevMatchLength === n ||
          ((s = this._searchRegex.exec(t)), !s)
        )
          return null;
        const i = s.index,
          a = s[0].length;
        if (i === this._prevMatchStartIndex && a === this._prevMatchLength) {
          if (0 === a) {
            Zt(t, n, this._searchRegex.lastIndex) > 65535
              ? (this._searchRegex.lastIndex += 2)
              : (this._searchRegex.lastIndex += 1);
            continue;
          }
          return null;
        }
        if (
          ((this._prevMatchStartIndex = i),
          (this._prevMatchLength = a),
          !this._wordSeparators || W1(this._wordSeparators, t, n, i, a))
        )
          return s;
      } while (s);
      return null;
    }
  }
  class qs {
    static computeUnicodeHighlights(t, n, s) {
      const i = s ? s.startLineNumber : 1,
        a = s ? s.endLineNumber : t.getLineCount(),
        o = new q1(n),
        l = o.getCandidateCodePoints();
      let c;
      c =
        'allNonBasicAscii' === l
          ? new RegExp('[^\\t\\n\\r\\x20-\\x7E]', 'g')
          : new RegExp(
              `${(function Hs(e, t) {
                return `[${(function jt(e) {
                  return e.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, '\\$&');
                })(e.map((s) => String.fromCodePoint(s)).join(''))}]`;
              })(Array.from(l))}`,
              'g'
            );
      const u = new Me(null, c),
        h = [];
      let d,
        f = !1,
        b = 0,
        L = 0,
        N = 0;
      e: for (let y = i, k = a; y <= k; y++) {
        const F = t.getLineContent(y),
          A = F.length;
        u.reset(0);
        do {
          if (((d = u.next(F)), d)) {
            let v = d.index,
              S = d.index + d[0].length;
            v > 0 && Ce(F.charCodeAt(v - 1)) && v--,
              S + 1 < A && Ce(F.charCodeAt(S - 1)) && S++;
            const x = F.substring(v, S),
              _ = _t(v + 1, A1, F, 0),
              m = o.shouldHighlightNonBasicASCII(x, _ ? _.word : null);
            if (0 !== m) {
              if (
                (3 === m ? b++ : 2 === m ? L++ : 1 === m ? N++ : xn(),
                h.length >= 1e3)
              ) {
                f = !0;
                break e;
              }
              h.push(new R(y, v + 1, y, S + 1));
            }
          }
        } while (d);
      }
      return {
        ranges: h,
        hasMore: f,
        ambiguousCharacterCount: b,
        invisibleCharacterCount: L,
        nonBasicAsciiCharacterCount: N,
      };
    }
    static computeUnicodeHighlightReason(t, n) {
      const s = new q1(n);
      switch (s.shouldHighlightNonBasicASCII(t, null)) {
        case 0:
          return null;
        case 2:
          return { kind: 1 };
        case 3: {
          const a = t.codePointAt(0),
            o = s.ambiguousCharacters.getPrimaryConfusable(a),
            l = G.getLocales().filter(
              (c) =>
                !G.getInstance(new Set([...n.allowedLocales, c])).isAmbiguous(a)
            );
          return {
            kind: 0,
            confusableWith: String.fromCodePoint(o),
            notAmbiguousInLocales: l,
          };
        }
        case 1:
          return { kind: 2 };
      }
    }
  }
  class q1 {
    constructor(t) {
      (this.options = t),
        (this.allowedCodePoints = new Set(t.allowedCodePoints)),
        (this.ambiguousCharacters = G.getInstance(new Set(t.allowedLocales)));
    }
    getCandidateCodePoints() {
      if (this.options.nonBasicASCII) return 'allNonBasicAscii';
      const t = new Set();
      if (this.options.invisibleCharacters)
        for (const n of X.codePoints) H1(String.fromCodePoint(n)) || t.add(n);
      if (this.options.ambiguousCharacters)
        for (const n of this.ambiguousCharacters.getConfusableCodePoints())
          t.add(n);
      for (const n of this.allowedCodePoints) t.delete(n);
      return t;
    }
    shouldHighlightNonBasicASCII(t, n) {
      const s = t.codePointAt(0);
      if (this.allowedCodePoints.has(s)) return 0;
      if (this.options.nonBasicASCII) return 1;
      let i = !1,
        a = !1;
      if (n)
        for (const o of n) {
          const l = o.codePointAt(0),
            c = Hn(o);
          (i = i || c),
            !c &&
              !this.ambiguousCharacters.isAmbiguous(l) &&
              !X.isInvisibleCharacter(l) &&
              (a = !0);
        }
      return !i && a
        ? 0
        : this.options.invisibleCharacters &&
          !H1(t) &&
          X.isInvisibleCharacter(s)
        ? 2
        : this.options.ambiguousCharacters &&
          this.ambiguousCharacters.isAmbiguous(s)
        ? 3
        : 0;
    }
  }
  function H1(e) {
    return ' ' === e || '\n' === e || '\t' === e;
  }
  var ae = function (e, t, n, s) {
    return new (n || (n = Promise))(function (a, o) {
      function l(h) {
        try {
          u(s.next(h));
        } catch (f) {
          o(f);
        }
      }
      function c(h) {
        try {
          u(s.throw(h));
        } catch (f) {
          o(f);
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
            })(h.value).then(l, c);
      }
      u((s = s.apply(e, t || [])).next());
    });
  };
  class Os extends Sr {
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
      const s = _t(
        t.column,
        (function Mr(e) {
          let t = A1;
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
      return s
        ? new R(t.lineNumber, s.startColumn, t.lineNumber, s.endColumn)
        : null;
    }
    words(t) {
      const n = this._lines,
        s = this._wordenize.bind(this);
      let i = 0,
        a = '',
        o = 0,
        l = [];
      return {
        *[Symbol.iterator]() {
          for (;;)
            if (o < l.length) {
              const c = a.substring(l[o].start, l[o].end);
              (o += 1), yield c;
            } else {
              if (!(i < n.length)) break;
              (a = n[i]), (l = s(a, t)), (o = 0), (i += 1);
            }
        },
      };
    }
    getLineWords(t, n) {
      const s = this._lines[t - 1],
        i = this._wordenize(s, n),
        a = [];
      for (const o of i)
        a.push({
          word: s.substring(o.start, o.end),
          startColumn: o.start + 1,
          endColumn: o.end + 1,
        });
      return a;
    }
    _wordenize(t, n) {
      const s = [];
      let i;
      for (n.lastIndex = 0; (i = n.exec(t)) && 0 !== i[0].length; )
        s.push({ start: i.index, end: i.index + i[0].length });
      return s;
    }
    getValueInRange(t) {
      if ((t = this._validateRange(t)).startLineNumber === t.endLineNumber)
        return this._lines[t.startLineNumber - 1].substring(
          t.startColumn - 1,
          t.endColumn - 1
        );
      const n = this._eol,
        s = t.startLineNumber - 1,
        i = t.endLineNumber - 1,
        a = [];
      a.push(this._lines[s].substring(t.startColumn - 1));
      for (let o = s + 1; o < i; o++) a.push(this._lines[o]);
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
        s = this._validatePosition({
          lineNumber: t.endLineNumber,
          column: t.endColumn,
        });
      return n.lineNumber !== t.startLineNumber ||
        n.column !== t.startColumn ||
        s.lineNumber !== t.endLineNumber ||
        s.column !== t.endColumn
        ? {
            startLineNumber: n.lineNumber,
            startColumn: n.column,
            endLineNumber: s.lineNumber,
            endColumn: s.column,
          }
        : t;
    }
    _validatePosition(t) {
      if (!z.isIPosition(t)) throw new Error('bad position');
      let { lineNumber: n, column: s } = t,
        i = !1;
      if (n < 1) (n = 1), (s = 1), (i = !0);
      else if (n > this._lines.length)
        (n = this._lines.length), (s = this._lines[n - 1].length + 1), (i = !0);
      else {
        const a = this._lines[n - 1].length + 1;
        s < 1 ? ((s = 1), (i = !0)) : s > a && ((s = a), (i = !0));
      }
      return i ? { lineNumber: n, column: s } : t;
    }
  }
  let O1 = (() => {
    class e {
      constructor(n, s) {
        (this._host = n),
          (this._models = Object.create(null)),
          (this._foreignModuleFactory = s),
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
          Object.keys(this._models).forEach((s) => n.push(this._models[s])), n
        );
      }
      acceptNewModel(n) {
        this._models[n.url] = new Os(
          ie.parse(n.url),
          n.lines,
          n.EOL,
          n.versionId
        );
      }
      acceptModelChanged(n, s) {
        this._models[n] && this._models[n].onEvents(s);
      }
      acceptRemovedModel(n) {
        this._models[n] && delete this._models[n];
      }
      computeUnicodeHighlights(n, s, i) {
        return ae(this, void 0, void 0, function* () {
          const a = this._getModel(n);
          return a
            ? qs.computeUnicodeHighlights(a, s, i)
            : {
                ranges: [],
                hasMore: !1,
                ambiguousCharacterCount: 0,
                invisibleCharacterCount: 0,
                nonBasicAsciiCharacterCount: 0,
              };
        });
      }
      computeDiff(n, s, i, a) {
        return ae(this, void 0, void 0, function* () {
          const o = this._getModel(n),
            l = this._getModel(s);
          return o && l ? e.computeDiff(o, l, i, a) : null;
        });
      }
      static computeDiff(n, s, i, a) {
        const o = n.getLinesContent(),
          l = s.getLinesContent(),
          u = new wr(o, l, {
            shouldComputeCharChanges: !0,
            shouldPostProcessCharChanges: !0,
            shouldIgnoreTrimWhitespace: i,
            shouldMakePrettyDiff: !0,
            maxComputationTime: a,
          }).computeDiff(),
          h = !(u.changes.length > 0) && this._modelsAreIdentical(n, s);
        return { quitEarly: u.quitEarly, identical: h, changes: u.changes };
      }
      static _modelsAreIdentical(n, s) {
        const i = n.getLineCount();
        if (i !== s.getLineCount()) return !1;
        for (let o = 1; o <= i; o++)
          if (n.getLineContent(o) !== s.getLineContent(o)) return !1;
        return !0;
      }
      computeMoreMinimalEdits(n, s) {
        return ae(this, void 0, void 0, function* () {
          const i = this._getModel(n);
          if (!i) return s;
          const a = [];
          let o;
          s = s
            .slice(0)
            .sort((l, c) =>
              l.range && c.range
                ? R.compareRangesUsingStarts(l.range, c.range)
                : (l.range ? 0 : 1) - (c.range ? 0 : 1)
            );
          for (let { range: l, text: c, eol: u } of s) {
            if (('number' == typeof u && (o = u), R.isEmpty(l) && !c)) continue;
            const h = i.getValueInRange(l);
            if (((c = c.replace(/\r\n|\n|\r/g, i.eol)), h === c)) continue;
            if (Math.max(c.length, h.length) > e._diffLimit) {
              a.push({ range: l, text: c });
              continue;
            }
            const f = tr(h, c, !1),
              d = i.offsetAt(R.lift(l).getStartPosition());
            for (const b of f) {
              const L = i.positionAt(d + b.originalStart),
                N = i.positionAt(d + b.originalStart + b.originalLength),
                y = {
                  text: c.substr(b.modifiedStart, b.modifiedLength),
                  range: {
                    startLineNumber: L.lineNumber,
                    startColumn: L.column,
                    endLineNumber: N.lineNumber,
                    endColumn: N.column,
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
        return ae(this, void 0, void 0, function* () {
          const s = this._getModel(n);
          return s
            ? (function Pr(e) {
                return e &&
                  'function' == typeof e.getLineCount &&
                  'function' == typeof e.getLineContent
                  ? Oe.computeLinks(e)
                  : [];
              })(s)
            : null;
        });
      }
      textualSuggest(n, s, i, a) {
        return ae(this, void 0, void 0, function* () {
          const o = new Ue(!0),
            l = new RegExp(i, a),
            c = new Set();
          e: for (const u of n) {
            const h = this._getModel(u);
            if (h)
              for (const f of h.words(l))
                if (
                  f !== s &&
                  isNaN(Number(f)) &&
                  (c.add(f), c.size > e._suggestionsLimit)
                )
                  break e;
          }
          return { words: Array.from(c), duration: o.elapsed() };
        });
      }
      computeWordRanges(n, s, i, a) {
        return ae(this, void 0, void 0, function* () {
          const o = this._getModel(n);
          if (!o) return Object.create(null);
          const l = new RegExp(i, a),
            c = Object.create(null);
          for (let u = s.startLineNumber; u < s.endLineNumber; u++) {
            const h = o.getLineWords(u, l);
            for (const f of h) {
              if (!isNaN(Number(f.word))) continue;
              let d = c[f.word];
              d || ((d = []), (c[f.word] = d)),
                d.push({
                  startLineNumber: u,
                  startColumn: f.startColumn,
                  endLineNumber: u,
                  endColumn: f.endColumn,
                });
            }
          }
          return c;
        });
      }
      navigateValueSet(n, s, i, a, o) {
        return ae(this, void 0, void 0, function* () {
          const l = this._getModel(n);
          if (!l) return null;
          const c = new RegExp(a, o);
          s.startColumn === s.endColumn &&
            (s = {
              startLineNumber: s.startLineNumber,
              startColumn: s.startColumn,
              endLineNumber: s.endLineNumber,
              endColumn: s.endColumn + 1,
            });
          const u = l.getValueInRange(s),
            h = l.getWordAtPosition(
              { lineNumber: s.startLineNumber, column: s.startColumn },
              c
            );
          if (!h) return null;
          const f = l.getValueInRange(h);
          return Ct.INSTANCE.navigateValueSet(s, u, h, f, i);
        });
      }
      loadForeignModule(n, s, i) {
        const l = {
          host: Mn(i, (c, u) => this._host.fhr(c, u)),
          getMirrorModels: () => this._getModels(),
        };
        return this._foreignModuleFactory
          ? ((this._foreignModule = this._foreignModuleFactory(l, s)),
            Promise.resolve(tt(this._foreignModule)))
          : Promise.reject(new Error('Unexpected usage'));
      }
      fmr(n, s) {
        if (!this._foreignModule || 'function' != typeof this._foreignModule[n])
          return Promise.reject(
            new Error('Missing requestHandler or method: ' + n)
          );
        try {
          return Promise.resolve(
            this._foreignModule[n].apply(this._foreignModule, s)
          );
        } catch (i) {
          return Promise.reject(i);
        }
      }
    }
    return (e._diffLimit = 1e5), (e._suggestionsLimit = 1e4), e;
  })();
  'function' == typeof importScripts &&
    (I.monaco = (function ks() {
      return {
        editor: void 0,
        languages: void 0,
        CancellationTokenSource: Rr,
        Emitter: j,
        KeyCode: R1,
        KeyMod: xs,
        Position: z,
        Range: R,
        Selection: $,
        SelectionDirection: I1,
        MarkerSeverity: B1,
        MarkerTag: V1,
        Uri: ie,
        Token: Or,
      };
    })());
  let Mt = !1;
  self.onmessage = (e) => {
    Mt ||
      (function zs(e) {
        if (Mt) return;
        Mt = !0;
        const t = new i1(
          (n) => {
            self.postMessage(n);
          },
          (n) => new O1(n, e)
        );
        self.onmessage = (n) => {
          t.onmessage(n.data);
        };
      })(null);
  };
})();
