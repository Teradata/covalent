import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicMenuDemoBasicComponent } from './dynamic-menu-demo-basic.component';
import { CovalentDynamicMenuModule } from '@covalent/core/dynamic-menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [DynamicMenuDemoBasicComponent],
  imports: [
    CommonModule,
    CovalentDynamicMenuModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [DynamicMenuDemoBasicComponent],
})
export class DynamicMenuHeroSharedModule {}
