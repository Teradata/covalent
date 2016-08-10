import { NgModule } from '@angular/core';

import { JsonpModule } from '@angular/http';

import { layoutsRoutes } from './layouts.routes';

import { LayoutsComponent } from './layouts.component';
import { LayoutsOverviewComponent } from './overview';
import { NavViewComponent } from './nav-view';
import { NavListComponent } from './nav-list';
import { CardOverComponent } from './card-over';
import { ManageListComponent } from './manage-list';

import { CovalentCoreModule } from '../../../platform/core';
import { CovalentFileModule } from '../../../platform/file-upload';
import { CovalentHighlightModule } from '../../../platform/highlight';
import { CovalentMarkdownModule } from '../../../platform/markdown';

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
    JsonpModule,
    CovalentCoreModule.forRoot(),
    CovalentFileModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    layoutsRoutes,
  ],
})
export class LayoutsModule {}