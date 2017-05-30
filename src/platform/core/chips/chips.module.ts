import { NgModule, ModuleWithProviders } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MdInputModule, MdIconModule, MdAutocompleteModule, MdChipsModule } from '@angular/material';

import { TdChipsComponent, TdBasicChipDirective, TdAutocompleteOptionDirective } from './chips.component';
export { TdChipsComponent, TdBasicChipDirective, TdAutocompleteOptionDirective } from './chips.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MdInputModule,
    MdIconModule,
    MdChipsModule,
    MdAutocompleteModule,
  ],
  declarations: [
    TdChipsComponent,
    TdBasicChipDirective,
    TdAutocompleteOptionDirective,
  ],
  exports: [
    TdChipsComponent,
    TdBasicChipDirective,
    TdAutocompleteOptionDirective,
  ],
})
export class CovalentChipsModule {

}
