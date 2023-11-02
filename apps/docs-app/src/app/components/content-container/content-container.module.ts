import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { CovalentCommonModule } from '@covalent/core/common';

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
    LayoutModule,
    /** Covalent Modules */
    CovalentCommonModule,
    SidenavContentModule,
  ],
})
export class ContentContainerModule {}
