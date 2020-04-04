import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavStepsDemoHorizontalComponent } from './nav-steps-demo-horizontal/nav-steps-demo-horizontal.component';
import { NavStepsDemoVerticalComponent } from './nav-steps-demo-vertical/nav-steps-demo-vertical.component';
import { NavStepsDemoRouteComponent } from './nav-steps-demo-route/nav-steps-demo-route.component';
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
    NavStepsDemoRouteComponent,
    NavStepsDemoVerticalComponent,
  ],
  imports: [
    DemoModule,
    NavStepsDemoRoutingModule,
    /** Covalent Modules */
    CovalentStepsModule,
    /** Angular Modules */
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatToolbarModule,
  ],
})
export class NavStepsDemoModule {}
