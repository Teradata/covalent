import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
import { UtilitySASSMixinsComponent } from './utility-sass-mixins/utility-sass-mixins.component';
import { MockDataComponent } from './mock-data/mock-data.component';

import { DocumentationToolsModule } from '../../documentation-tools';

import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

import { CovalentHighlightModule } from '../../../platform/highlight';

import { SidenavContentModule } from '../../components/shared/sidenav-content/sidenav-content.module';
import { ToolbarModule } from 'app/components/toolbar/toolbar.module';
import { RouterModule } from '@angular/router';
import { ComponentDetailsModule } from 'app/components/shared/component-details/component-details.module';
import { docsRoutes } from './docs.routes';
import { CovalentLayoutModule } from '../../../platform/core/layout';

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
    UtilitySASSMixinsComponent,
  ],
  imports: [
    /** Angular Modules */
    CommonModule,
    RouterModule,
    /** Material Modules */
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    /** Covalent Modules */
    CovalentLayoutModule,
    CovalentHighlightModule,
    DocumentationToolsModule,
    ToolbarModule,
    ComponentDetailsModule,
    SidenavContentModule,
    docsRoutes,
  ],
})
export class DocsModule {}
