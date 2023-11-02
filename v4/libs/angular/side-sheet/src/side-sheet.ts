/* tslint:disable */
import {
  Directive,
  Inject,
  Injectable,
  InjectFlags,
  InjectionToken,
  Injector,
  OnDestroy,
  Optional,
  SkipSelf,
  StaticProvider,
  TemplateRef,
  Type,
} from '@angular/core';
import {
  Overlay,
  OverlayConfig,
  OverlayRef,
  GlobalPositionStrategy,
} from '@angular/cdk/overlay';
import {
  ComponentPortal,
  ComponentType,
  TemplatePortal,
} from '@angular/cdk/portal';
import {
  MAT_DIALOG_DATA,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import { AnimationCurves, AnimationDurations } from '@angular/material/core';
import {
  CovalentSideSheetContainerComponent,
  _CovalentSideSheetContainerBase,
} from './side-sheet-container';
import { Subject, Subscription, of } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { Directionality } from '@angular/cdk/bidi';

import { CovalentSideSheetRef } from './side-sheet-ref';
import { SubPageMode, CovalentSideSheetConfig } from './side-sheet.config';

@Directive()
export class _CovalentSideSheetBase<C extends _CovalentSideSheetContainerBase>
  implements OnDestroy
{
  private _openSideSheetsAtThisLevel: CovalentSideSheetRef<unknown>[] = [];
  private readonly _afterAllClosedAtThisLevel = new Subject<void>();
  private readonly _afterOpenedAtThisLevel = new Subject<
    CovalentSideSheetRef<unknown>
  >();
  private _animationStateSubscriptions!: Subscription;

  private defaultSidebarConfig = {
    minWidth: '400px',
    maxWidth: '100vw',
  };

  constructor(
    private _overlay: Overlay,
    private _injector: Injector,
    private _defaultOptions: CovalentSideSheetConfig | undefined,
    private _parentSideSheet: _CovalentSideSheetBase<C> | undefined,
    private _sideSheetRefConstructor: Type<CovalentSideSheetRef<any>>,
    private _sideSheetContainerType: Type<C>,
    private _sideSheetDataToken: InjectionToken<unknown>
  ) {}

  /** Keeps track of the currently-open side-sheets. */
  get openSideSheets(): CovalentSideSheetRef<unknown>[] {
    return this._parentSideSheet
      ? this._parentSideSheet.openSideSheets
      : this._openSideSheetsAtThisLevel;
  }

  open<T, D = unknown, R = unknown>(
    componentOrTemplateRef: ComponentType<T> | TemplateRef<T>,
    config?: CovalentSideSheetConfig<D>
  ): CovalentSideSheetRef<T, R> {
    config = {
      ...(this._defaultOptions || new CovalentSideSheetConfig()),
      ...this.defaultSidebarConfig,
      ...config,
    };

    const overlayRef = this._createOverlay(config);
    const sideSheetContainer = this._attachSideSheetContainer(
      overlayRef,
      config
    );
    const sideSheetRef = this._attachSideSheetContent<T, R>(
      componentOrTemplateRef,
      sideSheetContainer,
      overlayRef,
      config
    );
    const prevSideSheetRef: CovalentSideSheetRef<unknown> =
      this.openSideSheets.slice(-1)[0];
    const prevOverlayRef = prevSideSheetRef?.overlayRef;

    if (
      prevOverlayRef?.overlayElement &&
      config.subPageMode !== SubPageMode.none
    ) {
      prevOverlayRef.overlayElement.style.transition = `${AnimationDurations.COMPLEX} ${AnimationCurves.DECELERATION_CURVE}`;
      if (config.subPageMode === SubPageMode.pushed) {
        // Animate previous side sheet to full width
        prevOverlayRef.overlayElement.style.minWidth = `${
          (window as any).innerWidth
        }px`;
      } else if (config.subPageMode === SubPageMode.shifted) {
        // Animate previous side sheet to current sidesheet width + 200px
        prevOverlayRef.overlayElement.style.minWidth = `${
          sideSheetRef.overlayRef.overlayElement.offsetWidth + 200
        }px`;
      }
    }

    // Revert the previous side sheet config & size
    sideSheetRef._containerInstance._animationStateChanged
      .pipe(
        filter(
          (event) =>
            event.state === 'closing' && !!(prevSideSheetRef && prevOverlayRef)
        ),
        take(1)
      )
      .subscribe(() => {
        prevOverlayRef.overlayElement.style.transition = `${AnimationDurations.EXITING} ${AnimationCurves.DECELERATION_CURVE}`;
        prevSideSheetRef.updateSize();
      });

    // Add new side sheet to open list
    this.openSideSheets.push(sideSheetRef);

    // Remove side sheet ref after closed
    sideSheetRef
      .afterClosed()
      .pipe(take(1))
      .subscribe(() => this._removeOpenSideSheet(sideSheetRef));

    // Notify the side-sheet container that the content has been attached.
    sideSheetContainer._initializeWithAttachedContent();

    return sideSheetRef;
  }

  ngOnDestroy() {
    // Only close the side-sheets at this level on destroy
    // since the parent service may still be active.
    this._closeSideSheets(this._openSideSheetsAtThisLevel);
    this._afterAllClosedAtThisLevel.complete();
    this._afterOpenedAtThisLevel.complete();
    // Clean up any subscriptions to side-sheet that never finished opening.
    if (this._animationStateSubscriptions) {
      this._animationStateSubscriptions.unsubscribe();
    }
  }

  /**
   * Closes all of the currently-open side-sheets.
   */
  closeAll(): void {
    this._closeSideSheets(this.openSideSheets);
  }

  private _createOverlay<T>(config: CovalentSideSheetConfig): OverlayRef {
    const overlayConfig = new OverlayConfig({
      positionStrategy: this._overlay.position().global(),
      scrollStrategy: this._overlay.scrollStrategies.block(),
      panelClass: config.panelClass,
      hasBackdrop: config.hasBackdrop,
      direction: config.direction,
      minWidth: config.minWidth,
      minHeight: config.minHeight,
      maxWidth: config.maxWidth,
    });
    const overlayRef = this._overlay.create(overlayConfig);
    const positionStrategy = overlayRef.getConfig()
      .positionStrategy as GlobalPositionStrategy;
    positionStrategy.right('0px');

    return overlayRef;
  }

  /**
   * Attaches a container to a side-sheets's already-created overlay.
   * @param overlay Reference to the side-sheet's underlying overlay.
   * @param config The side-sheet configuration.
   * @returns A promise resolving to a ComponentRef for the attached container.
   */
  private _attachSideSheetContainer(
    overlay: OverlayRef,
    config: CovalentSideSheetConfig
  ): C {
    const userInjector =
      config && config.viewContainerRef && config.viewContainerRef.injector;
    const injector = Injector.create({
      parent: userInjector || this._injector,
      providers: [{ provide: CovalentSideSheetConfig, useValue: config }],
    });

    const containerPortal = new ComponentPortal(
      this._sideSheetContainerType,
      config.viewContainerRef,
      injector,
      config.componentFactoryResolver
    );
    const containerRef = overlay.attach<C>(containerPortal);

    return containerRef.instance;
  }

  /**
   * Attaches the user-provided component to the already-created side sheet container.
   * @param componentOrTemplateRef The type of component being loaded into the side-sheet,
   *     or a TemplateRef to instantiate as the content.
   * @param dialogContainer Reference to the wrapping side-sheet container.
   * @param overlayRef Reference to the overlay in which the side-sheet resides.
   * @param config The side-sheet configuration.
   * @returns A promise resolving to the CovalentSideSheetRef that should be returned to the user.
   */
  private _attachSideSheetContent<T, R>(
    componentOrTemplateRef: ComponentType<T> | TemplateRef<T>,
    sideSheetContainer: C,
    overlayRef: OverlayRef,
    config: CovalentSideSheetConfig
  ): CovalentSideSheetRef<T, R> {
    // Create a reference to the side-sheet we're creating in order to give the user a handle
    // to modify and close it.
    const sideSheetRef = new this._sideSheetRefConstructor(
      overlayRef,
      sideSheetContainer,
      config.id
    );

    if (componentOrTemplateRef instanceof TemplateRef) {
      sideSheetContainer.attachTemplatePortal(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        new TemplatePortal<T>(componentOrTemplateRef, null!, <any>{
          $implicit: config.data,
          sideSheetRef,
        })
      );
    } else {
      const injector = this._createInjector<T>(
        config,
        sideSheetRef,
        sideSheetContainer
      );
      const contentRef = sideSheetContainer.attach<T>(
        new ComponentPortal(
          componentOrTemplateRef,
          config.viewContainerRef,
          injector
        )
      );
      sideSheetRef.componentInstance = contentRef.instance;
    }

    sideSheetRef.updateSize(config.width, config.height);

    return sideSheetRef;
  }

  private _createInjector<T>(
    config: CovalentSideSheetConfig,
    sideSheetRef: CovalentSideSheetRef<T>,
    sideSheetContainer: C
  ): Injector {
    const userInjector =
      config && config.viewContainerRef && config.viewContainerRef.injector;

    // The side-sheet container should be provided as the side-sheet container and the side-sheet's
    // content are created out of the same `ViewContainerRef` and as such, are siblings
    // for injector purposes. To allow the hierarchy that is expected, the side-sheet
    // container is explicitly provided in the injector.
    const providers: StaticProvider[] = [
      { provide: this._sideSheetContainerType, useValue: sideSheetContainer },
      { provide: this._sideSheetDataToken, useValue: config.data },
      { provide: this._sideSheetRefConstructor, useValue: sideSheetRef },
    ];

    if (
      config.direction &&
      (!userInjector ||
        !userInjector.get<Directionality | null>(
          Directionality,
          null,
          InjectFlags.Optional
        ))
    ) {
      providers.push({
        provide: Directionality,
        useValue: { value: config.direction, change: of() },
      });
    }

    return Injector.create({
      parent: userInjector || this._injector,
      providers,
    });
  }

  /**
   * Removes a side sheet from the array of open side sheets.
   * @param sideSheetRef Side Sheet to be removed.
   */
  private _removeOpenSideSheet(sideSheetRef: CovalentSideSheetRef<unknown>) {
    const index = this.openSideSheets.indexOf(sideSheetRef);

    if (index > -1) {
      this.openSideSheets.splice(index, 1);
    }
  }

  /** Closes all of the side-sheet in an array. */
  private _closeSideSheets(sideSheets: CovalentSideSheetRef<any>[]) {
    let i = sideSheets.length;

    while (i--) {
      sideSheets[i].close();
    }
  }
}

/**
 * Service to open Covalent Design side-sheet.
 */
@Injectable()
export class CovalentSideSheet extends _CovalentSideSheetBase<CovalentSideSheetContainerComponent> {
  constructor(
    overlay: Overlay,
    injector: Injector,
    @Optional()
    @Inject(MAT_DIALOG_DEFAULT_OPTIONS)
    defaultOptions: CovalentSideSheetConfig,
    @Optional() @SkipSelf() parentSideSheet: CovalentSideSheet
  ) {
    super(
      overlay,
      injector,
      defaultOptions,
      parentSideSheet,
      CovalentSideSheetRef,
      CovalentSideSheetContainerComponent,
      MAT_DIALOG_DATA
    );
  }
}
