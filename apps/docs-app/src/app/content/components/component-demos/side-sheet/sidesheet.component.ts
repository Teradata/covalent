import {
  Component,
  ChangeDetectionStrategy,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { CovalentSideSheet } from '@covalent/core/side-sheet';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'sidesheet-demo',
  styleUrls: ['./sidesheet.component.scss'],
  templateUrl: './sidesheet.component.html',
})
export class SidesheetDemoComponent {
  @ViewChild('example') template!: TemplateRef<any>;

  constructor(private sideSheet: CovalentSideSheet) {}

  toggleSideSheet(): void {
    this.sideSheet.open(this.template);
  }
}
