import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';

import { TdDynamicMenuComponent } from './dynamic-menu.component';
import { TdDynamicMenuItemComponent } from './dynamic-menu-item/dynamic-menu-item.component';
import { TdDynamicMenuLinkComponent } from './dynamic-menu-item/dynamic-menu-link/dynamic-menu-link.component';

@NgModule({
  declarations: [
    TdDynamicMenuComponent,
    TdDynamicMenuItemComponent,
    TdDynamicMenuLinkComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatTooltipModule,
  ],
  providers: [],
  exports: [
    TdDynamicMenuComponent,
    TdDynamicMenuItemComponent,
    TdDynamicMenuLinkComponent,
  ],
})
export class CovalentDynamicMenuModule {}
