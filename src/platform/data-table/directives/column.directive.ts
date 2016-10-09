import { Directive } from '@angular/core';

@Directive({
  selector: '[td-column]',
  host: { 'class': 'md-column' },
})
export class TdDataTableColumnDirective {

}
