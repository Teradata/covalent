import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TdBreadcrumbsComponent } from './breadcrumbs.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TdBreadcrumbsComponent,
  ],
  exports: [
    TdBreadcrumbsComponent,
  ],
})
export class CovalentBreadcrumbsModule {

}
