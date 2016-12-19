import { Type } from '@angular/core';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { TdExpansionPanelComponent, TdExpansionPanelHeaderDirective, TdExpansionPanelLabelDirective,
         TdExpansionPanelSublabelDirective, TdExpansionPanelSummaryComponent } from './expansion-panel.component';

const TD_EXPANSION_PANEL: Type<any>[] = [
  TdExpansionPanelComponent,
  TdExpansionPanelHeaderDirective,
  TdExpansionPanelLabelDirective,
  TdExpansionPanelSublabelDirective,
  TdExpansionPanelSummaryComponent,
];

export { TdExpansionPanelComponent } from './expansion-panel.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
  ],
  declarations: [
    TD_EXPANSION_PANEL,
  ],
  exports: [
    CommonModule,
    MaterialModule,

    TD_EXPANSION_PANEL,
  ],
})
export class CovalenExpansionPanelModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CovalenExpansionPanelModule,
      providers: [ ],
    };
  }
}
