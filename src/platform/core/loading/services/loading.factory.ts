import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { Injector, ComponentRef, ViewContainerRef, TemplateRef } from '@angular/core';
import { TemplatePortal, Overlay, OverlayState, OverlayRef, OverlayOrigin, ComponentPortal } from '@angular/material';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { TdLoadingComponent, LoadingType, LoadingMode, LoadingStrategy, LoadingStyle } from '../loading.component';
import { ITdLoadingConfig} from './loading.service';

export interface IInternalLoadingOptions extends ITdLoadingConfig {
  height?: number;
  style?: LoadingStyle;
}

export interface ILoadingRef {
  observable: Observable<any>;
  componentRef: ComponentRef<any>;
  subject?: Subject<any>;
  times?: number;
}

@Injectable()
export class TdLoadingFactory {

  constructor(private _componentFactoryResolver: ComponentFactoryResolver,
              private _overlay: Overlay,
              private _injector: Injector) {
  }

  public createFullScreenComponent(options: ITdLoadingConfig): ILoadingRef {
    (<IInternalLoadingOptions>options).height = undefined;
    (<IInternalLoadingOptions>options).style = LoadingStyle.FullScreen;
    let loadingRef: ILoadingRef = this._initializeContext(options);
    let loading: boolean = false;
    let overlayRef: OverlayRef;
    loadingRef.observable
    .subscribe((registered: number) => {
      if (registered > 0 && !loading) {
        loading = true;
        overlayRef = this._createOverlay();
        loadingRef.componentRef = overlayRef.attach(new ComponentPortal(TdLoadingComponent));
        this._mapOptions(options, loadingRef.componentRef.instance);
        loadingRef.componentRef.instance.startInAnimation();
      } else if (registered <= 0 && loading) {
        loading = false;
        let subs: Subscription = loadingRef.componentRef.instance.startOutAnimation().subscribe(() => {
          subs.unsubscribe();
          loadingRef.componentRef.destroy();
          overlayRef.detach();
          overlayRef.dispose();
        });
      }
    });
    return loadingRef;
  }

  public createOverlayComponent(options: ITdLoadingConfig, viewContainerRef: ViewContainerRef,
                                templateRef: TemplateRef<Object>): ILoadingRef {
    (<IInternalLoadingOptions>options).height = undefined;
    (<IInternalLoadingOptions>options).style = LoadingStyle.Overlay;
    let loadingRef: ILoadingRef = this._createComponent(options);
    let loading: boolean = false;
    loadingRef.componentRef.instance.content = new TemplatePortal(templateRef, viewContainerRef);
    viewContainerRef.clear();
    viewContainerRef.insert(loadingRef.componentRef.hostView, 0);
    loadingRef.observable
    .subscribe((registered: number) => {
      if (registered > 0 && !loading) {
        loading = true;
        loadingRef.componentRef.instance.startInAnimation();
      } else if (registered <= 0 && loading) {
        loading = false;
        loadingRef.componentRef.instance.startOutAnimation();
      }
    });
    return loadingRef;
  }

  public createReplaceComponent(options: ITdLoadingConfig, viewContainerRef: ViewContainerRef,
                                templateRef: TemplateRef<Object>): ILoadingRef {
    let nativeElement: HTMLElement = <HTMLElement>templateRef.elementRef.nativeElement;
    (<IInternalLoadingOptions>options).height = nativeElement.nextElementSibling ?
      nativeElement.nextElementSibling.scrollHeight : undefined;
    (<IInternalLoadingOptions>options).style = LoadingStyle.None;
    let loadingRef: ILoadingRef = this._createComponent(options);
    let loading: boolean = false;
    loadingRef.observable
    .subscribe((registered: number) => {
      if (registered > 0 && !loading) {
        loading = true;
        let index: number = viewContainerRef.indexOf(loadingRef.componentRef.hostView);
        if (index < 0) {
          viewContainerRef.clear();
          viewContainerRef.insert(loadingRef.componentRef.hostView, 0);
        }
        loadingRef.componentRef.instance.startInAnimation();
      } else if (registered <= 0 && loading) {
        loading = false;
        let subs: Subscription = loadingRef.componentRef.instance.startOutAnimation().subscribe(() => {
          subs.unsubscribe();
          viewContainerRef.createEmbeddedView(templateRef);
          viewContainerRef.detach(viewContainerRef.indexOf(loadingRef.componentRef.hostView));
        });
      }
    });
    return loadingRef;
  }

  private _createOverlay(): OverlayRef {
    let state: OverlayState = new OverlayState();
    state.hasBackdrop = false;
    state.positionStrategy = this._overlay.position().global().centerHorizontally().centerVertically();
    return this._overlay.create(state);
  }

  private _createComponent(options: IInternalLoadingOptions): ILoadingRef {
    let compRef: ILoadingRef = this._initializeContext(options);
    compRef.componentRef = this._componentFactoryResolver
    .resolveComponentFactory(TdLoadingComponent).create(this._injector);
    this._mapOptions(options, compRef.componentRef.instance);
    return compRef;
  }

  private _initializeContext(options: IInternalLoadingOptions): ILoadingRef {
    let subject: Subject<any> = new Subject<any>();
    return {
      observable: subject.asObservable(),
      subject: subject,
      componentRef: undefined,
      times: 0,
    };
  }

  private _mapOptions(options: IInternalLoadingOptions, instance: TdLoadingComponent): void {
    instance.style = options.style;
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
