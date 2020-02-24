import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { NavStepsDemoHorizontalComponent } from './nav-steps-demo-horizontal/nav-steps-demo-horizontal.component';
import { NavStepsDemoVerticalComponent } from './nav-steps-demo-vertical/nav-steps-demo-vertical.component';
import { CovalentStepsModule } from '@covalent/core/steps';
import {
  NavStepsDemoComponent,
  NavStepsRoute1DemoComponent,
  NavStepsRoute3DemoComponent,
  NavStepsRoute4DemoComponent,
} from './nav-steps-demo.component';
import { NavStepsDemoRoutingModule } from './nav-steps-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';

@NgModule({
  declarations: [
    NavStepsDemoComponent,
    NavStepsRoute1DemoComponent,
    NavStepsRoute3DemoComponent,
    NavStepsRoute4DemoComponent,
    NavStepsDemoHorizontalComponent,
    NavStepsDemoVerticalComponent,
  ],
  imports: [
    DemoModule,
    NavStepsDemoRoutingModule,
    /** Covalent Modules */
    CovalentStepsModule,
    /** Angular Modules */
    CommonModule,
    MatDividerModule,
  ],
})
export class NavStepsDemoModule {}
