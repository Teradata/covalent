import { Component, Directive, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewChild,
         ElementRef, Renderer, TemplateRef, ViewContainerRef, ChangeDetectorRef, forwardRef } from '@angular/core';
import { TemplatePortalDirective } from '@angular/material';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop: any = () => {
  // empty method
};

export const FILE_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TdFileInputComponent),
  multi: true,
};

@Directive({
  selector: '[td-file-input-label]template',
})
export class TdFileInputLabelDirective extends TemplatePortalDirective {
  constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef) {
    super(templateRef, viewContainerRef);
  }
}

@Component({
  providers: [ FILE_INPUT_CONTROL_VALUE_ACCESSOR ],
  selector: 'td-file-input',
  styleUrls: ['./file-input.component.scss'],
  templateUrl: './file-input.component.html',
})
export class TdFileInputComponent implements ControlValueAccessor {

  /**
   * Implemented as part of ControlValueAccessor.
   */
  private _value: FileList | File = undefined;

  // get/set accessor (needed for ControlValueAccessor)
  get value(): FileList | File { return this._value; };
  set value(v: FileList | File) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);
    }
  }

  private _multiple: boolean = false;
  private _disabled: boolean = false;

  @ViewChild('fileInput') fileInput: ElementRef;

  /**
   * color?: string
   * Sets button color. Uses same color palette accepted as [mdButton] and defaults to 'primary'.
   */
  @Input('color') color: string = 'primary';

  /**
   * multiple?: boolean
   * Sets if multiple files can be dropped/selected at once in [TdFileInputComponent].
   */
  @Input('multiple')
  set multiple(multiple: string | boolean) {
    this._multiple = multiple !== '' ? (multiple === 'true' || multiple === true) : true;
  }
  get multiple(): string | boolean {
    return this._multiple;
  }

  /**
   * accept?: string
   * Sets files accepted when opening the file browser dialog.
   * Same as 'accept' attribute in <input/> element.
   */
  @Input('accept') accept: string;

  /**
   * disabled?: boolean
   * Disables [TdFileInputComponent] and clears selected/dropped files.
   */
  @Input('disabled')
  set disabled(disabled: boolean) {
    if (disabled) {
      this.clear();
    }
    this._disabled = disabled;
  }
  get disabled(): boolean {
    return this._disabled;
  }

  /**
   * select?: function
   * Event emitted a file is selected
   * Emits a [File | FileList] object.
   */
  @Output('select') onSelect: EventEmitter<File | FileList> = new EventEmitter<File | FileList>();

  constructor(private _renderer: Renderer, private _changeDetectorRef: ChangeDetectorRef) {

  }

  /**
   * Method executed when a file is selected.
   */
  handleSelect(files: File | FileList): void {
    this.value = files;
    this.onSelect.emit(files);
    this._changeDetectorRef.markForCheck();
  }

  /**
   * Used to clear the selected files from the [TdFileInputComponent].
   */
  clear(): void {
    this._renderer.setElementProperty(this.fileInput.nativeElement, 'value', '');
    this.value = undefined;
    this._changeDetectorRef.markForCheck();
  }

  /**
   * Implemented as part of ControlValueAccessor.
   */
  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onChange = (_: any) => noop;
  onTouched = () => noop;

}
