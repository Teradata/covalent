import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { ComponentDetailsModule } from '../../../../components/shared/component-details/component-details.module';
import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { TdChartTooltipComponent } from '@covalent/echarts/tooltip';
import { TdChartSeriesSankeyComponent } from '@covalent/echarts/sankey';
import { setEchartRoutes } from '../../echarts-content';
import { DocumentationToolsModule } from '../../../../documentation-tools';
import { TypesSankeyComponent } from './sankey.component';

const routes: Routes = setEchartRoutes({
  overviewDemoComponent: TypesSankeyComponent,
  id: 'sankey',
});

@NgModule({
  declarations: [TypesSankeyComponent],
  imports: [
    CommonModule,
    // Material
    MatSelectModule,
    MatIconModule,
    // Covalent Echarts
    CovalentBaseEchartsModule,
    TdChartSeriesSankeyComponent,
    TdChartTooltipComponent,
    // Docs
    ComponentDetailsModule,
    DocumentationToolsModule,
    // Routes
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class SankeyModule {}
