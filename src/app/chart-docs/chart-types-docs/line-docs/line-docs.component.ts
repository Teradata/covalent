import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  TdXAxisPosition,
  ITdSeriesTooltip,
  ITdSplitLine,
  ITdAxisLine,
  ITdAxisLabel,
  TdMarkPointSymbol,
  ITdLineSeries,
} from '../../../../platform/echarts';

import {
  linePlot,
  splitLine,
  seriesToolTip,
  lineConfig,
  yAxisLabel,
  xAxisLabel,
  yLine,
  xLine,
} from '../../../data/line-data';

@Component({
  selector: 'app-line-docs',
  templateUrl: './line-docs.component.html',
  styleUrls: ['./line-docs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
})
export class LineDocsComponent {

  /** 
   * This component is intentionally left simple for brevity as the data is 
   * normally requested via an API which would include Angular 
   * life-cycle hooks and other considerations.
   * 
   */

  showTooltip: boolean = true;

  seriesToolTip: ITdSeriesTooltip[] = seriesToolTip;
  lineConfig: any = lineConfig;
  linePlot: ITdLineSeries[] = linePlot;
  splitLine: ITdSplitLine = splitLine;
  xLine: ITdAxisLine = xLine;
  yLine: ITdAxisLine = yLine;
  yAxisLabel: ITdAxisLabel = yAxisLabel;
  xAxisLabel: ITdAxisLabel = xAxisLabel;
  roundRectMarkPointSymbol: TdMarkPointSymbol = 'roundRect';
  lineXAxisPosition: TdXAxisPosition = 'top';
  lineXAxisPositionNoSeries: TdXAxisPosition = 'bottom';
}
