import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';

import { RouterModule } from '@angular/router';
import { ContentContainerComponent } from './content-container.component';
import { SidenavContentModule } from '../shared/sidenav-content/sidenav-content.module';
import { CovalentCommonModule } from '../../../platform/core/common';

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
    CovalentCommonModule,
    SidenavContentModule,
  ],
})
export class ContentContainerModule {}
