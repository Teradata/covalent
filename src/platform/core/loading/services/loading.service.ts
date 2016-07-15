import { Injectable, ComponentResolver, ComponentFactory } from '@angular/core';
import { Injector, ComponentRef, ViewContainerRef, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { TdLoadingComponent, LoadingType } from '../loading.component';

export interface ILoadingOptions {
  name: string;
  type?: LoadingType;
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

  constructor(private _componentResolver: ComponentResolver,
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
    this._createComponent(options)
    .then((loadingRef: ILoadingRef) => {
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
    (<IInternalLoadingOptions>options).height = nativeElement.nextElementSibling.scrollHeight;
    (<IInternalLoadingOptions>options).overlay = false;
    this._createComponent(options)
    .then((loadingRef: ILoadingRef) => {
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
    });
  }

  /**
   * params:
   * - name: string
   * 
   * Resolves a request for the loading mask referenced by the name parameter.
   */
  public register(name: string): void {
    if (this._loadingSources[name]) {
      this._loadingSources[name].next(++this._context[name].times);
    }
  }

  /**
   * params:
   * - name: string
   * 
   * Registers a request for the loading mask referenced by the name parameter.
   */
  public resolve(name: string): void {
    if (this._loadingSources[name]) {
      let times: number = 0;
      if (this._context[name].times > 0) {
        times = --this._context[name].times;
      }
      this._loadingSources[name].next(times);
    }
  }

  /**
   * Creates a generic [TdLoadingComponent] and its context. 
   * Returns a promise that resolves to a [ILoadingRef] with the created [ComponentRef] and its referenced [Observable].
   */
  private _createComponent(options: IInternalLoadingOptions): Promise<ILoadingRef> {
    let name: string = options.name;
    if (!name) {
      throw 'Name is required for Loading Component.';
    }
    if (!this._context[name]) {
      this._context[name] = {};
    } else {
      throw 'Name duplication: Loading Component name conflict.';
    }
    return new Promise((resolve: Function) => {
      this._componentResolver.resolveComponent(TdLoadingComponent)
      .then((cf: ComponentFactory<any>) => {
        this._context[name].loadingRef = cf.create(this._injector);
        this._context[name].times = 0;
        this._mapOptions(options, this._context[name].loadingRef.instance);
        let compRef: ILoadingRef = {
          observable: this._registerLoadingComponent(name),
          ref: this._context[name].loadingRef,
        };
        resolve(compRef);
      });
    });
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
