import {
  Component,
  Input,
  Output,
  EventEmitter,
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

const noop: any = () => {
  // empty method
};

// counter for ids to allow for multiple editors on one page
let uniqueCounter: number = 0;
import * as monaco from 'monaco-editor';

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
export class TdCodeEditorComponent implements AfterViewInit, ControlValueAccessor, OnDestroy {
  _destroy: Subject<boolean> = new Subject<boolean>();
  _widthSubject: Subject<number> = new Subject<number>();
  _heightSubject: Subject<number> = new Subject<number>();

  _editorStyle: string = 'width:100%;height:100%;border:1px solid grey;';
  _value: string = '';
  _theme: string = 'vs';
  _language: string = 'javascript';
  _subject: Subject<string> = new Subject();
  _editorInnerContainer: string = 'editorInnerContainer' + uniqueCounter++;
  _editor: any;
  _editorProxy: any;
  _componentInitialized: boolean = false;
  _fromEditor: boolean = false;
  _editorOptions: any = {};
  _isFullScreen: boolean = false;
  _keycode: any;
  _setValueTimeout: any;
  _setLanguageTimeout: any;
  initialContentChange: boolean = true;
  _registeredLanguagesStyles: HTMLStyleElement[] = [];

  @ViewChild('editorContainer', { static: true }) _editorContainer: ElementRef;

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
   * value?: string
   * Value in the Editor after async getEditorContent was called
   */
  @Input('value')
  set value(value: string) {
    if (value === this._value) {
      return;
    }

    // Clear any timeout that might overwrite this value set in the future
    if (this._setValueTimeout) {
      clearTimeout(this._setValueTimeout);
    }
    if (this._componentInitialized && this._editor && this._editor.setValue) {
      this._value = value;
      // don't want to keep sending content if event came from the editor, infinite loop
      if (!this._fromEditor) {
        this._editor.setValue(value);
      }
      this.editorValueChange.emit();
      this.propagateChange(this._value);
      this.change.emit();
      this._fromEditor = false;
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
    if (this._componentInitialized && this._editor) {
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

  /**
   * language?: string
   * language used in editor
   */
  @Input('language')
  set language(language: string) {
    if (language === this._language) {
      return;
    }

    // Clear any timeout that might overwrite this language set in the future
    if (this._setLanguageTimeout) {
      clearTimeout(this._setLanguageTimeout);
    }
    if (this._componentInitialized && this._editor) {
      const currentValue: string = this._editor.getValue();
      this._editor.getModel().dispose();
      this._editor.dispose();
      this._editor = undefined;

      this._language = language;
      const containerDiv: HTMLDivElement = this._editorContainer.nativeElement;
      this._editor = monaco.editor.create(
        containerDiv,
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
      this.editorConfigurationChanged.emit();
      this.editorLanguageChanged.emit();
    } else {
      this._setLanguageTimeout = setTimeout(() => {
        this.language = language;
      }, 500);
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
    if (this._componentInitialized && this._editor) {
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

  /**
   * style?: string
   * css style of the editor on the page
   */
  @Input('editorStyle')
  set editorStyle(editorStyle: string) {
    if (editorStyle === this._editorStyle) {
      return;
    }

    if (this._componentInitialized && this._editor) {
      const currentValue: string = this._editor.getValue();
      this._editor.getModel().dispose();
      this._editor.dispose();
      this._editor = undefined;

      this._editorStyle = editorStyle;
      const containerDiv: HTMLDivElement = this._editorContainer.nativeElement;
      containerDiv.setAttribute('style', this._editorStyle);
      this._editor = monaco.editor.create(
        containerDiv,
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
    if (this._componentInitialized && this._editor) {
      this._editor.updateOptions({ theme });
      this.editorConfigurationChanged.emit();
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
    if (this._componentInitialized && this._editor) {
      this._editor.updateOptions(editorOptions);
      this.editorConfigurationChanged.emit();
    }
  }
  get editorOptions(): any {
    return this._editorOptions;
  }

  /**
   * layout method that calls layout method of editor and instructs the editor to remeasure its container
   */
  layout(): void {
    if (this._componentInitialized && this._editor) {
      this._editor.layout();
    }
  }

  /**
   * Returns if in Full Screen Mode or not
   */
  get isFullScreen(): boolean {
    return this._isFullScreen;
  }

  // tslint:disable-next-line:member-ordering
  constructor(private zone: NgZone, private _changeDetectorRef: ChangeDetectorRef, private _elementRef: ElementRef) {}

  /**
   * ngAfterViewInit only used for browser version of editor
   */
  ngAfterViewInit(): void {
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
    if (this._setValueTimeout) {
      clearTimeout(this._setValueTimeout);
    }
    if (this._setLanguageTimeout) {
      clearTimeout(this._setLanguageTimeout);
    }
    if (this._editor) {
      this._editor.getModel().dispose();
      this._editor.dispose();
      this._editor = undefined;
    }
    this._destroy.next(true);
    this._destroy.unsubscribe();
  }

  /**
   * showFullScreenEditor request for full screen of Code Editor based on its browser type.
   */
  public showFullScreenEditor(): void {
    if (this._componentInitialized) {
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
    this._isFullScreen = true;
  }

  /**
   * exitFullScreenEditor request to exit full screen of Code Editor based on its browser type.
   */
  public exitFullScreenEditor(): void {
    if (this._componentInitialized) {
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
    this._isFullScreen = false;
  }

  /**
   * addFullScreenModeCommand used to add the fullscreen option to the context menu
   */
  addFullScreenModeCommand(): void {
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
}
