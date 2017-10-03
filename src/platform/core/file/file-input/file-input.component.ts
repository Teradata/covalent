import { Component, Directive, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewChild,
         ElementRef, Renderer2, TemplateRef, ViewContainerRef, ChangeDetectorRef, forwardRef } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { TemplatePortalDirective } from '@angular/cdk/portal';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { ICanDisable, mixinDisabled } from '../../common/common.module';

const noop: any = () => {
  // empty method
};

export const FILE_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TdFileInputComponent),
  multi: true,
};

@Directive({
  selector: '[td-file-input-label]ng-template',
})
export class TdFileInputLabelDirective extends TemplatePortalDirective {
  constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef) {
    super(templateRef, viewContainerRef);
  }
}

export class TdFileInputBase {}

/* tslint:disable-next-line */
export const _TdFileInputMixinBase = mixinDisabled(TdFileInputBase);

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ FILE_INPUT_CONTROL_VALUE_ACCESSOR ],
  selector: 'td-file-input',
  inputs: ['disabled'],
  styleUrls: ['./file-input.component.scss'],
  templateUrl: './file-input.component.html',
})
export class TdFileInputComponent extends _TdFileInputMixinBase implements ControlValueAccessor, ICanDisable {

  /**
   * Implemented as part of ControlValueAccessor.
   */
  private _value: FileList | File = undefined;

  // get/set accessor (needed for ControlValueAccessor)
  get value(): FileList | File { return this._value; }
  set value(v: FileList | File) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);
    }
  }

  private _multiple: boolean = false;

  /** The native `<input type="file"> element */
  @ViewChild('fileInput') _inputElement: ElementRef;
  get inputElement(): HTMLInputElement {
    return this._inputElement.nativeElement;
  }

  /**
   * color?: string
   * Sets button color. Uses same color palette accepted as [MatButton].
   */
  @Input('color') color: string;

  /**
   * multiple?: boolean
   * Sets if multiple files can be dropped/selected at once in [TdFileInputComponent].
   */
  @Input('multiple')
  set multiple(multiple: boolean) {
    this._multiple = coerceBooleanProperty(multiple);
  }
  get multiple(): boolean {
    return this._multiple;
  }

  /**
   * accept?: string
   * Sets files accepted when opening the file browser dialog.
   * Same as 'accept' attribute in <input/> element.
   */
  @Input('accept') accept: string;

  /**
   * select?: function
   * Event emitted a file is selected
   * Emits a [File | FileList] object.
   */
  @Output('select') onSelect: EventEmitter<File | FileList> = new EventEmitter<File | FileList>();

  constructor(private _renderer: Renderer2, private _changeDetectorRef: ChangeDetectorRef) {
    super();
  }

  /**
   * Method executed when a file is selected.
   */
  handleSelect(files: File | FileList): void {
    this.writeValue(files);
    this.onSelect.emit(files);
  }

  /**
   * Used to clear the selected files from the [TdFileInputComponent].
   */
  clear(): void {
    this.writeValue(undefined);
    this._renderer.setProperty(this.inputElement, 'value', '');
  }

  /** Method executed when the disabled value changes */
  onDisabledChange(v: boolean): void {
    if (v) {
      this.clear();
    }
  }

  /**
   * Implemented as part of ControlValueAccessor.
   */
  writeValue(value: any): void {
    this.value = value;
    this._changeDetectorRef.markForCheck();
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
