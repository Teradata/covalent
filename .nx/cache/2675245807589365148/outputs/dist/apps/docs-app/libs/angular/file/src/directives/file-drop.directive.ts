import {
  Directive,
  Input,
  Output,
  EventEmitter,
  HostListener,
  HostBinding,
  ElementRef,
  Renderer2,
  OnInit,
  OnDestroy,
  NgZone,
} from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

export class TdFileDropBase {}

@Directive({ selector: '[tdFileDrop]' })
export class TdFileDropDirective implements OnInit, OnDestroy {
  private _multiple = false;
  private _dragenterListener?: VoidFunction;
  private _dragleaveListener?: VoidFunction;
  private _dragoverListener?: VoidFunction;

  /**
   * multiple?: boolean
   * Sets whether multiple files can be dropped at once in host element, or just a single file.
   * Can also be 'multiple' native attribute.
   */
  @Input()
  set multiple(multiple: boolean | string) {
    this._multiple = coerceBooleanProperty(multiple);
  }

  @Input() disabled? = false;

  /**
   * fileDrop?: function
   * Event emitted when a file or files are dropped in host element after being validated.
   * Emits a [FileList | File] object.
   */
  @Output() fileDrop: EventEmitter<FileList | File> = new EventEmitter<
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
   * Binds native 'disabled' attribute if [disabled] property is 'true'.
   */
  @HostBinding('attr.disabled')
  get disabledBinding(): string | undefined {
    return this.disabled ? '' : undefined;
  }

  constructor(
    private _renderer: Renderer2,
    private _element: ElementRef<HTMLElement>,
    private _ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this._ngZone.runOutsideAngular(() => {
      // Listens to 'dragenter' host event to add animation class 'drop-zone' which can be overriden in host.
      // Stops event propagation and default action from browser for 'dragenter' event.
      this._dragenterListener = this._renderer.listen(
        this._element.nativeElement,
        'dragenter',
        (event: Event) => {
          if (!this.disabled) {
            this._renderer.addClass(this._element.nativeElement, 'drop-zone');
          }
          this._stopEvent(event);
        }
      );

      // Listens to 'dragleave' host event to remove animation class 'drop-zone'.
      // Stops event propagation and default action from browser for 'dragleave' event.
      this._dragleaveListener = this._renderer.listen(
        this._element.nativeElement,
        'dragleave',
        (event: Event) => {
          this._renderer.removeClass(this._element.nativeElement, 'drop-zone');
          this._stopEvent(event);
        }
      );

      // Listens to 'dragover' host event to validate transfer items.
      // Checks if 'multiple' attr exists in host to allow multiple file drops.
      // Stops event propagation and default action from browser for 'dragover' event.
      this._dragoverListener = this._renderer.listen(
        this._element.nativeElement,
        'dragover',
        (event: DragEvent) => {
          const transfer: DataTransfer =
            event.dataTransfer || new DataTransfer();
          transfer.dropEffect = this._typeCheck(transfer.types);
          if (
            this.disabled ||
            (!this._multiple &&
              ((transfer.items && transfer.items.length > 1) ||
                (<any>transfer).mozItemCount > 1))
          ) {
            transfer.dropEffect = 'none';
          } else {
            transfer.dropEffect = 'copy';
          }
          this._stopEvent(event);
        }
      );
    });
  }

  ngOnDestroy(): void {
    this._dragenterListener?.();
    this._dragleaveListener?.();
    this._dragoverListener?.();
  }

  /**
   * Listens to 'drop' host event to get validated transfer items.
   * Emits the 'fileDrop' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
   * Stops event propagation and default action from browser for 'drop' event.
   */
  @HostListener('drop', ['$event'])
  onDrop(event: Event): void {
    if (!this.disabled) {
      const transfer: DataTransfer =
        (<DragEvent>event).dataTransfer ?? new DataTransfer();
      const files: FileList = transfer.files;
      if (files.length) {
        const value: FileList | File = this._multiple
          ? files.length > 1
            ? files
            : files[0]
          : files[0];
        this.fileDrop.emit(value);
      }
    }
    this._renderer.removeClass(this._element.nativeElement, 'drop-zone');
    this._stopEvent(event);
  }

  /**
   * Validates if the transfer item types are 'Files'.
   */
  private _typeCheck(
    types: ReadonlyArray<string> | DOMStringList
  ): 'none' | 'copy' | 'link' | 'move' {
    let dropEffect: 'none' | 'copy' | 'link' | 'move' = 'none';
    if (
      types &&
      (((<any>types).contains && (<any>types).contains('Files')) ||
        ((<any>types).indexOf && (<any>types).indexOf('Files') !== -1))
    ) {
      dropEffect = 'copy';
    }

    return dropEffect;
  }

  private _stopEvent(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
  }
}
