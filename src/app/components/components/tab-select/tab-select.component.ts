import { Component, HostBinding, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'tab-select-demo',
  styleUrls: ['./tab-select.component.scss'],
  templateUrl: './tab-select.component.html',
  animations: [slideInDownAnimation],
  preserveWhitespaces: true,
})
export class TabSelectDemoComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  disabled: boolean = false;
  value: string = '';

  constructor(private _changeDetectorRef: ChangeDetectorRef) {}

  toggleDisabled(): void {
    this.disabled = !this.disabled;
    this._changeDetectorRef.markForCheck();
  }

}
