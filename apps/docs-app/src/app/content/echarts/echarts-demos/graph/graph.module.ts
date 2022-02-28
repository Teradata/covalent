import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { ComponentDetailsModule } from '../../../../components/shared/component-details/component-details.module';
import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CovalentGraphEchartsModule } from '@covalent/echarts/graph';
import { CovalentTooltipEchartsModule } from '@covalent/echarts/tooltip';

import { setEchartRoutes } from '../../echarts-content';
import { DocumentationToolsModule } from '../../../../documentation-tools';
import { TypesGraphComponent } from './graph.component';

const routes: Routes = setEchartRoutes({
  overviewDemoComponent: TypesGraphComponent,
  id: 'graph',
});

@NgModule({
  declarations: [TypesGraphComponent],
  imports: [
    CommonModule,
    // Material
    MatSelectModule,
    MatIconModule,
    // Covalent Echarts
    CovalentBaseEchartsModule,
    CovalentGraphEchartsModule,
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
export class GraphModule {}
