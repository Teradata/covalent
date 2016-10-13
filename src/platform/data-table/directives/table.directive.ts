import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[td-table]',
})
export class TdDataTableTableDirective {
  @HostBinding('class') cssClass: string = 'md-table';
}
