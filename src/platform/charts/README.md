# td-charts

`<td-charts>` is a directive for Ng2 + D3 V4 Chart. This is a parent element and all the charts would be rendered inside this.

## API Summary

Properties:

| Name | Type | Description |
| --- | --- | --- |
| `title?` | `string` | Sets the Chart Title
| `chartHeight?` | `string` | Sets the height of the chart
| `shadow?` | `boolean` | Flag to enable shadows in chart
| `shadowDepth?` | `array[]` | Set the parameters for shadowDepth (size, y offset, x offset, blur)
| `shadowColor?` | `string` | Sets shadow color for the charts (rgba preferred)
| `fillOpacity?` | `number` | Sets opacity for the charts
| `margin?` | `IChartMargin` | Sets SVG margin (top, right, bottom, left)

## Setup

Import the [CovalentChartsModule] using the forRoot() method in your NgModule:

```typescript
import { CovalentChartsModule } from '@covalent/charts';
@NgModule({
  imports: [
    CovalentChartsModule.forRoot(),
    ...
  ],
  ...
})
export class MyModule {}
```

## Usage

Example for HTML usage:

 ```html
<td-charts title="Sales Bar/Line Combo Chart"
          [margin]="{top: 50, bottom: 50}"
          chartHeight="450"
          [shadow]="true"
          [shadowDepth]="['125%', 2, 0, 2]"
          shadowColor="rgba(0, 0, 0, 0.54)"
          fillOpacity="0.95">
  <td-axis-x [link]="chartLine1" [ticks]="true" [show]="true" [grid]="false" legend="Day Offset"></td-axis-x>
  <td-axis-y-left [link]="chartLine1" [ticks]="true" [show]="true" [grid]="false" legend="Sales"></td-axis-y-left>
  <td-axis-y-right [link]="chartBar1" [ticks]="true" [show]="true" [grid]="true" legend="Sales 2"></td-axis-y-right>
  <td-chart-bar #chartBar1 [colors]="['amber', 'orange']"
                dataSrc="platform/charts/chart-line/datatime.csv"
                [padding]="0.1"
                bottomAxis="date"
                columns="close"
                titles="close"
                [transition]="true"
                transitionDuration="2050"
                transitionDelay="5000">
  </td-chart-bar>
  <td-chart-line #chartLine1 dataSrc="platform/charts/chart-line/datatime.csv"
                timeSeries="true"
                bottomAxis="date"
                [columns]="['close']"
                [titles]="['close']"
                [colors]="['#03a9f4']"
                [transition]="true"
                transitionDuration="2000"
                transitionDelay="5000">
  </td-chart-line>
</td-charts>
 ```
