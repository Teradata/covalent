import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutNavListDemoBasicComponent } from './layout-nav-list-demo-basic.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CovalentLayoutModule } from '@covalent/core/layout';

@NgModule({
  declarations: [LayoutNavListDemoBasicComponent],
  imports: [
    CommonModule,
    CovalentLayoutModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [LayoutNavListDemoBasicComponent],
})
export class LayoutNavListDemoSharedModule {}
