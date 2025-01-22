import { NgModule } from '@angular/core';
import { TdDynamicMenuComponent } from './dynamic-menu.component';
import { TdDynamicMenuItemComponent } from './dynamic-menu-item/dynamic-menu-item.component';
import { TdDynamicMenuLinkComponent } from './dynamic-menu-item/dynamic-menu-link/dynamic-menu-link.component';

/**
 * @deprecated This module is deprecated and will be removed in future versions.
 * Please migrate to using standalone components as soon as possible.
 */
@NgModule({
  imports: [
    TdDynamicMenuComponent,
    TdDynamicMenuItemComponent,
    TdDynamicMenuLinkComponent,
  ],
  providers: [],
  exports: [
    TdDynamicMenuComponent,
    TdDynamicMenuItemComponent,
    TdDynamicMenuLinkComponent,
  ],
})
export class CovalentDynamicMenuModule {}
