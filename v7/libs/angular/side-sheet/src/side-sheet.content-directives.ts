/* tslint:disable */
import {
  Directive,
  Input,
  OnChanges,
  OnInit,
  Optional,
  SimpleChanges,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';
import { CovalentSideSheet } from './side-sheet';
import { _closeSideSheetVia, CovalentSideSheetRef } from './side-sheet-ref';

/** Counter used to generate unique IDs for dialog elements. */
let dialogElementUid = 0;

/**
 * Button that will close the current dialog.
 */
@Directive({
  selector: '[td-side-sheet-close], [CovalentSideSheetClose]',
  exportAs: 'CovalentSideSheetClose',
})
export class CovalentSideSheetCloseDirective implements OnInit, OnChanges {
  /** Screenreader label for the button. */
  @HostBinding('attr.arial-label')
  @Input('aria-label')
  ariaLabel?: string;

  /** Default to "button" to prevents accidental form submits. */
  @HostBinding('attr.type')
  @Input()
  type: 'submit' | 'button' | 'reset' = 'button';

  /** Dialog close input. */
  @Input('td-side-sheet-close') dialogResult: any;

  @Input('CovalentSideSheetClose') _CovalentSideSheetClose: any;

  @HostListener('click', ['$event']) onClick($event: MouseEvent) {
    this._onButtonClick($event);
  }

  constructor(
    @Optional() public dialogRef: CovalentSideSheetRef<any>,
    private _elementRef: ElementRef<HTMLElement>,
    private _dialog: CovalentSideSheet
  ) {}

  ngOnInit(): void {
    if (!this.dialogRef) {
      // When this directive is included in a dialog via TemplateRef (rather than being
      // in a Component), the DialogRef isn't available via injection because embedded
      // views cannot be given a custom injector. Instead, we look up the DialogRef by
      // ID. This must occur in `onInit`, as the ID binding for the dialog container won't
      // be resolved at constructor time.
      this.dialogRef = getClosestDialog(
        this._elementRef,
        this._dialog.openSideSheets
      );
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    const proxiedChange =
      changes['_CovalentSideSheetClose'] ||
      changes['_CovalentSideSheetCloseResult'];

    if (proxiedChange) {
      this.dialogResult = proxiedChange.currentValue;
    }
  }

  _onButtonClick(event: MouseEvent) {
    // Determinate the focus origin using the click event, because using the FocusMonitor will
    // result in incorrect origins. Most of the time, close buttons will be auto focused in the
    // dialog, and therefore clicking the button won't result in a focus change. This means that
    // the FocusMonitor won't detect any origin change, and will always output `program`.
    _closeSideSheetVia(
      this.dialogRef,
      event.screenX === 0 && event.screenY === 0 ? 'keyboard' : 'mouse',
      this.dialogResult
    );
  }
}

/**
 * Title of a side sheet element. Stays fixed to the top of the side sheet when scrolling.
 */
@Directive({
  selector: '[td-side-sheet-title], [CovalentSideSheetTitle]',
  exportAs: 'CovalentSideSheetTitle',
})
export class CovalentSideSheetTitleDirective implements OnInit {
  /** Unique id for the dialog title. If none is supplied, it will be auto-generated. */
  @Input() id = `td-side-sheet-title-${dialogElementUid++}`;

  @HostBinding('class.td-side-sheet-title') tdSideSheetTitle = true;

  @HostBinding('attr.id') idAttr = this.id;

  constructor(
    // The dialog title directive is always used in combination with a `CovalentSideSheetRef`.
    // tslint:disable-next-line: lightweight-tokens
    @Optional() private _dialogRef: CovalentSideSheetRef<any>,
    private _elementRef: ElementRef<HTMLElement>,
    private _dialog: CovalentSideSheet
  ) {}

  ngOnInit(): void {
    if (this._dialogRef) {
      Promise.resolve().then(() => {
        const container = this._dialogRef._containerInstance;

        if (container && !container._ariaLabelledBy) {
          container._ariaLabelledBy = this.id;
        }
      });
    } else {
      this._dialogRef = getClosestDialog(
        this._elementRef,
        this._dialog.openSideSheets
      );
    }
  }
}

/**
 * Scrollable content container of a dialog.
 */
@Directive({
  selector: `[td-side-sheet-content], td-side-sheet-content, [CovalentSideSheetContent]`,
})
export class CovalentSideSheetContentDirective {
  @HostBinding('class.td-side-sheet-content') tdSideSheetContent = true;
}

/**
 * Container for the bottom action buttons in a dialog.
 * Stays fixed to the bottom when scrolling.
 */
@Directive({
  selector: `[td-side-sheet-actions], td-side-sheet-actions, [CovalentSideSheetActions]`,
})
export class CovalentSideSheetActionsDirective {
  @HostBinding('class.td-side-sheet-actions') tdSideSheetActions = true;
}

/**
 * Container for the wrapper part of the dialog
 */
@Directive({
  selector: `[td-side-sheet-wrapper], td-side-sheet-wrapper, [CovalentSideSheetWrapper]`,
})
export class CovalentSideSheetWrapperDirective {
  @HostBinding('class.td-side-sheet-wrapper') tdSideSheetWrapper = true;
}

/**
 * Finds the closest CovalentSideSheetRef to an element by looking at the DOM.
 * @param element Element relative to which to look for a dialog.
 * @param openDialogs References to the currently-open dialogs.
 */
function getClosestDialog(
  element: ElementRef<HTMLElement>,
  openDialogs: CovalentSideSheetRef<any>[]
): CovalentSideSheetRef<any> {
  let parent: HTMLElement | null = element.nativeElement.parentElement;

  while (parent && !parent.classList.contains('td-side-sheet-container')) {
    parent = parent.parentElement;
  }

  return parent
    ? openDialogs.find((dialog) => dialog.id === parent?.id) ?? openDialogs[0]
    : openDialogs[0];
}
