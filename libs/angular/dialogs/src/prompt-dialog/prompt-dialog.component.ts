import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  NgZone,
} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'td-prompt-dialog',
  templateUrl: './prompt-dialog.component.html',
  styleUrls: ['./prompt-dialog.component.scss'],
})
export class TdPromptDialogComponent implements AfterViewInit {
  title?: string;
  message?: string;
  value?: string;
  cancelButton = 'CANCEL';
  acceptButton = 'ACCEPT';

  @ViewChild('input', { static: true }) _input!: ElementRef<HTMLElement>;

  constructor(
    private _ngZone: NgZone,
    private _dialogRef: MatDialogRef<TdPromptDialogComponent>
  ) {}

  ngAfterViewInit(): void {
    this._ngZone.runOutsideAngular(() =>
      // Note: `element.focus()` causes re-layout and this may lead to frame drop on slower devices.
      // `Promise` is a microtask and microtask are executed within the current rendering frame.
      // Animation tasks are executed within the next rendering frame.
      // We focus input once everything is rendered and good to go.
      requestAnimationFrame(() => this._input.nativeElement.focus())
    );
  }

  /**
   * Method executed when input is focused
   * Selects all text
   */
  handleInputFocus(): void {
    (<HTMLInputElement>this._input.nativeElement).select();
  }

  cancel(): void {
    this._dialogRef.close();
  }

  accept(): void {
    this._dialogRef.close(this.value);
  }
}
