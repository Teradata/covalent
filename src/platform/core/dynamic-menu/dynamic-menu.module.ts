import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

import { CovalentMenuModule } from '@covalent/core/menu';

import { TdDynamicMenuComponent } from './dynamic-menu.component';
import { TdDynamicMenuItemComponent } from './dynamic-menu-item/dynamic-menu-item.component';

@NgModule({
  declarations: [TdDynamicMenuComponent, TdDynamicMenuItemComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,

    /* covalent modules */
    CovalentMenuModule,
  ],
  providers: [],
  exports: [TdDynamicMenuComponent, TdDynamicMenuItemComponent],
})
export class CovalentDynamicMenuModule {}
