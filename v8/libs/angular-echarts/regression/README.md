# td-chart-series[td-regression]

`td-chart-series[td-regression]` element generates a regression series echarts visualization inside a `td-chart`.

## API Summary

#### Inputs

- id?: string
  - It can be used to refer the component in option or API.
- name?: string
  - Series name used for displaying in tooltip and filtering with legend.
- color?: any
  - Global color for the series.
- regressionType?: 'linear' | 'exponential' | 'logarithmic' | 'polynomial'
  - There are four types of regression (default value 'linear').
- polinomialOrder?: number
  - The order of polynomial regression type. Ignored for other types (default value 2).
- data?: any[]
  - Data array of series.

And so many more... for more info [click here](https://github.com/ecomfe/echarts-stat)

## Setup

Import the [CovalentRegressionEchartsModule] in your NgModule:

```typescript
import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CovalentRegressionEchartsModule } from '@covalent/echarts/regression';
@NgModule({
  imports: [
    CovalentBaseEchartsModule,
    CovalentRegressionEchartsModule,
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
  <td-chart-x-axis [show]="true" [type]="'value'"> </td-chart-x-axis>
  <td-chart-y-axis [show]="true" [type]="'value'"> </td-chart-y-axis>
  <td-chart-series
    td-regression
    [regressionType]="'logarithmic'"
    [data]="[
        [0.067732, 3.176513],
        [0.42781, 3.816464],
        [0.995731, 4.550095],
        [0.738336, 4.256571],
        [0.981083, 4.560815],
        [0.526171, 3.929515],
        [0.378887, 3.52617],
        [0.033859, 3.156393],
        [0.132791, 3.110301],
        [0.138306, 3.149813],
        [0.247809, 3.476346],
        [0.731209, 4.282233],
        [0.236833, 3.486582],
        [0.969788, 4.655492],
        [0.607492, 3.965162],
        [0.358622, 3.5149]
    ]"
  >
  </td-chart-series>
</td-chart>
```
