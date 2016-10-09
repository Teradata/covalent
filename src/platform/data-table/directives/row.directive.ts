import { Directive } from '@angular/core';

@Directive({
  selector: '[td-row]',
  host: { 'class': 'md-row' },
})
export class TdDataTableRowDirective {
}
