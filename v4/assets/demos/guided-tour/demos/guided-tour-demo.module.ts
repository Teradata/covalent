import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { GuidedTourDemoComponent } from './guided-tour-demo.component';
import { GuidedTourDemoRoutingModule } from './guided-tour-demo-routing.module';
import { GuidedTourDemoBasicSharedModule } from './guided-tour-demo-basic/guided-tour-basic-shared';
import { MatButtonModule } from '@angular/material/button';
import { GuidedTourDemoAbortOnComponent } from './guided-tour-demo-abort-on/guided-tour-demo-abort-on.component';
import { GuidedTourDemoAdvanceOnComponent } from './guided-tour-demo-advance-on/guided-tour-demo-advance-on.component';
import { GuidedTourDemoDelayComponent } from './guided-tour-demo-delay/guided-tour-demo-delay.component';
import { GuidedTourDemoDisableNextComponent } from './guided-tour-demo-disable-next/guided-tour-demo-disable-next.component';
import { GuidedTourDemoNotFoundComponent } from './guided-tour-demo-not-found/guided-tour-demo-not-found.component';
import { GuidedTourDemoGoBackComponent } from './guided-tour-demo-go-back/guided-tour-demo-go-back.component';
import { GuidedTourDemoSkipCountComponent } from './guided-tour-demo-skip-count/guided-tour-demo-skip-count.component';
import { GuidedTourDemoGoBackNavigationComponent } from './guided-tour-demo-go-back-navigation/guided-tour-demo-go-back-navigation.component';
@NgModule({
  declarations: [
    GuidedTourDemoComponent,
    GuidedTourDemoAbortOnComponent,
    GuidedTourDemoDelayComponent,
    GuidedTourDemoDisableNextComponent,
    GuidedTourDemoAdvanceOnComponent,
    GuidedTourDemoNotFoundComponent,
    GuidedTourDemoGoBackComponent,
    GuidedTourDemoSkipCountComponent,
    GuidedTourDemoGoBackNavigationComponent,
  ],
  imports: [CommonModule, DemoModule, GuidedTourDemoBasicSharedModule, GuidedTourDemoRoutingModule, MatButtonModule],
})
export class GuidedTourDemosModule {}
