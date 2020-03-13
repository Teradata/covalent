import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { BreadcrumbsDemoBasicComponent } from './breadcrumbs-demo-basic/breadcrumbs-demo-basic.component';
import { BreadcrumbsDemoCustomSeparatorComponent } from './breadcrumbs-demo-custom-separator/breadcrumbs-demo-custom-separator.component';
import { BreadcrumbsResizeBasicComponent } from './breadcrumbs-demo-resize/breadcrumbs-demo-resize.component';
import { BreadcrumbsDemoComponent } from './breadcrumbs-demo.component';

import { CovalentBreadcrumbsModule } from '@covalent/core/breadcrumbs';
import { BreadcrumbsDemoRoutingModule } from './breadcrumbs-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';

@NgModule({
  declarations: [
    BreadcrumbsDemoComponent,
    BreadcrumbsDemoBasicComponent,
    BreadcrumbsDemoCustomSeparatorComponent,
    BreadcrumbsResizeBasicComponent,
  ],
  imports: [
    DemoModule,
    // Material
    MatSelectModule,
    MatDividerModule,
    MatIconModule,
    BreadcrumbsDemoRoutingModule,
    /** Covalent Modules */
    CovalentBreadcrumbsModule,
    /** Angular Modules */
    CommonModule,
  ],
})
export class BreadcrumbsDemoModule {}
