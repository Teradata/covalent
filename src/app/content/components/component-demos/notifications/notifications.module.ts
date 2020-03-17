import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Route } from '@angular/router';

import { setComponentRoutes } from 'app/content/components/components';
import { NotificationsHeroSharedModule } from './demos/notifications-demo-basic/notifications-hero.shared';
import { NotificationsDemoBasicComponent } from './demos/notifications-demo-basic/notifications-demo-basic.component';

const routes: Routes = setComponentRoutes({
  overviewDemoComponent: NotificationsDemoBasicComponent,
  id: 'notifications',
});

@NgModule({
  imports: [NotificationsHeroSharedModule, CommonModule, RouterModule.forChild(routes)],
  exports: [],
  providers: [],
})
export class NotificationsDemoModule {}
