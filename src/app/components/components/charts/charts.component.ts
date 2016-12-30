import { Component, HostBinding } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'charts-demo',
  styleUrls: ['./charts.component.scss'],
  templateUrl: './charts.component.html',
  animations: [slideInDownAnimation],
})
export class ChartsDemoComponent {
  @HostBinding('@routeAnimation') routeAnimation: boolean = true;

  chartsAttr: Object[] = [{
    description: 'Sets the Chart Title',
    name: 'title?',
    type: 'string',
  }, {
    description: 'Sets the height of the chart',
    name: 'chartHeight?',
    type: 'string',
  }, {
    description: 'Flag to enable shadows in chart',
    name: 'shadow?',
    type: 'boolean',
  }, {
    description: 'Set the parameters for shadowDepth (size, y offset, x offset, blur)',
    name: 'shadowDepth?',
    type: 'array[]',
  }, {
    description: 'Sets shadow color for the charts (rgba preferred)',
    name: 'shadowColor?',
    type: 'string',
  }, {
    description: 'Sets opacity for the charts',
    name: 'fillOpacity?',
    type: 'number',
  }, {
    description: 'Sets SVG margin (top, right, bottom, left)',
    name: 'margin?',
    type: 'IChartMargin',
  }];

  barChartAttrs: Object[] = [{
    description: 'Sets data source for the Bar Chart',
    name: 'dataSrc?',
    type: 'string',
  }, {
    description: 'Sets data for the Bar Chart. Overrides [dataSrc]',
    name: 'data?',
    type: 'any',
  }, {
    description: 'Sets the name for bottom axis; should match with the column name defined in data source',
    name: 'bottomAxis?',
    type: 'string',
  }, {
    description: 'Sets the name for left axis; should match with the bar column name defined in data source',
    name: 'columns?',
    type: 'string',
  }, {
    description: 'Select two material design color palettes (red, pink, blue, etc) and will blend between for you',
    name: 'colors?',
    type: 'any[]',
  }, {
    description: 'Sets the flag as true or false for transitions',
    name: 'transition?',
    type: 'boolean',
  }, {
    description: 'Sets the duration for transition',
    name: 'transitionDuration?',
    type: 'number',
  }, {
    description: 'Sets the delay time before transition starts',
    name: 'transitionDelay?',
    type: 'number',
  }, {
    description: 'Sets spacing between bars',
    name: 'padding?',
    type: 'number',
  }];

  lineChartAttrs: Object[] = [{
    description: 'Sets data source for the Line Chart',
    name: 'dataSrc?',
    type: 'string',
  }, {
    description: 'Sets data for the Line Chart. Overrides [dataSrc]',
    name: 'data?',
    type: 'any',
  }, {
    description: 'Sets flag as true or false for time series data',
    name: 'timeSeries?',
    type: 'boolean',
  }, {
    description: 'Sets the name for bottom axis; should match with the column name defined in data source',
    name: 'bottomAxis?',
    type: 'string',
  }, {
    description: 'Sets the name for single/multi lines; should match with the columns names defined in data source',
    name: 'columns?',
    type: 'array[]',
  }, {
    description: 'Sets the title for single/multi lines',
    name: 'titles?',
    type: 'array[]',
  }, {
    description: 'Sets the rgba or hex color for single/multi lines',
    name: 'colors?',
    type: 'string',
  }, {
    description: 'Sets the flag as true or false for transitions',
    name: 'transition?',
    type: 'boolean',
  }, {
    description: 'Sets the duration for transition',
    name: 'transitionDuration?',
    type: 'number',
  }, {
    description: 'Sets the delay time before transition starts',
    name: 'transitionDelay?',
    type: 'number',
  }];

  areaChartAttrs: Object[] = [{
    description: 'Sets data source for the Bar Chart',
    name: 'dataSrc?',
    type: 'string',
  }, {
    description: 'Sets data for the Line Chart. Overrides [dataSrc]',
    name: 'data?',
    type: 'any',
  }, {
    description: 'Sets the name for bottom axis; should match with the column name defined in data source',
    name: 'bottomAxis?',
    type: 'string',
  }, {
    description: 'Sets the name for single/multi lines; should match with the columns names defined in data source',
    name: 'columns?',
    type: 'array[]',
  }, {
    description: 'Sets the rgba or hex color for area chart and stroke',
    name: 'colors?',
    type: 'string',
  }, {
    description: 'Sets the flag as true or false for transitions',
    name: 'transition?',
    type: 'boolean',
  }, {
    description: 'Sets the duration for transition',
    name: 'transitionDuration?',
    type: 'number',
  }, {
    description: 'Sets the delay time before transition starts',
    name: 'transitionDelay?',
    type: 'number',
  }];

  axisAttrs: Object[] = [{
    description: 'Reference to the chart',
    name: 'link',
    type: 'Any [td-chart-xxx] element',
  }, {
    description: 'Sets display as true/false for rendering ticks',
    name: 'ticks?',
    type: 'boolean',
  }, {
    description: 'Sets display as true/false for rendering grid lines',
    name: 'grid?',
    type: 'boolean',
  }, {
    description: 'Sets display as true/false for rendering entire axis',
    name: 'show?',
    type: 'boolean',
  }];

  jsonData: any = [
    {'x': 'Jan', 'y': 70},
    {'x': 'Feb', 'y': 190},
    {'x': 'Mar', 'y': 220},
    {'x': 'Apr', 'y': 160},
    {'x': 'May', 'y': 240},
    {'x': 'Jun', 'y': 70},
    {'x': 'Jul', 'y': 190},
    {'x': 'Aug', 'y': 210},
    {'x': 'Sep', 'y': 150},
    {'x': 'Oct', 'y': 170},
    {'x': 'Nov', 'y': 150},
    {'x': 'Dec', 'y': 260}];
}
