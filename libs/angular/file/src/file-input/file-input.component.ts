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
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[tdFileInputLabel]ng-template',
})
export class TdFileInputLabelDirective extends TemplatePortalDirective {
  constructor(templateRef: TemplateRef<unknown>, viewContainerRef: ViewContainerRef) {
    super(templateRef, viewContainerRef);
  }
}

export class TdFileInputBase {
  constructor(public _changeDetectorRef: ChangeDetectorRef) {}
}

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
  styleUrls: ['./file-input.component.scss'],
  templateUrl: './file-input.component.html',
})
export class TdFileInputComponent implements ControlValueAccessor {
  private _multiple = false;
  private _disabled = false;

  /** The native `<input type="file"> element */
  @ViewChild('fileInput', { static: true }) _inputElement?: ElementRef;
  get inputElement(): HTMLInputElement {
    return this._inputElement?.nativeElement;
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
  get multiple(): boolean | string {
    return this._multiple;
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

  @Input() value?: unknown;

  /**
   * select?: function
   * Event emitted a file is selected
   * Emits a [File | FileList] object.
   */
  @Output() selectFile: EventEmitter<File | FileList> = new EventEmitter<File | FileList>();

  constructor(private _renderer: Renderer2, private _changeDetectorRef: ChangeDetectorRef) {}

  writeValue(value: unknown): void {
    this.value = value;
    this._changeDetectorRef.markForCheck();
    this._renderer.setProperty(this.inputElement, 'value', '');

  }

  registerOnChange(newValue: unknown): void {
    //
    this.writeValue(newValue);
  }

  registerOnTouched(): void {
    //
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
  onDisabledChange(v: boolean): void {
    if (v) {
      this.clear();
    }
  }
  /**
   * Sets disable to the component. Implemented as part of ControlValueAccessor.
   */
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
