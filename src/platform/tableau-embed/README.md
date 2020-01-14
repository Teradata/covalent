# td-tableau-embed
`td-tableau-embed` element generates an embedding Tableau visualization, which is built on top of the official tableau [library](https://help.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_ref.htm).
The options inputs receives the following interface:

```typescript
interface IVizCreateOptions {
  hideTabs?: boolean;
  hideToolbar?: boolean;
  instanceIdToClone?: string;
  height?: string;
  width?: string;
  device?: DeviceType;
  onFirstInteractive?: any;
  onFirstVizSizeKnown?: any;
}
```

## API Summary

#### Inputs

+ url: string
  + The embed URL.
+ options?: IVizCreateOptions
  + Sets visualization options. NOTE: hideTabs and hideToolbar options only work with Tableau Server embeddings.
+ filters?: any
  + Pre set filters for visualization data. NOTE: this input only work with Tableau Server embeddings.
#### Outputs

+ vizLoaded: function($event) 
  + Returns the loaded visualization object.

## Setup

Import the [CovalentTableauModule] in your NgModule:

```typescript
import { CovalentTableauModule } from '@covalent/tableau-embed';
@NgModule({
  imports: [
    CovalentTableauModule,
    ...
  ],
  ...
})
export class MyModule {}
```

## Usage

Example for HTML usage:

```html
<td-tableau-embed
  [url]="url" 
  [options]="options" 
  [filters]="filters">
</td-tableau-embed>
```
