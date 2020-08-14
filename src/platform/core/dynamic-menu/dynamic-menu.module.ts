import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';

import { TdDynamicMenuComponent } from './dynamic-menu.component';
import { TdDynamicMenuItemComponent } from './dynamic-menu-item/dynamic-menu-item.component';

@NgModule({
  declarations: [TdDynamicMenuComponent, TdDynamicMenuItemComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, MatListModule, MatMenuModule, MatTooltipModule],
  providers: [],
  exports: [TdDynamicMenuComponent, TdDynamicMenuItemComponent],
})
export class CovalentDynamicMenuModule {}
