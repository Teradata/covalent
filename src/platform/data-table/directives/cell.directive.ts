import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[td-cell]',
})
export class TdDataTableCellDirective {
  @HostBinding('class') cssClass: string = 'md-cell';
}
