import {
  Component,
  Input,
  ChangeDetectionStrategy,
  forwardRef,
  OnChanges,
  inject,
} from '@angular/core';

import {
  assignDefined,
  ITdEdgeLabel,
  ITdEmphasis,
  ITdItemStyle,
  ITdLabel,
  ITdLineStyle,
  ITdMarkArea,
  ITdMarkLine,
  ITdMarkPoint,
  ITdSeries,
  TdChartOptionsService,
  TdCoordinateSystem,
  TdMarkPointSymbol,
  TdSeriesDirective,
} from '@covalent/echarts/base';
import * as ecStat from 'echarts-stat';

export interface ITdClusteringSeries extends ITdSeries {
  clusterCount: number;
  showCentroids: boolean;
  animation?: boolean;
  animationDelay?: number | Function;
  animationDelayUpdate?: number | Function;
  animationDuration?: number | Function;
  animationDurationUpdate?: number | Function;
  animationEasing?: string;
  animationEasingUpdate?: string;
  animationThreshold?: number;
  bottom?: string | number;
  calendarIndex?: number;
  circular?: object;
  coordinateSystem?: TdCoordinateSystem;
  cursor?: string;
  edgeLabel?: ITdEdgeLabel;
  edges?: any[];
  edgeSymbol?: any[] | string;
  edgeSymbolSize?: number;
  emphasis?: ITdEmphasis;
  focusNodeAdjacency?: boolean;
  geoIndex?: number;
  height?: string | number;
  hoverAnimation?: boolean;
  itemStyle?: ITdItemStyle;
  label?: ITdLabel;
  left?: string | number;
  legendHoverLink?: boolean;
  lineStyle?: ITdLineStyle;
  links?: any[];
  markArea?: ITdMarkArea;
  markLine?: ITdMarkLine;
  markPoint?: ITdMarkPoint;
  nodes?: any[];
  nodeScaleRatio?: boolean;
  polarIndex?: number;
  right?: string | number;
  silent?: boolean;
  symbol?: TdMarkPointSymbol | string;
  symbolKeepAspect?: boolean;
  symbolOffset?: any[];
  symbolRotate?: number;
  symbolSize?: number | any[] | Function;
  top?: string | number;
  width?: string | number;
  xAxisIndex?: number;
  yAxisIndex?: number;
  z?: number;
  zlevel?: number;
}

