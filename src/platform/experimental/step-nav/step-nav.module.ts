import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { TdStepNavComponent } from './step-nav.component';
import { TdStepLinkComponent } from './step-link/step-link.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
  ],
  declarations: [
    TdStepNavComponent,
    TdStepLinkComponent,
  ],
  exports: [
    TdStepNavComponent,
    TdStepLinkComponent,
  ],
})
export class CovalentStepNavModule {

}
