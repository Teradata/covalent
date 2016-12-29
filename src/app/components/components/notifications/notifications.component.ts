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
  }];

}
