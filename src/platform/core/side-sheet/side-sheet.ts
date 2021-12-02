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
import { Overlay, OverlayConfig, OverlayRef, GlobalPositionStrategy } from '@angular/cdk/overlay';
import { ComponentPortal, ComponentType, TemplatePortal } from '@angular/cdk/portal';
import { MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, _MatDialogContainerBase } from '@angular/material/dialog';
import { CovalentSideSheetContainer, _CovalentSideSheetContainerBase } from './side-sheet-container';
import { Subject, Subscription, of } from 'rxjs';
import { Directionality } from '@angular/cdk/bidi';

import { CovalentSideSheetRef } from './side-sheet-ref';
import { CovalentSideSheetConfig } from './side-sheet.config';

@Directive()
export class _CovalentSideSheetBase<C extends _CovalentSideSheetContainerBase> implements OnDestroy {
  private _openSideSheetsAtThisLevel: CovalentSideSheetRef<any>[] = [];
  private readonly _afterAllClosedAtThisLevel = new Subject<void>();
  private readonly _afterOpenedAtThisLevel = new Subject<CovalentSideSheetRef<any>>();
  private _animationStateSubscriptions: Subscription;

  private defaultSidebarConfig = {
    minWidth: '400px',
  };

  constructor(
    private _overlay: Overlay,
    private _injector: Injector,
    private _defaultOptions: CovalentSideSheetConfig | undefined,
    private _parentSideSheet: _CovalentSideSheetBase<C> | undefined,
    private _sideSheetRefConstructor: Type<CovalentSideSheetRef<any>>,
    private _sideSheetContainerType: Type<C>,
    private _sideSheetDataToken: InjectionToken<any>,
  ) {}

  /** Keeps track of the currently-open side-sheets. */
  get openSideSheets(): CovalentSideSheetRef<any>[] {
    return this._parentSideSheet ? this._parentSideSheet.openSideSheets : this._openSideSheetsAtThisLevel;
  }

  open<T, D = any, R = any>(
    componentOrTemplateRef: ComponentType<T> | TemplateRef<T>,
    config?: CovalentSideSheetConfig<D>,
  ): CovalentSideSheetRef<T, R> {
    config = { ...this.defaultSidebarConfig, ...config, ...(this._defaultOptions || new CovalentSideSheetConfig()) };

    const overlayRef = this._createOverlay(config);
    const sideSheetContainer = this._attachSideSheetContainer(overlayRef, config);

    const sideSheetRef = this._attachSideSheetContent<T, R>(
      componentOrTemplateRef,
      sideSheetContainer,
      overlayRef,
      config,
    );

    this.openSideSheets.push(sideSheetRef);

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

  private _createOverlay<T>(config): OverlayRef {
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
    const positionStrategy = overlayRef.getConfig().positionStrategy as GlobalPositionStrategy;
    positionStrategy.right('0px');

    return overlayRef;
  }

  /**
   * Attaches a container to a side-sheets's already-created overlay.
   * @param overlay Reference to the side-sheet's underlying overlay.
   * @param config The side-sheet configuration.
   * @returns A promise resolving to a ComponentRef for the attached container.
   */
  private _attachSideSheetContainer(overlay: OverlayRef, config: CovalentSideSheetConfig): C {
    const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
    const injector = Injector.create({
      parent: userInjector || this._injector,
      providers: [{ provide: CovalentSideSheetConfig, useValue: config }],
    });

    const containerPortal = new ComponentPortal(
      this._sideSheetContainerType,
      config.viewContainerRef,
      injector,
      config.componentFactoryResolver,
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
    config: CovalentSideSheetConfig,
  ): CovalentSideSheetRef<T, R> {
    // Create a reference to the side-sheet we're creating in order to give the user a handle
    // to modify and close it.
    const sideSheetRef = new this._sideSheetRefConstructor(overlayRef, sideSheetContainer, config.id);

    if (componentOrTemplateRef instanceof TemplateRef) {
      sideSheetContainer.attachTemplatePortal(
        new TemplatePortal<T>(componentOrTemplateRef, null!, <any>{
          $implicit: config.data,
          sideSheetRef,
        }),
      );
    } else {
      const injector = this._createInjector<T>(config, sideSheetRef, sideSheetContainer);
      const contentRef = sideSheetContainer.attach<T>(
        new ComponentPortal(componentOrTemplateRef, config.viewContainerRef, injector),
      );
      sideSheetRef.componentInstance = contentRef.instance;
    }

    sideSheetRef.updateSize(config.width, config.height);

    return sideSheetRef;
  }

  private _createInjector<T>(
    config: CovalentSideSheetConfig,
    sideSheetRef: CovalentSideSheetRef<T>,
    sideSheetContainer: C,
  ): Injector {
    const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;

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
      (!userInjector || !userInjector.get<Directionality | null>(Directionality, null, InjectFlags.Optional))
    ) {
      providers.push({
        provide: Directionality,
        useValue: { value: config.direction, change: of() },
      });
    }

    return Injector.create({ parent: userInjector || this._injector, providers });
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
export class CovalentSideSheet extends _CovalentSideSheetBase<CovalentSideSheetContainer> {
  constructor(
    overlay: Overlay,
    injector: Injector,
    @Optional() @Inject(MAT_DIALOG_DEFAULT_OPTIONS) defaultOptions: CovalentSideSheetConfig,
    @Optional() @SkipSelf() parentSideSheet: CovalentSideSheet,
  ) {
    super(
      overlay,
      injector,
      defaultOptions,
      parentSideSheet,
      CovalentSideSheetRef,
      CovalentSideSheetContainer,
      MAT_DIALOG_DATA,
    );
  }
}
