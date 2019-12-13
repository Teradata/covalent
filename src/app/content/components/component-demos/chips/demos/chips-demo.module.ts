import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipsDemoBasicComponent } from './chips-demo-basic/chips-demo-basic.component';
import { CovalentChipsModule } from '@covalent/core/chips';
import { ChipsDemoComponent } from './chips-demo.component';
import { ChipsDemoRoutingModule } from './chips-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ChipsDemoComponent, ChipsDemoBasicComponent],
  imports: [
    DemoModule,
    ChipsDemoRoutingModule,
    /** Covalent Modules */
    CovalentChipsModule,
    /** Angular Modules */
    CommonModule,
    FormsModule,
  ],
})
export class ChipsDemoModule {}
