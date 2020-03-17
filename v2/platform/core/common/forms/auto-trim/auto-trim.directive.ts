import { Directive } from '@angular/core';
import { HostListener, Host, Optional } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[tdAutoTrim]',
})
export class TdAutoTrimDirective {

  constructor(@Optional() @Host() private _model: NgModel) {}

  /**
   * Listens to host's (blur) event and trims value.
   */
  @HostListener('blur', ['$event'])
  onBlur(event: Event): void {
    if (this._model && this._model.value && typeof(this._model.value) === 'string') {
      this._model.update.emit(this._model.value.trim());
    }
  }
}
