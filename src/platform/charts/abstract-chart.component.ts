import { OnInit } from '@angular/core';
import { TdChartsComponent } from './charts.component';

/* tslint:disable-next-line */ 
let d3: any = require('d3');

export interface IChartData {
  [key: string]: any;
}

export abstract class ChartComponent implements OnInit {

  protected _margin: any = {top: 50, right: 150, bottom: 50, left: 50};
  protected _width: number;
  protected _height: number;
  protected _padding: number;
  protected _initialized: boolean = false;

  protected _parentObj: TdChartsComponent;
  protected _chartTitle: string;
  protected _leftAxisTitle: string;
  protected _bottomAxisTitle: string;
  protected _dataSrc: string = '';
  protected _data: IChartData[];

  constructor(parent: TdChartsComponent) {
    this._parentObj = parent;
  }

  ngOnInit(): void {
    this._chartTitle = this._parentObj.chartTitle;
    this._leftAxisTitle = this._parentObj.leftAxisTitle;
    this._bottomAxisTitle = this._parentObj.bottomAxisTitle;
    this._initialized = true;
    this.drawChart();
  }

  setData(data: IChartData[]): void {
    this._data = data;
    if (this._initialized) {
      this.drawChart();
    }
  }

  setDataSrc(dataSrc: string): void {
    this._dataSrc = dataSrc;
    if (this._initialized) {
      this.drawChart();
    }
  }

  refresh(): void {
    this.drawChart();
  }

  protected drawChart(): void {
    this._margin.top = 50;
    this._width = 960 - this._margin.left - this._margin.right;
    this._height = this._parentObj.chartHeight - this._margin.top - this._margin.bottom;
    this._padding = 100;
    console.log(this._data);
    if (this._data) {
      this.renderChart(this._data);
    } else if (this._dataSrc) {
      enum ParseContent {
        json = d3.json,
        csv = d3.csv,
        tsv = d3.tsv
      }
      let contentType: string = this._dataSrc.substr(this._dataSrc.lastIndexOf('.') + 1);
      ParseContent[contentType](this._dataSrc, (error: string, data: any) => {
        if (error) { throw error; }
        this.renderChart(data);
      });
    } else {
      throw '[data] or [dataSrc] must be defined in [TdChartLineComponent]';
    }
  }

  protected abstract renderChart(data: any): void;

  protected configureChart(svg: any): void {
    svg.append('text')
      .attr('text-anchor', 'middle')
      .attr('transform', 'translate(' + (this._width / 2) + ',' + (0 - (this._margin.top / 2)) + ')')
      .text(this._chartTitle)
      .attr('class', 'md-title');

    svg.append('text')
      .attr('y', -15)
      .classed('axisTitle', true)
      .attr('dy', '0.71em')
      .attr('fill', '#000')
      .text(this._leftAxisTitle);

    svg.append('text')
      .classed('axisTitle', true)
      .attr('transform', 'translate(' + (this._width / 2 - 20) + ',' + (this._height + 40) + ')')
      .text(this._bottomAxisTitle);
  }

}
