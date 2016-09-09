import {Component, Input, AfterViewInit, ViewChild, ElementRef, Inject, forwardRef} from '@angular/core';
import { TdChartsComponent } from '../charts.component';

declare let d3: any;

@Component({
  moduleId: module.id,
  selector: 'td-chart-bar',
  styleUrls: ['chart-bar.component.css'],
  templateUrl: 'chart-bar.component.html',
})

export class TdChartBarComponent implements AfterViewInit {

  private _margin: any = {top: 50, right: 150, bottom: 50, left: 50};
  private _width: number;
  private _height: number;
  private _padding: number;
  private _barColumns: string;
  private _zDepthConfig: any[] = [];
  private _tickHeightSize: number = 0;
  private _tickWidthSize: number = 0;
  private _grid: string = '';
  private _colorPalette: string[] = [];
  private _parentObj: any;
  private _chartTitle: string;
  private _shadowColor: string;
  private _fillOpacity: number = 0;
  private _leftAxisTitle: string;

  /*
  * Choose _mdBarColorPalette in case no barColors are provided by user for generating color palette
  */
  private _mdBarColorPalette: any[] = ['#F8BBD0', '#f48fb1', '#ec407a', '#e91e63', '#d81b60',
  '#c2185b', '#9C27B0', '#6A1B9A', '#4A148C', '#311B92', '#512DA8', '#673AB7', '#9575CD', '#B39DDB'];

  @ViewChild('barchart') content: ElementRef;

  /**
   * dataSrc?: string.
   */
  @Input('dataSrc') dataSrc: string = '';

  /**
   * contentType?: string.
   * Content Type of the Chart
   */
  @Input('contentType') contentType: string = '';

  /**
   * bottomAxis?: string.
   */
  @Input('bottomAxis') bottomAxis: string = '';

  @Input('barColumns')
  set barColumns(barColumns: string) {
    this._barColumns = barColumns;
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

    if (this._parentObj.ticks === 'true') {
      this._tickHeightSize = -this._height;
      this._tickWidthSize = -this._width;
    }

    if (this._parentObj.grid === 'true') {
      this._grid = 'grid';
    }

    if (this._parentObj.zDepthConfig) {
      this._zDepthConfig =  this._parentObj.zDepthConfig;
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

    let fillBarColors: any = this._colorPalette.length === 0 ? this._mdBarColorPalette : this._colorPalette;

    // set the ranges
    let x: any = d3.scaleBand().range([0, this._width]).padding(0.1);
    let y: any = d3.scaleLinear().range([this._height, 0]);

    let viewBoxWidth: number = this._width + this._margin.left + this._margin.right;
    let viewBoxHeight: number = this._height + this._margin.top + this._margin.bottom;

    let svg: any = d3.select('.barchart')
      .classed('svg-container', true)
      .append('svg')
      .attr('preserveAspectRatio', 'xMinYMin meet')
      .attr('viewBox', '0 0 ' + viewBoxWidth + ' ' + (viewBoxHeight))
      .classed('svg-content-responsive', true)
      .append('g')
      .attr('transform', 'translate(' + this._padding + ',' + this._margin.top + ')');

    let defs: any = svg.append('defs');

    let filter: any = defs.append('filter')
      .attr('id', 'drop-shadow')
      .attr('height', this._zDepthConfig[0]);

    filter.append('feGaussianBlur')
      .attr('in', 'SourceAlpha')
      .attr('stdDeviation', this._zDepthConfig[1])
      .attr('result', 'blur');

    filter.append('feOffset')
      .attr('in', 'blur')
      .attr('dx', this._zDepthConfig[2])
      .attr('dy', this._zDepthConfig[3])
      .attr('result', 'offsetBlur');

    // feFlood flood-color is the drop-shadow color
    filter.append('feFlood')
      .attr('flood-color', this._shadowColor);

    // this is needed to apply the feFlood
    filter.append('feComposite')
      .attr('in2', 'offsetBlur')
      .attr('operator', 'in');

    // overlay original SourceGraphic over translated blurred opacity by using
    // feMerge filter. Order of specifying inputs is important!
    let feMerge: any = filter.append('feMerge');

    // NOTE: we need the empty feMergeNode to apply the feComposite & feFlood
    feMerge.append('feMergeNode');
    feMerge.append('feMergeNode')
      .attr('in', 'SourceGraphic');

    // feComponentTransfer linear slope adjusts the opacity of the ENTIRE SVG 
    let feComponentTransfer: any = filter.append('feComponentTransfer');
    feComponentTransfer.append('feFuncA')
      .attr('type', 'linear')
      .attr('slope', this._fillOpacity);

    enum ParseContent {
      json = d3.json,
      csv = d3.csv,
      tsv = d3.tsv
    }

    ParseContent[this.contentType](this.dataSrc, (error: string, data: any) => {
      if (error) {
        throw error;
      }

      data.forEach((d: any) => {
        d[this._barColumns] = +d[this._barColumns];
      });

      x.domain(data.map((d: any) => { return d[this.bottomAxis]; }));
      y.domain([0, d3.max(data, (d: any) => { return d[this._barColumns]; })]);


      svg.selectAll('.bar')
        .data(data)
        .enter().append('rect')
        .attr('class', 'bar')
        .attr('x', (d: any) => { return x(d[this.bottomAxis]); })
        .attr('width', x.bandwidth())
        .attr('y', (d: any) => { return y(d[this._barColumns]); })
        .attr('height', (d: number) => { return this._height - y(d[this._barColumns]); })
        .attr('fill', (d: any, i: number) => {
          let color: string = (typeof fillBarColors === 'object' ? fillBarColors[i] : fillBarColors(i)); return color;
        })
        .style('filter', 'url(#drop-shadow)');

      // add the X gridlines
      svg.append('g')
        .attr('class', this._grid)
        .attr('transform', 'translate(0,' + this._height + ')')
        .call(d3.axisBottom(x)
             .tickSize(this._tickHeightSize)
             .tickFormat('')
        );

      // add the Y gridlines
      svg.append('g')
        .attr('class', this._grid)
        .call(d3.axisLeft(y)
             .tickSize(this._tickWidthSize)
             .tickFormat('')
        );

      svg.append('g')
        .attr('class', 'ticks ticks-x')
        .attr('transform', 'translate(0,' + this._height + ')')
        .call(d3.axisBottom(x));

      svg.append('g')
        .attr('class', 'ticks ticks-y')
        .call(d3.axisLeft(y))
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '0.71em')
        .attr('fill', '#000')
        .text(this._leftAxisTitle);

      svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('transform', 'translate(' + (this._width / 2) + ',' + (0 - (this._margin.top / 2)) + ')')
        .text(this._chartTitle)
        .attr('class', 'md-title');

    });
  }
}
