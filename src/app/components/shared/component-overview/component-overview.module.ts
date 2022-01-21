import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { ComponentOverviewComponent } from './component-overview.component';

import { RouterModule } from '@angular/router';
import { DocumentationToolsModule } from 'app/documentation-tools';
import { CovalentCommonModule } from '../../../../platform/core/common';
import { CovalentFileModule } from '../../../../platform/core/file';
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
    CovalentCommonModule,
    DocumentationToolsModule,
    CovalentFileModule,
  ],
})
export class ComponentOverviewModule {}
