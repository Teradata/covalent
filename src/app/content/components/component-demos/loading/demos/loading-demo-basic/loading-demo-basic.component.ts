import { Component } from '@angular/core';
import { TdLoadingService } from '@covalent/core/loading';

@Component({
  selector: 'loading-demo-basic',
  styleUrls: ['./loading-demo-basic.component.scss'],
  templateUrl: './loading-demo-basic.component.html',
  preserveWhitespaces: true,
})
export class LoadingDemoBasicComponent {
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
