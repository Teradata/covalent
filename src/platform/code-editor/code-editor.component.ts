import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  forwardRef,
  NgZone,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { fromEvent, merge, timer } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

import { waitUntilMonacoReady, loadMonaco } from './code-editor.utils';

const noop: any = () => {
  // empty method
};

// counter for ids to allow for multiple editors on one page
let uniqueCounter: number = 0;
// declare all the built in electron objects
declare const electron: any;
declare const monaco: any;

@Component({
  selector: 'td-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TdCodeEditorComponent),
      multi: true,
    },
  ],
})
export class TdCodeEditorComponent implements OnInit, AfterViewInit, ControlValueAccessor, OnDestroy {
  private _destroy: Subject<boolean> = new Subject<boolean>();
  private _widthSubject: Subject<number> = new Subject<number>();
  private _heightSubject: Subject<number> = new Subject<number>();

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
  private _editorProxy: any;
  private _componentInitialized: boolean = false;
  private _fromEditor: boolean = false;
  private _editorOptions: any = {};
  private _isFullScreen: boolean = false;
  private _keycode: any;
  private _setValueTimeout: any;
  private initialContentChange: boolean = true;
  private _registeredLanguagesStyles: HTMLStyleElement[] = [];
  @ViewChild('editorContainer', { static: true }) _editorContainer: ElementRef;

  /**
   * automaticLayout?: boolean
   * @deprecated in favor of our own resize implementation.
   */
  @Input('automaticLayout')
  set automaticLayout(automaticLayout: boolean) {
    // tslint:disable-next-line
    console.warn(
      '[automaticLayout] has been deprecated in favor of our own resize implementation and will be removed on 3.0.0',
    );
  }

  /**
   * editorInitialized: function($event)
   * Event emitted when editor is first initialized
   */
  @Output() editorInitialized: EventEmitter<void> = new EventEmitter<void>();

  /**
   * editorConfigurationChanged: function($event)
   * Event emitted when editor's configuration changes
   */
  @Output() editorConfigurationChanged: EventEmitter<void> = new EventEmitter<void>();

  /**
   * editorLanguageChanged: function($event)
   * Event emitted when editor's Language changes
   */
  @Output() editorLanguageChanged: EventEmitter<void> = new EventEmitter<void>();

  /**
   * editorValueChange: function($event)
   * Event emitted any time something changes the editor value
   */
  @Output() editorValueChange: EventEmitter<void> = new EventEmitter<void>();

  /**
   * The change event notifies you about a change happening in an input field.
   * Since the component is not a native Angular component have to specifiy the event emitter ourself
   */
  @Output() change: EventEmitter<void> = new EventEmitter<void>();
  /* tslint:disable-next-line */
  propagateChange = (_: any) => {};
  onTouched = () => noop;

