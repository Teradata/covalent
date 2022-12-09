import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { ComponentDetailsModule } from '../../../../components/shared/component-details/component-details.module';
import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CovalentTooltipEchartsModule } from '@covalent/echarts/tooltip';
import { CovalentTreemapEchartsModule } from '@covalent/echarts/treemap';
import { setEchartRoutes } from '../../echarts-content';
import { DocumentationToolsModule } from '../../../../documentation-tools';
import { TypesTreemapComponent } from './treemap.component';
import * as echarts from 'echarts';

const routes: Routes = setEchartRoutes({
  overviewDemoComponent: TypesTreemapComponent,
  id: 'treemap',
});

@NgModule({
  declarations: [TypesTreemapComponent],
  imports: [
    CommonModule,
    // Material
    MatSelectModule,
    MatIconModule,
    // Covalent Echarts
    CovalentBaseEchartsModule.forRoot({
      echarts,
    }),
    CovalentTreemapEchartsModule,
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
export class TreemapModule {}
