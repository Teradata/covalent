# td-chart-toolbox

`td-chart-toolbox` element generates a global toolbox for the echarts visualization inside a `td-chart`. Its the equivalent of creating a JS toolbox object in echarts.

## API Summary

#### Inputs

+ config?: any
  + Sets the JS config object if you choose to not use the property inputs.
  + Note: property inputs override JS config conject properties.

There are also lots of property inputs like:

+ feature?: ITdToolboxFeature
  + The configuration item for each tool which includes saveAsImage, dataView, dataZoom, restore, magicTypes and brush.
+ show?: boolean
  + Show or hide the toolbox.

And so many more.. for more info [click here](https://ecomfe.github.io/echarts-doc/public/en/option.html#toolbox)

## Setup

Import the [CovalentToolboxEchartsModule] in your NgModule:

```typescript
import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CovalentToolboxEchartsModule } from '@covalent/echarts/toolbox';
@NgModule({
  imports: [
    CovalentBaseEchartsModule,
    CovalentToolboxEchartsModule,
    ...
  ],
  ...
})
export class MyModule {}
```

## Usage

Basic Toolbox Example: To change the toolbox default language for `title` and `lang` properties they must be done manually either on the parent config JS object or on the `td-chart-toolbox` component inputs. Toolbox component inputs will override any options on the parent `td-chart` config JS object.

```html
<td-chart>
  <td-chart-toolbox
              [show]="true"
              [right]="30"
              [feature]="{dataView: {readOnly: true, title: 'View Data', lang: ['Data View', 'Turn Off', 'Refresh']},
                          dataZoom: {title: {zoom: 'Zoom', back: 'Back'}},
                          magicType: {type: ['line', 'bar', 'stack', 'tiled'], 
                                      title: {line: 'Line', bar: 'Bar', stack: 'Stack', tiled: 'Tiled'}},
                          restore: {title: 'Restore'}}">
  </td-chart-toolbox>
</td-chart>
```
