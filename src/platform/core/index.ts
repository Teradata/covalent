import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '@angular/material';

/**
 * NUCLEUS
 */

import { CovalentNucleusModule } from './nucleus/nucleus.module';
export * from './nucleus/nucleus.module';

/**
 * DIALOGS
 */

import { CovalentDialogsModule } from './dialogs/dialogs.module';
export * from './dialogs/dialogs.module';

/**
 * EXPANSION PANEL
 */

import { CovalentExpansionPanelModule } from './expansion-panel/expansion-panel.module';
export * from './expansion-panel/expansion-panel.module';

/**
 * LAYOUT
 */

import { CovalentLayoutModule } from './layout/layout.module';
export * from './layout/layout.module';

/**
 * LOADING
 */

import { CovalentLoadingModule } from './loading/loading.module';
export * from './loading/loading.module';

/**
 * MEDIA
 */

import { CovalentMediaModule } from './media/media.module';
export * from './media/media.module';

/**
 * STEPS
 */

import { CovalentStepsModule } from './steps/steps.module';
export * from './steps/steps.module';

@NgModule({
  imports: [
    HttpModule,
    JsonpModule,
    FormsModule,
    CommonModule,
    MaterialModule.forRoot(),
    CovalentNucleusModule.forRoot(),
    CovalentDialogsModule.forRoot(),
    CovalentExpansionPanelModule.forRoot(),
    CovalentLayoutModule.forRoot(),
    CovalentLoadingModule.forRoot(),
    CovalentMediaModule.forRoot(),
    CovalentStepsModule.forRoot(),
  ],
  exports: [
    HttpModule,
    JsonpModule,
    FormsModule,
    CommonModule,
    MaterialModule,
    CovalentNucleusModule,
    CovalentDialogsModule,
    CovalentExpansionPanelModule,
    CovalentLayoutModule,
    CovalentLoadingModule,
    CovalentMediaModule,
    CovalentStepsModule,
  ],
})
export class CovalentCoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CovalentCoreModule,
      providers: [ ],
    };
  }
}
