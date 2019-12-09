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
import { MatSelectModule } from '@angular/material/select';

import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentCommonModule } from '@covalent/core/common';
import { CovalentLoadingModule } from '@covalent/core/loading';
import { CovalentMediaModule } from '@covalent/core/media';
import { CovalentMenuModule } from '@covalent/core/menu';
import { CovalentDataTableModule } from '@covalent/core/data-table';
import { CovalentHighlightModule } from '@covalent/highlight';

import { TypesBarComponent } from './bar/bar.component';
import { TypesPieComponent } from './pie/pie.component';
import { TypesLineComponent } from './line/line.component';
import { TypesScatterComponent } from './scatter/scatter.component';
import { TypesCombinationComponent } from './combination/combination.component';
import { TypesTreeComponent } from './tree/tree.component';
import { TypesSankeyComponent } from './sankey/sankey.component';
import { TypesGraphComponent } from './graph/graph.component';
import { TypesTreemapComponent } from './treemap/treemap.component';
import { TypesWordcloudComponent } from './wordcloud/wordcloud.component';
import { TypesMapComponent } from './map/map.component';

import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CovalentLineEchartsModule } from '@covalent/echarts/line';
import { CovalentBarEchartsModule } from '@covalent/echarts/bar';
import { CovalentPieEchartsModule } from '@covalent/echarts/pie';
import { CovalentScatterEchartsModule } from '@covalent/echarts/scatter';
import { CovalentTreeEchartsModule } from '@covalent/echarts/tree';
import { CovalentSankeyEchartsModule } from '@covalent/echarts/sankey';
import { CovalentGraphEchartsModule } from '@covalent/echarts/graph';
import { CovalentWordcloudEchartsModule } from '@covalent/echarts/wordcloud';
import { CovalentTreemapEchartsModule } from '@covalent/echarts/treemap';
import { CovalentMapEchartsModule } from '@covalent/echarts/map';
import { CovalentTooltipEchartsModule } from '@covalent/echarts/tooltip';
import { CovalentToolboxEchartsModule } from '@covalent/echarts/toolbox';
import { moduleRoutes } from './types.routes';

import { DocumentationToolsModule } from '../../../documentation-tools';

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
    MatSelectModule,
    // Covalent Core
    CovalentLayoutModule,
    CovalentCommonModule,
    CovalentLoadingModule,
    CovalentMediaModule,
    CovalentMenuModule,
    CovalentDataTableModule,
    CovalentHighlightModule,
    // Covalent Echarts
    CovalentBaseEchartsModule,
    CovalentLineEchartsModule,
    CovalentBarEchartsModule,
    CovalentPieEchartsModule,
    CovalentScatterEchartsModule,
    CovalentTooltipEchartsModule,
    CovalentTreeEchartsModule,
    CovalentGraphEchartsModule,
    CovalentSankeyEchartsModule,
    CovalentWordcloudEchartsModule,
    CovalentTreemapEchartsModule,
    CovalentMapEchartsModule,
    CovalentToolboxEchartsModule,
    // internal
    DocumentationToolsModule,
    moduleRoutes,
  ],
  declarations: [
    TypesBarComponent,
    TypesPieComponent,
    TypesLineComponent,
    TypesScatterComponent,
    TypesCombinationComponent,
    TypesTreeComponent,
    TypesSankeyComponent,
    TypesGraphComponent,
    TypesTreemapComponent,
    TypesWordcloudComponent,
    TypesMapComponent,
  ],
})
export class TypesModule {}
