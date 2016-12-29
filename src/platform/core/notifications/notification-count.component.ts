import { Component, Input } from '@angular/core';

@Component({
  selector: 'td-notification-count',
  styleUrls: ['./notification-count.component.scss' ],
  templateUrl: './notification-count.component.html',
})
export class TdNotificationCountComponent {

  private _notifications: number = 0;

  @Input() color: string = 'warn';

  @Input()
  set notifications(notifications: number) {
    this._notifications = notifications;
  }
  get notificationsDisplay(): string {
    if (this._notifications > 99) {
      return '99+';
    }
    return this._notifications.toString();
  }

  get show(): boolean {
    return !isNaN(this._notifications) && this._notifications > 0;
  }

}
