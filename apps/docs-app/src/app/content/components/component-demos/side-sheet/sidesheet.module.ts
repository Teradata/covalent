import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ComponentDetailsModule } from '../../../../components/shared/component-details/component-details.module';
import { TdHighlightComponent } from '@covalent/highlight';
import { CovalentSideSheetModule } from '@covalent/core/side-sheet';
import { setComponentRoutes } from '../../../../content/components/components';
import { SidesheetDemoComponent } from './sidesheet.component';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = setComponentRoutes({
  overviewDemoComponent: SidesheetDemoComponent,
  id: 'side-sheet',
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
    TdHighlightComponent,
    CovalentSideSheetModule,
    // Docs
    // Routes
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class SideSheetDemoModule {}
