import { Component, Input, Inject, forwardRef } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { TdChartsComponent } from '../charts.component';
import { ChartComponent, IChartData } from '../abstract-chart.component';

/* tslint:disable-next-line */
let d3: any = require('d3');

@Component({
  selector: 'td-chart-area',
  styleUrls: ['chart-area.component.scss'],
  templateUrl: 'chart-area.component.html',
})
export class TdChartAreaComponent extends ChartComponent {

  @Input()
  set dataSrc(dataSrc: string) {
    super.setDataSrc(dataSrc);
  }
  @Input()
  set data(data: IChartData[]) {
    super.setData(data);
  }
  @Input() bottomAxis: string = '';
  @Input() transition: boolean = true;
  @Input() transitionDuration: number = 0;
  @Input() transitionDelay: number = 0;
  @Input() columns: string;
  @Input() colors: string[] = ['#03a9f4', '#0277bd'];

  constructor(@Inject(forwardRef(() => TdChartsComponent)) parent: TdChartsComponent,
              private _platformLocation: PlatformLocation) {
    super(parent);
  }

  renderChart(data: any): void {
    let offset: number = this._parent.offset(data);

    let x: any = d3.scaleLinear().range([offset / 2, this._parent.width - (offset / 2)]);
    let y: any = d3.scaleLinear().range([this._parent.height, 0]);
    this._x = x;
    this._y = y;

    let area: any = d3.area()
      .x((d: any) => { return x(d[this.bottomAxis]); })
      .y0(this._parent.height)
      .y1((d: any) => { return y(d[this.columns]); })
      .curve(d3.curveCardinal);

    let valueline: any = d3.line()
        .x((d: any) => { return x(d[this.bottomAxis]); })
        .y((d: any) => { return y(d[this.columns]); });

    data.forEach((d: any) => {
        d[this.bottomAxis] = d[this.bottomAxis];
        d[this.columns] = +d[this.columns];
    });

    x.domain([
      d3.min(data, (d: any) => { return d[this.bottomAxis]; }),
      d3.max(data, (d: any) => { return d[this.bottomAxis]; }),
    ]);
    y.domain([0, d3.max(data, (d: any) => { return d[this.columns]; })]);

    let defsId: string = this._parent.drawContainer();

    let svg: any = d3.select(this._parent.container).selectAll('.chartG');

    if (d3.select('#rectClip rect').size() === 0) {
      svg.append('clipPath')
      .attr('id', 'rectClip')
      .append('rect')
        .attr('width', 0)
        .attr('height', this._parent.height);
    }

    if (this.transition === true) {
      d3.select('#rectClip rect')
      .transition().duration(this.transitionDuration)
      .delay(this.transitionDelay)
      .attr('width', this._parent.width);
    } else {
      d3.select('#rectClip rect')
      .attr('width', this._parent.width);
    }

    svg.append('g')
      .classed('chart-area', true);

    d3.select(this._parent.container).selectAll('.chart-area')
      .append('path')
      .data([data])
      .attr('class', 'area')
      .attr('fill', this.colors[0])
      .attr('stroke', this.colors[1])
      .attr('d', area)
      .attr('clip-path', 'url(' + this._platformLocation.pathname + '#rectClip)')
      .style('filter', 'url(' + this._platformLocation.pathname + '#' + defsId + ')');

    d3.select(this._parent.container).selectAll('.chart-area')
      .append('path')
      .data([data])
      .attr('class', 'line')
      .attr('d', valueline)
      .attr('clip-path', 'url(' + this._platformLocation.pathname + '#rectClip)')
      .style('filter', 'url(' + this._platformLocation.pathname + '#' + defsId + ')');
  }
}
