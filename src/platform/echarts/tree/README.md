# td-chart-series[td-tree]

`td-chart-series[td-tree]` element generates a bar series echarts visualization inside a `td-chart`. Its the equivalent of creating a JS series object `type="tree"` in echarts.

## API Summary

#### Inputs

+ config?: any
  + Sets the JS config object if you choose to not use the property inputs.
  + Note: property inputs override JS config conject properties.

There are also lots of property inputs like:

+ label?: any
  + Text styles corresponding to each node, also used in the leaves object.
+ leaves?: ITdTreeLeaves
  + Styles for each leaf node in the tree, can be used to differentiation node labels from leaf nodes. See the code examples above.
+ itemStyle?: ITdItemStyle
  + Styles for each node in the tree.
+ data?: any[]
  + Data array of series.

And so many more.. for more info [click here](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree)

## Setup

Import the [CovalentTreeEchartsModule] in your NgModule:

```typescript
import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CovalentTreeEchartsModule } from '@covalent/echarts/tree';
@NgModule({
  imports: [
    CovalentBaseEchartsModule,
    CovalentTreeEchartsModule,
    ...
  ],
  ...
})
export class MyModule {}
```

## Usage

Basic Example:

```html
<td-chart [style.height.px]="800" 
          [config]="{ xAxis: { show: false }, yAxis: { show: false }, grid: { borderColor: 'transparent' } }">
  <td-chart-series td-tree
                  [leaves]="{ label: { position: 'right' } }"
                  [label]="{ position: 'left' }"            
                  [name]="'name'"
                  [data]="[{ name: 'flare', children: [{ name: 'AgglomerativeCluster', value: 3938 }, 
                    { name: 'CommunityStructure', value: 3812 }, { name: 'HierarchicalCluster', value: 6714 }] }]">
  </td-chart-series>
</td-chart>
```