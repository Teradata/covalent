'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [1283],
  {
    21283: (wt, oe, V) => {
      V.r(oe),
        V.d(oe, {
          CompletionAdapter: () => Fe,
          DefinitionAdapter: () => ft,
          DiagnosticsAdapter: () => rt,
          DocumentColorAdapter: () => vt,
          DocumentFormattingEditProvider: () => re,
          DocumentHighlightAdapter: () => q,
          DocumentLinkAdapter: () => te,
          DocumentRangeFormattingEditProvider: () => ne,
          DocumentSymbolAdapter: () => ee,
          FoldingRangeAdapter: () => ie,
          HoverAdapter: () => Z,
          ReferenceAdapter: () => gt,
          RenameAdapter: () => K,
          SelectionRangeAdapter: () => ae,
          WorkerManager: () => z,
          fromPosition: () => C,
          fromRange: () => Y,
          setupMode: () => _t,
          setupMode1: () => mt,
          toRange: () => _,
          toTextEdit: () => y,
        });
      var Ve = V(53619),
        ze = Object.defineProperty,
        Xe = Object.getOwnPropertyDescriptor,
        Be = Object.getOwnPropertyNames,
        $e = Object.prototype.hasOwnProperty,
        se = (e, n, i, r) => {
          if ((n && 'object' == typeof n) || 'function' == typeof n)
            for (let t of Be(n))
              !$e.call(e, t) &&
                t !== i &&
                ze(e, t, {
                  get: () => n[t],
                  enumerable: !(r = Xe(n, t)) || r.enumerable,
                });
          return e;
        },
        c = {};
      se(c, Ve, 'default');
      var k,
        p,
        B,
        ue,
        $,
        ce,
        de,
        e,
        z = class {
          _defaults;
          _idleCheckInterval;
          _lastUsedTime;
          _configChangeListener;
          _worker;
          _client;
          constructor(e) {
            (this._defaults = e),
              (this._worker = null),
              (this._client = null),
              (this._idleCheckInterval = window.setInterval(
                () => this._checkIfIdle(),
                3e4
              )),
              (this._lastUsedTime = 0),
              (this._configChangeListener = this._defaults.onDidChange(() =>
                this._stopWorker()
              ));
          }
          _stopWorker() {
            this._worker && (this._worker.dispose(), (this._worker = null)),
              (this._client = null);
          }
          dispose() {
            clearInterval(this._idleCheckInterval),
              this._configChangeListener.dispose(),
              this._stopWorker();
          }
          _checkIfIdle() {
            this._worker &&
              Date.now() - this._lastUsedTime > 12e4 &&
              this._stopWorker();
          }
          _getClient() {
            return (
              (this._lastUsedTime = Date.now()),
              this._client ||
                ((this._worker = c.editor.createWebWorker({
                  moduleId: 'vs/language/html/htmlWorker',
                  createData: {
                    languageSettings: this._defaults.options,
                    languageId: this._defaults.languageId,
                  },
                  label: this._defaults.languageId,
                })),
                (this._client = this._worker.getProxy())),
              this._client
            );
          }
          getLanguageServiceWorker(...e) {
            let n;
            return this._getClient()
              .then((i) => {
                n = i;
              })
              .then((i) => {
                if (this._worker) return this._worker.withSyncedResources(e);
              })
              .then((i) => n);
          }
        },
        X = (function (e) {
          return (e.MIN_VALUE = 0), (e.MAX_VALUE = 2147483647), e;
        })(X || {});
      ((e = k || (k = {})).create = function n(r, t) {
        return (
          r === Number.MAX_VALUE && (r = X.MAX_VALUE),
          t === Number.MAX_VALUE && (t = X.MAX_VALUE),
          { line: r, character: t }
        );
      }),
        (e.is = function i(r) {
          var t = r;
          return (
            s.objectLiteral(t) && s.uinteger(t.line) && s.uinteger(t.character)
          );
        }),
        (function (e) {
          (e.create = function n(r, t, a, o) {
            if (
              s.uinteger(r) &&
              s.uinteger(t) &&
              s.uinteger(a) &&
              s.uinteger(o)
            )
              return { start: k.create(r, t), end: k.create(a, o) };
            if (k.is(r) && k.is(t)) return { start: r, end: t };
            throw new Error(
              'Range#create called with invalid arguments[' +
                r +
                ', ' +
                t +
                ', ' +
                a +
                ', ' +
                o +
                ']'
            );
          }),
            (e.is = function i(r) {
              var t = r;
              return s.objectLiteral(t) && k.is(t.start) && k.is(t.end);
            });
        })(p || (p = {})),
        (function (e) {
          (e.create = function n(r, t) {
            return { uri: r, range: t };
          }),
            (e.is = function i(r) {
              var t = r;
              return (
                s.defined(t) &&
                p.is(t.range) &&
                (s.string(t.uri) || s.undefined(t.uri))
              );
            });
        })(B || (B = {})),
        (function (e) {
          (e.create = function n(r, t, a, o) {
            return {
              targetUri: r,
              targetRange: t,
              targetSelectionRange: a,
              originSelectionRange: o,
            };
          }),
            (e.is = function i(r) {
              var t = r;
              return (
                s.defined(t) &&
                p.is(t.targetRange) &&
                s.string(t.targetUri) &&
                (p.is(t.targetSelectionRange) ||
                  s.undefined(t.targetSelectionRange)) &&
                (p.is(t.originSelectionRange) ||
                  s.undefined(t.originSelectionRange))
              );
            });
        })(ue || (ue = {})),
        (function (e) {
          (e.create = function n(r, t, a, o) {
            return { red: r, green: t, blue: a, alpha: o };
          }),
            (e.is = function i(r) {
              var t = r;
              return (
                s.numberRange(t.red, 0, 1) &&
                s.numberRange(t.green, 0, 1) &&
                s.numberRange(t.blue, 0, 1) &&
                s.numberRange(t.alpha, 0, 1)
              );
            });
        })($ || ($ = {})),
        (function (e) {
          (e.create = function n(r, t) {
            return { range: r, color: t };
          }),
            (e.is = function i(r) {
              var t = r;
              return p.is(t.range) && $.is(t.color);
            });
        })(ce || (ce = {})),
        (function (e) {
          (e.create = function n(r, t, a) {
            return { label: r, textEdit: t, additionalTextEdits: a };
          }),
            (e.is = function i(r) {
              var t = r;
              return (
                s.string(t.label) &&
                (s.undefined(t.textEdit) || b.is(t)) &&
                (s.undefined(t.additionalTextEdits) ||
                  s.typedArray(t.additionalTextEdits, b.is))
              );
            });
        })(de || (de = {}));
      var fe,
        Q,
        S = (function (e) {
          return (
            (e.Comment = 'comment'),
            (e.Imports = 'imports'),
            (e.Region = 'region'),
            e
          );
        })(S || {});
      !(function (e) {
        (e.create = function n(r, t, a, o, u) {
          var g = { startLine: r, endLine: t };
          return (
            s.defined(a) && (g.startCharacter = a),
            s.defined(o) && (g.endCharacter = o),
            s.defined(u) && (g.kind = u),
            g
          );
        }),
          (e.is = function i(r) {
            var t = r;
            return (
              s.uinteger(t.startLine) &&
              s.uinteger(t.startLine) &&
              (s.undefined(t.startCharacter) || s.uinteger(t.startCharacter)) &&
              (s.undefined(t.endCharacter) || s.uinteger(t.endCharacter)) &&
              (s.undefined(t.kind) || s.string(t.kind))
            );
          });
      })(fe || (fe = {})),
        (function (e) {
          (e.create = function n(r, t) {
            return { location: r, message: t };
          }),
            (e.is = function i(r) {
              var t = r;
              return s.defined(t) && B.is(t.location) && s.string(t.message);
            });
        })(Q || (Q = {}));
      var ge,
        F,
        R,
        b,
        x,
        m,
        A,
        T,
        D,
        M,
        L,
        G,
        I = (function (e) {
          return (
            (e.Error = 1), (e.Warning = 2), (e.Information = 3), (e.Hint = 4), e
          );
        })(I || {});
      !(function (e) {
        e.is = function n(i) {
          return null != i && s.string(i.href);
        };
      })(ge || (ge = {})),
        (function (e) {
          (e.create = function n(r, t, a, o, u, g) {
            var d = { range: r, message: t };
            return (
              s.defined(a) && (d.severity = a),
              s.defined(o) && (d.code = o),
              s.defined(u) && (d.source = u),
              s.defined(g) && (d.relatedInformation = g),
              d
            );
          }),
            (e.is = function i(r) {
              var t,
                a = r;
              return (
                s.defined(a) &&
                p.is(a.range) &&
                s.string(a.message) &&
                (s.number(a.severity) || s.undefined(a.severity)) &&
                (s.integer(a.code) ||
                  s.string(a.code) ||
                  s.undefined(a.code)) &&
                (s.undefined(a.codeDescription) ||
                  s.string(
                    null === (t = a.codeDescription) || void 0 === t
                      ? void 0
                      : t.href
                  )) &&
                (s.string(a.source) || s.undefined(a.source)) &&
                (s.undefined(a.relatedInformation) ||
                  s.typedArray(a.relatedInformation, Q.is))
              );
            });
        })(F || (F = {})),
        (function (e) {
          (e.create = function n(r, t) {
            for (var a = [], o = 2; o < arguments.length; o++)
              a[o - 2] = arguments[o];
            var u = { title: r, command: t };
            return s.defined(a) && a.length > 0 && (u.arguments = a), u;
          }),
            (e.is = function i(r) {
              var t = r;
              return s.defined(t) && s.string(t.title) && s.string(t.command);
            });
        })(R || (R = {})),
        (function (e) {
          (e.replace = function n(a, o) {
            return { range: a, newText: o };
          }),
            (e.insert = function i(a, o) {
              return { range: { start: a, end: a }, newText: o };
            }),
            (e.del = function r(a) {
              return { range: a, newText: '' };
            }),
            (e.is = function t(a) {
              var o = a;
              return s.objectLiteral(o) && s.string(o.newText) && p.is(o.range);
            });
        })(b || (b = {})),
        (function (e) {
          (e.create = function n(r, t, a) {
            var o = { label: r };
            return (
              void 0 !== t && (o.needsConfirmation = t),
              void 0 !== a && (o.description = a),
              o
            );
          }),
            (e.is = function i(r) {
              var t = r;
              return (
                void 0 !== t &&
                s.objectLiteral(t) &&
                s.string(t.label) &&
                (s.boolean(t.needsConfirmation) ||
                  void 0 === t.needsConfirmation) &&
                (s.string(t.description) || void 0 === t.description)
              );
            });
        })(x || (x = {})),
        (function (e) {
          e.is = function n(i) {
            return 'string' == typeof i;
          };
        })(m || (m = {})),
        (function (e) {
          (e.replace = function n(a, o, u) {
            return { range: a, newText: o, annotationId: u };
          }),
            (e.insert = function i(a, o, u) {
              return {
                range: { start: a, end: a },
                newText: o,
                annotationId: u,
              };
            }),
            (e.del = function r(a, o) {
              return { range: a, newText: '', annotationId: o };
            }),
            (e.is = function t(a) {
              var o = a;
              return b.is(o) && (x.is(o.annotationId) || m.is(o.annotationId));
            });
        })(A || (A = {})),
        (function (e) {
          (e.create = function n(r, t) {
            return { textDocument: r, edits: t };
          }),
            (e.is = function i(r) {
              var t = r;
              return (
                s.defined(t) && N.is(t.textDocument) && Array.isArray(t.edits)
              );
            });
        })(T || (T = {})),
        (function (e) {
          (e.create = function n(r, t, a) {
            var o = { kind: 'create', uri: r };
            return (
              void 0 !== t &&
                (void 0 !== t.overwrite || void 0 !== t.ignoreIfExists) &&
                (o.options = t),
              void 0 !== a && (o.annotationId = a),
              o
            );
          }),
            (e.is = function i(r) {
              var t = r;
              return (
                t &&
                'create' === t.kind &&
                s.string(t.uri) &&
                (void 0 === t.options ||
                  ((void 0 === t.options.overwrite ||
                    s.boolean(t.options.overwrite)) &&
                    (void 0 === t.options.ignoreIfExists ||
                      s.boolean(t.options.ignoreIfExists)))) &&
                (void 0 === t.annotationId || m.is(t.annotationId))
              );
            });
        })(D || (D = {})),
        (function (e) {
          (e.create = function n(r, t, a, o) {
            var u = { kind: 'rename', oldUri: r, newUri: t };
            return (
              void 0 !== a &&
                (void 0 !== a.overwrite || void 0 !== a.ignoreIfExists) &&
                (u.options = a),
              void 0 !== o && (u.annotationId = o),
              u
            );
          }),
            (e.is = function i(r) {
              var t = r;
              return (
                t &&
                'rename' === t.kind &&
                s.string(t.oldUri) &&
                s.string(t.newUri) &&
                (void 0 === t.options ||
                  ((void 0 === t.options.overwrite ||
                    s.boolean(t.options.overwrite)) &&
                    (void 0 === t.options.ignoreIfExists ||
                      s.boolean(t.options.ignoreIfExists)))) &&
                (void 0 === t.annotationId || m.is(t.annotationId))
              );
            });
        })(M || (M = {})),
        (function (e) {
          (e.create = function n(r, t, a) {
            var o = { kind: 'delete', uri: r };
            return (
              void 0 !== t &&
                (void 0 !== t.recursive || void 0 !== t.ignoreIfNotExists) &&
                (o.options = t),
              void 0 !== a && (o.annotationId = a),
              o
            );
          }),
            (e.is = function i(r) {
              var t = r;
              return (
                t &&
                'delete' === t.kind &&
                s.string(t.uri) &&
                (void 0 === t.options ||
                  ((void 0 === t.options.recursive ||
                    s.boolean(t.options.recursive)) &&
                    (void 0 === t.options.ignoreIfNotExists ||
                      s.boolean(t.options.ignoreIfNotExists)))) &&
                (void 0 === t.annotationId || m.is(t.annotationId))
              );
            });
        })(L || (L = {})),
        (function (e) {
          e.is = function n(i) {
            return (
              i &&
              (void 0 !== i.changes || void 0 !== i.documentChanges) &&
              (void 0 === i.documentChanges ||
                i.documentChanges.every(function (t) {
                  return s.string(t.kind)
                    ? D.is(t) || M.is(t) || L.is(t)
                    : T.is(t);
                }))
            );
          };
        })(G || (G = {}));
      var he,
        ve,
        N,
        pe,
        j = (function () {
          function e(n, i) {
            (this.edits = n), (this.changeAnnotations = i);
          }
          return (
            (e.prototype.insert = function (n, i, r) {
              var t, a;
              if (
                (void 0 === r
                  ? (t = b.insert(n, i))
                  : m.is(r)
                  ? ((a = r), (t = A.insert(n, i, r)))
                  : (this.assertChangeAnnotations(this.changeAnnotations),
                    (a = this.changeAnnotations.manage(r)),
                    (t = A.insert(n, i, a))),
                this.edits.push(t),
                void 0 !== a)
              )
                return a;
            }),
            (e.prototype.replace = function (n, i, r) {
              var t, a;
              if (
                (void 0 === r
                  ? (t = b.replace(n, i))
                  : m.is(r)
                  ? ((a = r), (t = A.replace(n, i, r)))
                  : (this.assertChangeAnnotations(this.changeAnnotations),
                    (a = this.changeAnnotations.manage(r)),
                    (t = A.replace(n, i, a))),
                this.edits.push(t),
                void 0 !== a)
              )
                return a;
            }),
            (e.prototype.delete = function (n, i) {
              var r, t;
              if (
                (void 0 === i
                  ? (r = b.del(n))
                  : m.is(i)
                  ? ((t = i), (r = A.del(n, i)))
                  : (this.assertChangeAnnotations(this.changeAnnotations),
                    (t = this.changeAnnotations.manage(i)),
                    (r = A.del(n, t))),
                this.edits.push(r),
                void 0 !== t)
              )
                return t;
            }),
            (e.prototype.add = function (n) {
              this.edits.push(n);
            }),
            (e.prototype.all = function () {
              return this.edits;
            }),
            (e.prototype.clear = function () {
              this.edits.splice(0, this.edits.length);
            }),
            (e.prototype.assertChangeAnnotations = function (n) {
              if (void 0 === n)
                throw new Error(
                  'Text edit change is not configured to manage change annotations.'
                );
            }),
            e
          );
        })(),
        le = (function () {
          function e(n) {
            (this._annotations = void 0 === n ? Object.create(null) : n),
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
            (e.prototype.manage = function (n, i) {
              var r;
              if (
                (m.is(n) ? (r = n) : ((r = this.nextId()), (i = n)),
                void 0 !== this._annotations[r])
              )
                throw new Error('Id ' + r + ' is already in use.');
              if (void 0 === i)
                throw new Error('No annotation provided for id ' + r);
              return (this._annotations[r] = i), this._size++, r;
            }),
            (e.prototype.nextId = function () {
              return this._counter++, this._counter.toString();
            }),
            e
          );
        })();
      !(function () {
        function e(n) {
          var i = this;
          (this._textEditChanges = Object.create(null)),
            void 0 !== n
              ? ((this._workspaceEdit = n),
                n.documentChanges
                  ? ((this._changeAnnotations = new le(n.changeAnnotations)),
                    (n.changeAnnotations = this._changeAnnotations.all()),
                    n.documentChanges.forEach(function (r) {
                      if (T.is(r)) {
                        var t = new j(r.edits, i._changeAnnotations);
                        i._textEditChanges[r.textDocument.uri] = t;
                      }
                    }))
                  : n.changes &&
                    Object.keys(n.changes).forEach(function (r) {
                      var t = new j(n.changes[r]);
                      i._textEditChanges[r] = t;
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
          (e.prototype.getTextEditChange = function (n) {
            if (N.is(n)) {
              if (
                (this.initDocumentChanges(),
                void 0 === this._workspaceEdit.documentChanges)
              )
                throw new Error(
                  'Workspace edit is not configured for document changes.'
                );
              var i = { uri: n.uri, version: n.version };
              return (
                (r = this._textEditChanges[i.uri]) ||
                  (this._workspaceEdit.documentChanges.push({
                    textDocument: i,
                    edits: (t = []),
                  }),
                  (r = new j(t, this._changeAnnotations)),
                  (this._textEditChanges[i.uri] = r)),
                r
              );
            }
            if ((this.initChanges(), void 0 === this._workspaceEdit.changes))
              throw new Error(
                'Workspace edit is not configured for normal text edit changes.'
              );
            var r, t;
            return (
              (r = this._textEditChanges[n]) ||
                ((this._workspaceEdit.changes[n] = t = []),
                (r = new j(t)),
                (this._textEditChanges[n] = r)),
              r
            );
          }),
          (e.prototype.initDocumentChanges = function () {
            void 0 === this._workspaceEdit.documentChanges &&
              void 0 === this._workspaceEdit.changes &&
              ((this._changeAnnotations = new le()),
              (this._workspaceEdit.documentChanges = []),
              (this._workspaceEdit.changeAnnotations =
                this._changeAnnotations.all()));
          }),
          (e.prototype.initChanges = function () {
            void 0 === this._workspaceEdit.documentChanges &&
              void 0 === this._workspaceEdit.changes &&
              (this._workspaceEdit.changes = Object.create(null));
          }),
          (e.prototype.createFile = function (n, i, r) {
            if (
              (this.initDocumentChanges(),
              void 0 === this._workspaceEdit.documentChanges)
            )
              throw new Error(
                'Workspace edit is not configured for document changes.'
              );
            var t, a, o;
            if (
              (x.is(i) || m.is(i) ? (t = i) : (r = i),
              void 0 === t
                ? (a = D.create(n, r))
                : ((o = m.is(t) ? t : this._changeAnnotations.manage(t)),
                  (a = D.create(n, r, o))),
              this._workspaceEdit.documentChanges.push(a),
              void 0 !== o)
            )
              return o;
          }),
          (e.prototype.renameFile = function (n, i, r, t) {
            if (
              (this.initDocumentChanges(),
              void 0 === this._workspaceEdit.documentChanges)
            )
              throw new Error(
                'Workspace edit is not configured for document changes.'
              );
            var a, o, u;
            if (
              (x.is(r) || m.is(r) ? (a = r) : (t = r),
              void 0 === a
                ? (o = M.create(n, i, t))
                : ((u = m.is(a) ? a : this._changeAnnotations.manage(a)),
                  (o = M.create(n, i, t, u))),
              this._workspaceEdit.documentChanges.push(o),
              void 0 !== u)
            )
              return u;
          }),
          (e.prototype.deleteFile = function (n, i, r) {
            if (
              (this.initDocumentChanges(),
              void 0 === this._workspaceEdit.documentChanges)
            )
              throw new Error(
                'Workspace edit is not configured for document changes.'
              );
            var t, a, o;
            if (
              (x.is(i) || m.is(i) ? (t = i) : (r = i),
              void 0 === t
                ? (a = L.create(n, r))
                : ((o = m.is(t) ? t : this._changeAnnotations.manage(t)),
                  (a = L.create(n, r, o))),
              this._workspaceEdit.documentChanges.push(a),
              void 0 !== o)
            )
              return o;
          });
      })(),
        (function (e) {
          (e.create = function n(r) {
            return { uri: r };
          }),
            (e.is = function i(r) {
              var t = r;
              return s.defined(t) && s.string(t.uri);
            });
        })(he || (he = {})),
        (function (e) {
          (e.create = function n(r, t) {
            return { uri: r, version: t };
          }),
            (e.is = function i(r) {
              var t = r;
              return s.defined(t) && s.string(t.uri) && s.integer(t.version);
            });
        })(ve || (ve = {})),
        (function (e) {
          (e.create = function n(r, t) {
            return { uri: r, version: t };
          }),
            (e.is = function i(r) {
              var t = r;
              return (
                s.defined(t) &&
                s.string(t.uri) &&
                (null === t.version || s.integer(t.version))
              );
            });
        })(N || (N = {})),
        (function (e) {
          (e.create = function n(r, t, a, o) {
            return { uri: r, languageId: t, version: a, text: o };
          }),
            (e.is = function i(r) {
              var t = r;
              return (
                s.defined(t) &&
                s.string(t.uri) &&
                s.string(t.languageId) &&
                s.integer(t.version) &&
                s.string(t.text)
              );
            });
        })(pe || (pe = {}));
      var J,
        W = (function (e) {
          return (e.PlainText = 'plaintext'), (e.Markdown = 'markdown'), e;
        })(W || {});
      !(function (e) {
        e.is = function n(i) {
          return i === e.PlainText || i === e.Markdown;
        };
      })(W || (W = {})),
        (function (e) {
          e.is = function n(i) {
            var r = i;
            return s.objectLiteral(i) && W.is(r.kind) && s.string(r.value);
          };
        })(J || (J = {}));
      var _e,
        we,
        ke,
        H,
        Ee,
        be,
        Ae,
        l = (function (e) {
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
        })(l || {}),
        me = (function (e) {
          return (e.PlainText = 1), (e.Snippet = 2), e;
        })(me || {});
      !(function (e) {
        (e.create = function n(r, t, a) {
          return { newText: r, insert: t, replace: a };
        }),
          (e.is = function i(r) {
            var t = r;
            return (
              t && s.string(t.newText) && p.is(t.insert) && p.is(t.replace)
            );
          });
      })(_e || (_e = {})),
        (function (e) {
          e.create = function n(i) {
            return { label: i };
          };
        })(we || (we = {})),
        (function (e) {
          e.create = function n(i, r) {
            return { items: i || [], isIncomplete: !!r };
          };
        })(ke || (ke = {})),
        (function (e) {
          (e.fromPlainText = function n(r) {
            return r.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&');
          }),
            (e.is = function i(r) {
              var t = r;
              return (
                s.string(t) ||
                (s.objectLiteral(t) &&
                  s.string(t.language) &&
                  s.string(t.value))
              );
            });
        })(H || (H = {})),
        (function (e) {
          e.is = function n(i) {
            var r = i;
            return (
              !!r &&
              s.objectLiteral(r) &&
              (J.is(r.contents) ||
                H.is(r.contents) ||
                s.typedArray(r.contents, H.is)) &&
              (void 0 === i.range || p.is(i.range))
            );
          };
        })(Ee || (Ee = {})),
        (function (e) {
          e.create = function n(i, r) {
            return r ? { label: i, documentation: r } : { label: i };
          };
        })(be || (be = {})),
        (function (e) {
          e.create = function n(i, r) {
            for (var t = [], a = 2; a < arguments.length; a++)
              t[a - 2] = arguments[a];
            var o = { label: i };
            return (
              s.defined(r) && (o.documentation = r),
              (o.parameters = s.defined(t) ? t : []),
              o
            );
          };
        })(Ae || (Ae = {}));
      var Ce,
        O = (function (e) {
          return (e.Text = 1), (e.Read = 2), (e.Write = 3), e;
        })(O || {});
      !(function (e) {
        e.create = function n(i, r) {
          var t = { range: i };
          return s.number(r) && (t.kind = r), t;
        };
      })(Ce || (Ce = {}));
      var xe,
        ye,
        Pe,
        Ie,
        Re,
        De,
        Me,
        Le,
        Se,
        h = (function (e) {
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
        })(h || {});
      !(function (e) {
        e.create = function n(i, r, t, a, o) {
          var u = { name: i, kind: r, location: { uri: a, range: t } };
          return o && (u.containerName = o), u;
        };
      })(xe || (xe = {})),
        (function (e) {
          (e.create = function n(r, t, a, o, u, g) {
            var d = {
              name: r,
              detail: t,
              kind: a,
              range: o,
              selectionRange: u,
            };
            return void 0 !== g && (d.children = g), d;
          }),
            (e.is = function i(r) {
              var t = r;
              return (
                t &&
                s.string(t.name) &&
                s.number(t.kind) &&
                p.is(t.range) &&
                p.is(t.selectionRange) &&
                (void 0 === t.detail || s.string(t.detail)) &&
                (void 0 === t.deprecated || s.boolean(t.deprecated)) &&
                (void 0 === t.children || Array.isArray(t.children)) &&
                (void 0 === t.tags || Array.isArray(t.tags))
              );
            });
        })(ye || (ye = {})),
        (function (e) {
          (e.create = function n(r, t) {
            var a = { diagnostics: r };
            return null != t && (a.only = t), a;
          }),
            (e.is = function i(r) {
              var t = r;
              return (
                s.defined(t) &&
                s.typedArray(t.diagnostics, F.is) &&
                (void 0 === t.only || s.typedArray(t.only, s.string))
              );
            });
        })(Pe || (Pe = {})),
        (function (e) {
          (e.create = function n(r, t, a) {
            var o = { title: r },
              u = !0;
            return (
              'string' == typeof t
                ? ((u = !1), (o.kind = t))
                : R.is(t)
                ? (o.command = t)
                : (o.edit = t),
              u && void 0 !== a && (o.kind = a),
              o
            );
          }),
            (e.is = function i(r) {
              var t = r;
              return (
                t &&
                s.string(t.title) &&
                (void 0 === t.diagnostics ||
                  s.typedArray(t.diagnostics, F.is)) &&
                (void 0 === t.kind || s.string(t.kind)) &&
                (void 0 !== t.edit || void 0 !== t.command) &&
                (void 0 === t.command || R.is(t.command)) &&
                (void 0 === t.isPreferred || s.boolean(t.isPreferred)) &&
                (void 0 === t.edit || G.is(t.edit))
              );
            });
        })(Ie || (Ie = {})),
        (function (e) {
          (e.create = function n(r, t) {
            var a = { range: r };
            return s.defined(t) && (a.data = t), a;
          }),
            (e.is = function i(r) {
              var t = r;
              return (
                s.defined(t) &&
                p.is(t.range) &&
                (s.undefined(t.command) || R.is(t.command))
              );
            });
        })(Re || (Re = {})),
        (function (e) {
          (e.create = function n(r, t) {
            return { tabSize: r, insertSpaces: t };
          }),
            (e.is = function i(r) {
              var t = r;
              return (
                s.defined(t) &&
                s.uinteger(t.tabSize) &&
                s.boolean(t.insertSpaces)
              );
            });
        })(De || (De = {})),
        (function (e) {
          (e.create = function n(r, t, a) {
            return { range: r, target: t, data: a };
          }),
            (e.is = function i(r) {
              var t = r;
              return (
                s.defined(t) &&
                p.is(t.range) &&
                (s.undefined(t.target) || s.string(t.target))
              );
            });
        })(Me || (Me = {})),
        (function (e) {
          (e.create = function n(r, t) {
            return { range: r, parent: t };
          }),
            (e.is = function i(r) {
              var t = r;
              return (
                void 0 !== t &&
                p.is(t.range) &&
                (void 0 === t.parent || e.is(t.parent))
              );
            });
        })(Le || (Le = {})),
        (function (e) {
          function t(a, o) {
            if (a.length <= 1) return a;
            var u = (a.length / 2) | 0,
              g = a.slice(0, u),
              d = a.slice(u);
            t(g, o), t(d, o);
            for (var v = 0, w = 0, E = 0; v < g.length && w < d.length; ) {
              var f = o(g[v], d[w]);
              a[E++] = f <= 0 ? g[v++] : d[w++];
            }
            for (; v < g.length; ) a[E++] = g[v++];
            for (; w < d.length; ) a[E++] = d[w++];
            return a;
          }
          (e.create = function n(a, o, u, g) {
            return new tt(a, o, u, g);
          }),
            (e.is = function i(a) {
              var o = a;
              return !!(
                s.defined(o) &&
                s.string(o.uri) &&
                (s.undefined(o.languageId) || s.string(o.languageId)) &&
                s.uinteger(o.lineCount) &&
                s.func(o.getText) &&
                s.func(o.positionAt) &&
                s.func(o.offsetAt)
              );
            }),
            (e.applyEdits = function r(a, o) {
              for (
                var u = a.getText(),
                  g = t(o, function (P, U) {
                    var Ue = P.range.start.line - U.range.start.line;
                    return 0 === Ue
                      ? P.range.start.character - U.range.start.character
                      : Ue;
                  }),
                  d = u.length,
                  v = g.length - 1;
                v >= 0;
                v--
              ) {
                var w = g[v],
                  E = a.offsetAt(w.range.start),
                  f = a.offsetAt(w.range.end);
                if (!(f <= d)) throw new Error('Overlapping edit');
                (u = u.substring(0, E) + w.newText + u.substring(f, u.length)),
                  (d = E);
              }
              return u;
            });
        })(Se || (Se = {}));
      var s,
        tt = (function () {
          function e(n, i, r, t) {
            (this._uri = n),
              (this._languageId = i),
              (this._version = r),
              (this._content = t),
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
            (e.prototype.getText = function (n) {
              if (n) {
                var i = this.offsetAt(n.start),
                  r = this.offsetAt(n.end);
                return this._content.substring(i, r);
              }
              return this._content;
            }),
            (e.prototype.update = function (n, i) {
              (this._content = n.text),
                (this._version = i),
                (this._lineOffsets = void 0);
            }),
            (e.prototype.getLineOffsets = function () {
              if (void 0 === this._lineOffsets) {
                for (
                  var n = [], i = this._content, r = !0, t = 0;
                  t < i.length;
                  t++
                ) {
                  r && (n.push(t), (r = !1));
                  var a = i.charAt(t);
                  (r = '\r' === a || '\n' === a),
                    '\r' === a &&
                      t + 1 < i.length &&
                      '\n' === i.charAt(t + 1) &&
                      t++;
                }
                r && i.length > 0 && n.push(i.length), (this._lineOffsets = n);
              }
              return this._lineOffsets;
            }),
            (e.prototype.positionAt = function (n) {
              n = Math.max(Math.min(n, this._content.length), 0);
              var i = this.getLineOffsets(),
                r = 0,
                t = i.length;
              if (0 === t) return k.create(0, n);
              for (; r < t; ) {
                var a = Math.floor((r + t) / 2);
                i[a] > n ? (t = a) : (r = a + 1);
              }
              var o = r - 1;
              return k.create(o, n - i[o]);
            }),
            (e.prototype.offsetAt = function (n) {
              var i = this.getLineOffsets();
              if (n.line >= i.length) return this._content.length;
              if (n.line < 0) return 0;
              var r = i[n.line];
              return Math.max(
                Math.min(
                  r + n.character,
                  n.line + 1 < i.length ? i[n.line + 1] : this._content.length
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
        var n = Object.prototype.toString;
        (e.defined = function i(f) {
          return typeof f < 'u';
        }),
          (e.undefined = function r(f) {
            return typeof f > 'u';
          }),
          (e.boolean = function t(f) {
            return !0 === f || !1 === f;
          }),
          (e.string = function a(f) {
            return '[object String]' === n.call(f);
          }),
          (e.number = function o(f) {
            return '[object Number]' === n.call(f);
          }),
          (e.numberRange = function u(f, P, U) {
            return '[object Number]' === n.call(f) && P <= f && f <= U;
          }),
          (e.integer = function g(f) {
            return (
              '[object Number]' === n.call(f) &&
              -2147483648 <= f &&
              f <= 2147483647
            );
          }),
          (e.uinteger = function d(f) {
            return '[object Number]' === n.call(f) && 0 <= f && f <= 2147483647;
          }),
          (e.func = function v(f) {
            return '[object Function]' === n.call(f);
          }),
          (e.objectLiteral = function w(f) {
            return null !== f && 'object' == typeof f;
          }),
          (e.typedArray = function E(f, P) {
            return Array.isArray(f) && f.every(P);
          });
      })(s || (s = {}));
      var rt = class {
        constructor(e, n, i) {
          (this._languageId = e), (this._worker = n);
          const r = (a) => {
              let u,
                o = a.getLanguageId();
              o === this._languageId &&
                ((this._listener[a.uri.toString()] = a.onDidChangeContent(
                  () => {
                    window.clearTimeout(u),
                      (u = window.setTimeout(
                        () => this._doValidate(a.uri, o),
                        500
                      ));
                  }
                )),
                this._doValidate(a.uri, o));
            },
            t = (a) => {
              c.editor.setModelMarkers(a, this._languageId, []);
              let o = a.uri.toString(),
                u = this._listener[o];
              u && (u.dispose(), delete this._listener[o]);
            };
          this._disposables.push(c.editor.onDidCreateModel(r)),
            this._disposables.push(c.editor.onWillDisposeModel(t)),
            this._disposables.push(
              c.editor.onDidChangeModelLanguage((a) => {
                t(a.model), r(a.model);
              })
            ),
            this._disposables.push(
              i((a) => {
                c.editor.getModels().forEach((o) => {
                  o.getLanguageId() === this._languageId && (t(o), r(o));
                });
              })
            ),
            this._disposables.push({
              dispose: () => {
                c.editor.getModels().forEach(t);
                for (let a in this._listener) this._listener[a].dispose();
              },
            }),
            c.editor.getModels().forEach(r);
        }
        _disposables = [];
        _listener = Object.create(null);
        dispose() {
          this._disposables.forEach((e) => e && e.dispose()),
            (this._disposables.length = 0);
        }
        _doValidate(e, n) {
          this._worker(e)
            .then((i) => i.doValidation(e.toString()))
            .then((i) => {
              const r = i.map((a) =>
                (function it(e, n) {
                  let i = 'number' == typeof n.code ? String(n.code) : n.code;
                  return {
                    severity: nt(n.severity),
                    startLineNumber: n.range.start.line + 1,
                    startColumn: n.range.start.character + 1,
                    endLineNumber: n.range.end.line + 1,
                    endColumn: n.range.end.character + 1,
                    message: n.message,
                    code: i,
                    source: n.source,
                  };
                })(0, a)
              );
              let t = c.editor.getModel(e);
              t && t.getLanguageId() === n && c.editor.setModelMarkers(t, n, r);
            })
            .then(void 0, (i) => {
              console.error(i);
            });
        }
      };
      function nt(e) {
        switch (e) {
          case I.Error:
            return c.MarkerSeverity.Error;
          case I.Warning:
            return c.MarkerSeverity.Warning;
          case I.Information:
            return c.MarkerSeverity.Info;
          case I.Hint:
            return c.MarkerSeverity.Hint;
          default:
            return c.MarkerSeverity.Info;
        }
      }
      var Fe = class {
        constructor(e, n) {
          (this._worker = e), (this._triggerCharacters = n);
        }
        get triggerCharacters() {
          return this._triggerCharacters;
        }
        provideCompletionItems(e, n, i, r) {
          const t = e.uri;
          return this._worker(t)
            .then((a) => a.doComplete(t.toString(), C(n)))
            .then((a) => {
              if (!a) return;
              const o = e.getWordUntilPosition(n),
                u = new c.Range(
                  n.lineNumber,
                  o.startColumn,
                  n.lineNumber,
                  o.endColumn
                ),
                g = a.items.map((d) => {
                  const v = {
                    label: d.label,
                    insertText: d.insertText || d.label,
                    sortText: d.sortText,
                    filterText: d.filterText,
                    documentation: d.documentation,
                    detail: d.detail,
                    command: st(d.command),
                    range: u,
                    kind: ot(d.kind),
                  };
                  return (
                    d.textEdit &&
                      ((v.range = (function at(e) {
                        return typeof e.insert < 'u' && typeof e.replace < 'u';
                      })(d.textEdit)
                        ? {
                            insert: _(d.textEdit.insert),
                            replace: _(d.textEdit.replace),
                          }
                        : _(d.textEdit.range)),
                      (v.insertText = d.textEdit.newText)),
                    d.additionalTextEdits &&
                      (v.additionalTextEdits = d.additionalTextEdits.map(y)),
                    d.insertTextFormat === me.Snippet &&
                      (v.insertTextRules =
                        c.languages.CompletionItemInsertTextRule.InsertAsSnippet),
                    v
                  );
                });
              return { isIncomplete: a.isIncomplete, suggestions: g };
            });
        }
      };
      function C(e) {
        if (e) return { character: e.column - 1, line: e.lineNumber - 1 };
      }
      function Y(e) {
        if (e)
          return {
            start: {
              line: e.startLineNumber - 1,
              character: e.startColumn - 1,
            },
            end: { line: e.endLineNumber - 1, character: e.endColumn - 1 },
          };
      }
      function _(e) {
        if (e)
          return new c.Range(
            e.start.line + 1,
            e.start.character + 1,
            e.end.line + 1,
            e.end.character + 1
          );
      }
      function ot(e) {
        const n = c.languages.CompletionItemKind;
        switch (e) {
          case l.Text:
            return n.Text;
          case l.Method:
            return n.Method;
          case l.Function:
            return n.Function;
          case l.Constructor:
            return n.Constructor;
          case l.Field:
            return n.Field;
          case l.Variable:
            return n.Variable;
          case l.Class:
            return n.Class;
          case l.Interface:
            return n.Interface;
          case l.Module:
            return n.Module;
          case l.Property:
            return n.Property;
          case l.Unit:
            return n.Unit;
          case l.Value:
            return n.Value;
          case l.Enum:
            return n.Enum;
          case l.Keyword:
            return n.Keyword;
          case l.Snippet:
            return n.Snippet;
          case l.Color:
            return n.Color;
          case l.File:
            return n.File;
          case l.Reference:
            return n.Reference;
        }
        return n.Property;
      }
      function y(e) {
        if (e) return { range: _(e.range), text: e.newText };
      }
      function st(e) {
        return e && 'editor.action.triggerSuggest' === e.command
          ? { id: e.command, title: e.title, arguments: e.arguments }
          : void 0;
      }
      var Z = class {
        constructor(e) {
          this._worker = e;
        }
        provideHover(e, n, i) {
          let r = e.uri;
          return this._worker(r)
            .then((t) => t.doHover(r.toString(), C(n)))
            .then((t) => {
              if (t) return { range: _(t.range), contents: ct(t.contents) };
            });
        }
      };
      function Te(e) {
        return 'string' == typeof e
          ? { value: e }
          : (function ut(e) {
              return e && 'object' == typeof e && 'string' == typeof e.kind;
            })(e)
          ? 'plaintext' === e.kind
            ? { value: e.value.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&') }
            : { value: e.value }
          : { value: '```' + e.language + '\n' + e.value + '\n```\n' };
      }
      function ct(e) {
        if (e) return Array.isArray(e) ? e.map(Te) : [Te(e)];
      }
      var q = class {
        constructor(e) {
          this._worker = e;
        }
        provideDocumentHighlights(e, n, i) {
          const r = e.uri;
          return this._worker(r)
            .then((t) => t.findDocumentHighlights(r.toString(), C(n)))
            .then((t) => {
              if (t)
                return t.map((a) => ({ range: _(a.range), kind: dt(a.kind) }));
            });
        }
      };
      function dt(e) {
        switch (e) {
          case O.Read:
            return c.languages.DocumentHighlightKind.Read;
          case O.Write:
            return c.languages.DocumentHighlightKind.Write;
          case O.Text:
            return c.languages.DocumentHighlightKind.Text;
        }
        return c.languages.DocumentHighlightKind.Text;
      }
      var ft = class {
        constructor(e) {
          this._worker = e;
        }
        provideDefinition(e, n, i) {
          const r = e.uri;
          return this._worker(r)
            .then((t) => t.findDefinition(r.toString(), C(n)))
            .then((t) => {
              if (t) return [je(t)];
            });
        }
      };
      function je(e) {
        return { uri: c.Uri.parse(e.uri), range: _(e.range) };
      }
      var gt = class {
          constructor(e) {
            this._worker = e;
          }
          provideReferences(e, n, i, r) {
            const t = e.uri;
            return this._worker(t)
              .then((a) => a.findReferences(t.toString(), C(n)))
              .then((a) => {
                if (a) return a.map(je);
              });
          }
        },
        K = class {
          constructor(e) {
            this._worker = e;
          }
          provideRenameEdits(e, n, i, r) {
            const t = e.uri;
            return this._worker(t)
              .then((a) => a.doRename(t.toString(), C(n), i))
              .then((a) =>
                (function lt(e) {
                  if (!e || !e.changes) return;
                  let n = [];
                  for (let i in e.changes) {
                    const r = c.Uri.parse(i);
                    for (let t of e.changes[i])
                      n.push({
                        resource: r,
                        versionId: void 0,
                        textEdit: { range: _(t.range), text: t.newText },
                      });
                  }
                  return { edits: n };
                })(a)
              );
          }
        },
        ee = class {
          constructor(e) {
            this._worker = e;
          }
          provideDocumentSymbols(e, n) {
            const i = e.uri;
            return this._worker(i)
              .then((r) => r.findDocumentSymbols(i.toString()))
              .then((r) => {
                if (r)
                  return r.map((t) => ({
                    name: t.name,
                    detail: '',
                    containerName: t.containerName,
                    kind: ht(t.kind),
                    range: _(t.location.range),
                    selectionRange: _(t.location.range),
                    tags: [],
                  }));
              });
          }
        };
      function ht(e) {
        let n = c.languages.SymbolKind;
        switch (e) {
          case h.File:
            return n.Array;
          case h.Module:
            return n.Module;
          case h.Namespace:
            return n.Namespace;
          case h.Package:
            return n.Package;
          case h.Class:
            return n.Class;
          case h.Method:
            return n.Method;
          case h.Property:
            return n.Property;
          case h.Field:
            return n.Field;
          case h.Constructor:
            return n.Constructor;
          case h.Enum:
            return n.Enum;
          case h.Interface:
            return n.Interface;
          case h.Function:
            return n.Function;
          case h.Variable:
            return n.Variable;
          case h.Constant:
            return n.Constant;
          case h.String:
            return n.String;
          case h.Number:
            return n.Number;
          case h.Boolean:
            return n.Boolean;
          case h.Array:
            return n.Array;
        }
        return n.Function;
      }
      var te = class {
          constructor(e) {
            this._worker = e;
          }
          provideLinks(e, n) {
            const i = e.uri;
            return this._worker(i)
              .then((r) => r.findDocumentLinks(i.toString()))
              .then((r) => {
                if (r)
                  return {
                    links: r.map((t) => ({ range: _(t.range), url: t.target })),
                  };
              });
          }
        },
        re = class {
          constructor(e) {
            this._worker = e;
          }
          provideDocumentFormattingEdits(e, n, i) {
            const r = e.uri;
            return this._worker(r).then((t) =>
              t.format(r.toString(), null, Ne(n)).then((a) => {
                if (a && 0 !== a.length) return a.map(y);
              })
            );
          }
        },
        ne = class {
          constructor(e) {
            this._worker = e;
          }
          provideDocumentRangeFormattingEdits(e, n, i, r) {
            const t = e.uri;
            return this._worker(t).then((a) =>
              a.format(t.toString(), Y(n), Ne(i)).then((o) => {
                if (o && 0 !== o.length) return o.map(y);
              })
            );
          }
        };
      function Ne(e) {
        return { tabSize: e.tabSize, insertSpaces: e.insertSpaces };
      }
      var vt = class {
          constructor(e) {
            this._worker = e;
          }
          provideDocumentColors(e, n) {
            const i = e.uri;
            return this._worker(i)
              .then((r) => r.findDocumentColors(i.toString()))
              .then((r) => {
                if (r)
                  return r.map((t) => ({ color: t.color, range: _(t.range) }));
              });
          }
          provideColorPresentations(e, n, i) {
            const r = e.uri;
            return this._worker(r)
              .then((t) =>
                t.getColorPresentations(r.toString(), n.color, Y(n.range))
              )
              .then((t) => {
                if (t)
                  return t.map((a) => {
                    let o = { label: a.label };
                    return (
                      a.textEdit && (o.textEdit = y(a.textEdit)),
                      a.additionalTextEdits &&
                        (o.additionalTextEdits = a.additionalTextEdits.map(y)),
                      o
                    );
                  });
              });
          }
        },
        ie = class {
          constructor(e) {
            this._worker = e;
          }
          provideFoldingRanges(e, n, i) {
            const r = e.uri;
            return this._worker(r)
              .then((t) => t.getFoldingRanges(r.toString(), n))
              .then((t) => {
                if (t)
                  return t.map((a) => {
                    const o = { start: a.startLine + 1, end: a.endLine + 1 };
                    return (
                      typeof a.kind < 'u' &&
                        (o.kind = (function pt(e) {
                          switch (e) {
                            case S.Comment:
                              return c.languages.FoldingRangeKind.Comment;
                            case S.Imports:
                              return c.languages.FoldingRangeKind.Imports;
                            case S.Region:
                              return c.languages.FoldingRangeKind.Region;
                          }
                        })(a.kind)),
                      o
                    );
                  });
              });
          }
        },
        ae = class {
          constructor(e) {
            this._worker = e;
          }
          provideSelectionRanges(e, n, i) {
            const r = e.uri;
            return this._worker(r)
              .then((t) => t.getSelectionRanges(r.toString(), n.map(C)))
              .then((t) => {
                if (t)
                  return t.map((a) => {
                    const o = [];
                    for (; a; ) o.push({ range: _(a.range) }), (a = a.parent);
                    return o;
                  });
              });
          }
        },
        We = class extends Fe {
          constructor(e) {
            super(e, ['.', ':', '<', '"', '=', '/']);
          }
        };
      function mt(e) {
        const n = new z(e),
          i = (...t) => n.getLanguageServiceWorker(...t);
        let r = e.languageId;
        c.languages.registerCompletionItemProvider(r, new We(i)),
          c.languages.registerHoverProvider(r, new Z(i)),
          c.languages.registerDocumentHighlightProvider(r, new q(i)),
          c.languages.registerLinkProvider(r, new te(i)),
          c.languages.registerFoldingRangeProvider(r, new ie(i)),
          c.languages.registerDocumentSymbolProvider(r, new ee(i)),
          c.languages.registerSelectionRangeProvider(r, new ae(i)),
          c.languages.registerRenameProvider(r, new K(i)),
          'html' === r &&
            (c.languages.registerDocumentFormattingEditProvider(r, new re(i)),
            c.languages.registerDocumentRangeFormattingEditProvider(
              r,
              new ne(i)
            ));
      }
      function _t(e) {
        const n = [],
          i = [],
          r = new z(e);
        n.push(r);
        const t = (...o) => r.getLanguageServiceWorker(...o);
        return (
          (function a() {
            const { languageId: o, modeConfiguration: u } = e;
            Oe(i),
              u.completionItems &&
                i.push(
                  c.languages.registerCompletionItemProvider(o, new We(t))
                ),
              u.hovers &&
                i.push(c.languages.registerHoverProvider(o, new Z(t))),
              u.documentHighlights &&
                i.push(
                  c.languages.registerDocumentHighlightProvider(o, new q(t))
                ),
              u.links && i.push(c.languages.registerLinkProvider(o, new te(t))),
              u.documentSymbols &&
                i.push(
                  c.languages.registerDocumentSymbolProvider(o, new ee(t))
                ),
              u.rename &&
                i.push(c.languages.registerRenameProvider(o, new K(t))),
              u.foldingRanges &&
                i.push(c.languages.registerFoldingRangeProvider(o, new ie(t))),
              u.selectionRanges &&
                i.push(
                  c.languages.registerSelectionRangeProvider(o, new ae(t))
                ),
              u.documentFormattingEdits &&
                i.push(
                  c.languages.registerDocumentFormattingEditProvider(
                    o,
                    new re(t)
                  )
                ),
              u.documentRangeFormattingEdits &&
                i.push(
                  c.languages.registerDocumentRangeFormattingEditProvider(
                    o,
                    new ne(t)
                  )
                );
          })(),
          n.push(He(i)),
          He(n)
        );
      }
      function He(e) {
        return { dispose: () => Oe(e) };
      }
      function Oe(e) {
        for (; e.length; ) e.pop().dispose();
      }
    },
  },
]);
