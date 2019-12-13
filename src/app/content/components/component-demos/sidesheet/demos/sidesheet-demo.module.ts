import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidesheetDemoBasicComponent } from './sidesheet-demo-basic/sidesheet-demo-basic.component';
import { CovalentSidesheetModule } from '@covalent/core/sidesheet';
import { SidesheetDemoComponent } from './sidesheet-demo.component';
import { SidesheetDemoRoutingModule } from './sidesheet-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [SidesheetDemoComponent, SidesheetDemoBasicComponent],
  imports: [
    DemoModule,
    SidesheetDemoRoutingModule,
    /** Covalent Modules */
    CovalentSidesheetModule,
    /** Angular Modules */
    CommonModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
  ],
})
export class SidesheetDemoModule {}
