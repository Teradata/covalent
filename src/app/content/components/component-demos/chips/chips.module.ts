import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ComponentDetailsModule } from 'app/components/shared/component-details/component-details.module';
import { setComponentRoutes } from 'app/content/components/components';
import { ChipsDemoComponent } from './chips.component';
import { FormsModule } from '@angular/forms';
import { CovalentChipsModule } from '../../../../../platform/core/chips';

const routes: Routes = setComponentRoutes({
  overviewDemoComponent: ChipsDemoComponent,
  id: 'chips',
});

@NgModule({
  declarations: [ChipsDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    // Material
    ComponentDetailsModule,
    // Covalent
    CovalentChipsModule,
    // Docs
    // Routes
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class ChipsDemoModule {}
