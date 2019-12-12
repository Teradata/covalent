import { NgModule } from '@angular/core';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { CovalentLayoutModule } from '../../../../../../platform/core';
import { LayoutNavListDemoSharedModule } from './layout-nav-list-demo-basic/layout-nav-list-demo.shared';
import { LayoutNavListDemoRoutingModule } from './layout-nav-list-demo-routing.module';
import { LayoutNavListDemoComponent } from './layout-nav-list-demo.component';

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
