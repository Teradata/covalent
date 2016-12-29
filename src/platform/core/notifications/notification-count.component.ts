import { Component, Input } from '@angular/core';

@Component({
  selector: 'td-notification-count',
  styleUrls: ['./notification-count.component.scss' ],
  templateUrl: './notification-count.component.html',
})
export class TdNotificationCountComponent {

  private _notifications: number | boolean = 0;
  private _noCount: boolean = false;

  @Input() color: string = 'warn';

  @Input('noCount')
  set noCount(noCount: string | boolean) {
    this._noCount = noCount !== '' ? (noCount === 'true' || noCount === true) : true;
  }
  get noCount(): string | boolean {
    return this._noCount;
  }

  @Input()
  set notifications(notifications: number | boolean) {
    this._notifications = notifications;
  }
  get notificationsDisplay(): string {
    if (this._notifications > 99) {
      return '99+';
    }
    return this._notifications.toString();
  }

  get show(): boolean {
    return (this._notifications && this._noCount) || !isNaN(<any>this._notifications) && this._notifications > 0;
  }

}
