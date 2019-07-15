# td-sidesheet

Wrap the sidesheet elements you need in a `td-sidesheet` element.

## td-sidesheet-header

`td-sidesheet-header` creates a header that can hold a title and an action (optional)

## td-sidesheet-title

`td-sidesheet-title` adds a title to the header (optional)

## td-sidesheet-header-action

`td-sidesheet-header-action` creates an action in the header (optional)

## td-sidesheet-content

`td-sidesheet-content` creates an element to hold the content with margins that follow Material spec

## td-sidesheet-actions

`td-sidesheet-actions` creates a sticky footer that can hold multiple actions (optional)

## Setup

Import the [CovalentSidesheetModule] in your NgModule:

```typescript
import { CovalentSidesheetModule } from '@covalent/core/sidesheet';
@NgModule({
  imports: [
    CovalentSidesheetModule,
    ...
  ],
  ...
})
export class MyModule {}
```

## Usage

Basic Example:

```html
<td-sidesheet>
  Sidesheet Content
</td-sidesheet>
```

Example with optional components:

```html
<td-sidesheet>
  <td-sidesheet-header>
    <td-sidesheet-title>Sidesheet Title</td-sidesheet-title>
    <button mat-icon-button td-sidesheet-header-action>
      ... add button for sidesheet action
    </button>
  </td-sidesheet-header>
  <td-sidesheet-content>
    Sidesheet Content
  </td-sidesheet-content>
  <td-sidesheet-actions>
    ... add button elements
  </td-sidesheet-actions>
</td-sidesheet>  
```
