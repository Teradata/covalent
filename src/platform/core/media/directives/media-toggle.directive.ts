import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { TdMediaService } from '../services/media.service';

@Directive({
  selector: '[tdMediaToggle]',
})
export class TdMediaToggleDirective implements OnInit, OnDestroy {

  private _subscription: Subscription;

  private _query: string;
  private _matches: boolean = false;
  private _attributes: {[key: string]: string} = {};
  private _styles: {[key: string]: string} = {};
  private _classes: string[] = [];

  /**
   * tdMediaToggle: string
   * Media query used to evaluate screen/window size.
   * Toggles attributes, classes and styles if media query is matched.
   */
  @Input('tdMediaToggle')
  set query(query: string) {
    if (!query) {
      throw new Error('Query needed for [tdMediaToggle] directive.');
    }
    this._query = query;
  }

  /**
   * mediaAttributes: {[key: string]: string}
   * Attributes to be toggled when media query matches.
   */
  @Input('mediaAttributes')
  set attributes(attributes: any) {
    this._attributes = attributes;
  }

  /**
   * mediaClasses: string[]
   * CSS Classes to be toggled when media query matches.
   */
  @Input('mediaClasses')
  set classes(classes: string[]) {
    this._classes = classes;
  }

  /**
   * mediaStyles: {[key: string]: string}
   * CSS Styles to be toggled when media query matches.
   */
  @Input('mediaStyles')
  set styles(styles: any) {
    this._styles = styles;
  }

  constructor(private _renderer: Renderer2, private _elementRef: ElementRef, private _mediaService: TdMediaService) { }

  ngOnInit(): void {
    this._mediaChange(this._mediaService.query(this._query));
    this._subscription = this._mediaService.registerQuery(this._query).subscribe((matches: boolean) => {
      this._mediaChange(matches);
    });
  }

  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }

  private _mediaChange(matches: boolean): void {
    this._matches = matches;
    this._changeAttributes();
    this._changeClasses();
    this._changeStyles();
  }

  private _changeAttributes(): void {
    for (let attr in this._attributes) {
      if (this._matches) {
        this._renderer.setAttribute(this._elementRef.nativeElement, attr, this._attributes[attr]);
      } else {
        this._renderer.removeAttribute(this._elementRef.nativeElement, attr);
      }
    }
  }

  private _changeClasses(): void {
    this._classes.forEach((className: string) => {
      if (this._matches) {
        this._renderer.addClass(this._elementRef.nativeElement, className);
      } else {
        this._renderer.removeClass(this._elementRef.nativeElement, className);
      }
    });
  }

  private _changeStyles(): void {
    for (let style in this._styles) {
      if (this._matches) {
        this._renderer.setStyle(this._elementRef.nativeElement, style, this._styles[style]);
      } else {
        this._renderer.removeStyle(this._elementRef.nativeElement, style);
      }
    }
  }

}
