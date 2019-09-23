# td-chart-series[td-line]

`td-chart-series[td-line]` element generates a line series echarts visualization inside a `td-chart`. Its the equivalent of creating a JS series object `type="line"` in echarts.

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

And so many more.. for more info [click here](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-line)

## Setup

Import the [CovalentLineEchartsModule] in your NgModule:

```typescript
import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CovalentLineEchartsModule } from '@covalent/echarts/line';
@NgModule({
  imports: [
    CovalentBaseEchartsModule,
    CovalentLineEchartsModule,
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
                    [type]="'time'">
  </td-chart-x-axis>
  <td-chart-y-axis [show]="true"
                    [type]="'value'">
  </td-chart-y-axis>
  <td-chart-series td-line
              [name]="'name'"
              [data]="[{
                'name': '2018-10-29T03:27:33.932Z',
                'value': [
                  '2018-10-29T03:27:33.932Z',
                  200
                ]
              }, {
                'name': '2018-10-30T03:27:33.932Z',
                'value': [
                  '2018-10-30T03:27:33.932Z',
                  50
                ]
              },{
                'name': '2018-10-31T03:27:33.932Z',
                'value': [
                  '2018-10-31T03:27:33.932Z',
                  100
                ]
              }]"
              [color]="'#F2724B'">
  </td-chart-series>
</td-chart>
```
