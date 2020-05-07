import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { UserProfileDemoComponent } from './user-profile.component';

import { ComponentDetailsModule } from 'app/components/shared/component-details/component-details.module';
import { CovalentUserProfileModule } from '@covalent/core/user-profile';
import { setComponentRoutes } from 'app/content/components/components';

const routes: Routes = setComponentRoutes({
  overviewDemoComponent: UserProfileDemoComponent,
  id: 'user-profile',
});

@NgModule({
  declarations: [UserProfileDemoComponent],
  imports: [
    CommonModule,
    ComponentDetailsModule,
    MatIconModule,
    MatListModule,
    // Covalent
    CovalentUserProfileModule,
    // Docs
    // Routes
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class UserProfileDemoModule {}
