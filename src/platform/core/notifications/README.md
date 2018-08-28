# td-notification-count

`td-notification-count` element renders a number of notifications.

## API Summary

#### Inputs

+ color?: 'primary' | 'accent' | 'warn'
  + Sets the theme color of the notification tip. 
  + Defaults to 'warn'
+ notifications?: number | boolean
  + Number for the notification count. 
  + Shows number if the input is a positive number or its no count state if boolean 'true'.
+ positionX?: TdNotificationCountPositionX or 'before' | 'after' | 'center'
  + Sets the X position of the notification tip. 
  + Defaults to 'after' if it has content, else 'center'.
+ positionY?: TdNotificationCountPositionY or 'top' | 'bottom' | 'center'
  + Sets the Y position of the notification tip. Defaults to 'top' if it has content, else 'center'.
+ limit?: number
  + Limit for the notification count. 
  + When the notification count exceeds this limit, it will be displayed as limit+. Defaults to 99.

## Setup

Import the [CovalentNotificationsModule] in your NgModule:

```typescript
import { CovalentNotificationsModule } from '@covalent/core/notifications';
@NgModule({
  imports: [
    CovalentNotificationsModule,
    ...
  ],
  ...
})
export class MyModule {}
```

## Usage

Example for HTML count usage:

```html
<td-notification-count positionX="after" positionY="top" [notifications]="1">
  <mat-icon>notifications</mat-icon>
</td-notification-count>
```

 Example for HTML no count usage:

```html
<td-notification-count positionX="after" positionY="top" [notifications]="true">
  <mat-icon>notifications</mat-icon>
</td-notification-count>
```

Example for HTML stand alone count usage:

```html
<td-notification-count positionX="center" positionY="center" [notifications]="1">
</td-notification-count>
```
Example for HTML limit usage:

```html
<td-notification-count [notifications]="100" [limit]=50>
</td-notification-count>
```