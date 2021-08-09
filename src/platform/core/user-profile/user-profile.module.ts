import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

import { TdUserProfileMenuComponent } from './user-profile-menu/user-profile-menu.component';
import { TdUserProfileComponent } from './user-profile.component';

@NgModule({
  declarations: [TdUserProfileComponent, TdUserProfileMenuComponent],
  imports: [CommonModule, MatMenuModule, MatIconModule, MatButtonModule, MatListModule],
  providers: [],
  exports: [TdUserProfileComponent, TdUserProfileMenuComponent],
})
export class CovalentUserProfileModule {}
