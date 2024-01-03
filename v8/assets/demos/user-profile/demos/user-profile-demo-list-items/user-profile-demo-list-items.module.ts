import { NgModule } from '@angular/core';
import { CovalentUserProfileModule } from '@covalent/core/user-profile';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { UserProfileDemoListItemsComponent } from './user-profile-demo-list-items.component';

@NgModule({
  declarations: [UserProfileDemoListItemsComponent],
  imports: [
    // Material
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    CovalentUserProfileModule,
  ],
  exports: [UserProfileDemoListItemsComponent],
})
export class UserProfileDemoListItemsSharedModule {}
