import { Component, Directive, Input, Output, TemplateRef, ViewContainerRef, ContentChild,
         ElementRef, Renderer2 } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { TemplatePortalDirective } from '@angular/material';

import { TdCollapseAnimation, ICanDisable, mixinDisabled } from '../common/common.module';

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

class TdExpansionPanelBase {}

/* tslint:disable-next-line */
const _TdExpansionPanelMixinBase = mixinDisabled(TdExpansionPanelBase);

@Component({
  selector: 'td-expansion-panel',
  styleUrls: ['./expansion-panel.component.scss' ],
  templateUrl: './expansion-panel.component.html',
  inputs: ['disabled'],
  animations: [
    TdCollapseAnimation(),
  ],
})
export class TdExpansionPanelComponent extends _TdExpansionPanelMixinBase implements ICanDisable  {

  private _disableRipple: boolean = false;
  private _expand: boolean = false;

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
   * disableRipple?: string
   * Whether the ripple effect for this component is disabled.
   */
  @Input('disableRipple')
  set disableRipple(disableRipple: boolean) {
    this._disableRipple = <any>disableRipple !== '' ? (<any>disableRipple === 'true' || disableRipple === true) : true;
  }
  get disableRipple(): boolean {
    return this._disableRipple;
  }

  /**
   * expand?: boolean
   * Toggles [TdExpansionPanelComponent] between expand/collapse.
   */
  @Input('expand')
  set expand(expand: boolean) {
    this._setExpand(<any>expand === 'true' || expand === true);
  }
  get expand(): boolean {
    return this._expand;
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

  constructor(private _renderer: Renderer2,
              private _elementRef: ElementRef) {
    super();
    this._renderer.addClass(this._elementRef.nativeElement, 'td-expansion-panel');
  }

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

  /** Method executed when the disabled value changes */
  onDisabledChange(v: boolean): void {
    if (v && this._expand) {
      this._expand = false;
      this._onCollapsed();
    }
  }

  /**
   * Method to change expand state internally and emit the [onExpanded] event if 'true' or [onCollapsed]
   * event if 'false'. (Blocked if [disabled] is 'true')
   */
  private _setExpand(newExpand: boolean): boolean {
    if (this.disabled) {
      return false;
    }
    if (this._expand !== newExpand) {
      this._expand = newExpand;
      if (newExpand) {
        this._renderer.addClass(this._elementRef.nativeElement, 'td-expanded');
        this._onExpanded();
      } else {
        this._renderer.removeClass(this._elementRef.nativeElement, 'td-expanded');
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
