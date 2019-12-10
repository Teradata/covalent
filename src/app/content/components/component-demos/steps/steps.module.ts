import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { ComponentDetailsModule } from 'app/components/shared/component-details/component-details.module';
import { setComponentRoutes } from 'app/content/components/components';
import { CovalentStepsModule } from '../../../../../platform/core/steps';
import { MatButtonModule } from '@angular/material/button';
import { StepsHeroComponent } from './steps.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';

const routes: Routes = setComponentRoutes({
  overviewDemoComponent: StepsHeroComponent,
  id: 'steps',
});

@NgModule({
  declarations: [StepsHeroComponent],
  imports: [
    CommonModule,
    FormsModule,
    // Material
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
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
export class StepsDemoModule {}
