import { Component } from '@angular/core';

@Component({
  selector: 'td-breadcrumb, a[td-breadcrumb]',
  styleUrls: ['./breadcrumb.component.scss'],
  templateUrl: './breadcrumb.component.html',
})
export class TdBreadcrumbComponent {

  // Should show the right chevron or not before the label
  private _displayIcon: boolean = true;
  // Any additional styles on the breadcrumb, like graying out the last one
  private _additionalStyles: string = '';

  get displayIcon(): boolean {
    return this._displayIcon;
  }

  set displayIcon(shouldDisplay: boolean) {
    this._displayIcon = shouldDisplay;
  }

  get additionalStyles(): string {
    return this._additionalStyles;
  }

  set additionalStyles(style: string) {
    this._additionalStyles = style;
  }

}
