import { NgModule } from '@angular/core';
import { TdBreadcrumbsComponent } from './breadcrumbs.component';
import { TdBreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { MatButtonModule } from '@angular/material/button'; // NUEVO
import { MatMenuModule } from '@angular/material/menu'; // NUEVO
import { MatIconModule } from '@angular/material/icon'; // NUEVO
import { MatTooltipModule } from '@angular/material/tooltip';

/**
 * @deprecated This module is deprecated and will be removed in future versions.
 * Please migrate to using standalone components as soon as possible.
 */
@NgModule({
  imports: [
    TdBreadcrumbsComponent,
    TdBreadcrumbComponent,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatTooltipModule,
  ],
  exports: [TdBreadcrumbsComponent, TdBreadcrumbComponent],
})
export class CovalentBreadcrumbsModule {}
