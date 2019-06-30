import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ContentChildren,
  QueryList,
  OnInit,
  AfterContentInit,
  forwardRef,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

import { ThemePalette } from '@angular/material/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

import { ICanDisable,
          mixinDisabled,
          IControlValueAccessor,
          mixinControlValueAccessor,
          ICanDisableRipple,
          mixinDisableRipple,
} from '@covalent/core/common';

import { Subscription } from 'rxjs';

import { TdTabOptionComponent } from './tab-option.component';

export class TdTabSelectBase {
  constructor(public _changeDetectorRef: ChangeDetectorRef) {}
}

/* tslint:disable-next-line */
export const _TdTabSelectMixinBase = mixinControlValueAccessor(mixinDisabled(mixinDisableRipple(TdTabSelectBase)));

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TdTabSelectComponent),
    multi: true,
  }],
  selector: 'td-tab-select',
  templateUrl: './tab-select.component.html',
  styleUrls: ['./tab-select.component.scss'],
  /* tslint:disable-next-line */
  inputs: ['value', 'disabled', 'disableRipple'],
})
export class TdTabSelectComponent extends _TdTabSelectMixinBase
                                  implements IControlValueAccessor, ICanDisable, ICanDisableRipple, OnInit, AfterContentInit, OnDestroy {

  private _subs: Subscription[] = [];

  private _values: any[] = [];
  private _selectedIndex: number = 0;
  private _stretchTabs: boolean = false;

  get selectedIndex(): number {
    return this._selectedIndex;
  }

  /**
   * Gets all tab option children
   */
  @ContentChildren(TdTabOptionComponent) readonly _tabOptions: QueryList<TdTabOptionComponent>;

  get tabOptions(): TdTabOptionComponent[] {
    return this._tabOptions ? this._tabOptions.toArray() : undefined;
  }

  /**
   * Makes the tabs stretch to fit the parent container.
   */
  @Input('stretchTabs')
  set stretchTabs(stretchTabs: boolean) {
    this._stretchTabs = coerceBooleanProperty(stretchTabs);
  }
  get stretchTabs(): boolean {
    return this._stretchTabs;
  }

  /**
   * Color of the tab group.
   */
  @Input('color') color: ThemePalette;

  /**
   * Background color of the tab group.
   */
  @Input('backgroundColor') backgroundColor: ThemePalette;

  /**
   * Event that emits whenever the raw value of the select changes. This is here primarily
   * to facilitate the two-way binding for the `value` input.
   */
  @Output() readonly valueChange: EventEmitter<any> = new EventEmitter<any>();

  constructor(_changeDetectorRef: ChangeDetectorRef) {
    super(_changeDetectorRef);
  }

  ngOnInit(): void {
    // subscribe to check if value changes and update the selectedIndex internally.
    this._subs.push(
      this.valueChanges.subscribe((value: any) => {
        this._setValue(value);
      }),
    );
  }

  ngAfterContentInit(): void {
    // subscribe to listen to any tab changes.
    this._refreshValues();
    this._subs.push(
      this._tabOptions.changes.subscribe(() => {
        this._refreshValues();
      }),
    );
    // initialize value
    Promise.resolve().then(() => {
      this._setValue(this.value);
    });
  }

  ngOnDestroy(): void {
    if (this._subs && this._subs.length) {
      this._subs.forEach((sub: Subscription) => {
        sub.unsubscribe();
      });
    }
  }

  /**
   * Method executed when user selects a different tab
   * This updates the new selectedIndex and infers what value should be mapped to.
   */
  selectedIndexChange(selectedIndex: number): void {
    this._selectedIndex = selectedIndex;
    let value: any = this._values[selectedIndex];
    this.value = value;
    this.valueChange.emit(value);
    this.onChange(value);
  }

  /**
   * Refresh the values array whenever the number of tabs gets updated
   */
  private _refreshValues(): void {
    this._values = this.tabOptions.map((tabOption: TdTabOptionComponent) => {
      return tabOption.value;
    });
    this._changeDetectorRef.markForCheck();
  }

  /**
   * Try to set value depending if its part of our options
   * else set the value of the first tab.
   */
  private _setValue(value: any): void {
    let index: number = this._values.indexOf(value);
    if (index > -1) {
      this._selectedIndex = index;
    } else {
      this.value = this._values.length ? this._values[0] : undefined;
      this._selectedIndex = 0;
    }
    this._changeDetectorRef.markForCheck();
  }

}
