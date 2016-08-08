import { Component, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

declare var d3: any;

@Component({
  moduleId: module.id,
  selector: 'td-line-chart',
  styleUrls: ['line-chart.component.css'],
  templateUrl: 'line-chart.component.html',
})
export class TdLineChartComponent implements AfterViewInit {

  private _margin = {top: 50, right: 50, bottom: 50, left: 50};
  private _width: number;
  private _height: number;
  private _padding: number;

  @ViewChild('linechart') content: ElementRef;

  /**
  * filePath?: string.
  */
  @Input('filePath') filePath: string = '';

  /**
  * xName?: string.
  */
  @Input('xName') xName: string = '';

  /**
  ** xName?: string.
  */
  @Input('yName') yName: string = '';
  
  /**
  * xType?: string.
  */
  @Input('xType') xType: string = '';

  /**
  * yType?: string.
  */
  @Input('yType') yType: string = '';
  
  /**
   * xTitle?: string.
   */
  @Input('xTitle') xTitle: string = '';

  /**
  * xType?: string.
  */
  @Input('yTitle') yTitle: string = '';
  
  /**
  * title?: string.
  * Title of the Chart
  */
  @Input('title') title: string = '';

  /**
  * timeFormat?: string.
  * Format for the time units
  */
  @Input('dateFormat') dateFormat: string = '';

  ngAfterViewInit(): void {
      this.render(this.filePath, this.xName, this.yName, this.dateFormat, this.title);
  }
  
  render(filePath: string, xName: string, yName: string, dateFormat: string, title: string) {
      this._margin.top = 50;
      this._width = 960 - this._margin.left - this._margin.right;
      this._height = 500 - this._margin.top - this._margin.bottom;
      this._padding = 100;
      
      if(dateFormat !== undefined){
          var parseTime = d3.timeParse(dateFormat);
      }

      var x = d3.scaleTime()
          .range([0, this._width]);

      var y = d3.scaleLinear()
          .range([this._height, 0]);

      var line = d3.line()
          .x(function(d) { return x(d.date); })
          .y(function(d) { return y(d.close); });

      var svg = d3.select('#linechart').append("svg")
          .attr("width", this._width + this._margin.left + this._margin.right)
          .attr("height", this._height + this._margin.top + this._margin.bottom)
          .append("g")
          .attr("transform", "translate(" + this._padding + "," + this._margin.top + ")");

      d3.tsv(filePath, type, (error, data) => {
        if (error) throw error;

        x.domain(d3.extent(data, (d) => { return d.date; }));
        y.domain(d3.extent(data, (d) => { return d.close; }));

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
            .attr("transform", "translate("+ (0 - this._padding/2) + "," + (this._height/2)+")")
            .text(yName);

        svg.append("text")
            .attr("text-anchor", "middle")
            .attr("transform", "translate("+ (this._width/2) + "," + (this._height + (this._padding/2))+")")
            .text(xName);

        svg.append("text")
            .attr("text-anchor", "middle")
            .attr("transform", "translate("+ (this._width/2) + "," + (0-(this._margin.top/2)) +")")
            .text(title)
            .attr("class", "title");
      });

      function type(d) {
        d.date = parseTime(d.date);
        d.close = +d.close;
        return d;
      }
    }

}
