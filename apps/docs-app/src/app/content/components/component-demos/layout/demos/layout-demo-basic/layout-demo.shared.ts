import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutDemoBasicComponent } from './layout-demo-basic.component';
import { TdLayoutComponent } from '@covalent/core/layout';

@NgModule({
  declarations: [LayoutDemoBasicComponent],
  imports: [CommonModule, TdLayoutComponent],
  exports: [LayoutDemoBasicComponent],
})
export class LayoutDemoSharedModule {}
