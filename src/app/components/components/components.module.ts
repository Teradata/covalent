import { NgModule } from '@angular/core';

import { JsonpModule } from '@angular/http';

import { componentsRoutes } from './components.routes';

import { ComponentsComponent } from './components.component';
import { ComponentsOverviewComponent }  from './overview';
import { HighlightDemoComponent } from './highlight';
import { StepsDemoComponent } from './steps';
import { ExpansionPanelDemoComponent } from './expansion-panel';
import { FileUploadDemoComponent } from './file-upload';
import { LoadingDemoComponent } from './loading';
import { MarkdownDemoComponent } from './markdown';
import { MediaDemoComponent } from './media';
import { PipesComponent } from './pipes';

import { CovalentCoreModule } from '../../../platform/core';
import { CovalentFileModule } from '../../../platform/file-upload';
import { CovalentHighlightModule } from '../../../platform/highlight';
import { CovalentMarkdownModule } from '../../../platform/markdown';

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
    PipesComponent,
  ],
  imports: [
    JsonpModule,
    CovalentCoreModule.forRoot(),
    CovalentFileModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    componentsRoutes,
  ],
})
export class ComponentsModule {}
