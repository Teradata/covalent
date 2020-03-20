import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagingDemoBasicComponent } from './paging-demo-basic/paging-demo-basic.component';
import { CovalentPagingModule } from '@covalent/core/paging';
import { PagingDemoComponent } from './paging-demo.component';
import { PagingDemoRoutingModule } from './paging-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { PagingDemoDynamicComponent } from './paging-demo-dynamic/paging-demo-dynamic.component';
import { PagingDemoLinksComponent } from './paging-demo-links/paging-demo-links.component';
import { PagingDemoInputComponent } from './paging-demo-input/paging-demo-input.component';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    PagingDemoComponent,
    PagingDemoBasicComponent,
    PagingDemoDynamicComponent,
    PagingDemoLinksComponent,
    PagingDemoInputComponent,
  ],
  imports: [
    DemoModule,
    PagingDemoRoutingModule,
    /** Covalent Modules */
    CovalentPagingModule,
    /** Angular Modules */
    CommonModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
})
export class PagingDemoModule {}
