import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[td-row]',
})
export class TdDataTableRowDirective {
  @HostBinding('class') cssClass: string = 'md-row';
}
