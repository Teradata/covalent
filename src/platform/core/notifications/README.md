# td-notification-count

`td-notification-count` element renders a number of notifications.

## API Summary

Properties:

| Name | Type | Description |
| --- | --- | --- |
| `color?` | `"primary" | "accent" | "warn"` | Sets the theme color of the notification tip. Defaults to 'warn'
| `notifications?` | `number | boolean` | Number for the notification count. Shows number if the input is a positive number or its no count state if boolean 'true'

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
<td-notification-count [notifications]="1|0">
  <md-icon>notifications<md-icon>
</td-notification-count>
 ```

 Example for HTML no count usage:

 ```html
<td-notification-count [notifications]="true|false">
  <md-icon>notifications<md-icon>
</td-notification-count>
 ```
