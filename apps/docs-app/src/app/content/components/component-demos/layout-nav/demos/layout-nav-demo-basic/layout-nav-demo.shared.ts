import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutNavDemoBasicComponent } from './layout-nav-demo-basic.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TdLayoutComponent } from '@covalent/core/layout';

@NgModule({
  declarations: [LayoutNavDemoBasicComponent],
  imports: [
    CommonModule,
    TdLayoutComponent,
    MatListModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [LayoutNavDemoBasicComponent],
})
export class LayoutNavDemoSharedModule {}
