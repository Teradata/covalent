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
