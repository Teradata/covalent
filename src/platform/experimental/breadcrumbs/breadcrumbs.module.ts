import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { TdBreadcrumbsComponent } from './breadcrumbs.component';
import { TdBreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
  ],
  declarations: [
    TdBreadcrumbsComponent,
    TdBreadcrumbComponent,
  ],
  exports: [
    TdBreadcrumbsComponent,
    TdBreadcrumbComponent,
  ],
})
export class CovalentBreadcrumbsModule {

}
