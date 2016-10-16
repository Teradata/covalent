import { Component, Input, OnInit, ElementRef, Inject, forwardRef, ContentChild } from '@angular/core';
import { ChartComponent } from './abstract-chart.component';
import { TdChartBarComponent } from './chart-bar/chart-bar.component';
/* tslint:disable-next-line */
let d3: any = require('d3');

export interface IChartMargin {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

@Component({
  selector: 'td-axis-y-left',
  template: '',
})
export class TdYLeftAxisComponent {

  @Input() link: ChartComponent;
  @Input() show: boolean = true;
  @Input() grid: boolean = false;
  @Input() ticks: boolean = false;
  @Input() legend: string;

  constructor(@Inject(forwardRef(() => TdChartsComponent)) private _parent: TdChartsComponent) {
  }

  draw(svg: any): void {
    let y: any = this.link.y;

    svg.append('g')
      .attr('display', this.show && this.grid ? 'display' : 'none')
      .attr('class', 'grid')
      .call(d3.axisLeft(y)
              .tickSize(-this._parent.width)
              .tickFormat(''));

    svg.append('text')
      .attr('display', this.show ? 'display' : 'none')
      .attr('y', -15)
      .classed('axisTitle', true)
      .attr('dy', '0.71em')
      .attr('fill', '#000')
      .text(this.legend);

    let ticks: any = svg.append('g')
      .attr('class', 'ticks ticks-y')
      .attr('display', this.show ? 'display' : 'none')
      .call(d3.axisLeft(y));

    ticks
      .selectAll('.tick line')
      .attr('display',  this.show && this.ticks ? 'display' : 'none');
    ticks
      .selectAll('.tick text')
      .attr('display', this.show && this.ticks ? 'display' : 'none');
  }
}

@Component({
  selector: 'td-axis-y-right',
  template: '',
})
export class TdYRightAxisComponent {

  @Input() link: ChartComponent;
  @Input() show: boolean = true;
  @Input() grid: boolean = false;
  @Input() ticks: boolean = false;
  @Input() legend: string;

  constructor(@Inject(forwardRef(() => TdChartsComponent)) private _parent: TdChartsComponent) {
  }

  draw(svg: any): void {
    let y: any = this.link.y;

    svg.append('g')
      .attr('display', this.show && this.grid ? 'display' : 'none')
      .attr('transform', 'translate(' + this._parent.width + ', 0)')
      .attr('class', 'grid')
      .call(d3.axisRight(y)
              .tickSize(-this._parent.width)
              .tickFormat(''));

    svg.append('text')
      .attr('display', this.show ? 'display' : 'none')
      .attr('y', -15)
      .attr('transform', 'translate(' + this._parent.width + ', 0)')
      .classed('axisTitle', true)
      .attr('dy', '0.71em')
      .attr('fill', '#000')
      .text(this.legend);

    let ticks: any = svg.append('g')
      .attr('class', 'ticks ticks-y')
      .attr('transform', 'translate(' + this._parent.width + ', 0)')
      .attr('display', this.show ? 'display' : 'none')
      .call(d3.axisRight(y));

    ticks
      .selectAll('.tick line')
      .attr('display',  this.show && this.ticks ? 'display' : 'none');
    ticks
      .selectAll('.tick text')
      .attr('display', this.show && this.ticks ? 'display' : 'none');
  }
}

@Component({
  selector: 'td-axis-x',
  template: '',
})
export class TdXAxisComponent {

  @Input() link: ChartComponent;
  @Input() show: boolean = true;
  @Input() grid: boolean = false;
  @Input() ticks: boolean = false;
  @Input() legend: string;

  constructor(@Inject(forwardRef(() => TdChartsComponent)) private _parent: TdChartsComponent) {
  }

