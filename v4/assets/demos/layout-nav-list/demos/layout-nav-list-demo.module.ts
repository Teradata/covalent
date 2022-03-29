import { NgModule } from '@angular/core';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { LayoutNavListDemoSharedModule } from './layout-nav-list-demo-basic/layout-nav-list-demo.shared';
import { LayoutNavListDemoRoutingModule } from './layout-nav-list-demo-routing.module';
import { LayoutNavListDemoComponent } from './layout-nav-list-demo.component';
import { CovalentLayoutModule } from '@covalent/core/layout';

@NgModule({
  declarations: [LayoutNavListDemoComponent],
  imports: [
    LayoutNavListDemoSharedModule,
    DemoModule,
    LayoutNavListDemoRoutingModule,
    /** Covalent Modules */
    CovalentLayoutModule,
    /** Angular Modules */
  ],
})
export class LayoutNavListDemosModule {}
