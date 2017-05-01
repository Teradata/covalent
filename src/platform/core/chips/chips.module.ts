import { NgModule, ModuleWithProviders } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MdInputModule, MdIconModule, MdAutocompleteModule, MdChipsModule } from '@angular/material';

import { TdChipsComponent } from './chips.component';
export { TdChipsComponent } from './chips.component';

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
  ],
  exports: [
    TdChipsComponent,
  ],
})
export class CovalentChipsModule {

}
