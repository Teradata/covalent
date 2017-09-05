import { Type } from '@angular/core';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { MdSidenavModule, MdToolbarModule, MdButtonModule, MdIconModule, MdCardModule, MdListModule } from '@angular/material';

import { TdLayoutComponent } from './layout.component';
import { TdLayoutToggleDirective, TdLayoutCloseDirective, TdLayoutOpenDirective } from './layout.directives';
import { TdLayoutNavComponent } from './layout-nav/layout-nav.component';
import { TdLayoutNavListComponent } from './layout-nav-list/layout-nav-list.component';
import {
  TdLayoutNavListToggleDirective, TdLayoutNavListCloseDirective, TdLayoutNavListOpenDirective,
} from './layout-nav-list/layout-nav-list.directives';
import { TdLayoutCardOverComponent } from './layout-card-over/layout-card-over.component';
import { TdLayoutManageListComponent } from './layout-manage-list/layout-manage-list.component';
import {
  TdLayoutManageListToggleDirective, TdLayoutManageListCloseDirective, TdLayoutManageListOpenDirective,
} from './layout-manage-list/layout-manage-list.directives';
import { TdLayoutFooterComponent } from './layout-footer/layout-footer.component';

import {
  TdNavigationDrawerComponent, TdNavigationDrawerMenuDirective, TdNavigationDrawerToolbarDirective,
} from './navigation-drawer/navigation-drawer.component';

const TD_LAYOUTS: Type<any>[] = [
  TdLayoutComponent,
  TdLayoutToggleDirective,
  TdLayoutCloseDirective,
  TdLayoutOpenDirective,

  TdLayoutNavComponent,

  TdLayoutNavListComponent,
  TdLayoutNavListToggleDirective,
  TdLayoutNavListCloseDirective,
  TdLayoutNavListOpenDirective,

  TdLayoutCardOverComponent,

  TdLayoutManageListComponent,
  TdLayoutManageListToggleDirective,
  TdLayoutManageListCloseDirective,
  TdLayoutManageListOpenDirective,

  TdLayoutFooterComponent,

  TdNavigationDrawerComponent,
  TdNavigationDrawerMenuDirective,
  TdNavigationDrawerToolbarDirective,
];

export { TdLayoutComponent, TdLayoutToggleDirective, TdLayoutCloseDirective, TdLayoutOpenDirective,
         TdLayoutNavComponent, TdLayoutNavListComponent, TdLayoutNavListToggleDirective, TdLayoutNavListCloseDirective, TdLayoutNavListOpenDirective,
         TdLayoutCardOverComponent, TdLayoutManageListComponent, TdLayoutManageListToggleDirective,
         TdLayoutManageListCloseDirective, TdLayoutManageListOpenDirective,
         TdLayoutFooterComponent, TdNavigationDrawerComponent, TdNavigationDrawerMenuDirective, TdNavigationDrawerToolbarDirective };

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
