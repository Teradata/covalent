import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { CovalentExpansionPanelModule, CovalentMediaModule, CovalentCommonModule } from '../../../../platform/core';
import { RouterModule } from '@angular/router';

import { ContentDetailsComponent } from './content-details.component';
import { MatTabsModule } from '@angular/material/tabs';
import { contentDetailsRoutes } from './content-details.routes';
import { ContentOverviewComponent } from './content-overview/content-overview.component';
import { ContentApiComponent } from './content-api/content-api.component';
import { ContentExamplesComponent } from './content-examples/content-examples.component';
import { PortalModule } from '@angular/cdk/portal';
import { DocumentationToolsModule } from 'app/documentation-tools';

import { EchartsDemosModule } from '../echarts-demos/types.module';
import { TypesBarComponent } from '../echarts-demos/bar/bar.component';
import { TypesCombinationComponent } from '../echarts-demos/combination/combination.component';
import { TypesGraphComponent } from '../echarts-demos/graph/graph.component';
import { TypesLineComponent } from '../echarts-demos/line/line.component';
import { TypesSankeyComponent } from '../echarts-demos/sankey/sankey.component';
import { TypesScatterComponent } from '../echarts-demos/scatter/scatter.component';
import { TypesTreeComponent } from '../echarts-demos/tree/tree.component';
import { TypesTreemapComponent } from '../echarts-demos/treemap/treemap.component';

@NgModule({
  declarations: [ContentDetailsComponent, ContentOverviewComponent, ContentApiComponent, ContentExamplesComponent],
  exports: [ContentDetailsComponent],
  imports: [
    /** Angular Modules */
    CommonModule,
    RouterModule,
    /** Material Modules */
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    PortalModule,
    /** Covalent Modules */
    CovalentExpansionPanelModule,
    CovalentMediaModule,
    CovalentCommonModule,
    EchartsDemosModule,
    contentDetailsRoutes,
    DocumentationToolsModule,
  ],
  entryComponents: [
    TypesBarComponent,
    TypesLineComponent,
    TypesScatterComponent,
    TypesCombinationComponent,
    TypesTreeComponent,
    TypesTreemapComponent,
    TypesSankeyComponent,
    TypesGraphComponent,
  ],
})
export class EchartsDetailsModule {}
