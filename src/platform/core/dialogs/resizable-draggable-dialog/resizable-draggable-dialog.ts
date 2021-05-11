import { Renderer2 } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DragRef } from '@angular/cdk/drag-drop';
import { merge, Subscription, fromEvent } from 'rxjs';
import { Point } from '@angular/cdk/drag-drop/drag-ref';

enum corners {
  topRight = 'topRight',
  bottomRight = 'bottomRight',
  bottomLeft = 'bottomLeft',
  topLeft = 'topLeft',
}
enum cursors {
  nesw = 'nesw-resize',
  nwse = 'nwse-resize',
}
enum verticalAlignment {
  top = 'top',
  bottom = 'bottom',
}
enum horizontalAlignment {
  right = 'right',
  left = 'left',
}

const cornerWidth: string = '16px';
const offset: string = '0px';
const minWidth: number = 200;
const minHeight: number = 200;

function getPixels(sizeString: string): number {
  return parseFloat((sizeString || '').replace('px', ''));
}

function clamp(min: number, num: number, max: number): number {
  return Math.min(Math.max(num, min), max);
}

export class ResizableDraggableDialog {
  cornerElements: HTMLElement[] = [];
  pointerDownSubs: Subscription[] = [];

  constructor(
    private _document: any,
    private _renderer2: Renderer2,
    private _dialogRef: MatDialogRef<any>,
    private _dragRef: DragRef,
  ) {
    this._initialPositionReset();
    this._attachCorners();
  }

  public attach(): void {
    this.detach();
    this._attachCorners();
  }

  public detach(): void {
    this.pointerDownSubs.forEach((sub: Subscription) => sub.unsubscribe());
    this.pointerDownSubs = [];
    this.cornerElements.forEach((elem: HTMLElement) => this._renderer2.removeChild(this._getDialogWrapper(), elem));
    this.cornerElements = [];
  }

  private _getDialogWrapper(): HTMLElement {
    return (<HTMLElement>this._document.getElementById(this._dialogRef.id) || {}).parentElement;
  }

  private _getViewportDimensions(): ClientRect {
    return this._getDialogWrapper().parentElement.getBoundingClientRect();
  }

  private _getDialogWrapperDimensions(): { width: number; height: number } {
    const dimensions: CSSStyleDeclaration = getComputedStyle(this._getDialogWrapper());
    return {
      width: getPixels(dimensions.width),
      height: getPixels(dimensions.height),
    };
  }

  private _initialPositionReset(): void {
    const { right: viewportWidth, bottom: viewportHeight }: ClientRect = this._getViewportDimensions();
    const { width, height } = this._getDialogWrapperDimensions();
    const {
      marginRight: originalDialogRight,
      marginLeft: originalDialogLeft,
      marginBottom: originalDialogBottom,
      marginTop: originalDialogTop,
    } = this._getDialogWrapper().style;
    let x: number;
    if (originalDialogLeft) {
      x = getPixels(originalDialogLeft);
    } else if (originalDialogRight) {
      x = viewportWidth - getPixels(originalDialogRight) - width;
    } else {
      x = (viewportWidth - width) / 2;
    }
    let y: number;
    if (originalDialogTop) {
      y = getPixels(originalDialogTop);
    } else if (originalDialogBottom) {
      y = viewportHeight - getPixels(originalDialogBottom) - height;
    } else {
      y = (viewportHeight - height) / 2;
    }
    // use drag ref's mechanisms for positioning instead of the dialog's
    this._dialogRef.updatePosition({ top: '0px', right: '0px', bottom: '0px', left: '0px' });
    this._dragRef.setFreeDragPosition({ x, y });
  }

