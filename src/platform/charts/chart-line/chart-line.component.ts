import {Component, Input, Inject, forwardRef} from '@angular/core';
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
  @Input() transitionDuration: number;
  @Input() transitionDelay: number;
  @Input() timeSeries: boolean = false;
  @Input() columns: string[];
  @Input() titles: string[];
  @Input() colors: string[];

  constructor(@Inject(forwardRef(() => TdChartsComponent)) _parent: TdChartsComponent) {
    super(_parent);
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

    let x: any = xScale().range([0, this._width]);
    let y: any = d3.scaleLinear().range([this._height, 0]);
    let color: any = d3.scaleOrdinal(this.colors);

    let drawLine: any = d3.line()
      .curve(d3.curveBasis)
      .x((d: any) => { return x(d.xValue); })
      .y((d: any) => { return y(d.yValue); });

    let defsId: string = this._parentObj.drawContainer();

    let svg: any = d3.select(this._parentObj.container).selectAll('.chartG');

    let lines: Object = this.columns.map((id: any) => {
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

    this._parentObj.drawGridsAndTicks(svg, x, y);

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
      .style('filter', 'url(#' + defsId + ')');

    if (this.transition === true) {
      svg.selectAll('.line').transition(t)
          .attr('stroke-dashoffset', 0);
    }

    line.append('text')
      .datum((d: any) => { return {id: d.id, value: d.values[d.values.length - 1]}; })
      .attr('transform', (d: any) => { return 'translate(' + x(d.value.xValue) + ',' + y(d.value.yValue) + ')'; })
      .attr('x', 3)
      .attr('dy', '0.35em')
      .style('font', '10px sans-serif')
      .text((d: any, i: number) => { return this.titles[i]; });

    super.configureChart(svg);
  }
}
