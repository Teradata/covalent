import { Directive } from '@angular/core';

@Directive({
  selector: '[td-head]',
  host: { 'class': 'md-head' },
})
export class TdDataTableHeadDirective {
}
