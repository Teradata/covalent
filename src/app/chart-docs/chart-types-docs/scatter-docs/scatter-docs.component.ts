import { Component, ChangeDetectionStrategy } from '@angular/core';
import { configScatterOption } from '../../../data/scatter-data';
import { splitLineBar, xLine, yLine } from '../../../data/bar-data';
import { ITdSplitLine, ITdAxisLine } from '../../../../platform/echarts';

@Component({
  selector: 'app-scatter-docs',
  templateUrl: './scatter-docs.component.html',
  styleUrls: ['./scatter-docs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces:  true,
})
export class ScatterDocsComponent {

  /** 
   * This component is intentionally left simple for brevity as the data is 
   * normally requested via an API which would include Angular 
   * life-cycle hooks and other considerations.
   * 
   */

  splitLine: ITdSplitLine = splitLineBar;
  xLine: ITdAxisLine = xLine;
  yLine: ITdAxisLine = yLine;
  configScatter: any = configScatterOption;

}
