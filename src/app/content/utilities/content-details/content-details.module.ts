import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { RouterModule } from '@angular/router';

import { ContentDetailsComponent } from './content-details.component';
import { MatTabsModule } from '@angular/material/tabs';
import { contentDetailsRoutes } from './content-details.routes';
import { ContentOverviewComponent } from './content-overview/content-overview.component';
import { ContentApiComponent } from './content-api/content-api.component';
import { ContentExamplesComponent } from './content-examples/content-examples.component';
import { PortalModule } from '@angular/cdk/portal';

import { DocumentationToolsModule } from 'app/documentation-tools';
import { CovalentExpansionPanelModule } from '../../../../platform/core/expansion-panel';
import { CovalentMediaModule } from '../../../../platform/core/media';
import { CovalentCommonModule } from '../../../../platform/core/common';

@NgModule({
  declarations: [ContentDetailsComponent, ContentOverviewComponent, ContentApiComponent, ContentExamplesComponent],
  exports: [ContentDetailsComponent],
  imports: [
    /** Angular Modules */
    CommonModule,
    RouterModule,
    /** Material Modules */
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    PortalModule,
    /** Covalent Modules */
    CovalentExpansionPanelModule,
    CovalentMediaModule,
    CovalentCommonModule,
    contentDetailsRoutes,
    DocumentationToolsModule,
  ],
  entryComponents: [],
})
export class ContentDetailsModule {}
