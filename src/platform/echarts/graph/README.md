# td-chart-series[td-graph]

`td-chart-series[td-graph]` element generates a graph series echarts visualization inside a `td-chart`. Its the equivalent of creating a JS series object `type="graph"` in echarts.

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

And so many more.. for more info [click here](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-graph)

## Setup

Import the [CovalentGraphEchartsModule] in your NgModule:

```typescript
import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CovalentGraphEchartsModule } from '@covalent/echarts/graph';
@NgModule({
  imports: [
    CovalentBaseEchartsModule,
    CovalentGraphEchartsModule,
    ...
  ],
  ...
})
export class MyModule {}
```

## Usage

Basic Example:

```html
<td-chart [config]="{ xAxis: { show: false }, yAxis: { show: false } }">
  <td-chart-series td-graph
                  [data]="[{ x: -739.36383, y: -404.26147, id: 'jquery', name: 'jquery',
                    symbolSize: 40.7252817, itemStyle: { normal: { color: '#4f19c7' } } },
                  { x: -134.2215, y: -862.7517, id: 'backbone', name: 'backbone',
                    symbolSize: 60.1554675, itemStyle: { normal: { color: '#c71969' } } },
                  { x: -818.97516, y: 624.50604, id: 'angular', name: 'angular',
                    symbolSize: 60.7816025, itemStyle: { normal: { color: '#c71969' } } },
                  { x: -710.59204, y: 120.37976, id: 'socket.io', name: 'socket.io',
                    symbolSize: 19.818306, itemStyle: { normal: { color: '#c71919' } } },
                  { x: -127.03764, y: 477.03778, id: 'underscore', name: 'underscore',
                    symbolSize: 40.0429485, itemStyle: { normal: { color: '#c76919' } } },
                  { x: -338.03128, y: -404.62427, id: 'vue.js', name: 'vue.js',
                    symbolSize: 80.163814, itemStyle: { normal: { color: '#8419c7' } } },
                  { x: 118.30771, y: -380.16626, id: 'lodash', name: 'lodash',
                    symbolSize: 18.935852, itemStyle: { normal: { color: '#c76919' } } },
                  { x: 381.10724, y: -531.28235, id: 'dateformat', name: 'dateformat',
                    symbolSize: 30.3863845, itemStyle: { normal: { color: '#c71969' } } },
                  { x: -644.2716, y: -230.14833, id: 'express', name: 'express',
                    symbolSize: 49.608772, itemStyle: { normal: { color: '#c71919' } } }]"
                  [edges]="[{ source: 'jquery', target: 'backbone' },
                            { source: 'jquery', target: 'vue.js' },
                            { source: 'jquery', target: 'lodash' },
                            { source: 'jquery', target: 'dateformat' },
                            { source: 'backbone', target: 'underscore' },
                            { source: 'faye', target: 'cookiejar' },
                            { source: 'socket.io', target: 'express' },
                            { source: 'socket.io', target: 'faye' },
                            { source: 'vue.js', target: 'underscore' },
                            { source: 'vue.js', target: 'dateformat' },
                            { source: 'express', target: 'socket.io' },
                            { source: 'express', target: 'dateformat' }]"
                  [roam]="true"
                  [focusNodeAdjacency]="true"
                  [label]="{ emphasis: { position: 'right', show: true } }">
  </td-chart-series>
</td-chart>
```
