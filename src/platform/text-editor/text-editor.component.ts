import { Component, Input, Output, EventEmitter, OnInit, AfterViewInit, ViewChild,
         ElementRef, forwardRef, ViewEncapsulation, NgZone, Inject } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import * as SimpleMDE from 'simplemde';
// get access to the marked class under simplemde
import * as marked from 'marked';
// using 'import * as' not working in Angular 5 for some reason
/* tslint:disable-next-line */
let SimpleMDECss = require('simplemde/dist/simplemde.min.css');

const noop: any = () => {
  // empty method
};

@Component({
  selector: 'td-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: [ './text-editor.component.scss' ],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TdTextEditorComponent),
    multi: true,
  }],
})
export class TdTextEditorComponent implements AfterViewInit, ControlValueAccessor {

  private _value: string = '';
  private _simpleMDE: any;
  private _fromEditor: boolean = false;

  @ViewChild('simplemde') textarea: ElementRef;
  @Input() options: any = {};

  constructor(private _elementRef: ElementRef,
              private _zone: NgZone,
              private _domSanitizer: DomSanitizer,
              @Inject(DOCUMENT) private _document: any) {}

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
    if (this._simpleMDE) {
      if (!this._fromEditor) {
        this._simpleMDE.value(value);
      }
      this.propagateChange(this._value);
      this._fromEditor = false;
      this._zone.run(() => this._value = value);
    }
  }

  get value(): string {
      return this._value;
  }

  get simpleMDE(): any {
    return this._simpleMDE;
  }

  /**
   * Implemented as part of ControlValueAccessor.
   */
  writeValue(value: any): void {
    this.value = (!value) ? '' : value;
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngAfterViewInit(): void {
    if (this._document) {
      let styleElement: HTMLElement = this._document.createElement('style');
      styleElement.innerHTML = <string>this._domSanitizer.bypassSecurityTrustHtml(String(SimpleMDECss));
      this._document.head.appendChild(styleElement);
    }
    this.options.element = this.textarea.nativeElement;

    // If content entered is html then don't evaluate it, prevent xss vulnerabilities
    marked.setOptions({ sanitize: true });
    this._simpleMDE = new SimpleMDE(this.options);
    this._simpleMDE.value(this.value);
    this._simpleMDE.codemirror.on('change', () => {
      this._fromEditor = true;
      this.writeValue(this._simpleMDE.value());
    });
  }

  /* Wrapped function provided by SimpleMDE */

  isPreviewActive(): boolean {
    return this._simpleMDE.isPreviewActive();
  }

  isSideBySideActive(): boolean {
    return this._simpleMDE.isSideBySideActive();
  }

  isFullscreenActive(): boolean {
    return this._simpleMDE.isFullscreenActive();
  }

  clearAutosavedValue(): void {
    this._simpleMDE.clearAutosavedValue();
  }

  toTextArea(): void {
    this._simpleMDE.toTextArea();
  }

  toggleBold(): void {
    this._simpleMDE.toggleBold();
  }

  toggleItalic(): void {
    this._simpleMDE.toggleItalic();
  }

  toggleStrikethrough(): void {
    this._simpleMDE.toggleStrikethrough();
  }

  toggleHeadingSmaller(): void {
    this._simpleMDE.toggleHeadingSmaller();
  }

  toggleHeadingBigger(): void {
    this._simpleMDE.toggleHeadingBigger();
  }

  toggleHeading1(): void {
    this._simpleMDE.toggleHeading1();
  }

  toggleHeading2(): void {
    this._simpleMDE.toggleHeading2();
  }

  toggleHeading3(): void {
    this._simpleMDE.toggleHeading3();
  }

  toggleCodeBlock(): void {
    this._simpleMDE.toggleCodeBlock();
  }

  toggleBlockquote(): void {
    this._simpleMDE.toggleBlockquote();
  }

  toggleUnorderedList(): void {
    this._simpleMDE.toggleUnorderedList();
  }

  toggleOrderedList(): void {
    this._simpleMDE.toggleOrderedList();
  }

  cleanBlock(): void {
    this._simpleMDE.cleanBlock();
  }

  drawLink(): void {
    this._simpleMDE.drawLink();
  }

  drawImage(): void {
    this._simpleMDE.drawImage();
  }

  drawTable(): void {
    this._simpleMDE.drawTable();
  }

  drawHorizontalRule(): void {
    this._simpleMDE.drawHorizontalRule();
  }

  togglePreview(): void {
    this._simpleMDE.togglePreview();
  }

  toggleSideBySide(): void {
    this._simpleMDE.toggleSideBySide();
  }

  toggleFullScreen(): void {
    this._simpleMDE.toggleFullScreen();
  }
}
