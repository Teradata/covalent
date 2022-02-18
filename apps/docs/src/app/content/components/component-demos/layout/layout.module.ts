import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';

import { ComponentDetailsModule } from '../../../../components/shared/component-details/component-details.module';
import { setComponentRoutes } from '../../../../content/components/components';
import { LayoutDemoSharedModule } from './demos/layout-demo-basic/layout-demo.shared';
import { LayoutDemoBasicComponent } from './demos/layout-demo-basic/layout-demo-basic.component';

const routes: Routes = setComponentRoutes({
  overviewDemoComponent: LayoutDemoBasicComponent,
  id: 'layout',
});

@NgModule({
  imports: [
    LayoutDemoSharedModule,
    // Material
    MatIconModule,
    // Routes
    RouterModule.forChild(routes),
    ComponentDetailsModule,
  ],
  exports: [],
  providers: [],
})
export class LayoutDemoModule {}
