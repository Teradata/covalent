import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VirtualScrollDemoRoutingModule } from './virtual-scroll-demo-routing.module';

import { VirtualScrollDemoBasicComponent } from './virtual-scroll-demo-basic/virtual-scroll-demo-basic.component';
import { VirtualScrollDemoComponent } from './virtual-scroll-demo.component';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { MatListModule } from '@angular/material/list';
import { CovalentVirtualScrollModule } from '../../../../../../platform/core/virtual-scroll';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [VirtualScrollDemoComponent, VirtualScrollDemoBasicComponent],
  imports: [
    CommonModule,
    VirtualScrollDemoRoutingModule,
    DemoModule,
    CovalentVirtualScrollModule,
    MatListModule,
    MatIconModule,
    ScrollingModule,
    MatCardModule,
  ],
})
export class VirtualScrollDemoModule {}
