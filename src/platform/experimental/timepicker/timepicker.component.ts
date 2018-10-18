/* tslint:disable */
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgZone,
  Optional,
  ViewContainerRef,
  ViewEncapsulation,
  OnDestroy,
} from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { TdTimepickerInputComponent } from './timepicker-input.component';
import { TimeAdapter } from './time-adapter';

/** Used to generate a unique ID for each timepicker instance. */
let timepickerUid: number = 0;

// TODO(mmalerba): We use a component instead of a directive here so the user can use implicit
// template reference variables (e.g. #d vs #d="matTimepicker"). We can change this to a directive
// if angular adds support for `exportAs: '$implicit'` on directives.
/** Component responsible for managing the timepicker popup/dialog. */
@Component({
  selector: 'td-timepicker',
  template: '',
  exportAs: 'tdTimepicker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class TdTimepickerComponent<T> implements OnDestroy {
  private _startAt: T | null;
  private _validSelected: T | null = undefined;
  /** Subscription to value changes in the associated input element. */
  private _inputSubscription: any = Subscription.EMPTY;

  /** The time to open the calendar to initially. */
  @Input()
  get startAt(): T | null {
    // If an explicit startAt is set we start there, otherwise we start at whatever the currently
    // selected value is.
    return this._startAt || (this._timepickerInput ? this._timepickerInput.value : undefined);
  }
  set startAt(value: T | null) {
    this._startAt = this._getValidTimeOrNull(this._timeAdapter.deserialize(value));
  }

  /** The id for the timepicker list. */
  id: string = `td-timepicker-${timepickerUid++}`;

  /** The currently selected time. */
  get _selected(): T | null { return this._validSelected; }
  set _selected(value: T | null) { this._validSelected = value; }

  /** The minimum selectable time. */
  get _minTime(): T | null {
    return this._timepickerInput && this._timepickerInput.min;
  }

  /** The maximum selectable time. */
  get _maxTime(): T | null {
    return this._timepickerInput && this._timepickerInput.max;
  }

  get _timeFilter(): (time: T | null) => boolean {
    return this._timepickerInput && this._timepickerInput._timeFilter;
  }

  /** The input element this timepicker is associated with. */
  _timepickerInput: TdTimepickerInputComponent<T>;

  /** Emits new selected time when selected time changes. */
  readonly _selectedChanged: any = new Subject<T>();

  constructor(private _ngZone: NgZone,
              private _viewContainerRef: ViewContainerRef,
              @Optional() private _timeAdapter: TimeAdapter<T>) {
  }

  ngOnDestroy(): void {
    this._inputSubscription.unsubscribe();
  }

  /** Selects the given time */
  select(time: T): void {
    let oldValue: any = this._selected;
    this._selected = time;
    if (!this._timeAdapter.sameTime(oldValue, this._selected)) {
      this._selectedChanged.next(time);
    }
  }

  /**
   * Register an input with this timepicker.
   * @param input The timepicker input to register with this timepicker.
   */
  _registerInput(input: TdTimepickerInputComponent<T>): void {
    if (this._timepickerInput) {
      throw Error('A TdTimepicker can only be associated with a single input.');
    }
    this._timepickerInput = input;
    this._inputSubscription =
        this._timepickerInput._valueChange.subscribe((value: T | null) => this._selected = value);
  }

  /**
   * @param obj The object to check.
   * @returns The given object if it is both a time instance and valid, otherwise null.
   */
  private _getValidTimeOrNull(obj: any): T | null {
    return (this._timeAdapter.isTimeInstance(obj) && this._timeAdapter.isValid(obj)) ? obj : undefined;
  }

}
