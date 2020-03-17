import { Component, Input, Renderer2, ElementRef, HostBinding } from '@angular/core';

export type TdDataTableCellAlign = 'start' | 'center' | 'end';

@Component({
  /* tslint:disable-next-line */
  selector: 'td[td-data-table-cell]',
  styleUrls: ['./data-table-cell.component.scss' ],
  templateUrl: './data-table-cell.component.html',
})
export class TdDataTableCellComponent {

  private _align: TdDataTableCellAlign;

  /**
   * numeric?: boolean
   * Makes cell follow the numeric data-table specs.
   * Defaults to 'false'
   */
  @Input('numeric') numeric: boolean = false;

  /**
   * align?: 'start' | 'center' | 'end'
   * Makes cell content align on demand
   * Defaults to 'left', overrides numeric
   */
  @Input() 
  set align(align: TdDataTableCellAlign) {
    this._align = align;
  }
  get align(): TdDataTableCellAlign {
    return this._align;    
  }

  @HostBinding('class.mat-numeric')
  get bindNumeric(): boolean {
    return this.numeric;
  }

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-cell');
  }

}
