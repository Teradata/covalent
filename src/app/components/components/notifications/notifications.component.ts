import { Component } from '@angular/core';

@Component({
  selector: 'notifications-demo',
  styleUrls: ['./notifications.component.scss'],
  templateUrl: './notifications.component.html',
})
export class NotificationsDemoComponent {

  notificationsAttrs: Object[] = [{
    description: `Number for the notification count.`,
    name: 'notifications',
    type: 'number[]',
  }, {
    description: `Notification object for each notification item.`,
    name: 'data',
    type: 'any[]',
  }];

}
