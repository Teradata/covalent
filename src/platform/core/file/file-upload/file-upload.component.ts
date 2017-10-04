import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewChild, ContentChild, ChangeDetectorRef } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

import { ICanDisable, mixinDisabled } from '../../common/common.module';

import { TdFileInputComponent, TdFileInputLabelDirective } from '../file-input/file-input.component';

export class TdFileUploadBase {}

/* tslint:disable-next-line */
export const _TdFileUploadMixinBase = mixinDisabled(TdFileUploadBase);

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'td-file-upload',
  inputs: ['disabled'],
  styleUrls: ['./file-upload.component.scss'],
  templateUrl: './file-upload.component.html',
})
export class TdFileUploadComponent extends _TdFileUploadMixinBase implements ICanDisable {

  private _multiple: boolean = false;

  files: FileList | File;

  @ViewChild(TdFileInputComponent) fileInput: TdFileInputComponent;

  @ContentChild(TdFileInputLabelDirective) inputLabel: TdFileInputLabelDirective;

  /**
   * defaultColor?: string
   * Sets browse button color. Uses same color palette accepted as [MatButton] and defaults to 'primary'.
   */
  @Input('defaultColor') defaultColor: string = 'primary';

  /**
   * activeColor?: string
   * Sets upload button color. Uses same color palette accepted as [MatButton] and defaults to 'accent'.
   */
  @Input('activeColor') activeColor: string = 'accent';

  /**
   * cancelColor?: string
   * Sets cancel button color. Uses same color palette accepted as [MatButton] and defaults to 'warn'.
   */
  @Input('cancelColor') cancelColor: string = 'warn';

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
   * accept?: string
   * Sets files accepted when opening the file browser dialog.
   * Same as 'accept' attribute in <input/> element.
   */
  @Input('accept') accept: string;

  /**
   * select?: function
   * Event emitted when a file is selected.
   * Emits a [File | FileList] object.
   */
  @Output('select') onSelect: EventEmitter<File | FileList> = new EventEmitter<File | FileList>();

  /**
   * upload?: function
   * Event emitted when upload button is clicked.
   * Emits a [File | FileList] object.
   */
  @Output('upload') onUpload: EventEmitter<File | FileList> = new EventEmitter<File | FileList>();

  /**
   * cancel?: function
   * Event emitted when cancel button is clicked.
   */
  @Output('cancel') onCancel: EventEmitter<void> = new EventEmitter<void>();

  constructor(private _changeDetectorRef: ChangeDetectorRef) {
    super();
  }

  /**
   * Method executed when upload button is clicked.
   */
  uploadPressed(): void {
    if (this.files) {
      this.onUpload.emit(this.files);
    }
  }

  /**
   * Method executed when a file is selected.
   */
  handleSelect(files: File | FileList): void {
    this.files = files;
    this.onSelect.emit(files);
    this._changeDetectorRef.markForCheck();
  }

  /**
   * Methods executed when cancel button is clicked.
   * Clears files.
   */
  cancel(): void {
    this.files = undefined;
    this.onCancel.emit(undefined);
    // check if the file input is rendered before clearing it
    if (this.fileInput) {
      this.fileInput.clear();
    }
    this._changeDetectorRef.markForCheck();
  }

  /** Method executed when the disabled value changes */
  onDisabledChange(v: boolean): void {
    if (v) {
      this.cancel();
    }
  }
}
