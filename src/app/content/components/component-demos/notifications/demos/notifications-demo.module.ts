import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovalentNotificationsModule } from '@covalent/core/notifications';
import { NotificationsDemoComponent } from './notifications-demo.component';
import { NotificationsDemoRoutingModule } from './notifications-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NotificationsHeroSharedModule } from './notifications-demo-basic/notifications-hero.shared';

import { NotificationsDemoListComponent } from './notifications-demo-list/notifications-demo-list.component';
import { NotificationsDemoTabsComponent } from './notifications-demo-tabs/notifications-demo-tabs.component';
import { NotificationsDemoToolbarComponent } from './notifications-demo-toolbar/notifications-demo-toolbar.component';

@NgModule({
  declarations: [
    NotificationsDemoComponent,
    NotificationsDemoListComponent,
    NotificationsDemoTabsComponent,
    NotificationsDemoToolbarComponent,
  ],
  imports: [
    NotificationsHeroSharedModule,
    DemoModule,
    NotificationsDemoRoutingModule,
    /** Covalent Modules */
    CovalentNotificationsModule,
    /** Angular Modules */
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatTabsModule,
    MatToolbarModule,
    /** Hero Module */
  ],
})
export class NotificationsDemoModule {}
