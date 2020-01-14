import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { MicrostrategyDemoComponent } from './microstrategy-demo.component';
import { TableauDemoRoutingModule } from './microstrategy-demo-routing.module';
import { DemoModule } from 'app/components/shared/demo-tools/demo.module';
import { MicrostrategyBasicSharedModule } from './microstrategy-demo-basic/microstrategy-demo-basic.shared';

@NgModule({
  declarations: [MicrostrategyDemoComponent],
  imports: [
    MicrostrategyBasicSharedModule,
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
export class MicrostrategyDemoModule {}
