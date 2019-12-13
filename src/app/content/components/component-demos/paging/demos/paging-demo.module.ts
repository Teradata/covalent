import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagingDemoBasicComponent } from './paging-demo-basic/paging-demo-basic.component';
import { CovalentPagingModule } from '@covalent/core/paging';
import { PagingDemoComponent } from './paging-demo.component';
import { PagingDemoRoutingModule } from './paging-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';

@NgModule({
  declarations: [PagingDemoComponent, PagingDemoBasicComponent],
  imports: [
    DemoModule,
    PagingDemoRoutingModule,
    /** Covalent Modules */
    CovalentPagingModule,
    /** Angular Modules */
    CommonModule,
  ],
})
export class PagingDemoModule {}
