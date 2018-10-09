import {
    ITdLabel,
    TdAnimationEasing,
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
} from '@covalent/echarts/base';

enum TdSampling {
    Average = 'average',
    Max = 'max',
    Min = 'min',
    Sum = 'sum',
}

interface ITdLineSeries {
    type?: TdSeriesType;
    id?: string;
    name?: string;
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
    color?: any;
    width?: number;
    shadowBlur?: number;
    shadowColor?: number;
    shadowOffsetX?: number;
    shadowOffsetY?: number;
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
    Animation?: boolean;
    animationThreshold?: number;
    animationDuration?: number;
    animationEasing?: TdAnimationEasing;
    animationDelay?: 0;
    animationDurationUpdate?: number;
    animationEasingUpdate?: TdAnimationEasing;
    animationDelayUpdate?: number;
    tooltip?: ITdSeriesTooltip;
}

export { ITdLineSeries, TdSampling };
