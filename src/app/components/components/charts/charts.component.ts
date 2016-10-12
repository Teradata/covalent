import { Component} from '@angular/core';

@Component({
  selector: 'charts-demo',
  styleUrls: ['charts.component.scss'],
  templateUrl: 'charts.component.html',
})
export class ChartsDemoComponent {

  chartsAttr: Object[] = [{
    description: 'Sets the Chart Title.',
    name: 'chartTitle?',
    type: 'string',
  }, {
    description: 'Sets the title for bottom axis',
    name: 'bottomAxisTitle?',
    type: 'string',
  }, {
    description: 'Sets the title for left axis',
    name: 'leftAxisTitle?',
    type: 'string',
  }, {
    description: 'Set the parameters for shadowDepth',
    name: 'shadowDepth?',
    type: 'array[]',
  }, {
    description: 'Sets shadow color for the bars.',
    name: 'shadowColor?',
    type: 'string',
  }, {
    description: 'Sets opacity for the bars.',
    name: 'fillOpacity?',
    type: 'number',
  }, {
    description: 'Sets value as true/false for redering ticks',
    name: 'ticks?',
    type: 'boolean',
  }, {
    description: 'Sets value as true/false for redering grid',
    name: 'grid?',
    type: 'boolean',
  }];

  barChartAttrs: Object[] = [{
    description: 'Sets data source for the Bar Chart',
    name: 'dataSrc?',
    type: 'string',
  }, {
    description: 'Sets content type of the data source',
    name: 'contentType?',
    type: 'string',
  }, {
    description: 'Sets the name for bottom axis; should match with the column name defined in data source',
    name: 'bottomAxis?',
    type: 'string',
  }, {
    description: 'Sets the name for left axis; should match with the bar column name defined in data source',
    name: 'barColumns?',
    type: 'string',
  }, {
    description: 'Gets value based on colorPalette from td-charts',
    name: 'colors?',
    type: 'any[]',
  }, {
    description: 'Sets the flag as true or false for transitions;',
    name: 'transition?',
    type: 'boolean',
  }, {
    description: 'Sets the duration for transition;',
    name: 'transitionDuration?',
    type: 'number',
  }, {
    description: 'Sets the delay time before transition starts;',
    name: 'transitionDelay?',
    type: 'number',
  }];

  lineChartAttrs: Object[] = [{
    description: 'Sets data source for the Bar Chart',
    name: 'dataSrc?',
    type: 'string',
  }, {
    description: 'Sets content type of the data source',
    name: 'contentType?',
    type: 'string',
  }, {
    description: 'Sets the name for bottom axis; should match with the column name defined in data source',
    name: 'bottomAxis?',
    type: 'string',
  }, {
    description: 'Sets the name for single/multi lines; should match with the columns names defined in data source',
    name: 'lineColumns?',
    type: 'array[]',
  }, {
    description: 'Sets the title for single/multi lines;',
    name: 'lineTitles?',
    type: 'array[]',
  }, {
    description: 'Sets the color for single/multi lines;',
    name: 'colors?',
    type: 'string',
  }, {
    description: 'Sets the flag as true or false for transitions;',
    name: 'transition?',
    type: 'boolean',
  }, {
    description: 'Sets the duration for transition;',
    name: 'transitionDuration?',
    type: 'number',
  }, {
    description: 'Sets the delay time before transition starts;',
    name: 'transitionDelay?',
    type: 'number',
  }];

  areaChartAttrs: Object[] = [{
    description: 'Sets data source for the Bar Chart',
    name: 'dataSrc?',
    type: 'string',
  }, {
    description: 'Sets content type of the data source',
    name: 'contentType?',
    type: 'string',
  }, {
    description: 'Sets the name for bottom axis; should match with the column name defined in data source',
    name: 'bottomAxis?',
    type: 'string',
  }, {
    description: 'Sets the name for single/multi lines; should match with the columns names defined in data source',
    name: 'areaColumns?',
    type: 'array[]',
  }, {
    description: 'Sets the color for area chart and sroke;',
    name: 'colors?',
    type: 'string',
  }, {
    description: 'Sets the flag as true or false for transitions;',
    name: 'transition?',
    type: 'boolean',
  }, {
    description: 'Sets the duration for transition;',
    name: 'transitionDuration?',
    type: 'number',
  }, {
    description: 'Sets the delay time before transition starts;',
    name: 'transitionDelay?',
    type: 'number',
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
