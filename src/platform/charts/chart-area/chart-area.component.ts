import {Component, Input, Inject, forwardRef, ElementRef} from '@angular/core';
import { TdChartsComponent } from '../charts.component';
import { ChartComponent, IChartData } from '../abstract-chart.component';

/* tslint:disable-next-line */
let d3: any = require('d3');

export interface IChartData {
  [key: string]: any;
}

@Component({
  selector: 'td-chart-area',
  styleUrls: ['chart-area.component.scss'],
  templateUrl: 'chart-area.component.html',
})
export class TdChartAreaComponent extends ChartComponent {

  private _columns: string;
  private _colors: string[] = [];

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
  @Input() transitionDuration: number;
  @Input() transitionDelay: number;
  @Input('columns')
  set columns(columns: string) {
    this._columns = columns;
  }

  @Input('colors')
  set colors(colors: string[]) {
    this._colors = colors;
  }

  constructor(@Inject(forwardRef(() => TdChartsComponent)) _parent: TdChartsComponent,
              private _elementRef: ElementRef) {
    super(_parent);
  }

  renderChart(data: any): void {
    let x: any = d3.scaleLinear().range([0, this._width]);
    let y: any = d3.scaleLinear().range([this._height, 0]);

    let area: any = d3.area()
      .x((d: any) => { return x(d[this.bottomAxis]); })
      .y0(this._height)
      .y1((d: any) => { return y(d[this._columns]); })
      .curve(d3.curveCardinal);

    let valueline: any = d3.line()
        .x((d: any) => { return x(d[this.bottomAxis]); })
        .y((d: any) => { return y(d[this._columns]); });

    let containerDiv: any = (this._elementRef.nativeElement);

    let defsId: string = this._parentObj.drawContainer(containerDiv, 'areachart');

    let svg: any = d3.select(containerDiv).selectAll('.areachartG');

    if (d3.select('#rectClip rect').size() === 0) {
      svg.append('clipPath')
      .attr('id', 'rectClip')
      .append('rect')
        .attr('width', 0)
        .attr('height', this._height);
    }

    data.forEach((d: any) => {
        d[this.bottomAxis] = d[this.bottomAxis];
        d[this._columns] = +d[this._columns];
    });

    x.domain([
      d3.min(data, (d: any) => { return d[this.bottomAxis]; }),
      d3.max(data, (d: any) => { return d[this.bottomAxis]; }),
    ]);
    y.domain([0, d3.max(data, (d: any) => { return d[this._columns]; })]);

    this._parentObj.drawGridsAndTicks(svg, x, y);

    if (this.transition === true) {
      d3.select('#rectClip rect')
      .transition().duration(this.transitionDuration)
      .delay(this.transitionDelay)
      .attr('width', this._width);
    } else {
      d3.select('#rectClip rect')
      .attr('width', this._width);
    }

    svg.append('g')
      .classed('chart-area', true);

    d3.select(containerDiv).selectAll('.chart-area')
      .append('path')
      .data([data])
      .attr('class', 'area')
      .attr('fill', this._colors[0])
      .attr('stroke', this._colors[1])
      .attr('d', area)
      .attr('clip-path', 'url(#rectClip)')
      .style('filter', 'url(#' + defsId + ')');

    d3.select(containerDiv).selectAll('.chart-area')
      .append('path')
      .data([data])
      .attr('class', 'line')
      .attr('d', valueline)
      .attr('clip-path', 'url(#rectClip)')
      .style('filter', 'url(#' + defsId + ')');

    super.configureChart(svg);
  }
}
