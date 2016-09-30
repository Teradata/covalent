import { Directive, Input, EventEmitter } from '@angular/core';

@Directive({
  selector: '[td-table]',
  host: { 'class': 'md-table' },
})
export class TdDataTableTableDirective {
}
