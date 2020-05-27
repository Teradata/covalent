import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CovalentUserProfileModule } from '@covalent/core/user-profile';
import { ComponentDetailsModule } from 'app/components/shared/component-details/component-details.module';
import { setComponentRoutes } from 'app/content/components/components';

import { UserProfileDemoComponent } from './user-profile.component';

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
    // Routes
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class UserProfileDemoModule {}
