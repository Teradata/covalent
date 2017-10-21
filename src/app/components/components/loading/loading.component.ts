import { Component, ViewContainerRef, OnInit, HostBinding, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

import { slideInDownAnimation } from '../../../app.animations';

import { TdLoadingService, ITdLoadingConfig, LoadingType, LoadingMode } from '../../../../platform/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'loading-demo',
  styleUrls: ['./loading.component.scss' ],
  templateUrl: './loading.component.html',
  animations: [slideInDownAnimation],
})
export class LoadingDemoComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  loadingAttrs: Object[] = [{
    description: 'Name reference of the loading mask, used to register/resolve requests to the mask.',
    name: 'tdLoading',
    type: 'string',
  }, {
    description: 'Sets the type of loading mask depending on value. Defaults to [LoadingType.Circular | "circular"]',
    name: 'tdLoadingType?',
    type: 'LoadingType or ["linear" | "circular"]',
  }, {
    description: `Sets the mode of loading mask depending on value.
                  Defaults to [LoadingMode.Indeterminate | "indeterminate"].`,
    name: 'tdLoadingMode?',
    type: 'LoadingMode or ["determinate" | "indeterminate"]',
  }, {
    description: `Sets the strategy of loading mask depending on value.
                  Defaults to [LoadingMode.Replace | "replace"]`,
    name: 'tdLoadingStrategy?',
    type: 'LoadingStrategy or ["replace" | "overlay"]',
  }, {
    description: `Sets the theme color of the loading component. 
                  Defaults to "primary"`,
    name: 'tdLoadingColor?',
    type: '"primary" | "accent" | "warn"',
  }, {
    description: `If its null, undefined or false it will be used to register requests to the mask.
                  Else if its any value that can be resolved as true, it will resolve the mask.`,
    additionalDescription: `[name] is optional when using [until], but can still be used to register/resolve it manually.`,
    name: 'tdLoadingUtil?',
    type: 'any',
  }];

  loadingServiceMethods: Object[] = [{
    description: `Registers a request for the loading mask referenced by the name parameter.
                  Can optionally pass registers argument to set a number of register calls.
                  If no paramemeters are used, then default main mask will be used.`,
    name: 'register',
    type: 'function(name?: string, registers: number = 1)',
  }, {
    description: `Resolves a request for the loading mask referenced by the name parameter.
                  Can optionally pass resolves argument to set a number of resolve calls.
                  If no paramemeters are used, then default main mask will be used.`,
    name: 'resolve',
    type: 'function(name?: string, resolves: number = 1)',
  }, {
    description: `Resolves all requests for the loading mask referenced by the name parameter.
                  If no paramemeters are used, then default main mask will be used.`,
    name: 'resolveAll',
    type: 'function(name?: string)',
  }, {
    description: `Set value on a loading mask referenced by the name parameter. 
                  Usage only available if its mode is 'determinate'.`,
    name: 'setValue',
    type: 'function(name: string, value: number)',
  }, {
    description: `Creates a fullscreen loading mask and attaches it to the DOM with the given configuration.
                  Only displayed when the mask has a request registered on it.`,
    name: 'create',
    type: 'function(options: ITdLoadingConfig)',
  }];

  itemList: any[] = [
    {label: 'Light', value: true},
    {label: 'Console', value: false},
    {label: 'T.V.', value: true}];

  loading: boolean = false;
  listObservable: Observable<any[]>;

  replaceTemplateSyntaxDisabled: boolean = false;
  listObservableDisabled: boolean = false;

  overlayStarSyntax: boolean = false;

  overlayDemo: any = {
    name: '',
    description: '',
  };

  replaceDemo: any = {
    name: '',
    select: '',
    description: '',
  };

  untilOverlayDemo: any = {
    name: '',
    description: '',
  };

  constructor(private _loadingService: TdLoadingService) {
    this._loadingService.create({
      name: 'configFullscreenDemo',
      type: LoadingType.Linear,
      mode: LoadingMode.Indeterminate,
      color: 'accent',
    });
  }

  ngOnInit(): void {
    this.startDirectives();
  }

  toggleDefaultFullscreenDemo(): void {
    this._loadingService.register();
    setTimeout(() => {
      this._loadingService.resolve();
    }, 1500);
  }

  toggleConfigFullscreenDemo(): void {
    this._loadingService.register('configFullscreenDemo');
    setTimeout(() => {
      this._loadingService.resolve('configFullscreenDemo');
    }, 1500);
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
    this.replaceTemplateSyntaxDisabled = true;
    this._loadingService.register('replaceTemplateSyntax');
    let value: number = 0;
    let interval: any = setInterval(() => {
      this._loadingService.setValue('replaceTemplateSyntax', value);
      value = value + 10;
      if (value > 100) {
        clearInterval(interval);
      }
    }, 250);
    setTimeout(() => {
      this._loadingService.resolve('replaceTemplateSyntax');
      this.replaceTemplateSyntaxDisabled = false;
    }, 3000);
  }

  startDirectives(): void {
    this._loadingService.register('overlayStarSyntax');
    this.createObservableList();
  }

  createObservableList(): void {
    this.listObservableDisabled = true;
    this.listObservable = new Observable<any[]>((subscriber: Subscriber<any[]>) => {
      setTimeout(() => {
        subscriber.next(this.itemList);
        this.listObservableDisabled = false;
      }, 3000);
    });
  }
}
