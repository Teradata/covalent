# td-chart-x-axis and td-chart-y-axis

`td-chart-x-axis` and `td-chart-y-axis` elements generate an axis inside a `td-chart`. Its the equivalent of creating a JS xAxis/yAxis object in echarts.

## API Summary

#### Inputs

+ config?: any
  + Sets the JS config object if you choose to not use the property inputs.
  + Note: [config] input properties will override input values

There are also lots of property inputs like:

+ id?: string
  + It can be used to refer the component in option or API.
+ name?: string
  + Location of axis name.
+ type?: 'value' | 'category' | 'time' | 'log'
  + Type of axis
+ min?: number
  + The minimun value of axis.
+ max?: number
  + The maximum value of axis.

And so many more.. for more info on xAxis [click here](https://echarts.apache.org/en/option.html#xAxis) and yAxis [click here](https://echarts.apache.org/en/option.html#yAxis)

## Setup

Import the [CovalentBaseEchartsModule] in your NgModule:

```typescript
import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
@NgModule({
  imports: [
    CovalentBaseEchartsModule,
    ...
  ],
  ...
})
export class MyModule {}
```

## Usage

Basic Tooltip Example:

```html
<td-chart>
  <td-chart-x-axis [show]="true"
                    [type]="'category'"
                    [data]="['Electronics', 'Toys', 'Grocery', 'Appliances', 'Automotive', 'Sports']">
  </td-chart-x-axis>
  <td-chart-y-axis [show]="true"
                    [type]="'value'">
  </td-chart-y-axis>
</td-chart>
```
