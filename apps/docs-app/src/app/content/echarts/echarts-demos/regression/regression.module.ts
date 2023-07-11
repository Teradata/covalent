import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ComponentDetailsModule } from '../../../../components/shared/component-details/component-details.module';
import { setEchartRoutes } from '../../echarts-content';
import { DocumentationToolsModule } from '../../../../documentation-tools';
import { RegressionBasicSharedModule } from './demos/regression-demo-basic/regression-demo-basic.shared';
import { RegressionDemoBasicComponent } from './demos/regression-demo-basic/regression-demo-basic.component';

const routes: Routes = setEchartRoutes({
  overviewDemoComponent: RegressionDemoBasicComponent,
  id: 'regression',
});

@NgModule({
  imports: [
    RegressionBasicSharedModule,
    CommonModule,
    // Docs
    ComponentDetailsModule,
    DocumentationToolsModule,
    // Routes
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class RegressionModule {}
