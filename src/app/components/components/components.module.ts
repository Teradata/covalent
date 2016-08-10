import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule, TD_MEDIA_PROVIDERS } from '../../../platform/core';

import { componentsRoutes } from './components.routes';

import { ComponentsComponent } from './components.component';
import { OverviewComponent }  from './overview';
import { HighlightDemoComponent } from './highlight';
import { StepsDemoComponent } from './steps';
import { ExpansionPanelDemoComponent } from './expansion-panel';
import { FileUploadDemoComponent } from './file-upload';
import { LoadingDemoComponent } from './loading';
import { MarkdownDemoComponent } from './markdown';
import { MediaDemoComponent } from './media';
import { PipesComponent } from './pipes';



@NgModule({
  declarations: [
    ComponentsComponent,
    OverviewComponent,
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
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    MaterialModule,
    RouterModule,
    componentsRoutes,
  ],
  providers: [
    TD_MEDIA_PROVIDERS,
  ],
})
export class ComponentsModule {}
