# td-expansion-panel

`td-expansion-panel` element adds expand/collapse features to your html blocks

It also contains an optional summary to display anything in collapsed state.

## API Summary

#### Inputs

+ label?: string
  + Sets label of component header.
+ sublabel?: string
  + Sets sublabel of component header.
+ expand?: boolean
  + Toggles component between expand/collapse state.
+ disableRipple?: boolean
  + Whether the ripple effect for this component is disabled.

#### Events

+ expanded: function
  + Event emitted when component is expanded.
+ collapsed: function
  + Event emitted when component is collapsed.

#### Methods

+ toggle: function
  + Toggle state of component. Returns "true" if successful, else "false".
+ open: function
  + Opens component and sets state to expanded. Returns "true" if successful, else "false".
+ close: function
  + Closes component and sets state to collapsed. Returns "true" if successful, else "false".


# td-expansion-panel-group

`td-expansion-panel-group` is used to group expansion panel components.

Setting the `multi` property to false allows for accordion mode, where only one panel is allowed to be open at a time.

Margin is added between the panels when expanded, following the material spec.

## API Summary

#### Inputs

+ multi?: boolean
  + Sets whether multiple panels can be opened at a given time.
  + Set to false for accordion mode.
  + Defaults to false.

#### Methods

+ openAll: function
  + Opens all expansion panels, only if multi set set to true.
+ closeAll: function
  + Closes all expansion panels.

## Setup

Import the [CovalentExpansionPanelModule] in your NgModule:

```typescript
import { CovalentExpansionPanelModule } from '@covalent/core/expansion-panel';
@NgModule({
  imports: [
    CovalentExpansionPanelModule,
    ...
  ],
  ...
})
export class MyModule {}
```

## Usage

Example for HTML usage:

```html
<td-expansion-panel
  label="label"
  sublabel="sublabel"
  expand="true"
  disabled="false"
  (expanded)="expandedEvent()"
  (collapsed)="collapsedEvent()"
  [disableRipple]="false"
>
  <ng-template td-expansion-panel-header>
    ... add header content (overrides label and sublabel)
  </ng-template>
  <ng-template td-expansion-panel-label>
    ... add label content (if not used, falls back to [label] input)
  </ng-template>
  <ng-template td-expansion-panel-sublabel>
    ... add sublabel content (if not used, falls back to [sublabel] input)
  </ng-template>
  <td-expansion-summary>
    ... add summary that will be shown when expansion-panel is "collapsed".
  </td-expansion-summary>
  ... add content that
</td-expansion-panel>
```

```html
<td-expansion-panel-group [multi]="false">
  <td-expansion-panel>
    ..content
  </td-expansion-panel>
  <td-expansion-panel>
    ..content
  </td-expansion-panel>
</td-expansion-panel-group>
```
