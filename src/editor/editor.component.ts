import { Component, Input, Output, EventEmitter, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// counter for ids to allow for multiple editors on one page
let uniqueCounter: number = 0;
// declare all the built in electron objects
declare const electron: any;
declare const monaco: any;
declare const require: any;
declare const process: any;

@Component({
  selector: 'td-editor',
  templateUrl: './editor.component.html',
  styleUrls: [ './editor.component.scss' ],
})
export class TdEditorComponent implements OnInit, AfterViewInit {

  private _editorStyle: string = 'width:100%;height:100%;border:1px solid grey;';
  private _appPath: string = '';
  private _isElectronApp: boolean = false;
  private _webview: any;
  private _value: string = '';
  private _theme: string = 'vs';
  private _language: string = 'javascript';
  private _subject: Subject<string> = new Subject();
  private _editorInnerContainer: string = 'editorInnerContainer' + uniqueCounter++;
  private _editorNodeModuleDirOverride: string = '';
  private _editor: any;
  private _componentInitialized: boolean = false;

  @ViewChild('editorContainer') _editorContainer: ElementRef;

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
    } else {
        this._editor.setValue(value);
    }
    this.onEditorValueChange.emit(undefined);
  }

  /**
   * Set if using Electron mode when object is created
   */
  constructor() {
    // since accessing the window object need this check so serverside rendering doesn't fail
    if (typeof document === 'object' && !!document) {
        /* tslint:disable-next-line */
        this._isElectronApp = (window['process']) ? true : false;
        if (this._isElectronApp) {
            this._appPath = electron.remote.app.getAppPath().split('\\').join('/');
        }
    }
  }

  // no getter for editor Value because need to use async call
  // instead using getEditorContent function below

  /**
   * getEditorContent?: function
   * Returns the content within the editor
   */
  getValue(): Observable<string> {
      if (this._componentInitialized) {
        if (this._webview) {
            this._webview.send('getEditorContent');
            return this._subject.asObservable();
        } else {
            this._value = this._editor.getValue();
            setTimeout(() => {
                this._subject.next(this._value);
                this._subject.complete();
                this._subject = new Subject();
                this.onEditorValueChange.emit(undefined);
            });
            return this._subject.asObservable();
        }
      }
  }

  /**
   * language?: string
   * language used in editor
   */
  @Input('language')
  set language(language: string) {
    this._language = language;
    if (this._componentInitialized) {
        if (this._webview) {
            this._webview.send('setLanguage', language);
        } else {
            let currentValue: string = this._editor.getValue();
            this._editor.dispose();
            let myDiv: HTMLDivElement = this._editorContainer.nativeElement;
            this._editor = monaco.editor.create(myDiv, {
                value: currentValue,
                language: language,
                theme: this._theme,
            });
            this.onEditorConfigurationChanged.emit(undefined);
            this.onEditorLanguageChanged.emit(undefined);
        }
    }
  }
  get language(): string {
    return this._language;
  }

  /**
   * registerLanguage?: function
   * Registers a custom Language within the editor
   */
  registerLanguage(language: any): void {
      if (this._componentInitialized) {
        if (this._webview) {
            this._webview.send('registerLanguage', language);
        } else {
            let currentValue: string = this._editor.getValue();
            this._editor.dispose();

            for (let i: number = 0; i < language.completionItemProvider.length; i++) {
                let provider: any = language.completionItemProvider[i];
                /* tslint:disable-next-line */
                provider.kind = eval(provider.kind);
            }
            for (let i: number = 0; i < language.monarchTokensProvider.length; i++) {
                let monarchTokens: any = language.monarchTokensProvider[i];
                /* tslint:disable-next-line */
                monarchTokens[0] = eval(monarchTokens[0]);
            }
            monaco.languages.register({ id: language.id });

            monaco.languages.setMonarchTokensProvider(language.id, {
                tokenizer: {
                    root: language.monarchTokensProvider
                },
            });

            // Define a new theme that constains only rules that match this language
            monaco.editor.defineTheme(language.customTheme.id, language.customTheme.theme);
            this._theme = language.customTheme.id;

            monaco.languages.registerCompletionItemProvider(language.id, {
                provideCompletionItems: () => {
                    return language.completionItemProvider;
                },
            });

            let css: HTMLStyleElement = document.createElement('style');
            css.type = 'text/css';
            css.innerHTML = language.monarchTokensProviderCSS;
            document.body.appendChild(css);
            this.onEditorConfigurationChanged.emit(undefined);
        }
      }
  }

  /**
   * style?: string
   * css style of the editor on the page
   */
  @Input('editorStyle')
  set editorStyle(editorStyle: string) {
    this._editorStyle = editorStyle;
    if (this._componentInitialized) {
        if (this._webview) {
            this._webview.send('setEditorStyle', {language: this._language, theme: this._theme, style: editorStyle});
        } else {
            let containerDiv: HTMLDivElement = this._editorContainer.nativeElement;
            containerDiv.setAttribute('style', editorStyle);
            let currentValue: string = this._editor.getValue();
            this._editor.dispose();
            let myDiv: HTMLDivElement = this._editorContainer.nativeElement;
            this._editor = monaco.editor.create(myDiv, {
                value: currentValue,
                language: this._language,
                theme: this._theme,
            });
        }
    }
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
    if (this._componentInitialized) {
        if (this._webview) {
            this._webview.send('setEditorOptions', {'theme': theme});
        } else {
            this._editor.updateOptions(theme);
            this.onEditorConfigurationChanged.emit(undefined);
        }
    }
  }
  get theme(): string {
    return this._theme;
  }

  /**
   * Returns if in Electron mode or not
   */
  get isElectronApp(): boolean {
    return this._isElectronApp;
  }

