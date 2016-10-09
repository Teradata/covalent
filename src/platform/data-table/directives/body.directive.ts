import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[td-body]',
})
export class TdDataTableBodyDirective {

  @HostBinding('class')
  get classes(): string[] {
    return ['md-body'];
  }

}
