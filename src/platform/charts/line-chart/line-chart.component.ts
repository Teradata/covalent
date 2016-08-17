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
  private _lineColumns: string[] = [];
  private _lineTitles: string[] = [];
  private _lineColors: string[] = [];

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
   * bottomAxis?: string.
   */
  @Input('bottomAxis') bottomAxis: string = '';

  /**
   * bottomAxisTitle?: string.
   */
  @Input('bottomAxisTitle') bottomAxisTitle: string = '';

  /**
   ** leftAxisTitle?: string.
   */
  @Input('leftAxisTitle') leftAxisTitle: string = '';

  /**
   * chartTitle?: string.
   * Title of the Chart
   */
  @Input('chartTitle') chartTitle: string = '';

  @Input('lineColumns')
  set lineColumns(lineColumns: string[]) {
    this._lineColumns = lineColumns;
  }

  @Input('lineTitles')
  set lineTitles(lineTitles: string[]) {
    this._lineTitles = lineTitles;
  }

  @Input('lineColors')
  set lineColors(lineColors: string[]) {
    this._lineColors = lineColors;
  }

  ngAfterViewInit(): void {
    this.render();
  }

  render(): void {
    this._margin.top = 50;
    this._width = 960 - this._margin.left - this._margin.right;
    this._height = 500 - this._margin.top - this._margin.bottom;
    this._padding = 100;

    var x = d3.scaleLinear().range([0, this._width]);
    var y = d3.scaleLinear().range([this._height, 0]);
    var color = d3.scaleOrdinal(this._lineColors);

    var drawLine = d3.line()
      .curve(d3.curveBasis)
      .x(function(d) { return x(d.xValue); })
      .y(function(d) { return y(d.yValue); });

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

      var lines = this._lineColumns.map((id) => {
        return {
          id: id,
          values: data.map((d) => {
            return {xValue: d[this.bottomAxis], yValue: d[id]};
          })
        };
      });

      x.domain(d3.extent(data, (d) => {
        return d[this.bottomAxis];
      }));
      y.domain(d3.extent(data, (d) => {
        return d[this._lineColumns[0]];
      }));

      x.domain(d3.extent(data, (d) => { return d[this.bottomAxis]; }));

      y.domain([
        d3.min(lines, function(c) { return d3.min(c.values, function(d) { return d.yValue; }); }),
        d3.max(lines, function(c) { return d3.max(c.values, function(d) { return d.yValue; }); })
      ]);

      svg.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + this._height + ")")
        .call(d3.axisBottom(x));

      svg.append("g")
        .attr("class", "axis axis--y")
        .call(d3.axisLeft(y))
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("fill", "#000")
        .text(this.leftAxisTitle);

      var line = svg.selectAll(".lineTitle")
        .data(lines)
        .enter().append("g")
        .attr("class", "lineTitle");

      line.append("path")
        .attr("class", "line")
        .attr("d", function(d) { return drawLine(d.values); })
        .style("stroke", function(d) { return color(d.id); });

      line.append("text")
        .datum(function(d) { return {id: d.id, value: d.values[d.values.length - 1]}; })
        .attr("transform", function(d) { return "translate(" + x(d.value.xValue) + "," + y(d.value.yValue) + ")"; })
        .attr("x", 3)
        .attr("dy", "0.35em")
        .style("font", "10px sans-serif")
        .text((d,i) => { return this._lineTitles[i];});

      svg.append("text")
        .attr("text-anchor", "middle")
        .attr("transform", "translate(" + (this._width / 2) + "," + (0 - (this._margin.top / 2)) + ")")
        .text(this.chartTitle)
        .attr("class", "md-title");

    });
  }
}
