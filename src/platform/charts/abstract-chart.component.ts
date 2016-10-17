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

  get x(): any {
    return this._x;
  }

  get y(): any {
    return this._y;
  }

  constructor(protected _parent: TdChartsComponent) {
    this._parent.chartTotal++;
  }

  ngOnInit(): void {
    this._initialized = true;
    this.drawChart();
  }

  refresh(): void {
    this.drawChart();
  }

  protected setData(data: IChartData[]): void {
    this._data = data;
    if (this._initialized) {
      this.drawChart();
    }
  }
  protected setDataSrc(dataSrc: string): void {
    this._dataSrc = dataSrc;
    if (this._initialized) {
      this.drawChart();
    }
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
