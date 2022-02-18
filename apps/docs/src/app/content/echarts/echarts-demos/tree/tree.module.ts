import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CovalentTooltipEchartsModule } from '@covalent/echarts/tooltip';
import { CovalentTreeEchartsModule } from '@covalent/echarts/tree';
import { setEchartRoutes } from '../../echarts-content';
import { DocumentationToolsModule } from '../../../../documentation-tools';
import { TreeBasicSharedModule } from './demos/tree-demo-basic/tree-demo-basic.shared';
import { TreeDemoBasicComponent } from './demos/tree-demo-basic/tree-demo-basic.component';
import { ComponentDetailsModule } from '../../../../components/shared/component-details/component-details.module';

const routes: Routes = setEchartRoutes({
  overviewDemoComponent: TreeDemoBasicComponent,
  id: 'tree',
});

@NgModule({
  imports: [
    TreeBasicSharedModule,
    CommonModule,
    // Material
    MatSelectModule,
    MatIconModule,
    // Covalent Echarts
    CovalentBaseEchartsModule,
    CovalentTreeEchartsModule,
    CovalentTooltipEchartsModule,
    // Docs
    ComponentDetailsModule,
    DocumentationToolsModule,
    // Routes
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class TreeModule {}
