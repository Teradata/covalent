import { Component, ViewContainerRef, AfterViewInit, HostBinding, ChangeDetectionStrategy } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';

import { TdLoadingService, ITdLoadingConfig, LoadingType, LoadingMode } from '../../../../platform/core';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'loading-demo',
  styleUrls: ['./loading.component.scss' ],
  templateUrl: './loading.component.html',
  animations: [slideInDownAnimation],
})
export class LoadingDemoComponent implements AfterViewInit {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  loadingAttrs: Object[] = [{
    description: 'Name reference of the loading mask, used to register/resolve requests to the mask.',
    name: 'tdLoading',
    type: 'string',
  }, {
    description: 'Sets the type of loading mask depending on value. Defaults to [LoadingType.Circular | "circular"]',
    name: 'loadingType?',
    type: 'LoadingType or ["linear" | "circular"]',
  }, {
    description: `Sets the mode of loading mask depending on value.
                  Defaults to [LoadingMode.Indeterminate | "indeterminate"].`,
    name: 'loadingMode?',
    type: 'LoadingMode or ["determinate" | "indeterminate"]',
  }];

  loadingServiceMethods: Object[] = [{
    description: `Registers a request for the loading mask referenced by the name parameter.
                  Can optionally pass registers argument to set a number of register calls.`,
    name: 'register',
    type: 'function(name: string, registers: number = 1)',
  }, {
    description: `Resolves a request for the loading mask referenced by the name parameter.
                  Can optionally pass resolves argument to set a number of resolve calls.`,
    name: 'resolve',
    type: 'function(name: string, resolves: number = 1)',
  }, {
    description: `Set value on a loading mask referenced by the name parameter. 
                  Usage only available if its mode is 'determinate'.`,
    name: 'setValue',
    type: 'function(name: string, value: number)',
  }, {
    description: `Creates a fullscreen loading mask and attaches it to the viewContainerRef.
                  Only displayed when the mask has a request registered on it.`,
    name: 'createOverlayComponent',
    type: 'function(options: ITdLoadingConfig, viewContainerRef: ViewContainerRef)',
  }];

  overlayStarSyntax: boolean = false;

  constructor(private _loadingService: TdLoadingService) {
    this._loadingService.create({
      name: 'configFullscreenDemo',
      type: LoadingType.Linear,
      mode: LoadingMode.Indeterminate,
      color: 'accent',
    });
  }

  ngAfterViewInit(): void {
    this.startDirectives();
  }

  toggleDefaultFullscreenDemo(): void {
    this._loadingService.register();
    setTimeout(() => {
      this._loadingService.resolve();
    }, 3000);
  }

  toggleConfigFullscreenDemo(): void {
    this._loadingService.register('configFullscreenDemo');
    setTimeout(() => {
      this._loadingService.resolve('configFullscreenDemo');
    }, 3000);
  }

  toggleOverlayStarSyntax(): void {
    if (this.overlayStarSyntax) {
      this._loadingService.register('overlayStarSyntax');
    } else {
      this._loadingService.resolve('overlayStarSyntax');
    }
    this.overlayStarSyntax = !this.overlayStarSyntax;
  }

  toggleReplaceTemplateSyntax(): void {
    this._loadingService.register('replaceTemplateSyntax');
    let value: number = 0;
    let interval: number = setInterval(() => {
      this._loadingService.setValue('replaceTemplateSyntax', value);
      value = value + 10;
      if (value > 100) {
        clearInterval(interval);
      }
    }, 250);
    setTimeout(() => {
      this._loadingService.resolve('replaceTemplateSyntax');
    }, 3000);
  }

  startDirectives(): void {
    this._loadingService.register('overlayStarSyntax');
  }
}
