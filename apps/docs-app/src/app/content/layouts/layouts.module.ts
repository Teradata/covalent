import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { layoutsRoutes } from './layouts.routes';

import { LayoutsComponent } from './layouts.component';
import { NavViewComponent } from './nav-view/nav-view.component';
import { NavListComponent } from './nav-list/nav-list.component';
import { CardOverComponent } from './card-over/card-over.component';
import { ManageListComponent } from './manage-list/manage-list.component';

import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';

import { CovalentHighlightModule } from '@covalent/highlight';

import { DocumentationToolsModule } from '../../documentation-tools';
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentCommonModule } from '@covalent/core/common';
import { ToolbarModule } from '../../components/toolbar/toolbar.module';

@NgModule({
  declarations: [
    LayoutsComponent,
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
    MatExpansionModule,
    /** Covalent Modules */
    CovalentLayoutModule,
    CovalentHighlightModule,
    CovalentCommonModule,
    DocumentationToolsModule,
    layoutsRoutes,
    ToolbarModule,
  ],
})
export class LayoutsModule {}
