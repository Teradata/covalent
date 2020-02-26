import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutManagementListDemoBasicComponent } from './layout-management-list-demo-basic.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CovalentLayoutModule } from '../../../../../../../platform/core/layout';

@NgModule({
  declarations: [LayoutManagementListDemoBasicComponent],
  imports: [CommonModule, CovalentLayoutModule, MatListModule, MatButtonModule, MatIconModule, MatToolbarModule],
  exports: [LayoutManagementListDemoBasicComponent],
})
export class LayoutManagementListDemoSharedModule {}
