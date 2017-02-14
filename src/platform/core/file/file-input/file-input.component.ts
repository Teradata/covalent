import { Component, Directive, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewChild,
         ElementRef, Renderer, TemplateRef, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
import { TemplatePortalDirective } from '@angular/material';

@Directive({
  selector: '[td-file-input-label]template',
})
export class TdFileInputLabelDirective extends TemplatePortalDirective {
  constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef) {
    super(templateRef, viewContainerRef);
  }
}

@Component({
  selector: 'td-file-input',
  styleUrls: ['./file-input.component.scss'],
  templateUrl: './file-input.component.html',
})
export class TdFileInputComponent {

  private _multiple: boolean = false;
  private _disabled: boolean = false;

  files: FileList | File;

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
    this.files = files;
    this.onSelect.emit(files);
    this._changeDetectorRef.markForCheck();
  }

  /**
   * Clears files.
   */
  clear(): void {
    this._renderer.setElementProperty(this.fileInput.nativeElement, 'value', '');
    this.files = undefined;
    this._changeDetectorRef.markForCheck();
  }

}
