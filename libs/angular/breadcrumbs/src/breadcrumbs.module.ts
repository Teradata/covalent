import { NgModule } from '@angular/core';
import { TdBreadcrumbsComponent } from './breadcrumbs.component';
import { TdBreadcrumbComponent } from './breadcrumb/breadcrumb.component';

/**
 * @deprecated since version 8.x, modules are no longer needed use standalone components instead
 */
@NgModule({
  imports: [TdBreadcrumbsComponent, TdBreadcrumbComponent],
  exports: [TdBreadcrumbsComponent, TdBreadcrumbComponent],
})
export class CovalentBreadcrumbsModule {}
