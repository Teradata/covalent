import { NgModule } from '@angular/core';

import { TdDynamicMenuComponent } from './dynamic-menu.component';
import { TdDynamicMenuItemComponent } from './dynamic-menu-item/dynamic-menu-item.component';
import { TdDynamicMenuLinkComponent } from './dynamic-menu-item/dynamic-menu-link/dynamic-menu-link.component';

/**
 * @deprecated since version 8.x, modules are no longer needed use standalone components instead
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
