import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ComponentDetailsModule } from '../../../../components/shared/component-details/component-details.module';
import { setComponentRoutes } from '../../../../content/components/components';

import { UserProfileDemoListItemsSharedModule } from './demos/user-profile-demo-list-items/user-profile-demo-list-items.module';
import { UserProfileDemoListItemsComponent } from './demos/user-profile-demo-list-items/user-profile-demo-list-items.component';
import { TdUserProfileComponent } from '@covalent/core/user-profile';

const routes: Routes = setComponentRoutes({
  overviewDemoComponent: UserProfileDemoListItemsComponent,
  id: 'user-profile',
});

@NgModule({
  imports: [
    CommonModule,
    ComponentDetailsModule,
    MatIconModule,
    MatListModule,
    // Demo
    UserProfileDemoListItemsSharedModule,
    // Covalent
    TdUserProfileComponent,
    // Routes
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class UserProfileDemoModule {}
