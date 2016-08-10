import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule, TD_MEDIA_PROVIDERS } from '../../../platform/core';

import { docsRoutes } from './docs.routes';


import { DocsComponent } from './docs.component';
import { OverviewComponent } from './overview';
import { CreatingComponent } from './creating';
import { AngularMaterialComponent } from './angular-material';
import { Angular2Component } from './angular-2';
import { BuildTasksComponent } from './build-tasks';
import { DeploymentComponent } from './deployment';
import { IconsComponent } from './icons';
import { TestingComponent } from './testing';


@NgModule({
  declarations: [
    DocsComponent,
    OverviewComponent,
    CreatingComponent,
    AngularMaterialComponent,
    Angular2Component,
    BuildTasksComponent,
    DeploymentComponent,
    IconsComponent,
    TestingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    MaterialModule,
    RouterModule,
    docsRoutes,
  ],
  providers: [
    TD_MEDIA_PROVIDERS,
  ],
})
export class DocsModule {}