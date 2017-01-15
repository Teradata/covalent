# td-notification-count

`td-notification-count` element renders a number of notifications.

## API Summary

Properties:

| Name | Type | Description |
| --- | --- | --- |
| `color?` | `"primary" | "accent" | "warn"` | Sets the theme color of the notification tip. Defaults to 'warn'
| `notifications?` | `number | boolean` | Number for the notification count. Shows number if the input is a positive number or its no count state if boolean 'true'
| `positionX?` | `TdNotificationCountPositionX or "before" | "after" | "center"` | Sets the X position of the notification tip. Defaults to "after" if it has content, else 'center'.
| `positionY?` | `TdNotificationCountPositionY or "top" | "bottom" | "center"` | Sets the Y position of the notification tip. Defaults to "top" if it has content, else 'center'.

## Setup

Import the [CovalentNotificationsModule] using the forRoot() method in your NgModule:

```typescript
import { CovalentNotificationsModule } from '@covalent/core';
@NgModule({
  imports: [
    CovalentNotificationsModule.forRoot(), // or CovalentCoreModule.forRoot() (included inside of it)
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
  <md-icon>notifications<md-icon>
</td-notification-count>
 ```

 Example for HTML no count usage:

 ```html
<td-notification-count positionX="after" positionY="top" [notifications]="true">
  <md-icon>notifications<md-icon>
</td-notification-count>
 ```

Example for HTML stand alone count usage:

 ```html
<td-notification-count positionX="center" positionY="center" [notifications]="1">
</td-notification-count>
 ```
