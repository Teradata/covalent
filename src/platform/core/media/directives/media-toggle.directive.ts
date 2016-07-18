import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { Renderer } from '@angular/core';
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
   * tdMediaToggle: MediaQuery
   * Toggles attributes, classes and styles if query is matched or not'.
   */
  @Input('tdMediaToggle')
  set query(query: string) {
    if (!query) {
      throw 'Query needed for [tdMediaToggle] directive.';
    }
    this._query = query;
  }

  /**
   * attributes: {[key: string]: string}
   * Attributes to be toggled'.
   */
  @Input('mediaAttributes')
  set attributes(attributes: any) {
    this._attributes = attributes;
  }

  /**
   * classes: string[]
   * CSS Classes to be toggled'.
   */
  @Input('mediaClasses')
  set classes(classes: string[]) {
    this._classes = classes;
  }

  /**
   * styles: {[key: string]: string}
   * CSS Styles to be toggled'.
   */
  @Input('mediaStyles')
  set styles(styles: any) {
    this._styles = styles;
  }

  constructor(private _renderer: Renderer, private _elementRef: ElementRef, private _mediaService: TdMediaService) { }

  ngOnInit(): void {
    this._mediaChange(this._mediaService.evaluate(this._query));
    this._subscription = this._mediaService.register(this._query).subscribe((matches: boolean) => {
      this._mediaChange(matches);
    });
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  private _mediaChange(matches: boolean): void {
    this._matches = matches;
    this._changeAttributes();
    this._changeClasses();
    this._changeStyles();
  }

  private _changeAttributes(): void {
    for (let attr in this._attributes) {
      this._renderer.setElementAttribute(this._elementRef.nativeElement, attr,
                                         this._matches ? this._attributes[attr] : undefined);
    }
  }

  private _changeClasses(): void {
    this._classes.forEach((className: string) => {
      this._renderer.setElementClass(this._elementRef.nativeElement, className, this._matches);
    });
  }

  private _changeStyles(): void {
    for (let style in this._styles) {
      this._renderer.setElementStyle(this._elementRef.nativeElement, style,
                                         this._matches ? this._styles[style] : undefined);
    }
  }

}
