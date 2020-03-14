import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentExpansionPanelModule } from '@covalent/core/expansion-panel';

import { ComponentDetailsModule } from 'app/components/shared/component-details/component-details.module';
import { setComponentRoutes } from 'app/content/components/components';

import { ExpansionPanelDemoComponent } from './expansion-panels.component';

const routes: Routes = setComponentRoutes({
  overviewDemoComponent: ExpansionPanelDemoComponent,
  id: 'expansion-panels',
});

@NgModule({
  declarations: [ExpansionPanelDemoComponent],
  imports: [
    CommonModule,
    ComponentDetailsModule,
    // Covalent
    CovalentExpansionPanelModule,
    CovalentHighlightModule,
    // Docs
    // Routes
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class ExpansionPanelsDemoModule {}
