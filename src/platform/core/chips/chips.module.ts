import { NgModule, ModuleWithProviders } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MdInputModule, MdIconModule, MdAutocompleteModule } from '@angular/material';

import { TdChipsComponent } from './chips.component';
import { TdChipComponent } from './chip.component';

export { TdChipsComponent } from './chips.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MdInputModule,
    MdIconModule,
    MdAutocompleteModule,
  ],
  declarations: [
    TdChipsComponent,
    TdChipComponent,
  ],
  exports: [
    TdChipsComponent,
    TdChipComponent,
  ],
})
export class CovalentChipsModule {
  /**
   * @deprecated in 1.0.0-beta.3
   *
   * Please use without calling forRoot()
   */
  static forRoot(): ModuleWithProviders {
    /* tslint:disable-next-line */
    console.warn('forRoot() has been deprecated in CovalentChipsModule');
    return {
      ngModule: CovalentChipsModule,
      providers: [],
    };
  }
}
