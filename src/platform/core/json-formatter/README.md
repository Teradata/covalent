# td-json-formatter

`td-json-formatter` renders a javascript object in JSON format the same way the chrome/firefox console would render it using `console.log()`.

Hovering on nodes will bring out a preview tooltip of the first 5 objects/properties of the node.

The tree is collapsable/expandable so you can navigate through its nodes.

## API Summary

Properties:

| Name | Type | Description |
| --- | --- | --- |
| `key?` | `string` | Tag to be displayed as root of formatted object.
| `data` | `any` | JS object to be formatted.
| `levelsOpen?` | `number` | Levels opened by default when JS object is formatted and rendered.
| `refresh?` | `function()` | Refreshes json-formatter and rerenders [data]

## Setup

Import the [CovalentJsonFormatterModule] using the forRoot() method in your NgModule:

```typescript
import { CovalentJsonFormatterModule } from '@covalent/core';
@NgModule({
  imports: [
    CovalentJsonFormatterModule.forRoot(),  // or CovalentCoreModule.forRoot() (included inside of it)
    ...
  ],
  ...
})
export class MyModule {}
```

## Usage

Simply add the component and pass the object to be formatted as a [data] input.

Example for HTML usage:

```html
<td-json-formatter [data]="object" key="root" [levelsOpen]="1">
</td-json-formatter>
```
