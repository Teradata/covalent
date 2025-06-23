import { Directive, inject } from '@angular/core';
import { HostListener } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[tdAutoTrim]',
})
export class TdAutoTrimDirective {
  private _model = inject(NgModel, { optional: true, host: true });

  /**
   * Listens to host's (blur) event and trims value.
   */
  @HostListener('blur', ['$event'])
  onBlur(): void {
    if (
      this._model &&
      this._model.value &&
      typeof this._model.value === 'string'
    ) {
      this._model.update.emit(this._model.value.trim());
    }
  }
}