/**
 * setEditorNodeModuleDirOverride function that overrides where to look
 * for the editor node_module. Used in tests for Electron or anywhere that the
 * node_modules are not in the expected location.
 */
  setEditorNodeModuleDirOverride(dirOverride: string): void {
      this._editorNodeModuleDirOverride = dirOverride;
      this._appPath = dirOverride;
  }

  /**
   * ngOnInit only used for Electron version of editor
   * This is where the webview is created to sandbox away the editor
   */
  ngOnInit(): void {
    let editorHTML: string = '';
    if (this._isElectronApp) {
        editorHTML = `<!DOCTYPE html>
            <html style="height:100%">
            <head>
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta http-equiv="Content-Type" content="text/html;charset=utf-8" >
                <link rel="stylesheet" data-name="vs/editor/editor.main" 
                    href="file://${this._editorNodeModuleDirOverride}/assets/monaco/vs/editor/editor.main.css">
            </head>
            <body style="height:100%;width: 100%;margin: 0;padding: 0;overflow: hidden;">
            <div id="${this._editorInnerContainer}" style="width:100%;height:100%;${this._editorStyle}"></div>
            <script>
                // Get the ipcRenderer of electron for communication
                const {ipcRenderer} = require('electron');
            </script>
            <script src="file://${this._editorNodeModuleDirOverride}/assets/monaco/vs/loader.js"></script>
            <script>
                var editor;
                var theme = '${this._theme}';

                require.config({
                    baseUrl: 'file://${this._appPath}/assets/monaco'
                });
                self.module = undefined;
                self.process.browser = true;

                require(['vs/editor/editor.main'], function() {
                    editor = monaco.editor.create(document.getElementById('${this._editorInnerContainer}'), {
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

                // set the style of the editor container div
                ipcRenderer.on('setEditorStyle', function(event, data){
                    var editorDiv = document.getElementById('${this._editorInnerContainer}');
                    editorDiv.style = data.style;
                    var currentValue = editor.getValue();
                    editor.dispose();
                    editor = monaco.editor.create(document.getElementById('${this._editorInnerContainer}'), {
                        value: currentValue,
                        language: data.language,
                        theme: data.theme,
                    });
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
                    editor = monaco.editor.create(document.getElementById('${this._editorInnerContainer}'), {
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
        this._webview.setAttribute('src', 'data:text/html;base64,' + window.btoa(editorHTML));
        this._webview.setAttribute('style', 'display:inline-flex; width:100%; height:100%');
        //  this._webview.addEventListener('dom-ready', () => {
        //     this._webview.openDevTools();
        //  });

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
        this._editorContainer.nativeElement.appendChild(this._webview);
    }
    this._componentInitialized = true;
  }

  /**
   * ngAfterViewInit only used for browser version of editor
   * This is where the AMD Loader scripts are added to the browser and the editor scripts are "required"
   */
  ngAfterViewInit(): void {
    if (!this._isElectronApp) {
        let onGotAmdLoader: any = () => {
            // Load monaco
            (<any>window).require.config({ paths: { 'vs': 'assets/monaco/vs' } });
            (<any>window).require(['vs/editor/editor.main'], () => {
                this.initMonaco();
            });
        };

        // Load AMD loader if necessary
        if (!(<any>window).require) {
            let loaderScript: HTMLScriptElement = document.createElement('script');
            loaderScript.type = 'text/javascript';
            loaderScript.src = 'assets/monaco/vs/loader.js';
            loaderScript.addEventListener('load', onGotAmdLoader);
            document.body.appendChild(loaderScript);
        } else {
            onGotAmdLoader();
        }
    }
  }

  /**
   * initMonaco method creates the monaco editor into the @ViewChild('editorContainer')
   * and emit the onEditorInitialized event.  This is only used in the browser version.
   */
  private initMonaco(): void {
    let containerDiv: HTMLDivElement = this._editorContainer.nativeElement;
    containerDiv.id = this._editorInnerContainer;
    this._editor = monaco.editor.create(containerDiv, {
        value: this._value,
        language: this.language,
        theme: this._theme,
    });
    this.onEditorInitialized.emit(undefined);
  }
}
