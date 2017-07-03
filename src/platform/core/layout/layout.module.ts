import { Type } from '@angular/core';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MdSidenavModule, MdToolbarModule, MdButtonModule, MdIconModule, MdCardModule, MdListModule, ScrollDispatchModule } from '@angular/material';

import { TdLayoutComponent } from './layout.component';
import { TdLayoutNavComponent } from './layout-nav/layout-nav.component';
import { TdLayoutNavListComponent } from './layout-nav-list/layout-nav-list.component';
import { TdLayoutCardOverComponent } from './layout-card-over/layout-card-over.component';
import { TdLayoutManageListComponent } from './layout-manage-list/layout-manage-list.component';
import { TdLayoutFooterComponent } from './layout-footer/layout-footer.component';

import { TdNavigationDrawerComponent, TdNavigationDrawerMenuDirective } from './navigation-drawer/navigation-drawer.component';

const TD_LAYOUTS: Type<any>[] = [
  TdLayoutComponent,
  TdLayoutNavComponent,
  TdLayoutNavListComponent,
  TdLayoutCardOverComponent,
  TdLayoutManageListComponent,
  TdLayoutFooterComponent,

  TdNavigationDrawerComponent,
  TdNavigationDrawerMenuDirective,
];

export { TdLayoutComponent, TdLayoutNavComponent, TdLayoutNavListComponent,
          TdLayoutCardOverComponent, TdLayoutManageListComponent,
          TdLayoutFooterComponent, TdNavigationDrawerComponent, TdNavigationDrawerMenuDirective };

@NgModule({
  imports: [
    CommonModule,
    ScrollDispatchModule,
    MdSidenavModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdCardModule,
    MdListModule,
  ],
  declarations: [
    TD_LAYOUTS,
  ],
  exports: [
    TD_LAYOUTS,
  ],
})
export class CovalentLayoutModule {

}
