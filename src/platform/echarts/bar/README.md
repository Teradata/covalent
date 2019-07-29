# td-chart-series[td-bar]

`td-chart-series[td-bar]` element generates a bar series echarts visualization inside a `td-chart`. Its the equivalent of creating a JS series object `type="bar"` in echarts.

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

And so many more.. for more info [click here](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar)

## Setup

Import the [CovalentBarEchartsModule] in your NgModule:

```typescript
import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CovalentBarEchartsModule } from '@covalent/echarts/bar';
@NgModule({
  imports: [
    CovalentBaseEchartsModule,
    CovalentBarEchartsModule,
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
  <td-chart-x-axis [show]="true"
                    [type]="'category'"
                    [data]="['Electronics', 'Toys', 'Grocery', 'Appliances', 'Automotive', 'Sports']">
  </td-chart-x-axis>
  <td-chart-y-axis [show]="true"
                    [type]="'value'">
  </td-chart-y-axis>
  <td-chart-series td-bar
              [name]="'name'"
              [data]="[150, 130, 150, 120, 150, 120]"
              [color]="'#F2724B'">
  </td-chart-series>
</td-chart>
```
