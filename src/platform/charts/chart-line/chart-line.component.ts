import { Component, Input, Inject, forwardRef } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { TdChartsComponent } from '../charts.component';
import { ChartComponent, IChartData } from '../abstract-chart.component';

/* tslint:disable-next-line */
let d3: any = require('d3');

@Component({
  selector: 'td-chart-line',
  styleUrls: ['chart-line.component.scss'],
  templateUrl: 'chart-line.component.html',
})
export class TdChartLineComponent extends ChartComponent {

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
  @Input() columns: string[];
  @Input() colors: string[] = ['#304FFE', '#00B8D4', '#FF3D00'];
  @Input() titles: string[];
  @Input() timeSeries: boolean = false;

  constructor(@Inject(forwardRef(() => TdChartsComponent)) parent: TdChartsComponent,
              private _platformLocation: PlatformLocation) {
    super(parent);
  }

  renderChart(data: any): void {
    let t: any = d3.transition()
            .duration(this.transitionDuration)
            .delay(this.transitionDelay)
            .ease(d3.easeLinear);

    let parseTime: any = d3.timeParse('%d-%b-%y');
    let stringCol: any = function(record: any, bottomAxis: string): string { return record[bottomAxis]; };
    let dateCol: any = function(record: any, bottomAxis: string): Date { return parseTime(record[bottomAxis]); };

    let row: Function = this.timeSeries ? dateCol : stringCol;
    let xScale: Function = this.timeSeries ? d3.scaleTime : d3.scaleLinear;
    let offset: number = this._parent.offset(data);

    let x: any = xScale().range([offset / 2, this._parent.width - (offset / 2)]);
    let y: any = d3.scaleLinear().range([this._parent.height, 0]);
    this._x = x;
    this._y = y;

    let color: any = d3.scaleOrdinal(this.colors);

    let drawLine: any = d3.line()
      .x((d: any) => { return x(d.xValue); })
      .y((d: any) => { return y(d.yValue); });

    let lines: any[] = this.columns.map((id: any) => {
      return {
        id: id,
        values: data.map((d: any) => {
          return {xValue: row(d, this.bottomAxis), yValue: +d[id]};
        }),
      };
    });

    x.domain(d3.extent(data, (d: any) => { return row(d, this.bottomAxis); }));

    y.domain([
      d3.min(lines, (c: any) => { return d3.min(c.values, (d: any) => { return d.yValue; }); }),
      d3.max(lines, (c: any) => { return d3.max(c.values, (d: any) => { return d.yValue; }); }),
    ]);

    let defsId: string = this._parent.drawContainer();

    let svg: any = d3.select(this._parent.container).selectAll('.chartG');

    let line: any = svg.append('g')
      .classed('chart-lines', true)
      .selectAll('.lineTitle')
      .data(lines)
      .enter();

    let transitionFlag: boolean = this.transition;

    line.append('path')
      .attr('class', 'line')
      .merge(line)
      .attr('d', (d: any) => { return drawLine(d.values); })
      .style('stroke', (d: any) => { return color(d.id); })
      .attr('stroke-dasharray', function(d: any): number {
        if (transitionFlag === true) {
          return this.getTotalLength();
        }
      })
      .attr('stroke-dashoffset', function(d: any): number {
        if (transitionFlag === true) {
          return this.getTotalLength();
        }
      })
      .style('filter', 'url(' + this._platformLocation.pathname + '#' + defsId + ')');

    if (this.transition === true) {
      svg.selectAll('.line').transition(t)
          .attr('stroke-dashoffset', 0);
    }

    line.append('text')
      .datum((d: any) => { return {id: d.id, value: d.values[d.values.length - 1]}; })
      .attr('transform', (d: any) => {
        if (!d.value) {
          return undefined;
        } else {
          return 'translate(' + x(d.value.xValue) + ',' + y(d.value.yValue) + ')';
        }
      })
      .attr('x', 3)
      .attr('dy', '0.35em')
      .style('font', '10px sans-serif')
      .text((d: any, i: number) => { return this.titles[i]; });
  }
}
