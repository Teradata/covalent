import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ComponentDetailsModule } from 'app/components/shared/component-details/component-details.module';
import { CovalentPagingModule } from '@covalent/core/paging';
import { setComponentRoutes } from 'app/content/components/components';
import { PagingDemoComponent } from './paging.component';
import { MatDividerModule } from '@angular/material/divider';

const routes: Routes = setComponentRoutes({
  overviewDemoComponent: PagingDemoComponent,
  id: 'paging',
});

@NgModule({
  declarations: [PagingDemoComponent],
  imports: [
    CommonModule,
    // Material
    MatDividerModule,
    ComponentDetailsModule,
    // Covalent
    CovalentPagingModule,
    // Docs
    // Routes
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class PagingDemoModule {}
