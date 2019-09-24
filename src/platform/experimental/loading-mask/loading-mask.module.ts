import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TdLoadingMaskComponent } from './loading-mask.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TdLoadingMaskComponent],
  exports: [TdLoadingMaskComponent],
})
export class TdLoadingMaskModule {}
