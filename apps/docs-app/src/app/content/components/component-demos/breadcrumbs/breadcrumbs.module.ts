import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BreadcrumbDemoComponent } from './breadcrumbs.component';

import { ComponentDetailsModule } from '../../../../components/shared/component-details/component-details.module';
import {
  TdBreadcrumbComponent,
  TdBreadcrumbsComponent,
} from '@covalent/core/breadcrumbs';
import { setComponentRoutes } from '../../../../content/components/components';

const routes: Routes = setComponentRoutes({
  overviewDemoComponent: BreadcrumbDemoComponent,
  id: 'breadcrumbs',
});

@NgModule({
  declarations: [BreadcrumbDemoComponent],
  imports: [
    CommonModule,
    ComponentDetailsModule,
    // Covalent
    TdBreadcrumbsComponent,
    TdBreadcrumbComponent,
    // Docs
    // Routes
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class BreadcrumbsDemoModule {}
