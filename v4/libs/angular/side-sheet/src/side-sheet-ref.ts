/* tslint:disable */
import { FocusOrigin } from '@angular/cdk/a11y';
import { OverlayRef } from '@angular/cdk/overlay';
import {
  MatDialogRef,
  _MatDialogContainerBase,
} from '@angular/material/dialog';

// Counter for unique dialog ids.
let uniqueId = 0;

// Create a new side sheet ref to change the id of the ref
export class CovalentSideSheetRef<T, R = any> extends MatDialogRef<T, R> {
  constructor(
    public overlayRef: OverlayRef,
    public override _containerInstance: _MatDialogContainerBase,
    override readonly id: string = `td-side-sheet-${uniqueId++}`
  ) {
    super(overlayRef, _containerInstance, id);
  }
}

export function _closeSideSheetVia<R>(
  ref: CovalentSideSheetRef<R>,
  interactionType: FocusOrigin,
  result?: R
) {
  // Some mock dialog ref instances in tests do not have the `_containerInstance` property.
  // For those, we keep the behavior as is and do not deal with the interaction type.
  if (ref._containerInstance !== undefined) {
    ref._containerInstance._closeInteractionType = interactionType;
  }
  return ref.close(result);
}
