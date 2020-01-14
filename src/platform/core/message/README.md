# td-message

`td-message` element generates an inline message with an icon, color, label and sublabel.

`color` can be either with any theme color (`primary`, `accent` or `warn`)
But you can also set a `color` from our lib and it can be applied in the component to get any material color not in the theme. (`blue`, `red`, etc)

## API Summary

#### Inputs

+ label?: string
  + Sets the label of the message.
+ sublabel?: string
  + Sets the sublabel of the message.
+ icon?: string
  + The icon to be displayed before the title. Defaults to `info_outline` icon.
+ color?: 'primary' | 'accent' | 'warn'
  + Sets the color of the message. Can also use any material color: `purple`, `light-blue`, etc.
+ opened?: boolean
  + Shows or hides the message depending on its value. Defaults to 'true'.

#### Methods

+ open: function 
  + Renders the message on screen.
+ close: function
  +  Removes the message content from screen.
+ toggle: function
  +  Toggles between open and close depending on state.

## Setup

Import the [CovalentMessageModule] in your NgModule:

```typescript
import { CovalentMessageModule } from '@covalent/core/message';
@NgModule({
  imports: [
    CovalentMessageModule,
    ...
  ],
  ...
})
export class MyModule {}
```

## Usage

Example for HTML usage:

```html
<td-message #messageDemo color="primary" class="pad-sm" label="Hide me!" sublabel="You can toggle my visibility & add a class!">
  <button td-message-actions mat-icon-button (click)="messageDemo.close()"><mat-icon>cancel</mat-icon></button>
</td-message>
<button mat-button color="accent" (click)="messageDemo.toggle()">
  Toggle Visibility
</button>
```
