import { Component, Input, Renderer2, ElementRef, HostBinding } from '@angular/core';

export enum TdDataTableCellAlign {
  Center = 'center',
  Left = 'left',
  Right = 'right',
}

@Component({
  /* tslint:disable-next-line */
  selector: 'td[td-data-table-cell]',
  styleUrls: ['./data-table-cell.component.scss' ],
  templateUrl: './data-table-cell.component.html',
})
export class TdDataTableCellComponent {

  private _cellAlign: TdDataTableCellAlign;

  /**
   * numeric?: boolean
   * Makes cell follow the numeric data-table specs.
   * Defaults to 'false'
   */
  @Input('numeric') numeric: boolean = false;

  /**
   * cellAlign?: 'center' | 'right' | 'left'
   * Makes cell content align on demand
   * Defaults to 'left', overrides numeric
   */
  @Input() 
  set cellAlign(cellAlign: TdDataTableCellAlign) {
    this._cellAlign = cellAlign;
  }
  get cellAlign(): TdDataTableCellAlign {
    return this._cellAlign;    
  }

  @HostBinding('class.mat-numeric')
  get bindNumeric(): boolean {
    return this.numeric;
  }

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-cell');
  }

}
