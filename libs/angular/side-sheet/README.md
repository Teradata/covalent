# CovalentSideSheet

Main injectable to import and call the `open` method with any TemplateRef or Component

## td-side-sheet-title

`td-side-sheet-title` adds title styling to an element (optional)

## td-side-sheet-close

`td-side-sheet-close` will close the open side sheet on click, enter, etc.

## td-side-sheet-content

`td-side-sheet-content` creates an element to hold the content with margins that follow Material spec and also scroll when the content is larger than the view port

## td-side-sheet-actions

`td-side-sheet-actions` creates a sticky footer that can hold multiple actions (optional)

## Setup

Import the [CovalentSideSheetModule] in your NgModule:

```typescript
import { CovalentSideSheetModule } from '@covalent/core/side-sheet';
@NgModule({
  imports: [
    CovalentSideSheetModule,
    ...
  ],
  ...
})
export class MyModule {}
```

## Usage

Basic Example:

```typescript
import { ExampleSideSheetComponent } from './example.sidebar/example.sidesheet.component';
import { CovalentSideSheet } from '.@covalent/core/side-sheet';

export class AppComponent {  
  constructor(private sideSheet: CovalentSideSheet) {
    this.sideSheet.open(ExampleSidebarComponent);
  }
}
```

Example component html content with optional directives to support styling:

```html
<span td-sidesheet-title>
  Side Sheet Title
  <button mat-icon-button td-sidesheet-close>close</button>  
</span>
<td-side-sheet-content>
  Sidesheet Content
</td-side-sheet-content>
<td-sidesheet-actions>
  <button mat-icon-button td-sidesheet-close>close</button>
  <button mat-icon-button td-sidesheet-close>save</button>
</td-sidesheet-actions>
```
