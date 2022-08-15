import { Directive, Input, OnInit, OnDestroy } from '@angular/core';
import { ViewContainerRef, TemplateRef } from '@angular/core';

import {
  LoadingType,
  LoadingMode,
  LoadingStrategy,
} from '../loading.component';
import { TdLoadingService } from '../services/loading.service';
import { ILoadingRef } from '../services/loading.factory';

/**
 * Context class for variable reference
 */
export class TdLoadingContext {
  public $implicit: any = undefined;
  public tdLoading: any = undefined;
}

// Constant for generation of the id for the next component
let TD_LOADING_NEXT_ID = 0;

@Directive({
  selector: '[tdLoading]',
})
export class TdLoadingDirective implements OnInit, OnDestroy {
  private _context: TdLoadingContext = new TdLoadingContext();
  private _loadingRef?: ILoadingRef;

  /**
   * tdLoading: string
   * Name reference of the loading mask, used to register/resolve requests to the mask.
   */
  @Input('tdLoading')
  name!: string;

  /**
   * tdLoadingUntil?: any
   * If its null, undefined or false it will be used to register requests to the mask.
   * Else if its any value that can be resolved as true, it will resolve the mask.
   * [name] is optional when using [until], but can still be used to register/resolve it manually.
   */
  @Input('tdLoadingUntil')
  set until(until: any) {
    if (!this.name) {
      this.name = 'td-loading-until-' + TD_LOADING_NEXT_ID++;
    }
    this._context.$implicit = this._context.tdLoading = until;
    if (!until) {
      this._loadingService.register(this.name);
    } else {
      this._loadingService.resolveAll(this.name);
    }
  }

  /**
   * tdLoadingType?: LoadingType or ['linear' | 'circular']
   * Sets the type of loading mask depending on value.
   * Defaults to [LoadingType.Circular | 'circular'].
   */
  @Input('tdLoadingType')
  type: LoadingType = LoadingType.Circular;

  /**
   * tdLoadingMode?: LoadingMode or ['determinate' | 'indeterminate']
   * Sets the mode of loading mask depending on value.
   * Defaults to [LoadingMode.Indeterminate | 'indeterminate'].
   */
  @Input('tdLoadingMode') mode: LoadingMode = LoadingMode.Indeterminate;

  /**
   * tdLoadingStrategy?: LoadingStrategy or ['replace' | 'overlay']
   * Sets the strategy of loading mask depending on value.
   * Defaults to [LoadingMode.Replace | 'replace'].
   */
  @Input('tdLoadingStrategy')
  strategy: LoadingStrategy.Overlay | LoadingStrategy.Replace =
    LoadingStrategy.Replace;

  /**
   * tdLoadingColor?: "primary" | "accent" | "warn"
   * Sets the theme color of the loading component. Defaults to "primary"
   */
  @Input('tdLoadingColor') color: 'primary' | 'accent' | 'warn' = 'primary';

  constructor(
    private _viewContainerRef: ViewContainerRef,
    private _templateRef: TemplateRef<TdLoadingContext>,
    private _loadingService: TdLoadingService
  ) {}

  /**
   * Registers component in the DOM, so it will be available when calling resolve/register.
   */
  ngOnInit(): void {
    this._registerComponent();
  }

  /**
   * Remove component when directive is destroyed.
   */
  ngOnDestroy(): void {
    this._loadingService.removeComponent(this.name);
    this._loadingRef = undefined;
  }

  /**
   * Creates [TdLoadingComponent] and attaches it to this directive's [ViewContainerRef].
   * Passes this directive's [TemplateRef] to modify DOM depending on loading `strategy`.
   */
  private _registerComponent(): void {
    if (!this.name) {
      throw new Error('Name is needed to register loading directive');
    }
    // Check if `TdLoadingComponent` has been created before trying to add one again.
    // There is a weird edge case when using `[routerLinkActive]` that calls the `ngOnInit` twice in a row
    if (!this._loadingRef) {
      this._loadingRef = this._loadingService.createComponent(
        {
          name: this.name,
          type: this.type,
          mode: this.mode,
          color: this.color,
          strategy: this.strategy,
        },
        this._viewContainerRef,
        this._templateRef,
        this._context
      );
    }
  }
}
