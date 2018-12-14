# td-chart-tooltip

`td-chart-tooltip` element generates a global tooltip for the echarts visualization inside a `td-chart`. Its the equivalent of creating a JS tooltip object in echarts.

## API Summary

#### Inputs

+ config?: any
  + Sets the JS config object if you choose to not use the property inputs.
  + Note: [config] input properties will override input values

There are also lots of property inputs like:

+ formatter?: string | Function
  + The content formatter of tooltip's floating layer which supports string template and callback function.
+ trigger?: 'item' | 'axis' | 'none'
  + Type of triggering.

And so many more.. for more info [click here](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip)


# td-chart-series-tooltip

`td-chart-series-tooltip` element generates a series tooltip for the echarts visualization inside a `td-chart-series`. Its the equivalent of creating a JS tooltip series object in echarts.

## API Summary

#### Inputs

+ config?: any
  + Sets the JS config object if you choose to not use the property inputs.
  + Note: [config] input properties will override input values

There are also lots of property inputs like:

+ formatter?: string | Function
  + The content formatter of tooltip's floating layer which supports string template and callback function.
+ trigger?: 'item' | 'axis' | 'none'
  + Type of triggering.
  
And so many more.. for more info [click here](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.tooltip)

Note: every series object can contain its own tooltip

## Setup

Import the [CovalentTooltipEchartsModule] in your NgModule:

```typescript
import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CovalentTooltipEchartsModule } from '@covalent/echarts/tooltip';
@NgModule({
  imports: [
    CovalentBaseEchartsModule,
    CovalentTooltipEchartsModule,
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
  <td-chart-tooltip [trigger]="'item'"
                    [triggerOn]="'mousemove'">
    <ng-template let-params let-i="index" let-ticket="ticket" tdTooltipFormatter>
      <ng-container *ngIf="params">
        <div layout="row" layout-align="start center">
          <mat-icon [style.color]="params.color">person</mat-icon>
          <span class="mat-caption pad-left-sm">
            {{params.seriesName + ': ' + params.value}}
          </span>
        </div>
      </ng-container>
    </ng-template>
  </td-chart-tooltip>
</td-chart>
```

## Usage

Basic Series Tooltip Example (only works if tooltip.trigger is 'item'):

```html
<td-chart>
  <td-chart-tooltip [trigger]="'item'">
  </td-chart-tooltip>
  <td-chart-series td-bar
                    [name]="'name'"
                    [data]="[100,200,150,200]">
    <td-chart-series-tooltip [trigger]="'item'"
                      [triggerOn]="'mousemove'">
      <ng-template let-params let-i="index" let-ticket="ticket" tdTooltipFormatter>
        <ng-container *ngIf="params">
          <div layout="row" layout-align="start center">
            <mat-icon [style.color]="params.color">person</mat-icon>
            <span class="mat-caption pad-left-sm">
              {{params.seriesName + ': ' + params.value}}
            </span>
          </div>
        </ng-container>
      </ng-template>
    </td-chart-series-tooltip>
  </td-chart-series>
</td-chart>
```
