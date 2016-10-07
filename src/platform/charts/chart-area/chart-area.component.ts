import {Component, Input, AfterViewInit, Inject, forwardRef, ViewChild, ElementRef} from '@angular/core';
import { TdChartsComponent } from '../charts.component';

declare let d3: any;

@Component({
  selector: 'td-chart-area',
  styleUrls: ['chart-area.component.scss'],
  templateUrl: 'chart-area.component.html',
})

export class TdChartAreaComponent implements AfterViewInit {

  private _margin: any = {top: 50, right: 150, bottom: 50, left: 50};
  private _width: number;
  private _height: number;
  private _padding: number;
  private _columns: string;
  private _tickHeightSize: number = 0;
  private _tickWidthSize: number = 0;
  private _grid: string = '';
  private _parentObj: any;
  private _chartTitle: string;
  private _shadowColor: string;
  private _leftAxisTitle: string;
  private _sort: boolean;
  private _colors: string[] = [];
  private _contentType: string;

  @ViewChild('areachart') content: ElementRef;
  @Input('') dataSrc: string = '';
  @Input('') bottomAxis: string = '';
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

  constructor(@Inject(forwardRef(() => TdChartsComponent)) private _parent: TdChartsComponent) {
    this._parentObj = _parent;
  }

  ngAfterViewInit(): void {
    this.drawChart();
  }

  drawChart(): void {
    this._margin.top = 50;
    this._width = 960 - this._margin.left - this._margin.right;
    this._height = 500 - this._margin.top - this._margin.bottom;
    this._padding = 100;

    if (this._parentObj.chartTitle) {
      this._chartTitle = this._parentObj.chartTitle;
    }

    if (this._parentObj.leftAxisTitle) {
      this._leftAxisTitle = this._parentObj.leftAxisTitle;
    }

    let x: any = d3.scaleBand().range([0, this._width]).padding(0.1);
    let y: any = d3.scaleLinear().range([this._height, 0]);

    let area: any = d3.area()
      .x((d: any) => { return x(d[this.bottomAxis]); })
      .y0(this._height)
      .y1((d: any) => { return y(d[this._columns]); })
      .curve(d3.curveCardinal);

    let valueline: any = d3.line()
        .x((d: any) => { return x(d[this.bottomAxis]); })
        .y((d: any) => { return y(d[this._columns]); });

    let containerDiv: any = (this.content.nativeElement);

    this._parentObj.drawContainer(containerDiv, 'areachart');

    let svg: any = d3.select(containerDiv).selectAll('.areachartG');

    this._contentType = this.dataSrc.substr(this.dataSrc.lastIndexOf('.') + 1);

    if (d3.select('#rectClip rect').size() === 0) {
      svg.append('clipPath')
      .attr('id', 'rectClip')
      .append('rect')
        .attr('width', 0)
        .attr('height', this._height);
    }

    enum ParseContent {
      json = d3.json,
      csv = d3.csv,
      tsv = d3.tsv
    }

    ParseContent[this._contentType](this.dataSrc, (error: string, data: any) => {
      if (error) {
        throw error;
      }

      data.forEach((d: any) => {
          d[this.bottomAxis] = d[this.bottomAxis];
          d[this._columns] = +d[this._columns];
      });

      x.domain(data.map((d: any) => { return d[this.bottomAxis]; }));
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
       .style('filter', 'url(#drop-shadow)');

      d3.select(containerDiv).selectAll('.chart-area')
       .append('path')
       .data([data])
       .attr('class', 'line')
       .attr('d', valueline)
       .attr('clip-path', 'url(#rectClip)')
       .style('filter', 'url(#drop-shadow)');

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
    });
  }
}
