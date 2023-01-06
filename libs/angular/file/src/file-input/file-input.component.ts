import {
  Component,
  Directive,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  Renderer2,
  TemplateRef,
  ViewContainerRef,
  ChangeDetectorRef,
  forwardRef,
  OnInit,
  OnDestroy,
  NgZone,
} from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { TemplatePortalDirective } from '@angular/cdk/portal';
import { ENTER } from '@angular/cdk/keycodes';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { fromEvent, merge, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import {
  ICanDisable,
  IControlValueAccessor,
  mixinControlValueAccessor,
  mixinDisabled,
} from '@covalent/core/common';

@Directive({
  selector: '[tdFileInputLabel]ng-template',
})
export class TdFileInputLabelDirective extends TemplatePortalDirective {
  constructor(
    templateRef: TemplateRef<unknown>,
    viewContainerRef: ViewContainerRef
  ) {
    super(templateRef, viewContainerRef);
  }
}

export class TdFileInputBase {
  constructor(public _changeDetectorRef: ChangeDetectorRef) {}
}

export const _TdFileInputMixinBase = mixinControlValueAccessor(
  mixinDisabled(TdFileInputBase)
);

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TdFileInputComponent),
      multi: true,
    },
  ],
  selector: 'td-file-input',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'value'],
  styleUrls: ['./file-input.component.scss'],
  templateUrl: './file-input.component.html',
})
export class TdFileInputComponent
  extends _TdFileInputMixinBase
  implements OnInit, OnDestroy, IControlValueAccessor, ICanDisable
{
  private _multiple = false;

  /** The native `<button class="td-file-input"></button>` element */
  @ViewChild('fileInputButton', { static: true, read: ElementRef })
  _inputButton!: ElementRef<HTMLElement>;

  /** The native `<input type="file"> element */
  @ViewChild('fileInput', { static: true })
  _inputElement!: ElementRef<HTMLInputElement>;
  get inputElement(): HTMLInputElement {
    return this._inputElement.nativeElement;
  }

  /**
   * color?: 'accent' | 'primary' | 'warn'
   * Sets button color. Uses same color palette accepted as [MatButton].
   */
  @Input() color?: 'accent' | 'primary' | 'warn';

  /**
   * multiple?: boolean
   * Sets if multiple files can be dropped/selected at once in [TdFileInputComponent].
   */
  @Input()
  set multiple(multiple: boolean | string) {
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
  @Input() accept?: string;

  /**
   * select?: function
   * Event emitted a file is selected
   * Emits a [File | FileList] object.
   */
  @Output() selectFile: EventEmitter<File | FileList> = new EventEmitter<
    File | FileList
  >();

  private _destroy$ = new Subject<void>();

  constructor(
    private _ngZone: NgZone,
    private _renderer: Renderer2,
    _changeDetectorRef: ChangeDetectorRef
  ) {
    super(_changeDetectorRef);
  }

  ngOnInit(): void {
    this._ngZone.runOutsideAngular(() => {
      merge(
        fromEvent(this._inputButton.nativeElement, 'click'),
        fromEvent<KeyboardEvent>(this._inputButton.nativeElement, 'keyup').pipe(
          filter((event) => event.keyCode === ENTER)
        )
      )
        .pipe(takeUntil(this._destroy$))
        .subscribe(() => this._inputElement.nativeElement.click());
    });
  }

  ngOnDestroy(): void {
    this._destroy$.next();
  }

  /**
   * Method executed when a file is selected.
   */
  handleSelect(files: File | FileList): void {
    this.writeValue(files);
    this.selectFile.emit(files);
  }

  /**
   * Used to clear the selected files from the [TdFileInputComponent].
   */
  clear(): void {
    this.writeValue(undefined);
    this._renderer.setProperty(this.inputElement, 'value', '');
  }

  /** Method executed when the disabled value changes */
  override onDisabledChange(v: boolean): void {
    if (v) {
      this.clear();
    }
  }
  /**
   * Sets disable to the component. Implemented as part of ControlValueAccessor.
   */
  override setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
