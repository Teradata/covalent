import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { UserProfileDemoComponent } from './user-profile-demo.component';
import { UserProfileDemoBasicComponent } from './user-profile-demo-basic/user-profile-demo-basic.component';
import { CovalentUserProfileModule } from '@covalent/core/user-profile';
import { UserProfileDemoRoutingModule } from './user-profile-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { UserProfileDemoListItemsSharedModule } from './user-profile-demo-list-items/user-profile-demo-list-items.module';

@NgModule({
  declarations: [UserProfileDemoComponent, UserProfileDemoBasicComponent],
  imports: [
    DemoModule,
    // Material
    MatListModule,
    MatIconModule,
    UserProfileDemoListItemsSharedModule,
    UserProfileDemoRoutingModule,
    /** Covalent Modules */
    CovalentUserProfileModule,
    /** Angular Modules */
    CommonModule,
  ],
})
export class UserProfileDemosModule {}
