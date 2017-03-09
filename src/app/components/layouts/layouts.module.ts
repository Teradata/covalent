import { NgModule } from '@angular/core';

import { layoutsRoutes } from './layouts.routes';

import { LayoutsComponent } from './layouts.component';
import { LayoutsOverviewComponent } from './overview/overview.component';
import { NavViewComponent } from './nav-view/nav-view.component';
import { NavListComponent } from './nav-list/nav-list.component';
import { CardOverComponent } from './card-over/card-over.component';
import { ManageListComponent } from './manage-list/manage-list.component';

import { CovalentCoreModule } from '../../../platform/core';
import { CovalentHighlightModule } from '../../../platform/highlight';

import { DocumentationToolsModule } from '../../documentation-tools';

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
    CovalentCoreModule,
    CovalentHighlightModule,
    DocumentationToolsModule,
    layoutsRoutes,
  ],
})
export class LayoutsModule {}
