import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { layoutsRoutes } from './layouts.routes';

import { LayoutsComponent } from './layouts.component';
import { LayoutsOverviewComponent } from './overview/overview.component';
import { NavViewComponent } from './nav-view/nav-view.component';
import { NavListComponent } from './nav-list/nav-list.component';
import { CardOverComponent } from './card-over/card-over.component';
import { ManageListComponent } from './manage-list/manage-list.component';

import { MatButtonModule, MatListModule, MatIconModule, MatCardModule, MatToolbarModule } from '@angular/material';

import { CovalentLayoutModule, CovalentExpansionPanelModule, CovalentStepsModule, CovalentMediaModule,
         CovalentCommonModule } from '../../../platform/core';
import { CovalentHighlightModule } from '../../../platform/highlight';

import { DocumentationToolsModule } from '../../documentation-tools';

import { ToolbarModule } from '../../components/toolbar/toolbar.module';

@NgModule({
  declarations: [
    LayoutsComponent,
    LayoutsOverviewComponent,
    NavViewComponent,
    NavListComponent,
    CardOverComponent,
    ManageListComponent,
  ],
  imports: [
    /** Angular Modules */
    CommonModule,
    /** Material Modules */
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    /** Covalent Modules */
    CovalentLayoutModule,
    CovalentExpansionPanelModule,
    CovalentStepsModule,
    CovalentMediaModule,
    CovalentHighlightModule,
    CovalentCommonModule,
    DocumentationToolsModule,
    layoutsRoutes,
    ToolbarModule,
  ],
})
export class LayoutsModule {}
