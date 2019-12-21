import { Component, Input, ChangeDetectionStrategy, forwardRef } from '@angular/core';

import {
  TdChartOptionsService,
  ITdLabel,
  ITdItemStyle,
  ITdEmphasis,
  ITdSeries,
  TdSeriesComponent,
  ITdShadow,
  ITdLineCurveStyle,
} from '@covalent/echarts/base';

export type TdSankeyOrient = 'horizontal' | 'vertical';

export type TdSankeyFocusNodeAdjacency = boolean | 'allEdges' | 'outEdges' | 'inEdges';

export interface ITdSankeyEmphasisLineStyle extends ITdShadow {
  color?: any;
  opacity?: number;
  curveness?: number;
}

export interface ITdSankeyEmphasis extends ITdEmphasis {
  lineStyle: ITdSankeyEmphasisLineStyle;
}

export interface ITdSankeySeries extends ITdSeries<'sankey'> {
  zlevel?: number;
  z?: number;
  left?: string | number;
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  width?: string | number;
  height?: string | number;
  nodeWidth?: number;
  nodeGap?: number;
  layoutIterations?: number;
  orient?: TdSankeyOrient;
  draggable?: boolean;
  focusNodeAdjacency?: TdSankeyFocusNodeAdjacency;
  label?: ITdLabel;
  itemStyle?: ITdItemStyle;
  lineStyle?: ITdLineCurveStyle;
  emphasis?: ITdEmphasis;
  data?: any[];
  nodes?: any[];
  links?: any[];
  edges?: any[];
  silent?: boolean;
}

@Component({
  selector: 'td-chart-series[td-sankey]',
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
      provide: TdSeriesComponent,
      useExisting: forwardRef(() => TdChartSeriesSankeyComponent),
    },
  ],
})
export class TdChartSeriesSankeyComponent extends TdSeriesComponent<'sankey'> implements ITdSankeySeries {
  @Input() zlevel: number;
  @Input() z: number;
  @Input() left: string | number;
  @Input() top: string | number;
  @Input() right: string | number;
  @Input() bottom: string | number;
  @Input() width: string | number;
  @Input() height: string | number;
  @Input() nodeWidth: number;
  @Input() nodeGap: number;
  @Input() layoutIterations: number;
  @Input() orient: TdSankeyOrient;
  @Input() draggable: boolean;
  @Input() focusNodeAdjacency: TdSankeyFocusNodeAdjacency;
  @Input() label: ITdLabel;
  @Input() itemStyle: ITdItemStyle;
  @Input() lineStyle: ITdLineCurveStyle;
  @Input() emphasis: ITdEmphasis;
  @Input() nodes: any[];
  @Input() links: any[];
  @Input() edges: any[];
  @Input() silent: boolean;

  constructor(_optionsService: TdChartOptionsService) {
    super('sankey', _optionsService);
  }

  getConfig(): any {
    return {
      zlevel: this.zlevel,
      z: this.z,
      left: this.left,
      top: this.top,
      right: this.right,
      bottom: this.bottom,
      width: this.width,
      height: this.height,
      nodeWidth: this.nodeWidth,
      nodeGap: this.nodeGap,
      layoutIterations: this.layoutIterations,
      orient: this.orient,
      draggable: this.draggable,
      focusNodeAdjacency: this.focusNodeAdjacency,
      label: this.label,
      itemStyle: this.itemStyle,
      lineStyle: this.lineStyle,
      emphasis: this.emphasis,
      nodes: this.nodes,
      links: this.links,
      edges: this.edges,
      silent: this.silent,
    };
  }
}
