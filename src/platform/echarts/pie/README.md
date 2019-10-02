# td-chart-series[td-pie]

`td-chart-series[td-pie]` element generates a pie series echarts visualization inside a `td-chart`. Its the equivalent of creating a JS series object `type="pie"` in echarts.

## API Summary

#### Inputs

+ config?: any
  + Sets the JS config object if you choose to not use the property inputs.
  + Note: [config] input properties will override input values

There are also lots of property inputs like:

+ id?: string
  + It can be used to refer the component in option or API.
+ name?: string
  + Series name used for displaying in tooltip and filtering with legend.
+ color?: any
  + Global color for the series.
+ data?: any[]
  + Data array of series.

And so many more.. for more info [click here](https://echarts.apache.org/en/option.html#series-pie)

## Setup

Import the [CovalentPieEchartsModule] in your NgModule:

```typescript
import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CovalentPieEchartsModule } from '@covalent/echarts/pie';
@NgModule({
  imports: [
    CovalentBaseEchartsModule,
    CovalentPieEchartsModule,
    ...
  ],
  ...
})
export class MyModule {}
```

## Usage

Basic Example:

```html
<td-chart>
  <td-chart-series td-pie
              [name]="'name'"
              [data]="[{ name: 'name1', value: 150},
                       { name: 'name2', value: 130},
                       { name: 'name3', value: 150},
                       { name: 'name4', value: 120},
                       { name: 'name5', value: 150}]"
              [color]="['#F2724B','#26B99A', '#34495E', '#BDC3C7', '#3498DB']">
  </td-chart-series>
</td-chart>
```
