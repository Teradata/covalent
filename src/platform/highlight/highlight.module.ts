import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TdHighlightComponent } from './highlight.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TdHighlightComponent,
  ],
  exports: [
    TdHighlightComponent,
  ],
})
export class CovalentHighlightModule {
  /**
   * @deprecated in 1.0.0-beta.3
   *
   * Please use without calling forRoot()
   */
  static forRoot(): ModuleWithProviders {
    /* tslint:disable-next-line */
    console.warn('forRoot() has been deprecated in CovalentHighlightModule');
    return {
      ngModule: CovalentHighlightModule,
      providers: [],
    };
  }
}
