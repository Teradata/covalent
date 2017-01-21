import { Directive, Input, OnInit, OnDestroy } from '@angular/core';
import { ViewContainerRef, TemplateRef } from '@angular/core';

import { LoadingType, LoadingMode, LoadingStrategy } from '../loading.component';
import { TdLoadingService } from '../services/loading.service';

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
   * @deprecated in 1.0.0-beta.1
   * 
   * Please use the `tdLoadingType` method.
   */
  @Input('loadingType')
  set typeDeprecated(type: LoadingType) {
    /* tslint:disable-next-line */
    console.warn("loadingType is deprecated.  Please use tdLoadingType instead");
    this.type = type;
  }
  /**
   * tdLoadingType?: LoadingType or ['linear' | 'circular']
   * Sets the type of loading mask depending on value.
   * Defaults to [LoadingType.Circular | 'circular'].
   */
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
   * @deprecated in 1.0.0-beta.1
   * 
   * Please use the `tdLoadingMode` method.
   */
  @Input('loadingMode')
  set modeDeprecated(mode: LoadingMode) {
    /* tslint:disable-next-line */
    console.warn("loadingMode is deprecated.  Please use tdLoadingMode instead");
    this.mode = mode;
  }
  /**
   * tdLoadingMode?: LoadingMode or ['determinate' | 'indeterminate']
   * Sets the mode of loading mask depending on value.
   * Defaults to [LoadingMode.Indeterminate | 'indeterminate'].
   */
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

  /**
   * tdLoadingStrategy?: LoadingStrategy or ['replace' | 'overlay']
   * Sets the strategy of loading mask depending on value.
   * Defaults to [LoadingMode.Replace | 'replace'].
   */
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

  /**
   * tdLoadingColor?: "primary" | "accent" | "warn"
   * Sets the theme color of the loading component. Defaults to "primary"
   */
  @Input('tdLoadingColor') color: 'primary' | 'accent' | 'warn' = 'primary';

  constructor(private _viewContainerRef: ViewContainerRef,
              private _templateRef: TemplateRef<Object>,
              private _loadingService: TdLoadingService) {}

  /**
   * Registers component in the DOM, so it will be available when calling resolve/register.
   */
  ngOnInit(): void {
    this._viewContainerRef.createEmbeddedView(this._templateRef);
    this._registerComponent();
  }

  /**
   * Remove component when directive is destroyed.
   */
  ngOnDestroy(): void {
    this._loadingService.removeComponent(this._name);
  }

  /**
   * Creates [TdLoadingComponent] and attaches it to this directive's [ViewContainerRef].
   * Passes this directive's [TemplateRef] to modify DOM depending on loading `strategy`.
   */
  private _registerComponent(): void {
    if (!this._name) {
      throw new Error('Name is needed to register loading directive');
    }
    this._loadingService.createComponent({
      name: this._name,
      type: this._type,
      mode: this._mode,
      color: this.color,
      strategy: this._strategy,
    }, this._viewContainerRef, this._templateRef);
  }
}
