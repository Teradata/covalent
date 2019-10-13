import { CovalentExpansionPanelModule } from '../../../platform/core/expansion-panel/expansion-panel.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';

import { CovalentMediaModule, CovalentCommonModule } from '../../../platform/core';
import { RouterModule } from '@angular/router';
import { ContentContainerComponent } from './content-container.component';
import { SidenavContentModule } from '../shared/sidenav-content/sidenav-content.module';

@NgModule({
  declarations: [ContentContainerComponent],
  exports: [ContentContainerComponent],
  imports: [
    /** Angular Modules */
    CommonModule,
    RouterModule,
    /** Material Modules */
    MatSidenavModule,
    /** Covalent Modules */
    CovalentMediaModule,
    CovalentCommonModule,
    CovalentExpansionPanelModule,
    SidenavContentModule,
  ],
})
export class ContentContainerModule {}
