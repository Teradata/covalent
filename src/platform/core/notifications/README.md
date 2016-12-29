# td-notification-count

`td-notification-count` element renders a number of notifications.

## API Summary

Properties:

| Name | Type | Description |
| --- | --- | --- |
| `color?` | `"primary" | "accent" | "warn"` | Sets the theme color of the notification tip. Defaults to 'warn'
| `noCount?` | `boolean` | Sets the component in its 'noCount' state. Makes the notification tip show without a count. Defaults to 'false'
| `notifications?` | `number | boolean` | Number for the notification count. Shows component only if the input is a positive number or 'true'

## Setup

Import the [CovalentNotificationModule] using the forRoot() method in your NgModule:

```typescript
import { CovalentNotificationModule } from '@covalent/core';
@NgModule({
  imports: [
    CovalentNotificationModule.forRoot(), // or CovalentCoreModule.forRoot() (included inside of it)
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

 Example for HTML noCount usage:

 ```html
<td-notification-count noCount [notifications]="true|false">
  <md-icon>notifications<md-icon>
</td-notification-count>
 ```
