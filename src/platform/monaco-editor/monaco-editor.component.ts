import { Component, Input, Output, EventEmitter, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

let uniqueCounter: number = 0;

@Component({
  selector: 'td-monaco-editor',
  templateUrl: './monaco-editor.component.html',
  styleUrls: [ './monaco-editor.component.scss' ],
})
export class TdMonacoEditorComponent implements OnInit {

  private _editorStyle: string = 'border:1px solid grey;';
  private _appPath: string = electron.remote.app.getAppPath().split('\\').join('/');
  private _webview: any;
  private _value: string = '';
  private _theme: string = 'vs';
  private _language: string = 'javascript';
  private _subject: Subject<string> = new Subject();
  private _monacoInnerContainer: string = 'monacoInnerContainer' + uniqueCounter++;
  private _monacoNodeModuleDirOverride: string = '';

  @ViewChild('monacoContainer') _monacoContainer: ElementRef;

 /**
  * editorInitialized: function($event)
  * Event emitted when editor is first initialized
  */
  @Output('editorInitialized') onEditorInitialized: EventEmitter<void> = new EventEmitter<void>();

 /**
  * editorConfigurationChanged: function($event)
  * Event emitted when editor's configuration changes
  */
  @Output('editorConfigurationChanged') onEditorConfigurationChanged: EventEmitter<void> = new EventEmitter<void>();

 /**
  * editorLanguageChanged: function($event)
  * Event emitted when editor's Language changes
  */
  @Output('editorLanguageChanged') onEditorLanguageChanged: EventEmitter<void> = new EventEmitter<void>();

 /**
  * editorValueChange: function($event)
  * Event emitted any time something changes the editor value
  */
  @Output('editorValueChange') onEditorValueChange: EventEmitter<void> = new EventEmitter<void>();

  /**
   * value?: string
   * Value in the Editor after async getEditorContent was called
   */
  @Input('value')
  set value(value: string) {
    this._value = value;
    if (this._webview) {
        this._webview.send('setEditorContent', value);
    }
    this.onEditorValueChange.emit(undefined);
  }

  // no getter for editor Value because need to use async call
  // instead using getEditorContent function below

  /**
   * getEditorContent?: function
   * Returns the content within the monaco editor
   */
  getValue(): Observable<string> {
      this._webview.send('getEditorContent');
      return this._subject.asObservable();
  }

  /**
   * language?: string
   * language used in editor
   */
  @Input('language')
  set language(language: string) {
    this._language = language;
    if (this._webview) {
        this._webview.send('setLanguage', language);
    }
  }
  get language(): string {
    return this._language;
  }

  /**
   * registerLanguage?: function
   * Registers a custom Language within the monaco editor
   */
  registerLanguage(language: any): void {
      this._webview.send('registerLanguage', language);
  }

  /**
   * style?: string
   * css style of the editor on the page
   */
  @Input('editorStyle')
  set editorStyle(editorStyle: string) {
    this._editorStyle = editorStyle;
  }
  get editorStyle(): string {
    return this._editorStyle;
  }

  /**
   * theme?: string
   * Theme to be applied to editor
   */
  @Input('theme')
  set theme(theme: string) {
    this._theme = theme;
    if (this._webview) {
        this._webview.send('setEditorOptions', {'theme': theme});
    }
  }
  get theme(): string {
    return this._theme;
  }

/**
 * setMonacoNodeModuleDirOverride function that overrides where to look
 * for the monaco editor node_module. Used in tests or anywhere that the
 * node_modules are not in the expected location.
 */
  setMonacoNodeModuleDirOverride(dirOverride: string): void {
      this._monacoNodeModuleDirOverride = dirOverride;
      this._appPath = dirOverride;
  }

  ngOnInit(): void {
    let monacoHTML: string = `<!DOCTYPE html>
        <html style="height:100%">
        <head>
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta http-equiv="Content-Type" content="text/html;charset=utf-8" >
            <link rel="stylesheet" data-name="vs/editor/editor.main" 
                href="file://${this._monacoNodeModuleDirOverride}/node_modules/monaco-editor/min/vs/editor/editor.main.css">
        </head>
        <body style="height:100%;width: 100%;margin: 0;padding: 0;overflow: hidden;">
        <div id="${this._monacoInnerContainer}" style="width:100%;height:100%;${this._editorStyle}"></div>
        <script>
            // Get the ipcRenderer of electron for communication
            const {ipcRenderer} = require('electron');
        </script>
        <script src="file://${this._monacoNodeModuleDirOverride}/node_modules/monaco-editor/min/vs/loader.js"></script>
        <script>
            var editor;
            var theme = '${this._theme}';

            require.config({
                baseUrl: '${this._appPath}/node_modules/monaco-editor/min'
            });
            self.module = undefined;
            self.process.browser = true;

            require(['vs/editor/editor.main'], function() {
                editor = monaco.editor.create(document.getElementById('${this._monacoInnerContainer}'), {
                    value: '${this._value}',
                    language: '${this.language}',
                    theme: '${this._theme}',
                });
                editor.getModel().onDidChangeContent( (e)=> {
                    ipcRenderer.sendToHost("onEditorContentChange", editor.getValue());
                });
                ipcRenderer.sendToHost("onEditorInitialized", '');
            });

            // return back the value in the editor to the mainview
            ipcRenderer.on('getEditorContent', function(){
                ipcRenderer.sendToHost("editorContent", editor.getValue());
            });

            // set the value of the editor from what was sent from the mainview
            ipcRenderer.on('setEditorContent', function(event, data){
                editor.setValue(data);
            });

            // set the options of the editor from what was sent from the mainview
            ipcRenderer.on('setEditorOptions', function(event, data){
                editor.updateOptions(data);
                ipcRenderer.sendToHost("onEditorConfigurationChanged", '');
            });

            // set the language of the editor from what was sent from the mainview
            ipcRenderer.on('setLanguage', function(event, data){
                var currentValue = editor.getValue();
                editor.dispose();
                editor = monaco.editor.create(document.getElementById('${this._monacoInnerContainer}'), {
                    value: currentValue,
                    language: data,
                    theme: theme,
                });
                ipcRenderer.sendToHost("onEditorConfigurationChanged", '');
                ipcRenderer.sendToHost("onEditorLanguageChanged", '');
            });

            // register a new language with editor
            ipcRenderer.on('registerLanguage', function(event, data){
                var currentValue = editor.getValue();
                editor.dispose();

                for (var i = 0; i < data.completionItemProvider.length; i++) {
                    var provider = data.completionItemProvider[i];
                    provider.kind = eval(provider.kind);
                }
                for (var i = 0; i < data.monarchTokensProvider.length; i++) {
                    var monarchTokens = data.monarchTokensProvider[i];
                    monarchTokens[0] = eval(monarchTokens[0]);
                }
                monaco.languages.register({ id: data.id });

                monaco.languages.setMonarchTokensProvider(data.id, {
                    tokenizer: {
                        root: data.monarchTokensProvider
                    }
                });

                // Define a new theme that constains only rules that match this language
                monaco.editor.defineTheme(data.customTheme.id, data.customTheme.theme);
                theme = data.customTheme.id;

                monaco.languages.registerCompletionItemProvider(data.id, {
                    provideCompletionItems: () => {
                        return data.completionItemProvider
                    }
                });

                var css = document.createElement("style");
                css.type = "text/css";
                css.innerHTML = data.monarchTokensProviderCSS;
                document.body.appendChild(css);

                ipcRenderer.sendToHost("onEditorConfigurationChanged", '');
            });

            // need to manually resize the editor any time the window size
            // changes. See: https://github.com/Microsoft/monaco-editor/issues/28
            window.addEventListener("resize", function resizeEditor() {
                editor.layout();
            });
        </script>
        </body>
        </html>`;

    // dynamically create the Electron Webview Element
    // this will sandbox the monaco code into its own DOM and its own
    // javascript instance. Need to do this to avoid problems with monaco
    // using AMD Requires and Electron using Node Requires
    // see https://github.com/Microsoft/monaco-editor/issues/90
    this._webview = document.createElement('webview');
    this._webview.setAttribute('nodeintegration', 'true');
    this._webview.setAttribute('disablewebsecurity', 'true');
    // take the html content for the webview and base64 encode it and use as the src tag
    this._webview.setAttribute('src', 'data:text/html;base64,' + window.btoa(monacoHTML));
    this._webview.setAttribute('style', 'display:inline-flex; width:100%; height:100%');
    // this._webview.addEventListener('dom-ready', () => {
    //    this._webview.openDevTools();
    // });

    // Process the data from the webview
    this._webview.addEventListener('ipc-message', (event: any) => {
        if (event.channel === 'editorContent') {
            this._value = event.args[0];
            this._subject.next(this._value);
            this._subject.complete();
            this._subject = new Subject();
            this.onEditorValueChange.emit(undefined);
        } else if (event.channel === 'onEditorContentChange') {
            this._value = event.args[0];
            this.onEditorValueChange.emit(undefined);
        } else if (event.channel === 'onEditorInitialized') {
            this.onEditorInitialized.emit(undefined);
        } else if (event.channel === 'onEditorConfigurationChanged') {
            this.onEditorConfigurationChanged.emit(undefined);
        } else if (event.channel === 'onEditorLanguageChanged') {
            this.onEditorLanguageChanged.emit(undefined);
        }
    });

    // append the webview to the DOM
    this._monacoContainer.nativeElement.appendChild(this._webview);
  }
}
