import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[td-head]',
})
export class TdDataTableHeadDirective {
  @HostBinding('class') cssClass: string = 'md-head';
}
