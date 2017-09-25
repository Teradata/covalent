# td-expansion-panel

`td-expansion-panel` element adds expand/collapse features to your html blocks

It also contains an optional summary to display anything in collapsed state.

## API Summary

Properties:

| Name | Type | Description |
| --- | --- | 650--- |
| `label?` | `string` | Sets label of component header.
| `sublabel?` | `string` | Sets sublabel of component header.
| `expand?` | `boolean` | Toggles component between expand/collapse state.
| `disableRipple?` | `boolean` | Whether the ripple effect for this component is disabled.
| `expanded?` | `function` | Event emitted when component is expanded.
| `collapsed?` | `function` | Event emitted when component is collapsed.
| `toggle?` | `function` | Toggle state of component. Returns "true" if successful, else "false".
| `open?` | `function` | Opens component and sets state to expanded. Retuns "true" if successful, else "false".
| `close?` | `function` | Closes component and sets state to collapsed. Retuns "true" if successful, else "false".

## Setup

Import the [CovalentExpansionPanelModule] in your NgModule:

```typescript
import { CovalentExpansionPanelModule } from '@covalent/core';
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
<td-expansion-panel label="label" sublabel="sublabel" expand="true" disabled="false" (expanded)="expandedEvent()" (collapsed)="collapsedEvent()" [disableRipple]="false">
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

# td-expansion-panel-group

`td-expansion-panel-group` is used to group expansion panel components.

It adds margin between them when expanded following the material spec.

## Usage

Example for HTML usage:

```html
<td-expansion-panel-group>
  <td-expansion-panel>
    ..content
  </td-expansion-panel>
  <td-expansion-panel>
    ..content
  </td-expansion-panel>
</td-expansion-panel-group>
```
