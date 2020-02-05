import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { ComponentDetailsModule } from 'app/components/shared/component-details/component-details.module';
import { setComponentRoutes } from 'app/content/components/components';
import { DataTableHeroComponent } from './data-table.component';
import { MatButtonModule } from '@angular/material/button';
import { CovalentDataTableModule } from '../../../../../platform/core/data-table';
import { CovalentDialogsModule } from '../../../../../platform/core/dialogs';

const routes: Routes = setComponentRoutes({
  overviewDemoComponent: DataTableHeroComponent,
  id: 'data-table',
});

@NgModule({
  declarations: [DataTableHeroComponent],
  imports: [
    CommonModule,
    // Material
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    ComponentDetailsModule,
    // Covalent
    CovalentDataTableModule,
    CovalentDialogsModule,
    // Docs
    // Routes
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class DataTableDemoModule {}
