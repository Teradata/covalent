import { Component, Input, AfterViewInit, ViewChild, ElementRef, forwardRef, NgZone } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import * as EasyMDE from 'easymde';
// get access to the marked class under easymde
import * as marked from 'marked';

const noop: any = () => {
  // empty method
};

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
export class TdTextEditorComponent implements AfterViewInit, ControlValueAccessor {
  private _value: string = '';
  private _easyMDE: any;
  private _fromEditor: boolean = false;

  @ViewChild('easymde', { static: true }) textarea: ElementRef;
  @Input() options: any = {};

  constructor(private _zone: NgZone) {}

  /* tslint:disable-next-line */
  propagateChange = (_: any) => {};
  onTouched = () => noop;

  /**
   * value?: string
   * Value in the Editor after async getEditorContent was called
   */
  @Input('value')
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

  get easyMDE(): any {
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
    this._easyMDE.codemirror.on('change', () => {
      this._fromEditor = true;
      this.writeValue(this._easyMDE.value());
    });
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
    this._easyMDE.toggleBold();
  }

  toggleItalic(): void {
    this._easyMDE.toggleItalic();
  }

  toggleStrikethrough(): void {
    this._easyMDE.toggleStrikethrough();
  }

  toggleHeadingSmaller(): void {
    this._easyMDE.toggleHeadingSmaller();
  }

  toggleHeadingBigger(): void {
    this._easyMDE.toggleHeadingBigger();
  }

  toggleHeading1(): void {
    this._easyMDE.toggleHeading1();
  }

  toggleHeading2(): void {
    this._easyMDE.toggleHeading2();
  }

  toggleHeading3(): void {
    this._easyMDE.toggleHeading3();
  }

  toggleCodeBlock(): void {
    this._easyMDE.toggleCodeBlock();
  }

  toggleBlockquote(): void {
    this._easyMDE.toggleBlockquote();
  }

  toggleUnorderedList(): void {
    this._easyMDE.toggleUnorderedList();
  }

  toggleOrderedList(): void {
    this._easyMDE.toggleOrderedList();
  }

  cleanBlock(): void {
    this._easyMDE.cleanBlock();
  }

  drawLink(): void {
    this._easyMDE.drawLink();
  }

  drawImage(): void {
    this._easyMDE.drawImage();
  }

  drawTable(): void {
    this._easyMDE.drawTable();
  }

  drawHorizontalRule(): void {
    this._easyMDE.drawHorizontalRule();
  }

  togglePreview(): void {
    this._easyMDE.togglePreview();
  }

  toggleSideBySide(): void {
    this._easyMDE.toggleSideBySide();
  }

  toggleFullScreen(): void {
    this._easyMDE.toggleFullScreen();
  }
}
