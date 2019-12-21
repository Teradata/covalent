import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { StepsDemoBasicComponent } from './steps-demo-basic/steps-demo-basic.component';
import { StepsDemoComponent } from './steps-demo.component';
import { CovalentStepsModule } from '../../../../../../platform/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { StepsDemosRoutingModule } from './steps-demo-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [StepsDemoBasicComponent, StepsDemoComponent],
  imports: [
    DemoModule,
    FormsModule,
    /** Covalent Modules */
    CovalentStepsModule,
    /** Angular Modules */
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    StepsDemosRoutingModule,
  ],
})
export class StepsDemosModule {}
