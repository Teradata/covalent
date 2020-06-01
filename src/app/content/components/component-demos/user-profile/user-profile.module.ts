import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CovalentUserProfileModule } from '@covalent/core/user-profile';
import { ComponentDetailsModule } from 'app/components/shared/component-details/component-details.module';
import { setComponentRoutes } from 'app/content/components/components';

import { UserProfileDemoListItemsSharedModule } from './demos/user-profile-demo-list-items/user-profile-demo-list-items.module';
import { UserProfileDemoListItemsComponent } from './demos/user-profile-demo-list-items/user-profile-demo-list-items.component';

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
    CovalentUserProfileModule,
    // Routes
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class UserProfileDemoModule {}
