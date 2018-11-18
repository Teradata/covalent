# td-chart-series[td-sankey]

`td-chart-series[td-sankey]` element generates a sankey series echarts visualization inside a `td-chart`. Its the equivalent of creating a JS series object `type="sankey"` in echarts.

## API Summary

#### Inputs

+ config?: any
  + Sets the JS config object if you choose to not use the property inputs.
  + Note: property inputs override JS config conject properties.

There are also lots of property inputs like:

+ id?: string
  + It can be used to refer the component in option or API.
+ name?: string
  + Series name used for displaying in tooltip and filtering with legend.
+ color?: any
  + Global color for the series.
+ nodes?: any[] // or data?: any[]
  + Data array of series.
+ links?: any[] // or edges?: any[]
  + The links between nodes.

And so many more.. for more info [click here](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-sankey)

## Setup

Import the [CovalentSankeyEchartsModule] in your NgModule:

```typescript
import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CovalentSankeyEchartsModule } from '@covalent/echarts/sankey';
@NgModule({
  imports: [
    CovalentBaseEchartsModule,
    CovalentSankeyEchartsModule,
    ...
  ],
  ...
})
export class MyModule {}
```

## Usage

Basic Example:

```html
<td-chart [config]="{ xAxis: { show: false }, yAxis: { show: false }, grid: { borderColor: 'transparent' } }">
  <td-chart-series td-sankey
                    [focusNodeAdjacency]="'allEdges'"
                    [right]="40"
                    [left]="40"
                    [data]="[{name: 'a'},
                            {name: 'b'},
                            {name: 'a1'},
                            {name: 'a2'},
                            {name: 'b1'},
                            {name: 'c'}]"
                    [links]="[{
                                source: 'a',
                                target: 'a1',
                                value: 5
                              }, {
                                source: 'a',
                                target: 'a2',
                                value: 3
                              }, {
                                source: 'b',
                                target: 'b1',
                                value: 8
                              }, {
                                source: 'a',
                                target: 'b1',
                                value: 3
                              }, {
                                source: 'b1',
                                target: 'a1',
                                value: 1
                              }, {
                                source: 'b1',
                                target: 'c',
                                value: 2
                              }]">
  </td-chart-series>
</td-chart>
```
