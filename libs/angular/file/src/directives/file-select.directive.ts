import { Directive, Input, Output, EventEmitter, inject } from '@angular/core';
import { HostListener, HostBinding } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[tdFileSelect]',
})
export class TdFileSelectDirective {
  private model = inject(NgModel, { optional: true, host: true });

  private _multiple = false;

  /**
   * multiple?: boolean
   * Sets whether multiple files can be selected at once in host element, or just a single file.
   * Can also be 'multiple' native attribute.
   */
  @Input()
  set multiple(multiple: boolean | string) {
    this._multiple = coerceBooleanProperty(multiple);
  }

  /**
   * fileSelect?: function
   * Event emitted when a file or files are selected in host [HTMLInputElement].
   * Emits a [FileList | File] object.
   * Alternative to not use [(ngModel)].
   */
  @Output() fileSelect: EventEmitter<FileList | File> = new EventEmitter<
    FileList | File
  >();

  /**
   * Binds native 'multiple' attribute if [multiple] property is 'true'.
   */
  @HostBinding('attr.multiple')
  get multipleBinding(): string | undefined {
    return this._multiple ? '' : undefined;
  }

  /**
   * Listens to 'change' host event to get [HTMLInputElement] files.
   * Emits the 'fileSelect' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
   * Uses [(ngModel)] if declared, instead of emitting 'fileSelect' event.
   */
  @HostListener('change', ['$event'])
  onChange(event: Event): void {
    if (event.target instanceof HTMLInputElement) {
      const fileInputEl: HTMLInputElement = event.target;
      const files: FileList = fileInputEl.files || new FileList();
      if (files.length) {
        const value: FileList | File = this._multiple
          ? files.length > 1
            ? files
            : files[0]
          : files[0];
        this.model
          ? this.model.update.emit(value)
          : this.fileSelect.emit(value);
      }
    }
  }
}
