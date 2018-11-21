# td-virtual-scroll-container

`td-virtual-scroll-container` element calculates the items that fit in the viewport and only renders those, improving resource efficiency in long lists.

**NOTE:** every row has to have the same height, since there are some calculations assumed for the total scroll height.

## API Summary

#### Inputs

+ data?: any[]
  + List of items to virtually iterate on.
+ trackBy?: TrackByFunction
  + This accepts the same trackBy function [ngFor] does.

#### Events

+ bottom?: function
  + Method to be executed when user scrolled to the last item of the list. No value is emitted.
  + An [ITdVirtualScrollBottomEvent] event is emitted

#### Methods

+ refresh?: function()
  + Method to refresh and recalculate the virtual rows
+ scrollTo?: function(row: number)
  + Method to scroll to a specific row of the list.
+ scrollToStart?: function()
  + Method to scroll to the start of the list.
+ scrollToEnd?: function()
  + Method to scroll to the end of the list.

## Setup

Import the [CovalentVirtualScrollModule] in your NgModule:

```typescript
import { CovalentVirtualScrollModule } from '@covalent/core/virtual-scroll';
@NgModule({
  imports: [
    CovalentVirtualScrollModule,
    ...
  ],
  ...
})
export class MyModule {}
```

## Usage

Example for HTML usage:

```html
<td-virtual-scroll-container [style.height.px]="400"
                             [data]="data"
                             [trackBy]="trackByFn"
                             (bottom)="fetchMoreData()">
  <ng-template let-row="row"
               let-index="index"
               let-first="first"
               let-last="last"
               let-odd="odd"
               let-even="even"
               tdVirtualScrollRow>
    {{row}}
  </ng-template>
</td-virtual-scroll-container>
```
