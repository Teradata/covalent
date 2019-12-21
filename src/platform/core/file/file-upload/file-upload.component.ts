import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewChild,
  ContentChild,
  ChangeDetectorRef,
  forwardRef,
} from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ICanDisable, mixinDisabled, IControlValueAccessor, mixinControlValueAccessor } from '@covalent/core/common';
import { TdFileInputComponent, TdFileInputLabelDirective } from '../file-input/file-input.component';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export class TdFileUploadBase {
  constructor(public _changeDetectorRef: ChangeDetectorRef) {}
}

/* tslint:disable-next-line */
export const _TdFileUploadMixinBase = mixinControlValueAccessor(mixinDisabled(TdFileUploadBase));

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TdFileUploadComponent),
      multi: true,
    },
  ],
  selector: 'td-file-upload',
  inputs: ['disabled', 'value'],
  styleUrls: ['./file-upload.component.scss'],
  templateUrl: './file-upload.component.html',
})
export class TdFileUploadComponent extends _TdFileUploadMixinBase implements IControlValueAccessor, ICanDisable {
  private _multiple: boolean = false;
  private _required: boolean = false;

  @ViewChild(TdFileInputComponent, { static: false }) fileInput: TdFileInputComponent;

  @ContentChild(TdFileInputLabelDirective, { static: false }) inputLabel: TdFileInputLabelDirective;

  /**
   * defaultColor?: 'accent' | 'primary' | 'warn'
   * Sets browse button color. Uses same color palette accepted as [MatButton] and defaults to 'primary'.
   */
  @Input() defaultColor: 'accent' | 'primary' | 'warn' = 'primary';

  /**
   * activeColor?: 'accent' | 'primary' | 'warn'
   * Sets upload button color. Uses same color palette accepted as [MatButton] and defaults to 'accent'.
   */
  @Input() activeColor: 'accent' | 'primary' | 'warn' = 'accent';

  /**
   * cancelColor?: 'accent' | 'primary' | 'warn'
   * Sets cancel button color. Uses same color palette accepted as [MatButton] and defaults to 'warn'.
   */
  @Input() cancelColor: 'accent' | 'primary' | 'warn' = 'warn';

  /**
   * multiple?: boolean
   * Sets if multiple files can be dropped/selected at once in [TdFileUploadComponent].
   */
  @Input('multiple')
  set multiple(multiple: boolean) {
    this._multiple = coerceBooleanProperty(multiple);
  }
  get multiple(): boolean {
    return this._multiple;
  }

  /**
   * required?: boolean
   * Forces at least one file upload.
   * Defaults to 'false'
   */
  @Input('required')
  set required(required: boolean) {
    this._required = coerceBooleanProperty(required);
  }
  get required(): boolean {
    return this._required;
  }

  /**
   * accept?: string
   * Sets files accepted when opening the file browser dialog.
   * Same as 'accept' attribute in <input/> element.
   */
  @Input() accept: string;

  /**
   * select?: function
   * Event emitted when a file is selected.
   * Emits a [File | FileList] object.
   */
  @Output() select: EventEmitter<File | FileList> = new EventEmitter<File | FileList>();

  /**
   * upload?: function
   * Event emitted when upload button is clicked.
   * Emits a [File | FileList] object.
   */
  @Output() upload: EventEmitter<File | FileList> = new EventEmitter<File | FileList>();

  /**
   * cancel?: function
   * Event emitted when cancel button is clicked.
   */
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();

  constructor(_changeDetectorRef: ChangeDetectorRef) {
    super(_changeDetectorRef);
  }

  /**
   * Method executed when upload button is clicked.
   */
  uploadPressed(): void {
    if (this.value) {
      this.upload.emit(this.value);
    }
  }

  /**
   * Method executed when a file is selected.
   */
  handleSelect(value: File | FileList): void {
    this.value = value;
    this.select.emit(value);
  }

  /**
   * Methods executed when cancel button is clicked.
   * Clears files.
   */
  _cancel(): void {
    this.value = undefined;
    this.cancel.emit();
    // check if the file input is rendered before clearing it
    if (this.fileInput) {
      this.fileInput.clear();
    }
  }

  /** Method executed when the disabled value changes */
  onDisabledChange(v: boolean): void {
    if (v) {
      this._cancel();
    }
  }
}
