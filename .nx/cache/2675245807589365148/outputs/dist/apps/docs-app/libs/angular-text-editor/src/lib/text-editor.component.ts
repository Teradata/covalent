import {
  Component,
  Input,
  AfterViewInit,
  ViewChild,
  ElementRef,
  forwardRef,
  NgZone,
  OnDestroy,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { marked } from 'marked';

const noop: any = () => {
  // empty method
};

const EasyMDE = (window as any).EasyMDE;

@Component({
  selector: 'td-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TdTextEditorComponent),
      multi: true,
    },
  ],
})
export class TdTextEditorComponent
  implements AfterViewInit, OnDestroy, ControlValueAccessor
{
  private _value = '';
  private _easyMDE!: typeof EasyMDE;
  private _fromEditor = false;

  @ViewChild('easymde', { static: true }) textarea!: ElementRef;
  @Input() options: any = {};

  constructor(private _zone: NgZone) {}

  /* tslint:disable-next-line */
  propagateChange = (_: any) => noop;
  onTouched = () => noop;

  /**
   * value?: string
   * Value in the Editor after async getEditorContent was called
   */
  @Input()
  set value(value: string) {
    this._value = value;
    if (this._easyMDE) {
      if (!this._fromEditor) {
        this._easyMDE.value(value);
      }
      this.propagateChange(this._value);
      this._fromEditor = false;
      this._zone.run(() => (this._value = value));
    }
  }

  get value(): string {
    return this._value;
  }

  get easyMDE(): typeof EasyMDE {
    return this._easyMDE;
  }

  /**
   * Implemented as part of ControlValueAccessor.
   */
  writeValue(value: any): void {
    this.value = !value ? '' : value;
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngAfterViewInit(): void {
    this.options.element = this.textarea.nativeElement;

    // If content entered is html then don't evaluate it, prevent xss vulnerabilities
    marked.setOptions({ sanitize: true });
    this._easyMDE = new EasyMDE(this.options);
    this._easyMDE.value(this.value);
    this._easyMDE.codemirror.on('change', this._onChange);
  }

  ngOnDestroy(): void {
    this._easyMDE?.codemirror.off('change', this._onChange);
  }

  /* Wrapped function provided by EasyMDE */

  isPreviewActive(): boolean {
    return this._easyMDE.isPreviewActive();
  }

  isSideBySideActive(): boolean {
    return this._easyMDE.isSideBySideActive();
  }

  isFullscreenActive(): boolean {
    return this._easyMDE.isFullscreenActive();
  }

  clearAutosavedValue(): void {
    this._easyMDE.clearAutosavedValue();
  }

  toTextArea(): void {
    this._easyMDE.toTextArea();
  }

  toggleBold(): void {
    EasyMDE.toggleBold(this._easyMDE);
  }

  toggleItalic(): void {
    EasyMDE.toggleItalic(this._easyMDE);
  }

  toggleStrikethrough(): void {
    EasyMDE.toggleStrikethrough(this._easyMDE);
  }

  toggleHeadingSmaller(): void {
    EasyMDE.toggleHeadingSmaller(this._easyMDE);
  }

  toggleHeadingBigger(): void {
    EasyMDE.toggleHeadingBigger(this._easyMDE);
  }

  toggleHeading1(): void {
    EasyMDE.toggleHeading1(this._easyMDE);
  }

  toggleHeading2(): void {
    EasyMDE.toggleHeading2(this._easyMDE);
  }

  toggleHeading3(): void {
    EasyMDE.toggleHeading3(this._easyMDE);
  }

  toggleCodeBlock(): void {
    EasyMDE.toggleCodeBlock(this._easyMDE);
  }

  toggleBlockquote(): void {
    EasyMDE.toggleBlockquote(this._easyMDE);
  }

  toggleUnorderedList(): void {
    EasyMDE.toggleUnorderedList(this._easyMDE);
  }

  toggleOrderedList(): void {
    EasyMDE.toggleOrderedList(this._easyMDE);
  }

  cleanBlock(): void {
    EasyMDE.cleanBlock(this._easyMDE);
  }

  drawLink(): void {
    EasyMDE.drawLink(this._easyMDE);
  }

  drawImage(): void {
    EasyMDE.drawImage(this._easyMDE);
  }

  drawTable(): void {
    EasyMDE.drawTable(this._easyMDE);
  }

  drawHorizontalRule(): void {
    EasyMDE.drawHorizontalRule(this._easyMDE);
  }

  togglePreview(): void {
    EasyMDE.togglePreview(this._easyMDE);
  }

  toggleSideBySide(): void {
    EasyMDE.toggleSideBySide(this._easyMDE);
  }

  toggleFullScreen(): void {
    EasyMDE.toggleFullScreen(this._easyMDE);
  }

  private _onChange = (): void => {
    this._fromEditor = true;
    this.writeValue(this._easyMDE?.value());
  };
}
