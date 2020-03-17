import { NgModule, ModuleWithProviders } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';

import { TdChipsComponent, TdChipDirective, TdAutocompleteOptionDirective } from './chips.component';

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
