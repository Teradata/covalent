import { NgModule } from '@angular/core';
import { TdLoadingMaskModule } from '../../../../../../../platform/experimental/loading-mask';
import { CommonModule } from '@angular/common';
import { LoadingMaskDemoBasicComponent } from './loading-mask-demo-basic.component';

@NgModule({
  declarations: [LoadingMaskDemoBasicComponent],
  imports: [
    /** Covalent Modules */
    TdLoadingMaskModule,
  ],
  exports: [LoadingMaskDemoBasicComponent],
})
export class LoadingMaskDemoSharedModule {}
