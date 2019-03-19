import { Directive, HostListener, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[tdFullScreen]',
})
export class TdFullscreenDirective {
  private _webview: any;

  @Input() tdFullScreen: HTMLDivElement;
  @Input() tdEscapeKey?: String;

  @HostListener('click', ['$event']) onClick(event: MouseEvent): void {
    this.showFullScreenEditor();
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(
    event: KeyboardEvent,
  ): void {
    if (event.key === this.tdEscapeKey) {
      this.exitFullScreenEditor();
    }
  }

  /**
   * showFullScreenEditor request for full screen of Code Editor based on its browser type.
   */

  private showFullScreenEditor(): void {
    if (this.tdFullScreen) {
      if (this._webview) {
        this._webview.send('showFullScreenEditor');
      } else {
        const codeEditorElement: HTMLDivElement = this
          .tdFullScreen as HTMLDivElement;
        const fullScreenMap: Object = {
          // Chrome
          requestFullscreen: () => codeEditorElement.requestFullscreen(),
          // Safari
          webkitRequestFullscreen: () =>
            (<any>codeEditorElement).webkitRequestFullscreen(),
          // IE
          msRequestFullscreen: () =>
            (<any>codeEditorElement).msRequestFullscreen(),
          // Firefox
          mozRequestFullScreen: () =>
            (<any>codeEditorElement).mozRequestFullScreen(),
        };

        for (const handler of Object.keys(fullScreenMap)) {
          if (codeEditorElement[handler]) {
            fullScreenMap[handler]();
          }
        }
      }
    }
  }

  /**
   * exitFullScreenEditor request to exit full screen of Code Editor based on its browser type.
   */

  private exitFullScreenEditor(): void {
    if (this.tdFullScreen) {
      if (this._webview) {
        this._webview.send('exitFullScreenEditor');
      } else {
        const exitFullScreenMap: object = {
          // Chrome
          exitFullscreen: () => document.exitFullscreen(),
          // Safari
          webkitExitFullscreen: () => (<any>document).webkitExitFullscreen(),
          // Firefox
          mozCancelFullScreen: () => (<any>document).mozCancelFullScreen(),
          // IE
          msExitFullscreen: () => (<any>document).msExitFullscreen(),
        };

        for (const handler of Object.keys(exitFullScreenMap)) {
          if (document[handler]) {
            exitFullScreenMap[handler]();
          }
        }
      }
    }
  }
}
