import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsDemoBasicComponent } from './notifications-demo-basic/notifications-demo-basic.component';
import { CovalentNotificationsModule } from '@covalent/core/notifications';
import { NotificationsDemoComponent } from './notifications-demo.component';
import { NotificationsDemoRoutingModule } from './notifications-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CovalentSearchModule } from '../../../../../../platform/core/search';
import { CovalentMenuModule } from '../../../../../../platform/core/menu';
import { NotificationsDemoListComponent } from './notifications-demo-list/notifications-demo-list.component';
import { NotificationsDemoTabsComponent } from './notifications-demo-tabs/notifications-demo-tabs.component';
import { NotificationsDemoToolbarComponent } from './notifications-demo-toolbar/notifications-demo-toolbar.component';

@NgModule({
  declarations: [
    NotificationsDemoComponent,
    NotificationsDemoBasicComponent,
    NotificationsDemoListComponent,
    NotificationsDemoTabsComponent,
    NotificationsDemoToolbarComponent,
  ],
  imports: [
    DemoModule,
    NotificationsDemoRoutingModule,
    /** Covalent Modules */
    CovalentNotificationsModule,
    CovalentSearchModule,
    CovalentMenuModule,
    /** Angular Modules */
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatTabsModule,
    MatMenuModule,
    MatToolbarModule,
  ],
})
export class NotificationsDemoModule {}
