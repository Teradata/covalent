import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  ViewChild,
  ElementRef,
  forwardRef,
  ChangeDetectorRef,
  OnDestroy,
  NgZone,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Observable, of, Subject } from 'rxjs';
import { fromEvent, merge, timer } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

// Use esm version to support shipping subset of languages and features
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import {
  mixinControlValueAccessor,
  mixinDisabled,
} from '@covalent/core/common';

const noop = () => {
  // empty method
};

// counter for ids to allow for multiple editors on one page
let uniqueCounter = 0;

export class TdCodeEditorBase {
  constructor(public _changeDetectorRef: ChangeDetectorRef) {}
}

export const _TdCodeEditorMixinBase = mixinControlValueAccessor(
  mixinDisabled(TdCodeEditorBase),
  []
);

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
export class TdCodeEditorComponent
  extends _TdCodeEditorMixinBase
  implements OnInit, ControlValueAccessor, OnDestroy
{
  private _destroy: Subject<boolean> = new Subject<boolean>();
  private _widthSubject: Subject<number> = new Subject<number>();
  private _heightSubject: Subject<number> = new Subject<number>();

  private _editorStyle = 'width:100%;height:100%;';
  private _value = '';
  private _theme = 'vs';
  private _language = 'javascript';
  private _subject: Subject<string> = new Subject();
  private _editorInnerContainer: string =
    'editorInnerContainer' + uniqueCounter++;
  private _editor!: monaco.editor.IStandaloneCodeEditor;
  private _fromEditor = false;
  private _componentInitialized = false;
  private _editorOptions: any = {};
  private _isFullScreen = false;
  private _keycode: any;
  private _registeredLanguagesStyles: HTMLStyleElement[] = [];
  private _disposables: monaco.IDisposable[] = [];

  @ViewChild('editorContainer', { static: true }) _editorContainer!: ElementRef;

  /**
   * editorInitialized: function($event)
   * Event emitted when editor is first initialized
   */
  @Output()
  editorInitialized: EventEmitter<monaco.editor.IStandaloneCodeEditor> = new EventEmitter<monaco.editor.IStandaloneCodeEditor>();

  /**
   * editorConfigurationChanged: function($event)
   * Event emitted when editor's configuration changes
   */
  @Output() editorConfigurationChanged: EventEmitter<void> =
    new EventEmitter<void>();

  /**
   * editorLanguageChanged: function($event)
   * Event emitted when editor's Language changes
   */
  @Output() editorLanguageChanged: EventEmitter<void> =
    new EventEmitter<void>();

  /**
   * editorValueChange: function($event)
   * Event emitted any time something changes the editor value
   */
  @Output() editorValueChange: EventEmitter<void> = new EventEmitter<void>();

  propagateChange = (_: any) => noop;

  /**
   * value?: string
   */
  @Input()
  override set value(value: string) {
    this._value = value;

    if (this._componentInitialized) {
      this.applyValue();
    }
  }
  override get value(): string {
    return this._value;
  }

  applyValue(): void {
    if (!this._fromEditor) {
      this._editor.setValue(this._value);
    }
    this._fromEditor = false;
    this.propagateChange(this._value);
    this.editorValueChange.emit();
  }

  override registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  override registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /**
   * getEditorContent?: function
   * Returns the content within the editor
   */
  getValue(): Observable<string> {
    if (!this._componentInitialized) {
      return of('');
    }
    setTimeout(() => {
      this._subject.next(this._value);
      this._subject.complete();
      this._subject = new Subject();
    });
    return this._subject.asObservable();
  }

  /**
   * language?: string
   * language used in editor
   */
  @Input()
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
      monaco.editor.setModelLanguage(
        this._editor.getModel() as monaco.editor.ITextModel,
        this._language
      );
      this.editorLanguageChanged.emit();
    }
  }

  /**
   * registerLanguage?: function
   * Registers a custom Language within the editor
   */
  registerLanguage(language: any): void {
    if (this._componentInitialized) {
      monaco.languages.register({ id: language.id });

      this._disposables.push(
        monaco.languages.setMonarchTokensProvider(language.id, {
          tokenizer: {
            root: language.monarchTokensProvider,
          },
        })
      );

      // Define a new theme that constains only rules that match this language
      monaco.editor.defineTheme(
        language.customTheme.id,
        language.customTheme.theme
      );
      this._theme = language.customTheme.id;

      this._disposables.push(
        monaco.languages.registerCompletionItemProvider(language.id, {
          provideCompletionItems: () => {
            return language.completionItemProvider;
          },
        })
      );

      const css: HTMLStyleElement = document.createElement('style');
      css.type = 'text/css';
      css.innerHTML = language.monarchTokensProviderCSS;
      document.body.appendChild(css);
      this.editorConfigurationChanged.emit();
      this._registeredLanguagesStyles = [
        ...this._registeredLanguagesStyles,
        css,
      ];
    }
  }

  /**
   * style?: string
   * css style of the editor on the page
   */
  @Input()
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
  @Input()
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
  @Input()
  set fullScreenKeyBinding(keycode: number[]) {
    this._keycode = keycode;
  }
  get fullScreenKeyBinding(): number[] {
    return this._keycode;
  }

  /**
   * editorOptions?: object
   * Options used on editor instantiation. Available options listed here:
   * https://microsoft.github.io/monaco-editor/api/interfaces/editor.ieditoroptions.html
   */
  @Input()
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
  constructor(
    _changeDetectorRef: ChangeDetectorRef,
    private _elementRef: ElementRef<HTMLElement>,
    private _ngZone: NgZone,
    @Inject(PLATFORM_ID) private platformId: string
  ) {
    super(_changeDetectorRef);
  }

  ngOnInit(): void {
    if (isPlatformServer(this.platformId)) {
      return;
    }

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
        this.editorOptions
      )
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
    // The `onDidChangeContent` returns a disposable object (an object with `dispose()` method) which will cleanup
    // the listener. The callback, that we pass to `onDidChangeContent`, captures `this`. This leads to a circular reference
    // (`td-code-editor -> monaco -> td-code-editor`) and prevents the `td-code-editor` from being GC'd.
    this._disposables.push(
      (this._editor.getModel() as monaco.editor.ITextModel).onDidChangeContent(
        () => {
          this._fromEditor = true;
          this.writeValue(this._editor.getValue());
          this.layout();
        }
      )
    );
    this.addFullScreenModeCommand();

    this._ngZone.runOutsideAngular(() =>
      merge(
        fromEvent(window, 'resize').pipe(debounceTime(100)),
        this._widthSubject.asObservable().pipe(distinctUntilChanged()),
        this._heightSubject.asObservable().pipe(distinctUntilChanged())
      )
        .pipe(debounceTime(100), takeUntil(this._destroy))
        .subscribe(() => {
          // Note: this is being called outside of the Angular zone since we don't have to
          // run change detection whenever the editor resizes itself.
          this.layout();
        })
    );
    this._ngZone.runOutsideAngular(() =>
      timer(500, 250)
        .pipe(takeUntil(this._destroy))
        .subscribe(() => {
          const { width, height } =
            this._elementRef.nativeElement.getBoundingClientRect();
          this._widthSubject.next(width);
          this._heightSubject.next(height);
        })
    );
  }

  ngOnDestroy(): void {
    this._changeDetectorRef.detach();
    this._registeredLanguagesStyles.forEach((style: HTMLStyleElement) =>
      style.remove()
    );
    while (this._disposables.length) {
      this._disposables.pop()?.dispose();
    }
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
      const codeEditorElement: HTMLDivElement = this._editorContainer
        .nativeElement as HTMLDivElement;
      codeEditorElement.requestFullscreen();
    }
    this._isFullScreen = true;
  }

  /**
   * exitFullScreenEditor request to exit full screen of Code Editor based on its browser type.
   */
  public exitFullScreenEditor(): void {
    if (this._componentInitialized) {
      document.exitFullscreen();
    }
    this._isFullScreen = false;
  }

  /**
   * addFullScreenModeCommand used to add the fullscreen option to the context menu
   */
  private addFullScreenModeCommand(): void {
    this._disposables.push(
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
        run: () => {
          this.showFullScreenEditor();
        },
      })
    );
  }
}
