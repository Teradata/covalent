import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { GuidedTourDemoComponent } from './guided-tour-demo.component';
import { GuidedTourDemoRoutingModule } from './guided-tour-demo-routing.module';
import { GuidedTourDemoBasicSharedModule } from './guided-tour-demo-basic/guided-tour-basic-shared';

@NgModule({
  declarations: [GuidedTourDemoComponent],
  imports: [CommonModule, DemoModule, GuidedTourDemoBasicSharedModule, GuidedTourDemoRoutingModule],
})
export class GuidedTourDemosModule {}
