import {
  Injectable,
  ComponentFactoryResolver,
  Provider,
  SkipSelf,
  Optional,
  EmbeddedViewRef,
  inject,
} from '@angular/core';
import {
  Injector,
  ComponentRef,
  ViewContainerRef,
  TemplateRef,
} from '@angular/core';
import { TemplatePortal, ComponentPortal } from '@angular/cdk/portal';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';

import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

import { TdLoadingContext } from '../directives/loading.directive';
import { TdLoadingComponent, LoadingStyle } from '../loading.component';
import { ITdLoadingConfig } from './loading.service';

export interface IInternalLoadingOptions extends ITdLoadingConfig {
  height?: number;
  style?: LoadingStyle;
}

export interface ILoadingRef {
  observable: Observable<any>;
  componentRef?: ComponentRef<any>;
  subject: Subject<any>;
  times: number;
}

/**
 * NOTE: @internal usage only.
 */
@Injectable()
export class TdLoadingFactory {
  private _componentFactoryResolver = inject(ComponentFactoryResolver);
  private _overlay = inject(Overlay);
  private _injector = inject(Injector);

  /**
   * Uses material `Overlay` services to create a DOM element and attach the loading component
   * into it. Leveraging the state and configuration from it.
   *
   * Saves a reference in context to be called when registering/resolving the loading element.
   */
  public createFullScreenComponent(options: ITdLoadingConfig): ILoadingRef {
    (<IInternalLoadingOptions>options).height = undefined;
    (<IInternalLoadingOptions>options).style = LoadingStyle.FullScreen;
    const loadingRef: ILoadingRef = this._initializeContext();
    let loading = false;
    let overlayRef: OverlayRef;
    loadingRef.observable
      .pipe(distinctUntilChanged())
      .subscribe((registered: number) => {
        if (registered > 0 && !loading) {
          loading = true;
          overlayRef = this._createOverlay();
          loadingRef.componentRef = overlayRef.attach(
            new ComponentPortal(TdLoadingComponent),
          );
          this._mapOptions(options, loadingRef.componentRef?.instance);
          loadingRef.componentRef?.instance.show();
          loadingRef.componentRef?.changeDetectorRef.detectChanges();
        } else if (registered <= 0 && loading) {
          loading = false;
          loadingRef.componentRef?.instance.hide();
          loadingRef.componentRef?.destroy();
          overlayRef.detach();
          overlayRef.dispose();
        }
      });
    return loadingRef;
  }

  /**
   * Creates a loading component dynamically and attaches it into the given viewContainerRef.
   * Leverages TemplatePortals from material to inject the template inside of it so it fits
   * perfectly when overlaying it.
   *
   * Saves a reference in context to be called when registering/resolving the loading element.
   */
  public createOverlayComponent(
    options: ITdLoadingConfig,
    viewContainerRef: ViewContainerRef,
    templateRef: TemplateRef<object>,
  ): ILoadingRef {
    (<IInternalLoadingOptions>options).height = undefined;
    (<IInternalLoadingOptions>options).style = LoadingStyle.Overlay;
    const loadingRef: ILoadingRef = this._createComponent(options);
    let loading = false;

    if (loadingRef.componentRef) {
      loadingRef.componentRef.instance.content = new TemplatePortal(
        templateRef,
        viewContainerRef,
      );
      viewContainerRef.clear();
      viewContainerRef.insert(loadingRef.componentRef?.hostView, 0);
    }

    loadingRef.observable
      .pipe(distinctUntilChanged())
      .subscribe((registered: number) => {
        if (registered > 0 && !loading) {
          loading = true;
          loadingRef.componentRef?.instance.show();
        } else if (registered <= 0 && loading) {
          loading = false;
          loadingRef.componentRef?.instance.hide();
        }
      });
    return loadingRef;
  }

