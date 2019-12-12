import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutCardOverDemoBasicComponent } from './layout-card-over-demo-basic.component';
import { CovalentLayoutModule } from '../../../../../../../platform/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [LayoutCardOverDemoBasicComponent],
  imports: [CommonModule, CovalentLayoutModule, MatIconModule, MatListModule, MatButtonModule],
  exports: [LayoutCardOverDemoBasicComponent],
})
export class LayoutCardOverDemoSharedModule {}
