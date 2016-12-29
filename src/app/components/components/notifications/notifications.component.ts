import { Component } from '@angular/core';

@Component({
  selector: 'notifications-demo',
  styleUrls: ['./notifications.component.scss'],
  templateUrl: './notifications.component.html',
})
export class NotificationsDemoComponent {

  notificationsAttrs: Object[] = [{
    description: `Number for the notification count.
                  Shows component only if the input is a positive number or 'true'`,
    name: 'notifications',
    type: 'number',
  }, {
    description: `Sets the theme color of the notification tip.
                  Defaults to 'warn'`,
    name: 'color',
    type: '"primary" | "accent" | "warn"',
  }, {
    description: `Sets the component in its 'noCount' state. Makes the notification tip show without a count.
                  Defaults to 'false'`,
    name: 'noCount',
    type: 'boolean',
  }];

}
