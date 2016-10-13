import { OnInit } from '@angular/core';
import { TdChartsComponent } from './charts.component';

/* tslint:disable-next-line */ 
let d3: any = require('d3');

export interface IChartData {
  [key: string]: any;
}

export abstract class ChartComponent implements OnInit {

  protected _initialized: boolean = false;

  protected _dataSrc: string = '';
  protected _data: IChartData[];
  protected _x: any;
  protected _y: any;

  constructor(protected _parent: TdChartsComponent) {}

  ngOnInit(): void {
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

  setX(x: any): void {
    this._x = x;
  }
  getX(): any {
    return this._x;
  }

  setY(y: any): void {
    this._y = y;
  }
  getY(): any {
    return this._y;
  }

  refresh(): void {
    this.drawChart();
  }

  protected drawChart(): void {
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

}
