import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ViewChild,
  TemplateRef,
  OnInit,
  ViewContainerRef,
} from '@angular/core';

import { TemplatePortal } from '@angular/cdk/portal';
import { mixinDisabled, ICanDisable } from '@covalent/core/common';

export class TdTabOptionBase {
  constructor(public _viewContainerRef: ViewContainerRef,
              public _changeDetectorRef: ChangeDetectorRef) {}
}

/* tslint:disable-next-line */
export const _TdTabOptionMixinBase = mixinDisabled(TdTabOptionBase);

@Component({
  selector: 'td-tab-option',
  templateUrl: './tab-option.component.html',
  styleUrls: ['./tab-option.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  /* tslint:disable-next-line */
  inputs: ['disabled'],
})
export class TdTabOptionComponent extends _TdTabOptionMixinBase implements ICanDisable, OnInit {

  private _contentPortal: TemplatePortal<any>;
  get content(): TemplatePortal<any> {
    return this._contentPortal;
  }

  @ViewChild(TemplateRef) _content: TemplateRef<any>;

  /**
   * Value to which the option will be binded to.
   */
  @Input('value') value: any;

  constructor(_viewContainerRef: ViewContainerRef,
              _changeDetectorRef: ChangeDetectorRef) {
    super(_viewContainerRef, _changeDetectorRef);
  }

  ngOnInit(): void {
    this._contentPortal = new TemplatePortal(this._content, this._viewContainerRef);
  }

}