  /**
   * Set if using Electron mode when object is created
   */
  constructor(private zone: NgZone, private _changeDetectorRef: ChangeDetectorRef, private _elementRef: ElementRef) {
    // since accessing the window object need this check so serverside rendering doesn't fail
    if (typeof document === 'object' && !!document) {
      /* tslint:disable-next-line */
      this._isElectronApp = (<any>window)['process'] ? true : false;
      if (this._isElectronApp) {
        this._appPath = electron.remote.app
          .getAppPath()
          .split('\\')
          .join('/');
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
          this.editorValueChange.emit();
          this.propagateChange(this._value);
          this.change.emit();
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
          this.editorValueChange.emit();
          this.propagateChange(this._value);
          this.change.emit();
          this._fromEditor = false;
          this.zone.run(() => (this._value = value));
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
    if (value != undefined) {
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
      } else if (this._editor) {
        this._value = this._editor.getValue();
        setTimeout(() => {
          this._subject.next(this._value);
          this._subject.complete();
          this._subject = new Subject();
          this.editorValueChange.emit();
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
      } else if (this._editor) {
        const currentValue: string = this._editor.getValue();
        this._editor.dispose();
        const myDiv: HTMLDivElement = this._editorContainer.nativeElement;
        this._editor = monaco.editor.create(
          myDiv,
          Object.assign(
            {
              value: currentValue,
              language,
              theme: this._theme,
            },
            this.editorOptions,
          ),
        );
        this._editor.getModel().onDidChangeContent((e: any) => {
          this._fromEditor = true;
          this.writeValue(this._editor.getValue());
        });
        this.editorConfigurationChanged.emit();
        this.editorLanguageChanged.emit();
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
      } else if (this._editor) {
        this._editor.dispose();

        for (const provider of language.completionItemProvider) {
          /* tslint:disable-next-line */
          provider.kind = eval(provider.kind);
        }
        for (const monarchTokens of language.monarchTokensProvider) {
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

        const css: HTMLStyleElement = document.createElement('style');
        css.type = 'text/css';
        css.innerHTML = language.monarchTokensProviderCSS;
        document.body.appendChild(css);
        this.editorConfigurationChanged.emit();
        this._registeredLanguagesStyles = [...this._registeredLanguagesStyles, css];
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
        this._webview.send('setEditorStyle', { language: this._language, theme: this._theme, style: editorStyle });
      } else if (this._editor) {
        const containerDiv: HTMLDivElement = this._editorContainer.nativeElement;
        containerDiv.setAttribute('style', editorStyle);
        const currentValue: string = this._editor.getValue();
        this._editor.dispose();
        const myDiv: HTMLDivElement = this._editorContainer.nativeElement;
        this._editor = monaco.editor.create(
          myDiv,
          Object.assign(
            {
              value: currentValue,
              language: this._language,
              theme: this._theme,
            },
            this.editorOptions,
          ),
        );
        this._editor.getModel().onDidChangeContent((e: any) => {
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
        this._webview.send('setEditorOptions', { theme });
      } else if (this._editor) {
        this._editor.updateOptions({ theme });
        this.editorConfigurationChanged.emit();
      }
    }
  }
  get theme(): string {
    return this._theme;
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
   * editorOptions?: object
   * Options used on editor instantiation. Available options listed here:
   * https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.ieditoroptions.html
   */
  @Input('editorOptions')
  set editorOptions(editorOptions: any) {
    this._editorOptions = editorOptions;
    if (this._componentInitialized) {
      if (this._webview) {
        this._webview.send('setEditorOptions', editorOptions);
      } else if (this._editor) {
        this._editor.updateOptions(editorOptions);
        this.editorConfigurationChanged.emit();
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
      } else if (this._editor) {
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
                var registeredLanguagesStyles = [];

                require.config({
                    baseUrl: '${this._appPath}/assets/monaco'
                });
                self.module = undefined;
                self.process.browser = true;

                require(['vs/editor/editor.main'], function() {
                    editor = monaco.editor.create(document.getElementById('${
                      this._editorInnerContainer
                    }'), Object.assign({
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
                    ipcRenderer.sendToHost("editorInitialized", this._editor);
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
                    editor = monaco.editor.create(document.getElementById('${
                      this._editorInnerContainer
                    }'), Object.assign({
                        value: currentValue,
                        language: data.language,
                        theme: data.theme,
                    }, ${JSON.stringify(this.editorOptions)}));
                });

                // set the options of the editor from what was sent from the mainview
                ipcRenderer.on('setEditorOptions', function(event, data){
                    editor.updateOptions(data);
                    ipcRenderer.sendToHost("editorConfigurationChanged", '');
                });

                // set the language of the editor from what was sent from the mainview
                ipcRenderer.on('setLanguage', function(event, data){
                    var currentValue = editor.getValue();
                    editor.dispose();
                    editor = monaco.editor.create(document.getElementById('${
                      this._editorInnerContainer
                    }'), Object.assign({
                        value: currentValue,
                        language: data,
                        theme: theme,
                    }, ${JSON.stringify(this.editorOptions)}));
                    ipcRenderer.sendToHost("editorConfigurationChanged", '');
                    ipcRenderer.sendToHost("editorLanguageChanged", '');
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
                    registeredLanguagesStyles = [...registeredLanguagesStyles, css];


                    ipcRenderer.sendToHost("editorConfigurationChanged", '');
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

                ipcRenderer.on('dispose', function(){
                  editor.dispose();
                  registeredLanguagesStyles.forEach((style) => style.remove());
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
      // to debug:
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
        } else if (event.channel === 'editorInitialized') {
          this._componentInitialized = true;
          this._editorProxy = this.wrapEditorCalls(this._editor);
          this.editorInitialized.emit(this._editorProxy);
        } else if (event.channel === 'editorConfigurationChanged') {
          this.editorConfigurationChanged.emit();
        } else if (event.channel === 'editorLanguageChanged') {
          this.editorLanguageChanged.emit();
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
      loadMonaco();
      waitUntilMonacoReady()
        .pipe(takeUntil(this._destroy))
        .subscribe(() => {
          this.initMonaco();
        });
    }
    merge(
      fromEvent(window, 'resize').pipe(debounceTime(100)),
      this._widthSubject.asObservable().pipe(distinctUntilChanged()),
      this._heightSubject.asObservable().pipe(distinctUntilChanged()),
    )
      .pipe(takeUntil(this._destroy), debounceTime(100))
      .subscribe(() => {
        this.layout();
        this._changeDetectorRef.markForCheck();
      });
    timer(500, 250)
      .pipe(takeUntil(this._destroy))
      .subscribe(() => {
        if (this._elementRef && this._elementRef.nativeElement) {
          this._widthSubject.next((<HTMLElement>this._elementRef.nativeElement).getBoundingClientRect().width);
          this._heightSubject.next((<HTMLElement>this._elementRef.nativeElement).getBoundingClientRect().height);
        }
      });
  }

  ngOnDestroy(): void {
    this._changeDetectorRef.detach();
    this._registeredLanguagesStyles.forEach((style: HTMLStyleElement) => style.remove());
    if (this._webview) {
      this._webview.send('dispose');
    } else if (this._editor) {
      this._editor.dispose();
    }
    this._destroy.next(true);
    this._destroy.unsubscribe();
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
        const fullScreenMap: object = {
          // Chrome
          requestFullscreen: () => codeEditorElement.requestFullscreen(),
          // Safari
          webkitRequestFullscreen: () => (<any>codeEditorElement).webkitRequestFullscreen(),
          // IE
          msRequestFullscreen: () => (<any>codeEditorElement).msRequestFullscreen(),
          // Firefox
          mozRequestFullScreen: () => (<any>codeEditorElement).mozRequestFullScreen(),
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
          exitFullscreen: () => document.exitFullscreen(),
          // Safari
          webkitExitFullscreen: () => (<any>document).webkitExitFullscreen(),
          // Firefox
          mozCancelFullScreen: () => (<any>document).mozCancelFullScreen(),
          // IE
          msExitFullscreen: () => (<any>document).msExitFullscreen(),
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
    const that: any = this;
    const handler: any = {
      get(target: any, propKey: any, receiver: any): any {
        return async (...args: any): Promise<any> => {
          if (that._componentInitialized) {
            if (that._webview) {
              const executeJavaScript: (code: string) => Promise<any> = (code: string) =>
                new Promise((resolve: any) => {
                  that._webview.executeJavaScript(code, resolve);
                });
              return executeJavaScript('editor.' + propKey + '(' + args + ')');
            } else {
              const origMethod: any = target[propKey];
              const result: any = await origMethod.apply(that._editor, args);
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
   * and emit the editorInitialized event.  This is only used in the browser version.
   */
  private initMonaco(): void {
    const containerDiv: HTMLDivElement = this._editorContainer.nativeElement;
    containerDiv.id = this._editorInnerContainer;
    this._editor = monaco.editor.create(
      containerDiv,
      Object.assign(
        {
          value: this._value,
          language: this.language,
          theme: this._theme,
        },
        this.editorOptions,
      ),
    );
    setTimeout(() => {
      this._editorProxy = this.wrapEditorCalls(this._editor);
      this._componentInitialized = true;
      this.editorInitialized.emit(this._editorProxy);
    });
    this._editor.getModel().onDidChangeContent((e: any) => {
      this._fromEditor = true;
      this.writeValue(this._editor.getValue());
      if (this.initialContentChange) {
        this.initialContentChange = false;
        this.layout();
      }
    });
    this.addFullScreenModeCommand();
  }
}
