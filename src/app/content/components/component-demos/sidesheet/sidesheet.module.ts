import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { ComponentDetailsModule } from 'app/components/shared/component-details/component-details.module';
import { CovalentSidesheetModule } from '@covalent/core/sidesheet';
import { setComponentRoutes } from 'app/content/components/components';
import { SidesheetDemoComponent } from './sidesheet.component';

const routes: Routes = setComponentRoutes({
  overviewDemoComponent: SidesheetDemoComponent,
  id: 'sidesheet',
});

@NgModule({
  declarations: [SidesheetDemoComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    // Material
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    ComponentDetailsModule,
    // Covalent
    CovalentSidesheetModule,
    // Docs
    // Routes
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class SidesheetDemoModule {}
