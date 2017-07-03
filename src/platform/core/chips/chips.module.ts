import { NgModule, ModuleWithProviders } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MdInputModule, MdIconModule, MdAutocompleteModule, MdChipsModule } from '@angular/material';

import { TdChipsComponent, TdChipDirective, TdAutocompleteOptionDirective } from './chips.component';
export { TdChipsComponent, TdChipDirective, TdAutocompleteOptionDirective } from './chips.component';

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
    TdChipDirective,
    TdAutocompleteOptionDirective,
  ],
  exports: [
    TdChipsComponent,
    TdChipDirective,
    TdAutocompleteOptionDirective,
  ],
})
export class CovalentChipsModule {

}
