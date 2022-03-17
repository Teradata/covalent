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
} from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { TemplatePortalDirective } from '@angular/cdk/portal';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
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
  implements IControlValueAccessor, ICanDisable
{
  private _multiple = false;

  /** The native `<input type="file"> element */
  @ViewChild('fileInput', { static: true }) _inputElement!: ElementRef;
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

  constructor(
    private _renderer: Renderer2,
    _changeDetectorRef: ChangeDetectorRef
  ) {
    super(_changeDetectorRef);
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
