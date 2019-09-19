import { Component, HostBinding, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TdMediaService } from '@covalent/core/media';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'sidesheet-demo',
  styleUrls: ['./sidesheet.component.scss'],
  templateUrl: './sidesheet.component.html',
  preserveWhitespaces: true,
})
export class SidesheetDemoComponent {
  constructor(private _changeDetectorRef: ChangeDetectorRef, public media: TdMediaService) {}
}
