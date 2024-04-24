import { NgModule } from '@angular/core';

import { TdDynamicMenuComponent } from './src/dynamic-menu.component';
import { TdDynamicMenuItemComponent } from './src/dynamic-menu-item/dynamic-menu-item.component';
import { TdDynamicMenuLinkComponent } from './src/dynamic-menu-item/dynamic-menu-link/dynamic-menu-link.component';

/**
 * @deprecated since version 8.x, modules are no longer needed use standalone components instead
 */
@NgModule({
  imports: [
    TdDynamicMenuComponent,
    TdDynamicMenuItemComponent,
    TdDynamicMenuLinkComponent,
  ],
  exports: [
    TdDynamicMenuComponent,
    TdDynamicMenuItemComponent,
    TdDynamicMenuLinkComponent,
  ],
})
export class CovalentDynamicMenuModule {}
