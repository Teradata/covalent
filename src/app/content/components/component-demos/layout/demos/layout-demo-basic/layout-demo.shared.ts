import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutDemoBasicComponent } from './layout-demo-basic.component';
import { CovalentLayoutModule } from '../../../../../../../platform/core';

@NgModule({
  declarations: [LayoutDemoBasicComponent],
  imports: [CommonModule, CovalentLayoutModule],
  exports: [LayoutDemoBasicComponent],
})
export class LayoutDemoSharedModule {}
