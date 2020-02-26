import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingDemoBasicComponent } from './loading-demo-basic/loading-demo-basic.component';
import { LoadingDemoReplaceComponent } from './loading-demo-replace/loading-demo-replace.component';
import { LoadingDemoObservableComponent } from './loading-demo-observable/loading-demo-observable.component';
import { CovalentLoadingModule } from '@covalent/core/loading';
import { LoadingDemoComponent } from './loading-demo.component';
import { LoadingDemoRoutingModule } from './loading-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { MatButtonModule } from '@angular/material/button';
import { LoadingDemoFullscreenComponent } from './loading-demo-fullscreen/loading-demo-fullscreen.component';

@NgModule({
  declarations: [
    LoadingDemoComponent,
    LoadingDemoBasicComponent,
    LoadingDemoReplaceComponent,
    LoadingDemoObservableComponent,
    LoadingDemoFullscreenComponent,
  ],
  imports: [
    DemoModule,
    LoadingDemoRoutingModule,
    /** Covalent Modules */
    CovalentLoadingModule,
    /** Angular Modules */
    CommonModule,
    MatButtonModule,
  ],
})
export class LoadingDemoModule {}
