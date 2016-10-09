import { Directive } from '@angular/core';

@Directive({
  selector: '[td-body]',
  host: { 'class': 'md-body' },
})
export class TdDataTableBodyDirective {
}
