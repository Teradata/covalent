# td-chart-series[td-histogram]

`td-chart-series[td-histogram]` element generates a graph series echarts visualization inside a `td-chart`. Its the equivalent of creating a JS series object `type="bar"` in echarts, but binning the data.

## API Summary

#### Inputs

- config?: any
  - Sets the JS config object if you choose to not use the property inputs.
  - Note: [config] input properties will override input values

There are also lots of property inputs like:

- id?: string
  - It can be used to refer the component in option or API.
- name?: string
  - Series name used for displaying in tooltip and filtering with legend.
- color?: any
  - Global color for the series.
- method?: 'squareRoot' | 'scott' | 'freedmanDiaconis' | 'sturges'
  - Methods to calculate the number of bins (default value 'squareRoot').
- source?: any[] | any[][]
  - Data array of series (can be multi-dimensional).

And so many more... for more info [click here](https://github.com/ecomfe/echarts-stat)

## Setup

Import the [CovalentHistogramEchartsModule] in your NgModule:

```typescript
import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CovalentHistogramEchartsModule } from '@covalent/echarts/histogram';
@NgModule({
  imports: [
    CovalentBaseEchartsModule,
    CovalentHistogramEchartsModule,
    ...
  ],
  ...
})
export class MyModule {}
```

## Usage

Basic Example:

```html
<td-chart [style.height.px]="500">
  <td-chart-x-axis
    [show]="true"
    [position]="'bottom'"
    [type]="'category'"
    [boundaryGap]="true"
  ></td-chart-x-axis>
  <td-chart-y-axis
    [show]="true"
    [type]="'value'"
    [position]="'right'"
    [splitLine]="{ lineStyle: { type: 'dotted' } }"
  ></td-chart-y-axis>
  <td-chart-series
    td-histogram
    [method]="'squareRoot'"
    [source]="[8.5, 8.7, 9.2, 9.9, 10.2, 10.3, 11.2, 11.3, 11.3, 11.5, 11.6, 11.7, 11.8, 12, 12, 12.5, 12.9, 13, 13.5, 14, 15.1, 15.2, 15.3, 15.8, 16.2, 16.3, 16.4, 19.5, 19.8, 20.1, 20.2]"
  >
  </td-chart-series>
</td-chart>
```
