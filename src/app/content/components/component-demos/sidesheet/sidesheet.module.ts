import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ComponentDetailsModule } from 'app/components/shared/component-details/component-details.module';
import { CovalentHighlightModule } from '@covalent/highlight';
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
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule,
    ComponentDetailsModule,
    // Covalent
    CovalentHighlightModule,
    CovalentSidesheetModule,
    // Docs
    // Routes
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class SidesheetDemoModule {}
