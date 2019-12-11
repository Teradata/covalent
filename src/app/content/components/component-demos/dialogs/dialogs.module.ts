import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Route } from '@angular/router';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { CovalentDialogsModule } from '@covalent/core/dialogs';

import { ComponentDetailsModule } from 'app/components/shared/component-details/component-details.module';
import { setComponentRoutes } from 'app/content/components/components';
import { DialogsDemoComponent } from './dialogs.component';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = setComponentRoutes({
  overviewDemoComponent: DialogsDemoComponent,
  id: 'dialogs',
});

@NgModule({
  declarations: [DialogsDemoComponent],
  imports: [
    CommonModule,
    // Material
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    ComponentDetailsModule,
    // Covalent
    CovalentDialogsModule,
    // Docs
    // Routes
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class DialogsDemoModule {}
