import { Component, Directive, Input, Output, TemplateRef, ViewContainerRef, ContentChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { TemplatePortalDirective } from '@angular/material';

import { TdCollapseAnimation } from '../common/common.module';

@Directive({
  selector: '[td-expansion-panel-header]ng-template',
})
export class TdExpansionPanelHeaderDirective extends TemplatePortalDirective {
  constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef) {
    super(templateRef, viewContainerRef);
  }
}

@Directive({
  selector: '[td-expansion-panel-label]ng-template',
})
export class TdExpansionPanelLabelDirective extends TemplatePortalDirective {
  constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef) {
    super(templateRef, viewContainerRef);
  }
}

@Directive({
  selector: '[td-expansion-panel-sublabel]ng-template',
})
export class TdExpansionPanelSublabelDirective extends TemplatePortalDirective {
  constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef) {
    super(templateRef, viewContainerRef);
  }
}

@Component({
  selector: 'td-expansion-summary',
  template: '<ng-content></ng-content>',
})
export class TdExpansionPanelSummaryComponent {}

@Component({
  selector: 'td-expansion-panel',
  styleUrls: ['./expansion-panel.component.scss' ],
  templateUrl: './expansion-panel.component.html',
  animations: [
    TdCollapseAnimation(),
  ],
})
export class TdExpansionPanelComponent {

  private _expand: boolean = false;
  private _disabled: boolean = false;

  @ContentChild(TdExpansionPanelHeaderDirective) expansionPanelHeader: TdExpansionPanelHeaderDirective;
  @ContentChild(TdExpansionPanelLabelDirective) expansionPanelLabel: TdExpansionPanelLabelDirective;
  @ContentChild(TdExpansionPanelSublabelDirective) expansionPanelSublabel: TdExpansionPanelSublabelDirective;

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
  }
  get expand(): boolean {
    return this._expand;
  }

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
  }
  get disabled(): boolean {
    return this._disabled;
  }

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
  }

  /**
   * Toggle expand state of [TdExpansionPanelComponent]
   * retuns 'true' if successful, else 'false'.
   */
  toggle(): boolean {
    return this._setExpand(!this._expand);
  }

  /**
   * Opens [TdExpansionPanelComponent]
   * retuns 'true' if successful, else 'false'.
   */
  open(): boolean {
    return this._setExpand(true);
  }

  /**
   * Closes [TdExpansionPanelComponent]
   * retuns 'true' if successful, else 'false'.
   */
  close(): boolean {
    return this._setExpand(false);
  }

  /**
   * Method to change expand state internally and emit the [onExpanded] event if 'true' or [onCollapsed]
   * event if 'false'. (Blocked if [disabled] is 'true')
   */
  private _setExpand(newExpand: boolean): boolean {
    if (this._disabled) {
      return false;
    }
    if (this._expand !== newExpand) {
      this._expand = newExpand;
      if (newExpand) {
        this._onExpanded();
      } else {
        this._onCollapsed();
      }
      return true;
    }
    return false;
  }

  private _onExpanded(): void {
    this.expanded.emit(undefined);
  }

  private _onCollapsed(): void {
    this.collapsed.emit(undefined);
  }
}
