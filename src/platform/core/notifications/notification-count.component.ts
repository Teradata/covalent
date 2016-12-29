import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'td-notification-count',
  styleUrls: ['./notification-count.component.scss' ],
  templateUrl: './notification-count.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TdNotificationCountComponent {

  private _notifications: number | boolean = 0;

  /**
   * color?: "primary" | "accent" | "warn"
   * Sets the theme color of the notification tip. Defaults to 'warn'
   */
  @Input() color: 'primary' | 'accent' | 'warn' = 'warn';

  /**
   * notifications?: number | boolean
   * Number for the notification count. Shows component only if the input is a positive number or 'true'
   */
  @Input()
  set notifications(notifications: number | boolean) {
    this._notifications = notifications;
  }

  /**
   * Sets the component in its 'noCount' state if [notifications] is a boolean 'true'.
   * Makes the notification tip show without a count.
   */
  get noCount(): string | boolean {
    return this._notifications === true;
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
    return this._notifications === true || (!isNaN(<any>this._notifications) && this._notifications > 0);
  }

}
