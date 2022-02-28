import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ComponentDetailsModule } from '../../../../components/shared/component-details/component-details.module';
import { setEchartRoutes } from '../../echarts-content';
import { DocumentationToolsModule } from '../../../../documentation-tools';
import { MapBasicSharedModule } from './demos/map-demo-basic/map-demo-basic.shared';
import { MapDemoBasicComponent } from './demos/map-demo-basic/map-demo-basic.component';

const routes: Routes = setEchartRoutes({
  overviewDemoComponent: MapDemoBasicComponent,
  id: 'map',
});

@NgModule({
  imports: [
    MapBasicSharedModule,
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
export class MapModule {}
