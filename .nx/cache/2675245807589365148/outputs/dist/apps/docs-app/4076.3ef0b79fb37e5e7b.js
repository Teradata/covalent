'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [4076],
  {
    35218: (R, O, n) => {
      n.d(O, { O: () => h });
      var e = n(81583),
        o = n(17728),
        g = n(19212);
      class v {
        $implicit = void 0;
        tdLoading = void 0;
      }
      let y = 0,
        h = (() => {
          class f {
            _viewContainerRef;
            _templateRef;
            _loadingService;
            _context = new v();
            _loadingRef;
            name;
            set until(p) {
              this.name || (this.name = 'td-loading-until-' + y++),
                (this._context.$implicit = this._context.tdLoading = p),
                p
                  ? this._loadingService.resolveAll(this.name)
                  : this._loadingService.register(this.name);
            }
            type = e.Fq.Circular;
            mode = e.s3.Indeterminate;
            strategy = e.I0.Replace;
            color = 'primary';
            constructor(p, d, i) {
              (this._viewContainerRef = p),
                (this._templateRef = d),
                (this._loadingService = i);
            }
            ngOnInit() {
              this._registerComponent();
            }
            ngOnDestroy() {
              this._loadingService.removeComponent(this.name),
                (this._loadingRef = void 0);
            }
            _registerComponent() {
              if (!this.name)
                throw new Error('Name is needed to register loading directive');
              this._loadingRef ||
                (this._loadingRef = this._loadingService.createComponent(
                  {
                    name: this.name,
                    type: this.type,
                    mode: this.mode,
                    color: this.color,
                    strategy: this.strategy,
                  },
                  this._viewContainerRef,
                  this._templateRef,
                  this._context
                ));
            }
            static ɵfac = function (d) {
              return new (d || f)(g.Y36(g.s_b), g.Y36(g.Rgc), g.Y36(o.bI));
            };
            static ɵdir = g.lG2({
              type: f,
              selectors: [['', 'tdLoading', '']],
              inputs: {
                name: ['tdLoading', 'name'],
                until: ['tdLoadingUntil', 'until'],
                type: ['tdLoadingType', 'type'],
                mode: ['tdLoadingMode', 'mode'],
                strategy: ['tdLoadingStrategy', 'strategy'],
                color: ['tdLoadingColor', 'color'],
              },
            });
          }
          return f;
        })();
    },
    81583: (R, O, n) => {
      n.d(O, {
        Fq: () => d,
        I0: () => r,
        P0: () => s,
        iZ: () => t,
        s3: () => i,
      });
      var e = n(1904),
        o = n(19212),
        g = n(96814),
        v = n(16007),
        y = n(55940),
        h = n(68484);
      function f(a, m) {
        if ((1 & a && o._UZ(0, 'mat-progress-spinner', 5), 2 & a)) {
          const c = o.oxw();
          o.Q6J('mode', c.mode)('value', c.value)('color', c.color)(
            'diameter',
            c.getCircleDiameter()
          )('strokeWidth', c.getCircleStrokeWidth());
        }
      }
      function C(a, m) {
        if ((1 & a && o._UZ(0, 'mat-progress-bar', 6), 2 & a)) {
          const c = o.oxw();
          o.Q6J('mode', c.mode)('value', c.value)('color', c.color);
        }
      }
      function p(a, m) {}
      var d = (function (a) {
          return (a.Circular = 'circular'), (a.Linear = 'linear'), a;
        })(d || {}),
        i = (function (a) {
          return (
            (a.Determinate = 'determinate'),
            (a.Indeterminate = 'indeterminate'),
            a
          );
        })(i || {}),
        r = (function (a) {
          return (a.Overlay = 'overlay'), (a.Replace = 'replace'), a;
        })(r || {}),
        t = (function (a) {
          return (
            (a.FullScreen = 'fullscreen'),
            (a.Overlay = 'overlay'),
            (a.None = 'none'),
            a
          );
        })(t || {});
      let s = (() => {
        class a {
          _elementRef;
          _changeDetectorRef;
          _mode = i.Indeterminate;
          _defaultMode = i.Indeterminate;
          _value = 0;
          _circleDiameter = 40;
          animation = !1;
          content;
          set mode(c) {
            this._defaultMode = c;
          }
          get mode() {
            return this._mode;
          }
          set value(c) {
            (this._value = c), this._changeDetectorRef.markForCheck();
          }
          get value() {
            return this._value;
          }
          style = t.None;
          height = 100;
          type = d.Circular;
          color = 'primary';
          constructor(c, l) {
            (this._elementRef = c), (this._changeDetectorRef = l);
          }
          ngDoCheck() {
            this.isOverlay() &&
              this._hostHeight() > 1 &&
              this.animation &&
              (this._setCircleDiameter(),
              this._changeDetectorRef.markForCheck());
          }
          getHeight() {
            if (!this.isOverlay() && !this.isFullScreen())
              return this.height ? `${this.height}px` : '150px';
          }
          getCircleDiameter() {
            return this._circleDiameter;
          }
          getCircleStrokeWidth() {
            const c = this.getCircleDiameter() / 10;
            return Math.abs(c);
          }
          isCircular() {
            return this.type === d.Circular;
          }
          isLinear() {
            return this.type === d.Linear;
          }
          isFullScreen() {
            return this.style === t.FullScreen;
          }
          isOverlay() {
            return this.style === t.Overlay;
          }
          show() {
            (this._mode = this._defaultMode),
              this._setCircleDiameter(),
              (this.animation = !0),
              this._changeDetectorRef.markForCheck();
          }
          hide() {
            (this.animation = !1),
              (this._mode = i.Determinate),
              (this.value = 0),
              this._changeDetectorRef.markForCheck();
          }
          _setCircleDiameter() {
            let c = 40;
            this.height
              ? (c = this.height)
              : void 0 === this.height && (c = this._hostHeight()),
              (this._circleDiameter = c <= 40 ? Math.floor(c) : 40);
          }
          _hostHeight() {
            return this._elementRef.nativeElement
              ? this._elementRef.nativeElement.getBoundingClientRect().height
              : 0;
          }
          static ɵfac = function (l) {
            return new (l || a)(o.Y36(o.SBq), o.Y36(o.sBO));
          };
          static ɵcmp = o.Xpm({
            type: a,
            selectors: [['td-loading']],
            decls: 5,
            vars: 14,
            consts: [
              [1, 'td-loading-wrapper'],
              [1, 'td-loading'],
              [
                3,
                'mode',
                'value',
                'color',
                'diameter',
                'strokeWidth',
                4,
                'ngIf',
              ],
              [3, 'mode', 'value', 'color', 4, 'ngIf'],
              [3, 'cdkPortalOutlet'],
              [3, 'mode', 'value', 'color', 'diameter', 'strokeWidth'],
              [3, 'mode', 'value', 'color'],
            ],
            template: function (l, _) {
              1 & l &&
                (o.TgZ(0, 'div', 0)(1, 'div', 1),
                o.YNc(2, f, 1, 5, 'mat-progress-spinner', 2)(
                  3,
                  C,
                  1,
                  3,
                  'mat-progress-bar',
                  3
                ),
                o.qZA(),
                o.YNc(4, p, 0, 0, 'ng-template', 4),
                o.qZA()),
                2 & l &&
                  (o.Udp('min-height', _.getHeight()),
                  o.ekj(
                    'td-overlay-circular',
                    (_.isOverlay() || _.isFullScreen()) && !_.isLinear()
                  )('td-overlay', _.isOverlay() || _.isFullScreen())(
                    'td-fullscreen',
                    _.isFullScreen()
                  ),
                  o.xp6(1),
                  o.Udp('min-height', _.getHeight()),
                  o.Q6J('@tdFadeInOut', _.animation),
                  o.xp6(1),
                  o.Q6J('ngIf', _.isCircular()),
                  o.xp6(1),
                  o.Q6J('ngIf', _.isLinear()),
                  o.xp6(1),
                  o.Q6J('cdkPortalOutlet', _.content));
            },
            dependencies: [g.O5, v.pW, y.Ou, h.Pl],
            styles: [
              '.td-loading-wrapper[_ngcontent-%COMP%]{position:relative;display:block}.td-loading-wrapper.td-fullscreen[_ngcontent-%COMP%]{position:inherit}.td-loading-wrapper[_ngcontent-%COMP%]   .td-loading[_ngcontent-%COMP%]{box-sizing:border-box;display:flex;flex-direction:row;align-items:center;align-content:center;max-width:100%;justify-content:center;flex:1}.td-loading-wrapper.td-overlay[_ngcontent-%COMP%]   .td-loading[_ngcontent-%COMP%]{position:absolute;margin:0;top:0;left:0;right:0;z-index:1000}.td-loading-wrapper.td-overlay[_ngcontent-%COMP%]   .td-loading[_ngcontent-%COMP%]   mat-progress-bar[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0}.td-loading-wrapper.td-overlay-circular[_ngcontent-%COMP%]   .td-loading[_ngcontent-%COMP%]{bottom:0}',
            ],
            data: { animation: [e.Te] },
          });
        }
        return a;
      })();
    },
    24076: (R, O, n) => {
      n.d(O, {
        _: () => r,
        s3: () => p.s3,
        I0: () => p.I0,
        Fq: () => p.Fq,
        bI: () => h.bI,
      });
      var e = n(96814),
        o = n(68484),
        g = n(33651),
        v = n(16007),
        y = n(55940),
        h = n(17728),
        f = n(60492),
        p = (n(35218), n(81583)),
        d = n(19212);
      let r = (() => {
        class t {
          static ɵfac = function (a) {
            return new (a || t)();
          };
          static ɵmod = d.oAB({ type: t });
          static ɵinj = d.cJS({
            providers: [f.t_, h.xR],
            imports: [e.ez, v.Cv, y.Cq, g.U8, o.eL],
          });
        }
        return t;
      })();
    },
    60492: (R, O, n) => {
      n.d(O, { AM: () => f, t_: () => p });
      var e = n(19212),
        o = n(68484),
        g = n(33651),
        v = n(78645),
        y = n(93997),
        h = n(81583);
      let f = (() => {
        class d {
          _componentFactoryResolver;
          _overlay;
          _injector;
          constructor(r, t, u) {
            (this._componentFactoryResolver = r),
              (this._overlay = t),
              (this._injector = u);
          }
          createFullScreenComponent(r) {
            (r.height = void 0), (r.style = h.iZ.FullScreen);
            const t = this._initializeContext();
            let s,
              u = !1;
            return (
              t.observable.pipe((0, y.x)()).subscribe((a) => {
                a > 0 && !u
                  ? ((u = !0),
                    (s = this._createOverlay()),
                    (t.componentRef = s.attach(new o.C5(h.P0))),
                    this._mapOptions(r, t.componentRef?.instance),
                    t.componentRef?.instance.show(),
                    t.componentRef?.changeDetectorRef.detectChanges())
                  : a <= 0 &&
                    u &&
                    ((u = !1),
                    t.componentRef?.instance.hide(),
                    t.componentRef?.destroy(),
                    s.detach(),
                    s.dispose());
              }),
              t
            );
          }
          createOverlayComponent(r, t, u) {
            (r.height = void 0), (r.style = h.iZ.Overlay);
            const s = this._createComponent(r);
            let a = !1;
            return (
              s.componentRef &&
                ((s.componentRef.instance.content = new o.UE(u, t)),
                t.clear(),
                t.insert(s.componentRef?.hostView, 0)),
              s.observable.pipe((0, y.x)()).subscribe((m) => {
                m > 0 && !a
                  ? ((a = !0), s.componentRef?.instance.show())
                  : m <= 0 && a && ((a = !1), s.componentRef?.instance.hide());
              }),
              s
            );
          }
          createReplaceComponent(r, t, u, s) {
            const a = u.elementRef.nativeElement;
            (r.height = a.nextElementSibling
              ? a.nextElementSibling.scrollHeight
              : void 0),
              (r.style = h.iZ.None);
            const m = this._createComponent(r);
            let c = !1;
            const l = t.createEmbeddedView(u, s);
            return (
              m.observable.pipe((0, y.x)()).subscribe((_) => {
                _ > 0 && !c && m.componentRef
                  ? ((c = !0),
                    t.indexOf(m.componentRef.hostView) < 0 &&
                      (t.detach(t.indexOf(l)),
                      t.insert(m.componentRef.hostView, 0)),
                    m.componentRef?.instance.show())
                  : _ <= 0 &&
                    c &&
                    m.componentRef &&
                    ((c = !1),
                    m.componentRef?.instance.hide(),
                    t.indexOf(l) < 0 &&
                      (t.detach(t.indexOf(m.componentRef.hostView)),
                      t.insert(l, 0)),
                    l.detectChanges(),
                    l.markForCheck());
              }),
              m
            );
          }
          _createOverlay() {
            const r = new g.X_();
            return (
              (r.hasBackdrop = !1),
              (r.positionStrategy = this._overlay
                .position()
                .global()
                .centerHorizontally()
                .centerVertically()),
              this._overlay.create(r)
            );
          }
          _createComponent(r) {
            const t = this._initializeContext();
            return (
              (t.componentRef = this._componentFactoryResolver
                .resolveComponentFactory(h.P0)
                .create(this._injector)),
              this._mapOptions(r, t.componentRef.instance),
              t
            );
          }
          _initializeContext() {
            const r = new v.x();
            return {
              observable: r.asObservable(),
              subject: r,
              componentRef: void 0,
              times: 0,
            };
          }
          _mapOptions(r, t) {
            r.style && (t.style = r.style),
              void 0 !== r.type && (t.type = r.type),
              void 0 !== r.height && (t.height = r.height),
              void 0 !== r.mode && (t.mode = r.mode),
              void 0 !== r.color && (t.color = r.color);
          }
          static ɵfac = function (t) {
            return new (t || d)(e.LFG(e._Vd), e.LFG(g.aV), e.LFG(e.zs3));
          };
          static ɵprov = e.Yz7({ token: d, factory: d.ɵfac });
        }
        return d;
      })();
      const p = {
        provide: f,
        deps: [[new e.FiY(), new e.tp0(), f], e._Vd, g.aV, e.zs3],
        useFactory: function C(d, i, r, t) {
          return d || new f(i, r, t);
        },
      };
    },
    17728: (R, O, n) => {
      n.d(O, { bI: () => h, xR: () => C });
      var e = n(19212),
        o = n(81583),
        g = n(60492);
      class v {
        name;
        type;
        mode;
        color;
        constructor(d) {
          if (((this.name = d.name), !this.name))
            throw Error('Name is required for [TdLoading] configuration.');
          (this.mode = d.mode ? d.mode : o.s3.Indeterminate),
            (this.type = d.type ? d.type : o.Fq.Circular),
            (this.color = d.color ? d.color : 'primary');
        }
      }
      class y extends v {
        strategy;
        constructor(d) {
          super(d), (this.strategy = d.strategy ? d.strategy : o.I0.Replace);
        }
      }
      let h = (() => {
        class p {
          _loadingFactory;
          _context = {};
          _timeouts = {};
          constructor(i) {
            (this._loadingFactory = i),
              this.create({ name: 'td-loading-main' });
          }
          createComponent(i, r, t, u) {
            const s = new y(i);
            if (this._context[s.name])
              throw Error(
                `Name duplication: [TdLoading] directive has a name conflict with ${s.name}.`
              );
            return (
              (this._context[s.name] =
                s.strategy === o.I0.Overlay
                  ? this._loadingFactory.createOverlayComponent(s, r, t)
                  : this._loadingFactory.createReplaceComponent(s, r, t, u)),
              this._context[s.name]
            );
          }
          create(i) {
            const r = new v(i);
            this.removeComponent(r.name),
              (this._context[r.name] =
                this._loadingFactory.createFullScreenComponent(r));
          }
          removeComponent(i) {
            this._context[i] &&
              (this._context[i].subject.unsubscribe(),
              this._context[i].componentRef &&
                this._context[i].componentRef?.destroy(),
              delete this._context[i]);
          }
          register(i = 'td-loading-main', r = 1) {
            return this._context[i]
              ? ((this._context[i].times += r = r < 1 ? 1 : r),
                this._context[i].subject.next(this._context[i].times),
                !0)
              : (this._timeouts[i]
                  ? this._clearTimeout(i)
                  : (this._timeouts[i] = setTimeout(() => {
                      this.register(i, r);
                    })),
                !1);
          }
          resolve(i = 'td-loading-main', r = 1) {
            if ((this._clearTimeout(i), this._context[i])) {
              if (((r = r < 1 ? 1 : r), this._context[i].times)) {
                let t = this._context[i].times;
                (t -= r), (this._context[i].times = t < 0 ? 0 : t);
              }
              return this._context[i].subject?.next(this._context[i].times), !0;
            }
            return !1;
          }
          resolveAll(i = 'td-loading-main') {
            return (
              this._clearTimeout(i),
              !!this._context[i] &&
                ((this._context[i].times = 0),
                this._context[i].subject?.next(this._context[i].times),
                !0)
            );
          }
          setValue(i, r) {
            if (this._context[i]) {
              const t = this._context[i].componentRef?.instance;
              if (t.mode === o.s3.Determinate && t.animation)
                return (t.value = r), !0;
            }
            return !1;
          }
          _clearTimeout(i) {
            clearTimeout(this._timeouts[i]), delete this._timeouts[i];
          }
          static ɵfac = function (r) {
            return new (r || p)(e.LFG(g.AM));
          };
          static ɵprov = e.Yz7({ token: p, factory: p.ɵfac });
        }
        return p;
      })();
      const C = {
        provide: h,
        deps: [[new e.FiY(), new e.tp0(), h], g.AM],
        useFactory: function f(p, d) {
          return p || new h(d);
        },
      };
    },
    55940: (R, O, n) => {
      n.d(O, { Cq: () => u, Ou: () => r });
      var e = n(19212),
        o = n(23680),
        g = n(42495),
        v = n(96814);
      const y = ['determinateSpinner'];
      function h(s, a) {
        if (
          (1 & s &&
            (e.O4$(), e.TgZ(0, 'svg', 11), e._UZ(1, 'circle', 12), e.qZA()),
          2 & s)
        ) {
          const m = e.oxw();
          e.uIk('viewBox', m._viewBox()),
            e.xp6(1),
            e.Udp('stroke-dasharray', m._strokeCircumference(), 'px')(
              'stroke-dashoffset',
              m._strokeCircumference() / 2,
              'px'
            )('stroke-width', m._circleStrokeWidth(), '%'),
            e.uIk('r', m._circleRadius());
        }
      }
      const f = (0, o.pj)(
          class {
            constructor(s) {
              this._elementRef = s;
            }
          },
          'primary'
        ),
        C = new e.OlP('mat-progress-spinner-default-options', {
          providedIn: 'root',
          factory: function p() {
            return { diameter: d };
          },
        }),
        d = 100;
      let r = (() => {
          class s extends f {
            constructor(m, c, l) {
              super(m),
                (this.mode =
                  'mat-spinner' ===
                  this._elementRef.nativeElement.nodeName.toLowerCase()
                    ? 'indeterminate'
                    : 'determinate'),
                (this._value = 0),
                (this._diameter = d),
                (this._noopAnimations =
                  'NoopAnimations' === c && !!l && !l._forceAnimations),
                l &&
                  (l.color && (this.color = this.defaultColor = l.color),
                  l.diameter && (this.diameter = l.diameter),
                  l.strokeWidth && (this.strokeWidth = l.strokeWidth));
            }
            get value() {
              return 'determinate' === this.mode ? this._value : 0;
            }
            set value(m) {
              this._value = Math.max(0, Math.min(100, (0, g.su)(m)));
            }
            get diameter() {
              return this._diameter;
            }
            set diameter(m) {
              this._diameter = (0, g.su)(m);
            }
            get strokeWidth() {
              return this._strokeWidth ?? this.diameter / 10;
            }
            set strokeWidth(m) {
              this._strokeWidth = (0, g.su)(m);
            }
            _circleRadius() {
              return (this.diameter - 10) / 2;
            }
            _viewBox() {
              const m = 2 * this._circleRadius() + this.strokeWidth;
              return `0 0 ${m} ${m}`;
            }
            _strokeCircumference() {
              return 2 * Math.PI * this._circleRadius();
            }
            _strokeDashOffset() {
              return 'determinate' === this.mode
                ? (this._strokeCircumference() * (100 - this._value)) / 100
                : null;
            }
            _circleStrokeWidth() {
              return (this.strokeWidth / this.diameter) * 100;
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || s)(e.Y36(e.SBq), e.Y36(e.QbO, 8), e.Y36(C));
            });
            static #r = (this.ɵcmp = e.Xpm({
              type: s,
              selectors: [['mat-progress-spinner'], ['mat-spinner']],
              viewQuery: function (c, l) {
                if ((1 & c && e.Gf(y, 5), 2 & c)) {
                  let _;
                  e.iGM((_ = e.CRH())) && (l._determinateCircle = _.first);
                }
              },
              hostAttrs: [
                'role',
                'progressbar',
                'tabindex',
                '-1',
                1,
                'mat-mdc-progress-spinner',
                'mdc-circular-progress',
              ],
              hostVars: 16,
              hostBindings: function (c, l) {
                2 & c &&
                  (e.uIk('aria-valuemin', 0)('aria-valuemax', 100)(
                    'aria-valuenow',
                    'determinate' === l.mode ? l.value : null
                  )('mode', l.mode),
                  e.Udp('width', l.diameter, 'px')('height', l.diameter, 'px')(
                    '--mdc-circular-progress-size',
                    l.diameter + 'px'
                  )(
                    '--mdc-circular-progress-active-indicator-width',
                    l.diameter + 'px'
                  ),
                  e.ekj('_mat-animation-noopable', l._noopAnimations)(
                    'mdc-circular-progress--indeterminate',
                    'indeterminate' === l.mode
                  ));
              },
              inputs: {
                color: 'color',
                mode: 'mode',
                value: 'value',
                diameter: 'diameter',
                strokeWidth: 'strokeWidth',
              },
              exportAs: ['matProgressSpinner'],
              features: [e.qOj],
              decls: 14,
              vars: 11,
              consts: [
                ['circle', ''],
                [
                  'aria-hidden',
                  'true',
                  1,
                  'mdc-circular-progress__determinate-container',
                ],
                ['determinateSpinner', ''],
                [
                  'xmlns',
                  'http://www.w3.org/2000/svg',
                  'focusable',
                  'false',
                  1,
                  'mdc-circular-progress__determinate-circle-graphic',
                ],
                [
                  'cx',
                  '50%',
                  'cy',
                  '50%',
                  1,
                  'mdc-circular-progress__determinate-circle',
                ],
                [
                  'aria-hidden',
                  'true',
                  1,
                  'mdc-circular-progress__indeterminate-container',
                ],
                [1, 'mdc-circular-progress__spinner-layer'],
                [
                  1,
                  'mdc-circular-progress__circle-clipper',
                  'mdc-circular-progress__circle-left',
                ],
                [3, 'ngTemplateOutlet'],
                [1, 'mdc-circular-progress__gap-patch'],
                [
                  1,
                  'mdc-circular-progress__circle-clipper',
                  'mdc-circular-progress__circle-right',
                ],
                [
                  'xmlns',
                  'http://www.w3.org/2000/svg',
                  'focusable',
                  'false',
                  1,
                  'mdc-circular-progress__indeterminate-circle-graphic',
                ],
                ['cx', '50%', 'cy', '50%'],
              ],
              template: function (c, l) {
                if (
                  (1 & c &&
                    (e.YNc(0, h, 2, 8, 'ng-template', null, 0, e.W1O),
                    e.TgZ(2, 'div', 1, 2),
                    e.O4$(),
                    e.TgZ(4, 'svg', 3),
                    e._UZ(5, 'circle', 4),
                    e.qZA()(),
                    e.kcU(),
                    e.TgZ(6, 'div', 5)(7, 'div', 6)(8, 'div', 7),
                    e.GkF(9, 8),
                    e.qZA(),
                    e.TgZ(10, 'div', 9),
                    e.GkF(11, 8),
                    e.qZA(),
                    e.TgZ(12, 'div', 10),
                    e.GkF(13, 8),
                    e.qZA()()()),
                  2 & c)
                ) {
                  const _ = e.MAs(1);
                  e.xp6(4),
                    e.uIk('viewBox', l._viewBox()),
                    e.xp6(1),
                    e.Udp('stroke-dasharray', l._strokeCircumference(), 'px')(
                      'stroke-dashoffset',
                      l._strokeDashOffset(),
                      'px'
                    )('stroke-width', l._circleStrokeWidth(), '%'),
                    e.uIk('r', l._circleRadius()),
                    e.xp6(4),
                    e.Q6J('ngTemplateOutlet', _),
                    e.xp6(2),
                    e.Q6J('ngTemplateOutlet', _),
                    e.xp6(2),
                    e.Q6J('ngTemplateOutlet', _);
                }
              },
              dependencies: [v.tP],
              styles: [
                '@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;line-height:0;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--closed{opacity:0}.mat-mdc-progress-spinner{--mdc-circular-progress-active-indicator-width:4px;--mdc-circular-progress-size:48px}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mdc-circular-progress-active-indicator-color)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mat-mdc-progress-spinner circle{stroke-width:var(--mdc-circular-progress-active-indicator-width)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-1 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-2 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-3 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-4 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mat-mdc-progress-spinner .mdc-circular-progress{width:var(--mdc-circular-progress-size) !important;height:var(--mdc-circular-progress-size) !important}.mat-mdc-progress-spinner{display:block;overflow:hidden;line-height:0}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}',
              ],
              encapsulation: 2,
              changeDetection: 0,
            }));
          }
          return s;
        })(),
        u = (() => {
          class s {
            static #e = (this.ɵfac = function (c) {
              return new (c || s)();
            });
            static #r = (this.ɵmod = e.oAB({ type: s }));
            static #t = (this.ɵinj = e.cJS({ imports: [v.ez, o.BQ] }));
          }
          return s;
        })();
    },
  },
]);
