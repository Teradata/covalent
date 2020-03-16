import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ComponentDetailsModule } from 'app/components/shared/component-details/component-details.module';
import { setComponentRoutes } from 'app/content/components/components';
import { VirtualScrollDemoComponent } from './virtual-scroll.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CovalentVirtualScrollModule } from '../../../../../platform/core/virtual-scroll';

const routes: Routes = setComponentRoutes({
  overviewDemoComponent: VirtualScrollDemoComponent,
  id: 'virtual-scroll',
});

@NgModule({
  declarations: [VirtualScrollDemoComponent],
  imports: [
    CommonModule,
    ComponentDetailsModule,
    ScrollingModule,
    CovalentVirtualScrollModule,
    RouterModule.forChild(routes),
  ],
})
export class VirtualScrollDemoModule {}
