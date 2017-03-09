import { NgModule, ModuleWithProviders } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MdInputModule, MdIconModule } from '@angular/material';

import { TdChipsComponent } from './chips.component';
import { TdChipComponent } from './chip.component';
import { TdAutoCompleteComponent } from './autocomplete/autocomplete.component';

export { TdChipsComponent } from './chips.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MdInputModule,
    MdIconModule,
  ],
  declarations: [
    TdChipsComponent,
    TdChipComponent,
    TdAutoCompleteComponent,
  ],
  exports: [
    TdChipsComponent,
    TdChipComponent,
    TdAutoCompleteComponent,
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
