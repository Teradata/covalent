import { Type } from '@angular/core';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MdRippleModule, MdIconModule, PortalModule } from '@angular/material';

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
  /**
   * @deprecated in 1.0.0-beta.3
   *
   * Please use without calling forRoot()
   */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CovalentExpansionPanelModule,
      providers: [ ],
    };
  }
}
