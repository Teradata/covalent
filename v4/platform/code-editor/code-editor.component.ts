import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
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

// Use esm version to support shipping subset of languages and features
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

const noop: any = () => {
  // empty method
};

// counter for ids to allow for multiple editors on one page
let uniqueCounter: number = 0;

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
export class TdCodeEditorComponent implements OnInit, ControlValueAccessor, OnDestroy {
  private _destroy: Subject<boolean> = new Subject<boolean>();
  private _widthSubject: Subject<number> = new Subject<number>();
  private _heightSubject: Subject<number> = new Subject<number>();

  private _editorStyle: string = 'width:100%;height:100%;border:1px solid grey;';
  private _value: string = '';
  private _theme: string = 'vs';
  private _language: string = 'javascript';
  private _subject: Subject<string> = new Subject();
  private _editorInnerContainer: string = 'editorInnerContainer' + uniqueCounter++;
  private _editor: any;
  private _fromEditor: boolean = false;
  private _componentInitialized: boolean = false;
  private _editorOptions: any = {};
  private _isFullScreen: boolean = false;
  private _keycode: any;
  private _registeredLanguagesStyles: HTMLStyleElement[] = [];

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
   */
  @Input('value')
  set value(value: string) {
    if (value === this._value) {
      return;
    }
    this._value = value;
    if (this._componentInitialized) {
      this.applyValue();
    }
  }

  get value(): string {
    return this._value;
  }

  applyValue(): void {
    if (!this._fromEditor) {
      this._editor.setValue(this._value);
    }
    this._fromEditor = false;
    this.propagateChange(this._value);
    this.change.emit();
    this.editorValueChange.emit();
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
      setTimeout(() => {
        this._subject.next(this._value);
        this._subject.complete();
        this._subject = new Subject();
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
    this._language = language;
    if (this._componentInitialized) {
      this.applyLanguage();
    }
  }

  get language(): string {
    return this._language;
  }

  applyLanguage(): void {
    if (this._language) {
      monaco.editor.setModelLanguage(this._editor.getModel(), this._language);
      this.editorLanguageChanged.emit();
    }
  }

  /**
   * registerLanguage?: function
   * Registers a custom Language within the editor
   */
  registerLanguage(language: any): void {
    if (this._componentInitialized) {
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
    this._editorStyle = editorStyle;
    if (this._componentInitialized) {
      this.applyStyle();
    }
  }

  get editorStyle(): string {
    return this._editorStyle;
  }

  applyStyle(): void {
    if (this._editorStyle) {
      const containerDiv: HTMLDivElement = this._editorContainer.nativeElement;
      containerDiv.setAttribute('style', this._editorStyle);
    }
  }

  /**
   * theme?: string
   * Theme to be applied to editor
   */
  @Input('theme')
  set theme(theme: string) {
    this._theme = theme;
    if (this._componentInitialized) {
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
    if (this._componentInitialized) {
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
    if (this._componentInitialized) {
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

  ngOnInit(): void {
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
    this._componentInitialized = true;
    setTimeout(() => {
      this.applyLanguage();
      this._fromEditor = true;
      this.applyValue();
      this.applyStyle();
      this.editorInitialized.emit(this._editor);
      this.editorConfigurationChanged.emit();
    });
    this._editor.getModel().onDidChangeContent((e: any) => {
      this._fromEditor = true;
      this.writeValue(this._editor.getValue());
      this.layout();
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
    if (this._editor) {
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
}
