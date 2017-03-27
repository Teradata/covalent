import { Component, Input, Renderer2, ElementRef, HostBinding } from '@angular/core';

@Component({
  /* tslint:disable-next-line */
  selector: 'td[td-data-table-cell]',
  styleUrls: ['./data-table-cell.component.scss' ],
  templateUrl: './data-table-cell.component.html',
})
export class TdDataTableCellComponent {

  /**
   * numeric?: boolean
   * Makes cell follow the numeric data-table specs.
   * Defaults to 'false'
   */
  @Input('numeric') numeric: boolean = false;

  @HostBinding('class.mat-numeric')
  get bindNumeric(): boolean {
    return this.numeric;
  }

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-cell');
  }

}
