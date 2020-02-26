import { Component, ChangeDetectionStrategy } from '@angular/core';

import { slideInUpAnimation } from '../../../../app.animations';
import { TdLoadingService } from '../../../../../platform/core/loading';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'loading-demo',
  styleUrls: ['./loading.component.scss'],
  templateUrl: './loading.component.html',
  animations: [slideInUpAnimation],
  preserveWhitespaces: true,
})
export class LoadingDemoComponent {
  overlayStarSyntax: boolean = false;

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
