import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { SidenavContentComponent } from './sidenav-content.component';

import { RouterModule } from '@angular/router';
import { CovalentExpansionPanelModule } from '../../../../platform/core/expansion-panel';
import { CovalentMediaModule } from '../../../../platform/core/media';
import { CovalentLayoutModule } from '../../../../platform/core/layout';
import { CovalentCommonModule } from '../../../../platform/core/common';

@NgModule({
  declarations: [SidenavContentComponent],
  exports: [SidenavContentComponent],
  imports: [
    /** Angular Modules */
    CommonModule,
    RouterModule,
    /** Material Modules */
    MatListModule,
    MatExpansionModule,
    /** Covalent Modules */
    CovalentExpansionPanelModule,
    CovalentMediaModule,
    CovalentCommonModule,
    CovalentLayoutModule,
  ],
})
export class SidenavContentModule {}
