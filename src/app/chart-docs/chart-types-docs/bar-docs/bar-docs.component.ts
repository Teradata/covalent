import {
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  ITdSplitLine,
  TdYAxisPosition,
  ITdSeriesTooltip,
  ITdAxisLine,
  ITdAxisLabel,
  ITdBarSeries,
} from '../../../../platform/echarts';
import {
  seriesToolTip,
  barConfig,
  barPlot,
  splitLineBar,
  xLine,
  yLine,
  yAxisLabel,
} from '../../../data/bar-data';

@Component({
  selector: 'app-bar-docs',
  templateUrl: './bar-docs.component.html',
  styleUrls: ['./bar-docs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
})
export class BarDocsComponent {
  /**
   * This component is intentionally left simple for brevity as the data is
   * normally requested via an API which would include Angular
   * life-cycle hooks and other considerations.
   *
   *
   * CHANGE DECTECTION WORKAROUND:
   * height is used as to trigger change detection which updates
   * the chart, in this case the chart width needs to change. setTimeout in the
   * clearMarkData() method cause Angular to wait for a tick in the change dectection
   * life cycle before running change dectection again. This is due to the distinctUntilChange()
   * operator being used when setting the height and width in
   * src/platform/echarts/base/chart.component.ts
   */

  seriesToolTip: ITdSeriesTooltip[] = seriesToolTip;
  barConfig: any = barConfig;
  barPlot: ITdBarSeries[] = barPlot;
  splitLineBar: ITdSplitLine = splitLineBar;
  xLine: ITdAxisLine = xLine;
  yLine: ITdAxisLine = yLine;
  yAxisLabel: ITdAxisLabel = yAxisLabel;

  barYaxisPosition: TdYAxisPosition = 'right';
  height: number = 300;

}
