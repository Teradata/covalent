# utilities

Helper functions to facilitate common tasks.

## API Summary

### copyToClipboard

#### Parameters

+ value?: string
  + Value to be assigned to the system clipboard.

#### Caviats

Due to browser security restrictions, this method will
not succeed if executed strictly programmatically. The
copy operation must be performed as a direct result of
a user action (eg. user clicks a button in the UI). 

## Usage

Basic Example:

```typescript
import { copyToClipboard } from '@covalent/utilities'

@Component({
  ...
  template: `
    <button (click)="doCopy()">Copy To Clipboard</button>
  `,
  ...
})
export class MyComponent {
  ...
  doCopy(): void {
    copyToClipboard('Lorem Ipsum');
  }
}
```

