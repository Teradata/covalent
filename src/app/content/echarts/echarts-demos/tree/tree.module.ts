import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { ComponentDetailsModule } from 'app/components/shared/component-details/component-details.module';
import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CovalentTooltipEchartsModule } from '@covalent/echarts/tooltip';
import { CovalentTreeEchartsModule } from '@covalent/echarts/tree';
import { setEchartRoutes } from '../../echarts-content';
import { DocumentationToolsModule } from 'app/documentation-tools';
import { TypesTreeComponent } from './tree.component';

const routes: Routes = setEchartRoutes({
  overviewDemoComponent: TypesTreeComponent,
  id: 'tree',
});

@NgModule({
  declarations: [TypesTreeComponent],
  imports: [
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
