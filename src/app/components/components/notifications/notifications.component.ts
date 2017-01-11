import { Component } from '@angular/core';

@Component({
  selector: 'notifications-demo',
  styleUrls: ['./notifications.component.scss'],
  templateUrl: './notifications.component.html',
})
export class NotificationsDemoComponent {

  notificationsAttrs: Object[] = [{
    description: `Number for the notification count.
                  Shows number if the input is a positive number or its no count state if boolean 'true'`,
    name: 'notifications',
    type: 'number | boolean',
  }, {
    description: `Sets the theme color of the notification tip.
                  Defaults to 'warn'`,
    name: 'color',
    type: '"primary" | "accent" | "warn"',
  }, {
    description: `Sets the X position of the notification tip.
                  Defaults to "right" if it has content, else 'center'.`,
    name: 'positionX',
    type: 'TdNotificationCountPositionX or "left" | "right" | "center"',
  }, {
    description: `Sets the Y position of the notification tip.
                  Defaults to "top" if it has content, else 'center'.`,
    name: 'positionY',
    type: 'TdNotificationCountPositionY or "top" | "bottom" | "center"',
  }];

}
