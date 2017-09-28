import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MdInputModule, MatIconModule, MatButtonModule } from '@angular/material';

import { TdSearchInputComponent } from './search-input/search-input.component';
import { TdSearchBoxComponent } from './search-box/search-box.component';

export { TdSearchBoxComponent } from './search-box/search-box.component';
export { TdSearchInputComponent } from './search-input/search-input.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MdInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  declarations: [
    TdSearchInputComponent,
    TdSearchBoxComponent,
  ],
  exports: [
    TdSearchInputComponent,
    TdSearchBoxComponent,
  ],
})
export class CovalentSearchModule {

}
