import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';

import { ComponentDetailsModule } from '../../../../components/shared/component-details/component-details.module';
import { setComponentRoutes } from '../../../../content/components/components';
import { LayoutManagementListDemoSharedModule } from './demos/layout-management-list-demo-basic/layout-management-list-demo.shared';
import { LayoutManagementListDemoBasicComponent } from './demos/layout-management-list-demo-basic/layout-management-list-demo-basic.component';

const routes: Routes = setComponentRoutes({
  overviewDemoComponent: LayoutManagementListDemoBasicComponent,
  id: 'layout-management-list',
});

@NgModule({
  imports: [
    LayoutManagementListDemoSharedModule,
    // Material
    MatIconModule,
    // Routes
    RouterModule.forChild(routes),
    ComponentDetailsModule,
  ],
  exports: [],
  providers: [],
})
export class LayoutManagementListDemoModule {}
