import { Component, Input, Inject, forwardRef } from '@angular/core';
import { TdChartsComponent } from '../charts.component';
import { ChartComponent, IChartData } from '../abstract-chart.component';

/* tslint:disable-next-line */
let d3: any = require('d3');

@Component({
  selector: 'td-chart-bar',
  styleUrls: ['chart-bar.component.scss'],
  templateUrl: 'chart-bar.component.html',
})
export class TdChartBarComponent extends ChartComponent {

  private _colorPalette: string[] = [];

  private _mdBarColorPalette: any[] = ['#F8BBD0', '#f48fb1', '#ec407a', '#e91e63', '#d81b60',
  '#c2185b', '#9C27B0', '#6A1B9A', '#4A148C', '#311B92', '#512DA8', '#673AB7', '#9575CD', '#B39DDB'];

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
  @Input() colors: string[];
  @Input() padding: number = 0;

  constructor(@Inject(forwardRef(() => TdChartsComponent)) parent: TdChartsComponent) {
    super(parent);
  }

  renderChart(data: any): void {
    let palette: string[] = this._parent.generatePalette(this.colors[0], this.colors[1]);
    this._colorPalette = palette ? palette : this._mdBarColorPalette;

    let x: any = d3.scaleBand().range([0, this._parent.width]).padding(this.padding);
    let y: any = d3.scaleLinear().range([this._parent.height, 0]);
    this._x = x;
    this._y = y;

    let defsId: string = this._parent.drawContainer();

    let svg: any = d3.select(this._parent.container).selectAll('.chartG');

    data.forEach((d: any) => {
      d[this.columns] = +d[this.columns];
    });

    x.domain(data.map((d: any) => { return d[this.bottomAxis]; }));
    y.domain([0, d3.max(data, (d: any) => { return d[this.columns]; })]);

    svg.append('g')
      .classed('chart-bars', true)
      .selectAll('.bar')
      .data(data)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', (d: any) => { return x(d[this.bottomAxis]); })
      .attr('width', x.bandwidth())
      .attr('y', (d: any) => { return y(d[this.columns]); })
      .attr('height', (d: number) => { return this._parent.height - y(d[this.columns]); })
      .attr('fill', (d: any, i: number) => {
        if (this.transition === false) {
          return this._colorPalette[Math.floor(i / (data.length / this._colorPalette.length))];
        } else {
          return '#fff';
        }
      })
      .style('filter', 'url(#' + defsId + ')');

    if (this.transition === true) {
      this._transtion(svg, data, x, y);
    }
  }

  private _transtion(chartSvg: any, data: any, x: any, y: any): void {
    let transition: any = chartSvg.transition().duration(this.transitionDuration);
    let delay: any = (d: number, i: number) => { return i * this.transitionDelay; };

    transition.selectAll('.bar')
      .delay(delay)
      .attr('x', (d: any) => { return x(d[this.bottomAxis]); })
      .attr('fill', (d: any, i: number) => {
        return this._colorPalette[Math.floor(i / (data.length / this._colorPalette.length))];
      });

    transition.select('.x.axis')
        .call(d3.axisBottom(x))
      .selectAll('g')
        .delay(delay);
  }

}
