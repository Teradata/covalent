import { Directive, Input, Output, EventEmitter } from '@angular/core';
import { HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

import { ICanDisable, mixinDisabled } from '../../common/common.module';

export class TdFileDropBase {}

/* tslint:disable-next-line */
export const _TdFileDropMixinBase = mixinDisabled(TdFileDropBase);

@Directive({
  selector: '[tdFileDrop]',
  inputs: ['disabled'],
})
export class TdFileDropDirective extends _TdFileDropMixinBase implements ICanDisable {

  private _multiple: boolean = false;

  /**
   * multiple?: boolean
   * Sets whether multiple files can be dropped at once in host element, or just a single file.
   * Can also be 'multiple' native attribute.
   */
  @Input('multiple')
  set multiple(multiple: boolean) {
    this._multiple = coerceBooleanProperty(multiple);
  }

  /**
   * fileDrop?: function
   * Event emitted when a file or files are dropped in host element after being validated.
   * Emits a [FileList | File] object.
   */
  @Output('fileDrop') onFileDrop: EventEmitter<FileList | File> = new EventEmitter<FileList | File>();

  /**
   * Binds native 'multiple' attribute if [multiple] property is 'true'.
   */
  @HostBinding('attr.multiple')
  get multipleBinding(): string {
    return this._multiple ? '' : undefined;
  }

  /**
   * Binds native 'disabled' attribute if [disabled] property is 'true'.
   */
  @HostBinding('attr.disabled')
  get disabledBinding(): string {
    return this.disabled ? '' : undefined;
  }

  constructor(private _renderer: Renderer2, private _element: ElementRef) {
    super();
  }

  /**
   * Listens to 'drop' host event to get validated transfer items.
   * Emits the 'onFileDrop' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
   * Stops event propagation and default action from browser for 'drop' event.
   */
  @HostListener('drop', ['$event'])
  onDrop(event: Event): void {
    if (!this.disabled) {
      let transfer: DataTransfer = (<DragEvent>event).dataTransfer;
      let files: FileList = transfer.files;
      if (files.length) {
        let value: FileList | File = this._multiple ? (files.length > 1 ? files : files[0]) : files[0];
        this.onFileDrop.emit(value);
      }
    }
    this._renderer.removeClass(this._element.nativeElement, 'drop-zone');
    this._stopEvent(event);
  }

  /**
   * Listens to 'dragover' host event to validate transfer items.
   * Checks if 'multiple' attr exists in host to allow multiple file drops.
   * Stops event propagation and default action from browser for 'dragover' event.
   */
  @HostListener('dragover', ['$event'])
  onDragOver(event: Event): void {
    let transfer: DataTransfer = (<DragEvent>event).dataTransfer;
    transfer.dropEffect = this._typeCheck(transfer.types);
    if (this.disabled || (!this._multiple &&
      ((transfer.items && transfer.items.length > 1) || (<any>transfer).mozItemCount > 1))) {
      transfer.dropEffect = 'none';
    } else {
      transfer.dropEffect = 'copy';
    }
    this._stopEvent(event);
  }

  /**
   * Listens to 'dragenter' host event to add animation class 'drop-zone' which can be overriden in host.
   * Stops event propagation and default action from browser for 'dragenter' event.
   */
  @HostListener('dragenter', ['$event'])
  onDragEnter(event: Event): void {
    if (!this.disabled) {
      this._renderer.addClass(this._element.nativeElement, 'drop-zone');
    }
    this._stopEvent(event);
  }

  /**
   * Listens to 'dragleave' host event to remove animation class 'drop-zone'.
   * Stops event propagation and default action from browser for 'dragleave' event.
   */
  @HostListener('dragleave', ['$event'])
  onDragLeave(event: Event): void {
    this._renderer.removeClass(this._element.nativeElement, 'drop-zone');
    this._stopEvent(event);
  }

  /**
   * Validates if the transfer item types are 'Files'.
   */
  private _typeCheck(types: string[] | DOMStringList): string {
    let dropEffect: string = 'none';
    if (types) {
      if (((<any>types).contains && (<any>types).contains('Files'))
      || ((<any>types).indexOf && (<any>types).indexOf('Files') !== -1)) {
        dropEffect = 'copy';
      }
    }
    return dropEffect;
  }

  private _stopEvent(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
  }
}
