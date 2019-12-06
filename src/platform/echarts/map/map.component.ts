import { Component, Input, ChangeDetectionStrategy, forwardRef } from '@angular/core';

import {
  TdChartOptionsService,
  ITdItemStyle,
  ITdMarkPoint,
  ITdMarkLine,
  ITdMarkArea,
  ITdSeries,
  ITdLabel,
  TdSeriesComponent,
} from '@covalent/echarts/base';

export type TdMapValueCalculation = 'sum' | 'average' | 'max' | 'min';
export type TdMapSeriesLayoutBy = 'column' | 'row';

export interface ITdMapScaleLimit {
  min?: number;
  max?: number;
}

export interface ITdMapItemStyle {
  areaColor?: ITdItemStyle;
  emphasis?: ITdItemStyle;
}

export interface ITdMapSeries extends ITdSeries<'map'> {
  map?: string;
  roam?: boolean;
  center?: number[];
  aspectScale?: number;
  boudingCoords?: any[];
  zoom?: number;
  scaleLimit?: ITdMapScaleLimit;
  nameMap?: object;
  selectedMode?: boolean | string;
  label?: ITdLabel;
  itemStyle?: ITdMapItemStyle;
  zLevel?: number;
  z?: number;
  left?: string | number;
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  layoutCenter?: any[];
  layoutSize?: any[];
  geoIndex?: number;
  mapValueCalculation?: TdMapValueCalculation;
  showLegendSymbol?: boolean;
  seriesLayoutBy?: string;
  data?: any[];
  markPoint?: ITdMarkPoint;
  markLine?: ITdMarkLine;
  markArea?: ITdMarkArea;
  silent?: boolean;
}

@Component({
  selector: 'td-chart-series[td-map]',
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
      useExisting: forwardRef(() => TdChartSeriesMapComponent),
    },
  ],
})
export class TdChartSeriesMapComponent extends TdSeriesComponent<'map'> implements ITdMapSeries {
  @Input() map: string;
  @Input() roam: boolean;
  @Input() center: number[];
  @Input() aspectScale: number;
  @Input() boudingCoords: any[];
  @Input() zoom: number;
  @Input() scaleLimit: ITdMapScaleLimit;
  @Input() nameMap: object;
  @Input() selectedMode: boolean | string;
  @Input() label: ITdLabel;
  @Input() itemStyle: ITdMapItemStyle;
  @Input() zLevel: number;
  @Input() z: number;
  @Input() left: string | number;
  @Input() top: string | number;
  @Input() right: string | number;
  @Input() bottom: string | number;
  @Input() layoutCenter: any[];
  @Input() layoutSize: any[];
  @Input() geoIndex: number;
  @Input() mapValueCalculation: TdMapValueCalculation;
  @Input() showLegendSymbol: boolean;
  @Input() seriesLayoutBy: string;
  @Input() markPoint: ITdMarkPoint;
  @Input() markLine: ITdMarkLine;
  @Input() markArea: ITdMarkArea;
  @Input() silent: boolean;

  constructor(_optionsService: TdChartOptionsService) {
    super('map', _optionsService);
  }

  getConfig(): any {
    return {
      map: this.map,
      roam: this.roam,
      center: this.center,
      aspectScale: this.aspectScale,
      boudingCoords: this.boudingCoords,
      zoom: this.zoom,
      scaleLimit: this.scaleLimit,
      nameMap: this.nameMap,
      selectedMode: this.selectedMode,
      label: this.label,
      itemStyle: this.itemStyle,
      zLevel: this.zLevel,
      z: this.z,
      left: this.left,
      top: this.top,
      right: this.right,
      bottom: this.bottom,
      layoutCenter: this.layoutCenter,
      layoutSize: this.layoutSize,
      geoIndex: this.geoIndex,
      mapValueCalculation: this.mapValueCalculation,
      showLegendSymbol: this.showLegendSymbol,
      seriesLayoutBy: this.seriesLayoutBy,
      markPoint: this.markPoint,
      markLine: this.markLine,
      markArea: this.markArea,
      silent: this.silent,
    };
  }
}