  draw(svg: any): void {
    let x: any = this.link.x;

    svg.append('g')
      .attr('display', this.show && this.grid ? 'display' : 'none')
      .attr('class', 'grid')
      .attr('transform', 'translate(0,' + this._parent.height + ')')
      .call(d3.axisBottom(x)
            .tickSize(-this._parent.height)
            .tickFormat('')
      );
    svg.append('text')
      .attr('display', this.show ? 'display' : 'none')
      .classed('axisTitle', true)
      .attr('transform', 'translate(' + (this._parent.width / 2 - 20) + ',' + (this._parent.height + 40) + ')')
      .text(this.legend);

    let ticks: any = svg.append('g')
      .attr('class', 'ticks ticks-x')
      .attr('transform', 'translate(0,' + this._parent.height + ')')
      .attr('display', this.show ? 'display' : 'none')
      .call(d3.axisBottom(x));

    ticks
      .selectAll('.tick line')
      .attr('display',  this.show && this.ticks ? 'display' : 'none');
    ticks
      .selectAll('.tick text')
      .attr('display', this.show && this.ticks ? 'display' : 'none');
  }

}

@Component({
  selector: 'td-charts',
  styleUrls: ['charts.component.scss'],
  templateUrl: 'charts.component.html',
})
export class TdChartsComponent implements OnInit {

  private _paletteMap: Map<string, any[]> = new Map<string, any[]>();

  // Core color palettes.
  private _mdRed: any[] = ['#ffebee', '#ffcdd2', '#ef9a9a', '#e57373', '#ef5350', '#f44336', '#e53935', '#d32f2f',
  '#c62828', '#b71c1c', '#ff8a80', '#ff5252', '#ff1744', '#d50000'];

  private _mdPink: any[] = ['#fce4ec', '#f8bbd0', '#f48fb1', '#f06292', '#ec407a', '#e91e63', '#d81b60', '#c2185b',
  '#ad1457', '#880e4f', '#ff80ab', '#ff4081', '#f50057', '#c51162'];

  private _mdPurple: any[] = ['#f3e5f5', '#e1bee7', '#ce93d8', '#ba68c8', '#ab47bc', '#9c27b0', '#8e24aa', '#7b1fa2',
  '#6a1b9a', '#4a148c', '#ea80fc', '#e040fb', '#d500f9', '#aa00ff'];

  private _mdDeepPurple: any[] = ['#ede7f6', '#d1c4e9', '#b39ddb', '#9575cd', '#7e57c2', '#673ab7', '#5e35b1',
  '#512da8', '#4527a0', '#311b92', '#b388ff', '#7c4dff', '#651fff', '#6200ea'];

  private _mdIndigo: any[] = ['#e8eaf6', '#c5cae9', '#9fa8da', '#7986cb', '#5c6bc0', '#3f51b5', '#3949ab', '#303f9f',
  '#283593', '#1a237e', '#8c9eff', '#536dfe', '#3d5afe', '#304ffe'];

  private _mdBlue: any[] = ['#e3f2fd', '#bbdefb', '#90caf9', '#64b5f6', '#42a5f5', '#2196f3', '#1e88e5', '#1976d2',
  '#1565c0', '#0d47a1', '#82b1ff', '#448aff', '#2979ff', '#2962ff'];

  private _mdLightBlue: any[] = ['#e1f5fe', '#b3e5fc', '#81d4fa', '#4fc3f7', '#29b6f6', '#03a9f4', '#039be5',
  '#0288d1', '#0277bd', '#01579b', '#80d8ff', '#40c4ff', '#00b0ff', '#0091ea'];

  private _mdCyan: any[] = ['#e0f7fa', '#b2ebf2', '#80deea', '#4dd0e1', '#26c6da', '#00bcd4', '#00acc1', '#0097a7',
  '#00838f', '#006064', '#84ffff', '#18ffff', '#00e5ff', '#00b8d4'];

  private _mdTeal: any[] = ['#e0f2f1', '#b2dfdb', '#80cbc4', '#4db6ac', '#26a69a', '#009688', '#00897b', '#00796b',
  '#00695c', '#004d40', '#a7ffeb', '#64ffda', '#1de9b6', '#00bfa5'];

  private _mdGreen: any[] = ['#e8f5e9', '#c8e6c9', '#a5d6a7', '#81c784', '#66bb6a', '#4caf50', '#43a047', '#388e3c',
  '#2e7d32', '#1b5e20', '#b9f6ca', '#69f0ae', '#00e676', '#00c853'];

  private _mdLightGreen: any[] = ['#f1f8e9', '#dcedc8', '#c5e1a5', '#aed581', '#9ccc65', '#8bc34a', '#7cb342',
  '#689f38', '#558b2f', '#33691e', '#ccff90', '#b2ff59', '#76ff03', '#64dd17'];

