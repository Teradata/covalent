import {
    TdCoordinateSystem,
    ITdEmphasis,
    TdSeriesLayoutBy,
    ITdMarkPoint,
    ITdMarkLine,
    TdAnimationEasing,
    ITdMarkArea,
    ITdSeriesTooltip,
    TdMarkPointSymbol,
    TdSeriesType,
    ITdLineLabel,
    ITdLabel,
} from '@covalent/echarts/base';

interface ITdScatterSeries {
    type?: TdSeriesType;
    id?: string;
    name?: string;
    coordinateSystem?: TdCoordinateSystem;
    xAxisIndex?: number;
    yAxisIndex?: number;
    polarIndex?: number;
    geoIndex?: number;
    calendarIndex?: number;
    hoverAnimation?: boolean;
    legendHoverLink?: boolean;
    symbol?: TdMarkPointSymbol;
    symbolSize?: number | Function;
    symbolRotate?: number;
    symbolKeepAspect?: boolean;
    symbolOffset?: any[];
    large?: boolean;
    largeThreshold?: number;
    cursor?: string;
    connectNulls?: boolean;
    clipOverflow?: boolean;
    step?: boolean;
    label?: ITdLabel;
    itemStyle?: any;
    Emphasis?: ITdEmphasis;
    progressive?: number;
    progressiveThreshold?: number;
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

export { ITdScatterSeries };
