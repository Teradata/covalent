import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CovalentSideSheetModule } from '@covalent/core/side-sheet';
import { SideSheetDemoBasicComponent } from './side-sheet-demo-basic/side-sheet-demo-basic.component';
import { SideSheetDemoAdvancedComponent } from './side-sheet-demo-advanced/side-sheet-demo-advanced.component';
import {
  SideSheetDemoMultiComponent,
  SideSheetDemoExampleComponent,
} from './side-sheet-demo-multi/side-sheet-demo-multi.component';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { SidesheetDemoComponent } from './sidesheet-demo.component';
import { SidesheetDemoRoutingModule } from './sidesheet-demo-routing.module';

@NgModule({
  declarations: [
    SidesheetDemoComponent,
    SideSheetDemoBasicComponent,
    SideSheetDemoAdvancedComponent,
    SideSheetDemoExampleComponent,
    SideSheetDemoMultiComponent,
  ],
  imports: [
    DemoModule,
    SidesheetDemoRoutingModule,
    /** Covalent Modules */
    CovalentSideSheetModule,
    /** Angular Modules */
    CommonModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
  ],
})
export class SideSheetDemoModule {}
