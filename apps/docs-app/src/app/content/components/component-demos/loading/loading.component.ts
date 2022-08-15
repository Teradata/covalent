import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  LoadingMode,
  LoadingStrategy,
  LoadingType,
  TdLoadingService,
} from '@covalent/core/loading';
import { slideInUpAnimation } from '../../../../app.animations';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'loading-demo',
  styleUrls: ['./loading.component.scss'],
  templateUrl: './loading.component.html',
  animations: [slideInUpAnimation],
})
export class LoadingDemoComponent {
  overlayStarSyntax = false;
  loadingMode = LoadingMode;
  loadingStrategy = LoadingStrategy;
  loadingType = LoadingType;

  constructor(private _loadingService: TdLoadingService) {}

  toggleOverlayStarSyntax(): void {
    this.overlayStarSyntax = !this.overlayStarSyntax;
    if (this.overlayStarSyntax) {
      this._loadingService.register('overlayStarSyntax');
    } else {
      this._loadingService.resolve('overlayStarSyntax');
    }
  }
}
