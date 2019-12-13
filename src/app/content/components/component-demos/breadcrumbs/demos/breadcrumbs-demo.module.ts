import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsDemoBasicComponent } from './breadcrumbs-demo-basic/breadcrumbs-demo-basic.component';
import { CovalentBreadcrumbsModule } from '@covalent/core/breadcrumbs';
import { BreadcrumbsDemoComponent } from './breadcrumbs-demo.component';
import { BreadcrumbsDemoRoutingModule } from './breadcrumbs-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';

@NgModule({
  declarations: [BreadcrumbsDemoComponent, BreadcrumbsDemoBasicComponent],
  imports: [
    DemoModule,
    BreadcrumbsDemoRoutingModule,
    /** Covalent Modules */
    CovalentBreadcrumbsModule,
    /** Angular Modules */
    CommonModule,
  ],
})
export class BreadcrumbsDemoModule {}
