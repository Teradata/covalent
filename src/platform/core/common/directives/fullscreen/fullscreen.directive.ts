import { Directive, HostListener, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

interface FsDocument extends HTMLDocument {
  fullscreenElement: Element;
  webkitExitFullscreen: () => void;
  mozCancelFullScreen: () => void;
  msExitFullscreen: () => void;
}

@Directive({
  selector: '[tdFullScreen]',
  exportAs: 'tdFullScreen',
})
export class TdFullscreenDirective {
  fullScreenIsActive: boolean = false;
  constructor(@Inject(DOCUMENT) private _document: FsDocument, private _el: ElementRef) {}

  @HostListener('document:fullscreenchange', ['$event']) public fsChangeHandler(event: Event): void {
    this.fullScreenIsActive = event.srcElement === this._document.fullscreenElement ? true : false;
  }

  public toggleFullScreen(): void {
    this._document.fullscreenElement === this._el.nativeElement ? this.exitFullScreen() : this.enterFullScreen();
  }

  public enterFullScreen(): void {
    const { _document: { fullscreenElement }, _el: { nativeElement } }: TdFullscreenDirective = this;
    const enterFullScreenMap: object = {
      requestFullscreen: () => nativeElement.requestFullscreen(), // Chrome
      webkitRequestFullscreen: () => nativeElement.webkitRequestFullscreen(), // Safari 
      mozRequestFullScreen: () => nativeElement.mozRequestFullScreen(), // Firefox
      msRequestFullscreen: () => nativeElement.msRequestFullscreen(), // IE
    };

    for (const handler of Object.keys(enterFullScreenMap)) {
      if (nativeElement[handler] && !fullscreenElement) {
        enterFullScreenMap[handler]();
      }
    }
  }

  public exitFullScreen(): void {
    const { _document, _el: { nativeElement } }: TdFullscreenDirective = this;
    const exitFullScreenMap: object = {
      exitFullscreen: () => _document.exitFullscreen(), // Chrome
      webkitExitFullscreen: () => _document.webkitExitFullscreen(), // Safari
      mozCancelFullScreen: () => _document.mozCancelFullScreen(), // Firefox
      msExitFullscreen: () => _document.msExitFullscreen(), // IE
    };

    for (const handler of Object.keys(exitFullScreenMap)) {
      if (_document[handler] && _document.fullscreenElement === nativeElement) {
        exitFullScreenMap[handler]();
      }
    }
  }
}
