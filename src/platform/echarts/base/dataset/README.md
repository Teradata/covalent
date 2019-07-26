# td-chart-dataset

`td-chart-dataset` element sets the dataset option inside `td-chart`. It allows additional flexibility to managing data separately from the series property which helps with data reuse using different series. It also enables data encoding. Its the equivalent of creating a JS dataset object in echarts.

## API Summary

#### Inputs

+ config?: any
  + Sets the JS config object if you choose to not use the property inputs.
  + Note: [config] input properties will override input values

There are also has several property inputs:s

+ id?: string
  + It can be used to refer the component in option or API.
+ source?: object | any[]
  + Source data. Chart data described in a tabular or 2d array format. series.data will override dataset.source.
+ dimensions?: any[]
  + dimensions can be used to define dimension info for series.data or dataset.source.
+ sourceHeader?: boolean
  + Whether the first row/column of dataset.source represents dimension names.

For more info [click here](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataset)

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

Basic Example:

```html
<td-chart [style.height.px]="300">
  <td-chart-x-axis></td-chart-x-axis>
  <td-chart-y-axis [type]="'category'"> </td-chart-y-axis>
    <td-chart-series td-bar></td-chart-series>
    <td-chart-series td-bar></td-chart-series>
    <td-chart-series td-bar></td-chart-series>
  <td-chart-dataset
    [source]="[['product', '2015', '2016', '2017'],
    ['Matcha Latte', 43.3, 85.8, 93.7], ['Milk Tea', 83.1, 73.4, 55.1],
    ['Cheese Cocoa', 86.4, 65.2, 82.5], ['Walnut Brownie', 72.4, 53.9, 39.1]]">
  </td-chart-dataset>
</td-chart>
```
Dimensions Input property Example:

```html
<td-chart [style.height.px]="300">
  <td-chart-x-axis></td-chart-x-axis>
  <td-chart-y-axis [type]="'category'"> </td-chart-y-axis>
  <td-chart-series td-bar></td-chart-series>
  <td-chart-series td-bar></td-chart-series>
  <td-chart-series td-bar></td-chart-series>
  <td-chart-dataset
    [dimensions]="['product', '2015', '2016', '2017']"
    [source]="[{product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7},
    {product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1},
    {product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5},
    {product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1}]">
  </td-chart-dataset>
</td-chart>
```
