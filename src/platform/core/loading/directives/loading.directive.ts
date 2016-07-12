import { Directive, Input, OnInit } from '@angular/core';
import { ViewContainerRef, TemplateRef } from '@angular/core';

import { LoadingType } from '../loading.component';
import { TdLoadingService, ILoadingOptions } from '../services/loading.service';

@Directive({
  selector: '[tdLoading]',
})
export class TdLoadingDirective implements OnInit {

  private _type: LoadingType;
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

  constructor(private _viewContainer: ViewContainerRef, private _templateRef: TemplateRef<Object>,
              private _loadingService: TdLoadingService) {
    this._viewContainer.createEmbeddedView(this._templateRef);
  }

  ngOnInit(): void {
    this._registerComponent();
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
    };
    this._loadingService.createReplaceComponent(options, this._viewContainer, this._templateRef);
  }
}
