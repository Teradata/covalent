import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';

import { ComponentDetailsModule } from '../../../../components/shared/component-details/component-details.module';
import { setComponentRoutes } from '../../../../content/components/components';
import { LayoutCardOverDemoBasicComponent } from './demos/layout-card-over-demo-basic/layout-card-over-demo-basic.component';
import { LayoutCardOverDemoSharedModule } from './demos/layout-card-over-demo-basic/layout-card-over-card-over-demo.shared';

const routes: Routes = setComponentRoutes({
  overviewDemoComponent: LayoutCardOverDemoBasicComponent,
  id: 'layout-card-over',
});

@NgModule({
  imports: [
    LayoutCardOverDemoSharedModule,
    // Material
    MatIconModule,
    // Routes
    RouterModule.forChild(routes),
    ComponentDetailsModule,
  ],
  exports: [],
  providers: [],
})
export class LayoutCardOverDemoModule {}
