import { Component, Input, Output, EventEmitter, OnInit, AfterViewInit, ViewChild,
         ElementRef, forwardRef, ViewEncapsulation, NgZone } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import * as SimpleMDECss from 'simplemde/dist/simplemde.min.css';
import * as SimpleMDE from 'simplemde';

const noop: any = () => {
  // empty method
};

@Component({
  selector: 'td-text-editor',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './text-editor.component.html',
  styles: [ SimpleMDECss ],
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

  /**
   * Set if using Electron mode when object is created
   */
  constructor(private elementRef: ElementRef,
              private zone: NgZone) {}

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
      this.zone.run(() => this._value = value);
    }
  }

  get value(): string {
      return this._value;
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
    this.options.element = this.elementRef.nativeElement.value;
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
}
