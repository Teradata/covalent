import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { TableauDemoComponent } from './tableau-demo.component';
import { TableauDemoRoutingModule } from './tableau-demo-routing.module';
import { DemoModule } from 'app/components/shared/demo-tools/demo.module';
import { TableauBasicSharedModule } from './tableau-demo-basic/tableau-demo-basic.shared';

@NgModule({
  declarations: [TableauDemoComponent],
  imports: [
    TableauBasicSharedModule,
    DemoModule,
    /** Covalent Modules */
    TableauDemoRoutingModule,
    /** Angular Modules */
    CommonModule,
    // Material
    MatSelectModule,
    MatIconModule,
  ],
})
export class TableauDemoModule {}
