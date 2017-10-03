import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CovalentCommonModule } from '@covalent/core';
 
import { designPatternsRoutes } from './design-patterns.routes';
import { DesignPatternsComponent } from './design-patterns.component';
import { CardsComponent } from './cards/cards.component';
import { AlertsComponent } from './alerts/alerts.component';
import { ManagementListComponent } from './management-list/management-list.component';
import { NavigationDrawerComponent } from './navigation-drawer/navigation-drawer.component';

import { MatButtonModule, MatListModule, MatIconModule, MatCardModule, MatToolbarModule, MatSnackBarModule,
         MatInputModule, MatMenuModule, MatSelectModule, MatGridListModule, MatTabsModule, MatSidenavModule,
         MatTooltipModule, MatProgressBarModule, MatButtonToggleModule } from '@angular/material';

import { CovalentLayoutModule, CovalentMediaModule, CovalentSearchModule, CovalentPagingModule,
         CovalentExpansionPanelModule, CovalentDialogsModule, CovalentMessageModule } from '../../../platform/core';
import { CovalentHighlightModule } from '../../../platform/highlight';

import { ToolbarModule } from '../../components/toolbar/toolbar.module';

@NgModule({
  declarations: [
    DesignPatternsComponent,
    CardsComponent,
    AlertsComponent,
    ManagementListComponent,
    NavigationDrawerComponent,
  ],
  imports: [
    /** Angular Modules */
    CommonModule,
    FormsModule,
    /** Material Modules */
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    MatGridListModule,
    MatTabsModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatButtonToggleModule,
    /** Covalent Modules */
    CovalentCommonModule,
    CovalentLayoutModule,
    CovalentMediaModule,
    CovalentSearchModule,
    CovalentPagingModule,
    CovalentExpansionPanelModule,
    CovalentHighlightModule,
    CovalentDialogsModule,
    CovalentMessageModule,
    designPatternsRoutes,
    ToolbarModule,
  ],
})
export class DesignPatternsModule {}
