# td-chart-series[td-scatter]

`td-chart-series[td-scatter]` element generates a scatter series echarts visualization inside a `td-chart`. Its the equivalent of creating a JS series object `type="scatter"` in echarts.

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
+ data?: any[]
  + Data array of series.

And so many more.. for more info [click here](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-scatter)

## Setup

Import the [CovalentScatterEchartsModule] in your NgModule:

```typescript
import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CovalentScatterEchartsModule } from '@covalent/echarts/scatter';
@NgModule({
  imports: [
    CovalentBaseEchartsModule,
    CovalentScatterEchartsModule,
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
                    [type]="'value'">
  </td-chart-x-axis>
  <td-chart-y-axis [show]="true"
                    [type]="'value'">
  </td-chart-y-axis>
  <td-chart-series td-scatter
                    [data]="[
                      [28604, 77, 17096869, 'Australia', 1990],
                      [31163, 77.4, 27662440, 'Canada', 1990],
                      [1516, 68, 1154605773, 'China', 1990],
                      [13670, 74.7, 10582082, 'Cuba', 1990],
                      [28599, 75, 4986705, 'Finland', 1990]
                    ]"
                    [name]="'1990'"
                    [color]="'#F2724B'">
  </td-chart-series>
</td-chart>
```
