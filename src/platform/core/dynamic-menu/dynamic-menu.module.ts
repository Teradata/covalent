import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';

import { TdDynamicMenuComponent } from './dynamic-menu.component';
import { TdDynamicMenuLabelComponent } from './dynamic-menu-label/dynamic-menu-label.component';
import { TdDynamicMenuLinkComponent } from './dynamic-menu-link/dynamic-menu-link.component';
import { TdDynamicMenuTriggerComponent } from './dynamic-menu-trigger/dynamic-menu-trigger.component';

@NgModule({
  declarations: [
    TdDynamicMenuComponent,
    TdDynamicMenuLabelComponent,
    TdDynamicMenuLinkComponent,
    TdDynamicMenuTriggerComponent,
  ],
  imports: [CommonModule, MatButtonModule, MatIconModule, MatListModule, MatMenuModule, MatTooltipModule],
  providers: [],
  exports: [
    TdDynamicMenuComponent,
    TdDynamicMenuLabelComponent,
    TdDynamicMenuLinkComponent,
    TdDynamicMenuTriggerComponent,
  ],
})
export class CovalentDynamicMenuModule {}
