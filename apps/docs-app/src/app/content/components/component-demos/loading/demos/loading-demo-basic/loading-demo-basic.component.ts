import { Component, inject } from '@angular/core';
import {
  LoadingMode,
  LoadingStrategy,
  LoadingType,
  TdLoadingService,
} from '@covalent/core/loading';

@Component({
  standalone: false,
  selector: 'loading-demo-basic',
  styleUrls: ['./loading-demo-basic.component.scss'],
  templateUrl: './loading-demo-basic.component.html',
})
export class LoadingDemoBasicComponent {
  private _loadingService = inject(TdLoadingService);

  loadingMode = LoadingMode;
  loadingStrategy = LoadingStrategy;
  loadingType = LoadingType;

  overlayStarSyntax = false;

  toggleOverlayStarSyntax(): void {
    this.overlayStarSyntax = !this.overlayStarSyntax;
    if (this.overlayStarSyntax) {
      this._loadingService.register('overlayStarSyntax');
    } else {
      this._loadingService.resolve('overlayStarSyntax');
    }
  }
}