  private _attachCorners(): void {
    Object.values(corners).forEach((corner: corners) => {
      const element: HTMLElement = this._renderer2.createElement('div');
      this.cornerElements = [...this.cornerElements, element];
      this._renderer2.setStyle(element, 'position', 'absolute');
      this._renderer2.setStyle(element, 'width', cornerWidth);
      this._renderer2.setStyle(element, 'height', cornerWidth);
      this._renderer2.appendChild(this._getDialogWrapper(), element);

      let cursor: cursors;
      let topBottom: verticalAlignment;
      let rightLeft: horizontalAlignment;

      if (corner === corners.topRight) {
        cursor = cursors.nesw;
        topBottom = verticalAlignment.top;
        rightLeft = horizontalAlignment.right;
      } else if (corner === corners.bottomRight) {
        cursor = cursors.nwse;
        topBottom = verticalAlignment.bottom;
        rightLeft = horizontalAlignment.right;

        const icon: HTMLElement = this._renderer2.createElement('i');
        this._renderer2.addClass(icon, 'material-icons');
        this._renderer2.appendChild(icon, this._renderer2.createText('filter_list'));
        this._renderer2.appendChild(element, icon);
        this._renderer2.setStyle(icon, 'transform', `rotate(${315}deg) translate(0px, ${offset})`);
        this._renderer2.setStyle(icon, 'font-size', cornerWidth);
      } else if (corner === corners.bottomLeft) {
        cursor = cursors.nesw;
        topBottom = verticalAlignment.bottom;
        rightLeft = horizontalAlignment.left;
      } else if (corner === corners.topLeft) {
        cursor = cursors.nwse;
        topBottom = verticalAlignment.top;
        rightLeft = horizontalAlignment.left;
      }
      this._renderer2.setStyle(element, topBottom, offset);
      this._renderer2.setStyle(element, rightLeft, offset);
      this._renderer2.setStyle(element, 'cursor', cursor);

      const pointerDownSub: Subscription = fromEvent(element, 'pointerdown').subscribe((event: PointerEvent) => {
        this._handleMouseDown(event, corner);
      });
      this.pointerDownSubs = [...this.pointerDownSubs, pointerDownSub];
    });
  }

  private _handleMouseDown(event: PointerEvent, corner: corners): void {
    this._renderer2.setStyle(<HTMLElement>this._document.body, 'user-select', 'none');
    const { width: originalWidth, height: originalHeight } = this._getDialogWrapperDimensions();
    const originalMouseX: number = event.pageX;
    const originalMouseY: number = event.pageY;
    const { x: currentTransformX, y: currentTransformY }: Point = this._dragRef.getFreeDragPosition();
    const { bottom: distanceFromBottom, right: distanceFromRight }: ClientRect =
      this._getDialogWrapper().getBoundingClientRect();
    const { right: viewportWidth, bottom: viewportHeight }: ClientRect = this._getViewportDimensions();

    const mouseMoveSub: Subscription = fromEvent(window, 'pointermove').subscribe((e: PointerEvent) => {
      e.preventDefault(); // prevent highlighting of text when dragging

      const yDelta: number = clamp(0, e.pageY, viewportHeight) - originalMouseY;
      const xDelta: number = clamp(0, e.pageX, viewportWidth) - originalMouseX;
      let newHeight: number;
      let newWidth: number;
      let newTransformY: number = 0;
      let newTransformX: number = 0;

      // top right
      if (corner === corners.topRight) {
        newHeight = clamp(minHeight, originalHeight - yDelta, viewportHeight);
        newWidth = clamp(minWidth, originalWidth + xDelta, viewportWidth);
        newTransformY = clamp(0, currentTransformY + yDelta, distanceFromBottom - newHeight);
        newTransformX = currentTransformX;
      }
      // bottom right
      else if (corner === corners.bottomRight) {
        newHeight = clamp(minHeight, originalHeight + yDelta, viewportHeight);
        newWidth = clamp(minWidth, originalWidth + xDelta, viewportWidth);
        newTransformY = currentTransformY;
        newTransformX = currentTransformX;
      }
      // bottom left
      else if (corner === corners.bottomLeft) {
        newHeight = clamp(minHeight, originalHeight + yDelta, viewportHeight);
        newWidth = clamp(minWidth, originalWidth - xDelta, viewportWidth);
        newTransformY = currentTransformY;
        newTransformX = clamp(0, currentTransformX + xDelta, distanceFromRight - newWidth);
      }
      // top left
      else if (corner === corners.topLeft) {
        newHeight = clamp(minHeight, originalHeight - yDelta, viewportHeight);
        newWidth = clamp(minWidth, originalWidth - xDelta, viewportWidth);

        newTransformX = clamp(0, currentTransformX + xDelta, distanceFromRight - newWidth);
        newTransformY = clamp(0, currentTransformY + yDelta, distanceFromBottom - newHeight);
      }
      this._dialogRef.updateSize(`${newWidth}px`, `${newHeight}px`);
      this._dragRef.setFreeDragPosition({
        x: newTransformX,
        y: newTransformY,
      });
    });

    const mouseUpSub: Subscription = merge(
      fromEvent(window, 'pointerup'),
      fromEvent(window, 'pointercancel'),
    ).subscribe(() => {
      this._renderer2.removeStyle(<HTMLElement>this._document.body, 'user-select');
      mouseMoveSub.unsubscribe();
      mouseUpSub.unsubscribe();
    });
  }
}
