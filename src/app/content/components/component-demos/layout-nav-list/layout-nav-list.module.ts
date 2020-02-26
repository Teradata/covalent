import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';

import { ComponentDetailsModule } from 'app/components/shared/component-details/component-details.module';
import { setComponentRoutes } from 'app/content/components/components';
import { LayoutNavListDemoSharedModule } from './demos/layout-nav-list-demo-basic/layout-nav-list-demo.shared';
import { LayoutNavListDemoBasicComponent } from './demos/layout-nav-list-demo-basic/layout-nav-list-demo-basic.component';

const routes: Routes = setComponentRoutes({
  overviewDemoComponent: LayoutNavListDemoBasicComponent,
  id: 'layout-nav-list',
});

@NgModule({
  imports: [
    LayoutNavListDemoSharedModule,
    // Material
    MatIconModule,
    // Routes
    RouterModule.forChild(routes),
    ComponentDetailsModule,
  ],
  exports: [],
  providers: [],
})
export class LayoutNavListDemoModule {}
