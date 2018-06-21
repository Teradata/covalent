import { Component, ContentChildren, QueryList, AfterViewInit } from '@angular/core';
import { TdBreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@Component({
  selector: 'td-breadcrumbs',
  styleUrls: ['./breadcrumbs.component.scss'],
  templateUrl: './breadcrumbs.component.html',
})
export class TdBreadcrumbsComponent implements AfterViewInit {

  // Array to hold all the text labels of the breadcrumbs in order left to right
  // private _breadcrumbs: string[];

  @ContentChildren(TdBreadcrumbComponent) _breadcrumbs: QueryList<TdBreadcrumbComponent>;

  title: string = '';

  ngAfterViewInit(): void {
    this.setIcons();
  }

  /**
   * Returns the array of breadcrumbs
   */
  // get breadcrumbs(): string[] {
    // return this._breadcrumbs;
  // }

  get count(): number {
    return this._breadcrumbs ? this._breadcrumbs.length : 0;
  }

  setIcons(): void {
    this._breadcrumbs.forEach((breadcrumb: TdBreadcrumbComponent, index: number) => {
      if (index === 0) {
        breadcrumb.displayIcon = false;
      } else if (index === (this._breadcrumbs.length - 1)) {
        this.title = breadcrumb.title;
      }
    });
  }

}