  /**
   * Creates a loading component dynamically and attaches it into the given viewContainerRef.
   * Replaces the template with the loading component depending if it was registered or resolved.
   *
   * Saves a reference in context to be called when registering/resolving the loading element.
   */
  public createReplaceComponent(
    options: ITdLoadingConfig,
    viewContainerRef: ViewContainerRef,
    templateRef: TemplateRef<object>,
    context: TdLoadingContext,
  ): ILoadingRef {
    const nativeElement: HTMLElement = <HTMLElement>(
      templateRef.elementRef.nativeElement
    );
    (<IInternalLoadingOptions>options).height = nativeElement.nextElementSibling
      ? nativeElement.nextElementSibling.scrollHeight
      : undefined;
    (<IInternalLoadingOptions>options).style = LoadingStyle.None;
    const loadingRef: ILoadingRef = this._createComponent(options);
    let loading = false;
    // passing context so when the template is attached, we can keep the reference of the variables
    const contentRef: EmbeddedViewRef<object> =
      viewContainerRef.createEmbeddedView(templateRef, context);
    loadingRef.observable
      .pipe(distinctUntilChanged())
      .subscribe((registered: number) => {
        if (registered > 0 && !loading && loadingRef.componentRef) {
          loading = true;
          // detach the content and attach the loader if loader is there
          const index: number = viewContainerRef.indexOf(
            loadingRef.componentRef.hostView,
          );
          if (index < 0) {
            viewContainerRef.detach(viewContainerRef.indexOf(contentRef));
            viewContainerRef.insert(loadingRef.componentRef.hostView, 0);
          }
          loadingRef.componentRef?.instance.show();
        } else if (registered <= 0 && loading && loadingRef.componentRef) {
          loading = false;
          loadingRef.componentRef?.instance.hide();
          // detach loader and attach the content if content is there
          const index: number = viewContainerRef.indexOf(contentRef);
          if (index < 0) {
            viewContainerRef.detach(
              viewContainerRef.indexOf(loadingRef.componentRef.hostView),
            );
            viewContainerRef.insert(contentRef, 0);
          }
          /**
           * Need to call "markForCheck" and "detectChanges" on attached template, so its detected by parent component when attached
           * with "OnPush" change detection
           */
          contentRef.detectChanges();
          contentRef.markForCheck();
        }
      });
    return loadingRef;
  }

  /**
   * Creates a fullscreen overlay for the loading usage.
   */
  private _createOverlay(): OverlayRef {
    const state: OverlayConfig = new OverlayConfig();
    state.hasBackdrop = false;
    state.positionStrategy = this._overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();
    return this._overlay.create(state);
  }

  /**
   * Creates a generic component dynamically waiting to be attached to a viewContainerRef.
   */
  private _createComponent(options: IInternalLoadingOptions): ILoadingRef {
    const compRef: ILoadingRef = this._initializeContext();
    compRef.componentRef = this._componentFactoryResolver
      .resolveComponentFactory(TdLoadingComponent)
      .create(this._injector);
    this._mapOptions(options, compRef.componentRef.instance);
    return compRef;
  }

  /**
   * Initialize context for loading component.
   */
  private _initializeContext(): ILoadingRef {
    const subject: Subject<any> = new Subject<any>();
    return {
      observable: subject.asObservable(),
      subject,
      componentRef: undefined,
      times: 0,
    };
  }

  /**
   * Maps configuration to the loading component instance.
   */
  private _mapOptions(
    options: IInternalLoadingOptions,
    instance: TdLoadingComponent,
  ): void {
    if (options.style) {
      instance.style = options.style;
    }

    if (options.type !== undefined) {
      instance.type = options.type;
    }
    if (options.height !== undefined) {
      instance.height = options.height;
    }
    if (options.mode !== undefined) {
      instance.mode = options.mode;
    }
    if (options.color !== undefined) {
      instance.color = options.color;
    }
  }
}

export function LOADING_FACTORY_PROVIDER_FACTORY(
  parent: TdLoadingFactory,
): TdLoadingFactory {
  return parent || new TdLoadingFactory();
}

export const LOADING_FACTORY_PROVIDER: Provider = {
  // If there is already a service available, use that. Otherwise, provide a new one.
  provide: TdLoadingFactory,
  deps: [
    [new Optional(), new SkipSelf(), TdLoadingFactory],
    ComponentFactoryResolver,
    Overlay,
    Injector,
  ],
  useFactory: LOADING_FACTORY_PROVIDER_FACTORY,
};
