import {Component, Input, AfterViewInit, ViewChild, ElementRef} from '@angular/core';

declare var d3: any;

@Component({
  moduleId: module.id,
  selector: 'td-bar-chart',
  styleUrls: ['bar-chart.component.css'],
  templateUrl: 'bar-chart.component.html',
})

export class TdBarChartComponent implements AfterViewInit {

  private _margin = {top: 50, right: 150, bottom: 50, left: 50};
  private _width: number;
  private _height: number;
  private _padding: number;
  private _lineColumns: string;
  private _lineTitles: string;
  private _lineColors: string[] = [];

  @ViewChild('barchart') content: ElementRef;

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
  set lineColumns(lineColumns: string) {
    this._lineColumns = lineColumns;
  }

  @Input('lineTitles')
  set lineTitles(lineTitles: string) {
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

    let color = this._lineColors.length === 0 ? d3.schemePaired : d3.scaleOrdinal(this._lineColors);

    // set the ranges
    var x = d3.scaleBand().range([0, this._width]).padding(0.1);
    var y = d3.scaleLinear().range([this._height, 0]);

    let viewBoxWidth = this._width + this._margin.left + this._margin.right;
    let viewBoxHeight = this._height + this._margin.top + this._margin.bottom;

    var svg = d3.select('#barchart')
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

      data.forEach((d) => {
        d[this._lineColumns] = +d[this._lineColumns];
      });

      x.domain(data.map((d) => { return d[this.bottomAxis]; }));
      y.domain([0, d3.max(data, (d) => { return d[this._lineColumns]; })]);


      svg.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", (d) => { return x(d[this.bottomAxis]); })
        .attr("width", x.bandwidth())
        .attr("y", (d) => { return y(d[this._lineColumns]); })
        .attr("height", (d) => { return this._height - y(d[this._lineColumns]); })
        .attr("fill", (d, i) => { if(i > 11) { i = (i - 11);} {}let abc = (typeof color === 'object' ? color[i] : color(i)); return abc;});

      svg.append("g")
        .attr("transform", "translate(0," + this._height + ")")
        .call(d3.axisBottom(x));

      svg.append("g")
        .call(d3.axisLeft(y))
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("fill", "#000")
        .text(this.leftAxisTitle);

      svg.append("text")
        .attr("text-anchor", "middle")
        .attr("transform", "translate(" + (this._width / 2) + "," + (0 - (this._margin.top / 2)) + ")")
        .text(this.chartTitle)
        .attr("class", "md-title");

    });
  }
}
