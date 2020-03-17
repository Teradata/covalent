import { Directive, HostListener, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

interface IFsDocument extends HTMLDocument {
  fullscreenElement: Element;
  webkitFullscreenElement: Element;
  mozFullscreenElement: Element;
  msFullscreenElement: Element;
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
  constructor(@Inject(DOCUMENT) private _document: IFsDocument, private _el: ElementRef) {}

  @HostListener('document:fullscreenchange', ['$event'])
  @HostListener('document:webkitfullscreenchange', ['$event'])
  @HostListener('document:mozfullscreenchange', ['$event'])
  @HostListener('document:msfullscreenchange', ['$event'])
  public fsChangeHandler(event: Event): void {
    this.fullScreenIsActive = event.srcElement === this._getFullScreenElement();
  }

  public toggleFullScreen(): void {
    this._getFullScreenElement() === this._el.nativeElement ? this.exitFullScreen() : this.enterFullScreen();
  }

  public enterFullScreen(): void {
    const { _el: { nativeElement } }: TdFullscreenDirective = this;
    const enterFullScreenMap: object = {
      requestFullscreen: () => nativeElement.requestFullscreen(), // Chrome
      webkitRequestFullscreen: () => nativeElement.webkitRequestFullscreen(), // Safari 
      mozRequestFullScreen: () => nativeElement.mozRequestFullScreen(), // Firefox
      msRequestFullscreen: () => nativeElement.msRequestFullscreen(), // IE
    };

    for (const handler of Object.keys(enterFullScreenMap)) {
      if (nativeElement[handler]) {
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
      if (_document[handler] && this._getFullScreenElement() === nativeElement) {
        exitFullScreenMap[handler]();
      }
    }
  }

  private _getFullScreenElement(): Element {
    const { _document }: TdFullscreenDirective = this;
    const tdFullScreenElementMap: object = {
      fullscreenElement: () => _document.fullscreenElement, // Chrome, Opera
      webkitFullscreenElement: () => _document.webkitFullscreenElement, // Safari
      mozFullscreenElement: () => _document.mozFullscreenElement, // Firefox
      msFullscreenElement: () => _document.msFullscreenElement, // IE, Edge
    };
    for (const props of Object.keys(tdFullScreenElementMap)) {
      if (_document[props]) {
        return _document[props];
      }
    }
  }
}
