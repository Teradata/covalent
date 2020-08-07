import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

export interface IMenuItem {
  text: string;
  disabled?: boolean;
  icon?: string;
  href?: string;
  children?: IMenuItem[];
}
@Component({
  selector: 'td-dynamic-menu',
  styleUrls: ['dynamic-menu.component.scss'],
  templateUrl: './dynamic-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TdDynamicMenuComponent {
  _items: IMenuItem[] = [];
  @Input() set items(items: IMenuItem[]) {
    this._items = items;
    this._changeDetectorRef.detectChanges();
  }

  constructor(private _changeDetectorRef: ChangeDetectorRef) {
    // Ignore
  }
}
