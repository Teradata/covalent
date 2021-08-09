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

import { DocumentationToolsModule } from '../../documentation-tools';
import { SidenavContentModule } from '../../components/shared/sidenav-content/sidenav-content.module';
import { ComponentOverviewModule } from '../../components/shared/component-overview/component-overview.module';

import { moduleRoutes } from './echarts.routes';

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
    DocumentationToolsModule,
    moduleRoutes,
    SidenavContentModule,
    ComponentOverviewModule,
  ],
})
export class EchartsModule {}
