import { Component, Input, Inject, forwardRef } from '@angular/core';
import { PlatformLocation } from '@angular/common';
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

  constructor(@Inject(forwardRef(() => TdChartsComponent)) parent: TdChartsComponent,
              private _platformLocation: PlatformLocation) {
    super(parent);
  }

  renderChart(data: any): void {
    let palette: string[] = this._parent.generatePalette(this.colors[0], this.colors[1]);
    this._colorPalette = palette ? palette : this._mdBarColorPalette;

    let x: any = d3.scaleBand().range([0, this._parent.width]).padding(this.padding);
    let y: any = d3.scaleLinear().range([this._parent.height, 0]);
    this._x = x;
    this._y = y;

    data.forEach((d: any) => {
      d[this.columns] = +d[this.columns];
    });

    x.domain(data.map((d: any) => { return d[this.bottomAxis]; }));
    y.domain([0, d3.max(data, (d: any) => { return d[this.columns]; })]);

    let defsId: string = this._parent.drawContainer();

    let svg: any = d3.select(this._parent.container).selectAll('.chartG');

    let bar: any = svg.append('g')
      .classed('chart-bars', true)
      .selectAll('.bar')
      .data(data);

    bar
      .enter().append('rect')
      .attr('class', 'bar')
      .merge(bar)
      .attr('width', x.bandwidth())
      .attr('height', 0)
      .attr('fill', (d: any, i: number) => {
        return this._colorPalette[Math.floor(i / (data.length / this._colorPalette.length))];
      })
      .attr('transform', (d: any) => { return 'translate(' + [x(d[this.bottomAxis]), this._parent.height] + ')'; })
      .style('filter', 'url(' + this._platformLocation.pathname + '#' + defsId + ')');

    if (this.transition === true) {
      this._transtion(svg, x, y);
    }
  }

  private _transtion(chartSvg: any, x: any, y: any): void {

    let t: any = d3.transition()
      .delay(this.transitionDelay)
      .duration(this.transitionDuration)
      .ease(d3.easeLinear);

    chartSvg.selectAll('.bar').transition(t)
      .attr('height', (d: any) => { return this._parent.height - y(d[this.columns]); })
      .attr('transform', (d: any) => { return 'translate(' + [x(d[this.bottomAxis]), y(d[this.columns])] + ')'; });
  }

}
