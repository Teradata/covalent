import { Directive, Input, OnInit, OnDestroy } from '@angular/core';
import { ViewContainerRef, TemplateRef } from '@angular/core';

import { LoadingType, LoadingMode, LoadingStrategy } from '../loading.component';
import { TdLoadingService, ILoadingOptions } from '../services/loading.service';

@Directive({
  selector: '[tdLoading]',
})
export class TdLoadingDirective implements OnInit, OnDestroy {

  private _type: LoadingType;
  private _mode: LoadingMode;
  private _strategy: LoadingStrategy;
  private _name: string;

  /**
   * tdLoading?: string
   * Name reference of the loading mask, used to register/resolve requests to the mask.
   */
  @Input('tdLoading')
  set name(name: string) {
    this._name = name;
  }

  /**
   * loadingType?: LoadingType or ['linear' | 'circular']
   * Sets the type of loading mask depending on value.
   * Defaults to [LoadingType.Circular | 'circular'].
   */
  @Input('loadingType')
  set typeDeprecated(type: LoadingType) {
    this.type = type;
  }
  @Input('tdLoadingType')
  set type(type: LoadingType) {
    switch (type) {
      case LoadingType.Linear:
        this._type = LoadingType.Linear;
        break;
      default:
        this._type = LoadingType.Circular;
        break;
    }
  }

  /**
   * LoadingMode?: LoadingMode or ['determinate' | 'indeterminate']
   * Sets the mode of loading mask depending on value.
   * Defaults to [LoadingMode.Indeterminate | 'indeterminate'].
   */
  @Input('loadingMode')
  set modeDeprecated(mode: LoadingMode) {
    this.mode = mode;
  }
  @Input('tdLoadingMode')
  set mode(mode: LoadingMode) {
    switch (mode) {
      case LoadingMode.Determinate:
        this._mode = LoadingMode.Determinate;
        break;
      default:
        this._mode = LoadingMode.Indeterminate;
        break;
    }
  }

  @Input('tdLoadingStrategy')
  set strategy(stategy: LoadingStrategy) {
    switch (stategy) {
      case LoadingStrategy.Overlay:
        this._strategy = LoadingStrategy.Overlay;
        break;
      default:
        this._strategy = LoadingStrategy.Replace;
        break;
    }
  }

  constructor(private _viewContainerRef: ViewContainerRef,
              private _templateRef: TemplateRef<Object>,
              private _loadingService: TdLoadingService) {}

  ngOnInit(): void {
    this._viewContainerRef.createEmbeddedView(this._templateRef);
    this._registerComponent();
  }

  ngOnDestroy(): void {
    this._loadingService.removeComponent(this._name);
  }

  /**
   * Creates [TdLoadingComponent] and attaches it to this directive's [ViewContainerRef].
   * Passes this directive's [TemplateRef] to detach/attach it from DOM when loading mask is on.
   */
  private _registerComponent(): void {
    if (!this._name) {
      throw 'Name is needed to register loading directive';
    }
    let options: ILoadingOptions = {
      name: this._name,
      type: this._type,
      mode: this._mode,
    };
    this._loadingService.createComponent(this._strategy, options, this._viewContainerRef, this._templateRef);
  }
}