@Component({
  selector: 'td-chart-series[td-clustering]',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  inputs: [
    'config',
    'id',
    'name',
    'color',
    'data',

    'animation',
    'animationThreshold',
    'animationDuration',
    'animationEasing',
    'animationDelay',
    'animationDurationUpdate',
    'animationEasingUpdate',
    'animationDelayUpdate',
    'tooltip',
  ],
  providers: [
    {
      provide: TdSeriesDirective,
      useExisting: forwardRef(() => TdChartSeriesClusteringComponent),
    },
  ],
})
export class TdChartSeriesClusteringComponent
  extends TdSeriesDirective
  implements ITdClusteringSeries, OnChanges
{
  @Input() clusterCount!: number;
  @Input() showCentroids!: boolean;
  @Input() bottom?: string | number;
  @Input() calendarIndex?: number;
  @Input() circular?: object;
  @Input() coordinateSystem?: TdCoordinateSystem;
  @Input() cursor?: string;
  @Input() edgeLabel?: ITdEdgeLabel;
  @Input() edges?: any[];
  @Input() edgeSymbol?: any[] | string;
  @Input() edgeSymbolSize?: number;
  @Input() emphasis?: ITdEmphasis;
  @Input() focusNodeAdjacency?: boolean;
  @Input() geoIndex?: number;
  @Input() height?: string | number;
  @Input() hoverAnimation?: boolean;
  @Input() itemStyle?: ITdItemStyle;
  @Input() label?: ITdLabel;
  @Input() left?: string | number;
  @Input() legendHoverLink?: boolean;
  @Input() lineStyle?: ITdLineStyle;
  @Input() links?: any[];
  @Input() markArea?: ITdMarkArea;
  @Input() markLine?: ITdMarkLine;
  @Input() markPoint?: ITdMarkPoint;
  @Input() nodes?: any[];
  @Input() nodeScaleRatio?: boolean;
  @Input() polarIndex?: number;
  @Input() right?: string | number;
  @Input() silent?: boolean;
  @Input() symbol?: TdMarkPointSymbol | string;
  @Input() symbolKeepAspect?: boolean;
  @Input() symbolOffset?: any[];
  @Input() symbolRotate?: number;
  @Input() symbolSize?: number | any[] | Function;
  @Input() top?: string | number;
  @Input() width?: string | number;
  @Input() xAxisIndex?: number;
  @Input() yAxisIndex?: number;
  @Input() z?: number;
  @Input() zlevel?: number;
  originalData: any;

  constructor() {
    const _optionsService = inject(TdChartOptionsService);

    super('scatter', _optionsService);
  }

  override ngOnChanges(): void {
    if (this.originalData) {
      this.data = this.originalData;
    } else {
      this.originalData = this.data;
    }
    const output: any = this.data;
    const result = ecStat.clustering.hierarchicalKMeans(
      output,
      this.clusterCount,
      false,
    );
    const series = [];

    for (let i = 0; i < result.centroids.length; i++) {
      series.push({
        name: `cluster ${i + 1}`,
        type: 'scatter',
        data: result.pointsInCluster[i],
        markPoint: this.showCentroids
          ? {
              symbolSize: 30,
              itemStyle: {
                normal: {
                  opacity: 0.8,
                },
              },
              data: [
                {
                  coord: result.centroids[i],
                  label: { show: false },
                  name: `centroid ${i + 1}`,
                  value: result.centroids[i],
                },
              ],
            }
          : {},
      });
    }
    this.optionsService.setOption('series', series);
    this.data = [];
    this.setOptions();
  }

  override getConfig(): any {
    return {
      clusterCount: this.clusterCount,
      showCentroids: this.showCentroids,
      bottom: this.bottom,
      calendarIndex: this.calendarIndex,
      circular: this.circular,
      coordinateSystem: this.coordinateSystem,
      cursor: this.cursor,
      edgeLabel: this.edgeLabel,
      edges: this.edges,
      edgeSymbol: this.edgeSymbol,
      edgeSymbolSize: this.edgeSymbolSize,
      emphasis: this.emphasis,
      focusNodeAdjacency: this.focusNodeAdjacency,
      geoIndex: this.geoIndex,
      height: this.height,
      hoverAnimation: this.hoverAnimation,
      itemStyle: this.itemStyle,
      label: this.label,
      left: this.left,
      legendHoverLink: this.legendHoverLink,
      lineStyle: this.lineStyle,
      links: this.links,
      markArea: this.markArea,
      markLine: this.markLine,
      markPoint: this.markPoint,
      nodes: this.nodes,
      nodeScaleRatio: this.nodeScaleRatio,
      polarIndex: this.polarIndex,
      right: this.right,
      silent: this.silent,
      symbol: this.symbol,
      symbolKeepAspect: this.symbolKeepAspect,
      symbolOffset: this.symbolOffset,
      symbolRotate: this.symbolRotate,
      symbolSize: this.symbolSize,
      top: this.top,
      width: this.width,
      xAxisIndex: this.xAxisIndex,
      yAxisIndex: this.yAxisIndex,
      z: this.z,
      zlevel: this.zlevel,
    };
  }

  private setOptions(): void {
    const config: any = assignDefined(
      this._state,
      {
        id: this.id,
        type: this.type,
        name: this.name,
        color: this.color,
        data: this.data,
        animation: this.animation,
        animationThreshold: this.animationThreshold,
        animationDuration: this.animationDuration,
        animationEasing: this.animationEasing,
        animationDelay: this.animationDelay,
        animationDurationUpdate: this.animationDurationUpdate,
        animationEasingUpdate: this.animationEasingUpdate,
        animationDelayUpdate: this.animationDelayUpdate,
        tooltip: this.tooltip,
      },
      this.getConfig(),
      this._options,
      this.config ? this.config : {},
    );
    this.optionsService.setArrayOption('scatter', config);
  }
}