  private _mdLime: any[] = ['#f9fbe7', '#f0f4c3', '#e6ee9c', '#dce775', '#d4e157', '#cddc39', '#c0ca33', '#afb42b',
  '#9e9d24', '#827717', '#f4ff81', '#eeff41', '#c6ff00', '#aeea00'];

  private _mdYellow: any[] = ['#fffde7', '#fff9c4', '#fff59d', '#fff176', '#ffee58', '#ffeb3b', '#fdd835', '#fbc02d',
  '#f9a825', '#f57f17', '#ffff8d', '#ffff00', '#ffea00', '#ffd600'];

  private _mdAmber: any[] = ['#fff8e1', '#ffecb3', '#ffe082', '#ffd54f', '#ffca28', '#ffc107', '#ffb300', '#ffa000',
  '#ff8f00', '#ff6f00', '#ffe57f', '#ffd740', '#ffc400', '#ffab00'];

  private _mdOrange: any[] = ['#fff3e0', '#ffe0b2', '#ffcc80', '#ffb74d', '#ffa726', '#ff9800', '#fb8c00', '#f57c00',
  '#ef6c00', '#e65100', '#ffd180', '#ffab40', '#ff9100', '#ff6d00'];

  private _mdDeepOrange: any[] = ['#fbe9e7',  '#ffccbc', '#ffab91', '#ff8a65', '#ff7043', '#ff5722', '#f4511e',
  '#e64a19', '#d84315', '#bf360c', '#ff9e80', '#ff6e40', '#ff3d00', '#dd2c00'];

  private _mdBrown: any[] = ['#efebe9', '#d7ccc8', '#bcaaa4', '#a1887f', '#8d6e63', '#795548', '#6d4c41', '#5d4037',
  '#4e342e', '#3e2723', '#d7ccc8', '#bcaaa4', '#8d6e63', '#5d4037'];

  private _mdGrey: any[] = ['#ffffff', '#fafafa', '#f5f5f5', '#eeeeee', '#e0e0e0', '#bdbdbd', '#9e9e9e', '#757575',
  '#616161', '#424242', '#212121', '#000000', '#ffffff', '#eeeeee', '#bdbdbd', '#616161'];

  private _mdBlueGrey: any[] = ['#eceff1', '#cfd8dc', '#b0bec5', '#90a4ae', '#78909c', '#607d8b', '#546e7a',
  '#455a64', '#37474f', '#263238', '#cfd8dc', '#b0bec5', '#78909c', '#455a64'];

  private _margin: IChartMargin = {top: 50, right: 80, bottom: 50, left: 50};
  private _width: number;
  private _height: number;

  @Input()
  set margin(margin: IChartMargin) {
    if (margin.bottom) {
      this._margin.bottom = margin.bottom;
    }
    if (margin.left) {
      this._margin.left = margin.left;
    }
    if (margin.right) {
      this._margin.right = margin.right;
    }
    if (margin.top) {
      this._margin.top = margin.top;
    }
  }
  get margin(): IChartMargin {
    return this._margin;
  }
  get width(): number {
    return this._width;
  }
  get height(): number {
    return this._height;
  }

  container: HTMLElement;
  chartCount: number = 0;
  chartTotal: number = 0;

  @ContentChild(TdXAxisComponent) xAxis: TdXAxisComponent;
  @ContentChild(TdYLeftAxisComponent) leftYAxis: TdYLeftAxisComponent;
  @ContentChild(TdYRightAxisComponent) rightYAxis: TdYRightAxisComponent;
  @ContentChild(TdChartBarComponent)
  set chartBar(chartBar: TdChartBarComponent) {
    if (chartBar) {
      this.offset = (data: any) => {
        return this.width / data.length;
      };
    }
  }

  @Input() title: string = '';
  @Input() fillOpacity: number = 1;
  @Input() shadow: boolean = false;
  @Input() shadowColor: string = 'rgba(0, 0, 0, 0.54)';
  @Input() shadowDepth: any[] = ['125%', 2, 0, 2];
  @Input() chartHeight: number = 450;

