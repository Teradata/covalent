/* tslint:disable */
import { AnimationEvent } from '@angular/animations';
import {
  ConfigurableFocusTrap,
  ConfigurableFocusTrapFactory,
  FocusMonitor,
  FocusOrigin,
} from '@angular/cdk/a11y';
import {
  BasePortalOutlet,
  CdkPortalOutlet,
  ComponentPortal,
  DomPortal,
  TemplatePortal,
} from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentRef,
  Directive,
  ElementRef,
  EmbeddedViewRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Optional,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { tdSideSheetAnimations } from './side-sheet.animation';
import { CovalentSideSheetConfig } from './side-sheet.config';

export function _getFocusedElementPierceShadowDom(): HTMLElement | null {
  let activeElement =
    typeof document !== 'undefined' && document
      ? (document.activeElement as HTMLElement | null)
      : null;

  while (activeElement && activeElement.shadowRoot) {
    const newActiveElement = activeElement.shadowRoot
      .activeElement as HTMLElement | null;
    if (newActiveElement === activeElement) {
      break;
    } else {
      activeElement = newActiveElement;
    }
  }

  return activeElement;
}

/**
 * Base class for the `CovalentSideSheetContainer`. The base class does not implement
 * animations as these are left to implementers of the side-sheet container.
 */
@Directive()
export abstract class _CovalentSideSheetContainerBase extends BasePortalOutlet {
  protected _document: Document;

  /** The portal outlet inside of this container into which the side-sheet content will be loaded. */
  @ViewChild(CdkPortalOutlet, { static: true }) _portalOutlet!: CdkPortalOutlet;

  /** The class that traps and manages focus within the side-sheet. */
  private _focusTrap!: ConfigurableFocusTrap;

  /** Emits when an animation state changes. */
  _animationStateChanged = new EventEmitter<{
    state: 'opened' | 'opening' | 'closing' | 'closed';
    totalTime: number;
  }>();

  /** Element that was focused before the side-sheet was opened. Save this to restore upon close. */
  private _elementFocusedBeforeSideSheetWasOpened: HTMLElement | null = null;

  /**
   * Type of interaction that led to the side-sheet being closed. This is used to determine
   * whether the focus style will be applied when returning focus to its original location
   * after the side-sheet is closed.
   */
  _closeInteractionType: FocusOrigin | null = null;

  /** ID of the element that should be considered as the side-sheet's label. */
  _ariaLabelledBy: string | null;

  /** ID for the container DOM element. */
  _id!: string;

  constructor(
    protected _elementRef: ElementRef,
    protected _focusTrapFactory: ConfigurableFocusTrapFactory,
    protected _changeDetectorRef: ChangeDetectorRef,
    @Optional() @Inject(DOCUMENT) _document: any,
    /** The side-sheet configuration. */
    public _config: CovalentSideSheetConfig,
    private _focusMonitor?: FocusMonitor
  ) {
    super();
    this._ariaLabelledBy = _config.ariaLabelledBy || null;
    this._document = _document;
  }

  /** Starts the side-sheet exit animation. */
  abstract _startExitAnimation(): void;

  /** Initializes the side-sheet container with the attached content. */
  _initializeWithAttachedContent() {
    this._setupFocusTrap();
    // Save the previously focused element. This element will be re-focused
    // when the side-sheet closes.
    this._capturePreviouslyFocusedElement();
  }

  /**
   * Attach a ComponentPortal as content to this side-sheet container.
   * @param portal Portal to be attached as the side-sheet content.
   */
  attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T> {
    return this._portalOutlet.attachComponentPortal(portal);
  }

  /**
   * Attach a TemplatePortal as content to this side-sheet container.
   * @param portal Portal to be attached as the side-sheet content.
   */
  attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C> {
    return this._portalOutlet.attachTemplatePortal(portal);
  }

  /**
   * Attaches a DOM portal to the side-sheet container.
   * @param portal Portal to be attached.
   * @deprecated To be turned into a method.
   */
  override attachDomPortal = (portal: DomPortal) => {
    return this._portalOutlet.attachDomPortal(portal);
  };

  /** Moves focus back into the side-sheet if it was moved out. */
  _recaptureFocus() {
    if (!this._containsFocus()) {
      this._trapFocus();
    }
  }

  /**
   * Moves the focus inside the focus trap. When autoFocus is not set to 'side-sheet', if focus
   * cannot be moved then focus will go to the side-sheet container.
   */
  protected _trapFocus() {
    const element = this._elementRef.nativeElement;
    if (!this._config.autoFocus) {
      if (!this._containsFocus()) {
        element.focus();
      }
    } else {
      this._focusTrap
        .focusInitialElementWhenReady()
        .then((focusedSuccessfully) => {
          // If we weren't able to find a focusable element in the side-sheet, then focus the side-sheet
          // container instead.
          if (!focusedSuccessfully) {
            this._focusSideSheetContainer();
          }
        });
    }
  }

