import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { ComponentDetailsModule } from '../../../../components/shared/component-details/component-details.module';

import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CovalentClusteringEchartsModule } from '@covalent/echarts/clustering';
import { CovalentTooltipEchartsModule } from '@covalent/echarts/tooltip';
import { CovalentToolboxEchartsModule } from '@covalent/echarts/toolbox';
import { setEchartRoutes } from '../../echarts-content';
import { DocumentationToolsModule } from '../../../../documentation-tools';
import { ClusteringBasicSharedModule } from './demos/clustering-demo-basic/clustering-demo-basic.shared';
import { ClusteringDemoBasicComponent } from './demos/clustering-demo-basic/clustering-demo-basic.component';

const routes: Routes = setEchartRoutes({
  overviewDemoComponent: ClusteringDemoBasicComponent,
  id: 'clustering',
});

@NgModule({
  imports: [
    ClusteringBasicSharedModule,
    CommonModule,
    // Material
    MatSelectModule,
    MatIconModule,
    MatSlideToggleModule,
    // Covalent Echarts
    CovalentBaseEchartsModule,
    CovalentClusteringEchartsModule,
    CovalentTooltipEchartsModule,
    CovalentToolboxEchartsModule,
    // Docs
    ComponentDetailsModule,
    DocumentationToolsModule,
    // Routes
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class ClusteringModule {}
