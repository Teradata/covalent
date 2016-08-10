import { NgModule } from '@angular/core';

import { JsonpModule } from '@angular/http';

import { docsRoutes } from './docs.routes';

import { DocsComponent } from './docs.component';
import { DocsOverviewComponent } from './overview';
import { CreatingComponent } from './creating';
import { AngularMaterialComponent } from './angular-material';
import { Angular2Component } from './angular-2';
import { BuildTasksComponent } from './build-tasks';
import { DeploymentComponent } from './deployment';
import { IconsComponent } from './icons';
import { TestingComponent } from './testing';

import { CovalentCoreModule } from '../../../platform/core';
import { CovalentFileModule } from '../../../platform/file-upload';
import { CovalentHighlightModule } from '../../../platform/highlight';
import { CovalentMarkdownModule } from '../../../platform/markdown';

@NgModule({
  declarations: [
    DocsComponent,
    DocsOverviewComponent,
    CreatingComponent,
    AngularMaterialComponent,
    Angular2Component,
    BuildTasksComponent,
    DeploymentComponent,
    IconsComponent,
    TestingComponent,
  ],
  imports: [
    JsonpModule,
    CovalentCoreModule.forRoot(),
    CovalentFileModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    docsRoutes,
  ],
})
export class DocsModule {}
