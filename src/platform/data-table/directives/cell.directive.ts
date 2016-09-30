import { Directive } from '@angular/core';

@Directive({
  selector: '[td-cell]',
  host: { 'class': 'md-cell' }
})
export class TdDataTableCellDirective {
}
