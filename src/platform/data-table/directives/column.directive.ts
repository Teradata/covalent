import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[td-column]',
})
export class TdDataTableColumnDirective {
  @HostBinding('class') cssClass: string = 'md-column';
}
