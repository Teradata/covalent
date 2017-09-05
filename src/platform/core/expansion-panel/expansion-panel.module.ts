import { Type } from '@angular/core';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { MdRippleModule, MdIconModule } from '@angular/material';

import { TdExpansionPanelComponent, TdExpansionPanelHeaderDirective, TdExpansionPanelLabelDirective,
         TdExpansionPanelSublabelDirective, TdExpansionPanelSummaryComponent } from './expansion-panel.component';
import { TdExpansionPanelGroupComponent } from './expansion-panel-group.component';

const TD_EXPANSION_PANEL: Type<any>[] = [
  TdExpansionPanelGroupComponent,
  TdExpansionPanelComponent,
  TdExpansionPanelHeaderDirective,
  TdExpansionPanelLabelDirective,
  TdExpansionPanelSublabelDirective,
  TdExpansionPanelSummaryComponent,
];

export { TdExpansionPanelComponent } from './expansion-panel.component';
export { TdExpansionPanelGroupComponent } from './expansion-panel-group.component';

@NgModule({
  imports: [
    CommonModule,
    MdRippleModule,
    MdIconModule,
    PortalModule,
  ],
  declarations: [
    TD_EXPANSION_PANEL,
  ],
  exports: [
    TD_EXPANSION_PANEL,
  ],
})
export class CovalentExpansionPanelModule {

}
