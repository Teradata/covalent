import { NgModule } from '@angular/core';
import { LoadingMaskDemoComponent } from './loading-mask-demo.component';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { LoadingMaskDemoSharedModule } from './loading-mask-demo-basic/loading-mask-demo-basic.shared';
import { LoadingMaskDemoRoutingModule } from './loading-mask-demo-routing.module';

@NgModule({
  declarations: [LoadingMaskDemoComponent],
  imports: [LoadingMaskDemoSharedModule, DemoModule, LoadingMaskDemoRoutingModule],
})
export class LoadingMaskDemosModule {}
