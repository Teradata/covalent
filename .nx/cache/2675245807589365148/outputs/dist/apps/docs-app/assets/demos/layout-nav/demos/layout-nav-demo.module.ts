import { NgModule } from '@angular/core';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { LayoutNavDemoComponent } from './layout-nav-demo.component';
import { LayoutNavDemoSharedModule } from './layout-nav-demo-basic/layout-nav-demo.shared';
import { LayoutNavDemoRoutingModule } from './layout-nav-demo-routing.module';
import { CovalentLayoutModule } from '@covalent/core/layout';

@NgModule({
  declarations: [LayoutNavDemoComponent],
  imports: [
    LayoutNavDemoSharedModule,
    DemoModule,
    LayoutNavDemoRoutingModule,
    /** Covalent Modules */
    CovalentLayoutModule,
    /** Angular Modules */
  ],
})
export class LayoutNavDemosModule {}
