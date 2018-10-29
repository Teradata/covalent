import {
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'atomic-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
})
export class AtomicTooltipComponent {

}
