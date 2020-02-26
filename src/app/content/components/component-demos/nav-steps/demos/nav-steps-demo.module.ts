import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavStepsDemoBasicComponent } from './nav-steps-demo-basic/nav-steps-demo-basic.component';
import { CovalentStepsModule } from '@covalent/core/steps';
import { NavStepsDemoComponent } from './nav-steps-demo.component';
import { NavStepsDemoRoutingModule } from './nav-steps-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';

@NgModule({
  declarations: [NavStepsDemoComponent, NavStepsDemoBasicComponent],
  imports: [
    DemoModule,
    NavStepsDemoRoutingModule,
    /** Covalent Modules */
    CovalentStepsModule,
    /** Angular Modules */
    CommonModule,
  ],
})
export class NavStepsDemoModule {}
