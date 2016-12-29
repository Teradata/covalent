import { Component, Input } from '@angular/core';

@Component({
  selector: 'td-notification-count',
  styleUrls: ['./notification-count.component.scss' ],
  templateUrl: './notification-count.component.html',
})
export class TdNotificationCountComponent {

  private _notifications: number | boolean = 0;
  private _noCount: boolean = false;

  /**
   * color?: "primary" | "accent" | "warn"
   * Sets the theme color of the notification tip. Defaults to 'warn'
   */
  @Input() color: 'primary' | 'accent' | 'warn' = 'warn';

  /**
   * noCount?: boolean
   * Sets the component in its 'noCount' state. Makes the notification tip show without a count. Defaults to 'false'
   */
  @Input('noCount')
  set noCount(noCount: string | boolean) {
    this._noCount = noCount !== '' ? (noCount === 'true' || noCount === true) : true;
  }
  get noCount(): string | boolean {
    return this._noCount;
  }

  /**
   * notifications?: number
   * Number for the notification count. Shows component only if the input is a positive number or 'true'
   */
  @Input()
  set notifications(notifications: number | boolean) {
    this._notifications = notifications;
  }

  /**
   * Notification display string when a count is available.
   * Anything over 99 gets set as 99+
   */
  get notificationsDisplay(): string {
    if (this._notifications > 99) {
      return '99+';
    }
    return this._notifications.toString();
  }

  /**
   * Shows notification tip only when [notifications] is true or a positive integer.
   */
  get show(): boolean {
    return (this._notifications && this._noCount) || !isNaN(<any>this._notifications) && this._notifications > 0;
  }

}