  constructor(elementRef: ElementRef) {
    this.container = elementRef.nativeElement;
    this._paletteMap.set('red', this._mdRed);
    this._paletteMap.set('pink', this._mdPink);
    this._paletteMap.set('purple', this._mdPurple);
    this._paletteMap.set('deepPurple', this._mdDeepPurple);
    this._paletteMap.set('indigo', this._mdIndigo);
    this._paletteMap.set('blue', this._mdBlue);
    this._paletteMap.set('lightBlue', this._mdLightBlue);
    this._paletteMap.set('cyan', this._mdCyan);
    this._paletteMap.set('teal', this._mdTeal);
    this._paletteMap.set('green', this._mdGreen);
    this._paletteMap.set('lightGreen', this._mdLightGreen);
    this._paletteMap.set('lime', this._mdLime);
    this._paletteMap.set('yellow', this._mdYellow);
    this._paletteMap.set('amber', this._mdAmber);
    this._paletteMap.set('orange', this._mdOrange);
    this._paletteMap.set('deepOrange', this._mdDeepOrange);
    this._paletteMap.set('brown', this._mdBrown);
    this._paletteMap.set('grey', this._mdGrey);
    this._paletteMap.set('blueGrey', this._mdBlueGrey);
  }

  offset: (data: any) => number = (data: any) => { return 0; };

  ngOnInit(): void {
    this._width = 960 - this._margin.left - this._margin.right;
    this._height = this.chartHeight - this._margin.top - this._margin.bottom;

    let viewBoxWidth: number = this._width + this._margin.left + this._margin.right;
    let viewBoxHeight: number = this._height + this._margin.top + this._margin.bottom;

    d3.select(this.container)
      .classed('svg-container', true)
      .attr('title', '')
      .append('svg')
      .attr('preserveAspectRatio', 'xMinYMin meet')
      .attr('viewBox', '0 0 ' + viewBoxWidth + ' ' + (viewBoxHeight))
      .classed('svg-content-responsive', true)
      .append('g')
      .classed('chartG', true)
      .attr('transform', 'translate(' + this._margin.left + ',' + this._margin.top + ')');
  }

  drawAxis(): void {
    let svg: any = d3.select(this.container)
                     .selectAll('.chartG');
    if (this.leftYAxis) {
      this.leftYAxis.draw(svg);
    }
    if (this.rightYAxis) {
      this.rightYAxis.draw(svg);
    }
    if (this.xAxis) {
      this.xAxis.draw(svg);
    }
  }

  drawContainer(): string {
    this.chartCount++;
    if (this.chartCount === this.chartTotal) {
      this.drawAxis();
    }

    let defs: any = d3.select(this.container)
                        .select('svg')
                        .append('defs');
    let svg: any = d3.select(this.container)
                      .selectAll('.chartG');

    svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('transform', 'translate(' + (this._width / 2) + ',' + (0 - (this._margin.top / 2)) + ')')
        .text(this.title)
        .attr('class', 'md-title');

    let defsStr: string = Math.random().toString().slice(2);

    let defsClass: string = 'drop-shadow' + defsStr;

    let filter: any = defs.append('filter')
                          .attr('id', defsClass);

    filter
      .attr('height', this.shadow ? this.shadowDepth[0] : '125%');

    filter.append('feGaussianBlur')
      .attr('in', 'SourceAlpha')
      .attr('stdDeviation', this.shadow ? this.shadowDepth[1] : 0)
      .attr('result', 'blur');

    filter.append('feOffset')
      .attr('in', 'blur')
      .attr('dx', this.shadow ? this.shadowDepth[2] : 0)
      .attr('dy', this.shadow ? this.shadowDepth[3] : 0)
      .attr('result', 'offsetBlur');

    filter.append('feFlood')
      .attr('flood-color', this.shadowColor);

    filter.append('feComposite')
      .attr('in2', 'offsetBlur')
      .attr('operator', 'in');

    let feMerge: any = filter.append('feMerge');

    feMerge.append('feMergeNode');
    feMerge.append('feMergeNode')
      .attr('in', 'SourceGraphic');

    let feComponentTransfer: any = filter.append('feComponentTransfer');
    feComponentTransfer.append('feFuncA')
      .attr('type', 'linear')
      .attr('slope', this.fillOpacity);

    return defsClass;
  }

  /**
   * Method to generate color Palette.
   */
  generatePalette(firstColor: string, secondColor: string): any {
    if (this._paletteMap.get(firstColor) && this._paletteMap.get(secondColor)) {
      return this._paletteMap.get(firstColor).slice(0, 6)
      .concat(this._paletteMap.get(secondColor).slice(6, 14));
    }
    return undefined;
  }
}
