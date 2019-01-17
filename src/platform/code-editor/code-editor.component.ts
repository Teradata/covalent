import { Component, Input, Output, EventEmitter, OnInit, AfterViewInit,
  ViewChild, ElementRef, forwardRef, NgZone, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

const noop: any = () => {
  // empty method
};

// counter for ids to allow for multiple editors on one page
let uniqueCounter: number = 0;
let loadedMonaco: boolean = false;
let loadPromise: Promise<void>;
// declare all the built in electron objects
declare const electron: any;
declare const monaco: any;
declare const require: any;
declare const process: any;

@Component({
  selector: 'td-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: [ './code-editor.component.scss' ],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TdCodeEditorComponent),
    multi: true,
  }],
})
export class TdCodeEditorComponent implements OnInit, AfterViewInit, ControlValueAccessor, OnDestroy {

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
  private _editor: any = {};
  private _editorProxy: any;
  private _componentInitialized: boolean = false;
  private _fromEditor: boolean = false;
  private _automaticLayout: boolean = false;
  private _editorOptions: any = {};
  private _isFullScreen: boolean = false;
  private _keycode: any;
  private _setValueTimeout: any;
  private initialContentChange: boolean = true;

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
   * The change event notifies you about a change happening in an input field.
   * Since the component is not a native Angular component have to specifiy the event emitter ourself
   */
  @Output('change') onChange: EventEmitter<void> = new EventEmitter<void>();
  /* tslint:disable-next-line */
  propagateChange = (_: any) => {};
  onTouched = () => noop;

  /**
   * Set if using Electron mode when object is created
   */
  constructor(private zone: NgZone, private _changeDetectorRef: ChangeDetectorRef) {
    // since accessing the window object need this check so serverside rendering doesn't fail
    if (typeof document === 'object' && !!document) {
        /* tslint:disable-next-line */
        this._isElectronApp = ((<any>window)['process']) ? true : false;
        if (this._isElectronApp) {
            this._appPath = electron.remote.app.getAppPath().split('\\').join('/');
        }
    }
  }

  /**
   * value?: string
   * Value in the Editor after async getEditorContent was called
   */
  @Input('value')
  set value(value: string) {
    // Clear any timeout that might overwrite this value set in the future
    if (this._setValueTimeout) {
        clearTimeout(this._setValueTimeout);
    }
    this._value = value;
    if (this._componentInitialized) {
        if (this._webview) {
            if (this._webview.send !== undefined) {
                // don't want to keep sending content if event came from IPC, infinite loop
                if (!this._fromEditor) {
                    this._webview.send('setEditorContent', value);
                }
                this.onEditorValueChange.emit(undefined);
                this.propagateChange(this._value);
                this.onChange.emit(undefined);
                this._fromEditor = false;
            } else {
                // Editor is not loaded yet, try again in half a second
                this._setValueTimeout = setTimeout(() => {
                    this.value = value;
                }, 500);
            }
        } else {
            if (this._editor && this._editor.setValue) {
                // don't want to keep sending content if event came from the editor, infinite loop
                if (!this._fromEditor) {
                    this._editor.setValue(value);
                }
                this.onEditorValueChange.emit(undefined);
                this.propagateChange(this._value);
                this.onChange.emit(undefined);
                this._fromEditor = false;
                this.zone.run(() => this._value = value);
            } else {
              // Editor is not loaded yet, try again in half a second
              this._setValueTimeout = setTimeout(() => {
                this.value = value;
              }, 500);
            }
        }
    } else {
        this._setValueTimeout = setTimeout(() => {
            this.value = value;
        }, 500);
    }
  }

  get value(): string {
      return this._value;
  }

