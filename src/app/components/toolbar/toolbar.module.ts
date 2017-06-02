import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ToolbarComponent } from './toolbar.component';

import { MdButtonModule, MdListModule, MdIconModule, MdMenuModule } from '@angular/material';

import { CovalentMenuModule, CovalentNotificationsModule } from '../../../platform/core';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdListModule,
    MdIconModule,
    MdMenuModule,
    CovalentMenuModule,
    CovalentNotificationsModule,
    RouterModule,
  ],
  declarations: [
    ToolbarComponent,
  ],
  exports: [
    ToolbarComponent,
  ],
})
export class ToolbarModule {

}
