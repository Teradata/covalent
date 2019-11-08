import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidesheetDemoBasicComponent } from './sidesheet-demo-basic/sidesheet-demo-basic.component';
import { CovalentSidesheetModule } from '@covalent/core/sidesheet';
import { SidesheetDemoComponent } from './sidesheet-demo.component';
import { SidesheetDemoRoutingModule } from './sidesheet-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';

@NgModule({
  declarations: [
    SidesheetDemoComponent,
    SidesheetDemoBasicComponent
  ],
  imports: [
    DemoModule,
    SidesheetDemoRoutingModule,
    /** Covalent Modules */
    CovalentSidesheetModule,
    /** Angular Modules */
    CommonModule,
  ],
})
export class SidesheetDemoModule {}
