'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [8592],
  {
    22497: (E, d, e) => {
      e.d(d, { q: () => u });
      var t = e(96814),
        i = e(52787),
        n = e(74104),
        s = e(30617),
        a = e(95195),
        l = e(1904),
        o = e(39419),
        r = e(41257),
        _ = e(19212);
      let u = (() => {
        class m {
          static ɵfac = function (y) {
            return new (y || m)();
          };
          static ɵmod = _.oAB({ type: m });
          static ɵinj = _.cJS({
            imports: [t.ez, i.Bz, s.Ps, a.QW, n.Nh, l.IV, o.A0, r.m],
          });
        }
        return m;
      })();
    },
    73698: (E, d, e) => {
      e.d(d, { P: () => h });
      var t = e(78645),
        i = e(59773),
        n = e(75068),
        s = e(15389),
        a = e(19212),
        l = e(52787),
        o = e(96814),
        r = e(30617),
        _ = e(95195),
        u = e(40773);
      function m(v, D) {
        if (
          (1 & v &&
            (a.TgZ(0, 'div', 17), a._uU(1), a.ALo(2, 'truncate'), a.qZA()),
          2 & v)
        ) {
          const M = a.oxw(2).$implicit;
          a.xp6(1), a.hij(' ', a.lcZ(2, 1, M.description), ' ');
        }
      }
      const O = (v) => ({ 'no-description': v });
      function p(v, D) {
        if (
          (1 & v &&
            (a.TgZ(0, 'div', 10)(1, 'a', 11)(2, 'mat-card', 12)(
              3,
              'mat-icon',
              13
            ),
            a._uU(4),
            a.qZA(),
            a.TgZ(5, 'div')(6, 'div', 14)(7, 'span', 15),
            a._uU(8),
            a.qZA()(),
            a.YNc(9, m, 3, 3, 'div', 16),
            a.qZA()()()()),
          2 & v)
        ) {
          const M = a.oxw().$implicit,
            P = a.oxw(2).$implicit;
          a.xp6(1),
            a.Q6J('routerLink', M.route),
            a.xp6(1),
            a.Q6J('ngClass', a.VKq(6, O, !(null != M && M.description))),
            a.xp6(1),
            a.MGl('ngClass', 'tc-', M.color || P.color || 'grey-600', ''),
            a.xp6(1),
            a.hij(' ', M.icon, ' '),
            a.xp6(4),
            a.Oqu(M.name),
            a.xp6(1),
            a.Q6J('ngIf', null == M ? null : M.description);
        }
      }
      function y(v, D) {
        if (
          (1 & v && (a.ynx(0), a.YNc(1, p, 10, 8, 'div', 9), a.BQk()), 2 & v)
        ) {
          const M = D.$implicit;
          a.xp6(1), a.Q6J('ngIf', 'Overview' !== M.name);
        }
      }
      function g(v, D) {
        if (
          (1 & v &&
            (a.TgZ(0, 'div', 6)(1, 'h3', 7),
            a._uU(2),
            a.qZA(),
            a.TgZ(3, 'div', 8),
            a.YNc(4, y, 2, 1, 'ng-container', 3),
            a.qZA()()),
          2 & v)
        ) {
          const M = a.oxw().$implicit;
          a.xp6(2),
            a.hij(' ', M.name, ' '),
            a.xp6(2),
            a.Q6J('ngForOf', M.views);
        }
      }
      function T(v, D) {
        if (
          (1 & v && (a.TgZ(0, 'section'), a.YNc(1, g, 5, 2, 'div', 5), a.qZA()),
          2 & v)
        ) {
          const M = D.$implicit;
          a.xp6(1),
            a.Q6J(
              'ngIf',
              !(
                1 === (null == M || null == M.views ? null : M.views.length) &&
                'Overview' ===
                  (null == M || null == M.views[0] ? null : M.views[0].name)
              )
            );
        }
      }
      function c(v, D) {
        if (
          (1 & v &&
            (a.TgZ(0, 'section', 18)(1, 'div', 19)(2, 'h1', 20),
            a._uU(3, 'External Components'),
            a.qZA(),
            a.TgZ(4, 'h3', 21),
            a._uU(5, ' Recommended but not maintained by Covalent '),
            a.qZA()(),
            a.TgZ(6, 'div', 8)(7, 'div', 10)(8, 'a', 22)(9, 'mat-card', 23)(
              10,
              'mat-icon',
              24
            ),
            a._uU(11, 'layers'),
            a.qZA(),
            a.TgZ(12, 'div')(13, 'div', 25),
            a._uU(14, 'Angular Material'),
            a.qZA(),
            a.TgZ(15, 'div', 26),
            a._uU(16, ' A short description about the component. '),
            a.qZA()()()()()()()),
          2 & v)
        ) {
          const M = a.oxw();
          a.xp6(4),
            a.Udp('max-width', 468, 'px'),
            a.xp6(4),
            a.Q6J('href', M.angularDocsURL, a.LSH);
        }
      }
      let h = (() => {
        class v {
          route;
          routeAnimation = !0;
          classAnimation = !0;
          category;
          categoryGroups;
          angularDocsURL = 'https://material.angular.io/';
          _destroy$ = new t.x();
          constructor(M) {
            this.route = M;
          }
          ngOnInit() {
            this.route.data.pipe((0, i.R)(this._destroy$)).subscribe((M) => {
              (this.category = s.K3.find(
                (P) => P.name.toLowerCase() === M.category
              )),
                (this.categoryGroups = this.category.routeGroups);
            });
          }
          ngOnDestroy() {
            this._destroy$.next();
          }
          static ɵfac = function (P) {
            return new (P || v)(a.Y36(l.gz));
          };
          static ɵcmp = a.Xpm({
            type: v,
            selectors: [['component-overview']],
            hostVars: 3,
            hostBindings: function (P, C) {
              2 & P &&
                (a.d8E('@routeAnimation', C.routeAnimation),
                a.ekj('td-route-animation', C.classAnimation));
            },
            decls: 7,
            vars: 6,
            consts: [
              [1, 'pad-right-sm', 'pad-left-sm'],
              [1, 'mat-h1', 'push-bottom', 'text-caps'],
              [1, 'mat-h3', 'tc-td-secondary', 'push-bottom-xl'],
              [4, 'ngFor', 'ngForOf'],
              ['class', 'pad-bottom-xxl', 4, 'ngIf'],
              ['class', 'push-bottom-lg pad-bottom-xs', 4, 'ngIf'],
              [1, 'push-bottom-lg', 'pad-bottom-xs'],
              [
                1,
                'mat-h3',
                'version-selector',
                'tc-td-secondary',
                'push-bottom-xs',
                'pad-right-sm',
                'pad-left-sm',
              ],
              ['layout', 'row', 'layout-wrap', ''],
              [
                'flex-xs',
                '100',
                'flex-sm',
                '33',
                'flex-md',
                '33',
                'flex-gt-md',
                '25',
                4,
                'ngIf',
              ],
              [
                'flex-xs',
                '100',
                'flex-sm',
                '33',
                'flex-md',
                '33',
                'flex-gt-md',
                '25',
              ],
              [1, 'text-nodecoration', 'push-sm', 'block', 3, 'routerLink'],
              [
                'layout',
                'column',
                'layout-align',
                'space-between start',
                1,
                'component-card',
                'cursor-pointer',
                'push-none',
                3,
                'ngClass',
              ],
              [3, 'ngClass'],
              [1, 'push-bottom-xs'],
              [1, 'mat-h3'],
              [
                'class',
                'tc-td-secondary mat-caption component-card-body',
                4,
                'ngIf',
              ],
              [1, 'tc-td-secondary', 'mat-caption', 'component-card-body'],
              [1, 'pad-bottom-xxl'],
              [1, 'pad-right-sm', 'pad-left-sm', 'pad-top-xl'],
              [1, 'mat-h1', 'push-bottom-md'],
              [1, 'mat-h3', 'tc-td-secondary', 'push-bottom-lg'],
              ['target', '_blank', 3, 'href'],
              [
                'layout',
                'column',
                'layout-align',
                'space-between start',
                1,
                'component-card',
                'cursor-pointer',
              ],
              [1, 'icon-component', 'tc-deep-purple-800'],
              [1, 'mat-subtitle-1', 'push-bottom-xs'],
              [1, 'tc-td-secondary', 'mat-caption'],
            ],
            template: function (P, C) {
              1 & P &&
                (a.TgZ(0, 'div', 0)(1, 'h1', 1),
                a._uU(2),
                a.qZA(),
                a.TgZ(3, 'h3', 2),
                a._uU(4),
                a.qZA()(),
                a.YNc(5, T, 2, 1, 'section', 3)(6, c, 17, 3, 'section', 4)),
                2 & P &&
                  (a.xp6(2),
                  a.Oqu(C.category.name),
                  a.xp6(1),
                  a.Udp('max-width', 468, 'px'),
                  a.xp6(1),
                  a.hij(' ', C.category.description, ' '),
                  a.xp6(1),
                  a.Q6J('ngForOf', C.categoryGroups),
                  a.xp6(1),
                  a.Q6J('ngIf', 'Components' === C.category.name));
            },
            dependencies: [o.mk, o.sg, o.O5, l.rH, r.Hw, _.a8, u.G],
            styles: [
              '[_nghost-%COMP%]{margin-bottom:200px}.component-card[_ngcontent-%COMP%]{transition:all .3s cubic-bezier(0,0,.2,1);display:flex;height:144px;padding:16px 16px 20px;box-sizing:border-box;box-shadow:0 1px 1px #3c4043cc,0 1px 3px 1px #3c404329}.component-card[_ngcontent-%COMP%]   .component-card-body[_ngcontent-%COMP%]{height:40px;overflow:hidden;white-space:normal;word-break:break-word;-webkit-line-clamp:2;display:box;text-overflow:ellipsis;-webkit-box-orient:vertical}.component-card.no-description[_ngcontent-%COMP%]{height:104px;padding:20px 16px 16px}.component-card[_ngcontent-%COMP%]:hover{box-shadow:0 1px 3px 1px #3c404333,0 2px 8px 4px #3c40431a;transform:translateY(-1px)}',
            ],
            data: { animation: [n.kh] },
          });
        }
        return v;
      })();
    },
    1004: (E, d, e) => {
      e.d(d, { A: () => u });
      var t = e(96814),
        i = e(95195),
        n = e(30617),
        s = e(59038),
        a = e(52787),
        l = e(41257),
        o = e(1904),
        r = e(20951),
        _ = e(19212);
      let u = (() => {
        class m {
          static ɵfac = function (y) {
            return new (y || m)();
          };
          static ɵmod = _.oAB({ type: m });
          static ɵinj = _.cJS({
            imports: [t.ez, a.Bz, s.ie, n.Ps, i.QW, o.IV, l.m, r.m_],
          });
        }
        return m;
      })();
    },
    31791: (E, d, e) => {
      e.d(d, { z: () => v });
      var t = e(78645),
        i = e(9315),
        n = e(65592),
        s = e(37398),
        a = e(26306),
        l = e(59773),
        o = e(19212),
        r = e(69862),
        _ = e(67479),
        u = e(81274),
        m = e(96814),
        O = e(74104),
        p = e(95195),
        y = e(30617),
        g = e(32296),
        T = e(26385);
      function c(D, M) {
        if (
          (1 & D &&
            (o.TgZ(0, 'mat-tab', 9)(1, 'td-highlight', 10),
            o._uU(2),
            o.qZA()()),
          2 & D)
        ) {
          const P = o.oxw(2);
          o.xp6(2), o.hij(' ', P.stylesFile, ' ');
        }
      }
      function f(D, M) {
        if (
          (1 & D &&
            (o.TgZ(0, 'mat-tab-group')(1, 'mat-tab', 4)(2, 'td-highlight', 5),
            o._uU(3),
            o.qZA()(),
            o.TgZ(4, 'mat-tab', 6)(5, 'td-highlight', 7),
            o._uU(6),
            o.qZA()(),
            o.YNc(7, c, 3, 1, 'mat-tab', 8),
            o.qZA()),
          2 & D)
        ) {
          const P = o.oxw();
          o.xp6(3),
            o.hij(' ', P.htmlFile, ' '),
            o.xp6(3),
            o.hij(' ', P.typescriptFile, ' '),
            o.xp6(1),
            o.Q6J('ngIf', P.stylesFile);
        }
      }
      const h = ['*'];
      let v = (() => {
        class D {
          _http;
          demoId;
          demoTitle;
          viewCode = !1;
          typescriptFile;
          htmlFile;
          stylesFile;
          _destroy$ = new t.x();
          constructor(P) {
            this._http = P;
          }
          ngOnDestroy() {
            this._destroy$.next();
          }
          toggleCodeView() {
            if (this.viewCode) this.viewCode = !1;
            else {
              const P = this.demoId.indexOf('-demo-'),
                C = this.demoId.slice(0, P);
              (0, i.D)({
                typescript: this._http.get(
                  `assets/demos/${C}/demos/${this.demoId}/${this.demoId}.component.ts`,
                  { responseType: 'text' }
                ),
                html: this._http.get(
                  `assets/demos/${C}/demos/${this.demoId}/${this.demoId}.component.html`,
                  { responseType: 'text' }
                ),
                styles: this._http.get(
                  `assets/demos/${C}/demos/${this.demoId}/${this.demoId}.component.scss`,
                  { responseType: 'text' }
                ),
              })
                .pipe(
                  (0, s.U)((A) => ({
                    typescript: A.typescript,
                    html: A.html,
                    styles: A.styles,
                  })),
                  (0, a.K)(
                    (A) =>
                      new n.y((L) => {
                        try {
                          L.error(A);
                        } catch {
                          L.error(A);
                        }
                      })
                  ),
                  (0, l.R)(this._destroy$)
                )
                .subscribe((A) => {
                  (this.typescriptFile = A.typescript),
                    (this.htmlFile = A.html),
                    (this.stylesFile = A.styles),
                    (this.viewCode = !0);
                });
            }
          }
          static ɵfac = function (C) {
            return new (C || D)(o.Y36(r.eN));
          };
          static ɵcmp = o.Xpm({
            type: D,
            selectors: [['demo-component']],
            inputs: { demoId: 'demoId', demoTitle: 'demoTitle' },
            ngContentSelectors: h,
            decls: 12,
            vars: 2,
            consts: [
              [1, 'push-none', 'demo-card', 'overflow-hidden'],
              ['flex', ''],
              ['mat-icon-button', '', 3, 'click'],
              [4, 'ngIf'],
              ['label', 'HTML'],
              ['codeLang', 'html'],
              ['label', 'TS'],
              ['codeLang', 'typescript'],
              ['label', 'SCSS', 4, 'ngIf'],
              ['label', 'SCSS'],
              ['codeLang', 'scss'],
            ],
            template: function (C, A) {
              1 & C &&
                (o.F$t(),
                o.TgZ(0, 'mat-card', 0)(1, 'mat-toolbar-row')(2, 'span'),
                o._uU(3),
                o.qZA(),
                o._UZ(4, 'span', 1),
                o.TgZ(5, 'button', 2),
                o.NdJ('click', function () {
                  return A.toggleCodeView();
                }),
                o.TgZ(6, 'mat-icon'),
                o._uU(7, 'code'),
                o.qZA()()(),
                o.YNc(8, f, 8, 3, 'mat-tab-group', 3),
                o._UZ(9, 'mat-divider'),
                o.TgZ(10, 'mat-card-content'),
                o.Hsn(11),
                o.qZA()()),
                2 & C &&
                  (o.xp6(3),
                  o.Oqu(A.demoTitle || A.demoId),
                  o.xp6(5),
                  o.Q6J('ngIf', A.viewCode));
            },
            dependencies: [
              _.S,
              u.rD,
              m.O5,
              O.uX,
              O.SP,
              p.a8,
              p.dn,
              y.Hw,
              g.RK,
              T.d,
            ],
            styles: [
              '.demo-card[_ngcontent-%COMP%]{box-shadow:0 1px 1px #3c4043cc,0 1px 3px 1px #3c404329}.demo-card[_ngcontent-%COMP%]   .mat-toolbar-row[_ngcontent-%COMP%]{height:56px}[_nghost-%COMP%]{display:block;margin-bottom:2em}mat-card-content[_ngcontent-%COMP%]{padding-top:16px}',
            ],
          });
        }
        return D;
      })();
    },
    96535: (E, d, e) => {
      e.d(d, { l: () => m });
      var t = e(96814),
        i = e(74104),
        n = e(95195),
        s = e(30617),
        a = e(32296),
        l = e(96942),
        o = e(69862),
        r = e(81274),
        _ = e(26385),
        u = e(19212);
      let m = (() => {
        class O {
          static ɵfac = function (g) {
            return new (g || O)();
          };
          static ɵmod = u.oAB({ type: O });
          static ɵinj = u.cJS({
            imports: [l.B, r.g0, t.ez, i.Nh, n.QW, s.Ps, a.ot, o.JF, _.t],
          });
        }
        return O;
      })();
    },
    67814: (E, d, e) => {
      e.d(d, { Q: () => r });
      var t = e(56223),
        i = e(98525),
        n = e(30617),
        s = e(64170),
        a = e(96942),
        l = e(91694),
        o = e(19212);
      let r = (() => {
        class _ {
          static ɵfac = function (O) {
            return new (O || _)();
          };
          static ɵmod = o.oAB({ type: _ });
          static ɵinj = o.cJS({ imports: [t.u5, s.lN, n.Ps, i.LD, l.T, a.B] });
        }
        return _;
      })();
    },
    82433: (E, d, e) => {
      e.d(d, { p: () => O });
      var t = e(19212),
        i = e(56223),
        n = e(64170),
        s = e(98525),
        a = e(23680),
        l = e(84535),
        o = e(67479);
      const r =
        'SELECT department_number, sampleid\nFROM department\nSAMPLE .25, .25, .50\nORDER BY sampleid;\n\nSELECT department_number, sampleid\nFROM department\nSAMPLE  3, 5, 8\nORDER BY sampleid;\n';
      let O = (() => {
        class p {
          _changeDetectorRef;
          editorLanguage = 'sql';
          editorVal = r;
          constructor(g) {
            this._changeDetectorRef = g;
          }
          changeLanguage() {
            (this.editorVal =
              'sql' === this.editorLanguage
                ? r
                : 'typescript' === this.editorLanguage
                ? "interface OS {\n    name: String;\n    language: String;\n}\nconst dessert = (type: OS): void => {\n  console.log('Android ' + type.name + ' has ' + type.language + ' language');\n};\n\nconst nougat = {\n  name: 'N',\n  language: 'Java'\n}\n\ndessert(nougat);\n"
                : 'javascript' === this.editorLanguage
                ? 'var rows = prompt("How many rows for your multiplication table?");\nvar cols = prompt("How many columns for your multiplication table?");\nif(rows == "" || rows == null)\n  rows = 10;\nif(cols== "" || cols== null)\n  cols = 10;\ncreateTable(rows, cols);\nfunction createTable(rows, cols) {\n  var j=1;\n  var output = "<table border=\'1\' width=\'500\' cellspacing=\'0\'cellpadding=\'5\'>";\n  for(i=1;i<=rows;i++) {\n    output = output + "<tr>";\n    while(j<=cols) {\n      output = output + "<td>" + i*j + "</td>";\n      j = j+1;\n    }\n    output = output + "</tr>";\n    j = 1;\n  }\n  output = output + "</table>";\n  document.write(output);\n}\n'
                : '<div layout="row" layout-align="start center" class="pad-xs pad-bottom-none">\n  <span flex="none" hide-xs class="push-right mat-body-1">Editor Language</span>\n  <mat-form-field >\n    <mat-select [(ngModel)]="editorLanguage" (ngModelChange)="changeLanguage()" placeholder="Editor Language">\n      <mat-option value="sql">SQL</mat-option>\n      <mat-option value="javascript">JavaScript</mat-option>\n      <mat-option value="typescript">TypeScript</mat-option>\n      <mat-option value="html">HTML</mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n'),
              this._changeDetectorRef.detectChanges();
          }
          static ɵfac = function (T) {
            return new (T || p)(t.Y36(t.sBO));
          };
          static ɵcmp = t.Xpm({
            type: p,
            selectors: [['code-editor-demo-basic']],
            decls: 22,
            vars: 5,
            consts: [
              ['layout', 'row', 'layout-align', 'start center'],
              [
                'theme',
                'vs',
                'flex',
                '',
                1,
                'editor',
                3,
                'language',
                'ngModel',
                'ngModelChange',
              ],
              ['editor', ''],
              ['flex', '', 1, 'editor', 3, 'content', 'codeLang'],
              [
                'layout',
                'row',
                'layout-align',
                'start center',
                1,
                'pad-xs',
                'pad-bottom-none',
              ],
              ['flex', 'none', 'hide-xs', '', 1, 'push-right', 'mat-body-1'],
              ['placeholder', 'Editor Language', 3, 'ngModel', 'ngModelChange'],
              ['value', 'html'],
              ['value', 'javascript'],
              ['value', 'typescript'],
              ['value', 'sql'],
            ],
            template: function (T, c) {
              1 & T &&
                (t.TgZ(0, 'p'),
                t._uU(1, 'Editor Running in Browser:'),
                t.qZA(),
                t.TgZ(2, 'div', 0)(3, 'td-code-editor', 1, 2),
                t.NdJ('ngModelChange', function (h) {
                  return (c.editorVal = h);
                }),
                t.qZA()(),
                t.TgZ(5, 'p'),
                t._uU(6, 'Editor Output:'),
                t.qZA(),
                t.TgZ(7, 'div', 0),
                t._UZ(8, 'td-highlight', 3),
                t.qZA(),
                t.TgZ(9, 'div', 4)(10, 'span', 5),
                t._uU(11, 'Editor Language'),
                t.qZA(),
                t.TgZ(12, 'mat-form-field')(13, 'mat-select', 6),
                t.NdJ('ngModelChange', function (h) {
                  return (c.editorLanguage = h);
                })('ngModelChange', function () {
                  return c.changeLanguage();
                }),
                t.TgZ(14, 'mat-option', 7),
                t._uU(15, 'HTML'),
                t.qZA(),
                t.TgZ(16, 'mat-option', 8),
                t._uU(17, 'JavaScript'),
                t.qZA(),
                t.TgZ(18, 'mat-option', 9),
                t._uU(19, 'TypeScript'),
                t.qZA(),
                t.TgZ(20, 'mat-option', 10),
                t._uU(21, 'SQL'),
                t.qZA()()()()),
                2 & T &&
                  (t.xp6(3),
                  t.Q6J('language', c.editorLanguage)('ngModel', c.editorVal),
                  t.xp6(5),
                  t.Q6J('content', c.editorVal)('codeLang', c.editorLanguage),
                  t.xp6(5),
                  t.Q6J('ngModel', c.editorLanguage));
            },
            dependencies: [i.JJ, i.On, n.KE, s.gD, a.ey, l.dD, o.S],
            styles: ['td-code-editor{height:300px;width:750px}'],
          });
        }
        return p;
      })();
    },
    18570: (E, d, e) => {
      e.d(d, { Z: () => s });
      var t = e(18035),
        i = e(32296),
        n = e(19212);
      let s = (() => {
        class a {
          static ɵfac = function (r) {
            return new (r || a)();
          };
          static ɵmod = n.oAB({ type: a });
          static ɵinj = n.cJS({ imports: [t.gk, i.ot] });
        }
        return a;
      })();
    },
    62041: (E, d, e) => {
      e.d(d, { N: () => s });
      var t = e(18035),
        i = e(19212),
        n = e(32296);
      let s = (() => {
        class a {
          _dialogService;
          constructor(o) {
            this._dialogService = o;
          }
          openAlert() {
            this._dialogService.openAlert({
              title: 'Alert',
              disableClose: !0,
              message:
                'This is how simple it is to create an alert with this wrapper service.',
            });
          }
          openConfirm() {
            this._dialogService.openConfirm({
              title: 'Confirm',
              message:
                'This is how simple it is to create a confirm with this wrapper service. Do you agree?',
              cancelButton: 'Disagree',
              acceptButton: 'Agree',
              width: '500px',
            });
          }
          openPrompt() {
            this._dialogService.openPrompt({
              title: 'Prompt',
              message:
                'This is how simple it is to create a prompt with this wrapper service. Prompt something.',
              value: 'Populated value',
              cancelButton: 'Cancel',
              acceptButton: 'Ok',
            });
          }
          static ɵfac = function (r) {
            return new (r || a)(i.Y36(t.s$));
          };
          static ɵcmp = i.Xpm({
            type: a,
            selectors: [['dialogs-demo-basic']],
            decls: 6,
            vars: 0,
            consts: [
              [
                'mat-button',
                '',
                'color',
                'accent',
                1,
                'text-upper',
                'push-right-sm',
                3,
                'click',
              ],
              [
                'mat-button',
                '',
                'color',
                'accent',
                1,
                'text-upper',
                3,
                'click',
              ],
            ],
            template: function (r, _) {
              1 & r &&
                (i.TgZ(0, 'button', 0),
                i.NdJ('click', function () {
                  return _.openAlert();
                }),
                i._uU(1, ' Open Alert\n'),
                i.qZA(),
                i.TgZ(2, 'button', 0),
                i.NdJ('click', function () {
                  return _.openConfirm();
                }),
                i._uU(3, ' Open Confirm\n'),
                i.qZA(),
                i.TgZ(4, 'button', 1),
                i.NdJ('click', function () {
                  return _.openPrompt();
                }),
                i._uU(5, ' Open Prompt\n'),
                i.qZA());
            },
            dependencies: [n.lW],
          });
        }
        return a;
      })();
    },
    94608: (E, d, e) => {
      e.d(d, { n: () => n });
      var t = e(96942),
        i = e(19212);
      let n = (() => {
        class s {
          static ɵfac = function (o) {
            return new (o || s)();
          };
          static ɵmod = i.oAB({ type: s });
          static ɵinj = i.cJS({ imports: [t.B] });
        }
        return s;
      })();
    },
    1969: (E, d, e) => {
      e.d(d, { R: () => n });
      var t = e(19212),
        i = e(67479);
      let n = (() => {
        class s {
          css =
            '\n  .flex-container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    padding: 0;\n    margin: 0;\n  }\n  ';
          static ɵfac = function (o) {
            return new (o || s)();
          };
          static ɵcmp = t.Xpm({
            type: s,
            selectors: [['highlight-demo-css']],
            decls: 2,
            vars: 1,
            consts: [['codeLang', 'css']],
            template: function (o, r) {
              1 & o && (t.TgZ(0, 'td-highlight', 0), t._uU(1), t.qZA()),
                2 & o && (t.xp6(1), t.hij(' ', r.css, '\n'));
            },
            dependencies: [i.S],
          });
        }
        return s;
      })();
    },
    84009: (E, d, e) => {
      e.d(d, { N: () => o });
      var t = e(96814),
        i = e(30617),
        n = e(59038),
        s = e(32296),
        a = e(50678),
        l = e(19212);
      let o = (() => {
        class r {
          static ɵfac = function (m) {
            return new (m || r)();
          };
          static ɵmod = l.oAB({ type: r });
          static ɵinj = l.cJS({ imports: [t.ez, a.i9, i.Ps, n.ie, s.ot] });
        }
        return r;
      })();
    },
    62753: (E, d, e) => {
      e.d(d, { f: () => u });
      var t = e(19212),
        i = e(23890),
        n = e(96681),
        s = e(57896),
        a = e(79392),
        l = e(93197),
        o = e(30617),
        r = e(59038),
        _ = e(32296);
      let u = (() => {
        class m {
          static ɵfac = function (y) {
            return new (y || m)();
          };
          static ɵcmp = t.Xpm({
            type: m,
            selectors: [['layout-card-over-demo-basic']],
            decls: 23,
            vars: 0,
            consts: [
              ['sidenavWidth', '280px', 1, 'layout-card-over-demo'],
              [
                'flex',
                '',
                'sidenavTitle',
                'Covalent',
                'logo',
                'teradata-dark',
                'name',
                'Firstname Lastname',
                'email',
                'firstname.lastname@company.com',
              ],
              ['mat-list-item', ''],
              ['matListItemIcon', ''],
              ['mat-list-item', '', 'tdLayoutToggle', ''],
              ['tdNavigationDrawerMenu', ''],
              [
                'logo',
                'assets:teradata',
                'toolbarTitle',
                'Covalent',
                'navigationRoute',
                '/',
              ],
              [
                'mat-icon-button',
                '',
                'td-menu-button',
                '',
                'tdLayoutToggle',
                '',
              ],
              [
                'cardTitle',
                'Covalent',
                'cardSubtitle',
                'Card Over Layout Demo',
              ],
            ],
            template: function (y, g) {
              1 & y &&
                (t.TgZ(0, 'td-layout', 0)(1, 'td-navigation-drawer', 1)(
                  2,
                  'mat-nav-list'
                )(3, 'a', 2)(4, 'mat-icon', 3),
                t._uU(5, 'home'),
                t.qZA(),
                t._uU(6, ' Home '),
                t.qZA(),
                t.TgZ(7, 'a', 4)(8, 'mat-icon', 3),
                t._uU(9, 'close'),
                t.qZA(),
                t._uU(10, ' Close Drawer '),
                t.qZA()(),
                t.TgZ(11, 'div', 5)(12, 'mat-nav-list')(13, 'a', 2)(
                  14,
                  'mat-icon',
                  3
                ),
                t._uU(15, 'account_box'),
                t.qZA(),
                t._uU(16, ' Profile '),
                t.qZA()()()(),
                t.TgZ(17, 'td-layout-nav', 6)(18, 'button', 7)(19, 'mat-icon'),
                t._uU(20, 'menu'),
                t.qZA()(),
                t.TgZ(21, 'td-layout-card-over', 8),
                t._uU(22, ' Content goes here '),
                t.qZA()()());
            },
            dependencies: [
              i.M,
              n.vR,
              s.M,
              a.g,
              l.Xg,
              l.m7,
              o.Hw,
              r.Hk,
              r.Tg,
              r.Yt,
              _.RK,
            ],
            styles: [
              '.layout-card-over-demo[_ngcontent-%COMP%]{position:relative;width:100%;height:500px}[_nghost-%COMP%]{width:100%}',
            ],
          });
        }
        return m;
      })();
    },
    95874: (E, d, e) => {
      e.d(d, { W: () => O });
      var t = e(19212),
        i = e(23890),
        n = e(96681),
        s = e(57896),
        a = e(62684),
        l = e(76587),
        o = e(93197),
        r = e(59038),
        _ = e(32296),
        u = e(30617),
        m = e(81274);
      let O = (() => {
        class p {
          static ɵfac = function (T) {
            return new (T || p)();
          };
          static ɵcmp = t.Xpm({
            type: p,
            selectors: [['layout-management-list-demo-basic']],
            decls: 31,
            vars: 1,
            consts: [
              ['sidenavWidth', '280px', 1, 'layout-management-list-demo'],
              [
                'flex',
                '',
                'sidenavTitle',
                'Covalent',
                'logo',
                'teradata-dark',
                'name',
                'Firstname Lastname',
                'email',
                'firstname.lastname@company.com',
              ],
              ['mat-list-item', ''],
              ['matListItemIcon', ''],
              ['mat-list-item', '', 'tdLayoutToggle', ''],
              ['tdNavigationDrawerMenu', ''],
              [
                'logo',
                'assets:teradata',
                'toolbarTitle',
                'Covalent',
                'navigationRoute',
                '/',
              ],
              [
                'mat-icon-button',
                '',
                'td-menu-button',
                '',
                'tdLayoutToggle',
                '',
              ],
              ['mode', 'side', 3, 'opened'],
              ['td-sidenav-content', ''],
              ['mat-button', '', 'tdLayoutManageListToggle', ''],
            ],
            template: function (T, c) {
              1 & T &&
                (t.TgZ(0, 'td-layout', 0)(1, 'td-navigation-drawer', 1)(
                  2,
                  'mat-nav-list'
                )(3, 'a', 2)(4, 'mat-icon', 3),
                t._uU(5, 'home'),
                t.qZA(),
                t._uU(6, ' Home '),
                t.qZA(),
                t.TgZ(7, 'a', 4)(8, 'mat-icon', 3),
                t._uU(9, 'close'),
                t.qZA(),
                t._uU(10, ' Close Drawer '),
                t.qZA()(),
                t.TgZ(11, 'div', 5)(12, 'mat-nav-list')(13, 'a', 2)(
                  14,
                  'mat-icon',
                  3
                ),
                t._uU(15, 'account_box'),
                t.qZA(),
                t._uU(16, ' Profile '),
                t.qZA()()()(),
                t.TgZ(17, 'td-layout-nav', 6)(18, 'button', 7)(19, 'mat-icon'),
                t._uU(20, 'menu'),
                t.qZA()(),
                t.TgZ(21, 'td-layout-manage-list', 8)(22, 'mat-toolbar', 9),
                t._uU(23, 'Nav Title'),
                t.qZA(),
                t.TgZ(24, 'div', 9),
                t._uU(25, 'Sidenav content here'),
                t.qZA(),
                t.TgZ(26, 'mat-toolbar')(27, 'button', 10),
                t._uU(28, 'Toggle'),
                t.qZA(),
                t._uU(29, ' Content Title '),
                t.qZA(),
                t._uU(30, ' Content goes here '),
                t.qZA()()()),
                2 & T && (t.xp6(21), t.Q6J('opened', !0));
            },
            dependencies: [
              i.M,
              n.vR,
              s.M,
              a.X,
              l.zM,
              o.Xg,
              o.m7,
              r.Hk,
              r.Tg,
              r.Yt,
              _.lW,
              _.RK,
              u.Hw,
              m.Ye,
            ],
            styles: [
              '.layout-management-list-demo[_ngcontent-%COMP%]{position:relative;width:100%;height:500px}[_nghost-%COMP%]{width:100%}',
            ],
          });
        }
        return p;
      })();
    },
    69496: (E, d, e) => {
      e.d(d, { _: () => r });
      var t = e(96814),
        i = e(59038),
        n = e(32296),
        s = e(30617),
        a = e(81274),
        l = e(50678),
        o = e(19212);
      let r = (() => {
        class _ {
          static ɵfac = function (O) {
            return new (O || _)();
          };
          static ɵmod = o.oAB({ type: _ });
          static ɵinj = o.cJS({
            imports: [t.ez, l.i9, i.ie, n.ot, s.Ps, a.g0],
          });
        }
        return _;
      })();
    },
    7544: (E, d, e) => {
      e.d(d, { l: () => u });
      var t = e(19212),
        i = e(23890),
        n = e(96681),
        s = e(29114),
        a = e(92796),
        l = e(93197),
        o = e(59038),
        r = e(30617),
        _ = e(32296);
      let u = (() => {
        class m {
          static ɵfac = function (y) {
            return new (y || m)();
          };
          static ɵcmp = t.Xpm({
            type: m,
            selectors: [['layout-nav-list-demo-basic']],
            decls: 27,
            vars: 1,
            consts: [
              ['sidenavWidth', '280px', 1, 'layout-nav-list-demo'],
              [
                'flex',
                '',
                'sidenavTitle',
                'Covalent',
                'logo',
                'teradata-dark',
                'name',
                'Firstname Lastname',
                'email',
                'firstname.lastname@company.com',
              ],
              ['mat-list-item', ''],
              ['matListItemIcon', ''],
              ['mat-list-item', '', 'tdLayoutToggle', ''],
              ['tdNavigationDrawerMenu', ''],
              [
                'logo',
                'assets:teradata',
                'toolbarTitle',
                'Covalent',
                'navigationRoute',
                '/',
                'mode',
                'side',
                3,
                'opened',
              ],
              [
                'mat-icon-button',
                '',
                'td-menu-button',
                '',
                'tdLayoutToggle',
                '',
              ],
              ['td-sidenav-content', ''],
              ['td-toolbar-content', ''],
              ['mat-button', '', 'tdLayoutNavListToggle', ''],
            ],
            template: function (y, g) {
              1 & y &&
                (t.TgZ(0, 'td-layout', 0)(1, 'td-navigation-drawer', 1)(
                  2,
                  'mat-nav-list'
                )(3, 'a', 2)(4, 'mat-icon', 3),
                t._uU(5, 'home'),
                t.qZA(),
                t._uU(6, ' Home '),
                t.qZA(),
                t.TgZ(7, 'a', 4)(8, 'mat-icon', 3),
                t._uU(9, 'close'),
                t.qZA(),
                t._uU(10, ' Close Drawer '),
                t.qZA()(),
                t.TgZ(11, 'div', 5)(12, 'mat-nav-list')(13, 'a', 2)(
                  14,
                  'mat-icon',
                  3
                ),
                t._uU(15, 'account_box'),
                t.qZA(),
                t._uU(16, ' Profile '),
                t.qZA()()()(),
                t.TgZ(17, 'td-layout-nav-list', 6)(18, 'button', 7)(
                  19,
                  'mat-icon'
                ),
                t._uU(20, 'menu'),
                t.qZA()(),
                t.TgZ(21, 'div', 8),
                t._uU(22, 'Sidenav content here'),
                t.qZA(),
                t.TgZ(23, 'div', 9)(24, 'button', 10),
                t._uU(25, 'Toggle'),
                t.qZA()(),
                t._uU(26, ' Content goes here '),
                t.qZA()()),
                2 & y && (t.xp6(17), t.Q6J('opened', !0));
            },
            dependencies: [
              i.M,
              n.vR,
              s.$,
              a.lz,
              l.Xg,
              l.m7,
              o.Hk,
              o.Tg,
              o.Yt,
              r.Hw,
              _.lW,
              _.RK,
            ],
            styles: [
              '.layout-nav-list-demo[_ngcontent-%COMP%]{position:relative;width:100%;height:500px}[_nghost-%COMP%]{width:100%}',
            ],
          });
        }
        return m;
      })();
    },
    57322: (E, d, e) => {
      e.d(d, { I: () => o });
      var t = e(96814),
        i = e(59038),
        n = e(30617),
        s = e(32296),
        a = e(50678),
        l = e(19212);
      let o = (() => {
        class r {
          static ɵfac = function (m) {
            return new (m || r)();
          };
          static ɵmod = l.oAB({ type: r });
          static ɵinj = l.cJS({ imports: [t.ez, a.i9, i.ie, n.Ps, s.ot] });
        }
        return r;
      })();
    },
    17179: (E, d, e) => {
      e.d(d, { k: () => _ });
      var t = e(19212),
        i = e(23890),
        n = e(96681),
        s = e(57896),
        a = e(93197),
        l = e(59038),
        o = e(30617),
        r = e(32296);
      let _ = (() => {
        class u {
          static ɵfac = function (p) {
            return new (p || u)();
          };
          static ɵcmp = t.Xpm({
            type: u,
            selectors: [['layout-nav-demo-basic']],
            decls: 22,
            vars: 0,
            consts: [
              ['sidenavWidth', '280px', 1, 'layout-nav-demo'],
              [
                'flex',
                '',
                'sidenavTitle',
                'Covalent',
                'logo',
                'teradata-dark',
                'name',
                'Firstname Lastname',
                'email',
                'firstname.lastname@company.com',
              ],
              ['mat-list-item', ''],
              ['matListItemIcon', ''],
              ['mat-list-item', '', 'tdLayoutToggle', ''],
              ['tdNavigationDrawerMenu', ''],
              [
                'logo',
                'assets:teradata',
                'toolbarTitle',
                'Covalent',
                'navigationRoute',
                '/',
              ],
              [
                'mat-icon-button',
                '',
                'td-menu-button',
                '',
                'tdLayoutToggle',
                '',
              ],
            ],
            template: function (p, y) {
              1 & p &&
                (t.TgZ(0, 'td-layout', 0)(1, 'td-navigation-drawer', 1)(
                  2,
                  'mat-nav-list'
                )(3, 'a', 2)(4, 'mat-icon', 3),
                t._uU(5, 'home'),
                t.qZA(),
                t._uU(6, ' Home '),
                t.qZA(),
                t.TgZ(7, 'a', 4)(8, 'mat-icon', 3),
                t._uU(9, 'close'),
                t.qZA(),
                t._uU(10, ' Close Drawer '),
                t.qZA()(),
                t.TgZ(11, 'div', 5)(12, 'mat-nav-list')(13, 'a', 2)(
                  14,
                  'mat-icon',
                  3
                ),
                t._uU(15, 'account_box'),
                t.qZA(),
                t._uU(16, ' Profile '),
                t.qZA()()()(),
                t.TgZ(17, 'td-layout-nav', 6)(18, 'button', 7)(19, 'mat-icon'),
                t._uU(20, 'menu'),
                t.qZA()(),
                t._uU(21, ' Content goes here '),
                t.qZA()());
            },
            dependencies: [
              i.M,
              n.vR,
              s.M,
              a.Xg,
              a.m7,
              l.Hk,
              l.Tg,
              l.Yt,
              o.Hw,
              r.RK,
            ],
            styles: [
              '.layout-nav-demo[_ngcontent-%COMP%]{position:relative;width:100%;height:500px}[_nghost-%COMP%]{width:100%}',
            ],
          });
        }
        return u;
      })();
    },
    33092: (E, d, e) => {
      e.d(d, { X: () => o });
      var t = e(96814),
        i = e(59038),
        n = e(30617),
        s = e(32296),
        a = e(50678),
        l = e(19212);
      let o = (() => {
        class r {
          static ɵfac = function (m) {
            return new (m || r)();
          };
          static ɵmod = l.oAB({ type: r });
          static ɵinj = l.cJS({ imports: [t.ez, a.i9, i.ie, n.Ps, s.ot] });
        }
        return r;
      })();
    },
    90516: (E, d, e) => {
      e.d(d, { H: () => n });
      var t = e(19212),
        i = e(23890);
      let n = (() => {
        class s {
          static ɵfac = function (o) {
            return new (o || s)();
          };
          static ɵcmp = t.Xpm({
            type: s,
            selectors: [['layout-demo-basic']],
            decls: 4,
            vars: 3,
            consts: [
              [1, 'layout-demo', 3, 'mode', 'opened', 'sidenavWidth'],
              ['td-sidenav-content', ''],
            ],
            template: function (o, r) {
              1 & o &&
                (t.TgZ(0, 'td-layout', 0)(1, 'div', 1),
                t._uU(2, '.. more sidenav content'),
                t.qZA(),
                t._uU(3, ' .. main content\n'),
                t.qZA()),
                2 & o &&
                  t.Q6J('mode', 'side')('opened', !0)('sidenavWidth', '257px');
            },
            dependencies: [i.M],
            styles: [
              '.layout-demo[_ngcontent-%COMP%]{position:relative;width:100%;height:500px}[_nghost-%COMP%]{width:100%}',
            ],
          });
        }
        return s;
      })();
    },
    14321: (E, d, e) => {
      e.d(d, { f: () => s });
      var t = e(96814),
        i = e(50678),
        n = e(19212);
      let s = (() => {
        class a {
          static ɵfac = function (r) {
            return new (r || a)();
          };
          static ɵmod = n.oAB({ type: a });
          static ɵinj = n.cJS({ imports: [t.ez, i.i9] });
        }
        return a;
      })();
    },
    27445: (E, d, e) => {
      e.d(d, { k: () => o });
      var t = e(96814),
        i = e(32296),
        n = e(26385),
        s = e(30617),
        a = e(39419),
        l = e(19212);
      let o = (() => {
        class r {
          static ɵfac = function (m) {
            return new (m || r)();
          };
          static ɵmod = l.oAB({ type: r });
          static ɵinj = l.cJS({ imports: [a.A0, t.ez, i.ot, n.t, s.Ps] });
        }
        return r;
      })();
    },
    16290: (E, d, e) => {
      e.d(d, { c: () => n });
      var t = e(19212),
        i = e(21266);
      let n = (() => {
        class s {
          static ɵfac = function (o) {
            return new (o || s)();
          };
          static ɵcmp = t.Xpm({
            type: s,
            selectors: [['message-demo-basic']],
            decls: 1,
            vars: 0,
            consts: [
              [
                'label',
                'Error',
                'sublabel',
                'Something went wrong',
                'color',
                'warn',
                'icon',
                'error',
              ],
            ],
            template: function (o, r) {
              1 & o && t._UZ(0, 'td-message', 0);
            },
            dependencies: [i.T],
          });
        }
        return s;
      })();
    },
    74309: (E, d, e) => {
      e.d(d, { m: () => l });
      var t = e(19212),
        i = e(59038),
        n = e(26385),
        s = e(30617),
        a = e(73576);
      let l = (() => {
        class o {
          static ɵfac = function (u) {
            return new (u || o)();
          };
          static ɵcmp = t.Xpm({
            type: o,
            selectors: [['user-profile-demo-list-items']],
            decls: 22,
            vars: 0,
            consts: [
              ['name', 'donald duck', 'email', 'donald.duck@teradata.com'],
              ['td-user-info-list', ''],
              ['matListItemAvatar', ''],
              ['matListItemLine', ''],
              ['td-user-action-list', ''],
              ['mat-list-item', ''],
            ],
            template: function (u, m) {
              1 & u &&
                (t.TgZ(0, 'span'),
                t._uU(1, 'Click to open:'),
                t.qZA(),
                t.TgZ(2, 'td-user-profile', 0),
                t.ynx(3, 1),
                t.TgZ(4, 'mat-list-item')(5, 'mat-icon', 2),
                t._uU(6, 'account_balance'),
                t.qZA(),
                t.TgZ(7, 'span', 3),
                t._uU(8, 'default'),
                t.qZA(),
                t.TgZ(9, 'span', 3),
                t._uU(10, 'organization'),
                t.qZA()(),
                t.BQk(),
                t.ynx(11, 4),
                t.TgZ(12, 'button', 5)(13, 'mat-icon', 2),
                t._uU(14, 'brightness_low'),
                t.qZA(),
                t.TgZ(15, 'span', 3),
                t._uU(16, 'Switch to dark mode'),
                t.qZA()(),
                t._UZ(17, 'mat-divider'),
                t.TgZ(18, 'button', 5),
                t._UZ(19, 'span', 2),
                t.TgZ(20, 'span', 3),
                t._uU(21, 'Sign out'),
                t.qZA()(),
                t.BQk(),
                t.qZA());
            },
            dependencies: [i.Tg, i.D1, n.d, i.WW, s.Hw, a.H],
            encapsulation: 2,
          });
        }
        return o;
      })();
    },
    87750: (E, d, e) => {
      e.d(d, { i: () => o });
      var t = e(58643),
        i = e(32296),
        n = e(26385),
        s = e(59038),
        a = e(30617),
        l = e(19212);
      let o = (() => {
        class r {
          static ɵfac = function (m) {
            return new (m || r)();
          };
          static ɵmod = l.oAB({ type: r });
          static ɵinj = l.cJS({ imports: [i.ot, s.ie, a.Ps, n.t, t.LK] });
        }
        return r;
      })();
    },
    9907: (E, d, e) => {
      e.d(d, { g: () => u });
      var t = e(15861),
        i = e(23421),
        n = e(76856),
        s = e(19212),
        a = e(1691),
        l = e(33822),
        o = e(78029);
      const r = () => [8, 30],
        _ = (m) => [m, 30];
      let u = (() => {
        class m {
          _cdr;
          themeSelector;
          themes = (0, i.RC)();
          selectedTheme;
          words = [
            'Covalent',
            'Teradata',
            'Angular',
            'TypeScript',
            'JavaScript',
            'Protractor',
            'Karma',
            'Ruby',
            'Rails',
            'Ruby on Rails',
            'Java',
            'Scala',
            'RSpec',
            'Cucumber',
            'JUnit',
            'Elixir',
            'Twitter Bootstrap',
            'HTML',
            'CSS',
            'SASS',
            'PHP',
          ];
          words2 = [
            'Engineering',
            'Applied Science',
            'Engineering Science',
            'Innovation',
            'Tech',
            'Technological',
            'Computing',
            'Informatics',
            'Biotechnology',
            'Science',
            'Telematics',
            'Industry',
            'Research',
            'Information',
            'Development',
            'Cyber',
            'Energy',
            'Techs',
            'Technicians',
            'Computerization',
            'Techno',
          ];
          componentExampleRandomWords = this.generateRandomWords(this.words2);
          config = {
            tooltip: {},
            series: [
              {
                type: 'wordCloud',
                shape: 'triangle',
                sizeRange: [8, 50],
                rotationRange: [-30, 30],
                color: this.randomColor,
                data: this.generateRandomWords(this.words),
              },
            ],
          };
          constructor(p, y) {
            (this._cdr = p), (this.themeSelector = y);
          }
          ngOnInit() {
            var p = this;
            return (0, t.Z)(function* () {
              (p.selectedTheme = p.themeSelector.selected),
                p._cdr.markForCheck();
            })();
          }
          randomColor() {
            return (
              'rgb(' +
              [
                Math.round(160 * Math.random()),
                Math.round(160 * Math.random()),
                Math.round(160 * Math.random()),
              ].join(',') +
              ')'
            );
          }
          generateRandomWords(p) {
            const y = [];
            for (let g = 0; g < 30; g++)
              y.push({
                name: p[Math.floor(Math.random() * p.length)],
                value: Math.floor(100 * Math.random()),
                textStyle: {
                  normal: { fontFamily: 'sans-serif', fontWeight: 'bold' },
                  color: this.randomColor(),
                },
              });
            return y;
          }
          selectChartTheme(p) {
            this.themeSelector.select(p);
          }
          static ɵfac = function (y) {
            return new (y || m)(s.Y36(s.sBO), s.Y36(n.n));
          };
          static ɵcmp = s.Xpm({
            type: m,
            selectors: [['wordcloud-demo-basic']],
            decls: 3,
            vars: 10,
            consts: [
              [3, 'trigger'],
              [
                'td-wordCloud',
                '',
                'shape',
                'star',
                3,
                'sizeRange',
                'rotationRange',
                'color',
                'data',
              ],
            ],
            template: function (y, g) {
              1 & y &&
                (s.TgZ(0, 'td-chart'),
                s._UZ(1, 'td-chart-tooltip', 0)(2, 'td-chart-series', 1),
                s.qZA()),
                2 & y &&
                  (s.Udp('height', 500, 'px'),
                  s.xp6(1),
                  s.Q6J('trigger', 'item'),
                  s.xp6(1),
                  s.Q6J('sizeRange', s.DdM(7, r))(
                    'rotationRange',
                    s.VKq(8, _, -30)
                  )('color', g.randomColor)(
                    'data',
                    g.componentExampleRandomWords
                  ));
            },
            dependencies: [a.L, l.HN, o.k],
            styles: ['[_nghost-%COMP%]{width:100%}'],
            changeDetection: 0,
          });
        }
        return m;
      })();
    },
    12090: (E, d, e) => {
      e.d(d, { $: () => l });
      var t = e(96814),
        i = e(23421),
        n = e(57337),
        s = e(38517),
        a = e(19212);
      let l = (() => {
        class o {
          static ɵfac = function (u) {
            return new (u || o)();
          };
          static ɵmod = a.oAB({ type: o });
          static ɵinj = a.cJS({ imports: [i.MX, n.NF, s.Tf, t.ez] });
        }
        return o;
      })();
    },
    41257: (E, d, e) => {
      e.d(d, { m: () => n });
      var t = e(78955),
        i = e(19212);
      let n = (() => {
        class s {
          static ɵfac = function (o) {
            return new (o || s)();
          };
          static ɵmod = i.oAB({ type: s });
          static ɵinj = i.cJS({ imports: [t.I] });
        }
        return s;
      })();
    },
    20909: (E, d, e) => {
      e.d(d, { n: () => s });
      var t = e(19212),
        i = e(23421);
      const n = ['td-graph', ''];
      let s = (() => {
        class a extends i.R0 {
          legendHoverLink;
          coordinateSystem;
          xAxisIndex;
          yAxisIndex;
          polarIndex;
          calendarIndex;
          geoIndex;
          hoverAnimation;
          circular;
          force;
          layout;
          nodeScaleRatio;
          draggable;
          symbol;
          symbolSize;
          symbolRotate;
          symbolKeepAspect;
          symbolOffset;
          focusNodeAdjacency;
          edgeSymbol;
          edgeSymbolSize;
          cursor;
          roam;
          initialTreeDepth;
          itemStyle;
          lineStyle;
          label;
          edgeLabel;
          emphasis;
          categories;
          nodes;
          links;
          edges;
          markPoint;
          markLine;
          markArea;
          zlevel;
          z;
          silent;
          left;
          top;
          right;
          bottom;
          width;
          height;
          constructor(o) {
            super('graph', o);
          }
          getConfig() {
            return {
              legendHoverLink: this.legendHoverLink,
              coordinateSystem: this.coordinateSystem,
              xAxisIndex: this.xAxisIndex,
              yAxisIndex: this.yAxisIndex,
              polarIndex: this.polarIndex,
              calendarIndex: this.calendarIndex,
              geoIndex: this.geoIndex,
              hoverAnimation: this.hoverAnimation,
              circular: this.circular,
              force: this.force,
              layout: this.layout,
              nodeScaleRatio: this.nodeScaleRatio,
              draggable: this.draggable,
              symbol: this.symbol,
              symbolSize: this.symbolSize,
              symbolRotate: this.symbolRotate,
              symbolKeepAspect: this.symbolKeepAspect,
              symbolOffset: this.symbolOffset,
              focusNodeAdjacency: this.focusNodeAdjacency,
              edgeSymbol: this.edgeSymbol,
              edgeSymbolSize: this.edgeSymbolSize,
              cursor: this.cursor,
              roam: this.roam,
              itemStyle: this.itemStyle,
              lineStyle: this.lineStyle,
              label: this.label,
              edgeLabel: this.edgeLabel,
              emphasis: this.emphasis,
              categories: this.categories,
              nodes: this.nodes,
              links: this.links,
              edges: this.edges,
              markPoint: this.markPoint,
              markLine: this.markLine,
              markArea: this.markArea,
              zlevel: this.zlevel,
              z: this.z,
              silent: this.silent,
              left: this.left,
              top: this.top,
              right: this.right,
              bottom: this.bottom,
              width: this.width,
              height: this.height,
            };
          }
          static ɵfac = function (r) {
            return new (r || a)(t.Y36(i.ij));
          };
          static ɵcmp = t.Xpm({
            type: a,
            selectors: [['td-chart-series', 'td-graph', '']],
            inputs: {
              config: 'config',
              id: 'id',
              name: 'name',
              color: 'color',
              data: 'data',
              animation: 'animation',
              animationThreshold: 'animationThreshold',
              animationDuration: 'animationDuration',
              animationEasing: 'animationEasing',
              animationDelay: 'animationDelay',
              animationDurationUpdate: 'animationDurationUpdate',
              animationEasingUpdate: 'animationEasingUpdate',
              animationDelayUpdate: 'animationDelayUpdate',
              tooltip: 'tooltip',
              legendHoverLink: 'legendHoverLink',
              coordinateSystem: 'coordinateSystem',
              xAxisIndex: 'xAxisIndex',
              yAxisIndex: 'yAxisIndex',
              polarIndex: 'polarIndex',
              calendarIndex: 'calendarIndex',
              geoIndex: 'geoIndex',
              hoverAnimation: 'hoverAnimation',
              circular: 'circular',
              force: 'force',
              layout: 'layout',
              nodeScaleRatio: 'nodeScaleRatio',
              draggable: 'draggable',
              symbol: 'symbol',
              symbolSize: 'symbolSize',
              symbolRotate: 'symbolRotate',
              symbolKeepAspect: 'symbolKeepAspect',
              symbolOffset: 'symbolOffset',
              focusNodeAdjacency: 'focusNodeAdjacency',
              edgeSymbol: 'edgeSymbol',
              edgeSymbolSize: 'edgeSymbolSize',
              cursor: 'cursor',
              roam: 'roam',
              initialTreeDepth: 'initialTreeDepth',
              itemStyle: 'itemStyle',
              lineStyle: 'lineStyle',
              label: 'label',
              edgeLabel: 'edgeLabel',
              emphasis: 'emphasis',
              categories: 'categories',
              nodes: 'nodes',
              links: 'links',
              edges: 'edges',
              markPoint: 'markPoint',
              markLine: 'markLine',
              markArea: 'markArea',
              zlevel: 'zlevel',
              z: 'z',
              silent: 'silent',
              left: 'left',
              top: 'top',
              right: 'right',
              bottom: 'bottom',
              width: 'width',
              height: 'height',
            },
            features: [
              t._Bn([{ provide: i.R0, useExisting: (0, t.Gpc)(() => a) }]),
              t.qOj,
            ],
            attrs: n,
            decls: 0,
            vars: 0,
            template: function (r, _) {},
            encapsulation: 2,
            changeDetection: 0,
          });
        }
        return a;
      })();
    },
    56416: (E, d, e) => {
      e.d(d, { IP: () => a });
      var t = e(96814),
        n = (e(20909), e(19212));
      let a = (() => {
        class l {
          static ɵfac = function (_) {
            return new (_ || l)();
          };
          static ɵmod = n.oAB({ type: l });
          static ɵinj = n.cJS({ imports: [t.ez] });
        }
        return l;
      })();
    },
    62730: (E, d, e) => {
      e.d(d, { I: () => s });
      var t = e(19212),
        i = e(23421);
      const n = ['td-pie', ''];
      let s = (() => {
        class a extends i.R0 {
          legendHoverLink;
          hoverAnimation;
          hoverOffset;
          selectedMode;
          selectedOffset;
          clockwise;
          startAngle;
          minAngle;
          minShowLabelAngle;
          roseType;
          avoidLabelOverlap;
          stillShowZeroSum;
          cursor;
          labelLine;
          label;
          itemStyle;
          emphasis;
          seriesLayoutBy;
          datasetIndex;
          markPoint;
          markLine;
          markArea;
          zlevel;
          z;
          center;
          radius;
          constructor(o) {
            super('pie', o);
          }
          getConfig() {
            return {
              legendHoverLink: this.legendHoverLink,
              label: this.label,
              itemStyle: this.itemStyle,
              emphasis: this.emphasis,
              selectedMode: this.selectedMode,
              selectedOffset: this.selectedOffset,
              clockwise: this.clockwise,
              startAngle: this.startAngle,
              minAngle: this.minAngle,
              minShowLabelAngle: this.minShowLabelAngle,
              roseType: this.roseType,
              avoidLabelOverlap: this.avoidLabelOverlap,
              stillShowZeroSum: this.stillShowZeroSum,
              cursor: this.cursor,
              labelLine: this.labelLine,
              seriesLayoutBy: this.seriesLayoutBy,
              datasetIndex: this.datasetIndex,
              markPoint: this.markPoint,
              markLine: this.markLine,
              markArea: this.markArea,
              zlevel: this.zlevel,
              z: this.z,
              center: this.center,
              radius: this.radius,
            };
          }
          static ɵfac = function (r) {
            return new (r || a)(t.Y36(i.ij));
          };
          static ɵcmp = t.Xpm({
            type: a,
            selectors: [['td-chart-series', 'td-pie', '']],
            inputs: {
              config: 'config',
              id: 'id',
              name: 'name',
              color: 'color',
              data: 'data',
              animation: 'animation',
              animationThreshold: 'animationThreshold',
              animationDuration: 'animationDuration',
              animationEasing: 'animationEasing',
              animationDelay: 'animationDelay',
              animationDurationUpdate: 'animationDurationUpdate',
              animationEasingUpdate: 'animationEasingUpdate',
              animationDelayUpdate: 'animationDelayUpdate',
              tooltip: 'tooltip',
              legendHoverLink: 'legendHoverLink',
              hoverAnimation: 'hoverAnimation',
              hoverOffset: 'hoverOffset',
              selectedMode: 'selectedMode',
              selectedOffset: 'selectedOffset',
              clockwise: 'clockwise',
              startAngle: 'startAngle',
              minAngle: 'minAngle',
              minShowLabelAngle: 'minShowLabelAngle',
              roseType: 'roseType',
              avoidLabelOverlap: 'avoidLabelOverlap',
              stillShowZeroSum: 'stillShowZeroSum',
              cursor: 'cursor',
              labelLine: 'labelLine',
              label: 'label',
              itemStyle: 'itemStyle',
              emphasis: 'emphasis',
              seriesLayoutBy: 'seriesLayoutBy',
              datasetIndex: 'datasetIndex',
              markPoint: 'markPoint',
              markLine: 'markLine',
              markArea: 'markArea',
              zlevel: 'zlevel',
              z: 'z',
              center: 'center',
              radius: 'radius',
            },
            features: [
              t._Bn([{ provide: i.R0, useExisting: (0, t.Gpc)(() => a) }]),
              t.qOj,
            ],
            attrs: n,
            decls: 0,
            vars: 0,
            template: function (r, _) {},
            encapsulation: 2,
            changeDetection: 0,
          });
        }
        return a;
      })();
    },
    99902: (E, d, e) => {
      e.d(d, { XW: () => a });
      var t = e(96814),
        n = (e(62730), e(19212));
      let a = (() => {
        class l {
          static ɵfac = function (_) {
            return new (_ || l)();
          };
          static ɵmod = n.oAB({ type: l });
          static ɵinj = n.cJS({ imports: [t.ez] });
        }
        return l;
      })();
    },
    86709: (E, d, e) => {
      e.d(d, { Xi: () => a });
      var t = e(96814),
        n = (e(84180), e(19212));
      let a = (() => {
        class l {
          static ɵfac = function (_) {
            return new (_ || l)();
          };
          static ɵmod = n.oAB({ type: l });
          static ɵinj = n.cJS({ imports: [t.ez] });
        }
        return l;
      })();
    },
    84180: (E, d, e) => {
      e.d(d, { x: () => s });
      var t = e(19212),
        i = e(23421);
      const n = ['td-sankey', ''];
      let s = (() => {
        class a extends i.R0 {
          zlevel;
          z;
          left;
          top;
          right;
          bottom;
          width;
          height;
          nodeWidth;
          nodeGap;
          layoutIterations;
          orient;
          draggable;
          focusNodeAdjacency;
          label;
          itemStyle;
          lineStyle;
          emphasis;
          nodes;
          links;
          edges;
          silent;
          constructor(o) {
            super('sankey', o);
          }
          getConfig() {
            return {
              zlevel: this.zlevel,
              z: this.z,
              left: this.left,
              top: this.top,
              right: this.right,
              bottom: this.bottom,
              width: this.width,
              height: this.height,
              nodeWidth: this.nodeWidth,
              nodeGap: this.nodeGap,
              layoutIterations: this.layoutIterations,
              orient: this.orient,
              draggable: this.draggable,
              focusNodeAdjacency: this.focusNodeAdjacency,
              label: this.label,
              itemStyle: this.itemStyle,
              lineStyle: this.lineStyle,
              emphasis: this.emphasis,
              nodes: this.nodes,
              links: this.links,
              edges: this.edges,
              silent: this.silent,
            };
          }
          static ɵfac = function (r) {
            return new (r || a)(t.Y36(i.ij));
          };
          static ɵcmp = t.Xpm({
            type: a,
            selectors: [['td-chart-series', 'td-sankey', '']],
            inputs: {
              config: 'config',
              id: 'id',
              name: 'name',
              color: 'color',
              data: 'data',
              animation: 'animation',
              animationThreshold: 'animationThreshold',
              animationDuration: 'animationDuration',
              animationEasing: 'animationEasing',
              animationDelay: 'animationDelay',
              animationDurationUpdate: 'animationDurationUpdate',
              animationEasingUpdate: 'animationEasingUpdate',
              animationDelayUpdate: 'animationDelayUpdate',
              tooltip: 'tooltip',
              zlevel: 'zlevel',
              z: 'z',
              left: 'left',
              top: 'top',
              right: 'right',
              bottom: 'bottom',
              width: 'width',
              height: 'height',
              nodeWidth: 'nodeWidth',
              nodeGap: 'nodeGap',
              layoutIterations: 'layoutIterations',
              orient: 'orient',
              draggable: 'draggable',
              focusNodeAdjacency: 'focusNodeAdjacency',
              label: 'label',
              itemStyle: 'itemStyle',
              lineStyle: 'lineStyle',
              emphasis: 'emphasis',
              nodes: 'nodes',
              links: 'links',
              edges: 'edges',
              silent: 'silent',
            },
            features: [
              t._Bn([{ provide: i.R0, useExisting: (0, t.Gpc)(() => a) }]),
              t.qOj,
            ],
            attrs: n,
            decls: 0,
            vars: 0,
            template: function (r, _) {},
            encapsulation: 2,
            changeDetection: 0,
          });
        }
        return a;
      })();
    },
    60874: (E, d, e) => {
      e.d(d, { Vk: () => a });
      var t = e(96814),
        n = (e(34303), e(19212));
      let a = (() => {
        class l {
          static ɵfac = function (_) {
            return new (_ || l)();
          };
          static ɵmod = n.oAB({ type: l });
          static ɵinj = n.cJS({ imports: [t.ez] });
        }
        return l;
      })();
    },
    34303: (E, d, e) => {
      e.d(d, { a: () => s });
      var t = e(19212),
        i = e(23421);
      const n = ['td-treemap', ''];
      let s = (() => {
        class a extends i.R0 {
          config = {};
          id;
          name;
          data;
          zlevel;
          z;
          left;
          top;
          right;
          bottom;
          width;
          height;
          squareRatio;
          leafDepth;
          drillDownIcon;
          roam;
          nodeClick;
          zoomToNodeRatio;
          levels;
          silent;
          visualDimension;
          visualMin;
          visualMax;
          colorAlpha;
          colorSaturation;
          colorMappingBy;
          visibleMin;
          childrenVisibleMin;
          itemStyle;
          label;
          upperLabel;
          breadcrumb;
          emphasis;
          tooltip;
          constructor(o) {
            super('treemap', o);
          }
          getConfig() {
            return {
              zlevel: this.zlevel,
              z: this.z,
              left: this.left,
              top: this.top,
              right: this.right,
              bottom: this.bottom,
              width: this.width,
              height: this.height,
              squareRatio: this.squareRatio,
              leafDepth: this.leafDepth,
              drillDownIcon: this.drillDownIcon,
              roam: this.roam,
              nodeClick: this.nodeClick,
              zoomToNodeRatio: this.zoomToNodeRatio,
              levels: this.levels,
              silent: this.silent,
              visualDimension: this.visualDimension,
              visualMin: this.visualMin,
              visualMax: this.visualMax,
              colorAlpha: this.colorAlpha,
              colorSaturation: this.colorSaturation,
              colorMappingBy: this.colorMappingBy,
              visibleMin: this.visibleMin,
              childrenVisibleMin: this.childrenVisibleMin,
              itemStyle: this.itemStyle,
              label: this.label,
              upperLabel: this.upperLabel,
              breadcrumb: this.breadcrumb,
              emphasis: this.emphasis,
            };
          }
          static ɵfac = function (r) {
            return new (r || a)(t.Y36(i.ij));
          };
          static ɵcmp = t.Xpm({
            type: a,
            selectors: [['td-chart-series', 'td-treemap', '']],
            inputs: {
              config: 'config',
              id: 'id',
              name: 'name',
              color: 'color',
              data: 'data',
              animation: 'animation',
              animationThreshold: 'animationThreshold',
              animationDuration: 'animationDuration',
              animationEasing: 'animationEasing',
              animationDelay: 'animationDelay',
              animationDurationUpdate: 'animationDurationUpdate',
              animationEasingUpdate: 'animationEasingUpdate',
              animationDelayUpdate: 'animationDelayUpdate',
              tooltip: 'tooltip',
              zlevel: 'zlevel',
              z: 'z',
              left: 'left',
              top: 'top',
              right: 'right',
              bottom: 'bottom',
              width: 'width',
              height: 'height',
              squareRatio: 'squareRatio',
              leafDepth: 'leafDepth',
              drillDownIcon: 'drillDownIcon',
              roam: 'roam',
              nodeClick: 'nodeClick',
              zoomToNodeRatio: 'zoomToNodeRatio',
              levels: 'levels',
              silent: 'silent',
              visualDimension: 'visualDimension',
              visualMin: 'visualMin',
              visualMax: 'visualMax',
              colorAlpha: 'colorAlpha',
              colorSaturation: 'colorSaturation',
              colorMappingBy: 'colorMappingBy',
              visibleMin: 'visibleMin',
              childrenVisibleMin: 'childrenVisibleMin',
              itemStyle: 'itemStyle',
              label: 'label',
              upperLabel: 'upperLabel',
              breadcrumb: 'breadcrumb',
              emphasis: 'emphasis',
            },
            features: [
              t._Bn([{ provide: i.R0, useExisting: (0, t.Gpc)(() => a) }]),
              t.qOj,
            ],
            attrs: n,
            decls: 0,
            vars: 0,
            template: function (r, _) {},
            encapsulation: 2,
            changeDetection: 0,
          });
        }
        return a;
      })();
    },
    38517: (E, d, e) => {
      e.d(d, { Tf: () => a });
      var t = e(96814),
        n = (e(78029), e(19212));
      let a = (() => {
        class l {
          static ɵfac = function (_) {
            return new (_ || l)();
          };
          static ɵmod = n.oAB({ type: l });
          static ɵinj = n.cJS({ imports: [t.ez] });
        }
        return l;
      })();
    },
    78029: (E, d, e) => {
      e.d(d, { k: () => s });
      var t = e(19212),
        i = e(23421);
      const n = ['td-wordCloud', ''];
      let s = (() => {
        class a extends i.R0 {
          data;
          shape;
          left;
          top;
          width;
          height;
          right;
          bottom;
          sizeRange;
          rotationRange;
          rotationStep;
          gridSize;
          drawOutOfBound;
          textStyle;
          constructor(o) {
            super('wordCloud', o);
          }
          getConfig() {
            return {
              shape: this.shape,
              left: this.left,
              top: this.top,
              width: this.width,
              height: this.height,
              right: this.right,
              bottom: this.bottom,
              sizeRange: this.sizeRange,
              rotationRange: this.rotationRange,
              rotationStep: this.rotationStep,
              gridSize: this.gridSize,
              drawOutOfBound: this.drawOutOfBound,
              textStyle: this.textStyle,
            };
          }
          static ɵfac = function (r) {
            return new (r || a)(t.Y36(i.ij));
          };
          static ɵcmp = t.Xpm({
            type: a,
            selectors: [['td-chart-series', 'td-wordCloud', '']],
            inputs: {
              config: 'config',
              id: 'id',
              name: 'name',
              color: 'color',
              data: 'data',
              animation: 'animation',
              animationThreshold: 'animationThreshold',
              animationDuration: 'animationDuration',
              animationEasing: 'animationEasing',
              animationDelay: 'animationDelay',
              animationDurationUpdate: 'animationDurationUpdate',
              animationEasingUpdate: 'animationEasingUpdate',
              animationDelayUpdate: 'animationDelayUpdate',
              tooltip: 'tooltip',
              shape: 'shape',
              left: 'left',
              top: 'top',
              width: 'width',
              height: 'height',
              right: 'right',
              bottom: 'bottom',
              sizeRange: 'sizeRange',
              rotationRange: 'rotationRange',
              rotationStep: 'rotationStep',
              gridSize: 'gridSize',
              drawOutOfBound: 'drawOutOfBound',
              textStyle: 'textStyle',
            },
            features: [
              t._Bn([{ provide: i.R0, useExisting: (0, t.Gpc)(() => a) }]),
              t.qOj,
            ],
            attrs: n,
            decls: 0,
            vars: 0,
            template: function (r, _) {},
            encapsulation: 2,
            changeDetection: 0,
          });
        }
        return a;
      })();
    },
    74165: (E, d, e) => {
      e.d(d, { W: () => y });
      var t = e(86825);
      const i = (0, t.X$)('tdCollapse', [
        (0, t.SB)('1', (0, t.oB)({ height: '0', overflow: 'hidden' })),
        (0, t.SB)('0', (0, t.oB)({ height: t.l3, overflow: t.l3 })),
        (0, t.eR)(
          '0 => 1',
          [
            (0, t.oB)({ overflow: 'hidden', height: t.l3 }),
            (0, t.ru)([
              (0, t.IO)('@*', (0, t.pV)(), { optional: !0 }),
              (0, t.jt)(
                '{{ duration }}ms {{ delay }}ms {{ ease }}',
                (0, t.oB)({ height: '0', overflow: 'hidden' })
              ),
            ]),
          ],
          { params: { duration: 150, delay: '0', ease: 'ease-in' } }
        ),
        (0, t.eR)(
          '1 => 0',
          [
            (0, t.oB)({ height: '0', overflow: 'hidden' }),
            (0, t.ru)([
              (0, t.IO)('@*', (0, t.pV)(), { optional: !0 }),
              (0, t.jt)(
                '{{ duration }}ms {{ delay }}ms {{ ease }}',
                (0, t.oB)({ overflow: 'hidden', height: t.l3 })
              ),
            ]),
          ],
          { params: { duration: 150, delay: '0', ease: 'ease-out' } }
        ),
      ]);
      var n = e(19212),
        s = e(49388),
        a = e(96814),
        l = e(92596),
        o = e(30617);
      function r(g, T) {
        if ((1 & g && (n.TgZ(0, 'mat-icon', 9), n._uU(1), n.qZA()), 2 & g)) {
          const c = n.oxw();
          n.xp6(1),
            n.hij(
              ' ',
              c.open
                ? 'keyboard_arrow_down'
                : c.isRTL
                ? 'keyboard_arrow_left'
                : 'keyboard_arrow_right',
              ' '
            );
        }
      }
      function _(g, T) {
        if ((1 & g && (n.TgZ(0, 'span', 10), n._uU(1), n.qZA()), 2 & g)) {
          const c = n.oxw();
          n.xp6(1), n.hij('', c.key, ':');
        }
      }
      function u(g, T) {
        if ((1 & g && (n.TgZ(0, 'span', 14), n._uU(1), n.qZA()), 2 & g)) {
          const c = n.oxw(2);
          n.xp6(1), n.hij('[', c.data.length, ']');
        }
      }
      function m(g, T) {
        if (
          (1 & g &&
            (n.TgZ(0, 'span', 11)(1, 'span', 12),
            n._uU(2),
            n.qZA(),
            n.YNc(3, u, 2, 1, 'span', 13),
            n.qZA()),
          2 & g)
        ) {
          const c = n.oxw();
          n.ekj('td-empty', !c.hasChildren()),
            n.Q6J('matTooltip', c.getPreview()),
            n.xp6(2),
            n.Oqu(c.getObjectName()),
            n.xp6(1),
            n.Q6J('ngIf', c.isArray());
        }
      }
      function O(g, T) {
        if ((1 & g && (n.TgZ(0, 'span'), n._uU(1), n.qZA()), 2 & g)) {
          const c = n.oxw();
          n.Tol(c.getType(c.data)), n.xp6(1), n.Oqu(c.getValue(c.data));
        }
      }
      function p(g, T) {
        if ((1 & g && n._UZ(0, 'td-json-formatter', 15), 2 & g)) {
          const c = T.$implicit,
            f = n.oxw();
          n.Q6J('key', c)('data', f.data[c])('levelsOpen', f.levelsOpen - 1);
        }
      }
      let y = (() => {
        class g {
          _changeDetectorRef;
          _dir;
          static KEY_MAX_LENGTH = 30;
          static PREVIEW_STRING_MAX_LENGTH = 80;
          static PREVIEW_LIMIT = 5;
          _key;
          _data;
          _children;
          _open = !1;
          _levelsOpen = 0;
          set levelsOpen(c) {
            if (!Number.isInteger(c))
              throw new Error('[levelsOpen] needs to be an integer.');
            (this._levelsOpen = c), (this._open = c > 0);
          }
          get levelsOpen() {
            return this._levelsOpen;
          }
          get open() {
            return this._open;
          }
          set key(c) {
            this._key = c;
          }
          get key() {
            const c =
              this._key && this._key.length > g.KEY_MAX_LENGTH ? '\u2026' : '';
            return this._key
              ? this._key.substring(0, g.KEY_MAX_LENGTH) + c
              : this._key ?? '';
          }
          set data(c) {
            (this._data = c), this.parseChildren();
          }
          get data() {
            return this._data;
          }
          get children() {
            return this._children ?? [];
          }
          get isRTL() {
            return !!this._dir && 'rtl' === this._dir.dir;
          }
          constructor(c, f) {
            (this._changeDetectorRef = c), (this._dir = f);
          }
          refresh() {
            this._changeDetectorRef.markForCheck();
          }
          toggle() {
            this._open = !this._open;
          }
          isObject() {
            return 'object' === this.getType(this._data);
          }
          isArray() {
            return Array.isArray(this._data);
          }
          hasChildren() {
            return (this._children && this._children.length > 0) ?? !1;
          }
          getValue(c) {
            const f = this.getType(c);
            if ('undefined' === f || 'null' === f) return f;
            if ('date' === f) c = new Date(c).toString();
            else if ('string' === f) c = '"' + c + '"';
            else {
              if ('function' === f)
                return (
                  c
                    .toString()
                    .replace(/[\r\n]/g, '')
                    .replace(/\{.*\}/, '') + '{\u2026}'
                );
              if (Array.isArray(c))
                return this.getObjectName() + ' [' + c.length + ']';
            }
            return c;
          }
          getType(c) {
            if ('object' == typeof c) {
              if (!c) return 'null';
              if (Array.isArray(c)) return 'object';
              const f = new Date(c);
              if (
                '[object Date]' === Object.prototype.toString.call(f) &&
                !Number.isNaN(f.getTime())
              )
                return 'date';
            }
            return typeof c;
          }
          getObjectName() {
            const c = this._data;
            if (this.isObject() && !c.constructor) return 'Object';
            const h = /function (.{1,})\(/.exec(c.constructor.toString());
            return h && h.length > 1 ? h[1] : '';
          }
          getPreview() {
            let c,
              f = '{ ',
              h = ' }';
            this.isArray()
              ? ((c = (
                  Object.entries(this._data).slice(0, g.PREVIEW_LIMIT) ?? []
                ).map((P) => this.getValue(P))),
                (f = '['),
                (h = ']'))
              : (c = (this._children?.slice(0, g.PREVIEW_LIMIT) ?? []).map(
                  (P) => P + ': ' + this.getValue(this._data[P] ?? void 0)
                ));
            const v = c.join(', '),
              D =
                c.length >= g.PREVIEW_LIMIT ||
                v.length > g.PREVIEW_STRING_MAX_LENGTH
                  ? '\u2026'
                  : '';
            return f + v.substring(0, g.PREVIEW_STRING_MAX_LENGTH) + D + h;
          }
          parseChildren() {
            this.isObject() && (this._children = Object.keys(this._data ?? {}));
          }
          static ɵfac = function (f) {
            return new (f || g)(n.Y36(n.sBO), n.Y36(s.Lv, 8));
          };
          static ɵcmp = n.Xpm({
            type: g,
            selectors: [['td-json-formatter']],
            inputs: { levelsOpen: 'levelsOpen', key: 'key', data: 'data' },
            decls: 9,
            vars: 11,
            consts: [
              [1, 'td-json-formatter-wrapper'],
              [1, 'td-key', 3, 'tabIndex', 'keydown.enter', 'click'],
              ['class', 'td-node-icon', 4, 'ngIf'],
              ['class', 'key', 4, 'ngIf'],
              [1, 'value'],
              [
                'matTooltipPosition',
                'after',
                3,
                'td-empty',
                'matTooltip',
                4,
                'ngIf',
              ],
              [3, 'class', 4, 'ngIf'],
              [1, 'td-object-children'],
              ['ngFor', '', 3, 'ngForOf'],
              [1, 'td-node-icon'],
              [1, 'key'],
              ['matTooltipPosition', 'after', 3, 'matTooltip'],
              [1, 'td-object-name'],
              ['class', 'td-array-length', 4, 'ngIf'],
              [1, 'td-array-length'],
              [3, 'key', 'data', 'levelsOpen'],
            ],
            template: function (f, h) {
              1 & f &&
                (n.TgZ(0, 'div', 0)(1, 'a', 1),
                n.NdJ('keydown.enter', function () {
                  return h.toggle();
                })('click', function () {
                  return h.toggle();
                }),
                n.YNc(2, r, 2, 1, 'mat-icon', 2)(3, _, 2, 1, 'span', 3),
                n.TgZ(4, 'span', 4),
                n.YNc(5, m, 4, 5, 'span', 5)(6, O, 2, 3, 'span', 6),
                n.qZA()(),
                n.TgZ(7, 'div', 7),
                n.YNc(8, p, 1, 3, 'ng-template', 8),
                n.qZA()()),
                2 & f &&
                  (n.xp6(1),
                  n.ekj('td-key-node', h.hasChildren())(
                    'td-key-leaf',
                    !h.hasChildren()
                  ),
                  n.Q6J('tabIndex', h.isObject() ? 0 : -1),
                  n.xp6(1),
                  n.Q6J('ngIf', h.hasChildren()),
                  n.xp6(1),
                  n.Q6J('ngIf', h.key),
                  n.xp6(2),
                  n.Q6J('ngIf', h.isObject()),
                  n.xp6(1),
                  n.Q6J('ngIf', !h.isObject()),
                  n.xp6(1),
                  n.Q6J('@tdCollapse', !(h.hasChildren() && h.open)),
                  n.xp6(1),
                  n.Q6J('ngForOf', h.children));
            },
            dependencies: [a.sg, a.O5, l.gM, o.Hw, g],
            styles: [
              '[_nghost-%COMP%]{display:block}.td-json-formatter-wrapper[_ngcontent-%COMP%]{padding-top:2px;padding-bottom:2px}.td-json-formatter-wrapper[_ngcontent-%COMP%]   .td-key[_ngcontent-%COMP%]{box-sizing:border-box;display:flex;flex-direction:row;align-items:flex-start;align-content:center;max-width:100%;justify-content:flex-start}.td-json-formatter-wrapper[_ngcontent-%COMP%]   .td-key.td-key-node[_ngcontent-%COMP%]:hover{cursor:pointer}.td-json-formatter-wrapper[_ngcontent-%COMP%]   .td-object-children.ng-animating[_ngcontent-%COMP%]{overflow:hidden}.td-json-formatter-wrapper[_ngcontent-%COMP%]   .td-object-children[_ngcontent-%COMP%]   .td-key[_ngcontent-%COMP%], .td-json-formatter-wrapper[_ngcontent-%COMP%]   .td-object-children[_ngcontent-%COMP%]   .td-object-children[_ngcontent-%COMP%]{padding-left:24px}  [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-key,   [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-object-children{padding-right:24px;padding-left:0}.td-json-formatter-wrapper[_ngcontent-%COMP%]   .td-object-children[_ngcontent-%COMP%]   .td-key.td-key-leaf[_ngcontent-%COMP%], .td-json-formatter-wrapper[_ngcontent-%COMP%]   .td-object-children[_ngcontent-%COMP%]   .td-object-children.td-key-leaf[_ngcontent-%COMP%]{padding-left:48px}  [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-key.td-key-leaf,   [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-object-children.td-key-leaf{padding-right:48px;padding-left:0}.td-json-formatter-wrapper[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{margin-left:5px}  [dir=rtl] .td-json-formatter-wrapper .value{padding-right:5px;padding-left:0}.td-json-formatter-wrapper[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .td-empty[_ngcontent-%COMP%]{opacity:.5;text-decoration:line-through}.td-json-formatter-wrapper[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .string[_ngcontent-%COMP%], .td-json-formatter-wrapper[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{word-break:break-word}',
            ],
            data: { animation: [i] },
            changeDetection: 0,
          });
        }
        return g;
      })();
    },
    42094: (E, d, e) => {
      e.d(d, { P: () => a });
      var t = e(96814),
        i = e(92596),
        n = e(30617),
        s = e(19212);
      let a = (() => {
        class o {
          static ɵfac = function (u) {
            return new (u || o)();
          };
          static ɵmod = s.oAB({ type: o });
          static ɵinj = s.cJS({ imports: [t.ez, i.AV, n.Ps] });
        }
        return o;
      })();
      e(74165);
    },
    58643: (E, d, e) => {
      e.d(d, { LK: () => r });
      var t = e(96814),
        i = e(6311),
        n = e(30617),
        s = e(32296),
        a = e(59038),
        l = e(67051),
        o = e(19212);
      let r = (() => {
        class _ {
          static ɵfac = function (O) {
            return new (O || _)();
          };
          static ɵmod = o.oAB({ type: _ });
          static ɵinj = o.cJS({ imports: [t.ez, i.Tx, n.Ps, s.ot, a.ie, l.x] });
        }
        return _;
      })();
    },
    73576: (E, d, e) => {
      e.d(d, { H: () => T });
      var t = e(19212),
        i = e(6311),
        n = e(30617),
        s = e(32296),
        a = e(96814),
        l = e(59038),
        o = e(92892);
      function r(c, f) {
        if ((1 & c && (t.TgZ(0, 'span', 7), t._uU(1), t.qZA()), 2 & c)) {
          const h = t.oxw(2);
          t.xp6(1), t.Oqu(h.name);
        }
      }
      function _(c, f) {
        if ((1 & c && (t.TgZ(0, 'span', 8), t._uU(1), t.qZA()), 2 & c)) {
          const h = t.oxw(2);
          t.xp6(1), t.Oqu(h.email);
        }
      }
      function u(c, f) {
        if (1 & c) {
          const h = t.EpF();
          t.TgZ(0, 'mat-list-item', 3),
            t.NdJ('click', function (D) {
              t.CHM(h);
              const M = t.oxw();
              return t.KtG(M._blockEvent(D));
            }),
            t.TgZ(1, 'mat-icon', 4),
            t._uU(2, 'person'),
            t.qZA(),
            t.YNc(3, r, 2, 1, 'span', 5)(4, _, 2, 1, 'span', 6),
            t.qZA();
        }
        if (2 & c) {
          const h = t.oxw();
          t.xp6(3), t.Q6J('ngIf', h.name), t.xp6(1), t.Q6J('ngIf', h.email);
        }
      }
      const m = [
          [['', 'td-user-info-list', '']],
          [['', 'td-user-action-list', '']],
        ],
        O = ['[td-user-info-list]', '[td-user-action-list]'];
      let p = (() => {
        class c {
          email;
          name;
          _blockEvent(h) {
            h.preventDefault(), h.stopPropagation();
          }
          static ɵfac = function (v) {
            return new (v || c)();
          };
          static ɵcmp = t.Xpm({
            type: c,
            selectors: [['td-user-profile-menu']],
            inputs: { email: 'email', name: 'name' },
            ngContentSelectors: O,
            decls: 6,
            vars: 1,
            consts: [
              [1, 'user-profile-menu'],
              ['td-menu-header', ''],
              [3, 'click', 4, 'ngIf'],
              [3, 'click'],
              ['matListItemAvatar', ''],
              ['matListItemLine', '', 'class', 'mat-body-1', 4, 'ngIf'],
              ['matListItemLine', '', 4, 'ngIf'],
              ['matListItemLine', '', 1, 'mat-body-1'],
              ['matListItemLine', ''],
            ],
            template: function (v, D) {
              1 & v &&
                (t.F$t(m),
                t.TgZ(0, 'td-menu', 0)(1, 'mat-list', 1),
                t.YNc(2, u, 5, 2, 'mat-list-item', 2),
                t.Hsn(3),
                t.qZA(),
                t.TgZ(4, 'mat-action-list'),
                t.Hsn(5, 1),
                t.qZA()()),
                2 & v && (t.xp6(2), t.Q6J('ngIf', D.name || D.email));
            },
            dependencies: [a.O5, n.Hw, l.i$, l.lT, l.Tg, l.D1, l.WW, o.g],
            styles: [
              '.user-profile-menu[_ngcontent-%COMP%]   [td-menu-header][_ngcontent-%COMP%]{text-align:left;padding-bottom:0}  mat-list-item:not(:first-child) .mat-list-item-content .mat-icon[matListItemAvatar],   [mat-list-item] .mat-list-item-content .mat-icon[matListItemAvatar]{background:none}.mat-action-list[_ngcontent-%COMP%]{padding-top:0}[_nghost-%COMP%]     .mat-action-list .mat-divider, [_nghost-%COMP%]     .mat-divider{margin:8px 0}[_nghost-%COMP%]     mat-divider:last-child{display:none}[_nghost-%COMP%]     mat-list .mat-list-item.mat-2-line .mat-list-item-content{height:inherit}[_nghost-%COMP%]     mat-list .mat-list-item .mat-list-item-content{padding:8px}td-menu[_ngcontent-%COMP%]{margin-bottom:0}',
            ],
            changeDetection: 0,
          });
        }
        return c;
      })();
      const y = [
          [['', 'td-user-info-list', '']],
          [['', 'td-user-action-list', '']],
        ],
        g = ['[td-user-info-list]', '[td-user-action-list]'];
      let T = (() => {
        class c {
          name;
          email;
          static ɵfac = function (v) {
            return new (v || c)();
          };
          static ɵcmp = t.Xpm({
            type: c,
            selectors: [['td-user-profile']],
            inputs: { name: 'name', email: 'email' },
            ngContentSelectors: g,
            decls: 8,
            vars: 4,
            consts: [
              ['mat-icon-button', '', 3, 'matMenuTriggerFor'],
              [3, 'overlapTrigger'],
              ['accountMenu', 'matMenu'],
              [3, 'name', 'email'],
            ],
            template: function (v, D) {
              if (
                (1 & v &&
                  (t.F$t(y),
                  t.TgZ(0, 'button', 0)(1, 'mat-icon'),
                  t._uU(2, 'person'),
                  t.qZA()(),
                  t.TgZ(3, 'mat-menu', 1, 2)(5, 'td-user-profile-menu', 3),
                  t.Hsn(6, 0, ['td-user-info-list', '']),
                  t.Hsn(7, 1, ['td-user-action-list', '']),
                  t.qZA()()),
                2 & v)
              ) {
                const M = t.MAs(4);
                t.Q6J('matMenuTriggerFor', M),
                  t.xp6(3),
                  t.Q6J('overlapTrigger', !1),
                  t.xp6(2),
                  t.Q6J('name', D.name)('email', D.email);
              }
            },
            dependencies: [i.VK, i.p6, n.Hw, s.RK, p],
            encapsulation: 2,
            changeDetection: 0,
          });
        }
        return c;
      })();
    },
    27740: (E, d, e) => {
      e.r(d), e.d(d, { conf: () => _, language: () => u });
      var t = e(53619),
        i = Object.defineProperty,
        n = Object.getOwnPropertyDescriptor,
        s = Object.getOwnPropertyNames,
        a = Object.prototype.hasOwnProperty,
        l = (m, O, p, y) => {
          if ((O && 'object' == typeof O) || 'function' == typeof O)
            for (let g of s(O))
              !a.call(m, g) &&
                g !== p &&
                i(m, g, {
                  get: () => O[g],
                  enumerable: !(y = n(O, g)) || y.enumerable,
                });
          return m;
        },
        r = {};
      l(r, t, 'default');
      var _ = {
          wordPattern:
            /(-?\d*\.\d\w*)|([^\`\~\!\@\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
          comments: { lineComment: '//', blockComment: ['/*', '*/'] },
          brackets: [
            ['{', '}'],
            ['[', ']'],
            ['(', ')'],
          ],
          onEnterRules: [
            {
              beforeText: /^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,
              afterText: /^\s*\*\/$/,
              action: {
                indentAction: r.languages.IndentAction.IndentOutdent,
                appendText: ' * ',
              },
            },
            {
              beforeText: /^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,
              action: {
                indentAction: r.languages.IndentAction.None,
                appendText: ' * ',
              },
            },
            {
              beforeText: /^(\t|(\ \ ))*\ \*(\ ([^\*]|\*(?!\/))*)?$/,
              action: {
                indentAction: r.languages.IndentAction.None,
                appendText: '* ',
              },
            },
            {
              beforeText: /^(\t|(\ \ ))*\ \*\/\s*$/,
              action: {
                indentAction: r.languages.IndentAction.None,
                removeText: 1,
              },
            },
          ],
          autoClosingPairs: [
            { open: '{', close: '}' },
            { open: '[', close: ']' },
            { open: '(', close: ')' },
            { open: '"', close: '"', notIn: ['string'] },
            { open: "'", close: "'", notIn: ['string', 'comment'] },
            { open: '`', close: '`', notIn: ['string', 'comment'] },
            { open: '/**', close: ' */', notIn: ['string'] },
          ],
          folding: {
            markers: {
              start: new RegExp('^\\s*//\\s*#?region\\b'),
              end: new RegExp('^\\s*//\\s*#?endregion\\b'),
            },
          },
        },
        u = {
          defaultToken: 'invalid',
          tokenPostfix: '.ts',
          keywords: [
            'abstract',
            'any',
            'as',
            'asserts',
            'bigint',
            'boolean',
            'break',
            'case',
            'catch',
            'class',
            'continue',
            'const',
            'constructor',
            'debugger',
            'declare',
            'default',
            'delete',
            'do',
            'else',
            'enum',
            'export',
            'extends',
            'false',
            'finally',
            'for',
            'from',
            'function',
            'get',
            'if',
            'implements',
            'import',
            'in',
            'infer',
            'instanceof',
            'interface',
            'is',
            'keyof',
            'let',
            'module',
            'namespace',
            'never',
            'new',
            'null',
            'number',
            'object',
            'out',
            'package',
            'private',
            'protected',
            'public',
            'override',
            'readonly',
            'require',
            'global',
            'return',
            'set',
            'static',
            'string',
            'super',
            'switch',
            'symbol',
            'this',
            'throw',
            'true',
            'try',
            'type',
            'typeof',
            'undefined',
            'unique',
            'unknown',
            'var',
            'void',
            'while',
            'with',
            'yield',
            'async',
            'await',
            'of',
          ],
          operators: [
            '<=',
            '>=',
            '==',
            '!=',
            '===',
            '!==',
            '=>',
            '+',
            '-',
            '**',
            '*',
            '/',
            '%',
            '++',
            '--',
            '<<',
            '</',
            '>>',
            '>>>',
            '&',
            '|',
            '^',
            '!',
            '~',
            '&&',
            '||',
            '??',
            '?',
            ':',
            '=',
            '+=',
            '-=',
            '*=',
            '**=',
            '/=',
            '%=',
            '<<=',
            '>>=',
            '>>>=',
            '&=',
            '|=',
            '^=',
            '@',
          ],
          symbols: /[=><!~?:&|+\-*\/\^%]+/,
          escapes:
            /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
          digits: /\d+(_+\d+)*/,
          octaldigits: /[0-7]+(_+[0-7]+)*/,
          binarydigits: /[0-1]+(_+[0-1]+)*/,
          hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,
          regexpctl: /[(){}\[\]\$\^|\-*+?\.]/,
          regexpesc:
            /\\(?:[bBdDfnrstvwWn0\\\/]|@regexpctl|c[A-Z]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4})/,
          tokenizer: {
            root: [[/[{}]/, 'delimiter.bracket'], { include: 'common' }],
            common: [
              [
                /[a-z_$][\w$]*/,
                { cases: { '@keywords': 'keyword', '@default': 'identifier' } },
              ],
              [/[A-Z][\w\$]*/, 'type.identifier'],
              { include: '@whitespace' },
              [
                /\/(?=([^\\\/]|\\.)+\/([dgimsuy]*)(\s*)(\.|;|,|\)|\]|\}|$))/,
                { token: 'regexp', bracket: '@open', next: '@regexp' },
              ],
              [/[()\[\]]/, '@brackets'],
              [/[<>](?!@symbols)/, '@brackets'],
              [/!(?=([^=]|$))/, 'delimiter'],
              [
                /@symbols/,
                { cases: { '@operators': 'delimiter', '@default': '' } },
              ],
              [/(@digits)[eE]([\-+]?(@digits))?/, 'number.float'],
              [/(@digits)\.(@digits)([eE][\-+]?(@digits))?/, 'number.float'],
              [/0[xX](@hexdigits)n?/, 'number.hex'],
              [/0[oO]?(@octaldigits)n?/, 'number.octal'],
              [/0[bB](@binarydigits)n?/, 'number.binary'],
              [/(@digits)n?/, 'number'],
              [/[;,.]/, 'delimiter'],
              [/"([^"\\]|\\.)*$/, 'string.invalid'],
              [/'([^'\\]|\\.)*$/, 'string.invalid'],
              [/"/, 'string', '@string_double'],
              [/'/, 'string', '@string_single'],
              [/`/, 'string', '@string_backtick'],
            ],
            whitespace: [
              [/[ \t\r\n]+/, ''],
              [/\/\*\*(?!\/)/, 'comment.doc', '@jsdoc'],
              [/\/\*/, 'comment', '@comment'],
              [/\/\/.*$/, 'comment'],
            ],
            comment: [
              [/[^\/*]+/, 'comment'],
              [/\*\//, 'comment', '@pop'],
              [/[\/*]/, 'comment'],
            ],
            jsdoc: [
              [/[^\/*]+/, 'comment.doc'],
              [/\*\//, 'comment.doc', '@pop'],
              [/[\/*]/, 'comment.doc'],
            ],
            regexp: [
              [
                /(\{)(\d+(?:,\d*)?)(\})/,
                [
                  'regexp.escape.control',
                  'regexp.escape.control',
                  'regexp.escape.control',
                ],
              ],
              [
                /(\[)(\^?)(?=(?:[^\]\\\/]|\\.)+)/,
                [
                  'regexp.escape.control',
                  { token: 'regexp.escape.control', next: '@regexrange' },
                ],
              ],
              [
                /(\()(\?:|\?=|\?!)/,
                ['regexp.escape.control', 'regexp.escape.control'],
              ],
              [/[()]/, 'regexp.escape.control'],
              [/@regexpctl/, 'regexp.escape.control'],
              [/[^\\\/]/, 'regexp'],
              [/@regexpesc/, 'regexp.escape'],
              [/\\\./, 'regexp.invalid'],
              [
                /(\/)([dgimsuy]*)/,
                [
                  { token: 'regexp', bracket: '@close', next: '@pop' },
                  'keyword.other',
                ],
              ],
            ],
            regexrange: [
              [/-/, 'regexp.escape.control'],
              [/\^/, 'regexp.invalid'],
              [/@regexpesc/, 'regexp.escape'],
              [/[^\]]/, 'regexp'],
              [
                /\]/,
                {
                  token: 'regexp.escape.control',
                  next: '@pop',
                  bracket: '@close',
                },
              ],
            ],
            string_double: [
              [/[^\\"]+/, 'string'],
              [/@escapes/, 'string.escape'],
              [/\\./, 'string.escape.invalid'],
              [/"/, 'string', '@pop'],
            ],
            string_single: [
              [/[^\\']+/, 'string'],
              [/@escapes/, 'string.escape'],
              [/\\./, 'string.escape.invalid'],
              [/'/, 'string', '@pop'],
            ],
            string_backtick: [
              [
                /\$\{/,
                { token: 'delimiter.bracket', next: '@bracketCounting' },
              ],
              [/[^\\`$]+/, 'string'],
              [/@escapes/, 'string.escape'],
              [/\\./, 'string.escape.invalid'],
              [/`/, 'string', '@pop'],
            ],
            bracketCounting: [
              [/\{/, 'delimiter.bracket', '@bracketCounting'],
              [/\}/, 'delimiter.bracket', '@pop'],
              { include: 'common' },
            ],
          },
        };
    },
  },
]);
