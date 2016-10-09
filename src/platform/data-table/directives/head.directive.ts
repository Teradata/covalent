import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[td-head]',
})
export class TdDataTableHeadDirective {

  @HostBinding('class')
  get classes(): string {
    return 'md-head';
  }

}
