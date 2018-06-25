import { Component, ContentChildren, QueryList, AfterViewInit } from '@angular/core';
import { TdBreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@Component({
  selector: 'td-breadcrumbs',
  styleUrls: ['./breadcrumbs.component.scss'],
  templateUrl: './breadcrumbs.component.html',
})
export class TdBreadcrumbsComponent implements AfterViewInit {

  // all the sub components, which are the individual breadcrumbs
  @ContentChildren(TdBreadcrumbComponent) _breadcrumbs: QueryList<TdBreadcrumbComponent>;

  ngAfterViewInit(): void {
    this.setStyles();
  }

  /**
   * The total count of individual breadcrumbs
   */
  get count(): number {
    return this._breadcrumbs ? this._breadcrumbs.length : 0;
  }

  /**
   * Set prebaked styles on the crumbs depending on if 
   * they are the first or last crumb
   */
  setStyles(): void {
    let breadcrumbArray: TdBreadcrumbComponent[] = this._breadcrumbs.toArray();
    if (breadcrumbArray && breadcrumbArray.length > 0) {
      // don't show the right chevron on the first breadcrumb
      breadcrumbArray[0].displayIcon = false;
    }
  }

}
