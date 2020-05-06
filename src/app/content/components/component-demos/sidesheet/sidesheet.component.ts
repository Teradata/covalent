import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'sidesheet-demo',
  styleUrls: ['./sidesheet.component.scss'],
  templateUrl: './sidesheet.component.html',
})
export class SidesheetDemoComponent {}