  /**
   * Implemented as part of ControlValueAccessor.
   */
  writeValue(value: any): void {
    // do not write if null or undefined
    // tslint:disable-next-line
    if ( value != undefined) {
      this.value = value;
    }
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

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
            this._editor = monaco.editor.create(myDiv, Object.assign({
                value: currentValue,
                language: language,
                theme: this._theme,
            }, this.editorOptions));
            this._editor.getModel().onDidChangeContent( (e: any) => {
                this._fromEditor = true;
                this.writeValue(this._editor.getValue());
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
                    root: language.monarchTokensProvider,
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
            this._editor = monaco.editor.create(myDiv, Object.assign({
                value: currentValue,
                language: this._language,
                theme: this._theme,
            }, this.editorOptions));
            this._editor.getModel().onDidChangeContent( (e: any) => {
                this._fromEditor = true;
                this.writeValue(this._editor.getValue());
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
            this._editor.updateOptions({'theme': theme});
            this.onEditorConfigurationChanged.emit(undefined);
        }
    }
  }
  get theme(): string {
    return this._theme;
  }

  /**
   * automaticLayout?: boolean
   * Implemented via setInterval that constantly probes for the container's size
   */
  @Input('automaticLayout')
  set automaticLayout(automaticLayout: any) {
    this._automaticLayout = automaticLayout !== '' ? (automaticLayout === 'true' || automaticLayout === true) : true;
  }
  get automaticLayout(): any {
    return this._automaticLayout;
  }

  /**
   * fullScreenKeyBinding?: number
   * See here for key bindings https://microsoft.github.io/monaco-editor/api/enums/monaco.keycode.html
   * Sets the KeyCode for shortcutting to Fullscreen mode
   */
  @Input('fullScreenKeyBinding')
  set fullScreenKeyBinding(keycode: number[]) {
    this._keycode = keycode;
  }
  get fullScreenKeyBinding(): number[] {
    return this._keycode;
  }

  /**
   * editorOptions?: Object
   * Options used on editor instantiation. Available options listed here:
   * https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.ieditoroptions.html
   */
  @Input('editorOptions')
  set editorOptions(editorOptions: any) {
      this._editorOptions = editorOptions;
      if (this._componentInitialized) {
        if (this._webview) {
          this._webview.send('setEditorOptions', editorOptions);
        } else {
          this._editor.updateOptions(editorOptions);
          this.onEditorConfigurationChanged.emit(undefined);
        }
      }
  }
  get editorOptions(): any {
    return this._editorOptions;
  }

  /**
   * layout method that calls layout method of editor and instructs the editor to remeasure its container
   */
   layout(): void {
    if (this._componentInitialized) {
        if (this._webview) {
            this._webview.send('layout');
        } else {
            this._editor.layout();
        }
    }
  }

  /**
   * Returns if in Electron mode or not
   */
  get isElectronApp(): boolean {
    return this._isElectronApp;
  }

  /**
   * Returns if in Full Screen Mode or not
   */
  get isFullScreen(): boolean {
    return this._isFullScreen;
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
                var value = '${this._value}';

                require.config({
                    baseUrl: '${this._appPath}/assets/monaco'
                });
                self.module = undefined;
                self.process.browser = true;

                require(['vs/editor/editor.main'], function() {
                    editor = monaco.editor.create(document.getElementById('${this._editorInnerContainer}'), Object.assign({
                        value: value,
                        language: '${this.language}',
                        theme: '${this._theme}',
                    }, ${JSON.stringify(this.editorOptions)}));
                    editor.getModel().onDidChangeContent( (e)=> {
                        ipcRenderer.sendToHost("onEditorContentChange", editor.getValue());
                    });
                    editor.addAction({
                      // An unique identifier of the contributed action.
                      id: 'fullScreen',
                      // A label of the action that will be presented to the user.
                      label: 'Full Screen',
                      // An optional array of keybindings for the action.
                      contextMenuGroupId: 'navigation',
                      keybindings: [${this._keycode}],
                      contextMenuOrder: 1.5,
                      // Method that will be executed when the action is triggered.
                      // @param editor The editor instance is passed in as a convinience
                      run: function(ed) {
                        var editorDiv = document.getElementById('${this._editorInnerContainer}');
                        editorDiv.webkitRequestFullscreen();
                      }
                    });
                    editor.addAction({
                      // An unique identifier of the contributed action.
                      id: 'exitfullScreen',
                      // A label of the action that will be presented to the user.
                      label: 'Exit Full Screen',
                      // An optional array of keybindings for the action.
                      contextMenuGroupId: 'navigation',
                      keybindings: [9],
                      contextMenuOrder: 1.5,
                      // Method that will be executed when the action is triggered.
                      // @param editor The editor instance is passed in as a convinience
                      run: function(ed) {
                        var editorDiv = document.getElementById('${this._editorInnerContainer}');
                        document.webkitExitFullscreen();
                      }
                    });
                    ipcRenderer.sendToHost("onEditorInitialized", this._editor);
                });

                // return back the value in the editor to the mainview
                ipcRenderer.on('getEditorContent', function(){
                    ipcRenderer.sendToHost("editorContent", editor.getValue());
                });

                // set the value of the editor from what was sent from the mainview
                ipcRenderer.on('setEditorContent', function(event, data){
                    value = data;
                    editor.setValue(data);
                });

                // set the style of the editor container div
                ipcRenderer.on('setEditorStyle', function(event, data){
                    var editorDiv = document.getElementById('${this._editorInnerContainer}');
                    editorDiv.style = data.style;
                    var currentValue = editor.getValue();
                    editor.dispose();
                    editor = monaco.editor.create(document.getElementById('${this._editorInnerContainer}'), Object.assign({
                        value: currentValue,
                        language: data.language,
                        theme: data.theme,
                    }, ${JSON.stringify(this.editorOptions)}));
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
                    editor = monaco.editor.create(document.getElementById('${this._editorInnerContainer}'), Object.assign({
                        value: currentValue,
                        language: data,
                        theme: theme,
                    }, ${JSON.stringify(this.editorOptions)}));
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

                // Instruct the editor to remeasure its container
                ipcRenderer.on('layout', function(){
                    editor.layout();
                });

                // Instruct the editor go to full screen mode
                ipcRenderer.on('showFullScreenEditor', function() {
                  var editorDiv = document.getElementById('${this._editorInnerContainer}');
                  editorDiv.webkitRequestFullscreen();
                });

                // Instruct the editor exit full screen mode
                ipcRenderer.on('exitFullScreenEditor', function() {
                  var editorDiv = document.getElementById('${this._editorInnerContainer}');
                  editorDiv.webkitExitFullscreen();
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
              this._fromEditor = true;
              this.writeValue(event.args[0]);
              this._subject.next(this._value);
              this._subject.complete();
              this._subject = new Subject();
            } else if (event.channel === 'onEditorContentChange') {
              this._fromEditor = true;
              this.writeValue(event.args[0]);
              if (this.initialContentChange) {
                this.initialContentChange = false;
                this.layout();
            }
            } else if (event.channel === 'onEditorInitialized') {
              this._componentInitialized = true;
              this._editorProxy = this.wrapEditorCalls(this._editor);
              this.onEditorInitialized.emit(this._editorProxy);
            } else if (event.channel === 'onEditorConfigurationChanged') {
              this.onEditorConfigurationChanged.emit(undefined);
            } else if (event.channel === 'onEditorLanguageChanged') {
              this.onEditorLanguageChanged.emit(undefined);
            }
        });

        // append the webview to the DOM
        this._editorContainer.nativeElement.appendChild(this._webview);
    }
  }

  /**
   * ngAfterViewInit only used for browser version of editor
   * This is where the AMD Loader scripts are added to the browser and the editor scripts are "required"
   */
  ngAfterViewInit(): void {
    if (!this._isElectronApp) {
        if (loadedMonaco) {
            // Wait until monaco editor is available
            this.waitForMonaco().then(() => {
                this.initMonaco();
            });
        } else {
            loadedMonaco = true;
            loadPromise = new Promise<void>((resolve: any) => {
                if (typeof((<any>window).monaco) === 'object') {
                    resolve();
                    return;
                }
                let onGotAmdLoader: any = () => {
                    // Load monaco
                    (<any>window).require.config({ paths: { 'vs': 'assets/monaco/vs' } });
                    (<any>window).require(['vs/editor/editor.main'], () => {
                        this.initMonaco();
                        resolve();
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
            });
        }
    }
  }

  ngOnDestroy(): void {
    this._changeDetectorRef.detach();
  }

  /**
   * waitForMonaco method Returns promise that will be fulfilled when monaco is available
   */
  waitForMonaco(): Promise<void> {
    return loadPromise;
  }

 /**
  * showFullScreenEditor request for full screen of Code Editor based on its browser type.
  */
  public showFullScreenEditor(): void {
    if (this._componentInitialized) {
      if (this._webview) {
        this._webview.send('showFullScreenEditor');
      } else {
        const codeEditorElement: HTMLDivElement = this._editorContainer.nativeElement as HTMLDivElement;
        const fullScreenMap: Object = {
          // Chrome
          'requestFullscreen': () => codeEditorElement.requestFullscreen(),
          // Safari
          'webkitRequestFullscreen': () => (<any>codeEditorElement).webkitRequestFullscreen(),
          // IE
          'msRequestFullscreen': () => (<any>codeEditorElement).msRequestFullscreen(),
          // Firefox
          'mozRequestFullScreen': () => (<any>codeEditorElement).mozRequestFullScreen(),
        };

        for (const handler of Object.keys(fullScreenMap)) {
          if (codeEditorElement[handler]) {
              fullScreenMap[handler]();
          }
        }
      }
    }
    this._isFullScreen = true;
  }

  /**
   * exitFullScreenEditor request to exit full screen of Code Editor based on its browser type.
   */
  public exitFullScreenEditor(): void {
    if (this._componentInitialized) {
      if (this._webview) {
        this._webview.send('exitFullScreenEditor');
      } else {
        const exitFullScreenMap: object = {
          // Chrome
          'exitFullscreen': () => document.exitFullscreen(),
          // Safari
          'webkitExitFullscreen': () => (<any>document).webkitExitFullscreen(),
          // Firefox
          'mozCancelFullScreen': () => (<any>document).mozCancelFullScreen(),
          // IE
          'msExitFullscreen': () => (<any>document).msExitFullscreen(),
        };

        for (const handler of Object.keys(exitFullScreenMap)) {
          if (document[handler]) {
              exitFullScreenMap[handler]();
          }
        }
      }
    }
    this._isFullScreen = false;
  }

  /**
   * addFullScreenModeCommand used to add the fullscreen option to the context menu
   */
  private addFullScreenModeCommand(): void {
    this._editor.addAction({
      // An unique identifier of the contributed action.
      id: 'fullScreen',
      // A label of the action that will be presented to the user.
      label: 'Full Screen',
      // An optional array of keybindings for the action.
      contextMenuGroupId: 'navigation',
      keybindings: this._keycode,
      contextMenuOrder: 1.5,
      // Method that will be executed when the action is triggered.
      // @param editor The editor instance is passed in as a convinience
      run: (ed: any) => {
        this.showFullScreenEditor();
      },
    });
  }

  /**
   * wrapEditorCalls used to proxy all the calls to the monaco editor
   * For calls for Electron use this to call the editor inside the webview
   */
  private wrapEditorCalls(obj: any): any {
    let that: any = this;
    let handler: any = {
      get(target: any, propKey: any, receiver: any): any {
        return async (...args: any): Promise<any> => {
          if (that._componentInitialized) {
            if (that._webview) {
              const executeJavaScript: Function = (code: string) =>
                new Promise((resolve: any) => {
                  that._webview.executeJavaScript(code, resolve);
                });
              let result: any = await executeJavaScript('editor.' + propKey + '(' + args + ')');
              return result;
            } else {
              const origMethod: any = target[propKey];
              let result: any = await origMethod.apply(that._editor, args);
              // since running javascript code manually need to force Angular to detect changes
              setTimeout(() => {
                that.zone.run(() => {
                    // tslint:disable-next-line
                    if (!that._changeDetectorRef['destroyed']) {
                        that._changeDetectorRef.detectChanges();
                    }
                });
              });
              return result;
            }
          }
        };
      },
    };
    return new Proxy(obj, handler);
  }

  /**
   * initMonaco method creates the monaco editor into the @ViewChild('editorContainer')
   * and emit the onEditorInitialized event.  This is only used in the browser version.
   */
  private initMonaco(): void {
    let containerDiv: HTMLDivElement = this._editorContainer.nativeElement;
    containerDiv.id = this._editorInnerContainer;
    this._editor = monaco.editor.create(containerDiv, Object.assign({
        value: this._value,
        language: this.language,
        theme: this._theme,
        automaticLayout: this._automaticLayout,
    }, this.editorOptions));
    setTimeout(() => {
        this._editorProxy = this.wrapEditorCalls(this._editor);
        this._componentInitialized = true;
        this.onEditorInitialized.emit(this._editorProxy);
    });
    this._editor.getModel().onDidChangeContent( (e: any) => {
        this._fromEditor = true;
        this.writeValue(this._editor.getValue());
        if (this.initialContentChange) {
            this.initialContentChange = false;
            this.layout();
        }
    });
    // need to manually resize the editor any time the window size
    // changes. See: https://github.com/Microsoft/monaco-editor/issues/28
    window.addEventListener('resize', () => {
        this.layout();
    });
    this.addFullScreenModeCommand();
  }

}
