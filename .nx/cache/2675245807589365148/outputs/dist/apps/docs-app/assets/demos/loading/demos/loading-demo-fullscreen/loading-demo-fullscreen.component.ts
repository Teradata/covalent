import { Component } from '@angular/core';
import {
  TdLoadingService,
  LoadingMode,
  LoadingType,
} from '@covalent/core/loading';

@Component({
  selector: 'loading-demo-fullscreen',
  styleUrls: ['./loading-demo-fullscreen.component.scss'],
  templateUrl: './loading-demo-fullscreen.component.html',
})
export class LoadingDemoFullscreenComponent {
  constructor(private _loadingService: TdLoadingService) {
    // optional, only necessary for a custom config
    // used in toggleCustomFullscreenDemo()
    this._loadingService.create({
      name: 'customFullscreenDemo',
      mode: LoadingMode.Indeterminate,
      type: LoadingType.Linear,
      color: 'accent',
    });
  }

  toggleDefaultFullscreenDemo(): void {
    this._loadingService.register();
    setTimeout(() => this._loadingService.resolve(), 1500);
  }

  toggleCustomFullscreenDemo(): void {
    this._loadingService.register('customFullscreenDemo');
    setTimeout(
      () => this._loadingService.resolve('customFullscreenDemo'),
      1500
    );
  }
}
