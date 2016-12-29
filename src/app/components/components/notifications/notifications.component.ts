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
    description: `Sets the theme color of the notification count tip.
                  Defaults to 'warn'`,
    name: 'color',
    type: '"primary" | "accent" | "warn"',
  }];

}
