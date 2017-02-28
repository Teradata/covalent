import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdTooltipModule, MdIconModule } from '@angular/material';

import { TdJsonFormatterComponent } from './json-formatter.component';

export { TdJsonFormatterComponent } from './json-formatter.component';

@NgModule({
  imports: [
    CommonModule,
    MdTooltipModule.forRoot(),
    MdIconModule.forRoot(),
  ],
  declarations: [
    TdJsonFormatterComponent,
  ],
  exports: [
    TdJsonFormatterComponent,
  ],
})
export class CovalentJsonFormatterModule {
  /**
   * @deprecated in 1.0.0-beta.3
   *
   * Please use without calling forRoot()
   */
  static forRoot(): ModuleWithProviders {
    /* tslint:disable-next-line */
    console.warn('forRoot() has been deprecated in CovalentJsonFormatterModule');
    return {
      ngModule: CovalentJsonFormatterModule,
      providers: [],
    };
  }
}
