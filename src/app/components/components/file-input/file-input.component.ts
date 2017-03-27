import { Component, HostBinding, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'file-input-demo',
  styleUrls: ['./file-input.component.scss'],
  templateUrl: './file-input.component.html',
  animations: [slideInDownAnimation],
})
export class FileInputDemoComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  files: any;
  disabled: boolean = false;

  constructor(private _changeDetectorRef: ChangeDetectorRef) {}

  toggleDisabled(): void {
    this.disabled = !this.disabled;
    this._changeDetectorRef.detectChanges();
    this._changeDetectorRef.markForCheck();
  }
}
