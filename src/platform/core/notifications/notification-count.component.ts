import { Component, Input } from '@angular/core';

@Component({
  selector: 'td-notification-count',
  styleUrls: ['./notification-count.component.scss' ],
  templateUrl: './notification-count.component.html',
})
export class TdNotificationCountComponent {

  private _notifications: number = 0;
  private _showNoCount: boolean = false;

  @Input() color: string = 'warn';

  @Input() noCount: boolean = false;

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

  @Input()
  set showNoCount(show: boolean) {
    this._showNoCount = show;
  }
  get show(): boolean {
    return (this._showNoCount && this.noCount) || !isNaN(this._notifications) && this._notifications > 0;
  }

}
