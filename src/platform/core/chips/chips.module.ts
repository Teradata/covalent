import { NgModule, ModuleWithProviders } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MdInputModule, MdIconModule, MdAutocompleteModule, MdChipsModule } from '@angular/material';

import { TdChipsComponent, TdBasicChipDirective, TdAutocompleteDirective } from './chips.component';
export { TdChipsComponent, TdBasicChipDirective, TdAutocompleteDirective } from './chips.component';

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
    TdAutocompleteDirective,
  ],
  exports: [
    TdChipsComponent,
    TdBasicChipDirective,
    TdAutocompleteDirective,
  ],
})
export class CovalentChipsModule {

}
