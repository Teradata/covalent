import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[td-row]',
})
export class TdDataTableRowDirective {

  @HostBinding('class')
  get classes(): string {
    return 'md-row';
  }

}
