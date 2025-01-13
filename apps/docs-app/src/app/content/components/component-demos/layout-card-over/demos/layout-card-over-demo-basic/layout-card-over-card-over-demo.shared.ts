import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutCardOverDemoBasicComponent } from './layout-card-over-demo-basic.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { TdLayoutComponent } from '@covalent/core/layout';

@NgModule({
  declarations: [LayoutCardOverDemoBasicComponent],
  imports: [
    CommonModule,
    TdLayoutComponent,
    MatIconModule,
    MatListModule,
    MatButtonModule,
  ],
  exports: [LayoutCardOverDemoBasicComponent],
})
export class LayoutCardOverDemoSharedModule {}
