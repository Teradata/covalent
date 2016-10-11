import {Component, Input, AfterViewInit, ViewChild, ElementRef, Inject, forwardRef} from '@angular/core';
import { TdChartsComponent } from '../charts.component';
/* tslint:disable-next-line */ 
let d3: any = require('d3');

@Component({
  selector: 'td-chart-line',
  styleUrls: ['chart-line.component.scss'],
  templateUrl: 'chart-line.component.html',
})

export class TdChartLineComponent implements AfterViewInit {

  private _margin: any = {top: 50, right: 150, bottom: 50, left: 50};
  private _width: number;
  private _height: number;

  private _parentObj: any;
  private _chartTitle: string;
  private _leftAxisTitle: string;
  private _bottomAxisTitle: string;
  private _contentType: string;

  @ViewChild('linechart') content: ElementRef;
  @Input() dataSrc: string = '';
  @Input() bottomAxis: string = '';
  @Input() transition: boolean = true;
  @Input() transitionDuration: number;
  @Input() transitionDelay: number;
  @Input() timeSeries: boolean = false;
  @Input() columns: string[];
  @Input() titles: string[];
  @Input() colors: string[];

  constructor(@Inject(forwardRef(() => TdChartsComponent)) private _parent: TdChartsComponent) {
    this._parentObj = _parent;
  }

  ngAfterViewInit(): void {
    this._chartTitle = this._parentObj.chartTitle;
    this._leftAxisTitle = this._parentObj.leftAxisTitle;
    this._bottomAxisTitle = this._parentObj.bottomAxisTitle;
    this.drawLineChart();
  }

  drawLineChart(): void {
    this._margin.top = 50;
    this._width = 960 - this._margin.left - this._margin.right;
    this._height = this._parentObj.chartHeight - this._margin.top - this._margin.bottom;

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

    let containerDiv: any = (this.content.nativeElement);

    this._parentObj.drawContainer(containerDiv, 'linechart');

    let svg: any = d3.select(containerDiv).selectAll('.linechartG');

    this._contentType = this.dataSrc.substr(this.dataSrc.lastIndexOf('.') + 1);

    enum ParseContent {
      json = d3.json,
      csv = d3.csv,
      tsv = d3.tsv
    }

    ParseContent[this._contentType](this.dataSrc, (error: string, data: any) => {
      if (error) { throw error; }

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
        .data(lines);

      let transitionFlag: boolean = this.transition;

      line.enter().append('path')
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
        .style('filter', 'url(#drop-shadow)');

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
      .attr('transform', 'translate(' + (this._width + 20) + ',' + (this._height + 10) + ')')
      .text(this._bottomAxisTitle);
    });
  }
}
