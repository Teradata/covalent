import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { Injector, ComponentRef, ViewContainerRef, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { TdLoadingComponent, LoadingType, LoadingMode } from '../loading.component';

export interface ILoadingOptions {
  name: string;
  type?: LoadingType;
  mode?: LoadingMode;
}

interface IInternalLoadingOptions extends ILoadingOptions {
  height?: number;
  overlay?: boolean;
}

interface ILoadingRef {
  observable: Observable<any>;
  ref: ComponentRef<any>;
}

@Injectable()
export class TdLoadingService {

  private _context: {[key: string]: {times?: number, loadingRef?: ComponentRef<any>}} = {};
  private _loadingSources: {[key: string]: Subject<any>} = {};
  private _loadingObservables: {[key: string]: Observable<any>} = {};

  constructor(private _componentFactoryResolver: ComponentFactoryResolver,
              private _injector: Injector) {
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
  public createOverlayComponent(options: ILoadingOptions, viewContainerRef: ViewContainerRef): void {
    (<IInternalLoadingOptions>options).height = undefined;
    (<IInternalLoadingOptions>options).overlay = true;
    let loadingRef: ILoadingRef = this._createComponent(options);
    let loading: boolean = false;
    loadingRef.observable
    .subscribe((registered: number) => {
      let instance: TdLoadingComponent = loadingRef.ref.instance;
      if (registered > 0 && !loading) {
        loading = true;
        viewContainerRef.insert(loadingRef.ref.hostView, 0);
        instance.startInAnimation();
      } else if (registered <= 0 && loading) {
        loading = false;
        let subs: Subscription = instance.startOutAnimation().subscribe(() => {
          subs.unsubscribe();
          viewContainerRef.detach(viewContainerRef.indexOf(loadingRef.ref.hostView));
        });
      }
    });
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
                                templateRef: TemplateRef<Object>): void {
    let nativeElement: HTMLElement = <HTMLElement>templateRef.elementRef.nativeElement;
    (<IInternalLoadingOptions>options).height = nativeElement.nextElementSibling ?
      nativeElement.nextElementSibling.scrollHeight : undefined;
    (<IInternalLoadingOptions>options).overlay = false;
    let loadingRef: ILoadingRef = this._createComponent(options);
    let loading: boolean = false;
    loadingRef.observable
    .subscribe((registered: number) => {
      let instance: TdLoadingComponent = loadingRef.ref.instance;
      if (registered > 0 && !loading) {
        loading = true;
        let index: number = viewContainerRef.indexOf(loadingRef.ref.hostView);
        if (index < 0) {
          viewContainerRef.clear();
          viewContainerRef.insert(loadingRef.ref.hostView, 0);
        }
        instance.startInAnimation();
      } else if (registered <= 0 && loading) {
        loading = false;
        let subs: Subscription = instance.startOutAnimation().subscribe(() => {
          subs.unsubscribe();
          viewContainerRef.createEmbeddedView(templateRef);
          viewContainerRef.detach(viewContainerRef.indexOf(loadingRef.ref.hostView));
        });
      }
    });
  }

  /**
   * params:
   * - name: string
   * 
   * Removes loading mask from service context.
   */
  public removeComponent(name: string): void {
    if (this._context[name]) {
      this._loadingSources[name] = undefined;
      delete this._loadingSources[name];
      this._context[name].loadingRef.destroy();
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
    if (this._loadingSources[name]) {
      registers = registers < 1 ? 1 : registers;
      this._context[name].times += registers;
      this._loadingSources[name].next(this._context[name].times);
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
    if (this._loadingSources[name]) {
      resolves = resolves < 1 ? 1 : resolves;
      if (this._context[name].times > 0) {
        let times: number = this._context[name].times;
        times -= resolves;
        this._context[name].times = times < 0 ? 0 : times;
      }
      this._loadingSources[name].next(this._context[name].times);
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
    if (this._loadingSources[name]) {
      let instance: TdLoadingComponent = this._context[name].loadingRef.instance;
      if (instance.mode === LoadingMode.Determinate && !instance.animation) {
        instance.value = value;
        return true;
      }
    }
    return false;
  }

  /**
   * Creates a generic [TdLoadingComponent] and its context. 
   * Returns a promise that resolves to a [ILoadingRef] with the created [ComponentRef] and its referenced [Observable].
   */
  private _createComponent(options: IInternalLoadingOptions): ILoadingRef {
    let name: string = options.name;
    if (!name) {
      throw 'Name is required for Loading Component.';
    }
    if (!this._context[name] || options.overlay) {
      this._context[name] = {};
    } else {
      throw `Name duplication: Loading  Component name conflict with ${name}.`;
    }
    this._context[name].loadingRef = this._componentFactoryResolver
    .resolveComponentFactory(TdLoadingComponent).create(this._injector);
    this._context[name].times = 0;
    this._mapOptions(options, this._context[name].loadingRef.instance);
    let compRef: ILoadingRef = {
      observable: this._registerLoadingComponent(name),
      ref: this._context[name].loadingRef,
    };
    return compRef;
  }

  /**
   * Maps the [IInternalLoadingOptions] object to the [TdLoadingComponent] instance.
   */
  private _mapOptions(options: IInternalLoadingOptions, instance: TdLoadingComponent): void {
    instance.overlay = options.overlay;
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

  /**
   * Creates an observable for the parameter name reference, and returns it.
   */
  private _registerLoadingComponent(name: string): Observable<any> {
    this._loadingSources[name] = new Subject<any>();
    this._loadingObservables[name] = this._loadingSources[name].asObservable();
    return this._loadingObservables[name];
  }
}
