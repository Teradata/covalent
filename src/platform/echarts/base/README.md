# td-chart

`td-chart` element is the base component that instantiates an echarts object to facilitate its usage.

## API Summary

#### Inputs

+ config?: any
  + Sets the JS config object if you choose to not use the property inputs.
  + Note: property inputs override JS config conject properties.
+ themeName?: string
  + theme to be applied into chart instance
+ renderer?: 'svg' | 'canvas'
  + sets the rendering mode for the chart.
  + defaults to 'canvas'
+ group?: string
  + group name in which the chart instance will be connected to


#### Outputs

+ chartClick
  + event thrown when a chart element has been clicked.
+ chartDblclick
  + event thrown when a chart element has been double clicked.
+ chartContextmenu
  + event thrown when a chart element has been right-clicked.


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

```html
<td-chart [style.height.px]="300"
          [config]="{...}"
          [themeName]="'light'"
          [renderer]="'canvas'"
          [group]="'group1'"
          (chartClick)="doSomething()"
          (chartDblclick)="doSomething()"
          (chartContextmenu)="doSomething()">
</td-chart>
```
