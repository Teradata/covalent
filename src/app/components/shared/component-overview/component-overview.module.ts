import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { ComponentOverviewComponent } from './component-overview.component';

import { CovalentExpansionPanelModule, CovalentMediaModule, CovalentCommonModule } from '../../../../platform/core';
import { RouterModule } from '@angular/router';
import { DocumentationToolsModule } from 'app/documentation-tools';

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
