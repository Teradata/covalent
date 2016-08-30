import { Component, ViewChild, OnInit } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { TdChartsComponent } from '../../../../platform/charts';
import { TdChartBarComponent } from '../../../../platform/charts/bar-chart';
import { TdChartLineComponent } from '../../../../platform/charts/line-chart';
import { TdHighlightComponent } from '../../../../platform/highlight';

@Component({
  directives: [
    MD_CARD_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    TdChartsComponent,
    TdChartBarComponent,
    TdChartLineComponent,
    TdHighlightComponent,
  ],
  moduleId: module.id,
  selector: 'td-charts',
  styleUrls: ['charts.component.css'],
  templateUrl: 'charts.component.html',
})

export class ChartsDemoComponent implements OnInit {

  @ViewChild(TdChartsComponent) tdChartsComponent: TdChartsComponent;

  colorPalette: any[];
  ticksFlag: boolean = true;
  gridFlag: boolean = true;
  paletteErrorMsg: string = '';

  chartsAttr: Object[] = [{
    description: 'Sets value as true/false for redering ticks',
    name: 'ticksFlag?',
    type: 'boolean',
  }, {
    description: 'Sets value as true/false for redering grid',
    name: 'gridFlag?',
    type: 'boolean',
  }, {
    description: 'Sets value as true/false for redering grid',
    name: 'colorPalette?',
    type: 'any[]',
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
    description: 'Sets the title for bottom axis',
    name: 'bottomAxisTitle?',
    type: 'string',
  }, {
    description: 'Sets the title for left axis',
    name: 'leftAxisTitle?',
    type: 'string',
  }, {
    description: 'Sets the name for left axis; should match with the bar column name defined in data source',
    name: 'barColumns?',
    type: 'string',
  }, {
    description: 'Set the parameters for zDepthConfig',
    name: 'zDepthConfig?',
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
    description: 'Sets the Chart Title.',
    name: 'chartTitle?',
    type: 'string',
  }, {
    description: 'Gets value based on ticksFlag from td-charts',
    name: 'ticks?',
    type: 'boolean',
  }, {
    description: 'Gets value based on gridFlag from td-charts',
    name: 'grid?',
    type: 'boolean',
  }, {
    description: 'Gets value based on colorPalette from td-charts',
    name: 'palette?',
    type: 'any[]',
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
    description: 'Sets the title for bottom axis',
    name: 'bottomAxisTitle?',
    type: 'string',
  }, {
    description: 'Sets the title for left axis',
    name: 'leftAxisTitle?',
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
    name: 'lineColors?',
    type: 'string',
  }, {
    description: 'Sets the Chart Title.',
    name: 'chartTitle?',
    type: 'string',
  }];

  /**
   * Generate Color Palette based on user input colors
   */
  ngOnInit(): void {
    let paletteObj: {} = this.tdChartsComponent.generatePalette('cyan', 'indigo');
    for (let key in paletteObj) {
      if (key === 'error') {
        this.paletteErrorMsg = paletteObj[key];
      } else {
        this.colorPalette = paletteObj[key];
      }
    }
  }

}
