import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';

import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentCommonModule } from '@covalent/core/common';
import { CovalentLoadingModule } from '@covalent/core/loading';
import { CovalentMediaModule } from '@covalent/core/media';
import { CovalentMenuModule } from '@covalent/core/menu';
import { CovalentHighlightModule } from '@covalent/highlight';

import { ToolbarModule } from './toolbar/toolbar.module';

import {
  ChartTypesDocsComponent,
  BarDocsComponent,
  LineDocsComponent,
  ScatterDocsComponent,
  ChartTypesMainComponent,
  CombinationDocsComponent,
} from './';

import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CovalentLineEchartsModule } from '@covalent/echarts/line';
import { CovalentBarEchartsModule } from '@covalent/echarts/bar';
import { CovalentScatterEchartsModule } from '@covalent/echarts/scatter';
import { CovalentTooltipEchartsModule } from '@covalent/echarts/tooltip';
import { chartTypesRoutes } from './chart-docs.routes';

@NgModule({
  imports: [
    CommonModule,
    // Material
    MatIconModule,
    MatDividerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatTabsModule,
    MatRippleModule,
    MatMenuModule,
    HttpClientModule,
    MatTooltipModule,
    // Covalent Core
    CovalentLayoutModule,
    CovalentCommonModule,
    CovalentLoadingModule,
    CovalentMediaModule,
    CovalentMenuModule,
    CovalentHighlightModule,
    ToolbarModule,
    // Covalent Echarts
    CovalentBaseEchartsModule,
    CovalentLineEchartsModule,
    CovalentBarEchartsModule,
    CovalentScatterEchartsModule,
    CovalentTooltipEchartsModule,
    chartTypesRoutes],
  declarations: [
    ChartTypesDocsComponent,
    BarDocsComponent,
    LineDocsComponent,
    ScatterDocsComponent,
    ChartTypesMainComponent,
    CombinationDocsComponent,
  ],
})
export class ChartDocsModule {}
