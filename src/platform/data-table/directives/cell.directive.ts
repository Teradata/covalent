import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[td-cell]',
})
export class TdDataTableCellDirective {

  @HostBinding('class')
  get classes(): string[] {
    return ['md-cell'];
  }

}
