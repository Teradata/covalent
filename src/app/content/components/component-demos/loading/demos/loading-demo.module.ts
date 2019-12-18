import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingDemoBasicComponent } from './loading-demo-basic/loading-demo-basic.component';
import { CovalentLoadingModule } from '@covalent/core/loading';
import { LoadingDemoComponent } from './loading-demo.component';
import { LoadingDemoRoutingModule } from './loading-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [LoadingDemoComponent, LoadingDemoBasicComponent],
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
