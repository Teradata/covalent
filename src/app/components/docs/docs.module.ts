import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { docsRoutes } from './docs.routes';

import { DocsComponent } from './docs.component';
import { DocsOverviewComponent } from './overview/overview.component';
import { CreatingComponent } from './creating/creating.component';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { AngularComponent } from './angular/angular.component';
import { BuildTasksComponent } from './build-tasks/build-tasks.component';
import { DeploymentComponent } from './deployment/deployment.component';
import { IconsComponent } from './icons/icons.component';
import { TestingComponent } from './testing/testing.component';
import { ThemeComponent } from './theme/theme.component';
import { MockDataComponent } from './mock-data/mock-data.component';

import { DocumentationToolsModule } from '../../documentation-tools';

import { MdButtonModule, MdListModule, MdIconModule, MdCardModule, MdToolbarModule, MdCoreModule } from '@angular/material';

import { CovalentLayoutModule, CovalentMediaModule } from '../../../platform/core';
import { CovalentHighlightModule } from '../../../platform/highlight';

@NgModule({
  declarations: [
    DocsComponent,
    DocsOverviewComponent,
    CreatingComponent,
    AngularMaterialComponent,
    AngularComponent,
    BuildTasksComponent,
    DeploymentComponent,
    IconsComponent,
    TestingComponent,
    ThemeComponent,
    MockDataComponent,
  ],
  imports: [
    /** Angular Modules */
    CommonModule,
    /** Material Modules */
    MdCoreModule,
    MdButtonModule,
    MdListModule,
    MdIconModule,
    MdCardModule,
    MdToolbarModule,
    /** Covalent Modules */
    CovalentLayoutModule,
    CovalentMediaModule,
    CovalentHighlightModule,
    DocumentationToolsModule,
    docsRoutes,
  ],
})
export class DocsModule {}
