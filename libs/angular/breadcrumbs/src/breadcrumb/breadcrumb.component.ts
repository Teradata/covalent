import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostBinding,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  inject,
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'td-breadcrumb, a[td-breadcrumb]',
  styleUrls: ['./breadcrumb.component.scss'],
  templateUrl: './breadcrumb.component.html',
  imports: [CommonModule, MatIcon, MatTooltipModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TdBreadcrumbComponent implements AfterViewInit {
  private _changeDetectorRef = inject(ChangeDetectorRef);

  private _displayCrumb = true;
  private _width = 0;
  private _displayIcon = true;
  private _separatorIcon = 'chevron_right';
  private _shouldTruncate = false;
  private _maxWidth?: number;

  public elementRef = inject(ElementRef);
  public fullText = '';
  public flexOrder = 0;
  public isCurrentPage = false;

  @HostBinding('attr.aria-current')
  get ariaCurrent(): string | null {
    return this.isCurrentPage ? 'page' : null;
  }

  @HostBinding('class.mdc-button') matButtonClass = true;
  @HostBinding('class.td-breadcrumb') tdBreadCrumbClass = true;

  // Sets the icon url shown between breadcrumbs. Defaults to 'chevron_right'
  public get separatorIcon(): string {
    return this._separatorIcon;
  }
  public set separatorIcon(separatorIcon: string) {
    this._separatorIcon = separatorIcon;
    setTimeout(() => {
      this._changeDetectorRef.markForCheck();
    });
  }

  // Should show the right chevron or not before the label
  public get displayIcon(): boolean {
    return this._displayIcon;
  }
  public set displayIcon(displayIcon: boolean) {
    this._displayIcon = displayIcon;
    setTimeout(() => {
      this._changeDetectorRef.markForCheck();
    });
  }

  get shouldTruncate(): boolean {
    return this._shouldTruncate;
  }

  set shouldTruncate(shouldTruncate: boolean) {
    this._shouldTruncate = shouldTruncate;
    setTimeout(() => {
      this._changeDetectorRef.markForCheck();
    });
  }

  get maxWidth(): number | undefined {
    return this._maxWidth;
  }

  set maxWidth(maxWidth: number | undefined) {
    this._maxWidth = maxWidth;
    setTimeout(() => {
      this._changeDetectorRef.markForCheck();
    });
  }

  get displayCrumb(): boolean {
    return this._displayCrumb;
  }

  /**
   * Whether to display the crumb or not
   */
  set displayCrumb(shouldDisplay: boolean) {
    this._displayCrumb = shouldDisplay;
    setTimeout(() => {
      this._changeDetectorRef.markForCheck();
    });
  }

  /**
   * Width of the DOM element of the crumb
   */
  get width(): number {
    return this._width;
  }

  /**
   * Gets the display style of the crumb
   */
  @HostBinding('style.display')
  get displayBinding(): string | undefined {
    // Set the display to none on the component, just in case the end user is hiding
    // and showing them instead of the component doing itself for reasons like responsive
    return this._displayCrumb ? undefined : 'none';
  }

  @HostBinding('style.max-width.px')
  get maxWidthBinding(): number | undefined {
    return this._shouldTruncate ? this._maxWidth : undefined;
  }

  @HostBinding('style.order')
  get orderBinding(): number {
    return this.flexOrder;
  }

  ngAfterViewInit(): void {
    // set the width from the actual rendered DOM element
    setTimeout(() => {
      this._width = (<HTMLElement>(
        this.elementRef.nativeElement
      )).getBoundingClientRect().width;
      const textSpan = this.elementRef.nativeElement.querySelector(
        '.td-breadcrumb-text',
      );
      this.fullText = textSpan.textContent?.trim() || '';
      this._changeDetectorRef.markForCheck();
    });
  }

  /**
   * Stop click propagation when clicking on icon
   */
  _handleIconClick(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
  }
}
