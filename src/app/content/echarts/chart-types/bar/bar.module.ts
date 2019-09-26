import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Route } from '@angular/router';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { TypesBarComponent } from './bar.component';

import { DetailsWrapperComponent } from '../../../shared/component-details/component-details-wrapper/content-details.component';
import { ComponentDetailsModule } from 'app/components/shared/component-details/component-details.module';

import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CovalentLineEchartsModule } from '@covalent/echarts/line';
import { CovalentBarEchartsModule } from '@covalent/echarts/bar';
import { CovalentTooltipEchartsModule } from '@covalent/echarts/tooltip';
import { CovalentToolboxEchartsModule } from '@covalent/echarts/toolbox';
import { setEchartRoutes } from '../../echarts-content';
import { TdReadmeLoaderComponent } from 'app/documentation-tools/readme-loader/readme-loader.component';

const routes: Routes = setEchartRoutes({
  rootComponent: DetailsWrapperComponent,
  overviewComponent: TypesBarComponent,
  apiComponent: TdReadmeLoaderComponent,
  id: 'bar',
});

@NgModule({
  declarations: [TypesBarComponent],
  imports: [
    CommonModule,
    // Material
    MatSelectModule,
    MatIconModule,
    // Covalent Echarts
    CovalentBaseEchartsModule,
    CovalentLineEchartsModule,
    CovalentBarEchartsModule,
    CovalentTooltipEchartsModule,
    CovalentToolboxEchartsModule,
    // Docs
    ComponentDetailsModule,
    // Routes
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class BarDemoModule {}
