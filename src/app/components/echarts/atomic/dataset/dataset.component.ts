import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'atomic-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
})
export class AtomicDatasetComponent {}
