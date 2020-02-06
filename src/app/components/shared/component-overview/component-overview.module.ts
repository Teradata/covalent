import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { ComponentOverviewComponent } from './component-overview.component';

import { RouterModule } from '@angular/router';
import { DocumentationToolsModule } from 'app/documentation-tools';
import { CovalentExpansionPanelModule } from '../../../../platform/core/expansion-panel';
import { CovalentMediaModule } from '../../../../platform/core/media';
import { CovalentCommonModule } from '../../../../platform/core/common';

@NgModule({
  declarations: [ComponentOverviewComponent],
  exports: [ComponentOverviewComponent],
  imports: [
    /** Angular Modules */
    CommonModule,
    RouterModule,
    /** Material Modules */
    MatListModule,
    MatIconModule,
    MatCardModule,
    /** Covalent Modules */
    CovalentExpansionPanelModule,
    CovalentMediaModule,
    CovalentCommonModule,
    DocumentationToolsModule,
  ],
})
export class ComponentOverviewModule {}
