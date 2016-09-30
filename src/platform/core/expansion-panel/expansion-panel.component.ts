import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'td-expansion-summary',
  template: '<ng-content></ng-content>',
})
export class TdExpansionPanelSummaryComponent {}

@Component({
  selector: 'td-expansion-panel',
  styleUrls: [ 'expansion-panel.component.scss' ],
  templateUrl: 'expansion-panel.component.html',
})
export class TdExpansionPanelComponent {

  private _expand: boolean = false;
  private _disabled: boolean = false;

  /**
   * label?: string
   * Sets label of [TdExpansionPanelComponent] header.
   * Defaults to 'Click to expand'
   */
  @Input() label: string;

  /**
   * sublabel?: string
   * Sets sublabel of [TdExpansionPanelComponent] header.
   */
  @Input() sublabel: string;

  /**
   * expand?: boolean
   * Toggles [TdExpansionPanelComponent] between expand/collapse.
   */
  @Input('expand')
  set expand(expand: boolean) {
    this._setExpand(expand);
  };
  get expand(): boolean {
    return this._expand;
  };

  /**
   * disabled?: boolean
   * Disables icon and header, blocks click event and sets [TdStepComponent] to deactive if 'true'.
   */
  @Input('disabled')
  set disabled(disabled: boolean) {
    if (disabled && this._expand) {
      this._expand = false;
      this._onCollapsed();
    }
    this._disabled = disabled;
  };
  get disabled(): boolean {
    return this._disabled;
  };

  /**
   * expanded?: function
   * Event emitted when [TdExpansionPanelComponent] is expanded.
   */
  @Output() expanded: EventEmitter<void> = new EventEmitter<void>();

  /**
   * collapsed?: function
   * Event emitted when [TdExpansionPanelComponent] is collapsed.
   */
  @Output() collapsed: EventEmitter<void> = new EventEmitter<void>();

  /**
   * Method executed when [TdExpansionPanelComponent] is clicked.
   */
  clickEvent(): void {
    this._setExpand(!this._expand);
  };

  /**
   * Method to change expand state internally and emit the [onExpanded] event if 'true' or [onCollapsed]
   * event if 'false'. (Blocked if [disabled] is 'true')
   */
  private _setExpand(newExpand: boolean): void {
    if (this._disabled) {
      return;
    }
    if (this._expand !== newExpand) {
      this._expand = newExpand;
      if (newExpand) {
        this._onExpanded();
      } else {
        this._onCollapsed();
      }
    }
  };

  private _onExpanded(): void {
    this.expanded.emit(undefined);
  };

  private _onCollapsed(): void {
    this.collapsed.emit(undefined);
  };
}
