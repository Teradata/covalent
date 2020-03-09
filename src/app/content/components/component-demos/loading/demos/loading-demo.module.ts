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
import { LoadingDemoIconComponent } from './loading-demo-icon/loading-demo-icon.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    LoadingDemoComponent,
    LoadingDemoBasicComponent,
    LoadingDemoReplaceComponent,
    LoadingDemoObservableComponent,
    LoadingDemoFullscreenComponent,
    LoadingDemoIconComponent,
  ],
  imports: [
    DemoModule,
    LoadingDemoRoutingModule,
    /** Covalent Modules */
    CovalentLoadingModule,
    /** Angular Modules */
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
  ],
})
export class LoadingDemoModule {}
