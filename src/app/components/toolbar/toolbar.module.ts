import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ToolbarComponent } from './toolbar.component';

import { MatButtonModule, MatListModule, MatIconModule, MatMenuModule } from '@angular/material';

import { CovalentMenuModule, CovalentNotificationsModule } from '../../../platform/core';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
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
