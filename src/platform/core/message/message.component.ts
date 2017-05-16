import { Component, Directive, Input, Renderer2, ElementRef, AfterViewInit, ViewContainerRef, TemplateRef, ViewChild,
         HostBinding, ChangeDetectorRef } from '@angular/core';

@Directive({
  selector: '[tdMessageContainer]',
})
export class TdMessageContainerDirective {
  constructor(public viewContainer: ViewContainerRef) { }
}

@Component({
  selector: 'td-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class TdMessageComponent implements AfterViewInit {

  private _color: string;
  private _opened: boolean = true;
  private _initialized: boolean = false;

  @ViewChild(TdMessageContainerDirective) _childElement: TdMessageContainerDirective;
  @ViewChild(TemplateRef) _template: TemplateRef<any>;

  @HostBinding('style.display')
  get hidden(): string {
    return !this._opened ? 'none' : undefined;
  }

  /**
   * label: string
   *
   * Sets the label of the message.
   */
  @Input('label') label: string;

  /**
   * sublabel?: string
   *
   * Sets the sublabel of the message.
   */
  @Input('sublabel') sublabel: string;

  /**
   * icon?: string
   *
   * The icon to be displayed before the title.
   * Defaults to `info_outline` icon
   */
  @Input('icon') icon: string = 'info_outline';

  /**
   * color?: primary | accent | warn
   *
   * Sets the color of the message.
   * Can also use any material color: purple | light-blue, etc.
   */
  @Input('color')
  set color(color: string) {
    this._renderer.removeClass(this._elementRef.nativeElement, 'mat-' + this._color);
    this._renderer.removeClass(this._elementRef.nativeElement, 'bgc-' + this._color + '-100');
    this._renderer.removeClass(this._elementRef.nativeElement, 'tc-' + this._color + '-700');
    if (color === 'primary' || color === 'accent' || color === 'warn') {
      this._renderer.addClass(this._elementRef.nativeElement, 'mat-' + color);
    } else {
      this._renderer.addClass(this._elementRef.nativeElement, 'bgc-' + color + '-100');
      this._renderer.addClass(this._elementRef.nativeElement, 'tc-' + color + '-700');
    }
    this._color = color;
    this._changeDetectorRef.markForCheck();
  }
  get color(): string {
    return this._color;
  }

  /**
   * opened?: boolean
   *
   * Shows or hiddes the message depending on its value.
   * Defaults to 'true'.
   */
  @Input('opened')
  set opened(opened: boolean) {
    if (this._initialized) {
      if (opened) {
        this.open();
      } else {
        this.close();
      }
    } else {
      this._opened = opened;
    }
  }
  get opened(): boolean {
    return this._opened;
  }

  constructor(private _renderer: Renderer2,
              private _changeDetectorRef: ChangeDetectorRef,
              private _elementRef: ElementRef) {
    this._renderer.addClass(this._elementRef.nativeElement, 'td-message');
  }

  /**
   * Initializes the component and attaches the content if [opened] was true.
   */
  ngAfterViewInit(): void {
    Promise.resolve(undefined).then(() => {
      if (this._opened) {
        this._childElement.viewContainer.createEmbeddedView(this._template);
        this._changeDetectorRef.markForCheck();
      }
      this._initialized = true;
    });
  }

  /**
   * Renders the message on screen.
   */
  open(): void {
    if (!this._opened) {
      this._opened = true;
      this._childElement.viewContainer.createEmbeddedView(this._template);
      this._changeDetectorRef.markForCheck();
    }
  }

  /**
   * Removes the message content from screen.
   */
  close(): void {
    if (this._opened) {
      this._opened = false;
      this._childElement.viewContainer.clear();
      this._changeDetectorRef.markForCheck();
    }
  }

  /**
   * Toggles between open and close depending on state.
   */
  toggle(): void {
    if (this._opened) {
      this.close();
    } else {
      this.open();
    }
  }
}
