"use strict";(self.webpackChunkdocs_app=self.webpackChunkdocs_app||[]).push([[3700],{33700:(ce,P,w)=>{w.r(P),w.d(P,{Adapter:()=>y,CodeActionAdaptor:()=>z,DefinitionAdapter:()=>j,DiagnosticsAdapter:()=>N,DocumentHighlightAdapter:()=>W,FormatAdapter:()=>U,FormatHelper:()=>k,FormatOnTypeAdapter:()=>$,InlayHintsAdapter:()=>G,Kind:()=>f,LibFiles:()=>M,OutlineAdapter:()=>B,QuickInfoAdapter:()=>H,ReferenceAdapter:()=>V,RenameAdapter:()=>J,SignatureHelpAdapter:()=>E,SuggestAdapter:()=>K,WorkerManager:()=>I,flattenDiagnosticMessageText:()=>x,getJavaScriptWorker:()=>ae,getTypeScriptWorker:()=>le,setupJavaScript:()=>oe,setupTypeScript:()=>ne});var b=w(74523),Z=w(871),q=w(34789),ee=Object.defineProperty,te=Object.getOwnPropertyDescriptor,re=Object.getOwnPropertyNames,se=Object.prototype.hasOwnProperty,L=(e,t,o,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of re(t))!se.call(e,n)&&n!==o&&ee(e,n,{get:()=>t[n],enumerable:!(s=te(t,n))||s.enumerable});return e},i={};L(i,Z,"default");var I=class{constructor(e,t){this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange(()=>this._stopWorker()),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange(()=>this._updateExtraLibs())}dispose(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}_updateExtraLibs(){var e=this;return(0,b.A)(function*(){if(!e._worker)return;const t=++e._updateExtraLibsToken,o=yield e._worker.getProxy();e._updateExtraLibsToken===t&&o.updateExtraLibs(e._defaults.getExtraLibs())})()}_getClient(){var e=this;return this._client||(this._client=(0,b.A)(function*(){return e._worker=i.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:e._modeId,keepIdleModels:!0,createData:{compilerOptions:e._defaults.getCompilerOptions(),extraLibs:e._defaults.getExtraLibs(),customWorkerPath:e._defaults.workerOptions.customWorkerPath,inlayHintsOptions:e._defaults.inlayHintsOptions}}),e._defaults.getEagerModelSync()?yield e._worker.withSyncedResources(i.editor.getModels().filter(t=>t.getLanguageId()===e._modeId).map(t=>t.uri)):yield e._worker.getProxy()})()),this._client}getLanguageServiceWorker(...e){var t=this;return(0,b.A)(function*(){const o=yield t._getClient();return t._worker&&(yield t._worker.withSyncedResources(e)),o})()}},r={};function x(e,t,o=0){if("string"==typeof e)return e;if(void 0===e)return"";let s="";if(o){s+=t;for(let n=0;n<o;n++)s+="  "}if(s+=e.messageText,o++,e.next)for(const n of e.next)s+=x(n,t,o);return s}function v(e){return e?e.map(t=>t.text).join(""):""}r["lib.d.ts"]=!0,r["lib.decorators.d.ts"]=!0,r["lib.decorators.legacy.d.ts"]=!0,r["lib.dom.asynciterable.d.ts"]=!0,r["lib.dom.d.ts"]=!0,r["lib.dom.iterable.d.ts"]=!0,r["lib.es2015.collection.d.ts"]=!0,r["lib.es2015.core.d.ts"]=!0,r["lib.es2015.d.ts"]=!0,r["lib.es2015.generator.d.ts"]=!0,r["lib.es2015.iterable.d.ts"]=!0,r["lib.es2015.promise.d.ts"]=!0,r["lib.es2015.proxy.d.ts"]=!0,r["lib.es2015.reflect.d.ts"]=!0,r["lib.es2015.symbol.d.ts"]=!0,r["lib.es2015.symbol.wellknown.d.ts"]=!0,r["lib.es2016.array.include.d.ts"]=!0,r["lib.es2016.d.ts"]=!0,r["lib.es2016.full.d.ts"]=!0,r["lib.es2016.intl.d.ts"]=!0,r["lib.es2017.d.ts"]=!0,r["lib.es2017.date.d.ts"]=!0,r["lib.es2017.full.d.ts"]=!0,r["lib.es2017.intl.d.ts"]=!0,r["lib.es2017.object.d.ts"]=!0,r["lib.es2017.sharedmemory.d.ts"]=!0,r["lib.es2017.string.d.ts"]=!0,r["lib.es2017.typedarrays.d.ts"]=!0,r["lib.es2018.asyncgenerator.d.ts"]=!0,r["lib.es2018.asynciterable.d.ts"]=!0,r["lib.es2018.d.ts"]=!0,r["lib.es2018.full.d.ts"]=!0,r["lib.es2018.intl.d.ts"]=!0,r["lib.es2018.promise.d.ts"]=!0,r["lib.es2018.regexp.d.ts"]=!0,r["lib.es2019.array.d.ts"]=!0,r["lib.es2019.d.ts"]=!0,r["lib.es2019.full.d.ts"]=!0,r["lib.es2019.intl.d.ts"]=!0,r["lib.es2019.object.d.ts"]=!0,r["lib.es2019.string.d.ts"]=!0,r["lib.es2019.symbol.d.ts"]=!0,r["lib.es2020.bigint.d.ts"]=!0,r["lib.es2020.d.ts"]=!0,r["lib.es2020.date.d.ts"]=!0,r["lib.es2020.full.d.ts"]=!0,r["lib.es2020.intl.d.ts"]=!0,r["lib.es2020.number.d.ts"]=!0,r["lib.es2020.promise.d.ts"]=!0,r["lib.es2020.sharedmemory.d.ts"]=!0,r["lib.es2020.string.d.ts"]=!0,r["lib.es2020.symbol.wellknown.d.ts"]=!0,r["lib.es2021.d.ts"]=!0,r["lib.es2021.full.d.ts"]=!0,r["lib.es2021.intl.d.ts"]=!0,r["lib.es2021.promise.d.ts"]=!0,r["lib.es2021.string.d.ts"]=!0,r["lib.es2021.weakref.d.ts"]=!0,r["lib.es2022.array.d.ts"]=!0,r["lib.es2022.d.ts"]=!0,r["lib.es2022.error.d.ts"]=!0,r["lib.es2022.full.d.ts"]=!0,r["lib.es2022.intl.d.ts"]=!0,r["lib.es2022.object.d.ts"]=!0,r["lib.es2022.regexp.d.ts"]=!0,r["lib.es2022.sharedmemory.d.ts"]=!0,r["lib.es2022.string.d.ts"]=!0,r["lib.es2023.array.d.ts"]=!0,r["lib.es2023.collection.d.ts"]=!0,r["lib.es2023.d.ts"]=!0,r["lib.es2023.full.d.ts"]=!0,r["lib.es5.d.ts"]=!0,r["lib.es6.d.ts"]=!0,r["lib.esnext.collection.d.ts"]=!0,r["lib.esnext.d.ts"]=!0,r["lib.esnext.decorators.d.ts"]=!0,r["lib.esnext.disposable.d.ts"]=!0,r["lib.esnext.full.d.ts"]=!0,r["lib.esnext.intl.d.ts"]=!0,r["lib.esnext.object.d.ts"]=!0,r["lib.esnext.promise.d.ts"]=!0,r["lib.scripthost.d.ts"]=!0,r["lib.webworker.asynciterable.d.ts"]=!0,r["lib.webworker.d.ts"]=!0,r["lib.webworker.importscripts.d.ts"]=!0,r["lib.webworker.iterable.d.ts"]=!0;var y=class{constructor(e){this._worker=e}_textSpanToRange(e,t){let o=e.getPositionAt(t.start),s=e.getPositionAt(t.start+t.length),{lineNumber:n,column:u}=o,{lineNumber:d,column:l}=s;return{startLineNumber:n,startColumn:u,endLineNumber:d,endColumn:l}}},M=class{constructor(e){this._worker=e,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}isLibFile(e){return!(!e||0!==e.path.indexOf("/lib.")||!r[e.path.slice(1)])}getOrCreateModel(e){const t=i.Uri.parse(e),o=i.editor.getModel(t);if(o)return o;if(this.isLibFile(t)&&this._hasFetchedLibFiles)return i.editor.createModel(this._libFiles[t.path.slice(1)],"typescript",t);const s=q.IF.getExtraLibs()[e];return s?i.editor.createModel(s.content,"typescript",t):null}_containsLibFile(e){for(let t of e)if(this.isLibFile(t))return!0;return!1}fetchLibFilesIfNecessary(e){var t=this;return(0,b.A)(function*(){t._containsLibFile(e)&&(yield t._fetchLibFiles())})()}_fetchLibFiles(){return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then(e=>e.getLibFiles()).then(e=>{this._hasFetchedLibFiles=!0,this._libFiles=e})),this._fetchLibFilesPromise}},N=class extends y{constructor(e,t,o,s){super(s),this._libFiles=e,this._defaults=t,this._selector=o,this._disposables=[],this._listener=Object.create(null);const n=l=>{if(l.getLanguageId()!==o)return;const a=()=>{const{onlyVisible:m}=this._defaults.getDiagnosticsOptions();m?l.isAttachedToEditor()&&this._doValidate(l):this._doValidate(l)};let c;const g=l.onDidChangeContent(()=>{clearTimeout(c),c=window.setTimeout(a,500)}),p=l.onDidChangeAttached(()=>{const{onlyVisible:m}=this._defaults.getDiagnosticsOptions();m&&(l.isAttachedToEditor()?a():i.editor.setModelMarkers(l,this._selector,[]))});this._listener[l.uri.toString()]={dispose(){g.dispose(),p.dispose(),clearTimeout(c)}},a()},u=l=>{i.editor.setModelMarkers(l,this._selector,[]);const a=l.uri.toString();this._listener[a]&&(this._listener[a].dispose(),delete this._listener[a])};this._disposables.push(i.editor.onDidCreateModel(l=>n(l))),this._disposables.push(i.editor.onWillDisposeModel(u)),this._disposables.push(i.editor.onDidChangeModelLanguage(l=>{u(l.model),n(l.model)})),this._disposables.push({dispose(){for(const l of i.editor.getModels())u(l)}});const d=()=>{for(const l of i.editor.getModels())u(l),n(l)};this._disposables.push(this._defaults.onDidChange(d)),this._disposables.push(this._defaults.onDidExtraLibsChange(d)),i.editor.getModels().forEach(l=>n(l))}dispose(){this._disposables.forEach(e=>e&&e.dispose()),this._disposables=[]}_doValidate(e){var t=this;return(0,b.A)(function*(){const o=yield t._worker(e.uri);if(e.isDisposed())return;const s=[],{noSyntaxValidation:n,noSemanticValidation:u,noSuggestionDiagnostics:d}=t._defaults.getDiagnosticsOptions();n||s.push(o.getSyntacticDiagnostics(e.uri.toString())),u||s.push(o.getSemanticDiagnostics(e.uri.toString())),d||s.push(o.getSuggestionDiagnostics(e.uri.toString()));const l=yield Promise.all(s);if(!l||e.isDisposed())return;const a=l.reduce((g,p)=>p.concat(g),[]).filter(g=>-1===(t._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(g.code)),c=a.map(g=>g.relatedInformation||[]).reduce((g,p)=>p.concat(g),[]).map(g=>g.file?i.Uri.parse(g.file.fileName):null);yield t._libFiles.fetchLibFilesIfNecessary(c),!e.isDisposed()&&i.editor.setModelMarkers(e,t._selector,a.map(g=>t._convertDiagnostics(e,g)))})()}_convertDiagnostics(e,t){const o=t.start||0,s=t.length||1,{lineNumber:n,column:u}=e.getPositionAt(o),{lineNumber:d,column:l}=e.getPositionAt(o+s),a=[];return t.reportsUnnecessary&&a.push(i.MarkerTag.Unnecessary),t.reportsDeprecated&&a.push(i.MarkerTag.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:n,startColumn:u,endLineNumber:d,endColumn:l,message:x(t.messageText,"\n"),code:t.code.toString(),tags:a,relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}}_convertRelatedInformation(e,t){if(!t)return[];const o=[];return t.forEach(s=>{let n=e;if(s.file&&(n=this._libFiles.getOrCreateModel(s.file.fileName)),!n)return;const u=s.start||0,d=s.length||1,{lineNumber:l,column:a}=n.getPositionAt(u),{lineNumber:c,column:g}=n.getPositionAt(u+d);o.push({resource:n.uri,startLineNumber:l,startColumn:a,endLineNumber:c,endColumn:g,message:x(s.messageText,"\n")})}),o}_tsDiagnosticCategoryToMarkerSeverity(e){switch(e){case 1:return i.MarkerSeverity.Error;case 3:return i.MarkerSeverity.Info;case 0:return i.MarkerSeverity.Warning;case 2:return i.MarkerSeverity.Hint}return i.MarkerSeverity.Info}},K=class F extends y{get triggerCharacters(){return["."]}provideCompletionItems(t,o,s,n){var u=this;return(0,b.A)(function*(){const d=t.getWordUntilPosition(o),l=new i.Range(o.lineNumber,d.startColumn,o.lineNumber,d.endColumn),a=t.uri,c=t.getOffsetAt(o),g=yield u._worker(a);if(t.isDisposed())return;const p=yield g.getCompletionsAtPosition(a.toString(),c);return!p||t.isDisposed()?void 0:{suggestions:p.entries.map(h=>{let S=l;if(h.replacementSpan){const A=t.getPositionAt(h.replacementSpan.start),D=t.getPositionAt(h.replacementSpan.start+h.replacementSpan.length);S=new i.Range(A.lineNumber,A.column,D.lineNumber,D.column)}const C=[];return void 0!==h.kindModifiers&&-1!==h.kindModifiers.indexOf("deprecated")&&C.push(i.languages.CompletionItemTag.Deprecated),{uri:a,position:o,offset:c,range:S,label:h.name,insertText:h.name,sortText:h.sortText,kind:F.convertKind(h.kind),tags:C}})}})()}resolveCompletionItem(t,o){var s=this;return(0,b.A)(function*(){const n=t,u=n.uri,d=n.position,l=n.offset,c=yield(yield s._worker(u)).getCompletionEntryDetails(u.toString(),l,n.label);return c?{uri:u,position:d,label:c.name,kind:F.convertKind(c.kind),detail:v(c.displayParts),documentation:{value:F.createDocumentationString(c)}}:n})()}static convertKind(t){switch(t){case f.primitiveType:case f.keyword:return i.languages.CompletionItemKind.Keyword;case f.variable:case f.localVariable:return i.languages.CompletionItemKind.Variable;case f.memberVariable:case f.memberGetAccessor:case f.memberSetAccessor:return i.languages.CompletionItemKind.Field;case f.function:case f.memberFunction:case f.constructSignature:case f.callSignature:case f.indexSignature:return i.languages.CompletionItemKind.Function;case f.enum:return i.languages.CompletionItemKind.Enum;case f.module:return i.languages.CompletionItemKind.Module;case f.class:return i.languages.CompletionItemKind.Class;case f.interface:return i.languages.CompletionItemKind.Interface;case f.warning:return i.languages.CompletionItemKind.File}return i.languages.CompletionItemKind.Property}static createDocumentationString(t){let o=v(t.documentation);if(t.tags)for(const s of t.tags)o+=`\n\n${R(s)}`;return o}};function R(e){let t=`*@${e.name}*`;if("param"===e.name&&e.text){const[o,...s]=e.text;t+=`\`${o.text}\``,s.length>0&&(t+=` \u2014 ${s.map(n=>n.text).join(" ")}`)}else Array.isArray(e.text)?t+=` \u2014 ${e.text.map(o=>o.text).join(" ")}`:e.text&&(t+=` \u2014 ${e.text}`);return t}var E=class Y extends y{constructor(){super(...arguments),this.signatureHelpTriggerCharacters=["(",","]}static _toSignatureHelpTriggerReason(t){switch(t.triggerKind){case i.languages.SignatureHelpTriggerKind.TriggerCharacter:return t.triggerCharacter?t.isRetrigger?{kind:"retrigger",triggerCharacter:t.triggerCharacter}:{kind:"characterTyped",triggerCharacter:t.triggerCharacter}:{kind:"invoked"};case i.languages.SignatureHelpTriggerKind.ContentChange:return t.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};default:return{kind:"invoked"}}}provideSignatureHelp(t,o,s,n){var u=this;return(0,b.A)(function*(){const d=t.uri,l=t.getOffsetAt(o),a=yield u._worker(d);if(t.isDisposed())return;const c=yield a.getSignatureHelpItems(d.toString(),l,{triggerReason:Y._toSignatureHelpTriggerReason(n)});if(!c||t.isDisposed())return;const g={activeSignature:c.selectedItemIndex,activeParameter:c.argumentIndex,signatures:[]};return c.items.forEach(p=>{const m={label:"",parameters:[]};m.documentation={value:v(p.documentation)},m.label+=v(p.prefixDisplayParts),p.parameters.forEach((h,S,C)=>{const A=v(h.displayParts),D={label:A,documentation:{value:v(h.documentation)}};m.label+=A,m.parameters.push(D),S<C.length-1&&(m.label+=v(p.separatorDisplayParts))}),m.label+=v(p.suffixDisplayParts),g.signatures.push(m)}),{value:g,dispose(){}}})()}},H=class extends y{provideHover(e,t,o){var s=this;return(0,b.A)(function*(){const n=e.uri,u=e.getOffsetAt(t),d=yield s._worker(n);if(e.isDisposed())return;const l=yield d.getQuickInfoAtPosition(n.toString(),u);if(!l||e.isDisposed())return;const a=v(l.documentation),c=l.tags?l.tags.map(p=>R(p)).join("  \n\n"):"",g=v(l.displayParts);return{range:s._textSpanToRange(e,l.textSpan),contents:[{value:"```typescript\n"+g+"\n```\n"},{value:a+(c?"\n\n"+c:"")}]}})()}},W=class extends y{provideDocumentHighlights(e,t,o){var s=this;return(0,b.A)(function*(){const n=e.uri,u=e.getOffsetAt(t),d=yield s._worker(n);if(e.isDisposed())return;const l=yield d.getDocumentHighlights(n.toString(),u,[n.toString()]);return l&&!e.isDisposed()?l.flatMap(a=>a.highlightSpans.map(c=>({range:s._textSpanToRange(e,c.textSpan),kind:"writtenReference"===c.kind?i.languages.DocumentHighlightKind.Write:i.languages.DocumentHighlightKind.Text}))):void 0})()}},j=class extends y{constructor(e,t){super(t),this._libFiles=e}provideDefinition(e,t,o){var s=this;return(0,b.A)(function*(){const n=e.uri,u=e.getOffsetAt(t),d=yield s._worker(n);if(e.isDisposed())return;const l=yield d.getDefinitionAtPosition(n.toString(),u);if(!l||e.isDisposed()||(yield s._libFiles.fetchLibFilesIfNecessary(l.map(c=>i.Uri.parse(c.fileName))),e.isDisposed()))return;const a=[];for(let c of l){const g=s._libFiles.getOrCreateModel(c.fileName);g&&a.push({uri:g.uri,range:s._textSpanToRange(g,c.textSpan)})}return a})()}},V=class extends y{constructor(e,t){super(t),this._libFiles=e}provideReferences(e,t,o,s){var n=this;return(0,b.A)(function*(){const u=e.uri,d=e.getOffsetAt(t),l=yield n._worker(u);if(e.isDisposed())return;const a=yield l.getReferencesAtPosition(u.toString(),d);if(!a||e.isDisposed()||(yield n._libFiles.fetchLibFilesIfNecessary(a.map(g=>i.Uri.parse(g.fileName))),e.isDisposed()))return;const c=[];for(let g of a){const p=n._libFiles.getOrCreateModel(g.fileName);p&&c.push({uri:p.uri,range:n._textSpanToRange(p,g.textSpan)})}return c})()}},B=class extends y{provideDocumentSymbols(e,t){var o=this;return(0,b.A)(function*(){const s=e.uri,n=yield o._worker(s);if(e.isDisposed())return;const u=yield n.getNavigationTree(s.toString());if(!u||e.isDisposed())return;const d=(a,c)=>({name:a.text,detail:"",kind:_[a.kind]||i.languages.SymbolKind.Variable,range:o._textSpanToRange(e,a.spans[0]),selectionRange:o._textSpanToRange(e,a.spans[0]),tags:[],children:a.childItems?.map(p=>d(p,a.text)),containerName:c});return u.childItems?u.childItems.map(a=>d(a)):[]})()}},f=class{static{this.unknown=""}static{this.keyword="keyword"}static{this.script="script"}static{this.module="module"}static{this.class="class"}static{this.interface="interface"}static{this.type="type"}static{this.enum="enum"}static{this.variable="var"}static{this.localVariable="local var"}static{this.function="function"}static{this.localFunction="local function"}static{this.memberFunction="method"}static{this.memberGetAccessor="getter"}static{this.memberSetAccessor="setter"}static{this.memberVariable="property"}static{this.constructorImplementation="constructor"}static{this.callSignature="call"}static{this.indexSignature="index"}static{this.constructSignature="construct"}static{this.parameter="parameter"}static{this.typeParameter="type parameter"}static{this.primitiveType="primitive type"}static{this.label="label"}static{this.alias="alias"}static{this.const="const"}static{this.let="let"}static{this.warning="warning"}},_=Object.create(null);_[f.module]=i.languages.SymbolKind.Module,_[f.class]=i.languages.SymbolKind.Class,_[f.enum]=i.languages.SymbolKind.Enum,_[f.interface]=i.languages.SymbolKind.Interface,_[f.memberFunction]=i.languages.SymbolKind.Method,_[f.memberVariable]=i.languages.SymbolKind.Property,_[f.memberGetAccessor]=i.languages.SymbolKind.Property,_[f.memberSetAccessor]=i.languages.SymbolKind.Property,_[f.variable]=i.languages.SymbolKind.Variable,_[f.const]=i.languages.SymbolKind.Variable,_[f.localVariable]=i.languages.SymbolKind.Variable,_[f.variable]=i.languages.SymbolKind.Variable,_[f.function]=i.languages.SymbolKind.Function,_[f.localFunction]=i.languages.SymbolKind.Function;var T,O,k=class extends y{static _convertOptions(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:2,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}}_convertTextChanges(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}}},U=class extends k{constructor(){super(...arguments),this.canFormatMultipleRanges=!1}provideDocumentRangeFormattingEdits(e,t,o,s){var n=this;return(0,b.A)(function*(){const u=e.uri,d=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),l=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),a=yield n._worker(u);if(e.isDisposed())return;const c=yield a.getFormattingEditsForRange(u.toString(),d,l,k._convertOptions(o));return c&&!e.isDisposed()?c.map(g=>n._convertTextChanges(e,g)):void 0})()}},$=class extends k{get autoFormatTriggerCharacters(){return[";","}","\n"]}provideOnTypeFormattingEdits(e,t,o,s,n){var u=this;return(0,b.A)(function*(){const d=e.uri,l=e.getOffsetAt(t),a=yield u._worker(d);if(e.isDisposed())return;const c=yield a.getFormattingEditsAfterKeystroke(d.toString(),l,o,k._convertOptions(s));return c&&!e.isDisposed()?c.map(g=>u._convertTextChanges(e,g)):void 0})()}},z=class extends k{provideCodeActions(e,t,o,s){var n=this;return(0,b.A)(function*(){const u=e.uri,d=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),l=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),a=k._convertOptions(e.getOptions()),c=o.markers.filter(h=>h.code).map(h=>h.code).map(Number),g=yield n._worker(u);if(e.isDisposed())return;const p=yield g.getCodeFixesAtPosition(u.toString(),d,l,c,a);return!p||e.isDisposed()?{actions:[],dispose:()=>{}}:{actions:p.filter(h=>0===h.changes.filter(S=>S.isNewFile).length).map(h=>n._tsCodeFixActionToMonacoCodeAction(e,o,h)),dispose:()=>{}}})()}_tsCodeFixActionToMonacoCodeAction(e,t,o){const s=[];for(const u of o.changes)for(const d of u.textChanges)s.push({resource:e.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(e,d.span),text:d.newText}});return{title:o.description,edit:{edits:s},diagnostics:t.markers,kind:"quickfix"}}},J=class extends y{constructor(e,t){super(t),this._libFiles=e}provideRenameEdits(e,t,o,s){var n=this;return(0,b.A)(function*(){const u=e.uri,d=u.toString(),l=e.getOffsetAt(t),a=yield n._worker(u);if(e.isDisposed())return;const c=yield a.getRenameInfo(d,l,{allowRenameOfImportPath:!1});if(!1===c.canRename)return{edits:[],rejectReason:c.localizedErrorMessage};if(void 0!==c.fileToRename)throw new Error("Renaming files is not supported.");const g=yield a.findRenameLocations(d,l,!1,!1,!1);if(!g||e.isDisposed())return;const p=[];for(const m of g){const h=n._libFiles.getOrCreateModel(m.fileName);if(!h)throw new Error(`Unknown file ${m.fileName}.`);p.push({resource:h.uri,versionId:void 0,textEdit:{range:n._textSpanToRange(h,m.textSpan),text:o}})}return{edits:p}})()}},G=class extends y{provideInlayHints(e,t,o){var s=this;return(0,b.A)(function*(){const n=e.uri,u=n.toString(),d=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),l=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),a=yield s._worker(n);return e.isDisposed()?null:{hints:(yield a.provideInlayHints(u,d,l)).map(p=>({...p,label:p.text,position:e.getPositionAt(p.position),kind:s._convertHintKind(p.kind)})),dispose:()=>{}}})()}_convertHintKind(e){return"Parameter"===e?i.languages.InlayHintKind.Parameter:i.languages.InlayHintKind.Type}};function ne(e){O=Q(e,"typescript")}function oe(e){T=Q(e,"javascript")}function ae(){return new Promise((e,t)=>{if(!T)return t("JavaScript not registered!");e(T)})}function le(){return new Promise((e,t)=>{if(!O)return t("TypeScript not registered!");e(O)})}function Q(e,t){const o=[],s=[],n=new I(t,e);o.push(n);const u=(...a)=>n.getLanguageServiceWorker(...a),d=new M(u);return function l(){const{modeConfiguration:a}=e;X(s),a.completionItems&&s.push(i.languages.registerCompletionItemProvider(t,new K(u))),a.signatureHelp&&s.push(i.languages.registerSignatureHelpProvider(t,new E(u))),a.hovers&&s.push(i.languages.registerHoverProvider(t,new H(u))),a.documentHighlights&&s.push(i.languages.registerDocumentHighlightProvider(t,new W(u))),a.definitions&&s.push(i.languages.registerDefinitionProvider(t,new j(d,u))),a.references&&s.push(i.languages.registerReferenceProvider(t,new V(d,u))),a.documentSymbols&&s.push(i.languages.registerDocumentSymbolProvider(t,new B(u))),a.rename&&s.push(i.languages.registerRenameProvider(t,new J(d,u))),a.documentRangeFormattingEdits&&s.push(i.languages.registerDocumentRangeFormattingEditProvider(t,new U(u))),a.onTypeFormattingEdits&&s.push(i.languages.registerOnTypeFormattingEditProvider(t,new $(u))),a.codeActions&&s.push(i.languages.registerCodeActionProvider(t,new z(u))),a.inlayHints&&s.push(i.languages.registerInlayHintsProvider(t,new G(u))),a.diagnostics&&s.push(new N(d,e,t,u))}(),o.push(function ue(e){return{dispose:()=>X(e)}}(s)),u}function X(e){for(;e.length;)e.pop().dispose()}}}]);