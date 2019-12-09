# td-chart-series[td-map]

`td-chart-series[td-map]` element generates a map series echarts visualization inside a `td-chart`. It's the equivalent of creating a JS series object `type="map"` in echarts.

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
+ map?: string
  + Due to the increase of fineness of map, ECharts 3 doesn't include map data by default for package size consideration.
+ data?: any[]
  + Data array of series.

And so many more.. for more info [click here](https://echarts.apache.org/en/option.html#series-map)

## Setup

Import the [CovalentMapEchartsModule] in your NgModule:

```typescript
import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CovalentMapEchartsModule } from '@covalent/echarts/map';
@NgModule({
  imports: [
    CovalentBaseEchartsModule,
    CovalentMapEchartsModule,
    ...
  ],
  ...
})
export class MyModule {}
```

## Usage

Basic Example:

ECharts uses geoJSON format as map outline. In orther to use a map, you may find map files you need on [map download page](https://echarts.baidu.com/download-map.html) and then include and register them in ECharts:

```typescript
echarts.registerMap('USA', usaGeoJson);
```

```html
<td-chart>
  <td-chart-series td-map
                  [name]="'USA PopEstimates'"
                  [map]="'USA'"
                  [data]="[
                    {name: 'Alabama', value: 4822023},
                    {name: 'Alaska', value: 731449},
                    {name: 'Arizona', value: 6553255},
                    {name: 'Arkansas', value: 2949131},
                    {name: 'California', value: 38041430},
                    {name: 'Colorado', value: 5187582},
                    {name: 'Connecticut', value: 3590347},
                    {name: 'Delaware', value: 917092},
                    {name: 'District of Columbia', value: 632323},
                    {name: 'Florida', value: 19317568},
                    {name: 'Georgia', value: 9919945},
                    {name: 'Hawaii', value: 1392313},
                    {name: 'Idaho', value: 1595728},
                    {name: 'Illinois', value: 12875255},
                    {name: 'Indiana', value: 6537334},
                    {name: 'Iowa', value: 3074186},
                    {name: 'Kansas', value: 2885905},
                    {name: 'Kentucky', value: 4380415},
                    {name: 'Louisiana', value: 4601893},
                    {name: 'Maine', value: 1329192},
                    {name: 'Maryland', value: 5884563},
                    {name: 'Massachusetts', value: 6646144},
                    {name: 'Michigan', value: 9883360},
                    {name: 'Minnesota', value: 5379139},
                    {name: 'Mississippi', value: 2984926},
                    {name: 'Missouri', value: 6021988},
                    {name: 'Montana', value: 1005141},
                    {name: 'Nebraska', value: 1855525},
                    {name: 'Nevada', value: 2758931},
                    {name: 'New Hampshire', value: 1320718},
                    {name: 'New Jersey', value: 8864590},
                    {name: 'New Mexico', value: 2085538},
                    {name: 'New York', value: 19570261},
                    {name: 'North Carolina', value: 9752073},
                    {name: 'North Dakota', value: 699628},
                    {name: 'Ohio', value: 11544225},
                    {name: 'Oklahoma', value: 3814820},
                    {name: 'Oregon', value: 3899353},
                    {name: 'Pennsylvania', value: 12763536},
                    {name: 'Rhode Island', value: 1050292},
                    {name: 'South Carolina', value: 4723723},
                    {name: 'South Dakota', value: 833354},
                    {name: 'Tennessee', value: 6456243},
                    {name: 'Texas', value: 26059203},
                    {name: 'Utah', value: 2855287},
                    {name: 'Vermont', value: 626011},
                    {name: 'Virginia', value: 8185867},
                    {name: 'Washington', value: 6897012},
                    {name: 'West Virginia', value: 1855413},
                    {name: 'Wisconsin', value: 5726398},
                    {name: 'Wyoming', value: 576412},
                    {name: 'Puerto Rico', value: 3667084}
                  ]"
                  [roam]="true"
                  [itemStyle]="{ emphasis:{label:{show:true}} }">
  </td-chart-series>
</td-chart>
```
