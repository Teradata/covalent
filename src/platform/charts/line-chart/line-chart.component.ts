import {Component, Input, AfterViewInit, ViewChild, ElementRef} from '@angular/core';

declare var d3: any;

@Component({
  moduleId: module.id,
  selector: 'td-line-chart',
  styleUrls: ['line-chart.component.css'],
  templateUrl: 'line-chart.component.html',
})
export class TdLineChartComponent implements AfterViewInit {

  private _margin = {top: 50, right: 150, bottom: 50, left: 50};
  private _width: number;
  private _height: number;
  private _padding: number;

  @ViewChild('linechart') content: ElementRef;

  /**
   * filePath?: string.
   */
  @Input('filePath') filePath: string = '';

  /**
   * contentType?: string.
   * Content Type of the Chart
   */
  @Input('contentType') contentType: string = '';

  /**
   * xName?: string.
   */
  @Input('xName') xName: string = '';

  /**
   ** xName?: string.
   */
  @Input('yName') yName: string = '';

  /**
   * title?: string.
   * Title of the Chart
   */
  @Input('title') title: string = '';

  ngAfterViewInit(): void {
    this.render();
  }

  render(): void {
    this._margin.top = 50;
    this._width = 960 - this._margin.left - this._margin.right;
    this._height = 500 - this._margin.top - this._margin.bottom;
    this._padding = 100;

    var x = d3.scaleLinear()
      .range([0, this._width]);

    var y = d3.scaleLinear()
      .range([this._height, 0]);

    var line = d3.line()
      .x((d) => {
        return x(d[this.xName]);
      })
      .y((d) => {
        return y(d[this.yName]);
      });

    let viewBoxWidth = this._width + this._margin.left + this._margin.right;
    let viewBoxHeight = this._height + this._margin.top + this._margin.bottom;

    var svg = d3.select('#linechart')
      .classed("svg-container", true)
      .append("svg")
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox", "0 0 " + viewBoxWidth + " " + (viewBoxHeight))
      .classed("svg-content-responsive", true)
      .append("g")
      .attr("transform", "translate(" + this._padding + "," + this._margin.top + ")");

    enum ParseContent {
      json = d3.json,
      csv = d3.csv,
      tsv = d3.tsv
    }

    ParseContent[this.contentType](this.filePath, (error, data) => {
      if (error) throw error;

      x.domain(d3.extent(data, (d) => {
        return d[this.xName];
      }));
      y.domain(d3.extent(data, (d) => {
        return d[this.yName];
      }));

      svg.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + this._height + ")")
        .call(d3.axisBottom(x));

      svg.append("g")
        .attr("class", "axis axis--y")
        .call(d3.axisLeft(y));

      svg.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", line);

      svg.append("text")
        .attr("text-anchor", "middle")
        .attr("transform", "translate(" + (0 - this._padding / 2 - this._margin.left / 2) + "," + (this._height / 2) + ")")
        .text(this.yName);

      svg.append("text")
        .attr("text-anchor", "middle")
        .attr("transform", "translate(" + (this._width / 2) + "," + (this._height + (this._padding / 2)) + ")")
        .text(this.xName);

      svg.append("text")
        .attr("text-anchor", "middle")
        .attr("transform", "translate(" + (this._width / 2) + "," + (0 - (this._margin.top / 2)) + ")")
        .text(this.title)
        .attr("class", "title");

    });
  }
}
