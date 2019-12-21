import { NgModule } from '@angular/core';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { LayoutDemoComponent } from './layout-demo.component';
import { LayoutDemoSharedModule } from './layout-demo-basic/layout-demo.shared';
import { LayoutDemoRoutingModule } from './layout-demo-routing.module';
import { CovalentLayoutModule } from '../../../../../../platform/core';

@NgModule({
  declarations: [LayoutDemoComponent],
  imports: [
    LayoutDemoSharedModule,
    DemoModule,
    LayoutDemoRoutingModule,
    /** Covalent Modules */
    CovalentLayoutModule,
    /** Angular Modules */
  ],
})
export class LayoutDemosModule {}
