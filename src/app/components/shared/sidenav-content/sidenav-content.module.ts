import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { SidenavContentComponent } from './sidenav-content.component';

import { CovalentExpansionPanelModule, CovalentMediaModule, CovalentCommonModule } from '../../../../platform/core';
import { RouterModule } from '@angular/router';

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
  ],
})
export class SidenavContentModule {}
