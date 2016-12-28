import { Component, ViewContainerRef, AfterViewInit } from '@angular/core';

import { TdLoadingService, ILoadingOptions, LoadingType, LoadingMode } from '../../../../platform/core';

@Component({
  selector: 'loading-demo',
  styleUrls: ['./loading.component.scss' ],
  templateUrl: './loading.component.html',
})
export class LoadingDemoComponent implements AfterViewInit {

  private _intervalForDirective: number;
  private _intervalForMain: number;

  demo: {name?: string, description?: string} = {};
  demo2: {name?: string, description?: string} = {};
  replaceRegistered: number = 0;
  determinate: boolean = false;

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
    type: 'function(options: ILoadingOptions, viewContainerRef: ViewContainerRef)',
  }];

  constructor(viewContainer: ViewContainerRef,
              private _loadingService: TdLoadingService) {
    let options: ILoadingOptions = {
      name: 'test.overlay.determinate',
      type: LoadingType.Circular,
      mode: LoadingMode.Determinate,
    };
    this._loadingService.createOverlayComponent(options, viewContainer);
    let options2: ILoadingOptions = {
      name: 'test2.overlay.determinate',
      type: LoadingType.Linear,
      mode: LoadingMode.Determinate,
    };
    this._loadingService.createOverlayComponent(options2, viewContainer);
    options.name = 'test.overlay.indeterminate';
    options.mode = LoadingMode.Indeterminate;
    this._loadingService.createOverlayComponent(options, viewContainer);
    options2.name = 'test2.overlay.indeterminate';
    options2.mode = LoadingMode.Indeterminate;
    this._loadingService.createOverlayComponent(options2, viewContainer);
  }

  ngAfterViewInit(): void {
    this.registerLoadingDirective();
  }

  modeChange(): void {
    while (this.replaceRegistered > 0) {
      this.resolveLoadingDirective();
    }
    clearInterval(this._intervalForDirective);
  }

  registerCircleLoadingMain(): void {
    if (this.determinate) {
      this._loadingService.register('test.overlay.determinate');
      this.mockValuesForLoadingMain(LoadingType.Circular);
      setTimeout(() => {
        this._loadingService.resolve('test.overlay.determinate');
      }, 3000);
    } else {
      this._loadingService.register('test.overlay.indeterminate');
      setTimeout(() => {
        this._loadingService.resolve('test.overlay.indeterminate');
      }, 3000);
    }
  }

  registerLinearLoadingMain(): void {
    if (this.determinate) {
      this._loadingService.register('test2.overlay.determinate');
      this.mockValuesForLoadingMain(LoadingType.Linear);
      setTimeout(() => {
        this._loadingService.resolve('test2.overlay.determinate');
      }, 3000);
    } else {
      this._loadingService.register('test2.overlay.indeterminate');
      setTimeout(() => {
        this._loadingService.resolve('test2.overlay.indeterminate');
      }, 3000);
    }
  }

  registerLoadingDirective(): void {
    clearInterval(this._intervalForDirective);
    if (this.determinate) {
      this._loadingService.register('test.determinate');
      this._loadingService.register('test2.determinate');
      this.mockValuesForLoadingDirective();
    } else {
      this._loadingService.register('test.indeterminate');
      this._loadingService.register('test2.indeterminate');
    }
    this.replaceRegistered++;
  }

  resolveLoadingDirective(): void {
    clearInterval(this._intervalForDirective);
    if (this.replaceRegistered > 0) {
      this.replaceRegistered--;
    }
    if (this.determinate) {
      this._loadingService.resolve('test.determinate');
      this._loadingService.resolve('test2.determinate');
    } else {
      this._loadingService.resolve('test.indeterminate');
      this._loadingService.resolve('test2.indeterminate');
    }
  }

  mockValuesForLoadingDirective(): void {
    let value: number = 0;
    this._intervalForDirective = setInterval(() => {
      this._loadingService.setValue('test.determinate', value);
      this._loadingService.setValue('test2.determinate', value);
      value = value + 10;
      if (value > 100) {
        clearInterval(this._intervalForDirective);
      }
    }, 250);
  }

  mockValuesForLoadingMain(loadingType: LoadingType): void {
    let value: number = 0;
    this._intervalForMain = setInterval(() => {
      if (loadingType === LoadingType.Circular) {
        this._loadingService.setValue('test.overlay.determinate', value);
      } else {
        this._loadingService.setValue('test2.overlay.determinate', value);
      }
      value = value + 10;
      if (value > 100) {
        clearInterval(this._intervalForMain);
      }
    }, 250);
  }
}
