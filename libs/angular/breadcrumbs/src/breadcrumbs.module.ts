import { NgModule } from '@angular/core';
import { TdBreadcrumbsComponent } from './breadcrumbs.component';
import { TdBreadcrumbComponent } from './breadcrumb/breadcrumb.component';

/**
 * @deprecated This module is deprecated and will be removed in future versions.
 * Please migrate to using standalone components as soon as possible.
 */
@NgModule({
  imports: [TdBreadcrumbsComponent, TdBreadcrumbComponent],
  exports: [TdBreadcrumbsComponent, TdBreadcrumbComponent],
})
export class CovalentBreadcrumbsModule {}
