import { NgModule, ModuleWithProviders } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatInputModule, MatIconModule, MatAutocompleteModule, MatChipsModule } from '@angular/material';

import { TdChipsComponent, TdChipDirective, TdAutocompleteOptionDirective } from './chips.component';
export { TdChipsComponent, TdChipDirective, TdAutocompleteOptionDirective } from './chips.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatChipsModule,
    MatAutocompleteModule,
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