  /** Restores focus to the element that was focused before the side-sheet opened. */
  protected _restoreFocus() {
    const previousElement = this._elementFocusedBeforeSideSheetWasOpened;

    // We need the extra check, because IE can set the `activeElement` to null in some cases.
    if (
      this._config.restoreFocus &&
      previousElement &&
      typeof previousElement.focus === 'function'
    ) {
      const activeElement = _getFocusedElementPierceShadowDom();
      const element = this._elementRef.nativeElement;

      // Make sure that focus is still inside the side-sheet or is on the body (usually because a
      // non-focusable element like the backdrop was clicked) before moving it. It's possible that
      // the consumer moved it themselves before the animation was done, in which case we shouldn't
      // do anything.
      if (
        !activeElement ||
        activeElement === this._document.body ||
        activeElement === element ||
        element.contains(activeElement)
      ) {
        if (this._focusMonitor) {
          this._focusMonitor.focusVia(
            previousElement,
            this._closeInteractionType
          );
          this._closeInteractionType = null;
        } else {
          previousElement.focus();
        }
      }
    }

    if (this._focusTrap) {
      this._focusTrap.destroy();
    }
  }

  /** Sets up the focus trap. */
  private _setupFocusTrap() {
    this._focusTrap = this._focusTrapFactory.create(
      this._elementRef.nativeElement
    );
  }

  /** Captures the element that was focused before the side-sheet was opened. */
  private _capturePreviouslyFocusedElement() {
    if (this._document) {
      this._elementFocusedBeforeSideSheetWasOpened =
        _getFocusedElementPierceShadowDom();
    }
  }

  /** Focuses the side-sheet container. */
  private _focusSideSheetContainer() {
    // Note that there is no focus method when rendering on the server.
    if (this._elementRef.nativeElement.focus) {
      this._elementRef.nativeElement.focus();
    }
  }

  /** Returns whether focus is inside the side-sheet. */
  private _containsFocus() {
    const element = this._elementRef.nativeElement;
    const activeElement = _getFocusedElementPierceShadowDom();
    return element === activeElement || element.contains(activeElement);
  }
}

/**
 * Internal component that wraps the generated side-sheet content.
 * This animation below is the only reason for duplicating most of the Material dialog code
 */
@Component({
  selector: 'td-side-sheet-container',
  template: ` <ng-template cdkPortalOutlet></ng-template> `,
  styleUrls: ['side-sheet.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
  animations: [tdSideSheetAnimations.sideSheetContainer],
})
export class CovalentSideSheetContainerComponent extends _CovalentSideSheetContainerBase {
  /** State of the side-sheet animation. */
  _state: 'void' | 'enter' | 'exit' = 'enter';

  @HostBinding('class.td-side-sheet-container') tdSideSheetContainerClass =
    true;
  @HostBinding('tabindex') tabIndex = -1;
  @HostBinding('aria-modal') arialModal = true;
  @HostBinding('id') idAttr = this._id;
  @HostBinding('attr.role') roleAttr = this._config.role;
  @HostBinding('attr.aria-labelledby') arialLabelByAttr = this._config.ariaLabel
    ? null
    : this._ariaLabelledBy;
  @HostBinding('attr.aria-describedby') arialDescribeByAttr =
    this._config.ariaDescribedBy || null;
  @HostBinding('attr.aria-label') arialLabelAttr = this._config.ariaLabel;
  @HostBinding('@sideSheetContainer') get sideSheetAnimationState() {
    return this._state;
  }
  @HostListener('@sideSheetContainer.start', ['$event']) onAnimateStart(
    $event: AnimationEvent
  ) {
    this._onAnimationStart($event);
  }

  @HostListener('@sideSheetContainer.done', ['$event']) onAnimateDone(
    $event: AnimationEvent
  ) {
    this._onAnimationDone($event);
  }

  /** Callback, invoked whenever an animation on the host completes. */
  _onAnimationDone({ toState, totalTime }: AnimationEvent) {
    if (toState === 'enter') {
      this._trapFocus();
      this._animationStateChanged.next({ state: 'opened', totalTime });
    } else if (toState === 'exit') {
      this._restoreFocus();
      this._animationStateChanged.next({ state: 'closed', totalTime });
    }
  }

  /** Callback, invoked when an animation on the host starts. */
  _onAnimationStart({ toState, totalTime }: AnimationEvent) {
    if (toState === 'enter') {
      this._animationStateChanged.next({ state: 'opening', totalTime });
    } else if (toState === 'exit' || toState === 'void') {
      this._animationStateChanged.next({ state: 'closing', totalTime });
    }
  }

  /** Starts the side-sheet exit animation. */
  _startExitAnimation(): void {
    this._state = 'exit';
    this._changeDetectorRef.markForCheck();
  }
}
