import {
  Component,
  Directive,
  Input,
  Renderer2,
  ElementRef,
  AfterViewInit,
  ViewContainerRef,
  TemplateRef,
  ViewChild,
  HostBinding,
  HostListener,
  ChangeDetectorRef,
  inject,
} from '@angular/core';

import { tdCollapseAnimation } from './collapse.animation';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Directive({
  selector: '[tdMessageContainer]',
})
export class TdMessageContainerDirective {
  viewContainer = inject(ViewContainerRef);
}

@Component({
  selector: 'td-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  animations: [tdCollapseAnimation],
  imports: [CommonModule, MatIconModule, TdMessageContainerDirective],
})
export class TdMessageComponent implements AfterViewInit {
  private _renderer = inject(Renderer2);
  private _changeDetectorRef = inject(ChangeDetectorRef);
  private _elementRef = inject(ElementRef);

  private _color!: string;
  private _opened = true;
  private _hidden = false;
  private _animating = false;
  private _initialized = false;

  @ViewChild(TdMessageContainerDirective, { static: true })
  _childElement?: TdMessageContainerDirective;
  @ViewChild(TemplateRef) _template!: TemplateRef<any>;

  /**
   * Binding host to tdCollapse animation
   */
  @HostBinding('@tdCollapse')
  get collapsedAnimation(): any {
    return { value: !this._opened, duration: 100 };
  }

  /**
   * Binding host to display style when hidden
   */
  @HostBinding('style.display')
  get hidden(): string {
    return this._hidden ? 'none' : '';
  }

  /**
   * label: string
   *
   * Sets the label of the message.
   */
  @Input() label?: string;

  /**
   * sublabel?: string
   *
   * Sets the sublabel of the message.
   */
  @Input() sublabel?: string;

  /**
   * icon?: string
   *
   * The icon to be displayed before the title.
   * Defaults to `info_outline` icon
   */
  @Input() icon?: string = 'info_outline';

  /**
   * color?: primary | accent | warn
   *
   * Sets the color of the message.
   * Can also use any material color: purple | light-blue, etc.
   */
  @Input()
  set color(color: string) {
    this._renderer.removeClass(
      this._elementRef.nativeElement,
      'mat-' + this._color,
    );
    this._renderer.removeClass(
      this._elementRef.nativeElement,
      'bgc-' + this._color + '-100',
    );
    this._renderer.removeClass(
      this._elementRef.nativeElement,
      'tc-' + this._color + '-700',
    );
    if (color === 'primary' || color === 'accent' || color === 'warn') {
      this._renderer.addClass(this._elementRef.nativeElement, 'mat-' + color);
    } else {
      this._renderer.addClass(
        this._elementRef.nativeElement,
        'bgc-' + color + '-100',
      );
      this._renderer.addClass(
        this._elementRef.nativeElement,
        'tc-' + color + '-700',
      );
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
  @Input()
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

  constructor() {
    this._renderer.addClass(this._elementRef.nativeElement, 'td-message');
  }

  /**
   * Detach element when close animation is finished to set animating state to false
   * hidden state to true and detach element from DOM
   */
  @HostListener('@tdCollapse.done')
  animationDoneListener(): void {
    if (!this._opened) {
      this._hidden = true;
      this._detach();
    }
    this._animating = false;
    this._changeDetectorRef.markForCheck();
  }

  /**
   * Initializes the component and attaches the content.
   */
  ngAfterViewInit(): void {
    Promise.resolve(undefined).then(() => {
      if (this._opened) {
        this._attach();
      }
      this._initialized = true;
    });
  }

  /**
   * Renders the message on screen
   * Validates if there is an animation currently and if its already opened
   */
  open(): void {
    if (!this._opened && !this._animating) {
      this._opened = true;
      this._attach();
      this._startAnimationState();
    }
  }

  /**
   * Removes the message content from screen.
   * Validates if there is an animation currently and if its already closed
   */
  close(): void {
    if (this._opened && !this._animating) {
      this._opened = false;
      this._startAnimationState();
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

  /**
   * Method to set the state before starting an animation
   */
  private _startAnimationState(): void {
    this._animating = true;
    this._hidden = false;
    this._changeDetectorRef.markForCheck();
  }

  /**
   * Method to attach template to DOM
   */
  private _attach(): void {
    this._childElement?.viewContainer.createEmbeddedView(this._template);
    this._changeDetectorRef.markForCheck();
  }

  /**
   * Method to detach template from DOM
   */
  private _detach(): void {
    this._childElement?.viewContainer.clear();
    this._changeDetectorRef.markForCheck();
  }
}
