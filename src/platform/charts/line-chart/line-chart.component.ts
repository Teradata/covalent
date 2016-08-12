import { Component, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { scaleLinear, scaleTime } from 'd3-scale';

@Component({
  moduleId: module.id,
  selector: 'td-line-chart',
  styleUrls: ['line-chart.component.css'],
  templateUrl: 'line-chart.component.html',
})
export class TdLineChartComponent implements AfterViewInit {

  private _margin = {top: 50, right: 150, bottom: 50, left: 50};
  private _width: number;
  private _height: number;
  private _padding: number;

  @ViewChild('linechart') content: ElementRef;

  /**
  * filePath?: string.
  */
  @Input('filePath') filePath: string = '';

  /**
  * xName?: string.
  */
  @Input('xName') xName: string = '';

  /**
  ** xName?: string.
  */
  @Input('yName') yName: string = '';
  
  /**
  * xType?: string.
  */
  @Input('xType') xType: string = '';

  /**
  * yType?: string.
  */
  @Input('yType') yType: string = '';
  
  /**
   * xTitle?: string.
   */
  @Input('xTitle') xTitle: string = '';

  /**
  * xType?: string.
  */
  @Input('yTitle') yTitle: string = '';
  
  /**
  * title?: string.
  * Title of the Chart
  */
  @Input('title') title: string = '';

  /**
  * timeFormat?: string.
  * Format for the time units
  */
  @Input('dateFormat') dateFormat: string = '';

  ngAfterViewInit(): void {
      this.render(this.filePath, this.xName, this.yName, this.dateFormat, this.title);
  }
  
  render(filePath: string, xName: string, yName: string, dateFormat: string, title: string) {
      /* the following code is commented as it won't load the page. Please uncomment it while testing the import build 
      
      this._margin.top = 50;
      this._width = 960 - this._margin.left - this._margin.right;
      this._height = 500 - this._margin.top - this._margin.bottom;
      this._padding = 100;

      var x = scaleTime()
          .range([0, this._width]);
      */
      
    }

}
