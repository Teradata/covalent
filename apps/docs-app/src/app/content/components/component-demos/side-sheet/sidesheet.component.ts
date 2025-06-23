import {
  Component,
  ChangeDetectionStrategy,
  TemplateRef,
  ViewChild,
  inject,
} from '@angular/core';
import { CovalentSideSheet } from '@covalent/core/side-sheet';

@Component({
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'sidesheet-demo',
  styleUrls: ['./sidesheet.component.scss'],
  templateUrl: './sidesheet.component.html',
})
export class SidesheetDemoComponent {
  private sideSheet = inject(CovalentSideSheet);

  @ViewChild('example') template!: TemplateRef<any>;

  toggleSideSheet(): void {
    this.sideSheet.open(this.template);
  }
}
