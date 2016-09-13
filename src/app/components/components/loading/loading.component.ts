import { Component, ViewContainerRef, AfterViewInit } from '@angular/core';

import { TdLoadingService, ILoadingOptions, LoadingType } from '../../../../platform/core';

@Component({
  moduleId: module.id,
  selector: 'loading-demo',
  styleUrls: [ 'loading.component.css' ],
  templateUrl: 'loading.component.html',
})
export class LoadingDemoComponent implements AfterViewInit {

  demo: {name?: string, description?: string} = {};
  demo2: {name?: string, description?: string} = {};
  replaceRegistered: number = 0;

  loadingAttrs: Object[] = [{
    description: 'Name reference of the loading mask, used to register/resolve requests to the mask.',
    name: 'tdLoading',
    type: 'string',
  }, {
    description: 'Sets the type of loading mask depending on value. Defaults to [LoadingType.Circular | "circular"]',
    name: 'loadingType?',
    type: 'LoadingType or ["linear" | "circular"]',
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
    description: `Creates a fullscreen loading mask and attaches it to the viewContainerRef.
                  Only displayed when the mask has a request registered on it.`,
    name: 'createOverlayComponent',
    type: 'function(options: ILoadingOptions, viewContainerRef: ViewContainerRef)',
  }];

  constructor(viewContainer: ViewContainerRef,
              private _loadingService: TdLoadingService) {
    let options: ILoadingOptions = {
      name: 'test.overlay',
      type: LoadingType.Circular,
    };
    this._loadingService.createOverlayComponent(options, viewContainer);
    let options2: ILoadingOptions = {
      name: 'test.overlay2',
      type: LoadingType.Linear,
    };
    this._loadingService.createOverlayComponent(options2, viewContainer);
  }

  ngAfterViewInit(): void {
    this.registerLoadingReplace();
  }

  registerCircleLoadingOverlay(): void {
    this._loadingService.register('test.overlay');
    setTimeout(() => {
      this._loadingService.resolve('test.overlay');
    }, 3000);
  }

  registerLinearLoadingOverlay(): void {
    this._loadingService.register('test.overlay2');
    setTimeout(() => {
      this._loadingService.resolve('test.overlay2');
    }, 3000);
  }

  registerLoadingReplace(): void {
    this._loadingService.register('test');
    this._loadingService.register('test2');
    this.replaceRegistered++;
  }

  resolveLoadingReplace(): void {
    if (this.replaceRegistered > 0) {
      this.replaceRegistered--;
    }
    this._loadingService.resolve('test');
    this._loadingService.resolve('test2');
  }
}
