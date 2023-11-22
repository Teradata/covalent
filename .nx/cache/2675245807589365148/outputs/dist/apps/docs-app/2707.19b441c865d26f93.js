'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [2707],
  {
    22707: (ae, L, x) => {
      x.r(L),
        x.d(L, {
          Adapter: () => v,
          CodeActionAdaptor: () => $,
          DefinitionAdapter: () => V,
          DiagnosticsAdapter: () => E,
          FormatAdapter: () => B,
          FormatHelper: () => k,
          FormatOnTypeAdapter: () => U,
          InlayHintsAdapter: () => G,
          Kind: () => l,
          LibFiles: () => K,
          OccurrencesAdapter: () => W,
          OutlineAdapter: () => j,
          QuickInfoAdapter: () => H,
          ReferenceAdapter: () => Z,
          RenameAdapter: () => z,
          SignatureHelpAdapter: () => T,
          SuggestAdapter: () => C,
          WorkerManager: () => N,
          flattenDiagnosticMessageText: () => D,
          getJavaScriptWorker: () => ne,
          getTypeScriptWorker: () => oe,
          setupJavaScript: () => ie,
          setupTypeScript: () => se,
        });
      var h = x(15861),
        Q = x(53619),
        X = x(70786),
        I = Object.defineProperty,
        Y = Object.getOwnPropertyDescriptor,
        q = Object.getOwnPropertyNames,
        ee = Object.prototype.hasOwnProperty,
        M = (e, t, n, r) => {
          if ((t && 'object' == typeof t) || 'function' == typeof t)
            for (let i of q(t))
              !ee.call(e, i) &&
                i !== n &&
                I(e, i, {
                  get: () => t[i],
                  enumerable: !(r = Y(t, i)) || r.enumerable,
                });
          return e;
        },
        b = (e, t, n) => (
          ((e, t, n) => {
            t in e
              ? I(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (e[t] = n);
          })(e, 'symbol' != typeof t ? t + '' : t, n),
          n
        ),
        s = {};
      M(s, Q, 'default');
      var N = class {
          constructor(e, t) {
            (this._modeId = e),
              (this._defaults = t),
              (this._worker = null),
              (this._client = null),
              (this._configChangeListener = this._defaults.onDidChange(() =>
                this._stopWorker()
              )),
              (this._updateExtraLibsToken = 0),
              (this._extraLibsChangeListener =
                this._defaults.onDidExtraLibsChange(() =>
                  this._updateExtraLibs()
                ));
          }
          _configChangeListener;
          _updateExtraLibsToken;
          _extraLibsChangeListener;
          _worker;
          _client;
          dispose() {
            this._configChangeListener.dispose(),
              this._extraLibsChangeListener.dispose(),
              this._stopWorker();
          }
          _stopWorker() {
            this._worker && (this._worker.dispose(), (this._worker = null)),
              (this._client = null);
          }
          _updateExtraLibs() {
            var e = this;
            return (0, h.Z)(function* () {
              if (!e._worker) return;
              const t = ++e._updateExtraLibsToken,
                n = yield e._worker.getProxy();
              e._updateExtraLibsToken === t &&
                n.updateExtraLibs(e._defaults.getExtraLibs());
            })();
          }
          _getClient() {
            var e = this;
            return (
              this._client ||
                (this._client = (0, h.Z)(function* () {
                  return (
                    (e._worker = s.editor.createWebWorker({
                      moduleId: 'vs/language/typescript/tsWorker',
                      label: e._modeId,
                      keepIdleModels: !0,
                      createData: {
                        compilerOptions: e._defaults.getCompilerOptions(),
                        extraLibs: e._defaults.getExtraLibs(),
                        customWorkerPath:
                          e._defaults.workerOptions.customWorkerPath,
                        inlayHintsOptions: e._defaults.inlayHintsOptions,
                      },
                    })),
                    e._defaults.getEagerModelSync()
                      ? yield e._worker.withSyncedResources(
                          s.editor
                            .getModels()
                            .filter((t) => t.getLanguageId() === e._modeId)
                            .map((t) => t.uri)
                        )
                      : yield e._worker.getProxy()
                  );
                })()),
              this._client
            );
          }
          getLanguageServiceWorker(...e) {
            var t = this;
            return (0, h.Z)(function* () {
              const n = yield t._getClient();
              return t._worker && (yield t._worker.withSyncedResources(e)), n;
            })();
          }
        },
        a = {};
      function D(e, t, n = 0) {
        if ('string' == typeof e) return e;
        if (void 0 === e) return '';
        let r = '';
        if (n) {
          r += t;
          for (let i = 0; i < n; i++) r += '  ';
        }
        if (((r += e.messageText), n++, e.next))
          for (const i of e.next) r += D(i, t, n);
        return r;
      }
      function S(e) {
        return e ? e.map((t) => t.text).join('') : '';
      }
      (a['lib.d.ts'] = !0),
        (a['lib.dom.d.ts'] = !0),
        (a['lib.dom.iterable.d.ts'] = !0),
        (a['lib.es2015.collection.d.ts'] = !0),
        (a['lib.es2015.core.d.ts'] = !0),
        (a['lib.es2015.d.ts'] = !0),
        (a['lib.es2015.generator.d.ts'] = !0),
        (a['lib.es2015.iterable.d.ts'] = !0),
        (a['lib.es2015.promise.d.ts'] = !0),
        (a['lib.es2015.proxy.d.ts'] = !0),
        (a['lib.es2015.reflect.d.ts'] = !0),
        (a['lib.es2015.symbol.d.ts'] = !0),
        (a['lib.es2015.symbol.wellknown.d.ts'] = !0),
        (a['lib.es2016.array.include.d.ts'] = !0),
        (a['lib.es2016.d.ts'] = !0),
        (a['lib.es2016.full.d.ts'] = !0),
        (a['lib.es2017.d.ts'] = !0),
        (a['lib.es2017.full.d.ts'] = !0),
        (a['lib.es2017.intl.d.ts'] = !0),
        (a['lib.es2017.object.d.ts'] = !0),
        (a['lib.es2017.sharedmemory.d.ts'] = !0),
        (a['lib.es2017.string.d.ts'] = !0),
        (a['lib.es2017.typedarrays.d.ts'] = !0),
        (a['lib.es2018.asyncgenerator.d.ts'] = !0),
        (a['lib.es2018.asynciterable.d.ts'] = !0),
        (a['lib.es2018.d.ts'] = !0),
        (a['lib.es2018.full.d.ts'] = !0),
        (a['lib.es2018.intl.d.ts'] = !0),
        (a['lib.es2018.promise.d.ts'] = !0),
        (a['lib.es2018.regexp.d.ts'] = !0),
        (a['lib.es2019.array.d.ts'] = !0),
        (a['lib.es2019.d.ts'] = !0),
        (a['lib.es2019.full.d.ts'] = !0),
        (a['lib.es2019.object.d.ts'] = !0),
        (a['lib.es2019.string.d.ts'] = !0),
        (a['lib.es2019.symbol.d.ts'] = !0),
        (a['lib.es2020.bigint.d.ts'] = !0),
        (a['lib.es2020.d.ts'] = !0),
        (a['lib.es2020.full.d.ts'] = !0),
        (a['lib.es2020.intl.d.ts'] = !0),
        (a['lib.es2020.promise.d.ts'] = !0),
        (a['lib.es2020.sharedmemory.d.ts'] = !0),
        (a['lib.es2020.string.d.ts'] = !0),
        (a['lib.es2020.symbol.wellknown.d.ts'] = !0),
        (a['lib.es2021.d.ts'] = !0),
        (a['lib.es2021.full.d.ts'] = !0),
        (a['lib.es2021.intl.d.ts'] = !0),
        (a['lib.es2021.promise.d.ts'] = !0),
        (a['lib.es2021.string.d.ts'] = !0),
        (a['lib.es2021.weakref.d.ts'] = !0),
        (a['lib.es5.d.ts'] = !0),
        (a['lib.es6.d.ts'] = !0),
        (a['lib.esnext.d.ts'] = !0),
        (a['lib.esnext.full.d.ts'] = !0),
        (a['lib.esnext.intl.d.ts'] = !0),
        (a['lib.esnext.promise.d.ts'] = !0),
        (a['lib.esnext.string.d.ts'] = !0),
        (a['lib.esnext.weakref.d.ts'] = !0),
        (a['lib.scripthost.d.ts'] = !0),
        (a['lib.webworker.d.ts'] = !0),
        (a['lib.webworker.importscripts.d.ts'] = !0),
        (a['lib.webworker.iterable.d.ts'] = !0);
      var v = class {
          constructor(e) {
            this._worker = e;
          }
          _textSpanToRange(e, t) {
            let n = e.getPositionAt(t.start),
              r = e.getPositionAt(t.start + t.length),
              { lineNumber: i, column: u } = n,
              { lineNumber: p, column: o } = r;
            return {
              startLineNumber: i,
              startColumn: u,
              endLineNumber: p,
              endColumn: o,
            };
          }
        },
        K = class {
          constructor(e) {
            (this._worker = e),
              (this._libFiles = {}),
              (this._hasFetchedLibFiles = !1),
              (this._fetchLibFilesPromise = null);
          }
          _libFiles;
          _hasFetchedLibFiles;
          _fetchLibFilesPromise;
          isLibFile(e) {
            return !(
              !e ||
              0 !== e.path.indexOf('/lib.') ||
              !a[e.path.slice(1)]
            );
          }
          getOrCreateModel(e) {
            const t = s.Uri.parse(e),
              n = s.editor.getModel(t);
            if (n) return n;
            if (this.isLibFile(t) && this._hasFetchedLibFiles)
              return s.editor.createModel(
                this._libFiles[t.path.slice(1)],
                'typescript',
                t
              );
            const r = X.TG.getExtraLibs()[e];
            return r ? s.editor.createModel(r.content, 'typescript', t) : null;
          }
          _containsLibFile(e) {
            for (let t of e) if (this.isLibFile(t)) return !0;
            return !1;
          }
          fetchLibFilesIfNecessary(e) {
            var t = this;
            return (0, h.Z)(function* () {
              t._containsLibFile(e) && (yield t._fetchLibFiles());
            })();
          }
          _fetchLibFiles() {
            return (
              this._fetchLibFilesPromise ||
                (this._fetchLibFilesPromise = this._worker()
                  .then((e) => e.getLibFiles())
                  .then((e) => {
                    (this._hasFetchedLibFiles = !0), (this._libFiles = e);
                  })),
              this._fetchLibFilesPromise
            );
          }
        },
        E = class extends v {
          constructor(e, t, n, r) {
            super(r),
              (this._libFiles = e),
              (this._defaults = t),
              (this._selector = n);
            const i = (o) => {
                if (o.getLanguageId() !== n) return;
                const c = () => {
                  const { onlyVisible: m } =
                    this._defaults.getDiagnosticsOptions();
                  m
                    ? o.isAttachedToEditor() && this._doValidate(o)
                    : this._doValidate(o);
                };
                let g;
                const d = o.onDidChangeContent(() => {
                    clearTimeout(g), (g = window.setTimeout(c, 500));
                  }),
                  f = o.onDidChangeAttached(() => {
                    const { onlyVisible: m } =
                      this._defaults.getDiagnosticsOptions();
                    m &&
                      (o.isAttachedToEditor()
                        ? c()
                        : s.editor.setModelMarkers(o, this._selector, []));
                  });
                (this._listener[o.uri.toString()] = {
                  dispose() {
                    d.dispose(), f.dispose(), clearTimeout(g);
                  },
                }),
                  c();
              },
              u = (o) => {
                s.editor.setModelMarkers(o, this._selector, []);
                const c = o.uri.toString();
                this._listener[c] &&
                  (this._listener[c].dispose(), delete this._listener[c]);
              };
            this._disposables.push(s.editor.onDidCreateModel((o) => i(o))),
              this._disposables.push(s.editor.onWillDisposeModel(u)),
              this._disposables.push(
                s.editor.onDidChangeModelLanguage((o) => {
                  u(o.model), i(o.model);
                })
              ),
              this._disposables.push({
                dispose() {
                  for (const o of s.editor.getModels()) u(o);
                },
              });
            const p = () => {
              for (const o of s.editor.getModels()) u(o), i(o);
            };
            this._disposables.push(this._defaults.onDidChange(p)),
              this._disposables.push(this._defaults.onDidExtraLibsChange(p)),
              s.editor.getModels().forEach((o) => i(o));
          }
          _disposables = [];
          _listener = Object.create(null);
          dispose() {
            this._disposables.forEach((e) => e && e.dispose()),
              (this._disposables = []);
          }
          _doValidate(e) {
            var t = this;
            return (0, h.Z)(function* () {
              const n = yield t._worker(e.uri);
              if (e.isDisposed()) return;
              const r = [],
                {
                  noSyntaxValidation: i,
                  noSemanticValidation: u,
                  noSuggestionDiagnostics: p,
                } = t._defaults.getDiagnosticsOptions();
              i || r.push(n.getSyntacticDiagnostics(e.uri.toString())),
                u || r.push(n.getSemanticDiagnostics(e.uri.toString())),
                p || r.push(n.getSuggestionDiagnostics(e.uri.toString()));
              const o = yield Promise.all(r);
              if (!o || e.isDisposed()) return;
              const c = o
                  .reduce((d, f) => f.concat(d), [])
                  .filter(
                    (d) =>
                      -1 ===
                      (
                        t._defaults.getDiagnosticsOptions()
                          .diagnosticCodesToIgnore || []
                      ).indexOf(d.code)
                  ),
                g = c
                  .map((d) => d.relatedInformation || [])
                  .reduce((d, f) => f.concat(d), [])
                  .map((d) => (d.file ? s.Uri.parse(d.file.fileName) : null));
              yield t._libFiles.fetchLibFilesIfNecessary(g),
                !e.isDisposed() &&
                  s.editor.setModelMarkers(
                    e,
                    t._selector,
                    c.map((d) => t._convertDiagnostics(e, d))
                  );
            })();
          }
          _convertDiagnostics(e, t) {
            const n = t.start || 0,
              r = t.length || 1,
              { lineNumber: i, column: u } = e.getPositionAt(n),
              { lineNumber: p, column: o } = e.getPositionAt(n + r),
              c = [];
            return (
              t.reportsUnnecessary && c.push(s.MarkerTag.Unnecessary),
              t.reportsDeprecated && c.push(s.MarkerTag.Deprecated),
              {
                severity: this._tsDiagnosticCategoryToMarkerSeverity(
                  t.category
                ),
                startLineNumber: i,
                startColumn: u,
                endLineNumber: p,
                endColumn: o,
                message: D(t.messageText, '\n'),
                code: t.code.toString(),
                tags: c,
                relatedInformation: this._convertRelatedInformation(
                  e,
                  t.relatedInformation
                ),
              }
            );
          }
          _convertRelatedInformation(e, t) {
            if (!t) return [];
            const n = [];
            return (
              t.forEach((r) => {
                let i = e;
                if (
                  (r.file &&
                    (i = this._libFiles.getOrCreateModel(r.file.fileName)),
                  !i)
                )
                  return;
                const u = r.start || 0,
                  p = r.length || 1,
                  { lineNumber: o, column: c } = i.getPositionAt(u),
                  { lineNumber: g, column: d } = i.getPositionAt(u + p);
                n.push({
                  resource: i.uri,
                  startLineNumber: o,
                  startColumn: c,
                  endLineNumber: g,
                  endColumn: d,
                  message: D(r.messageText, '\n'),
                });
              }),
              n
            );
          }
          _tsDiagnosticCategoryToMarkerSeverity(e) {
            switch (e) {
              case 1:
                return s.MarkerSeverity.Error;
              case 3:
                return s.MarkerSeverity.Info;
              case 0:
                return s.MarkerSeverity.Warning;
              case 2:
                return s.MarkerSeverity.Hint;
            }
            return s.MarkerSeverity.Info;
          }
        },
        C = class extends v {
          get triggerCharacters() {
            return ['.'];
          }
          provideCompletionItems(e, t, n, r) {
            var i = this;
            return (0, h.Z)(function* () {
              const u = e.getWordUntilPosition(t),
                p = new s.Range(
                  t.lineNumber,
                  u.startColumn,
                  t.lineNumber,
                  u.endColumn
                ),
                o = e.uri,
                c = e.getOffsetAt(t),
                g = yield i._worker(o);
              if (e.isDisposed()) return;
              const d = yield g.getCompletionsAtPosition(o.toString(), c);
              return !d || e.isDisposed()
                ? void 0
                : {
                    suggestions: d.entries.map((m) => {
                      let _ = p;
                      if (m.replacementSpan) {
                        const A = e.getPositionAt(m.replacementSpan.start),
                          F = e.getPositionAt(
                            m.replacementSpan.start + m.replacementSpan.length
                          );
                        _ = new s.Range(
                          A.lineNumber,
                          A.column,
                          F.lineNumber,
                          F.column
                        );
                      }
                      const w = [];
                      return (
                        -1 !== m.kindModifiers?.indexOf('deprecated') &&
                          w.push(s.languages.CompletionItemTag.Deprecated),
                        {
                          uri: o,
                          position: t,
                          offset: c,
                          range: _,
                          label: m.name,
                          insertText: m.name,
                          sortText: m.sortText,
                          kind: C.convertKind(m.kind),
                          tags: w,
                        }
                      );
                    }),
                  };
            })();
          }
          resolveCompletionItem(e, t) {
            var n = this;
            return (0, h.Z)(function* () {
              const r = e,
                i = r.uri,
                u = r.position,
                p = r.offset,
                c = yield (yield n._worker(i)).getCompletionEntryDetails(
                  i.toString(),
                  p,
                  r.label
                );
              return c
                ? {
                    uri: i,
                    position: u,
                    label: c.name,
                    kind: C.convertKind(c.kind),
                    detail: S(c.displayParts),
                    documentation: { value: C.createDocumentationString(c) },
                  }
                : r;
            })();
          }
          static convertKind(e) {
            switch (e) {
              case l.primitiveType:
              case l.keyword:
                return s.languages.CompletionItemKind.Keyword;
              case l.variable:
              case l.localVariable:
                return s.languages.CompletionItemKind.Variable;
              case l.memberVariable:
              case l.memberGetAccessor:
              case l.memberSetAccessor:
                return s.languages.CompletionItemKind.Field;
              case l.function:
              case l.memberFunction:
              case l.constructSignature:
              case l.callSignature:
              case l.indexSignature:
                return s.languages.CompletionItemKind.Function;
              case l.enum:
                return s.languages.CompletionItemKind.Enum;
              case l.module:
                return s.languages.CompletionItemKind.Module;
              case l.class:
                return s.languages.CompletionItemKind.Class;
              case l.interface:
                return s.languages.CompletionItemKind.Interface;
              case l.warning:
                return s.languages.CompletionItemKind.File;
            }
            return s.languages.CompletionItemKind.Property;
          }
          static createDocumentationString(e) {
            let t = S(e.documentation);
            if (e.tags) for (const n of e.tags) t += `\n\n${R(n)}`;
            return t;
          }
        };
      function R(e) {
        let t = `*@${e.name}*`;
        if ('param' === e.name && e.text) {
          const [n, ...r] = e.text;
          (t += `\`${n.text}\``),
            r.length > 0 && (t += ` \u2014 ${r.map((i) => i.text).join(' ')}`);
        } else
          Array.isArray(e.text)
            ? (t += ` \u2014 ${e.text.map((n) => n.text).join(' ')}`)
            : e.text && (t += ` \u2014 ${e.text}`);
        return t;
      }
      var T = class extends v {
          signatureHelpTriggerCharacters = ['(', ','];
          static _toSignatureHelpTriggerReason(e) {
            switch (e.triggerKind) {
              case s.languages.SignatureHelpTriggerKind.TriggerCharacter:
                return e.triggerCharacter
                  ? e.isRetrigger
                    ? {
                        kind: 'retrigger',
                        triggerCharacter: e.triggerCharacter,
                      }
                    : {
                        kind: 'characterTyped',
                        triggerCharacter: e.triggerCharacter,
                      }
                  : { kind: 'invoked' };
              case s.languages.SignatureHelpTriggerKind.ContentChange:
                return e.isRetrigger
                  ? { kind: 'retrigger' }
                  : { kind: 'invoked' };
              default:
                return { kind: 'invoked' };
            }
          }
          provideSignatureHelp(e, t, n, r) {
            var i = this;
            return (0, h.Z)(function* () {
              const u = e.uri,
                p = e.getOffsetAt(t),
                o = yield i._worker(u);
              if (e.isDisposed()) return;
              const c = yield o.getSignatureHelpItems(u.toString(), p, {
                triggerReason: T._toSignatureHelpTriggerReason(r),
              });
              if (!c || e.isDisposed()) return;
              const g = {
                activeSignature: c.selectedItemIndex,
                activeParameter: c.argumentIndex,
                signatures: [],
              };
              return (
                c.items.forEach((d) => {
                  const f = { label: '', parameters: [] };
                  (f.documentation = { value: S(d.documentation) }),
                    (f.label += S(d.prefixDisplayParts)),
                    d.parameters.forEach((m, _, w) => {
                      const A = S(m.displayParts),
                        F = {
                          label: A,
                          documentation: { value: S(m.documentation) },
                        };
                      (f.label += A),
                        f.parameters.push(F),
                        _ < w.length - 1 &&
                          (f.label += S(d.separatorDisplayParts));
                    }),
                    (f.label += S(d.suffixDisplayParts)),
                    g.signatures.push(f);
                }),
                { value: g, dispose() {} }
              );
            })();
          }
        },
        H = class extends v {
          provideHover(e, t, n) {
            var r = this;
            return (0, h.Z)(function* () {
              const i = e.uri,
                u = e.getOffsetAt(t),
                p = yield r._worker(i);
              if (e.isDisposed()) return;
              const o = yield p.getQuickInfoAtPosition(i.toString(), u);
              if (!o || e.isDisposed()) return;
              const c = S(o.documentation),
                g = o.tags ? o.tags.map((f) => R(f)).join('  \n\n') : '',
                d = S(o.displayParts);
              return {
                range: r._textSpanToRange(e, o.textSpan),
                contents: [
                  { value: '```typescript\n' + d + '\n```\n' },
                  { value: c + (g ? '\n\n' + g : '') },
                ],
              };
            })();
          }
        },
        W = class extends v {
          provideDocumentHighlights(e, t, n) {
            var r = this;
            return (0, h.Z)(function* () {
              const i = e.uri,
                u = e.getOffsetAt(t),
                p = yield r._worker(i);
              if (e.isDisposed()) return;
              const o = yield p.getOccurrencesAtPosition(i.toString(), u);
              return o && !e.isDisposed()
                ? o.map((c) => ({
                    range: r._textSpanToRange(e, c.textSpan),
                    kind: c.isWriteAccess
                      ? s.languages.DocumentHighlightKind.Write
                      : s.languages.DocumentHighlightKind.Text,
                  }))
                : void 0;
            })();
          }
        },
        V = class extends v {
          constructor(e, t) {
            super(t), (this._libFiles = e);
          }
          provideDefinition(e, t, n) {
            var r = this;
            return (0, h.Z)(function* () {
              const i = e.uri,
                u = e.getOffsetAt(t),
                p = yield r._worker(i);
              if (e.isDisposed()) return;
              const o = yield p.getDefinitionAtPosition(i.toString(), u);
              if (
                !o ||
                e.isDisposed() ||
                (yield r._libFiles.fetchLibFilesIfNecessary(
                  o.map((g) => s.Uri.parse(g.fileName))
                ),
                e.isDisposed())
              )
                return;
              const c = [];
              for (let g of o) {
                const d = r._libFiles.getOrCreateModel(g.fileName);
                d &&
                  c.push({
                    uri: d.uri,
                    range: r._textSpanToRange(d, g.textSpan),
                  });
              }
              return c;
            })();
          }
        },
        Z = class extends v {
          constructor(e, t) {
            super(t), (this._libFiles = e);
          }
          provideReferences(e, t, n, r) {
            var i = this;
            return (0, h.Z)(function* () {
              const u = e.uri,
                p = e.getOffsetAt(t),
                o = yield i._worker(u);
              if (e.isDisposed()) return;
              const c = yield o.getReferencesAtPosition(u.toString(), p);
              if (
                !c ||
                e.isDisposed() ||
                (yield i._libFiles.fetchLibFilesIfNecessary(
                  c.map((d) => s.Uri.parse(d.fileName))
                ),
                e.isDisposed())
              )
                return;
              const g = [];
              for (let d of c) {
                const f = i._libFiles.getOrCreateModel(d.fileName);
                f &&
                  g.push({
                    uri: f.uri,
                    range: i._textSpanToRange(f, d.textSpan),
                  });
              }
              return g;
            })();
          }
        },
        j = class extends v {
          provideDocumentSymbols(e, t) {
            var n = this;
            return (0, h.Z)(function* () {
              const r = e.uri,
                i = yield n._worker(r);
              if (e.isDisposed()) return;
              const u = yield i.getNavigationBarItems(r.toString());
              if (!u || e.isDisposed()) return;
              const p = (c, g, d) => {
                let f = {
                  name: g.text,
                  detail: '',
                  kind: y[g.kind] || s.languages.SymbolKind.Variable,
                  range: n._textSpanToRange(e, g.spans[0]),
                  selectionRange: n._textSpanToRange(e, g.spans[0]),
                  tags: [],
                };
                if (
                  (d && (f.containerName = d),
                  g.childItems && g.childItems.length > 0)
                )
                  for (let m of g.childItems) p(c, m, f.name);
                c.push(f);
              };
              let o = [];
              return u.forEach((c) => p(o, c)), o;
            })();
          }
        },
        l = class {};
      b(l, 'unknown', ''),
        b(l, 'keyword', 'keyword'),
        b(l, 'script', 'script'),
        b(l, 'module', 'module'),
        b(l, 'class', 'class'),
        b(l, 'interface', 'interface'),
        b(l, 'type', 'type'),
        b(l, 'enum', 'enum'),
        b(l, 'variable', 'var'),
        b(l, 'localVariable', 'local var'),
        b(l, 'function', 'function'),
        b(l, 'localFunction', 'local function'),
        b(l, 'memberFunction', 'method'),
        b(l, 'memberGetAccessor', 'getter'),
        b(l, 'memberSetAccessor', 'setter'),
        b(l, 'memberVariable', 'property'),
        b(l, 'constructorImplementation', 'constructor'),
        b(l, 'callSignature', 'call'),
        b(l, 'indexSignature', 'index'),
        b(l, 'constructSignature', 'construct'),
        b(l, 'parameter', 'parameter'),
        b(l, 'typeParameter', 'type parameter'),
        b(l, 'primitiveType', 'primitive type'),
        b(l, 'label', 'label'),
        b(l, 'alias', 'alias'),
        b(l, 'const', 'const'),
        b(l, 'let', 'let'),
        b(l, 'warning', 'warning');
      var y = Object.create(null);
      (y[l.module] = s.languages.SymbolKind.Module),
        (y[l.class] = s.languages.SymbolKind.Class),
        (y[l.enum] = s.languages.SymbolKind.Enum),
        (y[l.interface] = s.languages.SymbolKind.Interface),
        (y[l.memberFunction] = s.languages.SymbolKind.Method),
        (y[l.memberVariable] = s.languages.SymbolKind.Property),
        (y[l.memberGetAccessor] = s.languages.SymbolKind.Property),
        (y[l.memberSetAccessor] = s.languages.SymbolKind.Property),
        (y[l.variable] = s.languages.SymbolKind.Variable),
        (y[l.const] = s.languages.SymbolKind.Variable),
        (y[l.localVariable] = s.languages.SymbolKind.Variable),
        (y[l.variable] = s.languages.SymbolKind.Variable),
        (y[l.function] = s.languages.SymbolKind.Function),
        (y[l.localFunction] = s.languages.SymbolKind.Function);
      var O,
        P,
        k = class extends v {
          static _convertOptions(e) {
            return {
              ConvertTabsToSpaces: e.insertSpaces,
              TabSize: e.tabSize,
              IndentSize: e.tabSize,
              IndentStyle: 2,
              NewLineCharacter: '\n',
              InsertSpaceAfterCommaDelimiter: !0,
              InsertSpaceAfterSemicolonInForStatements: !0,
              InsertSpaceBeforeAndAfterBinaryOperators: !0,
              InsertSpaceAfterKeywordsInControlFlowStatements: !0,
              InsertSpaceAfterFunctionKeywordForAnonymousFunctions: !0,
              InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: !1,
              InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets: !1,
              InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces: !1,
              PlaceOpenBraceOnNewLineForControlBlocks: !1,
              PlaceOpenBraceOnNewLineForFunctions: !1,
            };
          }
          _convertTextChanges(e, t) {
            return { text: t.newText, range: this._textSpanToRange(e, t.span) };
          }
        },
        B = class extends k {
          provideDocumentRangeFormattingEdits(e, t, n, r) {
            var i = this;
            return (0, h.Z)(function* () {
              const u = e.uri,
                p = e.getOffsetAt({
                  lineNumber: t.startLineNumber,
                  column: t.startColumn,
                }),
                o = e.getOffsetAt({
                  lineNumber: t.endLineNumber,
                  column: t.endColumn,
                }),
                c = yield i._worker(u);
              if (e.isDisposed()) return;
              const g = yield c.getFormattingEditsForRange(
                u.toString(),
                p,
                o,
                k._convertOptions(n)
              );
              return g && !e.isDisposed()
                ? g.map((d) => i._convertTextChanges(e, d))
                : void 0;
            })();
          }
        },
        U = class extends k {
          get autoFormatTriggerCharacters() {
            return [';', '}', '\n'];
          }
          provideOnTypeFormattingEdits(e, t, n, r, i) {
            var u = this;
            return (0, h.Z)(function* () {
              const p = e.uri,
                o = e.getOffsetAt(t),
                c = yield u._worker(p);
              if (e.isDisposed()) return;
              const g = yield c.getFormattingEditsAfterKeystroke(
                p.toString(),
                o,
                n,
                k._convertOptions(r)
              );
              return g && !e.isDisposed()
                ? g.map((d) => u._convertTextChanges(e, d))
                : void 0;
            })();
          }
        },
        $ = class extends k {
          provideCodeActions(e, t, n, r) {
            var i = this;
            return (0, h.Z)(function* () {
              const u = e.uri,
                p = e.getOffsetAt({
                  lineNumber: t.startLineNumber,
                  column: t.startColumn,
                }),
                o = e.getOffsetAt({
                  lineNumber: t.endLineNumber,
                  column: t.endColumn,
                }),
                c = k._convertOptions(e.getOptions()),
                g = n.markers
                  .filter((_) => _.code)
                  .map((_) => _.code)
                  .map(Number),
                d = yield i._worker(u);
              if (e.isDisposed()) return;
              const f = yield d.getCodeFixesAtPosition(
                u.toString(),
                p,
                o,
                g,
                c
              );
              return !f || e.isDisposed()
                ? { actions: [], dispose: () => {} }
                : {
                    actions: f
                      .filter(
                        (_) => 0 === _.changes.filter((w) => w.isNewFile).length
                      )
                      .map((_) =>
                        i._tsCodeFixActionToMonacoCodeAction(e, n, _)
                      ),
                    dispose: () => {},
                  };
            })();
          }
          _tsCodeFixActionToMonacoCodeAction(e, t, n) {
            const r = [];
            for (const u of n.changes)
              for (const p of u.textChanges)
                r.push({
                  resource: e.uri,
                  versionId: void 0,
                  textEdit: {
                    range: this._textSpanToRange(e, p.span),
                    text: p.newText,
                  },
                });
            return {
              title: n.description,
              edit: { edits: r },
              diagnostics: t.markers,
              kind: 'quickfix',
            };
          }
        },
        z = class extends v {
          constructor(e, t) {
            super(t), (this._libFiles = e);
          }
          provideRenameEdits(e, t, n, r) {
            var i = this;
            return (0, h.Z)(function* () {
              const u = e.uri,
                p = u.toString(),
                o = e.getOffsetAt(t),
                c = yield i._worker(u);
              if (e.isDisposed()) return;
              const g = yield c.getRenameInfo(p, o, {
                allowRenameOfImportPath: !1,
              });
              if (!1 === g.canRename)
                return { edits: [], rejectReason: g.localizedErrorMessage };
              if (void 0 !== g.fileToRename)
                throw new Error('Renaming files is not supported.');
              const d = yield c.findRenameLocations(p, o, !1, !1, !1);
              if (!d || e.isDisposed()) return;
              const f = [];
              for (const m of d) {
                const _ = i._libFiles.getOrCreateModel(m.fileName);
                if (!_) throw new Error(`Unknown file ${m.fileName}.`);
                f.push({
                  resource: _.uri,
                  versionId: void 0,
                  textEdit: {
                    range: i._textSpanToRange(_, m.textSpan),
                    text: n,
                  },
                });
              }
              return { edits: f };
            })();
          }
        },
        G = class extends v {
          provideInlayHints(e, t, n) {
            var r = this;
            return (0, h.Z)(function* () {
              const i = e.uri,
                u = i.toString(),
                p = e.getOffsetAt({
                  lineNumber: t.startLineNumber,
                  column: t.startColumn,
                }),
                o = e.getOffsetAt({
                  lineNumber: t.endLineNumber,
                  column: t.endColumn,
                }),
                c = yield r._worker(i);
              return e.isDisposed()
                ? null
                : {
                    hints: (yield c.provideInlayHints(u, p, o)).map((f) => ({
                      ...f,
                      label: f.text,
                      position: e.getPositionAt(f.position),
                      kind: r._convertHintKind(f.kind),
                    })),
                    dispose: () => {},
                  };
            })();
          }
          _convertHintKind(e) {
            return 'Parameter' === e
              ? s.languages.InlayHintKind.Parameter
              : s.languages.InlayHintKind.Type;
          }
        };
      function se(e) {
        P = J(e, 'typescript');
      }
      function ie(e) {
        O = J(e, 'javascript');
      }
      function ne() {
        return new Promise((e, t) => {
          if (!O) return t('JavaScript not registered!');
          e(O);
        });
      }
      function oe() {
        return new Promise((e, t) => {
          if (!P) return t('TypeScript not registered!');
          e(P);
        });
      }
      function J(e, t) {
        const n = new N(t, e),
          r = (...u) => n.getLanguageServiceWorker(...u),
          i = new K(r);
        return (
          s.languages.registerCompletionItemProvider(t, new C(r)),
          s.languages.registerSignatureHelpProvider(t, new T(r)),
          s.languages.registerHoverProvider(t, new H(r)),
          s.languages.registerDocumentHighlightProvider(t, new W(r)),
          s.languages.registerDefinitionProvider(t, new V(i, r)),
          s.languages.registerReferenceProvider(t, new Z(i, r)),
          s.languages.registerDocumentSymbolProvider(t, new j(r)),
          s.languages.registerDocumentRangeFormattingEditProvider(t, new B(r)),
          s.languages.registerOnTypeFormattingEditProvider(t, new U(r)),
          s.languages.registerCodeActionProvider(t, new $(r)),
          s.languages.registerRenameProvider(t, new z(i, r)),
          s.languages.registerInlayHintsProvider(t, new G(r)),
          new E(i, e, t, r),
          r
        );
      }
    },
  },
]);
