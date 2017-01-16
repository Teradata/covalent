import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { Injector, ComponentRef, ViewContainerRef, TemplateRef } from '@angular/core';
import { TemplatePortal, Overlay, OverlayState, OverlayRef, OverlayOrigin, ComponentPortal } from '@angular/material';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { TdLoadingComponent, LoadingType, LoadingMode, LoadingStrategy } from '../loading.component';

export enum LoadingStyle {
  FullScreen = <any>'fullscreen',
  Overlay = <any>'overlay',
  None = <any>'none',
}

export interface ILoadingOptions {
  name: string;
  type?: LoadingType;
  mode?: LoadingMode;
}

interface IInternalLoadingOptions extends ILoadingOptions {
  height?: number;
  style?: LoadingStyle;
}

interface ILoadingRef {
  observable: Observable<any>;
  componentRef: ComponentRef<any>;
  subject?: Subject<any>;
  times?: number;
}

@Injectable()
export class TdLoadingService {

  private _context: {[key: string]: ILoadingRef} = {};

  constructor(private _componentFactoryResolver: ComponentFactoryResolver,
              private _overlay: Overlay,
              private _injector: Injector) {
  }

  createComponent(strategy: LoadingStrategy, options: ILoadingOptions, viewContainerRef: ViewContainerRef,
                  templateRef: TemplateRef<Object>): void {
    if (strategy === LoadingStrategy.Overlay) {
      this._context[options.name] = this.createOverlayComponent(options, viewContainerRef, templateRef);
    } else {
      this._context[options.name] = this.createReplaceComponent(options, viewContainerRef, templateRef);
    }
  }

  public createFullScreenComponent(options: ILoadingOptions): void {
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
    this._context[options.name] = loadingRef;
  }

  /**
   * params:
   * - options: ILoadingOptions {
   *     name: string;
   *     type?: LoadingType;
   * }
   * - viewContainerRef: ViewContainerRef
   *
   * Creates an fullscreen loading mask and attaches it to the viewContainerRef.
   * Only displayed when the mask has a request registered on it.
   */
  public createOverlayComponent(options: ILoadingOptions, viewContainerRef: ViewContainerRef,
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
    this._context[options.name] = loadingRef;
    return loadingRef;
  }

  /**
   * params:
   * - options: ILoadingOptions {
   *     name: string;
   *     type?: LoadingType;
   * }
   * - viewContainerRef: ViewContainerRef
   * - templateRef: TemplateRef<Object>
   *
   * Creates an replace loading mask and attaches it to the viewContainerRef.
   * Replaces the templateRef with the mask when a request is registered on it.
   */
  public createReplaceComponent(options: ILoadingOptions, viewContainerRef: ViewContainerRef,
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
    this._context[options.name] = loadingRef;
    return loadingRef;
  }

  /**
   * params:
   * - name: string
   * 
   * Removes loading mask from service context.
   */
  public removeComponent(name: string): void {
    if (this._context[name]) {
      this._context[name].subject.unsubscribe();
      this._context[name].componentRef.destroy();
      this._context[name] = undefined;
      delete this._context[name];
    }
  }

  /**
   * params:
   * - name: string
   * - registers?: number
   * returns: true if successful
   * 
   * Resolves a request for the loading mask referenced by the name parameter.
   * Can optionally pass registers argument to set a number of register calls.
   */
  public register(name: string, registers: number = 1): boolean {
    if (this._context[name]) {
      registers = registers < 1 ? 1 : registers;
      this._context[name].times += registers;
      this._context[name].subject.next(this._context[name].times);
      return true;
    }
    return false;
  }

  /**
   * params:
   * - name: string
   * - resolves?: number
   * returns: true if successful
   * 
   * Registers a request for the loading mask referenced by the name parameter.
   * Can optionally pass resolves argument to set a number of resolve calls.
   */
  public resolve(name: string, resolves: number = 1): boolean {
    if (this._context[name]) {
      resolves = resolves < 1 ? 1 : resolves;
      if (this._context[name].times > 0) {
        let times: number = this._context[name].times;
        times -= resolves;
        this._context[name].times = times < 0 ? 0 : times;
      }
      this._context[name].subject.next(this._context[name].times);
      return true;
    }
    return false;
  }

  /**
   * params:
   * - name: string
   * - value: number
   * returns: true if successful
   * 
   * Set value on a loading mask referenced by the name parameter.
   * Usage only available if its mode is 'determinate' and if loading is showing.
   */
  public setValue(name: string, value: number): boolean {
    if (this._context[name]) {
      let instance: TdLoadingComponent = this._context[name].componentRef.instance;
      if (instance.mode === LoadingMode.Determinate && instance.animation) {
        instance.value = value;
        return true;
      }
    }
    return false;
  }

  private _createOverlay(): OverlayRef {
    let state: OverlayState = new OverlayState();
    state.hasBackdrop = false;
    state.positionStrategy = this._overlay.position().global().centerHorizontally().centerVertically();
    return this._overlay.create(state);
  }

  /**
   * Creates a generic [TdLoadingComponent] and its context. 
   * Returns a promise that resolves to a [ILoadingRef] with the created [ComponentRef] and its referenced [Observable].
   */
  private _createComponent(options: IInternalLoadingOptions): ILoadingRef {
    let compRef: ILoadingRef = this._initializeContext(options);
    compRef.componentRef = this._componentFactoryResolver
    .resolveComponentFactory(TdLoadingComponent).create(this._injector);
    this._mapOptions(options, compRef.componentRef.instance);
    return compRef;
  }

  private _initializeContext(options: IInternalLoadingOptions): ILoadingRef {
    let name: string = options.name;
    if (!name) {
      throw 'Name is required for Loading Component.';
    }
    if (this._context[name] && !(options.style === LoadingStyle.FullScreen)) {
      throw `Name duplication: Loading  Component name conflict with ${name}.`;
    }
    let subject: Subject<any> = new Subject<any>();
    return {
      observable: subject.asObservable(),
      subject: subject,
      componentRef: undefined,
      times: 0,
    };
  }

  /**
   * Maps the [IInternalLoadingOptions] object to the [TdLoadingComponent] instance.
   */
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
  }
}
