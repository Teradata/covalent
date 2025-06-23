import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import {
  LoadingMode,
  LoadingStrategy,
  LoadingType,
  TdLoadingService,
} from '@covalent/core/loading';
import { slideInUpAnimation } from '../../../../app.animations';

@Component({
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'loading-demo',
  styleUrls: ['./loading.component.scss'],
  templateUrl: './loading.component.html',
  animations: [slideInUpAnimation],
})
export class LoadingDemoComponent {
  private _loadingService = inject(TdLoadingService);

  overlayStarSyntax = false;
  loadingMode = LoadingMode;
  loadingStrategy = LoadingStrategy;
  loadingType = LoadingType;

  toggleOverlayStarSyntax(): void {
    this.overlayStarSyntax = !this.overlayStarSyntax;
    if (this.overlayStarSyntax) {
      this._loadingService.register('overlayStarSyntax');
    } else {
      this._loadingService.resolve('overlayStarSyntax');
    }
  }
}
