import { Component, Input, HostBinding, ChangeDetectionStrategy, ViewChild, ElementRef, AfterContentInit } from '@angular/core';

export enum TdNotificationPositionY {
  Top = <any>'top',
  Bottom = <any>'bottom',
  Center = <any>'center',
}

export enum TdNotificationPositionX {
  Left = <any>'left',
  Right = <any>'right',
  Center = <any>'center',
}

@Component({
  selector: 'td-notification-count',
  styleUrls: ['./notification-count.component.scss' ],
  templateUrl: './notification-count.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TdNotificationCountComponent implements AfterContentInit {

  private _notifications: number | boolean = 0;
  private _positionY: TdNotificationPositionY;
  private _positionX: TdNotificationPositionX;

  @ViewChild('content') content: ElementRef;

  /**
   * color?: "primary" | "accent" | "warn"
   * Sets the theme color of the notification tip. Defaults to 'warn'
   */
  @Input() color: 'primary' | 'accent' | 'warn' = 'warn';

  @Input()
  set positionY(positionY: TdNotificationPositionY) {
    this._positionY = positionY;
  }
  get positionY(): TdNotificationPositionY {
    return this._positionY;
  }

  @Input()
  set positionX(positionX: TdNotificationPositionX) {
    this._positionX = positionX;
  }
  get positionX(): TdNotificationPositionX {
    return this._positionX;
  }

  /**
   * notifications?: number | boolean
   * Number for the notification count. Shows component only if the input is a positive number or 'true'
   */
  @Input()
  set notifications(notifications: number | boolean) {
    this._notifications = notifications;
  }

  @HostBinding('class.td-notification-hidden')
  get hideHost(): boolean {
    return !this.show && !this._hasContent();
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

  ngAfterContentInit(): void {
    if (!this._positionX) {
      this.positionX = this._hasContent() ? TdNotificationPositionX.Right : TdNotificationPositionX.Center;
    }
    if (!this._positionY) {
      this.positionY = this._hasContent() ? TdNotificationPositionY.Top : TdNotificationPositionY.Center;
    }
  }

  private _hasContent(): boolean {
    if (this.content) {
      let contentElement: HTMLElement = this.content.nativeElement;
      return contentElement && (contentElement.children.length > 0 || !!contentElement.textContent.trim());
    }
    return false;
  }

}
