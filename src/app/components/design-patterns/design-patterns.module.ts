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

import { MdButtonModule, MdListModule, MdIconModule, MdCardModule, MdToolbarModule, MdCoreModule, MdSnackBarModule,
         MdInputModule, MdMenuModule, MdSelectModule, MdGridListModule, MdTabsModule, MdSidenavModule,
         MdTooltipModule, MdProgressBarModule, MdButtonToggleModule } from '@angular/material';

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
    MdCoreModule,
    MdButtonModule,
    MdListModule,
    MdIconModule,
    MdCardModule,
    MdInputModule,
    MdMenuModule,
    MdSelectModule,
    MdGridListModule,
    MdTabsModule,
    MdSidenavModule,
    MdSnackBarModule,
    MdTooltipModule,
    MdProgressBarModule,
    MdButtonToggleModule,
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
