import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ToolbarComponent } from './toolbar.component';

import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { CovalentMenuModule, CovalentNotificationsModule } from '@covalent/core';

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
