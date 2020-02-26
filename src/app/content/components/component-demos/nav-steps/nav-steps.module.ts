import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { ComponentDetailsModule } from 'app/components/shared/component-details/component-details.module';
import { setComponentRoutes } from 'app/content/components/components';
import { NavStepsDemoComponent } from './nav-steps.component';
import { CovalentStepsModule } from '../../../../../platform/core/steps';

const routes: Routes = setComponentRoutes({
  overviewDemoComponent: NavStepsDemoComponent,
  id: 'nav-steps',
});

@NgModule({
  declarations: [NavStepsDemoComponent],
  imports: [
    CommonModule,
    // Material
    MatSelectModule,
    MatIconModule,
    ComponentDetailsModule,
    // Covalent
    CovalentStepsModule,
    // Docs
    // Routes
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class NavstepsDemoModule {}
