import {
    ITdLabel,
    ITdLineStyle,
    TdMarkPointSymbol,
    TdCoordinateSystem,
    ITdItemStyle,
    ITdEmphasis,
    TdSeriesLayoutBy,
    ITdMarkPoint,
    ITdMarkLine,
    ITdMarkArea,
    ITdSeriesTooltip,
    ITdAreaStyle,
    TdSeriesType,
    ITdAnimation,
    ITdShadow,
} from '@covalent/echarts/base';

export type TdSampling = 'average' | 'max' | 'min' | 'sum';

export interface ITdLineSeries extends ITdAnimation, ITdShadow {
    type?: TdSeriesType;
    id?: string;
    name?: string;
    color?: string;
    coordinateSystem?: TdCoordinateSystem;
    xAxisIndex?: number;
    yAxisIndex?: number;
    polarIndex?: number;
    symbol?: TdMarkPointSymbol;
    symbolSize?: number;
    symbolRotate?: number;
    symbolKeepAspect?: boolean;
    symbolOffset?: any[];
    showSymbol?: boolean;
    showAllSymbol?: boolean | 'auto';
    hoverAnimation?: boolean;
    legendHoverLink?: boolean;
    stack?: boolean;
    cursor?: string;
    connectNulls?: boolean;
    clipOverflow?: boolean;
    step?: boolean;
    label?: ITdLabel;
    itemStyle?: ITdItemStyle;
    lineStyle?: ITdLineStyle;
    width?: number;
    opacity?: number;
    areaStyle?: ITdAreaStyle;
    emphasis?: ITdEmphasis;
    smooth?: boolean;
    smoothMonotone?: string;
    sampling?: TdSampling;
    dimensions?: any[];
    encode?: any;
    seriesLayoutBy?: TdSeriesLayoutBy;
    datasetIndex?: 0;
    data?: any[];
    markPoint?: ITdMarkPoint;
    markLine?: ITdMarkLine;
    markArea?: ITdMarkArea;
    zlevel?: number;
    z?: number;
    silent?: boolean;
    tooltip?: ITdSeriesTooltip;
}
