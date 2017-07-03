import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ContentChild, ChangeDetectorRef } from '@angular/core';

import { TdFileInputComponent, TdFileInputLabelDirective } from '../file-input/file-input.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'td-file-upload',
  styleUrls: ['./file-upload.component.scss'],
  templateUrl: './file-upload.component.html',
})
export class TdFileUploadComponent {

  private _multiple: boolean = false;
  private _disabled: boolean = false;

  files: FileList | File;

  @ContentChild(TdFileInputLabelDirective) inputLabel: TdFileInputLabelDirective;

  /**
   * defaultColor?: string
   * Sets browse button color. Uses same color palette accepted as [mdButton] and defaults to 'primary'.
   */
  @Input('defaultColor') defaultColor: string = 'primary';

  /**
   * activeColor?: string
   * Sets upload button color. Uses same color palette accepted as [mdButton] and defaults to 'accent'.
   */
  @Input('activeColor') activeColor: string = 'accent';

  /**
   * cancelColor?: string
   * Sets cancel button color. Uses same color palette accepted as [mdButton] and defaults to 'warn'.
   */
  @Input('cancelColor') cancelColor: string = 'warn';

  /**
   * multiple?: boolean
   * Sets if multiple files can be dropped/selected at once in [TdFileUploadComponent].
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
   * Disables [TdFileUploadComponent] and clears selected/dropped files.
   */
  @Input('disabled')
  set disabled(disabled: boolean) {
    if (disabled) {
      this.cancel();
    }
    this._disabled = disabled;
  }
  get disabled(): boolean {
    return this._disabled;
  }

  /**
   * select?: function
   * Event emitted when a file is selecte.
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
    this._changeDetectorRef.markForCheck();
  }
}
