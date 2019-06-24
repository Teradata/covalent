import { Directive, HostListener, Input, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/common";
@Directive({
  selector: '[tdFullScreen]',
  exportAs: 'tdFullScreen'
})
export class TdFullscreenDirective {
  @Input() tdEscapeKey?: String;
  fullScreenIsActive: boolean = false;
  constructor(@Inject(DOCUMENT) private document: Document, private el: ElementRef){}

  @HostListener('document:keydown', ['$event']) onKeydownHandler(
    event: KeyboardEvent,
  ): void {
    if (event.key === this.tdEscapeKey) {
      this.exitFullScreen();
    }
  }

  @HostListener('document:fullscreenchange') fsChangeHandler(): void {
    this.fullScreenIsActive = !this.fullScreenIsActive;
  }

  public toggleFullScreen(): void {
    this.fullScreenIsActive ? this.exitFullScreen() : this.enterFullScreen();
  }

  public enterFullScreen(): void {
    const element: HTMLElement = this.el.nativeElement;
    const enterFullScreenMap: Object = {
      // Chrome
      requestFullscreen: () => element.requestFullscreen(),
      // Safari
      webkitRequestFullscreen: () => (<any>element).webkitRequestFullscreen(),
      // IE
      msRequestFullscreen: () => (<any>element).msRequestFullscreen(),
      // Firefox
      mozRequestFullScreen: () => (<any>element).mozRequestFullScreen(),
    };

    for (const handler of Object.keys(enterFullScreenMap)) {
      if (element[handler]) {
        enterFullScreenMap[handler]();
      }
    }
  }

  private exitFullScreen(): void {
    const exitFullScreenMap: object = {
      // Chrome
      exitFullscreen: () => this.document.exitFullscreen(),
      // Safari
      webkitExitFullscreen: () => (<any>this.document).webkitExitFullscreen(),
      // Firefox
      mozCancelFullScreen: () => (<any>this.document).mozCancelFullScreen(),
      // IE
      msExitFullscreen: () => (<any>this.document).msExitFullscreen(),
    };

    for (const handler of Object.keys(exitFullScreenMap)) {
      if (this.document[handler]) {
        exitFullScreenMap[handler]();
      }
    }
  }
}
