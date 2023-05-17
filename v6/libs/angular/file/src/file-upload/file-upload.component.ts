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
import {
  TdFileInputComponent,
  TdFileInputLabelDirective,
} from '../file-input/file-input.component';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { noop } from 'rxjs';

export class TdFileUploadBase {
  constructor(public _changeDetectorRef: ChangeDetectorRef) {}
}

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
  styleUrls: ['./file-upload.component.scss'],
  templateUrl: './file-upload.component.html',
})
export class TdFileUploadComponent implements ControlValueAccessor {
  private _multiple = false;
  private _required = false;
  private _disabled = false;

  @ViewChild(TdFileInputComponent) fileInput?: TdFileInputComponent;

  @ContentChild(TdFileInputLabelDirective)
  inputLabel?: TdFileInputLabelDirective;

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
  @Input()
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
  @Input()
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
  @Input() accept?: string;

  @Input()
  set disabled(disabled: boolean) {
    this._disabled = disabled;
    this.onDisabledChange(disabled);
  }
  get disabled(): boolean {
    return this._disabled;
  }

  @Input() value?: unknown | undefined;

  /**
   * select?: function
   * Event emitted when a file is selected.
   * Emits a [File | FileList] object.
   */
  @Output() selectFile: EventEmitter<File | FileList> = new EventEmitter<
    File | FileList
  >();

  /**
   * upload?: function
   * Event emitted when upload button is clicked.
   * Emits a [File | FileList] object.
   */
  @Output() upload: EventEmitter<File | FileList | unknown> = new EventEmitter<
    File | FileList | unknown
  >();

  /**
   * cancel?: function
   * Event emitted when cancel button is clicked.
   */
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();

  constructor(private _changeDetectorRef: ChangeDetectorRef) {}

  writeValue(value: unknown): void {
    this.value = value;
    this._changeDetectorRef.markForCheck();
  }

  registerOnChange(): void {
    //
  }

  registerOnTouched(): void {
    //
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
    this.selectFile.emit(value);
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
