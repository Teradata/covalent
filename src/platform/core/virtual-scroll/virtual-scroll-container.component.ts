import { Component, Directive, Input, Output, EventEmitter, ContentChild, AfterViewInit, ViewChild,
         ChangeDetectionStrategy, ChangeDetectorRef, QueryList, ViewChildren, ElementRef, HostListener,
         Renderer2, AfterViewChecked, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

import { Subscription } from 'rxjs/Subscription';

import { TdVirtualScrollRowDirective } from './virtual-scroll-row.directive';

const TD_VIRTUAL_OFFSET: number = 2;

@Component({
  selector: 'td-virtual-scroll-container',
  styleUrls: ['./virtual-scroll-container.component.scss' ],
  templateUrl: './virtual-scroll-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TdVirtualScrollContainerComponent implements AfterViewInit, AfterViewChecked, OnDestroy {

  private _rowChangeSubs: Subscription;
  private _initialized: boolean = false;

  private _totalHeight: number = 0;
  private _hostHeight: number = 0;
  private _scrollVerticalOffset: number = 0;
  private _offsetTransform: SafeStyle;

  private _fromRow: number = 0;
  private _toRow: number = 0;
  
  private _data: any[];
  private _virtualData: any[];

  /**
   * data: any[]
   * List of items to virtually iterate on.
   */
  @Input('data')
  set data(data: any[]) {
    this._data = data;
    if (this._initialized) {
      this._calculateVirtualRows();
    }
    this._changeDetectorRef.markForCheck();
  }
  get data(): any[] {
    return this._data;
  }

  get virtualData(): any[] {
    return this._virtualData;
  }

  @ViewChildren('rowElement') _rows: QueryList<ElementRef>;

  @ContentChild(TdVirtualScrollRowDirective) _rowTemplate: TdVirtualScrollRowDirective;

  get rowHeight(): number {
    if (this._rows && this._rows.toArray()[0]) {
      return this._rows.toArray()[0].nativeElement.getBoundingClientRect().height;
    }
    return 0;
  }

  get totalHeight(): number {
    return this._totalHeight;
  }

  get fromRow(): number {
    return this._fromRow;
  }

  get toRow(): number {
    return this._toRow;
  }

  get offsetTransform(): SafeStyle {
    return this._offsetTransform;
  }

  constructor(private _elementRef: ElementRef,
              private _domSanitizer: DomSanitizer,
              private _renderer: Renderer2,
              private _changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this._rowChangeSubs = this._rows.changes.subscribe(() => {
      this._calculateVirtualRows();
    });
    this._initialized = true;
    this._calculateVirtualRows();
  }

  ngAfterViewChecked(): void {
    let newHostHeight: number = this._elementRef.nativeElement.getBoundingClientRect().height;
    if (this._hostHeight !== newHostHeight) {
      this._hostHeight = newHostHeight;
      if (this._initialized) {
        this._calculateVirtualRows();
      }
    }
  }

  ngOnDestroy(): void {
    if (this._rowChangeSubs) {
      this._rowChangeSubs.unsubscribe();
    }
  }

  /**
   * trackBy?: TrackByFunction
   * This accepts the same trackBy function [ngFor] does.
   * https://angular.io/api/core/TrackByFunction
   */
  @Input('trackBy') trackBy: any =  (index: number, item: any) => {
    return item;
  }

  @HostListener('scroll', ['$event'])
  handleScroll(event: Event): void {
    let element: HTMLElement = (<HTMLElement>event.target);
    if (element) {
      let verticalScroll: number = element.scrollTop;
      if (this._scrollVerticalOffset !== verticalScroll) {
        this._scrollVerticalOffset = verticalScroll;
        if (this._initialized) {
          this._calculateVirtualRows();
        }
      }
    }
  }
  
  /**
   * Method to refresh and recalculate the virtual rows
   * e.g. after changing the [data] content
   */
  refresh(): void {
    this._calculateVirtualRows();
  }

  /**
   * Method to scroll to a specific row of the list.
   */
  scrollTo(row: number): void {
    this._elementRef.nativeElement.scrollTop = row * this.rowHeight;
    this._changeDetectorRef.markForCheck();
  }

  /**
   * Method to scroll to the start of the list.
   */
  scrollToStart(): void {
    this.scrollTo(0);
    this._changeDetectorRef.markForCheck();
  }

  /**
   * Method to scroll to the end of the list.
   */
  scrollToEnd(): void {
    this.scrollTo(this.totalHeight / this.rowHeight);
    this._changeDetectorRef.markForCheck();
  }

  private _calculateVirtualRows(): void {
    if (this._data) {
      this._totalHeight = this._data.length * this.rowHeight;
      let fromRow: number = Math.floor((this._scrollVerticalOffset / this.rowHeight)) - TD_VIRTUAL_OFFSET;
      this._fromRow = fromRow > 0 ? fromRow : 0;
      let range: number = Math.floor((this._hostHeight / this.rowHeight)) + (TD_VIRTUAL_OFFSET * 2);
      let toRow: number = range + this.fromRow;
      if (isFinite(toRow) && toRow > this._data.length) {
        toRow = this._data.length;
      } else if (!isFinite(toRow)) {
        toRow = TD_VIRTUAL_OFFSET;
      }
      this._toRow = toRow;
    } else {
      this._totalHeight = 0;
      this._fromRow = 0;
      this._toRow = 0;
    }
  
    let offset: number = 0;
    if (this._scrollVerticalOffset > (TD_VIRTUAL_OFFSET * this.rowHeight)) {
      offset = this.fromRow * this.rowHeight;
    }

    this._offsetTransform = this._domSanitizer.bypassSecurityTrustStyle('translateY(' + (offset - this.totalHeight) + 'px)');
    if (this._data) {
      this._virtualData = this.data.slice(this.fromRow, this.toRow);
    }
    // mark for check at the end of the queue so we are sure
    // that the changes will be marked
    Promise.resolve().then(() => {
      this._changeDetectorRef.markForCheck();
    });
  }

}
