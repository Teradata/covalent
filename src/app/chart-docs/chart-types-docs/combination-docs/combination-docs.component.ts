import { Component, ChangeDetectionStrategy } from '@angular/core';
import { comboConfig } from '../../../data/combination-data';

@Component({
  selector: 'app-combination-docs',
  templateUrl: './combination-docs.component.html',
  styleUrls: ['./combination-docs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
})
export class CombinationDocsComponent {

  /** 
   * This component is intentionally left simple for brevity as the data is 
   * normally requested via an API which would include Angular 
   * life-cycle hooks and other considerations.
   * 
   */
  comboConfig: any = comboConfig;

}
