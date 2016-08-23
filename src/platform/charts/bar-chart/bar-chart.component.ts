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
  private _barColumns: string;
  private _barColors: string[] = [];
  private _zDepthConfig: any[] = [];

  /*
  * Choose _mdBarColorPalette in case no barColors are provided by user for generating color palette
  */
  private _mdBarColorPalette: any[] = ['#fce4ec', '#f8bbd0', '#f48fb1', '#f06292', '#ec407a', '#e91e63', '#d81b60', '#c2185b', '#7b1fa2',
    '#6a1b9a', '#4a148c', '#4527a0', '#311b92', '#1a237e'];

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

  @Input('barColumns')
  set barColumns(barColumns: string) {
    this._barColumns = barColumns;
  }

  /**
   * barColors?: string[].
   * Two colors for generating color palette for the Chart
   */
  @Input('barColors')
  set barColors(barColors: string[]) {
    this._barColors = barColors;
  }

  @Input('zDepthConfig')
  set zDepthConfig(zDepthConfig: any[]) {
    this._zDepthConfig = zDepthConfig;
  }

  ngAfterViewInit(): void {
    this.render();
  }

  render(): void {
    this._margin.top = 50;
    this._width = 960 - this._margin.left - this._margin.right;
    this._height = 500 - this._margin.top - this._margin.bottom;
    this._padding = 100;

    let fillBarColors = this._barColors.length === 0 ? this._mdBarColorPalette : d3.scaleOrdinal(this._barColors);

    // set the ranges
    var x = d3.scaleBand().range([0, this._width]).padding(0.1);
    var y = d3.scaleLinear().range([this._height, 0]);

    let viewBoxWidth = this._width + this._margin.left + this._margin.right;
    let viewBoxHeight = this._height + this._margin.top + this._margin.bottom;

    var svg = d3.select('.barchart')
      .classed("svg-container", true)
      .append("svg")
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox", "0 0 " + viewBoxWidth + " " + (viewBoxHeight))
      .classed("svg-content-responsive", true)
      .append("g")
      .attr("transform", "translate(" + this._padding + "," + this._margin.top + ")");

    var defs = svg.append("defs");

    var filter = defs.append("filter")
      .attr("id", "drop-shadow")
      .attr("height", this._zDepthConfig[0]);

    filter.append("feGaussianBlur")
      .attr("in", "SourceAlpha")
      .attr("stdDeviation", this._zDepthConfig[1])
      .attr("result", "blur");

    filter.append("feOffset")
      .attr("in", "blur")
      .attr("dx", this._zDepthConfig[2])
      .attr("dy", this._zDepthConfig[3])
      .attr("result", "offsetBlur");

    // feFlood flood-color is the drop-shadow color
    filter.append('feFlood')
      .attr('flood-color', 'rgba(0, 0, 0, 0.54)');
    
    // this is needed to apply the feFlood
    filter.append('feComposite')
      .attr('in2', 'offsetBlur')
      .attr('operator', 'in');

    // overlay original SourceGraphic over translated blurred opacity by using
    // feMerge filter. Order of specifying inputs is important!
    var feMerge = filter.append("feMerge");

    // NOTE: we need the empty feMergeNode to apply the feComposite & feFlood
    feMerge.append("feMergeNode")
    feMerge.append("feMergeNode")
      .attr("in", "SourceGraphic");

    // feComponentTransfer linear slope adjusts the opacity of the ENTIRE SVG 
    var feComponentTransfer = filter.append("feComponentTransfer");
    feComponentTransfer.append("feFuncA")
      .attr("type", "linear")
      .attr("slope", "0.9");

    enum ParseContent {
      json = d3.json,
      csv = d3.csv,
      tsv = d3.tsv
    }

    ParseContent[this.contentType](this.dataSrc, (error, data) => {
      if (error) throw error;

      data.forEach((d) => {
        d[this._barColumns] = +d[this._barColumns];
      });

      x.domain(data.map((d) => { return d[this.bottomAxis]; }));
      y.domain([0, d3.max(data, (d) => { return d[this._barColumns]; })]);


      svg.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", (d) => { return x(d[this.bottomAxis]); })
        .attr("width", x.bandwidth())
        .attr("y", (d) => { return y(d[this._barColumns]); })
        .attr("height", (d) => { return this._height - y(d[this._barColumns]); })
        .attr("fill", (d, i) => { let color = (typeof fillBarColors === 'object' ? fillBarColors[i] : fillBarColors(i)); return color; })
        .style("filter", "url(#drop-shadow)");

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
