import { NgModule } from '@angular/core';

import { componentsRoutes } from './components.routes';

import { ComponentsComponent } from './components.component';
import { ComponentsOverviewComponent }  from './overview/overview.component';
import { HighlightDemoComponent } from './highlight/highlight.component';
import { StepsDemoComponent } from './steps/steps.component';
import { ExpansionPanelDemoComponent } from './expansion-panel/expansion-panel.component';
import { FileUploadDemoComponent } from './file-upload/file-upload.component';
import { LoadingDemoComponent } from './loading/loading.component';
import { MarkdownDemoComponent } from './markdown/markdown.component';
import { MediaDemoComponent } from './media/media.component';
import { HttpDemoComponent } from './http/http.component';
import { JsonFormatterDemoComponent } from './json-formatter/json-formatter.component';
import { ChipsDemoComponent } from './chips/chips.component';
import { DialogsDemoComponent } from './dialogs/dialogs.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { ChartsDemoComponent } from './charts/charts.component';
import { DataTableDemoComponent } from './data-table/data-table.component';
import { MaterialComponentsComponent } from './material-components/material-components.component';

import { CovalentCoreModule } from '../../../platform/core';
import { CovalentFileModule } from '../../../platform/file-upload';
import { CovalentHighlightModule } from '../../../platform/highlight';
import { CovalentMarkdownModule } from '../../../platform/markdown';
import { CovalentJsonFormatterModule } from '../../../platform/json-formatter';
import { CovalentChipsModule } from '../../../platform/chips';
import { CovalentChartsModule } from '../../../platform/charts';
import { CovalentDataTableModule } from '../../../platform/data-table';

@NgModule({
  declarations: [
    ComponentsComponent,
    ComponentsOverviewComponent,
    HighlightDemoComponent,
    StepsDemoComponent,
    ExpansionPanelDemoComponent,
    FileUploadDemoComponent,
    LoadingDemoComponent,
    MarkdownDemoComponent,
    MediaDemoComponent,
    HttpDemoComponent,
    JsonFormatterDemoComponent,
    ChipsDemoComponent,
    DialogsDemoComponent,
    DirectivesComponent,
    PipesComponent,
    ChartsDemoComponent,
    DataTableDemoComponent,
    MaterialComponentsComponent,
  ],
  imports: [
    CovalentCoreModule.forRoot(),
    CovalentFileModule.forRoot(),
    CovalentHighlightModule.forRoot(),
    CovalentMarkdownModule.forRoot(),
    CovalentJsonFormatterModule.forRoot(),
    CovalentChipsModule.forRoot(),
    CovalentChartsModule.forRoot(),
    CovalentDataTableModule.forRoot(),
    componentsRoutes,
  ],
})
export class ComponentsModule {}
