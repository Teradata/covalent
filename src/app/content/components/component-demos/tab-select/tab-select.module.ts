import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { ComponentDetailsModule } from 'app/components/shared/component-details/component-details.module';
import { setComponentRoutes } from 'app/content/components/components';
import { TabSelectDemoComponent } from './tab-select.component';
import { FormsModule } from '@angular/forms';
import { CovalentTabSelectModule } from '../../../../../platform/core/tab-select';

const routes: Routes = setComponentRoutes({
  overviewDemoComponent: TabSelectDemoComponent,
  id: 'tab-select',
});

@NgModule({
  declarations: [TabSelectDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    // Material
    MatSelectModule,
    MatIconModule,
    ComponentDetailsModule,
    // Covalent
    CovalentTabSelectModule,
    // Docs
    // Routes
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class TabSelectDemoModule {}
