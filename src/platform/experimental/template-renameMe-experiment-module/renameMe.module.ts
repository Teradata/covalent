import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TdRenameMeComponent } from './renameMe.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TdRenameMeComponent,
  ],
  exports: [
    TdRenameMeComponent,
  ],
})
export class CovalentRenameMeModule {

}
