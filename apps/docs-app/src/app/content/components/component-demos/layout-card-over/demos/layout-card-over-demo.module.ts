import { NgModule } from '@angular/core';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { LayoutCardOverDemoComponent } from './layout-card-over-demo.component';
import { LayoutCardOverDemoRoutingModule } from './layout-card-over-demo-routing.module';
import { LayoutCardOverDemoSharedModule } from './layout-card-over-demo-basic/layout-card-over-card-over-demo.shared';
import { TdLayoutComponent } from '@covalent/core/layout';

@NgModule({
  declarations: [LayoutCardOverDemoComponent],
  imports: [
    LayoutCardOverDemoSharedModule,
    DemoModule,
    LayoutCardOverDemoRoutingModule,
    /** Covalent Modules */
    TdLayoutComponent,
    /** Angular Modules */
  ],
})
export class LayoutCardOverDemosModule {}
