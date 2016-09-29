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
  private _columns: string;
  private _colorPalette: string[] = [];
  private _parentObj: any;
  private _chartTitle: string;
  private _shadowColor: string;
  private _leftAxisTitle: string;
  private _sort: boolean;

  private _mdBarColorPalette: any[] = ['#F8BBD0', '#f48fb1', '#ec407a', '#e91e63', '#d81b60',
  '#c2185b', '#9C27B0', '#6A1B9A', '#4A148C', '#311B92', '#512DA8', '#673AB7', '#9575CD', '#B39DDB'];

  @ViewChild('barchart') content: ElementRef;
  @Input('') dataSrc: string = '';
  @Input('') contentType: string = '';
  @Input('') bottomAxis: string = '';
  @Input('') colors: string[];
  @Input('columns')
  set columns(columns: string) {
    this._columns = columns;
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

    if (this._parentObj.sort) {
      this._sort = this._parentObj.sort;
    }

    if (this._parentObj.shadowColor) {
      this._shadowColor = this._parentObj.shadowColor;
    }

    if (this._parentObj.leftAxisTitle) {
      this._leftAxisTitle = this._parentObj.leftAxisTitle;
    }

    let paletteObj: {} = this._parentObj.generatePalette(this.colors[0], this.colors[1]);

    for (let key in paletteObj) {
      if (key === 'color') {
        this._colorPalette = paletteObj[key];
      }
    }

    let x: any = d3.scaleBand().range([0, this._width]).padding(0.1);
    let y: any = d3.scaleLinear().range([this._height, 0]);
    let containerDiv: any = (this.content.nativeElement);

    this._parentObj.drawContainer(containerDiv, 'barchart');

    let svg: any = d3.select(containerDiv).selectAll('.barchartG');

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
        d[this._columns] = +d[this._columns];
      });

      x.domain(data.map((d: any) => { return d[this.bottomAxis]; }));
      y.domain([0, d3.max(data, (d: any) => { return d[this._columns]; })]);

      this._parentObj.drawGridsAndTicks(svg, x, y, this._leftAxisTitle);

      svg.append('g')
        .classed('chart-bars', true)
        .selectAll('.bar')
        .data(data)
        .enter().append('rect')
        .attr('class', 'bar')
        .attr('x', (d: any) => { return x(d[this.bottomAxis]); })
        .attr('width', x.bandwidth())
        .attr('y', (d: any) => { return y(d[this._columns]); })
        .attr('height', (d: number) => { return this._height - y(d[this._columns]); })
        .attr('fill', (d: any, i: number) => {
          if (this._sort === false) {
            let fillBarColors: any = this._colorPalette.length === 0 ? this._mdBarColorPalette : this._colorPalette;
            let color: string = (typeof fillBarColors === 'object' ? fillBarColors[i] : fillBarColors(i)); return color;
          } else {
            return '#fff';
          }
        })
        .style('filter', 'url(#drop-shadow)');

      if (this._sort === true) {
        this.sortAndTransition(svg, data, x, y);
      }

      svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('transform', 'translate(' + (this._width / 2) + ',' + (0 - (this._margin.top / 2)) + ')')
        .text(this._chartTitle)
        .attr('class', 'md-title');

    });
  }

  sortAndTransition(chartSvg: any, data: any, x: any, y: any): void {

    let fillBarColors: any = this._colorPalette.length === 0 ? this._mdBarColorPalette : this._colorPalette;
    let x0: any = x.domain(data.sort((a: any, b: any) => { return b[this._columns] - a[this._columns]; })
        .map((d: number) => { return d[this.bottomAxis]; }))
        .copy();

    chartSvg.selectAll('.bar')
        .sort((a: any, b: any) => { return x0(a[this.bottomAxis]) - x0(b[this.bottomAxis]); });

    let transition: any = chartSvg.transition().duration(750);
    let delay: any = (d: number, i: number) => { return i * 50; };

    transition.selectAll('.bar')
        .delay(delay)
        .attr('x', (d: any) => { return x0(d[this.bottomAxis]); })
        .attr('fill', (d: any, i: number) => {
        let color: string = (typeof fillBarColors === 'object' ? fillBarColors[i] : fillBarColors(i));
        return color;
      });

    transition.select('.x.axis')
        .call(d3.axisBottom(x))
      .selectAll('g')
        .delay(delay);
  }

}
