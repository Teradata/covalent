import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { GuidedTourDemoComponent } from './guided-tour-demo.component';
import { GuidedTourDemoRoutingModule } from './guided-tour-demo-routing.module';
import { GuidedTourDemoBasicSharedModule } from './guided-tour-demo-basic/guided-tour-basic-shared';
import { MatButtonModule } from '@angular/material/button';
import { GuidedTourDemoAbortOnComponent } from './guided-tour-demo-abort-on/guided-tour-demo-abort-on.component';
import { GuidedTourDemoAttachOptionsComponent } from './guided-tour-demo-attach-options/guided-tour-demo-attach-options.component';

@NgModule({
  declarations: [GuidedTourDemoComponent, GuidedTourDemoAbortOnComponent, GuidedTourDemoAttachOptionsComponent],
  imports: [CommonModule, DemoModule, GuidedTourDemoBasicSharedModule, GuidedTourDemoRoutingModule, MatButtonModule],
})
export class GuidedTourDemosModule {}
