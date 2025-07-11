import { Directive, HostListener, ElementRef, inject } from '@angular/core';
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
  private _document = inject<IFsDocument>(DOCUMENT);
  private _el = inject(ElementRef);

  fullScreenIsActive = false;

  @HostListener('document:fullscreenchange', ['$event'])
  @HostListener('document:webkitfullscreenchange', ['$event'])
  @HostListener('document:mozfullscreenchange', ['$event'])
  @HostListener('document:msfullscreenchange', ['$event'])
  public fsChangeHandler(event: Event): void {
    this.fullScreenIsActive = event.srcElement === this._getFullScreenElement();
  }

  public toggleFullScreen(): void {
    this._getFullScreenElement() === this._el.nativeElement
      ? this.exitFullScreen()
      : this.enterFullScreen();
  }

  public enterFullScreen(): void {
    const {
      _el: { nativeElement },
    }: TdFullscreenDirective = this;
    const enterFullScreenMap: { [key: string]: () => void } = {
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
    const exitFullScreenMap: { [key: string]: () => void } = {
      exitFullscreen: () => this._document.exitFullscreen(), // Chrome
      webkitExitFullscreen: () => this._document.webkitExitFullscreen(), // Safari
      mozCancelFullScreen: () => this._document.mozCancelFullScreen(), // Firefox
      msExitFullscreen: () => this._document.msExitFullscreen(), // IE
    };

    for (const handler of Object.keys(exitFullScreenMap)) {
      if (
        exitFullScreenMap[handler] &&
        this._getFullScreenElement() === this._el.nativeElement
      ) {
        exitFullScreenMap[handler]();
      }
    }
  }

  private _getFullScreenElement(): Element | undefined {
    const tdFullScreenElementMap: { [key: string]: () => Element } = {
      fullscreenElement: () => this._document.fullscreenElement, // Chrome, Opera
      webkitFullscreenElement: () => this._document.webkitFullscreenElement, // Safari
      mozFullscreenElement: () => this._document.mozFullscreenElement, // Firefox
      msFullscreenElement: () => this._document.msFullscreenElement, // IE, Edge
    };
    for (const props of Object.keys(tdFullScreenElementMap)) {
      if (tdFullScreenElementMap[props]) {
        return tdFullScreenElementMap[props]();
      }
    }
    return undefined;
  }
}
