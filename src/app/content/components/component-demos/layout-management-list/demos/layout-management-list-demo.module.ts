import { NgModule } from '@angular/core';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { LayoutManagementListDemoComponent } from './layout-management-list-demo.component';
import { LayoutManagementListDemoSharedModule } from './layout-management-list-demo-basic/layout-management-list-demo.shared';
import { LayoutManagementListDemoRoutingModule } from './layout-management-list-demo-routing.module';
import { CovalentLayoutModule } from '../../../../../../platform/core';

@NgModule({
  declarations: [LayoutManagementListDemoComponent],
  imports: [
    LayoutManagementListDemoSharedModule,
    DemoModule,
    LayoutManagementListDemoRoutingModule,
    /** Covalent Modules */
    CovalentLayoutModule,
    /** Angular Modules */
  ],
})
export class LayoutManagementListDemosModule {}
