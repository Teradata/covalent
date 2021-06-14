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
  ViewChild,
  ElementRef,
  NgZone,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ThemePalette } from '@angular/material/core';
import { MatTabGroup } from '@angular/material/tabs';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

import {
  ICanDisable,
  mixinDisabled,
  IControlValueAccessor,
  mixinControlValueAccessor,
  ICanDisableRipple,
  mixinDisableRipple,
} from '@covalent/core/common';

import { timer, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

import { TdTabOptionComponent } from './tab-option.component';

export class TdTabSelectBase {
  constructor(public _changeDetectorRef: ChangeDetectorRef) {}
}

/* tslint:disable-next-line */
export const _TdTabSelectMixinBase = mixinControlValueAccessor(mixinDisabled(mixinDisableRipple(TdTabSelectBase)));

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TdTabSelectComponent),
      multi: true,
    },
  ],
  selector: 'td-tab-select',
  templateUrl: './tab-select.component.html',
  styleUrls: ['./tab-select.component.scss'],
  /* tslint:disable-next-line */
  inputs: ['value', 'disabled', 'disableRipple'],
})
export class TdTabSelectComponent
  extends _TdTabSelectMixinBase
  implements IControlValueAccessor, ICanDisable, ICanDisableRipple, OnInit, AfterContentInit, OnDestroy
{
  private _destroy: Subject<boolean> = new Subject<boolean>();
  private _widthSubject: Subject<number> = new Subject<number>();

  private _values: any[] = [];
  private _selectedIndex: number = 0;
  private _stretchTabs: boolean = false;

  @ViewChild(MatTabGroup, { static: true }) _matTabGroup: MatTabGroup;

  get selectedIndex(): number {
    return this._selectedIndex;
  }

  /**
   * Gets all tab option children
   */
  @ContentChildren(TdTabOptionComponent, { descendants: true }) readonly _tabOptions: QueryList<TdTabOptionComponent>;

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
  @Input() color: ThemePalette;

  /**
   * Background color of the tab group.
   */
  @Input() backgroundColor: ThemePalette;

  /**
   * Event that emits whenever the raw value of the select changes. This is here primarily
   * to facilitate the two-way binding for the `value` input.
   */
  @Output() readonly valueChange: EventEmitter<any> = new EventEmitter<any>();

  constructor(_changeDetectorRef: ChangeDetectorRef, private _ngZone: NgZone, private _elementRef: ElementRef) {
    super(_changeDetectorRef);
  }

  ngOnInit(): void {
    // set a timer to check every 250ms if the width has changed.
    // if the width has changed, then we realign the ink bar
    this._ngZone.runOutsideAngular(() => {
      this._widthSubject
        .asObservable()
        .pipe(takeUntil(this._destroy), distinctUntilChanged(), debounceTime(100))
        .subscribe(() => {
          this._ngZone.run(() => {
            this._matTabGroup.realignInkBar();
            this._changeDetectorRef.markForCheck();
          });
        });
      timer(500, 250)
        .pipe(takeUntil(this._destroy))
        .subscribe(() => {
          if (this._elementRef && this._elementRef.nativeElement) {
            this._widthSubject.next((<HTMLElement>this._elementRef.nativeElement).getBoundingClientRect().width);
          }
        });
    });

    // subscribe to check if value changes and update the selectedIndex internally.
    this.valueChanges.pipe(takeUntil(this._destroy)).subscribe((value: any) => {
      this._setValue(value);
    });
  }

  ngAfterContentInit(): void {
    // subscribe to listen to any tab changes.
    this._refreshValues();
    this._tabOptions.changes.pipe(takeUntil(this._destroy)).subscribe(() => {
      this._refreshValues();
    });
    // initialize value
    Promise.resolve().then(() => {
      this._setValue(this.value);
    });
  }

  ngOnDestroy(): void {
    this._destroy.next(true);
    this._destroy.unsubscribe();
  }

  /**
   * Method executed when user selects a different tab
   * This updates the new selectedIndex and infers what value should be mapped to.
   */
  selectedIndexChange(selectedIndex: number): void {
    this._selectedIndex = selectedIndex;
    const value: any = this._values[selectedIndex];
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
    const index: number = this._values.indexOf(value);
    if (index > -1) {
      this._selectedIndex = index;
    } else {
      this.value = this._values.length ? this._values[0] : undefined;
      this._selectedIndex = 0;
    }
    this._changeDetectorRef.markForCheck();
  }
}
