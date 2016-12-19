import { Type } from '@angular/core';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { TdLayoutComponent } from './layout.component';
import { TdLayoutNavComponent } from './layout-nav/layout-nav.component';
import { TdLayoutNavListComponent } from './layout-nav-list/layout-nav-list.component';
import { TdLayoutCardOverComponent } from './layout-card-over/layout-card-over.component';
import { TdLayoutManageListComponent } from './layout-manage-list/layout-manage-list.component';
import { TdLayoutService } from './services/layout.service';

const TD_LAYOUTS: Type<any>[] = [
  TdLayoutComponent,
  TdLayoutNavComponent,
  TdLayoutNavListComponent,
  TdLayoutCardOverComponent,
  TdLayoutManageListComponent,
];

export { TdLayoutComponent, TdLayoutNavComponent, TdLayoutNavListComponent,
         TdLayoutCardOverComponent, TdLayoutManageListComponent };

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MaterialModule.forRoot(),
  ],
  declarations: [
    TD_LAYOUTS,
  ],
  exports: [
    FormsModule,
    CommonModule,
    MaterialModule,

    TD_LAYOUTS,
  ],
})
export class CovalentLayoutModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CovalentLayoutModule,
      providers: [ TdLayoutService ],
    };
  }
}
