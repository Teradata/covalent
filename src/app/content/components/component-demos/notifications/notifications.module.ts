import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Route } from '@angular/router';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { MatButtonModule } from '@angular/material/button';
import { ComponentDetailsModule } from 'app/components/shared/component-details/component-details.module';
import { setComponentRoutes } from 'app/content/components/components';
import { NotificationsDemoComponent } from './notifications.component';
import { CovalentNotificationsModule } from '../../../../../platform/core/notifications';

const routes: Routes = setComponentRoutes({
  overviewDemoComponent: NotificationsDemoComponent,
  id: 'notifications',
});

@NgModule({
  declarations: [NotificationsDemoComponent],
  imports: [
    CommonModule,
    // Material
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    ComponentDetailsModule,
    // Covalent
    CovalentNotificationsModule,
    // Docs
    // Routes
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class NotificationsDemoModule {}
