import {Component, Input, AfterViewInit, ViewChild, ElementRef, Inject, forwardRef} from '@angular/core';
import { TdChartsComponent } from '../charts.component';

declare let d3: any;

@Component({
  moduleId: module.id,
  selector: 'td-chart-line',
  styleUrls: ['chart-line.component.css'],
  templateUrl: 'chart-line.component.html',
})

export class TdChartLineComponent implements AfterViewInit {

  private _margin: any = {top: 50, right: 150, bottom: 50, left: 50};
  private _width: number;
  private _height: number;
  private _padding: number;
  private _columns: string[] = [];
  private _titles: string[] = [];
  private _colors: string[] = [];

  private _shadowDepth: any[] = [];
  private _tickHeightSize: number = 0;
  private _tickWidthSize: number = 0;
  private _grid: string = '';
  private _colorPalette: string[] = [];
  private _parentObj: any;
  private _chartTitle: string;
  private _shadowColor: string;
  private _fillOpacity: number = 0;
  private _leftAxisTitle: string;

  @ViewChild('linechart') content: ElementRef;
  @Input() dataSrc: string = '';
  @Input() contentType: string = '';
  @Input() bottomAxis: string = '';
  @Input('columns')
  set columns(columns: string[]) {
    this._columns = columns;
  }

  @Input('titles')
  set titles(titles: string[]) {
    this._titles = titles;
  }

  @Input('colors')
  set colors(colors: string[]) {
    this._colors = colors;
  }

  constructor(@Inject(forwardRef(() => TdChartsComponent)) private _parent: TdChartsComponent) {
    this._parentObj = _parent;
  }

  ngAfterViewInit(): void {
    this.render();
  }

  render(): void {
    this._margin.top = 50;
    this._width = 960 - this._margin.left - this._margin.right;
    this._height = 500 - this._margin.top - this._margin.bottom;
    this._padding = 100;

    if (this._parentObj.chartTitle) {
      this._chartTitle = this._parentObj.chartTitle;
    }

    if (this._parentObj.colorPalette) {
      this._colorPalette = this._parentObj.colorPalette;
    }

    if (this._parentObj.ticks === true) {
      this._tickHeightSize = -this._height;
      this._tickWidthSize = -this._width;
    }

    if (this._parentObj.grid === true) {
      this._grid = 'grid';
    }

    if (this._parentObj.shadowDepth) {
      this._shadowDepth =  this._parentObj.shadowDepth;
    }

    if (this._parentObj.shadowColor) {
      this._shadowColor = this._parentObj.shadowColor;
    }

    if (this._parentObj.fillOpacity) {
      this._fillOpacity = this._parentObj.fillOpacity;
    }

    if (this._parentObj.leftAxisTitle) {
      this._leftAxisTitle = this._parentObj.leftAxisTitle;
    }

    let x: any = d3.scaleLinear().range([0, this._width]);
    let y: any = d3.scaleLinear().range([this._height, 0]);
    let color: any = d3.scaleOrdinal(this._colors);

    let drawLine: any = d3.line()
      .curve(d3.curveBasis)
      .x((d: any) => { return x(d.xValue); })
      .y((d: any) => { return y(d.yValue); });

    let containerDiv: any = (this.content.nativeElement);

    this._parentObj.drawContainer(containerDiv, 'linechart');

    let svg: any = d3.select(containerDiv).selectAll('.linechartG');

    enum ParseContent {
      json = d3.json,
      csv = d3.csv,
      tsv = d3.tsv
    }

    ParseContent[this.contentType](this.dataSrc, (error: string, data: any) => {
      if (error) {
        throw error;
      }

      let lines: Object = this._columns.map((id: any) => {
        return {
          id: id,
          values: data.map((d: any) => {
            return {xValue: d[this.bottomAxis], yValue: d[id]};
          }),
        };
      });

      x.domain(d3.extent(data, (d: any) => { return d[this.bottomAxis]; }));

      y.domain([
        d3.min(lines, (c: any) => { return d3.min(c.values, (d: any) => { return d.yValue; }); }),
        d3.max(lines, (c: any) => { return d3.max(c.values, (d: any) => { return d.yValue; }); }),
      ]);

      this._parentObj.drawGridsAndTicks(svg, x, y, this._leftAxisTitle);

      let line: any = svg.append('g')
        .classed('chart-lines', true)
        .selectAll('.lineTitle')
        .data(lines)
        .enter().append('g')
        .attr('class', 'lineTitle');

      line.append('path')
        .attr('class', 'line')
        .attr('d', (d: any) => { return drawLine(d.values); })
        .style('stroke', (d: any) => { return color(d.id); })
        .style('filter', 'url(#drop-shadow)');

      line.append('text')
        .datum((d: any) => { return {id: d.id, value: d.values[d.values.length - 1]}; })
        .attr('transform', (d: any) => { return 'translate(' + x(d.value.xValue) + ',' + y(d.value.yValue) + ')'; })
        .attr('x', 3)
        .attr('dy', '0.35em')
        .style('font', '10px sans-serif')
        .text((d: any, i: number) => { return this._titles[i]; });

      svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('transform', 'translate(' + (this._width / 2) + ',' + (0 - (this._margin.top / 2)) + ')')
        .text(this._chartTitle)
        .attr('class', 'md-title');

    });
  }
}
