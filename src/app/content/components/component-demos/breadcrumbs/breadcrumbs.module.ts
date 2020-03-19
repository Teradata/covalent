import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BreadcrumbDemoComponent } from './breadcrumbs.component';

import { ComponentDetailsModule } from 'app/components/shared/component-details/component-details.module';
import { CovalentBreadcrumbsModule } from '@covalent/core/breadcrumbs';
import { setComponentRoutes } from 'app/content/components/components';

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
    CovalentBreadcrumbsModule,
    // Docs
    // Routes
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class BreadcrumbsDemoModule {}
