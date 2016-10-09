import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[td-column]',
})
export class TdDataTableColumnDirective {

  @HostBinding('class')
  get classes(): string[] {
    return ['md-column'];
  }

}
